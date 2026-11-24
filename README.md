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
├── casos/                  Casos clínicos, separados por área
│   ├── index.js            Lista de todos os arquivos de casos, na ordem do site
│   ├── clinica-medica/     Cardiologia, endócrino, gastro, geriatria, hemato,
│   │                       infecto, nefro, neuro, emergências neurológicas,
│   │                       pneumo, medicina intensiva
│   ├── cirurgia/           Cirurgia torácica, ortopedia, urologia
│   ├── pediatria/          Pediatria geral, neonatologia, puericultura
│   ├── ginecologia-obstetricia/
│   ├── especialidades/     Dermato, oftalmo, otorrino, psiquiatria, medicina legal
│   └── mistos/             Arquivos com várias especialidades juntas
│
├── cards/                  Cards de estudo (cards/cards.html)
├── agenda/                 Agenda de estudos (app instalável)
├── questoes/               Questões (pediatria)
├── sala/                   Sala de Simulação interativa
│
├── scripts/
│   ├── build.js            Junta casos/ em data/stations.json
│   └── build-sala.mjs      Gera os dados da Sala de Simulação
│
└── .github/workflows/      Publicação automática no GitHub Pages
```

## Como adicionar casos

1. Crie um arquivo novo na subpasta da área, com nome em minúsculas e hífens
   (ex.: `casos/clinica-medica/neurologia-2.js`).
2. Registre o arquivo **no fim** da lista em `casos/index.js`. A posição define o
   número da estação, então não reordene a lista.
3. Gere o arquivo do site:

```bash
npm run build
```

Para atualizar também a Sala de Simulação:

```bash
npm run build:sala
```

Ao enviar para a branch `main`, o GitHub Actions roda o build e publica o site.
