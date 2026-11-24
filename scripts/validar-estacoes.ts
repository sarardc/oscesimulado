// Valida todas as estações de data/*.js contra o schema de packages/core.
//
// Uso:
//   npm run validar                  relatório resumido
//   npm run validar -- --detalhes    lista todas as estações de cada problema
//   npm run validar -- --estrito     sai com erro (código 1) se houver ERRO
//
// Para corrigir: abra o arquivo indicado e vá até a estação pela posição
// ("data/neuro.js, 3ª estação") ou pelo título.

import { existsSync } from "node:fs";
import { validarEstacoes, type Problema, type RefEstacao } from "@osce/core";
import { fontes } from "../data/fontes.js";

const args = new Set(process.argv.slice(2));
const detalhes = args.has("--detalhes");
const estrito = args.has("--estrito");
const LIMITE = 5;

const relatorio = validarEstacoes(fontes, { arquivoExiste: (p) => existsSync(p) });

// Agrupa problemas iguais: mesma regra + mesma mensagem (sem os números de
// posição), para mostrar "nível ausente — 10 estações" em vez de 10 linhas.
type Grupo = { nivel: Problema["nivel"]; chave: string; exemplo: string; estacoes: { ref: RefEstacao; mensagem: string }[] };
const grupos = new Map<string, Grupo>();
for (const r of relatorio.resultados) {
  for (const p of r.problemas) {
    const generica = p.mensagem.replace(/\[\d+\]/g, "[]").replace(/#\d+/g, "#").replace(/^\d+ /, "N ").replace(/"[^"]*"/g, '"…"');
    const chave = `${p.nivel}|${p.regra}|${generica}`;
    const g = grupos.get(chave) ?? { nivel: p.nivel, chave: p.regra, exemplo: generica, estacoes: [] };
    g.estacoes.push({ ref: r.ref, mensagem: p.mensagem });
    grupos.set(chave, g);
  }
}

const cor = (codigo: number) => (s: string) => (process.stdout.isTTY ? `\x1b[${codigo}m${s}\x1b[0m` : s);
const vermelho = cor(31);
const amarelo = cor(33);
const verde = cor(32);
const cinza = cor(90);

function imprimir(nivel: Problema["nivel"]) {
  const lista = [...grupos.values()].filter((g) => g.nivel === nivel).sort((a, b) => b.estacoes.length - a.estacoes.length);
  if (!lista.length) return;
  const titulo = nivel === "erro" ? vermelho("ERROS") : amarelo("AVISOS");
  console.log(`\n${titulo} ${cinza(nivel === "erro" ? "(a estação não segue o schema)" : "(válida, mas fora do padrão editorial)")}`);
  for (const g of lista) {
    const n = g.estacoes.length;
    console.log(`\n  • [${g.chave}] ${g.exemplo} ${cinza(`— ${n} ${n === 1 ? "estação" : "estações"}`)}`);
    const mostrar = detalhes ? g.estacoes : g.estacoes.slice(0, LIMITE);
    for (const { ref, mensagem } of mostrar) {
      const extra = mensagem !== g.exemplo ? cinza(`  ${mensagem}`) : "";
      console.log(`      #${ref.idSite} ${ref.arquivo}, ${ref.posicao}ª estação: "${ref.titulo}"${extra}`);
    }
    if (mostrar.length < n) console.log(cinza(`      … e mais ${n - mostrar.length} (use --detalhes)`));
  }
}

console.log(`Validação das estações: ${relatorio.total} estações em ${fontes.length} listas`);
imprimir("erro");
imprimir("aviso");

const validas = relatorio.total - relatorio.comErro;
console.log("\nResumo");
console.log(`  ${verde(`${validas} válidas`)}, ${relatorio.comErro ? vermelho(`${relatorio.comErro} com erro`) : "0 com erro"}, ${relatorio.comAviso} com aviso`);
console.log(`  ${relatorio.semSlug} sem slug (identificador permanente): próximo passo do plano`);

if (estrito && relatorio.comErro > 0) process.exit(1);
