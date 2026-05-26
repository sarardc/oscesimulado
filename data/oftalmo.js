const oftalmo = [

// CASO 01
{
  id: 1,
  title: "Olhos vermelhos e secreção há 3 dias",
  sub: "UBS — Atenção Primária",
  tema: "Oftalmologia",
  topic: "Conjuntivite",
  level: "simples",
  cardAccent: "#4CAF50",
  instA: {
    scenario: "Atenção Primária — UBS. Consultório de clínica geral, turno matutino.",
    patient: "R.M., 24 anos, feminino, auxiliar de creche, sem comorbidades conhecidas.",
    complaint: "Olhos vermelhos com 'meleca' há 3 dias, começando no olho direito.",
    tasks: [
      "Realize a anamnese dirigida ao caso.",
      "Realize o exame físico oftalmológico pertinente.",
      "Formule a hipótese diagnóstica e os principais diagnósticos diferenciais.",
      "Solicite os exames complementares adequados, se indicados.",
      "Oriente a paciente sobre o diagnóstico, tratamento e medidas preventivas."
    ]
  },
  instB: {
    vitals: {
      PA: "110/70 mmHg",
      FC: "78 bpm",
      FR: "16 irpm",
      Tax: "36,8°C",
      Peso: "62 kg",
      Altura: "1,63 m",
      IMC: "23,3 kg/m²"
    },
    physicalGeneral: "Bom estado geral, corada, hidratada, anictérica, afebril, consciente e orientada.",
    physicalSeg: [
      "OLHO DIREITO: Hiperemia conjuntival difusa (+3/4), secreção mucopurulenta em quantidade moderada, sem fotofobia, sem dor à movimentação ocular, córnea transparente, pupila isocórica e fotorreagente, pálpebras com leve edema.",
      "OLHO ESQUERDO: Hiperemia conjuntival leve (+1/4), pequena quantidade de secreção serosa matinal, córnea transparente, pupila isocórica e fotorreagente.",
      "LINFONODOS: Adenopatia pré-auricular direita palpável, indolor, de consistência elástica (~1 cm).",
      "DEMAIS SISTEMAS: Sem alterações relevantes."
    ],
    labs: [
      {
        test: "Cultura de secreção conjuntival",
        val: "Não indicado na APS inicialmente",
        ref: "—",
        alt: false
      }
    ],
    image: null,
    note: "Entregar o impresso dos sinais vitais ao início da estação. O impresso do exame físico segmentar deve ser entregue somente após o candidato solicitar ou iniciar o exame físico. Não há exames complementares para entregar nesta estação.",
    patientProfile: "\"Renata M., 24 anos, feminino, auxiliar de creche, solteira. Trabalha em período integral em creche municipal com crianças de 1 a 3 anos.\"",
    script: [
      {
        trigger: "Queixa principal",
        speech: "\"Doutora, meu olho direito tá vermelho e cheio de secreção há uns 3 dias. Ontem o esquerdo também começou a ficar vermelho. Tô com vergonha de ir trabalhar assim.\""
      },
      {
        trigger: "Sobre início e evolução",
        speech: "\"Começou de repente, no olho direito. Acordei com o olho grudado de manhã. Aí foi piorando, e hoje o outro também tá começando.\""
      },
      {
        trigger: "Sobre a secreção",
        speech: "\"É um negócio amarelado, meio grosso. De manhã meu olho fica todo grudado, preciso limpar com água pra abrir.\""
      },
      {
        trigger: "Sobre dor",
        speech: "\"Não dói não. Mas coça bastante, e parece que tem uma areia no olho o tempo todo.\""
      },
      {
        trigger: "Sobre visão",
        speech: "\"Tá um pouco embaçado, mas acho que é por causa da secreção. Quando limpo, melhora.\""
      },
      {
        trigger: "Sobre casos semelhantes",
        speech: "\"Ah, tem umas crianças na creche com o olho vermelho também faz uns dias. A gente tava achando que era alergia delas.\""
      },
      {
        trigger: "Sobre uso de colírio",
        speech: "\"Comprei um colírio no posto de gasolina, desses de tirar vermelhidão. Usei uns dois dias mas não melhorou.\""
      },
      {
        trigger: "Pergunta ativa — diagnóstico",
        speech: "\"O que eu tenho, doutora? É grave? Posso passar pros meus filhos?\""
      },
      {
        trigger: "Pergunta ativa — retorno ao trabalho",
        speech: "\"Posso voltar pra creche amanhã? Tô com medo de perder o emprego.\""
      }
    ],
    hiddenInfo: [
      "Uso de lente de contato: Só revelar se o candidato perguntar especificamente — \"Ah, eu uso lente de contato colorida nos finais de semana, mas essa semana não usei.\"",
      "Histórico de alergia: Só revelar se perguntado — \"Tenho rinite alérgica, mas nunca tive problema nos olhos por causa disso.\""
    ],
    actorBehavior: "Tom levemente ansioso e envergonhado pelo aspecto estético. Colaborativa e comunicativa. Tende a minimizar os sintomas (\"acho que não é nada grave\"). Fica claramente preocupada ao mencionar o trabalho na creche e se anima quando o candidato demonstra empatia e escuta ativa. Coça os olhos durante a consulta se o candidato não orientar sobre isso."
  },
  instC: {
    diagnosis: "Conjuntivite bacteriana aguda bilateral (predominantemente OD), com possível disseminação por contato com crianças da creche.",
    differentials: [
      "Conjuntivite viral (adenovírus) — incluir: adenopatia pré-auricular presente, início unilateral com progressão contralateral, quadro epidemiológico (crianças da creche); excluir parcialmente: secreção predominantemente mucopurulenta (mais típica de bacteriana) e ausência de sintomas de via aérea superior.",
      "Conjuntivite alérgica — incluir: histórico de rinite alérgica, prurido intenso; excluir: secreção purulenta não é típica, sem exposição alergênica identificada, quadro epidemiológico coletivo.",
      "Ceratite — excluir: ausência de fotofobia intensa, córnea transparente ao exame, sem dor importante."
    ],
    context: "Adulta jovem, auxiliar de creche, com conjuntivite aguda bilateral de início unilateral há 3 dias, com secreção mucopurulenta, prurido e sensação de corpo estranho. Quadro epidemiológico sugestivo de transmissão no ambiente de trabalho (creche com casos semelhantes). A adenopatia pré-auricular levanta dúvida com conjuntivite viral, porém a secreção purulenta favorece etiologia bacteriana.",
    justify: "A conjuntivite bacteriana aguda é caracterizada por hiperemia conjuntival, secreção mucopurulenta (especialmente matinal com \"grudamento\" das pálpebras), ausência de dor significativa e ausência de alteração visual importante após limpeza. A progressão unilateral → bilateral em dias, o contexto epidemiológico com crianças acometidas na creche e a ausência de sintomas sistêmicos consolidam a hipótese. A adenopatia pré-auricular é mais sugestiva de etiologia viral (adenovírus), tornando o diagnóstico diferencial relevante — contudo, a secreção abundante e purulenta pesa para bacteriana. Na atenção primária, em adulto imunocompetente sem sinais de alarme, o tratamento empírico bacteriano é conduta aceita.",
    expectedAnamnesis: [
      "Início, tempo de evolução e olho acometido primeiro",
      "Caracterização da secreção (cor, consistência, quantidade)",
      "Prurido, dor, fotofobia, ardência, sensação de corpo estranho",
      "Alteração visual (embaçamento, queda de acuidade)",
      "Uso prévio de colírios ou medicamentos",
      "Casos semelhantes em contatos (família, trabalho)",
      "Uso de lentes de contato",
      "Antecedentes alérgicos (rinite, asma, dermatite atópica)",
      "Exposição a produtos químicos, cloro (piscina), vento/poeira",
      "Histórico de infecções oculares prévias"
    ],
    expectedPhysical: [
      "Sinais vitais: avaliar temperatura (febre ausente corrobora ausência de infecção sistêmica grave)",
      "Inspeção: avaliar pálpebras (edema, crostas), conjuntiva (hiperemia, papilas, folículos), córnea (transparência), íris e pupila",
      "Palpação: linfonodos pré-auriculares e submandibulares (adenopatia pré-auricular sugere etiologia viral)",
      "Avaliação da acuidade visual (teste de Snellen ou leitura de texto simples)",
      "Everter pálpebra superior para pesquisa de folículos/papilas e corpo estranho",
      "Reflexo fotomotor bilateral"
    ],
    expectedExams: [
      {
        exam: "Cultura de secreção conjuntival",
        justify: "Indicado apenas em casos graves, neonatos, falha terapêutica ou imunocomprometidos",
        expected: "Não indicado neste caso na APS"
      },
      {
        exam: "Biomicroscopia (lâmpada de fenda)",
        justify: "Avaliação detalhada de córnea e conjuntiva — realizada pelo oftalmologista",
        expected: "Reservado para encaminhamento se necessário"
      }
    ],
    expectedConduct: [
      "Farmacológica: Colírio de tobramicina 0,3% ou ciprofloxacino 0,3% — 1 a 2 gotas no(s) olho(s) afetado(s), 4x/dia, por 7 dias. Alternativa: colírio de azitromicina 1,5% — 1 gota 2x/dia por 3 dias. *(Baseado em: CBO/CFF, 2022; RENAME 2023 — tobramicina disponível no SUS como medicamento de atenção especializada; em muitas UBS, orienta-se encaminhamento ou uso de cloranfenicol colírio 0,5%, disponível na atenção básica, como alternativa de 1ª linha.)*",
      "Não farmacológica: Limpeza dos olhos com soro fisiológico ou água limpa; não coçar os olhos; não compartilhar toalhas, travesseiros ou maquiagem; lavagem frequente das mãos.",
      "Encaminhamento: Encaminhar ao oftalmologista se: ausência de melhora em 48–72h, piora da acuidade visual, fotofobia intensa, dor ocular, suspeita de ceratite ou uveíte.",
      "Orientações ao paciente: Explicar que a doença é contagiosa; orientar afastamento das crianças da creche pelo período de contagiosidade (mínimo 5–7 dias, enquanto houver secreção ativa); notificar surto ao serviço de saúde da creche.",
      "Seguimento: Retorno em 5–7 dias ou antes se piora. Sinais de alarme: dor intensa, queda de visão, opacidade da córnea."
    ],
    expectedCommunication: [
      "Apresentação: Apresentar-se pelo nome, cumprimentar a paciente, garantir privacidade, perguntar como se sente.",
      "Comunicação do diagnóstico: Explicar em linguagem acessível que se trata de uma infecção ocular (conjuntivite) bacteriana, provavelmente pega no contato com as crianças da creche; informar que é tratável e que não é grave se tratada corretamente.",
      "Escuta ativa: Acolher a preocupação com o trabalho; validar o sentimento de vergonha; esclarecer que o afastamento temporário é necessário para proteger as crianças, não uma punição."
    ],
    criticalErrors: [
      "Prescrever corticoide ocular tópico sem confirmação diagnóstica (pode agravar infecção bacteriana/viral e causar glaucoma corticosteróide-induzido)",
      "Não orientar sobre contagiosidade e medidas de controle (risco de surto na creche)",
      "Não avaliar a acuidade visual (pode perder diagnósticos graves como ceratite ou uveíte associada)",
      "Liberar a paciente para trabalhar imediatamente sem orientar sobre período de afastamento",
      "Não pesquisar uso de lente de contato (risco de ceratite associada — conduta diferente)",
      "-"
    ]
  },
  instD: {
    title: "",
    sections: [
      {
        h: "BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
        items: [
          {
            item: "Apresentou-se pelo nome ao iniciar a consulta",
            score: 0.5,
            ref: "CFM Res. 2.232/2019 — Relação médico-paciente"
          },
          {
            item: "Demonstrou escuta ativa, sem interromper a paciente durante a queixa inicial",
            score: 0.5,
            ref: "CFM Res. 2.232/2019"
          },
          {
            item: "Acolheu a preocupação da paciente com o trabalho de forma empática",
            score: 0.5,
            ref: "Política Nacional de Humanização, MS, 2013"
          }
        ]
      },
      {
        h: "BLOCO 2 — ANAMNESE",
        items: [
          {
            item: "Investigou início, evolução e olho acometido primeiro",
            score: 0.5,
            ref: "Semiologia Oftalmológica — CBO, 2019"
          },
          {
            item: "Caracterizou a secreção (cor, consistência, quantidade)",
            score: 1,
            ref: "CBO — Guia de Doenças Externas, 2019"
          },
          {
            item: "Perguntou sobre prurido, dor, fotofobia e sensação de corpo estranho",
            score: 0.5,
            ref: "CBO, 2019"
          },
          {
            item: "Investigou alteração visual (embaçamento, queda de acuidade)",
            score: 1,
            ref: "CBO, 2019"
          },
          {
            item: "Perguntou sobre casos semelhantes em contatos (família/trabalho)",
            score: 0.5,
            ref: "Protocolo de Vigilância Epidemiológica — MS, 2022"
          },
          {
            item: "Perguntou sobre uso de lentes de contato",
            score: 0.5,
            ref: "CBO — Conjuntivites, 2019"
          },
          {
            item: "Investigou histórico alérgico (rinite, asma, dermatite)",
            score: 0.5,
            ref: "CBO, 2019"
          }
        ]
      },
      {
        h: "BLOCO 3 — EXAME FÍSICO",
        items: [
          {
            item: "Avaliou a acuidade visual (teste de Snellen ou leitura de texto)",
            score: 1,
            ref: "CBO — Semiologia Ocular, 2019"
          },
          {
            item: "Inspecionou pálpebras, conjuntiva e córnea bilateralmente",
            score: 0.5,
            ref: "CBO, 2019"
          },
          {
            item: "Pesquisou adenopatia pré-auricular por palpação",
            score: 0.5,
            ref: "CBO — Conjuntivites, 2019"
          },
          {
            item: "Avaliou reflexo fotomotor direto e consensual",
            score: 0.5,
            ref: "Semiologia Médica — Porto, 2022"
          }
        ]
      },
      {
        h: "BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO",
        items: [
          {
            item: "Formulou hipótese de conjuntivite bacteriana como diagnóstico principal",
            score: 1,
            ref: "CBO — Conjuntivites Infecciosas, 2019"
          },
          {
            item: "Citou ao menos um diagnóstico diferencial pertinente (viral ou alérgica)",
            score: 0.5,
            ref: "CBO, 2019"
          },
          {
            item: "Justificou a não solicitação de exames complementares na APS (ou solicitou culturas apenas com justificativa adequada)",
            score: 0.5,
            ref: "Protocolo MS/APS — Olho Vermelho, 2021"
          }
        ]
      },
      {
        h: "BLOCO 5 — CONDUTA E ORIENTAÇÃO AO PACIENTE",
        items: [
          {
            item: "Prescreveu antibiótico tópico adequado (tobramicina, ciprofloxacino ou cloranfenicol colírio) com dose e duração corretas",
            score: 1,
            ref: "RENAME 2023; CBO, 2019"
          },
          {
            item: "Orientou sobre limpeza dos olhos com soro fisiológico e não coçar os olhos",
            score: 0.5,
            ref: "CBO, 2019"
          },
          {
            item: "Orientou sobre contagiosidade e necessidade de afastamento temporário do trabalho",
            score: 1,
            ref: "Protocolo de Vigilância — MS, 2022"
          },
          {
            item: "Orientou sinais de alarme para retorno imediato (dor intensa, queda de visão, piora)",
            score: 0.5,
            ref: "CBO, 2019"
          }
        ]
      }
    ]
  }
},

// CASO 02
{
  id: 2,
  title: 'Dor intensa no olho com visão turva e náusea',
  sub: 'UPA — Urgência e Emergência',
  tema: 'oftalmologia',
  topic: 'Glaucoma Agudo',
  level: 'complexo',
  cardAccent: '#E53935',
  instA: {
    scenario: 'Urgência e Emergência — UPA. Sala de triagem/consultório médico, turno noturno.',
    patient: 'M.A., 62 anos, feminino, aposentada, hipertensa em uso de losartana.',
    complaint: 'Dor forte no olho esquerdo com visão turva e enjoo há 4 horas.',
    tasks: [
      'Realize a anamnese dirigida ao caso.',
      'Realize o exame físico pertinente, incluindo a avaliação oftalmológica disponível na urgência.',
      'Formule a hipótese diagnóstica principal e os diagnósticos diferenciais relevantes.',
      'Estabeleça a conduta imediata e o plano de encaminhamento.',
      'Oriente a paciente sobre o diagnóstico e a urgência do tratamento.'
    ]
  },
  instB: {
    vitals: { PA: '168/98 mmHg', FC: '92 bpm', FR: '18 irpm', Tax: '36,6°C', Peso: '71 kg', Altura: '1,58 m', IMC: '28,4 kg/m²' },
    physicalGeneral: 'Regular estado geral, fácies de dor, corada, hidratada, anictérica, consciente e orientada, agitada com náuseas.',
    physicalSeg: 'OLHO ESQUERDO: Hiperemia ciliar intensa (ao redor da córnea — "injeção ciliar"), córnea com aspecto nebuloso/turvo ("corneal haze"), pupila em midríase média fixa (~6mm), não reagente à luz. Olho endurecido à palpação digital (tonometria digital positiva). Câmara anterior rasa. | OLHO DIREITO: Sem alterações. Pupila isocórica e fotorreagente. | NEUROLÓGICO: Sem déficits focais. Sem sinais meníngeos. Sem alteração de campo visual contralateral. | CARDIOVASCULAR: Bulhas rítmicas, 2T, sem sopros. PA elevada (conforme vitais). | GASTROINTESTINAL: Náuseas presentes, sem vômitos no momento.',
    labs: [
      { test: 'Glicemia capilar', val: '108 mg/dL', ref: '70–99 mg/dL (jejum)', alt: false },
      { test: 'Hemograma', val: 'Sem alterações', ref: '—', alt: false }
    ],
    image: 'Tonometria de aplanação não disponível na UPA — avaliar com tonometria digital ou encaminhar para oftalmologista emergencial.',
    note: 'Entregar impresso dos sinais vitais ao início. Entregar o impresso do exame físico segmentar quando o candidato iniciar o exame físico ou solicitar. Entregar exames laboratoriais apenas se solicitados verbalmente. Informar ao candidato que tonômetro de aplanação não está disponível na UPA.',
    patientProfile: 'Maria A., 62 anos, feminino, aposentada, casada. Hipertensa há 10 anos, em uso regular de losartana 50 mg/dia. Mora com o marido. Sem histórico oftalmológico prévio documentado.',
    script: [
      { trigger: 'Queixa principal', speech: 'Doutor, tô com uma dor horrorosa aqui no olho esquerdo desde umas 8 horas da noite. Tá me doendo muito, tô enjoada e a minha vista tá embaçada. Nunca senti isso antes.' },
      { trigger: 'Sobre a dor', speech: 'É uma dor forte, aqui no olho e na cabeça, do lado esquerdo. Parece que tá querendo explodir. Dei um Tylenol mas não passou.' },
      { trigger: 'Sobre a visão', speech: 'Tô vendo tudo embaçado no olho esquerdo. E tô vendo um arco-íris em volta das luzes, sabe? Fica aquele halo colorido nas lâmpadas.' },
      { trigger: 'Sobre náusea', speech: 'Tô muito enjoada. Quase vomitei no carro vindo pra cá. Achei que era problema de pressão ou de cabeça.' },
      { trigger: 'Sobre início', speech: 'Tava assistindo TV à noite, numa sala com pouca luz, aí começou de repente. Fui ao banheiro, acendi a luz e parecia que melhorou um pouquinho, mas continuou doendo.' },
      { trigger: 'Sobre histórico ocular', speech: 'Nunca tive problema no olho antes. Uso óculos de grau pra leitura, mas nunca fui ao oftalmologista de verdade, só comprei na ótica.' },
      { trigger: 'Sobre medicamentos', speech: 'Só tomo losartana 50 mg por dia pra pressão. Tomo direitinho.' },
      { trigger: 'Pergunta ativa — gravidade', speech: 'Doutor, é grave? Vou ficar cega?' },
      { trigger: 'Pergunta ativa — conduta', speech: 'O que vai acontecer comigo agora? Precisa operar?' }
    ],
    hiddenInfo: 'Histórico familiar de glaucoma: Só revelar se perguntado — "Ah, minha mãe tinha problema de pressão no olho, ficou quase cega de um olho. Nunca me disseram que eu tinha risco." | Uso de colírio com corticoide: Só revelar se perguntado sobre colírios — "Comprei um colírio no mercado tem uns 2 meses, pra alergia no olho. Acho que é de corticoide, o farmacêutico recomendou."',
    actorBehavior: 'Muito ansiosa e com dor intensa — fácies de sofrimento. Tende a dramatizar a dor (mão no olho/cabeça). Colaborativa, mas difícil de manter atenção nas explicações por causa da dor. Fica muito assustada ao ouvir que pode perder a visão, precisando de abordagem empática e direta. Responde bem a candidatos que demonstram segurança e rapidez na conduta.'
  },
  instC: {
    diagnosis: 'Glaucoma agudo de ângulo fechado (crise aguda de glaucoma) — olho esquerdo.',
    differentials: [
      'Cefaleia em salvas / enxaqueca oftálmica — incluir: dor periocular intensa, náusea; excluir: pupila midriática fixa, hiperemia ciliar, córnea turva e olho endurecido não são achados da enxaqueca.',
      'Uveíte anterior aguda (irite) — incluir: olho vermelho, dor, fotofobia, visão turva; excluir: pupila em miose (não midríase) na uveíte, sem halo colorido nas luzes.',
      'Ceratite aguda — incluir: dor ocular, visão turva, olho vermelho; excluir: ausência de úlcera corneana visível, pupila dilatada fixa não é achado de ceratite isolada.',
      'AVC / evento neurológico — incluir: cefaleia intensa de início súbito, náusea; excluir: sintoma estritamente unilateral ocular, sem déficits neurológicos, achados oculares específicos.'
    ],
    context: 'Mulher de 62 anos, hipertensa, com crise aguda de glaucoma de ângulo fechado precipitada provavelmente por ambiente com pouca iluminação (midríase fisiológica). Apresenta a tríade clássica: dor ocular intensa, visão turva com halos coloridos e náusea. Achados ao exame confirmam o diagnóstico: hiperemia ciliar, córnea turva, pupila em midríase média fixa e olho endurecido à palpação.',
    justify: 'A crise de glaucoma agudo ocorre pelo fechamento súbito do ângulo camerular, impedindo a drenagem do humor aquoso e elevando a PIO abruptamente (pode ultrapassar 50–70 mmHg). Achados patognomônicos: dor periocular intensa irradiada para a cabeça, visão turva com halos coloridos, náusea/vômito, pupila em midríase média arrefléxica, hiperemia ciliar e aumento da consistência ocular à palpação. O desencadeamento em ambiente pouco iluminado é classicamente descrito.',
    expectedAnamnesis: 'Início, duração e características da dor (localização, intensidade, irradiação) | Alteração visual: tipo de embaçamento, halos coloridos ao redor das luzes | Sintomas sistêmicos associados: náusea, vômito, cefaleia | Condições de iluminação no início dos sintomas | Histórico ocular prévio (óculos, colírios, cirurgias) | Uso de colírios (especialmente midriáticos ou corticoides) | Antecedentes sistêmicos (HAS, DM, doenças autoimunes) | Medicamentos em uso (sistêmicos e tópicos) | Histórico familiar de glaucoma ou problemas oculares | Episódios anteriores semelhantes (crises intermitentes)',
    expectedPhysical: 'Sinais vitais: avaliar PA (elevada pela dor/reação vasovagal) | Inspeção ocular: hiperemia ciliar (perilímbica), aspecto da córnea (turva/nebulosa) | Avaliação pupilar: midríase média (~5–6mm), arrefléxica, assimetria pupilar | Tonometria digital: pressionar delicadamente sobre a pálpebra superior com o olho fechado — olho acometido endurecido ("como pedra") vs. olho contralateral normal | Comparação bilateral dos olhos | Avaliação neurológica sumária: afastar AVC (déficit focal, meningismo)',
    expectedExams: [
      { exam: 'Tonometria de aplanação', justify: 'Confirmação e quantificação da PIO elevada', expected: 'PIO > 40 mmHg (frequentemente 50–70 mmHg na crise)' },
      { exam: 'Gonioscopia', justify: 'Avaliação do ângulo camerular', expected: 'Ângulo fechado — realizado pelo oftalmologista' },
      { exam: 'Glicemia capilar', justify: 'Excluir hipoglicemia como causa de alteração visual', expected: 'Normal neste caso' },
      { exam: 'Avaliação neurológica (TC de crânio)', justify: 'Excluir AVC em caso de dúvida diagnóstica', expected: 'Sem alterações — indicado apenas se dúvida persiste' }
    ],
    expectedConduct: 'Farmacológica (urgência — realizar imediatamente): Acetazolamida 500 mg VO (dose de ataque) — inibidor da anidrase carbônica, reduz produção de humor aquoso (RENAME 2023; CBO — Glaucoma, 2020). Colírio de timolol 0,5% — 1 gota no OE, reduz produção de humor aquoso. Colírio de pilocarpina 2% — 1 gota no OE a cada 15 min por 1h (miótico — rompe o bloqueio pupilar), aplicar somente após redução inicial da PIO. Manitol 20% IV 1–2 g/kg em 30–60 min se não houver melhora com medicação oral (agente hiperosmolar). Analgesia: dipirona ou paracetamol para dor. Antieméticos: metoclopramida ou ondansetrona para náuseas. | Não farmacológica: Repouso em decúbito dorsal; ambiente com boa iluminação (favorece miose); NPO se cirurgia de urgência prevista. | Encaminhamento: Encaminhamento imediato e urgente ao oftalmologista (plantão ou transferência para serviço de referência). A iridotomia a laser (YAG-laser) é o tratamento definitivo. O olho contralateral também deve ser tratado profilaticamente. | Orientações: Explicar que a pressão dentro do olho subiu de repente e precisa ser reduzida com urgência; tranquilizar que há tratamento eficaz; informar que o tratamento definitivo é um procedimento a laser rápido.',
    expectedCommunication: 'Apresentação: Apresentar-se com nome e função; acolher a paciente em sofrimento; transmitir segurança. | Comunicação do diagnóstico: Explicar em linguagem acessível que há um aumento súbito da pressão dentro do olho que precisa ser tratado com urgência; evitar termos que aumentem o pânico sem oferecer solução imediata. | Escuta ativa: Reconhecer a dor e o medo da paciente; não minimizar os sintomas; responder com honestidade sobre a gravidade e a necessidade de tratamento imediato.',
    criticalErrors: [
      'Não reconhecer a crise de glaucoma agudo como emergência oftalmológica e dispensar a paciente sem tratamento ou encaminhamento urgente',
      'Administrar colírio midriático (atropina, tropicamida) — agrava catastroficamente o fechamento angular e a crise',
      'Não encaminhar urgentemente ao oftalmologista (o atraso > 24–48h pode causar dano irreversível ao nervo óptico)',
      'Tratar apenas a cefaleia e náusea sem investigar etiologia ocular',
      'Não avaliar o olho contralateral (o olho "são" tem alto risco de crise futura e deve ser referenciado para tratamento profilático)'
    ]
  },
  instD: {
    title: 'CHECKLIST — DOR INTENSA NO OLHO COM VISÃO TURVA E NÁUSEA',
    sections: [
      { h: 'COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE', items: [
        { item: 'Apresentou-se pelo nome ao iniciar o atendimento', score: 0.5, ref: 'CFM Res. 2.232/2019' },
        { item: 'Acolheu a paciente de forma empática, reconhecendo a dor e o medo expressos', score: 0.5, ref: 'Política Nacional de Humanização, MS, 2013' },
        { item: 'Comunicou o diagnóstico e a urgência em linguagem acessível, sem usar termos técnicos sem explicação', score: 0.5, ref: 'CFM Res. 2.232/2019' }
      ]},
      { h: 'ANAMNESE', items: [
        { item: 'Investigou início, duração, localização e intensidade da dor ocular', score: 0.5, ref: 'CBO — Glaucoma, 2020' },
        { item: 'Perguntou sobre alteração visual (embaçamento, halos coloridos ao redor das luzes)', score: 1.0, ref: 'CBO — Glaucoma, 2020' },
        { item: 'Investigou sintomas sistêmicos associados (náusea, vômito, cefaleia)', score: 0.5, ref: 'CBO, 2020' },
        { item: 'Perguntou sobre uso de colírios (incluindo midriáticos e corticoides)', score: 0.5, ref: 'CBO, 2020' },
        { item: 'Investigou histórico familiar de glaucoma ou problemas oculares', score: 0.5, ref: 'CBO — Glaucoma, 2020' }
      ]},
      { h: 'EXAME FÍSICO', items: [
        { item: 'Avaliou a pupila bilateral (midríase média fixa no OE vs. normal no OD)', score: 1.0, ref: 'CBO — Semiologia Ocular, 2019' },
        { item: 'Realizou tonometria digital (comparação da consistência ocular bilateral)', score: 1.0, ref: 'CBO — Glaucoma, 2020' },
        { item: 'Inspecionou a córnea (aspecto turvo/nebuloso) e a hiperemia ciliar', score: 0.5, ref: 'CBO, 2020' }
      ]},
      { h: 'RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO', items: [
        { item: 'Formulou o diagnóstico de crise de glaucoma agudo como hipótese principal', score: 1.0, ref: 'CBO — Glaucoma Agudo, 2020' },
        { item: 'Citou ao menos dois diagnósticos diferenciais pertinentes (enxaqueca, uveíte, AVC)', score: 0.5, ref: 'CBO, 2020' },
        { item: 'Contraindicou explicitamente o uso de colírio midriático neste contexto', score: 1.0, ref: 'CBO — Glaucoma, 2020' }
      ]},
      { h: 'CONDUTA E ORIENTAÇÃO AO PACIENTE', items: [
        { item: 'Prescreveu acetazolamida 500 mg VO como medida imediata de redução da PIO', score: 1.0, ref: 'RENAME 2023; CBO — Glaucoma, 2020' },
        { item: 'Prescreveu colírio de timolol 0,5% ou pilocarpina 2% adequadamente', score: 0.5, ref: 'CBO — Glaucoma, 2020' },
        { item: 'Encaminhou urgentemente ao oftalmologista (plantão/transferência)', score: 1.0, ref: 'CBO, 2020' }
      ]}
    ]
  }
},

// CASO 03
{
  id: 3,
  title: 'Diabético de longa data com visão embaçada progressiva',
  sub: 'UBS — Atenção Primária',
  tema: 'oftalmologia',
  topic: 'Retinopatia Diabética',
  level: 'moderado',
  cardAccent: '#FF9800',
  instA: {
    scenario: 'Atenção Primária — UBS. Consultório médico, turno vespertino. Consulta de rotina para controle de diabetes.',
    patient: 'J.S., 58 anos, masculino, caminhoneiro aposentado, diabético tipo 2 há 14 anos e hipertenso.',
    complaint: 'Visão embaçada progressiva nos dois olhos nos últimos 6 meses, piora ao entardecer.',
    tasks: [
      'Realize a anamnese dirigida ao caso, incluindo avaliação do controle metabólico.',
      'Realize o exame físico pertinente, com avaliação oftalmológica disponível na APS.',
      'Identifique os fatores de risco e formule a hipótese diagnóstica principal.',
      'Solicite os exames complementares adequados.',
      'Oriente o paciente sobre o diagnóstico, conduta e importância do seguimento.'
    ]
  },
  instB: {
    vitals: { PA: '152/94 mmHg', FC: '80 bpm', FR: '16 irpm', Tax: '36,5°C', Peso: '88 kg', Altura: '1,72 m', IMC: '29,8 kg/m²' },
    physicalGeneral: 'Regular estado geral, sobrepeso, corado, hidratado, acianótico, anictérico, consciente e orientado.',
    physicalSeg: 'OLHOS: Acuidade visual reduzida bilateralmente (AV OD 20/80; AV OE 20/100 — tabela de Snellen). Reflexo fotomotor presente bilateralmente. Fundo de olho (se realizado com oftalmoscópio — resultado entregue como laudo): achados compatíveis com Retinopatia Diabética Não Proliferativa Moderada bilateral, com suspeita de edema macular à esquerda. | MEMBROS INFERIORES: Sensibilidade tátil e dolorosa reduzida em ambos os pés (monofilamento de Semmes-Weinstein — se avaliado). Pulsos periféricos presentes e simétricos. Sem úlceras. | CARDIOVASCULAR: Bulhas rítmicas, 2T, sem sopros. | ABDOME: Sem visceromegalias.',
    labs: [
      { test: 'Glicemia de jejum', val: '198 mg/dL', ref: '70–99 mg/dL', alt: true },
      { test: 'HbA1c', val: '9,2%', ref: '< 7% (meta DM2)', alt: true },
      { test: 'Creatinina', val: '1,4 mg/dL', ref: '0,7–1,2 mg/dL', alt: true },
      { test: 'Ureia', val: '48 mg/dL', ref: '15–45 mg/dL', alt: true },
      { test: 'Colesterol total', val: '224 mg/dL', ref: '< 200 mg/dL', alt: true },
      { test: 'LDL', val: '148 mg/dL', ref: '< 100 mg/dL (DM)', alt: true },
      { test: 'Triglicerídeos', val: '218 mg/dL', ref: '< 150 mg/dL', alt: true },
      { test: 'HDL', val: '38 mg/dL', ref: '> 40 mg/dL (H)', alt: true },
      { test: 'Microalbuminúria (relação alb/creat urinária)', val: '210 mg/g', ref: '< 30 mg/g', alt: true }
    ],
    image: 'Fundoscopia (oftalmoscopia direta): Disco óptico de limites definidos, relação escavação/disco 0,4 bilateralmente. Retina: múltiplos microaneurismas e hemorragias punctiformes nos quatro quadrantes. Exsudatos duros (lipídicos) na região macular bilateral, maiores à esquerda. Ausência de neovasos identificáveis. Sem hemorragia vítrea. Mácula: edema macular clinicamente significativo suspeito à esquerda. Vasos: artérias com fio de prata, cruzamentos arteriovenosos patológicos. Conclusão: achados compatíveis com Retinopatia Diabética Não Proliferativa Moderada bilateral, com suspeita de edema macular à esquerda.',
    note: 'Entregar sinais vitais ao início. Entregar exames laboratoriais somente se solicitados verbalmente. Entregar o laudo de fundoscopia apenas se o candidato solicitar o exame ou tentar realizá-lo. Não entregar exames não solicitados.',
    patientProfile: 'José S., 58 anos, masculino, caminhoneiro aposentado, casado. DM2 há 14 anos, HAS há 10 anos. Em uso de metformina 850 mg 2x/dia e glibenclamida 5 mg/dia, enalapril 20 mg/dia. Mora com a esposa, filhos adultos.',
    script: [
      { trigger: 'Queixa principal', speech: 'Doutor, tô vendo embaçado nos dois olhos faz uns 6 meses. Parece que tem um vidro fosco na frente. À noite piora mais.' },
      { trigger: 'Sobre evolução da visão', speech: 'Foi piorando devagar. No começo achei que era só cansaço ou que precisava trocar os óculos. Mas mesmo com os óculos tá ruim.' },
      { trigger: 'Sobre o diabetes', speech: 'Tenho diabetes faz uns 14 anos. Tomo o remédio, mas confesso que não cuido muito da alimentação. Como bastante doce mesmo.' },
      { trigger: 'Sobre consultas oftalmológicas', speech: 'Nunca fui ao oftalmologista desde que descobri o diabetes. Nunca me mandaram ir.' },
      { trigger: 'Sobre outros sintomas oculares', speech: 'Às vezes vejo umas manchas escuras flutuando, tipo moscas voando. Mas isso já faz um tempo.' },
      { trigger: 'Sobre pressão e rim', speech: 'A pressão eu tomo o remedinho. Mas não meço muito em casa não. O rim, nunca falaram nada.' },
      { trigger: 'Sobre pés', speech: 'Os pés estão dormentes faz um tempo. Achei que era da posição que eu dormia.' },
      { trigger: 'Pergunta ativa — diagnóstico', speech: 'Minha visão vai voltar ao normal, doutor? Isso tem cura?' },
      { trigger: 'Pergunta ativa — gravidade', speech: 'Posso ficar cego por causa do diabetes?' }
    ],
    hiddenInfo: 'Irregularidade no uso dos medicamentos: Só revelar se perguntado especificamente — "Às vezes esqueço de tomar a metformina, especialmente quando viajo. E a glibenclamida às vezes pulo também." | Tabagismo passado: Só revelar se perguntado sobre hábitos — "Fumei por 20 anos, parei faz 5 anos."',
    actorBehavior: 'Tom passivo e resignado — acostumado a conviver com o diabetes sem muita preocupação. Levemente surpreso com a gravidade quando informado. Fica visivelmente preocupado ao mencionar possibilidade de cegueira. Colaborativo, responde bem a abordagem empática e educativa. Tende a minimizar a irregularidade no uso dos medicamentos se não perguntado diretamente.'
  },
  instC: {
    diagnosis: 'Retinopatia Diabética Não Proliferativa Moderada bilateral, com suspeita de Edema Macular Diabético à esquerda. Nefropatia diabética incipiente (microalbuminúria). Dislipidemia. Neuropatia periférica diabética.',
    differentials: [
      'Catarata — incluir: visão embaçada progressiva bilateral, paciente diabético (maior risco); excluir: fundoscopia evidencia alterações retinianas típicas de RD, sem opacidade do cristalino descrita.',
      'Retinopatia Hipertensiva — incluir: HAS descontrolada, alterações vasculares no fundo de olho (fio de prata, cruzamentos AV); excluir: microaneurismas e exsudatos duros são mais característicos de RD; os dois podem coexistir.',
      'Degeneração Macular Relacionada à Idade (DMRI) — incluir: alterações maculares, faixa etária; excluir: ausência de drusas, o quadro é explicado pelo DM e achados compatíveis com edema macular diabético.'
    ],
    context: 'Homem de 58 anos com DM2 de longa evolução (14 anos) e mau controle metabólico (HbA1c 9,2%), sem seguimento oftalmológico prévio, apresentando perda visual bilateral progressiva e achados fundoscópicos compatíveis com RD não proliferativa moderada. Múltiplas complicações microvasculares presentes: retinopatia, nefropatia e neuropatia.',
    justify: 'A RD é a principal complicação ocular do diabetes e a maior causa de cegueira em adultos em idade ativa no Brasil. O risco aumenta com o tempo de doença (>10 anos) e mau controle glicêmico e pressórico. Os achados fundoscópicos (microaneurismas, hemorragias punctiformes, exsudatos duros, edema macular) são típicos da fase não proliferativa moderada. A ausência de neovasos confirma a fase não proliferativa. O edema macular é a principal causa de redução de acuidade visual na RD.',
    expectedAnamnesis: 'Tipo e tempo de evolução do DM; nível de controle glicêmico | Medicamentos em uso e regularidade de uso | Histórico de consultas oftalmológicas prévias | Caracterização da perda visual (progressão, bilateral, embaçamento) | Presença de moscas volantes (corpos flutuantes) | Controle pressórico e nível habitual de PA | Exames laboratoriais recentes (HbA1c, função renal, lipídios) | Sintomas de outras complicações do DM (neuropatia, nefropatia) | Hábitos de vida: alimentação, tabagismo, etilismo, atividade física | Histórico familiar de DM e complicações',
    expectedPhysical: 'Sinais vitais: PA (descontrole pressórico é fator de risco adicional para RD) | Acuidade visual: tabela de Snellen bilateral | Avaliação pupilar e reflexo fotomotor | Fundoscopia/oftalmoscopia direta: microaneurismas, hemorragias, exsudatos, neovasos, edema macular | Exame neurológico dos membros inferiores: monofilamento de 10g, diapasão (128 Hz), reflexo aquileu | Avaliação dos pés (úlceras, calosidades)',
    expectedExams: [
      { exam: 'HbA1c', justify: 'Avaliação do controle glicêmico nos últimos 3 meses', expected: '9,2% — acima da meta' },
      { exam: 'Glicemia de jejum', justify: 'Controle glicêmico pontual', expected: '198 mg/dL — alterada' },
      { exam: 'Creatinina e ureia', justify: 'Rastreamento de nefropatia diabética', expected: 'Creatinina 1,4 mg/dL — limítrofe' },
      { exam: 'Microalbuminúria (RAC urinária)', justify: 'Marcador precoce de nefropatia', expected: '210 mg/g — microalbuminúria presente' },
      { exam: 'Lipidograma', justify: 'Dislipidemia como fator de risco cardiovascular e ocular', expected: 'LDL 148, TG 218 — alterados' },
      { exam: 'Fundoscopia', justify: 'Rastreamento e estadiamento da retinopatia', expected: 'RD não proliferativa moderada, EMD suspeito' }
    ],
    expectedConduct: 'Farmacológica: Otimizar controle glicêmico — avaliar troca ou ajuste da terapia (ex: adicionar inibidor de SGLT-2 como empagliflozina, com proteção renal — Diretriz SBD 2024); orientar adesão à metformina e glibenclamida. Otimizar controle pressórico: meta PA < 130/80 mmHg no diabético — ajustar enalapril se necessário (7ª Diretriz Brasileira de HAS, SBC/2016). Tratar dislipidemia: iniciar estatina de alta potência (rosuvastatina 20 mg ou atorvastatina 40 mg) — meta LDL < 70 mg/dL no DM com complicações (Diretriz SBD 2024; Diretriz SBC 2020). | Não farmacológica: Dieta hipoglicêmica e hipossódica; atividade física regular (150 min/semana de aeróbico moderado); cessação do tabagismo; autocuidado dos pés. | Encaminhamento: Encaminhamento urgente ao oftalmologista para: confirmação de edema macular (angiofluoresceinografia ou OCT macular), definição de tratamento específico da RD (fotocoagulação a laser, anti-VEGF intravítreo). Encaminhamento ao nefrologista dado nefropatia incipiente. | Orientações: Explicar que o embaçamento da visão é causado pelo diabetes afetando os vasos do olho; que o controle do açúcar e da pressão podem estabilizar a progressão; que existe tratamento específico; que a cegueira pode ser evitada com tratamento precoce. | Seguimento: Retorno em 30 dias para reavaliação do controle metabólico. Rastreamento oftalmológico anual obrigatório para todos os DM2 (Diretriz SBD 2024).',
    expectedCommunication: 'Apresentação: Apresentar-se com clareza; criar vínculo com paciente crônico; perguntar como está se sentindo além da queixa visual. | Comunicação do diagnóstico: Explicar que o diabetes afetou os vasos do olho e do rim; usar analogias simples; evitar catastrofismo, mas ser honesto sobre a gravidade. | Escuta ativa: Acolher o medo de cegueira; validar a preocupação; empoderar o paciente com informação sobre o que ele pode fazer para melhorar.',
    criticalErrors: [
      'Não solicitar fundoscopia nem encaminhar ao oftalmologista em paciente diabético com queixa visual (perder o rastreamento obrigatório)',
      'Não avaliar e não tratar o descontrole glicêmico e pressórico (fatores modificáveis que aceleram a progressão da RD)',
      'Não investigar outras complicações microvasculares do DM (nefropatia, neuropatia) — oportunidade perdida de diagnóstico precoce',
      'Tranquilizar o paciente dizendo que a visão vai melhorar sem tratamento específico (falsa expectativa)',
      'Não mencionar a necessidade de rastreamento oftalmológico anual para pacientes diabéticos'
    ]
  },
  instD: {
    title: 'CHECKLIST — DIABÉTICO COM VISÃO EMBAÇADA PROGRESSIVA',
    sections: [
      { h: 'COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE', items: [
        { item: 'Apresentou-se pelo nome ao iniciar a consulta', score: 0.3, ref: 'CFM Res. 2.232/2019' },
        { item: 'Demonstrou escuta ativa e acolheu o medo de cegueira com empatia', score: 0.5, ref: 'Política Nacional de Humanização, MS, 2013' },
        { item: 'Explicou o diagnóstico e a conduta em linguagem acessível, sem jargão técnico', score: 0.5, ref: 'CFM Res. 2.232/2019' }
      ]},
      { h: 'ANAMNESE', items: [
        { item: 'Investigou tempo de DM, tipo de tratamento e regularidade do uso dos medicamentos', score: 1.0, ref: 'Diretriz SBD 2024' },
        { item: 'Perguntou sobre histórico de consultas oftalmológicas e último exame de fundo de olho', score: 1.0, ref: 'Diretriz SBD 2024; CBO, 2020' },
        { item: 'Caracterizou a perda visual (progressão, bilateral, embaçamento, moscas volantes)', score: 0.5, ref: 'CBO — Retinopatia Diabética, 2020' },
        { item: 'Investigou sintomas de outras complicações microvasculares (dormência nos pés, edema)', score: 0.5, ref: 'Diretriz SBD 2024' },
        { item: 'Perguntou sobre controle pressórico e hábitos de vida (alimentação, tabagismo, atividade física)', score: 0.5, ref: 'SBC, 2016; Diretriz SBD 2024' }
      ]},
      { h: 'EXAME FÍSICO', items: [
        { item: 'Avaliou a acuidade visual bilateral (tabela de Snellen ou equivalente)', score: 0.5, ref: 'CBO — Semiologia Ocular, 2019' },
        { item: 'Realizou ou solicitou fundoscopia / oftalmoscopia direta', score: 1.0, ref: 'Diretriz SBD 2024; CBO, 2020' },
        { item: 'Avaliou sensibilidade dos membros inferiores (monofilamento ou diapasão)', score: 0.5, ref: 'Diretriz SBD 2024' }
      ]},
      { h: 'RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO', items: [
        { item: 'Formulou hipótese de retinopatia diabética com base nos achados clínicos e laboratoriais', score: 1.0, ref: 'Diretriz SBD 2024; CBO, 2020' },
        { item: 'Solicitou HbA1c e lipidograma adequadamente', score: 0.5, ref: 'Diretriz SBD 2024' },
        { item: 'Solicitou microalbuminúria (RAC urinária) para rastreamento de nefropatia', score: 0.5, ref: 'Diretriz SBD 2024' }
      ]},
      { h: 'CONDUTA E ORIENTAÇÃO AO PACIENTE', items: [
        { item: 'Encaminhou ao oftalmologista para avaliação especializada da retinopatia e edema macular', score: 1.0, ref: 'Diretriz SBD 2024; CBO, 2020' },
        { item: 'Otimizou ou planejou ajuste do controle glicêmico e pressórico', score: 0.5, ref: 'Diretriz SBD 2024; SBC, 2016' },
        { item: 'Indicou tratamento da dislipidemia com estatina de alta potência', score: 0.3, ref: 'Diretriz SBD 2024; SBC Dislipidemia, 2020' },
        { item: 'Orientou o paciente sobre a necessidade de rastreamento oftalmológico anual', score: 0.5, ref: 'Diretriz SBD 2024' }
      ]}
    ]
  }
}

,

// CASO 04
{
  id: 4,
  title: 'Idoso com dificuldade progressiva para enxergar e dirigir à noite',
  sub: 'Ambulatório — Clínica Médica / APS',
  tema: 'oftalmologia',
  topic: 'Catarata',
  level: 'simples',
  cardAccent: '#9C27B0',
  instA: {
    scenario: 'Atenção Primária — UBS. Consultório de clínica geral, turno matutino.',
    patient: 'A.F., 71 anos, masculino, aposentado (ex-agricultor), hipertenso e ex-tabagista.',
    complaint: 'Visão embaçada progressiva nos dois olhos há cerca de 1 ano, piora à noite e ao sol.',
    tasks: [
      'Realize a anamnese dirigida ao caso.',
      'Realize o exame físico oftalmológico pertinente.',
      'Formule a hipótese diagnóstica e os principais diagnósticos diferenciais.',
      'Oriente o paciente sobre o diagnóstico, conduta e possibilidades de tratamento.',
      'Estabeleça o plano de seguimento e encaminhamento adequado.'
    ]
  },
  instB: {
    vitals: { PA: '138/84 mmHg', FC: '74 bpm', FR: '15 irpm', Tax: '36,4°C', Peso: '76 kg', Altura: '1,68 m', IMC: '26,9 kg/m²' },
    physicalGeneral: 'Bom estado geral, fácies senil, corado, hidratado, anictérico, consciente e orientado, marcha preservada.',
    physicalSeg: 'OLHO DIREITO: Acuidade visual 20/200 (Snellen). Reflexo fotomotor presente. Opacidade do cristalino visível à inspeção com lanterna (reflexo vermelho ausente / reflexo pupilar com tonalidade acinzentada). Sem hiperemia ciliar. Sem dor. | OLHO ESQUERDO: Acuidade visual 20/100 (Snellen). Reflexo fotomotor presente. Opacidade do cristalino leve-moderada à inspeção. Reflexo vermelho atenuado. | DEMAIS SISTEMAS: Sem alterações relevantes.',
    labs: [
      { test: 'Glicemia de jejum', val: '96 mg/dL', ref: '70–99 mg/dL', alt: false },
      { test: 'Creatinina', val: '1,1 mg/dL', ref: '0,7–1,2 mg/dL', alt: false },
      { test: 'Hemograma', val: 'Sem alterações', ref: '—', alt: false }
    ],
    image: null,
    note: 'Entregar sinais vitais ao início. Entregar exames laboratoriais somente se solicitados. Informar ao candidato que oftalmoscópio está disponível na estação — entregar laudo de fundoscopia descrito no physicalSeg se candidato tentar realizar ou solicitar o exame.',
    patientProfile: 'Antônio F., 71 anos, masculino, aposentado (ex-agricultor), casado. Hipertenso há 15 anos, em uso de amlodipina 5 mg/dia. Ex-tabagista (parou há 8 anos, fumou por 30 anos). Mora com a esposa na zona rural.',
    script: [
      { trigger: 'Queixa principal', speech: 'Doutor, tô enxergando cada vez pior. Parece que tem um véu na frente dos olhos. Tá difícil há uns 12 meses, mas esse último mês piorou mais.' },
      { trigger: 'Sobre visão noturna', speech: 'À noite é horrível. Os faróis dos carros encandeia muito, vejo uns halos brancos ao redor das luzes. Parei de dirigir à noite com medo de acidente.' },
      { trigger: 'Sobre visão diurna', speech: 'De dia com sol forte também piora. Parece que as cores ficam desbotadas, amareladas.' },
      { trigger: 'Sobre dor', speech: 'Não dói nada, doutor. Só não enxergo direito.' },
      { trigger: 'Sobre progressão', speech: 'Foi devagar. Primeiro achei que era os óculos que precisavam trocar. Fui à ótica, eles aumentaram o grau, mas não melhorou não.' },
      { trigger: 'Sobre impacto na vida', speech: 'Tô com dificuldade pra ler, ver televisão, e até pra trabalhar na roça tá difícil. Minha mulher tá tendo que me ajudar com tudo.' },
      { trigger: 'Sobre sol', speech: 'Trabalhei na roça a vida toda, muito tempo no sol. Nunca usei óculos de sol.' },
      { trigger: 'Pergunta ativa — tratamento', speech: 'Isso tem cura, doutor? Tem algum colírio que resolve?' },
      { trigger: 'Pergunta ativa — cirurgia', speech: 'Precisa de cirurgia? É perigosa? É pelo SUS?' }
    ],
    hiddenInfo: 'Uso de corticoide sistêmico: Só revelar se perguntado sobre medicamentos de uso contínuo — "Ah, tomo aquela prednisolona 5 mg todo dia faz uns 2 anos. O reumatologista passou pra minha artrite." | Histórico familiar: Só revelar se perguntado — "Minha mãe também ficou com os olhos brancos quando ficou velha. Operou e melhorou."',
    actorBehavior: 'Tom calmo e resignado, típico de idoso do interior. Levemente constrangido ao admitir que parou de dirigir. Fica animado e esperançoso quando o candidato menciona que há tratamento. Resiste levemente à ideia de cirurgia, mas cede com explicação tranquilizadora. Colaborativo.'
  },
  instC: {
    diagnosis: 'Catarata senil bilateral, com maior comprometimento no olho direito. Fatores contribuintes: idade avançada, exposição solar crônica (trabalho rural), uso de corticoide sistêmico prolongado (revelado se perguntado), tabagismo pregresso.',
    differentials: [
      'Retinopatia diabética — incluir: embaçamento visual progressivo bilateral; excluir: glicemia normal, ausência de microaneurismas no fundo de olho, opacidade do cristalino visível à inspeção.',
      'Glaucoma crônico de ângulo aberto — incluir: perda visual progressiva, sem dor, idoso; excluir: perda visual no glaucoma é periférica (não central como na catarata), reflexo vermelho ausente é achado de catarata.',
      'Degeneração Macular Relacionada à Idade — incluir: perda central da visão em idoso; excluir: a DMRI afeta principalmente a visão central com distorção de imagens, enquanto a catarata causa embaçamento difuso; opacidade do cristalino presente.'
    ],
    context: 'Idoso de 71 anos com catarata senil bilateral progressiva, com perda visual significativa (20/200 OD), impacto funcional relevante (parou de dirigir, dificuldade nas AVDs) e fatores de risco clássicos: idade, exposição solar crônica e uso de corticoide sistêmico. A catarata é a principal causa de cegueira evitável no mundo e no Brasil.',
    justify: 'A catarata é a opacificação progressiva do cristalino, sendo a principal causa de cegueira evitável globalmente. O diagnóstico é essencialmente clínico: perda visual progressiva bilateral (frequentemente assimétrica), embaçamento, sensibilidade ao brilho e halos luminosos, redução de acuidade visual ao Snellen, e opacidade do cristalino visível à inspeção com ausência do reflexo vermelho à oftalmoscopia. Fatores de risco: idade > 60 anos, exposição UV crônica, tabagismo, uso de corticosteroides.',
    expectedAnamnesis: 'Início e progressão da perda visual (bilateral, assimétrica?) | Caracterização: embaçamento, halos de luz, fotofobia, perda de contraste/cor | Impacto funcional: dirigir, ler, AVDs | Uso de óculos e história de trocas frequentes de grau | Ausência de dor (importante para excluir glaucoma agudo) | Fatores de risco: exposição solar, tabagismo, uso de corticoides, DM | Medicamentos em uso (corticoides sistêmicos ou tópicos) | Histórico familiar de catarata | Condições sistêmicas: DM, uveíte, traumatismo ocular prévio',
    expectedPhysical: 'Acuidade visual com tabela de Snellen (bilateral) | Inspeção pupilar com lanterna: opacidade do cristalino, reflexo pupilar com tonalidade acinzentada | Reflexo vermelho: ausente ou atenuado na catarata (teste de Brückner) | Avaliação da motilidade ocular extrínseca | Reflexo fotomotor direto e consensual | Tonometria digital (excluir glaucoma associado)',
    expectedExams: [
      { exam: 'Fundoscopia', justify: 'Avaliar retina e excluir outras causas de perda visual', expected: 'Dificultada pela opacidade do cristalino; solicitar ao oftalmologista' },
      { exam: 'Glicemia / HbA1c', justify: 'Rastreamento de DM como fator de risco', expected: 'Normal neste caso' },
      { exam: 'Biometria ocular', justify: 'Cálculo do poder da lente intraocular — pré-operatório', expected: 'Realizado pelo oftalmologista' }
    ],
    expectedConduct: 'Farmacológica: Não há medicamento comprovado para reverter ou estabilizar a catarata. Colírios "antioxidantes" não têm eficácia comprovada e não devem ser prescritos. (CBO, 2020; SBO, 2022) | Não farmacológica: Uso de óculos escuros com proteção UV; iluminação adequada para leitura; orientar sobre risco de quedas e acidentes. | Encaminhamento: Encaminhamento ao oftalmologista para confirmação diagnóstica, avaliação pré-operatória e indicação cirúrgica. A cirurgia de catarata (facoemulsificação com implante de lente intraocular) é o único tratamento efetivo e está disponível pelo SUS. | Orientações: Explicar que a "névoa" é causada pelo cristalino que ficou opaco; que não existe colírio que cure; que a cirurgia é segura, rápida (~20 min), disponível pelo SUS. | Seguimento: Após encaminhamento, aguardar retorno com laudo do oftalmologista. Manter controle das comorbidades (HAS, uso de corticoide com o reumatologista).',
    expectedCommunication: 'Apresentação: Apresentar-se com clareza; acolher o idoso. | Comunicação do diagnóstico: Usar linguagem simples — "A lente natural do seu olho ficou opaca, como um vidro que embaçou"; tranquilizar sobre a segurança da cirurgia. | Escuta ativa: Acolher o medo de cirurgia; oferecer informações completas sobre o procedimento e o SUS.',
    criticalErrors: [
      'Prescrever colírio para "tratar" a catarata (não há tratamento farmacológico eficaz — conduta incorreta)',
      'Não encaminhar ao oftalmologista em paciente com perda visual significativa e impacto funcional documentado',
      'Não investigar causas secundárias de catarata (uso de corticoide, DM)',
      'Não avaliar a acuidade visual com tabela de Snellen (impossível estadiar sem acuidade visual objetiva)',
      'Não orientar sobre risco de quedas em idoso com baixa acuidade visual bilateral'
    ]
  },
  instD: {
    title: 'CHECKLIST — IDOSO COM VISÃO EMBAÇADA PROGRESSIVA E DIFICULDADE NOTURNA',
    sections: [
      { h: 'COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE', items: [
        { item: 'Apresentou-se pelo nome e demonstrou respeito ao paciente idoso', score: 0.5, ref: 'CFM Res. 2.232/2019' },
        { item: 'Explicou o diagnóstico e o tratamento em linguagem acessível e sem jargão', score: 0.5, ref: 'CFM Res. 2.232/2019' },
        { item: 'Acolheu o medo da cirurgia com empatia e forneceu informações tranquilizadoras e verdadeiras', score: 0.5, ref: 'Política Nacional de Humanização, MS, 2013' }
      ]},
      { h: 'ANAMNESE', items: [
        { item: 'Investigou início e progressão da perda visual, bilateralidade e assimetria', score: 0.5, ref: 'CBO — Catarata, 2020' },
        { item: 'Perguntou sobre halos de luz, fotofobia, dificuldade noturna e perda de contraste', score: 0.5, ref: 'CBO — Catarata, 2020' },
        { item: 'Investigou impacto funcional (dirigir, ler, AVDs)', score: 0.5, ref: 'CBO, 2020' },
        { item: 'Perguntou sobre uso de corticoides sistêmicos ou tópicos', score: 1.0, ref: 'CBO — Catarata, 2020; SBD 2024' },
        { item: 'Investigou fatores de risco: exposição solar, tabagismo, DM, histórico familiar', score: 0.5, ref: 'CBO — Catarata, 2020' }
      ]},
      { h: 'EXAME FÍSICO', items: [
        { item: 'Avaliou acuidade visual bilateral com tabela de Snellen', score: 1.0, ref: 'CBO — Semiologia Ocular, 2019' },
        { item: 'Pesquisou opacidade do cristalino à inspeção com lanterna (reflexo pupilar acinzentado)', score: 1.0, ref: 'CBO — Catarata, 2020' },
        { item: 'Avaliou reflexo vermelho (teste de Brückner) com oftalmoscópio', score: 0.5, ref: 'CBO, 2020' }
      ]},
      { h: 'RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO', items: [
        { item: 'Formulou hipótese de catarata senil bilateral com base nos achados', score: 1.0, ref: 'CBO — Catarata, 2020' },
        { item: 'Citou ao menos dois diagnósticos diferenciais pertinentes (glaucoma, DMRI, RD)', score: 0.5, ref: 'CBO, 2020' },
        { item: 'Afirmou que não há tratamento farmacológico eficaz para catarata', score: 0.5, ref: 'CBO — Catarata, 2020; SBO, 2022' }
      ]},
      { h: 'CONDUTA E ORIENTAÇÃO AO PACIENTE', items: [
        { item: 'Encaminhou ao oftalmologista para confirmação diagnóstica e avaliação cirúrgica', score: 1.0, ref: 'CBO — Catarata, 2020' },
        { item: 'Orientou sobre disponibilidade da cirurgia pelo SUS e sua eficácia', score: 0.5, ref: 'MS — Protocolo Catarata SUS, 2022' },
        { item: 'Orientou sobre prevenção de quedas e segurança (não dirigir à noite)', score: 0.5, ref: 'MS — Saúde do Idoso, 2022' }
      ]}
    ]
  }
},

// CASO 05
{
  id: 5,
  title: 'Dor no olho após trabalhar com rebolo sem proteção',
  sub: 'UPA — Urgência e Emergência',
  tema: 'oftalmologia',
  topic: 'Trauma Ocular / Corpo Estranho Corneano',
  level: 'moderado',
  cardAccent: '#F44336',
  instA: {
    scenario: 'Urgência e Emergência — UPA. Sala de atendimento rápido, turno vespertino.',
    patient: 'P.R., 34 anos, masculino, mecânico, sem comorbidades relevantes.',
    complaint: 'Dor e ardência no olho direito após trabalhar com rebolo há 2 horas, sem proteção nos olhos.',
    tasks: [
      'Realize a anamnese dirigida ao caso, incluindo avaliação do mecanismo do trauma.',
      'Realize o exame físico oftalmológico pertinente disponível na urgência.',
      'Formule a hipótese diagnóstica e identifique sinais de alarme para perfuração ocular.',
      'Estabeleça a conduta imediata adequada.',
      'Oriente o paciente sobre o tratamento, seguimento e prevenção.'
    ]
  },
  instB: {
    vitals: { PA: '128/82 mmHg', FC: '88 bpm', FR: '17 irpm', Tax: '36,7°C', Peso: '80 kg', Altura: '1,75 m', IMC: '26,1 kg/m²' },
    physicalGeneral: 'Bom estado geral, fácies de dor e desconforto, corado, hidratado, consciente e orientado. Mão no olho direito ao entrar na sala.',
    physicalSeg: 'OLHO DIREITO: Hiperemia conjuntival moderada (+2/4). Lacrimejamento intenso e blefarospasmo. Acuidade visual OD: 20/40 (reduzida, melhora com o piscar). Córnea com pequeno ponto de hiperemia paracentral às 9h (visível com lanterna). Pupila isocórica e fotorreagente. Câmara anterior aparentemente íntegra. Sem hipópio visível. Sem hemorragia subconjuntival extensa. | OLHO ESQUERDO: Sem alterações. AV 20/20. | PÁLPEBRAS: Sem laceração. Eversão da pálpebra superior OD: fragmento metálico linear (~2mm) visível na conjuntiva tarsal superior.',
    labs: [],
    image: 'Radiografia de órbita (PA e perfil — se solicitada): Sem evidência de corpo estranho intraocular radiodenso. Sem fratura de órbita. Integridade das paredes orbitárias preservada.',
    note: 'Entregar sinais vitais ao início. Entregar o impresso do exame físico segmentar quando candidato iniciar o exame. Entregar a radiografia de órbita somente se solicitada verbalmente. A eversão da pálpebra superior é um achado que o candidato deve pesquisar ativamente — informar o achado (fragmento metálico na conjuntiva tarsal) somente se o candidato realizar ou solicitar a manobra de eversão palpebral.',
    patientProfile: 'Paulo R., 34 anos, masculino, mecânico automotivo, casado, pai de dois filhos. Sem comorbidades. Sem alergias medicamentosas conhecidas.',
    script: [
      { trigger: 'Queixa principal', speech: 'Doutor, tava lixando uma peça com o rebolo e alguma coisa entrou no meu olho. Tá ardendo muito, lacrimejando e não consigo nem abrir o olho direito.' },
      { trigger: 'Sobre o mecanismo', speech: 'Tava sem óculos de proteção, foi rapidinho. Senti uma coisa bater no olho e aí começou a arder muito.' },
      { trigger: 'Sobre tentativa de tirar', speech: 'Tentei esfregar o olho pra tirar, mas a minha esposa falou pra não fazer isso. Lavei com água da torneira.' },
      { trigger: 'Sobre dor', speech: 'Dói muito. É uma ardência, e parece que tem um cisco lá dentro que não sai.' },
      { trigger: 'Sobre visão', speech: 'Tá um pouco embaçada, mas quando pisca parece que melhora.' },
      { trigger: 'Sobre proteção', speech: 'Sei que devia usar os óculos, mas esqueci na bancada. Foi descuido meu mesmo.' },
      { trigger: 'Sobre dor à luz', speech: 'A luz incomoda bastante. Prefiro ficar com o olho fechado.' },
      { trigger: 'Pergunta ativa — gravidade', speech: 'Doutor, vou ficar sem enxergar? Tá perfurado?' },
      { trigger: 'Pergunta ativa — retorno ao trabalho', speech: 'Posso trabalhar amanhã? Preciso muito, tenho conta a pagar.' }
    ],
    hiddenInfo: 'Alergia a antibiótico: Só revelar se perguntado diretamente sobre alergias — "Sou alérgico a penicilina. Fico com alergia na pele." | Uso de lente de contato: Só revelar se perguntado especificamente — "Não uso não. Nunca usei."',
    actorBehavior: 'Ansioso e com dor visível — tende a manter o olho fechado e a protegê-lo com a mão. Blefarospasmo simulado. Colaborativo, mas resistente ao exame pela dor. Responde bem a candidatos que pedem permissão e explicam o procedimento antes de examinar. Fica muito aliviado quando o candidato confirma que não há perfuração.'
  },
  instC: {
    diagnosis: 'Corpo estranho conjuntival (fragmento metálico na conjuntiva tarsal superior OD) com abrasão corneana associada. Sem sinais de perfuração ocular.',
    differentials: [
      'Perfuração ocular / corpo estranho intraocular — incluir: trauma por projétil de alta velocidade (rebolo/metal), dor intensa; excluir: câmara anterior íntegra, pupila regular, sem hipópio, sem distorção pupilar, RX de órbita sem corpo estranho intraocular radiodenso.',
      'Ceratite por abrasão corneana isolada — incluir: dor, fotofobia, blefarospasmo após trauma; excluir: a eversão da pálpebra revelou corpo estranho conjuntival — não é apenas abrasão isolada.',
      'Uveíte traumática — incluir: trauma ocular, dor e fotofobia; excluir: câmara anterior sem células/flare visíveis, pupila regular, sem hipópio.'
    ],
    context: 'Adulto jovem, mecânico, com trauma ocular por fragmento metálico de alta velocidade (rebolo) sem uso de EPI. Corpo estranho conjuntival identificado na eversão da pálpebra superior, com abrasão corneana associada. Sem sinais de perfuração ocular — diagnóstico crítico a ser excluído sistematicamente em todos os traumas oculares.',
    justify: 'O trauma ocular por partícula metálica projetada em alta velocidade é causa frequente de corpo estranho ocular e potencial perfuração. A avaliação sistemática deve incluir: eversão palpebral superior e inferior, avaliação da integridade da câmara anterior, pupila, hipópio e, quando disponível, teste de fluoresceína. A pesquisa de corpo estranho intraocular deve ser feita com imagem (RX ou TC de órbita) quando há suspeita de projétil penetrante.',
    expectedAnamnesis: 'Mecanismo do trauma: tipo de ferramenta, velocidade, direção do impacto | Uso de EPI (óculos de proteção) | Tempo decorrido desde o trauma | Tentativas prévias de remoção | Lavagem ocular realizada | Caracterização da dor, fotofobia, lacrimejamento, blefarospasmo | Alteração visual | Alergias medicamentosas (especialmente antibióticos) | Uso de lentes de contato | Comorbidades (DM, imunossupressão) | Histórico de vacina antitetânica atualizada',
    expectedPhysical: 'Acuidade visual bilateral antes de qualquer manipulação | Inspeção das pálpebras e conjuntiva | Eversão da pálpebra superior (obrigatória em todo trauma ocular): pesquisa de corpo estranho subpalpebral | Eversão da pálpebra inferior: pesquisa no fórnice inferior | Avaliação da córnea: integridade, corpo estranho superficial, abrasão (teste de fluoresceína se disponível) | Avaliação pupilar: forma, simetria, reatividade (pupila irregular sugere perfuração) | Câmara anterior: profundidade, hipópio | Tonometria digital (hipotonia sugere perfuração) | Reflexo fotomotor',
    expectedExams: [
      { exam: 'Radiografia de órbita (PA + perfil)', justify: 'Pesquisa de corpo estranho intraocular radiodenso (metal)', expected: 'Sem corpo estranho intraocular neste caso' },
      { exam: 'TC de órbita', justify: 'Indicada se RX inconclusivo ou alta suspeita de perfuração', expected: 'Reservada para casos com forte suspeita' },
      { exam: 'Teste de fluoresceína', justify: 'Mapear extensão da abrasão corneana', expected: 'Não disponível na UPA — encaminhar ao oftalmologista' }
    ],
    expectedConduct: 'Imediata: Lavagem ocular com SF 0,9% abundante; remoção do corpo estranho conjuntival com cotonete estéril úmido ou irrigação — SOMENTE se superficial e acessível, e após anestesia tópica (proximetacaína 0,5%) se disponível; NÃO tentar remover corpo estranho corneano penetrante — encaminhar. | Farmacológica: Colírio antibiótico tópico: tobramicina 0,3% ou ciprofloxacino 0,3% — 1–2 gotas 4x/dia por 5–7 dias (CBO, 2020; RENAME 2023). Verificar alergias (alérgico a penicilina, mas aminoglicosídeos e fluoroquinolonas são seguros). Analgesia sistêmica: dipirona ou ibuprofeno VO para dor. Oclusão ocular: NÃO recomendar — pode favorecer crescimento bacteriano. | Não farmacológica: Não esfregar o olho; usar óculos de proteção no trabalho (EPI). | Encaminhamento: Encaminhar ao oftalmologista em 24–48h para reavaliação com lâmpada de fenda e teste de fluoresceína. Encaminhamento imediato se: suspeita de perfuração, corpo estranho corneano não removível, piora visual. | Orientações: Explicar que foi retirado um fragmento metálico e que há uma pequena arranhada na córnea; que o olho vai melhorar em 24–48h; que deve retornar se piorar; e que no trabalho é obrigatório o uso de óculos de proteção (EPI).',
    expectedCommunication: 'Apresentação: Apresentar-se; acolher a dor do paciente; pedir permissão para examinar. | Comunicação do diagnóstico: Explicar que havia um fragmento de metal na parte interna da pálpebra e uma pequena lesão na superfície do olho; que não houve perfuração. | Escuta ativa: Validar o alívio do paciente; responder honestamente sobre o retorno ao trabalho.',
    criticalErrors: [
      'Não realizar eversão da pálpebra superior (corpo estranho não identificado — principal causa de falha diagnóstica em traumas oculares)',
      'Não excluir perfuração ocular sistematicamente (omitir avaliação pupilar, câmara anterior ou imagem quando indicada)',
      'Tentar remover corpo estranho intraocular ou corneano profundo sem encaminhamento especializado',
      'Prescrever oclusão ocular com tampão (favorece crescimento bacteriano — contraindicado)',
      'Não verificar alergias antes de prescrever antibiótico tópico',
      'Não orientar sobre uso obrigatório de EPI e prevenção de novos traumas'
    ]
  },
  instD: {
    title: 'CHECKLIST — DOR NO OLHO APÓS TRAUMA COM REBOLO SEM PROTEÇÃO',
    sections: [
      { h: 'COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE', items: [
        { item: 'Apresentou-se pelo nome e pediu permissão antes de examinar o olho', score: 0.5, ref: 'CFM Res. 2.232/2019' },
        { item: 'Acolheu a ansiedade do paciente e informou sobre os achados de forma tranquilizadora e verdadeira', score: 0.5, ref: 'Política Nacional de Humanização, MS, 2013' }
      ]},
      { h: 'ANAMNESE', items: [
        { item: 'Investigou o mecanismo do trauma (tipo de ferramenta, velocidade, uso de EPI)', score: 1.0, ref: 'CBO — Trauma Ocular, 2020' },
        { item: 'Perguntou sobre tentativas prévias de remoção e lavagem ocular realizada', score: 0.5, ref: 'CBO, 2020' },
        { item: 'Perguntou sobre alteração visual e fotofobia', score: 0.5, ref: 'CBO — Trauma Ocular, 2020' },
        { item: 'Investigou alergias medicamentosas antes de prescrever', score: 0.5, ref: 'CFM Res. 2.232/2019; RENAME 2023' },
        { item: 'Perguntou sobre situação vacinal (tétano)', score: 0.5, ref: 'MS — Manual de Vigilância Epidemiológica, 2022' }
      ]},
      { h: 'EXAME FÍSICO', items: [
        { item: 'Avaliou acuidade visual bilateral antes de qualquer manipulação', score: 0.5, ref: 'CBO — Trauma Ocular, 2020' },
        { item: 'Realizou eversão da pálpebra superior para pesquisa de corpo estranho subpalpebral', score: 1.0, ref: 'CBO — Trauma Ocular, 2020' },
        { item: 'Avaliou pupila (forma, simetria, reatividade) para excluir perfuração', score: 1.0, ref: 'CBO, 2020' },
        { item: 'Avaliou a câmara anterior (profundidade, hipópio)', score: 0.5, ref: 'CBO, 2020' }
      ]},
      { h: 'RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO', items: [
        { item: 'Formulou hipótese de corpo estranho conjuntival e abrasão corneana', score: 0.5, ref: 'CBO — Trauma Ocular, 2020' },
        { item: 'Excluiu ativamente perfuração ocular com base nos achados do exame', score: 1.0, ref: 'CBO, 2020' },
        { item: 'Solicitou radiografia de órbita para pesquisa de corpo estranho intraocular metálico', score: 0.5, ref: 'CBO — Trauma Ocular, 2020' }
      ]},
      { h: 'CONDUTA E ORIENTAÇÃO AO PACIENTE', items: [
        { item: 'Prescreveu colírio antibiótico adequado (tobramicina ou ciprofloxacino) com dose e duração corretas', score: 1.0, ref: 'CBO, 2020; RENAME 2023' },
        { item: 'Contraindicou oclusão ocular com tampão', score: 0.5, ref: 'CBO — Trauma Ocular, 2020' },
        { item: 'Encaminhou ao oftalmologista em 24–48h para reavaliação e teste de fluoresceína', score: 0.5, ref: 'CBO, 2020' },
        { item: 'Orientou sobre uso obrigatório de EPI (óculos de proteção) no trabalho', score: 0.5, ref: 'NR-6 / MTE; CBO, 2020' }
      ]}
    ]
  }
},

// CASO 06
{
  id: 6,
  title: 'Olho vermelho com dor e fotofobia em adulto jovem',
  sub: 'UBS / Ambulatório — Clínica Médica',
  tema: 'oftalmologia',
  topic: 'Olho Vermelho — Diagnóstico Diferencial / Uveíte Anterior',
  level: 'complexo',
  cardAccent: '#673AB7',
  instA: {
    scenario: 'Atenção Primária — UBS. Consultório médico, turno matutino.',
    patient: 'F.L., 28 anos, masculino, estudante universitário, sem comorbidades conhecidas.',
    complaint: 'Olho esquerdo vermelho, com dor e sensibilidade à luz há 5 dias, sem melhora.',
    tasks: [
      'Realize a anamnese dirigida ao caso, investigando os principais diagnósticos diferenciais do olho vermelho.',
      'Realize o exame físico oftalmológico pertinente.',
      'Formule a hipótese diagnóstica principal e os diagnósticos diferenciais, justificando sua escolha.',
      'Solicite os exames complementares pertinentes.',
      'Estabeleça a conduta e o plano de encaminhamento adequados.'
    ]
  },
  instB: {
    vitals: { PA: '118/74 mmHg', FC: '76 bpm', FR: '15 irpm', Tax: '36,9°C', Peso: '72 kg', Altura: '1,78 m', IMC: '22,7 kg/m²' },
    physicalGeneral: 'Bom estado geral, jovem, corado, hidratado, anictérico, afebril, consciente e orientado. Usa óculos de grau.',
    physicalSeg: 'OLHO ESQUERDO: Hiperemia ciliar (perilímbica) predominante (+3/4), sem secreção. Fotofobia intensa. Pupila em miose relativa (4mm), com reação lenta à luz. Dor à palpação do globo ocular. Acuidade visual OE: 20/60 (reduzida). Sem secreção purulenta ou mucoide. Sem adenopatia pré-auricular. | OLHO DIREITO: Sem alterações. AV 20/20. Pupila isocórica e fotorreagente normalmente. | ARTICULAÇÕES: Artralgia em joelho direito referida pelo paciente (sem sinais flogísticos evidentes ao exame). | PELE: Sem lesões visíveis na pele ou mucosas durante o exame.',
    labs: [
      { test: 'Hemograma', val: 'Leucócitos 10.800/mm³, sem desvio', ref: '4.000–11.000/mm³', alt: false },
      { test: 'VHS', val: '42 mm/h', ref: '< 20 mm/h (H)', alt: true },
      { test: 'PCR', val: '18 mg/L', ref: '< 5 mg/L', alt: true },
      { test: 'HLA-B27', val: 'Positivo', ref: 'Negativo', alt: true },
      { test: 'FAN', val: 'Não reagente', ref: '—', alt: false },
      { test: 'VDRL', val: 'Não reagente', ref: '—', alt: false },
      { test: 'Sorologia HIV', val: 'Não reagente', ref: '—', alt: false }
    ],
    image: null,
    note: 'Entregar sinais vitais ao início. Entregar o impresso do exame físico segmentar quando candidato iniciar o exame. Entregar exames laboratoriais somente se solicitados verbalmente. Não entregar exames não solicitados.',
    patientProfile: 'Felipe L., 28 anos, masculino, estudante de engenharia, solteiro. Sem comorbidades prévias diagnosticadas. Sem uso de medicamentos contínuos. Mora em república universitária.',
    script: [
      { trigger: 'Queixa principal', speech: "Doutor, meu olho esquerdo tá vermelho faz 5 dias, doendo bastante e a luz me incomoda muito. Tentei colírio de vasoconstritor da farmácia mas não melhorou nada." },
      { trigger: 'Sobre início', speech: 'Começou do nada, sem nada no olho, sem trazer coisa. De repente começou a doer e ficar vermelho.' },
      { trigger: 'Sobre a dor', speech: 'Dói dentro do olho, não é coceira. E quando eu olho pra luz — mesmo de celular — dói muito.' },
      { trigger: 'Sobre secreção', speech: 'Não tem aquela secreção amarela, nem fica grudado. É só vermelhidão e dor.' },
      { trigger: 'Sobre visão', speech: 'Tá meio embaçada, mas não zerou. Enxergo, mas com dificuldade.' },
      { trigger: 'Sobre colírio', speech: "Usei aquele colírio que 'tira o vermelho' da farmácia por 3 dias. Não adiantou nada." },
      { trigger: 'Sobre articulação', speech: 'Ah, tenho sentido dor no joelho direito faz umas 3 semanas. Achei que era de forçar na academia.' },
      { trigger: 'Sobre histórico geral', speech: 'Nunca tive problema de saúde sério. Não tomo remédio nenhum.' },
      { trigger: 'Pergunta ativa — diagnóstico', speech: 'Mas por que meu olho ficou assim se não entrou nada? É infecção?' },
      { trigger: 'Pergunta ativa — tratamento', speech: 'Vou precisar de colírio? Por quanto tempo?' }
    ],
    hiddenInfo: 'Episódio anterior semelhante: Só revelar se perguntado sobre episódios prévios — "Ah, isso já aconteceu uma vez, faz uns 8 meses, mas no olho direito. Passou sozinho em umas 2 semanas. Não fui ao médico." | Dor lombar matinal: Só revelar se perguntado sobre dores no corpo ou rigidez matinal — "Tenho acordado com uma dorzinha na lombar de manhã faz uns meses. Melhora depois que eu levanto e ando um pouco."',
    actorBehavior: 'Levemente preocupado, mais curioso do que ansioso. Inteligente e questionador. Fotofobia simulada (franze os olhos ao olhar para a luz). Surpreende-se com a associação com o joelho e a lombar quando o candidato pergunta. Colaborativo com o exame, mas reluta em abrir o olho pela fotofobia.'
  },
  instC: {
    diagnosis: 'Uveíte anterior aguda (iridociclite) unilateral, HLA-B27 positivo, possivelmente associada a espondiloartropatia soronegativa (espondilite anquilosante ou artrite reativa em investigação).',
    differentials: [
      'Conjuntivite aguda (bacteriana ou viral) — incluir: olho vermelho unilateral, início agudo; excluir: ausência de secreção, hiperemia ciliar (perilímbica — não difusa), pupila em miose (não normal), fotofobia intensa e dor intraocular não são características de conjuntivite.',
      'Glaucoma agudo de ângulo fechado — incluir: olho vermelho doloroso, redução da acuidade visual; excluir: pupila em miose (no glaucoma fica em midríase média fixa), sem náusea/vômito, olho não endurecido, paciente jovem sem fatores de risco típicos.',
      'Ceratite (úlcera de córnea) — incluir: olho vermelho com fotofobia e dor; excluir: sem lesão corneana visível, sem úlcera, sem uso de lente de contato, córnea aparentemente íntegra.',
      'Esclerite — incluir: dor ocular profunda, olho vermelho sem secreção; excluir: hiperemia no padrão ciliar (não scleral difusa), HLA-B27 positivo favorece uveíte associada a espondiloartropatia.'
    ],
    context: 'Homem jovem, HLA-B27 positivo, com uveíte anterior aguda recorrente unilateral (segundo episódio em 8 meses, alternando olhos), associada a artralgia periférica e dor lombar matinal com rigidez — quadro altamente sugestivo de espondiloartropatia soronegativa. A uveíte anterior é a manifestação extra-articular mais comum das espondiloartropatias, ocorrendo em 25–40% dos casos HLA-B27 positivos.',
    justify: 'A uveíte anterior aguda apresenta-se com a tríade clássica: olho vermelho + dor intraocular + fotofobia, sem secreção. A hiperemia é do tipo ciliar (perilímbica), refletindo inflamação da íris e corpo ciliar. A pupila em miose é causada pelo espasmo do esfíncter pupilar inflamado. O HLA-B27 positivo, a recorrência alternando entre os olhos e a associação com artralgia e lombalgia matinal completam o quadro de espondiloartropatia soronegativa — investigação reumatológica obrigatória.',
    expectedAnamnesis: 'Início, duração e caracterização do olho vermelho (unilateral/bilateral) | Presença/ausência de secreção (diferencia de conjuntivite) | Tipo de dor: superficial (conjuntivite) vs. profunda/intraocular (uveíte/glaucoma) | Fotofobia (intensidade) | Alteração visual | Episódios anteriores semelhantes (recorrência é característica de uveíte HLA-B27) | Uso de colírios (vasoconstritores, corticoides) | Sintomas sistêmicos: artralgia, lombalgia matinal, rigidez matinal, lesões cutâneas (psoríase), diarreia crônica (DII), uretrite | Histórico de doenças autoimunes ou reumatológicas | Comportamento sexual de risco (DST)',
    expectedPhysical: 'Acuidade visual bilateral | Avaliação pupilar: miose no olho acometido, reação lenta | Tipo de hiperemia: ciliar (perilímbica) vs. conjuntival difusa | Presença/ausência de secreção | Palpação do globo (dor) | Palpação de linfonodos pré-auriculares | Exame articular sumário: articulações periféricas (joelho), sacroilíacas (manobra de Patrick/FABER), coluna (mobilidade, teste de Schober) | Pele e mucosas: lesões de psoríase, eritema nodoso, aftas',
    expectedExams: [
      { exam: 'HLA-B27', justify: 'Associação com uveíte anterior e espondiloartropatias', expected: 'Positivo' },
      { exam: 'VHS e PCR', justify: 'Marcadores de atividade inflamatória', expected: 'VHS 42, PCR 18 — elevados' },
      { exam: 'FAN', justify: 'Excluir lúpus como causa de uveíte', expected: 'Não reagente' },
      { exam: 'VDRL / FTA-Abs', justify: 'Excluir sífilis (causa de uveíte)', expected: 'Não reagente' },
      { exam: 'Sorologia HIV', justify: 'Uveíte pode ser manifestação de imunodeficiência', expected: 'Não reagente' },
      { exam: 'Radiografia de sacroilíacas e coluna', justify: 'Pesquisa de sacroileíte (espondilite anquilosante)', expected: 'A solicitar — encaminhar ao reumatologista' },
      { exam: 'Biomicroscopia (lâmpada de fenda)', justify: 'Avaliação de células e flare na câmara anterior, precipitados ceráticos', expected: 'Realizada pelo oftalmologista' }
    ],
    expectedConduct: 'Farmacológica (a ser prescrita pelo oftalmologista — candidato deve reconhecer e encaminhar): Corticoide tópico: prednisolona 1% colírio — uso intensivo nas primeiras 24–48h, desmame progressivo (CBO — Uveítes, 2020). Midriático/cicloplegia: colírio de tropicamida ou ciclopentolato — rompe/previne sinéquias posteriores, alivia espasmo ciliar. AINE sistêmico: pode ser usado como adjuvante para dor. | Não farmacológica: Óculos escuros para fotofobia; repouso relativo. | Encaminhamento: Encaminhamento urgente ao oftalmologista (em 24–48h) para confirmação diagnóstica com biomicroscopia e tratamento. Encaminhamento ao reumatologista para investigação de espondiloartropatia soronegativa (HLA-B27+, lombalgia matinal, artralgia periférica). | Orientações: Explicar que o olho está inflamado "por dentro" (não é infecção) e que provavelmente está relacionado ao joelho e à dor nas costas; que o tratamento é com colírio específico prescrito pelo oftalmologista; que pode ter relação com uma doença reumática que precisa ser investigada. | Seguimento: Acompanhamento conjunto com oftalmologista e reumatologista. Recorrências esperadas — paciente deve buscar atendimento imediato em novos episódios.',
    expectedCommunication: 'Apresentação: Apresentar-se; criar conexão com o jovem. | Comunicação do diagnóstico: Explicar de forma integrativa — "Seu olho, seu joelho e sua dor nas costas podem estar relacionados a uma mesma doença no seu sistema imune"; enfatizar que não é uma infecção simples. | Escuta ativa: Responder às perguntas do paciente; valorizar a percepção dele de que o colírio vasoconstritor não funcionou.',
    criticalErrors: [
      'Diagnosticar conjuntivite e prescrever antibiótico tópico sem reconhecer os sinais específicos de uveíte (hiperemia ciliar, miose, fotofobia intensa, sem secreção)',
      'Prescrever corticoide tópico sem encaminhar ao oftalmologista (risco de agravar infecção corneana não diagnosticada e glaucoma corticosteróide-induzido)',
      'Não investigar doenças sistêmicas associadas (artralgia, lombalgia — perda do diagnóstico de espondiloartropatia)',
      'Usar colírio vasoconstritor (apenas mascara a hiperemia — não trata e pode retardar o diagnóstico)',
      'Não encaminhar urgentemente ao oftalmologista (uveíte não tratada pode causar sinéquias, catarata secundária, glaucoma e perda visual permanente)'
    ]
  },
  instD: {
    title: 'CHECKLIST — OLHO VERMELHO COM DOR E FOTOFOBIA EM ADULTO JOVEM',
    sections: [
      { h: 'COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE', items: [
        { item: 'Apresentou-se pelo nome ao iniciar a consulta', score: 0.3, ref: 'CFM Res. 2.232/2019' },
        { item: 'Explicou a associação entre os sintomas oculares e sistêmicos de forma clara e acessível', score: 0.5, ref: 'CFM Res. 2.232/2019' },
        { item: 'Respondeu à pergunta do paciente ("é infecção?") com informação correta e compreensível', score: 0.5, ref: 'CFM Res. 2.232/2019' }
      ]},
      { h: 'ANAMNESE', items: [
        { item: 'Diferenciou o tipo de dor (profunda/intraocular vs. superficial/coceira)', score: 0.5, ref: 'CBO — Uveítes, 2020' },
        { item: 'Investigou presença/ausência de secreção (diferencial com conjuntivite)', score: 0.5, ref: 'CBO — Uveítes, 2020' },
        { item: 'Perguntou sobre episódios anteriores de olho vermelho', score: 1.0, ref: 'CBO — Uveítes, 2020' },
        { item: 'Investigou sintomas sistêmicos: artralgia, lombalgia matinal com rigidez, lesões cutâneas', score: 1.0, ref: 'SBR — Espondiloartrites, 2021' },
        { item: 'Perguntou sobre comportamento de risco (DST) para excluir artrite reativa/síndrome de Reiter', score: 0.5, ref: 'CBO — Uveítes, 2020' }
      ]},
      { h: 'EXAME FÍSICO', items: [
        { item: 'Avaliou acuidade visual bilateral', score: 0.5, ref: 'CBO — Semiologia Ocular, 2019' },
        { item: 'Identificou o padrão de hiperemia ciliar (perilímbica) em contraste com hiperemia conjuntival difusa', score: 1.0, ref: 'CBO — Uveítes, 2020' },
        { item: 'Avaliou pupila (miose, reação lenta) e ausência de secreção', score: 0.5, ref: 'CBO — Uveítes, 2020' },
        { item: 'Realizou exame articular sumário (joelho, coluna, sacroilíacas)', score: 0.5, ref: 'SBR — Espondiloartrites, 2021' }
      ]},
      { h: 'RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO', items: [
        { item: 'Formulou hipótese de uveíte anterior aguda como diagnóstico principal', score: 1.0, ref: 'CBO — Uveítes, 2020' },
        { item: 'Solicitou HLA-B27 e marcadores inflamatórios (VHS, PCR)', score: 0.5, ref: 'CBO, 2020; SBR, 2021' },
        { item: 'Solicitou sorologias para excluir causas infecciosas (VDRL, HIV)', score: 0.5, ref: 'CBO — Uveítes, 2020' }
      ]},
      { h: 'CONDUTA E ORIENTAÇÃO AO PACIENTE', items: [
        { item: 'Encaminhou urgentemente ao oftalmologista (em 24–48h) para tratamento específico', score: 1.0, ref: 'CBO — Uveítes, 2020' },
        { item: 'Encaminhou ao reumatologista para investigação de espondiloartropatia', score: 0.5, ref: 'SBR — Espondiloartrites, 2021' },
        { item: 'Orientou sobre risco de recorrência e necessidade de buscar atendimento imediato em novos episódios', score: 0.3, ref: 'CBO — Uveítes, 2020' }
      ]}
    ]
  }
},

// CASO 07
{
  id: 7,
  title: "Criança com olho 'torto' e dificuldade escolar",
  sub: 'UBS — Atenção Primária / Puericultura',
  tema: 'oftalmologia',
  topic: 'Ambliopia e Estrabismo',
  level: 'moderado',
  cardAccent: '#00BCD4',
  instA: {
    scenario: 'Atenção Primária — UBS. Consultório de puericultura, turno matutino. Mãe traz a filha para consulta.',
    patient: 'L.M., 5 anos, feminino, pré-escolar. Acompanhada pela mãe (30 anos). Sem comorbidades documentadas.',
    complaint: 'Mãe relata que a filha está com o olho desviando para dentro há alguns meses e tem dificuldade de atenção na escola.',
    tasks: [
      'Realize a anamnese dirigida ao caso com a mãe (e com a criança quando possível).',
      'Realize o exame físico oftalmológico pediátrico pertinente.',
      'Formule a hipótese diagnóstica e explique à mãe a importância da janela terapêutica.',
      'Solicite os exames ou avaliações complementares adequadas.',
      'Oriente a mãe sobre a conduta, o encaminhamento e o seguimento.'
    ]
  },
  instB: {
    vitals: { PA: '90/58 mmHg', FC: '96 bpm', FR: '22 irpm', Tax: '36,5°C', Peso: '18 kg', Altura: '1,07 m', IMC: '15,7 kg/m²' },
    physicalGeneral: 'Bom estado geral, criança ativa, corada, hidratada, anictérica, afebril. Desenvolvimento neuropsicomotor aparentemente adequado para a idade. Colaborativa com a consulta, um pouco tímida.',
    physicalSeg: 'OLHO ESQUERDO: Desvio convergente (esotropia) observado ao teste de Hirschberg — reflexo corneano assimétrico (reflexo no centro da pupila OD, desviado nasalmente no OE ~2mm). Cover test unilateral: o olho esquerdo desvia quando o olho direito é ocluído. Acuidade visual OE: AV estimada reduzida — criança identifica apenas o maior optótipo com o olho esquerdo coberto. | OLHO DIREITO: Acuidade visual preservada — criança identifica optótipos menores com facilidade. | REFLEXO VERMELHO: Presente bilateralmente, sem opacidade do cristalino. | COVER-UNCOVER TEST: Positivo para esotropia OE. | MOTILIDADE OCULAR: Sem restrição de movimentos extraoculares.',
    labs: [],
    image: null,
    note: 'Entregar sinais vitais ao início. Entregar o impresso do exame físico segmentar quando candidato iniciar o exame. O papel do paciente é dividido entre a criança (ator infantil ou boneco/criança simulada) e a mãe (atriz principal). A mãe é a fonte primária de história. A criança coopera parcialmente com o exame visual.',
    patientProfile: 'L.M., 5 anos, feminino, pré-escolar (maternal II). Mãe: Luciana M., 30 anos, auxiliar administrativa, casada. Pai: 32 anos, trabalha fora. Família sem histórico médico relatado inicialmente.',
    script: [
      { trigger: 'Queixa principal (mãe)', speech: 'Doutor, a professora da minha filha falou que ela tá com dificuldade na escola, não fica prestando atenção. E eu fui reparar — o olho esquerdo dela fica meio torto às vezes, desviando pra dentro, especialmente quando ela tá cansada ou olhando de perto.' },
      { trigger: 'Sobre início (mãe)', speech: 'Faz uns 4 meses que reparei. Mas pode ser mais. Achei que era frescura dela, sabe?' },
      { trigger: 'Sobre visão da criança', speech: 'Ela nunca reclamou de enxergar mal. Mas na escola ela vai mal, não consegue copiar do quadro.' },
      { trigger: 'Sobre o olho (mãe)', speech: 'Às vezes o olho fica normal, mas quando ela tá com sono ou cansada desvia bastante. É feio de ver.' },
      { trigger: 'Sobre histórico familiar (mãe)', speech: 'Meu marido usou óculos desde criança, mas eu nunca precisei.' },
      { trigger: 'Sobre vacinas e desenvolvimento (mãe)', speech: 'As vacinas estão em dia. Ela nasceu a termo, parto normal, sem problema. Desenvolvimento foi normal.' },
      { trigger: 'Sobre uso de óculos (mãe)', speech: 'Nunca foi ao oftalmologista. Nunca ninguém mandou levar.' },
      { trigger: 'Pergunta ativa — diagnóstico (mãe)', speech: 'Isso é grave, doutor? Vai ficar com o olho torto pra sempre?' },
      { trigger: 'Pergunta ativa — tratamento (mãe)', speech: 'Precisa de cirurgia? Vai precisar usar óculos?' }
    ],
    hiddenInfo: 'Histórico familiar de estrabismo: Só revelar se perguntado especificamente — "Minha cunhada tinha estrabismo quando criança, operou com 6 anos." | A criança fecha um olho ao sol ou inclina a cabeça: Só revelar se perguntado especificamente — "Agora que você falou, ela sempre inclina a cabecinha quando tá assistindo TV. Achei que era frescura."',
    actorBehavior: 'Mãe: preocupada e levemente culpada por não ter percebido antes. Fica emocionada quando o candidato menciona "janela terapêutica" sem explicar o que é. Responde bem a abordagem tranquilizadora e didática. Faz muitas perguntas. Criança: tímida, não responde espontaneamente, mas coopera quando encorajada. Pode cobrir os olhos com as mãos durante o exame.'
  },
  instC: {
    diagnosis: 'Esotropia (estrabismo convergente) unilateral do olho esquerdo, com ambliopia associada (síndrome da privação visual por supressão cortical). Provável hipermetropia subjacente (erro refrativo — causa mais comum de esotropia acomodativa em pré-escolares).',
    differentials: [
      'Pseudoestrabismo — incluir: aparência de desvio ocular em criança com epicanto amplo (prega da pálpebra cobrindo o canto nasal); excluir: cover test e teste de Hirschberg positivos confirmam desvio real, não é pseudoestrabismo.',
      'Estrabismo paralítico (por paralisia de nervo craniano) — incluir: desvio ocular em criança; excluir: motilidade ocular extrínseca preservada, sem posição viciosa de cabeça forçada, início gradual sem evento neurológico.',
      'Tumor do SNC (retinoblastoma ou glioma óptico) — incluir: criança com alteração visual, desvio ocular; excluir: reflexo vermelho presente bilateralmente (exclui retinoblastoma), sem outras manifestações neurológicas.'
    ],
    context: 'Pré-escolar de 5 anos com esotropia unilateral do olho esquerdo e ambliopia funcional associada. A janela terapêutica para tratamento da ambliopia se estende até os 7–9 anos, com melhores resultados quanto mais precoce a intervenção. O caso exemplifica a importância do rastreamento visual na puericultura, que deve ser realizado desde o nascimento (reflexo vermelho) e periodicamente até os 6 anos.',
    justify: 'O estrabismo manifesto (heterotropia) é diagnosticado pelo cover test e teste de Hirschberg. A esotropia acomodativa — a forma mais comum em pré-escolares — é frequentemente causada por hipermetropia não corrigida. A ambliopia resulta da supressão cortical da imagem do olho desviante, levando à não-desenvolvimento da acuidade visual nesse olho. O tratamento precoce (óculos + oclusão do olho dominante) é eficaz se realizado dentro da janela crítica do desenvolvimento visual (até os 7–9 anos). Após essa fase, a ambliopia tende a se tornar irreversível.',
    expectedAnamnesis: 'Início do desvio (quando foi percebido, se é constante ou intermitente) | Condições em que o desvio se manifesta (cansaço, visão próxima, sono) | Queixas visuais da criança (não costuma reclamar — supressão) | Desempenho escolar e comportamento | Histórico de prematuridade, baixo peso ao nascer, infecções congênitas | Histórico de erros refrativos ou uso de óculos na família | Histórico de estrabismo ou ambliopia na família | Avaliações oftalmológicas prévias | Desenvolvimento neuropsicomotor | Vacinas em dia (excluir causas infecciosas) | Trauma craniano ou ocular prévio',
    expectedPhysical: 'Acuidade visual (adaptada para idade — tabela de figuras/optótipos para pré-escolares, teste dos "E") | Reflexo vermelho bilateral (teste de Brückner — excluir retinoblastoma) | Teste de Hirschberg (reflexo luminoso corneano para avaliar alinhamento ocular) | Cover-uncover test (diagnóstico de heterotropia vs. heteroforia) | Avaliação da motilidade ocular extrínseca (6 posições) | Observação de postura compensatória de cabeça (inclinação, rotação) | Exame das pálpebras (ptose) | Fundoscopia se disponível',
    expectedExams: [
      { exam: 'Avaliação refratométrica (com cicloplegia)', justify: 'Diagnóstico de erro refrativo subjacente (hipermetropia) — realizado pelo oftalmologista', expected: 'Hipermetropia esperada como causa de esotropia acomodativa' },
      { exam: 'Biomicroscopia e fundoscopia', justify: 'Excluir causas orgânicas (retinoblastoma, tumor)', expected: 'Normal neste caso' },
      { exam: 'Avaliação ortóptica', justify: 'Quantificação do desvio e avaliação da visão binocular', expected: 'Realizada pelo ortoptista' }
    ],
    expectedConduct: 'Farmacológica: Colírio cicloplégico (atropina 1% ou ciclopentolato) — utilizado pelo oftalmologista para refratometria sob cicloplegia; pode ser usado como alternativa de penalização óptica na ambliopia (atropina no olho dominante). (CBO — Estrabismo, 2020) | Não farmacológica: Óculos com a correção óptica adequada (após refratometria com cicloplegia) — tratamento de primeira linha para esotropia acomodativa. Oclusão (tampão) do olho dominante (OD) para estimular o olho ambliope (OE) — horas por dia conforme protocolo do oftalmologista. (CBO — Ambliopia, 2020) Estimulação visual do olho ambliope com atividades (desenho, jogos, leitura). | Encaminhamento: Encaminhamento urgente/prioritário ao oftalmologista pediátrico para: refratometria com cicloplegia, prescrição de óculos, avaliação de indicação cirúrgica (se componente não acomodativo). O tratamento da ambliopia deve ser iniciado o mais precocemente possível. | Orientações à mãe: Explicar que o olho torto e a dificuldade na escola estão relacionados; que um dos olhos "aprendeu" a ver pior porque o cérebro passou a ignorar a imagem dele; que isso tem tratamento eficaz se feito antes dos 7–9 anos (janela terapêutica); que o tratamento inclui óculos e tampão no olho bom; que o prognóstico é bom com tratamento precoce. | Seguimento: Após encaminhamento, retorno regular com o oftalmologista. Na UBS, reforçar a adesão ao tampão e ao uso dos óculos.',
    expectedCommunication: 'Apresentação: Apresentar-se para a mãe e para a criança; incluir a criança na conversa de forma lúdica e adequada à faixa etária. | Comunicação do diagnóstico: Explicar à mãe com clareza e sem culpabilizá-la; usar analogia ("o cérebro aprendeu a ignorar o olho torto e esse olho ficou preguiçoso — precisamos acordar ele"). | Escuta ativa: Acolher o sentimento de culpa da mãe; validar a preocupação; responder às perguntas sobre cirurgia e óculos.',
    criticalErrors: [
      'Tranquilizar a mãe dizendo que o desvio "passa sozinho" sem encaminhar ao oftalmologista — perda da janela terapêutica',
      'Não realizar o reflexo vermelho bilateral (pode perder retinoblastoma — emergência oncológica)',
      'Não realizar o cover test ou teste de Hirschberg — diagnóstico de estrabismo não confirmado',
      'Não explicar à mãe a janela terapêutica e a urgência do encaminhamento',
      'Não investigar histórico familiar (estrabismo tem componente familiar relevante — fator de risco)'
    ]
  },
  instD: {
    title: 'CHECKLIST — CRIANÇA COM OLHO TORTO E DIFICULDADE ESCOLAR',
    sections: [
      { h: 'COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE', items: [
        { item: 'Apresentou-se e incluiu a criança na consulta de forma lúdica e adequada à faixa etária', score: 0.5, ref: 'CFM Res. 2.232/2019; ECA' },
        { item: 'Acolheu a preocupação e o sentimento de culpa da mãe com empatia, sem culpabilizá-la', score: 0.5, ref: 'Política Nacional de Humanização, MS, 2013' },
        { item: 'Explicou o diagnóstico e a janela terapêutica em linguagem acessível para a mãe', score: 0.5, ref: 'CFM Res. 2.232/2019' }
      ]},
      { h: 'ANAMNESE', items: [
        { item: 'Investigou início do desvio, se é constante ou intermitente e em que situações ocorre', score: 0.5, ref: 'CBO — Estrabismo, 2020' },
        { item: 'Perguntou sobre desempenho escolar e dificuldades visuais relatadas', score: 0.5, ref: 'CBO — Ambliopia, 2020' },
        { item: 'Investigou histórico familiar de estrabismo, ambliopia ou uso de óculos na infância', score: 0.5, ref: 'CBO — Estrabismo, 2020' },
        { item: 'Perguntou sobre desenvolvimento neuropsicomotor, prematuridade e histórico perinatal', score: 0.5, ref: 'MS — Caderneta de Saúde da Criança, 2023' }
      ]},
      { h: 'EXAME FÍSICO', items: [
        { item: 'Realizou o reflexo vermelho bilateral (teste de Brückner)', score: 1.0, ref: 'MS — Triagem Neonatal / Caderneta da Criança, 2023; CBO, 2020' },
        { item: 'Realizou o teste de Hirschberg (reflexo corneano) para avaliar o alinhamento ocular', score: 1.0, ref: 'CBO — Estrabismo, 2020' },
        { item: 'Realizou o cover-uncover test', score: 0.5, ref: 'CBO — Estrabismo, 2020' },
        { item: 'Avaliou acuidade visual bilateral de forma adaptada à faixa etária', score: 0.5, ref: 'CBO — Ambliopia, 2020' }
      ]},
      { h: 'RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO', items: [
        { item: 'Formulou hipótese de esotropia com ambliopia associada', score: 1.0, ref: 'CBO — Estrabismo e Ambliopia, 2020' },
        { item: 'Mencionou a necessidade de refratometria com cicloplegia pelo oftalmologista', score: 0.5, ref: 'CBO — Estrabismo, 2020' }
      ]},
      { h: 'CONDUTA E ORIENTAÇÃO AO PACIENTE', items: [
        { item: 'Encaminhou prioritariamente ao oftalmologista pediátrico, explicando a urgência', score: 1.0, ref: 'CBO — Ambliopia, 2020; MS, 2023' },
        { item: 'Explicou à mãe a janela terapêutica (tratamento eficaz até os 7–9 anos)', score: 1.0, ref: 'CBO — Ambliopia, 2020' },
        { item: 'Orientou sobre o tratamento (óculos + oclusão do olho dominante) de forma compreensível', score: 0.5, ref: 'CBO — Ambliopia, 2020' }
      ]}
    ]
  }
},

// CASO 08
{
  id: 8,
  title: 'Idosa com mancha escura no centro da visão e distorção das imagens',
  sub: 'UBS / Ambulatório de Geriatria — Atenção Primária',
  tema: 'oftalmologia',
  topic: 'Degeneração Macular Relacionada à Idade (DMRI)',
  level: 'moderado',
  cardAccent: '#795548',
  instA: {
    scenario: 'Atenção Primária — UBS. Consultório de geriatria/clínica geral, turno matutino.',
    patient: 'I.C., 74 anos, feminino, aposentada (ex-professora), hipertensa e tabagista há 40 anos.',
    complaint: 'Visão embaçada no centro do campo visual do olho direito há 3 meses, com distorção de imagens.',
    tasks: [
      'Realize a anamnese dirigida ao caso.',
      'Realize o exame físico oftalmológico pertinente, incluindo o uso da grade de Amsler se disponível.',
      'Formule a hipótese diagnóstica e os principais diagnósticos diferenciais.',
      'Solicite os exames complementares adequados.',
      'Oriente a paciente e o familiar sobre o diagnóstico, conduta e seguimento.'
    ]
  },
  instB: {
    vitals: { PA: '145/88 mmHg', FC: '72 bpm', FR: '16 irpm', Tax: '36,4°C', Peso: '64 kg', Altura: '1,60 m', IMC: '25,0 kg/m²' },
    physicalGeneral: 'Regular estado geral para a idade, idosa, lúcida e orientada, corada, hidratada, anictérica, afebril. Acompanhada pela filha.',
    physicalSeg: 'OLHO DIREITO: Acuidade visual 20/200 (reduzida). Reflexo fotomotor presente, lento. Sem hiperemia. Pupila isocórica. Sem secreção. | OLHO ESQUERDO: Acuidade visual 20/40 (discretamente reduzida). Reflexo fotomotor presente. | GRADE DE AMSLER (OD — se aplicada pelo candidato): Distorção das linhas centrais (metamorfopsia) e área de apagamento central (escotoma central) evidentes. | FUNDOSCOPIA (se realizada/solicitada): OD: drusen confluentes na área macular, com área de atrofia geográfica central e possível membrana neovascular subretiniana (forma úmida). Hemorragia sub-retiniana incipiente na mácula OD. OE: drusen maculares isolados, sem hemorragia ou neovascularização visível. Conclusão: achados compatíveis com DMRI forma úmida (neovascular) OD e DMRI forma seca OE.',
    labs: [
      { test: 'Glicemia de jejum', val: '102 mg/dL', ref: '70–99 mg/dL', alt: true },
      { test: 'Colesterol total', val: '212 mg/dL', ref: '< 200 mg/dL', alt: true },
      { test: 'LDL', val: '138 mg/dL', ref: '< 130 mg/dL', alt: true },
      { test: 'Hemograma', val: 'Sem alterações', ref: '—', alt: false }
    ],
    image: 'Fundoscopia OD: Drusen confluentes maculares, atrofia geográfica central, hemorragia sub-retiniana e membrana neovascular subretiniana (suspeita de DMRI neovascular). OE: Drusen maculares isolados, sem complicações.',
    note: 'Entregar sinais vitais ao início. Entregar grade de Amsler ao candidato se ele solicitar ou mencionar o teste. Entregar laudo de fundoscopia se o candidato realizar ou solicitar o exame. Entregar exames laboratoriais somente se solicitados verbalmente. A filha da paciente está presente na estação — pode ser abordada pelo candidato para apoio familiar.',
    patientProfile: 'Iracema C., 74 anos, feminino, aposentada (ex-professora), viúva. Hipertensa há 20 anos (em uso de losartana 100 mg/dia). Tabagista (1 maço/dia há 40 anos — nunca parou). Mora com a filha. Depende de óculos desde os 50 anos.',
    script: [
      { trigger: 'Queixa principal', speech: 'Doutora, faz uns 3 meses que tô vendo uma mancha escura bem no centro do meu olho direito. E as coisas ficaram tortas — as linhas retas parecem onduladas. Tá me assustando muito.' },
      { trigger: 'Sobre evolução', speech: 'Começou devagar, mas nas últimas 3 semanas piorou bastante. Antes era só um pouquinho, agora tá grande a mancha.' },
      { trigger: 'Sobre o olho esquerdo', speech: 'O esquerdo tá melhor, mas também não tá 100%. Já tô compensando com ele.' },
      { trigger: 'Sobre atividades diárias', speech: 'Não consigo mais ler, que é a coisa que mais gosto. Até a televisão tá difícil. Minha filha tá me ajudando em tudo.' },
      { trigger: 'Sobre tabagismo', speech: 'Sei que fumar faz mal. Mas tô fumando há 40 anos, já tô velha pra parar agora.' },
      { trigger: 'Sobre medicamentos', speech: 'Tomo a losartana todo dia. E compro vitamina de farmácia às vezes, mas não regularmente.' },
      { trigger: 'Sobre histórico familiar', speech: 'Minha mãe teve problema nos olhos antes de morrer. Ficou quase cega dos dois olhos.' },
      { trigger: 'Pergunta ativa — diagnóstico', speech: 'O que tá acontecendo com meus olhos, doutora? Vou ficar cega?' },
      { trigger: 'Pergunta ativa — tratamento', speech: 'Tem algum tratamento? É pelo SUS?' }
    ],
    hiddenInfo: 'Percepção de piora súbita há 3 semanas: Só revelar se perguntado especificamente sobre mudança no ritmo da piora — "Ah, faz umas 3 semanas que piorou muito rápido. Antes eu ainda conseguia ler, aí de repente ficou muito pior." | Uso irregular de suplemento vitamínico: Só revelar se perguntado sobre suplementos — "Às vezes compro aquela vitamina pra olho na farmácia, mas esqueço de tomar."',
    actorBehavior: 'Muito ansiosa, levemente deprimida pela perda visual. Apegada à leitura como atividade central da vida — sente-se perdendo autonomia. Resistente à cessação do tabagismo ("já tô velha"). A filha (se abordada) está preocupada e quer saber se a mãe vai perder a visão completamente. Colaborativa com o exame. Fica esperançosa quando o candidato menciona tratamento disponível.'
  },
  instC: {
    diagnosis: 'Degeneração Macular Relacionada à Idade (DMRI) forma úmida (neovascular) — olho direito, com DMRI forma seca (atrófica) em olho esquerdo.',
    differentials: [
      'Retinopatia diabética com edema macular — incluir: perda central de visão, edema macular; excluir: glicemia limítrofe (não DM confirmado), ausência de microaneurismas típicos, drusen maculares e hemorragia sub-retiniana são mais específicos de DMRI.',
      'Oclusão de veia central da retina (OVCR) — incluir: perda visual aguda/subaguda, hemorragia retiniana; excluir: hemorragia sub-retiniana (e não intra-retiniana em chama), drusen e padrão macular compatível com DMRI; sem quadrante específico de hemorragia.',
      'Membrana epirretiniana — incluir: metamorfopsia (distorção visual), redução de acuidade; excluir: drusen e hemorragia sub-retiniana não são típicos; fundoscopia definirá.'
    ],
    context: 'Idosa de 74 anos com múltiplos fatores de risco para DMRI (idade > 65 anos, tabagismo, HAS, dislipidemia, histórico familiar) apresentando DMRI neovascular no OD com piora rápida nas últimas 3 semanas (característico da forma úmida — neovascularização coroidal), e DMRI atrófica no OE. A DMRI é a principal causa de cegueira irreversível em idosos acima de 65 anos em países desenvolvidos.',
    justify: 'A DMRI acomete a mácula (área responsável pela visão central e de detalhes). A forma seca (atrófica) evolui lentamente com drusen e atrofia geográfica; a forma úmida (neovascular) tem progressão mais rápida por crescimento de neovasos subretinianos que sangram e causam cicatriz. A metamorfopsia e o escotoma central positivo detectados pela grade de Amsler são altamente sugestivos. A piora súbita recente é um sinal de alerta para conversão de forma seca → úmida, que é uma urgência relativa.',
    expectedAnamnesis: 'Caracterização da perda visual: central vs. periférica, unilateral vs. bilateral | Metamorfopsia: linhas retas parecem onduladas ou tortas | Escotoma central: mancha escura ou cinza no centro da visão | Velocidade de progressão (piora súbita recente = forma úmida) | Atividades impactadas (leitura, TV, reconhecer rostos) | Fatores de risco: idade, tabagismo, HAS, DM, dislipidemia, histórico familiar | Medicamentos em uso (anticoagulantes — relevante para cirurgia/injeção intravítrea) | Uso de suplementos vitamínicos (AREDS2) | Histórico de tratamento prévio (injeções intravítreas de anti-VEGF) | Histórico familiar de DMRI ou cegueira em idosos',
    expectedPhysical: 'Acuidade visual bilateral (Snellen) | Grade de Amsler: pesquisa de metamorfopsia e escotoma central (deve ser realizado em todo paciente com suspeita de DMRI) | Reflexo fotomotor | Fundoscopia / oftalmoscopia: drusen maculares, atrofia geográfica, hemorragia sub-retiniana, neovascularização | Avaliação da visão de cores (acometimento macular)',
    expectedExams: [
      { exam: 'Fundoscopia', justify: 'Avaliação da mácula e diagnóstico de DMRI', expected: 'Drusen + hemorragia sub-retiniana OD' },
      { exam: 'OCT macular (tomografia de coerência óptica)', justify: 'Diagnóstico definitivo de forma úmida, edema, membrana neovascular', expected: 'Realizado pelo oftalmologista' },
      { exam: 'Angiofluoresceinografia', justify: 'Confirmação e mapeamento da neovascularização coroidal', expected: 'Realizada pelo oftalmologista' },
      { exam: 'Glicemia / HbA1c', justify: 'Rastreamento de DM como diagnóstico diferencial e fator de risco', expected: 'Glicemia limítrofe — investigar' },
      { exam: 'Lipidograma', justify: 'Dislipidemia como fator de risco', expected: 'LDL e colesterol total levemente elevados' }
    ],
    expectedConduct: 'Farmacológica: Injeção intravítrea de anti-VEGF (ranibizumabe ou bevacizumabe) — tratamento de primeira linha para DMRI neovascular; realizado pelo oftalmologista (CBO — DMRI, 2020; CFM). Disponível pelo SUS em serviços de referência. Suplementação com AREDS2 (vitaminas C, E, luteína, zeaxantina, zinco, cobre) — indicado para DMRI intermediária e prevenção de progressão no OE (CBO — DMRI, 2020). NÃO usar betacaroteno em tabagistas (risco de câncer de pulmão). Controle da HAS e dislipidemia. | Não farmacológica: Cessação do tabagismo (fator de risco modificável mais importante para DMRI — reduz progressão); uso de óculos de sol com proteção UV; iluminação adequada para leitura; ajudas ópticas de baixa visão (lupas); apoio psicossocial. | Encaminhamento: Encaminhamento urgente ao oftalmologista para início de tratamento com anti-VEGF intravítreo. Encaminhamento ao serviço de reabilitação visual (baixa visão) para adaptação funcional. | Orientações à paciente e familiar: Explicar que há tratamento eficaz para a forma úmida (injeções no olho pelo oftalmologista, sem dor significativa); que parar de fumar é a medida mais importante; que o olho esquerdo também está em risco; que a grade de Amsler pode ser usada em casa para monitorar piora. | Seguimento: Após tratamento, retornos mensais com o oftalmologista. Na APS: reforçar cessação do tabagismo, controle de HAS e DM.',
    expectedCommunication: 'Apresentação: Apresentar-se para a paciente e para a filha; incluir a filha na conversa como suporte. | Comunicação do diagnóstico: Explicar com cuidado — "Uma parte do seu olho que é responsável pela visão central está sendo afetada por vasos novos que crescem errado e sangram"; tranquilizar sobre a existência de tratamento. | Escuta ativa: Acolher a perda de autonomia (não poder ler); validar o medo de cegueira; abordar o tabagismo com empatia e sem julgamento.',
    criticalErrors: [
      'Não utilizar a grade de Amsler (principal ferramenta de rastreamento de metamorfopsia — diagnóstico de DMRI na APS)',
      'Não encaminhar urgentemente ao oftalmologista (o atraso no tratamento da DMRI úmida causa perda visual permanente e irreversível)',
      'Prescrever betacaroteno em paciente tabagista (aumenta risco de câncer de pulmão — contraindicado)',
      'Não abordar cessação do tabagismo (fator de risco modificável mais relevante para progressão da DMRI)',
      'Não avaliar o olho contralateral (OE) — DMRI é bilateral e progressiva; monitoramento do olho "menos afetado" é essencial'
    ]
  },
  instD: {
    title: 'CHECKLIST — IDOSA COM MANCHA CENTRAL E DISTORÇÃO VISUAL',
    sections: [
      { h: 'COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE', items: [
        { item: 'Apresentou-se para a paciente e incluiu a filha na consulta de forma respeitosa', score: 0.3, ref: 'CFM Res. 2.232/2019' },
        { item: 'Acolheu o medo de cegueira e a perda de autonomia com empatia', score: 0.5, ref: 'Política Nacional de Humanização, MS, 2013' },
        { item: 'Abordou o tabagismo de forma empática e sem julgamento, reforçando a importância da cessação', score: 0.5, ref: 'MS — Linha de Cuidado ao Tabagismo, 2020' }
      ]},
      { h: 'ANAMNESE', items: [
        { item: 'Caracterizou a perda visual: localização central, metamorfopsia e escotoma', score: 1.0, ref: 'CBO — DMRI, 2020' },
        { item: 'Perguntou sobre velocidade de progressão (piora súbita recente)', score: 0.5, ref: 'CBO — DMRI, 2020' },
        { item: 'Investigou fatores de risco: tabagismo, HAS, dislipidemia, histórico familiar', score: 0.5, ref: 'CBO — DMRI, 2020' },
        { item: 'Perguntou sobre uso de suplementos vitamínicos (AREDS)', score: 0.3, ref: 'CBO — DMRI, 2020' }
      ]},
      { h: 'EXAME FÍSICO', items: [
        { item: 'Avaliou acuidade visual bilateral com tabela de Snellen', score: 0.5, ref: 'CBO — Semiologia Ocular, 2019' },
        { item: 'Aplicou a grade de Amsler para pesquisa de metamorfopsia e escotoma central', score: 1.0, ref: 'CBO — DMRI, 2020' },
        { item: 'Realizou ou solicitou fundoscopia para avaliação macular', score: 0.5, ref: 'CBO — DMRI, 2020' }
      ]},
      { h: 'RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO', items: [
        { item: 'Formulou hipótese de DMRI (forma úmida no OD, forma seca no OE) com base nos achados', score: 1.0, ref: 'CBO — DMRI, 2020' },
        { item: 'Citou ao menos um diagnóstico diferencial pertinente (retinopatia diabética, OVCR)', score: 0.5, ref: 'CBO — DMRI, 2020' },
        { item: 'Solicitou OCT macular e/ou angiofluoresceinografia como exame complementar definitivo', score: 0.5, ref: 'CBO — DMRI, 2020' }
      ]},
      { h: 'CONDUTA E ORIENTAÇÃO AO PACIENTE', items: [
        { item: 'Encaminhou urgentemente ao oftalmologista para tratamento com anti-VEGF', score: 1.0, ref: 'CBO — DMRI, 2020' },
        { item: 'Contraindicou betacaroteno explicitamente em paciente tabagista', score: 0.5, ref: 'CBO — DMRI, 2020' },
        { item: 'Orientou sobre cessação do tabagismo como medida mais importante para progressão', score: 0.5, ref: 'MS — Tabagismo, 2020; CBO, 2020' },
        { item: 'Orientou uso da grade de Amsler em casa para monitorar piora e retorno imediato se piorar', score: 0.5, ref: 'CBO — DMRI, 2020' }
      ]}
    ]
  }
},

// CASO 09
{
  id: 9,
  title: 'Hipertenso com dor de cabeça e \'manchas\' na visão',
  sub: 'UBS — Atenção Primária',
  tema: 'oftalmologia',
  topic: 'Retinopatia Hipertensiva / Fundoscopia',
  level: 'moderado',
  cardAccent: '#F57C00',
  instA: {
    scenario: 'Atenção Primária — UBS. Consultório médico, turno vespertino. Consulta de rotina para controle de hipertensão.',
    patient: 'C.B., 55 anos, masculino, motorista de ônibus, hipertenso há 8 anos em uso irregular de medicação.',
    complaint: 'Cefaleia occipital persistente há 1 semana e relato de \'manchas\' intermitentes na visão.',
    tasks: [
      'Realize a anamnese dirigida ao caso, avaliando o controle da hipertensão e sintomas associados.',
      'Realize o exame físico pertinente, incluindo a fundoscopia.',
      'Formule a hipótese diagnóstica e classifique a gravidade.',
      'Solicite os exames complementares adequados.',
      'Estabeleça a conduta e oriente o paciente sobre o diagnóstico e a importância do controle pressórico.'
    ]
  },
  instB: {
    vitals: { PA: '178/112 mmHg', FC: '84 bpm', FR: '18 irpm', Tax: '36,6°C', Peso: '92 kg', Altura: '1,74 m', IMC: '30,4 kg/m²' },
    physicalGeneral: 'Regular estado geral, obeso, corado, hidratado, anictérico, consciente e orientado. Fácies ansiosa. Sem edema de membros inferiores visível. Sem déficit neurológico focal ao exame sumário.',
    physicalSeg: 'CARDIOVASCULAR: Bulhas rítmicas, 2T, B4 presente, sem sopros. Ictus em 5° EIE, linha hemiclavicular. | NEUROLÓGICO: Sem déficits focais. Sem sinais meníngeos. Sem alteração de campo visual ao confronto. Glasgow 15. | FUNDOSCOPIA (laudo disponível se candidato solicitar/realizar): Entregar laudo separado se candidato solicitar o exame. | DEMAIS SISTEMAS: Sem alterações relevantes.',
    labs: [
      { test: 'Creatinina', val: '1,6 mg/dL', ref: '0,7–1,2 mg/dL', alt: true },
      { test: 'Ureia', val: '58 mg/dL', ref: '15–45 mg/dL', alt: true },
      { test: 'Potássio', val: '3,8 mEq/L', ref: '3,5–5,0 mEq/L', alt: false },
      { test: 'Sódio', val: '141 mEq/L', ref: '135–145 mEq/L', alt: false },
      { test: 'Glicemia de jejum', val: '112 mg/dL', ref: '70–99 mg/dL', alt: true },
      { test: 'Hemograma', val: 'Sem alterações', ref: '—', alt: false },
      { test: 'ECG', val: 'Sinais de hipertrofia ventricular esquerda (sokolow-lyon > 35mm, strain lateral)', ref: '—', alt: true }
    ],
    image: 'Fundoscopia (oftalmoscopia direta): Disco óptico de limites definidos, com razão E/D 0,3. Artérias com calibre reduzido, reflexo aumentado (fio de prata/cobre). Cruzamentos arteriovenosos com sinal de Gunn (compressão venosa no cruzamento) em múltiplos pontos. Exsudatos algodonosos (manchas algodonosas) em 3 quadrantes. Hemorragias em chama de vela peripapilares. Edema de papila bilateral. Conclusão: achados compatíveis com Retinopatia Hipertensiva grau IV (Keith-Wagener-Barker) — emergência hipertensiva com papiledema.',
    note: 'Entregar sinais vitais ao início. Entregar o impresso do exame físico segmentar quando candidato iniciar o exame. Entregar o laudo de fundoscopia somente se o candidato solicitar o exame ou tentar realizá-lo. Entregar exames laboratoriais somente se solicitados verbalmente.',
    patientProfile: 'Carlos B., 55 anos, masculino, motorista de ônibus urbano, casado, pai de dois filhos. HAS há 8 anos — em uso irregular de losartana 50 mg/dia. Sem DM diagnosticado. Obeso. Tabagista (15 cigarros/dia). Sem histórico de AVC ou IAM.',
    script: [
      { trigger: 'Queixa principal', speech: 'Doutor, tô com uma dor de cabeça que não passa faz uma semana, lá na nuca. E de vez em quando vejo umas manchas, tipo clarão, no campo visual. Achei que era cansaço do trabalho.' },
      { trigger: 'Sobre a cefaleia', speech: 'É uma pressão na cabeça, na parte de trás. Piora quando fico muito tempo no ônibus. Dei bastante Tylenol mas não melhora muito.' },
      { trigger: 'Sobre a visão', speech: 'Às vezes aparecem umas manchinhas, tipo moscas, ou um clarão. Dura uns segundo e passa. Mas hoje tá mais frequente.' },
      { trigger: 'Sobre o remédio da pressão', speech: 'Tomo a losartana quando lembro. Às vezes esqueço 2, 3 dias. No trabalho não levo o remédio.' },
      { trigger: 'Sobre dieta e hábitos', speech: 'Não cuido muito da alimentação. Como muita coisa salgada no trabalho, lanche, fritura. Fumo uns 15 cigarros por dia.' },
      { trigger: 'Sobre aferição de PA', speech: 'Meço a pressão às vezes na farmácia. Faz um mês que não meço.' },
      { trigger: 'Sobre sintomas neurológicos', speech: 'Não tô com o braço dormente nem a fala enrolada, não. Só essa dor de cabeça e essa visão esquisita.' },
      { trigger: 'Pergunta ativa — gravidade', speech: 'Tô ruim mesmo, doutor? Posso ter AVC?' },
      { trigger: 'Pergunta ativa — trabalho', speech: 'Posso continuar trabalhando? Tenho que pegar o ônibus amanhã de manhã.' }
    ],
    hiddenInfo: 'Náusea recente: Só revelar se perguntado especificamente — "Ah, sim, tô com um enjoo faz 2 dias. Achei que era do calor." | Histórico familiar de AVC: Só revelar se perguntado — "Meu pai morreu de derrame aos 58 anos. Minha mãe também teve pressão alta."',
    actorBehavior: 'Minimiza os sintomas inicialmente ("achei que era cansaço"). Fica muito assustado ao perceber a gravidade. Preocupado com o emprego — resiste à ideia de não poder trabalhar. Colaborativo com o exame. Faz perguntas sobre AVC com ansiedade. Responde bem a candidatos que explicam com clareza e firmeza a necessidade de tratamento.'
  },
  instC: {
    diagnosis: 'Emergência hipertensiva com retinopatia hipertensiva grau IV (Keith-Wagener-Barker) — papiledema bilateral, hemorragias e exsudatos algodonosos — com lesão de órgão-alvo: olho (retinopatia), rim (creatinina elevada) e coração (HVE ao ECG). PA 178/112 mmHg.',
    differentials: [
      'Urgência hipertensiva (sem lesão de órgão-alvo aguda) — incluir: PA muito elevada, cefaleia; excluir: papiledema e retinopatia grau IV ao fundo de olho confirmam lesão de órgão-alvo — classifica como emergência.',
      'AVC isquêmico ou hemorrágico — incluir: cefaleia, hipertensão grave, alteração visual; excluir: sem déficit neurológico focal, sem alteração da consciência — exclui AVC ativo, mas deve ser rastreado com neuroimagem.',
      'Hipertensão intracraniana por outra causa (tumor, trombose) — incluir: papiledema bilateral, cefaleia; excluir: contexto de HAS grave descontrolada explica o quadro; neuroimagem necessária para excluir outras causas de HIC.'
    ],
    context: 'Homem de 55 anos, hipertenso com baixa adesão ao tratamento, tabagista e obeso, em emergência hipertensiva com lesões de órgão-alvo oftalmológica (retinopatia grau IV com papiledema), renal (creatinina elevada) e cardíaca (HVE). As "manchas na visão" relatadas são consequência do comprometimento vascular retiniano grave. Trata-se de uma situação de risco iminente de AVC, IAM e perda visual permanente.',
    justify: 'A classificação de Keith-Wagener-Barker divide a retinopatia hipertensiva em 4 graus: I (estreitamento arteriolar), II (cruzamentos AV patológicos), III (hemorragias e exsudatos), IV (papiledema). O grau IV é exclusivo das emergências hipertensivas e indica comprometimento grave da barreira hemato-retiniana e do nervo óptico. A associação com sintomas visuais, cefaleia, creatinina elevada e HVE configura emergência hipertensiva verdadeira — exige redução pressórica controlada em ambiente hospitalar (redução de 20–25% nas primeiras horas, não normalização abrupta).',
    expectedAnamnesis: 'Caracterização e duração da cefaleia (localização, intensidade, horário, fatores de piora) | Natureza das alterações visuais (fotopsia, moscas volantes, perda de campo) | Sintomas neurológicos (déficit focal, confusão mental, convulsão — sugere encefalopatia hipertensiva) | Náusea e vômito (sinais de HIC) | Histórico de HAS: tempo, tratamento, adesão, última PA aferida | Medicamentos em uso e regularidade | Fatores de risco: tabagismo, obesidade, DM, dislipidemia | Histórico familiar de DCV, AVC, HAS | Episódios anteriores de PA muito elevada ou complicações',
    expectedPhysical: 'Sinais vitais: PA bilateral em ambos os braços (comparar) | Neurológico completo: consciência (Glasgow), déficit focal, reflexos, sinais meníngeos, fundo de olho | Fundoscopia: papiledema, hemorragias, exsudatos, calibre arteriolar — ESSENCIAL para classificar emergência vs. urgência | Cardiovascular: B4, ictus deslocado (HVE), sopros carotídeos | Renal: pesquisa de lesão renal aguda (uremia, oligúria) | Avaliação de campo visual por confronto',
    expectedExams: [
      { exam: 'Fundoscopia', justify: 'Classificação da retinopatia — decisivo para definir emergência vs. urgência', expected: 'Grau IV — papiledema' },
      { exam: 'ECG', justify: 'Avaliação de lesão cardíaca (HVE, isquemia)', expected: 'HVE com strain' },
      { exam: 'Creatinina e ureia', justify: 'Lesão renal aguda como lesão de órgão-alvo', expected: 'Creatinina 1,6 mg/dL — elevada' },
      { exam: 'Hemograma', justify: 'Excluir anemia hemolítica microangiopática', expected: 'Normal' },
      { exam: 'TC de crânio', justify: 'Excluir AVC hemorrágico, HIC por outra causa', expected: 'Indicada — encaminhar para serviço de emergência' },
      { exam: 'Glicemia', justify: 'DM como comorbidade', expected: 'Glicemia limítrofe — investigar' }
    ],
    expectedConduct: 'EMERGÊNCIA — encaminhamento imediato ao pronto-socorro/hospital de referência: Emergência hipertensiva com papiledema (grau IV) NÃO deve ser manejada na UBS. Na UBS, enquanto aguarda transporte: decúbito elevado; acesso venoso se disponível; monitorização de PA; NÃO normalizar a pressão abruptamente (risco de isquemia cerebral). No hospital: anti-hipertensivo IV (nitroprussiato de sódio, labetalol ou nicardipina) com monitorização contínua. Meta: redução de 20–25% da PAM nas primeiras horas (7ª Diretriz Brasileira de HAS, SBC, 2016). | Não farmacológica: Repouso; restrição de sal; orientar não dirigir (sintomas visuais — risco para segurança pública). | Encaminhamento: SAMU/pronto-socorro — emergência hipertensiva é uma urgência verdadeira que requer hospitalização. | Orientações ao paciente: Explicar com firmeza que a pressão está muito alta e está machucando os olhos, os rins e o coração; que precisa ir ao hospital agora; que não pode trabalhar como motorista enquanto estiver com sintomas visuais (risco de acidente). | Seguimento: Após estabilização hospitalar, retorno à UBS para ajuste do esquema anti-hipertensivo, adesão e controle de fatores de risco.',
    expectedCommunication: 'Apresentação: Apresentar-se; transmitir seriedade sem pânico. | Comunicação do diagnóstico: Ser firme e claro — "Sua pressão está muito alta e já está machucando seus olhos, rins e coração. Você precisa ir ao hospital agora." | Escuta ativa: Acolher o medo do AVC; endereçar a preocupação com o emprego (não pode dirigir com sintomas visuais — questão de segurança pública).',
    criticalErrors: [
      'Não realizar fundoscopia e classificar o caso como urgência hipertensiva sem investigar lesão de órgão-alvo ocular (erro diagnóstico que altera toda a conduta)',
      'Tentar tratar a emergência hipertensiva na UBS com anti-hipertensivo oral sem acionar o SAMU ou encaminhar ao hospital',
      'Reduzir a pressão abruptamente até a normalização (risco de AVC isquêmico por hipoperfusão cerebral)',
      'Liberar o paciente para trabalhar como motorista com sintomas visuais (risco de acidente — responsabilidade médica e de saúde pública)',
      'Não avaliar lesão de outros órgãos-alvo (rim, coração) em emergência hipertensiva'
    ]
  },
  instD: {
    title: 'CHECKLIST — HIPERTENSO COM CEFALEIA E ALTERAÇÕES VISUAIS',
    sections: [
      { h: 'COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE', items: [
        { item: 'Apresentou-se pelo nome e transmitiu seriedade de forma clara e sem pânico', score: 0.5, ref: 'CFM Res. 2.232/2019' },
        { item: 'Explicou a gravidade da situação com clareza, abordando a necessidade de ir ao hospital', score: 0.5, ref: 'CFM Res. 2.232/2019' },
        { item: 'Abordou a proibição de dirigir de forma firme e empática, explicando o risco à segurança', score: 0.5, ref: 'CFM Res. 2.232/2019; CTB' }
      ]},
      { h: 'ANAMNESE', items: [
        { item: 'Investigou a natureza das alterações visuais (fotopsia, moscas, perda de campo)', score: 0.5, ref: 'SBC — HAS, 2016; CBO, 2020' },
        { item: 'Avaliou adesão ao tratamento anti-hipertensivo e tempo sem tomar a medicação', score: 1.0, ref: 'SBC — HAS, 2016' },
        { item: 'Investigou sintomas de lesão de órgão-alvo: neurológico (déficit focal, cefaleia em trovoada), renal (oligúria, edema), cardíaco (dispneia, dor torácica)', score: 0.5, ref: 'SBC — HAS, 2016' }
      ]},
      { h: 'EXAME FÍSICO', items: [
        { item: 'Aferiu PA bilateralmente (ambos os braços)', score: 0.5, ref: 'SBC — HAS, 2016' },
        { item: 'Realizou exame neurológico sumário (déficit focal, Glasgow, campo visual por confrontação)', score: 0.5, ref: 'SBC — HAS, 2016' },
        { item: 'Realizou ou solicitou fundoscopia e interpretou os achados (grau IV — papiledema)', score: 1.0, ref: 'SBC — HAS, 2016; CBO, 2020' },
        { item: 'Avaliou cardiovascular: ausculta com pesquisa de B4, ictus palpável', score: 0.5, ref: 'SBC — HAS, 2016' }
      ]},
      { h: 'RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO', items: [
        { item: 'Classificou o caso como emergência hipertensiva (e não urgência) com base no papiledema', score: 1.0, ref: 'SBC — HAS, 2016' },
        { item: 'Solicitou ECG, creatinina/ureia e hemograma como investigação de lesões de órgão-alvo', score: 0.5, ref: 'SBC — HAS, 2016' },
        { item: 'Mencionou necessidade de neuroimagem (TC de crânio) para excluir AVC hemorrágico', score: 0.5, ref: 'SBC — HAS, 2016' }
      ]},
      { h: 'CONDUTA E ORIENTAÇÃO AO PACIENTE', items: [
        { item: 'Acionou o SAMU ou encaminhou imediatamente ao pronto-socorro com justificativa correta', score: 1.0, ref: 'SBC — HAS, 2016' },
        { item: 'Contraindicou a redução abrupta da PA à normalização', score: 0.5, ref: 'SBC — HAS, 2016' },
        { item: 'Orientou sobre a proibição de dirigir enquanto persistirem os sintomas visuais', score: 0.5, ref: 'CTB Art. 228; CFM' }
      ]}
    ]
  }
},

// CASO 10
{
  id: 10,
  title: 'Criança com pálpebra inchada, vermelha e quente após sinusite',
  sub: 'UPA — Urgência Pediátrica',
  tema: 'oftalmologia',
  topic: 'Celulite Orbitária vs. Celulite Pré-septal',
  level: 'complexo',
  cardAccent: '#D32F2F',
  instA: {
    scenario: 'Urgência Pediátrica — UPA. Sala de atendimento, turno noturno. Mãe traz criança com queixa de olho inchado.',
    patient: 'G.M., 7 anos, masculino, escolar. Mãe informa sinusite tratada há 5 dias com amoxicilina.',
    complaint: 'Olho esquerdo inchado, vermelho e quente há 2 dias, com piora progressiva. Criança com febre e não está conseguindo abrir o olho.',
    tasks: [
      'Realize a anamnese dirigida ao caso com a mãe (e com a criança).',
      'Realize o exame físico pertinente para diferenciar celulite pré-septal de celulite orbitária.',
      'Formule o diagnóstico diferencial e justifique a hipótese mais provável com base nos achados.',
      'Solicite os exames complementares adequados.',
      'Estabeleça a conduta imediata e comunique à mãe a gravidade do quadro e o plano de tratamento.'
    ]
  },
  instB: {
    vitals: { PA: '100/62 mmHg', FC: '118 bpm', FR: '26 irpm', Tax: '38,9°C', Peso: '25 kg', Altura: '1,22 m', IMC: '16,8 kg/m²' },
    physicalGeneral: 'Regular estado geral, criança febril, irritada com dor, corada, hidratada, anictérica. Chora ao movimentar o olho esquerdo. Mãe presente e ansiosa.',
    physicalSeg: 'OLHO ESQUERDO: Edema palpebral intenso (+3/4), eritema e calor nas pálpebras superior e inferior OE. Dificuldade para abrir o olho (ptose por edema). Ao abrir forçadamente: proptose (exoftalmia) discreta do globo ocular esquerdo. Dor intensa à movimentação ocular (oftalmoplegias parciais — limitação do olhar para cima e para a direita). Quemose (edema conjuntival) presente. Acuidade visual OE: não colabora para o teste formal — olho mantido fechado. Reflexo fotomotor: presente bilateralmente (lento no OE). | OLHO DIREITO: Sem alterações. AV preservada. | NEUROLÓGICO: Criança irritada mas responsiva. Sem rigidez de nuca. Sem déficits focais. Glasgow 15. Sem sinais meníngeos. | NARIZ/SEIOS DA FACE: Secreção nasal purulenta bilateral. Dor à percussão do seio maxilar e etmoidal esquerdo. | GARGANTA: Hiperemia de orofaringe leve.',
    labs: [
      { test: 'Hemograma', val: 'Leucócitos 18.400/mm³ com 82% segmentados e 12% bastões', ref: '4.500–13.500/mm³', alt: true },
      { test: 'PCR', val: '98 mg/L', ref: '< 5 mg/L', alt: true },
      { test: 'Hemocultura', val: 'Colhida — resultado pendente', ref: '—', alt: false },
      { test: 'Glicemia', val: '94 mg/dL', ref: '70–99 mg/dL', alt: false }
    ],
    image: 'TC de órbitas com contraste: Opacificação completa das células etmoidais e seio maxilar esquerdo. Coleção subperiosteal medial na órbita esquerda com realce periférico ao contraste, sugestiva de abscesso subperiosteal. Gordura orbitária edemaciada. Proptose discreta do globo ocular esquerdo. Nervo óptico íntegro. Sem extensão intracraniana identificada. Conclusão: celulite orbitária com abscesso subperiosteal sinogênico à esquerda.',
    note: 'Entregar sinais vitais ao início. Entregar impresso do exame físico quando candidato iniciar o exame. Entregar exames laboratoriais somente se solicitados. Entregar laudo da TC somente se o candidato solicitar a tomografia de órbita. Informar que TC está disponível na UPA.',
    patientProfile: 'Gabriel M., 7 anos, masculino, escolar, 2° ano do fundamental. Mãe: Gabriela M., 32 anos, técnica de enfermagem, casada. Sem alergias conhecidas. Vacinação em dia. Sinusite diagnosticada há 5 dias — em uso de amoxicilina 500 mg 8/8h.',
    script: [
      { trigger: 'Queixa principal (mãe)', speech: 'Doutor, meu filho tá com o olho muito inchado faz 2 dias. Tava tomando antibiótico pra sinusite, mas o olho foi inchando e ele tá com febre alta. Ele chora quando mexe o olho.' },
      { trigger: 'Sobre início (mãe)', speech: 'A sinusite começou faz uns 5 dias. Aí 2 dias atrás o olho começou a inchar. Foi piorando rápido.' },
      { trigger: 'Sobre febre (mãe)', speech: 'A febre chegou a 39,2°C hoje em casa. Dei dipirona mas voltou.' },
      { trigger: 'Sobre o olho (mãe)', speech: 'Ele não consegue abrir o olho esquerdo de jeito nenhum. Quando ele tenta, chora de dor. E parece que o olho saiu um pouquinho pra frente, não sei se estou vendo coisas.' },
      { trigger: 'Sobre antibiótico (mãe)', speech: 'Tá tomando amoxicilina que o pediatra passou pra sinusite. Mas não tá melhorando nada. Piorou.' },
      { trigger: 'Sobre visão (mãe)', speech: 'Não sei se tá enxergando bem pelo olho esquerdo. Ele não colabora pra dizer.' },
      { trigger: 'Criança sobre a dor', speech: 'Dói muito quando eu mexo o olho. Não quero abrir.' },
      { trigger: 'Pergunta ativa — gravidade (mãe)', speech: 'É grave, doutor? Vai perder o olho? Precisa operar?' },
      { trigger: 'Pergunta ativa — internação (mãe)', speech: 'Vai ter que internar? Eu posso ficar com ele?' }
    ],
    hiddenInfo: 'Alergia à penicilina: Só revelar se perguntado diretamente sobre alergias — "Ah, espera. O Gabriel teve uma reação quando tomou amoxicilina quando era bebê — ficou com manchas no corpo. O médico disse que podia ser alergia." | Contato com animal doméstico recente: Só revelar se perguntado — "Tem um gato em casa, mas não arranharam o olho dele não."',
    actorBehavior: 'Mãe: muito ansiosa, beira o choro, culpada por ter esperado 2 dias. Faz perguntas frequentes sobre gravidade. Colaborativa com o exame da criança. Criança: irritada, chora durante o exame, especialmente ao movimentar o olho. Não coopera para a avaliação da acuidade visual. Acalma parcialmente com abordagem calma e gentil do candidato.'
  },
  instC: {
    diagnosis: 'Celulite orbitária (pós-septal) com abscesso subperiosteal sinogênico à esquerda — complicação de etmoidossinusite aguda. Sinais: proptose, oftalmoplegia dolorosa, quemose e febre alta confirmam extensão posterior ao septo orbitário.',
    differentials: [
      'Celulite pré-septal (periorbitária) — incluir: edema e eritema palpebral, febre, após processo infeccioso periocular; excluir: proptose, oftalmoplegia (limitação de movimentos oculares) e quemose são características exclusivas da celulite orbitária — a presença de qualquer um desses sinais define celulite orbitária e exclui pré-septal.',
      'Abscesso subperiosteal / abscesso orbitário — incluir: evolução grave de celulite orbitária sinogênica; a TC confirma o abscesso subperiosteal — é complicação da celulite orbitária que pode requerer drenagem cirúrgica.',
      'Trombose do seio cavernoso — incluir: complicação grave de celulite orbitária, proptose bilateral, febre alta; excluir: proptose unilateral no momento, sem comprometimento do seio cavernoso na TC — deve ser rastreada se evolução desfavorável.',
      'Reação alérgica / angioedema periorbitário — incluir: edema palpebral; excluir: febre alta, leucocitose com desvio, evolução progressiva, oftalmoplegia e proptose tornam o angioedema altamente improvável.'
    ],
    context: 'Escolar de 7 anos com celulite orbitária complicada por abscesso subperiosteal, secundária a etmoidossinusite aguda, com falha da amoxicilina oral (possível agente resistente ou extensão além da cobertura do antibiótico). Apresenta a tríade diagnóstica de celulite orbitária: proptose + oftalmoplegia dolorosa + quemose, além de febre alta e leucocitose com desvio à esquerda. A celulite orbitária é uma emergência oftalmológica e pediátrica que, sem tratamento adequado, pode evoluir para cegueira, trombose do seio cavernoso e meningite.',
    justify: 'O septo orbitário é a estrutura anatômica que separa a celulite pré-septal (periorbitária, mais benigna) da celulite orbitária (pós-septal, grave). A presença de proptose (olho "saindo pra frente"), dor à movimentação ocular com oftalmoplegia e quemose indicam que a infecção ultrapassou o septo orbitário — definindo celulite orbitária. A TC confirma o abscesso subperiosteal medial — complicação típica da etmoidossinusite aguda em crianças, onde as células etmoidais são adjacentes à parede medial da órbita. O agente mais frequente é o Staphylococcus aureus (incluindo MRSA), além de streptococos e anaeróbios.',
    expectedAnamnesis: 'Início do edema palpebral e sua evolução (rápida progressão é sinal de alarme) | Sinusite ou infecção respiratória recente (porta de entrada) | Antibioticoterapia em uso: tipo, dose, tempo e resposta | Febre: temperatura, resposta a antitérmicos | Dor à movimentação ocular (presente = orbitária) | Alteração visual (diplopia, redução de acuidade = alarme) | Trauma ou picada de inseto periorbitário recente | Alergias medicamentosas (especialmente penicilina — muda o antibiótico) | Vacinação (Hib — Haemophilus influenzae tipo b) | Imunossupressão ou comorbidades | Outros focos infecciosos: dente, pele, orelha',
    expectedPhysical: 'Sinais vitais: temperatura (febre), FC (taquicardia), FR | Avaliação do edema palpebral: extensão, calor, eritema | Proptose (exoftalmia): avaliação visual da protrusão do globo — sinal de comprometimento orbitário | Motilidade ocular extrínseca: oftalmoplegia dolorosa = celulite orbitária | Quemose: edema conjuntival | Acuidade visual (tentativa — mesmo que parcial) | Reflexo fotomotor bilateral: RAPD (reflexo pupilar aferente relativo) ausente ou presente | Exame neurológico: rigidez de nuca, déficit focal, Glasgow | Rinoscopia/exame nasal: secreção purulenta, sinusite | Palpação de seios da face',
    expectedExams: [
      { exam: 'TC de órbitas com contraste', justify: 'Diferenciação de celulite pré-septal vs. orbitária, diagnóstico de abscesso', expected: 'Abscesso subperiosteal medial OE' },
      { exam: 'Hemograma com diferencial', justify: 'Avaliação de infecção bacteriana grave', expected: 'Leucocitose com desvio à esquerda' },
      { exam: 'PCR', justify: 'Marcador de atividade inflamatória/infecciosa', expected: '98 mg/L — muito elevado' },
      { exam: 'Hemocultura', justify: 'Identificação do agente etiológico antes da antibioticoterapia IV', expected: 'Colhida — pendente' },
      { exam: 'Punção lombar', justify: 'Indicada se sinais de meningite ou encefalopatia', expected: 'Não indicada neste momento (sem sinais meníngeos)' }
    ],
    expectedConduct: 'INTERNAÇÃO HOSPITALAR IMEDIATA — emergência pediátrica: Acesso venoso e hidratação se necessário. Antibioticoterapia IV de amplo espectro: Oxacilina 200 mg/kg/dia IV (cobertura S. aureus) + Ceftriaxona 100 mg/kg/dia IV (cobertura gram-negativos e penetração no SNC) (SBP — Infectologia Pediátrica; Diretriz de Celulite Orbitária, 2022). SE alergia confirmada à penicilina: vancomicina IV + ceftriaxona (verificar alergias antes). Considerar adicionar metronidazol se abscesso sinogênico (UpToDate, 2024). Avaliação conjunta com oftalmologista pediátrico e otorrinolaringologista para indicação de drenagem cirúrgica do abscesso. Antitérmico: dipirona ou paracetamol. Monitorização contínua da acuidade visual, proptose e estado neurológico. | Não farmacológica: Internação em leito pediátrico; monitorização de sinais de evolução para trombose do seio cavernoso (proptose bilateral, piora neurológica); repouso. | Encaminhamento: Internação imediata com acionamento da equipe de oftalmologia pediátrica e ORL. | Orientações à mãe: Explicar que a infecção dos seios paranasais se espalhou para dentro do olho; que é uma situação grave que precisa de internação e antibiótico na veia; que existe risco de complicações sérias se não tratado; que ela pode ficar com o filho durante a internação. | Seguimento: Reavaliação em 24–48h para decisão sobre drenagem cirúrgica. Monitorização diária da acuidade visual e estado neurológico.',
    expectedCommunication: 'Apresentação: Apresentar-se para a mãe e para a criança; adotar postura calma e segura mesmo diante da gravidade. | Comunicação do diagnóstico: Explicar à mãe de forma clara, sem tecnicismos excessivos — "A infecção dos seios do nariz se espalhou para dentro da órbita do olho. Isso é sério e precisa de internação com antibiótico na veia." | Escuta ativa: Acolher a culpa da mãe por ter esperado; tranquilizar sem minimizar; responder sobre a possibilidade de ficar com o filho.',
    criticalErrors: [
      'Classificar como celulite pré-septal e liberar para casa com antibiótico oral — erro diagnóstico crítico que pode resultar em cegueira ou morte',
      'Não solicitar TC de órbita com contraste (exame essencial para diferenciar pré-septal de orbitária e identificar abscesso)',
      'Não investigar alergias antes de prescrever antibiótico (criança tem possível alergia à penicilina — muda completamente o esquema)',
      'Não solicitar avaliação conjunta com oftalmologista pediátrico e ORL (abscesso orbitário pode exigir drenagem cirúrgica)',
      'Não monitorizar a acuidade visual e a motilidade ocular — sinais de deterioração que definem urgência cirúrgica',
      'Não reconhecer os sinais diferenciadores entre celulite pré-septal e orbitária (proptose + oftalmoplegia + quemose)'
    ]
  },
  instD: {
    title: 'CHECKLIST — CRIANÇA COM PÁLPEBRA INCHADA APÓS SINUSITE',
    sections: [
      { h: 'COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE', items: [
        { item: 'Apresentou-se e abordou a criança e a mãe de forma calma, respeitosa e adequada à faixa etária', score: 0.5, ref: 'CFM Res. 2.232/2019; ECA' },
        { item: 'Acolheu a ansiedade e o sentimento de culpa da mãe com empatia', score: 0.5, ref: 'Política Nacional de Humanização, MS, 2013' },
        { item: 'Comunicou a gravidade do quadro com clareza e sem minimização ou catastrofismo excessivo', score: 0.5, ref: 'CFM Res. 2.232/2019' }
      ]},
      { h: 'ANAMNESE', items: [
        { item: 'Investigou sinusite ou infecção prévia como porta de entrada', score: 0.5, ref: 'SBP — Celulite Orbitária, 2022' },
        { item: 'Perguntou sobre antibiótico em uso, dose, tempo e resposta ao tratamento', score: 0.5, ref: 'SBP, 2022' },
        { item: 'Investigou dor à movimentação ocular (sinal diferenciador crítico entre pré-septal e orbitária)', score: 1.0, ref: 'SBP — Celulite Orbitária, 2022' },
        { item: 'Perguntou sobre alergias medicamentosas (especialmente penicilina)', score: 0.5, ref: 'RENAME 2023; SBP, 2022' }
      ]},
      { h: 'EXAME FÍSICO', items: [
        { item: 'Avaliou proptose (exoftalmia) como sinal de comprometimento orbitário', score: 1.0, ref: 'SBP — Celulite Orbitária, 2022' },
        { item: 'Avaliou motilidade ocular extrínseca (oftalmoplegia dolorosa = celulite orbitária)', score: 1.0, ref: 'SBP, 2022' },
        { item: 'Realizou exame neurológico sumário (rigidez de nuca, déficit focal, Glasgow)', score: 0.5, ref: 'SBP, 2022' },
        { item: 'Avaliou reflexo fotomotor bilateral (RAPD — sinal de comprometimento do nervo óptico)', score: 0.5, ref: 'SBP — Celulite Orbitária, 2022' }
      ]},
      { h: 'RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO', items: [
        { item: 'Diferenciou corretamente celulite orbitária de pré-septal com base nos sinais clínicos', score: 1.0, ref: 'SBP — Celulite Orbitária, 2022' },
        { item: 'Solicitou TC de órbitas com contraste para confirmar extensão e identificar abscesso', score: 0.5, ref: 'SBP, 2022' },
        { item: 'Solicitou hemograma, PCR e hemocultura antes de iniciar antibiótico', score: 0.5, ref: 'SBP, 2022' }
      ]},
      { h: 'CONDUTA E ORIENTAÇÃO AO PACIENTE', items: [
        { item: 'Indicou internação hospitalar imediata com antibioticoterapia IV de amplo espectro', score: 1.0, ref: 'SBP — Celulite Orbitária, 2022' },
        { item: 'Solicitou avaliação conjunta com oftalmologista pediátrico e ORL (multidisciplinar)', score: 0.5, ref: 'SBP, 2022' }
      ]}
    ]
  }
}

]

export default oftalmo;
