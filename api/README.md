# Servidor de IA da Sala de Simulação

Um Cloudflare Worker que dá IA à Sala de Simulação quando ela roda fora do claude.ai (no site do
GitHub Pages). O paciente e a enfermeira usam um modelo rápido (Claude Haiku 5.5); a correção
final usa um modelo mais capaz (Claude Opus 5.5).

```
navegador (sala/index.html)  ──POST /ia { tipo, casoId, sessão }──▶  Worker (api/)  ──▶  Claude API
                              ◀── JSON do personagem ───────────────                (chave fica aqui)
```

**Por que um servidor:** a chave da Claude API não pode ficar no HTML, senão qualquer pessoa a
copia. O Worker guarda a chave e **monta o prompt ele mesmo**, com a ficha do caso que ele tem
(`src/casos-ia.json`) e o texto de `sala/ia-prompts.js`. A página só envia o id do caso e os dados
da sessão. A resposta é sempre o JSON curto do personagem, então a chave não serve para outros usos.

**Proteções:** só aceita chamadas do endereço do site (`ORIGENS_PERMITIDAS`), corta o tamanho de
cada campo, e limita cada IP a 20 falas e 2 correções por minuto (`wrangler.toml`).
Se o servidor falhar ou o limite estourar, a página volta sozinha ao roteiro local.

## Publicar (uma vez)

1. **Chave da Claude API.** Crie uma conta em console.anthropic.com, coloque créditos e gere uma
   chave em *API Keys*. Em *Limits*, defina um **limite de gasto mensal** (ex.: US$ 10): é a
   proteção final contra abuso.
2. **Conta na Cloudflare.** Crie uma conta gratuita em dash.cloudflare.com.
3. **Instale e entre** (na pasta `api/`):

```bash
cd api && npm install
```

```bash
npx wrangler login
```

4. **Guarde a chave como segredo** (ela é pedida no terminal e não fica em nenhum arquivo):

```bash
npx wrangler secret put ANTHROPIC_API_KEY
```

5. **Publique.** O comando gera as fichas dos casos e envia o Worker:

```bash
npm run deploy
```

   No fim aparece o endereço, algo como `https://osce-ia.SEU-USUARIO.workers.dev`.
6. **Ligue a página ao servidor.** Em `sala/index.html`, preencha:

```js
const IA_API_URL = "https://osce-ia.SEU-USUARIO.workers.dev/ia";
```

   Faça o commit e publique o site. No lobby da sala, o selo muda de "Roteiro local" para
   "Paciente com IA".

Se o site não estiver em `https://sarardc.github.io`, ajuste `ORIGENS_PERMITIDAS` em `wrangler.toml`.

## Quando mudar os casos

O servidor tem a sua própria cópia das fichas. Depois de adicionar ou editar casos, publique de novo:

```bash
cd api && npm run deploy
```

Até lá, casos novos funcionam pelo roteiro local e os antigos continuam com IA.

## Testar no computador

Crie `api/.dev.vars` (não vai para o git) com a chave e o endereço local do site:

```
ANTHROPIC_API_KEY=sk-ant-...
ORIGENS_PERMITIDAS=http://localhost:8765
```

```bash
cd api && npm run dev
```

Sirva o site em `http://localhost:8765` e aponte `IA_API_URL` para `http://127.0.0.1:8787/ia`.

## Custos (aproximados)

- Cloudflare Workers: grátis até 100 mil pedidos por dia.
- Claude API: cada fala do paciente custa uma fração de centavo (Haiku); a correção final de uma
  estação custa por volta de US$ 0,05–0,10 (Opus). Uma estação completa fica em torno de US$ 0,10.
- Para trocar os modelos, edite `IA_MODELO_CONVERSA` e `IA_MODELO_AVALIACAO` em `wrangler.toml`.
