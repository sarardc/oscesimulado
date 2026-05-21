const psiq1stations = [

{
  id: 11,
  title: "Jovem trazido pelo SAMU após festa, sonolento e com hálito de álcool",
  sub: "UPA — Urgência e Emergência",
  tema: "Psiquiatria / Toxicologia",
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
      { test: "Glicemia capilar", val: "48 mg/dL", ref: "70–140 mg/dL", alt: true },
      { test: "Alcoolemia (etilômetro/dosagem)", val: "3,2 g/L (320 mg/dL)", ref: "< 0,3 g/L", alt: true },
      { test: "Sódio", val: "134 mEq/L", ref: "135–145 mEq/L", alt: true },
      { test: "Potássio", val: "3,2 mEq/L", ref: "3,5–5,0 mEq/L", alt: true },
      { test: "Hemograma", val: "Normal", ref: "—", alt: false },
      { test: "Creatinina", val: "0,9 mg/dL", ref: "0,7–1,2 mg/dL", alt: false },
      { test: "Toxicológico urinário", val: "Negativo para outras substâncias", ref: "Negativo", alt: false }
    ],
    image: "TC de crânio sem contraste: Sem hemorragia intracraniana. Sem edema cerebral. Parênquima sem alterações agudas. Estruturas da linha média centradas.",
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
    title: "CHECKLIST — JOVEM SONOLENTO COM HÁLITO DE ÁLCOOL TRAZIDO PELO SAMU",
    sections: [
      {
        h: "BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
        items: [
          { item: "Abordou os amigos sem julgamento e agradeceu pela chamada ao SAMU", score: 0.3, ref: "MS — Política Nacional de Humanização, 2013" },
          { item: "Comunicou o plano de manejo à equipe de forma clara e estruturada (ABC)", score: 0.5, ref: "MS — Linha de Cuidado Álcool, 2022" },
          { item: "Orientou os amigos sobre os riscos do binge drinking após estabilização", score: 0.3, ref: "MS — Linha de Cuidado Álcool, 2022" }
        ]
      },
      {
        h: "BLOCO 2 — ANAMNESE",
        items: [
          { item: "Obteve história com os amigos: tipo de bebida, quantidade e tempo de consumo", score: 0.5, ref: "MS — Linha de Cuidado Álcool, 2022" },
          { item: "Investigou uso concomitante de outras substâncias (drogas, medicamentos)", score: 0.5, ref: "MS — Linha de Cuidado Álcool, 2022" },
          { item: "Pesquisou possibilidade de trauma craniano durante a intoxicação", score: 0.5, ref: "MS — Linha de Cuidado Álcool, 2022" },
          { item: "Investigou histórico de vômitos (risco de broncoaspiração)", score: 0.5, ref: "Sanarmed — Intoxicação Alcoólica Aguda, 2025" }
        ]
      },
      {
        h: "BLOCO 3 — EXAME FÍSICO",
        items: [
          { item: "Avaliou ABC: vias aéreas, FR, SatO2, PA e FC como primeira ação", score: 1.0, ref: "MS — Linha de Cuidado Álcool, 2022" },
          { item: "Aplicou a Escala de Coma de Glasgow corretamente (E+V+M)", score: 0.5, ref: "MS — Linha de Cuidado Álcool, 2022" },
          { item: "Avaliou pupilas e pesquisou sinais de TCE (hematoma, Battle sign)", score: 0.5, ref: "MS — Linha de Cuidado Álcool, 2022" },
          { item: "Posicionou o paciente em decúbito lateral (posição de recuperação)", score: 0.5, ref: "MS — Linha de Cuidado Álcool, 2022" }
        ]
      },
      {
        h: "BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO",
        items: [
          { item: "Solicitou glicemia capilar como medida prioritária imediata", score: 1.0, ref: "MS — Linha de Cuidado Álcool, 2022" },
          { item: "Solicitou toxicológico urinário para afastar intoxicação mista", score: 0.5, ref: "MS — Linha de Cuidado Álcool, 2022" },
          { item: "Indicou TC de crânio para afastar TCE em rebaixamento de consciência", score: 0.5, ref: "MS — Linha de Cuidado Álcool, 2022" }
        ]
      },
      {
        h: "BLOCO 5 — CONDUTA E ORIENTAÇÃO AO PACIENTE",
        items: [
          { item: "Administrou tiamina ANTES da glicose", score: 1.0, ref: "MS — Linha de Cuidado Álcool, 2022; Laranjeira, 2013" },
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
    title: "CHECKLIST — HOMEM COM TREMORES, SUADEIRA E ALUCINAÇÕES APÓS PARAR DE BEBER",
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
          { item: "Aplicou o CIWA-Ar e identificou abstinência grave (score ≥20)", score: 1.0, ref: "MS — Linha de Cuidado Álcool, 2022" },
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
          { item: "Administrou tiamina ANTES da glicose (dose alta — 250–500 mg IV)", score: 1.0, ref: "MS — Linha de Cuidado Álcool, 2022; RENAME 2023" },
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
    title: "CHECKLIST — HOMEM QUE BEBE TODO DIA MAS DIZ QUE CONSEGUE PARAR QUANDO QUER",
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
  tema: "Psiquiatria / Medicina Preventiva",
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
  tema: "Psiquiatria / Pneumologia",
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
}

]
