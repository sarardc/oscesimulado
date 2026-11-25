// Testes de ponta a ponta da Sala de Simulação (navegador de verdade, sem internet).
// Uso: npm test   (gera os dados com build:ia e roda este arquivo)
// Requer Playwright com Chromium: npm install && npx playwright install chromium
import { test, before, after } from 'node:test';
import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { readFileSync } from 'node:fs';
import { extname, join, normalize } from 'node:path';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const RAIZ = new URL('..', import.meta.url).pathname;
const TIPOS = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.mjs': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json': 'application/json', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png', '.webp': 'image/webp', '.svg': 'image/svg+xml' };

let server, browser, BASE;
before(async () => {
  server = createServer(async (req, res) => {
    let p = decodeURIComponent(new URL(req.url, 'http://x').pathname);
    if (p.endsWith('/')) p += 'index.html';
    const arq = normalize(join(RAIZ, p));
    if (!arq.startsWith(RAIZ)) { res.writeHead(403).end(); return; }
    try { const b = await readFile(arq); res.writeHead(200, { 'content-type': TIPOS[extname(arq)] || 'application/octet-stream' }).end(b); }
    catch { res.writeHead(404).end(); }
  });
  await new Promise(r => server.listen(0, '127.0.0.1', r));
  BASE = `http://127.0.0.1:${server.address().port}`;
  browser = await chromium.launch();
});
after(async () => { await browser?.close(); server?.close(); });

// Abre a sala com voz e microfone simulados e coleta erros da página.
async function abrir({ viewport = { width: 1280, height: 800 }, relogio = false, initScript } = {}) {
  const ctx = await browser.newContext({ viewport });
  const page = await ctx.newPage();
  const erros = [];
  page.on('pageerror', e => erros.push(e.message));
  page.on('console', m => { if (m.type() === 'error' && !/Failed to load resource|fonts\.g/.test(m.text())) erros.push(m.text()); });
  await page.route(/fonts\.(googleapis|gstatic)\.com/, r => r.abort());
  await page.addInitScript(() => {
    window.__falas = [];
    window.speechSynthesis.speak = u => { window.__falas.push({ texto: u.text, tom: u.pitch }); setTimeout(() => u.onend && u.onend(), 5); };
    window.speechSynthesis.cancel = () => {};
    window.SpeechRecognition = window.webkitSpeechRecognition = class {
      start() { setTimeout(() => { this.onstart(); setTimeout(() => {
        this.onresult({ resultIndex: 0, results: [Object.assign([{ transcript: 'há quanto tempo' }], { isFinal: false })] });
        this.onresult({ resultIndex: 0, results: [Object.assign([{ transcript: 'há quanto tempo está assim' }], { isFinal: true })] });
      }, 20); }, 10); }
      stop() { setTimeout(() => this.onend(), 10); }
      abort() {}
    };
  });
  if (initScript) await page.addInitScript(initScript);
  if (relogio) await page.clock.install();
  return { page, erros, fechar: () => ctx.close() };
}
async function irParaLobby(page) {
  await page.goto(BASE + '/sala/');
  await page.waitForFunction(() => document.querySelectorAll('.st-card').length > 300, null, { timeout: 15000 });
}
async function entrar(page, titulo) {
  await page.locator('.st-card', { hasText: titulo }).first().click();
  await page.click('#doorGo');
  await page.waitForSelector('#say');
}
async function dizer(page, texto) {
  await page.fill('#say', texto);
  await page.click('#sendBtn');
  await page.waitForFunction(() => !document.querySelector('#caption .dots'), null, { timeout: 15000 });
  return (await page.textContent('#caption')).replace(/\s+/g, ' ');
}
async function encerrar(page) {
  await page.click('#endBtn');
  await page.click('[data-a="y"]');
  await page.waitForSelector('.fb');
}

test('lobby: carrega todas as estações, filtra por área e mostra o modo sem IA', async () => {
  const { page, erros, fechar } = await abrir();
  await irParaLobby(page);
  const total = await page.locator('.st-card').count();
  assert.ok(total >= 350, `esperava >= 350 estações, veio ${total}`);
  assert.match(await page.textContent('#aiStatus'), /Roteiro local/);
  assert.match(await page.textContent('.setup-row'), /fala em voz alta/);
  await page.click('[data-area="Casos dinâmicos"]');
  assert.equal(await page.locator('.st-card').count(), 5);
  await page.click('[data-area="Todas"]');
  assert.deepEqual(erros, []);
  await fechar();
});

