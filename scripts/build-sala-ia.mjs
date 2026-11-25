// Gera a cópia das fichas dos casos que o servidor de IA (api/) usa para montar os prompts.
// Uso (na raiz do repositório): npm run build:ia
//   (roda antes build.js e build-sala.mjs, porque precisa de sala/casos-repo.json)
// Saída: api/src/casos-ia.json  →  { "<id do caso>": ficha, ... }
//
// Como funciona: roda o script da própria página (sala/index.html) dentro de um vm do Node,
// com um "navegador falso" mínimo, carrega os casos do repositório como a página faz e chama
// fichaDoCaso() em cada caso. Assim o servidor e a página usam exatamente os mesmos dados.
import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import vm from 'vm';

process.chdir(new URL('..', import.meta.url).pathname);

const html = readFileSync('sala/index.html', 'utf8');
const scripts = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(m => m[1]);
const main = scripts.find(s => s.includes('function fichaDoCaso('));
if (!main) throw new Error('Script principal da sala (com fichaDoCaso) não encontrado em sala/index.html');

// Elemento falso: aceita qualquer leitura, escrita ou chamada sem fazer nada.
const fake = new Proxy(function () {}, {
  get: (t, k) => (k === Symbol.iterator ? undefined : k === Symbol.toPrimitive ? () => '' : fake),
  set: () => true,
  apply: () => fake,
});
const document = {
  querySelector: () => fake, querySelectorAll: () => [], getElementById: () => fake,
  createElement: () => fake, addEventListener() {}, body: fake, documentElement: fake,
};
const ctx = {
  console, document, setTimeout: () => 0, clearTimeout() {}, setInterval: () => 0, clearInterval() {},
  requestAnimationFrame: () => 0, cancelAnimationFrame() {}, addEventListener() {},
  navigator: {}, location: { href: '' }, matchMedia: () => ({ matches: false, addEventListener() {} }),
  fetch: async url => {
    if (url !== 'casos-repo.json') throw new Error('fetch inesperado: ' + url);
    const body = readFileSync('sala/casos-repo.json', 'utf8');
    return { ok: true, json: async () => JSON.parse(body) };
  },
};
ctx.window = ctx; ctx.globalThis = ctx;
vm.createContext(ctx);
vm.runInContext(main + '\n;globalThis.__pronto = loadRepoCases().then(() => CASOS.map(fichaDoCaso));', ctx, { filename: 'sala/index.html' });
const fichas = await ctx.__pronto;

const out = {};
for (const f of fichas) {
  if (out[f.id]) throw new Error('id de caso repetido: ' + f.id);
  out[f.id] = f;
}
mkdirSync('api/src', { recursive: true });
writeFileSync('api/src/casos-ia.json', JSON.stringify(out));
const kb = Math.round(Buffer.byteLength(JSON.stringify(out)) / 1024);
console.log(`IA: ${fichas.length} fichas de casos -> api/src/casos-ia.json (${kb} KB)`);
