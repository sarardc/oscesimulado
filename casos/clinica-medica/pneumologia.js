const pneumologia2 = [
  // ─────────────────────────────────────────────────────────────────────────
  // CASO 1 — DPOC (DIAGNÓSTICO E CLASSIFICAÇÃO GOLD)
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 1,
    title: 'Falta de ar progressiva aos esforços há 2 anos em tabagista',
    sub: 'UBS — Atenção Primária',
    tema: 'Pneumologia',
    topic: 'DPOC — Diagnóstico e Classificação',
    level: 'moderado',
    cardAccent: '#5B9BD5',
    instA: {
      scenario: 'Atenção Primária — UBS. Consulta agendada, turno matutino.',
      patient: 'A.R.T., 61 anos, masculino, aposentado (ex-metalúrgico), tabagista.',
      complaint: 'Falta de ar progressiva aos esforços há cerca de 2 anos, associada a tosse produtiva matinal.',
      tasks: [
        'Realize a anamnese dirigida ao caso, incluindo carga tabágica.',
        'Realize o exame físico pertinente.',
        'Solicite os exames complementares para confirmação diagnóstica.',
        'Classifique a doença conforme os critérios GOLD vigentes (obstrução, sintomas, risco de exacerbação).',
        'Proponha o tratamento farmacológico e não farmacológico adequado ao grupo de classificação.'
      ]
    },
    instB: {
      vitals: {
        PA: '132/84 mmHg',
        FC: '88 bpm',
        FR: '20 irpm',
        Tax: '36,5 °C',
        Peso: '78 kg',
        Altura: '1,70 m',
        IMC: '27,0 kg/m²',
        SpO2: '94%'
      },
      physicalGeneral: 'Bom estado geral, corado, hidratado, tórax em "barril" (aumento do diâmetro anteroposterior), uso discreto de musculatura acessória em repouso.',
      physicalSeg: 'RESPIRATÓRIO: expansibilidade reduzida bilateral; percussão hipertimpânica difusa; ausculta com murmúrio vesicular globalmente diminuído, sibilos expiratórios esparsos, tempo expiratório prolongado (razão I:E aumentada) | CARDIOVASCULAR: bulhas rítmicas normofonéticas, sem sopros | MMII: sem edema | Lábios com discreta cianose ao esforço leve durante a consulta (ao se levantar da cadeira).',
      labs: [
        { test: 'Espirometria — VEF1/CVF pós-broncodilatador', val: '0,58', ref: '≥ 0,70 (relação normal)', alt: true },
        { test: 'Espirometria — VEF1 (% do previsto)', val: '52% do previsto', ref: '≥ 80% do previsto', alt: true },
        { test: 'Questionário CAT (COPD Assessment Test)', val: '10 pontos', ref: '< 10 = poucos sintomas; ≥10 = mais sintomático', alt: true },
        { test: 'Escala mMRC de dispneia', val: 'Grau 2 (anda mais devagar que pessoas da mesma idade por falta de ar)', ref: 'Grau 0-1 = pouco sintomático', alt: true }
      ],
      image: 'Radiografia de tórax PA e perfil: hiperinsuflação pulmonar, retificação de cúpulas diafragmáticas, aumento do espaço aéreo retroesternal, sem consolidações ou massas.',
      note: 'A espirometria pós-broncodilatador é o exame confirmatório e deve ser solicitada mesmo que o candidato já suspeite do diagnóstico clinicamente — sem ela não se pode confirmar DPOC nem classificar GOLD. Entregar CAT e mMRC apenas se o candidato aplicá-los ativamente (não são calculados automaticamente).',
      patientProfile: 'Aposentado, ex-metalúrgico (exposição ocupacional a poeiras/fumos por 25 anos), tabagista atual de 30 cigarros/dia desde os 18 anos (carga tabágica ~66 anos-maço). Refere 1 exacerbação com necessidade de antibiótico no último ano, sem internação.',
      script: [
        { trigger: 'Queixa principal', speech: 'Doutor(a), fico cada vez com mais falta de ar para as coisas do dia a dia. Antes eu subia escada tranquilo, hoje preciso parar no meio.' },
        { trigger: 'Sobre a tosse', speech: 'Tenho uma tosse com catarro quase todo dia de manhã, há uns 3 anos já, mas nunca dei muita importância, achava que era "tosse de fumante" normal.' },
        { trigger: 'Sobre tabagismo', speech: 'Fumo desde os 18 anos, um maço e meio por dia, nunca consegui parar direito.' },
        { trigger: 'Sobre exposição ocupacional', speech: 'Trabalhei numa metalúrgica minha vida toda, uns 25 anos, tinha bastante poeira e fumaça no ambiente.' },
        { trigger: 'Sobre exacerbações prévias', speech: 'Tive uma piora forte ano passado, precisei tomar antibiótico e um remédio de bombinha diferente, mas não cheguei a internar.' },
        { trigger: 'Sobre impacto funcional', speech: 'Já não consigo fazer as caminhadas que fazia antes, tenho que parar no meio do caminho para respirar.' },
        { trigger: 'Pergunta ativa — diagnóstico', speech: 'Doutor(a), isso é grave? Tem cura? Isso é por causa do cigarro?' }
      ],
      hiddenInfo: 'Já tentou parar de fumar duas vezes sem sucesso, usando apenas "força de vontade", sem suporte farmacológico — só revela se perguntado sobre tentativas prévias de cessação | Tem episódios de sibilância noturna ocasional, o que pode sugerir componente de sobreposição com asma (ACO) — só revela se perguntado especificamente sobre sintomas noturnos | Não é vacinado contra influenza nem pneumococo — só revela se perguntado sobre vacinação | Tem receio de que o diagnóstico signifique necessidade de oxigênio domiciliar para sempre — verbaliza esse medo se o candidato não esclarecer bem o prognóstico',
      actorBehavior: 'Fala pausadamente, com leve esforço respiratório perceptível ao final de frases mais longas. Um tanto resignado com os sintomas ("achava que era normal da idade"). Receptivo a orientações sobre cessação do tabagismo quando abordado sem julgamento.'
    },
    instC: {
      diagnosis: 'Doença Pulmonar Obstrutiva Crônica (DPOC), GOLD grupo E (VEF1 52% previsto = GOLD 3/grave; alto risco por exacerbação com necessidade de antibiótico no último ano), relacionada a tabagismo e exposição ocupacional.',
      differentials: [
        'Asma brônquica — entra pela sibilância e obstrução ao fluxo aéreo; sai pela idade de início tardia, carga tabágica importante e obstrução não totalmente reversível pós-broncodilatador (relação VEF1/CVF permanece <0,70), embora sobreposição asma-DPOC (ACO) deva ser considerada dados os episódios de sibilância noturna',
        'Insuficiência cardíaca — entra como causa de dispneia progressiva; sai pela ausência de ortopneia, edema de MMII, B3 e pela espirometria confirmando padrão obstrutivo',
        'Bronquiectasias — entra pela tosse produtiva crônica; sai pela ausência de expectoração purulenta abundante diária e de infecções respiratórias de repetição mais graves, tornando DPOC mais provável neste perfil',
        'Câncer de pulmão — deve sempre ser considerado em tabagista com sintomas respiratórios crônicos; sai pela ausência de emagrecimento, hemoptise ou achados focais/massa na radiografia, mas exige vigilância continuada'
      ],
      context: 'Homem de 61 anos, tabagista com carga tabágica elevada e exposição ocupacional a poeiras, com dispneia progressiva aos esforços, tosse produtiva crônica matinal e uma exacerbação moderada no último ano, com espirometria confirmando obstrução ao fluxo aéreo não totalmente reversível — quadro típico de DPOC, cuja classificação GOLD orienta diretamente a escolha terapêutica farmacológica.',
      justify: 'O diagnóstico de DPOC exige espirometria com relação VEF1/CVF < 0,70 pós-broncodilatador (presente: 0,58), associada a fatores de risco relevantes (tabagismo, exposição ocupacional) e sintomas compatíveis. A classificação GOLD atual (2023-2024) simplificou os grupos ABCD para ABE: o paciente teve exacerbação moderada (com antibiótico) no último ano — isso já classifica como grupo E (alto risco de exacerbação), independentemente da intensidade de sintomas (CAT/mMRC), determinando indicação de broncodilatador duplo (LABA+LAMA) como terapia inicial preferencial, e não apenas monoterapia.',
      expectedAnamnesis: 'Quantificar carga tabágica (anos-maço) e disposição para cessação | Investigar exposição ocupacional a poeiras/fumos | Caracterizar dispneia (escala mMRC) e tosse produtiva crônica | Perguntar sobre exacerbações no último ano (número, gravidade, necessidade de antibiótico/corticoide/internação) | Aplicar ou considerar questionário CAT | Investigar sintomas noturnos/sibilância (rastreio de sobreposição com asma) | Perguntar sobre situação vacinal (influenza, pneumocócica, dTpa/covid)',
      expectedPhysical: 'Inspeção torácica (tórax em barril, uso de musculatura acessória) | Ausculta pulmonar completa (MV reduzido, sibilos, tempo expiratório) | Percussão torácica | Aferição de SpO2 | Avaliação de sinais de cor pulmonale (edema, turgência jugular) | Avaliar cianose central',
      expectedExams: [
        { exam: 'Espirometria pós-broncodilatador', justify: 'Exame obrigatório e confirmatório do diagnóstico de DPOC (VEF1/CVF < 0,70 pós-BD)', expected: 'Relação 0,58 e VEF1 52% do previsto — confirma DPOC grave (GOLD 3)' },
        { exam: 'Radiografia de tórax', justify: 'Avaliar hiperinsuflação e excluir outras causas (massa, ICC)', expected: 'Hiperinsuflação, retificação diafragmática' },
        { exam: 'Oximetria de pulso (SpO2)', justify: 'Rastrear hipoxemia e necessidade de avaliação para oxigenoterapia domiciliar', expected: '94% em repouso — acompanhar' },
        { exam: 'Questionário CAT e escala mMRC', justify: 'Classificar impacto sintomático, compondo a avaliação combinada GOLD', expected: 'CAT 10, mMRC 2 — sintomático' }
      ],
      expectedConduct: 'Farmacológica: broncodilatador duplo de longa duração (LABA + LAMA) como terapia inicial preferencial para o grupo GOLD E, dado o histórico de exacerbação; considerar associação de corticoide inalatório (tríplice terapia) se eosinofilia periférica ≥300 células/µL ou exacerbações recorrentes; vacinação atualizada (influenza anual, pneumocócica, dTpa) | Não farmacológica: cessação do tabagismo com suporte farmacológico (terapia de reposição de nicotina, bupropiona ou vareniclina) associado a aconselhamento estruturado — intervenção mais eficaz disponível para modificar a história natural da doença; encaminhamento para reabilitação pulmonar | Orientações ao paciente: explicar a natureza crônica e progressiva da doença, mas que a cessação do tabagismo é a medida mais eficaz para desacelerar a perda de função pulmonar; esclarecer que nem todo paciente com DPOC precisará de oxigênio domiciliar; orientar sobre técnica inalatória correta e reconhecimento precoce de sinais de exacerbação',
      expectedCommunication: 'Abordar a cessação do tabagismo de forma motivacional, sem julgamento, reconhecendo tentativas prévias | Explicar a classificação GOLD e sua relação com o tratamento de forma acessível | Esclarecer dúvidas sobre prognóstico e necessidade futura de oxigênio, sem alarmismo | Verificar compreensão do plano terapêutico e technique inalatória',
      criticalErrors: [
        'Firmar diagnóstico de DPOC sem confirmação espirométrica (VEF1/CVF pós-broncodilatador)',
        'Não classificar corretamente o grupo GOLD considerando o histórico de exacerbação (grupo E), prescrevendo apenas monoterapia broncodilatadora',
        'Não abordar ativamente a cessação do tabagismo com suporte farmacológico, medida mais eficaz disponível',
        'Não avaliar/atualizar situação vacinal (influenza, pneumocócica)',
        'Não considerar diagnóstico diferencial de câncer de pulmão em tabagista com sintomas respiratórios crônicos'
      ]
    },
    instD: {
      title: 'CHECKLIST — FALTA DE AR PROGRESSIVA EM TABAGISTA (DPOC)',
      sections: [
        {
          h: 'BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE',
          items: [
            { item: 'Apresentou-se pelo nome ao paciente', score: 0.5, ref: 'CFM Res. 2.232/2019' },
            { item: 'Abordou o tabagismo de forma motivacional, sem julgamento', score: 0.5, ref: 'GOLD 2024' }
          ]
        },
        {
          h: 'BLOCO 2 — ANAMNESE',
          items: [
            { item: 'Quantificou a carga tabágica em anos-maço', score: 0.5, ref: 'GOLD 2024' },
            { item: 'Investigou exposição ocupacional a poeiras/fumos', score: 0.5, ref: 'GOLD 2024' },
            { item: 'Perguntou sobre exacerbações no último ano (número e gravidade)', score: 1.0, ref: 'GOLD 2024' },
            { item: 'Investigou situação vacinal (influenza, pneumocócica)', score: 0.5, ref: 'GOLD 2024' }
          ]
        },
        {
          h: 'BLOCO 3 — EXAME FÍSICO',
          items: [
            { item: 'Realizou ausculta pulmonar completa', score: 0.5, ref: 'GOLD 2024' },
            { item: 'Aferiu SpO2', score: 0.5, ref: 'GOLD 2024' }
          ]
        },
        {
          h: 'BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
          items: [
            { item: 'Solicitou espirometria pós-broncodilatador como exame confirmatório', score: 1.5, ref: 'GOLD 2024' },
            { item: 'Aplicou ou mencionou CAT e/ou mMRC para avaliação sintomática', score: 0.5, ref: 'GOLD 2024' },
            { item: 'Classificou corretamente o paciente no grupo GOLD E (por exacerbação prévia)', score: 1.0, ref: 'GOLD 2024' }
          ]
        },
        {
          h: 'BLOCO 5 — CONDUTA E ORIENTAÇÃO AO PACIENTE',
          items: [
            { item: 'Indicou broncodilatador duplo (LABA+LAMA) como terapia inicial para o grupo E', score: 1.0, ref: 'GOLD 2024' },
            { item: 'Orientou cessação do tabagismo com suporte farmacológico', score: 1.0, ref: 'GOLD 2024' },
            { item: 'Orientou atualização vacinal', score: 0.5, ref: 'GOLD 2024' },
            { item: 'Perguntou se o paciente tinha dúvidas ao final da consulta', score: 0.5, ref: 'CFM Res. 2.232/2019' }
          ]
        }
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // CASO 2 — DPOC EXACERBAÇÃO AGUDA
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 2,
    title: 'Piora da falta de ar e escarro purulento em DPOC conhecido',
    sub: 'PS — Pronto-Socorro',
    tema: 'Pneumologia',
    topic: 'DPOC — Exacerbação Aguda',
    level: 'difícil',
    cardAccent: '#5B9BD5',
    instA: {
      scenario: 'Pronto-Socorro, turno noturno.',
      patient: 'J.M.P., 68 anos, masculino, DPOC grave conhecido, em uso de LABA+LAMA.',
      complaint: 'Piora da falta de ar, aumento do volume e mudança da cor do escarro (purulento) há 3 dias.',
      tasks: [
        'Realize a anamnese dirigida à exacerbação.',
        'Realize o exame físico pertinente, com atenção a sinais de gravidade.',
        'Formule a hipótese diagnóstica e avalie critérios de gravidade/internação.',
        'Solicite os exames complementares adequados.',
        'Proponha a conduta terapêutica imediata da exacerbação.'
      ]
    },
    instB: {
      vitals: {
        PA: '138/86 mmHg',
        FC: '108 bpm',
        FR: '28 irpm',
        Tax: '37,6 °C',
        Peso: '72 kg',
        Altura: '1,68 m',
        SpO2: '87% em ar ambiente'
      },
      physicalGeneral: 'Regular estado geral, dispneico, uso importante de musculatura acessória, fala em frases curtas, respiração com lábios semicerrados.',
      physicalSeg: 'RESPIRATÓRIO: expansibilidade reduzida; ausculta com roncos e sibilos difusos bilaterais, MV globalmente reduzido | CARDIOVASCULAR: taquicárdico, bulhas normofonéticas | MMII: sem edema | Nível de consciência preservado, sem flapping ou sonolência no momento.',
      labs: [
        { test: 'Gasometria arterial — pH', val: '7,32', ref: '7,35–7,45', alt: true },
        { test: 'Gasometria arterial — PaCO2', val: '58 mmHg', ref: '35–45 mmHg', alt: true },
        { test: 'Gasometria arterial — PaO2', val: '52 mmHg (em ar ambiente)', ref: '80–100 mmHg', alt: true },
        { test: 'Gasometria arterial — HCO3', val: '28 mEq/L', ref: '22–26 mEq/L', alt: true },
        { test: 'Leucócitos', val: '13.400/mm³', ref: '4.000–11.000/mm³', alt: true },
        { test: 'PCR', val: '48 mg/L', ref: '< 5 mg/L', alt: true }
      ],
      image: 'Radiografia de tórax: hiperinsuflação já conhecida, sem consolidação focal nova, sem derrame pleural, sem pneumotórax.',
      note: 'A gasometria arterial é essencial neste caso (acidose respiratória com retenção de CO2) e deve ser entregue assim que solicitada — reforça a necessidade de ventilação não invasiva. A radiografia serve para excluir pneumonia/pneumotórax como diferenciais, não mostra achados adicionais.',
      patientProfile: 'Aposentado, DPOC grave diagnosticado há 5 anos, em uso regular de broncodilatador duplo inalatório. Ex-tabagista (parou há 3 anos). Já teve 2 internações por exacerbação nos últimos 12 meses.',
      script: [
        { trigger: 'Queixa principal', speech: '(fala entrecortada) Doutor(a)... minha falta de ar piorou muito nos últimos dias... e o catarro mudou, tá amarelado, bem mais grosso.' },
        { trigger: 'Sobre a evolução', speech: 'Começou há uns 3 dias, fui piorando cada dia mais, hoje não aguentei e vim para cá.' },
        { trigger: 'Sobre a bombinha de resgate', speech: 'Já usei a bombinha várias vezes hoje e não melhorou como sempre melhorava antes.' },
        { trigger: 'Sobre internações prévias', speech: 'Já fiquei internado duas vezes esse ano por causa disso, uma vez precisei até de uma máscara para ajudar a respirar.' },
        { trigger: 'Sobre febre/sintomas associados', speech: 'Senti um friozinho ontem à noite, acho que tive um pouco de febre.' },
        { trigger: 'Pergunta ativa — gravidade', speech: 'Doutor(a), vou precisar ficar internado de novo? Vou precisar entubar?' }
      ],
      hiddenInfo: 'Está com sonolência leve crescente que ele mesmo não percebe bem (possível sinal precoce de narcose por CO2/hipercapnia) — o candidato deve avaliar ativamente o nível de consciência, não é verbalizado espontaneamente pelo paciente | Não fez a vacina de influenza este ano por não ter tido oportunidade — só revela se perguntado sobre vacinação | Mora sozinho e tem receio de não conseguir cuidar de si em casa se for liberado sem melhora — só revela essa preocupação se o candidato explorar rede de apoio',
      actorBehavior: 'Fala entrecortada pela dispneia, esforço respiratório visível. Ligeiramente mais lento para responder que o esperado (pista sutil de retenção de CO2) — ao ser questionado diretamente, orienta-se normalmente no tempo/espaço mas com leve lentidão. Ansioso quanto à possibilidade de intubação.'
    },
    instC: {
      diagnosis: 'Exacerbação aguda de DPOC (critérios de Anthonisen: piora da dispneia + aumento do volume + purulência do escarro = todos os 3 critérios presentes), com insuficiência respiratória aguda hipercápnica (acidose respiratória).',
      differentials: [
        'Pneumonia comunitária sobreposta — entra pela febre e leucocitose; deve ser sempre considerada, mas a radiografia sem consolidação focal nova torna a exacerbação infecciosa da DPOC (sem pneumonia associada) o quadro mais provável neste momento',
        'Insuficiência cardíaca descompensada — entra como causa de dispneia em idoso; sai pela ausência de edema, ortopneia e B3, e pelo padrão gasométrico de retenção de CO2 típico de exacerbação de DPOC',
        'Tromboembolismo pulmonar — deve ser considerado em piora súbita de dispneia em DPOC; sai pela presença de sintomas infecciosos claros (escarro purulento, febre) explicando adequadamente o quadro, embora deva permanecer no radar se não houver melhora',
        'Pneumotórax — entra como causa de piora aguda de dispneia em DPOC; afastado pela radiografia de tórax sem sinais de pneumotórax'
      ],
      context: 'Paciente com DPOC grave conhecido, com exacerbação preenchendo os 3 critérios de Anthonisen (piora de dispneia, aumento de volume e purulência do escarro), evoluindo com insuficiência respiratória hipercápnica aguda sobre crônica (pH 7,32, PaCO2 58, HCO3 28 compensatório), configurando exacerbação grave com indicação de suporte ventilatório não invasivo e internação.',
      justify: 'A presença dos 3 critérios de Anthonisen confirma exacerbação de provável etiologia infecciosa bacteriana, com indicação de antibioticoterapia. A gasometria com acidose respiratória (pH 7,32) e hipercapnia (PaCO2 58) com HCO3 elevado (compensação metabólica de processo crônico agudizado) e hipoxemia importante (PaO2 52, SpO2 87%) caracteriza insuficiência respiratória aguda que não responde apenas a O2 suplementar isolado, sendo indicação formal de ventilação não invasiva (VNI) para evitar intubação orotraqueal.',
      expectedAnamnesis: 'Caracterizar os 3 critérios de Anthonisen (dispneia, volume e purulência do escarro) | Perguntar sobre febre e sintomas sistêmicos | Investigar uso e resposta ao broncodilatador de resgate | Perguntar sobre exacerbações e internações prévias | Avaliar rede de apoio e condições domiciliares | Investigar situação vacinal',
      expectedPhysical: 'Avaliar nível de consciência de forma ativa (sonolência é sinal de alarme de narcose por CO2) | Sinais vitais completos com SpO2 | Avaliar uso de musculatura acessória e padrão respiratório (lábios semicerrados) | Ausculta pulmonar completa | Pesquisar flapping (asterixis), sinal de hipercapnia importante',
      expectedExams: [
        { exam: 'Gasometria arterial', justify: 'Essencial para avaliar gravidade da insuficiência respiratória e indicação de VNI', expected: 'Acidose respiratória com hipercapnia — indica VNI' },
        { exam: 'Radiografia de tórax', justify: 'Excluir pneumonia focal, pneumotórax ou outra causa de piora aguda', expected: 'Hiperinsuflação conhecida, sem consolidação nova' },
        { exam: 'Hemograma e PCR', justify: 'Avaliar processo infeccioso associado', expected: 'Leucocitose e PCR elevada, compatíveis com exacerbação infecciosa' }
      ],
      expectedConduct: 'Farmacológica: broncodilatador de curta ação inalatório (salbutamol + ipratrópio) em doses repetidas; corticoide sistêmico (prednisona 40 mg/dia VO por 5 dias, ou equivalente IV); antibioticoterapia empírica (dado os 3 critérios de Anthonisen presentes — ex.: amoxicilina-clavulanato ou macrolídeo, conforme gravidade e perfil de resistência local); O2 suplementar titulado com cautela (alvo SpO2 88-92%, evitando hiperoxia que pode agravar retenção de CO2) | Não farmacológica: ventilação não invasiva (VNI/BiPAP) diante de acidose respiratória (pH <7,35 com hipercapnia) — reduz necessidade de intubação e mortalidade; internação hospitalar | Orientações ao paciente: explicar a necessidade da máscara de VNI e seus objetivos; esclarecer que a internação visa evitar intubação; reforçar cessação definitiva de exposições e atualização vacinal após alta | Seguimento: reavaliação gasométrica após VNI; alta com plano de ação por escrito e encaminhamento para reabilitação pulmonar',
      expectedCommunication: 'Comunicar a gravidade do quadro e a necessidade de internação/VNI de forma clara e tranquilizadora | Explicar o objetivo da ventilação não invasiva antes de aplicá-la | Acolher o medo de intubação, explicando que a VNI busca justamente evitá-la | Verificar compreensão e disponibilidade de rede de apoio para o retorno domiciliar',
      criticalErrors: [
        'Não realizar gasometria arterial diante de exacerbação com sinais de gravidade (taquipneia, SpO2 baixa)',
        'Não indicar ventilação não invasiva diante de acidose respiratória com hipercapnia',
        'Ofertar O2 em alto fluxo sem titulação cuidadosa, arriscando agravar a retenção de CO2',
        'Não prescrever antibiótico diante dos 3 critérios de Anthonisen presentes',
        'Não avaliar ativamente o nível de consciência como sinal de narcose por CO2'
      ]
    },
    instD: {
      title: 'CHECKLIST — PIORA DA FALTA DE AR EM DPOC CONHECIDO (EXACERBAÇÃO)',
      sections: [
        {
          h: 'BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE',
          items: [
            { item: 'Apresentou-se pelo nome ao paciente', score: 0.5, ref: 'CFM Res. 2.232/2019' },
            { item: 'Explicou o objetivo da VNI antes de aplicá-la', score: 0.5, ref: 'GOLD 2024' }
          ]
        },
        {
          h: 'BLOCO 2 — ANAMNESE',
          items: [
            { item: 'Caracterizou os 3 critérios de Anthonisen (dispneia, volume, purulência)', score: 1.0, ref: 'GOLD 2024' },
            { item: 'Perguntou sobre internações/exacerbações prévias', score: 0.5, ref: 'GOLD 2024' },
            { item: 'Investigou febre e sintomas sistêmicos', score: 0.5, ref: 'GOLD 2024' }
          ]
        },
        {
          h: 'BLOCO 3 — EXAME FÍSICO',
          items: [
            { item: 'Avaliou ativamente o nível de consciência (rastreio de narcose por CO2)', score: 1.0, ref: 'GOLD 2024' },
            { item: 'Aferiu SpO2 e sinais vitais completos', score: 0.5, ref: 'GOLD 2024' },
            { item: 'Realizou ausculta pulmonar completa', score: 0.5, ref: 'GOLD 2024' }
          ]
        },
        {
          h: 'BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
          items: [
            { item: 'Solicitou gasometria arterial diante de sinais de gravidade', score: 1.5, ref: 'GOLD 2024' },
            { item: 'Solicitou radiografia de tórax para excluir diferenciais', score: 0.5, ref: 'GOLD 2024' }
          ]
        },
        {
          h: 'BLOCO 5 — CONDUTA E ORIENTAÇÃO AO PACIENTE',
          items: [
            { item: 'Indicou ventilação não invasiva diante de acidose respiratória hipercápnica', score: 1.5, ref: 'GOLD 2024' },
            { item: 'Prescreveu antibioticoterapia empírica (3 critérios de Anthonisen presentes)', score: 1.0, ref: 'GOLD 2024' },
            { item: 'Prescreveu corticoide sistêmico e broncodilatador de curta ação', score: 1.0, ref: 'GOLD 2024' },
            { item: 'Titulou O2 com cautela, evitando hiperoxia (alvo SpO2 88-92%)', score: 0.5, ref: 'GOLD 2024' }
          ]
        }
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // CASO 3 — PNEUMONIA ADQUIRIDA NA COMUNIDADE
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 3,
    title: 'Febre, tosse produtiva e dor torácica pleurítica há 4 dias',
    sub: 'PS — Pronto-Socorro',
    tema: 'Pneumologia',
    topic: 'Pneumonia Adquirida na Comunidade',
    level: 'moderado',
    cardAccent: '#5B9BD5',
    instA: {
      scenario: 'Pronto-Socorro, turno vespertino.',
      patient: 'L.F.C., 57 anos, masculino, motorista de caminhão.',
      complaint: 'Febre, tosse com escarro amarelado e dor no peito que piora ao respirar fundo, há 4 dias.',
      tasks: [
        'Realize a anamnese dirigida ao caso.',
        'Realize o exame físico pulmonar dirigido.',
        'Formule a hipótese diagnóstica.',
        'Calcule o escore CURB-65 e defina local de tratamento.',
        'Solicite os exames complementares e proponha a antibioticoterapia adequada.'
      ]
    },
    instB: {
      vitals: {
        PA: '108/68 mmHg',
        FC: '104 bpm',
        FR: '24 irpm',
        Tax: '38,9 °C',
        Peso: '82 kg',
        Altura: '1,74 m',
        SpO2: '92%'
      },
      physicalGeneral: 'Regular estado geral, febril, taquipneico, corado, levemente confuso quanto à data de hoje quando questionado (desorientação leve).',
      physicalSeg: 'RESPIRATÓRIO: expansibilidade reduzida em base direita; percussão com macicez em base direita; ausculta com estertores crepitantes em base direita, broncofonia e egofonia presentes | CARDIOVASCULAR: taquicárdico, bulhas normofonéticas | Sem sinais de irritação meníngea.',
      labs: [
        { test: 'Ureia', val: '58 mg/dL', ref: '15–45 mg/dL', alt: true },
        { test: 'Leucócitos', val: '16.200/mm³ com desvio à esquerda', ref: '4.000–11.000/mm³', alt: true },
        { test: 'PCR', val: '182 mg/L', ref: '< 5 mg/L', alt: true },
        { test: 'Hemocultura (2 amostras, coletadas antes do antibiótico)', val: 'Em processamento no momento da consulta', ref: 'Estéril', alt: true }
      ],
      image: 'Radiografia de tórax PA: consolidação alveolar homogênea em lobo inferior direito, com broncograma aéreo, sem cavitação, sem derrame pleural significativo.',
      note: 'A confusão mental leve deve ser ativamente pesquisada pelo candidato (ex.: perguntando a data, orientação) — não é espontaneamente relatada pelo paciente/ator, e é um dos 5 critérios do CURB-65. Entregar ureia e demais exames conforme solicitados.',
      patientProfile: 'Motorista de caminhão, tabagista (20 cigarros/dia), passa longos períodos na estrada, refere ter "pegado uma gripe forte" de um colega de trabalho na semana anterior.',
      script: [
        { trigger: 'Queixa principal', speech: 'Doutor(a), tô com febre alta, tosse com catarro amarelo, e uma dor forte no peito que piora quando respiro fundo.' },
        { trigger: 'Sobre a febre', speech: 'Começou há uns 4 dias, veio com calafrio forte, hoje bateu quase 39 graus.' },
        { trigger: 'Sobre a dor torácica', speech: 'A dor é do lado direito, piora bastante quando respiro fundo ou tusso.' },
        { trigger: 'Sobre sintomas associados', speech: 'Tenho me sentido bem cansado, sem apetite, e um colega de trabalho também ficou gripado essa semana.' },
        { trigger: 'Ao ser perguntado a data de hoje', speech: '(hesitante) Hoje é... quinta? Não, acho que é sexta... não tenho certeza, doutor(a).' },
        { trigger: 'Sobre tabagismo', speech: 'Fumo um maço por dia, há muitos anos já.' },
        { trigger: 'Pergunta ativa — gravidade', speech: 'Doutor(a), isso é grave? Vou precisar ficar internado?' }
      ],
      hiddenInfo: 'Não é vacinado contra influenza nem pneumococo — só revela se perguntado sobre vacinação | Mora sozinho durante a semana por causa do trabalho, o que dificulta cuidados domiciliares se liberado — só revela se perguntado sobre rede de apoio | Está preocupado em perder dias de trabalho, pois é autônomo — só revela essa preocupação se o candidato abordar necessidade de afastamento/internação',
      actorBehavior: 'Demonstrar mal-estar visível (fácies de doença, respiração mais rápida). Levemente confuso/lento ao ser questionado sobre orientação temporal, sem perceber isso como anormal. Preocupado com necessidade de internação e impacto no trabalho.'
    },
    instC: {
      diagnosis: 'Pneumonia adquirida na comunidade (PAC), com CURB-65 = 3 pontos (Confusão + Ureia elevada + FR ≥30... a considerar; calcular criteriosamente) indicando gravidade moderada a grave, com indicação de internação hospitalar.',
      differentials: [
        'Tuberculose pulmonar — entra pela tosse e febre; sai pela evolução aguda (4 dias, não semanas) e pelo padrão radiológico de consolidação lobar típica, não cavitário/apical',
        'Tromboembolismo pulmonar — entra pela dor pleurítica e taquipneia; sai pela presença de febre alta com calafrios e consolidação radiológica típica de infecção, mais compatível com pneumonia',
        'Bronquite aguda — entra pela tosse produtiva; sai pela presença de consolidação focal à radiografia e sinais focais ao exame (macicez, broncofonia), incompatíveis com bronquite (via aérea, sem acometimento alveolar)',
        'Pneumonia por COVID-19 ou outro vírus respiratório — deve ser considerada no diagnóstico diferencial/coinfecção conforme contexto epidemiológico local, com testagem específica quando disponível'
      ],
      context: 'Homem de 57 anos, tabagista, com quadro agudo típico de pneumonia bacteriana adquirida na comunidade — febre alta, tosse produtiva, dor pleurítica e consolidação lobar à radiografia, associado a confusão mental leve e ureia elevada, achados que elevam o escore CURB-65 e definem necessidade de internação hospitalar em vez de tratamento ambulatorial.',
      justify: 'O escore CURB-65 (Confusão mental, Ureia >43 mg/dL, FR ≥30 irpm, PA sistólica <90 ou diastólica ≤60 mmHg, idade ≥65 anos) soma neste caso ao menos 2 pontos confirmados (confusão mental leve e ureia elevada 58 mg/dL), possivelmente 3 a depender da FR exata registrada — pontuação ≥2 já indica necessidade de internação hospitalar (0-1 = tratamento ambulatorial; 2 = considerar internação; ≥3 = considerar UTI), corroborado pela hipoxemia (SpO2 92%) e PCR muito elevada, reforçando gravidade moderada-grave.',
      expectedAnamnesis: 'Caracterizar febre, tosse produtiva e dor pleurítica | Investigar contato com pessoas doentes recentemente | Avaliar orientação temporoespacial (rastreio de confusão mental, critério do CURB-65) | Investigar tabagismo e comorbidades | Perguntar sobre situação vacinal | Avaliar rede de apoio domiciliar',
      expectedPhysical: 'Sinais vitais completos com FR e SpO2 | Avaliação do nível de consciência/orientação | Ausculta pulmonar completa (estertores, broncofonia, egofonia) | Percussão torácica (macicez)',
      expectedExams: [
        { exam: 'Radiografia de tórax', justify: 'Confirmar consolidação e localização, exame obrigatório para diagnóstico de PAC', expected: 'Consolidação em lobo inferior direito com broncograma aéreo' },
        { exam: 'Ureia sérica', justify: 'Componente do escore CURB-65 para definir gravidade e local de tratamento', expected: '58 mg/dL — elevada, pontua no CURB-65' },
        { exam: 'Hemograma e PCR', justify: 'Avaliar resposta inflamatória sistêmica', expected: 'Leucocitose com desvio e PCR muito elevada' },
        { exam: 'Hemoculturas (2 amostras, antes do antibiótico)', justify: 'Identificar agente etiológico em pacientes com indicação de internação', expected: 'Resultado pendente; orienta ajuste terapêutico' }
      ],
      expectedConduct: 'Farmacológica: antibioticoterapia empírica conforme gravidade — para paciente com indicação de internação em enfermaria, beta-lactâmico (ceftriaxona) associado a macrolídeo (azitromicina), ou monoterapia com fluoroquinolona respiratória (levofloxacino/moxifloxacino) como alternativa; analgesia e antitérmico | Não farmacológica: internação hospitalar dado CURB-65 ≥2; O2 suplementar para SpO2 <92%; hidratação | Orientações ao paciente: explicar a necessidade de internação apesar de o quadro parecer "só uma gripe forte" inicialmente; orientar sobre importância de completar o antibiótico; orientar atualização vacinal futura (influenza, pneumocócica) | Seguimento: reavaliação clínica em 48-72h para resposta ao tratamento; considerar troca para via oral e alta quando estável',
      expectedCommunication: 'Explicar de forma clara a necessidade de internação, mesmo que o paciente inicialmente minimize os sintomas como "gripe" | Acolher a preocupação do paciente quanto ao trabalho/renda | Explicar o escore CURB-65 de forma acessível como justificativa da conduta | Verificar compreensão do plano terapêutico',
      criticalErrors: [
        'Não avaliar orientação temporoespacial (confusão mental), deixando de identificar critério importante do CURB-65',
        'Não calcular ou considerar o CURB-65 para definir local de tratamento (ambulatorial x internação)',
        'Liberar para casa paciente com CURB-65 ≥2 sem justificativa',
        'Não solicitar radiografia de tórax diante de suspeita clínica de pneumonia',
        'Prescrever antibiótico inadequado ao cenário de gravidade (ex.: apenas amoxicilina oral em paciente com indicação de internação)'
      ]
    },
    instD: {
      title: 'CHECKLIST — FEBRE, TOSSE PRODUTIVA E DOR TORÁCICA (PNEUMONIA)',
      sections: [
        {
          h: 'BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE',
          items: [
            { item: 'Apresentou-se pelo nome ao paciente', score: 0.5, ref: 'CFM Res. 2.232/2019' },
            { item: 'Explicou a necessidade de internação de forma clara e acolhedora', score: 0.5, ref: 'SBPT — Diretrizes de PAC' }
          ]
        },
        {
          h: 'BLOCO 2 — ANAMNESE',
          items: [
            { item: 'Caracterizou febre, tosse produtiva e dor pleurítica', score: 0.5, ref: 'SBPT — Diretrizes de PAC' },
            { item: 'Avaliou orientação temporoespacial do paciente', score: 1.0, ref: 'SBPT — CURB-65' },
            { item: 'Investigou tabagismo e comorbidades', score: 0.5, ref: 'SBPT — Diretrizes de PAC' }
          ]
        },
        {
          h: 'BLOCO 3 — EXAME FÍSICO',
          items: [
            { item: 'Aferiu FR e SpO2', score: 0.5, ref: 'SBPT — CURB-65' },
            { item: 'Realizou ausculta e percussão torácica identificando achados focais em base direita', score: 0.5, ref: 'SBPT — Diretrizes de PAC' }
          ]
        },
        {
          h: 'BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
          items: [
            { item: 'Solicitou radiografia de tórax', score: 1.0, ref: 'SBPT — Diretrizes de PAC' },
            { item: 'Solicitou ureia sérica', score: 0.5, ref: 'SBPT — CURB-65' },
            { item: 'Calculou o CURB-65 corretamente e definiu necessidade de internação', score: 1.5, ref: 'SBPT — CURB-65' },
            { item: 'Solicitou hemoculturas antes de iniciar o antibiótico', score: 0.5, ref: 'SBPT — Diretrizes de PAC' }
          ]
        },
        {
          h: 'BLOCO 5 — CONDUTA E ORIENTAÇÃO AO PACIENTE',
          items: [
            { item: 'Indicou internação hospitalar com base no CURB-65', score: 1.0, ref: 'SBPT — Diretrizes de PAC' },
            { item: 'Prescreveu antibioticoterapia empírica adequada à gravidade', score: 1.0, ref: 'SBPT — Diretrizes de PAC' },
            { item: 'Perguntou se o paciente tinha dúvidas ao final do atendimento', score: 0.5, ref: 'CFM Res. 2.232/2019' }
          ]
        }
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // CASO 4 — NÓDULO PULMONAR SOLITÁRIO
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 4,
    title: 'Nódulo pulmonar encontrado em exame de rotina',
    sub: 'Ambulatório — Pneumologia',
    tema: 'Pneumologia',
    topic: 'Nódulo Pulmonar Solitário',
    level: 'difícil',
    cardAccent: '#5B9BD5',
    instA: {
      scenario: 'Consulta ambulatorial de pneumologia, paciente encaminhado após achado incidental em exame de imagem.',
      patient: 'C.A.M., 63 anos, masculino, ex-tabagista, aposentado.',
      complaint: 'Encaminhado após achado de "mancha no pulmão" em tomografia realizada para investigação de outro problema.',
      tasks: [
        'Realize a anamnese dirigida, incluindo fatores de risco para malignidade.',
        'Realize o exame físico pertinente.',
        'Interprete os achados de imagem conforme os critérios de risco.',
        'Solicite os exames complementares/conduta adequada conforme classificação de risco (Fleischner).',
        'Explique ao paciente a conduta de vigilância ou investigação adicional proposta.'
      ]
    },
    instB: {
      vitals: {
        PA: '128/80 mmHg',
        FC: '76 bpm',
        FR: '16 irpm',
        Tax: '36,4 °C',
        Peso: '80 kg',
        Altura: '1,72 m',
        SpO2: '97%'
      },
      physicalGeneral: 'Bom estado geral, assintomático do ponto de vista respiratório, sem emagrecimento.',
      physicalSeg: 'RESPIRATÓRIO: ausculta pulmonar sem alterações, sem estertores ou sibilos | Sem linfadenopatia palpável (cervical, supraclavicular, axilar) | Sem baqueteamento digital.',
      labs: [
        { test: 'Hemograma completo', val: 'Sem alterações significativas', ref: 'Normal', alt: false }
      ],
      image: 'Tomografia de tórax (exame índice, realizado por outro motivo): nódulo pulmonar sólido, de contornos espiculados, medindo 9 mm, localizado em lobo superior direito, sem calcificação, sem cavitação, sem linfadenopatia mediastinal associada. Comparação com exame de imagem prévio (2 anos atrás, disponível no sistema): não havia nódulo visível nesta localização.',
      note: 'A comparação com exame de imagem prévio é crucial e deve ser buscada ativamente pelo candidato (histórico de crescimento é dado central para a decisão) — reforçar essa informação se o candidato não perguntar sobre exames anteriores.',
      patientProfile: 'Aposentado, ex-tabagista (parou há 5 anos, carga tabágica prévia de 40 anos-maço), fez a tomografia por dor lombar (investigação musculoesquelética), sendo o nódulo um achado incidental. Assintomático respiratório.',
      script: [
        { trigger: 'Queixa principal', speech: 'Doutor(a), eu fiz uma tomografia por causa de uma dor nas costas, e falaram que apareceu uma "mancha" no meu pulmão. Fiquei preocupado.' },
        { trigger: 'Sobre sintomas respiratórios', speech: 'Não sinto falta de ar, não tenho tosse, não emagreci nem nada, me sinto bem.' },
        { trigger: 'Sobre tabagismo', speech: 'Fumei muitos anos, parei há uns 5 anos, fumava bastante antes, um maço e meio por dia.' },
        { trigger: 'Sobre exames anteriores', speech: 'Acho que já fiz uma tomografia há uns 2 anos por outro motivo, não sei se dá para comparar.' },
        { trigger: 'Sobre história familiar', speech: 'Meu pai teve câncer de pulmão, morreu por causa disso há uns 10 anos.' },
        { trigger: 'Pergunta ativa — diagnóstico', speech: 'Doutor(a), isso é câncer? Eu vou precisar operar?' }
      ],
      hiddenInfo: 'Teve exposição ocupacional a amianto em trabalho antigo na construção civil, décadas atrás — só revela se perguntado sobre exposições ocupacionais | Está com muita ansiedade desde que recebeu a notícia do achado, teve insônia nos últimos dias — só revela se o candidato explorar o impacto emocional | Não sabia da importância de comparar com exames anteriores e não trouxe o exame antigo consigo — só revela se perguntado ativamente sobre isso',
      actorBehavior: 'Visivelmente ansioso desde o início da consulta, olhar preocupado. Faz a pergunta sobre câncer de forma direta e repetida se não for esclarecida adequadamente. Alívio parcial quando o candidato explica o plano de forma organizada e baseada em critérios objetivos.'
    },
    instC: {
      diagnosis: 'Nódulo pulmonar solitário de alto risco para malignidade (nódulo sólido espiculado, novo em relação a exame prévio, em ex-tabagista com carga tabágica importante e história familiar de câncer de pulmão), exigindo investigação adicional ativa conforme critérios de Fleischner e escores de risco.',
      differentials: [
        'Nódulo benigno (granuloma infeccioso cicatricial, hamartoma) — entra como possibilidade em qualquer nódulo pulmonar; sai pela ausência de calcificação em padrão benigno (central, em "pipoca") e pela característica espiculada e pelo fato de ser um nódulo novo (não presente há 2 anos), achados que aumentam a probabilidade de malignidade',
        'Nódulo inflamatório/infeccioso ativo (ex.: tuberculoma, fungoma) — entra como diferencial; menos provável dado o contexto assintomático e ausência de outros sinais infecciosos, mas deve ser considerado na investigação complementar',
        'Metástase pulmonar de tumor primário extrapulmonar — entra como diferencial de nódulo sólido; menos provável na ausência de história oncológica prévia conhecida, mas deve ser lembrada na investigação inicial',
        'Nódulo carcinoide ou outra neoplasia pulmonar primária menos comum — permanece no espectro de possibilidades a serem elucidadas por biópsia, caso indicada'
      ],
      context: 'Nódulos pulmonares solitários são achados incidentais cada vez mais frequentes, dado o aumento do uso de tomografias. A avaliação de risco de malignidade combina características do nódulo (tamanho, densidade, margens, calcificação, crescimento em relação a exames prévios) com fatores do paciente (idade, tabagismo, história familiar, exposições ocupacionais como asbesto), conforme os critérios da Fleischner Society, que orientam entre vigilância por imagem, investigação funcional (PET-CT) ou biópsia direta.',
      justify: 'O nódulo apresentado (9 mm, sólido, espiculado, novo em relação a exame de 2 anos atrás) associado aos fatores de risco do paciente (ex-tabagista com carga tabágica elevada, história familiar de câncer de pulmão, exposição ocupacional a amianto) classifica-o como alto risco de malignidade. Segundo os critérios da Fleischner Society, nódulos sólidos ≥8 mm em paciente de alto risco têm indicação de investigação adicional ativa (PET-CT e/ou biópsia), não sendo apropriada apenas a vigilância simples por imagem em intervalo longo, que seria a conduta para nódulos de baixo risco.',
      expectedAnamnesis: 'Investigar sintomas respiratórios (tosse, hemoptise, dispneia, dor torácica) | Quantificar carga tabágica (atual ou pregressa) | Perguntar sobre exposições ocupacionais (asbesto, sílica, radônio) | Investigar história familiar de câncer de pulmão | Perguntar sobre emagrecimento e sintomas constitucionais | Buscar ativamente exames de imagem anteriores para comparação (crescimento é dado crítico) | Avaliar impacto emocional/ansiedade do achado',
      expectedPhysical: 'Ausculta pulmonar completa | Palpação de cadeias linfonodais (cervical, supraclavicular, axilar) | Pesquisa de baqueteamento digital | Avaliação de estado nutricional/emagrecimento',
      expectedExams: [
        { exam: 'Comparação com exames de imagem prévios', justify: 'Determinar se o nódulo é novo ou estável ao longo do tempo — dado essencial para a decisão (nódulo estável por ≥2 anos tem baixa probabilidade de malignidade)', expected: 'Nódulo ausente há 2 anos — portanto novo, reforçando necessidade de investigação' },
        { exam: 'PET-CT (tomografia por emissão de pósitrons)', justify: 'Avaliar atividade metabólica do nódulo em pacientes de risco intermediário-alto, auxiliando a decisão entre biópsia e vigilância', expected: 'Auxilia a estratificar probabilidade de malignidade antes de procedimento invasivo' },
        { exam: 'Biópsia (transtorácica guiada por TC ou por broncoscopia, conforme localização)', justify: 'Obter diagnóstico histológico definitivo em nódulo de alto risco', expected: 'Definir natureza histológica da lesão' },
        { exam: 'Espirometria (avaliação funcional pré-operatória)', justify: 'Avaliar reserva pulmonar caso ressecção cirúrgica seja necessária', expected: 'Avaliar viabilidade cirúrgica futura' }
      ],
      expectedConduct: 'Farmacológica: não se aplica tratamento farmacológico específico neste momento da investigação | Não farmacológica: encaminhamento para investigação ativa (PET-CT e discussão em equipe multidisciplinar, com biópsia guiada por imagem ou broncoscopia conforme localização e acessibilidade do nódulo), dado o alto risco de malignidade — vigilância isolada por imagem NÃO é apropriada para este perfil de risco; reforçar cessação definitiva de qualquer exposição a tabaco | Orientações ao paciente: explicar de forma clara que o achado exige investigação adicional ativa, sem ainda ser um diagnóstico confirmado de câncer; explicar os próximos passos (PET-CT, possível biópsia) de forma organizada, reduzindo a ansiedade pela incerteza; acolher a história familiar de câncer de pulmão como fator de preocupação legítima',
      expectedCommunication: 'Acolher a ansiedade do paciente desde o início da consulta | Explicar de forma didática o processo de investigação de um nódulo pulmonar sem prometer um diagnóstico definitivo prematuro | Evitar tanto o alarmismo quanto a falsa tranquilização | Verificar compreensão dos próximos passos propostos',
      criticalErrors: [
        'Não buscar ativamente exames de imagem prévios para avaliar se o nódulo é novo ou estável',
        'Classificar o nódulo como baixo risco e indicar apenas vigilância simples, ignorando os fatores de alto risco presentes (tabagismo, espiculação, história familiar)',
        'Não investigar exposições ocupacionais relevantes (asbesto) e história familiar de câncer de pulmão',
        'Prometer ao paciente que "não é nada grave" sem base em investigação adequada',
        'Não encaminhar para investigação ativa (PET-CT/biópsia) em nódulo de alto risco'
      ]
    },
    instD: {
      title: 'CHECKLIST — NÓDULO PULMONAR ENCONTRADO EM EXAME DE ROTINA',
      sections: [
        {
          h: 'BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE',
          items: [
            { item: 'Apresentou-se pelo nome ao paciente', score: 0.5, ref: 'CFM Res. 2.232/2019' },
            { item: 'Acolheu a ansiedade do paciente sem alarmismo nem falsa tranquilização', score: 0.5, ref: 'Fleischner Society Guidelines' }
          ]
        },
        {
          h: 'BLOCO 2 — ANAMNESE',
          items: [
            { item: 'Quantificou a carga tabágica (atual ou pregressa)', score: 0.5, ref: 'Fleischner Society Guidelines' },
            { item: 'Investigou exposições ocupacionais (ex.: asbesto)', score: 0.5, ref: 'Fleischner Society Guidelines' },
            { item: 'Investigou história familiar de câncer de pulmão', score: 0.5, ref: 'Fleischner Society Guidelines' },
            { item: 'Buscou ativamente exame de imagem anterior para comparação', score: 1.0, ref: 'Fleischner Society Guidelines' }
          ]
        },
        {
          h: 'BLOCO 3 — EXAME FÍSICO',
          items: [
            { item: 'Palpou cadeias linfonodais (cervical, supraclavicular, axilar)', score: 0.5, ref: 'Fleischner Society Guidelines' },
            { item: 'Realizou ausculta pulmonar completa', score: 0.5, ref: 'Fleischner Society Guidelines' }
          ]
        },
        {
          h: 'BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
          items: [
            { item: 'Reconheceu o nódulo como novo (ausente em exame de 2 anos atrás)', score: 1.0, ref: 'Fleischner Society Guidelines' },
            { item: 'Classificou corretamente o nódulo como alto risco de malignidade', score: 1.5, ref: 'Fleischner Society Guidelines' },
            { item: 'Solicitou/indicou PET-CT e avaliação para biópsia', score: 1.0, ref: 'Fleischner Society Guidelines' }
          ]
        },
        {
          h: 'BLOCO 5 — CONDUTA E ORIENTAÇÃO AO PACIENTE',
          items: [
            { item: 'NÃO indicou apenas vigilância simples por imagem (inapropriada para o risco deste caso)', score: 1.0, ref: 'Fleischner Society Guidelines' },
            { item: 'Explicou o plano de investigação de forma organizada e compreensível', score: 0.5, ref: 'CFM Res. 2.232/2019' },
            { item: 'Perguntou se o paciente tinha dúvidas ao final da consulta', score: 0.5, ref: 'CFM Res. 2.232/2019' }
          ]
        }
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // CASO 5 — DERRAME PLEURAL
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 5,
    title: 'Falta de ar progressiva e dor torácica com derrame pleural à radiografia',
    sub: 'PS — Pronto-Socorro',
    tema: 'Pneumologia',
    topic: 'Derrame Pleural',
    level: 'moderado',
    cardAccent: '#5B9BD5',
    instA: {
      scenario: 'Pronto-Socorro, turno matutino.',
      patient: 'H.S.B., 66 anos, masculino, ex-tabagista, aposentado.',
      complaint: 'Falta de ar progressiva há 2 semanas e dor torácica em pontada, associada a emagrecimento.',
      tasks: [
        'Realize a anamnese dirigida ao caso.',
        'Realize o exame físico pulmonar dirigido.',
        'Formule a hipótese diagnóstica e os diferenciais de derrame pleural.',
        'Solicite os exames complementares, incluindo toracocentese diagnóstica.',
        'Interprete o líquido pleural pelos critérios de Light e proponha a conduta.'
      ]
    },
    instB: {
      vitals: {
        PA: '124/78 mmHg',
        FC: '96 bpm',
        FR: '22 irpm',
        Tax: '37,1 °C',
        Peso: '68 kg (perda de 5 kg em 2 meses)',
        Altura: '1,70 m',
        SpO2: '93%'
      },
      physicalGeneral: 'Regular estado geral, emagrecido, dispneico a médios esforços.',
      physicalSeg: 'RESPIRATÓRIO: expansibilidade reduzida em hemitórax direito; percussão maciça em base e terço médio direito; ausculta com murmúrio vesicular abolido na área de macicez, frêmito toracovocal abolido no mesmo local | CARDIOVASCULAR: sem alterações | Sem linfadenopatia palpável.',
      labs: [
        { test: 'Líquido pleural — Proteína', val: '4,8 g/dL (proteína sérica simultânea: 6,8 g/dL)', ref: 'Relação líquido/soro > 0,5 = exsudato (critério de Light)', alt: true },
        { test: 'Líquido pleural — DHL', val: '620 U/L (DHL sérico simultâneo: 380 U/L)', ref: 'Relação líquido/soro > 0,6 e/ou DHL líquido > 2/3 do limite superior sérico = exsudato', alt: true },
        { test: 'Líquido pleural — Citologia oncótica', val: 'Presença de células neoplásicas malignas (padrão compatível com adenocarcinoma)', ref: 'Ausência de células neoplásicas', alt: true },
        { test: 'Líquido pleural — Celularidade', val: 'Predomínio linfomononuclear, sem predomínio de polimorfonucleares', ref: 'Variável conforme etiologia', alt: true },
        { test: 'Líquido pleural — ADA (adenosina desaminase)', val: '18 U/L', ref: '< 40 U/L (valores muito elevados sugerem etiologia tuberculosa)', alt: false }
      ],
      image: 'Radiografia de tórax PA: opacidade homogênea ocupando terço inferior e médio do hemitórax direito, com curva de Damoiseau, compatível com derrame pleural volumoso; discreto desvio do mediastino contralateral. TC de tórax (complementar): derrame pleural direito associado a espessamento pleural nodular e massa pulmonar associada em lobo superior direito.',
      note: 'A toracocentese diagnóstica é o procedimento central deste caso — reforçar que deve ser sempre realizada em derrame pleural de causa não esclarecida, mesmo que o candidato hesite. Entregar os resultados do líquido pleural apenas após o candidato indicar/realizar a toracocentese.',
      patientProfile: 'Aposentado, ex-tabagista (parou há 2 anos, carga tabágica prévia de 45 anos-maço), refere piora progressiva da falta de ar nas últimas 2 semanas, com emagrecimento não intencional de 5 kg em 2 meses.',
      script: [
        { trigger: 'Queixa principal', speech: 'Doutor(a), estou com falta de ar que só piora, já faz umas 2 semanas, e uma dor tipo pontada no peito direito.' },
        { trigger: 'Sobre a dor torácica', speech: 'É uma dor em pontada, do lado direito, piora quando respiro fundo ou tusso.' },
        { trigger: 'Sobre emagrecimento', speech: 'Perdi uns 5 quilos nesses últimos 2 meses, sem fazer dieta nem nada, nem percebi direito até minha esposa comentar.' },
        { trigger: 'Sobre tabagismo', speech: 'Fumei muitos anos, parei há uns 2 anos, fumava bastante, quase 2 maços por dia antes.' },
        { trigger: 'Sobre febre', speech: 'Não tenho tido febre, não, só essa falta de ar e a dor mesmo.' },
        { trigger: 'Pergunta ativa — diagnóstico', speech: 'Doutor(a), o que é essa água no pulmão? É grave? Pode ser alguma coisa ruim?' }
      ],
      hiddenInfo: 'Tem episódios de tosse seca persistente há cerca de 1 mês que não valorizou — só revela se perguntado ativamente sobre tosse | Notou um pouco de rouquidão recente na voz — só revela se perguntado sobre alterações vocais (possível sinal de acometimento de nervo laríngeo recorrente por doença mediastinal/pulmonar avançada) | Está com muito medo de ter câncer, pois um irmão faleceu de câncer de pulmão — verbaliza esse medo se o candidato explorar preocupações',
      actorBehavior: 'Demonstrar dispneia leve a moderada durante a consulta (fala com pausas ocasionais). Visivelmente preocupado com o emagrecimento e a possibilidade de câncer, especialmente pela história familiar. Colaborativo durante o exame físico e o procedimento de toracocentese.'
    },
    instC: {
      diagnosis: 'Derrame pleural exsudativo neoplásico (critérios de Light positivos + citologia oncótica positiva para células malignas), provavelmente secundário a neoplasia pulmonar primária (massa associada em lobo superior direito).',
      differentials: [
        'Derrame pleural transudativo (insuficiência cardíaca, cirrose, síndrome nefrótica) — entra como causa comum de derrame pleural; excluído pelos critérios de Light positivos para exsudato (relação proteína e DHL líquido/soro elevadas)',
        'Derrame parapneumônico/empiema — entra como causa de exsudato; sai pela ausência de febre significativa, celularidade sem predomínio de polimorfonucleares e pela citologia oncótica positiva, mais compatível com etiologia neoplásica',
        'Derrame pleural tuberculoso — entra como diferencial importante de exsudato linfomononuclear; sai pela ADA não elevada (valor normal, <40 U/L) e pela citologia oncótica positiva, tornando a neoplasia o diagnóstico mais provável',
        'Mesotelioma pleural — entra como diferencial em paciente com possível exposição a asbesto; permanece no diagnóstico diferencial da massa/espessamento pleural, a ser esclarecido com investigação histológica adicional caso a citologia isolada não seja conclusiva quanto ao subtipo'
      ],
      context: 'Homem idoso, ex-tabagista com carga tabágica elevada, apresentando derrame pleural volumoso associado a síndrome consumptiva (emagrecimento) e massa pulmonar à tomografia, com toracocentese confirmando exsudato com citologia oncótica positiva — quadro fortemente sugestivo de neoplasia pulmonar primária com derrame pleural maligno associado, situação que already define estadiamento avançado (M1a) e direciona a conduta paliativa/oncológica.',
      justify: 'Os critérios de Light confirmam exsudato: relação proteína líquido/soro = 4,8/6,8 = 0,71 (>0,5) e relação DHL líquido/soro = 620/380 = 1,63 (>0,6) — qualquer um dos critérios positivos já classifica como exsudato. A citologia oncótica positiva para células malignas confirma a etiologia neoplásica do derrame, corroborada pela massa pulmonar associada à tomografia, síndrome consumptiva e fator de risco relevante (tabagismo pesado).',
      expectedAnamnesis: 'Caracterizar dispneia e dor torácica (tipo, relação com a respiração) | Investigar emagrecimento e outros sintomas constitucionais | Perguntar sobre tosse, hemoptise, rouquidão | Quantificar carga tabágica | Investigar febre (diferencial com causa infecciosa) | Perguntar sobre comorbidades cardíacas/hepáticas/renais (diferencial com transudato)',
      expectedPhysical: 'Inspeção e palpação do frêmito toracovocal (abolido na área de derrame) | Percussão torácica (macicez) | Ausculta pulmonar (MV abolido na área de derrame) | Avaliação de linfadenopatia | Avaliação nutricional (emagrecimento)',
      expectedExams: [
        { exam: 'Radiografia de tórax', justify: 'Confirmar e quantificar o derrame pleural inicialmente', expected: 'Opacidade homogênea com curva de Damoiseau, compatível com derrame' },
        { exam: 'Toracocentese diagnóstica com análise do líquido pleural (proteína, DHL, celularidade, citologia oncótica, ADA)', justify: 'Procedimento essencial para classificar o derrame (transudato x exsudato) e investigar etiologia', expected: 'Exsudato pelos critérios de Light, citologia positiva para malignidade' },
        { exam: 'Tomografia de tórax', justify: 'Avaliar parênquima pulmonar, mediastino e caracterizar massa associada', expected: 'Massa pulmonar em lobo superior direito associada a espessamento pleural' },
        { exam: 'Biópsia pleural (se citologia inconclusiva) e estadiamento oncológico completo', justify: 'Confirmação histológica adicional e definição do estágio da neoplasia', expected: 'Conforme evolução da investigação' }
      ],
      expectedConduct: 'Farmacológica: analgesia para a dor pleurítica; conduta oncológica específica (quimioterapia/imunoterapia/terapia-alvo) a ser definida após estadiamento completo e biópsia, em conjunto com oncologia | Não farmacológica: toracocentese de alívio para melhora sintomática da dispneia em derrame volumoso; considerar pleurodese ou cateter pleural de longa permanência para derrames malignos recorrentes, medida paliativa para controle sintomático | Orientações ao paciente: comunicar o achado citológico suspeito de malignidade de forma cuidadosa e gradual, sem antecipar prognóstico antes do estadiamento completo; explicar os próximos passos da investigação (tomografia, biópsia, avaliação oncológica); oferecer suporte emocional diante do medo relacionado à história familiar',
      expectedCommunication: 'Comunicar a suspeita de malignidade de forma cuidadosa, respeitando o tempo do paciente para processar a informação | Evitar terminologia excessivamente técnica ao explicar o achado | Acolher o medo do paciente relacionado à história familiar de câncer de pulmão | Explicar claramente os próximos passos do estadiamento sem antecipar prognóstico definitivo',
      criticalErrors: [
        'Não realizar toracocentese diagnóstica diante de derrame pleural de causa não esclarecida',
        'Não aplicar os critérios de Light para classificar o derrame como transudato ou exsudato',
        'Não solicitar citologia oncótica do líquido pleural em paciente com fatores de risco para neoplasia',
        'Comunicar o diagnóstico de forma abrupta ou definitiva antes da confirmação/estadiamento completo',
        'Não considerar toracocentese de alívio ou medidas paliativas para controle da dispneia em derrame volumoso sintomático'
      ]
    },
    instD: {
      title: 'CHECKLIST — FALTA DE AR PROGRESSIVA COM DERRAME PLEURAL',
      sections: [
        {
          h: 'BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE',
          items: [
            { item: 'Apresentou-se pelo nome ao paciente', score: 0.5, ref: 'CFM Res. 2.232/2019' },
            { item: 'Comunicou a suspeita diagnóstica com cuidado, sem antecipar prognóstico', score: 0.5, ref: 'CFM Res. 2.232/2019' }
          ]
        },
        {
          h: 'BLOCO 2 — ANAMNESE',
          items: [
            { item: 'Investigou emagrecimento e sintomas constitucionais', score: 0.5, ref: 'SBPT — Diretrizes de Derrame Pleural' },
            { item: 'Quantificou carga tabágica', score: 0.5, ref: 'SBPT — Diretrizes de Derrame Pleural' },
            { item: 'Perguntou sobre febre (diferencial infeccioso)', score: 0.5, ref: 'SBPT — Diretrizes de Derrame Pleural' }
          ]
        },
        {
          h: 'BLOCO 3 — EXAME FÍSICO',
          items: [
            { item: 'Realizou percussão torácica identificando macicez', score: 0.5, ref: 'SBPT — Diretrizes de Derrame Pleural' },
            { item: 'Avaliou frêmito toracovocal e murmúrio vesicular na área acometida', score: 0.5, ref: 'SBPT — Diretrizes de Derrame Pleural' }
          ]
        },
        {
          h: 'BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
          items: [
            { item: 'Indicou toracocentese diagnóstica', score: 1.5, ref: 'SBPT — Diretrizes de Derrame Pleural' },
            { item: 'Aplicou os critérios de Light para classificar o derrame', score: 1.5, ref: 'SBPT — Critérios de Light' },
            { item: 'Solicitou citologia oncótica do líquido pleural', score: 1.0, ref: 'SBPT — Diretrizes de Derrame Pleural' }
          ]
        },
        {
          h: 'BLOCO 5 — CONDUTA E ORIENTAÇÃO AO PACIENTE',
          items: [
            { item: 'Considerou toracocentese de alívio para melhora sintomática', score: 0.5, ref: 'SBPT — Diretrizes de Derrame Pleural' },
            { item: 'Encaminhou para estadiamento oncológico completo', score: 1.0, ref: 'SBPT — Diretrizes de Derrame Pleural' },
            { item: 'Perguntou se o paciente tinha dúvidas ao final da consulta', score: 0.5, ref: 'CFM Res. 2.232/2019' }
          ]
        }
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // CASO 6 — PNEUMOTÓRAX ESPONTÂNEO PRIMÁRIO
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 6,
    title: 'Dor torácica súbita e falta de ar em jovem magro e alto',
    sub: 'PS — Pronto-Socorro',
    tema: 'Pneumologia',
    topic: 'Pneumotórax Espontâneo Primário',
    level: 'moderado',
    cardAccent: '#5B9BD5',
    instA: {
      scenario: 'Pronto-Socorro, turno noturno.',
      patient: 'G.T.A., 22 anos, masculino, estudante universitário, biotipo longilíneo.',
      complaint: 'Dor torácica súbita em pontada do lado direito e falta de ar, iniciadas em repouso há cerca de 1 hora.',
      tasks: [
        'Realize a anamnese dirigida ao caso.',
        'Realize o exame físico pulmonar dirigido, com atenção a sinais de gravidade.',
        'Formule a hipótese diagnóstica.',
        'Solicite o exame de imagem confirmatório.',
        'Classifique o tamanho do pneumotórax e proponha a conduta adequada.'
      ]
    },
    instB: {
      vitals: {
        PA: '118/76 mmHg',
        FC: '98 bpm',
        FR: '22 irpm',
        Tax: '36,5 °C',
        Peso: '64 kg',
        Altura: '1,88 m',
        IMC: '18,1 kg/m²',
        SpO2: '95%'
      },
      physicalGeneral: 'Bom estado geral, ansioso, biotipo longilíneo/ectomorfo, dor visível à inspiração profunda.',
      physicalSeg: 'RESPIRATÓRIO: expansibilidade reduzida em hemitórax direito; percussão hipertimpânica em hemitórax direito; ausculta com murmúrio vesicular abolido em hemitórax direito, presente e normal à esquerda | CARDIOVASCULAR: taquicárdico, bulhas normofonéticas, sem desvio de ictus | Sem turgência jugular ou desvio de traqueia no momento do exame.',
      labs: [],
      image: 'Radiografia de tórax PA (em inspiração): linha da pleura visceral visível, sem trama pulmonar periférica a ela, ocupando aproximadamente 25% do hemitórax direito (medido pela distância entre a pleura visceral e a parede torácica no nível do hilo), compatível com pneumotórax espontâneo primário de pequeno a moderado volume. Sem desvio de mediastino. Sem nível hidroaéreo.',
      note: 'A radiografia de tórax em inspiração é o exame de escolha inicial e deve ser solicitada prontamente — reforçar a importância de avaliar sinais de pneumotórax hipertensivo (desvio de mediastino, turgência jugular, instabilidade hemodinâmica) antes de aguardar o exame, caso o paciente apresente esses sinais (não presentes neste caso, mas devem ser buscados ativamente).',
      patientProfile: 'Estudante universitário, tabagista ocasional (fuma cigarro eletrônico socialmente), biotipo longilíneo (alto e magro), sem trauma torácico recente, sem doença pulmonar conhecida prévia.',
      script: [
        { trigger: 'Queixa principal', speech: 'Doutor(a), do nada senti uma dor forte tipo uma facada no peito do lado direito, e comecei a ficar com falta de ar. Foi enquanto eu estava sentado estudando.' },
        { trigger: 'Sobre a dor', speech: 'A dor é bem aguda, tipo pontada, piora quando respiro fundo. Não tive nenhuma pancada nem nada, começou do nada mesmo.' },
        { trigger: 'Sobre falta de ar', speech: 'Sinto que não consigo respirar fundo direito, incomoda bastante.' },
        { trigger: 'Sobre tabagismo', speech: 'Fumo cigarro eletrônico às vezes, em festas com amigos, não é todo dia.' },
        { trigger: 'Sobre episódios anteriores', speech: 'Nunca tive nada parecido antes, é a primeira vez.' },
        { trigger: 'Pergunta ativa — gravidade', speech: 'Doutor(a), isso é grave? O que aconteceu comigo? Vou precisar de cirurgia?' }
      ],
      hiddenInfo: 'O pai teve um episódio parecido de "pulmão furado" quando jovem, mas o paciente não sabia que isso poderia ser hereditário/familiar — só revela se perguntado sobre história familiar de problemas pulmonares | Está bastante ansioso e com medo de ter algo cardíaco grave, pois um colega teve infarto recentemente — verbaliza esse medo se o candidato não esclarecer bem o diagnóstico | Não tem diagnóstico prévio de doença do tecido conjuntivo, mas é bastante flexível articularmente ("dobra os dedos para trás facilmente") — achado a ser observado, não obrigatoriamente perguntado, sugestivo de possível hábito marfanoide',
      actorBehavior: 'Ansioso, respiração superficial e rápida por conta da dor pleurítica. Evita respirar fundo por desconforto. Pergunta repetidamente sobre gravidade e necessidade de cirurgia se não for esclarecido adequadamente.'
    },
    instC: {
      diagnosis: 'Pneumotórax espontâneo primário, de pequeno a moderado volume (~25%), em paciente jovem de biotipo longilíneo, sem doença pulmonar de base conhecida.',
      differentials: [
        'Tromboembolismo pulmonar — entra pela dor pleurítica súbita e dispneia; sai pela ausência de fatores de risco tromboembólico relevantes e pela radiografia confirmando pneumotórax como explicação suficiente do quadro',
        'Síndrome coronariana aguda — entra como diagnóstico a excluir em dor torácica aguda; sai pela idade jovem, ausência de fatores de risco cardiovascular e pelo padrão pleurítico típico da dor, associado à radiografia confirmatória',
        'Pericardite aguda — entra pela dor torácica; sai pela ausência de atrito pericárdico e pela radiografia demonstrando claramente o pneumotórax como causa',
        'Costocondrite/dor musculoesquelética — entra como causa de dor torácica reprodutível à palpação; sai pela associação clara com dispneia e pelo achado radiológico específico'
      ],
      context: 'O pneumotórax espontâneo primário ocorre tipicamente em homens jovens, longilíneos, magros, geralmente tabagistas, por rotura de bolhas subpleurais apicais (blebs), na ausência de doença pulmonar estrutural conhecida. O tabagismo (incluindo cigarro eletrônico) é fator de risco relevante tanto para o primeiro episódio quanto para recorrência.',
      justify: 'O diagnóstico é confirmado pela radiografia de tórax demonstrando linha da pleura visceral sem trama pulmonar periférica a ela, associado ao quadro clínico típico (dor pleurítica súbita em repouso, dispneia, redução do murmúrio vesicular e hipertimpanismo à percussão no hemitórax acometido) em paciente com perfil de risco característico (jovem, longilíneo, tabagista). A ausência de sinais de instabilidade hemodinâmica ou desvio de mediastino afasta pneumotórax hipertensivo, orientando a escolha entre conduta conservadora e drenagem conforme o tamanho.',
      expectedAnamnesis: 'Caracterizar início súbito da dor pleurítica e sua relação com esforço/repouso | Investigar tabagismo (incluindo cigarro eletrônico) | Perguntar sobre trauma torácico recente | Investigar episódios anteriores semelhantes | Perguntar sobre história familiar de pneumotórax ou doenças do tecido conjuntivo | Avaliar impacto funcional da dispneia',
      expectedPhysical: 'Avaliação de sinais vitais e sinais de instabilidade hemodinâmica (buscar ativamente sinais de pneumotórax hipertensivo: hipotensão, turgência jugular, desvio de traqueia) | Inspeção e palpação (expansibilidade reduzida) | Percussão torácica (hipertimpanismo) | Ausculta pulmonar (MV abolido no lado acometido)',
      expectedExams: [
        { exam: 'Radiografia de tórax em inspiração', justify: 'Exame de escolha inicial para confirmar e quantificar o pneumotórax', expected: 'Linha pleural visceral visível, pneumotórax de ~25% à direita' },
        { exam: 'Tomografia de tórax (em casos de dúvida diagnóstica ou avaliação de bolhas subpleurais para planejamento de casos recorrentes)', justify: 'Melhor caracterização de bolhas/blebs, especialmente se recorrência ou dúvida diagnóstica', expected: 'Pode identificar bolhas subpleurais apicais' }
      ],
      expectedConduct: 'Farmacológica: analgesia para a dor pleurítica; oxigenoterapia suplementar (acelera a reabsorção do ar pleural) | Não farmacológica: para pneumotórax pequeno (<2 cm na radiografia ou pequeno volume) e paciente estável, minimamente sintomático — conduta conservadora com observação e O2 suplementar pode ser considerada; para pneumotórax maior (como neste caso, ~25%) ou sintomático — aspiração simples com agulha/cateter ou drenagem torácica em selo d\'água, conforme protocolo institucional e gravidade dos sintomas; se sinais de pneumotórax hipertensivo (não presentes aqui) — descompressão torácica imediata com agulha, emergência absoluta | Orientações ao paciente: explicar a causa provável (rotura de bolha pulmonar), tranquilizando quanto à gravidade quando estável; orientar cessação do tabagismo (incluindo cigarro eletrônico) para reduzir risco de recorrência; orientar evitar viagens aéreas e mergulho até liberação médica; explicar risco de recorrência (até 30% após primeiro episódio) e que casos recorrentes podem exigir pleurodese/tratamento cirúrgico | Seguimento: radiografia de controle antes da alta e em retorno ambulatorial para confirmar resolução',
      expectedCommunication: 'Explicar o diagnóstico de forma clara e tranquilizadora, dado o bom prognóstico geral do primeiro episódio tratado adequadamente | Acolher a ansiedade do paciente em relação a temores cardíacos | Orientar sobre cessação do tabagismo de forma motivacional | Explicar restrições temporárias (viagens aéreas, mergulho) e risco de recorrência de forma clara',
      criticalErrors: [
        'Não avaliar ativamente sinais de pneumotórax hipertensivo (instabilidade hemodinâmica, desvio de traqueia) antes de aguardar exame de imagem',
        'Não solicitar radiografia de tórax diante de suspeita clínica de pneumotórax',
        'Não classificar corretamente o tamanho do pneumotórax para definir conduta (conservadora x drenagem)',
        'Não orientar cessação do tabagismo (incluindo cigarro eletrônico) como medida de prevenção de recorrência',
        'Não orientar sobre restrições temporárias (viagens aéreas, mergulho) e risco de recorrência'
      ]
    },
    instD: {
      title: 'CHECKLIST — DOR TORÁCICA SÚBITA EM JOVEM LONGILÍNEO (PNEUMOTÓRAX)',
      sections: [
        {
          h: 'BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE',
          items: [
            { item: 'Apresentou-se pelo nome ao paciente', score: 0.5, ref: 'CFM Res. 2.232/2019' },
            { item: 'Explicou o diagnóstico de forma tranquilizadora e compreensível', score: 0.5, ref: 'BTS Guidelines — Pleural Disease' }
          ]
        },
        {
          h: 'BLOCO 2 — ANAMNESE',
          items: [
            { item: 'Caracterizou o início súbito da dor pleurítica em repouso', score: 0.5, ref: 'BTS Guidelines — Pleural Disease' },
            { item: 'Investigou tabagismo, incluindo cigarro eletrônico', score: 0.5, ref: 'BTS Guidelines — Pleural Disease' },
            { item: 'Perguntou sobre episódios anteriores e história familiar', score: 0.5, ref: 'BTS Guidelines — Pleural Disease' }
          ]
        },
        {
          h: 'BLOCO 3 — EXAME FÍSICO',
          items: [
            { item: 'Avaliou ativamente sinais de instabilidade hemodinâmica/pneumotórax hipertensivo', score: 1.0, ref: 'BTS Guidelines — Pleural Disease' },
            { item: 'Realizou percussão e ausculta identificando hipertimpanismo e MV abolido à direita', score: 0.5, ref: 'BTS Guidelines — Pleural Disease' }
          ]
        },
        {
          h: 'BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
          items: [
            { item: 'Solicitou radiografia de tórax em inspiração', score: 1.5, ref: 'BTS Guidelines — Pleural Disease' },
            { item: 'Classificou corretamente o tamanho do pneumotórax', score: 1.0, ref: 'BTS Guidelines — Pleural Disease' }
          ]
        },
        {
          h: 'BLOCO 5 — CONDUTA E ORIENTAÇÃO AO PACIENTE',
          items: [
            { item: 'Indicou conduta adequada ao tamanho do pneumotórax (aspiração/drenagem ou observação)', score: 1.0, ref: 'BTS Guidelines — Pleural Disease' },
            { item: 'Orientou cessação do tabagismo/cigarro eletrônico', score: 0.5, ref: 'BTS Guidelines — Pleural Disease' },
            { item: 'Orientou sobre restrição de viagens aéreas/mergulho e risco de recorrência', score: 0.5, ref: 'BTS Guidelines — Pleural Disease' },
            { item: 'Perguntou se o paciente tinha dúvidas ao final da consulta', score: 0.5, ref: 'CFM Res. 2.232/2019' }
          ]
        }
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // CASO 7 — ASMA: CRISE GRAVE NO PRONTO-SOCORRO
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 7,
    title: 'Crise asmática grave com dificuldade para falar',
    sub: 'PS — Pronto-Socorro',
    tema: 'Pneumologia',
    topic: 'Asma — Crise Aguda Grave',
    level: 'difícil',
    cardAccent: '#5B9BD5',
    instA: {
      scenario: 'Pronto-Socorro, turno noturno, paciente trazida por familiares em estado de angústia respiratória.',
      patient: 'F.P.S., 19 anos, feminino, estudante, asma grave conhecida.',
      complaint: 'Falta de ar intensa, iniciada há 1 hora, sem melhora com uso repetido de bombinha em casa.',
      tasks: [
        'Realize a avaliação rápida e reconheça sinais de gravidade/risco de vida.',
        'Realize o exame físico direcionado à gravidade da crise.',
        'Classifique a crise como grave/com risco de vida.',
        'Solicite os exames pertinentes sem atrasar o tratamento.',
        'Conduza o tratamento imediato da crise grave, incluindo critérios de UTI.'
      ]
    },
    instB: {
      vitals: {
        PA: '128/84 mmHg',
        FC: '128 bpm',
        FR: '34 irpm',
        Tax: '36,6 °C',
        Peso: '58 kg',
        Altura: '1,64 m',
        SpO2: '88% em ar ambiente'
      },
      physicalGeneral: 'Mau estado geral, extrema angústia respiratória, incapaz de falar frases completas (fala palavra por palavra), sentada e inclinada para frente, uso intenso de musculatura acessória, sudorese.',
      physicalSeg: 'RESPIRATÓRIO: tórax hiperinsuflado; ausculta com murmúrio vesicular muito reduzido/quase ausente e sibilos discretos ou ausentes ("tórax silencioso" — sinal de gravidade extrema, não de melhora); tempo expiratório muito prolongado | CARDIOVASCULAR: taquicárdica importante | Sem cianose central no momento, mas SpO2 baixa.',
      labs: [
        { test: 'Peak Flow', val: 'Não foi possível realizar — paciente incapaz de cooperar pela gravidade', ref: 'N/A', alt: true },
        { test: 'Gasometria arterial — PaCO2', val: '48 mmHg (normal a discretamente elevado — sinal de exaustão respiratória, não de melhora)', ref: '35–45 mmHg', alt: true },
        { test: 'Gasometria arterial — PaO2', val: '54 mmHg', ref: '80–100 mmHg', alt: true }
      ],
      image: null,
      note: 'Este é um caso de emergência com risco de vida — o "tórax silencioso" (ausência de sibilos) NÃO significa melhora, e sim obstrução tão grave que não há fluxo de ar suficiente para gerar sibilos; a PaCO2 "normal" ou levemente elevada em vigência de taquipneia intensa é sinal de exaustão respiratória iminente (deveria estar baixa pela hiperventilação). Reforçar essas pistas se o candidato interpretar erroneamente os achados como sinais de melhora.',
      patientProfile: 'Estudante, asma grave desde a infância, múltiplas internações prévias, uma delas em UTI com necessidade de ventilação mecânica há 2 anos. Mora com os pais, que a trouxeram muito assustados.',
      script: [
        { trigger: 'Ao ser questionada (fala com extrema dificuldade)', speech: '(palavra por palavra, ofegante) Não... consigo... respirar... doutor(a)...' },
        { trigger: 'Familiar informando (mãe)', speech: 'Doutor(a), ela já usou a bombinha um monte de vezes em casa e não melhorou nada, só foi piorando. Ela já ficou internada na UTI antes por causa disso.' },
        { trigger: 'Familiar sobre evolução', speech: 'Começou há uma hora, do nada, muito forte, nunca vi ela assim tão mal.' },
        { trigger: 'Familiar sobre medicação de manutenção', speech: 'Ela usa remédio todo dia para asma, mas essa semana ela andou meio sem tomar direito, acho.' },
        { trigger: 'Pergunta ativa da família — gravidade', speech: 'Doutor(a), ela vai ficar bem? O que estão fazendo? Ela vai precisar entubar de novo?' }
      ],
      hiddenInfo: 'A paciente está ficando progressivamente mais sonolenta e menos responsiva ao longo da simulação se a conduta demorar a ser definida — sinal de exaustão respiratória grave e iminência de parada respiratória, deve ser percebido pelo candidato através da reavaliação contínua | A família não sabia identificar os sinais de gravidade em casa e demorou a trazer a paciente — informação de contexto que pode ser explorada se o candidato perguntar sobre o tempo entre o início dos sintomas e a busca por atendimento',
      actorBehavior: 'Extrema dificuldade para falar (apenas palavras isoladas, nunca frases), postura inclinada para frente buscando melhor mecânica respiratória, sudorese profusa, olhar de pânico. Piora perceptível (mais lentidão para responder, olhos semicerrados) se a simulação avançar sem conduta imediata — simulando exaustão/iminência de parada respiratória.'
    },
    instC: {
      diagnosis: 'Crise asmática grave com risco de vida iminente (fadiga de musculatura respiratória, tórax silencioso, hipoxemia grave, PaCO2 em elevação inapropriada), indicando necessidade de tratamento intensivo imediato e preparo para via aérea avançada.',
      differentials: [
        'Anafilaxia com broncoespasmo — entra como causa de insuficiência respiratória aguda grave; sai pela ausência de urticária, angioedema ou exposição a alérgeno identificável, e pela história de asma grave conhecida explicando o quadro',
        'Corpo estranho em via aérea — entra em quadro de insuficiência respiratória aguda; menos provável dado o contexto claro de asma grave conhecida com gatilho de má adesão à medicação de manutenção',
        'Pneumotórax — deve sempre ser considerado em asmático grave com piora aguda (risco aumentado por hiperinsuflação); a ausência de assimetria à ausculta (redução bilateral e simétrica) torna a crise asmática grave isolada mais provável neste momento, mas deve permanecer no radar',
        'Insuficiência cardíaca aguda — entra como causa de dispneia grave; menos provável pela idade jovem e ausência de história cardiológica, tornando a crise asmática grave o diagnóstico mais consistente'
      ],
      context: 'Paciente jovem com asma grave conhecida, múltiplas internações prévias incluindo UTI com ventilação mecânica, em crise atual refratária ao tratamento domiciliar com broncodilatador de resgate, associada a má adesão recente à medicação de manutenção. Apresenta sinais clássicos de crise com risco de vida: incapacidade de falar frases, uso intenso de musculatura acessória, SpO2 88%, e — mais grave ainda — "tórax silencioso" e PaCO2 normal/discretamente elevada em vigência de taquipneia intensa, sinais de exaustão da musculatura respiratória e iminência de parada respiratória.',
      justify: 'A classificação de crise com risco de vida (GINA) baseia-se em: incapacidade de falar, sonolência/confusão, tórax silencioso à ausculta, bradicardia ou instabilidade hemodinâmica, e PaCO2 normal ou elevada (que na crise asmática, pela taquipneia intensa, deveria estar baixa por hiperventilação — sua normalização ou elevação indica que o paciente não consegue mais compensar, sinal de exaustão e falência respiratória iminente). Todos esses achados estão presentes nesta paciente, configurando emergência com necessidade de tratamento intensivo agressivo e preparo para possível via aérea avançada.',
      expectedAnamnesis: 'Obter informações rapidamente com o acompanhante, sem atrasar o tratamento | Perguntar sobre uso e resposta ao broncodilatador de resgate em casa | Investigar adesão à medicação de manutenção | Perguntar sobre internações prévias, especialmente em UTI/necessidade de ventilação mecânica (marcador de risco para nova crise fatal) | Investigar tempo de evolução da crise atual',
      expectedPhysical: 'Avaliação IMEDIATA de sinais de gravidade extrema: capacidade de falar, nível de consciência, uso de musculatura acessória, presença ou ausência de sibilos (tórax silencioso) | Sinais vitais completos com SpO2 | Reavaliação contínua e frequente da resposta ao tratamento',
      expectedExams: [
        { exam: 'Gasometria arterial', justify: 'Avaliar PaCO2 como marcador de exaustão respiratória — não deve atrasar o início do tratamento', expected: 'PaCO2 48 mmHg (inapropriadamente normal/elevada para o grau de taquipneia) — sinal de gravidade extrema' },
        { exam: 'Oximetria de pulso contínua', justify: 'Monitorização contínua da resposta ao tratamento', expected: 'SpO2 88%, com necessidade de O2 suplementar imediato' }
      ],
      expectedConduct: 'Farmacológica: O2 suplementar imediato para SpO2 ≥94%; broncodilatador de curta ação inalatório em doses altas e repetidas/contínuas (salbutamol nebulizado contínuo ou spray com espaçador em sequência rápida) associado a brometo de ipratrópio; corticoide sistêmico IV imediato (metilprednisolona ou hidrocortisona); considerar sulfato de magnésio IV como adjuvante em crise grave refratária; considerar adrenalina IM se suspeita de componente anafilático associado | Não farmacológica: monitorização contínua em sala de emergência; preparo antecipado para via aérea avançada (intubação orotraqueal) diante de sinais de exaustão respiratória e/ou rebaixamento do nível de consciência — não aguardar parada respiratória para agir; internação em UTI | Orientações à família: comunicar a gravidade extrema da situação de forma clara e direta, explicando as medidas de emergência sendo tomadas; após estabilização, reforçar a importância crítica da adesão à medicação de manutenção para prevenir novas crises fatais | Seguimento: reavaliação de esquema de manutenção antes da alta, com plano de ação por escrito',
      expectedCommunication: 'Agir com extrema agilidade, reconhecendo a emergência com risco de vida | Comunicar-se com a família de forma clara sobre a gravidade e as medidas tomadas | Não perder tempo com anamnese extensa antes de iniciar tratamento — priorizar ação imediata | Reavaliar constantemente e comunicar mudanças no quadro',
      criticalErrors: [
        'Interpretar o "tórax silencioso" (ausência de sibilos) como sinal de melhora, quando na verdade indica gravidade extrema',
        'Não reconhecer a PaCO2 normal/elevada como sinal de exaustão respiratória em paciente taquipneico grave',
        'Atrasar o início do tratamento para completar anamnese extensa ou aguardar exames complementares',
        'Não considerar/preparar via aérea avançada diante de sinais de exaustão respiratória ou rebaixamento do nível de consciência',
        'Não iniciar corticoide sistêmico imediatamente diante de crise grave com risco de vida'
      ]
    },
    instD: {
      title: 'CHECKLIST — CRISE ASMÁTICA GRAVE COM DIFICULDADE PARA FALAR',
      sections: [
        {
          h: 'BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE',
          items: [
            { item: 'Agiu com agilidade compatível com emergência de risco de vida', score: 1.0, ref: 'GINA 2024' },
            { item: 'Comunicou-se com a família de forma clara sobre a gravidade', score: 0.5, ref: 'CFM Res. 2.232/2019' }
          ]
        },
        {
          h: 'BLOCO 2 — ANAMNESE (RÁPIDA, SEM ATRASAR TRATAMENTO)',
          items: [
            { item: 'Obteve informações essenciais com o acompanhante sem atrasar a conduta', score: 0.5, ref: 'GINA 2024' },
            { item: 'Perguntou sobre internações prévias em UTI/ventilação mecânica (marcador de risco de crise fatal)', score: 1.0, ref: 'GINA 2024' }
          ]
        },
        {
          h: 'BLOCO 3 — EXAME FÍSICO',
          items: [
            { item: 'Identificou a incapacidade de falar frases como sinal de gravidade', score: 0.5, ref: 'GINA 2024' },
            { item: 'Reconheceu o "tórax silencioso" como sinal de gravidade extrema (não de melhora)', score: 1.5, ref: 'GINA 2024' }
          ]
        },
        {
          h: 'BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
          items: [
            { item: 'Solicitou gasometria arterial sem atrasar o tratamento', score: 0.5, ref: 'GINA 2024' },
            { item: 'Reconheceu a PaCO2 normal/elevada como sinal de exaustão respiratória', score: 1.5, ref: 'GINA 2024' }
          ]
        },
        {
          h: 'BLOCO 5 — CONDUTA E ORIENTAÇÃO',
          items: [
            { item: 'Iniciou O2, broncodilatador em altas doses e corticoide sistêmico imediatamente', score: 1.5, ref: 'GINA 2024' },
            { item: 'Considerou/preparou via aérea avançada diante de sinais de exaustão', score: 1.0, ref: 'GINA 2024' }
          ]
        }
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // CASO 8 — SÍNDROME DA APNEIA OBSTRUTIVA DO SONO (SAOS)
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 8,
    title: 'Sonolência diurna excessiva e ronco alto há anos',
    sub: 'Ambulatório — Pneumologia',
    tema: 'Pneumologia',
    topic: 'Síndrome da Apneia Obstrutiva do Sono',
    level: 'moderado',
    cardAccent: '#5B9BD5',
    instA: {
      scenario: 'Consulta ambulatorial de pneumologia, encaminhado pela esposa preocupada.',
      patient: 'R.M.O., 47 anos, masculino, motorista de ônibus interestadual, obeso.',
      complaint: 'Sonolência diurna excessiva e ronco muito alto há vários anos, com piora recente.',
      tasks: [
        'Realize a anamnese dirigida, incluindo questionário de rastreio (STOP-BANG).',
        'Realize o exame físico pertinente.',
        'Formule a hipótese diagnóstica.',
        'Solicite o exame confirmatório adequado.',
        'Proponha o tratamento e discuta a segurança ocupacional (motorista profissional).'
      ]
    },
    instB: {
      vitals: {
        PA: '148/94 mmHg',
        FC: '82 bpm',
        FR: '16 irpm',
        Tax: '36,4 °C',
        Peso: '104 kg',
        Altura: '1,72 m',
        IMC: '35,2 kg/m²'
      },
      physicalGeneral: 'Bom estado geral, obesidade grau II, pescoço curto e largo, sonolento durante a consulta (bocejando repetidamente).',
      physicalSeg: 'OROFARINGE: Mallampati classe III-IV, palato mole alongado, úvula volumosa, retrognatia leve | PESCOÇO: circunferência cervical de 46 cm | CARDIOVASCULAR: bulhas rítmicas, sem sopros | Sem edema de MMII.',
      labs: [
        { test: 'TSH', val: '2,8 mUI/L', ref: '0,4–4,0 mUI/L', alt: false },
        { test: 'Glicemia de jejum', val: '112 mg/dL', ref: '70–99 mg/dL', alt: true },
        { test: 'Hemoglobina glicada', val: '6,1%', ref: '< 5,7%', alt: true }
      ],
      image: 'Polissonografia (exame solicitado e realizado após a consulta inicial): índice de apneia-hipopneia (IAH) de 42 eventos/hora, predominantemente obstrutivos; dessaturações de O2 com nadir de 78%; arquitetura do sono fragmentada, com redução do sono de ondas lentas e REM.',
      note: 'A polissonografia é o exame padrão-ouro e deve ser solicitada — o resultado (IAH 42, grave) só deve ser entregue em consulta de retorno, simulando o tempo real do exame. Na consulta inicial, o candidato deve reconhecer a alta probabilidade clínica pelo STOP-BANG e encaminhar para o exame.',
      patientProfile: 'Motorista de ônibus interestadual, trabalho que exige atenção prolongada e é regulamentado quanto à aptidão física/psicológica. Casado, esposa relata que ele "para de respirar" durante o sono várias vezes por noite, o que a preocupa muito.',
      script: [
        { trigger: 'Queixa principal', speech: 'Doutor(a), minha esposa insistiu para eu vir, ela diz que eu ronco muito alto e às vezes paro de respirar dormindo. E eu ando com muito sono de dia.' },
        { trigger: 'Sobre sonolência diurna', speech: 'Sinto muito sono durante o dia, às vezes até cochilo sem querer parado no trânsito, o que me preocupa pelo meu trabalho.' },
        { trigger: 'Sobre o ronco', speech: 'Minha esposa fala que eu ronco muito alto, dá para ouvir em outro cômodo da casa.' },
        { trigger: 'Sobre pausas respiratórias', speech: 'Ela diz que às vezes eu fico quieto de repente, sem respirar, e depois solto um ronco bem forte e volto a respirar.' },
        { trigger: 'Sobre cansaço matinal', speech: 'Acordo com a boca seca e uma dor de cabeça leve, e mesmo dormindo bastante, não sinto que descansei.' },
        { trigger: 'Sobre trabalho', speech: 'Sou motorista de ônibus, faço viagens longas, e confesso que às vezes luto para não cochilar no volante.' },
        { trigger: 'Pergunta ativa — diagnóstico', speech: 'Doutor(a), o que eu tenho? Isso é perigoso? Posso perder minha carteira de motorista profissional?' }
      ],
      hiddenInfo: 'Já cochilou ao volante por alguns segundos em pelo menos duas ocasiões nos últimos meses, o que nunca contou a ninguém por medo de perder o emprego — só revela se perguntado diretamente e de forma não punitiva sobre episódios de sonolência ao dirigir | Tem hipertensão arterial diagnosticada há 2 anos, mal controlada apesar de medicação, o que pode estar relacionado à SAOS não tratada — só revela se perguntado sobre comorbidades | Está com medo de que o diagnóstico o impeça de continuar trabalhando como motorista — verbaliza esse medo se o candidato tocar no tema ocupacional',
      actorBehavior: 'Demonstrar sonolência real durante a consulta (bocejar, esfregar os olhos). Preocupado e um pouco defensivo ao ser questionado sobre cochilos ao volante, por medo de julgamento/perda do emprego — mais aberto se abordado sem julgamento.'
    },
    instC: {
      diagnosis: 'Síndrome da Apneia Obstrutiva do Sono (SAOS) grave (IAH 42/hora), em paciente obeso com alta probabilidade clínica pré-teste (STOP-BANG elevado), com risco ocupacional relevante por ser motorista profissional.',
      differentials: [
        'Narcolepsia — entra como causa de sonolência diurna excessiva; sai pela presença de ronco alto, pausas respiratórias testemunhadas pela esposa e fatores de risco anatômicos claros (obesidade, pescoço curto, Mallampati elevado), mais compatíveis com SAOS',
        'Hipotireoidismo — entra como causa de fadiga/sonolência; excluído pelo TSH normal',
        'Síndrome das pernas inquietas/distúrbio do movimento periódico de membros — entra como causa de sono fragmentado; menos provável dado o quadro clássico de ronco e apneias testemunhadas, embora possa coexistir e ser avaliado na polissonografia',
        'Privação crônica de sono por causas comportamentais/ocupacionais — entra como possibilidade; a presença de pausas respiratórias testemunhadas e os achados anatômicos de via aérea superior tornam a SAOS a explicação mais provável e completa do quadro'
      ],
      context: 'A SAOS é uma condição comum e subdiagnosticada, especialmente prevalente em homens obesos de meia-idade, caracterizada por colapsos recorrentes da via aérea superior durante o sono, causando dessaturações intermitentes e fragmentação do sono. Associa-se fortemente a hipertensão arterial (frequentemente resistente ao tratamento), risco cardiovascular aumentado, diabetes tipo 2 e, criticamente neste caso, risco de acidentes por sonolência ao volante — de particular relevância em motorista profissional.',
      justify: 'A alta probabilidade pré-teste é sustentada pelo escore STOP-BANG elevado (Snoring/ronco alto, Tiredness/sonolência diurna, Observed apnea/pausas testemunhadas, Pressure/hipertensão, BMI>35, Age>50 [não neste caso], Neck circumference>40cm, Gender masculino — múltiplos critérios presentes), confirmada pela polissonografia com IAH de 42 eventos/hora (classificação: leve 5-15, moderada 15-30, grave >30), caracterizando SAOS grave, corroborada pelos achados anatômicos de via aérea superior (Mallampati III-IV, retrognatia, circunferência cervical aumentada).',
      expectedAnamnesis: 'Aplicar ou considerar o questionário STOP-BANG (ronco, cansaço, apneia testemunhada, hipertensão, IMC, idade, circunferência cervical, sexo) | Investigar sonolência diurna e seu impacto funcional/ocupacional | Perguntar ativamente e sem julgamento sobre episódios de sonolência ao dirigir (risco de acidente) | Investigar cefaleia matinal e sensação de sono não reparador | Perguntar sobre comorbidades associadas (hipertensão, diabetes)',
      expectedPhysical: 'Aferição de PA e IMC | Avaliação da via aérea superior (classificação de Mallampati, retrognatia) | Medida da circunferência cervical | Observação de sonolência durante a própria consulta',
      expectedExams: [
        { exam: 'Polissonografia (padrão-ouro) ou poligrafia domiciliar (alternativa em casos selecionados)', justify: 'Confirmar o diagnóstico e quantificar a gravidade pelo índice de apneia-hipopneia (IAH)', expected: 'IAH 42/hora — SAOS grave' },
        { exam: 'Glicemia de jejum/HbA1c e perfil lipídico', justify: 'Rastrear comorbidades metabólicas frequentemente associadas à SAOS', expected: 'Pré-diabetes identificado neste caso' }
      ],
      expectedConduct: 'Farmacológica: não há tratamento farmacológico de primeira linha para SAOS — o foco é em dispositivos e medidas comportamentais | Não farmacológica: CPAP (pressão positiva contínua em via aérea) é o tratamento de primeira linha para SAOS moderada-grave, com alta eficácia em reduzir eventos respiratórios e sonolência; perda de peso estruturada (dado o IMC elevado); posicionamento (evitar decúbito dorsal, quando aplicável); considerar aparelhos orais ou avaliação cirúrgica em casos selecionados quando CPAP não tolerado | Orientações ao paciente: explicar claramente o risco de acidentes por sonolência ao volante, abordando a questão ocupacional com responsabilidade — orientar afastamento temporário de direção até controle adequado do quadro, conforme normas de aptidão para motoristas profissionais (CONTRAN), e reforçar que o tratamento eficaz (CPAP) permite retomar a atividade com segurança; explicar a relação entre SAOS não tratada e hipertensão/risco cardiovascular | Seguimento: reavaliação da adesão e eficácia do CPAP, controle de comorbidades metabólicas',
      expectedCommunication: 'Abordar os episódios de sonolência ao volante sem julgamento, criando espaço de confiança para o paciente revelar essa informação de risco | Explicar a relação entre SAOS, hipertensão e risco cardiovascular de forma acessível | Comunicar a questão da aptidão para dirigir com responsabilidade e sem alarmismo, oferecendo perspectiva de retorno seguro ao trabalho com tratamento adequado | Verificar compreensão e adesão esperada ao CPAP',
      criticalErrors: [
        'Não investigar ativamente sonolência ao volante em motorista profissional, ignorando risco de acidente grave',
        'Não aplicar/considerar o STOP-BANG ou outro rastreio estruturado para SAOS',
        'Não solicitar polissonografia como exame confirmatório',
        'Não orientar sobre a necessidade de afastamento temporário de direção até controle adequado do quadro',
        'Não indicar CPAP como tratamento de primeira linha para SAOS grave'
      ]
    },
    instD: {
      title: 'CHECKLIST — SONOLÊNCIA DIURNA E RONCO ALTO (SAOS)',
      sections: [
        {
          h: 'BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE',
          items: [
            { item: 'Apresentou-se pelo nome ao paciente', score: 0.5, ref: 'CFM Res. 2.232/2019' },
            { item: 'Abordou a sonolência ao volante sem julgamento, de forma acolhedora', score: 0.5, ref: 'CFM Res. 2.232/2019' }
          ]
        },
        {
          h: 'BLOCO 2 — ANAMNESE',
          items: [
            { item: 'Aplicou ou considerou o questionário STOP-BANG', score: 1.0, ref: 'Diretrizes de SAOS — AASM' },
            { item: 'Investigou ativamente sonolência/cochilos ao dirigir', score: 1.0, ref: 'Diretrizes de SAOS — AASM' },
            { item: 'Perguntou sobre comorbidades associadas (hipertensão, diabetes)', score: 0.5, ref: 'Diretrizes de SAOS — AASM' }
          ]
        },
        {
          h: 'BLOCO 3 — EXAME FÍSICO',
          items: [
            { item: 'Avaliou via aérea superior (Mallampati) e circunferência cervical', score: 0.5, ref: 'Diretrizes de SAOS — AASM' },
            { item: 'Aferiu PA e calculou IMC', score: 0.5, ref: 'Diretrizes de SAOS — AASM' }
          ]
        },
        {
          h: 'BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
          items: [
            { item: 'Solicitou polissonografia como exame confirmatório', score: 1.5, ref: 'Diretrizes de SAOS — AASM' }
          ]
        },
        {
          h: 'BLOCO 5 — CONDUTA E ORIENTAÇÃO AO PACIENTE',
          items: [
            { item: 'Indicou CPAP como tratamento de primeira linha', score: 1.0, ref: 'Diretrizes de SAOS — AASM' },
            { item: 'Orientou sobre afastamento temporário de direção até controle do quadro', score: 1.0, ref: 'CONTRAN — normas de aptidão para motoristas' },
            { item: 'Orientou sobre perda de peso estruturada', score: 0.5, ref: 'Diretrizes de SAOS — AASM' },
            { item: 'Perguntou se o paciente tinha dúvidas ao final da consulta', score: 0.5, ref: 'CFM Res. 2.232/2019' }
          ]
        }
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // CASO 9 — DOENÇA PULMONAR INTERSTICIAL / FIBROSE PULMONAR IDIOPÁTICA
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 9,
    title: 'Tosse seca e falta de ar progressiva há 1 ano em idoso',
    sub: 'Ambulatório — Pneumologia',
    tema: 'Pneumologia',
    topic: 'Doença Pulmonar Intersticial — Fibrose Pulmonar Idiopática',
    level: 'difícil',
    cardAccent: '#5B9BD5',
    instA: {
      scenario: 'Consulta ambulatorial de pneumologia, encaminhado da UBS por dispneia progressiva.',
      patient: 'O.B.F., 70 anos, masculino, ex-tabagista, aposentado (ex-marceneiro).',
      complaint: 'Tosse seca persistente e falta de ar progressiva aos esforços há cerca de 1 ano.',
      tasks: [
        'Realize a anamnese dirigida, incluindo exposições ambientais/ocupacionais.',
        'Realize o exame físico pulmonar dirigido.',
        'Formule a hipótese diagnóstica e os diferenciais de doença intersticial.',
        'Solicite os exames complementares adequados.',
        'Proponha a conduta terapêutica e o encaminhamento adequado.'
      ]
    },
    instB: {
      vitals: {
        PA: '134/82 mmHg',
        FC: '92 bpm',
        FR: '22 irpm',
        Tax: '36,4 °C',
        Peso: '74 kg',
        Altura: '1,71 m',
        SpO2: '91% em repouso, 84% após caminhada de 6 minutos no consultório'
      },
      physicalGeneral: 'Bom estado geral, dispneico a esforços moderados, sem cianose em repouso.',
      physicalSeg: 'RESPIRATÓRIO: expansibilidade reduzida bilateral; ausculta com estertores crepitantes finos ("em velcro") em bases pulmonares bilateralmente, mais evidentes ao final da inspiração | EXTREMIDADES: baqueteamento digital presente em mãos | CARDIOVASCULAR: bulhas rítmicas, sem sopros, sem sinais de cor pulmonale no momento.',
      labs: [
        { test: 'FAN (Fator antinuclear)', val: 'Não reagente', ref: 'Não reagente', alt: false },
        { test: 'Fator reumatoide e anti-CCP', val: 'Não reagentes', ref: 'Não reagentes', alt: false },
        { test: 'Espirometria — CVF (% do previsto)', val: '64% do previsto', ref: '≥ 80% do previsto', alt: true },
        { test: 'Espirometria — relação VEF1/CVF', val: '0,85 (padrão restritivo, relação preservada ou aumentada)', ref: 'Padrão restritivo: CVF reduzida com relação normal/aumentada', alt: true },
        { test: 'DLCO (capacidade de difusão)', val: '48% do previsto', ref: '≥ 80% do previsto', alt: true }
      ],
      image: 'Tomografia de tórax de alta resolução (TCAR): opacidades reticulares subpleurais e basais bilaterais, associadas a faveolamento (honeycombing) e bronquiectasias de tração, sem vidro fosco predominante, sem outros achados atípicos — padrão radiológico compatível com Pneumonia Intersticial Usual (UIP), típico de Fibrose Pulmonar Idiopática.',
      note: 'A TCAR é o exame central para o diagnóstico e deve ser solicitada — o padrão UIP típico descrito permite diagnóstico de FPI sem necessidade obrigatória de biópsia pulmonar quando o contexto clínico é compatível (idade, ausência de causa secundária identificada). Reforçar que a investigação de causas secundárias (autoimune, exposicional) deve ser feita antes de assumir a forma idiopática.',
      patientProfile: 'Aposentado, ex-marceneiro (exposição prolongada a poeira de madeira), ex-tabagista (parou há 10 anos, carga tabágica prévia de 20 anos-maço). Nega uso de amiodarona, metotrexato ou outros medicamentos associados a pneumopatia induzida por drogas.',
      script: [
        { trigger: 'Queixa principal', speech: 'Doutor(a), tenho uma tosse seca que não passa há quase um ano, e a falta de ar foi piorando aos poucos, hoje mal consigo fazer as coisas de casa.' },
        { trigger: 'Sobre a tosse', speech: 'É uma tosse seca, sem catarro nenhum, incomoda bastante, principalmente à noite.' },
        { trigger: 'Sobre exposição ocupacional', speech: 'Trabalhei como marceneiro a vida toda, uns 35 anos, sempre com bastante serragem no ar, nunca usei máscara direito.' },
        { trigger: 'Sobre sintomas articulares/pele', speech: 'Não tenho dor nas juntas, nem mancha na pele, nada assim.' },
        { trigger: 'Sobre uso de medicamentos', speech: 'Não tomo remédio contínuo nenhum, só um para pressão às vezes.' },
        { trigger: 'Sobre tabagismo', speech: 'Fumei muitos anos, parei há uns 10 anos.' },
        { trigger: 'Pergunta ativa — diagnóstico', speech: 'Doutor(a), o que eu tenho? Isso tem cura? Vou precisar de oxigênio?' }
      ],
      hiddenInfo: 'Tem um pássaro (periquito) em casa há vários anos, criação que pode estar associada a pneumonite de hipersensibilidade — só revela se perguntado especificamente sobre criação de aves em casa, informação relevante para diferencial | Notou que os dedos das mãos mudaram de formato nos últimos meses (baqueteamento), mas não deu importância — só revela se perguntado sobre alterações nas unhas/dedos | Está com medo de precisar de transplante pulmonar, pois leu sobre isso na internet — verbaliza esse medo se o candidato explorar expectativas sobre o tratamento',
      actorBehavior: 'Fala com esforço respiratório perceptível ao final de frases mais longas. Preocupado e um pouco assustado com a progressão dos sintomas nos últimos meses. Colaborativo ao fornecer informações quando perguntado diretamente.'
    },
    instC: {
      diagnosis: 'Fibrose Pulmonar Idiopática (FPI), com padrão radiológico de Pneumonia Intersticial Usual (UIP) típico à TCAR, após exclusão inicial de causas secundárias (autoimune negativa).',
      differentials: [
        'Pneumonite de hipersensibilidade crônica — entra pela possível exposição a antígenos aviários (periquito em casa); deve ser ativamente investigada e diferenciada pelo padrão de imagem (a pneumonite de hipersensibilidade tipicamente mostra também vidro fosco e distribuição menos basal/subpleural que o padrão UIP puro descrito), sendo diferencial importante que impacta diretamente o tratamento (remoção do agente causal)',
        'Doença pulmonar intersticial associada a doença do tecido conjuntivo — entra pela idade e padrão restritivo; sai pela ausência de sintomas articulares, cutâneos e sorologia autoimune (FAN, FR, anti-CCP) negativa neste momento',
        'Pneumoconiose (exposição a poeira de madeira/silicose) — entra pela exposição ocupacional prolongada relatada; deve ser considerada no diagnóstico diferencial e investigada, embora o padrão radiológico descrito (UIP típico) seja mais consistente com FPI',
        'DPOC com componente restritivo associado — sai pela relação VEF1/CVF preservada/aumentada (padrão restritivo puro, não obstrutivo) e pelo padrão radiológico intersticial característico'
      ],
      context: 'A Fibrose Pulmonar Idiopática é a forma mais comum e mais grave das pneumonias intersticiais idiopáticas, tipicamente acometendo homens acima de 60 anos, com tosse seca e dispneia progressiva, estertores em velcro nas bases e baqueteamento digital ao exame físico, evoluindo com padrão restritivo e redução da DLCO na espirometria. O diagnóstico exige exclusão sistemática de causas secundárias identificáveis (doenças do tecido conjuntivo, exposições ambientais/ocupacionais, medicamentos) antes de ser considerada idiopática.',
      justify: 'O quadro clínico típico (idade, tosse seca crônica, dispneia progressiva, estertores em velcro basais, baqueteamento digital) associado ao padrão espirométrico restritivo com DLCO muito reduzida e à TCAR demonstrando padrão UIP típico (reticulado subpleural/basal com faveolamento, sem vidro fosco predominante), após triagem sorológica negativa para doenças autoimunes, é suficiente para o diagnóstico de FPI sem necessidade obrigatória de biópsia pulmonar cirúrgica, conforme diretrizes atuais (ATS/ERS/JRS/ALAT).',
      expectedAnamnesis: 'Caracterizar tosse (seca x produtiva) e dispneia (progressão, impacto funcional) | Investigar exposições ocupacionais e ambientais (poeiras orgânicas/inorgânicas, aves, mofo) | Investigar sintomas de doenças do tecido conjuntivo (artralgia, rash, fenômeno de Raynaud, disfagia) | Perguntar sobre uso de medicamentos associados a toxicidade pulmonar (amiodarona, metotrexato, nitrofurantoína) | Quantificar tabagismo',
      expectedPhysical: 'Ausculta pulmonar cuidadosa buscando estertores em velcro nas bases | Inspeção de mãos buscando baqueteamento digital | Pesquisa de sinais cutâneos/articulares de doença do tecido conjuntivo | Teste de caminhada de 6 minutos com oximetria (avaliar dessaturação ao esforço)',
      expectedExams: [
        { exam: 'Tomografia de tórax de alta resolução (TCAR)', justify: 'Exame central para caracterizar o padrão de doença intersticial (UIP x outros padrões)', expected: 'Padrão UIP típico — reticulado subpleural/basal com faveolamento' },
        { exam: 'Espirometria completa com DLCO', justify: 'Confirmar padrão restritivo e quantificar comprometimento da troca gasosa', expected: 'CVF reduzida, relação VEF1/CVF preservada, DLCO muito reduzida' },
        { exam: 'Triagem sorológica para doenças do tecido conjuntivo (FAN, FR, anti-CCP e outros conforme suspeita clínica)', justify: 'Excluir causa secundária autoimune antes de considerar forma idiopática', expected: 'Não reagentes neste caso' },
        { exam: 'Teste de caminhada de 6 minutos com oximetria', justify: 'Avaliar dessaturação ao esforço, relevante para indicação de oxigenoterapia e prognóstico', expected: 'Dessaturação significativa (84%) — indica necessidade de O2 suplementar ao esforço' }
      ],
      expectedConduct: 'Farmacológica: antifibrótico (pirfenidona ou nintedanibe) — tratamento específico que reduz a velocidade de declínio da função pulmonar em FPI, indicado assim que o diagnóstico é confirmado; oxigenoterapia suplementar para dessaturação ao esforço/repouso conforme critérios | Não farmacológica: encaminhamento para programa de reabilitação pulmonar; avaliação para transplante pulmonar em candidatos elegíveis, especialmente diante de doença progressiva; vacinação atualizada (influenza, pneumocócica) | Orientações ao paciente: explicar a natureza progressiva e sem cura definitiva da doença (exceto transplante), mas que o tratamento antifibrótico pode retardar a progressão; esclarecer sobre necessidade de O2 suplementar ao esforço; discutir encaminhamento para avaliação de transplante pulmonar de forma realista, sem alarmismo nem falsas esperanças | Seguimento: acompanhamento seriado com espirometria e DLCO para monitorar progressão',
      expectedCommunication: 'Explicar o diagnóstico de forma clara, reconhecendo a gravidade sem gerar desespero desnecessário | Esclarecer as opções terapêuticas disponíveis (antifibróticos, reabilitação, transplante) de forma realista | Acolher o medo do paciente relacionado à possibilidade de transplante | Verificar compreensão do plano de acompanhamento',
      criticalErrors: [
        'Não investigar exposições ocupacionais/ambientais e sintomas de doença do tecido conjuntivo antes de considerar a forma idiopática',
        'Não solicitar TCAR como exame central para caracterização do padrão de doença intersticial',
        'Não solicitar triagem sorológica autoimune para excluir causa secundária',
        'Não indicar tratamento antifibrótico específico diante do diagnóstico confirmado de FPI',
        'Não avaliar dessaturação ao esforço (teste de caminhada) nem considerar necessidade de oxigenoterapia'
      ]
    },
    instD: {
      title: 'CHECKLIST — TOSSE SECA E DISPNEIA PROGRESSIVA EM IDOSO (FPI)',
      sections: [
        {
          h: 'BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE',
          items: [
            { item: 'Apresentou-se pelo nome ao paciente', score: 0.5, ref: 'CFM Res. 2.232/2019' },
            { item: 'Explicou o diagnóstico de forma clara, sem gerar desespero desnecessário', score: 0.5, ref: 'ATS/ERS/JRS/ALAT Guidelines — FPI' }
          ]
        },
        {
          h: 'BLOCO 2 — ANAMNESE',
          items: [
            { item: 'Investigou exposições ocupacionais/ambientais (poeira de madeira, aves)', score: 1.0, ref: 'ATS/ERS/JRS/ALAT Guidelines — FPI' },
            { item: 'Investigou sintomas de doença do tecido conjuntivo', score: 0.5, ref: 'ATS/ERS/JRS/ALAT Guidelines — FPI' },
            { item: 'Perguntou sobre uso de medicamentos associados a toxicidade pulmonar', score: 0.5, ref: 'ATS/ERS/JRS/ALAT Guidelines — FPI' }
          ]
        },
        {
          h: 'BLOCO 3 — EXAME FÍSICO',
          items: [
            { item: 'Identificou estertores em velcro nas bases pulmonares', score: 0.5, ref: 'ATS/ERS/JRS/ALAT Guidelines — FPI' },
            { item: 'Identificou baqueteamento digital', score: 0.5, ref: 'ATS/ERS/JRS/ALAT Guidelines — FPI' }
          ]
        },
        {
          h: 'BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
          items: [
            { item: 'Solicitou TCAR de tórax', score: 1.5, ref: 'ATS/ERS/JRS/ALAT Guidelines — FPI' },
            { item: 'Solicitou espirometria com DLCO', score: 0.5, ref: 'ATS/ERS/JRS/ALAT Guidelines — FPI' },
            { item: 'Solicitou triagem sorológica autoimune antes de firmar diagnóstico idiopático', score: 1.0, ref: 'ATS/ERS/JRS/ALAT Guidelines — FPI' }
          ]
        },
        {
          h: 'BLOCO 5 — CONDUTA E ORIENTAÇÃO AO PACIENTE',
          items: [
            { item: 'Indicou tratamento antifibrótico específico', score: 1.5, ref: 'ATS/ERS/JRS/ALAT Guidelines — FPI' },
            { item: 'Considerou oxigenoterapia e reabilitação pulmonar', score: 0.5, ref: 'ATS/ERS/JRS/ALAT Guidelines — FPI' },
            { item: 'Perguntou se o paciente tinha dúvidas ao final da consulta', score: 0.5, ref: 'CFM Res. 2.232/2019' }
          ]
        }
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // CASO 10 — BRONQUIECTASIAS
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 10,
    title: 'Tosse produtiva diária com grande quantidade de escarro há anos',
    sub: 'Ambulatório — Pneumologia',
    tema: 'Pneumologia',
    topic: 'Bronquiectasias',
    level: 'moderado',
    cardAccent: '#5B9BD5',
    instA: {
      scenario: 'Consulta ambulatorial de pneumologia, paciente com queixa respiratória crônica.',
      patient: 'M.T.S., 44 anos, feminino, professora, não tabagista.',
      complaint: 'Tosse produtiva diária com grande quantidade de escarro, há vários anos, com episódios recorrentes de infecção respiratória.',
      tasks: [
        'Realize a anamnese dirigida, investigando a causa de base.',
        'Realize o exame físico pulmonar dirigido.',
        'Formule a hipótese diagnóstica e os diferenciais.',
        'Solicite os exames complementares para diagnóstico e investigação etiológica.',
        'Proponha o tratamento de manutenção e das exacerbações.'
      ]
    },
    instB: {
      vitals: {
        PA: '116/74 mmHg',
        FC: '84 bpm',
        FR: '18 irpm',
        Tax: '36,5 °C',
        Peso: '58 kg',
        Altura: '1,64 m',
        SpO2: '95%'
      },
      physicalGeneral: 'Bom estado geral, corada, hidratada, sem sinais de toxemia no momento.',
      physicalSeg: 'RESPIRATÓRIO: ausculta com estertores crepitantes grossos e roncos em bases pulmonares bilateralmente, que se modificam após a tosse | EXTREMIDADES: baqueteamento digital discreto | Sem sinusite ativa no momento do exame, mas relata episódios recorrentes.',
      labs: [
        { test: 'Escarro — cultura', val: 'Positiva para Pseudomonas aeruginosa', ref: 'Ausência de crescimento de patógenos', alt: true },
        { test: 'Dosagem de imunoglobulinas (IgG, IgA, IgM)', val: 'Dentro da normalidade', ref: 'Normal', alt: false },
        { test: 'Teste do suor (cloro)', val: 'Negativo (34 mmol/L)', ref: '< 40 mmol/L = negativo', alt: false },
        { test: 'Alfa-1 antitripsina', val: 'Dentro da normalidade', ref: 'Normal', alt: false }
      ],
      image: 'Tomografia de tórax de alta resolução: dilatações brônquicas com espessamento de parede em lobos inferiores bilateralmente (sinal do anel de sinete), perda da afilamento brônquico normal, algumas com impactação mucoide — padrão compatível com bronquiectasias difusas de predomínio basal.',
      note: 'A TCAR é o exame confirmatório essencial. Os exames de investigação etiológica (imunoglobulinas, teste do suor, alfa-1 antitripsina) devem ser solicitados na tentativa de identificar causa tratável — reforçar essa investigação mesmo que os resultados retornem normais neste caso (uma parcela significativa dos casos permanece idiopática mesmo após investigação completa).',
      patientProfile: 'Professora, não tabagista, refere pneumonias de repetição desde a infância (pelo menos 4 episódios diagnosticados), sem investigação etiológica aprofundada até o momento. Refere piora importante da qualidade de vida pela tosse constante e necessidade frequente de antibióticos.',
      script: [
        { trigger: 'Queixa principal', speech: 'Doutor(a), tenho uma tosse com muito catarro praticamente todos os dias, há anos, e de vez em quando tenho crises piores que precisam de antibiótico.' },
        { trigger: 'Sobre o escarro', speech: 'É bastante quantidade, às vezes esverdeado, principalmente de manhã quando levanto.' },
        { trigger: 'Sobre infecções na infância', speech: 'Desde criança eu tinha muita pneumonia, já tive uns 4 episódios que me lembre, minha mãe sempre falava que eu era "fraca dos pulmões".' },
        { trigger: 'Sobre sinusite', speech: 'Tenho sinusite direto também, sempre com nariz entupido e dor de cabeça.' },
        { trigger: 'Sobre hemoptise', speech: 'Às vezes sai um pouquinho de sangue misturado no catarro, principalmente nas crises piores.' },
        { trigger: 'Sobre tabagismo', speech: 'Nunca fumei, doutor(a).' },
        { trigger: 'Pergunta ativa — diagnóstico', speech: 'Doutor(a), por que eu tenho isso desde criança? Isso tem cura?' }
      ],
      hiddenInfo: 'Teve engasgos frequentes com alimentos quando bebê, segundo relatos da mãe, o que pode sugerir aspiração recorrente como fator contribuinte — só revela se perguntada sobre história de aspiração/engasgos na infância | Tem infertilidade não investigada, tentando engravidar sem sucesso há 2 anos, o que pode sugerir associação com discinesia ciliar primária (que cursa com infertilidade) — só revela se perguntada sobre saúde reprodutiva | Nunca fez investigação genética ou imunológica aprofundada para as infecções de repetição da infância — só revela se perguntada sobre investigações prévias',
      actorBehavior: 'Frustrada com os sintomas crônicos e a falta de investigação prévia adequada. Tosse audível ocasional durante a simulação. Interessada em entender a causa de base de sua condição, faz perguntas específicas sobre isso.'
    },
    instC: {
      diagnosis: 'Bronquiectasias difusas (predomínio basal), com infecção crônica de via aérea por Pseudomonas aeruginosa, de etiologia a esclarecer (investigação inicial para fibrose cística e imunodeficiência negativas; considerar discinesia ciliar primária e aspiração recorrente na infância como possíveis contribuintes).',
      differentials: [
        'DPOC — entra pela tosse produtiva crônica; sai pela paciente não tabagista e pelo padrão radiológico específico de dilatação brônquica com espessamento de parede, não hiperinsuflação obstrutiva',
        'Fibrose cística — entra como causa importante de bronquiectasias, especialmente com início na infância; sai pelo teste do suor negativo, embora formas atípicas/tardias devam permanecer no radar em casos com alta suspeita clínica',
        'Discinesia ciliar primária — entra pela história de infecções respiratórias desde a infância associada a possível infertilidade; permanece diferencial relevante a ser investigado com exames específicos (óxido nítrico nasal, biópsia ciliar) diante da forte suspeita clínica',
        'Tuberculose pulmonar prévia como causa de bronquiectasias sequelares — entra como causa comum de bronquiectasias localizadas; menos provável no padrão difuso bilateral descrito, mas deve ser questionada na história'
      ],
      context: 'Bronquiectasias são dilatações brônquicas irreversíveis, resultantes de ciclo de infecção-inflamação crônica da via aérea, podendo ser causadas por múltiplas etiologias (pós-infecciosa, fibrose cística, discinesia ciliar primária, imunodeficiências, doenças do tecido conjuntivo, aspiração recorrente, deficiência de alfa-1 antitripsina) ou permanecer idiopáticas mesmo após investigação completa. A identificação da causa de base, quando possível, pode orientar tratamento específico adicional ao manejo geral da doença.',
      justify: 'O diagnóstico de bronquiectasias é confirmado pela TCAR demonstrando dilatação brônquica com espessamento de parede e sinal do anel de sinete em padrão basal bilateral, associado ao quadro clínico clássico (tosse produtiva crônica diária, infecções respiratórias de repetição desde a infância, hemoptise leve recorrente). A investigação etiológica inicial (imunoglobulinas, teste do suor, alfa-1 antitripsina) normal não exclui causas menos comuns como discinesia ciliar primária, que deve ser considerada dada a associação com infertilidade relatada pela paciente, sinal clínico relevante desta condição.',
      expectedAnamnesis: 'Caracterizar tosse produtiva crônica (volume, aspecto do escarro) | Investigar infecções respiratórias de repetição desde a infância | Perguntar sobre hemoptise | Investigar sinusite crônica associada | Perguntar sobre história de aspiração/engasgos na infância | Investigar saúde reprodutiva (infertilidade, relevante para discinesia ciliar primária) | Perguntar sobre tabagismo',
      expectedPhysical: 'Ausculta pulmonar cuidadosa (estertores grossos, roncos que se modificam com a tosse) | Avaliação de baqueteamento digital | Avaliação nutricional',
      expectedExams: [
        { exam: 'Tomografia de tórax de alta resolução (TCAR)', justify: 'Exame padrão-ouro para diagnóstico e caracterização da distribuição das bronquiectasias', expected: 'Dilatação brônquica com espessamento de parede, padrão basal bilateral' },
        { exam: 'Cultura de escarro', justify: 'Identificar colonização/infecção crônica por patógenos, especialmente Pseudomonas aeruginosa, que altera prognóstico e tratamento', expected: 'Positiva para Pseudomonas aeruginosa' },
        { exam: 'Dosagem de imunoglobulinas (IgG, IgA, IgM)', justify: 'Rastrear imunodeficiência humoral como causa tratável', expected: 'Normal neste caso' },
        { exam: 'Teste do suor', justify: 'Rastrear fibrose cística, causa importante especialmente em bronquiectasias de início precoce', expected: 'Negativo neste caso' },
        { exam: 'Dosagem de alfa-1 antitripsina', justify: 'Rastrear deficiência de alfa-1 antitripsina como causa associada', expected: 'Normal neste caso' },
        { exam: 'Óxido nítrico nasal e/ou avaliação especializada para discinesia ciliar primária', justify: 'Investigar diante da suspeita clínica (infecções desde a infância associadas a infertilidade)', expected: 'A definir conforme investigação especializada' }
      ],
      expectedConduct: 'Farmacológica: antibioticoterapia dirigida para exacerbações agudas, guiada por cultura de escarro (cobertura para Pseudomonas quando identificada); considerar antibiótico macrolídeo em baixa dose como terapia de manutenção (ação anti-inflamatória) em pacientes com exacerbações frequentes; broncodilatador se componente obstrutivo associado | Não farmacológica: fisioterapia respiratória para higiene brônquica (técnicas de desobstrução, drenagem postural) como pilar do tratamento; vacinação atualizada (influenza, pneumocócica); encaminhamento para investigação etiológica especializada (discinesia ciliar primária) dada a suspeita clínica | Orientações ao paciente: explicar a natureza crônica da doença e a importância da fisioterapia respiratória regular, não apenas do uso de antibióticos nas crises; esclarecer que a investigação da causa de base pode ou não identificar um fator tratável, mas o manejo geral permanece semelhante; abordar a questão da infertilidade como possível pista diagnóstica relevante, com encaminhamento apropriado | Seguimento: acompanhamento pneumológico regular com monitorização de função pulmonar e exacerbações',
      expectedCommunication: 'Validar a frustração da paciente com anos de sintomas sem investigação etiológica adequada | Explicar de forma didática a diferença entre tratar a manifestação (bronquiectasias) e buscar a causa de base | Conectar a queixa de infertilidade à investigação pneumológica de forma clara, mostrando a relevância de informações aparentemente não relacionadas | Verificar compreensão do plano terapêutico, incluindo a importância da fisioterapia respiratória',
      criticalErrors: [
        'Não solicitar TCAR como exame confirmatório diante de suspeita clínica de bronquiectasias',
        'Não investigar causas tratáveis (imunoglobulinas, teste do suor, alfa-1 antitripsina)',
        'Não perguntar sobre infertilidade/saúde reprodutiva, perdendo pista relevante para discinesia ciliar primária',
        'Não orientar fisioterapia respiratória como parte central do tratamento, focando apenas em antibióticos',
        'Não solicitar cultura de escarro para guiar antibioticoterapia dirigida'
      ]
    },
    instD: {
      title: 'CHECKLIST — TOSSE PRODUTIVA CRÔNICA COM GRANDE QUANTIDADE DE ESCARRO',
      sections: [
        {
          h: 'BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE',
          items: [
            { item: 'Apresentou-se pelo nome à paciente', score: 0.5, ref: 'CFM Res. 2.232/2019' },
            { item: 'Validou a frustração da paciente com anos sem diagnóstico', score: 0.5, ref: 'CFM Res. 2.232/2019' }
          ]
        },
        {
          h: 'BLOCO 2 — ANAMNESE',
          items: [
            { item: 'Investigou infecções respiratórias de repetição desde a infância', score: 0.5, ref: 'BTS Guidelines — Bronquiectasias' },
            { item: 'Perguntou sobre hemoptise e sinusite crônica associada', score: 0.5, ref: 'BTS Guidelines — Bronquiectasias' },
            { item: 'Investigou saúde reprodutiva/infertilidade (pista para discinesia ciliar)', score: 1.0, ref: 'BTS Guidelines — Bronquiectasias' }
          ]
        },
        {
          h: 'BLOCO 3 — EXAME FÍSICO',
          items: [
            { item: 'Realizou ausculta pulmonar completa identificando estertores/roncos basais', score: 0.5, ref: 'BTS Guidelines — Bronquiectasias' }
          ]
        },
        {
          h: 'BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
          items: [
            { item: 'Solicitou TCAR de tórax como exame confirmatório', score: 1.5, ref: 'BTS Guidelines — Bronquiectasias' },
            { item: 'Solicitou cultura de escarro', score: 0.5, ref: 'BTS Guidelines — Bronquiectasias' },
            { item: 'Solicitou investigação etiológica (imunoglobulinas, teste do suor, alfa-1 antitripsina)', score: 1.5, ref: 'BTS Guidelines — Bronquiectasias' }
          ]
        },
        {
          h: 'BLOCO 5 — CONDUTA E ORIENTAÇÃO AO PACIENTE',
          items: [
            { item: 'Orientou fisioterapia respiratória como pilar do tratamento', score: 1.0, ref: 'BTS Guidelines — Bronquiectasias' },
            { item: 'Considerou macrolídeo em baixa dose como manutenção em exacerbações frequentes', score: 0.5, ref: 'BTS Guidelines — Bronquiectasias' },
            { item: 'Perguntou se a paciente tinha dúvidas ao final da consulta', score: 0.5, ref: 'CFM Res. 2.232/2019' }
          ]
        }
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // CASO 11 — HEMOPTISE (INVESTIGAÇÃO)
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 11,
    title: 'Escarro com sangue vivo em quantidade moderada',
    sub: 'PS — Pronto-Socorro',
    tema: 'Pneumologia',
    topic: 'Hemoptise',
    level: 'difícil',
    cardAccent: '#5B9BD5',
    instA: {
      scenario: 'Pronto-Socorro, turno vespertino.',
      patient: 'W.A.C., 59 anos, masculino, tabagista, motorista.',
      complaint: 'Tosse com sangue vivo em quantidade moderada, iniciada há algumas horas.',
      tasks: [
        'Realize a anamnese dirigida, quantificando a gravidade do sangramento.',
        'Realize o exame físico dirigido, avaliando estabilidade hemodinâmica e respiratória.',
        'Formule a hipótese diagnóstica e os diferenciais de hemoptise.',
        'Solicite os exames complementares adequados.',
        'Proponha a conduta inicial, priorizando proteção de via aérea e estabilização.'
      ]
    },
    instB: {
      vitals: {
        PA: '138/86 mmHg',
        FC: '102 bpm',
        FR: '22 irpm',
        Tax: '36,8 °C',
        Peso: '76 kg',
        Altura: '1,73 m',
        SpO2: '94%'
      },
      physicalGeneral: 'Regular estado geral, ansioso, visivelmente incomodado ao tossir, com resquícios de sangue nos lábios/lenço.',
      physicalSeg: 'RESPIRATÓRIO: expansibilidade preservada; ausculta com estertores localizados em ápice direito, sem sibilos difusos | CARDIOVASCULAR: taquicárdico, bulhas normofonéticas | Sem sangramento ativo visível em orofaringe/nasofaringe ao exame (importante para excluir pseudo-hemoptise de via aérea superior ou hematêmese).',
      labs: [
        { test: 'Hemoglobina', val: '12,8 g/dL', ref: '13,5–17,5 g/dL', alt: true },
        { test: 'Coagulograma (TP/TTPA/INR)', val: 'Normais', ref: 'Normais', alt: false },
        { test: 'Plaquetas', val: '245.000/mm³', ref: '150.000–450.000/mm³', alt: false }
      ],
      image: 'Radiografia de tórax: opacidade nodular/massa em ápice pulmonar direito, de contornos irregulares, medindo cerca de 3,5 cm, sem cavitação evidente. Tomografia de tórax complementar: massa espiculada em lobo superior direito, com linfadenopatia hilar ipsilateral associada.',
      note: 'Priorizar avaliação de estabilidade e proteção de via aérea antes de qualquer investigação de imagem. A radiografia/TC devem ser solicitadas assim que o paciente estiver estável para tal — entregar os achados conforme solicitados.',
      patientProfile: 'Motorista, tabagista importante (45 anos-maço), refere tosse crônica e emagrecimento não valorizado nos últimos 3 meses (cerca de 6 kg), que atribuiu ao estresse do trabalho.',
      script: [
        { trigger: 'Queixa principal', speech: 'Doutor(a), comecei a tossir sangue, um sangue vivo, bastante quantidade, isso nunca tinha acontecido comigo.' },
        { trigger: 'Sobre a quantidade de sangue', speech: 'Saiu bastante, acho que uns 3-4 colheres de sopa nas últimas horas, misturado com um pouco de catarro.' },
        { trigger: 'Sobre tosse crônica prévia', speech: 'Tenho uma tosse chata há uns meses, não dei muita importância, achava que era do cigarro mesmo.' },
        { trigger: 'Sobre emagrecimento', speech: 'Agora que o(a) senhor(a) falou, eu emagreci uns 6 quilos nesses últimos meses, achei que fosse estresse do trabalho.' },
        { trigger: 'Sobre tabagismo', speech: 'Fumo desde muito jovem, quase 2 maços por dia, nunca consegui parar.' },
        { trigger: 'Sobre sangramento de outros locais', speech: 'Não tenho sangrado nariz nem gengiva, só ao tossir mesmo.' },
        { trigger: 'Pergunta ativa — gravidade', speech: 'Doutor(a), isso é grave? Pode ser câncer? Eu vou morrer sufocado?' }
      ],
      hiddenInfo: 'Está com muito medo de "morrer sufocado com o próprio sangue", ideia que carrega desde que um conhecido teve experiência semelhante — verbaliza esse medo se o candidato não esclarecer bem os cuidados imediatos | Nunca fez exame de imagem de tórax antes, apesar da tosse crônica e emagrecimento nos últimos meses — só revela se perguntado sobre investigação prévia | Tem episódios semelhantes mais leves (raias de sangue no escarro) há cerca de 3 semanas, que não valorizou — só revela se perguntado sobre episódios anteriores de sangue no escarro',
      actorBehavior: 'Muito ansioso, verbaliza medo de morte por sufocamento espontaneamente ou quando questionado sobre preocupações. Tosse ocasional durante a consulta (simulada). Colaborativo ao fornecer informações quando acolhido.'
    },
    instC: {
      diagnosis: 'Hemoptise não maciça, provavelmente secundária a neoplasia pulmonar (massa espiculada em lobo superior direito com linfadenopatia hilar associada), em tabagista com síndrome consumptiva associada.',
      differentials: [
        'Tuberculose pulmonar — entra como causa clássica de hemoptise; deve ser sempre investigada com baciloscopia/cultura, mas o padrão de massa espiculada com linfadenopatia (em vez de cavitação apical) e o perfil de risco (tabagismo pesado, emagrecimento) tornam a neoplasia mais provável neste caso',
        'Bronquiectasias — entra como causa comum de hemoptise recorrente; sai pela ausência de história de tosse produtiva crônica com grande volume de escarro e pelo achado focal de massa à imagem',
        'Tromboembolismo pulmonar com infarto pulmonar — entra como causa de hemoptise associada a dor pleurítica; sai pela ausência desses sintomas associados e pelo achado claro de massa pulmonar',
        'Pseudo-hemoptise (sangramento de via aérea superior ou hematêmese deglutida e regurgitada) — deve sempre ser excluída ao exame físico; afastada pela ausência de sangramento em orofaringe/nasofaringe e pela origem claramente pulmonar sugerida pelo contexto (tosse com sangue, achado de massa pulmonar)'
      ],
      context: 'Hemoptise é um sintoma que exige avaliação sistemática de sua origem (pulmonar x via aérea superior x trato digestivo) e gravidade (volume, repercussão hemodinâmica/respiratória), sendo cerca de 20 a 30 mL em 24h considerada hemoptise leve a moderada e volumes maiores (variavelmente definidos, geralmente >200-600 mL/24h ou repercussão hemodinâmica/asfixia) definindo hemoptise maciça, uma emergência com risco de morte por asfixia (não por choque hemorrágico). Neste caso, tabagista pesado com tosse crônica e emagrecimento recente, a hemoptise associada a massa pulmonar espiculada sugere fortemente etiologia neoplásica.',
      justify: 'A hemoptise apresentada (quantidade moderada, sem instabilidade hemodinâmica ou respiratória grave) associada a massa pulmonar espiculada em lobo superior direito com linfadenopatia hilar à tomografia, em paciente tabagista pesado com síndrome consumptiva (emagrecimento não intencional) e tosse crônica prévia não investigada, é fortemente sugestiva de neoplasia pulmonar como causa da hemoptise, exigindo investigação diagnóstica e estadiamento imediatos.',
      expectedAnamnesis: 'Diferenciar hemoptise verdadeira de pseudo-hemoptise (origem nasal, oral, digestiva) | Quantificar o volume de sangue e sua evolução temporal | Investigar tosse crônica prévia e emagrecimento | Quantificar carga tabágica | Perguntar sobre episódios semelhantes anteriores (raias de sangue) | Investigar sintomas de coagulopatia ou uso de anticoagulantes',
      expectedPhysical: 'Avaliação imediata de estabilidade hemodinâmica e respiratória (SpO2, FR, PA, FC) | Exame de orofaringe/nasofaringe para excluir origem alta do sangramento | Ausculta pulmonar buscando achados focais | Avaliação nutricional (emagrecimento)',
      expectedExams: [
        { exam: 'Radiografia de tórax', justify: 'Exame inicial para localizar possível causa do sangramento', expected: 'Opacidade/massa em ápice direito' },
        { exam: 'Tomografia de tórax com contraste', justify: 'Melhor caracterização da lesão suspeita e do território vascular envolvido', expected: 'Massa espiculada com linfadenopatia hilar, sugestiva de neoplasia' },
        { exam: 'Hemograma e coagulograma', justify: 'Avaliar repercussão hematológica e excluir coagulopatia como fator contribuinte', expected: 'Hemoglobina discretamente reduzida, coagulograma normal' },
        { exam: 'Broncoscopia (após estabilização)', justify: 'Localizar o sítio de sangramento, coletar material para biópsia/citologia e eventual intervenção terapêutica local', expected: 'A realizar conforme evolução; permite biópsia da lesão suspeita' }
      ],
      expectedConduct: 'Farmacológica: analgesia e antitussígeno com cautela (tosse excessivamente suprimida pode favorecer acúmulo de sangue na via aérea); ácido tranexâmico pode ser considerado como adjuvante em sangramento persistente | Não farmacológica: posicionamento do paciente em decúbito lateral com o lado suspeito de sangramento para baixo (proteção do pulmão contralateral de aspiração de sangue); monitorização contínua de SpO2 e sinais vitais; O2 suplementar se necessário; internação para investigação e observação; em caso de hemoptise maciça (não presente neste caso) — priorizar proteção de via aérea (intubação seletiva se necessário) e embolização de artéria brônquica de urgência | Orientações ao paciente: explicar que a hemoptise, embora assustadora, não indica necessariamente risco iminente de morte no volume apresentado; explicar a necessidade de investigação para esclarecer a causa (possível neoplasia) de forma cuidadosa e gradual; acolher o medo relacionado à possibilidade de sufocamento, explicando as medidas de proteção tomadas | Seguimento: broncoscopia e biópsia para confirmação diagnóstica, seguido de estadiamento oncológico completo se confirmada neoplasia',
      expectedCommunication: 'Acolher o medo intenso do paciente relacionado à possibilidade de sufocamento, oferecendo informação tranquilizadora e realista sobre a gravidade atual | Explicar de forma cuidadosa a suspeita de causa neoplásica sem antecipar prognóstico antes da confirmação | Explicar o racional do posicionamento (lado afetado para baixo) de forma acessível | Verificar compreensão do plano de investigação',
      criticalErrors: [
        'Não avaliar estabilidade hemodinâmica e respiratória como prioridade inicial diante de hemoptise',
        'Não excluir pseudo-hemoptise (origem em via aérea superior ou digestiva) ao exame físico',
        'Não posicionar o paciente adequadamente (lado suspeito de sangramento para baixo) para proteção do pulmão contralateral',
        'Não solicitar tomografia de tórax diante de hemoptise em tabagista com fatores de risco para neoplasia',
        'Não reconhecer os sinais de alarme (emagrecimento, tosse crônica, tabagismo pesado) sugestivos de causa neoplásica subjacente'
      ]
    },
    instD: {
      title: 'CHECKLIST — TOSSE COM SANGUE VIVO (HEMOPTISE)',
      sections: [
        {
          h: 'BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE',
          items: [
            { item: 'Apresentou-se pelo nome ao paciente', score: 0.5, ref: 'CFM Res. 2.232/2019' },
            { item: 'Acolheu o medo do paciente relacionado a sufocamento, com informação realista', score: 0.5, ref: 'CFM Res. 2.232/2019' }
          ]
        },
        {
          h: 'BLOCO 2 — ANAMNESE',
          items: [
            { item: 'Quantificou o volume de sangue e diferenciou de pseudo-hemoptise', score: 1.0, ref: 'SBPT — Diretrizes de Hemoptise' },
            { item: 'Investigou tosse crônica prévia, emagrecimento e carga tabágica', score: 1.0, ref: 'SBPT — Diretrizes de Hemoptise' }
          ]
        },
        {
          h: 'BLOCO 3 — EXAME FÍSICO',
          items: [
            { item: 'Avaliou estabilidade hemodinâmica e respiratória como prioridade', score: 1.0, ref: 'SBPT — Diretrizes de Hemoptise' },
            { item: 'Examinou orofaringe/nasofaringe para excluir origem alta do sangramento', score: 0.5, ref: 'SBPT — Diretrizes de Hemoptise' }
          ]
        },
        {
          h: 'BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
          items: [
            { item: 'Solicitou radiografia e tomografia de tórax', score: 1.0, ref: 'SBPT — Diretrizes de Hemoptise' },
            { item: 'Indicou broncoscopia para localização e biópsia', score: 1.0, ref: 'SBPT — Diretrizes de Hemoptise' }
          ]
        },
        {
          h: 'BLOCO 5 — CONDUTA E ORIENTAÇÃO AO PACIENTE',
          items: [
            { item: 'Posicionou o paciente com o lado suspeito de sangramento para baixo', score: 1.0, ref: 'SBPT — Diretrizes de Hemoptise' },
            { item: 'Indicou internação para investigação e observação', score: 0.5, ref: 'SBPT — Diretrizes de Hemoptise' },
            { item: 'Perguntou se o paciente tinha dúvidas ao final da consulta', score: 0.5, ref: 'CFM Res. 2.232/2019' }
          ]
        }
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // CASO 12 — CÂNCER DE PULMÃO (ACHADO SUSPEITO E ESTADIAMENTO INICIAL)
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 12,
    title: 'Tosse persistente, emagrecimento e massa pulmonar em tabagista',
    sub: 'Ambulatório — Pneumologia/Oncologia',
    tema: 'Pneumologia',
    topic: 'Câncer de Pulmão',
    level: 'difícil',
    cardAccent: '#5B9BD5',
    instA: {
      scenario: 'Consulta ambulatorial de retorno para resultado de exames de imagem.',
      patient: 'S.R.M., 64 anos, masculino, tabagista atual, pedreiro aposentado.',
      complaint: 'Retorna para resultado de tomografia solicitada por tosse persistente e emagrecimento.',
      tasks: [
        'Realize a anamnese dirigida, incluindo sintomas de alarme e possíveis síndromes paraneoplásicas.',
        'Realize o exame físico dirigido, incluindo pesquisa de metástases e linfonodos.',
        'Interprete os achados de imagem e comunique o diagnóstico suspeito.',
        'Solicite os exames necessários para confirmação histológica e estadiamento.',
        'Explique ao paciente os próximos passos da investigação e conduta inicial.'
      ]
    },
    instB: {
      vitals: {
        PA: '128/82 mmHg',
        FC: '88 bpm',
        FR: '20 irpm',
        Tax: '36,4 °C',
        Peso: '64 kg (perda de 8 kg em 3 meses)',
        Altura: '1,70 m',
        SpO2: '94%'
      },
      physicalGeneral: 'Regular estado geral, emagrecido, pele com turgor reduzido.',
      physicalSeg: 'RESPIRATÓRIO: murmúrio vesicular reduzido em ápice direito; sem sibilos difusos | LINFONODOS: linfonodo supraclavicular direito palpável, endurecido, indolor, cerca de 1,5 cm (linfonodo de Virchow) | ABDOME: discreta hepatomegalia palpável, indolor | Sem baqueteamento digital neste momento.',
      labs: [
        { test: 'Cálcio sérico', val: '11,8 mg/dL', ref: '8,5–10,5 mg/dL', alt: true },
        { test: 'Fosfatase alcalina', val: '186 U/L', ref: '40–129 U/L', alt: true },
        { test: 'TGO/TGP', val: 'Discretamente elevadas', ref: '< 40 U/L', alt: true }
      ],
      image: 'Tomografia de tórax com contraste: massa pulmonar espiculada em lobo superior direito, medindo 5,2 cm, com linfadenopatia mediastinal e hilar extensa ipsilateral e contralateral. TC de abdome: nódulos hepáticos múltiplos sugestivos de metástases. Achados compatíveis com neoplasia pulmonar avançada com doença metastática.',
      note: 'Os achados de imagem já demonstram doença avançada (metástases hepáticas, linfonodo supraclavicular) — o candidato deve reconhecer que isso já sugere estágio IV, mesmo antes da confirmação histológica, mas a biópsia continua sendo necessária para tipagem tumoral e definição terapêutica.',
      patientProfile: 'Pedreiro aposentado, tabagista atual (50 anos-maço), refere tosse persistente há 4 meses, inicialmente atribuída a "resfriado que não passava". Emagrecimento de 8 kg em 3 meses.',
      script: [
        { trigger: 'Ao ser questionado sobre o resultado', speech: 'Doutor(a), o que apareceu no meu exame? Foi por isso que o(a) senhor(a) me chamou de volta tão rápido?' },
        { trigger: 'Sobre sintomas respiratórios', speech: 'Minha tosse não passa há uns 4 meses, e ultimamente tenho sentido um pouco de falta de ar também.' },
        { trigger: 'Sobre emagrecimento', speech: 'Emagreci bastante, uns 8 quilos em 3 meses, minha roupa está toda larga.' },
        { trigger: 'Sobre dor óssea', speech: 'Tenho sentido uma dor nas costas ultimamente, achei que fosse coisa de idade ou do trabalho pesado que fiz a vida toda.' },
        { trigger: 'Sobre tabagismo', speech: 'Fumo desde os 15 anos, nunca consegui parar, hoje fumo uns 2 maços por dia ainda.' },
        { trigger: 'Sobre sintomas neurológicos', speech: 'Tenho sentido umas dores de cabeça diferentes ultimamente, e uma vez fiquei meio confuso por uns minutos, mas passou.' },
        { trigger: 'Pergunta ativa — diagnóstico', speech: '(voz trêmula) Doutor(a), é câncer? Quanto tempo eu tenho?' }
      ],
      hiddenInfo: 'Os episódios de confusão mental e a dor de cabeça diferente podem sugerir metástase cerebral, ainda não investigada — só revela esses sintomas se perguntado ativamente sobre sintomas neurológicos | A dor nas costas pode corresponder a metástase óssea, correlacionando-se com a fosfatase alcalina elevada — só revela detalhes se perguntado especificamente sobre dor óssea | Está com muito medo de morrer e não sabe como contar para a família — verbaliza esse medo e pede orientação sobre como comunicar o diagnóstico aos familiares, se o candidato acolher esse momento',
      actorBehavior: 'Muito ansioso e assustado ao ser chamado para o retorno, antecipando má notícia. Voz trêmula ao perguntar sobre prognóstico. Pode ficar em silêncio ou emocionado ao receber a notícia — respeitar esse momento antes de prosseguir com explicações adicionais.'
    },
    instC: {
      diagnosis: 'Neoplasia pulmonar primária (provável carcinoma broncogênico) em estágio avançado/metastático (estágio IV — metástases hepáticas e linfonodo supraclavicular positivo), com possível acometimento ósseo (hipercalcemia, fosfatase alcalina elevada, dor lombar) e suspeita de acometimento do sistema nervoso central (sintomas neurológicos referidos).',
      differentials: [
        'Metástase pulmonar de tumor primário de outro sítio — entra como possibilidade em massa pulmonar com doença sistêmica; menos provável dado o padrão de massa pulmonar única e espiculada como lesão dominante, mais compatível com tumor primário pulmonar, mas a biópsia é necessária para confirmação e tipagem definitiva',
        'Linfoma com acometimento pulmonar/hepático/linfonodal — entra como diferencial de doença sistêmica com linfadenopatia extensa; a biópsia do linfonodo ou da massa pulmonar é necessária para diferenciação histológica definitiva',
        'Tuberculose disseminada — entra como diferencial em paciente com emagrecimento e massa pulmonar; menos provável pelo padrão de imagem (massa espiculada, não infiltrado/cavitação) e pela presença clara de lesões hepáticas com aspecto metastático, mas deve ser rastreada',
        'Doença granulomatosa sistêmica (sarcoidose avançada) — entra como diferencial de linfadenopatia extensa; menos provável dado o contexto de tabagismo pesado, emagrecimento importante e padrão de massa dominante mais sugestivo de neoplasia'
      ],
      context: 'O câncer de pulmão é a principal causa de morte por câncer no mundo, fortemente associado ao tabagismo. Frequentemente diagnosticado em estágio avançado, pois os sintomas iniciais (tosse, emagrecimento) são inespecíficos e comumente atribuídos a outras causas, como ocorreu neste paciente que atribuiu a tosse a "resfriado". A presença de metástases hepáticas e linfonodo supraclavicular (linfonodo de Virchow) já classifica a doença como estágio IV, com implicações prognósticas e terapêuticas importantes.',
      justify: 'O quadro de massa pulmonar espiculada associada a linfadenopatia mediastinal extensa, linfonodo supraclavicular palpável (sinal de Virchow, classicamente associado a neoplasia intra-abdominal ou torácica avançada) e nódulos hepáticos sugestivos de metástase à tomografia de abdome, em paciente tabagista pesado com síndrome consumptiva, é fortemente sugestivo de neoplasia pulmonar em estágio IV (metastático). A hipercalcemia e fosfatase alcalina elevada sugerem possível acometimento ósseo adicional, e os sintomas neurológicos relatados (cefaleia diferente, confusão transitória) levantam suspeita de metástase cerebral, exigindo investigação de imagem específica.',
      expectedAnamnesis: 'Investigar duração e características da tosse | Quantificar emagrecimento e outros sintomas constitucionais | Investigar ativamente dor óssea (rastreio de metástase óssea) | Investigar ativamente sintomas neurológicos (cefaleia, confusão, déficits focais — rastreio de metástase cerebral) | Quantificar carga tabágica | Avaliar impacto emocional e rede de apoio familiar',
      expectedPhysical: 'Palpação de cadeias linfonodais, especialmente supraclavicular (sinal de Virchow) | Ausculta pulmonar | Palpação abdominal (hepatomegalia) | Exame neurológico sumário diante de sintomas relatados | Avaliação nutricional',
      expectedExams: [
        { exam: 'Biópsia da lesão (pulmonar, linfonodo supraclavicular acessível, ou hepática, conforme acessibilidade)', justify: 'Confirmação histológica obrigatória antes de definir tratamento oncológico específico, incluindo perfil molecular para terapia-alvo quando aplicável', expected: 'Definir subtipo histológico (adenocarcinoma, carcinoma escamoso, etc.) e perfil molecular' },
        { exam: 'Ressonância magnética de crânio', justify: 'Investigar possível metástase cerebral diante dos sintomas neurológicos relatados', expected: 'A realizar diante da suspeita clínica levantada' },
        { exam: 'Cintilografia óssea ou PET-CT de corpo inteiro', justify: 'Completar o estadiamento, avaliando acometimento ósseo e demais sítios metastáticos', expected: 'Avaliar extensão completa da doença' },
        { exam: 'Cálcio sérico e função hepática/renal', justify: 'Avaliar hipercalcemia (possível síndrome paraneoplásica ou metástase óssea) e função de órgãos para planejamento terapêutico', expected: 'Cálcio elevado, fosfatase alcalina elevada — sugerem acometimento ósseo' }
      ],
      expectedConduct: 'Farmacológica: tratamento oncológico específico (quimioterapia, imunoterapia ou terapia-alvo, conforme perfil histológico e molecular a ser definido pela biópsia) a ser conduzido pela equipe de oncologia após estadiamento completo; tratamento de suporte para hipercalcemia (hidratação, bisfosfonato) se sintomática ou significativa | Não farmacológica: encaminhamento urgente para oncologia e avaliação multidisciplinar; investigação completa de sítios metastáticos antes de definir plano terapêutico definitivo; suporte de cuidados paliativos deve ser integrado precocemente ao cuidado oncológico, não apenas no fim de vida | Orientações ao paciente: comunicar a suspeita de doença avançada com cuidado e progressividade, respeitando o tempo emocional do paciente; explicar os próximos passos (biópsia, exames de estadiamento) antes de discutir opções terapêuticas específicas, que dependem da confirmação histológica; oferecer apoio para a comunicação do diagnóstico à família, se solicitado; abordar cessação do tabagismo mesmo neste contexto, pelos benefícios em tolerância ao tratamento',
      expectedCommunication: 'Comunicar más notícias de forma estruturada, com escuta ativa e respeito ao tempo emocional do paciente (não avançar rapidamente com informações técnicas após revelar a suspeita diagnóstica) | Evitar dar prognóstico numérico específico ("quanto tempo eu tenho") antes do estadiamento completo, respondendo com honestidade sobre a incerteza neste momento | Oferecer suporte para comunicação com a família | Verificar compreensão e disponibilizar espaço para perguntas',
      criticalErrors: [
        'Não investigar ativamente sintomas neurológicos e ósseos, deixando de suspeitar de metástases cerebrais/ósseas',
        'Não palpar cadeias linfonodais (especialmente supraclavicular) e não reconhecer o sinal de Virchow',
        'Comunicar o diagnóstico suspeito de forma abrupta, sem espaço para a reação emocional do paciente',
        'Fornecer prognóstico numérico específico sem base em estadiamento completo',
        'Não encaminhar para biópsia e estadiamento completo antes de discutir opções terapêuticas'
      ]
    },
    instD: {
      title: 'CHECKLIST — TOSSE PERSISTENTE E EMAGRECIMENTO COM MASSA PULMONAR',
      sections: [
        {
          h: 'BLOCO 1 — COMUNICAÇÃO DE MÁS NOTÍCIAS',
          items: [
            { item: 'Comunicou a suspeita diagnóstica de forma estruturada, respeitando o tempo emocional do paciente', score: 1.0, ref: 'Protocolo SPIKES' },
            { item: 'Evitou fornecer prognóstico numérico específico sem base em estadiamento', score: 0.5, ref: 'Protocolo SPIKES' }
          ]
        },
        {
          h: 'BLOCO 2 — ANAMNESE',
          items: [
            { item: 'Investigou ativamente sintomas neurológicos (rastreio de metástase cerebral)', score: 1.0, ref: 'Diretrizes de Câncer de Pulmão — INCA' },
            { item: 'Investigou ativamente dor óssea (rastreio de metástase óssea)', score: 0.5, ref: 'Diretrizes de Câncer de Pulmão — INCA' },
            { item: 'Quantificou emagrecimento e carga tabágica', score: 0.5, ref: 'Diretrizes de Câncer de Pulmão — INCA' }
          ]
        },
        {
          h: 'BLOCO 3 — EXAME FÍSICO',
          items: [
            { item: 'Palpou cadeia supraclavicular e identificou linfonodo de Virchow', score: 1.0, ref: 'Diretrizes de Câncer de Pulmão — INCA' },
            { item: 'Realizou palpação abdominal identificando hepatomegalia', score: 0.5, ref: 'Diretrizes de Câncer de Pulmão — INCA' }
          ]
        },
        {
          h: 'BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
          items: [
            { item: 'Indicou biópsia para confirmação histológica e perfil molecular', score: 1.5, ref: 'Diretrizes de Câncer de Pulmão — INCA' },
            { item: 'Solicitou RM de crânio diante dos sintomas neurológicos', score: 1.0, ref: 'Diretrizes de Câncer de Pulmão — INCA' },
            { item: 'Solicitou avaliação de metástase óssea (cintilografia/PET-CT)', score: 0.5, ref: 'Diretrizes de Câncer de Pulmão — INCA' }
          ]
        },
        {
          h: 'BLOCO 5 — CONDUTA E ORIENTAÇÃO AO PACIENTE',
          items: [
            { item: 'Encaminhou para oncologia e equipe multidisciplinar', score: 1.0, ref: 'Diretrizes de Câncer de Pulmão — INCA' },
            { item: 'Ofereceu suporte para comunicação do diagnóstico à família', score: 0.5, ref: 'Protocolo SPIKES' }
          ]
        }
      ]
    }
  }
];

export default pneumologia2;