test('conversa pelo roteiro local, com voz e ditado do navegador', async () => {
  const { page, erros, fechar } = await abrir();
  await irParaLobby(page);
  await entrar(page, 'Cansaço que não passa');
  assert.ok(await page.isVisible('#micBtn'), 'microfone visível');
  assert.ok(await page.isVisible('#voiceBtn'), 'botão de voz visível');
  const leg = await dizer(page, 'Bom dia, sou a estudante de medicina. O que traz a senhora aqui hoje?');
  assert.match(leg, /esse cansaço/);
  await page.click('#micBtn');
  await page.waitForFunction(() => document.querySelector('#say').value.includes('está assim'));
  await page.click('#stopRecBtn');
  await page.waitForFunction(() => /três semanas/.test(document.querySelector('#caption').textContent));
  const falas = await page.evaluate(() => window.__falas);
  assert.equal(falas.length, 2);
  assert.ok(falas[0].tom > 1, 'voz de mulher com tom mais agudo');
  assert.deepEqual(erros, []);
  await fechar();
});

test('exame físico, exames com laudo e correção com evidência', async () => {
  const { page, erros, fechar } = await abrir({ relogio: true });
  await irParaLobby(page);
  await entrar(page, 'Cansaço que não passa');
  await dizer(page, 'A senhora consegue dormir deitada?');
  await page.click('[data-tool="exame"]');
  await page.click('[data-man="ausc_card"]');
  assert.match(await page.textContent('.drawer'), /B3 presente/);
  await page.click('[data-tool="exames"]');
  await page.click('[data-ex="hemograma"]');
  await page.clock.runFor(8000);
  assert.match(await page.textContent('.drawer'), /Hb 12,1/, 'laudo do próprio caso');
  await encerrar(page);
  const fb = await page.textContent('.fb');
  assert.match(fb, /dormir deitada/, 'evidência da pergunta na correção');
  assert.match(fb, /\d+%/);
  assert.deepEqual(erros, []);
  await fechar();
});

test('emergência: ordem à enfermeira liga o monitor', async () => {
  const { page, erros, fechar } = await abrir({ relogio: true });
  await irParaLobby(page);
  await page.locator('.st-card', { hasText: 'Dor no peito na sala vermelha' }).first().click();
  await page.click('#doorGo');
  await page.waitForSelector('#talkTo');
  await page.selectOption('#talkTo', 'enfermeira');
  const leg = await dizer(page, 'Carla, monitorize o paciente e pegue um acesso venoso, por favor.');
  assert.match(leg, /Enf\. Carla/);
  await page.clock.runFor(2000);
  assert.match(await page.textContent('#monitor'), /SpO|FC/);
  await page.click('[data-tool="ordens"]');
  await page.click('[data-ord="aas"]');
  await encerrar(page);
  assert.match(await page.textContent('.fb'), /AAS 300 mg/, 'ordem registrada na correção');
  assert.deepEqual(erros, []);
  await fechar();
});

test('caso dinâmico: sem tratamento, o paciente morre', async () => {
  const { page, erros, fechar } = await abrir({ relogio: true });
  await irParaLobby(page);
  await page.click('[data-area="Casos dinâmicos"]');
  await page.locator('.st-card').first().click();
  await page.click('#doorGo');
  await page.waitForSelector('#monitor');
  let morreu = false;
  for (let i = 0; i < 40 && !morreu; i++) {
    await page.clock.runFor(15000);
    morreu = await page.evaluate(() => !!document.querySelector('.obito') || /óbito/i.test(document.body.innerText));
  }
  assert.ok(morreu, 'o paciente deveria evoluir para óbito sem conduta');
  assert.deepEqual(erros, []);
  await fechar();
});

test('celular: lobby e sala sem rolagem horizontal', async () => {
  const { page, erros, fechar } = await abrir({ viewport: { width: 375, height: 740 } });
  await irParaLobby(page);
  assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false);
  await entrar(page, 'Cansaço que não passa');
  assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false);
  assert.deepEqual(erros, []);
  await fechar();
});

// Troca IA_API_URL na página servida (o arquivo do repositório fica intacto).
async function apontarIA(page, url) {
  await page.route(/\/sala\/.*\.(html|js)$|\/sala\/$/, async route => {
    const r = await route.fetch(); let body = await r.text();
    body = body.replace('const IA_API_URL = "";', `const IA_API_URL = ${JSON.stringify(url)};`);
    await route.fulfill({ response: r, body });
  });
}

