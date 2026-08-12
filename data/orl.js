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
},

// CASO 11
{
  id: 11,
  title: 'Dor de cabeça e pressão na face há 10 dias, com catarro amarelado',
  sub: 'UBS — Atenção Primária',
  tema: 'otorrinolaringologia',
  topic: 'Rinossinusite Aguda Bacteriana',
  level: 'moderado',
  cardAccent: '#F57C00',
  instA: {
    scenario: 'Atenção Primária — UBS. Consultório, turno matutino.',
    patient: 'C.V., 38 anos, masculino, vendedor, sem comorbidades conhecidas.',
    complaint: 'Dor de cabeça e sensação de pressão na face, com catarro amarelado há 10 dias, piorou nos últimos 2 dias.',
    tasks: [
      'Realize a anamnese dirigida ao caso',
      'Realize o exame físico pertinente',
      'Formule a hipótese diagnóstica e os diferenciais',
      'Solicite os exames complementares se indicados',
      'Proponha a conduta terapêutica e oriente o paciente'
    ]
  },
  instB: {
    vitals: {
      PA: '124/80 mmHg',
      FC: '84 bpm',
      FR: '16 irpm',
      Tax: '37,9°C',
      Peso: '80 kg',
      Altura: '1,78 m',
      IMC: '25,2 kg/m²'
    },
    physicalGeneral: 'Bom estado geral, corado, hidratado, subfebril, consciente e orientado. Leve mal-estar.',
    physicalSeg: 'RINOSCOPIA ANTERIOR: Mucosa nasal hiperemiada e edemaciada bilateralmente, cornetos inferiores congestos. Secreção purulenta em meato médio bilateral. | PALPAÇÃO DE SEIOS PARANASAIS: Dor à palpação/percussão de seios maxilares bilateralmente, mais intensa à direita. Dor à palpação de seios frontais bilateralmente. | OROFARINGE: Secreção mucopurulenta em parede posterior. Tonsilas sem exsudato. | OTOSCOPIA BILATERAL: Normal. | AUSCULTA PULMONAR: Normal. | NEUROLÓGICO: Sem sinais de irritação meníngea. Sem déficits focais.',
    labs: [
      { test: 'Hemograma', val: 'Leucócitos 13.200/mm³, neutrófilos 78%, sem desvio à esquerda', ref: '4.000–11.000/mm³', alt: true },
      { test: 'PCR', val: '32 mg/L', ref: '< 5 mg/L', alt: true }
    ],
    image: 'Radiografia de seios paranasais (Caldwell e Waters — se solicitada): Opacificação parcial de seios maxilares bilateralmente, com nível hidroaéreo à direita. Seios frontais com velamento bilateral. Sem erosão óssea.',
    note: 'Entregar sinais vitais ao início. Entregar achados do exame físico ao exame. Entregar hemograma e PCR se solicitados. Entregar radiografia somente se solicitada. Orientar o candidato que TC de seios paranasais não está disponível na UBS — se solicitada, informar e questionar alternativa.',
    patientProfile: 'Carlos V., 38 anos, masculino, vendedor externo, casado, 2 filhos.',
    script: [
      { trigger: 'Queixa principal', speech: 'Doutor, tô com uma dor de cabeça e uma pressão no rosto há uns 10 dias, e saindo muito catarro amarelo.' },
      { trigger: 'Sobre início', speech: 'Começou como gripe normal, com coriza transparente, mas foi piorando. Agora o catarro ficou amarelo e a dor de cabeça aumentou.' },
      { trigger: 'Sobre a dor', speech: 'A dor é embaixo dos olhos e na testa, piora quando abaixo a cabeça ou quando acordo de manhã.' },
      { trigger: 'Sobre febre', speech: 'Tive febre ontem à noite, 38 graus, tomei dipirona e melhorou.' },
      { trigger: 'Sobre tratamento', speech: 'Tomei ibuprofeno e melhorou um pouco, mas voltou. Fui na farmácia e o farmacêutico me disse para comprar amoxicilina, mas ainda não comprei.' },
      { trigger: 'Sobre olfato', speech: 'Tô sentindo quase nada de cheiro faz uns 4 dias.' },
      { trigger: 'Sobre dentes', speech: 'Tenho uma dorzinha leve no dente superior direito, mas achei que era coincidência.' },
      { trigger: 'Pergunta ativa 1', speech: 'Isso é sinusite, doutor? Precisa de antibiótico?' },
      { trigger: 'Pergunta ativa 2', speech: 'Quanto tempo vai durar? Posso trabalhar?' }
    ],
    hiddenInfo: 'Dor em dente superior direito há alguns dias — pode indicar sinusite maxilar de origem dentária; só revela se perguntado especificamente sobre dores nos dentes ou saúde bucal. | Já teve episódio de sinusite há 2 anos tratada com antibiótico — só revela se perguntado sobre episódios anteriores.',
    actorBehavior: 'Leve mal-estar. Ansioso para receber o antibiótico e melhorar rápido (compromissos de trabalho). Colaborativo. Cabe ao candidato explicar a indicação correta do antibiótico e não ceder à pressão desnecessária.'
  },
  instC: {
    diagnosis: 'Rinossinusite aguda bacteriana — envolvimento maxilar bilateral e frontal bilateral — com critérios de bacteriana: duração > 10 dias, piora bifásica após melhora inicial, secreção purulenta, febre e dor facial intensa.',
    differentials: [
      'Rinossinusite viral aguda (resfriado comum) — duração < 10 dias, sem piora bifásica, sem secreção purulenta persistente; não indicado antibiótico.',
      'Rinossinusite de origem dentária — envolvimento maxilar unilateral com dor dentária ipsilateral; aqui bilateral com dor dentária leve — deve ser investigado.',
      'Cefaleia tensional — sem coriza purulenta, sem dor à palpação de seios, sem febre.',
      'Rinossinusite crônica — sintomas por mais de 12 semanas; aqui quadro agudo com 10 dias.'
    ],
    context: 'Adulto de meia-idade com rinossinusite aguda bacteriana maxilar e frontal bilateral, apresentando a tríade clássica: dor/pressão facial, obstrução nasal e secreção purulenta, com duração > 10 dias e piora bifásica após quadro viral inicial. Hiposmia e febre reforçam o diagnóstico bacteriano.',
    justify: 'Critérios de bacteriana pelo IDSA / SBOTA: (1) duração ≥ 10 dias sem melhora, ou (2) "double sickening" — melhora inicial seguida de piora, ou (3) início grave com febre ≥ 39°C e secreção purulenta por ≥ 3 dias consecutivos. Este caso preenche o critério (1) e (2). Radiografia com nível hidroaéreo reforça diagnóstico.',
    expectedAnamnesis: 'Duração e evolução dos sintomas (> 10 dias, piora bifásica) | Caracterização da dor facial (localização, piora ao abaixar a cabeça, pela manhã) | Tipo de secreção nasal (purulenta, coloração) | Febre: temperatura, duração | Hiposmia ou anosmia | Dor dentária (sinusite de origem odontogênica) | Tosse, otorreia (extensão da infecção) | Episódios anteriores de sinusite | Uso de medicamentos (ATB prévio, descongestionante) | Comorbidades (rinite alérgica, desvio de septo, pólipos)',
    expectedPhysical: 'Sinais vitais: temperatura (subfebril) | Rinoscopia: secreção purulenta em meato médio, mucosa hiperemiada | Palpação/percussão de seios paranasais: dor em maxilares e frontais | Transiluminação dos seios (se disponível) | Orofaringe: gotejamento pós-nasal purulento | Neurológico sumário: afastar complicações (meningite, abscesso)',
    expectedExams: [
      { exam: 'Diagnóstico clínico — exames não obrigatórios', justify: 'Rinossinusite aguda bacteriana é diagnóstico clínico', expected: '—' },
      { exam: 'Radiografia de seios paranasais', justify: 'Confirmar opacificação, nível hidroaéreo; disponível na UBS', expected: 'Opacificação maxilar bilateral, nível hidroaéreo direito' },
      { exam: 'TC de seios paranasais', justify: 'Padrão-ouro, indicado em casos complicados, recorrentes ou refratários', expected: 'Indicar encaminhamento se disponível' },
      { exam: 'Hemograma + PCR', justify: 'Confirmar processo bacteriano', expected: 'Leucocitose leve, PCR elevada' }
    ],
    expectedConduct: 'Farmacológica: Amoxicilina 500 mg VO 8/8h por 10–14 dias (1ª linha em adultos sem uso de ATB recente). Se alergia a penicilina: azitromicina 500 mg/dia por 3 dias ou levofloxacino 500 mg/dia por 5–7 dias. Analgesia: ibuprofeno 400 mg VO 8/8h ou dipirona 500 mg VO 6/6h. (SBOTA 2022 / RENAME 2022) | Não farmacológica: Lavagem nasal com soro fisiológico isotônico; inalação com vapor; hidratação adequada; descanso. | Encaminhamento: Otorrinolaringologista se: ausência de melhora em 72h, suspeita de complicação (periorbital, intracraniana), recorrência (> 4 episódios/ano), suspeita de odontogênica (dentista). | Orientações ao paciente: Explicar que é infecção bacteriana dos seios da face; que precisa completar o antibiótico; retorno se piora da dor de cabeça, febre alta, inchaço ao redor dos olhos. | Seguimento: Retorno em 72h se piora; sinais de alarme: cefaleia intensa, edema periorbitário, alteração visual, rigidez de nuca.',
    expectedCommunication: "Apresentação: Apresentar-se, perguntar sobre contexto e impacto na vida do paciente. | Comunicação do diagnóstico: 'O senhor tem sinusite bacteriana — uma infecção nas cavidades do rosto. Vamos precisar de antibiótico porque já faz mais de 10 dias e houve piora.' | Escuta ativa: Acolher a pressão do trabalho, mas explicar que o repouso relativo ajuda na recuperação.",
    criticalErrors: [
      'Prescrever antibiótico em sinusite viral (< 10 dias sem critérios de bacteriana)',
      'Não completar o tempo mínimo de antibioticoterapia (< 10 dias)',
      'Não orientar sinais de alarme de complicação (edema orbitário, meningite)',
      'Não realizar palpação de seios paranasais',
      'Não investigar origem dentária (dor dentária superior relatada)',
      'Solicitar TC rotineiramente sem indicação em sinusite não complicada na atenção primária'
    ]
  },
  instD: {
    title: 'CHECKLIST — DOR DE CABEÇA E PRESSÃO NA FACE COM CATARRO AMARELADO',
    sections: [
      { h: 'COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE', items: [
        { item: 'Apresentou-se pelo nome ao paciente', score: 0.5, ref: 'CFM 2.217/2018' },
        { item: 'Explicou o diagnóstico e a indicação do antibiótico em linguagem acessível', score: 0.5, ref: 'PNHAH/MS, 2001' },
        { item: 'Respondeu à expectativa do paciente por antibiótico com raciocínio clínico claro', score: 0.5, ref: 'PNHAH/MS, 2001' }
      ]},
      { h: 'ANAMNESE', items: [
        { item: 'Identificou duração > 10 dias e piora bifásica (critério de bacteriana)', score: 1.0, ref: 'SBOTA, 2022' },
        { item: 'Caracterizou a dor facial (localização, piora ao abaixar a cabeça)', score: 0.5, ref: 'SBOTA, 2022' },
        { item: 'Investigou presença de febre, hiposmia e tipo de secreção', score: 0.5, ref: 'SBOTA, 2022' },
        { item: 'Perguntou sobre dor dentária superior (sinusite odontogênica)', score: 0.5, ref: 'SBOTA, 2022' },
        { item: 'Questionou sintomas de complicação (cefaleia intensa, edema orbital, alteração de consciência)', score: 0.5, ref: 'SBOTA, 2022' }
      ]},
      { h: 'EXAME FÍSICO', items: [
        { item: 'Realizou palpação/percussão dos seios paranasais (maxilar e frontal)', score: 1.0, ref: 'SBOTA, 2022' },
        { item: 'Realizou rinoscopia e identificou secreção purulenta em meato médio', score: 0.5, ref: 'SBOTA, 2022' },
        { item: 'Realizou exame neurológico sumário (afastar complicação intracraniana)', score: 0.5, ref: 'SBOTA, 2022' }
      ]},
      { h: 'RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO', items: [
        { item: 'Formulou hipótese de rinossinusite aguda bacteriana com critérios corretos', score: 1.0, ref: 'SBOTA, 2022' },
        { item: 'Reconheceu que o diagnóstico é clínico e não indicou TC rotineiramente', score: 0.5, ref: 'SBOTA, 2022' }
      ]},
      { h: 'CONDUTA E ORIENTAÇÃO AO PACIENTE', items: [
        { item: 'Prescreveu amoxicilina 500 mg 8/8h por 10–14 dias', score: 1.0, ref: 'SBOTA 2022 / RENAME 2022' },
        { item: 'Orientou lavagem nasal com soro fisiológico e medidas de suporte', score: 0.5, ref: 'SBOTA, 2022' },
        { item: 'Orientou sinais de alarme de complicação e retorno precoce', score: 0.5, ref: 'SBOTA, 2022' }
      ]}
    ]
  }
}

