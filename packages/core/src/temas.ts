// Especialidades (o campo `tema` das estações).
//
// Nos arquivos de dados o tema aparece escrito de vários jeitos
// ("nefrologia", "Nefrologia", "Emergencias Neurologicas"). O schema aceita
// qualquer grafia que, sem acento e sem maiúsculas, bata com uma chave daqui,
// e devolve sempre o id canônico (ex.: "emergencias-neurologicas").

export const ESPECIALIDADES = {
  cardiologia: "Cardiologia",
  cirurgia: "Cirurgia",
  "cirurgia-pediatrica": "Cirurgia Pediátrica",
  dermatologia: "Dermatologia",
  "emergencias-neurologicas": "Emergências Neurológicas",
  endocrinologia: "Endocrinologia",
  gastroenterologia: "Gastroenterologia",
  geriatria: "Geriatria",
  ginecologia: "Ginecologia",
  hematologia: "Hematologia",
  infectologia: "Infectologia",
  "medicina-intensiva": "Medicina Intensiva",
  "medicina-legal": "Medicina Legal",
  nefrologia: "Nefrologia",
  neonatologia: "Neonatologia",
  neurologia: "Neurologia",
  obstetricia: "Obstetrícia",
  oftalmologia: "Oftalmologia",
  ortopedia: "Ortopedia",
  otorrinolaringologia: "Otorrinolaringologia",
  "pediatria-geral": "Pediatria Geral",
  pneumologia: "Pneumologia",
  psiquiatria: "Psiquiatria",
  puericultura: "Puericultura",
  urologia: "Urologia",
  vascular: "Vascular",
} as const;

export type EspecialidadeId = keyof typeof ESPECIALIDADES;

/** Tira acentos: "Obstetrícia" -> "Obstetricia". */
export function semAcento(texto: string): string {
  return texto.normalize("NFD").replace(/[̀-ͯ]/g, "");
}

/** "Emergências Neurológicas" -> "emergencias-neurologicas". */
export function paraId(texto: string): string {
  return semAcento(texto).trim().toLowerCase().replace(/\s+/g, "-");
}

export function ehEspecialidade(id: string): id is EspecialidadeId {
  return Object.hasOwn(ESPECIALIDADES, id);
}

/**
 * A grafia está no padrão se for o nome oficial, com ou sem acentos
 * ("Obstetrícia" ou "Obstetricia"). "obstetricia" é aceita, mas gera aviso.
 */
export function grafiaPadraoDoTema(textoOriginal: string): boolean {
  const id = paraId(textoOriginal);
  if (!ehEspecialidade(id)) return false;
  const nome = ESPECIALIDADES[id];
  return textoOriginal === nome || textoOriginal === semAcento(nome);
}

// Nível de dificuldade (sem acento no id; nos arquivos: "fácil", "moderado", "difícil").
export const NIVEIS = ["facil", "moderado", "dificil"] as const;
export type Nivel = (typeof NIVEIS)[number];

export function nivelCanonico(texto: string): Nivel | undefined {
  const n = semAcento(texto).trim().toLowerCase();
  return (NIVEIS as readonly string[]).includes(n) ? (n as Nivel) : undefined;
}
