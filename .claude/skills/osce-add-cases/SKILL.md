---
name: osce-add-cases
description: >
  Use this skill whenever the user of the OSCE Casos Clínicos platform
  (project at /home/user/oscesimulado) asks to add new clinical cases,
  new OSCE stations, new medical cases by specialty, or anything like
  "adicione casos de X", "crie casos de Y", "quero mais casos de Z",
  "adicione N casos de hematologia/pneumologia/etc".
  This skill knows the exact station schema, file structure, build system,
  color palette, and git workflow for that project. Use it every time new
  stations need to be written — even for a single case.
---

# OSCE — Adicionar Casos Clínicos

## Visão geral do projeto

**Repositório:** `/home/user/oscesimulado`
**Site:** plataforma de simulação OSCE para estudantes de medicina brasileiros
**Idioma dos casos:** Português (Brasil)
**Branch de desenvolvimento:** `claude/medical-cases-pneumology-gastro-NsPTs`
  (verificar sempre com `git branch` antes de commitar)

## Fluxo de trabalho

1. Criar (ou editar) o arquivo JS de dados em `data/`
2. Atualizar `build.js` para importar e spredar o novo arquivo
3. Rodar `node build.js` para gerar `data/stations.json`
4. Commitar tudo + fazer push
5. Enviar o arquivo JS ao usuário com `SendUserFile` após cada caso ou lote

---

## Estrutura de arquivos de dados

```
data/
  casos.js              — casos originais (urologia, endocrinologia)
  endocrino_parsed.js
  pediatria_parsed.js
  pediatria2.js
  uro1.js
  psiq1.js
  uro2.js
  nefro2.js
  neuro.js
  orl.js                — ORL + Dermatologia (6 casos dermatológicos concatenados)
  ped3.js
  oftalmo.js
  cc/cirurgiatoracica.js
  pneumo_gastro.js
  especialidades2.js    — 9 especialidades novas (Derma, Infectologia, Hemato, etc.)
  hematologia.js        — casos de Hematologia
  stations.json         — gerado automaticamente pelo build
```

Cada novo conjunto de casos vai em **um novo arquivo JS** (ex: `data/neurologia2.js`).
Nunca edite `data/stations.json` à mão — ele é sobrescrito pelo build.

---

## Schema completo de uma estação