const casosDermatologia = [
  {
    id: 1,
    title: 'Pinta nas costas que mudou de cor nos últimos meses',
    sub: 'UBS — Atenção Primária',
    tema: 'Dermatologia',
    topic: 'melanoma extensivo superficial',
    level: 'moderado',
    cardAccent: '#3E2C41',
    instA: {
      scenario: 'Atenção Primária — UBS urbana. Consultório de clínica geral, turno matutino. Consulta agendada por demanda espontânea.',
      patient: 'R.M.S., 54 anos, masculino, professor de educação física, fototipo II (pele clara, olhos claros). Sem comorbidades conhecidas.',
      complaint: 'Refere que a esposa notou que uma "pinta" nas costas mudou de aparência nos últimos meses.',
      tasks: [
        'Realize a anamnese dirigida à queixa dermatológica.',
        'Descreva a lesão apresentada utilizando terminologia semiológica dermatológica formal.',
        'Formule a hipótese diagnóstica principal e ao menos dois diagnósticos diferenciais.',
        'Estabeleça a conduta diagnóstica e o encaminhamento adequados.',
        'Oriente o paciente quanto ao diagnóstico provável, à prevenção e ao seguimento.'
      ]
    },
    instB: {
      vitals: {
        PA: '128/82 mmHg',
        FC: '74 bpm',
        FR: '16 irpm',
        Tax: '36,4 °C',
        Peso: '82 kg',
        Altura: '1,78 m',
        IMC: '25,9 kg/m²'
      },
      physicalGeneral: 'Bom estado geral, lúcido e orientado, corado, hidratado, anictérico, acianótico, afebril. Fototipo II de Fitzpatrick, com efélides difusas em face e ombros e dano actínico crônico em dorso.',
      physicalSeg: 'PELE (DORSO): lesão descrita no impresso fotográfico entregue ao candidato | PELE (DEMAIS SEGMENTOS): múltiplas efélides e cerca de 30 nevos melanocíticos pequenos, simétricos e homogêneos em tronco e membros; nenhum outro nevo com atipia evidente | CADEIAS LINFONODAIS: axilas, cervicais e inguinais livres — sem linfonodos palpáveis, sem massas | COURO CABELUDO, PALMAS, PLANTAS E REGIÃO UNGUEAL: sem lesões pigmentadas | MUCOSA ORAL: sem lesões pigmentadas | RESTANTE DO EXAME SEGMENTAR: sem alterações',
      labs: [],
      image: 'FOTODESCRIÇÃO — IMPRESSO ENTREGUE AO CANDIDATO (dorso, região escapular esquerda): mácula pigmentada única, de formato irregular, medindo aproximadamente 11 x 9 mm, com assimetria em ambos os eixos. Bordas irregulares, recortadas e mal delimitadas em pelo menos dois quadrantes. Coloração heterogênea, com áreas em castanho-claro, castanho-escuro, negro-azulado e uma pequena área central de hipopigmentação (regressão). Superfície predominantemente plana, com discreta elevação palpável em quadrante inferior. Ausência de ulceração, sangramento ou crostas. Pele perilesional com dano actínico. Demais nevos do dorso visíveis na foto são pequenos, redondos, simétricos e uniformemente castanhos — a lesão descrita destoa nitidamente do padrão dos demais ("sinal do patinho feio").',
      note: 'Entregar o impresso de sinais vitais e exame físico geral no início da estação. Entregar o IMPRESSO FOTOGRÁFICO da lesão SOMENTE quando o candidato solicitar verbalmente examinar a pele/lesão. Se o candidato solicitar exames laboratoriais (hemograma, LDH, marcadores tumorais) ou exames de imagem de estadiamento nesta fase, informar "não disponível / não indicado neste momento" e ANOTAR como conduta desnecessária, pois estadiamento por imagem não está indicado em lesão cutânea suspeita ainda não biopsiada. Se o candidato indicar biópsia por shave, curetagem, eletrocauterização ou crioterapia da lesão, ANOTAR como ERRO CRÍTICO.',
      patientProfile: 'Roberto M. S., 54 anos, masculino, professor de educação física em escola pública, casado, dois filhos. Reside em zona urbana. Ensino superior completo.',
      script: [
        { trigger: 'Queixa principal / abertura', speech: 'Doutor, minha esposa vive implicando com uma pinta que eu tenho nas costas. Ela diz que mudou, que tá maior e mais escura. Eu nem consigo ver direito, é bem no meio das costas.' },
        { trigger: 'Há quanto tempo a lesão existe', speech: 'Essa pinta eu tenho desde novo, acho que desde os vinte e poucos anos. Mas era pequenininha, do tamanho de uma cabeça de alfinete, e clarinha.' },
        { trigger: 'O que mudou e em quanto tempo', speech: 'Nos últimos seis, sete meses ela cresceu bastante e ficou com uns pedaços quase pretos, e outros mais claros. Ela também ficou meio "esparramada", sabe? Com o contorno todo irregular.' },
        { trigger: 'Sintomas locais — coça, dói, sangra', speech: 'Doer não dói. Sangrar nunca sangrou. Às vezes coça um pouquinho quando eu suo, mas é raro.' },
        { trigger: 'Exposição solar / história ocupacional', speech: 'Eu dou aula de educação física, então fico a manhã toda na quadra descoberta. Faço isso há uns 25 anos. E quando era mais novo eu ia muito pra praia, ficava o dia inteiro. Já me queimei muito, umas vezes até descascou e deu bolha.' },
        { trigger: 'Uso de fotoproteção', speech: 'Protetor eu passo às vezes, quando lembro. Chapéu eu quase nunca uso porque atrapalha na aula.' },
        { trigger: 'Câmara de bronzeamento', speech: 'Não, isso eu nunca usei.' },
        { trigger: 'Antecedentes pessoais de câncer de pele', speech: 'Eu nunca tirei nada da pele, não. Nunca tive nada assim.' },
        { trigger: 'História familiar', speech: 'Meu tio por parte de pai teve um câncer de pele, mas eu não sei dizer qual tipo. Ele operou e ficou bom.' },
        { trigger: 'Outras lesões / sintomas sistêmicos', speech: 'Outras pintas eu tenho um monte, mas essas nunca mudaram. Emagrecer eu não emagreci, tô comendo bem, não tenho dor nenhuma.' },
        { trigger: 'Pergunta ativa (após demonstrar suspeita)', speech: 'Doutor, o senhor tá com uma cara preocupada... isso pode ser câncer de pele?' },
        { trigger: 'Pergunta ativa (após indicação de biópsia)', speech: 'E se for isso mesmo, doutor, eu vou morrer? Tem cura? Quanto tempo eu vou ter que esperar pra saber?' }
      ],
      hiddenInfo: 'História familiar de câncer de pele em tio paterno — só revelar se o candidato perguntar especificamente sobre casos de câncer (de pele ou melanoma) na família | História de queimaduras solares graves com bolhas na adolescência — só revelar se o candidato perguntar especificamente sobre queimaduras de sol ou exposição solar no passado | O paciente NÃO se examina e nunca fez exame de pele com médico — só revelar se perguntado sobre rastreamento/autoexame prévio',
      actorBehavior: 'Inicialmente descontraído e minimizador ("é só uma pinta, a mulher que é exagerada"). Colaborativo, responde apenas ao que for perguntado. À medida que percebe seriedade do médico (silêncio, uso de lupa, indicação de biópsia), muda o tom: fica tenso, faz as perguntas ativas com voz mais baixa e apreensiva. Se o candidato comunicar de forma abrupta ("é câncer"), demonstrar susto e permanecer calado por alguns segundos, para testar a capacidade de acolhimento. Se o candidato acolher e explicar em linguagem acessível, relaxar e perguntar sobre os próximos passos.'
    },
    instC: {
      diagnosis: 'Melanoma cutâneo, provável subtipo extensivo superficial, localizado em dorso — lesão pigmentada com critérios ABCDE positivos e história de mudança progressiva em 6 meses. Diagnóstico de certeza depende de exame histopatológico obtido por biópsia excisional.',
      differentials: [
        'Nevo melanocítico displásico (atípico) — pode apresentar assimetria e variação de cor, mas caracteristicamente é estável ao longo do tempo e não apresenta crescimento progressivo, área de regressão ou heterogeneidade tão marcada; só o histopatológico diferencia com segurança.',
        'Ceratose seborreica pigmentada — lesão benigna comum nesta faixa etária, mas tipicamente tem aspecto "colado à pele", superfície verrucosa/aveludada, bordas bem delimitadas e pseudocistos córneos, ausentes neste caso.',
        'Carcinoma basocelular pigmentado — pode ser escuro e assimétrico, mas costuma apresentar brilho perlado, telangiectasias e bordas peroladas, além de tendência à ulceração central; ausentes aqui.',
        'Nevo azul ou hematoma/lentigo solar — descartados pela mudança progressiva documentada, pela policromia e pela irregularidade de bordas.'
      ],
      context: 'Homem de 54 anos, fototipo II, com exposição solar ocupacional crônica e história de queimaduras solares graves na juventude, apresenta lesão pigmentada em dorso com mudança de tamanho, cor e forma nos últimos 6 meses. O dorso é a topografia mais frequente do melanoma em homens no Brasil. O quadro configura lesão pigmentada suspeita, exigindo biópsia excisional e encaminhamento prioritário.',
      justify: 'A lesão preenche múltiplos critérios do ABCDE: Assimetria em dois eixos, Bordas irregulares e mal delimitadas, Cor heterogênea (castanho-claro, castanho-escuro, negro-azulado e área de regressão), Diâmetro maior que 6 mm (11 mm) e Evolução documentada em 6 meses — sendo a evolução o critério de maior valor preditivo. A lesão ainda destoa do padrão dos demais nevos do paciente (sinal do patinho feio). Somam-se fatores de risco maiores: fototipo II, exposição solar intermitente intensa com queimaduras com bolhas na adolescência, exposição crônica ocupacional e história familiar de câncer de pele. A área central hipopigmentada sugere regressão espontânea parcial, achado associado a melanoma. A ausência de linfonodomegalia e de sintomas sistêmicos é compatível com doença ainda localizada, o que não reduz a urgência da investigação.',
      expectedAnamnesis: 'Caracterizar tempo de existência da lesão e, sobretudo, o tempo e o padrão de MUDANÇA (critério E do ABCDE) | Investigar mudança de tamanho, cor, forma e relevo | Investigar sintomas locais: prurido, dor, sangramento, ulceração, crosta | Investigar fototipo e história de queimaduras solares com bolhas, especialmente na infância/adolescência | Investigar exposição solar ocupacional e recreativa e uso de fotoproteção | Investigar uso de câmara de bronzeamento artificial | Investigar antecedente pessoal de câncer de pele ou de lesões removidas previamente | Investigar história familiar de melanoma ou de câncer de pele em parentes de primeiro e segundo grau | Investigar número e estabilidade dos demais nevos e existência de outras lesões novas ou em mudança | Investigar imunossupressão (transplante, HIV, uso de imunossupressores) | Realizar revisão de sistemas dirigida a sintomas de doença avançada: perda ponderal, dor óssea, cefaleia, tosse, adenomegalias percebidas pelo paciente',
      expectedPhysical: 'Sinais vitais: dentro da normalidade — não excluem malignidade e não devem ser usados como critério de tranquilização | Inspeção da lesão sob boa iluminação, aplicando sistematicamente o ABCDE e a regra do patinho feio | Descrição semiológica formal esperada: mácula (lesão elementar) pigmentada, única, assimétrica, de bordas irregulares e mal delimitadas, policrômica, com 11 mm no maior eixo, com área de regressão central, sem ulceração | Palpação da lesão para avaliar infiltração/elevação e da pele perilesional | Exame de TODA a superfície cutânea (exame de corpo inteiro), incluindo couro cabeludo, região retroauricular, palmas, plantas, espaços interdigitais, região ungueal e mucosas — pela possibilidade de melanoma sincrônico | Palpação das cadeias linfonodais regionais de drenagem (axilares bilaterais e cervicais para lesão em dorso alto) e das demais cadeias | Palpação abdominal em busca de hepatomegalia (estadiamento clínico grosseiro) | Uso de dermatoscópio, se disponível na estação, ou verbalização de que a dermatoscopia complementa a avaliação',
      expectedExams: [
        { exam: 'Biópsia excisional da lesão com margem lateral estreita de 1 a 3 mm e profundidade até tecido celular subcutâneo', justify: 'Padrão-ouro para o diagnóstico de lesão pigmentada suspeita de melanoma; permite avaliação da espessura de Breslow em toda a lesão, indispensável para o estadiamento e para a definição das margens de ampliação e da indicação de linfonodo sentinela.', expected: 'Laudo histopatológico com diagnóstico de melanoma, subtipo histológico, espessura de Breslow em mm, presença ou ausência de ulceração, índice mitótico, invasão angiolinfática/perineural e status das margens.' },
        { exam: 'Dermatoscopia da lesão e das demais lesões pigmentadas', justify: 'Aumenta significativamente a acurácia diagnóstica em relação ao exame a olho nu e auxilia na seleção de quais lesões biopsiar; ferramenta de triagem, nunca substitui a biópsia diante de lesão clinicamente suspeita.', expected: 'Padrão multicomponente com rede pigmentar atípica, projeções irregulares, véu azul-esbranquiçado e/ou áreas de regressão.' },
        { exam: 'Mapeamento corporal total / exame dermatológico de corpo inteiro', justify: 'Pacientes com melanoma têm risco aumentado de segundo melanoma primário sincrônico ou metacrônico e frequentemente apresentam múltiplos nevos atípicos.', expected: 'Sem outras lesões suspeitas neste caso; documentação fotográfica para seguimento.' },
        { exam: 'Estadiamento complementar (LDH, radiografia/TC de tórax, US de cadeias linfonodais, pesquisa de linfonodo sentinela)', justify: 'NÃO indicado antes do resultado histopatológico. A extensão do estadiamento é definida pela espessura de Breslow, ulceração e estadio clínico, sob responsabilidade do serviço especializado. Solicitar imagem de estadiamento em lesão ainda não biopsiada é conduta inadequada e retarda o diagnóstico.', expected: 'A definir pelo serviço de referência após o laudo. ⚠️ Os limiares de indicação de pesquisa de linfonodo sentinela (Breslow ≥ 0,8 mm ou qualquer espessura com ulceração) e o estadiamento derivam do sistema AJCC 8ª edição, de origem estrangeira, adotado pelas diretrizes brasileiras (SBD/SBCO/INCA).' }
      ],
      expectedConduct: 'Farmacológica: não há tratamento farmacológico na atenção primária. NÃO prescrever corticoide tópico, antifúngico, ceratolítico ou qualquer tratamento tópico sobre a lesão suspeita, pois mascara o quadro e retarda o diagnóstico. | Não farmacológica / procedimento: indicar biópsia EXCISIONAL com margem estreita (1–3 mm) como conduta diagnóstica; se o serviço de origem não dispuser de condição técnica, encaminhar para realização em serviço habilitado, sem tentar shave, curetagem, cauterização ou crioterapia. | Encaminhamento: encaminhamento prioritário/urgente à dermatologia ou cirurgia oncológica, com preenchimento adequado do formulário de referência descrevendo os critérios ABCDE e o tempo de evolução, para garantir classificação de risco na regulação; após confirmação, seguimento em serviço oncológico para ampliação de margens e eventual pesquisa de linfonodo sentinela. | Orientações ao paciente: explicar em linguagem acessível que a lesão apresenta características que exigem retirada e análise em laboratório; explicar que o diagnóstico definitivo só sai com o exame do material; orientar fotoproteção rigorosa (filtro solar FPS ≥ 30 reaplicado a cada 2 horas, chapéu de aba larga, camiseta com manga, evitar exposição entre 10h e 16h); ensinar autoexame de pele mensal e a regra do ABCDE; orientar exame de pele em familiares de primeiro grau. | Seguimento: retorno garantido com o resultado do anatomopatológico; não dar alta antes do resultado; seguimento dermatológico periódico ao menos anual e vitalício após diagnóstico de melanoma; sinais de alarme para retorno imediato: crescimento rápido, sangramento, ulceração, aparecimento de nódulos ao redor da cicatriz ou de caroços na axila.',
      expectedCommunication: 'Apresentação: cumprimentar, apresentar-se pelo nome e função, confirmar o nome do paciente e explicar o objetivo da consulta | Solicitar consentimento verbal antes de examinar a pele e garantir privacidade e exposição adequada com respeito ao pudor | Escuta ativa: permitir que o paciente relate a queixa sem interrupções na abertura, usar perguntas abertas antes das fechadas, manter contato visual e checar a compreensão | Comunicação do diagnóstico: usar linguagem acessível, evitar jargão ("lesão melanocítica atípica"), nomear a suspeita de forma honesta e sem antecipar certeza — explicar que existe suspeita de câncer de pele e que somente o exame do material confirmará | Não prometer benignidade nem usar falsa tranquilização ("não é nada, fique tranquilo") | Acolher a reação emocional: nomear o medo, permitir silêncio, perguntar como o paciente está se sentindo diante da notícia | Explicar os próximos passos de forma concreta (o que é a biópsia, quanto tempo leva o resultado, quando retorna) e verificar se restaram dúvidas',
      criticalErrors: [
        'Tranquilizar o paciente e liberar sem investigação, atribuindo a lesão a "pinta comum" ou "sinal de nascença", retardando o diagnóstico de melanoma.',
        'Indicar biópsia por shave, curetagem, eletrocauterização, crioterapia ou laser sobre a lesão pigmentada suspeita — destrói ou fragmenta a lesão e impede a mensuração da espessura de Breslow, inviabilizando o estadiamento.',
        'Prescrever tratamento tópico (corticoide, antifúngico, ceratolítico) sobre a lesão suspeita como teste terapêutico, mascarando o quadro.',
        'Deixar de examinar o restante da superfície cutânea e as cadeias linfonodais regionais, perdendo lesões sincrônicas ou doença regional.',
        'Não encaminhar em caráter prioritário, ou encaminhar sem descrever a suspeita clínica no formulário, resultando em fila de espera de rotina para lesão potencialmente letal.',
        'Comunicar a suspeita de câncer de forma abrupta, sem acolhimento, ou ao contrário, omitir a suspeita e não obter adesão do paciente ao procedimento e ao retorno.'
      ]
    },
    instD: {
      title: 'CHECKLIST — LESÃO PIGMENTADA EM DORSO COM MUDANÇA RECENTE (MELANOMA EXTENSIVO SUPERFICIAL)',
      sections: [
        {
          h: 'BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE',
          items: [
            { item: 'Apresentou-se pelo nome e função e confirmou o nome do paciente antes de iniciar o atendimento', score: 0.5, ref: 'CFM — Código de Ética Médica, 2019; Diretrizes Curriculares Nacionais de Medicina, MEC 2014' },
            { item: 'Solicitou permissão explícita ao paciente antes de examinar a pele e providenciou exposição/privacidade adequadas', score: 0.5, ref: 'CFM — Código de Ética Médica, 2019 (autonomia e consentimento)' },
            { item: 'Perguntou ativamente ao paciente como ele estava se sentindo diante da suspeita e/ou se tinha dúvidas antes de encerrar', score: 0.5, ref: 'INCA — Comunicação de Notícias Difíceis em Oncologia, 2020' }
          ]
        },
        {
          h: 'BLOCO 2 — ANAMNESE',
          items: [
            { item: 'Investigou há quanto tempo a lesão existe E em quanto tempo ocorreu a mudança (critério "E" — evolução)', score: 1.0, ref: 'SBD — Consenso Brasileiro de Câncer da Pele Melanoma, 2023; INCA 2022' },
            { item: 'Investigou sintomas locais da lesão: prurido, dor, sangramento ou ulceração', score: 0.5, ref: 'SBD — Câncer da Pele Melanoma, 2023' },
            { item: 'Investigou história de exposição solar (ocupacional e/ou recreativa), queimaduras solares prévias e uso de fotoproteção', score: 0.5, ref: 'INCA — Prevenção do Câncer de Pele, 2022; MS — Cadernos de Atenção Básica nº 29' },
            { item: 'Investigou história familiar de melanoma ou câncer de pele e/ou antecedente pessoal de lesões cutâneas removidas', score: 0.5, ref: 'SBD — Consenso Brasileiro de Melanoma, 2023' }
          ]
        },
        {
          h: 'BLOCO 3 — EXAME FÍSICO',
          items: [
            { item: 'Descreveu a lesão utilizando terminologia dermatológica formal e os critérios ABCDE (lesão elementar, assimetria, bordas, cor, diâmetro)', score: 1.0, ref: 'SBD — Consenso Brasileiro de Câncer da Pele Melanoma, 2023' },
            { item: 'Examinou toda a superfície cutânea (corpo inteiro), incluindo couro cabeludo, palmas, plantas e região ungueal', score: 0.5, ref: 'SBD — Campanha Nacional de Prevenção ao Câncer da Pele, 2023' },
            { item: 'Palpou as cadeias linfonodais regionais de drenagem (axilares e cervicais)', score: 0.5, ref: 'INCA — Condutas em Melanoma Cutâneo, 2022' }
          ]
        },
        {
          h: 'BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
          items: [
            { item: 'Formulou explicitamente a hipótese diagnóstica de melanoma / lesão pigmentada altamente suspeita de malignidade', score: 1.0, ref: 'SBD — Consenso Brasileiro de Melanoma, 2023; INCA 2022' },
            { item: 'Citou ao menos dois diagnósticos diferenciais pertinentes (nevo displásico, ceratose seborreica pigmentada, CBC pigmentado)', score: 0.5, ref: 'SBD — Diagnóstico Diferencial das Lesões Pigmentadas, 2023' },
            { item: 'Indicou biópsia EXCISIONAL com margem estreita como conduta diagnóstica, evitando explicitamente shave/curetagem/cauterização', score: 0.5, ref: 'SBD/SBCO — Consenso Brasileiro de Melanoma, 2023' }
          ]
        },
        {
          h: 'BLOCO 5 — CONDUTA E ORIENTAÇÃO AO PACIENTE',
          items: [
            { item: 'Encaminhou em caráter prioritário à dermatologia/cirurgia oncológica, descrevendo a suspeita clínica no encaminhamento', score: 1.0, ref: 'MS — Protocolos de Encaminhamento da Atenção Básica para Atenção Especializada — Dermatologia, 2016; Lei nº 12.732/2012' },
            { item: 'Explicou o diagnóstico provável e o procedimento em linguagem acessível, sem falsa tranquilização e sem afirmar certeza diagnóstica', score: 0.5, ref: 'INCA — Comunicação de Notícias Difíceis, 2020; CFM 2019' },
            { item: 'Orientou fotoproteção (FPS ≥ 30, chapéu, roupas, evitar sol 10h–16h) e/ou autoexame de pele e retorno com o resultado', score: 0.5, ref: 'INCA — Prevenção e Detecção Precoce do Câncer de Pele, 2022; SBD 2023' }
          ]
        }
      ]
    }
  },

  {
    id: 2,
    title: 'Caroço escuro na perna que cresceu rápido e sangrou',
    sub: 'Ambulatório de Clínica Médica — Atenção Secundária',
    tema: 'Dermatologia',
    topic: 'melanoma nodular',
    level: 'moderado',
    cardAccent: '#1F2A44',
    instA: {
      scenario: 'Atenção Secundária — Ambulatório geral de hospital municipal. Consultório, turno vespertino. Paciente encaminhada pela UBS como "verruga inflamada".',
      patient: 'M.J.P., 63 anos, feminino, aposentada (ex-costureira), fototipo III, hipertensa em uso de losartana.',
      complaint: 'Refere um "caroço preto" na perna direita que cresceu rápido nos últimos três meses e sangrou ao esbarrar na toalha.',
      tasks: [
        'Realize a anamnese dirigida à lesão cutânea.',
        'Realize o exame físico dermatológico pertinente e descreva a lesão com terminologia semiológica formal.',
        'Formule a hipótese diagnóstica principal e ao menos dois diagnósticos diferenciais.',
        'Proponha a investigação diagnóstica adequada.',
        'Comunique a suspeita diagnóstica à paciente e estabeleça o plano de seguimento.'
      ]
    },
    instB: {
      vitals: {
        PA: '142/88 mmHg',
        FC: '78 bpm',
        FR: '17 irpm',
        Tax: '36,6 °C',
        Peso: '71 kg',
        Altura: '1,60 m',
        IMC: '27,7 kg/m²'
      },
      physicalGeneral: 'Bom estado geral, lúcida e orientada, corada, hidratada, anictérica, acianótica, afebril. Fototipo III. Marcha preservada. Sem sinais de desnutrição ou perda ponderal.',
      physicalSeg: 'PELE (FACE ANTERIOR DA PERNA DIREITA, TERÇO MÉDIO): lesão descrita no impresso fotográfico entregue ao candidato | PELE (DEMAIS SEGMENTOS): poucos nevos melanocíticos, todos pequenos e homogêneos; lentigos solares em antebraços; sem outras lesões suspeitas | REGIÃO ENTRE A LESÃO E A REGIÃO INGUINAL: sem nódulos subcutâneos palpáveis (sem satelitose ou metástases em trânsito evidentes) | CADEIAS LINFONODAIS: linfonodo inguinal direito de aproximadamente 1,0 cm, fibroelástico, móvel, indolor; demais cadeias (inguinal esquerda, axilares, cervicais) livres | ABDOME: plano, flácido, indolor, sem visceromegalias | APARELHO RESPIRATÓRIO: murmúrio vesicular universalmente audível, sem ruídos adventícios | APARELHO CARDIOVASCULAR: ritmo cardíaco regular, 2 tempos, bulhas normofonéticas, sem sopros',
      labs: [],
      image: 'FOTODESCRIÇÃO — IMPRESSO ENTREGUE AO CANDIDATO (face anterior da perna direita, terço médio): nódulo único, elevado, de superfície lisa e brilhante, séssil, medindo aproximadamente 9 mm de diâmetro e cerca de 6 mm de altura, com coloração negro-azulada uniforme e pequena área acinzentada periférica. Bordas relativamente bem delimitadas e regulares, com halo eritematoso de poucos milímetros na base. Presença de crosta hemática puntiforme no ápice, com pequena erosão adjacente. Não há rede pigmentar visível ao redor da lesão nem componente macular periférico. A pele circunjacente é normocrômica, sem dano actínico significativo. Não se observam lesões-satélite.',
      note: 'Entregar o impresso de sinais vitais e exame físico geral no início. Entregar o IMPRESSO FOTOGRÁFICO SOMENTE mediante solicitação verbal de examinar a lesão. O achado de linfonodo inguinal direito de 1,0 cm só deve ser informado SE o candidato palpar/solicitar avaliação das cadeias linfonodais — não informar espontaneamente. Se o candidato solicitar exames laboratoriais gerais ou imagem de estadiamento antes da biópsia, informar "não disponível nesta estação" e anotar. Se o candidato indicar cauterização, crioterapia, exérese por shave ou tratamento tópico da lesão, ANOTAR como ERRO CRÍTICO.',
      patientProfile: 'Maria José P., 63 anos, feminino, aposentada, viúva, três filhos, mora com uma filha. Ex-costureira. Ensino fundamental incompleto. Hipertensa em acompanhamento na UBS.',
      script: [
        { trigger: 'Queixa principal / abertura', speech: 'Doutor, eu tenho esse carocinho preto aqui na perna. Antes não tinha nada, aí do nada apareceu e não parou mais de crescer. Semana passada eu esbarrei a toalha e ele sangrou, me deu um susto.' },
        { trigger: 'Tempo de evolução', speech: 'Faz uns três meses, mais ou menos. No começo era do tamanho de uma cabeça de fósforo, agora tá do tamanho de um caroço de feijão e alto assim, saliente.' },
        { trigger: 'Se havia pinta prévia no local', speech: 'Não senhor, ali não tinha nada. A pele era lisinha, do jeito do resto da perna. Ele nasceu já assim, preto.' },
        { trigger: 'Sangramento / ulceração', speech: 'Sangrou umas duas vezes. É pouquinho, mancha a roupa. E agora ficou essa casquinha em cima que sai e volta.' },
        { trigger: 'Dor e prurido', speech: 'Doer não dói, não. Coçar também não coça. É só o sangramento mesmo que me preocupa.' },
        { trigger: 'Exposição solar', speech: 'Eu trabalhei a vida toda dentro de casa costurando, não pegava muito sol não. De vez em quando ia pra praia com os netos, mas era raro.' },
        { trigger: 'Antecedentes pessoais e medicações', speech: 'Eu tenho pressão alta, tomo losartana todo dia. Fora isso, nada. Não tenho diabetes, não fumo, não bebo.' },
        { trigger: 'História familiar', speech: 'Câncer na família... minha mãe teve câncer no intestino. De pele eu não conheço ninguém, não.' },
        { trigger: 'Sintomas sistêmicos', speech: 'Emagrecer não emagreci. Tô comendo bem. Não tenho tosse, não tenho dor nos ossos, nada disso. Só a perna mesmo.' },
        { trigger: 'O que já fez / atendimento prévio', speech: 'Na UBS o doutor olhou de longe e disse que devia ser uma verruga inflamada, mandou eu passar uma pomada. Passei quase um mês, não adiantou nada, ele só cresceu.' },
        { trigger: 'Pergunta ativa (após demonstrar suspeita)', speech: 'Doutor, mas o outro médico disse que era verruga... o senhor acha que é outra coisa? É coisa ruim?' },
        { trigger: 'Pergunta ativa (após indicação de biópsia)', speech: 'Vai precisar cortar? E se for câncer, doutor, já espalhou? Eu demorei demais pra vir?' }
      ],
      hiddenInfo: 'A paciente já foi avaliada na UBS há cerca de um mês, recebeu o rótulo de "verruga inflamada" e usou pomada tópica sem melhora — só revelar se o candidato perguntar sobre atendimentos anteriores, tratamentos já tentados ou uso de medicações tópicas | A lesão surgiu em pele previamente SEM nevo (lesão de novo) — só revelar se o candidato perguntar especificamente se já existia alguma pinta ou marca naquele local | Mãe com câncer colorretal (não relacionado) — só revelar se perguntado sobre história familiar de câncer',
      actorBehavior: 'Preocupada, mas contida e respeitosa; tende a aceitar passivamente o que o médico diz ("se o senhor acha que não é nada, tá bom"). Fala pouco, responde apenas ao perguntado, com vocabulário simples. Demonstra alívio quando o médico a leva a sério e frustração discreta ao relatar o atendimento anterior, se perguntada. Ao ouvir a suspeita de câncer, fica visivelmente assustada, leva a mão à boca e faz a segunda pergunta ativa com voz embargada, expressando culpa por ter demorado. Se o candidato culpabilizá-la ("a senhora demorou muito"), demonstrar retraimento; se acolher, colaborar plenamente com o plano.'
    },
    instC: {
      diagnosis: 'Melanoma cutâneo, provável subtipo nodular, em face anterior de perna direita, com linfonodo inguinal ipsilateral palpável — suspeita de doença regional. Diagnóstico definitivo dependente de exame histopatológico.',
      differentials: [
        'Granuloma piogênico (hemangioma capilar lobular) — nódulo de crescimento rápido que sangra facilmente, porém é tipicamente vermelho-vivo, friável e frequentemente relacionado a trauma prévio; a coloração negro-azulada uniforme e a idade da paciente tornam esta hipótese menos provável, mas é o principal simulador clínico do melanoma nodular.',
        'Carcinoma basocelular pigmentado — pode formar nódulo escuro e ulcerado, mas costuma apresentar borda perlada, telangiectasias e crescimento mais lento (anos); a evolução em três meses fala contra.',
        'Ceratose seborreica irritada ou nevo melanocítico traumatizado — lesões benignas que podem sangrar após trauma, porém não explicam o surgimento de novo e o crescimento progressivo em três meses.',
        'Hemangioma trombosado / angioqueratoma — lesão azulada que pode sangrar, mas é estável no tempo e não cresce progressivamente.'
      ],
      context: 'Mulher de 63 anos, fototipo III, sem exposição solar significativa, apresenta nódulo pigmentado de crescimento rápido (três meses) em pele previamente sã, com sangramento e ulceração superficial, além de linfonodo inguinal ipsilateral palpável. A lesão foi previamente rotulada como verruga inflamada na atenção primária e tratada com pomada, com atraso diagnóstico de cerca de um mês.',
      justify: 'O melanoma nodular corresponde a cerca de 15–20% dos melanomas, mas responde por parcela desproporcional das mortes, porque cresce verticalmente desde o início e frequentemente NÃO preenche os critérios clássicos do ABCDE — é simétrico, de bordas regulares e de cor uniforme. Por isso deve ser aplicado o critério EFG: Elevado, Firme à palpação e Growing (crescimento progressivo em semanas a meses). A lesão desta paciente é elevada, firme, de crescimento documentado em três meses, surgida de novo em pele sã, com sangramento e crosta — todos sinais de alarme. A ausência de exposição solar intensa não afasta o diagnóstico, já que o melanoma nodular tem associação menos dependente da exposição solar cumulativa. O linfonodo inguinal ipsilateral palpável de 1,0 cm levanta suspeita de acometimento regional e obriga avaliação especializada com ultrassonografia e eventual punção, além de contraindicar postergar a investigação. O uso prévio de tratamento tópico sem diagnóstico é um exemplo clássico de armadilha diagnóstica que retarda o cuidado.',
      expectedAnamnesis: 'Caracterizar o tempo de surgimento da lesão e a velocidade de crescimento (semanas/meses) | Perguntar especificamente se já existia pinta ou marca prévia no local (lesão de novo vs. sobre nevo) | Investigar sangramento espontâneo ou ao mínimo trauma, ulceração e formação de crosta | Investigar dor e prurido | Investigar atendimentos anteriores, diagnósticos prévios recebidos e tratamentos já utilizados sobre a lesão | Investigar exposição solar, fototipo e queimaduras prévias | Investigar antecedente pessoal e familiar de melanoma ou câncer de pele | Investigar imunossupressão e uso de medicações | Realizar revisão de sistemas dirigida à doença metastática: perda de peso, astenia, dor óssea, cefaleia persistente, alterações visuais, tosse, nódulos percebidos em virilha ou abdome',
      expectedPhysical: 'Sinais vitais: PA discretamente elevada em paciente hipertensa, sem repercussão para o caso dermatológico | Inspeção da lesão em boa iluminação, aplicando o critério EFG (Elevação, Firmeza, Crescimento) além do ABCDE, reconhecendo que o ABCDE pode ser negativo no melanoma nodular | Descrição semiológica formal esperada: nódulo (lesão elementar) único, séssil, de superfície lisa e brilhante, negro-azulado, homogêneo, com 9 mm de diâmetro, elevado, com erosão e crosta hemática no ápice e halo eritematoso na base | Palpação da lesão avaliando consistência (firme/endurecida) e infiltração da base | Inspeção e palpação de TODO o trajeto entre a lesão e a cadeia linfonodal de drenagem, buscando lesões-satélite e metástases em trânsito | Palpação obrigatória das cadeias linfonodais inguinais bilaterais — achado esperado: linfonodo inguinal direito de 1,0 cm, fibroelástico, móvel e indolor | Palpação das demais cadeias linfonodais e do abdome (hepatomegalia) | Exame de toda a superfície cutânea, incluindo plantas, região interdigital e couro cabeludo',
      expectedExams: [
        { exam: 'Biópsia excisional da lesão com margem estreita (1–3 mm) incluindo tecido celular subcutâneo', justify: 'Conduta diagnóstica padrão para lesão nodular pigmentada suspeita; permite mensurar a espessura de Breslow, essencial ao estadiamento. Em lesões grandes ou em topografias em que a exérese total é inviável, admite-se biópsia incisional da área mais espessa, sempre em serviço especializado.', expected: 'Melanoma nodular, com Breslow habitualmente elevado (frequentemente > 2 mm), presença de ulceração e índice mitótico aumentado.' },
        { exam: 'Ultrassonografia da cadeia linfonodal inguinal direita, com punção aspirativa por agulha fina ou core biopsy do linfonodo se características suspeitas', justify: 'Há linfonodo regional palpável; a avaliação ultrassonográfica define características de suspeição (perda do hilo, arredondamento, vascularização periférica) e orienta a necessidade de punção para confirmar doença regional, o que muda o estadiamento e a conduta cirúrgica.', expected: 'Linfonodo com ou sem alterações estruturais; se confirmada metástase, indica-se linfadenectomia/tratamento sistêmico em serviço oncológico, e não pesquisa de linfonodo sentinela.' },
        { exam: 'Dermatoscopia', justify: 'Auxilia a distinguir melanoma nodular de granuloma piogênico, hemangioma trombosado e CBC pigmentado; entretanto, diante de nódulo com critério EFG positivo, a dermatoscopia negativa NÃO afasta a indicação de biópsia.', expected: 'Padrão vascular polimorfo, véu azul-esbranquiçado, ausência de rede pigmentar e áreas azul-acinzentadas homogêneas.' },
        { exam: 'Estadiamento sistêmico (LDH sérico, TC de tórax/abdome/pelve, avaliação de SNC)', justify: 'Indicado APÓS confirmação histopatológica, sob condução do serviço especializado, especialmente diante de doença regional suspeita. Não deve ser solicitado na consulta inicial, pois não substitui nem antecede a biópsia. ⚠️ Os critérios de estadiamento seguem o sistema AJCC 8ª edição, de origem estrangeira, adotado pelas diretrizes brasileiras (SBD/SBCO/INCA).', expected: 'A definir conforme o estadio; LDH elevado sugere doença avançada.' }
      ],
      expectedConduct: 'Farmacológica: nenhuma medicação tópica ou sistêmica sobre a lesão. Suspender explicitamente qualquer pomada em uso sobre a lesão, orientando a paciente de que o tratamento tópico não é adequado e retardou o diagnóstico. Manter a losartana para controle pressórico habitual. | Não farmacológica / procedimento: indicar biópsia excisional com margem estreita, sem cauterização, crioterapia, shave ou curetagem; proteger a lesão de trauma até o procedimento (curativo não aderente, evitar atrito). | Encaminhamento: encaminhamento com prioridade máxima à cirurgia oncológica/dermatologia oncológica, descrevendo no formulário o critério EFG, o tempo de evolução, o sangramento e o linfonodo inguinal palpável, para garantir classificação de risco na regulação; aplicar a Lei nº 12.732/2012 (Lei dos 60 dias), que assegura início do primeiro tratamento em até 60 dias da confirmação diagnóstica. | Orientações à paciente: explicar em linguagem simples que a lesão não tem características de verruga e que precisa ser retirada e analisada; explicar o que é biópsia; orientar sobre fotoproteção e autoexame; orientar exame de pele nos filhos; não culpabilizar a paciente pelo atraso. | Seguimento: retorno agendado com o resultado do anatomopatológico e garantia de contato; sinais de alarme para retorno imediato: sangramento volumoso, crescimento acelerado, aparecimento de novos caroços ao redor da lesão ou na virilha, febre, emagrecimento; seguimento dermatológico e oncológico vitalício após confirmação.',
      expectedCommunication: 'Apresentação: apresentar-se pelo nome e função, confirmar a identificação da paciente e explicar o que será feito na consulta | Solicitar permissão antes de examinar a perna e as regiões inguinais, garantindo privacidade | Escuta ativa: permitir relato inicial sem interromper, usar perguntas abertas, validar a preocupação da paciente com o sangramento | Não desqualificar o colega que a atendeu previamente; reconhecer que a lesão precisa ser reavaliada sem emitir juízo depreciativo sobre o serviço de origem | Comunicação do diagnóstico: usar linguagem acessível, informar honestamente a suspeita de câncer de pele sem afirmar certeza antes da biópsia, verificar a compreensão pedindo que a paciente repita o plano | Acolher a culpa expressa pela paciente pelo atraso, explicitando que ela agiu corretamente ao retornar e que o passo seguinte é o que importa | Perguntar como a paciente está se sentindo e se há dúvidas antes de encerrar',
      criticalErrors: [
        'Manter o rótulo de lesão benigna (verruga, ceratose, hemangioma) e liberar a paciente sem biópsia, perpetuando o atraso diagnóstico em melanoma nodular — subtipo de pior prognóstico.',
        'Prescrever ou manter tratamento tópico (pomada, ácido, antibiótico) sobre a lesão como teste terapêutico.',
        'Realizar ou indicar cauterização, crioterapia, curetagem ou exérese por shave da lesão, impedindo a mensuração da espessura de Breslow.',
        'Deixar de palpar as cadeias linfonodais inguinais, perdendo o achado de linfonodo regional suspeito que altera o estadiamento e a urgência da conduta.',
        'Encaminhar em fila de rotina, sem prioridade e sem descrever a suspeita clínica, ou não garantir retorno para entrega do resultado.',
        'Afirmar categoricamente à paciente que a lesão é benigna ("não é nada, fique tranquila"), gerando falsa segurança e risco de abandono do seguimento.'
      ]
    },
    instD: {
      title: 'CHECKLIST — NÓDULO PIGMENTADO DE CRESCIMENTO RÁPIDO EM PERNA (MELANOMA NODULAR)',
      sections: [
        {
          h: 'BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE',
          items: [
            { item: 'Apresentou-se pelo nome e função e confirmou a identificação da paciente', score: 0.5, ref: 'CFM — Código de Ética Médica, 2019' },
            { item: 'Solicitou permissão antes de examinar a lesão e as regiões inguinais, preservando a privacidade', score: 0.5, ref: 'CFM — Código de Ética Médica, 2019 (autonomia e pudor)' },
            { item: 'Acolheu a preocupação/culpa da paciente sem culpabilizá-la pelo atraso e sem desqualificar o atendimento prévio', score: 0.5, ref: 'INCA — Comunicação de Notícias Difíceis em Oncologia, 2020' }
          ]
        },
        {
          h: 'BLOCO 2 — ANAMNESE',
          items: [
            { item: 'Caracterizou o tempo de surgimento e a velocidade de crescimento da lesão (crescimento em ~3 meses)', score: 1.0, ref: 'SBD — Consenso Brasileiro de Câncer da Pele Melanoma, 2023' },
            { item: 'Perguntou se havia pinta/lesão prévia no local, identificando tratar-se de lesão surgida "de novo"', score: 0.5, ref: 'SBD — Melanoma Nodular, critério EFG, 2023' },
            { item: 'Investigou sangramento, ulceração ou crosta na lesão', score: 0.5, ref: 'INCA — Detecção Precoce do Câncer de Pele, 2022' },
            { item: 'Investigou atendimentos e tratamentos prévios realizados sobre a lesão (informação escondida — pomada na UBS)', score: 0.5, ref: 'MS — Cadernos de Atenção Básica nº 29 — Dermatologia, 2016' }
          ]
        },
        {
          h: 'BLOCO 3 — EXAME FÍSICO',
          items: [
            { item: 'Descreveu a lesão com terminologia dermatológica formal (nódulo, cor, dimensão, superfície, presença de erosão/crosta)', score: 1.0, ref: 'SBD — Consenso Brasileiro de Melanoma, 2023' },
            { item: 'Palpou a lesão avaliando consistência/infiltração e/ou aplicou o critério EFG (elevado, firme, em crescimento)', score: 0.5, ref: 'SBD — Melanoma Nodular, 2023' },
            { item: 'Palpou as cadeias linfonodais inguinais bilateralmente e/ou pesquisou lesões-satélite no trajeto de drenagem', score: 0.5, ref: 'INCA — Condutas em Melanoma Cutâneo, 2022' }
          ]
        },
        {
          h: 'BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
          items: [
            { item: 'Formulou a hipótese de melanoma (nodular) / lesão maligna, afastando explicitamente o rótulo prévio de verruga', score: 1.0, ref: 'SBD — Consenso Brasileiro de Melanoma, 2023; INCA 2022' },
            { item: 'Citou ao menos dois diagnósticos diferenciais pertinentes (granuloma piogênico, CBC pigmentado, hemangioma trombosado)', score: 0.5, ref: 'SBD — Diagnóstico Diferencial de Lesões Nodulares Pigmentadas, 2023' },
            { item: 'Indicou biópsia excisional como conduta diagnóstica e evitou explicitamente cauterização/crioterapia/shave', score: 0.5, ref: 'SBD/SBCO — Consenso Brasileiro de Melanoma, 2023' }
          ]
        },
        {
          h: 'BLOCO 5 — CONDUTA E ORIENTAÇÃO AO PACIENTE',
          items: [
            { item: 'Encaminhou com prioridade à cirurgia oncológica/dermatologia, descrevendo a suspeita e o linfonodo palpável', score: 1.0, ref: 'MS — Protocolos de Encaminhamento AB → Atenção Especializada, Dermatologia, 2016; Lei nº 12.732/2012' },
            { item: 'Suspendeu/contraindicou o tratamento tópico em uso sobre a lesão', score: 0.5, ref: 'SBD — Consenso Brasileiro de Melanoma, 2023' },
            { item: 'Explicou o plano em linguagem acessível, definiu retorno com o resultado e orientou sinais de alarme e/ou fotoproteção', score: 0.5, ref: 'INCA — Prevenção e Detecção Precoce do Câncer de Pele, 2022' }
          ]
        }
      ]
    }
  },

  {
    id: 3,
    title: 'Mancha escura na sola do pé há mais de um ano',
    sub: 'UBS — Atenção Primária (zona rural)',
    tema: 'Dermatologia',
    topic: 'melanoma acral lentiginoso',
    level: 'moderado',
    cardAccent: '#4A3B2A',
    instA: {
      scenario: 'Atenção Primária — UBS de zona rural. Consultório, turno matutino. Paciente comparece por insistência da filha.',
      patient: 'J.B.S., 66 anos, masculino, lavrador, fototipo V (pele negra), sem comorbidades em acompanhamento.',
      complaint: 'Refere uma "mancha escura" na sola do pé esquerdo, que percebeu há mais de um ano e que aumentou de tamanho.',
      tasks: [
        'Realize a anamnese dirigida à lesão cutânea.',
        'Realize o exame físico dermatológico pertinente e descreva a lesão com terminologia semiológica formal.',
        'Formule a hipótese diagnóstica principal e ao menos dois diagnósticos diferenciais.',
        'Proponha a conduta diagnóstica e o encaminhamento adequados.',
        'Oriente o paciente sobre a suspeita, os próximos passos e o seguimento.'
      ]
    },
    instB: {
      vitals: {
        PA: '136/84 mmHg',
        FC: '72 bpm',
        FR: '16 irpm',
        Tax: '36,3 °C',
        Peso: '68 kg',
        Altura: '1,70 m',
        IMC: '23,5 kg/m²'
      },
      physicalGeneral: 'Bom estado geral, lúcido e orientado, corado, hidratado, anictérico, acianótico, afebril. Fototipo V de Fitzpatrick. Deambula sem auxílio, sem claudicação. Pés com hiperceratose plantar difusa compatível com uso de calçado aberto e trabalho rural.',
      physicalSeg: 'PELE (REGIÃO PLANTAR DO PÉ ESQUERDO): lesão descrita no impresso fotográfico entregue ao candidato | PELE (DEMAIS SEGMENTOS): sem nevos atípicos; sem lesões pigmentadas em tronco, membros ou face | UNHAS DAS MÃOS E DOS PÉS: sem melanoníquia, sem distrofia ungueal, sem sinal de Hutchinson | MUCOSA ORAL E CONJUNTIVAS: sem lesões pigmentadas | REGIÃO INTERDIGITAL DOS PÉS: descamação discreta interdigital bilateral, sem maceração ou fissura | CADEIAS LINFONODAIS: inguinais, poplíteas, axilares e cervicais livres — sem linfonodos palpáveis | APARELHO VASCULAR PERIFÉRICO: pulsos pediosos e tibiais posteriores palpáveis e simétricos; sensibilidade tátil preservada ao toque | ABDOME: sem visceromegalias',
      labs: [],
      image: 'FOTODESCRIÇÃO — IMPRESSO ENTREGUE AO CANDIDATO (região plantar do pé esquerdo, área de apoio do antepé/arco medial): mácula pigmentada única, de contorno irregular e geográfico, medindo aproximadamente 26 x 19 mm no maior eixo. Assimetria marcada em ambos os eixos. Bordas mal definidas, com extensão difusa e "borrada" da pigmentação para a pele adjacente em vários pontos. Coloração heterogênea: predomínio de castanho-escuro com áreas negras confluentes, focos acinzentados e uma faixa periférica de pigmentação mais clara e mal delimitada. Superfície predominantemente plana, com área central de discreta elevação e espessamento palpável de cerca de 5 mm, sem ulceração, sem sangramento e sem crosta. Hiperceratose plantar difusa ao redor. Não há sinais flogísticos, coleção purulenta ou solução de continuidade. Ausência de pontos hemorrágicos puntiformes ou interrupção da pigmentação pelos dermatóglifos, e a pigmentação acompanha predominantemente as CRISTAS dos dermatóglifos.',
      note: 'Entregar o impresso de sinais vitais e exame físico geral no início. Entregar o IMPRESSO FOTOGRÁFICO SOMENTE mediante solicitação verbal de examinar o pé/a lesão. Se o candidato solicitar exame das unhas, do pé contralateral, das mucosas ou das cadeias linfonodais, fornecer os achados correspondentes descritos em physicalSeg. Se o candidato indicar raspagem, curetagem, exérese por shave, crioterapia, uso de ácidos ceratolíticos ou tratamento antifúngico da lesão, ANOTAR como ERRO CRÍTICO. Se o candidato atribuir a lesão a "calo", "mancha de nascença" ou "hematoma" e liberar o paciente, ANOTAR como ERRO CRÍTICO.',
      patientProfile: 'João B. S., 66 anos, masculino, lavrador (agricultura familiar), casado, cinco filhos. Reside em zona rural, a 40 km da sede do município. Analfabeto funcional. Nunca fez consulta dermatológica.',
      script: [
        { trigger: 'Queixa principal / abertura', speech: 'Doutor, é essa mancha aqui embaixo do pé. Minha filha viu quando eu tava lavando o pé e ficou insistindo pra eu vir. Eu acho que não é nada não, mas ela não me deixou em paz.' },
        { trigger: 'Tempo de evolução', speech: 'Faz mais de ano que eu reparei nela. Talvez uns dois anos. Só que ela era do tamanho de uma moeda pequena e agora tá bem maior, quase do tamanho da tampa de um copo.' },
        { trigger: 'Se existia antes / lesão prévia', speech: 'Antes ali era pele normal. Eu não tinha marca nenhuma no pé, não. Ela foi aparecendo devagarzinho e foi espalhando.' },
        { trigger: 'Trauma prévio / hematoma', speech: 'Bater eu bato o pé toda hora na roça, mas machucado grande naquele lugar eu não lembro de ter tido, não. E se fosse sangue de pancada já tinha saído, né? Faz muito tempo que ela tá aí.' },
        { trigger: 'Dor, coceira, ferida', speech: 'Doer não dói. Coçar não coça. Ferida nunca abriu, nunca saiu sangue nem pus. Por isso que eu acho que não é nada.' },
        { trigger: 'Uso de calçado / trabalho', speech: 'Eu trabalho na roça desde menino. Uso chinelo quase sempre, bota só quando vou pro mato. Muita vez ando descalço em casa mesmo.' },
        { trigger: 'Exposição solar e fototipo', speech: 'Sol eu pego o dia todo, a vida inteira. Mas eu sou moreno escuro, doutor, nunca me queimei, nunca fiquei vermelho. Diz que quem é da minha cor não pega essas coisas de pele, né?' },
        { trigger: 'Antecedentes pessoais / diabetes', speech: 'Eu nunca fui em médico direito. Diabetes eu não sei se tenho, nunca fiz exame. Pressão também nunca mediram direito. Não tomo remédio nenhum.' },
        { trigger: 'História familiar', speech: 'Na minha família ninguém teve câncer de pele que eu saiba. Meu pai morreu velho, de idade mesmo.' },
        { trigger: 'Sintomas sistêmicos', speech: 'Tô comendo bem, não emagreci. Trabalho todo dia normal, não canso mais do que o de costume. Não tenho tosse nem dor nos ossos.' },
        { trigger: 'Pergunta ativa (após demonstrar suspeita)', speech: 'Mas doutor, isso não é só um calo escuro de tanto pisar? Eu ando muito descalço, achei que era da terra.' },
        { trigger: 'Pergunta ativa (após indicação de biópsia/encaminhamento)', speech: 'Doutor, a cidade grande é longe demais, quase quatro horas de estrada. Eu preciso mesmo ir? Vão cortar meu pé? Eu não posso parar de trabalhar, doutor.' }
      ],
      hiddenInfo: 'A lesão está em crescimento progressivo e centrífugo há mais de um ano, tendo triplicado de tamanho — só revelar de forma precisa se o candidato perguntar especificamente se a mancha mudou de tamanho ou comparar o tamanho atual com o inicial | Nunca teve trauma significativo no local e a lesão surgiu em pele previamente sã — só revelar se perguntado especificamente sobre pancada, machucado, hematoma ou lesão prévia no local | O paciente nunca fez exame de glicemia e não sabe se tem diabetes — só revelar se perguntado sobre comorbidades ou exames prévios | Barreira de acesso: reside a 40 km da sede e o serviço de referência fica a ~4 horas de distância — só revelar se o candidato perguntar sobre condições de deslocamento, apoio familiar ou dificuldades para comparecer ao encaminhamento',
      actorBehavior: 'Minimizador e resistente no início, cordial, fala pausado e com vocabulário simples e regional. Repete que "não é nada" e que veio por pressão da filha. Demonstra a crença cultural de que pessoas negras não têm câncer de pele — se o candidato reforçar essa crença, mostrar alívio e sinalizar intenção de não retornar. Preocupa-se muito mais com a perda de dias de trabalho e com a distância do serviço do que com a doença. Se o candidato explicar com respeito, sem infantilizar e sem usar termos técnicos, e abordar a barreira de acesso (transporte sanitário/TFD, apoio da filha), passa a colaborar e aceita o encaminhamento. Se o candidato for apressado ou tecnicista, permanecer evasivo e responder com monossílabos.'
    },
    instC: {
      diagnosis: 'Melanoma acral lentiginoso em região plantar do pé esquerdo — mácula pigmentada plantar com critérios ABCDE positivos e crescimento progressivo há mais de um ano, em paciente de fototipo alto. Diagnóstico definitivo dependente de exame histopatológico.',
      differentials: [
        'Hematoma subcórneo plantar (talon noir) — pigmentação escura pós-traumática frequente em região plantar, porém tipicamente apresenta pontos hemorrágicos puntiformes, bordas bem definidas, migra distalmente com o crescimento da camada córnea e desaparece em semanas a poucos meses; a evolução de mais de um ano com crescimento progressivo afasta a hipótese.',
        'Nevo melanocítico acral benigno — comum em região plantar, mas costuma ser menor que 7 mm, simétrico, homogêneo, estável ao longo dos anos e, à dermatoscopia, apresenta padrão paralelo dos SULCOS; nesta lesão a pigmentação acompanha as CRISTAS, achado altamente sugestivo de melanoma acral.',
        'Hiperpigmentação pós-inflamatória ou pigmentação plantar étnica/fisiológica — pode ocorrer em fototipos altos, mas é geralmente simétrica, bilateral, de bordas difusas e sem crescimento progressivo nem componente infiltrado.',
        'Verruga plantar pigmentada ou úlcera neuropática pigmentada do pé diabético — afastadas pela ausência de solução de continuidade, de pontos hemorrágicos, de dor e de neuropatia; ainda assim, a investigação de diabetes é pertinente neste paciente sem seguimento prévio.'
      ],
      context: 'Homem de 66 anos, lavrador, fototipo V, sem acompanhamento médico prévio, apresenta mácula pigmentada plantar de 26 mm, assimétrica, policrômica, de bordas mal delimitadas e com crescimento progressivo há mais de um ano, com área central infiltrada. O melanoma acral lentiginoso é o subtipo proporcionalmente mais frequente em indivíduos de fototipos altos e apresenta, no Brasil, diagnóstico habitualmente tardio e pior prognóstico, em grande parte por barreiras de acesso e pela crença equivocada de que pessoas negras não desenvolvem câncer de pele.',
      justify: 'A lesão preenche os critérios ABCDE de forma inequívoca: Assimetria em ambos os eixos, Bordas irregulares e mal delimitadas com difusão da pigmentação, Cor heterogênea (castanho-escuro, negro, acinzentado), Diâmetro de 26 mm (muito superior a 6 mm) e Evolução progressiva documentada em mais de um ano. Aplica-se ainda o critério específico para lesões plantares: a distribuição da pigmentação segundo as CRISTAS dos dermatóglifos (padrão paralelo das cristas) é altamente sugestiva de melanoma acral, enquanto a distribuição pelos SULCOS sugere nevo acral benigno. A ausência de pontos hemorrágicos puntiformes e a persistência por mais de um ano afastam hematoma subcórneo, principal diferencial. A área central infiltrada sugere componente de crescimento vertical, de pior prognóstico. O melanoma acral não guarda relação com exposição solar cumulativa, o que explica sua ocorrência em área fotoprotegida e reforça que fototipo alto não confere proteção — crença que precisa ser ativamente desconstruída na consulta. A ausência de linfonodomegalia e de sintomas sistêmicos sugere doença ainda sem acometimento regional clinicamente detectável, mas não reduz a urgência.',
      expectedAnamnesis: 'Caracterizar o tempo de percepção da lesão e o crescimento progressivo (comparação do tamanho inicial com o atual) | Investigar especificamente trauma local prévio, pancada ou hematoma, para diferenciar de talon noir | Investigar se havia lesão pigmentada prévia no local (lesão de novo) | Investigar dor, prurido, sangramento, ulceração e secreção | Investigar sintomas de neuropatia periférica e antecedente de diabetes, dado o risco de úlcera plantar como diferencial | Investigar antecedente pessoal e familiar de câncer de pele ou melanoma | Investigar uso de calçados, hábito de andar descalço e exposição ocupacional | Investigar imunossupressão | Revisão de sistemas dirigida à doença avançada: perda ponderal, adenomegalias percebidas, dor óssea, tosse, cefaleia | Investigar determinantes sociais e barreiras de acesso: distância do serviço de referência, condições de deslocamento, rede de apoio familiar e impacto do afastamento do trabalho',
      expectedPhysical: 'Sinais vitais: sem alterações relevantes ao caso; aferição de PA pertinente em paciente sem seguimento prévio | Inspeção da lesão sob boa iluminação, com o pé adequadamente exposto e apoiado, aplicando os critérios ABCDE | Descrição semiológica formal esperada: mácula pigmentada única, assimétrica, de bordas irregulares e mal delimitadas, policrômica (castanho-escuro, negra, acinzentada), com 26 mm no maior eixo, de superfície plana com área central infiltrada, sem ulceração | Palpação da lesão para identificar a área de infiltração/espessamento central | Avaliação dermatoscópica, se disponível, buscando padrão paralelo das cristas (sugestivo de malignidade) versus padrão paralelo dos sulcos (sugestivo de benignidade) | Exame OBRIGATÓRIO das demais áreas acrais: pé contralateral, regiões interdigitais, palmas das mãos e, sobretudo, TODAS as unhas das mãos e dos pés, pesquisando melanoníquia longitudinal e sinal de Hutchinson | Exame das mucosas oral e conjuntival, pela associação do melanoma em fototipos altos com localizações acrais e mucosas | Palpação das cadeias linfonodais poplíteas e inguinais bilaterais e do trajeto de drenagem, pesquisando satelitose e metástase em trânsito | Avaliação vascular e neurológica do pé (pulsos pediosos e tibiais posteriores, sensibilidade) para afastar pé diabético como diferencial | Exame do restante da superfície cutânea',
      expectedExams: [
        { exam: 'Biópsia incisional da área mais espessa/infiltrada da lesão, realizada em serviço especializado', justify: 'Lesão plantar extensa (26 mm) em área de apoio, na qual a exérese total inicial é tecnicamente inviável na atenção primária; a biópsia incisional da área mais representativa e infiltrada é aceita nesta situação e permite o diagnóstico e a estimativa da espessura de Breslow, sem prejuízo prognóstico quando seguida de tratamento definitivo.', expected: 'Melanoma acral lentiginoso, com determinação de Breslow, ulceração, índice mitótico e status de margens.' },
        { exam: 'Dermatoscopia da lesão plantar', justify: 'Permite avaliar o padrão de distribuição da pigmentação em relação aos dermatóglifos — padrão paralelo das cristas é altamente sugestivo de melanoma acral, enquanto o padrão paralelo dos sulcos sugere nevo acral benigno; ferramenta de triagem que não substitui a biópsia diante de lesão clinicamente suspeita.', expected: 'Padrão paralelo das cristas, com áreas de pigmentação difusa irregular e véu azul-esbranquiçado.' },
        { exam: 'Exame dermatológico completo, incluindo todas as unhas, palmas, plantas e mucosas', justify: 'Em fototipos altos, os melanomas concentram-se em sítios acrais e mucosos; a pesquisa de melanoníquia longitudinal e do sinal de Hutchinson (extensão da pigmentação à prega ungueal proximal) é obrigatória para não perder lesão sincrônica.', expected: 'Sem outras lesões suspeitas neste caso.' },
        { exam: 'Glicemia de jejum e/ou hemoglobina glicada', justify: 'Paciente de 66 anos sem qualquer acompanhamento prévio e sem rastreamento realizado; a investigação de diabetes é pertinente para o rastreamento populacional e para afastar o pé diabético como diferencial de lesão plantar.', expected: 'Esperado normal neste caso; se alterado, iniciar seguimento conforme protocolo do Ministério da Saúde.' },
        { exam: 'Estadiamento (LDH, ultrassonografia de cadeias linfonodais, tomografias, pesquisa de linfonodo sentinela)', justify: 'Indicado apenas APÓS a confirmação histopatológica e conduzido pelo serviço especializado, com extensão definida pela espessura de Breslow e pelo estadio clínico. ⚠️ Estadiamento baseado no sistema AJCC 8ª edição, de origem estrangeira, adotado pelas diretrizes brasileiras (SBD/SBCO/INCA).', expected: 'A definir pelo serviço de referência.' }
      ],
      expectedConduct: 'Farmacológica: nenhuma. NÃO prescrever antifúngico, corticoide, ácido ceratolítico ou qualquer tópico sobre a lesão como teste terapêutico. | Não farmacológica / procedimento: NÃO realizar raspagem, curetagem, shave, crioterapia ou cauterização na UBS; encaminhar para biópsia em serviço especializado; orientar proteção da lesão contra atrito e uso de calçado fechado e confortável até a avaliação. | Encaminhamento: encaminhamento com prioridade máxima à dermatologia/cirurgia oncológica, com descrição detalhada dos critérios ABCDE, do tempo de evolução e das dimensões no formulário de referência, para adequada classificação de risco na regulação; acionar ativamente os recursos de acesso — transporte sanitário municipal, Tratamento Fora de Domicílio (TFD) quando aplicável, e agendamento com data definida; envolver a equipe de Saúde da Família e o ACS no monitoramento do encaminhamento, dada a alta chance de abandono por barreira geográfica; garantir os prazos da Lei nº 12.732/2012 após a confirmação diagnóstica. | Orientações ao paciente: desconstruir explicitamente a crença de que pessoas de pele negra não desenvolvem câncer de pele, esclarecendo que este tipo específico ocorre em áreas sem sol (solas, palmas e unhas) e é justamente mais frequente em pessoas de pele mais escura; explicar em linguagem simples e sem tecnicismos o que é a biópsia; orientar autoexame das solas, das palmas e das unhas; orientar fotoproteção como medida geral de saúde; orientar exame de pele nos filhos. | Seguimento: retorno definido na UBS após a avaliação especializada; busca ativa pelo ACS se o paciente não comparecer; sinais de alarme para retorno imediato: crescimento acelerado, ferida que não cicatriza, sangramento, caroços na perna ou na virilha, dor; após confirmação, seguimento dermatológico e oncológico vitalício.',
      expectedCommunication: 'Apresentação: apresentar-se pelo nome e função, confirmar o nome do paciente e explicar o objetivo da consulta | Solicitar permissão antes de examinar os pés e as unhas, com cuidado quanto ao constrangimento do paciente ao expor os pés | Escuta ativa: permitir o relato inicial sem interromper, usar perguntas abertas, adaptar o vocabulário ao letramento do paciente, sem infantilizar e sem jargões | Reconhecer e valorizar o papel da filha que motivou a consulta, sem constranger o paciente por ter demorado | Corrigir de forma respeitosa e explícita a crença de que pele negra não desenvolve câncer de pele, sem ridicularizar | Comunicação do diagnóstico: informar honestamente a suspeita de câncer de pele, sem afirmar certeza antes da biópsia e sem falsa tranquilização; verificar a compreensão pedindo que o paciente explique com as próprias palavras o que entendeu | Abordar ativamente a barreira de acesso e o receio de perder dias de trabalho, construindo o plano junto com o paciente e com a rede de apoio | Perguntar como o paciente está se sentindo e se restaram dúvidas antes de encerrar',
      criticalErrors: [
        'Atribuir a lesão a calo, hematoma de trauma, "mancha da terra" ou pigmentação racial normal e liberar o paciente sem biópsia nem encaminhamento.',
        'Reforçar ou não corrigir a crença de que pessoas de pele negra não desenvolvem câncer de pele, o que compromete a adesão e perpetua o diagnóstico tardio do melanoma acral.',
        'Prescrever antifúngico, ceratolítico, corticoide ou realizar raspagem/curetagem/crioterapia da lesão, retardando o diagnóstico e comprometendo a avaliação histopatológica.',
        'Deixar de examinar as unhas, o pé contralateral, as palmas e as mucosas, perdendo lesões acrais ou mucosas sincrônicas — sítios preferenciais em fototipos altos.',
        'Deixar de palpar as cadeias linfonodais inguinais e poplíteas e o trajeto de drenagem.',
        'Encaminhar sem prioridade, sem descrever a suspeita, ou não abordar a barreira geográfica e social de acesso, resultando em abandono do seguimento.'
      ]
    },
    instD: {
      title: 'CHECKLIST — MÁCULA PIGMENTADA PLANTAR DE CRESCIMENTO PROGRESSIVO (MELANOMA ACRAL LENTIGINOSO)',
      sections: [
        {
          h: 'BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE',
          items: [
            { item: 'Apresentou-se pelo nome e função e confirmou a identificação do paciente', score: 0.5, ref: 'CFM — Código de Ética Médica, 2019' },
            { item: 'Solicitou permissão antes de examinar os pés e utilizou linguagem adaptada ao letramento do paciente, sem jargões e sem infantilizar', score: 0.5, ref: 'MS — Política Nacional de Humanização (HumanizaSUS), 2013' },
            { item: 'Perguntou como o paciente estava se sentindo diante da suspeita e/ou verificou se restaram dúvidas antes de encerrar', score: 0.5, ref: 'INCA — Comunicação de Notícias Difíceis em Oncologia, 2020' }
          ]
        },
        {
          h: 'BLOCO 2 — ANAMNESE',
          items: [
            { item: 'Caracterizou o tempo de evolução e o crescimento progressivo da lesão (comparação do tamanho inicial com o atual)', score: 0.5, ref: 'SBD — Consenso Brasileiro de Câncer da Pele Melanoma, 2023' },
            { item: 'Investigou especificamente trauma/pancada/hematoma prévio no local, permitindo afastar hematoma subcórneo (talon noir)', score: 0.5, ref: 'SBD — Melanoma Acral: Diagnóstico Diferencial, 2023' },
            { item: 'Investigou antecedentes pessoais (incluindo diabetes/neuropatia) e/ou história familiar de câncer de pele', score: 0.5, ref: 'MS — Cadernos de Atenção Básica nº 36 — Diabetes Mellitus, 2013; SBD 2023' },
            { item: 'Investigou barreiras sociais de acesso ao serviço de referência (distância, transporte, rede de apoio, impacto no trabalho)', score: 0.5, ref: 'MS — Política Nacional de Atenção Básica (PNAB), 2017' }
          ]
        },
        {
          h: 'BLOCO 3 — EXAME FÍSICO',
          items: [
            { item: 'Descreveu a lesão com terminologia dermatológica formal e aplicou os critérios ABCDE (mácula, assimetria, bordas, cor, diâmetro)', score: 1.0, ref: 'SBD — Consenso Brasileiro de Melanoma, 2023' },
            { item: 'Examinou as demais áreas acrais: pé contralateral, palmas e regiões interdigitais', score: 0.5, ref: 'SBD — Melanoma em Fototipos Altos, 2023' },
            { item: 'Examinou TODAS as unhas das mãos e dos pés, pesquisando melanoníquia longitudinal e sinal de Hutchinson', score: 0.5, ref: 'SBD — Melanoma Ungueal: critérios ABCDEF, 2023' },
            { item: 'Palpou as cadeias linfonodais inguinais e/ou poplíteas e pesquisou lesões-satélite no trajeto de drenagem', score: 0.5, ref: 'INCA — Condutas em Melanoma Cutâneo, 2022' }
          ]
        },
        {
          h: 'BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
          items: [
            { item: 'Formulou a hipótese de melanoma (acral lentiginoso) / lesão pigmentada maligna', score: 1.0, ref: 'SBD — Consenso Brasileiro de Melanoma, 2023; INCA 2022' },
            { item: 'Citou ao menos dois diagnósticos diferenciais pertinentes (hematoma subcórneo/talon noir, nevo acral, hiperpigmentação pós-inflamatória)', score: 0.5, ref: 'SBD — Diagnóstico Diferencial de Lesões Pigmentadas Acrais, 2023' },
            { item: 'Indicou biópsia da lesão em serviço especializado, contraindicando explicitamente raspagem, crioterapia, cauterização ou tópicos', score: 0.5, ref: 'SBD/SBCO — Consenso Brasileiro de Melanoma, 2023' }
          ]
        },
        {
          h: 'BLOCO 5 — CONDUTA E ORIENTAÇÃO AO PACIENTE',
          items: [
            { item: 'Encaminhou com prioridade à dermatologia/cirurgia oncológica, descrevendo a suspeita clínica no encaminhamento, e/ou acionou recurso de transporte/TFD e busca ativa pela equipe', score: 1.0, ref: 'MS — Protocolos de Encaminhamento AB → Atenção Especializada, Dermatologia, 2016; Lei nº 12.732/2012' },
            { item: 'Esclareceu explicitamente que pessoas de pele negra também desenvolvem câncer de pele, sobretudo em áreas sem exposição solar (solas, palmas e unhas)', score: 1.0, ref: 'INCA — Detecção Precoce do Câncer de Pele, 2022; SBD — Melanoma Acral, 2023' },
            { item: 'Orientou autoexame de solas, palmas e unhas, sinais de alarme e retorno definido para acompanhamento do resultado', score: 0.5, ref: 'INCA — Prevenção e Detecção Precoce do Câncer de Pele, 2022' }
          ]
        }
      ]
    }
  },

  {
    id: 4,
    title: 'Ferida no nariz que não cicatriza há um ano',
    sub: 'UBS — Atenção Primária',
    tema: 'Dermatologia',
    topic: 'carcinoma basocelular',
    level: 'moderado',
    cardAccent: '#7A5C3E',
    instA: {
      scenario: 'Atenção Primária — UBS de município do interior. Consultório, turno matutino. Consulta de demanda espontânea.',
      patient: 'A.C.F., 68 anos, masculino, agricultor aposentado, fototipo II, hipertenso e tabagista.',
      complaint: 'Refere uma "feridinha" na lateral do nariz que aparece, sangra, forma casquinha e volta, sem cicatrizar, há cerca de um ano.',
      tasks: [
        'Realize a anamnese dirigida à lesão cutânea.',
        'Realize o exame físico dermatológico pertinente e descreva a lesão com terminologia semiológica formal.',
        'Formule a hipótese diagnóstica principal e ao menos dois diagnósticos diferenciais.',
        'Proponha a conduta diagnóstica e o encaminhamento adequados.',
        'Oriente o paciente quanto ao diagnóstico provável, ao tratamento e à prevenção.'
      ]
    },
    instB: {
      vitals: {
        PA: '148/86 mmHg',
        FC: '76 bpm',
        FR: '16 irpm',
        Tax: '36,2 °C',
        Peso: '74 kg',
        Altura: '1,72 m',
        IMC: '25,0 kg/m²'
      },
      physicalGeneral: 'Bom estado geral, lúcido e orientado, corado, hidratado, anictérico, acianótico, afebril. Fototipo II, com heliodermatite acentuada em face, pescoço e antebraços: pele espessada, rugas profundas, elastose solar, lentigos solares múltiplos e áreas de leucodermia gutata.',
      physicalSeg: 'PELE (ASA NASAL DIREITA): lesão descrita no impresso fotográfico entregue ao candidato | PELE (FACE E COURO CABELUDO): múltiplas máculas eritematosas ásperas ao tato em fronte, dorso nasal, região malar e pavilhões auriculares, compatíveis com dano actínico crônico; calvície com pele do vértice do couro cabeludo espessada e áspera | PELE (ANTEBRAÇOS E DORSO DAS MÃOS): lentigos solares, púrpura senil e áreas de ceratose | LÁBIOS: semimucosa do lábio inferior discretamente esbranquiçada, seca e com perda do limite cutâneo-mucoso | CADEIAS LINFONODAIS: cervicais, submandibulares e pré-auriculares livres — sem linfonodos palpáveis | OLHOS E PÁLPEBRAS: sem lesões, sem ectrópio, motricidade ocular preservada | APARELHO RESPIRATÓRIO: murmúrio vesicular universalmente audível, sem ruídos adventícios | APARELHO CARDIOVASCULAR: ritmo cardíaco regular, 2 tempos, sem sopros',
      labs: [],
      image: 'FOTODESCRIÇÃO — IMPRESSO ENTREGUE AO CANDIDATO (asa nasal direita, próxima ao sulco alar): pápulo-nódulo único, de aproximadamente 12 x 10 mm, com bordas elevadas, translúcidas e de aspecto perlado (brilho nacarado), bem delimitadas, formando um rebordo contínuo. Sobre as bordas observam-se finas telangiectasias arboriformes. A porção central apresenta depressão e ulceração rasa de cerca de 5 mm, recoberta por crosta hemática aderida. A coloração é predominantemente róseo-translúcida, com discretos pontos de pigmentação acastanhada no quadrante inferior. Não há infiltração difusa da pele adjacente nem distorção da anatomia da asa nasal. Pele perilesional com elastose solar marcada, lentigos e máculas eritematodescamativas. Não há sinais flogísticos agudos, secreção purulenta ou linfangite.',
      note: 'Entregar o impresso de sinais vitais e exame físico geral no início da estação. Entregar o IMPRESSO FOTOGRÁFICO SOMENTE quando o candidato solicitar verbalmente examinar a lesão/face. Fornecer os achados de couro cabeludo, antebraços, lábios e cadeias linfonodais apenas se solicitados. Se o candidato prescrever antibiótico tópico ou sistêmico como conduta principal, ou indicar crioterapia/cauterização/curetagem sem diagnóstico histopatológico em lesão de asa nasal, ANOTAR como ERRO CRÍTICO. Se o candidato liberar o paciente com diagnóstico de "ferida por trauma/coçadura" sem investigação, ANOTAR como ERRO CRÍTICO.',
      patientProfile: 'Antônio C. F., 68 anos, masculino, agricultor aposentado, casado, quatro filhos. Reside em zona periurbana. Ensino fundamental incompleto. Hipertenso em uso irregular de hidroclorotiazida.',
      script: [
        { trigger: 'Queixa principal / abertura', speech: 'Doutor, é essa feridinha no canto do nariz. Ela cria uma casquinha, eu tiro sem querer quando lavo o rosto, sangra um pouquinho, aí forma de novo. E nunca sara direito.' },
        { trigger: 'Tempo de evolução', speech: 'Faz mais de ano. Começou como um carocinho pequeno, brilhante, que eu achei que era espinha. Só que não sumiu e foi crescendo devagar.' },
        { trigger: 'Sangramento e crosta', speech: 'Sangra pouco, só quando a casquinha sai. Aí para sozinho. Não sai pus, não tem cheiro ruim, não incha.' },
        { trigger: 'Dor e sintomas locais', speech: 'Não dói não. Não coça também. É mais o incômodo de ficar essa casca no rosto, minha mulher fica reclamando.' },
        { trigger: 'Exposição solar / ocupação', speech: 'Eu trabalhei na roça desde os doze anos, doutor. Saía cinco da manhã e voltava seis da tarde. Sol na cabeça a vida toda, mais de quarenta anos.' },
        { trigger: 'Fotoproteção / chapéu', speech: 'Chapéu de palha eu usava, sim, mas ele não cobria o nariz direito. Protetor solar eu nunca usei na vida, isso é coisa de agora, no meu tempo não tinha.' },
        { trigger: 'Antecedentes pessoais', speech: 'Tenho pressão alta, tomo um comprimido, mas confesso que às vezes esqueço. Fumo desde novo, um maço por dia. Não tenho diabetes.' },
        { trigger: 'Antecedente de lesões de pele prévias', speech: 'Já tiraram uma coisinha da minha orelha uns cinco anos atrás, num posto de saúde da cidade. Disseram que era um carcinoma, mas que era o tipo bonzinho, e não precisou de mais nada.' },
        { trigger: 'História familiar', speech: 'De câncer de pele na família eu não sei de ninguém. Meu irmão teve câncer no pulmão, era fumante que nem eu.' },
        { trigger: 'Tratamentos já tentados', speech: 'Eu passei pomada de farmácia, aquela amarelinha de antibiótico. Passei uns quinze dias, melhorava a casquinha, mas voltava tudo igual.' },
        { trigger: 'Pergunta ativa (após demonstrar suspeita)', speech: 'Doutor, isso é câncer? Se for, é aquele que espalha e mata? Meu irmão morreu de câncer, doutor.' },
        { trigger: 'Pergunta ativa (após indicação de tratamento cirúrgico)', speech: 'Vão cortar meu nariz? Vai ficar um buraco no meio da cara? Eu vou ficar desfigurado?' }
      ],
      hiddenInfo: 'Antecedente pessoal de carcinoma basocelular já tratado em pavilhão auricular há cerca de 5 anos — só revelar se o candidato perguntar especificamente sobre lesões de pele removidas ou tratadas anteriormente | Uso prévio de antibiótico tópico por cerca de 15 dias sem resolução — só revelar se o candidato perguntar sobre tratamentos já tentados | Tabagismo ativo de 1 maço/dia desde os 18 anos (carga tabágica ~50 anos-maço) — só revelar se perguntado sobre hábitos de vida | Nunca fez uso de fotoprotetor — só revelar se perguntado especificamente sobre fotoproteção',
      actorBehavior: 'Cordial, falante e bem-humorado no início, tratando a lesão como banalidade ("é só uma feridinha"). Colaborativo, mas responde apenas ao que for perguntado. Ao ouvir a palavra "câncer" muda visivelmente de postura: fica sério, silencia e associa imediatamente à morte do irmão por câncer de pulmão — faz a primeira pergunta ativa com angústia. A segunda preocupação central é estética/funcional: teme desfiguração facial. Se o candidato explicar a diferença entre carcinoma basocelular e melanoma, esclarecer o excelente prognóstico com tratamento adequado e abordar a preocupação com a aparência, o paciente relaxa e adere ao plano. Se o candidato usar linguagem técnica ou minimizar o medo sem explicar, permanecer tenso e questionar repetidamente.'
    },
    instC: {
      diagnosis: 'Carcinoma basocelular (CBC), provável subtipo nodular ulcerado ("úlcera roedora"), localizado em asa nasal direita — área de alto risco (zona H da face). Paciente com heliodermatite crônica, campo de cancerização e antecedente pessoal de CBC. Diagnóstico definitivo dependente de exame histopatológico.',
      differentials: [
        'Carcinoma espinocelular (CEC) — também se manifesta como lesão que não cicatriza em área fotoexposta, porém costuma apresentar superfície mais ceratósica, base infiltrada e endurecida, crescimento mais rápido e risco de metástase; a borda perlada com telangiectasias arboriformes favorece fortemente o CBC, mas apenas a histopatologia diferencia com segurança.',
        'Ceratose actínica hipertrófica — lesão pré-maligna do mesmo campo de cancerização, mas apresenta-se como mácula/pápula eritematosa áspera ao tato, sem borda perlada, sem telangiectasias arboriformes e sem ulceração persistente com crescimento progressivo.',
        'Melanoma amelanótico ou CBC pigmentado — a presença de pontos acastanhados obriga a considerar lesão melanocítica; o predomínio de borda perlada e o crescimento lento em um ano favorecem o CBC, mas a biópsia é indispensável.',
        'Lesão infecciosa crônica (leishmaniose tegumentar, piodermite crônica) — a leishmaniose cursa com úlcera de bordas elevadas e infiltradas em área exposta e é endêmica no Nordeste, devendo ser considerada; entretanto, a evolução de mais de um ano com borda perlada e telangiectasias, sem histórico epidemiológico de exposição a mata, torna esta hipótese menos provável.'
      ],
      context: 'Homem de 68 anos, fototipo II, agricultor com mais de 40 anos de exposição solar ocupacional sem fotoproteção, apresenta lesão pápulo-nodular de borda perlada com telangiectasias e ulceração central em asa nasal, de evolução lenta e progressiva há um ano, refratária a antibiótico tópico. O CBC é a neoplasia maligna mais frequente no Brasil e no mundo; localiza-se em 80% dos casos na cabeça e no pescoço e, embora raramente metastatize, pode causar destruição local extensa quando negligenciado.',
      justify: 'O quadro é típico de CBC nodular: pápulo-nódulo de crescimento lento (um ano), com bordas elevadas, translúcidas, de brilho perlado, sobre as quais se observam telangiectasias arboriformes — achado semiológico praticamente patognomônico — e ulceração central recoberta por crosta que recidiva ciclicamente, configurando a clássica lesão "que sangra, cria casca e não cicatriza". A refratariedade ao antibiótico tópico afasta etiologia infecciosa bacteriana. Os fatores de risco somam-se de forma contundente: fototipo II, exposição solar ocupacional cumulativa por mais de 40 anos sem fotoproteção, idade avançada, heliodermatite acentuada com campo de cancerização evidente e — dado crítico obtido apenas com pergunta dirigida — antecedente pessoal de CBC prévio, que aumenta substancialmente o risco de novas lesões e obriga seguimento dermatológico regular. A localização em asa nasal, próxima ao sulco alar, insere a lesão na zona H da face, área de alto risco de recidiva e de invasão em profundidade por planos de fusão embrionária, o que define a necessidade de tratamento em serviço especializado, preferencialmente com cirurgia micrográfica de Mohs. A ausência de linfonodomegalia é esperada, dado que o CBC praticamente não metastatiza.',
      expectedAnamnesis: 'Caracterizar o tempo de evolução da lesão e o padrão de crescimento (lento e progressivo) | Investigar o ciclo característico de sangramento, formação de crosta e ausência de cicatrização | Investigar dor, prurido, secreção purulenta e sinais flogísticos, para afastar processo infeccioso | Investigar exposição solar ocupacional e recreativa cumulativa, uso de chapéu e de fotoprotetor ao longo da vida | Investigar fototipo e história de queimaduras solares | Investigar ANTECEDENTE PESSOAL de câncer de pele ou de lesões cutâneas previamente removidas ou tratadas — fator de risco maior e informação escondida do caso | Investigar tratamentos já tentados sobre a lesão (pomadas, antibióticos, ácidos) | Investigar história familiar de câncer de pele | Investigar imunossupressão, radioterapia prévia na face e exposição a arsênico | Investigar hábitos de vida, especialmente tabagismo, relevante para o risco de CEC e de lesões labiais | Investigar história epidemiológica de exposição a área de mata, para considerar leishmaniose tegumentar como diferencial | Avaliar o impacto psicossocial e o receio de desfiguração facial',
      expectedPhysical: 'Sinais vitais: PA elevada em hipertenso com adesão irregular — pertinente registrar e abordar, sem desviar o foco da estação | Inspeção da lesão sob boa iluminação, se possível com auxílio de lupa, e estiramento da pele para evidenciar o brilho perlado e as telangiectasias | Descrição semiológica formal esperada: pápulo-nódulo único de 12 mm, com bordas elevadas, translúcidas, de brilho perlado, telangiectasias arboriformes na superfície e ulceração central rasa recoberta por crosta hemática, sem infiltração difusa da pele adjacente | Palpação da lesão e da base para avaliar infiltração, mobilidade sobre os planos profundos e fixação à cartilagem alar | Avaliação da extensão da lesão em relação ao sulco alar e às estruturas anatômicas vizinhas, considerando a zona H da face | Exame de TODA a pele fotoexposta — face, pavilhões auriculares, couro cabeludo (especialmente em paciente calvo), pescoço, colo, antebraços e dorso das mãos — para identificar o campo de cancerização e lesões sincrônicas | Exame do lábio inferior, pesquisando queilite actínica | Exame de toda a superfície cutânea, incluindo áreas fotoprotegidas | Palpação das cadeias linfonodais cervicais, submandibulares e pré-auriculares — esperado normal, dado que o CBC raramente metastatiza | Avaliação da motricidade ocular e pesquisa de acometimento de canto interno do olho e de pálpebras, se a lesão for próxima',
      expectedExams: [
        { exam: 'Biópsia da lesão (incisional, por punch, ou excisional conforme viabilidade técnica)', justify: 'Confirma o diagnóstico e, sobretudo, define o SUBTIPO histológico (nodular, superficial, esclerodermiforme/infiltrativo, micronodular), o que determina a agressividade local, a margem cirúrgica necessária e a indicação de cirurgia micrográfica de Mohs. Em lesão de asa nasal, a biópsia incisional/punch é preferível à exérese às cegas na atenção primária, pois preserva a anatomia para o planejamento cirúrgico especializado.', expected: 'Carcinoma basocelular, subtipo nodular, com descrição de margens e do padrão de invasão.' },
        { exam: 'Dermatoscopia', justify: 'Aumenta a acurácia diagnóstica do CBC e auxilia na diferenciação com CEC, ceratose actínica e lesões melanocíticas; ferramenta complementar que não substitui a biópsia.', expected: 'Telangiectasias arboriformes, ninhos ovoides azul-acinzentados, estruturas em folha de bordo e ulceração; ausência de rede pigmentar.' },
        { exam: 'Exame dermatológico de corpo inteiro com mapeamento das áreas fotoexpostas', justify: 'Paciente com campo de cancerização e antecedente pessoal de CBC apresenta risco substancialmente aumentado de novos tumores sincrônicos e metacrônicos e de outros cânceres de pele, incluindo melanoma.', expected: 'Múltiplas ceratoses actínicas em face e couro cabeludo; queilite actínica em lábio inferior.' },
        { exam: 'Exames de imagem (tomografia de face/seios da face)', justify: 'NÃO indicados na avaliação inicial. Reservados a casos com suspeita de invasão profunda, acometimento ósseo ou cartilaginoso, tumores extensos, recidivados ou com sintomas neurológicos, sob indicação do serviço especializado.', expected: 'Não aplicável neste momento.' }
      ],
      expectedConduct: 'Farmacológica: nenhum antibiótico tópico ou sistêmico está indicado, pois não se trata de processo infeccioso — suspender explicitamente a pomada em uso. NÃO iniciar imiquimode ou 5-fluoruracila tópicos por conta própria na atenção primária: essas opções restringem-se a CBC superficial de baixo risco, com diagnóstico histopatológico prévio e sob condução do especialista, sendo inadequadas para CBC de asa nasal. Otimizar o tratamento da hipertensão e abordar a adesão. | Não farmacológica / procedimento: encaminhar para exérese cirúrgica com margens adequadas, realizada por serviço especializado; para lesão de asa nasal (zona H), a cirurgia micrográfica de Mohs é a técnica de escolha, por permitir controle histológico completo das margens com máxima preservação tecidual, com as menores taxas de recidiva. NÃO realizar crioterapia, curetagem ou eletrocoagulação em lesão de asa nasal sem diagnóstico histopatológico, pelo alto risco de recidiva e de destruição local em área nobre. | Encaminhamento: encaminhar à dermatologia/cirurgia dermatológica ou cirurgia de cabeça e pescoço, descrevendo no formulário a localização em zona de alto risco, o tempo de evolução e o antecedente pessoal de CBC; encaminhamento prioritário — embora o CBC seja de baixa letalidade, o retardo acarreta destruição local significativa. Encaminhar também para cessação do tabagismo (grupo de tabagismo do SUS, conforme protocolo do INCA). | Orientações ao paciente: explicar em linguagem acessível que se trata de um câncer de pele do tipo mais comum e MENOS agressivo, que praticamente não se espalha para outros órgãos e tem taxa de cura superior a 95% com tratamento adequado, diferenciando-o explicitamente do melanoma; abordar diretamente o medo de desfiguração, explicando que a técnica cirúrgica moderna preserva ao máximo o tecido sadio e que existe reconstrução plástica; orientar fotoproteção rigorosa e permanente (FPS ≥ 30 reaplicado a cada 2 horas, chapéu de aba larga, camisa de manga longa, evitar exposição entre 10h e 16h); ensinar autoexame da pele; orientar cessação do tabagismo. | Seguimento: acompanhamento dermatológico regular e vitalício, com exame de corpo inteiro pelo menos anual, pelo risco elevado de novos tumores; retorno na UBS após a avaliação especializada; sinais de alarme para retorno imediato: crescimento rápido, sangramento volumoso, dor, dormência facial, aparecimento de novas lesões que não cicatrizam em mais de 4 semanas.',
      expectedCommunication: 'Apresentação: apresentar-se pelo nome e função, confirmar a identificação do paciente e explicar o objetivo da consulta | Solicitar permissão antes de examinar a face e a pele, garantindo iluminação e privacidade adequadas | Escuta ativa: permitir o relato inicial sem interromper, usar perguntas abertas antes das fechadas, adaptar a linguagem ao letramento do paciente | Comunicação do diagnóstico: informar honestamente a suspeita de câncer de pele, sem falsa tranquilização, mas contextualizando de forma clara e explícita o excelente prognóstico do CBC e sua diferença em relação ao melanoma e ao câncer que vitimou o irmão do paciente | Acolher o medo da morte e o medo da desfiguração facial: nomear a preocupação, perguntar diretamente o que mais o preocupa e responder de forma concreta | Verificar a compreensão pedindo que o paciente explique com as próprias palavras o que entendeu e o que fará a seguir | Perguntar se restaram dúvidas antes de encerrar a consulta',
      criticalErrors: [
        'Diagnosticar como ferida infecciosa, "machucado de coçar" ou "espinha" e prescrever antibiótico tópico/sistêmico, liberando o paciente sem biópsia nem encaminhamento — perpetuando o atraso de uma lesão que já dura um ano.',
        'Indicar crioterapia, curetagem, eletrocoagulação ou exérese às cegas de lesão em asa nasal (zona H) sem diagnóstico histopatológico e sem planejamento especializado, com alto risco de recidiva e de destruição local em área nobre.',
        'Deixar de solicitar biópsia/encaminhamento para confirmação histopatológica, tratando empiricamente com imiquimode ou 5-fluoruracila tópicos uma lesão de alto risco.',
        'Não examinar o restante das áreas fotoexpostas (face, couro cabeludo, orelhas, lábios, antebraços), perdendo o campo de cancerização e lesões sincrônicas em paciente com antecedente pessoal de CBC.',
        'Afirmar ao paciente que "não é nada, é só uma ferida" ou, no extremo oposto, comunicar "o senhor tem câncer" sem contextualizar o prognóstico, gerando sofrimento desproporcional e risco de abandono.',
        'Deixar de orientar fotoproteção e seguimento dermatológico regular em paciente com dano actínico grave e câncer de pele prévio.'
      ]
    },
    instD: {
      title: 'CHECKLIST — LESÃO ULCERADA EM ASA NASAL QUE NÃO CICATRIZA (CARCINOMA BASOCELULAR)',
      sections: [
        {
          h: 'BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE',
          items: [
            { item: 'Apresentou-se pelo nome e função e confirmou a identificação do paciente', score: 0.5, ref: 'CFM — Código de Ética Médica, 2019' },
            { item: 'Solicitou permissão antes de examinar a face e a pele do paciente', score: 0.5, ref: 'CFM — Código de Ética Médica, 2019 (autonomia e consentimento)' },
            { item: 'Perguntou ativamente o que mais preocupava o paciente e/ou acolheu o medo de câncer e de desfiguração facial', score: 0.5, ref: 'INCA — Comunicação de Notícias Difíceis em Oncologia, 2020; MS — HumanizaSUS, 2013' }
          ]
        },
        {
          h: 'BLOCO 2 — ANAMNESE',
          items: [
            { item: 'Caracterizou o tempo de evolução e o padrão da lesão (sangra, forma crosta e não cicatriza há ~1 ano)', score: 1.0, ref: 'SBD — Consenso Brasileiro de Câncer da Pele Não Melanoma, 2023; INCA 2022' },
            { item: 'Investigou exposição solar ocupacional/cumulativa e uso de fotoproteção ao longo da vida', score: 0.5, ref: 'INCA — Prevenção do Câncer de Pele, 2022; MS — Cadernos de Atenção Básica nº 29' },
            { item: 'Investigou antecedente pessoal de câncer de pele ou lesões cutâneas previamente removidas (informação escondida — CBC prévio em orelha)', score: 0.5, ref: 'SBD — Câncer da Pele Não Melanoma, 2023' },
            { item: 'Investigou tratamentos já tentados sobre a lesão (uso prévio de antibiótico tópico sem resposta)', score: 0.5, ref: 'MS — Cadernos de Atenção Básica nº 29 — Dermatologia, 2016' }
          ]
        },
        {
          h: 'BLOCO 3 — EXAME FÍSICO',
          items: [
            { item: 'Descreveu a lesão com terminologia dermatológica formal, citando borda perlada/translúcida, telangiectasias e ulceração central', score: 1.0, ref: 'SBD — Consenso Brasileiro de Câncer da Pele Não Melanoma, 2023' },
            { item: 'Examinou as demais áreas fotoexpostas (face, orelhas, couro cabeludo, lábios, antebraços) identificando o campo de cancerização', score: 0.5, ref: 'SBD — Campo de Cancerização e Ceratoses Actínicas, 2023' },
            { item: 'Palpou a lesão avaliando infiltração/mobilidade sobre planos profundos e/ou palpou as cadeias linfonodais cervicais', score: 0.5, ref: 'INCA — Condutas em Câncer de Pele Não Melanoma, 2022' }
          ]
        },
        {
          h: 'BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
          items: [
            { item: 'Formulou a hipótese diagnóstica de carcinoma basocelular / câncer de pele não melanoma', score: 1.0, ref: 'SBD — Consenso Brasileiro de Câncer da Pele Não Melanoma, 2023; INCA 2022' },
            { item: 'Citou ao menos dois diagnósticos diferenciais pertinentes (CEC, ceratose actínica hipertrófica, melanoma amelanótico, leishmaniose tegumentar)', score: 0.5, ref: 'SBD — Diagnóstico Diferencial das Lesões que Não Cicatrizam, 2023; MS — Manual de Vigilância da Leishmaniose Tegumentar, 2017' },
            { item: 'Indicou biópsia para confirmação histopatológica e definição do subtipo, contraindicando crioterapia/cauterização às cegas em asa nasal', score: 0.5, ref: 'SBD — Consenso Brasileiro de Câncer da Pele Não Melanoma, 2023' }
          ]
        },
        {
          h: 'BLOCO 5 — CONDUTA E ORIENTAÇÃO AO PACIENTE',
          items: [
            { item: 'Encaminhou à dermatologia/cirurgia dermatológica para tratamento cirúrgico, sinalizando a localização em zona de alto risco (zona H da face)', score: 1.0, ref: 'MS — Protocolos de Encaminhamento AB → Atenção Especializada, Dermatologia, 2016; SBD 2023' },
            { item: 'Explicou o diagnóstico em linguagem acessível, diferenciando o CBC do melanoma e informando o excelente prognóstico com tratamento adequado', score: 0.5, ref: 'INCA — Câncer de Pele Não Melanoma, 2022' },
            { item: 'Orientou fotoproteção permanente (FPS ≥ 30, chapéu, roupas, evitar sol 10h–16h) e/ou seguimento dermatológico regular pelo risco de novas lesões', score: 0.5, ref: 'INCA — Prevenção e Detecção Precoce do Câncer de Pele, 2022; SBD 2023' }
          ]
        }
      ]
    }
  },

  {
    id: 5,
    title: 'Manchas escuras no tronco em paciente preocupada com câncer',
    sub: 'UBS — Atenção Primária',
    tema: 'Dermatologia',
    topic: 'ceratose seborreica',
    level: 'moderado',
    cardAccent: '#8C6239',
    instA: {
      scenario: 'Atenção Primária — UBS urbana. Consultório, turno vespertino. Consulta agendada por demanda espontânea.',
      patient: 'L.A.M., 58 anos, feminino, professora aposentada, fototipo III, sem comorbidades relevantes.',
      complaint: 'Refere que apareceram várias "manchas escuras e ásperas" no tronco nos últimos anos e está apreensiva, pois uma irmã foi diagnosticada com câncer de pele.',
      tasks: [
        'Realize a anamnese dirigida à queixa dermatológica.',
        'Realize o exame físico dermatológico pertinente e descreva as lesões com terminologia semiológica formal.',
        'Formule a hipótese diagnóstica principal e ao menos dois diagnósticos diferenciais.',
        'Estabeleça a conduta adequada, justificando a indicação ou a não indicação de procedimentos.',
        'Oriente a paciente quanto ao diagnóstico, à prevenção e ao seguimento.'
      ]
    },
    instB: {
      vitals: {
        PA: '124/78 mmHg',
        FC: '70 bpm',
        FR: '16 irpm',
        Tax: '36,5 °C',
        Peso: '66 kg',
        Altura: '1,62 m',
        IMC: '25,1 kg/m²'
      },
      physicalGeneral: 'Bom estado geral, lúcida e orientada, corada, hidratada, anictérica, acianótica, afebril. Fototipo III. Fácies ansiosa. Sem sinais de perda ponderal, sem adenomegalias visíveis.',
      physicalSeg: 'PELE (TRONCO — DORSO E REGIÃO SUBMAMÁRIA): lesões descritas no impresso fotográfico entregue ao candidato | PELE (FACE, PESCOÇO E ANTEBRAÇOS): lentigos solares esparsos, elastose solar leve, sem lesões ulceradas, sem lesões peroladas, sem lesões ásperas eritematosas | PELE (MEMBROS): cerca de 12 nevos melanocíticos pequenos (2–4 mm), simétricos, de bordas regulares e coloração homogênea castanho-clara, todos com aspecto semelhante entre si | COURO CABELUDO, PALMAS, PLANTAS, REGIÃO UNGUEAL E MUCOSAS: sem lesões pigmentadas atípicas | CADEIAS LINFONODAIS: cervicais, axilares e inguinais livres — sem linfonodos palpáveis | ABDOME: plano, flácido, indolor, sem visceromegalias | RESTANTE DO EXAME SEGMENTAR: sem alterações',
      labs: [],
      image: 'FOTODESCRIÇÃO — IMPRESSO ENTREGUE AO CANDIDATO (dorso e região submamária): múltiplas lesões (cerca de 15), distribuídas de forma esparsa no tronco, com dimensões variando de 4 a 14 mm. Trata-se de pápulas e placas bem delimitadas, de bordas nítidas e regulares, com aspecto de estarem "coladas" ou "grudadas" sobre a pele, como se pudessem ser destacadas com a unha. A superfície é opaca, aveludada a verrucosa, com discreta descamação gordurosa aderida e, em várias lesões, observam-se pequenos orifícios puntiformes escuros na superfície (pseudocistos córneos e aberturas foliculares tipo comedão). A coloração varia entre castanho-claro, castanho-escuro e acinzentado, porém CADA LESÃO É INDIVIDUALMENTE HOMOGÊNEA em sua cor. Não há ulceração, sangramento, crosta hemática, borda perlada, telangiectasias arboriformes, áreas de regressão ou halo eritematoso. As lesões apresentam grande semelhança entre si, configurando um padrão monótono e repetitivo. A lesão de maior dimensão (14 mm), localizada no dorso, é discretamente mais escura, porém mantém bordas nítidas, superfície verrucosa, aspecto "colado" e coloração homogênea, sem assimetria significativa nem policromia. Não há lesão que destoe do conjunto ("sinal do patinho feio" ausente).',
      note: 'Entregar o impresso de sinais vitais e exame físico geral no início. Entregar o IMPRESSO FOTOGRÁFICO SOMENTE mediante solicitação verbal de examinar a pele. Fornecer os achados de demais segmentos (nevos de membros, couro cabeludo, palmas, plantas, unhas, mucosas, linfonodos) apenas se o candidato solicitar exame de corpo inteiro. Se o candidato indicar EXÉRESE CIRÚRGICA DE TODAS AS LESÕES ou encaminhamento oncológico de urgência, ANOTAR como conduta desproporcional e ERRO CRÍTICO. Se o candidato tranquilizar a paciente SEM ter examinado toda a superfície cutânea, ANOTAR como ERRO CRÍTICO. Ponto-chave da estação: reconhecer benignidade, evitar iatrogenia e conduzir a ansiedade da paciente — o candidato NÃO deve ser premiado por "solicitar biópsia por precaução" de lesões inequivocamente benignas.',
      patientProfile: 'Lúcia A. M., 58 anos, feminino, professora aposentada da rede municipal, casada, dois filhos adultos. Reside em zona urbana. Ensino superior completo. Sem comorbidades em acompanhamento.',
      script: [
        { trigger: 'Queixa principal / abertura', speech: 'Doutor, eu vim porque apareceram umas manchas escuras nas minhas costas e embaixo do peito. Minha irmã descobriu um câncer de pele ano passado e desde então eu não durmo direito pensando nisso.' },
        { trigger: 'Tempo de evolução', speech: 'A primeira eu notei uns cinco anos atrás. Foram aparecendo aos poucos, uma aqui, outra ali. Hoje já são umas quinze, eu conto no espelho.' },
        { trigger: 'Se mudaram de cor, forma ou tamanho', speech: 'Crescer, elas cresceram bem devagarinho no começo, mas faz tempo que estão do mesmo jeito. A cor é sempre igual, não muda. E o formato também não muda.' },
        { trigger: 'Sintomas locais — coça, dói, sangra', speech: 'Não dói. Sangrar nunca sangrou. Às vezes coça um pouquinho quando o sutiã aperta ou quando esfrega na roupa, e eu já arranquei uma sem querer com a unha, mas cresceu de novo igual.' },
        { trigger: 'Aspecto das lesões (se perguntado sobre textura)', speech: 'Elas são ásperas, meio engraçadas, parecem que estão coladas por cima da pele, sabe? Que nem se alguém tivesse colado uma casquinha ali.' },
        { trigger: 'Se surgiram todas de uma vez / velocidade recente', speech: 'Não, foi bem aos poucos, ao longo dos anos. Nos últimos meses não apareceu nenhuma nova, não.' },
        { trigger: 'História familiar de câncer de pele', speech: 'Minha irmã mais velha teve. Ela operou o rosto, tirou um pedaço perto do nariz. Disseram que era o tipo que não espalha, mas eu fiquei apavorada mesmo assim.' },
        { trigger: 'Exposição solar / fotoproteção', speech: 'Eu trabalhei a vida toda em sala de aula, sol mesmo eu peguei pouco. Uso protetor no rosto de vez em quando, mas no corpo eu nunca passo.' },
        { trigger: 'Antecedentes pessoais', speech: 'Eu não tenho doença nenhuma. Não tomo remédio contínuo. Não fumo, bebo só socialmente. Nunca tirei nada da pele.' },
        { trigger: 'Sintomas sistêmicos', speech: 'Eu tô bem de saúde. Não emagreci, não tenho dor, como bem, durmo mal só por causa dessa preocupação mesmo.' },
        { trigger: 'Pergunta ativa (durante a consulta)', speech: 'Doutor, o senhor não acha melhor tirar todas por segurança? Eu prefiro tirar tudo e ficar tranquila do que ficar esperando virar câncer.' },
        { trigger: 'Pergunta ativa (ao final)', speech: 'Mas doutor, como é que eu vou saber se uma delas mudar? Eu não consigo ver minhas costas. E eu preciso voltar aqui de quanto em quanto tempo?' }
      ],
      hiddenInfo: 'Uma das lesões foi arrancada acidentalmente com a unha e recresceu com o mesmo aspecto — só revelar se o candidato perguntar especificamente sobre trauma, sangramento ou tentativa de remoção das lesões | A irmã teve carcinoma basocelular em face ("tipo que não espalha"), e não melanoma — só revelar o detalhe se o candidato perguntar especificamente qual foi o tipo de câncer de pele da irmã | Insônia e ansiedade importante há cerca de um ano por medo de câncer, com verificação repetida das lesões no espelho — só revelar se o candidato perguntar sobre sono, humor, ansiedade ou impacto emocional da preocupação | Nenhuma lesão nova surgiu nos últimos meses (afasta sinal de Leser-Trélat) — só revelar se o candidato perguntar sobre surgimento súbito ou explosivo de múltiplas lesões',
      actorBehavior: 'Muito ansiosa e vigilante, porém educada e articulada (professora, ensino superior). Traz a comparação com a irmã repetidamente. Busca ativamente reasseguramento e pressiona pela remoção cirúrgica de todas as lesões ("prefiro tirar tudo"). Se o candidato ceder à pressão e indicar exérese de todas as lesões, demonstrar alívio imediato — comportamento que expõe a falha do candidato em resistir à conduta desproporcional. Se o candidato apenas disser "não é nada" sem examinar toda a pele e sem explicar, permanecer visivelmente insatisfeita, insistir e verbalizar que vai procurar outro médico. Se o candidato examinar cuidadosamente toda a superfície cutânea, explicar as características de benignidade, ensinar o autoexame com o ABCDE e definir retorno, relaxar de forma perceptível, agradecer e aceitar a conduta conservadora.'
    },
    instC: {
      diagnosis: 'Ceratoses seborreicas múltiplas em tronco — lesões epiteliais benignas, sem indicação de exérese ou biópsia. Ausência de lesões suspeitas de malignidade no exame de corpo inteiro. Quadro associado a ansiedade significativa relacionada à saúde (cancerofobia), desencadeada pelo diagnóstico de câncer de pele em familiar.',
      differentials: [
        'Melanoma — principal diagnóstico a ser ativamente excluído, pois a ceratose seborreica pigmentada é seu simulador clínico mais frequente; afastado pela ausência de assimetria, policromia intralesional, bordas irregulares, área de regressão e, sobretudo, pela ausência de evolução recente e pela monotonia do conjunto (ausência do sinal do patinho feio).',
        'Nevo melanocítico (juncional ou composto) — lesão pigmentada benigna comum, porém de superfície lisa, bordas suaves e sem o aspecto "colado", a descamação gordurosa e os pseudocistos córneos característicos da ceratose seborreica.',
        'Carcinoma basocelular pigmentado — pode ser confundido com ceratose seborreica pigmentada, mas apresenta borda perlada translúcida, telangiectasias arboriformes e tendência à ulceração central, todos ausentes neste caso.',
        'Verruga viral (verruga vulgar/plana) ou acantose nigricante — a verruga é mais comum em áreas de trauma, com pontos hemorrágicos puntiformes; a acantose nigricante é aveludada, simétrica e em áreas flexurais, associada à resistência insulínica.'
      ],
      context: 'Mulher de 58 anos, fototipo III, sem exposição solar significativa, apresenta cerca de 15 lesões pápulo-placóides castanhas em tronco, de crescimento lento ao longo de cinco anos, atualmente estáveis, com aspecto "colado", superfície verrucosa e pseudocistos córneos — quadro clássico de ceratose seborreica. A estação testa a capacidade de reconhecer benignidade com segurança, evitar iatrogenia diagnóstica e terapêutica e manejar a ansiedade da paciente, que pressiona ativamente por exérese de todas as lesões.',
      justify: 'As lesões apresentam todas as características semiológicas clássicas da ceratose seborreica: pápulas e placas bem delimitadas, de bordas nítidas e regulares, com o característico aspecto de estarem "coladas" ou sobrepostas à pele (aspecto "stuck-on"), superfície opaca, aveludada a verrucosa, com descamação gordurosa e pseudocistos córneos e aberturas foliculares tipo comedão visíveis à inspeção. Cada lesão é individualmente homogênea em cor, com bordas regulares e sem assimetria, e o conjunto é monótono e repetitivo, sem nenhuma lesão que destoe das demais — a ausência do sinal do patinho feio é um dado de segurança importante. A evolução é lenta e as lesões estão estáveis, ao contrário do padrão de mudança progressiva característico do melanoma. O relato de que uma lesão foi destacada com a unha e recresceu idêntica reforça a natureza epidérmica e benigna. A ceratose seborreica é a neoplasia cutânea benigna mais comum, com prevalência que ultrapassa 80% após os 60 anos, não tem potencial de malignização e não exige tratamento. Sua remoção é indicada apenas por motivo estético, por irritação/sangramento recorrente por atrito ou quando há dúvida diagnóstica real — nenhuma dessas condições justificaria a exérese de todas as 15 lesões nesta paciente. Um único cenário exigiria investigação sistêmica adicional: o sinal de Leser-Trélat, isto é, o surgimento SÚBITO e ERUPTIVO de múltiplas ceratoses seborreicas em curto período, classicamente associado a neoplasia interna, sobretudo adenocarcinomas gastrointestinais; este caso NÃO o preenche, pois as lesões surgiram lentamente ao longo de cinco anos e nenhuma nova surgiu nos últimos meses. ⚠️ A associação do sinal de Leser-Trélat com neoplasia interna é derivada majoritariamente de séries de casos da literatura internacional, com evidência de causalidade limitada. O desfecho correto da estação é, portanto, tranquilização FUNDAMENTADA — após exame de corpo inteiro completo — associada a educação em saúde e seguimento, e não a exérese indiscriminada.',
      expectedAnamnesis: 'Caracterizar o tempo de surgimento das lesões e a velocidade de aparecimento (lento ao longo de anos versus eruptivo) | Investigar mudança de cor, forma, tamanho ou relevo das lesões existentes — critério "E" do ABCDE | Investigar especificamente se alguma lesão destoa das demais em aspecto ou comportamento (sinal do patinho feio) | Investigar sintomas locais: prurido, dor, sangramento, ulceração e irritação por atrito com roupas | Investigar se houve surgimento SÚBITO e explosivo de múltiplas lesões em curto período, para considerar o sinal de Leser-Trélat, e revisar sintomas de neoplasia interna (perda ponderal, alteração do hábito intestinal, sangramento digestivo, disfagia, anemia) | Investigar exposição solar, fototipo e uso de fotoproteção | Investigar antecedente pessoal de câncer de pele ou lesões removidas | Investigar história familiar de câncer de pele, esclarecendo QUAL o tipo (melanoma versus não melanoma), pois o significado prognóstico difere | Investigar imunossupressão e uso de medicações | Investigar o impacto emocional da preocupação: ansiedade, insônia, verificação repetitiva das lesões, prejuízo funcional e expectativa da paciente quanto à conduta',
      expectedPhysical: 'Sinais vitais: dentro da normalidade | Inspeção das lesões sob boa iluminação, aplicando sistematicamente os critérios ABCDE e a regra do patinho feio a cada uma e ao conjunto | Descrição semiológica formal esperada: múltiplas pápulas e placas (lesões elementares) bem delimitadas, de bordas nítidas e regulares, superfície opaca, aveludada a verrucosa, com descamação gordurosa e pseudocistos córneos, coloração castanho-clara a acinzentada individualmente homogênea, com aspecto característico de estarem "coladas" sobre a pele, sem ulceração e sem sangramento | Palpação das lesões, identificando a superfície áspera e a implantação superficial (sensação de lesão sobreposta, destacável) | Exame COMPLETO de toda a superfície cutânea — face, couro cabeludo, pescoço, tronco, membros, palmas, plantas, regiões interdigitais, região ungueal e mucosas — para excluir, com segurança, lesão maligna sincrônica; a tranquilização só é legítima após esse exame | Comparação entre as lesões, verificando a ausência de lesão discrepante | Palpação das cadeias linfonodais cervicais, axilares e inguinais | Palpação abdominal, especialmente pertinente caso houvesse suspeita de sinal de Leser-Trélat | Uso de dermatoscopia, se disponível, buscando os achados típicos da ceratose seborreica',
      expectedExams: [
        { exam: 'Nenhum exame complementar de rotina', justify: 'A ceratose seborreica é diagnóstico eminentemente CLÍNICO. Diante de lesões com características típicas e inequívocas de benignidade, não há indicação de biópsia, exames laboratoriais ou de imagem. Solicitar biópsia "por precaução" de lesões claramente benignas expõe a paciente a procedimento desnecessário, cicatriz, custo e reforço do comportamento ansioso.', expected: 'Não aplicável.' },
        { exam: 'Dermatoscopia', justify: 'Recurso complementar que confirma a benignidade e reforça a tranquilização da paciente, aumentando a segurança diagnóstica sem necessidade de procedimento invasivo.', expected: 'Pseudocistos córneos (estruturas em milia), aberturas tipo comedão, fissuras e cristas com aspecto cerebriforme, borda bem demarcada em "traça"; ausência de rede pigmentar atípica, de véu azul-esbranquiçado e de padrão vascular polimorfo.' },
        { exam: 'Biópsia de lesão isolada', justify: 'Reservada EXCLUSIVAMENTE a lesão individual que apresente características atípicas, crescimento recente, mudança de cor, ulceração ou que destoe do conjunto. NÃO indicada neste caso, em que todas as lesões são típicas e monótonas. Também indicada se houver dúvida diagnóstica real com melanoma ou carcinoma basocelular pigmentado.', expected: 'Não indicada neste caso.' },
        { exam: 'Investigação de neoplasia interna (endoscopia digestiva alta, colonoscopia, hemograma, pesquisa de sangue oculto nas fezes)', justify: 'Indicada APENAS se houvesse surgimento súbito e eruptivo de múltiplas ceratoses seborreicas em curto período (sinal de Leser-Trélat) ou sintomas sistêmicos de alarme — o que NÃO ocorre neste caso, com surgimento lento ao longo de cinco anos. Manter, contudo, o rastreamento de câncer colorretal conforme faixa etária, independentemente das lesões cutâneas. ⚠️ A associação de Leser-Trélat com neoplasia interna baseia-se predominantemente em séries de casos da literatura internacional, com nível de evidência limitado.', expected: 'Não indicada por esta queixa. Rastreamento de câncer colorretal recomendado dos 50 aos 75 anos conforme diretrizes do INCA/MS.' }
      ],
      expectedConduct: 'Farmacológica: nenhum tratamento farmacológico está indicado. NÃO prescrever ceratolíticos, corticoides, antifúngicos ou clareadores. | Não farmacológica / procedimento: conduta expectante é a correta. NÃO indicar exérese cirúrgica das lesões, especialmente não de todas elas — trata-se de conduta desproporcional, com risco de cicatrizes múltiplas, discromias e reforço do comportamento ansioso, sem qualquer benefício oncológico, pois a ceratose seborreica não tem potencial de malignização. Se houver, no futuro, incômodo estético relevante ou irritação/sangramento recorrente por atrito em lesão específica, pode-se oferecer remoção pontual (crioterapia com nitrogênio líquido, curetagem ou eletrocoagulação) por dermatologista, em caráter eletivo e com esclarecimento de que não se trata de conduta oncológica; orientar medidas simples para reduzir o atrito (roupas mais folgadas, ajuste do sutiã). | Encaminhamento: não há indicação de encaminhamento de urgência nem de encaminhamento oncológico. Encaminhamento eletivo à dermatologia é razoável apenas se houver dúvida diagnóstica persistente, desejo de remoção estética ou necessidade de dermatoscopia não disponível na unidade. Considerar apoio em saúde mental (matriciamento, psicologia da atenção básica ou NASF, quando disponível) se a ansiedade for incapacitante ou houver insônia persistente. | Orientações à paciente: explicar de forma clara e fundamentada que as lesões são benignas e comuns, popularmente conhecidas como "verrugas senis" ou "sinais da idade", que aparecem com o envelhecimento e NÃO se transformam em câncer; mostrar concretamente quais características foram avaliadas e por que indicam benignidade, em vez de apenas afirmar "não é nada"; ensinar o ABCDE e o sinal do patinho feio para autoexame mensal; orientar que solicite ajuda de familiar ou use espelho duplo para inspecionar o dorso; orientar fotoproteção como medida geral de prevenção; esclarecer a diferença entre o carcinoma basocelular da irmã (baixa letalidade) e o melanoma, reduzindo a distorção cognitiva. | Seguimento: retorno programado ao menos anual para exame de pele, com acesso facilitado e retorno antecipado caso surja qualquer lesão nova, ou caso alguma lesão mude de cor, tamanho ou forma, ulcere ou sangre espontaneamente; validar que retornar diante de dúvida é conduta correta, e não exagero.',
      expectedCommunication: 'Apresentação: apresentar-se pelo nome e função, confirmar o nome da paciente e explicar o objetivo da consulta | Solicitar permissão antes de examinar a pele do tronco e da região submamária, garantindo privacidade, exposição gradual e respeito ao pudor | Escuta ativa: permitir o relato inicial sem interromper, usar perguntas abertas, nomear e validar explicitamente o medo relacionado ao diagnóstico da irmã em vez de descartá-lo | Explorar diretamente a expectativa da paciente ("o que a senhora esperava que fôssemos fazer hoje?") e o impacto da ansiedade sobre o sono e a rotina | Comunicação do diagnóstico: explicar a benignidade de forma FUNDAMENTADA, descrevendo as características observadas que sustentam a conclusão, e não por simples reasseguramento vazio | Resistir de forma empática à pressão pela exérese de todas as lesões, explicando os riscos do procedimento desnecessário e a ausência de benefício, sem confrontar ou ridicularizar a paciente e sem ceder à conduta desproporcional | Empoderar a paciente com o autoexame e com critérios objetivos de retorno, transformando a vigilância ansiosa em vigilância informada | Verificar a compreensão pedindo que a paciente repita os sinais de alarme e perguntar se restaram dúvidas antes de encerrar',
      criticalErrors: [
        'Indicar exérese cirúrgica de todas as lesões (ou biópsia de múltiplas lesões) cedendo à pressão da paciente, expondo-a a procedimentos desnecessários, cicatrizes e custos sem qualquer benefício oncológico.',
        'Tranquilizar a paciente afirmando benignidade SEM ter examinado toda a superfície cutânea, correndo o risco de deixar passar uma lesão maligna sincrônica.',
        'Diagnosticar erroneamente as lesões como melanoma e encaminhar em caráter oncológico de urgência, gerando iatrogenia psicológica grave em paciente já ansiosa e sobrecarregando a rede.',
        'Ignorar ou minimizar a ansiedade e o sofrimento da paciente ("isso é besteira sua", "não é nada, pode ir embora"), sem explicação fundamentada, resultando em não adesão, peregrinação por outros serviços e busca de procedimentos desnecessários.',
        'Não ensinar critérios objetivos de autoexame e de retorno (ABCDE, sinal do patinho feio, sinais de alarme), deixando a paciente sem instrumentos para distinguir mudança relevante de lesão estável.',
        'Deixar de investigar o padrão de surgimento das lesões (lento versus eruptivo), o que impediria reconhecer o sinal de Leser-Trélat em um cenário em que ele estivesse presente.'
      ]
    },
    instD: {
      title: 'CHECKLIST — MÚLTIPLAS LESÕES PIGMENTADAS EM TRONCO COM ANSIEDADE POR CÂNCER (CERATOSE SEBORREICA)',
      sections: [
        {
          h: 'BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE',
          items: [
            { item: 'Apresentou-se pelo nome e função e confirmou a identificação da paciente', score: 0.5, ref: 'CFM — Código de Ética Médica, 2019' },
            { item: 'Solicitou permissão antes de examinar a pele do tronco e preservou a privacidade e o pudor da paciente', score: 0.5, ref: 'CFM — Código de Ética Médica, 2019; MS — HumanizaSUS, 2013' },
            { item: 'Nomeou e validou explicitamente o medo da paciente relacionado ao câncer de pele da irmã e/ou explorou sua expectativa quanto à consulta', score: 0.5, ref: 'MS — Política Nacional de Humanização, 2013; Método Clínico Centrado na Pessoa — MS, Cadernos de Atenção Básica' }
          ]
        },
        {
          h: 'BLOCO 2 — ANAMNESE',
          items: [
            { item: 'Investigou se as lesões mudaram de cor, tamanho, forma ou relevo (critério "E" — evolução) e se alguma destoa das demais', score: 1.0, ref: 'SBD — Consenso Brasileiro de Câncer da Pele Melanoma, 2023 (ABCDE e sinal do patinho feio)' },
            { item: 'Investigou o padrão de surgimento das lesões — lento ao longo de anos versus súbito/eruptivo (pesquisa do sinal de Leser-Trélat)', score: 0.5, ref: 'SBD — Ceratose Seborreica, 2023. ⚠️ Associação de Leser-Trélat com neoplasia interna baseada em literatura internacional, evidência limitada' },
            { item: 'Investigou sintomas locais das lesões (prurido, sangramento, irritação por atrito) e/ou antecedente pessoal de câncer de pele', score: 0.5, ref: 'MS — Cadernos de Atenção Básica nº 29 — Dermatologia, 2016' },
            { item: 'Investigou o impacto emocional da preocupação (ansiedade, insônia, verificação repetida) e/ou qual foi o tipo de câncer de pele da irmã', score: 0.5, ref: 'MS — Caderno de Atenção Básica nº 34 — Saúde Mental, 2013' }
          ]
        },
        {
          h: 'BLOCO 3 — EXAME FÍSICO',
          items: [
            { item: 'Descreveu as lesões com terminologia dermatológica formal, citando o aspecto "colado" à pele, a superfície verrucosa/aveludada e as bordas bem delimitadas', score: 1.0, ref: 'SBD — Ceratose Seborreica: Diagnóstico Clínico, 2023' },
            { item: 'Examinou TODA a superfície cutânea (corpo inteiro), incluindo couro cabeludo, palmas, plantas, unhas e mucosas, antes de concluir pela benignidade', score: 1.0, ref: 'SBD — Campanha Nacional de Prevenção ao Câncer da Pele, 2023; INCA 2022' },
            { item: 'Aplicou os critérios ABCDE e/ou a regra do patinho feio às lesões, comparando-as entre si', score: 0.5, ref: 'SBD — Consenso Brasileiro de Melanoma, 2023' }
          ]
        },
        {
          h: 'BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
          items: [
            { item: 'Formulou a hipótese diagnóstica de ceratose seborreica (lesão benigna), reconhecendo tratar-se de diagnóstico clínico', score: 1.0, ref: 'SBD — Ceratose Seborreica, 2023; MS — Cadernos de Atenção Básica nº 29, 2016' },
            { item: 'Citou ao menos dois diagnósticos diferenciais pertinentes (melanoma, nevo melanocítico, CBC pigmentado, verruga viral)', score: 0.5, ref: 'SBD — Diagnóstico Diferencial das Lesões Pigmentadas, 2023' },
            { item: 'Justificou a NÃO indicação de biópsia/exames complementares diante de lesões com características típicas de benignidade', score: 0.5, ref: 'SBD — Ceratose Seborreica, 2023; CFM — Recomendação sobre uso racional de procedimentos, 2019' }
          ]
        },
        {
          h: 'BLOCO 5 — CONDUTA E ORIENTAÇÃO AO PACIENTE',
          items: [
            { item: 'Manteve conduta expectante e recusou, de forma empática e fundamentada, a exérese de todas as lesões solicitada pela paciente', score: 1.0, ref: 'SBD — Ceratose Seborreica: indicações de tratamento, 2023; CFM — Código de Ética Médica, 2019 (não maleficência)' },
            { item: 'Explicou a benignidade de forma fundamentada, descrevendo as características avaliadas, e esclareceu que a lesão não se transforma em câncer', score: 0.5, ref: 'INCA — Detecção Precoce do Câncer de Pele, 2022' },
            { item: 'Ensinou o autoexame de pele (ABCDE / sinal do patinho feio), definiu sinais de alarme e estabeleceu retorno programado', score: 0.5, ref: 'INCA — Prevenção e Detecção Precoce do Câncer de Pele, 2022; SBD 2023' }
          ]
        }
      ]
    }
  },

  {
    id: 6,
    title: 'Lesões ásperas na calva e no rosto em pescador aposentado',
    sub: 'UBS — Atenção Primária (município litorâneo)',
    tema: 'Dermatologia',
    topic: 'ceratose actínica e campo de cancerização',
    level: 'moderado',
    cardAccent: '#B07D3A',
    instA: {
      scenario: 'Atenção Primária — UBS de município litorâneo. Consultório, turno matutino. Consulta de demanda espontânea.',
      patient: 'S.R.O., 62 anos, masculino, pescador aposentado, fototipo II, sem comorbidades em acompanhamento regular.',
      complaint: 'Refere "casquinhas ásperas" na careca e no rosto que descamam, saem e voltam, e que às vezes ardem quando pega sol.',
      tasks: [
        'Realize a anamnese dirigida à queixa dermatológica.',
        'Realize o exame físico dermatológico pertinente e descreva as lesões com terminologia semiológica formal.',
        'Identifique a hipótese diagnóstica principal e ao menos dois diagnósticos diferenciais.',
        'Proponha a conduta terapêutica e a investigação adequadas.',
        'Oriente o paciente quanto à prevenção, ao seguimento e aos sinais de alarme.'
      ]
    },
    instB: {
      vitals: {
        PA: '138/84 mmHg',
        FC: '74 bpm',
        FR: '16 irpm',
        Tax: '36,4 °C',
        Peso: '77 kg',
        Altura: '1,75 m',
        IMC: '25,1 kg/m²'
      },
      physicalGeneral: 'Bom estado geral, lúcido e orientado, corado, hidratado, anictérico, acianótico, afebril. Fototipo II, com heliodermatite grave: pele espessada e amarelada, rugas profundas, elastose solar acentuada em face e nuca, lentigos solares múltiplos, leucodermia gutata em antebraços. Calvície androgenética avançada (padrão Hamilton VI), com vértice do couro cabeludo amplamente exposto.',
      physicalSeg: 'PELE (COURO CABELUDO — VÉRTICE E FRONTE, DORSO NASAL, REGIÕES MALARES E PAVILHÕES AURICULARES): lesões descritas no impresso fotográfico entregue ao candidato | LÁBIO INFERIOR: semimucosa ressecada, esbranquiçada e com fissuras superficiais, apagamento do limite cutâneo-mucoso e áreas de descamação — compatível com queilite actínica | PELE (ANTEBRAÇOS E DORSO DAS MÃOS): lentigos solares, púrpura senil, algumas lesões ásperas semelhantes às da face | PELE (TRONCO E MEMBROS INFERIORES — ÁREAS COBERTAS): sem lesões ásperas, sem lesões pigmentadas atípicas | LESÃO SENTINELA (PAVILHÃO AURICULAR ESQUERDO, HÉLICE): descrita separadamente no impresso fotográfico — informar apenas se o candidato examinar as orelhas | CADEIAS LINFONODAIS: cervicais, submandibulares, pré-auriculares e occipitais livres — sem linfonodos palpáveis | APARELHO RESPIRATÓRIO E CARDIOVASCULAR: sem alterações',
      labs: [],
      image: 'FOTODESCRIÇÃO — IMPRESSO ENTREGUE AO CANDIDATO. (A) CAMPO ACTÍNICO — couro cabeludo (vértice e fronte), dorso nasal, regiões malares e pavilhões auriculares: múltiplas lesões (mais de 25, difíceis de contar individualmente), com 3 a 8 mm cada, caracterizadas por máculas e pápulas eritematosas de limites imprecisos, recobertas por escama seca, aderida, esbranquiçada a amarelada, de aspecto áspero. Diversas lesões são MAIS FACILMENTE PERCEBIDAS À PALPAÇÃO do que à inspeção, com textura descrita como lixa fina. Não há ulceração, infiltração, borda perlada, telangiectasias arboriformes ou nódulos nessas lesões. A pele circunjacente apresenta eritema difuso, elastose solar acentuada, tonalidade amarelada e lentigos, configurando dano actínico crônico confluente em toda a área fotoexposta. (B) LESÃO SENTINELA — hélice do pavilhão auricular esquerdo: lesão ÚNICA e distinta das demais, medindo cerca de 13 mm, constituída por pápulo-nódulo eritematoso de base INFILTRADA E ENDURECIDA à palpação, com superfície ceratósica espessa e crosta central aderida, apresentando pequena erosão sob a crosta e sangramento ao mínimo toque. Esta lesão apresenta halo eritematoso e é DOLOROSA à palpação, ao contrário de todas as outras. (C) LÁBIO INFERIOR: semimucosa esbranquiçada, ressecada, com fissuras superficiais e apagamento do limite entre o vermelhão e a pele.',
      note: 'Entregar o impresso de sinais vitais e exame físico geral no início. Entregar a parte (A) da FOTODESCRIÇÃO quando o candidato solicitar examinar as lesões da face/couro cabeludo. Entregar a parte (B) — LESÃO SENTINELA DA ORELHA — SOMENTE se o candidato examinar especificamente os pavilhões auriculares ou solicitar exame de toda a área fotoexposta; NÃO informar espontaneamente. Entregar a parte (C) somente se o candidato examinar os lábios. Ponto-chave da estação: além de reconhecer e tratar o campo de cancerização, o candidato deve IDENTIFICAR a lesão sentinela da orelha, com características distintas (infiltração, endurecimento, dor, sangramento), e indicar BIÓPSIA dela, e não crioterapia. Se o candidato aplicar crioterapia ou 5-fluoruracila na lesão da orelha sem biópsia, ANOTAR como ERRO CRÍTICO. Se o candidato não examinar as orelhas, ANOTAR como ERRO CRÍTICO.',
      patientProfile: 'Sebastião R. O., 62 anos, masculino, pescador aposentado, casado, três filhos. Reside em município litorâneo. Ensino fundamental incompleto. Renda de aposentadoria rural. Sem acompanhamento médico regular.',
      script: [
        { trigger: 'Queixa principal / abertura', speech: 'Doutor, é que na minha careca e no rosto vive nascendo umas casquinhas ásperas. Elas descascam, eu tiro com a unha, aí voltam no mesmo lugar. Já faz tempo isso.' },
        { trigger: 'Tempo de evolução', speech: 'Uns quatro, cinco anos. No começo era uma ou duas, hoje é um montão. Quando eu passo a mão na cabeça sinto tudo cheio de asperezinha, parece uma lixa.' },
        { trigger: 'Sintomas — arde, coça, dói', speech: 'Elas ardem um pouco quando eu fico no sol, e às vezes coça. Doer não dói, não... só uma aqui na orelha que tá incomodando de um tempo pra cá.' },
        { trigger: 'Sobre a lesão da orelha (se perguntado especificamente)', speech: 'Essa da orelha é diferente das outras, doutor. Ela é mais durinha, dói quando eu esbarro e sangra quando eu tiro a casquinha. Faz uns quatro meses que ela apareceu e não sara de jeito nenhum. As outras não sangram assim.' },
        { trigger: 'Exposição solar / ocupação', speech: 'Eu fui pescador quarenta anos, doutor. Saía de madrugada e voltava de tarde, no mar, sem sombra nenhuma. E o sol no mar bate em dobro, reflete na água.' },
        { trigger: 'Fotoproteção', speech: 'Boné eu usava às vezes, mas o vento levava. Protetor solar eu nunca usei, nem sabia direito pra que servia. E hoje em dia eu acho caro.' },
        { trigger: 'Antecedentes pessoais', speech: 'Nunca tive doença séria. Não tenho pressão alta que eu saiba, nem diabetes. Não faço acompanhamento em lugar nenhum. Eu bebo umas cervejas no fim de semana e fumei até os 40, depois parei.' },
        { trigger: 'Lesões de pele prévias', speech: 'Nunca tirei nada da pele não, doutor. Nunca fui num médico de pele na vida.' },
        { trigger: 'História familiar', speech: 'De câncer de pele na família eu não sei de ninguém não.' },
        { trigger: 'Tratamentos já tentados', speech: 'Eu passei óleo de amêndoas e uma pomada de hidratante que a minha mulher comprou. Amolece um pouco a casquinha, mas ela volta tudo igual.' },
        { trigger: 'Pergunta ativa (após demonstrar suspeita)', speech: 'Doutor, isso aqui é câncer? Todas elas são? Eu vou ter que tirar tudo isso da cabeça?' },
        { trigger: 'Pergunta ativa (ao ouvir a conduta)', speech: 'Esse protetor solar eu tenho que comprar? Porque é caro, doutor, e eu vivo de aposentadoria. Tem outro jeito de eu me proteger?' }
      ],
      hiddenInfo: 'Existe uma LESÃO SENTINELA no pavilhão auricular esquerdo, com características distintas das demais: infiltrada, endurecida, dolorosa, que sangra ao toque e não cicatriza há cerca de 4 meses — só revelar se o candidato examinar especificamente as orelhas ou perguntar se alguma lesão é diferente das outras, dói, sangra ou não cicatriza | Queilite actínica em lábio inferior — só revelar se o candidato examinar os lábios ou perguntar sobre ressecamento/descamação labial | Ex-tabagista (parou aos 40 anos) — só revelar se perguntado sobre hábitos de vida | Barreira financeira ao fotoprotetor, considerado caro para a renda de aposentadoria — só revelar se o candidato perguntar sobre condições para adquirir protetor solar ou abordar a viabilidade da orientação',
      actorBehavior: 'Simples, cordial e falante, com sotaque e vocabulário regional. Trata as lesões como consequência natural do trabalho ("é do sol, isso é normal de quem vive no mar"). Colaborativo, responde ao que for perguntado, mas NÃO menciona espontaneamente a lesão da orelha — só a relata se questionado sobre alguma lesão diferente, dolorosa, sangrante ou se o candidato examinar as orelhas. Fica genuinamente assustado ao ouvir que pode haver câncer e pergunta se todas as lesões são câncer. Preocupa-se de forma concreta com o custo do protetor solar e demonstra alívio se o candidato oferecer alternativas viáveis (chapéu de aba larga, camisa de manga longa, evitar horários de pico, sombra). Se o candidato der orientação genérica sem considerar a renda, responder evasivamente ("vou ver se dá pra comprar, doutor").'
    },
    instC: {
      diagnosis: 'Ceratoses actínicas múltiplas com campo de cancerização em couro cabeludo e face, associadas a queilite actínica em lábio inferior, em paciente com heliodermatite grave. Presença de LESÃO SENTINELA em pavilhão auricular esquerdo com sinais de progressão para carcinoma espinocelular (CEC) — lesão infiltrada, endurecida, dolorosa, sangrante e não cicatrizada há 4 meses.',
      differentials: [
        'Carcinoma espinocelular (CEC) invasivo — é a hipótese que se impõe para a lesão sentinela do pavilhão auricular; os sinais de alarme de progressão da ceratose actínica para CEC são infiltração/endurecimento da base, dor, sangramento, ulceração, crescimento rápido, diâmetro maior que 1 cm e refratariedade ao tratamento tópico — todos presentes nessa lesão específica, o que a torna prioridade diagnóstica sobre o campo actínico.',
        'Carcinoma basocelular superficial — pode se apresentar como placa eritematodescamativa em área fotoexposta, mas costuma exibir borda perlada e telangiectasias arboriformes, ausentes nas lesões do campo actínico deste paciente.',
        'Ceratose seborreica — lesão benigna que também descama, porém tem aspecto "colado" à pele, bordas bem delimitadas e pseudocistos córneos, e não apresenta o eritema de base nem a textura de lixa fina característica da ceratose actínica.',
        'Dermatite seborreica ou psoríase do couro cabeludo — cursam com eritema e descamação, porém a descamação é mais untuosa (seborreica) ou em placas prateadas bem delimitadas (psoríase), acometem também áreas não fotoexpostas e não apresentam a distribuição estritamente restrita às áreas de exposição solar cumulativa.'
      ],
      context: 'Homem de 62 anos, fototipo II, pescador por 40 anos com exposição solar ocupacional extrema e amplificada pela reflexão na água, sem qualquer fotoproteção, apresenta mais de 25 lesões eritematodescamativas ásperas restritas às áreas fotoexpostas, configurando campo de cancerização, além de queilite actínica. Entre elas, destaca-se uma lesão sentinela no pavilhão auricular com características clínicas de carcinoma espinocelular. O caso exige duas condutas simultâneas e distintas: tratamento do campo e biópsia da lesão suspeita.',
      justify: 'As lesões do couro cabeludo e da face são típicas de ceratose actínica: máculas e pápulas eritematosas de limites imprecisos, recobertas por escama seca e aderida, restritas às áreas fotoexpostas, frequentemente mais perceptíveis à PALPAÇÃO do que à inspeção — daí a importância semiológica de palpar sistematicamente a área, e não apenas olhar. O acometimento difuso e confluente, com mais de 25 lesões sobre pele com elastose solar acentuada, caracteriza o campo de cancerização: uma área de dano actínico crônico em que existem alterações genéticas subclínicas disseminadas, com múltiplas lesões visíveis e um número ainda maior de lesões infraclínicas, o que impõe tratamento do CAMPO e não apenas de lesões isoladas. A ceratose actínica é lesão pré-maligna, com risco individual anual de transformação em CEC estimado entre 0,025% e 16% por lesão, sendo o risco cumulativo substancial em pacientes com múltiplas lesões e dano actínico grave. A queilite actínica é o equivalente da ceratose actínica no lábio e apresenta risco de progressão maior que o das lesões cutâneas, exigindo vigilância específica. O elemento decisivo do caso, entretanto, é a lesão do pavilhão auricular: sua base infiltrada e endurecida, a dor à palpação, o sangramento ao mínimo toque, o diâmetro de 13 mm, a evolução de quatro meses sem cicatrização e o fato de destoar de todas as outras lesões constituem o conjunto clássico de sinais de progressão para CEC invasivo. O pavilhão auricular é, ademais, uma das localizações de maior risco de CEC agressivo e metastático. Essa lesão exige BIÓPSIA e não pode ser tratada empiricamente com crioterapia ou tópicos, que destruiriam a lesão sem diagnóstico e sem avaliação de invasão em profundidade. A ausência de linfonodomegalia cervical e pré-auricular é favorável, mas não dispensa a investigação.',
      expectedAnamnesis: 'Caracterizar o tempo de evolução das lesões e o padrão recidivante (descamam, saem e retornam no mesmo local) | Investigar sintomas: ardência, prurido, dor e sangramento | Perguntar ATIVAMENTE se alguma lesão é DIFERENTE das demais — se dói, sangra, endureceu, cresceu ou não cicatriza — pergunta-chave que revela a lesão sentinela | Investigar exposição solar ocupacional cumulativa, incluindo o efeito de superfícies reflexivas (água, areia) | Investigar uso de fotoproteção ao longo da vida e as barreiras atuais ao seu uso, incluindo custo e viabilidade | Investigar fototipo e história de queimaduras solares | Investigar antecedente pessoal de câncer de pele ou lesões previamente removidas | Investigar história familiar de câncer de pele | Investigar imunossupressão (transplante, HIV, imunossupressores), exposição a arsênico e radioterapia prévia | Investigar hábitos de vida, especialmente tabagismo e etilismo, relevantes para o risco de CEC labial | Investigar tratamentos tópicos já utilizados sobre as lesões | Investigar condições socioeconômicas e viabilidade de adesão às medidas de fotoproteção',
      expectedPhysical: 'Sinais vitais: sem alterações relevantes ao caso; aferição de PA pertinente em paciente sem acompanhamento prévio | Inspeção sob boa iluminação de toda a área fotoexposta, com atenção ao couro cabeludo em paciente calvo | PALPAÇÃO SISTEMÁTICA do couro cabeludo, da fronte, do nariz, das regiões malares e dos pavilhões auriculares — manobra essencial, pois muitas ceratoses actínicas são detectadas pela textura de lixa antes de serem visíveis | Descrição semiológica formal esperada para o campo: múltiplas máculas e pápulas eritematosas de limites imprecisos, recobertas por escama seca e aderida, ásperas ao tato, sobre pele com elastose solar, distribuídas exclusivamente em áreas fotoexpostas | Identificação e descrição SEPARADA da lesão sentinela: pápulo-nódulo único de 13 mm em hélice auricular esquerda, com base infiltrada e endurecida à palpação, superfície ceratósica, crosta central com erosão subjacente, doloroso e sangrante ao toque — reconhecendo que destoa do padrão das demais | Palpação da base de cada lesão suspeita para avaliar infiltração e endurecimento | Exame OBRIGATÓRIO dos pavilhões auriculares (anterior e posterior) e da região retroauricular | Exame do lábio inferior e da semimucosa, pesquisando queilite actínica (ressecamento, apagamento do limite cutâneo-mucoso, fissuras, áreas esbranquiçadas ou endurecidas) | Exame do restante da superfície cutânea, incluindo áreas cobertas, para excluir outras lesões | Palpação das cadeias linfonodais cervicais, pré-auriculares, submandibulares e occipitais — drenagem do pavilhão auricular, obrigatória diante de suspeita de CEC',
      expectedExams: [
        { exam: 'Biópsia da lesão do pavilhão auricular esquerdo (incisional ou excisional, conforme viabilidade)', justify: 'Lesão com sinais clínicos de progressão para carcinoma espinocelular — base infiltrada e endurecida, dor, sangramento, diâmetro > 1 cm e ausência de cicatrização por 4 meses. A biópsia é obrigatória e prioritária, pois define o diagnóstico, o grau de diferenciação e a profundidade de invasão, parâmetros que determinam o tratamento e o risco de metástase. Tratar empiricamente com crioterapia ou tópico destruiria a lesão sem diagnóstico.', expected: 'Carcinoma espinocelular invasivo, com descrição do grau de diferenciação, espessura, invasão perineural e status de margens.' },
        { exam: 'Diagnóstico clínico das ceratoses actínicas do campo, sem necessidade de biópsia individual', justify: 'A ceratose actínica é diagnóstico clínico, estabelecido pela inspeção e pela palpação (textura de lixa) em áreas fotoexpostas; biopsiar rotineiramente as dezenas de lesões do campo é inviável e desnecessário. A biópsia fica reservada às lesões com sinais de alarme para CEC ou que não respondem ao tratamento adequado.', expected: 'Não aplicável ao campo; reservada às lesões atípicas.' },
        { exam: 'Dermatoscopia', justify: 'Auxilia a diferenciar ceratose actínica de CEC inicial, carcinoma basocelular superficial e ceratose seborreica, e a selecionar as lesões que exigem biópsia.', expected: 'Padrão em morango (pseudorrede eritematosa com aberturas foliculares preenchidas por ceratina) nas ceratoses actínicas; vasos glomerulares/pontilhados e massas ceratósicas na lesão suspeita de CEC.' },
        { exam: 'Avaliação da queilite actínica em lábio inferior, com biópsia se houver área endurecida, ulcerada ou leucoplásica persistente', justify: 'A queilite actínica é lesão potencialmente maligna com risco de progressão para CEC de lábio superior ao das ceratoses actínicas cutâneas, e o CEC labial apresenta maior potencial metastático.', expected: 'Queilite actínica sem sinais de invasão neste caso; manter vigilância e tratar.' },
        { exam: 'Exames de imagem e estadiamento (ultrassonografia de cadeias linfonodais cervicais, tomografia)', justify: 'NÃO indicados na avaliação inicial da atenção primária. Reservados, sob condução do serviço especializado, aos CEC de alto risco confirmados: tumores > 2 cm, invasão profunda, invasão perineural, localização de alto risco (orelha, lábio), recidivados ou com linfonodo suspeito. ⚠️ A estratificação de risco do CEC segue sistemas de classificação de origem estrangeira (AJCC/BWH), adotados pelas diretrizes brasileiras da SBD/SBCD.', expected: 'A definir após o resultado histopatológico.' }
      ],
      expectedConduct: 'Farmacológica: tratamento do CAMPO de cancerização, e não apenas de lesões isoladas — 5-fluoruracila creme a 5% aplicado nas áreas acometidas, tipicamente 1 a 2 vezes ao dia por 2 a 4 semanas, com orientação expressa de que ocorrerá reação inflamatória intensa (eritema, erosão, crostas) como parte esperada do efeito terapêutico, o que é a principal causa de abandono; alternativas incluem imiquimode creme a 5% e diclofenaco gel a 3%. Para a queilite actínica, indicar tratamento específico e fotoproteção labial com batom/protetor labial com FPS. NÃO aplicar tópicos nem crioterapia na lesão do pavilhão auricular antes da biópsia. ⚠️ A terapia fotodinâmica é opção consolidada para campo de cancerização, porém com disponibilidade restrita na rede pública brasileira. | Não farmacológica / procedimento: crioterapia com nitrogênio líquido para lesões actínicas isoladas e bem definidas, procedimento realizável na atenção primária ou ambulatorial quando há profissional capacitado e insumo disponível; para a lesão do pavilhão auricular, a conduta é BIÓPSIA seguida de exérese cirúrgica com margens adequadas em serviço especializado. | Encaminhamento: encaminhamento PRIORITÁRIO à dermatologia/cirurgia dermatológica para a lesão do pavilhão auricular, com descrição no formulário das características de suspeição (infiltração, dor, sangramento, 4 meses sem cicatrização, localização de alto risco); encaminhamento para o tratamento do campo se não houver disponibilidade de crioterapia ou tópicos na unidade; após confirmação de CEC, aplicar os prazos da Lei nº 12.732/2012. | Orientações ao paciente: explicar em linguagem acessível que as lesões da careca e do rosto NÃO são câncer, mas são lesões pré-cancerosas — "machucados de sol" que podem, com o tempo, virar câncer, e por isso precisam ser tratadas; explicar separadamente que a lesão da orelha é diferente e precisa ser retirada e examinada; orientar fotoproteção de forma VIÁVEL e adaptada à renda, priorizando barreiras físicas de baixo custo — chapéu de aba larga (mais eficaz que boné, que não protege orelhas e nuca), camisa de manga longa, evitar exposição entre 10h e 16h, buscar sombra — e informar que o protetor solar pode estar disponível na farmácia da unidade conforme a política do município; ensinar autoexame da pele e como reconhecer lesão que muda de comportamento; orientar exame regular dos lábios. | Seguimento: retorno em 4 a 8 semanas para avaliar a resposta ao tratamento do campo e a adesão, dado o desconforto esperado; retorno garantido com o resultado da biópsia; seguimento dermatológico regular e vitalício, com exame de corpo inteiro pelo menos anual, pelo risco elevado de novas lesões e de câncer de pele; sinais de alarme para retorno imediato: lesão que endurece, dói, sangra, ulcera, cresce rapidamente ou não cicatriza em mais de 4 semanas.',
      expectedCommunication: 'Apresentação: apresentar-se pelo nome e função, confirmar a identificação do paciente e explicar o objetivo da consulta | Solicitar permissão antes de examinar o couro cabeludo, a face, as orelhas e os lábios | Escuta ativa: permitir o relato inicial sem interromper, usar perguntas abertas antes das fechadas, adaptar o vocabulário ao letramento do paciente, sem tecnicismos | Comunicação do diagnóstico: diferenciar CLARAMENTE as duas situações — explicar que as lesões do campo são pré-cancerosas e tratáveis, e que a lesão da orelha é diferente e exige investigação com retirada de um pedaço para exame — evitando tanto o alarme generalizado quanto a minimização | Responder diretamente à pergunta "todas são câncer?" com informação honesta e proporcional | Abordar ativamente a barreira financeira ao fotoprotetor, construindo alternativas viáveis com o paciente em vez de prescrever medidas inexequíveis | Explicar antecipadamente a reação inflamatória esperada do tratamento tópico, para prevenir o abandono | Verificar a compreensão pedindo que o paciente repita o plano e os sinais de alarme, e perguntar se restaram dúvidas',
      criticalErrors: [
        'Deixar de examinar os pavilhões auriculares e, portanto, não identificar a lesão sentinela com características de carcinoma espinocelular, perdendo o diagnóstico da lesão mais grave da estação.',
        'Aplicar crioterapia, 5-fluoruracila ou imiquimode na lesão do pavilhão auricular sem biópsia prévia, destruindo lesão suspeita de CEC invasivo sem diagnóstico histopatológico e sem avaliação da profundidade de invasão.',
        'Tratar apenas lesões isoladas com crioterapia sem abordar o campo de cancerização, deixando dezenas de lesões clínicas e infraclínicas sem tratamento em paciente com dano actínico grave.',
        'Atribuir as lesões a envelhecimento normal, "pele de pescador" ou dermatite seborreica, prescrevendo apenas hidratante e liberando o paciente sem tratamento nem seguimento.',
        'Não examinar o lábio inferior, deixando de identificar a queilite actínica, lesão com risco de progressão para CEC labial de maior potencial metastático.',
        'Prescrever fotoproteção sem considerar a barreira financeira e sem oferecer alternativas de barreira física viáveis, resultando em não adesão à principal medida preventiva.'
      ]
    },
    instD: {
      title: 'CHECKLIST — LESÕES ÁSPERAS EM ÁREA FOTOEXPOSTA (CERATOSE ACTÍNICA E CAMPO DE CANCERIZAÇÃO)',
      sections: [
        {
          h: 'BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE',
          items: [
            { item: 'Apresentou-se pelo nome e função e confirmou a identificação do paciente', score: 0.5, ref: 'CFM — Código de Ética Médica, 2019' },
            { item: 'Solicitou permissão antes de examinar o couro cabeludo, a face, as orelhas e os lábios', score: 0.5, ref: 'CFM — Código de Ética Médica, 2019 (autonomia e consentimento)' },
            { item: 'Verificou a compreensão do paciente e/ou perguntou se restaram dúvidas antes de encerrar a consulta', score: 0.5, ref: 'MS — Política Nacional de Humanização (HumanizaSUS), 2013' }
          ]
        },
        {
          h: 'BLOCO 2 — ANAMNESE',
          items: [
            { item: 'Perguntou ativamente se alguma lesão é DIFERENTE das demais (dói, sangra, endureceu, cresceu ou não cicatriza), identificando a lesão sentinela', score: 1.0, ref: 'SBD — Ceratose Actínica e Progressão para CEC, 2023; INCA 2022' },
            { item: 'Investigou exposição solar ocupacional cumulativa e uso de fotoproteção ao longo da vida', score: 0.5, ref: 'INCA — Prevenção do Câncer de Pele, 2022; MS — Cadernos de Atenção Básica nº 29' },
            { item: 'Investigou antecedente pessoal de câncer de pele e/ou fatores de risco adicionais (imunossupressão, tabagismo, tratamentos prévios)', score: 0.5, ref: 'SBD — Consenso Brasileiro de Câncer da Pele Não Melanoma, 2023' },
            { item: 'Investigou as condições socioeconômicas e a viabilidade de adesão às medidas de fotoproteção (barreira ao custo do protetor)', score: 0.5, ref: 'MS — Política Nacional de Atenção Básica (PNAB), 2017' }
          ]
        },
        {
          h: 'BLOCO 3 — EXAME FÍSICO',
          items: [
            { item: 'PALPOU as áreas fotoexpostas (couro cabeludo/face) para detectar a textura áspera característica, além da inspeção', score: 1.0, ref: 'SBD — Ceratose Actínica: diagnóstico clínico, 2023' },
            { item: 'Examinou os pavilhões auriculares e identificou a lesão sentinela infiltrada, endurecida, dolorosa e sangrante', score: 1.0, ref: 'SBD — Consenso Brasileiro de Câncer da Pele Não Melanoma, 2023; INCA 2022' },
            { item: 'Examinou o lábio inferior, identificando a queilite actínica, e/ou palpou as cadeias linfonodais cervicais e pré-auriculares', score: 0.5, ref: 'SBD — Queilite Actínica, 2023' }
          ]
        },
        {
          h: 'BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
          items: [
            { item: 'Formulou a hipótese de ceratoses actínicas com campo de cancerização E, separadamente, de CEC na lesão do pavilhão auricular', score: 1.0, ref: 'SBD — Consenso Brasileiro de Câncer da Pele Não Melanoma, 2023; INCA 2022' },
            { item: 'Citou ao menos dois diagnósticos diferenciais pertinentes (CEC, CBC superficial, ceratose seborreica, dermatite seborreica/psoríase)', score: 0.5, ref: 'SBD — Diagnóstico Diferencial das Lesões Eritematodescamativas Fotoexpostas, 2023' },
            { item: 'Indicou BIÓPSIA da lesão do pavilhão auricular, contraindicando explicitamente crioterapia ou tópico sobre ela antes do diagnóstico', score: 0.5, ref: 'SBD/SBCD — Consenso Brasileiro de Câncer da Pele Não Melanoma, 2023' }
          ]
        },
        {
          h: 'BLOCO 5 — CONDUTA E ORIENTAÇÃO AO PACIENTE',
          items: [
            { item: 'Propôs tratamento do CAMPO de cancerização (5-fluoruracila 5% tópico, imiquimode ou crioterapia das lesões), e não apenas de lesão isolada', score: 1.0, ref: 'SBD — Tratamento do Campo de Cancerização, 2023; MS — Cadernos de Atenção Básica nº 29, 2016' },
            { item: 'Encaminhou com prioridade à dermatologia/cirurgia dermatológica para a lesão do pavilhão auricular, descrevendo a suspeita clínica', score: 0.5, ref: 'MS — Protocolos de Encaminhamento AB → Atenção Especializada, Dermatologia, 2016; Lei nº 12.732/2012' },
            { item: 'Orientou fotoproteção de forma VIÁVEL à realidade do paciente (chapéu de aba larga, manga longa, evitar sol 10h–16h, sombra) e/ou sinais de alarme e retorno', score: 0.5, ref: 'INCA — Prevenção e Detecção Precoce do Câncer de Pele, 2022; SBD — Campanha Nacional de Prevenção ao Câncer da Pele, 2023' }
          ]
        }
      ]
    }
  }

]
export default orl;
