// Auto-parsed from: data/Markdown files/Endocrino1
// Contains two cases: OSCE-3 (Hipotireoidismo) and OSCE-4 (Diabetes Mellitus tipo 2)

const endocrineStations1 = [

  // ── ESTAÇÃO 3 ──────────────────────────────────────────────────────────────
  {
    id: 3,
    title: "Cansaço excessivo e ganho de peso",
    sub: "UBS — Atenção Primária",
    tema: "Endocrinologia",
    topic: "hipotireoidismo",
    level: "simples",
    time: null,
    type: null,
    comp: ["Anamnese", "Exame Físico", "Raciocínio Clínico", "Conduta", "Comunicação"],
    cardAccent: "#9b59b6",

    instA: {
      scenario: "Unidade Básica de Saúde (UBS). Turno da manhã.",
      patient: "M.S.T., 45 anos, sexo feminino, professora.",
      complaint: "Doutor(a), ando muito cansada nos últimos meses, só quero dormir e estou engordando sem motivo.",
      tasks: [
        "Realize a anamnese focada na queixa principal.",
        "Realize o exame físico pertinente (verbalize os achados solicitados).",
        "Formule a hipótese diagnóstica e solicite os exames complementares adequados.",
        "Institua o tratamento inicial e oriente a paciente sobre a medicação e seguimento."
      ]
    },

    instB: {
      vitals: {
        PA: "120/80 mmHg",
        FC: "54 bpm",
        FR: "14 irpm",
        Tax: "36,2°C",
        Peso: "78 kg (ganho de 6 kg em 6 meses)",
        Altura: "1,62 m",
        IMC: "29,7 kg/m²"
      },
      physicalGeneral: "Bom estado geral, eupneica, bradicárdica, anictérica. Fácies discretamente mixedematosa (infiltração periorbital leve). Voz ligeiramente rouca e lentificação no discurso. Pele ressecada e fria.",
      physicalSeg: [
        "CERVICAL (TIREOIDE): Tireoide palpável, de volume normal a discretamente aumentado, consistência firme, superfície irregular, indolor, sem nódulos dominantes.",
        "CARDIOVASCULAR: Ritmo cardíaco regular, bulhas normofonéticas, sem sopros. Bradicardia (FC 54 bpm).",
        "NEUROLÓGICO: Reflexos tendíneos profundos (especialmente aquileu) com fase de relaxamento lentificada. Força preservada."
      ],
      labs: [
        { test: "TSH", val: "22,4 mUI/L", ref: "0,4 a 4,5 mUI/L", alt: true },
        { test: "T4 Livre", val: "0,6 ng/dL", ref: "0,9 a 1,7 ng/dL", alt: true },
        { test: "Anti-TPO", val: "450 UI/mL", ref: "< 34 UI/mL", alt: true },
        { test: "Hemograma — Hb", val: "11,5 g/dL (VCM 92)", ref: "12–16 g/dL", alt: true },
        { test: "Glicemia de jejum", val: "92 mg/dL", ref: "< 100 mg/dL", alt: false }
      ],
      image: "USG de Tireoide: entregar apenas se solicitado; avaliador deve informar verbalmente que não está disponível ou não tem indicação formal inicial.",
      note: "Se o candidato pedir 'exames laboratoriais', pergunte 'Quais especificamente?'. Entregue os resultados apenas se TSH e T4 Livre forem solicitados. O Anti-TPO não é obrigatório para diagnóstico, mas forneça se pedido.",
      patientProfile: "Maria Silva Teixeira, 45 anos, feminino, professora, casada.",
      script: [
        { trigger: "Queixa principal", speech: "Eu chego do trabalho e só quero cama. Durmo umas 9 horas por noite e acordo exausta. Além disso, minhas roupas estão todas apertadas." },
        { trigger: "Sobre pele e cabelo", speech: "Minha pele tá muito seca, parece que passo creme e não adianta. E meu cabelo tá caindo bastante no banho." },
        { trigger: "Sobre outros sintomas (frio/intestino)", speech: "Tenho sentido muito frio, até nos dias quentes eu durmo de cobertor. E só consigo ir aos pés (fazer cocô) a cada 3 ou 4 dias." },
        { trigger: "Sobre ciclo menstrual", speech: "Minha menstruação tá vindo com muito fluxo, às vezes dura 8 dias." },
        { trigger: "Pergunta ativa", speech: "Doutor(a), esse problema tem cura? Vou ter que tomar remédio pra sempre?" }
      ],
      hiddenInfo: [
        "Minha mãe e minha irmã também têm problema na tireoide e tomam um comprimido de manhã.",
        "Não tomo nenhum outro remédio, não fumo e não bebo."
      ],
      actorBehavior: "Falar de forma um pouco mais lenta que o normal, demonstrar cansaço (bocejar sutilmente 1 ou 2 vezes). Mostrar preocupação com o ganho de peso."
    },

    instC: {
      diagnosis: "Hipotireoidismo primário (provavelmente Tireoidite de Hashimoto, dado o perfil epidemiológico e Anti-TPO positivo).",
      differentials: [
        "Depressão Maior — afastada pelas alterações físicas clássicas (bradicardia, pele seca, alteração de reflexos) e TSH alterado.",
        "Anemia — pode cursar com fadiga, mas não explica o quadro completo; a leve anemia presente é secundária ao hipotireoidismo ou menorragia.",
        "Climatério/Menopausa — pode causar irregularidade menstrual e ganho de peso, mas tipicamente cursa com fogachos/calor, não intolerância ao frio."
      ],
      context: "Mulher de 45 anos com quadro clínico clássico e florido de hipometabolismo (fadiga, ganho de peso, intolerância ao frio, constipação, bradicardia, pele seca e lentificação de reflexos), confirmando-se laboratorialmente um hipotireoidismo primário.",
      justify: "O quadro clínico levanta alta suspeição de disfunção tireoidiana por hipofunção. A confirmação se dá pelo TSH elevado acompanhado de T4 Livre baixo (hipotireoidismo clínico primário).",
      expectedAnamnesis: [
        "Investigar sintomas sistêmicos: intolerância ao frio, hábito intestinal (constipação), alterações de pele/fâneros (queda de cabelo, pele seca).",
        "Questionar sobre ciclo menstrual (menorragia/irregularidade).",
        "Questionar sobre antecedentes familiares de doenças tireoidianas ou autoimunes."
      ],
      expectedPhysical: [
        "Sinais vitais: identificar a bradicardia (FC 54).",
        "Cabeça e Pescoço: palpação da glândula tireoide (buscando bócio, nódulos ou consistência alterada).",
        "Pele/Fâneros: avaliar ressecamento da pele e textura dos cabelos.",
        "Neurológico: pesquisa de reflexos tendíneos (aquileu) buscando lentificação."
      ],
      expectedExams: [
        { exam: "TSH", justify: "Exame de triagem e padrão-ouro inicial para função tireoidiana.", expected: "Elevado (> 4,5 mUI/L)." },
        { exam: "T4 Livre", justify: "Avaliar a gravidade (clínico vs subclínico).", expected: "Reduzido." },
        { exam: "Anti-TPO", justify: "Determinar etiologia autoimune (Hashimoto).", expected: "Positivo (opcional, não afeta conduta inicial)." }
      ],
      expectedConduct: [
        "Farmacológica: iniciar reposição com Levotiroxina Sódica. Dose inicial recomendada: 1,6 mcg/kg/dia (aprox. 100–125 mcg); iniciar com 50–75 mcg/dia também é aceito na UBS para reavaliação.",
        "Orientações ao paciente: tomar a medicação exclusivamente em jejum (com água), aguardando 30 a 60 minutos antes do desjejum. Não tomar com outros medicamentos (ex.: sulfato ferroso, cálcio, omeprazol).",
        "Seguimento: retorno em 6 semanas (4 a 8 semanas) com novo TSH para ajuste de dose.",
        "Resposta à pergunta ativa: explicar que a doença não tem cura definitiva, mas tem excelente controle; uso da medicação é na grande maioria das vezes para toda a vida."
      ],
      expectedCommunication: [
        "Empatia com a queixa de cansaço e ganho de peso.",
        "Explicação clara, sem jargões, sobre o que é a tireoide e como ela 'trabalha devagar' nesta doença."
      ],
      criticalErrors: [
        "Prescrever medicações para emagrecimento ou antidepressivos sem antes investigar a função tireoidiana na paciente com queixas clássicas.",
        "Iniciar tratamento sem dosar ou avaliar o T4 Livre e TSH.",
        "Não orientar a tomada correta da Levotiroxina (em jejum absoluto), o que compromete totalmente a absorção e o tratamento."
      ]
    },

    instD: {
      title: "CHECKLIST — Cansaço excessivo e ganho de peso",
      sections: [
        {
          h: "BLOCO 1 — POSTURA E APRESENTAÇÃO PROFISSIONAL",
          items: [
            { item: "Apresentou-se à paciente, manteve contato visual adequado e postura acolhedora frente à queixa de ganho de peso e fadiga.", score: 0.5, ref: "CFM / Comunicação" },
            { item: "Explicou a conduta e respondeu à dúvida da paciente de forma empática (sobre uso de remédio para sempre).", score: 0.5, ref: "Relação Médico-Paciente" }
          ]
        },
        {
          h: "BLOCO 2 — ANAMNESE",
          items: [
            { item: "Investigou sintomas associados ao hipometabolismo: intolerância ao frio, hábito intestinal e alterações de pele/cabelo.", score: 0.5, ref: "Diretrizes SBEM, 2013" },
            { item: "Investigou alterações no ciclo menstrual.", score: 0.5, ref: "Harrison, Med. Interna" },
            { item: "Questionou sobre antecedentes familiares (especialmente para doenças da tireoide).", score: 0.5, ref: "Diretrizes SBEM, 2013" },
            { item: "Questionou sobre uso de medicamentos contínuos e outras comorbidades.", score: 0.5, ref: "Semiologia Médica" }
          ]
        },
        {
          h: "BLOCO 3 — EXAME FÍSICO",
          items: [
            { item: "Solicitou avaliação dos sinais vitais e valorizou a bradicardia.", score: 0.5, ref: "Semiologia Médica" },
            { item: "Solicitou ou realizou a palpação da glândula tireoide adequadamente.", score: 1.0, ref: "Semiologia Médica" },
            { item: "Solicitou avaliação de pele/fâneros ou reflexos tendíneos.", score: 0.5, ref: "Diretrizes SBEM, 2013" }
          ]
        },
        {
          h: "BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO",
          items: [
            { item: "Formulou a hipótese diagnóstica verbal de hipotireoidismo.", score: 1.0, ref: "Diretrizes SBEM / MS" },
            { item: "Solicitou TSH e T4 Livre para confirmação diagnóstica.", score: 1.0, ref: "MS - PCDT Hipotireoidismo" },
            { item: "Solicitou pesquisa de autoimunidade (Anti-TPO) ou justificou a etiologia primária (Hashimoto).", score: 0.5, ref: "Diretrizes SBEM, 2013" }
          ]
        },
        {
          h: "BLOCO 5 — CONDUTA E ORIENTAÇÃO AO PACIENTE",
          items: [
            { item: "Prescreveu Levotiroxina sódica (50 a 100 mcg/dia).", score: 1.0, ref: "MS - PCDT Hipotireoidismo" },
            { item: "Orientou tomar o medicamento exclusivamente em JEJUM (com água), aguardando de 30 a 60 min para comer.", score: 1.0, ref: "MS - PCDT Hipotireoidismo" },
            { item: "Orientou necessidade de reavaliação laboratorial (novo TSH) em 4 a 8 semanas (aproximadamente 6 semanas).", score: 0.5, ref: "Diretrizes SBEM, 2013" }
          ]
        }
      ]
    }
  },

  // ── ESTAÇÃO 4 ──────────────────────────────────────────────────────────────
  {
    id: 4,
    title: "Muita sede e perda de peso",
    sub: "UBS — Atenção Primária",
    tema: "Endocrinologia",
    topic: "diabetes-mellitus",
    level: "simples",
    time: null,
    type: null,
    comp: ["Anamnese", "Exame Físico", "Raciocínio Clínico", "Conduta", "Comunicação"],
    cardAccent: "#f39c12",

    instA: {
      scenario: "Unidade Básica de Saúde (UBS). Turno da manhã.",
      patient: "R.O.M., 52 anos, sexo masculino, vigilante noturno.",
      complaint: "Doutor(a), estou com muita sede, bebendo água toda hora e perdi uns 6 quilos no último mês sem fazer nenhuma dieta.",
      tasks: [
        "Realize a anamnese focada na queixa principal e antecedentes.",
        "Solicite os achados do exame físico pertinentes.",
        "Formule a hipótese diagnóstica e solicite os exames complementares adequados.",
        "Institua a conduta terapêutica inicial e forneça as orientações adequadas ao paciente."
      ]
    },

    instB: {
      vitals: {
        PA: "140/90 mmHg",
        FC: "78 bpm",
        FR: "16 irpm",
        Tax: "36,5°C",
        Peso: "88 kg (pesava 94 kg há 2 meses)",
        Altura: "1,70 m",
        IMC: "30,4 kg/m²"
      },
      physicalGeneral: "Bom estado geral, lúcido e orientado, eupneico, mucosas levemente desidratadas (+/4+), acianótico, anictérico. Presença de hiperpigmentação espessada e aveludada em região cervical posterior e axilas (acantose nigricans).",
      physicalSeg: [
        "CARDIOVASCULAR: Ritmo cardíaco regular em 2 tempos, bulhas normofonéticas, sem sopros.",
        "RESPIRATÓRIO: Murmúrio vesicular universalmente audível, sem ruídos adventícios.",
        "ABDOME: Globoso, indolor à palpação, sem visceromegalias.",
        "MEMBROS INFERIORES: Sem edemas. Pulsos pediosos e tibiais posteriores presentes e simétricos. Sensibilidade tátil preservada (monofilamento)."
      ],
      labs: [
        { test: "Glicemia Capilar (HGT)", val: "285 mg/dL", ref: "< 140 mg/dL (aleatória)", alt: true }
      ],
      image: null,
      note: "Entregue a Glicemia Capilar (HGT) apenas se o candidato solicitar expressamente o 'teste da ponta de dedo', 'dextro' ou 'glicemia capilar'. Se solicitar exames venosos, informe: 'Os exames foram solicitados, mas o paciente precisa da conduta inicial hoje na UBS'.",
      patientProfile: "Roberto Oliveira Matos, 52 anos, masculino, vigilante, casado.",
      script: [
        { trigger: "Queixa principal", speech: "Eu não sei o que tá acontecendo, doutor. Eu bebo garrafas e garrafas de água e a boca continua seca. E tô urinando toda hora, até de madrugada eu levanto umas 4 vezes." },
        { trigger: "Sobre fome e peso", speech: "Eu tô comendo mais do que o normal, parece que a fome não passa. E mesmo comendo muito, minhas calças estão caindo, perdi uns 6 quilos rapidinho." },
        { trigger: "Sobre sintomas associados", speech: "Às vezes minha vista fica meio embaçada, e ando me sentindo muito fraco e cansado no trabalho." },
        { trigger: "Sobre histórico familiar", speech: "Meu pai teve aquela doença do açúcar, perdeu até uns dedos do pé por causa disso. Será que eu tô com isso também?" },
        { trigger: "Pergunta ativa", speech: "Doutor(a), eu vou precisar tomar injeção de insulina na barriga igual meu pai?" }
      ],
      hiddenInfo: [
        "Minha alimentação é bem ruim: como trabalho à noite, como muito salgado, pão e tomo quase um litro de refrigerante normal por plantão pra ficar acordado.",
        "Não faço nenhum exercício físico."
      ],
      actorBehavior: "Mostrar-se cansado, com a boca seca (passando a língua nos lábios com frequência) e bastante apreensivo com a possibilidade de ter que usar insulina, devido ao trauma familiar."
    },

    instC: {
      diagnosis: "Diabetes Mellitus tipo 2 (DM2) recém-diagnosticado.",
      differentials: [
        "Diabetes Mellitus tipo 1 — menos provável pela idade de apresentação, fenótipo de obesidade e presença de resistência insulínica/acantose nigricans, embora LADA possa ser um diferencial.",
        "Diabetes Insipidus — cursa com poliúria e polidipsia, mas não explica a polifagia, acantose nigricans, e a glicemia capilar estaria normal."
      ],
      context: "Paciente masculino, meia-idade, obeso, com fatores de risco (sedentarismo, má alimentação, história familiar forte), apresentando os 4 Ps clássicos (Poliúria, Polidipsia, Polifagia e Perda de peso). O diagnóstico é fechado na própria consulta com glicemia casual > 200 mg/dL associada aos sintomas clássicos.",
      justify: "Segundo as diretrizes da SBD, a presença de sintomas clássicos de hiperglicemia associada a glicemia ao acaso ≥ 200 mg/dL estabelece o diagnóstico de Diabetes Mellitus, sem necessidade de exame de jejum para iniciar o tratamento.",
      expectedAnamnesis: [
        "Identificar ativamente os 4 Ps clássicos: poliúria, polidipsia, polifagia, perda de peso.",
        "Investigar histórico familiar de Diabetes Mellitus e complicações.",
        "Questionar sobre hábitos de vida (dieta, atividade física, tabagismo).",
        "Investigar sintomas de complicações agudas ou crônicas (visão turva, parestesias, tontura)."
      ],
      expectedPhysical: [
        "Sinais vitais: avaliar PA e IMC (identificar obesidade e possível hipertensão associada).",
        "Pele: buscar sinais de resistência insulínica (acantose nigricans) e avaliar hidratação.",
        "Extremidades: inspeção rápida dos pés (pulsos, perfusão, integridade da pele)."
      ],
      expectedExams: [
        { exam: "Glicemia Capilar (imediata)", justify: "Fechar diagnóstico na vigência de sintomas clássicos.", expected: "> 200 mg/dL." },
        { exam: "Hemoglobina Glicada (HbA1c)", justify: "Avaliar controle pregresso e estabelecer meta terapêutica (solicitar para retorno).", expected: "Elevada." },
        { exam: "Perfil Lipídico e Função Renal", justify: "Rastreio de comorbidades e complicações (solicitar para retorno).", expected: "Possível dislipidemia." }
      ],
      expectedConduct: [
        "Farmacológica: iniciar Metformina 500 mg 1 a 2x/dia, junto às refeições, para minimizar efeitos TGI.",
        "Não farmacológica: Mudança de Estilo de Vida (MEV) — orientar cessação de carboidratos simples (refrigerantes, doces), dieta balanceada e início de atividade física regular.",
        "Exames de rastreio: solicitar HbA1c, glicemia de jejum, perfil lipídico, creatinina, relação albuminúria/creatininúria, EAS.",
        "Orientação: tranquilizar o paciente quanto ao uso de insulina — explicar que o tratamento inicial será com comprimidos e dieta, mas que a adesão é fundamental para não chegar ao estágio do pai."
      ],
      expectedCommunication: [
        "Empatia e acolhimento dos medos do paciente (estigma da doença e amputação do pai).",
        "Explicação clara sobre o que é o diabetes tipo 2 e a importância do controle do peso."
      ],
      criticalErrors: [
        "Dispensar o paciente apenas com pedido de exames (glicemia de jejum) sem fechar o diagnóstico e iniciar o tratamento — ele já tem critérios diagnósticos e está muito sintomático.",
        "Iniciar insulina imediatamente sem antes tentar antidiabéticos orais (o paciente não está em cetoacidose).",
        "Não orientar restrição imediata de açúcares simples (refrigerante normal relatado no script)."
      ]
    },

    instD: {
      title: "CHECKLIST — Muita sede e perda de peso",
      sections: [
        {
          h: "BLOCO 1 — POSTURA E APRESENTAÇÃO PROFISSIONAL",
          items: [
            { item: "Apresenta-se ao paciente, demonstra escuta ativa e acolhe o medo manifestado sobre a doença do pai.", score: 1.0, ref: "CFM / Relação Médico-Paciente" }
          ]
        },
        {
          h: "BLOCO 2 — ANAMNESE",
          items: [
            { item: "Investiga a presença dos sintomas clássicos completos: poliúria, polidipsia, polifagia e perda de peso.", score: 1.0, ref: "Diretrizes SBD, 2023" },
            { item: "Questiona ativamente sobre antecedentes familiares de DM e complicações cardiovasculares.", score: 0.5, ref: "Diretrizes SBD, 2023" },
            { item: "Questiona sobre hábitos de vida, focando na alimentação e sedentarismo.", score: 0.5, ref: "Diretrizes SBD, 2023" }
          ]
        },
        {
          h: "BLOCO 3 — EXAME FÍSICO",
          items: [
            { item: "Solicita e interpreta o IMC, classificando o paciente como obeso.", score: 0.5, ref: "Semiologia Médica / MS" },
            { item: "Solicita avaliação da pele e identifica/verbaliza a acantose nigricans como sinal de resistência insulínica.", score: 1.0, ref: "Diretrizes SBD, 2023" },
            { item: "Solicita avaliação da Pressão Arterial (constatando nível limítrofe/hipertensão leve).", score: 0.5, ref: "Diretrizes SBH, 2020" }
          ]
        },
        {
          h: "BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO",
          items: [
            { item: "Solicita Glicemia Capilar (teste rápido/ponta de dedo) na própria consulta.", score: 1.0, ref: "Diretrizes SBD, 2023" },
            { item: "Comunica ao paciente o diagnóstico de Diabetes Mellitus de forma clara (glicemia > 200 + sintomas clássicos).", score: 1.0, ref: "Diretrizes SBD, 2023" },
            { item: "Solicita exames laboratoriais complementares para o retorno (HbA1c, Perfil lipídico, Função renal).", score: 1.0, ref: "Diretrizes SBD, 2023" }
          ]
        },
        {
          h: "BLOCO 5 — CONDUTA E ORIENTAÇÃO AO PACIENTE",
          items: [
            { item: "Prescreve Metformina (500 mg ou 850 mg) como terapia medicamentosa inicial.", score: 1.0, ref: "Diretrizes SBD, 2023" },
            { item: "Orienta Mudança de Estilo de Vida (MEV), com ênfase na suspensão do refrigerante regular e doces.", score: 0.5, ref: "Diretrizes SBD, 2023" },
            { item: "Responde à dúvida do paciente explicando que o tratamento inicial não requer insulina, tranquilizando-o.", score: 0.5, ref: "Manual de Comunicação, CFM" }
          ]
        }
      ]
    }
  }

];

