// Auto-parsed from: data/Markdown files/Pediatria1
// First case: OSCE-01 (Puericultura — Atraso Vacinal, 4 meses)

const pediatriaStations = [

  // ── ESTAÇÃO 1: Puericultura — Consulta de Rotina 4 meses ───────────────
  {
    id: 1,
    title: "Criança de 4 meses para consulta de rotina",
    sub: "UBS — Atenção Primária",
    tema: "Pediatria",
    topic: "vacinação",
    level: "simples",
    cardAccent: "#4CAF50",

    instA: {
      scenario: "Atenção Primária — UBS. Consultório de puericultura, turno diurno.",
      patient: "L.M.S., 4 meses, masculino. Mãe (24 anos, dona de casa) comparece à consulta de rotina.",
      complaint: "Consulta de rotina do bebê de 4 meses — mãe com dúvidas sobre vacinas.",
      tasks: [
        "Apresente-se adequadamente à mãe, identificando-se e perguntando o nome de ambos.",
        "Realize anamnese direcionada: alimentação, desenvolvimento e antecedentes.",
        "Solicite os documentos e informações que julgar necessários para avaliação.",
        "Avalie o estado de saúde da criança e identifique eventuais pendências.",
        "Estabeleça a conduta adequada e oriente a mãe.",
        "Esclareça dúvidas e agende o retorno conforme necessário."
      ]
    },

    instB: {
      vitals: { PA: "—", FC: "132 bpm", FR: "36 irpm", Tax: "36,7°C", Peso: "6.200 g", Altura: "62 cm", IMC: "PC: 40 cm" },
      physicalGeneral: "Bom estado geral, ativo, reativo, corado, hidratado.",
      physicalSeg: [
        "NEUROLÓGICO/DNPM: Sustenta cabeça em prono, sorriso social, segue objeto com olhar.",
        "CARDIOVASCULAR: RCR 2T, sem sopros.",
        "RESPIRATÓRIO: MV presente, sem ruídos adventícios.",
        "ABDOME: Plano, flácido, sem hepatoesplenomegalia.",
        "FONTANELA ANTERIOR: Normotensa, 2×2 cm.",
        "GENITÁLIA: Masculina, normal."
      ],
      labs: [],
      image: null,
      note: "Entregar a caderneta de saúde somente após o candidato solicitá-la verbalmente. Não oferecer espontaneamente. Caderneta mostra: BCG ✅ (ao nascer), HepB ✅ (ao nascer), Pentavalente 1ª ❌, VIP 1ª ❌, Pneumo10 1ª ❌, VORH 1ª ❌, MenC 1ª ❌.",
      patientProfile: "L.M.S., 4 meses, masculino. Mãe: A.M.S., 24 anos, dona de casa.",
      script: [
        { trigger: "Queixa principal", speech: "Vim para a consultinha de rotina. Quero saber se está tudo bem com o Lucas." },
        { trigger: "Sobre as vacinas", speech: "Eu sei que ele perdeu as vacinas dos 2 meses porque eu estava gripada. Mas não sei quais são exatamente." },
        { trigger: "Sobre amamentação", speech: "Estou amamentando exclusivamente, ele não toma nada mais." },
        { trigger: "Sobre aplicar várias vacinas no mesmo dia", speech: "Posso dar mais de uma vacina no mesmo dia?" },
        { trigger: "Sobre febre pós-vacina", speech: "Ele vai ter febre? O que eu faço se tiver febre em casa?" },
        { trigger: "Sobre retorno", speech: "Quando é a próxima consulta?" }
      ],
      hiddenInfo: [
        "Mãe não sabe o nome das vacinas atrasadas — só revelar se o candidato perguntar especificamente quais vacinas do 2º mês foram perdidas.",
        "Mãe tem receio de vacinas e questiona a necessidade de aplicar tantas ao mesmo tempo — só revelar se o candidato perguntar sobre dúvidas ou medos."
      ],
      actorBehavior: "Mãe jovem, levemente ansiosa, que demonstra cuidado com o filho. Não mencionar espontaneamente o receio de vacinas nem o desconhecimento dos nomes das vacinas atrasadas — aguardar que o candidato pergunte. Mostrar alívio e gratidão quando orientada de forma clara sobre efeitos adversos e cuidados em casa."
    },

    instC: {
      diagnosis: "Atraso vacinal em lactente de 4 meses — vacinas do 2º mês não aplicadas.",
      differentials: [
        "Esquema vacinal completo — afastado pela análise da caderneta de saúde, que evidencia ausência de registro das vacinas do 2º mês.",
        "Contraindicação vacinal — afastada pela ausência de doenças imunossupressoras, alergia conhecida a componentes vacinais ou intercorrência aguda grave."
      ],
      context: "Lactente de 4 meses, saudável, bom estado geral e desenvolvimento neuropsicomotor adequado para a idade. Recebeu apenas BCG e Hepatite B ao nascer. Não recebeu nenhuma vacina do esquema do 2º mês (Pentavalente 1ª, VIP 1ª, Pneumo10 1ª, VORH 1ª, MenC 1ª).",
      justify: "A caderneta evidencia ausência de registro das vacinas do 2º mês. Pelo PNI 2024, o esquema de recuperação permite aplicar as doses atrasadas do 2º mês concomitantemente com as do 4º mês, em sítios diferentes, no mesmo dia.",
      expectedAnamnesis: [
        "Investigar história alimentar — confirmar aleitamento materno exclusivo até os 6 meses.",
        "Investigar marcos do desenvolvimento neuropsicomotor (DNPM): motor, linguagem e social.",
        "Questionar antecedentes perinatais (tipo de parto, IG, intercorrências neonatais).",
        "Solicitar e analisar a caderneta de saúde da criança para verificar o histórico vacinal."
      ],
      expectedPhysical: [
        "Avaliar e plotar peso e comprimento nas curvas OMS da caderneta.",
        "Medir e avaliar o perímetro cefálico.",
        "Avaliar a fontanela anterior (tensão e dimensões).",
        "Avaliar DNPM no exame físico: sustento cefálico em prono, sorriso social e seguimento visual."
      ],
      expectedExams: [
        { exam: "Caderneta de Saúde da Criança", justify: "Documento obrigatório para verificar o histórico vacinal e identificar atrasos.", expected: "BCG e HepB ao nascer ✅. Vacinas do 2º mês (Pentavalente, VIP, Pneumo10, VORH, MenC) todas em atraso ❌." }
      ],
      expectedConduct: [
        "Aplicar as 5 vacinas do 2º mês em atraso (Pentavalente 1ª, VIP 1ª, Pneumo10 1ª, VORH 1ª, MenC 1ª) juntamente com as do 4º mês, em sítios diferentes, no mesmo dia — nunca reiniciar o esquema.",
        "Orientar sobre efeitos adversos esperados: febre, irritabilidade e dor/endurecimento no local da aplicação.",
        "Orientar uso de paracetamol 10–15 mg/kg/dose se febre ≥ 37,8°C.",
        "Orientar sinais de alerta para reação grave (choro inconsolável, febre > 39,5°C, hipotonia) e quando buscar serviço de saúde.",
        "Agendar retorno para o 5º mês (Pentavalente 3ª + VIP 3ª) e orientar próximas datas do calendário."
      ],
      expectedCommunication: [
        "Apresentar-se pelo nome à mãe e perguntar o nome da criança antes de iniciar a consulta.",
        "Demonstrar postura empática e acolhedora, reconhecendo a ansiedade da mãe.",
        "Esclarecer as dúvidas sobre a possibilidade de aplicar múltiplas vacinas no mesmo dia.",
        "Perguntar ao final se a mãe tem outras dúvidas ou preocupações."
      ],
      criticalErrors: [
        "Aplicar vacinas sem solicitar e verificar a caderneta de saúde.",
        "Não identificar o atraso vacinal do 2º mês.",
        "Reiniciar o esquema vacinal do zero (incorreto — nunca reiniciar, sempre continuar).",
        "Aplicar VORH após 7 meses e 29 dias (não aplicável aqui, mas importante conhecer o limite de idade).",
        "Não orientar sobre efeitos adversos e conduta domiciliar.",
        "Contraindicar vacinas sem justificativa clínica."
      ]
    },

    instD: {
      title: "CHECKLIST — Criança de 4 meses para consulta de rotina",
      sections: [
        {
          h: "BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
          items: [
            { item: "Apresentou-se pelo nome à mãe e perguntou o nome da criança.", score: 0.5, ref: "CFM / Comunicação Médica" },
            { item: "Demonstrou postura empática e acolhedora com a mãe ansiosa.", score: 0.5, ref: "CFM / Relação Médico-Paciente" },
            { item: "Perguntou se a mãe tinha dúvidas ou preocupações ao final da consulta.", score: 0.5, ref: "CFM / Comunicação Médica" }
          ]
        },
        {
          h: "BLOCO 2 — ANAMNESE",
          items: [
            { item: "Investigou história alimentar (aleitamento materno exclusivo).", score: 0.5, ref: "MS — Saúde da Criança, 2012" },
            { item: "Investigou DNPM: marcos motores, linguagem e social.", score: 0.5, ref: "SBP — Puericultura, 2023" },
            { item: "Questionou antecedentes perinatais e intercorrências.", score: 0.5, ref: "SBP — Puericultura, 2023" },
            { item: "Solicitou a caderneta de saúde da criança.", score: 1.0, ref: "PNI 2024 / MS" }
          ]
        },
        {
          h: "BLOCO 3 — EXAME FÍSICO",
          items: [
            { item: "Avaliou peso e comprimento com referência às curvas OMS.", score: 0.5, ref: "MS — Caderneta de Saúde da Criança" },
            { item: "Avaliou perímetro cefálico.", score: 0.5, ref: "SBP — Puericultura, 2023" },
            { item: "Avaliou fontanela anterior.", score: 0.5, ref: "Semiologia Pediátrica" },
            { item: "Avaliou DNPM no exame físico (sustento cefálico, sorriso social, seguimento visual).", score: 0.5, ref: "SBP — Puericultura, 2023" }
          ]
        },
        {
          h: "BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO",
          items: [
            { item: "Identificou corretamente as 5 vacinas em atraso do 2º mês (Pentavalente, VIP, Pneumo10, VORH, MenC).", score: 1.0, ref: "PNI 2024 / MS" },
            { item: "Identificou as vacinas do 4º mês e propôs esquema de recuperação simultâneo.", score: 1.0, ref: "PNI 2024 / MS" },
            { item: "Não contraindicou vacinas sem justificativa clínica.", score: 0.5, ref: "PNI 2024 / MS" }
          ]
        },
        {
          h: "BLOCO 5 — CONDUTA E ORIENTAÇÃO AO PACIENTE",
          items: [
            { item: "Orientou sobre efeitos adversos esperados (febre, dor local, irritabilidade).", score: 0.5, ref: "PNI 2024 / MS" },
            { item: "Orientou uso de paracetamol 10–15 mg/kg/dose SE febre ≥ 37,8°C.", score: 0.5, ref: "SBP — Imunizações, 2023" },
            { item: "Orientou sobre sinais de reação grave e quando buscar serviço de saúde.", score: 0.5, ref: "PNI 2024 / MS" },
            { item: "Agendou retorno para o 5º mês e orientou as próximas datas do calendário.", score: 0.5, ref: "PNI 2024 / MS" }
          ]
        }
      ]
    }
  },


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


  // ── ESTAÇÃO 3: Pneumologia Pediátrica — Pneumonia Bacteriana ───────────────
  {
    id: 3,
    title: "Criança com febre, tosse e dificuldade respiratória há 3 dias",
    sub: "UBS — Atenção Primária",
    tema: "Pediatria",
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
    tema: "Pediatria",
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
    tema: "Pediatria",
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


  // ── ESTAÇÃO 6: Puericultura — DNPM 2,5 anos ──────────────────────────────────
  {
    id: 6,
    title: "Criança de 2 anos e meio para consulta de rotina",
    sub: "UBS — Atenção Primária",
    tema: "Pediatria",
    topic: "puericultura-dnpm",
    level: "simples",
    cardAccent: "#E91E63",

    instA: {
      scenario: "Atenção Primária — UBS. Consultório de puericultura, turno matutino.",
      patient: "S.O., 2 anos e 6 meses, feminino. Mãe comparece para consulta de rotina sem queixa específica.",
      complaint: "Consulta de puericultura de rotina — mãe quer saber se a filha está se desenvolvendo bem.",
      tasks: [
        "Apresente-se e crie vínculo com a mãe e a criança.",
        "Realize anamnese pediátrica completa.",
        "Solicite e interprete o exame físico completo.",
        "Avalie o desenvolvimento e o crescimento da criança.",
        "Identifique pontos de atenção e oriente a mãe.",
        "Agende o retorno e esclareça dúvidas."
      ]
    },

    instB: {
      vitals: {
        PA: "—",
        FC: "102 bpm",
        FR: "26 irpm",
        Tax: "36,6°C",
        Peso: "12,5 kg (p25–p50 OMS)",
        Altura: "89 cm (p25 OMS)",
        IMC: "15,8 kg/m² (eutrófico) · PC: 49 cm (p50)"
      },
      physicalGeneral: "Bom estado geral, ativa, comunicativa, corada, hidratada.",
      physicalSeg: [
        "DNPM — Motor grosso: Corre, sobe e desce escadas, chuta bola.",
        "DNPM — Motor fino: Empilha cubos, rabisca espontaneamente.",
        "DNPM — Linguagem: Frases de 2–3 palavras, vocabulário ~200 palavras.",
        "DNPM — Social: Jogo paralelo, imita adultos.",
        "CARDIOVASCULAR: RCR 2T, sem sopros.",
        "RESPIRATÓRIO: MV presente, sem ruídos adventícios.",
        "ABDOME: Normal.",
        "PELE: Sem lesões."
      ],
      labs: [],
      image: null,
      note: "Entregar os dados antropométricos e o exame físico após solicitação verbal. A caderneta de vacinação está em dia — entregar se solicitada.",
      patientProfile: "Sofia O., 2 anos e 6 meses, feminino. Mãe: 29 anos, professora de educação infantil.",
      script: [
        { trigger: "Queixa principal", speech: "Vim só para a consultinha de rotina mesmo. Quero saber se a Sofia está bem." },
        { trigger: "Sobre alimentação", speech: "Ela come de tudo: arroz, feijão, legumes, fruta. Toma leite de manhã e à noite." },
        { trigger: "Sobre desenvolvimento", speech: "Já fala bastante, mistura palavras e frases. Gosta de brincar de bonecas." },
        { trigger: "Sobre comportamento", speech: "Às vezes tem birra quando não pode fazer o que quer. Às vezes bate." },
        { trigger: "Sobre sono", speech: "Dorme por volta de 9h da noite, acorda 7h. Às vezes tem pesadelo." },
        { trigger: "Sobre tela", speech: "Assiste desenho no tablet, umas 2 horinhas por dia, às vezes mais." },
        { trigger: "Pergunta ativa", speech: "Ela está no tamanho certo? O desenvolvimento está normal?" },
        { trigger: "Pergunta ativa", speech: "Quando devo tirar a chupeta? E sobre as telas, tem limite?" }
      ],
      hiddenInfo: [
        "A criança usa chupeta para dormir e a mãe não sabia que isso era um problema nessa idade — só revela se perguntada sobre hábitos de sucção.",
        "A mãe deixa a criança assistir TV enquanto come — só revela se perguntada sobre tela durante as refeições."
      ],
      actorBehavior: "Mãe tranquila, sorridente, muito receptiva a orientações. Tom colaborativo. A criança está ativa e explorando a sala durante a consulta."
    },

    instC: {
      diagnosis: "Criança saudável com DNPM e crescimento adequados para 2 anos e 6 meses. Consulta de puericultura de rotina sem intercorrências.",
      differentials: [
        "Atraso do DNPM — afastado pelos marcos adequados para a faixa etária (corre, frases de 2–3 palavras, jogo paralelo, imita adultos).",
        "Desnutrição / baixa estatura — afastada pelo IMC eutrófico e peso/estatura nos percentis normais (p25–p50 OMS)."
      ],
      context: "Pré-escolar de 2 anos e 6 meses, saudável, em bom estado geral, com crescimento nos percentis adequados, desenvolvimento neuropsicomotor compatível com a faixa etária e vacinas em dia. Alimentação diversificada. Pontos de orientação: tempo de tela acima do recomendado (~2h/dia), uso de chupeta, tela durante as refeições.",
      justify: "Os marcos de DNPM para 2,5 anos estão plenamente presentes: motor grosso (corre, sobe e desce escadas), linguagem (frases de 2–3 palavras, ~200 palavras), social (jogo paralelo, imita adultos). Peso e estatura entre p25–p50 OMS — crescimento adequado. Não há sinais de alerta para TEA, deficiência auditiva ou atraso motor.",
      expectedAnamnesis: [
        "Alimentação: diversidade, quantidade, ultraprocessados, amamentação prévia.",
        "Sono: horas, rituais, pesadelos, roncos.",
        "DNPM: marcos motores, linguagem, social e cognitivo.",
        "Comportamento: birra, interação com outras crianças, atenção.",
        "Tempo de tela e qualidade do conteúdo.",
        "Hábitos de higiene: escovação, fluoreto.",
        "Hábitos de sucção: chupeta, mamadeira.",
        "Vacinas: verificar caderneta.",
        "Antecedentes: intercorrências, hospitalizações, uso de medicamentos."
      ],
      expectedPhysical: [
        "Peso, altura e PC com plotagem nas curvas OMS.",
        "Cálculo do IMC.",
        "Avaliação do DNPM (motor grosso, fino, linguagem, social).",
        "Ausculta cardíaca e pulmonar.",
        "Exame abdominal.",
        "Inspeção da pele e mucosas.",
        "Avaliação odontológica básica (presença de cáries, uso de fluoreto)."
      ],
      expectedExams: [
        { exam: "Nenhum obrigatório nesta consulta", justify: "Criança saudável sem queixas", expected: "—" },
        { exam: "Hemograma + ferritina (opcional)", justify: "Triagem de anemia ferropriva se risco", expected: "Normal neste caso" }
      ],
      expectedConduct: [
        "Farmacológica: Não indicada. Suplementação de vitamina D se indicação específica. Dentifrício fluoretado (grão de ervilha) para escovação.",
        "Não farmacológica: Alimentação saudável e diversificada; evitar ultraprocessados; retirada progressiva da chupeta (preferencialmente antes dos 3 anos); tempo de tela máximo 1h/dia com conteúdo de qualidade; não usar tela durante refeições; estimular leitura, brincadeira ao ar livre e interação social.",
        "Encaminhamento: Não indicado.",
        "Orientações ao paciente: Crescimento e desenvolvimento adequados. Orientar sobre tempo de tela, retirada da chupeta, alimentação saudável e próxima consulta.",
        "Seguimento: Próxima consulta de puericultura aos 3 anos."
      ],
      expectedCommunication: [
        "Apresentação: nome, função, cumprimento amigável à criança (agachar, falar no nível dela).",
        "Comunicação do diagnóstico: tranquilizar a mãe sobre o desenvolvimento normal, mas orientar sobre os pontos de atenção (tela, chupeta).",
        "Escuta ativa: valorizar as perguntas da mãe, responder com linguagem acessível."
      ],
      criticalErrors: [
        "Não avaliar DNPM — principal objetivo da puericultura.",
        "Não verificar a caderneta vacinal.",
        "Não interpretar as curvas de crescimento com plotagem.",
        "Tranquilizar a mãe sem avaliação completa do desenvolvimento.",
        "Não orientar sobre tempo de tela (>1h/dia = acima do recomendado para a faixa etária)."
      ]
    },

    instD: {
      title: "CHECKLIST — PUERICULTURA: DNPM E CRESCIMENTO AOS 2 ANOS E 6 MESES",
      sections: [
        {
          h: "BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
          items: [
            { item: "Apresentou-se e estabeleceu vínculo com a mãe e com a criança (agachou, falou com ela).", score: 0.5, ref: "CFM, Res. 2.232/2019" },
            { item: "Respondeu às perguntas da mãe com linguagem acessível e sem jargões.", score: 0.5, ref: "MS. HumanizaSUS, 2023" },
            { item: "Perguntou se a mãe tinha outras dúvidas ao final da consulta.", score: 0.5, ref: "SBP. Puericultura, 2022" }
          ]
        },
        {
          h: "BLOCO 2 — ANAMNESE",
          items: [
            { item: "Investigou alimentação: diversidade, ultraprocessados, tempo de tela durante refeições.", score: 0.5, ref: "MS. Guia Alimentar 0–2 anos, 2022" },
            { item: "Investigou sono: horas, rituais e qualidade.", score: 0.5, ref: "SBP. Puericultura, 2022" },
            { item: "Investigou DNPM: marcos motor, linguagem e social.", score: 0.5, ref: "SBP. DNPM, 2022" },
            { item: "Perguntou sobre tempo de tela e qualidade do conteúdo.", score: 0.5, ref: "SBP. Saúde Digital na Infância, 2023" },
            { item: "Verificou a caderneta vacinal.", score: 0.5, ref: "PNI/MS, 2024" }
          ]
        },
        {
          h: "BLOCO 3 — EXAME FÍSICO",
          items: [
            { item: "Aferiu peso, altura e PC e plotou (ou interpretou) nas curvas OMS.", score: 1.0, ref: "OMS. Child Growth Standards, 2006" },
            { item: "Calculou ou estimou o IMC e classificou como eutrófico.", score: 0.5, ref: "OMS. Child Growth Standards, 2006" },
            { item: "Avaliou DNPM no exame físico (motor grosso, linguagem, social).", score: 1.0, ref: "SBP. DNPM, 2022" }
          ]
        },
        {
          h: "BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO",
          items: [
            { item: "Confirmou DNPM adequado para 2,5 anos com justificativa dos marcos presentes.", score: 0.5, ref: "SBP. DNPM, 2022" },
            { item: "Identificou pontos de atenção: tempo de tela acima do recomendado e uso de chupeta.", score: 0.5, ref: "SBP. Saúde Digital, 2023" }
          ]
        },
        {
          h: "BLOCO 5 — CONDUTA E ORIENTAÇÃO AO PACIENTE",
          items: [
            { item: "Orientou sobre tempo de tela máximo de 1h/dia para 2–5 anos com conteúdo de qualidade.", score: 1.0, ref: "SBP. Saúde Digital na Infância, 2023" },
            { item: "Orientou sobre retirada progressiva da chupeta (preferencialmente antes dos 3 anos).", score: 0.5, ref: "SBP. Odontopediatria, 2022" },
            { item: "Orientou sobre alimentação saudável e não uso de tela durante refeições.", score: 0.5, ref: "MS. Guia Alimentar 0–2 anos, 2022" },
            { item: "Agendou retorno para consulta aos 3 anos.", score: 0.5, ref: "SBP. Puericultura, 2022" }
          ]
        }
      ]
    }
  },


  // ── ESTAÇÃO 7: Neonatologia — Reanimação Neonatal ────────────────────────────
  {
    id: 7,
    title: "Recém-nascido a termo com choro fraco na sala de parto",
    sub: "Maternidade — Centro Obstétrico / Sala de Parto",
    tema: "Pediatria",
    topic: "reanimacao-neonatal",
    level: "complexo",
    cardAccent: "#C62828",

    instA: {
      scenario: "Atenção Hospitalar — Maternidade, Centro Obstétrico. Mesa de reanimação neonatal equipada com O₂, máscara, ventilador de pressão positiva, material de intubação, adrenalina e volume.",
      patient: "RN a termo, masculino, nascido de cesárea eletiva. Mãe com pré-natal regular, sem intercorrências. Líquido amniótico claro.",
      complaint: "RN a termo trazido à mesa de reanimação após cesárea — choro fraco, tônus reduzido.",
      tasks: [
        "Avalie o recém-nascido de forma sistemática.",
        "Realize os procedimentos iniciais necessários na mesa de reanimação.",
        "Verbalize e justifique cada decisão clínica durante o atendimento.",
        "Realize o exame físico do recém-nascido após a estabilização.",
        "Oriente a mãe sobre o estado do bebê e os próximos passos.",
        "Incentive e oriente sobre os cuidados nas primeiras horas de vida."
      ]
    },

    instB: {
      vitals: {
        PA: "—",
        FC: "138 bpm (após estabilização)",
        FR: "46 irpm",
        Tax: "36,9°C",
        Peso: "3.350 g",
        Altura: "50 cm",
        IMC: "PC: 34 cm · IG: 39 semanas"
      },
      physicalGeneral: "Após estabilização: RN em bom estado geral, corado, ativo, chorando vigorosamente.",
      physicalSeg: [
        "FONTANELAS: Normotensas.",
        "OLHOS: Reflexo vermelho presente bilateralmente.",
        "PALATO: Íntegro.",
        "CARDIOVASCULAR: RCR 2T, sem sopros.",
        "ABDOME: Coto umbilical com 2 artérias e 1 veia.",
        "GENITÁLIA: Masculina, testículos tópicos, fimose fisiológica.",
        "COLUNA: Sem abaulamentos.",
        "ORTOLANI/BARLOW: Negativo bilateralmente.",
        "REFLEXOS PRIMITIVOS: Moro, preensão palmar e plantar, sucção — presentes."
      ],
      labs: [],
      image: {
        title: "Avaliação Inicial do RN + Apgar 1º Minuto",
        report: "AVALIAÇÃO INICIAL (após passos iniciais):\n  Gestação: 39 semanas — a termo\n  Líquido amniótico: Claro\n  Após aquecimento e estímulo: choro fraco, tônus reduzido, FC 85 bpm, respiração irregular, cianose generalizada\n\nAPGAR — 1º MINUTO:\n  FC (<100 bpm)          → 1\n  Esforço respiratório (irregular) → 1\n  Tônus muscular (flexão leve)   → 1\n  Irritabilidade reflexa (careta)  → 1\n  Cor (cianótico)          → 0\n  TOTAL: 4 (depressão leve-moderada)"
      },
      note: "O RN chega à mesa de reanimação após a cesárea. O candidato deve avaliar os 3 critérios iniciais, decidir pelo clampeamento imediato e executar os passos iniciais. O Apgar deve ser calculado verbalmente. O exame físico pós-estabilização é entregue como impresso após a estabilização clínica ser verbalizada pelo candidato.",
      patientProfile: "RN masculino de M.S. Mãe: 28 anos, primigesta, professora.",
      script: [
        { trigger: "Sobre o que aconteceu (mãe — após estabilização)", speech: "Ele estava bem? Por que foi para aquela mesa?" },
        { trigger: "Sobre amamentação", speech: "Posso amamentar agora? Quero dar o peito." },
        { trigger: "Sobre alta", speech: "Quando posso ir para o quarto com ele?" }
      ],
      hiddenInfo: [
        "A mãe não sabe que o bebê precisou de VPP — só pergunta se o candidato se aproximar para explicar."
      ],
      actorBehavior: "Mãe acordada na mesa cirúrgica, ansiosa mas cooperativa. Tom de preocupação contida. Receptiva a explicações tranquilizadoras."
    },

    instC: {
      diagnosis: "RN a termo com depressão neonatal leve-moderada ao nascimento (Apgar 4 no 1º minuto) com necessidade de VPP. Recuperação completa após reanimação (Apgar esperado 7–8 no 5º minuto). Exame físico neonatal normal.",
      differentials: [
        "RN vigoroso — afastado pelo Apgar 4, choro fraco e tônus reduzido.",
        "Sepse neonatal precoce — afastada pela ausência de febre materna, corioamnionite e líquido claro; não é o diagnóstico principal neste momento.",
        "Encefalopatia hipóxico-isquêmica — a avaliar se Apgar persistentemente baixo após reanimação adequada."
      ],
      context: "RN a termo, 39 semanas, cesárea eletiva, líquido claro. Após os passos iniciais, persiste com choro fraco, tônus reduzido, FC 85 bpm e cianose — Apgar 4 no 1º minuto. Indicação de VPP com ar ambiente (21%). Após estabilização, exame físico neonatal completo — normal.",
      justify: "O RN não atende aos 3 critérios para permanecer com a mãe (choro fraco + tônus reduzido). Após os passos iniciais, FC <100 bpm e respiração irregular indicam VPP imediata com ar ambiente (21%), conforme SBP 2021. A aspiração rotineira NÃO é indicada com líquido claro. O clampeamento deve ser imediato (RN não vigoroso que vai para a mesa).",
      expectedAnamnesis: [
        "IG ao nascimento.",
        "Características do líquido amniótico.",
        "Pré-natal: intercorrências, doenças maternas, uso de medicamentos.",
        "Cardiotocografia e vitalidade fetal intraparto."
      ],
      expectedPhysical: [
        "3 critérios iniciais: a termo? tônus? choro/respiração?",
        "Passos iniciais: aquecimento, posicionamento, aspiração (somente se obstrução), estimulação.",
        "FC após passos iniciais: <100 bpm → VPP.",
        "Cálculo do Apgar: verbalizar os 5 critérios com as notas.",
        "Exame físico neonatal sistemático cabeça → pés (após estabilização).",
        "Reflexos primitivos: Moro, preensão palmar/plantar, sucção, Babinski."
      ],
      expectedExams: [
        { exam: "SpO₂ (oxímetro neonatal — pulso pré-ductal, mão direita)", justify: "Monitorar saturação durante a reanimação", expected: "Melhora progressiva após VPP" },
        { exam: "Glicemia capilar", justify: "Triagem de hipoglicemia neonatal", expected: "Normal neste caso" },
        { exam: "Gasometria", justify: "Se Apgar persistentemente baixo após reanimação adequada", expected: "Não indicada neste caso" }
      ],
      expectedConduct: [
        "Passos iniciais: Clampeamento imediato do cordão → mesa de reanimação → aquecer → posicionar (pescoço em leve extensão) → aspirar (somente se obstrução visível com líquido claro) → estimular (friccionar dorso ou solas dos pés).",
        "VPP: Iniciar com ar ambiente (FiO₂ 21%). Máscara cobrindo nariz e boca. Frequência: 40–60 movimentos/min. Verificar expansão torácica. Avaliar FC após 30 segundos.",
        "Progressão: FC ≥100 após VPP → manter suporte, monitorar. FC <60 após VPP adequada → aumentar FiO₂, checar técnica → intubação + massagem 3:1 + adrenalina.",
        "Após estabilização: Exame físico neonatal completo. Cuidados de rotina: vitamina K 1 mg IM, nitrato de prata ou eritromicina ocular, identificação, triagem neonatal (teste do pezinho a partir de 48h, orelhinha, olhinho, coraçãozinho).",
        "Orientações à mãe: Explicar que o bebê precisou de ajuda para começar a respirar mas está bem agora. Incentivar amamentação na primeira hora."
      ],
      expectedCommunication: [
        "Apresentação: nome, função, tom calmo e organizador.",
        "Comunicação do diagnóstico: explicar à mãe que o bebê precisou de ajuda para respirar na mesa, mas que está bem e os exames estão normais.",
        "Escuta ativa: responder à pergunta sobre amamentação com afirmação positiva e encorajamento."
      ],
      criticalErrors: [
        "Iniciar VPP com O₂ 100% sem antes tentar ar ambiente (21%) — erro crítico (SBP 2021).",
        "Não iniciar VPP com FC <100 bpm após os passos iniciais.",
        "Iniciar massagem cardíaca sem VPP prévia adequada.",
        "Aspirar rotineiramente com líquido amniótico claro — não recomendado.",
        "Fazer clampeamento oportuno em RN não vigoroso que vai para a mesa de reanimação."
      ]
    },

    instD: {
      title: "CHECKLIST — REANIMAÇÃO NEONATAL E EXAME FÍSICO DO RN A TERMO",
      sections: [
        {
          h: "BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
          items: [
            { item: "Comunicou à mãe de forma clara e tranquilizadora o que aconteceu com o bebê.", score: 0.5, ref: "CFM, Res. 2.232/2019" },
            { item: "Incentivou o contato pele a pele e a amamentação na primeira hora após estabilização.", score: 0.5, ref: "MS. Atenção ao RN, 2020" }
          ]
        },
        {
          h: "BLOCO 2 — ANAMNESE / AVALIAÇÃO INICIAL",
          items: [
            { item: "Avaliou os 3 critérios iniciais: a termo? tônus adequado? choro/respiração?", score: 1.0, ref: "SBP. Reanimação Neonatal, 2021" },
            { item: "Decidiu pelo clampeamento imediato (RN não vigoroso para mesa de reanimação).", score: 0.5, ref: "SBP. Reanimação Neonatal, 2021" }
          ]
        },
        {
          h: "BLOCO 3 — EXAME FÍSICO / PASSOS INICIAIS",
          items: [
            { item: "Realizou passos iniciais: aqueceu, posicionou, estimulou (sem aspirar com líquido claro).", score: 1.0, ref: "SBP. Reanimação Neonatal, 2021" },
            { item: "Calculou e verbalizou o Apgar corretamente (total 4 no 1º minuto, 5 critérios).", score: 1.0, ref: "SBP. Reanimação Neonatal, 2021" },
            { item: "Realizou exame físico neonatal sistemático após estabilização (cabeça → pés).", score: 1.0, ref: "MS. Atenção ao RN, 2020" },
            { item: "Avaliou e verbalizou os reflexos primitivos (Moro, preensão, sucção).", score: 0.5, ref: "MS. Atenção ao RN, 2020" }
          ]
        },
        {
          h: "BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO",
          items: [
            { item: "Indicou VPP com ar ambiente (FiO₂ 21%) — não com O₂ 100% — pela FC <100 bpm.", score: 1.5, ref: "SBP. Reanimação Neonatal, 2021" },
            { item: "Avaliou a resposta à VPP e descreveu os critérios de progressão.", score: 0.5, ref: "SBP. Reanimação Neonatal, 2021" }
          ]
        },
        {
          h: "BLOCO 5 — CONDUTA E ORIENTAÇÃO AO PACIENTE",
          items: [
            { item: "Indicou cuidados de rotina do RN: vitamina K IM, profilaxia ocular, triagens neonatais.", score: 0.5, ref: "MS. Atenção ao RN, 2020" },
            { item: "Orientou a mãe sobre amamentação na primeira hora e contato pele a pele.", score: 0.5, ref: "MS. Atenção ao RN, 2020" }
          ]
        }
      ]
    }
  },


  // ── ESTAÇÃO 8: Neonatologia — Doença da Membrana Hialina ────────────────────
  {
    id: 8,
    title: "RN com 2 horas de vida com 'respiração estranha' e gemido",
    sub: "Maternidade / UTI Neonatal",
    tema: "Pediatria",
    topic: "membrana-hialina",
    level: "complexo",
    cardAccent: "#37474F",

    instA: {
      scenario: "Atenção Hospitalar — Maternidade, alojamento conjunto / UTI Neonatal. Berço aquecido, oxímetro, O₂, CPAP nasal disponíveis.",
      patient: "RN masculino, 2 horas de vida, 36 semanas, cesárea eletiva. Mãe diabética gestacional. A mãe refere que o bebê está com 'respiração estranha' e 'fazendo barulho'.",
      complaint: "RN de 36 semanas com 2 horas de vida com desconforto respiratório — gemido e respiração rápida.",
      tasks: [
        "Avalie o RN de forma sistemática.",
        "Verbalize a avaliação respiratória de forma estruturada.",
        "Solicite os exames complementares que julgar pertinentes e interprete-os.",
        "Formule a hipótese diagnóstica principal e os diagnósticos diferenciais.",
        "Defina a conduta adequada e comunique à mãe."
      ]
    },

    instB: {
      vitals: {
        PA: "—",
        FC: "152 bpm",
        FR: "74 irpm",
        Tax: "36,8°C",
        Peso: "3.100 g",
        Altura: "49 cm",
        IMC: "IG: 38 semanas"
      },
      physicalGeneral: "RN com desconforto respiratório moderado, gemência expiratória audível.",
      physicalSeg: [
        "SpO₂: 91% em ar ambiente.",
        "RESPIRATÓRIO: Taquipneia (74 irpm), gemência expiratória audível sem estetoscópio, retração intercostal e xifoidea, batimento de asa de nariz.",
        "CARDIOVASCULAR: Taquicardia, sem sopros.",
        "TÔNUS: Levemente reduzido.",
        "ESTADO GERAL: Comprometido pelo desconforto respiratório."
      ],
      labs: [
        { test: "pH", val: "7,24", ref: "7,35–7,45", alt: true },
        { test: "pCO₂", val: "55 mmHg", ref: "35–45", alt: true },
        { test: "pO₂", val: "42 mmHg", ref: "60–80", alt: true },
        { test: "HCO₃", val: "23 mEq/L", ref: "22–26", alt: false },
        { test: "BE", val: "-3", ref: "-2 a +2", alt: true }
      ],
      image: {
        title: "Escore de Silverman-Andersen + RX de Tórax",
        report: "SILVERMAN-ANDERSEN:\n  Balanço toraco-abdominal → 0\n  Retração intercostal     → 1\n  Retração xifoidea        → 1\n  Batimento de asa de nariz → 1\n  Gemência expiratória     → 2 (audível sem estetoscópio)\n  TOTAL: 5 — desconforto moderado\n\nRX DE TÓRAX:\n  Infiltrado reticulogranular difuso bilateral, broncograma aéreo proeminente, aspecto em 'vidro despolido'. Pulmões com volume reduzido.\n  CONCLUSÃO: Padrão sugestivo de Doença da Membrana Hialina (DMH)."
      },
      note: "O Silverman-Andersen é avaliado verbalmente pelo candidato — entregar a tabela após a verbalização da avaliação de cada parâmetro. RX e gasometria somente se solicitados verbalmente.",
      patientProfile: "RN masculino de C.R. Mãe: 32 anos, professora, diabética gestacional.",
      script: [
        { trigger: "Preocupação inicial (mãe)", speech: "Esse barulhinho é normal? Ele parece com dificuldade de respirar." },
        { trigger: "Sobre diabetes", speech: "Eu tive diabetes na gravidez, fiz dieta e insulina no final." },
        { trigger: "Pergunta ativa", speech: "É grave? Vai precisar de UTI?" },
        { trigger: "Pergunta ativa", speech: "Consigo amamentar? Posso ficar com ele?" }
      ],
      hiddenInfo: [
        "A mãe tomou corticoide antenatal apenas 1 dose (incompleta) — só revela se perguntada sobre uso de medicamentos na gestação.",
        "Não houve sofrimento fetal intraparto — só relevante se o candidato perguntar sobre CTG e vitalidade fetal."
      ],
      actorBehavior: "Mãe preocupada, deitada no leito, ainda em recuperação pós-cirúrgica. Tom ansioso mas controlado. Muito receptiva a explicações."
    },

    instC: {
      diagnosis: "Doença da Membrana Hialina (DMH) / Síndrome do Desconforto Respiratório do RN — prematuro tardio (38 semanas), filho de mãe diabética gestacional (fatores de risco para deficiência de surfactante).",
      differentials: [
        "Taquipneia Transitória do RN (TTRN) — considerar pela cesárea eletiva sem trabalho de parto; diferenciada pela persistência >6h, padrão RX diferente (infiltrado perihilar, líquido na cissura) e Silverman mais leve.",
        "Pneumonia neonatal — considerar se história de corioamnionite, febre materna ou rotura prolongada de membranas; sem esses fatores, menos provável.",
        "Hipertensão pulmonar persistente do RN — considerar se cianose sem melhora ao O₂ e RX pouco alterado."
      ],
      context: "RN de 36 semanas (prematuro), filho de mãe diabética gestacional, com desconforto respiratório moderado desde as primeiras horas de vida (Silverman 5), SpO₂ 91%, RX com padrão em vidro despolido e broncograma aéreo — diagnóstico de DMH. A diabetes materna retarda a maturação pulmonar fetal.",
      justify: "A DMH resulta da deficiência de surfactante, que estabiliza os alvéolos. Fatores de risco neste caso: prematuridade tardia (38 semanas — maturação pulmonar ainda incompleta) e filho de mãe diabética (hiperinsulinismo fetal inibe a síntese de surfactante). O quadro clínico (taquipneia, gemência, Silverman 5) e o RX (vidro despolido, broncograma, volume reduzido) são clássicos.",
      expectedAnamnesis: [
        "IG e tipo de parto.",
        "Diabetes gestacional: controle, uso de insulina, hemoglobina glicada.",
        "Uso de corticoide antenatal (betametasona).",
        "Sofrimento fetal intraparto (CTG, pH do cordão).",
        "Rotura de membranas e características do líquido amniótico.",
        "Febre materna / corioamnionite."
      ],
      expectedPhysical: [
        "FR (taquipneia neonatal: >60 irpm).",
        "SpO₂ pré-ductal (mão direita).",
        "Cálculo do Escore de Silverman-Andersen (5 parâmetros).",
        "Ausculta pulmonar: MV reduzido, sem crepitações grossas.",
        "Avaliação do tônus e estado geral."
      ],
      expectedExams: [
        { exam: "RX de tórax", justify: "Confirmar DMH e afastar outras causas", expected: "Vidro despolido bilateral, broncograma" },
        { exam: "Gasometria arterial", justify: "Avaliar gravidade: acidose respiratória", expected: "pH 7,24, pCO₂ 55, pO₂ 42" },
        { exam: "Glicemia capilar", justify: "Triagem de hipoglicemia (filho de diabética)", expected: "Avaliar" },
        { exam: "Hemograma + hemocultura", justify: "Afastar pneumonia/sepse neonatal", expected: "Considerar antes de ATB" }
      ],
      expectedConduct: [
        "Farmacológica: Surfactante exógeno (poractant alfa ou beractant) intratraqueal — indicado se FiO₂ >30% em CPAP ou se falha do CPAP. Técnica INSURE (INtubação → SURfactante → Extubação para CPAP) ou LISA/MIST se disponível. Antibioticoterapia empírica enquanto aguarda culturas (ampicilina + gentamicina) se não for possível afastar sepse.",
        "Não farmacológica: CPAP nasal (pressão 5–7 cmH₂O) como primeira linha. O₂ suplementar para manter SpO₂ 91–95% (evitar hiperoxia no prematuro). Manter temperatura, glicemia e suporte nutricional.",
        "Encaminhamento: Transferência imediata para UTI Neonatal.",
        "Orientações à mãe: Explicar que o bebê tem dificuldade para respirar porque o pulmão ainda não produziu suficiente da substância que o ajuda a se expandir. Informar sobre a necessidade de UTI, que a amamentação será apoiada (ordenha se necessário) e que ela poderá visitar o bebê.",
        "Seguimento: Monitoração contínua em UTI. Reavaliação da necessidade de surfactante em 6–12h."
      ],
      expectedCommunication: [
        "Apresentação: nome, função, tom calmo e empático com mãe em recuperação pós-cirúrgica.",
        "Comunicação do diagnóstico: explicar de forma acessível que o pulmão do bebê precisa de ajuda para funcionar, que o tratamento existe e é eficaz, e que ele estará na UTI com monitoração contínua.",
        "Escuta ativa: confirmar que a mãe poderá amamentar (com apoio da ordenha) e visitar o filho."
      ],
      criticalErrors: [
        "Não reconhecer desconforto respiratório moderado (Silverman 5, SpO₂ 91%).",
        "Não solicitar RX de tórax.",
        "Não indicar CPAP nasal como primeira linha.",
        "Confundir com TTRN e atrasar o tratamento (TTRN é diagnóstico de exclusão, melhora em 24–72h).",
        "Não transferir para UTI Neonatal."
      ]
    },

    instD: {
      title: "CHECKLIST — DESCONFORTO RESPIRATÓRIO NEONATAL: DOENÇA DA MEMBRANA HIALINA",
      sections: [
        {
          h: "BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
          items: [
            { item: "Apresentou-se e abordou a mãe em recuperação com empatia e clareza.", score: 0.5, ref: "CFM, Res. 2.232/2019" },
            { item: "Explicou o diagnóstico de forma acessível (pulmão do bebê precisa de ajuda).", score: 0.5, ref: "MS. Comunicação em Saúde, 2022" },
            { item: "Confirmou que a amamentação será apoiada e que a mãe poderá visitar o filho.", score: 0.5, ref: "MS. Atenção ao RN, 2020" }
          ]
        },
        {
          h: "BLOCO 2 — ANAMNESE",
          items: [
            { item: "Investigou IG, tipo de parto e diabetes gestacional.", score: 0.5, ref: "SBP. Reanimação Neonatal, 2021" },
            { item: "Perguntou sobre uso de corticoide antenatal.", score: 0.5, ref: "ERS. Consensus RDS, 2022" },
            { item: "Perguntou sobre sofrimento fetal e características do líquido amniótico.", score: 0.5, ref: "SBP. Reanimação Neonatal, 2021" }
          ]
        },
        {
          h: "BLOCO 3 — EXAME FÍSICO",
          items: [
            { item: "Avaliou FR (74 irpm — taquipneia neonatal) e SpO₂ (91%).", score: 0.5, ref: "SBP. Reanimação Neonatal, 2021" },
            { item: "Calculou e verbalizou o Silverman-Andersen corretamente (total 5 — desconforto moderado).", score: 1.5, ref: "MS. Atenção ao RN, 2020" }
          ]
        },
        {
          h: "BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO",
          items: [
            { item: "Solicitou RX de tórax com justificativa.", score: 0.5, ref: "ERS. Consensus RDS, 2022" },
            { item: "Solicitou gasometria arterial com justificativa.", score: 0.5, ref: "ERS. Consensus RDS, 2022" },
            { item: "Formulou diagnóstico correto: DMH em prematuro tardio filho de mãe diabética.", score: 1.0, ref: "ERS. Consensus RDS, 2022" }
          ]
        },
        {
          h: "BLOCO 5 — CONDUTA E ORIENTAÇÃO AO PACIENTE",
          items: [
            { item: "Indicou CPAP nasal como primeira linha de suporte respiratório.", score: 1.0, ref: "ERS. Consensus RDS, 2022 · SBP, 2021" },
            { item: "Mencionou surfactante exógeno como próximo passo se falha do CPAP.", score: 0.5, ref: "ERS. Consensus RDS, 2022" },
            { item: "Indicou transferência para UTI Neonatal.", score: 0.5, ref: "MS. Atenção ao RN, 2020" }
          ]
        }
      ]
    }
  },


  // ── ESTAÇÃO 9: Neonatologia — Icterícia Neonatal / Incompatibilidade Rh ──────
  {
    id: 9,
    title: "RN de 36 horas de vida ficando 'amarelinho'",
    sub: "Maternidade — Alojamento Conjunto",
    tema: "Pediatria",
    topic: "ictericia-neonatal",
    level: "complexo",
    cardAccent: "#F9A825",

    instA: {
      scenario: "Atenção Hospitalar — Maternidade, alojamento conjunto. A enfermeira solicita avaliação do RN.",
      patient: "RN, 36 horas de vida, masculino. Parto normal a termo. Mãe O negativo, RN A positivo. A mãe percebeu que o bebê 'está ficando amarelinho'.",
      complaint: "RN de 36 horas de vida com icterícia progressiva — mãe O negativo, RN Rh positivo.",
      tasks: [
        "Apresente-se e acolha a mãe de forma empática.",
        "Realize anamnese sobre o quadro atual do recém-nascido.",
        "Solicite e interprete o exame físico.",
        "Solicite os exames laboratoriais que julgar pertinentes e interprete-os.",
        "Formule o diagnóstico e indique o tratamento adequado com justificativa.",
        "Comunique à mãe o diagnóstico e a conduta de forma clara e empática."
      ]
    },

    instB: {
      vitals: {
        PA: "—",
        FC: "148 bpm",
        FR: "44 irpm",
        Tax: "36,8°C",
        Peso: "3.100 g (ao nascer: 3.300 g)",
        Altura: "—",
        IMC: "IG: 39 semanas · Perda: ~6%"
      },
      physicalGeneral: "Regular, hipoativo, sugando pouco.",
      physicalSeg: [
        "ICTERÍCIA — ZONA DE KRAMER: Zona IV (membros superiores e inferiores até os joelhos).",
        "HEPATOESPLENOMEGALIA: Esplenomegalia leve (+2 cm).",
        "PALIDEZ: Leve.",
        "URINA: Colúria (urina escura).",
        "FONTANELA: Normotensa.",
        "NEUROLÓGICO: Hipoativo, hipotônico."
      ],
      labs: [
        { test: "Bilirrubina total", val: "18,5 mg/dL", ref: "—", alt: true },
        { test: "Bilirrubina direta", val: "0,9 mg/dL", ref: "—", alt: false },
        { test: "Bilirrubina indireta", val: "17,6 mg/dL", ref: "—", alt: true },
        { test: "Hemoglobina", val: "10,2 g/dL", ref: "—", alt: true },
        { test: "Hematócrito", val: "30%", ref: "—", alt: true },
        { test: "Reticulócitos", val: "12%", ref: "—", alt: true },
        { test: "Coombs direto (TCD)", val: "Positivo 3+", ref: "Negativo", alt: true },
        { test: "Grupo sanguíneo RN", val: "A Rh positivo", ref: "—", alt: false },
        { test: "Grupo sanguíneo mãe", val: "O Rh negativo", ref: "—", alt: false }
      ],
      image: null,
      note: "Entregar o exame físico após solicitação verbal. Os exames laboratoriais são entregues somente após solicitação específica de cada exame ou do conjunto (bilirrubinas, hemograma, tipagem sanguínea, Coombs).",
      patientProfile: "RN masculino de T.O. Mãe: 26 anos, auxiliar administrativa, Rh negativo (não sabia que poderia causar problema).",
      script: [
        { trigger: "Queixa principal", speech: "Doutor, ele está ficando amarelinho. Isso é normal?" },
        { trigger: "Sobre amamentação", speech: "Ele está mamando pouco, fica sonolento. Ontem mamava mais." },
        { trigger: "Sobre urina", speech: "Achei que a fralda estava com um xixi mais escuro hoje." },
        { trigger: "Sobre o tipo sanguíneo", speech: "Eu sei que sou sangue O negativo, mas nunca me explicaram o que isso significava na gravidez." },
        { trigger: "Pergunta ativa", speech: "Vai precisar fazer alguma coisa? Posso continuar amamentando?" },
        { trigger: "Pergunta ativa", speech: "Isso foi por causa do meu sangue? Eu causei isso?" }
      ],
      hiddenInfo: [
        "A mãe não recebeu imunoglobulina anti-D (RhoGAM) na gestação anterior — só revela se perguntada sobre gestações anteriores e uso de anti-D.",
        "O RN ficou amarelado desde as primeiras 12 horas de vida, mas a mãe não avisou — só revela se perguntada sobre quando exatamente percebeu."
      ],
      actorBehavior: "Mãe preocupada, com sentimento de culpa ao descobrir que o tipo sanguíneo dela pode ter causado o problema. Tom ansioso e culpado. Receptiva a esclarecimentos."
    },

    instC: {
      diagnosis: "Doença Hemolítica do Recém-Nascido (DHRN) por incompatibilidade Rh (anti-D) com hiperbilirrubinemia grave e anemia hemolítica.",
      differentials: [
        "Icterícia fisiológica — afastada pelo início precoce (<24h, conforme informação escondida), progressão rápida, Coombs positivo e anemia hemolítica.",
        "Incompatibilidade ABO — considerar (mãe O, RN A), mas o Coombs fortemente positivo e a gravidade apontam para incompatibilidade Rh como mecanismo principal.",
        "Esferocitose hereditária — afastada pela ausência de história familiar e pela presença de Coombs positivo."
      ],
      context: "RN de 36 horas, a termo, com icterícia zona IV de Kramer, bilirrubina total 18,5 mg/dL (predominantemente indireta), anemia hemolítica (Hb 10,2g/dL, reticulocitose 12%), Coombs direto positivo 3+, esplenomegalia e colúria. Mãe O Rh negativo, RN A Rh positivo — incompatibilidade Rh com aloimunização materna (anti-D). Indicação de fototerapia intensiva e avaliação para exsanguineotransfusão pelo nomograma de Bhutani.",
      justify: "A incompatibilidade Rh ocorre quando mãe Rh negativa é sensibilizada por hemácias Rh positivas do feto (geralmente em gestação anterior ou procedimento invasivo) e produz anticorpos IgG anti-D, que atravessam a placenta e destroem as hemácias fetais. O Coombs direto positivo 3+ confirma hemólise mediada por anticorpos. A BT 18,5 mg/dL em RN com 36h de vida é patológica e requer fototerapia intensiva imediata com avaliação pelo nomograma de Bhutani para exsanguineotransfusão.",
      expectedAnamnesis: [
        "Quando a mãe percebeu a icterícia pela primeira vez (início nas primeiras 24h?).",
        "Alimentação: volume e frequência das mamadas.",
        "Diurese: número e cor das fraldas.",
        "Colúria e acolia fecal.",
        "Grupo sanguíneo materno (já conhecido: O Rh negativo).",
        "Gestações anteriores: número, abortamentos, procedimentos invasivos.",
        "Uso de imunoglobulina anti-D na gestação atual e anterior.",
        "Pré-natal: pesquisa de anticorpos irregulares (Coombs indireto materno)."
      ],
      expectedPhysical: [
        "Estado geral e nível de alerta (hipoatividade = sinal de alerta neurológico).",
        "Classificação da icterícia pelas zonas de Kramer (I a V).",
        "Pesquisa de palidez (anemia hemolítica).",
        "Pesquisa de hepatoesplenomegalia.",
        "Avaliação neurológica: tônus, reflexos, choro (sinais de encefalopatia bilirrubínica).",
        "Avaliação das fezes (acolia) e urina (colúria)."
      ],
      expectedExams: [
        { exam: "Bilirrubinas total, direta e indireta", justify: "Quantificar e classificar a hiperbilirrubinemia", expected: "BT 18,5 mg/dL, BI 17,6 mg/dL" },
        { exam: "Hemograma com reticulócitos", justify: "Avaliar anemia hemolítica", expected: "Hb 10,2, Ht 30%, Retic 12%" },
        { exam: "Coombs direto (TCD)", justify: "Confirmar hemólise por anticorpos", expected: "Positivo 3+" },
        { exam: "Tipagem sanguínea do RN", justify: "Confirmar incompatibilidade", expected: "A Rh positivo" }
      ],
      expectedConduct: [
        "Farmacológica: Fototerapia intensiva imediata (indicada pela BT e pela idade em horas no nomograma de Bhutani, com fatores de risco — Coombs positivo, hemólise, BI elevada). Imunoglobulina EV (0,5–1 g/kg) se fototerapia intensiva falhar ou BT próxima ao limiar de exsanguineotransfusão. Exsanguineotransfusão se atingir o limiar do nomograma de Bhutani para alto risco — não há valor fixo universal.",
        "Não farmacológica: Manter amamentação (não suspender). Hidratação adequada. Monitorar bilirrubina sérica a cada 4–6h durante fototerapia intensiva.",
        "Encaminhamento: Banco de sangue para tipagem e reserva de hemácias para eventual exsanguineotransfusão.",
        "Orientações à mãe: Explicar a incompatibilidade Rh sem culpabilizá-la. Esclarecer que o problema foi identificado e o tratamento será iniciado agora. Confirmar que a amamentação será mantida. Orientar sobre a fototerapia (olhos protegidos, não significa que o bebê está em perigo imediato).",
        "Seguimento: Controle de BT a cada 4–6h durante fototerapia intensiva. Reavaliação pelo nomograma. Na próxima gestação: Coombs indireto materno e imunoglobulina anti-D profilática."
      ],
      expectedCommunication: [
        "Apresentação: nome, função, tom acolhedor com mãe culpada.",
        "Comunicação do diagnóstico: explicar que há uma diferença no tipo de sangue entre ela e o bebê, e que isso causou uma reação que está sendo tratada. Acolher o sentimento de culpa sem reforçá-lo.",
        "Escuta ativa: responder à pergunta 'eu causei isso?' com empatia e clareza técnica."
      ],
      criticalErrors: [
        "Não solicitar Coombs direto.",
        "Não identificar a incompatibilidade Rh como causa da hemólise.",
        "Não indicar fototerapia intensiva imediatamente.",
        "Suspender amamentação sem indicação.",
        "Citar valor fixo de BT como critério universal de exsanguineotransfusão sem mencionar o nomograma de Bhutani e os fatores de risco individuais."
      ]
    },

    instD: {
      title: "CHECKLIST — ICTERÍCIA NEONATAL POR INCOMPATIBILIDADE RH",
      sections: [
        {
          h: "BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
          items: [
            { item: "Apresentou-se e acolheu o sentimento de culpa da mãe com empatia.", score: 0.5, ref: "CFM, Res. 2.232/2019" },
            { item: "Explicou a incompatibilidade Rh em linguagem acessível, sem culpabilizar.", score: 0.5, ref: "MS. Comunicação em Saúde, 2022" },
            { item: "Confirmou que a amamentação será mantida.", score: 0.5, ref: "SBP. Hiperbilirrubinemia, 2021" }
          ]
        },
        {
          h: "BLOCO 2 — ANAMNESE",
          items: [
            { item: "Perguntou quando percebeu a icterícia (início precoce <24h = patológico).", score: 0.5, ref: "SBP. Hiperbilirrubinemia, 2021" },
            { item: "Investigou alimentação, diurese, colúria e acolia.", score: 0.5, ref: "SBP. Hiperbilirrubinemia, 2021" },
            { item: "Perguntou sobre gestações anteriores e uso de imunoglobulina anti-D.", score: 0.5, ref: "SBP. Hiperbilirrubinemia, 2021" }
          ]
        },
        {
          h: "BLOCO 3 — EXAME FÍSICO",
          items: [
            { item: "Avaliou e classificou a icterícia pelas zonas de Kramer (identificou Zona IV).", score: 1.0, ref: "SBP. Hiperbilirrubinemia, 2021" },
            { item: "Pesquisou e identificou palidez e esplenomegalia.", score: 0.5, ref: "SBP. Hiperbilirrubinemia, 2021" },
            { item: "Avaliou estado neurológico (hipoatividade, tônus).", score: 0.5, ref: "SBP. Hiperbilirrubinemia, 2021" }
          ]
        },
        {
          h: "BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO",
          items: [
            { item: "Solicitou bilirrubinas (total, direta, indireta), hemograma com reticulócitos e Coombs direto.", score: 1.0, ref: "SBP. Hiperbilirrubinemia, 2021" },
            { item: "Identificou incompatibilidade Rh como causa (mãe O Rh-, RN Rh+, Coombs 3+, hemólise).", score: 1.0, ref: "SBP. Hiperbilirrubinemia, 2021" }
          ]
        },
        {
          h: "BLOCO 5 — CONDUTA E ORIENTAÇÃO AO PACIENTE",
          items: [
            { item: "Indicou fototerapia intensiva imediatamente com justificativa.", score: 1.0, ref: "SBP. Hiperbilirrubinemia, 2021 · AAP, 2022" },
            { item: "Avaliou e mencionou critérios para exsanguineotransfusão pelo nomograma de Bhutani (não citou valor fixo).", score: 1.0, ref: "SBP. Hiperbilirrubinemia, 2021" },
            { item: "Orientou controle seriado de bilirrubina (a cada 4–6h durante fototerapia intensiva).", score: 0.5, ref: "SBP. Hiperbilirrubinemia, 2021" }
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
    tema: "Pediatria",
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
  }

];


export default pediatriaStations;
