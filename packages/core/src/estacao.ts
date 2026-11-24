// Schema de uma estação OSCE.
//
// Ele faz duas coisas ao mesmo tempo:
//  1. VALIDA o formato atual dos arquivos em data/*.js (com as variações que
//     existem hoje, como listas escritas como "item 1 | item 2");
//  2. NORMALIZA para um formato único (listas sempre como arrays, tema e nível
//     com id canônico). Esse formato normalizado é o que irá para o banco.
//
// `EstacaoEntrada` = o que está nos arquivos hoje.
// `Estacao`        = o formato normalizado, depois da validação.

import { z } from "zod";
import { ESPECIALIDADES, ehEspecialidade, nivelCanonico, paraId } from "./temas.ts";

// Mensagens de erro do Zod em português do Brasil.
z.config(z.locales.ptBR());

// ---------------------------------------------------------------------------
// Peças reutilizáveis
// ---------------------------------------------------------------------------

/** Texto obrigatório, sem espaços nas pontas. */
const texto = z.string().trim().min(1, { error: "texto vazio" });

/**
 * Lista de itens. Aceita array ou texto separado por "|"
 * ("Item 1 | Item 2") e devolve sempre um array sem itens vazios.
 */
const listaDeTexto = z
  .union([z.string(), z.array(z.string())])
  .transform((v) =>
    (Array.isArray(v) ? v : v.split("|")).map((s) => s.trim()).filter((s) => s.length > 0),
  );

/** Slug: identificador permanente da estação, ex.: "cardio-iam-supra". */
export const SLUG_REGEX = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

const fala = z.strictObject({
  trigger: texto, // quando o paciente fala isso (ex.: "Sobre a dor")
  speech: texto, // o que o paciente fala
});

/** Pontuação de um item de checklist. Zero é aceito, mas gera aviso. */
const pontuacao = z.number().nonnegative({ error: "a pontuação não pode ser negativa" });

const itemDePontuacao = z.strictObject({
  item: texto,
  score: pontuacao,
});

// ---------------------------------------------------------------------------
// Instrução A: o que o candidato lê na porta da estação
// ---------------------------------------------------------------------------

const instA = z.strictObject({
  scenario: texto,
  patient: texto,
  complaint: texto,
  tasks: z.array(texto).min(1, { error: "a estação precisa de ao menos uma tarefa" }),
});

// ---------------------------------------------------------------------------
// Instrução B: material do paciente/ator e impressos entregues
// ---------------------------------------------------------------------------

/** Sinais vitais: "FC" -> "88 bpm". Valores nulos (não aferidos) são removidos. */
const sinaisVitais = z.record(z.string(), z.string().nullable()).transform((vitais) => {
  const saida: Record<string, string> = {};
  for (const [nome, valor] of Object.entries(vitais)) {
    if (valor === null || valor.trim() === "") continue;
    saida[nome === "SatO2" ? "SpO2" : nome] = valor.trim(); // um só nome para saturação
  }
  return saida;
});

const exameLaboratorial = z.strictObject({
  test: texto,
  val: texto,
  ref: z.string().trim(), // pode ficar vazio quando não há referência
  alt: z.boolean(), // true = alterado (aparece destacado)
});

/** Imagem/laudo entregue ao candidato. Hoje pode ser texto ou {title, report}. */
const imagem = z
  .union([z.string(), z.strictObject({ title: texto, report: texto }), z.null()])
  .optional()
  .transform((v) => {
    if (v == null) return null;
    if (typeof v === "string") return v.trim() ? { title: null, report: v.trim() } : null;
    return v;
  });

export const FOTO_SRC_REGEX = /^img\/estacoes\/[a-z0-9-]+\.(?:webp|jpe?g|png)$/;

const foto = z.strictObject({
  src: z.string().regex(FOTO_SRC_REGEX, {
    error: "caminho da foto deve ser img/estacoes/nome-em-minusculas.webp (ou .jpg/.png)",
  }),
  title: texto,
  alt: texto, // descrição para leitores de tela
  caption: texto,
  request: texto, // o que o candidato deve fazer com a foto
});

const instB = z.strictObject({
  vitals: sinaisVitais,
  physicalGeneral: texto,
  physicalSeg: listaDeTexto, // "ABDOME: ... | MMII: ..."
  labs: z.array(exameLaboratorial),
  image: imagem,
  photo: foto.optional(),
  note: z.string().trim().optional(),
  patientProfile: z.string().trim().optional(),
  script: z.array(fala).optional(),
  hiddenInfo: listaDeTexto.optional(),
  actorBehavior: z.string().trim().optional(),
});