```js
{
  id: 1,                          // ignorado pelo build (reassinalado automaticamente)
  title: 'Título do card',        // frase clínica curta (ex: "Dor no peito há 2 horas")
  sub: 'Contexto — Serviço',      // ex: "UBS — Atenção Primária", "PS — Pronto-Socorro"
  tema: 'Hematologia',            // ver lista de temas abaixo
  topic: 'Nome da Doença',        // ex: "Anemia Ferropriva"
  level: 'moderado',              // 'fácil' | 'moderado' | 'difícil'
  cardAccent: '#E53935',          // cor do card — ver paleta abaixo

  instA: {
    scenario: 'Descrição do cenário (serviço, horário, contexto).',
    patient: 'Nome, idade, sexo, profissão, dados relevantes de identificação.',
    complaint: 'Queixa principal em 1–2 frases.',
    tasks: [
      'Realize a anamnese dirigida ao caso.',
      'Realize o exame físico dirigido.',
      'Formule a hipótese diagnóstica principal e os diferenciais.',
      'Solicite os exames complementares adequados.',
      'Proponha o tratamento e oriente o paciente.'
      // adaptar tarefas ao caso — podem ser 3 a 6
    ]
  },

  instB: {
    vitals: {
      PA: '120/80 mmHg',
      FC: '72 bpm',
      FR: '16 irpm',
      Tax: '36,5 °C',
      Peso: '70 kg',
      Altura: '1,70 m',
      IMC: '24,2 kg/m²'
      // adicionar SpO2, Glasgow etc. quando clinicamente relevante
    },
    physicalGeneral: 'Estado geral, nível de consciência, hidratação, palidez, icterícia, cianose, edema.',
    physicalSeg: 'SISTEMA 1: achados. | SISTEMA 2: achados. | SISTEMA 3: achados.',
    // physicalSeg: seções separadas por " | " (pipe com espaços) — cada uma começa com NOME EM MAIÚSCULA + dois pontos
    labs: [
      { test: 'Nome do exame', val: 'Resultado', ref: 'Valor de referência', alt: true }
      // alt: true = alterado (aparece destacado); alt: false = normal
    ],
    image: 'Descrição de imagem radiológica/resultado de biópsia/ECG a ser entregue ao candidato (ou omitir se não houver).',
    note: 'Instruções para o ator/aplicador: quando entregar cada impresso, o que revelar ou não reve lar.',
    patientProfile: 'Perfil completo: ocupação, hábitos, família, contexto social. O ator lê isso para preparar a personagem.',
    script: [
      { trigger: 'Queixa principal', speech: 'Fala do paciente em primeira pessoa.' },
      { trigger: 'Sobre [tema]', speech: 'Resposta quando o candidato perguntar sobre [tema].' },
      { trigger: 'Pergunta ativa — diagnóstico', speech: 'O que eu tenho, doutor(a)?' }
      // 6 a 10 falas é o ideal; cobrir os pontos mais prováveis de anamnese
    ],
    hiddenInfo: 'Info1 — só revela se candidato perguntar sobre X | Info2 — só revela se candidato perguntar sobre Y',
    // hiddenInfo: itens separados por " | "
    actorBehavior: 'Como o ator deve se comportar: estado emocional, resistência, grau de colaboração, reações.'
  },

  instC: {
    diagnosis: 'Diagnóstico completo e justificado em 1–2 frases.',
    differentials: [
      'Diferencial 1 — por que entra / por que sai neste caso',
      'Diferencial 2 — por que entra / por que sai neste caso',
      'Diferencial 3 — por que entra / por que sai neste caso'
      // 3 a 5 diferenciais com raciocínio
    ],
    context: 'Parágrafo narrativo contextualizando o caso clínico (epidemiologia + apresentação deste paciente).',
    justify: 'Por que este é o diagnóstico: critérios clínicos, laboratoriais, epidemiológicos preenchidos.',
    expectedAnamnesis: 'Item 1 | Item 2 | Item 3 | ...',
    // pipe-delimitado; cada item é um ponto que o candidato deve investigar
    expectedPhysical: 'Manobra/achado 1 | Manobra/achado 2 | ...',
    expectedExams: [
      { exam: 'Nome', justify: 'Por que pedir', expected: 'O que se espera encontrar' }
    ],
    expectedConduct: 'Farmacológica: [medicamentos, doses, vias, duração] | Não farmacológica: [procedimentos, encaminhamentos] | Orientações ao paciente: [o que explicar]',
    expectedCommunication: 'Apresentar-se pelo nome | Comunicar diagnóstico | Esclarecer dúvidas | ...',
    criticalErrors: [
      'Erro grave 1 (leva a zero ou penalização pesada)',
      'Erro grave 2',
      'Erro grave 3'
      // 3 a 6 erros críticos; o que NÃO fazer
    ]
  },

  instD: {
    title: 'Nome da Doença — Material de Estudo',
    sections: [
      {
        h: 'Título da Seção (ex: Definição e Epidemiologia)',
        items: [
          { item: 'Conteúdo do item educacional.', score: 1, ref: 'Fonte (Harrison, UpToDate, etc.)' }
          // score: pontos que esse item vale no checklist (1 ou 2)
        ]
      }
      // 4 a 7 seções: Definição, Anamnese, Exame Físico, Diagnóstico, Diferenciais, Tratamento, Orientações
    ]
  }
}
```

---

## Temas disponíveis e suas cores

| tema (valor exato)        | Exemplo de cardAccent |
|---------------------------|----------------------|
| `'Dermatologia'`          | `'#EC407A'`          |
| `'Infectologia'`          | `'#26A69A'`          |
| `'Geriatria'`             | `'#8D6E63'`          |
| `'Hematologia'`           | `'#E53935'`          |
| `'Endocrinologia'`        | `'#FF7043'`          |
| `'Nefrologia'`            | `'#5C6BC0'`          |
| `'Pneumologia'`           | `'#42A5F5'`          |
| `'Gastroenterologia'`     | `'#66BB6A'`          |
| `'Psiquiatria'`           | `'#AB47BC'`          |
| `'Otorrinolaringologia'`  | `'#FFA726'`          |
| `'Oftalmologia'`          | `'#29B6F6'`          |
| `'Neurologia'`            | `'#EF5350'`          |
| `'Pediatria'`             | `'#FF8A65'`          |
| `'cirurgia'`              | `'#78909C'`          |
| `'Vascular'`              | `'#B71C1C'`          |
| `'Medicina Intensiva'`    | `'#D32F2F'`          |
| `'Emergencias Neurologicas'` | `'#C62828'`       |
| `'Urologia'`              | `'#1565C0'`          |
| `'Ortopedia'`             | `'#37474F'`          |
| `'Medicina Legal'`        | `'#546E7A'`          |

