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
├── agenda/                 Agenda de estudos (app instalável, em /agenda/)
├── questoes/               Questões de pediatria (em /questoes/questoes-ped.html)
├── sala/                   Sala de Simulação interativa (uso local, não é publicada)
│   └── imagens-gemini.md   Pedidos de imagens dos pacientes para o Gemini
│
├── scripts/
│   ├── build.js            Junta casos/ em data/stations.json
│   └── build-sala.mjs      Gera os dados da Sala de Simulação
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

Para atualizar também a Sala de Simulação (gera `sala/casos-repo.json`, que não vai para o git):

```bash
npm run build:sala
```

Ao enviar para a branch `main`, o GitHub Actions roda o build e publica o site.
