// Clínica Cirúrgica — estações de 5 minutos — CABEÇA E PESCOÇO
const cabecaPescoco5 = [
  // CASO 1 — NEOPLASIA BENIGNA E MALIGNA DE CABEÇA E PESCOÇO (TUMOR DE PARÓTIDA)
  {
    id: 'CP-1',
    title: 'Caroço na frente da orelha que cresce devagar há 2 anos',
    sub: 'Ambulatório — Cirurgia de Cabeça e Pescoço',
    tema: 'Cabeça e Pescoço',
    topic: 'Tumor de parótida — benigno x maligno (adenoma pleomórfico)',
    level: 'moderado',
    duracao: '5 minutos',
    cardAccent: '#6D4C41',
    instA: {
      scenario: 'Ambulatório de cirurgia de cabeça e pescoço. Consulta de primeira vez.',
      patient: 'Cláudia, 45 anos, sexo feminino, professora.',
      complaint: 'Nódulo indolor na região pré-auricular direita, de crescimento lento, há cerca de 2 anos.',
      tasks: [
        'Realize anamnese e exame físico dirigidos, pesquisando sinais que diferenciem neoplasia benigna de maligna (os achados serão fornecidos mediante solicitação).',
        'Formule a hipótese diagnóstica e solicite a investigação.',
        'Proponha o tratamento e oriente a paciente.'
      ]
    },
    instB: {
      vitals: { PA: '122/78 mmHg', FC: '72 bpm', FR: '14 irpm', Tax: '36,4 °C', Peso: '64 kg', Altura: '1,63 m' },
      physicalGeneral: 'Bom estado geral, corada, hidratada.',
      physicalSeg: 'REGIÃO PAROTÍDEA DIREITA: nódulo de 2,5 cm, localizado anterior e inferiormente ao lóbulo da orelha, de consistência fibroelástica, superfície lobulada, MÓVEL, indolor, sem aderência à pele, sem sinais flogísticos | NERVO FACIAL: função preservada nos 5 ramos (enruga a testa, fecha os olhos com força, sorri, assobia, contrai o platisma) — House-Brackmann I | CAVIDADE ORAL / OROFARINGE: óstio do ducto de Stensen sem secreção purulenta; parede lateral da orofaringe sem abaulamento (lobo profundo sem extensão parafaríngea) | PESCOÇO: sem linfonodomegalias palpáveis | PELE DO COURO CABELUDO E FACE: sem lesões suspeitas',
      labs: [],
      image: 'ULTRASSONOGRAFIA DA PARÓTIDA (entregar se solicitada): nódulo sólido, hipoecoico, bem delimitado, de contornos lobulados, 2,4 x 1,8 cm, no lobo superficial da parótida direita, com reforço acústico posterior; sem linfonodos cervicais suspeitos. PAAF (entregar se solicitada): componente epitelial e mioepitelial em matriz condromixoide — compatível com ADENOMA PLEOMÓRFICO (Milão: categoria IVA — neoplasia benigna).',
      note: 'Entregar sinais vitais no início. Exame físico SOMENTE se o candidato descrever a palpação do nódulo E a avaliação do nervo facial / pescoço / cavidade oral. A US e a PAAF só são entregues se solicitadas. Se o candidato indicar biópsia incisional ou “retirada só do caroço” (enucleação), ANOTAR como erro crítico.',
      patientProfile: 'Cláudia, 45 anos, professora de ensino fundamental, casada, 2 filhos. Não fuma. Sem comorbidades. Sem radioterapia prévia em cabeça e pescoço.',
      script: [
        { trigger: 'Queixa principal', speech: 'Apareceu esse carocinho aqui na frente da orelha. No começo era pequenininho, e foi crescendo devagar.' },
        { trigger: 'Dor', speech: 'Não dói nada. Só me incomoda porque dá pra ver.' },
        { trigger: 'Crescimento rápido', speech: 'Não, cresceu bem devagarinho, em dois anos.' },
        { trigger: 'Rosto torto / fraqueza facial', speech: 'Não, meu rosto tá normal, não tenho nada torto.' },
        { trigger: 'Relação com alimentação', speech: 'Não muda quando eu como, não incha nem dói.' },
        { trigger: 'Pergunta ativa', speech: 'Doutor, isso é câncer? Se operar, meu rosto pode ficar paralisado?' }
      ],
      hiddenInfo: 'Medo de cirurgia porque uma vizinha “ficou com a boca torta depois de operar a parótida” — só revela se perguntada sobre preocupações/medos | Sem tabagismo e sem exposição solar intensa — revela se perguntada',
      actorBehavior: 'Ansiosa, mas colaborativa. Tem receio de paralisia facial e pergunta sobre isso de forma insistente.'
    },
    instC: {
      diagnosis: 'Neoplasia benigna de glândula parótida direita (lobo superficial) — adenoma pleomórfico (tumor misto benigno), confirmado por PAAF, sem sinais clínicos de malignidade.',
      differentials: [
        'Carcinoma mucoepidermoide / carcinoma adenoide cístico / carcinoma ex-adenoma pleomórfico — sinais de alarme ausentes: dor, paralisia facial, crescimento rápido, fixação à pele ou planos profundos, linfonodomegalia cervical.',
        'Tumor de Warthin (cistadenolinfoma) — segundo tumor benigno mais comum; típico de homens idosos tabagistas, frequentemente bilateral; a PAAF diferencia.',
        'Linfonodo intraparotídeo metastático (ex.: CEC cutâneo ou melanoma de couro cabeludo/face) — examinar a pele da face e do couro cabeludo.',
        'Parotidite / sialolitíase — sai: ausência de dor, de relação com a alimentação e de sinais inflamatórios.'
      ],
      context: 'Cerca de 80% dos tumores salivares ocorrem na parótida e cerca de 80% deles são benignos; o adenoma pleomórfico é o mais comum. Quanto menor a glândula, maior a chance de malignidade (submandibular ~50%, glândulas menores ~70–80%).',
      justify: 'Nódulo pré-auricular de crescimento lento, indolor, móvel, fibroelástico, com nervo facial íntegro e sem linfonodos = perfil benigno. US com nódulo sólido lobulado e PAAF com matriz condromixoide confirmam adenoma pleomórfico.',
      expectedAnamnesis: 'Tempo e velocidade de crescimento | Dor | Paralisia/fraqueza facial | Relação com alimentação | Tabagismo, radioterapia prévia | Lesões de pele em face/couro cabeludo',
      expectedPhysical: 'Palpação do nódulo (tamanho, consistência, mobilidade, aderência) | Avaliação dos ramos do nervo facial | Exame da cavidade oral/orofaringe (lobo profundo) | Palpação das cadeias linfonodais cervicais',
      expectedExams: [
        { exam: 'Ultrassonografia (ou RM, preferida para lobo profundo/planejamento)', justify: 'Caracterizar o nódulo e sua relação com a glândula.', expected: 'Nódulo sólido lobulado no lobo superficial.' },
        { exam: 'Punção aspirativa por agulha fina (PAAF) guiada por US', justify: 'Diferencia benigno de maligno e orienta a extensão da cirurgia; não implanta tumor (ao contrário da biópsia incisional).', expected: 'Adenoma pleomórfico.' }
      ],
      expectedConduct: 'Parotidectomia superficial (ou parcial) com identificação e preservação do nervo facial — tratamento de escolha, mesmo para tumor benigno, pelo risco de crescimento contínuo e transformação maligna (carcinoma ex-adenoma pleomórfico, ~5–10% em longo prazo) | NÃO realizar enucleação nem biópsia incisional (alto risco de recidiva por pseudocápsula/implante) | Orientações: risco de paresia facial transitória (~20–40%) e definitiva (< 5%); síndrome de Frey (sudorese gustatória); dormência do lóbulo da orelha (nervo auricular magno) | Em suspeita de malignidade: parotidectomia total ± esvaziamento cervical ± radioterapia',
      expectedCommunication: 'Explicar que a lesão é benigna, mas deve ser retirada | Abordar o medo da paralisia facial com dados honestos | Checar entendimento',
      criticalErrors: [
        'Não avaliar a função do nervo facial',
        'Indicar biópsia incisional ou enucleação do nódulo',
        'Indicar apenas observação para adenoma pleomórfico em paciente jovem',
        'Tratar com antibiótico como se fosse parotidite'
      ]
    },
    instD: {
      title: 'CHECKLIST — TUMOR DE PARÓTIDA (BENIGNO x MALIGNO)',
      sections: [
        { h: 'ANAMNESE E EXAME', items: [
          { item: 'Pesquisou sinais de alarme de malignidade (dor, crescimento rápido, paralisia facial)', score: 1.5, ref: 'NCCN Head and Neck Cancers, 2024' },
          { item: 'Examinou o nódulo (mobilidade, consistência, aderência)', score: 1, ref: 'Cummings Otolaryngology, 7ª ed.' },
          { item: 'Avaliou os ramos do nervo facial', score: 1.5, ref: 'Cummings, 7ª ed.' },
          { item: 'Palpou linfonodos cervicais e examinou cavidade oral/orofaringe', score: 1, ref: 'NCCN 2024' }
        ]},
        { h: 'DIAGNÓSTICO E INVESTIGAÇÃO', items: [
          { item: 'Hipótese de neoplasia benigna de parótida (adenoma pleomórfico), citando diferenciais malignos', score: 1.5, ref: 'OMS — Classificação de Tumores de Cabeça e Pescoço, 2022' },
          { item: 'Solicitou US/RM e PAAF', score: 1.5, ref: 'Sistema de Milão para Citopatologia de Glândulas Salivares, 2023' }
        ]},
        { h: 'CONDUTA E COMUNICAÇÃO', items: [
          { item: 'Indicou parotidectomia superficial com preservação do nervo facial', score: 1, ref: 'Cummings, 7ª ed.; SBCCP' },
          { item: 'Contraindicou biópsia incisional/enucleação', score: 0.5, ref: 'Cummings, 7ª ed.' },
          { item: 'Orientou riscos (paresia facial, Frey) e acolheu o medo da paciente', score: 0.5, ref: 'CFM — Código de Ética Médica, 2019' }
        ]}
      ]
    }
  },

  // CASO 2 — TRAQUEOSTOMIA (EMERGÊNCIA EM PACIENTE TRAQUEOSTOMIZADO)
  {
    id: 'CP-2',
    title: 'Paciente traqueostomizado que começou a dessaturar',
    sub: 'Enfermaria de Cirurgia — chamado da enfermagem',
    tema: 'Cabeça e Pescoço',
    topic: 'Traqueostomia — indicações e manejo da obstrução/deslocamento da cânula',
    level: 'difícil',
    duracao: '5 minutos',
    cardAccent: '#6D4C41',
    instA: {
      scenario: 'Enfermaria de cirurgia, 3h da manhã. A técnica de enfermagem chama você com urgência. Há no quarto: fonte de O₂, aspirador, cateter de aspiração, bolsa-válvula-máscara, máscara facial e máscara pediátrica, kit de traqueostomia com cânula do mesmo tamanho e um número menor, material de intubação orotraqueal, seringa de 10 mL e oxímetro.',
      patient: 'Sr. Álvaro, 63 anos, 6º dia pós-operatório de traqueostomia cirúrgica eletiva (cânula plástica com balonete/cuff e endocânula), realizada por intubação prolongada após AVC. Respira espontaneamente com O₂ por máscara de traqueostomia. Via aérea superior pérvia.',
      complaint: 'Paciente agitado, com desconforto respiratório e saturação caindo.',
      tasks: [
        'Realize o atendimento verbalizando cada passo (os achados serão fornecidos conforme suas ações).',
        'Ao final, cite três indicações de traqueostomia.'
      ]
    },
    instB: {
      vitals: { PA: '158/94 mmHg', FC: '124 bpm', FR: '34 irpm', SpO2: '82% com O₂ pela traqueostomia', Glasgow: '13' },
      physicalGeneral: 'Agitado, sudoreico, com tiragem supraclavicular e intercostal, uso de musculatura acessória.',
      physicalSeg: 'TRAQUEOSTOMIA: cânula em posição aparente; ao colocar a mão/capnógrafo na cânula, fluxo de ar MUITO REDUZIDO; ruído de secreção | AUSCULTA: murmúrio vesicular diminuído globalmente, roncos | SEQUÊNCIA DE RESPOSTAS ÀS AÇÕES: (1) Retirada da endocânula: endocânula com grande rolha de secreção espessa; após retirada, FLUXO DE AR MELHORA PARCIALMENTE | (2) Passagem de cateter de aspiração: o cateter PASSA facilmente pela cânula; aspira-se grande quantidade de secreção espessa | (3) Após aspiração e O₂: SpO₂ sobe para 95%, FR 22 irpm, FC 100 bpm, paciente mais calmo',
      labs: [],
      image: '',
      note: 'Fornecer os achados conforme as ações do candidato, na sequência acima. Se o candidato tentar ventilar com bolsa pela cânula antes de checar a permeabilidade, informar: “há grande resistência, o tórax não expande”. Se o candidato não retirar a endocânula/não aspirar e decidir trocar a cânula às cegas, informar “SpO₂ 75%” e ANOTAR erro crítico. Se o candidato verbalizar desinsuflar o cuff e retirar a cânula: aceitar, desde que antes tenha verificado que o cateter não passa — neste caso o cateter PASSA, logo esse passo não é necessário. Ao final, pedir as indicações de traqueostomia se o candidato não as citar.',
      patientProfile: 'Sr. Álvaro, 63 anos, hipertenso, AVC isquêmico há 3 semanas, intubado por 12 dias; traqueostomizado há 6 dias. Tem secreção espessa e umidificação inadequada nas últimas horas.',
      script: [
        { trigger: 'Ao ser abordado', speech: '(Paciente não consegue falar — aponta para a cânula, faz sinais de falta de ar.)' },
        { trigger: 'Técnica de enfermagem (se questionada)', speech: 'Doutor, ele começou a ficar agitado há uns 10 minutos. O umidificador desconectou e ninguém percebeu. Ele tem muita secreção.' }
      ],
      hiddenInfo: 'O umidificador estava desconectado (secreção espessa) — a técnica de enfermagem só informa se perguntada sobre o que aconteceu antes',
      actorBehavior: 'Paciente agitado, com sinais de desconforto respiratório; melhora visivelmente após aspiração.'
    },
    instC: {
      diagnosis: 'Obstrução da cânula de traqueostomia por rolha de secreção (falta de umidificação), em traqueostomia recente (< 7 dias, trajeto ainda não maturado), resolvida com retirada da endocânula e aspiração.',
      differentials: [
        'Deslocamento/decanulação acidental (falso trajeto) — o cateter de aspiração não passaria; exigiria desinsuflar o cuff e retirar a cânula.',
        'Broncoespasmo — sibilos difusos; o cateter passa e não há rolha.',
        'Pneumotórax — complicação precoce da traqueostomia; MV abolido unilateral e hipertimpanismo.',
        'Sangramento traqueal / fístula traqueoinominada — sangramento pela cânula (sangramento sentinela).'
      ],
      context: 'Obstrução e deslocamento da cânula são as emergências mais comuns em traqueostomizados e causa de mortes evitáveis. Em traqueostomias com menos de 7 dias, o trajeto não está maturado e a reinserção às cegas pode criar falso trajeto.',
      justify: 'Dessaturação súbita com fluxo de ar reduzido pela cânula, secreção espessa e falha da umidificação; melhora após retirada da endocânula (com rolha) e aspiração confirmam obstrução por secreção.',
      expectedAnamnesis: 'Perguntar à equipe: tempo de traqueostomia, tipo de cânula (cuff, endocânula), via aérea superior pérvia, o que aconteceu antes',
      expectedPhysical: 'Avaliar sinais de desconforto, verificar fluxo de ar pela cânula e pela boca, auscultar o tórax',
      expectedExams: [
        { exam: 'Oximetria e capnografia (quando disponível)', justify: 'Monitorizar ventilação e confirmar permeabilidade da via aérea.', expected: 'Melhora da SpO₂ após desobstrução.' },
        { exam: 'Radiografia de tórax (após estabilização)', justify: 'Afastar pneumotórax e checar posição da cânula.', expected: '—' }
      ],
      expectedConduct: 'Algoritmo de emergência em traqueostomia (NTSP — National Tracheostomy Safety Project): 1) chamar ajuda (equipe de via aérea) | 2) O₂ em alto fluxo pela FACE e pela TRAQUEOSTOMIA | 3) avaliar permeabilidade: retirar a endocânula (e válvula de fala/filtro, se houver) | 4) passar cateter de aspiração — se passa, a cânula está pérvia/bem posicionada: aspirar e reavaliar | 5) se o cateter NÃO passa: desinsuflar o cuff; se não melhorar, RETIRAR a cânula | 6) se o paciente não respira após retirada: RCP se sem pulso; ventilar pela boca/nariz (ocluindo o estoma) ou pelo estoma com máscara pediátrica/máscara laríngea | 7) via aérea definitiva: intubação orotraqueal (tubo avançado além do estoma) — em traqueostomia < 7 dias, evitar reinserção às cegas pelo estoma (risco de falso trajeto) | Prevenção: umidificação, aspiração regular, limpeza da endocânula, cânula reserva à beira-leito | Indicações de traqueostomia: ventilação mecânica/intubação prolongada (> 10–14 dias, ou previsão), obstrução de via aérea superior (tumores, trauma de face/laringe, paralisia bilateral de pregas vocais, edema), toalete brônquica em pacientes com muita secreção, proteção da via aérea em rebaixamento crônico de consciência/disfagia neurológica grave, facilitar desmame ventilatório, parte de cirurgias de cabeça e pescoço',
      expectedCommunication: 'Liderança, pedido de ajuda precoce, comunicação clara com a enfermagem | Orientar a equipe sobre umidificação',
      criticalErrors: [
        'Não chamar ajuda / não oferecer O₂ pela face e pela traqueostomia',
        'Ventilar com bolsa através de cânula possivelmente obstruída/deslocada sem checar permeabilidade',
        'Trocar a cânula às cegas em traqueostomia recente (< 7 dias) sem antes retirar a endocânula e passar o cateter',
        'Esquecer que a via aérea superior pode ser usada para oxigenar/intubar'
      ]
    },
    instD: {
      title: 'CHECKLIST — EMERGÊNCIA EM TRAQUEOSTOMIA',
      sections: [
        { h: 'ABORDAGEM INICIAL', items: [
          { item: 'Chamou ajuda e solicitou monitorização', score: 1, ref: 'NTSP — Emergency Tracheostomy Management, 2012/2024' },
          { item: 'Ofereceu O₂ em alto fluxo pela face E pela traqueostomia', score: 1.5, ref: 'NTSP' }
        ]},
        { h: 'DESOBSTRUÇÃO — SEQUÊNCIA', items: [
          { item: 'Retirou a endocânula', score: 1.5, ref: 'NTSP' },
          { item: 'Passou o cateter de aspiração para checar permeabilidade e aspirou', score: 1.5, ref: 'NTSP' },
          { item: 'Verbalizou plano se o cateter não passasse: desinsuflar cuff → retirar cânula → ventilar boca/estoma → IOT', score: 1.5, ref: 'NTSP; Difficult Airway Society' },
          { item: 'Reconheceu risco de falso trajeto em traqueostomia < 7 dias', score: 1, ref: 'NTSP' }
        ]},
        { h: 'CAUSA E INDICAÇÕES', items: [
          { item: 'Identificou a falta de umidificação como causa e orientou prevenção', score: 0.5, ref: 'NTSP' },
          { item: 'Citou 3 indicações de traqueostomia (IOT prolongada, obstrução de via aérea superior, toalete brônquica/proteção de via aérea)', score: 1.5, ref: 'Sabiston, 21ª ed.; Cummings, 7ª ed.' }
        ]}
      ]
    }
  },

  // CASO 3 — MANEJO DE NÓDULO TIREOIDIANO
  {
    id: 'CP-3',
    title: 'Nódulo no pescoço achado em ultrassom',
    sub: 'Ambulatório — Cirurgia de Cabeça e Pescoço',
    tema: 'Cabeça e Pescoço',
    topic: 'Manejo do nódulo tireoidiano (TI-RADS e Bethesda)',
    level: 'moderado',
    duracao: '5 minutos',
    cardAccent: '#6D4C41',
    instA: {
      scenario: 'Ambulatório. A paciente retorna com exames solicitados pela UBS.',
      patient: 'Renata, 39 anos, sexo feminino, bancária.',
      complaint: 'Notou um “caroço” no pescoço ao se olhar no espelho; trouxe TSH e ultrassonografia.',
      tasks: [
        'Interprete os exames entregues e indique o próximo passo.',
        'Interprete o resultado da citologia (entregue após sua solicitação adequada).',
        'Defina a conduta e oriente a paciente.'
      ]
    },
    instB: {
      vitals: { PA: '118/76 mmHg', FC: '74 bpm', FR: '14 irpm', Tax: '36,3 °C', Peso: '60 kg' },
      physicalGeneral: 'Bom estado geral, eutireoidiana clinicamente.',
      physicalSeg: 'PESCOÇO: nódulo de cerca de 2 cm em lobo direito da tireoide, endurecido, indolor, móvel à deglutição; sem linfonodos cervicais palpáveis | LARINGOSCOPIA (se solicitada): pregas vocais com mobilidade preservada',
      labs: [
        { test: 'TSH', val: '1,8 mUI/L', ref: '0,4–4,0 mUI/L', alt: false },
        { test: 'T4 livre', val: '1,1 ng/dL', ref: '0,9–1,7 ng/dL', alt: false }
      ],
      image: 'ULTRASSONOGRAFIA DE TIREOIDE (entregar no início): nódulo sólido, MARCADAMENTE HIPOECOICO, mais alto que largo, margens irregulares/lobuladas, com microcalcificações, medindo 2,1 x 1,6 x 1,5 cm, em terço médio do lobo direito — ACR TI-RADS 5 (TR5). Linfonodos cervicais sem características suspeitas. CITOLOGIA (PAAF guiada por US — entregar somente se solicitada): Bethesda VI — maligno: carcinoma papilífero de tireoide.',
      note: 'Entregar TSH, T4L e US no início. Entregar a citologia SOMENTE se o candidato indicar PAAF. Se o candidato pedir cintilografia de tireoide, informar “não indicada com TSH normal — reveja a conduta” e ANOTAR. Se perguntar sobre irradiação e história familiar, usar o roteiro.',
      patientProfile: 'Renata, 39 anos, bancária, casada, sem filhos, deseja engravidar. Sem comorbidades.',
      script: [
        { trigger: 'Sintomas compressivos', speech: 'Não tenho dificuldade pra engolir nem rouquidão.' },
        { trigger: 'Radiação na infância', speech: 'Não, nunca fiz radioterapia.' },
        { trigger: 'Família', speech: 'Minha tia teve câncer de tireoide, operou e tá bem.' },
        { trigger: 'Pergunta ativa (após PAAF)', speech: 'É câncer, então? Vou morrer? E vou poder engravidar?' }
      ],
      hiddenInfo: 'Tia materna com câncer de tireoide — só revela se perguntada sobre história familiar | Deseja engravidar em 1 ano — só revela se perguntada sobre planos ou na pergunta ativa',
      actorBehavior: 'Calma no início; ao receber o resultado de câncer, fica assustada e chorosa. Acalma-se se o candidato explicar o bom prognóstico.'
    },
    instC: {
      diagnosis: 'Nódulo tireoidiano TI-RADS 5 de 2,1 cm em paciente eutireoidiana, com PAAF Bethesda VI — carcinoma papilífero de tireoide (cT2 N0, sem extensão extratireoidiana, sem linfonodos suspeitos).',
      differentials: [
        'Nódulo benigno (coloide/adenoma) — sai pela citologia Bethesda VI.',
        'Carcinoma folicular — a citologia não diferencia adenoma de carcinoma folicular (Bethesda IV); aqui a citologia é de papilífero.',
        'Carcinoma medular — associar se calcitonina elevada ou história familiar de NEM2; citologia distinta.',
        'Nódulo autônomo (quente) — afastado por TSH normal.'
      ],
      context: 'Nódulos tireoidianos são muito comuns (até 68% à US), e 7–15% são malignos. O carcinoma papilífero é o mais frequente e tem excelente prognóstico (sobrevida > 95% em 10 anos).',
      justify: 'Fluxo: TSH normal → US → PAAF conforme TI-RADS e tamanho (TR5 ≥ 1 cm = PAAF). Citologia Bethesda VI (maligno; risco de malignidade 97–99%) → cirurgia.',
      expectedAnamnesis: 'Sintomas compressivos (disfagia, dispneia, rouquidão) | Irradiação cervical na infância | História familiar de câncer de tireoide/NEM | Crescimento rápido',
      expectedPhysical: 'Palpação da tireoide e cadeias cervicais | Avaliação da voz/laringoscopia pré-operatória',
      expectedExams: [
        { exam: 'TSH', justify: 'Primeiro exame: se TSH baixo → cintilografia (nódulo quente raramente é maligno); se normal/alto → US + PAAF conforme critérios.', expected: 'Normal.' },
        { exam: 'Ultrassonografia de tireoide e cervical', justify: 'Classificar risco (TI-RADS) e avaliar linfonodos.', expected: 'TR5, 2,1 cm; linfonodos normais.' },
        { exam: 'PAAF guiada por US', justify: 'TR5 ≥ 1 cm (ACR) — indicação de punção.', expected: 'Bethesda VI.' },
        { exam: 'Laringoscopia pré-operatória', justify: 'Documentar mobilidade das pregas vocais.', expected: 'Normal.' }
      ],
      expectedConduct: 'Tratamento cirúrgico: tumor de 1–4 cm, sem extensão extratireoidiana e sem linfonodos (cN0) — lobectomia (hemitireoidectomia) ou tireoidectomia total são opções (ATA 2015/2025); decisão compartilhada considerando fatores de risco e preferência (tireoidectomia total facilita radioiodo e seguimento com tireoglobulina) | Esvaziamento central terapêutico apenas se linfonodos acometidos | Radioiodo conforme estratificação de risco pós-operatória | Levotiroxina após tireoidectomia total, com alvo de TSH conforme risco | Orientações: excelente prognóstico; gestação possível após tratamento e com função tireoidiana controlada (após radioiodo, aguardar 6–12 meses) | Riscos cirúrgicos: lesão do nervo laríngeo recorrente (rouquidão), hipoparatireoidismo (hipocalcemia)',
      expectedCommunication: 'Comunicar o diagnóstico de câncer com empatia (protocolo SPIKES) | Enfatizar o bom prognóstico | Responder sobre gestação | Checar compreensão',
      criticalErrors: [
        'Solicitar cintilografia com TSH normal como próximo passo',
        'Não indicar PAAF para nódulo TI-RADS 5 ≥ 1 cm',
        'Prescrever levotiroxina para “reduzir o nódulo” em vez de cirurgia',
        'Indicar apenas seguimento ultrassonográfico após citologia Bethesda VI'
      ]
    },
    instD: {
      title: 'CHECKLIST — NÓDULO TIREOIDIANO',
      sections: [
        { h: 'INVESTIGAÇÃO', items: [
          { item: 'Interpretou TSH normal e reconheceu que cintilografia não está indicada', score: 1.5, ref: 'ATA Thyroid Nodule Guidelines, 2015; SBEM' },
          { item: 'Classificou o nódulo como TI-RADS 5 (características suspeitas)', score: 1, ref: 'ACR TI-RADS, 2017' },
          { item: 'Indicou PAAF guiada por US (TR5 ≥ 1 cm)', score: 1.5, ref: 'ACR TI-RADS, 2017' },
          { item: 'Pesquisou fatores de risco (irradiação, história familiar, sintomas compressivos)', score: 1, ref: 'ATA 2015' }
        ]},
        { h: 'CITOLOGIA E CONDUTA', items: [
          { item: 'Interpretou Bethesda VI como maligno (carcinoma papilífero)', score: 1.5, ref: 'Sistema Bethesda, 3ª ed., 2023' },
          { item: 'Indicou cirurgia (lobectomia ou tireoidectomia total, tumor 1–4 cm cN0)', score: 1.5, ref: 'ATA 2015/2025' },
          { item: 'Citou US cervical/laringoscopia pré-operatória e riscos (nervo laríngeo recorrente, hipoparatireoidismo)', score: 1, ref: 'ATA 2015; SBCCP' }
        ]},
        { h: 'COMUNICAÇÃO', items: [
          { item: 'Comunicou o diagnóstico com empatia, destacou bom prognóstico e respondeu sobre gestação', score: 1, ref: 'Baile WF — Protocolo SPIKES, Oncologist 2000' }
        ]}
      ]
    }
  }
];

export default cabecaPescoco5;
