const medicinaIntensiva = [
  // ─────────────────────────────────────────────────────────────────────────
  // CASO 1 — SÍNDROME DO DESCONFORTO RESPIRATÓRIO AGUDO (SDRA)
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 1,
    title: 'Hipoxemia refratária em paciente com pneumonia grave na UTI',
    sub: 'UTI — Medicina Intensiva',
    tema: 'Medicina Intensiva',
    topic: 'Síndrome do Desconforto Respiratório Agudo (SDRA)',
    level: 'complexo',
    cardAccent: '#E65100',
    instA: {
      scenario: 'UTI, paciente internado há 2 dias por pneumonia grave, agora em ventilação mecânica invasiva, com piora da oxigenação.',
      patient: 'D.A.S., 54 anos, masculino, internado por pneumonia comunitária grave, evoluindo com insuficiência respiratória.',
      complaint: 'Piora progressiva da hipoxemia nas últimas 12 horas, apesar de ajustes ventilatórios.',
      tasks: [
        'Avalie os critérios diagnósticos de SDRA a partir dos dados apresentados.',
        'Interprete a gasometria e a relação PaO2/FiO2.',
        'Classifique a gravidade da SDRA conforme os critérios de Berlim.',
        'Proponha os ajustes na estratégia ventilatória protetora.',
        'Considere medidas adjuvantes para hipoxemia refratária.'
      ]
    },
    instB: {
      vitals: {
        PA: '102/64 mmHg (em uso de noradrenalina em baixa dose)',
        FC: '112 bpm',
        FR: '28 irpm (ventilação mecânica, modo assistido)',
        Tax: '38,2 °C',
        SpO2: '89% com FiO2 100%',
        Peso: '82 kg (peso predito para altura de 1,75 m: ~70 kg)'
      },
      physicalGeneral: 'Sedado, em ventilação mecânica invasiva, sem sinais de despertar espontâneo (RASS -3).',
      physicalSeg: 'RESPIRATÓRIO: ausculta com estertores crepitantes difusos bilaterais; assincronia leve com o ventilador | CARDIOVASCULAR: taquicárdico, em uso de vasopressor em baixa dose | Sem edema significativo de MMII; sem turgência jugular importante.',
      labs: [
        { test: 'Gasometria arterial — PaO2', val: '68 mmHg (com FiO2 de 1,0 = 100%)', ref: 'Relação PaO2/FiO2 calculada: 68', alt: true },
        { test: 'Gasometria arterial — PaCO2', val: '48 mmHg', ref: '35–45 mmHg', alt: true },
        { test: 'Gasometria arterial — pH', val: '7,29', ref: '7,35–7,45', alt: true },
        { test: 'BNP', val: '110 pg/mL', ref: '< 100 pg/mL (discretamente elevado, não sugestivo de sobrecarga hídrica importante)', alt: false },
        { test: 'Balanço hídrico das últimas 24h', val: 'Positivo em 2.100 mL', ref: 'Idealmente neutro/negativo na SDRA estabelecida', alt: true }
      ],
      image: 'Radiografia de tórax (leito): opacidades alveolares bilaterais difusas, não explicadas totalmente por derrame pleural, atelectasia ou nódulos, compatíveis com edema pulmonar não cardiogênico.',
      note: 'Este caso não tem "roteiro de ator" tradicional pois o paciente está sedado e em ventilação mecânica — a avaliação deve ser conduzida com a equipe de enfermagem/dados do prontuário. Priorize a interpretação objetiva dos critérios de Berlim (início agudo, imagem bilateral, origem não cardiogênica, relação PaO2/FiO2) e o ajuste ventilatório.',
      patientProfile: 'Trabalhador da construção civil, sem comorbidades relevantes conhecidas, internado há 5 dias por pneumonia bacteriana grave, evoluindo com necessidade de intubação há 2 dias por fadiga respiratória.',
      script: [
        { trigger: 'Informação da equipe de enfermagem', speech: 'Doutor(a), a saturação dele está caindo apesar de já estarmos com FiO2 a 100%. Ele está bem sedado, sem despertar.' },
        { trigger: 'Sobre o balanço hídrico', speech: 'O balanço hídrico das últimas 24h ficou bem positivo, mais de 2 litros.' },
        { trigger: 'Sobre a evolução radiológica', speech: 'O raio-x de hoje mostra as duas bases e os dois ápices comprometidos, bem pior que o de ontem.' },
        { trigger: 'Pergunta da equipe — conduta', speech: 'Doutor(a), o que fazemos agora? Aumentamos mais a FiO2? Colocamos ele de bruços?' }
      ],
      hiddenInfo: 'O ecocardiograma realizado na admissão (disponível no prontuário) mostrou função ventricular esquerda preservada, sem sinais de disfunção cardíaca significativa — dado relevante para excluir edema pulmonar cardiogênico como diagnóstico alternativo, deve ser buscado ativamente pelo candidato se perguntar sobre avaliação cardíaca prévia | O volume corrente atual programado no ventilador está em 8 mL/kg do peso atual (não do peso predito), configurando ventilação não protetora — só revela se o candidato perguntar especificamente sobre os parâmetros ventilatórios em uso',
      actorBehavior: 'Não aplicável — paciente sedado. A "atuação" está na equipe de enfermagem, que responde de forma objetiva e colaborativa às perguntas do candidato sobre parâmetros e evolução.'
    },
    instC: {
      diagnosis: 'Síndrome do Desconforto Respiratório Agudo (SDRA) moderada a grave (relação PaO2/FiO2 = 68, critérios de Berlim), secundária a pneumonia bacteriana grave, com ventilação mecânica não protetora em curso (volume corrente calculado pelo peso atual, não pelo peso predito).',
      differentials: [
        'Edema pulmonar cardiogênico — entra como principal diagnóstico diferencial de infiltrado bilateral com hipoxemia; afastado pelo ecocardiograma com função ventricular preservada e BNP não significativamente elevado, embora o balanço hídrico positivo deva ser corrigido de qualquer forma',
        'Pneumonia bilateral extensa sem SDRA — entra como possibilidade; a hipoxemia desproporcional (relação PaO2/FiO2 muito reduzida) e o padrão difuso bilateral não totalmente explicado pela consolidação pneumônica isolada sustentam a sobreposição de SDRA',
        'Hemorragia alveolar difusa — entra como causa de infiltrado bilateral hipoxêmico; menos provável na ausência de hemoptise ou queda de hemoglobina compatível, mas deve ser considerada se o quadro não responder ao tratamento da pneumonia de base',
        'Tromboembolismo pulmonar maciço — entra como causa de hipoxemia grave aguda; menos provável dado o padrão radiológico difuso bilateral, mais compatível com SDRA do que com TEP isolado'
      ],
      context: 'A SDRA é uma síndrome de insuficiência respiratória hipoxêmica aguda, de início agudo (até 7 dias), com infiltrado bilateral à imagem não totalmente explicado por sobrecarga hídrica ou insuficiência cardíaca, definida pelos critérios de Berlim através da relação PaO2/FiO2 sob PEEP ≥5 cmH2O: leve (200-300), moderada (100-200) e grave (<100). Este paciente com pneumonia grave evolui com relação PaO2/FiO2 de 68 (grave), exigindo ajuste imediato da estratégia ventilatória para ventilação protetora, medida com maior impacto comprovado em mortalidade.',
      justify: 'Os critérios de Berlim estão preenchidos: início agudo (dentro de 7 dias do insulto conhecido — pneumonia), infiltrado bilateral à radiografia não totalmente explicado por derrame/atelectasia/nódulos, origem não predominantemente cardiogênica (ecocardiograma normal, BNP não significativamente elevado) e relação PaO2/FiO2 de 68 mmHg (68/1,0) sob FiO2 100%, classificando como SDRA grave. A identificação de volume corrente ajustado ao peso atual (não ao peso predito) revela ventilação não protetora em curso, erro que deve ser corrigido imediatamente.',
      expectedAnamnesis: 'Revisar evolução clínica com a equipe (tempo de instalação da hipoxemia) | Investigar balanço hídrico das últimas 24-48h | Buscar ativamente resultado de ecocardiograma prévio para excluir causa cardiogênica | Revisar parâmetros ventilatórios atuais em uso (volume corrente, PEEP, FiO2)',
      expectedPhysical: 'Ausculta pulmonar | Avaliação de sinais de sobrecarga volêmica (edema, turgência jugular) | Avaliação de sincronia com o ventilador',
      expectedExams: [
        { exam: 'Gasometria arterial com cálculo da relação PaO2/FiO2', justify: 'Essencial para diagnóstico e classificação de gravidade pelos critérios de Berlim', expected: 'Relação 68 — SDRA grave' },
        { exam: 'Radiografia ou tomografia de tórax', justify: 'Confirmar infiltrado bilateral, critério diagnóstico obrigatório', expected: 'Opacidades alveolares bilaterais difusas' },
        { exam: 'Ecocardiograma', justify: 'Excluir origem predominantemente cardiogênica do edema pulmonar', expected: 'Função ventricular preservada neste caso' },
        { exam: 'BNP/NT-proBNP', justify: 'Auxiliar (não substitui ecocardiograma) na diferenciação com edema cardiogênico', expected: 'Não significativamente elevado' }
      ],
      expectedConduct: 'Farmacológica: manter sedoanalgesia adequada para adaptação à ventilação protetora; considerar bloqueio neuromuscular por período limitado em SDRA grave com assincronia importante; balanço hídrico negativo/neutro (diuréticos se necessário), uma vez descartada hipoperfusão, para reduzir edema pulmonar | Não farmacológica: AJUSTAR IMEDIATAMENTE para ventilação mecânica protetora — volume corrente de 6 mL/kg de PESO PREDITO (não peso atual, ~70 kg neste caso = ~420 mL), mantendo pressão de platô <30 cmH2O; titular PEEP adequada para a gravidade (SDRA grave geralmente requer PEEP mais alta); posição prona por pelo menos 16h/dia diante de SDRA moderada-grave refratária (relação PaO2/FiO2 <150), medida com impacto comprovado em mortalidade | Orientações à equipe: reforçar a importância da ventilação protetora mesmo que gere hipercapnia permissiva controlada; explicar os critérios para indicar posição prona | Seguimento: reavaliação gasométrica seriada após cada ajuste, considerar ECMO em centros de referência se hipoxemia refratária a todas as medidas anteriores',
      expectedCommunication: 'Comunicar-se de forma clara e objetiva com a equipe de enfermagem/multiprofissional sobre os ajustes necessários | Explicar o racional da ventilação protetora e da posição prona à equipe | Documentar claramente o plano terapêutico',
      criticalErrors: [
        'Não calcular a relação PaO2/FiO2 e não classificar a gravidade da SDRA pelos critérios de Berlim',
        'Não identificar que o volume corrente está sendo calculado pelo peso atual em vez do peso predito (ventilação não protetora)',
        'Não ajustar para volume corrente de 6 mL/kg de peso predito com limitação de pressão de platô',
        'Não considerar posição prona diante de SDRA grave com hipoxemia refratária',
        'Não buscar excluir causa cardiogênica (ecocardiograma) antes de assumir SDRA'
      ]
    },
    instD: {
      title: 'CHECKLIST — HIPOXEMIA REFRATÁRIA NA UTI (SDRA)',
      sections: [
        {
          h: 'BLOCO 1 — COMUNICAÇÃO COM A EQUIPE MULTIPROFISSIONAL',
          items: [
            { item: 'Comunicou-se de forma clara e objetiva com a equipe de enfermagem', score: 0.5, ref: 'AMIB — Diretrizes de Ventilação Mecânica' }
          ]
        },
        {
          h: 'BLOCO 2 — REVISÃO DE DADOS CLÍNICOS',
          items: [
            { item: 'Revisou o balanço hídrico das últimas 24h', score: 0.5, ref: 'ARDSNet / Diretrizes de SDRA' },
            { item: 'Buscou resultado de ecocardiograma para excluir causa cardiogênica', score: 1.0, ref: 'Critérios de Berlim para SDRA' },
            { item: 'Revisou os parâmetros ventilatórios em uso (volume corrente, PEEP, FiO2)', score: 1.0, ref: 'ARDSNet Protocol' }
          ]
        },
        {
          h: 'BLOCO 3 — EXAME/DADOS OBJETIVOS',
          items: [
            { item: 'Realizou ausculta pulmonar e avaliou sincronia com o ventilador', score: 0.5, ref: 'AMIB — Diretrizes de Ventilação Mecânica' }
          ]
        },
        {
          h: 'BLOCO 4 — RACIOCÍNIO CLÍNICO E CLASSIFICAÇÃO',
          items: [
            { item: 'Calculou a relação PaO2/FiO2 corretamente', score: 1.0, ref: 'Critérios de Berlim para SDRA' },
            { item: 'Classificou a gravidade da SDRA (leve/moderada/grave) pelos critérios de Berlim', score: 1.5, ref: 'Critérios de Berlim para SDRA' }
          ]
        },
        {
          h: 'BLOCO 5 — CONDUTA VENTILATÓRIA',
          items: [
            { item: 'Identificou e corrigiu o volume corrente para 6 mL/kg de PESO PREDITO', score: 1.5, ref: 'ARDSNet Protocol' },
            { item: 'Indicou posição prona diante de SDRA grave/refratária', score: 1.5, ref: 'ARDSNet Protocol; PROSEVA Trial' },
            { item: 'Orientou balanço hídrico neutro/negativo após exclusão de hipoperfusão', score: 0.5, ref: 'FACTT Trial' }
          ]
        }
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // CASO 2 — CHOQUE CARDIOGÊNICO
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 2,
    title: 'Hipotensão e extremidades frias após infarto extenso',
    sub: 'UTI — Medicina Intensiva',
    tema: 'Medicina Intensiva',
    topic: 'Choque Cardiogênico',
    level: 'complexo',
    cardAccent: '#E65100',
    instA: {
      scenario: 'UTI coronariana, paciente admitido há 6 horas por IAM extenso, evoluindo com hipotensão.',
      patient: 'V.R.P., 68 anos, masculino, admitido por IAM com supradesnível de ST em parede anterior extensa.',
      complaint: 'Queda da pressão arterial e extremidades frias, cerca de 6 horas após angioplastia primária.',
      tasks: [
        'Realize a avaliação clínica dirigida ao choque.',
        'Realize o exame físico voltado para classificação hemodinâmica.',
        'Formule a hipótese diagnóstica e classifique o perfil hemodinâmico.',
        'Solicite os exames complementares adequados.',
        'Proponha a conduta terapêutica inicial do choque cardiogênico.'
      ]
    },
    instB: {
      vitals: {
        PA: '78/52 mmHg',
        FC: '116 bpm',
        FR: '26 irpm',
        Tax: '36,2 °C',
        SpO2: '90% em cateter nasal 3L/min',
        Diurese: 'Débito urinário de 15 mL/h nas últimas 3h'
      },
      physicalGeneral: 'Mau estado geral, confuso, sonolento, extremidades frias e mosqueadas, tempo de enchimento capilar de 5 segundos.',
      physicalSeg: 'CARDIOVASCULAR: bulhas hipofonéticas, taquicárdicas, terceira bulha (B3) presente, sopro sistólico novo em foco mitral (possível insuficiência mitral aguda por disfunção de músculo papilar) | RESPIRATÓRIO: estertores crepitantes em bases pulmonares bilateralmente | JUGULARES: turgência jugular presente a 45° | MMII: extremidades frias, pulsos periféricos finos, sem edema significativo ainda.',
      labs: [
        { test: 'Lactato arterial', val: '5,2 mmol/L', ref: '< 2,0 mmol/L', alt: true },
        { test: 'Troponina I (seriada)', val: 'Em elevação progressiva', ref: 'Elevada, compatível com IAM em curso', alt: true },
        { test: 'Creatinina', val: '1,8 mg/dL (basal 1,0 mg/dL)', ref: '0,7–1,3 mg/dL', alt: true },
        { test: 'Gasometria venosa — pH', val: '7,28', ref: '7,35–7,45', alt: true },
        { test: 'BNP', val: '1.850 pg/mL', ref: '< 100 pg/mL', alt: true }
      ],
      image: 'Ecocardiograma à beira leito: fração de ejeção do ventrículo esquerdo estimada em 25% (gravemente reduzida), acinesia extensa de parede anterior e septal, insuficiência mitral moderada a importante por provável disfunção de músculo papilar.',
      note: 'O ecocardiograma à beira leito é essencial para confirmar disfunção ventricular e deve ser solicitado prontamente. Reforçar que o sopro novo de insuficiência mitral pode indicar complicação mecânica do IAM (rotura de músculo papilar), que exige avaliação cirúrgica urgente se confirmada de forma importante.',
      patientProfile: 'Hipertenso e diabético de longa data, tabagista, admitido com IAM extenso, submetido à angioplastia primária com sucesso angiográfico, mas evoluindo com sinais de baixo débito nas horas seguintes.',
      script: [
        { trigger: 'Informação da equipe de enfermagem', speech: 'Doutor(a), a pressão dele está caindo, ele está ficando com as mãos e pés bem frios, e o débito urinário caiu muito nas últimas horas.' },
        { trigger: 'Sobre o nível de consciência', speech: 'Ele está mais sonolento e confuso do que estava há pouco, respondendo com dificuldade às perguntas.' },
        { trigger: 'Sobre a angioplastia', speech: 'A angioplastia foi feita há umas 6 horas, o cardiologista disse que abriu bem a artéria, mas o músculo já tinha uma área grande comprometida.' },
        { trigger: 'Pergunta da equipe — conduta', speech: 'Doutor(a), ele precisa de mais soro? Ou já está com sobrecarga? O que fazemos agora?' }
      ],
      hiddenInfo: 'O balanço hídrico das últimas 6h já está positivo em 800 mL (fluidos administrados na sala de hemodinâmica e na admissão), informação relevante para não repetir reposição volêmica agressiva neste perfil de choque cardiogênico com congestão pulmonar associada — só revela se perguntado sobre balanço hídrico prévio | A pressão arterial já vinha em queda progressiva nas últimas 2 horas antes deste momento, não foi uma queda súbita apenas agora — só revela se perguntado sobre a evolução temporal da PA',
      actorBehavior: 'Não aplicável diretamente — paciente confuso/sonolento, responde de forma lentificada e incompleta se questionado diretamente. A interação principal é com a equipe de enfermagem, que fornece as informações de forma objetiva e demonstra urgência na necessidade de conduta.'
    },
    instC: {
      diagnosis: 'Choque cardiogênico (perfil hemodinâmico "frio e úmido" — má perfusão periférica com congestão pulmonar), secundário a IAM extenso com disfunção ventricular esquerda grave e possível insuficiência mitral aguda associada.',
      differentials: [
        'Choque hipovolêmico — entra como causa de hipotensão pós-procedimento (sangramento em sítio de punção); sai pela presença de congestão pulmonar, turgência jugular e B3, sinais que indicam sobrecarga e não depleção de volume, tornando reposição volêmica agressiva inadequada e potencialmente deletéria',
        'Choque obstrutivo (tamponamento cardíaco por possível rotura de parede livre, ou pneumotórax hipertensivo) — entra como complicação mecânica grave do IAM a ser sempre excluída; deve ser ativamente pesquisada ao ecocardiograma (derrame pericárdico) diante de qualquer deterioração hemodinâmica pós-IAM',
        'Choque séptico — entra como diagnóstico diferencial de choque com extremidades quentes tipicamente (perfil "quente"), mas este paciente apresenta perfil frio (má perfusão com extremidades frias), mais compatível com choque cardiogênico, sem foco infeccioso evidente',
        'Complicação mecânica do IAM (comunicação interventricular, rotura de parede livre) — deve ser sempre considerada diante de sopro novo e deterioração hemodinâmica abrupta pós-IAM, e ativamente excluída/confirmada pelo ecocardiograma'
      ],
      context: 'O choque cardiogênico é definido pela incapacidade do coração em manter perfusão tecidual adequada apesar de volemia adequada, sendo a principal causa de morte hospitalar em pacientes com IAM. A classificação hemodinâmica clínica (perfil "quente/frio" e "seco/úmido") orienta rapidamente a conduta à beira do leito: este paciente apresenta perfil frio-úmido (má perfusão periférica associada a congestão pulmonar), típico de choque cardiogênico, contraindicando expansão volêmica agressiva.',
      justify: 'O diagnóstico é sustentado por hipotensão persistente, sinais de má perfusão periférica (extremidades frias, tempo de enchimento capilar prolongado, oligúria, confusão mental, lactato elevado) associados a sinais de congestão (estertores pulmonares, turgência jugular, B3), em paciente com IAM extenso recente e ecocardiograma confirmando fração de ejeção gravemente reduzida (25%) com nova insuficiência mitral, achado que levanta suspeita de complicação mecânica (disfunção/rotura parcial de músculo papilar) exigindo avaliação cardiológica/cirúrgica urgente adicional.',
      expectedAnamnesis: 'Revisar cronologia do IAM e da angioplastia | Investigar balanço hídrico já administrado (evitar repetir expansão desnecessária) | Avaliar evolução temporal da hipotensão | Perguntar sobre sintomas associados (dispneia, dor torácica recorrente)',
      expectedPhysical: 'Classificar o perfil hemodinâmico clínico (quente/frio, seco/úmido) através de extremidades, perfusão capilar, ausculta pulmonar e cardíaca, turgência jugular | Avaliar nível de consciência | Ausculta cardíaca cuidadosa buscando sopros novos (complicação mecânica)',
      expectedExams: [
        { exam: 'Ecocardiograma à beira leito', justify: 'Avaliar função ventricular, excluir complicações mecânicas (rotura de músculo papilar, CIV, tamponamento) e guiar terapêutica', expected: 'FE 25%, insuficiência mitral por disfunção de músculo papilar' },
        { exam: 'Lactato arterial', justify: 'Marcador de hipoperfusão tecidual e gravidade do choque', expected: 'Elevado (5,2 mmol/L) — hipoperfusão significativa' },
        { exam: 'Gasometria arterial/venosa', justify: 'Avaliar acidose metabólica associada à hipoperfusão', expected: 'Acidose metabólica' },
        { exam: 'Função renal seriada', justify: 'Avaliar lesão renal aguda por hipoperfusão (síndrome cardiorrenal)', expected: 'Elevação da creatinina em relação ao basal' }
      ],
      expectedConduct: 'Farmacológica: NÃO expandir volume agressivamente dado o perfil congestivo (frio-úmido) — evitar sobrecarga adicional; iniciar suporte inotrópico (dobutamina) para melhorar o débito cardíaco; vasopressor (noradrenalina) se hipotensão significativa persistente associada; diurético venoso para controle da congestão pulmonar, uma vez que a perfusão esteja sendo suportada por inotrópico | Não farmacológica: considerar suporte circulatório mecânico (balão intra-aórtico ou dispositivos de assistência ventricular) em choque cardiogênico refratário, especialmente diante de complicação mecânica associada; avaliação urgente da cirurgia cardíaca se confirmada complicação mecânica significativa (rotura de músculo papilar com insuficiência mitral grave) | Orientações à equipe/família: comunicar a gravidade do quadro e a necessidade de suporte hemodinâmico intensivo; explicar a possível necessidade de intervenção cirúrgica de urgência conforme evolução do ecocardiograma | Seguimento: monitorização hemodinâmica contínua, reavaliação ecocardiográfica seriada',
      expectedCommunication: 'Comunicar-se com a equipe de forma clara sobre a classificação hemodinâmica e a conduta escolhida | Explicar à família a gravidade do quadro e as medidas de suporte sendo tomadas | Documentar claramente o raciocínio de não expandir volume dado o perfil congestivo',
      criticalErrors: [
        'Expandir volume agressivamente em paciente com perfil congestivo (frio-úmido), agravando o edema pulmonar',
        'Não classificar o perfil hemodinâmico clínico (quente/frio, seco/úmido) antes de definir a conduta',
        'Não solicitar ecocardiograma para avaliar função ventricular e excluir complicação mecânica',
        'Não investigar o sopro novo como possível sinal de complicação mecânica do IAM',
        'Não iniciar suporte inotrópico/vasopressor diante de choque cardiogênico estabelecido'
      ]
    },
    instD: {
      title: 'CHECKLIST — HIPOTENSÃO E EXTREMIDADES FRIAS PÓS-IAM (CHOQUE CARDIOGÊNICO)',
      sections: [
        {
          h: 'BLOCO 1 — COMUNICAÇÃO COM A EQUIPE',
          items: [
            { item: 'Comunicou-se de forma clara com a equipe sobre a conduta e seu racional', score: 0.5, ref: 'AMIB — Diretrizes de Choque' }
          ]
        },
        {
          h: 'BLOCO 2 — AVALIAÇÃO CLÍNICA',
          items: [
            { item: 'Revisou o balanço hídrico já administrado antes de decidir sobre expansão volêmica', score: 1.0, ref: 'AMIB — Diretrizes de Choque Cardiogênico' },
            { item: 'Investigou a cronologia da hipotensão em relação à angioplastia', score: 0.5, ref: 'AMIB — Diretrizes de Choque Cardiogênico' }
          ]
        },
        {
          h: 'BLOCO 3 — EXAME FÍSICO',
          items: [
            { item: 'Classificou corretamente o perfil hemodinâmico (frio-úmido)', score: 1.5, ref: 'Classificação de Nohria-Stevenson' },
            { item: 'Identificou o sopro novo como possível complicação mecânica', score: 1.0, ref: 'AMIB — Diretrizes de Choque Cardiogênico' }
          ]
        },
        {
          h: 'BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
          items: [
            { item: 'Solicitou ecocardiograma à beira leito com urgência', score: 1.5, ref: 'AMIB — Diretrizes de Choque Cardiogênico' },
            { item: 'Solicitou lactato arterial para avaliar gravidade da hipoperfusão', score: 0.5, ref: 'AMIB — Diretrizes de Choque' }
          ]
        },
        {
          h: 'BLOCO 5 — CONDUTA',
          items: [
            { item: 'NÃO indicou expansão volêmica agressiva diante do perfil congestivo', score: 1.5, ref: 'AMIB — Diretrizes de Choque Cardiogênico' },
            { item: 'Indicou suporte inotrópico (dobutamina) e/ou vasopressor conforme necessário', score: 1.0, ref: 'AMIB — Diretrizes de Choque Cardiogênico' }
          ]
        }
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // CASO 3 — CHOQUE HEMORRÁGICO (TRAUMA)
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 3,
    title: 'Politraumatizado com hipotensão após acidente de moto',
    sub: 'PS — Sala de Trauma',
    tema: 'Medicina Intensiva',
    topic: 'Choque Hemorrágico',
    level: 'complexo',
    cardAccent: '#E65100',
    instA: {
      scenario: 'Sala de trauma do Pronto-Socorro, vítima de acidente motociclístico trazida pelo SAMU.',
      patient: 'B.L.M., 29 anos, masculino, motociclista, colisão em alta velocidade há 30 minutos.',
      complaint: 'Trazido pelo SAMU após colisão de moto, com dor abdominal intensa e rebaixamento do nível de consciência.',
      tasks: [
        'Realize a avaliação primária sistematizada (ABCDE).',
        'Realize o exame físico dirigido à identificação da fonte de sangramento.',
        'Classifique o grau de choque hemorrágico.',
        'Solicite os exames complementares prioritários sem atrasar a reanimação.',
        'Conduza a reanimação volêmica e defina necessidade de intervenção cirúrgica.'
      ]
    },
    instB: {
      vitals: {
        PA: '82/58 mmHg',
        FC: '132 bpm',
        FR: '28 irpm',
        Tax: '35,8 °C',
        SpO2: '93% em máscara com reservatório',
        Glasgow: '13 (O3 V4 M6)'
      },
      physicalGeneral: 'Mau estado geral, pálido, sudoreico, agitado/confuso, extremidades frias.',
      physicalSeg: 'VIA AÉREA: pérvia, sem estridor | RESPIRATÓRIO: expansibilidade simétrica, murmúrio vesicular presente bilateralmente, sem enfisema subcutâneo | ABDOME: distendido, doloroso difusamente, com defesa muscular, macicez móvel em flancos (sinal de hemoperitônio) | BACIA: estável à compressão | MEMBROS: fratura exposta de fêmur direito, com sangramento ativo moderado no local; pulsos distais presentes | Escoriações múltiplas em tronco e membros.',
      labs: [
        { test: 'Hemoglobina (point-of-care)', val: '8,4 g/dL', ref: '13,5–17,5 g/dL', alt: true },
        { test: 'Lactato arterial', val: '6,8 mmol/L', ref: '< 2,0 mmol/L', alt: true },
        { test: 'Gasometria arterial — Base excess', val: '-9 mEq/L', ref: '-2 a +2 mEq/L', alt: true },
        { test: 'Coagulograma — TP/INR', val: '1,6 (prolongado)', ref: '0,8–1,2', alt: true },
        { test: 'Tipagem sanguínea', val: 'O negativo', ref: 'Relevante para transfusão de urgência (doador universal enquanto aguarda tipagem específica)', alt: true }
      ],
      image: 'FAST (Focused Assessment with Sonography for Trauma) à beira leito: líquido livre em espaço hepatorrenal (recesso de Morrison), espaço esplenorrenal e fundo de saco pélvico — compatível com hemoperitônio significativo. Radiografia de fêmur direito: fratura exposta em terço médio da diáfise.',
      note: 'Este caso exige priorização absoluta do protocolo ABCDE e reanimação — não atrasar a conduta aguardando exames complementares extensos. O FAST positivo com instabilidade hemodinâmica já indica necessidade de laparotomia de urgência, sem necessidade de aguardar tomografia.',
      patientProfile: 'Motociclista, sem capacete adequado, colisão frontal em via expressa, trazido pelo SAMU com suporte básico, imobilizado em prancha rígida com colar cervical.',
      script: [
        { trigger: 'Informação do SAMU na chegada', speech: 'Doutor(a), colisão de moto em alta velocidade há uns 30 minutos, o paciente estava consciente na cena mas foi ficando mais confuso durante o transporte. Pressão já estava caindo no caminho.' },
        { trigger: 'Paciente (confuso, responde parcialmente)', speech: '(voz fraca, confusa) Dói... a barriga... dói muito...' },
        { trigger: 'Ao ser perguntado sobre alergias/histórico (família não presente, informação limitada)', speech: 'Não temos informações sobre alergias ou histórico médico no momento, ele está sozinho e ainda não localizamos família.' },
        { trigger: 'Pergunta da equipe — conduta', speech: 'Doutor(a), já pedimos hemocomponentes. Ele vai para o centro cirúrgico? O que mais fazemos agora?' }
      ],
      hiddenInfo: 'A fratura exposta de fêmur, apesar de sangramento visível, não é suficiente isoladamente para explicar todo o grau de choque apresentado — o hemoperitônio (FAST positivo) é a fonte principal de sangramento oculto e deve ser priorizado no raciocínio | O paciente apresenta leve melhora transitória da confusão mental quando questionado ativamente (Glasgow flutuante), o que não deve ser interpretado como estabilização — reforçar reavaliação contínua',
      actorBehavior: 'Confuso, respostas parciais e lentificadas, geme de dor ao ser examinado no abdome. Não é capaz de fornecer história detalhada pela alteração do nível de consciência — a maior parte da informação vem da equipe do SAMU.'
    },
    instC: {
      diagnosis: 'Choque hemorrágico classe III-IV (ATLS), por hemoperitônio (FAST positivo) associado a sangramento em fratura exposta de fêmur, exigindo controle cirúrgico urgente do sangramento intra-abdominal.',
      differentials: [
        'Choque obstrutivo (pneumotórax hipertensivo, tamponamento cardíaco) — deve ser sistematicamente excluído na avaliação primária (B e C do ABCDE); afastado pela ausência de desvio de traqueia, ausência de enfisema subcutâneo e murmúrio vesicular simétrico presente',
        'Choque neurogênico (lesão medular) — entra como possibilidade em trauma; menos provável dado o padrão de taquicardia (não bradicardia relativa) e vasoconstrição periférica (extremidades frias), típicos de choque hemorrágico e não neurogênico',
        'Traumatismo cranioencefálico isolado como causa de rebaixamento — entra como diferencial do rebaixamento do nível de consciência; deve ser investigado (TC de crânio) após estabilização hemodinâmica, mas a hipotensão e taquicardia não são explicadas por TCE isolado, reforçando a hipovolemia como causa principal do rebaixamento',
        'Fratura de fêmur isolada como única fonte de sangramento — entra como possibilidade; insuficiente isoladamente para explicar a gravidade do choque, reforçando a necessidade de investigar e tratar o hemoperitônio como fonte principal associada'
      ],
      context: 'O choque hemorrágico no trauma é classificado pelo ATLS em 4 classes conforme a perda volêmica estimada e os parâmetros clínicos (FC, PA, FR, nível de consciência, débito urinário). Este paciente, com PA 82/58, FC 132, taquipneia, Glasgow reduzido e sinais de hipoperfusão (lactato 6,8, base excess -9), classifica-se como choque hemorrágico classe III a IV (perda estimada >30-40% da volemia), exigindo reanimação volêmica agressiva com hemocomponentes e controle cirúrgico definitivo da fonte de sangramento.',
      justify: 'A combinação de hipotensão, taquicardia importante, taquipneia, alteração do nível de consciência e acidose metabólica com lactato muito elevado caracteriza choque hemorrágico grave (classe III-IV). O FAST positivo com líquido livre em múltiplos espaços (hepatorrenal, esplenorrenal, pélvico) confirma hemoperitônio significativo como fonte provável principal do sangramento, associado ao sangramento visível na fratura exposta de fêmur — a instabilidade hemodinâmica com FAST positivo é indicação formal de laparotomia exploradora de urgência, sem necessidade de aguardar tomografia.',
      expectedAnamnesis: 'Obter informações do SAMU sobre mecanismo de trauma e evolução pré-hospitalar (protocolo MIST: Mecanismo, Injúrias identificadas, Sinais vitais, Tratamento realizado) | Reconhecer as limitações da anamnese direta pelo rebaixamento do nível de consciência do paciente',
      expectedPhysical: 'Conduzir avaliação primária sistematizada ABCDE (via Aérea com controle cervical, Boa ventilação, Circulação com controle de hemorragia, Disfunção neurológica, Exposição com controle de hipotermia) | Realizar FAST à beira leito | Avaliar estabilidade pélvica | Identificar e controlar sangramento externo visível (fratura exposta)',
      expectedExams: [
        { exam: 'FAST (ultrassonografia focada no trauma)', justify: 'Exame rápido à beira leito para identificar hemoperitônio/hemopericárdio sem atrasar a reanimação', expected: 'Positivo — líquido livre em múltiplos espaços' },
        { exam: 'Hemoglobina point-of-care e lactato arterial', justify: 'Avaliar repercussão da perda sanguínea e gravidade da hipoperfusão tecidual', expected: 'Anemia e lactato muito elevado, compatíveis com choque grave' },
        { exam: 'Tipagem sanguínea e prova cruzada com solicitação de hemocomponentes', justify: 'Preparo imediato para transfusão maciça se necessário', expected: 'Disponibilização ágil de concentrado de hemácias' },
        { exam: 'Coagulograma', justify: 'Avaliar coagulopatia associada ao trauma/sangramento maciço', expected: 'TP/INR prolongado, sugerindo coagulopatia do trauma' }
      ],
      expectedConduct: 'Farmacológica: reanimação volêmica com hemocomponentes seguindo protocolo de transfusão maciça (relação equilibrada de concentrado de hemácias, plasma fresco e plaquetas), evitando reposição excessiva de cristaloides isolados; ácido tranexâmico precocemente (idealmente nas primeiras 3h do trauma) para reduzir mortalidade por sangramento | Não farmacológica: controle imediato do sangramento externo visível (compressão direta na fratura exposta, imobilização); laparotomia exploradora de urgência dado FAST positivo com instabilidade hemodinâmica persistente; fixação/estabilização da fratura de fêmur conforme prioridades cirúrgicas; manter normotermia (risco de hipotermia agrava coagulopatia) | Orientações à equipe: comunicar a necessidade de acionamento imediato do centro cirúrgico e da equipe de trauma; documentar claramente a sequência de decisões do ABCDE | Seguimento: monitorização contínua em UTI pós-operatória, reavaliação seriada de hemoglobina e coagulograma',
      expectedCommunication: 'Conduzir a avaliação de forma sistematizada e verbalizada (ABCDE), facilitando a comunicação com a equipe de trauma | Comunicar-se com o SAMU utilizando estrutura MIST para obter informações relevantes rapidamente | Acionar prontamente a equipe cirúrgica sem atrasos desnecessários',
      criticalErrors: [
        'Não seguir a sequência sistematizada do ABCDE na avaliação primária do trauma',
        'Atrasar a reanimação/decisão cirúrgica aguardando exames complementares extensos (ex.: tomografia) em paciente instável com FAST positivo',
        'Não realizar FAST à beira leito diante de trauma abdominal com instabilidade hemodinâmica',
        'Repor volume predominantemente com cristaloides em grande quantidade em vez de priorizar hemocomponentes em choque hemorrágico grave',
        'Não classificar corretamente o grau de choque hemorrágico conforme os parâmetros do ATLS'
      ]
    },
    instD: {
      title: 'CHECKLIST — POLITRAUMATIZADO COM HIPOTENSÃO (CHOQUE HEMORRÁGICO)',
      sections: [
        {
          h: 'BLOCO 1 — COMUNICAÇÃO E TRABALHO EM EQUIPE',
          items: [
            { item: 'Obteve informações do SAMU de forma estruturada (mecanismo, sinais vitais, tratamento)', score: 0.5, ref: 'ATLS — Protocolo MIST' },
            { item: 'Acionou prontamente a equipe cirúrgica/centro cirúrgico', score: 0.5, ref: 'ATLS' }
          ]
        },
        {
          h: 'BLOCO 2 — AVALIAÇÃO PRIMÁRIA SISTEMATIZADA',
          items: [
            { item: 'Conduziu a avaliação primária na sequência ABCDE', score: 1.5, ref: 'ATLS 10ª edição' },
            { item: 'Controlou o sangramento externo visível (fratura exposta)', score: 0.5, ref: 'ATLS 10ª edição' }
          ]
        },
        {
          h: 'BLOCO 3 — EXAME FÍSICO',
          items: [
            { item: 'Realizou FAST à beira leito', score: 1.0, ref: 'ATLS 10ª edição' },
            { item: 'Avaliou estabilidade pélvica', score: 0.5, ref: 'ATLS 10ª edição' }
          ]
        },
        {
          h: 'BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
          items: [
            { item: 'Classificou corretamente o grau de choque hemorrágico', score: 1.0, ref: 'ATLS — Classificação de Choque Hemorrágico' },
            { item: 'Solicitou tipagem sanguínea e hemocomponentes sem atrasar a conduta', score: 0.5, ref: 'ATLS 10ª edição' }
          ]
        },
        {
          h: 'BLOCO 5 — CONDUTA',
          items: [
            { item: 'Indicou laparotomia de urgência diante de FAST positivo com instabilidade', score: 1.5, ref: 'ATLS 10ª edição' },
            { item: 'Priorizou hemocomponentes (não apenas cristaloides) na reanimação volêmica', score: 1.0, ref: 'ATLS 10ª edição; Protocolo de Transfusão Maciça' },
            { item: 'Considerou ácido tranexâmico precoce', score: 0.5, ref: 'CRASH-2 Trial' }
          ]
        }
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // CASO 4 — PARADA CARDIORRESPIRATÓRIA (RCP/ACLS)
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 4,
    title: 'Paciente encontrado sem resposta e sem pulso na enfermaria',
    sub: 'Enfermaria — Emergência Interna',
    tema: 'Medicina Intensiva',
    topic: 'Parada Cardiorrespiratória',
    level: 'complexo',
    cardAccent: '#E65100',
    instA: {
      scenario: 'Enfermaria clínica, paciente internado por insuficiência cardíaca descompensada, encontrado irresponsivo pela equipe de enfermagem.',
      patient: 'A.C.F., 71 anos, masculino, internado há 3 dias por insuficiência cardíaca descompensada.',
      complaint: 'Encontrado irresponsivo no leito, sem movimentos respiratórios efetivos.',
      tasks: [
        'Confirme a parada cardiorrespiratória e inicie a reanimação cardiopulmonar imediatamente.',
        'Conduza a sequência de RCP de alta qualidade conforme o protocolo ACLS.',
        'Identifique o ritmo de parada e aplique a conduta específica (desfibrilável x não desfibrilável).',
        'Investigue e trate as causas reversíveis (5H e 5T).',
        'Conduza os cuidados pós-parada cardíaca em caso de retorno da circulação espontânea (RCE).'
      ]
    },
    instB: {
      vitals: {
        PA: 'Não detectável (ausência de pulso central)',
        FC: 'Ritmo no monitor: fibrilação ventricular',
        FR: 'Ausência de movimentos respiratórios efetivos (gasping ocasional)',
        SpO2: 'Não detectável no momento'
      },
      physicalGeneral: 'Irresponsivo, sem resposta a estímulos, sem pulso carotídeo palpável.',
      physicalSeg: 'Ausência de pulso central (carotídeo) confirmada por 10 segundos | Ausência de movimentos respiratórios efetivos | Monitor cardíaco conectado pela equipe mostrando ritmo caótico compatível com fibrilação ventricular.',
      labs: [
        { test: 'Glicemia capilar (obtida rapidamente pela equipe)', val: '92 mg/dL', ref: '70–99 mg/dL', alt: false },
        { test: 'Gasometria (coletada durante a RCP, resultado após alguns minutos)', val: 'pH 7,18, K+ 5,8 mEq/L, lactato 8,5 mmol/L', ref: 'pH 7,35-7,45; K+ 3,5-5,0; lactato <2,0', alt: true }
      ],
      image: 'Monitor cardíaco: traçado caótico, irregular, sem complexos QRS organizados, compatível com fibrilação ventricular (ritmo desfibrilável).',
      note: 'Este é um cenário de simulação de emergência máxima — a sequência de ações deve ser conduzida sem demora. O potássio elevado (5,8 mEq/L) na gasometria coletada durante a RCP é uma pista para uma causa reversível (hipercalemia, um dos "5H"), relevante dado o contexto de insuficiência cardíaca/possível disfunção renal associada — deve ser buscada ativamente e tratada em paralelo à RCP.',
      patientProfile: 'Internado por insuficiência cardíaca descompensada, em uso de diuréticos e inibidor de enzima conversora de angiotensina, com função renal basal já reduzida (creatinina 2,1 mg/dL na admissão).',
      script: [
        { trigger: 'Chamado da equipe de enfermagem', speech: 'Doutor(a)! O paciente está sem resposta, não estou sentindo pulso! Preciso de ajuda agora!' },
        { trigger: 'Durante a RCP, informação sobre função renal', speech: '(se perguntado) A creatinina dele na admissão já estava em 2,1, ele tem uma disfunção renal de base, e está em uso de diurético e IECA.' },
        { trigger: 'Após 2 minutos de RCP e desfibrilação, checagem de ritmo', speech: 'Doutor(a), o ritmo continua o mesmo no monitor, ainda parece irregular.' },
        { trigger: 'Pergunta da equipe sobre causas', speech: 'Doutor(a), o que pode ter causado isso? Ele estava estável até agora há pouco.' }
      ],
      hiddenInfo: 'A gasometria coletada durante a RCP mostra hipercalemia significativa (K+ 5,8), causa reversível que deve ser tratada em paralelo à RCP (gluconato de cálcio, insulina+glicose, bicarbonato) — essa informação já está disponível se o candidato solicitar gasometria durante a reanimação | O paciente estava recebendo infusão de potássio endovenoso prescrita por engano nas últimas horas (erro de prescrição), fator contribuinte para a hipercalemia — informação de contexto que pode ser mencionada pela equipe se perguntado sobre medicações em infusão no momento do evento',
      actorBehavior: 'Não aplicável — paciente em parada cardiorrespiratória. A "atuação" está inteiramente na equipe de enfermagem, que demonstra urgência, fornece informações objetivas quando perguntada, e executa as ordens do candidato (compressões, desfibrilação, medicações) conforme solicitado.'
    },
    instC: {
      diagnosis: 'Parada cardiorrespiratória em ritmo de fibrilação ventricular (ritmo desfibrilável), com hipercalemia significativa identificada como causa reversível contribuinte (um dos "5H" — Hipercalemia).',
      differentials: [
        'Parada em atividade elétrica sem pulso (AESP) — entra como diagnóstico alternativo de ritmo de parada; afastada pela identificação clara de fibrilação ventricular no monitor, ritmo caótico sem complexos organizados',
        'Assistolia — entra como outro ritmo não desfibrilável possível; afastada pelo traçado caótico compatível com FV, não linha reta',
        'Causa isquêmica coronariana aguda como gatilho primário — deve ser considerada e investigada após RCE (eletrocardiograma, troponina), mas não deve atrasar a RCP imediata',
        'Embolia pulmonar maciça como causa da PCR — permanece no diagnóstico diferencial das causas reversíveis (5T — Trombose pulmonar) a ser considerada, especialmente em paciente internado com possível imobilização prolongada'
      ],
      context: 'A parada cardiorrespiratória em ritmo de fibrilação ventricular exige reconhecimento imediato, início de compressões torácicas de alta qualidade e desfibrilação precoce, sendo esses os fatores com maior impacto comprovado na sobrevida. A busca simultânea por causas reversíveis (5H: hipovolemia, hipóxia, hidrogênio/acidose, hipo/hipercalemia, hipotermia; 5T: tensão no tórax/pneumotórax hipertensivo, tamponamento cardíaco, toxinas, trombose pulmonar, trombose coronariana) deve ocorrer em paralelo à RCP, sem interromper as compressões torácicas.',
      justify: 'A confirmação de ausência de pulso e ritmo de fibrilação ventricular no monitor indica ritmo desfibrilável, com conduta imediata de desfibrilação associada a compressões torácicas de alta qualidade (protocolo ACLS). A gasometria durante a RCP revelando hipercalemia significativa (K+ 5,8 mEq/L) em paciente com disfunção renal de base e possível erro de infusão de potássio identifica uma causa reversível tratável (5H — Hipercalemia), que deve ser corrigida ativamente em paralelo à RCP para aumentar a chance de retorno da circulação espontânea sustentado.',
      expectedAnamnesis: 'Obter rapidamente da equipe informações sobre comorbidades e medicações em uso (sem atrasar o início da RCP) | Investigar fatores de risco/causas potenciais durante a RCP (função renal, eletrólitos, medicações em infusão)',
      expectedPhysical: 'Confirmar ausência de resposta, respiração e pulso central em até 10 segundos | Reavaliar ritmo a cada 2 minutos de RCP | Verificar qualidade das compressões (profundidade, frequência, retorno completo do tórax, minimizar interrupções)',
      expectedExams: [
        { exam: 'Monitor cardíaco/desfibrilador', justify: 'Identificar o ritmo de parada, determinando conduta desfibrilável x não desfibrilável', expected: 'Fibrilação ventricular — ritmo desfibrilável' },
        { exam: 'Gasometria arterial/venosa com eletrólitos durante a RCP', justify: 'Investigar causas reversíveis metabólicas (hipercalemia, acidose)', expected: 'Hipercalemia significativa (K+ 5,8) e acidose — causas reversíveis a tratar' },
        { exam: 'Glicemia capilar', justify: 'Excluir hipoglicemia como fator contribuinte/agravante', expected: 'Normal neste caso' }
      ],
      expectedConduct: 'Farmacológica: adrenalina 1 mg IV a cada 3-5 minutos conforme protocolo ACLS; amiodarona 300 mg IV (dose inicial) para FV/TV sem pulso refratária à desfibrilação; tratamento específico da hipercalemia identificada — gluconato de cálcio IV (estabilização de membrana), insulina regular associada a glicose IV, bicarbonato de sódio se acidose importante | Não farmacológica: iniciar compressões torácicas de alta qualidade imediatamente (100-120/min, profundidade 5-6 cm, permitir retorno completo do tórax, minimizar interrupções); desfibrilação imediata assim que confirmado ritmo de FV (200J bifásico ou conforme equipamento), retomando compressões imediatamente após o choque sem checar pulso/ritmo antes de completar 2 minutos; via aérea avançada conforme disponibilidade da equipe, sem interromper compressões para esse procedimento | Orientações à equipe: comunicar claramente cada etapa e delegar funções (compressões, via aérea, medicações, desfibrilador) | Seguimento: em caso de RCE, cuidados pós-parada (controle direcionado de temperatura, otimização hemodinâmica, investigação da causa com ECG/ecocardiograma, correção continuada da hipercalemia e revisão de prescrições)',
      expectedCommunication: 'Assumir a liderança da equipe de forma clara, delegando funções específicas durante a RCP | Comunicar em voz alta cada decisão (desfibrilação, medicações, checagem de ritmo) para toda a equipe | Após RCE ou encerramento dos esforços, comunicar-se adequadamente com a família',
      criticalErrors: [
        'Atrasar o início das compressões torácicas para realizar procedimentos não prioritários',
        'Não desfibrilar prontamente diante de ritmo de fibrilação ventricular confirmado',
        'Interromper as compressões torácicas por período prolongado desnecessariamente',
        'Não investigar/tratar causas reversíveis (5H/5T), especialmente a hipercalemia identificada na gasometria',
        'Não seguir a sequência correta de medicações e intervalos conforme protocolo ACLS'
      ]
    },
    instD: {
      title: 'CHECKLIST — PACIENTE SEM RESPOSTA E SEM PULSO (PCR)',
      sections: [
        {
          h: 'BLOCO 1 — LIDERANÇA E COMUNICAÇÃO DA EQUIPE',
          items: [
            { item: 'Assumiu a liderança da equipe de forma clara, delegando funções', score: 1.0, ref: 'AHA — ACLS Guidelines' },
            { item: 'Comunicou em voz alta cada decisão tomada durante a RCP', score: 0.5, ref: 'AHA — ACLS Guidelines' }
          ]
        },
        {
          h: 'BLOCO 2 — RECONHECIMENTO E INÍCIO IMEDIATO DA RCP',
          items: [
            { item: 'Confirmou ausência de resposta, respiração e pulso em até 10 segundos', score: 1.0, ref: 'AHA — ACLS Guidelines' },
            { item: 'Iniciou compressões torácicas de alta qualidade imediatamente', score: 1.5, ref: 'AHA — ACLS Guidelines' }
          ]
        },
        {
          h: 'BLOCO 3 — MANEJO DO RITMO DE PARADA',
          items: [
            { item: 'Identificou corretamente o ritmo (fibrilação ventricular) como desfibrilável', score: 1.0, ref: 'AHA — ACLS Guidelines' },
            { item: 'Desfibrilou prontamente e retomou compressões imediatamente após o choque', score: 1.5, ref: 'AHA — ACLS Guidelines' }
          ]
        },
        {
          h: 'BLOCO 4 — INVESTIGAÇÃO DE CAUSAS REVERSÍVEIS',
          items: [
            { item: 'Investigou causas reversíveis (5H/5T) em paralelo à RCP, sem interromper compressões', score: 1.0, ref: 'AHA — ACLS Guidelines' },
            { item: 'Identificou e tratou a hipercalemia como causa reversível (gluconato de cálcio, insulina+glicose)', score: 1.5, ref: 'AHA — ACLS Guidelines' }
          ]
        },
        {
          h: 'BLOCO 5 — MEDICAÇÕES E CUIDADOS PÓS-PARADA',
          items: [
            { item: 'Administrou adrenalina e amiodarona nas doses e intervalos corretos', score: 1.0, ref: 'AHA — ACLS Guidelines' }
          ]
        }
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // CASO 5 — INJÚRIA RENAL AGUDA EM PACIENTE CRÍTICO
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 5,
    title: 'Queda do débito urinário e elevação da creatinina na UTI',
    sub: 'UTI — Medicina Intensiva',
    tema: 'Medicina Intensiva',
    topic: 'Injúria Renal Aguda',
    level: 'difícil',
    cardAccent: '#E65100',
    instA: {
      scenario: 'UTI, paciente em pós-operatório de cirurgia abdominal de grande porte, 3º dia de internação.',
      patient: 'N.F.T., 62 anos, masculino, pós-operatório de retossigmoidectomia por câncer colorretal.',
      complaint: 'Queda progressiva do débito urinário e elevação da creatinina nas últimas 24 horas.',
      tasks: [
        'Revise a evolução clínica e os dados de balanço hídrico e diurese.',
        'Realize o exame físico voltado para volemia e sinais de obstrução.',
        'Classifique a gravidade da injúria renal aguda conforme critérios KDIGO.',
        'Solicite os exames complementares para investigação etiológica.',
        'Proponha a conduta terapêutica e critérios para terapia renal substitutiva.'
      ]
    },
    instB: {
      vitals: {
        PA: '96/60 mmHg',
        FC: '104 bpm',
        FR: '20 irpm',
        Tax: '37,8 °C',
        SpO2: '95%',
        Diurese: '0,2 mL/kg/h nas últimas 12 horas'
      },
      physicalGeneral: 'Regular estado geral, mucosas discretamente secas, sem edema significativo.',
      physicalSeg: 'ABDOME: cirúrgico, curativo em bom estado, ruídos hidroaéreos presentes, discreta distensão | CARDIOVASCULAR: taquicárdico, bulhas normofonéticas | Sonda vesical de demora presente, sem sinais de obstrução ao exame (sem globo vesical, sonda pérvia à manipulação) | MMII: sem edema.',
      labs: [
        { test: 'Creatinina', val: '2,4 mg/dL (basal pré-operatório: 0,9 mg/dL)', ref: '0,7–1,3 mg/dL', alt: true },
        { test: 'Ureia', val: '98 mg/dL', ref: '15–45 mg/dL', alt: true },
        { test: 'Potássio sérico', val: '5,4 mEq/L', ref: '3,5–5,0 mEq/L', alt: true },
        { test: 'Sódio urinário', val: '18 mEq/L', ref: 'Fração de excreção de sódio calculada sugere origem pré-renal', alt: true },
        { test: 'Gasometria venosa — pH', val: '7,31', ref: '7,35–7,45', alt: true },
        { test: 'Hemograma — Leucócitos', val: '9.800/mm³', ref: '4.000–11.000/mm³', alt: false }
      ],
      image: 'Ultrassonografia de vias urinárias: rins de dimensões normais, sem sinais de hidronefrose ou dilatação de vias excretoras, descartando causa obstrutiva pós-renal.',
      note: 'O balanço hídrico das últimas 48h deve ser buscado ativamente pelo candidato (dado central para classificar a causa pré-renal). A ultrassonografia renal exclui causa obstrutiva pós-renal e deve ser solicitada como parte da investigação padrão.',
      patientProfile: 'Pós-operatório de cirurgia oncológica de grande porte, com perdas intraoperatórias significativas, evoluindo nos últimos 2 dias com débito elevado por dreno abdominal e ingesta oral ainda não reiniciada.',
      script: [
        { trigger: 'Informação da equipe de enfermagem', speech: 'Doutor(a), o débito urinário dele caiu bastante nas últimas horas, e a creatinina do exame de hoje veio bem mais alta que a de ontem.' },
        { trigger: 'Sobre o balanço hídrico', speech: 'O balanço hídrico das últimas 48h está bem negativo, ele tem perdido bastante pelo dreno abdominal e ainda não voltou a comer/beber direito.' },
        { trigger: 'Sobre medicações em uso', speech: 'Ele está em uso de um anti-inflamatório para dor pós-operatória prescrito ontem, e também recebeu contraste endovenoso na tomografia de controle há 2 dias.' },
        { trigger: 'Pergunta da equipe — conduta', speech: 'Doutor(a), precisamos aumentar o soro? Ou já pensamos em diálise?' }
      ],
      hiddenInfo: 'Recebeu anti-inflamatório não esteroidal (AINE) prescrito para analgesia pós-operatória nas últimas 24h, medicação nefrotóxica que deve ser identificada e suspensa — só revela se o candidato revisar ativamente a prescrição/medicações em uso | Recebeu contraste endovenoso iodado há 2 dias para tomografia de controle, outro fator de risco para lesão renal — só revela se perguntado sobre exames de imagem recentes com contraste | O débito pelo dreno abdominal está sendo subestimado no balanço hídrico registrado (erro de registro da equipe), o que pode levar a subestimar a real perda de volume — informação sutil que só é revelada se o candidato questionar detalhadamente a mensuração dos débitos',
      actorBehavior: 'Não aplicável diretamente — paciente pós-operatório estável do ponto de vista de consciência, mas o foco da simulação está na revisão de dados objetivos com a equipe de enfermagem, que responde de forma colaborativa às perguntas.'
    },
    instC: {
      diagnosis: 'Injúria Renal Aguda (IRA) estágio 2 pelos critérios KDIGO (creatinina >2x o basal, débito urinário <0,5 mL/kg/h por mais de 12h), de provável etiologia pré-renal (hipovolemia por perdas em dreno e jejum) associada a fatores nefrotóxicos contribuintes (AINE, contraste iodado recente).',
      differentials: [
        'IRA de causa pós-renal (obstrutiva) — excluída pela ultrassonografia de vias urinárias sem sinais de hidronefrose e pela sonda vesical pérvia sem sinais de obstrução',
        'Necrose tubular aguda estabelecida — entra como evolução possível de IRA pré-renal não corrigida a tempo, ou diretamente por nefrotoxicidade (AINE, contraste); a fração de excreção de sódio ainda sugestiva de padrão pré-renal (sódio urinário baixo) neste momento indica que a correção volêmica precoce pode ainda reverter o quadro antes da evolução para NTA estabelecida',
        'Nefrite intersticial aguda por AINE — entra como possibilidade dado o uso recente do medicamento; menos provável neste momento pela ausência de outros achados típicos (eosinofilia, rash), mas reforça a necessidade de suspensão do AINE independentemente do mecanismo exato',
        'Síndrome hepatorrenal ou outras causas sistêmicas — menos prováveis no contexto cirúrgico apresentado, sem evidência de disfunção hepática associada'
      ],
      context: 'A injúria renal aguda é comum em pacientes críticos e cirúrgicos, sendo classificada pelos critérios KDIGO com base na elevação da creatinina sérica e/ou redução do débito urinário. A identificação da causa (pré-renal, renal intrínseca, pós-renal) e de fatores nefrotóxicos evitáveis (AINEs, contraste iodado) é essencial para a conduta, priorizando a correção da causa de base antes de medidas mais invasivas.',
      justify: 'Os critérios KDIGO classificam este caso como IRA estágio 2 (creatinina 2,4 mg/dL, mais que o dobro do basal de 0,9 mg/dL, associada a débito urinário de 0,2 mL/kg/h sustentado por mais de 12 horas). O padrão de sódio urinário baixo sugere fisiopatologia predominantemente pré-renal (hipovolemia por perdas em dreno abdominal e jejum prolongado), agravada por fatores nefrotóxicos identificáveis e evitáveis (AINE em uso recente, contraste iodado há 2 dias), que devem ser corrigidos/suspensos como parte central da conduta.',
      expectedAnamnesis: 'Revisar cronologia da queda de diurese e elevação da creatinina | Investigar balanço hídrico das últimas 48h (aportes e perdas, incluindo dreno) | Revisar TODAS as medicações em uso, buscando ativamente nefrotóxicos (AINEs, aminoglicosídeos) | Perguntar sobre exposição recente a contraste iodado',
      expectedPhysical: 'Avaliação de sinais de volemia (mucosas, turgor, ausculta pulmonar) | Exame abdominal e do dreno cirúrgico | Verificação de sonda vesical (excluir obstrução mecânica) | Avaliação de edema',
      expectedExams: [
        { exam: 'Creatinina e ureia seriadas', justify: 'Confirmar e quantificar a lesão renal, aplicando critérios KDIGO', expected: 'Creatinina >2x o basal — IRA estágio 2' },
        { exam: 'Sódio urinário/fração de excreção de sódio', justify: 'Auxiliar na diferenciação entre causa pré-renal e necrose tubular aguda estabelecida', expected: 'Sódio urinário baixo — sugestivo de causa pré-renal' },
        { exam: 'Ultrassonografia de vias urinárias', justify: 'Excluir causa obstrutiva (pós-renal)', expected: 'Sem hidronefrose — exclui obstrução' },
        { exam: 'Potássio sérico e gasometria', justify: 'Avaliar complicações metabólicas da IRA (hipercalemia, acidose metabólica)', expected: 'Hipercalemia leve e acidose metabólica presentes' }
      ],
      expectedConduct: 'Farmacológica: SUSPENDER imediatamente medicações nefrotóxicas evitáveis (AINE); tratar hipercalemia leve-moderada conforme protocolo se necessário; evitar novos contrastes iodados exceto se estritamente necessário | Não farmacológica: otimização volêmica cuidadosa (reposição de perdas pelo dreno e correção da hipovolemia, evitando tanto hipovolemia quanto sobrecarga), reavaliando resposta pela diurese; suspender ou ajustar dose de outras medicações de eliminação renal conforme a função atual | Orientações à equipe: reforçar a importância de mensuração precisa e registro correto de todos os débitos (dreno, diurese) para cálculo confiável do balanço hídrico; explicar o racional da suspensão do AINE | Seguimento: reavaliação seriada de função renal e diurese após otimização volêmica; considerar terapia renal substitutiva (diálise) diante de critérios como hipercalemia refratária, acidose grave refratária, sobrecarga volêmica refratária ou uremia sintomática — nenhum presente de forma refratária neste momento, portanto priorizar medidas conservadoras primeiro',
      expectedCommunication: 'Comunicar-se com a equipe sobre a importância da mensuração precisa de débitos para o balanço hídrico | Explicar o racional de suspender o AINE e evitar novo contraste | Documentar claramente a classificação KDIGO e o plano terapêutico',
      criticalErrors: [
        'Não revisar as medicações em uso e não identificar/suspender o AINE nefrotóxico',
        'Não classificar a gravidade da IRA pelos critérios KDIGO',
        'Não investigar a causa pré-renal (balanço hídrico, perdas pelo dreno) antes de considerar medidas mais invasivas',
        'Não solicitar ultrassonografia para excluir causa obstrutiva (pós-renal)',
        'Indicar terapia renal substitutiva prematuramente sem antes tentar otimização volêmica e correção de fatores reversíveis, na ausência de critérios de urgência dialítica'
      ]
    },
    instD: {
      title: 'CHECKLIST — QUEDA DO DÉBITO URINÁRIO E ELEVAÇÃO DA CREATININA (IRA)',
      sections: [
        {
          h: 'BLOCO 1 — COMUNICAÇÃO COM A EQUIPE',
          items: [
            { item: 'Reforçou com a equipe a importância da mensuração precisa de débitos', score: 0.5, ref: 'KDIGO Clinical Practice Guideline for AKI' }
          ]
        },
        {
          h: 'BLOCO 2 — REVISÃO CLÍNICA E DE MEDICAÇÕES',
          items: [
            { item: 'Revisou o balanço hídrico das últimas 48h', score: 1.0, ref: 'KDIGO Clinical Practice Guideline for AKI' },
            { item: 'Revisou as medicações em uso e identificou o AINE nefrotóxico', score: 1.5, ref: 'KDIGO Clinical Practice Guideline for AKI' },
            { item: 'Investigou exposição recente a contraste iodado', score: 0.5, ref: 'KDIGO Clinical Practice Guideline for AKI' }
          ]
        },
        {
          h: 'BLOCO 3 — EXAME FÍSICO',
          items: [
            { item: 'Avaliou sinais de volemia e verificou a sonda vesical/dreno', score: 0.5, ref: 'KDIGO Clinical Practice Guideline for AKI' }
          ]
        },
        {
          h: 'BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
          items: [
            { item: 'Classificou a IRA pelos critérios KDIGO (estágio 2)', score: 1.5, ref: 'KDIGO Clinical Practice Guideline for AKI' },
            { item: 'Solicitou ultrassonografia de vias urinárias para excluir causa obstrutiva', score: 1.0, ref: 'KDIGO Clinical Practice Guideline for AKI' }
          ]
        },
        {
          h: 'BLOCO 5 — CONDUTA',
          items: [
            { item: 'Suspendeu o AINE imediatamente', score: 1.0, ref: 'KDIGO Clinical Practice Guideline for AKI' },
            { item: 'Indicou otimização volêmica antes de considerar diálise, na ausência de critérios de urgência', score: 1.0, ref: 'KDIGO Clinical Practice Guideline for AKI' }
          ]
        }
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // CASO 6 — DELIRIUM EM UTI
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 6,
    title: 'Agitação e desorientação em paciente na UTI',
    sub: 'UTI — Medicina Intensiva',
    tema: 'Medicina Intensiva',
    topic: 'Delirium em UTI',
    level: 'moderado',
    cardAccent: '#E65100',
    instA: {
      scenario: 'UTI, paciente em ventilação mecânica há 4 dias por pneumonia grave, agora em desmame ventilatório.',
      patient: 'I.G.M., 76 anos, feminino, em UTI há 5 dias por pneumonia grave, atualmente em fase de desmame da ventilação mecânica.',
      complaint: 'Equipe relata agitação, tentativas de retirar dispositivos (cateteres, tubo orotraqueal) e desorientação nas últimas 24 horas.',
      tasks: [
        'Avalie o nível de sedação e aplique uma ferramenta de rastreio de delirium (CAM-ICU).',
        'Realize o exame físico dirigido, buscando causas orgânicas do delirium.',
        'Revise fatores de risco e desencadeantes potencialmente reversíveis.',
        'Solicite os exames complementares pertinentes.',
        'Proponha a conduta terapêutica, priorizando medidas não farmacológicas.'
      ]
    },
    instB: {
      vitals: {
        PA: '138/86 mmHg',
        FC: '98 bpm',
        FR: '22 irpm',
        Tax: '37,4 °C',
        SpO2: '94%',
        'Escala RASS': '+2 (agitada)'
      },
      physicalGeneral: 'Agitada, tentando remover cateteres e o tubo orotraqueal, respondendo de forma incoerente às perguntas simples.',
      physicalSeg: 'NEUROLÓGICO: desorientada em tempo e espaço, atenção flutuante (dificuldade em manter foco em tarefa simples solicitada), pensamento desorganizado | Sem sinais focais localizatórios | RESPIRATÓRIO: ausculta com melhora em relação a dias anteriores, murmúrio vesicular presente bilateralmente com discretos estertores residuais em base direita | Sem rigidez de nuca.',
      labs: [
        { test: 'Glicemia capilar', val: '104 mg/dL', ref: '70–99 mg/dL', alt: true },
        { test: 'Sódio sérico', val: '133 mEq/L', ref: '135–145 mEq/L', alt: true },
        { test: 'Ureia e creatinina', val: 'Dentro da normalidade para a paciente', ref: 'Normal', alt: false },
        { test: 'Urina tipo I', val: 'Sem sinais de infecção urinária', ref: 'Normal', alt: false },
        { test: 'Proteína C reativa', val: 'Em queda em relação aos dias anteriores', ref: 'Tendência de melhora do quadro infeccioso de base', alt: false }
      ],
      note: 'A avaliação do CAM-ICU (Confusion Assessment Method for the ICU) deve ser aplicada/considerada pelo candidato como ferramenta de rastreio — reforçar seus 4 componentes (início agudo/flutuante, desatenção, pensamento desorganizado, alteração do nível de consciência) se o candidato não estiver familiarizado. A revisão da lista de medicações em uso é central neste caso.',
      patientProfile: 'Idosa, previamente independente e sem déficit cognitivo conhecido antes da internação, em uso de sedação com benzodiazepínico nos primeiros dias de ventilação mecânica (já suspenso há 24h), além de restrição ao leito prolongada.',
      script: [
        { trigger: 'Informação da equipe de enfermagem', speech: 'Doutor(a), ela está bem agitada desde ontem à noite, tentou arrancar o tubo e os acessos várias vezes, e não reconhece onde está.' },
        { trigger: 'Sobre o padrão da agitação', speech: 'Ela alterna, em alguns momentos parece mais calma e até sonolenta, e de repente fica agitada de novo — não é uma coisa constante.' },
        { trigger: 'Sobre o histórico cognitivo prévio', speech: 'A família disse que ela sempre foi bem lúcida antes de internar, sem nenhum problema de memória conhecido.' },
        { trigger: 'Sobre medicações em uso', speech: 'Ela recebeu benzodiazepínico nos primeiros dias de sedação, mas já foi suspenso há um dia. Ainda está com um opioide para analgesia.' },
        { trigger: 'Pergunta da equipe — conduta', speech: 'Doutor(a), damos algum sedativo para ela ficar mais calma? Estamos com medo dela se machucar ou se extubar sozinha.' }
      ],
      hiddenInfo: 'A paciente não tem óculos nem aparelho auditivo disponíveis na UTI (usa ambos em casa), o que pode estar contribuindo para desorientação sensorial — só revela se perguntado sobre uso de óculos/aparelho auditivo previamente | O ciclo sono-vigília está completamente invertido, com luzes acesas e ruído constante durante a noite no setor — só revela se perguntado sobre o ambiente e rotina de sono da paciente | Não houve mobilização precoce fora do leito nos últimos dias por sobrecarga da equipe — só revela se perguntado sobre mobilização/fisioterapia',
      actorBehavior: 'Não aplicável diretamente como "roteiro verbal coerente" — a paciente está desorientada e responde de forma incoerente ou incompleta se questionada, refletindo o quadro de delirium. A interação principal se dá com a equipe de enfermagem, que fornece as informações objetivas.'
    },
    instC: {
      diagnosis: 'Delirium hiperativo em paciente crítica (CAM-ICU positivo), multifatorial — associado a fatores de risco predisponentes (idade avançada) e precipitantes potencialmente reversíveis (privação de sono, imobilização prolongada, ausência de dispositivos sensoriais habituais, uso recente de sedativos, doença de base ainda em resolução).',
      differentials: [
        'Demência de início recente — entra como diferencial de alteração cognitiva; afastada pela história de função cognitiva prévia preservada e pelo caráter agudo e flutuante do quadro atual, características centrais do delirium e não da demência',
        'Abstinência de álcool ou benzodiazepínicos — entra como causa de agitação em UTI; deve ser considerada e investigada na história, mas não há relato de uso crônico prévio dessas substâncias antes da internação',
        'Causa neurológica estrutural (AVC, hemorragia) — entra como diagnóstico a excluir diante de alteração aguda do estado mental; menos provável na ausência de sinais focais, mas deve ser considerada se o quadro não melhorar com medidas gerais ou se surgirem sinais localizatórios',
        'Distúrbio metabólico não identificado (ex.: disfunção tireoidiana, deficiência de vitaminas) — permanece no diagnóstico diferencial de delirium sem causa clara identificada, a ser investigado se o quadro persistir apesar da correção dos fatores já identificados'
      ],
      context: 'O delirium é uma disfunção cerebral aguda extremamente comum em pacientes críticos, especialmente idosos em ventilação mecânica prolongada, associado a maior mortalidade, tempo de internação e declínio cognitivo a longo prazo. É multifatorial, resultando da interação entre fatores predisponentes (idade, comorbidades, déficit sensorial) e precipitantes (sedativos, imobilização, privação de sono, dor mal controlada, infecção). O manejo prioriza a identificação e correção de fatores reversíveis e medidas não farmacológicas, reservando antipsicóticos para agitação com risco de dano ao próprio paciente ou à equipe.',
      justify: 'O quadro preenche os critérios do CAM-ICU: início agudo e curso flutuante (alternância entre agitação e sonolência), desatenção (dificuldade em manter foco), pensamento desorganizado (respostas incoerentes) e alteração do nível de consciência (RASS +2). A ausência de déficit cognitivo prévio, associada a múltiplos fatores de risco identificáveis e reversíveis (uso recente de benzodiazepínico, imobilização prolongada, privação de dispositivos sensoriais habituais, distúrbio do ciclo sono-vigília, hiponatremia leve), sustenta o diagnóstico de delirium multifatorial, distinto de demência ou causa neurológica estrutural isolada.',
      expectedAnamnesis: 'Revisar função cognitiva prévia à internação com a família/equipe | Investigar cronologia e padrão flutuante da agitação | Revisar todas as medicações administradas nos últimos dias (sedativos, opioides) | Perguntar sobre uso prévio de óculos/aparelho auditivo | Investigar rotina de sono e mobilização no setor',
      expectedPhysical: 'Aplicar/considerar o CAM-ICU (avaliar os 4 componentes) | Avaliar nível de sedação pela escala RASS | Exame neurológico sumário buscando sinais focais | Ausculta pulmonar (avaliar evolução do quadro infeccioso de base)',
      expectedExams: [
        { exam: 'Glicemia capilar', justify: 'Excluir hipo/hiperglicemia como causa metabólica de alteração do estado mental', expected: 'Discretamente elevada, não explica isoladamente o quadro' },
        { exam: 'Eletrólitos (sódio, potássio, cálcio)', justify: 'Investigar distúrbio metabólico como fator contribuinte', expected: 'Hiponatremia leve — fator contribuinte a corrigir' },
        { exam: 'Função renal e marcadores infecciosos (PCR)', justify: 'Avaliar função de órgãos e evolução do quadro infeccioso de base como fatores contribuintes', expected: 'Função renal normal; PCR em queda, sugerindo melhora infecciosa' },
        { exam: 'Revisão da lista de medicações (reconciliação medicamentosa)', justify: 'Identificar medicações deliriogênicas em uso (sedativos, anticolinérgicos)', expected: 'Benzodiazepínico usado recentemente — fator de risco relevante' }
      ],
      expectedConduct: 'Farmacológica: evitar benzodiazepínicos (podem piorar/perpetuar o delirium, exceto em abstinência confirmada); reservar antipsicótico (ex.: haloperidol ou quetiapina em baixa dose) apenas para agitação grave com risco iminente de dano ao paciente/equipe, pelo menor tempo possível; garantir controle adequado da dor com opioide em dose otimizada (dor mal controlada é fator precipitante de delirium); corrigir hiponatremia leve identificada | Não farmacológica: priorizar medidas do pacote ABCDEF (Assessment/manejo de dor, Both spontaneous awakening e breathing trials, Choice de sedação leve, Delirium monitoring, Early mobility, Family engagement); promover reorientação frequente (relógio, calendário, explicações), fornecer óculos/aparelho auditivo habituais, restabelecer ciclo dia-noite (luz natural, redução de ruído noturno), mobilização precoce fora do leito assim que possível, presença de familiares | Orientações à equipe/família: explicar a natureza do delirium e tranquilizar quanto à reversibilidade potencial com as medidas adotadas; orientar a família sobre a importância de sua presença e de trazer itens familiares (óculos, aparelho auditivo) | Seguimento: reavaliação diária com CAM-ICU até resolução',
      expectedCommunication: 'Explicar à equipe a diferença entre sedação e tratamento do delirium (evitar sedar excessivamente como resposta padrão à agitação) | Orientar a família sobre a condição e formas de colaborar (presença, itens familiares) | Documentar claramente os fatores de risco identificados e o plano de correção',
      criticalErrors: [
        'Prescrever benzodiazepínico para controlar a agitação, medida que tipicamente piora o delirium',
        'Não aplicar/considerar uma ferramenta validada de rastreio (CAM-ICU) para o diagnóstico',
        'Não revisar a lista de medicações em uso buscando fatores deliriogênicos',
        'Não priorizar medidas não farmacológicas (reorientação, mobilização, ciclo sono-vigília) antes de recorrer a antipsicóticos',
        'Não investigar/corrigir fatores metabólicos reversíveis identificados (hiponatremia)'
      ]
    },
    instD: {
      title: 'CHECKLIST — AGITAÇÃO E DESORIENTAÇÃO NA UTI (DELIRIUM)',
      sections: [
        {
          h: 'BLOCO 1 — COMUNICAÇÃO COM EQUIPE E FAMÍLIA',
          items: [
            { item: 'Explicou à equipe a diferença entre sedar e tratar o delirium', score: 0.5, ref: 'AMIB — Diretrizes de Sedoanalgesia e Delirium' },
            { item: 'Orientou a família sobre a condição e formas de colaborar', score: 0.5, ref: 'Pacote ABCDEF' }
          ]
        },
        {
          h: 'BLOCO 2 — AVALIAÇÃO E ANAMNESE',
          items: [
            { item: 'Revisou função cognitiva prévia à internação', score: 0.5, ref: 'Pacote ABCDEF' },
            { item: 'Revisou todas as medicações administradas, identificando o benzodiazepínico', score: 1.0, ref: 'AMIB — Diretrizes de Sedoanalgesia e Delirium' }
          ]
        },
        {
          h: 'BLOCO 3 — EXAME/AVALIAÇÃO OBJETIVA',
          items: [
            { item: 'Aplicou ou considerou o CAM-ICU para confirmar o diagnóstico', score: 1.5, ref: 'AMIB — Diretrizes de Sedoanalgesia e Delirium' },
            { item: 'Avaliou o nível de sedação pela escala RASS', score: 0.5, ref: 'AMIB — Diretrizes de Sedoanalgesia e Delirium' }
          ]
        },
        {
          h: 'BLOCO 4 — INVESTIGAÇÃO DE FATORES REVERSÍVEIS',
          items: [
            { item: 'Solicitou eletrólitos e identificou a hiponatremia leve', score: 1.0, ref: 'AMIB — Diretrizes de Sedoanalgesia e Delirium' },
            { item: 'Investigou uso prévio de óculos/aparelho auditivo e privação de sono', score: 0.5, ref: 'Pacote ABCDEF' }
          ]
        },
        {
          h: 'BLOCO 5 — CONDUTA',
          items: [
            { item: 'NÃO prescreveu benzodiazepínico para a agitação', score: 1.5, ref: 'AMIB — Diretrizes de Sedoanalgesia e Delirium' },
            { item: 'Priorizou medidas não farmacológicas (reorientação, mobilização, ciclo sono-vigília)', score: 1.0, ref: 'Pacote ABCDEF' }
          ]
        }
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // CASO 7 — CETOACIDOSE DIABÉTICA GRAVE
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 7,
    title: 'Rebaixamento do nível de consciência com hálito cetônico',
    sub: 'UTI — Medicina Intensiva',
    tema: 'Medicina Intensiva',
    topic: 'Cetoacidose Diabética Grave',
    level: 'complexo',
    cardAccent: '#E65100',
    instA: {
      scenario: 'Pronto-Socorro/UTI, paciente trazida pela família com rebaixamento do nível de consciência.',
      patient: 'P.H.A., 24 anos, masculino, diabético tipo 1, trazido pela família após episódio de vômitos e confusão.',
      complaint: 'Vômitos há 2 dias, respiração rápida e profunda, e confusão mental progressiva.',
      tasks: [
        'Realize a avaliação inicial (ABCDE) e reconheça a gravidade do quadro.',
        'Realize o exame físico dirigido.',
        'Confirme o diagnóstico de cetoacidose diabética e avalie critérios de gravidade.',
        'Solicite os exames complementares adequados.',
        'Conduza o tratamento inicial (fluidos, insulina, reposição de potássio) de forma sistematizada.'
      ]
    },
    instB: {
      vitals: {
        PA: '96/62 mmHg',
        FC: '124 bpm',
        FR: '32 irpm (respiração de Kussmaul — profunda e ritmada)',
        Tax: '36,8 °C',
        SpO2: '97%',
        Glasgow: '13 (O3 V4 M6)'
      },
      physicalGeneral: 'Mau estado geral, desidratado (mucosas secas, turgor cutâneo reduzido), confuso, hálito cetônico (odor de "maçã podre") perceptível.',
      physicalSeg: 'CARDIOVASCULAR: taquicárdico, bulhas normofonéticas | RESPIRATÓRIO: respiração de Kussmaul, ausculta pulmonar sem estertores | ABDOME: doloroso difusamente à palpação, sem sinais de irritação peritoneal (dor abdominal pode ser manifestação da própria cetoacidose) | Sem rigidez de nuca ou sinais focais neurológicos.',
      labs: [
        { test: 'Glicemia capilar', val: '486 mg/dL', ref: '70–99 mg/dL', alt: true },
        { test: 'Gasometria arterial — pH', val: '7,12', ref: '7,35–7,45', alt: true },
        { test: 'Gasometria arterial — HCO3', val: '9 mEq/L', ref: '22–26 mEq/L', alt: true },
        { test: 'Cetonemia/cetonúria', val: 'Fortemente positiva (3+/4+)', ref: 'Negativa', alt: true },
        { test: 'Potássio sérico', val: '5,6 mEq/L (com depleção corporal total esperada apesar do valor sérico normal-alto)', ref: '3,5–5,0 mEq/L', alt: true },
        { test: 'Sódio sérico', val: '129 mEq/L (sódio corrigido para hiperglicemia: ~133 mEq/L)', ref: '135–145 mEq/L', alt: true },
        { test: 'Creatinina', val: '1,6 mg/dL (provável componente pré-renal por desidratação)', ref: '0,7–1,3 mg/dL', alt: true }
      ],
      note: 'A gasometria arterial com pH e HCO3, associada à cetonemia/cetonúria, são os exames centrais para confirmação e classificação de gravidade — devem ser solicitados prontamente. Reforçar que o potássio sérico normal-alto NÃO significa reserva corporal adequada — há depleção total de potássio no organismo apesar do valor sérico, e a insulinoterapia fará o potássio entrar nas células, podendo causar hipocalemia grave se não houver reposição concomitante ou monitorização cuidadosa.',
      patientProfile: 'Diabético tipo 1 desde os 12 anos, em uso de insulina basal-bolus. Família relata que ele estava com um quadro gripal há alguns dias e, sem orientação adequada, reduziu por conta própria as doses de insulina por estar "comendo menos" durante a doença.',
      script: [
        { trigger: 'Informação da família', speech: 'Doutor(a), ele está diabético desde criança, mas nos últimos dias estava gripado, com febre, e reduziu a insulina porque estava comendo pouco. Hoje começou a vomitar muito e ficou confuso.' },
        { trigger: 'Paciente (confuso, responde parcialmente)', speech: '(voz fraca, confusa) Tô... com muita sede... e a barriga dói...' },
        { trigger: 'Sobre uso de insulina', speech: '(família) Ele usa insulina de ação longa à noite e uma de ação rápida nas refeições, mas reduziu bastante nos últimos dias por conta própria.' },
        { trigger: 'Pergunta da família — gravidade', speech: 'Doutor(a), isso é grave? Por que ele está respirando assim, tão rápido e fundo?' }
      ],
      hiddenInfo: 'O paciente teve um episódio de cetoacidose há 2 anos, também relacionado à suspensão inadequada de insulina durante doença febril, sem ter recebido orientação estruturada sobre "dias de doença" (sick day rules) na época — só revela se perguntado sobre episódios anteriores de descompensação | A família não sabia que a insulina NUNCA deve ser suspensa completamente mesmo com baixa ingesta alimentar durante doenças — informação relevante para a orientação final, não necessariamente "escondida" mas deve ser ativamente abordada pelo candidato',
      actorBehavior: 'Confuso, respostas breves e lentificadas, demonstra desconforto abdominal. A família está muito ansiosa e fornece a maior parte das informações objetivas, demonstrando urgência em entender o que está acontecendo.'
    },
    instC: {
      diagnosis: 'Cetoacidose diabética grave (pH 7,12, HCO3 9 mEq/L, cetonemia fortemente positiva, glicemia 486 mg/dL), precipitada por infecção viral associada à redução inadequada e não orientada da dose de insulina.',
      differentials: [
        'Estado hiperglicêmico hiperosmolar — entra como diferencial de descompensação diabética grave; sai pela presença de cetonemia significativa e acidose importante, achados típicos de CAD e não do estado hiperosmolar (que tipicamente cursa com glicemias mais extremas e sem cetose significativa, mais comum em diabetes tipo 2)',
        'Cetoacidose alcoólica — entra como causa de cetoacidose; sai pela ausência de história de etilismo e pela glicemia muito elevada, mais compatível com CAD diabética',
        'Sepse como causa isolada de acidose e alteração do estado mental — deve ser considerada e investigada (o quadro gripal pode ter componente infeccioso a esclarecer), mas a cetonemia fortemente positiva e a hiperglicemia intensa confirmam CAD como diagnóstico central, podendo coexistir como fator desencadeante',
        'Intoxicação exógena (salicilatos, metanol) como causa de acidose metabólica com ânion gap aumentado — entra no diagnóstico diferencial de acidose com ânion gap elevado; afastada pela cetonemia fortemente positiva e hiperglicemia, explicando adequadamente o quadro'
      ],
      context: 'A cetoacidose diabética é uma emergência caracterizada pela tríade de hiperglicemia, acidose metabólica e cetonemia/cetonúria, decorrente de deficiência absoluta ou relativa de insulina, comumente precipitada por infecções, má adesão ao tratamento (incluindo redução inadequada de doses durante doenças intercorrentes) ou diagnóstico inicial de diabetes. A gravidade é classificada pelo pH e HCO3: leve (pH 7,25-7,30), moderada (pH 7,00-7,24) e grave (pH <7,00, ou HCO3 <10 com alteração do estado mental), sendo este caso classificado como grave pela combinação de acidose importante e rebaixamento do nível de consciência.',
      justify: 'O diagnóstico é confirmado pela tríade clássica: hiperglicemia importante (486 mg/dL), acidose metabólica com ânion gap aumentado (pH 7,12, HCO3 9) e cetonemia fortemente positiva, associada ao fator precipitante identificado (redução inadequada de insulina durante quadro infeccioso, "erro de dias de doença"). A gravidade é classificada como grave pelo pH <7,20 associado a alteração do nível de consciência (Glasgow 13), exigindo manejo em ambiente de terapia intensiva com monitorização rigorosa.',
      expectedAnamnesis: 'Investigar fator precipitante (infecção, má adesão, redução de doses de insulina) | Perguntar sobre a cronologia dos sintomas (poliúria, polidipsia, vômitos, dor abdominal) | Revisar esquema de insulina habitual e mudanças recentes | Perguntar sobre episódios anteriores de CAD e orientações prévias recebidas sobre "dias de doença"',
      expectedPhysical: 'Avaliação do nível de consciência (Glasgow) | Avaliação de sinais de desidratação (mucosas, turgor, tempo de enchimento capilar) | Identificação da respiração de Kussmaul e hálito cetônico | Palpação abdominal (dor abdominal pode ser manifestação da própria CAD, não necessariamente abdome cirúrgico)',
      expectedExams: [
        { exam: 'Glicemia capilar/sérica', justify: 'Confirmar hiperglicemia', expected: '486 mg/dL' },
        { exam: 'Gasometria arterial', justify: 'Confirmar e classificar a gravidade da acidose metabólica', expected: 'pH 7,12, HCO3 9 — CAD grave' },
        { exam: 'Cetonemia/cetonúria', justify: 'Confirmar a presença de corpos cetônicos, elemento central do diagnóstico', expected: 'Fortemente positiva' },
        { exam: 'Eletrólitos (potássio, sódio)', justify: 'Avaliar necessidade de reposição de potássio antes/durante a insulinoterapia e calcular sódio corrigido', expected: 'Potássio normal-alto com depleção corporal total esperada; sódio corrigido para a hiperglicemia' },
        { exam: 'Função renal', justify: 'Avaliar componente pré-renal por desidratação', expected: 'Creatinina discretamente elevada, provável pré-renal' }
      ],
      expectedConduct: 'Farmacológica: reposição volêmica agressiva inicial com solução salina isotônica (0,9%) nas primeiras horas; insulina regular em infusão contínua endovenosa (NUNCA em bolus inicial isolado sem hidratação prévia), com meta de redução gradual da glicemia (queda de aproximadamente 50-70 mg/dL/hora); reposição de potássio ANTES ou concomitante ao início da insulina se potássio sérico <5,3 mEq/L (e aguardar/monitorar cuidadosamente se >5,3, dado o risco de hipocalemia grave induzida pela insulina); considerar bicarbonato apenas em acidose extremamente grave (pH <6,9), não indicado rotineiramente | Não farmacológica: monitorização horária de glicemia capilar e eletrólitos nas primeiras horas; internação em UTI dado a gravidade (pH <7,20 com alteração do nível de consciência); investigar e tratar o fator precipitante (rastreio infeccioso) | Orientações à família/paciente: explicar a gravidade do quadro e a necessidade de internação em UTI; após estabilização, reforçar educação estruturada sobre "regras de dias de doença" (nunca suspender completamente a insulina basal mesmo com baixa ingesta, aumentar monitorização e considerar ajustes com orientação médica durante doenças intercorrentes) | Seguimento: transição para insulina subcutânea apenas após resolução da acidose (HCO3 normalizado, ânion gap fechado) e capacidade de alimentação oral, com sobreposição adequada antes de suspender a infusão IV',
      expectedCommunication: 'Comunicar a gravidade do quadro à família de forma clara | Explicar o racional da sequência de tratamento (hidratação antes de insulina, atenção ao potássio) | Fornecer educação estruturada sobre manejo de dias de doença antes da alta, de forma didática e sem culpabilizar a família pelo erro cometido | Verificar compreensão das orientações',
      criticalErrors: [
        'Iniciar insulinoterapia antes de iniciar hidratação venosa adequada',
        'Não avaliar o potássio sérico antes de iniciar insulina, arriscando hipocalemia grave e arritmias',
        'Não solicitar gasometria arterial para confirmar e classificar a gravidade da acidose',
        'Reduzir a glicemia de forma muito rápida (risco de edema cerebral, especialmente relevante em pacientes jovens)',
        'Não investigar e tratar o fator precipitante (infecção) nem orientar sobre "regras de dias de doença" antes da alta'
      ]
    },
    instD: {
      title: 'CHECKLIST — REBAIXAMENTO DO NÍVEL DE CONSCIÊNCIA COM HÁLITO CETÔNICO (CAD)',
      sections: [
        {
          h: 'BLOCO 1 — COMUNICAÇÃO COM PACIENTE E FAMÍLIA',
          items: [
            { item: 'Comunicou a gravidade do quadro à família de forma clara', score: 0.5, ref: 'SBD — Diretrizes de CAD' },
            { item: 'Forneceu educação sobre "regras de dias de doença" antes da alta', score: 0.5, ref: 'SBD — Diretrizes de CAD' }
          ]
        },
        {
          h: 'BLOCO 2 — ANAMNESE',
          items: [
            { item: 'Investigou o fator precipitante (redução de insulina, infecção)', score: 1.0, ref: 'SBD — Diretrizes de CAD' },
            { item: 'Revisou o esquema de insulina habitual e mudanças recentes', score: 0.5, ref: 'SBD — Diretrizes de CAD' }
          ]
        },
        {
          h: 'BLOCO 3 — EXAME FÍSICO',
          items: [
            { item: 'Avaliou nível de consciência e sinais de desidratação', score: 0.5, ref: 'SBD — Diretrizes de CAD' },
            { item: 'Identificou a respiração de Kussmaul e o hálito cetônico', score: 0.5, ref: 'SBD — Diretrizes de CAD' }
          ]
        },
        {
          h: 'BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
          items: [
            { item: 'Solicitou gasometria arterial e classificou a gravidade da CAD', score: 1.5, ref: 'SBD — Diretrizes de CAD' },
            { item: 'Solicitou potássio sérico antes de definir a conduta com insulina', score: 1.0, ref: 'SBD — Diretrizes de CAD' }
          ]
        },
        {
          h: 'BLOCO 5 — CONDUTA',
          items: [
            { item: 'Iniciou hidratação venosa ANTES da insulina', score: 1.5, ref: 'SBD — Diretrizes de CAD' },
            { item: 'Prescreveu insulina em infusão contínua com meta de queda gradual da glicemia', score: 1.0, ref: 'SBD — Diretrizes de CAD' },
            { item: 'Considerou reposição de potássio conforme o valor sérico antes/durante a insulinoterapia', score: 0.5, ref: 'SBD — Diretrizes de CAD' }
          ]
        }
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // CASO 8 — INTOXICAÇÃO EXÓGENA GRAVE POR OPIOIDES
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 8,
    title: 'Rebaixamento do nível de consciência e depressão respiratória',
    sub: 'PS — Pronto-Socorro',
    tema: 'Medicina Intensiva',
    topic: 'Intoxicação Exógena Grave por Opioides',
    level: 'difícil',
    cardAccent: '#E65100',
    instA: {
      scenario: 'Pronto-Socorro, paciente trazido pelo SAMU após ser encontrado irresponsivo em casa.',
      patient: 'R.T.B., 38 anos, masculino, encontrado irresponsivo pelo colega de trabalho.',
      complaint: 'Encontrado irresponsivo, com respiração muito lenta e superficial.',
      tasks: [
        'Realize a avaliação primária (ABC) com foco na via aérea e respiração.',
        'Realize o exame físico dirigido, buscando sinais toxicológicos característicos.',
        'Formule a hipótese diagnóstica de intoxicação por opioides.',
        'Administre o antídoto específico de forma segura.',
        'Conduza a observação e o manejo subsequente, incluindo risco de re-sedação.'
      ]
    },
    instB: {
      vitals: {
        PA: '96/60 mmHg',
        FC: '58 bpm',
        FR: '6 irpm (muito reduzida)',
        Tax: '35,6 °C',
        SpO2: '82% em ar ambiente',
        Glasgow: '6 (O1 V1 M4)'
      },
      physicalGeneral: 'Irresponsivo a estímulo verbal, resposta apenas a estímulo doloroso, respiração muito lenta e superficial, cianose perioral leve.',
      physicalSeg: 'PUPILAS: miose puntiforme bilateral (pupilas "em ponta de alfinete") | RESPIRATÓRIO: bradipneia importante, murmúrio vesicular presente mas reduzido pela hipoventilação | Marcas de perfuração recentes em fossa antecubital bilateral, compatíveis com uso de drogas injetáveis | Sem sinais de trauma craniano visível.',
      labs: [
        { test: 'Glicemia capilar', val: '92 mg/dL', ref: '70–99 mg/dL', alt: false },
        { test: 'Gasometria arterial — PaCO2', val: '68 mmHg', ref: '35–45 mmHg', alt: true },
        { test: 'Gasometria arterial — PaO2', val: '54 mmHg (em ar ambiente)', ref: '80–100 mmHg', alt: true },
        { test: 'Gasometria arterial — pH', val: '7,21', ref: '7,35–7,45', alt: true }
      ],
      note: 'A tríade clássica (miose puntiforme + depressão respiratória + rebaixamento do nível de consciência) deve ser reconhecida imediatamente como sugestiva de intoxicação por opioides — a administração de naloxona não deve aguardar confirmação laboratorial/exames de imagem diante desse quadro típico com risco iminente de morte por parada respiratória.',
      patientProfile: 'Colega de trabalho relata não conhecer bem o paciente pessoalmente, apenas que ele não compareceu ao trabalho e foi encontrado assim no vestiário. Não há informações prévias sobre uso de substâncias ou comorbidades disponíveis no momento.',
      script: [
        { trigger: 'Informação de quem trouxe o paciente (colega de trabalho/SAMU)', speech: 'Doutor(a), a gente encontrou ele desse jeito no vestiário do trabalho, mal respirando. Não sei se ele usa alguma droga, não o conheço bem.' },
        { trigger: 'Após administração de naloxona e resposta inicial', speech: '(paciente, começando a despertar, confuso e irritado) Que... que aconteceu? Cadê... por que vocês mexeram comigo?' },
        { trigger: 'Pergunta da equipe — conduta', speech: 'Doutor(a), ele já melhorou bastante depois da naloxona. Podemos liberar ele agora?' }
      ],
      hiddenInfo: 'As marcas de perfuração em fossa antecubital sugerem uso de opioides injetáveis (possivelmente heroína ou outro opioide ilícito), informação que reforça a suspeita diagnóstica e deve ser identificada ativamente ao exame físico | Após a reversão inicial com naloxona, existe risco significativo de re-sedação e depressão respiratória recorrente nas próximas horas, pois a meia-vida da naloxona é mais curta que a de muitos opioides — esse risco não é "escondido" mas deve ser ativamente considerado pelo candidato ao planejar o período de observação, mesmo que a equipe sugira alta precoce',
      actorBehavior: 'Inicialmente irresponsivo (Glasgow 6). Após a administração de naloxona pelo candidato, desperta de forma súbita, confuso, desorientado e possivelmente irritado/agressivo verbalmente pela reversão abrupta dos efeitos — reação esperada e comum, não deve ser interpretada como quadro psiquiátrico primário.'
    },
    instC: {
      diagnosis: 'Intoxicação exógena grave por opioides, com depressão respiratória importante e insuficiência respiratória hipercápnica/hipoxêmica associada, risco iminente de óbito por parada respiratória sem intervenção imediata.',
      differentials: [
        'Acidente vascular cerebral (tronco encefálico) — entra como causa de rebaixamento do nível de consciência com depressão respiratória; a tríade clássica (miose puntiforme bilateral, marcas de punção, resposta à naloxona) torna a intoxicação por opioides o diagnóstico mais provável e a hipótese a ser testada terapeuticamente primeiro, dado o risco iminente de morte se não tratada',
        'Intoxicação por outras substâncias depressoras do SNC (benzodiazepínicos, álcool) — podem coexistir (uso combinado de substâncias é comum); a miose puntiforme característica é mais específica de opioides, embora a ausência de resposta completa à naloxona deva levantar suspeita de intoxicação combinada',
        'Hipoglicemia grave — entra como causa reversível de rebaixamento do nível de consciência a ser sempre excluída rapidamente; afastada pela glicemia capilar normal',
        'Trauma cranioencefálico — deve ser considerado e investigado (exame físico para sinais de trauma, TC de crânio se não houver resposta adequada à naloxona ou se houver sinais focais), mas a apresentação típica com miose e resposta à naloxona sustenta primariamente a intoxicação'
      ],
      context: 'A intoxicação por opioides é uma emergência toxicológica comum, cursando com a tríade clássica de miose puntiforme, depressão respiratória e rebaixamento do nível de consciência, podendo evoluir rapidamente para óbito por parada respiratória se não revertida a tempo. A naloxona é um antagonista opioide específico, de ação rápida, que reverte os efeitos em minutos quando administrada adequadamente, mas seu efeito é mais curto que o de muitos opioides, exigindo período de observação para risco de re-sedação.',
      justify: 'A combinação de miose puntiforme bilateral, depressão respiratória grave (FR 6 irpm, hipercapnia e hipoxemia na gasometria), rebaixamento do nível de consciência e marcas de punção sugestivas de uso de drogas injetáveis constitui a apresentação clássica de intoxicação por opioides, uma emergência com risco iminente de morte por insuficiência respiratória, justificando a administração imediata de naloxona como medida diagnóstica e terapêutica simultânea, sem necessidade de aguardar confirmação laboratorial.',
      expectedAnamnesis: 'Obter informações de quem encontrou/trouxe o paciente sobre as circunstâncias | Buscar histórico de uso de substâncias quando possível | Investigar possibilidade de trauma associado',
      expectedPhysical: 'Avaliação primária ABC com foco em via aérea e ventilação | Avaliação pupilar (miose puntiforme) | Inspeção de pele buscando marcas de punção venosa | Avaliação do nível de consciência (Glasgow)',
      expectedExams: [
        { exam: 'Glicemia capilar', justify: 'Excluir hipoglicemia como causa reversível de rebaixamento do nível de consciência, de forma rápida', expected: 'Normal neste caso' },
        { exam: 'Gasometria arterial', justify: 'Avaliar gravidade da insuficiência respiratória', expected: 'Hipercapnia e hipoxemia importantes, com acidose respiratória' },
        { exam: 'Oximetria de pulso contínua', justify: 'Monitorização da resposta ao tratamento', expected: 'SpO2 baixa, com melhora esperada após reversão' }
      ],
      expectedConduct: 'Farmacológica: administrar naloxona (0,4-2 mg IV, IM ou intranasal, podendo repetir a cada 2-3 minutos conforme resposta) — medida prioritária diante da tríade clássica com risco iminente de morte, não devendo aguardar exames complementares; suporte ventilatório com bolsa-válvula-máscara enquanto se prepara/aguarda efeito da naloxona, se necessário | Não farmacológica: garantir via aérea pérvia e suporte de O2; monitorização contínua | Orientações à equipe: explicar que a naloxona tem meia-vida mais curta que muitos opioides, exigindo período de OBSERVAÇÃO PROLONGADA (não liberar precocemente) pelo risco de re-sedação e depressão respiratória recorrente após o efeito inicial passar; considerar infusão contínua de naloxona em casos de intoxicação por opioides de longa ação | Orientações ao paciente após despertar: abordar de forma acolhedora e não julgadora a possibilidade de uso de substâncias, oferecendo encaminhamento para serviços de redução de danos/tratamento de dependência quando aplicável | Seguimento: manter em observação por tempo adequado antes de considerar alta, avaliando risco de re-sedação',
      expectedCommunication: 'Comunicar-se com quem trouxe o paciente de forma objetiva para obter informações relevantes rapidamente | Explicar à equipe o risco de re-sedação e a necessidade de observação prolongada, mesmo diante de sugestão de alta precoce | Abordar o paciente, após despertar, de forma acolhedora e sem julgamento em relação ao possível uso de substâncias',
      criticalErrors: [
        'Não reconhecer a tríade clássica de intoxicação por opioides e atrasar a administração de naloxona aguardando exames complementares',
        'Não avaliar/garantir via aérea e suporte ventilatório antes ou durante a administração do antídoto',
        'Concordar com a alta precoce do paciente logo após a resposta inicial à naloxona, sem período de observação adequado para o risco de re-sedação',
        'Não excluir hipoglicemia rapidamente como causa alternativa/concomitante de rebaixamento do nível de consciência',
        'Abordar o paciente de forma julgadora após o despertar, prejudicando o vínculo e a adesão a encaminhamentos posteriores'
      ]
    },
    instD: {
      title: 'CHECKLIST — REBAIXAMENTO DO NÍVEL DE CONSCIÊNCIA COM DEPRESSÃO RESPIRATÓRIA',
      sections: [
        {
          h: 'BLOCO 1 — COMUNICAÇÃO E ABORDAGEM',
          items: [
            { item: 'Obteve informações de quem trouxe o paciente de forma objetiva', score: 0.5, ref: 'ATLS/ACLS — Avaliação Toxicológica' },
            { item: 'Abordou o paciente, após despertar, de forma acolhedora e sem julgamento', score: 0.5, ref: 'Ministério da Saúde — Redução de Danos' }
          ]
        },
        {
          h: 'BLOCO 2 — AVALIAÇÃO PRIMÁRIA',
          items: [
            { item: 'Avaliou e garantiu via aérea/ventilação como prioridade (ABC)', score: 1.0, ref: 'ACLS Guidelines' },
            { item: 'Excluiu hipoglicemia rapidamente com glicemia capilar', score: 0.5, ref: 'ACLS Guidelines' }
          ]
        },
        {
          h: 'BLOCO 3 — EXAME FÍSICO',
          items: [
            { item: 'Identificou a miose puntiforme bilateral', score: 1.0, ref: 'Toxicologia Clínica — Tríade Opioide' },
            { item: 'Identificou marcas de punção venosa sugestivas de uso de drogas injetáveis', score: 0.5, ref: 'Toxicologia Clínica' }
          ]
        },
        {
          h: 'BLOCO 4 — RACIOCÍNIO CLÍNICO',
          items: [
            { item: 'Reconheceu a tríade clássica de intoxicação por opioides sem atrasar a conduta para exames', score: 1.0, ref: 'Toxicologia Clínica' }
          ]
        },
        {
          h: 'BLOCO 5 — CONDUTA',
          items: [
            { item: 'Administrou naloxona prontamente', score: 1.5, ref: 'ACLS Guidelines; Toxicologia Clínica' },
            { item: 'Manteve período de observação prolongado pelo risco de re-sedação (não liberou precocemente)', score: 1.5, ref: 'Toxicologia Clínica — Farmacocinética da Naloxona' }
          ]
        }
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // CASO 9 — POLITRAUMATIZADO GRAVE (AVALIAÇÃO INICIAL ATLS)
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 9,
    title: 'Vítima de queda de altura com múltiplas lesões',
    sub: 'PS — Sala de Trauma',
    tema: 'Medicina Intensiva',
    topic: 'Politraumatizado Grave — Avaliação Inicial (ATLS)',
    level: 'complexo',
    cardAccent: '#E65100',
    instA: {
      scenario: 'Sala de trauma, vítima de queda de andaime trazida pelo SAMU.',
      patient: 'C.R.O., 41 anos, masculino, pedreiro, queda de aproximadamente 4 metros de altura.',
      complaint: 'Queda de andaime há 40 minutos, com dor torácica, dispneia e deformidade em membro inferior.',
      tasks: [
        'Conduza a avaliação primária sistematizada (ABCDE) com identificação de lesões com risco de morte.',
        'Realize o exame físico dirigido a cada etapa da avaliação primária.',
        'Identifique e trate imediatamente lesões que ameaçam a vida.',
        'Solicite os exames complementares prioritários sem atrasar intervenções críticas.',
        'Conduza a avaliação secundária após estabilização da avaliação primária.'
      ]
    },
    instB: {
      vitals: {
        PA: '88/56 mmHg',
        FC: '128 bpm',
        FR: '34 irpm, com esforço respiratório importante',
        SpO2: '86% em máscara com reservatório',
        Glasgow: '14 (O4 V4 M6)'
      },
      physicalGeneral: 'Regular/mau estado geral, ansioso, taquipneico, com desvio perceptível da traqueia para a esquerda.',
      physicalSeg: 'VIA AÉREA: pérvia, fala frases curtas | RESPIRATÓRIO: desvio de traqueia para a esquerda, hipertimpanismo à percussão em hemitórax direito, murmúrio vesicular ABOLIDO à direita, turgência jugular presente | CARDIOVASCULAR: taquicárdico, bulhas abafadas | ABDOME: discretamente doloroso, sem defesa significativa no momento | MEMBRO INFERIOR DIREITO: deformidade evidente em terço médio da coxa, com dor importante à palpação, pulsos distais presentes | Escoriações múltiplas em face e tronco.',
      labs: [
        { test: 'Hemoglobina (point-of-care)', val: '11,8 g/dL', ref: '13,5–17,5 g/dL', alt: true },
        { test: 'Lactato arterial', val: '4,2 mmol/L', ref: '< 2,0 mmol/L', alt: true },
        { test: 'Gasometria arterial', val: 'Hipoxemia importante, acidose mista', ref: 'Normal', alt: true }
      ],
      image: 'Este caso exige DECISÃO CLÍNICA IMEDIATA baseada no exame físico (tríade de desvio de traqueia, turgência jugular e ausência de murmúrio vesicular unilateral) — a descompressão torácica de emergência NÃO deve aguardar radiografia de tórax, que só deve ser solicitada/realizada após a intervenção imediata.',
      note: 'A tríade clínica de pneumotórax hipertensivo (desvio de traqueia contralateral, turgência jugular, ausência de MV unilateral com hipertimpanismo) deve ser reconhecida e tratada IMEDIATAMENTE com descompressão torácica com agulha, antes de qualquer exame de imagem — este é o ponto central do caso. Se o candidato solicitar radiografia antes de agir, reforçar que "o paciente está piorando rapidamente" (queda progressiva de SpO2 e PA) para simular a urgência.',
      patientProfile: 'Pedreiro, caiu de andaime durante trabalho, trazido pelo SAMU com colar cervical e imobilização em prancha rígida, consciente durante todo o transporte.',
      script: [
        { trigger: 'Informação do SAMU', speech: 'Doutor(a), queda de aproximadamente 4 metros, ele bateu o lado direito do tórax e a perna direita. Estava consciente e respondendo, mas a respiração foi piorando durante o transporte.' },
        { trigger: 'Paciente (consciente, dispneico)', speech: '(fala entrecortada) Não... consigo respirar direito... dói muito o peito... e a perna...' },
        { trigger: 'Ao ser questionado sobre a dor torácica', speech: 'É do lado direito, forte, piora quando tento respirar fundo.' },
        { trigger: 'Pergunta da equipe — conduta', speech: 'Doutor(a), a saturação está caindo rápido. O que fazemos agora?' }
      ],
      hiddenInfo: 'A gravidade está piorando minuto a minuto — se o candidato não intervir rapidamente na via aérea/respiração (B) e insistir em completar uma anamnese extensa ou aguardar radiografia, a equipe deve reforçar verbalmente a piora progressiva (queda de SpO2, aumento da FC, queda da PA) para comunicar a urgência sem que o ator precise necessariamente demonstrar piora física extrema | A fratura de fêmur, apesar de dolorosa e evidente, NÃO é a prioridade imediata diante da tríade de pneumotórax hipertensivo — deve ser abordada na sequência do ABCDE (C/E), não antes do B',
      actorBehavior: 'Consciente mas com desconforto respiratório importante e crescente, fala entrecortada pela dispneia, geme de dor ao ser examinado no tórax e na perna. Ansioso, pede ajuda repetidamente se a intervenção demorar.'
    },
    instC: {
      diagnosis: 'Pneumotórax hipertensivo à direita (emergência com risco de morte imediato, identificada na etapa B do ABCDE), associado a fratura fechada de fêmur direito e possível hemotórax/contusão pulmonar associados, em contexto de trauma de alta energia (queda de altura).',
      differentials: [
        'Pneumotórax simples (não hipertensivo) — entra como diferencial de dispneia pós-trauma torácico; afastado pela presença da tríade clínica completa (desvio de traqueia, turgência jugular, instabilidade hemodinâmica progressiva), que caracteriza especificamente a forma hipertensiva, com fisiopatologia de compressão do retorno venoso e do mediastino',
        'Tamponamento cardíaco — entra como outro choque obstrutivo no trauma torácico; a ausência de bulhas abafadas isoladas sem os demais achados unilaterais pulmonares (desvio de traqueia, MV abolido unilateral, hipertimpanismo) torna o pneumotórax hipertensivo mais consistente com o quadro apresentado, embora ambos devam ser considerados na avaliação C do ABCDE',
        'Hemotórax maciço — entra como causa de MV abolido unilateral; distingue-se do pneumotórax hipertensivo pela presença de macicez (não hipertimpanismo) à percussão no lado acometido, achado que direciona a intervenção (drenagem torácica com reposição volêmica, em vez de descompressão com agulha isolada)',
        'Contusão pulmonar isolada — entra como causa de hipoxemia pós-trauma torácico; menos provável como causa isolada da instabilidade hemodinâmica franca e da tríade clínica completa observada, embora possa coexistir'
      ],
      context: 'O pneumotórax hipertensivo é uma das lesões com risco de morte imediato identificáveis na avaliação primária do trauma (etapa B — Boa ventilação), decorrente do acúmulo progressivo de ar no espaço pleural sem via de escape, causando colapso pulmonar ipsilateral, desvio do mediastino e compressão do retorno venoso ao coração, evoluindo rapidamente para choque obstrutivo e óbito se não tratado imediatamente. O diagnóstico é clínico e a descompressão não deve aguardar confirmação radiológica.',
      justify: 'A tríade clínica clássica de desvio de traqueia contralateral, turgência jugular e ausência de murmúrio vesicular com hipertimpanismo à percussão no hemitórax direito, associada à instabilidade hemodinâmica progressiva (queda de PA, taquicardia, hipoxemia grave), confirma o diagnóstico de pneumotórax hipertensivo, uma emergência de risco de morte imediato que exige descompressão torácica de urgência (agulha ou toracostomia com dedo, seguida de drenagem torácica em selo d\'água) sem aguardar exame de imagem confirmatório.',
      expectedAnamnesis: 'Obter informações do SAMU sobre mecanismo de trauma (protocolo MIST) | Reconhecer a limitação de tempo para anamnese extensa diante de emergência com risco de morte identificada no exame físico',
      expectedPhysical: 'Conduzir avaliação primária sistematizada ABCDE | Na etapa B, identificar ativamente sinais de pneumotórax hipertensivo (desvio de traqueia, turgência jugular, percussão e ausculta comparativas bilaterais) | Avaliar circulação e sinais de choque | Avaliar deformidade e pulsos distais do membro fraturado na sequência apropriada do exame',
      expectedExams: [
        { exam: 'Não aguardar exame de imagem para tratar o pneumotórax hipertensivo — diagnóstico e tratamento CLÍNICOS', justify: 'A demora para confirmação radiológica pode ser fatal nesta condição', expected: 'Descompressão imediata baseada no exame físico' },
        { exam: 'Radiografia de tórax (após a descompressão)', justify: 'Confirmar a resolução e posicionamento do dreno torácico, e avaliar lesões associadas', expected: 'Reexpansão pulmonar após a drenagem' },
        { exam: 'FAST', justify: 'Avaliar líquido livre abdominal/pericárdico como parte da avaliação circulatória (C)', expected: 'A realizar na sequência do ABCDE' },
        { exam: 'Radiografia de fêmur', justify: 'Avaliar a fratura identificada no membro inferior, após estabilização das prioridades A-B-C', expected: 'Confirmar fratura fechada de fêmur' }
      ],
      expectedConduct: 'Farmacológica: analgesia adequada após estabilização das prioridades imediatas; reposição volêmica conforme avaliação circulatória (C) | Não farmacológica: DESCOMPRESSÃO TORÁCICA IMEDIATA por agulha (2º espaço intercostal, linha hemiclavicular, ou toracostomia com dedo no 5º espaço intercostal conforme técnica/protocolo institucional) assim que reconhecida a tríade clínica de pneumotórax hipertensivo, seguida de drenagem torácica em selo d\'água definitiva; imobilização adequada da fratura de fêmur (tração/talas) após estabilização das prioridades A-B-C; manter controle cervical até exclusão radiológica de lesão | Orientações à equipe: verbalizar claramente a sequência de decisões do ABCDE, sinalizando a identificação da emergência e a intervenção imediata | Seguimento: internação em UTI, avaliação seriada de lesões associadas (avaliação secundária completa após estabilização)',
      expectedCommunication: 'Conduzir a avaliação de forma sistematizada e verbalizada, permitindo à equipe acompanhar o raciocínio | Comunicar-se rapidamente com a equipe para obter os materiais necessários para a descompressão torácica sem demora | Explicar ao paciente (se consciente) de forma breve o procedimento antes de realizá-lo, mesmo em contexto de urgência',
      criticalErrors: [
        'Aguardar radiografia de tórax para confirmar pneumotórax hipertensivo antes de descomprimir, atrasando tratamento de emergência com risco de morte',
        'Não seguir a sequência sistematizada ABCDE, priorizando a fratura de fêmur (mais visível/dramática) antes de tratar o problema B (via aérea/respiração)',
        'Não identificar a tríade clínica de pneumotórax hipertensivo ao exame físico (desvio de traqueia, turgência jugular, MV abolido)',
        'Não realizar descompressão torácica diante do diagnóstico reconhecido',
        'Iniciar anamnese extensa antes de tratar a lesão com risco de morte imediato identificada no exame primário'
      ]
    },
    instD: {
      title: 'CHECKLIST — VÍTIMA DE QUEDA COM MÚLTIPLAS LESÕES (PNEUMOTÓRAX HIPERTENSIVO)',
      sections: [
        {
          h: 'BLOCO 1 — COMUNICAÇÃO E CONDUÇÃO SISTEMATIZADA',
          items: [
            { item: 'Obteve informações do SAMU de forma estruturada (MIST)', score: 0.5, ref: 'ATLS 10ª edição' },
            { item: 'Verbalizou claramente a sequência ABCDE durante a avaliação', score: 0.5, ref: 'ATLS 10ª edição' }
          ]
        },
        {
          h: 'BLOCO 2 — AVALIAÇÃO PRIMÁRIA SISTEMATIZADA',
          items: [
            { item: 'Seguiu a sequência ABCDE sem se desviar para a fratura de fêmur prematuramente', score: 1.5, ref: 'ATLS 10ª edição' }
          ]
        },
        {
          h: 'BLOCO 3 — EXAME FÍSICO (ETAPA B)',
          items: [
            { item: 'Identificou desvio de traqueia à inspeção/palpação', score: 1.0, ref: 'ATLS 10ª edição' },
            { item: 'Identificou turgência jugular e MV abolido com hipertimpanismo unilateral', score: 1.0, ref: 'ATLS 10ª edição' }
          ]
        },
        {
          h: 'BLOCO 4 — RACIOCÍNIO CLÍNICO',
          items: [
            { item: 'Reconheceu a tríade clínica de pneumotórax hipertensivo sem aguardar radiografia', score: 1.5, ref: 'ATLS 10ª edição' }
          ]
        },
        {
          h: 'BLOCO 5 — CONDUTA',
          items: [
            { item: 'Realizou/indicou descompressão torácica imediata', score: 2.0, ref: 'ATLS 10ª edição' },
            { item: 'Avaliou e imobilizou a fratura de fêmur após estabilização de A-B-C', score: 0.5, ref: 'ATLS 10ª edição' }
          ]
        }
      ]
    }
  }
];

export default medicinaIntensiva;
