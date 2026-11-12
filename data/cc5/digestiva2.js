// Clínica Cirúrgica — estações de 5 minutos — CIRURGIA DIGESTIVA (parte 2)
const digestiva5b = [
  // CASO 8 — CÂNCER DE VESÍCULA E VIAS BILIARES
  {
    id: 'CD-8',
    title: 'Resultado da biópsia da vesícula retirada há 15 dias',
    sub: 'Ambulatório — Retorno pós-operatório',
    tema: 'Cirurgia Digestiva',
    topic: 'Câncer de vesícula biliar (achado incidental) e de vias biliares',
    level: 'difícil',
    duracao: '5 minutos',
    cardAccent: '#2E7D32',
    instA: {
      scenario: 'Ambulatório de cirurgia geral. Retorno de pós-operatório.',
      patient: 'Dona Conceição, 68 anos, sexo feminino, aposentada. Colecistectomia videolaparoscópica há 15 dias por colelitíase sintomática (cálculo de 3,5 cm), sem intercorrências.',
      complaint: 'Retorna para retirada de pontos e para receber o resultado do exame anatomopatológico.',
      tasks: [
        'Interprete o laudo anatomopatológico e comunique o resultado à paciente.',
        'Indique os próximos passos diagnósticos e terapêuticos.',
        'Cite os fatores de risco para câncer de vesícula e diferencie da apresentação do colangiocarcinoma.'
      ]
    },
    instB: {
      vitals: { PA: '134/80 mmHg', FC: '74 bpm', FR: '14 irpm', Tax: '36,2 °C', Peso: '62 kg' },
      physicalGeneral: 'Bom estado geral, anictérica, corada.',
      physicalSeg: 'ABDOME: incisões de trocarte cicatrizadas, sem sinais de infecção; flácido, indolor, sem massas ou visceromegalias | LINFONODOS: sem linfonodomegalia supraclavicular ou periumbilical',
      labs: [],
      image: 'LAUDO ANATOMOPATOLÓGICO (entregar no início): vesícula biliar com colecistite crônica e colelitíase; ADENOCARCINOMA moderadamente diferenciado em fundo vesicular, invadindo o tecido conjuntivo perimuscular, sem ultrapassar a serosa (lado peritoneal) — pT2a; margem do ducto cístico livre; linfonodo cístico sem neoplasia (0/1).',
      note: 'Entregar o laudo no início. A paciente veio sozinha esperando “só tirar os pontos”. Avaliar se o candidato utiliza técnica de comunicação de más notícias (SPIKES): ambiente, percepção, convite, conhecimento, emoções, estratégia. Se o candidato indicar “apenas acompanhamento”, ANOTAR como erro crítico.',
      patientProfile: 'Conceição, 68 anos, viúva, 3 filhos, mora com uma filha. Tinha “pedra na vesícula” há mais de 10 anos e adiou a cirurgia várias vezes. Está aliviada porque “a dor passou”.',
      script: [
        { trigger: 'Abertura', speech: 'Bom dia, doutor! Tô ótima, a dor sumiu. Vim só tirar esses pontinhos e pegar o resultado.' },
        { trigger: 'O que sabe sobre o exame', speech: 'O médico disse que ia mandar a vesícula pra análise, mas é só rotina, né?' },
        { trigger: 'Ao receber a notícia', speech: '(silêncio) ... Câncer? Mas ele não tirou tudo? Eu achei que tinha acabado...' },
        { trigger: 'Pergunta ativa', speech: 'Vou ter que operar de novo? Eu vou morrer?' }
      ],
      hiddenInfo: 'Adiou a cirurgia por 10 anos por medo — revela com culpa se o candidato acolher | Gostaria que a filha estivesse presente — só revela se perguntada se quer chamar alguém',
      actorBehavior: 'Inicialmente alegre e tranquila. Ao ouvir a notícia, fica em silêncio, depois chorosa e com culpa. Acalma-se se o candidato acolher, fizer pausas e explicar o plano.'
    },
    instC: {
      diagnosis: 'Adenocarcinoma de vesícula biliar incidental (diagnosticado no anatomopatológico de colecistectomia), estádio pT2a (lado peritoneal) — indicação de estadiamento e re-ressecção radical.',
      differentials: [
        'Colangiocarcinoma peri-hilar (tumor de Klatskin) — icterícia obstrutiva indolor com dilatação de vias intra-hepáticas e vesícula NÃO distendida; diagnóstico por imagem (colangio-RM/TC).',
        'Colangiocarcinoma distal / tumor periampular — icterícia indolor com vesícula palpável (Courvoisier-Terrier).',
        'Câncer de vesícula avançado sintomático — dor, massa em HCD, icterícia, perda de peso: geralmente irressecável.',
        'Pólipo de vesícula ≥ 10 mm / vesícula em porcelana — lesões precursoras com indicação de colecistectomia profilática.'
      ],
      context: 'O câncer de vesícula é a neoplasia mais comum das vias biliares; até metade dos casos é descoberta incidentalmente após colecistectomia (0,2–3% das peças). Tem alta incidência no Chile e em mulheres idosas com colelitíase de longa data.',
      justify: 'Laudo com adenocarcinoma invadindo tecido perimuscular (pT2). Em tumores T1b ou mais, há indicação de reabordagem, pois há risco de doença residual no leito hepático e nos linfonodos; T1a com margens livres: colecistectomia simples é suficiente.',
      expectedAnamnesis: 'Percepção da paciente sobre o exame | Desejo de informação e de acompanhante | Sintomas atuais (dor, icterícia, perda de peso)',
      expectedPhysical: 'Exame abdominal, pesquisa de linfonodos (supraclavicular — Virchow; periumbilical — Irmã Maria José)',
      expectedExams: [
        { exam: 'TC de tórax e abdome (ou RM de abdome) com contraste', justify: 'Estadiamento: doença residual, metástases hepáticas, linfonodos, carcinomatose.', expected: '—' },
        { exam: 'CA 19-9 e CEA', justify: 'Marcadores basais para seguimento.', expected: '—' },
        { exam: 'Revisão da lâmina por patologista (status de margem cística, T)', justify: 'Define a extensão da re-ressecção.', expected: '—' }
      ],
      expectedConduct: 'Discussão em equipe multidisciplinar | Re-ressecção radical em centro de referência em hepatobiliar (idealmente 4–8 semanas após a colecistectomia): ressecção hepática do leito vesicular (segmentos IVb/V) + linfadenectomia do ligamento hepatoduodenal ± ressecção da via biliar se margem cística comprometida; laparoscopia diagnóstica antes (risco de carcinomatose) | Ressecção rotineira dos sítios de trocarte NÃO é recomendada | Quimioterapia adjuvante (capecitabina — BILCAP) após ressecção | Fatores de risco a citar: colelitíase de longa data e cálculos > 3 cm, vesícula em porcelana, pólipos ≥ 10 mm, anomalia da junção pancreatobiliar, colangite esclerosante primária, infecção crônica por Salmonella, obesidade, sexo feminino, idade avançada',
      expectedCommunication: 'SPIKES: ambiente reservado, perguntar o que a paciente sabe, perguntar quanto quer saber e se deseja a presença da filha, comunicar com linguagem simples e sem jargões, pausas, acolher emoções e a culpa, apresentar o plano e manter esperança realista | Não dizer que “não há mais nada a fazer”',
      criticalErrors: [
        'Comunicar o diagnóstico de forma abrupta, sem acolhimento',
        'Indicar apenas acompanhamento clínico para tumor pT2',
        'Não solicitar estadiamento antes da re-ressecção',
        'Afirmar que a cirurgia já foi curativa'
      ]
    },
    instD: {
      title: 'CHECKLIST — CÂNCER DE VESÍCULA INCIDENTAL',
      sections: [
        { h: 'COMUNICAÇÃO DE MÁS NOTÍCIAS', items: [
          { item: 'Perguntou o que a paciente sabe e quanto deseja saber; ofereceu presença de familiar', score: 1, ref: 'Baile WF — Protocolo SPIKES, Oncologist 2000' },
          { item: 'Comunicou o diagnóstico com linguagem clara, com aviso prévio e pausas', score: 1.5, ref: 'SPIKES; INCA — Comunicação de Notícias Difíceis, 2010' },
          { item: 'Acolheu as emoções (culpa, medo) e manteve esperança realista', score: 1, ref: 'SPIKES' }
        ]},
        { h: 'INTERPRETAÇÃO E CONDUTA', items: [
          { item: 'Interpretou adenocarcinoma pT2 como indicação de re-ressecção (≥ T1b)', score: 1.5, ref: 'NCCN Biliary Tract Cancers, 2024' },
          { item: 'Solicitou estadiamento (TC/RM tórax/abdome, CA 19-9)', score: 1.5, ref: 'NCCN 2024' },
          { item: 'Indicou ressecção hepática do leito (IVb/V) + linfadenectomia hilar, em centro de referência', score: 1.5, ref: 'NCCN 2024; Sabiston 21ª ed.' },
          { item: 'Citou quimioterapia adjuvante (capecitabina)', score: 0.5, ref: 'Primrose et al., BILCAP, Lancet Oncol 2019' }
        ]},
        { h: 'CONHECIMENTO', items: [
          { item: 'Citou ≥ 3 fatores de risco (cálculo > 3 cm, porcelana, pólipo ≥ 10 mm, junção pancreatobiliar anômala, CEP)', score: 1, ref: 'NCCN 2024' },
          { item: 'Diferenciou do colangiocarcinoma (icterícia obstrutiva indolor; Klatskin x distal/Courvoisier)', score: 0.5, ref: 'Sabiston, 21ª ed.' }
        ]}
      ]
    }
  },

  // CASO 9 — DIVERTICULITE AGUDA
  {
    id: 'CD-9',
    title: 'Dor no lado esquerdo baixo da barriga com febre há 3 dias',
    sub: 'PS — Pronto-Socorro',
    tema: 'Cirurgia Digestiva',
    topic: 'Diverticulite aguda complicada (Hinchey Ib)',
    level: 'moderado',
    duracao: '5 minutos',
    cardAccent: '#2E7D32',
    instA: {
      scenario: 'Pronto-socorro, 16h.',
      patient: 'Gilberto, 62 anos, sexo masculino, comerciante.',
      complaint: 'Dor em fossa ilíaca esquerda há 3 dias, contínua, com febre e intestino preso.',
      tasks: [
        'Colete dados dirigidos e solicite o exame de imagem adequado.',
        'Interprete a tomografia, formule o diagnóstico e classifique (Hinchey).',
        'Proponha a conduta imediata e o seguimento.'
      ]
    },
    instB: {
      vitals: { PA: '136/84 mmHg', FC: '98 bpm', FR: '18 irpm', Tax: '38,4 °C', SpO2: '97%', Peso: '86 kg' },
      physicalGeneral: 'Bom estado geral, hidratado, corado, anictérico.',
      physicalSeg: 'ABDOME: discretamente distendido, ruídos hidroaéreos presentes, dor à palpação em fossa ilíaca esquerda com defesa e descompressão dolorosa LOCALIZADA; plastrão palpável em FIE; restante do abdome flácido e indolor | TOQUE RETAL: sem massas, sem sangue',
      labs: [
        { test: 'Leucócitos', val: '17.200/mm³ (8% bastões)', ref: '4.000–11.000/mm³', alt: true },
        { test: 'PCR', val: '186 mg/L', ref: '< 5 mg/L', alt: true },
        { test: 'Creatinina', val: '1,0 mg/dL', ref: '0,7–1,3 mg/dL', alt: false },
        { test: 'Urina tipo I', val: 'Normal', ref: '—', alt: false }
      ],
      image: 'TC DE ABDOME E PELVE COM CONTRASTE (entregar se solicitada): múltiplos divertículos em cólon sigmoide; espessamento parietal do sigmoide com densificação da gordura pericólica; COLEÇÃO PERICÓLICA de 5,0 x 4,2 cm, com nível hidroaéreo, adjacente ao sigmoide; sem pneumoperitônio difuso; sem líquido livre em cavidade.',
      note: 'Entregar sinais vitais no início. Exame físico, laboratório e TC SOMENTE se solicitados. Se o candidato pedir colonoscopia agora, informar “está contraindicada na fase aguda” e ANOTAR. Se indicar cirurgia de urgência (Hartmann), questionar: “o paciente está estável — há outra opção?”.',
      patientProfile: 'Gilberto, 62 anos, comerciante, obeso, sedentário, dieta pobre em fibras. Teve 1 episódio de “inflamação no intestino” há 2 anos, tratado com antibiótico oral em casa. Nunca fez colonoscopia.',
      script: [
        { trigger: 'Queixa principal', speech: 'Doutor, tô com uma dor aqui embaixo do lado esquerdo faz três dias, só piora. E tô com febre.' },
        { trigger: 'Hábito intestinal', speech: 'O intestino travou um pouco, tô evacuando pouco. Sem sangue.' },
        { trigger: 'Episódio prévio', speech: 'Há uns dois anos tive uma coisa parecida, mais fraca. Tomei antibiótico em casa e passou.' },
        { trigger: 'Sintomas urinários', speech: 'Xixi normal, sem ardência, sem ar na urina.' },
        { trigger: 'Pergunta ativa', speech: 'Vou ter que operar e ficar com bolsinha?' }
      ],
      hiddenInfo: 'Episódio prévio de diverticulite há 2 anos — só revela se perguntado sobre crises anteriores | Nunca fez colonoscopia — revela se perguntado',
      actorBehavior: 'Com dor moderada, colaborativo, muito preocupado com a possibilidade de colostomia.'
    },
    instC: {
      diagnosis: 'Diverticulite aguda complicada do cólon sigmoide com abscesso pericólico de 5 cm — Hinchey Ib (Hinchey modificada) / WSES 1b–2a, em paciente estável.',
      differentials: [
        'Câncer de cólon perfurado/bloqueado — pode simular diverticulite: colonoscopia obrigatória após a fase aguda.',
        'Colite isquêmica — dor e sangramento, idosos com fatores de risco cardiovascular.',
        'Doença inflamatória intestinal — evolução mais crônica, diarreia.',
        'Afecções urológicas (litíase, ITU) / ginecológicas em mulheres — afastadas pela clínica e pela TC.'
      ],
      context: 'A diverticulite acomete principalmente o sigmoide em países ocidentais. Cerca de 15–20% dos casos são complicados (abscesso, perfuração, fístula, obstrução). Abscessos > 3–4 cm devem ser drenados por via percutânea quando acessíveis.',
      justify: 'Dor em FIE, febre, leucocitose e PCR elevada; TC com divertículos, inflamação pericólica e abscesso pericólico de 5 cm sem peritonite difusa = Hinchey Ib (abscesso pericólico).',
      expectedAnamnesis: 'Localização e evolução da dor | Febre | Alteração do hábito intestinal, sangramento | Sintomas urinários (pneumatúria/fecalúria — fístula) | Episódios prévios | Colonoscopia prévia | Imunossupressão',
      expectedPhysical: 'Palpação abdominal com pesquisa de irritação peritoneal localizada vs difusa | Massa/plastrão | Toque retal',
      expectedExams: [
        { exam: 'TC de abdome e pelve com contraste', justify: 'Padrão-ouro para diagnóstico e classificação.', expected: 'Abscesso pericólico de 5 cm.' },
        { exam: 'Hemograma, PCR, função renal, urina I', justify: 'Gravidade e diferenciais.', expected: 'Leucocitose, PCR elevada.' },
        { exam: 'Colonoscopia 6–8 semanas após a resolução', justify: 'Excluir neoplasia, sobretudo após diverticulite complicada.', expected: '—' }
      ],
      expectedConduct: 'Internação, analgesia, hidratação, dieta zero/líquida conforme tolerância | Antibiótico EV com cobertura para Gram-negativos e anaeróbios (ex.: ceftriaxona + metronidazol, ou amoxicilina-clavulanato, ou piperacilina-tazobactam) | Abscesso ≥ 3–4 cm: DRENAGEM PERCUTÂNEA guiada por TC/US | Cirurgia de urgência se falha do tratamento, peritonite difusa (Hinchey III/IV) ou instabilidade | Após resolução: colonoscopia em 6–8 semanas; discutir sigmoidectomia eletiva (diverticulite complicada com abscesso e episódio recorrente) | Orientações: dieta rica em fibras, atividade física, perda de peso, cessar tabagismo',
      expectedCommunication: 'Explicar o diagnóstico, que neste momento não há necessidade de colostomia, e a necessidade de colonoscopia futura',
      criticalErrors: [
        'Solicitar colonoscopia na fase aguda',
        'Tratar ambulatorialmente com antibiótico oral um paciente com abscesso de 5 cm',
        'Indicar cirurgia de urgência (Hartmann) em paciente estável com abscesso drenável',
        'Não programar colonoscopia após a resolução'
      ]
    },
    instD: {
      title: 'CHECKLIST — DIVERTICULITE AGUDA COMPLICADA',
      sections: [
        { h: 'AVALIAÇÃO', items: [
          { item: 'Caracterizou a dor, febre, hábito intestinal, sintomas urinários e episódios prévios', score: 1, ref: 'ASCRS Clinical Practice Guidelines — Diverticulitis, 2020' },
          { item: 'Pesquisou irritação peritoneal localizada x difusa', score: 1, ref: 'WSES Guidelines on Acute Left Colonic Diverticulitis, 2020' },
          { item: 'Solicitou TC de abdome e pelve com contraste', score: 1.5, ref: 'ASCRS 2020; WSES 2020' }
        ]},
        { h: 'DIAGNÓSTICO', items: [
          { item: 'Diagnosticou diverticulite complicada com abscesso pericólico — Hinchey Ib', score: 1.5, ref: 'Classificação de Hinchey modificada (Wasvary)' }
        ]},
        { h: 'CONDUTA', items: [
          { item: 'Internação e antibiótico EV com cobertura para Gram-negativos e anaeróbios', score: 1.5, ref: 'WSES 2020' },
          { item: 'Indicou drenagem percutânea do abscesso (> 3–4 cm)', score: 1.5, ref: 'WSES 2020; ASCRS 2020' },
          { item: 'Citou indicações de cirurgia de urgência (peritonite difusa, falha, instabilidade)', score: 0.5, ref: 'WSES 2020' },
          { item: 'Programou colonoscopia em 6–8 semanas e discutiu sigmoidectomia eletiva', score: 1.5, ref: 'ASCRS 2020' }
        ]}
      ]
    }
  },

  // CASO 10 — APENDICITE AGUDA
  {
    id: 'CD-10',
    title: 'Dor que começou no umbigo e foi para o lado direito',
    sub: 'PS — Pronto-Socorro',
    tema: 'Cirurgia Digestiva',
    topic: 'Apendicite aguda',
    level: 'fácil',
    duracao: '5 minutos',
    cardAccent: '#2E7D32',
    instA: {
      scenario: 'Pronto-socorro, 22h.',
      patient: 'Felipe, 19 anos, sexo masculino, estudante.',
      complaint: 'Dor abdominal há 18 horas, que começou ao redor do umbigo e passou para o lado direito, com enjoo e falta de apetite.',
      tasks: [
        'Realize o exame físico abdominal dirigido, verbalizando os sinais pesquisados (achados mediante solicitação).',
        'Calcule o escore de Alvarado e formule o diagnóstico.',
        'Defina a conduta.'
      ]
    },
    instB: {
      vitals: { PA: '120/74 mmHg', FC: '96 bpm', FR: '18 irpm', Tax: '37,9 °C', Peso: '70 kg' },
      physicalGeneral: 'Bom estado geral, hidratado, fácies de dor, caminha encurvado.',
      physicalSeg: 'ABDOME: plano, ruídos hidroaéreos presentes, dor à palpação em fossa ilíaca direita, máxima no ponto de McBurney; SINAL DE BLUMBERG POSITIVO; SINAL DE ROVSING POSITIVO (dor em FID à compressão da FIE); sinal do psoas positivo; sinal do obturador negativo; sem massas | GIORDANO: negativo | GENITAIS: testículos sem alterações',
      labs: [
        { test: 'Leucócitos', val: '15.800/mm³ (neutrófilos 85%, 6% bastões)', ref: '4.000–11.000/mm³', alt: true },
        { test: 'PCR', val: '48 mg/L', ref: '< 5 mg/L', alt: true },
        { test: 'Urina tipo I', val: 'Normal', ref: '—', alt: false }
      ],
      image: 'ULTRASSONOGRAFIA (entregar somente se solicitada): apêndice cecal não compressível, com diâmetro de 9 mm, densificação da gordura periapendicular; sem coleções.',
      note: 'Entregar sinais vitais no início. Exame físico SOMENTE se o candidato verbalizar as manobras (McBurney, Blumberg, Rovsing, psoas/obturador). Exames laboratoriais se solicitados. O exame de imagem não é obrigatório neste caso (Alvarado alto em homem jovem) — não penalizar se solicitado.',
      patientProfile: 'Felipe, 19 anos, estudante universitário, saudável, sem cirurgias prévias.',
      script: [
        { trigger: 'Queixa principal', speech: 'Começou ontem à noite uma dor em volta do umbigo, meio difusa. Hoje a dor foi pro lado direito, embaixo, e tá mais forte.' },
        { trigger: 'Apetite / náusea', speech: 'Não tenho fome nenhuma, e tô enjoado. Vomitei uma vez.' },
        { trigger: 'Febre', speech: 'Tô me sentindo quente, meio febril.' },
        { trigger: 'Hábito intestinal / urinário', speech: 'Intestino normal, urina normal.' },
        { trigger: 'Pergunta ativa', speech: 'Não dá pra tomar um remédio e ir embora? Amanhã tenho prova.' }
      ],
      hiddenInfo: 'Tem prova amanhã e quer ir embora — revela na pergunta ativa | Piora da dor ao caminhar e com solavancos do carro — só revela se perguntado sobre fatores de piora',
      actorBehavior: 'Com dor, mas tenta minimizar porque quer ir embora para a prova. Aceita a cirurgia se bem explicada.'
    },
    instC: {
      diagnosis: 'Apendicite aguda (não complicada, provável fase flegmonosa), Alvarado 10.',
      differentials: [
        'Linfadenite mesentérica — jovens, após quadro viral; sem irritação peritoneal franca.',
        'Gastroenterite — diarreia e vômitos precedem a dor; dor difusa.',
        'Litíase ureteral direita / pielonefrite — dor lombar em cólica, Giordano positivo, hematúria/piúria (urina normal).',
        'Torção testicular / doença de Crohn ileal — afastadas pelo exame e história.'
      ],
      context: 'Apendicite aguda é a causa mais comum de abdome agudo cirúrgico, com pico entre 10 e 30 anos. A migração da dor periumbilical para FID (dor visceral → somática) é o achado clínico mais característico.',
      justify: 'Escore de Alvarado (MANTRELS): Migração da dor (1) + Anorexia (1) + Náusea/vômito (1) + Tenderness/dor em FID (2) + Rebound/descompressão dolorosa (1) + Elevação de temperatura ≥ 37,3 °C (1) + Leucocitose > 10.000 (2) + Shift/desvio à esquerda (1) = 10. Escore ≥ 7 = alta probabilidade → cirurgia.',
      expectedAnamnesis: 'Cronologia e migração da dor | Anorexia, náuseas, vômitos | Febre | Sintomas urinários e intestinais',
      expectedPhysical: 'Ponto de McBurney | Blumberg | Rovsing | Psoas e obturador | Giordano | Exame testicular',
      expectedExams: [
        { exam: 'Hemograma e PCR', justify: 'Compõem o escore e auxiliam no diagnóstico.', expected: 'Leucocitose com desvio.' },
        { exam: 'Urina tipo I', justify: 'Afastar ITU/litíase.', expected: 'Normal.' },
        { exam: 'USG ou TC', justify: 'Úteis em dúvida diagnóstica, mulheres, idosos e obesos; dispensáveis com Alvarado alto em homem jovem.', expected: 'Apêndice > 6 mm não compressível.' }
      ],
      expectedConduct: 'Jejum, hidratação venosa, analgesia (não mascara o diagnóstico), antiemético | Antibioticoprofilaxia pré-operatória (ex.: cefazolina + metronidazol ou cefoxitina, dose única em apendicite não complicada; manter antibiótico no pós-operatório apenas se complicada/perfurada) | APENDICECTOMIA, preferencialmente videolaparoscópica | Tratamento não operatório com antibiótico é opção apenas em casos selecionados (não complicados, com TC), com risco de recorrência de ~30–40% em 5 anos | Orientar o paciente sobre a necessidade da cirurgia (a prova pode ser remarcada)',
      expectedCommunication: 'Explicar o diagnóstico e os riscos de adiar (perfuração, peritonite) | Oferecer atestado / declaração para a faculdade',
      criticalErrors: [
        'Liberar o paciente com analgésico/antiespasmódico',
        'Não pesquisar sinais de irritação peritoneal',
        'Não indicar apendicectomia com Alvarado ≥ 7',
        'Atrasar a cirurgia aguardando exame de imagem desnecessário'
      ]
    },
    instD: {
      title: 'CHECKLIST — APENDICITE AGUDA',
      sections: [
        { h: 'EXAME FÍSICO', items: [
          { item: 'Pesquisou dor no ponto de McBurney e sinal de Blumberg', score: 1.5, ref: 'WSES Jerusalem Guidelines — Acute Appendicitis, 2020' },
          { item: 'Pesquisou Rovsing, psoas e/ou obturador', score: 1, ref: 'Sabiston, 21ª ed.' },
          { item: 'Pesquisou Giordano e/ou examinou genitais (diferenciais)', score: 0.5, ref: 'Sabiston, 21ª ed.' }
        ]},
        { h: 'DIAGNÓSTICO', items: [
          { item: 'Calculou o escore de Alvarado corretamente (10)', score: 2, ref: 'Alvarado A, Ann Emerg Med 1986' },
          { item: 'Diagnosticou apendicite aguda', score: 1.5, ref: 'WSES 2020' }
        ]},
        { h: 'CONDUTA', items: [
          { item: 'Jejum, hidratação e analgesia', score: 0.5, ref: 'WSES 2020' },
          { item: 'Antibioticoprofilaxia pré-operatória', score: 1, ref: 'WSES 2020' },
          { item: 'Indicou apendicectomia (preferencialmente laparoscópica)', score: 2 , ref: 'WSES 2020' }
        ]}
      ]
    }
  },

  // CASO 11 — CIRURGIA BARIÁTRICA
  {
    id: 'CD-11',
    title: 'Mulher com obesidade e diabetes que quer operar o estômago',
    sub: 'Ambulatório — Cirurgia Bariátrica e Metabólica',
    tema: 'Cirurgia Digestiva',
    topic: 'Cirurgia bariátrica — indicação e preparo',
    level: 'moderado',
    duracao: '5 minutos',
    cardAccent: '#2E7D32',
    instA: {
      scenario: 'Ambulatório de cirurgia bariátrica de hospital público. Primeira consulta.',
      patient: 'Patrícia, 38 anos, sexo feminino, auxiliar administrativa.',
      complaint: 'Deseja fazer cirurgia bariátrica. Tem obesidade desde a adolescência e diabetes há 4 anos.',
      tasks: [
        'Verifique se a paciente tem indicação de cirurgia bariátrica, coletando os dados necessários.',
        'Cite a avaliação pré-operatória necessária e as contraindicações a pesquisar.',
        'Indique a técnica mais adequada e oriente os cuidados pós-operatórios de longo prazo.'
      ]
    },
    instB: {
      vitals: { PA: '146/92 mmHg', FC: '84 bpm', FR: '16 irpm', Peso: '112 kg', Altura: '1,64 m', IMC: '41,6 kg/m²', 'Circ. abdominal': '124 cm' },
      physicalGeneral: 'Bom estado geral, obesidade grau III, acantose nigricans em região cervical e axilas.',
      physicalSeg: 'APARELHO RESPIRATÓRIO E CARDIOVASCULAR: sem alterações | ABDOME: globoso, sem hérnias, indolor | MEMBROS: edema 1+/4+ em tornozelos',
      labs: [
        { test: 'HbA1c', val: '8,6%', ref: '< 5,7%', alt: true },
        { test: 'Glicemia de jejum', val: '178 mg/dL', ref: '< 100 mg/dL', alt: true },
        { test: 'Triglicerídeos / HDL', val: '260 / 34 mg/dL', ref: '< 150 / > 50', alt: true },
        { test: 'TSH', val: '2,1 mUI/L', ref: '0,4–4,0', alt: false }
      ],
      image: '',
      note: 'Entregar sinais vitais (com IMC) e exames no início. Responder às perguntas conforme o roteiro. A paciente NÃO tem contraindicações: sem uso de álcool/drogas, sem transtorno psiquiátrico descompensado, entende o tratamento.',
      patientProfile: 'Patrícia, 38 anos, auxiliar administrativa, casada, 1 filho de 10 anos. Tentou diversas dietas, academia, sibutramina, e usa liraglutida há 1 ano sem sucesso sustentado. Hipertensa (losartana 50 mg), diabética (metformina 850 mg 2x/dia + glicazida), ronca muito e acorda cansada. Tem azia frequente. Não fuma, não bebe. Gostaria de ter outro filho.',
      script: [
        { trigger: 'Queixa / motivação', speech: 'Doutor, eu quero fazer a cirurgia. Já tentei de tudo, emagreço e engordo de novo. E agora o diabetes não tá controlando.' },
        { trigger: 'Tratamentos prévios', speech: 'Já fiz dieta com nutricionista, academia, tomei sibutramina e agora tô na liraglutida há um ano. Perco uns quilos e volto a ganhar.' },
        { trigger: 'Comorbidades', speech: 'Tenho pressão alta e diabetes. Meu marido diz que eu ronco muito e paro de respirar dormindo.' },
        { trigger: 'Refluxo', speech: 'Tenho muita azia, quase todo dia.' },
        { trigger: 'Álcool / drogas / saúde mental', speech: 'Não bebo, não fumo. Já tive ansiedade, mas tô bem, faço terapia.' },
        { trigger: 'Pergunta ativa', speech: 'Qual cirurgia é melhor pra mim? E posso engravidar depois?' }
      ],
      hiddenInfo: 'Desejo de nova gestação — só revela se perguntada sobre planos reprodutivos ou na pergunta ativa | Roncos e apneias observadas pelo marido — só revela se perguntada sobre sono | Azia diária — só revela se perguntada sobre sintomas digestivos',
      actorBehavior: 'Motivada, um pouco ansiosa, bem informada pela internet. Quer saber “qual a melhor cirurgia”.'
    },
    instC: {
      diagnosis: 'Obesidade grau III (IMC 41,6 kg/m²) com diabetes tipo 2 descontrolado, hipertensão, provável apneia obstrutiva do sono e DRGE, com falha do tratamento clínico — com indicação de cirurgia bariátrica/metabólica; técnica preferencial: bypass gástrico em Y de Roux.',
      differentials: [
        'Obesidade secundária a hipotireoidismo — afastada (TSH normal).',
        'Síndrome de Cushing — considerar se estrias violáceas, fraqueza proximal, HAS refratária; rastrear se suspeita.',
        'Obesidade associada a medicamentos (antipsicóticos, corticoides) — não presente.'
      ],
      context: 'A cirurgia bariátrica é o tratamento mais eficaz e duradouro para obesidade grave, com remissão do DM2 em grande parte dos pacientes e redução de mortalidade cardiovascular. A indicação exige avaliação multidisciplinar.',
      justify: 'Critérios clássicos (CFM/SBCBM): IMC ≥ 40 kg/m² independentemente de comorbidades, ou IMC ≥ 35 com comorbidades graves; falha de tratamento clínico; idade entre 18 e 65 anos (exceções avaliadas); ausência de contraindicações. Diretrizes internacionais (ASMBS/IFSO 2022) ampliam para IMC ≥ 35 independentemente de comorbidades e consideram IMC 30–34,9 com doença metabólica. A paciente preenche critérios com folga (IMC 41,6 + DM2, HAS, SAOS).',
      expectedAnamnesis: 'Histórico de peso e tratamentos prévios | Comorbidades (DM2, HAS, SAOS, DRGE, dislipidemia, osteoartrose) | Uso de álcool e drogas | Transtornos psiquiátricos e alimentares (compulsão) | Planos reprodutivos | Tabagismo',
      expectedPhysical: 'Peso, altura, IMC, circunferência abdominal | Sinais de hipercortisolismo | Acantose',
      expectedExams: [
        { exam: 'Avaliação multidisciplinar: endocrinologia, nutrição, psicologia/psiquiatria', justify: 'Exigida para indicação e preparo.', expected: '—' },
        { exam: 'Endoscopia digestiva alta com pesquisa de H. pylori', justify: 'Avaliar esofagite, hérnia hiatal, Barrett e lesões gástricas (o estômago excluído no bypass não poderá ser avaliado depois).', expected: '—' },
        { exam: 'USG de abdome', justify: 'Colelitíase e esteatose hepática.', expected: '—' },
        { exam: 'Polissonografia, avaliação cardiológica (ECG, ecocardiograma conforme risco), espirometria se indicado', justify: 'Risco cirúrgico e SAOS (CPAP pré-operatório).', expected: '—' },
        { exam: 'Laboratório: hemograma, ferro/ferritina, B12, ácido fólico, vitamina D, cálcio, PTH, função renal e hepática, perfil lipídico, beta-hCG', justify: 'Corrigir deficiências antes da cirurgia.', expected: '—' }
      ],
      expectedConduct: 'Técnica: BYPASS GÁSTRICO EM Y DE ROUX laparoscópico — preferido por DM2 descontrolado e DRGE (a gastrectomia vertical/sleeve pode piorar o refluxo) | Contraindicações a pesquisar: dependência ativa de álcool/drogas, transtorno psiquiátrico grave descompensado, incapacidade de compreender o tratamento e aderir ao seguimento, risco cirúrgico proibitivo, doença endócrina causal não tratada | Pós-operatório de longo prazo: suplementação por toda a vida — polivitamínico, vitamina B12, ferro, cálcio (citrato) + vitamina D; dieta em fases (líquida → pastosa → sólida), proteína adequada, comer devagar, evitar doces (síndrome de dumping) | Seguimento multidisciplinar e exames periódicos | Gestação: evitar por 12–18 meses após a cirurgia (contracepção não oral eficaz, pois a absorção de anticoncepcional oral pode ser reduzida); após esse período, gestação é segura com acompanhamento | Atividade física regular',
      expectedCommunication: 'Explicar benefícios e riscos, sem prometer resultados mágicos | Responder sobre gestação | Reforçar a necessidade de acompanhamento por toda a vida',
      criticalErrors: [
        'Indicar a cirurgia sem avaliação multidisciplinar (incluindo psicológica/psiquiátrica)',
        'Não pesquisar uso de álcool/drogas e transtornos psiquiátricos',
        'Não orientar suplementação vitamínica permanente',
        'Não orientar adiamento da gestação por 12–18 meses',
        'Indicar sleeve sem considerar a DRGE sintomática'
      ]
    },
    instD: {
      title: 'CHECKLIST — CIRURGIA BARIÁTRICA',
      sections: [
        { h: 'INDICAÇÃO', items: [
          { item: 'Calculou/considerou o IMC e citou critérios de indicação (IMC ≥ 40 ou ≥ 35 + comorbidades; falha clínica)', score: 1.5, ref: 'CFM Res. 2.131/2015; ASMBS/IFSO 2022' },
          { item: 'Pesquisou comorbidades (DM2, HAS, SAOS, DRGE) e tratamentos prévios', score: 1, ref: 'SBCBM' },
          { item: 'Pesquisou contraindicações (álcool/drogas, transtorno psiquiátrico descompensado)', score: 1.5, ref: 'CFM Res. 2.131/2015' }
        ]},
        { h: 'PRÉ-OPERATÓRIO', items: [
          { item: 'Citou avaliação multidisciplinar (endocrino, nutrição, psicologia/psiquiatria)', score: 1, ref: 'CFM Res. 2.131/2015' },
          { item: 'Solicitou EDA (com H. pylori), USG abdome e avaliação cardiopulmonar/polissonografia', score: 1, ref: 'ASMBS Perioperative Guidelines, 2019' }
        ]},
        { h: 'TÉCNICA E PÓS-OPERATÓRIO', items: [
          { item: 'Indicou bypass gástrico em Y de Roux, justificando pelo DM2 e pela DRGE', score: 1.5, ref: 'ASMBS/IFSO 2022; SBCBM' },
          { item: 'Orientou suplementação vitamínica permanente (polivitamínico, B12, ferro, cálcio + vitamina D)', score: 1, ref: 'ASMBS Micronutrient Guidelines, 2019' },
          { item: 'Orientou evitar gestação por 12–18 meses e contracepção adequada', score: 1, ref: 'ACOG; ASMBS 2019' },
          { item: 'Comunicou riscos/benefícios e necessidade de seguimento por toda a vida', score: 0.5, ref: 'CFM — Código de Ética Médica, 2019' }
        ]}
      ]
    }
  },

  // CASO 12 — CÂNCER DE CÓLON
  {
    id: 'CD-12',
    title: 'Anemia e cansaço em homem de 61 anos',
    sub: 'Ambulatório — Coloproctologia',
    tema: 'Cirurgia Digestiva',
    topic: 'Câncer de cólon direito',
    level: 'moderado',
    duracao: '5 minutos',
    cardAccent: '#2E7D32',
    instA: {
      scenario: 'Ambulatório de coloproctologia. Paciente encaminhado pela UBS com resultado de colonoscopia.',
      patient: 'Osvaldo, 61 anos, sexo masculino, contador.',
      complaint: 'Cansaço progressivo há 4 meses; o clínico encontrou anemia e solicitou colonoscopia.',
      tasks: [
        'Interprete a colonoscopia e o anatomopatológico.',
        'Solicite os exames de estadiamento.',
        'Proponha o tratamento cirúrgico e o seguimento, comunicando o diagnóstico ao paciente.'
      ]
    },
    instB: {
      vitals: { PA: '124/76 mmHg', FC: '92 bpm', FR: '16 irpm', Tax: '36,4 °C', Peso: '71 kg (há 6 meses: 76 kg)' },
      physicalGeneral: 'Hipocorado 2+/4+, hidratado, bom estado geral.',
      physicalSeg: 'ABDOME: flácido, massa endurecida e pouco móvel de cerca de 5 cm em flanco/fossa ilíaca direita, indolor; fígado não palpável | TOQUE RETAL: sem massas, fezes escuras normais | LINFONODOS: sem linfonodomegalias',
      labs: [
        { test: 'Hemoglobina / VCM', val: '8,9 g/dL / 71 fL', ref: '13–17 g/dL / 80–100 fL', alt: true },
        { test: 'Ferritina', val: '9 ng/mL', ref: '30–400 ng/mL', alt: true },
        { test: 'Pesquisa de sangue oculto nas fezes', val: 'Positiva', ref: 'Negativa', alt: true }
      ],
      image: 'COLONOSCOPIA (entregar no início): lesão vegetante, ulcerada, friável, ocupando 3/4 da circunferência do cólon ascendente, a 5 cm da válvula ileocecal, transponível; restante do cólon até o ceco sem outras lesões; preparo adequado. ANATOMOPATOLÓGICO: ADENOCARCINOMA moderadamente diferenciado.',
      note: 'Entregar colonoscopia e anatomopatológico no início. Se o candidato solicitar TC de tórax, abdome e pelve e CEA, informar: “TC sem metástases a distância; espessamento parietal do cólon ascendente com linfonodos pericólicos de até 1,2 cm; CEA 8,4 ng/mL (VR < 5)”.',
      patientProfile: 'Osvaldo, 61 anos, contador, casado, 2 filhos (35 e 32 anos). Sedentário, come muita carne vermelha e embutidos, ex-tabagista. Nunca fez rastreamento. Irmão teve “pólipos” no intestino.',
      script: [
        { trigger: 'Abertura', speech: 'Doutor, o médico do posto disse que eu tô com anemia e pediu esse exame. Deu alguma coisa?' },
        { trigger: 'Sintomas', speech: 'Tô muito cansado, sem ar pra subir escada. Emagreci uns cinco quilos.' },
        { trigger: 'Hábito intestinal', speech: 'O intestino tá normal. Nunca vi sangue.' },
        { trigger: 'Família', speech: 'Meu irmão tirou uns pólipos do intestino ano passado.' },
        { trigger: 'Pergunta ativa', speech: 'É câncer? Tem cura? Meus filhos também correm risco?' }
      ],
      hiddenInfo: 'Irmão com pólipos colônicos — só revela se perguntado sobre história familiar | Nunca fez colonoscopia ou pesquisa de sangue oculto de rastreamento — revela se perguntado',
      actorBehavior: 'Apreensivo, quer respostas diretas. Fica preocupado com os filhos.'
    },
    instC: {
      diagnosis: 'Adenocarcinoma de cólon ascendente, com anemia ferropriva e perda de peso, estadiamento clínico cT3 N+ M0 (estádio III provável) — indicação de colectomia direita oncológica.',
      differentials: [
        'Outras causas de anemia ferropriva no homem (úlcera péptica, angiodisplasia, doença celíaca) — o tumor explica o quadro; a EDA pode ser feita se não houver lesão colônica.',
        'Linfoma de cólon / tumor carcinoide — definidos pelo anatomopatológico.',
        'Abscesso/plastrão apendicular ou doença de Crohn ileocecal — afastados pela colonoscopia e biópsia.'
      ],
      context: 'O câncer colorretal é o 2º–3º mais incidente no Brasil. Tumores de cólon direito costumam manifestar-se por anemia ferropriva oculta, massa palpável e perda de peso; os de cólon esquerdo, por alteração do hábito intestinal e obstrução.',
      justify: 'Anemia ferropriva com sangue oculto positivo em homem de 61 anos + colonoscopia com lesão vegetante em cólon ascendente + biópsia de adenocarcinoma.',
      expectedAnamnesis: 'Sintomas (anemia, perda de peso, alteração do hábito, sangramento, dor) | História familiar de CCR/pólipos | Rastreamento prévio | Comorbidades',
      expectedPhysical: 'Palpação abdominal (massa, hepatomegalia) | Toque retal | Linfonodos',
      expectedExams: [
        { exam: 'TC de tórax, abdome e pelve com contraste', justify: 'Estadiamento a distância (fígado e pulmão são os principais sítios).', expected: 'Sem metástases; linfonodos pericólicos suspeitos.' },
        { exam: 'CEA (antígeno carcinoembrionário)', justify: 'Prognóstico e seguimento pós-operatório.', expected: '8,4 ng/mL.' },
        { exam: 'Colonoscopia completa', justify: 'Excluir lesões sincrônicas (3–5%).', expected: 'Já realizada — sem outras lesões.' },
        { exam: 'Hemograma, função renal, avaliação de risco cirúrgico', justify: 'Preparo.', expected: '—' }
      ],
      expectedConduct: 'Colectomia direita (hemicolectomia direita) oncológica, preferencialmente videolaparoscópica, com ligadura vascular na origem e linfadenectomia (≥ 12 linfonodos), anastomose ileotransversa | Correção da anemia: ferro endovenoso no pré-operatório (programa de patient blood management) | Quimioterapia adjuvante se estádio III (pN+): FOLFOX ou CAPOX (3–6 meses) | Seguimento: CEA a cada 3–6 meses, TC anual por 3–5 anos, colonoscopia em 1 ano | Familiares de 1º grau: colonoscopia a partir dos 40 anos ou 10 anos antes da idade do diagnóstico do familiar | Pesquisar instabilidade de microssatélites (MMR/MSI) no tumor (síndrome de Lynch)',
      expectedCommunication: 'Comunicar o diagnóstico com empatia (SPIKES) | Explicar que há tratamento com intenção curativa | Orientar rastreamento dos filhos',
      criticalErrors: [
        'Tratar apenas a anemia com ferro sem abordar o tumor',
        'Indicar cirurgia sem estadiamento (TC de tórax/abdome/pelve e CEA)',
        'Indicar ressecção local/endoscópica para adenocarcinoma invasivo volumoso',
        'Não orientar rastreamento dos familiares de 1º grau'
      ]
    },
    instD: {
      title: 'CHECKLIST — CÂNCER DE CÓLON DIREITO',
      sections: [
        { h: 'DIAGNÓSTICO E ESTADIAMENTO', items: [
          { item: 'Interpretou colonoscopia e biópsia como adenocarcinoma de cólon ascendente', score: 1.5, ref: 'NCCN Colon Cancer, 2024' },
          { item: 'Correlacionou com anemia ferropriva/sangue oculto (apresentação típica do cólon direito)', score: 0.5, ref: 'Sabiston, 21ª ed.' },
          { item: 'Solicitou TC de tórax, abdome e pelve', score: 1.5, ref: 'NCCN 2024' },
          { item: 'Solicitou CEA', score: 1, ref: 'NCCN 2024' }
        ]},
        { h: 'TRATAMENTO', items: [
          { item: 'Indicou colectomia direita oncológica com linfadenectomia (≥ 12 linfonodos)', score: 2, ref: 'NCCN 2024; ASCRS Colon Cancer Guidelines, 2022' },
          { item: 'Citou quimioterapia adjuvante no estádio III (FOLFOX/CAPOX)', score: 1, ref: 'NCCN 2024; IDEA collaboration, NEJM 2018' },
          { item: 'Citou correção da anemia (ferro EV) no pré-operatório', score: 0.5, ref: 'NATA/ERAS Guidelines' }
        ]},
        { h: 'COMUNICAÇÃO E SEGUIMENTO', items: [
          { item: 'Comunicou o diagnóstico com empatia e explicou a intenção curativa', score: 1, ref: 'Protocolo SPIKES' },
          { item: 'Orientou colonoscopia dos familiares de 1º grau (a partir dos 40 anos)', score: 1, ref: 'US Multi-Society Task Force, 2017' }
        ]}
      ]
    }
  },

  // CASO 13 — CÂNCER DE PÂNCREAS
  {
    id: 'CD-13',
    title: 'Pele amarela e coceira sem dor em idoso que emagreceu',
    sub: 'Enfermaria — Cirurgia Geral',
    tema: 'Cirurgia Digestiva',
    topic: 'Adenocarcinoma de cabeça de pâncreas',
    level: 'difícil',
    duracao: '5 minutos',
    cardAccent: '#2E7D32',
    instA: {
      scenario: 'Enfermaria de cirurgia geral. Paciente internado para investigação.',
      patient: 'Seu Joaquim, 67 anos, sexo masculino, aposentado.',
      complaint: 'Olhos e pele amarelados há 3 semanas, coceira no corpo, urina escura, fezes claras e emagrecimento de 8 kg em 2 meses.',
      tasks: [
        'Realize anamnese e exame físico dirigidos (achados mediante solicitação), identificando o sinal semiológico relevante.',
        'Formule a hipótese diagnóstica e solicite o exame de imagem adequado.',
        'Interprete o laudo, avalie a ressecabilidade e defina a conduta.'
      ]
    },
    instB: {
      vitals: { PA: '128/78 mmHg', FC: '78 bpm', FR: '16 irpm', Tax: '36,5 °C', Peso: '64 kg (há 2 meses: 72 kg)' },
      physicalGeneral: 'Ictérico 3+/4+, emagrecido, escoriações de coçadura em tronco e membros, afebril.',
      physicalSeg: 'ABDOME: flácido, indolor; VESÍCULA BILIAR PALPÁVEL, distendida e INDOLOR em hipocôndrio direito (sinal de Courvoisier-Terrier); fígado palpável a 2 cm do rebordo costal; sem ascite | LINFONODOS: sem linfonodo supraclavicular esquerdo palpável; sem nódulo periumbilical',
      labs: [
        { test: 'Bilirrubina total / direta', val: '14,2 / 12,1 mg/dL', ref: '< 1,2 / < 0,3 mg/dL', alt: true },
        { test: 'Fosfatase alcalina / GGT', val: '780 / 920 U/L', ref: '< 120 / < 50 U/L', alt: true },
        { test: 'AST / ALT', val: '88 / 102 U/L', ref: '< 40 U/L', alt: true },
        { test: 'CA 19-9', val: '410 U/mL', ref: '< 37 U/mL', alt: true },
        { test: 'Glicemia de jejum', val: '168 mg/dL (diabetes de início recente)', ref: '< 100 mg/dL', alt: true },
        { test: 'INR / albumina', val: '1,4 / 3,2 g/dL', ref: '< 1,2 / 3,5–5,0', alt: true }
      ],
      image: 'TC DE ABDOME COM PROTOCOLO PARA PÂNCREAS — trifásica (entregar se solicitada): massa hipodensa de 2,8 cm em cabeça do pâncreas, com dilatação das vias biliares intra e extra-hepáticas e do ducto pancreático principal (sinal do “duplo ducto”); vesícula distendida; contato da massa com a veia mesentérica superior < 180°, sem deformidade ou trombose venosa; artéria mesentérica superior, tronco celíaco e artéria hepática comum livres (plano de gordura preservado); sem metástases hepáticas, sem ascite. TC de tórax: sem nódulos.',
      note: 'Entregar sinais vitais no início. Exame físico e exames SOMENTE se solicitados. O candidato deve identificar o sinal de Courvoisier-Terrier. Se o candidato indicar drenagem biliar pré-operatória de rotina (CPRE com prótese) sem justificativa, ANOTAR; aceitar se justificar por colangite, prurido intratável, atraso previsto da cirurgia ou neoadjuvância.',
      patientProfile: 'Joaquim, 67 anos, aposentado (ex-metalúrgico), tabagista 40 maços-ano. Diagnosticado com diabetes há 3 meses. Sem etilismo. Mora com a esposa.',
      script: [
        { trigger: 'Queixa principal', speech: 'Fiquei amarelo de uns tempos pra cá, e coça o corpo inteiro, doutor, não consigo dormir.' },
        { trigger: 'Dor', speech: 'Dor não tenho. Às vezes um incômodo nas costas.' },
        { trigger: 'Urina e fezes', speech: 'A urina tá escura como Coca-Cola, e o cocô ficou branquinho.' },
        { trigger: 'Perda de peso', speech: 'Perdi uns oito quilos em dois meses, sem fazer dieta.' },
        { trigger: 'Febre / calafrios', speech: 'Febre não tive.' },
        { trigger: 'Pergunta ativa', speech: 'Doutor, é hepatite? É coisa ruim?' }
      ],
      hiddenInfo: 'Diabetes diagnosticado há 3 meses (diabetes de início recente após 50 anos) — só revela se perguntado sobre doenças recentes | Tabagismo de longa data — revela se perguntado | Incômodo lombar — só revela se perguntado sobre dor nas costas',
      actorBehavior: 'Preocupado, coçando-se constantemente, desconfiado de que é algo grave.'
    },
    instC: {
      diagnosis: 'Icterícia obstrutiva indolor por adenocarcinoma de cabeça de pâncreas (sinal de Courvoisier-Terrier), RESSECÁVEL pelos critérios do NCCN (contato venoso ≤ 180° sem irregularidade, sem contato arterial, sem metástases).',
      differentials: [
        'Coledocolitíase — icterícia flutuante com dor tipo cólica; vesícula geralmente não palpável (fibrose por colecistite crônica).',
        'Colangiocarcinoma distal / ampuloma — também causam Courvoisier; ampuloma pode ter icterícia flutuante e melena; diferenciados por TC/ecoendoscopia.',
        'Pancreatite crônica com estenose biliar — dor crônica, etilismo, calcificações.',
        'Hepatite — icterícia com padrão hepatocelular (transaminases muito elevadas), sem dilatação das vias biliares.'
      ],
      context: 'O adenocarcinoma ductal de pâncreas é altamente letal; apenas 15–20% dos pacientes são ressecáveis ao diagnóstico. Tumores de cabeça manifestam-se por icterícia obstrutiva indolor, perda de peso e, às vezes, diabetes de início recente. Tabagismo é o principal fator de risco modificável.',
      justify: 'Icterícia colestática progressiva indolor + prurido + colúria + acolia + perda de peso + vesícula palpável indolor (lei de Courvoisier-Terrier) + diabetes recente + CA 19-9 elevado + TC com massa de cabeça de pâncreas e duplo ducto.',
      expectedAnamnesis: 'Evolução da icterícia (progressiva vs flutuante), dor, prurido, colúria e acolia | Perda de peso | Diabetes recente | Febre (colangite) | Tabagismo, etilismo, história familiar',
      expectedPhysical: 'Icterícia | Vesícula palpável indolor (Courvoisier-Terrier) | Hepatomegalia, ascite | Linfonodos de Virchow e Irmã Maria José',
      expectedExams: [
        { exam: 'TC de abdome com protocolo para pâncreas (trifásica)', justify: 'Exame de escolha para diagnóstico e avaliação de ressecabilidade (relação com vasos).', expected: 'Massa de cabeça, ressecável.' },
        { exam: 'TC de tórax', justify: 'Estadiamento a distância.', expected: 'Sem metástases.' },
        { exam: 'CA 19-9 (após descompressão biliar, idealmente)', justify: 'Prognóstico e seguimento (pode estar falsamente elevado na colestase).', expected: 'Elevado.' },
        { exam: 'Ecoendoscopia com punção', justify: 'Confirmação histológica quando necessária (obrigatória antes de neoadjuvância); não é obrigatória antes da ressecção de tumor ressecável com alta suspeita.', expected: '—' }
      ],
      expectedConduct: 'Discussão em equipe multidisciplinar em centro de alto volume | Tumor ressecável: DUODENOPANCREATECTOMIA (cirurgia de Whipple) seguida de quimioterapia adjuvante (mFOLFIRINOX em pacientes com bom desempenho; alternativa gencitabina + capecitabina); neoadjuvância pode ser considerada em casos selecionados (CA 19-9 muito elevado, alto risco) | Drenagem biliar pré-operatória NÃO rotineira (aumenta complicações — estudo DROP-trial); indicada se colangite, prurido intratável, insuficiência renal, cirurgia postergada ou neoadjuvância — preferir prótese metálica por CPRE | Suporte: correção da coagulação (vitamina K), nutrição, controle do prurido (colestiramina), controle glicêmico | Se irressecável/metastático: paliação (prótese biliar, quimioterapia, cuidados paliativos, analgesia — inclusive neurólise do plexo celíaco)',
      expectedCommunication: 'Comunicar a suspeita de tumor com empatia, explicando que há possibilidade de cirurgia com intenção curativa | Envolver a família',
      criticalErrors: [
        'Não identificar o sinal de Courvoisier-Terrier / atribuir a icterícia a hepatite',
        'Não solicitar TC com protocolo de pâncreas para avaliar ressecabilidade',
        'Indicar drenagem biliar pré-operatória de rotina sem indicação',
        'Indicar apenas tratamento paliativo para tumor ressecável sem discussão multidisciplinar'
      ]
    },
    instD: {
      title: 'CHECKLIST — CÂNCER DE CABEÇA DE PÂNCREAS',
      sections: [
        { h: 'AVALIAÇÃO CLÍNICA', items: [
          { item: 'Caracterizou a icterícia obstrutiva (progressiva, indolor, prurido, colúria, acolia) e a perda de peso', score: 1, ref: 'Sabiston, 21ª ed.' },
          { item: 'Pesquisou diabetes recente, tabagismo e febre (colangite)', score: 0.5, ref: 'NCCN Pancreatic Adenocarcinoma, 2024' },
          { item: 'Identificou o sinal de Courvoisier-Terrier', score: 1.5, ref: 'Porto — Semiologia Médica, 8ª ed.' }
        ]},
        { h: 'DIAGNÓSTICO', items: [
          { item: 'Formulou hipótese de neoplasia periampular / adenocarcinoma de cabeça de pâncreas', score: 1.5, ref: 'NCCN 2024' },
          { item: 'Solicitou TC trifásica com protocolo para pâncreas e TC de tórax', score: 1.5, ref: 'NCCN 2024' },
          { item: 'Classificou como RESSECÁVEL (contato venoso ≤ 180° sem irregularidade, artérias livres, sem metástases)', score: 1.5, ref: 'NCCN 2024' }
        ]},
        { h: 'CONDUTA', items: [
          { item: 'Indicou duodenopancreatectomia (Whipple) em centro de referência + quimioterapia adjuvante', score: 1.5, ref: 'Conroy et al., PRODIGE 24, NEJM 2018; NCCN 2024' },
          { item: 'Não indicou drenagem biliar pré-operatória de rotina (citou indicações)', score: 0.5, ref: 'van der Gaag et al., NEJM 2010' },
          { item: 'Citou medidas de suporte (vitamina K, nutrição, prurido) e comunicou com empatia', score: 0.5, ref: 'NCCN 2024' }
        ]}
      ]
    }
  }
];

export default digestiva5b;
