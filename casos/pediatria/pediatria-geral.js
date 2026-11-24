// Casos de Pediatria Geral (20)
const pediatriaGeral = [
  // ── ESTAÇÃO 2: Gastroenterologia Pediátrica — Diarreia Aguda / Desidratação Moderada ──
  {
    id: 2,
    title: "Criança com diarreia e vômitos há 2 dias",
    sub: "UPA — Urgência e Emergência",
    tema: 'Pediatria Geral',
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

  // ── ESTAÇÃO 3: Pneumologia Pediátrica — Pneumonia Bacteriana ───────────────
  {
    id: 3,
    title: "Criança com febre, tosse e dificuldade respiratória há 3 dias",
    sub: "UBS — Atenção Primária",
    tema: 'Pediatria Geral',
    topic: "pneumonia",
    level: "moderado",
    cardAccent: "#1565C0",

    instA: {
      scenario: "Atenção Primária — UBS. Consultório médico, turno matutino.",
      patient: "P.S., 2 anos e 3 meses, masculino. Mãe traz a criança com queixa respiratória há 3 dias.",
      complaint: "Criança de 2 anos com febre, tosse e dificuldade para respirar há 3 dias — 'não está melhorando'.",
      tasks: [
        "Apresente-se e estabeleça rapport com a mãe.",
        "Realize anamnese sobre o quadro atual.",
        "Solicite e interprete o exame físico dirigido.",
        "Formule a hipótese diagnóstica e avalie a gravidade.",
        "Solicite os exames complementares que julgar pertinentes e interprete-os.",
        "Defina a conduta e oriente a mãe."
      ]
    },

    instB: {
      vitals: {
        PA: "—",
        FC: "138 bpm",
        FR: "52 irpm",
        Tax: "38,9°C",
        Peso: "13 kg",
        Altura: "88 cm",
        IMC: "16,8 kg/m²"
      },
      physicalGeneral: "Regular, irritado, choroso, com desconforto respiratório evidente.",
      physicalSeg: [
        "RESPIRATÓRIO: Tiragem subcostal presente, batimento de asa de nariz, crepitações em base direita, submacicez à percussão em base direita.",
        "CARDIOVASCULAR: RCR 2T, sem sopros.",
        "OROFARINGE: Hiperemiada, sem exsudato.",
        "SpO₂: 93% em ar ambiente.",
        "HIDRATAÇÃO: Adequada.",
        "ESTADO NEUROLÓGICO: Irritado, responsivo."
      ],
      labs: [
        { test: "Leucócitos", val: "18.500/mm³", ref: "6.000–17.000", alt: true },
        { test: "Neutrófilos", val: "82%", ref: "—", alt: true },
        { test: "Bastões", val: "12%", ref: "—", alt: true },
        { test: "PCR", val: "98 mg/L", ref: "<10", alt: true },
        { test: "Hemoglobina", val: "11,8 g/dL", ref: "—", alt: false }
      ],
      image: {
        title: "Radiografia de Tórax",
        report: "Opacidade homogênea em lobo inferior direito, aspecto condensante, com broncograma aéreo. Seios costofrênicos livres. ICT normal.\n\nCONCLUSÃO: Condensação em lobo inferior direito — compatível com pneumonia bacteriana."
      },
      note: "Entregar o impresso do exame físico após solicitação verbal. Hemograma e RX de tórax somente se solicitados separadamente pelo candidato.",
      patientProfile: "Pedro S., 2 anos e 3 meses, masculino. Mãe: 30 anos, comerciante, preocupada.",
      script: [
        { trigger: "Queixa principal", speech: "Ele está com febre e tosse desde quinta-feira e não está melhorando, doutor." },
        { trigger: "Sobre a febre", speech: "Está com febre desde quinta, 39 e pouco. Dei antitérmico mas volta." },
        { trigger: "Sobre a tosse", speech: "Tosse muito, às vezes fica roxo. A tosse é seca mas às vezes parece com catarro." },
        { trigger: "Sobre alimentação", speech: "Não está comendo quase nada, recusa tudo. Toma pouco líquido também." },
        { trigger: "Sobre contatos", speech: "Ninguém em casa com tosse, mas ele foi numa festinha de aniversário semana passada." },
        { trigger: "Sobre vacinas", speech: "Está com as vacinas em dia, sim." },
        { trigger: "Pergunta ativa", speech: "Precisa internar? É grave?" },
        { trigger: "Pergunta ativa", speech: "Qual remédio vai tomar? Por quanto tempo?" }
      ],
      hiddenInfo: [
        "A criança já usou amoxicilina há 2 semanas para otite — só revela se perguntada sobre uso recente de antibióticos.",
        "O pai é tabagista e fuma dentro de casa — só revela se perguntada sobre exposição à fumaça em casa."
      ],
      actorBehavior: "Mãe muito preocupada, faz perguntas frequentes. Tom ansioso mas colaborativo. A criança está no colo, irritada e com dificuldade respiratória visível."
    },

    instC: {
      diagnosis: "Pneumonia bacteriana adquirida na comunidade (PAC) em lobo inferior direito, com critérios de internação. Agente mais provável: Streptococcus pneumoniae.",
      differentials: [
        "Bronquiolite viral aguda — afastada pela idade (>2 anos), padrão condensante ao RX e leucocitose com desvio à esquerda.",
        "Derrame pleural — afastado pela ausência de abaulamento, macicez extensa e desvio de traqueia; seios costofrênicos livres ao RX.",
        "Corpo estranho em vias aéreas — afastado pela ausência de início súbito, estridor e história de engasgo."
      ],
      context: "Criança de 2 anos e 3 meses com febre, tosse e desconforto respiratório há 3 dias. FR 52 irpm (taquipneia para a idade), SpO₂ 93% em ar ambiente, tiragem subcostal, crepitações e submacicez em base direita, com condensação ao RX e leucocitose com desvio. Critérios de internação presentes: SpO₂ <95%, tiragem subcostal e comprometimento do estado geral.",
      justify: "A combinação de febre, taquipneia (FR >40 irpm para a faixa etária), condensação lobar ao RX, leucocitose com neutrofilia e desvio à esquerda, e PCR elevada confirma pneumonia bacteriana. A SpO₂ de 93% e a tiragem subcostal indicam gravidade com necessidade de internação.",
      expectedAnamnesis: [
        "Início e progressão dos sintomas (febre, tosse, dispneia).",
        "Características da tosse (seca, produtiva, cianose associada).",
        "Alimentação e hidratação nas últimas 24h.",
        "Presença de cianose ou pausas respiratórias.",
        "Contatos com doentes respiratórios.",
        "Uso recente de antibióticos.",
        "Vacinação (especialmente pneumocócica e influenza).",
        "Exposição a tabagismo passivo.",
        "Antecedentes de hospitalizações por pneumonia ou asma."
      ],
      expectedPhysical: [
        "Frequência respiratória (critério diagnóstico AIDPI — >40 irpm para 2–5 anos).",
        "SpO₂ em ar ambiente.",
        "Pesquisa de tiragem subcostal e batimento de asa de nariz.",
        "Ausculta pulmonar: crepitações, redução do MV, egofonia.",
        "Percussão: submacicez.",
        "Avaliação do estado geral e hidratação."
      ],
      expectedExams: [
        { exam: "RX de tórax", justify: "Confirmar pneumonia e avaliar complicações", expected: "Condensação lobar direita" },
        { exam: "Hemograma com diferencial", justify: "Avaliar etiologia bacteriana vs viral", expected: "Leucocitose com desvio à esquerda" },
        { exam: "PCR", justify: "Marcador inflamatório", expected: "Elevada (98 mg/L)" },
        { exam: "SpO₂", justify: "Avaliar gravidade e necessidade de O₂", expected: "93% — abaixo do limiar" }
      ],
      expectedConduct: [
        "Farmacológica (internação): Ampicilina 200 mg/kg/dia EV ÷ 6/6h ou Penicilina G cristalina 200.000 UI/kg/dia EV. Antitérmico: paracetamol ou ibuprofeno conforme necessidade. Duração: 7–10 dias.",
        "Não farmacológica: Oxigenoterapia com alvo SpO₂ ≥95%. Hidratação oral ou EV conforme tolerância. Posicionamento adequado (decúbito elevado).",
        "Encaminhamento: Internação hospitalar justificada por SpO₂ <95%, tiragem subcostal e comprometimento do estado geral.",
        "Orientações ao paciente: Explicar à mãe a necessidade de internação, o diagnóstico de pneumonia bacteriana, a necessidade de antibiótico EV e oxigênio. Orientar que a mãe poderá acompanhar a criança.",
        "Seguimento: Reavaliação em 48–72h após início do antibiótico. RX de controle em 4–6 semanas se boa evolução."
      ],
      expectedCommunication: [
        "Apresentação: nome, função, cumprimento empático.",
        "Comunicação do diagnóstico: explicar que a criança tem uma infecção no pulmão que precisa de tratamento no hospital com antibiótico na veia e oxigênio.",
        "Escuta ativa: responder à pergunta 'é grave?', tranquilizar sem minimizar, envolver a mãe na decisão."
      ],
      criticalErrors: [
        "Não medir FR e SpO₂ — critérios diagnósticos e de gravidade essenciais.",
        "Não indicar internação com SpO₂ 93% e tiragem subcostal.",
        "Prescrever antibiótico para infecção viral das vias aéreas superiores sem critérios de pneumonia.",
        "Prescrever amoxicilina ÷ 8/8h — dose desatualizada (SBP 2023 preconiza ÷ 12/12h para PAC ambulatorial).",
        "Não solicitar RX de tórax."
      ]
    },

    instD: {
      title: "CHECKLIST — PNEUMONIA BACTERIANA ADQUIRIDA NA COMUNIDADE EM CRIANÇA DE 2 ANOS",
      sections: [
        {
          h: "BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
          items: [
            { item: "Apresentou-se pelo nome e cumprimentou a mãe e a criança.", score: 0.5, ref: "CFM, Res. 2.232/2019" },
            { item: "Demonstrou empatia com a preocupação da mãe.", score: 0.5, ref: "MS. HumanizaSUS, 2023" },
            { item: "Explicou o diagnóstico e a necessidade de internação em linguagem acessível.", score: 0.5, ref: "MS. Comunicação em Saúde, 2022" }
          ]
        },
        {
          h: "BLOCO 2 — ANAMNESE",
          items: [
            { item: "Investigou início, progressão e características da tosse e da febre.", score: 0.5, ref: "MS. AIDPI, 2021" },
            { item: "Investigou alimentação e hidratação nas últimas 24h.", score: 0.5, ref: "MS. AIDPI, 2021" },
            { item: "Perguntou sobre contatos com doentes e uso recente de antibióticos.", score: 0.5, ref: "SBP. PAC, 2023" },
            { item: "Verificou situação vacinal (pneumocócica e influenza).", score: 0.5, ref: "PNI/MS, 2024" }
          ]
        },
        {
          h: "BLOCO 3 — EXAME FÍSICO",
          items: [
            { item: "Aferiu FR e identificou taquipneia (>40 irpm para 2–5 anos).", score: 1.0, ref: "MS. AIDPI, 2021" },
            { item: "Aferiu SpO₂ e identificou valor abaixo do limiar de internação (<95%).", score: 1.0, ref: "SBP. PAC, 2023" },
            { item: "Pesquisou e identificou tiragem subcostal.", score: 0.5, ref: "MS. AIDPI, 2021" },
            { item: "Realizou ausculta pulmonar e identificou crepitações em base direita.", score: 0.5, ref: "SBP. PAC, 2023" }
          ]
        },
        {
          h: "BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO",
          items: [
            { item: "Solicitou RX de tórax com justificativa.", score: 0.5, ref: "SBP. PAC, 2023" },
            { item: "Solicitou hemograma e PCR com justificativa.", score: 0.5, ref: "SBP. PAC, 2023" },
            { item: "Formulou diagnóstico de pneumonia bacteriana.", score: 0.5, ref: "SBP. PAC, 2023" },
            { item: "Indicou internação com justificativa clínica (SpO₂ <95% + tiragem + estado geral).", score: 1.0, ref: "SBP. PAC, 2023" }
          ]
        },
        {
          h: "BLOCO 5 — CONDUTA E ORIENTAÇÃO AO PACIENTE",
          items: [
            { item: "Indicou antibiótico adequado para internação (Ampicilina ou Penicilina G EV).", score: 1.0, ref: "SBP. PAC, 2023" },
            { item: "Indicou oxigenoterapia com alvo SpO₂ ≥95%.", score: 0.5, ref: "SBP. PAC, 2023" },
            { item: "Orientou a mãe sobre o diagnóstico, a necessidade de internação e o acompanhamento.", score: 0.5, ref: "MS. Comunicação em Saúde, 2022" }
          ]
        }
      ]
    }
  },

  // ── ESTAÇÃO 4: Pneumologia Pediátrica — Crise Asmática Grave ────────────────
  {
    id: 4,
    title: "Criança com falta de ar e chiado no peito há 3 horas",
    sub: "UPA — Urgência e Emergência",
    tema: 'Pediatria Geral',
    topic: "asma",
    level: "moderado",
    cardAccent: "#6A1B9A",

    instA: {
      scenario: "Atenção Secundária — UPA 24h. Sala de emergência pediátrica, turno noturno.",
      patient: "M.O., 6 anos, feminino. Mãe traz a criança com quadro de desconforto respiratório agudo.",
      complaint: "Menina de 6 anos com falta de ar e chiado no peito há 3 horas — 'está pior do que as outras vezes'.",
      tasks: [
        "Apresente-se e aborde a situação de forma calma e organizada.",
        "Realize anamnese direcionada ao quadro atual.",
        "Solicite e interprete o exame físico com avaliação da gravidade.",
        "Defina e verbalize o tratamento adequado.",
        "Avalie a resposta ao tratamento e defina a conduta.",
        "Oriente a mãe sobre as medicações e prevenção de novas crises."
      ]
    },

    instB: {
      vitals: {
        PA: "—",
        FC: "126 bpm",
        FR: "38 irpm",
        Tax: "37,2°C",
        Peso: "22 kg",
        Altura: "116 cm",
        IMC: "16,3 kg/m²"
      },
      physicalGeneral: "Regular, taquidispneica, ansiosa, com fala em palavras isoladas.",
      physicalSeg: [
        "RESPIRATÓRIO: Sibilos difusos bilaterais, expiração prolongada, redução do murmúrio vesicular, tiragem intercostal, uso de musculatura acessória (esternocleidomastoideo), batimento de asa de nariz.",
        "SpO₂: 91% em ar ambiente.",
        "CARDIOVASCULAR: Taquicardia, sem sopros.",
        "NEUROLÓGICO: Consciente, ansiosa, orientada."
      ],
      labs: [],
      image: null,
      note: "Entregar o impresso do exame físico após solicitação verbal. Não entregar exames laboratoriais espontaneamente. Gasometria arterial somente se deterioração clínica.",
      patientProfile: "Mariana O., 6 anos, feminino. Mãe: 34 anos, professora, muito ansiosa.",
      script: [
        { trigger: "Queixa principal", speech: "Ela começou com falta de ar e aquele chiado umas 3 horas atrás e não para." },
        { trigger: "Sobre crises anteriores", speech: "Ela já teve outras crises, mas essa parece mais forte. Da última vez ficou internada." },
        { trigger: "Sobre medicações", speech: "Ela usa aquela bombinha azul (salbutamol), mas não melhorou. Usei 3 vezes em casa." },
        { trigger: "Sobre desencadeantes", speech: "Ficou na casa da avó ontem, que tem gato." },
        { trigger: "Sobre corticoide", speech: "Tem um comprimidinho de corticoide em casa que o médico receitou mas não sei se dou." },
        { trigger: "Pergunta ativa", speech: "Vai precisar internar?" },
        { trigger: "Pergunta ativa", speech: "Por que a bombinha não funcionou?" }
      ],
      hiddenInfo: [
        "A criança usa corticosteroide inalatório (beclometasona) mas a mãe interrompeu há 2 semanas porque 'ela ficou bem' — só revela se perguntada sobre medicação de manutenção.",
        "Histórico familiar: pai asmático e avó com rinite alérgica — só revela se perguntada sobre história familiar."
      ],
      actorBehavior: "Mãe muito ansiosa, faz perguntas frequentes, tom agitado. A criança está sentada, visivelmente desconfortável, com dificuldade para falar frases completas."
    },

    instC: {
      diagnosis: "Crise asmática grave (GINA 2023) — SpO₂ 91%, FR 38 irpm, sibilos difusos, tiragem intercostal, uso de musculatura acessória, fala em palavras isoladas.",
      differentials: [
        "Bronquiolite viral aguda — afastada pela idade (6 anos) e histórico de crises anteriores.",
        "Corpo estranho em vias aéreas — afastado pelo histórico de asma, sibilos bilaterais e ausência de início súbito com engasgo.",
        "Laringotraqueobronquite (crupe) — afastada pela ausência de estridor inspiratório e tosse ladrante."
      ],
      context: "Escolar de 6 anos com histórico de asma e internação prévia, apresentando crise grave após exposição a gato (alérgeno). Uso domiciliar de SABA sem melhora. SpO₂ 91%, fala em palavras isoladas, tiragem e uso de musculatura acessória. Interrupção da medicação de controle (CI) há 2 semanas.",
      justify: "Classificação pela GINA 2023: crise grave — SpO₂ <91–95%, fala em palavras isoladas, FR elevada, uso de musculatura acessória, sibilos intensos. Indicação imediata de O₂, SABA repetido, ipratrópio e corticoide sistêmico. Ausência de resposta após 3 ciclos de SABA indica necessidade de internação.",
      expectedAnamnesis: [
        "Início e progressão da crise.",
        "Desencadeante identificado (exposição a alérgeno — gato).",
        "Uso de SABA em casa (frequência, quantidade, resposta).",
        "Histórico de crises, internações e intubações anteriores.",
        "Uso de corticosteroide inalatório (controle) e sistêmico.",
        "Alergias e atopia (rinite, eczema).",
        "História familiar de asma e atopia."
      ],
      expectedPhysical: [
        "SpO₂ em ar ambiente.",
        "FR e avaliação de taquipneia.",
        "Avaliação do padrão de fala (frases completas × palavras isoladas).",
        "Pesquisa de tiragem intercostal, uso de musculatura acessória e batimento de asa de nariz.",
        "Ausculta pulmonar: sibilos, intensidade, simetria, MV.",
        "Avaliação de 'tórax silencioso' (sinal de piora extrema)."
      ],
      expectedExams: [
        { exam: "SpO₂ contínua", justify: "Monitoração da resposta ao tratamento", expected: "Esperado ≥95% após broncodilatador" },
        { exam: "Gasometria arterial", justify: "Avaliar se crise grave refratária ou iminência de parada", expected: "Indicada se sem resposta ao SABA" },
        { exam: "RX de tórax", justify: "Descartar pneumotórax, pneumonia associada", expected: "Hiperinsuflação, sem complicações" }
      ],
      expectedConduct: [
        "Farmacológica: O₂ suplementar com alvo SpO₂ ≥95%. Salbutamol 0,15 mg/kg (mín 2,5 mg, máx 5 mg) nebulizado ou 4–8 puffs com espaçador a cada 20 min × 3 na 1ª hora. Ipratrópio 0,25 mg nebulizado × 3 (adicionar na crise moderada-grave). Prednisolona 1–2 mg/kg/dia VO (máx 40 mg) ou metilprednisolona 1–2 mg/kg EV 6/6h. Se refratária: sulfato de magnésio 25–75 mg/kg EV em 20 min.",
        "Não farmacológica: Posicionamento sentado, monitoração contínua, acesso venoso.",
        "Encaminhamento: Internação — SpO₂ ainda <95% após 3 doses de SABA.",
        "Orientações ao paciente: Explicar o que é asma, importância de não interromper o CI, plano de ação por escrito, identificação e evitação de desencadeantes.",
        "Seguimento: Reavaliação em 1–2h após início do tratamento. Alta somente com SpO₂ ≥95% estável e CI prescrito/reintroduzido."
      ],
      expectedCommunication: [
        "Apresentação: nome, função, tom calmo e organizador da situação.",
        "Comunicação do diagnóstico: explicar que é uma crise de asma forte, que será tratada agora com medicações inaladas e comprimido, e que a filha precisará ficar em observação.",
        "Escuta ativa: acolher a ansiedade, responder à pergunta sobre internação com clareza."
      ],
      criticalErrors: [
        "Não ofertar O₂ com SpO₂ 91%.",
        "Não usar corticoide sistêmico na crise grave.",
        "Dar alta sem avaliação da resposta ao broncodilatador.",
        "Usar adrenalina como primeira linha (reservada para anafilaxia).",
        "Não adicionar ipratrópio na crise grave.",
        "Não investigar uso (ou interrupção) de medicação de controle."
      ]
    },

    instD: {
      title: "CHECKLIST — CRISE ASMÁTICA GRAVE EM ESCOLAR",
      sections: [
        {
          h: "BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
          items: [
            { item: "Apresentou-se e abordou a situação de forma calma e organizada.", score: 0.5, ref: "CFM, Res. 2.232/2019" },
            { item: "Acolheu a ansiedade da mãe e explicou os próximos passos.", score: 0.5, ref: "MS. HumanizaSUS, 2023" },
            { item: "Explicou o diagnóstico e a necessidade de internação em linguagem acessível.", score: 0.5, ref: "MS. Comunicação em Saúde, 2022" }
          ]
        },
        {
          h: "BLOCO 2 — ANAMNESE",
          items: [
            { item: "Investigou crises anteriores, internações e histórico de intubação.", score: 0.5, ref: "GINA, 2023" },
            { item: "Investigou uso de SABA em casa (frequência e resposta).", score: 0.5, ref: "GINA, 2023" },
            { item: "Investigou desencadeante (exposição a alérgeno — gato).", score: 0.5, ref: "GINA, 2023" },
            { item: "Perguntou sobre uso e continuidade do corticosteroide inalatório (medicação de controle).", score: 0.5, ref: "GINA, 2023" }
          ]
        },
        {
          h: "BLOCO 3 — EXAME FÍSICO",
          items: [
            { item: "Aferiu SpO₂ e identificou valor abaixo do limiar (<95%).", score: 1.0, ref: "GINA, 2023" },
            { item: "Avaliou padrão de fala e classificou como crise grave (palavras isoladas).", score: 0.5, ref: "GINA, 2023" },
            { item: "Pesquisou tiragem intercostal e uso de musculatura acessória.", score: 0.5, ref: "GINA, 2023" },
            { item: "Realizou ausculta pulmonar e identificou sibilos difusos bilaterais.", score: 0.5, ref: "GINA, 2023" }
          ]
        },
        {
          h: "BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO",
          items: [
            { item: "Classificou corretamente como crise grave pela GINA 2023.", score: 0.5, ref: "GINA, 2023" },
            { item: "Indicou O₂ suplementar com alvo SpO₂ ≥95%.", score: 0.5, ref: "GINA, 2023 · SBP, 2020" },
            { item: "Indicou internação com justificativa (sem resposta ao SABA após 3 doses).", score: 0.5, ref: "GINA, 2023" }
          ]
        },
        {
          h: "BLOCO 5 — CONDUTA E ORIENTAÇÃO AO PACIENTE",
          items: [
            { item: "Prescreveu salbutamol 0,15 mg/kg nebulizado a cada 20 min × 3.", score: 1.0, ref: "GINA, 2023 · SBP, 2020" },
            { item: "Adicionou ipratrópio nebulizado na crise grave.", score: 0.5, ref: "GINA, 2023" },
            { item: "Prescreveu corticoide sistêmico (prednisolona 1–2 mg/kg/dia VO ou metilprednisolona EV).", score: 1.0, ref: "GINA, 2023 · SBP, 2020" },
            { item: "Orientou a mãe sobre a importância de não interromper o corticosteroide inalatório.", score: 0.5, ref: "GINA, 2023" }
          ]
        }
      ]
    }
  },

  // ── ESTAÇÃO 5: Pneumologia Pediátrica — Bronquiolite Viral Aguda ─────────────
  {
    id: 5,
    title: "Lactente de 3 meses com chiado e dificuldade respiratória no inverno",
    sub: "UPA — Urgência e Emergência",
    tema: 'Pediatria Geral',
    topic: "bronquiolite",
    level: "moderado",
    cardAccent: "#00838F",

    instA: {
      scenario: "Atenção Secundária — UPA 24h. Sala de emergência pediátrica, inverno, turno noturno.",
      patient: "B.F., 3 meses, masculino. Mãe traz o lactente com quadro respiratório iniciado há 2 dias.",
      complaint: "Bebê de 3 meses com coriza, tosse, chiado e dificuldade para respirar há 2 dias — 'recusando o peito'.",
      tasks: [
        "Apresente-se à mãe e tranquilize-a adequadamente.",
        "Realize anamnese sobre o quadro atual.",
        "Solicite e interprete o exame físico com avaliação respiratória.",
        "Formule o diagnóstico e avalie a gravidade.",
        "Defina a conduta adequada.",
        "Oriente a mãe sobre a evolução esperada e os cuidados necessários."
      ]
    },

    instB: {
      vitals: {
        PA: "—",
        FC: "158 bpm",
        FR: "64 irpm",
        Tax: "37,5°C",
        Peso: "5,8 kg",
        Altura: "59 cm",
        IMC: "—"
      },
      physicalGeneral: "Regular, irritado, taquidispneico, com dificuldade respiratória visível.",
      physicalSeg: [
        "RESPIRATÓRIO: Sibilos difusos e crepitações finas bilaterais, MV reduzido, tiragem subcostal, gemência expiratória, batimento de asa de nariz, secreção nasal hialina abundante.",
        "SpO₂: 92% em ar ambiente.",
        "CARDIOVASCULAR: Taquicardia, sem sopros.",
        "NEUROLÓGICO: Irritado, responsivo.",
        "HIDRATAÇÃO: Adequada.",
        "FONTANELA: Normotensa."
      ],
      labs: [
        { test: "Hemograma", val: "Leucócitos 9.200/mm³, sem desvio", ref: "Normal", alt: false },
        { test: "SpO₂", val: "92% em ar ambiente", ref: "≥95%", alt: true }
      ],
      image: null,
      note: "Entregar exame físico após solicitação verbal. Hemograma somente se solicitado. RX de tórax não tem indicação rotineira em bronquiolite — entregar somente se solicitado, com laudo de discreta hiperinsuflação.",
      patientProfile: "Benício F., 3 meses, masculino. Mãe: 22 anos, estudante, muito ansiosa, primeira experiência com doença grave do filho.",
      script: [
        { trigger: "Queixa principal", speech: "Ele começou com coriza e espirros, depois foi aparecendo esse chiado e esse barulho no peito." },
        { trigger: "Sobre alimentação", speech: "Ele parou de mamar bem, suga por 2 minutinhos e larga, muito cansado." },
        { trigger: "Sobre febre", speech: "Não teve febre, só uma vez 37,8 mas abaixou sozinha." },
        { trigger: "Sobre prematuridade", speech: "Nasceu com 38 semanas, não foi prematuro." },
        { trigger: "Sobre cardiopatia", speech: "Nunca falaram nada do coração dele, não." },
        { trigger: "Sobre contatos", speech: "O irmão mais velho, de 4 anos, teve coriza na semana passada." },
        { trigger: "Pergunta ativa", speech: "Isso é normal em bebê? É o mesmo que asma?" },
        { trigger: "Pergunta ativa", speech: "Vai precisar internar? Posso amamentar no hospital?" }
      ],
      hiddenInfo: [
        "A mãe usou soro fisiológico nasal em casa, o que ajudou um pouco — só revela se perguntada sobre o que tentou fazer.",
        "Histórico familiar: pai com asma — só revela se perguntada sobre história familiar de atopia."
      ],
      actorBehavior: "Mãe jovem, muito ansiosa, com o bebê no colo fazendo esforço respiratório visível. Tom de desespero contido. Colaborativa com as perguntas, mas emocionalmente fragilizada."
    },

    instC: {
      diagnosis: "Bronquiolite viral aguda grave (VSR — vírus sincicial respiratório — mais provável) em lactente de 3 meses.",
      differentials: [
        "Lactente sibilante / asma do lactente — afastado por ser o primeiro episódio de sibilância em lactente abaixo de 2 anos, contexto epidêmico de inverno e quadro clínico típico de bronquiolite.",
        "Pneumonia bacteriana — afastada pela ausência de febre persistente, leucocitose e condensação ao RX; achados de VSR (sibilos + crepitações difusos bilaterais).",
        "Cardiopatia congênita com insuficiência cardíaca — afastada pela ausência de sopro, hepatomegalia e edema; taquicardia atribuída ao desconforto respiratório."
      ],
      context: "Lactente de 3 meses, sem prematuridade ou cardiopatia conhecida, apresentando primeiro episódio de sibilância no inverno, precedido por coriza (padrão típico de VSR). SpO₂ 92%, FR 64 irpm, gemência expiratória, tiragem subcostal e recusa alimentar. Critérios de internação presentes: SpO₂ <95%, gemência, FR elevada e lactente jovem (<3 meses).",
      justify: "Bronquiolite viral aguda é definida como o primeiro episódio de sibilância em criança menor de 2 anos, de etiologia viral, geralmente precedida por coriza. O VSR é o principal agente no inverno. A gravidade é classificada pela SpO₂ (92% — abaixo do limiar de 95%), FR (64 irpm), gemência e lactente jovem. O tratamento é essencialmente de suporte.",
      expectedAnamnesis: [
        "Início e progressão dos sintomas (coriza → tosse → dispneia).",
        "Alimentação: volume e frequência das mamadas nas últimas 24h.",
        "Diurese (número de fraldas molhadas).",
        "Febre.",
        "Contatos com quadro respiratório (irmão mais velho).",
        "Prematuridade (fator de risco para VSR grave).",
        "Cardiopatia congênita.",
        "Histórico de episódios anteriores de sibilância.",
        "História familiar de asma e atopia."
      ],
      expectedPhysical: [
        "FR (critério diagnóstico e de gravidade).",
        "SpO₂ em ar ambiente.",
        "Silverman-Andersen (avaliação do desconforto respiratório).",
        "Pesquisa de tiragem subcostal e gemência.",
        "Ausculta pulmonar: sibilos e crepitações.",
        "Avaliação da hidratação.",
        "Pesquisa de sopros cardíacos."
      ],
      expectedExams: [
        { exam: "SpO₂ contínua", justify: "Critério de gravidade e de internação", expected: "92% — abaixo do limiar" },
        { exam: "Hemograma", justify: "Descartar coinfecção bacteriana", expected: "Normal" },
        { exam: "RX de tórax (não obrigatório rotineiramente)", justify: "Se dúvida diagnóstica ou deterioração", expected: "Hiperinsuflação, sem consolidação" }
      ],
      expectedConduct: [
        "Farmacológica: Nenhuma medicação de rotina modifica o curso da bronquiolite. Não usar salbutamol, corticoide, adrenalina nebulizada, antibiótico ou heliox de forma rotineira.",
        "Não farmacológica: O₂ suplementar com alvo SpO₂ ≥95%. Aspiração nasal suave. Hidratação via SNG/SNE se lactente não consegue mamar; EV se grave. CPAP nasal se SpO₂ persistentemente baixa ou apneia.",
        "Encaminhamento: Internação — SpO₂ <95%, gemência, FR elevada, lactente jovem (<3 meses).",
        "Orientações ao paciente: Explicar que é uma infecção viral do pulmão do bebê, que o tratamento é de suporte, que não há remédio que cure mais rápido, que a amamentação será mantida (SNG se necessário) e qual é a evolução esperada (piora até D3–D5, melhora progressiva).",
        "Seguimento: Alta quando SpO₂ ≥95% estável em ar ambiente e alimentação oral adequada (≥75% do habitual)."
      ],
      expectedCommunication: [
        "Apresentação: nome, função, tom acolhedor com mãe jovem e ansiosa.",
        "Comunicação do diagnóstico: explicar que é uma doença viral muito comum em bebês no inverno, que precisa de internação para suporte de oxigênio, mas que a grande maioria melhora.",
        "Escuta ativa: responder à pergunta 'pode amamentar no hospital?' com afirmação positiva."
      ],
      criticalErrors: [
        "Prescrever antibiótico de rotina (doença viral).",
        "Usar salbutamol como tratamento padrão (sem benefício comprovado em bronquiolite).",
        "Prescrever corticoide sistêmico (sem benefício; erro crítico).",
        "Não indicar internação com SpO₂ 92%.",
        "Confundir SpO₂ 92% (limiar de internação) com alvo terapêutico (que é ≥95%)."
      ]
    },

    instD: {
      title: "CHECKLIST — BRONQUIOLITE VIRAL AGUDA GRAVE EM LACTENTE DE 3 MESES",
      sections: [
        {
          h: "BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
          items: [
            { item: "Apresentou-se e adotou tom acolhedor com a mãe jovem e ansiosa.", score: 0.5, ref: "CFM, Res. 2.232/2019" },
            { item: "Explicou o diagnóstico em linguagem acessível (infecção viral, tratamento de suporte).", score: 0.5, ref: "MS. Comunicação em Saúde, 2022" },
            { item: "Confirmou que a amamentação será mantida durante a internação.", score: 0.5, ref: "MS. Atenção ao RN, 2020" }
          ]
        },
        {
          h: "BLOCO 2 — ANAMNESE",
          items: [
            { item: "Investigou início e progressão dos sintomas (coriza → chiado → dispneia).", score: 0.5, ref: "SBP. Bronquiolite, 2021" },
            { item: "Perguntou sobre alimentação (volume de mamadas nas últimas 24h).", score: 0.5, ref: "SBP. Bronquiolite, 2021" },
            { item: "Perguntou sobre prematuridade e cardiopatia congênita.", score: 0.5, ref: "SBP. Bronquiolite, 2021" },
            { item: "Perguntou sobre episódios anteriores de sibilância.", score: 0.5, ref: "SBP. Bronquiolite, 2021" }
          ]
        },
        {
          h: "BLOCO 3 — EXAME FÍSICO",
          items: [
            { item: "Aferiu FR e identificou taquipneia (64 irpm).", score: 0.5, ref: "SBP. Bronquiolite, 2021" },
            { item: "Aferiu SpO₂ e identificou valor abaixo do limiar de internação (92%).", score: 1.0, ref: "SBP. Bronquiolite, 2021" },
            { item: "Identificou gemência expiratória e tiragem subcostal.", score: 0.5, ref: "SBP. Bronquiolite, 2021" },
            { item: "Realizou ausculta pulmonar e identificou sibilos e crepitações bilaterais.", score: 0.5, ref: "SBP. Bronquiolite, 2021" }
          ]
        },
        {
          h: "BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO",
          items: [
            { item: "Formulou diagnóstico correto: bronquiolite viral aguda (1º episódio de sibilância <2 anos).", score: 1.0, ref: "SBP. Bronquiolite, 2021" },
            { item: "Indicou internação com justificativa (SpO₂ 92%, gemência, FR elevada, lactente jovem).", score: 1.0, ref: "SBP. Bronquiolite, 2021" },
            { item: "Não prescreveu salbutamol, corticoide ou antibiótico de rotina.", score: 1.0, ref: "SBP. Bronquiolite, 2021 · AAP, 2022" }
          ]
        },
        {
          h: "BLOCO 5 — CONDUTA E ORIENTAÇÃO AO PACIENTE",
          items: [
            { item: "Indicou O₂ suplementar com alvo SpO₂ ≥95% e aspiração nasal suave.", score: 1.0, ref: "SBP. Bronquiolite, 2021" },
            { item: "Orientou a mãe sobre evolução esperada da doença (piora até D3–D5, depois melhora).", score: 0.5, ref: "SBP. Bronquiolite, 2021" }
          ]
        }
      ]
    }
  },

  // ── ESTAÇÃO 10: Neurologia Pediátrica — Convulsão Febril Simples ─────────────
  {
    id: 10,
    title: "Criança de 2 anos com 'tremedeira' após febre",
    sub: "UPA — Urgência e Emergência",
    tema: 'Pediatria Geral',
    topic: "convulsao-febril",
    level: "moderado",
    cardAccent: "#BF360C",

    instA: {
      scenario: "Atenção Secundária — UPA 24h. Sala de emergência pediátrica, turno diurno.",
      patient: "G.M., 2 anos e 1 mês, masculino. Mãe entra carregando a criança com relato de episódio convulsivo em casa há 20 minutos. A criança estava com febre desde ontem. Atualmente acordada, mas 'estranha'.",
      complaint: "Criança de 2 anos com 'tremedeira' em casa há 20 minutos — estava com febre desde ontem, agora está sonolenta.",
      tasks: [
        "Acolha a mãe de forma empática e organize o atendimento.",
        "Realize anamnese sobre o episódio atual e a história clínica da criança.",
        "Solicite e interprete o exame físico completo.",
        "Formule o diagnóstico e avalie a gravidade do quadro.",
        "Defina a conduta adequada e eventuais investigações complementares.",
        "Oriente a mãe sobre o prognóstico, os cuidados e quando retornar."
      ]
    },

    instB: {
      vitals: {
        PA: "—",
        FC: "132 bpm",
        FR: "30 irpm",
        Tax: "39,4°C",
        Peso: "13,5 kg",
        Altura: "87 cm",
        IMC: "17,8 kg/m² · SpO₂: 97% · Gli: 88 mg/dL"
      },
      physicalGeneral: "Regular, sonolento, irritável ao toque (estado pós-ictal).",
      physicalSeg: [
        "NEUROLÓGICO: Sonolento, sem déficits focais, sem movimentos anormais no momento.",
        "SINAIS MENÍNGEOS: Kernig e Brudzinski negativos.",
        "OROFARINGE: Hiperemiada, amígdalas com exsudato bilateral.",
        "OTOSCOPIA: Normal bilateralmente.",
        "PELE: Sem exantema, sem petéquias.",
        "ABDOME: Normal."
      ],
      labs: [
        { test: "Leucócitos", val: "14.800/mm³", ref: "6.000–17.000", alt: false },
        { test: "Neutrófilos", val: "72%", ref: "—", alt: false },
        { test: "PCR", val: "48 mg/L", ref: "<10", alt: true },
        { test: "Glicemia", val: "88 mg/dL", ref: "70–100", alt: false },
        { test: "Sódio", val: "137 mEq/L", ref: "135–145", alt: false }
      ],
      image: null,
      note: "Entregar exame físico após solicitação verbal. Exames laboratoriais somente se solicitados. A crise já cessou quando a criança chega à UPA — não há crise ativa no momento do atendimento.",
      patientProfile: "Gustavo M., 2 anos e 1 mês, masculino. Mãe: 31 anos, técnica de enfermagem, muito assustada.",
      script: [
        { trigger: "Queixa principal", speech: "Doutor, ele teve uma tremedeira em casa há uns 20 minutos. Fiquei desesperada." },
        { trigger: "Sobre a crise", speech: "Ele ficou tremendo o corpo todo, virou os olhos, durou uns 2 minutinhos e parou sozinho." },
        { trigger: "Sobre a febre", speech: "Desde ontem com febre, 39 graus. Dei paracetamol de manhã." },
        { trigger: "Sobre episódios anteriores", speech: "Nunca tinha convulsionado antes. Fiquei com muito medo." },
        { trigger: "Sobre o desenvolvimento", speech: "Ele é normal, fala, corre, brinca. Nunca tive problema com o desenvolvimento dele." },
        { trigger: "História familiar", speech: "Meu marido teve convulsão quando era criança também — a mãe dele contou." },
        { trigger: "Pergunta ativa", speech: "Vai convulsionar de novo? Precisa tomar anticonvulsivante?" },
        { trigger: "Pergunta ativa", speech: "Pode ir para casa? É epilepsia?" }
      ],
      hiddenInfo: [
        "História familiar positiva para convulsão febril (pai) — só revela se perguntada especificamente sobre história familiar de convulsão.",
        "A mãe já tinha levado a criança ao pediatra na semana passada com dor de garganta mas não fez o tratamento completo — só revela se perguntada sobre doenças recentes e uso de medicamentos."
      ],
      actorBehavior: "Mãe muito assustada, chorosa, técnica de enfermagem mas que 'entrou em pânico' por ser o filho. Tom de desespero que vai se acalmando com a abordagem empática do candidato. Faz perguntas frequentes e preocupadas."
    },

    instC: {
      diagnosis: "Convulsão febril simples em criança de 2 anos. Foco infeccioso: amigdalite bacteriana exsudativa.",
      differentials: [
        "Convulsão febril complexa — afastada pela duração <15 min, caráter generalizado, sem recorrência nas últimas 24h e sem déficit neurológico focal pós-ictal.",
        "Meningite bacteriana — afastada pela ausência de sinais meníngeos, petéquias, toxemia e nível de consciência preservado (pós-ictal esperado, sem piora progressiva).",
        "Encefalite viral — afastada pela ausência de alteração do nível de consciência fora do pós-ictal, sem déficits focais e sem febre de alta intensidade prolongada."
      ],
      context: "Pré-escolar de 2 anos com primeiro episódio de convulsão febril: crise generalizada tônico-clônica, duração ~2 minutos, cessação espontânea, fase pós-ictal presente (sonolência), sem recorrência. Foco infeccioso identificado: amigdalite exsudativa. Sinais meníngeos negativos. Classificação: convulsão febril simples — prognóstico benigno, sem indicação de anticonvulsivante profilático.",
      justify: "A convulsão febril simples é definida por: crise generalizada, duração <15 min, sem recorrência em 24h e sem déficit neurológico pós-ictal permanente. Todos os critérios estão presentes. A amigdalite exsudativa é o foco febril identificado. Sinais meníngeos negativos, sem petéquias e sem toxemia afastam meningite bacteriana. O anticonvulsivante profilático NÃO é indicado na convulsão febril simples.",
      expectedAnamnesis: [
        "Características da crise: tipo (generalizada vs focal), duração, movimentos, desvio do olhar, cianose, incontinência.",
        "Fase pós-ictal: duração, nível de consciência, déficit motor.",
        "Febre: início, temperatura máxima, antitérmico utilizado.",
        "Episódios anteriores de convulsão.",
        "DNPM: marcos adequados para a idade.",
        "História familiar de convulsão febril ou epilepsia.",
        "Doenças recentes, uso de medicamentos, vacinação recente.",
        "Antecedentes neurológicos e de desenvolvimento."
      ],
      expectedPhysical: [
        "Sinais vitais: Tax, FC, FR, SpO₂, glicemia capilar.",
        "Avaliação neurológica: nível de consciência, déficits focais, tônus.",
        "Pesquisa de sinais meníngeos: Kernig, Brudzinski, rigidez de nuca.",
        "Busca do foco infeccioso: orofaringe, otoscopia, pele (exantema, petéquias), abdome.",
        "Avaliação do estado geral: toxemia, perfusão."
      ],
      expectedExams: [
        { exam: "Glicemia capilar", justify: "Afastar hipoglicemia como causa da crise", expected: "Normal (88 mg/dL)" },
        { exam: "Hemograma + PCR", justify: "Avaliar intensidade da resposta inflamatória e foco bacteriano", expected: "PCR elevada, leucocitose leve" },
        { exam: "Punção lombar", justify: "Indicada somente em <12m, sinais meníngeos positivos, não vacinado ou convulsão complexa — NÃO indicada neste caso", expected: "—" }
      ],
      expectedConduct: [
        "Farmacológica: Antitérmico: paracetamol 15 mg/kg/dose ou ibuprofeno 10 mg/kg/dose. Tratamento do foco: amoxicilina 50 mg/kg/dia ÷ 8/8h por 10 dias (amigdalite bacteriana). Anticonvulsivante profilático: NÃO indicado na convulsão febril simples.",
        "Não farmacológica: Orientação sobre conduta domiciliar se nova crise (posição lateral, não colocar nada na boca, cronometrar a crise, acionar SAMU se >5 min).",
        "Encaminhamento: Alta se boa recuperação pós-ictal, foco identificado e tratado, mãe orientada.",
        "Orientações ao paciente: Explicar que a convulsão febril simples é benigna e comum (2–5% das crianças), que NÃO é epilepsia, que o risco de epilepsia futura é baixo (1–2%), e que o anticonvulsivante contínuo não é indicado. Orientar sobre conduta domiciliar na crise.",
        "Seguimento: Retorno ao pediatra em 24–48h. Retorno imediato se nova crise, piora do estado geral, rigidez de nuca ou duração da crise >5 min."
      ],
      expectedCommunication: [
        "Apresentação: nome, função, tom calmo e organizador — reconhecer que a mãe está desesperada.",
        "Comunicação do diagnóstico: explicar que é uma 'convulsão de febre', muito comum em crianças, que NÃO é epilepsia, e que o bebê vai ficar bem.",
        "Escuta ativa: responder à pergunta 'é epilepsia?' com clareza e tranquilidade; acolher o medo da mãe."
      ],
      criticalErrors: [
        "Prescrever anticonvulsivante profilático (fenitoína, fenobarbital, valproato) sem indicação.",
        "Não pesquisar sinais meníngeos (risco de meningite bacteriana).",
        "Não buscar e tratar o foco infeccioso.",
        "Dizer à mãe que 'a criança tem epilepsia' — epilepsia requer ≥2 crises não provocadas.",
        "Não orientar a mãe sobre conduta domiciliar em caso de nova crise.",
        "Indicar punção lombar sem critérios (criança vacinada, >18 meses, sinais meníngeos negativos)."
      ]
    },

    instD: {
      title: "CHECKLIST — CONVULSÃO FEBRIL SIMPLES EM PRÉ-ESCOLAR",
      sections: [
        {
          h: "BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
          items: [
            { item: "Acolheu a mãe desesperada com empatia e tom calmo e organizador.", score: 0.5, ref: "CFM, Res. 2.232/2019" },
            { item: "Explicou que a convulsão febril simples NÃO é epilepsia, em linguagem acessível.", score: 0.5, ref: "SBP. Convulsão Febril, 2017" },
            { item: "Respondeu às perguntas da mãe e perguntou se ela tinha outras dúvidas.", score: 0.5, ref: "MS. Comunicação em Saúde, 2022" }
          ]
        },
        {
          h: "BLOCO 2 — ANAMNESE",
          items: [
            { item: "Investigou características da crise: tipo, duração, desvio do olhar, cianose, fase pós-ictal.", score: 1.0, ref: "SBP. Convulsão Febril, 2017" },
            { item: "Perguntou sobre episódios anteriores de convulsão e DNPM.", score: 0.5, ref: "SBP. Convulsão Febril, 2017" },
            { item: "Investigou história familiar de convulsão febril ou epilepsia.", score: 0.5, ref: "SBP. Convulsão Febril, 2017" },
            { item: "Perguntou sobre doenças recentes e uso de medicamentos.", score: 0.5, ref: "SBP. Convulsão Febril, 2017" }
          ]
        },
        {
          h: "BLOCO 3 — EXAME FÍSICO",
          items: [
            { item: "Aferiu glicemia capilar e sinais vitais completos.", score: 0.5, ref: "MS. Protocolo Convulsão, 2022" },
            { item: "Pesquisou sinais meníngeos (Kernig e Brudzinski).", score: 1.0, ref: "SBP. Convulsão Febril, 2017" },
            { item: "Identificou o foco infeccioso (amigdalite exsudativa) na orofaringe.", score: 0.5, ref: "SBP. Convulsão Febril, 2017" },
            { item: "Avaliou estado neurológico pós-ictal: nível de consciência, déficits focais.", score: 0.5, ref: "SBP. Convulsão Febril, 2017" }
          ]
        },
        {
          h: "BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO",
          items: [
            { item: "Classificou corretamente como convulsão febril simples (generalizada, <15 min, sem recorrência, sem foco).", score: 1.0, ref: "SBP. Convulsão Febril, 2017" },
            { item: "Não indicou punção lombar (criança vacinada, >18 meses, sinais meníngeos negativos).", score: 0.5, ref: "SBP. Convulsão Febril, 2017 · AAP, 2011" }
          ]
        },
        {
          h: "BLOCO 5 — CONDUTA E ORIENTAÇÃO AO PACIENTE",
          items: [
            { item: "Não prescreveu anticonvulsivante profilático e explicou o motivo à mãe.", score: 1.0, ref: "SBP. Convulsão Febril, 2017" },
            { item: "Tratou o foco infeccioso: amoxicilina 50 mg/kg/dia ÷ 8/8h por 10 dias.", score: 0.5, ref: "SBP. Infectologia Pediátrica, 2023" },
            { item: "Orientou a mãe sobre conduta domiciliar se nova crise e critérios de retorno imediato.", score: 0.5, ref: "SBP. Convulsão Febril, 2017" }
          ]
        }
      ]
    }
  },

  // Estação 13

{
  id: 13,
  title: "Criança com tosse longa, febre vespertina e emagrecimento",
  sub: "UBS — Atenção Primária",
  tema: 'Pediatria Geral',
  topic: "Tuberculose Pulmonar Primária / Escore MS 2019",
  level: "moderado",
  cardAccent: "#ff8f00",

  instA: {
    scenario: "Atenção Primária — UBS. Consultório pediátrico, turno diurno.",
    patient: "F.S., 7 anos, masculino, estudante do 1º ano do ensino fundamental. Mora com a mãe e o pai. Sem comorbidades conhecidas.",
    complaint: "Mãe refere: 'Meu filho tá com tosse há um mês, febre todo dia de tarde e emagreceu muito. O pai dele ficou internado com problema no pulmão.'",
    tasks: [
      "Realize a anamnese clínica e epidemiológica dirigida ao caso.",
      "Solicite o exame físico pertinente e interprete os achados.",
      "Aplique o instrumento diagnóstico adequado para tuberculose infantil e calcule a pontuação.",
      "Solicite os exames complementares indicados para essa faixa etária.",
      "Formule o diagnóstico e defina o esquema terapêutico correto.",
      "Oriente a mãe sobre notificação compulsória e investigação dos contatos domiciliares."
    ]
  },

  instB: {
    vitals: {
      PA: "90/60 mmHg",
      FC: "98 bpm",
      FR: "22 irpm",
      Tax: "37,8°C",
      Peso: "18 kg",
      Altura: "1,22 m",
      IMC: "12,1 kg/m² (abaixo do p3 para a idade — desnutrição)"
    },
    physicalGeneral: "Regular estado geral. Emagrecido, pálido (+/4+), hidratado. Comunicativo, porém cansado. Sem icterícia ou cianose. Linfonodomegalia cervical bilateral palpável.",
    physicalSeg: [
      "RESPIRATÓRIO: Redução do murmúrio vesicular em ápice direito; sem sibilos ou crepitações; FR 22 irpm.",
      "LINFONODOS: Adenopatia cervical bilateral, linfonodos de aproximadamente 2 cm, indolores, de consistência firme, não aderidos.",
      "ABDOME: Plano, sem visceromegalias, indolor à palpação.",
      "PELE: Cicatriz de BCG presente em braço esquerdo; sem lesões de pele."
    ],
    labs: [
      { test: "PPD (Mantoux)", val: "18 mm", ref: "Reator forte ≥ 10 mm (imunocompetente)", alt: true },
      { test: "Hemoglobina", val: "10,8 g/dL", ref: "11,5–14,5 g/dL (7 anos)", alt: true },
      { test: "Leucócitos", val: "9.800/mm³", ref: "4.000–10.000/mm³", alt: false },
      { test: "Linfócitos", val: "42%", ref: "25–40%", alt: true },
      { test: "VHS", val: "78 mm/h", ref: "< 20 mm/h", alt: true },
      { test: "Baciloscopia de escarro", val: "Não realizada (criança não expectora)", ref: "—", alt: false }
    ],
    image: "Radiografia de tórax (PA): Infiltrado em ápice direito com área de hipotransparência mal delimitada. Linfonodomegalia hilar direita evidente (adenopatia hilar D). Seios costofrênicos livres. Achados compatíveis com Complexo Primário de Ranke — sugestivo de tuberculose pulmonar primária.",
    note: "Entregar o exame físico ao início, quando solicitado pelo candidato. Entregar o PPD e o hemograma somente se solicitados verbalmente. Entregar a radiografia de tórax somente se o candidato solicitar explicitamente exame de imagem. A baciloscopia não estará disponível (criança não expectora — informar ao candidato que a coleta não foi possível).",
    patientProfile: "Felipe S., 7 anos, masculino, estudante. Mora com a mãe (35 anos, doméstica) e o pai (40 anos, em tratamento de tuberculose pulmonar há 3 meses, em domicílio). Casa com 4 cômodos. Frequenta escola municipal.",
    script: [
      { trigger: "Abertura", speech: "Mãe: 'Doutor(a), meu filho tá com essa tosse há um mês, febre todo dia de tarde e emagreceu muito. Tô preocupada.'" },
      { trigger: "Sobre a tosse", speech: "Mãe: 'É uma tosse seca, não tem catarro. Às vezes acorda de noite tossindo. Tentei xarope mas não melhorou.'" },
      { trigger: "Sobre a febre", speech: "Mãe: 'A febre aparece todo dia, mais no fim da tarde. É coisa de 37,5 a 38. De manhã ele tá bem.'" },
      { trigger: "Sobre o emagrecimento", speech: "Mãe: 'Ele perdeu uns 4 quilos em 3 meses. Não tá com vontade de comer.'" },
      { trigger: "Sobre o suor noturno (se perguntado)", speech: "Mãe: 'Ah sim, ele acorda encharcado de suor. Pensei que fosse calor.'" },
      { trigger: "Sobre o pai (se perguntado)", speech: "Mãe: 'O pai dele tá em tratamento de tuberculose há 3 meses. Tá em casa, não internado mais. Todos dormem no mesmo quarto.'" },
      { trigger: "Sobre a vacina BCG", speech: "Mãe: 'Ele tomou a vacina quando nasceu. Tem a marca no braço.'" },
      { trigger: "Sobre escola", speech: "Mãe: 'Ele vai à escola. Perguntei se precisava tirar ele mas não sabia.'" },
      { trigger: "Pergunta ativa", speech: "Mãe: 'Meu filho pode pegar tuberculose do pai?'" },
      { trigger: "Pergunta ativa", speech: "Mãe: 'Ele precisa tomar remédio por quanto tempo?'" },
      { trigger: "Pergunta ativa", speech: "Mãe: 'Pode continuar indo à escola?'" }
    ],
    hiddenInfo: [
      "O pai do Felipe está em tratamento de tuberculose há 3 meses e todos dormem no mesmo quarto — só revela se o candidato perguntar especificamente sobre contato domiciliar com alguém com tuberculose.",
      "Felipe acorda encharcado de suor à noite (sudorese noturna) — só revela se o candidato perguntar especificamente sobre suor noturno."
    ],
    actorBehavior: "Mãe ansiosa e colaborativa, visualmente cansada (também cuida do marido doente). Responde bem a perguntas diretas e simples. Demonstra alívio quando o médico explica a situação com clareza. Fica tensa ao mencionar o marido — preocupação com o resto da família. Criança tímida, cooperativa, não fala espontaneamente mas responde quando perguntada diretamente."
  },

  instC: {
    diagnosis: "Tuberculose pulmonar primária em criança de 7 anos. Escore MS 2019 = 90 pontos (diagnóstico muito provável — indicação de tratamento). Contato domiciliar com tuberculose (40 pts) + PPD ≥ 10 mm (15 pts) + Radiografia com linfonodomegalia hilar (15 pts) + febre/sintomas ≥ 2 semanas sem outra causa (15 pts) + emagrecimento (5 pts).",
    differentials: [
      "Pneumonia bacteriana — tosse e febre presentes, mas a evolução subaguda (> 4 semanas), o emagrecimento, o PPD fortemente reator e a adenopatia hilar são inconsistentes com pneumonia bacteriana típica.",
      "Linfoma de Hodgkin — pode causar adenopatia cervical e mediastinal, febre, suor noturno e emagrecimento ('sintomas B'); entretanto, o contexto epidemiológico (contato TB) e o PPD 18 mm favorecem fortemente tuberculose.",
      "Histoplasmose pulmonar — pode causar adenopatia hilar e síndrome constitucional; menos provável sem exposição a cavernas ou fezes de morcegos; PPD positivo e contato TB favorecem TB."
    ],
    context: "Criança de 7 anos com tuberculose pulmonar primária, forma clínica mais comum na infância, caracterizada por Complexo Primário de Ranke (infiltrado + adenopatia hilar). Contato domiciliar com pai bacilífero é o principal fator de risco. Escore MS 2019 de 90 pontos indica tratamento imediato, sem necessidade de baciloscopia positiva para iniciar.",
    justify: "Escore MS 2019: contato domiciliar com TB (40 pts) + PPD 18 mm em imunocompetente — reator forte (15 pts) + Rx com linfonodomegalia hilar direita — complexo de Ranke (15 pts) + febre vespertina e tosse há mais de 2 semanas sem outra causa identificada (15 pts) + emagrecimento de 4 kg em 3 meses (5 pts) = 90 pontos — diagnóstico muito provável — indicação de tratamento mesmo sem baciloscopia.",
    expectedAnamnesis: [
      "Caracterizar a tosse: início, duração, características, catarro.",
      "Investigar febre: padrão, horário (vespertina), duração.",
      "Investigar sintomas B: suor noturno, emagrecimento (quantificar), anorexia.",
      "Perguntar especificamente sobre contato domiciliar com pessoa com tuberculose.",
      "Investigar vacinação BCG.",
      "Verificar frequência escolar e outros contatos próximos.",
      "Perguntar sobre uso de medicamentos prévios e resposta ao tratamento."
    ],
    expectedPhysical: [
      "Sinais vitais: Tax (febre vespertina), peso (comparar com peso anterior — 22 kg há 3 meses), FC, FR.",
      "Inspeção: estado geral, palidez, emagrecimento.",
      "Palpação: linfonodos (cervicais, axilares — tamanho, consistência, mobilidade); abdome (visceromegalias).",
      "Ausculta pulmonar: redução do MV em ápice direito.",
      "Pele: cicatriz de BCG (presença confirma vacinação).",
      "Manobra específica: Macintosh — percussão da coluna torácica posterior (pode revelar adenopatia paravertebral — sinal de Corneli)."
    ],
    expectedExams: [
      { exam: "PPD (Mantoux)", justify: "Evidência de infecção por M. tuberculosis", expected: "18 mm — reator forte" },
      { exam: "Radiografia de tórax PA", justify: "Identificar infiltrado e adenopatia hilar (Complexo de Ranke)", expected: "Infiltrado em ápice D + linfonodomegalia hilar D" },
      { exam: "Hemograma + VHS", justify: "Avaliar atividade inflamatória e anemia associada", expected: "Anemia leve, linfocitose relativa, VHS 78" },
      { exam: "Baciloscopia de escarro (tentativa)", justify: "Padrão ouro — mesmo com baixa positividade em crianças", expected: "Não realizada (criança não expectora)" },
      { exam: "Cultura para BK (se disponível)", justify: "Maior sensibilidade que baciloscopia em crianças", expected: "Não disponível em APS" }
    ],
    expectedConduct: [
      "Farmacológica: Esquema RHZ por 2 meses + RH por 4 meses. Doses calculadas pelo peso (18 kg): Rifampicina 10 mg/kg/dia = 180 mg/dia; Isoniazida 10 mg/kg/dia = 180 mg/dia; Pirazinamida 35 mg/kg/dia = 630 mg/dia; Total: 6 meses. Referência: MS — Manual de Tuberculose, 2019.",
      "Não farmacológica: Tratamento supervisionado (DOTS) — garantir adesão; suporte nutricional (encaminhar para nutricionista); suplementação com piridoxina (vitamina B6) — crianças desnutridas em uso de isoniazida.",
      "Encaminhamento: Notificação compulsória imediata. Investigação dos contactantes domiciliares (pai em tratamento — verificar adesão; mãe e demais moradores devem fazer PPD e Rx de tórax). Encaminhar para referência de tuberculose do município se disponível.",
      "Orientações ao paciente: Explicar à mãe que Felipe não transmite tuberculose para os colegas (criança não é bacilífera — pode continuar na escola); que o tratamento dura 6 meses e não pode ser interrompido mesmo que melhore; que o pai precisa completar o tratamento para não reinfectar a família.",
      "Seguimento: Retorno em 30 dias; peso mensal; avaliação de efeitos adversos (hepatotoxicidade, neuropatia); controle de Rx de tórax ao final do tratamento."
    ],
    expectedCommunication: [
      "Apresentação: Apresentar-se pelo nome, incluir Felipe na conversa (explicar ao menino também), criar vínculo com a mãe.",
      "Comunicação do diagnóstico: Explicar em linguagem acessível que Felipe provavelmente pegou tuberculose do pai; que existe tratamento eficaz; que Felipe pode ir à escola porque criança não transmite; que o tratamento é longo mas necessário.",
      "Escuta ativa: Validar a preocupação da mãe com a família; perguntar sobre suporte social; verificar se a mãe entendeu as orientações ao final."
    ],
    criticalErrors: [
      "Não aplicar o escore de pontuação do MS 2019 para TB infantil.",
      "Não iniciar tratamento com escore ≥ 40 pontos aguardando baciloscopia positiva (criança raramente expectora — erro grave).",
      "Não investigar contactantes domiciliares (pai com TB ativa em casa).",
      "Não realizar notificação compulsória.",
      "Orientar que Felipe não pode frequentar a escola (conduta incorreta — criança não é bacilífera).",
      "Usar Rx com infiltrado sem adenopatia como equivalente a Rx com linfonodomegalia hilar (pontuações diferentes no escore: 5 vs. 15 pontos)."
    ]
  },

  instD: {
    title: "CHECKLIST — TUBERCULOSE PULMONAR EM CRIANÇA",
    sections: [
      {
        h: "BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
        items: [
          { item: "Apresentou-se pelo nome e função à mãe e à criança.", score: 0.5, ref: "CFM 2232/2019; MS — Humanização no SUS" },
          { item: "Incluiu a criança na conversa de forma adequada para a idade.", score: 0.3, ref: "SBP — Comunicação em Pediatria, 2022" },
          { item: "Perguntou à mãe sobre como a família estava lidando com a situação de saúde do pai.", score: 0.3, ref: "MS — Política Nacional de Humanização, 2013" }
        ]
      },
      {
        h: "BLOCO 2 — ANAMNESE",
        items: [
          { item: "Investigou contato domiciliar com caso de tuberculose (pai em tratamento).", score: 1.0, ref: "MS — Manual de TB, 2019" },
          { item: "Caracterizou os sintomas: tosse > 4 semanas, febre vespertina, emagrecimento quantificado.", score: 0.5, ref: "MS — Manual de TB, 2019" },
          { item: "Perguntou especificamente sobre suor noturno.", score: 0.5, ref: "MS — Manual de TB, 2019" },
          { item: "Verificou vacinação BCG.", score: 0.3, ref: "MS — Calendário Vacinal, 2023" },
          { item: "Investigou frequência escolar e outros contactantes.", score: 0.3, ref: "MS — Manual de TB, 2019" }
        ]
      },
      {
        h: "BLOCO 3 — EXAME FÍSICO",
        items: [
          { item: "Avaliou e registrou o peso atual com comparação ao peso anterior (perda de 4 kg).", score: 0.5, ref: "MS — Manual de TB, 2019" },
          { item: "Identificou linfonodomegalia cervical bilateral ao exame.", score: 0.5, ref: "SBP — Tuberculose em Pediatria, 2021" },
          { item: "Identificou redução do murmúrio vesicular em ápice direito.", score: 0.5, ref: "SBP — Tuberculose em Pediatria, 2021" }
        ]
      },
      {
        h: "BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO",
        items: [
          { item: "Aplicou o escore de pontuação do MS 2019 e calculou ≥ 40 pontos.", score: 1.0, ref: "MS — Manual de TB, 2019" },
          { item: "Diferenciou corretamente a pontuação de Rx com linfonodomegalia hilar (15 pts) de infiltrado sem adenopatia (5 pts).", score: 0.5, ref: "MS — Manual de TB, 2019" },
          { item: "Solicitou PPD, Rx de tórax e hemograma com VHS.", score: 0.5, ref: "MS — Manual de TB, 2019" },
          { item: "Formulou diagnóstico de tuberculose pulmonar primária com indicação de tratamento.", score: 1.0, ref: "MS — Manual de TB, 2019" }
        ]
      },
      {
        h: "BLOCO 5 — CONDUTA E ORIENTAÇÃO AO PACIENTE",
        items: [
          { item: "Prescreveu esquema RHZ (2 meses) + RH (4 meses) com doses adequadas ao peso.", score: 1.0, ref: "MS — Manual de TB, 2019" },
          { item: "Mencionou notificação compulsória e investigação dos contactantes domiciliares.", score: 0.5, ref: "MS — Manual de TB, 2019" },
          { item: "Orientou que Felipe pode frequentar a escola (criança não é bacilífera).", score: 0.5, ref: "MS — Manual de TB, 2019" },
          { item: "Orientou sobre importância de completar os 6 meses de tratamento sem interrupção.", score: 0.3, ref: "MS — Manual de TB, 2019" }
        ]
      }
    ]
  }
},

  // Estação 14

{
  id: 14,
  title: "Bebê de 2 meses com crises de tosse e paradas na respiração",
  sub: "UBS/UPA — Atenção Primária / Urgência",
  tema: 'Pediatria Geral',
  topic: "Coqueluche Grave em Lactente / Antibioticoterapia e Notificação",
  level: "difícil",
  cardAccent: "#c62828",

  instA: {
    scenario: "Atenção Primária / Urgência — UBS ou UPA. Sala de atendimento pediátrico, turno diurno.",
    patient: "L.F., 2 meses de vida, feminino. Mãe: 22 anos, estudante. Sem comorbidades conhecidas. Sem vacinas realizadas até o momento.",
    complaint: "Mãe refere: 'Minha filha tá com uma tosse horrível há 10 dias. Ela fica roxa quando tosse e às vezes para de respirar por alguns segundos. Eu também fiquei muito doente semanas atrás.'",
    tasks: [
      "Realize a anamnese dirigida: características da tosse, apneia, cianose, alimentação, vacinas e contatos.",
      "Solicite o exame físico pertinente e interprete os achados de gravidade.",
      "Formule o diagnóstico e avalie a gravidade do quadro.",
      "Solicite os exames laboratoriais pertinentes e interprete os resultados.",
      "Defina a conduta: indicação de internação, antibioticoterapia e isolamento.",
      "Oriente sobre notificação compulsória e quimioprofilaxia dos contactantes."
    ]
  },

  instB: {
    vitals: {
      PA: null,
      FC: "162 bpm",
      FR: "58 irpm",
      Tax: "37,2°C (afebril)",
      Peso: "4.200 g",
      Altura: "56 cm",
      IMC: null
    },
    physicalGeneral: "Regular estado geral. Irritada entre as crises. Afebril. Cianose perioral durante a crise de tosse. Saturação de O₂ 94% em ar ambiente, caindo para 89% durante a crise. Aparência de sofrimento entre os paroxismos.",
    physicalSeg: [
      "RESPIRATÓRIO: MV presente bilateralmente, sem sibilos ou crepitações; FR 58 irpm; SpO₂ 94% (basal) / 89% (crise); apneia de 10 segundos observada durante o exame.",
      "CARDIOVASCULAR: FC 162 bpm; RCR 2T, sem sopros; perfusão capilar < 2 segundos.",
      "NEUROLÓGICO: Alerta entre as crises, choro forte após tosse; tônus preservado.",
      "GERAL: Sem exantema; mucosas úmidas; fontanela normotensa.",
      "VACINAS: Nenhuma vacina realizada — consulta dos 2 meses ainda não tinha sido feita antes desse adoecimento."
    ],
    labs: [
      { test: "Leucócitos", val: "38.000/mm³", ref: "5.000–19.500/mm³ (2 meses)", alt: true },
      { test: "Linfócitos", val: "85%", ref: "20–70%", alt: true },
      { test: "Neutrófilos", val: "10%", ref: "20–60%", alt: true },
      { test: "Plaquetas", val: "620.000/mm³", ref: "150.000–400.000/mm³", alt: true },
      { test: "Hemoglobina", val: "11,5 g/dL", ref: "10–14 g/dL (2 meses)", alt: false },
      { test: "PCR", val: "8 mg/L", ref: "< 5 mg/L", alt: true }
    ],
    image: "Radiografia de tórax (se solicitada): Sem consolidações ou infiltrados. Discreta hiperinsuflação. Sem cardiomegalia. Achados inespecíficos para coqueluche (Rx de tórax geralmente normal ou com hiperinsuflação leve).",
    note: "Entregar o exame físico ao início, quando solicitado. Entregar o hemograma somente se o candidato solicitar verbalmente. Entregar a radiografia somente se solicitada explicitamente. Se o candidato presenciar a apneia durante o exame (simulada pelo avaliador), isso reforça a gravidade do caso. Simular episódio de tosse paroxística durante o atendimento, se possível.",
    patientProfile: "Lara F., 2 meses de vida, feminino. Mãe: Carla F., 22 anos, estudante universitária, solteira, mora com os pais (avós da bebê). A própria mãe teve tosse intensa há 3 semanas, durando mais de 2 semanas, sem diagnóstico estabelecido na época.",
    script: [
      { trigger: "Abertura", speech: "Doutor(a), minha filha tá com uma tosse horrível há 10 dias. Ela tosse muito seguido, fica roxa e às vezes parece que para de respirar. Tô desesperada." },
      { trigger: "Sobre a crise de tosse", speech: "Ela tosse muito seguido, parece que não consegue parar. No final da crise ela faz um barulho estranho ao respirar, como se fosse engasgar. Às vezes fica roxa da cor." },
      { trigger: "Sobre a apneia", speech: "Já aconteceu umas três vezes hoje de ela ficar uns segundos sem respirar. Isso me apavora muito." },
      { trigger: "Sobre a alimentação", speech: "Ela não tá mamando bem. Depois das crises fica cansada e às vezes regurgita." },
      { trigger: "Sobre vacinas", speech: "Ela ainda não tomou vacina nenhuma. A consulta dos 2 meses era semana que vem." },
      { trigger: "Sobre a própria mãe", speech: "Eu mesma fiquei com uma tosse horrível umas 3 semanas atrás. Ficou mais de duas semanas. Achei que era gripe." },
      { trigger: "Sobre os avós (se perguntado)", speech: "Minha mãe e meu pai também tiveram tosse essa semana, mas mais fraca." },
      { trigger: "Sobre a amamentação", speech: "Estou amamentando. Posso continuar?" },
      { trigger: "Pergunta ativa", speech: "É grave? Precisa internar ela?" },
      { trigger: "Pergunta ativa", speech: "Minha família precisa tomar algum remédio?" },
      { trigger: "Pergunta ativa", speech: "Eu passei essa doença pra ela?" }
    ],
    hiddenInfo: [
      "A mãe teve tosse paroxística intensa por mais de 2 semanas há 3 semanas — só revela em detalhes se o candidato perguntar especificamente sobre doenças recentes na família ou contatos com adultos tossidores.",
      "Os avós também apresentaram tosse na mesma semana — só revela se o candidato perguntar especificamente sobre contatos domiciliares com tosse."
    ],
    actorBehavior: "Mãe jovem, muito ansiosa e assustada. Claramente exausta pelo sono perdido cuidando da bebê nas crises. Responde de forma detalhada quando perguntada com empatia. Fica emocionada ao descrever as crises de apneia. Se o candidato usar linguagem técnica sem explicar, fica confusa e quieta. Reage com alívio quando o médico demonstra segurança e explica o que vai acontecer."
  },

  instC: {
    diagnosis: "Coqueluche grave em lactente de 2 meses não vacinada. Tosse paroxística com cianose, apneia recorrente, saturação caindo durante as crises, leucocitose com linfocitose intensa (85%) e trombocitose reativa. Provável fonte de contágio: mãe (adulta com tosse paroxística 3 semanas antes — estratégia do casulo falhada por ausência de dTpa na gestação).",
    differentials: [
      "Bronquiolite viral aguda (VSR) — tosse e desconforto respiratório em lactente; entretanto, sibilância e crepitações são típicas; ausência de sibilos e linfocitose marcada favorecem coqueluche.",
      "Pneumonia bacteriana — febre, taquipneia e infiltrado no Rx são típicos; ausente aqui (Rx normal, afebril, linfocitose ao invés de neutrofilia).",
      "Aspiração de corpo estranho — tosse súbita em criança maior; improvável em lactente de 2 meses exclusivamente amamentada."
    ],
    context: "Lactente de 2 meses não vacinada com coqueluche grave, adquirida provavelmente da mãe (adulta tossidora). Apneia recorrente em lactente < 6 meses é critério de internação imediata. Leucocitose com linfocitose > 80% é a assinatura hematológica da coqueluche. Tratamento: azitromicina; isolamento; notificação e quimioprofilaxia dos contactantes.",
    justify: "Lactente de 2 meses, sem vacinas, com tosse paroxística há 10 dias, cianose, apneia recorrente e SpO₂ 89% durante as crises. Leucócitos 38.000/mm³ com linfocitose 85% — padrão hematológico clássico de coqueluche (hiperleucocitose com predomínio linfocítico). Contato domiciliar com adulto tossidor (mãe) sem dTpa na gestação. Ausência de febre afasta pneumonia bacteriana. Rx normal afasta consolidação. Diagnóstico sindrômico de coqueluche grave com indicação de internação.",
    expectedAnamnesis: [
      "Caracterizar a tosse: paroxística, cianose, whoop (inspiração ruidosa), vômitos pós-tosse.",
      "Investigar apneia: frequência, duração, cor durante o episódio.",
      "Perguntar sobre alimentação: aceite, regurgitação, ganho de peso.",
      "Investigar vacinação: pentavalente realizada? Quantas doses?",
      "Perguntar sobre adultos tossidores no domicílio (estratégia do casulo).",
      "Investigar se a mãe recebeu dTpa na gestação.",
      "Perguntar sobre outros contatos: escola, creche (não se aplica aos 2 meses)."
    ],
    expectedPhysical: [
      "Sinais vitais: FC, FR, Tax, SpO₂ (basal e durante crise), peso.",
      "Inspeção: estado geral, coloração (cianose durante crise), tônus.",
      "Ausculta pulmonar: MV bilateral (geralmente normal entre as crises), avaliar sibilância.",
      "Neurológico: nível de consciência, fontanela, tônus.",
      "Avaliação da apneia: observar diretamente se possível.",
      "Manobra específica: não há manobra específica — o diagnóstico é clínico baseado no padrão de tosse e nos dados hematológicos."
    ],
    expectedExams: [
      { exam: "Hemograma completo", justify: "Leucocitose com linfocitose é assinatura hematológica da coqueluche", expected: "Leucócitos 38.000, linfócitos 85%" },
      { exam: "Oximetria de pulso contínua", justify: "Monitorar dessaturação durante as crises", expected: "SpO₂ 89% durante crise" },
      { exam: "Radiografia de tórax", justify: "Afastar pneumonia ou complicações", expected: "Inespecífico — hiperinsuflação leve" },
      { exam: "PCR para Bordetella pertussis (se disponível)", justify: "Confirmação etiológica", expected: "Não disponível em APS" }
    ],
    expectedConduct: [
      "Farmacológica: Azitromicina 10 mg/kg/dia VO por 5 dias (dose: 42 mg/dia — 4,2 kg × 10 mg/kg). Primeira linha em todas as faixas etárias, incluindo < 1 mês. Eritromicina é contraindicada em < 1 mês (risco de estenose hipertrófica do piloro) — nesse caso (2 meses), poderia ser usada como alternativa, mas azitromicina é preferida. Referência: MS — Guia de Vigilância em Saúde, 2022.",
      "Não farmacológica: Internação hospitalar (lactente < 6 meses + apneia + SpO₂ 89%); oxigenioterapia suplementar; monitorização cardiorrespiratória contínua; evitar estímulos que desencadeiam a tosse; posição semisentada; manter aleitamento materno fracionado.",
      "Encaminhamento: Internação hospitalar imediata (UPA — encaminhar para hospital pediátrico com UTI se disponível).",
      "Orientações ao paciente: Explicar à mãe a gravidade; que a internação é necessária para segurança da bebê; que o tratamento com antibiótico será iniciado imediatamente; que a família precisará tomar remédio preventivo.",
      "Seguimento: Quimioprofilaxia de todos os contactantes domiciliares (mãe, avós): azitromicina 10 mg/kg/dia por 5 dias (mesma dose/esquema, independente do status vacinal). Notificação compulsória imediata."
    ],
    expectedCommunication: [
      "Apresentação: Apresentar-se pelo nome, sentar-se, criar vínculo com mãe ansiosa antes de perguntar.",
      "Comunicação do diagnóstico: Explicar que a bebê provavelmente tem coqueluche ('tosse comprida'), uma doença bacteriana grave em bebês pequenos; que a internação é necessária para garantir a segurança dela; que existe tratamento.",
      "Escuta ativa: Validar o medo da mãe; não culpabilizar pela falta de vacina; explicar sobre a estratégia do casulo para futuras gestações."
    ],
    criticalErrors: [
      "Não reconhecer a apneia como critério de internação imediata em lactente < 6 meses.",
      "Não prescrever antibiótico (azitromicina) — ou prescrever eritromicina sem ressalvar a contraindicação em < 1 mês.",
      "Dar alta sem internação diante de lactente < 6 meses com apneia e SpO₂ 89%.",
      "Não mencionar notificação compulsória e quimioprofilaxia dos contactantes.",
      "Não identificar a mãe como provável fonte de contágio (estratégia do casulo falhada).",
      "Confundir o quadro com bronquiolite e não solicitar hemograma (linfocitose é fundamental para o raciocínio diagnóstico)."
    ]
  },

  instD: {
    title: "CHECKLIST — COQUELUCHE GRAVE EM LACTENTE",
    sections: [
      {
        h: "BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
        items: [
          { item: "Apresentou-se pelo nome e função antes de iniciar o atendimento.", score: 0.5, ref: "CFM 2232/2019; MS — Humanização no SUS" },
          { item: "Validou o sentimento de angústia da mãe antes de iniciar as perguntas.", score: 0.5, ref: "MS — Política Nacional de Humanização, 2013" },
          { item: "Explicou à mãe de forma clara a necessidade de internação sem usar jargão técnico.", score: 0.5, ref: "MS — Política Nacional de Humanização, 2013" }
        ]
      },
      {
        h: "BLOCO 2 — ANAMNESE",
        items: [
          { item: "Caracterizou a tosse: paroxística, cianose, apneia, inspiração ruidosa (whoop).", score: 0.5, ref: "MS — Guia de Vigilância em Saúde, 2022" },
          { item: "Investigou vacinação da bebê (pentavalente) e confirmou ausência de vacinas.", score: 0.5, ref: "MS — Calendário Vacinal, 2023" },
          { item: "Perguntou sobre adultos tossidores no domicílio (contato com mãe tossidora).", score: 1.0, ref: "MS — Guia de Vigilância em Saúde, 2022" },
          { item: "Investigou se a mãe recebeu dTpa na gestação (estratégia do casulo).", score: 0.5, ref: "MS — Calendário Vacinal, 2023" }
        ]
      },
      {
        h: "BLOCO 3 — EXAME FÍSICO",
        items: [
          { item: "Avaliou sinais vitais com ênfase em SpO₂ basal e durante a crise.", score: 0.5, ref: "SBP — Coqueluche, 2021" },
          { item: "Identificou apneia durante o exame como sinal de gravidade.", score: 1.0, ref: "MS — Guia de Vigilância em Saúde, 2022" }
        ]
      },
      {
        h: "BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO",
        items: [
          { item: "Formulou hipótese de coqueluche grave com base no quadro clínico e epidemiológico.", score: 1.0, ref: "MS — Guia de Vigilância em Saúde, 2022" },
          { item: "Solicitou hemograma e interpretou leucocitose com linfocitose > 80% como sugestiva de coqueluche.", score: 0.5, ref: "MS — Guia de Vigilância em Saúde, 2022" },
          { item: "Indicou internação com justificativa: lactente < 6 meses + apneia + dessaturação.", score: 1.0, ref: "SBP — Coqueluche, 2021" }
        ]
      },
      {
        h: "BLOCO 5 — CONDUTA E ORIENTAÇÃO AO PACIENTE",
        items: [
          { item: "Prescreveu azitromicina 10 mg/kg/dia por 5 dias como antibioticoterapia de primeira linha.", score: 1.0, ref: "MS — Guia de Vigilância em Saúde — Coqueluche, 2022" },
          { item: "Indicou notificação compulsória imediata.", score: 0.5, ref: "MS — Guia de Vigilância em Saúde, 2022" },
          { item: "Indicou quimioprofilaxia para todos os contactantes domiciliares com mesmo esquema de azitromicina.", score: 0.5, ref: "MS — Guia de Vigilância em Saúde, 2022" },
          { item: "Orientou manutenção do aleitamento materno de forma fracionada durante a internação.", score: 0.5, ref: "SBP — Aleitamento Materno, 2021" }
        ]
      }
    ]
  }
},

  // Estação 15

{
  id: 15,
  title: "Criança com articulações inchadas, movimentos involuntários e sopro no coração",
  sub: "Ambulatório — Atenção Secundária",
  tema: 'Pediatria Geral',
  topic: "Febre Reumática / Critérios de Jones / Profilaxia Secundária",
  level: "difícil",
  cardAccent: "#7b1fa2",

  instA: {
    scenario: "Atenção Secundária — Ambulatório Pediátrico. Consultório, turno da manhã.",
    patient: "C.M., 10 anos, masculino, estudante do 5º ano. Mora com a mãe. Sem comorbidades conhecidas.",
    complaint: "Mãe refere: 'Meu filho começou com dor e inchaço nas articulações há uma semana, vai de um lado para o outro. Ele também ficou agitado e com uns movimentos estranhos que ele mesmo não consegue parar. Há 3 semanas teve garganta inflamada.'",
    tasks: [
      "Realize a anamnese clínica com ênfase nos critérios diagnósticos da doença suspeita.",
      "Solicite o exame físico dirigido com avaliação cardiovascular e neurológica.",
      "Aplique os Critérios de Jones revisados (2015) e formule o diagnóstico.",
      "Solicite os exames complementares pertinentes e interprete os resultados.",
      "Defina a conduta terapêutica para a fase aguda e para a prevenção de recorrências.",
      "Oriente a mãe e o paciente sobre o diagnóstico, o tratamento e o seguimento de longo prazo."
    ]
  },

  instB: {
    vitals: {
      PA: "100/65 mmHg",
      FC: "102 bpm",
      FR: "18 irpm",
      Tax: "38,2°C",
      Peso: "34 kg",
      Altura: "1,40 m",
      IMC: "17,3 kg/m² (adequado para a idade)"
    },
    physicalGeneral: "Regular estado geral. Agitado, com movimentos involuntários intermitentes de membros superiores. Fácies de dor discreta. Hidratado, corado. Febril (38,2°C). Sem icterícia ou cianose.",
    physicalSeg: [
      "ARTICULAR: Joelho direito e tornozelo esquerdo com edema, calor, rubor e limitação de movimento (artrite franca); artrite migratória — joelho esquerdo com dor residual sem edema ativo.",
      "CARDIOVASCULAR: RCR 2T; sopro holosistólico 3+/6+ em foco mitral, irradiando para axila; FC 102 bpm.",
      "NEUROLÓGICO: Movimentos involuntários, assimétricos, de membros superiores, que pioram com emoção e somem durante o sono — compatível com Coreia de Sydenham; sem déficit focal; sinal do 'leiteiro' positivo (preensão irregular e assimétrica).",
      "PELE: Sem eritema marginado; sem nódulos subcutâneos palpáveis.",
      "OROFARINGE: Orofaringe sem hiperemia ou exsudato atual."
    ],
    labs: [
      { test: "ASO (Antiestreptolisina O)", val: "840 UI/mL", ref: "< 240 UI/mL", alt: true },
      { test: "PCR", val: "68 mg/L", ref: "< 5 mg/L", alt: true },
      { test: "VHS", val: "92 mm/h", ref: "< 20 mm/h", alt: true },
      { test: "Leucócitos", val: "14.000/mm³", ref: "4.500–13.500/mm³", alt: true },
      { test: "Neutrófilos", val: "78%", ref: "40–70%", alt: true },
      { test: "Hemograma (restante)", val: "Normal", ref: "—", alt: false },
      { test: "ECG", val: "Intervalo PR 220 ms", ref: "< 200 ms (crianças)", alt: true },
      { test: "Ecocardiograma", val: "Insuficiência mitral leve, sem espessamento valvar significativo, sem cardiomegalia, sem derrame pericárdico", ref: "—", alt: true },
      { test: "Cultura de orofaringe", val: "Negativa (colhida 3 semanas após a faringite)", ref: "Negativa", alt: false }
    ],
    image: "Radiografia de tórax: Área cardíaca normal (índice cardiotorácico 0,48). Sem congestão pulmonar. Sem derrames.",
    note: "Entregar o exame físico ao início, quando solicitado. Entregar os exames laboratoriais somente se solicitados verbalmente (ASO, PCR, VHS, hemograma). Entregar o ECG e o laudo do ecocardiograma somente se solicitados explicitamente. Informar ao candidato que a cultura de orofaringe foi colhida 3 semanas após a faringite (resultado negativo — esperado).",
    patientProfile: "Caio M., 10 anos, masculino, estudante do 5º ano. Mãe: Aparecida M., 38 anos, auxiliar de limpeza, solteira. Pai ausente. Residem em casa alugada com dois cômodos. Caio é ativo, gosta de futebol (atualmente sem conseguir jogar pela dor).",
    script: [
      { trigger: "Abertura", speech: "Mãe: 'Doutor(a), meu filho começou a ter dor no joelho e no tornozelo há uma semana. A dor vai mudando de lugar — ontem era no joelho direito, hoje parece que melhorou lá mas apareceu no outro lado. Ele também ficou muito agitado e com uns movimentos que ele mesmo não consegue controlar.'" },
      { trigger: "Sobre a garganta", speech: "Mãe: 'Ele teve garganta muito inflamada há 3 semanas. Tomou antibiótico, mas parou depois de 3 dias porque melhorou. A garganta não tá mais inflamada.'" },
      { trigger: "Sobre os movimentos", speech: "Caio: 'Eu não consigo parar minha mão de se mexer. É muito chato. Na escola os colegas ficam olhando.' Mãe: 'À noite quando ele dorme, para. Mas quando ele fica nervoso piora.'" },
      { trigger: "Sobre a febre", speech: "Mãe: 'Ele tá com febre quase todo dia, coisa de 38.'" },
      { trigger: "Sobre esporte", speech: "Caio: 'Eu gosto de jogar bola mas não consigo por causa da dor e dos movimentos.'" },
      { trigger: "Sobre o coração (se perguntado)", speech: "Mãe: 'Nunca ninguém falou de problema no coração antes. Por que o senhor/a senhora está perguntando?'" },
      { trigger: "Sobre eritema ou manchas (se perguntado)", speech: "Mãe: 'Não apareceu mancha ou caroço nenhum na pele, não.'" },
      { trigger: "Pergunta ativa", speech: "Mãe: 'O que é que meu filho tem? É grave?'" },
      { trigger: "Pergunta ativa", speech: "Mãe: 'Isso afeta o coração dele?'" },
      { trigger: "Pergunta ativa", speech: "Mãe: 'Ele vai precisar tomar remédio por muito tempo?'" },
      { trigger: "Pergunta ativa", speech: "Caio: 'Eu posso voltar a jogar bola?'" }
    ],
    hiddenInfo: [
      "O antibiótico foi tomado por apenas 3 dias (não completou o curso) — só revela se o candidato perguntar especificamente por quanto tempo tomou o antibiótico para a garganta.",
      "Há histórico familiar de febre reumática na mãe (diagnosticada na infância) — só revela se o candidato perguntar especificamente sobre doenças no coração ou febre reumática na família."
    ],
    actorBehavior: "Mãe preocupada e cansada, trabalhadora, renda baixa. Colaborativa com quem demonstra respeito. Fica ansiosa ao saber que o coração pode estar envolvido. Caio é tímido, responde com monossílabos inicialmente, mas se anima quando o médico fala sobre futebol. Movimentos involuntários podem ser simulados pelo ator com movimentos irregulares das mãos durante a consulta."
  },

  instC: {
    diagnosis: "Febre Reumática com 3 critérios maiores pelos Critérios de Jones revisados (2015): Cardite (sopro + ecocardiograma com insuficiência mitral leve) + Artrite migratória poliarticular + Coreia de Sydenham. Evidência de infecção estreptocócica recente: ASO 840 UI/mL. Cardite leve (sem cardiomegalia, sem derrame, sem insuficiência cardíaca) — tratamento com AAS, não corticoide.",
    differentials: [
      "Artrite reumatoide juvenil (ARJ) — artrite em crianças pode mimetizar; entretanto, não há relação com faringite estreptocócica, ASO elevado ou coreia; artrite na ARJ é aditiva, não migratória.",
      "Lúpus eritematoso sistêmico (LES) — artrite, febre e comprometimento sistêmico possíveis; entretanto, ausência de fotossensibilidade, rash malar e FAN; ASO elevado e contexto clínico favorecem FR.",
      "Síndrome de Sydenham isolada (coreia isolada) — a coreia pode ser a única manifestação de FR; nesse caso há outros critérios maiores associados, configurando o diagnóstico de FR completa."
    ],
    context: "Criança de 10 anos com Febre Reumática confirmada pelos Critérios de Jones 2015, com comprometimento cardíaco (cardite leve), articular (artrite migratória) e neurológico (Coreia de Sydenham). Infecção estreptocócica recente documentada por ASO 840 UI/mL. Antibiótico para garganta tomado por apenas 3 dias (tratamento incompleto). Cardite leve sem cardiomegalia ou insuficiência cardíaca — indicação de AAS, não corticoide.",
    justify: "Critérios de Jones (2015): 3 critérios maiores (cardite clínica + ecocardiográfica + artrite migratória + Coreia de Sydenham) + evidência de infecção estreptocócica (ASO 840 UI/mL > 3× o limite superior). Diagnóstico confirmado. Cardite leve definida pela ausência de cardiomegalia (ICT 0,48), ausência de derrame pericárdico e ausência de insuficiência cardíaca — AAS é o tratamento correto (corticoide apenas para cardite moderada a grave).",
    expectedAnamnesis: [
      "Investigar faringite recente: características, tratamento, duração do antibiótico.",
      "Caracterizar a artrite: quais articulações, migratória ou aditiva, calor, rubor, limitação.",
      "Investigar movimentos involuntários: características, quando piora (emoção), quando melhora (sono).",
      "Perguntar sobre febre: padrão, duração.",
      "Investigar eritema marginado e nódulos subcutâneos.",
      "Perguntar sobre histórico familiar de febre reumática ou cardiopatia reumática.",
      "Investigar episódios anteriores de faringite de repetição."
    ],
    expectedPhysical: [
      "Sinais vitais: Tax, FC (taquicardia pode ser sinal de cardite), PA.",
      "Articular: inspeção e palpação de todas as articulações grandes (joelhos, tornozelos, cotovelos, punhos).",
      "Cardiovascular: ausculta cuidadosa (sopro mitral holosistólico = insuficiência mitral).",
      "Neurológico: observar movimentos involuntários, testar sinal do 'leiteiro' (preensão irregular), avaliar se somem no sono.",
      "Pele: pesquisa ativa de eritema marginado (tronco) e nódulos subcutâneos (proeminências ósseas).",
      "Orofaringe: avaliar estado atual."
    ],
    expectedExams: [
      { exam: "ASO (Antiestreptolisina O)", justify: "Evidência de infecção estreptocócica recente", expected: "840 UI/mL (elevado)" },
      { exam: "Anti-DNase B (se disponível)", justify: "Segunda evidência sorológica — importante quando ASO negativo", expected: "Não solicitado nesse caso" },
      { exam: "PCR e VHS", justify: "Marcadores de atividade inflamatória", expected: "PCR 68, VHS 92" },
      { exam: "Hemograma", justify: "Avaliação sistêmica", expected: "Leucocitose com neutrofilia" },
      { exam: "ECG", justify: "Pesquisa de bloqueio AV (PR prolongado) — critério menor", expected: "PR 220 ms (prolongado)" },
      { exam: "Ecocardiograma", justify: "Cardite subclínica — Jones 2015 inclui eco", expected: "Insuficiência mitral leve" },
      { exam: "Radiografia de tórax", justify: "Avaliar cardiomegalia e congestão", expected: "ICT 0,48 — normal" }
    ],
    expectedConduct: [
      "Farmacológica fase aguda: Penicilina G benzatina — erradicação do estreptococo — dose única IM: 1.200.000 UI (> 30 kg). Referência: SBC/SBP, 2020. AAS 50–70 mg/kg/dia VO por 4–8 semanas para cardite leve e artrite (dose: 34 kg × 60 mg/kg = 2.040 mg/dia, dividido em 3 a 4 tomadas). Coreia: repouso; haloperidol ou ácido valproico se intensa e incapacitante (avaliar com neurologista). NÃO indicar corticoide — cardite leve sem cardiomegalia, sem derrame, sem IC.",
      "Profilaxia secundária: Penicilina G benzatina 1.200.000 UI IM a cada 21 dias (> 30 kg). Com cardite e lesão valvar leve: mínimo 10 anos ou até 25 anos (o que for maior). Referência: SBC/SBP, 2020.",
      "Não farmacológica: Repouso relativo durante a fase aguda; fisioterapia após controle da artrite; restrição de atividades físicas intensas até avaliação cardiológica.",
      "Encaminhamento: Cardiologia pediátrica para seguimento da valvopatia; Neurologia se coreia intensa.",
      "Orientações ao paciente: Explicar à mãe e ao Caio em linguagem acessível; enfatizar a importância da injeção mensal para proteger o coração; orientar que Caio poderá jogar bola após avaliação cardiológica e controle da fase aguda; orientar retorno imediato se aparecer falta de ar ou piora do sopro.",
      "Seguimento: Retorno em 4 semanas; ecocardiograma de controle em 3 meses; avaliação da coreia com neurologista; ASO e VHS mensais até normalização."
    ],
    expectedCommunication: [
      "Apresentação: Apresentar-se pelo nome e incluir Caio na conversa desde o início, não apenas a mãe.",
      "Comunicação do diagnóstico: Explicar que Caio tem uma doença chamada febre reumática, que acontece quando uma bactéria da garganta não tratada direito acaba afetando o coração, as articulações e os movimentos; que tem tratamento; que a injeção mensal é fundamental para proteger o coração.",
      "Escuta ativa: Perguntar o que Caio entendeu; validar a preocupação com o futebol; não culpabilizar a mãe pelo antibiótico incompleto."
    ],
    criticalErrors: [
      "Não reconhecer a Coreia de Sydenham como critério maior de febre reumática.",
      "Não aplicar os Critérios de Jones 2015 para estabelecer o diagnóstico.",
      "Indicar corticoide para cardite leve (incorreto — AAS é o tratamento de escolha; corticoide é reservado para cardite moderada a grave).",
      "Não indicar profilaxia secundária com penicilina benzatina.",
      "Usar intervalo de 28 dias para a penicilina benzatina (incorreto — intervalo deve ser de 21 dias).",
      "Não solicitar ecocardiograma para documentar cardite subclínica."
    ]
  },

  instD: {
    title: "CHECKLIST — FEBRE REUMÁTICA AGUDA COM CARDITE E COREIA",
    sections: [
      {
        h: "BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
        items: [
          { item: "Apresentou-se pelo nome e incluiu a criança na conversa, não apenas a mãe.", score: 0.5, ref: "CFM 2232/2019; SBP — Comunicação em Pediatria" },
          { item: "Perguntou ao Caio como ele estava se sentindo com os movimentos involuntários na escola.", score: 0.5, ref: "MS — Política Nacional de Humanização, 2013" }
        ]
      },
      {
        h: "BLOCO 2 — ANAMNESE",
        items: [
          { item: "Investigou faringite recente: características, tratamento e duração do antibiótico.", score: 0.5, ref: "SBC/SBP — Diretriz FR, 2020" },
          { item: "Caracterizou a artrite: quais articulações, padrão migratório, sinais flogísticos.", score: 0.5, ref: "SBC/SBP — Diretriz FR, 2020" },
          { item: "Investigou os movimentos involuntários: quando apareceu, quando piora/melhora.", score: 0.5, ref: "SBC/SBP — Diretriz FR, 2020" },
          { item: "Pesquisou eritema marginado e nódulos subcutâneos (mesmo que ausentes).", score: 0.3, ref: "SBC/SBP — Diretriz FR, 2020" },
          { item: "Investigou histórico familiar de febre reumática ou cardiopatia reumática.", score: 0.3, ref: "SBC/SBP — Diretriz FR, 2020" }
        ]
      },
      {
        h: "BLOCO 3 — EXAME FÍSICO",
        items: [
          { item: "Realizou ausculta cardíaca e identificou sopro holosistólico em foco mitral.", score: 1.0, ref: "SBC/SBP — Diretriz FR, 2020" },
          { item: "Avaliou movimentos involuntários e identificou padrão compatível com Coreia de Sydenham.", score: 0.5, ref: "SBC/SBP — Diretriz FR, 2020" },
          { item: "Avaliou articulações acometidas com identificação de artrite franca (calor, rubor, edema).", score: 0.5, ref: "SBC/SBP — Diretriz FR, 2020" }
        ]
      },
      {
        h: "BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO",
        items: [
          { item: "Aplicou os Critérios de Jones 2015 e formulou diagnóstico de Febre Reumática.", score: 1.0, ref: "AHA — Jones Criteria, 2015; SBC/SBP, 2020" },
          { item: "Solicitou ASO, PCR, VHS e interpretou ASO 840 UI/mL como evidência de infecção estreptocócica recente.", score: 0.5, ref: "SBC/SBP — Diretriz FR, 2020" },
          { item: "Solicitou ECG e ecocardiograma para documentar cardite.", score: 0.5, ref: "SBC/SBP — Diretriz FR, 2020" }
        ]
      },
      {
        h: "BLOCO 5 — CONDUTA E ORIENTAÇÃO AO PACIENTE",
        items: [
          { item: "Prescreveu penicilina G benzatina dose única para erradicação do estreptococo.", score: 0.5, ref: "SBC/SBP — Diretriz FR, 2020" },
          { item: "Prescreveu AAS 50–70 mg/kg/dia para cardite leve e artrite (e NÃO prescreveu corticoide).", score: 1.0, ref: "SBC/SBP — Diretriz FR, 2020" },
          { item: "Indicou profilaxia secundária com penicilina benzatina a cada 21 dias (não 28 dias) com duração adequada ao grau de cardite.", score: 1.0, ref: "SBC/SBP — Diretriz FR, 2020" },
          { item: "Orientou à mãe e ao Caio sobre o diagnóstico, a importância da injeção mensal e o seguimento em linguagem acessível.", score: 0.4, ref: "MS — Política Nacional de Humanização, 2013" }
        ]
      }
    ]
  }
},

  // Estação 16

{
  id: 16,
  title: "Adolescente de 15 anos que veio sozinha para consulta de rotina",
  sub: "UBS — Atenção Primária",
  tema: 'Pediatria Geral',
  topic: "Anorexia Nervosa / Saúde do Adolescente / HEEADSSS",
  level: "difícil",
  cardAccent: "#ad1457",

  instA: {
    scenario: "Atenção Primária — UBS. Consultório de atenção ao adolescente, turno da tarde. A mãe aguarda na recepção.",
    patient: "J.A., 15 anos, feminino, estudante do ensino médio. Sem comorbidades registradas. Comparece sozinha à consulta.",
    complaint: "Recepcionista informa: 'A adolescente veio para consulta de rotina. A mãe ficou na recepção.'",
    tasks: [
      "Apresente-se, garanta a confidencialidade e crie vínculo com a adolescente antes de iniciar a anamnese.",
      "Realize a anamnese utilizando o instrumento HEEADSSS com ênfase em alimentação, autoimagem e saúde menstrual.",
      "Solicite o exame físico pertinente, calcule o IMC e avalie o estadiamento de Tanner.",
      "Identifique o diagnóstico com base nos achados clínicos e na história.",
      "Defina os encaminhamentos necessários e avalie critérios de internação.",
      "Comunique à adolescente o diagnóstico e oriente sobre o tratamento com respeito à sua autonomia."
    ]
  },

  instB: {
    vitals: {
      PA: "88/60 mmHg",
      FC: "52 bpm",
      FR: "14 irpm",
      Tax: "36,0°C",
      Peso: "42 kg",
      Altura: "1,65 m",
      IMC: "15,4 kg/m² (abaixo de p5 para 15 anos — magreza acentuada)"
    },
    physicalGeneral: "Regular estado geral. Adolescente com aparência caquética, musculatura escassa, face com traços diminuídos. Pele ressecada, fria. Unhas quebradiças. Afebril. Hipotenso e bradicárdico — sinais de instabilidade hemodinâmica leve.",
    physicalSeg: [
      "PELE: Lanugo em antebraços e nuca; xerodermia (pele seca); unhas frágeis e quebradiças; sem lesões de pele.",
      "CARDIOVASCULAR: FC 52 bpm (bradicardia); PA 88/60 mmHg (hipotensão); RCR 2T, sem sopros; perfusão capilar normal.",
      "DESENVOLVIMENTO PUBERAL (Tanner): Mamas estágio III (esperado IV–V para 15 anos); pelos pubianos estágio III — atraso puberal compatível com desnutrição crônica.",
      "ABDOME: Plano, levemente escavado, sem visceromegalias, timpânico; musculatura abdominal visível.",
      "OROFARINGE: Erosão do esmalte dentário nos dentes anteriores (sugestivo de vômitos recorrentes — investigar)."
    ],
    labs: [
      { test: "Sódio", val: "136 mEq/L", ref: "135–145 mEq/L", alt: false },
      { test: "Potássio", val: "3,1 mEq/L", ref: "3,5–5,0 mEq/L", alt: true },
      { test: "Fosfato", val: "2,8 mg/dL", ref: "3,0–4,5 mg/dL", alt: true },
      { test: "Hemoglobina", val: "10,5 g/dL", ref: "12–16 g/dL", alt: true },
      { test: "Albumina", val: "3,0 g/dL", ref: "3,5–5,0 g/dL", alt: true },
      { test: "TSH", val: "1,8 mUI/L", ref: "0,5–5,0 mUI/L", alt: false },
      { test: "Glicose de jejum", val: "72 mg/dL", ref: "70–100 mg/dL", alt: false },
      { test: "ECG", val: "Bradicardia sinusal (FC 52); sem prolongamento de QT", ref: "—", alt: true }
    ],
    image: null,
    note: "A consulta começa com a adolescente já na sala. Entregar o exame físico somente se solicitado verbalmente. Entregar os exames laboratoriais somente se o candidato solicitar exames de avaliação nutricional ou de rastreio. Entregar o ECG se solicitado. Atenção: o candidato deve garantir a confidencialidade antes de qualquer pergunta sensível — se não o fizer, o avaliador pode pontuar o item como inadequado.",
    patientProfile: "Júlia A., 15 anos, feminino, estudante do 1º ano do ensino médio. Mãe: Paula A., 44 anos, professora. Mãe aguarda na recepção. Júlia é considerada 'a mais estudiosa da turma' e pratica dança clássica 4 vezes por semana. Menstrua desde os 13 anos, mas parou há 6 meses. Não tem namorado. Mora com a mãe e o padrasto.",
    script: [
      { trigger: "Abertura (resistente)", speech: "Vim só porque minha mãe insistiu. Eu tô bem. Não precisava vir." },
      { trigger: "Se o médico garantir sigilo", speech: "Tudo que eu falar aqui fica aqui, né? Você não vai contar pra minha mãe? (só abre mais depois da garantia)" },
      { trigger: "Sobre alimentação (após vínculo)", speech: "Como pouco mesmo. Não tenho muita fome. Acho que meu corpo não precisa de tanto." },
      { trigger: "Sobre a autoimagem", speech: "Me acho gorda ainda. Sei que pareço magra pra todo mundo, mas quando me olho no espelho vejo diferente." },
      { trigger: "Sobre a menstruação", speech: "Parou faz uns 6 meses. Achei ótimo, era uma chatice. Minha professora de dança disse que às vezes para mesmo em quem treina muito." },
      { trigger: "Sobre a dança", speech: "Danço 4 vezes por semana. Às vezes mais. Quero ser bailarina profissional. Preciso manter o peso." },
      { trigger: "Sobre vômitos (se perguntado diretamente)", speech: "Às vezes, quando como demais, eu… forço para sair. Mas é raro. (informação sensível — só revela se perguntada diretamente)" },
      { trigger: "Sobre humor e escola", speech: "Tô bem na escola. Tenho boas notas. Só fico cansada às vezes." },
      { trigger: "Pergunta ativa", speech: "Você vai contar pra minha mãe o que eu disse?" },
      { trigger: "Pergunta ativa", speech: "Eu vou precisar parar de dançar?" }
    ],
    hiddenInfo: [
      "Júlia provoca vômitos ocasionalmente após comer — só revela se o candidato perguntar diretamente sobre vômitos autoprovocados ou comportamentos purgativos, após ter estabelecido vínculo.",
      "A mãe fez dieta restritiva quando Júlia tinha 10 anos e sempre comentou sobre o peso da filha — só revela se o candidato perguntar sobre o ambiente familiar e a relação da família com comida e peso."
    ],
    actorBehavior: "Adolescente resistente no início — responde com monossílabos e desconfiança. Após garantia de sigilo e abordagem empática, abre-se gradualmente. Tom defensivo quando falam em comer ou engordar. Demonstra orgulho pela dança e pelo desempenho escolar. Nega a gravidade da situação com convicção ('tô bem'). Mostra-se genuinamente assustada apenas quando o médico menciona o coração. Não demonstra suicidalidade."
  },

  instC: {
    diagnosis: "Anorexia Nervosa com comportamento purgativo (vômitos autoprovocados ocasionais). IMC 15,4 kg/m² (< p5 para 15 anos). Bradicardia (FC 52 bpm), hipotensão (PA 88/60 mmHg), hipotermia leve (Tax 36,0°C), lanugo, atraso puberal (Tanner III aos 15 anos), amenorreia há 6 meses, hipocalemia e hipofosfatemia. Critérios de internação presentes: FC < 50 bpm próximo do limiar, PA sistólica < 90 mmHg, hipocalemia.",
    differentials: [
      "Depressão maior com perda de peso — pode causar anorexia e emagrecimento; entretanto, a distorção da imagem corporal ('me acho gorda'), o comportamento restritivo intencional e o medo de ganhar peso são específicos para transtorno alimentar.",
      "Hipertireoidismo — pode causar emagrecimento, taquicardia e amenorreia; aqui há bradicardia, hipotensão e TSH normal — exclui essa hipótese.",
      "Doença celíaca — pode causar emagrecimento e anemia em adolescentes; entretanto, não explica a distorção da imagem corporal, a restrição alimentar intencional e o comportamento purgativo."
    ],
    context: "Adolescente de 15 anos com anorexia nervosa de padrão restritivo-purgativo, com complicações clínicas graves: bradicardia, hipotensão, hipotermia, atraso puberal, amenorreia secundária, lanugo, hipocalemia e hipofosfatemia. Avaliação de critérios de internação imediata obrigatória.",
    justify: "Critérios diagnósticos de Anorexia Nervosa (DSM-5/CID-11): (1) restrição da ingestão calórica resultando em peso significativamente baixo (IMC 15,4 < p5); (2) medo intenso de ganhar peso ('me acho gorda mesmo sendo magra'); (3) distorção da percepção corporal ('quando me olho no espelho vejo diferente'). Comportamento purgativo adicional (vômitos autoprovocados). Complicações clínicas: bradicardia, hipotensão, hipotermia leve, amenorreia secundária (6 meses), atraso puberal, hipocalemia (3,1 mEq/L) e hipofosfatemia — critérios de internação presentes.",
    expectedAnamnesis: [
      "HEEADSSS completo com ênfase em: Home — dinâmica familiar, comentários sobre peso/corpo em casa.",
      "Education: desempenho escolar, pressão por rendimento.",
      "Eating: frequência de refeições, restrições, tipos de alimentos evitados, comportamentos purgativos.",
      "Activities: dança, exercício físico compulsivo.",
      "Drugs: uso de laxantes, diuréticos, termogênicos.",
      "Sex: menstruação (data da última, regularidade), vida sexual.",
      "Suicide/depression: humor, ideação suicida, automutilação.",
      "Safety: violência doméstica, bullying sobre peso."
    ],
    expectedPhysical: [
      "Sinais vitais: FC, PA (hipotensão ortostática), Tax, peso, altura, cálculo de IMC.",
      "Inspeção: caquexia, lanugo, xerodermia, estado geral.",
      "Desenvolvimento puberal: estadiamento de Tanner (mamas, pelos pubianos).",
      "Cardiovascular: ausculta (bradicardia), perfusão capilar.",
      "Orofaringe: erosão do esmalte dentário (vômitos).",
      "Abdome: musculatura abdominal visível, timpânico.",
      "Manobra específica: teste de hipotensão ortostática (PA deitada vs. em pé — diferença > 20 mmHg sistólica indica desidratação/risco)."
    ],
    expectedExams: [
      { exam: "Eletrólitos (Na, K, Cl, Mg, P)", justify: "Avaliar distúrbios hidroeletrolíticos (hipocalemia por vômitos ou restrição)", expected: "K 3,1 (baixo); P 2,8 (baixo)" },
      { exam: "Hemograma", justify: "Avaliar anemia e leucopenia por desnutrição", expected: "Hb 10,5 (anemia leve)" },
      { exam: "Albumina", justify: "Avaliação nutricional proteica", expected: "3,0 (abaixo do normal)" },
      { exam: "TSH", justify: "Excluir hipertireoidismo como causa do emagrecimento", expected: "Normal (1,8)" },
      { exam: "ECG", justify: "Avaliar arritmias (bradicardia, prolongamento de QT)", expected: "Bradicardia sinusal" },
      { exam: "Densitometria óssea (longo prazo)", justify: "Avaliar osteopenia/osteoporose por amenorreia prolongada", expected: "A solicitar em seguimento" }
    ],
    expectedConduct: [
      "Farmacológica: Não há psicofármaco de primeira linha aprovado para anorexia nervosa; olanzapina pode ser usada em casos refratários por especialista; reposição de potássio (KCl VO ou EV conforme gravidade); suplementação nutricional (polivitamínico, vitamina D, cálcio).",
      "Não farmacológica: Encaminhamento para equipe multidisciplinar especializada em transtornos alimentares (psiquiatria, psicologia, nutrição, pediatria); psicoterapia (TCC — terapia cognitivo-comportamental); refeições assistidas.",
      "Critérios de internação presentes nesse caso: FC próxima de 50 bpm (limiar), PA sistólica < 90 mmHg, hipocalemia (K 3,1) — avaliar internação com avaliação cardiológica e endocrinológica.",
      "Encaminhamento: Serviço especializado em transtornos alimentares (CAPS ou ambulatório especializado); nutricionista; psicólogo/psiquiatra; ginecologia para investigação da amenorreia.",
      "Orientações ao paciente: Comunicar de forma empática e sem julgamentos que o corpo dela está dando sinais de que precisa de ajuda; que o coração e os ossos estão sendo afetados; que o tratamento não significa abandonar a dança, mas aprender a cuidar de si.",
      "Seguimento: Peso semanal; controle de eletrólitos; monitorização cardíaca; reavaliação dos critérios de internação."
    ],
    expectedCommunication: [
      "Apresentação: Apresentar-se pelo nome; garantir sigilo antes de qualquer pergunta sensível; sentar-se ao mesmo nível; tom calmo e sem julgamentos.",
      "Comunicação do diagnóstico: Explicar em linguagem acessível que o corpo dela está precisando de mais cuidado; que existem profissionais que podem ajudar; que o objetivo não é 'engordar', mas cuidar da saúde; respeitar a autonomia da adolescente.",
      "Escuta ativa: Não confrontar a distorção corporal diretamente no primeiro contato; validar as conquistas (dança, escola); usar o medo pelo coração como ponto de entrada para o tratamento."
    ],
    criticalErrors: [
      "Não garantir a confidencialidade antes de abordar temas sensíveis (alimentação, menstruação, comportamento purgativo).",
      "Não calcular o IMC ou não comparar com percentil para a idade.",
      "Não identificar a bradicardia (FC 52 bpm) como sinal de gravidade e critério potencial de internação.",
      "Chamar a mãe para a sala sem consentimento da adolescente para discutir informações confidenciais.",
      "Não pesquisar comportamentos purgativos (vômitos, laxantes) — parte essencial da anamnese em transtornos alimentares.",
      "Não avaliar o estadiamento de Tanner ou não identificar o atraso puberal relacionado à desnutrição."
    ]
  },

  instD: {
    title: "CHECKLIST — ANOREXIA NERVOSA EM ADOLESCENTE",
    sections: [
      {
        h: "BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
        items: [
          { item: "Apresentou-se pelo nome e garantiu a confidencialidade antes de iniciar perguntas sensíveis.", score: 1.0, ref: "ECA — Art. 17; MS — Saúde do Adolescente, 2020" },
          { item: "Usou linguagem não julgamental e empática ao abordar alimentação e autoimagem.", score: 0.5, ref: "MS — Política Nacional de Humanização, 2013" },
          { item: "Perguntou à adolescente se ela tinha alguma dúvida ou algo que gostaria de dizer ao final.", score: 0.3, ref: "SBP — Comunicação em Pediatria, 2022" }
        ]
      },
      {
        h: "BLOCO 2 — ANAMNESE",
        items: [
          { item: "Realizou anamnese com ao menos 4 domínios do HEEADSSS (Home, Eating, Activities, Depression).", score: 1.0, ref: "MS — Saúde do Adolescente, 2020" },
          { item: "Investigou alimentação: frequência, restrições, alimentos evitados e percepção corporal.", score: 0.5, ref: "SBP — Transtornos Alimentares, 2021" },
          { item: "Perguntou especificamente sobre comportamentos purgativos (vômitos autoprovocados, laxantes).", score: 0.5, ref: "SBP — Transtornos Alimentares, 2021" },
          { item: "Investigou menstruação: data da última menstruação e amenorreia.", score: 0.5, ref: "SBP — Ginecologia Pediátrica, 2021" },
          { item: "Avaliou humor, ideação suicida e automutilação (domínio Suicide/Safety do HEEADSSS).", score: 0.3, ref: "MS — Saúde do Adolescente, 2020" }
        ]
      },
      {
        h: "BLOCO 3 — EXAME FÍSICO",
        items: [
          { item: "Calculou o IMC e identificou magreza acentuada (IMC 15,4 < p5 para 15 anos).", score: 1.0, ref: "SBP — Avaliação Nutricional, 2022" },
          { item: "Identificou bradicardia (FC 52 bpm) e hipotensão (PA 88/60 mmHg) como sinais de gravidade.", score: 0.5, ref: "SBP — Transtornos Alimentares, 2021" },
          { item: "Avaliou o estadiamento de Tanner e identificou atraso puberal (Tanner III aos 15 anos).", score: 0.5, ref: "SBP — Endocrinologia Pediátrica, 2022" },
          { item: "Identificou lanugo em antebraços como sinal de desnutrição crônica.", score: 0.3, ref: "SBP — Transtornos Alimentares, 2021" }
        ]
      },
      {
        h: "BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO",
        items: [
          { item: "Formulou diagnóstico de anorexia nervosa com base nos critérios clínicos.", score: 1.0, ref: "SBP — Transtornos Alimentares, 2021; DSM-5" },
          { item: "Avaliou critérios de internação e identificou pelo menos um critério presente (bradicardia, hipotensão ou hipocalemia).", score: 0.5, ref: "SBP — Transtornos Alimentares, 2021" }
        ]
      },
      {
        h: "BLOCO 5 — CONDUTA E ORIENTAÇÃO AO PACIENTE",
        items: [
          { item: "Indicou encaminhamento para equipe multidisciplinar especializada em transtornos alimentares.", score: 0.5, ref: "SBP — Transtornos Alimentares, 2021" },
          { item: "Comunicou o diagnóstico à adolescente em linguagem acessível, respeitando sua autonomia.", score: 0.5, ref: "ECA — Art. 17; MS — Saúde do Adolescente, 2020" },
          { item: "Solicitou eletrólitos (K, P), hemograma, albumina e ECG para avaliação das complicações.", score: 0.6, ref: "SBP — Transtornos Alimentares, 2021" }
        ]
      }
    ]
  }
},

  {
  id: 1,
  title: 'Criança com diarreia e vômitos há 2 dias',
  sub: 'UPA — Urgência Pediátrica',
  tema: 'Pediatria Geral',
  topic: 'Diarreia Aguda — Rotavírus',
  level: 'moderado',
  cardAccent: '#FF7043',
  instA: {
    scenario: 'UPA Pediátrica. Consultório de urgência, turno diurno.',
    patient: 'Mãe de L.S., 1 ano e 4 meses, masculino, sem comorbidades conhecidas.',
    complaint: 'Criança com diarreia várias vezes ao dia e vômitos há 2 dias, está bebendo pouco.',
    tasks: [
      'Realize a anamnese dirigida ao caso (com a mãe)',
      'Realize o exame físico pertinente, com avaliação do grau de desidratação',
      'Formule a hipótese diagnóstica e os diferenciais',
      'Proponha a conduta terapêutica adequada',
      'Oriente a mãe sobre hidratação, sinais de alarme e seguimento'
    ]
  },
  instB: {
    vitals: {
      PA: 'Não aferida',
      FC: '132 bpm',
      FR: '30 irpm',
      Tax: '38,1°C',
      Peso: '9,8 kg (peso habitual: 10,2 kg)',
      Altura: '0,80 m',
      IMC: '15,3 kg/m²'
    },
    physicalGeneral: 'Regular estado geral, irritado, levemente prostrado, mucosas orais levemente ressecadas, olhos discretamente encovados, fontanela anterior normotensa, turgor de pele com retorno levemente lentificado (> 2 segundos). Choro com lágrimas presentes. Perfusão capilar: 2 segundos.',
    physicalSeg: 'ABDOME: Levemente distendido, ruídos hidroaéreos aumentados, sem dor à palpação, sem visceromegalias. | OROFARINGE: Mucosa oral seca, sem exsudato. | NEUROLÓGICO: Consciente, irritado, sem sinais meníngeos. | PELE: Turgor diminuído, sem exantema.',
    labs: [
      { test: 'Hemograma', val: 'Leucócitos 8.200/mm³, linfócitos 60%', ref: '—', alt: false },
      { test: 'Sódio', val: '138 mEq/L', ref: '135–145 mEq/L', alt: false },
      { test: 'Potássio', val: '3,2 mEq/L', ref: '3,5–5,0 mEq/L', alt: true },
      { test: 'Ureia', val: '28 mg/dL', ref: '10–40 mg/dL', alt: false },
      { test: 'Creatinina', val: '0,4 mg/dL', ref: '0,2–0,5 mg/dL', alt: false },
      { test: 'Glicemia', val: '88 mg/dL', ref: '70–110 mg/dL', alt: false }
    ],
    image: null,
    note: 'O ator é a mãe. A criança é representada por boneco ou descrita. Entregar sinais vitais ao início. Entregar exame físico quando solicitado. Exames laboratoriais somente se solicitados. Reforçar ao candidato o peso atual versus habitual (perda de 400g — 4% do peso corporal).',
    patientProfile: 'Mãe: Luciana S., 26 anos, auxiliar de limpeza. Paciente: Lucas S., 1 ano e 4 meses, masculino.',
    script: [
      { trigger: 'Queixa principal', speech: 'Doutor, meu filho tá com diarreia desde antes de ontem, já fez cocô umas 6 vezes hoje, e tá vomitando muito.' },
      { trigger: 'Sobre as fezes', speech: 'É uma diarreia aguada, amarelada, sem sangue. Tem um cheiro muito forte.' },
      { trigger: 'Sobre vômito', speech: 'Vomitou umas 4 vezes, tudo que dou ele joga fora.' },
      { trigger: 'Sobre febre', speech: 'Teve febre de 38 graus, dei dipirona.' },
      { trigger: 'Sobre hidratação', speech: 'Tô tentando dar água e soro, mas ele cospe tudo fora.' },
      { trigger: 'Sobre vacinação', speech: 'Vacina tá em dia. Tomou aquela vacina de rotavírus sim, quando era bebê.' },
      { trigger: 'Sobre contato', speech: 'Tem uma prima que ficou assim também na semana passada.' },
      { trigger: 'Sobre urina', speech: 'Fez xixi só uma vez hoje de manhã, tá fazendo menos que o normal.' },
      { trigger: 'Pergunta ativa 1', speech: 'Precisa internar, doutor? Tô muito preocupada.' },
      { trigger: 'Pergunta ativa 2', speech: 'O que ele pode comer agora? Para tudo?' }
    ],
    hiddenInfo: 'A criança frequenta creche — fator de risco para transmissão fecal-oral; só revela se perguntado sobre creche ou contato com outras crianças. | Mãe deu suco de fruta concentrado tentando hidratar — pode piorar a diarreia osmótica; só revela se perguntado sobre o que ofereceu para beber.',
    actorBehavior: 'Ansiosa, cansada, com olheiras. Colaborativa. Fica aliviada com orientações claras. Demonstra dúvida sobre precisar internar — cabe ao candidato explicar o grau de desidratação e a conduta.'
  },
  instC: {
    diagnosis: 'Gastroenterite aguda viral — provável rotavírus — com desidratação leve a moderada (plano B de hidratação).',
    differentials: [
      'Gastroenterite bacteriana (Salmonella, Campylobacter) — fezes sanguinolentas, febre alta, leucocitose com desvio; aqui fezes aquosas sem sangue e leucograma com predomínio linfocitário.',
      'Síndrome hemolítica urêmica — após diarreia sanguinolenta por E. coli O157:H7; aqui sem sangue nas fezes, sem anemia hemolítica ou plaquetopenia.',
      'Intolerância transitória à lactose pós-gastroenterite — pode ocorrer como complicação, mas não é o diagnóstico primário.'
    ],
    context: 'Lactente com gastroenterite aguda viral típica de rotavírus: diarreia aquosa, vômitos, febre baixa, contexto epidemiológico (creche, contato com caso semelhante), leucograma com predomínio linfocitário. Desidratação leve a moderada (perda de 4% do peso, mucosas ressecadas, olhos encovados, turgor lentificado, diurese reduzida).',
    justify: 'Critérios de desidratação leve a moderada (Plano B): dois ou mais sinais entre — irritabilidade, olhos encovados, sinal da prega lentificado, bebe com avidez. Contexto viral (linfocitose, febre baixa, diarreia aquosa sem sangue) e epidemiológico corroboram rotavírus. A vacinação reduz formas graves mas não elimina a infecção.',
    expectedAnamnesis: 'Número de episódios de diarreia e vômito nas últimas 24h | Características das fezes (consistência, cor, sangue, muco) | Presença de febre (temperatura) | Volume e tipo de líquidos oferecidos | Diurese (frequência, volume — avaliar hidratação) | Peso habitual vs. atual (calcular % de perda) | Contatos com quadro semelhante / frequência em creche | Vacinação para rotavírus | Histórico de diarreia prévia, comorbidades',
    expectedPhysical: 'Sinais vitais: FC, Tax, peso | Avaliação do grau de desidratação: mucosas, olhos, fontanela, turgor, perfusão, choro com lágrimas, diurese — classificar conforme MS/SBP (sem desidratação / leve-moderada / grave) | Abdome: distensão, RHA, dor | Estado neurológico: nível de consciência, irritabilidade',
    expectedExams: [
      { exam: 'Ionograma e glicemia', justify: 'Avaliar distúrbios hidroeletrolíticos', expected: 'Hipocalemia leve' },
      { exam: 'Hemograma', justify: 'Avaliar padrão viral vs. bacteriano', expected: 'Linfocitose' },
      { exam: 'Pesquisa de rotavírus em fezes', justify: 'Confirmar etiologia — em contexto de surto ou internação', expected: 'Positivo' }
    ],
    expectedConduct: 'Farmacológica: Plano B de hidratação oral: SRO (soro de reidratação oral) 50–100 mL/kg em 4h, oferecer 5 mL a cada 1–2 minutos. Zinco 10 mg/dia VO por 10–14 dias (< 6 meses: 10 mg; ≥ 6 meses: 20 mg). Antipirético se febre. Não usar antidiarreicos, antieméticos ou antibióticos. (MS/SBP, Caderno de Diarreia 2023) | Não farmacológica: Manter aleitamento materno se em curso; oferecer dieta normal após reidratação; não suspender alimentação; higiene das mãos. | Encaminhamento: Internação se: desidratação grave, falha do Plano B, vômitos incoercíveis, recusa total de líquidos, alteração neurológica. | Orientações: Explicar que é viral, autolimitado; orientar sinais de alarme (prostração intensa, sem urina > 6h, sangue nas fezes, piora do estado geral). | Seguimento: Reavaliação após 4h de TRO; retorno imediato se sinais de alarme.',
    expectedCommunication: 'Apresentação: Apresentar-se à mãe, perguntar o nome da criança. | Comunicação do diagnóstico: "Seu filho tem uma diarreia viral, provavelmente rotavírus. Não é grave, mas ele está um pouco desidratado. Vamos hidratar com soro de reidratação oral aqui, e eu te ensino a continuar em casa." | Escuta ativa: Validar o cansaço e preocupação da mãe; orientar de forma clara e empática.',
    criticalErrors: [
      'Não avaliar grau de desidratação (não pesar a criança, não verificar sinais clínicos)',
      'Prescrever antibiótico para diarreia viral sem indicação',
      'Suspender a alimentação após reidratação (jejum desnecessário)',
      'Não orientar uso de SRO ou indicar soro caseiro incorretamente',
      'Não mencionar zinco como parte do tratamento (recomendação MS/OMS)',
      'Não reconhecer sinais de desidratação leve-moderada e dispensar sem hidratação supervisionada'
    ]
  },
  instD: {
    title: 'CHECKLIST — CRIANÇA COM DIARREIA E VÔMITOS HÁ 2 DIAS',
    sections: [
      {
        h: 'COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE',
        items: [
          { item: 'Apresentou-se à mãe e perguntou o nome da criança', score: 0.5, ref: 'CFM 2.217/2018' },
          { item: 'Utilizou linguagem acessível ao orientar hidratação e conduta', score: 0.5, ref: 'PNHAH/MS, 2001' },
          { item: 'Respondeu à preocupação da mãe sobre internação com clareza', score: 0.5, ref: 'PNHAH/MS, 2001' }
        ]
      },
      {
        h: 'ANAMNESE',
        items: [
          { item: 'Investigou número de episódios de diarreia e características das fezes (cor, sangue, muco)', score: 0.5, ref: 'MS/SBP, Diarreia 2023' },
          { item: 'Avaliou volume de diurese nas últimas horas (sinal de desidratação)', score: 1.0, ref: 'MS/SBP, 2023' },
          { item: 'Questionou vacinação para rotavírus e contatos com quadro semelhante', score: 0.5, ref: 'PNI/MS, 2023' },
          { item: 'Perguntou sobre o que foi oferecido para beber (tipo de líquido)', score: 0.5, ref: 'MS/SBP, 2023' }
        ]
      },
      {
        h: 'EXAME FÍSICO',
        items: [
          { item: 'Pesou a criança e comparou com peso habitual', score: 0.5, ref: 'MS/SBP, 2023' },
          { item: 'Avaliou grau de desidratação: mucosas, olhos, turgor, fontanela, perfusão, choro', score: 1.5, ref: 'MS/SBP, 2023' }
        ]
      },
      {
        h: 'RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
        items: [
          { item: 'Classificou desidratação corretamente (leve a moderada — Plano B)', score: 1.0, ref: 'MS/SBP, 2023' },
          { item: 'Formulou hipótese de gastroenterite viral (rotavírus) com justificativa', score: 0.5, ref: 'MS/SBP, 2023' }
        ]
      },
      {
        h: 'CONDUTA E ORIENTAÇÃO AO PACIENTE',
        items: [
          { item: 'Indicou Plano B de hidratação oral com SRO (50–100 mL/kg em 4h)', score: 1.5, ref: 'MS/SBP, 2023' },
          { item: 'Prescreveu zinco oral (20 mg/dia por 10–14 dias)', score: 0.5, ref: 'OMS/MS, 2023' },
          { item: 'Orientou manter alimentação após reidratação (não fazer jejum)', score: 0.5, ref: 'MS/SBP, 2023' },
          { item: 'Orientou sinais de alarme e retorno imediato', score: 0.5, ref: 'MS/SBP, 2023' }
        ]
      }
    ]
  }
},

  {
  id: 2,
  title: 'Criança com diarreia com sangue, parou de urinar e ficou pálida',
  sub: 'UPA — Urgência Pediátrica',
  tema: 'Pediatria Geral',
  topic: 'Síndrome Hemolítica Urêmica',
  level: 'moderado',
  cardAccent: '#D32F2F',
  instA: {
    scenario: 'UPA Pediátrica. Triagem e consultório de urgência, turno vespertino.',
    patient: 'Mãe de M.O., 3 anos, feminina, sem comorbidades.',
    complaint: 'Criança com diarreia com sangue há 5 dias, ficou pálida, inchada e parou de fazer xixi há 1 dia.',
    tasks: [
      'Realize a anamnese dirigida ao caso (com a mãe)',
      'Realize o exame físico pertinente',
      'Formule a hipótese diagnóstica e os diferenciais',
      'Solicite os exames complementares adequados',
      'Proponha a conduta imediata e oriente a mãe sobre a gravidade'
    ]
  },
  instB: {
    vitals: {
      PA: '118/78 mmHg (limítrofe para a idade)',
      FC: '136 bpm',
      FR: '32 irpm',
      Tax: '37,2°C',
      Peso: '14 kg',
      Altura: '0,96 m',
      IMC: '15,2 kg/m²'
    },
    physicalGeneral: 'Regular estado geral, prostrada, pálida (++/4+), ictérica leve (+/4+), edema de face e membros inferiores (+/4+), oligúrica (sem diurese há ~18h relatada pela mãe). Consciente, irritada.',
    physicalSeg: 'ABDOME: Distendido, levemente doloroso à palpação difusa, sem peritonismo. Ruídos hidroaéreos diminuídos. | PELE: Palidez cutânea intensa. Petéquias esparsas em membros inferiores. | NEUROLÓGICO: Consciente, irritada, sem déficit focal. Sem sinais meníngeos. | CARDIOVASCULAR: Taquicardia. Sem sopros.',
    labs: [
      { test: 'Hemoglobina', val: '7,2 g/dL', ref: '11,0–14,0 g/dL', alt: true },
      { test: 'Hematócrito', val: '22%', ref: '33–42%', alt: true },
      { test: 'Plaquetas', val: '48.000/mm³', ref: '150.000–400.000/mm³', alt: true },
      { test: 'Leucócitos', val: '14.200/mm³', ref: '6.000–17.000/mm³', alt: false },
      { test: 'Ureia', val: '98 mg/dL', ref: '10–40 mg/dL', alt: true },
      { test: 'Creatinina', val: '2,8 mg/dL', ref: '0,3–0,7 mg/dL', alt: true },
      { test: 'LDH', val: '1.240 U/L', ref: '< 300 U/L', alt: true },
      { test: 'Bilirrubina indireta', val: '3,8 mg/dL', ref: '< 0,8 mg/dL', alt: true },
      { test: 'Esfregaço sangue periférico', val: 'Esquizócitos presentes', ref: 'Ausentes', alt: true }
    ],
    image: null,
    note: 'O ator é a mãe. Entregar sinais vitais ao início. Entregar exame físico ao exame. Entregar hemograma, função renal, LDH, bilirrubina e esfregaço somente se solicitados. Este é um caso de urgência — internação imediata é a conduta esperada. Reforçar ao candidato a tríade: anemia hemolítica + plaquetopenia + IRA.',
    patientProfile: 'Mãe: Mariana O., 29 anos, vendedora. Paciente: Maria O., 3 anos, feminina.',
    script: [
      { trigger: 'Queixa principal', speech: 'Doutor, minha filha começou com diarreia com sangue há 5 dias, aí foi ficando pálida e inchada, e hoje não fez xixi nenhuma vez.' },
      { trigger: 'Sobre a diarreia', speech: 'A diarreia era com bastante sangue, uma dorzão na barriga. Agora a diarreia melhorou mas ela piorou.' },
      { trigger: 'Sobre o inchaço', speech: 'Inchou o rosto e as perninhas hoje. Nunca tinha ficado assim.' },
      { trigger: 'Sobre a palidez', speech: 'Ela ficou branquinha de repente, os lábios dela estão quase roxos.' },
      { trigger: 'Sobre alimentação recente', speech: 'Uns 7 dias atrás comemos num churrasco, ela comeu hambúrguer mal passado.' },
      { trigger: 'Sobre antibiótico', speech: 'Fui ao médico lá no posto, ele receitou antibiótico pra diarreia, tomou 2 dias.' },
      { trigger: 'Sobre febre', speech: 'Tinha febre no início, agora não tem mais.' },
      { trigger: 'Pergunta ativa 1', speech: 'O que ela tem, doutor? É grave? Vai precisar de diálise?' },
      { trigger: 'Pergunta ativa 2', speech: 'Por que ela piorou se a diarreia passou?' }
    ],
    hiddenInfo: 'Consumiu hambúrguer mal passado em churrasco 7 dias antes — exposição a E. coli O157:H7; só revela se perguntado sobre alimentação recente ou evento anterior. | Médico anterior prescreveu antibiótico para a diarreia — uso de antibiótico na diarreia por STEC aumenta risco de SHU; só revela se perguntado sobre tratamentos anteriores.',
    actorBehavior: 'Muito ansiosa, chorosa, assustada com a piora da filha. Colaborativa. Fica em pânico ao ouvir "diálise". Cabe ao candidato ser claro sobre a gravidade sem ser alarmista, e acolher a mãe.'
  },
  instC: {
    diagnosis: 'Síndrome hemolítica urêmica (SHU) típica — associada a E. coli produtora de toxina Shiga (STEC O157:H7) — com tríade: anemia hemolítica microangiopática + plaquetopenia + insuficiência renal aguda oligúrica.',
    differentials: [
      'Púrpura trombocitopênica trombótica (PTT) — tríade + neurológico + febre; mais em adultos; aqui sem déficit neurológico e contexto pós-diarreia sanguinolenta típico de SHU.',
      'Sepse com CIVD — pancitopenia, choque; aqui sem choque e com contexto pós-diarreia por STEC.',
      'Nefrite pós-infecciosa — hematúria + edema + hipertensão pós-estreptocócico; sem anemia hemolítica nem plaquetopenia.'
    ],
    context: 'Criança de 3 anos com SHU típica pós-diarreia sanguinolenta por E. coli O157:H7 (provável exposição em hambúrguer mal passado), apresentando a tríade clássica: anemia hemolítica microangiopática (Hb 7,2, esquizócitos), plaquetopenia (48.000) e IRA oligúrica (Cr 2,8). O uso de antibiótico na fase diarreica é fator agravante reconhecido.',
    justify: 'Tríade de SHU presente: (1) anemia hemolítica microangiopática — Hb baixa, esquizócitos, LDH elevada, bilirrubina indireta elevada; (2) trombocitopenia < 150.000; (3) IRA — creatinina 2,8 mg/dL, oligúria/anúria. Contexto epidemiológico (carne mal passada, diarreia sanguinolenta) e uso de antibiótico (fator de risco para liberação de toxina Shiga) completam o raciocínio.',
    expectedAnamnesis: 'Início e evolução da diarreia (sanguinolenta, dor abdominal) | Palidez, icterícia, edema (surgimento após melhora da diarreia — padrão típico de SHU) | Diurese (volume, frequência — oligúria/anúria) | Alimentação recente (carne mal passada, fontes de E. coli) | Tratamentos realizados (antibiótico — fator de risco) | Contatos com quadro semelhante | Histórico de comorbidades renais ou hematológicas',
    expectedPhysical: 'Sinais vitais: FC, FR, PA (hipertensão pode ocorrer na IRA) | Palidez, icterícia, edema (face, MMII) | Petéquias (plaquetopenia) | Abdome: distensão, dor | Neurológico: consciência, irritabilidade, déficits focais | Avaliação de diurese',
    expectedExams: [
      { exam: 'Hemograma completo + esfregaço', justify: 'Anemia hemolítica + esquizócitos + plaquetopenia', expected: 'Confirmados' },
      { exam: 'Ureia e creatinina', justify: 'IRA', expected: 'Elevados' },
      { exam: 'LDH e bilirrubina indireta', justify: 'Hemólise', expected: 'Elevados' },
      { exam: 'Urinálise', justify: 'Hematúria, proteinúria', expected: 'Positivos' },
      { exam: 'Coprocultura para E. coli O157:H7', justify: 'Identificar agente', expected: 'Positivo' }
    ],
    expectedConduct: 'Farmacológica: Suporte intensivo: hidratação EV cuidadosa (monitorar balanço hídrico e oligúria); transfusão de hemácias se Hb < 7 g/dL e sintomático; NÃO transfundir plaquetas (exceto sangramento ativo grave). NÃO usar antibiótico (aumenta liberação de toxina Shiga). Anti-hipertensivos se hipertensão. (SBP 2022) | Não farmacológica: Monitorização da diurese; balanço hídrico rigoroso; dieta hipoproteica se IRA. | Encaminhamento: Internação em UTI pediátrica imediata; nefrologista pediátrico para avaliar diálise se anúria persistente. | Orientações: Explicar à mãe que é uma complicação grave da diarreia bacteriana; que o tratamento é de suporte; que muitas crianças se recuperam completamente. | Seguimento: UTI; monitorização renal a longo prazo (sequela em ~25% dos casos).',
    expectedCommunication: 'Apresentação: Apresentar-se, acolher a angústia da mãe. | Comunicação do diagnóstico: "Sua filha tem uma complicação grave da diarreia com sangue que afetou os rins e o sangue dela. Precisa internar agora na UTI para tratamento intensivo." | Escuta ativa: Responder sobre diálise com clareza e esperança realista.',
    criticalErrors: [
      'Prescrever antibiótico (contraindica na SHU por STEC — aumenta risco de piora)',
      'Não reconhecer a tríade de SHU (anemia + plaquetopenia + IRA)',
      'Dispensar a criança sem internação',
      'Transfundir plaquetas sem indicação (sangramento ativo)',
      'Não solicitar avaliação nefrológica e não indicar UTI pediátrica',
      'Não identificar exposição alimentar como fator etiológico'
    ]
  },
  instD: {
    title: 'CHECKLIST — CRIANÇA COM DIARREIA COM SANGUE, PALIDEZ E OLIGÚRIA',
    sections: [
      {
        h: 'COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE',
        items: [
          { item: 'Apresentou-se e acolheu a mãe com empatia', score: 0.5, ref: 'CFM 2.217/2018' },
          { item: 'Comunicou a gravidade de forma clara sem ser alarmista', score: 0.5, ref: 'PNHAH/MS, 2001' },
          { item: 'Explicou o diagnóstico e a necessidade de internação em UTI em linguagem acessível', score: 0.5, ref: 'PNHAH/MS, 2001' }
        ]
      },
      {
        h: 'ANAMNESE',
        items: [
          { item: 'Identificou diarreia sanguinolenta como evento inicial e investigou evolução bifásica (melhora da diarreia + piora sistêmica)', score: 1.0, ref: 'SBP, 2022' },
          { item: 'Investigou diurese (oligúria/anúria) nas últimas horas', score: 1.0, ref: 'SBP, 2022' },
          { item: 'Perguntou sobre alimentação recente (carne mal passada — E. coli O157:H7)', score: 0.5, ref: 'SBP, 2022' },
          { item: 'Questionou uso de antibiótico prévio para a diarreia', score: 0.5, ref: 'SBP, 2022' }
        ]
      },
      {
        h: 'EXAME FÍSICO',
        items: [
          { item: 'Avaliou palidez, icterícia e edema (tríade clínica de SHU)', score: 1.0, ref: 'SBP, 2022' },
          { item: 'Aferiu PA e avaliou sinais de hipertensão associada à IRA', score: 0.5, ref: 'SBP, 2022' },
          { item: 'Realizou exame neurológico sumário (afastar PTT ou encefalopatia)', score: 0.5, ref: 'SBP, 2022' }
        ]
      },
      {
        h: 'RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
        items: [
          { item: 'Formulou hipótese de SHU e identificou tríade clínica', score: 1.0, ref: 'SBP, 2022' },
          { item: 'Solicitou hemograma com esfregaço, função renal, LDH e bilirrubina', score: 0.5, ref: 'SBP, 2022' }
        ]
      },
      {
        h: 'CONDUTA E ORIENTAÇÃO AO PACIENTE',
        items: [
          { item: 'Indicou internação imediata em UTI pediátrica', score: 1.0, ref: 'SBP, 2022' },
          { item: 'Contraindicou antibiótico explicitamente na SHU por STEC', score: 0.5, ref: 'SBP, 2022' },
          { item: 'Contraindicou transfusão de plaquetas sem indicação (sem sangramento ativo)', score: 0.5, ref: 'SBP, 2022' }
        ]
      }
    ]
  }
},

  {
  id: 3,
  title: 'Criança com diarreia que não passa há 3 semanas',
  sub: 'UBS — Atenção Primária',
  tema: 'Pediatria Geral',
  topic: 'Diarreia Persistente',
  level: 'moderado',
  cardAccent: '#FF7043',
  instA: {
    scenario: 'Atenção Primária — UBS. Consultório, turno matutino.',
    patient: 'Mãe de K.S., 1 ano e 1 mês, feminina, previamente saudável.',
    complaint: 'Bebê com diarreia que não passa há 3 semanas, perdeu peso e está irritada.',
    tasks: [
      'Realize a anamnese dirigida ao caso',
      'Realize o exame físico pertinente',
      'Formule a hipótese diagnóstica e os diferenciais',
      'Solicite os exames complementares adequados',
      'Proponha a conduta e oriente a mãe sobre seguimento'
    ]
  },
  instB: {
    vitals: {
      PA: 'Não aferida',
      FC: '122 bpm',
      FR: '28 irpm',
      Tax: '37,0°C',
      Peso: '7,8 kg (peso há 1 mês: 8,4 kg)',
      Altura: '0,74 m',
      IMC: '14,2 kg/m²'
    },
    physicalGeneral: 'Regular estado geral, irritada, emagrecida, pálida (+/4+), hidratada. Abdome levemente distendido. Fralda com fezes líquidas de odor ácido.',
    physicalSeg: 'ABDOME: Distendido, ruídos hidroaéreos aumentados, sem dor evidente à palpação, sem visceromegalias. | PELE: Dermatite perianal (eritema perianal intenso). | ESTADO NUTRICIONAL: Emagrecimento visível (perda de 7% do peso em 1 mês), panículo adiposo reduzido. | MUCOSAS: Hidratadas, sem sinais de desidratação atual.',
    labs: [
      { test: 'Hemograma', val: 'Hb 10,2 g/dL, leucócitos 9.400/mm³', ref: 'Hb > 11 g/dL', alt: true },
      { test: 'pH fecal', val: '5,0', ref: '> 6,0', alt: true },
      { test: 'Substâncias redutoras nas fezes', val: 'Positivo (++)', ref: 'Negativo', alt: true },
      { test: 'Copro parasitológico', val: 'Negativo', ref: '—', alt: false },
      { test: 'Proteína C reativa', val: '8 mg/L', ref: '< 5 mg/L', alt: true }
    ],
    image: null,
    note: 'Ator é a mãe. Entregar sinais vitais e peso atual e anterior ao início. Entregar exame físico ao exame. Entregar exames somente se solicitados. Destacar a perda de peso significativa como sinal de alerta nutricional.',
    patientProfile: 'Mãe: Kelly S., 22 anos, estudante. Paciente: Kauane S., 1 ano e 1 mês, feminina.',
    script: [
      { trigger: 'Queixa principal', speech: 'Doutor, minha filha tá com diarreia há 3 semanas, não passa. Ela emagreceu muito e tá muito irritada.' },
      { trigger: 'Sobre início', speech: 'Começou depois de uma diarreia com febre, tratou, mas a diarreia nunca parou direito.' },
      { trigger: 'Sobre as fezes', speech: 'É líquida, com cheiro azedo, às vezes espumosa. Não tem sangue.' },
      { trigger: 'Sobre alimentação', speech: 'Ela toma leite de caixinha (fórmula infantil) desde os 6 meses, não mama mais.' },
      { trigger: 'Sobre introdução alimentar', speech: 'Introduzi fruta e papa aos 6 meses. Ela come de tudo, mas quando come às vezes piora.' },
      { trigger: 'Sobre ganho de peso', speech: 'Ela pesava 8,4 kg mês passado, agora pesou 7,8 kg. Tá perdendo peso.' },
      { trigger: 'Sobre tratamentos', speech: 'O médico deu antibiótico e probiótico, mas não resolveu.' },
      { trigger: 'Pergunta ativa 1', speech: 'Por que ela não melhora, doutor? Tem algo mais sério?' },
      { trigger: 'Pergunta ativa 2', speech: 'Preciso parar o leite? Mudar a alimentação?' }
    ],
    hiddenInfo: 'A fórmula infantil foi trocada para leite de vaca integral (leite de caixinha comum) há 2 meses — possível intolerância à lactose pós-enteral ou APLV; só revela se perguntado especificamente sobre o tipo de leite oferecido. | Episódio de gastroenterite aguda há 4 semanas que iniciou o quadro — só revela com detalhes se perguntado sobre evento desencadeante.',
    actorBehavior: 'Cansada, preocupada com o emagrecimento da filha. Levemente culpada por não ter voltado ao médico antes. Colaborativa. Fica atenta às orientações sobre alimentação.'
  },
  instC: {
    diagnosis: 'Diarreia persistente (> 14 dias) com intolerância secundária à lactose pós-gastroenterite, associada a desnutrição aguda leve e anemia.',
    differentials: [
      'Alergia à proteína do leite de vaca (APLV) — diarreia persistente, eritema perianal, irritabilidade; pode coexistir; diferenciação por dieta de exclusão e reintrodução.',
      'Giardíase — diarreia persistente, esteatorreia, emagrecimento; copro negativo aqui, mas pode ser falso-negativo — repetir.',
      'Doença celíaca — diarreia crônica, distensão abdominal, emagrecimento; mais comum após introdução de glúten; aqui possível, mas a evolução pós-gastroenterite e pH fecal ácido com substâncias redutoras sugerem intolerância à lactose como principal.'
    ],
    context: 'Lactente com diarreia persistente (> 14 dias) após gastroenterite aguda, com fezes ácidas e substâncias redutoras positivas, sugerindo intolerância secundária à lactose. Emagrecimento significativo (7% em 1 mês) e anemia indicam impacto nutricional. Uso de leite de vaca integral (rico em lactose) como fonte principal é fator agravante.',
    justify: 'Fezes ácidas (pH 5,0) + substâncias redutoras positivas = má absorção de carboidratos (lactose) nas fezes. Contexto pós-gastroenterite (lesão vilositária transitória → déficit de lactase). Emagrecimento + irritabilidade + eritema perianal completam o quadro clínico de diarreia osmótica por intolerância secundária à lactose.',
    expectedAnamnesis: 'Duração da diarreia (> 14 dias = persistente) | Evento desencadeante (gastroenterite aguda prévia) | Características das fezes (aquosas, ácidas, espumosas, sem sangue) | Tipo de leite oferecido (leite de vaca integral x fórmula) | Peso atual e anterior (avaliação nutricional) | Tratamentos realizados | Introdução alimentar (glúten, proteínas) | Histórico de atopia familiar (APLV)',
    expectedPhysical: 'Peso e estado nutricional (curvas de crescimento) | Hidratação | Abdome: distensão, RHA | Dermatite perianal (eritema por fezes ácidas) | Palidez (anemia)',
    expectedExams: [
      { exam: 'pH fecal e substâncias redutoras', justify: 'Confirmar intolerância à lactose', expected: 'pH ácido, SR positivo' },
      { exam: 'Copro parasitológico (3 amostras)', justify: 'Afastar Giardia', expected: 'Negativo' },
      { exam: 'Hemograma', justify: 'Avaliar anemia', expected: 'Anemia leve' },
      { exam: 'Proteínas totais e albumina', justify: 'Avaliação nutricional', expected: 'Pode estar reduzida' }
    ],
    expectedConduct: 'Farmacológica: Substituição da fórmula/leite de vaca por fórmula sem lactose ou fórmula extensamente hidrolisada por 4–6 semanas. Zinco 10–20 mg/dia. Suplementação de ferro se anemia confirmada. (SBP 2022 / MS 2023) | Não farmacológica: Manter alimentos sólidos sem lactose; rehidratação oral se necessário; curva de peso e comprimento seriada. | Encaminhamento: Gastroenterologia pediátrica se sem melhora em 2 semanas com fórmula sem lactose (afastar APLV, doença celíaca, giardíase). | Orientações: Explicar que é uma consequência da infecção intestinal; que o intestino precisa de tempo para se recuperar; que a troca do leite é temporária. | Seguimento: Retorno em 2 semanas para avaliação do ganho de peso e melhora da diarreia.',
    expectedCommunication: 'Apresentação: Apresentar-se, acolher a mãe. | Comunicação do diagnóstico: "Depois da diarreia, o intestino da sua filha ficou com dificuldade de digerir o leite. Precisamos trocar o leite por um tempo para ela melhorar e ganhar peso de volta." | Escuta ativa: Acolher a culpa materna sem reforçá-la; esclarecer sobre o leite de vaca integral.',
    criticalErrors: [
      'Não avaliar o peso e o estado nutricional da criança',
      'Não identificar diarreia persistente (> 14 dias) como entidade distinta',
      'Prescrever antibiótico sem indicação (copro negativo)',
      'Não orientar sobre troca do leite',
      'Não encaminhar para gastroenterologia pediátrica se sem melhora'
    ]
  },
  instD: {
    title: 'CHECKLIST — CRIANÇA COM DIARREIA QUE NÃO PASSA HÁ 3 SEMANAS',
    sections: [
      {
        h: 'COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE',
        items: [
          { item: 'Apresentou-se e acolheu a mãe sem julgamento', score: 0.5, ref: 'CFM 2.217/2018' },
          { item: 'Explicou o diagnóstico e a conduta em linguagem acessível', score: 0.5, ref: 'PNHAH/MS, 2001' }
        ]
      },
      {
        h: 'ANAMNESE',
        items: [
          { item: 'Identificou duração > 14 dias (diarreia persistente) e evento desencadeante', score: 1.0, ref: 'SBP/MS, 2023' },
          { item: 'Investigou tipo de leite e alimentação oferecida', score: 1.0, ref: 'SBP, 2022' },
          { item: 'Questionou peso atual e anterior (avaliação de emagrecimento)', score: 0.5, ref: 'SBP, 2022' },
          { item: 'Perguntou sobre tratamentos anteriores', score: 0.5, ref: 'SBP, 2022' }
        ]
      },
      {
        h: 'EXAME FÍSICO',
        items: [
          { item: 'Avaliou estado nutricional e pesou a criança (curva de crescimento)', score: 1.0, ref: 'SBP, 2022' },
          { item: 'Identificou dermatite perianal (fezes ácidas) e distensão abdominal', score: 0.5, ref: 'SBP, 2022' }
        ]
      },
      {
        h: 'RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
        items: [
          { item: 'Formulou hipótese de intolerância secundária à lactose pós-gastroenterite', score: 1.0, ref: 'SBP, 2022' },
          { item: 'Solicitou pH fecal e substâncias redutoras nas fezes', score: 0.5, ref: 'SBP, 2022' },
          { item: 'Solicitou copro parasitológico para afastar giardíase', score: 0.5, ref: 'SBP, 2022' }
        ]
      },
      {
        h: 'CONDUTA E ORIENTAÇÃO AO PACIENTE',
        items: [
          { item: 'Indicou fórmula sem lactose ou extensamente hidrolisada', score: 1.0, ref: 'SBP 2022 / RENAME 2022' },
          { item: 'Prescreveu zinco e avaliou necessidade de ferro', score: 0.5, ref: 'OMS/MS, 2023' },
          { item: 'Orientou retorno em 2 semanas e encaminhamento se sem melhora', score: 0.5, ref: 'SBP, 2022' }
        ]
      }
    ]
  }
},

  {
  id: 4,
  title: 'Criança com diarreia com sangue e muco há 2 meses',
  sub: 'Ambulatório de Pediatria',
  tema: 'Pediatria Geral',
  topic: 'Diarreia Crônica Sanguinolenta — DII (Doença de Crohn)',
  level: 'moderado',
  cardAccent: '#E53935',
  instA: {
    scenario: 'Ambulatório de Pediatria. Consultório, turno matutino.',
    patient: 'Mãe de P.A., 10 anos, masculino, sem diagnóstico prévio.',
    complaint: 'Criança com diarreia com sangue e muco há 2 meses, dor abdominal, perdeu peso e está cansada.',
    tasks: [
      'Realize a anamnese dirigida ao caso',
      'Realize o exame físico pertinente',
      'Formule a hipótese diagnóstica e os diferenciais',
      'Solicite os exames complementares adequados',
      'Proponha conduta inicial e encaminhamento'
    ]
  },
  instB: {
    vitals: {
      PA: '100/66 mmHg',
      FC: '98 bpm',
      FR: '20 irpm',
      Tax: '37,6°C',
      Peso: '28 kg (peso há 2 meses: 31 kg)',
      Altura: '1,38 m',
      IMC: '14,7 kg/m²'
    },
    physicalGeneral: 'Regular estado geral, emagrecido, pálido (++/4+), subfebril, cansado. Sem icterícia. Sem edema.',
    physicalSeg: 'ABDOME: Dor à palpação em fossa ilíaca direita e flanco direito, sem sinal de peritonismo. Sem massas palpáveis. Ruídos hidroaéreos normais. | REGIÃO PERIANAL: Fissura anal e duas pregas cutâneas redundantes perianais visíveis. | PELE: Eritema nodoso em face anterior de pernas bilateralmente (2 nódulos). | ARTICULAÇÕES: Artralgia em joelhos (referida pelo paciente). | MUCOSA ORAL: Aftas orais (2 pequenas lesões em mucosa jugal).',
    labs: [
      { test: 'Hemograma', val: 'Hb 9,8 g/dL, leucócitos 13.400/mm³, plaquetas 520.000/mm³', ref: 'Hb > 11,5 g/dL', alt: true },
      { test: 'VHS', val: '68 mm/h', ref: '< 20 mm/h', alt: true },
      { test: 'PCR', val: '42 mg/L', ref: '< 5 mg/L', alt: true },
      { test: 'Albumina', val: '2,8 g/dL', ref: '3,5–5,0 g/dL', alt: true },
      { test: 'Calprotectina fecal', val: '480 µg/g', ref: '< 50 µg/g', alt: true },
      { test: 'Copro parasitológico', val: 'Negativo', ref: '—', alt: false }
    ],
    image: null,
    note: 'Ator é a mãe (e a criança pode responder se o candidato se dirigir a ela). Entregar sinais vitais e peso ao início. Entregar exame físico ao exame. Exames laboratoriais somente se solicitados. Reforçar manifestações extraintestinais (aftas, eritema nodoso, artralgia, fissura perianal) como pistas para DII.',
    patientProfile: 'Mãe: Patrícia A., 38 anos, professora. Paciente: Pedro A., 10 anos, masculino.',
    script: [
      { trigger: 'Queixa principal', speech: 'Doutor, meu filho tá com diarreia com sangue e uma dorzão na barriga há 2 meses. Ele perdeu 3 quilos e tá muito cansado.' },
      { trigger: 'Sobre a diarreia', speech: 'É com sangue e aquela gosma. Às vezes 5 a 6 vezes por dia, inclusive à noite.' },
      { trigger: 'Sobre dor', speech: 'Dói muito antes de ir ao banheiro, na barriga do lado direito.' },
      { trigger: 'Sobre apetite', speech: 'Ele come menos, diz que tem medo de comer porque depois dói e precisa ir ao banheiro.' },
      { trigger: 'Sobre febre', speech: 'Teve umas febrezinhas baixas, 37,5, mas não sempre.' },
      { trigger: 'Sobre boca e pele', speech: 'Apareceram umas bolhinhas na boca que doem, e uns caroços vermelhos nas pernas.' },
      { trigger: 'Sobre articulações', speech: 'Tá com dor nos joelhos, achei que era de crescimento.' },
      { trigger: 'Histórico familiar', speech: "O tio dele tem 'doença inflamatória intestinal', não sei o nome certo." },
      { trigger: 'Pergunta ativa 1', speech: 'O que ele pode ter, doutor? É câncer?' },
      { trigger: 'Pergunta ativa 2', speech: 'Tem cura?' }
    ],
    hiddenInfo: 'Diarreia noturna (acorda para evacuar à noite) — sinal importante de doença orgânica vs. funcional; só revela se perguntado sobre se acorda para ir ao banheiro. | Histórico familiar de doença de Crohn no tio paterno — só revela com detalhes se perguntado sobre histórico familiar de doenças intestinais.',
    actorBehavior: 'Mãe ansiosa, com medo de câncer. A criança está envergonhada com o problema intestinal. Colaborativos. Cabe ao candidato incluir a criança na consulta, dirigindo-se a ela diretamente.'
  },
  instC: {
    diagnosis: 'Doença de Crohn — início na infância — com manifestações intestinais (diarreia sanguinolenta, dor em FID, fissura perianal) e extraintestinais (aftas orais, eritema nodoso, artralgia), emagrecimento e anemia inflamatória.',
    differentials: [
      'Retocolite ulcerativa (RCU) — diarreia sanguinolenta, mas com predomínio retal, sem envolvimento perianal significativo nem fissuras; sem manifestações de intestino delgado.',
      'Tuberculose intestinal — dor em FID, emagrecimento; raro em crianças sem epidemiologia; pesquisa de BAAR nas fezes e PPD distinguem.',
      'Diarreia infecciosa crônica (Yersinia enterocolitica) — dor em FID simulando Crohn; copro e sorologias específicas distinguem.'
    ],
    context: 'Criança de 10 anos com quadro de 2 meses de diarreia sanguinolenta, dor em FID, emagrecimento, anemia e hipoalbuminemia, além de manifestações extraintestinais clássicas (aftas, eritema nodoso, artralgia, fissura perianal) e histórico familiar de DII. Calprotectina fecal elevada confirma inflamação intestinal ativa.',
    justify: 'Combinação de: diarreia sanguinolenta crônica + dor em FID + fissura perianal (lesão perianal típica de Crohn) + manifestações extraintestinais (aftas, eritema nodoso, artralgia) + marcadores inflamatórios elevados + calprotectina fecal > 200 µg/g + histórico familiar = forte suspeita de Doença de Crohn pediátrica. Diagnóstico definitivo por endoscopia com biópsia.',
    expectedAnamnesis: 'Duração, frequência e características das fezes (sangue, muco, noturna) | Dor abdominal (localização, relação com evacuação) | Perda de peso e apetite | Manifestações extraintestinais (aftas, artralgia, lesões de pele) | Febre intermitente | Histórico familiar de DII | Tratamentos anteriores | Desenvolvimento puberal (DII pode retardar)',
    expectedPhysical: 'Estado nutricional: peso, altura, IMC (curvas de crescimento) | Abdome: dor em FID, massas | Região perianal: fissuras, fístulas, abscessos (típicos de Crohn) | Pele: eritema nodoso, pioderma gangrenoso | Mucosa oral: aftas | Articulações: artrite periférica',
    expectedExams: [
      { exam: 'Hemograma + VHS + PCR + albumina', justify: 'Avaliação inflamatória e nutricional', expected: 'Anemia, inflamação, hipoalbuminemia' },
      { exam: 'Calprotectina fecal', justify: 'Marcador de inflamação intestinal — triagem', expected: 'Muito elevada' },
      { exam: 'Copro parasitológico (3 amostras)', justify: 'Afastar infecção', expected: 'Negativo' },
      { exam: 'Endoscopia digestiva alta e baixa com biópsia', justify: 'Diagnóstico definitivo — encaminhar', expected: 'Lesões transmurais, granulomas' }
    ],
    expectedConduct: 'Farmacológica: Tratamento inicial: corticoide oral (prednisona 1 mg/kg/dia) até avaliação pelo gastroenterologista. Suplementação nutricional. (ESPGHAN 2023 ⚠️ / SBP 2022) | Não farmacológica: Suporte nutricional (dieta enteral pode ser 1ª linha em crianças com Crohn — ESPGHAN ⚠️); avaliar crescimento e desenvolvimento puberal. | Encaminhamento: Gastroenterologia pediátrica urgente para endoscopia e biópsia; nutricionista pediátrica. | Orientações: Explicar que não é câncer; que é uma doença inflamatória do intestino tratável; que precisa de investigação detalhada. | Seguimento: Gastroenterologista pediátrico + equipe multidisciplinar.',
    expectedCommunication: 'Apresentação: Apresentar-se à mãe e diretamente à criança. | Comunicação do diagnóstico: "Pedro, e dona Patrícia: o que está acontecendo parece ser uma doença chamada Crohn, que é uma inflamação no intestino. Não é câncer. É uma doença crônica, mas tem tratamento." | Escuta ativa: Dirigir-se diretamente à criança para incluí-la no processo; acolher o medo da mãe.',
    criticalErrors: [
      'Não examinar a região perianal (fissura é sinal patognomônico de Crohn)',
      'Não reconhecer manifestações extraintestinais como pistas diagnósticas',
      'Tratar empiricamente com antibiótico sem encaminhar para investigação endoscópica',
      'Não incluir a criança na consulta (falar apenas com a mãe)',
      'Não solicitar calprotectina fecal como triagem de inflamação intestinal',
      'Não encaminhar obrigatoriamente ao gastroenterologista pediátrico'
    ]
  },
  instD: {
    title: 'CHECKLIST — CRIANÇA COM DIARREIA COM SANGUE E MUCO HÁ 2 MESES',
    sections: [
      {
        h: 'COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE',
        items: [
          { item: 'Apresentou-se e dirigiu-se diretamente à criança além da mãe', score: 0.5, ref: 'CFM 2.217/2018' },
          { item: 'Afastou diagnóstico de câncer com clareza e empatia', score: 0.5, ref: 'PNHAH/MS, 2001' },
          { item: 'Explicou a necessidade de encaminhamento e próximos passos', score: 0.5, ref: 'PNHAH/MS, 2001' }
        ]
      },
      {
        h: 'ANAMNESE',
        items: [
          { item: 'Investigou características da diarreia (sangue, muco, frequência, diarreia noturna)', score: 1.0, ref: 'SBP / ESPGHAN, 2023' },
          { item: 'Identificou manifestações extraintestinais (aftas, artralgia, lesões de pele)', score: 1.0, ref: 'SBP / ESPGHAN, 2023' },
          { item: 'Questionou histórico familiar de DII', score: 0.5, ref: 'SBP, 2022' },
          { item: 'Avaliou perda de peso e impacto no crescimento', score: 0.5, ref: 'SBP, 2022' }
        ]
      },
      {
        h: 'EXAME FÍSICO',
        items: [
          { item: 'Avaliou estado nutricional (peso, altura, curva de crescimento)', score: 0.5, ref: 'SBP, 2022' },
          { item: 'Examinou região perianal (fissura anal — sinal de Crohn)', score: 1.0, ref: 'SBP / ESPGHAN, 2023' },
          { item: 'Avaliou pele e mucosa oral (eritema nodoso, aftas)', score: 0.5, ref: 'SBP, 2022' }
        ]
      },
      {
        h: 'RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
        items: [
          { item: 'Formulou hipótese de Doença de Crohn com justificativa', score: 1.0, ref: 'SBP / ESPGHAN, 2023' },
          { item: 'Solicitou calprotectina fecal e marcadores inflamatórios', score: 0.5, ref: 'ESPGHAN, 2023 ⚠️' }
        ]
      },
      {
        h: 'CONDUTA E ORIENTAÇÃO AO PACIENTE',
        items: [
          { item: 'Encaminhou ao gastroenterologista pediátrico para endoscopia', score: 1.0, ref: 'SBP / ESPGHAN, 2023' },
          { item: 'Indicou suporte nutricional e avaliação com nutricionista', score: 0.5, ref: 'SBP, 2022' }
        ]
      }
    ]
  }
},

  {
  id: 5,
  title: 'Criança com dor abdominal e fezes moles que pioram com estresse há 4 meses',
  sub: 'Ambulatório de Pediatria',
  tema: 'Pediatria Geral',
  topic: 'Síndrome do Intestino Irritável — Pediátrica',
  level: 'moderado',
  cardAccent: '#FF7043',
  instA: {
    scenario: 'Ambulatório de Pediatria. Consultório, turno vespertino.',
    patient: 'Mãe de V.C., 12 anos, feminina, sem comorbidades, em período de provas escolares.',
    complaint: 'Dor de barriga frequente, fezes moles e gases há 4 meses, piora antes de provas na escola.',
    tasks: [
      'Realize a anamnese dirigida ao caso (com a paciente e a mãe)',
      'Realize o exame físico pertinente',
      'Formule a hipótese diagnóstica e os diferenciais',
      'Solicite os exames complementares necessários para afastar causas orgânicas',
      'Proponha a conduta e oriente a paciente e a família'
    ]
  },
  instB: {
    vitals: {
      PA: '100/64 mmHg',
      FC: '80 bpm',
      FR: '16 irpm',
      Tax: '36,5°C',
      Peso: '42 kg',
      Altura: '1,52 m',
      IMC: '18,2 kg/m²'
    },
    physicalGeneral: 'Bom estado geral, corada, hidratada, afebril, sem emagrecimento. Levemente ansiosa durante a consulta.',
    physicalSeg: 'ABDOME: Dor leve à palpação em fossa ilíaca esquerda e região periumbilical. Sem dor em FID. Sem massas. Sem hepatoesplenomegalia. Ruídos hidroaéreos normais. | REGIÃO PERIANAL: Normal, sem fissuras ou lesões. | ESTADO NUTRICIONAL: Preservado, curva de crescimento normal.',
    labs: [
      { test: 'Hemograma', val: 'Normal', ref: '—', alt: false },
      { test: 'VHS', val: '8 mm/h', ref: '< 20 mm/h', alt: false },
      { test: 'PCR', val: '2 mg/L', ref: '< 5 mg/L', alt: false },
      { test: 'Calprotectina fecal', val: '28 µg/g', ref: '< 50 µg/g', alt: false },
      { test: 'Copro parasitológico', val: 'Negativo', ref: '—', alt: false },
      { test: 'Anti-tTG IgA', val: 'Negativo', ref: '—', alt: false }
    ],
    image: null,
    note: 'Ator pode ser a mãe ou a própria adolescente (12 anos). Entregar sinais vitais ao início. Entregar exame físico ao exame. Exames somente se solicitados. Todos os resultados são normais — isso é fundamental para o diagnóstico de SII (critérios de Roma IV: ausência de alarmes + critérios funcionais).',
    patientProfile: 'Paciente: Valentina C., 12 anos, feminina, estudante do 7º ano. Mãe: Cláudia C., 40 anos.',
    script: [
      { trigger: 'Queixa principal', speech: 'Doutora, tenho muita dor de barriga e fico com diarreia, às vezes fico horas no banheiro antes da escola.' },
      { trigger: 'Sobre padrão da dor', speech: 'A dor melhora quando eu consigo ir ao banheiro. Às vezes fico com prisão de ventre, aí na outra semana diarreia.' },
      { trigger: 'Sobre relação com estresse', speech: 'Piora muito quando tem prova ou apresentação. Minha mãe diz que é nervosismo.' },
      { trigger: 'Sobre febre e sangue', speech: 'Febre não tenho. Sangue nas fezes também não.' },
      { trigger: 'Sobre sono', speech: 'Não acordo de madrugada pra ir ao banheiro, isso não acontece.' },
      { trigger: 'Sobre peso', speech: 'Não perdi peso, até engordei um pouco esse semestre.' },
      { trigger: 'Sobre impacto escolar', speech: 'Já faltei aula por causa da barriga. Fico envergonhada de sair da sala pra ir ao banheiro.' },
      { trigger: 'Sobre alimentação', speech: 'Quando como muito carboidrato ou lactose parece que piora.' },
      { trigger: 'Pergunta ativa 1', speech: 'É doença mesmo, doutora? Minha mãe acha que é frescura.' },
      { trigger: 'Pergunta ativa 2', speech: 'Tem cura? Vou ter isso para sempre?' }
    ],
    hiddenInfo: 'Está passando por bullying na escola — contexto psicossocial que explica o componente de estresse; só revela se perguntada diretamente sobre como está se sentindo na escola ou se tem algo preocupando. | Mãe tem síndrome do intestino irritável diagnosticada — histórico familiar; só revela se perguntado sobre doenças intestinais na família.',
    actorBehavior: 'A adolescente está um pouco envergonhada. Fica aliviada quando o médico valida seus sintomas. A mãe tende a minimizar ("é nervosismo"). Cabe ao candidato incluir a adolescente como protagonista da consulta.'
  },
  instC: {
    diagnosis: 'Síndrome do intestino irritável (SII) pediátrica — subtipo misto (alternância diarreia/constipação) — critérios de Roma IV, com gatilho psicossocial identificado (estresse escolar, bullying).',
    differentials: [
      'Doença inflamatória intestinal — diarreia crônica + sangue + marcadores inflamatórios elevados; aqui ausência de alarmes e exames normais afastam.',
      'Doença celíaca — diarreia + distensão abdominal + emagrecimento; anti-tTG negativo afasta.',
      'Intolerância à lactose — piora com laticínios, fezes líquidas; pode coexistir mas não explica o padrão funcional completo.'
    ],
    context: 'Adolescente com SII mista pelos critérios de Roma IV: dor abdominal recorrente associada a alteração do hábito intestinal, melhora com defecação, sem sinais de alarme (sem sangue, sem febre, sem emagrecimento, sem diarreia noturna, marcadores inflamatórios normais). Componente psicossocial significativo (estresse por provas, bullying).',
    justify: 'Critérios de Roma IV para SII pediátrica: dor abdominal recorrente ≥ 1x/semana nos últimos 3 meses, associada a ≥ 2 critérios: (1) relacionada à defecação, (2) associada a mudança na frequência das fezes, (3) associada a mudança na consistência das fezes. Ausência de sinais de alarme e exames complementares normais confirmam diagnóstico funcional.',
    expectedAnamnesis: 'Frequência, localização e características da dor | Relação da dor com defecação (melhora ou piora) | Padrão do hábito intestinal (alternância diarreia/constipação) | Sinais de alarme: diarreia noturna, sangue, emagrecimento, febre, história familiar de DII/câncer | Fatores desencadeantes (estresse, alimentos) | Impacto na qualidade de vida e escolar | Contexto psicossocial (bullying, ansiedade) | Histórico familiar (SII é hereditária)',
    expectedPhysical: 'Estado nutricional (peso, curva de crescimento) | Abdome: dor à palpação (geralmente leve, difusa ou em FIE) | Ausência de massas, organomegalias, sinais de alarme ao exame | Região perianal: normal (afastar Crohn)',
    expectedExams: [
      { exam: 'Hemograma + VHS + PCR', justify: 'Afastar processo inflamatório', expected: 'Normais' },
      { exam: 'Calprotectina fecal', justify: 'Afastar DII ativa', expected: '< 50 µg/g (normal)' },
      { exam: 'Anti-tTG IgA', justify: 'Afastar doença celíaca', expected: 'Negativo' },
      { exam: 'Copro parasitológico', justify: 'Afastar infecção', expected: 'Negativo' }
    ],
    expectedConduct: 'Farmacológica: Antiespasmódico se dor intensa (hioscina ou mebeverina). Laxativo osmótico (macrogol/polietilenoglicol) se constipação predominante. Probióticos podem auxiliar. (ESPGHAN 2022 ⚠️ / SBP) | Não farmacológica: Terapia cognitivo-comportamental (TCC) — evidência mais forte para SII pediátrica; orientação de higiene intestinal; dieta pobre em FODMAPs se sintomas alimentares evidentes. | Encaminhamento: Psicologia/psiquiatria infantil para TCC; gastroenterologia se dúvida diagnóstica ou refratariedade. | Orientações: Validar os sintomas da adolescente como reais e não "frescura"; explicar a SII como desordem da interação cérebro-intestino; empoderar a paciente no manejo. | Seguimento: Retorno em 4–6 semanas para reavaliação; acompanhamento psicológico.',
    expectedCommunication: 'Apresentação: Apresentar-se diretamente à adolescente, não apenas à mãe. | Comunicação do diagnóstico: "Valentina, o que você tem é real. Se chama síndrome do intestino irritável — o intestino de algumas pessoas é mais sensível a estresse. Não é frescura." | Escuta ativa: Validar os sintomas perante a mãe; incluir a adolescente como protagonista; perguntar como está na escola (contexto de bullying).',
    criticalErrors: [
      'Não solicitar exames para afastar causas orgânicas antes de diagnosticar SII',
      'Validar para a mãe que "é frescura" ou minimizar os sintomas',
      'Não incluir a adolescente como protagonista da consulta (falar apenas com a mãe)',
      'Não identificar o componente psicossocial (estresse/bullying)',
      'Não encaminhar para avaliação psicológica/TCC'
    ]
  },
  instD: {
    title: 'CHECKLIST — DOR ABDOMINAL E FEZES MOLES QUE PIORAM COM ESTRESSE',
    sections: [
      {
        h: 'COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE',
        items: [
          { item: 'Apresentou-se e dirigiu-se diretamente à adolescente como protagonista', score: 0.5, ref: 'CFM 2.217/2018' },
          { item: 'Validou os sintomas como reais perante a mãe e a paciente', score: 1.0, ref: 'PNHAH/MS, 2001' },
          { item: 'Perguntou como a paciente está se sentindo na escola (contexto psicossocial)', score: 0.5, ref: 'SBP, 2022' }
        ]
      },
      {
        h: 'ANAMNESE',
        items: [
          { item: 'Identificou critérios de Roma IV (dor + alteração hábito + melhora com evacuação)', score: 1.0, ref: 'Roma IV / SBP, 2022' },
          { item: 'Investigou sinais de alarme (diarreia noturna, sangue, febre, emagrecimento)', score: 1.0, ref: 'SBP / NASPGHAN, 2022' },
          { item: 'Questionou fatores desencadeantes (estresse, alimentação)', score: 0.5, ref: 'SBP, 2022' }
        ]
      },
      {
        h: 'EXAME FÍSICO',
        items: [
          { item: 'Avaliou estado nutricional e curva de crescimento', score: 0.5, ref: 'SBP, 2022' },
          { item: 'Examinou abdome (sem sinais de alarme ao exame) e região perianal', score: 0.5, ref: 'SBP, 2022' }
        ]
      },
      {
        h: 'RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
        items: [
          { item: 'Formulou hipótese de SII pelos critérios de Roma IV', score: 1.0, ref: 'Roma IV / SBP, 2022' },
          { item: 'Solicitou exames para afastar causas orgânicas (calprotectina, anti-tTG, PCR)', score: 0.5, ref: 'SBP / NASPGHAN, 2022' }
        ]
      },
      {
        h: 'CONDUTA E ORIENTAÇÃO AO PACIENTE',
        items: [
          { item: 'Indicou encaminhamento para TCC/psicologia', score: 1.0, ref: 'ESPGHAN 2022 ⚠️ / SBP' },
          { item: 'Orientou sobre dieta e higiene intestinal', score: 0.5, ref: 'SBP, 2022' },
          { item: 'Orientou retorno e seguimento', score: 0.5, ref: 'SBP, 2022' }
        ]
      }
    ]
  }
},

  {
  id: 6,
  title: 'Criança franzina com barriga distendida, fezes gordurosas e atraso no crescimento',
  sub: 'UBS — Atenção Primária',
  tema: 'Pediatria Geral',
  topic: 'Doença Celíaca',
  level: 'moderado',
  cardAccent: '#7B1FA2',
  instA: {
    scenario: 'Atenção Primária — UBS. Consultório, turno matutino.',
    patient: 'Mãe de E.R., 4 anos, feminina, sem diagnóstico prévio.',
    complaint: 'Criança com barriga inchada, fezes gordurosas que boiam, crescendo pouco há 1 ano.',
    tasks: [
      'Realize a anamnese dirigida ao caso',
      'Realize o exame físico pertinente',
      'Formule a hipótese diagnóstica e os diferenciais',
      'Solicite os exames complementares adequados',
      'Proponha a conduta e oriente a família'
    ]
  },
  instB: {
    vitals: {
      PA: 'Não aferida',
      FC: '92 bpm',
      FR: '22 irpm',
      Tax: '36,6°C',
      Peso: '13,2 kg (percentil < 3)',
      Altura: '96 cm (percentil < 3)',
      IMC: '14,3 kg/m²'
    },
    physicalGeneral: 'Regular estado geral, emagrecida, pálida (+/4+), cabelos opacos e quebradiços, abdome protuberante. Hipotonia muscular leve em membros.',
    physicalSeg: 'ABDOME: Distendido ("barriga de sapo"), ruídos hidroaéreos aumentados, sem dor significativa à palpação, sem massas, sem visceromegalias. | ESTADO NUTRICIONAL: Déficit estaturo-ponderal (peso e altura < p3), panículo adiposo muito reduzido, hipotrofia muscular em glúteos e coxas. | PELE: Dermatite herpetiforme (vesículas pruriginosas) em cotovelos e joelhos. | CABELOS: Opacos, com alopecia discreta.',
    labs: [
      { test: 'Hemograma', val: 'Hb 9,4 g/dL, VCM 68 fL (microcítica)', ref: 'Hb > 11 g/dL, VCM > 75 fL', alt: true },
      { test: 'Ferritina', val: '6 µg/L', ref: '15–200 µg/L', alt: true },
      { test: 'Anti-tTG IgA', val: '142 U/mL (positivo forte)', ref: '< 7 U/mL', alt: true },
      { test: 'IgA total', val: '48 mg/dL (normal para idade)', ref: '30–200 mg/dL', alt: false },
      { test: 'Albumina', val: '3,0 g/dL', ref: '3,5–5,0 g/dL', alt: true }
    ],
    image: null,
    note: 'Ator é a mãe. Entregar peso e altura com plotagem nas curvas ao início (ou informar verbalmente os percentis). Entregar exame físico ao exame. Exames somente se solicitados. O anti-tTG fortemente positivo (> 10x o limite) permite diagnóstico sem biópsia em contexto pediátrico (ESPGHAN 2020 ⚠️).',
    patientProfile: 'Mãe: Elaine R., 32 anos, cozinheira. Paciente: Eduarda R., 4 anos, feminina.',
    script: [
      { trigger: 'Queixa principal', speech: 'Doutor, minha filha não cresce, tá muito magrinha e a barriga dela é sempre inchada assim. As fezes boiam e têm cheiro horrível.' },
      { trigger: 'Sobre início', speech: 'Foi piorando aos poucos desde que ela tinha uns 2 anos, quando comecei a dar mais massinha e pão.' },
      { trigger: 'Sobre as fezes', speech: 'São pastosas, gordurosas, às vezes boiam. Faz 2 a 3 vezes por dia.' },
      { trigger: 'Sobre apetite', speech: 'Ela come bem, às vezes até bem, mas não engorda.' },
      { trigger: 'Sobre pele', speech: 'Ela tem umas bolhinhas que coçam muito nos cotovelos e joelhos, fica se coçando toda.' },
      { trigger: 'Sobre crescimento', speech: 'Ela é a menor da turma dela na creche. Toda família acha ela muito pequenininha pra idade.' },
      { trigger: 'Sobre anemia', speech: 'O médico do posto disse que ela tá anemiada, deu ferro, mas não melhorou muito.' },
      { trigger: 'Histórico familiar', speech: 'Uma tia dela tem intolerância ao glúten, não come pão nem massa.' },
      { trigger: 'Pergunta ativa 1', speech: 'O que ela tem, doutor? Por que o ferro não resolveu?' },
      { trigger: 'Pergunta ativa 2', speech: 'Ela vai poder comer normalmente um dia?' }
    ],
    hiddenInfo: 'Os sintomas pioraram progressivamente após introdução de glúten (pão, macarrão, biscoito) por volta dos 2 anos — só revela com detalhes se perguntado sobre quando iniciou alimentação com trigo/glúten. | Tia materna com diagnóstico de doença celíaca — só revela se perguntado sobre doenças intestinais ou autoimunes na família.',
    actorBehavior: 'Mãe preocupada, cansada de ir ao médico sem diagnóstico. Fica aliviada ao receber uma hipótese consistente. Preocupada com a dieta sem glúten ("como vou fazer isso?"). Colaborativa.'
  },
  instC: {
    diagnosis: 'Doença celíaca — forma clássica em criança de 4 anos — com síndrome de má absorção (diarreia gordurosa, distensão, emagrecimento, déficit estaturo-ponderal), anemia ferropriva refratária, dermatite herpetiforme e anti-tTG IgA fortemente positivo.',
    differentials: [
      'Fibrose cística — esteatorreia, déficit estaturo-ponderal, tosse crônica; teste do suor distingue; teste do pezinho teria identificado ao nascimento.',
      'Giardíase crônica — má absorção, diarreia; copro parasitológico positivo; aqui negativo.',
      'Alergia à proteína do leite de vaca — diarreia, emagrecimento; mas não causa dermatite herpetiforme e anti-tTG é negativo.'
    ],
    context: 'Criança de 4 anos com forma clássica de doença celíaca: síndrome de má absorção com diarreia gordurosa, distensão abdominal, déficit estaturo-ponderal grave, anemia ferropriva refratária ao ferro, dermatite herpetiforme e anti-tTG IgA > 10x o limite superior — permite diagnóstico sem biópsia (protocolo ESPGHAN 2020).',
    justify: 'Anti-tTG IgA > 10x o valor normal (142 U/mL, normal < 7) + IgA total normal (afasta deficiência de IgA como causa de falso-negativo) + quadro clínico típico = diagnóstico de doença celíaca pelo protocolo ESPGHAN 2020 sem necessidade de biópsia em crianças. Dermatite herpetiforme é manifestação extraintestinal patognomônica.',
    expectedAnamnesis: 'Início dos sintomas em relação à introdução de alimentos com glúten | Características das fezes (gordurosas, boiam, fétidas — esteatorreia) | Crescimento: peso e altura (curvas) | Apetite (preservado apesar do emagrecimento = má absorção) | Manifestações extraintestinais (dermatite herpetiforme, aftas, artralgia) | Anemia e resposta ao ferro | Histórico familiar de doença celíaca ou doenças autoimunes | Outras doenças autoimunes (tireoidite, DM1)',
    expectedPhysical: 'Estado nutricional: peso, altura < p3 (curvas de crescimento) | Abdome protuberante, distendido | Hipotrofia muscular em glúteos | Dermatite herpetiforme em cotovelos/joelhos (vesículas pruriginosas) | Palidez (anemia) | Cabelos e pele (sinais de deficiência de micronutrientes)',
    expectedExams: [
      { exam: 'Anti-tTG IgA', justify: 'Triagem sorológica de 1ª linha para celíaca', expected: '> 10x o limite (positivo forte)' },
      { exam: 'IgA total', justify: 'Afastar deficiência de IgA (falso-negativo)', expected: 'Normal' },
      { exam: 'Hemograma + ferritina', justify: 'Avaliar anemia ferropriva', expected: 'Anemia microcítica, ferropriva' },
      { exam: 'Endoscopia + biópsia de duodeno', justify: 'Confirmar diagnóstico se anti-tTG < 10x', expected: 'Atrofia vilositária (Marsh III)' }
    ],
    expectedConduct: 'Farmacológica: Suplementação de ferro e ácido fólico para correção das deficiências. Vitaminas lipossolúveis se deficiência. (SBP 2022) | Não farmacológica: Dieta isenta de glúten (trigo, cevada, centeio) — tratamento definitivo e único. Orientar sobre contaminação cruzada. Encaminhar para nutricionista especializada em doença celíaca. | Encaminhamento: Gastroenterologia pediátrica (para confirmação e acompanhamento); nutricionista; grupo de apoio à doença celíaca (ACELBRA). | Orientações: Explicar que é uma doença autoimune, não alergia; que a dieta sem glúten é para toda a vida; que há melhora significativa com a dieta; que outros familiares devem ser rastreados. | Seguimento: Anti-tTG para monitorar adesão à dieta; crescimento e desenvolvimento.',
    expectedCommunication: 'Apresentação: Apresentar-se, acolher a mãe que busca diagnóstico há tempo. | Comunicação do diagnóstico: "Acho que encontramos o motivo de sua filha não crescer. Ela tem doença celíaca — o intestino dela reage ao glúten, que está no pão, macarrão e biscoito. Com a dieta correta, ela vai crescer e melhorar muito." | Escuta ativa: Acolher a preocupação com a dieta sem glúten; reforçar que há muitas alternativas.',
    criticalErrors: [
      'Não solicitar anti-tTG IgA como triagem principal',
      'Não avaliar IgA total (risco de falso-negativo do anti-tTG)',
      'Orientar dieta sem glúten antes de confirmar o diagnóstico (altera sorologia e biópsia)',
      'Não avaliar curvas de crescimento (déficit estaturo-ponderal é o achado central)',
      'Não encaminhar ao gastroenterologista pediátrico para confirmação e acompanhamento'
    ]
  },
  instD: {
    title: 'CHECKLIST — CRIANÇA FRANZINA COM BARRIGA DISTENDIDA E FEZES GORDUROSAS',
    sections: [
      {
        h: 'COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE',
        items: [
          { item: 'Apresentou-se e acolheu a mãe que busca diagnóstico há tempo', score: 0.5, ref: 'CFM 2.217/2018' },
          { item: 'Explicou o diagnóstico e a dieta sem glúten em linguagem acessível', score: 0.5, ref: 'PNHAH/MS, 2001' },
          { item: 'Abordou a preocupação da mãe com a dieta sem julgamento e com soluções práticas', score: 0.5, ref: 'PNHAH/MS, 2001' }
        ]
      },
      {
        h: 'ANAMNESE',
        items: [
          { item: 'Relacionou início dos sintomas com introdução de glúten na alimentação', score: 1.0, ref: 'SBP / ESPGHAN, 2020' },
          { item: 'Investigou características das fezes (esteatorreia — gordurosas, boiam, fétidas)', score: 0.5, ref: 'SBP, 2022' },
          { item: 'Questionou histórico familiar de doença celíaca ou autoimunidade', score: 0.5, ref: 'SBP, 2022' },
          { item: 'Avaliou resposta prévia ao ferro (anemia refratária como sinal de alerta)', score: 0.5, ref: 'SBP, 2022' }
        ]
      },
      {
        h: 'EXAME FÍSICO',
        items: [
          { item: 'Avaliou peso e altura em curvas de crescimento (déficit estaturo-ponderal)', score: 1.0, ref: 'SBP, 2022' },
          { item: 'Identificou distensão abdominal e hipotrofia muscular', score: 0.5, ref: 'SBP, 2022' },
          { item: 'Reconheceu dermatite herpetiforme como manifestação extraintestinal', score: 0.5, ref: 'SBP / ESPGHAN, 2020' }
        ]
      },
      {
        h: 'RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
        items: [
          { item: 'Formulou hipótese de doença celíaca e solicitou anti-tTG IgA + IgA total', score: 1.0, ref: 'SBP / ESPGHAN, 2020' },
          { item: 'Reconheceu que anti-tTG > 10x dispensa biópsia em crianças (ESPGHAN 2020) ⚠️', score: 0.5, ref: 'ESPGHAN, 2020 ⚠️' }
        ]
      },
      {
        h: 'CONDUTA E ORIENTAÇÃO AO PACIENTE',
        items: [
          { item: 'Indicou dieta isenta de glúten como tratamento definitivo', score: 1.0, ref: 'SBP / ESPGHAN, 2020' },
          { item: 'Encaminhou ao gastroenterologista e nutricionista', score: 0.5, ref: 'SBP, 2022' },
          { item: 'Orientou rastreamento familiar', score: 0.5, ref: 'SBP / ESPGHAN, 2020' }
        ]
      }
    ]
  }
},

  {
  id: 7,
  title: 'Bebê com tosse frequente, fezes gordurosas e não ganhando peso',
  sub: 'UBS — Atenção Primária',
  tema: 'Pediatria Geral',
  topic: 'Fibrose Cística',
  level: 'moderado',
  cardAccent: '#00695C',
  instA: {
    scenario: 'Atenção Primária — UBS. Consultório, turno matutino.',
    patient: 'Mãe de N.F., 8 meses, masculino, teste do pezinho realizado mas resultado não foi buscado.',
    complaint: 'Bebê com tosse persistente desde o nascimento, fezes volumosas e gordurosas, não ganha peso adequadamente.',
    tasks: [
      'Realize a anamnese dirigida ao caso',
      'Realize o exame físico pertinente',
      'Formule a hipótese diagnóstica e os diferenciais',
      'Solicite os exames complementares adequados',
      'Proponha a conduta e encaminhamento'
    ]
  },
  instB: {
    vitals: {
      PA: 'Não aferida',
      FC: '118 bpm',
      FR: '36 irpm',
      Tax: '36,8°C',
      Peso: '5,9 kg (percentil < 3)',
      Altura: '68 cm (percentil 25)',
      IMC: '12,8 kg/m²'
    },
    physicalGeneral: 'Regular estado geral, emagrecido, panículo adiposo muito reduzido. Eupneico em repouso. Discreta cianose periorbitária. Ausência de baqueteamento digital (ausente ainda na idade). Suor com sabor salgado referido pela mãe.',
    physicalSeg: 'TÓRAX/PULMÃO: Tórax em tonel discreto. Ausculta com crepitações finas em bases bilateralmente e sibilos expiratórios dispersos. | ABDOME: Levemente distendido. Fígado palpável a 3 cm do RCD (hepatomegalia leve). Fezes volumosas e gordurosas na fralda. | ESTADO NUTRICIONAL: Desnutrição grave (peso < p3 com altura no p25) — desproporção característica.',
    labs: [
      { test: 'Hemograma', val: 'Leucócitos 14.200/mm³, neutrófilos 68%', ref: '—', alt: true },
      { test: 'Teste do suor (cloreto)', val: '72 mEq/L', ref: '< 30 mEq/L normal; > 60 mEq/L diagnóstico', alt: true },
      { test: 'Triagem neonatal (pezinho — IRT)', val: '96 ng/mL (coletado ao nascimento — não buscado)', ref: '< 70 ng/mL', alt: true },
      { test: 'Elastase fecal', val: '58 µg/g fezes', ref: '> 200 µg/g normal', alt: true }
    ],
    image: 'Radiografia de tórax (se solicitada): Hiperinsuflação pulmonar bilateral, espessamento peribrônquico, atelectasias subsegmentares em bases.',
    note: 'Ator é a mãe. Entregar peso e curva ao início. Entregar exame físico ao exame. Exames somente se solicitados. Destacar que o teste do pezinho foi coletado mas não buscado pela família — ponto pedagógico importante.',
    patientProfile: 'Mãe: Natália F., 24 anos, dona de casa. Paciente: Nícolas F., 8 meses, masculino.',
    script: [
      { trigger: 'Queixa principal', speech: 'Doutor, meu filho tosse desde que nasceu, quase não para. E ele não engorda, apesar de mamar bastante.' },
      { trigger: 'Sobre a tosse', speech: 'É uma tosse com catarro, às vezes fica com chiado no peito. Ficou internado uma vez por pneumonia com 5 meses.' },
      { trigger: 'Sobre as fezes', speech: 'As fezes dele são enormes e gordurosas, têm um cheiro muito forte. Às vezes boiam.' },
      { trigger: 'Sobre o suor', speech: 'Quando beijo ele, parece que tem gosto de sal. Isso é normal?' },
      { trigger: 'Sobre pezinho', speech: 'O pezinho foi feito no hospital, mas a gente não foi buscar o resultado. Ninguém avisou que era urgente.' },
      { trigger: 'Sobre o crescimento', speech: 'Ele mama muito, come papinha, mas não engorda. Fico desesperada.' },
      { trigger: 'Sobre internações', speech: 'Ficou internado uma vez com pneumonia, ficou 10 dias.' },
      { trigger: 'Pergunta ativa 1', speech: 'O que ele tem, doutor? É sério?' },
      { trigger: 'Pergunta ativa 2', speech: 'Tem cura? Vou perder meu filho?' }
    ],
    hiddenInfo: 'Pai da criança tem primo com "doença do pulmão desde bebê" — possível fibrose cística na família; só revela se perguntado sobre histórico familiar de doenças pulmonares ou intestinais em crianças. | Bebê foi internado por pneumonia aos 5 meses — primeiro episódio de infecção pulmonar grave; só revela detalhes se perguntado sobre internações anteriores.',
    actorBehavior: 'Mãe muito angustiada e com sentimento de culpa por não ter buscado o resultado do pezinho. Fica em colapso emocional ao perceber a gravidade. Cabe ao candidato acolher sem culpabilizar, mas ser claro sobre a gravidade e urgência do encaminhamento.'
  },
  instC: {
    diagnosis: 'Fibrose cística (FC) — diagnóstico tardio aos 8 meses — com insuficiência pancreática exócrina (esteatorreia, desnutrição grave) e comprometimento pulmonar (tosse crônica, pneumonias de repetição, hiperinsuflação).',
    differentials: [
      'Doença celíaca — esteatorreia e emagrecimento, mas sem tosse crônica e sem comprometimento pulmonar; anti-tTG distingue.',
      'Imunodeficiência primária — infecções recorrentes, mas sem insuficiência pancreática nem suor salgado.',
      'Asma grave — tosse e sibilos, mas sem esteatorreia nem desnutrição.'
    ],
    context: 'Lactente com fibrose cística de diagnóstico tardio (triagem neonatal positiva não buscada), apresentando a tríade clássica: doença pulmonar obstrutiva com infecções recorrentes + insuficiência pancreática exócrina com esteatorreia e desnutrição grave + suor salgado. Teste do suor confirma diagnóstico.',
    justify: 'Teste do suor > 60 mEq/L = diagnóstico de FC. Triagem neonatal (IRT elevado) positiva não buscada. Elastase fecal < 100 µg/g = insuficiência pancreática exócrina grave. Quadro clínico: tosse crônica com chiado + esteatorreia + desnutrição desproporcional (baixo peso com altura relativamente preservada) + suor salgado = FC.',
    expectedAnamnesis: 'Tosse desde o nascimento, características, frequência | Internações por pneumonia | Características das fezes (esteatorreia) | Ganho de peso e crescimento (curvas) | Suor salgado | Resultado do teste do pezinho (IRT) | Histórico familiar de FC ou doenças pulmonares/intestinais em crianças',
    expectedPhysical: 'Estado nutricional: peso, altura, percentis | Ausculta pulmonar: crepitações, sibilos, hiperinsuflação (tórax em tonel) | Abdome: hepatomegalia (cirrose biliar secundária) | Baqueteamento digital (tardio) | Toque de fezes na fralda (gordurosas)',
    expectedExams: [
      { exam: 'Teste do suor (iontoforese com pilocarpina)', justify: 'Padrão-ouro diagnóstico de FC', expected: '> 60 mEq/L' },
      { exam: 'Elastase fecal-1', justify: 'Confirmar insuficiência pancreática exócrina', expected: '< 100 µg/g' },
      { exam: 'Triagem neonatal (IRT — buscar resultado)', justify: 'Rastreamento já realizado', expected: 'Elevado' },
      { exam: 'Radiografia de tórax', justify: 'Avaliar comprometimento pulmonar', expected: 'Hiperinsuflação, espessamento brônquico' }
    ],
    expectedConduct: 'Farmacológica: Reposição de enzimas pancreáticas (pancreatina — lipase) a cada refeição. Vitaminas lipossolúveis (A, D, E, K). Fisioterapia respiratória. Antibioticoterapia nas exacerbações. (SBP 2022 / GBEFC 2017) | Não farmacológica: Fisioterapia respiratória diária (drenagem postural, técnicas de higiene brônquica); dieta hipercalórica e hiperproteica. | Encaminhamento: Urgente ao centro de referência para fibrose cística (multidisciplinar: pneumologista, gastroenterologista, nutricionista, fisioterapeuta, psicólogo). | Orientações: Explicar à mãe sem culpabilizá-la sobre o pezinho; a FC é genética; o encaminhamento urgente é fundamental para iniciar tratamento especializado. | Seguimento: Centro de referência para FC.',
    expectedCommunication: 'Apresentação: Apresentar-se, acolher a mãe antes de comunicar. | Comunicação do diagnóstico: "Natália, o seu filho tem uma doença chamada fibrose cística. É uma doença genética que afeta o pulmão e o intestino. É sério, mas com tratamento adequado ele pode ter uma vida boa." | Escuta ativa: Não culpar sobre o pezinho; normalizar o não entendimento da gravidade; focar no que pode ser feito agora.',
    criticalErrors: [
      'Não solicitar o teste do suor como exame diagnóstico principal',
      'Não questionar sobre o resultado do teste do pezinho',
      'Não encaminhar urgentemente ao centro de referência de FC',
      'Culpabilizar a mãe pela não busca do resultado do pezinho',
      'Não identificar insuficiência pancreática exócrina como causa da esteatorreia e desnutrição'
    ]
  },
  instD: {
    title: 'CHECKLIST — BEBÊ COM TOSSE, FEZES GORDUROSAS E SEM GANHO DE PESO',
    sections: [
      {
        h: 'COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE',
        items: [
          { item: 'Apresentou-se e acolheu a mãe com empatia antes de comunicar diagnóstico grave', score: 0.5, ref: 'CFM 2.217/2018' },
          { item: 'Comunicou diagnóstico grave sem culpabilizar pela não busca do resultado do pezinho', score: 0.5, ref: 'PNHAH/MS, 2001' },
          { item: 'Explicou FC de forma compreensível e com perspectiva de tratamento', score: 0.5, ref: 'PNHAH/MS, 2001' }
        ]
      },
      {
        h: 'ANAMNESE',
        items: [
          { item: 'Investigou tosse desde o nascimento e episódios de pneumonia', score: 0.5, ref: 'GBEFC, 2017' },
          { item: 'Identificou suor salgado como dado clínico relevante', score: 1.0, ref: 'GBEFC, 2017' },
          { item: 'Questionou sobre resultado do teste do pezinho (IRT)', score: 1.0, ref: 'PNS/MS, 2023' },
          { item: 'Investigou características das fezes (esteatorreia) e crescimento', score: 0.5, ref: 'GBEFC, 2017' }
        ]
      },
      {
        h: 'EXAME FÍSICO',
        items: [
          { item: 'Avaliou estado nutricional com plotagem em curvas de crescimento', score: 0.5, ref: 'SBP, 2022' },
          { item: 'Realizou ausculta pulmonar (crepitações, sibilos, hiperinsuflação)', score: 0.5, ref: 'GBEFC, 2017' },
          { item: 'Avaliou abdome (hepatomegalia) e fezes na fralda', score: 0.5, ref: 'GBEFC, 2017' }
        ]
      },
      {
        h: 'RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
        items: [
          { item: 'Formulou hipótese de fibrose cística', score: 1.0, ref: 'GBEFC, 2017' },
          { item: 'Solicitou teste do suor como exame diagnóstico principal', score: 1.0, ref: 'GBEFC, 2017' }
        ]
      },
      {
        h: 'CONDUTA E ORIENTAÇÃO AO PACIENTE',
        items: [
          { item: 'Encaminhou urgentemente ao centro de referência de FC', score: 1.0, ref: 'GBEFC 2017 / SBP 2022' },
          { item: 'Mencionou reposição de enzimas pancreáticas e fisioterapia respiratória', score: 0.5, ref: 'GBEFC, 2017' },
          { item: 'Orientou sobre natureza genética e suporte familiar', score: 0.5, ref: 'GBEFC, 2017' }
        ]
      }
    ]
  }
},

  {
  id: 8,
  title: 'Bebê com choro excessivo, recusa alimentar e sangue nas fezes após troca de leite',
  sub: 'UBS — Atenção Primária',
  tema: 'Pediatria Geral',
  topic: 'Alergia à Proteína do Leite de Vaca (APLV)',
  level: 'moderado',
  cardAccent: '#F57C00',
  instA: {
    scenario: 'Atenção Primária — UBS. Consultório, turno matutino.',
    patient: 'Mãe de B.T., 4 meses, feminina, previamente em aleitamento materno exclusivo.',
    complaint: 'Bebê com choro excessivo, recusa o seio, manchas vermelhas na pele e estrias de sangue nas fezes há 3 semanas, desde que a mãe voltou a consumir laticínios.',
    tasks: [
      'Realize a anamnese dirigida ao caso',
      'Realize o exame físico pertinente',
      'Formule a hipótese diagnóstica e os diferenciais',
      'Proponha a conduta terapêutica e oriente a mãe',
      'Esclareça dúvidas da mãe sobre amamentação e dieta'
    ]
  },
  instB: {
    vitals: {
      PA: 'Não aferida',
      FC: '126 bpm',
      FR: '40 irpm',
      Tax: '36,9°C',
      Peso: '5,8 kg',
      Altura: '60 cm',
      IMC: '16,1 kg/m²'
    },
    physicalGeneral: 'Bom estado geral, bem nutrida, levemente irritada. Sem desidratação. Dermatite atópica em face (bochechas) e dobras de cotovelos — eczema (+/4+).',
    physicalSeg: 'PELE: Eczema em bochechas e dobras de cotovelo, eritema, ressecamento cutâneo. | ABDOME: Levemente distendido, ruídos hidroaéreos aumentados, sem dor à palpação. | REGIÃO PERIANAL: Irritação perianal leve por fezes com sangue. | ESTADO NUTRICIONAL: Adequado para a idade.',
    labs: [
      { test: 'Hemograma', val: 'Eosinófilos 800/mm³ (10%)', ref: '< 500/mm³ (< 5%)', alt: true },
      { test: 'Proteína C reativa', val: '4 mg/L', ref: '< 5 mg/L', alt: false },
      { test: 'Sangue oculto nas fezes', val: 'Positivo', ref: 'Negativo', alt: true }
    ],
    image: null,
    note: 'Ator é a mãe. Entregar peso ao início. Entregar exame físico ao exame. Exames somente se solicitados. O diagnóstico de APLV mediada por células (não IgE) em lactentes é clínico — não há teste sorológico específico confiável nessa faixa etária.',
    patientProfile: 'Mãe: Bruna T., 25 anos, estudante de enfermagem. Bebê: Beatriz T., 4 meses, feminina.',
    script: [
      { trigger: 'Queixa principal', speech: 'Doutor, minha filha começou a ficar agitada, chorar muito e recusar o peito há 3 semanas. E apareceu sangue nas fezes dela.' },
      { trigger: 'Sobre alimentação materna', speech: 'Eu fiquei 3 meses sem comer laticínios porque ela estava com cólica. Aí o médico disse que podia comer de volta, e foi quando ela piorou.' },
      { trigger: 'Sobre a pele', speech: 'Apareceu essas manchas vermelhas no rosto e nos braços, coçam muito.' },
      { trigger: 'Sobre o sangue nas fezes', speech: 'Não é muito, mas dá pra ver estria vermelha nas fezes. Fica assustador.' },
      { trigger: 'Sobre aleitamento', speech: 'Quero muito continuar amamentando. Ouvi dizer que precisaria parar e dar fórmula.' },
      { trigger: 'Sobre histórico familiar', speech: 'Eu mesma tenho rinite e meu marido tem asma. Nossa família é toda alérgica.' },
      { trigger: 'Sobre crescimento', speech: 'Ela está crescendo bem, ganhando peso.' },
      { trigger: 'Pergunta ativa 1', speech: 'Precisa parar de amamentar, doutor?' },
      { trigger: 'Pergunta ativa 2', speech: 'Ela vai ser alérgica para sempre?' }
    ],
    hiddenInfo: 'O irmão mais velho da bebê foi diagnosticado com APLV aos 3 meses — histórico familiar direto; só revela se perguntado sobre irmãos com alergia ao leite. | A mãe voltou a consumir queijo, iogurte e leite condensado nos últimos 20 dias — detalhe da dieta materna; só revela se perguntado especificamente sobre o tipo de laticínio consumido.',
    actorBehavior: 'Mãe ansiosa, com medo de ter que parar de amamentar. Bem informada sobre o assunto (estudante de enfermagem). Fica aliviada quando informada que pode continuar amamentando com dieta de exclusão. Colaborativa.'
  },
  instC: {
    diagnosis: 'Alergia à proteína do leite de vaca (APLV) — mediada por células (não IgE) — em lactente de 4 meses em aleitamento materno, com proctocolite alérgica induzida por proteínas alimentares, dermatite atópica e eosinofilia.',
    differentials: [
      'Fissura anal — sangue nas fezes de lactente, mas localizada, sem eczema nem eosinofilia; ao exame perianal visível.',
      'Doença de Hirschsprung — constipação grave, distensão abdominal; sem eczema nem relação com dieta.',
      'Gastroenterite infecciosa — diarreia aguda com sangue, febre; aqui sem febre e quadro crônico.'
    ],
    context: 'Lactente de 4 meses em aleitamento materno com APLV não mediada por IgE (proctocolite alérgica), manifestando-se com sangue nas fezes, dermatite atópica, irritabilidade e eosinofilia periférica, diretamente relacionada ao retorno do consumo de laticínios pela mãe. Histórico familiar de atopia e irmão com APLV reforçam o diagnóstico.',
    justify: 'Relação temporal clara entre consumo de laticínios pela mãe e piora dos sintomas (sangue nas fezes, eczema, irritabilidade). Melhora anterior com exclusão de laticínios maternos confirma mecanismo alérgico. APLV mediada por células: diagnóstico clínico, sem necessidade de teste de RAST ou prick test nessa faixa etária e nessa forma clínica.',
    expectedAnamnesis: 'Relação temporal entre introdução de laticínios na dieta materna e início dos sintomas | Características das fezes (sangue oculto ou visível) | Manifestações cutâneas (eczema, urticária) | Irritabilidade, recusa alimentar, cólicas | Histórico familiar de atopia (asma, rinite, eczema, APLV) | Irmãos com APLV | Tentativas de exclusão prévia e resposta | Tipo de alimentação (AME — aleitamento materno exclusivo)',
    expectedPhysical: 'Estado nutricional (peso, crescimento) | Pele: eczema (localização, extensão, gravidade) | Abdome: distensão, RHA | Região perianal: fissuras, irritação',
    expectedExams: [
      { exam: 'Hemograma com diferencial', justify: 'Pesquisa de eosinofilia', expected: 'Eosinofilia' },
      { exam: 'Sangue oculto nas fezes', justify: 'Confirmar proctocolite', expected: 'Positivo' },
      { exam: 'RAST/IgE específica para leite de vaca', justify: 'Em casos IgE-mediados (reação imediata, anafilaxia); pouco útil no tipo celular', expected: 'Pode ser negativo na forma celular' }
    ],
    expectedConduct: 'Farmacológica: Nenhum medicamento específico — o tratamento é dietético. Emolientes para eczema. (SBP 2022 / BRASLAR 2022) | Não farmacológica: Manter aleitamento materno com dieta de exclusão de leite de vaca e derivados pela mãe por 2–4 semanas (avaliar resposta). Se desmame: fórmula extensamente hidrolisada (eHF) como 1ª opção; fórmula de aminoácidos (AAF) se falha da eHF. | Encaminhamento: Alergologista pediátrico para confirmação e acompanhamento; nutricionista para orientação da dieta materna. | Orientações: Explicar que pode e deve continuar amamentando com exclusão de laticínios; listar todos os alimentos a excluir (leite, queijo, iogurte, manteiga, caseína, whey); orientar sobre fontes de cálcio alternativas. | Seguimento: Retorno em 2–4 semanas para avaliar resposta à dieta; provocação oral com leite aos 6–12 meses para reavaliação.',
    expectedCommunication: 'Apresentação: Apresentar-se, acolher a mãe. | Comunicação do diagnóstico: "Sua filha tem alergia à proteína do leite de vaca. A boa notícia é que você pode continuar amamentando — só precisa tirar todos os laticínios da sua dieta." | Escuta ativa: Responder diretamente à preocupação com o aleitamento materno; ser específica sobre os alimentos a excluir.',
    criticalErrors: [
      'Orientar desmame sem indicação (APLV não é contraindicação ao aleitamento materno)',
      'Não orientar a exclusão de laticínios da dieta materna',
      'Prescrever fórmula com proteína intacta de leite de vaca como substituto',
      'Não reconhecer o eczema como manifestação de APLV',
      'Afirmar que o teste de RAST negativo exclui APLV na forma celular'
    ]
  },
  instD: {
    title: 'CHECKLIST — BEBÊ COM SANGUE NAS FEZES E ECZEMA APÓS LATICÍNIOS MATERNOS',
    sections: [
      {
        h: 'COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE',
        items: [
          { item: 'Apresentou-se e acolheu a preocupação da mãe com o aleitamento', score: 0.5, ref: 'CFM 2.217/2018' },
          { item: 'Informou que pode continuar amamentando com dieta de exclusão', score: 1.0, ref: 'SBP / BRASLAR, 2022' },
          { item: 'Explicou APLV em linguagem acessível', score: 0.5, ref: 'PNHAH/MS, 2001' }
        ]
      },
      {
        h: 'ANAMNESE',
        items: [
          { item: 'Identificou relação temporal entre laticínios maternos e sintomas', score: 1.0, ref: 'SBP / BRASLAR, 2022' },
          { item: 'Investigou manifestações cutâneas (eczema) como parte do quadro alérgico', score: 0.5, ref: 'SBP, 2022' },
          { item: 'Questionou histórico familiar de atopia e irmãos com APLV', score: 0.5, ref: 'SBP, 2022' }
        ]
      },
      {
        h: 'EXAME FÍSICO',
        items: [
          { item: 'Avaliou estado nutricional (peso e crescimento)', score: 0.5, ref: 'SBP, 2022' },
          { item: 'Identificou eczema (localização e gravidade) e irritação perianal', score: 0.5, ref: 'SBP, 2022' }
        ]
      },
      {
        h: 'RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
        items: [
          { item: 'Formulou hipótese de APLV não IgE-mediada (proctocolite alérgica)', score: 1.0, ref: 'SBP / BRASLAR, 2022' },
          { item: 'Reconheceu que o diagnóstico é clínico (RAST pode ser negativo na forma celular)', score: 0.5, ref: 'BRASLAR, 2022' }
        ]
      },
      {
        h: 'CONDUTA E ORIENTAÇÃO AO PACIENTE',
        items: [
          { item: 'Orientou dieta de exclusão de laticínios pela mãe mantendo o aleitamento', score: 1.0, ref: 'SBP / BRASLAR, 2022' },
          { item: 'Informou sobre fórmula extensamente hidrolisada como alternativa se necessário desmame', score: 0.5, ref: 'BRASLAR, 2022' },
          { item: 'Encaminhou ao alergologista e nutricionista', score: 0.5, ref: 'SBP, 2022' }
        ]
      }
    ]
  }
},

  {
  id: 9,
  title: 'Criança com gases, barriga inchada e diarreia toda vez que bebe leite',
  sub: 'UBS — Atenção Primária',
  tema: 'Pediatria Geral',
  topic: 'Intolerância à Lactose',
  level: 'moderado',
  cardAccent: '#F57C00',
  instA: {
    scenario: 'Atenção Primária — UBS. Consultório, turno matutino.',
    patient: 'Mãe de T.M., 9 anos, masculino, sem comorbidades.',
    complaint: 'Criança com dor abdominal, distensão e diarreia toda vez que consome leite ou sorvete, há cerca de 1 ano.',
    tasks: [
      'Realize a anamnese dirigida ao caso',
      'Realize o exame físico pertinente',
      'Formule a hipótese diagnóstica e os diferenciais',
      'Solicite os exames complementares se necessário',
      'Proponha a conduta e oriente a família'
    ]
  },
  instB: {
    vitals: {
      PA: '100/64 mmHg',
      FC: '82 bpm',
      FR: '18 irpm',
      Tax: '36,6°C',
      Peso: '30 kg (percentil 50)',
      Altura: '134 cm (percentil 50)',
      IMC: '16,7 kg/m²'
    },
    physicalGeneral: 'Bom estado geral, bem nutrido, corado, hidratado, afebril.',
    physicalSeg: 'ABDOME: Levemente distendido durante a consulta, ruídos hidroaéreos aumentados, sem dor à palpação, sem visceromegalias. | ESTADO NUTRICIONAL: Adequado (percentis normais). | PELE: Sem eczema ou manifestações cutâneas.',
    labs: [
      { test: 'Hemograma', val: 'Normal', ref: '—', alt: false },
      { test: 'PCR', val: '2 mg/L', ref: '< 5 mg/L', alt: false },
      { test: 'Anti-tTG IgA', val: 'Negativo', ref: '—', alt: false },
      { test: 'Teste do hidrogênio expirado (H₂) — lactose', val: 'Positivo (aumento > 20 ppm após 50g lactose)', ref: '< 20 ppm de aumento', alt: true }
    ],
    image: null,
    note: 'Ator pode ser a mãe e/ou a própria criança (9 anos). Entregar sinais vitais ao início. Entregar exame físico ao exame. Exames somente se solicitados. O teste do hidrogênio expirado é o padrão diagnóstico não invasivo — disponível em centros de referência; pode ser encaminhado.',
    patientProfile: 'Mãe: Tatiane M., 35 anos, técnica de enfermagem. Paciente: Thiago M., 9 anos, masculino.',
    script: [
      { trigger: 'Queixa principal', speech: 'Doutora, sempre que meu filho toma leite ou come sorvete, ele fica com a barriga estufada, cheia de gases e começa a ter diarreia.' },
      { trigger: 'Sobre início', speech: 'Foi ficando mais claro há uns 12 meses. Ele mesmo já percebeu que o leite faz mal.' },
      { trigger: 'Sobre os sintomas', speech: 'É barriga estufada, muitos gases, dor de barriga e diarreia aquosa umas 2 horas depois que bebe o leite.' },
      { trigger: 'Sobre outros alimentos', speech: 'Com queijo curado e iogurte parece que é mais fraco. Com leite puro e sorvete é sempre forte.' },
      { trigger: 'Sobre alergia', speech: 'Fiz teste de alergia num alergista particular, deu tudo negativo.' },
      { trigger: 'Sobre crescimento', speech: 'Ele está crescendo bem, na faixa normal. Não perdeu peso.' },
      { trigger: 'Sobre histórico familiar', speech: 'Eu mesma não consigo tomar leite também, fico igual a ele.' },
      { trigger: 'Pergunta ativa 1', speech: 'Isso é alergia ao leite, doutora?' },
      { trigger: 'Pergunta ativa 2', speech: 'Ele pode comer queijo? E iogurte?' }
    ],
    hiddenInfo: 'A mãe tem intolerância à lactose diagnosticada — fator genético relevante; só revela com detalhes se perguntado sobre parentes com o mesmo problema. | A criança é descendente de asiáticos pelo lado paterno (avô japonês) — população com alta prevalência de intolerância à lactose primária; só revela se perguntado sobre ascendência étnica ou familiar.',
    actorBehavior: 'Mãe tranquila, bem informada. A criança (9 anos) pode responder perguntas diretas. Curiosos sobre o que pode ou não comer. Colaborativos.'
  },
  instC: {
    diagnosis: 'Intolerância à lactose primária (hipolactasia do tipo adulto) — de início precoce provavelmente favorecida por ascendência asiática — com sintomas digestivos típicos (diarreia, distensão, gases) exclusivamente após consumo de lactose.',
    differentials: [
      'APLV — reação imediata com urticária, vômitos, anafilaxia (IgE-mediada) ou fezes com sangue/eczema (celular); aqui apenas digestivo, sem sangue, sem eczema, teste de alergia negativo.',
      'Doença celíaca — diarreia crônica, emagrecimento, déficit de crescimento; anti-tTG negativo afasta.',
      'Síndrome do intestino irritável — dor abdominal + alteração do hábito, mas não exclusivamente relacionado à lactose.'
    ],
    context: 'Criança de 9 anos com intolerância à lactose primária, provavelmente de início precoce favorecido por ascendência asiática (avô paterno japonês), apresentando a tríade clássica: diarreia osmótica + distensão abdominal + flatulência após ingestão de lactose, sem manifestações alérgicas, sem emagrecimento e com estado nutricional preservado.',
    justify: 'Relação direta entre ingestão de lactose e sintomas osmóticos (diarreia aquosa, gases, distensão); tolerância de laticínios com menor teor de lactose (queijo curado, iogurte); ausência de manifestações alérgicas; teste de alergia negativo; estado nutricional preservado; histórico familiar e étnico compatíveis. Teste do hidrogênio expirado confirma.',
    expectedAnamnesis: 'Relação entre consumo de lactose e sintomas (dose-dependência) | Tolerância a laticínios fermentados (queijo, iogurte — menor lactose) | Ausência de manifestações alérgicas (urticária, sangue nas fezes, eczema) | Estado nutricional (crescimento preservado) | Histórico familiar de intolerância à lactose | Ascendência étnica (asiática, africana — maior prevalência) | Tentativas de exclusão e resposta',
    expectedPhysical: 'Estado nutricional: peso, altura em percentis normais | Abdome: distensão leve, RHA aumentados | Ausência de eczema, urticária (afastar APLV)',
    expectedExams: [
      { exam: 'Teste do hidrogênio expirado (H₂)', justify: 'Padrão-ouro não invasivo para intolerância à lactose', expected: 'Positivo' },
      { exam: 'Anti-tTG IgA', justify: 'Afastar doença celíaca', expected: 'Negativo' },
      { exam: 'Dieta de exclusão/reintrodução', justify: 'Diagnóstico clínico e terapêutico', expected: 'Melhora com exclusão' }
    ],
    expectedConduct: 'Farmacológica: Lactase exógena (gotas ou comprimidos) antes do consumo de laticínios — uso opcional e sintomático. (SBP 2022) | Não farmacológica: Adaptação da dieta: reduzir lactose (não necessariamente excluir tudo); preferir laticínios fermentados (iogurte, queijo curado — menor teor de lactose); leite sem lactose como alternativa; garantir aporte de cálcio. NÃO restringir desnecessariamente toda proteína do leite (não é alergia). | Encaminhamento: Nutricionista para orientação dietética e garantia do aporte de cálcio. | Orientações: Explicar a diferença entre intolerância (deficiência de enzima) e alergia (resposta imune); que pode consumir laticínios em quantidades toleráveis; que queijo e iogurte geralmente são bem tolerados. | Seguimento: Retorno em 4–6 semanas para avaliar adaptação dietética.',
    expectedCommunication: 'Apresentação: Apresentar-se à mãe e ao Thiago. | Comunicação do diagnóstico: "Thiago tem intolerância à lactose, que é diferente de alergia. Falta uma enzima para digerir o açúcar do leite. Não precisa cortar tudo — pode comer queijo, iogurte, e existem leites sem lactose." | Escuta ativa: Responder diretamente às perguntas do paciente e da mãe sobre alimentos permitidos.',
    criticalErrors: [
      'Confundir intolerância à lactose com alergia ao leite (APLV) — diagnósticos distintos com condutas diferentes',
      'Recomendar exclusão total de todos os laticínios sem orientação nutricional',
      'Não garantir aporte de cálcio na dieta',
      'Não investigar doença celíaca como diagnóstico diferencial'
    ]
  },
  instD: {
    title: 'CHECKLIST — CRIANÇA COM GASES E DIARREIA AO CONSUMIR LEITE',
    sections: [
      {
        h: 'COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE',
        items: [
          { item: 'Apresentou-se e incluiu a criança na consulta', score: 0.5, ref: 'CFM 2.217/2018' },
          { item: 'Explicou a diferença entre intolerância e alergia ao leite em linguagem acessível', score: 1.0, ref: 'SBP / BRASLAR, 2022' },
          { item: 'Respondeu objetivamente sobre alimentos permitidos (queijo, iogurte)', score: 0.5, ref: 'SBP, 2022' }
        ]
      },
      {
        h: 'ANAMNESE',
        items: [
          { item: 'Identificou relação dose-dependente entre lactose e sintomas', score: 1.0, ref: 'SBP, 2022' },
          { item: 'Investigou tolerância a laticínios fermentados (queijo, iogurte)', score: 0.5, ref: 'SBP, 2022' },
          { item: 'Questionou ausência de manifestações alérgicas (sangue, eczema, urticária)', score: 0.5, ref: 'SBP / BRASLAR, 2022' },
          { item: 'Perguntou sobre histórico familiar e ascendência étnica', score: 0.5, ref: 'SBP, 2022' }
        ]
      },
      {
        h: 'EXAME FÍSICO',
        items: [
          { item: 'Avaliou estado nutricional (crescimento preservado)', score: 0.5, ref: 'SBP, 2022' },
          { item: 'Confirmou ausência de eczema/urticária (diferencial APLV)', score: 0.5, ref: 'SBP, 2022' }
        ]
      },
      {
        h: 'RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
        items: [
          { item: 'Formulou hipótese de intolerância à lactose e afastou APLV', score: 1.0, ref: 'SBP / BRASLAR, 2022' },
          { item: 'Solicitou teste do hidrogênio expirado e/ou anti-tTG', score: 0.5, ref: 'SBP, 2022' }
        ]
      },
      {
        h: 'CONDUTA E ORIENTAÇÃO AO PACIENTE',
        items: [
          { item: 'Orientou adaptação dietética (reduzir lactose, não exclusão total) com garantia de cálcio', score: 1.0, ref: 'SBP 2022 / RENAME 2022' },
          { item: 'Encaminhou para nutricionista', score: 0.5, ref: 'SBP, 2022' },
          { item: 'Mencionou lactase exógena como opção sintomática', score: 0.5, ref: 'SBP, 2022' }
        ]
      }
    ]
  }
},

  {
  id: 15,
  title: 'Adolescente que não quer mais sair de casa e parou de comer direito',
  sub: 'UBS — Atenção Primária',
  tema: 'Pediatria Geral',
  topic: 'Semiologia do Adolescente — Saúde Mental',
  level: 'moderado',
  cardAccent: '#512DA8',
  instA: {
    scenario: 'Atenção Primária — UBS. Consultório, turno vespertino.',
    patient: 'L.M., 15 anos, feminina, estudante do ensino médio, trazida pela mãe.',
    complaint: 'Adolescente que "mudou muito" segundo a mãe: isolamento social, tristeza, parou de comer e dorme muito há 3 meses.',
    tasks: [
      'Realize a anamnese com a adolescente, garantindo privacidade adequada',
      'Realize o exame físico pertinente',
      'Formule a hipótese diagnóstica e avalie risco',
      'Proponha a conduta e encaminhamento',
      'Oriente a adolescente e a família sobre o próximo passo'
    ]
  },
  instB: {
    vitals: {
      PA: '104/66 mmHg',
      FC: '68 bpm',
      FR: '15 irpm',
      Tax: '36,5°C',
      Peso: '48 kg (perdeu 4 kg em 3 meses)',
      Altura: '1,62 m',
      IMC: '18,3 kg/m²'
    },
    physicalGeneral: 'Regular estado geral, abatida, com fácies triste. Hipomímica. Contato visual reduzido. Sem sinais físicos de abuso. Pele sem lesões de automutilação visíveis. Sem dismorfias.',
    physicalSeg: 'PELE: Braço esquerdo com cicatrizes lineares superficiais em face interna do antebraço — lesões sugestivas de automutilação (cutting). | NEUROLÓGICO: Lúcida, orientada, comunicação lenta, fala baixa. | ESTADO NUTRICIONAL: Perda de 4 kg em 3 meses — atenção (pode indicar depressão ou transtorno alimentar).',
    labs: [
      { test: 'Hemograma', val: 'Normal', ref: '—', alt: false },
      { test: 'TSH', val: '1,8 mUI/L', ref: '0,4–4,0 mUI/L', alt: false },
      { test: 'Glicemia', val: '88 mg/dL', ref: '70–110 mg/dL', alt: false }
    ],
    image: null,
    note: 'A mãe deve ser convidada a aguardar fora do consultório antes da anamnese com a adolescente. Entregar sinais vitais e peso ao início. Entregar exame físico ao exame — reforçar que as cicatrizes de cutting devem ser identificadas pelo candidato ao examinar o antebraço. Exames laboratoriais somente se solicitados.',
    patientProfile: 'Paciente: Laura M., 15 anos, feminina, estudante do 1º ano do ensino médio. Mãe: Márcia M., 42 anos.',
    script: [
      { trigger: 'Abertura com a mãe presente', speech: 'Não tenho nada. É a minha mãe que tá exagerando.' },
      { trigger: 'Abertura após a mãe sair', speech: 'Tô bem... não sei. Tô me sentindo muito vazia.' },
      { trigger: 'Sobre humor', speech: 'Não consigo sentir prazer em nada. Antes eu adorava dançar, agora não quero nem levantar da cama.' },
      { trigger: 'Sobre escola', speech: 'Parei de ir às aulas. Não consigo me concentrar. Acho que não adianta mais nada.' },
      { trigger: 'Sobre sono', speech: 'Durmo mais de 12 horas mas acordo cansada. Às vezes não consigo dormir de jeito nenhum.' },
      { trigger: 'Sobre alimentação', speech: 'Não tenho fome. Às vezes fico o dia inteiro sem comer.' },
      { trigger: 'Sobre automutilação (se perguntado com delicadeza)', speech: 'Às vezes quando tô muito mal, faço uns riscos no braço. Parece que alivia.' },
      { trigger: 'Sobre ideação suicida (se perguntado)', speech: 'Já pensei que seria melhor não estar aqui. Mas não fiz nada.' },
      { trigger: 'Pergunta ativa 1', speech: 'Você vai contar pra minha mãe?' },
      { trigger: 'Pergunta ativa 2', speech: 'Você acha que tem algo errado comigo?' }
    ],
    hiddenInfo: 'Terminou um relacionamento sério há 4 meses e sofreu bullying virtual após o término — gatilho precipitante; só revela se perguntado sobre eventos marcantes nos últimos meses. | Realiza cutting há 2 meses — só revela se perguntado diretamente e com delicadeza sobre automutilação.',
    actorBehavior: 'Adolescente inicialmente fechada e defensiva. Abre-se progressivamente com um médico empático que garantiu privacidade e não julgou. Fica ansiosa quando perguntada sobre contar para a mãe. Cabe ao candidato negociar a confidencialidade com a paciente de forma ética.'
  },
  instC: {
    diagnosis: 'Episódio depressivo maior (EDM) em adolescente — gravidade moderada — com automutilação (cutting) sem intencionalidade suicida, e ideação suicida passiva sem plano. Gatilho psicossocial identificado (término de relacionamento + cyberbullying).',
    differentials: [
      'Transtorno bipolar — humor depressivo + episódios de hipomania/mania; avaliar se houve períodos de euforia, grandiosidade, impulsividade.',
      'Transtorno de ansiedade generalizada com depressão secundária — preocupação excessiva como sintoma primário; aqui humor depressivo é predominante.',
      'Hipotireoidismo — cansaço, ganho de peso, desânimo; TSH normal afasta.'
    ],
    context: 'Adolescente de 15 anos com episódio depressivo maior moderado de 3 meses de evolução, com sintomas típicos (humor depressivo, anedonia, hipersônia, anorexia, perda de 4 kg, isolamento, concentração reduzida) associado a automutilação (cutting) como regulação emocional disfuncional e ideação suicida passiva. Gatilhos psicossociais identificados (término de relacionamento, cyberbullying).',
    justify: 'Critérios do DSM-5 para EDM: ≥ 5 sintomas por ≥ 2 semanas, incluindo humor depressivo e anedonia. Presentes: humor depressivo, anedonia, hipersônia, anorexia, perda de peso, isolamento social, dificuldade de concentração, fadiga, ideação suicida passiva. Automutilação (cutting) é comportamento de autolesão não suicida — diferente de tentativa de suicídio, mas indicativo de sofrimento intenso e necessidade de cuidado especializado.',
    expectedAnamnesis: 'Privacidade garantida (mãe convidada a aguardar fora) | Humor: tristeza, vazio, anedonia | Sono, apetite, peso | Concentração e desempenho escolar | Isolamento social e atividades anteriores | Ideação suicida: passiva, ativa, plano (avaliação de risco) | Automutilação: tipo, frequência, função (regulação emocional) | Eventos precipitantes (gatilhos) | Uso de substâncias (álcool, cannabis) | Histórico de saúde mental familiar',
    expectedPhysical: 'Peso e evolução ponderal | Exame da pele (antebraços — cicatrizes de cutting) | Fácies (hipomimia) | Estado geral (abatimento) | TSH para afastar hipotireoidismo',
    expectedExams: [
      { exam: 'TSH', justify: 'Afastar hipotireoidismo', expected: 'Normal' },
      { exam: 'Hemograma', justify: 'Afastar anemia como causa de cansaço', expected: 'Normal' },
      { exam: 'Escalas validadas (PHQ-A)', justify: 'Triagem e gravidade da depressão', expected: 'Pontuação moderada-grave' }
    ],
    expectedConduct: 'Farmacológica: Fluoxetina 10–20 mg/dia VO (ISRS de 1ª escolha em adolescentes). Iniciar apenas em conjunto com psicoterapia. (SBP 2022 / CFM / ANVISA) | Não farmacológica: Psicoterapia cognitivo-comportamental (TCC) — 1ª linha e obrigatória. Não iniciar ISRS sem suporte psicoterápico em adolescentes. | Encaminhamento: Psiquiatria infantojuvenil e psicologia — urgência moderada (não emergência se sem plano suicida ativo). | Orientações: Negociar com a paciente o que será comunicado à mãe — a automutilação e a ideação suicida devem ser compartilhadas com o responsável, com a adolescente presente e orientada; explicar que não é punição mas proteção. Orientar a mãe sobre a gravidade sem exagero e sem minimização. | Seguimento: Psiquiatria + psicologia + retorno médico em 2 semanas.',
    expectedCommunication: 'Apresentação: Apresentar-se, convidar a mãe a aguardar fora antes de iniciar a anamnese com a adolescente. | Comunicação do diagnóstico: "Laura, o que você tá sentindo tem um nome — depressão. Não é frescura nem fraqueza. É uma doença que tem tratamento. E eu preciso te pedir algo: precisamos contar para sua mãe sobre as marcas no braço — não para te punir, mas para te proteger." | Escuta ativa: Não julgar a automutilação; validar o sofrimento; negociar a quebra parcial de sigilo com a adolescente presente.',
    criticalErrors: [
      'Não garantir privacidade à adolescente (não pedir para a mãe sair antes da anamnese)',
      'Não perguntar sobre ideação suicida e automutilação',
      'Não examinar os antebraços (não identificar as cicatrizes de cutting)',
      'Quebrar o sigilo sem comunicar à paciente previamente',
      'Iniciar ISRS sem encaminhar para psicoterapia',
      'Minimizar os sintomas ("é fase da adolescência")'
    ]
  },
  instD: {
    title: 'CHECKLIST — ADOLESCENTE COM ISOLAMENTO, TRISTEZA E AUTOMUTILAÇÃO',
    sections: [
      {
        h: 'COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE',
        items: [
          { item: 'Convidou a mãe a aguardar fora antes de iniciar a anamnese com a adolescente', score: 1.0, ref: 'ECA / CFM / SBP, 2022' },
          { item: 'Criou vínculo de confiança, sem julgamento, com linguagem acessível à adolescente', score: 0.5, ref: 'SBP, 2022' },
          { item: 'Negociou a quebra parcial de sigilo com a adolescente presente e orientada', score: 0.5, ref: 'CFM 2.217/2018' }
        ]
      },
      {
        h: 'ANAMNESE',
        items: [
          { item: 'Investigou sintomas depressivos (humor, anedonia, sono, apetite, concentração, isolamento)', score: 1.0, ref: 'DSM-5 / SBP, 2022' },
          { item: 'Perguntou sobre ideação suicida (passiva e ativa) e plano', score: 1.0, ref: 'SBP / CFM, 2022' },
          { item: 'Perguntou sobre automutilação com delicadeza', score: 0.5, ref: 'SBP, 2022' },
          { item: 'Investigou gatilhos psicossociais (término de relacionamento, bullying)', score: 0.5, ref: 'SBP, 2022' }
        ]
      },
      {
        h: 'EXAME FÍSICO',
        items: [
          { item: 'Examinou antebraços e identificou cicatrizes de cutting', score: 1.0, ref: 'SBP, 2022' },
          { item: 'Avaliou peso e evolução ponderal (perda de 4 kg)', score: 0.5, ref: 'SBP, 2022' }
        ]
      },
      {
        h: 'RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
        items: [
          { item: 'Formulou hipótese de EDM moderado com automutilação e ideação passiva', score: 1.0, ref: 'DSM-5 / SBP, 2022' }
        ]
      },
      {
        h: 'CONDUTA E ORIENTAÇÃO AO PACIENTE',
        items: [
          { item: 'Encaminhou para psiquiatria infantojuvenil e psicologia com urgência moderada', score: 1.0, ref: 'SBP / CFM, 2022' },
          { item: 'Mencionou que ISRS só deve ser iniciado em conjunto com psicoterapia', score: 0.5, ref: 'SBP / ANVISA, 2022' }
        ]
      }
    ]
  }
},

  {
  id: 16,
  title: 'Adolescente trazida pela mãe após revelar abuso sexual pelo padrasto',
  sub: 'UPA — Urgência / CRAS',
  tema: 'Pediatria Geral',
  topic: 'Semiologia do Adolescente — Violência Sexual',
  level: 'moderado',
  cardAccent: '#B71C1C',
  instA: {
    scenario: 'UPA. Sala reservada, turno noturno. Mãe trouxe a filha após ela revelar abuso sexual pelo padrasto.',
    patient: 'J.C., 14 anos, feminina, estudante, trazida pela mãe após revelação espontânea de abuso sexual recorrente pelo padrasto.',
    complaint: 'Adolescente que revelou abuso sexual pelo padrasto. Último episódio relatado há 3 dias.',
    tasks: [
      'Realize o acolhimento inicial da adolescente com privacidade',
      'Realize a anamnese de forma adequada, não vitimizante',
      'Avalie necessidade de exame físico e profilaxias',
      'Informe as medidas legais e protetivas obrigatórias',
      'Encaminhe adequadamente e oriente a mãe e a paciente'
    ]
  },
  instB: {
    vitals: {
      PA: '108/68 mmHg',
      FC: '88 bpm',
      FR: '18 irpm',
      Tax: '36,7°C',
      Peso: '52 kg',
      Altura: '1,60 m',
      IMC: '20,3 kg/m²'
    },
    physicalGeneral: 'Bom estado geral físico. Fácies ansiosa, com olhar baixo, choro contido. Sem hematomas ou lesões externas visíveis. Contato visual esporádico. Colaborativa mas tensa.',
    physicalSeg: 'GENITAL/ANAL: O exame deve ser realizado somente se houver indicação médica e com consentimento da paciente. No caso de abuso recorrente sem último episódio < 72h com suspeita de material biológico, o exame ginecológico forense deve ser realizado pela equipe especializada (IML ou serviço de referência). Para fins desta estação: exame não realizado na UPA — encaminhamento ao serviço especializado. | PELE/GERAL: Sem lesões físicas externas identificadas neste momento.',
    labs: [
      { test: 'Teste de gravidez (beta-hCG)', val: 'Negativo', ref: '—', alt: false },
      { test: 'Sorologia HIV (baseline)', val: 'Negativo', ref: '—', alt: false },
      { test: 'VDRL', val: 'Negativo', ref: '—', alt: false },
      { test: 'HBsAg', val: 'Negativo', ref: '—', alt: false }
    ],
    image: null,
    note: 'Mãe deve aguardar fora durante parte da consulta (anamnese com a adolescente). A anamnese não deve ser uma reinquirição exaustiva — o objetivo médico é: avaliar necessidade de profilaxias, registrar o relato sem repetição traumatizante, e acionar a rede de proteção. O exame físico ginecológico forense NÃO deve ser realizado pelo médico da UPA — apenas pelo serviço especializado. Entregar sinais vitais ao início.',
    patientProfile: 'Paciente: Júlia C., 14 anos, feminina, estudante do 9º ano. Mãe: Joana C., 36 anos.',
    script: [
      { trigger: 'Abertura com a mãe presente', speech: 'Eu não quero falar isso de novo.' },
      { trigger: 'Abertura após a mãe sair (privacidade)', speech: 'Tô com vergonha. Acho que é culpa minha.' },
      { trigger: 'Sobre o abuso', speech: 'Faz uns 8 meses que o meu padrasto fica fazendo isso comigo. Quando minha mãe sai pra trabalhar.' },
      { trigger: 'Sobre o tipo de abuso', speech: 'Ele me toca, me beija à força... uma vez foi mais. Eu fico paralisada, não consigo fazer nada.' },
      { trigger: 'Sobre o último episódio', speech: 'Foi há 3 dias. Quando minha mãe chegou em casa eu não aguentei mais e contei.' },
      { trigger: 'Sobre sintomas físicos', speech: 'Não tô grávida, né? Tô com medo disso.' },
      { trigger: 'Sobre sentimentos', speech: 'Fico me sentindo suja. Acho que ninguém vai me acreditar.' },
      { trigger: 'Pergunta ativa 1', speech: 'Você vai contar tudo pra minha mãe? O que vai acontecer com ele?' },
      { trigger: 'Pergunta ativa 2', speech: 'Preciso fazer exame? Vai doer?' }
    ],
    hiddenInfo: 'O abuso é recorrente há 8 meses, com penetração em pelo menos uma ocasião — só revela se perguntado com delicadeza sobre o tipo e a frequência dos atos. | A adolescente já tentou contar antes para uma professora, mas não foi acreditada — só revela se perguntado sobre se alguém sabia antes.',
    actorBehavior: 'Adolescente com vergonha intensa, culpa e medo. Fica mais à vontade quando percebe que não será julgada. Chora ao falar. Cabe ao candidato não repetir perguntas desnecessárias, validar o relato e comunicar os próximos passos com cuidado.'
  },
  instC: {
    diagnosis: 'Violência sexual recorrente contra adolescente de 14 anos — abuso sexual intrafamiliar por padrasto — com último episódio há 3 dias. Indicação de profilaxias, notificação compulsória, acionamento do Conselho Tutelar e encaminhamento ao serviço especializado.',
    differentials: [
      'Não aplicável neste caso. O relato de violência sexual é suficiente para acionar a rede de proteção — não cabe ao médico "provar" ou refutar o relato.'
    ],
    context: 'Adolescente de 14 anos vítima de abuso sexual intrafamiliar recorrente por padrasto, com último episódio há 3 dias. Revelação espontânea para a mãe, que trouxe ao serviço de saúde. Necessidade imediata de: acolhimento não vitimizante, profilaxias (ISTs, gravidez), notificação compulsória, acionamento do Conselho Tutelar e encaminhamento ao serviço de referência.',
    justify: 'Menor de 18 anos + relato de ato sexual sem consentimento + agressor com vínculo intrafamiliar (padrasto) = violência sexual contra menor. No Brasil, qualquer ato sexual com menores de 14 anos é crime (estupro de vulnerável, independentemente de consentimento). Aos 14 anos completos, o consentimento viciado pelo vínculo de poder configura igualmente crime. Notificação é obrigatória pelo ECA e pelo profissional de saúde.',
    expectedAnamnesis: 'Garantir privacidade (mãe fora) | Acolhimento: validar o relato sem questionar a veracidade | Informações mínimas necessárias: tipo de ato (para definir profilaxias), data do último episódio (< ou > 72h — define protocolo de emergência), uso de preservativo, histórico menstrual e última menstruação (risco de gestação) | Não reinquirir: evitar repetição do relato — esse papel cabe ao serviço especializado e ao IML | Sintomas físicos ou psicológicos',
    expectedPhysical: 'Exame geral: hematomas, lesões | Exame ginecológico/anal: NÃO realizar na UPA sem indicação clínica emergencial; encaminhar ao serviço especializado para perícia forense | Exceção: sangramento ativo, lesão que necessite sutura ou tratamento imediato',
    expectedExams: [
      { exam: 'Beta-hCG', justify: 'Afastar gravidez — se último episódio < 72h: contracepção de emergência', expected: 'Negativo' },
      { exam: 'Sorologias baseline (HIV, sífilis, hepatite B)', justify: 'Avaliar condição prévia às profilaxias', expected: 'Negativos' },
      { exam: 'Cultura/swab vaginal e anal', justify: 'Se < 72h do último episódio com material biológico', expected: 'Coletar no serviço especializado' }
    ],
    expectedConduct: 'Farmacológica: Profilaxia de ISTs: ceftriaxona 500 mg IM (gonorreia) + metronidazol 2g VO dose única (tricomoníase) + azitromicina 1g VO dose única (clamídia). Profilaxia antirretroviral (TARV — PEP) se < 72h do último episódio com risco de exposição ao HIV. Contracepção de emergência (levonorgestrel 1,5 mg) se risco de gestação e < 72h. Vacina hepatite B (se não imunizada) + imunoglobulina se < 14 dias. (MS/Protocolo de Violência Sexual 2022) | Não farmacológica: Acolhimento e apoio psicológico imediato; encaminhamento ao CRAS/CREAS para suporte social. | Encaminhamento: Conselho Tutelar — notificação imediata e obrigatória (ECA art. 13). IML ou serviço de referência para perícia. Delegacia de Proteção à Criança e ao Adolescente. CRAS/CREAS. Psicologia/psiquiatria. | Orientações: Explicar à paciente e à mãe que: o abuso não é culpa da vítima; que a notificação ao Conselho Tutelar é obrigatória e protetiva; que o agressor deve ser afastado do lar imediatamente; que haverá acompanhamento. | Seguimento: Serviço de referência em violência sexual; acompanhamento psicológico.',
    expectedCommunication: 'Apresentação: Apresentar-se, garantir privacidade antes de qualquer pergunta. | Comunicação: "Júlia, primeiro quero que saiba que você não tem culpa de nada. O que aconteceu com você é errado e é crime. Estamos aqui para te proteger e cuidar de você." | Escuta ativa: Não questionar a veracidade do relato; não repetir perguntas traumatizantes; validar constantemente.',
    criticalErrors: [
      'Não garantir privacidade à adolescente',
      'Questionar a veracidade do relato ou atribuir culpa à vítima',
      'Realizar exame ginecológico forense na UPA sem indicação clínica emergencial',
      'Não realizar notificação compulsória ao Conselho Tutelar (obrigação legal)',
      'Não oferecer profilaxias (ISTs, gestação, HIV) conforme o protocolo do MS',
      'Não encaminhar ao serviço especializado e ao IML'
    ]
  },
  instD: {
    title: 'CHECKLIST — ADOLESCENTE VÍTIMA DE VIOLÊNCIA SEXUAL',
    sections: [
      {
        h: 'COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE',
        items: [
          { item: 'Garantiu privacidade (mãe aguardando fora) antes de iniciar a anamnese', score: 1.0, ref: 'ECA / CFM / MS, 2022' },
          { item: 'Acolheu sem julgamento e validou que o abuso não é culpa da vítima', score: 1.0, ref: 'MS — Violência Sexual, 2022' },
          { item: 'Não repetiu perguntas traumatizantes desnecessárias (respeito ao relato único)', score: 0.5, ref: 'MS — Violência Sexual, 2022' }
        ]
      },
      {
        h: 'ANAMNESE',
        items: [
          { item: 'Investigou data e tipo do último episódio (< ou > 72h — define protocolo)', score: 1.0, ref: 'MS — Violência Sexual, 2022' },
          { item: 'Questionou sobre risco de gestação (menarca, última menstruação)', score: 0.5, ref: 'MS — Violência Sexual, 2022' }
        ]
      },
      {
        h: 'EXAME FÍSICO',
        items: [
          { item: 'Realizou exame geral (hematomas, lesões) sem realizar exame ginecológico forense na UPA', score: 1.0, ref: 'MS — Violência Sexual, 2022' }
        ]
      },
      {
        h: 'RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
        items: [
          { item: 'Identificou corretamente a obrigação de notificação ao Conselho Tutelar', score: 1.0, ref: 'ECA art. 13 / MS, 2022' },
          { item: 'Solicitou sorologias baseline e beta-hCG', score: 0.5, ref: 'MS — Violência Sexual, 2022' }
        ]
      },
      {
        h: 'CONDUTA E ORIENTAÇÃO AO PACIENTE',
        items: [
          { item: 'Prescreveu profilaxia de ISTs (ceftriaxona + azitromicina + metronidazol)', score: 1.0, ref: 'MS — Violência Sexual, 2022' },
          { item: 'Indicou PEP se < 72h e contracepção de emergência se indicada', score: 0.5, ref: 'MS — Violência Sexual, 2022' },
          { item: 'Encaminhou ao Conselho Tutelar, IML/serviço de referência e apoio psicológico', score: 1.0, ref: 'ECA / MS, 2022' }
        ]
      }
    ]
  }
},
];

export default pediatriaGeral;
