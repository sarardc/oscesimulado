const orl = [

// CASO 01
{
  id: 1,
  title: 'Dor de ouvido após mergulho na praia',
  sub: 'UBS — Atenção Primária',
  tema: 'otorrinolaringologia',
  topic: 'Otite Externa',
  level: 'moderado',
  cardAccent: '#4f9cf9',
  instA: {
    scenario: 'Atenção Primária — UBS. Consultório, turno matutino.',
    patient: 'R.S., 22 anos, masculino, estudante universitário, sem comorbidades conhecidas.',
    complaint: 'Dor no ouvido direito há 2 dias, piorou ontem.',
    tasks: [
      'Realize a anamnese dirigida ao caso',
      'Realize o exame físico pertinente',
      'Formule a hipótese diagnóstica principal e os diferenciais',
      'Solicite os exames complementares, se necessário',
      'Proponha a conduta terapêutica e oriente o paciente'
    ]
  },
  instB: {
    vitals: {
      PA: '118/76 mmHg',
      FC: '78 bpm',
      FR: '16 irpm',
      Tax: '37,4°C',
      Peso: '74 kg',
      Altura: '1,78 m',
      IMC: '23,3 kg/m²'
    },
    physicalGeneral: 'Bom estado geral, corado, hidratado, afebril, consciente e orientado. Sem adenomegalias cervicais.',
    physicalSeg: 'OTOSCOPIA DIREITA: Conduto auditivo externo (CAE) com edema e hiperemia difusos, presença de secreção serosa escassa, membrana timpânica não visualizada adequadamente pelo edema do CAE. Trago doloroso à compressão. | OTOSCOPIA ESQUERDA: Conduto auditivo externo livre, membrana timpânica íntegra, translúcida, sem alterações. | OROFARINGE: Sem hiperemia ou exsudato. | CAVIDADE NASAL: Mucosa normocorada, cornetos sem hipertrofia.',
    labs: [
      { test: 'Hemograma', val: 'Leucócitos 9.200/mm³, sem desvio', ref: '4.000–11.000/mm³', alt: false }
    ],
    image: null,
    note: 'Entregar impresso com sinais vitais ao início da estação. Entregar resultado da otoscopia e exame físico somente quando o candidato solicitar/realizar o exame físico. Entregar hemograma somente se o candidato solicitar exames complementares.',
    patientProfile: 'Rodrigo S., 22 anos, masculino, estudante de educação física, solteiro.',
    script: [
      { trigger: 'Queixa principal', speech: 'Doutor, meu ouvido direito tá doendo muito, começou depois que eu fui à praia anteontem.' },
      { trigger: 'Sobre início e evolução', speech: 'Comecei a sentir uma coceira no ouvido no dia seguinte à praia, aí foi piorando e virou uma dorzão.' },
      { trigger: 'Sobre contato com água', speech: 'Fico bastante tempo na água, mergulho bastante. Acho que entrou muita água.' },
      { trigger: 'Sobre febre', speech: 'Não tive febre não, nem me sinto mal assim… só incomoda muito esse ouvido.' },
      { trigger: 'Sobre saída de líquido', speech: 'Não saiu nada, mas parece que tem alguma coisa lá dentro.' },
      { trigger: 'Sobre audição', speech: 'Tô ouvindo meio abafado pelo lado direito, mas não é tão forte assim.' },
      { trigger: 'Sobre medicamentos', speech: 'Tomei um ibuprofeno que eu tinha em casa, melhorou um pouco a dor, mas voltou.' },
      { trigger: 'Pergunta ativa 1', speech: 'O que eu tenho, doutor? É grave?' },
      { trigger: 'Pergunta ativa 2', speech: 'Posso continuar nadando?' }
    ],
    hiddenInfo: 'Costuma limpar o ouvido com cotonete com frequência — só revela se perguntado sobre hábitos de higiene do ouvido. | Já teve episódio semelhante no verão passado, tratou com gotinha que um amigo deu — só revela se perguntado sobre episódios anteriores.',
    actorBehavior: 'Tom levemente ansioso, mas colaborativo. Responde objetivamente ao que é perguntado. Fica aliviado quando o candidato demonstra segurança no diagnóstico. Reage com preocupação ao saber que precisa evitar a água.'
  },
  instC: {
    diagnosis: 'Otite externa aguda difusa (Ouvido do nadador) — OD.',
    differentials: [
      'Otite média aguda — dor de ouvido também presente, mas na OMA há febre, abaulamento timpânico e a dor não se acentua com a tração do trago; aqui não há febre e o trago é doloroso.',
      'Furunculose do CAE — infecção focal por S. aureus; dor intensa e localizada, sem edema difuso do CAE; possível visualização de foliculo.',
      'Otomicose — prurido predominante, aspecto esbranquiçado/escuro do CAE, comum em usuários crônicos de gotas antibióticas.'
    ],
    context: 'Jovem atleta aquático com otite externa aguda difusa após exposição prolongada à água do mar. Quadro típico com otalgia, edema e hiperemia difusos do CAE, sinal do trago positivo e hipoacusia leve ipsilateral. Ausência de febre e membrana timpânica não visualizada pelo edema.',
    justify: 'A tríade otalgia de início após imersão em água + edema/hiperemia difusos do CAE + sinal do trago positivo é clássica de otite externa aguda difusa. A ausência de febre e o contexto epidemiológico (nadador, verão) reforçam o diagnóstico. O uso de cotonete é fator predisponente relevante identificado na anamnese.',
    expectedAnamnesis: 'Início e evolução da otalgia (após contato com água) | Caracterização da dor (intensidade, localização, fatores de piora — mastigação, tração do pavilhão) | Presença de otorreia, prurido, plenitude auricular | Episódios anteriores semelhantes | Hábitos de higiene do ouvido (uso de cotonete) | Uso de medicamentos prévios | Presença de febre | Alteração auditiva | Antecedentes de otite, cirurgia otológica, perfuração timpânica | Alergias',
    expectedPhysical: 'Sinais vitais: afebril, estáveis | Inspeção do pavilhão auricular: sem alterações externas | Palpação: sinal do trago positivo (dor à compressão do trago), dor à tração do pavilhão auricular — patognomônico de otite externa | Otoscopia: CAE edemaciado, hiperemiado, com secreção serosa; MT não visualizada — entregar impresso | Avaliação de linfonodos periauriculares e cervicais',
    expectedExams: [
      { exam: 'Nenhum exame obrigatório na fase inicial', justify: 'Diagnóstico clínico', expected: '—' },
      { exam: 'Cultura de secreção do CAE', justify: 'Indicado apenas em casos recorrentes, imunossuprimidos ou refratários ao tratamento', expected: 'Se solicitado: Pseudomonas aeruginosa ou S. aureus' }
    ],
    expectedConduct: 'Farmacológica: Ciprofloxacino + dexametasona otológico (gotas auriculares) — 4 gotas no ouvido afetado 2x/dia por 7 dias. Analgesia: dipirona 500 mg VO 6/6h ou ibuprofeno 400 mg VO 8/8h se dor intensa. (RENAME 2022 / SBO 2022) | Não farmacológica: Manter ouvido seco — evitar mergulho e natação durante o tratamento; ao banho, proteger o ouvido com algodão com vaselina; não usar cotonete. | Encaminhamento: Encaminhar ao otorrinolaringologista se: ausência de melhora em 72h, suspeita de otite externa maligna (necrotizante), imunossupressão. | Orientações ao paciente: Explicar que é uma infecção do canal do ouvido causada pela umidade e limpeza inadequada; orientar sobre técnica correta de aplicação das gotas; reforçar que não deve usar cotonete. | Seguimento: Retorno em 7–10 dias para reavaliação; sinais de alarme: piora da dor, febre, paralisia facial.',
    expectedCommunication: "Apresentação: 'Bom dia, meu nome é [nome], sou médico(a) aqui na unidade. Pode me contar o que está sentindo?' | Comunicação do diagnóstico: 'Você tem uma infecção no canal do ouvido chamada otite externa, muito comum em quem pratica natação. Não é grave, mas precisa de tratamento com gotinhas no ouvido.' | Escuta ativa: Aguardar o paciente terminar de falar antes de responder; validar a dor ('Entendo que está incomodando bastante').",
    criticalErrors: [
      'Prescrever antibiótico oral sistêmico como primeira linha sem indicação (otite externa sem celulite periauricular ou imunocomprometimento)',
      'Não realizar ou solicitar otoscopia',
      'Não orientar sobre restrição de contato com água durante o tratamento',
      'Confundir com otite média aguda e prescrever amoxicilina oral sem avaliação timpânica adequada',
      'Não identificar o sinal do trago como elemento diferencial importante'
    ]
  },
  instD: {
    title: 'CHECKLIST — DOR DE OUVIDO APÓS MERGULHO NA PRAIA',
    sections: [
      {
        h: 'COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE',
        items: [
          { item: 'Apresentou-se pelo nome ao paciente', score: 0.5, ref: 'CFM 2.217/2018' },
          { item: 'Explicou o que iria realizar antes de iniciar a consulta', score: 0.5, ref: 'CFM 2.217/2018' },
          { item: 'Utilizou linguagem acessível ao explicar diagnóstico e conduta', score: 0.5, ref: 'PNHAH/MS, 2001' }
        ]
      },
      {
        h: 'ANAMNESE',
        items: [
          { item: 'Investigou início da dor e relação com contato com água', score: 1.0, ref: 'SBO, Diretrizes de Otite Externa, 2022' },
          { item: 'Questionou presença de otorreia, prurido e plenitude auricular', score: 0.5, ref: 'SBO, 2022' },
          { item: 'Investigou hábitos de higiene auricular (uso de cotonete)', score: 0.5, ref: 'SBO, 2022' },
          { item: 'Questionou presença de febre e sintomas sistêmicos', score: 0.5, ref: 'SBO, 2022' },
          { item: 'Perguntou sobre episódios anteriores semelhantes', score: 0.5, ref: 'SBO, 2022' },
          { item: 'Investigou uso de medicamentos e alergias', score: 0.5, ref: 'RENAME, 2022' }
        ]
      },
      {
        h: 'EXAME FÍSICO',
        items: [
          { item: 'Avaliou sinais vitais (temperatura)', score: 0.5, ref: 'SBO, 2022' },
          { item: 'Realizou palpação do trago e tração do pavilhão auricular (sinal do trago)', score: 1.0, ref: 'SBO, 2022' },
          { item: 'Solicitou/realizou otoscopia', score: 1.0, ref: 'SBO, 2022' },
          { item: 'Avaliou linfonodos periauriculares e cervicais', score: 0.5, ref: 'SBO, 2022' }
        ]
      },
      {
        h: 'RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
        items: [
          { item: 'Formulou hipótese de otite externa aguda difusa', score: 1.0, ref: 'SBO, 2022' },
          { item: 'Citou ao menos um diagnóstico diferencial pertinente (OMA ou otomicose)', score: 0.5, ref: 'SBO, 2022' },
          { item: 'Reconheceu que o diagnóstico é clínico e não solicitou exames desnecessários', score: 0.5, ref: 'SBO, 2022' }
        ]
      },
      {
        h: 'CONDUTA E ORIENTAÇÃO AO PACIENTE',
        items: [
          { item: 'Prescreveu corretamente gotas auriculares com antibiótico (ciprofloxacino otológico)', score: 1.0, ref: 'RENAME 2022 / SBO 2022' },
          { item: 'Orientou restrição de contato com água durante tratamento', score: 0.5, ref: 'SBO, 2022' },
          { item: 'Orientou sobre não uso de cotonete', score: 0.5, ref: 'SBO, 2022' },
          { item: 'Orientou sinais de alarme e retorno', score: 0.5, ref: 'SBO, 2022' }
        ]
      }
    ]
  }
},

// CASO 02
{
  id: 2,
  title: 'Coceira intensa no ouvido há semanas',
  sub: 'Ambulatório — Clínica Médica',
  tema: 'otorrinolaringologia',
  topic: 'Otomicose',
  level: 'moderado',
  cardAccent: '#4f9cf9',
  instA: {
    scenario: 'Ambulatório de Clínica Médica. Consultório, turno vespertino.',
    patient: 'M.L., 58 anos, feminina, aposentada, diabética tipo 2 em uso de metformina.',
    complaint: 'Coceira e sensação de entupimento no ouvido esquerdo há cerca de 3 semanas.',
    tasks: [
      'Realize a anamnese dirigida ao caso',
      'Realize o exame físico pertinente',
      'Formule a hipótese diagnóstica principal e os diferenciais',
      'Proponha a conduta terapêutica adequada',
      'Oriente a paciente sobre o tratamento e cuidados'
    ]
  },
  instB: {
    vitals: {
      PA: '132/84 mmHg',
      FC: '80 bpm',
      FR: '16 irpm',
      Tax: '36,8°C',
      Peso: '72 kg',
      Altura: '1,60 m',
      IMC: '28,1 kg/m²'
    },
    physicalGeneral: 'Bom estado geral, corada, hidratada, afebril, consciente e orientada. Sem linfadenopatia cervical.',
    physicalSeg: 'OTOSCOPIA ESQUERDA: Conduto auditivo externo com presença de material esbranquiçado e acinzentado de aspecto filamentoso (hifas visíveis), aderido às paredes do CAE. Hiperemia leve da pele do conduto. Membrana timpânica parcialmente visível, sem perfuração aparente. | OTOSCOPIA DIREITA: CAE livre, membrana timpânica íntegra, sem alterações. | OROFARINGE: Sem alterações.',
    labs: [
      { test: 'Glicemia de jejum', val: '187 mg/dL', ref: '70–99 mg/dL', alt: true },
      { test: 'HbA1c', val: '8,2%', ref: '< 5,7%', alt: true },
      { test: 'Hemograma', val: 'Leucócitos 8.400/mm³, sem desvio', ref: '4.000–11.000/mm³', alt: false }
    ],
    image: null,
    note: 'Entregar impresso de sinais vitais ao início. Entregar resultado da otoscopia ao exame físico. Entregar exames laboratoriais somente se solicitados pelo candidato. Reforçar ao candidato que a paciente já tem DM2 conhecida — relevante para o caso.',
    patientProfile: 'Maria L., 58 anos, feminina, aposentada, casada, diabética tipo 2.',
    script: [
      { trigger: 'Queixa principal', speech: 'Doutora, tô com uma coceira horrível nesse ouvido esquerdo há umas três semanas, parece que tá entupido.' },
      { trigger: 'Sobre início', speech: 'Começou do nada, não lembro de ter feito nada diferente. Só foi piorando.' },
      { trigger: 'Sobre secreção', speech: 'Às vezes sai uma coisinha branca, parece farelo.' },
      { trigger: 'Sobre dor', speech: 'Dor não tem muita não, é mais aquela coceira insuportável.' },
      { trigger: 'Sobre tratamento anterior', speech: 'Fui à farmácia e comprei umas gotas de antibiótico, usei duas semanas, mas não melhorou nada.' },
      { trigger: 'Sobre diabetes', speech: 'Tenho diabetes há uns 8 anos, tomo metformina todo dia, mas tô meio largada no tratamento não minto.' },
      { trigger: 'Sobre hábitos', speech: 'Gosto de colocar um cotonete às vezes porque fica com aquela sensação de entupimento.' },
      { trigger: 'Pergunta ativa 1', speech: 'O que é isso no meu ouvido, doutora? É sério?' },
      { trigger: 'Pergunta ativa 2', speech: 'Quanto tempo leva pra passar?' }
    ],
    hiddenInfo: 'Fez uso prolongado de gotas de antibiótico auricular por conta própria (2 semanas) — só revela se perguntado sobre automedicação ou tratamentos anteriores. | Glicemia descontrolada nos últimos meses, não faz acompanhamento regular — só revela se perguntado sobre controle do diabetes.',
    actorBehavior: 'Tom tranquilo, mas com leve vergonha por estar sem acompanhamento adequado do diabetes. Colaborativa. Fica um pouco preocupada ao saber que o fungo pode estar relacionado ao açúcar alto.'
  },
  instC: {
    diagnosis: 'Otomicose do ouvido esquerdo — provavelmente por Aspergillus sp. — em paciente diabética tipo 2 com mau controle glicêmico.',
    differentials: [
      'Otite externa bacteriana — hiperemia e edema do CAE presentes, mas o aspecto filamentoso/esbranquiçado e a ausência de resposta a antibiótico favorecem otomicose.',
      'Dermatite seborreica do CAE — prurido e descamação presentes, mas sem material filamentoso característico.',
      'Acúmulo de cerume — plenitude auricular presente, mas sem prurido intenso nem material filamentoso.'
    ],
    context: 'Paciente diabética com mau controle glicêmico apresentando otomicose, favorecida pela imunossupressão relativa da hiperglicemia e pelo uso prévio inadequado de antibiótico tópico. Quadro clínico típico com prurido intenso, material filamentoso esbranquiçado no CAE e ausência de resposta a antibioticoterapia.',
    justify: 'O achado otoscópico de material filamentoso esbranquiçado/acinzentado no CAE, associado a prurido intenso como sintoma predominante, falha terapêutica com antibiótico tópico e contexto de imunossupressão relativa (DM2 descontrolado) aponta fortemente para otomicose. O agente mais comum é o Aspergillus niger/flavus.',
    expectedAnamnesis: 'Início, evolução e caracterização do prurido | Presença de secreção (aspecto, cor) | Ausência ou presença de otalgia | Uso prévio de gotas auriculares (antibiótico tópico) | Hábitos de higiene auricular (cotonete) | Diagnóstico e controle do diabetes | Uso de medicamentos imunossupressores | Episódios anteriores',
    expectedPhysical: 'Sinais vitais: afebril, PA levemente elevada | Otoscopia: material filamentoso esbranquiçado/acinzentado no CAE — achado patognomônico de otomicose | Avaliação da membrana timpânica (integridade) | Sinal do trago: geralmente negativo ou leve',
    expectedExams: [
      { exam: 'Glicemia de jejum / HbA1c', justify: 'Avaliar controle glicêmico — fator predisponente', expected: 'Hiperglicemia, HbA1c elevada' },
      { exam: 'Cultura fúngica do material do CAE', justify: 'Confirmar agente etiológico em casos recorrentes/refratários', expected: 'Aspergillus sp. ou Candida sp.' }
    ],
    expectedConduct: 'Farmacológica: Limpeza do CAE (lavagem ou aspiração pelo médico/otorrino) + clotrimazol tópico auricular 1% — gotas, 3–4x/dia por 2–3 semanas. Alternativa: ácido acético 2% em gotas (SBO 2022 / UpToDate ⚠️). Em casos graves ou imunossuprimidos: fluconazol oral. | Não farmacológica: Manter ouvido seco; não usar cotonete; evitar automedicação com antibióticos. | Encaminhamento: Otorrinolaringologista para limpeza adequada do CAE; endocrinologista/clínico para otimização do controle glicêmico. | Orientações ao paciente: Explicar relação entre diabetes descontrolado e maior risco de infecções fúngicas; reforçar importância do controle glicêmico. | Seguimento: Retorno em 2–3 semanas; sinais de alarme: piora da dor, febre, paralisia facial (pensar em otite externa maligna).',
    expectedCommunication: "Apresentação: Apresentar-se pelo nome, perguntar como a paciente prefere ser chamada. | Comunicação do diagnóstico: 'A senhora tem uma infecção por fungo no canal do ouvido, chamada otomicose. É diferente de uma infecção por bactéria, por isso as gotas de antibiótico não funcionaram. Precisamos tratar com um antifúngico.' | Escuta ativa: Acolher sem julgamento a dificuldade no controle do diabetes; reforçar que o controle glicêmico protege contra esse tipo de infecção.",
    criticalErrors: [
      'Manter antibiótico tópico sem identificar falha terapêutica e necessidade de antifúngico',
      'Não investigar controle do diabetes como fator predisponente',
      'Não realizar ou solicitar otoscopia',
      'Não encaminhar ao otorrinolaringologista para limpeza do CAE',
      'Não orientar sobre riscos da automedicação e uso indiscriminado de antibióticos tópicos'
    ]
  },
  instD: {
    title: 'CHECKLIST — COCEIRA INTENSA NO OUVIDO HÁ SEMANAS',
    sections: [
      {
        h: 'COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE',
        items: [
          { item: 'Apresentou-se pelo nome e cumprimentou a paciente', score: 0.5, ref: 'CFM 2.217/2018' },
          { item: 'Utilizou linguagem acessível ao explicar diagnóstico e conduta', score: 0.5, ref: 'PNHAH/MS, 2001' },
          { item: 'Abordou o controle do diabetes sem julgamento ou tom punitivo', score: 0.5, ref: 'PNHAH/MS, 2001' }
        ]
      },
      {
        h: 'ANAMNESE',
        items: [
          { item: 'Investigou início, evolução e características do prurido e secreção', score: 0.5, ref: 'SBO, 2022' },
          { item: 'Questionou uso prévio de gotas auriculares (antibiótico tópico)', score: 1.0, ref: 'SBO, 2022' },
          { item: 'Investigou hábitos de higiene auricular (cotonete)', score: 0.5, ref: 'SBO, 2022' },
          { item: 'Questionou sobre diabetes e controle glicêmico', score: 1.0, ref: 'SBD, Diretrizes 2023' },
          { item: 'Perguntou sobre uso de imunossupressores ou outras comorbidades', score: 0.5, ref: 'SBO, 2022' }
        ]
      },
      {
        h: 'EXAME FÍSICO',
        items: [
          { item: 'Avaliou temperatura e sinais vitais', score: 0.5, ref: 'SBO, 2022' },
          { item: 'Solicitou/realizou otoscopia e descreveu o achado filamentoso', score: 1.0, ref: 'SBO, 2022' },
          { item: 'Avaliou integridade da membrana timpânica', score: 0.5, ref: 'SBO, 2022' }
        ]
      },
      {
        h: 'RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
        items: [
          { item: 'Formulou hipótese de otomicose', score: 1.0, ref: 'SBO, 2022' },
          { item: 'Relacionou mau controle glicêmico como fator predisponente', score: 0.5, ref: 'SBD, 2023' },
          { item: 'Solicitou glicemia/HbA1c para avaliação do controle glicêmico', score: 0.5, ref: 'SBD, 2023' }
        ]
      },
      {
        h: 'CONDUTA E ORIENTAÇÃO AO PACIENTE',
        items: [
          { item: 'Prescreveu antifúngico tópico auricular (clotrimazol)', score: 1.0, ref: 'RENAME 2022 / SBO 2022' },
          { item: 'Encaminhou ao otorrinolaringologista para limpeza do CAE', score: 0.5, ref: 'SBO, 2022' },
          { item: 'Orientou sobre manutenção do ouvido seco e não uso de cotonete', score: 0.5, ref: 'SBO, 2022' },
          { item: 'Orientou sinais de alarme e retorno', score: 0.5, ref: 'SBO, 2022' }
        ]
      }
    ]
  }
},

// CASO 03
{
  id: 3,
  title: 'Criança com febre e choro ao puxar o ouvido há 1 dia',
  sub: 'UPA — Urgência e Emergência Pediátrica',
  tema: 'otorrinolaringologia',
  topic: 'Otite Média Aguda',
  level: 'moderado',
  cardAccent: '#FF7043',
  instA: {
    scenario: 'UPA Pediátrica. Consultório, turno noturno.',
    patient: 'Mãe de L.M., 2 anos, masculino, sem comorbidades conhecidas.',
    complaint: 'Criança com febre e choro constante, puxando o ouvido direito desde ontem à noite.',
    tasks: [
      'Realize a anamnese dirigida ao caso (com a mãe)',
      'Realize o exame físico pertinente',
      'Formule a hipótese diagnóstica principal e os diferenciais',
      'Proponha a conduta terapêutica adequada',
      'Oriente a mãe sobre o tratamento, cuidados e sinais de alarme'
    ]
  },
  instB: {
    vitals: {
      PA: 'Não aferida (criança não colaborou)',
      FC: '118 bpm',
      FR: '26 irpm',
      Tax: '38,8°C',
      Peso: '12 kg',
      Altura: '0,88 m',
      IMC: '15,5 kg/m²'
    },
    physicalGeneral: 'Regular estado geral, irritado, choro fácil, corado, hidratado, febril. Sem toxemia. Consciente.',
    physicalSeg: 'OTOSCOPIA DIREITA: Membrana timpânica hiperemiada, abaulada, sem perfuração. Perda do reflexo luminoso. Sem otorreia. | OTOSCOPIA ESQUERDA: Membrana timpânica íntegra, levemente hiperemiada, sem abaulamento. Reflexo luminoso presente. | OROFARINGE: Hiperemia leve de orofaringe posterior. Tonsilas sem exsudato, grau I. | AUSCULTA PULMONAR: Murmúrio vesicular presente bilateralmente, sem ruídos adventícios. | CAVIDADE NASAL: Rinorreia serosa bilateral.',
    labs: [
      { test: 'Hemograma', val: 'Leucócitos 15.800/mm³, neutrófilos 72%, sem desvio à esquerda', ref: '6.000–17.000/mm³ (2 anos)', alt: true },
      { test: 'PCR', val: '18 mg/L', ref: '< 5 mg/L', alt: true }
    ],
    image: null,
    note: 'O ator é a mãe da criança. A criança é representada por boneco/simulador ou apenas descrita pelo ator. Entregar sinais vitais ao início. Entregar otoscopia e exame físico quando solicitado. Entregar hemograma e PCR apenas se solicitados.',
    patientProfile: 'Mãe: Carla M., 28 anos, auxiliar de serviços gerais. Paciente: Lucas M., 2 anos, masculino, sem comorbidades.',
    script: [
      { trigger: 'Queixa principal', speech: 'Doutor, meu filho tá com muita febre desde ontem à noite e não para de chorar, fica puxando o ouvido dele.' },
      { trigger: 'Sobre febre', speech: 'A febre foi até 39 graus, dei dipirona e baixou um pouco, mas volta logo.' },
      { trigger: 'Sobre o ouvido', speech: 'Ele fica colocando a mão no ouvido direito e chora muito quando eu toco.' },
      { trigger: 'Sobre coriza', speech: 'Tá com coriza há uns 4 dias, achei que era virose.' },
      { trigger: 'Sobre alimentação', speech: 'Tá comendo menos, reclamou de dor quando mamou hoje cedo.' },
      { trigger: 'Sobre medicamentos', speech: 'Só dei dipirona. Não dei antibiótico ainda.' },
      { trigger: 'Sobre vacinação', speech: 'Tá com a vacina em dia sim, fiz o cartão agora.' },
      { trigger: 'Pergunta ativa 1', speech: 'O que ele tem, doutor? Precisa de antibiótico?' },
      { trigger: 'Pergunta ativa 2', speech: 'Posso dar alguma coisa pra dor? Quanto tempo vai durar?' }
    ],
    hiddenInfo: 'A criança frequenta creche — fator de risco para OMA; só revela se perguntado sobre creche ou contato com outras crianças. | Há um irmão mais velho com "infecção de ouvido" recente — só revela se perguntado sobre contato familiar com infecção.',
    actorBehavior: 'Mãe ansiosa, preocupada com o filho. Colaborativa. Fica aliviada ao receber orientações claras. Demonstra dúvida sobre necessidade de antibiótico — cabe ao candidato explicar a indicação.'
  },
  instC: {
    diagnosis: 'Otite média aguda (OMA) bacteriana — ouvido direito — em criança de 2 anos com abaulamento timpânico e febre persistente.',
    differentials: [
      'Otite média com efusão (OME) — ausência de sinais inflamatórios agudos, sem febre; MT opaca ou com nível líquido, sem abaulamento.',
      'Otite externa aguda — dor à tração do pavilhão, CAE edemaciado; aqui o achado é na MT (abaulamento), não no CAE.',
      'Faringoamigdalite bacteriana — odinofagia predominante, sem achado timpânico; pode coexistir mas não explica o quadro principal.'
    ],
    context: 'Lactente de 2 anos, frequentador de creche, com OMA bacteriana direita, apresentando febre alta, irritabilidade, otalgia indireta (tração auricular) e membrana timpânica abaulada à otoscopia. Precedida por quadro de infecção viral de vias aéreas superiores.',
    justify: 'Critérios diagnósticos de OMA bacteriana presentes: início agudo (< 48h), membrana timpânica abaulada (sinal mais específico), febre ≥ 38°C, irritabilidade e otalgia. Fatores de risco: idade < 2 anos, frequência em creche. Leucocitose e PCR elevado corroboram processo bacteriano.',
    expectedAnamnesis: 'Início e evolução da febre e da irritabilidade | Sinais de otalgia indireta (tração do ouvido, choro ao deitar/mamar) | Rinorreia, tosse, sintomas de IVAS precedente | Alimentação (recusa, dor ao mamar) | Uso de medicamentos e antibióticos prévios | Histórico de episódios anteriores de OMA | Vacinação (pneumocócica, influenza) | Frequência em creche | Contato com fumantes (fator de risco)',
    expectedPhysical: 'Sinais vitais: febre, taquicardia | Estado geral: irritado, choro fácil | Otoscopia: MT abaulada, hiperemiada, sem reflexo luminoso — achado mais específico de OMA bacteriana | Orofaringe: avaliar amígdalas e orofaringe posterior | Ausculta pulmonar: excluir pneumonia associada | Cavidade nasal: rinorreia',
    expectedExams: [
      { exam: 'Diagnóstico clínico — exames não obrigatórios', justify: 'OMA é diagnóstico clínico', expected: '—' },
      { exam: 'Hemograma / PCR', justify: 'Se dúvida sobre processo bacteriano ou toxemia', expected: 'Leucocitose, PCR elevada' }
    ],
    expectedConduct: 'Farmacológica: Amoxicilina 50 mg/kg/dia VO dividido em 2–3 doses por 10 dias (criança < 2 anos). Analgesia: dipirona 15 mg/kg/dose VO 6/6h ou ibuprofeno 10 mg/kg/dose VO 8/8h. (SBP 2022 / MS 2022) | Não farmacológica: Elevação da cabeceira ao dormir; saline nasal para rinorreia; evitar fumo passivo. | Encaminhamento: Otorrinolaringologista se: ausência de melhora em 48–72h, episódios recorrentes (≥ 3 em 6 meses), suspeita de complicação. | Orientações ao paciente: Explicar que é uma infecção bacteriana do ouvido médio; orientar sobre a importância de completar o antibiótico; sinais de alarme. | Seguimento: Retorno em 48–72h se piora ou não melhora da febre; retorno em 2 semanas para reavaliação da MT.',
    expectedCommunication: "Apresentação: Apresentar-se, perguntar o nome da criança e da mãe. | Comunicação do diagnóstico: 'Seu filho tem uma infecção no ouvido chamada otite média, que é bacteriana, por isso a febre alta e a dor. Vamos precisar de antibiótico.' | Escuta ativa: Validar a preocupação da mãe; responder à dúvida sobre antibiótico de forma clara e sem tecnicismos.",
    criticalErrors: [
      'Não realizar otoscopia',
      'Não prescrever antibiótico em criança < 2 anos com OMA e MT abaulada',
      'Prescrever dose incorreta de amoxicilina (dose padrão 25 mg/kg em vez de 50 mg/kg para OMA)',
      'Não orientar retorno precoce em caso de piora',
      'Não avaliar orofaringe e pulmões para afastar complicações'
    ]
  },
  instD: {
    title: 'CHECKLIST — CRIANÇA COM FEBRE E CHORO AO PUXAR O OUVIDO',
    sections: [
      {
        h: 'COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE',
        items: [
          { item: 'Apresentou-se à mãe e perguntou o nome da criança', score: 0.5, ref: 'CFM 2.217/2018' },
          { item: 'Utilizou linguagem acessível ao explicar diagnóstico e conduta à mãe', score: 0.5, ref: 'PNHAH/MS, 2001' },
          { item: 'Respondeu à dúvida da mãe sobre necessidade de antibiótico', score: 0.5, ref: 'SBP, 2022' }
        ]
      },
      {
        h: 'ANAMNESE',
        items: [
          { item: 'Investigou início da febre, evolução e picos térmicos', score: 0.5, ref: 'SBP, 2022' },
          { item: 'Identificou otalgia indireta (tração do ouvido, choro ao mamar/deitar)', score: 1.0, ref: 'SBP, 2022' },
          { item: 'Questionou sintomas de IVAS precedente (coriza, tosse)', score: 0.5, ref: 'SBP, 2022' },
          { item: 'Perguntou sobre vacinação (pneumocócica e influenza)', score: 0.5, ref: 'PNI/MS, 2023' },
          { item: 'Investigou episódios anteriores de otite e frequência em creche', score: 0.5, ref: 'SBP, 2022' }
        ]
      },
      {
        h: 'EXAME FÍSICO',
        items: [
          { item: 'Avaliou temperatura e sinais vitais', score: 0.5, ref: 'SBP, 2022' },
          { item: 'Realizou otoscopia e identificou MT abaulada e hiperemiada', score: 1.0, ref: 'SBP, 2022' },
          { item: 'Avaliou orofaringe e ausculta pulmonar', score: 0.5, ref: 'SBP, 2022' }
        ]
      },
      {
        h: 'RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
        items: [
          { item: 'Formulou hipótese de OMA bacteriana com critérios corretos', score: 1.0, ref: 'SBP, 2022' },
          { item: 'Reconheceu que o diagnóstico é clínico e não exigiu exames para iniciar tratamento', score: 0.5, ref: 'SBP, 2022' }
        ]
      },
      {
        h: 'CONDUTA E ORIENTAÇÃO AO PACIENTE',
        items: [
          { item: 'Prescreveu amoxicilina na dose correta (50 mg/kg/dia) por 10 dias', score: 1.0, ref: 'SBP 2022 / RENAME 2022' },
          { item: 'Prescreveu analgesia adequada (dipirona ou ibuprofeno)', score: 0.5, ref: 'SBP, 2022' },
          { item: 'Orientou retorno precoce em 48–72h se piora ou ausência de melhora', score: 0.5, ref: 'SBP, 2022' },
          { item: 'Orientou sinais de alarme (piora da febre, abaulamento da orelha, paralisia facial)', score: 0.5, ref: 'SBP, 2022' }
        ]
      }
    ]
  }
},

// CASO 04
{
  id: 4,
  title: 'Saída de líquido pelo ouvido há meses sem dor',
  sub: 'UBS — Atenção Primária',
  tema: 'otorrinolaringologia',
  topic: 'Otite Média Crônica Supurativa',
  level: 'moderado',
  cardAccent: '#FF7043',
  instA: {
    scenario: 'Atenção Primária — UBS. Consultório, turno matutino.',
    patient: 'J.O., 35 anos, masculino, pedreiro, sem comorbidades relatadas.',
    complaint: 'Ouvido direito soltando líquido há mais de 3 meses, ouve menos desse lado.',
    tasks: [
      'Realize a anamnese dirigida ao caso',
      'Realize o exame físico pertinente',
      'Formule a hipótese diagnóstica principal e os diferenciais',
      'Proponha a conduta e encaminhamento adequados',
      'Oriente o paciente sobre cuidados e seguimento'
    ]
  },
  instB: {
    vitals: {
      PA: '122/78 mmHg',
      FC: '76 bpm',
      FR: '15 irpm',
      Tax: '36,6°C',
      Peso: '78 kg',
      Altura: '1,72 m',
      IMC: '26,4 kg/m²'
    },
    physicalGeneral: 'Bom estado geral, corado, hidratado, afebril, consciente e orientado.',
    physicalSeg: 'OTOSCOPIA DIREITA: Perfuração central de membrana timpânica (aproximadamente 40% da área), bordas regulares, sem colesteatoma visível. Presença de secreção mucopurulenta no CAE, inodora. | OTOSCOPIA ESQUERDA: Membrana timpânica íntegra, sem alterações. | OROFARINGE: Sem alterações. | CAVIDADE NASAL: Desvio de septo nasal leve para a esquerda, cornetos sem hipertrofia significativa.',
    labs: [
      { test: 'Hemograma', val: 'Leucócitos 8.100/mm³, sem desvio', ref: '4.000–11.000/mm³', alt: false },
      { test: 'Glicemia de jejum', val: '92 mg/dL', ref: '70–99 mg/dL', alt: false }
    ],
    image: 'Audiometria tonal (se solicitada): Perda auditiva condutiva em ouvido direito — limiar médio de 35 dB (250–4000 Hz). Ouvido esquerdo dentro dos limites da normalidade.',
    note: 'Entregar sinais vitais ao início. Entregar otoscopia ao exame físico. Entregar audiometria somente se o candidato solicitar avaliação auditiva. Hemograma somente se solicitado.',
    patientProfile: 'José O., 35 anos, masculino, pedreiro, casado, 2 filhos.',
    script: [
      { trigger: 'Queixa principal', speech: 'Doutor, meu ouvido direito fica soltando uma secreção há uns 3 meses, e tô ouvindo menos por esse lado.' },
      { trigger: 'Sobre início', speech: 'Começou depois de uma gripe forte que tive, aí ficou. Não doi, só incomoda.' },
      { trigger: 'Sobre a secreção', speech: 'É um líquido meio amarelado às vezes, sem cheiro. Fica molhando o travesseiro à noite.' },
      { trigger: 'Sobre dor', speech: 'Dor mesmo não tenho não, por isso fui deixando. Achei que ia passar.' },
      { trigger: 'Sobre febre', speech: 'Febre não tenho, tô bem disposto.' },
      { trigger: 'Sobre audição', speech: 'Tô ouvindo abafado pelo direito há bastante tempo. Às vezes peço pra minha mulher repetir o que fala.' },
      { trigger: 'Sobre tratamentos', speech: 'Nunca fui ao médico pra isso, fui deixando porque não doía.' },
      { trigger: 'Pergunta ativa 1', speech: 'Isso tem cura, doutor? Vai precisar de cirurgia?' },
      { trigger: 'Pergunta ativa 2', speech: 'Posso tomar banho e molhar o ouvido?' }
    ],
    hiddenInfo: 'Teve múltiplos episódios de otite média na infância — só revela se perguntado sobre histórico de infecções de ouvido na infância. | Não usa proteção auricular no trabalho como pedreiro (exposição a poeira e ruído) — só revela se perguntado sobre exposição ocupacional.',
    actorBehavior: 'Tranquilo, levemente preocupado com a possibilidade de cirurgia. Colaborativo. Demonstra certo descaso inicial com os sintomas por não sentir dor — cabe ao candidato reforçar a importância do diagnóstico e tratamento.'
  },
  instC: {
    diagnosis: 'Otite média crônica supurativa (OMCS) — ouvido direito — com perfuração central de MT e hipoacusia condutiva ipsilateral.',
    differentials: [
      'Otite média crônica com colesteatoma — perfuração marginal/aticoantral, secreção fétida, erosão óssea; aqui perfuração é central e secreção inodora.',
      'Otite média com efusão crônica — sem otorreia ativa; líquido retido atrás de MT íntegra.',
      'Otite externa crônica — afeta o CAE, não a MT; sem perfuração.'
    ],
    context: 'Adulto jovem com OMCS direita decorrente de episódios repetidos de OMA na infância, com perfuração central de MT, otorreia mucopurulenta crônica sem dor e hipoacusia condutiva ipsilateral de grau leve. Sem sinais de colesteatoma ou complicações.',
    justify: 'Perfuração central de MT com secreção mucopurulenta crônica sem otalgia caracteriza OMCS tubotimpânica (benigna). A ausência de secreção fétida e perfuração em área marginal afasta colesteatoma. Audiometria confirma componente condutivo.',
    expectedAnamnesis: 'Tempo, evolução e características da otorreia (cor, odor, volume) | Presença ou ausência de otalgia | Histórico de OMA na infância e episódios anteriores | Alteração auditiva (hipoacusia progressiva) | Presença de zumbido ou vertigem | Exposição ocupacional a ruído | Uso de medicamentos auriculares prévios | Presença de febre ou sinais de complicação',
    expectedPhysical: 'Sinais vitais: afebril, estáveis | Otoscopia: perfuração central de MT, secreção mucopurulenta, ausência de colesteatoma | Avaliação do CAE: limpo ou com secreção | Pesquisa de retração timpânica ou erosão óssea (afastar colesteatoma) | Teste do diapasão — Rinne e Weber (hipoacusia condutiva)',
    expectedExams: [
      { exam: 'Audiometria tonal', justify: 'Avaliar grau e tipo de perda auditiva', expected: 'Perda condutiva em OD' },
      { exam: 'Cultura da secreção auricular', justify: 'Identificar agente e orientar antibioticoterapia tópica', expected: 'Pseudomonas aeruginosa ou S. aureus (comuns)' },
      { exam: 'TC de ossos temporais', justify: 'Se suspeita de colesteatoma ou complicações', expected: 'Normal ou erosão em mastóide (se colesteatoma)' }
    ],
    expectedConduct: 'Farmacológica: Ciprofloxacino tópico auricular nas fases de exacerbação com otorreia ativa. Evitar aminoglicosídeos tópicos ototóxicos em MT perfurada. (SBO 2022) | Não farmacológica: Proteger o ouvido da entrada de água (tampão com vaselina ao banho); não usar cotonete. | Encaminhamento: Encaminhamento obrigatório ao otorrinolaringologista para avaliação cirúrgica (timpanoplastia). | Orientações ao paciente: Explicar que a perfuração causa a saída de líquido e a perda auditiva; que existe tratamento cirúrgico (timpanoplastia) com boa chance de cura; que deve evitar água no ouvido. | Seguimento: Acompanhamento com otorrino; retorno na UBS se febre, dor intensa ou piora da audição.',
    expectedCommunication: "Apresentação: Apresentar-se, acolher o paciente. | Comunicação do diagnóstico: 'O senhor tem um furinho no tímpano que ficou após as infecções de ouvido, e isso causa essa secreção e a dificuldade para ouvir. Tem tratamento e pode melhorar muito com cirurgia.' | Escuta ativa: Responder à preocupação com cirurgia de forma tranquilizadora e informativa.",
    criticalErrors: [
      'Prescrever aminoglicosídeos tópicos (gentamicina, neomicina) em MT perfurada — risco de ototoxicidade',
      'Não encaminhar ao otorrinolaringologista para avaliação cirúrgica',
      'Não realizar otoscopia',
      'Não solicitar audiometria para quantificar perda auditiva',
      'Não afastar colesteatoma (omitir pergunta sobre odor da secreção e não avaliar tipo de perfuração)'
    ]
  },
  instD: {
    title: 'CHECKLIST — SAÍDA DE LÍQUIDO PELO OUVIDO HÁ MESES SEM DOR',
    sections: [
      {
        h: 'COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE',
        items: [
          { item: 'Apresentou-se pelo nome ao paciente', score: 0.5, ref: 'CFM 2.217/2018' },
          { item: 'Utilizou linguagem acessível ao explicar diagnóstico e conduta', score: 0.5, ref: 'PNHAH/MS, 2001' },
          { item: 'Respondeu à preocupação do paciente sobre cirurgia de forma clara e acolhedora', score: 0.5, ref: 'PNHAH/MS, 2001' }
        ]
      },
      {
        h: 'ANAMNESE',
        items: [
          { item: 'Investigou características da otorreia (tempo, cor, odor, volume)', score: 1.0, ref: 'SBO, 2022' },
          { item: 'Questionou presença de otalgia e febre', score: 0.5, ref: 'SBO, 2022' },
          { item: 'Investigou hipoacusia e tempo de evolução', score: 0.5, ref: 'SBO, 2022' },
          { item: 'Perguntou sobre episódios de otite na infância', score: 0.5, ref: 'SBO, 2022' },
          { item: 'Questionou presença de zumbido ou vertigem', score: 0.5, ref: 'SBO, 2022' }
        ]
      },
      {
        h: 'EXAME FÍSICO',
        items: [
          { item: 'Realizou otoscopia e identificou perfuração central de MT', score: 1.0, ref: 'SBO, 2022' },
          { item: 'Avaliou tipo e localização da perfuração (central vs. marginal — afastar colesteatoma)', score: 0.5, ref: 'SBO, 2022' },
          { item: 'Realizou ou solicitou teste com diapasão (Rinne/Weber)', score: 0.5, ref: 'SBO, 2022' }
        ]
      },
      {
        h: 'RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
        items: [
          { item: 'Formulou hipótese de OMCS (otite média crônica supurativa)', score: 1.0, ref: 'SBO, 2022' },
          { item: 'Afastou colesteatoma (ausência de secreção fétida, perfuração central)', score: 0.5, ref: 'SBO, 2022' },
          { item: 'Solicitou audiometria tonal', score: 0.5, ref: 'SBO, 2022' }
        ]
      },
      {
        h: 'CONDUTA E ORIENTAÇÃO AO PACIENTE',
        items: [
          { item: 'Encaminhou obrigatoriamente ao otorrinolaringologista', score: 1.0, ref: 'SBO, 2022' },
          { item: 'Contraindicou aminoglicosídeos tópicos em MT perfurada', score: 0.5, ref: 'SBO 2022 / RENAME 2022' },
          { item: 'Orientou proteção do ouvido à água e não uso de cotonete', score: 0.5, ref: 'SBO, 2022' }
        ]
      }
    ]
  }
},

// CASO 05
{
  id: 5,
  title: 'Criança com dor atrás do ouvido e ouvido empurrado para frente',
  sub: 'UPA — Urgência e Emergência Pediátrica',
  tema: 'otorrinolaringologia',
  topic: 'Mastoidite Aguda — Complicação de Otite Média',
  level: 'moderado',
  cardAccent: '#D32F2F',
  instA: {
    scenario: 'UPA Pediátrica. Triagem e consultório de urgência, turno vespertino.',
    patient: 'Mãe de G.P., 4 anos, masculino, sem comorbidades conhecidas.',
    complaint: "Criança com febre, dor atrás do ouvido esquerdo e ouvido 'saindo para fora' há 2 dias.",
    tasks: [
      'Realize a anamnese dirigida ao caso (com a mãe)',
      'Realize o exame físico pertinente',
      'Formule a hipótese diagnóstica principal e os diferenciais',
      'Proponha a conduta imediata',
      'Oriente a mãe sobre a gravidade e os próximos passos'
    ]
  },
  instB: {
    vitals: {
      PA: '98/62 mmHg',
      FC: '124 bpm',
      FR: '28 irpm',
      Tax: '39,2°C',
      Peso: '16 kg',
      Altura: '1,02 m',
      IMC: '15,4 kg/m²'
    },
    physicalGeneral: 'Regular estado geral, irritado, febril, corado, hidratado, consciente. Sem sinais de rigidez de nuca ou alteração neurológica.',
    physicalSeg: 'REGIÃO RETROAURICULAR ESQUERDA: Eritema, edema e dor intensa à palpação da região mastóidea. Pavilhão auricular esquerdo deslocado anteriormente e para baixo (protrusão auricular). | OTOSCOPIA ESQUERDA: Membrana timpânica hiperemiada e abaulada, CAE com discreta hiperemia, sulco retroauricular apagado. | OTOSCOPIA DIREITA: Normal. | OROFARINGE: Hiperemia leve. | NEUROLÓGICO SUMÁRIO: Sem rigidez de nuca, sem sinal de Kernig ou Brudzinski, pupilas isocóricas e fotorreagentes.',
    labs: [
      { test: 'Hemograma', val: 'Leucócitos 22.400/mm³, neutrófilos 85%, bastões 8%', ref: '6.000–17.000/mm³', alt: true },
      { test: 'PCR', val: '98 mg/L', ref: '< 5 mg/L', alt: true },
      { test: 'Hemocultura', val: 'Coletada — resultado pendente', ref: '—', alt: true }
    ],
    image: 'TC de ossos temporais (se solicitada): Opacificação das células mastóideas esquerdas, com áreas de erosão óssea septal. Sem coleção subperiosteal definida. Sem extensão intracraniana.',
    note: 'O ator é a mãe. Entregar sinais vitais ao início. Entregar achados do exame físico quando o candidato realizar o exame. Entregar hemograma e PCR somente se solicitados. Entregar TC somente se solicitada explicitamente. Enfatizar ao candidato que este é um caso de urgência — a conduta imediata é o foco.',
    patientProfile: 'Mãe: Paula P., 31 anos, cabeleireira. Paciente: Gabriel P., 4 anos, masculino, sem comorbidades.',
    script: [
      { trigger: 'Queixa principal', speech: 'Doutor, meu filho tá com febre alta há 2 dias, tá com uma dor horrível atrás do ouvido e o ouvido dele parece que tá saindo pra frente.' },
      { trigger: 'Sobre otite prévia', speech: 'Ele teve otite semana passada, o médico receitou antibiótico, mas ele só tomou 3 dias porque melhorou e eu parei.' },
      { trigger: 'Sobre a evolução', speech: 'Ficou melhor uns dias, aí piorou muito ontem, a febre subiu de novo e surgiu esse inchaço atrás do ouvido.' },
      { trigger: 'Sobre outros sintomas', speech: 'Tá com dor de cabeça, mas não tá com o pescoço duro não.' },
      { trigger: 'Sobre alimentação', speech: 'Tá comendo mal, muito irritado, não quer brincar.' },
      { trigger: 'Sobre medicamentos', speech: 'Parei o antibiótico depois de 3 dias. Dei só dipirona pra febre esses dias.' },
      { trigger: 'Pergunta ativa 1', speech: 'É grave, doutor? Vai precisar de cirurgia?' },
      { trigger: 'Pergunta ativa 2', speech: 'Precisa internar? Por que parar o antibiótico foi errado?' }
    ],
    hiddenInfo: 'Antibiótico da OMA foi suspenso precocemente (3 dias) por iniciativa própria da mãe — só revela se perguntado sobre uso e adesão ao antibiótico prescrito. | A criança já teve 3 episódios de OMA no último ano — só revela se perguntado sobre episódios anteriores de otite.',
    actorBehavior: 'Mãe muito ansiosa e com culpa por ter suspendido o antibiótico. Chora ao perceber a gravidade. Colaborativa. Cabe ao candidato acolher sem culpabilizar, mas deixar claro a importância da adesão ao tratamento.'
  },
  instC: {
    diagnosis: 'Mastoidite aguda — complicação de otite média aguda — ouvido esquerdo, com erosão óssea septal à TC, sem abscesso subperiosteal ou extensão intracraniana.',
    differentials: [
      'Abscesso subperiosteal — coleção flutuante palpável na região retroauricular; TC mostraria coleção definida; aqui TC sem coleção.',
      'Linfadenite retroauricular — sem protrusão auricular, sem erosão óssea; linfonodo palpável isolado.',
      'Celulite periauricular — sem deslocamento do pavilhão, sem achados otoscópicos de OMA.'
    ],
    context: 'Criança de 4 anos com mastoidite aguda complicando OMA prévia mal tratada (antibiótico suspenso precocemente). Apresenta febre alta, dor e edema retroauricular com protrusão do pavilhão, leucocitose com desvio à esquerda e erosão óssea à TC — indicando necessidade de internação urgente.',
    justify: 'Protrusão auricular + eritema e edema retroauricular doloroso + OMA prévia com tratamento incompleto + leucocitose com desvio à esquerda + TC com erosão óssea mastóidea = mastoidite aguda coalescente. A ausência de rigidez de nuca e alteração neurológica afasta complicações intracranianas imediatas, mas exige vigilância.',
    expectedAnamnesis: 'OMA prévia: diagnóstico, tratamento prescrito, adesão (suspensão precoce do antibiótico) | Início e evolução do edema retroauricular e da febre | Presença de dor de cabeça, rigidez de nuca, alteração de consciência (sinais de complicação intracraniana) | Episódios anteriores de OMA | Vacinação (pneumocócica) | Uso de medicamentos',
    expectedPhysical: 'Sinais vitais: febre alta, taquicardia | Inspeção e palpação retroauricular: eritema, edema, dor — sinal de Vacher (sulco retroauricular apagado) | Protrusão auricular: pavilhão deslocado anteriormente | Otoscopia: MT abaulada/hiperemiada | Neurológico sumário: rigidez de nuca, Kernig, Brudzinski — afastar meningite | Estado geral e nível de consciência',
    expectedExams: [
      { exam: 'Hemograma + PCR', justify: 'Confirmar processo infeccioso bacteriano', expected: 'Leucocitose com desvio, PCR elevada' },
      { exam: 'TC de ossos temporais', justify: 'Avaliar extensão da infecção, erosão óssea, abscesso', expected: 'Erosão septal, sem abscesso definido' },
      { exam: 'Hemocultura', justify: 'Identificar agente etiológico antes do ATB EV', expected: 'Pendente' }
    ],
    expectedConduct: 'Farmacológica: Internação hospitalar imediata. Antibioticoterapia EV: ceftriaxona 100 mg/kg/dia EV (máx 4g/dia). Analgesia EV. (SBP 2022 / MS) | Não farmacológica: Monitorização clínica contínua; avaliação neurológica seriada. | Encaminhamento: Internação imediata + avaliação obrigatória pelo otorrinolaringologista (mastoidectomia indicada se ausência de melhora em 24–48h ou abscesso). | Orientações ao paciente: Explicar à mãe a gravidade da situação; acolher sem culpabilizar; reforçar importância de completar antibióticos no futuro. | Seguimento: Monitorização hospitalar; TC de controle conforme evolução; avaliação cirúrgica em 24–48h.',
    expectedCommunication: "Apresentação: Apresentar-se, acolher a mãe com empatia. | Comunicação do diagnóstico: 'A infecção do ouvido se espalhou para o osso atrás do ouvido, por isso ele precisará ficar internado para tomar antibiótico na veia. Isso aconteceu porque a infecção não foi completamente tratada.' | Escuta ativa: Acolher a culpa da mãe sem reforçá-la; explicar que o importante agora é o tratamento.",
    criticalErrors: [
      'Não reconhecer mastoidite e dispensar a criança sem internação',
      'Não solicitar TC de ossos temporais para avaliar extensão',
      'Prescrever antibiótico oral em vez de EV em mastoidite confirmada',
      'Não realizar exame neurológico para afastar complicações intracranianas',
      'Não encaminhar ao otorrinolaringologista para avaliação cirúrgica',
      'Culpabilizar a mãe de forma inadequada'
    ]
  },
  instD: {
    title: 'CHECKLIST — CRIANÇA COM DOR ATRÁS DO OUVIDO E PAVILHÃO PROTRUSO',
    sections: [
      {
        h: 'COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE',
        items: [
          { item: 'Apresentou-se e acolheu a mãe com empatia', score: 0.5, ref: 'CFM 2.217/2018' },
          { item: 'Comunicou a gravidade de forma clara sem culpabilizar a mãe', score: 0.5, ref: 'PNHAH/MS, 2001' },
          { item: 'Explicou a necessidade de internação em linguagem acessível', score: 0.5, ref: 'PNHAH/MS, 2001' }
        ]
      },
      {
        h: 'ANAMNESE',
        items: [
          { item: 'Identificou OMA prévia e suspensão precoce do antibiótico', score: 1.0, ref: 'SBP, 2022' },
          { item: 'Investigou evolução do edema retroauricular e febre', score: 0.5, ref: 'SBP, 2022' },
          { item: 'Questionou sinais de complicação intracraniana (cefaleia, rigidez de nuca, alteração consciência)', score: 1.0, ref: 'SBP, 2022' },
          { item: 'Perguntou sobre vacinação e episódios anteriores de OMA', score: 0.5, ref: 'PNI/MS, 2023' }
        ]
      },
      {
        h: 'EXAME FÍSICO',
        items: [
          { item: 'Avaliou temperatura e sinais vitais (febre, taquicardia)', score: 0.5, ref: 'SBP, 2022' },
          { item: 'Identificou eritema, edema retroauricular e protrusão do pavilhão', score: 1.0, ref: 'SBP, 2022' },
          { item: 'Realizou exame neurológico sumário (rigidez de nuca, Kernig, Brudzinski)', score: 1.0, ref: 'SBP, 2022' }
        ]
      },
      {
        h: 'RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
        items: [
          { item: 'Formulou hipótese de mastoidite aguda', score: 1.0, ref: 'SBP, 2022' },
          { item: 'Solicitou TC de ossos temporais', score: 0.5, ref: 'SBP, 2022' },
          { item: 'Solicitou hemograma, PCR e hemocultura', score: 0.5, ref: 'SBP, 2022' }
        ]
      },
      {
        h: 'CONDUTA E ORIENTAÇÃO AO PACIENTE',
        items: [
          { item: 'Indicou internação hospitalar imediata', score: 1.0, ref: 'SBP 2022 / MS' },
          { item: 'Prescreveu antibiótico EV (ceftriaxona) na dose correta', score: 0.5, ref: 'SBP 2022 / RENAME 2022' },
          { item: 'Encaminhou ao otorrinolaringologista para avaliação cirúrgica', score: 0.5, ref: 'SBP, 2022' }
        ]
      }
    ]
  }
},

// CASO 06
{
  id: 6,
  title: 'Dificuldade para ouvir progressiva há meses em adulto jovem',
  sub: 'UBS — Atenção Primária',
  tema: 'otorrinolaringologia',
  topic: 'Perda Auditiva Neurossensorial — PAIR',
  level: 'moderado',
  cardAccent: '#7B1FA2',
  instA: {
    scenario: 'Atenção Primária — UBS. Consultório, turno matutino.',
    patient: 'F.N., 42 anos, masculino, operador de máquinas em indústria, sem comorbidades relatadas.',
    complaint: 'Está ouvindo cada vez menos, especialmente em ambientes barulhentos, há cerca de 8 meses.',
    tasks: [
      'Realize a anamnese dirigida ao caso',
      'Realize o exame físico pertinente',
      'Formule a hipótese diagnóstica principal e os diferenciais',
      'Solicite os exames complementares adequados',
      'Proponha a conduta e oriente o paciente sobre prevenção e seguimento'
    ]
  },
  instB: {
    vitals: {
      PA: '128/82 mmHg',
      FC: '74 bpm',
      FR: '15 irpm',
      Tax: '36,5°C',
      Peso: '82 kg',
      Altura: '1,75 m',
      IMC: '26,8 kg/m²'
    },
    physicalGeneral: 'Bom estado geral, corado, hidratado, afebril, consciente e orientado.',
    physicalSeg: 'OTOSCOPIA BILATERAL: Condutos auditivos externos livres. Membranas timpânicas íntegras, translúcidas, com reflexo luminoso presente bilateralmente. Sem perfuração ou retração. | TESTE DE RINNE (diapasão 512 Hz): Positivo bilateralmente (CA > CO) — sugere perda neurossensorial ou audição normal. | TESTE DE WEBER: Lateraliza para nenhum dos lados (centralizado) — sem assimetria significativa.',
    labs: [
      { test: 'TSH', val: '2,1 mUI/L', ref: '0,4–4,0 mUI/L', alt: false },
      { test: 'Glicemia de jejum', val: '98 mg/dL', ref: '70–99 mg/dL', alt: false },
      { test: 'Hemograma', val: 'Normal', ref: '—', alt: false }
    ],
    image: 'Audiometria tonal (se solicitada): Perda auditiva neurossensorial bilateral simétrica, com entalhe (notch) em 4.000 Hz bilateralmente. Limiar médio em 500–2.000 Hz: 25 dB (normal). Limiar em 4.000 Hz: 55 dB (perda moderada). Padrão compatível com PAIR (Perda Auditiva Induzida por Ruído).',
    note: 'Entregar sinais vitais ao início. Entregar otoscopia e diapasão ao exame físico. Entregar audiometria somente se solicitada. Exames laboratoriais somente se solicitados.',
    patientProfile: 'Fernando N., 42 anos, masculino, operador de máquinas em metalúrgica, casado, 2 filhos.',
    script: [
      { trigger: 'Queixa principal', speech: 'Doutor, tô ficando surdo. Principalmente quando tô em lugar barulhento, não consigo entender o que falam.' },
      { trigger: 'Sobre início', speech: 'Foi piorando aos poucos, uns 8 meses assim. Achei que era coisa da idade.' },
      { trigger: 'Sobre o trabalho', speech: 'Trabalho numa metalúrgica há 18 anos, tem muito barulho de máquina o dia todo.' },
      { trigger: 'Sobre proteção auricular', speech: 'A empresa dá o protetor, mas eu não gosto de usar, é desconfortável.' },
      { trigger: 'Sobre zumbido', speech: 'Ah sim, tenho um zumbido constante nos dois ouvidos, já faz uns 2 anos, achei que era normal.' },
      { trigger: 'Sobre sintomas associados', speech: 'Vertigem não tenho. Dor de ouvido também não.' },
      { trigger: 'Sobre audição em repouso', speech: 'Em casa quando tô num lugar quieto entendo bem, o problema é quando tem barulho.' },
      { trigger: 'Pergunta ativa 1', speech: 'Isso tem cura, doutor? Vou ficar surdo de vez?' },
      { trigger: 'Pergunta ativa 2', speech: 'Preciso usar aparelho? E o meu serviço, posso continuar?' }
    ],
    hiddenInfo: 'Não usa o protetor auricular fornecido pela empresa regularmente — só revela se perguntado sobre uso do EPI. | Participou de shows e eventos com música alta nos fins de semana nos últimos anos — só revela se perguntado sobre outros ambientes com ruído.',
    actorBehavior: 'Tom preocupado com o futuro profissional. Levemente defensivo sobre o não uso do protetor auricular. Colaborativo quando abordado sem julgamento. Fica ansioso ao discutir possibilidade de não melhora.'
  },
  instC: {
    diagnosis: 'Perda auditiva induzida por ruído (PAIR) — perda neurossensorial bilateral simétrica com entalhe em 4.000 Hz — grau moderado, associada à exposição ocupacional a ruído por 18 anos sem uso de EPI.',
    differentials: [
      'Presbiacusia — perda neurossensorial bilateral simétrica de início em altas frequências, mas em geral ≥ 60 anos e de progressão lenta; aqui paciente tem 42 anos com exposição ocupacional clara.',
      'Hipoacusia por ototoxicidade medicamentosa — aminoglicosídeos, cisplatina, furosemida; anamnese sem uso desses fármacos.',
      'Neurinoma do acústico — perda assimétrica unilateral, com zumbido unilateral; aqui perda é simétrica.'
    ],
    context: 'Adulto de meia-idade com exposição ocupacional a ruído intenso por 18 anos sem proteção adequada, apresentando PAIR com padrão audiométrico clássico (entalhe em 4.000 Hz) e zumbido bilateral crônico. Quadro de doença ocupacional com implicações previdenciárias e trabalhistas.',
    justify: 'Exposição prolongada a ruído ocupacional + MT íntegra + Rinne positivo bilateral + audiometria com entalhe em 4.000 Hz = PAIR. O entalhe audiométrico em 4.000 Hz é o padrão patognomônico de PAIR. A simetria bilateral afasta patologia retrococlear unilateral.',
    expectedAnamnesis: 'Tempo de evolução da hipoacusia e progressão | Exposição ocupacional a ruído (tempo, nível, tipo de máquina) | Uso de EPI (protetor auricular) | Zumbido: tempo, característica, bilateralidade | Vertigem (afastar doença de Ménière) | Uso de medicamentos ototóxicos | Histórico familiar de surdez | Outros ambientes com ruído (shows, eventos)',
    expectedPhysical: 'Otoscopia bilateral: MT íntegra (afastar causa condutiva) | Teste de Rinne: positivo bilateral (CA > CO) — neurossensorial | Teste de Weber: centralizado (perda simétrica) | Avaliação geral: sem sinais de síndrome vestibular',
    expectedExams: [
      { exam: 'Audiometria tonal + vocal', justify: 'Confirmar tipo e grau da perda auditiva — obrigatório', expected: 'Entalhe em 4.000 Hz bilateral' },
      { exam: 'Imitanciometria', justify: 'Afastar componente condutivo (tímpano e cadeia ossicular)', expected: 'Normal' },
      { exam: 'TSH', justify: 'Afastar hipotireoidismo como causa de hipoacusia', expected: 'Normal' }
    ],
    expectedConduct: 'Farmacológica: Sem tratamento farmacológico eficaz para PAIR estabelecida. Tratamento de zumbido: encaminhamento para terapia sonora/TCC se incapacitante. | Não farmacológica: Uso obrigatório e correto de EPI (protetor auricular) no trabalho; afastamento de exposição a ruído intenso. | Encaminhamento: Otorrinolaringologista para avaliação e protetização (AASI — aparelho de amplificação sonora individual) se necessário. Notificação como doença ocupacional (CAT — Comunicação de Acidente de Trabalho). Encaminhamento ao serviço de saúde do trabalhador. | Orientações ao paciente: Explicar que a perda já instalada não tem reversão; uso consistente do EPI evita piora; direito ao AASI pelo SUS (portaria MS). | Seguimento: Audiometria de controle anual; acompanhamento com otorrino.',
    expectedCommunication: "Apresentação: Apresentar-se, perguntar sobre o contexto de trabalho do paciente. | Comunicação do diagnóstico: 'O senhor tem uma perda auditiva causada pelo barulho do trabalho. Infelizmente essa perda não volta, mas podemos evitar que piore usando o protetor corretamente.' | Escuta ativa: Acolher a preocupação com o emprego; informar sobre direitos trabalhistas sem julgamento.",
    criticalErrors: [
      'Não solicitar audiometria tonal para confirmar diagnóstico e tipo de perda',
      'Não identificar o contexto ocupacional como fator causal',
      'Informar ao paciente que a perda auditiva é reversível',
      'Não orientar sobre uso obrigatório de EPI e notificação como doença ocupacional',
      'Não encaminhar ao otorrinolaringologista e/ou serviço de saúde do trabalhador'
    ]
  },
  instD: {
    title: 'CHECKLIST — DIFICULDADE PARA OUVIR PROGRESSIVA EM ADULTO JOVEM',
    sections: [
      {
        h: 'COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE',
        items: [
          { item: 'Apresentou-se pelo nome ao paciente', score: 0.5, ref: 'CFM 2.217/2018' },
          { item: 'Abordou o não uso de EPI sem julgamento', score: 0.5, ref: 'PNHAH/MS, 2001' },
          { item: 'Comunicou o prognóstico (perda irreversível) com clareza e empatia', score: 0.5, ref: 'PNHAH/MS, 2001' }
        ]
      },
      {
        h: 'ANAMNESE',
        items: [
          { item: 'Investigou exposição ocupacional a ruído (tempo, tipo, EPI)', score: 1.0, ref: 'NR-7/MT, 2020' },
          { item: 'Questionou zumbido (tempo, bilateral, características)', score: 0.5, ref: 'SBO, 2022' },
          { item: 'Perguntou sobre vertigem, otalgia e otorreia', score: 0.5, ref: 'SBO, 2022' },
          { item: 'Investigou uso de medicamentos ototóxicos e histórico familiar', score: 0.5, ref: 'SBO, 2022' }
        ]
      },
      {
        h: 'EXAME FÍSICO',
        items: [
          { item: 'Realizou otoscopia bilateral (MT íntegra)', score: 0.5, ref: 'SBO, 2022' },
          { item: 'Realizou teste de Rinne e Weber com diapasão', score: 1.0, ref: 'SBO, 2022' }
        ]
      },
      {
        h: 'RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
        items: [
          { item: 'Formulou hipótese de PAIR', score: 1.0, ref: 'SBO 2022 / NR-7' },
          { item: 'Solicitou audiometria tonal e imitanciometria', score: 1.0, ref: 'SBO 2022 / NR-7' },
          { item: 'Citou ao menos um diagnóstico diferencial relevante', score: 0.5, ref: 'SBO, 2022' }
        ]
      },
      {
        h: 'CONDUTA E ORIENTAÇÃO AO PACIENTE',
        items: [
          { item: 'Encaminhou ao otorrinolaringologista e serviço de saúde do trabalhador', score: 0.5, ref: 'SBO 2022 / NR-7' },
          { item: 'Orientou uso obrigatório de EPI e notificação como doença ocupacional (CAT)', score: 1.0, ref: 'NR-7/MT 2020 / Lei 8.213/91' },
          { item: 'Informou ao paciente que a perda instalada não é reversível', score: 0.5, ref: 'SBO, 2022' }
        ]
      }
    ]
  }
},

// CASO 07 — VPPB
{
  id: 7,
  title: 'Tontura com sensação de girar ao virar na cama',
  sub: 'UBS — Atenção Primária',
  tema: 'otorrinolaringologia',
  topic: 'VPPB — Vertigem Posicional Paroxística Benigna',
  level: 'moderado',
  cardAccent: '#00897B',
  instA: {
    scenario: 'Atenção Primária — UBS. Consultório, turno matutino.',
    patient: 'I.C., 52 anos, feminina, professora, sem comorbidades relatadas.',
    complaint: 'Tontura com sensação de que tudo gira ao virar na cama ou levantar rápido, há 1 semana.',
    tasks: [
      'Realize a anamnese dirigida ao caso',
      'Realize o exame físico pertinente, incluindo as manobras específicas',
      'Formule a hipótese diagnóstica e os diferenciais',
      'Proponha a conduta terapêutica adequada',
      'Oriente a paciente sobre o tratamento e prognóstico'
    ]
  },
  instB: {
    vitals: {
      PA: '126/80 mmHg',
      FC: '76 bpm',
      FR: '16 irpm',
      Tax: '36,6°C',
      Peso: '66 kg',
      Altura: '1,63 m',
      IMC: '24,8 kg/m²'
    },
    physicalGeneral: 'Bom estado geral, corada, hidratada, afebril, consciente e orientada. Sem sinais de sofrimento agudo.',
    physicalSeg: 'NEUROLÓGICO: Sem déficit motor ou sensitivo focal. Marcha sem ataxia no momento da consulta. Sem nistagmo espontâneo em repouso. | MANOBRA DE DIX-HALLPIKE (ouvido direito): Após latência de 3–5 segundos, nistagmo geotrópico rotatório com componente vertical para cima, com duração de 15 segundos e fatigabilidade na repetição. Paciente relata forte sensação de vertigem durante a manobra. | MANOBRA DE DIX-HALLPIKE (ouvido esquerdo): Negativa. | OTOSCOPIA BILATERAL: Normal. | PRESSÃO ARTERIAL ORTOSTÁTICA: Sem queda significativa (descarta hipotensão ortostática).',
    labs: [
      { test: 'Hemograma', val: 'Normal', ref: '—', alt: false },
      { test: 'Glicemia de jejum', val: '94 mg/dL', ref: '70–99 mg/dL', alt: false },
      { test: 'TSH', val: '1,8 mUI/L', ref: '0,4–4,0 mUI/L', alt: false }
    ],
    image: null,
    note: 'Entregar sinais vitais ao início. Ao exame físico, fornecer resultado da manobra de Dix-Hallpike como impresso somente quando o candidato solicitar/realizar a manobra. Exames laboratoriais somente se solicitados. Não há indicação de neuroimagem nesse caso — se solicitada, informar que não há disponibilidade imediata e questionar o candidato sobre a indicação.',
    patientProfile: 'Ivete C., 52 anos, feminina, professora de ensino fundamental, casada.',
    script: [
      { trigger: 'Queixa principal', speech: "Doutora, toda vez que viro na cama ou levanto rápido, sinto que tudo gira. É assustador, parece que vou cair." },
      { trigger: 'Sobre duração dos episódios', speech: 'Passa rápido, uns 20, 30 segundos, mas quando acontece é muito intenso.' },
      { trigger: 'Sobre os gatilhos', speech: 'Sempre que mudo de posição, principalmente quando deito para o lado direito.' },
      { trigger: 'Sobre sintomas associados', speech: 'Não tenho zumbido nem perco a audição. Fico com um enjoo depois que passa.' },
      { trigger: 'Sobre queda', speech: 'Não caí ainda, mas tenho medo de cair.' },
      { trigger: 'Sobre febre e dor de cabeça', speech: 'Não tenho febre. Dor de cabeça forte não tenho não.' },
      { trigger: 'Sobre medicamentos', speech: 'Tomei um remédio de tontura que eu tinha em casa — dimenidrinato — ajudou um pouco no enjoo.' },
      { trigger: 'Pergunta ativa 1', speech: 'O que é isso, doutora? É do coração? É AVC?' },
      { trigger: 'Pergunta ativa 2', speech: 'Tem como curar? Precisa de remédio para sempre?' }
    ],
    hiddenInfo: 'Teve um trauma leve na cabeça há 2 semanas (bateu a cabeça em um armário) — só revela se perguntado sobre trauma recente ou evento precedente. | Não pratica atividade física há anos, vive em sedentarismo — irrelevante para o diagnóstico, mas pode ser abordado no contexto de saúde geral.',
    actorBehavior: 'Ansiosa, com medo de AVC ou doença cardíaca. Alivia visivelmente quando recebe explicação clara. Cooperativa nas manobras, mas relata forte desconforto durante Dix-Hallpike. Cabe ao candidato tranquilizá-la antes e durante a manobra.'
  },
  instC: {
    diagnosis: 'Vertigem posicional paroxística benigna (VPPB) de canal semicircular posterior direito — confirmada pela manobra de Dix-Hallpike positiva com nistagmo geotrópico rotatório com fatigabilidade.',
    differentials: [
      'Hipotensão ortostática — tontura ao levantar, mas sem nistagmo rotatório, sem latência, sem fatigabilidade; PA ortostática normal aqui.',
      'Neurite vestibular — vertigem contínua (não paroxística), sem relação com posição, com nistagmo espontâneo horizontal; aqui episódios breves e posicionais.',
      'Doença de Ménière — vertigem episódica + hipoacusia flutuante + zumbido + plenitude auricular; aqui sem alteração auditiva.',
      'AVC de fossa posterior — vertigem persistente, ataxia, déficit neurológico focal; aqui sem déficits e Dix-Hallpike positivo típico.'
    ],
    context: 'Mulher de 52 anos com VPPB de canal posterior direito, apresentando vertigem paroxística posicional de curta duração (< 1 min) desencadeada por mudança de posição, com Dix-Hallpike positivo com nistagmo geotrópico rotatório e fatigabilidade. Possível fator desencadeante: trauma cefálico leve há 2 semanas.',
    justify: 'Os critérios diagnósticos de VPPB estão presentes: vertigem rotatória paroxística, desencadeada por posição específica (decúbito lateral direito), curta duração (< 1 min), com Dix-Hallpike positivo mostrando nistagmo geotrópico rotatório com latência e fatigabilidade — padrão de otólitos no canal posterior.',
    expectedAnamnesis: 'Caracterização da tontura (rotatória vs. desequilíbrio vs. pré-síncope) | Relação com posição (qual posição desencadeia) | Duração dos episódios | Zumbido, hipoacusia, plenitude auricular (afastar Ménière) | Cefaleia, diplopia, disfagia, disartria (afastar AVC) | Trauma cefálico recente | Medicamentos (ototóxicos, anti-hipertensivos, benzodiazepínicos) | PA em ortostase',
    expectedPhysical: 'Sinais vitais: PA em decúbito e ortostase (afastar hipotensão ortostática) | Manobra de Dix-Hallpike bilateral — obrigatória: pesquisa de nistagmo, latência, direção, duração e fatigabilidade | Exame neurológico: marcha, coordenação, força, sensibilidade | Nistagmo espontâneo em repouso (afastar causa central) | Otoscopia bilateral',
    expectedExams: [
      { exam: 'Nenhum — diagnóstico clínico', justify: 'VPPB é diagnóstico clínico pela manobra de Dix-Hallpike', expected: '—' },
      { exam: 'RM de encéfalo', justify: 'Somente se: nistagmo atípico, sinais neurológicos focais, ausência de fatigabilidade', expected: 'Normal neste caso' }
    ],
    expectedConduct: 'Farmacológica: Meclizina ou dimenidrinato VO para controle de náuseas/enjoo — uso pontual, não como tratamento principal. Evitar uso prolongado de supressores vestibulares (retardam compensação). (SBO 2022) | Não farmacológica: Manobra de Epley para reposicionamento de otólitos — canal posterior direito. Taxa de sucesso > 80% em única sessão. Orientar sobre restrições posturais após a manobra nas primeiras 24–48h. (SBO 2022) | Encaminhamento: Fisioterapia vestibular se recorrência ou resposta incompleta. Otorrinolaringologista se refratário. | Orientações ao paciente: Explicar a causa (pedrinhas no ouvido interno), o caráter benigno, a alta taxa de cura com a manobra; orientar sobre precauções posturais pós-manobra. | Seguimento: Retorno em 1 semana se não melhora; prognóstico excelente com manobra de Epley.',
    expectedCommunication: "Apresentação: Apresentar-se, acolher a ansiedade da paciente. | Comunicação do diagnóstico: 'A senhora tem uma condição chamada VPPB, que em linguagem popular chamamos de \"cristais no ouvido\". Não é AVC nem doença do coração. A boa notícia é que tem cura com uma manobra simples.' | Escuta ativa: Validar o medo de AVC; explicar com linguagem acessível.",
    criticalErrors: [
      'Não realizar a manobra de Dix-Hallpike',
      'Prescrever supressor vestibular prolongado como tratamento principal',
      'Não realizar a manobra de Epley ou não mencionar o reposicionamento como conduta',
      'Solicitar TC/RM sem indicação (Dix-Hallpike típico com fatigabilidade não requer neuroimagem)',
      'Não afastar causas centrais de vertigem (sem exame neurológico)'
    ]
  },
  instD: {
    title: 'CHECKLIST — TONTURA COM SENSAÇÃO DE GIRAR AO VIRAR NA CAMA',
    sections: [
      { h: 'COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE', items: [
        { item: 'Apresentou-se e acolheu a ansiedade da paciente (medo de AVC)', score: 0.5, ref: 'CFM 2.217/2018' },
        { item: 'Explicou o diagnóstico em linguagem acessível ("cristais no ouvido")', score: 0.5, ref: 'PNHAH/MS, 2001' },
        { item: 'Tranquilizou a paciente sobre o caráter benigno e curável da condição', score: 0.5, ref: 'PNHAH/MS, 2001' }
      ]},
      { h: 'ANAMNESE', items: [
        { item: 'Caracterizou a tontura (rotatória, posicional, paroxística de curta duração)', score: 1.0, ref: 'SBO, 2022' },
        { item: 'Questionou zumbido, hipoacusia e plenitude auricular (afastar Ménière)', score: 0.5, ref: 'SBO, 2022' },
        { item: 'Investigou sinais de alarme central (cefaleia, diplopia, déficit focal)', score: 0.5, ref: 'SBO, 2022' },
        { item: 'Perguntou sobre trauma cefálico recente e medicamentos', score: 0.5, ref: 'SBO, 2022' }
      ]},
      { h: 'EXAME FÍSICO', items: [
        { item: 'Aferiu PA em ortostase (afastar hipotensão ortostática)', score: 0.5, ref: 'SBO, 2022' },
        { item: 'Realizou manobra de Dix-Hallpike bilateral e descreveu o nistagmo corretamente', score: 1.5, ref: 'SBO, 2022' },
        { item: 'Realizou exame neurológico sumário (marcha, coordenação, nistagmo espontâneo)', score: 0.5, ref: 'SBO, 2022' }
      ]},
      { h: 'RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO', items: [
        { item: 'Formulou hipótese de VPPB de canal posterior direito', score: 1.0, ref: 'SBO, 2022' },
        { item: 'Reconheceu que não há indicação de neuroimagem com Dix-Hallpike típico', score: 0.5, ref: 'SBO, 2022' }
      ]},
      { h: 'CONDUTA E ORIENTAÇÃO AO PACIENTE', items: [
        { item: 'Indicou e/ou realizou manobra de Epley como tratamento principal', score: 1.5, ref: 'SBO, 2022' },
        { item: 'Orientou restrições posturais após a manobra (24–48h)', score: 0.5, ref: 'SBO, 2022' },
        { item: 'Contraindicou uso prolongado de supressor vestibular', score: 0.5, ref: 'SBO, 2022' }
      ]}
    ]
  }
},

// CASO 08 — Neurite Vestibular
{
  id: 8,
  title: 'Tontura intensa que não para, com enjoo e vômito desde ontem',
  sub: 'UPA — Urgência e Emergência',
  tema: 'otorrinolaringologia',
  topic: 'Neurite Vestibular',
  level: 'moderado',
  cardAccent: '#00897B',
  instA: {
    scenario: 'UPA — Urgência e Emergência. Sala de observação, turno noturno.',
    patient: 'A.R., 46 anos, masculino, contador, sem comorbidades relatadas.',
    complaint: 'Tontura intensa e contínua com vômitos desde ontem, piora ao movimentar a cabeça.',
    tasks: [
      'Realize a anamnese dirigida ao caso',
      'Realize o exame físico pertinente',
      'Formule a hipótese diagnóstica e afaste causas centrais',
      'Proponha a conduta terapêutica imediata',
      'Oriente o paciente sobre o diagnóstico e seguimento'
    ]
  },
  instB: {
    vitals: {
      PA: '136/88 mmHg',
      FC: '96 bpm',
      FR: '18 irpm',
      Tax: '37,1°C',
      Peso: '80 kg',
      Altura: '1,76 m',
      IMC: '25,8 kg/m²'
    },
    physicalGeneral: 'Regular estado geral, pálido, sudoreico, hidratado, afebril, consciente e orientado. Extremamente incomodado com a movimentação.',
    physicalSeg: 'NEUROLÓGICO: Nistagmo espontâneo horizontal com componente rotatório, batendo para a esquerda (lado são), presente em posição neutra. Sem déficit motor ou sensitivo focal. Dismetria de membros: ausente. Marcha: impossível de avaliar — paciente não consegue ficar em pé. | TESTE DE IMPULSO CEFÁLICO (Head Impulse Test — HIT): Positivo — reflexo vestíbulo-ocular (RVO) anormal à direita (sacada corretiva visível ao impulso para a direita). Indica lesão periférica (vestibular direita). | TESTE SKEW: Negativo (sem desvio vertical dos olhos). | MANOBRA DE DIX-HALLPIKE: Não realizada pelo desconforto intenso do paciente. | OTOSCOPIA BILATERAL: Normal.',
    labs: [
      { test: 'Hemograma', val: 'Leucócitos 9.800/mm³, sem desvio', ref: '4.000–11.000/mm³', alt: false },
      { test: 'Glicemia', val: '104 mg/dL', ref: '70–99 mg/dL', alt: false },
      { test: 'Eletrólitos (Na/K)', val: 'Normais', ref: '—', alt: false }
    ],
    image: 'RM de encéfalo (se solicitada): Sem lesões isquêmicas agudas, sem hipersinal em tronco encefálico ou cerebelo. Estruturas de fossa posterior preservadas. Labirinto sem alterações.',
    note: 'Entregar sinais vitais ao início. Entregar achados do exame físico conforme o candidato solicita cada manobra. Reforçar que o paciente está visivelmente incapacitado pela tontura. Entregar RM somente se solicitada. Exames laboratoriais somente se solicitados.',
    patientProfile: 'Anderson R., 46 anos, masculino, contador, casado.',
    script: [
      { trigger: 'Queixa principal', speech: "Doutor, tô com uma tontura horrível desde ontem, parece que tudo gira o tempo todo, não consigo nem ficar em pé." },
      { trigger: 'Sobre início', speech: 'Comecei a sentir quando acordei ontem de manhã, de repente, sem avisar.' },
      { trigger: 'Sobre piora com movimento', speech: 'Qualquer mexida na cabeça piora muito. Fiquei deitado o dia todo.' },
      { trigger: 'Sobre vômito', speech: 'Vomitei umas 4 vezes, não consigo comer nada.' },
      { trigger: 'Sobre audição e zumbido', speech: 'Não tô com problema pra ouvir não. Zumbido também não.' },
      { trigger: 'Sobre cefaleia', speech: 'Dor de cabeça muito forte não tenho, só uma leve dor.' },
      { trigger: 'Sobre infecção prévia', speech: 'Tive uma gripe há uns 10 dias, tosse e coriza, já tava melhorando.' },
      { trigger: 'Sobre febre atual', speech: 'Febre não tenho agora.' },
      { trigger: 'Pergunta ativa 1', speech: 'Isso é AVC, doutor? Estou com muito medo.' },
      { trigger: 'Pergunta ativa 2', speech: 'Quando vai passar? Vou conseguir trabalhar amanhã?' }
    ],
    hiddenInfo: 'Infecção viral de vias aéreas superiores há 10 dias — só revela completamente se perguntado sobre doenças recentes ou infecção prévia. | Histórico de enxaqueca ocasional — só revela se perguntado sobre cefaleia prévia ou doenças neurológicas.',
    actorBehavior: 'Muito ansioso, com medo de AVC. Pálido, com desconforto evidente. Coopera com o exame, mas pede para não movimentar muito a cabeça. Alivia quando o candidato demonstra segurança e afasta causa grave.'
  },
  instC: {
    diagnosis: 'Neurite vestibular aguda — vertigem contínua de origem periférica, provavelmente pós-viral, com HIT positivo à direita e nistagmo horizontal para a esquerda, sem alteração auditiva e sem sinais neurológicos focais.',
    differentials: [
      'AVC de cerebelo/tronco (síndrome de Wallenberg) — vertigem contínua, mas com HIT negativo, nistagmo atípico (vertical ou de direção variável), ataxia, disfagia, déficit sensitivo; RM afasta.',
      'Labirintite infecciosa — vertigem + hipoacusia neurossensorial ipsilateral; aqui sem alteração auditiva.',
      'Doença de Ménière — vertigem episódica (não contínua), com hipoacusia flutuante, zumbido e plenitude auricular.'
    ],
    context: 'Adulto de meia-idade com neurite vestibular aguda provavelmente pós-viral (IVAS 10 dias antes), apresentando vertigem contínua incapacitante com nistagmo periférico, HIT positivo e ausência de déficits neurológicos ou alteração auditiva.',
    justify: 'Tríade de neurite vestibular: vertigem contínua de início súbito + nistagmo horizontal para lado são + HIT positivo (RVO alterado para lado afetado). Ausência de déficit auditivo afasta labirintite. Ausência de sinais centrais (HIT positivo, SKEW negativo, nistagmo unidirecional) afasta AVC — regra HINTS (HIT, Nystagmus direction, Test of Skew). RM normal confirma.',
    expectedAnamnesis: 'Caracterização da tontura (contínua vs. paroxística) | Início (súbito ao acordar) | Náuseas, vômitos | Zumbido e hipoacusia (afastar labirintite e Ménière) | Cefaleia intensa (afastar AVC/hemorragia) | Diplopia, disfagia, disartria (afastar síndrome de Wallenberg) | Infecção viral recente (fator causal provável) | Medicamentos (aminoglicosídeos, anticonvulsivantes)',
    expectedPhysical: 'Sinais vitais | Avaliação do nistagmo espontâneo: direção, tipo (horizontal = periférico; vertical/multidirecional = central) | HIT (Head Impulse Test) — obrigatório: positivo = periférico; negativo = central | Teste SKEW — desvio vertical: positivo = central | Marcha e coordenação (ataxia de tronco = sinal central) | Otoscopia bilateral',
    expectedExams: [
      { exam: 'RM de encéfalo com FLAIR/DWI', justify: 'Afastar AVC de fossa posterior — indicado se HIT negativo ou sinais centrais', expected: 'Normal neste caso' },
      { exam: 'Audiometria', justify: 'Afastar labirintite (hipoacusia associada)', expected: 'Normal' },
      { exam: 'Hemograma, glicemia, eletrólitos', justify: 'Afastar causas metabólicas', expected: 'Normais' }
    ],
    expectedConduct: 'Farmacológica: Dimenidrinato EV (ou VO) para náuseas/vômitos — uso curto (máximo 3 dias). Corticoterapia: prednisona 1 mg/kg/dia por 5 dias, redução progressiva — indicada nas primeiras 72h para acelerar recuperação. (SBO 2022 / UpToDate ⚠️ para corticoide) | Não farmacológica: Repouso relativo; reabilitação vestibular precoce (fisioterapia) após fase aguda — acelera compensação central. | Encaminhamento: Neurologia/otorrinolaringologia se sem melhora em 72h. Urgência neurológica se surgir qualquer sinal central. | Orientações ao paciente: Explicar que não é AVC; é uma inflamação do nervo do equilíbrio, provavelmente após a gripe; tende a melhorar em dias a semanas. | Seguimento: Reavaliação em 48–72h; fisioterapia vestibular após fase aguda.',
    expectedCommunication: 'Apresentação: Apresentar-se, acolher o medo do paciente. | Comunicação do diagnóstico: "O senhor não está tendo um AVC. Tem uma inflamação no nervo do equilíbrio, provavelmente por causa da gripe que teve. É tratável e melhora com o tempo." | Escuta ativa: Responder diretamente ao medo de AVC com clareza e segurança.',
    criticalErrors: [
      'Não realizar o HIT (Head Impulse Test) — exame essencial para diferenciar periférico de central',
      'Não afastar AVC (não buscar sinais neurológicos centrais)',
      'Prescrever supressor vestibular por mais de 3 dias (retarda a compensação central)',
      'Diagnosticar AVC sem base clínica e encaminhar desnecessariamente para neurologia de emergência',
      'Não mencionar reabilitação vestibular como parte do tratamento'
    ]
  },
  instD: {
    title: 'CHECKLIST — TONTURA INTENSA E CONTÍNUA COM VÔMITO DESDE ONTEM',
    sections: [
      { h: 'COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE', items: [
        { item: 'Apresentou-se e acolheu o medo do paciente (medo de AVC)', score: 0.5, ref: 'CFM 2.217/2018' },
        { item: 'Comunicou o diagnóstico afastando AVC com clareza e segurança', score: 0.5, ref: 'PNHAH/MS, 2001' },
        { item: 'Utilizou linguagem acessível ao explicar neurite vestibular', score: 0.5, ref: 'PNHAH/MS, 2001' }
      ]
    },
      { h: 'ANAMNESE', items: [
        { item: 'Caracterizou a tontura (contínua, início súbito ao acordar)', score: 0.5, ref: 'SBO, 2022' },
        { item: 'Questionou zumbido e hipoacusia (afastar labirintite/Ménière)', score: 0.5, ref: 'SBO, 2022' },
        { item: 'Investigou sinais de alarme central (cefaleia intensa, diplopia, disfagia, déficit focal)', score: 1.0, ref: 'SBO, 2022' },
        { item: 'Perguntou sobre infecção viral recente', score: 0.5, ref: 'SBO, 2022' }
      ]},
      { h: 'EXAME FÍSICO', items: [
        { item: 'Avaliou nistagmo espontâneo e descreveu direção corretamente (horizontal, unidirecional)', score: 1.0, ref: 'SBO, 2022' },
        { item: 'Realizou HIT (Head Impulse Test) e interpretou corretamente (positivo = periférico)', score: 1.5, ref: 'SBO 2022 / HINTS' },
        { item: 'Realizou teste SKEW (desvio vertical) e exame neurológico focal', score: 0.5, ref: 'SBO 2022 / HINTS' }
      ]},
      { h: 'RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO', items: [
        { item: 'Formulou hipótese de neurite vestibular e afastou AVC usando critérios HINTS', score: 1.0, ref: 'SBO 2022 / HINTS' },
        { item: 'Indicou RM de encéfalo com justificativa correta (se HIT negativo ou sinal central)', score: 0.5, ref: 'SBO, 2022' }
      ]},
      { h: 'CONDUTA E ORIENTAÇÃO AO PACIENTE', items: [
        { item: 'Prescreveu antiemético/supressor vestibular por prazo curto (máx 3 dias)', score: 0.5, ref: 'SBO, 2022' },
        { item: 'Mencionou corticoterapia nas primeiras 72h como opção terapêutica', score: 0.5, ref: 'SBO 2022 ⚠️ UpToDate' },
        { item: 'Indicou reabilitação vestibular após fase aguda', score: 0.5, ref: 'SBO, 2022' },
        { item: 'Orientou retorno imediato se surgir sinal neurológico (alarme)', score: 0.5, ref: 'SBO, 2022' }
      ]}
    ]
  }
},

// CASO 09 — Rinite Alérgica
{
  id: 9,
  title: 'Espirros e coriza que pioram em casa e no trabalho há meses',
  sub: 'UBS — Atenção Primária',
  tema: 'otorrinolaringologia',
  topic: 'Rinite Alérgica',
  level: 'moderado',
  cardAccent: '#1976D2',
  instA: {
    scenario: 'Atenção Primária — UBS. Consultório, turno matutino.',
    patient: 'B.S., 28 anos, feminina, bibliotecária, sem comorbidades relatadas.',
    complaint: 'Espirros em salva, coriza clara e coceira no nariz que pioram há cerca de 6 meses, especialmente ao acordar.',
    tasks: [
      'Realize a anamnese dirigida ao caso',
      'Realize o exame físico pertinente',
      'Formule a hipótese diagnóstica e os diferenciais',
      'Solicite os exames complementares adequados',
      'Proponha a conduta terapêutica e oriente a paciente'
    ]
  },
  instB: {
    vitals: {
      PA: '110/70 mmHg',
      FC: '72 bpm',
      FR: '15 irpm',
      Tax: '36,4°C',
      Peso: '58 kg',
      Altura: '1,65 m',
      IMC: '21,3 kg/m²'
    },
    physicalGeneral: 'Bom estado geral, corada, hidratada, afebril, consciente e orientada. Olheiras (sinal de Denie-Morgan). Prega nasal transversa ("saudação alérgica"). Discreta hiperemia conjuntival bilateral.',
    physicalSeg: 'RINOSCOPIA ANTERIOR: Mucosa nasal pálida e edemaciada bilateralmente. Cornetos inferiores hipertrofiados. Presença de secreção serosa abundante. Sem pólipos visíveis. | OROFARINGE: Secreção mucosa posterior (gotejamento pós-nasal). Sem exsudato amigdaliano. | OTOSCOPIA BILATERAL: Normal. | AUSCULTA PULMONAR: Murmúrio vesicular presente bilateralmente, sem sibilos.',
    labs: [
      { test: 'Hemograma', val: 'Eosinófilos 650/mm³ (8%)', ref: '< 500/mm³ (< 5%)', alt: true },
      { test: 'IgE total', val: '320 UI/mL', ref: '< 100 UI/mL', alt: true }
    ],
    image: null,
    note: 'Entregar sinais vitais ao início. Entregar achados do exame físico ao exame. Entregar hemograma e IgE somente se solicitados. Se o candidato solicitar teste cutâneo (prick test) ou IgE específica, informar que não estão disponíveis na UBS e devem ser solicitados via encaminhamento.',
    patientProfile: 'Beatriz S., 28 anos, feminina, bibliotecária, solteira.',
    script: [
      { trigger: 'Queixa principal', speech: 'Doutora, tô com muito espirro, o nariz escorrendão e coçando muito, especialmente de manhã quando acordo.' },
      { trigger: 'Sobre início', speech: 'Comecei a notar isso há uns 6 meses, foi piorando aos poucos.' },
      { trigger: 'Sobre gatilhos', speech: 'Piora muito quando eu faço limpeza em casa ou quando entro nos arquivos do trabalho, onde tem muito livro velho.' },
      { trigger: 'Sobre coceira', speech: 'Coça o nariz, os olhos, até o céu da boca às vezes.' },
      { trigger: 'Sobre coriza', speech: 'A coriza é clarinha, tipo água.' },
      { trigger: 'Sobre estações', speech: 'Parece que no outono e inverno é pior.' },
      { trigger: 'Sobre sono', speech: 'Fico com o nariz entupido à noite, acordo várias vezes.' },
      { trigger: 'Sobre medicamentos', speech: 'Tomei loratadina algumas vezes, ajudou bastante, mas parei quando melhorou.' },
      { trigger: 'Pergunta ativa 1', speech: 'É alergia mesmo, doutora? O que me deixa assim?' },
      { trigger: 'Pergunta ativa 2', speech: 'Tem como curar? Preciso tomar remédio pra sempre?' }
    ],
    hiddenInfo: 'Tem gato em casa há 1 ano (coincide com o início dos sintomas) — só revela se perguntado sobre animais domésticos. | Histórico familiar: mãe com asma e pai com rinite — só revela se perguntado sobre histórico familiar de atopia.',
    actorBehavior: 'Tranquila, levemente incomodada com os sintomas crônicos. Colaborativa. Fica surpresa ao relacionar o gato com os sintomas. Curiosa sobre imunoterapia.'
  },
  instC: {
    diagnosis: 'Rinite alérgica persistente moderada-grave, provavelmente sensibilizada a ácaros da poeira doméstica e pelo de gato, com rinoconjuntivite associada.',
    differentials: [
      'Rinite vasomotora — desencadeada por estímulos não alérgicos (temperatura, odores fortes, fumaça); sem eosinofilia, IgE normal, teste cutâneo negativo.',
      'Rinossinusite crônica — congestão nasal predominante, cefaleia, pressão facial, secreção purulenta; aqui secreção é serosa.',
      'Rinite medicamentosa — uso prolongado de descongestionante tópico (oximetazolina); aqui sem esse uso.'
    ],
    context: 'Adulta jovem com história familiar de atopia, trabalhando em ambiente com exposição a alérgenos (poeira de livros, ácaros) e com gato doméstico, apresentando rinite alérgica persistente com rinoconjuntivite. Eosinofilia e IgE total elevada corroboram mecanismo alérgico.',
    justify: 'Tétrade clássica de rinite alérgica: espirros em salva + coriza aquosa + prurido nasal/ocular + congestão nasal. Piora em ambientes com poeira e com gato, associada a histórico familiar de atopia, eosinofilia e IgE total elevada. Mucosa pálida e cornetos hipertrofiados à rinoscopia confirmam quadro alérgico.',
    expectedAnamnesis: 'Caracterização dos sintomas: espirros, coriza, prurido, obstrução | Padrão temporal: perene vs. sazonal | Gatilhos ambientais (poeira, animais, mofo, pólen, produtos químicos) | Sintomas oculares (rinoconjuntivite) | Comprometimento do sono | Histórico familiar de atopia (asma, rinite, eczema) | Histórico pessoal de asma ou eczema (comorbidades atópicas) | Uso de medicamentos (antihistamínico, corticoide nasal, descongestionante) | Animais domésticos',
    expectedPhysical: 'Prega nasal transversa e olheiras ("saudação alérgica" e sinal de Denie-Morgan) | Rinoscopia: mucosa pálida, edemaciada, cornetos hipertrofiados, secreção serosa | Olhos: conjuntivite (hiperemia, lacrimejamento) | Ausculta pulmonar: afastar asma associada (sibilos) | Pesquisa de pólipos nasais',
    expectedExams: [
      { exam: 'Hemograma com diferencial', justify: 'Pesquisa de eosinofilia', expected: 'Eosinofilia' },
      { exam: 'IgE total sérica', justify: 'Triagem de atopia', expected: 'Elevada' },
      { exam: 'Teste cutâneo (prick test) ou IgE específica (RAST)', justify: 'Identificar o alérgeno causador — encaminhar para alergologista', expected: 'Positivo para ácaro/pelo de gato' },
      { exam: 'Espirometria', justify: 'Rastrear asma associada (em 30–40% dos casos de rinite alérgica)', expected: 'Normal ou leve obstrução reversível' }
    ],
    expectedConduct: 'Farmacológica: 1ª linha: corticoide intranasal (mometasona ou budesonida spray) — 1 a 2 jatos em cada narina, 1x/dia, uso contínuo. Antihistamínico oral não sedativo (loratadina 10 mg/dia ou cetirizina 10 mg/dia) para alívio de sintomas agudos. (SBAI 2021 / RENAME 2022) | Não farmacológica: Controle ambiental: capa antiácaro no colchão e travesseiro; reduzir exposição ao gato (realocar o animal idealmente); lavagem nasal com soro fisiológico. | Encaminhamento: Alergologista para teste cutâneo e imunoterapia (vacina) se sintomas persistentes. Otorrinolaringologista se pólipo nasal ou complicações. | Orientações ao paciente: Explicar que a rinite alérgica não tem cura definitiva (exceto imunoterapia), mas tem controle excelente; importância do uso contínuo do corticoide nasal; orientar sobre o papel do gato nos sintomas. | Seguimento: Retorno em 4–6 semanas para reavaliação; rastreio de asma.',
    expectedCommunication: 'Apresentação: Apresentar-se, perguntar sobre o contexto de vida da paciente. | Comunicação do diagnóstico: "A senhora tem rinite alérgica. Seu sistema imune reage exageradamente a partículas como poeira e pelo de gato. Isso causa todos esses sintomas. Tem tratamento e controle excelente." | Escuta ativa: Acolher a surpresa com o papel do gato; não impor decisão sobre o animal, mas informar claramente.',
    criticalErrors: [
      'Prescrever corticoide sistêmico oral como 1ª linha para rinite alérgica',
      'Não investigar ou mencionar controle ambiental (alérgenos)',
      'Não realizar ou solicitar ausculta pulmonar para afastar asma associada',
      'Usar antihistamínico sedativo (prometazina) de 1ª linha desnecessariamente',
      'Não encaminhar ao alergologista para imunoterapia'
    ]
  },
  instD: {
    title: 'CHECKLIST — ESPIRROS E CORIZA QUE PIORAM EM CASA E NO TRABALHO',
    sections: [
      { h: 'COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE', items: [
        { item: 'Apresentou-se pelo nome e cumprimentou a paciente', score: 0.5, ref: 'CFM 2.217/2018' },
        { item: 'Explicou o papel dos alérgenos (gato, poeira) sem julgamento', score: 0.5, ref: 'PNHAH/MS, 2001' },
        { item: 'Utilizou linguagem acessível ao explicar rinite alérgica e seu controle', score: 0.5, ref: 'PNHAH/MS, 2001' }
      ]},
      { h: 'ANAMNESE', items: [
        { item: 'Caracterizou os sintomas (espirros, coriza aquosa, prurido, obstrução)', score: 0.5, ref: 'SBAI, 2021' },
        { item: 'Identificou gatilhos ambientais (poeira, livros velhos, gato)', score: 1.0, ref: 'SBAI, 2021' },
        { item: 'Questionou histórico familiar de atopia (asma, rinite, eczema)', score: 0.5, ref: 'SBAI, 2021' },
        { item: 'Investigou sintomas de asma associada (falta de ar, sibilância, tosse)', score: 0.5, ref: 'SBAI, 2021' },
        { item: 'Perguntou sobre comprometimento do sono e da qualidade de vida', score: 0.5, ref: 'SBAI, 2021' }
      ]},
      { h: 'EXAME FÍSICO', items: [
        { item: 'Identificou sinais alérgicos externos (prega nasal, olheiras)', score: 0.5, ref: 'SBAI, 2021' },
        { item: 'Realizou rinoscopia e descreveu mucosa pálida e cornetos hipertrofiados', score: 1.0, ref: 'SBAI, 2021' },
        { item: 'Realizou ausculta pulmonar para afastar asma', score: 0.5, ref: 'SBAI / GINA, 2023' }
      ]},
      { h: 'RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO', items: [
        { item: 'Formulou hipótese de rinite alérgica persistente', score: 1.0, ref: 'SBAI, 2021' },
        { item: 'Solicitou IgE total e hemograma com diferencial', score: 0.5, ref: 'SBAI, 2021' },
        { item: 'Indicou encaminhamento ao alergologista para prick test e imunoterapia', score: 0.5, ref: 'SBAI, 2021' }
      ]},
      { h: 'CONDUTA E ORIENTAÇÃO AO PACIENTE', items: [
        { item: 'Prescreveu corticoide intranasal (mometasona ou budesonida) como 1ª linha', score: 1.0, ref: 'SBAI 2021 / RENAME 2022' },
        { item: 'Prescreveu antihistamínico oral não sedativo (loratadina ou cetirizina)', score: 0.5, ref: 'RENAME, 2022' },
        { item: 'Orientou controle ambiental (capa antiácaro, redução da exposição ao gato)', score: 0.5, ref: 'SBAI, 2021' }
      ]}
    ]
  }
},

// CASO 10 — Rinite Vasomotora
{
  id: 10,
  title: 'Nariz entupido o tempo todo, piora com cheiros fortes e mudança de temperatura',
  sub: 'Ambulatório — Clínica Médica',
  tema: 'otorrinolaringologia',
  topic: 'Rinite Vasomotora (Não Alérgica)',
  level: 'moderado',
  cardAccent: '#1976D2',
  instA: {
    scenario: 'Ambulatório de Clínica Médica. Consultório, turno vespertino.',
    patient: 'T.M., 45 anos, feminina, cozinheira, hipertensa em uso de enalapril.',
    complaint: 'Nariz entupido quase todos os dias, piora com vapores de cozinha, cheiros fortes e ar-condicionado, há cerca de 1 ano.',
    tasks: [
      'Realize a anamnese dirigida ao caso',
      'Realize o exame físico pertinente',
      'Formule a hipótese diagnóstica e os diferenciais',
      'Solicite os exames complementares se necessário',
      'Proponha a conduta terapêutica e oriente a paciente'
    ]
  },
  instB: {
    vitals: {
      PA: '138/86 mmHg',
      FC: '78 bpm',
      FR: '16 irpm',
      Tax: '36,7°C',
      Peso: '70 kg',
      Altura: '1,62 m',
      IMC: '26,7 kg/m²'
    },
    physicalGeneral: 'Bom estado geral, corada, hidratada, afebril, consciente e orientada. Sem olheiras ou prega nasal.',
    physicalSeg: 'RINOSCOPIA ANTERIOR: Mucosa nasal hiperemiada e edemaciada bilateralmente (eritematosa — diferente da palidez da rinite alérgica). Cornetos inferiores hipertrofiados. Secreção mucosa aquosa. Sem pólipos visíveis. Desvio de septo leve para direita. | OROFARINGE: Gotejamento pós-nasal. Sem exsudato. | OTOSCOPIA BILATERAL: Normal. | AUSCULTA PULMONAR: Normal. | OLHOS: Sem hiperemia conjuntival (ausência de rinoconjuntivite — diferencial importante da rinite alérgica).',
    labs: [
      { test: 'Hemograma', val: 'Eosinófilos 220/mm³ (3%)', ref: '< 500/mm³', alt: false },
      { test: 'IgE total', val: '42 UI/mL', ref: '< 100 UI/mL', alt: false }
    ],
    image: null,
    note: 'Entregar sinais vitais ao início. Entregar achados do exame físico ao exame. Entregar hemograma e IgE somente se solicitados. A ausência de eosinofilia e IgE normal são dados importantes que diferenciam da rinite alérgica — o candidato deve interpretar.',
    patientProfile: 'Tereza M., 45 anos, feminina, cozinheira, casada, 3 filhos.',
    script: [
      { trigger: 'Queixa principal', speech: 'Doutora, meu nariz vive entupido, faz mais de um ano. É horrível, parece que nunca respiro direito.' },
      { trigger: 'Sobre gatilhos', speech: 'Piora quando entro na cozinha com vapor, quando alguém usa perfume forte perto de mim, ou quando liga o ar-condicionado.' },
      { trigger: 'Sobre espirros', speech: 'Espirro às vezes, mas não é aquele espirro em série igual de quem tem alergia.' },
      { trigger: 'Sobre coriza', speech: 'Sai água do nariz às vezes, mas mais é aquela sensação de entupimento mesmo.' },
      { trigger: 'Sobre coceira', speech: 'Coceira no nariz não tenho quase. Nos olhos também não.' },
      { trigger: 'Sobre estações', speech: 'Não muda muito conforme a época do ano, é o ano todo.' },
      { trigger: 'Sobre medicamentos', speech: 'Já usei aquela gotinha de nariz que descongesta, aliviei por umas horas, mas voltava pior depois.' },
      { trigger: 'Sobre histórico familiar', speech: 'Minha mãe era alérgica a poeira, mas eu nunca fui diagnosticada como alérgica.' },
      { trigger: 'Pergunta ativa 1', speech: 'Isso é alergia, doutora? Fiz exame de alergia uma vez e deu normal.' },
      { trigger: 'Pergunta ativa 2', speech: 'Posso continuar usando aquela gotinha de nariz? Ela ajuda na hora.' }
    ],
    hiddenInfo: 'Usa oximetazolina (spray nasal descongestionante) quase diariamente há 4 meses — só revela se perguntado sobre descongestionante nasal tópico especificamente. | Iniciou enalapril há 14 meses (antes do início dos sintomas) — só revela se perguntado sobre quando começou o anti-hipertensivo.',
    actorBehavior: 'Tranquila, cansada dos sintomas crônicos. Levemente defensiva sobre o uso do descongestionante (alivia e ela gosta). Surpresa ao saber que o enalapril pode piorar o quadro e que a "gotinha" está causando dependência.'
  },
  instC: {
    diagnosis: 'Rinite vasomotora (não alérgica), com componente de rinite medicamentosa por uso crônico de oximetazolina e possível contribuição da tosse/rinite induzida por IECA (enalapril).',
    differentials: [
      'Rinite alérgica — espirros em salva, prurido nasal/ocular, mucosa pálida, eosinofilia, IgE elevada; aqui mucosa hiperemiada, sem eosinofilia, IgE normal, teste alérgico negativo previamente.',
      'Rinossinusite crônica — congestão persistente + cefaleia/pressão facial, secreção purulenta; aqui sem esses achados.',
      'Rinite medicamentosa (efeito rebote da oximetazolina) — uso crônico de descongestionante tópico causando congestão rebote; presente como fator complicador.',
      'Rinite induzida por IECA (enalapril) — irritação de vias aéreas por bradicinina; pode contribuir para a congestão.'
    ],
    context: 'Mulher de meia-idade, cozinheira, com rinite vasomotora exacerbada por uso crônico de oximetazolina (rinite medicamentosa) e possível contribuição do enalapril. Ausência de atopia (IgE e eosinofilia normais) e gatilhos não alérgicos (vapor, perfume, temperatura) confirmam mecanismo vasomotor.',
    justify: 'Obstrução nasal crônica + gatilhos não imunológicos (odores, temperatura, irritantes) + mucosa hiperemiada (e não pálida) + ausência de eosinofilia e IgE normal + teste de alergia negativo = rinite vasomotora. Uso de oximetazolina por > 3–5 dias configura rinite medicamentosa como fator agravante. Enalapril iniciado antes dos sintomas é fator colaborador a ser avaliado.',
    expectedAnamnesis: 'Caracterização da obstrução nasal (bilateral, perene) | Gatilhos não alérgicos: odores, temperatura, irritantes ambientais, posição | Ausência de prurido nasal/ocular e espirros em salva (afasta alérgica) | Uso de descongestionante nasal tópico (tipo, frequência, duração) | Medicamentos em uso: IECA (enalapril) — causa rinite/tosse | Histórico de teste alérgico | Histórico familiar de atopia | Ausência de sintomas oculares (rinoconjuntivite)',
    expectedPhysical: 'Rinoscopia: mucosa hiperemiada (não pálida), cornetos hipertrofiados, sem pólipos | Ausência de sinais alérgicos externos (sem olheiras, sem prega nasal transversa) | Ausência de rinoconjuntivite | Ausculta pulmonar: afastar asma',
    expectedExams: [
      { exam: 'Hemograma com diferencial', justify: 'Afastar eosinofilia (rinite alérgica)', expected: 'Sem eosinofilia' },
      { exam: 'IgE total', justify: 'Afastar atopia', expected: 'Normal' },
      { exam: 'Teste cutâneo (prick test)', justify: 'Confirmar ausência de sensibilização alérgica', expected: 'Negativo (ou encaminhar para alergologista)' }
    ],
    expectedConduct: 'Farmacológica: Corticoide intranasal (mometasona ou budesonida) — 1ª linha para rinite vasomotora. Suspensão gradual da oximetazolina (pode usar corticoide nasal para suavizar o desmame). Avaliar troca do enalapril por outro anti-hipertensivo (BRA — losartana) em conjunto com cardiologista/médico assistente. (SBAI 2021 / SBC 2020) | Não farmacológica: Lavagem nasal com soro fisiológico; evitar gatilhos (perfumes, mudanças bruscas de temperatura); ventilação adequada na cozinha. | Encaminhamento: Alergologista para confirmação diagnóstica; otorrinolaringologista se desvio de septo contribuindo para obstrução. | Orientações ao paciente: Explicar que não é alergia; é hipersensibilidade do nariz a irritantes; que a "gotinha" está piorando o problema (efeito rebote); que o tratamento com corticoide nasal é seguro e eficaz. | Seguimento: Retorno em 4–6 semanas para reavaliação.',
    expectedCommunication: 'Apresentação: Apresentar-se, criar vínculo com a paciente. | Comunicação do diagnóstico: "A senhora não tem alergia. Seu nariz é muito sensível a cheiros e temperatura — isso tem um nome: rinite vasomotora. E aquela gotinha que a senhora usa está causando uma dependência que piora a obstrução." | Escuta ativa: Acolher sem culpar pelo uso da oximetazolina; explicar o mecanismo de rebote de forma clara.',
    criticalErrors: [
      'Diagnosticar rinite alérgica sem eosinofilia, IgE normal e gatilhos não alérgicos',
      'Não identificar uso crônico de oximetazolina como causa de rinite medicamentosa',
      'Não investigar relação com enalapril como possível fator contribuinte',
      'Prescrever ou manter oximetazolina sem abordar o desmame',
      'Prescrever corticoide sistêmico oral como 1ª linha'
    ]
  },
  instD: {
    title: 'CHECKLIST — NARIZ ENTUPIDO QUE PIORA COM CHEIROS FORTES E TEMPERATURA',
    sections: [
      { h: 'COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE', items: [
        { item: 'Apresentou-se pelo nome e acolheu a paciente', score: 0.5, ref: 'CFM 2.217/2018' },
        { item: 'Explicou rinite vasomotora em linguagem acessível', score: 0.5, ref: 'PNHAH/MS, 2001' },
        { item: 'Abordou o uso crônico da oximetazolina sem julgamento, explicando o efeito rebote', score: 0.5, ref: 'SBAI, 2021' }
      ]},
      { h: 'ANAMNESE', items: [
        { item: 'Identificou gatilhos não alérgicos (vapor, perfume, temperatura, ar-condicionado)', score: 1.0, ref: 'SBAI, 2021' },
        { item: 'Questionou uso de descongestionante nasal tópico (oximetazolina) e duração', score: 1.0, ref: 'SBAI, 2021' },
        { item: 'Investigou uso de IECA (enalapril) e correlacionou com os sintomas', score: 0.5, ref: 'SBC 2020 / SBAI 2021' },
        { item: 'Perguntou sobre ausência de prurido ocular/nasal e espirros em salva (afastar alérgica)', score: 0.5, ref: 'SBAI, 2021' }
      ]},
      { h: 'EXAME FÍSICO', items: [
        { item: 'Realizou rinoscopia e identificou mucosa hiperemiada (não pálida)', score: 1.0, ref: 'SBAI, 2021' },
        { item: 'Avaliou ausência de sinais alérgicos externos (olheiras, prega nasal, conjuntivite)', score: 0.5, ref: 'SBAI, 2021' }
      ]},
      { h: 'RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO', items: [
        { item: 'Formulou hipótese de rinite vasomotora e afastou rinite alérgica com justificativa', score: 1.0, ref: 'SBAI, 2021' },
        { item: 'Identificou rinite medicamentosa por oximetazolina como fator agravante', score: 0.5, ref: 'SBAI, 2021' },
        { item: 'Solicitou IgE total e hemograma para afastar atopia', score: 0.5, ref: 'SBAI, 2021' }
      ]},
      { h: 'CONDUTA E ORIENTAÇÃO AO PACIENTE', items: [
        { item: 'Prescreveu corticoide intranasal como 1ª linha', score: 1.0, ref: 'SBAI 2021 / RENAME 2022' },
        { item: 'Orientou suspensão e desmame da oximetazolina', score: 0.5, ref: 'SBAI, 2021' },
        { item: 'Avaliou necessidade de troca do enalapril por BRA', score: 0.5, ref: 'SBC 2020 / SBAI 2021' }
      ]}
    ]
  }
}

]