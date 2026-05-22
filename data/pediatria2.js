const pediatria2 = [
    {
      id: 11,
      title: "Bebê de 12 dias – resultado alterado no teste do pezinho",
      sub: "UBS – Atenção Primária",
      tema: "Pediatria",
      topic: "Triagem Neonatal / Hipotireoidismo Congênito",
      level: "moderado",
      cardAccent: "#4f9cf9",

        instA: {
            scenario: "Atenção Primária à Saúde, UBS. Consultório de puericultura, turno diurno.",
            patient: "B.S., 12 dias de vida, feminino. Mãe: 26 anos, auxiliar administrativa, sem comorbidades conhecidas. Parto vaginal a termo, sem intercorrências referidas.",
            complaint: "Mãe comparece à primeira consulta de puericultura e menciona que 'fizeram uns testes no hospital antes de sair, mas não me explicaram direito o que eram'. Traz a caderneta da criança.",
            tasks: [
                "Apresente-se à mãe e estabeleça vínculo antes de iniciar o atendimento.",
                "Verifique na caderneta de saúde quais triagens neonatais foram realizadas e identifique pendências ou alterações.",
                "Explique à mãe o que é cada triagem neonatal, para que serve e o que ocorre se não for realizada.",
                "Solicite o exame físico pertinente e interprete os achados encontrados.",
                "Defina a conduta adequada diante dos resultados e dos achados clínicos.",
                "Oriente a mãe sobre o seguimento e os próximos passos."
            ]
        },

        instB: {
            vitals: {
            PA: null,
            FC: "134 bpm",
            FR: "42 irpm",
            Tax: "36,8°C",
            Peso: "3.600 g",
            Altura: "50 cm",
            IMC: null
            },
            physicalGeneral: "Regular estado geral para a situação. Ativa ao estímulo, porém com resposta diminuída. Rósea, hidratada, anictérica ao exame inicial. Choro fraco.",
            physicalSeg: [
                "NEUROLÓGICO: Hipotonia leve; reflexos primitivos (Moro, preensão palmar, sucção) presentes, porém com intensidade levemente diminuída.",
                "FACE: Fácies mixedematosa leve; macroglossia discreta; choro rouco.",
                "FONTANELAS: Bregmática abaulada (+); lambdoide normal.",
                "CARDIOVASCULAR: RCR 2T, bulhas normofonéticas, sem sopros; FC 134 bpm.",
                "RESPIRATÓRIO: MV presente bilateralmente, sem ruídos adventícios; FR 42 irpm.",
                "ABDOME: Hérnia umbilical (+); fígado e baço não palpáveis.",
                "PELE: Ressecada, com leve mottling; lanugo em dorso."
            ],
            labs: [
            { test: "TSH (papel-filtro – teste do pezinho)", val: "Elevado – encaminhado para confirmação", ref: "< 10 mUI/L", alt: true },
            { test: "TSH sérico", val: "98 mUI/L", ref: "0,5–5,0 mUI/L", alt: true },
            { test: "T4 livre sérico", val: "0,4 ng/dL", ref: "0,8–2,0 ng/dL", alt: true }
            ],
            image: null,
            note: "Entregar a caderneta de saúde (impresso com triagens neonatais) ao início da estação. Entregar o impresso de exame físico somente se o candidato solicitar verbalmente o exame físico. Entregar os resultados laboratoriais de TSH e T4 livre séricos somente se o candidato solicitá-los especificamente (não entregar apenas pela solicitação do 'teste do pezinho' – o papel-filtro já consta na caderneta).",
            patientProfile: "Beatriz S., 12 dias de vida, feminino. Mãe: Camila S., 26 anos, auxiliar administrativa, casada. Parto vaginal a termo (39 semanas), sem intercorrências. Aleitamento materno exclusivo em curso, porém com dificuldade – bebê mama pouco e dorme muito.",
            script: [
            { trigger: "Abertura / queixa principal", speech: "Boa tarde, doutor(a). Vim fazer a consultinha da Beatriz. Ela nasceu bem, mas lá no hospital fizeram uns testes e um deles deu alguma coisa errada. Ninguém me explicou direito. Fiquei preocupada." },
            { trigger: "Sobre o teste do pezinho", speech: "Falaram que o resultado de um dos testes deu alterado, que era no sangue do calcanhar. Deram um papel para eu vir cá, mas não me disseram o que era." },
            { trigger: "Sobre amamentação", speech: "Eu tô amamentando, mas ela mama pouco. Fica dormindo na hora de mamar, tenho que ficar acordando ela. Às vezes fico preocupada que ela não tá comendo o suficiente." },
            { trigger: "Sobre o choro da bebê", speech: "O choro dela é meio fraquinho, né? Diferente do que eu esperava. Às vezes parece rouco." },
            { trigger: "Sobre o umbigo", speech: "Ah, o umbigo dela é estufado assim desde que nasceu. É normal?" },
            { trigger: "Sobre a linguinha", speech: "Ah, esse teste da linguinha… eles falaram que iam fazer antes de eu sair, mas não fizeram não. Ficou pra fazer aqui." },
            { trigger: "Pergunta ativa – diagnóstico", speech: "O que é isso que deu errado no teste, doutor(a)? É grave?" },
            { trigger: "Pergunta ativa – tratamento", speech: "Ela vai precisar tomar remédio para sempre? Tem cura?" },
            { trigger: "Pergunta ativa – amamentação", speech: "Posso continuar amamentando mesmo com o remédio?" },
            { trigger: "Pergunta ativa – desenvolvimento", speech: "Isso vai afetar o desenvolvimento dela? Ela vai ser normal?" }
            ],
            hiddenInfo: [
            "A mãe não sabe informar se fez todas as sorologias do pré-natal – só revela se o candidato perguntar especificamente sobre exames do pré-natal: 'Fiz o pré-natal, mas não lembro de todos os exames. Acho que fiz tudo que mandaram.'",
            "A bebê ainda não realizou o teste da linguinha – só revela se o candidato perguntar especificamente sobre esse teste: 'Eles falaram que iam fazer, mas quando fui embora do hospital não tinham feito.'"
            ],
            actorBehavior: "Mãe ansiosa e amorosa, visivelmente preocupada com o resultado alterado do teste. Colaborativa e receptiva às explicações. Demonstra insegurança sobre a amamentação. Responde prontamente às perguntas, mas não oferece informações espontaneamente além das mencionadas na abertura. Reage com alívio visível quando o médico explica com clareza. Se o candidato não se apresentar ou não explicar o que vai fazer, permanece tensa e quieta."
        },

        instC: {
            diagnosis: "Hipotireoidismo congênito primário detectado pelo Programa Nacional de Triagem Neonatal (PNTN). Teste do pezinho com TSH elevado confirmado por TSH sérico 98 mUI/L e T4 livre baixo (0,4 ng/dL). Achados clínicos compatíveis: macroglossia, hipotonia, fontanela abaulada, hérnia umbilical, choro rouco, sonolência excessiva.",
            differentials: [
            "Hipotireoidismo transitório neonatal – TSH elevado transitório, mais comum em prematuros ou após exposição a iodo; excluído pela clínica sugestiva e pela confirmação sérica com T4 baixo.",
            "Síndrome de Down – hipotonia, macroglossia e fontanelas abauladas podem mimetizar; excluído pela ausência de dismorfias típicas e confirmado pelo perfil tireoidiano.",
            "Infecção congênita (TORSCH) – pode causar hipotonia e alterações sistêmicas; excluído pela ausência de petéquias, hepatoesplenomegalia e sorologias negativas no pré-natal."
            ],
            context: "Lactente feminina de 12 dias com hipotireoidismo congênito detectado pelo teste do pezinho, confirmado laboratorialmente. Apresenta achados clínicos clássicos da doença. O diagnóstico e o tratamento precoces são essenciais para prevenir déficit intelectual irreversível.",
            justify: "TSH sérico 98 mUI/L (VR < 5,0 mUI/L) com T4 livre 0,4 ng/dL (VR 0,8–2,0 ng/dL) confirmam hipotireoidismo congênito primário. A clínica reforça: macroglossia, hipotonia, fontanela bregmática abaulada, hérnia umbilical, choro rouco e sonolência excessiva são sinais clássicos. O teste do pezinho com TSH elevado no papel-filtro foi a triagem positiva que motivou a consulta.",
            expectedAnamnesis: [
            "Identificar qual teste do pezinho alterou e verificar na caderneta todos os 5 testes do PNTN.",
            "Investigar se o teste da linguinha foi realizado (pendente).",
            "Perguntar sobre amamentação: frequência, duração, ganho de peso.",
            "Investigar comportamento da bebê: sonolência, choro, atividade.",
            "Perguntar sobre pré-natal: sorologias, intercorrências, uso de medicamentos pela mãe (amiodarona, propiltiouracil).",
            "Investigar histórico familiar de doença tireoidiana.",
            "Perguntar sobre icterícia prolongada (dado relevante mesmo que não presente)."
            ],
            expectedPhysical: [
            "Sinais vitais: aferir FC (taquicardia ou bradicardia), Tax, peso e comparar com peso ao nascer.",
            "Inspeção: fácies (mixedematosa), coloração (palidez, icterícia), edema, choro (rouco?).",
            "Palpação: fontanelas (abaulamento), abdome (hérnia umbilical, visceromegalias), tônus muscular.",
            "Neurológico: reflexos primitivos, tônus, nível de alerta.",
            "Tireoide: palpação do pescoço (bócio – ausente nesse caso).",
            "Manobra específica: avaliação do reflexo de sucção e preensão palmar (diminuídos)."
            ],
            expectedExams: [
            { exam: "TSH sérico", justify: "Confirmar resultado do papel-filtro", expected: "Elevado: 98 mUI/L" },
            { exam: "T4 livre sérico", justify: "Confirmar hipofunção tireoidiana", expected: "Baixo: 0,4 ng/dL" },
            { exam: "Hemograma", justify: "Investigar anemia associada", expected: "Pode mostrar anemia leve" },
            { exam: "Ultrassom de tireoide", justify: "Identificar agenesia, hipoplasia ou ectopia – realizado pelo especialista", expected: "Solicitado pelo endocrinologista pediátrico" }
            ],
            expectedConduct: [
            "Farmacológica: Levotiroxina sódica 10–15 mcg/kg/dia VO, dose única diária em jejum – iniciar imediatamente após confirmação laboratorial (idealmente até o 14º dia de vida). Dose calculada para 3,6 kg: 36–54 mcg/dia – iniciar com 37,5 mcg/dia (comprimido fracionado). Ajuste conforme TSH e T4L de controle. (Referência: MS/PNTN 2023; SBP 2021)",
            "Não farmacológica: Manter aleitamento materno exclusivo; orientar administração do medicamento 30 minutos antes da mamada; não administrar junto com fórmulas de soja (reduzem absorção).",
            "Encaminhamento: Endocrinologia pediátrica com urgência (dentro de 7 dias).",
            "Orientações ao paciente: Explicar à mãe que o hipotireoidismo congênito é tratável; que o remédio precisará ser usado por toda a vida (na maioria dos casos); que o tratamento precoce previne atraso no desenvolvimento; que o leite materno pode e deve ser mantido; administrar o remédio diluído em pequena quantidade de água ou leite materno (não diluir em mamadeira cheia).",
            "Seguimento: TSH e T4 livre séricos a cada 2 semanas no primeiro mês; retorno em 15 dias; encaminhamento ao endocrinologista pediátrico com urgência. Agendar avaliação do teste da linguinha (frenilho lingual)."
            ],
            expectedCommunication: [
            "Apresentação: Apresentar-se pelo nome, cargo, cumprimentar a mãe e a bebê, criar vínculo antes de iniciar perguntas.",
            "Comunicação do diagnóstico: Explicar em linguagem acessível que o teste detectou que a glândula tireoide da bebê não está funcionando bem; que isso é tratável com um remédio simples; que quanto mais cedo tratar, melhor para o desenvolvimento da criança.",
            "Escuta ativa: Validar a preocupação da mãe; responder com clareza às perguntas sobre tratamento, amamentação e desenvolvimento; evitar termos técnicos sem explicação; perguntar se a mãe ficou com alguma dúvida ao final."
            ],
            criticalErrors: [
            "Não reconhecer o TSH alterado no papel-filtro como urgência diagnóstica que exige confirmação imediata.",
            "Não solicitar confirmação laboratorial (TSH e T4 livre séricos) antes de iniciar o tratamento.",
            "Tranquilizar a mãe sem investigar os achados clínicos sugestivos (macroglossia, hipotonia, fontanela abaulada).",
            "Não indicar levotiroxina mesmo com TSH sérico e T4 livre confirmando hipotireoidismo.",
            "Não encaminhar para endocrinologia pediátrica com urgência.",
            "Orientar suspensão do aleitamento materno (conduta incorreta – manter AME)."
            ]
        },

        instD: {
            title: "CHECKLIST – TRIAGEM NEONATAL E HIPOTIREOIDISMO CONGÊNITO",
            sections: [
            {
                h: "BLOCO 1 – COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
                items: [
                { item: "Apresentou-se pelo nome e função à mãe antes de iniciar o atendimento.", score: 0.5, ref: "CFM 2232/2019; MS – Humanização no SUS" },
                { item: "Explicou à mãe o que iria fazer durante a consulta antes de iniciar.", score: 0.5, ref: "MS – Política Nacional de Humanização, 2013" },
                { item: "Perguntou à mãe como ela estava se sentindo e como estava sendo cuidar da bebê.", score: 0.5, ref: "SBP – Puericultura, 2022" }
                ]
            },
            {
                h: "BLOCO 2 – ANAMNESE",
                items: [
                { item: "Verificou na caderneta quais triagens neonatais foram realizadas e identificou o TSH alterado.", score: 1.0, ref: "MS – PNTN, 2023" },
                { item: "Identificou que o teste da linguinha não foi realizado (pendente).", score: 0.5, ref: "MS – PNTN, 2023" },
                { item: "Perguntou sobre amamentação: frequência, duração, comportamento da bebê ao mamar.", score: 0.5, ref: "SBP – Aleitamento Materno, 2021" },
                { item: "Investigou comportamento da bebê: sonolência, choro, atividade.", score: 0.5, ref: "SBP – Triagem Neonatal, 2021" },
                { item: "Perguntou sobre histórico familiar de doença tireoidiana.", score: 0.3, ref: "SBP – Triagem Neonatal, 2021" }
                ]
            },
            {
                h: "BLOCO 3 – EXAME FÍSICO",
                items: [
                { item: "Solicitou o exame físico verbalmente e avaliou peso com comparação ao nascimento.", score: 0.5, ref: "SBP – Puericultura, 2022" },
                { item: "Identificou pelo menos dois achados sugestivos de hipotireoidismo congênito (macroglossia, hipotonia, fontanela abaulada, hérnia umbilical, choro rouco).", score: 1.0, ref: "SBP – Triagem Neonatal, 2021; MS – PNTN, 2023" },
                { item: "Avaliou reflexos primitivos e tônus muscular.", score: 0.5, ref: "SBP – Neurologia Pediátrica, 2021" }
                ]
            },
            {
                h: "BLOCO 4 – RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO",
                items: [
                { item: "Formulou hipótese de hipotireoidismo congênito com base no TSH alterado e nos achados clínicos.", score: 1.0, ref: "MS – PNTN, 2023" },
                { item: "Solicitou TSH sérico e T4 livre para confirmação diagnóstica.", score: 1.0, ref: "MS – PNTN, 2023; SBP, 2021" },
                { item: "Explicou os 5 testes do PNTN à mãe em linguagem acessível (pezinho, orelhinha, olhinho, coraçãozinho, linguinha).", score: 0.5, ref: "MS – PNTN, 2023" }
                ]
            },
            {
                h: "BLOCO 5 – CONDUTA E ORIENTAÇÃO AO PACIENTE",
                items: [
                { item: "Indicou levotiroxina na dose correta (10–15 mcg/kg/dia VO) e orientou administração antes da mamada.", score: 1.0, ref: "MS – PNTN, 2023; SBP – Endocrinologia Pediátrica, 2022" },
                { item: "Encaminhou para endocrinologia pediátrica com urgência.", score: 0.5, ref: "MS – PNTN, 2023" },
                { item: "Orientou manutenção do aleitamento materno exclusivo.", score: 0.3, ref: "SBP – Aleitamento Materno, 2021" },
                { item: "Agendou retorno em 15 dias com pedido de TSH e T4 livre de controle.", score: 0.3, ref: "MS – PNTN, 2023" },
                { item: "Perguntou à mãe se ficou com dúvidas e verificou compreensão das orientações.", score: 0.3, ref: "MS – Política Nacional de Humanização, 2013" }
                ]
            }
        ]
     }
    },

    // Caso 12

    {
  id: 12,
  title: "Recém-nascido com icterícia, manchas na pele e barriga distendida",
  sub: "Maternidade — Alojamento Conjunto",
  tema: "Pediatria",
  topic: "Infecções Congênitas / Síndrome da Rubéola Congênita",
  level: "complexo",
  cardAccent: "#e57373",

  instA: {
    scenario: "Nível Hospitalar — Maternidade. Alojamento conjunto, turno da manhã. A enfermeira solicita avaliação de RN com 5 dias de vida por apresentar icterícia, petéquias e abdome distendido.",
    patient: "RN masculino, 5 dias de vida. Mãe: J.C., 24 anos, auxiliar de serviços gerais, pré-natal irregular (3 consultas). Parto vaginal a termo.",
    complaint: "Enfermeira refere: 'O bebê está amarelado, com manchinhas vermelhas no corpo e a barriga dele parece maior do que deveria.'",
    tasks: [
      "Realize a anamnese com a mãe com foco em pré-natal, sorologias e infecções durante a gestação.",
      "Solicite o exame físico neonatal completo e interprete os achados.",
      "Formule a hipótese diagnóstica de infecção congênita e identifique o agente mais provável.",
      "Solicite os exames complementares pertinentes para confirmação diagnóstica.",
      "Defina a conduta terapêutica e os encaminhamentos necessários.",
      "Comunique à mãe o diagnóstico em linguagem acessível e oriente sobre notificação compulsória."
    ]
  },

  instB: {
    vitals: {
      PA: null,
      FC: "158 bpm",
      FR: "52 irpm",
      Tax: "37,2°C",
      Peso: "2.800 g",
      Altura: "46 cm",
      IMC: null
    },
    physicalGeneral: "Regular estado geral. Hipoativo, pouco responsivo ao estímulo. Ictérico (zona III–IV de Kramer). Petéquias difusas em tronco e membros. Choro fraco. Palidez cutâneo-mucosa leve.",
    physicalSeg: [
      "PELE: Petéquias difusas em tronco e membros; icterícia zona III–IV; sem vesículas.",
      "OLHOS: Catarata bilateral ao reflexo vermelho (reflexo vermelho ausente bilateralmente).",
      "CARDIOVASCULAR: Sopro sistólico 2+/6+ em foco pulmonar; RCR 2T.",
      "RESPIRATÓRIO: MV presente bilateralmente, sem ruídos adventícios.",
      "ABDOME: Hepatomegalia (+3 cm abaixo do RCD); esplenomegalia (+2 cm); abdome distendido.",
      "NEUROLÓGICO: Hipotonia leve; fontanela normotensa; reflexos primitivos presentes, diminuídos.",
      "PESO: 2.800 g (nasceu 2.600 g — RCIU com ganho de 200 g em 5 dias, dentro do esperado para o contexto)."
    ],
    labs: [
      { test: "Plaquetas", val: "42.000/mm³", ref: "150.000–400.000/mm³", alt: true },
      { test: "Hemoglobina", val: "10 g/dL", ref: "14–20 g/dL (RN)", alt: true },
      { test: "Bilirrubina Total", val: "12 mg/dL", ref: "< 12 mg/dL (5º dia)", alt: true },
      { test: "Bilirrubina Indireta", val: "8 mg/dL", ref: "Predominante indireta normal", alt: false },
      { test: "Bilirrubina Direta", val: "4 mg/dL", ref: "< 1 mg/dL", alt: true },
      { test: "TGO", val: "3× o limite superior", ref: "Até 40 U/L", alt: true },
      { test: "TGP", val: "3× o limite superior", ref: "Até 40 U/L", alt: true },
      { test: "IgM anti-rubéola (RN)", val: "Positivo", ref: "Negativo", alt: true },
      { test: "Anti-CMV IgM (RN)", val: "Negativo", ref: "Negativo", alt: false },
      { test: "VDRL materno", val: "Não realizado", ref: "Não reagente", alt: true },
      { test: "PCR toxoplasma (RN)", val: "Negativo", ref: "Negativo", alt: false }
    ],
    image: "Radiografia de tórax: Cardiomegalia leve. Aumento da trama vascular pulmonar. Arco pulmonar proeminente — achados compatíveis com cardiopatia congênita (provável estenose de artéria pulmonar). Ultrassom de crânio (se solicitado): Sem hidrocefalia, sem calcificações intracranianas.",
    note: "Entregar o impresso de exame físico ao início. Entregar os exames laboratoriais somente se solicitados verbalmente pelo candidato. Entregar o laudo de imagem somente se radiografia de tórax ou USG de crânio forem solicitados explicitamente. Se o candidato solicitar VDRL da mãe, informar que não foi realizado durante o pré-natal (pré-natal irregular).",
    patientProfile: "RN: Joaquim C., 5 dias de vida, masculino. Mãe: Joana C., 24 anos, auxiliar de serviços gerais, solteira. Pré-natal irregular (apenas 3 consultas). Parto vaginal a termo, sem intercorrências referidas. Mora com a mãe e a avó materna. Baixa escolaridade.",
    script: [
      { trigger: "Abertura / queixa principal", speech: "Doutor(a), tô preocupada com meu filho. Ele tá amarelado, com umas manchinhas vermelhas no corpo e a barriga parece maior. A enfermeira mandou chamar o médico." },
      { trigger: "Sobre o pré-natal", speech: "Fiz só três consultas. Não deu pra fazer mais, precisava trabalhar. O médico falou que eu tive uma infecção durante a gravidez, uma virose, mas não me explicou direito." },
      { trigger: "Sobre sorologias (se perguntado)", speech: "Fiz alguns exames de sangue nas consultas, mas não sei dizer quais. Não tenho o papel aqui." },
      { trigger: "Sobre vacinação materna (se perguntado)", speech: "Não lembro se tomei vacina contra rubéola. Acho que não." },
      { trigger: "Sobre febre na gestação (se perguntado)", speech: "Tive uma febre com manchinhas vermelhas pelo corpo lá no segundo mês de gravidez. Durou uns dias e passou." },
      { trigger: "Sobre o bebê", speech: "Ele tá meio paradão, não chora muito. Ontem percebi que ele não tava olhando direito pra minha cara." },
      { trigger: "Pergunta ativa — diagnóstico", speech: "O que ele tem, doutor(a)? É grave?" },
      { trigger: "Pergunta ativa — transmissão", speech: "Fui eu que passei essa doença pra ele?" },
      { trigger: "Pergunta ativa — cura", speech: "Tem cura? Ele vai ficar bem?" },
      { trigger: "Pergunta ativa — notificação", speech: "Precisa avisar alguém? A prefeitura ou alguma coisa assim?" }
    ],
    hiddenInfo: [
      "A mãe teve exantema febril (febre com manchas vermelhas pelo corpo) no segundo mês de gestação — só revela se o candidato perguntar especificamente sobre doenças ou infecções durante a gravidez.",
      "A mãe não sabe se foi vacinada contra rubéola — só revela se perguntada diretamente sobre vacinação materna."
    ],
    actorBehavior: "Mãe jovem, assustada e visivelmente ansiosa. Escolaridade baixa, dificuldade com termos médicos — responde melhor a perguntas simples e diretas. Colaborativa quando abordada com empatia. Tende a se calar se o candidato usar linguagem técnica sem explicar. Demonstra culpa e angústia ao saber que pode ter transmitido a infecção ao filho. Reage com alívio relativo quando o médico explica com clareza e sem julgamentos."
  },

  instC: {
    diagnosis: "Síndrome da Rubéola Congênita. Tríade clássica: catarata bilateral + cardiopatia congênita (provável estenose de artéria pulmonar) + surdez neurossensorial (a investigar por PEATE). Achados adicionais: petéquias difusas ('blueberry muffin'), hepatoesplenomegalia, RCIU, trombocitopenia, icterícia colestática, elevação de transaminases. IgM anti-rubéola positivo no RN confirma a infecção congênita. Mãe com exantema febril no 1º trimestre, não vacinada.",
    differentials: [
      "Citomegalovirose congênita (CMV) — petéquias, hepatoesplenomegalia e trombocitopenia semelhantes; entretanto, calcificações intracranianas periventriculares e microcefalia são mais típicas; anti-CMV IgM negativo exclui nesse caso.",
      "Toxoplasmose congênita — pode causar hepatoesplenomegalia e trombocitopenia; calcificações cerebrais difusas e hidrocefalia são mais típicas; PCR toxoplasma negativo exclui.",
      "Sífilis congênita — hepatoesplenomegalia, icterícia e petéquias semelhantes; VDRL materno não realizado — deve ser investigado para exclusão concomitante; rinite sifilítica e periostite são achados mais específicos."
    ],
    context: "RN de 5 dias com Síndrome da Rubéola Congênita confirmada por IgM anti-rubéola positivo. Mãe não vacinada com exantema febril no 1º trimestre. Tríade clássica presente (catarata + cardiopatia + surdez a confirmar). Sem tratamento antiviral específico disponível — manejo multidisciplinar e notificação compulsória imediata são obrigatórios.",
    justify: "IgM anti-rubéola positivo no RN confirma infecção congênita ativa (IgM não atravessa a barreira placentária — sua presença no RN indica produção própria). A tríade catarata bilateral + sopro em foco pulmonar (estenose de AP) + investigação pendente de surdez, associada a petéquias ('blueberry muffin'), hepatoesplenomegalia, trombocitopenia e elevação de transaminases, é altamente específica para Síndrome da Rubéola Congênita. O contexto epidemiológico reforça: mãe não vacinada, exantema febril no 1º trimestre.",
    expectedAnamnesis: [
      "Perguntar sobre pré-natal: número de consultas, sorologias realizadas.",
      "Investigar infecções durante a gestação: febre, exantema, época gestacional.",
      "Perguntar sobre vacinação materna contra rubéola.",
      "Investigar uso de medicamentos na gestação.",
      "Perguntar sobre VDRL materno (para exclusão de sífilis concomitante).",
      "Investigar comportamento do RN: choro, sucção, movimentos oculares.",
      "Perguntar sobre audição do RN: resposta a sons (impossível avaliar clinicamente com 5 dias)."
    ],
    expectedPhysical: [
      "Sinais vitais: FC, FR, Tax, peso e comparação ao nascimento (RCIU).",
      "Inspeção: icterícia (zona de Kramer), petéquias, coloração, atividade.",
      "Olhos: reflexo vermelho (ausente = catarata).",
      "Ausculta cardíaca: sopro (EP).",
      "Abdome: hepatoesplenomegalia.",
      "Neurológico: tônus, fontanelas, reflexos primitivos.",
      "Manobra específica: reflexo vermelho bilateral com oftalmoscópio ou lanterna — ausência indica catarata."
    ],
    expectedExams: [
      { exam: "IgM anti-rubéola (RN)", justify: "Confirmar infecção congênita por rubéola", expected: "Positivo" },
      { exam: "VDRL (mãe e RN)", justify: "Excluir sífilis congênita concomitante", expected: "Não realizado na mãe — solicitar" },
      { exam: "Anti-CMV IgM", justify: "Excluir CMV congênito", expected: "Negativo" },
      { exam: "PCR toxoplasma", justify: "Excluir toxoplasmose congênita", expected: "Negativo" },
      { exam: "Hemograma", justify: "Avaliar trombocitopenia e anemia", expected: "Plaquetas 42.000; Hb 10" },
      { exam: "TGO/TGP", justify: "Avaliar hepatite congênita", expected: "Elevadas (3×)" },
      { exam: "Bilirrubinas", justify: "Avaliar icterícia colestática", expected: "BD elevada" },
      { exam: "PEATE (audiometria neonatal)", justify: "Investigar surdez neurossensorial (componente da tríade)", expected: "Aguardado — parte da tríade" },
      { exam: "Ecocardiograma", justify: "Caracterizar cardiopatia congênita", expected: "Estenose de artéria pulmonar" },
      { exam: "USG de crânio", justify: "Afastar calcificações intracranianas", expected: "Sem calcificações" }
    ],
    expectedConduct: [
      "Farmacológica: Não há antiviral específico para rubéola congênita. Tratamento de suporte: fototerapia para icterícia (bilirrubina total 12 mg/dL — avaliar necessidade conforme curva de Bhutani); suporte nutricional; não há indicação de gamaglobulina ou antiviral.",
      "Não farmacológica: Isolamento de contato e gotícula enquanto hospitalizado (RN com rubéola congênita pode excretar o vírus por meses); suporte nutricional; monitorização de sinais vitais.",
      "Encaminhamento: Cardiologia pediátrica (cardiopatia congênita — estenose de AP); Oftalmologia pediátrica (catarata bilateral — cirurgia precoce necessária para prevenir ambliopia); Audiologia (PEATE para investigar surdez); Neurologia pediátrica (acompanhamento do desenvolvimento).",
      "Orientações ao paciente: Explicar à mãe que a infecção foi adquirida durante a gestação; que não há tratamento para a rubéola em si, mas que as sequelas serão tratadas por especialistas; que o bebê precisará de acompanhamento prolongado; que a própria mãe deve ser vacinada após o período pós-parto (exceto durante gestação).",
      "Seguimento: Notificação compulsória imediata à vigilância epidemiológica municipal; acompanhamento multidisciplinar ambulatorial; vacinação da mãe com tríplice viral após alta."
    ],
    expectedCommunication: [
      "Apresentação: Apresentar-se pelo nome, sentar-se ao nível da mãe, criar vínculo sem julgamentos sobre o pré-natal irregular.",
      "Comunicação do diagnóstico: Explicar em linguagem simples que o bebê foi infectado por um vírus durante a gestação chamado rubéola; que isso causou algumas alterações nos olhos, no coração e possivelmente na audição; que existem tratamentos para cada problema; que será necessário apoio de vários médicos especialistas.",
      "Escuta ativa: Validar o sentimento de culpa da mãe sem reforçá-lo; explicar que a vacinação poderia ter prevenido, mas sem tom acusatório; perguntar se a mãe tem rede de apoio (companheiro, família)."
    ],
    criticalErrors: [
      "Não reconhecer a tríade clássica da Síndrome da Rubéola Congênita (catarata + cardiopatia + surdez).",
      "Não solicitar VDRL materno para exclusão de sífilis congênita concomitante.",
      "Não mencionar a notificação compulsória imediata à vigilância epidemiológica.",
      "Não encaminhar para oftalmologia (catarata bilateral exige cirurgia precoce para prevenir ambliopia irreversível).",
      "Não encaminhar para cardiologia pediátrica diante do sopro sugestivo de cardiopatia congênita.",
      "Indicar antiviral para rubéola (não há — conduta incorreta que demonstra erro de raciocínio)."
    ]
  },

  instD: {
    title: "CHECKLIST — INFECÇÃO CONGÊNITA EM RECÉM-NASCIDO",
    sections: [
      {
        h: "BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
        items: [
          { item: "Apresentou-se pelo nome e função à mãe antes de iniciar.", score: 0.5, ref: "CFM 2232/2019; MS — Humanização no SUS" },
          { item: "Abordou a mãe sem julgamentos sobre o pré-natal irregular, demonstrando empatia.", score: 0.5, ref: "MS — Política Nacional de Humanização, 2013" },
          { item: "Perguntou como a mãe estava se sentindo e se tinha rede de apoio.", score: 0.3, ref: "MS — Atenção à Saúde da Mulher, 2022" }
        ]
      },
      {
        h: "BLOCO 2 — ANAMNESE",
        items: [
          { item: "Investigou pré-natal: número de consultas, sorologias realizadas.", score: 0.5, ref: "MS — Atenção ao Pré-natal de Baixo Risco, 2012" },
          { item: "Perguntou especificamente sobre infecções durante a gestação (febre, exantema, época).", score: 1.0, ref: "MS — Guia de Vigilância em Saúde, 2022" },
          { item: "Investigou vacinação materna contra rubéola.", score: 0.5, ref: "MS — Calendário Vacinal, 2023" },
          { item: "Perguntou sobre VDRL materno para exclusão de sífilis concomitante.", score: 0.5, ref: "MS — PCDT Sífilis Congênita, 2022" }
        ]
      },
      {
        h: "BLOCO 3 — EXAME FÍSICO",
        items: [
          { item: "Solicitou exame físico e identificou petéquias difusas ('blueberry muffin').", score: 0.5, ref: "SBP — Infecções Congênitas, 2021" },
          { item: "Avaliou o reflexo vermelho e identificou sua ausência bilateral (catarata).", score: 1.0, ref: "SBP — Triagem Neonatal, 2021" },
          { item: "Identificou sopro cardíaco e hepatoesplenomegalia ao exame.", score: 0.5, ref: "SBP — Infecções Congênitas, 2021" }
        ]
      },
      {
        h: "BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO",
        items: [
          { item: "Formulou diagnóstico de Síndrome da Rubéola Congênita com base nos achados clínicos e laboratoriais.", score: 1.0, ref: "MS — Guia de Vigilância em Saúde, 2022" },
          { item: "Solicitou IgM anti-rubéola no RN para confirmação diagnóstica.", score: 0.5, ref: "SBP — Infecções Congênitas, 2021" },
          { item: "Solicitou VDRL (mãe e RN) para exclusão de sífilis congênita.", score: 0.5, ref: "MS — PCDT Sífilis Congênita, 2022" },
          { item: "Solicitou ecocardiograma e PEATE para investigação das sequelas.", score: 0.5, ref: "SBP — Infecções Congênitas, 2021" }
        ]
      },
      {
        h: "BLOCO 5 — CONDUTA E ORIENTAÇÃO AO PACIENTE",
        items: [
          { item: "Indicou encaminhamentos multidisciplinares: oftalmologia, cardiologia pediátrica e audiologia.", score: 1.0, ref: "SBP — Infecções Congênitas, 2021" },
          { item: "Mencionou notificação compulsória imediata à vigilância epidemiológica.", score: 1.0, ref: "MS — Guia de Vigilância em Saúde, 2022" },
          { item: "Explicou à mãe o diagnóstico em linguagem acessível, sem julgamentos.", score: 0.5, ref: "MS — Política Nacional de Humanização, 2013" },
          { item: "Orientou sobre isolamento do RN enquanto hospitalizado.", score: 0.3, ref: "MS — Guia de Vigilância em Saúde, 2022" },
          { item: "Orientou vacinação da mãe com tríplice viral após alta (não durante gestação).", score: 0.4, ref: "MS — Calendário Vacinal, 2023" }
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
  tema: "Pediatria",
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
  tema: "Pediatria",
  topic: "Coqueluche Grave em Lactente / Antibioticoterapia e Notificação",
  level: "complexo",
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
  tema: "Pediatria",
  topic: "Febre Reumática / Critérios de Jones / Profilaxia Secundária",
  level: "complexo",
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
  tema: "Pediatria",
  topic: "Anorexia Nervosa / Saúde do Adolescente / HEEADSSS",
  level: "complexo",
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

// Estação 17

{
  id: 17,
  title: "Bebê de 6 meses com testículo ausente e dúvida sobre a pelinha do pênis",
  sub: "UBS — Atenção Primária",
  tema: "Pediatria",
  topic: "Criptorquidia / Fimose Fisiológica / Urologia Pediátrica",
  level: "moderado",
  cardAccent: "#1565c0",

  instA: {
    scenario: "Atenção Primária — UBS. Consultório de puericultura, turno da manhã.",
    patient: "E.F., 6 meses de vida, masculino. Mãe: 30 anos, professora. Parto cesáreo a termo, sem intercorrências. Desenvolvimento neuropsicomotor adequado para a idade.",
    complaint: "Mãe refere: 'O testículo direito do meu filho nunca apareceu na bolsinha. Às vezes parece que sobe. Também tenho dúvida sobre a pelinha do pênis, que não abre.'",
    tasks: [
      "Realize a anamnese dirigida: quando foi notada a ausência do testículo, se sobe e desce, urina normal, antecedentes do parto.",
      "Solicite o exame físico da genitália e interprete os achados.",
      "Diferencie criptorquidia de testículo retrátil e de testículo ausente.",
      "Esclareça à mãe o que é fimose fisiológica e como diferenciá-la de fimose patológica.",
      "Defina a conduta correta para cada achado e os encaminhamentos necessários.",
      "Oriente a mãe sobre complicações da criptorquidia não tratada e sobre cuidados de higiene."
    ]
  },

  instB: {
    vitals: {
      PA: null,
      FC: "120 bpm",
      FR: "36 irpm",
      Tax: "36,7°C",
      Peso: "7.200 g",
      Altura: "67 cm",
      IMC: null
    },
    physicalGeneral: "Bom estado geral. Ativo, sorridente, interagindo com o ambiente. Bem nutrido, róseo, hidratado. Sem dismorfias. Desenvolvimento neuropsicomotor adequado para 6 meses (sustenta a cabeça, senta com apoio, pega objetos).",
    physicalSeg: [
      "GENITÁLIA MASCULINA — PÊNIS: Prepúcio não retrátil; glande não visível; sem hiperemia, sem edema, sem secreção; sem aderências inflamatórias; orifício prepucial pérvio (urina com jato normal).",
      "GENITÁLIA MASCULINA — TESTÍCULO ESQUERDO: Tópico em bolsa escrotal, de tamanho e consistência normais.",
      "GENITÁLIA MASCULINA — TESTÍCULO DIREITO: Não palpável em bolsa escrotal; palpado no canal inguinal direito, consistência normal; não desce espontaneamente para a bolsa escrotal mesmo com manobra suave; bolsa escrotal direita hipoplásica e vazia.",
      "REFLEXO CREMASTÉRICO: Presente bilateralmente.",
      "HÉRNIA INGUINAL: Não identificada à palpação."
    ],
    labs: [],
    image: null,
    note: "Entregar o impresso de exame físico da genitália somente se o candidato solicitar verbalmente o exame físico. Não há exames laboratoriais ou de imagem a entregar. Se o candidato solicitar USG inguino-escrotal, o avaliador deve anotar como conduta inapropriada para APS (classificado como INADEQUADO no PEP do Revalida 2024/2) e informar que não está disponível na UBS. Observar se o candidato orienta retração forçada do prepúcio — se orientar, pontuar como erro crítico.",
    patientProfile: "Eduardo F., 6 meses de vida, masculino. Mãe: Fernanda F., 30 anos, professora do ensino fundamental, casada. Parto cesáreo a termo (38 semanas), sem intercorrências. Amamentado exclusivamente até os 5 meses, introdução alimentar iniciada. Pai presente e participativo.",
    script: [
      { trigger: "Abertura", speech: "Doutor(a), meu filho tá bem, mas tenho duas dúvidas. Desde que ele nasceu, nunca vi o testículo direito na bolsa. E a pelinha do pênis não abre. Quero saber se é grave." },
      { trigger: "Sobre o testículo", speech: "Às vezes parece que aparece uma coisa na virilha quando ele chora ou toma banho frio. Mas na bolsa mesmo nunca vi." },
      { trigger: "Sobre a pelinha (fimose)", speech: "Tentei abrir um pouquinho pra limpar, mas não abriu. Forcei um pouquinho e ele ficou irritado. Fiz certo?" },
      { trigger: "Sobre urina", speech: "A urina dele é normal. Faz xixi com jato bom, sem dificuldade." },
      { trigger: "Sobre o parto", speech: "Nasceu a termo, cesárea programada. Não teve problema nenhum na hora de nascer." },
      { trigger: "Pergunta ativa — criptorquidia", speech: "Vai precisar operar? Quando?" },
      { trigger: "Pergunta ativa — fimose", speech: "Devo forçar a pelinha pra abrir? Minha sogra disse que tem que ir abrindo aos poucos." },
      { trigger: "Pergunta ativa — consequências", speech: "Se não tratar, pode causar problema no futuro?" },
      { trigger: "Pergunta ativa — encaminhamento", speech: "Quem vai cuidar disso? Precisa de especialista?" }
    ],
    hiddenInfo: [
      "A mãe já tentou retrair o prepúcio com força e o bebê ficou irritado — só revela em detalhes se o candidato perguntar especificamente sobre tentativas anteriores de abertura do prepúcio.",
      "O avô paterno teve câncer de testículo — só revela se o candidato perguntar especificamente sobre histórico familiar de problemas testiculares ou câncer."
    ],
    actorBehavior: "Mãe calma, organizada e bem informada. Fez pesquisas na internet antes da consulta e tem opiniões formadas (influência da sogra). Aceita bem as explicações técnicas quando bem fundamentadas, mas questiona se a orientação for diferente do que ouviu em casa. Não demonstra ansiedade excessiva. Colaborativa. Fica aliviada quando o médico explica com clareza."
  },

  instC: {
    diagnosis: "Criptorquidia direita (testículo palpável no canal inguinal, não retrátil, não desce espontaneamente) associada a fimose fisiológica. Conduta: encaminhamento para cirurgia pediátrica ou urologia pediátrica sem solicitar USG previamente (conforme PEP Revalida 2024/2). Fimose fisiológica: apenas cuidados de higiene, sem intervenção.",
    differentials: [
      "Testículo retrátil — desce para a bolsa escrotal com manobra manual e permanece; não há necessidade de cirurgia, apenas acompanhamento anual; diferenciado nesse caso pela impossibilidade de descer o testículo para a bolsa mesmo com manobra suave.",
      "Testículo ausente (anorquia ou agenesia testicular) — não palpável em nenhuma posição, inclusive no canal inguinal; diferenciado aqui porque o testículo direito é palpável no canal inguinal; anorquia verdadeira exigiria investigação hormonal (FSH, LH, testosterona após estimulação com hCG).",
      "Fimose patológica (BXO — balanite xerótica obliterante) — anel fibrótico brancacento, pele espessada, inflamação recorrente; ausente nesse caso (prepúcio elástico, sem alteração da pele, sem inflamação)."
    ],
    context: "Lactente masculino de 6 meses com criptorquidia direita (testículo palpável em canal inguinal, não retrátil) e fimose fisiológica. Após os 6 meses, a descida espontânea é improvável — encaminhamento para cirurgia pediátrica é indicado. Fimose fisiológica é normal até os 3–4 anos — conduta é apenas higiene adequada, sem intervenção.",
    justify: "Testículo direito palpável no canal inguinal, que não desce espontaneamente para a bolsa escrotal mesmo com manobra suave, bolsa escrotal direita hipoplásica e vazia — define criptorquidia direita. Descida espontânea após os 6 meses é improvável (ocorre principalmente nos primeiros 3 meses de vida). Prepúcio não retrátil, elástico, sem inflamação, sem aderências patológicas — define fimose fisiológica, normal nessa faixa etária. Reflexo cremastérico presente bilateralmente afasta testículo ausente do lado contralateral.",
    expectedAnamnesis: [
      "Quando foi notada a ausência do testículo na bolsa.",
      "Se o testículo já foi visto na bolsa em algum momento (determina se é retrátil).",
      "Características da urina: jato, frequência, dificuldade miccional.",
      "Antecedentes perinatais: parto, prematuridade (risco maior em prematuros).",
      "Histórico familiar: criptorquidia, câncer testicular.",
      "Tentativas anteriores de retrair o prepúcio."
    ],
    expectedPhysical: [
      "Exame da bolsa escrotal: presença/ausência de testículos, simetria, volume.",
      "Palpação do canal inguinal: localizar testículo não descido.",
      "Manobra de Shabat: tentar descer o testículo manualmente para a bolsa escrotal — se permanecer = retrátil; se retornar ao canal = criptorquídico.",
      "Exame do pênis: prepúcio (retrátil ou não), orifício prepucial, sinais de inflamação.",
      "Avaliação do jato urinário (indireta pela história).",
      "Pesquisa de hérnia inguinal associada (presente em 90% das criptorquidias)."
    ],
    expectedExams: [
      { exam: "Nenhum exame indicado antes do encaminhamento (APS)", justify: "Criptorquidia com testículo palpável no canal inguinal não requer imagem para encaminhar — USG não muda a conduta inicial", expected: "—" },
      { exam: "USG inguino-escrotal", justify: "CONTRAINDICADO como próximo passo em APS (INADEQUADO no Revalida 2024/2) — não altera conduta antes do encaminhamento", expected: "—" }
    ],
    expectedConduct: [
      "Criptorquidia — Farmacológica: Não há indicação de tratamento hormonal (hCG ou GnRH) como primeira linha no Brasil — baixa taxa de sucesso e efeitos colaterais. Referência: SBP — Urologia Pediátrica, 2021.",
      "Criptorquidia — Encaminhamento: Cirurgia pediátrica ou urologia pediátrica, sem solicitar USG previamente. Orquidopexia realizada pelo especialista, idealmente antes dos 12–18 meses de vida. Referência: PEP Revalida 2024/2; EAU/ESPU, 2023.",
      "Fimose fisiológica: Apenas cuidados de higiene adequada — lavar a área externamente, sem retrair o prepúcio. Não indicar: retração forçada, massagem, pomada de corticoide. Indicação de avaliação para intervenção: ausência de resolução espontânea após os 3 anos de idade; ITU de repetição; balanite recorrente; balonamento obstrutivo. Referência: PEP Revalida 2024/2.",
      "Não farmacológica: Orientar higiene genital correta; explicar que a fimose é fisiológica e resolverá espontaneamente na maioria dos casos.",
      "Orientações ao paciente: Explicar que o testículo precisa de cirurgia antes do 1 ano de vida para proteger a fertilidade e reduzir o risco de câncer; que a pelinha não deve ser forçada; que a cirurgia da fimose só é considerada após os 3 anos se não resolver sozinha.",
      "Seguimento: Retorno em 1 mês para verificar encaminhamento; retorno de puericultura em 9 meses; revisão da fimose após os 3 anos se persistir."
    ],
    expectedCommunication: [
      "Apresentação: Apresentar-se pelo nome, cumprimentar o Eduardo e a mãe, criar ambiente acolhedor.",
      "Comunicação do diagnóstico: Explicar em linguagem acessível que o testículo direito ficou parado no caminho e precisa ser colocado no lugar por um cirurgião; que a pelinha é normal nessa idade e não precisa de nada além de higiene; que a sogra, com boa intenção, estava errada sobre forçar.",
      "Escuta ativa: Valorizar a atenção da mãe ao filho; não criticar a sogra; fundamentar as orientações com clareza; perguntar se ficou com dúvidas."
    ],
    criticalErrors: [
      "Orientar retração forçada do prepúcio como conduta para fimose fisiológica (INADEQUADO — pode causar parafimose e trauma).",
      "Prescrever pomada de corticoide para fimose fisiológica em lactente de 6 meses (INADEQUADO — sem indicação nessa faixa e condição).",
      "Solicitar USG inguino-escrotal antes de encaminhar para cirurgia (INADEQUADO no PEP Revalida 2024/2 — não altera a conduta inicial).",
      "Afirmar que o testículo ainda pode descer sozinho após os 6 meses sem encaminhar (após 6 meses, descida espontânea é improvável).",
      "Não diferenciar criptorquidia de testículo retrátil (condutas completamente diferentes).",
      "Não mencionar as complicações da criptorquidia não tratada (infertilidade, risco de neoplasia, torção)."
    ]
  },

  instD: {
    title: "CHECKLIST — CRIPTORQUIDIA E FIMOSE FISIOLÓGICA EM LACTENTE",
    sections: [
      {
        h: "BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
        items: [
          { item: "Apresentou-se pelo nome e cumprimentou a mãe e o bebê de forma acolhedora.", score: 0.5, ref: "CFM 2232/2019; MS — Humanização no SUS" },
          { item: "Explicou de forma clara e sem julgamentos a diferença entre a orientação da sogra e a conduta correta para fimose.", score: 0.5, ref: "MS — Política Nacional de Humanização, 2013" }
        ]
      },
      {
        h: "BLOCO 2 — ANAMNESE",
        items: [
          { item: "Perguntou quando foi notada a ausência do testículo e se já foi visto na bolsa em algum momento.", score: 0.5, ref: "SBP — Urologia Pediátrica, 2021" },
          { item: "Investigou características da micção: jato urinário, frequência, dificuldade.", score: 0.5, ref: "SBP — Urologia Pediátrica, 2021" },
          { item: "Perguntou sobre tentativas anteriores de retração do prepúcio.", score: 0.3, ref: "PEP Revalida 2024/2" },
          { item: "Investigou antecedentes perinatais (prematuridade) e histórico familiar (criptorquidia, câncer testicular).", score: 0.3, ref: "SBP — Urologia Pediátrica, 2021" }
        ]
      },
      {
        h: "BLOCO 3 — EXAME FÍSICO",
        items: [
          { item: "Solicitou exame físico da genitália e identificou testículo direito palpável no canal inguinal.", score: 1.0, ref: "SBP — Urologia Pediátrica, 2021" },
          { item: "Diferenciou criptorquidia de testículo retrátil pela manobra de Shabat (testículo não permanece na bolsa).", score: 1.0, ref: "SBP — Urologia Pediátrica, 2021" },
          { item: "Avaliou o prepúcio e identificou fimose fisiológica (prepúcio elástico, sem inflamação).", score: 0.5, ref: "PEP Revalida 2024/2" }
        ]
      },
      {
        h: "BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO",
        items: [
          { item: "Formulou o diagnóstico de criptorquidia direita e fimose fisiológica corretamente.", score: 1.0, ref: "SBP — Urologia Pediátrica, 2021" },
          { item: "Não solicitou USG inguino-escrotal antes do encaminhamento (condutas corretas de APS).", score: 0.5, ref: "PEP Revalida 2024/2" }
        ]
      },
      {
        h: "BLOCO 5 — CONDUTA E ORIENTAÇÃO AO PACIENTE",
        items: [
          { item: "Encaminhou para cirurgia pediátrica ou urologia pediátrica sem exame de imagem prévio.", score: 1.0, ref: "PEP Revalida 2024/2; EAU/ESPU, 2023" },
          { item: "Orientou que fimose fisiológica requer apenas higiene externa, sem retração forçada ou pomadas.", score: 1.0, ref: "PEP Revalida 2024/2" },
          { item: "Mencionou pelo menos duas complicações da criptorquidia não tratada (infertilidade, neoplasia, torção).", score: 0.5, ref: "SBP — Urologia Pediátrica, 2021" },
          { item: "Orientou que intervenção para fimose só é considerada após os 3 anos se não resolver espontaneamente.", score: 0.4, ref: "PEP Revalida 2024/2" }
        ]
      }
    ]
  }
},

// Estação 18

{
  id: 18,
  title: "Bebê prematuro com inchaço na virilha e aumento da bolsa escrotal",
  sub: "UBS — Atenção Primária",
  tema: "Pediatria",
  topic: "Hérnia Inguinal / Hidrocele Comunicante / Urgência Cirúrgica Pediátrica",
  level: "moderado",
  cardAccent: "#2e7d32",

  instA: {
    scenario: "Atenção Primária — UBS. Consultório de puericultura, turno da manhã.",
    patient: "R.O., 8 meses de vida, masculino, prematuro (33 semanas). Mãe: 28 anos, recepcionista. Sem comorbidades atuais.",
    complaint: "Mãe refere: 'Meu filho tem um inchaço na virilha que aparece quando ele chora. E a bolsa escrotal esquerda é maior desde que nasceu.'",
    tasks: [
      "Realize a anamnese: tempo de evolução, redutibilidade, episódios de encarceramento, prematuridade e antecedentes.",
      "Solicite o exame físico da região inguino-escrotal e interprete os achados.",
      "Diferencie hérnia inguinal de hidrocele comunicante e não comunicante com base nos achados.",
      "Avalie se há sinais de encarceramento ou estrangulamento.",
      "Defina a conduta cirúrgica adequada e a urgência do encaminhamento para cada achado.",
      "Oriente os pais sobre sinais de alerta que exigem ida imediata à emergência."
    ]
  },

  instB: {
    vitals: {
      PA: null,
      FC: "118 bpm",
      FR: "32 irpm",
      Tax: "36,8°C",
      Peso: "7.100 g",
      Altura: "68 cm",
      IMC: null
    },
    physicalGeneral: "Bom estado geral. Ativo, sorridente, bem nutrido. Afebril. Sem sinais de sofrimento agudo. Desenvolvimento adequado para a idade corrigida (5 meses).",
    physicalSeg: [
      "REGIÃO INGUINAL DIREITA: Abaulamento inguinal direito visível ao choro, que reduz espontaneamente ao repouso; redutível à palpação suave; sem sinais de encarceramento (pele normal, sem eritema, sem endurecimento); sinal do silk glove positivo à direita (espessamento do cordão espermático palpável — sinal de processus vaginalis patente).",
      "BOLSA ESCROTAL ESQUERDA: Aumento de volume, transluminação positiva à luz (permite passagem de luz — conteúdo líquido); não dolorosa à palpação; reduz parcialmente em decúbito dorsal; testículo esquerdo palpável em posição normal dentro da hidrocele.",
      "BOLSA ESCROTAL DIREITA: Normal; testículo direito tópico.",
      "PELE ESCROTAL: Normal bilateralmente, sem eritema, sem edema, sem equimose.",
      "HÉRNIA UMBILICAL: Pequeno anel umbilical palpável (< 1 cm), assintomático — achado adicional."
    ],
    labs: [],
    image: null,
    note: "Entregar o exame físico somente se solicitado verbalmente pelo candidato. Não há exames laboratoriais ou de imagem a entregar. Se o candidato perguntar sobre hérnia umbilical, o avaliador confirma o achado. Observar se o candidato reconhece a urgência relativa da hérnia inguinal em prematuro (maior risco de encarceramento) e se orienta corretamente sobre sinais de alerta.",
    patientProfile: "Rafael O., 8 meses de vida (5 meses de idade corrigida), masculino, prematuro de 33 semanas. Mãe: Mariana O., 28 anos, recepcionista, casada. Pai presente. Internado 3 semanas em UTI neonatal após o nascimento; sem sequelas conhecidas. Aleitamento materno complementado com fórmula.",
    script: [
      { trigger: "Abertura", speech: "Doutor(a), meu filho tem um carocinho na virilha que aparece quando ele chora. Quando para de chorar, some. Mas estou preocupada. E a bolsa esquerda é maior desde que nasceu." },
      { trigger: "Sobre a virilha", speech: "O inchaço aparece quando ele chora ou quando fico com ele em pé. Quando deita e para de chorar, desaparece sozinho. Nunca ficou duro ou vermelho." },
      { trigger: "Sobre a bolsa escrotal", speech: "A bolsa esquerda é mais cheia. Parece que tem água dentro. Não dói quando toco. Quando ele deita, fica um pouco menor." },
      { trigger: "Sobre prematuridade", speech: "Ele nasceu prematuro, com 33 semanas. Ficou 3 semanas na UTI. Saiu bem, graças a Deus." },
      { trigger: "Sobre episódios de encarceramento (se perguntado)", speech: "Nunca ficou duro na virilha e nunca chorou de repente de dor. Graças a Deus nunca tive esse susto." },
      { trigger: "Sobre o umbigo", speech: "O umbigo também fica estufadinho às vezes. É diferente do da virilha, né?" },
      { trigger: "Pergunta ativa", speech: "Precisa operar?" },
      { trigger: "Pergunta ativa", speech: "É perigoso? Pode piorar?" },
      { trigger: "Pergunta ativa", speech: "O que é essa bolsa cheia de água?" },
      { trigger: "Pergunta ativa", speech: "Quando devo correr pro pronto-socorro?" }
    ],
    hiddenInfo: [
      "Rafael apresentou um episódio de choro inconsolável por 30 minutos há 1 semana, com o inchaço mais endurecido, que resolveu espontaneamente — possível episódio de encarceramento transitório; só revela se o candidato perguntar especificamente sobre episódios de choro intenso associado ao abaulamento ou de endurecimento do inchaço.",
      "Há hérnia umbilical pequena associada — só é mencionada ao exame físico ou se o candidato perguntar especificamente sobre o umbigo."
    ],
    actorBehavior: "Mãe calma, organizada e atenta. Observadora — notou detalhes do filho desde o nascimento. Fica mais ansiosa quando o médico menciona possibilidade de cirurgia ('meu filho já passou tanto tempo internado'). Colaborativa e receptiva. Responde bem a explicações detalhadas. Fica tranquila quando o médico explica claramente o que é urgente e o que não é."
  },

  instC: {
    diagnosis: "Hérnia inguinal indireta direita redutível associada a hidrocele comunicante esquerda, em prematuro de 33 semanas (8 meses de vida, 5 meses de idade corrigida). Hérnia umbilical associada (achado incidental). Sinal do silk glove positivo confirma processus vaginalis patente à direita.",
    differentials: [
      "Hidrocele não comunicante à direita — transluminação positiva e conteúdo líquido sem variação com o choro; diferenciada da hérnia pela ausência de redutibilidade e de sinal do silk glove; a bolsa escrotal direita está normal nesse caso.",
      "Linfadenomegalia inguinal — linfonodos aumentados podem mimetizar hérnia; entretanto, linfonodos são firmes, não moles, não redutíveis e não variam com o choro.",
      "Criptorquidia associada — testículo não descido pode ser palpado na região inguinal; diferenciado pelo achado normal dos testículos ao exame (ambos tópicos, testículo esquerdo palpável dentro da hidrocele)."
    ],
    context: "Prematuro de 33 semanas com hérnia inguinal indireta direita redutível e hidrocele comunicante esquerda. A prematuridade aumenta significativamente o risco de encarceramento e estrangulamento da hérnia — encaminhamento cirúrgico com urgência relativa (antes dos 12 meses, preferencialmente nas próximas semanas). Hidrocele comunicante: conduta expectante até os 2 anos.",
    justify: "Hérnia inguinal direita: abaulamento inguinal que aparece ao choro e reduz em repouso + redutível à palpação + sinal do silk glove positivo (processus vaginalis patente) + possível episódio de encarceramento transitório há 1 semana. Hidrocele esquerda comunicante: aumento de volume escrotal esquerdo + transluminação positiva (conteúdo líquido) + redução parcial em decúbito (comunicação com o abdome) + testículo palpável dentro. Prematuridade eleva o risco de encarceramento — cirurgia eletiva urgente indicada antes do habitual.",
    expectedAnamnesis: [
      "Quando foi notado o abaulamento inguinal e a hidrocele.",
      "Redutibilidade: some em repouso, aumenta ao choro.",
      "Episódios de encarceramento: choro inconsolável, abaulamento endurecido, pele vermelha.",
      "Prematuridade: semanas gestacionais, tempo de internação neonatal.",
      "Antecedentes cirúrgicos.",
      "Micção normal (excluir obstrução).",
      "Características da hidrocele: varia com posição?"
    ],
    expectedPhysical: [
      "Inspeção em repouso e ao choro (provocado ou espontâneo): observar o abaulamento.",
      "Palpação do canal inguinal: redutibilidade, consistência, calor, eritema.",
      "Sinal do silk glove: palpação do cordão espermático — espessamento indica processus vaginalis patente.",
      "Transluminação: lanterna aplicada na bolsa escrotal — positiva = hidrocele (conteúdo líquido); negativa = hérnia ou outro conteúdo sólido.",
      "Avaliação da bolsa escrotal: tamanho, consistência, posição dos testículos.",
      "Pesquisa de sinais de encarceramento: pele normal vs. eritematosa, mole vs. dura.",
      "Umbigo: avaliação de hérnia umbilical associada."
    ],
    expectedExams: [
      { exam: "Nenhum exame necessário antes do encaminhamento", justify: "Diagnóstico clínico — USG não é necessário para hérnia inguinal clinicamente evidente", expected: "—" }
    ],
    expectedConduct: [
      "Hérnia inguinal — Cirúrgica: Herniorrafia inguinal eletiva com urgência relativa (prematuro = alto risco de encarceramento). Encaminhamento para cirurgia pediátrica nas próximas semanas, não aguardar. Orquidopexia contralateral não é mais indicada rotineiramente em prematuros. Referência: SBP — Cirurgia Pediátrica, 2020; EAU/ESPU, 2023.",
      "Hidrocele comunicante — Expectante: Conduta expectante até os 2 anos (resolução espontânea em 80% dos casos). Se persistir após 2 anos — hidrocelectomia. Referência: EAU/ESPU, 2023.",
      "Hérnia umbilical — Expectante: Resolução espontânea esperada até os 3 anos de idade. Cirurgia indicada se persistir após 3 anos ou anel > 1,5–2 cm. Referência: SBP, 2020.",
      "Orientações aos pais: Explicar os sinais de encarceramento (choro inconsolável repentino, abaulamento endurecido, pele vermelha/roxa sobre a hérnia, vômitos — ir imediatamente à emergência); explicar que a hidrocele é 'água' que entra e sai do abdome e tende a resolver; que a hérnia umbilical também tende a resolver até os 3 anos.",
      "Seguimento: Encaminhamento para cirurgia pediátrica com urgência relativa; retorno em 1 mês; orientar ida à emergência se sinais de encarceramento."
    ],
    expectedCommunication: [
      "Apresentação: Apresentar-se pelo nome; reconhecer a trajetória do prematuro e a preocupação da mãe com nova cirurgia.",
      "Comunicação do diagnóstico: Explicar em linguagem acessível: 'O inchaço na virilha é uma hérnia — uma parte do intestino que escapa por um caminho que deveria ter fechado. Como o Rafael nasceu prematuro, essa abertura ficou maior e o risco de encravar é maior, então precisamos operar logo. A bolsa inchada é uma bolsinha de água — essa tende a secar sozinha até os 2 aninhos.'",
      "Escuta ativa: Validar o medo da mãe por nova cirurgia; explicar que é uma cirurgia simples e segura; não minimizar o histórico de prematuridade."
    ],
    criticalErrors: [
      "Não reconhecer que a prematuridade eleva o risco de encarceramento e exige cirurgia eletiva urgente (não pode aguardar indefinidamente).",
      "Confundir hidrocele com hérnia sem usar transluminação como critério diferencial.",
      "Indicar conduta expectante para a hérnia inguinal em prematuro (incorreto — cirurgia eletiva urgente é indicada).",
      "Não orientar os pais sobre sinais de encarceramento e quando ir à emergência.",
      "Indicar cirurgia imediata para hidrocele comunicante (conduta expectante até 2 anos é o correto).",
      "Orientar cirurgia imediata para hérnia umbilical pequena assintomática (conduta expectante até 3 anos é o correto)."
    ]
  },

  instD: {
    title: "CHECKLIST — HÉRNIA INGUINAL E HIDROCELE EM PREMATURO",
    sections: [
      {
        h: "BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
        items: [
          { item: "Apresentou-se pelo nome e reconheceu o histórico de prematuridade antes de iniciar.", score: 0.5, ref: "CFM 2232/2019; MS — Humanização no SUS" },
          { item: "Orientou os pais sobre sinais de encarceramento e quando buscar a emergência em linguagem clara.", score: 0.5, ref: "SBP — Cirurgia Pediátrica, 2020" }
        ]
      },
      {
        h: "BLOCO 2 — ANAMNESE",
        items: [
          { item: "Investigou redutibilidade do abaulamento inguinal (some em repouso, aumenta ao choro).", score: 0.5, ref: "SBP — Cirurgia Pediátrica, 2020" },
          { item: "Perguntou especificamente sobre episódios de encarceramento (choro inconsolável, abaulamento endurecido).", score: 0.5, ref: "SBP — Cirurgia Pediátrica, 2020" },
          { item: "Confirmou prematuridade (33 semanas) como fator de risco para encarceramento.", score: 0.5, ref: "EAU/ESPU — Paediatric Urology, 2023" },
          { item: "Investigou características da hidrocele: variação com posição, dor.", score: 0.3, ref: "EAU/ESPU, 2023" }
        ]
      },
      {
        h: "BLOCO 3 — EXAME FÍSICO",
        items: [
          { item: "Realizou transluminação na bolsa escrotal esquerda e identificou resultado positivo (hidrocele).", score: 1.0, ref: "EAU/ESPU, 2023" },
          { item: "Avaliou o sinal do silk glove à direita (espessamento do cordão espermático).", score: 0.5, ref: "SBP — Cirurgia Pediátrica, 2020" },
          { item: "Avaliou sinais de encarceramento: pele, consistência, eritema sobre a hérnia.", score: 0.5, ref: "SBP — Cirurgia Pediátrica, 2020" }
        ]
      },
      {
        h: "BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO",
        items: [
          { item: "Diferenciou hérnia inguinal de hidrocele corretamente com base em transluminação e redutibilidade.", score: 1.0, ref: "EAU/ESPU, 2023" },
          { item: "Identificou que a prematuridade indica cirurgia eletiva com urgência relativa (não expectante).", score: 1.0, ref: "SBP — Cirurgia Pediátrica, 2020" }
        ]
      },
      {
        h: "BLOCO 5 — CONDUTA E ORIENTAÇÃO AO PACIENTE",
        items: [
          { item: "Encaminhou para cirurgia pediátrica com urgência relativa para correção da hérnia inguinal.", score: 1.0, ref: "SBP — Cirurgia Pediátrica, 2020; EAU/ESPU, 2023" },
          { item: "Indicou conduta expectante para hidrocele comunicante até os 2 anos de vida.", score: 0.5, ref: "EAU/ESPU, 2023" },
          { item: "Indicou conduta expectante para hérnia umbilical assintomática até os 3 anos.", score: 0.5, ref: "SBP — Cirurgia Pediátrica, 2020" },
          { item: "Orientou sinais de encarceramento que exigem ida imediata à emergência.", score: 0.7, ref: "SBP — Cirurgia Pediátrica, 2020" }
        ]
      }
    ]
  }
},

// Estação 19 

{
  id: 19,
  title: "Criança com dor abdominal que começou no umbigo e foi para o lado direito",
  sub: "UPA — Urgência e Emergência",
  tema: "Pediatria",
  topic: "Apendicite Aguda Pediátrica / Pediatric Appendicitis Score",
  level: "moderado",
  cardAccent: "#e65100",

  instA: {
    scenario: "Urgência — UPA 24h. Sala de atendimento pediátrico, turno noturno.",
    patient: "T.M., 9 anos, masculino, estudante. Mãe acompanhante. Sem comorbidades conhecidas.",
    complaint: "Mãe refere: 'Meu filho começou com dor no umbigo ontem de noite, mas agora a dor foi pro lado direito da barriga. Ele tem febre, não quer comer nada e tá com dificuldade pra andar.'",
    tasks: [
      "Realize a anamnese dirigida: início da dor, migração, febre, anorexia, náuseas, vômitos e última evacuação",
      "Solicite o exame físico abdominal com as manobras semiológicas pertinentes",
      "Aplique um escore diagnóstico para apendicite pediátrica e calcule a pontuação",
      "Solicite os exames complementares adequados e interprete os resultados",
      "Formule o diagnóstico e indique o tratamento cirúrgico com a justificativa adequada",
      "Comunique à família a necessidade de cirurgia de urgência de forma clara e empática"
    ]
  },

  instB: {
    vitals: { PA: "100/70 mmHg", FC: "118 bpm", FR: "22 irpm", Tax: "38,6°C", Peso: "32 kg", Altura: "1,35 m", IMC: "17,6 kg/m²" },
    physicalGeneral: "Regular estado geral. Posição antálgica em flexão de quadril, fácies de dor. Hipoativo, pouco colaborativo por dor. Febril (38,6°C). Palidez leve. Recusa de movimentação ativa.",
    physicalSeg: [
      "ABDOME: Dor máxima à palpação em Ponto de McBurney (FID); Blumberg positivo (dor à descompressão brusca em FID); Rovsing positivo (dor em FID à palpação da FIE); sinal do Psoas positivo (dor à extensão do quadril direito); defesa muscular voluntária em FID; peristaltismo diminuído; sem visceromegalias; sem peritonismo generalizado",
      "POSTURA: Paciente mantém ligeira flexão do quadril direito (posição antálgica — apêndice retrocecal)",
      "GENITÁLIA: Normal, testículos tópicos bilaterais (exclui torção testicular como diagnóstico diferencial)"
    ],
    labs: [
      { test: "Leucócitos", val: "17.400/mm³", ref: "4.500–13.500/mm³", alt: true },
      { test: "Neutrófilos", val: "88%", ref: "40–70%", alt: true },
      { test: "Bastões", val: "8%", ref: "< 5%", alt: true },
      { test: "PCR", val: "82 mg/L", ref: "< 5 mg/L", alt: true },
      { test: "Hemoglobina", val: "12,8 g/dL", ref: "11,5–14,5 g/dL", alt: false },
      { test: "Urina tipo I", val: "Normal, sem leucocitúria, sem nitrito", ref: "—", alt: false }
    ],
    image: "Ultrassonografia abdominal: Apêndice cecal visualizado em FID. Diâmetro anteroposterior de 9 mm (> 6 mm — critério de apendicite). Espessamento parietal sem estratificação. Ausência de compressibilidade. Pequena quantidade de líquido livre periapendicular. Sem cálculo fecal visível. Conclusão: achados ultrassonográficos compatíveis com apendicite aguda.",
    note: "Entregar o exame físico somente se solicitado verbalmente. Entregar os exames laboratoriais somente se solicitados explicitamente pelo candidato. Entregar o laudo de USG somente se o candidato solicitar exame de imagem abdominal. Observar se o candidato aplica o PAS ou o escore de Alvarado e se diferencia corretamente os dois instrumentos.",
    patientProfile: "Thiago M., 9 anos, masculino, estudante do 3º ano. Mãe: Cláudia M., 34 anos, costureira. Pai ausente. Mora com a mãe e a irmã. Última refeição há 14 horas (parou de comer por dor e náusea). Última evacuação há 2 dias.",
    script: [
      { trigger: "Abertura", speech: "Mãe: \"Doutor(a), meu filho começou com dor de barriga ontem à noite. Primeiro era no umbigo, mas foi passando pro lado direito. Ele tá com febre, não quer comer nada e quando caminha fica com dor.\"" },
      { trigger: "Sobre a dor", speech: "Thiago: \"Dói muito aqui.\" (aponta para FID). \"Quando caminho piora. Quando fico parado melhora um pouquinho.\"" },
      { trigger: "Sobre migração (se perguntado)", speech: "Mãe: \"Começou no umbigo lá pelas 10 da noite. De manhã já tinha ido para o lado direito.\"" },
      { trigger: "Sobre febre", speech: "Mãe: \"A febre começou hoje de manhã. Dei dipirona, baixou um pouco mas voltou.\"" },
      { trigger: "Sobre alimentação", speech: "Thiago: \"Não tô com fome. Quando penso em comer dá náusea.\"" },
      { trigger: "Sobre vômitos (se perguntado)", speech: "Thiago: \"Vomitei uma vez de manhã. Só uma vez.\"" },
      { trigger: "Sobre evacuação (se perguntado)", speech: "Mãe: \"Ele não fez cocô há dois dias. É um pouco parado nisso.\"" },
      { trigger: "Sobre urina (se perguntado)", speech: "Mãe: \"A xixi tá normal. Não tá ardendo.\"" },
      { trigger: "Pergunta ativa — diagnóstico", speech: "Mãe: \"O que ele tem, doutor(a)? É a apendicite?\"" },
      { trigger: "Pergunta ativa — cirurgia", speech: "Mãe: \"Precisa operar? É urgente?\"" },
      { trigger: "Pergunta ativa — risco", speech: "Mãe: \"É perigoso? Pode ser grave?\"" }
    ],
    hiddenInfo: [
      "Thiago vomitou uma vez pela manhã — só menciona espontaneamente sobre náusea; os vômitos só são confirmados se o candidato perguntar especificamente \"você vomitou?\"",
      "A última evacuação foi há 2 dias — só revela se o candidato perguntar especificamente sobre o hábito intestinal e quando foi a última evacuação"
    ],
    actorBehavior: "Mãe ansiosa, preocupada e ligeiramente agitada. Thiago está quieto, com fácies de dor, mexe-se pouco. Responde com poucas palavras por causa da dor. A mãe fala mais que o filho. Fica visivelmente aliviada quando o médico demonstra segurança e explica o que vai acontecer. Thiago fica com medo quando ouve a palavra \"cirurgia\" — pede à mãe para segurar sua mão."
  },

  instC: {
    diagnosis: "Apendicite aguda em fase não perfurada, alta probabilidade. Pediatric Appendicitis Score (PAS) = 8 pontos (alta probabilidade — indicação de cirurgia). Confirmação ultrassonográfica: apêndice 9 mm com líquido livre periapendicular.",
    differentials: [
      "Adenite mesentérica — inflamação de linfonodos mesentéricos, frequentemente pós-IVAS; simula apendicite mas dor é menos localizada, sem peritonismo, Blumberg negativo; USG mostraria linfonodos aumentados sem apêndice alterado — excluída pela localização precisa em McBurney, Blumberg positivo e apêndice espessado no USG",
      "Infecção do trato urinário (pielonefrite) — febre, dor abdominal e flancos; excluída pela urina tipo I normal e localização da dor em FID com sinais peritoneais",
      "Constipação intestinal grave — dor abdominal difusa em crianças; excluída pela localização precisa em McBurney, febre, Blumberg positivo e leucocitose com neutrofilia"
    ],
    context: "Criança de 9 anos com apendicite aguda confirmada clínica e ultrassonograficamente. Dor migratória (periumbilical → FID), febre, anorexia, náusea, Blumberg e Rovsing positivos, leucocitose com desvio à esquerda, PCR elevado e USG com apêndice 9 mm. PAS = 8 pontos → alta probabilidade → apendicectomia de urgência indicada.",
    justify: "PAS (Pediatric Appendicitis Score): migração da dor para FID (1 pt) + anorexia (1 pt) + náuseas/vômitos (1 pt) + dor em FID à palpação (2 pts) + Blumberg positivo (1 pt) + temperatura > 38°C (1 pt) + leucocitose > 10.000 (1 pt) + desvio à esquerda — neutrófilos > 75% (1 pt) = 8 pontos → alta probabilidade de apendicite → indicação cirúrgica. USG confirma: apêndice 9 mm, sem compressibilidade, líquido livre.",
    expectedAnamnesis: [
      "Início e localização da dor: umbilical → FID (migração clássica)",
      "Caracterizar: contínua, piora ao movimento",
      "Febre: início, temperatura",
      "Anorexia: recusa alimentar desde quando",
      "Náuseas e vômitos: quantas vezes",
      "Última evacuação: constipação associada",
      "Urina: disúria (excluir ITU)",
      "Última refeição (importante pré-operatório)"
    ],
    expectedPhysical: [
      "Sinais vitais: Tax, FC (taquicardia por dor e febre)",
      "Inspeção: posição antálgica, fácies de dor, movimentação espontânea",
      "Palpação: ponto de McBurney (FID), defesa muscular, rigidez",
      "Manobras específicas: Blumberg (descompressão brusca em FID → dor = peritonismo), Rovsing (palpação de FIE → dor em FID = irritação peritoneal localizada), sinal do Psoas (extensão do quadril direito → dor = apêndice retrocecal), sinal do Obturador (rotação interna do quadril D → dor = apêndice pélvico)",
      "Ausculta: peristaltismo diminuído"
    ],
    expectedExams: [
      { exam: "Hemograma com diferencial", justify: "Leucocitose com neutrofilia e desvio — confirmação inflamatória", expected: "Leucócitos 17.400, neutrófilos 88%, bastões 8%" },
      { exam: "PCR", justify: "Marcador de atividade inflamatória", expected: "82 mg/L (elevado)" },
      { exam: "Urina tipo I", justify: "Excluir ITU como causa de dor abdominal direita", expected: "Normal" },
      { exam: "Ultrassonografia abdominal", justify: "Confirmação diagnóstica — apêndice espessado, líquido livre", expected: "Apêndice 9 mm, líquido livre periapendicular" },
      { exam: "TC de abdome (se USG inconclusivo)", justify: "Segunda linha quando USG não visualiza o apêndice", expected: "Não necessária nesse caso" }
    ],
    expectedConduct: [
      "Imediata: Jejum absoluto (última refeição há 14 horas — verificar); acesso venoso periférico; analgesia (dipirona EV — não contraindicada); hidratação venosa",
      "Farmacológica (pré-operatória): Antibioticoterapia pré-operatória: ceftriaxona 50 mg/kg/dose EV + metronidazol 7,5 mg/kg/dose EV — administrar antes da indução anestésica. Referência: SBP — Cirurgia Pediátrica, 2022",
      "Cirúrgica: Apendicectomia de urgência (laparoscópica ou aberta, conforme disponibilidade). Referência: SBP — Cirurgia Pediátrica, 2022",
      "Comunicação com a família: Explicar o diagnóstico em linguagem acessível; a necessidade de cirurgia urgente; que a cirurgia é segura e necessária para evitar a perfuração; obter o termo de consentimento informado dos responsáveis",
      "Seguimento: Internação hospitalar; antibioticoterapia continuada conforme achado cirúrgico; alta em 24–48h se sem perfuração; retorno em 7–10 dias"
    ],
    expectedCommunication: [
      "Apresentação: Apresentar-se pelo nome; reconhecer o sofrimento do Thiago; incluí-lo na explicação de forma adequada para a idade",
      "Comunicação do diagnóstico: \"O apêndice do seu filho inflamou e precisamos operá-lo hoje. É uma cirurgia comum e segura, mas é urgente para evitar que o apêndice estoure.\"",
      "Escuta ativa: Responder às dúvidas da mãe; tranquilizar o Thiago sem minimizar; explicar o que vai acontecer passo a passo"
    ],
    criticalErrors: [
      "Não reconhecer a apendicite e dar alta com apenas analgesia",
      "Não solicitar hemograma e USG abdominal com quadro sugestivo de apendicite",
      "Não indicar cirurgia com PAS ≥ 6 e USG confirmando apendicite",
      "Prescrever apenas antibiótico sem indicar cirurgia (antibioticoterapia exclusiva pode ser considerada em casos muito selecionados, mas não é o padrão para apendicite confirmada)",
      "Não aplicar escore diagnóstico (PAS ou Alvarado) — conduta baseada apenas na \"impressão clínica\" sem metodologia",
      "Confundir os critérios do PAS com os do escore de Alvarado (leucocitose vale 1 pt no PAS e 2 pts no Alvarado — não intercambiar)"
    ]
  },

  instD: {
    title: "CHECKLIST — APENDICITE AGUDA EM CRIANÇA",
    sections: [
      {
        h: "BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
        items: [
          { item: "Apresentou-se pelo nome e dirigiu-se tanto à criança quanto à mãe de forma adequada", score: 0.5, ref: "CFM 2232/2019; SBP — Comunicação em Pediatria" },
          { item: "Comunicou a necessidade de cirurgia de forma clara, sem termos técnicos e com empatia", score: 0.5, ref: "MS — Política Nacional de Humanização, 2013" }
        ]
      },
      {
        h: "BLOCO 2 — ANAMNESE",
        items: [
          { item: "Investigou migração da dor: de periumbilical para FID", score: 0.5, ref: "SBP — Cirurgia Pediátrica, 2022" },
          { item: "Investigou anorexia, náuseas e vômitos como sintomas associados", score: 0.5, ref: "SBP — Cirurgia Pediátrica, 2022" },
          { item: "Perguntou sobre febre: início e temperatura", score: 0.3, ref: "SBP — Cirurgia Pediátrica, 2022" },
          { item: "Investigou hábito intestinal (última evacuação) e urina (excluir ITU)", score: 0.3, ref: "SBP — Cirurgia Pediátrica, 2022" },
          { item: "Perguntou sobre última refeição (dado pré-operatório importante)", score: 0.3, ref: "SBP — Cirurgia Pediátrica, 2022" }
        ]
      },
      {
        h: "BLOCO 3 — EXAME FÍSICO",
        items: [
          { item: "Avaliou dor em ponto de McBurney (FID) com a técnica correta", score: 0.5, ref: "SBP — Cirurgia Pediátrica, 2022" },
          { item: "Realizou manobra de Blumberg e identificou descompressão brusca positiva em FID", score: 1.0, ref: "SBP — Cirurgia Pediátrica, 2022" },
          { item: "Realizou pelo menos mais uma manobra específica: Rovsing ou sinal do Psoas", score: 0.5, ref: "SBP — Cirurgia Pediátrica, 2022" }
        ]
      },
      {
        h: "BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO",
        items: [
          { item: "Aplicou o PAS ou escore de Alvarado e calculou pontuação de alta probabilidade (≥ 6)", score: 1.0, ref: "AAP — Appendicitis in Children, 2021" },
          { item: "Solicitou hemograma, PCR, urina tipo I e USG abdominal", score: 0.5, ref: "SBP — Cirurgia Pediátrica, 2022" },
          { item: "Formulou diagnóstico de apendicite aguda e indicou cirurgia de urgência", score: 1.0, ref: "SBP — Cirurgia Pediátrica, 2022" }
        ]
      },
      {
        h: "BLOCO 5 — CONDUTA E ORIENTAÇÃO AO PACIENTE",
        items: [
          { item: "Indicou jejum, acesso venoso e analgesia imediatamente", score: 0.5, ref: "SBP — Cirurgia Pediátrica, 2022" },
          { item: "Prescreveu antibioticoterapia pré-operatória: ceftriaxona + metronidazol EV", score: 0.5, ref: "SBP — Cirurgia Pediátrica, 2022" },
          { item: "Indicou apendicectomia de urgência com justificativa clara para a família", score: 0.6, ref: "SBP — Cirurgia Pediátrica, 2022" }
        ]
      }
    ]
  }
},

// Estação 20: Torção Testicular em Adolescente

{
  id: 20,
  title: "Adolescente com dor intensa e súbita no testículo durante a madrugada",
  sub: "UPA — Urgência e Emergência",
  tema: "Pediatria",
  topic: "Torção Testicular / Escroto Agudo / Emergência Urológica",
  level: "complexo",
  cardAccent: "#b71c1c",

  instA: {
    scenario: "Urgência — UPA 24h. Sala de atendimento, turno da madrugada.",
    patient: "M.R., 13 anos, masculino, estudante. Pai acompanhante. Sem comorbidades conhecidas.",
    complaint: "Pai refere: 'Meu filho acordou gritando de dor lá embaixo às 3 da manhã. A dor é muito forte, veio do nada. Ele tá passando mal.'",
    tasks: [
      "Realize a anamnese: início súbito da dor, trauma, infecção urinária, febre, náuseas e atividade sexual",
      "Solicite o exame físico escrotal e identifique os achados de torção testicular",
      "Diferencie torção testicular de orquiepididimite e torção de apêndice testicular com base nos achados",
      "Defina a conduta imediata: identifique se o quadro clínico é típico e indique exploração cirúrgica de urgência sem aguardar Doppler",
      "Explique ao pai e ao paciente a gravidade, a urgência e a janela de tempo para preservação do testículo",
      "Acione a equipe cirúrgica e prepare o paciente para a cirurgia"
    ]
  },

  instB: {
    vitals: { PA: "128/80 mmHg", FC: "114 bpm", FR: "20 irpm", Tax: "37,1°C (afebril)", Peso: "58 kg", Altura: "1,68 m", IMC: "20,5 kg/m²" },
    physicalGeneral: "Mau estado geral. Fácies de dor intensa. Palidez cutânea. Diaforese. Posição antálgica no leito. Agitado. Sem febre.",
    physicalSeg: [
      "TESTÍCULO ESQUERDO: Aumentado de volume, endurecido, posição alta na bolsa escrotal (elevado), horizontalizado (\"lying horizontally\"); dor intensa à palpação, irradiando para o flanco esquerdo",
      "SINAL DE PREHN: Negativo — elevação manual do testículo NÃO alivia a dor (sinal de Prehn negativo = favorece torção; positivo = favorece orquiepididimite)",
      "REFLEXO CREMASTÉRICO ESQUERDO: Ausente (estimulação da face interna da coxa esquerda não produz elevação do testículo)",
      "PELE ESCROTAL ESQUERDA: Eritema e edema discretos — sinais tardios presentes",
      "TESTÍCULO DIREITO: Normal, tópico, sem dor",
      "REFLEXO CREMASTÉRICO DIREITO: Presente"
    ],
    labs: [
      { test: "Leucócitos", val: "9.800/mm³", ref: "4.500–13.500/mm³", alt: false },
      { test: "Proteína C-reativa", val: "3 mg/L", ref: "< 5 mg/L", alt: false },
      { test: "Urina tipo I", val: "Normal, sem leucocitúria, sem nitrito", ref: "—", alt: false }
    ],
    image: "Ultrassonografia com Doppler escrotal (se solicitado — quadro TÍPICO, Doppler NÃO é o próximo passo): Testículo esquerdo com aumento de volume e heterogeneidade do parênquima. AUSÊNCIA COMPLETA DE FLUXO VASCULAR AO DOPPLER COLORIDO. Testículo direito com fluxo preservado. Pequena quantidade de líquido livre periapendicular. Conclusão: achados compatíveis com torção testicular esquerda. Encaminhar para avaliação cirúrgica imediata.",
    note: "Entregar o exame físico somente se solicitado. Entregar os exames laboratoriais somente se solicitados. ATENÇÃO: Se o candidato indicar cirurgia de urgência sem aguardar o Doppler (conduta correta em quadro típico), valorizar no checklist. Se o candidato solicitar USG antes de indicar a cirurgia em quadro clínico típico, entregar o laudo mas anotar como conduta imprópria para o contexto (atraso desnecessário). O laudo confirma a torção — mas o objetivo da estação é avaliar se o candidato reconhece que a decisão cirúrgica é clínica, não depende do Doppler em quadro típico.",
    patientProfile: "Miguel R., 13 anos, masculino, estudante do 8º ano. Pai: Roberto R., 42 anos, motorista. Mãe em casa com irmã mais nova. Pai visivelmente abalado e preocupado. Miguel é tímido, constrangido com o tema. Estava dormindo quando a dor começou.",
    script: [
      { trigger: "Abertura", speech: "Pai: \"Doutor(a), meu filho acordou de madrugada gritando de dor aqui embaixo. Nunca vi ele assim. A dor foi do nada, estava dormindo.\"" },
      { trigger: "Sobre o início da dor", speech: "Miguel: \"Eu tava dormindo e acordei com uma dor horrível. Não bati em nada, não fiz nada.\"" },
      { trigger: "Sobre febre (se perguntado)", speech: "Miguel: \"Não tenho febre não.\" Pai: \"Medi em casa, não tinha febre.\"" },
      { trigger: "Sobre trauma (se perguntado)", speech: "Miguel: \"Não, não bati em nada. Só acordei com a dor.\"" },
      { trigger: "Sobre urina (se perguntado)", speech: "Miguel: \"A xixi tá normal. Não dói.\"" },
      { trigger: "Sobre atividade sexual (se perguntado — com privacidade)", speech: "Miguel (envergonhado): \"Não tenho namorada. Não tive nada assim não.\"" },
      { trigger: "Sobre náuseas/vômitos", speech: "Miguel: \"Tô com enjoo. Vomitei uma vez antes de vir aqui.\"" },
      { trigger: "Sobre episódios anteriores (se perguntado)", speech: "Miguel: \"Já tive uma dorzinha parecida aqui antes, mas passou rápido. Faz umas semanas.\"" },
      { trigger: "Pergunta ativa — pai", speech: "Pai: \"É grave? Pode perder o testículo?\"" },
      { trigger: "Pergunta ativa — pai", speech: "Pai: \"Por que precisa operar tão rápido? Não dá pra esperar até amanhã?\"" }
    ],
    hiddenInfo: [
      "Miguel já teve um episódio de dor escrotal breve que resolveu espontaneamente semanas atrás (possível torção intermitente) — só revela se o candidato perguntar especificamente sobre episódios anteriores de dor escrotal",
      "Miguel ficou com vergonha de contar ao pai sobre o episódio anterior — só revela se o candidato entrevistar Miguel com privacidade em relação ao pai"
    ],
    actorBehavior: "Miguel muito constrangido com o local da dor, especialmente na presença do pai. Responde melhor quando o médico pede que o pai saia brevemente para uma parte da anamnese. Dor intensa — fácies de sofrimento genuíno. Pai muito angustiado, faz muitas perguntas. O pai tende a responder pelas perguntas direcionadas ao filho — o candidato deve conseguir criar privacidade para Miguel. A menção à cirurgia imediata assusta o pai, que questiona a urgência."
  },

  instC: {
    diagnosis: "Torção testicular esquerda — emergência urológica. Quadro clínico típico: dor intensa de início súbito durante o sono, sem trauma, sem febre, testículo elevado e horizontalizado, Prehn negativo, reflexo cremastérico ausente, sem leucocitose, urina normal. Doppler (se realizado) confirma ausência de fluxo vascular. Janela de tempo: < 3–4 horas do início (alta probabilidade de salvabilidade > 90%). Indicação de exploração cirúrgica imediata sem aguardar exames de imagem.",
    differentials: [
      "Orquiepididimite — inflamação infecciosa do testículo e epidídimo; início gradual, com febre, leucocitose, piúria; Prehn positivo (elevação alivia a dor); reflexo cremastérico presente; Doppler com fluxo aumentado — excluída nesse caso (afebril, sem leucocitose, sem piúria, Prehn negativo, reflexo ausente)",
      "Torção de apêndice testicular — torção de estrutura vestigial; mais comum em pré-púberes (7–12 anos); início gradual; dor localizada no polo superior; \"blue dot sign\" (mancha azulada palpável no polo superior); Doppler com fluxo preservado; reflexo cremastérico presente — excluída pelo início súbito, dor intensa generalizada e ausência de reflexo cremastérico",
      "Hérnia inguinal encarcerada — conteúdo herniário encarcerado pode causar dor intensa; palpação do canal inguinal e bolsa escrotal diferencia; excluída pela ausência de abaulamento inguinal e pelo testículo aumentado e horizontalizado como achado principal"
    ],
    context: "Adolescente de 13 anos com torção testicular esquerda em janela de < 4 horas. Dor súbita noturna, testículo horizontalizado, Prehn negativo, reflexo cremastérico ausente, sem febre nem leucocitose. Quadro clínico típico — exploração cirúrgica imediata sem aguardar Doppler. Salvabilidade > 90% se tratado em < 6 horas.",
    justify: "Quadro clínico típico de torção testicular: (1) dor súbita intensa sem trauma; (2) ausência de febre e leucocitose (afasta infecção); (3) urina normal (afasta ITU/orquiepididimite infecciosa); (4) testículo elevado e horizontalizado; (5) Prehn negativo; (6) ausência de reflexo cremastérico ipsilateral. Todos os critérios clínicos presentes — diagnóstico clínico confirmado. Doppler é ferramenta auxiliar em casos atípicos, não deve atrasar a cirurgia em quadro típico.",
    expectedAnamnesis: [
      "Início: súbito (acorda do sono) ou gradual — fundamental para diferenciação",
      "Trauma: presente ou ausente",
      "Febre: presença afasta torção, favorece infecção",
      "Urina: disúria/piúria afasta torção, sugere orquiepididimite",
      "Atividade sexual: IST como causa de orquiepididimite (entrevista com privacidade)",
      "Episódios anteriores de dor escrotal transitória (torção intermitente)",
      "Náuseas e vômitos (vagotonia por dor intensa — típico de torção)",
      "Última refeição (pré-operatório)"
    ],
    expectedPhysical: [
      "Sinais vitais: Tax (afebril = favorece torção), FC (taquicardia por dor)",
      "Inspeção: edema, eritema escrotal, posição do testículo",
      "Palpação: consistência, sensibilidade, posição (elevado = torção), horizontalização",
      "Sinal de Prehn: elevar o testículo manualmente — se alivia = orquiepididimite; se não alivia ou piora = torção",
      "Reflexo cremastérico: estimular face interna da coxa — ausência ipsilateral é altamente sugestiva de torção",
      "Epidídimo: palpação — epidídimo anteriorizando pode indicar torção do cordão"
    ],
    expectedExams: [
      { exam: "Urina tipo I", justify: "Afastar ITU/orquiepididimite infecciosa", expected: "Normal (sem leucocitúria)" },
      { exam: "Hemograma", justify: "Afastar leucocitose (infecção)", expected: "Normal (9.800)" },
      { exam: "USG com Doppler", justify: "Confirmar ausência de fluxo — SOMENTE se quadro atípico ou duvidoso", expected: "Ausência de fluxo (confirma torção)" }
    ],
    expectedConduct: [
      "Imediata: Cirurgia de urgência — exploração escrotal imediata sem aguardar Doppler em quadro típico. Não há tempo a perder: < 6 horas = salvar o testículo",
      "Cirúrgica: Destorção manual (tentativa antes da cirurgia — \"abre o livro\": rotação lateral para medial); se não resolver, exploração cirúrgica imediata; orquidopexia bilateral (risco de torção contralateral de 40%); se isquemia irreversível, orquiectomia + fixação do contralateral. Referência: EAU/ESPU, 2023; SBP, 2021",
      "Analgesia: Dipirona ou morfina EV para controle da dor — analgesia NÃO está contraindicada e não mascara o diagnóstico já estabelecido",
      "Farmacológica: Sem antibióticos (não é processo infeccioso)",
      "Comunicação: Explicar ao pai e ao Miguel a gravidade, a urgência, a janela de tempo e o que pode acontecer se não operar agora (perda do testículo)",
      "Seguimento: Internação; monitorização pós-operatória; alta em 24–48h; retorno para avaliação em 1 semana"
    ],
    expectedCommunication: [
      "Apresentação: Apresentar-se; pedir ao pai para aguardar brevemente enquanto faz algumas perguntas ao Miguel com privacidade (fundamental para anamnese completa)",
      "Comunicação do diagnóstico: Explicar em linguagem clara: \"O testículo esquerdo do seu filho girou em torno de si mesmo e está sem circulação. Precisamos operar agora. Quanto mais rápido, maior a chance de salvar o testículo. Se esperarmos, pode perder o testículo definitivamente.\"",
      "Escuta ativa: Responder às dúvidas do pai; tranquilizar o Miguel (adolescente assustado); explicar o que acontece na cirurgia de forma simples"
    ],
    criticalErrors: [
      "Não reconhecer a torção testicular como emergência urológica que exige cirurgia imediata",
      "Aguardar o resultado do Doppler antes de indicar a cirurgia em quadro clínico típico (erro — atrasa o tratamento e compromete a salvabilidade)",
      "Confundir com orquiepididimite e prescrever antibiótico sem indicar cirurgia",
      "Não mencionar a janela de tempo para salvabilidade ao explicar a urgência para a família",
      "Não avaliar o reflexo cremastérico e o sinal de Prehn (sinais essenciais para o diagnóstico diferencial)",
      "Não criar privacidade para entrevistar o adolescente (compromete a qualidade da anamnese sobre atividade sexual e episódios anteriores)"
    ]
  },

  instD: {
    title: "CHECKLIST — TORÇÃO TESTICULAR EM ADOLESCENTE",
    sections: [
      {
        h: "BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
        items: [
          { item: "Apresentou-se pelo nome e pediu ao pai para aguardar fora por alguns momentos para entrevistar o adolescente com privacidade", score: 0.5, ref: "ECA — Art. 17; MS — Saúde do Adolescente, 2020" },
          { item: "Comunicou ao pai e ao paciente a gravidade, a urgência e a janela de tempo de forma clara e empática", score: 0.5, ref: "MS — Política Nacional de Humanização, 2013" }
        ]
      },
      {
        h: "BLOCO 2 — ANAMNESE",
        items: [
          { item: "Investigou o início da dor: súbito (acorda do sono) e ausência de trauma", score: 0.5, ref: "EAU/ESPU — Paediatric Urology, 2023" },
          { item: "Perguntou sobre febre e sintomas urinários (disúria, piúria) para exclusão de orquiepididimite", score: 0.5, ref: "EAU/ESPU, 2023" },
          { item: "Investigou episódios anteriores de dor escrotal transitória (torção intermitente)", score: 0.5, ref: "SBP — Escroto Agudo, 2021" },
          { item: "Perguntou sobre atividade sexual com privacidade (excluir IST como causa de orquiepididimite)", score: 0.3, ref: "ECA — Art. 17; EAU/ESPU, 2023" }
        ]
      },
      {
        h: "BLOCO 3 — EXAME FÍSICO",
        items: [
          { item: "Avaliou o sinal de Prehn (elevação do testículo não alivia a dor = negativo = torção)", score: 1.0, ref: "EAU/ESPU, 2023" },
          { item: "Avaliou o reflexo cremastérico ipsilateral e identificou sua ausência", score: 1.0, ref: "EAU/ESPU, 2023" },
          { item: "Identificou o testículo horizontalizado e em posição elevada na bolsa escrotal", score: 0.5, ref: "EAU/ESPU, 2023" }
        ]
      },
      {
        h: "BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO",
        items: [
          { item: "Formulou diagnóstico de torção testicular com base no quadro clínico típico", score: 1.0, ref: "EAU/ESPU, 2023" },
          { item: "Indicou exploração cirúrgica imediata SEM aguardar Doppler em quadro clínico típico", score: 1.0, ref: "EAU/ESPU, 2023; SBP, 2021" },
          { item: "Mencionou a janela de tempo para salvabilidade (< 6 horas = > 90%) para justificar a urgência", score: 0.5, ref: "EAU/ESPU, 2023" }
        ]
      },
      {
        h: "BLOCO 5 — CONDUTA E ORIENTAÇÃO AO PACIENTE",
        items: [
          { item: "Indicou analgesia imediata e acesso venoso enquanto prepara para cirurgia", score: 0.5, ref: "EAU/ESPU, 2023" },
          { item: "Mencionou a necessidade de orquidopexia bilateral (fixação do testículo contralateral)", score: 0.5, ref: "EAU/ESPU, 2023" },
          { item: "Não prescreveu antibiótico (ausência de processo infeccioso — conduta correta)", score: 0.7, ref: "EAU/ESPU, 2023" }
        ]
      }
    ]
  }
},



];
