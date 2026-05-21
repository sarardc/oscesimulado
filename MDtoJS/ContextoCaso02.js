// ── ESTAÇÃO 2: Gastroenterologia Pediátrica — Diarreia Aguda / Desidratação Moderada ──
  {
    id: 2,
    title: "Criança com diarreia e vômitos há 2 dias",
    sub: "UPA — Urgência e Emergência",
    tema: "Pediatria",
    topic: "diarreia",
    level: "moderado",
    cardAccent: "#F57C00",

    instA: {
      scenario: "Atenção Secundária — UPA 24h. Sala de atendimento pediátrico, turno diurno.",
      patient: "A.S., 1 ano e 2 meses, feminino. Mãe traz a filha com quadro de diarreia e vômitos.",
      complaint: "Bebê com diarreia e vômitos há 2 dias — 'está molinha e chorando muito'.",
      tasks: [
        "Apresente-se à mãe e estabeleça vínculo empático.",
        "Realize anamnese direcionada ao quadro atual.",
        "Solicite e interprete os dados do exame físico.",
        "Formule e verbalize a hipótese diagnóstica.",
        "Defina e verbalize a conduta terapêutica adequada.",
        "Oriente a mãe sobre sinais de alarme e critérios de retorno."
      ]
    },

    instB: {
      vitals: {
        PA: "Não aferida (lactente)",
        FC: "148 bpm",
        FR: "32 irpm",
        Tax: "37,9°C",
        Peso: "9,8 kg (habitual: 10,5 kg)",
        Altura: "—",
        IMC: "Perda ~7%"
      },
      physicalGeneral: "Regular, irritada, choro com lágrimas diminuídas. Perda de peso estimada ~700g (~7%).",
      physicalSeg: [
        "FONTANELA ANTERIOR: Levemente deprimida.",
        "OLHOS: Levemente encovados.",
        "MUCOSA ORAL: Levemente ressecada.",
        "TURGOR DA PELE: Retorno lento (~2 segundos).",
        "TEC: 3 segundos.",
        "DIURESE: Diminuída — última fralda há 6 horas.",
        "ABDOME: Levemente distendido, peristalse aumentada.",
        "EXTREMIDADES: Perfusão periférica presente, extremidades frias."
      ],
      labs: [
        { test: "Sódio", val: "138 mEq/L", ref: "135–145", alt: false },
        { test: "Potássio", val: "3,0 mEq/L", ref: "3,5–5,0", alt: true },
        { test: "Ureia", val: "42 mg/dL", ref: "15–35", alt: true },
        { test: "Creatinina", val: "0,5 mg/dL", ref: "0,2–0,6", alt: false },
        { test: "pH", val: "7,28", ref: "7,35–7,45", alt: true },
        { test: "Bicarbonato", val: "14 mEq/L", ref: "22–26", alt: true },
        { test: "Hemoglobina", val: "11,2 g/dL", ref: "—", alt: false },
        { test: "Leucócitos", val: "9.800/mm³", ref: "—", alt: false }
      ],
      image: null,
      note: "Entregar o impresso do exame físico ao início da avaliação do exame físico. Entregar os exames laboratoriais apenas se solicitados verbalmente pelo candidato.",
      patientProfile: "Ana S., 1 ano e 2 meses, feminino. Mãe: 28 anos, auxiliar de serviços gerais, ansiosa.",
      script: [
        { trigger: "Queixa principal", speech: "Ela está com diarreia e vômito desde anteontem, está muito molinha e chorando demais." },
        { trigger: "Sobre as fezes", speech: "São fezes líquidas, amareladas, sem sangue. Umas 6 por dia no início, hoje já foram 4." },
        { trigger: "Sobre os vômitos", speech: "Vomitou muito no primeiro dia, hoje só 2 vezes. Não consegue segurar nem água." },
        { trigger: "Sobre a urina", speech: "A fralda está seca faz umas 6 horas, doutor." },
        { trigger: "Sobre febre", speech: "Teve febre ontem, 38 e meio, dei dipirona. Hoje está abaixada." },
        { trigger: "Sobre alimentação", speech: "Não está conseguindo tomar leite, volta tudo." },
        { trigger: "Pergunta ativa", speech: "É grave? Vai precisar de soro na veia?" },
        { trigger: "Pergunta ativa", speech: "O que causou isso? Posso continuar amamentando?" }
      ],
      hiddenInfo: [
        "A mãe já tentou dar soro caseiro em casa, mas a criança vomitou — só revela se perguntada sobre o que tentou fazer em casa.",
        "Há um irmão mais velho com quadro semelhante há 3 dias — só revela se perguntada sobre contatos domiciliares com diarreia."
      ],
      actorBehavior: "Mãe visivelmente ansiosa, cansada, com a criança no colo. Tom preocupado e apressado. Colaborativa mas faz perguntas frequentes. A criança chora intermitentemente."
    },

    instC: {
      diagnosis: "Doença diarreica aguda viral com desidratação moderada (Plano B) — etiologia provavelmente viral (rotavírus ou norovírus).",
      differentials: [
        "Desidratação grave (Plano C) — afastada pela ausência de sinais de choque (TEC <3s em extremidades, perfusão presente, sem torpor).",
        "Diarreia bacteriana (shigelose, salmonela) — afastada pela ausência de sangue nas fezes e febre persistente alta.",
        "Intussuscepção intestinal — afastada pela ausência de dor em cólica intensa, massa abdominal e fezes em 'geleia de groselha'."
      ],
      context: "Lactente de 1 ano e 2 meses com diarreia aguda viral há 2 dias, perda de peso de ~7%, sinais clínicos de desidratação moderada (turgor reduzido, mucosas secas, olhos encovados, fontanela deprimida, TEC 3s, taquicardia, diurese diminuída). Sem sinais de choque. Acidose metabólica leve à gasometria. Classificação: Plano B.",
      justify: "A perda de ~7% do peso corporal associada a dois ou mais sinais de desidratação (turgor, mucosas, olhos, fontanela, TEC, diurese, taquicardia) classifica o caso como desidratação moderada, indicando Plano B (TRO supervisionada na UPA). A ausência de sinais de choque (perfusão periférica presente, sem hipotensão, sem torpor) afasta o Plano C.",
      expectedAnamnesis: [
        "Número, frequência e características das fezes (consistência, cor, presença de sangue ou muco).",
        "Número de episódios de vômito e relação com a ingesta.",
        "Presença e intensidade da febre.",
        "Ingesta hídrica nas últimas 24h.",
        "Diurese: número de fraldas molhadas, cor da urina.",
        "Peso habitual para calcular percentual de perda.",
        "Tentativas de hidratação em casa.",
        "Contatos com quadro semelhante.",
        "Uso de medicamentos (antidiarreico, antibiótico).",
        "Alergias."
      ],
      expectedPhysical: [
        "Sinais vitais: FC, FR, Tax, peso atual.",
        "Estado geral e nível de consciência.",
        "Avaliação dos olhos (encovados), mucosas (ressecadas), fontanela (deprimida).",
        "Turgor da pele (prega cutânea).",
        "Tempo de enchimento capilar (TEC).",
        "Avaliação da diurese.",
        "Ausculta abdominal (peristalse).",
        "Pesquisa de sinais de choque (pulso, perfusão, nível de consciência)."
      ],
      expectedExams: [
        { exam: "Eletrólitos (Na, K)", justify: "Avaliar distúrbio hidroeletrolítico", expected: "Hipocalemia leve" },
        { exam: "Gasometria venosa", justify: "Avaliar acidose metabólica", expected: "Acidose leve (pH 7,28, HCO₃ 14)" },
        { exam: "Ureia e creatinina", justify: "Avaliar função renal e grau de desidratação", expected: "Ureia elevada (pré-renal)" },
        { exam: "Hemograma", justify: "Avaliar infecção bacteriana associada", expected: "Normal" }
      ],
      expectedConduct: [
        "Farmacológica: TRO com SRO 50–100 mL/kg em 4 horas sob supervisão na UPA (Plano B). Zinco 20 mg/dia por 10–14 dias (≥6 meses). Não usar antidiarreico nem antiemético.",
        "Não farmacológica: Manter amamentação durante a reidratação. Manutenção da alimentação após reidratação (não suspender dieta). Fracionamento da oferta de SRO (5–10 mL a cada 2–5 min se vômitos).",
        "Encaminhamento: Internação se falha da TRO (vômitos incontroláveis, piora do estado geral, sinais de choque).",
        "Orientações ao paciente: Explicar o que é TRO, como ofertar o SRO em casa (Plano A após alta), manter amamentação, sinais de alarme para retorno imediato.",
        "Seguimento: Reavaliação após 4h de TRO. Alta com Plano A se reidratada. Retorno se: piora do estado geral, vômitos incontroláveis, sangue nas fezes, febre alta, sem urinar por 8h."
      ],
      expectedCommunication: [
        "Apresentação: nome, função, cumprimento empático à mãe.",
        "Comunicação do diagnóstico: explicar em linguagem acessível que a criança está com infecção viral e perdeu muita água, e que o tratamento será feito com soro pela boca, supervisionado na UPA.",
        "Escuta ativa: acolher a ansiedade, responder à pergunta 'é grave?', explicar que não há necessidade de soro na veia nesse momento."
      ],
      criticalErrors: [
        "Indicar hidratação venosa sem tentar TRO em desidratação moderada.",
        "Classificar incorretamente como desidratação grave (Plano C) sem sinais de choque.",
        "Prescrever antidiarreico (loperamida) — contraindicado em crianças.",
        "Suspender amamentação durante a reidratação.",
        "Não avaliar sinais de choque antes de definir o plano.",
        "Não orientar sobre sinais de alarme e critérios de retorno."
      ]
    },

    instD: {
      title: "CHECKLIST — DIARREIA AGUDA COM DESIDRATAÇÃO MODERADA EM LACTENTE",
      sections: [
        {
          h: "BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
          items: [
            { item: "Apresentou-se pelo nome e demonstrou empatia com a mãe ansiosa.", score: 0.5, ref: "CFM, Res. 2.232/2019" },
            { item: "Perguntou como a criança e a mãe estavam se sentindo.", score: 0.5, ref: "MS. HumanizaSUS, 2023" },
            { item: "Explicou o diagnóstico e a conduta em linguagem acessível.", score: 0.5, ref: "MS. Comunicação em Saúde, 2022" },
            { item: "Perguntou se a mãe tinha dúvidas ao final.", score: 0.5, ref: "CFM, Res. 2.232/2019" }
          ]
        },
        {
          h: "BLOCO 2 — ANAMNESE",
          items: [
            { item: "Investigou número, frequência e características das fezes (cor, consistência, sangue).", score: 0.5, ref: "MS. Manejo da Diarreia Aguda, 2023" },
            { item: "Investigou episódios de vômito e relação com a ingesta.", score: 0.5, ref: "MS. Manejo da Diarreia Aguda, 2023" },
            { item: "Investigou diurese (número de fraldas molhadas, tempo desde a última).", score: 0.5, ref: "MS. Manejo da Diarreia Aguda, 2023" },
            { item: "Investigou ingesta hídrica e tentativas de hidratação em casa.", score: 0.5, ref: "MS. Manejo da Diarreia Aguda, 2023" },
            { item: "Perguntou sobre contatos domiciliares com quadro semelhante.", score: 0.5, ref: "MS. Manejo da Diarreia Aguda, 2023" }
          ]
        },
        {
          h: "BLOCO 3 — EXAME FÍSICO",
          items: [
            { item: "Avaliou estado geral, nível de consciência e choro com lágrimas.", score: 0.5, ref: "MS. Manejo da Diarreia Aguda, 2023" },
            { item: "Avaliou olhos (encovados), mucosa oral (ressecada) e fontanela (deprimida).", score: 0.5, ref: "MS. Manejo da Diarreia Aguda, 2023" },
            { item: "Avaliou turgor da pele (prega cutânea).", score: 0.5, ref: "MS. Manejo da Diarreia Aguda, 2023" },
            { item: "Avaliou tempo de enchimento capilar (TEC) e perfusão periférica.", score: 0.5, ref: "MS. Manejo da Diarreia Aguda, 2023" }
          ]
        },
        {
          h: "BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO",
          items: [
            { item: "Classificou corretamente como desidratação moderada (Plano B).", score: 1.0, ref: "MS. Manejo da Diarreia Aguda, 2023" },
            { item: "Solicitou eletrólitos, gasometria e ureia/creatinina com justificativa.", score: 0.5, ref: "MS. Manejo da Diarreia Aguda, 2023" },
            { item: "Não indicou antidiarreico (loperamida) — contraindicado em crianças.", score: 0.5, ref: "MS/SBP, 2023" }
          ]
        },
        {
          h: "BLOCO 5 — CONDUTA E ORIENTAÇÃO AO PACIENTE",
          items: [
            { item: "Indicou TRO com SRO 50–100 mL/kg em 4h na UPA (Plano B).", score: 1.0, ref: "MS. Manejo da Diarreia Aguda, 2023" },
            { item: "Orientou manutenção da amamentação durante a reidratação.", score: 0.5, ref: "MS/OMS, 2023" },
            { item: "Prescreveu zinco 20 mg/dia por 10–14 dias.", score: 0.5, ref: "MS. Manejo da Diarreia Aguda, 2023" },
            { item: "Orientou sinais de alarme e critérios de retorno imediato.", score: 0.5, ref: "MS. Manejo da Diarreia Aguda, 2023" }
          ]
        }
      ]
    }
  },