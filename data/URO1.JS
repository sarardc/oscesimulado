const URO1stations = [
{
  id: 1,
  title: "Dor lombar intensa de início súbito há 2 horas",
  sub: "UPA — Urgência e Emergência",
  tema: "Urologia",
  topic: "Litíase ureteral",
  level: "moderado",
  cardAccent: "#E87040",

  instA: {
    scenario: "UPA — Urgência e Emergência. Sala de atendimento, turno diurno. Você é o médico plantonista.",
    patient: "R.M., 34 anos, masculino, motorista de aplicativo, sem comorbidades conhecidas.",
    complaint: "Dor na lombar direita muito forte, começou de repente há umas 2 horas e não passa.",
    tasks: [
      "Realize a anamnese dirigida ao caso",
      "Solicite e interprete os exames complementares pertinentes",
      "Formule a hipótese diagnóstica principal e os diagnósticos diferenciais",
      "Proponha a conduta terapêutica imediata",
      "Oriente o paciente sobre diagnóstico, tratamento e sinais de alarme"
    ]
  },

  instB: {
    vitals: { PA: "148/92 mmHg", FC: "102 bpm", FR: "20 irpm", Tax: "36,8°C", Peso: "82 kg", Altura: "1,75 m", IMC: "26,8 kg/m²" },
    physicalGeneral: "Paciente em sofrimento moderado a intenso, agitado, sem posição de alívio. Fácies de dor. Hidratado, corado, anictérico, acianótico. Pele úmida pelo suor. Orientado e cooperativo.",
    physicalSeg: [
      "ABDOME: Plano, sem cicatrizes. Ruídos hidroaéreos presentes. Dor à palpação profunda no flanco direito sem defesa ou rigidez. Ausência de massa palpável. Sinal de Giordano positivo à direita.",
      "GENITOURINÁRIO: Genitália externa sem alterações. Sem dor à palpação suprapúbica.",
      "CARDIOVASCULAR: Bulhas rítmicas, normofonéticas, sem sopros. Pulsos periféricos cheios e simétricos.",
      "RESPIRATÓRIO: Murmúrio vesicular presente bilateralmente, sem ruídos adventícios."
    ],
    labs: [
      { test: "Ureia", val: "38 mg/dL", ref: "15–40 mg/dL", alt: false },
      { test: "Creatinina", val: "1,1 mg/dL", ref: "0,7–1,2 mg/dL", alt: false },
      { test: "Sódio", val: "138 mEq/L", ref: "136–145 mEq/L", alt: false },
      { test: "Potássio", val: "4,0 mEq/L", ref: "3,5–5,0 mEq/L", alt: false },
      { test: "Leucócitos", val: "11.200/mm³", ref: "4.000–11.000/mm³", alt: true },
      { test: "Hemoglobina", val: "14,8 g/dL", ref: "13,5–17,5 g/dL", alt: false },
      { test: "EQU — Hematúria", val: "+++ (microscópica)", ref: "Ausente", alt: true },
      { test: "EQU — Leucocitúria", val: "Ausente", ref: "Ausente", alt: false },
      { test: "EQU — Nitrito", val: "Negativo", ref: "Negativo", alt: false },
      { test: "EQU — pH", val: "5,5", ref: "4,5–8,0", alt: false }
    ],
    image: "Ultrassonografia de vias urinárias: Rim direito com dimensões aumentadas (13,2 cm), presença de hidronefrose grau II. Ureter proximal direito dilatado. Imagem hiperecogênica com sombra acústica posterior medindo 6 mm em ureter proximal direito, compatível com cálculo ureteral. Rim esquerdo de dimensões e ecotextura normais, sem dilatação pielocalicial. Bexiga com volume adequado, sem espessamento de parede ou imagens intraluminais.",
    note: "Entregar impresso de sinais vitais e exame físico no início da estação. Entregar exames laboratoriais somente se solicitados verbalmente pelo candidato. Entregar laudo de imagem somente se candidato solicitar USG ou TC de vias urinárias. Caso o candidato solicite TC sem contraste de abdome e pelve, considerar como exame de escolha e fornecer laudo de USG como substituto (contexto de UPA sem TC disponível no momento — informar ao candidato se questionado).",
    patientProfile: "R.M., 34 anos, masculino. Motorista de aplicativo. Casado, dois filhos. Mora em casa própria. Sem plano de saúde.",
    script: [
      { trigger: "Queixa principal", speech: "Doutor, tô com uma dor absurda aqui nas costas do lado direito. Começou do nada, fui buscar uma corrida e de repente deu essa dor. Não consigo achar jeito nenhum que melhore." },
      { trigger: "Sobre caracterização da dor", speech: "É uma cólica, doutor. Vai e volta, mas quando vem é demais. Umas 8, 9 de 10. Parece que tá torcendo por dentro." },
      { trigger: "Sobre irradiação da dor", speech: "A dor começa aqui nas costas e às vezes desce pra virilha, até o saco às vezes." },
      { trigger: "Sobre sintomas urinários", speech: "Fui tentar urinar na UPA mas saiu pouquinho. Vi uma manchinha de sangue na hora de limpar, me assustei." },
      { trigger: "Sobre febre e calafrios", speech: "Não tô com febre não, mas tô com muito suor." },
      { trigger: "Sobre episódio anterior", speech: "Tive uma coisa parecida uns dois anos atrás, mas passou sozinho depois de um dia. Nunca fui ao médico pra ver." },
      { trigger: "Sobre alimentação e hidratação", speech: "Bebo pouca água mesmo, doutor. Fico o dia inteiro no carro e acabo esquecendo." },
      { trigger: "Sobre medicamentos e alergias", speech: "Não tomo remédio nenhum. Alergia nunca tive não." },
      { trigger: "Pergunta ativa — diagnóstico", speech: "O que que eu tenho, doutor? É grave? Vou precisar de cirurgia?" },
      { trigger: "Pergunta ativa — retorno", speech: "Preciso ficar internado? Porque tenho corrida marcada amanhã cedo..." }
    ],
    hiddenInfo: [
      "Histórico familiar: pai teve pedra no rim aos 40 anos e precisou de cirurgia — revelar apenas se candidato perguntar sobre histórico familiar.",
      "Dieta rica em proteína animal e sal (come fast food quase diariamente) — revelar apenas se candidato perguntar sobre hábitos alimentares de forma direcionada."
    ],
    actorBehavior: "Paciente agitado, visivelmente em dor, não consegue ficar parado. Tom de voz tensa. Cooperativo com perguntas, mas impaciente se o médico demorar. Fica mais calmo à medida que o candidato demonstra segurança e explica o que está fazendo. Ao final, demonstra preocupação com o trabalho e as finanças."
  },

  instC: {
    diagnosis: "Cólica nefrética direita por cálculo ureteral proximal de 6 mm com hidronefrose grau II. Ausência de sinais de infecção associada.",
    differentials: [
      "Pielonefrite aguda — incluída pela dor lombar, leucocitose e sinal de Giordano positivo; excluída pela ausência de febre, leucocitúria e nitrito negativos no EQU.",
      "Apendicite aguda — incluída pela dor em flanco/fossa ilíaca direita; excluída pelo caráter cólico da dor, irradiação para genitália e ausência de defesa abdominal.",
      "Dissecção de aorta — incluída pela dor lombar intensa e de início súbito; excluída por paciente jovem, pulsos simétricos, sem dor torácica e achados de imagem compatíveis com litíase."
    ],
    context: "Homem jovem, com baixa ingesta hídrica, dieta hipercalórica e história familiar positiva para nefrolitíase, que apresenta cólica nefrética típica por cálculo ureteral proximal direito de 6 mm com hidronefrose grau II e hematúria microscópica. Quadro sem sinais de infecção ou anúria. Contexto clínico e epidemiológico altamente sugestivo de nefrolitíase por oxalato de cálcio.",
    justify: "A tríade clássica dor lombar em cólica com irradiação para genitália + hematúria + Giordano positivo é altamente sugestiva de cólica nefrética. O cálculo de 6 mm em ureter proximal com hidronefrose grau II confirma o diagnóstico por imagem. A ausência de febre, leucocitúria e nitrito afasta pielonefrite. A leucocitose discreta é esperada como resposta ao estresse doloroso. Epidemiologia compatível: sexo masculino, 30–40 anos, baixa ingesta hídrica, dieta hiperproteica, história familiar positiva.",
    expectedAnamnesis: [
      "Caracterização da dor: início, localização, irradiação, intensidade, caráter, fatores de melhora/piora",
      "Sintomas urinários associados: hematúria, disúria, polaciúria, retenção urinária",
      "Febre e calafrios (afastar infecção)",
      "Náuseas e vômitos (sintomas autonômicos associados)",
      "Episódios anteriores semelhantes",
      "Histórico familiar de litíase renal",
      "Ingesta hídrica habitual",
      "Hábitos alimentares (dieta hiperproteica, rica em sódio, oxalato)",
      "Uso de medicamentos (ex: topiramato, indinavir, furosemida) e alergias",
      "Profissão e condições de trabalho (exposição ao calor, desidratação)"
    ],
    expectedPhysical: [
      "Sinais vitais: taquicardia reflexa pela dor, PA levemente elevada, afebril — esperado",
      "Inspeção: agitação psicomotora, fácies de dor, sudorese",
      "Palpação: dor à palpação profunda do flanco direito, ausência de defesa ou rigidez (afasta peritonite)",
      "Percussão: Sinal de Giordano (punho-percussão lombar) — positivo à direita. Técnica: punho fechado percute a loja renal posterior com o paciente sentado ou de pé",
      "Ausculta: ruídos hidroaéreos presentes (afasta íleo)",
      "Genitourinário: inspeção da genitália externa, palpação suprapúbica (afastar globo vesical)"
    ],
    expectedExams: [
      { exam: "EQU (urinálise)", justify: "Hematúria sugere litíase; leucocitúria e nitrito afastam infecção", expected: "Hematúria +++, leucocitúria ausente, nitrito negativo" },
      { exam: "Creatinina e ureia", justify: "Avaliar função renal e obstrução", expected: "Normais" },
      { exam: "Hemograma", justify: "Afastar leucocitose por infecção", expected: "Leucocitose leve (estresse), sem desvio" },
      { exam: "USG de vias urinárias", justify: "Primeira escolha em UPA; detecta hidronefrose e cálculo", expected: "Hidronefrose grau II, cálculo 6 mm em ureter proximal D" },
      { exam: "TC sem contraste de abdome e pelve", justify: "Padrão ouro para cálculos; sensibilidade >95%", expected: "Confirmaria o cálculo e sua exata localização" }
    ],
    expectedConduct: [
      "Farmacológica: Anti-inflamatório não esteroidal (AINE) — diclofenaco 75 mg IM ou cetoprofeno 100 mg IV como primeira linha para analgesia na cólica nefrética (Protocolo MS/SUS). Pode associar dipirona 1g IV se dor persistente. Evitar opioides como primeira linha. Ondansetrona 4 mg IV se vômitos. Tamsulosina 0,4 mg VO 1x/dia (terapia expulsiva para cálculo ≤10 mm). Hidratação venosa moderada se vômitos.",
      "Não farmacológica: Repouso relativo durante a crise. Aumentar ingesta hídrica para 2,5–3 L/dia após resolução da crise. Orientar filtrar a urina para capturar o cálculo para análise.",
      "Encaminhamento: Encaminhamento para Urologia ambulatorial após resolução da crise aguda. Indicação de avaliação urológica de urgência se: anúria, febre (sinais de pionefrólise), rim único, cálculo bilateral, dor refratária.",
      "Orientações ao paciente: Explicar que é uma pedra no rim que está tentando sair pelo canal; a maioria dos cálculos de até 6 mm sai espontaneamente; beber bastante água; filtrar urina; retornar imediatamente se febre, parar de urinar ou dor que não cede com remédio.",
      "Seguimento: Retorno em 48–72 horas ou antes se sinais de alarme. Encaminhamento para Urologia em até 2 semanas para investigação metabólica e prevenção de recorrência."
    ],
    expectedCommunication: [
      "Apresentação: Apresentar-se pelo nome, perguntar como pode ajudar, demonstrar atenção à dor do paciente.",
      "Comunicação do diagnóstico: Informar em linguagem acessível que há uma pedra no canal que liga o rim à bexiga, causando a dor intensa; tranquilizar que o quadro tem tratamento e que a pedra tem bom potencial de saída espontânea.",
      "Escuta ativa: Reconhecer a intensidade da dor e o impacto no trabalho; não minimizar a queixa; perguntar se o paciente entendeu as orientações."
    ],
    criticalErrors: [
      "Não solicitar EQU — perde hematúria e não afasta infecção urinária associada",
      "Prescrever antibiótico sem evidência de infecção (ausência de febre, leucocitúria e nitrito negativo)",
      "Não avaliar função renal antes de prescrever AINE em paciente com suspeita de obstrução",
      "Liberar o paciente sem orientar sinais de alarme (febre, anúria, dor refratária)",
      "Não realizar ou não interpretar o sinal de Giordano"
    ]
  },

  instD: {
    title: "CHECKLIST — DOR LOMBAR INTENSA DE INÍCIO SÚBITO HÁ 2 HORAS",
    sections: [
      {
        h: "BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
        items: [
          { item: "Apresentou-se pelo nome ao paciente", score: 0.5, ref: "CFM, Código de Ética Médica, 2019" },
          { item: "Demonstrou reconhecimento da dor do paciente verbalmente (\"entendo que está com muita dor\")", score: 0.5, ref: "CNRM, Competências Comunicação Médica, 2021" },
          { item: "Perguntou se o paciente tinha dúvidas ao final da consulta", score: 0.5, ref: "MS, Política Nacional de Humanização, 2013" }
        ]
      },
      {
        h: "BLOCO 2 — ANAMNESE",
        items: [
          { item: "Investigou localização, caráter e irradiação da dor", score: 1.0, ref: "SBU, Diretrizes de Nefrolitíase, 2022" },
          { item: "Perguntou sobre hematúria macroscópica ou microscópica", score: 1.0, ref: "SBU, Diretrizes de Nefrolitíase, 2022" },
          { item: "Perguntou sobre febre e calafrios (rastreio de infecção)", score: 0.5, ref: "SBU, Diretrizes de Nefrolitíase, 2022" },
          { item: "Investigou episódios anteriores semelhantes", score: 0.5, ref: "SBU, Diretrizes de Nefrolitíase, 2022" },
          { item: "Perguntou sobre histórico familiar de litíase renal", score: 0.5, ref: "SBU, Diretrizes de Nefrolitíase, 2022" },
          { item: "Investigou ingesta hídrica e hábitos alimentares", score: 0.5, ref: "MS, Caderno de Atenção Básica — Nefrologia, 2019" }
        ]
      },
      {
        h: "BLOCO 3 — EXAME FÍSICO",
        items: [
          { item: "Avaliou sinais vitais com destaque para febre e taquicardia", score: 0.5, ref: "SBU, Diretrizes de Nefrolitíase, 2022" },
          { item: "Realizou palpação do abdome pesquisando defesa e rigidez", score: 0.5, ref: "SBU, Diretrizes de Nefrolitíase, 2022" },
          { item: "Realizou sinal de Giordano (punho-percussão lombar bilateral) e interpretou corretamente", score: 1.0, ref: "SBU, Diretrizes de Nefrolitíase, 2022" }
        ]
      },
      {
        h: "BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO",
        items: [
          { item: "Formulou hipótese diagnóstica de cólica nefrética / litíase ureteral", score: 1.0, ref: "SBU, Diretrizes de Nefrolitíase, 2022" },
          { item: "Solicitou EQU (urinálise)", score: 0.5, ref: "SBU, Diretrizes de Nefrolitíase, 2022" },
          { item: "Solicitou creatinina/ureia para avaliação de função renal", score: 0.5, ref: "SBU, Diretrizes de Nefrolitíase, 2022" },
          { item: "Solicitou exame de imagem de vias urinárias (USG ou TC sem contraste)", score: 0.5, ref: "SBU, Diretrizes de Nefrolitíase, 2022" }
        ]
      },
      {
        h: "BLOCO 5 — CONDUTA E ORIENTAÇÃO AO PACIENTE",
        items: [
          { item: "Prescreveu AINE (diclofenaco ou cetoprofeno) como analgesia de primeira linha", score: 1.0, ref: "MS/SUS, Protocolo de Dor Aguda em Urgência, 2020" },
          { item: "Orientou aumento da ingesta hídrica (2,5–3 L/dia)", score: 0.5, ref: "SBU, Diretrizes de Nefrolitíase, 2022" },
          { item: "Orientou sinais de alarme para retorno imediato (febre, anúria, dor refratária)", score: 0.5, ref: "SBU, Diretrizes de Nefrolitíase, 2022" }
        ]
      }
    ]
  }
},

{
  id: 2,
  title: "Mulher com dor lombar e queimação ao urinar há 4 dias",
  sub: "UBS — Atenção Primária",
  tema: "Urologia",
  topic: "Infecção do trato urinário superior — pielonefrite aguda",
  level: "moderado",
  cardAccent: "#D04E6B",

  instA: {
    scenario: "UBS — Atenção Primária. Consultório médico, turno matutino. Você é o médico de família da unidade.",
    patient: "C.A., 28 anos, feminino, professora do ensino fundamental, sem comorbidades conhecidas.",
    complaint: "Dor nas costas e ardência para urinar há 4 dias, com febre desde ontem.",
    tasks: [
      "Realize a anamnese dirigida ao caso",
      "Realize o exame físico pertinente",
      "Solicite e interprete os exames complementares adequados",
      "Estabeleça a hipótese diagnóstica e os diagnósticos diferenciais",
      "Proponha a conduta e oriente a paciente sobre tratamento e seguimento"
    ]
  },

  instB: {
    vitals: { PA: "108/70 mmHg", FC: "108 bpm", FR: "18 irpm", Tax: "38,6°C", Peso: "62 kg", Altura: "1,63 m", IMC: "23,3 kg/m²" },
    physicalGeneral: "Paciente em bom estado geral relativo, corada, hidratada, anictérica, acianótica. Febril ao toque. Orientada, comunicativa, com expressão de desconforto.",
    physicalSeg: [
      "ABDOME: Plano, sem cicatrizes. Ruídos hidroaéreos presentes e normais. Dor à palpação profunda em flanco esquerdo. Sem defesa, rigidez ou sinais de irritação peritoneal. Sem massas palpáveis.",
      "GENITOURINÁRIO: Sem dor à palpação suprapúbica. Região perineal sem lesões visíveis.",
      "LOMBAR: Sinal de Giordano positivo à esquerda, negativo à direita.",
      "CARDIOVASCULAR: Bulhas rítmicas, normofonéticas, sem sopros.",
      "RESPIRATÓRIO: Murmúrio vesicular presente bilateralmente, sem ruídos adventícios."
    ],
    labs: [
      { test: "Leucócitos", val: "16.400/mm³", ref: "4.000–11.000/mm³", alt: true },
      { test: "Neutrófilos", val: "82% (com desvio à esquerda)", ref: "50–70%", alt: true },
      { test: "Hemoglobina", val: "12,9 g/dL", ref: "12,0–16,0 g/dL", alt: false },
      { test: "Plaquetas", val: "278.000/mm³", ref: "150.000–400.000/mm³", alt: false },
      { test: "Creatinina", val: "0,9 mg/dL", ref: "0,5–1,1 mg/dL", alt: false },
      { test: "Ureia", val: "28 mg/dL", ref: "15–40 mg/dL", alt: false },
      { test: "PCR", val: "48 mg/L", ref: "< 5 mg/L", alt: true },
      { test: "EQU — Leucocitúria", val: "+++", ref: "Ausente", alt: true },
      { test: "EQU — Nitrito", val: "Positivo", ref: "Negativo", alt: true },
      { test: "EQU — Hematúria", val: "+", ref: "Ausente", alt: true },
      { test: "EQU — Proteína", val: "+", ref: "Ausente", alt: true },
      { test: "Urocultura", val: "Pendente (aguardando resultado)", ref: "—", alt: false }
    ],
    image: "Ultrassonografia de vias urinárias: Rim esquerdo com dimensões levemente aumentadas (12,8 cm), ecotextura heterogênea, edema do seio renal. Sem imagens hiperecogênicas sugestivas de cálculo. Sem hidronefrose. Rim direito com dimensões e ecotextura normais. Bexiga sem alterações. Exame compatível com processo inflamatório/infeccioso renal à esquerda.",
    note: "Entregar sinais vitais e exame físico ao início da estação. Entregar exames laboratoriais somente se solicitados pelo candidato. Entregar laudo de USG somente se solicitado. A urocultura está pendente — informar ao candidato que o resultado sai em 48–72 horas. Caso candidato solicite TC, informar que não está disponível na UBS e que USG foi solicitada.",
    patientProfile: "C.A., 28 anos, feminino. Professora do ensino fundamental. Solteira. Mora com a mãe.",
    script: [
      { trigger: "Queixa principal", speech: "Doutora, tô com umas dores horríveis nas costas do lado esquerdo e uma queimação terrível quando faço xixi. Começou há uns 4 dias, mas ontem apareceu febre e aí resolvi vir." },
      { trigger: "Sobre os sintomas urinários", speech: "Tô indo muito mais no banheiro que o normal, sai pouquinho e queima muito. Às vezes parece que não esvaziou direito." },
      { trigger: "Sobre a febre", speech: "Ontem à noite chegou a 38,8. Tomei dipirona, baixou um pouco, mas voltou." },
      { trigger: "Sobre início dos sintomas urinários", speech: "Primeiro foi só queimação pra urinar, sem febre. Fui na farmácia, me deram um negócio de cranberry, mas não melhorou." },
      { trigger: "Sobre dor lombar", speech: "A dor é nas costas, do lado esquerdo. Não desce pra virilha não. É constante, não é em cólica." },
      { trigger: "Sobre atividade sexual", speech: "Sim, tenho parceiro fixo. Usamos camisinha às vezes..." },
      { trigger: "Sobre higiene", speech: "Me limpo sempre da frente pra trás." },
      { trigger: "Sobre gravidez", speech: "Não, com certeza não tô grávida, tô menstruada há uma semana." },
      { trigger: "Pergunta ativa — diagnóstico", speech: "É infecção mesmo, doutora? Precisa de remédio forte?" },
      { trigger: "Pergunta ativa — retorno", speech: "Vou precisar ficar em casa? Tenho aula pra dar amanhã." }
    ],
    hiddenInfo: [
      "Teve ITU baixa há 6 meses, tratada com nitrofurantoína por 5 dias — revelar apenas se candidato perguntar sobre episódios anteriores de ITU.",
      "Usa diafragma como método contraceptivo adicional — revelar apenas se candidato perguntar especificamente sobre métodos contraceptivos ou fatores de risco para ITU."
    ],
    actorBehavior: "Paciente ansiosa, um pouco envergonhada ao falar sobre vida sexual. Cooperativa com a anamnese. Demonstra preocupação com o trabalho e resistência à ideia de afastamento. Fica mais tranquila quando o médico explica o diagnóstico com clareza."
  },

  instC: {
    diagnosis: "Pielonefrite aguda não complicada à esquerda em mulher jovem imunocompetente.",
    differentials: [
      "Cistite aguda complicada — incluída pelos sintomas urinários baixos; excluída pela presença de febre alta, Giordano positivo e leucocitose com desvio à esquerda, indicando comprometimento do trato superior.",
      "Cólica nefrética com infecção secundária — incluída pela dor lombar e hematúria; excluída pelo caráter contínuo (não cólico) da dor, ausência de imagem de cálculo ao USG e temperatura elevada desde o início.",
      "Apendicite aguda — incluída pela dor abdominal e febre; excluída pela localização da dor (flanco esquerdo), sintomas urinários predominantes e Giordano positivo à esquerda."
    ],
    context: "Mulher jovem, sexualmente ativa, com fatores de risco para ITU recorrente (uso de diafragma, ITU prévia), apresentando quadro de ITU baixa não tratada adequadamente que evoluiu para pielonefrite aguda esquerda, confirmada pela tríade febre + dor lombar + EQU com leucocitúria e nitrito positivos. Função renal preservada, sem critérios de internação.",
    justify: "A tríade clássica de pielonefrite — febre > 38°C, dor lombar com Giordano positivo e sintomas urinários — está presente. O EQU confirma o processo infeccioso (leucocitúria +++, nitrito positivo, hematúria). O hemograma evidencia resposta inflamatória sistêmica (leucocitose com desvio à esquerda). O USG afasta litíase e obstrução. Critérios de internação ausentes: sem vômitos incoercíveis, sem sinais de sepse, função renal normal, paciente capaz de tomar medicação oral.",
    expectedAnamnesis: [
      "Sintomas urinários baixos: disúria, polaciúria, urgência, sensação de esvaziamento incompleto",
      "Febre: início, temperatura máxima, resposta a antitérmicos",
      "Dor lombar: localização, caráter (contínua x cólica), irradiação",
      "Náuseas e vômitos (critério para internação se incoercíveis)",
      "Episódios anteriores de ITU e tratamentos realizados",
      "Vida sexual ativa, métodos contraceptivos, higiene íntima",
      "Possibilidade de gravidez (teste de gravidez se dúvida)",
      "Uso de antibióticos recentes (risco de resistência)",
      "Alergias medicamentosas",
      "Imunossupressão, diabetes, anomalias urológicas (fatores de complicação)"
    ],
    expectedPhysical: [
      "Sinais vitais: febre, taquicardia — esperados; PA e FR para afastar sepse",
      "Inspeção: estado geral, hidratação, fácies",
      "Palpação: dor em flanco esquerdo; ausência de defesa (afasta peritonite); palpação suprapúbica (afastar cistite isolada com dor suprapúbica)",
      "Giordano bilateral: positivo à esquerda — técnica: punho-percussão posterior sobre a loja renal com paciente sentado; diferencia ITU alta de baixa",
      "Afastar sinais de sepse: rebaixamento de consciência, hipotensão, taquicardia intensa"
    ],
    expectedExams: [
      { exam: "EQU (urinálise)", justify: "Confirmar infecção; leucocitúria + nitrito diagnósticos", expected: "Leucocitúria +++, nitrito +, hematúria +" },
      { exam: "Urocultura com antibiograma", justify: "Identificar agente e sensibilidade; orientar ajuste de antibiótico", expected: "E. coli (agente mais frequente) — resultado em 48–72h" },
      { exam: "Hemograma", justify: "Avaliar resposta inflamatória sistêmica", expected: "Leucocitose com desvio à esquerda" },
      { exam: "Creatinina e ureia", justify: "Avaliar função renal antes de prescrever antibiótico nefrotóxico", expected: "Normais" },
      { exam: "PCR", justify: "Marcador inflamatório sistêmico", expected: "Elevado" },
      { exam: "USG de vias urinárias", justify: "Afastar obstrução (litíase, hidronefrose) que exigiria drenagem", expected: "Sem cálculo, sem hidronefrose; edema renal" },
      { exam: "Teste de gravidez (beta-hCG)", justify: "Mulher em idade fértil — gestação altera conduta antibiótica", expected: "Negativo (menstruada há 1 semana, mas confirmar)" }
    ],
    expectedConduct: [
      "Farmacológica (ambulatorial): Ciprofloxacino 500 mg VO 12/12h por 7 dias — primeira escolha para pielonefrite não complicada ambulatorial conforme Protocolo MS/SBU (verificar perfil de resistência local). Alternativa: cefalexina 500 mg 6/6h por 10–14 dias se intolerância a quinolona. Dipirona 500 mg VO 6/6h se dor ou febre. Aguardar resultado de urocultura e ajustar antibiótico se necessário. Nitrofurantoína é CONTRAINDICADA para pielonefrite (não atinge concentração adequada no parênquima renal).",
      "Critérios de internação (ausentes neste caso): vômitos incoercíveis, sepse, pielonefrite em gestante, imunossuprimida, obstrução urinária, falha ambulatorial.",
      "Não farmacológica: Hidratação oral generosa (2–3 L/dia). Repouso relativo. Higiene perineal adequada (frente para trás).",
      "Encaminhamento: Não necessário no momento. Encaminhar à Urologia se falha terapêutica em 72h ou ITU de repetição (≥2 episódios/ano).",
      "Orientações ao paciente: Explicar que é uma infecção que chegou ao rim; é mais sério que infecção de bexiga mas tem cura com antibiótico correto; tomar todos os dias até terminar o tratamento mesmo se melhorar antes; retornar em 48–72h ou antes se piorar (febre alta, vômitos, muita dor).",
      "Seguimento: Retorno em 48–72h para reavaliação clínica e resultado de urocultura. EQU de controle após término do tratamento."
    ],
    expectedCommunication: [
      "Apresentação: Apresentar-se, oferecer assento, demonstrar atenção.",
      "Comunicação do diagnóstico: Explicar em linguagem simples que a infecção começou na bexiga e subiu para o rim; tranquilizar que tem cura com o antibiótico correto; explicar por que precisa tomar o remédio até o fim.",
      "Escuta ativa: Abordar o tema de atividade sexual com respeito e sem julgamento; validar preocupação com o trabalho; orientar sobre uso do diafragma como fator de risco."
    ],
    criticalErrors: [
      "Prescrever nitrofurantoína para pielonefrite aguda (contraindicada — não atinge nível terapêutico no parênquima renal)",
      "Não solicitar urocultura antes de iniciar antibiótico",
      "Não avaliar critérios de internação (vômitos, sepse, gestação, obstrução)",
      "Não realizar sinal de Giordano ou não diferenciá-lo da cistite isolada",
      "Não orientar retorno em 48–72h com resultado de urocultura para ajuste de antibiótico"
    ]
  },

  instD: {
    title: "CHECKLIST — MULHER COM DOR LOMBAR E QUEIMAÇÃO AO URINAR HÁ 4 DIAS",
    sections: [
      {
        h: "BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
        items: [
          { item: "Apresentou-se pelo nome à paciente", score: 0.5, ref: "CFM, Código de Ética Médica, 2019" },
          { item: "Abordou o tema de atividade sexual de forma respeitosa e sem julgamento", score: 0.5, ref: "MS, Política Nacional de Humanização, 2013" },
          { item: "Perguntou se a paciente tinha dúvidas ao final da consulta", score: 0.5, ref: "CNRM, Competências Comunicação Médica, 2021" }
        ]
      },
      {
        h: "BLOCO 2 — ANAMNESE",
        items: [
          { item: "Investigou sintomas urinários baixos (disúria, polaciúria, urgência)", score: 0.5, ref: "SBU / MS, Protocolo ITU, 2022" },
          { item: "Perguntou sobre febre (temperatura e duração)", score: 0.5, ref: "SBU / MS, Protocolo ITU, 2022" },
          { item: "Investigou episódios anteriores de ITU e tratamentos realizados", score: 0.5, ref: "SBU / MS, Protocolo ITU, 2022" },
          { item: "Perguntou sobre vida sexual, método contraceptivo e higiene íntima", score: 0.5, ref: "SBU / MS, Protocolo ITU, 2022" },
          { item: "Perguntou sobre possibilidade de gravidez", score: 0.5, ref: "SBU / MS, Protocolo ITU, 2022" },
          { item: "Perguntou sobre alergias medicamentosas", score: 0.5, ref: "CFM, Código de Ética Médica, 2019" }
        ]
      },
      {
        h: "BLOCO 3 — EXAME FÍSICO",
        items: [
          { item: "Avaliou temperatura (confirmou febre) e taquicardia", score: 0.5, ref: "SBU / MS, Protocolo ITU, 2022" },
          { item: "Realizou palpação do abdome pesquisando defesa, rigidez e dor suprapúbica", score: 0.5, ref: "SBU / MS, Protocolo ITU, 2022" },
          { item: "Realizou sinal de Giordano bilateral e interpretou corretamente (positivo à esquerda)", score: 1.0, ref: "SBU / MS, Protocolo ITU, 2022" }
        ]
      },
      {
        h: "BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO",
        items: [
          { item: "Formulou hipótese diagnóstica de pielonefrite aguda (e não apenas cistite)", score: 1.0, ref: "SBU / MS, Protocolo ITU, 2022" },
          { item: "Solicitou EQU (urinálise)", score: 0.5, ref: "SBU / MS, Protocolo ITU, 2022" },
          { item: "Solicitou urocultura com antibiograma antes de iniciar antibiótico", score: 1.0, ref: "SBU / MS, Protocolo ITU, 2022" },
          { item: "Avaliou critérios de internação (vômitos, sepse, obstrução, gestação)", score: 0.5, ref: "SBU / MS, Protocolo ITU, 2022" }
        ]
      },
      {
        h: "BLOCO 5 — CONDUTA E ORIENTAÇÃO AO PACIENTE",
        items: [
          { item: "Prescreveu antibiótico adequado para pielonefrite (ciprofloxacino ou cefalosporina) e NÃO prescreveu nitrofurantoína", score: 1.0, ref: "SBU / MS, Protocolo ITU, 2022" },
          { item: "Orientou hidratação oral generosa e adesão ao tratamento até o fim", score: 0.5, ref: "SBU / MS, Protocolo ITU, 2022" },
          { item: "Orientou retorno em 48–72h com resultado de urocultura para reavaliação", score: 0.5, ref: "SBU / MS, Protocolo ITU, 2022" }
        ]
      }
    ]
  }
},


{
  id: 3,
  title: "Homem de 52 anos com cólica lombar recorrente e cálculo conhecido",
  sub: "Ambulatório de Urologia — Atenção Secundária",
  tema: "Urologia",
  topic: "Litíase renal — cálculo coraliforme / indicação cirúrgica",
  level: "moderado",
  cardAccent: "#5B7FD4",

  instA: {
    scenario: "Ambulatório de Urologia — Atenção Secundária. Consultório, turno matutino. Você é o médico urologista assistente.",
    patient: "J.O., 52 anos, masculino, agricultor, hipertenso em uso de losartana 50 mg/dia.",
    complaint: "Retorno de consulta: trouxe os exames solicitados na última consulta. Tem tido crises de dor lombar esquerda frequentes nos últimos 6 meses.",
    tasks: [
      "Realize a anamnese do seguimento clínico do paciente",
      "Interprete os exames complementares apresentados",
      "Estabeleça a conduta adequada com base nos achados",
      "Explique ao paciente a necessidade de intervenção e as opções disponíveis",
      "Oriente sobre prevenção de recorrência e seguimento"
    ]
  },

  instB: {
    vitals: { PA: "142/88 mmHg", FC: "78 bpm", FR: "16 irpm", Tax: "36,5°C", Peso: "91 kg", Altura: "1,72 m", IMC: "30,8 kg/m²" },
    physicalGeneral: "Paciente em bom estado geral, corado, hidratado, anictérico, acianótico, afebril. Sem sinais de sofrimento agudo. Orientado e cooperativo.",
    physicalSeg: [
      "ABDOME: Globoso (obesidade). Ruídos hidroaéreos normais. Sem dor à palpação. Sinal de Giordano negativo bilateralmente na consulta atual (fora de crise).",
      "LOMBAR: Sem dor à punho-percussão bilateral no momento.",
      "CARDIOVASCULAR: Bulhas rítmicas, normofonéticas, sem sopros. Pulsos periféricos presentes e simétricos."
    ],
    labs: [
      { test: "Creatinina", val: "1,4 mg/dL", ref: "0,7–1,2 mg/dL", alt: true },
      { test: "Ureia", val: "52 mg/dL", ref: "15–40 mg/dL", alt: true },
      { test: "TFG estimada (CKD-EPI)", val: "54 mL/min/1,73m²", ref: "> 60 mL/min/1,73m²", alt: true },
      { test: "Sódio", val: "139 mEq/L", ref: "136–145 mEq/L", alt: false },
      { test: "Potássio", val: "4,6 mEq/L", ref: "3,5–5,0 mEq/L", alt: false },
      { test: "Cálcio sérico", val: "10,8 mg/dL", ref: "8,5–10,5 mg/dL", alt: true },
      { test: "Ácido úrico", val: "7,2 mg/dL", ref: "< 7,0 mg/dL", alt: true },
      { test: "EQU — pH urinário", val: "5,2", ref: "4,5–8,0", alt: false },
      { test: "EQU — Hematúria", val: "+", ref: "Ausente", alt: true },
      { test: "EQU — Leucocitúria", val: "Ausente", ref: "Ausente", alt: false },
      { test: "Citrato urinário 24h", val: "180 mg/dia", ref: "> 320 mg/dia", alt: true },
      { test: "Cálcio urinário 24h", val: "380 mg/dia", ref: "< 300 mg/dia", alt: true }
    ],
    image: "Tomografia computadorizada sem contraste de abdome e pelve (uro-TC): Rim esquerdo com cálculo de 2,4 cm ocupando pelve renal e dois cálices maiores (configuração coraliforme parcial), com densidade de 1.100 UH (compatível com oxalato de cálcio). Hidronefrose grau I à esquerda. Rim direito com dois cálculos em cálice inferior medindo 4 mm e 6 mm, sem hidronefrose. Função excretora preservada bilateralmente. Ureter e bexiga sem alterações.",
    note: "Entregar sinais vitais e exame físico ao início da estação. Informar ao candidato que os exames foram solicitados na consulta anterior e que o paciente os trouxe em mãos — entregar o pacote de exames completo (labs + imagem) no início, como num ambulatório real. A uro-TC deve ser entregue como laudo impresso.",
    patientProfile: "J.O., 52 anos, masculino. Agricultor. Casado, três filhos adultos. Mora na zona rural. Hipertenso há 8 anos, em uso de losartana.",
    script: [
      { trigger: "Abertura da consulta", speech: "Bom dia, doutor. Trouxe todos os exames que o senhor pediu. Fiz tudo certinho. Continuei tendo umas dores nas costas do lado esquerdo, umas 3, 4 vezes no mês." },
      { trigger: "Sobre as crises de dor", speech: "É uma cólica forte, dura umas 2, 3 horas. Tomo dipirona e passa. Mas tô cansado dessa dor toda semana." },
      { trigger: "Sobre sintomas urinários", speech: "Às vezes vejo o xixi meio avermelhado quando tô com dor. Sem ardência nem febre." },
      { trigger: "Sobre ingesta hídrica", speech: "Bebo pouca água, doutor. No sol quente do roçado, a gente sua muito e esquece de beber." },
      { trigger: "Sobre alimentação", speech: "Como de tudo. Muito feijão, carne de boi quase todo dia. Sal bastante porque minha mulher tempera forte." },
      { trigger: "Sobre o rim direito", speech: "O senhor falou que tinha umas pedrinha no rim direito também, mas lá não doi nada." },
      { trigger: "Pergunta ativa — cirurgia", speech: "Vai precisar tirar com cirurgia, doutor? Tenho medo de cirurgia, nunca fiz nenhuma." },
      { trigger: "Pergunta ativa — gravidade", speech: "Isso tá afetando meu rim? Pode parar de funcionar?" }
    ],
    hiddenInfo: [
      "Usa hidroclorotiazida esporadicamente \"quando a pressão sobe muito\" além da losartana, sem prescrição — revelar apenas se candidato perguntar detalhadamente sobre medicamentos em uso.",
      "Já fez uma litotricia extracorpórea há 3 anos para cálculo contralateral, com sucesso — revelar apenas se candidato perguntar sobre tratamentos anteriores para litíase."
    ],
    actorBehavior: "Paciente calmo, colaborativo, mas visivelmente preocupado com a possibilidade de cirurgia. Tem vocabulário simples. Demonstra dificuldade em entender termos médicos — precisa de explicações acessíveis. Quando bem orientado, demonstra alívio e cooperação."
  },

  instC: {
    diagnosis: "Nefrolitíase esquerda com cálculo coraliforme parcial de 2,4 cm (oxalato de cálcio) com hidronefrose grau I e repercussão sobre função renal (DRC estágio G3a). Hipercalciúria e hipocitratúria como fatores metabólicos identificados. Cálculos contralaterais assintomáticos à direita.",
    differentials: [
      "Hiperparatireoidismo primário — incluído pela hipercalcemia e hipercalciúria associadas à litíase recorrente; deve ser investigado com PTH sérico — não é diagnóstico diferencial de exclusão, é comorbidade a ser rastreada.",
      "Nefrocalcinose — incluída pela hipercalciúria e pH urinário baixo; excluída pela ausência de calcificações difusas no parênquima à TC.",
      "Acidose tubular renal tipo 1 — incluída pela hipocitratúria e litíase recorrente; excluída pelo pH urinário ácido (pH 5,2 afasta ATR tipo 1, que cursa com pH > 5,5 e hipopotassemia)."
    ],
    context: "Homem de meia-idade, agricultor, obeso, hipertenso, com dieta hiperproteica e hipossódica inadequada, baixa ingesta hídrica, que apresenta nefrolitíase recorrente bilateral com cálculo coraliforme parcial à esquerda causando crises de cólica, hematúria recorrente e início de disfunção renal. Perfil metabólico identificado: hipercalciúria + hipocitratúria + hiperuricemia. Quadro com indicação formal de intervenção cirúrgica.",
    justify: "O cálculo de 2,4 cm coraliforme parcial com hidronefrose grau I tem indicação cirúrgica formal — cálculos > 2 cm não têm resolução espontânea e causam obstrução progressiva (SBU 2022). A hipercalcemia (10,8 mg/dL) associada à hipercalciúria exige rastreio de hiperparatireoidismo (PTH). A hipocitratúria é fator de risco independente para litíase e deve ser corrigida. A TFG de 54 mL/min configura DRC G3a, possivelmente relacionada à obstrução crônica.",
    expectedAnamnesis: [
      "Frequência e características das crises de cólica",
      "Sintomas obstrutivos ou infecciosos intercorrentes",
      "Hematúria e suas características",
      "Ingesta hídrica quantificada",
      "Dieta: proteína animal, sal, alimentos ricos em oxalato (espinafre, beterraba, chocolate), vitamina C em excesso",
      "Medicamentos em uso completo (losartana, uso de diuréticos, suplementos)",
      "Histórico de tratamentos anteriores para litíase (litotricia, cirurgia)",
      "Histórico familiar de litíase, hiperparatireoidismo, gota",
      "Investigar sintomas de hiperparatireoidismo (polidipsia, fraqueza muscular, constipação)"
    ],
    expectedPhysical: [
      "Sinais vitais: PA elevada — relacionar ao hipertenso mal controlado",
      "Inspeção: obesidade abdominal — fator de risco metabólico",
      "Palpação: verificar ausência de dor lombar (fora de crise)",
      "Sinal de Giordano: negativo bilateralmente no momento (fora de crise) — documentar",
      "Avaliar edema de membros inferiores (rastreio de comprometimento renal)"
    ],
    expectedExams: [
      { exam: "TC sem contraste (uro-TC)", justify: "Padrão ouro para litíase; avaliar tamanho, densidade e localização", expected: "Cálculo 2,4 cm coraliforme parcial E, hidronefrose G I, cálculos 4–6 mm D" },
      { exam: "Creatinina + TFG", justify: "Avaliar repercussão renal da obstrução crônica", expected: "TFG 54 mL/min — DRC G3a" },
      { exam: "Cálcio sérico", justify: "Rastrear hipercalcemia / hiperparatireoidismo", expected: "10,8 mg/dL — hipercalcemia leve" },
      { exam: "PTH sérico", justify: "Investigar hiperparatireoidismo primário como causa", expected: "Indicado — resultado não disponível neste caso" },
      { exam: "Ácido úrico sérico", justify: "Avaliar hiperuricemia como fator de risco", expected: "7,2 mg/dL — levemente elevado" },
      { exam: "Citrato e cálcio urinários 24h", justify: "Identificar distúrbios metabólicos que predispõem à litíase", expected: "Hipercalciúria + hipocitratúria" },
      { exam: "EQU", justify: "Rastrear infecção e hematúria", expected: "Hematúria +, sem infecção" }
    ],
    expectedConduct: [
      "Intervenção cirúrgica: Indicação formal para cálculo coraliforme parcial > 2 cm. Primeira escolha: nefrolitotomia percutânea (NLP) para rim esquerdo (cálculo 2,4 cm). Alternativa: cirurgia aberta se NLP não disponível. Litotricia extracorpórea (LECO) é ineficaz para cálculo coraliforme — NÃO indicada como primeira escolha para este cálculo. Para cálculos direitos de 4–6 mm: conduta expectante com seguimento e terapia expulsiva se sintomático.",
      "Farmacológica metabólica: Citrato de potássio para hipocitratúria (20–40 mEq/dia VO) após avaliação renal. Avaliar alopurinol para hiperuricemia se indicado. Encaminhar para investigação de hiperparatireoidismo (PTH, vitamina D).",
      "Não farmacológica: Aumentar ingesta hídrica para > 2,5 L/dia. Reduzir proteína animal (< 0,8–1,0 g/kg/dia). Reduzir sódio da dieta (< 5 g/dia). Manter dieta normocalcêmica (não restringir cálcio — piora a litíase por oxalato). Controle do peso.",
      "Encaminhamento: Encaminhar para NLP em centro de referência urológica. Encaminhar para Nefrologia para manejo da DRC G3a. Solicitar PTH e vitamina D para rastreio de hiperparatireoidismo.",
      "Orientações ao paciente: Explicar em linguagem simples que a pedra grande no rim esquerdo precisa ser retirada com um procedimento porque não sairá sozinha; tranquilizar que é um procedimento eficaz e seguro; orientar sobre importância de beber mais água e mudar a dieta para prevenir novas pedras.",
      "Seguimento: Revisão pós-NLP em 4–6 semanas com imagem de controle. Monitorar função renal trimestralmente (DRC G3a)."
    ],
    expectedCommunication: [
      "Apresentação: Cumprimentar, chamar pelo nome, demonstrar que revisou os exames.",
      "Comunicação do diagnóstico: Explicar que a pedra esquerda está grande e obstruindo o rim, causando as crises frequentes e afetando a função renal; usar analogia clara (\"é como uma tampa que tá bloqueando a saída do rim\").",
      "Escuta ativa: Acolher o medo de cirurgia; explicar que o procedimento não é uma cirurgia aberta; perguntar se o paciente entendeu; verificar se tem acompanhante para ajudar no seguimento."
    ],
    criticalErrors: [
      "Indicar litotricia extracorpórea (LECO) como primeira linha para cálculo coraliforme > 2 cm (ineficaz e contraindicada como monoterapia neste caso)",
      "Não identificar a hipercalcemia como dado alterado e não propor investigação de hiperparatireoidismo primário",
      "Não reconhecer o comprometimento renal (TFG 54) como fator que exige urgência na resolução da obstrução",
      "Orientar conduta expectante para cálculo coraliforme de 2,4 cm com hidronefrose",
      "Não orientar medidas dietéticas e de ingesta hídrica para prevenção de recorrência"
    ]
  },

  instD: {
    title: "CHECKLIST — HOMEM COM CÓLICA LOMBAR RECORRENTE E CÁLCULO CONHECIDO",
    sections: [
      {
        h: "BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
        items: [
          { item: "Apresentou-se e chamou o paciente pelo nome", score: 0.5, ref: "CFM, Código de Ética Médica, 2019" },
          { item: "Acolheu o medo do paciente em relação à cirurgia de forma empática", score: 0.5, ref: "MS, Política Nacional de Humanização, 2013" },
          { item: "Explicou o diagnóstico e a conduta em linguagem acessível (sem jargão)", score: 0.5, ref: "CNRM, Competências Comunicação Médica, 2021" }
        ]
      },
      {
        h: "BLOCO 2 — ANAMNESE",
        items: [
          { item: "Investigou frequência e características das crises de cólica", score: 0.5, ref: "SBU, Diretrizes de Nefrolitíase, 2022" },
          { item: "Perguntou sobre ingesta hídrica diária", score: 0.5, ref: "SBU, Diretrizes de Nefrolitíase, 2022" },
          { item: "Investigou dieta (proteína animal, sal, oxalato)", score: 0.5, ref: "SBU, Diretrizes de Nefrolitíase, 2022" },
          { item: "Perguntou sobre medicamentos em uso completo (incluindo automedicação)", score: 0.5, ref: "SBU, Diretrizes de Nefrolitíase, 2022" }
        ]
      },
      {
        h: "BLOCO 3 — EXAME FÍSICO",
        items: [
          { item: "Avaliou PA e identificou hipertensão não controlada", score: 0.5, ref: "SBU, Diretrizes de Nefrolitíase, 2022" },
          { item: "Realizou sinal de Giordano bilateral e documentou resultado (negativo fora de crise)", score: 0.5, ref: "SBU, Diretrizes de Nefrolitíase, 2022" }
        ]
      },
      {
        h: "BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO",
        items: [
          { item: "Identificou o cálculo coraliforme parcial > 2 cm como indicação cirúrgica formal", score: 1.0, ref: "SBU, Diretrizes de Nefrolitíase, 2022" },
          { item: "Identificou a hipercalcemia e propôs investigação de hiperparatireoidismo (PTH)", score: 1.0, ref: "SBU, Diretrizes de Nefrolitíase, 2022" },
          { item: "Identificou comprometimento de função renal (TFG 54 — DRC G3a)", score: 0.5, ref: "SBD / SBN, Diretrizes DRC, 2021" },
          { item: "Identificou hipercalciúria e hipocitratúria como distúrbios metabólicos", score: 0.5, ref: "SBU, Diretrizes de Nefrolitíase, 2022" }
        ]
      },
      {
        h: "BLOCO 5 — CONDUTA E ORIENTAÇÃO AO PACIENTE",
        items: [
          { item: "Indicou nefrolitotomia percutânea (NLP) como primeira escolha para o cálculo esquerdo", score: 1.0, ref: "SBU, Diretrizes de Nefrolitíase, 2022" },
          { item: "NÃO indicou LECO como primeira escolha para cálculo coraliforme > 2 cm", score: 0.5, ref: "SBU, Diretrizes de Nefrolitíase, 2022" },
          { item: "Orientou aumento de ingesta hídrica e mudanças dietéticas para prevenção de recorrência", score: 0.5, ref: "SBU, Diretrizes de Nefrolitíase, 2022" },
          { item: "Encaminhou para Nefrologia pelo comprometimento renal (DRC G3a)", score: 0.5, ref: "SBN, Diretrizes DRC, 2021" }
        ]
      }
    ]
  }
},


{
  id: 4,
  title: "Dor lombar intensa, febre e oligúria em paciente com histórico de pedra no rim",
  sub: "UPA — Urgência e Emergência",
  tema: "Urologia",
  topic: "Litíase ureteral obstrutiva com pielonefrite obstrutiva / pionefrólise",
  level: "complexo",
  cardAccent: "#B03A2E",

  instA: {
    scenario: "UPA — Urgência e Emergência. Sala de atendimento, turno noturno. Você é o médico plantonista.",
    patient: "M.F., 47 anos, masculino, vigilante, histórico de nefrolitíase, portador de rim único funcional (nefrectomia direita por trauma há 15 anos).",
    complaint: "Dor lombar esquerda forte, febre alta e urinando muito pouco desde ontem à tarde.",
    tasks: [
      "Realize a anamnese dirigida ao caso, identificando fatores de risco e gravidade",
      "Realize o exame físico pertinente",
      "Solicite e interprete os exames complementares adequados",
      "Identifique a urgência clínica e estabeleça a conduta imediata",
      "Comunique ao paciente o diagnóstico e a necessidade de internação com clareza"
    ]
  },

  instB: {
    vitals: { PA: "94/60 mmHg", FC: "118 bpm", FR: "24 irpm", Tax: "39,4°C", Peso: "78 kg", Altura: "1,70 m", IMC: "27,0 kg/m²" },
    physicalGeneral: "Paciente em mau estado geral, com fácies de sofrimento. Taquipneico, taquicárdico, febril ao toque. Hipocorado 2+/4+, desidratado 2+/4+. Sudorese fria. Levemente confuso (desorientado no tempo). Glasgow 14 (E4V4M6).",
    physicalSeg: [
      "ABDOME: Plano, cicatriz cirúrgica em flanco direito (nefrectomia prévia). Ruídos hidroaéreos diminuídos. Dor intensa à palpação profunda no flanco esquerdo. Sem defesa abdominal. Sinal de Giordano fortemente positivo à esquerda.",
      "GENITOURINÁRIO: Ausência de rim direito palpável. Flanco esquerdo doloroso. Sondagem vesical realizada pela equipe: diurese nas últimas 6 horas = 90 mL (15 mL/h — oligúria).",
      "CARDIOVASCULAR: Bulhas rítmicas, taquicárdicas. Tempo de enchimento capilar 4 segundos. Pulsos periféricos filiformes.",
      "RESPIRATÓRIO: Taquipneia. Murmúrio vesicular presente bilateralmente, sem crepitações.",
      "NEUROLÓGICO: Levemente confuso, responde perguntas com latência. Sem déficits focais."
    ],
    labs: [
      { test: "Leucócitos", val: "23.800/mm³", ref: "4.000–11.000/mm³", alt: true },
      { test: "Neutrófilos", val: "91% com desvio à esquerda e bastões", ref: "50–70%", alt: true },
      { test: "Hemoglobina", val: "11,2 g/dL", ref: "13,5–17,5 g/dL", alt: true },
      { test: "Plaquetas", val: "92.000/mm³", ref: "150.000–400.000/mm³", alt: true },
      { test: "Creatinina", val: "4,8 mg/dL", ref: "0,7–1,2 mg/dL", alt: true },
      { test: "Ureia", val: "118 mg/dL", ref: "15–40 mg/dL", alt: true },
      { test: "Sódio", val: "132 mEq/L", ref: "136–145 mEq/L", alt: true },
      { test: "Potássio", val: "5,8 mEq/L", ref: "3,5–5,0 mEq/L", alt: true },
      { test: "Lactato", val: "3,8 mmol/L", ref: "< 2,0 mmol/L", alt: true },
      { test: "PCR", val: "312 mg/L", ref: "< 5 mg/L", alt: true },
      { test: "EQU — Leucocitúria", val: "++++", ref: "Ausente", alt: true },
      { test: "EQU — Nitrito", val: "Positivo", ref: "Negativo", alt: true },
      { test: "EQU — Hematúria", val: "+++", ref: "Ausente", alt: true },
      { test: "Gasometria arterial — pH", val: "7,28", ref: "7,35–7,45", alt: true },
      { test: "Gasometria arterial — HCO₃", val: "14 mEq/L", ref: "22–26 mEq/L", alt: true },
      { test: "Gasometria arterial — BE", val: "-10", ref: "-2 a +2", alt: true }
    ],
    image: "Ultrassonografia de urgência de vias urinárias: Rim direito ausente (nefrectomia prévia). Rim esquerdo com dimensões aumentadas (15,1 cm), hidronefrose grau III, pelve renal muito dilatada com conteúdo interno heterogêneo (debris — sugestivo de pionefrólise). Cálculo hiperecogênico com sombra acústica medindo 9 mm em ureter proximal esquerdo. Sem rim contralateral para compensação. ACHADO CRÍTICO: Rim único funcionante com obstrução completa e sinais de pionefrólise.",
    note: "Entregar os sinais vitais imediatamente ao início da estação — o candidato deve identificar a gravidade pelos sinais vitais desde o primeiro momento. Entregar exame físico junto. Fornecer exames laboratoriais somente se solicitados verbalmente. Fornecer laudo de USG se solicitado. A gasometria deve ser entregue somente se explicitamente solicitada. Caso candidato não identifique os critérios de sepse nos primeiros 2 minutos, o avaliador pode perguntar: \"O que chamou sua atenção nos sinais vitais?\"",
    patientProfile: "M.F., 47 anos, masculino. Vigilante noturno. Casado. Tem rim único (nefrectomia direita por trauma de trânsito há 15 anos). Histórico de dois episódios de cólica nefrética nos últimos 2 anos, sem acompanhamento regular.",
    script: [
      { trigger: "Queixa principal", speech: "Doutor, tô muito mal. Tô com uma dor nas costas aqui do lado esquerdo horrorosa desde ontem de tarde. Veio febre alta, tô com frio, e quase não tô conseguindo fazer xixi. Acho que fiz só um pouquinho o dia todo." },
      { trigger: "Sobre o rim único", speech: "Tenho só um rim, doutor. Perdi o outro num acidente de carro há uns 15 anos. Operei aqui nessa mesma cidade." },
      { trigger: "Sobre histórico de pedra", speech: "Já tive pedra no rim duas vezes. Mas nunca fiquei assim doente." },
      { trigger: "Sobre a febre", speech: "Tô com muito frio, calafrio. A febre tava em 39 e alguma coisa quando medi em casa." },
      { trigger: "Sobre a urina", speech: "Tô quase não fazendo xixi. Hoje o dia todo acho que saiu uma xicarazinha só. Tá escurinha também." },
      { trigger: "Sobre confusão", speech: "Tô me sentindo meio tonto, sabe? Não tô me sentindo bem de jeito nenhum." },
      { trigger: "Sobre alergia", speech: "Sou alérgico a penicilina. Me disseram isso quando era criança." },
      { trigger: "Pergunta ativa — gravidade", speech: "Tô muito grave, doutor? Tô com medo..." },
      { trigger: "Pergunta ativa — rim", speech: "Meu rim vai ficar bom? Não vou ficar sem fazer xixi, né?" }
    ],
    hiddenInfo: [
      "Alergia a penicilina (confirmada desde a infância) — revelar apenas se candidato perguntar especificamente sobre alergias medicamentosas.",
      "Não fez acompanhamento urológico desde o segundo episódio de cólica há 8 meses — revelar apenas se candidato perguntar sobre acompanhamento médico."
    ],
    actorBehavior: "Paciente visivelmente mal, taquipneico, sudorético. Fala em frases curtas, com esforço. Levemente confuso — responde perguntas mas com lentidão. Muito assustado. Fica mais tranquilo quando o médico demonstra segurança e age rapidamente. Não deve ser excessivamente dramático — a gravidade deve aparecer nos dados clínicos, não na atuação exagerada."
  },

  instC: {
    diagnosis: "Pionefrólise (pionefrosis) por litíase ureteral obstrutiva em rim único funcionante com sepse urinária (critérios de sepse: SOFA ≥ 2 + suspeita de infecção). Lesão renal aguda grave (creatinina 4,8 mg/dL — provável pré-renal + obstrutiva). Risco de choque séptico iminente.",
    differentials: [
      "Pielonefrite aguda grave sem obstrução — incluída pela febre, Giordano +, leucocitúria e nitrito positivos; excluída pela hidronefrose grau III com debris ao USG e obstrução comprovada por cálculo, configurando pionefrólise.",
      "Cólica nefrética simples com febre reacional — incluída pelo histórico de litíase e dor lombar; excluída pela gravidade sistêmica (hipotensão, confusão, lactato elevado, oligúria), que configura sepse.",
      "Lesão renal aguda de outra etiologia (pré-renal isolada) — incluída pela desidratação e oligúria; excluída pela obstrução documentada e processo infeccioso ativo com pionefrólise."
    ],
    context: "Homem de meia-idade com rim único funcionante e histórico de litíase renal sem acompanhamento regular, que apresenta obstrução ureteral por cálculo de 9 mm evoluindo para pionefrólise com sepse urinária e lesão renal aguda grave. Trata-se de emergência urológica com risco de vida e risco de perda definitiva do único rim funcionante.",
    justify: "Critérios de sepse presentes: infecção documentada (pionefrólise) + disfunção orgânica (lactato 3,8, confusão, oligúria, trombocitopenia, acidose metabólica). PA de 94/60 mmHg configura hipotensão — risco de choque séptico. O USG confirma pionefrólise (hidronefrose grau III com debris + cálculo obstrutivo em rim único). A creatinina de 4,8 mg/dL em rim único representa comprometimento crítico da função renal. Alergia à penicilina altera escolha antibiótica.",
    expectedAnamnesis: [
      "Dor lombar: características, tempo de início, progressão",
      "Sintomas sistêmicos: febre, calafrios (grau de comprometimento)",
      "Diurese: volume e características da urina (oligúria = sinal crítico)",
      "Histórico de rim único — FUNDAMENTAL identificar",
      "Histórico de litíase e tratamentos anteriores",
      "Alergias medicamentosas (penicilina — altera antibioticoterapia)",
      "Outros medicamentos em uso",
      "Tempo de início dos sintomas e progressão da gravidade"
    ],
    expectedPhysical: [
      "Sinais vitais: hipotensão (PA 94/60), taquicardia, febre alta, taquipneia — identificar critérios de sepse",
      "Inspeção: mau estado geral, sudorese fria, palidez, confusão — reconhecer gravidade imediata",
      "Palpação: dor intensa em flanco esquerdo; cicatriz de nefrectomia direita (confirmar rim único); ausência de defesa abdominal",
      "Sinal de Giordano: fortemente positivo à esquerda",
      "Avaliar tempo de enchimento capilar e perfusão periférica (pulsos filiformes)",
      "Avaliar nível de consciência (Glasgow)",
      "Sondagem vesical: avaliar diurese horária (15 mL/h — oligúria grave)"
    ],
    expectedExams: [
      { exam: "Hemograma", justify: "Avaliar leucocitose, desvio à esquerda, trombocitopenia (sepse)", expected: "Leucocitose intensa, bastões, plaquetopenia" },
      { exam: "Creatinina e ureia", justify: "Avaliar LRA — crítico em rim único", expected: "Creatinina 4,8, ureia 118 — LRA grave" },
      { exam: "Eletrólitos", justify: "Hipercalemia (risco cardíaco na LRA)", expected: "K+ 5,8 — hipercalemia leve" },
      { exam: "Lactato", justify: "Avaliar hipoperfusão tecidual (critério de sepse)", expected: "3,8 mmol/L — elevado" },
      { exam: "Gasometria arterial", justify: "Avaliar acidose metabólica (complicação da LRA + sepse)", expected: "pH 7,28, HCO₃ 14 — acidose metabólica" },
      { exam: "EQU", justify: "Confirmar infecção urinária", expected: "Leucocitúria ++++, nitrito +, hematúria +++" },
      { exam: "Hemocultura (2 amostras)", justify: "Identificar bacteremia — guiar antibiótico", expected: "Colher antes de iniciar antibiótico" },
      { exam: "USG de urgência de vias urinárias", justify: "Identificar obstrução e pionefrólise em rim único", expected: "Hidronefrose grau III com debris, cálculo 9 mm" },
      { exam: "PCR", justify: "Marcador inflamatório sistêmico", expected: "312 mg/L — muito elevado" }
    ],
    expectedConduct: [
      "Conduta imediata de emergência (primeiros minutos): Acesso venoso calibroso (2 acessos); monitorização contínua (ECG, oximetria, PA invasiva se disponível); ressuscitação volêmica: SF 0,9% ou Ringer lactato 30 mL/kg em 3 horas (protocolo de sepse — Bundle 1h); oxigenoterapia se SpO₂ < 94%; antibioticoterapia empírica imediata (após coleta de hemocultura): ciprofloxacino 400 mg IV 12/12h (considerando alergia à penicilina — evitar betalactâmicos). Alternativa: aminoglicosídeo (amicacina 15 mg/kg/dia) com cautela pela LRA; sondagem vesical se ainda não realizada — monitorar diurese horária (meta: > 0,5 mL/kg/h)",
      "Intervenção urológica de emergência: Desobstrução imediata — cateter ureteral (duplo J) ou nefrostomia percutânea. Não aguardar melhora clínica para intervenção. Esta é a medida que resolve a causa da sepse. Contato imediato com Urologia/CTI.",
      "Internação: UTI/CTI. Monitorização intensiva. Avaliação de diálise se hipercalemia grave ou LRA refratária.",
      "Não farmacológica: Balanço hídrico rigoroso. Restrição de K+ na dieta. Evitar nefrotóxicos (contraste, AINEs). Sondagem vesical mantida.",
      "Encaminhamento: Transferência para hospital com UTI e Urologia de emergência se não disponível na UPA.",
      "Orientações ao paciente/familiar: Explicar em linguagem acessível que há uma pedra obstruindo o único rim funcionante, causando uma infecção grave no rim; que precisará internar com urgência; que o procedimento para desobstruir o rim é prioritário e salva-vidas.",
      "Seguimento: UTI com controle de função renal a cada 6–12h. Reavaliação após estabilização para tratamento definitivo do cálculo."
    ],
    expectedCommunication: [
      "Apresentação: Apresentar-se rapidamente mas com calma e segurança — transmitir controle da situação ao paciente assustado.",
      "Comunicação do diagnóstico: Explicar de forma direta mas empática que o rim está com uma pedra bloqueando e com infecção grave; que precisará ficar internado; que a equipe vai agir rapidamente para proteger o rim.",
      "Escuta ativa: Reconhecer o medo do paciente; não minimizar a gravidade mas tranquilizar que há tratamento; incluir o familiar na conversa se presente."
    ],
    criticalErrors: [
      "Não identificar critérios de sepse (hipotensão + febre + lactato + confusão + foco infeccioso) — maior erro crítico do caso",
      "Não reconhecer rim único como fator que transforma a situação em emergência urológica",
      "Não solicitar hemocultura antes de iniciar antibiótico",
      "Prescrever AINE para analgesia (contraindicado na LRA e na sepse)",
      "Não indicar desobstrução urinária de emergência (cateter duplo J ou nefrostomia)",
      "Prescrever betalactâmico sem questionar alergias (alergia à penicilina documentada)"
    ]
  },

  instD: {
    title: "CHECKLIST — DOR LOMBAR, FEBRE E OLIGÚRIA EM PACIENTE COM RIM ÚNICO",
    sections: [
      {
        h: "BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
        items: [
          { item: "Apresentou-se ao paciente mesmo na situação de urgência", score: 0.3, ref: "CFM, Código de Ética Médica, 2019" },
          { item: "Transmitiu segurança ao paciente assustado e reconheceu seu medo verbalmente", score: 0.5, ref: "MS, Política Nacional de Humanização, 2013" },
          { item: "Comunicou a necessidade de internação de forma clara e acessível", score: 0.5, ref: "CNRM, Competências Comunicação Médica, 2021" }
        ]
      },
      {
        h: "BLOCO 2 — ANAMNESE",
        items: [
          { item: "Identificou o rim único como fator crítico de risco", score: 1.0, ref: "SBU, Diretrizes de Nefrolitíase, 2022" },
          { item: "Investigou volume urinário (oligúria) ativamente", score: 1.0, ref: "SBU / AMIB, Protocolo de Sepse, 2021" },
          { item: "Perguntou sobre alergias medicamentosas (identificou alergia à penicilina)", score: 0.5, ref: "CFM, Código de Ética Médica, 2019" },
          { item: "Investigou tempo de início dos sintomas e progressão da gravidade", score: 0.5, ref: "AMIB, Protocolo de Sepse, 2021" }
        ]
      },
      {
        h: "BLOCO 3 — EXAME FÍSICO",
        items: [
          { item: "Avaliou sinais vitais e identificou hipotensão, taquicardia e febre alta como sinais de sepse", score: 1.0, ref: "AMIB, Protocolo de Sepse, 2021" },
          { item: "Avaliou nível de consciência (identificou confusão — disfunção orgânica)", score: 0.5, ref: "AMIB, Protocolo de Sepse, 2021" },
          { item: "Avaliou perfusão periférica (enchimento capilar prolongado, pulsos filiformes)", score: 0.5, ref: "AMIB, Protocolo de Sepse, 2021" }
        ]
      },
      {
        h: "BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO",
        items: [
          { item: "Identificou critérios de sepse e nomeou o diagnóstico de sepse urinária / pionefrólise", score: 1.0, ref: "AMIB, Protocolo de Sepse, 2021" },
          { item: "Solicitou hemocultura antes de iniciar antibiótico", score: 0.5, ref: "AMIB, Protocolo de Sepse, 2021" },
          { item: "Solicitou USG de urgência de vias urinárias para identificar obstrução", score: 0.5, ref: "SBU, Diretrizes de Nefrolitíase, 2022" }
        ]
      },
      {
        h: "BLOCO 5 — CONDUTA E ORIENTAÇÃO AO PACIENTE",
        items: [
          { item: "Iniciou ressuscitação volêmica imediata (SF ou Ringer 30 mL/kg)", score: 0.5, ref: "AMIB, Protocolo de Sepse, 2021" },
          { item: "Prescreveu antibiótico adequado IV sem betalactâmico (alergia à penicilina)", score: 0.5, ref: "AMIB / SBU, Protocolo de Sepse, 2021" },
          { item: "Indicou desobstrução urinária de emergência (nefrostomia ou duplo J) e contactou Urologia", score: 1.0, ref: "SBU, Diretrizes de Nefrolitíase, 2022" },
          { item: "NÃO prescreveu AINE para analgesia (contraindicado na LRA e sepse)", score: 0.3, ref: "SBU / AMIB, Protocolo de Sepse, 2021" }
        ]
      }
    ]
  }
},

{
  id: 5,
  title: "Jovem com dor lombar recorrente e cálculo descoberto em exame de imagem",
  sub: "Ambulatório — Atenção Secundária",
  tema: "Urologia",
  topic: "Litíase renal — investigação metabólica e prevenção",
  level: "complexo",
  cardAccent: "#2E86AB",

  instA: {
    scenario: "Ambulatório de Urologia — Atenção Secundária. Consultório, turno vespertino. Você é o médico urologista.",
    patient: "L.T., 26 anos, feminino, estudante de medicina, sem comorbidades conhecidas. Terceiro episódio de cólica nefrética em 18 meses.",
    complaint: "Terceiro episódio de pedra no rim em um ano e meio. Trouxe os exames pedidos na última consulta.",
    tasks: [
      "Realize a anamnese clínica e metabólica dirigida à litíase recorrente",
      "Interprete os exames complementares e identifique o distúrbio metabólico subjacente",
      "Formule o diagnóstico etiológico da litíase recorrente",
      "Proponha o tratamento farmacológico e não farmacológico individualizado",
      "Oriente a paciente sobre adesão ao tratamento e prevenção de novos episódios"
    ]
  },

  instB: {
    vitals: { PA: "110/70 mmHg", FC: "72 bpm", FR: "14 irpm", Tax: "36,4°C", Peso: "55 kg", Altura: "1,64 m", IMC: "20,4 kg/m²" },
    physicalGeneral: "Paciente em bom estado geral, corada, hidratada, anictérica, acianótica, afebril. Sem sinais de sofrimento agudo. Orientada, comunicativa, bem-informada.",
    physicalSeg: [
      "ABDOME: Plano, sem cicatrizes. Ruídos hidroaéreos normais. Sem dor à palpação. Sinal de Giordano negativo bilateralmente.",
      "CARDIOVASCULAR: Bulhas rítmicas, normofonéticas, sem sopros.",
      "MEMBROS: Sem edema. Sem sinais de artrite. Sem tofos.",
      "TEGUMENTAR: Sem lesões cutâneas. Sem hiperpigmentação."
    ],
    labs: [
      { test: "Creatinina", val: "0,8 mg/dL", ref: "0,5–1,1 mg/dL", alt: false },
      { test: "Cálcio sérico", val: "9,4 mg/dL", ref: "8,5–10,5 mg/dL", alt: false },
      { test: "Fósforo sérico", val: "2,3 mg/dL", ref: "2,5–4,5 mg/dL", alt: true },
      { test: "Ácido úrico sérico", val: "4,1 mg/dL", ref: "< 6,0 mg/dL", alt: false },
      { test: "PTH intacto", val: "108 pg/mL", ref: "15–65 pg/mL", alt: true },
      { test: "Vitamina D (25-OH)", val: "22 ng/mL", ref: "30–100 ng/mL", alt: true },
      { test: "Cálcio urinário 24h", val: "420 mg/dia", ref: "< 300 mg/dia", alt: true },
      { test: "Fósforo urinário 24h", val: "1.450 mg/dia", ref: "400–1.300 mg/dia", alt: true },
      { test: "Oxalato urinário 24h", val: "28 mg/dia", ref: "< 40 mg/dia", alt: false },
      { test: "Citrato urinário 24h", val: "280 mg/dia", ref: "> 320 mg/dia", alt: true },
      { test: "pH urinário", val: "6,8", ref: "4,5–8,0", alt: false },
      { test: "EQU", val: "Normal", ref: "—", alt: false },
      { test: "Análise do cálculo expulso", val: "Fosfato de cálcio (hidroxiapatita) 95%", ref: "—", alt: true }
    ],
    image: "Tomografia computadorizada sem contraste (uro-TC): Cálculo de 7 mm em cálice inferior de rim direito, densidade 800 UH (compatível com fosfato de cálcio). Sem hidronefrose. Rim esquerdo sem alterações. Sem cálculos em ureter ou bexiga. Densidade óssea vertebral aparentemente reduzida para a idade (L2–L4) — sugestiva de osteopenia (avaliar complementar com densitometria).",
    note: "Entregar sinais vitais e exame físico no início. Entregar o pacote completo de exames laboratoriais e laudo de TC somente após o candidato solicitá-los ou quando iniciar a revisão dos exames — esta é uma consulta de retorno com exames em mãos. A análise do cálculo expulso está incluída no impresso. Entregar como um único conjunto de exames.",
    patientProfile: "L.T., 26 anos, feminino. Estudante de medicina (6º ano). Solteira. Mora sozinha. Sem plano de saúde particular.",
    script: [
      { trigger: "Abertura da consulta", speech: "\"Boa tarde, doutor. Trouxe todos os exames. Confesso que fui pesquisar tudo que pedi antes de vir aqui porque quero entender o que tá acontecendo comigo. Três episódios com 26 anos me preocupa muito.\"" },
      { trigger: "Sobre ingesta hídrica", speech: "\"Bebo em torno de 1 litro de água por dia, talvez menos. Sei que é pouco mas fico na correria da faculdade.\"" },
      { trigger: "Sobre alimentação", speech: "\"Como bastante proteína — ovo, frango, atum. Faço academia. Tomo suplemento de proteína whey todos os dias desde os 21 anos. Ah, e tomo vitamina C em cápsulas de 1g todo dia desde que li que ajuda na imunidade.\"" },
      { trigger: "Sobre os episódios anteriores", speech: "\"Os dois primeiros eu passei no pronto-socorro, tomei remédio pra dor e passou. Esse terceiro eu guardei o cálculo em um potinho, como o senhor pediu.\"" },
      { trigger: "Sobre histórico familiar", speech: "\"Minha mãe tem osteoporose e teve nefrolitíase uma vez. Meu avô materno tinha pedra nos rins também.\"" },
      { trigger: "Sobre exposição solar", speech: "\"Praticamente não pego sol. Fico o dia inteiro na faculdade ou em casa estudando.\"" },
      { trigger: "Sobre sintomas sistêmicos", speech: "\"Às vezes sinto um cansaço que não passa e uma fraqueza muscular nas pernas. Achei que fosse estresse da faculdade.\"" },
      { trigger: "Pergunta ativa — causa", speech: "\"Doutor, eu li sobre hiperparatireoidismo. Será que é isso? O PTH tá alto...\"" },
      { trigger: "Pergunta ativa — tratamento", speech: "\"Vou precisar operar alguma coisa? Tem como evitar mais pedras com remédio?\"" }
    ],
    hiddenInfo: [
      "Toma 2 cápsulas de vitamina C de 500 mg ao dia (total 1g/dia) há 5 anos — revelar apenas se candidato perguntar especificamente sobre suplementos vitamínicos.",
      "Usa suplemento de whey protein diariamente (2 doses/dia = ~50g de proteína suplementar) há 5 anos — revelar apenas se candidato perguntar sobre uso de suplementos ou quantificar a ingesta proteica."
    ],
    actorBehavior: "Paciente inteligente, bem-informada (estudante de medicina), que já pesquisou os próprios exames. Não é arrogante — é ansiosa e curiosa. Faz perguntas técnicas e espera respostas bem fundamentadas. O candidato deve tratar a paciente com respeito à sua autonomia informativa, sem ser condescendente. Fica satisfeita e cooperativa quando o médico explica o raciocínio com clareza."
  },

  instC: {
    diagnosis: "Nefrolitíase recorrente por fosfato de cálcio (hidroxiapatita) em contexto de hiperparatireoidismo primário (PTH 108 pg/mL com cálcio sérico normal-alto) associado a hipovitaminose D, hipercalciúria, hipocitratúria e ingesta excessiva de proteína e vitamina C. Litíase normocalcêmica com hiperparatireoidismo primário — forma clínica reconhecida nas diretrizes atuais.",
    differentials: [
      "Hipercalciúria idiopática absortiva — incluída pela hipercalciúria e litíase recorrente; afastada pelo PTH elevado que configura hiperparatireoidismo primário como etiologia.",
      "Acidose tubular renal tipo 1 — incluída pela hipocitratúria e cálculos de fosfato de cálcio (que são característicos da ATR1); excluída pelo pH urinário 6,8 (ATR1 cursa com pH > 6,0 — presente — mas também por hipopotassemia ausente e bicarbonato sérico normal; diagnóstico diferencial relevante que merece investigação adicional).",
      "Hiperparatireoidismo secundário à hipovitaminose D — incluído pela vitamina D baixa (22 ng/mL); diferenciado do primário pelo cálcio sérico — no secundário, a calcemia tende a ser normal ou baixa com fósforo normal ou alto; aqui o fósforo está baixo (2,3 mg/dL), sugerindo hiperparatireoidismo primário (maior reabsorção tubular de cálcio e excreção de fósforo)."
    ],
    context: "Mulher jovem, estudante de medicina, com nefrolitíase recorrente por fosfato de cálcio em contexto de hiperparatireoidismo primário normocalcêmico, hipovitaminose D, hipercalciúria, hipocitratúria, baixa ingesta hídrica, uso excessivo de vitamina C e sobrecarga proteica por suplementação. Provável adenoma de paratireoide como causa — investigação com cintilografia e USG de paratireoide indicada.",
    justify: "O perfil bioquímico é característico de hiperparatireoidismo primário: PTH elevado (108 pg/mL) com cálcio sérico normal-alto (9,4 mg/dL — forma normocalcêmica), fósforo sérico baixo (2,3 mg/dL — excreção renal aumentada pelo PTH), hipercalciúria (420 mg/dia), hipofosforemia e análise do cálculo mostrando fosfato de cálcio (hidroxiapatita). A hipovitaminose D coexistente pode estar mascarando a hipercalcemia clássica. A vitamina C em excesso (1 g/dia) é metabolizada em oxalato e ácido ascórbico — pode contribuir para a litíase embora o oxalato urinário esteja normal. A baixa ingestão hídrica e a hipocitratúria são fatores agravantes independentes. A possível osteopenia na TC reforça o hiperparatireoidismo.",
    expectedAnamnesis: [
      "Caracterização dos três episódios (localização, tratamento, passagem espontânea)",
      "Análise do cálculo anterior (componente mineral — fundamental para orientar investigação)",
      "Ingesta hídrica quantificada",
      "Dieta detalhada: proteína animal, laticínios, sódio, alimentos ricos em oxalato",
      "Uso de suplementos: vitamina C, vitamina D, cálcio, whey protein",
      "Exposição solar (síntese de vitamina D)",
      "Sintomas de hipercalcemia: polidipsia, poliúria, constipação, fraqueza muscular, fadiga, nefrolitíase recorrente",
      "Histórico familiar de litíase, hiperparatireoidismo, osteoporose",
      "Uso de medicamentos (furosemida, carbonato de cálcio, topiramato, indinavir)",
      "Menstruação regular (gravidez, alterações hormonais)"
    ],
    expectedPhysical: [
      "Sinais vitais: normais — documentar",
      "Inspeção: estado geral, ausência de sinais de doença sistêmica, ausência de tofos (afasta gota)",
      "Pescoço: palpação da região cervical anterior para rastrear nódulo/adenoma de paratireoide (muitas vezes não palpável)",
      "Membros: ausência de edema, artrite ou tofos",
      "Sinal de Giordano: negativo bilateralmente (fora de crise) — documentar",
      "Buscar sinais de hipercalcemia crônica: fraqueza muscular proximal, hiporreflexia (raro na forma normocalcêmica)"
    ],
    expectedExams: [
      { exam: "PTH intacto", justify: "Rastrear hiperparatireoidismo como causa da litíase recorrente", expected: "108 pg/mL — elevado (hiperparatireoidismo)" },
      { exam: "Cálcio sérico (com albumina ou ionizado)", justify: "Avaliar hipercalcemia — pode ser normal no HPP normocalcêmico", expected: "9,4 mg/dL — normal-alto" },
      { exam: "Fósforo sérico", justify: "Baixo no hiperparatireoidismo primário", expected: "2,3 mg/dL — baixo" },
      { exam: "Vitamina D (25-OH)", justify: "Hipovitaminose D pode mascarar hipercalcemia e coexiste", expected: "22 ng/mL — insuficiência" },
      { exam: "Cálcio e fósforo urinários 24h", justify: "Avaliar hipercalciúria e hiperfosfatúria", expected: "Hipercalciúria 420 mg/dia" },
      { exam: "Citrato urinário 24h", justify: "Hipocitratúria é fator de risco independente", expected: "280 mg/dia — baixo" },
      { exam: "Análise do cálculo", justify: "Definir composição e orientar investigação etiológica", expected: "Fosfato de cálcio (hidroxiapatita) — típico do HPP" },
      { exam: "USG de região cervical e cintilografia com sestamibi", justify: "Localizar adenoma de paratireoide para planejamento cirúrgico", expected: "Provável adenoma único" },
      { exam: "Densitometria óssea", justify: "Avaliar osteopenia sugerida na TC", expected: "Indicada — osteopenia esperada no HPP" },
      { exam: "Bicarbonato sérico + potássio", justify: "Afastar ATR tipo 1 (hipopotassemia + acidose metabólica)", expected: "Normais — afastam ATR1" }
    ],
    expectedConduct: [
      "Farmacológica: Citrato de potássio 20–40 mEq/dia VO para hipocitratúria (após confirmar função renal normal). Reposição de vitamina D: colecalciferol 7.000 UI/semana VO (ou 1.000 UI/dia) — com monitoramento de cálcio sérico durante reposição em portador de HPP (risco de hipercalcemia). A indicação de tratamento cirúrgico (paratireoidectomia) para HPP normocalcêmico em jovem com litíase recorrente e possível osteopenia é recomendada pelas diretrizes internacionais (AACE/AAES 2022) — confirmar com endocrinologista antes da indicação formal.",
      "Não farmacológica: Aumentar ingesta hídrica para > 2,5 L/dia (meta: diurese > 2 L/dia). Suspender vitamina C em doses suprafisiológicas (1 g/dia). Reduzir suplemento de whey protein. Reduzir sódio da dieta (< 5 g/dia). Manter dieta normocalcêmica (não restringir laticínios). Aumentar exposição solar moderada.",
      "Encaminhamento: Endocrinologia para confirmação e estadiamento do hiperparatireoidismo primário. Cirurgia de Cabeça e Pescoço / Endocrinologia Cirúrgica para avaliação de paratireoidectomia. Reumatologia/Endocrinologia para manejo da osteopenia. Nutrição para adequação dietética.",
      "Orientações ao paciente: Explicar que o PTH elevado sugere uma glândula paratireoide produzindo hormônio em excesso, causando liberação de cálcio no sangue e excesso na urina, formando as pedras; que será investigada com exames de imagem para planejar possível procedimento cirúrgico pequeno e curativo; tranquilizar que o diagnóstico foi feito cedo e o prognóstico é excelente.",
      "Seguimento: Encaminhamento à Endocrinologia em até 4 semanas. Controle de cálcio sérico em 30 dias após iniciar vitamina D. EQU e creatinina em 3 meses."
    ],
    expectedCommunication: [
      "Apresentação: Cumprimentar com respeito à autonomia da paciente — reconhecer que ela já pesquisou sobre o caso.",
      "Comunicação do diagnóstico: Validar a hipótese levantada pela paciente (hiperparatireoidismo) — explicar que ela estava no caminho certo; detalhar o raciocínio diagnóstico com linguagem acessível mas sem subestimar sua formação médica.",
      "Escuta ativa: Perguntar se ela tem dúvidas; valorizar o esforço da paciente em se informar; não ser condescendente; tratar como parceira do cuidado."
    ],
    criticalErrors: [
      "Não identificar o PTH elevado como sinal de hiperparatireoidismo primário e não propor investigação etiológica",
      "Não solicitar ou não valorizar a análise do cálculo expulso (componente essencial da investigação metabólica)",
      "Repor vitamina D em alta dose sem monitoramento de cálcio sérico em portador de hiperparatireoidismo (risco de hipercalcemia grave)",
      "Não identificar a vitamina C e o whey protein como fatores agravantes modificáveis",
      "Não encaminhar para Endocrinologia e não mencionar a possibilidade de paratireoidectomia como tratamento curativo",
      "Tratar a paciente de forma condescendente desconsiderando sua formação e os dados que ela mesma trouxe"
    ]
  },

  instD: {
    title: "CHECKLIST — JOVEM COM LITÍASE RECORRENTE E INVESTIGAÇÃO METABÓLICA",
    sections: [
      {
        h: "BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
        items: [
          { item: "Apresentou-se e respeitou a autonomia informativa da paciente (não foi condescendente com estudante de medicina)", score: 0.5, ref: "CFM, Código de Ética Médica, 2019" },
          { item: "Validou a hipótese levantada pela paciente e explicou o raciocínio diagnóstico", score: 0.5, ref: "CNRM, Competências Comunicação Médica, 2021" },
          { item: "Perguntou se a paciente tinha dúvidas ao final e a envolveu como parceira do cuidado", score: 0.5, ref: "MS, Política Nacional de Humanização, 2013" }
        ]
      },
      {
        h: "BLOCO 2 — ANAMNESE",
        items: [
          { item: "Perguntou sobre uso de suplementos (vitamina C, whey protein, vitamina D)", score: 1.0, ref: "SBU, Diretrizes de Nefrolitíase, 2022" },
          { item: "Investigou ingesta hídrica quantificada", score: 0.5, ref: "SBU, Diretrizes de Nefrolitíase, 2022" },
          { item: "Perguntou sobre histórico familiar de litíase, hiperparatireoidismo e osteoporose", score: 0.5, ref: "SBU, Diretrizes de Nefrolitíase, 2022" },
          { item: "Investigou sintomas de hipercalcemia (fadiga, fraqueza muscular, constipação, poliúria)", score: 0.5, ref: "SBEM, Diretriz de Hiperparatireoidismo, 2021" }
        ]
      },
      {
        h: "BLOCO 3 — EXAME FÍSICO",
        items: [
          { item: "Realizou palpação cervical anterior buscando nódulo de paratireoide", score: 0.5, ref: "SBEM, Diretriz de Hiperparatireoidismo, 2021" },
          { item: "Realizou sinal de Giordano bilateral e documentou resultado (negativo)", score: 0.5, ref: "SBU, Diretrizes de Nefrolitíase, 2022" }
        ]
      },
      {
        h: "BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO",
        items: [
          { item: "Identificou PTH elevado + fósforo baixo + hipercalciúria como tríade do hiperparatireoidismo primário", score: 1.0, ref: "SBEM, Diretriz de Hiperparatireoidismo, 2021" },
          { item: "Valorizou a análise do cálculo (fosfato de cálcio — típico do HPP) como dado diagnóstico", score: 0.5, ref: "SBU, Diretrizes de Nefrolitíase, 2022" },
          { item: "Identificou vitamina C e whey protein como fatores agravantes modificáveis", score: 0.5, ref: "SBU, Diretrizes de Nefrolitíase, 2022" },
          { item: "Propôs investigação com USG cervical e cintilografia com sestamibi para localizar adenoma", score: 0.5, ref: "SBEM, Diretriz de Hiperparatireoidismo, 2021" }
        ]
      },
      {
        h: "BLOCO 5 — CONDUTA E ORIENTAÇÃO AO PACIENTE",
        items: [
          { item: "Encaminhou para Endocrinologia para confirmação e manejo do HPP", score: 0.5, ref: "SBEM, Diretriz de Hiperparatireoidismo, 2021" },
          { item: "Orientou suspensão da vitamina C em alta dose e redução do whey protein", score: 0.5, ref: "SBU, Diretrizes de Nefrolitíase, 2022" },
          { item: "Orientou aumento de ingesta hídrica (> 2,5 L/dia) e redução de sódio da dieta", score: 0.3, ref: "SBU, Diretrizes de Nefrolitíase, 2022" },
          { item: "Prescreveu citrato de potássio para hipocitratúria e não prescreveu vitamina D sem monitoramento de cálcio", score: 0.7, ref: "SBU / SBEM, Diretrizes, 2022" }
        ]
      }
    ]
  }
}

]





