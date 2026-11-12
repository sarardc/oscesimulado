// Clínica Cirúrgica — estações de 5 minutos — CIRURGIA VASCULAR
const vascular5 = [
  // CASO 1 — INSUFICIÊNCIA VENOSA CRÔNICA
  {
    id: 'CV-1',
    title: 'Ferida no tornozelo que não fecha há 5 meses',
    sub: 'Ambulatório — Cirurgia Vascular',
    tema: 'Cirurgia Vascular',
    topic: 'Insuficiência venosa crônica (CEAP C6)',
    level: 'moderado',
    duracao: '5 minutos',
    cardAccent: '#B71C1C',
    instA: {
      scenario: 'Ambulatório de cirurgia vascular de hospital secundário. Consulta de primeira vez, encaminhada da UBS.',
      patient: 'Maria Aparecida, 54 anos, sexo feminino, cozinheira de restaurante (trabalha 10 h/dia em pé), 4 gestações.',
      complaint: 'Ferida na parte interna do tornozelo esquerdo que não cicatriza há 5 meses, com pernas inchadas e pesadas no fim do dia.',
      tasks: [
        'Realize anamnese e exame físico dirigidos (os achados de exame serão fornecidos mediante solicitação).',
        'Formule o diagnóstico sindrômico e classifique o quadro pela CEAP clínica.',
        'Solicite o(s) exame(s) necessário(s) antes de iniciar o tratamento e proponha a conduta.'
      ]
    },
    instB: {
      vitals: { PA: '134/84 mmHg', FC: '78 bpm', FR: '16 irpm', Tax: '36,5 °C', Peso: '81 kg', Altura: '1,60 m', IMC: '31,6 kg/m²' },
      physicalGeneral: 'Bom estado geral, lúcida, corada, hidratada, obesa grau I.',
      physicalSeg: 'MEMBRO INFERIOR ESQUERDO (ortostatismo): varizes calibrosas e tortuosas em face medial de coxa e perna, no trajeto da veia safena magna; edema depressível 2+/4+ em terço distal da perna e tornozelo | PELE: hiperpigmentação ocre (dermatite ocre) e lipodermatoesclerose no terço distal da perna (aspecto de “garrafa invertida”); eczema descamativo perilesional | ÚLCERA: em região supramaleolar medial esquerda, 4 x 3 cm, rasa, bordas irregulares e não endurecidas, fundo com tecido de granulação e fibrina, exsudato seroso moderado, sem secreção purulenta, sem odor, pouco dolorosa; sem celulite ao redor | MEMBRO INFERIOR DIREITO: varizes de menor calibre, edema 1+/4+, sem alterações tróficas | PULSOS: femorais, poplíteos, tibiais posteriores e pediosos palpáveis e simétricos (++/++) | TEMPO DE ENCHIMENTO CAPILAR: < 3 s',
      labs: [
        { test: 'Índice tornozelo-braquial (ITB) — MIE', val: '1,02', ref: '0,90–1,40', alt: false },
        { test: 'Índice tornozelo-braquial (ITB) — MID', val: '1,05', ref: '0,90–1,40', alt: false },
        { test: 'Glicemia de jejum', val: '96 mg/dL', ref: '< 100 mg/dL', alt: false }
      ],
      image: 'ECO-DOPPLER (DUPLEX SCAN) VENOSO DO MIE — entregar se solicitado: sistema venoso profundo pérvio, compressível, sem trombos e sem refluxo. Veia safena magna com refluxo patológico (> 0,5 s) da junção safenofemoral até o terço distal da perna. Veia perfurante incompetente em terço distal medial da perna, próxima à úlcera.',
      note: 'Entregar sinais vitais no início. Fornecer o exame físico somente se o candidato disser o que vai examinar (inspeção em pé, pulsos, úlcera). O ITB e o duplex só são entregues se solicitados. Se o candidato prescrever compressão sem verificar pulsos/ITB, ANOTAR como erro crítico.',
      patientProfile: 'Maria Aparecida, 54 anos, cozinheira, casada, 4 filhos (partos normais). Fica em pé o dia todo. Sedentária. Não fuma. Mãe tinha “varizes e ferida na perna”.',
      script: [
        { trigger: 'Queixa principal', speech: 'Doutor, essa ferida no tornozelo não fecha de jeito nenhum. Já passei pomada, já fiz curativo no posto, e nada.' },
        { trigger: 'Sintomas nas pernas', speech: 'No fim do dia a perna fica pesada, inchada, dói. Quando eu deito e ponho a perna pra cima, melhora bastante.' },
        { trigger: 'Tempo das varizes', speech: 'As varizes eu tenho desde a segunda gravidez. Foram piorando, e a pele foi ficando escura, dura.' },
        { trigger: 'Dor ao caminhar / em repouso', speech: 'Não dói pra andar, não. Andar até melhora. Dor de noite deitada eu não tenho.' },
        { trigger: 'Trombose prévia', speech: 'Trombose eu nunca tive, que eu saiba.' },
        { trigger: 'Pergunta ativa', speech: 'Isso é da circulação? Vou precisar operar? Tenho medo de perder a perna.' }
      ],
      hiddenInfo: 'Mãe com varizes e úlcera de perna — só revela se perguntada sobre família | Nunca usou meia elástica porque “é quente e aperta” — só revela se perguntada sobre tratamentos prévios/meia | Coceira na pele ao redor da ferida — só revela se perguntada sobre prurido',
      actorBehavior: 'Colaborativa, cansada da ferida, um pouco desanimada. Preocupada em não poder trabalhar. Se o candidato explicar a importância da compressão, aceita, mas pergunta se vai aguentar no calor da cozinha.'
    },
    instC: {
      diagnosis: 'Insuficiência venosa crônica de membro inferior esquerdo com úlcera venosa ativa — CEAP C6 (Ep, As, Pr: primária, superficial + perfurante, refluxo), por refluxo da veia safena magna e perfurante incompetente, sem doença arterial associada (ITB 1,02).',
      differentials: [
        'Úlcera arterial (isquêmica) — entra por ser úlcera crônica de perna; sai porque é supramaleolar medial, rasa, pouco dolorosa, com pulsos palpáveis e ITB normal (úlcera arterial é distal, dolorosa, com fundo pálido e pulsos ausentes).',
        'Úlcera neuropática (diabética) — sai: localiza-se em pontos de pressão plantar, com perda de sensibilidade; glicemia normal.',
        'Úlcera mista (venosa + arterial) — precisa ser excluída com ITB antes da compressão; ITB > 0,8 afasta componente arterial significativo.',
        'Carcinoma espinocelular sobre úlcera crônica (úlcera de Marjolin) — considerar biópsia se bordas elevadas/vegetantes ou não cicatrização após 3 meses de tratamento adequado.'
      ],
      context: 'Mulher de 54 anos, multípara, obesa, com trabalho em ortostatismo prolongado e história familiar — fatores de risco clássicos para doença venosa crônica. Apresenta varizes de longa data com progressão para alterações tróficas e úlcera em topografia típica (região maleolar medial, “área de polaina”).',
      justify: 'Úlcera em região maleolar medial associada a varizes, edema vespertino que melhora com elevação, dermatite ocre e lipodermatoesclerose = úlcera venosa. CEAP C6 = úlcera venosa ativa (C5 = cicatrizada). Pulsos palpáveis e ITB normal afastam doença arterial e liberam terapia compressiva. O duplex confirma refluxo superficial e perfurante, sem acometimento profundo.',
      expectedAnamnesis: 'Tempo de evolução da úlcera e das varizes | Sintomas de IVC: peso, dor, edema vespertino, melhora com elevação | Claudicação intermitente / dor isquêmica de repouso (afastar componente arterial) | Antecedente de TVP (síndrome pós-trombótica) | Fatores de risco: gestações, obesidade, ortostatismo, história familiar | Comorbidades: DM, tabagismo | Tratamentos prévios (compressão, curativos)',
      expectedPhysical: 'Inspeção dos membros em ortostatismo (varizes, edema, alterações tróficas) | Descrição da úlcera (local, tamanho, bordas, fundo, sinais de infecção) | Palpação de TODOS os pulsos dos membros inferiores | Avaliação do edema (sinal do cacifo)',
      expectedExams: [
        { exam: 'Índice tornozelo-braquial (ITB)', justify: 'Obrigatório antes de iniciar compressão — exclui doença arterial periférica associada.', expected: 'ITB 1,02: compressão terapêutica plena liberada (ITB ≥ 0,8).' },
        { exam: 'Eco-Doppler (duplex) venoso', justify: 'Exame de escolha para mapear refluxo superficial, perfurante e profundo e planejar tratamento intervencionista.', expected: 'Refluxo de safena magna e perfurante incompetente; sistema profundo normal.' }
      ],
      expectedConduct: 'Terapia compressiva (pilar do tratamento): bandagem multicamadas ou bota de Unna até a cicatrização; depois, meia elástica de compressão 30–40 mmHg (classe II/III) de uso diário e contínuo | Curativo da úlcera: limpeza com SF 0,9%, cobertura que controle exsudato; tratar eczema perilesional; sem antibiótico sistêmico (não há infecção) | Adjuvantes: fração flavonoica purificada micronizada (diosmina + hesperidina 1.000 mg/dia) e/ou pentoxifilina 400 mg 3x/dia para acelerar cicatrização | Medidas gerais: elevação dos membros, caminhadas (bomba muscular da panturrilha), perda de peso, pausas durante o trabalho | Tratamento do refluxo superficial (ablação térmica/química ou cirurgia da safena magna e perfurante) — reduz a recidiva da úlcera e acelera cicatrização (estudo ESCHAR/EVRA)',
      expectedCommunication: 'Explicar em linguagem acessível que a ferida é causada pelo “sangue que volta” nas veias da perna | Tranquilizar: não há risco de amputação, a circulação arterial está boa | Negociar adesão à compressão considerando o calor da cozinha | Esclarecer que a cirurgia das varizes ajuda a não voltar a ferida',
      criticalErrors: [
        'Iniciar terapia compressiva sem palpar pulsos e/ou sem solicitar ITB',
        'Prescrever antibiótico sistêmico sem sinais de infecção',
        'Não indicar terapia compressiva como base do tratamento',
        'Indicar cirurgia das varizes como única conduta, sem compressão e cuidado da úlcera'
      ]
    },
    instD: {
      title: 'CHECKLIST — ÚLCERA VENOSA (IVC CEAP C6)',
      sections: [
        { h: 'ANAMNESE E EXAME FÍSICO', items: [
          { item: 'Pesquisou sintomas de IVC (peso, edema vespertino, melhora com elevação) e antecedente de TVP', score: 1, ref: 'SBACV — Diretrizes de Doença Venosa Crônica' },
          { item: 'Pesquisou claudicação/dor de repouso e fatores de risco arteriais (DM, tabagismo)', score: 1, ref: 'ESVS Guidelines on Chronic Venous Disease, 2022' },
          { item: 'Examinou membros em ortostatismo e descreveu a úlcera (local, tamanho, fundo, bordas, sinais de infecção)', score: 1, ref: 'Maffei — Doenças Vasculares Periféricas' },
          { item: 'Palpou os pulsos distais dos membros inferiores', score: 1, ref: 'ESVS 2022' }
        ]},
        { h: 'DIAGNÓSTICO E EXAMES', items: [
          { item: 'Diagnosticou úlcera venosa por IVC e classificou como CEAP C6 (úlcera ativa)', score: 1.5, ref: 'Classificação CEAP revisada, 2020' },
          { item: 'Solicitou ITB antes da compressão e interpretou (≥ 0,8 libera compressão)', score: 1.5, ref: 'ESVS 2022; SBACV' },
          { item: 'Solicitou eco-Doppler venoso', score: 1, ref: 'ESVS 2022' }
        ]},
        { h: 'CONDUTA E COMUNICAÇÃO', items: [
          { item: 'Indicou terapia compressiva (bandagem multicamadas/bota de Unna → meia 30–40 mmHg)', score: 1, ref: 'SBACV; ESVS 2022' },
          { item: 'Orientou curativo, elevação de membros, caminhada, perda de peso; citou flebotônico/pentoxifilina como adjuvantes', score: 0.5, ref: 'ESVS 2022' },
          { item: 'Indicou tratamento do refluxo superficial para reduzir recidiva e comunicou de forma clara e acolhedora', score: 0.5, ref: 'Gohel et al., EVRA trial, NEJM 2018' }
        ]}
      ]
    }
  },

  // CASO 2 — ISQUEMIA MESENTÉRICA AGUDA
  {
    id: 'CV-2',
    title: 'Dor abdominal súbita e intensa em idoso com arritmia',
    sub: 'PS — Pronto-Socorro',
    tema: 'Cirurgia Vascular',
    topic: 'Isquemia mesentérica aguda (embólica)',
    level: 'difícil',
    duracao: '5 minutos',
    cardAccent: '#B71C1C',
    instA: {
      scenario: 'Pronto-socorro de hospital terciário, 23h. Paciente trazido pela filha.',
      patient: 'Sebastião, 76 anos, sexo masculino, aposentado.',
      complaint: 'Dor abdominal súbita, muito intensa, em região periumbilical, há 4 horas, com 2 episódios de vômito e uma evacuação diarreica.',
      tasks: [
        'Colete dados dirigidos da anamnese e do exame físico (os achados serão fornecidos mediante solicitação).',
        'Formule a principal hipótese diagnóstica e solicite o exame que confirma o diagnóstico.',
        'Descreva a conduta inicial e o tratamento definitivo.'
      ]
    },
    instB: {
      vitals: { PA: '104/66 mmHg', FC: '118 bpm (irregular)', FR: '24 irpm', Tax: '37,2 °C', SpO2: '95% em ar ambiente', Peso: '70 kg' },
      physicalGeneral: 'Regular estado geral, agitado, gemente, contorcendo-se no leito, sudoreico, desidratado 2+/4+.',
      physicalSeg: 'CARDIOVASCULAR: ritmo cardíaco irregularmente irregular, sem sopros | ABDOME: plano, flácido, ruídos hidroaéreos diminuídos, dor difusa leve à palpação profunda periumbilical, SEM sinais de irritação peritoneal (Blumberg negativo), sem massas, sem visceromegalias | TOQUE RETAL: fezes com sangue escuro em pequena quantidade | MEMBROS: pulsos femorais palpáveis, sem edema',
      labs: [
        { test: 'Leucócitos', val: '21.800/mm³ (8% bastões)', ref: '4.000–11.000/mm³', alt: true },
        { test: 'Lactato arterial', val: '4,8 mmol/L', ref: '< 2,0 mmol/L', alt: true },
        { test: 'Gasometria arterial', val: 'pH 7,29; HCO₃ 16 mEq/L; BE −9', ref: 'pH 7,35–7,45; HCO₃ 22–26', alt: true },
        { test: 'Amilase', val: '210 U/L', ref: '< 100 U/L', alt: true },
        { test: 'Creatinina', val: '1,6 mg/dL', ref: '0,7–1,3 mg/dL', alt: true },
        { test: 'ECG', val: 'Fibrilação atrial com resposta ventricular de 118 bpm', ref: '—', alt: true }
      ],
      image: 'ANGIOTOMOGRAFIA DE ABDOME — entregar se solicitada: falha de enchimento (oclusão) da artéria mesentérica superior cerca de 5 cm após sua origem, poupando a artéria cólica média; alças de jejuno distal e íleo com espessamento parietal e hipocaptação de contraste; sem pneumatose intestinal ou gás portal; pequena quantidade de líquido livre.',
      note: 'Entregar sinais vitais no início. Exames laboratoriais, ECG e angiotomografia SOMENTE se solicitados. Se o candidato pedir apenas radiografia ou ultrassonografia, informar que o exame é inespecífico e “sem alterações significativas”. O paciente está com dor muito intensa e o exame do abdome é pouco expressivo — essa desproporção é o ponto-chave.',
      patientProfile: 'Sebastião, 76 anos, aposentado, viúvo, mora com a filha. Hipertenso. Tem “coração disparado” (FA) diagnosticado há 1 ano, mas parou por conta própria o anticoagulante há 3 meses porque “dava manchas roxas”.',
      script: [
        { trigger: 'Queixa principal', speech: 'Ai, doutor... uma dor horrível na barriga, começou de repente, como se tivesse rasgando por dentro. Nunca senti nada assim!' },
        { trigger: 'Início e característica', speech: 'Começou do nada, umas sete da noite, e não para. Remédio nenhum melhora.' },
        { trigger: 'Vômitos / evacuação', speech: 'Vomitei duas vezes e fui ao banheiro uma vez, saiu meio mole.' },
        { trigger: 'Doenças prévias', speech: 'Tenho pressão alta e o médico disse que meu coração bate desregulado.' },
        { trigger: 'Medicações', speech: 'Tomo remédio da pressão. Tinha um pra afinar o sangue, mas eu parei.' },
        { trigger: 'Pergunta ativa', speech: 'Doutor, é grave? Vão ter que me operar?' }
      ],
      hiddenInfo: 'Suspendeu a varfarina por conta própria há 3 meses — só revela se perguntado especificamente sobre anticoagulante/“remédio para afinar o sangue” e se ainda toma | Nunca teve dor ao comer ou emagrecimento (afasta isquemia crônica) — só revela se perguntado',
      actorBehavior: 'Muito agitado, com dor intensa, contorce-se no leito, mas quando o candidato palpa o abdome reage pouco (dor desproporcional ao exame físico). Responde de forma curta, entre gemidos.'
    },
    instC: {
      diagnosis: 'Isquemia mesentérica aguda de etiologia embólica (oclusão da artéria mesentérica superior) em paciente com fibrilação atrial sem anticoagulação, com sinais de isquemia intestinal (lactato elevado, acidose metabólica, sangue no toque retal).',
      differentials: [
        'Pancreatite aguda — entra pela dor intensa e amilase elevada; sai porque a amilase está < 3x o limite e a angioTC mostra oclusão arterial.',
        'Úlcera péptica perfurada — dor súbita intensa, mas cursa com abdome em tábua e pneumoperitônio, ausentes aqui.',
        'Aneurisma de aorta abdominal roto — idoso hipertenso com dor e hipotensão; sai por ausência de massa pulsátil e pela angioTC.',
        'Obstrução intestinal — sai por ausência de distensão e parada de eliminação; houve evacuação.'
      ],
      context: 'A isquemia mesentérica aguda é rara, porém com mortalidade de 50–80%, em grande parte pelo atraso diagnóstico. A embolia da AMS, geralmente de origem cardíaca (FA), é a causa mais comum. O embolo costuma alojar-se distalmente à origem da cólica média.',
      justify: 'Tríade clássica: dor abdominal intensa e desproporcional ao exame físico + fonte emboligênica (FA sem anticoagulação) + esvaziamento intestinal (vômitos e diarreia). Lactato elevado, acidose e leucocitose sugerem isquemia instalada. A angiotomografia é o exame diagnóstico de escolha.',
      expectedAnamnesis: 'Início súbito e intensidade da dor | Vômitos, diarreia, sangramento | Fonte emboligênica: FA, IAM recente, valvopatia | Uso/suspensão de anticoagulante | Sintomas prévios de angina mesentérica (dor pós-prandial, emagrecimento) — diferencia trombose | Comorbidades',
      expectedPhysical: 'Identificar dor desproporcional ao exame abdominal | Pesquisar irritação peritoneal (sinal de necrose transmural) | Ausculta cardíaca (ritmo irregular) | Toque retal (sangue)',
      expectedExams: [
        { exam: 'Angiotomografia de abdome (fases arterial e venosa)', justify: 'Exame de escolha: sensibilidade > 90%; mostra o local da oclusão e o sofrimento de alças. Não adiar por creatinina elevada.', expected: 'Oclusão da AMS com alças hipocaptantes.' },
        { exam: 'Lactato, gasometria, hemograma, função renal, eletrólitos, coagulograma, tipagem', justify: 'Avaliar gravidade, perfusão e preparo cirúrgico.', expected: 'Lactato elevado, acidose metabólica, leucocitose.' },
        { exam: 'ECG', justify: 'Identificar a fonte emboligênica.', expected: 'Fibrilação atrial.' }
      ],
      expectedConduct: 'Medidas iniciais: monitorização, O₂ se necessário, 2 acessos venosos, ressuscitação volêmica com cristaloide, sondagem nasogástrica, jejum, analgesia com opioide, sonda vesical para débito urinário | Anticoagulação plena imediata com heparina não fracionada (bolus 80 UI/kg + infusão 18 UI/kg/h) | Antibiótico de amplo espectro (translocação bacteriana): ex.: ceftriaxona + metronidazol ou piperacilina-tazobactam | Avaliação IMEDIATA da cirurgia vascular/geral: revascularização (embolectomia da AMS aberta ou tratamento endovascular) + laparotomia para avaliar viabilidade intestinal e ressecar segmentos necróticos; considerar laparotomia de “second look” em 24–48 h | Evitar vasopressores vasoconstritores sempre que possível',
      expectedCommunication: 'Comunicar à filha e ao paciente a gravidade e a necessidade de cirurgia de urgência | Explicar riscos (ressecção intestinal, mortalidade elevada) | Obter consentimento',
      criticalErrors: [
        'Não considerar isquemia mesentérica diante de dor desproporcional ao exame em paciente com FA',
        'Solicitar apenas radiografia/ultrassonografia e liberar ou observar o paciente',
        'Não iniciar anticoagulação plena com heparina',
        'Não acionar a equipe cirúrgica de forma imediata (atraso na revascularização)',
        'Deixar de solicitar angiotomografia por receio da creatinina elevada'
      ]
    },
    instD: {
      title: 'CHECKLIST — ISQUEMIA MESENTÉRICA AGUDA',
      sections: [
        { h: 'DADOS CLÍNICOS', items: [
          { item: 'Caracterizou a dor (súbita, intensa) e pesquisou vômitos/diarreia/sangramento', score: 1, ref: 'ESVS Guidelines on Mesenteric Arterial Disease, 2017' },
          { item: 'Investigou fonte emboligênica e uso/suspensão de anticoagulante', score: 1, ref: 'ESVS 2017' },
          { item: 'Identificou dor desproporcional ao exame físico abdominal', score: 1, ref: 'Sabiston — Tratado de Cirurgia, 21ª ed.' }
        ]},
        { h: 'DIAGNÓSTICO', items: [
          { item: 'Formulou hipótese de isquemia mesentérica aguda embólica', score: 1.5, ref: 'ESVS 2017' },
          { item: 'Solicitou angiotomografia de abdome como exame de escolha', score: 1.5, ref: 'ESVS 2017; ACR Appropriateness Criteria' },
          { item: 'Solicitou lactato/gasometria e ECG', score: 0.5, ref: 'WSES Guidelines on Acute Mesenteric Ischemia, 2022' }
        ]},
        { h: 'CONDUTA', items: [
          { item: 'Ressuscitação volêmica, jejum, SNG, analgesia e monitorização', score: 0.5, ref: 'WSES 2022' },
          { item: 'Anticoagulação plena com heparina não fracionada', score: 1, ref: 'ESVS 2017' },
          { item: 'Antibiótico de amplo espectro', score: 0.5, ref: 'WSES 2022' },
          { item: 'Indicou revascularização urgente (embolectomia/endovascular) + laparotomia para avaliar viabilidade (second look)', score: 1.5, ref: 'ESVS 2017; WSES 2022' }
        ]}
      ]
    }
  },

  // CASO 3 — DOENÇA ARTERIAL PERIFÉRICA
  {
    id: 'CV-3',
    title: 'Dor na panturrilha ao caminhar que melhora com o repouso',
    sub: 'UBS — Atenção Primária',
    tema: 'Cirurgia Vascular',
    topic: 'Doença arterial periférica — claudicação intermitente',
    level: 'fácil',
    duracao: '5 minutos',
    cardAccent: '#B71C1C',
    instA: {
      scenario: 'Unidade Básica de Saúde. Consulta agendada.',
      patient: 'José Carlos, 66 anos, sexo masculino, motorista aposentado.',
      complaint: 'Dor na panturrilha direita ao caminhar, há 8 meses, que o obriga a parar após cerca de 2 quarteirões.',
      tasks: [
        'Realize o exame físico vascular dirigido (os achados serão fornecidos mediante solicitação) e interprete o ITB.',
        'Formule o diagnóstico e classifique pelas escalas de Fontaine e Rutherford.',
        'Proponha o tratamento e oriente o paciente.'
      ]
    },
    instB: {
      vitals: { PA: '146/88 mmHg', FC: '76 bpm', FR: '16 irpm', Tax: '36,3 °C', Peso: '84 kg', Altura: '1,72 m', IMC: '28,4 kg/m²' },
      physicalGeneral: 'Bom estado geral, corado, hidratado, eupneico.',
      physicalSeg: 'MEMBROS INFERIORES — INSPEÇÃO: rarefação de pelos e pele fina e brilhante em perna direita, unhas espessadas; sem úlceras, sem gangrena | TEMPERATURA: discretamente mais fria no pé direito | PULSOS: femorais ++/++ bilateralmente; poplíteo direito ausente, esquerdo ++; tibial posterior e pedioso direitos AUSENTES; esquerdos + (diminuídos) | SOPRO: sopro em região de canal dos adutores à direita | TEMPO DE ENCHIMENTO CAPILAR: 5 s à direita, 3 s à esquerda | MANOBRA DE BUERGER: palidez plantar à elevação e rubor de declive à direita',
      labs: [
        { test: 'ITB — membro inferior direito', val: '0,62', ref: '0,90–1,40', alt: true },
        { test: 'ITB — membro inferior esquerdo', val: '0,88', ref: '0,90–1,40', alt: true },
        { test: 'LDL-colesterol', val: '148 mg/dL', ref: 'Meta < 55 mg/dL (muito alto risco)', alt: true },
        { test: 'Hemoglobina glicada', val: '7,9%', ref: 'Meta < 7%', alt: true },
        { test: 'Creatinina', val: '1,0 mg/dL', ref: '0,7–1,3 mg/dL', alt: false }
      ],
      image: '',
      note: 'Entregar sinais vitais no início. Exame físico e ITB SOMENTE se solicitados (o candidato deve dizer que vai palpar pulsos/medir o ITB). Se o candidato perguntar a distância de marcha: “uns 200 metros”.',
      patientProfile: 'José Carlos, 66 anos, ex-motorista de caminhão. Fuma 1 maço/dia há 45 anos. Diabético e hipertenso há 10 anos, uso irregular de metformina e losartana. Sedentário.',
      script: [
        { trigger: 'Queixa principal', speech: 'Doutor, quando eu ando um pouco, a batata da perna direita começa a doer, aperta, e eu tenho que parar. Paro um pouquinho e passa.' },
        { trigger: 'Distância', speech: 'Uns dois quarteirões, uns duzentos metros. Antes eu andava muito mais.' },
        { trigger: 'Dor em repouso / à noite', speech: 'Parado não dói, não. De noite durmo tranquilo.' },
        { trigger: 'Feridas no pé', speech: 'Ferida não tenho, não.' },
        { trigger: 'Hábitos', speech: 'Fumo um maço por dia, desde moleque. Já tentei parar, mas não consigo.' },
        { trigger: 'Pergunta ativa', speech: 'Vou ter que operar? Meu cunhado cortou a perna por causa da circulação...' }
      ],
      hiddenInfo: 'Tem dor no peito ao subir ladeira há 6 meses, que passa ao descansar — só revela se perguntado sobre dor torácica/coração | Disfunção erétil há 2 anos — só revela se perguntado',
      actorBehavior: 'Tranquilo, colaborativo, mas resistente a parar de fumar (“é meu único prazer”). Fica ansioso ao falar da amputação do cunhado.'
    },
    instC: {
      diagnosis: 'Doença arterial periférica aterosclerótica do membro inferior direito (provável oclusão femoropoplítea), com claudicação intermitente limitante — Fontaine IIb (< 200 m) / Rutherford 2–3 — ITB 0,62 (doença moderada); ITB esquerdo limítrofe (0,88).',
      differentials: [
        'Claudicação neurogênica (estenose do canal lombar) — sai: a dor melhora apenas ao parar (sem necessidade de sentar/fletir o tronco) e há pulsos ausentes com ITB baixo.',
        'Insuficiência venosa crônica — sai: dor em peso que piora em ortostatismo, não relacionada à marcha; pulsos seriam normais.',
        'Síndrome compartimental crônica — típica de atletas jovens; pulsos e ITB normais.',
        'Isquemia crítica crônica (Fontaine III/IV) — sai: não há dor em repouso, úlcera ou gangrena.'
      ],
      context: 'A DAP afeta cerca de 20% dos idosos e é marcador de aterosclerose sistêmica: o maior risco desses pacientes é de IAM e AVC, não de amputação. Tabagismo e diabetes são os principais fatores de risco.',
      justify: 'Dor muscular em panturrilha reprodutível ao esforço e aliviada pelo repouso (claudicação intermitente), pulsos ausentes abaixo da femoral e ITB < 0,9 (0,62) confirmam DAP. A ausência de pulso poplíteo com femoral presente localiza a lesão no segmento femoropoplíteo. Claudicação < 200 m = Fontaine IIb.',
      expectedAnamnesis: 'Caracterizar a claudicação (local, distância, alívio com repouso) | Dor em repouso, úlceras ou gangrena (isquemia crítica) | Fatores de risco: tabagismo, DM, HAS, dislipidemia | Sintomas de doença coronariana e cerebrovascular | Disfunção erétil',
      expectedPhysical: 'Inspeção de alterações tróficas | Palpação comparativa de pulsos femoral, poplíteo, tibial posterior e pedioso | Ausculta de sopros | Tempo de enchimento capilar / manobra de Buerger | Medida e interpretação do ITB',
      expectedExams: [
        { exam: 'Índice tornozelo-braquial', justify: 'Exame inicial para diagnóstico e gravidade.', expected: '0,62 à direita (DAP moderada: 0,41–0,69).' },
        { exam: 'Perfil lipídico, HbA1c, função renal', justify: 'Estratificação e controle dos fatores de risco.', expected: 'LDL e HbA1c fora da meta.' },
        { exam: 'Eco-Doppler arterial (angioTC/angioRM se planejada revascularização)', justify: 'Mapear lesões se houver falha do tratamento clínico ou isquemia crítica.', expected: 'Oclusão de artéria femoral superficial.' }
      ],
      expectedConduct: 'Controle de fatores de risco: cessação do tabagismo (aconselhamento + farmacoterapia: TRN, bupropiona ou vareniclina) | Antiagregante: AAS 100 mg/dia (ou clopidogrel 75 mg/dia); considerar AAS + rivaroxabana 2,5 mg 12/12 h em alto risco | Estatina de alta potência (atorvastatina 40–80 mg ou rosuvastatina 20–40 mg), meta LDL < 55 mg/dL | Controle pressórico (IECA/BRA) e glicêmico (considerar iSGLT2/aGLP-1) | Exercício supervisionado: caminhar até dor moderada, 30–45 min, ≥ 3x/semana, por ≥ 12 semanas | Cilostazol 100 mg 12/12 h para melhorar distância de marcha (CONTRAINDICADO na insuficiência cardíaca) | Revascularização (endovascular ou cirúrgica) apenas se claudicação limitante persistir após 3–6 meses de tratamento clínico otimizado, ou se isquemia crítica | Cuidados com os pés (inspeção diária, calçados adequados) | Investigar doença coronariana (angina relatada)',
      expectedCommunication: 'Explicar que é “entupimento das artérias por gordura”, a mesma doença que causa infarto e derrame | Tranquilizar: risco de amputação é baixo com tratamento | Abordar o tabagismo de forma empática e motivacional',
      criticalErrors: [
        'Não palpar pulsos e/ou não interpretar o ITB',
        'Indicar revascularização imediata para claudicação estável sem tratamento clínico prévio',
        'Não prescrever antiagregante plaquetário e estatina',
        'Não abordar a cessação do tabagismo',
        'Prescrever cilostazol sem investigar insuficiência cardíaca'
      ]
    },
    instD: {
      title: 'CHECKLIST — DOENÇA ARTERIAL PERIFÉRICA (CLAUDICAÇÃO INTERMITENTE)',
      sections: [
        { h: 'EXAME E DIAGNÓSTICO', items: [
          { item: 'Palpou pulsos dos membros inferiores de forma comparativa e pesquisou alterações tróficas', score: 1.5, ref: 'ESC/ESVS Guidelines on Peripheral Arterial Disease, 2024' },
          { item: 'Interpretou o ITB (< 0,9 = DAP; 0,62 = moderada)', score: 1.5, ref: 'AHA/ACC PAD Guideline, 2024' },
          { item: 'Diagnosticou DAP e classificou Fontaine IIb / Rutherford 2–3', score: 1, ref: 'SBACV — Diretriz de DAP' },
          { item: 'Pesquisou sinais de isquemia crítica (dor de repouso, úlcera, gangrena)', score: 0.5, ref: 'GVG — Global Vascular Guidelines, 2019' }
        ]},
        { h: 'TRATAMENTO', items: [
          { item: 'Orientou cessação do tabagismo com suporte farmacológico', score: 1.5, ref: 'ESC/ESVS 2024' },
          { item: 'Prescreveu antiagregante (AAS ou clopidogrel)', score: 1, ref: 'ESC/ESVS 2024' },
          { item: 'Prescreveu estatina de alta potência e controle de PA/glicemia', score: 1, ref: 'ESC/ESVS 2024' },
          { item: 'Indicou exercício supervisionado (≥ 3x/sem, 30–45 min, 12 semanas)', score: 1, ref: 'AHA/ACC 2024' },
          { item: 'Citou cilostazol (contraindicado na IC) e revascularização apenas após falha clínica', score: 1, ref: 'AHA/ACC 2024' }
        ]}
      ]
    }
  }
];

export default vascular5;
