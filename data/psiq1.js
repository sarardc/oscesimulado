const psiq1stations = [

{
  id: 1,
  title: "Idoso que parou de comer e diz que 'não tem mais sentido'",
  sub: "UBS — Consulta agendada por agente comunitário de saúde",
  tema: "Psiquiatria",
  topic: "Episódio depressivo maior em idoso / luto patológico",
  level: "moderado",
  cardAccent: "#37474F",

  instA: {
    scenario: "Atenção Primária — UBS. Consultório de clínica geral, turno matutino. O agente comunitário de saúde trouxe o paciente após visita domiciliar de rotina, preocupado com o estado do senhor.",
    patient: "J.O., 71 anos, masculino, aposentado (ex-pedreiro), viúvo há 8 meses, mora sozinho.",
    complaint: "ACS relata que o senhor está 'sumido', não abre mais a porta, parou de ir à igreja e perdeu muito peso. O paciente diz que 'não tem mais sentido' continuar.",
    tasks: [
      "Realize a anamnese psiquiátrica e geriátrica dirigida ao caso.",
      "Diferencie luto normal de episódio depressivo maior.",
      "Avalie o risco de suicídio de forma direta e estruturada.",
      "Solicite os exames complementares pertinentes para exclusão de causas orgânicas.",
      "Proponha a conduta terapêutica adequada e o plano de seguimento."
    ]
  },

  instB: {
    vitals: { PA: "148/88 mmHg", FC: "68 bpm", FR: "15 irpm", Tax: "36,3°C", Peso: "58 kg", Altura: "1,68 m", IMC: "20,5 kg/m²" },
    physicalGeneral: "Paciente em regular estado geral, emagrecido, fácies de tristeza, cabelos e barba por fazer, roupa inadequada e suja. Lúcido, orientado no tempo e espaço. Mucosas levemente descoradas. Hidratação limítrofe. Marcha lenta, sem auxílio.",
    physicalSeg: [
      "Neurológico: Sem déficits focais motores ou sensitivos. Fala lenta, voz baixa. Mini-Exame do Estado Mental (MEEM): 24/30 (perda em orientação temporal e memória recente — limítrofe para escolaridade baixa).",
      "Cardiovascular: BRNF em 2T, sem sopros. Pulsos presentes e simétricos.",
      "Abdominal: Plano, RHA presentes, indolor à palpação. Sem visceromegalias.",
      "Dermatológico: Sem lesões de automutilação. Turgor reduzido."
    ],
    labs: [
      { test: "Hemograma completo", val: "Hb 10,8 g/dL, VCM 72 fL, HCM 22 pg", ref: "Hb >13 (H); VCM 80–96; HCM 27–33", alt: true },
      { test: "TSH", val: "6,8 mUI/L", ref: "0,4–4,0 mUI/L", alt: true },
      { test: "T4 livre", val: "0,7 ng/dL", ref: "0,8–1,8 ng/dL", alt: true },
      { test: "Glicemia de jejum", val: "112 mg/dL", ref: "70–99 mg/dL", alt: true },
      { test: "Sódio", val: "132 mEq/L", ref: "135–145 mEq/L", alt: true },
      { test: "Creatinina", val: "1,1 mg/dL", ref: "0,7–1,2 mg/dL", alt: false },
      { test: "Vitamina B12", val: "180 pg/mL", ref: "200–900 pg/mL", alt: true },
      { test: "Vitamina D", val: "14 ng/mL", ref: ">30 ng/mL", alt: true }
    ],
    image: null,
    note: "Entregar sinais vitais e peso ao início (ressaltar a perda de 9 kg em 8 meses, informada pelo ACS). Entregar exames laboratoriais somente se solicitados pelo candidato. O ator deve estar sentado, cabisbaixo, respondendo de forma breve. O ACS pode ser interpretado por um segundo ator ou professor, disponível para fornecer contexto externo se o candidato perguntar.",
    patientProfile: "J.O., 71 anos, masculino, aposentado (ex-pedreiro), viúvo há 8 meses (esposa faleceu de câncer). Dois filhos adultos que moram em outra cidade. Frequentava a igreja três vezes por semana. Natural de Quixadá/CE, reside em Fortaleza há 30 anos.",
    script: [
      { trigger: "Abordagem inicial", speech: "\"Eu vim porque o menino da saúde ficou me enchendo o saco... mas tô bem não, doutor. Só tô velho mesmo.\"" },
      { trigger: "Sobre a esposa", speech: "\"Ela foi embora faz oito meses. Quarenta e três anos juntos. Agora não tem mais graça nada.\"" },
      { trigger: "Sobre alimentação", speech: "\"Não sinto fome. Quando lembro de comer já é tarde. Não tem ninguém pra cozinhar mais.\"" },
      { trigger: "Sobre sono", speech: "\"Durmo pouco. Acordo de madrugada e fico pensando nela. Aí não dorme mais.\"" },
      { trigger: "Sobre atividades e prazer", speech: "\"Parei de ir na missa. Parei de conversar com os vizinho. Não tô com vontade de nada. Nem televisão não presto atenção mais.\"" },
      { trigger: "Sobre os filhos", speech: "\"Eles ligam, mas têm a vida deles. Não quero incomodar não.\"" },
      { trigger: "Sobre pensamentos de morte", speech: "Só se perguntado diretamente: \"Às vezes fico pensando que seria bom se Deus me chamasse logo. Pra eu ir encontrar ela.\"" },
      { trigger: "Sobre plano de suicídio", speech: "Só se perguntado diretamente: \"Não, não ia fazer nada assim não. Mas se morresse dormindo ia ser um alívio.\"" },
      { trigger: "Pergunta ativa do paciente", speech: "\"O senhor(a) acha que eu tô ficando gagá? Às vezes esqueço as coisa.\"" },
      { trigger: "Pergunta ativa do paciente", speech: "\"Isso que eu tô sentindo tem jeito, doutor? Ou é assim mesmo que fica quando a gente fica velho e perde a mulher?\"" }
    ],
    hiddenInfo: [
      "Ideação de morte passiva ('seria bom se Deus me chamasse logo') — revelar somente se o candidato perguntar diretamente sobre pensamentos de morte ou suicídio.",
      "Alimenta-se em média uma vez ao dia, com restos e biscoitos — revelar apenas se perguntado especificamente sobre o que e quantas vezes come por dia.",
      "Fez uso de álcool diário nas primeiras semanas após o falecimento da esposa, mas parou há 3 meses — revelar apenas se perguntado sobre uso de álcool."
    ],
    actorBehavior: "Tom apático, voz baixa e lenta, movimentos lentos. Minimiza os próprios sintomas ('é coisa da idade', 'é só saudade'). Responde ao que é perguntado mas não oferece informações espontaneamente. Demonstra emoção contida ao falar da esposa — pausa longa, olhos marejam. Apresenta leve resistência à ideia de remédio ('não quero ficar dopado'). Abre-se progressivamente quando o candidato demonstra genuíno interesse e não pressa."
  },

  instC: {
    diagnosis: "Episódio depressivo maior grave em idoso, com ideação de morte passiva, em contexto de luto complicado. Hipotireoidismo primário concomitante (TSH elevado, T4 livre baixo) como fator orgânico contribuinte. Anemia microcítica hipocrômica (provável ferropriva por desnutrição). Hiponatremia leve. CID-11: 6A70.2 / DSM-5: F32.2.",
    differentials: [
      "Luto não complicado — distingue-se da depressão maior pela presença de anedonia global, insônia terminal, perda de peso significativa (9 kg), isolamento social intenso, ideação de morte e duração de 8 meses com piora progressiva; no luto não complicado, o humor tende a oscilar e há preservação de algumas áreas de funcionamento.",
      "Demência (TCL ou demência inicial) — o MEEM limítrofe e o esquecimento relatado levantam suspeita; no entanto, a queda cognitiva pode ser pseudodemência depressiva, que melhora com tratamento da depressão; reavaliação neuropsicológica em 3–6 meses é recomendada.",
      "Hipotireoidismo como causa única — os exames confirmam hipotireoidismo, que contribui para o quadro; no entanto, a intensidade dos sintomas depressivos, a ideação de morte e o contexto de luto indicam comorbidade real com depressão maior.",
      "Síndrome do isolamento social em idoso — estado de retraimento social sem critérios plenos para depressão maior; excluído pela gravidade e número de sintomas presentes."
    ],
    context: "Idoso de 71 anos, viúvo há 8 meses, apresenta episódio depressivo maior grave com anedonia global, insônia terminal, perda de 9 kg, isolamento social, autodepreciação e ideação de morte passiva. Hipotireoidismo primário e anemia ferropriva como comorbidades orgânicas contribuintes. MEEM limítrofe exige reavaliação futura para pseudodemência depressiva vs. demência incipiente.",
    justify: "Preenche critérios DSM-5 para episódio depressivo maior grave: humor deprimido persistente, anedonia global, insônia terminal, perda de peso significativa (>5% em 1 mês), fadiga, isolamento social, sentimentos de que não há mais sentido e ideação de morte passiva — 8 dos 9 critérios presentes por >2 meses. O luto é o evento precipitante, mas a gravidade, a duração e a ideação de morte ultrapassam os limites do luto não complicado. Hipotireoidismo (TSH 6,8) é fator orgânico agravante que deve ser tratado simultaneamente.",
    expectedAnamnesis: [
      "Investigar início, evolução e intensidade do humor deprimido",
      "Pesquisar anedonia (abandono de atividades prazerosas — missa, vizinhos, TV)",
      "Investigar alterações do sono (insônia terminal de madrugada)",
      "Pesquisar alterações do apetite e quantificar a perda de peso",
      "Avaliar diretamente a ideação de morte e suicídio ('o senhor já pensou em se machucar ou em querer morrer?')",
      "Investigar presença de plano suicida",
      "Pesquisar funcionamento cognitivo (memória, orientação) — distinguir pseudodemência depressiva de demência",
      "Investigar uso de álcool (especialmente no período pós-luto)",
      "Pesquisar medicamentos em uso (interações, adesão)",
      "Investigar suporte social e familiar disponível",
      "Questionar sobre episódios depressivos ou psiquiátricos anteriores",
      "Pesquisar sintomas de hipotireoidismo (frio, prisão de ventre, lentidão, ganho de peso prévio)"
    ],
    expectedPhysical: [
      "Sinais vitais: PA elevada, bradicardia relativa (hipotireoidismo)",
      "Inspeção: emagrecimento visível, cabelos e barba descuidados, roupas inadequadas",
      "Avaliação cognitiva: aplicar MEEM (rastreio de demência vs. pseudodemência)",
      "Avaliação tireoidiana: palpação da tireoide",
      "Avaliação nutricional: mucosas, turgor cutâneo, hidratação",
      "Avaliação de automutilação: inspeção de membros superiores",
      "Avaliação neurológica básica: reflexos, marcha, equilíbrio (hipotireoidismo pode causar reflexos lentos)"
    ],
    expectedExams: [
      { exam: "TSH e T4 livre", justify: "Rastreio de hipotireoidismo em idoso com depressão", expected: "TSH 6,8 (elevado); T4 livre 0,7 (baixo)" },
      { exam: "Hemograma completo", justify: "Avaliar anemia como causa de fadiga e fraqueza", expected: "Anemia microcítica hipocrômica" },
      { exam: "Vitamina B12", justify: "Deficiência comum em idosos, causa depressão e déficit cognitivo", expected: "Baixa (180 pg/mL)" },
      { exam: "Vitamina D", justify: "Deficiência associada à depressão em idosos", expected: "Insuficiente (14 ng/mL)" },
      { exam: "Sódio", justify: "Rastreio de hiponatremia (causa confusão e depressão em idosos)", expected: "Hiponatremia leve (132 mEq/L)" },
      { exam: "Glicemia de jejum", justify: "Rastreio de DM2 em idoso com perda de peso", expected: "Alterada em jejum (112 mg/dL)" }
    ],
    expectedConduct: [
      "Farmacológica para depressão: ISRS de primeira linha em idosos: Sertralina 25 mg/dia (iniciar com dose mais baixa em idosos, titular para 50–100 mg/dia em 2–4 semanas). Alternativa: Escitalopram 5–10 mg/dia. Evitar tricíclicos em idosos (risco anticolinérgico, queda, arritmia). (RENAME 2023; MS — PCDT Depressão, 2022)",
      "Farmacológica para hipotireoidismo: Iniciar levotiroxina 25–50 mcg/dia VO em jejum, com titulação conforme TSH. Encaminhar ao endocrinologista se necessário. (Diretriz SBEM, 2022)",
      "Farmacológica para anemia ferropriva: Sulfato ferroso 300 mg/dia VO. Investigar causa da ferropenia. (RENAME 2023)",
      "Farmacológica para hiponatremia leve: Orientar hidratação oral; investigar causa (SIADH? diuréticos?). Monitorar sódio em 7–14 dias.",
      "Não farmacológica: Reintegração social progressiva; apoio do ACS com visitas domiciliares semanais; psicoterapia de suporte (luto); orientação nutricional; suplementação de vitamina D e B12.",
      "Encaminhamento: Contatar os filhos (com autorização do paciente); encaminhar ao CAPS se sem resposta em 4–6 semanas ou piora da ideação de morte.",
      "Orientações ao paciente: Explicar que o que ele sente tem nome e tratamento, que o remédio não 'dopa', que a melhora vem em semanas, que deve retornar em 2 semanas e ligar se os pensamentos de morte piorarem.",
      "Seguimento: Retorno em 2 semanas. Reavaliar sódio, hemograma e TSH em 4–6 semanas. Reavaliação cognitiva (MEEM) após 3 meses de tratamento."
    ],
    expectedCommunication: [
      "Apresentação: Apresentar-se pelo nome, agradecer o paciente por ter vindo, sentar-se ao mesmo nível, falar devagar e em voz clara.",
      "Comunicação do diagnóstico: Explicar que a tristeza profunda após uma perda grande pode se tornar uma doença que precisa de tratamento — 'não é fraqueza, não é coisa da idade'. Validar a dor da perda da esposa antes de falar sobre o diagnóstico.",
      "Escuta ativa: Deixar o senhor falar sobre a esposa com respeito, sem pressa. Usar o nome da esposa se o paciente o mencionar. Não minimizar a perda."
    ],
    criticalErrors: [
      "Não perguntar diretamente sobre ideação de morte ou suicídio, atribuindo os sintomas apenas ao luto normal",
      "Não solicitar TSH em idoso com depressão (hipotireoidismo é causa orgânica tratável e muito prevalente em idosos)",
      "Prescrever antidepressivo tricíclico em idoso (risco de queda, arritmia, retenção urinária, confusão — contraindicado como primeira linha)",
      "Dispensar o paciente sem plano de seguimento estruturado e sem acionar rede de suporte (ACS, família)",
      "Atribuir todos os sintomas ao luto normal sem avaliar critérios de depressão maior"
    ]
  },

  instD: {
    title: "CHECKLIST — IDOSO QUE PAROU DE COMER E DIZ QUE NÃO TEM MAIS SENTIDO",
    sections: [
      {
        h: "BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
        items: [
          { item: "Apresentou-se pelo nome e cumprimentou o paciente com respeito", score: 0.3, ref: "CFM nº 1.931/2009" },
          { item: "Falou de forma clara, pausada e em volume adequado (adaptação ao idoso)", score: 0.3, ref: "MS — Política Nacional de Saúde da Pessoa Idosa, 2006" },
          { item: "Validou a dor da perda da esposa sem minimizar antes de avançar para o diagnóstico", score: 0.5, ref: "MS — Política Nacional de Humanização, 2013" },
          { item: "Explicou o diagnóstico em linguagem acessível, sem usar termos como 'depressão grave' de forma abrupta", score: 0.5, ref: "MS — PCDT Depressão, 2022" }
        ]
      },
      {
        h: "BLOCO 2 — ANAMNESE",
        items: [
          { item: "Investigou início, duração e progressão dos sintomas depressivos", score: 0.5, ref: "MS — PCDT Depressão, 2022" },
          { item: "Pesquisou anedonia (abandono de atividades — missa, vizinhos, televisão)", score: 0.5, ref: "DSM-5; MS — PCDT Depressão, 2022" },
          { item: "Investigou alterações do sono (insônia terminal) e do apetite/peso", score: 0.5, ref: "MS — PCDT Depressão, 2022" },
          { item: "Perguntou diretamente sobre pensamentos de morte ou suicídio", score: 1.0, ref: "MS — PCDT Prevenção do Suicídio, 2022" },
          { item: "Investigou funcionamento cognitivo (memória, orientação) para rastrear demência", score: 0.5, ref: "MS — Diretrizes para Atenção à Saúde do Idoso, 2022" },
          { item: "Pesquisou uso de álcool e outras substâncias", score: 0.3, ref: "MS — PCDT Depressão, 2022" }
        ]
      },
      {
        h: "BLOCO 3 — EXAME FÍSICO",
        items: [
          { item: "Avaliou sinais vitais com atenção à PA e FC", score: 0.3, ref: "MS — PCDT Depressão, 2022" },
          { item: "Aplicou rastreio cognitivo (MEEM ou equivalente)", score: 0.5, ref: "MS — Diretrizes para Atenção ao Idoso, 2022" },
          { item: "Palpou a tireoide e avaliou sinais de hipotireoidismo", score: 0.5, ref: "SBEM — Diretriz Hipotireoidismo, 2022" }
        ]
      },
      {
        h: "BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO",
        items: [
          { item: "Solicitou TSH para rastreio de hipotireoidismo", score: 1.0, ref: "SBEM 2022; MS — PCDT Depressão, 2022" },
          { item: "Solicitou hemograma e vitamina B12 para rastreio de causas orgânicas de depressão", score: 0.5, ref: "MS — PCDT Depressão, 2022" },
          { item: "Formulou diagnóstico de episódio depressivo maior (diferenciando de luto não complicado)", score: 1.0, ref: "DSM-5; MS — PCDT Depressão, 2022" }
        ]
      },
      {
        h: "BLOCO 5 — CONDUTA E ORIENTAÇÃO AO PACIENTE",
        items: [
          { item: "Prescreveu ISRS em dose inicial adequada para idoso (sertralina 25–50 mg/dia) e não prescreveu tricíclico", score: 1.0, ref: "MS — PCDT Depressão, 2022; RENAME 2023" },
          { item: "Indicou tratamento do hipotireoidismo (levotiroxina)", score: 0.5, ref: "SBEM 2022; RENAME 2023" },
          { item: "Acionou rede de suporte (ACS, família, NASF/psicólogo)", score: 0.3, ref: "MS — Política Nacional de Saúde da Pessoa Idosa, 2006" },
          { item: "Estabeleceu retorno em 2 semanas e orientou sobre sinais de alarme (piora da ideação)", score: 0.3, ref: "MS — PCDT Depressão, 2022" }
        ]
      }
    ]
  }
},

{
  id: 2,
  title: "Estudante com 'mil doenças' e medo constante de estar gravemente doente",
  sub: "UBS — Demanda espontânea",
  tema: "Psiquiatria",
  topic: "Transtorno de ansiedade generalizada com somatização",
  level: "moderado",
  cardAccent: "#1565C0",

  instA: {
    scenario: "Atenção Primária — UBS. Consultório, turno da tarde. Terceira consulta da paciente na UBS nos últimos dois meses, sempre com queixas físicas diferentes.",
    patient: "F.L., 24 anos, feminino, estudante de Medicina (5º semestre), solteira, mora com os pais.",
    complaint: "Paciente retorna com novas queixas físicas: dor de cabeça frequente, tensão no peito, formigamento nas mãos e 'sensação de que algo grave vai acontecer'. Relata que pesquisa os sintomas na internet e sempre conclui que pode ter algo sério.",
    tasks: [
      "Realize a anamnese dirigida ao caso, explorando as queixas físicas e o padrão de preocupações.",
      "Identifique a natureza funcional das queixas e diferencie de causas orgânicas.",
      "Formule a hipótese diagnóstica principal e os diagnósticos diferenciais pertinentes.",
      "Proponha a conduta terapêutica adequada, incluindo abordagem das queixas somáticas.",
      "Comunique o diagnóstico à paciente de forma empática, validando os sintomas sem reforçar a busca por exames."
    ]
  },

  instB: {
    vitals: { PA: "122/78 mmHg", FC: "96 bpm", FR: "18 irpm", Tax: "36,5°C", Peso: "57 kg", Altura: "1,62 m", IMC: "21,7 kg/m²" },
    physicalGeneral: "Paciente em bom estado geral, lúcida, orientada, aparência ansiosa, inquieta na cadeira, fala rápida. Sem icterícia, cianose ou palidez. Tireoide não palpável. Ausculta cardíaca e pulmonar normais. Abdome sem alterações. Sem déficits neurológicos focais.",
    physicalSeg: [
      "Cardiovascular: BRNF em 2T, sem sopros, pulsos periféricos normais.",
      "Neurológico: Sem déficits focais. Força e sensibilidade preservadas bilateralmente (o formigamento não segue dermátomo definido — padrão funcional).",
      "Muscular: Tensão palpável em musculatura cervical e trapézio bilateralmente.",
      "GAD-7 aplicado: 17/21 — ansiedade grave."
    ],
    labs: [
      { test: "Hemograma completo", val: "Normal", ref: "—", alt: false },
      { test: "TSH", val: "1,9 mUI/L", ref: "0,4–4,0 mUI/L", alt: false },
      { test: "Glicemia de jejum", val: "86 mg/dL", ref: "70–99 mg/dL", alt: false },
      { test: "ECG (12 derivações)", val: "Ritmo sinusal, FC 94 bpm, sem alterações", ref: "Normal", alt: false },
      { test: "Neuroimagem prévia (TC crânio — consulta anterior)", val: "Sem alterações", ref: "Normal", alt: false }
    ],
    image: null,
    note: "Entregar sinais vitais ao início. Informar que esta é a terceira consulta nos últimos 2 meses. Exames laboratoriais e o resultado da TC prévia entregues somente se solicitados. O candidato deve ser avaliado especialmente por NÃO solicitar exames desnecessários e por conseguir comunicar o diagnóstico sem invalidar os sintomas físicos da paciente.",
    patientProfile: "F.L., 24 anos, feminino, estudante de Medicina (5º semestre — em contato com semiologia e propedêutica), solteira, mora com os pais. Histórico de ansiedade desde o colégio. Mãe com diagnóstico de TAG.",
    script: [
      { trigger: "Queixa inicial", speech: "\"Doutora, eu tô muito preocupada. Faz três semanas que eu tô com essa dor de cabeça que não passa, e junto vem uma sensação estranha no peito, como se fosse apertar. E meu pescoço tá todo duro.\"" },
      { trigger: "Sobre a pesquisa na internet", speech: "\"Eu sei que sou estudante de medicina e devia saber melhor, mas eu fico pesquisando e fico com medo de ter aneurisma, tumor... Eu sei que é exagero, mas não consigo parar.\"" },
      { trigger: "Sobre as preocupações", speech: "\"Eu me preocupo com tudo. Com a faculdade, com as provas, com minha mãe que tem pressão alta, com o futuro... Não tem um momento em que minha cabeça descansa.\"" },
      { trigger: "Sobre o sono", speech: "\"Demoro muito pra dormir. Fico revisando o que fiz de errado no dia, o que tenho que fazer amanhã. Minha cabeça não desliga.\"" },
      { trigger: "Sobre o formigamento", speech: "\"As mãos ficam formigando, principalmente quando fico muito tensa. Pesquisei e pode ser esclerose múltipla, ou déficit de B12...\"" },
      { trigger: "Sobre episódios de pânico", speech: "\"Não tenho aquela crise que vem do nada, não. É constante, o tempo todo.\"" },
      { trigger: "Sobre histórico familiar", speech: "Só se perguntado: \"Minha mãe sempre foi muito ansiosa também. Tomou remédio por anos.\"" },
      { trigger: "Pergunta ativa da paciente", speech: "\"Mas doutora, a senhora não acha que deveria pedir uma ressonância? Só pra descartar mesmo?\"" },
      { trigger: "Pergunta ativa da paciente", speech: "\"Isso vai melhorar? Eu tô com medo de virar igual à minha mãe, que ficou anos sofrendo.\"" }
    ],
    hiddenInfo: [
      "História familiar positiva de TAG na mãe (tratou com medicação por anos) — revelar apenas se o candidato perguntar sobre antecedentes familiares psiquiátricos.",
      "A paciente pesquisa sintomas na internet por >2 horas/dia, o que piora a ansiedade — revelar apenas se perguntado especificamente sobre o comportamento de pesquisa e quanto tempo gasta nisso."
    ],
    actorBehavior: "Fala rápida, inquieta, leva um caderninho com os sintomas anotados. Tende a interromper para perguntar se o candidato vai pedir mais exames. Alivia visivelmente quando o candidato valida os sintomas físicos como reais ('sua dor de cabeça é real, não estou dizendo que você está inventando'). Demonstra resistência inicial à ideia de tratamento psiquiátrico ('mas eu não sou louca')."
  },

  instC: {
    diagnosis: "Transtorno de ansiedade generalizada (TAG) com apresentação somática proeminente e comportamento de busca por reasseguramento (reassurance-seeking) e cibercondria. CID-11: 6B00 / DSM-5: F41.1.",
    differentials: [
      "Transtorno de ansiedade de doença (hipocondria / illness anxiety disorder) — preocupação excessiva com a possibilidade de estar doente; neste caso coexiste com TAG e é secundária à ansiedade generalizada; no TAG predominam preocupações múltiplas além da saúde.",
      "Transtorno do pânico — ausência de crises episódicas inesperadas; a ansiedade é constante, não paroxística; excluído pela anamnese.",
      "Hipertireoidismo — pode causar taquicardia, ansiedade e palpitações; afastado por TSH normal.",
      "Transtorno depressivo maior com ansiedade — humor deprimido não proeminente no caso; anedonia ausente; o quadro predominante é ansiedade."
    ],
    context: "Estudante de medicina de 24 anos com ansiedade generalizada de longa data, exacerbada pelo ambiente acadêmico e pelo acesso a informação médica. Apresenta preocupações múltiplas e excessivas, somatização (cefaleia, parestesias, tensão muscular), comportamento de busca compulsiva na internet e três consultas em dois meses com queixas físicas variadas. Exames orgânicos previamente normais. GAD-7 grave (17/21). História familiar positiva (mãe com TAG).",
    justify: "Preenche critérios DSM-5 para TAG: preocupações excessivas e difíceis de controlar em múltiplas áreas (faculdade, saúde, família, futuro) por >6 meses, com dificuldade de controlar os pensamentos e ≥3 sintomas físicos associados (insônia, tensão muscular, dificuldade de concentração, irritabilidade). As queixas somáticas (cefaleia, parestesias, tensão no peito) são expressão física da ansiedade — parestesias sem dermátomo definido, sem alteração neurológica objetiva, com padrão funcional. Exames normais afastam causas orgânicas.",
    expectedAnamnesis: [
      "Investigar natureza, conteúdo e controle das preocupações (são difíceis de parar?)",
      "Pesquisar duração (>6 meses)",
      "Identificar sintomas físicos associados (insônia, tensão muscular, dificuldade de concentração, irritabilidade, fadiga)",
      "Investigar comportamento de pesquisa de sintomas na internet (cibercondria)",
      "Pesquisar número e padrão de consultas médicas recentes (busca por reasseguramento)",
      "Investigar crises paroxísticas de ansiedade para diferenciar de transtorno do pânico",
      "Pesquisar humor deprimido e anedonia (descartar depressão)",
      "Investigar antecedentes familiares psiquiátricos",
      "Pesquisar uso de cafeína, estimulantes e substâncias",
      "Avaliar risco de suicídio"
    ],
    expectedPhysical: [
      "Sinais vitais: FC discretamente elevada por ansiedade",
      "Avaliação neurológica: confirmar ausência de déficit sensitivo em dermátomo definido (parestesias funcionais)",
      "Avaliação muscular: tensão cervical e de trapézio à palpação",
      "Avaliação tireoidiana: sem alterações",
      "Aplicação do GAD-7"
    ],
    expectedExams: [
      { exam: "TSH", justify: "Afastar hipertireoidismo", expected: "Normal" },
      { exam: "ECG", justify: "Afastar arritmia (taquicardia, palpitações)", expected: "Ritmo sinusal, normal" },
      { exam: "Hemograma", justify: "Afastar anemia como causa de fadiga", expected: "Normal" }
    ],
    expectedConduct: [
      "Farmacológica: ISRS de primeira linha para TAG: Sertralina 50 mg/dia VO ou Escitalopram 10 mg/dia VO. Alternativa: Duloxetina 60 mg/dia (ISRSN). Iniciar em dose baixa para reduzir ativação ansiosa inicial. (RENAME 2023; Diretrizes ABP — TAG, 2021)",
      "Não farmacológica: Encaminhar para psicoterapia — TCC (técnicas de reestruturação cognitiva e exposição à incerteza). Orientar sobre redução de cafeína. Orientar sobre limitação do tempo de pesquisa de sintomas na internet. Técnicas de relaxamento muscular progressivo e mindfulness.",
      "Encaminhamento: NASF/psicólogo na APS. CAPS se sem resposta em 6–8 semanas.",
      "Orientações ao paciente: Validar que os sintomas físicos são reais ('sua cefaleia e o formigamento são reais — o corpo expressa a ansiedade de forma física'). Explicar que novos exames não vão aliviar o problema. Explicar latência do antidepressivo (2–4 semanas).",
      "Seguimento: Retorno em 3 semanas. Orientar que, se surgir nova queixa física, ligue antes de vir para uma nova consulta de urgência."
    ],
    expectedCommunication: [
      "Apresentação: Reconhecer que é a terceira consulta sem tom de julgamento ('fico contente que você voltou, vamos entender o que está acontecendo com você').",
      "Comunicação do diagnóstico: Validar os sintomas físicos como reais antes de explicar o TAG ('não estou dizendo que você está inventando — sua dor de cabeça e a tensão são reais'). Usar a analogia de que o corpo e a mente são conectados.",
      "Escuta ativa: Não interromper a paciente quando ela lista os sintomas. Depois, redirecionar para o padrão de preocupações."
    ],
    criticalErrors: [
      "Solicitar ressonância magnética ou outros exames de neuroimagem sem indicação clínica, cedendo à pressão da paciente (reforça o comportamento de busca por reasseguramento)",
      "Não solicitar TSH (afastar hipertireoidismo como causa orgânica de ansiedade)",
      "Dizer à paciente que 'é tudo da sua cabeça' ou que 'não tem nada' sem validar os sintomas físicos",
      "Prescrever benzodiazepínico como tratamento de longa duração",
      "Não orientar sobre o comportamento de busca de sintomas na internet como fator de manutenção da ansiedade"
    ]
  },

  instD: {
    title: "CHECKLIST — ESTUDANTE COM MÚLTIPLAS QUEIXAS FÍSICAS E MEDO CONSTANTE DE ESTAR DOENTE",
    sections: [
      {
        h: "BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
        items: [
          { item: "Apresentou-se pelo nome e acolheu a paciente sem demonstrar impaciência (terceira consulta)", score: 0.5, ref: "CFM nº 1.931/2009" },
          { item: "Validou os sintomas físicos como reais antes de explicar a origem ansiosa", score: 0.5, ref: "MS — Política Nacional de Humanização, 2013" },
          { item: "Recusou a solicitação de ressonância sem indicação clínica e explicou o motivo", score: 0.5, ref: "Diretriz de uso racional de exames — CFM, 2022" },
          { item: "Explicou o diagnóstico de TAG em linguagem acessível e sem estigma", score: 0.5, ref: "ABP — Diretrizes TAG, 2021" }
        ]
      },
      {
        h: "BLOCO 2 — ANAMNESE",
        items: [
          { item: "Investigou natureza, conteúdo e controlabilidade das preocupações", score: 0.5, ref: "DSM-5; ABP — Diretrizes TAG, 2021" },
          { item: "Pesquisou duração dos sintomas (>6 meses)", score: 0.5, ref: "DSM-5; ABP — Diretrizes TAG, 2021" },
          { item: "Investigou comportamento de pesquisa de sintomas na internet (cibercondria)", score: 0.5, ref: "ABP — Diretrizes TAG, 2021" },
          { item: "Diferenciou de transtorno do pânico (ausência de crises paroxísticas)", score: 0.5, ref: "DSM-5; ABP — Diretrizes TAG, 2021" },
          { item: "Avaliou risco de suicídio", score: 0.5, ref: "MS — PCDT Prevenção do Suicídio, 2022" }
        ]
      },
      {
        h: "BLOCO 3 — EXAME FÍSICO",
        items: [
          { item: "Avaliou sinais vitais", score: 0.3, ref: "Semiologia Médica — FMUSP" },
          { item: "Realizou avaliação neurológica para confirmar ausência de déficit em dermátomo (parestesias funcionais)", score: 0.5, ref: "ABP — Diretrizes TAG, 2021" },
          { item: "Aplicou GAD-7 como rastreio padronizado", score: 0.3, ref: "ABP — Diretrizes TAG, 2021" }
        ]
      },
      {
        h: "BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO",
        items: [
          { item: "Solicitou TSH para afastar hipertireoidismo", score: 0.5, ref: "ABP — Diretrizes TAG, 2021" },
          { item: "Não solicitou exames de neuroimagem sem indicação clínica", score: 1.0, ref: "CFM — Uso Racional de Exames, 2022" },
          { item: "Formulou hipótese de TAG com apresentação somática", score: 1.0, ref: "DSM-5; ABP — Diretrizes TAG, 2021" }
        ]
      },
      {
        h: "BLOCO 5 — CONDUTA E ORIENTAÇÃO AO PACIENTE",
        items: [
          { item: "Prescreveu ISRS ou ISRSN como tratamento de primeira linha", score: 1.0, ref: "ABP — Diretrizes TAG, 2021; RENAME 2023" },
          { item: "Orientou sobre redução de cafeína e limitação de pesquisas de sintomas na internet", score: 0.5, ref: "ABP — Diretrizes TAG, 2021" },
          { item: "Indicou encaminhamento para psicoterapia (TCC)", score: 0.5, ref: "ABP — Diretrizes TAG, 2021" }
        ]
      }
    ]
  }
},

// CASO 03
{
  id: 3,
  title: "Mulher falando sozinha na sala de espera da UBS",
  sub: "UBS — Demanda espontânea trazida por familiar",
  tema: "Psiquiatria",
  topic: "Psicose — episódio agudo na atenção primária",
  level: "complexo",
  cardAccent: "#6A1B9A",
  instA: {
    scenario: "Atenção Primária — UBS. Consultório de acolhimento, turno da manhã. A irmã trouxe a paciente, que está falando sozinha na sala de espera e recusou a entrar na sala inicialmente.",
    patient: "S.V., 31 anos, feminino, cabeleireira autônoma (parou de trabalhar há 2 meses), casada, uma filha de 4 anos.",
    complaint: "Irmã relata que a paciente 'está diferente há dois meses': fala sozinha, diz que os vizinhos colocaram algo na comida dela, está dormindo pouco, deixou de cuidar da filha e parou de trabalhar.",
    tasks: [
      "Realize o acolhimento e a anamnese com a paciente e a irmã, priorizando a segurança do ambiente.",
      "Avalie o estado mental da paciente de forma estruturada.",
      "Investigue possíveis causas orgânicas e precipitantes (drogas, puerpério tardio, doenças sistêmicas).",
      "Formule a hipótese diagnóstica e os principais diagnósticos diferenciais.",
      "Proponha a conduta adequada ao nível primário de atenção e articule com a rede de saúde mental."
    ]
  },
  instB: {
    vitals: {
      PA: "120/78 mmHg",
      FC: "94 bpm",
      FR: "18 irpm",
      Tax: "36,8°C",
      Peso: "61 kg",
      Altura: "1,60 m",
      IMC: "23,8 kg/m²"
    },
    physicalGeneral: "Paciente em regular estado geral, higiene regular (cabelo despenteado, roupa amassada). Inquieta, olhar desconfiado, fala em voz baixa e olha para o lado (alucinações auditivas durante a consulta). Lúcida, mas com orientação alopsíquica parcialmente prejudicada (não sabe o mês). Pupilas isocóricas e fotorreagentes.",
    physicalSeg: 'Neurológico: Sem déficits motores ou sensitivos focais. Sem sinais de irritação meníngea. Sem nistagmo. | Estado mental: Aparência descuidada; psicomotricidade agitada; humor disfórico com afeto embotado; fala em murmúrios, desorganização do pensamento com delírio persecutório (envenenamento) e de referência (vizinhos a observam); alucinações auditivas (fala com "vozes" durante a entrevista); orientada no espaço, parcialmente no tempo; insight ausente. | Dermatológico: Sem marcas de injeção. Sem lesões cutâneas relevantes.',
    labs: [
      { test: "Glicemia capilar", val: "91 mg/dL", ref: "70–140 mg/dL", alt: false },
      { test: "Toxicológico urinário", val: "Positivo para crack/cocaína", ref: "Negativo", alt: true },
      { test: "TSH", val: "2,4 mUI/L", ref: "0,4–4,0 mUI/L", alt: false },
      { test: "Hemograma", val: "Normal", ref: "—", alt: false },
      { test: "VDRL", val: "Não reagente", ref: "Não reagente", alt: false },
      { test: "Anti-HIV", val: "Não reagente", ref: "Não reagente", alt: false },
      { test: "Beta-HCG", val: "Negativo", ref: "Negativo", alt: false }
    ],
    image: "TC de crânio sem contraste (realizada pela UPA após referenciamento): Sem alterações estruturais agudas. Parênquima e ventrículos dentro dos limites normais para a faixa etária.",
    note: "Entregar sinais vitais ao início. A irmã (segundo ator) está disponível na sala e pode ser interrogada. Exames laboratoriais entregues somente se solicitados. Resultado da TC é fornecido apenas se o candidato indicar o encaminhamento ou solicitar a imagem. A paciente pode ser entrevistada diretamente (ator deve manter postura desconfiada e olhar lateral — simulando alucinações auditivas).",
    patientProfile: "S.V., 31 anos, feminino, cabeleireira autônoma, casada, filha de 4 anos. Irmã: 35 anos, agente de saúde. Natural de Fortaleza/CE. Sem diagnóstico psiquiátrico prévio documentado. Marido trabalha em outra cidade durante a semana.",
    script: [
      { trigger: "Abordagem inicial", speech: "Eu vim porque minha irmã insistiu. Não tenho nada. São eles que não me deixam em paz." },
      { trigger: "Sobre os vizinhos", speech: "Eles botaram veneno na minha água. Eu já sei que é pra me matar. Por isso eu não tomo água da torneira mais." },
      { trigger: "Sobre as vozes", speech: 'Se perguntado diretamente: "Umas vozes ficam falando que eu sou uma mãe ruim. Que eu devia morrer. Às vezes é uma voz, às vezes são duas."' },
      { trigger: "Sobre a filha", speech: "Minha filha tá bem. Minha irmã cuida dela quando eu não tô podendo." },
      { trigger: "Sobre o sono", speech: "Fico acordada pensando. Tenho que ficar de olho nos vizinhos." },
      { trigger: "Sobre drogas", speech: 'Só se perguntado com paciência e sem julgamento: "Fumei umas pedras, umas vezes. Mas faz tempo..." (na verdade é recente — toxicológico positivo).' },
      { trigger: "Script da irmã", speech: "Doutor(a), ela não tá bem há pelo menos dois meses. Parou de trabalhar, não cuida da menina direito, fica falando sozinha. O marido não sabe da gravidade. Ela nunca foi assim antes." },
      { trigger: "Pergunta ativa da irmã", speech: "Ela vai precisar ser internada? Quem vai cuidar da minha sobrinha?" },
      { trigger: "Pergunta ativa da paciente", speech: "Você vai me prender aqui?" }
    ],
    hiddenInfo: 'Uso recente de crack (toxicológico positivo, mas paciente nega — revelar apenas via resultado laboratorial, não pelo script da paciente espontaneamente). | As vozes têm conteúdo de comando ("dizem que ela devia morrer") — revelar apenas se o candidato perguntar especificamente sobre o conteúdo e se as vozes mandam ela fazer algo. | Filha está sendo negligenciada (a irmã é quem cuida) — revelar se o candidato perguntar sobre quem cuida da criança.',
    actorBehavior: "Desconfiada, olha para os lados durante a entrevista (alucinações auditivas simuladas por movimentos de cabeça e murmúrios). Responde brevemente. Fica mais tranquila se o candidato não confrontar os delírios diretamente. Reage com irritabilidade se pressionada. A irmã é colaborativa, ansiosa e preocupada com a sobrinha."
  },
  instC: {
    diagnosis: "Episódio psicótico agudo com delírios persecutórios, alucinações auditivas e comportamento desorganizado. Fator precipitante: uso de crack/cocaína (toxicológico positivo). Etiologia a esclarecer: psicose induzida por substância vs. esquizofrenia ou outro transtorno psicótico primário. CID-11: 6A24 / 6C44.5 / DSM-5: F29 / F14.959.",
    differentials: [
      "Psicose induzida por estimulantes (crack/cocaína) — toxicológico positivo, quadro agudo; no entanto a duração de 2 meses pode ultrapassar a janela de intoxicação, exigindo monitoramento após abstinência para definir diagnóstico.",
      "Esquizofrenia de início — critérios de duração (>1 mês) e declínio funcional; a esclarecer após período de abstinência.",
      "Transtorno esquizoafetivo — ausência de sintomas de humor proeminentes associados ao quadro.",
      "Encefalite autoimune (anti-NMDAR) — pode cursar com psicose aguda em mulher jovem; afastar com sorologia específica se refratária ao tratamento."
    ],
        context: "Mulher de 31 anos, previamente sem diagnóstico psiquiátrico, apresenta quadro psicótico agudo de 2 meses com delírios persecutórios, alucinações auditivas de comando, comportamento desorganizado, declínio funcional e uso recente de crack. Filha sendo negligenciada. Causa orgânica estrutural afastada por TC normal. Uso de substância como fator precipitante confirmado.",
    justify: "Quadro psicótico com delírios persecutórios (envenenamento pelos vizinhos), alucinações auditivas (vozes de comando), comportamento desorganizado, declínio funcional e duração de 2 meses. Toxicológico positivo para cocaína/crack sugere contribuição de substância; no entanto a duração ultrapassa a janela típica de intoxicação aguda. Diagnóstico definitivo entre psicose primária e induzida por substância exige período de observação após abstinência. TC normal afasta causa estrutural.",
    expectedAnamnesis: [
      "Investigar início, duração e evolução do quadro psicótico",
      "Caracterizar alucinações auditivas (conteúdo, frequência, caráter de comando)",
      "Caracterizar os delírios (persecutórios, de referência, de envenenamento)",
      "Avaliar risco de suicídio (vozes de comando com conteúdo suicida)",
      "Avaliar risco de auto e heteroagressão",
      "Investigar uso de substâncias (crack, cocaína, outras)",
      "Pesquisar antecedentes psiquiátricos próprios e familiares",
      "Investigar situação da filha (avaliação de negligência infantil)",
      "Pesquisar histórico obstétrico (puerpério tardio)",
      "Investigar uso de medicamentos e doenças sistêmicas"
    ],
    expectedPhysical: [
      "Avaliação do estado mental estruturada: aparência, psicomotricidade, humor/afeto, pensamento, percepção, orientação, memória, insight",
      "Avaliação neurológica: sinais meníngeos, déficits focais, pupilas",
      "Avaliação de intoxicação aguda: pupilas, reflexos, coordenação",
      "Avaliação de automutilação: inspeção de membros"
    ],
    expectedExams: [
      { exam: "Toxicológico urinário", justify: "Investigar psicose induzida por substância", expected: "Positivo crack/cocaína" },
      { exam: "Beta-HCG", justify: "Descartar gravidez (psicose puerperal; segurança do antipsicótico)", expected: "Negativo" },
      { exam: "TC de crânio", justify: "Afastar causa orgânica estrutural", expected: "Normal" },
      { exam: "TSH", justify: "Afastar disfunção tireoidiana", expected: "Normal" },
      { exam: "VDRL e Anti-HIV", justify: "Afastar neurossífilis e HIV", expected: "Não reagentes" },
      { exam: "Glicemia capilar", justify: "Afastar hipoglicemia", expected: "Normal" }
    ],
    expectedConduct: "Antipsicótico: Haloperidol 2,5–5 mg/dia VO (início) ou Risperidona 1–2 mg/dia VO. Se agitação intensa: Haloperidol 5 mg IM + Prometazina 25 mg IM. (RENAME 2023; MS — PCDT Esquizofrenia, 2022) | Encaminhamento: Acionar CAPS III (com leitos de observação 24h) ou UPA/PS com psiquiatra para avaliação de internação. A UBS não tem estrutura para manejo de psicose aguda sem suporte psiquiátrico. | Avaliação de risco para a filha: Comunicar ao Conselho Tutelar se houver negligência (ECA, art. 13). Acionar assistência social. | Não farmacológica: Ambiente calmo, sem confrontar os delírios, reduzir estímulos. | Orientações à irmã: Explicar o quadro como doença tratável, não confirmar os delírios, cuidado da filha, necessidade de suporte contínuo. | Seguimento: Referenciamento ao CAPS II/III. Projeto terapêutico singular com equipe multiprofissional.",
    expectedCommunication: 'Com a paciente: Abordagem calma, sem confrontar os delírios, oferecer ajuda sem impor ("estou aqui para ajudar você a se sentir mais segura"). | Com a irmã: Explicar o que é psicose em linguagem acessível, orientar sobre acompanhamento e abordar a questão da filha. | Quanto à filha: Abordar com a irmã o cuidado da criança e a necessidade de comunicar ao Conselho Tutelar.',
    criticalErrors: [
      "Não solicitar beta-HCG em mulher em idade fértil antes de indicar antipsicótico",
      "Não solicitar toxicológico urinário em quadro psicótico agudo",
      "Confrontar diretamente os delírios da paciente (agrava desconfiança e rompe vínculo)",
      "Não avaliar a situação da filha (negligência infantil — obrigação legal de comunicar ao Conselho Tutelar)",
      "Tentar manejar psicose aguda integralmente na UBS sem acionar rede de saúde mental (CAPS/PS)",
      "Não avaliar risco de suicídio diante de vozes com conteúdo de comando suicida"
    ]
  },
  instD: {
    title: "CHECKLIST — MULHER FALANDO SOZINHA NA SALA DE ESPERA DA UBS",
    sections: [
      {
        h: "COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
        items: [
          { item: "Abordou a paciente de forma calma e não confrontativa", score: 0.5, ref: "MS — PCDT Esquizofrenia, 2022" },
          { item: "Não confrontou diretamente os delírios da paciente", score: 0.5, ref: "MS — PCDT Esquizofrenia, 2022" },
          { item: "Explicou o quadro à irmã em linguagem acessível e sem estigma", score: 0.5, ref: "Lei nº 10.216/2001" },
          { item: "Abordou a situação da filha com a irmã de forma sensível", score: 0.5, ref: "ECA — Lei nº 8.069/1990" }
        ]
      },
      {
        h: "ANAMNESE",
        items: [
          { item: "Caracterizou alucinações auditivas (conteúdo e caráter de comando)", score: 0.5, ref: "MS — PCDT Esquizofrenia, 2022" },
          { item: "Avaliou risco de suicídio (vozes com conteúdo suicida)", score: 1.0, ref: "MS — PCDT Prevenção do Suicídio, 2022" },
          { item: "Pesquisou uso de substâncias (incluindo crack)", score: 1.0, ref: "MS — PCDT Esquizofrenia, 2022" },
          { item: "Investigou a situação da filha (cuidados, negligência)", score: 0.5, ref: "ECA — Lei nº 8.069/1990" }
        ]
      },
      {
        h: "EXAME FÍSICO",
        items: [
          { item: "Realizou avaliação estruturada do estado mental", score: 0.5, ref: "MS — PCDT Esquizofrenia, 2022" },
          { item: "Pesquisou sinais neurológicos focais e meníngeos", score: 0.3, ref: "Semiologia Médica — FMUSP" },
          { item: "Avaliou pupilas e sinais de intoxicação aguda", score: 0.3, ref: "MS — PCDT Esquizofrenia, 2022" }
        ]
      },
      {
        h: "RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO",
        items: [
          { item: "Solicitou toxicológico urinário", score: 0.5, ref: "MS — PCDT Esquizofrenia, 2022" },
          { item: "Solicitou beta-HCG em mulher em idade fértil", score: 1.0, ref: "MS — PCDT Esquizofrenia, 2022" },
          { item: "Formulou hipótese de episódio psicótico agudo com fator precipitante (substância)", score: 0.5, ref: "DSM-5; MS — PCDT Esquizofrenia, 2022" }
        ]
      },
      {
        h: "CONDUTA E ORIENTAÇÃO AO PACIENTE",
        items: [
          { item: "Acionou rede de saúde mental (CAPS/PS) para manejo adequado", score: 1.0, ref: "Lei nº 10.216/2001; MS — Linha de Cuidado em Saúde Mental, 2022" },
          { item: "Indicou comunicação ao Conselho Tutelar pela situação da filha", score: 0.5, ref: "ECA — Art. 13, Lei nº 8.069/1990" },
          { item: "Prescreveu antipsicótico em dose adequada se indicado", score: 0.5, ref: "RENAME 2023; MS — PCDT Esquizofrenia, 2022" }
        ]
      }
    ]
  }
},

// CASO 04
{
  id: 4,
  title: "Adolescente trazida pela coordenadora da escola após cortes nos braços",
  sub: "UBS — Encaminhamento urgente pela escola",
  tema: "Psiquiatria",
  topic: "Automutilação e avaliação de risco de suicídio em adolescente",
  level: "complexo",
  cardAccent: "#880E4F",
  instA: {
    scenario: "Atenção Primária — UBS. Sala de acolhimento, turno da tarde. A coordenadora da escola trouxe a paciente após uma colega de classe avisar que a jovem tinha marcas de cortes no braço. Os pais foram avisados e o pai chegará em 20 minutos.",
    patient: "B.S., 15 anos, feminino, estudante do ensino médio, mora com o pai e a madrasta. Mãe faleceu há 2 anos.",
    complaint: "Coordenadora relata marcas de cortes recentes no antebraço esquerdo. A paciente diz que 'não foi pra se matar, só pra aliviar'.",
    tasks: [
      "Realize a anamnese de forma empática e sem julgamento, garantindo espaço de fala à adolescente.",
      "Avalie a automutilação: frequência, método, intenção suicida e acesso a meios.",
      "Avalie o risco de suicídio de forma estruturada.",
      "Identifique fatores de risco e de proteção específicos para adolescente.",
      "Proponha a conduta e articule com a rede de proteção (família, escola, CAPS infantojuvenil)."
    ]
  },
  instB: {
    vitals: {
      PA: "108/68 mmHg",
      FC: "88 bpm",
      FR: "16 irpm",
      Tax: "36,4°C",
      Peso: "52 kg",
      Altura: "1,60 m",
      IMC: "20,3 kg/m²"
    },
    physicalGeneral: "Adolescente em bom estado geral, lúcida e orientada. Manga comprida (dia quente). Fácies de tristeza, contato visual inicialmente esquivo. Sem sinais de anemia, icterícia ou trauma recente na face. Não há sinais de intoxicação aguda.",
    physicalSeg: "Dermatológico — antebraço esquerdo: Múltiplos cortes paralelos superficiais (6 a 8 lesões), com diferentes fases de cicatrização (algumas recentes, com crosta; outras antigas, cicatrizadas). Lesões de 2 a 5 cm, sem necessidade de sutura. Sem sinais de infecção. | Neurológico: Sem déficits focais. Força e sensibilidade preservadas. | Estado mental: Humor disfórico, afeto congruente, fala baixa com latência aumentada. Pensamento organizado, sem delírios. Sem alucinações. Orientada. Insight parcialmente preservado.",
    labs: [],
    image: null,
    note: "A coordenadora está fora da sala — pode ser acionada se o candidato precisar de informações adicionais. O candidato deve conduzir a entrevista preferencialmente a sós com a adolescente para garantir espaço seguro de fala. O pai chegará ao final da consulta — o candidato deve ser avaliado também pela forma como conduz a comunicação com o pai. Avaliar se o candidato inspeciona os membros superiores (solicitar autorização antes).",
    patientProfile: "B.S., 15 anos, feminino, estudante do 1º ano do ensino médio. Mora com o pai (44 anos, motorista) e a madrasta (38 anos). Mãe faleceu em acidente de trânsito há 2 anos. Sem diagnóstico psiquiátrico prévio. Natural de Fortaleza/CE.",
    script: [
      { trigger: "Abordagem inicial", speech: "Eu sei que vão chamar meu pai e ele vai ficar bravo. Eu não fiz nada grave." },
      { trigger: "Sobre os cortes", speech: "Eu faço isso quando fico muito mal. Não é pra me matar, juro. É porque eu não sei mais como aliviar quando fica pesado demais." },
      { trigger: "Sobre a frequência", speech: "Comecei faz uns oito meses. No começo era uma vez por mês. Agora tá sendo umas duas, três vezes por semana." },
      { trigger: "Sobre o que sente antes de se cortar", speech: "Dá uma sensação de aperto no peito, como se fosse explodir. Quando me corto, parece que alivia. Depois vem a culpa, mas passa." },
      { trigger: "Sobre pensamentos de suicídio", speech: 'Só se perguntado diretamente: "Uma vez ou outra eu penso que seria melhor não estar aqui. Mas não tenho coragem de fazer nada de verdade."' },
      { trigger: "Sobre plano", speech: 'Só se perguntado: "Não. Nunca pensei como faria. É só o pensamento que aparece."' },
      { trigger: "Sobre a mãe", speech: "Depois que ela morreu ficou tudo diferente. Meu pai casou de novo, eu não me dou bem com minha madrasta. Fico me sentindo de lado." },
      { trigger: "Sobre vínculos protetores", speech: "Tenho uma amiga que me entende. E gosto muito da minha avó. Ela mora perto." },
      { trigger: "Pergunta ativa da paciente", speech: "Você vai contar tudo pro meu pai? Ele vai me internar?" },
      { trigger: "Pergunta ativa da paciente", speech: "Tem como parar de se cortar? Eu não quero fazer isso, mas não sei o que fazer quando fica ruim." }
    ],
    hiddenInfo: 'A frequência dos cortes aumentou de mensal para 2–3 vezes por semana nos últimos 2 meses — revelar apenas se o candidato perguntar especificamente sobre a evolução da frequência. | A adolescente tem ideação suicida passiva ocasional ("seria melhor não estar aqui") sem plano — revelar apenas com pergunta direta e empática sobre pensamentos de morte.',
    actorBehavior: "Inicialmente fechada e defensiva, com braços cruzados (protegendo o antebraço). Abre-se progressivamente quando o candidato demonstra que não vai julgá-la. Chora ao falar da mãe. Demonstra ambivalência: quer parar de se cortar, mas não sabe como. Tem medo da reação do pai. Alivia visivelmente quando o candidato explica o que vai e o que não vai contar ao pai."
  },
  instC: {
    diagnosis: "Automutilação não suicida (NSSA) recorrente com aumento de frequência, em contexto de transtorno depressivo maior em adolescente, com luto complicado e conflito familiar. Ideação suicida passiva sem plano. CID-11: MB23.E / 6A70 / DSM-5: 307.9 (NSSI) / F32.1.",
    differentials: [
      "Tentativa de suicídio abortada — os cortes são superficiais, paralelos e a adolescente afirma função regulatória emocional (\"aliviar\"), não intenção de morrer; no entanto, a avaliação deve ser formal e direta, pois intenção pode ser subestimada.",
      "Transtorno de personalidade borderline — padrão de instabilidade emocional, automutilação e medo de abandono são compatíveis; no entanto, o diagnóstico de TPB não deve ser feito em adolescentes (aguardar maturidade do padrão de personalidade — APA recomenda aguardar >18 anos).",
      "Transtorno de ajustamento com humor deprimido — relacionado à perda da mãe e conflito familiar; no entanto, a duração (8 meses), a intensidade e a automutilação recorrente indicam episódio depressivo maior.",
      "Transtorno dissociativo — automutilação pode ocorrer em contexto dissociativo; investigar episódios de despersonalização ou amnesia."
    ],
    context: "Adolescente de 15 anos com automutilação não suicida recorrente há 8 meses, com aumento progressivo de frequência (de mensal para 2–3 vezes/semana). Contexto de luto materno não elaborado, conflito familiar com madrasta, isolamento social e humor deprimido. Ideação suicida passiva sem plano. Fatores de proteção: amizade significativa, vínculo com a avó, insight sobre o comportamento.",
    justify: "Automutilação não suicida com função regulatória emocional (\"alívio do aperto no peito\") — padrão típico de NSSA. Contexto depressivo: humor disfórico persistente, isolamento, luto complicado. A escalada de frequência (mensal → 2–3x/semana) indica deterioração do quadro e necessidade de intervenção especializada urgente. Ideação passiva de morte sem plano presente — risco de suicídio baixo a moderado, mas requer monitoramento rigoroso.",
    expectedAnamnesis: [
      "Garantir privacidade para a entrevista com a adolescente (sem o pai na sala inicialmente)",
      "Investigar função da automutilação (alívio emocional vs. intenção suicida)",
      "Caracterizar os cortes: frequência, método, profundidade, localização, evolução",
      "Perguntar diretamente sobre ideação suicida (\"você já pensou em se matar?\")",
      "Investigar plano e acesso a meios letais",
      "Pesquisar humor deprimido, anedonia, sono, apetite",
      "Investigar contexto familiar (relação com pai, madrasta, morte da mãe)",
      "Pesquisar vínculos e fatores de proteção (amigos, avó)",
      "Investigar uso de álcool e drogas",
      "Pesquisar bullying ou violência (escolar ou doméstica)",
      "Explicar à adolescente o que será compartilhado com o pai (confidencialidade x sigilo)"
    ],
    expectedPhysical: [
      "Pedir autorização antes de inspecionar os membros (\"posso dar uma olhada no seu braço?\")",
      "Inspeção do antebraço esquerdo: número, tamanho, profundidade e fase de cicatrização das lesões",
      "Inspeção de outros sítios de automutilação (coxa, abdome)",
      "Avaliação do estado mental: humor, afeto, pensamento, risco",
      "Verificar sinais de anemia ou infecção nas lesões"
    ],
    expectedExams: [
      { exam: "Nenhum exame laboratorial urgente indicado", justify: "Quadro clínico psiquiátrico sem suspeita de causa orgânica", expected: "—" }
    ],
    expectedConduct: "Encaminhamento prioritário: CAPS Infantojuvenil (CAPSij) para acompanhamento especializado. Se não disponível: psiquiatria infantojuvenil ou ambulatório de saúde mental. | Farmacológica: Não iniciar antidepressivo na UBS sem avaliação psiquiátrica especializada em adolescente (risco de ativação comportamental com ISRS em <18 anos). | Não farmacológica: DBT (Terapia Comportamental Dialética) — padrão ouro para automutilação recorrente. Psicoeducação para o pai sobre automutilação não suicida. | Comunicação com o pai: Explicar automutilação não suicida, importância de não punir, como criar ambiente de acolhimento. Comunicar a ideação passiva de morte. | Plano de segurança: Remover objetos cortantes de fácil acesso. Combinar alternativas ao corte (ligar para a avó, escrever, técnicas de grounding). CVV 188. | Seguimento: Retorno em 1 semana.",
    expectedCommunication: "Com a adolescente: Explicar antes da chegada do pai o que será e o que não será compartilhado. Quebrar o sigilo somente no que for necessário para proteger a vida. | Com o pai: Evitar framing punitivo (\"sua filha está precisando de ajuda, não de castigo\"). Instruir sobre como acolher sem punir. | Escuta ativa: Validar a dor (\"eu entendo que você não sabia como lidar com tanto sofrimento\") antes de falar sobre as consequências.",
    criticalErrors: [
      "Não perguntar diretamente sobre ideação e intenção suicida",
      "Não inspecionar o antebraço (avaliar a gravidade das lesões)",
      "Contar todos os detalhes ao pai sem informar previamente a adolescente (violação da confiança terapêutica)",
      "Tratar a automutilação como comportamento manipulativo sem investigar a função",
      "Prescrever antidepressivo sem encaminhamento ao especialista e sem discussão do risco de ativação em adolescentes",
      "Não encaminhar ao CAPSij ou serviço especializado em saúde mental infantojuvenil"
    ]
  },
  instD: {
    title: "CHECKLIST — ADOLESCENTE TRAZIDA PELA ESCOLA APÓS CORTES NOS BRAÇOS",
    sections: [
      {
        h: "COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
        items: [
          { item: "Realizou a entrevista inicial a sós com a adolescente (sem o pai)", score: 0.5, ref: "ECA — Lei nº 8.069/1990; MS — Saúde do Adolescente, 2020" },
          { item: "Abordou a adolescente sem julgamento e com linguagem adequada à faixa etária", score: 0.5, ref: "MS — Saúde do Adolescente, 2020" },
          { item: "Explicou à adolescente o que seria e o que não seria compartilhado com o pai antes de chamá-lo", score: 0.5, ref: "CFM — Sigilo Médico, 2009; ECA" },
          { item: "Orientou o pai sobre automutilação não suicida sem usar linguagem punitiva", score: 0.5, ref: "MS — PCDT Prevenção do Suicídio, 2022" }
        ]
      },
      {
        h: "ANAMNESE",
        items: [
          { item: "Investigou a função da automutilação (alívio emocional vs. intenção suicida)", score: 1.0, ref: "MS — PCDT Prevenção do Suicídio, 2022" },
          { item: "Perguntou diretamente sobre ideação suicida, plano e acesso a meios", score: 1.0, ref: "MS — PCDT Prevenção do Suicídio, 2022" },
          { item: "Investigou frequência e evolução dos cortes (escalada mensal → 2–3x/semana)", score: 0.5, ref: "MS — PCDT Prevenção do Suicídio, 2022" },
          { item: "Pesquisou contexto familiar (mãe falecida, relação com madrasta) e vínculos de proteção", score: 0.5, ref: "MS — Saúde do Adolescente, 2020" }
        ]
      },
      {
        h: "EXAME FÍSICO",
        items: [
          { item: "Solicitou autorização antes de inspecionar o antebraço", score: 0.5, ref: "CFM nº 1.931/2009" },
          { item: "Inspecionou o antebraço esquerdo e caracterizou as lesões (número, profundidade, cicatrização)", score: 0.5, ref: "MS — PCDT Prevenção do Suicídio, 2022" }
        ]
      },
      {
        h: "RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO",
        items: [
          { item: "Diferenciou automutilação não suicida de tentativa de suicídio", score: 1.0, ref: "MS — PCDT Prevenção do Suicídio, 2022; DSM-5" },
          { item: "Identificou fatores de risco (luto, conflito familiar, escalada de frequência) e de proteção (amiga, avó)", score: 0.5, ref: "MS — PCDT Prevenção do Suicídio, 2022" }
        ]
      },
      {
        h: "CONDUTA E ORIENTAÇÃO AO PACIENTE",
        items: [
          { item: "Encaminhou ao CAPSij ou serviço especializado em saúde mental infantojuvenil", score: 1.0, ref: "Lei nº 10.216/2001; MS — Linha de Cuidado em Saúde Mental, 2022" },
          { item: "Estabeleceu plano de segurança (remover objetos cortantes, alternativas ao corte, CVV 188)", score: 0.5, ref: "MS — PCDT Prevenção do Suicídio, 2022" },
          { item: "Não prescreveu antidepressivo sem encaminhamento especializado (risco de ativação em adolescente)", score: 0.5, ref: "FDA/ANVISA — Alerta de caixa preta ISRS em <18 anos" }
        ]
      }
    ]
  }
},

// CASO 05
{
  id: 5,
  title: "Idoso de 60 anos com euforia intensa e planos de 'mudar tudo' após aposentadoria",
  sub: "Ambulatório de Psiquiatria — Referenciado pela UBS",
  tema: "Psiquiatria",
  topic: "Transtorno bipolar — primeiro episódio maníaco tardio",
  level: "complexo",
  cardAccent: "#E65100",
  instA: {
    scenario: "Ambulatório de Psiquiatria — hospital geral. Primeira consulta, turno matutino. Paciente veio acompanhado da filha, que o trouxe após preocupação com mudança abrupta de comportamento.",
    patient: "A.M., 60 anos, masculino, recém-aposentado (professor universitário), casado, três filhos adultos. Sem diagnóstico psiquiátrico prévio.",
    complaint: "Filha relata que o pai está 'completamente diferente há 15 dias': dorme 2 horas e diz estar descansado, fez doações impulsivas de R$ 30.000 para um projeto social que acabou de conhecer, planeja 'largar tudo e ir morar na praia', fala sem parar e diz que 'finalmente encontrou seu propósito'.",
    tasks: [
      "Realize a anamnese com o paciente e a filha, investigando o episódio atual e o histórico psiquiátrico e médico prévio.",
      "Realize a avaliação do estado mental do paciente.",
      "Investigue causas orgânicas de mania de início tardio (após os 50 anos).",
      "Formule a hipótese diagnóstica e os principais diagnósticos diferenciais.",
      "Proponha a conduta terapêutica e a decisão sobre internação."
    ]
  },
  instB: {
    vitals: {
      PA: "152/94 mmHg",
      FC: "108 bpm",
      FR: "20 irpm",
      Tax: "37,0°C",
      Peso: "88 kg",
      Altura: "1,74 m",
      IMC: "29,1 kg/m²"
    },
    physicalGeneral: "Paciente em bom estado geral aparente, bem arrumado, roupa colorida (diferente do estilo habitual, conforme relato da filha). Agitado, levanta-se da cadeira durante a consulta. Fala acelerada e difícil de interromper. Lúcido e orientado. Sem sinais focais neurológicos ao exame inicial.",
    physicalSeg: "Neurológico: Sem déficits motores ou sensitivos. Reflexos preservados e simétricos. Marcha sem alterações. Sem sinais de irritação meníngea. | Cardiovascular: Taquicardia sinusal. BRNF, sem sopros. Pulsos cheios e simétricos. | Estado mental: Aparência extravagante (roupas incomuns); psicomotricidade agitada; humor eufórico/expansivo; fala pressurosa, logorreia, fuga de ideias; pensamento com grandiosidade sem delírios estruturados; sem alucinações; orientado; memória preservada; insight ausente; juízo crítico gravemente comprometido.",
    labs: [
      { test: "Hemograma completo", val: "Normal", ref: "—", alt: false },
      { test: "TSH", val: "0,08 mUI/L", ref: "0,4–4,0 mUI/L", alt: true },
      { test: "T4 livre", val: "2,9 ng/dL", ref: "0,8–1,8 ng/dL", alt: true },
      { test: "Sódio", val: "140 mEq/L", ref: "135–145 mEq/L", alt: false },
      { test: "Glicemia de jejum", val: "128 mg/dL", ref: "70–99 mg/dL", alt: true },
      { test: "Creatinina", val: "1,0 mg/dL", ref: "0,7–1,2 mg/dL", alt: false },
      { test: "TC de crânio com contraste", val: "Sem lesões estruturais, sem realce patológico", ref: "Normal", alt: false },
      { test: "Toxicológico urinário", val: "Negativo", ref: "Negativo", alt: false },
      { test: "ECG", val: "Taquicardia sinusal 108 bpm, sem alterações de repolarização", ref: "—", alt: false }
    ],
    image: "TC de crânio com contraste: Sem hipodensidades, sem realce patológico. Sulcos e ventrículos dentro dos limites para a faixa etária. Sem sinais de tumor, AVC ou hematoma subdural.",
    note: "Sinais vitais entregues ao início. Exames laboratoriais entregues somente se solicitados. Ponto-chave deste caso: o TSH suprimido e o T4 livre elevado indicam hipertireoidismo como possível fator desencadeante da mania — o candidato deve identificar essa correlação. A filha está disponível para ser interrogada (segundo ator ou professor).",
    patientProfile: "A.M., 60 anos, masculino, professor universitário aposentado há 1 mês. Casado há 35 anos. Três filhos adultos. Sem uso de psicotrópicos, sem diagnóstico psiquiátrico prévio. Natural de Fortaleza/CE.",
    script: [
      { trigger: "Abordagem inicial", speech: "Doutor, eu entendo que minha filha ficou preocupada. Mas eu nunca me senti tão bem na vida! Quarenta anos esperando me aposentar e agora finalmente posso viver!" },
      { trigger: "Sobre o sono", speech: "Durmo duas horas e acordo disposto! Nunca precisei de 8 horas como dizia. Isso era perda de tempo." },
      { trigger: "Sobre as doações", speech: "Encontrei um projeto lindo, de crianças. Doei porque faz sentido. O dinheiro é pra ser usado!" },
      { trigger: "Sobre os planos", speech: "Vou vender o apartamento, comprar uma casa na praia, abrir um instituto de educação ambiental, escrever 3 livros e ainda fazer uma expedição pela Amazônia!" },
      { trigger: "Sobre doenças prévias", speech: 'Se perguntado: "Tomo remédio de pressão e tinha ficado com a tireoide alterada há uns 6 meses, mas parei de ir ao endocrinologista porque me sentia bem."' },
      { trigger: "Script da filha", speech: "Pai nunca foi assim. É professor sério, metódico. De repente virou outra pessoa. Minha mãe está desesperada. Ele não deixou eu vir junto mas eu vim de surpresa." },
      { trigger: "Pergunta ativa da filha", speech: "Isso pode ser do remédio da tireoide que ele parou? Ou é doença mental mesmo?" },
      { trigger: "Pergunta ativa do paciente", speech: "Você vai me internar? Eu não sou louco, doutor. Nunca fui ao psiquiatra na vida." }
    ],
    hiddenInfo: "Abandono do acompanhamento endocrinológico e possível hipertireoidismo não tratado (TSH suprimido no resultado) — revelar apenas se o candidato perguntar diretamente sobre doenças prévias e medicamentos em uso/abandonados. | A esposa está em casa, recusando-se a participar por não aceitar que o marido precisa de psiquiatra — revelar apenas se o candidato perguntar sobre o cônjuge e o suporte familiar.",
    actorBehavior: "Expansivo, fala acelerada, difícil de interromper. Gesticula excessivamente. Levanta-se da cadeira espontaneamente. Irrita-se quando a filha o contradiz. Não demonstra crítica em relação ao quadro. Reage com resistência à ideia de internação. A filha está ansiosa, preocupada, chora ao descrever a mudança do pai."
  },
  instC: {
    diagnosis: "Episódio maníaco de início tardio (60 anos), provavelmente secundário a hipertireoidismo (TSH suprimido, T4 livre elevado) como fator desencadeante orgânico, em paciente sem TAB prévio diagnosticado. Diagnóstico diferencial: TAB tipo I de início tardio vs. mania secundária a hipertireoidismo. CID-11: 6A60 / MB24 / DSM-5: F31.10 / E05.90.",
    differentials: [
      "TAB tipo I — primeiro episódio maníaco tardio: início após os 50 anos é menos comum mas possível; sem causa orgânica identificável seria o diagnóstico; aqui, o hipertireoidismo é causa alternativa a afastar/tratar.",
      "Mania secundária a hipertireoidismo: TSH suprimido (0,08) e T4 livre elevado (2,9) confirmam hipertireoidismo que pode causar quadro maníaco; tratar a tireoide pode resolver o episódio.",
      "Mania secundária a tumor cerebral ou AVC: deve ser afastada em mania de início tardio; TC de crânio normal afasta causa estrutural.",
      "Demência frontotemporal (variante comportamental): pode cursar com desinibição, comportamento impulsivo e mudança de personalidade em idosos; geralmente mais insidioso e sem euforia proeminente; TC normal e ausência de déficit cognitivo reduzem probabilidade."
    ],
    context: "Homem de 60 anos, sem diagnóstico psiquiátrico prévio, apresenta primeiro episódio maníaco há 15 dias com insônia (2h/noite), grandiosidade, logorreia, comportamento impulsivo (doações de R$30.000), planos grandiosos e insight ausente. Hipertireoidismo confirmado laboratorialmente (TSH 0,08; T4 livre 2,9) após abandono de acompanhamento endocrinológico. TC de crânio normal. Mania de início tardio com causa orgânica identificável.",
    justify: "Preenche critérios para episódio maníaco (DSM-5): humor eufórico, diminuição da necessidade de sono (2h), logorreia, fuga de ideias, aumento de atividade dirigida a objetivos e comportamentos impulsivos de alto risco (doações impulsivas). Duração ≥7 dias. Insight ausente. A chave diagnóstica é a identificação do hipertireoidismo (TSH suprimido, T4 livre elevado) como causa orgânica — mania de início tardio exige investigação orgânica obrigatória.",
    expectedAnamnesis: [
      "Investigar início e duração do episódio atual",
      "Caracterizar humor, nível de energia e necessidade de sono",
      "Pesquisar comportamentos impulsivos (gastos, doações, planos grandiosos)",
      "Investigar episódios prévios de humor (mania, hipomania, depressão)",
      "Pesquisar doenças médicas prévias (hipertireoidismo, neurológicas, neoplasias)",
      "Investigar medicamentos em uso e abandono de tratamentos",
      "Pesquisar história familiar de transtornos do humor",
      "Avaliar risco para si e para terceiros (gastos que comprometem patrimônio familiar)",
      "Pesquisar uso de corticoides, estimulantes ou outras substâncias que possam causar mania"
    ],
    expectedPhysical: [
      "Avaliação do estado mental estruturada",
      "Palpação da tireoide (bócio? nódulos?)",
      "Avaliação neurológica completa (afastar causa estrutural — mania de início tardio)",
      "Sinais de hipertireoidismo: taquicardia, tremor de extremidades, pele quente e úmida, exoftalmia",
      "Avaliação cardiovascular: taquicardia sinusal esperada"
    ],
    expectedExams: [
      { exam: "TSH e T4 livre", justify: "Causa orgânica obrigatória em mania de início tardio", expected: "TSH suprimido; T4 livre elevado" },
      { exam: "TC de crânio com contraste", justify: "Afastar tumor, AVC, hematoma em mania de início tardio", expected: "Normal" },
      { exam: "Hemograma, glicemia, eletrólitos, creatinina", justify: "Avaliação sistêmica geral", expected: "Glicemia alterada; demais normais" },
      { exam: "Toxicológico urinário", justify: "Afastar mania por substância (estimulantes, cocaína, corticoides)", expected: "Negativo" },
      { exam: "ECG", justify: "Avaliar taquicardia e rastrear arritmia (hipertireoidismo)", expected: "Taquicardia sinusal" }
    ],
    expectedConduct: "Tratar o hipertireoidismo: Encaminhamento urgente ao endocrinologista. Metimazol (tionamida) conforme protocolo. (SBEM — Diretriz Hipertireoidismo, 2022) | Estabilizador de humor: Valproato de sódio 500–1000 mg/dia VO (preferível ao lítio em mania de início tardio com comorbidade tireoidiana — lítio pode interagir com função tireoidiana). Alternativa: Haloperidol 2,5–5 mg/dia VO + Valproato. (RENAME 2023; ABP — Diretrizes TAB, 2021) | Internação: Indicada — episódio maníaco grave com 15 dias de insônia severa, gastos impulsivos de R$30.000, insight ausente e recusa de tratamento. Avaliar internação voluntária; se recusa, involuntária conforme Lei nº 10.216/2001. | Orientações à família: Explicar que pode haver causa orgânica tratável (tireoide), que o tratamento é eficaz, que o comportamento é da doença. | Seguimento: Reavaliação em 2–3 semanas. Reavaliar TSH após tratamento do hipertireoidismo.",
    expectedCommunication: "Com o paciente: Tom calmo, não confrontativo. Usar a causa orgânica como ponte: \"seus exames mostraram que sua tireoide está muito acelerada, e isso pode estar causando essa energia toda\". | Com a filha: Explicar o papel do hipertireoidismo, a necessidade de internação e como a família pode apoiar. | Comunicar a decisão de internação: \"Quero que o senhor fique em segurança enquanto tratamos a tireoide e ajustamos a medicação.\"",
    criticalErrors: [
      "Não solicitar TSH/T4 livre em mania de início tardio (>50 anos) — erro grave por omissão de causa orgânica tratável",
      "Não solicitar neuroimagem (TC ou RNM de crânio) em primeiro episódio maníaco após os 50 anos",
      "Prescrever antidepressivo durante episódio maníaco (piora da mania)",
      "Iniciar lítio sem avaliar função tireoidiana (hipertireoidismo e lítio afetam mutuamente a tireoide)",
      "Dispensar o paciente ambulatorialmente sem indicar internação em episódio maníaco grave com insight ausente e gastos impulsivos massivos"
    ]
  },
  instD: {
    title: "CHECKLIST — IDOSO COM EUFORIA INTENSA E PLANOS DE MUDAR TUDO APÓS APOSENTADORIA",
    sections: [
      {
        h: "COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
        items: [
          { item: "Abordou o paciente de forma calma e sem confrontar diretamente os planos grandiosos", score: 0.3, ref: "MS — Política Nacional de Humanização, 2013" },
          { item: "Utilizou a causa orgânica (tireoide) como ponte para explicar o quadro ao paciente de forma acessível", score: 0.5, ref: "CFM nº 1.931/2009" },
          { item: "Explicou o quadro à filha em linguagem acessível, incluindo o papel da tireoide", score: 0.5, ref: "CFM nº 1.931/2009" },
          { item: "Comunicou a necessidade de internação de forma empática", score: 0.3, ref: "Lei nº 10.216/2001" }
        ]
      },
      {
        h: "ANAMNESE",
        items: [
          { item: "Investigou início, duração e progressão do episódio maníaco", score: 0.5, ref: "ABP — Diretrizes TAB, 2021" },
          { item: "Pesquisou doenças médicas prévias e abandono de tratamentos (hipertireoidismo)", score: 1.0, ref: "ABP — Diretrizes TAB, 2021; SBEM 2022" },
          { item: "Investigou comportamentos impulsivos e seu impacto financeiro/familiar", score: 0.5, ref: "ABP — Diretrizes TAB, 2021" },
          { item: "Pesquisou episódios prévios de humor (mania, hipomania, depressão)", score: 0.5, ref: "ABP — Diretrizes TAB, 2021" }
        ]
      },
      {
        h: "EXAME FÍSICO",
        items: [
          { item: "Avaliou sinais vitais (taquicardia, HAS)", score: 0.3, ref: "Semiologia Médica — FMUSP" },
          { item: "Realizou avaliação do estado mental estruturada", score: 0.5, ref: "ABP — Diretrizes TAB, 2021" },
          { item: "Pesquisou sinais de hipertireoidismo (tremor, pele quente, exoftalmia, palpação tireoidiana)", score: 0.5, ref: "SBEM — Diretriz Hipertireoidismo, 2022" }
        ]
      },
      {
        h: "RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO",
        items: [
          { item: "Solicitou TSH e T4 livre (identificou possível causa orgânica em mania de início tardio)", score: 1.0, ref: "SBEM 2022; ABP — Diretrizes TAB, 2021" },
          { item: "Solicitou TC de crânio (afastar causa estrutural em mania de início tardio)", score: 0.5, ref: "ABP — Diretrizes TAB, 2021" },
          { item: "Correlacionou o hipertireoidismo como possível fator desencadeante do episódio maníaco", score: 0.5, ref: "SBEM 2022; ABP — Diretrizes TAB, 2021" }
        ]
      },
      {
        h: "CONDUTA E ORIENTAÇÃO AO PACIENTE",
        items: [
          { item: "Indicou internação psiquiátrica como conduta adequada ao episódio", score: 1.0, ref: "Lei nº 10.216/2001; ABP — Diretrizes TAB, 2021" },
          { item: "Prescreveu estabilizador de humor adequado (valproato, sem lítio em hipertireoidismo)", score: 0.5, ref: "RENAME 2023; ABP — Diretrizes TAB, 2021" },
          { item: "Encaminhou ao endocrinologista para tratar o hipertireoidismo", score: 0.5, ref: "SBEM — Diretriz Hipertireoidismo, 2022" }
        ]
      }
    ]
  }
},

// CASO 07
{
  id: 7,
  title: "Mulher grávida com sensação de sufocamento e medo de morrer na fila do banco",
  sub: "UBS — Demanda espontânea",
  tema: "Psiquiatria",
  topic: "Transtorno do pânico com agorafobia em gestante",
  level: "moderado",
  cardAccent: "#AD1457",
  instA: {
    scenario: "Atenção Primária — UBS. Consultório de pré-natal, turno da manhã. Paciente veio à consulta de pré-natal de rotina, mas ao sentar na sala de espera lotada teve um episódio de sufocamento e saiu correndo. Foi atendida pela enfermeira e encaminhada ao médico.",
    patient: "P.A., 29 anos, feminino, grávida de 22 semanas (primigesta), assistente administrativa, casada.",
    complaint: "Paciente relata episódios recorrentes de coração acelerado, falta de ar, formigamento e 'certeza de que vai morrer' desde o 3º mês de gestação. Hoje teve um episódio na fila do banco e outro na sala de espera da UBS.",
    tasks: [
      "Realize a anamnese dirigida ao caso, investigando as características dos episódios e o impacto na gestação.",
      "Interprete os dados do exame físico e exames fornecidos, excluindo causas obstétricas e cardíacas.",
      "Formule a hipótese diagnóstica e os diferenciais pertinentes no contexto da gravidez.",
      "Proponha a conduta terapêutica segura para gestante com transtorno do pânico.",
      "Oriente a paciente sobre o manejo dos ataques e os riscos do não tratamento para a gestação."
    ]
  },
  instB: {
    vitals: {
      PA: "118/72 mmHg",
      FC: "98 bpm",
      FR: "20 irpm",
      Tax: "36,6°C",
      Peso: "68 kg",
      Altura: "1,63 m",
      IMC: "22,6 kg/m² (pré-gestacional)"
    },
    physicalGeneral: "Paciente em bom estado geral, ansiosa, ainda levemente taquipneica ao entrar. Lúcida e orientada. Sem edema em membros inferiores. Mucosas rosadas e hidratadas. Sem icterícia ou cianose.",
    physicalSeg: "Obstétrico: Altura uterina 20 cm (compatível com IG). BCF 148 bpm (normal). Sem contrações. Colo fechado ao toque. | Cardiovascular: BRNF em 2T. Sem sopros patológicos. Pulsos periféricos normais. | Respiratório: MV presente bilateralmente, sem ruídos adventícios. Expansibilidade normal. | Neurológico: Sem déficits focais.",
    labs: [
      { test: "ECG (12 derivações)", val: "Ritmo sinusal, FC 96 bpm, sem alterações de repolarização", ref: "Normal", alt: false },
      { test: "TSH", val: "1,4 mUI/L", ref: "0,1–2,5 mUI/L (1º trim.) / 0,2–3,0 (2º trim.)", alt: false },
      { test: "Hemograma", val: "Hb 11,2 g/dL, VCM 84 fL", ref: "Hb >11 (gestante)", alt: false },
      { test: "Glicemia de jejum", val: "86 mg/dL", ref: "70–92 mg/dL (gestante)", alt: false },
      { test: "Ecocardiograma obstétrico (resultado de consulta anterior)", val: "Normal", ref: "—", alt: false }
    ],
    image: null,
    note: "Sinais vitais entregues ao início. O ECG e demais exames são entregues se solicitados. O candidato deve ser avaliado especialmente pela escolha da conduta farmacológica segura em gestante — o uso de benzodiazepínico está contraindicado / deve ser evitado na gestação. Avaliar se o candidato solicita suporte psicológico como primeira linha.",
    patientProfile: "P.A., 29 anos, feminino, assistente administrativa, casada (marido presente no pré-natal), primigesta, 22 semanas de gestação. Sem diagnóstico psiquiátrico prévio. Pré-natal regular na UBS. Natural de Fortaleza/CE.",
    script: [
      { trigger: "Queixa principal", speech: "Doutora, tô com medo de enlouquecer. Hoje tive aquela sensação de novo na fila do banco e corri pra fora. Faz três meses que isso acontece." },
      { trigger: "Sobre o episódio", speech: "De repente o coração dispara, fico sem ar, começo a formigar as mãos e a boca, e tenho certeza que vou morrer ali. Dura uns dez minutos e depois passa." },
      { trigger: "Sobre a frequência", speech: "Começou uma vez por semana. Agora tô tendo quase todo dia. Tô com medo de sair de casa." },
      { trigger: "Sobre a gestação", speech: "Tenho medo de que isso afete meu bebê. Fico me sentindo culpada. Já cheguei a pensar se minha bebê vai nascer com problema por causa dos meus ataques." },
      { trigger: "Sobre evitação", speech: "Parei de ir ao shopping, ao mercado, de pegar ônibus. Hoje foi a primeira vez que vim à UBS sozinha e já tive um ataque." },
      { trigger: "Sobre remédio", speech: "Posso tomar alguma coisa? Mas tenho medo de prejudicar a bebê. Não quero tomar nada que faça mal." },
      { trigger: "Pergunta ativa", speech: "Isso prejudica minha bebê, doutora? Os ataques fazem mal pra ela?" },
      { trigger: "Pergunta ativa", speech: "Tem tratamento que não seja remédio? Porque não quero colocar nada em risco na gravidez." }
    ],
    hiddenInfo: "A paciente está evitando sair de casa há 3 semanas, com impacto significativo no trabalho (está de licença) — revelar apenas se o candidato perguntar especificamente sobre mudanças na rotina e no trabalho. | Mãe da paciente tinha crises de nervos frequentes (possível história familiar de ansiedade/pânico) — revelar apenas se perguntado sobre história familiar.",
    actorBehavior: "Ainda levemente taquipneica ao entrar. Ansiosa, verbaliza preocupação com a bebê em múltiplos momentos. Alivia visivelmente quando o médico confirma que o coração e a bebê estão bem. Demonstra resistência ao uso de remédios. Abre-se com facilidade para estratégias não farmacológicas."
  },
  instC: {
    diagnosis: "Transtorno do pânico com agorafobia em gestante (22 semanas). Ataques de pânico recorrentes com comportamento de evitação progressivo. CID-11: 6B01 / 6B02 / DSM-5: F41.0 + F40.00.",
    differentials: [
      "Síndrome do coração materno / palpitações gestacionais — taquicardia fisiológica da gestação pode ser confundida; no entanto, o padrão episódico, a intensidade, o medo de morrer e a evitação são incompatíveis com palpitação fisiológica; ECG normal.",
      "Hipertireoidismo gestacional — pode causar palpitações e ansiedade; TSH dentro da faixa gestacional normal.",
      "Hipoglicemia — pode causar sintomas adrenérgicos semelhantes; glicemia normal durante episódios.",
      "Embolia pulmonar — dispneia súbita na gestante deve ser considerada; clínica episódica e recorrente desde o 3º mês, com exame pulmonar normal, torna improvável."
    ],
    context: "Gestante de 29 anos, 22 semanas, primigesta, sem antecedentes psiquiátricos, com ataques de pânico recorrentes desde o 3º mês de gestação com escalada de frequência (semanal → diário) e desenvolvimento de agorafobia significativa (evitação de locais públicos, afastamento do trabalho). Causas orgânicas afastadas. Impacto crescente na qualidade de vida e na adesão ao pré-natal.",
    justify: "Preenche critérios DSM-5 para transtorno do pânico: ataques recorrentes e inesperados com ≥4 sintomas (taquicardia, dispneia, parestesias, medo de morrer), seguidos de preocupação persistente com novos ataques e comportamento de evitação (agorafobia). Causas orgânicas afastadas sistematicamente. A gestação é fator precipitante ou agravante.",
    expectedAnamnesis: [
      "Caracterizar os ataques: início, duração, sintomas, desencadeantes",
      "Investigar frequência e evolução desde o início",
      "Pesquisar comportamento de evitação (agorafobia) e impacto na rotina/trabalho/pré-natal",
      "Investigar medo de consequências dos ataques para o bebê",
      "Pesquisar antecedentes pessoais e familiares de ansiedade ou pânico",
      "Investigar uso de cafeína e outras substâncias",
      "Avaliar humor e rastreio de depressão perinatal (comórbida em até 50%)",
      "Avaliar risco de suicídio",
      "Pesquisar impacto na adesão ao pré-natal"
    ],
    expectedPhysical: [
      "Sinais vitais: FC levemente elevada por ansiedade",
      "Avaliação obstétrica: BCF, AU, movimentação fetal, colo",
      "Cardiovascular: ausculta sem sopros patológicos",
      "Respiratório: ausculta sem alterações",
      "Neurológico: sem déficits focais"
    ],
    expectedExams: [
      { exam: "ECG", justify: "Afastar arritmia cardíaca", expected: "Normal, ritmo sinusal" },
      { exam: "TSH (faixa gestacional)", justify: "Afastar hipertireoidismo gestacional", expected: "Normal para a IG" },
      { exam: "Glicemia de jejum", justify: "Afastar hipoglicemia", expected: "Normal" }
    ],
    expectedConduct: "Primeira linha — não farmacológica (preferida na gestação): TCC com técnicas de exposição interoceptiva e reestruturação cognitiva. Técnicas de respiração diafragmática (ensinar durante a consulta). Orientação sobre a fisiopatologia dos ataques. (ABP, ACOG — psicoterapia como primeira linha na gestação) | Farmacológica (se necessário após falha da psicoterapia): Sertralina em dose mínima eficaz — ISRS com melhor perfil de segurança gestacional. Discutir risco-benefício. Evitar paroxetina (risco cardíaco fetal). (RENAME 2023; ACOG 2023) | Benzodiazepínicos: EVITAR na gestação (risco de fenda palatina no 1º trimestre, síndrome de abstinência neonatal, hipotonia fetal). Uso pontual apenas em crise aguda intensa, NÃO como manutenção. (FDA categoria D) | Orientações: explicar que os ataques não causam dano direto ao bebê. Técnica de respiração diafragmática para uso durante os ataques. Encaminhar à psicologia do NASF. | Seguimento: Retorno em 2 semanas. Informar equipe de pré-natal sobre o diagnóstico.",
    expectedCommunication: "Reassegurar sem minimizar: \"Os ataques são reais e muito assustadores, mas os exames mostram que seu coração e sua bebê estão bem.\" | Abordar a culpa: \"Os ataques não causam dano direto à sua bebê. O que causa risco é não tratar — você fez certo em buscar ajuda.\" | Psicoeducação: explicar o ciclo do pânico e o papel da respiração diafragmática.",
    criticalErrors: [
      "Prescrever benzodiazepínico de manutenção em gestante (risco fetal significativo)",
      "Não solicitar ECG para afastar causa cardíaca",
      "Não investigar comportamento de evitação (agorafobia) que está impactando o pré-natal",
      "Não orientar sobre técnica não farmacológica (respiração diafragmática) como medida imediata",
      "Dizer à paciente que os ataques prejudicam o bebê sem evidência (aumenta culpa e piora o pânico)"
    ]
  },
  instD: {
    title: "CHECKLIST — GESTANTE COM SENSAÇÃO DE SUFOCAMENTO E MEDO DE MORRER",
    sections: [
      {
        h: "COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
        items: [
          { item: "Apresentou-se e acolheu a paciente ainda em estado ansioso", score: 0.3, ref: "CFM nº 1.931/2009" },
          { item: "Reassegurou que o coração e a bebê estão bem após os exames", score: 0.5, ref: "MS — Política Nacional de Humanização, 2013" },
          { item: "Abordou a culpa da paciente em relação aos ataques e ao bebê", score: 0.5, ref: "MS — Saúde Mental na Gestação, 2022" },
          { item: "Explicou o diagnóstico e o tratamento em linguagem acessível", score: 0.3, ref: "CFM nº 1.931/2009" }
        ]
      },
      {
        h: "ANAMNESE",
        items: [
          { item: "Caracterizou os ataques (duração, sintomas, frequência, evolução)", score: 0.5, ref: "DSM-5; ABP — Diretrizes Transtorno do Pânico, 2021" },
          { item: "Investigou comportamento de evitação (agorafobia) e impacto na rotina e no pré-natal", score: 1.0, ref: "DSM-5; ABP — Diretrizes Transtorno do Pânico, 2021" },
          { item: "Rastreou depressão perinatal comórbida", score: 0.5, ref: "MS — Saúde Mental na Gestação, 2022" },
          { item: "Avaliou risco de suicídio", score: 0.5, ref: "MS — PCDT Prevenção do Suicídio, 2022" }
        ]
      },
      {
        h: "EXAME FÍSICO",
        items: [
          { item: "Avaliou sinais vitais e realizou ausculta cardíaca e pulmonar", score: 0.5, ref: "Semiologia Médica — FMUSP" },
          { item: "Realizou avaliação obstétrica (BCF, AU, movimentos fetais)", score: 0.5, ref: "MS — Pré-Natal de Baixo Risco, 2022" }
        ]
      },
      {
        h: "RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO",
        items: [
          { item: "Solicitou ECG para afastar arritmia", score: 0.5, ref: "ABP — Diretrizes Transtorno do Pânico, 2021" },
          { item: "Formulou hipótese de transtorno do pânico com agorafobia", score: 0.5, ref: "DSM-5; ABP — Diretrizes Transtorno do Pânico, 2021" },
          { item: "Identificou contraindicação relativa do benzodiazepínico na gestação", score: 1.0, ref: "FDA categoria D; ABP 2021; ACOG 2023" }
        ]
      },
      {
        h: "CONDUTA E ORIENTAÇÃO AO PACIENTE",
        items: [
          { item: "Indicou psicoterapia (TCC) como tratamento de primeira linha na gestante", score: 1.0, ref: "ABP 2021; ACOG 2023" },
          { item: "Ensinou técnica de respiração diafragmática como manejo imediato dos ataques", score: 0.5, ref: "ABP — Diretrizes Transtorno do Pânico, 2021" },
          { item: "Não prescreveu benzodiazepínico de manutenção", score: 0.5, ref: "FDA categoria D; ABP 2021" },
          { item: "Encaminhou ao NASF/psicologia e estabeleceu seguimento", score: 0.3, ref: "MS — Saúde Mental na Gestação, 2022" }
        ]
      }
    ]
  }
},

// CASO 08
{
  id: 8,
  title: "Paciente confuso, gritando e tentando sair da cama na enfermaria",
  sub: "Enfermaria de Clínica Médica — Hospital Geral",
  tema: "Psiquiatria",
  topic: "Delirium (síndrome confusional aguda)",
  level: "complexo",
  cardAccent: "#4E342E",
  instA: {
    scenario: "Enfermaria de Clínica Médica — Hospital Geral. Internação no 3º dia pós-operatório de cirurgia de quadril. Plantão noturno. A enfermagem chamou o médico plantonista porque o paciente está agitado, desorientado e tentando tirar o acesso venoso.",
    patient: "O.S., 76 anos, masculino, ex-funcionário público, viúvo. Internado há 3 dias por fratura de quadril (queda da própria altura). Fez cirurgia de fixação interna ontem.",
    complaint: "Enfermagem relata que o paciente acordou às 2h da manhã gritando, não reconhece onde está, está tentando tirar o acesso venoso e a sonda vesical, e diz que 'tem gente estranha no quarto'. Não estava assim antes da cirurgia.",
    tasks: [
      "Realize a avaliação clínica do paciente e aplique o CAM (Confusion Assessment Method) para confirmar delirium.",
      "Investigue as causas orgânicas do delirium (AEIOU TIPS).",
      "Revise o prontuário e a prescrição médica em busca de fatores iatrogênicos.",
      "Proponha a conduta terapêutica para o delirium e seus fatores causais.",
      "Comunique ao familiar (filho) presente o diagnóstico e o plano de cuidados."
    ]
  },
  instB: {
    vitals: {
      PA: "144/88 mmHg",
      FC: "102 bpm",
      FR: "24 irpm",
      Tax: "38,4°C",
      Peso: "72 kg",
      Altura: "1,68 m",
      IMC: "25,5 kg/m²"
    },
    physicalGeneral: "Paciente em regular estado geral, agitado, tentando sentar na cama. Desorientado no tempo e espaço (não sabe onde está, acha que está em casa). Confuso, com fala incoerente e alternando períodos de agitação com sonolência (flutuação do nível de consciência). Febre. Taquicárdico. SatO2 91% em ar ambiente.",
    physicalSeg: "Neurológico: Desorientado em tempo e espaço. Atenção gravemente comprometida (não consegue contar de trás para frente). Memória imediata comprometida. Discurso desorganizado. Alucinações visuais (\"tem gente no canto do quarto\"). Sem déficits focais motores ou sensitivos. Pupilas isocóricas, midriáticas leves (3,5 mm). | Respiratório: MV presente com estertores crepitantes em base direita. Taquipneia. | Cardiovascular: Taquicardia sinusal. BRNF, sem sopros. | Abdominal: Sonda vesical com urina turva e amarelo-escura. RHA hipoativos. Sem peritonismo. | CAM (Confusion Assessment Method): Critério 1 (início agudo e flutuação): SIM. Critério 2 (desatenção): SIM. Critério 3 (pensamento desorganizado): SIM. Critério 4 (nível de consciência alterado): SIM → CAM POSITIVO = DELIRIUM.",
    labs: [
      { test: "Hemograma", val: "Leucócitos 14.800/mm³ (neutrófilos 86%)", ref: "4.000–10.000/mm³", alt: true },
      { test: "PCR", val: "128 mg/L", ref: "<5 mg/L", alt: true },
      { test: "Sódio", val: "149 mEq/L", ref: "135–145 mEq/L", alt: true },
      { test: "Glicemia", val: "62 mg/dL", ref: "70–140 mg/dL", alt: true },
      { test: "Creatinina", val: "2,1 mg/dL", ref: "0,7–1,2 mg/dL", alt: true },
      { test: "Ureia", val: "74 mg/dL", ref: "15–40 mg/dL", alt: true },
      { test: "Urina I", val: "Piúria (>50 leuc/campo), bacteriúria", ref: "Normal", alt: true },
      { test: "SatO2", val: "91% AA", ref: ">95%", alt: true },
      { test: "RX tórax", val: "Opacidade em base pulmonar direita sugestiva de pneumonia", ref: "Normal", alt: true }
    ],
    image: "Radiografia de tórax (AP): Opacidade heterogênea em base pulmonar direita, compatível com processo infeccioso/consolidação. Seios costofrênicos esquerdos livres. Área cardíaca nos limites.",
    note: "Entregar sinais vitais ao início. O ator deve simular desorientação e agitação (tentando tirar o acesso). Um filho (segundo ator) está presente do lado de fora — pode ser chamado. Prontuário impresso disponível com: cirurgia de ontem, medicamentos em uso (morfina 5 mg SC 6/6h, dipirona, tramadol, omeprazol, atenolol). Exames laboratoriais e RX entregues se solicitados.",
    patientProfile: "O.S., 76 anos, masculino, ex-funcionário público aposentado, viúvo. Mora com o filho. Antecedentes: HAS, DM2, insuficiência renal crônica leve (creatinina basal 1,3 mg/dL). Internado por fratura de colo de fêmur direito após queda.",
    script: [
      { trigger: "Abordagem inicial", speech: "Quem é você? Onde estou? Eu quero ir pra casa! Tira isso do meu braço!" },
      { trigger: "Sobre as pessoas que vê", speech: "Tem uns homens ali no canto. Tão me olhando. Quem são eles? (aponta para canto vazio)" },
      { trigger: "Quando orientado com calma", speech: "(confuso) Eu fui operado? Não me lembro... Que dia é hoje?" },
      { trigger: "Períodos de lucidez (flutuação)", speech: "Doutor... tô com sede. Onde tô?" },
      { trigger: "Script do filho", speech: "Doutor, meu pai nunca foi assim. Antes da cirurgia estava bem, lúcido. De repente hoje à noite virou outra pessoa. Isso é o começo de uma demência?" }
    ],
    hiddenInfo: "Paciente recebeu morfina 5 mg SC às 20h, 22h e 00h (três doses em 4 horas, acima do prescrito) por erro de enfermagem — revelado apenas no prontuário se o candidato revisar a prescrição e a administração. | Paciente com insuficiência renal crônica leve pré-existente — creatinina basal 1,3 mg/dL no prontuário; creatinina atual de 2,1 indica lesão renal aguda sobre crônica.",
    actorBehavior: "Alternância entre agitação (tentativa de tirar acesso, gritos, alucinações visuais) e períodos de sonolência/lucidez parcial. Responde quando abordado com calma e em voz clara e próxima. Fica mais tranquilo quando o candidato se apresenta, faz contato visual e toca o ombro com gentileza. O filho está ansioso e com medo de demência."
  },
  instC: {
    diagnosis: "Delirium hiperativo em idoso (76 anos), multifatorial: pneumonia de base direita + infecção urinária + hipernatremia + hipoglicemia + superdosagem de morfina em contexto de insuficiência renal aguda sobre crônica. Pós-operatório de cirurgia de quadril (3º dia). CAM positivo. CID-11: 5C71 / DSM-5: F05.",
    differentials: [
      "Demência com agitação noturna (sundowning) — pode ser confundida; no entanto, o início agudo (antes da cirurgia estava lúcido), a flutuação e as alucinações visuais são característicos de delirium, não de demência isolada.",
      "Encefalopatia hepática — sem história de hepatopatia, função hepática preservada; menos provável.",
      "Acidente vascular cerebral — delirium pode ser apresentação de AVC; no entanto, ausência de déficit focal e contexto clínico de múltiplos fatores precipitantes tornam delirium mais provável; TC de crânio pode ser necessária se não houver melhora.",
      "Psicose — alucinações visuais em idoso sem história psiquiátrica e com início agudo são características de delirium, não de psicose primária."
    ],
    context: "Idoso de 76 anos, 3º dia pós-operatório de cirurgia de quadril, apresenta delirium hiperativo com início agudo noturno (típico), flutuação do nível de consciência, desatenção grave, pensamento desorganizado e alucinações visuais. CAM positivo. Múltiplos fatores precipitantes: pneumonia, ITU, hipernatremia, hipoglicemia e superdosagem de opioide em contexto de lesão renal aguda.",
    justify: "CAM positivo com todos os 4 critérios presentes. Fatores precipitantes múltiplos: infecção pulmonar (leucocitose, PCR elevado, RX com consolidação), infecção urinária (urina I com piúria), hipernatremia (149 mEq/L), hipoglicemia (62 mg/dL), morfina em dose excessiva com acúmulo por insuficiência renal aguda. Contexto pós-operatório em idoso (fator de risco maior para delirium).",
    expectedAnamnesis: [
      "Obter informações do filho sobre o estado pré-mórbido (cognição basal, funcionalidade)",
      "Investigar início e flutuação do quadro confusional",
      "Revisar o prontuário: cirurgia, anestesia, medicamentos em uso e doses administradas",
      "Pesquisar sintomas infecciosos (febre, tosse, disúria)",
      "Investigar ingestão de líquidos e diurese (desidratação/hipernatremia)",
      "Pesquisar última medição de glicemia",
      "Revisar medicações que podem precipitar delirium (opioides, anticolinérgicos, BZD)"
    ],
    expectedPhysical: [
      "Aplicar CAM para confirmar delirium",
      "Avaliar sinais vitais: febre, taquicardia, taquipneia, SatO2 baixa",
      "Avaliação neurológica: atenção, orientação, linguagem, alucinações, déficits focais",
      "Avaliação pulmonar: crepitações em base direita (pneumonia)",
      "Avaliação urinária: urina turva na sonda (ITU)",
      "Avaliação do nível de hidratação: mucosas, turgor"
    ],
    expectedExams: [
      { exam: "Hemograma e PCR", justify: "Investigar infecção como causa de delirium", expected: "Leucocitose, PCR elevado" },
      { exam: "Glicemia capilar", justify: "Afastar hipoglicemia (agitação, confusão)", expected: "62 mg/dL (baixa)" },
      { exam: "Eletrólitos (Na, K)", justify: "Investigar distúrbios eletrolíticos", expected: "Hipernatremia (149)" },
      { exam: "Creatinina e ureia", justify: "Avaliar função renal (acúmulo de morfina)", expected: "Elevadas — LRA" },
      { exam: "Urina I e urocultura", justify: "Investigar ITU como foco infeccioso", expected: "Piúria, bacteriúria" },
      { exam: "Radiografia de tórax", justify: "Investigar pneumonia como foco", expected: "Consolidação base D" },
      { exam: "SatO2 / oximetria", justify: "Avaliar hipoxemia como causa de confusão", expected: "91% — hipoxemia" }
    ],
    expectedConduct: "Tratar as causas (pilar principal): antibiótico para pneumonia (Amoxicilina-clavulanato 500/125 mg VO 8/8h ou Ampicilina-sulbactam IV se grave); antibiótico para ITU (Nitrofurantoína ou SMX-TMP — ajustar para função renal); correção da hipoglicemia (Glicose 50% 20 mL IV + SG 10%); correção da hipernatremia (hidratação com solução hipotônica gradualmente); suspender/reduzir morfina (acúmulo por LRA — avaliar naloxona; analgesia alternativa com dipirona/paracetamol); oxigenoterapia (cateter nasal 2–3 L/min para SatO2 >95%). | Medidas não farmacológicas: orientação frequente (nome, local, data); presença do familiar; iluminação adequada; retirada de contenções desnecessárias; mobilização precoce quando seguro; correção de privação sensorial (óculos, aparelho auditivo). | Farmacológico para agitação (se necessário): Haloperidol 0,5–1 mg VO ou IM (dose mínima). Evitar BZD (piora o delirium em idosos). (MS — Protocolo de Delirium, 2022; RENAME 2023)",
    expectedCommunication: "Com o paciente: voz calma e clara, frases curtas, identificar-se a cada abordagem, reorientar sem confrontar as alucinações. | Com o filho: \"Seu pai está com uma confusão mental chamada delirium, que é diferente de demência. É causada por vários fatores que estamos tratando agora. Com o tratamento, a maioria dos idosos melhora em dias.\"",
    criticalErrors: [
      "Não aplicar o CAM para confirmar delirium de forma estruturada",
      "Não revisar o prontuário e as medicações (não identificar a superdosagem de morfina)",
      "Não medir glicemia capilar imediatamente (hipoglicemia é causa emergencial de confusão)",
      "Usar benzodiazepínico para sedar o idoso delirante (piora o delirium e aumenta mortalidade)",
      "Dizer ao filho que é começo de demência sem investigar causas reversíveis",
      "Realizar contenção física sem tratar as causas do delirium"
    ]
  },
  instD: {
    title: "CHECKLIST — PACIENTE CONFUSO E AGITADO NA ENFERMARIA",
    sections: [
      {
        h: "COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
        items: [
          { item: "Abordou o paciente com voz calma, clara e em frases curtas", score: 0.5, ref: "MS — Protocolo de Delirium, 2022" },
          { item: "Reorientou o paciente (nome, local, data) de forma gentil e repetida", score: 0.5, ref: "MS — Protocolo de Delirium, 2022" },
          { item: "Explicou ao filho que delirium é diferente de demência e é potencialmente reversível", score: 0.5, ref: "MS — Protocolo de Delirium, 2022" },
          { item: "Orientou o filho a permanecer ao lado do paciente para auxiliar na reorientação", score: 0.3, ref: "MS — Protocolo de Delirium, 2022" }
        ]
      },
      {
        h: "ANAMNESE",
        items: [
          { item: "Obteve histórico do filho sobre estado cognitivo basal antes da cirurgia", score: 0.5, ref: "MS — Protocolo de Delirium, 2022" },
          { item: "Revisou o prontuário e as medicações administradas (identificação da superdosagem de morfina)", score: 1.0, ref: "MS — Protocolo de Delirium, 2022" },
          { item: "Investigou fatores precipitantes: infecção, distúrbios metabólicos, hipoxemia", score: 0.5, ref: "MS — Protocolo de Delirium, 2022" }
        ]
      },
      {
        h: "EXAME FÍSICO",
        items: [
          { item: "Aplicou o CAM (Confusion Assessment Method) corretamente", score: 1.0, ref: "MS — Protocolo de Delirium, 2022; Inouye et al." },
          { item: "Avaliou SatO2 e realizou ausculta pulmonar", score: 0.5, ref: "MS — Protocolo de Delirium, 2022" },
          { item: "Avaliou urina na sonda vesical (turva = ITU)", score: 0.3, ref: "MS — Protocolo de Delirium, 2022" }
        ]
      },
      {
        h: "RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO",
        items: [
          { item: "Solicitou glicemia capilar imediatamente", score: 0.5, ref: "MS — Protocolo de Delirium, 2022" },
          { item: "Solicitou hemograma, PCR, eletrólitos e creatinina para investigação etiológica", score: 0.5, ref: "MS — Protocolo de Delirium, 2022" },
          { item: "Identificou múltiplas causas do delirium (pneumonia, ITU, hipernatremia, hipoglicemia, morfina)", score: 0.5, ref: "MS — Protocolo de Delirium, 2022" }
        ]
      },
      {
        h: "CONDUTA E ORIENTAÇÃO AO PACIENTE",
        items: [
          { item: "Tratou as causas identificadas (antibiótico, glicose, hidratação, ajuste da morfina, O2)", score: 1.0, ref: "MS — Protocolo de Delirium, 2022; RENAME 2023" },
          { item: "Indicou medidas não farmacológicas (reorientação, iluminação, mobilização, presença familiar)", score: 0.5, ref: "MS — Protocolo de Delirium, 2022" },
          { item: "Não usou benzodiazepínico para sedar o idoso delirante", score: 0.5, ref: "MS — Protocolo de Delirium, 2022" }
        ]
      }
    ]
  }
},

// CASO 09
{
  id: 9,
  title: "Policial militar com 'nervos destruídos' após operação há seis meses",
  sub: "Ambulatório de Saúde Mental — Policlínica",
  tema: "Psiquiatria",
  topic: "Transtorno de estresse pós-traumático em homem — apresentação atípica",
  level: "complexo",
  cardAccent: "#1A237E",
  instA: {
    scenario: "Ambulatório de Saúde Mental — Policlínica Pública. Primeira consulta, turno da tarde. Paciente encaminhado pela médica do trabalho da corporação após dois acidentes sem vítimas no trabalho, irritabilidade intensa e dois episódios de licença médica por 'stress'.",
    patient: "R.C., 38 anos, masculino, policial militar (13 anos de carreira), casado, dois filhos. Encaminhado pela medicina do trabalho.",
    complaint: "Paciente afirma ter vindo 'para cumprir protocolo'. Minimiza os sintomas. A esposa relatou em ligação para a clínica que o marido está irreconhecível: agressivo, não dorme, bebe mais do que antes e deu um soco na parede na semana passada.",
    tasks: [
      "Realize a anamnese de forma empática, explorando os sintomas sem forçar o relato do evento traumático.",
      "Investigue os 4 clusters do TEPT (revivência, evitação, alterações cognitivas/humor, hiperexcitabilidade).",
      "Avalie comorbidades: uso de álcool, depressão e risco de suicídio.",
      "Formule a hipótese diagnóstica e os diagnósticos diferenciais.",
      "Proponha a conduta terapêutica adaptada ao perfil do paciente, abordando a resistência ao tratamento."
    ]
  },
  instB: {
    vitals: {
      PA: "148/94 mmHg",
      FC: "94 bpm",
      FR: "18 irpm",
      Tax: "36,7°C",
      Peso: "92 kg",
      Altura: "1,80 m",
      IMC: "28,4 kg/m²"
    },
    physicalGeneral: "Paciente em bom estado geral, postura rígida, expressão fechada. Sem sinais de intoxicação aguda. Lúcido e orientado. Tônus muscular aumentado em ombros e pescoço. Sem lesões cutâneas. Hipervigilante — senta voltado para a porta, percebe os mínimos ruídos do corredor.",
    physicalSeg: "Neurológico: Sem déficits focais. Atenção levemente reduzida. Reflexos normais. | Cardiovascular: PA elevada, FC levemente elevada. BRNF, sem sopros. | Musculoesquelético: Tensão muscular intensa em trapézio e cervical. Sem contractura articular.",
    labs: [
      { test: "Hemograma", val: "Normal", ref: "—", alt: false },
      { test: "TSH", val: "2,2 mUI/L", ref: "0,4–4,0 mUI/L", alt: false },
      { test: "Glicemia de jejum", val: "104 mg/dL", ref: "70–99 mg/dL", alt: true },
      { test: "TGO", val: "52 U/L", ref: "<40 U/L", alt: true },
      { test: "TGP", val: "48 U/L", ref: "<41 U/L", alt: true },
      { test: "GGT", val: "98 U/L", ref: "<60 U/L", alt: true },
      { test: "CAGE", val: "3/4 (alto risco para dependência alcoólica)", ref: "0–1: baixo risco", alt: true }
    ],
    image: null,
    note: "Sinais vitais entregues ao início. Exames laboratoriais entregues somente se solicitados. O ator deve manter postura de resistência ao início — cruzando os braços, respondendo com frases curtas, minimizando. A abertura ocorre progressivamente quando o candidato adota abordagem respeitosa, sem pressionar para relato do trauma. O candidato deve ser avaliado especialmente pela habilidade de abordar TEPT em homem com resistência cultural à busca de ajuda.",
    patientProfile: "R.C., 38 anos, masculino, policial militar (13 anos), sargento. Casado há 12 anos, dois filhos (10 e 8 anos). Medalha de bravura. Participa de grupos de WhatsApp da corporação diariamente. Natural de Fortaleza/CE.",
    script: [
      { trigger: "Abordagem inicial", speech: "Olha, eu vim porque mandaram me mandar. Não tô aqui por vontade própria. Policial não vai a psiquiatra." },
      { trigger: "Sobre o que aconteceu na operação", speech: "Não falar espontaneamente. Se perguntado gentilmente: \"Teve uma situação difícil. Perdi um colega. Não gosto de falar sobre isso.\"" },
      { trigger: "Sobre os flashbacks", speech: "Só se perguntado com empatia: \"Às vezes a cena aparece na minha cabeça do nada. No trânsito, em qualquer barulho forte. Mas eu controlo.\"" },
      { trigger: "Sobre o sono", speech: "Não durmo bem faz meses. Acordo de madrugada. Qualquer barulho me acorda. Mas é porque o serviço é perigoso mesmo." },
      { trigger: "Sobre a irritabilidade", speech: "Minha esposa reclama que eu tô diferente. Mas ela não entende o que é o meu trabalho." },
      { trigger: "Sobre o álcool", speech: "Só se perguntado diretamente: \"Tomo umas cervejas depois do serviço pra relaxar. Uns cinco ou seis. Todo dia. Às vezes mais.\"" },
      { trigger: "Sobre evitação", speech: "Se perguntado: \"Evito algumas ruas onde aconteceu. Mudo de rota. É cautela de policial, não fraqueza.\"" },
      { trigger: "Sobre suicídio", speech: "Só se perguntado diretamente e com relação de confiança estabelecida: \"Uma vez ou outra o pensamento aparece. Que eu não deveria ter sobrevivido. Que ele era melhor policial do que eu.\"" },
      { trigger: "Pergunta ativa do paciente", speech: "O que o senhor vai escrever no meu prontuário? Isso vai afetar meu serviço?" },
      { trigger: "Pergunta ativa do paciente", speech: "Remédio de cabeça deixa lento? Não posso ficar lento no serviço." }
    ],
    hiddenInfo: "Ideação de sobrevivente (\"não deveria ter sobrevivido\") com episódios ocasionais de pensamento de que seria melhor não estar aqui — revelar apenas com pergunta direta e com vínculo estabelecido. | Consumo de 5–6 cervejas diárias, todos os dias (CAGE 3/4 — dependência provável) — revelar apenas se perguntado especificamente sobre quantidade e frequência do consumo de álcool.",
    actorBehavior: "Postura defensiva no início — braços cruzados, respostas curtas, minimização. Senta voltado para a porta e reage a ruídos (hipervigilância). Abre-se progressivamente quando o candidato respeita o ritmo e usa linguagem compatível com a identidade militar. Demonstra vulnerabilidade ao falar do colega morto — voz embarga. Emoção rapidamente suprimida (norma masculina)."
  },
  instC: {
    diagnosis: "Transtorno de estresse pós-traumático (TEPT) em homem, com apresentação atípica (externalização via irritabilidade, uso de álcool e negação), decorrente de trauma de combate/operação policial com perda de colega. Comorbidade: uso nocivo/dependência de álcool (CAGE 3) e ideação de sobrevivente. CID-11: 6B40 / 6C40.1 / DSM-5: F43.10 + F10.20.",
    differentials: [
      "Transtorno de ajustamento com humor misto — sintomas de adaptação após evento estressor sem preencher critérios plenos de TEPT; excluído pela duração >6 meses, presença dos 4 clusters e intensidade do comprometimento funcional.",
      "Transtorno explosivo intermitente — episódios de agressividade desproporcional; no entanto, aqui os episódios ocorrem em contexto de hiperexcitabilidade do TEPT, com eventos desencadeantes relacionados ao trauma.",
      "Depressão maior com irritabilidade — humor deprimido proeminente com irritabilidade; no entanto, revivência, evitação e hipervigilância são dominantes no quadro, sugerindo TEPT como diagnóstico principal.",
      "Intoxicação crônica por álcool com transtorno comportamental — o álcool agrava o quadro mas não explica todos os sintomas, que precedem e superam o padrão de consumo."
    ],
    context: "Policial militar de 38 anos, após operação com perda de colega há 6 meses, apresenta TEPT com apresentação típica masculina: irritabilidade intensa, hipervigilância, evitação de locais relacionados ao trauma, insônia, flashbacks minimizados e uso nocivo de álcool como automedicação. Ideação de sobrevivente presente. Resistência cultural à busca de ajuda dificulta diagnóstico precoce.",
    justify: "Preenche os 4 clusters DSM-5 do TEPT: revivência (flashbacks no trânsito e com barulhos), evitação (muda de rota para evitar o local), alterações cognitivas/humor (culpa de sobrevivente, distanciamento da família, irritabilidade), hiperexcitabilidade (insônia, sobressalto, hipervigilância). Duração >6 meses. Comprometimento funcional (dois acidentes, licenças). Comorbidade com uso nocivo de álcool.",
    expectedAnamnesis: [
      "Estabelecer vínculo e respeitar o ritmo do paciente antes de investigar o trauma",
      "Investigar os 4 clusters do TEPT sem forçar o relato detalhado do evento",
      "Pesquisar flashbacks e revivência (quando ocorrem, desencadeantes)",
      "Investigar comportamentos de evitação (locais, situações, pessoas relacionadas ao trauma)",
      "Pesquisar alterações de humor e cognição (culpa, distanciamento, irritabilidade)",
      "Investigar hiperexcitabilidade (insônia, sobressalto, hipervigilância)",
      "Pesquisar uso de álcool e outras substâncias (automedicação)",
      "Avaliar risco de suicídio (incluindo ideação de sobrevivente)",
      "Investigar impacto profissional e familiar",
      "Abordar preocupações sobre confidencialidade e impacto na carreira"
    ],
    expectedPhysical: [
      "Sinais vitais: PA elevada (hiperexcitabilidade autonômica + álcool)",
      "Avaliação do estado mental: hipervigilância, humor, afeto congruente",
      "Avaliação muscular: tensão em trapézio e cervical",
      "Avaliação de sinais de hepatopatia alcoólica (GGT e TGO/TGP elevados)"
    ],
    expectedExams: [
      { exam: "CAGE", justify: "Rastreio de dependência alcoólica", expected: "3/4 (alto risco)" },
      { exam: "TGO, TGP, GGT", justify: "Avaliar hepatopatia alcoólica incipiente", expected: "Levemente elevados" },
      { exam: "TSH", justify: "Afastar hipotireoidismo como causa de humor deprimido", expected: "Normal" },
      { exam: "Glicemia", justify: "Rastreio de DM2 (sobrepeso + álcool)", expected: "Levemente alterada" }
    ],
    expectedConduct: "Psicoterapia (primeira linha): TCC focada no trauma (TCC-T), terapia de exposição prolongada (EP) ou EMDR — maior evidência para TEPT. (ABP — Diretrizes TEPT, 2022; UpToDate 2024) | Farmacológica: Sertralina 50–200 mg/dia ou Paroxetina 20–60 mg/dia (aprovados para TEPT). Prazosina pode ser adicionada para pesadelos e hiperexcitabilidade noturna. (RENAME 2023; ABP — Diretrizes TEPT, 2022) | Álcool: abordar como automedicação do TEPT — explicar que piora os sintomas a médio prazo. Encaminhar ao CAPS AD se dependência confirmada. | Confidencialidade: abordar diretamente a preocupação com o prontuário. Explicar os limites do sigilo médico. | Abordagem da resistência: usar linguagem compatível com a identidade militar (\"muitos veteranos e policiais passam por isso — buscar ajuda é parte do treinamento para continuar operacional\"). | Seguimento: encaminhar ao serviço de saúde mental com experiência em trauma. Retorno em 2 semanas.",
    expectedCommunication: "Abordagem da resistência: não confrontar a masculinidade normativa; usar enquadramento de resiliência e eficiência (\"tratar isso vai te deixar mais eficaz no trabalho, não menos\"). | Sobre o trauma: não forçar o relato; validar que não precisa contar tudo agora. | Sobre suicídio: perguntar de forma direta mas respeitosa, enquadrando como preocupação com a saúde dele.",
    criticalErrors: [
      "Forçar o relato detalhado do evento traumático na primeira consulta (pode retraumatizar e romper o vínculo)",
      "Não investigar os 4 clusters do TEPT por aceitar a minimização do paciente",
      "Não perguntar diretamente sobre risco de suicídio (ideação de sobrevivente é fator de risco)",
      "Não investigar o uso de álcool (automedicação do TEPT — fator de risco para suicídio e perpetuação do quadro)",
      "Usar benzodiazepínico de longa duração para o TEPT (evidência insuficiente; pode piorar o processamento do trauma e criar dependência em paciente com uso problemático de álcool)"
    ]
  },
  instD: {
    title: "CHECKLIST — POLICIAL COM NERVOS DESTRUÍDOS APÓS OPERAÇÃO",
    sections: [
      {
        h: "COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
        items: [
          { item: "Respeitou o ritmo do paciente sem forçar o relato do trauma na primeira consulta", score: 0.5, ref: "ABP — Diretrizes TEPT, 2022" },
          { item: "Usou linguagem compatível com a identidade do paciente (militar/policial) sem reforçar estigma", score: 0.5, ref: "MS — Saúde Mental do Trabalhador, 2022" },
          { item: "Abordou diretamente a preocupação com confidencialidade e carreira", score: 0.5, ref: "CFM — Código de Ética Médica, 2009" },
          { item: "Explicou que buscar ajuda aumenta a capacidade operacional, não diminui", score: 0.3, ref: "ABP — Diretrizes TEPT, 2022" }
        ]
      },
      {
        h: "ANAMNESE",
        items: [
          { item: "Investigou revivência (flashbacks, pesadelos, reações a estímulos)", score: 0.5, ref: "DSM-5; ABP — Diretrizes TEPT, 2022" },
          { item: "Investigou evitação (locais, situações, pessoas relacionadas ao trauma)", score: 0.5, ref: "DSM-5; ABP — Diretrizes TEPT, 2022" },
          { item: "Investigou hiperexcitabilidade (insônia, sobressalto, hipervigilância, irritabilidade)", score: 0.5, ref: "DSM-5; ABP — Diretrizes TEPT, 2022" },
          { item: "Investigou alterações cognitivas/humor (culpa de sobrevivente, distanciamento)", score: 0.5, ref: "DSM-5; ABP — Diretrizes TEPT, 2022" },
          { item: "Pesquisou uso de álcool com quantidade e frequência (CAGE)", score: 0.5, ref: "MS — PCDT Alcoolismo, 2017" },
          { item: "Avaliou risco de suicídio (incluindo ideação de sobrevivente)", score: 1.0, ref: "MS — PCDT Prevenção do Suicídio, 2022" }
        ]
      },
      {
        h: "EXAME FÍSICO",
        items: [
          { item: "Avaliou sinais vitais (PA elevada, FC)", score: 0.3, ref: "Semiologia Médica — FMUSP" },
          { item: "Observou e registrou hipervigilância (postura voltada para a porta, reação a ruídos)", score: 0.3, ref: "ABP — Diretrizes TEPT, 2022" }
        ]
      },
      {
        h: "RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO",
        items: [
          { item: "Aplicou CAGE ou investigou critérios de dependência alcoólica", score: 0.5, ref: "MS — PCDT Alcoolismo, 2017" },
          { item: "Solicitou TGO, TGP e GGT para avaliar hepatopatia alcoólica", score: 0.3, ref: "MS — PCDT Alcoolismo, 2017" },
          { item: "Formulou diagnóstico de TEPT com apresentação masculina atípica", score: 1.0, ref: "DSM-5; ABP — Diretrizes TEPT, 2022" }
        ]
      },
      {
        h: "CONDUTA E ORIENTAÇÃO AO PACIENTE",
        items: [
          { item: "Indicou psicoterapia focada no trauma como tratamento de primeira linha", score: 1.0, ref: "ABP — Diretrizes TEPT, 2022; UpToDate 2024" },
          { item: "Prescreveu ISRS como suporte farmacológico", score: 0.5, ref: "ABP — Diretrizes TEPT, 2022; RENAME 2023" },
          { item: "Abordou o uso de álcool como automedicação e indicou suporte adequado", score: 0.3, ref: "MS — PCDT Alcoolismo, 2017" }
        ]
      }
    ]
  }
},

// CASO 10
{
  id: 10,
  title: "Mulher que não para de lavar as mãos e chegou atrasada por 'ter que conferir o gás'",
  sub: "Ambulatório de Psiquiatria — Policlínica",
  tema: "Psiquiatria",
  topic: "Transtorno obsessivo-compulsivo (TOC)",
  level: "complexo",
  cardAccent: "#00695C",
  instA: {
    scenario: "Ambulatório de Psiquiatria — Policlínica Municipal. Primeira consulta, turno da manhã. A paciente chegou 40 minutos atrasada, apologética, explicando que 'teve que voltar três vezes pra checar o gás'.",
    patient: "I.R., 33 anos, feminino, contadora, casada, sem filhos. Encaminhada pelo clínico geral após queixa de 'pensamentos que não saem da cabeça' e 'rituais que estão tomando meu dia'.",
    complaint: "Paciente relata pensamentos intrusivos de contaminação e de que algo vai pegar fogo em casa, seguidos de rituais de lavar as mãos (40–60 vezes ao dia) e verificação de eletrodomésticos (volta para casa em média 3 vezes por semana). Refere que 'sabe que é loucura, mas não consegue resistir'.",
    tasks: [
      "Realize a anamnese dirigida ao TOC, investigando obsessões, compulsões e seu impacto funcional.",
      "Estime a gravidade com base nos critérios da Y-BOCS (Yale-Brown Obsessive Compulsive Scale).",
      "Investigue diagnósticos diferenciais (TAG, TEPT, esquizofrenia, depressão).",
      "Formule a hipótese diagnóstica.",
      "Proponha o plano terapêutico baseado em evidências e oriente a paciente."
    ]
  },
  instB: {
    vitals: {
      PA: "116/74 mmHg",
      FC: "80 bpm",
      FR: "16 irpm",
      Tax: "36,5°C",
      Peso: "63 kg",
      Altura: "1,65 m",
      IMC: "23,1 kg/m²"
    },
    physicalGeneral: "Paciente em bom estado geral, lúcida, orientada, bem arrumada. Sem sinais de doença dermatológica nas mãos (pele levemente ressecada e avermelhada na região dorsal das mãos — compatível com lavagem excessiva). Sem sinais de automutilação. Contato visual preservado. Sem lentidão psicomotora.",
    physicalSeg: "Dermatológico: Pele das mãos ressecada e com eritema difuso em dorso — compatível com lavagem compulsiva excessiva. | Neurológico: Sem déficits focais. | Estado mental: Aparência cuidada, psicomotricidade normal; humor levemente ansioso, afeto congruente; fala organizada e coerente; pensamento sem desorganização formal, obsessões egodistônicas presentes (reconhece como irracionais); sem alucinações; orientada; insight preservado.",
    labs: [
      { test: "Hemograma", val: "Normal", ref: "—", alt: false },
      { test: "TSH", val: "2,1 mUI/L", ref: "0,4–4,0 mUI/L", alt: false },
      { test: "Glicemia de jejum", val: "90 mg/dL", ref: "70–99 mg/dL", alt: false }
    ],
    image: null,
    note: "Sinais vitais e observação das mãos entregues ao início. Exames laboratoriais entregues apenas se solicitados. O candidato deve ser avaliado pela habilidade de distinguir TOC de TAG e de psicose, pela aplicação dos critérios da Y-BOCS (ou sua referência) e pela proposta terapêutica correta (ISRS em dose alta + TCC com EPR).",
    patientProfile: "I.R., 33 anos, feminino, contadora em escritório de médio porte, casada há 4 anos. Sem diagnóstico psiquiátrico prévio. Sintomas presentes há cerca de 3 anos, com piora progressiva nos últimos 6 meses após promoção no trabalho. Natural de Fortaleza/CE.",
    script: [
      { trigger: "Chegada e queixa inicial", speech: "Desculpa o atraso, doutora. Tive que voltar duas vezes porque fiquei com a sensação de que tinha deixado o gás aberto. Eu sei que não tinha. Mas o pensamento não saía." },
      { trigger: "Sobre as lavagens", speech: "Lavo as mãos umas 40, 50 vezes por dia. Tenho a sensação de que estão sujas, de que vou contaminar meu marido ou eu vou ficar doente. Às vezes passo 20 minutos na pia." },
      { trigger: "Sobre os rituais de verificação", speech: "Antes de sair de casa, tenho que conferir o gás, o ferro de passar, as janelas. Faço isso em ordem. Se interromperem, tenho que começar do zero." },
      { trigger: "Sobre o insight", speech: "Eu sei que parece loucura. Meu marido fica desesperado. Eu sei que o gás não tá aberto, que minhas mãos não tão sujas. Mas não consigo não fazer." },
      { trigger: "Sobre o início", speech: "Sempre fui meio perfeccionista. Mas há uns 3 anos piorou muito. Depois de uma promoção no trabalho que me deixou sobrecarregada." },
      { trigger: "Sobre o impacto", speech: "Já cheguei a trabalhar em home office pra poder fazer os rituais sem ninguém ver. Saio de reuniões pra lavar a mão. Tô perdendo produtividade." },
      { trigger: "Sobre tentativas de resistir", speech: "Quando tento não lavar, fico tão ansiosa que parece que vou enlouquecer. Só alivia quando lavo." },
      { trigger: "Pergunta ativa", speech: "Eu tenho algum problema mental grave? Isso tem cura?" },
      { trigger: "Pergunta ativa", speech: "Remédio resolve? Ou vou precisar fazer terapia pra sempre?" }
    ],
    hiddenInfo: "Ritualiza também simetricamente os objetos da mesa de trabalho (precisam estar perfeitamente alinhados antes de começar a trabalhar) — revelar apenas se o candidato perguntar sobre outros rituais além da lavagem e verificação. | Evita tocar em maçanetas e corrimões fora de casa (usando lenço ou manga) há 1 ano — revelar apenas se perguntado sobre comportamentos de evitação relacionados à contaminação.",
    actorBehavior: "Colaborativa e aliviada por estar buscando ajuda. Demonstra vergonha ao descrever os rituais. Chora levemente ao descrever o impacto no casamento. Demonstra insight preservado — reconhece a irracionalidade mas não consegue resistir. Alivia quando o candidato normaliza o diagnóstico de TOC sem estigma."
  },
  instC: {
    diagnosis: "Transtorno obsessivo-compulsivo (TOC) de moderado a grave, com obsessões de contaminação e de catástrofe (gás, fogo) e compulsões de lavagem e verificação. Insight preservado. Duração ≥3 anos com comprometimento funcional significativo. CID-11: 6B20 / DSM-5: F42.",
    differentials: [
      "Transtorno de ansiedade generalizada — preocupações excessivas em múltiplas áreas sem rituais compulsivos definidos; no TAG não há compulsões estruturadas com caráter ritualístico e egodistônico; as preocupações do TAG são mais flexíveis e relacionadas a situações reais.",
      "Transtorno de personalidade obsessiva-compulsiva (TPOC) — padrão de rigidez, perfeccionismo e controle egossintônico (o paciente com TPOC não reconhece como problemático); no TOC as obsessões são egodistônicas (indesejadas, reconhecidas como irracionais).",
      "Esquizofrenia com pensamentos de controle — pensamentos intrusivos podem simular obsessões; no entanto, no TOC há insight preservado (reconhece como produção própria da mente) e sem alucinações ou delírios; excluído pelo exame do estado mental.",
      "Depressão maior com ruminação — ruminações depressivas são egossintônicas e relacionadas ao humor; no TOC as obsessões são egodistônicas e seguidas de compulsões para neutralizá-las."
    ],
    context: "Mulher de 33 anos com TOC há 3 anos, com piora progressiva nos últimos 6 meses. Obsessões de contaminação (lavagem das mãos 40–50 vezes/dia) e de catástrofe (verificação de gás e eletrodomésticos). Insight preservado. Comprometimento funcional progressivo (trabalho, casamento). Pele das mãos com dermatite de contato por lavagem excessiva.",
    justify: "Preenche critérios DSM-5 para TOC: obsessões (pensamentos intrusivos indesejados de contaminação e catástrofe, reconhecidos como irracionais) + compulsões (rituais de lavagem e verificação realizados para reduzir a ansiedade) que consomem >1 hora/dia e causam comprometimento funcional significativo. Insight preservado — fator prognóstico favorável.",
    expectedAnamnesis: [
      "Investigar a natureza das obsessões: conteúdo, frequência, grau de angústia, controle",
      "Investigar as compulsões: tipo, duração, frequência, capacidade de resistir",
      "Pesquisar o impacto funcional (trabalho, casamento, social)",
      "Estimar tempo consumido por obsessões e compulsões por dia (critério Y-BOCS)",
      "Investigar comportamentos de evitação (maçanetas, corrimões)",
      "Pesquisar outros tipos de obsessões (simétrica, agressiva, sexual, religiosa)",
      "Investigar história pessoal e familiar de TOC ou tiques",
      "Rastrear depressão comórbida (muito frequente no TOC — até 67%)",
      "Avaliar risco de suicídio",
      "Pesquisar uso de substâncias"
    ],
    expectedPhysical: [
      "Avaliação das mãos: dermatite de contato por lavagem excessiva (confirma o comportamento compulsivo)",
      "Avaliação do estado mental: insight, organização do pensamento, ausência de alucinações",
      "Avaliação geral: sem sinais de doença neurológica"
    ],
    expectedExams: [
      { exam: "TSH", justify: "Afastar hipertireoidismo (ansiedade, rituais de verificação)", expected: "Normal" },
      { exam: "Hemograma", justify: "Avaliação geral antes de iniciar farmacoterapia", expected: "Normal" }
    ],
    expectedConduct: "Psicoterapia (primeira linha): TCC com Exposição e Prevenção de Resposta (EPR) — padrão ouro para TOC. O paciente é exposto gradualmente aos estímulos que desencadeiam obsessões sem realizar as compulsões, até a habituação da ansiedade. (ABP — Diretrizes TOC, 2022; UpToDate 2024) | Farmacológica: ISRS em dose alta (característica do TOC — doses maiores que na depressão): Sertralina 150–200 mg/dia, Fluoxetina 40–80 mg/dia ou Fluvoxamina 150–300 mg/dia. Clomipramina 150–300 mg/dia (segunda linha por perfil de efeitos adversos). (RENAME 2023; ABP — Diretrizes TOC, 2022) | Latência prolongada: resposta ao tratamento pode levar 8–12 semanas — orientar a paciente. | Não farmacológico: psicoeducação para o cônjuge (não participar dos rituais — acomodação familiar mantém o TOC). Creme hidratante para as mãos (dermatite). | Encaminhamento: psicólogo com experiência em TCC/EPR para TOC. | Seguimento: Retorno em 4 semanas. Reavaliar com Y-BOCS em 12 semanas.",
    expectedCommunication: "Normalizar sem minimizar: \"TOC é uma condição médica real, não é fraqueza de caráter. O cérebro manda alarmes falsos e você aprende a neutralizá-los com os rituais.\" | Sobre o tratamento: explicar que a EPR pode parecer assustadora mas é o tratamento mais eficaz. Explicar a latência de 8–12 semanas para o medicamento. | Sobre o cônjuge: orientar a paciente a pedir ao marido para não participar dos rituais.",
    criticalErrors: [
      "Não distinguir TOC de TAG (ausência de investigação das compulsões)",
      "Prescrever ISRS em dose antidepressiva padrão (doses insuficientes para TOC — é necessário dose alta)",
      "Não indicar TCC com EPR como componente essencial do tratamento",
      "Dizer à paciente que ela tem esquizofrenia ou loucura por ter pensamentos irracionais (estigmatização e erro diagnóstico)",
      "Não investigar depressão comórbida (presente em até 67% dos casos de TOC)"
    ]
  },
  instD: {
    title: "CHECKLIST — MULHER QUE NÃO PARA DE LAVAR AS MÃOS E CONFERE O GÁS REPETIDAMENTE",
    sections: [
      {
        h: "COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
        items: [
          { item: "Acolheu a paciente sem demonstrar estranheza ou julgamento diante dos rituais", score: 0.5, ref: "CFM nº 1.931/2009" },
          { item: "Normalizou o diagnóstico de TOC sem estigmatizar (\"não é loucura, é uma condição médica\")", score: 0.5, ref: "ABP — Diretrizes TOC, 2022" },
          { item: "Explicou o diagnóstico e o tratamento de forma clara e sem termos técnicos excessivos", score: 0.3, ref: "CFM nº 1.931/2009" },
          { item: "Abordou o papel do cônjuge no tratamento (não participar dos rituais)", score: 0.3, ref: "ABP — Diretrizes TOC, 2022" }
        ]
      },
      {
        h: "ANAMNESE",
        items: [
          { item: "Investigou o conteúdo das obsessões (contaminação, catástrofe) e sua natureza egodistônica", score: 0.5, ref: "DSM-5; ABP — Diretrizes TOC, 2022" },
          { item: "Investigou as compulsões: tipo, duração e frequência dos rituais", score: 0.5, ref: "DSM-5; ABP — Diretrizes TOC, 2022" },
          { item: "Estimou o tempo consumido por obsessões e compulsões por dia (critério Y-BOCS)", score: 0.5, ref: "Y-BOCS; ABP — Diretrizes TOC, 2022" },
          { item: "Investigou comportamentos de evitação (maçanetas, corrimões)", score: 0.5, ref: "ABP — Diretrizes TOC, 2022" },
          { item: "Rastreou depressão comórbida", score: 0.5, ref: "ABP — Diretrizes TOC, 2022" },
          { item: "Avaliou risco de suicídio", score: 0.5, ref: "MS — PCDT Prevenção do Suicídio, 2022" }
        ]
      },
      {
        h: "EXAME FÍSICO",
        items: [
          { item: "Avaliou as mãos e identificou dermatite de contato por lavagem excessiva", score: 0.5, ref: "ABP — Diretrizes TOC, 2022" },
          { item: "Avaliou o estado mental (insight, organização do pensamento, ausência de alucinações)", score: 0.5, ref: "ABP — Diretrizes TOC, 2022" }
        ]
      },
      {
        h: "RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO",
        items: [
          { item: "Formulou hipótese de TOC e diferenciou de TAG e de psicose", score: 1.0, ref: "DSM-5; ABP — Diretrizes TOC, 2022" },
          { item: "Solicitou TSH para afastar causa orgânica de ansiedade", score: 0.3, ref: "ABP — Diretrizes TOC, 2022" }
        ]
      },
      {
        h: "CONDUTA E ORIENTAÇÃO AO PACIENTE",
        items: [
          { item: "Indicou TCC com Exposição e Prevenção de Resposta (EPR) como tratamento de primeira linha", score: 1.0, ref: "ABP — Diretrizes TOC, 2022; UpToDate 2024" },
          { item: "Prescreveu ISRS em dose alta para TOC (não dose antidepressiva padrão)", score: 1.0, ref: "ABP — Diretrizes TOC, 2022; RENAME 2023" },
          { item: "Orientou sobre latência prolongada do tratamento no TOC (8–12 semanas)", score: 0.5, ref: "ABP — Diretrizes TOC, 2022" }
        ]
      }
    ]
  }
},

{
  id: 11,
  title: "Jovem trazido pelo SAMU após festa, sonolento e com hálito de álcool",
  sub: "UPA — Urgência e Emergência",
  tema: "Psiquiatria",
  topic: "Intoxicação alcoólica aguda",
  level: "moderado",
  cardAccent: "#FF6F00",

  instA: {
    scenario: "Urgência e Emergência — UPA 24h. Sala de observação, turno da madrugada (02h30). O SAMU trouxe o paciente após chamado de amigos em uma festa. Relatam que ele 'bebeu demais e não acorda direito'.",
    patient: "V.M., 19 anos, masculino, estudante universitário (1º ano), solteiro. Trazido por dois amigos.",
    complaint: "Amigos relatam que o paciente consumiu grandes quantidades de bebida alcoólica em cerca de 3 horas, vomitou duas vezes e está cada vez mais sonolento e difícil de acordar.",
    tasks: [
      "Realize a avaliação clínica inicial do paciente com rebaixamento do nível de consciência.",
      "Aplique a Escala de Coma de Glasgow e avalie as vias aéreas, respiração e circulação (ABC).",
      "Investigue e exclua causas alternativas ou concomitantes ao rebaixamento de consciência.",
      "Proponha a conduta terapêutica adequada para intoxicação alcoólica aguda com rebaixamento.",
      "Oriente os amigos e discuta a notificação e os próximos passos com a equipe."
    ]
  },

  instB: {
    vitals: { PA: "96/60 mmHg", FC: "108 bpm", FR: "10 irpm", Tax: "35,8°C", Peso: "72 kg (estimado)", Altura: "1,76 m", IMC: "23,2 kg/m²", SatO2: "93% em ar ambiente" },
    physicalGeneral: "Paciente em mau estado geral, sonolento, responsivo a estímulos dolorosos (escala de coma de Glasgow: E2V2M4 = 8). Hálito etílico intenso. Hipotérmico (Tax 35,8°C). Hipóxico (SatO2 93%). Hipotensão. Taquicárdico. Vômito presente na roupa. Mucosas levemente desidratadas. Sem trauma craniano visível.",
    physicalSeg: [
      "NEUROLÓGICO: Glasgow 8 (E2V2M4). Pupilas isocóricas e fotorreagentes (3 mm bilateralmente). Sem sinais de lateralização. Sem rigidez de nuca. Reflexo de tosse presente (mantido).",
      "RESPIRATÓRIO: FR 10 irpm — bradipneia. MV presente bilateralmente, sem ruídos adventícios. Saturação 93%.",
      "CARDIOVASCULAR: Hipotensão e taquicardia. Sem sopros.",
      "ABDOMINAL: Distendido discretamente. RHA presentes. Sem defesa ou rigidez.",
      "DERMATOLÓGICO: Sem lesões de trauma externo visíveis. Sem marcas de injeção."
    ],
    labs: [
      { test: "Glicemia capilar - OBS: NAO MENCIONADO NA AULA", val: "48 mg/dL", ref: "70–140 mg/dL", alt: true },
      { test: "Alcoolemia (etilômetro/dosagem)", val: "3,2 g/L (320 mg/dL)", ref: "< 0,3 g/L", alt: true },
      { test: "Sódio", val: "134 mEq/L", ref: "135–145 mEq/L", alt: true },
      { test: "Potássio", val: "3,2 mEq/L", ref: "3,5–5,0 mEq/L", alt: true },
      { test: "Hemograma", val: "Normal", ref: "—", alt: false },
      { test: "Creatinina", val: "0,9 mg/dL", ref: "0,7–1,2 mg/dL", alt: false },
    ],
    image: "OBS NAO FALADO NA AULA NADA SOBRE TC!!!! TC de crânio sem contraste: Sem hemorragia intracraniana. Sem edema cerebral. Parênquima sem alterações agudas. Estruturas da linha média centradas.",
    note: "Entregar sinais vitais e Glasgow ao início — são o gatilho para a avaliação prioritária. Informar amigos disponíveis fora da sala para coleta de história. Exames entregues conforme solicitação. TC de crânio entregue se o candidato indicar o exame ou se houver progressão sem melhora. O candidato deve ser avaliado especialmente pelo ABC inicial, pela identificação da hipoglicemia e pela sequência correta: tiamina → glicose.",
    patientProfile: "V.M., 19 anos, masculino, estudante universitário (Engenharia, 1º ano). Solteiro, mora em república. Sem comorbidades conhecidas. Amigos informam que nunca o viram assim antes.",
    script: [
      { trigger: "Estímulo doloroso", speech: "(abre os olhos brevemente, murmura sons ininteligíveis, retira o membro — Glasgow 8)" },
      { trigger: "Estímulo verbal intenso", speech: "\"Hmm… deixa… tô bem…\" (fecha os olhos novamente)" },
      { trigger: "Script dos amigos", speech: "\"A gente tava numa festa. Ele bebeu umas 10 doses de whisky em três horas, num desafio. Depois vomitou duas vezes e foi ficando cada vez mais apagado. A gente ficou com medo.\"" },
      { trigger: "Pergunta dos amigos sobre drogas", speech: "\"Não, ele não usou nada além de álcool. A gente tava junto o tempo todo.\"" },
      { trigger: "Pergunta ativa dos amigos", speech: "\"Ele vai ficar bem, doutor? A gente chamou o SAMU porque deu muito medo. Vai ter algum problema pra ele?\"" },
      { trigger: "Pergunta ativa dos amigos", speech: "\"Precisa falar pros pais dele? Ele é de outra cidade.\"" }
    ],
    hiddenInfo: [
      "O paciente vomitou duas vezes antes de perder a consciência — fator de risco para broncoaspiração; relevante para posicionamento e monitoramento das vias aéreas. Revelar apenas se perguntado especificamente sobre o episódio de vômito.",
      "Um dos amigos suspeita que alguém adicionou algo à bebida ('o copo ficou sozinho um tempo'), mas não tem certeza — revelar apenas se o candidato perguntar sobre a possibilidade de uso de outras substâncias ou adulteração."
    ],
    actorBehavior: "Paciente sonolento, responsivo apenas a estímulos dolorosos. Ator mantém olhos fechados, responde minimamente. Amigos (segundo ator ou professor) estão ansiosos, culpados e com medo de se meter em problemas. Colaboram com a anamnese quando abordados com tranquilidade e sem julgamento."
  },

  instC: {
    diagnosis: "Intoxicação alcoólica aguda grave com rebaixamento do nível de consciência (Glasgow 8), hipoglicemia, hipotermia, bradipneia e hipoxemia. Alcoolemia 3,2 g/L. Risco de insuficiência respiratória e broncoaspiração. CID-11: 6C40.0 / DSM-5: F10.129.",
    differentials: [
      "Traumatismo cranioencefálico — queda durante a intoxicação pode causar hematoma subdural ou epidural com rebaixamento; ausência de trauma externo e TC normal afastam; deve sempre ser considerado em paciente alcoolizado com rebaixamento.",
      "Hipoglicemia como causa primária — glicemia de 48 mg/dL pode por si só causar rebaixamento de consciência; o álcool inibe a gliconeogênese hepática, tornando a hipoglicemia muito comum na intoxicação aguda; deve ser corrigida imediatamente.",
      "Intoxicação mista (polisubstância) — associação com benzodiazepínicos, opioides ou GHB pode agravar o rebaixamento; toxicológico negativo e relato dos amigos tornam menos provável, mas vigilância necessária.",
      "Acidente vascular cerebral — jovem, sem fatores de risco, TC normal; improvável mas deve ser afastado em rebaixamento de consciência sem causa clara."
    ],
    context: "Jovem de 19 anos, sem comorbidades, com intoxicação alcoólica aguda grave após consumo de aproximadamente 10 doses em 3 horas. Alcoolemia de 3,2 g/L. Glasgow 8. Hipoglicemia (48 mg/dL), hipotermia, bradipneia com saturação de 93% e hipotensão. Risco iminente de insuficiência respiratória e broncoaspiração pelo histórico de vômitos.",
    justify: "Intoxicação alcoólica grave confirmada por alcoolemia de 3,2 g/L (acima do limiar de intoxicação grave >2,5 g/L) e quadro clínico característico: rebaixamento de consciência (Glasgow 8), bradipneia, hipotensão, hipotermia e hálito etílico. Hipoglicemia é complicação direta da inibição da gliconeogênese hepática pelo álcool. TC normal afasta TCE concomitante. Toxicológico negativo afasta intoxicação mista.",
    expectedAnamnesis: [
      "Obter história com amigos: tipo de bebida, quantidade estimada, tempo de consumo",
      "Investigar padrão de consumo prévio (primeira vez bebendo muito vs. consumidor habitual)",
      "Pesquisar uso concomitante de outras substâncias (drogas, medicamentos, GHB)",
      "Investigar histórico de trauma (queda, briga)",
      "Pesquisar comorbidades e medicamentos em uso",
      "Pesquisar episódio de vômito (risco de broncoaspiração)",
      "Verificar quando foi a última refeição"
    ],
    expectedPhysical: [
      "Prioridade 1 — ABC: Vias aéreas (responsividade, proteção?), respiração (FR, SatO2), circulação (PA, FC, pulsos)",
      "Aplicar Escala de Coma de Glasgow (E+V+M)",
      "Avaliação pupilar: tamanho, simetria, fotorreatividade",
      "Pesquisa de sinais de trauma craniano (hematoma, lacerações, Battle sign, sinal de Guaxinim)",
      "Verificar rigidez de nuca (afastar meningite)",
      "Temperatura: hipotermia esperada",
      "Avaliação de vias aéreas: reflexo de vômito e tosse (risco de broncoaspiração)"
    ],
    expectedExams: [
      { exam: "Glicemia capilar", justify: "Prioritário — hipoglicemia é complicação comum e tratável imediatamente", expected: "48 mg/dL (baixa)" },
      { exam: "Alcoolemia", justify: "Quantificar intoxicação e monitorar evolução", expected: "3,2 g/L (grave)" },
      { exam: "Toxicológico urinário", justify: "Afastar intoxicação mista (polisubstância)", expected: "Negativo" },
      { exam: "Eletrólitos (Na, K)", justify: "Distúrbios eletrolíticos comuns na intoxicação aguda", expected: "Hiponatremia e hipopotassemia leves" },
      { exam: "TC de crânio", justify: "Afastar TCE concomitante em paciente alcoolizado com rebaixamento de consciência", expected: "Sem alterações" },
      { exam: "SatO2 / oximetria", justify: "Avaliar hipoxemia — bradipneia com sat 93%", expected: "93% (baixa)" }
    ],
    expectedConduct: [
      "ABC imediato: Vias aéreas — posicionar em decúbito lateral (posição de recuperação) para reduzir risco de broncoaspiração; se Glasgow ≤8 sem reflexo de tosse, considerar IOT por sequência rápida. Respiração: oxigenoterapia por cateter nasal 3–5 L/min para SatO2 >95%. Circulação: acesso venoso periférico + SF 0,9% 500 mL IV em bolus para hipotensão.",
      "Tiamina ANTES da glicose: Tiamina 100 mg IM/IV (prevenção de encefalopatia de Wernicke, obrigatória antes de qualquer aporte de glicose em alcoolista ou paciente com suspeita de carência). (MS — Linha de Cuidado Álcool, 2022; Laranjeira et al.)",
      "Correção da hipoglicemia: Glicose 50% 50 mL IV após tiamina. Manutenção com SF 0,9% com glicose 5% conforme glicemia seriada.",
      "Aquecimento passivo: Cobertores, ambiente aquecido (hipotermia — Tax 35,8°C).",
      "Monitorização contínua: Glasgow, SatO2, FC, PA, temperatura a cada 15–30 min. NÃO há antídoto específico para o álcool — o tratamento é suporte e manejo das complicações. Não usar flumazenil (pode precipitar convulsões se houver dependência a BZD concomitante; sem benefício na intoxicação alcoólica pura). Observação hospitalar até Glasgow >14, SatO2 normal e glicemia estável.",
      "Notificação: Registrar o caso — toda intoxicação aguda deve ser notificada conforme Portaria MS nº 204/2016. Rastrear padrão de consumo ao recuperar consciência (AUDIT).",
      "Orientação aos amigos e ao paciente após recuperação: Abordar os riscos do consumo pesado episódico (binge drinking); oferecer breve intervenção motivacional; encaminhar para acompanhamento na UBS se padrão de uso problemático identificado."
    ],
    expectedCommunication: [
      "Com os amigos: Abordagem sem julgamento ('fizeram certo em chamar o SAMU'). Orientar sobre a gravidade e os riscos sem assustar desnecessariamente.",
      "Com o paciente (após recuperação): Abordagem empática, sem tom moral. Perguntar sobre o padrão habitual de consumo. Orientar sobre os riscos do consumo em binge.",
      "Com a equipe: Verbalizar o ABC, os achados e o plano de forma clara."
    ],
    criticalErrors: [
      "Administrar glicose antes da tiamina em paciente com intoxicação alcoólica (risco de precipitar encefalopatia de Wernicke aguda)",
      "Não medir glicemia capilar imediatamente (hipoglicemia é causa tratável de piora do rebaixamento)",
      "Não posicionar o paciente em decúbito lateral / não avaliar risco de broncoaspiração (Glasgow 8 + histórico de vômitos)",
      "Não solicitar TC de crânio em paciente alcoolizado com Glasgow 8 e sem causa completamente elucidada (perder TCE concomitante)",
      "Não monitorar SatO2 e FR — bradipneia com sat 93% pode evoluir para insuficiência respiratória"
    ]
  },

  instD: {
    title: "CHECKLIST — ESSE CHECKLIST TA MUITO MAIS COMPLEXO DO QUE A AULA, DESCONSIDERAR ALGUMAS COISAS",
    sections: [
      {
        h: "BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
        items: [
          { item: "Abordou os amigos sem julgamento e agradeceu pela chamada ao SAMU", score: 0.3, ref: "MS — Política Nacional de Humanização, 2013" },
          { item: "ACHO IRRELEVANTE - Comunicou o plano de manejo à equipe de forma clara e estruturada (ABC)", score: 0.5, ref: "MS — Linha de Cuidado Álcool, 2022" },
          { item: "Orientou os amigos sobre os riscos do binge drinking após estabilização", score: 0.3, ref: "MS — Linha de Cuidado Álcool, 2022" }
        ]
      },
      {
        h: "BLOCO 2 — ANAMNESE",
        items: [
          { item: "Obteve história com os amigos: tipo de bebida, quantidade e tempo de consumo", score: 0.5, ref: "MS — Linha de Cuidado Álcool, 2022" },
          { item: "Investigou uso concomitante de outras substâncias (drogas, medicamentos)", score: 0.5, ref: "MS — Linha de Cuidado Álcool, 2022" },
          { item: "NAO MENCIONADO NA AULA - Pesquisou possibilidade de trauma craniano durante a intoxicação", score: 0.5, ref: "MS — Linha de Cuidado Álcool, 2022" },
          { item: "Investigou histórico de vômitos (risco de broncoaspiração)", score: 0.5, ref: "Sanarmed — Intoxicação Alcoólica Aguda, 2025" }
        ]
      },
      {
        h: "BLOCO 3 — EXAME FÍSICO",
        items: [
          { item: "Avaliou ABC: vias aéreas, FR, SatO2, PA e FC como primeira ação", score: 1.0, ref: "MS — Linha de Cuidado Álcool, 2022" },
          { item: "Aplicou a Escala de Coma de Glasgow corretamente (E+V+M)", score: 0.5, ref: "MS — Linha de Cuidado Álcool, 2022" },
          { item: "Avaliou pupilas e pesquisou sinais de TCE (hematoma, Battle sign)", score: 0.5, ref: "MS — Linha de Cuidado Álcool, 2022" },
          { item: "NAO MENCIONADO NA AULA - Posicionou o paciente em decúbito lateral (posição de recuperação)", score: 0.5, ref: "MS — Linha de Cuidado Álcool, 2022" }
        ]
      },
      {
        h: "BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO",
        items: [
          { item: "NAO MENCIONADO NA AULA - Solicitou glicemia capilar como medida prioritária imediata", score: 1.0, ref: "MS — Linha de Cuidado Álcool, 2022" },
          { item: "NAO MENCIONADO NA AULA - Solicitou toxicológico urinário para afastar intoxicação mista", score: 0.5, ref: "MS — Linha de Cuidado Álcool, 2022" },
          { item: "NAO MENCIONADO NA AULA - Indicou TC de crânio para afastar TCE em rebaixamento de consciência", score: 0.5, ref: "MS — Linha de Cuidado Álcool, 2022" }
        ]
      },
      {
        h: "BLOCO 5 — CONDUTA E ORIENTAÇÃO AO PACIENTE",
        items: [
          { item: "Administrou tiamina ANTES da glicose - ATENCAO COM A GLICOSE (NA AULA APENAS FALOU SOBRE CUIDADO COM WERNICK NAO FALOU SOBRE HIPOGLICEMIA NEM USO DE GLICOSE", score: 1.0, ref: "MS — Linha de Cuidado Álcool, 2022; Laranjeira, 2013" },
          { item: "Indicou oxigenoterapia para SatO2 93%", score: 0.5, ref: "MS — Linha de Cuidado Álcool, 2022" },
          { item: "Indicou monitorização contínua (Glasgow, SatO2, glicemia seriada)", score: 0.5, ref: "MS — Linha de Cuidado Álcool, 2022" }
        ]
      }
    ]
  }
},

{
  id: 12,
  title: "Homem com tremores, suadeira e 'bicho subindo pela parede' após parar de beber",
  sub: "UPA — Urgência e Emergência",
  tema: "Psiquiatria",
  topic: "Síndrome de abstinência alcoólica grave — delirium tremens",
  level: "complexo",
  cardAccent: "#B71C1C",

  instA: {
    scenario: "Urgência e Emergência — UPA 24h. Sala de observação, turno da tarde. Esposa trouxe o paciente 'que tá vendo bicho e não para de tremer' desde a manhã. Relata que o marido parou de beber abruptamente há 3 dias após promessa feita à família.",
    patient: "E.C., 52 anos, masculino, motorista de caminhão (afastado há 6 meses por acidente), casado, dois filhos adultos.",
    complaint: "Tremores generalizados intensos, sudorese profusa, confusão, alucinações visuais ('cobra subindo pela parede') e agitação crescente desde a manhã. Parou de beber há 3 dias.",
    tasks: [
      "Realize a anamnese com o paciente e a esposa, investigando o padrão de uso e o histórico de abstinências.",
      "Aplique a escala CIWA-Ar para estratificar a gravidade da síndrome de abstinência alcoólica.",
      "Exclua causas orgânicas que possam se sobrepor ao quadro.",
      "Proponha a conduta terapêutica imediata e indique o nível de cuidado adequado.",
      "Oriente a esposa sobre o diagnóstico, os riscos e os próximos passos."
    ]
  },

  instB: {
    vitals: { PA: "178/112 mmHg", FC: "128 bpm", FR: "24 irpm", Tax: "38,6°C", Peso: "84 kg", Altura: "1,72 m", IMC: "28,4 kg/m²" },
    physicalGeneral: "Paciente em mau estado geral. Tremor grosseiro de todo o corpo visível em repouso. Sudorese profusa — roupa encharcada. Agitado, tenta levantar da maca. Alucinações visuais em curso ('tem cobra ali no canto'). Desorientado no tempo (não sabe o dia nem o mês). Fala incoerente, desorganizada. Sem hálito etílico. Mucosas secas.",
    physicalSeg: [
      "NEUROLÓGICO: Tremor grosseiro generalizado. Hiperreflexia. Sem déficits focais motores. Desorientado. Nistagmo horizontal leve. Marcha impossível de avaliar (agitado). Sem rigidez de nuca.",
      "CARDIOVASCULAR: Taquicardia e HAS intensa. BRNF, sem sopros.",
      "RESPIRATÓRIO: Taquipneia. MV presente bilateralmente, sem ruídos adventícios.",
      "ABDOMINAL: Fígado palpável a 3 cm do rebordo costal (hepatomegalia). RHA presentes. Sem peritonismo.",
      "CIWA-Ar aplicado: Náusea/vômito (3), tremor (6), sudorese (6), ansiedade (5), agitação (5), perturbações perceptuais (5 — alucinações visuais vívidas), cefaleia (3), distúrbio do pensamento (4), orientação (3) = Total: 40 — Abstinência GRAVE (delirium tremens)."
    ],
    labs: [
      { test: "Glicemia capilar", val: "62 mg/dL", ref: "70–140 mg/dL", alt: true },
      { test: "Sódio", val: "126 mEq/L", ref: "135–145 mEq/L", alt: true },
      { test: "Potássio", val: "2,9 mEq/L", ref: "3,5–5,0 mEq/L", alt: true },
      { test: "Magnésio", val: "1,1 mg/dL", ref: "1,7–2,4 mg/dL", alt: true },
      { test: "TGO", val: "186 U/L", ref: "<40 U/L", alt: true },
      { test: "TGP", val: "94 U/L", ref: "<41 U/L", alt: true },
      { test: "GGT", val: "580 U/L", ref: "<60 U/L", alt: true },
      { test: "TP/INR", val: "INR 1,8", ref: "INR <1,3", alt: true },
      { test: "Hemograma", val: "Leucócitos 14.200/mm³; Hb 9,8 (anemia macrocítica)", ref: "—", alt: true },
      { test: "Lactato", val: "3,2 mmol/L", ref: "<2,0 mmol/L", alt: true },
      { test: "PCR", val: "42 mg/L", ref: "<5 mg/L", alt: true }
    ],
    image: "TC de crânio sem contraste: Sem hemorragia, sem edema, sem hipodensidades agudas. Atrofia cortical difusa e alargamento dos sulcos — compatível com uso crônico de álcool. Sem alterações estruturais agudas.",
    note: "Entregar sinais vitais ao início — chamar atenção para a tríade: hipertensão grave + taquicardia + febre (marcadores de hiperatividade autonômica). Esposa disponível fora da sala. Exames entregues conforme solicitação. O CIWA-Ar pode ser entregue se o candidato aplicar a escala. TC entregue se solicitada. O candidato deve ser avaliado especialmente pela prioridade tiamina → glicose e pela indicação de internação em UTI ou leito monitorado.",
    patientProfile: "E.C., 52 anos, masculino, motorista de caminhão (afastado após acidente de trânsito relacionado ao álcool). Casado há 25 anos. Dois filhos adultos. Bebe desde os 20 anos — padrão de dependência grave nos últimos 15 anos (1–2 litros de cachaça por dia). Hospitalizações prévias: 2 internações por gastrite e 1 por pancreatite aguda alcoólica.",
    script: [
      { trigger: "Abordagem inicial", speech: "\"Tira essa cobra daí! Fica me olhando! Sai de perto de mim!\" (apontando para canto vazio)" },
      { trigger: "Quando orientado com calma", speech: "\"Onde eu tô? Isso aqui é hospital? Eu quero ir pra casa…\"" },
      { trigger: "Pergunta sobre o álcool", speech: "(confuso) \"Parei de beber… minha mulher pediu… faz uns… três dias…\"" },
      { trigger: "Momentos de lucidez parcial", speech: "\"Tô com muito calor… tô suando muito… tô com medo…\"" },
      { trigger: "Script da esposa", speech: "\"Doutor, ele bebia mais de um litro de cachaça por dia. Quando parou, no primeiro dia ficou agitado. No segundo teve um tremor forte. Hoje de manhã começou a ver coisas — bicho, cobra — e ficou completamente fora de si. Ficou muito bravo quando tentei segurar. Ele já teve convulsão antes quando parou de beber.\"" },
      { trigger: "Pergunta ativa da esposa", speech: "\"Ele vai morrer, doutor? Nunca vi ele assim tão mal.\"" },
      { trigger: "Pergunta ativa da esposa", speech: "\"Por que ele tá vendo coisas? É o cérebro que tá com problema?\"" }
    ],
    hiddenInfo: [
      "Episódio de convulsão em abstinência prévia há 2 anos — a esposa menciona apenas se perguntada diretamente sobre histórico de crises ou de abstinências anteriores.",
      "O acidente de trânsito que levou ao afastamento foi causado por alcoolemia positiva — revelar apenas se o candidato perguntar sobre as circunstâncias do afastamento do trabalho."
    ],
    actorBehavior: "Muito agitado, tremendo visivelmente. Alucina ativamente (gesticula para objetos inexistentes). Alterna entre momentos de lucidez parcial e total desorientação. Pode tentar se levantar. Responde a abordagem muito calma com alguma redução da agitação. A esposa está com medo, chora, mas é colaborativa e fornece informações essenciais."
  },

  instC: {
    diagnosis: "Delirium tremens — síndrome de abstinência alcoólica grave (CIWA-Ar 40), com alucinações visuais vívidas, desorientação, tremor grosseiro generalizado, hiperatividade autonômica intensa (HAS 178/112, FC 128, Tax 38,6°C), hiponatremia grave, hipopotassemia, hipomagnesemia, hepatopatia alcoólica avançada (INR 1,8, anemia macrocítica, GGT 580). Antecedente de convulsão por abstinência. CID-11: 6C40.3 / DSM-5: F10.231.",
    differentials: [
      "Encefalopatia de Wernicke — deficiência de tiamina em alcoolista crônico; tríade clássica: confusão + ataxia + oftalmoplegia; nistagmo horizontal presente no caso é sinal de alerta; tratar preventivamente com tiamina em todos os alcoolistas com rebaixamento.",
      "Meningite/encefalite — febre + confusão + agitação podem simular; sem rigidez de nuca, sem cefaleia de início súbito; TC normal; contexto clínico de abstinência direciona diagnóstico; punção lombar se dúvida persistir.",
      "Delirium por causa orgânica (sepse, TCE) — PCR elevado (42) e leucocitose devem alertar para infecção concomitante; avaliar foco infeccioso.",
      "Psicose alcoólica (alucinose alcoólica) — alucinações auditivas em paciente consciente e sem desorientação; distinto do delirium tremens pela preservação da orientação; no caso, desorientação e tremor grave indicam delirium tremens."
    ],
    context: "Alcoolista crônico de 52 anos, consumindo 1–2 L de cachaça por dia, em abstinência abrupta há 72 horas, apresenta delirium tremens com alucinações visuais vívidas, desorientação, tremor grosseiro, hiperatividade autonômica grave e múltiplas complicações metabólicas. Antecedente de convulsão por abstinência. Hepatopatia avançada. Risco de morte estimado em 5–15% sem tratamento adequado.",
    justify: "CIWA-Ar 40 = abstinência grave (delirium tremens). Critérios presentes: tremor grosseiro, sudorese profusa, alucinações visuais vívidas, agitação, desorientação, hiperatividade autonômica (HAS + taquicardia + febre). Antecedente de convulsão em abstinência prévia. Hepatopatia avançada (GGT 580, INR 1,8, anemia macrocítica). Hiponatremia grave (126 mEq/L) e hipomagnesemia agravam o risco de convulsão.",
    expectedAnamnesis: [
      "Investigar padrão de consumo: tipo de bebida, quantidade diária, frequência, duração",
      "Pesquisar início e evolução da abstinência (há quantos dias parou)",
      "Investigar episódios anteriores de abstinência e suas complicações (convulsão, delirium)",
      "Pesquisar antecedentes de hospitalização relacionados ao álcool (pancreatite, gastrite, cirrose)",
      "Pesquisar uso de outras substâncias",
      "Investigar última refeição e estado nutricional",
      "Avaliar suporte familiar disponível"
    ],
    expectedPhysical: [
      "Sinais vitais: tríade de hiperatividade autonômica — HAS, taquicardia, febre",
      "Avaliação neurológica: tremor, hiperreflexia, nistagmo (Wernicke?), desorientação, alucinações",
      "Aplicar CIWA-Ar formalmente",
      "Avaliação hepática: hepatomegalia, icterícia, asterixe",
      "Avaliação de desidratação: mucosas, turgor",
      "Pesquisar rigidez de nuca (afastar meningite)"
    ],
    expectedExams: [
      { exam: "Glicemia capilar", justify: "Prioritário — hipoglicemia piora o quadro neurológico", expected: "62 mg/dL (baixa)" },
      { exam: "Eletrólitos completos (Na, K, Mg)", justify: "Distúrbios precipitam convulsão e agravam delirium", expected: "Hiponatremia, hipopotassemia, hipomagnesemia" },
      { exam: "TGO, TGP, GGT, INR", justify: "Avaliar hepatopatia alcoólica e função hepática", expected: "Gravemente alterados" },
      { exam: "Hemograma", justify: "Anemia macrocítica e leucocitose", expected: "Alterado" },
      { exam: "TC de crânio", justify: "Afastar TCE ou sangramento em paciente alcoolista", expected: "Sem alterações agudas" },
      { exam: "Lactato", justify: "Avaliar hipoperfusão / choque em hiperatividade autonômica grave", expected: "Elevado (3,2)" }
    ],
    expectedConduct: [
      "INTERNAÇÃO OBRIGATÓRIA EM UTI ou leito monitorado: CIWA-Ar 40 + delirium tremens + antecedente de convulsão + múltiplas complicações metabólicas.",
      "Tiamina ANTES de qualquer glicose: Tiamina 250–500 mg IV/IM (dose maior no delirium tremens com suspeita de Wernicke). (MS — Linha de Cuidado Álcool, 2022)",
      "Correção da hipoglicemia: Após tiamina — glicose 50% 50 mL IV + manutenção com SG 5%.",
      "Benzodiazepínico — tratamento principal do delirium tremens: Diazepam 10 mg IV em bolus a cada 5–15 minutos até sedação adequada (CIWA-Ar <10) — protocolo de dose sintomática guiado por CIWA-Ar; dose total pode ser elevada (50–100 mg nas primeiras horas). Alternativa: Lorazepam 2–4 mg IV (melhor em hepatopatia grave — metabolismo não hepático). (MS — Linha de Cuidado Álcool, 2022; RENAME 2023)",
      "Correção eletrolítica: Sulfato de magnésio 2 g IV em 15 min + manutenção (reduz risco de convulsão). Reposição de potássio conforme protocolo. Correção da hiponatremia GRADUAL (máx. 10–12 mEq/L/24h — risco de mielinólise pontina).",
      "Profilaxia de convulsão: BZD em dose adequada é a profilaxia principal. NÃO usar fenitoína isolada para convulsão alcoólica — sem eficácia demonstrada. (MS — Linha de Cuidado Álcool, 2022)",
      "NÃO usar clorpromazina (diminui limiar convulsivante — contraindicado). Haloperidol apenas se necessário para alucinações refratárias e com cautela.",
      "Monitorização: Contínua de Glasgow, SatO2, ECG, PA, FC, temperatura e CIWA-Ar horário.",
      "Orientação à esposa: Explicar que é uma emergência médica grave ('crise de parada brusca do álcool'), que o marido precisa de internação urgente e que o prognóstico é favorável com tratamento adequado."
    ],
    expectedCommunication: [
      "Com o paciente delirante: Voz calma, frases curtas, não confrontar as alucinações, reorientar gentilmente.",
      "Com a esposa: Explicar o delirium tremens como emergência médica, sem culpabilizar o paciente. Abordar os próximos passos (internação, tratamento da dependência após estabilização).",
      "Com a equipe: Verbalizar o CIWA-Ar, os achados críticos e o plano terapêutico com clareza."
    ],
    criticalErrors: [
      "Administrar glicose antes da tiamina — risco de precipitar encefalopatia de Wernicke aguda e irreversível",
      "Não aplicar o CIWA-Ar — subestimar a gravidade e manejar como abstinência leve",
      "Usar clorpromazina (amplamente disponível em PS) — diminui o limiar convulsivante, contraindicado",
      "Usar fenitoína para profilaxia de convulsão alcoólica — sem eficácia, contraindicado neste contexto",
      "Não indicar internação em UTI/leito monitorado para CIWA-Ar 40 com delirium tremens",
      "Corrigir a hiponatremia rapidamente (>12 mEq/L/24h) — risco de mielinólise pontina osmótica"
    ]
  },

  instD: {
    title: "CHECKLIST — ESSE CHECKLIST TA MUITO MAIS COMPLEXO DO QUE A AULA, DESCONSIDERAR ALGUMAS COISAS",
    sections: [
      {
        h: "BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
        items: [
          { item: "Abordou o paciente delirante com voz calma e sem confrontar as alucinações", score: 0.5, ref: "MS — Linha de Cuidado Álcool, 2022" },
          { item: "Explicou à esposa o que é delirium tremens em linguagem acessível", score: 0.5, ref: "MS — Linha de Cuidado Álcool, 2022" },
          { item: "Abordou a dependência alcoólica sem culpabilizar o paciente na presença da esposa", score: 0.3, ref: "MS — Linha de Cuidado Álcool, 2022" }
        ]
      },
      {
        h: "BLOCO 2 — ANAMNESE",
        items: [
          { item: "Obteve com a esposa: padrão de consumo, quantidade diária e tempo de abstinência", score: 0.5, ref: "MS — Linha de Cuidado Álcool, 2022" },
          { item: "Investigou episódios anteriores de abstinência e convulsões (com a esposa)", score: 1.0, ref: "MS — Linha de Cuidado Álcool, 2022" },
          { item: "Pesquisou antecedentes de hospitalização por complicações do álcool", score: 0.3, ref: "MS — Linha de Cuidado Álcool, 2022" }
        ]
      },
      {
        h: "BLOCO 3 — EXAME FÍSICO",
        items: [
          { item: "Avaliou sinais vitais com atenção à tríade autonômica (HAS + taquicardia + febre)", score: 0.5, ref: "MS — Linha de Cuidado Álcool, 2022" },
          { item: "NAO PRECISA!!! - Aplicou o CIWA-Ar e identificou abstinência grave (score ≥20)", score: 1.0, ref: "MS — Linha de Cuidado Álcool, 2022" },
          { item: "Pesquisou nistagmo e ataxia (sinais de Wernicke)", score: 0.5, ref: "MS — Linha de Cuidado Álcool, 2022" },
          { item: "Avaliou hepatomegalia e sinais de hepatopatia", score: 0.3, ref: "Semiologia Médica — FMUSP" }
        ]
      },
      {
        h: "BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO",
        items: [
          { item: "Solicitou glicemia capilar imediatamente", score: 0.5, ref: "MS — Linha de Cuidado Álcool, 2022" },
          { item: "Solicitou eletrólitos completos incluindo magnésio", score: 0.5, ref: "MS — Linha de Cuidado Álcool, 2022" },
          { item: "Classificou corretamente como delirium tremens (SAA grave)", score: 0.5, ref: "MS — Linha de Cuidado Álcool, 2022" }
        ]
      },
      {
        h: "BLOCO 5 — CONDUTA E ORIENTAÇÃO AO PACIENTE",
        items: [
          { item: "Administrou tiamina ANTES da glicose (dose alta — 250–500 mg IV) - CUIDADO COM GLICOSE PROVAVELMENTE NO NOSSO OSCE NAO VAI PRECISAR", score: 1.0, ref: "MS — Linha de Cuidado Álcool, 2022; RENAME 2023" },
          { item: "Prescreveu benzodiazepínico (diazepam ou lorazepam IV) como tratamento principal", score: 1.0, ref: "MS — Linha de Cuidado Álcool, 2022; RENAME 2023" },
          { item: "Não usou clorpromazina nem fenitoína", score: 0.5, ref: "MS — Linha de Cuidado Álcool, 2022" },
          { item: "Indicou internação em UTI/leito monitorado", score: 0.5, ref: "MS — Linha de Cuidado Álcool, 2022" }
        ]
      }
    ]
  }
},

{
  id: 13,
  title: "Homem que bebe todo dia mas diz que 'consegue parar quando quer'",
  sub: "CAPS AD — Centro de Atenção Psicossocial Álcool e Drogas",
  tema: "Psiquiatria",
  topic: "Síndrome de dependência alcoólica — diagnóstico e plano terapêutico",
  level: "complexo",
  cardAccent: "#4E342E",

  instA: {
    scenario: "CAPS AD — Centro de Atenção Psicossocial Álcool e Drogas. Sala de acolhimento, turno da manhã. Primeira consulta. Paciente foi encaminhado pelo clínico geral da UBS após exames com alterações hepáticas. Veio sozinho.",
    patient: "N.B., 44 anos, masculino, comerciante (dono de bar), casado, três filhos. Encaminhado por alterações em TGO, TGP e GGT.",
    complaint: "Paciente nega 'ser alcoólatra'. Diz que bebe 'socialmente, por causa do trabalho' e que 'consegue parar quando quer'. Clínico encaminhou com AUDIT de 24 pontos.",
    tasks: [
      "Realize a anamnese completa investigando o padrão de uso de álcool com o AUDIT e os critérios diagnósticos de dependência.",
      "Avalie a motivação para mudança com abordagem motivacional (Estágios de Mudança de Prochaska e DiClemente).",
      "Investigue complicações orgânicas, psiquiátricas e sociais do uso crônico.",
      "Formule o diagnóstico e o plano terapêutico ambulatorial no CAPS AD.",
      "Conduza uma breve intervenção motivacional com o paciente."
    ]
  },

  instB: {
    vitals: { PA: "154/96 mmHg", FC: "88 bpm", FR: "16 irpm", Tax: "36,6°C", Peso: "94 kg", Altura: "1,72 m", IMC: "31,8 kg/m²" },
    physicalGeneral: "Paciente em bom estado geral, bem vestido, lúcido e orientado. Sem sinais de intoxicação aguda. Eritrose facial discreta. Tremor fino de mãos ao estender os braços. Sem icterícia. Sem ascite visível. Sem ginecomastia aparente.",
    physicalSeg: [
      "ABDOMINAL: Fígado palpável a 2,5 cm do rebordo costal direito, de consistência aumentada, indolor. Baço não palpável. Sem ascite à percussão (macicez móvel ausente).",
      "NEUROLÓGICO: Tremor fino de extremidades ao estender os braços (sinal de abstinência matinal). Sem déficits focais. Reflexos normais.",
      "CARDIOVASCULAR: PA 154/96 mmHg — hipertensão arterial. BRNF, sem sopros.",
      "DERMATOLÓGICO: Eritrose palmar bilateral. Telangiectasias na região malar."
    ],
    labs: [
      { test: "TGO", val: "112 U/L", ref: "<40 U/L", alt: true },
      { test: "TGP", val: "68 U/L", ref: "<41 U/L", alt: true },
      { test: "GGT", val: "420 U/L", ref: "<60 U/L", alt: true },
      { test: "TGO/TGP ratio", val: "1,65", ref: "<1 (hepatite viral); >2 sugere hepatite alcoólica", alt: true },
      { test: "VCM (Volume Corpuscular Médio)", val: "104 fL", ref: "80–96 fL", alt: true },
      { test: "Plaquetas", val: "112.000/mm³", ref: "150.000–400.000/mm³", alt: true },
      { test: "Bilirrubina total", val: "1,8 mg/dL", ref: "<1,2 mg/dL", alt: true },
      { test: "TP/INR", val: "INR 1,3", ref: "<1,3", alt: true },
      { test: "Triglicerídeos", val: "380 mg/dL", ref: "<150 mg/dL", alt: true },
      { test: "Ácido úrico", val: "8,9 mg/dL", ref: "3,5–7,2 mg/dL", alt: true },
      { test: "AUDIT (aplicado na UBS)", val: "24/40 pontos", ref: "<8: baixo risco; ≥20: dependência provável", alt: true }
    ],
    image: "Ultrassonografia abdominal (resultado de consulta anterior na UBS): Fígado com ecotextura hiperecogênica difusa e aumento volumétrico — compatível com esteatohepatite alcoólica. Sem nódulos, sem dilatação de vias biliares. Baço no limite superior do tamanho (12 cm). Sem ascite.",
    note: "Sinais vitais e AUDIT entregues ao início. Exames laboratoriais entregues se solicitados. USG entregue se o candidato perguntar sobre imagem. O candidato deve ser avaliado especialmente pela habilidade de conduzir a entrevista motivacional sem gerar resistência, e por não confrontar o paciente de forma direta ('você é alcoólatra'). A abordagem deve ser baseada na escuta reflexiva e na identificação das ambivalências.",
    patientProfile: "N.B., 44 anos, masculino, comerciante (dono de bar no centro da cidade), casado há 18 anos, três filhos (17, 14 e 11 anos). Ensino médio completo. Consome álcool desde os 16 anos. Nos últimos 8 anos, consome em média 1 litro de cachaça por dia, incluindo pela manhã antes de abrir o bar.",
    script: [
      { trigger: "Abertura", speech: "\"Vim porque meu médico mandou. Mas eu não tenho problema com bebida. Eu trabalho num bar, é normal beber. Consigo parar quando quero.\"" },
      { trigger: "Quando perguntado quanto bebe", speech: "\"Bebo umas doses durante o dia. Não conto. É difícil no bar, todo mundo oferece.\"" },
      { trigger: "Quando perguntado sobre beber pela manhã", speech: "\"Às vezes, pra aliviar o estômago. Uma dosinha só. Não é todo dia.\" (Na verdade é todo dia — AUDIT confirma)" },
      { trigger: "Quando perguntado sobre tentativas de parar", speech: "\"Já tentei parar umas vezes. Fico uns dois ou três dias e fico mal — tremo, suo muito. Aí bebo um pouco e melhora.\"" },
      { trigger: "Quando perguntado sobre a família", speech: "\"Minha esposa reclama muito. Meus filhos… o mais velho não fala muito comigo não. Acho que tá chateado com alguma coisa.\"" },
      { trigger: "Quando perguntado sobre trabalho e social", speech: "\"O bar tá indo bem, mas já perdi uns contratos porque esqueci de reuniões. Uma vez bati o carro, mas foi pequeno. Já tirei a CNH suspensa por… uns meses.\"" },
      { trigger: "Sobre os exames", speech: "\"O doutor falou que meu fígado não tá bem. Isso me preocupou um pouco.\"" },
      { trigger: "Pergunta ativa do paciente", speech: "\"Mas eu não sou alcoólatra. Alcoólatra é mendigo que bebe na calçada. Eu tenho negócio, família. Tem tratamento que não seja ficar internado?\"" },
      { trigger: "Pergunta ativa do paciente", speech: "\"Esse remédio que o senhor vai dar vai me deixar mal se eu beber?\"" }
    ],
    hiddenInfo: [
      "Bebe todo dia pela manhã (síndrome de abstinência matinal — critério de dependência) — revelar apenas se perguntado diretamente e com empatia sobre o período da manhã.",
      "Teve CNH suspensa por dirigir alcoolizado há 1 ano — revelar apenas se perguntado sobre problemas legais ou acidentes relacionados ao álcool.",
      "Filho mais velho (17 anos) se recusa a entrar no bar e tem se afastado do pai — revelar apenas se perguntado sobre o relacionamento com os filhos com mais detalhes."
    ],
    actorBehavior: "Postura defensiva inicial — minimiza o problema, usa justificativas ('é o trabalho', 'consigo parar'). Abre-se progressivamente quando o candidato usa escuta reflexiva e não confronta diretamente. Demonstra ambivalência genuína ao falar da família e dos exames do fígado — esses são seus principais motivadores. Reage com resistência à palavra 'alcoólatra' e a qualquer abordagem confrontativa ou moralista."
  },

  instC: {
    diagnosis: "Síndrome de dependência alcoólica grave (CID-11: 6C40.2 / DSM-5: F10.20 — transtorno por uso de álcool grave, ≥6 critérios). AUDIT 24 pontos. Complicações: esteatohepatite alcoólica (USG + enzimas), hipertensão arterial, hipertrigliceridemia, macrocitose, trombocitopenia leve, hiperuricemia. Sintomas de abstinência matinal (tremor, necessidade de beber pela manhã para aliviar sintomas).",
    differentials: [
      "Uso nocivo de álcool sem dependência — o uso nocivo (CID-11: 6C40.1) implica dano sem os critérios de dependência; aqui, a síndrome de abstinência matinal, a incapacidade de parar apesar das tentativas e o padrão compulsivo diário confirmam dependência.",
      "Hepatite viral crônica (B ou C) como causa das alterações hepáticas — ratio TGO/TGP 1,65, macrocitose e GGT muito elevado são mais sugestivos de hepatite alcoólica; sorologia viral deve ser solicitada para exclusão formal.",
      "Depressão maior comórbida — comum na dependência alcoólica (50% de comorbidade); investigar após período de abstinência para separar sintomas depressivos do álcool dos de transtorno depressivo primário.",
      "Hipertensão arterial secundária ao álcool — o álcool é causa de HAS secundária; tratar a dependência pode normalizar a pressão."
    ],
    context: "Homem de 44 anos, dono de bar, com dependência alcoólica grave há pelo menos 8 anos (1 L/dia), com síndrome de abstinência matinal, AUDIT 24, múltiplas complicações orgânicas (esteatohepatite, HAS, dislipidemia, macrocitose) e sociais (CNH suspensa, afastamento familiar). Estágio de motivação: contemplação (reconhece dano do fígado mas mantém negação parcial). Primeiro contato com serviço de saúde mental especializado.",
    justify: "Preenche ≥6 critérios do DSM-5 para transtorno por uso de álcool grave: consumo maior que o pretendido, incapacidade de reduzir apesar de tentativas, muito tempo gasto obtendo/usando álcool, craving, falha em obrigações (reuniões, CNH), uso continuado apesar de consequências sociais e físicas, tolerância aumentada e síndrome de abstinência (tremor matinal que melhora com álcool). AUDIT 24 = dependência provável.",
    expectedAnamnesis: [
      "Aplicar AUDIT ou confirmar resultado já disponível",
      "Investigar padrão detalhado: tipo de bebida, quantidade/dia, frequência, uso matinal",
      "Pesquisar critérios de dependência (DSM-5): craving, perda de controle, abstinência, tolerância, negligência de atividades, uso continuado apesar de danos",
      "Investigar tentativas anteriores de parar e o que aconteceu (abstinência, convulsão)",
      "Pesquisar complicações sociais: família, trabalho, problemas legais (CNH, acidentes)",
      "Investigar comorbidades psiquiátricas (depressão, ansiedade)",
      "Avaliar motivação para mudança (Estágios de Prochaska)",
      "Pesquisar suporte social disponível (cônjuge, filhos, amigos)",
      "Aplicar CAGE como rastreio rápido se AUDIT não disponível"
    ],
    expectedPhysical: [
      "Sinais vitais: HAS (álcool como causa)",
      "Avaliação hepática: hepatomegalia, icterícia, eritema palmar, telangiectasias",
      "Avaliação de sinais de abstinência: tremor fino de mãos ao estender braços",
      "Avaliação neurológica básica: atenção, memória (déficit cognitivo alcoólico)",
      "Avaliação de obesidade/IMC (síndrome metabólica)"
    ],
    expectedExams: [
      { exam: "AUDIT completo", justify: "Quantificar e classificar o padrão de uso", expected: "24/40 — dependência provável" },
      { exam: "TGO, TGP, GGT, INR", justify: "Avaliar hepatopatia alcoólica (já disponível)", expected: "Alterados — esteatohepatite" },
      { exam: "VCM e hemograma", justify: "Macrocitose alcoólica (B12/folato)", expected: "VCM 104 — macrocitose" },
      { exam: "Anti-HCV e HBsAg", justify: "Excluir hepatite viral crônica como causa das enzimas", expected: "A solicitar" },
      { exam: "Glicemia e triglicerídeos", justify: "Síndrome metabólica e pancreatite alcoólica", expected: "Triglicerídeos 380 (elevado)" },
      { exam: "USG abdominal", justify: "Avaliar esteatose/cirrose (já disponível)", expected: "Esteatohepatite, sem cirrose" }
    ],
    expectedConduct: [
      "Intervenção motivacional breve (obrigatória na primeira consulta): Usar o modelo FRAMES (Feedback, Responsabilidade, Aconselhamento, Menu de opções, Empatia, Auto-eficácia). Usar escuta reflexiva — não confrontar diretamente ('você é alcoólatra'). Usar os resultados dos exames como 'feedback' motivador ('seu fígado está sofrendo'). Identificar os motivadores do paciente (filhos, fígado, casamento) e refletir. (MS — Linha de Cuidado Álcool, 2022; Cadernos de Atenção Básica nº 34 — MS)",
      "Plano terapêutico no CAPS AD: Projeto Terapêutico Singular (PTS) com equipe multiprofissional. Grupos de apoio (AA, grupos do CAPS AD). Psicoterapia individual (TCC, entrevista motivacional). Abordar família (terapia familiar se disponível).",
      "Farmacológico para manutenção da abstinência (após desintoxicação): Naltrexona 50 mg/dia VO — reduz craving e prazer do álcool; contraindicada se hepatite aguda ativa ou INR muito elevado; neste caso INR 1,3 — borderline, avaliar com hepatologista (RENAME 2023; Linha de Cuidado MS, 2022). Acamprosato 1998 mg/dia (666 mg 3x/dia) — reduz síndrome de abstinência leve e craving; seguro no fígado (excreção renal) (RENAME 2023). Dissulfiram: segunda linha; requer motivação elevada e supervisão — risco de reação dissulfiram-etanol grave.",
      "Tratamento das comorbidades: Anti-hipertensivo (HAS), redução de triglicerídeos, suplementação de tiamina e ácido fólico.",
      "Encaminhamento: Hepatologia para acompanhamento da esteatohepatite. Nutrólogo/nutricionista para orientação alimentar.",
      "Seguimento: Retorno semanal inicial no CAPS AD. Meta: abstinência completa + projeto de vida."
    ],
    expectedCommunication: [
      "Evitar o rótulo 'alcoólatra': Usar 'dependência de álcool' ou 'transtorno por uso de álcool'.",
      "Entrevista motivacional: Explorar ambivalência ('o que o beber te dá de bom? e o que tira de você?'). Usar reflexão ('parece que você se preocupa muito com seus filhos…').",
      "Devolutiva empática: 'Seus exames mostram que seu fígado está pedindo socorro. Isso me preocupa. O que você acha que poderia mudar?'"
    ],
    criticalErrors: [
      "Confrontar diretamente o paciente chamando-o de 'alcoólatra' — provoca resistência e rompe o vínculo terapêutico",
      "Prescrever naltrexona sem avaliar a função hepática (contraindicada em hepatite aguda ativa com INR elevado)",
      "Não aplicar nem mencionar o AUDIT para quantificar o padrão de uso",
      "Não investigar síndrome de abstinência matinal (critério central de dependência)",
      "Não incluir abordagem motivacional — apenas dar a prescrição sem explorar a ambivalência do paciente"
    ]
  },

  instD: {
    title: "CHECKLIST — ESSE CHECKLIST TA MUITO MAIS COMPLEXO DO QUE A AULA, DESCONSIDERAR ALGUMAS COISAS (ACHO QUE NAO PRECISA DE ESCALAS)",
    sections: [
      {
        h: "BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
        items: [
          { item: "Não usou o termo 'alcoólatra' e abordou o tema sem julgamento moral", score: 0.5, ref: "MS — Linha de Cuidado Álcool, 2022" },
          { item: "Utilizou escuta reflexiva (repetiu preocupações do paciente em vez de confrontar)", score: 0.5, ref: "MS — Linha de Cuidado Álcool, 2022; Rollnick & Miller, 2012" },
          { item: "Explorou a ambivalência do paciente (o que o beber dá e o que tira)", score: 0.5, ref: "MS — Linha de Cuidado Álcool, 2022" },
          { item: "Usou os resultados dos exames como feedback motivador sem assustar excessivamente", score: 0.5, ref: "MS — Linha de Cuidado Álcool, 2022" }
        ]
      },
      {
        h: "BLOCO 2 — ANAMNESE",
        items: [
          { item: "Confirmou o AUDIT e investigou padrão detalhado de uso (quantidade, frequência, matinal)", score: 0.5, ref: "MS — Linha de Cuidado Álcool, 2022" },
          { item: "Perguntou diretamente sobre beber pela manhã (síndrome de abstinência matinal)", score: 1.0, ref: "DSM-5; MS — Linha de Cuidado Álcool, 2022" },
          { item: "Investigou tentativas anteriores de parar e complicações (tremor, convulsão)", score: 0.5, ref: "MS — Linha de Cuidado Álcool, 2022" },
          { item: "Pesquisou complicações sociais: família, trabalho, problemas legais (CNH)", score: 0.5, ref: "MS — Linha de Cuidado Álcool, 2022" },
          { item: "Avaliou motivação para mudança (Estágios de Prochaska)", score: 0.5, ref: "MS — Linha de Cuidado Álcool, 2022" }
        ]
      },
      {
        h: "BLOCO 3 — EXAME FÍSICO",
        items: [
          { item: "Avaliou sinais vitais (HAS relacionada ao álcool)", score: 0.3, ref: "MS — Linha de Cuidado Álcool, 2022" },
          { item: "Pesquisou tremor fino de mãos ao estender os braços (abstinência matinal)", score: 0.5, ref: "MS — Linha de Cuidado Álcool, 2022" },
          { item: "Avaliou hepatomegalia e sinais de hepatopatia crônica", score: 0.3, ref: "Semiologia Médica — FMUSP" }
        ]
      },
      {
        h: "BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO",
        items: [
          { item: "Formulou diagnóstico de síndrome de dependência alcoólica grave com base nos critérios DSM-5/AUDIT", score: 1.0, ref: "DSM-5; MS — Linha de Cuidado Álcool, 2022" },
          { item: "Solicitou anti-HCV e HBsAg para excluir hepatite viral", score: 0.5, ref: "MS — Linha de Cuidado Álcool, 2022" }
        ]
      },
      {
        h: "BLOCO 5 — CONDUTA E ORIENTAÇÃO AO PACIENTE",
        items: [
          { item: "Propôs PTS no CAPS AD com equipe multiprofissional e grupos de apoio", score: 0.5, ref: "Lei nº 10.216/2001; MS — Linha de Cuidado Álcool, 2022" },
          { item: "Indicou farmacoterapia para manutenção da abstinência (naltrexona ou acamprosato) com avaliação hepática prévia", score: 1.0, ref: "RENAME 2023; MS — Linha de Cuidado Álcool, 2022" },
          { item: "Conduziu breve intervenção motivacional durante a consulta", score: 0.5, ref: "MS — Linha de Cuidado Álcool, 2022" },
          { item: "Encaminhou ao hepatologista para acompanhamento da esteatohepatite", score: 0.3, ref: "MS — Linha de Cuidado Álcool, 2022" }
        ]
      }
    ]
  }
},

{
  id: 14,
  title: "Fumante de 25 anos que quer parar antes do nascimento do filho",
  sub: "UBS — Consulta agendada",
  tema: "Psiquiatria",
  topic: "Transtorno por uso de nicotina — cessação do tabagismo na atenção primária",
  level: "moderado",
  cardAccent: "#558B2F",

  instA: {
    scenario: "Atenção Primária — UBS. Consultório de clínica geral, turno matutino. Consulta agendada. Paciente veio por conta própria, motivado.",
    patient: "D.A., 25 anos, masculino, técnico em eletricidade, casado, esposa grávida de 16 semanas (primeira gestação).",
    complaint: "Paciente deseja parar de fumar antes do nascimento do filho, que está previsto para daqui a 24 semanas. Fuma desde os 14 anos.",
    tasks: [
      "Realize a anamnese do tabagismo: padrão de uso, dependência e tentativas anteriores de cessar.",
      "Aplique o Teste de Fagerström para quantificar a dependência à nicotina.",
      "Avalie o estágio de motivação do paciente (modelo de Prochaska).",
      "Proponha o plano terapêutico adequado (farmacológico e não farmacológico) baseado no PCDT de Tabagismo do MS.",
      "Oriente o paciente sobre o processo de cessação, os sintomas de abstinência e as estratégias para evitar recaída."
    ]
  },

  instB: {
    vitals: { PA: "128/82 mmHg", FC: "82 bpm", FR: "16 irpm", Tax: "36,6°C", Peso: "78 kg", Altura: "1,74 m", IMC: "25,7 kg/m²" },
    physicalGeneral: "Paciente em bom estado geral, lúcido e orientado. Sem dispneia em repouso. Hálito com odor de tabaco. Mucosas íntegras. Sem icterícia. Dedos com discreta coloração amarelada em indicador e médio direitos (nicotina).",
    physicalSeg: [
      "RESPIRATÓRIO: MV presente bilateralmente. Leve sibilância expiratória ao esforço (ausculta normal em repouso). Sem crepitações.",
      "CARDIOVASCULAR: BRNF em 2T, sem sopros.",
      "ORL: Faringe levemente hiperemiada. Sem linfonodos cervicais palpáveis.",
      "FAGERSTRÖM aplicado: Quando fuma o primeiro cigarro? (dentro de 5 min = 3). Difícil de não fumar onde proibido? (sim = 1). Qual o cigarro mais difícil de largar? (primeiro da manhã = 1). Quantos cigarros/dia? (26–30 = 2). Fuma mais pela manhã? (sim = 1). Fuma quando doente? (sim = 1) = Total: 9/10 — Dependência MUITO ALTA."
    ],
    labs: [
      { test: "Monóxido de carbono expirado (CO-ximetria)", val: "18 ppm", ref: "<6 ppm (não fumante)", alt: true },
      { test: "Espirometria (VEF1/CVF)", val: "78%", ref: ">70%", alt: false },
      { test: "Hemograma", val: "Normal", ref: "—", alt: false },
      { test: "Glicemia de jejum", val: "94 mg/dL", ref: "70–99 mg/dL", alt: false }
    ],
    image: null,
    note: "Sinais vitais entregues ao início. Fagerström e CO-ximetria entregues se o candidato aplicar a escala ou solicitar o exame. Espirometria disponível se solicitada. O candidato deve ser avaliado especialmente pela escolha do esquema terapêutico adequado ao PCDT/MS (TRN + bupropiona disponíveis no SUS; vareniclina fora do SUS e atualmente sem comercialização regular no Brasil).",
    patientProfile: "D.A., 25 anos, masculino, técnico em eletricidade em empresa de construção civil. Casado há 2 anos. Esposa grávida de 16 semanas. Fuma desde os 14 anos — 30 cigarros/dia (1,5 maços). Tentou parar duas vezes: uma sem apoio (durou 3 dias) e uma com adesivo de nicotina (durou 15 dias, mas teve irritabilidade intensa e voltou). Não tem outras comorbidades. Não usa álcool em excesso (cerveja ocasionalmente). Pai fumante faleceu de câncer de pulmão há 3 anos.",
    script: [
      { trigger: "Abertura", speech: "\"Doutor, eu quero muito parar de fumar antes do meu filho nascer. Meu pai morreu de câncer de pulmão por causa do cigarro. Não quero o mesmo pra mim.\"" },
      { trigger: "Quanto fuma", speech: "\"Uns 30 cigarros por dia. Desde os 14 anos. Já tentei parar duas vezes e não consegui.\"" },
      { trigger: "Sobre o primeiro cigarro do dia", speech: "\"Assim que acordo, antes mesmo do café. Se eu não fumo fico com dor de cabeça e muito irritado.\"" },
      { trigger: "Sobre a tentativa com adesivo", speech: "\"Fiquei 15 dias com o adesivo, mas fiquei muito irritado, dormia mal. Aí recaí numa situação de estresse no trabalho.\"" },
      { trigger: "Sobre a motivação", speech: "\"Minha esposa grávida me pediu. E a morte do meu pai foi muito impactante. Não quero que meu filho veja o pai fumando.\"" },
      { trigger: "Sobre o cigarro e o estresse", speech: "\"Quando fico nervoso, o cigarro é o único jeito de relaxar. Tenho medo de engordar se parar.\"" },
      { trigger: "Pergunta ativa", speech: "\"Existe algum remédio que ajude? Porque sozinho não consigo.\"" },
      { trigger: "Pergunta ativa", speech: "\"Quanto tempo demora pra sair o cigarro do meu corpo? Meu filho vai nascer diferente por eu fumar?\"" }
    ],
    hiddenInfo: [
      "Pai faleceu de câncer de pulmão aos 52 anos — fator motivador central e de risco familiar; revelar apenas se o candidato perguntar sobre história familiar ou sobre o que motivou a decisão de parar.",
      "O paciente fuma dentro de casa (fumo passivo para a esposa grávida) — revelar apenas se perguntado sobre o ambiente doméstico e se a esposa é exposta ao cigarro."
    ],
    actorBehavior: "Motivado e genuinamente engajado — estágio de ação (já decidiu parar, está buscando ajuda). Demonstra preocupação real com o filho. Tem algum receio de fracasso ('já tentei duas vezes'). Abre-se sobre o medo do estresse sem cigarro. Fica com expressão de esperança quando o candidato apresenta um plano estruturado."
  },

  instC: {
    diagnosis: "Transtorno por uso de nicotina — dependência muito alta (Fagerström 9/10). Tabagismo de 11 anos (30 cigarros/dia). CO-ximetria 18 ppm. Carga tabágica: 30 cig/dia × 11 anos ÷ 20 = 16,5 maços-ano. Esposa grávida exposta ao fumo passivo. Estágio motivacional: ação. CID-11: 6C4A.2 / DSM-5: F17.210.",
    differentials: [
      "Uso de nicotina sem dependência — Fagerström 9/10 confirma dependência muito alta; exclui uso social ou ocasional.",
      "Depressão como barreira à cessação — irritabilidade e insônia durante abstinência podem refletir tanto abstinência da nicotina quanto episódio depressivo subjacente; investigar humor basal.",
      "DPOC incipiente — espirometria com VEF1/CVF 78% (acima do corte de 70% para DPOC); sibilância ao esforço merece seguimento; realizar espirometria pós-broncodilatador se sintomas persistirem.",
      "Ansiedade como barreira à cessação — relato de que o cigarro 'alivia o estresse' pode indicar uso como automedicação de ansiedade; investigar e abordar no plano de cessação."
    ],
    context: "Homem jovem de 25 anos, fumante há 11 anos (30 cigarros/dia), Fagerström 9 (dependência muito alta), CO-ximetria 18 ppm, em estágio de ação com alta motivação (nascimento do filho, morte do pai por câncer de pulmão). Duas tentativas anteriores frustradas — uma sem suporte e uma com TRN isolada. Esposa grávida exposta ao fumo passivo em casa.",
    justify: "Dependência à nicotina confirmada por Fagerström 9/10 (muito alta): fuma o primeiro cigarro em <5 minutos após acordar (maior critério de dependência matinal), 30 cigarros/dia, fuma quando doente, o cigarro da manhã é o mais difícil. CO-ximetria 18 ppm confirma exposição recente e ativa. Carga tabágica de 16,5 maços-ano já justifica rastreio de DPOC e câncer de pulmão a longo prazo. Esposo ativo da grávida — risco de fumo passivo para o feto.",
    expectedAnamnesis: [
      "Investigar início do tabagismo (idade), tempo total e quantidade diária",
      "Calcular carga tabágica (maços-ano = cigarros/dia ÷ 20 × anos fumando)",
      "Aplicar Fagerström para quantificar dependência",
      "Investigar tentativas anteriores de cessação: métodos usados, duração, motivo do retorno",
      "Avaliar sintomas de abstinência durante tentativas anteriores",
      "Pesquisar motivação atual e estágio de mudança (Prochaska)",
      "Investigar gatilhos do tabagismo (estresse, álcool, café, situações sociais)",
      "Pesquisar comorbidades (DPOC, cardiovascular, depressão, ansiedade)",
      "Investigar uso de álcool e outras substâncias",
      "Pesquisar fumo passivo na residência (esposa grávida)",
      "Investigar história familiar de câncer de pulmão ou DPOC"
    ],
    expectedPhysical: [
      "Avaliação respiratória: ausculta pulmonar (sibilância, crepitações)",
      "Avaliação cardiovascular: PA, FC (risco cardiovascular pelo tabagismo)",
      "Avaliação de CO-ximetria (se disponível na UBS)",
      "Inspeção de dedos: coloração amarelada por nicotina",
      "Avaliação de faringe e laringe (laringite por tabagismo)"
    ],
    expectedExams: [
      { exam: "CO-ximetria (monóxido de carbono expirado)", justify: "Quantifica exposição recente, motiva o paciente", expected: "18 ppm (muito elevado)" },
      { exam: "Espirometria", justify: "Rastreio de DPOC em tabagista com carga significativa", expected: "VEF1/CVF 78% — sem DPOC" },
      { exam: "Fagerström", justify: "Quantifica dependência e orienta o esquema terapêutico", expected: "9/10 — dependência muito alta" }
    ],
    expectedConduct: [
      "Abordagem motivacional — 5 As (PCDT MS): Abordar (perguntar sobre o tabagismo em toda consulta), Aconselhar (orientar de forma clara sobre os benefícios de parar), Avaliar (avaliar motivação e estágio de mudança), Apoiar (oferecer suporte e tratamento), Acompanhar (marcar retorno e monitorar). (MS — PCDT Tabagismo, 2020; INCA, 2021)",
      "Farmacológico primeira linha no SUS (Fagerström 9 — dependência muito alta → farmacoterapia obrigatória): TRN — Adesivo de nicotina 21 mg/24h (1ª fase: 4–8 semanas) + goma de nicotina 2 mg para fissuras agudas (máx. 15 gomas/dia). Para 30 cigarros/dia: adesivo 21 mg. (PCDT MS, 2020; RENAME 2023)",
      "Bupropiona: 150 mg/dia por 3 dias, depois 150 mg 2x/dia por 7–12 semanas. Iniciar 1–2 semanas antes da data de parar. Contraindicada em epilepsia, transtorno alimentar, uso de IMAO. (PCDT MS, 2020; RENAME 2023)",
      "Combinação TRN + Bupropiona: Superior à monoterapia — indicada para dependência muito alta (Fagerström ≥7). (PCDT MS, 2020)",
      "Vareniclina: Maior eficácia, mas atualmente sem disponibilidade regular no SUS e com problemas de comercialização no Brasil — mencionar como opção se disponível em farmácias privadas, mas não como primeira linha no SUS. (RENAME 2023 — não consta; ABP, 2022)",
      "Não farmacológico: Aconselhamento individual (sessões de 10–15 min a cada retorno). Grupos de apoio ao tabagismo (disponíveis na UBS pelo PNCT/INCA). Identificar e manejar gatilhos (técnica '4 Ds': Delay, Deep breath, Drink water, Do something else). Orientar sobre sintomas de abstinência esperados: irritabilidade, ansiedade, insônia, aumento do apetite (duram 2–4 semanas). Estabelecer data para parar ('Dia D') — preferencialmente nos próximos 7 dias.",
      "Orientações específicas: Parar de fumar dentro de casa imediatamente — proteger a esposa grávida e o feto do fumo passivo. Benefícios da cessação na gestação: melhora do desenvolvimento fetal, redução do risco de parto prematuro e baixo peso ao nascer. Após cessação: em 20 min a PA normaliza; em 8h o CO cai pela metade; em 2 semanas a função pulmonar melhora.",
      "Seguimento: Retorno em 1 semana (Dia D ou logo após) para avaliação dos sintomas de abstinência. Depois a cada 2–4 semanas pelo PCDT (mínimo 3 meses de acompanhamento ativo)."
    ],
    expectedCommunication: [
      "Valorizar a decisão: 'Você está tomando uma das melhores decisões da sua vida para você e para seu filho.'",
      "Devolutiva da CO-ximetria: 'Esse aparelho mede o monóxido de carbono do cigarro no seu sangue — está em 18. Acima de 6 já é prejudicial. O que sente ao ver esse número?'",
      "Sobre a esposa grávida: Abordar com delicadeza — não culpabilizar, mas explicar o impacto do fumo passivo no desenvolvimento fetal."
    ],
    criticalErrors: [
      "Não aplicar o Fagerström e tratar como dependência leve, prescrevendo apenas TRN sem bupropiona (inadequado para Fagerström 9)",
      "Não orientar sobre a necessidade de parar de fumar dentro de casa imediatamente (fumo passivo para a esposa grávida)",
      "Prescrever bupropiona sem investigar contraindicações (epilepsia, transtorno alimentar)",
      "Não estabelecer a data para parar ('Dia D') e não agendar retorno próximo",
      "Não mencionar os grupos de apoio ao tabagismo da UBS (PNCT/INCA) como recurso não farmacológico"
    ]
  },

  instD: {
    title: "CHECKLIST — FUMANTE DE 25 ANOS QUE QUER PARAR ANTES DO NASCIMENTO DO FILHO",
    sections: [
      {
        h: "BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
        items: [
          { item: "Valorizou a decisão do paciente de parar e reforçou a motivação", score: 0.5, ref: "MS — PCDT Tabagismo, 2020" },
          { item: "Usou a CO-ximetria como ferramenta motivacional (devolutiva do número)", score: 0.5, ref: "MS — PCDT Tabagismo, 2020; INCA, 2021" },
          { item: "Abordou o fumo passivo na residência (esposa grávida) sem culpabilizar", score: 0.5, ref: "MS — PCDT Tabagismo, 2020" },
          { item: "Explicou os benefícios da cessação de forma concreta e progressiva", score: 0.5, ref: "MS — PCDT Tabagismo, 2020" }
        ]
      },
      {
        h: "BLOCO 2 — ANAMNESE",
        items: [
          { item: "Investigou início, quantidade diária e carga tabágica (maços-ano)", score: 0.5, ref: "MS — PCDT Tabagismo, 2020" },
          { item: "Aplicou o Teste de Fagerström corretamente", score: 1.0, ref: "MS — PCDT Tabagismo, 2020; INCA, 2021" },
          { item: "Investigou tentativas anteriores de cessação: métodos, duração e motivo da recaída", score: 0.5, ref: "MS — PCDT Tabagismo, 2020" },
          { item: "Pesquisou gatilhos do tabagismo (estresse, situações sociais)", score: 0.3, ref: "MS — PCDT Tabagismo, 2020" },
          { item: "Avaliou o estágio de motivação (Prochaska — identificou estágio de ação)", score: 0.3, ref: "MS — PCDT Tabagismo, 2020" }
        ]
      },
      {
        h: "BLOCO 3 — EXAME FÍSICO",
        items: [
          { item: "Realizou ausculta pulmonar", score: 0.3, ref: "Semiologia Médica — FMUSP" },
          { item: "Avaliou CO-ximetria ou solicitou se disponível", score: 0.5, ref: "MS — PCDT Tabagismo, 2020" }
        ]
      },
      {
        h: "BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO",
        items: [
          { item: "Classificou a dependência como muito alta (Fagerström ≥7) e indicou farmacoterapia combinada", score: 1.0, ref: "MS — PCDT Tabagismo, 2020" },
          { item: "Solicitou espirometria para rastreio de DPOC em tabagista com carga significativa", score: 0.5, ref: "SBPT — Diretrizes DPOC, 2022" }
        ]
      },
      {
        h: "BLOCO 5 — CONDUTA E ORIENTAÇÃO AO PACIENTE",
        items: [
          { item: "Prescreveu TRN (adesivo + goma) com dose adequada para 30 cigarros/dia", score: 1.0, ref: "MS — PCDT Tabagismo, 2020; RENAME 2023" },
          { item: "Prescreveu bupropiona 150 mg 2x/dia com orientação de início 1–2 sem antes do Dia D", score: 1.0, ref: "MS — PCDT Tabagismo, 2020; RENAME 2023" },
          { item: "Estabeleceu o 'Dia D' e agendou retorno em 1 semana", score: 0.5, ref: "MS — PCDT Tabagismo, 2020" },
          { item: "Orientou sobre os grupos de apoio ao tabagismo da UBS (PNCT/INCA)", score: 0.3, ref: "MS — PNCT/INCA, 2022" },
          { item: "Orientou para cessação imediata do fumo dentro de casa (proteção da gestante)", score: 0.3, ref: "MS — PCDT Tabagismo, 2020" }
        ]
      }
    ]
  }
},

{
  id: 15,
  title: "Paciente internada com DPOC que pede para fumar no banheiro do hospital",
  sub: "Enfermaria de Pneumologia — Hospital Geral",
  tema: "Psiquiatria",
  topic: "Transtorno por uso de nicotina em paciente internado — cessação hospitalar",
  level: "complexo",
  cardAccent: "#2E7D32",

  instA: {
    scenario: "Enfermaria de Pneumologia — Hospital Geral. 2º dia de internação. Turno da tarde. A enfermagem chamou o médico plantonista porque a paciente está agitada, irritada, diz que 'não aguenta mais' e ameaçou ir ao banheiro fumar escondido. Está internada por exacerbação de DPOC.",
    patient: "M.T., 61 anos, feminino, aposentada (ex-operária de fábrica têxtil), viúva, mora com filha. Internada há 2 dias por exacerbação moderada de DPOC.",
    complaint: "Paciente está em abstinência de nicotina desde a internação (48 horas). Agitada, irritável, com fissura intensa ('tô maluca pra fumar'). Ameaça descumprir a proibição de fumar no hospital.",
    tasks: [
      "Realize a anamnese do tabagismo e avalie a gravidade da dependência à nicotina (Fagerström).",
      "Avalie e maneje os sintomas de abstinência de nicotina no contexto da internação.",
      "Proponha o tratamento farmacológico seguro para cessação durante a internação hospitalar por DPOC.",
      "Estabeleça o plano de cessação para a alta hospitalar.",
      "Comunique os riscos de fumar durante a internação por DPOC e motive a cessação definitiva."
    ]
  },

  instB: {
    vitals: { PA: "138/86 mmHg", FC: "96 bpm", FR: "22 irpm", Tax: "37,1°C", Peso: "55 kg", Altura: "1,58 m", IMC: "22,0 kg/m²", SatO2: "89% em ar ambiente / 94% com O2 por cateter nasal 2 L/min" },
    physicalGeneral: "Paciente em uso de cateter nasal de O2 2 L/min. Agitada e irritável. Tórax em barril. Uso de musculatura acessória respiratória. Lúcida e orientada. Hálito de tabaco (fumou antes de ser internada). Discreta cianose labial em repouso.",
    physicalSeg: [
      "RESPIRATÓRIO: MV diminuído difusamente, com sibilos expiratórios difusos. Tórax em barril. Tempo expiratório aumentado (expiração prolongada). Expansibilidade diminuída bilateralmente.",
      "CARDIOVASCULAR: BRNF em 2T, sem sopros. Sem turgência jugular.",
      "NEUROLÓGICO: Agitada, mas sem déficits focais. Orientada.",
      "FAGERSTRÖM aplicado: Primeiro cigarro em <5 min após acordar (3). Fuma onde proibido (1 — 'sim, vou fumar no banheiro'). Cigarro mais importante = primeiro (1). Quantidade = 40 cig/dia (3). Fuma mais pela manhã (1). Fuma quando doente (1 — 'fuma até no hospital'). = Total: 10/10 — Dependência MÁXIMA."
    ],
    labs: [
      { test: "Gasometria arterial (ar ambiente)", val: "pH 7,36; PaO2 52 mmHg; PaCO2 52 mmHg; SatO2 86%", ref: "PaO2 >80; PaCO2 35–45", alt: true },
      { test: "Hemograma", val: "Leucócitos 13.200/mm³ (neutrófilos 82%)", ref: "4.000–10.000/mm³", alt: true },
      { test: "PCR", val: "68 mg/L", ref: "<5 mg/L", alt: true },
      { test: "Potássio", val: "3,3 mEq/L", ref: "3,5–5,0 mEq/L", alt: true },
      { test: "Glicemia", val: "108 mg/dL", ref: "70–99 mg/dL", alt: true },
      { test: "Espirometria (pré-internação — prontuário)", val: "VEF1/CVF 48%; VEF1 32% do previsto", ref: ">70%; >80%", alt: true }
    ],
    image: "Radiografia de tórax AP (internação): Hiperinsuflação pulmonar bilateral. Retificação das cúpulas diafragmáticas. Aumento do espaço retroesternal. Infiltrado parenquimatoso em base direita compatível com infecção. Ausência de pneumotórax ou derrame pleural.",
    note: "Sinais vitais e O2 em uso entregues ao início. Prontuário com espirometria prévia disponível se solicitado. Exames laboratoriais entregues conforme solicitação. O ator deve estar agitada e irritável mas responder positivamente quando o médico oferece solução concreta (TRN). O candidato deve ser avaliado especialmente pela proposta de TRN imediata para manejar a abstinência durante a internação, e pela comunicação dos riscos de fumar com O2 em uso (risco de explosão/queimadura — risco concreto e imediato).",
    patientProfile: "M.T., 61 anos, feminino, ex-operária de fábrica têxtil (30 anos de exposição a poeiras e fumaças), aposentada por invalidez. Viúva há 5 anos. Mora com filha (35 anos). Fuma desde os 16 anos — 40 cigarros/dia (2 maços). Carga tabágica: 40 cig/dia × 45 anos ÷ 20 = 90 maços-ano. Diagnóstico de DPOC gold IV há 3 anos. Internações anteriores por exacerbação: 3 em 2 anos. Nunca tentou parar de fumar ('o cigarro é meu único prazer').",
    script: [
      { trigger: "Abordagem inicial", speech: "\"Doutor, eu preciso de um cigarro. Faz dois dias. Tô ficando louca. Não consigo ficar parada, não consigo dormir. Isso é tortura.\"" },
      { trigger: "Quando orientada sobre a proibição", speech: "\"Eu sei que é proibido. Mas eu não aguento mais. Vou no banheiro, fecho a porta, ninguém precisa saber.\"" },
      { trigger: "Quando explicado o risco com O2", speech: "\"Mas eu vou desligar o oxigênio antes. É um minutinho só.\"" },
      { trigger: "Sobre o DPOC e o cigarro", speech: "\"Eu sei que o cigarro me fez mal. Mas faz 45 anos que fumo. Não vou parar agora. Já tô velha.\"" },
      { trigger: "Sobre tentativas de parar", speech: "\"Nunca tentei parar. Nunca quis. Mas agora, nessa situação, talvez… se tiver um jeito de diminuir esse desespero.\"" },
      { trigger: "Sobre a filha", speech: "\"Minha filha fica me pedindo pra parar faz anos. Ela tem medo de me perder. Ela até veio visitar hoje.\"" },
      { trigger: "Pergunta ativa", speech: "\"Tem remédio que alivia essa vontade de fumar? Porque eu não aguento ficar assim.\"" },
      { trigger: "Pergunta ativa", speech: "\"Se eu parar de fumar agora, ainda vai ajudar? Com o pulmão já tão ruim?\"" }
    ],
    hiddenInfo: [
      "A filha é o principal fator de proteção e motivação para a paciente — revelar apenas se o candidato perguntar sobre a família e o que seria mais importante para ela se conseguir parar.",
      "A paciente fumou na última internação no banheiro (há 6 meses) e não foi detectada — revelar apenas se o candidato perguntar sobre internações anteriores e se houve episódio de fumar no hospital."
    ],
    actorBehavior: "Muito agitada e irritável no início — cruzando os braços, impaciente. Cede progressivamente quando o candidato demonstra empatia E oferece uma solução concreta (TRN) para o alívio da fissura. Demonstra vulnerabilidade ao falar da filha. Expressa ceticismo sobre parar ('já tô velha, tô com o pulmão destruído') mas há abertura quando o candidato apresenta os benefícios mesmo nesta fase."
  },

  instC: {
    diagnosis: "Transtorno por uso de nicotina com dependência máxima (Fagerström 10/10). Síndrome de abstinência de nicotina em internação hospitalar. Carga tabágica de 90 maços-ano. DPOC gold IV (VEF1 32%) em exacerbação moderada com infecção de base. CID-11: 6C4A.2 / J44.1 / DSM-5: F17.203.",
    differentials: [
      "Agitação por hipoxemia — SatO2 89% sem O2 pode causar irritabilidade e confusão; no entanto, com O2 a sat normaliza (94%) e a agitação persiste — confirma componente de abstinência de nicotina.",
      "Agitação por efeito de broncodilatadores (salbutamol, ipratrópio) — pode causar taquicardia e ansiedade; contribuinte mas não explica a fissura e o comportamento de busca pelo cigarro.",
      "Delirium de início — em paciente hipoxêmica idosa; descartado pela orientação preservada e pela direcionalidade clara da queixa (fissura pelo cigarro).",
      "Transtorno de ansiedade generalizada exacerbado pela internação — ansiedade real mas secundária à abstinência de nicotina neste contexto."
    ],
    context: "Mulher de 61 anos, 45 anos de tabagismo intenso (40 cigarros/dia, Fagerström 10/10, 90 maços-ano), em internação por exacerbação de DPOC gold IV, em abstinência de nicotina há 48 horas com síndrome de abstinência grave (irritabilidade intensa, fissura incontrolável, insônia). Ameaça fumar no hospital com O2 em uso — risco de queimadura e explosão. Primeira abertura à cessação do tabagismo.",
    justify: "Dependência máxima à nicotina (Fagerström 10/10) com síndrome de abstinência grave: irritabilidade, ansiedade, insônia e fissura incontrolável após 48h sem fumar. O contexto de internação por DPOC exacerbada cria uma 'janela de oportunidade' para cessação — momento em que muitos pacientes apresentam abertura à mudança pela primeira vez. A ameaça de fumar com O2 em uso configura risco imediato de segurança.",
    expectedAnamnesis: [
      "Aplicar Fagerström rapidamente (6 perguntas)",
      "Investigar padrão de uso: início, quantidade, carga tabágica",
      "Pesquisar tentativas anteriores de cessação (nenhuma neste caso)",
      "Avaliar motivação: 'A senhora já pensou em parar de fumar alguma vez?'",
      "Identificar motivadores (filha, medo de nova internação)",
      "Pesquisar sintomas de abstinência atuais: irritabilidade, insônia, fissura, dificuldade de concentração",
      "Investigar episódio anterior de fumar no hospital (risco de segurança)",
      "Pesquisar comorbidades e medicamentos em uso (contraindicações para bupropiona)"
    ],
    expectedPhysical: [
      "Avaliação respiratória: SatO2, FR, ausculta (sibilos, MV diminuído)",
      "Avaliação do nível de agitação e consciência (afastar delirium)",
      "Verificar se O2 está em uso (risco de segurança ao fumar)",
      "Aplicar Fagerström"
    ],
    expectedExams: [
      { exam: "Fagerström", justify: "Quantificar dependência e indicar esquema terapêutico", expected: "10/10 — dependência máxima" },
      { exam: "Gasometria arterial", justify: "Avaliar gravidade da insuficiência respiratória", expected: "Hipoxemia + hipercapnia" },
      { exam: "Espirometria (prontuário)", justify: "Estadiar DPOC e correlacionar com tabagismo", expected: "DPOC gold IV" },
      { exam: "Hemograma e PCR", justify: "Confirmar infecção na exacerbação", expected: "Leucocitose, PCR elevado" }
    ],
    expectedConduct: [
      "PRIORITÁRIO — Segurança imediata: Explicar o risco concreto de fumar com O2 em uso: 'A senhora pode pegar fogo. O oxigênio acelera qualquer chama — um cigarro aceso com O2 no rosto pode causar queimaduras graves no rosto, nas vias aéreas e no pulmão.' Negociar com a paciente: 'Eu tenho um tratamento para diminuir essa vontade. Posso oferecer agora.'",
      "TRN imediata — primeira linha na internação: Adesivo de nicotina 21 mg/24h (substituir em 24h; retirar à noite se insônia). Para 40 cigarros/dia → adesivo 21 mg + goma 4 mg para fissuras agudas. A TRN é segura em pacientes com DPOC e insuficiência respiratória — não causa broncoespasmo e não é combustível. Início imediato — ainda durante a internação. (TelessaúdeRS-UFRGS, 2023; PCDT MS, 2020)",
      "Bupropiona: Pode ser iniciada na internação se não houver contraindicações (epilepsia, transtorno alimentar, uso de IMAO). 150 mg/dia por 3 dias, depois 150 mg 2x/dia. Início 1–2 semanas antes do Dia D — pode ser iniciada agora para estar ativa na alta. (PCDT MS, 2020; RENAME 2023)",
      "Vareniclina: Sem disponibilidade regular no SUS; mencionar como opção se disponível privadamente.",
      "Plano para alta: Manter TRN (adesivo + goma) por pelo menos 8–12 semanas. Encaminhar ao Programa de Controle do Tabagismo da UBS (PNCT/INCA) para grupos de apoio. Retorno em 1 semana na UBS após alta.",
      "Comunicar os benefícios mesmo nesta fase avançada: Parar de fumar reduz a velocidade de progressão do DPOC mesmo no gold IV. Reduz o número e a gravidade das exacerbações. Melhora a eficácia dos broncodilatadores. Aumenta a tolerância ao exercício e a qualidade de vida. 'Nunca é tarde demais — parar agora ainda vai ajudar.'",
      "Envolver a filha: Com consentimento da paciente, incluir a filha no plano de cessação (suporte familiar aumenta taxa de sucesso)."
    ],
    expectedCommunication: [
      "Sobre o risco imediato: Tom direto mas empático — 'Preciso te falar sobre um risco real que me preocupa muito nesse momento.'",
      "Sobre a cessação: 'A senhora diz que nunca pensou em parar. O que está sentindo agora, essa dificuldade toda, me diz que o seu corpo está muito dependente do cigarro. Mas também me diz que é possível tratar isso.'",
      "Sobre os benefícios: Usar a pergunta motivacional: 'O que seria diferente na sua vida se conseguisse parar?'"
    ],
    criticalErrors: [
      "Não alertar sobre o risco de incêndio/queimadura ao fumar com oxigênio em uso — risco imediato de segurança",
      "Não oferecer TRN imediata para manejar a abstinência — perder a janela terapêutica da internação",
      "Contraindicar TRN em paciente com DPOC por medo de broncoespasmo (TRN é segura na DPOC)",
      "Usar abordagem moralista ou punitiva ('você deveria ter parado antes') — rompe o vínculo e encerra a janela motivacional",
      "Não estabelecer plano para a alta (a cessação hospitalar sem continuidade ambulatorial tem taxa de sucesso muito baixa)"
    ]
  },

  instD: {
    title: "CHECKLIST — PACIENTE INTERNADA COM DPOC QUE QUER FUMAR NO BANHEIRO DO HOSPITAL",
    sections: [
      {
        h: "BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
        items: [
          { item: "Abordou a paciente com empatia, sem julgamento ou postura punitiva", score: 0.5, ref: "MS — PCDT Tabagismo, 2020" },
          { item: "Alertou sobre o risco concreto de fumar com O2 em uso (incêndio, queimadura)", score: 1.0, ref: "MS — PCDT Tabagismo, 2020; normas de segurança hospitalar" },
          { item: "Identificou e utilizou a filha como motivador para a cessação", score: 0.5, ref: "MS — PCDT Tabagismo, 2020" },
          { item: "Respondeu à pergunta sobre se ainda adianta parar com informação baseada em evidências", score: 0.5, ref: "SBPT — Diretrizes DPOC, 2022" }
        ]
      },
      {
        h: "BLOCO 2 — ANAMNESE",
        items: [
          { item: "Aplicou o Fagerström e identificou dependência máxima (10/10)", score: 1.0, ref: "MS — PCDT Tabagismo, 2020" },
          { item: "Calculou a carga tabágica (maços-ano)", score: 0.3, ref: "MS — PCDT Tabagismo, 2020" },
          { item: "Investigou motivação para cessar e identificou 'janela de oportunidade' da internação", score: 0.5, ref: "MS — PCDT Tabagismo, 2020" },
          { item: "Pesquisou tentativas anteriores e episódio de fumar em internação prévia", score: 0.3, ref: "MS — PCDT Tabagismo, 2020" }
        ]
      },
      {
        h: "BLOCO 3 — EXAME FÍSICO",
        items: [
          { item: "Avaliou SatO2 e verificou que o O2 estava em uso (risco de segurança)", score: 0.5, ref: "Normas de segurança hospitalar — ANVISA" },
          { item: "Avaliou a ausculta pulmonar e o padrão respiratório", score: 0.3, ref: "SBPT — Diretrizes DPOC, 2022" }
        ]
      },
      {
        h: "BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO",
        items: [
          { item: "Identificou síndrome de abstinência de nicotina como causa principal da agitação", score: 0.5, ref: "MS — PCDT Tabagismo, 2020" },
          { item: "Reconheceu a internação como janela terapêutica para cessação do tabagismo", score: 0.5, ref: "MS — PCDT Tabagismo, 2020" },
          { item: "Confirmou que TRN é segura em paciente com DPOC e oxigenoterapia", score: 0.5, ref: "MS — PCDT Tabagismo, 2020; TelessaúdeRS, 2023" }
        ]
      },
      {
        h: "BLOCO 5 — CONDUTA E ORIENTAÇÃO AO PACIENTE",
        items: [
          { item: "Prescreveu TRN imediatamente (adesivo 21 mg + goma 4 mg para fissura)", score: 1.0, ref: "MS — PCDT Tabagismo, 2020; RENAME 2023" },
          { item: "Iniciou ou planejou bupropiona para continuidade do tratamento", score: 0.5, ref: "MS — PCDT Tabagismo, 2020; RENAME 2023" },
          { item: "Estabeleceu plano para alta: encaminhamento à UBS e grupos de apoio (PNCT/INCA)", score: 0.5, ref: "MS — PNCT/INCA, 2022" },
          { item: "Comunicou que parar de fumar ainda traz benefícios mesmo no DPOC gold IV", score: 0.5, ref: "SBPT — Diretrizes DPOC, 2022" }
        ]
      }
    ]
  }
},

// NOVOS CASOS DE PSIQUIATRIA:

{
  id: 16,
  title: 'Veterinária que revive o acidente de trabalho e não consegue entrar no canil',
  sub: 'Ambulatório de Saúde Mental — Policlínica',
  tema: 'Psiquiatria',
  topic: 'TEPT — apresentação em mulher jovem após trauma ocupacional',
  level: 'moderado',
  cardAccent: '#1A237E',
  instA: {
    scenario: "Ambulatório de Saúde Mental — Policlínica Municipal. Primeira consulta, turno da tarde. Paciente encaminhada pelo médico do trabalho após 3 meses de licença por 'trauma psicológico'.",
    patient: 'K.S., 29 anos, feminino, veterinária em clínica de animais de grande porte, solteira, sem filhos.',
    complaint: 'Paciente relata que, há 4 meses, foi atacada por um touro durante procedimento de campo, sofrendo fratura de costelas e contusões. Desde então não consegue retornar ao trabalho, tem pesadelos frequentes e fica em pânico ao ouvir mugidos ou ver animais de grande porte.',
    tasks: [
      'Realize a anamnese investigando os 4 clusters do TEPT sem forçar o relato detalhado do evento.',
      'Avalie comorbidades: depressão, ansiedade e uso de substâncias.',
      'Avalie o risco de suicídio.',
      'Formule a hipótese diagnóstica e os diferenciais pertinentes.',
      'Proponha a conduta terapêutica e oriente a paciente sobre o processo de tratamento.'
    ]
  },
  instB: {
    vitals: {
      PA: '124/80 mmHg',
      FC: '94 bpm',
      FR: '18 irpm',
      Tax: '36,6°C',
      Peso: '64 kg',
      Altura: '1,66 m',
      IMC: '23,2 kg/m²'
    },
    physicalGeneral: 'Paciente em bom estado geral, lúcida e orientada. Cicatriz visível no hemitórax esquerdo (fratura cirúrgica). Aparência tensa, hipervigilante. Sobressalta-se quando a porta da sala é aberta com ruído. Contato visual intermitente.',
    physicalSeg: 'Neurológico: Sem déficits focais. Atenção levemente reduzida. Memória preservada. | Estado mental: Humor disfórico, afeto congruente. Fala organizada. Pensamento sem desorganização formal. Revivência presente (flashbacks ao ouvir barulhos semelhantes ao ataque). Insight preservado.',
    labs: [],
    image: null,
    note: 'Sinais vitais entregues ao início. Nenhum exame laboratorial necessário para este caso. O candidato deve ser avaliado especialmente pela habilidade de identificar os 4 clusters sem forçar o relato do evento traumático, e pela proposta de tratamento baseada em evidências (psicoterapia focada no trauma como 1ª linha).',
    patientProfile: 'K.S., 29 anos, feminino, veterinária formada há 4 anos. Solteira, mora com os pais. Apaixonada pela profissão antes do acidente. Natural de Fortaleza/CE.',
    script: [
      { trigger: 'Abertura', speech: 'Meu médico do trabalho me mandou aqui. Eu sei que tenho que voltar, mas eu não consigo. Só de pensar em entrar no curral já começo a tremer.' },
      { trigger: 'Sobre o que aconteceu', speech: 'Prefiro não entrar em detalhes. O touro me pegou. Fiquei no hospital uma semana. Aquilo ficou na minha cabeça.' },
      { trigger: 'Sobre os pesadelos', speech: 'Toda noite. Eu acordo gritando. Revivo aquilo. É horrível.' },
      { trigger: 'Sobre os flashbacks', speech: 'Qualquer mugido, qualquer cheiro de curral... é como se eu estivesse lá de novo. Até na TV, se passa cena de fazenda, eu mudo o canal correndo.' },
      { trigger: 'Sobre o retorno ao trabalho', speech: 'Tentei ir ao consultório. Fiquei boa com animais pequenos. Mas quando vi um cavalo na rua, tive um ataque de pânico.' },
      { trigger: 'Sobre humor e vida social', speech: 'Tô me sentindo distante de tudo. Antes adorava sair, ir a festas. Agora não tenho vontade de nada. Meus amigos dizem que mudei.' },
      { trigger: 'Sobre uso de substâncias', speech: 'Tomo um vinho ou dois à noite pra conseguir dormir. Não é todo dia.' },
      { trigger: 'Sobre suicídio', speech: 'Não, nunca pensei nisso. Só quero voltar a ser quem eu era.' },
      { trigger: 'Pergunta ativa', speech: 'Isso tem cura, doutora? Ou vou ter medo de animais grandes para sempre?' },
      { trigger: 'Pergunta ativa', speech: 'Vou precisar reviver tudo isso no tratamento? Porque não consigo falar sobre aquele dia.' }
    ],
    hiddenInfo: 'Uso de vinho quase diário para induzir o sono — revelar apenas se perguntado sobre frequência e quantidade exata do consumo de álcool. | Tentou voltar ao trabalho mas teve crise de pânico ao ver um cavalo na rua — revelar apenas se perguntado sobre tentativas de retorno às atividades relacionadas ao trauma.',
    actorBehavior: 'Tensa, hipervigilante (olha para a porta quando há ruídos). Colaborativa. Evita entrar em detalhes do evento mas responde às perguntas sobre os sintomas. Demonstra alívio quando o candidato explica que não precisa reviver o evento em detalhes para o tratamento. Emocionada ao falar do impacto na carreira que amava.'
  },
  instC: {
    diagnosis: 'Transtorno de estresse pós-traumático (TEPT) — trauma ocupacional por ataque animal, 4 meses de evolução, com todos os 4 clusters presentes. Uso de álcool como automedicação (fator de risco para manutenção do TEPT). CID-11: 6B40 / DSM-5: F43.10.',
    differentials: [
      'Transtorno de ajustamento com ansiedade — sintomas de adaptação a evento estressor sem preencher os 4 clusters do TEPT e sem a duração >1 mês; excluído pela presença de todos os critérios de TEPT.',
      'Fobia específica (animais) — medo fóbico de animais de grande porte; no entanto, a presença de revivência, evitação generalizada e hiperexcitabilidade vai além de uma fobia específica.',
      'Transtorno depressivo maior — humor disfórico e anedonia presentes; podem ser comorbidades do TEPT ou quadro depressivo secundário; investigar critérios completos.',
      'Transtorno do pânico — crise de pânico ao ver o cavalo pode sugerir pânico; no entanto, as crises são situacionais (ligadas ao trauma) e não inesperadas, o que caracteriza melhor o TEPT.'
    ],
    context: 'Veterinária de 29 anos, 4 meses após ataque por touro com fratura de costelas, apresenta TEPT com revivência (pesadelos diários, flashbacks situacionais), evitação (não retorna ao trabalho com grandes animais, evita estímulos relacionados), alterações cognitivas e de humor (distanciamento, anedonia, sensação de mudança de identidade) e hiperexcitabilidade (hipervigilância, sobressalto, insônia). Uso de álcool como automedicação.',
    justify: 'Preenche todos os 4 clusters do DSM-5 para TEPT: revivência (pesadelos diários, flashbacks com estímulos sensoriais), evitação (muda canal, evita curral, tentativa frustrada de retorno), alterações cognitivas/humor (distanciamento, anedonia, sensação de mudança), hiperexcitabilidade (sobressalto, hipervigilância, insônia). Duração >1 mês (4 meses). Comprometimento funcional (3 meses de licença, incapacidade de retornar ao trabalho).',
    expectedAnamnesis: 'Investigar o evento traumático sem forçar detalhes desnecessários | Pesquisar revivência: pesadelos, flashbacks, reações a estímulos sensoriais (mugidos, cheiros) | Investigar evitação: locais, situações, pensamentos relacionados ao trauma | Pesquisar alterações cognitivas e de humor: distanciamento, anedonia, culpa, sensação de mudança | Investigar hiperexcitabilidade: insônia, hipervigilância, sobressalto | Pesquisar uso de álcool e outras substâncias (automedicação) | Rastrear depressão comórbida | Avaliar risco de suicídio | Avaliar impacto profissional e social',
    expectedPhysical: 'Avaliação do estado mental: humor, afeto, hipervigilância, sobressalto | Observar cicatriz (confirma o trauma físico) | Sinais vitais: FC levemente elevada (hiperatividade autonômica)',
    expectedExams: [
      { exam: 'Nenhum exame laboratorial urgente', justify: 'Diagnóstico clínico; rastrear complicações do álcool se uso aumentar', expected: '—' }
    ],
    expectedConduct: 'Psicoterapia (1ª linha): TCC focada no trauma (TCC-T), Terapia de Exposição Prolongada (TEP) ou EMDR (Eye Movement Desensitization and Reprocessing). (ABP — Diretrizes TEPT, 2022; NICE 2018/2023) | Farmacológica: ISRS de 1ª linha: Sertralina 50–200 mg/dia ou Paroxetina 20–60 mg/dia. Prazosina 1–15 mg/noite para pesadelos refratários. (RENAME 2023; ABP 2022) | Abordar o álcool: Explicar que o álcool piora o TEPT a longo prazo; orientar redução gradual; encaminhar ao CAPS AD se dependência estabelecida. | Retorno ao trabalho: Gradual, com suporte da psicoterapia (exposição gradual e hierárquica). | Encaminhamento: Psicólogo com experiência em trauma para TCC-T ou EMDR. | Seguimento: Retorno em 2 semanas.',
    expectedCommunication: 'Sobre o tratamento: "Você não precisa reviver o evento em detalhes agora. O tratamento mais eficaz trabalha com a memória do trauma de forma gradual e controlada." | Sobre o prognóstico: "O TEPT tem tratamento eficaz. A maioria das pessoas com tratamento adequado consegue retornar às atividades que amavam."',
    criticalErrors: [
      'Forçar o relato detalhado do evento traumático na primeira consulta',
      'Não investigar os 4 clusters do TEPT (aceitar apenas a queixa superficial de "medo de animais")',
      'Não avaliar risco de suicídio',
      'Não investigar uso de álcool como fator de manutenção do TEPT',
      'Não indicar psicoterapia focada no trauma como tratamento de 1ª linha'
    ]
  },
  instD: {
    title: 'CHECKLIST — VETERINÁRIA QUE REVIVE O ACIDENTE E NÃO CONSEGUE ENTRAR NO CANIL',
    sections: [
      {
        h: 'COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE',
        items: [
          { item: 'Não forçou o relato detalhado do evento traumático', score: 0.5, ref: 'ABP — Diretrizes TEPT, 2022' },
          { item: 'Explicou que o tratamento não exige reviver o trauma em detalhes na primeira consulta', score: 0.5, ref: 'ABP — Diretrizes TEPT, 2022' },
          { item: 'Acolheu o impacto do trauma na identidade profissional da paciente', score: 0.5, ref: 'MS — Política Nacional de Humanização, 2013' }
        ]
      },
      {
        h: 'ANAMNESE',
        items: [
          { item: 'Investigou revivência (pesadelos, flashbacks sensoriais)', score: 0.5, ref: 'DSM-5; ABP — Diretrizes TEPT, 2022' },
          { item: 'Investigou evitação (locais, estímulos, tentativas frustradas de retorno)', score: 0.5, ref: 'DSM-5; ABP — Diretrizes TEPT, 2022' },
          { item: 'Investigou hiperexcitabilidade (sobressalto, hipervigilância, insônia)', score: 0.5, ref: 'DSM-5; ABP — Diretrizes TEPT, 2022' },
          { item: 'Pesquisou uso de álcool como automedicação', score: 0.5, ref: 'ABP — Diretrizes TEPT, 2022' },
          { item: 'Avaliou risco de suicídio', score: 0.5, ref: 'MS — PCDT Prevenção do Suicídio, 2022' }
        ]
      },
      {
        h: 'EXAME FÍSICO',
        items: [
          { item: 'Observou e registrou a cicatriz (confirmação do trauma físico)', score: 0.3, ref: 'Semiologia Médica — FMUSP' },
          { item: 'Avaliou estado mental: hipervigilância, sobressalto, humor', score: 0.5, ref: 'ABP — Diretrizes TEPT, 2022' }
        ]
      },
      {
        h: 'RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
        items: [
          { item: 'Identificou e nomeou os 4 clusters do TEPT', score: 1.0, ref: 'DSM-5; ABP — Diretrizes TEPT, 2022' },
          { item: 'Diferenciou TEPT de fobia específica e transtorno de ajustamento', score: 0.5, ref: 'DSM-5' }
        ]
      },
      {
        h: 'CONDUTA E ORIENTAÇÃO AO PACIENTE',
        items: [
          { item: 'Indicou psicoterapia focada no trauma (TCC-T, EMDR ou TEP) como 1ª linha', score: 1.0, ref: 'ABP — Diretrizes TEPT, 2022' },
          { item: 'Prescreveu ISRS como suporte farmacológico', score: 0.5, ref: 'RENAME 2023; ABP — Diretrizes TEPT, 2022' },
          { item: 'Abordou o uso de álcool e orientou sobre redução', score: 0.5, ref: 'ABP — Diretrizes TEPT, 2022' },
          { item: 'Estabeleceu plano de retorno gradual ao trabalho com apoio psicoterápico', score: 0.3, ref: 'ABP — Diretrizes TEPT, 2022' }
        ]
      }
    ]
  }
},

{
  id: 17,
  title: "Diabético que ficou 'nervoso e perturbado' depois de descobrir que vai amputar o pé",
  sub: 'Enfermaria de Endocrinologia — Hospital Geral',
  tema: 'Psiquiatria',
  topic: 'Transtorno de ansiedade devido a outra condição médica',
  level: 'moderado',
  cardAccent: '#00695C',
  instA: {
    scenario: 'Enfermaria de Endocrinologia — Hospital Geral. 3º dia de internação. Turno da tarde. A equipe de endocrinologia solicitou avaliação psiquiátrica porque o paciente está com ansiedade intensa, palpitações e recusa assinar o termo de consentimento para amputação do 1º pododáctilo direito.',
    patient: 'G.P., 58 anos, masculino, agricultor aposentado, casado, três filhos. Internado por pé diabético com gangrena do 1º dedo direito. DM2 há 15 anos, HAS, IRC leve.',
    complaint: "Paciente refere palpitações, sudorese, insônia e 'perturbação na cabeça' desde que soube da cirurgia. Diz estar com medo de 'nunca mais andar direito' e de 'virar inválido'.",
    tasks: [
      'Realize a anamnese investigando os sintomas de ansiedade e sua relação com o diagnóstico de pé diabético.',
      'Afaste causas orgânicas dos sintomas ansiosos (hipoglicemia, distúrbios metabólicos, medicamentos).',
      'Avalie o risco de suicídio e a capacidade de tomada de decisão do paciente.',
      'Formule a hipótese diagnóstica e proponha a conduta.',
      'Comunique ao paciente e à equipe de forma empática e coordenada.'
    ]
  },
  instB: {
    vitals: {
      PA: '146/92 mmHg',
      FC: '104 bpm',
      FR: '20 irpm',
      Tax: '37,2°C',
      Peso: '82 kg',
      Altura: '1,68 m',
      IMC: '29,0 kg/m²'
    },
    physicalGeneral: 'Paciente em regular estado geral, ansioso, agitado. Pé direito com curativo oclusivo no 1º dedo (gangrena). Lúcido, orientado, discurso coerente. Mãos úmidas (sudorese). Sem sinais de intoxicação ou rebaixamento de consciência.',
    physicalSeg: 'Neurológico: Lúcido e orientado. Capacidade de compreender e expressar decisão presente. Sem déficits focais. | Cardiovascular: Taquicardia sinusal. Sem sopros. Sem turgência jugular. | Endócrino: Sem sinais de hipertireoidismo (sem tremor, sem exoftalmia, tireoide não aumentada).',
    labs: [
      { test: 'Glicemia capilar (última)', val: '182 mg/dL', ref: '70–140 mg/dL', alt: true },
      { test: 'Sódio', val: '138 mEq/L', ref: '135–145 mEq/L', alt: false },
      { test: 'Potássio', val: '4,1 mEq/L', ref: '3,5–5,0 mEq/L', alt: false },
      { test: 'TSH', val: '2,2 mUI/L', ref: '0,4–4,0 mUI/L', alt: false },
      { test: 'Creatinina', val: '1,4 mg/dL', ref: '0,7–1,2 mg/dL', alt: true },
      { test: 'ECG', val: 'Taquicardia sinusal 104 bpm, sem alterações de repolarização', ref: 'Normal', alt: false }
    ],
    image: null,
    note: 'Sinais vitais e exames disponíveis mediante solicitação. ECG entregue se solicitado. O candidato deve ser avaliado especialmente pela habilidade de diferenciar o transtorno de ansiedade devido à condição médica de TAG primário ou transtorno de ajustamento, e pela avaliação da capacidade de tomada de decisão (capacidade decisória — o paciente recusa o procedimento cirúrgico necessário).',
    patientProfile: 'G.P., 58 anos, masculino, agricultor aposentado. Casado há 30 anos. Três filhos adultos. DM2 há 15 anos, HAS há 10 anos. IRC leve. Baixa adesão ao tratamento. Natural de interior do Ceará.',
    script: [
      { trigger: 'Abertura', speech: 'Doutor, eu não consigo dormir, o coração dispara, fico com a cabeça perturbada desde que me falaram que vão cortar meu dedo. Minha cabeça não para.' },
      { trigger: 'Sobre o medo da cirurgia', speech: 'Tenho medo que corte hoje o dedo, amanhã o pé, depois a perna. Vi isso acontecer com meu irmão. Ele ficou na cama até morrer.' },
      { trigger: 'Sobre as palpitações', speech: 'O coração fica acelerado o tempo todo. Fico suando mesmo com o ar condicionado. Não consigo comer.' },
      { trigger: 'Sobre a recusa cirúrgica', speech: 'Não assinei porque tenho medo. Não é que não quero me cuidar. É que aquilo me dá um desespero que não consigo controlar.' },
      { trigger: 'Sobre a capacidade de decidir', speech: 'Eu entendo o que os médicos falam. Sei que é grave. Mas o medo trava tudo.' },
      { trigger: 'Sobre suicídio', speech: 'Não tenho esse pensamento não. Quero ver meus filhos crescerem, ver meus netos.' },
      { trigger: 'Pergunta ativa', speech: 'Esse negócio que tô sentindo é loucura? Vou ficar com problema de cabeça por causa do diabetes?' },
      { trigger: 'Pergunta ativa', speech: 'Tem remédio pra acalmar que não faça mal pro meu rim?' }
    ],
    hiddenInfo: 'Irmão faleceu após amputação de membro inferior por DM — esse é o fator precipitante central do medo; revelar apenas se perguntado sobre experiência prévia com diabetes na família. | Nunca teve episódio de ansiedade antes do adoecimento — confirma que os sintomas são secundários à condição médica; revelar se perguntado sobre histórico psiquiátrico prévio.',
    actorBehavior: 'Ansioso, agitado, mas colaborativo e capaz de raciocinar. Demonstra medo genuíno e concreto (experiência com o irmão). Capacidade decisória preservada — entende a situação mas está emocionalmente paralisado. Alivia quando o candidato valida o medo e oferece suporte para a tomada de decisão.'
  },
  instC: {
    diagnosis: 'Transtorno de ansiedade devido à condição médica (pé diabético com indicação de amputação parcial), com sintomas de ansiedade clinicamente significativos que excedem a resposta adaptativa esperada e comprometem a tomada de decisão cirúrgica. Capacidade decisória preservada. CID-11: 6E62 / DSM-5: F06.4.',
    differentials: [
      'Transtorno de ajustamento com ansiedade — resposta ansiosa proporcional ao estressor clínico; a distinção do transtorno de ansiedade devido à condição médica está na intensidade e no papel direto da condição médica na gênese dos sintomas (taquicardia, sudorese, palpitações ligadas diretamente ao DM e à cirurgia).',
      'TAG primário — preocupações em múltiplas áreas sem relação com condição médica específica; excluído pela ausência de antecedentes de ansiedade e pelo início claramente relacionado ao diagnóstico.',
      'Hipertireoidismo — pode causar palpitações e ansiedade; TSH normal afasta.',
      'Hipoglicemia — causa sintomas adrenérgicos; glicemia 182 mg/dL afasta.'
    ],
    context: 'Homem de 58 anos com DM2 de longa data, internado por pé diabético com gangrena, apresenta ansiedade intensa (palpitações, insônia, sudorese, agitação) após comunicação da necessidade de amputação, precipitada pelo trauma vicário da morte do irmão após amputação. Causa orgânica afastada. Capacidade decisória preservada — compreende a situação mas está emocionalmente comprometido para assinar o consentimento.',
    justify: 'Sintomas de ansiedade (palpitações, taquicardia, insônia, sudorese) diretamente relacionados ao diagnóstico de pé diabético e à comunicação da indicação cirúrgica. Sem antecedente de transtorno de ansiedade. Causas orgânicas (hipoglicemia, hipertireoidismo, distúrbios metabólicos) afastadas. Trauma vicário (irmão com amputação fatal) como fator precipitante. Capacidade decisória preservada (entende a situação, identifica opções, comunica escolha).',
    expectedAnamnesis: 'Investigar início e evolução dos sintomas ansiosos em relação ao diagnóstico | Pesquisar palpitações, insônia, sudorese, agitação | Investigar experiências prévias com diabetes na família (irmão) | Avaliar antecedentes de ansiedade ou transtornos mentais | Pesquisar medicamentos em uso (corticoides, broncodilatadores, descongestionantes podem causar ansiedade) | Avaliar capacidade decisória para o procedimento cirúrgico | Avaliar risco de suicídio | Investigar suporte familiar disponível',
    expectedPhysical: 'Sinais vitais: taquicardia (componente autonômico da ansiedade) | Avaliação tireoidiana: excluir hipertireoidismo | Avaliação neurológica: capacidade cognitiva para tomada de decisão | ECG: afastar arritmia como causa de palpitações',
    expectedExams: [
      { exam: 'Glicemia capilar', justify: 'Afastar hipoglicemia como causa de ansiedade', expected: '182 mg/dL (hiperglicemia — não hipoglicemia)' },
      { exam: 'TSH', justify: 'Afastar hipertireoidismo', expected: 'Normal' },
      { exam: 'ECG', justify: 'Afastar arritmia como causa de palpitações', expected: 'Taquicardia sinusal' },
      { exam: 'Eletrólitos', justify: 'Afastar distúrbios eletrolíticos em IRC leve', expected: 'Normais' }
    ],
    expectedConduct: 'Intervenção psicológica de suporte imediata: Técnicas de relaxamento (respiração diafragmática, orientação à realidade), psicoeducação sobre a ansiedade e o procedimento cirúrgico. Apoio para tomada de decisão informada. | Farmacológica: Benzodiazepínico de curta duração para manejo da ansiedade aguda pré-cirúrgica (avaliar com cautela em IRC leve): Lorazepam 0,5–1 mg VO (metabolismo não hepático — mais seguro em IRC) OU Oxazepam 10 mg VO. Dose única ou por período muito curto. (RENAME 2023 — avaliar clearance de creatinina antes) | Alternativa não benzodiazepínica: Hidroxizina 25 mg VO (antihistamínico com propriedade ansiolítica — seguro em IRC leve, sem dependência). (RENAME 2023) | Comunicação com a equipe cirúrgica: Informar sobre o contexto do medo (irmão), sugerir conversa adicional do cirurgião com o paciente. Informar que a capacidade decisória está preservada — não há indicação de internação compulsória. | Suporte familiar: Incluir a esposa na conversa sobre a cirurgia. | Seguimento: Avaliação pós-cirúrgica. Encaminhar ao ambulatório de saúde mental para acompanhamento.',
    expectedCommunication: 'Validar o medo: "Seu medo faz todo o sentido. Você viu seu irmão passar por algo muito difícil. É natural que isso afete como você está sentindo agora." | Distinguir a situação: "O caso do seu irmão foi diferente do seu. Vamos conversar sobre isso para que você possa tomar sua decisão com mais clareza." | Capacidade decisória: Nunca questionar a capacidade do paciente publicamente sem avaliação formal.',
    criticalErrors: [
      'Não avaliar glicemia capilar como causa orgânica dos sintomas ansiosos em diabético',
      'Questionar publicamente a capacidade decisória do paciente sem avaliação formal',
      'Prescrever benzodiazepínico sem considerar a IRC (ajuste de dose necessário)',
      'Não investigar a experiência com o irmão (fator precipitante central)',
      'Não comunicar achados à equipe cirúrgica de forma colaborativa'
    ]
  },
  instD: {
    title: 'CHECKLIST — DIABÉTICO ANSIOSO QUE RECUSA ASSINAR CONSENTIMENTO PARA AMPUTAÇÃO',
    sections: [
      {
        h: 'COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE',
        items: [
          { item: 'Validou o medo do paciente sem minimizar', score: 0.5, ref: 'MS — Política Nacional de Humanização, 2013' },
          { item: 'Distinguiu a situação atual da experiência com o irmão', score: 0.5, ref: 'MS — Política Nacional de Humanização, 2013' },
          { item: 'Comunicou achados à equipe cirúrgica de forma colaborativa', score: 0.5, ref: 'CFM nº 1.931/2009' }
        ]
      },
      {
        h: 'ANAMNESE',
        items: [
          { item: 'Investigou início dos sintomas em relação ao diagnóstico (sem antecedente prévio)', score: 0.5, ref: 'DSM-5; MS — Linha de Cuidado Saúde Mental, 2022' },
          { item: 'Pesquisou experiência familiar com diabetes/amputação (irmão)', score: 1.0, ref: 'MS — Política Nacional de Humanização, 2013' },
          { item: 'Avaliou capacidade decisória para o procedimento cirúrgico', score: 0.5, ref: 'CFM — Capacidade decisória, 2009' },
          { item: 'Avaliou risco de suicídio', score: 0.5, ref: 'MS — PCDT Prevenção do Suicídio, 2022' }
        ]
      },
      {
        h: 'EXAME FÍSICO',
        items: [
          { item: 'Avaliou sinais vitais (taquicardia)', score: 0.3, ref: 'Semiologia Médica — FMUSP' },
          { item: 'Avaliou função cognitiva e capacidade decisória', score: 0.5, ref: 'CFM — Capacidade decisória' }
        ]
      },
      {
        h: 'RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
        items: [
          { item: 'Solicitou glicemia capilar para afastar hipoglicemia', score: 0.5, ref: 'MS — Linha de Cuidado DM, 2022' },
          { item: 'Solicitou TSH e ECG para afastar causas orgânicas', score: 0.5, ref: 'DSM-5; MS 2022' },
          { item: 'Formulou diagnóstico de transtorno de ansiedade devido à condição médica', score: 1.0, ref: 'DSM-5 F06.4' }
        ]
      },
      {
        h: 'CONDUTA E ORIENTAÇÃO AO PACIENTE',
        items: [
          { item: 'Prescreveu ansiolítico adequado considerando a IRC (lorazepam ou hidroxizina)', score: 1.0, ref: 'RENAME 2023' },
          { item: 'Aplicou técnica de relaxamento ou respiração diafragmática na consulta', score: 0.5, ref: 'MS — Linha de Cuidado Saúde Mental, 2022' },
          { item: 'Incluiu esposa/familiar no suporte para tomada de decisão', score: 0.5, ref: 'MS — Política Nacional de Humanização, 2013' }
        ]
      }
    ]
  }
},

{
  id: 18,
  title: "Estudante que ficou 'perturbado e acelerado' depois de usar energético com suplemento termogênico",
  sub: 'UPA — Demanda espontânea',
  tema: 'Psiquiatria',
  topic: 'Transtorno de ansiedade induzido por substância',
  level: 'moderado',
  cardAccent: '#E65100',
  instA: {
    scenario: 'UPA 24h. Sala de triagem, turno noturno. Paciente chegou por conta própria muito agitado e com coração acelerado.',
    patient: 'T.R., 22 anos, masculino, estudante de educação física, solteiro. Sem comorbidades conhecidas.',
    complaint: "Paciente relata que há 2 horas tomou 3 latas de energético e um suplemento termogênico (com efedrina) antes de treinar e está com 'coração saindo pela boca', tremor, sudorese e sensação de que vai morrer.",
    tasks: [
      'Realize a anamnese investigando as substâncias ingeridas, quantidade e tempo de uso.',
      'Avalie e exclua causas orgânicas primárias (cardíacas, tireoidiana, hipoglicemia).',
      'Formule a hipótese diagnóstica principal e os diferenciais.',
      'Proponha a conduta terapêutica adequada.',
      'Oriente o paciente sobre os riscos das substâncias utilizadas.'
    ]
  },
  instB: {
    vitals: {
      PA: '168/102 mmHg',
      FC: '136 bpm',
      FR: '22 irpm',
      Tax: '37,4°C',
      Peso: '82 kg',
      Altura: '1,80 m',
      IMC: '25,3 kg/m²'
    },
    physicalGeneral: 'Paciente em regular estado geral, ansioso, sudoreico, tremor fino de mãos. Pele quente. Lúcido e orientado. Midríase bilateral (5 mm). Sem hálito etílico. Sem sinais de trauma.',
    physicalSeg: 'Cardiovascular: Taquicardia intensa (136 bpm). BRNF sem sopros. | Neurológico: Lúcido, tremor fino, hiperreflexia. Sem déficits focais. | Psíquico: Ansiedade intensa, medo de morrer. Sem alucinações. Sem desorganização do pensamento.',
    labs: [
      { test: 'ECG', val: 'Taquicardia sinusal FC 134 bpm, PR e QT normais, sem supradesnivelamento', ref: 'Normal', alt: false },
      { test: 'Glicemia capilar', val: '108 mg/dL', ref: '70–140 mg/dL', alt: false },
      { test: 'TSH', val: '1,8 mUI/L', ref: '0,4–4,0 mUI/L', alt: false },
      { test: 'Toxicológico urinário', val: 'Positivo para efedrina/anfetamínicos', ref: 'Negativo', alt: true },
      { test: 'Troponina I', val: '0,02 ng/mL', ref: '<0,04 ng/mL', alt: false }
    ],
    image: null,
    note: 'Sinais vitais e ECG entregues ao início. Demais exames conforme solicitação. O candidato deve ser avaliado especialmente pela distinção entre transtorno de ansiedade induzido por substância e TAG primário ou transtorno do pânico, e pela orientação sobre risco do uso de termogênicos com efedrina.',
    patientProfile: 'T.R., 22 anos, masculino, estudante de educação física, pratica musculação diariamente. Usa suplementos há 6 meses. Comprou o termogênico em loja de suplementos sem orientação médica.',
    script: [
      { trigger: 'Abertura', speech: 'Doutor, eu tô passando muito mal. Coração acelerado demais, tremendo, suando. Achei que ia ter um infarto.' },
      { trigger: 'Sobre o que tomou', speech: 'Tomei três RedBulls e um termogênico antes do treino. Sempre faço isso, mas hoje tomei mais que o normal.' },
      { trigger: 'Sobre o suplemento', speech: 'É um termogênico que comprei na loja de suplemento. Diz na embalagem que tem efedrina, cafeína, guaraná. Tomei dose dupla pra ter mais energia.' },
      { trigger: 'Sobre crises anteriores', speech: 'Nunca tive isso antes. Só hoje, depois do suplemento.' },
      { trigger: 'Sobre uso de drogas', speech: 'Não uso nada ilegal. Só o suplemento.' },
      { trigger: 'Pergunta ativa', speech: 'É o coração? Vou ficar com sequela?' },
      { trigger: 'Pergunta ativa', speech: 'Posso continuar usando o termogênico se tomar menos?' }
    ],
    hiddenInfo: 'Tomou dose dupla do termogênico (acima da recomendação da embalagem) — revelar apenas se perguntado especificamente sobre a dose utilizada. | Não consultou médico antes de iniciar suplementação — revelar se perguntado sobre orientação prévia.',
    actorBehavior: 'Muito agitado e assustado no início. Alivia progressivamente com a abordagem calma e com a confirmação de que o coração está sem alterações estruturais. Fica envergonhado quando percebe que a causa é o suplemento.'
  },
  instC: {
    diagnosis: 'Transtorno de ansiedade induzido por substância (efedrina + cafeína em dose excessiva — síndrome simpatomimética). Hipertensão e taquicardia por toxicidade de estimulantes do SNC. CID-11: 6C4H.20 / DSM-5: F15.180.',
    differentials: [
      'Transtorno do pânico — crise de ansiedade intensa com taquicardia e medo de morrer; distingue-se pela causa clara (substância simpatomimética, sem crises prévias espontâneas), toxicológico positivo e resolução esperada com eliminação da substância.',
      'Síndrome coronariana aguda — HAS + taquicardia + medo de morrer podem simular; troponina normal e ECG sem supradesnivelamento afastam em jovem sem fatores de risco.',
      'Hipertireoidismo — pode causar taquicardia e ansiedade; TSH normal afasta.',
      'Feocromocitoma — síndrome simpatomimética clássica; no entanto, contexto de uso de estimulante é causa mais provável; investigar se persistir após eliminação da substância.'
    ],
    context: 'Jovem de 22 anos, sem comorbidades, com síndrome simpatomimética aguda por ingestão excessiva de efedrina + cafeína (dose dupla de termogênico + 3 energéticos). Taquicardia 136 bpm, HAS 168/102, midríase, tremor, sudorese. Toxicológico positivo para efedrina. ECG e troponina normais. Sem antecedente de transtorno de ansiedade.',
    justify: 'Síntese simpatomimética por ingestão de estimulantes do SNC (efedrina, cafeína em excesso) confirmada por toxicológico positivo, história clínica e resolução esperada com suporte. A ausência de antecedentes psiquiátricos e o início imediatamente após a ingestão indicam causa por substância, não TAG ou transtorno do pânico primário.',
    expectedAnamnesis: 'Investigar substâncias ingeridas: tipo, quantidade, tempo de ingestão | Pesquisar uso de outros estimulantes, drogas ilícitas, medicamentos | Investigar crises prévias de ansiedade (sem uso de substância) | Pesquisar doenças cardíacas ou tireoidianas prévias | Avaliar uso regular de suplementos e orientação médica',
    expectedPhysical: 'Sinais vitais: HAS e taquicardia intensas | Pupilas: midríase (síndrome simpatomimética) | Cardiovascular: ausculta, pulsos | Neurológico: tremor, hiperreflexia',
    expectedExams: [
      { exam: 'ECG', justify: 'Afastar arritmia e SCA', expected: 'Normal, taquicardia sinusal' },
      { exam: 'Troponina', justify: 'Afastar lesão miocárdica', expected: 'Normal' },
      { exam: 'Glicemia capilar', justify: 'Afastar hipoglicemia', expected: 'Normal' },
      { exam: 'Toxicológico urinário', justify: 'Confirmar efedrina/estimulantes', expected: 'Positivo' },
      { exam: 'TSH', justify: 'Afastar hipertireoidismo', expected: 'Normal' }
    ],
    expectedConduct: 'Suporte: Monitorização contínua (FC, PA, SatO2, ECG). | Observação até resolução: Metabolização da efedrina (meia-vida ~6 horas). | HAS sintomática: Se PA ≥180/110 ou sintomática: nitroprussiato de sódio ou labetalol IV. Neste caso PA 168/102 — observação e monitorização com meta de melhora espontânea com metabolização do estimulante. | Taquicardia: Evitar beta-bloqueador isolado em taquicardia por estimulante sem alfa-bloqueio (risco de hipertensão paradoxal por atividade alfa não antagonizada). Benzodiazepínico (diazepam 5–10 mg VO) reduz ansiedade e componente adrenérgico. | Orientação obrigatória: Contraindicar o uso de efedrina e termogênicos com estimulantes sem orientação médica. Explicar o risco de arritmia, AVC e morte súbita com dose excessiva. | Alta: Após normalização dos sinais vitais e FC, com orientações por escrito.',
    expectedCommunication: 'Sobre o diagnóstico: "O seu coração não tem problema — o que está acontecendo é uma reação ao estimulante que você tomou em dose muito alta." | Sobre o suplemento: "Efedrina é uma substância com ação similar à adrenalina. Em excesso, pode causar arritmia grave e até morte súbita."',
    criticalErrors: [
      'Não solicitar ECG em paciente com taquicardia e HAS por estimulante',
      'Administrar beta-bloqueador isolado em taquicardia por estimulante simpatomimético sem alfa-bloqueio',
      'Não orientar sobre a contraindicação do uso de termogênicos com efedrina',
      'Diagnosticar transtorno do pânico primário sem investigar a causa por substância',
      'Dispensar o paciente sem observação até normalização dos sinais vitais'
    ]
  },
  instD: {
    title: 'CHECKLIST — ESTUDANTE AGITADO APÓS USO DE ENERGÉTICO COM TERMOGÊNICO',
    sections: [
      {
        h: 'COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE',
        items: [
          { item: 'Reassegurou sobre o coração sem minimizar a gravidade da situação', score: 0.5, ref: 'MS — Política Nacional de Humanização, 2013' },
          { item: 'Explicou o risco do uso de termogênicos com efedrina em linguagem acessível', score: 0.5, ref: 'ANVISA — Regulamentação de suplementos, 2023' }
        ]
      },
      {
        h: 'ANAMNESE',
        items: [
          { item: 'Investigou todas as substâncias ingeridas (tipo, quantidade, tempo)', score: 1.0, ref: 'DSM-5; MS — Linha de Cuidado Álcool/Drogas, 2022' },
          { item: 'Pesquisou crises prévias de ansiedade sem uso de substância', score: 0.5, ref: 'DSM-5 F15.180' },
          { item: 'Investigou uso de drogas ilícitas concomitantes', score: 0.5, ref: 'MS — Linha de Cuidado Álcool/Drogas, 2022' }
        ]
      },
      {
        h: 'EXAME FÍSICO',
        items: [
          { item: 'Avaliou sinais vitais com atenção à FC e PA', score: 0.5, ref: 'Semiologia Médica — FMUSP' },
          { item: 'Avaliou pupilas (midríase = simpatomimético)', score: 0.5, ref: 'Toxicologia Clínica — FMUSP' }
        ]
      },
      {
        h: 'RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
        items: [
          { item: 'Solicitou ECG e troponina para afastar SCA', score: 1.0, ref: 'SBC — Diretriz Emergência Cardiovascular, 2021' },
          { item: 'Solicitou toxicológico para confirmar substância', score: 0.5, ref: 'DSM-5; MS — Linha de Cuidado, 2022' },
          { item: 'Formulou hipótese de transtorno de ansiedade induzido por substância', score: 1.0, ref: 'DSM-5 F15.180' }
        ]
      },
      {
        h: 'CONDUTA E ORIENTAÇÃO AO PACIENTE',
        items: [
          { item: 'Indicou monitorização contínua até resolução', score: 0.5, ref: 'SBC — Diretriz Emergência, 2021' },
          { item: 'Não usou beta-bloqueador isolado em taquicardia por estimulante', score: 1.0, ref: 'SBC — Diretriz Emergência, 2021' },
          { item: 'Orientou contraindicação definitiva ao termogênico com efedrina', score: 0.5, ref: 'ANVISA — Resolução suplementos, 2023' }
        ]
      }
    ]
  }
},

{
  id: 19,
  title: "Jovem de 26 anos 'diferente desde sempre' que busca diagnóstico depois de ver vídeo sobre autismo",
  sub: 'Ambulatório de Psiquiatria — Policlínica',
  tema: 'Psiquiatria',
  topic: 'Transtorno do Espectro Autista — diagnóstico tardio em adulto',
  level: 'moderado',
  cardAccent: '#1565C0',
  instA: {
    scenario: 'Ambulatório de Psiquiatria — Policlínica Municipal. Primeira consulta, turno da manhã. Paciente veio por conta própria com um caderno de anotações.',
    patient: 'H.L., 26 anos, masculino, programador de sistemas (trabalho remoto), solteiro, mora sozinho.',
    complaint: "Paciente relata que após assistir a um documentário sobre autismo reconheceu em si mesmo as características descritas. Traz lista de dificuldades que tem 'desde sempre': dificuldade de olho no olho, não entender 'subentendidos', precisar de rotinas fixas e interesse intenso e exclusivo em programação e trens.",
    tasks: [
      'Realize a anamnese do neurodesenvolvimento investigando os dois domínios do TEA: comunicação social e comportamentos repetitivos/restritos.',
      'Investigue o histórico desde a infância: linguagem, relacionamentos, escola, rotinas.',
      'Avalie comorbidades (ansiedade, depressão, TDAH) e diagnósticos diferenciais.',
      'Explique ao paciente o processo diagnóstico do TEA em adultos e o que ele pode esperar.',
      'Proponha os próximos passos do plano diagnóstico e terapêutico.'
    ]
  },
  instB: {
    vitals: {
      PA: '118/76 mmHg',
      FC: '78 bpm',
      FR: '16 irpm',
      Tax: '36,5°C',
      Peso: '72 kg',
      Altura: '1,75 m',
      IMC: '23,5 kg/m²'
    },
    physicalGeneral: 'Paciente em bom estado geral, lúcido e orientado. Contato visual reduzido e intermitente. Fala com velocidade e entonação levemente monotônicas. Traz caderno com lista de sintomas anotados. Bem arrumado, roupa funcional (mesma combinação de cores). Sem sinais de intoxicação ou déficit neurológico.',
    physicalSeg: 'Estado mental: Aparência cuidada mas levemente incomum (roupa idêntica à semana anterior, segundo ele); contato visual reduzido mas não ausente; fala precisa e literal; interesse restrito proeminente (desvia o assunto para trens com frequência); sem estereotipias motoras visíveis no consultório; orientado; memória excelente para fatos concretos; cognição preservada; sem alucinações nem delírios. | Neurológico: Sem déficits focais.',
    labs: [],
    image: null,
    note: 'Nenhum exame laboratorial necessário. O candidato deve ser avaliado especialmente pela habilidade de realizar anamnese do neurodesenvolvimento (desde a infância), pela explicação honesta do processo diagnóstico do TEA em adultos (que requer avaliação multidisciplinar e instrumentos padronizados — não é diagnóstico de consulta única), e por não diagnosticar nem excluir o TEA precipitadamente.',
    patientProfile: 'H.L., 26 anos, masculino, programador. Filho único. Pais divorciados desde os 8 anos. Escola regular com dificuldades de relacionamento com colegas. Nunca teve namorado/a. Amigos são colegas de trabalho remoto — relacionamento por texto. Interesse intenso e exclusivo em trens e programação desde os 7 anos.',
    script: [
      { trigger: 'Abertura', speech: 'Trouxe uma lista do que identifiquei em mim. Posso ler? (abre o caderno) Dificuldade de contato visual, não entendo ironia, preciso de rotina, fico sobrecarregado em lugares barulhentos, tenho interesse intenso em trens e programação desde os 7 anos.' },
      { trigger: 'Sobre a infância', speech: 'Na escola tinha dificuldade de fazer amigos. As crianças diziam que eu era estranho. Falava sobre trens quando ninguém perguntava.' },
      { trigger: 'Sobre relacionamentos', speech: 'Nunca tive namorado. Não entendo os sinais que as pessoas dão. Uma vez uma colega ficou insinuando que gostava de mim e eu não percebi até ela falar direto.' },
      { trigger: 'Sobre o trabalho', speech: 'No trabalho remoto vou muito bem. Por e-mail e texto consigo me comunicar perfeitamente. Em reunião por vídeo é mais difícil.' },
      { trigger: 'Sobre rotinas', speech: 'Faço as mesmas refeições nos mesmos horários. Se alguém muda a minha rotina sem avisar fico muito angustiado.' },
      { trigger: 'Sobre sensibilidade sensorial', speech: 'Não suporto barulho de mastiguação. Roupas com etiqueta me incomodam tanto que recorto todas.' },
      { trigger: 'Pergunta ativa', speech: 'Você acha que eu tenho autismo? Quero saber de verdade, não uma resposta educada.' },
      { trigger: 'Pergunta ativa', speech: 'Se eu tiver autismo, tem tratamento? Posso melhorar?' }
    ],
    hiddenInfo: 'Faz camuflagem social (masking) — aprende scripts de conversação de forma deliberada para parecer neurotípico — revelar apenas se perguntado sobre como lida com situações sociais no trabalho ou na vida adulta. | Apresenta ansiedade social significativa que ele interpreta como "não gostar de pessoas" — revelar se perguntado sobre humor e ansiedade.',
    actorBehavior: 'Contato visual reduzido mas não ausente. Fala precisa, literal e levemente monótona. Desvia ocasionalmente para falar de trens quando há silêncio. Aprecia quando o candidato faz perguntas diretas e objetivas — responde melhor a perguntas fechadas do que a abertas amplas. Demonstra ansiedade quando não sabe o que esperar do processo.'
  },
  instC: {
    diagnosis: 'Suspeita clínica de Transtorno do Espectro Autista (TEA) — diagnóstico tardio em adulto. Diagnóstico definitivo requer avaliação multidisciplinar com instrumentos padronizados (ADOS-2, ADI-R, RAADS-R). Possível comorbidade: transtorno de ansiedade social. CID-11: 6A02 / DSM-5: F84.0 (a confirmar).',
    differentials: [
      'Transtorno de personalidade esquizoide — isolamento social, indiferença afetiva; distingue-se do TEA pela ausência de déficits na comunicação social recíproca, comportamentos repetitivos e interesses restritos desde a infância.',
      'Transtorno de ansiedade social — dificuldade nas interações sociais por medo de julgamento; no TEA as dificuldades são de natureza qualitativa (não entende os sinais sociais), não primariamente por medo.',
      'TDAH — pode coexistir com TEA; investigar desatenção, impulsividade e hiperatividade desde a infância.',
      'Transtorno de personalidade obsessivo-compulsiva — rigidez, interesses restritos; no TPOC são egossintônicos e sem os déficits de comunicação social do TEA.'
    ],
    context: 'Homem de 26 anos com história desde a infância de dificuldades persistentes na comunicação social (contato visual reduzido, não compreende ironias/subentendidos, dificuldade de relacionamentos), comportamentos repetitivos e interesses restritos (trens e programação desde os 7 anos, rotinas inflexíveis, sensibilidade sensorial). Funcionamento preservado em contexto estruturado (trabalho remoto por texto).',
    justify: 'Presença dos dois domínios principais do DSM-5 para TEA desde a infância: (A) déficits na comunicação social recíproca em múltiplos contextos (contato visual, não compreende sinais implícitos, dificuldade de relacionamentos, comunicação literal) e (B) padrões restritos e repetitivos de comportamento (rotinas inflexíveis com angústia à mudança, interesse restrito intenso em trens/programação, sensibilidade sensorial). Diagnóstico definitivo requer instrumentos padronizados e avaliação multidisciplinar.',
    expectedAnamnesis: 'Investigar desenvolvimento infantil: linguagem, marco motor, interação social precoce | Pesquisar relacionamentos na infância e adolescência | Investigar desempenho escolar e universitário | Pesquisar interesses restritos: início, intensidade, exclusividade | Investigar rotinas e rigidez: reação a mudanças | Pesquisar sensibilidade sensorial (tátil, auditiva, olfativa, gustativa) | Investigar comunicação: compreensão de ironia, sarcasmo, subentendidos | Pesquisar camuflagem social (masking) | Avaliar comorbidades: ansiedade, depressão, TDAH | Investigar diagnósticos prévios',
    expectedPhysical: 'Avaliação do estado mental: contato visual, entonação vocal, literalidade do discurso, interesse restrito durante a consulta | Ausência de déficits neurológicos',
    expectedExams: [
      { exam: 'RAADS-R (Ritvo Autism Asperger Diagnostic Scale)', justify: 'Rastreio de TEA em adultos — aplicação por profissional capacitado', expected: 'Resultado a confirmar em avaliação multidisciplinar' },
      { exam: 'Avaliação neuropsicológica', justify: 'Avaliação padronizada para confirmação diagnóstica', expected: 'A realizar' }
    ],
    expectedConduct: 'Explicação honesta do processo diagnóstico: O diagnóstico definitivo de TEA em adultos requer avaliação multidisciplinar (psiquiatra + psicólogo com experiência em TEA + avaliação neuropsicológica). Uma única consulta não é suficiente para confirmar ou excluir TEA. | Encaminhamento: Serviço especializado em TEA em adultos (CAPS, ambulatório universitário, serviço de referência). RAADS-R pode ser aplicado neste primeiro contato como instrumento de rastreio. | Farmacológico: Não há farmacoterapia específica para o TEA. Tratar comorbidades (ansiedade social: ISRS; TDAH: metilfenidato). | Não farmacológico: Terapia de habilidades sociais, TCC adaptada para TEA, orientação sobre masking e autoadvocacia. | Orientações ao paciente: Validar o autoconhecimento. Explicar que mesmo sem diagnóstico formal, estratégias de adaptação já podem ser iniciadas.',
    expectedCommunication: 'Sobre o diagnóstico: "Pelo que você descreveu, há características consistentes com o que vemos no TEA, mas para ter certeza precisamos de uma avaliação mais completa. Você merece uma resposta cuidadosa, não uma precipitada." | Sobre o tratamento: "TEA não tem cura porque não é uma doença — é uma forma diferente de funcionamento. O que podemos fazer é trabalhar as dificuldades que causam sofrimento e potencializar o que você já faz bem."',
    criticalErrors: [
      'Diagnosticar TEA definitivamente em uma única consulta sem instrumentos padronizados',
      'Excluir TEA categoricamente sem investigar adequadamente o histórico desde a infância',
      'Não investigar comorbidades (ansiedade social, TDAH) que podem ser tratadas independentemente do diagnóstico de TEA',
      'Minimizar o autoconhecimento do paciente ("você não parece autista")',
      'Não encaminhar para avaliação multidisciplinar especializada'
    ]
  },
  instD: {
    title: 'CHECKLIST — JOVEM QUE SE IDENTIFICOU COM AUTISMO E BUSCA DIAGNÓSTICO',
    sections: [
      {
        h: 'COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE',
        items: [
          { item: 'Validou o autoconhecimento e a lista trazida pelo paciente', score: 0.5, ref: 'MS — Política Nacional de Humanização, 2013' },
          { item: 'Respondeu diretamente à pergunta sobre diagnóstico sem evasivas', score: 0.5, ref: 'CFM nº 1.931/2009' },
          { item: 'Explicou que TEA não é doença mas forma diferente de funcionamento', score: 0.5, ref: 'DSM-5; ABP 2022' },
          { item: 'Usou linguagem literal e objetiva (compatível com o estilo comunicativo do paciente)', score: 0.5, ref: 'ABP — Diretrizes TEA, 2022' }
        ]
      },
      {
        h: 'ANAMNESE',
        items: [
          { item: 'Investigou os dois domínios do TEA: comunicação social e comportamentos restritos/repetitivos', score: 1.0, ref: 'DSM-5; ABP — Diretrizes TEA, 2022' },
          { item: 'Investigou o histórico desde a infância (linguagem, escola, amizades)', score: 0.5, ref: 'DSM-5; ABP — Diretrizes TEA, 2022' },
          { item: 'Pesquisou sensibilidade sensorial', score: 0.3, ref: 'DSM-5; ABP — Diretrizes TEA, 2022' },
          { item: 'Investigou comorbidades: ansiedade social e TDAH', score: 0.5, ref: 'ABP — Diretrizes TEA, 2022' }
        ]
      },
      {
        h: 'EXAME FÍSICO',
        items: [
          { item: 'Avaliou estado mental com atenção ao contato visual, entonação e literalidade', score: 0.5, ref: 'ABP — Diretrizes TEA, 2022' }
        ]
      },
      {
        h: 'RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
        items: [
          { item: 'Não diagnosticou TEA definitivamente em consulta única', score: 1.0, ref: 'ABP — Diretrizes TEA, 2022; NICE 2021' },
          { item: 'Identificou necessidade de avaliação multidisciplinar com instrumentos padronizados', score: 0.5, ref: 'ABP — Diretrizes TEA, 2022' }
        ]
      },
      {
        h: 'CONDUTA E ORIENTAÇÃO AO PACIENTE',
        items: [
          { item: 'Encaminhou para serviço especializado em TEA adulto', score: 1.0, ref: 'ABP — Diretrizes TEA, 2022' },
          { item: 'Orientou sobre a possibilidade de tratar comorbidades independentemente do diagnóstico formal', score: 0.5, ref: 'ABP — Diretrizes TEA, 2022' },
          { item: 'Mencionou instrumentos de rastreio (RAADS-R) e avaliação neuropsicológica', score: 0.5, ref: 'ABP — Diretrizes TEA, 2022' }
        ]
      }
    ]
  }
},

{
  id: 20,
  title: "Professora que 'não consegue terminar nada' e perde tudo que precisa",
  sub: 'UBS — Demanda espontânea',
  tema: 'Psiquiatria',
  topic: 'TDAH em adulto — apresentação predominantemente desatenta em mulher',
  level: 'moderado',
  cardAccent: '#0277BD',
  instA: {
    scenario: 'UBS. Consultório, turno matutino. Consulta agendada por queixa de "não conseguir se organizar".',
    patient: 'A.P., 34 anos, feminino, professora do ensino fundamental, casada, dois filhos.',
    complaint: "Paciente relata que 'sempre foi assim' mas que na maturidade as demandas aumentaram e ela não consegue mais acompanhar: esquece compromissos, perde documentos, não termina tarefas, procrastina muito e se sente 'sobrecarregada o tempo todo'. A diretora ameaçou avaliá-la por atrasos nas entregas.",
    tasks: [
      'Realize a anamnese investigando critérios de TDAH adulto (desatenção predominante) e histórico desde a infância.',
      'Aplique o rastreio com escala ASRS (Adult ADHD Self-Report Scale) ou investigue seus critérios principais.',
      'Investigue diagnósticos diferenciais e comorbidades.',
      'Formule a hipótese diagnóstica e explique ao paciente.',
      'Proponha o plano terapêutico inicial.'
    ]
  },
  instB: {
    vitals: {
      PA: '118/76 mmHg',
      FC: '80 bpm',
      FR: '16 irpm',
      Tax: '36,5°C',
      Peso: '65 kg',
      Altura: '1,62 m',
      IMC: '24,8 kg/m²'
    },
    physicalGeneral: 'Paciente em bom estado geral, bem arrumada mas levemente desorganizada (bolsa com muitos papéis, sem encontrar o cartão do SUS). Lúcida, orientada, levemente ansiosa. Sem déficits neurológicos.',
    physicalSeg: 'Estado mental: Fala fluente, sem desorganização formal. Pensamento organizado mas com tendência a mudanças de assunto. Sem alucinações ou delírios. Humor levemente ansioso. Insight preservado.',
    labs: [
      { test: 'TSH', val: '2,1 mUI/L', ref: '0,4–4,0 mUI/L', alt: false },
      { test: 'Hemograma', val: 'Normal', ref: '—', alt: false },
      { test: 'Vitamina B12', val: '290 pg/mL', ref: '200–900 pg/mL', alt: false },
      { test: 'Vitamina D', val: '22 ng/mL', ref: '>30 ng/mL', alt: true },
      { test: 'Glicemia', val: '88 mg/dL', ref: '70–99 mg/dL', alt: false }
    ],
    image: null,
    note: 'Sinais vitais ao início. Exames se solicitados. O candidato deve ser avaliado especialmente pelo rastreio desde a infância (TDAH é transtorno do neurodesenvolvimento — os sintomas devem ter início antes dos 12 anos) e pela distinção de TDAH de depressão, ansiedade e hipotireoidismo como causas de desatenção e esquecimento.',
    patientProfile: 'A.P., 34 anos, professora. Na escola era "sonhadora", tirava boas notas em algumas matérias e péssimas em outras. Perdeu a bolsa de estudos na faculdade por não entregar trabalho. Nunca teve diagnóstico psiquiátrico.',
    script: [
      { trigger: 'Abertura', speech: 'Doutora, eu sou burra ou tenho algum problema? Não consigo terminar nada. Perco tudo. Começo mil coisas e não acabo nenhuma.' },
      { trigger: 'Sobre a infância', speech: 'Na escola era assim também. Minha mãe dizia que eu vivia "no mundo da lua". Mas tirava notas boas quando gostava da matéria.' },
      { trigger: 'Sobre o trabalho', speech: 'Já deixei prazo de entrega passar umas três vezes esse ano. Não é falta de vontade. Sento pra fazer e de repente estou pensando em outra coisa.' },
      { trigger: 'Sobre hiperatividade', speech: 'Não sou agitada. Pelo contrário, parece que minha cabeça viaja mas meu corpo fica parado.' },
      { trigger: 'Sobre organização', speech: 'Tenho três agendas e não uso nenhuma. Perco chaves, documentos, caneta. Meu marido me chama de "desastre".' },
      { trigger: 'Sobre humor', speech: 'Fico triste às vezes por causa disso. Mas não é tristeza o tempo todo. É frustração comigo mesma.' },
      { trigger: 'Pergunta ativa', speech: 'Pode ser TDAH? Vi um vídeo sobre isso e me identifiquei muito. É isso?' },
      { trigger: 'Pergunta ativa', speech: 'Vou precisar de remédio pra sempre?' }
    ],
    hiddenInfo: 'Na faculdade perdeu bolsa de estudos por não entregar TCC no prazo — revelar se perguntado sobre consequências acadêmicas. | Deficiência de vitamina D (22 ng/mL) como fator contribuinte para fadiga e dificuldade de concentração — identificado nos exames.',
    actorBehavior: 'Fala animada, muda de assunto com facilidade. Interrompe a si mesma ("ah, esqueci de falar..."). Demonstra alívio quando o candidato valida que TDAH não é "preguiça" ou "falta de esforço". Ri de si mesma com ironia saudável.'
  },
  instC: {
    diagnosis: 'TDAH em adulto, apresentação predominantemente desatenta (TDAH-D). Sintomas presentes desde antes dos 12 anos (critério obrigatório do DSM-5). Comprometimento em ≥2 contextos (trabalho e vida doméstica). CID-11: 6A05.0 / DSM-5: F90.0. Deficiência de vitamina D como fator contribuinte para fadiga e dificuldade de concentração.',
    differentials: [
      'Depressão maior — pode causar desatenção e dificuldade de concentração; no entanto, os sintomas no TDAH precedem à infância e não há humor deprimido persistente.',
      'TAG — pode prejudicar a concentração; a desatenção no TAG é secundária à preocupação excessiva; no TDAH é primária.',
      'Hipotireoidismo — causa fadiga, lentidão cognitiva e esquecimento; TSH normal afasta.',
      'Deficiência de vitamina D — pode contribuir com fadiga e dificuldade de concentração mas não explica o padrão desde a infância.'
    ],
    context: 'Mulher de 34 anos com desatenção predominante desde a infância (critério retroativo preenchido), descompensada na maturidade com aumento das demandas funcionais. TDAH em mulheres frequentemente apresenta-se de forma mais internalizada (desatenção predominante, menos hiperatividade externa), levando ao diagnóstico tardio.',
    justify: 'Preenche ≥6 critérios de desatenção do DSM-5 (não termina tarefas, perde objetos, se distrai facilmente, evita tarefas que exigem esforço mental sustentado, esquece compromissos) desde antes dos 12 anos (sintomas na escola relatados pela paciente), em ≥2 contextos (trabalho e domicílio), com comprometimento funcional significativo (risco de avaliação negativa no trabalho). Sem outro transtorno que explique melhor os sintomas.',
    expectedAnamnesis: 'Investigar os critérios de desatenção e hiperatividade/impulsividade do DSM-5 | Pesquisar início dos sintomas (obrigatório antes dos 12 anos) | Investigar comprometimento em múltiplos contextos | Pesquisar diagnósticos prévios de dificuldade de aprendizagem | Rastrear depressão e ansiedade comórbidas | Investigar uso de substâncias (álcool, estimulantes como café em excesso) | Pesquisar TDAH em familiares (herdabilidade alta)',
    expectedPhysical: 'Estado mental: atenção, memória, organização do discurso | Avaliação tireoidiana: afastar hipotireoidismo',
    expectedExams: [
      { exam: 'TSH', justify: 'Afastar hipotireoidismo como causa de desatenção', expected: 'Normal (2,1 mUI/L)' },
      { exam: 'Hemograma', justify: 'Avaliação basal', expected: 'Normal' },
      { exam: 'Vitamina D', justify: 'Rastrear deficiência como fator contribuinte para fadiga', expected: '22 ng/mL — deficiente' }
    ],
    expectedConduct: 'Psicoeducação: Explicar que TDAH não é preguiça — é déficit de regulação atencional. | Farmacológica (1ª linha): Metilfenidato de liberação imediata 10 mg VO 2x/dia (manhã e início da tarde), com ajuste gradual até dose eficaz (máx. 60 mg/dia). (MS — PCDT TDAH, 2022; RENAME 2023) | Não farmacológico: TCC para TDAH (organização, gestão do tempo, estratégias compensatórias). Aplicativos de organização. Envolver cônjuge no suporte. | Vitamina D: Suplementação 2.000 UI/dia VO. (SBEM, 2022) | Encaminhamento: Psicologia para TCC adaptada para TDAH. Retorno em 4 semanas para avaliação da resposta ao metilfenidato.',
    expectedCommunication: "TDAH em mulheres frequentemente é diagnosticado tarde porque a apresentação é mais interna — menos agitação, mais 'mundo da lua'. Você não é burra nem preguiçosa.",
    criticalErrors: [
      'Não investigar início dos sintomas antes dos 12 anos (critério obrigatório do DSM-5)',
      'Diagnosticar TDAH sem afastar hipotireoidismo como causa de desatenção',
      'Não mencionar a necessidade de rastreio em múltiplos contextos',
      'Não prescrever metilfenidato com controle de risco (PA, FC, uso em cardiopatas)',
      "Dizer à paciente que 'é normal para mulher com filhos'"
    ]
  },
  instD: {
    title: 'CHECKLIST — PROFESSORA QUE NÃO CONSEGUE TERMINAR NADA E PERDE TUDO',
    sections: [
      {
        h: 'COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE',
        items: [
          { item: 'Validou que TDAH não é preguiça ou falta de esforço', score: 0.5, ref: 'MS — PCDT TDAH, 2022' },
          { item: 'Explicou a apresentação diferente do TDAH em mulheres', score: 0.5, ref: 'MS — PCDT TDAH, 2022' }
        ]
      },
      {
        h: 'ANAMNESE',
        items: [
          { item: 'Investigou ≥6 critérios de desatenção do DSM-5', score: 0.5, ref: 'DSM-5; MS — PCDT TDAH, 2022' },
          { item: 'Confirmou início dos sintomas antes dos 12 anos', score: 1.0, ref: 'DSM-5; MS — PCDT TDAH, 2022' },
          { item: 'Confirmou comprometimento em ≥2 contextos', score: 0.5, ref: 'DSM-5; MS — PCDT TDAH, 2022' },
          { item: 'Rastreou depressão e ansiedade comórbidas', score: 0.5, ref: 'MS — PCDT TDAH, 2022' }
        ]
      },
      {
        h: 'EXAME FÍSICO',
        items: [
          { item: 'Avaliou estado mental (atenção, memória, organização)', score: 0.5, ref: 'Semiologia Médica — FMUSP' },
          { item: 'Avaliou PA e FC (baseline antes do metilfenidato)', score: 0.3, ref: 'MS — PCDT TDAH, 2022' }
        ]
      },
      {
        h: 'RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
        items: [
          { item: 'Solicitou TSH para afastar hipotireoidismo', score: 0.5, ref: 'MS — PCDT TDAH, 2022' },
          { item: 'Formulou hipótese de TDAH-D adulto com critérios retroativos', score: 1.0, ref: 'DSM-5; MS — PCDT TDAH, 2022' }
        ]
      },
      {
        h: 'CONDUTA E ORIENTAÇÃO AO PACIENTE',
        items: [
          { item: 'Prescreveu metilfenidato em dose inicial correta (10 mg 2x/dia)', score: 1.0, ref: 'MS — PCDT TDAH, 2022; RENAME 2023' },
          { item: 'Indicou TCC para TDAH como tratamento não farmacológico', score: 0.5, ref: 'MS — PCDT TDAH, 2022' },
          { item: 'Orientou sobre suplementação de vitamina D', score: 0.3, ref: 'SBEM, 2022' },
          { item: 'Estabeleceu retorno em 4 semanas para avaliação da resposta', score: 0.4, ref: 'MS — PCDT TDAH, 2022' }
        ]
      }
    ]
  }
},

{
  id: 21,
  title: 'Homem que confere a torneira 40 vezes antes de sair e chegou atrasado à consulta',
  sub: 'CAPS II',
  tema: 'Psiquiatria',
  topic: 'TOC — verificação e contaminação, apresentação masculina',
  level: 'moderado',
  cardAccent: '#1B5E20',
  instA: {
    scenario: 'CAPS II. Sala de acolhimento, turno da manhã. Paciente chegou 55 minutos atrasado, apologético.',
    patient: 'F.A., 41 anos, masculino, contador, divorciado há 2 anos, mora sozinho.',
    complaint: "Paciente relata que 'tudo demorou muito hoje': checou as torneiras 40 vezes, o gás 20 vezes e precisou voltar duas vezes para casa depois de sair. Diz que 'sabe que está tudo bem, mas precisa checar mesmo assim'. Encaminhado pelo clínico após piora progressiva nos últimos 6 meses.",
    tasks: [
      'Realize a anamnese investigando obsessões, compulsões e seu impacto funcional.',
      'Estime a gravidade com base nos critérios da Y-BOCS (tempo consumido, angústia, resistência, controle).',
      'Investigue diagnósticos diferenciais e rastreie depressão comórbida.',
      'Formule o diagnóstico e proponha o tratamento baseado em evidências.',
      'Explique ao paciente o que é TOC e como funciona o tratamento.'
    ]
  },
  instB: {
    vitals: {
      PA: '128/84 mmHg',
      FC: '82 bpm',
      FR: '16 irpm',
      Tax: '36,6°C',
      Peso: '88 kg',
      Altura: '1,78 m',
      IMC: '27,8 kg/m²'
    },
    physicalGeneral: 'Paciente em bom estado geral, bem vestido mas levemente suado (veio correndo). Lúcido, orientado. Sem lesões nas mãos (sem lavagem excessiva). Insight preservado — reconhece os rituais como excessivos.',
    physicalSeg: 'Estado mental: Humor moderadamente ansioso, afeto congruente. Fala organizada. Pensamento sem desorganização formal. Obsessões egodistônicas. Sem alucinações ou delírios. Insight preservado.',
    labs: [
      { test: 'TSH', val: '2,0 mUI/L', ref: '0,4–4,0 mUI/L', alt: false },
      { test: 'Hemograma', val: 'Normal', ref: '—', alt: false },
      { test: 'Glicemia', val: '92 mg/dL', ref: '70–99 mg/dL', alt: false }
    ],
    image: null,
    note: 'Sinais vitais ao início. Exames se solicitados. O candidato deve ser avaliado especialmente pela distinção do TOC de TAG (no TAG não há compulsões ritualizadas) e pela proposta correta de ISRS em dose alta para TOC.',
    patientProfile: 'F.A., 41 anos, contador. Divorciado por "exigências que minha esposa não aguentou". Mora sozinho há 2 anos. Sintomas desde os 25 anos mas com piora após o divórcio.',
    script: [
      { trigger: 'Abertura', speech: 'Desculpa o atraso. Fiquei preso em casa checando tudo. Hoje foram 40 vezes a torneira. Sei que tá tudo bem, mas se eu não checar fica uma angústia insuportável.' },
      { trigger: 'Sobre as compulsões', speech: 'É torneira, gás, porta, janela. Tenho uma ordem: torneira (3 vezes cada, conto até 3), depois gás (5 vezes), depois porta (10 vezes). Se interromper, recomeço.' },
      { trigger: 'Sobre o impacto', speech: 'Levo 2 horas pra sair de casa. Já cheguei atrasado em reuniões importantes. Fui demitido de um emprego por isso.' },
      { trigger: 'Sobre o início', speech: 'Desde os 25 anos, mas era leve. Piorou muito depois que me divorciei.' },
      { trigger: 'Sobre depressão', speech: 'Me sinto triste por causa disso, mas não é uma tristeza que fica o tempo todo.' },
      { trigger: 'Sobre suicídio', speech: 'Não. Às vezes me sinto preso, mas não penso em me machucar.' },
      { trigger: 'Pergunta ativa', speech: 'Isso tem cura? Porque eu já tentei parar de checar e não consigo.' },
      { trigger: 'Pergunta ativa', speech: 'O remédio que o senhor vai dar vai me deixar dependente?' }
    ],
    hiddenInfo: 'Demissão de emprego anterior por chegar atrasado devido às compulsões — revelar se perguntado sobre outras consequências profissionais além da situação atual. | As compulsões pioraram após o divórcio (estressor) — revelar se perguntado sobre quando começou a piora.',
    actorBehavior: 'Apologético pelo atraso, levemente envergonhado. Insight excelente — reconhece a irracionalidade mas não consegue resistir. Alivia quando o candidato valida que TOC é uma condição médica real. Fica preocupado quando se fala em "expor-se ao desconforto" no tratamento (EPR).'
  },
  instC: {
    diagnosis: 'TOC — compulsões de verificação, com obsessões de catástrofe (torneira, gás), insight preservado. Y-BOCS estimado grave (>24 — >3h/dia de rituais, angústia intensa, controle mínimo). CID-11: 6B20 / DSM-5: F42.',
    differentials: [
      'TAG — preocupações sem rituais compulsivos estruturados; exclui-se pela presença das compulsões ritualizadas e da sequência rígida.',
      'Transtorno de personalidade TPOC — rigidez e perfeccionismo egossintônicos; no TOC as obsessões são egodistônicas.',
      'Depressão maior com ruminação — ruminações depressivas egossintônicas; no TOC são egodistônicas e seguidas de compulsões.',
      'Psicose — pensamentos intrusivos podem simular obsessões; no entanto, insight preservado e ausência de alucinações/delírios afastam.'
    ],
    context: '',
    justify: '',
    expectedAnamnesis: '',
    expectedPhysical: '',
    expectedExams: [],
    expectedConduct: 'ISRS em dose alta: Fluoxetina 40–80 mg/dia OU Sertralina 150–200 mg/dia VO. Clomipramina 150–300 mg/dia como alternativa de 2ª linha. TCC com EPR como componente obrigatório. Encaminhamento para psicólogo com experiência em TCC/EPR para TOC. Latência de resposta: 8–12 semanas. (ABP — Diretrizes TOC, 2022; RENAME 2023)',
    expectedCommunication: '',
    criticalErrors: [
      'Prescrever ISRS em dose antidepressiva padrão (insuficiente para TOC)',
      'Não indicar TCC com EPR como componente essencial',
      'Não diferenciar TOC de TAG',
      'Não investigar depressão comórbida',
      'Não avaliar risco de suicídio'
    ]
  },
  instD: {
    title: 'CHECKLIST — HOMEM QUE CONFERE A TORNEIRA 40 VEZES ANTES DE SAIR',
    sections: [
      {
        h: 'COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE',
        items: [
          { item: 'Validou que TOC não é frescura nem falta de vontade', score: 0.5, ref: 'ABP — Diretrizes TOC, 2022' },
          { item: 'Explicou o conceito de EPR de forma acessível', score: 0.5, ref: 'ABP — Diretrizes TOC, 2022' }
        ]
      },
      {
        h: 'ANAMNESE',
        items: [
          { item: 'Investigou obsessões (conteúdo, frequência, angústia)', score: 0.5, ref: 'DSM-5; ABP 2022' },
          { item: 'Investigou compulsões (tipo, duração, sequência, resistência)', score: 0.5, ref: 'DSM-5; ABP 2022' },
          { item: 'Estimou tempo consumido por dia (>3h = grave)', score: 0.5, ref: 'Y-BOCS; ABP 2022' },
          { item: 'Rastreou depressão comórbida', score: 0.5, ref: 'ABP 2022' },
          { item: 'Avaliou risco de suicídio', score: 0.5, ref: 'MS — PCDT Suicídio, 2022' }
        ]
      },
      {
        h: 'EXAME FÍSICO',
        items: [
          { item: 'Avaliou insight (egodistônico vs egossintônico)', score: 0.5, ref: 'DSM-5; ABP 2022' }
        ]
      },
      {
        h: 'RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
        items: [
          { item: 'Formulou TOC e diferenciou de TAG', score: 1.0, ref: 'DSM-5; ABP 2022' },
          { item: 'Solicitou TSH para afastar causa orgânica', score: 0.3, ref: 'ABP 2022' }
        ]
      },
      {
        h: 'CONDUTA E ORIENTAÇÃO AO PACIENTE',
        items: [
          { item: 'Prescreveu ISRS em dose ALTA para TOC', score: 1.0, ref: 'ABP 2022; RENAME 2023' },
          { item: 'Indicou TCC com EPR como 1ª linha', score: 1.0, ref: 'ABP 2022' },
          { item: 'Orientou sobre latência prolongada (8–12 semanas)', score: 0.5, ref: 'ABP 2022' }
        ]
      }
    ]
  }
},

{
  id: 22,
  title: 'Criança que não consegue entrar no elevador depois de ficar presa por 10 minutos',
  sub: 'Ambulatório de Psiquiatria Infantil',
  tema: 'Psiquiatria',
  topic: 'Fobia específica — situacional (elevadores/espaços fechados)',
  level: 'moderado',
  cardAccent: '#F57F17',
  instA: {
    scenario: 'Ambulatório de Psiquiatria Infantil. Primeira consulta, turno da tarde. Mãe trouxe a filha de 10 anos.',
    patient: 'L.C., 10 anos, feminino, estudante do 5º ano, mora em apartamento no 12º andar.',
    complaint: 'Mãe relata que há 3 meses, após a filha ficar presa em um elevador por 10 minutos, a criança não entra mais em elevadores, recusa-se a ir à escola (que tem elevadores), chora ao ver imagens de elevadores e está dormindo mal.',
    tasks: [
      'Realize a anamnese com a criança e a mãe, investigando o evento precipitante e os sintomas atuais.',
      'Avalie o impacto funcional: escola, vida social, sono.',
      'Diferencie de TEPT, TAG e transtorno de ajustamento.',
      'Proponha o plano terapêutico baseado em evidências.',
      'Oriente a mãe sobre como ajudar sem reforçar a evitação.'
    ]
  },
  instB: {
    vitals: {
      PA: '100/64 mmHg',
      FC: '88 bpm',
      FR: '18 irpm',
      Tax: '36,4°C',
      Peso: '36 kg',
      Altura: '1,42 m',
      IMC: '17,8 kg/m²'
    },
    physicalGeneral: 'Criança em bom estado geral, lúcida, orientada. Levemente tímida na consulta. Sem déficits neurológicos. Sem sinais de maus-tratos.',
    physicalSeg: 'Estado mental: Humor ansioso apenas ao falar sobre elevadores. Afeto congruente. Sem alucinações ou delírios. Insight parcialmente preservado para a idade (sabe que o medo é grande demais, mas não consegue controlar). Sem ideação suicida.',
    labs: [],
    image: null,
    note: 'Nenhum exame necessário. O candidato deve ser avaliado pela habilidade de conduzir a entrevista com a criança (linguagem adaptada) e de diferenciar fobia específica de TEPT (a fobia específica tem o medo circunscrito a um estímulo específico, sem os outros clusters do TEPT).',
    patientProfile: 'L.C., 10 anos, bem desenvolvida cognitivamente. Bons relacionamentos antes do incidente. Pai acompanhou e ficou calmo no momento da prisão no elevador (não foi traumático para o pai).',
    script: [
      { trigger: 'Abertura', speech: 'Eu sei que é bobagem. Mas quando penso no elevador fico com o coração acelerado e parece que vou sufocar.' },
      { trigger: 'Sobre o incidente', speech: 'A gente ficou presa uns 10 minutos. Eu gritei muito. Achei que ia ficar presa pra sempre. Meu pai ficava dizendo que ia passar, mas eu não acreditava.' },
      { trigger: 'Sobre ir à escola', speech: 'A escola tem elevador na entrada do prédio. Eu não consigo mais entrar. Fico esperando minha mãe pegar comigo na escada mas a escola tem 12 andares.' },
      { trigger: 'Sobre pesadelos', speech: 'Não tenho pesadelo. Só fico com medo quando vejo elevador ou penso nisso.' },
      { trigger: 'Script da mãe', speech: 'Doutor, desde que aconteceu ela chora se a gente fala em elevador. Faltou 15 dias à escola. Está subindo e descendo 12 andares de escada. Não tem pesadelo, não fica revivendo o incidente — só tem esse medo específico de elevador.' },
      { trigger: 'Pergunta ativa da criança', speech: 'Vai me colocar no elevador na força? Porque não consigo.' },
      { trigger: 'Pergunta ativa da mãe', speech: 'Posso ir evitando o elevador com ela ou isso piora?' }
    ],
    hiddenInfo: 'A mãe passou a evitar o elevador junto com a filha (reforço materno da evitação) — revelar se perguntado sobre como a família tem lidado com o medo.',
    actorBehavior: 'Criança cooperativa, levemente tímida. Consegue falar sobre o incidente sem revivência ou pânico — diferenciando do TEPT. A mãe é colaborativa e ansiosa.'
  },
  instC: {
    diagnosis: 'Fobia específica — tipo situacional (elevadores / espaços fechados), precipitada por evento específico. CID-11: 6B03 / DSM-5: F40.248.',
    differentials: [
      'TEPT — sem revivência do evento, sem pesadelos, sem evitação generalizada; o medo é circunscrito ao estímulo (elevador); afastado.',
      'Transtorno de ajustamento com ansiedade — duração <3 meses e sem medo específico ritualizado; excluído pela presença de medo fóbico claro e impacto funcional significativo (15 dias sem escola).',
      'Claustrofobia como parte de agorafobia — no transtorno do pânico com agorafobia o medo é de situações onde a fuga é difícil; aqui o medo é específico ao elevador.',
      'Ansiedade de separação — medo de ser separada dos pais; não se aplica ao caso.'
    ],
    context: '',
    justify: '',
    expectedAnamnesis: '',
    expectedPhysical: '',
    expectedExams: [],
    expectedConduct: 'TCC com exposição gradual (hierarquia de medo): Tratamento de 1ª linha para fobia específica em crianças. Construir hierarquia de medo com a criança (1 = ver foto de elevador; 10 = entrar sozinha no elevador por 5 andares). Iniciar do item menos ansioso com técnicas de relaxamento. (ABP — Diretrizes Fobias, 2021; NICE 2013 — atualizado 2019) | Psicoeducação para a mãe: Explicar que evitar o elevador junto com a filha mantém e piora a fobia (reforço negativo). A exposição gradual é necessária. | Farmacológico: Geralmente não indicado para fobia específica em crianças. Se sintomas ansiosos intensos interferirem na exposição: considerar ISRS como adjuvante (sertralina em baixa dose). (ABP 2021) | Escola: Comunicar a escola sobre o plano de exposição gradual; iniciar com entrada pela escada mas com exposição planejada ao elevador.',
    expectedCommunication: '',
    criticalErrors: [
      'Diagnosticar TEPT sem a presença dos 4 clusters (especialmente ausência de revivência)',
      'Orientar a mãe a continuar evitando o elevador com a filha (piora a fobia)',
      'Forçar a criança a entrar no elevador imediatamente (flooding sem preparação — pode agravar)',
      'Não incluir a mãe no plano terapêutico',
      'Prescrever benzodiazepínico em criança para fobia específica (contraindicado como 1ª linha)'
    ]
  },
  instD: {
    title: 'CHECKLIST — CRIANÇA QUE NÃO CONSEGUE ENTRAR NO ELEVADOR',
    sections: [
      {
        h: 'COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE',
        items: [
          { item: 'Usou linguagem adaptada à faixa etária com a criança', score: 0.5, ref: 'MS — Saúde da Criança, 2022' },
          { item: 'Orientou a mãe que a evitação conjunta piora a fobia', score: 0.5, ref: 'ABP 2021' }
        ]
      },
      {
        h: 'ANAMNESE',
        items: [
          { item: 'Investigou o evento precipitante sem forçar detalhes', score: 0.5, ref: 'ABP 2021' },
          { item: 'Pesquisou presença (ou ausência) de revivência e pesadelos', score: 0.5, ref: 'DSM-5' },
          { item: 'Avaliou impacto funcional (escola, sono, socialização)', score: 0.5, ref: 'ABP 2021' },
          { item: 'Investigou reforço materno da evitação', score: 0.5, ref: 'ABP 2021' }
        ]
      },
      {
        h: 'EXAME FÍSICO',
        items: [
          { item: 'Avaliou estado mental da criança (humor, ansiedade específica)', score: 0.5, ref: 'ABP 2021' }
        ]
      },
      {
        h: 'RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
        items: [
          { item: 'Diferenciou fobia específica de TEPT e TA', score: 1.0, ref: 'DSM-5; ABP 2021' }
        ]
      },
      {
        h: 'CONDUTA E ORIENTAÇÃO AO PACIENTE',
        items: [
          { item: 'Indicou TCC com exposição gradual como 1ª linha', score: 1.5, ref: 'ABP 2021; NICE 2019' },
          { item: 'Não prescreveu benzodiazepínico em criança como 1ª linha', score: 0.5, ref: 'ABP 2021' },
          { item: 'Construiu hierarquia de medo com a criança', score: 1.0, ref: 'ABP 2021' },
          { item: 'Orientou escola sobre o plano terapêutico', score: 0.5, ref: 'MS — Saúde da Criança, 2022' }
        ]
      }
    ]
  }
},

{
  id: 23,
  title: "Músico que recusa shows por medo de 'dar branco' e ser ridicularizado",
  sub: 'Ambulatório de Saúde Mental',
  tema: 'Psiquiatria',
  topic: 'Fobia social (transtorno de ansiedade social)',
  level: 'moderado',
  cardAccent: '#4527A0',
  instA: {
    scenario: 'Ambulatório de Saúde Mental — Policlínica. Primeira consulta, turno vespertino.',
    patient: 'M.C., 28 anos, masculino, músico (guitarrista), solteiro. Encaminhado pelo clínico após relato de ansiedade extrema em situações de performance.',
    complaint: "Paciente relata que nos últimos 2 anos passou a recusar shows e apresentações por medo intenso de 'dar branco', errar na frente do público e ser ridicularizado. Recusa jantares e reuniões sociais com pessoas desconhecidas pelo mesmo motivo. O medo está prejudicando sua carreira musical.",
    tasks: [
      'Realize a anamnese investigando o padrão de medo social, os gatilhos específicos e os comportamentos de evitação.',
      'Diferencie de timidez normal, transtorno do pânico e TAG.',
      'Avalie comorbidades: depressão, álcool (como automedicação).',
      'Formule o diagnóstico e proponha o tratamento.',
      'Oriente o paciente sobre o processo de tratamento.'
    ]
  },
  instB: {
    vitals: {
      PA: '122/78 mmHg',
      FC: '84 bpm',
      FR: '16 irpm',
      Tax: '36,5°C',
      Peso: '74 kg',
      Altura: '1,77 m',
      IMC: '23,6 kg/m²'
    },
    physicalGeneral: 'Paciente em bom estado geral. Levemente ansioso na consulta. Contato visual reduzido quando fala de si mesmo. Lúcido, orientado. Sem déficits neurológicos.',
    physicalSeg: '',
    labs: [
      { test: 'TSH', val: '1,9 mUI/L', ref: '0,4–4,0 mUI/L', alt: false },
      { test: 'Glicemia', val: '91 mg/dL', ref: '70–99 mg/dL', alt: false }
    ],
    image: null,
    note: 'Sinais vitais ao início. Exames se solicitados. O candidato deve ser avaliado pela distinção entre fobia social e timidez normal (a fobia social tem impacto funcional significativo e comportamento de evitação) e pela proposta de tratamento (ISRS + TCC).',
    patientProfile: 'M.C., 28 anos, músico talentoso reconhecido por professores. Desde os 14 anos tem dificuldade em apresentações, mas piorou após "branco" em um show importante há 2 anos.',
    script: [
      { trigger: 'Abertura', speech: 'Eu sei tocar guitarra muito bem quando estou sozinho ou com amigos íntimos. Mas na frente de pessoas desconhecidas, meu coração acelera, começo a tremer, e fico com medo de dar branco e todo mundo me achar um fracasso.' },
      { trigger: 'Sobre o evento precipitante', speech: 'Há 2 anos eu estava tocando em um bar, travei numa parte que sei de cor e todo mundo percebeu. Desde então não consigo mais me apresentar.' },
      { trigger: 'Sobre situações sociais', speech: 'Evito também jantares com pessoas que não conheço, reuniões de condomínio, falar na frente de grupo. Não é em todos os lugares — com amigos íntimos sou normal.' },
      { trigger: 'Sobre o álcool', speech: 'Antes de shows bebia umas doses pra relaxar. Mas aí parei de ir aos shows. Hoje bebo socialmente, sem exagero.' },
      { trigger: 'Sobre depressão', speech: 'Fico triste pela carreira que estou perdendo. Mas não é uma tristeza permanente, é mais frustração.' },
      { trigger: 'Sobre suicídio', speech: 'Não. Quero resolver isso.' },
      { trigger: 'Pergunta ativa', speech: 'É fraqueza minha? Outros músicos passam por isso?' },
      { trigger: 'Pergunta ativa', speech: 'Preciso de remédio ou só terapia resolve?' }
    ],
    hiddenInfo: 'Usou álcool como automedicação antes de shows por 2 anos antes de parar de se apresentar — revelar se perguntado sobre estratégias que usava para encarar as situações temidas.',
    actorBehavior: ''
  },
  instC: {
    diagnosis: 'Transtorno de ansiedade social (fobia social), tipo performance + social generalizado. CID-11: 6B04 / DSM-5: F40.10.',
    differentials: [
      'Timidez normal — a timidez não causa comprometimento funcional significativo nem evitação sistemática; excluída pelo impacto na carreira e recusa de múltiplas situações sociais.',
      'Transtorno do pânico — crises inesperadas e espontâneas, sem relação específica com situações de avaliação social; excluído pela situacionalidade.',
      'TAG — preocupações generalizadas sem foco no julgamento alheio; excluído.',
      'Depressão maior com isolamento social — humor deprimido persistente como causa primária do isolamento; excluído pelo humor preservado fora das situações temidas.'
    ],
    context: '',
    justify: '',
    expectedAnamnesis: '',
    expectedPhysical: '',
    expectedExams: [],
    expectedConduct: 'ISRS de 1ª linha: Sertralina 50–150 mg/dia OU Paroxetina 20–40 mg/dia. Beta-bloqueador (propranolol 10–20 mg VO antes da performance) para sintomas autonômicos em situações específicas. TCC com reestruturação cognitiva e exposição gradual às situações temidas. (ABP — Diretrizes Fobias, 2021; RENAME 2023)',
    expectedCommunication: '',
    criticalErrors: [
      'Não distinguir fobia social de transtorno do pânico',
      'Não indicar TCC como componente essencial do tratamento',
      'Prescrever benzodiazepínico de longa duração como tratamento principal',
      'Não investigar uso de álcool como automedicação',
      'Minimizar como "timidez normal"'
    ]
  },
  instD: {
    title: 'CHECKLIST — MÚSICO QUE RECUSA SHOWS POR MEDO DE SER RIDICULARIZADO',
    sections: [
      {
        h: 'COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE',
        items: [
          { item: 'Validou que não é fraqueza — é uma condição médica', score: 0.5, ref: 'ABP 2021' },
          { item: 'Informou que músicos profissionais frequentemente têm fobia de performance', score: 0.3, ref: 'ABP 2021' }
        ]
      },
      {
        h: 'ANAMNESE',
        items: [
          { item: 'Investigou situações específicas temidas e generalização', score: 0.5, ref: 'DSM-5; ABP 2021' },
          { item: 'Pesquisou comportamento de evitação e impacto na carreira', score: 0.5, ref: 'DSM-5' },
          { item: 'Investigou uso de álcool como automedicação', score: 0.5, ref: 'ABP 2021' },
          { item: 'Rastreou depressão comórbida e risco de suicídio', score: 0.5, ref: 'ABP 2021' }
        ]
      },
      {
        h: 'EXAME FÍSICO',
        items: [
          { item: 'Avaliou estado mental (ansiedade social durante a consulta)', score: 0.3, ref: 'ABP 2021' }
        ]
      },
      {
        h: 'RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
        items: [
          { item: 'Diferenciou fobia social de timidez normal e transtorno do pânico', score: 1.0, ref: 'DSM-5; ABP 2021' },
          { item: 'Solicitou TSH para afastar hipertireoidismo', score: 0.3, ref: 'ABP 2021' }
        ]
      },
      {
        h: 'CONDUTA E ORIENTAÇÃO AO PACIENTE',
        items: [
          { item: 'Prescreveu ISRS adequado para fobia social', score: 1.0, ref: 'ABP 2021; RENAME 2023' },
          { item: 'Mencionou propranolol para situações de performance', score: 0.5, ref: 'ABP 2021' },
          { item: 'Indicou TCC como tratamento 1ª linha', score: 1.0, ref: 'ABP 2021' },
          { item: 'Estabeleceu retorno e plano de exposição gradual', score: 0.6, ref: 'ABP 2021' }
        ]
      }
    ]
  }
},

{
  id: 24,
  title: "Mulher que acredita que está tendo infarto sempre que o coração dispara no shopping",
  sub: 'UBS — Demanda espontânea',
  tema: 'Psiquiatria',
  topic: 'Transtorno do pânico sem agorafobia — início recente',
  level: 'moderado',
  cardAccent: '#C62828',
  instA: {
    scenario: 'UBS. Consultório, turno da tarde. Quarta consulta em 2 meses — as três anteriores foram na UPA por "infarto" e os exames estavam normais.',
    patient: 'C.B., 43 anos, feminino, gerente de loja, casada, dois filhos adolescentes.',
    complaint: "Paciente retorna após três atendimentos na UPA por 'infarto' com exames normais. Refere episódios recorrentes de coração disparado, falta de ar e certeza de que vai morrer, especialmente em locais movimentados.",
    tasks: [
      'Realize a anamnese investigando características dos episódios (início, duração, sintomas, desencadeantes).',
      'Interprete os exames previamente normais e avalie se há necessidade de investigação adicional.',
      'Formule a hipótese diagnóstica e os diferenciais.',
      'Proponha a conduta terapêutica.',
      'Explique o diagnóstico à paciente de forma que valide os sintomas sem reforçar a busca por exames.'
    ]
  },
  instB: {
    vitals: {
      PA: '128/82 mmHg',
      FC: '90 bpm',
      FR: '18 irpm',
      Tax: '36,6°C',
      Peso: '71 kg',
      Altura: '1,63 m',
      IMC: '26,7 kg/m²'
    },
    physicalGeneral: 'Paciente em bom estado geral. Ansiosa, mas cooperativa. Lúcida, orientada. Sem sinais de intoxicação. Sem déficits neurológicos. Hálito sem odor de álcool.',
    physicalSeg: '',
    labs: [
      { test: 'ECG (3 realizados)', val: 'Ritmos sinusais, normais', ref: 'Normal', alt: false },
      { test: 'Troponina (2x)', val: '<0,02 ng/mL', ref: '<0,04 ng/mL', alt: false },
      { test: 'TSH', val: '1,7 mUI/L', ref: '0,4–4,0 mUI/L', alt: false },
      { test: 'Glicemia', val: '92 mg/dL', ref: '70–99 mg/dL', alt: false },
      { test: 'Hemograma', val: 'Normal', ref: '—', alt: false }
    ],
    image: null,
    note: 'Entregar os exames das UPAs ao início (impresso). O candidato deve ser avaliado especialmente por NÃO solicitar novos exames cardiológicos (reasseguramento desnecessário) e pela comunicação empática que valida os sintomas sem reforçar a crença de doença cardíaca.',
    patientProfile: 'C.B., 43 anos, gerente de loja de shopping. Primeiro episódio há 2 meses, dentro do shopping no horário de pico.',
    script: [
      { trigger: 'Abertura', speech: 'Doutora, eu sei que os exames deram normal, mas não pode estar tudo certo. Aquilo que sinto é real. No shopping parece que vou morrer.' },
      { trigger: 'Sobre os episódios', speech: 'Dura uns 15 minutos. Coração dispara, falta ar, formigamento nas mãos, tontura. Tenho certeza que é infarto. Depois passa, mas fico esperando o próximo.' },
      { trigger: 'Sobre os locais', speech: 'Acontece mais no shopping, no supermercado, em lugares cheios. Mas já aconteceu em casa uma vez.' },
      { trigger: 'Sobre evitação', speech: 'Tô evitando o shopping. Pedi à minha gerente pra trabalhar mais no escritório do fundo.' },
      { trigger: 'Sobre o medo entre as crises', speech: 'Fico com medo de ter outra crise. Comprei um aparelho de pressão. Meço 10 vezes por dia.' },
      { trigger: 'Sobre solicitar novos exames', speech: 'A senhora pode me pedir um ecocardiograma? Só pra ter certeza.' },
      { trigger: 'Pergunta ativa', speech: 'Então é da cabeça? Porque eu sinto de verdade.' }
    ],
    hiddenInfo: 'Evitação do shopping (local de trabalho) há 3 semanas — revelar se perguntado sobre mudanças de comportamento no trabalho. | Comprou aparelho de pressão e mede 10 vezes/dia (busca excessiva por reasseguramento) — revelar se perguntado sobre o que faz entre os episódios.',
    actorBehavior: ''
  },
  instC: {
    diagnosis: 'Transtorno do pânico sem agorafobia, com comportamento de busca por reasseguramento (medição de PA, múltiplas idas à UPA) e início de evitação situacional. CID-11: 6B01 / DSM-5: F41.0.',
    differentials: [
      'SCA — três ECGs e duas troponinas normais afastam de forma robusta.',
      'Hipertireoidismo — TSH normal afasta.',
      'Fobia social — crises em locais movimentados podem simular; no entanto, no pânico as crises são inesperadas (também ocorreu em casa) e não motivadas pelo medo de julgamento.',
      'Hipoglicemia — glicemia normal afasta.'
    ],
    context: '',
    justify: '',
    expectedAnamnesis: '',
    expectedPhysical: '',
    expectedExams: [],
    expectedConduct: 'Não solicitar ecocardiograma sem indicação clínica (reasseguramento). | ISRS de 1ª linha: Sertralina 50 mg/dia OU Escitalopram 10 mg/dia (iniciar com metade da dose para evitar ativação ansiosa). (ABP — Diretrizes Pânico, 2021; RENAME 2023) | TCC com técnica de exposição interoceptiva. | Orientar sobre o ciclo do pânico e a respiração diafragmática. | Orientar para reduzir a medição de PA (busca por reasseguramento mantém o pânico).',
    expectedCommunication: '',
    criticalErrors: [
      'Solicitar ecocardiograma sem indicação clínica (reforça a crença de doença cardíaca)',
      'Dizer que "é da cabeça" sem validar os sintomas físicos',
      'Prescrever benzodiazepínico de manutenção',
      'Não orientar sobre a redução da busca por reasseguramento',
      'Não identificar o início de agorafobia (evitação do trabalho)'
    ]
  },
  instD: {
    title: 'CHECKLIST — MULHER QUE ACREDITA TER INFARTO QUANDO O CORAÇÃO DISPARA',
    sections: [
      {
        h: 'COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE',
        items: [
          { item: 'Validou os sintomas físicos como reais ("não é da cabeça")', score: 0.5, ref: 'ABP 2021' },
          { item: 'Recusou ecocardiograma e explicou o motivo adequadamente', score: 0.5, ref: 'CFM — Uso racional de exames, 2022' },
          { item: 'Orientou sobre o ciclo do pânico em linguagem acessível', score: 0.5, ref: 'ABP 2021' }
        ]
      },
      {
        h: 'ANAMNESE',
        items: [
          { item: 'Caracterizou os episódios (início, duração, sintomas, desencadeantes)', score: 0.5, ref: 'DSM-5; ABP 2021' },
          { item: 'Identificou episódio inesperado (em casa) — critério do pânico', score: 0.5, ref: 'DSM-5' },
          { item: 'Investigou evitação e busca por reasseguramento', score: 0.5, ref: 'DSM-5' },
          { item: 'Avaliou risco de suicídio', score: 0.3, ref: 'MS 2022' }
        ]
      },
      {
        h: 'RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
        items: [
          { item: 'Não solicitou novos exames cardiológicos sem indicação', score: 1.0, ref: 'CFM — Uso racional, 2022' },
          { item: 'Formulou transtorno do pânico com diferenciais', score: 0.5, ref: 'DSM-5; ABP 2021' }
        ]
      },
      {
                h: 'CONDUTA E ORIENTAÇÃO AO PACIENTE',
        items: [
          { item: 'Prescreveu ISRS em dose inicial baixa (evitar ativação)', score: 1.0, ref: 'ABP 2021; RENAME 2023' },
          { item: 'Ensinou respiração diafragmática como manejo imediato', score: 0.5, ref: 'ABP 2021' },
          { item: 'Orientou sobre redução da medição de PA', score: 0.5, ref: 'ABP 2021' },
          { item: 'Indicou TCC e retorno em 2 semanas', score: 0.5, ref: 'ABP 2021' }
        ]
      }
    ]
  }
},

// CASO 25
{
  id: 25,
  title: 'Mãe que perdeu o filho há 18 meses e não consegue aceitar que ele morreu',
  sub: 'UBS — Consulta agendada pelo ACS',
  tema: 'psiquiatria',
  topic: 'Transtorno do luto prolongado',
  level: 'moderado',
  cardAccent: '#37474F',
  instA: {
    scenario: 'UBS. Consultório, turno da manhã. ACS trouxe a paciente após visita domiciliar.',
    patient: 'D.M., 52 anos, feminino, dona de casa, casada, dois filhos (um falecido). Filho de 24 anos morreu em acidente de moto há 18 meses.',
    complaint: "ACS relata que a paciente não saiu de casa desde o velório, mantém o quarto do filho intacto como 'museu', não consegue mencionar o nome do filho sem entrar em colapso e diz que a vida 'não faz mais sentido' sem ele.",
    tasks: [
      'Realize a anamnese investigando os critérios do Transtorno do Luto Prolongado (DSM-5-TR).',
      'Diferencie luto normal de luto prolongado e de depressão maior.',
      'Avalie o risco de suicídio.',
      'Formule a hipótese diagnóstica e proponha a conduta.',
      'Comunique o diagnóstico com empatia e respeito ao processo de luto.'
    ]
  },
  instB: {
    vitals: {
      PA: '136/88 mmHg',
      FC: '76 bpm',
      FR: '15 irpm',
      Tax: '36,4°C',
      Peso: '68 kg',
      Altura: '1,60 m',
      IMC: '26,6 kg/m²'
    },
    physicalGeneral: 'Paciente em regular estado geral. Aparência de sofrimento, roupas pretas. Lúcida e orientada. Olhos marejados. Sem sinais de automutilação. Levemente emagrecida (relata ACS — perdeu 6 kg).',
    physicalSeg: 'Estado mental: Humor de dor intensa, não depressão global. Afeto congruente ao tema (chora ao falar do filho, recupera-se ao falar de outros assuntos). Sem alucinações. Pensamento organizado, conteúdo de luto. Insight parcialmente comprometido (não reconhece que precisa de ajuda).',
    labs: [
      { test: 'TSH', val: '2,3 mUI/L', ref: 'Normal', alt: false },
      { test: 'Hemograma', val: 'Normal', ref: '—', alt: false }
    ],
    image: null,
    note: 'Sinais vitais ao início. Exames se solicitados. O candidato deve ser avaliado especialmente pela distinção entre luto normal (sem comprometimento global e com tendência à recuperação progressiva) e transtorno do luto prolongado (comprometimento funcional intenso por >12 meses, saudade incapacitante, dificuldade de aceitar a morte).',
    patientProfile: "D.M., 52 anos, dona de casa. Filho João, 24 anos, morreu há 18 meses em acidente de moto. Marido trabalha e 'tenta seguir em frente'. Filha mais nova mora em outra cidade.",
    script: [
      { trigger: 'Abertura', speech: 'Doutora, meu filho morreu há um ano e meio. As pessoas dizem que é pra eu superar. Mas como supero? Ele era minha vida.' },
      { trigger: 'Sobre o quarto', speech: 'Deixo tudo igualzinho. Quando entro lá parece que ele ainda vai voltar. Não consigo tocar em nada.' },
      { trigger: 'Sobre o cotidiano', speech: 'Não saio mais. Não tenho mais vontade de nada. Quando tentam me tirar de casa sinto que estou abandonando ele.' },
      { trigger: 'Sobre outros momentos de prazer', speech: 'Às vezes rio de uma coisa e depois me sinto culpada. Como posso rir se meu filho está morto?' },
      { trigger: 'Sobre o futuro', speech: 'Não consigo imaginar como vou viver sem ele. A vida não faz sentido sem o João.' },
      { trigger: 'Sobre suicídio', speech: "Só se perguntado: 'Às vezes penso que seria melhor estar com ele. Mas não faria nada — pelo meu marido e pela minha filha.'" },
      { trigger: 'Pergunta ativa', speech: 'Isso vai passar algum dia? Porque parece que não vai.' },
      { trigger: 'Pergunta ativa', speech: 'As pessoas me dizem que é pra aceitar. Como aceita que seu filho morreu?' }
    ],
    hiddenInfo: "Ideação passiva de morte ('seria melhor estar com ele') — revelar apenas com pergunta direta sobre pensamentos de morrer. | Sentimento de culpa ('devia ter proibido de usar moto') — revelar se perguntado sobre pensamentos sobre a morte do filho.",
    actorBehavior: ''
  },
  instC: {
    diagnosis: 'Transtorno do luto prolongado (TLP) — saudade ou preocupação intensa com o filho por >12 meses após a morte, com dificuldade de aceitar a morte, crença de que parte de si morreu com ele, incapacidade de experimentar emoções positivas sem culpa, evitação de lembretes e comprometimento funcional grave (isolamento domiciliar 18 meses). Ideação passiva de morte. CID-11: 6B42 / DSM-5-TR: F43.8.',
    differentials: [
      "Luto normal — a dor da perda de um filho nunca é 'normal' em intensidade; no entanto, no luto não complicado há progressão gradual e preservação de algumas áreas de funcionamento; aqui, 18 meses de isolamento total, incapacidade de mencionar o nome do filho e ideação passiva de morte indicam patologia.",
      'Depressão maior — humor deprimido persistente em todas as áreas; aqui o humor varia com os assuntos (chora com o filho, ri de outro assunto), o que é mais consistente com luto; no entanto, pode ser comórbido.',
      'TEPT — trauma pelo acidente; no entanto, sem os 4 clusters típicos (ausência de flashbacks, pesadelos, hiperexcitabilidade predominante); a apresentação é dominada pela saudade e pela recusa em aceitar a morte.',
      'Transtorno de ajustamento — sintomas desproporcionais ao esperado culturalmente por >6 meses após o evento; excluído pela gravidade e duração (18 meses).'
    ],
    context: '',
    justify: '',
    expectedAnamnesis: '',
    expectedPhysical: '',
    expectedExams: [],
    expectedConduct: "Psicoterapia específica para luto prolongado: Terapia do Luto Complicado (TLC/CGT — Complicated Grief Treatment), desenvolvida por Shear et al. Inclui técnicas de exposição à dor da perda e revisão dos objetivos de vida. (Shear et al., UpToDate 2023; não há diretriz brasileira específica — referenciar ao especialista) | Farmacológica: Se depressão comórbida: ISRS (sertralina). O TLP isolado responde menos a antidepressivos do que à psicoterapia específica. (UpToDate 2023) | Encaminhamento: CAPS II para acompanhamento ou psicólogo com experiência em luto. | Avaliação de suicídio: Ideação passiva presente — estabelecer plano de segurança, combinar retorno breve. | Orientação à família: Explicar que 'superar' não é o objetivo — o objetivo é 'integrar a perda' e retomar a vida com a presença do filho na memória.",
    expectedCommunication: '',
    criticalErrors: [
      "Não avaliar ideação de morte em paciente em luto prolongado com frase 'a vida não faz sentido'",
      "Dizer à paciente que 'precisa superar' ou que 'o tempo cura' (invalida o sofrimento e é clinicamente incorreto)",
      'Diagnosticar depressão maior sem investigar a especificidade do luto',
      'Não encaminhar para psicoterapia específica de luto',
      'Não incluir o marido no plano de cuidado'
    ]
  },
  instD: {
    title: 'CHECKLIST — MÃE QUE NÃO CONSEGUE ACEITAR A MORTE DO FILHO HÁ 18 MESES',
    sections: [
      {
        h: 'COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE',
        items: [
          { item: 'Não usou a expressão "superar" — usou "integrar a perda"', score: 0.5, ref: 'DSM-5-TR; Shear 2023' },
          { item: 'Validou a intensidade da dor sem minimizar', score: 0.5, ref: 'MS — Humanização, 2013' },
          { item: 'Explicou que o objetivo não é esquecer o filho', score: 0.5, ref: 'Shear 2023' }
        ]
      },
      {
        h: 'ANAMNESE',
        items: [
          { item: 'Investigou saudade intensa e dificuldade de aceitar a morte', score: 0.5, ref: 'DSM-5-TR' },
          { item: 'Investigou comprometimento funcional (isolamento, trabalho, social)', score: 0.5, ref: 'DSM-5-TR' },
          { item: 'Avaliou diretamente ideação de morte ("seria melhor estar com ele")', score: 1.0, ref: 'MS — PCDT Suicídio, 2022' },
          { item: 'Investigou culpa e crença de que parte de si morreu', score: 0.5, ref: 'DSM-5-TR' }
        ]
      },
      {
        h: 'RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
        items: [
          { item: 'Diferenciou luto prolongado de depressão maior', score: 0.5, ref: 'DSM-5-TR' },
          { item: 'Confirmou duração >12 meses como critério diagnóstico', score: 0.5, ref: 'DSM-5-TR' }
        ]
      },
      {
        h: 'CONDUTA E ORIENTAÇÃO AO PACIENTE',
        items: [
          { item: 'Indicou psicoterapia específica para luto (TLC/CGT)', score: 1.0, ref: 'Shear 2023' },
          { item: 'Estabeleceu plano de segurança para ideação passiva', score: 1.0, ref: 'MS — PCDT Suicídio, 2022' },
          { item: 'Incluiu o marido e a família no plano de cuidado', score: 0.5, ref: 'MS — Humanização, 2013' }
        ]
      }
    ]
  }
},

// CASO 26
{
  id: 26,
  title: 'Homem que se jogou da maca do PS e está gritando que vai morrer',
  sub: 'PS — Emergência Psiquiátrica',
  tema: 'psiquiatria',
  topic: "Emergência psiquiátrica — agitação psicomotora por mania aguda",
  level: 'moderado',
  cardAccent: '#BF360C',
  instA: {
    scenario: "PS de Hospital Geral. Sala de emergência psiquiátrica, turno noturno. Paciente foi trazido pela família por agitação crescente há 48 horas. Ao chegar ao PS, pulou da maca e está andando pelo corredor gritando que 'tem uma missão divina'.",
    patient: 'R.T., 35 anos, masculino, pastor, casado. Em uso irregular de valproato para TAB diagnosticado há 4 anos.',
    complaint: "Família relata 4 dias sem dormir, gastos impulsivos de R$20.000 em 'projetos missionários', comportamento grandioso e agressivo. Abandonou o valproato há 6 semanas.",
    tasks: [
      'Realize a abordagem inicial do paciente agitado, priorizando segurança e contenção verbal.',
      'Investigue possíveis causas orgânicas da agitação.',
      'Proponha a conduta de contenção farmacológica adequada.',
      'Solicite exames pertinentes.',
      'Comunique à família o diagnóstico e o plano de manejo.'
    ]
  },
  instB: {
    vitals: {
      PA: '148/92 mmHg',
      FC: '118 bpm',
      FR: '20 irpm',
      Tax: '37,0°C',
      Peso: '86 kg',
      Altura: '1,78 m',
      IMC: '27,1 kg/m²'
    },
    physicalGeneral: 'Paciente em mau estado geral por privação de sono (olhos avermelhados). Agitado, andando pelo corredor. Discurso grandioso e acelerado. Lúcido mas com julgamento gravemente comprometido. Sem sinais de intoxicação.',
    physicalSeg: 'Estado mental: Humor eufórico/irritável. Logorreia. Fuga de ideias. Grandiosidade. Sem alucinações evidentes. Insight ausente. | Neurológico: Sem déficits focais.',
    labs: [
      { test: 'Glicemia', val: '102 mg/dL', ref: '70–140', alt: false },
      { test: 'Sódio', val: '140 mEq/L', ref: '135–145', alt: false },
      { test: 'Valproato sérico', val: '8 µg/mL', ref: '50–100 µg/mL', alt: true },
      { test: 'Toxicológico', val: 'Negativo', ref: 'Negativo', alt: false },
      { test: 'ECG', val: 'Taquicardia sinusal, QTc 420 ms', ref: 'Normal', alt: false }
    ],
    image: null,
    note: 'Sinais vitais ao início. O valproato subterapêutico confirma abandono medicamentoso. O candidato deve ser avaliado especialmente pela prioridade da contenção verbal, pela não confrontação direta dos conteúdos maníacos religiosos e pela escolha da contenção farmacológica adequada.',
    patientProfile: '',
    script: [
      { trigger: 'Abordagem inicial', speech: 'Eu tenho uma missão! Deus me escolheu! Vocês não podem me parar!' },
      { trigger: 'Após abordagem calma', speech: 'Por que vocês me trouxeram aqui? Estou ótimo! Nunca me senti tão bem!' },
      { trigger: 'Sobre o sono', speech: 'Não preciso dormir! Durmo quando a missão acabar!' },
      { trigger: 'Script da família', speech: "Doutor, ele está assim há 4 dias. Já gastou tudo que tinha. Estava tomando valproato mas parou porque disse que estava 'curado'." },
      { trigger: 'Pergunta ativa da família', speech: 'Vai precisar internar? Ele aceita?' }
    ],
    hiddenInfo: 'Parou o valproato por conta própria (valproato sérico subterapêutico confirma) — revelar via exame laboratorial.',
    actorBehavior: ''
  },
  instC: {
    diagnosis: 'TAB tipo I — episódio maníaco grave com sintomas psicóticos (grandiosidade com conteúdo religioso). Valproato subterapêutico por abandono. CID-11: 6A60 / DSM-5: F31.2.',
    differentials: [
      'Mania induzida por substância — toxicológico negativo afasta.',
      'Episódio psicótico agudo — sem sintomas negativos, sem delírios persecutórios; a grandiosidade e a euforia são mais consistentes com mania.',
      'Hipertireoidismo — TSH não disponível ainda mas quadro clínico favorece mania.',
      'Encefalopatia — glicemia e eletrólitos normais, sem rebaixamento de consciência.'
    ],
    context: '',
    justify: '',
    expectedAnamnesis: '',
    expectedPhysical: '',
    expectedExams: [],
    expectedConduct: 'Contenção verbal obrigatória primeiro: Tom calmo, identificar-se, não confrontar os conteúdos religiosos. | Contenção farmacológica (se falha verbal): Haloperidol 5 mg IM + Prometazina 25 mg IM OU Midazolam 15 mg IM. (CFM nº 1.720/2004; MS 2023) | Reiniciar valproato: Carga de valproato IV ou VO para atingir nível terapêutico rapidamente. | Internação: Indicada — mania grave com 4 dias sem dormir, gastos impulsivos, insight ausente. | Não confrontar o conteúdo religioso: Agrava a agitação.',
    expectedCommunication: '',
    criticalErrors: [
      'Confrontar diretamente os conteúdos religiosos delirantes',
      'Realizar contenção física antes de tentar contenção verbal',
      'Não verificar o nível sérico de valproato (confirma abandono)',
      'Usar clorpromazina (reduz limiar convulsivante)',
      'Alta sem internação em episódio maníaco grave com insight ausente'
    ]
  },
  instD: {
    title: 'CHECKLIST — HOMEM QUE SE JOGOU DA MACA E GRITA QUE TEM MISSÃO DIVINA',
    sections: [
      {
        h: 'COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE',
        items: [
          { item: 'Não confrontou os conteúdos religiosos', score: 0.5, ref: 'CFM 1.720/2004' },
          { item: 'Tentou contenção verbal antes de qualquer medida farmacológica', score: 1.0, ref: 'CFM 1.720/2004' },
          { item: 'Orientou família sobre diagnóstico e internação', score: 0.5, ref: 'Lei 10.216/2001' }
        ]
      },
      {
        h: 'ANAMNESE',
        items: [
          { item: 'Obteve história do abandono do valproato com a família', score: 0.5, ref: 'ABP 2021' },
          { item: 'Investigou duração do episódio e dias sem dormir', score: 0.5, ref: 'ABP 2021' }
        ]
      },
      {
        h: 'EXAME FÍSICO',
        items: [
          { item: 'Avaliou sinais vitais e estado mental', score: 0.3, ref: 'ABP 2021' }
        ]
      },
      {
        h: 'RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
        items: [
          { item: 'Solicitou valproato sérico', score: 1.0, ref: 'ABP 2021' },
          { item: 'Solicitou toxicológico e glicemia', score: 0.5, ref: 'ABP 2021' },
          { item: 'Formulou TAB — episódio maníaco grave', score: 0.5, ref: 'DSM-5' }
        ]
      },
      {
        h: 'CONDUTA E ORIENTAÇÃO AO PACIENTE',
        items: [
          { item: 'Prescreveu contenção farmacológica correta (haloperidol + prometazina IM)', score: 1.0, ref: 'CFM 1.720/2004; RENAME 2023' },
          { item: 'Reiniciou valproato VO com dose de ataque', score: 0.5, ref: 'ABP 2021; RENAME 2023' },
          { item: 'Indicou internação psiquiátrica', score: 0.7, ref: 'Lei 10.216/2001' }
        ]
      }
    ]
  }
},

// CASO 27
{
  id: 27,
  title: 'Mulher que tomou todos os remédios da cômoda depois de briga com namorado',
  sub: 'UPA — Urgência e Emergência',
  tema: 'psiquiatria',
  topic: 'Emergência psiquiátrica — tentativa de suicídio por intoxicação medicamentosa',
  level: 'moderado',
  cardAccent: '#880E4F',
  instA: {
    scenario: 'UPA 24h. Sala de observação, turno da noite. Paciente trazida pela amiga após ingerir medicamentos. SAMU realizou lavagem gástrica no domicílio. Chegou orientada, com hálito de comprimidos. ECG feito na chegada.',
    patient: 'L.P., 24 anos, feminino, recepcionista, namorada há 2 anos. Sem diagnóstico psiquiátrico prévio documentado.',
    complaint: "Amiga relata que a paciente teve briga intensa com o namorado, foi ao quarto e tomou 'vários remédios da cômoda da mãe'. A paciente diz que 'queria que parassem de brigar', mas também diz que 'não queria mais viver'.",
    tasks: [
      'Realize a avaliação clínica inicial e determine o risco imediato de vida.',
      'Realize a avaliação do risco de suicídio de forma estruturada e empática.',
      'Investigue o contexto, a intenção e os fatores de risco e proteção.',
      'Proponha a conduta imediata e o encaminhamento adequado.',
      'Comunique a conduta à paciente e ao familiar presente.'
    ]
  },
  instB: {
    vitals: {
      PA: '104/68 mmHg',
      FC: '88 bpm',
      FR: '16 irpm',
      Tax: '36,5°C',
      Peso: '58 kg',
      Altura: '1,62 m',
      IMC: '22,1 kg/m²'
    },
    physicalGeneral: 'Paciente em regular estado geral, chorosa, cooperativa. Lúcida e orientada. Glasgow 15. Sem evidência de apneia. Hálito de comprimidos. Sem sinais de trauma externo. Pupilas isocóricas fotorreagentes (3 mm).',
    physicalSeg: "Neurológico: Glasgow 15. Sem déficits focais. Reflexos normais. | Cardiovascular: BRNF. FC levemente elevada. | Estado mental: Humor disfórico, afeto lábil (choro fácil). Pensamento organizado. Sem psicose. Ambivalência presente ('não queria morrer, mas não aguentava mais').",
    labs: [
      { test: 'SatO2', val: '97% AA', ref: '95–100%', alt: false },
      { test: 'ECG', val: 'Ritmo sinusal, QTc 440 ms, sem alargamento de QRS', ref: 'Normal', alt: false },
      { test: 'Glicemia', val: '96 mg/dL', ref: '70–140', alt: false },
      { test: 'Sódio', val: '139 mEq/L', ref: '135–145', alt: false },
      { test: 'Paracetamol sérico', val: '48 µg/mL', ref: '<10 µg/mL (tóxico >150 nas primeiras 4h)', alt: true },
      { test: 'TGO', val: '28 U/L', ref: '<40', alt: false },
      { test: 'Toxicológico geral', val: 'Positivo paracetamol e diazepam', ref: '—', alt: true }
    ],
    image: null,
    note: 'Sinais vitais e ECG entregues ao início. Exames disponíveis se solicitados. O nível de paracetamol (48 µg/mL) é subtóxico nas primeiras 4h mas requer monitoramento. O candidato deve ser avaliado pela avaliação estruturada do risco de suicídio E pela conduta clínica para a intoxicação.',
    patientProfile: '',
    script: [
      { trigger: 'Abordagem inicial', speech: 'Eu não queria que ele fosse embora. Tomei os remédios sem pensar. Mas também estava tão cansada de tudo...' },
      { trigger: 'Sobre a intenção', speech: 'Não sei bem o que eu queria. Parte de mim queria morrer. Mas quando a Bruna chegou, fiquei aliviada.' },
      { trigger: 'Sobre o plano', speech: 'Não planejei. Foi impulsivo. Vi os remédios e tomei.' },
      { trigger: 'Sobre o namorado', speech: 'A gente briga muito. Ele me chama de histérica. Já terminou três vezes.' },
      { trigger: 'Sobre tentativas anteriores', speech: "Só se perguntado: 'Uma vez me cortei nos pulsos há 1 ano. Mas foi leve.'" },
      { trigger: 'Sobre fatores de proteção', speech: 'Tenho minha mãe. Ela vai ficar destruída. Não quero machucar ela.' },
      { trigger: 'Pergunta ativa', speech: 'Vão internar? Não quero que minha mãe saiba.' }
    ],
    hiddenInfo: 'Automutilação prévia há 1 ano (corte superficial de pulso) — revelar apenas com pergunta direta sobre tentativas anteriores.',
    actorBehavior: ''
  },
  instC: {
    diagnosis: "Tentativa de suicídio por intoxicação medicamentosa (paracetamol + diazepam), impulsiva, em contexto de crise relacional aguda. Risco de suicídio ALTO (tentativa prévia, intenção ambivalente mas presente, impulsividade, relacionamento instável). Possível transtorno de personalidade borderline a investigar. CID-11: MB26.B / F60.31 a investigar / DSM-5: Z91.5.",
    differentials: [
      "Gesto manipulativo sem intenção de morrer — a ambivalência é real ('parte de mim queria morrer') e há tentativa prévia; NÃO minimizar como 'só fez pra chamar atenção'.",
      'Depressão maior com tentativa — investigar critérios completos de depressão em avaliação posterior.',
      'Transtorno de personalidade borderline — instabilidade emocional, automutilação prévia, relacionamentos instáveis, impulsividade; diagnóstico formal requer avaliação longitudinal.'
    ],
    context: '',
    justify: '',
    expectedAnamnesis: '',
    expectedPhysical: '',
    expectedExams: [],
    expectedConduct: "Conduta Clínica: Monitorizar paracetamol em 4h (nomograma de Rumack-Matthew); se atingir nível tóxico: N-acetilcisteína IV. ECG seriado (diazepam + outros possíveis). Manter em observação mínimo 12h após intoxicação. | Conduta Psiquiátrica: Internação psiquiátrica voluntária — risco ALTO (tentativa com plano e acesso, impulsividade, tentativa anterior, ambivalência sobre morte). Comunicar à mãe com consentimento da paciente — familiares são fatores de proteção essenciais. Não minimizar como 'só foi porque brigou' — isso aumenta o risco.",
    expectedCommunication: '',
    criticalErrors: [
      "Minimizar a tentativa como 'gesto' sem avaliar o risco formalmente",
      'Não monitorar paracetamol sérico seriado (hepatotoxicidade tardia mesmo em nível inicial subtóxico)',
      'Não investigar tentativas anteriores de automutilação',
      'Alta sem avaliação psiquiátrica e sem internação indicada',
      'Não comunicar à família sem levar em conta o papel protetivo da mãe'
    ]
  },
  instD: {
    title: 'CHECKLIST — MULHER QUE TOMOU REMÉDIOS DEPOIS DE BRIGA COM NAMORADO',
    sections: [
      {
        h: 'COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE',
        items: [
          { item: 'Abordou sem minimizar ("só foi porque brigou")', score: 0.5, ref: 'MS — PCDT Suicídio, 2022' },
          { item: 'Validou o sofrimento com empatia', score: 0.5, ref: 'MS — PCDT Suicídio, 2022' },
          { item: 'Abordou comunicação à mãe como fator de proteção', score: 0.3, ref: 'MS — PCDT Suicídio, 2022' }
        ]
      },
      {
        h: 'ANAMNESE',
        items: [
          { item: 'Investigou intenção real de morrer (além do contexto relacional)', score: 1.0, ref: 'MS — PCDT Suicídio, 2022' },
          { item: 'Perguntou sobre tentativas anteriores de automutilação', score: 1.0, ref: 'MS — PCDT Suicídio, 2022' },
          { item: 'Investigou fatores de proteção (mãe)', score: 0.5, ref: 'MS — PCDT Suicídio, 2022' }
        ]
      },
      {
        h: 'EXAME FÍSICO',
        items: [
          { item: 'Avaliou Glasgow e estado mental (ambivalência, psicose)', score: 0.5, ref: 'MS — PCDT Suicídio, 2022' }
        ]
      },
      {
        h: 'RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
        items: [
          { item: 'Solicitou paracetamol sérico e ECG', score: 1.0, ref: 'Toxicologia Clínica — FMUSP' },
          { item: 'Classificou risco de suicídio como ALTO', score: 0.5, ref: 'MS — PCDT Suicídio, 2022' }
        ]
      },
      {
        h: 'CONDUTA E ORIENTAÇÃO AO PACIENTE',
        items: [
          { item: 'Indicou internação psiquiátrica como conduta adequada', score: 1.0, ref: 'Lei 10.216/2001' },
          { item: 'Indicou monitoramento de paracetamol seriado', score: 0.5, ref: 'Toxicologia Clínica — FMUSP' },
          { item: 'Envolveu a mãe no plano de cuidado', score: 0.5, ref: 'MS — PCDT Suicídio, 2022' }
        ]
      }
    ]
  }
},

// CASO 28
{
  id: 28,
  title: "Paciente com esclerose múltipla que 'deixou de ser ela mesma' após o diagnóstico",
  sub: 'Ambulatório de Neurologia / Psiquiatria de Ligação',
  tema: 'psiquiatria',
  topic: 'Medicina psicossomática — transtorno depressivo em doença crônica (EM)',
  level: 'moderado',
  cardAccent: '#6A1B9A',
  instA: {
    scenario: "Ambulatório de Neurologia — interconsulta de psiquiatria. Neurologista solicitou avaliação de 'estado depressivo' em paciente com EM.",
    patient: 'A.S., 36 anos, feminino, arquiteta (trabalho remoto), casada. Diagnóstico de esclerose múltipla recorrente-remitente há 8 meses.',
    complaint: "Paciente relata que desde o diagnóstico 'deixou de ser ela mesma': perdeu o prazer no trabalho, chora com frequência, não se sente mais capaz de planejar o futuro e tem pensamentos de que 'seria melhor não saber que tem isso'. Neurologista relata que a fadiga da EM pode explicar parte dos sintomas, mas a intensidade do quadro afetivo preocupa.",
    tasks: [
      'Realize a anamnese distinguindo sintomas depressivos dos sintomas neurológicos da EM (fadiga, lentidão cognitiva).',
      'Avalie o risco de suicídio.',
      'Formule a hipótese diagnóstica.',
      'Proponha a conduta integrada (psiquiatria + neurologia).',
      'Comunique o diagnóstico com sensibilidade ao impacto do diagnóstico de EM.'
    ]
  },
  instB: {
    vitals: {
      PA: '116/74 mmHg',
      FC: '76 bpm',
      FR: '15 irpm',
      Tax: '36,5°C',
      Peso: '62 kg',
      Altura: '1,65 m',
      IMC: '22,8 kg/m²'
    },
    physicalGeneral: 'Paciente em regular estado geral. Fácies de tristeza. Lúcida, orientada. Leve fadiga visível. Sem déficits motores no momento. Contato visual preservado.',
    physicalSeg: '',
    labs: [
      { test: 'TSH', val: '2,0 (normal)', ref: 'Normal', alt: false },
      { test: 'Hemograma', val: 'Normal', ref: '—', alt: false },
      { test: 'Vitamina D', val: '18 ng/mL', ref: '>30 ng/mL', alt: true }
    ],
    image: null,
    note: 'Sinais vitais ao início. O candidato deve ser avaliado pela distinção entre fadiga neurológica da EM (constante, piorada pelo esforço, sem variação diurna) e depressão (humor deprimido persistente, anedonia, ideação suicida), e pela escolha do antidepressivo mais adequado na EM.',
    patientProfile: '',
    script: [
      { trigger: 'Abertura', speech: 'Não sou mais a mesma pessoa. Antes adorava trabalhar, criar, planejar. Agora não consigo nem olhar para os projetos. O diagnóstico destruiu quem eu era.' },
      { trigger: 'Sobre o humor', speech: 'Choro quase todo dia. Não consigo imaginar o futuro — como vou trabalhar, ter filhos, ficar velha com essa doença?' },
      { trigger: 'Sobre a fadiga', speech: 'Fico muito cansada. Mas a tristeza é diferente da fadiga — mesmo descansada, não tenho vontade de nada.' },
      { trigger: 'Sobre anedonia', speech: 'Antes amava jazz, arquitetura, sair com amigas. Agora nada me dá prazer. Fico no celular sem fazer nada.' },
      { trigger: 'Sobre suicídio', speech: 'Já pensei que seria melhor não ter esse diagnóstico. Às vezes acho que quem não sabe vive melhor. Mas não penso em me machucar.' },
      { trigger: 'Sobre o marido', speech: 'Ele está sendo incrível. Mas sinto que sou um peso.' },
      { trigger: 'Pergunta ativa', speech: 'Posso tomar antidepressivo junto com o medicamento da EM (Interferon beta)?' }
    ],
    hiddenInfo: "Deficiência de vitamina D (18 ng/mL) — associada a piora da EM e da depressão; revelar via exames. | Pensamento de 'seria melhor não saber que tem isso' — pode ser interpretado como ideação passiva de morte ou como negação do diagnóstico; investigar com cuidado.",
    actorBehavior: ''
  },
  instC: {
    diagnosis: 'Episódio depressivo maior em paciente com esclerose múltipla — depressão é a comorbidade psiquiátrica mais comum na EM (prevalência 50%). Anedonia, humor deprimido, incapacidade de imaginar o futuro e ideação passiva distintos da fadiga neurológica da EM. CID-11: 6A70.1 / DSM-5: F32.1.',
    differentials: [
      'Fadiga neurológica da EM — constante, piora com esforço/calor (fenômeno de Uhthoff), sem variação diurna; a depressão tem variação de humor, anedonia e ideação suicida ausentes na fadiga pura.',
      'Pseudobulbar da EM (choro patológico) — riso/choro involuntários sem congruência com o humor; excluído pelo contexto emocional congruente.',
      'Transtorno de ajustamento com humor deprimido — resposta adaptativa ao diagnóstico; excluído pela intensidade, anedonia global e ideação passiva de morte.',
      'Hipotireoidismo — TSH normal afasta.'
    ],
    context: '',
    justify: '',
    expectedAnamnesis: '',
    expectedPhysical: '',
    expectedExams: [],
    expectedConduct: "Farmacológica: ISRS — Sertralina 50 mg/dia (melhor perfil de segurança na EM, sem interações significativas com Interferon beta). Evitar amitriptilina (efeitos anticolinérgicos piores na EM, constipação, retenção urinária). (UpToDate 2024 — não há PCDT brasileiro específico para depressão na EM) | Vitamina D: Suplementar — deficiência de vitamina D piora a EM e pode piorar a depressão. | Não farmacológico: TCC — eficaz tanto para depressão quanto para adaptação à doença crônica. Grupos de apoio para pacientes com EM. | Psicoeducação: Explicar que depressão na EM é uma comorbidade médica real, não 'fraqueza', e que é mais prevalente do que na população geral pela própria neurobiologia da doença. | Integração neurologia-psiquiatria: Comunicar ao neurologista sobre o tratamento antidepressivo.",
    expectedCommunication: '',
    criticalErrors: [
      'Não distinguir depressão da fadiga neurológica da EM (pode levar a subtratamento)',
      'Prescrever amitriptilina em paciente com EM (efeitos anticolinérgicos problemáticos)',
      'Não avaliar risco de suicídio em paciente com doença crônica e ideação passiva',
      'Não comunicar ao neurologista sobre o tratamento antidepressivo',
      'Não corrigir a vitamina D'
    ]
  },
  instD: {
    title: 'CHECKLIST — ARQUITETA COM ESCLEROSE MÚLTIPLA QUE DEIXOU DE SER ELA MESMA',
    sections: [
      {
        h: 'COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE',
        items: [
          { item: 'Abordou o impacto emocional do diagnóstico de EM com empatia', score: 0.5, ref: 'MS — Humanização, 2013' },
          { item: 'Explicou que depressão na EM é neurobiológica, não fraqueza', score: 0.5, ref: 'UpToDate 2024' }
        ]
      },
      {
        h: 'ANAMNESE',
        items: [
          { item: 'Distinguiu sintomas depressivos da fadiga neurológica da EM', score: 1.0, ref: 'UpToDate 2024' },
          { item: 'Avaliou diretamente o risco de suicídio', score: 1.0, ref: 'MS — PCDT Suicídio, 2022' },
          { item: 'Investigou anedonia e incapacidade de imaginar o futuro', score: 0.5, ref: 'DSM-5' }
        ]
      },
      {
        h: 'EXAME FÍSICO',
        items: [
          { item: 'Avaliou estado mental (humor, anedonia, pensamento)', score: 0.5, ref: 'DSM-5' }
        ]
      },
      {
        h: 'RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
        items: [
          { item: 'Solicitou/verificou TSH e vitamina D', score: 0.5, ref: 'UpToDate 2024' },
          { item: 'Formulou depressão maior em EM (comorbidade)', score: 1.0, ref: 'DSM-5; UpToDate 2024' }
        ]
      },
      {
        h: 'CONDUTA E ORIENTAÇÃO AO PACIENTE',
        items: [
          { item: 'Prescreveu ISRS adequado na EM (sertralina)', score: 1.0, ref: '⚠️ UpToDate 2024; RENAME 2023' },
          { item: 'Não prescreveu amitriptilina (contraindicada na EM)', score: 0.5, ref: '⚠️ UpToDate 2024' },
          { item: 'Comunicou ao neurologista sobre tratamento', score: 0.5, ref: 'CFM 1.931/2009' },
          { item: 'Indicou TCC e vitamina D', score: 0.5, ref: 'UpToDate 2024; SBEM 2022' }
        ]
      }
    ]
  }
},

// CASO 29
{
  id: 29,
  title: "Adolescente de 16 anos pesando 39 kg que diz estar 'acima do peso ideal'",
  sub: 'UBS — Encaminhamento da escola',
  tema: 'psiquiatria',
  topic: 'Anorexia nervosa — tipo restritivo',
  level: 'moderado',
  cardAccent: '#AD1457',
  instA: {
    scenario: 'UBS. Consultório, turno da tarde. Professora de educação física encaminhou a aluna após perceber perda de peso intensa e desmaio na aula.',
    patient: 'B.R., 16 anos, feminino, estudante do 2º ano do ensino médio, mora com os pais.',
    complaint: "Mãe relata que a filha 'faz dieta há 8 meses' e perdeu 18 kg nesse período. A paciente diz estar 'ainda acima do peso' mesmo pesando 39 kg para 1,62 m. Teve um desmaio na aula de educação física.",
    tasks: [
      'Realize a anamnese com a paciente e a mãe investigando o padrão alimentar, a imagem corporal e os comportamentos de restrição.',
      'Avalie os riscos clínicos imediatos da desnutrição (cardiovascular, eletrolítico).',
      'Identifique critérios diagnósticos para anorexia nervosa.',
      'Proponha a conduta e o nível de cuidado adequado.',
      'Comunique à paciente e à mãe de forma empática.'
    ]
  },
  instB: {
    vitals: {
      PA: '88/58 mmHg',
      FC: '54 bpm (bradicardia)',
      FR: '14 irpm',
      Tax: '35,8°C (hipotermia)',
      Peso: '39 kg',
      Altura: '1,62 m',
      IMC: '14,8 kg/m²'
    },
    physicalGeneral: 'Paciente muito emagrecida, caquética. Cabelos finos e quebradiços. Pele seca, lanugem em braços e abdome. Lúcida e orientada. Hipotensa e bradicárdica. Hipotérmica. Sem edema. Sem icterícia.',
    physicalSeg: 'Cardiovascular: Bradicardia sinusal (54 bpm). BRNF. Sem sopros. | Neurológico: Lúcida. Cabelo com alopecia difusa. | Dermatológico: Lanugem, cabelo quebradiço, unhas frágeis.',
    labs: [
      { test: 'Potássio', val: '2,9 mEq/L', ref: '3,5–5,0', alt: true },
      { test: 'Sódio', val: '132 mEq/L', ref: '135–145', alt: true },
      { test: 'Glicemia', val: '58 mg/dL', ref: '70–99', alt: true },
      { test: 'Hemograma', val: 'Hb 9,8 g/dL (anemia)', ref: '>12 (F)', alt: true },
      { test: 'ECG', val: 'Bradicardia sinusal, QTc 468 ms (limítrofe)', ref: '<450 ms (F)', alt: true },
      { test: 'FSH/LH', val: 'Suprimidos', ref: '—', alt: true },
      { test: 'TSH', val: '1,6 (normal)', ref: '0,4–4,0', alt: false }
    ],
    image: null,
    note: 'Sinais vitais ao início — chamar atenção para a tríade: bradicardia + hipotensão + hipotermia (critérios de instabilidade clínica). Exames disponíveis se solicitados. O candidato deve ser avaliado especialmente pelo reconhecimento dos critérios de internação hospitalar urgente (instabilidade clínica) e pela NÃO confrontação direta da distorção da imagem corporal.',
    patientProfile: '',
    script: [
      { trigger: 'Abertura', speech: 'Eu tô bem. Só desmaiei porque tava calor. Não precisava vir aqui.' },
      { trigger: 'Sobre o peso', speech: '39 kg ainda é muito pra mim. Meu peso ideal é 35 kg. Eu preciso emagrecer mais.' },
      { trigger: 'Sobre a alimentação', speech: 'Como o suficiente. Tomo café com adoçante e uma fruta de manhã. No almoço como um pouco de salada. À noite nada. Faço isso há 8 meses.' },
      { trigger: 'Sobre o desmaio', speech: 'Foi só de calor. Acontece.' },
      { trigger: 'Sobre menstruação', speech: 'Parei de menstruar faz 5 meses. Acho bom, menos uma preocupação.' },
      { trigger: 'Script da mãe', speech: 'Doutor, ela era gordinha e começou a dieta. A gente achou que era saudável. Mas foi ficando mais e mais. Não consigo convencê-la que ela não está gorda. Ela está sumindo na nossa frente.' },
      { trigger: 'Pergunta ativa da paciente', speech: 'Vão me internar pra me engordar?' },
      { trigger: 'Pergunta ativa da mãe', speech: 'Isso tem cura? Ela vai voltar a comer normal?' }
    ],
    hiddenInfo: 'Amenorreia há 5 meses (critério de gravidade) — revelar se perguntado sobre menstruação. | Faz exercício excessivo de 2h/dia escondida dos pais — revelar apenas se perguntado sobre atividade física.',
    actorBehavior: ''
  },
  instC: {
    diagnosis: 'Anorexia nervosa, tipo restritivo, gravidade extrema (IMC 14,8 kg/m²). Com sinais de instabilidade clínica: bradicardia, hipotensão, hipotermia, hipoglicemia, hipopotassemia, hiponatremia, amenorreia e QTc limítrofe. CID-11: 6B80 / DSM-5: F50.01.',
    differentials: [
      'Perda de peso por doença orgânica (neoplasia, doença inflamatória intestinal, diabetes tipo 1) — a distorção da imagem corporal e a restrição alimentar voluntária intencional diferenciam a AN de causas orgânicas; TSH normal, sem outros sinais sistêmicos de doença.',
      'Depressão maior com perda de apetite — na depressão a perda de peso é secundária à anorexia afetiva, sem distorção da imagem corporal ou medo intenso de ganhar peso.',
      'Hipotireoidismo — pode causar perda de peso ou ganho; TSH normal afasta.',
      'Bulimia nervosa — sem episódios de compulsão e purgação relatados; IMC muito abaixo do normal (na BN geralmente IMC normal).'
    ],
    context: '',
    justify: '',
    expectedAnamnesis: '',
    expectedPhysical: '',
    expectedExams: [],
    expectedConduct: "INTERNAÇÃO HOSPITALAR URGENTE — critérios de instabilidade clínica presentes (bradicardia <60, hipotensão, hipoglicemia, hipopotassemia, hipotermia, QTc limítrofe). Não manejar ambulatorialmente. | Clínica imediata: Monitorização cardíaca contínua. Reposição de potássio e sódio EV. Correção da hipoglicemia. Aquecimento passivo. | Nutrição: Realimentação gradual e supervisionada (risco de síndrome de realimentação — hipofosfatemia grave com realimentação rápida). Equipe de nutrição especializada em TA. | Não confrontar a distorção da imagem corporal diretamente — agrava a resistência. | Equipe multiprofissional: Pediatria/clínica, psiquiatria, psicologia, nutrição, endocrinologia (amenorreia). | Comunicação: Não usar linguagem que foque no peso ('vamos te engordar') — usar 'vamos cuidar da sua saúde'.",
    expectedCommunication: '',
    criticalErrors: [
      'Alta domiciliar com paciente em instabilidade clínica (bradicardia, hipotensão, hipoglicemia)',
      'Confrontar diretamente a distorção da imagem corporal ("você não está gorda, está esquelética")',
      'Iniciar realimentação rápida sem monitorização de fósforo (síndrome de realimentação)',
      'Não solicitar ECG em paciente com anorexia grave (risco de arritmia por distúrbio eletrolítico)',
      'Não envolver equipe multiprofissional'
    ]
  },
  instD: {
    title: 'CHECKLIST — ADOLESCENTE DE 16 ANOS COM 39 KG QUE DIZ ESTAR ACIMA DO PESO',
    sections: [
      {
        h: 'COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE',
        items: [
          { item: 'Não usou linguagem focada em engordar', score: 0.5, ref: 'ABP — TA, 2022' },
          { item: 'Não confrontou a distorção da imagem corporal diretamente', score: 0.5, ref: 'ABP — TA, 2022' },
          { item: 'Acolheu a mãe e explicou a gravidade sem catastrofizar', score: 0.5, ref: 'MS — Humanização, 2013' }
        ]
      },
      {
        h: 'ANAMNESE',
        items: [
          { item: 'Investigou padrão alimentar detalhado (tipo, quantidade, horários)', score: 0.5, ref: 'ABP — TA, 2022' },
          { item: 'Pesquisou amenorreia (gravidade)', score: 0.5, ref: 'ABP — TA, 2022' },
          { item: 'Pesquisou exercício excessivo', score: 0.3, ref: 'ABP — TA, 2022' }
        ]
      },
      {
        h: 'EXAME FÍSICO',
        items: [
          { item: 'Identificou tríade de instabilidade (bradicardia + hipotensão + hipotermia)', score: 1.0, ref: 'ABP — TA, 2022' }
        ]
      },
      {
        h: 'RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
        items: [
          { item: 'Solicitou ECG, eletrólitos e glicemia', score: 1.0, ref: 'ABP — TA, 2022' },
          { item: 'Formulou AN tipo restritivo com instabilidade clínica', score: 0.5, ref: 'DSM-5; ABP — TA, 2022' }
        ]
      },
      {
        h: 'CONDUTA E ORIENTAÇÃO AO PACIENTE',
        items: [
          { item: 'Indicou internação hospitalar urgente (instabilidade)', score: 1.5, ref: 'ABP — TA, 2022' },
          { item: 'Mencionou risco de síndrome de realimentação', score: 0.5, ref: 'ABP — TA, 2022' },
          { item: 'Indicou equipe multiprofissional', score: 0.5, ref: 'ABP — TA, 2022' },
          { item: 'Não confrontou a distorção de imagem', score: 0.2, ref: 'ABP — TA, 2022' }
        ]
      }
    ]
  }
},

// CASO 30
{
  id: 30,
  title: 'Jovem que come escondido à noite e se envergonha do próprio corpo',
  sub: 'UBS — Consulta agendada',
  tema: 'psiquiatria',
  topic: 'Bulimia nervosa',
  level: 'moderado',
  cardAccent: '#E65100',
  instA: {
    scenario: 'UBS. Consultório, turno vespertino. Paciente veio por iniciativa própria, sozinha.',
    patient: 'P.S., 19 anos, feminino, estudante universitária (nutrição), mora em república. IMC 23,4 kg/m².',
    complaint: "Paciente relata episódios frequentes de comer 'muito mais do que deveria' à noite, escondida das colegas, com sensação de perda de controle, seguidos de vômito induzido para 'compensar'. Diz estar com 'vergonha do próprio corpo' e que não consegue parar.",
    tasks: [
      'Realize a anamnese investigando os critérios diagnósticos de bulimia nervosa (compulsão, comportamento purgativo, frequência, distorção corporal).',
      'Avalie as complicações clínicas dos vômitos (eletrólitos, dentição, esôfago, mãos).',
      'Avalie comorbidades: depressão, ansiedade, automutilação.',
      'Formule o diagnóstico e proponha o tratamento.',
      'Comunique o diagnóstico sem estigmatizar.'
    ]
  },
  instB: {
    vitals: {
      PA: '108/70 mmHg',
      FC: '76 bpm',
      FR: '16 irpm',
      Tax: '36,5°C',
      Peso: '61 kg',
      Altura: '1,62 m',
      IMC: '23,4 kg/m²'
    },
    physicalGeneral: 'Paciente em bom estado geral. IMC normal. Erosões dentárias visíveis (ácido gástrico). Calosidades nos nós dos dedos da mão direita (sinal de Russell). Lúcida, orientada, levemente envergonhada.',
    physicalSeg: '',
    labs: [
      { test: 'Potássio', val: '3,1 mEq/L', ref: '3,5–5,0', alt: true },
      { test: 'Sódio', val: '136 mEq/L', ref: '135–145', alt: false },
      { test: 'Amilase salivar', val: '2,1x LSN', ref: 'Normal', alt: true },
      { test: 'Hemograma', val: 'Normal', ref: '—', alt: false },
      { test: 'TGO/TGP', val: 'Normais', ref: '—', alt: false }
    ],
    image: null,
    note: 'Sinais vitais e inspeção das mãos e boca ao início. Exames se solicitados. O candidato deve ser avaliado especialmente pela busca ativa pelos sinais físicos de purga (sinal de Russell, erosões dentárias, hipertrofia de parótidas) e pela distinção de BN de compulsão alimentar (na compulsão não há comportamento purgativo).',
    patientProfile: '',
          // caso 30 — a partir de script:
      script: [
        { trigger: 'Abertura', speech: 'Eu vim porque não aguento mais. Faço nutrição, sei que o que faço é errado, mas não consigo parar.' },
        { trigger: 'Sobre a compulsão', speech: 'Quase toda noite, quando as colegas dormem, eu como muito. Salgadinho, sorvete, pão... Às vezes gasto R$50 de uma vez. Sinto que perco o controle.' },
        { trigger: 'Sobre o vômito', speech: 'Depois provoco o vômito. Me sinto aliviada, mas também com nojo de mim mesma. Isso acontece umas 4 ou 5 vezes por semana.' },
        { trigger: 'Sobre a imagem corporal', speech: 'Sei que meu peso tá normal. Mas quando me olho no espelho, acho que estou gorda. Me sinto enorme.' },
        { trigger: 'Sobre o segredo', speech: 'Minha família não sabe. Meu namorado não sabe. Tenho muito medo que descubram e me achem nojenta.' },
        { trigger: 'Sobre depressão e automutilação', speech: 'Fico muito triste depois dos episódios. Nunca me machuquei.' },
        { trigger: 'Pergunta ativa', speech: 'Tem cura? Vai ser assim pra sempre?' },
        { trigger: 'Pergunta ativa', speech: 'Precisa contar pra minha mãe?' }
      ],
      hiddenInfo: 'Gasta em média R$200/mês com comida para os episódios de compulsão (impacto financeiro significativo para estudante) — revelar se perguntado sobre impacto financeiro.',
      actorBehavior: ''
    },
    instC: {
      diagnosis: 'Bulimia nervosa, com comportamento purgativo (vômito autoprovocado), frequência 4–5x/semana, com distorção da imagem corporal. Complicações: hipopotassemia, amilase salivar elevada (hipertrofia de parótidas), erosão dentária, sinal de Russell. CID-11: 6B81 / DSM-5: F50.2.',
      differentials: [
        'Transtorno de compulsão alimentar (TCA) — compulsão alimentar sem comportamento purgativo ou compensatório; excluída pelo vômito autoprovocado.',
        'Anorexia nervosa tipo purgativo — AN com compulsão + purgação em paciente com IMC abaixo do normal; IMC normal exclui.',
        'Episódio depressivo maior com hiperfagia — comer emocional sem perda de controle característica e sem purga.'
      ],
      context: '',
      justify: '',
      expectedAnamnesis: '',
      expectedPhysical: '',
      expectedExams: [],
      expectedConduct: 'Farmacológica: Fluoxetina 60 mg/dia VO (única dose aprovada pelo FDA/ANVISA para bulimia nervosa — dose mais alta que na depressão). (ABP — TA, 2022; RENAME 2023) | Psicoterapia: TCC para bulimia nervosa é o tratamento de 1ª linha. (ABP — TA, 2022) | Correção eletrolítica: Reposição de potássio oral (cloreto de potássio) enquanto há vômitos. | Encaminhamento: Serviço especializado em transtornos alimentares; odontologia para as erosões dentárias. | Confidencialidade: Paciente adulta (19 anos) — respeitar confidencialidade a menos que haja risco de vida.',
      expectedCommunication: '',
      criticalErrors: [
        'Prescrever fluoxetina em dose antidepressiva padrão (20 mg) — dose para bulimia é 60 mg',
        'Não buscar ativamente os sinais físicos de purga (sinal de Russell, erosões dentárias)',
        'Não solicitar eletrólitos (hipopotassemia por vômito — risco de arritmia)',
        'Constranger a paciente pelo fato de cursar nutrição',
        'Não indicar TCC como componente essencial do tratamento'
      ]
    },
    instD: {
      title: 'CHECKLIST — JOVEM QUE COME ESCONDIDA À NOITE E PROVOCA VÔMITO',
      sections: [
        {
          h: 'COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE',
          items: [
            { item: 'Abordou sem estigmatizar pelo curso de nutrição', score: 0.5, ref: 'ABP — TA, 2022' },
            { item: 'Respondeu sobre confidencialidade (adulta — respeitar)', score: 0.5, ref: 'CFM — Código de Ética, 2009' }
          ]
        },
        {
          h: 'ANAMNESE',
          items: [
            { item: 'Investigou critérios de compulsão (frequência, perda de controle, quantidade)', score: 0.5, ref: 'DSM-5; ABP 2022' },
            { item: 'Pesquisou comportamento purgativo (tipo, frequência)', score: 0.5, ref: 'DSM-5' },
            { item: 'Rastreou depressão e automutilação', score: 0.5, ref: 'ABP 2022' }
          ]
        },
        {
          h: 'EXAME FÍSICO',
          items: [
            { item: 'Inspecionou mãos (sinal de Russell) e dentes (erosões)', score: 1.0, ref: 'ABP — TA, 2022' }
          ]
        },
        {
          h: 'RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
          items: [
            { item: 'Solicitou eletrólitos (hipopotassemia por purga)', score: 1.0, ref: 'ABP — TA, 2022' },
            { item: 'Formulou BN e diferenciou de TCA', score: 0.5, ref: 'DSM-5; ABP 2022' }
          ]
        },
        {
          h: 'CONDUTA E ORIENTAÇÃO AO PACIENTE',
          items: [
            { item: 'Prescreveu fluoxetina 60 mg/dia (dose específica para BN)', score: 1.5, ref: 'ABP 2022; RENAME 2023' },
            { item: 'Indicou TCC como 1ª linha', score: 1.0, ref: 'ABP 2022' },
            { item: 'Encaminhou à odontologia para erosões', score: 0.5, ref: 'ABP 2022' },
            { item: 'Indicou reposição de potássio', score: 0.5, ref: 'ABP 2022' }
          ]
        }
      ]
    }
  },

// CASO 31
{
  id: 31,
  title: 'Homem que perde o controle comendo até sentir dor e se isola com vergonha',
  sub: 'UBS — Demanda espontânea',
  tema: 'psiquiatria',
  topic: 'Transtorno de compulsão alimentar periódica (TCAP)',
  level: 'moderado',
  cardAccent: '#4E342E',
  instA: {
    scenario: 'UBS. Consultório, turno matutino. Paciente veio encaminhado pelo nutricionista após 3 falhas em dietas para perda de peso.',
    patient: 'C.R., 38 anos, masculino, analista financeiro, casado, obesidade grau II (IMC 36,4). Hipertensão. Faz dieta há 5 anos sem sucesso.',
    complaint: "Paciente relata que 'perde o controle' com a comida pelo menos 3 vezes por semana: come grandes quantidades em menos de 2 horas, muito além da saciedade ('até doer'), escondido da esposa, e depois sente vergonha intensa e se isola. Nega vômito ou uso de laxantes.",
    tasks: [
      'Realize a anamnese investigando os critérios de TCAP (frequência, perda de controle, ausência de comportamento purgativo, sofrimento).',
      'Diferencie de bulimia nervosa e de hiperfagia simples.',
      'Avalie comorbidades: depressão, ansiedade.',
      'Formule o diagnóstico e proponha o tratamento.',
      "Oriente o paciente sobre o diagnóstico e desmistifique a 'falta de vontade'."
    ]
  },
  instB: {
    vitals: {
      PA: '148/94 mmHg',
      FC: '82 bpm',
      FR: '16 irpm',
      Tax: '36,5°C',
      Peso: '108 kg',
      Altura: '1,72 m',
      IMC: '36,5 kg/m²'
    },
    physicalGeneral: 'Paciente em bom estado geral, obeso. Sem erosões dentárias. Sem sinal de Russell. Lúcido, orientado. Discretamente envergonhado ao falar do tema.',
    physicalSeg: '',
    labs: [
      { test: 'Glicemia em jejum', val: '118 mg/dL', ref: '70–99', alt: true },
      { test: 'Triglicerídeos', val: '280 mg/dL', ref: '<150', alt: true },
      { test: 'HDL', val: '34 mg/dL', ref: '>40 (H)', alt: true },
      { test: 'HbA1c', val: '6,1%', ref: '<5,7%', alt: true },
      { test: 'TSH', val: '2,2 (normal)', ref: '0,4–4,0', alt: false }
    ],
    image: null,
    note: 'Sinais vitais ao início. Exames se solicitados. O candidato deve ser avaliado especialmente pela distinção de TCAP de bulimia (no TCAP não há comportamento purgativo) e de hiperfagia simples (no TCAP há perda de controle e sofrimento significativo).',
    patientProfile: '',
    script: [
      { trigger: 'Abertura', speech: 'Eu sei que sou gordo. Já tentei de tudo. Mas quando eu começo a comer não consigo parar. É como se não fosse eu.' },
      { trigger: 'Sobre os episódios', speech: 'Três, quatro vezes por semana. Acontece mais à noite. Como pizza inteira, salgados, doces... Só paro quando dói. Não é fome — é outra coisa.' },
      { trigger: 'Sobre o controle', speech: 'Me sinto envergonhado depois. Escondo da minha esposa. Ela acha que faço dieta. Não sou capaz de parar mesmo tentando.' },
      { trigger: 'Sobre vômito ou laxante', speech: 'Não, nunca fiz isso. Só como mesmo. E engordo.' },
      { trigger: 'Sobre o humor', speech: 'Fico deprimido depois. A vergonha é enorme. Sinto que sou fraco.' },
      { trigger: 'Pergunta ativa', speech: 'Isso tem nome? Porque as pessoas dizem que é fraqueza.' },
      { trigger: 'Pergunta ativa', speech: 'Tem remédio pra isso? Porque dieta nunca funcionou.' }
    ],
    hiddenInfo: 'Esconde comida no carro e no escritório para os episódios — revelar se perguntado sobre onde ocorrem os episódios.',
    actorBehavior: ''
  },
  instC: {
    diagnosis: 'Transtorno de compulsão alimentar periódica (TCAP) — episódios de compulsão alimentar ≥3x/semana, sem comportamento compensatório, com sofrimento significativo e ocultamento. Comorbidades: síndrome metabólica (glicemia alterada, pré-diabetes, hipertrigliceridemia, HDL baixo, HAS). CID-11: 6B82 / DSM-5: F50.81.',
    differentials: [
      'Bulimia nervosa — compulsão alimentar seguida de purga (vômito, laxante, exercício excessivo); excluída pela ausência de comportamento compensatório.',
      'Hiperfagia simples sem perda de controle — comer em excesso sem a característica de "transe" ou perda de controle; no TCAP há dissociação e sofrimento posterior.',
      'Transtorno depressivo com hiperfagia — comer emocional como sintoma depressivo; investigar se os episódios precedem o humor deprimido (sugere TCAP primário).'
    ],
    context: '',
    justify: '',
    expectedAnamnesis: '',
    expectedPhysical: '',
    expectedExams: [],
    expectedConduct: 'Farmacológica: Lisdexanfetamina (Vyvanse) 30–70 mg/dia — único fármaco aprovado pelo FDA para TCAP; indicado quando disponível e sem contraindicações cardiovasculares (monitorar PA e FC). (FDA aprovado; no Brasil aprovado pela ANVISA mas acesso limitado — mencionar como opção; RENAME 2023 não inclui para essa indicação específica). Alternativa: Topiramato 100–300 mg/dia (reduz episódios de compulsão — evidência moderada). Fluoxetina 60 mg/dia (reduz frequência dos episódios). (ABP — TA, 2022) | Psicoterapia: TCC para TCAP é a 1ª linha para o transtorno alimentar. (ABP — TA, 2022) | Tratar síndrome metabólica: Controle da PA, glicemia, triglicerídeos. | Orientar: Não é fraqueza — é um transtorno do controle do impulso alimentar com neurobiologia específica.',
    expectedCommunication: '',
    criticalErrors: [
      "Diagnosticar como 'falta de força de vontade' ou 'ausência de comprometimento com a dieta'",
      'Não diferenciar de bulimia (ausência de purga é critério diagnóstico diferencial)',
      'Apenas prescrever dieta restritiva (piora o TCAP — gatilho para episódios)',
      'Não rastrear síndrome metabólica (comorbidade obrigatória a investigar)',
      'Não indicar TCC como parte do tratamento'
    ]
  },
  instD: {
    title: 'CHECKLIST — HOMEM QUE PERDE O CONTROLE COMENDO ATÉ SENTIR DOR',
    sections: [
      {
        h: 'COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE',
        items: [
          { item: 'Explicou que TCAP não é fraqueza — é transtorno médico', score: 0.5, ref: 'ABP — TA, 2022' },
          { item: 'Desmistificou "só fazer dieta" como solução', score: 0.5, ref: 'ABP — TA, 2022' }
        ]
      },
      {
        h: 'ANAMNESE',
        items: [
          { item: 'Investigou perda de controle, frequência e sofrimento', score: 0.5, ref: 'DSM-5' },
          { item: 'Perguntou diretamente sobre comportamento purgativo (vômito, laxante)', score: 1.0, ref: 'DSM-5' },
          { item: 'Rastreou depressão comórbida', score: 0.5, ref: 'ABP 2022' }
        ]
      },
      {
        h: 'EXAME FÍSICO',
        items: [
          { item: 'Avaliou IMC, PA e sinais físicos de purga (ausentes)', score: 0.5, ref: 'ABP 2022' }
        ]
      },
      {
        h: 'RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
        items: [
          { item: 'Solicitou exames de síndrome metabólica (glicemia, perfil lipídico)', score: 1.0, ref: 'ABP 2022' },
          { item: 'Diferenciou TCAP de BN e hiperfagia simples', score: 0.5, ref: 'DSM-5' }
        ]
      },
      {
        h: 'CONDUTA E ORIENTAÇÃO AO PACIENTE',
        items: [
          { item: 'Indicou farmacoterapia adequada (fluoxetina 60 mg ou topiramato)', score: 1.0, ref: 'ABP 2022; RENAME 2023' },
          { item: 'Indicou TCC para TCAP', score: 1.0, ref: 'ABP 2022' },
          { item: 'Tratou as comorbidades (HAS, pré-diabetes, dislipidemia)', score: 1.0, ref: 'MS — Doenças Crônicas, 2022' }
        ]
      }
    ]
  }
},

// CASO 32
{
  id: 32,
  title: 'Homem com episódios psicóticos que ocorrem apenas durante crises depressivas',
  sub: 'CAPS II',
  tema: 'psiquiatria',
  topic: 'Transtorno esquizoafetivo — tipo depressivo',
  level: 'moderado',
  cardAccent: '#311B92',
  instA: {
    scenario: 'CAPS II. Sala de acolhimento, turno da manhã. Paciente acompanhado do irmão. Em acompanhamento irregular há 2 anos.',
    patient: 'S.M., 42 anos, masculino, técnico de laboratório (afastado), divorciado. Com histórico de 3 episódios psiquiátricos nos últimos 5 anos.',
    complaint: "Irmão relata que o paciente está em sua 3ª crise: 'na crise, além de ficar muito deprimido, começa a ouvir vozes e achar que vai ser preso'. Fora das crises, fica 'apagado, sem energia, mas normal'. Psiquiatra anterior diagnosticou 'depressão com psicose'.",
    tasks: [
      'Realize a anamnese investigando a relação temporal entre os sintomas psicóticos e os episódios de humor.',
      'Diferencie transtorno esquizoafetivo de esquizofrenia e de depressão psicótica.',
      'Avalie o funcionamento entre os episódios.',
      'Formule a hipótese diagnóstica e proponha a conduta.',
      'Oriente o paciente e o familiar sobre o diagnóstico e o tratamento.'
    ]
  },
  instB: {
    vitals: {
      PA: '124/80 mmHg',
      FC: '80 bpm',
      FR: '16 irpm',
      Tax: '36,5°C',
      Peso: '79 kg',
      Altura: '1,74 m',
      IMC: '26,1 kg/m²'
    },
    physicalGeneral: 'Paciente em regular estado geral. Fácies de tristeza. Lúcido e orientado. Cabelos e barba por fazer (descuido em crise depressiva). Sem sinais de agitação. Psicomotricidade lentificada.',
    physicalSeg: 'Estado mental: Humor deprimido, afeto congruente. Fala lenta. Alucinações auditivas ativas ("ouve vozes acusando-o"). Delírio persecutório presente ("acha que será preso por algo que não fez"). Insight parcial sobre a crise. Sem desorganização formal do pensamento.',
    labs: [
      { test: 'TSH', val: '2,1 (normal)', ref: '0,4–4,0', alt: false },
      { test: 'Hemograma', val: 'Normal', ref: '—', alt: false },
      { test: 'Toxicológico', val: 'Negativo', ref: '—', alt: false }
    ],
    image: null,
    note: 'Sinais vitais ao início. O candidato deve ser avaliado pela investigação da relação temporal entre psicose e humor (critério diagnóstico chave do transtorno esquizoafetivo: os sintomas psicóticos devem estar presentes por pelo menos 2 semanas na AUSÊNCIA de episódio de humor proeminente).',
    patientProfile: '',
    script: [
      { trigger: 'Abertura', speech: 'Tô mal de novo. As vozes voltaram. E acho que vão me prender.' },
      { trigger: 'Sobre as crises anteriores', speech: 'Toda vez que fico muito deprimido, as vozes aparecem também. Acho que as duas coisas vêm juntas.' },
      { trigger: 'Sobre o período entre crises', speech: 'Fora das crises fico bem. Trabalho, me relaciono. Mas fico meio sem energia, sabe? Não fico feliz como antes, mas funciono.' },
      { trigger: 'Sobre o início dos sintomas psicóticos', speech: 'As vozes começam quando a depressão já tá forte. Não vêm sozinhas, sem eu estar deprimido.' },
      { trigger: 'Sobre o diagnóstico anterior', speech: 'Me disseram que era depressão com psicose. Mas tô em dúvida porque você perguntou diferente.' },
      { trigger: 'Script do irmão', speech: 'Doutor, nas três crises, a psicose e a depressão vieram juntas. Fora das crises, ele fica bem, só um pouco apagado.' }
    ],
    hiddenInfo: 'Funcionamento entre crises: trabalhou por 2 anos como técnico de laboratório sem intercorrências — confirma preservação relativa do funcionamento interepisódio, que diferencia do esquizofrenia.',
    actorBehavior: ''
  },
  instC: {
    diagnosis: 'Transtorno esquizoafetivo, tipo depressivo. Critério chave: sintomas psicóticos (alucinações + delírios) ocorrem concomitantemente a episódios depressivos maiores, mas a questão é se os sintomas psicóticos persistem por ≥2 semanas na ausência dos sintomas de humor — precisa ser investigado em detalhe. Padrão das 3 crises sugere psicose que acompanha e pode preceder levemente o humor, sem ocorrência independente prolongada. CID-11: 6A21 / DSM-5: F25.1.',
    differentials: [
      'Depressão maior com características psicóticas — os sintomas psicóticos ocorrem APENAS durante o episódio depressivo; no TEA os sintomas psicóticos são mais proeminentes e podem ocorrer além do humor; a investigação da relação temporal é chave.',
      'Esquizofrenia — sintomas psicóticos proeminentes com episódios de humor relativamente breves; funcionamento entre episódios mais comprometido; excluída pelo bom funcionamento interepisódico e pela relação estreita entre psicose e depressão.',
      'TAB tipo I com características psicóticas — episódios maníacos/depressivos com psicose; excluído pela ausência de episódios maníacos/hipomaníacos.'
    ],
    context: '',
    justify: '',
    expectedAnamnesis: '',
    expectedPhysical: '',
    expectedExams: [],
    expectedConduct: 'Antipsicótico de manutenção: Risperidona 2–4 mg/dia VO ou Olanzapina 10 mg/dia (previne tanto os episódios psicóticos quanto contribui para estabilização do humor). (RENAME 2023; ABP — Diretrizes Esquizofrenia, 2022) | Para o episódio depressivo: ISRS adjuvante (sertralina 50–100 mg/dia) ou antidepressivo com estabilizador de humor, com cautela para não precipitar viragem. Avaliar com psiquiatra. | Não usar antidepressivo sem antipsicótico (pode piorar a psicose). | Psicoeducação: Explicar a diferença entre esquizofrenia, depressão psicótica e transtorno esquizoafetivo. | Seguimento: CAPS II com projeto terapêutico singular.',
    expectedCommunication: '',
    criticalErrors: [
      'Não investigar a relação temporal entre psicose e humor (critério diagnóstico chave)',
      'Tratar apenas com antidepressivo sem antipsicótico (pode exacerbar a psicose)',
      'Diagnosticar esquizofrenia sem avaliar o funcionamento interepisódico',
      'Não envolver o familiar no plano de tratamento',
      'Não solicitar toxicológico (afastar psicose induzida por substância)'
    ]
  },
  instD: {
    title: 'CHECKLIST — HOMEM COM PSICOSE QUE OCORRE APENAS DURANTE CRISES DEPRESSIVAS',
    sections: [
      {
        h: 'COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE',
        items: [
          { item: 'Explicou a diferença entre esquizofrenia e TE em linguagem acessível', score: 0.5, ref: 'ABP 2022' },
          { item: 'Envolveu o familiar na anamnese e no plano', score: 0.5, ref: 'MS — Humanização, 2013' }
        ]
      },
      {
        h: 'ANAMNESE',
        items: [
          { item: 'Investigou a relação temporal entre psicose e episódios de humor', score: 1.5, ref: 'DSM-5; ABP 2022' },
          { item: 'Avaliou funcionamento entre as crises', score: 0.5, ref: 'DSM-5' },
          { item: 'Investigou número e padrão das crises anteriores', score: 0.5, ref: 'DSM-5' }
        ]
      },
      {
        h: 'RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
        items: [
          { item: 'Solicitou toxicológico', score: 0.3, ref: 'ABP 2022' },
          { item: 'Diferenciou TE de depressão psicótica e esquizofrenia', score: 1.0, ref: 'DSM-5' },
          { item: 'Formulou hipótese de transtorno esquizoafetivo tipo depressivo', score: 1.0, ref: 'DSM-5; ABP 2022' }
        ]
      },
      {
        h: 'CONDUTA E ORIENTAÇÃO AO PACIENTE',
        items: [
          { item: 'Prescreveu antipsicótico de manutenção', score: 1.0, ref: 'ABP 2022; RENAME 2023' },
          { item: 'Não prescreveu antidepressivo isolado sem antipsicótico', score: 1.0, ref: 'ABP 2022' },
          { item: 'Planejou seguimento no CAPS II', score: 0.7, ref: 'Lei 10.216/2001' }
        ]
      }
    ]
  }
},

// CASO 33
{
  id: 33,
  title: "Jovem com 'surto' de 4 meses após morte do pai que agora está melhorando",
  sub: 'CAPS II — Reavaliação',
  tema: 'psiquiatria',
  topic: 'Transtorno esquizofreniforme',
  level: 'moderado',
  cardAccent: '#4527A0',
  instA: {
    scenario: 'CAPS II. Consulta de reavaliação, turno da tarde. Paciente em acompanhamento há 4 meses após primeiro episódio psicótico.',
    patient: 'J.F., 27 anos, masculino, analista de RH (retornou ao trabalho há 1 mês), solteiro. Pai faleceu 2 semanas antes do início do quadro psicótico.',
    complaint: "Psiquiatra anterior iniciou haloperidol há 4 meses após episódio psicótico agudo com delírios persecutórios e alucinações auditivas. Hoje o paciente está praticamente assintomático e questiona: 'Tenho esquizofrenia para sempre?'",
    tasks: [
      'Realize a anamnese investigando a evolução dos sintomas e o funcionamento atual.',
      'Revise o diagnóstico inicial à luz da duração total do episódio.',
      'Explique ao paciente a diferença entre transtorno esquizofreniforme e esquizofrenia.',
      'Discuta o plano de continuação ou retirada gradual do antipsicótico.',
      'Comunique o prognóstico de forma honesta e esperançosa.'
    ]
  },
  instB: {
    vitals: {
      PA: '118/76 mmHg',
      FC: '78 bpm',
      FR: '15 irpm',
      Tax: '36,5°C',
      Peso: '74 kg',
      Altura: '1,76 m',
      IMC: '23,9 kg/m²'
    },
    physicalGeneral: 'Paciente em bom estado geral. Higiene adequada. Lúcido e orientado. Sem efeitos extrapiramidais visíveis. Contato visual preservado.',
    physicalSeg: 'Estado mental: Humor eutímico. Sem alucinações ou delírios ativos. Pensamento organizado. Fala fluente. Insight preservado. Funcionamento social e laboral retomado.',
    labs: [],
    image: null,
    note: 'O candidato deve ser avaliado especialmente pelo raciocínio diagnóstico: transtorno esquizofreniforme dura de 1 a 6 meses — abaixo de 1 mês é psicose breve, acima de 6 meses com funcionamento prejudicado é esquizofrenia. A remissão completa em 4 meses com boa recuperação funcional é compatível com esquizofreniforme, não esquizofrenia.',
    patientProfile: '',
    script: [
      { trigger: 'Abertura', speech: 'Tô muito melhor. Voltei a trabalhar. Aquelas vozes e o medo que as pessoas me faziam mal sumiram completamente faz 6 semanas. Mas quero saber: tenho esquizofrenia pra sempre?' },
      { trigger: 'Sobre a evolução', speech: 'No começo foi muito assustador. Mas depois de uns 3 meses tomando o remédio, foi melhorando. Hoje me sinto igual a antes.' },
      { trigger: 'Sobre o trabalho', speech: 'Voltei ao trabalho há um mês. Tô indo bem, meus colegas não perceberam nada diferente.' },
      { trigger: 'Sobre o pai', speech: 'Meu pai morreu 2 semanas antes de tudo começar. Ainda tô em luto, mas normal.' },
      { trigger: 'Sobre a medicação', speech: 'Ainda tomo o haloperidol. Tenho efeito colateral de leve tremor. Posso parar?' },
      { trigger: 'Pergunta ativa', speech: 'Se melhorei tão rápido, então não é esquizofrenia?' },
      { trigger: 'Pergunta ativa', speech: 'Vai voltar?' }
    ],
    hiddenInfo: 'O tremor pelo haloperidol é leve mas incomoda — pode justificar troca para antipsicótico atípico se a retirada não for indicada ainda.',
    actorBehavior: ''
  },
  instC: {
    diagnosis: 'Transtorno esquizofreniforme com bom prognóstico (duração total de ~4 meses, remissão completa, retorno ao funcionamento pré-mórbido, possível precipitante: morte do pai). CID-11: 6A22 / DSM-5: F20.81.',
    differentials: [
      'Esquizofrenia — duração ≥6 meses com comprometimento funcional; excluída pela duração de 4 meses e recuperação completa.',
      'Psicose breve — duração <1 mês; excluída pela duração de 4 meses.',
      'Transtorno esquizoafetivo — sintomas de humor proeminentes associados; não identificados no caso.',
      'Psicose induzida por luto complicado — o luto pode precipitar psicose em indivíduos vulneráveis; o contexto é sugestivo mas não altera o diagnóstico categorial.'
    ],
    context: '',
    justify: '',
    expectedAnamnesis: '',
    expectedPhysical: '',
    expectedExams: [],
    expectedConduct: 'Continuidade do antipsicótico: Manter por pelo menos 12–18 meses após remissão completa do 1º episódio (mesmo no esquizofreniforme) antes de considerar retirada gradual. Suspensão prematura aumenta risco de recorrência. (ABP — Diretrizes Esquizofrenia, 2022) | Trocar para antipsicótico atípico se o tremor do haloperidol for relevante: Risperidona 2 mg/dia ou Quetiapina 150 mg/dia (menor incidência de SEP). | Prognóstico: Transtorno esquizofreniforme com bom prognóstico (início agudo, ausência de sintomas negativos proeminentes, boa recuperação funcional) tem prognóstico muito melhor que esquizofrenia. | Psicoeducação: Explicar a diferença entre esquizofreniforme e esquizofrenia.',
    expectedCommunication: '',
    criticalErrors: [
      'Confirmar o diagnóstico de esquizofrenia sem verificar a duração total do episódio',
      'Suspender o antipsicótico imediatamente após remissão (retirada prematura antes de 12–18 meses)',
      'Não explicar a diferença de prognóstico entre esquizofreniforme e esquizofrenia',
      'Não abordar o efeito colateral do haloperidol (tremor) como motivo para troca ou ajuste',
      'Não manter o seguimento no CAPS após remissão clínica'
    ]
  },
  instD: {
    title: 'CHECKLIST — JOVEM COM SURTO DE 4 MESES QUE AGORA ESTÁ MELHORANDO',
    sections: [
      {
        h: 'COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE',
        items: [
          { item: 'Explicou a diferença entre esquizofreniforme e esquizofrenia', score: 1.0, ref: 'ABP 2022' },
          { item: 'Comunicou prognóstico favorável de forma honesta e esperançosa', score: 0.5, ref: 'ABP 2022' }
        ]
      },
      {
        h: 'ANAMNESE',
        items: [
          { item: 'Investigou duração exata dos sintomas psicóticos ativos', score: 1.0, ref: 'DSM-5' },
          { item: 'Avaliou funcionamento atual vs pré-mórbido', score: 0.5, ref: 'DSM-5' },
          { item: 'Investigou sintomas residuais e efeitos adversos (tremor)', score: 0.5, ref: 'ABP 2022' }
        ]
      },
      {
        h: 'RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
        items: [
          { item: 'Revisou e corrigiu diagnóstico de esquizofrenia para esquizofreniforme', score: 1.5, ref: 'DSM-5' },
          { item: 'Aplicou critério de duração: 1–6 meses = esquizofreniforme', score: 1.0, ref: 'DSM-5' }
        ]
      },
      {
        h: 'CONDUTA E ORIENTAÇÃO AO PACIENTE',
        items: [
          { item: 'Manteve antipsicótico por pelo menos 12–18 meses (não suspendeu prematuramente)', score: 1.5, ref: 'ABP 2022' },
          { item: 'Considerou troca para antipsicótico atípico pelo tremor', score: 0.5, ref: 'ABP 2022; RENAME 2023' },
          { item: 'Manteve seguimento no CAPS', score: 1.0, ref: 'Lei 10.216/2001' }
        ]
      }
    ]
  }
},

// CASO 34
{
  id: 34,
  title: 'Homem que começou a acreditar que a vizinha coloca veneno na comida dele há 3 semanas',
  sub: 'UBS — Trazido pelo filho',
  tema: 'psiquiatria',
  topic: 'Psicose breve (transtorno psicótico breve)',
  level: 'moderado',
  cardAccent: '#880E4F',
  instA: {
    scenario: 'UBS. Sala de acolhimento, turno matutino. Filho trouxe o pai após preocupação com comportamento "completamente fora do normal" há 3 semanas.',
    patient: 'A.B., 55 anos, masculino, comerciante, casado. Sem antecedente psiquiátrico conhecido.',
    complaint: 'Filho relata que há 3 semanas, logo após demissão de dois funcionários de confiança, o pai começou a afirmar que a vizinha está colocando veneno na comida e na água dele. Para de comer, jogou fora toda a comida da geladeira, briga com a esposa quando ela nega o envenenamento.',
    tasks: [
      'Realize a anamnese com o paciente e o filho, investigando início, duração, conteúdo dos delírios e nível de organização.',
      'Exclua causas orgânicas de psicose aguda.',
      'Diferencie psicose breve de transtorno delirante e de esquizofrenia.',
      'Avalie risco de heteroagressão (em relação à vizinha) e de desnutrição.',
      'Proponha a conduta imediata e o encaminhamento.'
    ]
  },
  instB: {
    vitals: {
      PA: '138/88 mmHg',
      FC: '88 bpm',
      FR: '18 irpm',
      Tax: '36,7°C',
      Peso: '74 kg',
      Altura: '1,72 m',
      IMC: '25,0 kg/m²'
    },
    physicalGeneral: 'Paciente em regular estado geral. Desconfiado, olhar esquivo. Lúcido e orientado. Sem sinais de desnutrição grave (perdeu 2 kg em 3 semanas). Sem intoxicação.',
    physicalSeg: 'Estado mental: Delírio persecutório sistematizado (envenenamento pela vizinha), sem alucinações evidentes. Humor levemente irritável. Pensamento organizado exceto pelo conteúdo delirante. Sem sintomas negativos.',
    labs: [
      { test: 'TSH', val: 'Normal', ref: 'Normal', alt: false },
      { test: 'Hemograma', val: 'Normal', ref: '—', alt: false },
      { test: 'Glicemia', val: 'Normal', ref: '70–140', alt: false },
      { test: 'Toxicológico', val: 'Negativo', ref: '—', alt: false },
      { test: 'TC crânio', val: 'Sem alterações estruturais agudas', ref: '—', alt: false }
    ],
    image: 'TC de crânio sem contraste: Sem alterações estruturais agudas.',
    note: 'Sinais vitais ao início. O candidato deve ser avaliado especialmente pela distinção entre psicose breve (duração <1 mês com início agudo após estressor), transtorno delirante (delírio isolado, sem alucinações, por >1 mês) e esquizofrenia (>6 meses com múltiplos sintomas). Com apenas 3 semanas de evolução, o diagnóstico definitivo não pode ser fechado — é psicose breve ou início de transtorno delirante.',
    patientProfile: '',
    script: [
      { trigger: 'Abertura', speech: 'Não preciso de médico. O problema não é meu — é a minha vizinha que tá me envenenando.' },
      { trigger: 'Sobre o veneno', speech: 'Ela bota veneno na torneira do prédio. Eu sei porque desde que comecei a perceber fico com dor de estômago.' },
      { trigger: 'Sobre a demissão', speech: 'Tive que demitir dois funcionários há 3 semanas. Fiquei muito estressado. Mas não tem relação com a vizinha.' },
      { trigger: 'Sobre o início', speech: 'Há 3 semanas notei que a comida tava com gosto estranho. Comecei a entender o que estava acontecendo.' },
      { trigger: 'Sobre alucinações', speech: 'Não ouço vozes. Só sei o que sei.' },
      { trigger: 'Script do filho', speech: 'Doutor, meu pai nunca foi assim. Era uma pessoa normal, de negócios. Esse problema da vizinha começou do nada, 3 semanas atrás. Antes disso, tinha tido uma situação difícil na empresa. É uma pessoa completamente diferente.' },
      { trigger: 'Pergunta ativa do filho', speech: 'Isso é psicose? Vai durar muito? Tem risco de ele agredir a vizinha?' }
    ],
    hiddenInfo: 'Estressor precipitante (demissão dos funcionários) — revelar se perguntado sobre eventos na vida recente antes do início dos sintomas.',
    actorBehavior: ''
  },
  instC: {
    diagnosis: 'Diagnóstico Provisório: Psicose breve (possível transtorno delirante em início — decisão após evolução). Delírio persecutório de envenenamento de início agudo (3 semanas) após estressor identificável (demissão de funcionários). Sem alucinações, sem sintomas negativos. Duração atual <1 mês. CID-11: 6A24 / DSM-5: F23.',
    differentials: [
      'Transtorno delirante — delírio não bizarro persistente por >1 mês sem outros sintomas psicóticos proeminentes; ainda não pode ser diagnosticado (3 semanas — aguardar evolução).',
      'Esquizofrenia — múltiplos sintomas psicóticos por ≥6 meses; excluída pela duração e pela ausência de sintomas negativos.',
      'Transtorno esquizofreniforme — duração de 1–6 meses; ainda não atingido.',
      'Delirium por causa orgânica — TC e exames normais; lúcido e orientado; afastado.',
      'TAB com psicose — sem episódio de humor proeminente; excluído.'
    ],
    context: '',
    justify: '',
    expectedAnamnesis: '',
    expectedPhysical: '',
    expectedExams: [],
    expectedConduct: 'Antipsicótico: Haloperidol 2,5–5 mg/dia VO (início em baixa dose). Risperidona 1–2 mg/dia como alternativa. (RENAME 2023; ABP — Diretrizes Esquizofrenia, 2022) | Risco de heteroagressão: Avaliar e orientar o filho a vigiar o comportamento em relação à vizinha. Não há indicação atual de internação, mas monitorar. | Risco de desnutrição: Orientar para comer alimentos preparados por ele mesmo ou pelo filho (respeitando o delírio sem confrontar). | Encaminhamento: CAPS II para acompanhamento urgente ou psiquiatra ambulatorial. | Não confrontar diretamente o delírio — agrava a resistência e a agitação. | Aguardar evolução antes de fechar diagnóstico definitivo (psicose breve vs. transtorno delirante).',
    expectedCommunication: '',
    criticalErrors: [
      'Fechar diagnóstico definitivo de esquizofrenia com apenas 3 semanas de evolução',
      'Confrontar diretamente o delírio ("a vizinha não está te envenenando")',
      'Não avaliar risco de heteroagressão contra a vizinha',
      'Não solicitar TC de crânio em psicose aguda sem antecedente em adulto de 55 anos (afastar orgânico)',
      'Alta sem encaminhamento urgente para psiquiatra/CAPS'
    ]
  },
  instD: {
    title: 'CHECKLIST — HOMEM QUE ACREDITA QUE A VIZINHA ENVENENA SUA COMIDA HÁ 3 SEMANAS',
    sections: [
      {
        h: 'COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE',
        items: [
          { item: 'Não confrontou o delírio diretamente', score: 0.5, ref: 'ABP 2022' },
          { item: 'Orientou o filho sobre risco de heteroagressão', score: 0.5, ref: 'Lei 10.216/2001' }
        ]
      },
      {
        h: 'ANAMNESE',
        items: [
          { item: 'Investigou início agudo e estressor precipitante', score: 0.5, ref: 'DSM-5' },
          { item: 'Investigou ausência de alucinações e sintomas negativos', score: 0.5, ref: 'DSM-5' },
          { item: 'Avaliou risco de heteroagressão e de desnutrição', score: 1.0, ref: 'ABP 2022' }
        ]
      },
      {
        h: 'EXAME FÍSICO',
        items: [
          { item: 'Avaliou estado mental (delírio, sem alucinações, orientação)', score: 0.5, ref: 'ABP 2022' }
        ]
      },
      {
        h: 'RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
        items: [
          { item: 'Solicitou TC de crânio, TSH e toxicológico', score: 1.0, ref: 'ABP 2022' },
          { item: 'Não fechou diagnóstico de esquizofrenia com 3 semanas', score: 1.0, ref: 'DSM-5' },
          { item: 'Formulou psicose breve (ou início de transtorno delirante)', score: 1.0, ref: 'DSM-5' }
        ]
      },
      {
        h: 'CONDUTA E ORIENTAÇÃO AO PACIENTE',
        items: [
          { item: 'Prescreveu antipsicótico em dose inicial adequada', score: 1.0, ref: 'ABP 2022; RENAME 2023' },
          { item: 'Encaminhou ao CAPS/psiquiatra com urgência', score: 0.5, ref: 'Lei 10.216/2001' },
          { item: 'Orientou sobre vigilância nutricional (risco de recusa alimentar)', score: 1.0, ref: 'ABP 2022' }
        ]
      }
    ]
  }
},

// CASO 35
{
  id: 35,
  title: 'Aposentado que há 3 anos acredita que sua esposa o trai com o vizinho',
  sub: 'CAPS II — Encaminhamento da UBS',
  tema: 'psiquiatria',
  topic: 'Transtorno delirante — tipo ciúme (síndrome de Otelo)',
  level: 'moderado',
  cardAccent: '#1B5E20',
  instA: {
    scenario: 'CAPS II. Sala de acolhimento, turno matutino. Esposa trouxe o marido após ele quebrar o celular dela procurando "provas de traição".',
    patient: 'O.M., 67 anos, masculino, aposentado (ex-policial), casado há 40 anos, dois filhos adultos.',
    complaint: 'Esposa relata que há 3 anos o marido acredita com convicção inabalável que ela o trai com o vizinho. Vasculha o celular, segue-a até o mercado, questiona a mesma coisa repetidamente. Ontem quebrou o celular dela. Nunca teve comportamentos como esse antes.',
    tasks: [
      'Realize a anamnese investigando o conteúdo, a sistematização e a duração do delírio.',
      'Avalie o funcionamento geral fora do tema do delírio.',
      'Avalie o risco de violência contra a esposa ou o vizinho.',
      'Diferencie de esquizofrenia, TAB e demência.',
      'Proponha a conduta terapêutica e de segurança.'
    ]
  },
  instB: {
    vitals: {
      PA: '142/90 mmHg',
      FC: '82 bpm',
      FR: '16 irpm',
      Tax: '36,6°C',
      Peso: '88 kg',
      Altura: '1,74 m',
      IMC: '29,1 kg/m²'
    },
    physicalGeneral: 'Paciente em bom estado geral, bem vestido. Lúcido e orientado. Fácies séria. Sem agitação no momento.',
    physicalSeg: 'Estado mental: Delírio sistematizado de ciúme (apresenta "evidências" — mudança de perfume, sair mais de casa). Sem alucinações. Humor levemente irritável relacionado ao tema. Funcionamento preservado em outros domínios. Sem sintomas negativos. Mini-Exame do Estado Mental (MEEM): 27/30 — cognitivamente preservado para a idade.',
    labs: [
      { test: 'TSH', val: '2,1 (normal)', ref: 'Normal', alt: false },
      { test: 'Hemograma', val: 'Normal', ref: '—', alt: false },
      { test: 'VDRL', val: 'Não reagente', ref: 'Não reagente', alt: false },
      { test: 'Anti-HIV', val: 'Não reagente', ref: 'Não reagente', alt: false },
      { test: 'TC crânio', val: 'Sem atrofia ou lesão focal', ref: '—', alt: false }
    ],
    image: 'TC de crânio: Sulcos e ventrículos dentro dos limites para a faixa etária. Sem hipodensidades, sem atrofia significativa.',
    note: 'Sinais vitais ao início. O candidato deve ser avaliado especialmente pela avaliação formal do risco de violência contra a esposa e o vizinho (transtorno delirante de ciúme — Síndrome de Otelo — tem risco elevado de violência) e pela distinção de demência (MEEM preservado, delírio sistematizado sem outros déficits cognitivos).',
    patientProfile: '',
    script: [
      { trigger: 'Abertura', speech: 'Fui trazido pelo meu filho. Mas o problema não é meu — é a minha esposa que me está traindo.' },
      { trigger: "Sobre as 'provas'", speech: 'Ela mudou de perfume. Sai mais pra fazer mercado. Uma vez o vizinho acenou pra ela. Tenho certeza.' },
      { trigger: 'Sobre o funcionamento', speech: 'Fora disso, minha vida é normal. Cuido da casa, vejo meus filhos, jogo dominó. Só não consigo confiar nela.' },
      { trigger: 'Sobre violência', speech: 'Quebrei o celular porque precisava de provas. Não vou machucar ela. Mas se eu pegar o vizinho...' },
      { trigger: 'Script da esposa', speech: 'Doutor, eu jamais o traí. Ele era ciumento, mas normal. Há 3 anos ficou assim. Tenho muito medo. Ontem foi o celular. E amanhã?' },
      { trigger: 'Pergunta ativa da esposa', speech: 'Ele é perigoso? Devo sair de casa?' }
    ],
    hiddenInfo: 'O filho relatou ao CAPS que o pai já seguiu o vizinho até o trabalho semana passada — revelar se perguntado sobre comportamentos de vigilância além do rastreio do celular.',
    actorBehavior: ''
  },
  instC: {
    diagnosis: 'Transtorno delirante, tipo ciúme (Síndrome de Otelo). Delírio não bizarro (traição conjugal), sistematizado, persistente por 3 anos, sem alucinações, sem sintomas negativos, com funcionamento preservado fora do tema. Alto risco de violência contra cônjuge e contra o suposto amante. CID-11: 6A24 / DSM-5: F22.',
    differentials: [
      'Esquizofrenia — múltiplos sintomas psicóticos, sintomas negativos, funcionamento comprometido em múltiplas áreas; excluída pelo funcionamento preservado e pelo delírio isolado sem outros sintomas.',
      'Demência com psicose — MEEM 27/30 normal para a idade; TC sem atrofia; excluída.',
      'TAB com psicose — sem episódios de humor; excluído.',
      'Ciúme patológico não delirante (transtorno de personalidade paranoide) — sem a certeza inabalável e a sistematização do delírio; excluído pela convicção absoluta ("tenho certeza") e pela incapacidade de considerar o contrário.'
    ],
    context: '',
    justify: '',
    expectedAnamnesis: '',
    expectedPhysical: '',
    expectedExams: [],
    expectedConduct: "Risco de violência — PRIORIDADE: Avaliar formalmente o risco de violência (seguiu o vizinho, quebrou o celular). Orientar a esposa sobre segurança (não confrontar o delírio, ter plano de saída em caso de escalada). Considerar internação se risco iminente. | Antipsicótico: Risperidona 1–2 mg/dia VO ou Pimozida (se disponível — específico para transtorno delirante, mas disponibilidade limitada no SUS). (RENAME 2023; ABP 2022) | Psicoterapia: Limitada no transtorno delirante; abordagem de suporte sem confrontar o delírio. | Engajamento terapêutico: O paciente não reconhece adoência — o engajamento deve focar em objetivos que ele aceita ('quero ajudá-lo a resolver o conflito com a vizinhança'). | Orientação à esposa: Não confrontar o delírio. Comunicar ao filho e planejar a segurança.",
    expectedCommunication: '',
    criticalErrors: [
      'Não avaliar formalmente o risco de violência contra esposa e vizinho',
      'Dizer à esposa que "não é perigoso" sem avaliação formal do risco',
      'Diagnosticar esquizofrenia sem evidência de outros sintomas psicóticos além do delírio',
      'Não solicitar TC de crânio para afastar demência em idoso com psicose de início tardio',
      'Confrontar o delírio diretamente ("sua esposa não está te traindo") — rompe o vínculo e aumenta o risco de violência'
    ]
  },
  instD: {
    title: 'CHECKLIST — APOSENTADO QUE ACREDITA QUE A ESPOSA O TRAI HÁ 3 ANOS',
    sections: [
      {
        h: 'COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE',
        items: [
          { item: 'Não confrontou o delírio diretamente', score: 0.5, ref: 'ABP 2022' },
          { item: 'Orientou a esposa sobre segurança e plano em caso de escalada', score: 1.0, ref: 'Lei 10.216/2001; ABP 2022' }
        ]
      },
      {
        h: 'ANAMNESE',
        items: [
          { item: 'Investigou conteúdo, sistematização e duração do delírio', score: 0.5, ref: 'DSM-5' },
          { item: 'Avaliou funcionamento fora do tema do delírio', score: 0.5, ref: 'DSM-5' },
          { item: 'Pesquisou comportamentos de vigilância e violência prévia', score: 1.0, ref: 'ABP 2022' }
        ]
      },
      {
        h: 'EXAME FÍSICO',
        items: [
          { item: 'Aplicou MEEM para afastar demência', score: 0.5, ref: 'ABP 2022' }
        ]
      },
      {
        h: 'RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
        items: [
          { item: 'Solicitou TC de crânio e VDRL em idoso com psicose tardia', score: 0.5, ref: 'ABP 2022' },
          { item: 'Diferenciou transtorno delirante de esquizofrenia e demência', score: 1.0, ref: 'DSM-5' },
          { item: 'Formulou transtorno delirante tipo ciúme com alto risco de violência', score: 1.0, ref: 'DSM-5; ABP 2022' }
        ]
      },
      {
        h: 'CONDUTA E ORIENTAÇÃO AO PACIENTE',
        items: [
          { item: 'Prescreveu antipsicótico adequado (risperidona)', score: 1.0, ref: 'ABP 2022; RENAME 2023' },
          { item: 'Avaliou necessidade de internação pelo risco de violência', score: 1.0, ref: 'Lei 10.216/2001' },
          { item: 'Incluiu o filho no plano de segurança', score: 0.5, ref: 'Lei 10.216/2001' }
        ]
      }
    ]
  }
},

// CASO 36
{
  id: 36,
  title: 'Mulher encontrada na rua repetindo as mesmas frases e sem identificação',
  sub: 'PS — Emergência Psiquiátrica',
  tema: 'psiquiatria',
  topic: 'Emergência psiquiátrica — catatonia',
  level: 'moderado',
  cardAccent: '#4E342E',
  instA: {
    scenario: 'PS de Hospital Geral. Sala de emergência, turno noturno. SAMU trouxe paciente encontrada em calçada por transeuntes. Sem identificação. Não responde a perguntas — só repete uma frase.',
    patient: 'Paciente feminina, aparentemente 35–45 anos, sem identificação. Trazida pelo SAMU.',
    complaint: "SAMU relata que a paciente foi encontrada na calçada, imóvel, repetindo a frase 'não posso sair daqui' continuamente, sem responder a perguntas, sem sinais de trauma e sem alteração da consciência aparente.",
    tasks: [
      'Realize a avaliação clínica inicial com prioridade para ABC e causas orgânicas.',
      'Realize o exame do estado mental para identificar características catatônicas.',
      'Exclua causas orgânicas de catatonia (neurológica, tóxica, metabólica).',
      'Proponha a conduta terapêutica para catatonia.',
      'Comunique à equipe o plano de manejo e o encaminhamento.'
    ]
  },
  instB: {
    vitals: {
      PA: '124/80 mmHg',
      FC: '78 bpm',
      FR: '14 irpm',
      Tax: '36,8°C',
      Peso: '~60 kg',
      Altura: 'Não disponível',
      IMC: 'Não disponível'
    },
    physicalGeneral: "Paciente sentada rígida, olhar fixo. Não responde a perguntas verbais. Repete 'não posso sair daqui' quando estimulada. Sem sinais de trauma. Sem sinais de intoxicação. Pele íntegra. Mucosas hidratadas. Pupilas isocóricas fotorreagentes.",
    physicalSeg: 'Neurológico: Sem déficits motores ou sensitivos focais. Rigidez muscular generalizada (flexibilidade cérea — mantém posições impostas). Sem sinais de irritação meníngea. Reflexos preservados. Pupilas normais. | Catatonia — Escala de Bush-Francis: Estupor (2), mutismo (2), rigidez (2), ecolalia (2 — repete), postura fixada (2) = escore ≥2 itens = CATATONIA confirmada. | Cardiovascular e Respiratório: Normais.',
    labs: [
      { test: 'SatO2', val: '97% AA', ref: '95–100%', alt: false },
      { test: 'Glicemia capilar', val: '88 mg/dL', ref: '70–140', alt: false },
      { test: 'Sódio', val: '138 mEq/L', ref: '135–145', alt: false },
      { test: 'Cálcio', val: '9,2 mg/dL', ref: '8,5–10,5', alt: false },
      { test: 'TSH', val: '2,0 (normal)', ref: '—', alt: false },
      { test: 'Toxicológico', val: 'Positivo anti-NMDAR a confirmar', ref: '—', alt: true },
      { test: 'Anti-NMDAR IgG LCR', val: 'Positivo (resultado aguardado)', ref: '—', alt: true },
      { test: 'TC de crânio', val: 'Sem alterações estruturais agudas', ref: '—', alt: false },
      { test: 'EEG', val: 'Padrão de atividade lenta difusa', ref: 'Normal', alt: true }
    ],
    image: 'TC de crânio sem contraste: Sem hipodensidades, sem edema, sem desvio de linha média.',
    note: 'Sinais vitais ao início. EEG e TC entregues se solicitados. Anti-NMDAR: resultado pendente — pedir se candidato considerar encefalite autoimune. O candidato deve ser avaliado pela identificação dos sinais catatônicos, pelo uso do lorazepam como teste terapêutico diagnóstico, e pela investigação de encefalite autoimune (anti-NMDAR) como causa de catatonia em mulher jovem.',
    patientProfile: '',
    script: [
      { trigger: 'Estímulo verbal', speech: "Não posso sair daqui. (repete a mesma frase ao ser estimulada verbalmente — ecolalia/verbigeration)" },
      { trigger: 'Ao tentar mover o braço', speech: '(mantém a posição imposta — flexibilidade cérea / catalepsia)' }
    ],
    hiddenInfo: '',
    actorBehavior: ''
  },
  instC: {
    diagnosis: 'Diagnóstico Provisório: Síndrome catatônica de etiologia a esclarecer. Suspeita principal: encefalite autoimune anti-NMDAR (mulher jovem, catatonia, EEG com lentificação difusa, sem causa orgânica metabólica identificada). Diagnósticos diferenciais incluem catatonia em psicose (esquizofrenia, TAB), catatonia por causa orgânica. CID-11: MB23.1 / DSM-5: 293.89.',
    differentials: [
      'Catatonia por transtorno psiquiátrico primário (esquizofrenia, TAB) — mais provável em paciente com histórico psiquiátrico; sem história disponível.',
      'Encefalite autoimune anti-NMDAR — causa crescente de catatonia em mulheres jovens; EEG anormal e ausência de causa metabólica aumentam suspeita; anti-NMDAR a confirmar.',
      'Estado epiléptico não convulsivo — EEG com lentificação pode ocorrer; EEG mostra padrão lento mas não epileptiforme.',
      'Intoxicação/abstinência por substâncias — toxicológico aguardado.',
      'Síndrome neuroléptica maligna — sem uso prévio de antipsicótico relatado; sem febre alta ou rigidez extrema.'
    ],
    context: '',
    justify: '',
    expectedAnamnesis: '',
    expectedPhysical: '',
    expectedExams: [],
    expectedConduct: 'Teste terapêutico com lorazepam: Lorazepam 1–2 mg IV — se a catatonia for de origem psiquiátrica, há resposta em 15–30 min (melhora do mutismo, da rigidez, reaparece o contato verbal). É diagnóstico e terapêutico. (ABP 2022; UpToDate 2024) | Suspender antipsicóticos se em uso (piora a catatonia — síndrome neuroléptica maligna). | Investigação para encefalite autoimune: Anti-NMDAR IgG no LCR (punção lombar), RM de crânio, EEG. | Suporte: Hidratação IV, nutrição enteral se mutismo mantido, profilaxia de TVP. | Internação: UTI ou leito monitorado. | Comunicar à equipe: Verbalizar o diagnóstico de síndrome catatônica, o teste com lorazepam e a investigação em curso.',
    expectedCommunication: '',
    criticalErrors: [
      'Administrar antipsicótico (haloperidol) em catatonia — pode precipitar síndrome neuroléptica maligna',
      'Não realizar o teste terapêutico com lorazepam',
      'Não investigar encefalite autoimune anti-NMDAR em mulher jovem com catatonia',
      'Não solicitar TC de crânio e EEG para afastar causas orgânicas',
      'Não garantir suporte nutricional e de hidratação para paciente em mutismo'
    ]
  },
  instD: {
    title: 'CHECKLIST — MULHER ENCONTRADA NA RUA REPETINDO FRASES E IMÓVEL',
    sections: [
      {
        h: 'COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE',
        items: [
          { item: 'Verbalizou diagnóstico e plano à equipe de forma clara', score: 0.5, ref: 'CFM 1.931/2009' }
        ]
      },
      {
        h: 'AVALIAÇÃO INICIAL',
        items: [
          { item: 'Avaliou ABC imediatamente (via aérea, respiração, circulação)', score: 0.5, ref: 'MS — Emergências, 2022' }
        ]
      },
      {
        h: 'EXAME FÍSICO',
        items: [
          { item: 'Identificou sinais catatônicos: mutismo, rigidez, ecolalia, catalepsia', score: 1.5, ref: 'Bush-Francis Scale; ABP 2022' },
          { item: 'Avaliou pupilas, sinais meníngeos e déficits focais', score: 0.5, ref: 'ABP 2022' }
        ]
      },
      {
        h: 'RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
        items: [
          { item: 'Solicitou glicemia capilar, eletrólitos e TSH', score: 0.5, ref: 'ABP 2022' },
          { item: 'Solicitou TC de crânio e EEG', score: 0.5, ref: 'ABP 2022' },
          { item: 'Suspeitou de encefalite autoimune (anti-NMDAR) em mulher jovem', score: 1.0, ref: '⚠️ UpToDate 2024' }
        ]
      },
      {
        h: 'CONDUTA E ORIENTAÇÃO AO PACIENTE',
        items: [
          { item: 'Realizou teste terapêutico com lorazepam IV', score: 1.5, ref: 'ABP 2022; UpToDate 2024' },
          { item: 'Não administrou antipsicótico (contraindicado em catatonia)', score: 1.5, ref: 'ABP 2022' },
          { item: 'Garantiu hidratação IV e suporte nutricional', score: 0.5, ref: 'ABP 2022' },
          { item: 'Indicou internação em leito monitorado', score: 0.5, ref: 'ABP 2022' }
        ]
      }
    ]
  }
}

]
