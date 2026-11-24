// Casos de Puericultura (2)
const puericultura = [
  // ── ESTAÇÃO 1: Puericultura — Consulta de Rotina 4 meses ───────────────
  {
    id: 1,
    title: "Criança de 4 meses para consulta de rotina",
    sub: "UBS — Atenção Primária",
    tema: 'Puericultura',
    topic: "vacinação",
    level: "fácil",
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

  // ── ESTAÇÃO 6: Puericultura — DNPM 2,5 anos ──────────────────────────────────
  {
    id: 6,
    title: "Criança de 2 anos e meio para consulta de rotina",
    sub: "UBS — Atenção Primária",
    tema: 'Puericultura',
    topic: "puericultura-dnpm",
    level: "fácil",
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
];

export default puericultura;
