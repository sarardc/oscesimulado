    const nefro2 = [
    {
    id: 1,
    title: "Inchaço nas pernas e urina espumosa há 2 semanas",
    sub: "Ambulatório de Clínica Médica",
    tema: "Nefrologia",
    topic: "Síndrome Nefrótica",
    level: "moderado",
    cardAccent: "#5C6BC0",
    instA: {
        scenario: "Ambulatório de Clínica Médica — hospital universitário. Consultório, turno matutino.",
        patient: "M.O., 34 anos, masculino, professor, sem comorbidades conhecidas.",
        complaint: "Inchaço nas pernas e barriga que piora à tarde, e urina com muita espuma há cerca de 2 semanas.",
        tasks: [
        "Realize a anamnese dirigida ao caso.",
        "Realize o exame físico pertinente.",
        "Solicite os exames complementares adequados e justifique verbalmente ao avaliador.",
        "Formule a hipótese diagnóstica principal e dois diagnósticos diferenciais.",
        "Oriente o paciente sobre a conduta inicial proposta."
        ]
    },
    instB: {
        vitals: {
        PA: "138/88 mmHg",
        FC: "82 bpm",
        FR: "16 irpm",
        Tax: "36,6°C",
        Peso: "80 kg",
        Altura: "1,74 m",
        IMC: "26,4 kg/m²"
        },
        physicalGeneral: "Paciente em bom estado geral, corado, hidratado, acianótico, anictérico. Edema periorbitário discreto. Fácies de desconforto leve.",
        physicalSeg: "MMII: Edema bilateral com cacifo 3+/4+ até joelhos, simétrico. | Abdome: Sinal de macicez móvel presente (ascite de pequena monta). Indolor à palpação. Sem visceromegalias. | Cardiovascular: Bulhas rítmicas, normofonéticas, sem sopros. Sem turgência jugular. | Respiratório: Murmúrio vesicular presente bilateralmente, sem ruídos adventícios. | Genitália: Edema escrotal presente (revelar apenas se o candidato solicitar exame da genitália).",
        labs: [
        { test: "Proteína total urinária (24h)", val: "4,8 g/24h", ref: "< 0,15 g/24h", alt: true },
        { test: "Albumina sérica", val: "1,9 g/dL", ref: "3,5–5,0 g/dL", alt: true },
        { test: "Colesterol total", val: "298 mg/dL", ref: "< 200 mg/dL", alt: true },
        { test: "Triglicerídeos", val: "312 mg/dL", ref: "< 150 mg/dL", alt: true },
        { test: "Creatinina sérica", val: "0,9 mg/dL", ref: "0,7–1,2 mg/dL", alt: false },
        { test: "Ureia sérica", val: "32 mg/dL", ref: "15–45 mg/dL", alt: false },
        { test: "Sódio", val: "138 mEq/L", ref: "135–145 mEq/L", alt: false },
        { test: "Potássio", val: "4,1 mEq/L", ref: "3,5–5,0 mEq/L", alt: false },
        { test: "Hemograma", val: "Normal", ref: "—", alt: false },
        { test: "EAS (Urinálise)", val: "Proteinúria 4+, corpos graxos ovais, cilindros lipídicos", ref: "—", alt: true },
        { test: "Glicemia de jejum", val: "92 mg/dL", ref: "70–99 mg/dL", alt: false },
        { test: "TSH", val: "2,1 mUI/L", ref: "0,4–4,0 mUI/L", alt: false },
        { test: "FAN", val: "Negativo", ref: "Negativo", alt: false },
        { test: "Anti-DNA dupla fita", val: "Negativo", ref: "Negativo", alt: false },
        { test: "Complemento C3", val: "112 mg/dL", ref: "90–180 mg/dL", alt: false },
        { test: "Complemento C4", val: "22 mg/dL", ref: "16–47 mg/dL", alt: false }
        ],
        image: "Ultrassonografia de rins e vias urinárias: Rins de dimensões e ecogenicidade normais. Rim direito: 11,2 × 5,1 cm. Rim esquerdo: 11,0 × 5,0 cm. Boa diferenciação corticomedular. Sem hidronefrose, cálculos ou massas. Discreta quantidade de líquido livre em fossa ilíaca direita.",
        note: "Entregar o impresso de sinais vitais ao início da estação. Entregar o exame físico segmentar apenas se o candidato solicitar realizar o exame. Entregar os exames laboratoriais e USG somente se o candidato solicitar verbalmente os exames complementares. Revelar edema escrotal apenas se o candidato solicitar exame da genitália.",
        patientProfile: "M.O., 34 anos, masculino, professor do ensino fundamental, casado, mora com esposa e um filho. Natural e procedente de Belo Horizonte-MG.",
        script: [
        { trigger: "Queixa principal", speech: "Doutor, eu tô preocupado. Faz umas duas semanas que minha barriga e minhas pernas tão inchadas, e quando faço xixi, tá saindo muita espuma. Nunca aconteceu isso antes." },
        { trigger: "Sobre o início", speech: "Começou de repente assim, sem nada. Acordei um dia com o olho inchado e fui piorando." },
        { trigger: "Sobre a urina", speech: "É muita espuma, doutor. Fica aquela bolha que demora pra sumir. Nunca tinha visto isso." },
        { trigger: "Sobre dor", speech: "Não tô sentindo dor, não. Só esse inchaço que incomoda, principalmente no fim do dia." },
        { trigger: "Sobre alimentação e remédios", speech: "Não uso nenhum remédio, não. Não tenho diabetes, pressão... nunca tive nada." },
        { trigger: "Sobre infecções recentes", speech: "Tive uma garganta inflamada umas três semanas atrás, mas passou sozinha. Não tomei antibiótico." },
        { trigger: "Pergunta ativa 1", speech: "O que eu tenho, doutor? É coisa grave no rim?" },
        { trigger: "Pergunta ativa 2", speech: "Eu preciso ficar internado? Posso continuar trabalhando?" }
        ],
        hiddenInfo: "Edema escrotal presente — só revelar se o candidato perguntar sobre edema em outros locais ou solicitar exame da genitália. | Uso de ibuprofeno por 5 dias há 3 semanas para a dor de garganta — só revelar se o candidato perguntar sobre uso de anti-inflamatórios ou medicamentos sem receita.",
        actorBehavior: "Paciente ansioso, colaborativo, visivelmente preocupado. Responde prontamente às perguntas mas não oferece informações espontaneamente. Demonstra alívio quando o candidato demonstra calma e competência. Faz perguntas ativas quando orientado sobre a conduta."
    },
    instC: {
        diagnosis: "Síndrome nefrótica — provável glomerulopatia primária (doença por lesão mínima ou GESF a esclarecer). Contexto: adulto jovem, sem comorbidades, com proteinúria nefrótica, hipoalbuminemia, edema e hiperlipidemia.",
        differentials: [
        "Glomeruloesclerose segmentar e focal (GESF) — diagnóstico diferencial principal em adultos jovens com síndrome nefrótica; diferenciação por biópsia renal.",
        "Nefropatia membranosa — mais comum em adultos; associada a infecções, neoplasias, autoimunidade; FAN e anti-DNA negativos reduzem probabilidade de lúpus, mas biópsia é necessária.",
        "Nefrite lúpica — menos provável pelo FAN e anti-DNA negativos e complemento normal, mas deve ser considerado em adulto jovem.",
        "Nefropatia por AINEs — uso de ibuprofeno recente é fator precipitante possível; deve ser considerado no contexto temporal."
        ],
        context: "Adulto jovem, previamente hígido, apresenta síndrome nefrótica com proteinúria de 4,8 g/24h, hipoalbuminemia grave (1,9 g/dL), hiperlipidemia e edema anasarcático. Quadro compatível com glomerulopatia primária, com sorologias autoimunes negativas e função renal preservada. Uso recente de AINE pode ter contribuído como fator precipitante.",
        justify: "O diagnóstico de síndrome nefrótica é estabelecido pela tétrade clássica: proteinúria > 3,5 g/24h (4,8 g/24h), hipoalbuminemia < 3,5 g/dL (1,9 g/dL), edema (periorbitário, MMII, ascite, escrotal) e hiperlipidemia (colesterol 298 mg/dL, TG 312 mg/dL). Função renal preservada. Sorologias negativas afastam lúpus como causa secundária. Biópsia renal necessária para definição etiológica em adultos.",
        expectedAnamnesis: [
        "Início e progressão do edema (local, horário de piora, simetria)",
        "Caracterização da urina (espuma, hematúria, volume)",
        "Sintomas sistêmicos (febre, artralgia, rash, perda de peso)",
        "Antecedentes de infecções recentes (faringoamigdalite, infecções de pele)",
        "Uso de medicamentos (especialmente AINEs, antibióticos, contraste)",
        "Antecedentes pessoais (HAS, DM, doenças autoimunes, neoplasias)",
        "Histórico familiar de doenças renais",
        "Hábitos de vida (tabagismo, etilismo, dieta hipersódica)",
        "Investigar edema em outros sítios (escroto, face, dispneia)"
        ],
        expectedPhysical: [
        "Sinais vitais: PA limítrofe (138/88 mmHg), FC normal",
        "Inspeção: edema periorbitário, distensão abdominal, edema de MMII",
        "Palpação abdominal: macicez móvel (ascite), ausência de massas ou visceromegalias",
        "Exame de MMII: edema bilateral com cacifo, graduação e simetria",
        "Exame da genitália: edema escrotal",
        "Ausculta pulmonar: afastar derrame pleural",
        "Pesquisa de sinal de Piparote e macicez móvel para ascite"
        ],
        expectedExams: [
        { exam: "Proteinúria de 24h", justify: "Quantificar proteinúria para diagnóstico de síndrome nefrótica", expected: "> 3,5 g/24h" },
        { exam: "Albumina sérica", justify: "Avaliar hipoalbuminemia", expected: "< 3,5 g/dL" },
        { exam: "Lipidograma", justify: "Hiperlipidemia faz parte da tétrade nefrótica", expected: "Colesterol e TG elevados" },
        { exam: "Creatinina e ureia", justify: "Avaliar função renal", expected: "Normais neste caso" },
        { exam: "EAS", justify: "Avaliar sedimento urinário (cilindros, proteinúria)", expected: "Proteinúria 4+, cilindros lipídicos" },
        { exam: "FAN e Anti-DNA", justify: "Rastrear lúpus eritematoso sistêmico como causa secundária", expected: "Negativos" },
        { exam: "Complemento C3 e C4", justify: "Avaliar ativação do complemento (lúpus, GNPE)", expected: "Normais" },
        { exam: "TSH", justify: "Hipotireoidismo como causa de edema e dislipidemia", expected: "Normal" },
        { exam: "Glicemia", justify: "Descartar nefropatia diabética", expected: "Normal" },
        { exam: "USG rins e vias urinárias", justify: "Avaliar morfologia renal, descartar causas obstrutivas", expected: "Rins normais, ascite discreta" }
        ],
        expectedConduct: "Farmacológica: Restrição hídrica e de sódio (< 2 g/dia). Furosemida 40 mg/dia VO com titulação conforme resposta. Estatina para dislipidemia após estabilização (sinvastatina 20–40 mg/dia). Anticoagulação profilática a considerar se albumina < 2,0 g/dL (alto risco trombótico). Não iniciar corticoide antes da biópsia renal em adultos. | Não farmacológica: Dieta hipossódica (< 2 g/dia de sódio), restrição proteica moderada, repouso relativo com elevação dos MMII. | Encaminhamento: Encaminhamento urgente à Nefrologia para biópsia renal — imprescindível para diagnóstico etiológico e decisão terapêutica em adultos. | Orientações: Explicar a síndrome nefrótica, a necessidade de biópsia para identificar a causa, importância da restrição de sal, controle do peso diário, sinais de alarme (piora do inchaço, falta de ar, dor nas pernas — suspeita de TVP). | Seguimento: Retorno em 7 dias ou antes se piora clínica. Controle de peso diário.",
        expectedCommunication: "Apresentação: Apresentar-se pelo nome e função. Cumprimentar o paciente, perguntar como prefere ser chamado. | Comunicação do diagnóstico: Explicar que o rim está deixando passar muita proteína para a urina, o que causa o inchaço e as alterações nos exames; que é necessário um exame chamado biópsia para descobrir a causa exata. | Escuta ativa: Acolher a ansiedade do paciente, validar preocupações, responder às perguntas ativas com clareza e sem jargão técnico.",
        criticalErrors: [
        "Iniciar corticoterapia empírica em adulto sem biópsia renal prévia.",
        "Não solicitar proteinúria de 24h ou albumina sérica (deixar de confirmar a síndrome nefrótica).",
        "Não encaminhar à Nefrologia para biópsia renal.",
        "Prescrever AINE para sintomas (contraindicado — pode agravar a lesão renal e a proteinúria).",
        "Não investigar causas secundárias (deixar de solicitar FAN, anti-DNA, TSH, glicemia)."
        ]
    },
    instD: {
        title: "CHECKLIST — INCHAÇO NAS PERNAS E URINA ESPUMOSA HÁ 2 SEMANAS",
        sections: [
        {
            h: "COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
            items: [
            { item: "Apresentou-se pelo nome ao paciente", score: 0.5, ref: "CFM Res. 2.232/2019" },
            { item: "Perguntou como o paciente estava se sentindo emocionalmente ou acolheu a preocupação explicitamente", score: 0.5, ref: "CFM Res. 2.232/2019" },
            { item: "Explicou o diagnóstico em linguagem acessível, sem jargão técnico", score: 0.5, ref: "CFM Res. 2.232/2019" },
            { item: "Perguntou ao paciente se tinha dúvidas antes de encerrar a consulta", score: 0.5, ref: "CFM Res. 2.232/2019" }
            ]
        },
        {
            h: "ANAMNESE",
            items: [
            { item: "Investigou início, localização e progressão do edema", score: 0.5, ref: "Harrison, 21ª ed.; SBN 2023" },
            { item: "Questionou características da urina (espuma, cor, volume)", score: 0.5, ref: "SBN 2023" },
            { item: "Investigou uso de medicamentos (incluindo AINEs e automedicação)", score: 1.0, ref: "SBN 2023; RENAME 2022" },
            { item: "Questionou antecedentes de infecções recentes (faringoamigdalite, pele)", score: 0.5, ref: "SBN 2023" },
            { item: "Investigou antecedentes pessoais (DM, HAS, doenças autoimunes)", score: 0.5, ref: "SBN 2023" }
            ]
        },
        {
            h: "EXAME FÍSICO",
            items: [
            { item: "Aferiu e interpretou a pressão arterial", score: 0.5, ref: "SBC 7ª Diretriz HAS 2016" },
            { item: "Avaliou e graduou o edema de membros inferiores (cacifo, simetria)", score: 0.5, ref: "SBN 2023" },
            { item: "Pesquisou ascite (macicez móvel ou sinal de Piparote)", score: 1.0, ref: "SBN 2023" },
            { item: "Realizou ausculta pulmonar (afastar derrame pleural)", score: 0.5, ref: "SBN 2023" }
            ]
        },
        {
            h: "RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO",
            items: [
            { item: "Formulou hipótese de síndrome nefrótica como diagnóstico principal", score: 1.0, ref: "SBN 2023" },
            { item: "Solicitou proteinúria de 24h e albumina sérica para confirmar síndrome nefrótica", score: 1.0, ref: "SBN 2023" },
            { item: "Solicitou FAN e/ou anti-DNA para rastrear causa autoimune secundária", score: 0.5, ref: "SBN 2023" },
            { item: "Indicou encaminhamento à Nefrologia para biópsia renal", score: 1.0, ref: "SBN 2023" }
            ]
        },
        {
            h: "CONDUTA E ORIENTAÇÃO AO PACIENTE",
            items: [
            { item: "Orientou restrição de sódio na dieta (< 2 g/dia)", score: 0.5, ref: "MS/Protocolo SN 2022" },
            { item: "Prescreveu ou indicou diurético de alça (furosemida) para controle do edema", score: 0.5, ref: "MS/Protocolo SN 2022" },
            { item: "Contraindicou ou evitou AINE no caso (verbalizar ou não prescrever)", score: 0.5, ref: "SBN 2023; RENAME 2022" },
            { item: "Orientou sinais de alarme (piora do edema, falta de ar, dor nos membros) e retorno precoce", score: 0.5, ref: "SBN 2023" }
            ]
        }
        ]
    }
    },

   {
  id: 2,
  title: "Urina marrom-escura, inchaço no rosto e pressão alta após dor de garganta",
  sub: "Pronto-Atendimento — Clínica Médica",
  tema: "Nefrologia",
  topic: "Síndrome Nefrítica",
  level: "moderado",
  cardAccent: "#E53935",
  instA: {
    scenario: "Pronto-atendimento de hospital geral. Sala de consultas, turno vespertino.",
    patient: "T.A., 19 anos, masculino, estudante universitário, sem comorbidades conhecidas.",
    complaint: "Urina escura 'como coca-cola', inchaço no rosto ao acordar e pressão alta detectada na triagem, há 4 dias.",
    tasks: [
      "Realize a anamnese dirigida ao caso.",
      "Realize o exame físico pertinente.",
      "Solicite e interprete os exames complementares adequados.",
      "Formule a hipótese diagnóstica principal e dois diagnósticos diferenciais.",
      "Proponha a conduta inicial e oriente o paciente."
    ]
  },
  instB: {
    vitals: {
      PA: "158/100 mmHg",
      FC: "88 bpm",
      FR: "18 irpm",
      Tax: "36,8°C",
      Peso: "72 kg",
      Altura: "1,76 m",
      IMC: "23,2 kg/m²"
    },
    physicalGeneral: "Paciente em bom estado geral, corado, hidratado, acianótico, anictérico. Edema periorbitário bilateral, mais evidente ao acordar. Sem edema de MMII significativo.",
    physicalSeg: "MMII: Edema discreto com cacifo 1+/4+ bilateral. | Cardiovascular: Bulhas rítmicas, normofonéticas, sem sopros. Sem turgência jugular. | Respiratório: Murmúrio vesicular presente bilateralmente, sem ruídos adventícios. | Abdome: Plano, indolor, sem massas ou visceromegalias. | Orofaringe: Sem sinais inflamatórios ativos no momento do exame.",
    labs: [
      { test: "Creatinina sérica", val: "2,1 mg/dL", ref: "0,7–1,2 mg/dL", alt: true },
      { test: "Ureia sérica", val: "68 mg/dL", ref: "15–45 mg/dL", alt: true },
      { test: "Sódio", val: "136 mEq/L", ref: "135–145 mEq/L", alt: false },
      { test: "Potássio", val: "4,8 mEq/L", ref: "3,5–5,0 mEq/L", alt: false },
      { test: "Albumina sérica", val: "3,2 g/dL", ref: "3,5–5,0 g/dL", alt: true },
      { test: "Proteína total urinária (24h)", val: "1,4 g/24h", ref: "< 0,15 g/24h", alt: true },
      { test: "EAS (Urinálise)", val: "Hematúria macroscópica 4+, cilindros hemáticos, proteinúria 2+", ref: "—", alt: true },
      { test: "Hemograma", val: "Hb 11,8 g/dL; leucócitos 9.200/mm³; plaquetas 198.000/mm³", ref: "—", alt: true },
      { test: "ASO (ASLO)", val: "480 UI/mL", ref: "< 200 UI/mL", alt: true },
      { test: "Complemento C3", val: "42 mg/dL", ref: "90–180 mg/dL", alt: true },
      { test: "Complemento C4", val: "18 mg/dL", ref: "16–47 mg/dL", alt: false },
      { test: "FAN", val: "Negativo", ref: "Negativo", alt: false },
      { test: "Anti-DNA dupla fita", val: "Negativo", ref: "Negativo", alt: false },
      { test: "Glicemia de jejum", val: "88 mg/dL", ref: "70–99 mg/dL", alt: false }
    ],
    image: "Ultrassonografia de rins e vias urinárias: Rins aumentados de volume bilateralmente. Rim direito: 12,8 × 5,8 cm. Rim esquerdo: 12,5 × 5,6 cm. Ecogenicidade discretamente aumentada. Boa diferenciação corticomedular. Sem hidronefrose, cálculos ou massas. Bexiga de aspecto normal.",
    note: "Entregar sinais vitais ao início da estação. Entregar o impresso de exame físico se o candidato solicitar realizar o exame. Entregar exames laboratoriais e USG apenas se solicitados verbalmente pelo candidato. A orofaringe está sem sinais inflamatórios ativos — o candidato não encontrará a infecção se examinar agora, mas deve investigar o histórico de faringoamigdalite na anamnese.",
    patientProfile: "T.A., 19 anos, masculino, estudante de Engenharia, solteiro, mora em república com amigos. Natural e procedente de Ribeirão Preto-SP.",
    script: [
      { trigger: "Queixa principal", speech: "Doutor, meu xixi tá saindo marrom há uns 4 dias, parece coca-cola mesmo. Aí a enfermeira mediu minha pressão e disse que tava alta. E quando eu acordo de manhã meu rosto tá inchado." },
      { trigger: "Sobre o início", speech: "Começou assim do nada. Eu tive uma garganta muito inflamada umas 3 semanas atrás, fiquei uns 5 dias com dor horrível, febre, e aí passou." },
      { trigger: "Sobre tratamento da garganta", speech: "Não fui ao médico, não. Tomei dipirona e foi passando. Não tomei antibiótico." },
      { trigger: "Sobre a urina", speech: "É escura mesmo, tipo marrom-alaranjado. Não dói pra urinar, não tenho vontade de urinar mais vezes que o normal." },
      { trigger: "Sobre o inchaço", speech: "O rosto fica inchado de manhã, principalmente ao redor dos olhos. À tarde melhora um pouco." },
      { trigger: "Sobre volume urinário", speech: "Acho que tô urinando menos do que o normal, mas não tenho certeza." },
      { trigger: "Pergunta ativa 1", speech: "Doutor, minha urina tá assim por causa da garganta? Tem relação?" },
      { trigger: "Pergunta ativa 2", speech: "Eu vou precisar ficar internado? É grave isso?" }
    ],
    hiddenInfo: "Irmão mais novo teve um episódio semelhante há 2 anos, com 'problema nos rins' — só revelar se candidato perguntar sobre histórico familiar de doenças renais. | Paciente relata que o volume de urina diminuiu nas últimas 48 horas (oligúria) — só revelar se o candidato perguntar especificamente sobre quantidade de urina por dia.",
    actorBehavior: "Jovem ansioso, um pouco assustado com a situação. Cooperativo e comunicativo. Responde bem quando o candidato explica o que está investigando. Reage com surpresa ao saber da relação entre a garganta e o rim."
  },
  instC: {
    diagnosis: "Glomerulonefrite pós-estreptocócica (GNPE) — síndrome nefrítica aguda em jovem, 2–3 semanas após faringoamigdalite estreptocócica não tratada. Evidenciada por hematúria macroscópica, oligúria, edema, hipertensão, queda do C3, elevação do ASLO e redução da função renal.",
    differentials: [
      "Nefrite lúpica — afastada pelo FAN e anti-DNA negativos; complemento C4 normal; ausência de outros achados sistêmicos de LES.",
      "Nefropatia por IgA (doença de Berger) — também causa hematúria em jovens, mas tipicamente surge 1–2 dias após infecção (hematúria sinfaringítica) e não tem consumo de C3 ou elevação de ASLO.",
      "Vasculite ANCA-associada — possível, mas sem sintomas sistêmicos (hemoptise, sinusite, púrpura); sorologias ANCA não coletadas ainda; diagnóstico por biópsia."
    ],
    context: "Jovem de 19 anos apresenta síndrome nefrítica aguda caracterizada por hematúria macroscópica com cilindros hemáticos, proteinúria moderada, edema periorbitário, hipertensão arterial e queda da função renal, precedida por faringoamigdalite não tratada há 2–3 semanas. O perfil sorológico (ASLO elevado, C3 reduzido, FAN negativo) é plenamente compatível com glomerulonefrite pós-estreptocócica.",
    justify: "A tétrade da síndrome nefrítica está presente: hematúria (macroscópica com cilindros hemáticos), proteinúria moderada (1,4 g/24h — < 3,5 g, distinguindo de síndrome nefrótica), edema e hipertensão arterial. O intervalo de 2–3 semanas entre faringoamigdalite e início dos sintomas renais é clássico da GNPE. ASLO elevado (480 UI/mL) confirma infecção estreptocócica recente. Queda do C3 com C4 normal aponta ativação da via alternativa do complemento, padrão típico da GNPE. FAN e anti-DNA negativos afastam lúpus.",
    expectedAnamnesis: "Caracterização da hematúria (cor, início, dor, volume) | Investigar infecção recente (faringoamigdalite, impetigo, infecção de pele) nas últimas 2–4 semanas | Questionar tratamento da infecção anterior (antibiótico ou não) | Investigar edema (localização, horário, progressão) | Questionar volume urinário diário (oligúria) | Investigar cefaleia (relacionada à HAS) | Antecedentes pessoais e familiares de doença renal | Uso de medicamentos | Sintomas sistêmicos sugestivos de lúpus (artralgia, rash malar, fotossensibilidade)",
    expectedPhysical: "Sinais vitais: PA 158/100 mmHg (hipertensão importante em jovem) | Inspeção: edema periorbitário bilateral | MMII: edema discreto com cacifo | Orofaringe: sem sinais ativos no momento | Ausculta cardíaca e pulmonar: afastar sinais de sobrecarga volêmica | Fundo de olho se disponível: afastar hipertensão maligna (não obrigatório em 5 min)",
    expectedExams: [
      { exam: "EAS com sedimento", justify: "Confirmar hematúria e presença de cilindros hemáticos", expected: "Hematúria 4+, cilindros hemáticos" },
      { exam: "Creatinina e ureia", justify: "Avaliar função renal", expected: "Elevadas" },
      { exam: "Proteinúria de 24h", justify: "Quantificar proteinúria", expected: "Moderada (< 3,5 g)" },
      { exam: "ASLO", justify: "Confirmar infecção estreptocócica recente", expected: "Elevado" },
      { exam: "Complemento C3 e C4", justify: "Padrão de ativação do complemento", expected: "C3 baixo, C4 normal" },
      { exam: "FAN e anti-DNA", justify: "Excluir LES", expected: "Negativos" },
      { exam: "USG renal", justify: "Avaliar morfologia renal", expected: "Rins aumentados, sem obstrução" },
      { exam: "Hemograma", justify: "Avaliar anemia dilucional e infecção", expected: "Anemia leve" },
      { exam: "Eletrólitos (Na, K)", justify: "Avaliar distúrbios hidroeletrolíticos", expected: "K no limite superior" }
    ],
    expectedConduct: "Farmacológica: Anti-hipertensivo: anlodipino 5 mg/dia ou nifedipino de ação prolongada (GNPE não tem indicação de IECA na fase aguda se função renal já reduzida — cautela). Diurético de alça (furosemida) se sinais de sobrecarga volêmica. Penicilina benzatina 1.200.000 UI IM dose única para erradicar o estreptococo (se infecção ainda ativa ou não tratada — aqui indicado para eliminar possível foco residual). Não há tratamento imunossupressor específico na GNPE — doença autolimitada na maioria dos casos. | Não farmacológica: Restrição hídrica e de sódio. Repouso relativo. Monitorização de PA, débito urinário e função renal. | Encaminhamento: Internação hospitalar para monitorização em caso de oligúria, hipercalemia ou hipertensão não controlada. Encaminhamento à Nefrologia. | Orientações ao paciente: Explicar a relação entre a garganta não tratada e a inflamação renal. Orientar sobre a natureza autolimitada da GNPE na maioria dos casos. Sinais de alarme: anúria, piora da cefaleia, edema grave, dispneia. | Seguimento: Controle laboratorial em 1–2 semanas. O C3 deve normalizar em 6–8 semanas. Proteinúria e hematúria microscópica podem persistir por meses.",
    expectedCommunication: "Apresentação: Apresentar-se pelo nome, cumprimentar o paciente, demonstrar atenção à ansiedade do jovem. | Comunicação do diagnóstico: Explicar que a garganta inflamada não tratada desencadeou uma reação do sistema imune que inflamou os rins — relação temporal e causal em linguagem acessível. | Escuta ativa: Validar o medo do paciente, responder com clareza se é grave e se vai precisar de internação, baseando-se nos achados clínicos.",
    criticalErrors: [
      "Não investigar infecção prévia de vias aéreas superiores (perder o diagnóstico etiológico).",
      "Confundir com síndrome nefrótica (não reconhecer a distinção: cilindros hemáticos, hematúria macroscópica, proteinúria < 3,5 g, hipertensão).",
      "Não solicitar ASLO e complemento C3 (perder a confirmação diagnóstica).",
      "Iniciar imunossupressor (corticoide) — não indicado na GNPE, que é autolimitada.",
      "Não reconhecer a hipertensão como urgência em jovem e não tratar."
    ]
  },
  instD: {
    title: "CHECKLIST — URINA ESCURA, INCHAÇO E PRESSÃO ALTA APÓS DOR DE GARGANTA",
    sections: [
      {
        h: "COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
        items: [
          { item: "Apresentou-se pelo nome ao paciente", score: 0.5, ref: "CFM Res. 2.232/2019" },
          { item: "Acolheu a preocupação do paciente verbalmente (ex: \"Entendo que isso está te assustando\")", score: 0.5, ref: "CFM Res. 2.232/2019" },
          { item: "Explicou a relação entre a infecção de garganta e o problema renal em linguagem acessível", score: 0.5, ref: "CFM Res. 2.232/2019" },
          { item: "Perguntou se o paciente tinha dúvidas antes de encerrar", score: 0.5, ref: "CFM Res. 2.232/2019" }
        ]
      },
      {
        h: "ANAMNESE",
        items: [
          { item: "Investigou características da urina (cor, volume, dor ao urinar)", score: 0.5, ref: "SBN 2023" },
          { item: "Investigou infecção recente de vias aéreas ou pele nas últimas 2–4 semanas", score: 1.0, ref: "SBN 2023; KDIGO 2012 ⚠️" },
          { item: "Questionou tratamento da infecção anterior (antibiótico ou não)", score: 0.5, ref: "SBN 2023" },
          { item: "Investigou volume urinário diário (oligúria)", score: 0.5, ref: "SBN 2023" },
          { item: "Investigou antecedentes familiares de doença renal", score: 0.5, ref: "SBN 2023" }
        ]
      },
      {
        h: "EXAME FÍSICO",
        items: [
          { item: "Aferiu e interpretou a pressão arterial (identificar hipertensão em jovem)", score: 1.0, ref: "SBC 7ª Diretriz HAS 2016" },
          { item: "Avaliou edema (localização, cacifo, graduação)", score: 0.5, ref: "SBN 2023" },
          { item: "Realizou ausculta pulmonar para afastar sobrecarga volêmica", score: 0.5, ref: "SBN 2023" }
        ]
      },
      {
        h: "RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO",
        items: [
          { item: "Formulou hipótese de síndrome nefrítica / GNPE como diagnóstico principal", score: 1.0, ref: "SBN 2023" },
          { item: "Solicitou EAS com sedimento para identificar cilindros hemáticos", score: 0.5, ref: "SBN 2023" },
          { item: "Solicitou ASLO e complemento C3 para confirmar etiologia estreptocócica", score: 1.0, ref: "SBN 2023" },
          { item: "Diferenciou síndrome nefrítica de síndrome nefrótica (verbalizar distinção)", score: 0.5, ref: "SBN 2023" }
        ]
      },
      {
        h: "CONDUTA E ORIENTAÇÃO AO PACIENTE",
        items: [
          { item: "Indicou anti-hipertensivo adequado (anlodipino ou similar)", score: 0.5, ref: "SBC 2016; MS 2022" },
          { item: "Indicou penicilina benzatina para erradicação do estreptococo", score: 0.5, ref: "MS/RENAME 2022" },
          { item: "Não prescreveu ou contraindicou imunossupressor (corticoide)", score: 0.5, ref: "SBN 2023" },
          { item: "Orientou sinais de alarme (anúria, piora do edema, dispneia) e necessidade de internação", score: 0.5, ref: "SBN 2023" }
        ]
      }
    ]
  }
},

{
  id: 3,
  title: "Paciente com pouco xixi e confusão mental após cirurgia",
  sub: "Enfermaria de Cirurgia Geral — Hospital Geral",
  tema: "Nefrologia",
  topic: "Lesão Renal Aguda",
  level: "moderado",
  cardAccent: "#FF7043",
  instA: {
    scenario: "Enfermaria de Cirurgia Geral — hospital público de médio porte. Leito hospitalar, turno matutino, 2º dia de pós-operatório de colecistectomia aberta por colecistite aguda.",
    patient: "R.F., 62 anos, masculino, aposentado, com histórico de hipertensão arterial sistêmica e uso de losartana 50 mg/dia.",
    complaint: "Equipe de enfermagem relata que o paciente urinou muito pouco nas últimas 12 horas (100 mL) e está um pouco confuso desde a madrugada.",
    tasks: [
      "Realize a anamnese direcionada ao contexto clínico atual.",
      "Realize o exame físico pertinente.",
      "Solicite os exames complementares adequados e justifique verbalmente.",
      "Identifique a causa mais provável e classifique a lesão renal aguda.",
      "Proponha a conduta inicial e oriente a equipe sobre os próximos passos."
    ]
  },
  instB: {
    vitals: {
      PA: "98/60 mmHg",
      FC: "108 bpm",
      FR: "20 irpm",
      Tax: "37,9°C",
      Peso: "78 kg",
      Altura: "1,70 m",
      IMC: "27,0 kg/m²"
    },
    physicalGeneral: "Paciente confuso, desorientado no tempo, sonolento mas responsivo a estímulos verbais. Hipocorado 2+/4+, desidratado (mucosas secas, turgor cutâneo reduzido), acianótico, anictérico. Olhos fundos.",
    physicalSeg: "Cardiovascular: Bulhas rítmicas, taquicárdicas, sem sopros. Turgência jugular ausente. | Respiratório: Murmúrio vesicular presente bilateralmente, sem ruídos adventícios. | Abdome: Ferida operatória em hipocôndrio direito com curativo seco e íntegro. Abdome discretamente tenso, doloroso à palpação difusa leve, sem sinais de peritonite. RHA presentes e diminuídos. | MMII: Sem edema. Perfusão periférica reduzida (tempo de enchimento capilar > 3 segundos). | Sonda vesical de demora: Drenando urina concentrada e amarelo-escura. Diurese nas últimas 12h: 100 mL (< 0,5 mL/kg/h).",
    labs: [
      { test: "Creatinina sérica (atual)", val: "3,2 mg/dL", ref: "0,7–1,2 mg/dL", alt: true },
      { test: "Creatinina sérica (pré-op, 7 dias atrás)", val: "1,0 mg/dL", ref: "0,7–1,2 mg/dL", alt: false },
      { test: "Ureia sérica", val: "98 mg/dL", ref: "15–45 mg/dL", alt: true },
      { test: "Sódio", val: "132 mEq/L", ref: "135–145 mEq/L", alt: true },
      { test: "Potássio", val: "5,6 mEq/L", ref: "3,5–5,0 mEq/L", alt: true },
      { test: "Bicarbonato", val: "17 mEq/L", ref: "22–26 mEq/L", alt: true },
      { test: "pH venoso", val: "7,28", ref: "7,35–7,45", alt: true },
      { test: "Hemoglobina", val: "9,2 g/dL", ref: "13–17 g/dL", alt: true },
      { test: "Leucócitos", val: "14.800/mm³", ref: "4.000–11.000/mm³", alt: true },
      { test: "Plaquetas", val: "210.000/mm³", ref: "150.000–400.000/mm³", alt: false },
      { test: "EAS (Urinálise)", val: "Urina concentrada, densidade 1.028, sem hematúria, sem proteinúria significativa, sem cilindros", ref: "—", alt: true },
      { test: "Sódio urinário", val: "12 mEq/L", ref: "—", alt: true },
      { test: "FENa (calculada)", val: "0,3%", ref: "> 1% = renal; < 1% = pré-renal", alt: true }
    ],
    image: "Ultrassonografia de rins e vias urinárias (à beira leito): Rins de dimensões e morfologia normais. Rim direito: 10,8 × 4,9 cm. Rim esquerdo: 10,6 × 4,8 cm. Ausência de hidronefrose bilateralmente. Bexiga com cateter vesical, sem distensão. Sem coleções intra-abdominais evidentes.",
    note: "Nesta estação, o candidato assume o papel de médico plantonista chamado à beira do leito. Entregar a folha de sinais vitais e o resumo da diurese ao início da estação. O exame físico é fornecido como impresso ao candidato que solicitar realizar o exame (o ator representa um paciente confuso — respostas monossilábicas, cooperação parcial). Entregar exames laboratoriais e USG somente se solicitados. A creatinina pré-operatória deve ser entregue junto ao painel laboratorial para permitir o diagnóstico de LRA.",
    patientProfile: "R.F., 62 anos, masculino, aposentado (ex-motorista de caminhão), casado, 2 filhos. Hipertenso há 8 anos, em uso de losartana 50 mg/dia. Submetido a colecistectomia aberta por colecistite aguda há 2 dias.",
    script: [
      { trigger: "Queixa principal (confuso)", speech: "Tô... com sede... muita sede... onde tô?" },
      { trigger: "Sobre dor", speech: "Dói aqui... (aponta para o abdome)" },
      { trigger: "Sobre urina", speech: "Não... não tô... conseguindo... (confuso, não sabe informar bem)" },
      { trigger: "Sobre tonteira", speech: "Tô tonto... fraqueza..." },
      { trigger: "Pergunta ativa 1", speech: "Doutor... tô bem? O que tá acontecendo comigo?" },
      { trigger: "Pergunta ativa 2", speech: "Vai melhorar?" }
    ],
    hiddenInfo: "O balanço hídrico das últimas 24h está negativo em 1.800 mL (perda intraoperatória + reposição insuficiente no pós-operatório) — só revelar se o candidato perguntar especificamente sobre o balanço hídrico ou hidratação venosa no pós-operatório. | A losartana foi mantida no pós-operatório sem ajuste, apesar da hipotensão — só revelar se o candidato perguntar sobre medicamentos em uso no pós-operatório.",
    actorBehavior: "Paciente desorientado, sonolento, com resposta a estímulos verbais. Fala fragmentada, monossilábica. Não consegue fornecer história adequada. O candidato deve ser capaz de reconhecer que precisa buscar informações no prontuário e com a equipe."
  },
  instC: {
    diagnosis: "Lesão Renal Aguda (LRA) estágio 3 KDIGO — etiologia pré-renal por hipovolemia no pós-operatório imediato (balanço hídrico negativo, hipotensão, taquicardia, FENa < 1%, urina concentrada). Fatores contribuintes: uso de losartana mantido em contexto de hipoperfusão, cirurgia de grande porte.",
    differentials: [
      "LRA intrínseca (necrose tubular aguda — NTA isquêmica) — pode coexistir se a hipoperfusão foi prolongada; FENa ainda < 1% neste momento sugere fase inicial/pré-renal ainda reversível, mas deve ser monitorada.",
      "LRA pós-renal (obstrução) — afastada pela USG (ausência de hidronefrose, cateter vesical funcionante).",
      "Sepse abdominal com LRA — leucocitose e febre subclínica presentes; coleção intra-abdominal afastada pela USG; deve ser monitorada se não houver melhora com hidratação."
    ],
    context: "Paciente idoso hipertenso, em pós-operatório de colecistectomia aberta, evolui com oligúria (< 0,5 mL/kg/h), hipotensão, taquicardia, confusão mental e elevação da creatinina (1,0 → 3,2 mg/dL em 48h), configurando LRA estágio 3 KDIGO. A causa mais provável é hipovolemia pré-renal com balanço hídrico negativo não corrigido e manutenção inadequada de bloqueador do sistema renina-angiotensina.",
    justify: "LRA definida por KDIGO 2012 ⚠️ (adotada pelo Consenso Brasileiro de Nefrologia) como aumento da creatinina ≥ 3× o valor basal em < 48h (1,0 → 3,2 mg/dL = 3,2×) ou oligúria < 0,5 mL/kg/h por > 6h. Estágio 3: creatinina > 3× o basal. Padrão pré-renal confirmado por FENa 0,3% (< 1%), urina concentrada (densidade 1.028, sódio urinário 12 mEq/L), ausência de cilindros granulosos ou hemáticos. Hipotensão e taquicardia indicam hipovolemia. Losartana mantida contribui com vasodilatação da arteríola eferente reduzindo ainda mais a TFG.",
    expectedAnamnesis: "Tempo de oligúria e volume urinário nas últimas 12–24h | Balanço hídrico pós-operatório (entradas vs. perdas) | Hidratação venosa prescrita no pós-operatório | Medicamentos em uso (especialmente AINEs, aminoglicosídeos, IECA/BRA) | Hipotensão intraoperatória ou perdas sanguíneas | Febre e sinais de infecção | Creatinina basal pré-operatória",
    expectedPhysical: "Sinais vitais: hipotensão (98/60), taquicardia (108 bpm) — sinais de hipovolemia | Estado de consciência e orientação (Glasgow) | Avaliação de hidratação: turgor cutâneo, mucosas, olhos fundos | Tempo de enchimento capilar (> 3 segundos) | Turgência jugular (ausente — confirma hipovolemia) | Exame abdominal: ferida operatória, sinais de peritonite | Débito da sonda vesical: volume e aspecto da urina",
    expectedExams: [
      { exam: "Creatinina e ureia sérica", justify: "Confirmar e estadiar LRA", expected: "Creatinina 3,2; ureia 98" },
      { exam: "Creatinina basal (pré-op)", justify: "Calcular variação para estadiamento KDIGO", expected: "1,0 mg/dL" },
      { exam: "Eletrólitos (Na, K)", justify: "Hipercalemia é emergência na LRA", expected: "K 5,6 mEq/L (elevado)" },
      { exam: "Gasometria venosa / bicarbonato", justify: "Acidose metabólica na LRA", expected: "pH 7,28, HCO3 17" },
      { exam: "EAS com sedimento urinário", justify: "Diferenciar pré-renal (urina limpa) de intrínseco (cilindros granulosos)", expected: "Urina concentrada, sem cilindros" },
      { exam: "Sódio urinário / FENa", justify: "Calcular FENa para classificar LRA", expected: "FENa < 1% = pré-renal" },
      { exam: "Hemograma", justify: "Avaliar infecção e anemia", expected: "Leucocitose, anemia" },
      { exam: "USG renal (POCUS)", justify: "Afastar obstrução (pós-renal)", expected: "Sem hidronefrose" },
      { exam: "ECG", justify: "Hipercalemia pode causar arritmia", expected: "Avaliar alterações por K+ 5,6" }
    ],
    expectedConduct: "Farmacológica: Reposição volêmica com solução cristaloide isotônica (SF 0,9% ou Ringer lactato) — 500 mL em bolus IV, reavaliando resposta hemodinâmica a cada 30 min. Suspender losartana imediatamente. Monitorizar K+ — se > 6,0 ou alterações no ECG: gluconato de cálcio 10% EV, bicarbonato de sódio, insulina + glicose. Suspender AINEs se em uso. Não usar diurético de alça para 'forçar' diurese em LRA pré-renal hipovolêmica. | Não farmacológica: Monitorização rigorosa do débito urinário (horária via sonda). Balanço hídrico rigoroso. Suspender medicamentos nefrotóxicos. Não realizar contraste iodado enquanto houver LRA. | Encaminhamento: Acionar Nefrologia se ausência de resposta à reposição volêmica em 2–4h, hipercalemia grave ou acidose progressiva. Considerar UTI se instabilidade hemodinâmica persistente. | Orientações ao paciente/família: Explicar que os rins estão sob estresse por causa da cirurgia e da pouca hidratação; que o tratamento é a reposição de líquidos; que será monitorado de perto. | Seguimento: Controle de creatinina, ureia e eletrólitos a cada 6–12h. Reavaliação clínica contínua.",
    expectedCommunication: "Apresentação: Identificar-se ao paciente mesmo que este esteja confuso. Comunicar à família o diagnóstico e o plano. | Comunicação do diagnóstico: Explicar que os rins estão com dificuldade de funcionar por causa da falta de líquido e da queda da pressão, e que o tratamento imediato é repor esses líquidos. | Escuta ativa: Demonstrar calma e competência para tranquilizar a equipe e os familiares.",
    criticalErrors: [
      "Não reconhecer a hipercalemia (K+ 5,6) e não solicitar ECG — risco de arritmia fatal.",
      "Prescrever diurético de alça (furosemida) para 'forçar' diurese sem antes repor volume — agrava hipovolemia e LRA.",
      "Não suspender a losartana — mantém o bloqueio do SRAA em contexto de hipoperfusão renal.",
      "Não calcular ou considerar a variação de creatinina basal para estadiar a LRA.",
      "Não afastar causa pós-renal (não solicitar USG ou verificar funcionamento do cateter vesical)."
    ]
  },
  instD: {
    title: "CHECKLIST — OLIGÚRIA E CONFUSÃO MENTAL NO PÓS-OPERATÓRIO",
    sections: [
      {
        h: "COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
        items: [
          { item: "Apresentou-se ao paciente e/ou familiares mesmo em contexto de urgência", score: 0.5, ref: "CFM Res. 2.232/2019" },
          { item: "Comunicou o diagnóstico e plano de forma clara à família ou equipe", score: 0.5, ref: "CFM Res. 2.232/2019" }
        ]
      },
      {
        h: "ANAMNESE",
        items: [
          { item: "Investigou volume urinário nas últimas horas e balanço hídrico pós-operatório", score: 1.0, ref: "KDIGO 2012 ⚠️; SBN 2023" },
          { item: "Questionou medicamentos em uso no pós-operatório (IECA/BRA, AINEs, aminoglicosídeos)", score: 1.0, ref: "SBN 2023; RENAME 2022" },
          { item: "Obteve creatinina basal pré-operatória para comparação", score: 0.5, ref: "KDIGO 2012 ⚠️; SBN 2023" },
          { item: "Investigou hipotensão ou sangramento intraoperatório", score: 0.5, ref: "SBN 2023" }
        ]
      },
      {
        h: "EXAME FÍSICO",
        items: [
          { item: "Avaliou sinais de hipovolemia (mucosas, turgor, TEC, turgência jugular)", score: 1.0, ref: "SBN 2023" },
          { item: "Avaliou nível de consciência e orientação (Glasgow simplificado)", score: 0.5, ref: "SBN 2023" },
          { item: "Verificou débito e aspecto da urina na sonda vesical", score: 0.5, ref: "SBN 2023" }
        ]
      },
      {
        h: "RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO",
        items: [
          { item: "Classificou a LRA como pré-renal (hipovolemia) com base nos achados", score: 1.0, ref: "KDIGO 2012 ⚠️; SBN 2023" },
          { item: "Solicitou eletrólitos e identificou hipercalemia como complicação de risco", score: 1.0, ref: "SBN 2023" },
          { item: "Solicitou USG renal para afastar causa pós-renal", score: 0.5, ref: "SBN 2023" }
        ]
      },
      {
        h: "CONDUTA E ORIENTAÇÃO AO PACIENTE",
        items: [
          { item: "Indicou reposição volêmica com cristaloide isotônico como conduta inicial", score: 0.5, ref: "SBN 2023; MS 2022" },
          { item: "Suspendeu a losartana (verbalizar ou prescrever suspensão)", score: 0.5, ref: "SBN 2023; RENAME 2022" },
          { item: "Não prescreveu diurético de alça para forçar diurese em contexto de hipovolemia", score: 0.5, ref: "SBN 2023" },
          { item: "Indicou monitorização rigorosa do débito urinário e repetição dos eletrólitos", score: 0.5, ref: "SBN 2023" }
        ]
      }
    ]
  }
},

{
  id: 4,
  title: "Dor ao urinar e urina turva há 3 dias em mulher jovem",
  sub: "UBS — Atenção Primária à Saúde",
  tema: "Nefrologia",
  topic: "Infecção do Trato Urinário",
  level: "moderado",
  cardAccent: "#26A69A",
  instA: {
    scenario: "Unidade Básica de Saúde — Atenção Primária. Consultório médico, turno matutino.",
    patient: "C.L., 26 anos, feminino, recepcionista, sem comorbidades conhecidas.",
    complaint: "Ardência e dor ao urinar, urina turva com cheiro forte, e vontade frequente de ir ao banheiro há 3 dias.",
    tasks: [
      "Realize a anamnese dirigida ao caso.",
      "Realize o exame físico pertinente.",
      "Solicite os exames complementares adequados e justifique.",
      "Formule a hipótese diagnóstica e proponha o tratamento adequado.",
      "Oriente a paciente sobre o tratamento, prevenção e sinais de alarme."
    ]
  },
  instB: {
    vitals: {
      PA: "112/72 mmHg",
      FC: "78 bpm",
      FR: "16 irpm",
      Tax: "37,2°C",
      Peso: "62 kg",
      Altura: "1,64 m",
      IMC: "23,0 kg/m²"
    },
    physicalGeneral: "Paciente em bom estado geral, corada, hidratada, acianótica, anictérica, afebril. Sem sinais de toxemia.",
    physicalSeg: "Abdome: Plano, normotenso. Dor leve à palpação profunda em hipogástrio. Sem dor à palpação em flancos. Punho-percussão lombar bilateral negativa. Sem massas ou visceromegalias. | Genitália externa (se examinada): Sem lesões, corrimento ou sinais de infecção local visível (revelar apenas se candidato solicitar exame ginecológico).",
    labs: [
      { test: "EAS (Urinálise)", val: "Leucocitúria 3+ (> 10 leucócitos/campo), nitritos positivos, bacteriúria 2+, sem hematúria macroscópica, hematúria microscópica 1+", ref: "—", alt: true },
      { test: "Urocultura (resultado preliminar — 48h)", val: "Crescimento de Escherichia coli > 10⁵ UFC/mL (sensível a norfloxacino, nitrofurantoína, fosfomicina; resistente a ampicilina)", ref: "< 10³ UFC/mL = negativo", alt: true },
      { test: "Creatinina sérica", val: "0,8 mg/dL", ref: "0,5–1,0 mg/dL", alt: false },
      { test: "Hemograma", val: "Normal", ref: "—", alt: false },
      { test: "β-hCG urinário", val: "Negativo", ref: "Negativo", alt: false }
    ],
    image: null,
    note: "Entregar sinais vitais ao início. Entregar EAS imediatamente se solicitado (disponível no momento da consulta). Informar que a urocultura ainda está em processamento (resultado será disponibilizado em 48h) — entregar o resultado da urocultura apenas se o candidato solicitar o exame e questionar quando o resultado estará disponível. Não há indicação de USG neste caso — se solicitada, informar que não está disponível na UBS no momento e perguntar se há justificativa clínica. Entregar resultado do β-hCG se solicitado.",
    patientProfile: "C.L., 26 anos, feminino, recepcionista em clínica odontológica, solteira, namorando há 6 meses. Sem filhos. Natural e procedente de São Paulo-SP.",
    script: [
      { trigger: "Queixa principal", speech: "Doutora, tô com uma ardência horrível pra fazer xixi há uns 3 dias. Minha urina tá turva e com um cheiro muito forte, diferente do normal." },
      { trigger: "Sobre frequência urinária", speech: "Tô indo ao banheiro toda hora, mas sai pouco. Às vezes dá vontade urgente e não consigo segurar." },
      { trigger: "Sobre febre ou calafrios", speech: "Não tive febre não. Não tô sentindo dor nas costas, não." },
      { trigger: "Sobre dor", speech: "Só dói embaixo da barriga mesmo, quando aperta pra urinar." },
      { trigger: "Sobre atividade sexual", speech: "Sim, tenho vida sexual ativa. Comecei a namorar faz uns 6 meses." },
      { trigger: "Sobre uso de anticoncepcional", speech: "Uso anticoncepcional oral há 2 anos. Não tenho alergia a remédio nenhum." },
      { trigger: "Sobre episódios anteriores", speech: "Já tive isso umas 2 vezes no ano passado. Tomei remédio e passou rápido." },
      { trigger: "Pergunta ativa 1", speech: "É infecção urinária de novo? Por que fica voltando?" },
      { trigger: "Pergunta ativa 2", speech: "Tem algum cuidado que posso tomar pra não pegar de novo?" }
    ],
    hiddenInfo: "A paciente usa diafragma como método contraceptivo adicional — só revelar se o candidato perguntar especificamente sobre métodos contraceptivos além do anticoncepcional oral, ou sobre fatores de risco para ITU. | Este é o terceiro episódio em 12 meses — só revelar com exatidão se o candidato perguntar sobre o número de episódios no último ano (critério para ITU recorrente).",
    actorBehavior: "Paciente comunicativa, um pouco envergonhada ao responder sobre vida sexual, mas cooperativa. Demonstra frustração por ser o terceiro episódio. Alivia visivelmente quando o candidato explica a causa e as formas de prevenção."
  },
  instC: {
    diagnosis: "Cistite aguda não complicada por Escherichia coli em mulher jovem imunocompetente, fora da gestação. Padrão de ITU recorrente (3 episódios em 12 meses — critério: ≥ 2 episódios em 6 meses ou ≥ 3 em 12 meses).",
    differentials: [
      "Uretrite/cervicite (DST — clamídia, gonorreia) — sintomas de disúria podem ocorrer; ausência de corrimento e nitritos positivos reduzem probabilidade, mas deve ser rastreada se vida sexual ativa e múltiplos parceiros.",
      "Pielonefrite aguda — afastada pela ausência de febre, dor lombar e punho-percussão negativa; EAS sem cilindros granulosos.",
      "Síndrome uretral aguda — disúria com urinocultura negativa ou < 10⁵ UFC/mL; afastada pela urocultura positiva neste caso."
    ],
    context: "Mulher jovem, imunocompetente, não grávida, apresenta cistite aguda não complicada com terceiro episódio em 12 meses, configurando ITU recorrente. Urocultura positiva para E. coli sensível a nitrofurantoína e fosfomicina. Fatores de risco identificáveis: atividade sexual recente e uso de diafragma.",
    justify: "Diagnóstico de cistite aguda pelos critérios clínicos (disúria, polaciúria, urgência, dor suprapúbica, sem febre ou dor lombar) e laboratoriais (leucocitúria > 10/campo, nitritos positivos, bacteriúria, urocultura > 10⁵ UFC/mL de E. coli). Ausência de sinais sistêmicos afasta pielonefrite. Padrão recorrente (3 episódios/ano) exige investigação de fatores predisponentes e discussão de profilaxia.",
    expectedAnamnesis: "Caracterização dos sintomas urinários (disúria, polaciúria, urgência, hematúria) | Presença de febre, calafrios, dor lombar (afastar pielonefrite) | Histórico de ITU prévias (número e frequência — critério de recorrência) | Vida sexual ativa, novo parceiro, método contraceptivo (incluindo diafragma) | Gestação (β-hCG) | Alergias medicamentosas | Uso de antibióticos recentes (risco de resistência) | Antecedentes urológicos (malformação, litíase, cateterização)",
    expectedPhysical: "Sinais vitais: afebril — afasta sistematização da infecção | Palpação abdominal: dor suprapúbica (hipogástrio) | Punho-percussão lombar bilateral (negativa — afasta pielonefrite) | Exame ginecológico: afastar corrimento, lesões (avaliar DST) — especialmente se novo parceiro",
    expectedExams: [
      { exam: "EAS (urinálise)", justify: "Confirmar infecção urinária (leucocitúria, nitritos, bacteriúria)", expected: "Leucocitúria 3+, nitritos positivos" },
      { exam: "Urocultura com antibiograma", justify: "Identificar agente e sensibilidade (ITU recorrente — necessário)", expected: "E. coli > 10⁵ UFC/mL" },
      { exam: "β-hCG", justify: "Afastar gestação (muda conduta terapêutica)", expected: "Negativo" }
    ],
    expectedConduct: "Farmacológica: Nitrofurantoína 100 mg (liberação modificada) VO 12/12h por 5 dias — primeira escolha para cistite não complicada (MS/RENAME 2022; SBU 2023). Alternativa: fosfomicina trometamol 3 g VO dose única. Não usar fluoroquinolonas como primeira linha para cistite não complicada (reservar para infecções complicadas). Não usar ampicilina (resistência no antibiograma). Analgésico urinário (fenazopiridina) pode ser ofertado por 2 dias para alívio sintomático se disponível. | Não farmacológica: Hidratação abundante. Higiene perineal adequada (urinar após relação sexual, limpeza anterior-posterior). Evitar uso de diafragma (fator de risco para ITU recorrente — discutir método alternativo). | Encaminhamento: Não necessário neste episódio. Se ITU recorrente confirmada: encaminhar para Urologia ou Ginecologia para avaliação de profilaxia antibiótica (nitrofurantoína 50 mg/dia ou fosfomicina 3 g a cada 10 dias) ou profilaxia pós-coito. | Orientações ao paciente: Explicar que a infecção é causada por bactérias que entram pela uretra, que o uso de diafragma pode facilitar isso, orientar higiene, hidratação, urinar após relação sexual, importância de completar o antibiótico. Sinais de alarme: febre, dor nas costas, calafrios — indicam que a infecção pode ter subido para o rim. | Seguimento: Retorno em 5–7 dias se não houver melhora. Não é necessário urinocultura de cura em ITU não complicada se houver resolução dos sintomas. Discutir profilaxia se critérios de recorrência confirmados.",
    expectedCommunication: "Apresentação: Apresentar-se, criar ambiente acolhedor para perguntas sobre sexualidade sem julgamento. | Comunicação do diagnóstico: Explicar em linguagem acessível o que é ITU, por que acontece e por que pode voltar. | Escuta ativa: Responder à frustração da paciente com empatia; explicar medidas preventivas de forma motivacional, não punitiva.",
    criticalErrors: [
      "Prescrever fluoroquinolona (ciprofloxacino) como primeira linha para cistite não complicada — não recomendado pelo MS/RENAME; aumenta resistência bacteriana.",
      "Não solicitar β-hCG em mulher em idade fértil com sintomas urinários (gestação muda a conduta completamente).",
      "Diagnosticar pielonefrite sem embasamento clínico (ausência de febre, dor lombar, síndrome toxêmica).",
      "Não investigar fatores de risco para recorrência (uso de diafragma, atividade sexual).",
      "Não orientar sinais de alarme para pielonefrite (febre + dor lombar)."
    ]
  },
  instD: {
    title: "CHECKLIST — DOR AO URINAR E URINA TURVA HÁ 3 DIAS EM MULHER JOVEM",
    sections: [
      {
        h: "COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
        items: [
          { item: "Apresentou-se pelo nome à paciente", score: 0.5, ref: "CFM Res. 2.232/2019" },
          { item: "Abordou a vida sexual de forma respeitosa e sem julgamento", score: 0.5, ref: "CFM Res. 2.232/2019" },
          { item: "Orientou a paciente sobre prevenção de ITU em linguagem acessível", score: 0.5, ref: "MS/Caderno APS 2023" },
          { item: "Perguntou se a paciente tinha dúvidas antes de encerrar", score: 0.5, ref: "CFM Res. 2.232/2019" }
        ]
      },
      {
        h: "ANAMNESE",
        items: [
          { item: "Investigou sintomas urinários (disúria, polaciúria, urgência, hematúria)", score: 0.5, ref: "SBU 2023; MS 2022" },
          { item: "Questionou presença de febre, calafrios e dor lombar (afastar pielonefrite)", score: 1.0, ref: "SBU 2023; MS 2022" },
          { item: "Questionou vida sexual ativa e método contraceptivo (incluindo diafragma)", score: 0.5, ref: "SBU 2023" },
          { item: "Investigou histórico de ITU prévia e número de episódios no último ano", score: 0.5, ref: "SBU 2023" },
          { item: "Questionou alergias medicamentosas", score: 0.5, ref: "RENAME 2022" }
        ]
      },
      {
        h: "EXAME FÍSICO",
        items: [
          { item: "Realizou palpação abdominal (dor suprapúbica)", score: 0.5, ref: "SBU 2023" },
          { item: "Realizou punho-percussão lombar bilateral para afastar pielonefrite", score: 1.0, ref: "SBU 2023" }
        ]
      },
      {
        h: "RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO",
        items: [
          { item: "Formulou diagnóstico de cistite aguda não complicada", score: 1.0, ref: "SBU 2023; MS 2022" },
          { item: "Solicitou EAS e urocultura com antibiograma", score: 0.5, ref: "SBU 2023" },
          { item: "Solicitou β-hCG para afastar gestação", score: 0.5, ref: "MS/RENAME 2022" }
        ]
      },
      {
        h: "CONDUTA E ORIENTAÇÃO AO PACIENTE",
        items: [
          { item: "Prescreveu antibiótico de primeira linha correto (nitrofurantoína ou fosfomicina)", score: 1.0, ref: "MS/RENAME 2022; SBU 2023" },
          { item: "Não prescreveu fluoroquinolona como primeira linha", score: 0.5, ref: "MS/RENAME 2022; SBU 2023" },
          { item: "Orientou sinais de alarme para pielonefrite (febre, dor lombar, calafrios)", score: 0.5, ref: "SBU 2023" },
          { item: "Orientou medidas preventivas (higiene, hidratação, urinar após relação, revisar uso de diafragma)", score: 0.5, ref: "SBU 2023; MS 2023" }
        ]
      }
    ]
  }
},

{
  id: 5,
  title: "Idosa confusa e com fraqueza progressiva há 2 dias",
  sub: "Pronto-Atendimento — Hospital Geral",
  tema: "Nefrologia",
  topic: "Distúrbio do Sódio — Hiponatremia",
  level: "moderado",
  cardAccent: "#8D6E63",
  instA: {
    scenario: "Pronto-atendimento de hospital geral. Sala de observação, turno da tarde.",
    patient: "D.M., 74 anos, feminino, aposentada, com histórico de insuficiência cardíaca (IC) e uso de furosemida 40 mg/dia e enalapril 10 mg/dia.",
    complaint: "Filha refere que a mãe está 'diferente, confusa e com fraqueza nas pernas' há 2 dias. Paciente chegou desorientada no tempo e no espaço.",
    tasks: [
      "Realize a anamnese dirigida ao caso (com auxílio da acompanhante).",
      "Realize o exame físico pertinente.",
      "Solicite e interprete os exames complementares adequados.",
      "Identifique o distúrbio eletrolítico, classifique-o e proponha a conduta.",
      "Oriente a acompanhante sobre o quadro e os próximos passos."
    ]
  },
  instB: {
    vitals: {
      PA: "104/68 mmHg",
      FC: "96 bpm",
      FR: "18 irpm",
      Tax: "36,5°C",
      Peso: "58 kg (usual: 62 kg)",
      Altura: "1,58 m",
      IMC: "23,2 kg/m²"
    },
    physicalGeneral: "Paciente idosa, desorientada no tempo e no espaço, sonolenta mas responsiva a estímulos verbais. Corada, desidratada (mucosas secas, turgor reduzido), acianótica, anictérica. Olhos fundos.",
    physicalSeg: "Neurológico: Confusão mental, desorientação têmporo-espacial. Sem déficit focal. Sem rigidez de nuca. Reflexos tendinosos diminuídos bilateralmente. | Cardiovascular: Bulhas rítmicas, normofonéticas, sem sopros. Ausência de turgência jugular. | Respiratório: Murmúrio vesicular presente, sem ruídos adventícios. | Abdome: Plano, indolor, sem massas ou visceromegalias. | MMII: Sem edema. Força muscular diminuída bilateralmente em MMII (grau 3/5).",
    labs: [
      { test: "Sódio sérico", val: "118 mEq/L", ref: "135–145 mEq/L", alt: true },
      { test: "Potássio sérico", val: "3,1 mEq/L", ref: "3,5–5,0 mEq/L", alt: true },
      { test: "Cloro sérico", val: "88 mEq/L", ref: "98–106 mEq/L", alt: true },
      { test: "Osmolaridade sérica (calculada)", val: "246 mOsm/kg", ref: "280–295 mOsm/kg", alt: true },
      { test: "Sódio urinário", val: "8 mEq/L", ref: "—", alt: true },
      { test: "Osmolaridade urinária", val: "420 mOsm/kg", ref: "—", alt: true },
      { test: "Creatinina", val: "1,1 mg/dL", ref: "0,5–1,0 mg/dL", alt: true },
      { test: "Ureia", val: "48 mg/dL", ref: "15–45 mg/dL", alt: true },
      { test: "Glicemia", val: "102 mg/dL", ref: "70–99 mg/dL", alt: false },
      { test: "TSH", val: "2,8 mUI/L", ref: "0,4–4,0 mUI/L", alt: false },
      { test: "Cortisol basal", val: "18 µg/dL", ref: "5–25 µg/dL", alt: false },
      { test: "Hemograma", val: "Normal", ref: "—", alt: false },
      { test: "Proteínas totais e frações", val: "Normais", ref: "—", alt: false }
    ],
    image: "Tomografia de crânio sem contraste (solicitada pela triagem): Sem alterações agudas isquêmicas ou hemorrágicas. Atrofia cortical difusa compatível com a idade. Sem efeito de massa ou desvio de linha média.",
    note: "O ator principal desta estação é a filha da paciente (pode ser interpretado por um segundo ator ou pelo próprio avaliador). A paciente responde monossilabicamente. Entregar sinais vitais ao início. Entregar exames laboratoriais e TC se solicitados. Informar o peso habitual da paciente (62 kg) se o candidato perguntar sobre variação de peso recente. Revelar que a furosemida foi aumentada pela filha (dobrou a dose) se o candidato perguntar sobre alterações recentes nos medicamentos.",
    patientProfile: "D.M., 74 anos, feminino, aposentada (ex-professora), viúva, mora com a filha. Portadora de insuficiência cardíaca há 5 anos. Em uso de furosemida 40 mg/dia e enalapril 10 mg/dia. Acompanhante: filha, 48 anos, professora.",
    script: [
      { trigger: "Queixa principal (filha)", speech: "Doutor, minha mãe está muito estranha desde ontem. Ficou confusa, não reconhece onde está, tá com fraqueza nas pernas. Ela nunca foi assim." },
      { trigger: "Sobre início dos sintomas (filha)", speech: "Faz uns 2 dias que ela foi piorando. No começo achei que era cansaço, mas hoje ela não conseguia nem andar direito." },
      { trigger: "Sobre alimentação (filha)", speech: "Ela tá comendo pouco, quase não toma água. Ficou enjoada desde antes de ontem." },
      { trigger: "Sobre medicamentos (filha)", speech: "Ah, ela tava com o tornozelo mais inchado semana passada, aí eu dei mais um comprimido de furosemida por conta própria, faz uns 5 dias." },
      { trigger: "Sobre a paciente diretamente", speech: "Tô... com fraqueza... tontura..." },
      { trigger: "Sobre febre ou dor de cabeça", speech: "Não teve febre, não. Ela falou que a cabeça doía um pouquinho no começo." },
      { trigger: "Pergunta ativa 1 (filha)", speech: "O que aconteceu com minha mãe, doutor? É o coração dela?" },
      { trigger: "Pergunta ativa 2 (filha)", speech: "A gente fez errado em dar mais remédio por conta própria?" }
    ],
    hiddenInfo: "A filha dobrou a dose de furosemida por 5 dias sem orientação médica — só revelar se o candidato perguntar especificamente sobre mudanças recentes nos medicamentos. | A paciente perdeu 4 kg nos últimos 5 dias (peso habitual 62 kg, atual 58 kg) — só revelar se o candidato perguntar sobre variação de peso recente.",
    actorBehavior: "Filha ansiosa, culpada, muito preocupada. Responde prontamente mas pode omitir a alteração da furosemida por constrangimento — revelar apenas se perguntada diretamente. A paciente está confusa, sonolenta, colabora pouco. O candidato deve conseguir a história principalmente com a acompanhante."
  },
  instC: {
    diagnosis: "Hiponatremia grave sintomática (Na+ 118 mEq/L) de etiologia hipovolêmica — secundária ao uso excessivo de diurético de alça (furosemida em dose dobrada por 5 dias) em paciente idosa com IC. Classificação: hipotônica (osmolaridade sérica 246), hipovolêmica (sódio urinário < 20, osmolaridade urinária elevada por resposta compensatória renal).",
    differentials: [
      "SIADH (Síndrome de Antidiurese Inapropriada) — afastado pela hipovolemia clínica e sódio urinário baixo (< 10 mEq/L); na SIADH o paciente é euvolêmico e o sódio urinário é > 40 mEq/L.",
      "Hiponatremia por IC descompensada (hipervolêmica) — possível, mas o quadro clínico atual mostra hipovolemia (sem edema, hipotensão, perda de peso), não sobrecarga volêmica.",
      "Hipotireoidismo / Insuficiência adrenal — TSH e cortisol normais afastam essas causas."
    ],
    context: "Idosa com IC em uso de furosemida teve a dose dobrada pela filha sem orientação médica, evoluindo com hipovolemia e hiponatremia hipovolêmica grave (Na+ 118 mEq/L) com manifestações neurológicas (confusão, fraqueza, reflexos diminuídos). Quadro potencialmente grave que requer correção cautelosa do sódio para evitar mielinólise pontina osmótica.",
    justify: "Hiponatremia definida por Na+ < 135 mEq/L — aqui grave (< 120 mEq/L) e sintomática (confusão mental, fraqueza muscular). Osmolaridade sérica baixa (246 mOsm/kg) confirma hiponatremia hipotônica verdadeira. Sódio urinário baixo (8 mEq/L) e osmolaridade urinária elevada (420 mOsm/kg) indicam que o rim está retendo sódio por depleção volêmica (hiponatremia hipovolêmica). Causa: perda renal de sódio por diurético em excesso. Ausência de edema e hipotensão ortostática confirmam hipovolemia.",
    expectedAnamnesis: "Início e progressão dos sintomas neurológicos (confusão, fraqueza) | Variação de peso recente | Ingestão hídrica e alimentar (reduzida) | Alterações recentes nos medicamentos (dose de diurético) | Sintomas de IC descompensada (dispneia, edema, ortopneia) | Sintomas de hipotireoidismo ou insuficiência adrenal | Uso de outros medicamentos (carbamazepina, ISRS, etc. que causam SIADH) | Presença de náuseas, cefaleia, convulsão (sintomas de hiponatremia)",
    expectedPhysical: "Sinais vitais: hipotensão (104/68), taquicardia leve | Avaliação de volemia: mucosas, turgor, olhos fundos, ausência de turgência jugular e edema | Neurológico: nível de consciência, orientação, reflexos tendinosos, força muscular | Pesquisar rigidez de nuca (afastar meningite — não encontrada) | Ausculta cardiopulmonar: afastar congestão",
    expectedExams: [
      { exam: "Sódio sérico", justify: "Confirmar e quantificar hiponatremia", expected: "118 mEq/L" },
      { exam: "Osmolaridade sérica", justify: "Classificar como hipotônica", expected: "246 mOsm/kg" },
      { exam: "Sódio urinário e osmolaridade urinária", justify: "Classificar etiologia (hipovolêmica vs. SIADH)", expected: "Na urinário < 20; Osm urinária > 400" },
      { exam: "Potássio, cloro", justify: "Distúrbios associados ao diurético", expected: "K+ 3,1 (hipocalemia)" },
      { exam: "Creatinina e ureia", justify: "Avaliar função renal", expected: "Levemente alteradas" },
      { exam: "TSH", justify: "Afastar hipotireoidismo como causa", expected: "Normal" },
      { exam: "Cortisol", justify: "Afastar insuficiência adrenal", expected: "Normal" },
      { exam: "TC de crânio", justify: "Afastar causa neurológica (convulsão, acidente vascular)", expected: "Normal para a idade" }
    ],
    expectedConduct: "Farmacológica: Reposição de sódio com SF 0,9% EV — correção lenta e controlada: máximo 8–10 mEq/L nas primeiras 24h e máximo 18 mEq/L em 48h para evitar mielinólise pontina osmótica (síndrome de desmielinização osmótica). Suspender furosemida imediatamente. Repor potássio (hipocalemia associada). Não usar soro hipertônico (NaCl 3%) exceto em convulsão ou coma — não é o caso aqui. | Não farmacológica: Monitorização do sódio a cada 2–4h durante a correção. Monitorização neurológica. Balanço hídrico rigoroso. | Encaminhamento: Internação hospitalar obrigatória. Acionar Nefrologia/Clínica Médica para acompanhamento. | Orientações à acompanhante: Explicar que o excesso de diurético tirou muito sal e água do organismo, causando a confusão. Orientar que nunca se deve alterar doses de remédio sem orientação médica. Tranquilizar sobre o prognóstico se a correção for feita com cuidado. | Seguimento: Sódio a cada 2–4h. Alta hospitalar somente após Na+ > 130 mEq/L e melhora neurológica. Reavaliar dose de furosemida e condição da IC na alta.",
    expectedCommunication: "Apresentação: Apresentar-se à filha e à paciente, mesmo que esta esteja confusa. | Comunicação do diagnóstico: Explicar que o sal do sangue da paciente está muito baixo por causa do excesso de diurético, e que isso causa confusão e fraqueza — e que precisa ser corrigido devagar para não machucar o cérebro. | Escuta ativa: Acolher a culpa da filha sem reforçar o sentimento de erro, mas orientar com firmeza sobre não alterar medicações sem orientação médica.",
    criticalErrors: [
      "Corrigir o sódio rapidamente (> 10 mEq/L em 24h) — risco de mielinólise pontina osmótica (síndrome de desmielinização osmótica), potencialmente fatal.",
      "Não reconhecer a hiponatremia como causa da confusão mental (perder o diagnóstico principal).",
      "Usar soro hipertônico (NaCl 3%) sem indicação precisa (convulsão ou coma) — risco de correção rápida demais.",
      "Não suspender a furosemida — mantém a causa do distúrbio.",
      "Não investigar o sódio urinário para classificar a etiologia (hipovolêmica vs. SIADH — condutas diferentes)."
    ]
  },
  instD: {
    title: "CHECKLIST — IDOSA CONFUSA E COM FRAQUEZA PROGRESSIVA HÁ 2 DIAS",
    sections: [
      {
        h: "COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
        items: [
          { item: "Apresentou-se à paciente e à acompanhante", score: 0.5, ref: "CFM Res. 2.232/2019" },
          { item: "Orientou a acompanhante sobre o risco de alterar medicamentos sem orientação médica, sem culpabilizar", score: 0.5, ref: "CFM Res. 2.232/2019" },
          { item: "Explicou o diagnóstico e o plano em linguagem acessível à família", score: 0.5, ref: "CFM Res. 2.232/2019" }
        ]
      },
      {
        h: "ANAMNESE",
        items: [
          { item: "Investigou mudanças recentes nos medicamentos (especialmente diuréticos)", score: 1.0, ref: "SBN 2023; Harrison 21ª ed." },
          { item: "Questionou variação de peso recente", score: 0.5, ref: "SBN 2023" },
          { item: "Investigou sintomas neurológicos (confusão, cefaleia, fraqueza) e sua progressão", score: 0.5, ref: "SBN 2023" },
          { item: "Investigou sintomas de IC descompensada (dispneia, edema, ortopneia)", score: 0.5, ref: "SBC IC 2023" }
        ]
      },
      {
        h: "EXAME FÍSICO",
        items: [
          { item: "Avaliou nível de consciência e orientação", score: 0.5, ref: "SBN 2023" },
          { item: "Avaliou estado de hidratação e volemia (mucosas, turgor, ausência de edema e turgência jugular)", score: 1.0, ref: "SBN 2023" },
          { item: "Avaliou força muscular e reflexos tendinosos", score: 0.5, ref: "SBN 2023" }
        ]
      },
      {
        h: "RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO",
        items: [
          { item: "Identificou hiponatremia grave como causa da confusão mental", score: 1.0, ref: "SBN 2023" },
          { item: "Classificou a hiponatremia como hipovolêmica (com base no sódio urinário e quadro clínico)", score: 0.5, ref: "SBN 2023; Harrison 21ª ed." },
          { item: "Solicitou sódio urinário e osmolaridade sérica para classificação etiológica", score: 0.5, ref: "SBN 2023" }
        ]
      },
      {
        h: "CONDUTA E ORIENTAÇÃO AO PACIENTE",
        items: [
          { item: "Indicou correção lenta do sódio (máx. 8–10 mEq/L/24h) com SF 0,9% EV", score: 1.0, ref: "SBN 2023; Harrison 21ª ed." },
          { item: "Suspendeu a furosemida (verbalizar)", score: 0.5, ref: "SBN 2023; RENAME 2022" },
          { item: "Não utilizou soro hipertônico sem indicação precisa", score: 0.5, ref: "SBN 2023" },
          { item: "Indicou internação e monitorização seriada do sódio (a cada 2–4h)", score: 0.5, ref: "SBN 2023" }
        ]
      }
    ]
  }
},

{
  id: 6,
  title: "Fraqueza muscular intensa e coração acelerado em paciente com vômitos frequentes",
  sub: "Pronto-Atendimento — Hospital Geral",
  tema: "Nefrologia",
  topic: "Distúrbio do Potássio — Hipocalemia",
  level: "moderado",
  cardAccent: "#F57F17",
  instA: {
    scenario: "Pronto-atendimento de hospital geral. Sala de observação, turno noturno.",
    patient: "P.S., 22 anos, feminino, estudante universitária, sem comorbidades conhecidas relatadas.",
    complaint: "Fraqueza muscular progressiva nos membros, palpitações e cólicas abdominais há 2 dias, com vômitos frequentes há 5 dias.",
    tasks: [
      "Realize a anamnese dirigida ao caso.",
      "Realize o exame físico pertinente.",
      "Solicite e interprete os exames complementares adequados.",
      "Identifique o distúrbio eletrolítico e proponha a conduta adequada.",
      "Oriente a paciente sobre o quadro e os cuidados necessários."
    ]
  },
  instB: {
    vitals: {
      PA: "108/70 mmHg",
      FC: "108 bpm",
      FR: "18 irpm",
      Tax: "36,7°C",
      Peso: "52 kg",
      Altura: "1,65 m",
      IMC: "19,1 kg/m²"
    },
    physicalGeneral: "Paciente em regular estado geral, corada, hidratada, acianótica, anictérica. Aparentando ansiedade e desconforto. Mucosas levemente ressecadas.",
    physicalSeg: "Neurológico/Muscular: Fraqueza muscular simétrica em MMII (grau 3/5) e MMSS (grau 4/5). Reflexos tendinosos diminuídos bilateralmente (hiporreflexia). Sem déficit sensitivo. | Cardiovascular: Bulhas rítmicas, taquicárdicas, sem sopros. Sem turgência jugular. | Abdome: Plano, distendido leve, ruídos hidroaéreos diminuídos. Dor difusa leve à palpação. Sem massas ou visceromegalias. | MMII: Sem edema. Câimbras relatadas espontaneamente ao movimentar as pernas.",
    labs: [
      { test: "Potássio sérico", val: "2,4 mEq/L", ref: "3,5–5,0 mEq/L", alt: true },
      { test: "Sódio sérico", val: "133 mEq/L", ref: "135–145 mEq/L", alt: true },
      { test: "Cloro sérico", val: "90 mEq/L", ref: "98–106 mEq/L", alt: true },
      { test: "Bicarbonato", val: "30 mEq/L", ref: "22–26 mEq/L", alt: true },
      { test: "pH venoso", val: "7,50", ref: "7,35–7,45", alt: true },
      { test: "Magnésio sérico", val: "1,4 mg/dL", ref: "1,7–2,2 mg/dL", alt: true },
      { test: "Creatinina", val: "0,9 mg/dL", ref: "0,5–1,0 mg/dL", alt: false },
      { test: "Glicemia", val: "88 mg/dL", ref: "70–99 mg/dL", alt: false },
      { test: "Hemograma", val: "Normal", ref: "—", alt: false },
      { test: "Potássio urinário (spot)", val: "42 mEq/L", ref: "< 20 mEq/L em hipocalemia = perda renal; > 20 = extrarenal", alt: true }
    ],
    image: "Eletrocardiograma: FC 108 bpm, ritmo sinusal. Achatamento e inversão de onda T em V4–V6. Presença de onda U proeminente em V2–V4. Intervalo QT/QTc no limite superior (QTc 450 ms). Sem extrassístoles ou outros distúrbios do ritmo.",
    note: "Entregar sinais vitais ao início. Entregar exame físico se solicitado. Entregar exames laboratoriais e ECG somente se solicitados verbalmente. O potássio urinário deve ser entregue separadamente se o candidato solicitar especificamente a dosagem urinária de potássio. Caso o candidato não solicite o ECG, o avaliador deve perguntar ao final: 'Você solicitaria algum exame cardíaco neste caso?'",
    patientProfile: "P.S., 22 anos, feminino, estudante de Nutrição, solteira, mora sozinha. Sem comorbidades conhecidas. IMC 19,1 kg/m².",
    script: [
      { trigger: "Queixa principal", speech: "Doutor, tô com uma fraqueza enorme nas pernas, mal consigo me levantar. E tô sentindo meu coração bater rápido, diferente. Faz 2 dias assim." },
      { trigger: "Sobre os vômitos", speech: "Faz uns 5 dias que tô vomitando muito. Toda vez que como, vomito. Perdi uns 3 kg." },
      { trigger: "Sobre cólicas", speech: "Minha barriga tá doendo, com cólicas, e quase não tenho vontade de ir ao banheiro." },
      { trigger: "Sobre câimbras", speech: "Toda vez que tento mover as pernas, dá câimbra. Nunca tinha tido isso." },
      { trigger: "Sobre a causa dos vômitos", speech: "Eu... eu tava tomando um laxante e fazendo uma dieta muito restrita. Tô tentando emagrecer pra uma festa." },
      { trigger: "Sobre remédios", speech: "Não uso nada, não tenho alergia." },
      { trigger: "Sobre menstruação", speech: "Tô atrasada faz 3 semanas, mas já fiz teste de gravidez e deu negativo." },
      { trigger: "Pergunta ativa 1", speech: "O que tá acontecendo comigo, doutor? É grave?" },
      { trigger: "Pergunta ativa 2", speech: "Eu vou precisar de soro? Vai demorar muito?" }
    ],
    hiddenInfo: "Paciente usa laxante estimulante (bisacodil) há 15 dias de forma abusiva para perda de peso — só revelar se o candidato perguntar diretamente sobre uso de laxantes ou o que estava fazendo antes de adoecer. | Paciente tem histórico de restrição alimentar severa e comportamento compensatório após episódios de compulsão alimentar — só revelar se o candidato perguntar sobre hábitos alimentares detalhados, histórico de dietas ou comportamento alimentar.",
    actorBehavior: "Paciente ansiosa, envergonhada com relação ao uso de laxante e à dieta restritiva. Esconde a informação inicialmente por vergonha. Quando abordada com empatia e sem julgamento, abre-se sobre o comportamento alimentar. O candidato deve criar um ambiente acolhedor para que a paciente revele as informações escondidas."
  },
  instC: {
    diagnosis: "Hipocalemia grave (K+ 2,4 mEq/L) com alcalose metabólica hipoclorêmica, secundária a vômitos prolongados e uso abusivo de laxante estimulante. Contexto de provável transtorno alimentar (bulimia nervosa ou comportamento purgativo) a ser investigado.",
    differentials: [
      "Hipocalemia por uso de diurético — ausente na história farmacológica; potássio urinário elevado pode ocorrer em ambas, mas contexto clínico aponta para vômitos e laxante.",
      "Síndrome de Bartter ou Gitelman — causa genética de hipocalemia com alcalose; menos provável em quadro agudo com causa identificável; investigar se não houver resposta ao tratamento.",
      "Hiperaldosteronismo primário — causa hipertensão + hipocalemia; descartado pela PA normal e contexto clínico agudo."
    ],
    context: "Jovem do sexo feminino com provável transtorno alimentar apresenta hipocalemia grave (2,4 mEq/L) com manifestações neuromusculares (fraqueza, hiporreflexia, câimbras) e cardíacas (taquicardia, alterações no ECG), associada a alcalose metabólica hipoclorêmica secundária a vômitos e uso abusivo de laxante. Hipomagnesemia concomitante dificulta a reposição de potássio.",
    justify: "Hipocalemia grave definida por K+ < 2,5 mEq/L com manifestações clínicas. Alcalose metabólica (pH 7,50, HCO3 30 mEq/L) e hipocloremia (Cl 90 mEq/L) confirmam vômitos como causa predominante (perda de H+ e Cl-). Potássio urinário elevado (42 mEq/L) em contexto de hipocalemia indica perda renal de K+ (compensação renal ao alcalose + hipovolemia com aldosterona elevada). Hipomagnesemia associada perpetua a hipocalemia (magnésio é cofator da Na-K-ATPase). ECG com onda U, achatamento de T e QTc alargado indica risco de arritmia.",
    expectedAnamnesis: "Caracterização dos vômitos (frequência, duração, provocados ou espontâneos) | Uso de laxantes, diuréticos, ou outros medicamentos | Hábitos alimentares e comportamento alimentar (restrição, compulsão, purgação) | Fraqueza muscular — início, progressão, topografia | Palpitações — frequência, associação com esforço | Perda de peso recente | Menstruação (atraso — desnutrição pode causar amenorreia) | Antecedentes de transtorno alimentar",
    expectedPhysical: "Sinais vitais: taquicardia, hipotensão leve | Avaliação muscular: força em MMSS e MMII, reflexos tendinosos | Ausculta cardíaca: taquicardia | Abdome: ruídos diminuídos (íleo paralítico por hipocalemia) | Avaliação nutricional: IMC, aspecto geral",
    expectedExams: [
      { exam: "Potássio sérico", justify: "Confirmar e quantificar hipocalemia", expected: "2,4 mEq/L" },
      { exam: "Sódio, cloro, bicarbonato", justify: "Avaliar distúrbio ácido-base associado", expected: "Alcalose metabólica hipoclorêmica" },
      { exam: "Magnésio sérico", justify: "Hipomagnesemia perpetua hipocalemia", expected: "1,4 mg/dL (reduzido)" },
      { exam: "Gasometria venosa", justify: "Confirmar e classificar o distúrbio ácido-base", expected: "Alcalose metabólica" },
      { exam: "ECG", justify: "Avaliar risco de arritmia por hipocalemia", expected: "Onda U, achatamento de T, QTc alargado" },
      { exam: "Potássio urinário", justify: "Diferenciar perda renal de extra-renal", expected: "Elevado (perda renal)" },
      { exam: "Creatinina", justify: "Avaliar função renal", expected: "Normal" }
    ],
    expectedConduct: "Farmacológica: Reposição de potássio EV: KCl 19,1% diluído em SF 0,9% — infusão máxima de 10–20 mEq/h em veia periférica, com monitorização cardíaca contínua. Se K+ < 2,5 com sintomas: preferir via EV. Repor magnésio: sulfato de magnésio 2 g EV em 30 min — corrigir antes ou junto com o K+ (hipomagnesemia refratariza a hipocalemia). Quando tolerar via oral: suplementação com KCl oral + dieta rica em potássio. | Não farmacológica: Suspender laxante e qualquer agente que agrave a hipocalemia. Monitorização cardíaca contínua (ECG à beira leito). Dieta com alimentos ricos em potássio após estabilização. | Encaminhamento: Internação para reposição EV monitorizada. Encaminhamento para Psiquiatria/Psicologia para avaliação de transtorno alimentar após estabilização clínica — abordagem sem julgamento. | Orientações à paciente: Explicar que o potássio está muito baixo por causa dos vômitos e do laxante, e que isso está causando a fraqueza e o coração acelerado. Orientar sobre os riscos do uso abusivo de laxantes. Abordar o tema do transtorno alimentar com empatia, sem julgamento moral. | Seguimento: Potássio sérico a cada 4–6h durante a reposição. Avaliar causa base do transtorno alimentar.",
    expectedCommunication: "Apresentação: Apresentar-se, criar ambiente acolhedor e sem julgamento — essencial para que a paciente revele o uso de laxante. | Comunicação do diagnóstico: Explicar de forma clara e empática que o potássio baixo está causando os sintomas, e que o tratamento é a reposição. | Escuta ativa: Abordar o tema do comportamento alimentar com delicadeza, sem culpabilizar, validando a dificuldade da paciente.",
    criticalErrors: [
      "Não solicitar ECG em paciente com hipocalemia grave e palpitações — risco de arritmia grave não detectada.",
      "Não repor magnésio — hipocalemia refratária se hipomagnesemia não for corrigida.",
      "Infundir KCl em bolus sem diluição ou em velocidade > 20 mEq/h — risco de parada cardíaca por hipercalemia iatrogênica aguda.",
      "Não investigar causa do comportamento purgativo — perder diagnóstico de transtorno alimentar e não encaminhar para saúde mental.",
      "Julgar ou culpabilizar a paciente pelo uso de laxante — compromete o vínculo terapêutico e a adesão."
    ]
  },
  instD: {
    title: "CHECKLIST — FRAQUEZA MUSCULAR E PALPITAÇÕES EM PACIENTE COM VÔMITOS FREQUENTES",
    sections: [
      {
        h: "COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
        items: [
          { item: "Apresentou-se pelo nome à paciente", score: 0.5, ref: "CFM Res. 2.232/2019" },
          { item: "Abordou comportamento alimentar e uso de laxante sem julgamento moral", score: 1.0, ref: "CFM Res. 2.232/2019; ABP 2023" },
          { item: "Explicou o diagnóstico e o risco de arritmia em linguagem acessível", score: 0.5, ref: "CFM Res. 2.232/2019" }
        ]
      },
      {
        h: "ANAMNESE",
        items: [
          { item: "Investigou características dos vômitos (frequência, duração, provocados ou espontâneos)", score: 0.5, ref: "SBN 2023" },
          { item: "Perguntou diretamente sobre uso de laxantes, diuréticos ou outros medicamentos", score: 1.0, ref: "SBN 2023; RENAME 2022" },
          { item: "Investigou hábitos alimentares e comportamento de restrição/purgação", score: 0.5, ref: "ABP 2023" },
          { item: "Investigou fraqueza muscular e câimbras (topografia, progressão)", score: 0.5, ref: "SBN 2023" }
        ]
      },
      {
        h: "EXAME FÍSICO",
        items: [
          { item: "Avaliou força muscular em MMSS e MMII e reflexos tendinosos", score: 0.5, ref: "SBN 2023" },
          { item: "Realizou ausculta cardíaca (taquicardia)", score: 0.5, ref: "SBC 2023" }
        ]
      },
      {
        h: "RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO",
        items: [
          { item: "Identificou hipocalemia grave como diagnóstico principal", score: 1.0, ref: "SBN 2023" },
          { item: "Solicitou ECG para avaliação de risco de arritmia", score: 1.0, ref: "SBC 2023; SBN 2023" },
          { item: "Solicitou magnésio sérico e associou hipomagnesemia à hipocalemia refratária", score: 0.5, ref: "SBN 2023" },
          { item: "Identificou alcalose metabólica hipoclorêmica como distúrbio ácido-base associado", score: 0.5, ref: "SBN 2023" }
        ]
      },
      {
        h: "CONDUTA E ORIENTAÇÃO AO PACIENTE",
        items: [
          { item: "Prescreveu reposição de KCl EV diluído com velocidade segura (≤ 20 mEq/h) e monitorização cardíaca", score: 1.0, ref: "SBN 2023; MS 2022" },
          { item: "Prescreveu reposição de magnésio EV antes ou junto com a reposição de K+", score: 0.5, ref: "SBN 2023" },
          { item: "Indicou encaminhamento para saúde mental (Psiquiatria/Psicologia) para avaliação de transtorno alimentar", score: 0.5, ref: "ABP 2023; MS 2023" }
        ]
      }
    ]
  }
},

{
  id: 7,
  title: "Cálculos renais de repetição, fraqueza e dor óssea em adulto de meia-idade",
  sub: "Ambulatório de Clínica Médica",
  tema: "Nefrologia",
  topic: "Distúrbio do Cálcio — Hipercalcemia",
  level: "moderado",
  cardAccent: "#7B1FA2",
  instA: {
    scenario: "Ambulatório de Clínica Médica — hospital universitário. Consultório, turno matutino.",
    patient: "A.R., 52 anos, feminino, professora universitária, sem comorbidades conhecidas.",
    complaint: "Fraqueza muscular generalizada, obstipação intestinal, dores nos ossos e dois episódios de cálculo renal no último ano.",
    tasks: [
      "Realize a anamnese dirigida ao caso.",
      "Realize o exame físico pertinente.",
      "Solicite os exames complementares adequados e justifique.",
      "Formule a hipótese diagnóstica e os diagnósticos diferenciais.",
      "Proponha a conduta inicial e oriente a paciente."
    ]
  },
  instB: {
    vitals: {
      PA: "136/84 mmHg",
      FC: "76 bpm",
      FR: "16 irpm",
      Tax: "36,4°C",
      Peso: "68 kg",
      Altura: "1,62 m",
      IMC: "25,9 kg/m²"
    },
    physicalGeneral: "Paciente em bom estado geral, corada, hidratada, acianótica, anictérica. Fácies de cansaço. Sem adenomegalias cervicais palpáveis.",
    physicalSeg: "Musculoesquelético: Dor à palpação da coluna lombar e esterno. Sem deformidades articulares visíveis. Força muscular grau 4/5 em MMII bilateralmente. | Neurológico: Paciente orientada, levemente lentificada ao raciocínio. Reflexos tendinosos normais. | Cardiovascular: Bulhas rítmicas, normofonéticas, sem sopros. | Abdome: Plano, levemente tenso, ruídos hidroaéreos presentes e diminuídos. Sem massas ou visceromegalias. Dor à palpação profunda em flanco direito (região de rim direito). | Cervical: Sem bócio palpável. Sem nódulos tireoidianos. Pesquisa de região cervical posterior (paratireoide) sem alterações palpáveis.",
    labs: [
      { test: "Cálcio total sérico", val: "12,8 mg/dL", ref: "8,5–10,5 mg/dL", alt: true },
      { test: "Cálcio ionizado", val: "1,62 mmol/L", ref: "1,10–1,35 mmol/L", alt: true },
      { test: "Fósforo sérico", val: "2,1 mg/dL", ref: "2,5–4,5 mg/dL", alt: true },
      { test: "PTH intacto", val: "318 pg/mL", ref: "10–65 pg/mL", alt: true },
      { test: "Vitamina D (25-OH)", val: "28 ng/mL", ref: "20–60 ng/mL", alt: false },
      { test: "Cálcio urinário 24h", val: "480 mg/24h", ref: "< 300 mg/24h (mulher)", alt: true },
      { test: "Creatinina sérica", val: "1,1 mg/dL", ref: "0,5–1,0 mg/dL", alt: true },
      { test: "Fosfatase alcalina", val: "148 U/L", ref: "35–105 U/L", alt: true },
      { test: "TSH", val: "2,0 mUI/L", ref: "0,4–4,0 mUI/L", alt: false },
      { test: "Proteínas totais e albumina", val: "Normais", ref: "—", alt: false },
      { test: "Hemograma", val: "Normal", ref: "—", alt: false },
      { test: "Eletroforese de proteínas séricas", val: "Normal (sem pico monoclonal)", ref: "—", alt: false }
    ],
    image: "Ultrassonografia de rins e vias urinárias: Rim direito com cálculo de 7 mm em pelve renal, sem hidronefrose. Rim esquerdo sem alterações. Bexiga normal. Densitometria óssea (DEXA): T-score coluna lombar: -1,9 (osteopenia). T-score colo do fêmur: -1,6 (osteopenia).",
    note: "Entregar sinais vitais ao início. Entregar exame físico se solicitado. Entregar exames laboratoriais, USG e DEXA somente se solicitados verbalmente. Se o candidato solicitar cintilografia de paratireoide, informar que não está disponível no ambulatório mas registrar a solicitação como correta. Exame de PTH é o mais importante para o diagnóstico — priorizar sua entrega se solicitado.",
    patientProfile: "A.R., 52 anos, feminino, professora universitária de Letras, casada, 2 filhos adultos. Pós-menopausa há 3 anos. Sem uso de medicamentos contínuos. Sem comorbidades conhecidas.",
    script: [
      { trigger: "Queixa principal", speech: "Doutor, tô muito cansada, com fraqueza, dor nos ossos... e faz um ano que já tive duas pedras no rim. Não entendo por que isso continua acontecendo." },
      { trigger: "Sobre a fraqueza", speech: "É uma fraqueza geral, principalmente nas pernas. Às vezes tenho dificuldade de subir escadas. Tô mais lenta também, até pra pensar." },
      { trigger: "Sobre os ossos", speech: "Dói principalmente nas costas e no peito. Não é dor fortíssima, mas é constante." },
      { trigger: "Sobre o intestino", speech: "Tô com prisão de ventre faz meses. Antes eu ia todo dia, agora vou a cada 4, 5 dias." },
      { trigger: "Sobre sede e urina", speech: "Tenho bebido muita água, muito mais que o normal. E urinando bastante também." },
      { trigger: "Sobre a menopausa", speech: "Tô na menopausa faz 3 anos. Não uso reposição hormonal." },
      { trigger: "Sobre suplementos", speech: "Ah, tomo cálcio e vitamina D por conta própria faz uns 2 anos, porque minha amiga falou que era bom pra osso." },
      { trigger: "Pergunta ativa 1", speech: "Doutor, por que continua aparecendo pedra no rim? É genético?" },
      { trigger: "Pergunta ativa 2", speech: "Pode ser algo mais sério, tipo um câncer?" }
    ],
    hiddenInfo: "Paciente toma suplemento de carbonato de cálcio 1g/dia + vitamina D 2.000 UI/dia por conta própria há 2 anos — só revelar se o candidato perguntar sobre uso de suplementos vitamínicos ou minerais. | Irmã foi operada de 'tumor na glândula do pescoço' — só revelar se o candidato perguntar sobre histórico familiar de doenças da tireoide, paratireoide ou hipercalcemia.",
    actorBehavior: "Paciente educada, curiosa e bem informada. Faz perguntas inteligentes. Preocupada com a possibilidade de câncer (pergunta abertamente). Colaborativa e atenta. Demonstra alívio quando o médico explica de forma organizada o raciocínio diagnóstico."
  },
  instC: {
    diagnosis: "Hiperparatireoidismo primário (HPTP) — causa mais comum de hipercalcemia em paciente ambulatorial. Evidenciado por hipercalcemia (Ca 12,8 mg/dL), hipofosfatemia (P 2,1 mg/dL), PTH inapropriadamente elevado (318 pg/mL), hipercalciúria, osteopenia e nefrolitíase de repetição.",
    differentials: [
      "Hipercalcemia hipocalciúrica familiar benigna (HHF) — afastada pela hipercalciúria (Ca urinário 480 mg/24h > 300 mg); na HHF o cálcio urinário é baixo e a relação Ca urinário/creatinina urinária < 0,01.",
      "Hipercalcemia por neoplasia (PTHrP) — segunda causa mais comum de hipercalcemia; ocorre em contexto de neoplasia conhecida ou oculta; PTH suprimido (não elevado como neste caso); hemograma e eletroforese normais reduzem probabilidade de mieloma.",
      "Intoxicação por vitamina D — uso de suplemento relatado, mas vitamina D normal (28 ng/mL) e PTH elevado afastam esta causa como principal; suplemento pode contribuir marginalmente."
    ],
    context: "Mulher de 52 anos, pós-menopausa, apresenta a tríade clássica do hiperparatireoidismo primário: 'pedras, ossos e gemidos' (nefrolitíase recorrente, osteopenia, sintomas inespecíficos de hipercalcemia — fraqueza, constipação, poliúria/polidipsia, lentificação). PTH inapropriadamente elevado em presença de hipercalcemia confirma o diagnóstico.",
    justify: "O HPTP é definido pela presença simultânea de hipercalcemia e PTH elevado ou inapropriadamente normal. Aqui: Ca 12,8 mg/dL (elevado) + PTH 318 pg/mL (5× o limite superior). A hipofosfatemia decorre da ação do PTH nos túbulos renais (fosfatúria). A hipercalciúria causa nefrolitíase. A elevação da fosfatase alcalina reflete remodelação óssea acelerada (causa osteopenia). Sintomas clássicos: fadiga, fraqueza, constipação, poliúria (hipercalcemia causa diabetes insipidus nefrogênico), confusão leve.",
    expectedAnamnesis: "Caracterização dos sintomas: fraqueza, dor óssea, constipação, poliúria/polidipsia | Histórico de cálculos renais (número, frequência, composição se conhecida) | Uso de suplementos (cálcio, vitamina D) e medicamentos | Histórico familiar de hipercalcemia, paratireoide, neoplasias endócrinas (NEM1) | Menopausa e uso de TH | Sintomas de depressão, confusão (hipercalcemia afeta SNC) | Rastrear neoplasias ocultas (perda de peso, tosse hemoptoica, nódulos) | Investigar sintomas de doença granulomatosa (sarcoidose — tosse, dispneia)",
    expectedPhysical: "Sinais vitais: PA levemente elevada (hipercalcemia pode causar HAS) | Ausculta cardíaca: afastar arritmias | Palpação cervical: pesquisar nódulo tireoidiano ou paratireoidiano (raramente palpável) | Palpação abdominal: dor em flancos (nefrolitíase) | Musculoesquelético: força muscular, dor óssea à palpação (coluna, esterno, ossos longos) | Neurológico: nível de consciência, orientação",
    expectedExams: [
      { exam: "Cálcio total e ionizado", justify: "Confirmar e quantificar hipercalcemia", expected: "Ca 12,8 / Ca2+ 1,62" },
      { exam: "PTH intacto", justify: "Determinar etiologia (PTH-dependente vs. independente)", expected: "Elevado (318 pg/mL)" },
      { exam: "Fósforo sérico", justify: "Hipofosfatemia apoia HPTP", expected: "2,1 mg/dL (baixo)" },
      { exam: "Cálcio urinário 24h", justify: "Hipercalciúria confirma HPTP e afasta HHF", expected: "480 mg/24h (elevado)" },
      { exam: "Vitamina D (25-OH)", justify: "Afastar intoxicação por vitamina D", expected: "Normal" },
      { exam: "Fosfatase alcalina", justify: "Avaliar remodelação óssea", expected: "Elevada" },
      { exam: "Creatinina", justify: "Avaliar função renal (nefrocalcinose)", expected: "Levemente alterada" },
      { exam: "USG renal", justify: "Identificar nefrolitíase", expected: "Cálculo renal direito" },
      { exam: "Densitometria óssea (DEXA)", justify: "Avaliar osteopenia/osteoporose", expected: "Osteopenia em coluna e fêmur" },
      { exam: "Eletroforese de proteínas", justify: "Afastar mieloma múltiplo", expected: "Normal" }
    ],
    expectedConduct: "Farmacológica: Hipercalcemia moderada a grave (Ca > 12 mg/dL): hidratação EV com SF 0,9% para aumentar calciúria e reduzir cálcio. Bifosfonato (ácido zoledrônico) se Ca > 14 ou sintomas graves — aqui pode ser considerado em nível ambulatorial vs. hospitalar. Suspender suplemento de cálcio e vitamina D imediatamente. Cinacalcet pode ser usado se cirurgia contraindicada (não como primeira linha ambulatorial). | Não farmacológica: Hidratação oral adequada. Evitar tiazídicos (aumentam reabsorção de cálcio). Evitar imobilização. | Encaminhamento: Endocrinologia para confirmação e manejo do HPTP. Cirurgia para paratireoidectomia — indicada neste caso (Ca > 1 mg/dL acima do limite + nefrolitíase + osteopenia + idade < 50 anos — aqui 52 anos, avaliação caso a caso pelas diretrizes). Cintilografia de paratireoide (Sestamibi) para localização pré-operatória. | Orientações à paciente: Explicar que uma das glândulas próximas à tireoide (paratireoide) está produzindo hormônio em excesso, liberando cálcio dos ossos para o sangue, causando todos os sintomas. Orientar sobre a necessidade de cirurgia para cura definitiva. Tranquilizar sobre o prognóstico favorável após cirurgia. | Seguimento: Cálcio sérico a cada 3–6 meses. Função renal e cálcio urinário. Densitometria óssea anual.",
    expectedCommunication: "Apresentação: Apresentar-se, demonstrar atenção à preocupação sobre câncer — responder com empatia e clareza. | Comunicação do diagnóstico: Explicar o papel da paratireoide no controle do cálcio de forma didática; tranquilizar que a causa mais provável não é câncer, mas um nódulo benigno na glândula. | Escuta ativa: Responder à pergunta sobre câncer de forma honesta — 'é improvável mas vamos investigar completamente para ter certeza'.",
    criticalErrors: [
      "Não solicitar PTH — sem ele, o diagnóstico diferencial de hipercalcemia é impossível.",
      "Sugerir reposição de cálcio ou manter o suplemento em paciente com hipercalcemia — agrava o quadro.",
      "Não investigar causas de hipercalcemia PTH-independente (neoplasia, vitamina D, sarcoidose) — diagnóstico diferencial incompleto.",
      "Não solicitar cálcio urinário de 24h — incompleto para afastar HHF e confirmar HPTP.",
      "Não encaminhar para Endocrinologia e avaliação cirúrgica — tratamento definitivo do HPTP é cirúrgico."
    ]
  },
  instD: {
    title: "CHECKLIST — CÁLCULOS RENAIS DE REPETIÇÃO, FRAQUEZA E DOR ÓSSEA EM ADULTO DE MEIA-IDADE",
    sections: [
      {
        h: "COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
        items: [
          { item: "Apresentou-se pelo nome à paciente", score: 0.5, ref: "CFM Res. 2.232/2019" },
          { item: "Respondeu à preocupação da paciente sobre câncer com honestidade e empatia", score: 0.5, ref: "CFM Res. 2.232/2019" },
          { item: "Explicou o diagnóstico (HPTP) em linguagem acessível (glândula paratireoide, controle do cálcio)", score: 0.5, ref: "CFM Res. 2.232/2019" },
          { item: "Perguntou se a paciente tinha dúvidas antes de encerrar", score: 0.5, ref: "CFM Res. 2.232/2019" }
        ]
      },
      {
        h: "ANAMNESE",
        items: [
          { item: "Investigou os quatro grupos sintomáticos da hipercalcemia (fraqueza, ossos, rins, intestino/SNC)", score: 1.0, ref: "SBD 2022; Harrison 21ª ed." },
          { item: "Questionou uso de suplementos de cálcio e vitamina D", score: 0.5, ref: "SBD 2022" },
          { item: "Investigou histórico familiar de hipercalcemia ou tumores de paratireoide/NEM", score: 0.5, ref: "SBD 2022" }
        ]
      },
      {
        h: "EXAME FÍSICO",
        items: [
          { item: "Realizou palpação cervical (pesquisa de nódulo tireoidiano/paratireoidiano)", score: 0.5, ref: "SBD 2022" },
          { item: "Avaliou força muscular e dor óssea à palpação (coluna, esterno)", score: 0.5, ref: "SBD 2022" }
        ]
      },
      {
        h: "RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO",
        items: [
          { item: "Formulou hipótese de hiperparatireoidismo primário como causa da hipercalcemia", score: 1.0, ref: "SBD 2022" },
          { item: "Solicitou PTH intacto para classificar a etiologia da hipercalcemia", score: 1.0, ref: "SBD 2022" },
          { item: "Solicitou cálcio urinário de 24h para afastar hipercalcemia hipocalciúrica familiar", score: 0.5, ref: "SBD 2022" },
          { item: "Solicitou densitometria óssea para avaliar comprometimento esquelético", score: 0.5, ref: "SBD 2022" }
        ]
      },
      {
        h: "CONDUTA E ORIENTAÇÃO AO PACIENTE",
        items: [
          { item: "Orientou suspensão imediata do suplemento de cálcio", score: 0.5, ref: "SBD 2022" },
          { item: "Encaminhou para Endocrinologia e avaliação cirúrgica (paratireoidectomia)", score: 1.0, ref: "SBD 2022; MS 2022" },
          { item: "Orientou hidratação adequada e evitar imobilização", score: 0.5, ref: "SBD 2022" }
        ]
      }
    ]
  }
},

{
  id: 8,
  title: "Respiração acelerada, confusão e fraqueza em paciente diabético descompensado",
  sub: "Pronto-Atendimento — Hospital Geral",
  tema: "Nefrologia",
  topic: "Distúrbio Ácido-Base — Acidose Metabólica",
  level: "moderado",
  cardAccent: "#C62828",
  instA: {
    scenario: "Pronto-atendimento de hospital geral. Sala de urgência, turno noturno.",
    patient: "J.C., 48 anos, masculino, motorista, portador de diabetes mellitus tipo 1 há 20 anos.",
    complaint: "Acompanhante refere que o paciente está confuso, respirando rápido e com 'cheiro estranho no hálito' há algumas horas. Paciente refere náuseas e dor abdominal difusa há 1 dia.",
    tasks: [
      "Realize a anamnese dirigida ao caso (com auxílio do acompanhante).",
      "Realize o exame físico pertinente.",
      "Solicite e interprete os exames complementares, incluindo a gasometria arterial.",
      "Identifique e classifique o distúrbio ácido-base. Formule a hipótese diagnóstica.",
      "Proponha a conduta inicial de forma estruturada."
    ]
  },
  instB: {
    vitals: {
      PA: "100/64 mmHg",
      FC: "118 bpm",
      FR: "28 irpm (respiração de Kussmaul)",
      Tax: "37,8°C",
      Peso: "74 kg",
      Altura: "1,72 m",
      IMC: "25,0 kg/m²"
    },
    physicalGeneral: "Paciente em regular estado geral, confuso, desorientado no tempo. Desidratado (mucosas ressecadas, turgor cutâneo diminuído, olhos fundos). Acianótico, anictérico. Hálito com odor adocicado-frutado (cetônico). Respiração profunda e rítmica (Kussmaul).",
    physicalSeg: "Neurológico: Confusão mental, desorientação no tempo. Glasgow 13 (O4V3M6). Sem déficit focal. Sem rigidez de nuca. | Cardiovascular: Bulhas rítmicas, taquicárdicas, sem sopros. Turgência jugular ausente. | Respiratório: Murmúrio vesicular presente, FR 28 irpm, respiração profunda (Kussmaul). Sem ruídos adventícios. | Abdome: Plano, difusamente doloroso à palpação leve e profunda. Ruídos hidroaéreos diminuídos. Sem defesa ou sinais de peritonite. | MMII: Sem edema. Perfusão periférica levemente diminuída.",
    labs: [
      { test: "Gasometria arterial — pH", val: "7,08", ref: "7,35–7,45", alt: true },
      { test: "Gasometria arterial — pCO2", val: "18 mmHg", ref: "35–45 mmHg", alt: true },
      { test: "Gasometria arterial — HCO3", val: "5 mEq/L", ref: "22–26 mEq/L", alt: true },
      { test: "Gasometria arterial — pO2", val: "94 mmHg", ref: "75–100 mmHg", alt: false },
      { test: "Glicemia capilar", val: "> 500 mg/dL (HI — beyond limits)", ref: "70–99 mg/dL", alt: true },
      { test: "Glicemia venosa", val: "548 mg/dL", ref: "70–99 mg/dL", alt: true },
      { test: "Sódio sérico", val: "130 mEq/L", ref: "135–145 mEq/L", alt: true },
      { test: "Potássio sérico", val: "5,8 mEq/L", ref: "3,5–5,0 mEq/L", alt: true },
      { test: "Cloro sérico", val: "98 mEq/L", ref: "98–106 mEq/L", alt: false },
      { test: "Ânion gap calculado", val: "27 mEq/L", ref: "8–12 mEq/L", alt: true },
      { test: "Cetonemia (beta-hidroxibutirato)", val: "6,2 mmol/L", ref: "< 0,6 mmol/L", alt: true },
      { test: "Cetonúria", val: "4+", ref: "Negativo", alt: true },
      { test: "Creatinina sérica", val: "1,8 mg/dL", ref: "0,7–1,2 mg/dL", alt: true },
      { test: "Ureia sérica", val: "72 mg/dL", ref: "15–45 mg/dL", alt: true },
      { test: "Hemograma", val: "Leucócitos 14.200/mm³; Hb 14,0; Plaquetas normais", ref: "—", alt: true },
      { test: "Lactato", val: "1,8 mmol/L", ref: "< 2 mmol/L", alt: false }
    ],
    image: "Raio-X de tórax (PA): Sem infiltrados pulmonares, sem derrame pleural, sem cardiomegalia. Resultado sem alterações agudas.",
    note: "O ator principal é o acompanhante (esposa). O paciente responde de forma confusa e monossilábica. Entregar sinais vitais ao início. Entregar exame físico se solicitado. Entregar a gasometria e os demais exames somente se solicitados verbalmente. O ânion gap pode ser calculado pelo candidato ou entregue no painel laboratorial. Entregar RX de tórax somente se solicitado. Se o candidato não identificar a respiração de Kussmaul no exame físico, o avaliador pode perguntar: 'Você observou alguma alteração no padrão respiratório?'",
    patientProfile: "J.C., 48 anos, masculino, motorista de caminhão, casado, 3 filhos. DM tipo 1 há 20 anos, em uso de insulina NPH + regular. Acompanhante: esposa, 45 anos.",
    script: [
      { trigger: "Queixa principal (esposa)", speech: "Doutor, meu marido tá muito estranho desde hoje de tarde. Tá confuso, respirando diferente, com um cheiro doce na boca. Ele falou que tava com dor na barriga e vômito desde ontem." },
      { trigger: "Sobre a insulina (esposa)", speech: "Ele esqueceu de aplicar a insulina ontem à noite e hoje de manhã também. A caneta ficou sem carga e ele não foi buscar na farmácia." },
      { trigger: "Sobre alimentação", speech: "Ele não tava comendo quase nada, mas tomou uns sucos porque ficou com muita sede." },
      { trigger: "Sobre febre ou infecção (esposa)", speech: "Não teve febre não. Mas ele falou que tava com dorzinha na garganta faz uns 3 dias." },
      { trigger: "Para o paciente diretamente", speech: "Tô... mal... dor na barriga... tontura..." },
      { trigger: "Sobre histórico do DM1", speech: "Ele já teve isso antes, uns 5 anos atrás, ficou internado na UTI." },
      { trigger: "Pergunta ativa 1 (esposa)", speech: "É aquela crise do diabetes de novo, doutor? É grave?" },
      { trigger: "Pergunta ativa 2 (esposa)", speech: "Precisa internar? Ele vai ficar bem?" }
    ],
    hiddenInfo: "Paciente omitiu 2 doses de insulina (NPH da noite anterior e manhã atual) por caneta vazia — só revelar se o candidato perguntar diretamente sobre uso de insulina nas últimas 24–48h. | Paciente refere dor de garganta há 3 dias (possível fator precipitante infeccioso) — só revelar se o candidato perguntar sobre doenças ou infecções recentes.",
    actorBehavior: "Esposa ansiosa, agitada, muito preocupada. Fornece as informações prontamente quando perguntada. Paciente confuso, coopera pouco, responde fragmentadamente. O candidato deve obter a história principalmente com a esposa e reconhecer a urgência do quadro."
  },
  instC: {
    diagnosis: "Cetoacidose diabética (CAD) grave em paciente com DM tipo 1 — desencadeada por omissão de insulina (principal fator precipitante), com possível infecção de vias aéreas superiores como cofator. Classificação: grave (pH < 7,1, HCO3 < 10, alteração do nível de consciência).",
    differentials: [
      "Acidose lática — lactato normal (1,8 mmol/L) afasta; ânion gap elevado com cetose positiva confirma CAD.",
      "Abdome agudo (apendicite, pancreatite) — dor abdominal na CAD é comum e melhora com o tratamento; pancreatite pode coexistir e ser investigada com amilase/lipase se dor persistir após melhora metabólica.",
      "Estado hiperosmolar hiperglicêmico (EHH) — glicemia > 600, osmolaridade > 320, ausência de cetose; aqui: cetose intensa e pH 7,08 confirmam CAD; EHH é mais comum no DM tipo 2."
    ],
    context: "Paciente com DM tipo 1 de longa data apresenta CAD grave após omissão de insulina, com hiperglicemia grave (548 mg/dL), acidose metabólica de ânion gap elevado (AG 27), cetonemia intensa (6,2 mmol/L), desidratação, hipercalemia dilucional e comprometimento da consciência. Respiração de Kussmaul é compensação respiratória para eliminar CO2 e tamponar a acidose.",
    justify: "CAD definida pela tríade: hiperglicemia (548 mg/dL), acidose metabólica (pH 7,08, HCO3 5) e cetonemia/cetonúria (beta-HIB 6,2, cetonúria 4+). Ânion gap = Na – (Cl + HCO3) = 130 – (98 + 5) = 27 mEq/L (elevado), indicando acúmulo de ácidos não mensurados (corpos cetônicos). Compensação respiratória adequada: pCO2 esperada = 1,5 × HCO3 + 8 ± 2 = 1,5 × 5 + 8 = 15,5 ± 2 → pCO2 encontrada 18 ≈ compensação adequada (sem alcalose respiratória concomitante). K+ aparentemente elevado (5,8) mas há déficit corporal total — vai cair com insulina e hidratação.",
    expectedAnamnesis: "Uso de insulina nas últimas 24–48h (omissão, dose incorreta, problemas com caneta/frasco) | Infecções ou doenças recentes (fator precipitante) | Tempo e progressão dos sintomas (náuseas, vômitos, dor abdominal, poliúria, polidipsia) | Glicemia capilar domiciliar (se monitoramento feito) | Histórico de episódios anteriores de CAD | Uso de outros medicamentos (glicocorticoides, diuréticos) | Alimentação e ingestão de líquidos",
    expectedPhysical: "Sinais vitais: taquicardia, hipotensão, taquipneia (Kussmaul — FR 28 irpm) | Identificar e nomear respiração de Kussmaul | Estado de consciência: Glasgow | Hidratação: mucosas, turgor, olhos fundos | Hálito cetônico (adocicado/frutado) | Exame abdominal: dor difusa (CAD causa dor abdominal — diagnóstico diferencial com abdome cirúrgico)",
    expectedExams: [
      { exam: "Gasometria arterial", justify: "Confirmar e classificar o distúrbio ácido-base", expected: "pH 7,08; HCO3 5; pCO2 18" },
      { exam: "Glicemia", justify: "Confirmar hiperglicemia", expected: "548 mg/dL" },
      { exam: "Cetonemia (beta-HIB) ou cetonúria", justify: "Confirmar cetose", expected: "Positivos" },
      { exam: "Eletrólitos (Na, K, Cl)", justify: "Avaliar distúrbios associados", expected: "Hipocalemia real, hipercalemia aparente" },
      { exam: "Ânion gap", justify: "Classificar acidose metabólica", expected: "27 mEq/L (elevado)" },
      { exam: "Creatinina e ureia", justify: "Avaliar lesão renal por hipoperfusão", expected: "Elevadas" },
      { exam: "Hemograma", justify: "Avaliar leucocitose (estresse/infecção)", expected: "Leucocitose" },
      { exam: "Lactato", justify: "Afastar acidose lática", expected: "Normal" },
      { exam: "RX de tórax", justify: "Afastar infecção pulmonar precipitante", expected: "Normal" },
      { exam: "ECG", justify: "Hipercalemia pode causar arritmia", expected: "Monitorar alterações por K+ 5,8" }
    ],
    expectedConduct: "Farmacológica (protocolo SBD/MS para CAD): 1) Hidratação EV vigorosa: SF 0,9% — 1 litro na 1ª hora, depois 500 mL/h por 2–4h, ajustando conforme hemodinâmica. 2) Insulina regular EV: bolus 0,1 UI/kg (7,4 UI) seguido de infusão contínua 0,1 UI/kg/h (bomba de infusão). NÃO iniciar insulina sem repor K+ se K+ < 3,5 mEq/L. 3) Reposição de potássio: K+ 5,8 → aguardar queda com insulina/hidratação; iniciar KCl EV quando K+ < 5,0 mEq/L. 4) Bicarbonato: NÃO indicado rotineiramente (pH 7,08 — indicação controversa; diretrizes atuais não recomendam se pH > 6,9). 5) Tratar fator precipitante (garganta — investigar infecção). | Não farmacológica: Monitorização cardíaca contínua. Sonda vesical para controle de diurese. Checar glicemia a cada 1h. Checar K+ a cada 2h. Posição semi-sentada. | Encaminhamento: Internação na UTI ou unidade de terapia intensiva intermediária pela gravidade (CAD grave: pH < 7,1, Glasgow < 14). Acionar Endocrinologia. | Orientações à esposa: Explicar que o diabetes entrou em crise porque a insulina foi suspensa, causando acúmulo de ácidos no sangue. O tratamento exige internação e monitorização intensa. Prognóstico favorável se tratado prontamente. | Seguimento: Alta da UTI após resolução da CAD (pH > 7,3, HCO3 > 18, ânion gap normalizado, aceitando dieta). Transição para insulina subcutânea antes de descontinuar a infusão IV. Educação em diabetes antes da alta.",
    expectedCommunication: "Apresentação: Apresentar-se à esposa e ao paciente (mesmo confuso) com calma e clareza. | Comunicação do diagnóstico: Explicar que o diabetes está em crise grave por falta de insulina — sem ela, o organismo queima gordura de forma errada e produz ácidos que intoxicam o sangue. | Escuta ativa: Reconhecer o medo da esposa, tranquilizar com o plano de tratamento e prognóstico.",
    criticalErrors: [
      "Não identificar e nomear a respiração de Kussmaul como compensação respiratória da acidose metabólica.",
      "Iniciar insulina sem avaliar o potássio — se K+ < 3,5 mEq/L, insulina sem reposição causa hipocalemia grave e arritmia fatal.",
      "Administrar bicarbonato de sódio de rotina sem indicação (pH > 6,9) — não recomendado pelas diretrizes atuais (SBD 2023).",
      "Não calcular o ânion gap — diagnóstico diferencial de acidose metabólica incompleto.",
      "Não investigar fator precipitante da CAD (omissão de insulina, infecção, etc.)."
    ]
  },
  instD: {
    title: "CHECKLIST — RESPIRAÇÃO ACELERADA, CONFUSÃO E FRAQUEZA EM PACIENTE DIABÉTICO DESCOMPENSADO",
    sections: [
      {
        h: "COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
        items: [
          { item: "Apresentou-se à esposa e ao paciente (mesmo confuso)", score: 0.5, ref: "CFM Res. 2.232/2019" },
          { item: "Explicou o diagnóstico e o plano de forma clara e tranquilizadora à esposa", score: 0.5, ref: "CFM Res. 2.232/2019" }
        ]
      },
      {
        h: "ANAMNESE",
        items: [
          { item: "Investigou uso de insulina nas últimas 24–48h (omissão de dose, problema com dispositivo)", score: 1.0, ref: "SBD 2023; MS 2022" },
          { item: "Investigou fator precipitante (infecção, trauma, doença intercorrente)", score: 0.5, ref: "SBD 2023" },
          { item: "Questionou progressão dos sintomas (náusea, vômito, poliúria, dor abdominal)", score: 0.5, ref: "SBD 2023" }
        ]
      },
      {
        h: "EXAME FÍSICO",
        items: [
          { item: "Identificou e nomeou a respiração de Kussmaul como compensação respiratória", score: 1.0, ref: "SBD 2023; Harrison 21ª ed." },
          { item: "Avaliou estado de hidratação (mucosas, turgor, olhos fundos)", score: 0.5, ref: "SBD 2023" },
          { item: "Avaliou nível de consciência (Glasgow)", score: 0.5, ref: "SBD 2023" }
        ]
      },
      {
        h: "RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO",
        items: [
          { item: "Diagnosticou CAD e classificou como grave (pH < 7,1, alteração de consciência)", score: 1.0, ref: "SBD 2023" },
          { item: "Calculou e interpretou o ânion gap (AG = 27 mEq/L — acidose de ânion gap elevado)", score: 1.0, ref: "SBD 2023; Harrison 21ª ed." },
          { item: "Verificou o potássio antes de iniciar insulina", score: 0.5, ref: "SBD 2023" }
        ]
      },
      {
        h: "CONDUTA E ORIENTAÇÃO AO PACIENTE",
        items: [
          { item: "Prescreveu hidratação EV com SF 0,9% como primeira medida", score: 0.5, ref: "SBD 2023; MS 2022" },
          { item: "Prescreveu insulina regular EV em infusão contínua (0,1 UI/kg/h)", score: 0.5, ref: "SBD 2023; MS 2022" },
          { item: "Não prescreveu bicarbonato de sódio de rotina (pH > 6,9)", score: 0.5, ref: "SBD 2023" },
          { item: "Indicou internação em UTI e monitorização cardíaca contínua", score: 0.5, ref: "SBD 2023" }
        ]
      }
    ]
  }
},

{
  id: 9,
  title: "Exames alterados em paciente diabético com inchaço e urina espumosa",
  sub: "Ambulatório de Endocrinologia / Atenção Primária",
  tema: "Nefrologia",
  topic: "Doença Renal Crônica — Nefropatia Diabética",
  level: "moderado",
  cardAccent: "#00838F",
  instA: {
    scenario: "Ambulatório de Atenção Primária — UBS. Consulta de retorno para paciente diabético tipo 2, turno matutino.",
    patient: "L.B., 58 anos, masculino, comerciante, portador de diabetes mellitus tipo 2 há 14 anos e HAS há 10 anos.",
    complaint: "Paciente comparece para retorno de rotina. Refere urina espumosa há alguns meses e inchaço nas pernas que piora à tarde. Trouxe exames solicitados na última consulta.",
    tasks: [
      "Realize a anamnese dirigida ao caso.",
      "Realize o exame físico pertinente.",
      "Interprete os exames complementares trazidos pelo paciente.",
      "Formule o diagnóstico e estadie a doença renal crônica.",
      "Proponha a conduta e oriente o paciente sobre o manejo e os objetivos terapêuticos."
    ]
  },
  instB: {
    vitals: {
      PA: "152/96 mmHg",
      FC: "80 bpm",
      FR: "16 irpm",
      Tax: "36,5°C",
      Peso: "88 kg",
      Altura: "1,68 m",
      IMC: "31,2 kg/m²"
    },
    physicalGeneral: "Paciente em bom estado geral, corado, hidratado, acianótico, levemente ictérico (mucosas subictéricas — discreto). Obeso. Sem dispneia em repouso.",
    physicalSeg: "Cardiovascular: Bulhas rítmicas, normofonéticas, sem sopros. Sem turgência jugular. | Respiratório: Murmúrio vesicular presente bilateralmente, sem ruídos adventícios. | Abdome: Globoso (obesidade), indolor, sem massas ou visceromegalias. Fígado no limite superior da normalidade à percussão. | MMII: Edema com cacifo 2+/4+ bilateral, simétrico, até tornozelos. | Fundoscopia (se solicitada): Retinopatia diabética não proliferativa moderada bilateral (revelar apenas se candidato solicitar fundoscopia ou referenciar ao oftalmologista).",
    labs: [
      { test: "Creatinina sérica", val: "2,4 mg/dL", ref: "0,7–1,2 mg/dL", alt: true },
      { test: "TFGe (CKD-EPI)", val: "28 mL/min/1,73m²", ref: "> 60 mL/min/1,73m²", alt: true },
      { test: "Ureia sérica", val: "86 mg/dL", ref: "15–45 mg/dL", alt: true },
      { test: "Relação albumina-creatinina urinária (RAC)", val: "850 mg/g", ref: "< 30 mg/g", alt: true },
      { test: "Sódio", val: "137 mEq/L", ref: "135–145 mEq/L", alt: false },
      { test: "Potássio", val: "5,2 mEq/L", ref: "3,5–5,0 mEq/L", alt: true },
      { test: "HbA1c", val: "9,8%", ref: "< 7,0%", alt: true },
      { test: "Glicemia de jejum", val: "198 mg/dL", ref: "70–99 mg/dL", alt: true },
      { test: "LDL-colesterol", val: "142 mg/dL", ref: "< 70 mg/dL (risco cardiovascular alto)", alt: true },
      { test: "HDL-colesterol", val: "38 mg/dL", ref: "> 40 mg/dL (homem)", alt: true },
      { test: "Triglicerídeos", val: "248 mg/dL", ref: "< 150 mg/dL", alt: true },
      { test: "Hemoglobina", val: "10,2 g/dL", ref: "13–17 g/dL", alt: true },
      { test: "VCM", val: "84 fL", ref: "80–100 fL", alt: false },
      { test: "Ferritina", val: "280 ng/mL", ref: "30–400 ng/mL", alt: false },
      { test: "Bicarbonato", val: "19 mEq/L", ref: "22–26 mEq/L", alt: true }
    ],
    image: "Ultrassonografia de rins e vias urinárias: Rins com dimensões reduzidas bilateralmente. Rim direito: 9,2 × 4,1 cm. Rim esquerdo: 9,0 × 3,9 cm. Ecogenicidade cortical aumentada. Diferenciação corticomedular reduzida. Sem hidronefrose, cálculos ou massas. Bexiga normal.",
    note: "Entregar sinais vitais ao início. Entregar exame físico se candidato solicitar realizar o exame. Os exames laboratoriais devem ser entregues como 'exames trazidos pelo paciente' — entregar o pacote completo ao início da estação (eles já vieram de coleta prévia). Entregar a USG no mesmo pacote. Revelar achado de fundoscopia somente se o candidato perguntar se o paciente faz acompanhamento oftalmológico ou solicitar fundoscopia.",
    patientProfile: "L.B., 58 anos, masculino, comerciante (dono de mercearia), casado, 3 filhos. DM tipo 2 há 14 anos. HAS há 10 anos. Em uso de metformina 850 mg 12/12h, glibenclamida 5 mg/dia, losartana 50 mg/dia, anlodipino 5 mg/dia. Tabagista 20 maços-ano (parou há 2 anos).",
    script: [
      { trigger: "Queixa principal", speech: "Doutor, o senhor pediu exames da última vez e eu trouxe. Tô vendo que tem coisa errada, porque minha urina tá com muita espuma e minha perna tá inchando todo dia à tarde." },
      { trigger: "Sobre o controle do diabetes", speech: "Tô tomando os remédios, mas confesso que não tô cuidando muito da alimentação, não. Minha glicemia em casa tá sempre alta, mas eu não medi direto." },
      { trigger: "Sobre a pressão", speech: "A pressão tá difícil de controlar. Medo de tomar mais remédio." },
      { trigger: "Sobre sintomas urinários", speech: "A urina tá mais espumosa faz uns 3, 4 meses. E às vezes fico cansado à toa, sem fazer nada." },
      { trigger: "Sobre alimentação", speech: "Como bastante carboidrato, sal também. Minha esposa faz comida boa, é difícil cortar." },
      { trigger: "Sobre acompanhamento prévio", speech: "Fui ao oftalmologista ano passado. Falaram que tinha alguma coisa no olho por causa do diabetes." },
      { trigger: "Sobre a função renal", speech: "Meu pai faleceu de problema no rim. Fazia diálise." },
      { trigger: "Pergunta ativa 1", speech: "O rim tá ruim mesmo, doutor? Vou precisar de diálise como meu pai?" },
      { trigger: "Pergunta ativa 2", speech: "Tem como melhorar ou já é tarde demais?" }
    ],
    hiddenInfo: "Pai do paciente fez diálise e faleceu por complicações renais — só revelar se o candidato perguntar sobre histórico familiar de doença renal. | Paciente usa ibuprofeno esporadicamente para dores nas costas, sem orientação médica — só revelar se o candidato perguntar sobre uso de anti-inflamatórios ou automedicação.",
    actorBehavior: "Paciente acessível, um pouco fatalista ('meu pai morreu de rim'). Cooperativo mas resistente às mudanças de hábito. Demonstra preocupação real com a diálise. Abre-se com empatia. O candidato deve equilibrar a gravidade da situação com esperança de estabilização."
  },
  instC: {
    diagnosis: "Doença Renal Crônica estágio G4A3 (KDIGO 2012 ⚠️ / adotado pelo Consenso Brasileiro de Nefrologia) — nefropatia diabética em paciente com DM tipo 2 e HAS de longa data. TFGe 28 mL/min/1,73m² (G4) + albuminúria > 300 mg/g RAC (A3 = macroalbuminúria). Complicações presentes: anemia normocrômica (anemia da DRC), acidose metabólica leve, hipercalemia, dislipidemia grave, HbA1c inadequada, retinopatia diabética associada.",
    differentials: [
      "Nefropatia hipertensiva + DRC — HAS de longa data também contribui para a lesão renal; difícil separar de nefropatia diabética sem biópsia; coexistência é a regra em DM2 + HAS.",
      "DRC por outra glomerulopatia primária — menos provável pela evolução gradual em contexto de DM2 + HAS de longa data + retinopatia diabética concomitante; biópsia renal raramente indicada neste cenário típico.",
      "LRA sobre DRC — uso de ibuprofeno pode ter contribuído com piora aguda; reversível se retirado."
    ],
    context: "Paciente de 58 anos com DM tipo 2 e HAS de longa data, mal controlados, evolui com DRC avançada (G4A3) por nefropatia diabética — confirmada pela macroalbuminúria, rins de dimensões reduzidas com ecogenicidade aumentada, retinopatia diabética associada e contexto clínico típico. Múltiplas complicações coexistem: anemia, acidose metabólica, hipercalemia leve, dislipidemia.",
    justify: "DRC definida por TFGe < 60 mL/min/1,73m² por > 3 meses (aqui presumível pela evolução clínica) e/ou marcadores de dano renal (RAC 850 mg/g = macroalbuminúria). Estadiamento G4 (TFGe 15–29) + A3 (RAC > 300). Nefropatia diabética é a causa mais provável: DM2 mal controlado (HbA1c 9,8%), HAS não controlada, macroalbuminúria, rins com sinais ultrassonográficos de doença parenquimatosa crônica, retinopatia diabética presente (microangiopatia sistêmica). A biópsia renal não é habitualmente necessária quando o cenário clínico é típico de nefropatia diabética.",
    expectedAnamnesis: "Tempo de DM e HAS, controle glicêmico e pressórico | Monitoramento da função renal (creatinina, TFG) ao longo do tempo | Uso de medicamentos nefrotóxicos (AINEs, contraste, aminoglicosídeos) | Sintomas de DRC: fadiga, anorexia, prurido, cãibras, edema, nictúria | Histórico de acompanhamento oftalmológico (retinopatia) | Histórico familiar de DRC/diálise | Hábitos alimentares (sal, proteína, potássio) | Tabagismo (fator de progressão da DRC)",
    expectedPhysical: "Sinais vitais: PA elevada (152/96) — meta < 130/80 em nefropata diabético | Peso e IMC: obesidade | Edema MMII: avaliar grau e simetria | Ausculta cardiopulmonar: afastar congestão | Fundoscopia: retinopatia diabética (microangiopatia confirma nefropatia diabética) | Avaliação de palidez (anemia)",
    expectedExams: [
      { exam: "Creatinina + TFGe (CKD-EPI)", justify: "Estadiar DRC", expected: "TFGe 28 (G4)" },
      { exam: "RAC (albumina-creatinina urinária)", justify: "Estadiar albuminúria", expected: "850 mg/g (A3)" },
      { exam: "HbA1c", justify: "Avaliar controle glicêmico", expected: "9,8% (inadequado)" },
      { exam: "Potássio", justify: "Hipercalemia na DRC", expected: "5,2 (levemente elevado)" },
      { exam: "Bicarbonato", justify: "Acidose metabólica na DRC", expected: "19 (reduzido)" },
      { exam: "Hemograma", justify: "Anemia da DRC", expected: "Hb 10,2 (anemia normocrômica)" },
      { exam: "Lipidograma", justify: "Dislipidemia + risco CV", expected: "LDL elevado, TG elevado, HDL baixo" },
      { exam: "USG renal", justify: "Morfologia renal na DRC", expected: "Rins reduzidos, ecogenicidade aumentada" }
    ],
    expectedConduct: "Farmacológica: 1) Controle pressórico: meta PA < 130/80 mmHg — ajustar losartana para 100 mg/dia; manter e otimizar BRA como nefroprotector (atenção ao K+ 5,2 — monitorar hipercalemia com BRA). 2) Controle glicêmico: suspender metformina (contraindicada com TFGe < 30 mL/min); suspender glibenclamida (risco de hipoglicemia na DRC) — discutir início de insulina ou gliflozina (aqui TFGe 28 — gliflozina contraindicada abaixo de 30); encaminhar Endocrinologia. 3) Dislipidemia: estatina de alta intensidade (atorvastatina 40–80 mg/dia — meta LDL < 70 mg/dL). 4) Anemia da DRC: investigar deficiência de ferro; se Hb < 10 com eritropoetina deficiente — encaminhar Nefrologia para avaliar EPO. 5) Acidose metabólica: bicarbonato de sódio oral se HCO3 < 22 mEq/L persistente (2–3 g/dia VO). 6) Suspender ibuprofeno imediatamente. | Não farmacológica: Dieta hipossódica (< 2 g/dia), hipoprotéica moderada (0,6–0,8 g/kg/dia), hipocalórica. Restrição de potássio se K+ > 5,5. Atividade física leve. Controle de peso. | Encaminhamento: Nefrologia — urgente (G4 = preparo para terapia renal substitutiva se progressão). Oftalmologia para controle de retinopatia. Endocrinologia para ajuste do tratamento do DM2. | Orientações ao paciente: Explicar que o rim está funcionando em torno de 28% da capacidade (estágio avançado mas ainda com possibilidade de estabilização). Que controlar bem o açúcar e a pressão é fundamental para não progredir. Que a diálise não é inevitável se o controle melhorar. Que o uso de anti-inflamatório (ibuprofeno) prejudica o rim. | Seguimento: Retorno em 1–3 meses. Controle de creatinina, K+, HbA1c, PA. Encaminhamento imediato à Nefrologia.",
    expectedCommunication: "Apresentação: Apresentar-se, demonstrar empatia com o medo de diálise do paciente (história do pai). | Comunicação do diagnóstico: Explicar de forma honesta e esperançosa — 'seu rim está em dificuldade, mas ainda há muito que podemos fazer para retardar a progressão.' | Escuta ativa: Validar o medo do paciente, usar a história do pai como motivador de adesão ao tratamento.",
    criticalErrors: [
      "Manter metformina com TFGe < 30 mL/min — risco de acidose lática grave.",
      "Não encaminhar à Nefrologia em DRC G4 — estadio que exige preparo para TRS.",
      "Não suspender o ibuprofeno — agrava a DRC e a hipercalemia.",
      "Não estadiar corretamente a DRC (não calcular TFGe nem classificar albuminúria em categorias G e A).",
      "Não abordar a anemia da DRC (não solicitar hemograma ou não reconhecer anemia normocrômica como complicação)."
    ]
  },
  instD: {
    title: "CHECKLIST — EXAMES ALTERADOS EM PACIENTE DIABÉTICO COM INCHAÇO E URINA ESPUMOSA",
    sections: [
      {
        h: "COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
        items: [
          { item: "Apresentou-se pelo nome ao paciente", score: 0.5, ref: "CFM Res. 2.232/2019" },
          { item: "Abordou o medo do paciente em relação à diálise (história do pai) com empatia", score: 0.5, ref: "CFM Res. 2.232/2019" },
          { item: "Explicou o estágio da DRC em linguagem acessível (rim funcionando a X%)", score: 0.5, ref: "SBN 2023" },
          { item: "Perguntou se o paciente tinha dúvidas antes de encerrar", score: 0.5, ref: "CFM Res. 2.232/2019" }
        ]
      },
      {
        h: "ANAMNESE",
        items: [
          { item: "Investigou controle glicêmico e pressórico (aderência, monitoramento domiciliar)", score: 0.5, ref: "SBD 2022; SBC 2020" },
          { item: "Questionou uso de medicamentos nefrotóxicos (AINEs, automedicação)", score: 1.0, ref: "SBN 2023; RENAME 2022" },
          { item: "Investigou sintomas de DRC (fadiga, edema, anorexia, nictúria)", score: 0.5, ref: "SBN 2023" },
          { item: "Investigou histórico familiar de doença renal ou diálise", score: 0.5, ref: "SBN 2023" }
        ]
      },
      {
        h: "EXAME FÍSICO",
        items: [
          { item: "Aferiu e interpretou a PA (meta < 130/80 mmHg em nefropata diabético)", score: 0.5, ref: "SBC 2020; SBN 2023" },
          { item: "Avaliou e graduou o edema de MMII", score: 0.5, ref: "SBN 2023" }
        ]
      },
      {
        h: "RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO",
        items: [
          { item: "Estadiou corretamente a DRC como G4A3 (TFGe 28, RAC 850 mg/g)", score: 1.0, ref: "KDIGO 2012 ⚠️; SBN 2023" },
          { item: "Identificou a metformina como contraindicada (TFGe < 30) e orientou suspensão", score: 1.0, ref: "SBD 2022; RENAME 2022" },
          { item: "Identificou e abordou as complicações da DRC (anemia, acidose, hipercalemia)", score: 0.5, ref: "SBN 2023" }
        ]
      },
      {
        h: "CONDUTA E ORIENTAÇÃO AO PACIENTE",
        items: [
          { item: "Indicou encaminhamento urgente à Nefrologia (DRC G4)", score: 1.0, ref: "SBN 2023" },
          { item: "Prescreveu ou intensificou estatina de alta intensidade (atorvastatina 40–80 mg)", score: 0.5, ref: "SBC 2019; SBN 2023" },
          { item: "Orientou suspensão do ibuprofeno e evitar AINEs", score: 0.5, ref: "SBN 2023; RENAME 2022" },
          { item: "Orientou sobre dieta hipossódica e restrição de potássio", score: 0.5, ref: "SBN 2023" }
        ]
      }
    ]
  }
},

{
  id: 10,
  title: "Cansaço, urina espumosa e pressão difícil de controlar em paciente hipertenso",
  sub: "Ambulatório de Clínica Médica / Atenção Primária",
  tema: "Nefrologia",
  topic: "Doença Renal Crônica — Nefropatia Hipertensiva",
  level: "moderado",
  cardAccent: "#1565C0",
  instA: {
    scenario: "Ambulatório de Clínica Médica — UBS de referência. Consulta de retorno, turno vespertino.",
    patient: "N.S., 65 anos, masculino, aposentado, portador de hipertensão arterial sistêmica há 22 anos, sem diabetes.",
    complaint: "Retorno de rotina. Paciente refere cansaço fácil, falta de apetite e urina com espuma há 2 meses. Trouxe exames recentes.",
    tasks: [
      "Realize a anamnese dirigida ao caso.",
      "Realize o exame físico pertinente.",
      "Interprete os exames complementares trazidos.",
      "Formule o diagnóstico, estadie a DRC e identifique as complicações presentes.",
      "Proponha a conduta e oriente o paciente sobre o tratamento e o prognóstico."
    ]
  },
  instB: {
    vitals: {
      PA: "162/102 mmHg",
      FC: "74 bpm",
      FR: "16 irpm",
      Tax: "36,3°C",
      Peso: "76 kg",
      Altura: "1,70 m",
      IMC: "26,3 kg/m²"
    },
    physicalGeneral: "Paciente em bom estado geral, levemente pálido, hidratado, acianótico, anictérico. Fácies de cansaço. Sem edema facial.",
    physicalSeg: "Cardiovascular: Bulhas rítmicas, B4 presente (galope de B4 — hipertrofia ventricular esquerda). Sem sopros. Sem turgência jugular. | Respiratório: Murmúrio vesicular presente, sem ruídos adventícios. | Abdome: Plano, indolor, sem massas ou visceromegalias. | MMII: Edema discreto com cacifo 1+/4+ bilateral. | Fundo de olho (se solicitado): Retinopatia hipertensiva grau II (cruzamentos AV, fio de cobre) bilateralmente. | Pele: Palidez cutânea leve, sem petéquias ou equimoses.",
    labs: [
      { test: "Creatinina sérica", val: "2,0 mg/dL", ref: "0,7–1,2 mg/dL", alt: true },
      { test: "TFGe (CKD-EPI)", val: "35 mL/min/1,73m²", ref: "> 60 mL/min/1,73m²", alt: true },
      { test: "Ureia sérica", val: "78 mg/dL", ref: "15–45 mg/dL", alt: true },
      { test: "RAC (albumina-creatinina urinária)", val: "180 mg/g", ref: "< 30 mg/g", alt: true },
      { test: "Sódio", val: "138 mEq/L", ref: "135–145 mEq/L", alt: false },
      { test: "Potássio", val: "5,4 mEq/L", ref: "3,5–5,0 mEq/L", alt: true },
      { test: "Bicarbonato", val: "20 mEq/L", ref: "22–26 mEq/L", alt: true },
      { test: "Hemoglobina", val: "10,8 g/dL", ref: "13–17 g/dL", alt: true },
      { test: "VCM", val: "86 fL", ref: "80–100 fL", alt: false },
      { test: "PTH intacto", val: "148 pg/mL", ref: "10–65 pg/mL", alt: true },
      { test: "Fósforo sérico", val: "4,8 mg/dL", ref: "2,5–4,5 mg/dL", alt: true },
      { test: "Cálcio sérico", val: "8,6 mg/dL", ref: "8,5–10,5 mg/dL", alt: false },
      { test: "LDL-colesterol", val: "128 mg/dL", ref: "< 70 mg/dL (risco CV alto)", alt: true },
      { test: "Glicemia de jejum", val: "94 mg/dL", ref: "70–99 mg/dL", alt: false }
    ],
    image: "Ultrassonografia de rins e vias urinárias: Rins com dimensões reduzidas. Rim direito: 9,5 × 4,2 cm. Rim esquerdo: 9,3 × 4,0 cm. Ecogenicidade cortical aumentada bilateralmente. Diferenciação corticomedular borrada. Sem hidronefrose ou cálculos. ECG: Ritmo sinusal. Índice de Sokolow-Lyon positivo (SV1 + RV5 = 38 mm). Repolarização alterada em derivações laterais (sobrecarga ventricular esquerda).",
    note: "Entregar sinais vitais ao início. Entregar exame físico se solicitado. Entregar os exames laboratoriais, USG e ECG como 'exames trazidos pelo paciente' — entregar o pacote completo quando o candidato solicitar ver os exames. Revelar achado de fundo de olho apenas se o candidato solicitar ou mencionar fundoscopia. B4 (galope) deve ser mencionado pelo candidato durante o exame cardíaco — se não mencionar, o avaliador pode perguntar ao final se ouviu algo de anormal na ausculta.",
    patientProfile: "N.S., 65 anos, masculino, aposentado (ex-bancário), casado, 2 filhos. HAS há 22 anos. Sem DM. Em uso de enalapril 20 mg/dia, anlodipino 10 mg/dia, hidroclorotiazida 25 mg/dia. Não tabagista. Etilista social leve.",
    script: [
      { trigger: "Queixa principal", speech: "Doutor, tô muito cansado ultimamente, sem ânimo pra nada. E perdi o apetite. Minha urina também tá com espuma. Trouxe os exames que o senhor pediu." },
      { trigger: "Sobre a pressão", speech: "A pressão continua difícil de controlar mesmo tomando os três remédios. Em casa fica em torno de 150, 160. Nunca consigo baixar." },
      { trigger: "Sobre os sintomas urinários", speech: "A espuma é nova, faz uns 2 meses. E acordo à noite pra urinar, umas 2, 3 vezes. Antes eu não acordava." },
      { trigger: "Sobre o cansaço", speech: "Tô com falta de energia. Antes eu caminhava, agora não consigo nem uma quadra." },
      { trigger: "Sobre o apetite", speech: "Não tô com vontade de comer. Parece que a comida não tem mais gosto, fico enjoado." },
      { trigger: "Sobre prurido", speech: "É verdade, doutor. Tô com um coceiro no corpo faz uns meses. Achei que era alergia." },
      { trigger: "Sobre remédios", speech: "Tomo tudo certinho. Não uso anti-inflamatório, não." },
      { trigger: "Pergunta ativa 1", speech: "Minha pressão vai melhorar ou já estragou o rim, doutor?" },
      { trigger: "Pergunta ativa 2", speech: "Vou precisar de diálise?" }
    ],
    hiddenInfo: "Paciente refere prurido generalizado há 3 meses (toxina urêmica) — só revelar se o candidato perguntar especificamente sobre prurido, coceira ou sintomas de uremia. | Paciente usa hidroclorotiazida — que está contraindicada quando TFGe < 30 mL/min; neste caso TFGe 35 — ainda possível usar, mas deve ser avaliado o custo-benefício. Informar apenas se candidato perguntar sobre adequação dos diuréticos ao nível de função renal.",
    actorBehavior: "Paciente preocupado, resignado, um pouco desanimado ('22 anos de hipertensão e o rim foi embora'). Cooperativo. Responde bem quando o médico demonstra competência e empatia. Reage positivamente quando há um plano claro de tratamento."
  },
  instC: {
    diagnosis: "Doença Renal Crônica estágio G3bA2 (KDIGO 2012 ⚠️ / SBN) — nefrosclerose hipertensiva em paciente com HAS de 22 anos de duração, mal controlada. TFGe 35 mL/min/1,73m² (G3b) + RAC 180 mg/g (A2 = microalbuminúria). Complicações: anemia normocrômica da DRC, acidose metabólica leve, hiperfosfatemia, hiperparatireoidismo secundário (PTH 148), hipertrofia ventricular esquerda (ECG), retinopatia hipertensiva grau II, hipercalemia leve.",
    differentials: [
      "Nefropatia por outra etiologia (glomerulopatia primária, nefrite intersticial) — menos provável pela história clínica típica de HAS de longa data, sem hematúria macroscópica, sem uso de nefrotóxicos identificados, sem doença sistêmica associada.",
      "Estenose de artéria renal (HAS renovascular) — deve ser considerada em HAS resistente a 3 drogas em idoso; pode ser investigada com eco-doppler renal ou angiotomografia; incluída como diagnóstico diferencial a ser afastado.",
      "DRC por mieloma múltiplo — idoso com anemia e função renal reduzida; eletroforese de proteínas e proteína de Bence Jones para afastar se quadro atípico."
    ],
    context: "Idoso com HAS severa de 22 anos, mal controlada apesar de 3 anti-hipertensivos, evolui com DRC G3bA2 por nefrosclerose hipertensiva, com múltiplas complicações: anemia, acidose, hiperfosfatemia, hiperparatireoidismo secundário, hipertrofia ventricular esquerda e retinopatia hipertensiva. Prurido e anorexia são sintomas de síndrome urêmica incipiente.",
    justify: "DRC estabelecida pela TFGe 35 mL/min/1,73m² (presumivelmente por > 3 meses pela evolução clínica) e microalbuminúria (RAC 180 mg/g). A causa é nefrosclerose hipertensiva: HAS mal controlada por 22 anos, rins reduzidos com ecogenicidade aumentada (fibrose cortical), ausência de DM ou outra causa identificável, retinopatia hipertensiva e HVE como marcadores de lesão de órgão-alvo sistêmica pela HAS. PTH elevado (148 pg/mL) com fósforo no limite superior = hiperparatireoidismo secundário à DRC (diminuição da síntese de calcitriol pelos rins doentes). Anemia normocrômica = anemia da inflamação/eritropoetina deficiente.",
    expectedAnamnesis: "Tempo e controle da HAS (adesão, medicamentos, monitoramento) | Investigar sintomas urêmicos (anorexia, prurido, náusea, nictúria) | Histórico de uso de AINEs, contraste ou outros nefrotóxicos | Progressão da função renal ao longo do tempo (creatinina seriada) | Antecedentes cardiovasculares (IAM, AVC, IC) | Histórico familiar de DRC ou HAS grave | Hábitos alimentares (sal, proteína, líquidos)",
    expectedPhysical: "Sinais vitais: PA 162/102 (hipertensão não controlada em múltiplos fármacos — HAS resistente?) | Ausculta cardíaca: B4 (galope atrial — hipertrofia VE) | Palidez (anemia) | Edema MMII discreto | Fundoscopia: retinopatia hipertensiva grau II | Palpação abdominal: afastar sopro de artéria renal (HAS renovascular)",
    expectedExams: [
      { exam: "Creatinina + TFGe", justify: "Estadiar DRC", expected: "TFGe 35 (G3b)" },
      { exam: "RAC", justify: "Estadiar albuminúria", expected: "180 mg/g (A2)" },
      { exam: "PTH intacto", justify: "Hiperparatireoidismo secundário à DRC", expected: "148 pg/mL (elevado)" },
      { exam: "Fósforo e cálcio", justify: "Distúrbio mineral da DRC", expected: "Fósforo elevado" },
      { exam: "Hemograma", justify: "Anemia da DRC", expected: "Hb 10,8" },
      { exam: "Bicarbonato", justify: "Acidose metabólica", expected: "HCO3 20" },
      { exam: "ECG", justify: "Avaliar HVE (lesão cardíaca pela HAS)", expected: "Sokolow positivo" },
      { exam: "Lipidograma", justify: "Risco cardiovascular (DRC é risco muito alto)", expected: "LDL elevado" },
      { exam: "USG renal", justify: "Morfologia e tamanho dos rins", expected: "Rins reduzidos, hiperecogênicos" }
    ],
    expectedConduct: "Farmacológica: 1) HAS: meta < 130/80 mmHg em DRC — otimizar enalapril (aumentar para 40 mg/dia ou trocar por losartana); reavaliar necessidade de hidroclorotiazida (TFGe 35 — ainda funciona mas com eficácia reduzida; pode substituir por furosemida). Considerar espironolactona ou betabloqueador. 2) Anemia: dosar eritropoetina, ferro, ferritina — iniciar agente estimulador de eritropoiese se Hb < 10 e causas corrigíveis excluídas (encaminhar Nefrologia para prescrição de EPO). 3) Hiperfosfatemia e hiperPTH: quelante de fósforo (carbonato de cálcio com refeições), calcitriol se PTH > 3–5x o limite superior. 4) Acidose: bicarbonato de sódio oral (2–3 g/dia VO) se HCO3 persistente < 22. 5) Dislipidemia: atorvastatina 40 mg/dia. 6) Suspender hidroclorotiazida progressivamente se houver piora da TFGe. | Não farmacológica: Dieta hipossódica (< 2 g/dia), restrição de fósforo (laticínios, embutidos, refrigerantes escuros), restrição moderada de proteína (0,6–0,8 g/kg/dia), restrição de potássio se K+ > 5,5, atividade física adaptada. | Encaminhamento: Nefrologia — prioritário (G3b com múltiplas complicações + hiperPTH + anemia). Oftalmologia (retinopatia hipertensiva). | Orientações ao paciente: Explicar que a pressão mal controlada por muitos anos prejudicou os rins, mas que ainda há capacidade funcional. O objetivo agora é preservar o que resta com controle rigoroso da PA, dieta e remédios. Diálise pode ser evitada ou postergada com adesão ao tratamento. | Seguimento: Retorno em 1–2 meses. Monitorar creatinina, K+, PTH, Hb a cada 3 meses.",
    expectedCommunication: "Apresentação: Apresentar-se, demonstrar atenção ao desânimo do paciente. | Comunicação do diagnóstico: Ser honesto sobre a gravidade, mas oferecer perspectiva de estabilização: 'ainda temos muito que fazer para preservar a função renal restante.' | Escuta ativa: Reconhecer os 22 anos de luta com a pressão, validar o esforço do paciente, motivar para o tratamento com esperança realista.",
    criticalErrors: [
      "Não calcular ou estadiar corretamente a DRC (G3b + A2) — avaliação incompleta.",
      "Não identificar hiperparatireoidismo secundário à DRC (não solicitar PTH ou fósforo).",
      "Não encaminhar à Nefrologia em DRC G3b com múltiplas complicações.",
      "Não identificar a hipertrofia ventricular esquerda no ECG e no exame físico (B4).",
      "Não abordar a anemia normocrômica como complicação da DRC (deixar de investigar ou tratar)."
    ]
  },
  instD: {
    title: "CHECKLIST — CANSAÇO, URINA ESPUMOSA E PRESSÃO DIFÍCIL DE CONTROLAR EM HIPERTENSO",
    sections: [
      {
        h: "COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
        items: [
          { item: "Apresentou-se pelo nome ao paciente", score: 0.5, ref: "CFM Res. 2.232/2019" },
          { item: "Validou o esforço do paciente ao longo dos anos e abordou o desânimo com empatia", score: 0.5, ref: "CFM Res. 2.232/2019" },
          { item: "Explicou o diagnóstico de DRC e suas complicações em linguagem acessível", score: 0.5, ref: "SBN 2023" },
          { item: "Perguntou se o paciente tinha dúvidas antes de encerrar", score: 0.5, ref: "CFM Res. 2.232/2019" }
        ]
      },
      {
        h: "ANAMNESE",
        items: [
          { item: "Investigou sintomas urêmicos (prurido, anorexia, náusea, nictúria)", score: 1.0, ref: "SBN 2023" },
          { item: "Questionou controle pressórico e adesão ao tratamento anti-hipertensivo", score: 0.5, ref: "SBC 2020" },
          { item: "Investigou uso de AINEs ou outros nefrotóxicos", score: 0.5, ref: "SBN 2023; RENAME 2022" }
        ]
      },
      {
        h: "EXAME FÍSICO",
        items: [
          { item: "Aferiu e interpretou a PA (identificar HAS não controlada)", score: 0.5, ref: "SBC 2020" },
          { item: "Identificou B4 (galope atrial) na ausculta cardíaca como sinal de HVE", score: 1.0, ref: "SBC 2020" },
          { item: "Avaliou palidez e edema de MMII", score: 0.5, ref: "SBN 2023" }
        ]
      },
      {
        h: "RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO",
        items: [
          { item: "Estadiou corretamente a DRC como G3bA2", score: 1.0, ref: "KDIGO 2012 ⚠️; SBN 2023" },
          { item: "Identificou hiperparatireoidismo secundário à DRC (PTH elevado + hiperfosfatemia)", score: 1.0, ref: "SBN 2023" },
          { item: "Identificou anemia normocrômica como complicação da DRC", score: 0.5, ref: "SBN 2023" }
        ]
      },
      {
        h: "CONDUTA E ORIENTAÇÃO AO PACIENTE",
        items: [
          { item: "Indicou encaminhamento prioritário à Nefrologia", score: 1.0, ref: "SBN 2023" },
          { item: "Indicou otimização do anti-hipertensivo (meta PA < 130/80) e/ou ajuste do esquema", score: 0.5, ref: "SBC 2020; SBN 2023" },
          { item: "Orientou restrição de fósforo na dieta e/ou quelante de fósforo", score: 0.5, ref: "SBN 2023" }
        ]
      }
    ]
  }
},

{
  id: 11,
  title: "Paciente com múltiplas complicações renais, cardíacas e metabólicas em seguimento de DRC avançada",
  sub: "Ambulatório de Nefrologia — Hospital de Referência",
  tema: "Nefrologia",
  topic: "Doença Renal Crônica Avançada — DRC G5 pré-diálise",
  level: "complexo",
  cardAccent: "#4E342E",
  instA: {
    scenario: "Ambulatório de Nefrologia — hospital de referência terciária. Consulta de retorno, turno matutino.",
    patient: "F.O., 67 anos, masculino, aposentado, portador de DRC por nefropatia diabética (DM tipo 2 há 20 anos, HAS há 18 anos), acompanhado em nefrologia. Trouxe exames recentes.",
    complaint: "Paciente refere piora do cansaço, falta de ar ao esforço mínimo, coceira no corpo, perda de apetite e confusão leve nas últimas semanas. TFGe do último exame: 11 mL/min/1,73m².",
    tasks: [
      "Realize a anamnese dirigida ao contexto de DRC avançada.",
      "Realize o exame físico pertinente, identificando sinais de síndrome urêmica e complicações cardiovasculares.",
      "Interprete os exames complementares trazidos e identifique todas as complicações presentes.",
      "Discuta com o paciente a indicação de início de terapia renal substitutiva (TRS) e as modalidades disponíveis.",
      "Proponha a conduta imediata e o plano de preparo para TRS."
    ]
  },
  instB: {
    vitals: {
      PA: "168/108 mmHg",
      FC: "88 bpm",
      FR: "20 irpm",
      Tax: "36,6°C",
      Peso: "72 kg (habitual: 68 kg — ganho de 4 kg em 30 dias)",
      Altura: "1,68 m",
      IMC: "25,5 kg/m²"
    },
    physicalGeneral: "Paciente em regular estado geral, pálido (2+/4+), levemente confuso (desorientado no tempo). Anasarcado: edema de face, MMII e ascite de moderada monta. Hálito urêmico presente. Respiração com leve dispneia em repouso. Dermatose urêmica — marcas de coçar nos antebraços.",
    physicalSeg: "Cardiovascular: Bulhas rítmicas com B3 e B4 presentes. Atrito pericárdico audível em borda esternal esquerda (pericardite urêmica). Turgência jugular 2+. Pressão venosa jugular elevada. | Respiratório: Crepitações bibasais. Murmúrio vesicular diminuído em bases (derrame pleural bilateral discreto). | Abdome: Ascite de moderada monta (macicez móvel positiva). Indolor. Sem massas. Fígado 2 cm abaixo do rebordo costal. | MMII: Edema com cacifo 4+/4+ bilateral até a raiz da coxa. | Neurológico: Confusão leve, flapping tremor (asterixis) presente bilateralmente, reflexos tendinosos diminuídos. | Pele: Marcas de escoriação por prurido urêmico. Palidez acentuada.",
    labs: [
      { test: "Creatinina sérica", val: "7,8 mg/dL", ref: "0,7–1,2 mg/dL", alt: true },
      { test: "TFGe (CKD-EPI)", val: "11 mL/min/1,73m²", ref: "> 60 mL/min/1,73m²", alt: true },
      { test: "Ureia sérica", val: "248 mg/dL", ref: "15–45 mg/dL", alt: true },
      { test: "Potássio sérico", val: "6,4 mEq/L", ref: "3,5–5,0 mEq/L", alt: true },
      { test: "Sódio sérico", val: "128 mEq/L", ref: "135–145 mEq/L", alt: true },
      { test: "Bicarbonato", val: "13 mEq/L", ref: "22–26 mEq/L", alt: true },
      { test: "pH venoso", val: "7,24", ref: "7,35–7,45", alt: true },
      { test: "Fósforo sérico", val: "6,8 mg/dL", ref: "2,5–4,5 mg/dL", alt: true },
      { test: "Cálcio sérico", val: "7,8 mg/dL", ref: "8,5–10,5 mg/dL", alt: true },
      { test: "PTH intacto", val: "842 pg/mL", ref: "10–65 pg/mL", alt: true },
      { test: "Hemoglobina", val: "7,2 g/dL", ref: "13–17 g/dL", alt: true },
      { test: "HbA1c", val: "8,4%", ref: "< 7,0%", alt: true },
      { test: "RAC", val: "> 3.000 mg/g", ref: "< 30 mg/g", alt: true },
      { test: "LDL-colesterol", val: "118 mg/dL", ref: "< 70 mg/dL", alt: true },
      { test: "Albumina sérica", val: "2,8 g/dL", ref: "3,5–5,0 g/dL", alt: true }
    ],
    image: "Ecocardiograma transtorácico: Derrame pericárdico moderado (15 mm na parede posterior) sem tamponamento. Hipertrofia ventricular esquerda concêntrica. FEVE 42% (disfunção sistólica leve). Pressão sistólica de artéria pulmonar estimada em 38 mmHg (hipertensão pulmonar leve). Raio-X de tórax (PA): Cardiomegalia (índice cardiotorácico 0,58). Infiltrado alveolar perihilar bilateral ('asa de borboleta') — compatível com edema agudo pulmonar / congestão. Derrame pleural bilateral de pequeno volume.",
    note: "Entregar sinais vitais e peso habitual (68 kg) ao início. Entregar exame físico se solicitado. Entregar exames laboratoriais, ECO e RX como pacote se solicitado. O atrito pericárdico é o achado mais crítico do exame físico — se o candidato não mencionar, o avaliador pode perguntar ao final se ouviu algo diferente na ausculta cardíaca. O flapping tremor (asterixis) deve ser pesquisado ativamente — revelar somente se candidato solicitar pesquisa de asterixis ou sinais de encefalopatia urêmica. Este é um caso de DRC G5 com indicação absoluta de início de TRS — avaliar se o candidato reconhece e discute isso com o paciente.",
    patientProfile: "F.O., 67 anos, masculino, aposentado (ex-contador), casado, 3 filhos. DM tipo 2 há 20 anos. HAS há 18 anos. DRC em acompanhamento há 5 anos. Em uso de insulina NPH + regular, losartana 100 mg/dia, furosemida 80 mg/dia, carbonato de cálcio, calcitriol, eritropoetina SC semanal.",
    script: [
      { trigger: "Queixa principal", speech: "Doutor, tô cada vez pior. Não consigo mais fazer nada, falta ar até pra ir ao banheiro. Tô com coceira o dia todo e não tô conseguindo pensar direito." },
      { trigger: "Sobre o edema", speech: "Minhas pernas tão muito inchadas, mais do que nunca. Até a barriga inchou." },
      { trigger: "Sobre o apetite", speech: "Não consigo comer quase nada. Qualquer coisa me dá ânsia." },
      { trigger: "Sobre a diálise", speech: "Doutor, sei que pode chegar a hora da diálise. Tenho medo. O que vai ser da minha vida?" },
      { trigger: "Sobre preferência de modalidade", speech: "Tem como fazer em casa? Não queria ficar indo ao hospital todo dia..." },
      { trigger: "Sobre a família", speech: "Minha esposa disse que me ajuda no que precisar. Tenho filho médico também, pode ajudar." },
      { trigger: "Pergunta ativa 1", speech: "Chegou a hora, doutor? Preciso começar a diálise?" },
      { trigger: "Pergunta ativa 2", speech: "Tem alguma outra saída? Transplante é possível pra mim?" }
    ],
    hiddenInfo: "Paciente refere que parou a eritropoetina há 6 semanas por falta na farmácia — só revelar se o candidato perguntar sobre o esquema atual de medicamentos e se está tomando tudo conforme prescrito. | Paciente não está seguindo a restrição de fósforo e potássio da dieta — só revelar se o candidato perguntar sobre aderência à dieta prescrita.",
    actorBehavior: "Paciente assustado, visivelmente doente, levemente confuso. Fala de forma lenta e cansada. Responde bem quando o candidato demonstra controle da situação e clareza. Demonstra esperança ao falar do suporte familiar. Chora discretamente ao mencionar a diálise — o candidato deve ser capaz de acolher essa emoção."
  },
  instC: {
    diagnosis: "DRC estágio G5 (TFGe 11 mL/min/1,73m²) por nefropatia diabética, com síndrome urêmica e indicação absoluta de início de terapia renal substitutiva. Complicações agudas presentes: pericardite urêmica, encefalopatia urêmica incipiente (asterixis, confusão), hipercalemia grave (K+ 6,4), acidose metabólica grave (pH 7,24, HCO3 13), edema agudo pulmonar/congestão grave, anemia grave (Hb 7,2), hiperfosfatemia, hipoalbuminemia e hiperparatireoidismo terciário (PTH 842).",
    differentials: [
      "LRA sobre DRC (DRC + fator precipitante agudo) — ganho de peso rápido (4 kg em 30 dias), piora aguda dos sintomas; investigar sepse, uso de nefrotóxico, obstrução; aqui o quadro é mais compatível com progressão da DRC + hipervolemia por falência diurética.",
      "Tamponamento cardíaco — derrame pericárdico moderado sem sinais de tamponamento no ECO (sem colapso de câmaras direitas); monitorar, mas não é diagnóstico atual.",
      "Insuficiência cardíaca descompensada como causa primária — HAS + DM + HVE + FEVE 42%; IC contribui para congestão, mas o contexto de DRC G5 urêmica é o diagnóstico principal."
    ],
    context: "Paciente idoso com DRC G5 por nefropatia diabética apresenta síndrome urêmica completa com indicação absoluta de TRS: pericardite urêmica (atrito pericárdico + derrame pericárdico), encefalopatia urêmica (confusão, asterixis), hipercalemia grave (K+ 6,4), acidose metabólica grave, anasarca com edema refratário e anemia grave. O caso exige habilidade de comunicação para discussão da TRS com um paciente assustado e ainda cognitivamente capaz.",
    justify: "Indicações absolutas de início de TRS presentes: (1) pericardite urêmica (atrito pericárdico + derrame pericárdico no ECO); (2) encefalopatia urêmica (asterixis, confusão com ureia 248); (3) hipercalemia refratária (K+ 6,4 com acidose); (4) edema pulmonar refratário ao diurético. TFGe 11 mL/min/1,73m² = G5. Ureia 248 mg/dL confirma uremia. Hiperparatireoidismo terciário (PTH 842, cálcio baixo, fósforo alto) = perda de responsividade ao cálcio pela glândula paratireoide hipertrofiada — distinto do secundário.",
    expectedAnamnesis: "Progressão dos sintomas urêmicos (cansaço, prurido, confusão, anorexia, soluço) | Variação de peso recente (ganho hídrico — indica falência diurética) | Adesão aos medicamentos e à dieta (quelante de fósforo, eritropoetina, restrição de K+) | Sintomas cardíacos (dispneia, ortopneia, dor precordial — pericardite) | Controle glicêmico e pressórico | Expectativas e preferências para TRS (hemodiálise, diálise peritoneal, transplante, tratamento conservador) | Suporte familiar e situação social",
    expectedPhysical: "Sinais vitais: PA muito elevada, taquipneia | Avaliação de peso e variação ponderal | Cardiovascular: atrito pericárdico, B3+B4, turgência jugular (sinais de congestão e pericardite) | Respiratório: crepitações bibasais (EAP) | Abdome: ascite (macicez móvel) | Neurológico: pesquisa de asterixis (flapping), nível de consciência | MMII: edema anasarcado | Pele: prurido urêmico (escoriações) | Hálito urêmico",
    expectedExams: [
      { exam: "Creatinina + TFGe", justify: "Estadiar DRC G5", expected: "TFGe 11" },
      { exam: "Potássio", justify: "Hipercalemia grave — risco de arritmia", expected: "K+ 6,4" },
      { exam: "Gasometria / bicarbonato", justify: "Acidose urêmica grave", expected: "pH 7,24; HCO3 13" },
      { exam: "Ureia", justify: "Confirmar uremia", expected: "248 mg/dL" },
      { exam: "PTH e fósforo", justify: "Osteodistrofia renal / hiperPTH terciário", expected: "PTH 842, P 6,8" },
      { exam: "Hemograma", justify: "Anemia grave da DRC", expected: "Hb 7,2" },
      { exam: "Albumina", justify: "Desnutrição urêmica", expected: "2,8 g/dL" },
      { exam: "ECG", justify: "Hipercalemia + HVE", expected: "Monitorar alterações de K+" },
      { exam: "Ecocardiograma", justify: "Pericardite, derrame, função cardíaca", expected: "Derrame moderado, FEVE 42%" },
      { exam: "RX de tórax", justify: "Congestão pulmonar", expected: "'Asa de borboleta'" }
    ],
    expectedConduct: "Imediata (urgência): 1) Gluconato de cálcio 10% EV 10 mL em 3 min (estabilização de membrana — K+ 6,4 + acidose). 2) Bicarbonato de sódio EV (correção da acidose e redistribuição do K+). 3) Furosemida em altas doses EV (80–160 mg) — limitada pela DRC avançada, mas pode reduzir hipervolemia. 4) Diálise de urgência — indicação absoluta pelas complicações urêmicas múltiplas. | Farmacológica: Não iniciar novos medicamentos nefrotóxicos. Continuar quelante de fósforo. Reiniciar eritropoetina. Suspender losartana temporariamente se K+ > 6,0. | Não farmacológica: Dieta com restrição severa de K+ e fósforo. Monitorização cardíaca contínua. | TRS — discussão com o paciente: Apresentar opções de forma equilibrada: hemodiálise (3x/semana, 4h em centro de diálise), diálise peritoneal (em casa, diariamente — opção que o paciente demonstrou preferir), transplante renal (avaliar elegibilidade em paciente de 67 anos com DM e doença cardiovascular — possível, mas criterioso). Tratamento conservador máximo sem diálise também deve ser mencionado como opção em casos selecionados. | Encaminhamento: Internação hospitalar imediata para diálise de urgência. Acionar transplante renal para avaliação de elegibilidade. | Orientações ao paciente e família: Explicar com empatia que chegou o momento de iniciar a diálise, que a hemodiálise e a diálise peritoneal têm vantagens diferentes, e que a decisão deve ser compartilhada. Tranquilizar sobre a manutenção da qualidade de vida. | Seguimento: Após estabilização: planejar acesso para TRS (fístula arteriovenosa para HD, ou cateter de Tenckhoff para DP). Avaliação de transplante.",
    expectedCommunication: "Apresentação: Apresentar-se com calma, reconhecer a gravidade do momento, sentar-se ao nível do paciente. | Comunicação do diagnóstico: Confirmar com clareza e compaixão que chegou a hora da diálise, explicar os motivos (complicações graves), apresentar as opções. | Escuta ativa: Acolher o choro, validar o medo, responder à pergunta sobre diálise peritoneal (em casa) com informações claras sobre elegibilidade.",
    criticalErrors: [
      "Não reconhecer o atrito pericárdico como pericardite urêmica — indicação absoluta de diálise de urgência.",
      "Não reconhecer a hipercalemia grave (K+ 6,4) como emergência e não tratar imediatamente (gluconato de cálcio EV).",
      "Não pesquisar asterixis (flapping tremor) — sinal de encefalopatia urêmica.",
      "Não discutir TRS com o paciente ou não apresentar as modalidades disponíveis.",
      "Prescrever AINE para dor (se paciente referir dor torácica da pericardite) — gravemente contraindicado na DRC e pericardite urêmica.",
      "Não reconhecer hiperparatireoidismo terciário (vs. secundário) — PTH 842 com hipocalcemia e hiperfosfatemia num paciente com DRC G5 é terciário (autonomização da secreção de PTH)."
    ]
  },
  instD: {
    title: "CHECKLIST — DRC G5 COM SÍNDROME URÊMICA E INDICAÇÃO DE TERAPIA RENAL SUBSTITUTIVA",
    sections: [
      {
        h: "COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
        items: [
          { item: "Apresentou-se e sentou-se ao nível do paciente, demonstrando presença e empatia", score: 0.5, ref: "CFM Res. 2.232/2019" },
          { item: "Acolheu verbalmente o medo do paciente em relação à diálise sem minimizar", score: 0.5, ref: "CFM Res. 2.232/2019" },
          { item: "Apresentou as modalidades de TRS (HD e DP) de forma equilibrada e respeitou a preferência do paciente", score: 1.0, ref: "SBN 2023; CFM 2018" }
        ]
      },
      {
        h: "ANAMNESE",
        items: [
          { item: "Investigou sintomas de síndrome urêmica (prurido, confusão, anorexia, soluço)", score: 0.5, ref: "SBN 2023" },
          { item: "Questionou variação de peso recente e falha do diurético (ganho de 4 kg)", score: 0.5, ref: "SBN 2023" },
          { item: "Investigou adesão aos medicamentos (eritropoetina, quelante de fósforo)", score: 0.5, ref: "SBN 2023" }
        ]
      },
      {
        h: "EXAME FÍSICO",
        items: [
          { item: "Identificou e nomeou atrito pericárdico na ausculta cardíaca", score: 1.0, ref: "SBN 2023; Harrison 21ª ed." },
          { item: "Pesquisou e identificou asterixis (flapping tremor) como sinal de encefalopatia urêmica", score: 1.0, ref: "SBN 2023" },
          { item: "Avaliou turgência jugular e crepitações bibasais (congestão / EAP)", score: 0.5, ref: "SBC IC 2023" }
        ]
      },
      {
        h: "RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO",
        items: [
          { item: "Identificou pelo menos 2 indicações absolutas de TRS (pericardite, encefalopatia, hipercalemia refratária, EAP refratário)", score: 1.0, ref: "SBN 2023; KDIGO 2012 ⚠️" },
          { item: "Reconheceu e tratou a hipercalemia grave como emergência (gluconato de cálcio EV)", score: 1.0, ref: "SBN 2023" }
        ]
      },
      {
        h: "CONDUTA E ORIENTAÇÃO AO PACIENTE",
        items: [
          { item: "Indicou internação e diálise de urgência", score: 1.0, ref: "SBN 2023" },
          { item: "Não prescreveu AINE para dor da pericardite (contraindicação absoluta na DRC)", score: 0.5, ref: "SBN 2023; RENAME 2022" },
          { item: "Mencionou transplante renal como opção a ser avaliada", score: 0.5, ref: "SBN 2023; ABTO 2023" }
        ]
      }
    ]
  }
},

{
  id: 12,
  title: "Paciente em hemodiálise com dor torácica, dispneia e febre",
  sub: "Pronto-Atendimento — Hospital de Referência em Nefrologia",
  tema: "Nefrologia",
  topic: "DRC em Hemodiálise — Complicações Agudas",
  level: "complexo",
  cardAccent: "#880E4F",
  instA: {
    scenario: "Pronto-atendimento de hospital de referência em nefrologia. Sala de urgência, turno vespertino. Paciente chegou da sessão de hemodiálise encaminhado pela equipe da clínica de diálise.",
    patient: "W.A., 55 anos, masculino, ex-pedreiro (afastado), portador de DRC por nefropatia hipertensiva em programa de hemodiálise há 3 anos. Fístula arteriovenosa radiocefálica no antebraço esquerdo.",
    complaint: "Paciente refere dor torácica pleurítica, febre de 38,8°C e calafrios há 12 horas. Equipe da clínica de diálise observou hiperemia e secreção purulenta no local da fístula AV durante a sessão de hoje.",
    tasks: [
      "Realize a anamnese dirigida ao caso.",
      "Realize o exame físico pertinente, avaliando a fístula AV e os sinais sistêmicos.",
      "Solicite os exames complementares adequados e justifique.",
      "Formule as hipóteses diagnósticas e estabeleça a gravidade do quadro.",
      "Proponha a conduta imediata e oriente o paciente e a equipe."
    ]
  },
  instB: {
    vitals: {
      PA: "142/92 mmHg",
      FC: "112 bpm",
      FR: "22 irpm",
      Tax: "38,8°C",
      Peso: "70 kg (peso seco de referência: 67 kg — +3 kg interdialítico)",
      Altura: "1,72 m",
      IMC: "23,7 kg/m²"
    },
    physicalGeneral: "Paciente em regular estado geral, taquicárdico, febril, sudorético. Pálido (2+/4+), hidratado, acianótico, anictérico. Fácies de dor e sofrimento. Calafrios presentes.",
    physicalSeg: "Fístula AV (antebraço esquerdo): Hiperemia intensa, calor, edema e secreção purulenta no sítio de punção mais distal da fístula. Frêmito e sopro presentes (fístula funcionante). Sem sinais de trombose da fístula no momento. | Cardiovascular: Bulhas rítmicas, taquicárdicas. Sopro sistólico 2+/6+ em foco aórtico (novo — verificar se havia no prontuário anterior). Sem turgência jugular significativa. Sem atrito pericárdico. | Respiratório: Murmúrio vesicular presente, com crepitações em base direita. FR 22 irpm. | Abdome: Plano, indolor, sem massas ou visceromegalias. | MMII: Edema 2+/4+ bilateral (ganho interdialítico de 3 kg). | Pele: Sem petéquias ou lesões de Janeway. Sem nódulos de Osler (pesquisar ativamente — revelar ausência se candidato perguntar sobre estigmas de endocardite).",
    labs: [
      { test: "Hemograma — Leucócitos", val: "18.400/mm³ (87% neutrófilos, 8% bastões)", ref: "4.000–11.000/mm³", alt: true },
      { test: "Hemoglobina", val: "8,8 g/dL", ref: "13–17 g/dL", alt: true },
      { test: "Plaquetas", val: "142.000/mm³", ref: "150.000–400.000/mm³", alt: true },
      { test: "PCR", val: "198 mg/L", ref: "< 5 mg/L", alt: true },
      { test: "VHS", val: "88 mm/h", ref: "< 20 mm/h", alt: true },
      { test: "Procalcitonina", val: "18,4 ng/mL", ref: "< 0,5 ng/mL", alt: true },
      { test: "Creatinina sérica", val: "8,2 mg/dL", ref: "0,7–1,2 mg/dL", alt: true },
      { test: "Potássio sérico", val: "5,9 mEq/L", ref: "3,5–5,0 mEq/L", alt: true },
      { test: "Bicarbonato", val: "16 mEq/L", ref: "22–26 mEq/L", alt: true },
      { test: "Glicemia", val: "118 mg/dL", ref: "70–99 mg/dL", alt: true },
      { test: "Lactato", val: "3,2 mmol/L", ref: "< 2 mmol/L", alt: true },
      { test: "Hemoculturas (x2 colhidas)", val: "Aguardando resultado (48–72h)", ref: "—", alt: false },
      { test: "Troponina I", val: "0,08 ng/mL", ref: "< 0,04 ng/mL", alt: true }
    ],
    image: "Raio-X de tórax (PA): Infiltrado alveolar em lobo inferior direito — compatível com pneumonia ou embolização séptica. Cardiomegalia leve (ICT 0,55). Ausência de derrame pleural significativo. Ecocardiograma transtorácico (realizado em caráter de urgência): Vegetação em valva mitral posterior (8 mm × 5 mm). Regurgitação mitral moderada. FEVE 52%. Sem derrame pericárdico. Sem abscesso anular identificado.",
    note: "Entregar sinais vitais e peso seco de referência ao início. Entregar exame físico se solicitado — incluindo achado da fístula e o sopro cardíaco novo (revelar que é novo se o candidato perguntar se havia sopro anterior). Entregar exames laboratoriais e RX se solicitados. Entregar ECO somente se o candidato solicitar expressamente ecocardiograma para rastrear endocardite (não entregar de forma espontânea). Hemoculturas — informar que foram colhidas mas o resultado está pendente. Revelar ausência de estigmas periféricos de endocardite (Janeway, Osler) apenas se candidato pesquisar ativamente.",
    patientProfile: "W.A., 55 anos, masculino, ex-pedreiro (afastado por DRC), casado, 4 filhos. DRC por nefropatia hipertensiva. Em hemodiálise há 3 anos, 3x/semana. Fístula AV radiocefálica esquerda funcionante. Em uso de eritropoetina SC, carbonato de cálcio, calcitriol, atenolol 25 mg/dia. Não diabético. Ex-tabagista.",
    script: [
      { trigger: "Queixa principal", speech: "Doutor, fui pra diálise hoje e o pessoal ficou preocupado com meu braço, tava com pus no lugar onde eles espetam. E eu tô com febre e calafrio desde ontem à noite. Dói aqui no peito também, piora quando respiro fundo." },
      { trigger: "Sobre a dor no peito", speech: "É uma dor na lateral, que piora fundo quando inspiro. Não é no meio do peito não." },
      { trigger: "Sobre a fístula", speech: "O braço começou a ficar vermelho e inchado faz uns 3 dias, achei que entrou alguma coisa." },
      { trigger: "Sobre febre", speech: "Tive febre alta essa madrugada, com muito calafrio. Tomei dipirona mas voltou." },
      { trigger: "Sobre outros sintomas", speech: "Tô sem fôlego também, mas é diferente do normal. Geralmente falta ar quando encho de líquido, agora tá diferente." },
      { trigger: "Sobre a fístula anteriormente", speech: "Já tiveram problema com o braço antes, mas nunca tive infecção assim." },
      { trigger: "Pergunta ativa 1", speech: "Doutor, é infecção no braço? Vai precisar tirar a fístula?" },
      { trigger: "Pergunta ativa 2", speech: "E a diálise? Consigo fazer na próxima sessão?" }
    ],
    hiddenInfo: "Paciente relata que a equipe da clínica de diálise puncionou a mesma veia por 4 sessões consecutivas sem rodízio dos sítios de punção (prática inadequada que propicia infecção local) — só revelar se o candidato perguntar sobre a técnica de punção nas sessões recentes ou sobre eventos relacionados à fístula. | Paciente teve um episódio de 'falta de ar com febre' há 3 semanas, foi à UPA e recebeu alta com diagnóstico de 'gripe' sem exames — só revelar se o candidato perguntar sobre episódios semelhantes anteriores ou febre em semanas anteriores (possível endocardite em evolução há mais tempo).",
    actorBehavior: "Paciente assustado com a possibilidade de perder a fístula (sua 'linha de vida'). Cooperativo, mas ansioso. Demonstra conhecimento básico sobre diálise por experiência de 3 anos. Responde bem quando o candidato demonstra domínio da situação. Fica visivelmente preocupado quando o médico menciona 'coração'."
  },
  instC: {
    diagnosis: "Endocardite infecciosa (EI) em paciente em hemodiálise — provável foco: infecção de fístula AV por Staphylococcus aureus (agente mais comum em pacientes em hemodiálise). Vegetação mitral no ECO confirma diagnóstico pelos critérios de Duke modificados (1 critério maior: ECO positivo + 1 critério menor: febre + 1 critério menor: foco de infecção intravascular). Complicação pulmonar: embolia séptica em lobo inferior direito. Sepse com hiperlactatemia (lactato 3,2).",
    differentials: [
      "Pneumonia adquirida na comunidade isolada — possível, mas a combinação de vegetação no ECO, sopro novo, fístula infectada e embolização pulmonar configura EI com complicação embólica, não PAC isolada.",
      "Infecção de fístula AV sem bacteremia/endocardite — infecção localizada sem complicações sistêmicas; descartada pela presença de vegetação no ECO, febre alta, calafrios, procalcitonina muito elevada e embolia pulmonar.",
      "Tromboflebite séptica da fístula — pode coexistir; sopro novo e vegetação no ECO apontam para EI como diagnóstico primário."
    ],
    context: "Paciente em hemodiálise há 3 anos apresenta infecção de fístula AV com bacteremia e endocardite infecciosa de valva mitral, complicada por embolia séptica pulmonar e sepse (lactato 3,2 mmol/L). O agente mais provável é Staphylococcus aureus, frequentemente MRSA em pacientes em hemodiálise. A morbimortalidade é alta — tratamento envolve antibioticoterapia prolongada e avaliação cirúrgica cardíaca.",
    justify: "Critérios de Duke modificados para EI: (1) critério maior: vegetação na valva mitral ao ECO (8×5 mm); (2) critérios menores: febre 38,8°C, foco de infecção predisponente (fístula infectada, hemodiálise). Diagnóstico possível/confirmado por ECO positivo. Sopro sistólico novo em aórtico deve ser reavaliado — pode ser regurgitação mitral irradiada ou valva aórtica comprometida (indicação de ECO transesofágico para melhor caracterização). Procalcitonina 18,4 indica bacteremia. Lactato 3,2 = sepse com disfunção orgânica.",
    expectedAnamnesis: "Início e progressão da febre, calafrios (padrão séptico) | Caracterização da dor torácica (pleurítica — embolia séptica) | Histórico da fístula AV (tempo, infecções anteriores, técnica de punção) | Sintomas anteriores de possível EI (febre, mal-estar, dispneia em semanas prévias) | Episódios de bacteremia ou infecção prévia documentados | Uso de antibióticos recentes | Histórico de cardiopatia, valvopatia prévia | Aderência às sessões de diálise",
    expectedPhysical: "Sinais vitais: febre, taquicardia, taquipneia | Fístula AV: hiperemia, calor, edema, secreção purulenta — avaliar frêmito e sopro (perviedade) | Ausculta cardíaca: sopro novo — sinal cardinal de EI | Ausculta pulmonar: crepitações em base direita (embolia séptica) | Pesquisa de estigmas periféricos de EI: petéquias, manchas de Roth, lesões de Janeway, nódulos de Osler, hemorragia subungueal (splinter) | Fundoscopia: manchas de Roth (se disponível) | MMII: sinais de embolia arterial",
    expectedExams: [
      { exam: "Hemoculturas seriadas (2–3 pares)", justify: "Identificar agente etiológico (pré-ATB)", expected: "S. aureus provável (aguardar)" },
      { exam: "Ecocardiograma transtorácico", justify: "Confirmar vegetação / valvopatia", expected: "Vegetação mitral 8×5 mm" },
      { exam: "ECO transesofágico", justify: "Maior sensibilidade para vegetações pequenas e abscesso perianular", expected: "Indicado após ETT" },
      { exam: "Hemograma completo", justify: "Leucocitose com desvio", expected: "Leucocitose, anemia" },
      { exam: "PCR e procalcitonina", justify: "Marcadores de sepse", expected: "Muito elevados" },
      { exam: "Lactato", justify: "Confirmar hipoperfusão / sepse grave", expected: "3,2 mmol/L" },
      { exam: "RX de tórax", justify: "Embolia séptica / pneumonia", expected: "Infiltrado em lobo inferior direito" },
      { exam: "ECG", justify: "Arritmia, bloqueio AV (abscesso do septo)", expected: "Monitorar" },
      { exam: "Troponina", justify: "Injúria miocárdica / miocardite séptica", expected: "0,08 (levemente elevada)" },
      { exam: "Potássio", justify: "Hipercalemia na DRC", expected: "K+ 5,9" },
      { exam: "Cultura da secreção da fístula", justify: "Identificar agente local", expected: "S. aureus provável" }
    ],
    expectedConduct: "Farmacológica — ATB empírica (pré-cultura): EI em hemodiálise: cobertura para Staphylococcus aureus incluindo MRSA. Vancomicina EV — dose ajustada à função renal (em hemodiálise: 15–20 mg/kg a cada 48–72h após HD, com níveis monitorados). Adicionar cobertura para gram-negativos se necessário (gentamicina — uso cauteloso e limitado na DRC). Antibioticoterapia por 4–6 semanas (EI de valva nativa). Não iniciar ATB antes de coletar hemoculturas. | Manejo da fístula: Não retirar a fístula imediatamente se ainda funcionante — decisão multidisciplinar (nefrologia + cirurgia vascular + infectologia). Cultura local. Avaliar necessidade de cateter temporário para diálise se fístula precisar ser desativada. | Cirurgia cardíaca: Avaliar indicação cirúrgica: vegetação > 10 mm com embolia recorrente, insuficiência valvar grave, abscesso, EI fúngica, falha clínica — aqui vegetação 8 mm sem indicação cirúrgica imediata; monitorar. | Manejo da sepse: Protocolo de sepse — acesso venoso, fluidoterapia cautelosa (DRC), monitorização, ATB na 1ª hora após coleta de culturas. | Encaminhamento: Internação em leito de alta complexidade. Infectologia + Cardiologia + Cirurgia Cardíaca + Nefrologia (equipe multidisciplinar). | Orientações ao paciente: Explicar que a infecção do braço se espalhou para o coração (linguagem acessível). Que o tratamento é com antibiótico potente por muitas semanas. Que a fístula será avaliada mas que a prioridade é tratar a infecção. Que a diálise será mantida por acesso alternativo se necessário. | Seguimento: Hemoculturas de controle após 48–72h. ECO seriado (semanal). Monitorização de nível de vancomicina. Avaliação cirúrgica cardíaca.",
    expectedCommunication: "Apresentação: Apresentar-se com calma e demonstrar controle da situação urgente. | Comunicação do diagnóstico: Explicar que a infecção do braço provavelmente chegou ao coração e aos pulmões, que é sério mas tratável, e que uma equipe especializada vai cuidar. | Escuta ativa: Responder à preocupação com a fístula — 'vamos proteger a fístula ao máximo, mas a sua vida é a prioridade agora.'",
    criticalErrors: [
      "Iniciar antibiótico antes de coletar hemoculturas — compromete o diagnóstico microbiológico e a otimização da terapia.",
      "Não solicitar ecocardiograma em paciente em hemodiálise com febre e sopro novo — perder o diagnóstico de endocardite.",
      "Usar vancomicina sem ajuste de dose para hemodiálise — risco de toxicidade e subdosagem.",
      "Retirar imediatamente a fístula sem avaliação multidisciplinar — pode comprometer o acesso dialítico sem necessidade.",
      "Não pesquisar estigmas periféricos de endocardite (Janeway, Osler, petéquias, hemorragias subungueais) — exame físico incompleto para o diagnóstico de EI.",
      "Não reconhecer o lactato elevado (3,2 mmol/L) como critério de sepse — subvalorizar a gravidade do quadro."
    ]
  },
  instD: {
    title: "CHECKLIST — PACIENTE EM HEMODIÁLISE COM DOR TORÁCICA, DISPNEIA E FEBRE",
    sections: [
      {
        h: "COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
        items: [
          { item: "Apresentou-se com calma ao paciente em situação de urgência", score: 0.5, ref: "CFM Res. 2.232/2019" },
          { item: "Respondeu à preocupação com a fístula com empatia e clareza ('a vida vem primeiro')", score: 0.5, ref: "CFM Res. 2.232/2019" },
          { item: "Explicou o diagnóstico de endocardite em linguagem acessível ('infecção chegou ao coração')", score: 0.5, ref: "CFM Res. 2.232/2019" }
        ]
      },
      {
        h: "ANAMNESE",
        items: [
          { item: "Investigou características da febre e calafrios (padrão séptico)", score: 0.5, ref: "SBN 2023; SBC EI 2019" },
          { item: "Questionou histórico da fístula AV (infecções anteriores, técnica de punção)", score: 0.5, ref: "SBN 2023" },
          { item: "Investigou episódios prévios de febre ou sintomas sistêmicos nas últimas semanas", score: 0.5, ref: "SBC EI 2019" }
        ]
      },
      {
        h: "EXAME FÍSICO",
        items: [
          { item: "Examinou a fístula AV (hiperemia, secreção, perviedade)", score: 0.5, ref: "SBN 2023" },
          { item: "Identificou sopro cardíaco novo e o associou à suspeita de endocardite", score: 1.0, ref: "SBC EI 2019" },
          { item: "Pesquisou estigmas periféricos de endocardite (Janeway, Osler, petéquias, hemorragia subungueal)", score: 1.0, ref: "SBC EI 2019" }
        ]
      },
      {
        h: "RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO",
        items: [
          { item: "Formulou suspeita de endocardite infecciosa e indicou ecocardiograma", score: 1.0, ref: "SBC EI 2019" },
          { item: "Coletou hemoculturas (2 pares) ANTES de iniciar antibiótico", score: 1.0, ref: "SBC EI 2019; MS 2022" },
          { item: "Reconheceu lactato elevado como critério de sepse e avaliou gravidade", score: 0.5, ref: "SBN 2023; SEPSIS-3 ⚠️" }
        ]
      },
      {
        h: "CONDUTA E ORIENTAÇÃO AO PACIENTE",
        items: [
          { item: "Prescreveu vancomicina EV como antibioticoterapia empírica para MRSA", score: 0.5, ref: "SBC EI 2019; MS 2022" },
          { item: "Não retirou imediatamente a fístula sem avaliação multidisciplinar", score: 0.5, ref: "SBN 2023" },
          { item: "Indicou internação e referenciou equipe multidisciplinar (Infectologia + Cardiologia + Nefrologia)", score: 0.5, ref: "SBC EI 2019" }
        ]
      }
    ]
  }
}

]; 

export default nefro2;
