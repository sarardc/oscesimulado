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
    }