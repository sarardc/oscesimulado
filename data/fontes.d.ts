// Tipos de data/fontes.js. O conteúdo das estações chega como `unknown`
// de propósito: quem diz se ele está certo é o schema em packages/core.
export interface FonteDeEstacoes {
  /** Caminho do arquivo de origem, para as mensagens de erro. */
  arquivo: string;
  estacoes: unknown[];
}

export const fontes: FonteDeEstacoes[];
