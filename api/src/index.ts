// Servidor de IA da Sala de Simulação (Cloudflare Worker).
//
// Recebe POST /ia com { tipo, casoId, sessao } e devolve o JSON do personagem:
//   tipo "paciente" | "enfermeira" → modelo rápido (IA_MODELO_CONVERSA)
//   tipo "avaliador"               → modelo de avaliação (IA_MODELO_AVALIACAO)
//
// Segurança: o prompt é montado AQUI, a partir da ficha do caso guardada no servidor
// (src/casos-ia.json, gerado por `npm run build:ia` na raiz). A página só envia o id do caso
// e os dados da sessão (falas, hipótese, conduta...), cortados nos limites de LIMITES.
// A resposta é sempre o JSON curto do personagem, então a chave não serve para outros usos.
import Anthropic from "@anthropic-ai/sdk";
import { PROMPTS, SCHEMAS, LIMITES } from "../../sala/ia-prompts.js";
import CASOS from "./casos-ia.json";

interface Env {
  ANTHROPIC_API_KEY: string;       // segredo: npx wrangler secret put ANTHROPIC_API_KEY
  ORIGENS_PERMITIDAS: string;      // ex.: "https://sarardc.github.io"
  IA_MODELO_CONVERSA: string;
  IA_MODELO_AVALIACAO: string;
  ANTHROPIC_BASE_URL?: string;     // só para testes locais
  LIMITE_CONVERSA: RateLimit;      // falas por minuto, por IP
  LIMITE_AVALIACAO: RateLimit;     // avaliações por minuto, por IP
}

type Tipo = keyof typeof PROMPTS;
type Ficha = Parameters<(typeof PROMPTS)[Tipo]>[0];
const FICHAS = CASOS as unknown as Record<string, Ficha>;

const json = (body: unknown, status: number, cors: Record<string, string>) =>
  new Response(JSON.stringify(body), { status, headers: { "content-type": "application/json; charset=utf-8", ...cors } });

function limparSessao(bruta: unknown): Record<string, string> {
  const out: Record<string, string> = {};
  if (!bruta || typeof bruta !== "object") return out;
  for (const [k, lim] of Object.entries(LIMITES)) {
    const v = (bruta as Record<string, unknown>)[k];
    if (v != null) out[k] = String(v).slice(0, lim);
  }
  return out;
}

export default {
  async fetch(req: Request, env: Env): Promise<Response> {
    const origem = req.headers.get("origin") || "";
    const permitidas = env.ORIGENS_PERMITIDAS.split(",").map(s => s.trim()).filter(Boolean);
    const origemOk = permitidas.includes(origem);
    const cors: Record<string, string> = origemOk
      ? { "access-control-allow-origin": origem, "access-control-allow-methods": "POST, OPTIONS", "access-control-allow-headers": "content-type", "access-control-max-age": "86400", vary: "origin" }
      : {};

    const url = new URL(req.url);
    if (url.pathname !== "/ia") return json({ erro: "não encontrado" }, 404, cors);
    if (!origemOk) return json({ erro: "origem não permitida" }, 403, cors);
    if (req.method === "OPTIONS") return new Response(null, { status: 204, headers: cors });
    if (req.method !== "POST") return json({ erro: "use POST" }, 405, cors);

    let corpo: { tipo?: string; casoId?: string; sessao?: unknown };
    try { corpo = await req.json(); } catch { return json({ erro: "JSON inválido" }, 400, cors); }
    const tipo = corpo.tipo as Tipo;
    if (!(tipo in PROMPTS)) return json({ erro: "tipo inválido" }, 400, cors);
    const ficha = FICHAS[String(corpo.casoId)];
    if (!ficha) return json({ erro: "caso não encontrado" }, 404, cors);
    const sessao = limparSessao(corpo.sessao);
    if ((tipo === "paciente" || tipo === "enfermeira") && !sessao.fala?.trim()) return json({ erro: "fala vazia" }, 400, cors);

    const ip = req.headers.get("cf-connecting-ip") || "sem-ip";
    const limitador = tipo === "avaliador" ? env.LIMITE_AVALIACAO : env.LIMITE_CONVERSA;
    const { success } = await limitador.limit({ key: ip });
    if (!success) return json({ erro: "limite de uso atingido, tente de novo em 1 minuto" }, 429, cors);

    const avaliacao = tipo === "avaliador";
    const prompt = PROMPTS[tipo](ficha as never, sessao as never);
    const client = new Anthropic({ apiKey: env.ANTHROPIC_API_KEY, baseURL: env.ANTHROPIC_BASE_URL || undefined, maxRetries: 1 });
    try {
      const resp = await client.beta.messages.create({
        model: avaliacao ? env.IA_MODELO_AVALIACAO : env.IA_MODELO_CONVERSA,
        max_tokens: avaliacao ? 8000 : 2000,
        // conversa precisa responder rápido: esforço baixo; avaliação pensa um pouco mais
        output_config: { effort: avaliacao ? "medium" : "low", format: { type: "json_schema", schema: SCHEMAS[tipo] } },
        messages: [{ role: "user", content: prompt }],
        // se o filtro de segurança recusar por engano (conteúdo médico), outro modelo responde
        ...(avaliacao ? { betas: ["server-side-fallback-2026-07-01"], fallbacks: "default" as const } : {}),
      });
      if (resp.stop_reason === "refusal" || resp.stop_reason === "max_tokens") {
        return json({ erro: "a IA não respondeu (" + resp.stop_reason + ")" }, 502, cors);
      }
      const texto = resp.content.find(b => b.type === "text");
      if (!texto || texto.type !== "text") return json({ erro: "resposta sem texto" }, 502, cors);
      return json(JSON.parse(texto.text), 200, cors);
    } catch (e) {
      if (e instanceof Anthropic.RateLimitError) return json({ erro: "IA sobrecarregada, tente de novo" }, 429, cors);
      if (e instanceof Anthropic.APIError) {
        console.error("Claude API", e.status, e.message);
        return json({ erro: "falha na IA" }, 502, cors);
      }
      console.error("erro inesperado", e);
      return json({ erro: "falha na IA" }, 502, cors);
    }
  },
};
