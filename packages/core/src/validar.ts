// Validação de um conjunto de estações: erros do schema + avisos de qualidade.
//
// ERRO  = a estação não segue o schema (ou quebra uma regra entre estações).
// AVISO = a estação é válida, mas foge do padrão editorial do projeto.

import type { z } from "zod";
import { EstacaoSchema, type Estacao } from "./estacao.ts";
import { grafiaPadraoDoTema } from "./temas.ts";

export interface FonteDeEstacoes {
  arquivo: string;
  estacoes: unknown[];
}

export interface RefEstacao {
  arquivo: string;
  /** Posição dentro do arquivo, começando em 1. */
  posicao: number;
  /** Número da estação no site (posição global, começando em 1). */
  idSite: number;
  titulo: string;
}

export interface Problema {
  nivel: "erro" | "aviso";
  /** Identificador curto da regra, para agrupar (ex.: "schema", "titulo-duplicado"). */
  regra: string;
  mensagem: string;
}

export interface ResultadoEstacao {
  ref: RefEstacao;
  /** Presente só quando a estação passou no schema. */
  estacao?: Estacao;
  problemas: Problema[];
}

export interface Relatorio {
  resultados: ResultadoEstacao[];
  total: number;
  comErro: number;
  comAviso: number;
  semSlug: number;
}

export interface OpcoesDeValidacao {
  /** Confere se um arquivo existe (usado para as fotos). Sem ela, não confere. */
  arquivoExiste?: (caminho: string) => boolean;
}

/** Caminho legível de um problema do Zod: instB.script[3].speech */
function caminhoLegivel(path: readonly PropertyKey[]): string {
  return path
    .map((p, i) => (typeof p === "number" ? `[${p}]` : `${i === 0 ? "" : "."}${String(p)}`))
    .join("");
}

function errosDoSchema(issues: readonly z.core.$ZodIssue[]): Problema[] {
  return issues.map((issue) => {
    const onde = caminhoLegivel(issue.path);
    let mensagem = issue.message;
    if (issue.code === "unrecognized_keys") mensagem = `campo desconhecido: ${issue.keys.join(", ")}`;
    return { nivel: "erro", regra: "schema", mensagem: onde ? `${onde}: ${mensagem}` : mensagem };
  });
}

function fora(n: number, min: number, max: number): boolean {
  return n < min || n > max;
}

/** Avisos de padrão editorial (diretrizes da skill osce-add-cases). */
function avisosDeQualidade(bruta: Record<string, any>, e: Estacao): Problema[] {
  const avisos: Problema[] = [];
  const aviso = (regra: string, mensagem: string) => avisos.push({ nivel: "aviso", regra, mensagem });

  if (typeof bruta.tema === "string" && !grafiaPadraoDoTema(bruta.tema)) {
    aviso("tema-grafia", `tema escrito fora do padrão: "${bruta.tema}"`);
  }

  const tarefas = e.instA.tasks.length;
  if (fora(tarefas, 3, 6)) aviso("tarefas-quantidade", `${tarefas} tarefas na instrução A (padrão: 3 a 6)`);

  const erros = e.instC.criticalErrors.length;
  if (fora(erros, 3, 6)) aviso("erros-criticos-quantidade", `${erros} erros críticos (padrão: 3 a 6)`);

  {
    const dif = e.instC.differentials.length;
    if (fora(dif, 3, 5)) aviso("diferenciais-quantidade", `${dif} diagnósticos diferenciais (padrão: 3 a 5)`);

    const semAtor = /sem ator/i.test(`${e.instA.scenario} ${e.instB.note ?? ""} ${e.instB.actorBehavior ?? ""}`);
    if (!e.instB.script.length && !semAtor) {
      aviso("sem-roteiro", "sem roteiro de falas do paciente (instB.script): a Sala responde só pela ficha");
    }

    const vazios: string[] = [];
    if (!e.instC.context) vazios.push("instC.context");
    if (!e.instC.justify) vazios.push("instC.justify");
    if (!e.instC.expectedAnamnesis?.length) vazios.push("instC.expectedAnamnesis");
    if (!e.instC.expectedPhysical?.length) vazios.push("instC.expectedPhysical");
    if (!e.instC.expectedCommunication?.length) vazios.push("instC.expectedCommunication");
    if (!e.instB.patientProfile) vazios.push("instB.patientProfile");
    if (!e.instB.actorBehavior && !semAtor) vazios.push("instB.actorBehavior");
    if (!e.instB.hiddenInfo?.length && !semAtor) vazios.push("instB.hiddenInfo");
    for (const campo of vazios) aviso("campo-vazio", `${campo} vazio ou ausente`);
  }
  const zerados = e.instD.sections.flatMap((sec) => sec.items).filter((i) => i.score === 0).length;
  if (zerados) aviso("pontuacao-zero", `${zerados} item(ns) de checklist com pontuação zero`);
  return avisos;
}

export function validarEstacoes(fontes: FonteDeEstacoes[], opcoes: OpcoesDeValidacao = {}): Relatorio {
  const resultados: ResultadoEstacao[] = [];
  let idSite = 0;

  for (const fonte of fontes) {
    fonte.estacoes.forEach((bruta, i) => {
      idSite++;
      const obj = (bruta && typeof bruta === "object" ? bruta : {}) as Record<string, any>;
      const ref: RefEstacao = {
        arquivo: fonte.arquivo,
        posicao: i + 1,
        idSite,
        titulo: typeof obj.title === "string" ? obj.title : "(sem título)",
      };
      const r = EstacaoSchema.safeParse(bruta);
      if (!r.success) {
        resultados.push({ ref, problemas: errosDoSchema(r.error.issues) });
        return;
      }
      const problemas = avisosDeQualidade(obj, r.data);
      const src = r.data.instB.photo?.src;
      if (src && opcoes.arquivoExiste && !opcoes.arquivoExiste(src)) {
        problemas.push({ nivel: "erro", regra: "foto-inexistente", mensagem: `foto não encontrada: ${src}` });
      }
      resultados.push({ ref, estacao: r.data, problemas });
    });
  }

  // Regras entre estações
  const porSlug = new Map<string, ResultadoEstacao[]>();
  const porTitulo = new Map<string, ResultadoEstacao[]>();
  for (const r of resultados) {
    if (r.estacao?.slug) porSlug.set(r.estacao.slug, [...(porSlug.get(r.estacao.slug) ?? []), r]);
    const t = r.ref.titulo.trim().toLowerCase();
    porTitulo.set(t, [...(porTitulo.get(t) ?? []), r]);
  }
  for (const [slug, grupo] of porSlug) {
    if (grupo.length < 2) continue;
    for (const r of grupo) {
      const outras = grupo.filter((o) => o !== r).map((o) => `#${o.ref.idSite}`).join(", ");
      r.problemas.push({ nivel: "erro", regra: "slug-duplicado", mensagem: `slug "${slug}" repetido (também em ${outras})` });
    }
  }
  for (const grupo of porTitulo.values()) {
    if (grupo.length < 2) continue;
    for (const r of grupo) {
      const outras = grupo.filter((o) => o !== r).map((o) => `#${o.ref.idSite}`).join(", ");
      r.problemas.push({ nivel: "aviso", regra: "titulo-duplicado", mensagem: `título repetido (também em ${outras})` });
    }
  }

  return {
    resultados,
    total: resultados.length,
    comErro: resultados.filter((r) => r.problemas.some((p) => p.nivel === "erro")).length,
    comAviso: resultados.filter((r) => r.problemas.some((p) => p.nivel === "aviso")).length,
    semSlug: resultados.filter((r) => !r.estacao?.slug).length,
  };
}
