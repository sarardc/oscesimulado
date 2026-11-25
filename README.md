# OSCE Simulado

Plataforma de simulação de estações OSCE para estudantes de medicina, publicada no GitHub Pages.

## Onde fica cada coisa

```
.
├── index.html              Página principal (lista de estações)
├── css/                    Estilos da página principal
├── js/                     Scripts da página principal
├── img/estacoes/           Fotos usadas nas estações (lesões de pele etc.)
├── data/stations.json      Todas as estações juntas, GERADO pelo build (não editar)
│
├── casos/                  Casos clínicos: um arquivo por especialidade
│   ├── index.js            Lista de todos os arquivos, na ordem do site
│   ├── clinica-medica/     cardiologia, endocrinologia, gastroenterologia, geriatria,
│   │                       hematologia, infectologia, nefrologia, neurologia, pneumologia
│   ├── urgencia-e-terapia-intensiva/   emergencias-neurologicas, medicina-intensiva
│   ├── cirurgia/           cirurgia-geral, ortopedia, urologia, vascular
│   ├── pediatria/          pediatria-geral, neonatologia, puericultura, cirurgia-pediatrica
│   ├── ginecologia-obstetricia/        ginecologia, obstetricia
│   └── especialidades/     dermatologia, medicina-legal, oftalmologia,
│                           otorrinolaringologia, psiquiatria
│
├── cards/                  Cards de estudo (cards/cards.html)
├── agenda/                 Agenda de estudos (app instalável)
├── questoes/               Questões (pediatria)
├── sala/                   Sala de Simulação interativa (detalhes abaixo)
├── api/                    Servidor de IA da sala (Cloudflare Worker), ver api/README.md
│
├── scripts/
│   ├── build.js            Junta casos/ em data/stations.json
│   ├── build-sala.mjs      Gera os dados da Sala de Simulação
│   └── build-sala-ia.mjs   Gera as fichas dos casos para o servidor de IA (api/)
│
├── tests/                  Testes de ponta a ponta da sala (npm test)
│
└── .github/workflows/      Publicação automática no GitHub Pages
```

## Como adicionar casos

1. Adicione o caso no fim do arquivo da especialidade
   (ex.: um caso de neurologia vai em `casos/clinica-medica/neurologia.js`).
2. Só para uma especialidade nova: crie o arquivo na pasta da área e registre-o em
   `casos/index.js`. O número de cada estação é recalculado a cada build.
3. Gere o arquivo do site:

```bash
npm run build
```

Para atualizar também a Sala de Simulação:

```bash
npm run build:sala
```

Ao enviar para a branch `main`, o GitHub Actions roda `npm run build:sala` e publica o site,
com a Sala de Simulação em `/sala/`.

## Sala de Simulação: onde fica cada coisa

```
sala/
├── index.html          Página curta: carrega o CSS e os scripts abaixo, nesta ordem
├── sala.css            Estilos
├── ia-prompts.js       Prompts da IA (paciente, enfermeira, avaliador), usados também pelo api/
├── js/                 Motor da sala
│   ├── base.js         ícones e utilitários
│   ├── catalogo.js     exames, auxiliares do checklist, ordens da emergência
│   ├── ecg.js          ECG desenhado a partir da descrição do caso
│   ├── dinamica.js     motor dos casos dinâmicos (piora, melhora, parada, óbito)
│   ├── estado.js       preferências e estado da estação
│   ├── voz.js          voz e microfone do navegador
│   ├── ia.js           IA: servidor próprio (IA_API_URL) e claude.ai
│   ├── lobby.js        lobby e porta da estação
│   ├── sala.js         cena, cronômetro, sons, legendas
│   ├── conversa.js     conversa com paciente e enfermeira
│   ├── emergencia.js   ordens, sinais vitais e monitor
│   ├── gavetas.js      exame físico, exames, prontuário, conduta
│   ├── correcao.js     encerramento e correção
│   └── inicio.js       liga voz, microfone e IA e abre o lobby
├── casos/              Casos próprios da sala
│   ├── manuais.js      casos escritos à mão (Dona Lúcia, Seu Antônio...)
│   ├── repositorio.js  converte as estações do site (casos-repo.json) para a sala
│   ├── dinamicos.js    casos em que o paciente pode morrer
│   └── primeiro-periodo.js  anamnese e semiologia do 1º período
└── img/                Ilustrações das cenas
```

Os arquivos de `js/` e `casos/` são scripts comuns (não módulos): compartilham o mesmo
escopo e precisam ser carregados na ordem do `index.html`. Para abrir a sala no computador,
use um servidor local (por exemplo `npx serve` na raiz) e acesse `/sala/`.

### Testes

```bash
npm test
```

Gera os dados e roda os testes de ponta a ponta no Chromium: lobby, conversa, voz e
microfone, exame físico, exames, correção, emergência, caso dinâmico, celular e IA.
Na primeira vez, instale o Playwright com `npm install` e `npx playwright install chromium`.

## Sala de Simulação fora do claude.ai

No site, a sala funciona sem conta no Claude: o paciente responde pelo roteiro local
(palavras-chave de cada caso), a voz usa a síntese de fala do navegador e o microfone usa o
reconhecimento de fala do navegador (bom no Chrome, Edge e Safari; o Firefox não tem).
Dentro do claude.ai, a mesma página usa a IA, a voz e o ditado do Claude.

Para ter o paciente com IA também no site, publique o servidor da pasta `api/` (um Cloudflare
Worker que guarda a chave da Claude API) e cole o endereço dele em `IA_API_URL`, no
`sala/index.html`. Passo a passo em [`api/README.md`](api/README.md). Os prompts ficam em
`sala/ia-prompts.js`, compartilhados entre a página e o servidor.