**Regra importante:** o valor de `tema` deve bater exatamente com os `data-tema` dos botões de filtro em `index.html`. Consulte o arquivo para verificar antes de criar um tema novo. Temas multi-palavra usam espaços (ex: `'Medicina Intensiva'`), não hífens.

---

## Estrutura do arquivo JS de dados

```js
const nomeDoArquivo = [
  // CASO 1 — NOME DO DIAGNÓSTICO
  { ...schema completo... },

  // CASO 2 — NOME DO DIAGNÓSTICO
  { ...schema completo... },
];

export default nomeDoArquivo;
```

---

## Atualizar build.js

Depois de criar o arquivo, adicionar no `build.js`:

```js
// 1. No bloco de imports (no topo, junto aos outros):
import nomeDoArquivo from './data/nomeDoArquivo.js';

// 2. No array allStations (dentro do .map), adicionar o spread:
  ...nomeDoArquivo,
```

Depois rodar:
```bash
node build.js
```

Verificar que o log diz `Build concluido: NNN estacoes -> data/stations.json`.

---

## Git — commit e push

```bash
git add data/novoArquivo.js build.js data/stations.json
git commit -m "feat(tema): descrição do que foi adicionado

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
Claude-Session: https://claude.ai/code/session_011wfDCwMdwkFScPj67tnDUZ"

git push -u origin <nome-da-branch>
```

Se o push falhar por rede, tentar até 4x com backoff (2s, 4s, 8s, 16s).

---

## Boas práticas para escrever os casos

- **Realismo clínico:** usar dados de vitais plausíveis para o quadro; labs com valores reais de referência
- **Riqueza do roteiro:** pelo menos 7 falas no `script`, cobrindo queixa, evolução, antecedentes, pergunta ativa sobre diagnóstico
- **Diferenciais bem argumentados:** explicar por que entra e por que sai — não listar só o nome
- **`hiddenInfo`:** sempre ter 2–4 itens de informação que o paciente só revela se perguntado diretamente (isso é o coração da simulação)
- **`criticalErrors`:** ser específico — "não solicitar biópsia" é melhor que "não investigar"
- **`instD`:** material de estudo rico, com referências; pontuação (score) reflete importância clínica
- **Nível:** casos simples para atenção primária = `'fácil'`; emergências e condutas complexas = `'difícil'`

---

## Envio progressivo ao usuário

Quando criar múltiplos casos, usar `SendUserFile` para enviar o arquivo `.js` após cada caso ou lote de casos. Isso permite ao usuário acompanhar o progresso e dar feedback antes que todos estejam prontos.

---

## Referência rápida: temas mais pedidos por especialidade

### Hematologia (OSCE)
Anemia Ferropriva · Anemia Megaloblástica B12 · Doença Falciforme · LLA Pediátrica · LMA · Linfoma de Hodgkin · PTI · Mieloma Múltiplo · Neutropenia Febril

### Pneumologia (OSCE)
DPOC exacerbado · Pneumonia Comunitária · Asma aguda · TEP · Pneumotórax · Derrame Pleural · Tuberculose · SARA

### Gastroenterologia (OSCE)
Hemorragia Digestiva Alta · Cirrose Hepática · Doença de Crohn · Retocolite Ulcerativa · Pancreatite Aguda · Hepatite B · Obstrução Intestinal · Síndrome do Intestino Irritável

### Cardiologia / Medicina Intensiva (OSCE)
IAM c/supra ST · IC Descompensada · Arritmias · Choque Cardiogênico · Choque Séptico · TEP grave

### Neurologia (OSCE)
AVC Isquêmico · Epilepsia · Esclerose Múltipla · Doença de Parkinson · Meningite · Síndrome de Guillain-Barré
