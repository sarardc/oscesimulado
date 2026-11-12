// Clínica Cirúrgica — estações de 5 minutos — CIRURGIA DIGESTIVA (parte 1)
const digestiva5a = [
  // CASO 1 — ABDOME AGUDO PERFURATIVO
  {
    id: 'CD-1',
    title: 'Dor abdominal súbita “em facada” após uso de anti-inflamatório',
    sub: 'PS — Pronto-Socorro',
    tema: 'Cirurgia Digestiva',
    topic: 'Abdome agudo perfurativo — úlcera péptica perfurada',
    level: 'moderado',
    duracao: '5 minutos',
    cardAccent: '#2E7D32',
    instA: {
      scenario: 'Pronto-socorro, 14h.',
      patient: 'Rogério, 48 anos, sexo masculino, mecânico.',
      complaint: 'Dor abdominal súbita e muito intensa em “boca do estômago” há 3 horas, que se espalhou para toda a barriga.',
      tasks: [
        'Colete dados dirigidos de anamnese e exame físico (achados fornecidos mediante solicitação).',
        'Solicite o exame de imagem inicial, interprete-o e formule o diagnóstico.',
        'Descreva a conduta.'
      ]
    },
    instB: {
      vitals: { PA: '112/70 mmHg', FC: '112 bpm', FR: '24 irpm', Tax: '37,8 °C', SpO2: '96%', Peso: '78 kg' },
      physicalGeneral: 'Regular estado geral, imóvel no leito (evita se mexer), fácies de dor, desidratado 1+/4+.',
      physicalSeg: 'ABDOME: plano, contratura muscular involuntária difusa (abdome “em tábua”); dor intensa à palpação difusa, máxima em epigástrio; descompressão brusca dolorosa difusa (Blumberg positivo); PERCUSSÃO: perda da macicez hepática (sinal de Jobert); ruídos hidroaéreos abolidos',
      labs: [
        { test: 'Leucócitos', val: '16.400/mm³ (6% bastões)', ref: '4.000–11.000/mm³', alt: true },
        { test: 'Amilase', val: '140 U/L', ref: '< 100 U/L', alt: true },
        { test: 'Creatinina', val: '1,2 mg/dL', ref: '0,7–1,3 mg/dL', alt: false },
        { test: 'Lactato', val: '2,4 mmol/L', ref: '< 2 mmol/L', alt: true }
      ],
      image: 'RADIOGRAFIA DE TÓRAX PA EM ORTOSTATISMO (entregar se solicitada a rotina de abdome agudo ou RX de tórax ortostático): pneumoperitônio — imagem de ar livre subdiafragmático bilateral, em “crescente”, mais evidente à direita.',
      note: 'Entregar sinais vitais no início. Exame físico e radiografia SOMENTE se solicitados. Se o candidato pedir endoscopia digestiva alta, informar que “está contraindicada nesta situação” e ANOTAR. Se pedir TC, informar que “está disponível em 1 hora — algum exame mais rápido?”.',
      patientProfile: 'Rogério, 48 anos, mecânico, tabagista 1 maço/dia, etilista social. Há 2 semanas usa diclofenaco 50 mg 3x/dia por dor lombar, por conta própria. Tem “gastrite” há anos, com queimação que melhora ao comer.',
      script: [
        { trigger: 'Queixa principal', speech: 'Doutor, deu uma dor de repente aqui em cima da barriga, como uma facada. Agora dói a barriga inteira, não consigo nem me mexer.' },
        { trigger: 'Medicamentos', speech: 'Tô tomando diclofenaco por causa da coluna, umas três vezes por dia, faz duas semanas.' },
        { trigger: 'Sintomas prévios', speech: 'Eu tenho uma queimação no estômago faz anos, que melhora quando eu como.' },
        { trigger: 'Vômitos / evacuação', speech: 'Vomitei uma vez. Evacuei ontem normal.' },
        { trigger: 'Pergunta ativa', speech: 'O que eu tenho? Vou ter que operar?' }
      ],
      hiddenInfo: 'Uso de diclofenaco por conta própria há 2 semanas — só revela se perguntado sobre medicações | Tabagismo — só revela se perguntado',
      actorBehavior: 'Imóvel, com dor intensa, evita respirar fundo e se mexer; joelhos fletidos.'
    },
    instC: {
      diagnosis: 'Abdome agudo perfurativo — úlcera péptica perfurada (provavelmente duodenal/pré-pilórica), com peritonite difusa, associada a uso de AINE, tabagismo e provável infecção por H. pylori.',
      differentials: [
        'Pancreatite aguda — dor epigástrica intensa; sai por amilase < 3x LSN, ausência de pneumoperitônio e abdome em tábua.',
        'Isquemia mesentérica — dor intensa, mas desproporcional ao exame (aqui há peritonite franca).',
        'Diverticulite perfurada / apendicite perfurada — localização e evolução diferentes; pneumoperitônio pode ocorrer, mas o quadro epigástrico súbito e o AINE favorecem úlcera.',
        'IAM de parede inferior — dor epigástrica: solicitar ECG em pacientes com fatores de risco.'
      ],
      context: 'A perfuração é a segunda complicação mais comum da doença ulcerosa péptica, com mortalidade de até 10–30%. AINEs, H. pylori e tabagismo são os principais fatores de risco.',
      justify: 'Dor súbita, intensa, epigástrica, que se difunde; abdome em tábua, Blumberg positivo, sinal de Jobert e pneumoperitônio na radiografia em ortostatismo em paciente usando AINE com sintomas dispépticos prévios.',
      expectedAnamnesis: 'Início súbito e evolução da dor | Uso de AINE/corticoide | Sintomas dispépticos prévios | Tabagismo/etilismo | Vômitos, sangramento',
      expectedPhysical: 'Pesquisar irritação peritoneal (contratura, Blumberg) | Percussão hepática (sinal de Jobert)',
      expectedExams: [
        { exam: 'Radiografia de tórax PA em ortostatismo (rotina de abdome agudo)', justify: 'Exame inicial mais rápido para pneumoperitônio (sensibilidade ~75–80%).', expected: 'Pneumoperitônio.' },
        { exam: 'TC de abdome', justify: 'Se radiografia negativa e suspeita persistente (mais sensível).', expected: 'Ar e líquido livre periduodenal.' },
        { exam: 'Hemograma, eletrólitos, função renal, amilase/lipase, lactato, coagulograma, tipagem; ECG', justify: 'Avaliação pré-operatória e diferenciais.', expected: 'Leucocitose.' }
      ],
      expectedConduct: 'Jejum, sonda nasogástrica, hidratação venosa, analgesia, sonda vesical | IBP EV em dose alta (ex.: omeprazol 40–80 mg EV 12/12 h) | Antibiótico de amplo espectro (ex.: ceftriaxona + metronidazol) | Suspender AINE | Cirurgia de urgência: laparoscopia ou laparotomia com ulcerorrafia + epiploplastia (patch de omento de Graham) e lavagem da cavidade; biópsia da úlcera se gástrica | Pós-operatório: pesquisar e erradicar H. pylori; manter IBP; cessação do tabagismo | Tratamento não operatório (Taylor) apenas em casos muito selecionados',
      expectedCommunication: 'Explicar que houve “furo” no estômago/duodeno e a necessidade de cirurgia | Obter consentimento',
      criticalErrors: [
        'Solicitar endoscopia digestiva alta na suspeita de perfuração',
        'Não indicar tratamento cirúrgico',
        'Não iniciar antibiótico, IBP e jejum/SNG',
        'Dar alta com sintomáticos/antiácido'
      ]
    },
    instD: {
      title: 'CHECKLIST — ABDOME AGUDO PERFURATIVO',
      sections: [
        { h: 'AVALIAÇÃO', items: [
          { item: 'Caracterizou a dor (súbita, epigástrica, difusa) e perguntou sobre uso de AINE e dispepsia prévia', score: 1.5, ref: 'WSES Guidelines on Perforated Peptic Ulcer, 2020' },
          { item: 'Pesquisou sinais de peritonite (abdome em tábua, Blumberg) e sinal de Jobert', score: 1.5, ref: 'Sabiston, 21ª ed.' }
        ]},
        { h: 'DIAGNÓSTICO', items: [
          { item: 'Solicitou radiografia de tórax PA em ortostatismo / rotina de abdome agudo', score: 1.5, ref: 'WSES 2020' },
          { item: 'Identificou pneumoperitônio e diagnosticou abdome agudo perfurativo (úlcera péptica perfurada)', score: 1.5, ref: 'WSES 2020' }
        ]},
        { h: 'CONDUTA', items: [
          { item: 'Jejum, SNG, hidratação, analgesia, IBP EV', score: 1, ref: 'WSES 2020' },
          { item: 'Antibiótico de amplo espectro', score: 1, ref: 'WSES 2020' },
          { item: 'Indicou cirurgia: ulcerorrafia + epiploplastia (Graham), laparoscópica ou aberta', score: 1.5, ref: 'WSES 2020' },
          { item: 'Pós-operatório: erradicação de H. pylori e suspensão de AINE', score: 0.5, ref: 'Consenso Brasileiro sobre H. pylori (IV), 2018' }
        ]}
      ]
    }
  },

  // CASO 2 — DOENÇA DO REFLUXO GASTROESOFÁGICO (INDICAÇÃO CIRÚRGICA)
  {
    id: 'CD-2',
    title: 'Azia há anos que volta toda vez que para o remédio',
    sub: 'Ambulatório — Cirurgia do Aparelho Digestivo',
    tema: 'Cirurgia Digestiva',
    topic: 'Doença do refluxo gastroesofágico — indicação de fundoplicatura',
    level: 'moderado',
    duracao: '5 minutos',
    cardAccent: '#2E7D32',
    instA: {
      scenario: 'Ambulatório de cirurgia do aparelho digestivo. Paciente encaminhada pelo gastroenterologista.',
      patient: 'Helena, 46 anos, sexo feminino, advogada.',
      complaint: 'Azia e “comida voltando” há 4 anos; melhora com omeprazol, mas os sintomas retornam sempre que suspende. Deseja saber se pode operar.',
      tasks: [
        'Realize anamnese dirigida, incluindo sinais de alarme.',
        'Indique os exames necessários antes de uma cirurgia antirrefluxo e interprete os resultados entregues.',
        'Defina se há indicação cirúrgica e qual o procedimento.'
      ]
    },
    instB: {
      vitals: { PA: '124/78 mmHg', FC: '70 bpm', FR: '14 irpm', Peso: '66 kg', Altura: '1,65 m', IMC: '24,2 kg/m²' },
      physicalGeneral: 'Bom estado geral, eutrófica.',
      physicalSeg: 'ABDOME: sem alterações | OROFARINGE: sem alterações',
      labs: [
        { test: 'pHmetria esofágica de 24 h (sem IBP há 7 dias)', val: 'Tempo de exposição ácida 9,8%; DeMeester 42; boa correlação sintoma-refluxo', ref: 'Exposição ácida < 4%; DeMeester < 14,7', alt: true },
        { test: 'Manometria esofágica de alta resolução', val: 'Peristalse normal (100% contrações efetivas); EEI hipotônico; sem distúrbio motor', ref: '—', alt: true }
      ],
      image: 'ENDOSCOPIA DIGESTIVA ALTA (entregar se solicitada): esofagite erosiva Los Angeles grau B; hérnia hiatal por deslizamento de 3 cm; sem epitélio de Barrett; pesquisa de H. pylori negativa.',
      note: 'Entregar sinais vitais no início. EDA, pHmetria e manometria SOMENTE se solicitadas. Se o candidato indicar a cirurgia sem solicitar manometria, ANOTAR como erro crítico.',
      patientProfile: 'Helena, 46 anos, advogada, não fuma, bebe vinho socialmente. Usa omeprazol 20 mg 2x/dia há 4 anos. Quer parar de depender de remédio e tem receio de efeitos de longo prazo.',
      script: [
        { trigger: 'Queixa principal', speech: 'Doutor, tenho uma azia horrível, sobe um líquido amargo na garganta, principalmente quando deito. Com o omeprazol melhora, mas é só parar que volta tudo.' },
        { trigger: 'Sinais de alarme', speech: 'Não, não tenho dificuldade para engolir, não emagreci, nunca vomitei sangue nem tive fezes pretas.' },
        { trigger: 'Sintomas atípicos', speech: 'Às vezes acordo tossindo à noite e fico rouca de manhã.' },
        { trigger: 'Medidas comportamentais', speech: 'Já levantei a cabeceira da cama, não como antes de deitar, cortei café... ajuda um pouco.' },
        { trigger: 'Pergunta ativa', speech: 'Se eu operar, vou ficar livre do remédio pra sempre? Tem algum risco?' }
      ],
      hiddenInfo: 'Tosse noturna e rouquidão matinal — só revela se perguntada sobre sintomas extraesofágicos | Uso diário de IBP há 4 anos com boa resposta — revela se perguntada sobre tratamento',
      actorBehavior: 'Objetiva, bem informada, um pouco ansiosa para operar. Faz perguntas diretas.'
    },
    instC: {
      diagnosis: 'Doença do refluxo gastroesofágico erosiva (esofagite LA B) com hérnia hiatal por deslizamento de 3 cm, responsiva a IBP mas dependente de uso contínuo, com pHmetria positiva e manometria com peristalse normal — candidata a fundoplicatura laparoscópica.',
      differentials: [
        'Acalasia — causa “regurgitação” e pode ser confundida com DRGE; a manometria normal a exclui (a fundoplicatura em acalasia seria desastrosa).',
        'Esofagite eosinofílica — disfagia/impactação, biópsias com eosinófilos; não presente.',
        'Pirose funcional / esôfago hipersensível — pHmetria normal; aqui a exposição ácida é patológica.',
        'Neoplasia de esôfago/estômago — afastada por ausência de sinais de alarme e EDA.'
      ],
      context: 'A DRGE afeta 10–20% da população ocidental. A cirurgia antirrefluxo é indicada a pacientes com doença comprovada e boa resposta ao IBP que não desejam/não toleram tratamento contínuo, com refluxo volumoso, complicações ou hérnia hiatal grande.',
      justify: 'Sintomas típicos (pirose e regurgitação) responsivos ao IBP + esofagite erosiva LA B + pHmetria com exposição ácida patológica. Manometria normal afasta distúrbio motor e orienta a técnica.',
      expectedAnamnesis: 'Sintomas típicos (pirose, regurgitação) e atípicos (tosse, rouquidão, asma) | Sinais de alarme: disfagia, odinofagia, perda de peso, anemia, hematêmese/melena, idade > 45–50 anos com sintomas novos | Resposta ao IBP | Medidas comportamentais',
      expectedPhysical: 'Exame geral sem achados específicos; IMC (obesidade influencia técnica)',
      expectedExams: [
        { exam: 'Endoscopia digestiva alta', justify: 'Avaliar esofagite, Barrett, hérnia hiatal e excluir neoplasia.', expected: 'Esofagite LA B, hérnia de 3 cm.' },
        { exam: 'pHmetria (ou impedanciopHmetria) de 24 h sem IBP', justify: 'Confirmar refluxo patológico quando não há esofagite grave (LA C/D) ou Barrett.', expected: 'Exposição ácida 9,8%.' },
        { exam: 'Manometria esofágica', justify: 'OBRIGATÓRIA antes da fundoplicatura: excluir acalasia/aperistalse.', expected: 'Peristalse normal.' }
      ],
      expectedConduct: 'Indicação de cirurgia: DRGE comprovada, boa resposta ao IBP, porém dependente de uso contínuo e desejo de não usar medicação por toda a vida | Procedimento: hiatoplastia + fundoplicatura total laparoscópica (Nissen, 360°) — padrão com peristalse normal; fundoplicatura parcial (Toupet 270°) se hipomotilidade | Alternativa: manter IBP na menor dose eficaz + medidas comportamentais | Orientações: possíveis efeitos colaterais — disfagia transitória, incapacidade de eructar/vomitar, distensão gasosa (gas-bloat); recidiva em longo prazo (~10–20% podem voltar a usar IBP)',
      expectedCommunication: 'Explicar de forma clara riscos e benefícios | Decisão compartilhada | Não prometer cura definitiva',
      criticalErrors: [
        'Indicar fundoplicatura sem manometria esofágica',
        'Não pesquisar sinais de alarme',
        'Indicar cirurgia sem documentação objetiva de refluxo (EDA/pHmetria)',
        'Prometer que a paciente nunca mais precisará de medicação'
      ]
    },
    instD: {
      title: 'CHECKLIST — DRGE: AVALIAÇÃO PARA CIRURGIA',
      sections: [
        { h: 'ANAMNESE', items: [
          { item: 'Caracterizou sintomas típicos e atípicos e resposta ao IBP', score: 1, ref: 'Consenso de Lyon 2.0, 2023' },
          { item: 'Pesquisou sinais de alarme (disfagia, perda de peso, sangramento, anemia)', score: 1.5, ref: 'Consenso Brasileiro de DRGE; ACG Guideline 2022' }
        ]},
        { h: 'EXAMES', items: [
          { item: 'Solicitou EDA e interpretou (esofagite LA B, hérnia 3 cm)', score: 1.5, ref: 'Consenso de Lyon 2.0' },
          { item: 'Solicitou pHmetria 24 h e interpretou (exposição ácida > 6% = patológica)', score: 1.5, ref: 'Consenso de Lyon 2.0' },
          { item: 'Solicitou manometria esofágica antes da cirurgia (excluir acalasia)', score: 2, ref: 'SAGES Guidelines for GERD, 2021' }
        ]},
        { h: 'CONDUTA', items: [
          { item: 'Reconheceu indicação cirúrgica (dependência de IBP, doença comprovada)', score: 1, ref: 'SAGES 2021; ACG 2022' },
          { item: 'Indicou hiatoplastia + fundoplicatura laparoscópica (Nissen) e citou Toupet se hipomotilidade', score: 1, ref: 'SAGES 2021' },
          { item: 'Orientou efeitos adversos (disfagia, gas-bloat) e possibilidade de recidiva', score: 0.5, ref: 'SAGES 2021' }
        ]}
      ]
    }
  },

  // CASO 3 — CÂNCER DE ESÔFAGO
  {
    id: 'CD-3',
    title: 'Dificuldade para engolir que piora a cada semana',
    sub: 'Ambulatório — Cirurgia do Aparelho Digestivo',
    tema: 'Cirurgia Digestiva',
    topic: 'Câncer de esôfago (carcinoma espinocelular)',
    level: 'moderado',
    duracao: '5 minutos',
    cardAccent: '#2E7D32',
    instA: {
      scenario: 'Ambulatório de cirurgia. Consulta de primeira vez.',
      patient: 'Valdir, 63 anos, sexo masculino, ex-garçom.',
      complaint: 'Dificuldade para engolir há 3 meses, primeiro com carne e pão, e agora até com alimentos pastosos, com emagrecimento.',
      tasks: [
        'Realize anamnese dirigida.',
        'Formule a hipótese diagnóstica e solicite a investigação diagnóstica e de estadiamento.',
        'Cite a conduta terapêutica geral e as medidas de suporte.'
      ]
    },
    instB: {
      vitals: { PA: '118/72 mmHg', FC: '86 bpm', FR: '16 irpm', Tax: '36,4 °C', Peso: '58 kg (há 3 meses: 68 kg)', Altura: '1,72 m', IMC: '19,6 kg/m²' },
      physicalGeneral: 'Emagrecido, hipocorado 1+/4+, hidratado.',
      physicalSeg: 'PESCOÇO: sem linfonodomegalias; linfonodo supraclavicular esquerdo não palpável | ABDOME: escavado, sem massas ou visceromegalias | ORAL: dentes em mau estado de conservação',
      labs: [
        { test: 'Hemoglobina', val: '10,8 g/dL', ref: '13–17 g/dL', alt: true },
        { test: 'Albumina', val: '3,0 g/dL', ref: '3,5–5,0 g/dL', alt: true }
      ],
      image: 'ENDOSCOPIA DIGESTIVA ALTA (entregar se solicitada): lesão vegetante e ulcerada, friável, a 28–33 cm da arcada dentária superior (terço médio do esôfago), ocupando 2/3 da circunferência e reduzindo a luz, transposta com dificuldade pelo aparelho. Biópsias: CARCINOMA ESPINOCELULAR moderadamente diferenciado.',
      note: 'Entregar sinais vitais no início. EDA com biópsia SOMENTE se solicitada. Se o candidato pedir apenas esofagograma (RX contrastado), entregar: “estenose irregular em terço médio, aspecto em maçã mordida” e perguntar: “e para confirmação diagnóstica?”.',
      patientProfile: 'Valdir, 63 anos, ex-garçom, fuma 1 maço/dia há 45 anos, bebe cachaça diariamente há 30 anos. Toma chimarrão muito quente desde a infância (gaúcho).',
      script: [
        { trigger: 'Queixa principal', speech: 'Doutor, a comida tá agarrando aqui no meio do peito. Primeiro era só carne, agora até sopa grossa tem que ser devagar.' },
        { trigger: 'Perda de peso', speech: 'Perdi uns dez quilos nesses três meses.' },
        { trigger: 'Dor / regurgitação', speech: 'Às vezes a comida volta. Dói um pouco quando engulo.' },
        { trigger: 'Hábitos', speech: 'Fumo desde os 18 anos, um maço por dia. E tomo minha cachacinha todo dia.' },
        { trigger: 'Rouquidão / tosse ao comer', speech: 'Rouco não tô. Tosse quando como não.' },
        { trigger: 'Pergunta ativa', speech: 'É câncer, doutor? Tem como operar?' }
      ],
      hiddenInfo: 'Chimarrão muito quente diariamente — só revela se perguntado sobre bebidas quentes/hábitos alimentares | Sem azia crônica (afasta Barrett/adenocarcinoma) — revela se perguntado',
      actorBehavior: 'Preocupado, desconfiado de que é algo grave. Fica abalado se o candidato for abrupto.'
    },
    instC: {
      diagnosis: 'Carcinoma espinocelular de esôfago torácico médio, com disfagia progressiva e desnutrição (perda > 10% do peso em 3 meses), em tabagista e etilista — estadiamento a definir.',
      differentials: [
        'Adenocarcinoma de esôfago — mais comum no terço distal, associado a DRGE/Barrett e obesidade; a biópsia define CEC.',
        'Estenose péptica — história de refluxo crônico, disfagia sem perda de peso importante.',
        'Acalasia — disfagia para sólidos e líquidos desde o início, longa evolução.',
        'Compressão extrínseca (linfonodos, tumor pulmonar) — avaliada na TC.'
      ],
      context: 'O CEC é o tipo histológico mais comum de câncer de esôfago no Brasil, associado a tabagismo, etilismo e ingestão de bebidas muito quentes (chimarrão), com maior incidência no Sul. Disfagia progressiva com perda de peso é o sintoma cardinal e geralmente indica doença localmente avançada.',
      justify: 'Disfagia progressiva (sólidos → pastosos), perda ponderal, fatores de risco (tabaco, álcool, chimarrão) e EDA com lesão vegetante em terço médio com biópsia de CEC.',
      expectedAnamnesis: 'Padrão de progressão da disfagia | Perda de peso | Odinofagia, regurgitação | Rouquidão, tosse ao deglutir (fístula traqueoesofágica, invasão do nervo laríngeo recorrente) | Tabagismo, etilismo, bebidas quentes | Azia crônica',
      expectedPhysical: 'Estado nutricional | Linfonodos cervicais e supraclaviculares | Hepatomegalia',
      expectedExams: [
        { exam: 'Endoscopia digestiva alta com biópsia', justify: 'Diagnóstico histológico (obrigatória).', expected: 'CEC de terço médio.' },
        { exam: 'TC de tórax e abdome (± pescoço) com contraste', justify: 'Estadiamento: metástases a distância, linfonodos, invasão local.', expected: '—' },
        { exam: 'PET-CT', justify: 'Detectar metástases ocultas em candidatos a tratamento curativo.', expected: '—' },
        { exam: 'Ecoendoscopia', justify: 'Estadiamento T e N locorregional (se não houver metástase).', expected: '—' },
        { exam: 'Broncoscopia (tumores de terço médio/superior) e avaliação otorrinolaringológica', justify: 'Invasão da via aérea e tumores sincrônicos de cabeça e pescoço (cancerização de campo).', expected: '—' }
      ],
      expectedConduct: 'Suporte nutricional prioritário: avaliação nutricional, dieta adaptada, suplementação; se ingesta insuficiente — sonda nasoenteral ou gastrostomia/jejunostomia (evitar comprometer o estômago para reconstrução) | Discussão em equipe multidisciplinar (tumor board) | Doença localmente avançada ressecável (T2–T4a e/ou N+): quimiorradioterapia neoadjuvante (esquema CROSS: carboplatina + paclitaxel + 41,4 Gy) seguida de esofagectomia; no CEC, quimiorradioterapia definitiva é alternativa | Tumor precoce (T1a): ressecção endoscópica | Doença metastática: paliação — prótese esofágica, radioterapia, quimioterapia/imunoterapia | Cessação do tabagismo e etilismo',
      expectedCommunication: 'Comunicar a suspeita/diagnóstico com empatia (SPIKES) | Explicar a necessidade de estadiamento antes de definir a cirurgia | Abordar o estado nutricional',
      criticalErrors: [
        'Tratar como DRGE (prescrever IBP) sem solicitar endoscopia',
        'Não solicitar biópsia (confiar apenas no esofagograma)',
        'Indicar esofagectomia imediata sem estadiamento',
        'Não abordar suporte nutricional'
      ]
    },
    instD: {
      title: 'CHECKLIST — CÂNCER DE ESÔFAGO',
      sections: [
        { h: 'ANAMNESE', items: [
          { item: 'Caracterizou a disfagia (progressiva, sólidos → pastosos) e quantificou a perda de peso', score: 1, ref: 'INCA — Câncer de Esôfago' },
          { item: 'Pesquisou fatores de risco (tabaco, álcool, bebidas quentes, DRGE/Barrett)', score: 1, ref: 'INCA; NCCN Esophageal Cancer, 2024' },
          { item: 'Pesquisou rouquidão/tosse ao deglutir (invasão local/fístula)', score: 0.5, ref: 'Sabiston, 21ª ed.' }
        ]},
        { h: 'DIAGNÓSTICO E ESTADIAMENTO', items: [
          { item: 'Hipótese de neoplasia de esôfago (CEC pelo perfil de risco)', score: 1.5, ref: 'NCCN 2024' },
          { item: 'Solicitou EDA com biópsia', score: 2, ref: 'NCCN 2024' },
          { item: 'Solicitou TC de tórax/abdome ± PET-CT e ecoendoscopia para estadiamento', score: 1.5, ref: 'NCCN 2024' },
          { item: 'Citou broncoscopia e/ou avaliação de cabeça e pescoço', score: 0.5, ref: 'NCCN 2024' }
        ]},
        { h: 'CONDUTA', items: [
          { item: 'Priorizou suporte nutricional (via enteral se necessário)', score: 1, ref: 'ESPEN Guideline on Cancer Patients, 2021' },
          { item: 'Citou neoadjuvância (QRT — CROSS) + esofagectomia ou QRT definitiva, discutido em equipe multidisciplinar', score: 1, ref: 'van Hagen et al., CROSS, NEJM 2012' }
        ]}
      ]
    }
  },

  // CASO 4 — HÉRNIA DE PAREDE ABDOMINAL (INGUINAL)
  {
    id: 'CD-4',
    title: 'Caroço na virilha que aparece ao fazer força',
    sub: 'Ambulatório — Cirurgia Geral',
    tema: 'Cirurgia Digestiva',
    topic: 'Hérnia inguinal',
    level: 'fácil',
    duracao: '5 minutos',
    cardAccent: '#2E7D32',
    instA: {
      scenario: 'Ambulatório de cirurgia geral.',
      patient: 'Edson, 52 anos, sexo masculino, carregador em depósito de materiais de construção.',
      complaint: 'Abaulamento na virilha direita há 6 meses, que aparece quando faz força e some quando deita, com desconforto no fim do dia.',
      tasks: [
        'Realize o exame físico da região inguinal, verbalizando as manobras (achados fornecidos mediante solicitação).',
        'Formule o diagnóstico e os diferenciais.',
        'Proponha a conduta e oriente sinais de alarme.'
      ]
    },
    instB: {
      vitals: { PA: '128/82 mmHg', FC: '72 bpm', FR: '14 irpm', Peso: '80 kg', Altura: '1,74 m', IMC: '26,4 kg/m²' },
      physicalGeneral: 'Bom estado geral.',
      physicalSeg: 'REGIÃO INGUINAL DIREITA — PACIENTE EM PÉ: abaulamento de 4 cm acima do ligamento inguinal, que aumenta à manobra de Valsalva/tosse e desce em direção ao escroto | PALPAÇÃO PELO ANEL INGUINAL EXTERNO (invaginando a pele do escroto com o dedo): impulso sentido na POLPA do dedo à tosse | REDUTIBILIDADE: em decúbito dorsal, o conteúdo reduz-se espontaneamente; indolor | ESCROTO: testículos tópicos, sem massas; transiluminação negativa | REGIÃO INGUINAL ESQUERDA: sem abaulamento | REGIÃO FEMORAL: sem abaulamento abaixo do ligamento inguinal',
      labs: [],
      image: '',
      note: 'Entregar sinais vitais no início. Os achados só são fornecidos se o candidato verbalizar: exame em pé E deitado, manobra de Valsalva/tosse, palpação pelo anel inguinal externo, avaliação de redutibilidade, exame do lado contralateral e da região femoral. Se o candidato pedir USG, informar que “não é necessária para o diagnóstico neste caso”.',
      patientProfile: 'Edson, 52 anos, carregador há 20 anos. Não fuma. Sem tosse crônica, sem constipação, sem dificuldade urinária.',
      script: [
        { trigger: 'Queixa principal', speech: 'Doutor, tem um caroço na virilha direita que estufa quando eu pego peso, e quando eu deito ele some.' },
        { trigger: 'Dor', speech: 'Incomoda no fim do dia, um peso. Mas não é dor forte.' },
        { trigger: 'Episódio de não redução', speech: 'Uma vez ele ficou um tempinho sem voltar, mas aí deitei e voltou sozinho.' },
        { trigger: 'Fatores de esforço abdominal', speech: 'Tosse crônica eu não tenho. Intestino funciona bem. Urino normal.' },
        { trigger: 'Pergunta ativa', speech: 'Precisa operar? Posso continuar trabalhando carregando peso?' }
      ],
      hiddenInfo: 'Um episódio em que a hérnia ficou alguns minutos sem reduzir — só revela se perguntado se o caroço já “travou”/não voltou | Trabalha carregando sacos de cimento — revela se perguntado sobre a profissão',
      actorBehavior: 'Colaborativo, preocupado com o afastamento do trabalho.'
    },
    instC: {
      diagnosis: 'Hérnia inguinal direita redutível, sintomática, provavelmente indireta (impulso na polpa do dedo, trajeto em direção ao escroto) — não complicada.',
      differentials: [
        'Hérnia inguinal direta — impulso na lateral do dedo; abaulamento mais medial e arredondado; distinção clínica é pouco precisa e não muda a conduta.',
        'Hérnia femoral — abaulamento ABAIXO do ligamento inguinal, mais comum em mulheres; alto risco de encarceramento.',
        'Hidrocele / cisto de cordão — transiluminação positiva, não redutível, não varia com Valsalva.',
        'Linfonodomegalia inguinal / varicocele / lipoma de cordão — não reduzem e não têm impulso à tosse.'
      ],
      context: 'Hérnias inguinais representam ~75% das hérnias de parede, com predomínio em homens (risco ao longo da vida de 27%). A hérnia indireta é a mais comum em ambos os sexos.',
      justify: 'Abaulamento acima do ligamento inguinal, redutível, que aumenta com Valsalva, com impulso à tosse palpado pelo anel inguinal externo.',
      expectedAnamnesis: 'Tempo de evolução, dor, redutibilidade | Episódios de encarceramento | Fatores de aumento da pressão abdominal (tosse crônica, constipação, prostatismo, esforço físico) | Ocupação',
      expectedPhysical: 'Exame em pé e deitado | Valsalva/tosse | Palpação pelo anel inguinal externo | Redutibilidade | Exame contralateral, região femoral e escroto',
      expectedExams: [
        { exam: 'Diagnóstico clínico', justify: 'Exame de imagem só se dúvida diagnóstica (USG; RM se dor inguinal oculta).', expected: '—' },
        { exam: 'Exames pré-operatórios conforme idade/comorbidades', justify: 'Avaliação de risco cirúrgico.', expected: '—' }
      ],
      expectedConduct: 'Hernioplastia inguinal eletiva com tela: técnica de Lichtenstein (aberta) ou laparoscópica (TEP/TAPP) — homem sintomático tem indicação cirúrgica (conduta expectante só para homens assintomáticos/oligossintomáticos) | Orientações: sinais de encarceramento/estrangulamento — dor intensa, abaulamento que não reduz, vermelhidão, vômitos, parada de eliminação de fezes/flatos → procurar PS imediatamente | Retorno às atividades: atividades leves precoces; esforço intenso em ~2–4 semanas conforme tolerância | NÃO usar funda como tratamento definitivo',
      expectedCommunication: 'Explicar o que é hérnia e por que operar | Orientar sinais de alarme | Abordar o retorno ao trabalho',
      criticalErrors: [
        'Não examinar o paciente em ortostatismo',
        'Não orientar sinais de encarceramento/estrangulamento',
        'Indicar funda/“cinta” como tratamento definitivo',
        'Não diferenciar de hérnia femoral (examinar abaixo do ligamento inguinal)'
      ]
    },
    instD: {
      title: 'CHECKLIST — HÉRNIA INGUINAL',
      sections: [
        { h: 'EXAME FÍSICO', items: [
          { item: 'Examinou em pé e deitado, com manobra de Valsalva/tosse', score: 1.5, ref: 'HerniaSurge Group — International Guidelines, 2018' },
          { item: 'Palpou pelo anel inguinal externo e avaliou redutibilidade', score: 1.5, ref: 'HerniaSurge 2018' },
          { item: 'Examinou lado contralateral, região femoral e escroto', score: 1, ref: 'HerniaSurge 2018' }
        ]},
        { h: 'DIAGNÓSTICO', items: [
          { item: 'Diagnosticou hérnia inguinal direita redutível (citou provável indireta)', score: 1.5, ref: 'Sabiston, 21ª ed.' },
          { item: 'Citou diferenciais (femoral, hidrocele, linfonodo)', score: 0.5, ref: 'Sabiston, 21ª ed.' },
          { item: 'Perguntou sobre fatores de aumento da pressão abdominal e episódios de encarceramento', score: 1, ref: 'HerniaSurge 2018' }
        ]},
        { h: 'CONDUTA', items: [
          { item: 'Indicou hernioplastia eletiva com tela (Lichtenstein ou laparoscópica)', score: 1.5, ref: 'HerniaSurge 2018' },
          { item: 'Orientou sinais de encarceramento/estrangulamento', score: 1.5, ref: 'HerniaSurge 2018' }
        ]}
      ]
    }
  },

  // CASO 5 — COLECISTITE AGUDA
  {
    id: 'CD-5',
    title: 'Dor do lado direito da barriga com febre após feijoada',
    sub: 'PS — Pronto-Socorro',
    tema: 'Cirurgia Digestiva',
    topic: 'Colecistite aguda litiásica',
    level: 'fácil',
    duracao: '5 minutos',
    cardAccent: '#2E7D32',
    instA: {
      scenario: 'Pronto-socorro, domingo à noite.',
      patient: 'Sandra, 44 anos, sexo feminino, cabeleireira.',
      complaint: 'Dor em lado direito da barriga há 20 horas, iniciada após almoço com feijoada, com febre e vômitos.',
      tasks: [
        'Realize o exame físico abdominal dirigido, verbalizando as manobras (achados mediante solicitação).',
        'Interprete os exames, formule o diagnóstico e classifique a gravidade (Tóquio 2018).',
        'Proponha a conduta.'
      ]
    },
    instB: {
      vitals: { PA: '126/80 mmHg', FC: '102 bpm', FR: '18 irpm', Tax: '38,3 °C', Peso: '74 kg', Altura: '1,62 m', IMC: '28,2 kg/m²' },
      physicalGeneral: 'Bom estado geral, anictérica, desidratada 1+/4+.',
      physicalSeg: 'ABDOME: plano, ruídos hidroaéreos presentes, dor à palpação em hipocôndrio direito com defesa localizada; SINAL DE MURPHY POSITIVO (interrupção da inspiração profunda à palpação do ponto cístico); sem massa palpável; sem sinais de peritonite difusa; sem dor em fossa ilíaca direita | Giordano negativo',
      labs: [
        { test: 'Leucócitos', val: '14.500/mm³', ref: '4.000–11.000/mm³', alt: true },
        { test: 'PCR', val: '68 mg/L', ref: '< 5 mg/L', alt: true },
        { test: 'Bilirrubina total', val: '0,9 mg/dL', ref: '< 1,2 mg/dL', alt: false },
        { test: 'Fosfatase alcalina / GGT', val: '110 / 58 U/L', ref: '< 120 / < 50 U/L', alt: false },
        { test: 'AST / ALT', val: '32 / 38 U/L', ref: '< 40 U/L', alt: false },
        { test: 'Lipase', val: '42 U/L', ref: '< 60 U/L', alt: false },
        { test: 'Creatinina / plaquetas / INR', val: '0,8 mg/dL / 260.000 / 1,0', ref: 'Normais', alt: false }
      ],
      image: 'ULTRASSONOGRAFIA DE ABDOME (entregar se solicitada): vesícula biliar distendida, parede espessada (5 mm) com aspecto em dupla camada, cálculo de 2 cm impactado no infundíbulo, pequena lâmina de líquido perivesicular; sinal de Murphy ultrassonográfico positivo. Vias biliares intra e extra-hepáticas não dilatadas (colédoco 4 mm).',
      note: 'Entregar sinais vitais no início; exame físico, exames laboratoriais e USG SOMENTE se solicitados. Se o candidato indicar CPRE, ANOTAR como conduta inadequada (sem indicação).',
      patientProfile: 'Sandra, 44 anos, cabeleireira, 3 filhos, sobrepeso. Já teve episódios de dor após comida gordurosa que passavam em poucas horas. Sem comorbidades.',
      script: [
        { trigger: 'Queixa principal', speech: 'Comecei com uma dor aqui do lado direito depois da feijoada de ontem. Dessa vez não passou, e tô com febre.' },
        { trigger: 'Episódios prévios', speech: 'Já tive essa dor outras vezes, depois de comer gordura, mas passava em duas, três horas.' },
        { trigger: 'Irradiação', speech: 'Às vezes vai pras costas, pro ombro direito.' },
        { trigger: 'Icterícia / urina', speech: 'Não fiquei amarela, e a urina tá normal.' },
        { trigger: 'Pergunta ativa', speech: 'É pedra na vesícula? Dá pra só tomar remédio e operar depois, nas férias?' }
      ],
      hiddenInfo: 'Episódios prévios de cólica biliar autolimitados — só revela se perguntada sobre dor semelhante antes | Quer adiar a cirurgia para as férias (daqui a 3 meses) — revela na pergunta ativa',
      actorBehavior: 'Incomodada pela dor, colaborativa; resiste à ideia de operar agora por causa do salão.'
    },
    instC: {
      diagnosis: 'Colecistite aguda litiásica, grau I (leve) pela classificação de Tóquio 2018, sem coledocolitíase.',
      differentials: [
        'Cólica biliar — dor < 6 h, sem febre, leucocitose ou sinais inflamatórios na USG.',
        'Colangite aguda — febre + icterícia + dor (tríade de Charcot); bilirrubinas e via biliar normais aqui.',
        'Pancreatite aguda biliar — lipase normal.',
        'Apendicite retrocecal / pielonefrite direita / úlcera péptica — afastadas pelo exame e USG.'
      ],
      context: 'A colecistite aguda é a complicação mais comum da colelitíase (obstrução do ducto cístico). Tóquio 2018: diagnóstico = sinal local (Murphy, dor/massa em HCD) + sinal sistêmico (febre, PCR, leucocitose) + imagem característica.',
      justify: 'Murphy positivo + febre, leucocitose e PCR elevada + USG com parede espessada, cálculo impactado, líquido perivesicular e Murphy ultrassonográfico = diagnóstico definitivo. Grau I: sem disfunção orgânica (grau III) e sem leucócitos > 18.000, massa palpável, evolução > 72 h ou inflamação local grave (grau II).',
      expectedAnamnesis: 'Características e duração da dor (> 6 h) | Febre, vômitos | Episódios prévios de cólica biliar | Icterícia, colúria, acolia | Comorbidades',
      expectedPhysical: 'Palpação do hipocôndrio direito | Sinal de Murphy | Pesquisa de massa e peritonite | Pesquisa de icterícia',
      expectedExams: [
        { exam: 'Ultrassonografia de abdome', justify: 'Exame de escolha para colecistite.', expected: 'Sinais de colecistite aguda.' },
        { exam: 'Hemograma, PCR, bilirrubinas, FA/GGT, transaminases, lipase, função renal, coagulograma', justify: 'Gravidade (Tóquio) e afastar coledocolitíase/pancreatite.', expected: 'Leucocitose e PCR elevadas; restante normal.' }
      ],
      expectedConduct: 'Internação, jejum inicial, hidratação venosa, analgesia (dipirona; AINE como cetoprofeno; opioide se necessário), antiemético | Antibiótico: ex.: ceftriaxona + metronidazol ou amoxicilina-clavulanato/ampicilina-sulbactam (em grau I, pode ser suspenso após a cirurgia) | Colecistectomia videolaparoscópica PRECOCE, na mesma internação, idealmente nas primeiras 72 h (até 7–10 dias do início dos sintomas) | CPRE não indicada (sem coledocolitíase) | Explicar que adiar a cirurgia aumenta risco de recorrência e complicações',
      expectedCommunication: 'Explicar o diagnóstico e a necessidade de cirurgia nesta internação | Negociar com empatia a preocupação com o trabalho',
      criticalErrors: [
        'Dar alta com analgésico e cirurgia eletiva ambulatorial',
        'Não pesquisar o sinal de Murphy / não solicitar USG',
        'Indicar CPRE sem evidência de coledocolitíase/colangite',
        'Não prescrever antibiótico'
      ]
    },
    instD: {
      title: 'CHECKLIST — COLECISTITE AGUDA',
      sections: [
        { h: 'EXAME E DIAGNÓSTICO', items: [
          { item: 'Pesquisou o sinal de Murphy e sinais de peritonite/icterícia', score: 1.5, ref: 'Tokyo Guidelines 2018 (TG18)' },
          { item: 'Solicitou USG de abdome e interpretou os achados', score: 1.5, ref: 'TG18' },
          { item: 'Diagnosticou colecistite aguda litiásica (critérios A + B + C de Tóquio)', score: 1.5, ref: 'TG18' },
          { item: 'Classificou como grau I (leve)', score: 1, ref: 'TG18' },
          { item: 'Afastou coledocolitíase/colangite e pancreatite (bilirrubinas, enzimas, lipase)', score: 1, ref: 'TG18' }
        ]},
        { h: 'CONDUTA', items: [
          { item: 'Internação, hidratação, analgesia e antibiótico', score: 1.5, ref: 'TG18; WSES 2020' },
          { item: 'Indicou colecistectomia videolaparoscópica precoce na mesma internação', score: 2, ref: 'TG18; WSES Acute Calculous Cholecystitis, 2020' }
        ]}
      ]
    }
  },

  // CASO 6 — PANCREATITE AGUDA
  {
    id: 'CD-6',
    title: 'Dor forte em faixa na parte de cima da barriga',
    sub: 'PS — Pronto-Socorro',
    tema: 'Cirurgia Digestiva',
    topic: 'Pancreatite aguda biliar',
    level: 'moderado',
    duracao: '5 minutos',
    cardAccent: '#2E7D32',
    instA: {
      scenario: 'Pronto-socorro, 8h.',
      patient: 'Lúcia, 56 anos, sexo feminino, costureira.',
      complaint: 'Dor intensa em parte superior do abdome, em faixa, irradiando para as costas, há 10 horas, com vômitos.',
      tasks: [
        'Com base nos dados fornecidos, estabeleça o diagnóstico (justificando os critérios) e a provável etiologia.',
        'Avalie a gravidade.',
        'Prescreva a conduta inicial e defina o tratamento da causa.'
      ]
    },
    instB: {
      vitals: { PA: '128/78 mmHg', FC: '104 bpm', FR: '20 irpm', Tax: '37,6 °C', SpO2: '96%', Peso: '70 kg' },
      physicalGeneral: 'Regular estado geral, desidratada 2+/4+, anictérica, lúcida.',
      physicalSeg: 'ABDOME: discretamente distendido, ruídos hidroaéreos diminuídos, dor à palpação em epigástrio e hipocôndrios, sem descompressão brusca dolorosa; sem equimoses periumbilical (Cullen) ou em flancos (Grey-Turner)',
      labs: [
        { test: 'Lipase', val: '2.150 U/L', ref: '< 60 U/L', alt: true },
        { test: 'Leucócitos', val: '13.200/mm³', ref: '4.000–11.000/mm³', alt: true },
        { test: 'Hematócrito', val: '44%', ref: '36–46%', alt: false },
        { test: 'Ureia / creatinina', val: '38 / 0,9 mg/dL', ref: '< 40 / < 1,1 mg/dL', alt: false },
        { test: 'ALT / AST', val: '312 / 260 U/L', ref: '< 40 U/L', alt: true },
        { test: 'Bilirrubina total', val: '1,6 mg/dL', ref: '< 1,2 mg/dL', alt: true },
        { test: 'Triglicerídeos / cálcio', val: '160 mg/dL / 9,2 mg/dL', ref: '< 150 / 8,5–10,5', alt: false },
        { test: 'Gasometria arterial', val: 'pH 7,38; PaO₂ 88 mmHg', ref: 'Normal', alt: false }
      ],
      image: 'ULTRASSONOGRAFIA DE ABDOME (entregar se solicitada): vesícula com múltiplos cálculos pequenos (3–5 mm), parede fina; colédoco de 6 mm sem cálculos visíveis; pâncreas parcialmente visualizado por interposição gasosa, aumentado de volume.',
      note: 'Entregar sinais vitais, exame físico e exames laboratoriais no início. USG somente se solicitada. Se o candidato pedir TC de abdome na admissão, informar: “Por que o senhor quer a TC agora?” — aceitar apenas se justificar dúvida diagnóstica. Se prescrever antibiótico profilático, ANOTAR como erro.',
      patientProfile: 'Lúcia, 56 anos, costureira, não bebe álcool, não fuma. Sabe que tem “pedra na vesícula” há 2 anos, aguardando cirurgia.',
      script: [
        { trigger: 'Queixa principal', speech: 'Uma dor muito forte aqui em cima, como uma faixa, que vai pras costas. Já vomitei várias vezes.' },
        { trigger: 'Álcool', speech: 'Não bebo nada, doutor.' },
        { trigger: 'Vesícula', speech: 'Descobri que tinha pedra na vesícula faz dois anos, mas a cirurgia nunca saiu.' },
        { trigger: 'Pergunta ativa', speech: 'Vou ter que ficar sem comer muitos dias? Vão tirar a vesícula?' }
      ],
      hiddenInfo: 'Colelitíase conhecida aguardando cirurgia há 2 anos — só revela se perguntada sobre vesícula/doenças prévias',
      actorBehavior: 'Com dor, encurvada para frente (posição de alívio), colaborativa.'
    },
    instC: {
      diagnosis: 'Pancreatite aguda de etiologia biliar, forma LEVE (Atlanta revisada — sem falência orgânica ou complicações locais), BISAP 1, sem colangite.',
      differentials: [
        'Úlcera péptica perfurada — dor súbita, abdome em tábua, pneumoperitônio; lipase pode subir, mas não > 3x.',
        'Colecistite aguda — Murphy positivo e sinais inflamatórios na vesícula; lipase normal.',
        'Colangite aguda — febre, icterícia e dor; exigiria CPRE urgente — não há critérios aqui.',
        'IAM inferior / isquemia mesentérica — considerar em idosos com fatores de risco.'
      ],
      context: 'Litíase biliar e álcool respondem por ~70–80% das pancreatites agudas. A maioria (~80%) é leve e autolimitada. Elevação de ALT > 150 U/L nas primeiras 48 h tem alto valor preditivo positivo para etiologia biliar.',
      justify: 'Critérios de Atlanta (2 de 3): dor típica (epigástrica em faixa, irradiada para o dorso) + lipase > 3x o LSN (2.150) → diagnóstico sem necessidade de TC. Etiologia biliar: colelitíase, ALT > 150, ausência de etilismo, TG e cálcio normais. Gravidade: sem falência orgânica (PaO₂, creatinina, PA normais) → leve. BISAP = 1 ponto (SIRS presente: FC > 90 e leucócitos > 12.000; ureia normal, sem alteração mental, idade < 60, sem derrame pleural) — escore < 3 = baixo risco de mortalidade.',
      expectedAnamnesis: 'Características da dor | Etilismo | Colelitíase conhecida | Medicamentos | Hipertrigliceridemia | Procedimentos recentes (CPRE)',
      expectedPhysical: 'Sinais de gravidade (Cullen, Grey-Turner, desidratação, irritação peritoneal) | Icterícia',
      expectedExams: [
        { exam: 'Lipase (ou amilase)', justify: 'Diagnóstico (> 3x LSN).', expected: '2.150 U/L.' },
        { exam: 'USG de abdome', justify: 'Pesquisar etiologia biliar em todos os pacientes.', expected: 'Colelitíase.' },
        { exam: 'Ureia, creatinina, hematócrito, gasometria, cálcio, triglicerídeos, função hepática', justify: 'Gravidade (BISAP, Marshall) e etiologia.', expected: 'Sem falência orgânica.' },
        { exam: 'TC com contraste', justify: 'NÃO rotineira na admissão; indicar se dúvida diagnóstica ou após 72–96 h se não houver melhora (avaliar necrose).', expected: '—' }
      ],
      expectedConduct: 'Hidratação venosa com Ringer lactato, de forma MODERADA e guiada por metas (ex.: bolus de 10 mL/kg se hipovolemia, seguido de 1,5 mL/kg/h; reavaliar em 12–24 h — evitar hidratação agressiva, estudo WATERFALL) | Analgesia (dipirona; opioide se necessário) e antiemético | Dieta oral precoce (em 24–48 h, conforme tolerância), sem jejum prolongado | SEM antibiótico profilático | Monitorização de diurese e sinais vitais | Tratamento da causa: colecistectomia videolaparoscópica NA MESMA INTERNAÇÃO, após melhora clínica, na pancreatite biliar leve (estudo PONCHO) | CPRE apenas se colangite associada ou obstrução biliar persistente',
      expectedCommunication: 'Explicar o diagnóstico e a relação com os cálculos | Explicar que a vesícula será retirada antes da alta para evitar novas crises',
      criticalErrors: [
        'Prescrever antibiótico profilático na pancreatite leve',
        'Solicitar TC de rotina na admissão sem dúvida diagnóstica',
        'Não indicar colecistectomia na mesma internação',
        'Indicar CPRE de rotina sem colangite',
        'Manter jejum prolongado/nutrição parenteral sem indicação'
      ]
    },
    instD: {
      title: 'CHECKLIST — PANCREATITE AGUDA BILIAR',
      sections: [
        { h: 'DIAGNÓSTICO', items: [
          { item: 'Diagnosticou pancreatite aguda pelos critérios de Atlanta (dor típica + lipase > 3x)', score: 1.5, ref: 'Atlanta Revisada, Gut 2013' },
          { item: 'Identificou etiologia biliar (colelitíase, ALT > 150, sem etilismo, TG e cálcio normais)', score: 1.5, ref: 'ACG Guideline Acute Pancreatitis, 2024' },
          { item: 'Classificou gravidade como leve (sem falência orgânica) e citou escore (BISAP/Marshall)', score: 1.5, ref: 'Atlanta 2013' }
        ]},
        { h: 'CONDUTA INICIAL', items: [
          { item: 'Hidratação com Ringer lactato moderada e guiada por metas', score: 1.5, ref: 'de-Madaria et al., WATERFALL, NEJM 2022' },
          { item: 'Analgesia e dieta oral precoce', score: 1, ref: 'ACG 2024; IAP/APA 2013' },
          { item: 'Não prescreveu antibiótico profilático e não pediu TC de rotina', score: 1, ref: 'ACG 2024' }
        ]},
        { h: 'TRATAMENTO DA CAUSA', items: [
          { item: 'Indicou colecistectomia na mesma internação', score: 1.5, ref: 'da Costa et al., PONCHO, Lancet 2015' },
          { item: 'Restringiu CPRE à colangite/obstrução persistente', score: 0.5, ref: 'ACG 2024' }
        ]}
      ]
    }
  },

  // CASO 7 — DOENÇA HEMORROIDÁRIA
  {
    id: 'CD-7',
    title: 'Sangue vivo nas fezes e “bolinha” que sai do ânus',
    sub: 'Ambulatório — Coloproctologia',
    tema: 'Cirurgia Digestiva',
    topic: 'Doença hemorroidária',
    level: 'fácil',
    duracao: '5 minutos',
    cardAccent: '#2E7D32',
    instA: {
      scenario: 'Ambulatório de coloproctologia.',
      patient: 'Márcio, 52 anos, sexo masculino, motorista de ônibus.',
      complaint: 'Sangramento vermelho vivo ao evacuar e “bolinha” que sai pelo ânus durante a evacuação há 1 ano.',
      tasks: [
        'Realize anamnese dirigida e descreva o exame proctológico a ser realizado (achados fornecidos mediante solicitação).',
        'Formule o diagnóstico e classifique.',
        'Proponha o tratamento e a investigação complementar.'
      ]
    },
    instB: {
      vitals: { PA: '132/84 mmHg', FC: '76 bpm', FR: '14 irpm', Peso: '90 kg', Altura: '1,75 m', IMC: '29,4 kg/m²' },
      physicalGeneral: 'Bom estado geral, corado.',
      physicalSeg: 'INSPEÇÃO ANAL (em posição de Sims/genupeitoral, com consentimento e acompanhante): sem fissuras, sem fístulas, plicomas discretos; ao esforço evacuatório: prolapso de mamilos hemorroidários internos | TOQUE RETAL: esfíncter normotônico, sem massas palpáveis, sem dor; dedo de luva com fezes normais, sem sangue | ANUSCOPIA: mamilos hemorroidários internos congestos às 3, 7 e 11 horas, com prolapso que retorna somente com REDUÇÃO MANUAL (conforme relato)',
      labs: [
        { test: 'Hemoglobina', val: '13,8 g/dL', ref: '13–17 g/dL', alt: false }
      ],
      image: '',
      note: 'Entregar sinais vitais no início. Achados do exame proctológico SOMENTE se o candidato descrever inspeção, toque retal e anuscopia, pedindo consentimento e acompanhante. Se o candidato perguntar sobre colonoscopia prévia: “nunca fez”.',
      patientProfile: 'Márcio, 52 anos, motorista de ônibus, passa 10 h sentado, come pouca fibra, bebe pouca água, intestino preso (evacua a cada 3 dias com esforço). Pai faleceu de câncer de intestino aos 70 anos.',
      script: [
        { trigger: 'Queixa principal', speech: 'Doutor, quando eu evacuo sai sangue vermelhinho, pinga no vaso. E sai uma bolinha que eu tenho que empurrar de volta com o dedo.' },
        { trigger: 'Dor', speech: 'Dor não tenho, só um incômodo e coceira.' },
        { trigger: 'Hábito intestinal', speech: 'Meu intestino é preso, vou a cada três dias, e faço muita força.' },
        { trigger: 'Alimentação', speech: 'Como muito na rua, quase nada de verdura. Água eu bebo pouco, por causa do trabalho.' },
        { trigger: 'Perda de peso / mudança do hábito', speech: 'Não perdi peso. O intestino sempre foi assim.' },
        { trigger: 'Pergunta ativa', speech: 'Isso é hemorroida? Tem que operar? Tenho medo, dizem que dói muito.' }
      ],
      hiddenInfo: 'Pai com câncer colorretal aos 70 anos — só revela se perguntado sobre história familiar | Nunca fez colonoscopia — revela se perguntado',
      actorBehavior: 'Envergonhado, reticente ao exame; aceita se o candidato explicar e pedir consentimento com respeito.'
    },
    instC: {
      diagnosis: 'Doença hemorroidária interna grau III (Goligher — prolapso com redução manual), sintomática (sangramento e prolapso), associada a constipação e hábitos alimentares inadequados; necessidade de colonoscopia (≥ 45 anos, sangramento e história familiar).',
      differentials: [
        'Câncer colorretal — sangramento retal em > 45 anos com história familiar: excluir com colonoscopia.',
        'Fissura anal — dor intensa à evacuação; não presente.',
        'Prolapso retal — prolapso de toda a parede, com pregas concêntricas.',
        'Pólipos/papila hipertrófica — avaliados pela anuscopia/colonoscopia.'
      ],
      context: 'A doença hemorroidária é muito prevalente e associada a constipação, esforço evacuatório, baixa ingestão de fibras e permanência sentado. O sangramento nunca deve ser atribuído às hemorroidas sem excluir neoplasia quando há fatores de risco.',
      justify: 'Sangramento vermelho vivo indolor ao final da evacuação + prolapso que exige redução manual + anuscopia com mamilos internos = hemorroidas internas grau III.',
      expectedAnamnesis: 'Características do sangramento | Prolapso e forma de redução | Dor (diferenciar fissura/trombose) | Hábito intestinal, alimentação e ingesta hídrica | Sinais de alarme: perda de peso, alteração do hábito, anemia | História familiar de CCR e colonoscopia prévia',
      expectedPhysical: 'Consentimento e acompanhante | Inspeção (repouso e esforço) | Toque retal | Anuscopia',
      expectedExams: [
        { exam: 'Colonoscopia', justify: 'Sangramento retal em ≥ 45 anos e história familiar de CCR — excluir neoplasia antes de tratar as hemorroidas.', expected: '—' },
        { exam: 'Hemograma', justify: 'Avaliar anemia.', expected: 'Normal.' }
      ],
      expectedConduct: 'Medidas higienodietéticas para todos: fibras 25–35 g/dia (ou psyllium), ingesta hídrica ≥ 2 L/dia, evitar esforço evacuatório e permanência prolongada no vaso, banho de assento morno | Flebotônicos (diosmina + hesperidina) como adjuvante nas crises | Grau III: ligadura elástica ambulatorial pode ser tentada; hemorroidectomia (Milligan-Morgan/Ferguson) se falha, grau III volumoso/misto ou grau IV | Colonoscopia ANTES do tratamento definitivo | Analgesia pós-operatória multimodal (abordar o medo da dor)',
      expectedCommunication: 'Pedir consentimento para o exame, garantir privacidade e acompanhante | Explicar diagnóstico e opções | Explicar a necessidade de colonoscopia sem alarmar',
      criticalErrors: [
        'Atribuir o sangramento às hemorroidas sem toque retal/anuscopia',
        'Não indicar colonoscopia em paciente ≥ 45 anos com sangramento e história familiar',
        'Realizar exame proctológico sem consentimento',
        'Não orientar medidas higienodietéticas'
      ]
    },
    instD: {
      title: 'CHECKLIST — DOENÇA HEMORROIDÁRIA',
      sections: [
        { h: 'ANAMNESE E EXAME', items: [
          { item: 'Caracterizou sangramento e prolapso (forma de redução)', score: 1, ref: 'ASCRS Clinical Practice Guidelines — Hemorrhoids, 2018' },
          { item: 'Investigou hábito intestinal, dieta e sinais de alarme', score: 1, ref: 'ASCRS 2018' },
          { item: 'Perguntou história familiar de CCR e colonoscopia prévia', score: 1, ref: 'SBCP; USPSTF 2021' },
          { item: 'Pediu consentimento e descreveu inspeção, toque retal e anuscopia', score: 1.5, ref: 'ASCRS 2018' }
        ]},
        { h: 'DIAGNÓSTICO', items: [
          { item: 'Diagnosticou hemorroidas internas grau III (Goligher)', score: 1.5, ref: 'Classificação de Goligher' }
        ]},
        { h: 'CONDUTA', items: [
          { item: 'Orientou medidas higienodietéticas (fibras, água, evitar esforço, banho de assento)', score: 1.5, ref: 'ASCRS 2018' },
          { item: 'Indicou ligadura elástica e/ou hemorroidectomia conforme grau', score: 1, ref: 'ASCRS 2018' },
          { item: 'Solicitou colonoscopia antes do tratamento definitivo', score: 1.5, ref: 'ASCRS 2018; SBCP' }
        ]}
      ]
    }
  }
];

export default digestiva5a;