// ---------------------------------------------------------------------------
// Instrução C: gabarito do avaliador
// ---------------------------------------------------------------------------

const exameEsperado = z.strictObject({
  exam: texto,
  justify: texto,
  expected: texto,
});

/** Checklist no estilo PEP (formato das 29 primeiras estações). */
const itemPep = z.union([
  z.strictObject({ section: texto, items: z.array(itemDePontuacao).min(1) }),
  itemDePontuacao,
]);

const instC = z.strictObject({
  diagnosis: texto,
  context: z.string().trim(), // vazio gera aviso
  justify: z.string().trim(), // vazio gera aviso
  criticalErrors: z.array(texto),
  differentials: z.array(texto).optional(),
  expectedAnamnesis: listaDeTexto.optional(),
  expectedPhysical: listaDeTexto.optional(),
  expectedExams: z.array(exameEsperado).optional(),
  expectedConduct: listaDeTexto.optional(),
  expectedCommunication: listaDeTexto.optional(),
  // Formato PEP
  pep: z.array(itemPep).optional(),
  script: z.array(fala).optional(),
  // Estações com foto (dermatologia)
  photoDescription: z.string().trim().optional(),
});

// ---------------------------------------------------------------------------
// Instrução D: material de estudo + checklist pontuado
// ---------------------------------------------------------------------------

const itemDeEstudo = z.strictObject({
  item: texto,
  score: pontuacao,
  ref: z.string().trim(), // fonte (Harrison, diretriz...)
});

const secaoDeEstudo = z.union([
  z.strictObject({ h: texto, items: z.array(itemDeEstudo).min(1) }),
  z.strictObject({ h: texto, body: texto }),
]);

const instD = z.strictObject({
  title: texto,
  sections: z.array(secaoDeEstudo).min(1),
});

// ---------------------------------------------------------------------------
// A estação
// ---------------------------------------------------------------------------

const tema = z.string().transform((valor, ctx) => {
  const id = paraId(valor);
  if (!ehEspecialidade(id)) {
    ctx.addIssue({
      code: "custom",
      message: `especialidade desconhecida: "${valor}". Use uma de: ${Object.values(ESPECIALIDADES).join(", ")}. Especialidade nova precisa entrar em packages/core/src/temas.ts`,
    });
    return z.NEVER;
  }
  return id;
});

const nivel = z.string({ error: "nível de dificuldade ausente (use fácil, moderado ou difícil)" }).transform((valor, ctx) => {
  const n = nivelCanonico(valor);
  if (!n) {
    ctx.addIssue({ code: "custom", message: `nível desconhecido: "${valor}" (use fácil, moderado ou difícil)` });
    return z.NEVER;
  }
  return n;
});

export const EstacaoSchema = z
  .strictObject({
    /** Ignorado: o build ainda numera as estações pela posição. */
    id: z.number().optional(),
    /** Identificador permanente. Ainda opcional; será obrigatório. */
    slug: z.string().regex(SLUG_REGEX, { error: "slug inválido: use minúsculas, números e hífens (ex.: cardio-iam-supra)" }).optional(),
    title: texto,
    sub: texto,
    tema,
    topic: texto,
    level: nivel,
    cardAccent: z.string().regex(/^#[0-9a-fA-F]{6}$/, { error: "cor do card deve ser hexadecimal, ex.: #E53935" }),
    // Campos antigos presentes em 2 estações de endocrinologia, sem uso no site.
    time: z.null().optional(),
    type: z.null().optional(),
    comp: z.array(texto).optional(),
    instA,
    instB,
    instC,
    instD,
  })
  .superRefine((e, ctx) => {
    // Estações no formato completo (sem PEP) precisam do núcleo do gabarito.
    // (Exames esperados podem faltar: psiquiatria e medicina legal, por exemplo.)
    if (e.instC.pep) return;
    const exigir = (ok: boolean, path: (string | number)[], message: string) => {
      if (!ok) ctx.addIssue({ code: "custom", path, message });
    };
    exigir(!!e.instC.differentials?.length, ["instC", "differentials"], "faltam os diagnósticos diferenciais");
    exigir(!!e.instC.expectedConduct?.length, ["instC", "expectedConduct"], "falta a conduta esperada");
  });

/** Formato dos arquivos de dados (antes da normalização). */
export type EstacaoEntrada = z.input<typeof EstacaoSchema>;
/** Formato normalizado (depois da validação). */
export type Estacao = z.output<typeof EstacaoSchema>;