test('IA pelo servidor próprio: paciente e correção', async () => {
  const { page, erros, fechar } = await abrir();
  const pedidos = [];
  await apontarIA(page, 'https://ia.teste/ia');
  await page.route('https://ia.teste/ia', async route => {
    const corpo = JSON.parse(route.request().postData()); pedidos.push(corpo);
    const resp = corpo.tipo === 'avaliador'
      ? { itens: [], criticos: [], comentario: 'Comentário do avaliador de teste.', fortes: ['Ponto forte de teste'], melhorar: [] }
      : { fala: 'Resposta da IA de teste.', emocao: 'preocupado', topicos: ['qp'], com: { apresentou: true, nome: false, empatia: false, entendimento: false, explicou: false, sigilo: false } };
    await route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify(resp) });
  });
  await irParaLobby(page);
  assert.match(await page.textContent('#aiStatus'), /Paciente com IA/);
  await entrar(page, 'Cansaço que não passa');
  assert.match(await dizer(page, 'O que traz a senhora aqui?'), /Resposta da IA de teste/);
  assert.equal(pedidos[0].tipo, 'paciente');
  assert.equal(pedidos[0].casoId, 'lucia');
  assert.equal(pedidos[0].sessao.fala, 'O que traz a senhora aqui?');
  assert.equal(pedidos[0].prompt, undefined, 'a página não envia prompt pronto');
  await encerrar(page);
  await page.waitForFunction(() => document.body.innerText.includes('Comentário do avaliador de teste'), null, { timeout: 15000 });
  assert.equal(pedidos.at(-1).tipo, 'avaliador');
  assert.deepEqual(erros, []);
  await fechar();
});

test('IA pelo servidor próprio: limite estourado ou servidor fora do ar voltam ao roteiro local', async () => {
  for (const status of [429, 502]) {
    const { page, erros, fechar } = await abrir();
    await apontarIA(page, 'https://ia.teste/ia');
    await page.route('https://ia.teste/ia', r => r.fulfill({ status, body: '{}' }));
    await irParaLobby(page);
    await entrar(page, 'Cansaço que não passa');
    assert.match(await dizer(page, 'Há quanto tempo está assim?'), /três semanas/, `HTTP ${status}: roteiro local`);
    if (status === 429) assert.match(await page.textContent('#toasts'), /limite de uso/);
    assert.deepEqual(erros, []);
    await fechar();
  }
});

test('dentro do claude.ai: usa a IA, a voz e o ditado do Claude', async () => {
  const { page, erros, fechar } = await abrir({ initScript: () => {
    window.__prompts = []; window.__claudeFalas = [];
    const ditado = { cb: {}, onPartial(f) { this.cb.p = f; }, onFinal(f) { this.cb.f = f; }, onState(f) { this.cb.s = f; },
      async start() { this.cb.s({ state: 'listening' }); setTimeout(() => this.cb.f({ text: ' falando pelo Claude' }), 10); }, async stop() { this.cb.s({ state: 'idle' }); } };
    window.claude = { use: async nome => ({
      sample: { json: async prompt => { window.__prompts.push(prompt); return /avaliador de OSCE/.test(prompt)
        ? { itens: [], criticos: [], comentario: 'Avaliação vinda do Claude.', fortes: [], melhorar: [] }
        : { fala: 'Resposta vinda do Claude.', emocao: 'neutro', topicos: [], com: {} }; } },
      tts: { speak: async t => { window.__claudeFalas.push(t); }, stop() {} },
      dictation: ditado,
    }[nome]) };
  } });
  await irParaLobby(page);
  await page.waitForFunction(() => /Paciente com IA/.test(document.querySelector('#aiStatus')?.textContent));
  await entrar(page, 'Cansaço que não passa');
  assert.match(await dizer(page, 'O que traz a senhora aqui?'), /Resposta vinda do Claude/);
  const prompts = await page.evaluate(() => window.__prompts);
  assert.match(prompts[0], /PERSONAGEM: Lúcia Ferreira/);
  assert.match(prompts[0], /ÚLTIMA FALA DO ALUNO: "O que traz a senhora aqui\?"/);
  assert.deepEqual(await page.evaluate(() => window.__claudeFalas), ['Resposta vinda do Claude.']);
  assert.deepEqual(await page.evaluate(() => window.__falas), [], 'não usa a voz do navegador');
  await encerrar(page);
  await page.waitForFunction(() => document.body.innerText.includes('Avaliação vinda do Claude'), null, { timeout: 15000 });
  assert.deepEqual(erros, []);
  await fechar();
});

test('fichas do servidor de IA: uma por estação, com o texto do caso', async () => {
  const fichas = JSON.parse(readFileSync(join(RAIZ, 'api/src/casos-ia.json'), 'utf8'));
  const { page, fechar } = await abrir();
  await irParaLobby(page);
  assert.equal(Object.keys(fichas).length, await page.locator('.st-card').count());
  const l = fichas.lucia;
  assert.equal(l.pac.nome, 'Lúcia Ferreira');
  assert.ok(l.topicos.length > 20 && l.checklistIA.length > 0 && l.ordens.length > 0);
  for (const f of Object.values(fichas)) assert.ok(f.id && f.pac && Array.isArray(f.topicos), 'ficha incompleta: ' + f.id);
  await fechar();
});
