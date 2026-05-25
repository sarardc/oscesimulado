const ped3 = [

{
  id: 1,
  title: 'Criança com diarreia e vômitos há 2 dias',
  sub: 'UPA — Urgência Pediátrica',
  tema: 'Pediatria',
  topic: 'Diarreia Aguda — Rotavírus',
  level: 'moderado',
  cardAccent: '#FF7043',
  instA: {
    scenario: 'UPA Pediátrica. Consultório de urgência, turno diurno.',
    patient: 'Mãe de L.S., 1 ano e 4 meses, masculino, sem comorbidades conhecidas.',
    complaint: 'Criança com diarreia várias vezes ao dia e vômitos há 2 dias, está bebendo pouco.',
    tasks: [
      'Realize a anamnese dirigida ao caso (com a mãe)',
      'Realize o exame físico pertinente, com avaliação do grau de desidratação',
      'Formule a hipótese diagnóstica e os diferenciais',
      'Proponha a conduta terapêutica adequada',
      'Oriente a mãe sobre hidratação, sinais de alarme e seguimento'
    ]
  },
  instB: {
    vitals: {
      PA: 'Não aferida',
      FC: '132 bpm',
      FR: '30 irpm',
      Tax: '38,1°C',
      Peso: '9,8 kg (peso habitual: 10,2 kg)',
      Altura: '0,80 m',
      IMC: '15,3 kg/m²'
    },
    physicalGeneral: 'Regular estado geral, irritado, levemente prostrado, mucosas orais levemente ressecadas, olhos discretamente encovados, fontanela anterior normotensa, turgor de pele com retorno levemente lentificado (> 2 segundos). Choro com lágrimas presentes. Perfusão capilar: 2 segundos.',
    physicalSeg: 'ABDOME: Levemente distendido, ruídos hidroaéreos aumentados, sem dor à palpação, sem visceromegalias. | OROFARINGE: Mucosa oral seca, sem exsudato. | NEUROLÓGICO: Consciente, irritado, sem sinais meníngeos. | PELE: Turgor diminuído, sem exantema.',
    labs: [
      { test: 'Hemograma', val: 'Leucócitos 8.200/mm³, linfócitos 60%', ref: '—', alt: false },
      { test: 'Sódio', val: '138 mEq/L', ref: '135–145 mEq/L', alt: false },
      { test: 'Potássio', val: '3,2 mEq/L', ref: '3,5–5,0 mEq/L', alt: true },
      { test: 'Ureia', val: '28 mg/dL', ref: '10–40 mg/dL', alt: false },
      { test: 'Creatinina', val: '0,4 mg/dL', ref: '0,2–0,5 mg/dL', alt: false },
      { test: 'Glicemia', val: '88 mg/dL', ref: '70–110 mg/dL', alt: false }
    ],
    image: null,
    note: 'O ator é a mãe. A criança é representada por boneco ou descrita. Entregar sinais vitais ao início. Entregar exame físico quando solicitado. Exames laboratoriais somente se solicitados. Reforçar ao candidato o peso atual versus habitual (perda de 400g — 4% do peso corporal).',
    patientProfile: 'Mãe: Luciana S., 26 anos, auxiliar de limpeza. Paciente: Lucas S., 1 ano e 4 meses, masculino.',
    script: [
      { trigger: 'Queixa principal', speech: 'Doutor, meu filho tá com diarreia desde antes de ontem, já fez cocô umas 6 vezes hoje, e tá vomitando muito.' },
      { trigger: 'Sobre as fezes', speech: 'É uma diarreia aguada, amarelada, sem sangue. Tem um cheiro muito forte.' },
      { trigger: 'Sobre vômito', speech: 'Vomitou umas 4 vezes, tudo que dou ele joga fora.' },
      { trigger: 'Sobre febre', speech: 'Teve febre de 38 graus, dei dipirona.' },
      { trigger: 'Sobre hidratação', speech: 'Tô tentando dar água e soro, mas ele cospe tudo fora.' },
      { trigger: 'Sobre vacinação', speech: 'Vacina tá em dia. Tomou aquela vacina de rotavírus sim, quando era bebê.' },
      { trigger: 'Sobre contato', speech: 'Tem uma prima que ficou assim também na semana passada.' },
      { trigger: 'Sobre urina', speech: 'Fez xixi só uma vez hoje de manhã, tá fazendo menos que o normal.' },
      { trigger: 'Pergunta ativa 1', speech: 'Precisa internar, doutor? Tô muito preocupada.' },
      { trigger: 'Pergunta ativa 2', speech: 'O que ele pode comer agora? Para tudo?' }
    ],
    hiddenInfo: 'A criança frequenta creche — fator de risco para transmissão fecal-oral; só revela se perguntado sobre creche ou contato com outras crianças. | Mãe deu suco de fruta concentrado tentando hidratar — pode piorar a diarreia osmótica; só revela se perguntado sobre o que ofereceu para beber.',
    actorBehavior: 'Ansiosa, cansada, com olheiras. Colaborativa. Fica aliviada com orientações claras. Demonstra dúvida sobre precisar internar — cabe ao candidato explicar o grau de desidratação e a conduta.'
  },
  instC: {
    diagnosis: 'Gastroenterite aguda viral — provável rotavírus — com desidratação leve a moderada (plano B de hidratação).',
    differentials: [
      'Gastroenterite bacteriana (Salmonella, Campylobacter) — fezes sanguinolentas, febre alta, leucocitose com desvio; aqui fezes aquosas sem sangue e leucograma com predomínio linfocitário.',
      'Síndrome hemolítica urêmica — após diarreia sanguinolenta por E. coli O157:H7; aqui sem sangue nas fezes, sem anemia hemolítica ou plaquetopenia.',
      'Intolerância transitória à lactose pós-gastroenterite — pode ocorrer como complicação, mas não é o diagnóstico primário.'
    ],
    context: 'Lactente com gastroenterite aguda viral típica de rotavírus: diarreia aquosa, vômitos, febre baixa, contexto epidemiológico (creche, contato com caso semelhante), leucograma com predomínio linfocitário. Desidratação leve a moderada (perda de 4% do peso, mucosas ressecadas, olhos encovados, turgor lentificado, diurese reduzida).',
    justify: 'Critérios de desidratação leve a moderada (Plano B): dois ou mais sinais entre — irritabilidade, olhos encovados, sinal da prega lentificado, bebe com avidez. Contexto viral (linfocitose, febre baixa, diarreia aquosa sem sangue) e epidemiológico corroboram rotavírus. A vacinação reduz formas graves mas não elimina a infecção.',
    expectedAnamnesis: 'Número de episódios de diarreia e vômito nas últimas 24h | Características das fezes (consistência, cor, sangue, muco) | Presença de febre (temperatura) | Volume e tipo de líquidos oferecidos | Diurese (frequência, volume — avaliar hidratação) | Peso habitual vs. atual (calcular % de perda) | Contatos com quadro semelhante / frequência em creche | Vacinação para rotavírus | Histórico de diarreia prévia, comorbidades',
    expectedPhysical: 'Sinais vitais: FC, Tax, peso | Avaliação do grau de desidratação: mucosas, olhos, fontanela, turgor, perfusão, choro com lágrimas, diurese — classificar conforme MS/SBP (sem desidratação / leve-moderada / grave) | Abdome: distensão, RHA, dor | Estado neurológico: nível de consciência, irritabilidade',
    expectedExams: [
      { exam: 'Ionograma e glicemia', justify: 'Avaliar distúrbios hidroeletrolíticos', expected: 'Hipocalemia leve' },
      { exam: 'Hemograma', justify: 'Avaliar padrão viral vs. bacteriano', expected: 'Linfocitose' },
      { exam: 'Pesquisa de rotavírus em fezes', justify: 'Confirmar etiologia — em contexto de surto ou internação', expected: 'Positivo' }
    ],
    expectedConduct: 'Farmacológica: Plano B de hidratação oral: SRO (soro de reidratação oral) 50–100 mL/kg em 4h, oferecer 5 mL a cada 1–2 minutos. Zinco 10 mg/dia VO por 10–14 dias (< 6 meses: 10 mg; ≥ 6 meses: 20 mg). Antipirético se febre. Não usar antidiarreicos, antieméticos ou antibióticos. (MS/SBP, Caderno de Diarreia 2023) | Não farmacológica: Manter aleitamento materno se em curso; oferecer dieta normal após reidratação; não suspender alimentação; higiene das mãos. | Encaminhamento: Internação se: desidratação grave, falha do Plano B, vômitos incoercíveis, recusa total de líquidos, alteração neurológica. | Orientações: Explicar que é viral, autolimitado; orientar sinais de alarme (prostração intensa, sem urina > 6h, sangue nas fezes, piora do estado geral). | Seguimento: Reavaliação após 4h de TRO; retorno imediato se sinais de alarme.',
    expectedCommunication: 'Apresentação: Apresentar-se à mãe, perguntar o nome da criança. | Comunicação do diagnóstico: "Seu filho tem uma diarreia viral, provavelmente rotavírus. Não é grave, mas ele está um pouco desidratado. Vamos hidratar com soro de reidratação oral aqui, e eu te ensino a continuar em casa." | Escuta ativa: Validar o cansaço e preocupação da mãe; orientar de forma clara e empática.',
    criticalErrors: [
      'Não avaliar grau de desidratação (não pesar a criança, não verificar sinais clínicos)',
      'Prescrever antibiótico para diarreia viral sem indicação',
      'Suspender a alimentação após reidratação (jejum desnecessário)',
      'Não orientar uso de SRO ou indicar soro caseiro incorretamente',
      'Não mencionar zinco como parte do tratamento (recomendação MS/OMS)',
      'Não reconhecer sinais de desidratação leve-moderada e dispensar sem hidratação supervisionada'
    ]
  },
  instD: {
    title: 'CHECKLIST — CRIANÇA COM DIARREIA E VÔMITOS HÁ 2 DIAS',
    sections: [
      {
        h: 'COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE',
        items: [
          { item: 'Apresentou-se à mãe e perguntou o nome da criança', score: 0.5, ref: 'CFM 2.217/2018' },
          { item: 'Utilizou linguagem acessível ao orientar hidratação e conduta', score: 0.5, ref: 'PNHAH/MS, 2001' },
          { item: 'Respondeu à preocupação da mãe sobre internação com clareza', score: 0.5, ref: 'PNHAH/MS, 2001' }
        ]
      },
      {
        h: 'ANAMNESE',
        items: [
          { item: 'Investigou número de episódios de diarreia e características das fezes (cor, sangue, muco)', score: 0.5, ref: 'MS/SBP, Diarreia 2023' },
          { item: 'Avaliou volume de diurese nas últimas horas (sinal de desidratação)', score: 1.0, ref: 'MS/SBP, 2023' },
          { item: 'Questionou vacinação para rotavírus e contatos com quadro semelhante', score: 0.5, ref: 'PNI/MS, 2023' },
          { item: 'Perguntou sobre o que foi oferecido para beber (tipo de líquido)', score: 0.5, ref: 'MS/SBP, 2023' }
        ]
      },
      {
        h: 'EXAME FÍSICO',
        items: [
          { item: 'Pesou a criança e comparou com peso habitual', score: 0.5, ref: 'MS/SBP, 2023' },
          { item: 'Avaliou grau de desidratação: mucosas, olhos, turgor, fontanela, perfusão, choro', score: 1.5, ref: 'MS/SBP, 2023' }
        ]
      },
      {
        h: 'RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
        items: [
          { item: 'Classificou desidratação corretamente (leve a moderada — Plano B)', score: 1.0, ref: 'MS/SBP, 2023' },
          { item: 'Formulou hipótese de gastroenterite viral (rotavírus) com justificativa', score: 0.5, ref: 'MS/SBP, 2023' }
        ]
      },
      {
        h: 'CONDUTA E ORIENTAÇÃO AO PACIENTE',
        items: [
          { item: 'Indicou Plano B de hidratação oral com SRO (50–100 mL/kg em 4h)', score: 1.5, ref: 'MS/SBP, 2023' },
          { item: 'Prescreveu zinco oral (20 mg/dia por 10–14 dias)', score: 0.5, ref: 'OMS/MS, 2023' },
          { item: 'Orientou manter alimentação após reidratação (não fazer jejum)', score: 0.5, ref: 'MS/SBP, 2023' },
          { item: 'Orientou sinais de alarme e retorno imediato', score: 0.5, ref: 'MS/SBP, 2023' }
        ]
      }
    ]
  }
},

{
  id: 2,
  title: 'Criança com diarreia com sangue, parou de urinar e ficou pálida',
  sub: 'UPA — Urgência Pediátrica',
  tema: 'Pediatria',
  topic: 'Síndrome Hemolítica Urêmica',
  level: 'moderado',
  cardAccent: '#D32F2F',
  instA: {
    scenario: 'UPA Pediátrica. Triagem e consultório de urgência, turno vespertino.',
    patient: 'Mãe de M.O., 3 anos, feminina, sem comorbidades.',
    complaint: 'Criança com diarreia com sangue há 5 dias, ficou pálida, inchada e parou de fazer xixi há 1 dia.',
    tasks: [
      'Realize a anamnese dirigida ao caso (com a mãe)',
      'Realize o exame físico pertinente',
      'Formule a hipótese diagnóstica e os diferenciais',
      'Solicite os exames complementares adequados',
      'Proponha a conduta imediata e oriente a mãe sobre a gravidade'
    ]
  },
  instB: {
    vitals: {
      PA: '118/78 mmHg (limítrofe para a idade)',
      FC: '136 bpm',
      FR: '32 irpm',
      Tax: '37,2°C',
      Peso: '14 kg',
      Altura: '0,96 m',
      IMC: '15,2 kg/m²'
    },
    physicalGeneral: 'Regular estado geral, prostrada, pálida (++/4+), ictérica leve (+/4+), edema de face e membros inferiores (+/4+), oligúrica (sem diurese há ~18h relatada pela mãe). Consciente, irritada.',
    physicalSeg: 'ABDOME: Distendido, levemente doloroso à palpação difusa, sem peritonismo. Ruídos hidroaéreos diminuídos. | PELE: Palidez cutânea intensa. Petéquias esparsas em membros inferiores. | NEUROLÓGICO: Consciente, irritada, sem déficit focal. Sem sinais meníngeos. | CARDIOVASCULAR: Taquicardia. Sem sopros.',
    labs: [
      { test: 'Hemoglobina', val: '7,2 g/dL', ref: '11,0–14,0 g/dL', alt: true },
      { test: 'Hematócrito', val: '22%', ref: '33–42%', alt: true },
      { test: 'Plaquetas', val: '48.000/mm³', ref: '150.000–400.000/mm³', alt: true },
      { test: 'Leucócitos', val: '14.200/mm³', ref: '6.000–17.000/mm³', alt: false },
      { test: 'Ureia', val: '98 mg/dL', ref: '10–40 mg/dL', alt: true },
      { test: 'Creatinina', val: '2,8 mg/dL', ref: '0,3–0,7 mg/dL', alt: true },
      { test: 'LDH', val: '1.240 U/L', ref: '< 300 U/L', alt: true },
      { test: 'Bilirrubina indireta', val: '3,8 mg/dL', ref: '< 0,8 mg/dL', alt: true },
      { test: 'Esfregaço sangue periférico', val: 'Esquizócitos presentes', ref: 'Ausentes', alt: true }
    ],
    image: null,
    note: 'O ator é a mãe. Entregar sinais vitais ao início. Entregar exame físico ao exame. Entregar hemograma, função renal, LDH, bilirrubina e esfregaço somente se solicitados. Este é um caso de urgência — internação imediata é a conduta esperada. Reforçar ao candidato a tríade: anemia hemolítica + plaquetopenia + IRA.',
    patientProfile: 'Mãe: Mariana O., 29 anos, vendedora. Paciente: Maria O., 3 anos, feminina.',
    script: [
      { trigger: 'Queixa principal', speech: 'Doutor, minha filha começou com diarreia com sangue há 5 dias, aí foi ficando pálida e inchada, e hoje não fez xixi nenhuma vez.' },
      { trigger: 'Sobre a diarreia', speech: 'A diarreia era com bastante sangue, uma dorzão na barriga. Agora a diarreia melhorou mas ela piorou.' },
      { trigger: 'Sobre o inchaço', speech: 'Inchou o rosto e as perninhas hoje. Nunca tinha ficado assim.' },
      { trigger: 'Sobre a palidez', speech: 'Ela ficou branquinha de repente, os lábios dela estão quase roxos.' },
      { trigger: 'Sobre alimentação recente', speech: 'Uns 7 dias atrás comemos num churrasco, ela comeu hambúrguer mal passado.' },
      { trigger: 'Sobre antibiótico', speech: 'Fui ao médico lá no posto, ele receitou antibiótico pra diarreia, tomou 2 dias.' },
      { trigger: 'Sobre febre', speech: 'Tinha febre no início, agora não tem mais.' },
      { trigger: 'Pergunta ativa 1', speech: 'O que ela tem, doutor? É grave? Vai precisar de diálise?' },
      { trigger: 'Pergunta ativa 2', speech: 'Por que ela piorou se a diarreia passou?' }
    ],
    hiddenInfo: 'Consumiu hambúrguer mal passado em churrasco 7 dias antes — exposição a E. coli O157:H7; só revela se perguntado sobre alimentação recente ou evento anterior. | Médico anterior prescreveu antibiótico para a diarreia — uso de antibiótico na diarreia por STEC aumenta risco de SHU; só revela se perguntado sobre tratamentos anteriores.',
    actorBehavior: 'Muito ansiosa, chorosa, assustada com a piora da filha. Colaborativa. Fica em pânico ao ouvir "diálise". Cabe ao candidato ser claro sobre a gravidade sem ser alarmista, e acolher a mãe.'
  },
  instC: {
    diagnosis: 'Síndrome hemolítica urêmica (SHU) típica — associada a E. coli produtora de toxina Shiga (STEC O157:H7) — com tríade: anemia hemolítica microangiopática + plaquetopenia + insuficiência renal aguda oligúrica.',
    differentials: [
      'Púrpura trombocitopênica trombótica (PTT) — tríade + neurológico + febre; mais em adultos; aqui sem déficit neurológico e contexto pós-diarreia sanguinolenta típico de SHU.',
      'Sepse com CIVD — pancitopenia, choque; aqui sem choque e com contexto pós-diarreia por STEC.',
      'Nefrite pós-infecciosa — hematúria + edema + hipertensão pós-estreptocócico; sem anemia hemolítica nem plaquetopenia.'
    ],
    context: 'Criança de 3 anos com SHU típica pós-diarreia sanguinolenta por E. coli O157:H7 (provável exposição em hambúrguer mal passado), apresentando a tríade clássica: anemia hemolítica microangiopática (Hb 7,2, esquizócitos), plaquetopenia (48.000) e IRA oligúrica (Cr 2,8). O uso de antibiótico na fase diarreica é fator agravante reconhecido.',
    justify: 'Tríade de SHU presente: (1) anemia hemolítica microangiopática — Hb baixa, esquizócitos, LDH elevada, bilirrubina indireta elevada; (2) trombocitopenia < 150.000; (3) IRA — creatinina 2,8 mg/dL, oligúria/anúria. Contexto epidemiológico (carne mal passada, diarreia sanguinolenta) e uso de antibiótico (fator de risco para liberação de toxina Shiga) completam o raciocínio.',
    expectedAnamnesis: 'Início e evolução da diarreia (sanguinolenta, dor abdominal) | Palidez, icterícia, edema (surgimento após melhora da diarreia — padrão típico de SHU) | Diurese (volume, frequência — oligúria/anúria) | Alimentação recente (carne mal passada, fontes de E. coli) | Tratamentos realizados (antibiótico — fator de risco) | Contatos com quadro semelhante | Histórico de comorbidades renais ou hematológicas',
    expectedPhysical: 'Sinais vitais: FC, FR, PA (hipertensão pode ocorrer na IRA) | Palidez, icterícia, edema (face, MMII) | Petéquias (plaquetopenia) | Abdome: distensão, dor | Neurológico: consciência, irritabilidade, déficits focais | Avaliação de diurese',
    expectedExams: [
      { exam: 'Hemograma completo + esfregaço', justify: 'Anemia hemolítica + esquizócitos + plaquetopenia', expected: 'Confirmados' },
      { exam: 'Ureia e creatinina', justify: 'IRA', expected: 'Elevados' },
      { exam: 'LDH e bilirrubina indireta', justify: 'Hemólise', expected: 'Elevados' },
      { exam: 'Urinálise', justify: 'Hematúria, proteinúria', expected: 'Positivos' },
      { exam: 'Coprocultura para E. coli O157:H7', justify: 'Identificar agente', expected: 'Positivo' }
    ],
    expectedConduct: 'Farmacológica: Suporte intensivo: hidratação EV cuidadosa (monitorar balanço hídrico e oligúria); transfusão de hemácias se Hb < 7 g/dL e sintomático; NÃO transfundir plaquetas (exceto sangramento ativo grave). NÃO usar antibiótico (aumenta liberação de toxina Shiga). Anti-hipertensivos se hipertensão. (SBP 2022) | Não farmacológica: Monitorização da diurese; balanço hídrico rigoroso; dieta hipoproteica se IRA. | Encaminhamento: Internação em UTI pediátrica imediata; nefrologista pediátrico para avaliar diálise se anúria persistente. | Orientações: Explicar à mãe que é uma complicação grave da diarreia bacteriana; que o tratamento é de suporte; que muitas crianças se recuperam completamente. | Seguimento: UTI; monitorização renal a longo prazo (sequela em ~25% dos casos).',
    expectedCommunication: 'Apresentação: Apresentar-se, acolher a angústia da mãe. | Comunicação do diagnóstico: "Sua filha tem uma complicação grave da diarreia com sangue que afetou os rins e o sangue dela. Precisa internar agora na UTI para tratamento intensivo." | Escuta ativa: Responder sobre diálise com clareza e esperança realista.',
    criticalErrors: [
      'Prescrever antibiótico (contraindica na SHU por STEC — aumenta risco de piora)',
      'Não reconhecer a tríade de SHU (anemia + plaquetopenia + IRA)',
      'Dispensar a criança sem internação',
      'Transfundir plaquetas sem indicação (sangramento ativo)',
      'Não solicitar avaliação nefrológica e não indicar UTI pediátrica',
      'Não identificar exposição alimentar como fator etiológico'
    ]
  },
  instD: {
    title: 'CHECKLIST — CRIANÇA COM DIARREIA COM SANGUE, PALIDEZ E OLIGÚRIA',
    sections: [
      {
        h: 'COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE',
        items: [
          { item: 'Apresentou-se e acolheu a mãe com empatia', score: 0.5, ref: 'CFM 2.217/2018' },
          { item: 'Comunicou a gravidade de forma clara sem ser alarmista', score: 0.5, ref: 'PNHAH/MS, 2001' },
          { item: 'Explicou o diagnóstico e a necessidade de internação em UTI em linguagem acessível', score: 0.5, ref: 'PNHAH/MS, 2001' }
        ]
      },
      {
        h: 'ANAMNESE',
        items: [
          { item: 'Identificou diarreia sanguinolenta como evento inicial e investigou evolução bifásica (melhora da diarreia + piora sistêmica)', score: 1.0, ref: 'SBP, 2022' },
          { item: 'Investigou diurese (oligúria/anúria) nas últimas horas', score: 1.0, ref: 'SBP, 2022' },
          { item: 'Perguntou sobre alimentação recente (carne mal passada — E. coli O157:H7)', score: 0.5, ref: 'SBP, 2022' },
          { item: 'Questionou uso de antibiótico prévio para a diarreia', score: 0.5, ref: 'SBP, 2022' }
        ]
      },
      {
        h: 'EXAME FÍSICO',
        items: [
          { item: 'Avaliou palidez, icterícia e edema (tríade clínica de SHU)', score: 1.0, ref: 'SBP, 2022' },
          { item: 'Aferiu PA e avaliou sinais de hipertensão associada à IRA', score: 0.5, ref: 'SBP, 2022' },
          { item: 'Realizou exame neurológico sumário (afastar PTT ou encefalopatia)', score: 0.5, ref: 'SBP, 2022' }
        ]
      },
      {
        h: 'RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
        items: [
          { item: 'Formulou hipótese de SHU e identificou tríade clínica', score: 1.0, ref: 'SBP, 2022' },
          { item: 'Solicitou hemograma com esfregaço, função renal, LDH e bilirrubina', score: 0.5, ref: 'SBP, 2022' }
        ]
      },
      {
        h: 'CONDUTA E ORIENTAÇÃO AO PACIENTE',
        items: [
          { item: 'Indicou internação imediata em UTI pediátrica', score: 1.0, ref: 'SBP, 2022' },
          { item: 'Contraindicou antibiótico explicitamente na SHU por STEC', score: 0.5, ref: 'SBP, 2022' },
          { item: 'Contraindicou transfusão de plaquetas sem indicação (sem sangramento ativo)', score: 0.5, ref: 'SBP, 2022' }
        ]
      }
    ]
  }
},

{
  id: 3,
  title: 'Criança com diarreia que não passa há 3 semanas',
  sub: 'UBS — Atenção Primária',
  tema: 'Pediatria',
  topic: 'Diarreia Persistente',
  level: 'moderado',
  cardAccent: '#FF7043',
  instA: {
    scenario: 'Atenção Primária — UBS. Consultório, turno matutino.',
    patient: 'Mãe de K.S., 1 ano e 1 mês, feminina, previamente saudável.',
    complaint: 'Bebê com diarreia que não passa há 3 semanas, perdeu peso e está irritada.',
    tasks: [
      'Realize a anamnese dirigida ao caso',
      'Realize o exame físico pertinente',
      'Formule a hipótese diagnóstica e os diferenciais',
      'Solicite os exames complementares adequados',
      'Proponha a conduta e oriente a mãe sobre seguimento'
    ]
  },
  instB: {
    vitals: {
      PA: 'Não aferida',
      FC: '122 bpm',
      FR: '28 irpm',
      Tax: '37,0°C',
      Peso: '7,8 kg (peso há 1 mês: 8,4 kg)',
      Altura: '0,74 m',
      IMC: '14,2 kg/m²'
    },
    physicalGeneral: 'Regular estado geral, irritada, emagrecida, pálida (+/4+), hidratada. Abdome levemente distendido. Fralda com fezes líquidas de odor ácido.',
    physicalSeg: 'ABDOME: Distendido, ruídos hidroaéreos aumentados, sem dor evidente à palpação, sem visceromegalias. | PELE: Dermatite perianal (eritema perianal intenso). | ESTADO NUTRICIONAL: Emagrecimento visível (perda de 7% do peso em 1 mês), panículo adiposo reduzido. | MUCOSAS: Hidratadas, sem sinais de desidratação atual.',
    labs: [
      { test: 'Hemograma', val: 'Hb 10,2 g/dL, leucócitos 9.400/mm³', ref: 'Hb > 11 g/dL', alt: true },
      { test: 'pH fecal', val: '5,0', ref: '> 6,0', alt: true },
      { test: 'Substâncias redutoras nas fezes', val: 'Positivo (++)', ref: 'Negativo', alt: true },
      { test: 'Copro parasitológico', val: 'Negativo', ref: '—', alt: false },
      { test: 'Proteína C reativa', val: '8 mg/L', ref: '< 5 mg/L', alt: true }
    ],
    image: null,
    note: 'Ator é a mãe. Entregar sinais vitais e peso atual e anterior ao início. Entregar exame físico ao exame. Entregar exames somente se solicitados. Destacar a perda de peso significativa como sinal de alerta nutricional.',
    patientProfile: 'Mãe: Kelly S., 22 anos, estudante. Paciente: Kauane S., 1 ano e 1 mês, feminina.',
    script: [
      { trigger: 'Queixa principal', speech: 'Doutor, minha filha tá com diarreia há 3 semanas, não passa. Ela emagreceu muito e tá muito irritada.' },
      { trigger: 'Sobre início', speech: 'Começou depois de uma diarreia com febre, tratou, mas a diarreia nunca parou direito.' },
      { trigger: 'Sobre as fezes', speech: 'É líquida, com cheiro azedo, às vezes espumosa. Não tem sangue.' },
      { trigger: 'Sobre alimentação', speech: 'Ela toma leite de caixinha (fórmula infantil) desde os 6 meses, não mama mais.' },
      { trigger: 'Sobre introdução alimentar', speech: 'Introduzi fruta e papa aos 6 meses. Ela come de tudo, mas quando come às vezes piora.' },
      { trigger: 'Sobre ganho de peso', speech: 'Ela pesava 8,4 kg mês passado, agora pesou 7,8 kg. Tá perdendo peso.' },
      { trigger: 'Sobre tratamentos', speech: 'O médico deu antibiótico e probiótico, mas não resolveu.' },
      { trigger: 'Pergunta ativa 1', speech: 'Por que ela não melhora, doutor? Tem algo mais sério?' },
      { trigger: 'Pergunta ativa 2', speech: 'Preciso parar o leite? Mudar a alimentação?' }
    ],
    hiddenInfo: 'A fórmula infantil foi trocada para leite de vaca integral (leite de caixinha comum) há 2 meses — possível intolerância à lactose pós-enteral ou APLV; só revela se perguntado especificamente sobre o tipo de leite oferecido. | Episódio de gastroenterite aguda há 4 semanas que iniciou o quadro — só revela com detalhes se perguntado sobre evento desencadeante.',
    actorBehavior: 'Cansada, preocupada com o emagrecimento da filha. Levemente culpada por não ter voltado ao médico antes. Colaborativa. Fica atenta às orientações sobre alimentação.'
  },
  instC: {
    diagnosis: 'Diarreia persistente (> 14 dias) com intolerância secundária à lactose pós-gastroenterite, associada a desnutrição aguda leve e anemia.',
    differentials: [
      'Alergia à proteína do leite de vaca (APLV) — diarreia persistente, eritema perianal, irritabilidade; pode coexistir; diferenciação por dieta de exclusão e reintrodução.',
      'Giardíase — diarreia persistente, esteatorreia, emagrecimento; copro negativo aqui, mas pode ser falso-negativo — repetir.',
      'Doença celíaca — diarreia crônica, distensão abdominal, emagrecimento; mais comum após introdução de glúten; aqui possível, mas a evolução pós-gastroenterite e pH fecal ácido com substâncias redutoras sugerem intolerância à lactose como principal.'
    ],
    context: 'Lactente com diarreia persistente (> 14 dias) após gastroenterite aguda, com fezes ácidas e substâncias redutoras positivas, sugerindo intolerância secundária à lactose. Emagrecimento significativo (7% em 1 mês) e anemia indicam impacto nutricional. Uso de leite de vaca integral (rico em lactose) como fonte principal é fator agravante.',
    justify: 'Fezes ácidas (pH 5,0) + substâncias redutoras positivas = má absorção de carboidratos (lactose) nas fezes. Contexto pós-gastroenterite (lesão vilositária transitória → déficit de lactase). Emagrecimento + irritabilidade + eritema perianal completam o quadro clínico de diarreia osmótica por intolerância secundária à lactose.',
    expectedAnamnesis: 'Duração da diarreia (> 14 dias = persistente) | Evento desencadeante (gastroenterite aguda prévia) | Características das fezes (aquosas, ácidas, espumosas, sem sangue) | Tipo de leite oferecido (leite de vaca integral x fórmula) | Peso atual e anterior (avaliação nutricional) | Tratamentos realizados | Introdução alimentar (glúten, proteínas) | Histórico de atopia familiar (APLV)',
    expectedPhysical: 'Peso e estado nutricional (curvas de crescimento) | Hidratação | Abdome: distensão, RHA | Dermatite perianal (eritema por fezes ácidas) | Palidez (anemia)',
    expectedExams: [
      { exam: 'pH fecal e substâncias redutoras', justify: 'Confirmar intolerância à lactose', expected: 'pH ácido, SR positivo' },
      { exam: 'Copro parasitológico (3 amostras)', justify: 'Afastar Giardia', expected: 'Negativo' },
      { exam: 'Hemograma', justify: 'Avaliar anemia', expected: 'Anemia leve' },
      { exam: 'Proteínas totais e albumina', justify: 'Avaliação nutricional', expected: 'Pode estar reduzida' }
    ],
    expectedConduct: 'Farmacológica: Substituição da fórmula/leite de vaca por fórmula sem lactose ou fórmula extensamente hidrolisada por 4–6 semanas. Zinco 10–20 mg/dia. Suplementação de ferro se anemia confirmada. (SBP 2022 / MS 2023) | Não farmacológica: Manter alimentos sólidos sem lactose; rehidratação oral se necessário; curva de peso e comprimento seriada. | Encaminhamento: Gastroenterologia pediátrica se sem melhora em 2 semanas com fórmula sem lactose (afastar APLV, doença celíaca, giardíase). | Orientações: Explicar que é uma consequência da infecção intestinal; que o intestino precisa de tempo para se recuperar; que a troca do leite é temporária. | Seguimento: Retorno em 2 semanas para avaliação do ganho de peso e melhora da diarreia.',
    expectedCommunication: 'Apresentação: Apresentar-se, acolher a mãe. | Comunicação do diagnóstico: "Depois da diarreia, o intestino da sua filha ficou com dificuldade de digerir o leite. Precisamos trocar o leite por um tempo para ela melhorar e ganhar peso de volta." | Escuta ativa: Acolher a culpa materna sem reforçá-la; esclarecer sobre o leite de vaca integral.',
    criticalErrors: [
      'Não avaliar o peso e o estado nutricional da criança',
      'Não identificar diarreia persistente (> 14 dias) como entidade distinta',
      'Prescrever antibiótico sem indicação (copro negativo)',
      'Não orientar sobre troca do leite',
      'Não encaminhar para gastroenterologia pediátrica se sem melhora'
    ]
  },
  instD: {
    title: 'CHECKLIST — CRIANÇA COM DIARREIA QUE NÃO PASSA HÁ 3 SEMANAS',
    sections: [
      {
        h: 'COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE',
        items: [
          { item: 'Apresentou-se e acolheu a mãe sem julgamento', score: 0.5, ref: 'CFM 2.217/2018' },
          { item: 'Explicou o diagnóstico e a conduta em linguagem acessível', score: 0.5, ref: 'PNHAH/MS, 2001' }
        ]
      },
      {
        h: 'ANAMNESE',
        items: [
          { item: 'Identificou duração > 14 dias (diarreia persistente) e evento desencadeante', score: 1.0, ref: 'SBP/MS, 2023' },
          { item: 'Investigou tipo de leite e alimentação oferecida', score: 1.0, ref: 'SBP, 2022' },
          { item: 'Questionou peso atual e anterior (avaliação de emagrecimento)', score: 0.5, ref: 'SBP, 2022' },
          { item: 'Perguntou sobre tratamentos anteriores', score: 0.5, ref: 'SBP, 2022' }
        ]
      },
      {
        h: 'EXAME FÍSICO',
        items: [
          { item: 'Avaliou estado nutricional e pesou a criança (curva de crescimento)', score: 1.0, ref: 'SBP, 2022' },
          { item: 'Identificou dermatite perianal (fezes ácidas) e distensão abdominal', score: 0.5, ref: 'SBP, 2022' }
        ]
      },
      {
        h: 'RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
        items: [
          { item: 'Formulou hipótese de intolerância secundária à lactose pós-gastroenterite', score: 1.0, ref: 'SBP, 2022' },
          { item: 'Solicitou pH fecal e substâncias redutoras nas fezes', score: 0.5, ref: 'SBP, 2022' },
          { item: 'Solicitou copro parasitológico para afastar giardíase', score: 0.5, ref: 'SBP, 2022' }
        ]
      },
      {
        h: 'CONDUTA E ORIENTAÇÃO AO PACIENTE',
        items: [
          { item: 'Indicou fórmula sem lactose ou extensamente hidrolisada', score: 1.0, ref: 'SBP 2022 / RENAME 2022' },
          { item: 'Prescreveu zinco e avaliou necessidade de ferro', score: 0.5, ref: 'OMS/MS, 2023' },
          { item: 'Orientou retorno em 2 semanas e encaminhamento se sem melhora', score: 0.5, ref: 'SBP, 2022' }
        ]
      }
    ]
  }
},

{
  id: 4,
  title: 'Criança com diarreia com sangue e muco há 2 meses',
  sub: 'Ambulatório de Pediatria',
  tema: 'Pediatria',
  topic: 'Diarreia Crônica Sanguinolenta — DII (Doença de Crohn)',
  level: 'moderado',
  cardAccent: '#E53935',
  instA: {
    scenario: 'Ambulatório de Pediatria. Consultório, turno matutino.',
    patient: 'Mãe de P.A., 10 anos, masculino, sem diagnóstico prévio.',
    complaint: 'Criança com diarreia com sangue e muco há 2 meses, dor abdominal, perdeu peso e está cansada.',
    tasks: [
      'Realize a anamnese dirigida ao caso',
      'Realize o exame físico pertinente',
      'Formule a hipótese diagnóstica e os diferenciais',
      'Solicite os exames complementares adequados',
      'Proponha conduta inicial e encaminhamento'
    ]
  },
  instB: {
    vitals: {
      PA: '100/66 mmHg',
      FC: '98 bpm',
      FR: '20 irpm',
      Tax: '37,6°C',
      Peso: '28 kg (peso há 2 meses: 31 kg)',
      Altura: '1,38 m',
      IMC: '14,7 kg/m²'
    },
    physicalGeneral: 'Regular estado geral, emagrecido, pálido (++/4+), subfebril, cansado. Sem icterícia. Sem edema.',
    physicalSeg: 'ABDOME: Dor à palpação em fossa ilíaca direita e flanco direito, sem sinal de peritonismo. Sem massas palpáveis. Ruídos hidroaéreos normais. | REGIÃO PERIANAL: Fissura anal e duas pregas cutâneas redundantes perianais visíveis. | PELE: Eritema nodoso em face anterior de pernas bilateralmente (2 nódulos). | ARTICULAÇÕES: Artralgia em joelhos (referida pelo paciente). | MUCOSA ORAL: Aftas orais (2 pequenas lesões em mucosa jugal).',
    labs: [
      { test: 'Hemograma', val: 'Hb 9,8 g/dL, leucócitos 13.400/mm³, plaquetas 520.000/mm³', ref: 'Hb > 11,5 g/dL', alt: true },
      { test: 'VHS', val: '68 mm/h', ref: '< 20 mm/h', alt: true },
      { test: 'PCR', val: '42 mg/L', ref: '< 5 mg/L', alt: true },
      { test: 'Albumina', val: '2,8 g/dL', ref: '3,5–5,0 g/dL', alt: true },
      { test: 'Calprotectina fecal', val: '480 µg/g', ref: '< 50 µg/g', alt: true },
      { test: 'Copro parasitológico', val: 'Negativo', ref: '—', alt: false }
    ],
    image: null,
    note: 'Ator é a mãe (e a criança pode responder se o candidato se dirigir a ela). Entregar sinais vitais e peso ao início. Entregar exame físico ao exame. Exames laboratoriais somente se solicitados. Reforçar manifestações extraintestinais (aftas, eritema nodoso, artralgia, fissura perianal) como pistas para DII.',
    patientProfile: 'Mãe: Patrícia A., 38 anos, professora. Paciente: Pedro A., 10 anos, masculino.',
    script: [
      { trigger: 'Queixa principal', speech: 'Doutor, meu filho tá com diarreia com sangue e uma dorzão na barriga há 2 meses. Ele perdeu 3 quilos e tá muito cansado.' },
      { trigger: 'Sobre a diarreia', speech: 'É com sangue e aquela gosma. Às vezes 5 a 6 vezes por dia, inclusive à noite.' },
      { trigger: 'Sobre dor', speech: 'Dói muito antes de ir ao banheiro, na barriga do lado direito.' },
      { trigger: 'Sobre apetite', speech: 'Ele come menos, diz que tem medo de comer porque depois dói e precisa ir ao banheiro.' },
      { trigger: 'Sobre febre', speech: 'Teve umas febrezinhas baixas, 37,5, mas não sempre.' },
      { trigger: 'Sobre boca e pele', speech: 'Apareceram umas bolhinhas na boca que doem, e uns caroços vermelhos nas pernas.' },
      { trigger: 'Sobre articulações', speech: 'Tá com dor nos joelhos, achei que era de crescimento.' },
      { trigger: 'Histórico familiar', speech: "O tio dele tem 'doença inflamatória intestinal', não sei o nome certo." },
      { trigger: 'Pergunta ativa 1', speech: 'O que ele pode ter, doutor? É câncer?' },
      { trigger: 'Pergunta ativa 2', speech: 'Tem cura?' }
    ],
    hiddenInfo: 'Diarreia noturna (acorda para evacuar à noite) — sinal importante de doença orgânica vs. funcional; só revela se perguntado sobre se acorda para ir ao banheiro. | Histórico familiar de doença de Crohn no tio paterno — só revela com detalhes se perguntado sobre histórico familiar de doenças intestinais.',
    actorBehavior: 'Mãe ansiosa, com medo de câncer. A criança está envergonhada com o problema intestinal. Colaborativos. Cabe ao candidato incluir a criança na consulta, dirigindo-se a ela diretamente.'
  },
  instC: {
    diagnosis: 'Doença de Crohn — início na infância — com manifestações intestinais (diarreia sanguinolenta, dor em FID, fissura perianal) e extraintestinais (aftas orais, eritema nodoso, artralgia), emagrecimento e anemia inflamatória.',
    differentials: [
      'Retocolite ulcerativa (RCU) — diarreia sanguinolenta, mas com predomínio retal, sem envolvimento perianal significativo nem fissuras; sem manifestações de intestino delgado.',
      'Tuberculose intestinal — dor em FID, emagrecimento; raro em crianças sem epidemiologia; pesquisa de BAAR nas fezes e PPD distinguem.',
      'Diarreia infecciosa crônica (Yersinia enterocolitica) — dor em FID simulando Crohn; copro e sorologias específicas distinguem.'
    ],
    context: 'Criança de 10 anos com quadro de 2 meses de diarreia sanguinolenta, dor em FID, emagrecimento, anemia e hipoalbuminemia, além de manifestações extraintestinais clássicas (aftas, eritema nodoso, artralgia, fissura perianal) e histórico familiar de DII. Calprotectina fecal elevada confirma inflamação intestinal ativa.',
    justify: 'Combinação de: diarreia sanguinolenta crônica + dor em FID + fissura perianal (lesão perianal típica de Crohn) + manifestações extraintestinais (aftas, eritema nodoso, artralgia) + marcadores inflamatórios elevados + calprotectina fecal > 200 µg/g + histórico familiar = forte suspeita de Doença de Crohn pediátrica. Diagnóstico definitivo por endoscopia com biópsia.',
    expectedAnamnesis: 'Duração, frequência e características das fezes (sangue, muco, noturna) | Dor abdominal (localização, relação com evacuação) | Perda de peso e apetite | Manifestações extraintestinais (aftas, artralgia, lesões de pele) | Febre intermitente | Histórico familiar de DII | Tratamentos anteriores | Desenvolvimento puberal (DII pode retardar)',
    expectedPhysical: 'Estado nutricional: peso, altura, IMC (curvas de crescimento) | Abdome: dor em FID, massas | Região perianal: fissuras, fístulas, abscessos (típicos de Crohn) | Pele: eritema nodoso, pioderma gangrenoso | Mucosa oral: aftas | Articulações: artrite periférica',
    expectedExams: [
      { exam: 'Hemograma + VHS + PCR + albumina', justify: 'Avaliação inflamatória e nutricional', expected: 'Anemia, inflamação, hipoalbuminemia' },
      { exam: 'Calprotectina fecal', justify: 'Marcador de inflamação intestinal — triagem', expected: 'Muito elevada' },
      { exam: 'Copro parasitológico (3 amostras)', justify: 'Afastar infecção', expected: 'Negativo' },
      { exam: 'Endoscopia digestiva alta e baixa com biópsia', justify: 'Diagnóstico definitivo — encaminhar', expected: 'Lesões transmurais, granulomas' }
    ],
    expectedConduct: 'Farmacológica: Tratamento inicial: corticoide oral (prednisona 1 mg/kg/dia) até avaliação pelo gastroenterologista. Suplementação nutricional. (ESPGHAN 2023 ⚠️ / SBP 2022) | Não farmacológica: Suporte nutricional (dieta enteral pode ser 1ª linha em crianças com Crohn — ESPGHAN ⚠️); avaliar crescimento e desenvolvimento puberal. | Encaminhamento: Gastroenterologia pediátrica urgente para endoscopia e biópsia; nutricionista pediátrica. | Orientações: Explicar que não é câncer; que é uma doença inflamatória do intestino tratável; que precisa de investigação detalhada. | Seguimento: Gastroenterologista pediátrico + equipe multidisciplinar.',
    expectedCommunication: 'Apresentação: Apresentar-se à mãe e diretamente à criança. | Comunicação do diagnóstico: "Pedro, e dona Patrícia: o que está acontecendo parece ser uma doença chamada Crohn, que é uma inflamação no intestino. Não é câncer. É uma doença crônica, mas tem tratamento." | Escuta ativa: Dirigir-se diretamente à criança para incluí-la no processo; acolher o medo da mãe.',
    criticalErrors: [
      'Não examinar a região perianal (fissura é sinal patognomônico de Crohn)',
      'Não reconhecer manifestações extraintestinais como pistas diagnósticas',
      'Tratar empiricamente com antibiótico sem encaminhar para investigação endoscópica',
      'Não incluir a criança na consulta (falar apenas com a mãe)',
      'Não solicitar calprotectina fecal como triagem de inflamação intestinal',
      'Não encaminhar obrigatoriamente ao gastroenterologista pediátrico'
    ]
  },
  instD: {
    title: 'CHECKLIST — CRIANÇA COM DIARREIA COM SANGUE E MUCO HÁ 2 MESES',
    sections: [
      {
        h: 'COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE',
        items: [
          { item: 'Apresentou-se e dirigiu-se diretamente à criança além da mãe', score: 0.5, ref: 'CFM 2.217/2018' },
          { item: 'Afastou diagnóstico de câncer com clareza e empatia', score: 0.5, ref: 'PNHAH/MS, 2001' },
          { item: 'Explicou a necessidade de encaminhamento e próximos passos', score: 0.5, ref: 'PNHAH/MS, 2001' }
        ]
      },
      {
        h: 'ANAMNESE',
        items: [
          { item: 'Investigou características da diarreia (sangue, muco, frequência, diarreia noturna)', score: 1.0, ref: 'SBP / ESPGHAN, 2023' },
          { item: 'Identificou manifestações extraintestinais (aftas, artralgia, lesões de pele)', score: 1.0, ref: 'SBP / ESPGHAN, 2023' },
          { item: 'Questionou histórico familiar de DII', score: 0.5, ref: 'SBP, 2022' },
          { item: 'Avaliou perda de peso e impacto no crescimento', score: 0.5, ref: 'SBP, 2022' }
        ]
      },
      {
        h: 'EXAME FÍSICO',
        items: [
          { item: 'Avaliou estado nutricional (peso, altura, curva de crescimento)', score: 0.5, ref: 'SBP, 2022' },
          { item: 'Examinou região perianal (fissura anal — sinal de Crohn)', score: 1.0, ref: 'SBP / ESPGHAN, 2023' },
          { item: 'Avaliou pele e mucosa oral (eritema nodoso, aftas)', score: 0.5, ref: 'SBP, 2022' }
        ]
      },
      {
        h: 'RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
        items: [
          { item: 'Formulou hipótese de Doença de Crohn com justificativa', score: 1.0, ref: 'SBP / ESPGHAN, 2023' },
          { item: 'Solicitou calprotectina fecal e marcadores inflamatórios', score: 0.5, ref: 'ESPGHAN, 2023 ⚠️' }
        ]
      },
      {
        h: 'CONDUTA E ORIENTAÇÃO AO PACIENTE',
        items: [
          { item: 'Encaminhou ao gastroenterologista pediátrico para endoscopia', score: 1.0, ref: 'SBP / ESPGHAN, 2023' },
          { item: 'Indicou suporte nutricional e avaliação com nutricionista', score: 0.5, ref: 'SBP, 2022' }
        ]
      }
    ]
  }
},


{
  id: 5,
  title: 'Criança com dor abdominal e fezes moles que pioram com estresse há 4 meses',
  sub: 'Ambulatório de Pediatria',
  tema: 'Pediatria',
  topic: 'Síndrome do Intestino Irritável — Pediátrica',
  level: 'moderado',
  cardAccent: '#FF7043',
  instA: {
    scenario: 'Ambulatório de Pediatria. Consultório, turno vespertino.',
    patient: 'Mãe de V.C., 12 anos, feminina, sem comorbidades, em período de provas escolares.',
    complaint: 'Dor de barriga frequente, fezes moles e gases há 4 meses, piora antes de provas na escola.',
    tasks: [
      'Realize a anamnese dirigida ao caso (com a paciente e a mãe)',
      'Realize o exame físico pertinente',
      'Formule a hipótese diagnóstica e os diferenciais',
      'Solicite os exames complementares necessários para afastar causas orgânicas',
      'Proponha a conduta e oriente a paciente e a família'
    ]
  },
  instB: {
    vitals: {
      PA: '100/64 mmHg',
      FC: '80 bpm',
      FR: '16 irpm',
      Tax: '36,5°C',
      Peso: '42 kg',
      Altura: '1,52 m',
      IMC: '18,2 kg/m²'
    },
    physicalGeneral: 'Bom estado geral, corada, hidratada, afebril, sem emagrecimento. Levemente ansiosa durante a consulta.',
    physicalSeg: 'ABDOME: Dor leve à palpação em fossa ilíaca esquerda e região periumbilical. Sem dor em FID. Sem massas. Sem hepatoesplenomegalia. Ruídos hidroaéreos normais. | REGIÃO PERIANAL: Normal, sem fissuras ou lesões. | ESTADO NUTRICIONAL: Preservado, curva de crescimento normal.',
    labs: [
      { test: 'Hemograma', val: 'Normal', ref: '—', alt: false },
      { test: 'VHS', val: '8 mm/h', ref: '< 20 mm/h', alt: false },
      { test: 'PCR', val: '2 mg/L', ref: '< 5 mg/L', alt: false },
      { test: 'Calprotectina fecal', val: '28 µg/g', ref: '< 50 µg/g', alt: false },
      { test: 'Copro parasitológico', val: 'Negativo', ref: '—', alt: false },
      { test: 'Anti-tTG IgA', val: 'Negativo', ref: '—', alt: false }
    ],
    image: null,
    note: 'Ator pode ser a mãe ou a própria adolescente (12 anos). Entregar sinais vitais ao início. Entregar exame físico ao exame. Exames somente se solicitados. Todos os resultados são normais — isso é fundamental para o diagnóstico de SII (critérios de Roma IV: ausência de alarmes + critérios funcionais).',
    patientProfile: 'Paciente: Valentina C., 12 anos, feminina, estudante do 7º ano. Mãe: Cláudia C., 40 anos.',
    script: [
      { trigger: 'Queixa principal', speech: 'Doutora, tenho muita dor de barriga e fico com diarreia, às vezes fico horas no banheiro antes da escola.' },
      { trigger: 'Sobre padrão da dor', speech: 'A dor melhora quando eu consigo ir ao banheiro. Às vezes fico com prisão de ventre, aí na outra semana diarreia.' },
      { trigger: 'Sobre relação com estresse', speech: 'Piora muito quando tem prova ou apresentação. Minha mãe diz que é nervosismo.' },
      { trigger: 'Sobre febre e sangue', speech: 'Febre não tenho. Sangue nas fezes também não.' },
      { trigger: 'Sobre sono', speech: 'Não acordo de madrugada pra ir ao banheiro, isso não acontece.' },
      { trigger: 'Sobre peso', speech: 'Não perdi peso, até engordei um pouco esse semestre.' },
      { trigger: 'Sobre impacto escolar', speech: 'Já faltei aula por causa da barriga. Fico envergonhada de sair da sala pra ir ao banheiro.' },
      { trigger: 'Sobre alimentação', speech: 'Quando como muito carboidrato ou lactose parece que piora.' },
      { trigger: 'Pergunta ativa 1', speech: 'É doença mesmo, doutora? Minha mãe acha que é frescura.' },
      { trigger: 'Pergunta ativa 2', speech: 'Tem cura? Vou ter isso para sempre?' }
    ],
    hiddenInfo: 'Está passando por bullying na escola — contexto psicossocial que explica o componente de estresse; só revela se perguntada diretamente sobre como está se sentindo na escola ou se tem algo preocupando. | Mãe tem síndrome do intestino irritável diagnosticada — histórico familiar; só revela se perguntado sobre doenças intestinais na família.',
    actorBehavior: 'A adolescente está um pouco envergonhada. Fica aliviada quando o médico valida seus sintomas. A mãe tende a minimizar ("é nervosismo"). Cabe ao candidato incluir a adolescente como protagonista da consulta.'
  },
  instC: {
    diagnosis: 'Síndrome do intestino irritável (SII) pediátrica — subtipo misto (alternância diarreia/constipação) — critérios de Roma IV, com gatilho psicossocial identificado (estresse escolar, bullying).',
    differentials: [
      'Doença inflamatória intestinal — diarreia crônica + sangue + marcadores inflamatórios elevados; aqui ausência de alarmes e exames normais afastam.',
      'Doença celíaca — diarreia + distensão abdominal + emagrecimento; anti-tTG negativo afasta.',
      'Intolerância à lactose — piora com laticínios, fezes líquidas; pode coexistir mas não explica o padrão funcional completo.'
    ],
    context: 'Adolescente com SII mista pelos critérios de Roma IV: dor abdominal recorrente associada a alteração do hábito intestinal, melhora com defecação, sem sinais de alarme (sem sangue, sem febre, sem emagrecimento, sem diarreia noturna, marcadores inflamatórios normais). Componente psicossocial significativo (estresse por provas, bullying).',
    justify: 'Critérios de Roma IV para SII pediátrica: dor abdominal recorrente ≥ 1x/semana nos últimos 3 meses, associada a ≥ 2 critérios: (1) relacionada à defecação, (2) associada a mudança na frequência das fezes, (3) associada a mudança na consistência das fezes. Ausência de sinais de alarme e exames complementares normais confirmam diagnóstico funcional.',
    expectedAnamnesis: 'Frequência, localização e características da dor | Relação da dor com defecação (melhora ou piora) | Padrão do hábito intestinal (alternância diarreia/constipação) | Sinais de alarme: diarreia noturna, sangue, emagrecimento, febre, história familiar de DII/câncer | Fatores desencadeantes (estresse, alimentos) | Impacto na qualidade de vida e escolar | Contexto psicossocial (bullying, ansiedade) | Histórico familiar (SII é hereditária)',
    expectedPhysical: 'Estado nutricional (peso, curva de crescimento) | Abdome: dor à palpação (geralmente leve, difusa ou em FIE) | Ausência de massas, organomegalias, sinais de alarme ao exame | Região perianal: normal (afastar Crohn)',
    expectedExams: [
      { exam: 'Hemograma + VHS + PCR', justify: 'Afastar processo inflamatório', expected: 'Normais' },
      { exam: 'Calprotectina fecal', justify: 'Afastar DII ativa', expected: '< 50 µg/g (normal)' },
      { exam: 'Anti-tTG IgA', justify: 'Afastar doença celíaca', expected: 'Negativo' },
      { exam: 'Copro parasitológico', justify: 'Afastar infecção', expected: 'Negativo' }
    ],
    expectedConduct: 'Farmacológica: Antiespasmódico se dor intensa (hioscina ou mebeverina). Laxativo osmótico (macrogol/polietilenoglicol) se constipação predominante. Probióticos podem auxiliar. (ESPGHAN 2022 ⚠️ / SBP) | Não farmacológica: Terapia cognitivo-comportamental (TCC) — evidência mais forte para SII pediátrica; orientação de higiene intestinal; dieta pobre em FODMAPs se sintomas alimentares evidentes. | Encaminhamento: Psicologia/psiquiatria infantil para TCC; gastroenterologia se dúvida diagnóstica ou refratariedade. | Orientações: Validar os sintomas da adolescente como reais e não "frescura"; explicar a SII como desordem da interação cérebro-intestino; empoderar a paciente no manejo. | Seguimento: Retorno em 4–6 semanas para reavaliação; acompanhamento psicológico.',
    expectedCommunication: 'Apresentação: Apresentar-se diretamente à adolescente, não apenas à mãe. | Comunicação do diagnóstico: "Valentina, o que você tem é real. Se chama síndrome do intestino irritável — o intestino de algumas pessoas é mais sensível a estresse. Não é frescura." | Escuta ativa: Validar os sintomas perante a mãe; incluir a adolescente como protagonista; perguntar como está na escola (contexto de bullying).',
    criticalErrors: [
      'Não solicitar exames para afastar causas orgânicas antes de diagnosticar SII',
      'Validar para a mãe que "é frescura" ou minimizar os sintomas',
      'Não incluir a adolescente como protagonista da consulta (falar apenas com a mãe)',
      'Não identificar o componente psicossocial (estresse/bullying)',
      'Não encaminhar para avaliação psicológica/TCC'
    ]
  },
  instD: {
    title: 'CHECKLIST — DOR ABDOMINAL E FEZES MOLES QUE PIORAM COM ESTRESSE',
    sections: [
      {
        h: 'COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE',
        items: [
          { item: 'Apresentou-se e dirigiu-se diretamente à adolescente como protagonista', score: 0.5, ref: 'CFM 2.217/2018' },
          { item: 'Validou os sintomas como reais perante a mãe e a paciente', score: 1.0, ref: 'PNHAH/MS, 2001' },
          { item: 'Perguntou como a paciente está se sentindo na escola (contexto psicossocial)', score: 0.5, ref: 'SBP, 2022' }
        ]
      },
      {
        h: 'ANAMNESE',
        items: [
          { item: 'Identificou critérios de Roma IV (dor + alteração hábito + melhora com evacuação)', score: 1.0, ref: 'Roma IV / SBP, 2022' },
          { item: 'Investigou sinais de alarme (diarreia noturna, sangue, febre, emagrecimento)', score: 1.0, ref: 'SBP / NASPGHAN, 2022' },
          { item: 'Questionou fatores desencadeantes (estresse, alimentação)', score: 0.5, ref: 'SBP, 2022' }
        ]
      },
      {
        h: 'EXAME FÍSICO',
        items: [
          { item: 'Avaliou estado nutricional e curva de crescimento', score: 0.5, ref: 'SBP, 2022' },
          { item: 'Examinou abdome (sem sinais de alarme ao exame) e região perianal', score: 0.5, ref: 'SBP, 2022' }
        ]
      },
      {
        h: 'RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
        items: [
          { item: 'Formulou hipótese de SII pelos critérios de Roma IV', score: 1.0, ref: 'Roma IV / SBP, 2022' },
          { item: 'Solicitou exames para afastar causas orgânicas (calprotectina, anti-tTG, PCR)', score: 0.5, ref: 'SBP / NASPGHAN, 2022' }
        ]
      },
      {
        h: 'CONDUTA E ORIENTAÇÃO AO PACIENTE',
        items: [
          { item: 'Indicou encaminhamento para TCC/psicologia', score: 1.0, ref: 'ESPGHAN 2022 ⚠️ / SBP' },
          { item: 'Orientou sobre dieta e higiene intestinal', score: 0.5, ref: 'SBP, 2022' },
          { item: 'Orientou retorno e seguimento', score: 0.5, ref: 'SBP, 2022' }
        ]
      }
    ]
  }
},

{
  id: 6,
  title: 'Criança franzina com barriga distendida, fezes gordurosas e atraso no crescimento',
  sub: 'UBS — Atenção Primária',
  tema: 'Pediatria',
  topic: 'Doença Celíaca',
  level: 'moderado',
  cardAccent: '#7B1FA2',
  instA: {
    scenario: 'Atenção Primária — UBS. Consultório, turno matutino.',
    patient: 'Mãe de E.R., 4 anos, feminina, sem diagnóstico prévio.',
    complaint: 'Criança com barriga inchada, fezes gordurosas que boiam, crescendo pouco há 1 ano.',
    tasks: [
      'Realize a anamnese dirigida ao caso',
      'Realize o exame físico pertinente',
      'Formule a hipótese diagnóstica e os diferenciais',
      'Solicite os exames complementares adequados',
      'Proponha a conduta e oriente a família'
    ]
  },
  instB: {
    vitals: {
      PA: 'Não aferida',
      FC: '92 bpm',
      FR: '22 irpm',
      Tax: '36,6°C',
      Peso: '13,2 kg (percentil < 3)',
      Altura: '96 cm (percentil < 3)',
      IMC: '14,3 kg/m²'
    },
    physicalGeneral: 'Regular estado geral, emagrecida, pálida (+/4+), cabelos opacos e quebradiços, abdome protuberante. Hipotonia muscular leve em membros.',
    physicalSeg: 'ABDOME: Distendido ("barriga de sapo"), ruídos hidroaéreos aumentados, sem dor significativa à palpação, sem massas, sem visceromegalias. | ESTADO NUTRICIONAL: Déficit estaturo-ponderal (peso e altura < p3), panículo adiposo muito reduzido, hipotrofia muscular em glúteos e coxas. | PELE: Dermatite herpetiforme (vesículas pruriginosas) em cotovelos e joelhos. | CABELOS: Opacos, com alopecia discreta.',
    labs: [
      { test: 'Hemograma', val: 'Hb 9,4 g/dL, VCM 68 fL (microcítica)', ref: 'Hb > 11 g/dL, VCM > 75 fL', alt: true },
      { test: 'Ferritina', val: '6 µg/L', ref: '15–200 µg/L', alt: true },
      { test: 'Anti-tTG IgA', val: '142 U/mL (positivo forte)', ref: '< 7 U/mL', alt: true },
      { test: 'IgA total', val: '48 mg/dL (normal para idade)', ref: '30–200 mg/dL', alt: false },
      { test: 'Albumina', val: '3,0 g/dL', ref: '3,5–5,0 g/dL', alt: true }
    ],
    image: null,
    note: 'Ator é a mãe. Entregar peso e altura com plotagem nas curvas ao início (ou informar verbalmente os percentis). Entregar exame físico ao exame. Exames somente se solicitados. O anti-tTG fortemente positivo (> 10x o limite) permite diagnóstico sem biópsia em contexto pediátrico (ESPGHAN 2020 ⚠️).',
    patientProfile: 'Mãe: Elaine R., 32 anos, cozinheira. Paciente: Eduarda R., 4 anos, feminina.',
    script: [
      { trigger: 'Queixa principal', speech: 'Doutor, minha filha não cresce, tá muito magrinha e a barriga dela é sempre inchada assim. As fezes boiam e têm cheiro horrível.' },
      { trigger: 'Sobre início', speech: 'Foi piorando aos poucos desde que ela tinha uns 2 anos, quando comecei a dar mais massinha e pão.' },
      { trigger: 'Sobre as fezes', speech: 'São pastosas, gordurosas, às vezes boiam. Faz 2 a 3 vezes por dia.' },
      { trigger: 'Sobre apetite', speech: 'Ela come bem, às vezes até bem, mas não engorda.' },
      { trigger: 'Sobre pele', speech: 'Ela tem umas bolhinhas que coçam muito nos cotovelos e joelhos, fica se coçando toda.' },
      { trigger: 'Sobre crescimento', speech: 'Ela é a menor da turma dela na creche. Toda família acha ela muito pequenininha pra idade.' },
      { trigger: 'Sobre anemia', speech: 'O médico do posto disse que ela tá anemiada, deu ferro, mas não melhorou muito.' },
      { trigger: 'Histórico familiar', speech: 'Uma tia dela tem intolerância ao glúten, não come pão nem massa.' },
      { trigger: 'Pergunta ativa 1', speech: 'O que ela tem, doutor? Por que o ferro não resolveu?' },
      { trigger: 'Pergunta ativa 2', speech: 'Ela vai poder comer normalmente um dia?' }
    ],
    hiddenInfo: 'Os sintomas pioraram progressivamente após introdução de glúten (pão, macarrão, biscoito) por volta dos 2 anos — só revela com detalhes se perguntado sobre quando iniciou alimentação com trigo/glúten. | Tia materna com diagnóstico de doença celíaca — só revela se perguntado sobre doenças intestinais ou autoimunes na família.',
    actorBehavior: 'Mãe preocupada, cansada de ir ao médico sem diagnóstico. Fica aliviada ao receber uma hipótese consistente. Preocupada com a dieta sem glúten ("como vou fazer isso?"). Colaborativa.'
  },
  instC: {
    diagnosis: 'Doença celíaca — forma clássica em criança de 4 anos — com síndrome de má absorção (diarreia gordurosa, distensão, emagrecimento, déficit estaturo-ponderal), anemia ferropriva refratária, dermatite herpetiforme e anti-tTG IgA fortemente positivo.',
    differentials: [
      'Fibrose cística — esteatorreia, déficit estaturo-ponderal, tosse crônica; teste do suor distingue; teste do pezinho teria identificado ao nascimento.',
      'Giardíase crônica — má absorção, diarreia; copro parasitológico positivo; aqui negativo.',
      'Alergia à proteína do leite de vaca — diarreia, emagrecimento; mas não causa dermatite herpetiforme e anti-tTG é negativo.'
    ],
    context: 'Criança de 4 anos com forma clássica de doença celíaca: síndrome de má absorção com diarreia gordurosa, distensão abdominal, déficit estaturo-ponderal grave, anemia ferropriva refratária ao ferro, dermatite herpetiforme e anti-tTG IgA > 10x o limite superior — permite diagnóstico sem biópsia (protocolo ESPGHAN 2020).',
    justify: 'Anti-tTG IgA > 10x o valor normal (142 U/mL, normal < 7) + IgA total normal (afasta deficiência de IgA como causa de falso-negativo) + quadro clínico típico = diagnóstico de doença celíaca pelo protocolo ESPGHAN 2020 sem necessidade de biópsia em crianças. Dermatite herpetiforme é manifestação extraintestinal patognomônica.',
    expectedAnamnesis: 'Início dos sintomas em relação à introdução de alimentos com glúten | Características das fezes (gordurosas, boiam, fétidas — esteatorreia) | Crescimento: peso e altura (curvas) | Apetite (preservado apesar do emagrecimento = má absorção) | Manifestações extraintestinais (dermatite herpetiforme, aftas, artralgia) | Anemia e resposta ao ferro | Histórico familiar de doença celíaca ou doenças autoimunes | Outras doenças autoimunes (tireoidite, DM1)',
    expectedPhysical: 'Estado nutricional: peso, altura < p3 (curvas de crescimento) | Abdome protuberante, distendido | Hipotrofia muscular em glúteos | Dermatite herpetiforme em cotovelos/joelhos (vesículas pruriginosas) | Palidez (anemia) | Cabelos e pele (sinais de deficiência de micronutrientes)',
    expectedExams: [
      { exam: 'Anti-tTG IgA', justify: 'Triagem sorológica de 1ª linha para celíaca', expected: '> 10x o limite (positivo forte)' },
      { exam: 'IgA total', justify: 'Afastar deficiência de IgA (falso-negativo)', expected: 'Normal' },
      { exam: 'Hemograma + ferritina', justify: 'Avaliar anemia ferropriva', expected: 'Anemia microcítica, ferropriva' },
      { exam: 'Endoscopia + biópsia de duodeno', justify: 'Confirmar diagnóstico se anti-tTG < 10x', expected: 'Atrofia vilositária (Marsh III)' }
    ],
    expectedConduct: 'Farmacológica: Suplementação de ferro e ácido fólico para correção das deficiências. Vitaminas lipossolúveis se deficiência. (SBP 2022) | Não farmacológica: Dieta isenta de glúten (trigo, cevada, centeio) — tratamento definitivo e único. Orientar sobre contaminação cruzada. Encaminhar para nutricionista especializada em doença celíaca. | Encaminhamento: Gastroenterologia pediátrica (para confirmação e acompanhamento); nutricionista; grupo de apoio à doença celíaca (ACELBRA). | Orientações: Explicar que é uma doença autoimune, não alergia; que a dieta sem glúten é para toda a vida; que há melhora significativa com a dieta; que outros familiares devem ser rastreados. | Seguimento: Anti-tTG para monitorar adesão à dieta; crescimento e desenvolvimento.',
    expectedCommunication: 'Apresentação: Apresentar-se, acolher a mãe que busca diagnóstico há tempo. | Comunicação do diagnóstico: "Acho que encontramos o motivo de sua filha não crescer. Ela tem doença celíaca — o intestino dela reage ao glúten, que está no pão, macarrão e biscoito. Com a dieta correta, ela vai crescer e melhorar muito." | Escuta ativa: Acolher a preocupação com a dieta sem glúten; reforçar que há muitas alternativas.',
    criticalErrors: [
      'Não solicitar anti-tTG IgA como triagem principal',
      'Não avaliar IgA total (risco de falso-negativo do anti-tTG)',
      'Orientar dieta sem glúten antes de confirmar o diagnóstico (altera sorologia e biópsia)',
      'Não avaliar curvas de crescimento (déficit estaturo-ponderal é o achado central)',
      'Não encaminhar ao gastroenterologista pediátrico para confirmação e acompanhamento'
    ]
  },
  instD: {
    title: 'CHECKLIST — CRIANÇA FRANZINA COM BARRIGA DISTENDIDA E FEZES GORDUROSAS',
    sections: [
      {
        h: 'COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE',
        items: [
          { item: 'Apresentou-se e acolheu a mãe que busca diagnóstico há tempo', score: 0.5, ref: 'CFM 2.217/2018' },
          { item: 'Explicou o diagnóstico e a dieta sem glúten em linguagem acessível', score: 0.5, ref: 'PNHAH/MS, 2001' },
          { item: 'Abordou a preocupação da mãe com a dieta sem julgamento e com soluções práticas', score: 0.5, ref: 'PNHAH/MS, 2001' }
        ]
      },
      {
        h: 'ANAMNESE',
        items: [
          { item: 'Relacionou início dos sintomas com introdução de glúten na alimentação', score: 1.0, ref: 'SBP / ESPGHAN, 2020' },
          { item: 'Investigou características das fezes (esteatorreia — gordurosas, boiam, fétidas)', score: 0.5, ref: 'SBP, 2022' },
          { item: 'Questionou histórico familiar de doença celíaca ou autoimunidade', score: 0.5, ref: 'SBP, 2022' },
          { item: 'Avaliou resposta prévia ao ferro (anemia refratária como sinal de alerta)', score: 0.5, ref: 'SBP, 2022' }
        ]
      },
      {
        h: 'EXAME FÍSICO',
        items: [
          { item: 'Avaliou peso e altura em curvas de crescimento (déficit estaturo-ponderal)', score: 1.0, ref: 'SBP, 2022' },
          { item: 'Identificou distensão abdominal e hipotrofia muscular', score: 0.5, ref: 'SBP, 2022' },
          { item: 'Reconheceu dermatite herpetiforme como manifestação extraintestinal', score: 0.5, ref: 'SBP / ESPGHAN, 2020' }
        ]
      },
      {
        h: 'RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
        items: [
          { item: 'Formulou hipótese de doença celíaca e solicitou anti-tTG IgA + IgA total', score: 1.0, ref: 'SBP / ESPGHAN, 2020' },
          { item: 'Reconheceu que anti-tTG > 10x dispensa biópsia em crianças (ESPGHAN 2020) ⚠️', score: 0.5, ref: 'ESPGHAN, 2020 ⚠️' }
        ]
      },
      {
        h: 'CONDUTA E ORIENTAÇÃO AO PACIENTE',
        items: [
          { item: 'Indicou dieta isenta de glúten como tratamento definitivo', score: 1.0, ref: 'SBP / ESPGHAN, 2020' },
          { item: 'Encaminhou ao gastroenterologista e nutricionista', score: 0.5, ref: 'SBP, 2022' },
          { item: 'Orientou rastreamento familiar', score: 0.5, ref: 'SBP / ESPGHAN, 2020' }
        ]
      }
    ]
  }
},

{
  id: 7,
  title: 'Bebê com tosse frequente, fezes gordurosas e não ganhando peso',
  sub: 'UBS — Atenção Primária',
  tema: 'Pediatria',
  topic: 'Fibrose Cística',
  level: 'moderado',
  cardAccent: '#00695C',
  instA: {
    scenario: 'Atenção Primária — UBS. Consultório, turno matutino.',
    patient: 'Mãe de N.F., 8 meses, masculino, teste do pezinho realizado mas resultado não foi buscado.',
    complaint: 'Bebê com tosse persistente desde o nascimento, fezes volumosas e gordurosas, não ganha peso adequadamente.',
    tasks: [
      'Realize a anamnese dirigida ao caso',
      'Realize o exame físico pertinente',
      'Formule a hipótese diagnóstica e os diferenciais',
      'Solicite os exames complementares adequados',
      'Proponha a conduta e encaminhamento'
    ]
  },
  instB: {
    vitals: {
      PA: 'Não aferida',
      FC: '118 bpm',
      FR: '36 irpm',
      Tax: '36,8°C',
      Peso: '5,9 kg (percentil < 3)',
      Altura: '68 cm (percentil 25)',
      IMC: '12,8 kg/m²'
    },
    physicalGeneral: 'Regular estado geral, emagrecido, panículo adiposo muito reduzido. Eupneico em repouso. Discreta cianose periorbitária. Ausência de baqueteamento digital (ausente ainda na idade). Suor com sabor salgado referido pela mãe.',
    physicalSeg: 'TÓRAX/PULMÃO: Tórax em tonel discreto. Ausculta com crepitações finas em bases bilateralmente e sibilos expiratórios dispersos. | ABDOME: Levemente distendido. Fígado palpável a 3 cm do RCD (hepatomegalia leve). Fezes volumosas e gordurosas na fralda. | ESTADO NUTRICIONAL: Desnutrição grave (peso < p3 com altura no p25) — desproporção característica.',
    labs: [
      { test: 'Hemograma', val: 'Leucócitos 14.200/mm³, neutrófilos 68%', ref: '—', alt: true },
      { test: 'Teste do suor (cloreto)', val: '72 mEq/L', ref: '< 30 mEq/L normal; > 60 mEq/L diagnóstico', alt: true },
      { test: 'Triagem neonatal (pezinho — IRT)', val: '96 ng/mL (coletado ao nascimento — não buscado)', ref: '< 70 ng/mL', alt: true },
      { test: 'Elastase fecal', val: '58 µg/g fezes', ref: '> 200 µg/g normal', alt: true }
    ],
    image: 'Radiografia de tórax (se solicitada): Hiperinsuflação pulmonar bilateral, espessamento peribrônquico, atelectasias subsegmentares em bases.',
    note: 'Ator é a mãe. Entregar peso e curva ao início. Entregar exame físico ao exame. Exames somente se solicitados. Destacar que o teste do pezinho foi coletado mas não buscado pela família — ponto pedagógico importante.',
    patientProfile: 'Mãe: Natália F., 24 anos, dona de casa. Paciente: Nícolas F., 8 meses, masculino.',
    script: [
      { trigger: 'Queixa principal', speech: 'Doutor, meu filho tosse desde que nasceu, quase não para. E ele não engorda, apesar de mamar bastante.' },
      { trigger: 'Sobre a tosse', speech: 'É uma tosse com catarro, às vezes fica com chiado no peito. Ficou internado uma vez por pneumonia com 5 meses.' },
      { trigger: 'Sobre as fezes', speech: 'As fezes dele são enormes e gordurosas, têm um cheiro muito forte. Às vezes boiam.' },
      { trigger: 'Sobre o suor', speech: 'Quando beijo ele, parece que tem gosto de sal. Isso é normal?' },
      { trigger: 'Sobre pezinho', speech: 'O pezinho foi feito no hospital, mas a gente não foi buscar o resultado. Ninguém avisou que era urgente.' },
      { trigger: 'Sobre o crescimento', speech: 'Ele mama muito, come papinha, mas não engorda. Fico desesperada.' },
      { trigger: 'Sobre internações', speech: 'Ficou internado uma vez com pneumonia, ficou 10 dias.' },
      { trigger: 'Pergunta ativa 1', speech: 'O que ele tem, doutor? É sério?' },
      { trigger: 'Pergunta ativa 2', speech: 'Tem cura? Vou perder meu filho?' }
    ],
    hiddenInfo: 'Pai da criança tem primo com "doença do pulmão desde bebê" — possível fibrose cística na família; só revela se perguntado sobre histórico familiar de doenças pulmonares ou intestinais em crianças. | Bebê foi internado por pneumonia aos 5 meses — primeiro episódio de infecção pulmonar grave; só revela detalhes se perguntado sobre internações anteriores.',
    actorBehavior: 'Mãe muito angustiada e com sentimento de culpa por não ter buscado o resultado do pezinho. Fica em colapso emocional ao perceber a gravidade. Cabe ao candidato acolher sem culpabilizar, mas ser claro sobre a gravidade e urgência do encaminhamento.'
  },
  instC: {
    diagnosis: 'Fibrose cística (FC) — diagnóstico tardio aos 8 meses — com insuficiência pancreática exócrina (esteatorreia, desnutrição grave) e comprometimento pulmonar (tosse crônica, pneumonias de repetição, hiperinsuflação).',
    differentials: [
      'Doença celíaca — esteatorreia e emagrecimento, mas sem tosse crônica e sem comprometimento pulmonar; anti-tTG distingue.',
      'Imunodeficiência primária — infecções recorrentes, mas sem insuficiência pancreática nem suor salgado.',
      'Asma grave — tosse e sibilos, mas sem esteatorreia nem desnutrição.'
    ],
    context: 'Lactente com fibrose cística de diagnóstico tardio (triagem neonatal positiva não buscada), apresentando a tríade clássica: doença pulmonar obstrutiva com infecções recorrentes + insuficiência pancreática exócrina com esteatorreia e desnutrição grave + suor salgado. Teste do suor confirma diagnóstico.',
    justify: 'Teste do suor > 60 mEq/L = diagnóstico de FC. Triagem neonatal (IRT elevado) positiva não buscada. Elastase fecal < 100 µg/g = insuficiência pancreática exócrina grave. Quadro clínico: tosse crônica com chiado + esteatorreia + desnutrição desproporcional (baixo peso com altura relativamente preservada) + suor salgado = FC.',
    expectedAnamnesis: 'Tosse desde o nascimento, características, frequência | Internações por pneumonia | Características das fezes (esteatorreia) | Ganho de peso e crescimento (curvas) | Suor salgado | Resultado do teste do pezinho (IRT) | Histórico familiar de FC ou doenças pulmonares/intestinais em crianças',
    expectedPhysical: 'Estado nutricional: peso, altura, percentis | Ausculta pulmonar: crepitações, sibilos, hiperinsuflação (tórax em tonel) | Abdome: hepatomegalia (cirrose biliar secundária) | Baqueteamento digital (tardio) | Toque de fezes na fralda (gordurosas)',
    expectedExams: [
      { exam: 'Teste do suor (iontoforese com pilocarpina)', justify: 'Padrão-ouro diagnóstico de FC', expected: '> 60 mEq/L' },
      { exam: 'Elastase fecal-1', justify: 'Confirmar insuficiência pancreática exócrina', expected: '< 100 µg/g' },
      { exam: 'Triagem neonatal (IRT — buscar resultado)', justify: 'Rastreamento já realizado', expected: 'Elevado' },
      { exam: 'Radiografia de tórax', justify: 'Avaliar comprometimento pulmonar', expected: 'Hiperinsuflação, espessamento brônquico' }
    ],
    expectedConduct: 'Farmacológica: Reposição de enzimas pancreáticas (pancreatina — lipase) a cada refeição. Vitaminas lipossolúveis (A, D, E, K). Fisioterapia respiratória. Antibioticoterapia nas exacerbações. (SBP 2022 / GBEFC 2017) | Não farmacológica: Fisioterapia respiratória diária (drenagem postural, técnicas de higiene brônquica); dieta hipercalórica e hiperproteica. | Encaminhamento: Urgente ao centro de referência para fibrose cística (multidisciplinar: pneumologista, gastroenterologista, nutricionista, fisioterapeuta, psicólogo). | Orientações: Explicar à mãe sem culpabilizá-la sobre o pezinho; a FC é genética; o encaminhamento urgente é fundamental para iniciar tratamento especializado. | Seguimento: Centro de referência para FC.',
    expectedCommunication: 'Apresentação: Apresentar-se, acolher a mãe antes de comunicar. | Comunicação do diagnóstico: "Natália, o seu filho tem uma doença chamada fibrose cística. É uma doença genética que afeta o pulmão e o intestino. É sério, mas com tratamento adequado ele pode ter uma vida boa." | Escuta ativa: Não culpar sobre o pezinho; normalizar o não entendimento da gravidade; focar no que pode ser feito agora.',
    criticalErrors: [
      'Não solicitar o teste do suor como exame diagnóstico principal',
      'Não questionar sobre o resultado do teste do pezinho',
      'Não encaminhar urgentemente ao centro de referência de FC',
      'Culpabilizar a mãe pela não busca do resultado do pezinho',
      'Não identificar insuficiência pancreática exócrina como causa da esteatorreia e desnutrição'
    ]
  },
  instD: {
    title: 'CHECKLIST — BEBÊ COM TOSSE, FEZES GORDUROSAS E SEM GANHO DE PESO',
    sections: [
      {
        h: 'COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE',
        items: [
          { item: 'Apresentou-se e acolheu a mãe com empatia antes de comunicar diagnóstico grave', score: 0.5, ref: 'CFM 2.217/2018' },
          { item: 'Comunicou diagnóstico grave sem culpabilizar pela não busca do resultado do pezinho', score: 0.5, ref: 'PNHAH/MS, 2001' },
          { item: 'Explicou FC de forma compreensível e com perspectiva de tratamento', score: 0.5, ref: 'PNHAH/MS, 2001' }
        ]
      },
      {
        h: 'ANAMNESE',
        items: [
          { item: 'Investigou tosse desde o nascimento e episódios de pneumonia', score: 0.5, ref: 'GBEFC, 2017' },
          { item: 'Identificou suor salgado como dado clínico relevante', score: 1.0, ref: 'GBEFC, 2017' },
          { item: 'Questionou sobre resultado do teste do pezinho (IRT)', score: 1.0, ref: 'PNS/MS, 2023' },
          { item: 'Investigou características das fezes (esteatorreia) e crescimento', score: 0.5, ref: 'GBEFC, 2017' }
        ]
      },
      {
        h: 'EXAME FÍSICO',
        items: [
          { item: 'Avaliou estado nutricional com plotagem em curvas de crescimento', score: 0.5, ref: 'SBP, 2022' },
          { item: 'Realizou ausculta pulmonar (crepitações, sibilos, hiperinsuflação)', score: 0.5, ref: 'GBEFC, 2017' },
          { item: 'Avaliou abdome (hepatomegalia) e fezes na fralda', score: 0.5, ref: 'GBEFC, 2017' }
        ]
      },
      {
        h: 'RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
        items: [
          { item: 'Formulou hipótese de fibrose cística', score: 1.0, ref: 'GBEFC, 2017' },
          { item: 'Solicitou teste do suor como exame diagnóstico principal', score: 1.0, ref: 'GBEFC, 2017' }
        ]
      },
      {
        h: 'CONDUTA E ORIENTAÇÃO AO PACIENTE',
        items: [
          { item: 'Encaminhou urgentemente ao centro de referência de FC', score: 1.0, ref: 'GBEFC 2017 / SBP 2022' },
          { item: 'Mencionou reposição de enzimas pancreáticas e fisioterapia respiratória', score: 0.5, ref: 'GBEFC, 2017' },
          { item: 'Orientou sobre natureza genética e suporte familiar', score: 0.5, ref: 'GBEFC, 2017' }
        ]
      }
    ]
  }
},

{
  id: 8,
  title: 'Bebê com choro excessivo, recusa alimentar e sangue nas fezes após troca de leite',
  sub: 'UBS — Atenção Primária',
  tema: 'Pediatria',
  topic: 'Alergia à Proteína do Leite de Vaca (APLV)',
  level: 'moderado',
  cardAccent: '#F57C00',
  instA: {
    scenario: 'Atenção Primária — UBS. Consultório, turno matutino.',
    patient: 'Mãe de B.T., 4 meses, feminina, previamente em aleitamento materno exclusivo.',
    complaint: 'Bebê com choro excessivo, recusa o seio, manchas vermelhas na pele e estrias de sangue nas fezes há 3 semanas, desde que a mãe voltou a consumir laticínios.',
    tasks: [
      'Realize a anamnese dirigida ao caso',
      'Realize o exame físico pertinente',
      'Formule a hipótese diagnóstica e os diferenciais',
      'Proponha a conduta terapêutica e oriente a mãe',
      'Esclareça dúvidas da mãe sobre amamentação e dieta'
    ]
  },
  instB: {
    vitals: {
      PA: 'Não aferida',
      FC: '126 bpm',
      FR: '40 irpm',
      Tax: '36,9°C',
      Peso: '5,8 kg',
      Altura: '60 cm',
      IMC: '16,1 kg/m²'
    },
    physicalGeneral: 'Bom estado geral, bem nutrida, levemente irritada. Sem desidratação. Dermatite atópica em face (bochechas) e dobras de cotovelos — eczema (+/4+).',
    physicalSeg: 'PELE: Eczema em bochechas e dobras de cotovelo, eritema, ressecamento cutâneo. | ABDOME: Levemente distendido, ruídos hidroaéreos aumentados, sem dor à palpação. | REGIÃO PERIANAL: Irritação perianal leve por fezes com sangue. | ESTADO NUTRICIONAL: Adequado para a idade.',
    labs: [
      { test: 'Hemograma', val: 'Eosinófilos 800/mm³ (10%)', ref: '< 500/mm³ (< 5%)', alt: true },
      { test: 'Proteína C reativa', val: '4 mg/L', ref: '< 5 mg/L', alt: false },
      { test: 'Sangue oculto nas fezes', val: 'Positivo', ref: 'Negativo', alt: true }
    ],
    image: null,
    note: 'Ator é a mãe. Entregar peso ao início. Entregar exame físico ao exame. Exames somente se solicitados. O diagnóstico de APLV mediada por células (não IgE) em lactentes é clínico — não há teste sorológico específico confiável nessa faixa etária.',
    patientProfile: 'Mãe: Bruna T., 25 anos, estudante de enfermagem. Bebê: Beatriz T., 4 meses, feminina.',
    script: [
      { trigger: 'Queixa principal', speech: 'Doutor, minha filha começou a ficar agitada, chorar muito e recusar o peito há 3 semanas. E apareceu sangue nas fezes dela.' },
      { trigger: 'Sobre alimentação materna', speech: 'Eu fiquei 3 meses sem comer laticínios porque ela estava com cólica. Aí o médico disse que podia comer de volta, e foi quando ela piorou.' },
      { trigger: 'Sobre a pele', speech: 'Apareceu essas manchas vermelhas no rosto e nos braços, coçam muito.' },
      { trigger: 'Sobre o sangue nas fezes', speech: 'Não é muito, mas dá pra ver estria vermelha nas fezes. Fica assustador.' },
      { trigger: 'Sobre aleitamento', speech: 'Quero muito continuar amamentando. Ouvi dizer que precisaria parar e dar fórmula.' },
      { trigger: 'Sobre histórico familiar', speech: 'Eu mesma tenho rinite e meu marido tem asma. Nossa família é toda alérgica.' },
      { trigger: 'Sobre crescimento', speech: 'Ela está crescendo bem, ganhando peso.' },
      { trigger: 'Pergunta ativa 1', speech: 'Precisa parar de amamentar, doutor?' },
      { trigger: 'Pergunta ativa 2', speech: 'Ela vai ser alérgica para sempre?' }
    ],
    hiddenInfo: 'O irmão mais velho da bebê foi diagnosticado com APLV aos 3 meses — histórico familiar direto; só revela se perguntado sobre irmãos com alergia ao leite. | A mãe voltou a consumir queijo, iogurte e leite condensado nos últimos 20 dias — detalhe da dieta materna; só revela se perguntado especificamente sobre o tipo de laticínio consumido.',
    actorBehavior: 'Mãe ansiosa, com medo de ter que parar de amamentar. Bem informada sobre o assunto (estudante de enfermagem). Fica aliviada quando informada que pode continuar amamentando com dieta de exclusão. Colaborativa.'
  },
  instC: {
    diagnosis: 'Alergia à proteína do leite de vaca (APLV) — mediada por células (não IgE) — em lactente de 4 meses em aleitamento materno, com proctocolite alérgica induzida por proteínas alimentares, dermatite atópica e eosinofilia.',
    differentials: [
      'Fissura anal — sangue nas fezes de lactente, mas localizada, sem eczema nem eosinofilia; ao exame perianal visível.',
      'Doença de Hirschsprung — constipação grave, distensão abdominal; sem eczema nem relação com dieta.',
      'Gastroenterite infecciosa — diarreia aguda com sangue, febre; aqui sem febre e quadro crônico.'
    ],
    context: 'Lactente de 4 meses em aleitamento materno com APLV não mediada por IgE (proctocolite alérgica), manifestando-se com sangue nas fezes, dermatite atópica, irritabilidade e eosinofilia periférica, diretamente relacionada ao retorno do consumo de laticínios pela mãe. Histórico familiar de atopia e irmão com APLV reforçam o diagnóstico.',
    justify: 'Relação temporal clara entre consumo de laticínios pela mãe e piora dos sintomas (sangue nas fezes, eczema, irritabilidade). Melhora anterior com exclusão de laticínios maternos confirma mecanismo alérgico. APLV mediada por células: diagnóstico clínico, sem necessidade de teste de RAST ou prick test nessa faixa etária e nessa forma clínica.',
    expectedAnamnesis: 'Relação temporal entre introdução de laticínios na dieta materna e início dos sintomas | Características das fezes (sangue oculto ou visível) | Manifestações cutâneas (eczema, urticária) | Irritabilidade, recusa alimentar, cólicas | Histórico familiar de atopia (asma, rinite, eczema, APLV) | Irmãos com APLV | Tentativas de exclusão prévia e resposta | Tipo de alimentação (AME — aleitamento materno exclusivo)',
    expectedPhysical: 'Estado nutricional (peso, crescimento) | Pele: eczema (localização, extensão, gravidade) | Abdome: distensão, RHA | Região perianal: fissuras, irritação',
    expectedExams: [
      { exam: 'Hemograma com diferencial', justify: 'Pesquisa de eosinofilia', expected: 'Eosinofilia' },
      { exam: 'Sangue oculto nas fezes', justify: 'Confirmar proctocolite', expected: 'Positivo' },
      { exam: 'RAST/IgE específica para leite de vaca', justify: 'Em casos IgE-mediados (reação imediata, anafilaxia); pouco útil no tipo celular', expected: 'Pode ser negativo na forma celular' }
    ],
    expectedConduct: 'Farmacológica: Nenhum medicamento específico — o tratamento é dietético. Emolientes para eczema. (SBP 2022 / BRASLAR 2022) | Não farmacológica: Manter aleitamento materno com dieta de exclusão de leite de vaca e derivados pela mãe por 2–4 semanas (avaliar resposta). Se desmame: fórmula extensamente hidrolisada (eHF) como 1ª opção; fórmula de aminoácidos (AAF) se falha da eHF. | Encaminhamento: Alergologista pediátrico para confirmação e acompanhamento; nutricionista para orientação da dieta materna. | Orientações: Explicar que pode e deve continuar amamentando com exclusão de laticínios; listar todos os alimentos a excluir (leite, queijo, iogurte, manteiga, caseína, whey); orientar sobre fontes de cálcio alternativas. | Seguimento: Retorno em 2–4 semanas para avaliar resposta à dieta; provocação oral com leite aos 6–12 meses para reavaliação.',
    expectedCommunication: 'Apresentação: Apresentar-se, acolher a mãe. | Comunicação do diagnóstico: "Sua filha tem alergia à proteína do leite de vaca. A boa notícia é que você pode continuar amamentando — só precisa tirar todos os laticínios da sua dieta." | Escuta ativa: Responder diretamente à preocupação com o aleitamento materno; ser específica sobre os alimentos a excluir.',
    criticalErrors: [
      'Orientar desmame sem indicação (APLV não é contraindicação ao aleitamento materno)',
      'Não orientar a exclusão de laticínios da dieta materna',
      'Prescrever fórmula com proteína intacta de leite de vaca como substituto',
      'Não reconhecer o eczema como manifestação de APLV',
      'Afirmar que o teste de RAST negativo exclui APLV na forma celular'
    ]
  },
  instD: {
    title: 'CHECKLIST — BEBÊ COM SANGUE NAS FEZES E ECZEMA APÓS LATICÍNIOS MATERNOS',
    sections: [
      {
        h: 'COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE',
        items: [
          { item: 'Apresentou-se e acolheu a preocupação da mãe com o aleitamento', score: 0.5, ref: 'CFM 2.217/2018' },
          { item: 'Informou que pode continuar amamentando com dieta de exclusão', score: 1.0, ref: 'SBP / BRASLAR, 2022' },
          { item: 'Explicou APLV em linguagem acessível', score: 0.5, ref: 'PNHAH/MS, 2001' }
        ]
      },
      {
        h: 'ANAMNESE',
        items: [
          { item: 'Identificou relação temporal entre laticínios maternos e sintomas', score: 1.0, ref: 'SBP / BRASLAR, 2022' },
          { item: 'Investigou manifestações cutâneas (eczema) como parte do quadro alérgico', score: 0.5, ref: 'SBP, 2022' },
          { item: 'Questionou histórico familiar de atopia e irmãos com APLV', score: 0.5, ref: 'SBP, 2022' }
        ]
      },
      {
        h: 'EXAME FÍSICO',
        items: [
          { item: 'Avaliou estado nutricional (peso e crescimento)', score: 0.5, ref: 'SBP, 2022' },
          { item: 'Identificou eczema (localização e gravidade) e irritação perianal', score: 0.5, ref: 'SBP, 2022' }
        ]
      },
      {
        h: 'RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
        items: [
          { item: 'Formulou hipótese de APLV não IgE-mediada (proctocolite alérgica)', score: 1.0, ref: 'SBP / BRASLAR, 2022' },
          { item: 'Reconheceu que o diagnóstico é clínico (RAST pode ser negativo na forma celular)', score: 0.5, ref: 'BRASLAR, 2022' }
        ]
      },
      {
        h: 'CONDUTA E ORIENTAÇÃO AO PACIENTE',
        items: [
          { item: 'Orientou dieta de exclusão de laticínios pela mãe mantendo o aleitamento', score: 1.0, ref: 'SBP / BRASLAR, 2022' },
          { item: 'Informou sobre fórmula extensamente hidrolisada como alternativa se necessário desmame', score: 0.5, ref: 'BRASLAR, 2022' },
          { item: 'Encaminhou ao alergologista e nutricionista', score: 0.5, ref: 'SBP, 2022' }
        ]
      }
    ]
  }
},


{
  id: 9,
  title: 'Criança com gases, barriga inchada e diarreia toda vez que bebe leite',
  sub: 'UBS — Atenção Primária',
  tema: 'Pediatria',
  topic: 'Intolerância à Lactose',
  level: 'moderado',
  cardAccent: '#F57C00',
  instA: {
    scenario: 'Atenção Primária — UBS. Consultório, turno matutino.',
    patient: 'Mãe de T.M., 9 anos, masculino, sem comorbidades.',
    complaint: 'Criança com dor abdominal, distensão e diarreia toda vez que consome leite ou sorvete, há cerca de 1 ano.',
    tasks: [
      'Realize a anamnese dirigida ao caso',
      'Realize o exame físico pertinente',
      'Formule a hipótese diagnóstica e os diferenciais',
      'Solicite os exames complementares se necessário',
      'Proponha a conduta e oriente a família'
    ]
  },
  instB: {
    vitals: {
      PA: '100/64 mmHg',
      FC: '82 bpm',
      FR: '18 irpm',
      Tax: '36,6°C',
      Peso: '30 kg (percentil 50)',
      Altura: '134 cm (percentil 50)',
      IMC: '16,7 kg/m²'
    },
    physicalGeneral: 'Bom estado geral, bem nutrido, corado, hidratado, afebril.',
    physicalSeg: 'ABDOME: Levemente distendido durante a consulta, ruídos hidroaéreos aumentados, sem dor à palpação, sem visceromegalias. | ESTADO NUTRICIONAL: Adequado (percentis normais). | PELE: Sem eczema ou manifestações cutâneas.',
    labs: [
      { test: 'Hemograma', val: 'Normal', ref: '—', alt: false },
      { test: 'PCR', val: '2 mg/L', ref: '< 5 mg/L', alt: false },
      { test: 'Anti-tTG IgA', val: 'Negativo', ref: '—', alt: false },
      { test: 'Teste do hidrogênio expirado (H₂) — lactose', val: 'Positivo (aumento > 20 ppm após 50g lactose)', ref: '< 20 ppm de aumento', alt: true }
    ],
    image: null,
    note: 'Ator pode ser a mãe e/ou a própria criança (9 anos). Entregar sinais vitais ao início. Entregar exame físico ao exame. Exames somente se solicitados. O teste do hidrogênio expirado é o padrão diagnóstico não invasivo — disponível em centros de referência; pode ser encaminhado.',
    patientProfile: 'Mãe: Tatiane M., 35 anos, técnica de enfermagem. Paciente: Thiago M., 9 anos, masculino.',
    script: [
      { trigger: 'Queixa principal', speech: 'Doutora, sempre que meu filho toma leite ou come sorvete, ele fica com a barriga estufada, cheia de gases e começa a ter diarreia.' },
      { trigger: 'Sobre início', speech: 'Foi ficando mais claro há uns 12 meses. Ele mesmo já percebeu que o leite faz mal.' },
      { trigger: 'Sobre os sintomas', speech: 'É barriga estufada, muitos gases, dor de barriga e diarreia aquosa umas 2 horas depois que bebe o leite.' },
      { trigger: 'Sobre outros alimentos', speech: 'Com queijo curado e iogurte parece que é mais fraco. Com leite puro e sorvete é sempre forte.' },
      { trigger: 'Sobre alergia', speech: 'Fiz teste de alergia num alergista particular, deu tudo negativo.' },
      { trigger: 'Sobre crescimento', speech: 'Ele está crescendo bem, na faixa normal. Não perdeu peso.' },
      { trigger: 'Sobre histórico familiar', speech: 'Eu mesma não consigo tomar leite também, fico igual a ele.' },
      { trigger: 'Pergunta ativa 1', speech: 'Isso é alergia ao leite, doutora?' },
      { trigger: 'Pergunta ativa 2', speech: 'Ele pode comer queijo? E iogurte?' }
    ],
    hiddenInfo: 'A mãe tem intolerância à lactose diagnosticada — fator genético relevante; só revela com detalhes se perguntado sobre parentes com o mesmo problema. | A criança é descendente de asiáticos pelo lado paterno (avô japonês) — população com alta prevalência de intolerância à lactose primária; só revela se perguntado sobre ascendência étnica ou familiar.',
    actorBehavior: 'Mãe tranquila, bem informada. A criança (9 anos) pode responder perguntas diretas. Curiosos sobre o que pode ou não comer. Colaborativos.'
  },
  instC: {
    diagnosis: 'Intolerância à lactose primária (hipolactasia do tipo adulto) — de início precoce provavelmente favorecida por ascendência asiática — com sintomas digestivos típicos (diarreia, distensão, gases) exclusivamente após consumo de lactose.',
    differentials: [
      'APLV — reação imediata com urticária, vômitos, anafilaxia (IgE-mediada) ou fezes com sangue/eczema (celular); aqui apenas digestivo, sem sangue, sem eczema, teste de alergia negativo.',
      'Doença celíaca — diarreia crônica, emagrecimento, déficit de crescimento; anti-tTG negativo afasta.',
      'Síndrome do intestino irritável — dor abdominal + alteração do hábito, mas não exclusivamente relacionado à lactose.'
    ],
    context: 'Criança de 9 anos com intolerância à lactose primária, provavelmente de início precoce favorecido por ascendência asiática (avô paterno japonês), apresentando a tríade clássica: diarreia osmótica + distensão abdominal + flatulência após ingestão de lactose, sem manifestações alérgicas, sem emagrecimento e com estado nutricional preservado.',
    justify: 'Relação direta entre ingestão de lactose e sintomas osmóticos (diarreia aquosa, gases, distensão); tolerância de laticínios com menor teor de lactose (queijo curado, iogurte); ausência de manifestações alérgicas; teste de alergia negativo; estado nutricional preservado; histórico familiar e étnico compatíveis. Teste do hidrogênio expirado confirma.',
    expectedAnamnesis: 'Relação entre consumo de lactose e sintomas (dose-dependência) | Tolerância a laticínios fermentados (queijo, iogurte — menor lactose) | Ausência de manifestações alérgicas (urticária, sangue nas fezes, eczema) | Estado nutricional (crescimento preservado) | Histórico familiar de intolerância à lactose | Ascendência étnica (asiática, africana — maior prevalência) | Tentativas de exclusão e resposta',
    expectedPhysical: 'Estado nutricional: peso, altura em percentis normais | Abdome: distensão leve, RHA aumentados | Ausência de eczema, urticária (afastar APLV)',
    expectedExams: [
      { exam: 'Teste do hidrogênio expirado (H₂)', justify: 'Padrão-ouro não invasivo para intolerância à lactose', expected: 'Positivo' },
      { exam: 'Anti-tTG IgA', justify: 'Afastar doença celíaca', expected: 'Negativo' },
      { exam: 'Dieta de exclusão/reintrodução', justify: 'Diagnóstico clínico e terapêutico', expected: 'Melhora com exclusão' }
    ],
    expectedConduct: 'Farmacológica: Lactase exógena (gotas ou comprimidos) antes do consumo de laticínios — uso opcional e sintomático. (SBP 2022) | Não farmacológica: Adaptação da dieta: reduzir lactose (não necessariamente excluir tudo); preferir laticínios fermentados (iogurte, queijo curado — menor teor de lactose); leite sem lactose como alternativa; garantir aporte de cálcio. NÃO restringir desnecessariamente toda proteína do leite (não é alergia). | Encaminhamento: Nutricionista para orientação dietética e garantia do aporte de cálcio. | Orientações: Explicar a diferença entre intolerância (deficiência de enzima) e alergia (resposta imune); que pode consumir laticínios em quantidades toleráveis; que queijo e iogurte geralmente são bem tolerados. | Seguimento: Retorno em 4–6 semanas para avaliar adaptação dietética.',
    expectedCommunication: 'Apresentação: Apresentar-se à mãe e ao Thiago. | Comunicação do diagnóstico: "Thiago tem intolerância à lactose, que é diferente de alergia. Falta uma enzima para digerir o açúcar do leite. Não precisa cortar tudo — pode comer queijo, iogurte, e existem leites sem lactose." | Escuta ativa: Responder diretamente às perguntas do paciente e da mãe sobre alimentos permitidos.',
    criticalErrors: [
      'Confundir intolerância à lactose com alergia ao leite (APLV) — diagnósticos distintos com condutas diferentes',
      'Recomendar exclusão total de todos os laticínios sem orientação nutricional',
      'Não garantir aporte de cálcio na dieta',
      'Não investigar doença celíaca como diagnóstico diferencial'
    ]
  },
  instD: {
    title: 'CHECKLIST — CRIANÇA COM GASES E DIARREIA AO CONSUMIR LEITE',
    sections: [
      {
        h: 'COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE',
        items: [
          { item: 'Apresentou-se e incluiu a criança na consulta', score: 0.5, ref: 'CFM 2.217/2018' },
          { item: 'Explicou a diferença entre intolerância e alergia ao leite em linguagem acessível', score: 1.0, ref: 'SBP / BRASLAR, 2022' },
          { item: 'Respondeu objetivamente sobre alimentos permitidos (queijo, iogurte)', score: 0.5, ref: 'SBP, 2022' }
        ]
      },
      {
        h: 'ANAMNESE',
        items: [
          { item: 'Identificou relação dose-dependente entre lactose e sintomas', score: 1.0, ref: 'SBP, 2022' },
          { item: 'Investigou tolerância a laticínios fermentados (queijo, iogurte)', score: 0.5, ref: 'SBP, 2022' },
          { item: 'Questionou ausência de manifestações alérgicas (sangue, eczema, urticária)', score: 0.5, ref: 'SBP / BRASLAR, 2022' },
          { item: 'Perguntou sobre histórico familiar e ascendência étnica', score: 0.5, ref: 'SBP, 2022' }
        ]
      },
      {
        h: 'EXAME FÍSICO',
        items: [
          { item: 'Avaliou estado nutricional (crescimento preservado)', score: 0.5, ref: 'SBP, 2022' },
          { item: 'Confirmou ausência de eczema/urticária (diferencial APLV)', score: 0.5, ref: 'SBP, 2022' }
        ]
      },
      {
        h: 'RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
        items: [
          { item: 'Formulou hipótese de intolerância à lactose e afastou APLV', score: 1.0, ref: 'SBP / BRASLAR, 2022' },
          { item: 'Solicitou teste do hidrogênio expirado e/ou anti-tTG', score: 0.5, ref: 'SBP, 2022' }
        ]
      },
      {
        h: 'CONDUTA E ORIENTAÇÃO AO PACIENTE',
        items: [
          { item: 'Orientou adaptação dietética (reduzir lactose, não exclusão total) com garantia de cálcio', score: 1.0, ref: 'SBP 2022 / RENAME 2022' },
          { item: 'Encaminhou para nutricionista', score: 0.5, ref: 'SBP, 2022' },
          { item: 'Mencionou lactase exógena como opção sintomática', score: 0.5, ref: 'SBP, 2022' }
        ]
      }
    ]
  }
},

{
  id: 10,
  title: 'Recém-nascido com resultado alterado no teste do pezinho — PKU',
  sub: 'UBS — Atenção Primária',
  tema: 'Pediatria',
  topic: 'Fenilcetonúria — Teste do Pezinho',
  level: 'moderado',
  cardAccent: '#1565C0',
  instA: {
    scenario: 'Atenção Primária — UBS. Consultório, turno matutino. A mãe foi convocada pelo resultado alterado do teste do pezinho do bebê.',
    patient: 'Mãe de H.S., 18 dias de vida, masculino, a termo, peso ao nascer 3.320g.',
    complaint: 'Mãe convocada pela UBS após resultado alterado no teste do pezinho — fenilalanina elevada.',
    tasks: [
      'Realize a anamnese dirigida ao caso (com a mãe)',
      'Realize o exame físico pertinente no recém-nascido',
      'Explique o significado do resultado alterado e a hipótese diagnóstica',
      'Solicite os exames complementares confirmatórios',
      'Oriente a mãe sobre os próximos passos e encaminhamento urgente'
    ]
  },
  instB: {
    vitals: {
      PA: 'Não aferida',
      FC: '138 bpm',
      FR: '44 irpm',
      Tax: '36,8°C',
      Peso: '3.680 g (ganho de peso adequado)',
      Altura: '51 cm',
      IMC: '—'
    },
    physicalGeneral: 'Bom estado geral, ativo, reativo, normocorado, hidratado. Fontanela anterior normotensa. Sem dismorfias. Sem hepatoesplenomegalia. Odor de urina normal (fenilcetonúria: odor de "mofo" pode aparecer mais tarde se não tratada). Reflexos neonatais presentes.',
    physicalSeg: 'NEUROLÓGICO NEONATAL: Reflexos primitivos presentes (Moro, preensão, sucção). Tônus normal. Sem convulsões. | PELE: Normocorada. Sem hipopigmentação ainda (surge tardiamente se não tratada). | ASPECTO GERAL: Fenótipo normal ao nascimento — sem manifestações clínicas ainda (fase assintomática).',
    labs: [
      { test: 'Triagem neonatal — fenilalanina (pezinho)', val: '18 mg/dL', ref: '< 2 mg/dL (triagem)', alt: true },
      { test: 'Fenilalanina plasmática confirmatória', val: '22 mg/dL', ref: '< 2 mg/dL', alt: true },
      { test: 'Tirosina plasmática', val: '0,8 mg/dL', ref: '0,5–2,0 mg/dL', alt: false },
      { test: 'Razão Fen/Tir', val: '27,5', ref: '< 3 (normal)', alt: true }
    ],
    image: null,
    note: 'Ator é a mãe (muito ansiosa por ter sido convocada). Entregar peso e sinais vitais ao início. Entregar exame físico ao exame. Resultado do pezinho deve ser apresentado no início como o motivo da consulta. Resultados confirmatórios somente se solicitados. Reforçar que o bebê está assintomático — esse é o objetivo da triagem neonatal.',
    patientProfile: 'Mãe: Helena S., 22 anos, estudante. Bebê: Hugo S., 18 dias de vida, masculino, a termo.',
    script: [
      { trigger: 'Queixa principal', speech: 'Doutor, recebi uma ligação do posto dizendo que o resultado do pezinho do meu filho deu alterado. Fiquei apavorada, não consigo dormir pensando no que pode ser.' },
      { trigger: 'Sobre o bebê', speech: 'Ele está bem, mamando, crescendo, não tem nada diferente que eu possa ver.' },
      { trigger: 'Sobre o parto', speech: 'Nasceu de parto normal, de 39 semanas, pesou 3.320g. Saiu tudo bem no hospital.' },
      { trigger: 'Sobre amamentação', speech: 'Estou amamentando exclusivamente, ele pega bem no seio.' },
      { trigger: 'Sobre histórico familiar', speech: 'Não sei de ninguém na família com problema assim. Mas somos primos, eu e o pai do bebê.' },
      { trigger: 'Sobre desenvolvimento', speech: 'Ele parece normal, reage aos sons, olha pra mim.' },
      { trigger: 'Pergunta ativa 1', speech: 'O que é fenilcetonúria? O meu filho vai ter problema no desenvolvimento?' },
      { trigger: 'Pergunta ativa 2', speech: 'Precisa parar de amamentar?' }
    ],
    hiddenInfo: 'Os pais são primos de segundo grau — consanguinidade aumenta risco de doenças autossômicas recessivas como PKU; só revela se perguntado sobre grau de parentesco entre os pais. | Uma tia da mãe tem "problema metabólico que precisou de dieta especial" — possível PKU heterozigoto ou outro IEM; só revela se perguntado sobre histórico familiar de doenças metabólicas.',
    actorBehavior: 'Muito ansiosa, chorosa. Alivia progressivamente conforme o candidato explica que o bebê está bem por enquanto e que o diagnóstico precoce é positivo. Cabe ao candidato transmitir urgência sem causar pânico desnecessário.'
  },
  instC: {
    diagnosis: 'Fenilcetonúria clássica (PKU) — diagnóstico pela triagem neonatal — criança assintomática em fase de janela terapêutica. Doença autossômica recessiva por deficiência de fenilalanina hidroxilase.',
    differentials: [
      'Hiperfenilalaninemia benigna — fenilalanina levemente elevada (2–6 mg/dL), sem comprometimento se não tratada; aqui Fen = 22 mg/dL com razão Fen/Tir > 3 = PKU clássica.',
      'Deficiência de tetrobiopterina (BH4) — PKU atípica com neurológico precoce; dosagem de pterinas distingue.',
      'Tirosinemia transitória neonatal — tirosina elevada; aqui tirosina normal.'
    ],
    context: 'Recém-nascido assintomático com PKU clássica diagnosticada pela triagem neonatal (fenilalanina 22 mg/dL, razão Fen/Tir > 3). A triagem identifica a doença na janela assintomática, antes do dano neurológico irreversível que ocorre com o acúmulo de fenilalanina. Tratamento dietético imediato é essencial.',
    justify: 'Fenilalanina plasmática > 20 mg/dL + razão Fenilalanina/Tirosina > 3 + triagem neonatal elevada = PKU clássica. Bebê assintomático porque a triagem foi realizada antes do dano cerebral. Sem tratamento, acúmulo de fenilalanina causa deficiência intelectual severa, convulsões, microcefalia e hipopigmentação.',
    expectedAnamnesis: 'Data da coleta do pezinho e data do resultado | Estado atual do bebê (alimentação, comportamento, desenvolvimento) | Tipo de alimentação (AME — proteína de leite materno contém fenilalanina) | Consanguinidade dos pais | Histórico familiar de PKU ou doenças metabólicas | Intercorrências no parto e período neonatal',
    expectedPhysical: 'Peso e crescimento (avaliar ganho ponderal) | Estado neurológico neonatal (reflexos primitivos, tônus) | Pele (hipopigmentação — surge tardiamente) | Fontanela (normotensa) | Dismorfias (ausentes na PKU)',
    expectedExams: [
      { exam: 'Fenilalanina e tirosina plasmáticas', justify: 'Confirmar triagem e classificar gravidade', expected: 'Fen > 20 mg/dL, Razão Fen/Tir > 3' },
      { exam: 'Dosagem de pterinas urinárias', justify: 'Afastar deficiência de BH4 (PKU atípica)', expected: 'Normal (PKU clássica)' },
      { exam: 'Teste de resposta ao BH4 (sapropterina)', justify: 'Avaliar responsividade em PKU leve-moderada ⚠️', expected: '—' }
    ],
    expectedConduct: 'Farmacológica: Sapropterina (Kuvan) em casos responsivos — avaliar no centro de referência. (CONITEC/MS 2022) | Não farmacológica: Dieta hipofenilalanina imediata — redução drástica de proteína natural + fórmula metabólica de aminoácidos sem fenilalanina. O aleitamento materno pode ser mantido de forma controlada (quantidades monitoradas de fenilalanina). | Encaminhamento: Encaminhamento URGENTE (em 24–48h) ao serviço de referência em erros inatos do metabolismo (SREIM) — antes de qualquer atraso que possa causar dano neurológico. | Orientações: Explicar à mãe que o diagnóstico precoce é uma grande conquista; que sem tratamento haveria dano cerebral; que com tratamento o bebê pode ter desenvolvimento normal; que é urgente o encaminhamento. | Seguimento: SREIM — acompanhamento multiprofissional (médico metabolista, nutricionista, psicólogo).',
    expectedCommunication: 'Apresentação: Apresentar-se, acolher a ansiedade da mãe. | Comunicação do diagnóstico: "Helena, o resultado indica que o Hugo tem uma doença chamada fenilcetonúria. Mas a boa notícia é que encontramos antes de ele ter qualquer problema. Com tratamento imediato, ele pode se desenvolver completamente normal." | Escuta ativa: Validar a ansiedade; focar na mensagem positiva do diagnóstico precoce; ser claro sobre urgência sem causar pânico.',
    criticalErrors: [
      'Não encaminhar urgentemente ao SREIM (cada dia sem tratamento pode causar dano neurológico)',
      'Orientar desmame imediato sem indicação (AME pode ser mantido com controle de fenilalanina)',
      'Não explicar a natureza genética e a necessidade de aconselhamento genético dos pais',
      'Minimizar a urgência do encaminhamento',
      'Não solicitar fenilalanina plasmática confirmatória'
    ]
  },
  instD: {
    title: 'CHECKLIST — RESULTADO ALTERADO NO PEZINHO — FENILCETONÚRIA',
    sections: [
      {
        h: 'COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE',
        items: [
          { item: 'Acolheu a ansiedade da mãe e comunicou o diagnóstico com empatia', score: 0.5, ref: 'CFM 2.217/2018' },
          { item: 'Transmitiu a mensagem positiva do diagnóstico precoce (bebê ainda assintomático)', score: 1.0, ref: 'PNS/MS, 2023' },
          { item: 'Explicou PKU em linguagem acessível (acúmulo de proteína que pode afetar o cérebro)', score: 0.5, ref: 'PNS/MS, 2023' }
        ]
      },
      {
        h: 'ANAMNESE',
        items: [
          { item: 'Verificou data da coleta e resultado do pezinho', score: 0.5, ref: 'PNS/MS, 2023' },
          { item: 'Investigou estado atual do bebê (alimentação, comportamento)', score: 0.5, ref: 'PNS/MS, 2023' },
          { item: 'Questionou consanguinidade dos pais e histórico familiar de doenças metabólicas', score: 0.5, ref: 'PNS/MS, 2023' }
        ]
      },
      {
        h: 'EXAME FÍSICO',
        items: [
          { item: 'Avaliou ganho de peso e estado neurológico neonatal (reflexos, tônus)', score: 0.5, ref: 'SBP, 2022' },
          { item: 'Verificou ausência de dismorfias e de manifestações clínicas (fase assintomática)', score: 0.5, ref: 'SBP, 2022' }
        ]
      },
      {
        h: 'RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
        items: [
          { item: 'Formulou hipótese de PKU clássica com base no valor de fenilalanina e razão Fen/Tir', score: 1.0, ref: 'PNS/MS, 2023' },
          { item: 'Solicitou dosagem confirmatória de fenilalanina e tirosina plasmáticas', score: 1.0, ref: 'PNS/MS, 2023' }
        ]
      },
      {
        h: 'CONDUTA E ORIENTAÇÃO AO PACIENTE',
        items: [
          { item: 'Encaminhou urgentemente ao SREIM (serviço de referência em erros inatos do metabolismo)', score: 1.5, ref: 'PNS/MS, 2023' },
          { item: 'Informou sobre a possibilidade de manter AME de forma controlada', score: 0.5, ref: 'PNS/MS, 2023' },
          { item: 'Orientou sobre natureza genética e aconselhamento para os pais', score: 0.5, ref: 'PNS/MS, 2023' }
        ]
      }
    ]
  }
},

{
  id: 11,
  title: 'Bebê com resultado alterado no pezinho — hormônio da tireoide',
  sub: 'UBS — Atenção Primária',
  tema: 'Pediatria',
  topic: 'Hipotireoidismo Congênito — Teste do Pezinho',
  level: 'moderado',
  cardAccent: '#1565C0',
  instA: {
    scenario: 'UBS — Atenção Primária. Consultório, turno matutino. Mãe convocada pelo resultado alterado do pezinho.',
    patient: 'Mãe de A.L., 15 dias de vida, feminina, a termo, parto normal.',
    complaint: 'Recém-nascida convocada por TSH elevado na triagem neonatal. Mãe refere que bebê está sonolenta e come pouco.',
    tasks: [
      'Realize a anamnese dirigida ao caso',
      'Realize o exame físico pertinente no recém-nascido',
      'Explique o diagnóstico e sua importância',
      'Solicite os exames confirmatórios',
      'Inicie o tratamento e encaminhe adequadamente'
    ]
  },
  instB: {
    vitals: {
      PA: 'Não aferida',
      FC: '112 bpm',
      FR: '38 irpm',
      Tax: '36,2°C (hipotermia leve)',
      Peso: '3.420 g (peso nascimento: 3.350g — ganho adequado)',
      Altura: '50 cm',
      IMC: '—'
    },
    physicalGeneral: 'Regular estado geral, hipotônica, sonolenta, choro fraco ("rouco"). Pele seca e fria ao toque. Macroglossia discreta. Fontanela posterior aberta (> 0,5 cm). Icterícia neonatal prolongada (+/4+). Reflexos neonatais presentes porém com latência aumentada. Fácies mixedematosa discretamente insinuada.',
    physicalSeg: 'NEUROLÓGICO: Hipotonia generalizada, choro fraco e rouco, sucção débil. | PELE: Seca, pele marmórea, edema discreto generalizado. | ABDOME: Hérnia umbilical presente. | TIREÓIDE: Glândula não palpável (ausência ou ectopia).',
    labs: [
      { test: 'TSH neonatal (pezinho)', val: '68 mUI/L', ref: '< 10 mUI/L', alt: true },
      { test: 'TSH sérico confirmatório', val: '84 mUI/L', ref: '0,5–5,0 mUI/L', alt: true },
      { test: 'T4 livre', val: '0,4 ng/dL', ref: '0,8–2,0 ng/dL', alt: true }
    ],
    image: 'Cintilografia ou USG de tireoide (se solicitada): Glândula tireoide não visualizada em posição eutópica — provável agenesia ou ectopia (confirmar com cintilografia).',
    note: 'Ator é a mãe. Entregar peso e temperatura ao início. Entregar exame físico ao exame (enfatizar hipotonia, sonolência, macroglossia, fontanela posterior aberta). Exames laboratoriais somente se solicitados. Destacar que a janela terapêutica para o SNC é curta — início imediato de levotiroxina é essencial.',
    patientProfile: 'Mãe: Ana L., 28 anos, professora. Bebê: Alice L., 15 dias de vida, feminina, a termo.',
    script: [
      { trigger: 'Queixa principal', speech: 'Doutor, me ligaram do posto dizendo que o resultado do pezinho estava alterado. Tem algo no hormônio da tireoide.' },
      { trigger: 'Sobre o bebê', speech: 'Ela é muito dorminhoca, às vezes preciso acordar pra mamar. E quando chora é aquele choro bem fraquinho, diferente.' },
      { trigger: 'Sobre mamada', speech: 'Mama devagar, cansa muito, às vezes adormece no meio.' },
      { trigger: 'Sobre a pele', speech: 'A pele dela parece seca, meio fria. E ainda tá um pouco amarelada, achei que era normal de recém-nascido.' },
      { trigger: 'Sobre o umbigo', speech: 'Tem uma hérnia no umbigo, o médico do hospital disse que é comum.' },
      { trigger: 'Sobre a gravidez', speech: 'A gravidez foi normal, fiz pré-natal todo. Sem problema na tireoide.' },
      { trigger: 'Sobre parto', speech: 'Nasceu de parto normal, de 39 semanas.' },
      { trigger: 'Pergunta ativa 1', speech: 'O que é hipotireoidismo congênito? Vai afetar o cérebro dela?' },
      { trigger: 'Pergunta ativa 2', speech: 'Ela vai tomar remédio para sempre?' }
    ],
    hiddenInfo: 'A mãe não fez dosagem de TSH durante o pré-natal — hipotireoidismo materno poderia ter sido identificado; só revela se perguntado sobre exames da tireoide na gestação. | Bebê com icterícia prolongada (> 14 dias) — sinal clínico de hipotireoidismo congênito; só revela se perguntado sobre icterícia.',
    actorBehavior: 'Ansiosa, com medo de sequela neurológica. Colaborativa. Fica aliviada com a mensagem de que o tratamento precoce previne sequelas. Cabe ao candidato transmitir urgência de forma tranquilizadora.'
  },
  instC: {
    diagnosis: 'Hipotireoidismo congênito primário — provável agenesia de tireoide — com TSH > 80 mUI/L, T4 livre suprimido e sinais clínicos presentes (hipotonia, choro rouco, macroglossia, icterícia prolongada, fontanela posterior aberta).',
    differentials: [
      'Hipotireoidismo transitório neonatal — por deficiência de iodo ou anticorpos maternos; geralmente TSH < 50 e T4 normal ou leve queda; normaliza em semanas.',
      'Hipotireoidismo central (hipopituitarismo) — TSH baixo/normal com T4 baixo; raramente identificado pelo pezinho (triagem TSH).',
      'Icterícia neonatal por outras causas — sem hipotonia, sem outros sinais de hipotireoidismo.'
    ],
    context: 'Recém-nascida com hipotireoidismo congênito primário grave (TSH 84 mUI/L, T4L 0,4 ng/dL), com manifestações clínicas presentes (hipotonia, choro rouco, sonolência, icterícia prolongada, macroglossia, hérnia umbilical). Diagnóstico pela triagem neonatal — sem tratamento imediato há risco de retardo mental irreversível.',
    justify: 'TSH > 10 mUI/L na triagem = resultado positivo → confirmar com TSH e T4L séricos. TSH 84 mUI/L + T4L 0,4 ng/dL = hipotireoidismo primário grave. Sinais clínicos confirmam: hipotonia, choro rouco, fontanela posterior > 0,5 cm, icterícia prolongada, macroglossia, pele fria e seca, hérnia umbilical.',
    expectedAnamnesis: 'Data e valor da triagem neonatal | Sintomas: sonolência excessiva, mamada fraca, choro fraco | Icterícia (tempo de duração — prolongada > 14 dias) | Constipação intestinal | TSH materno na gestação (hipotireoidismo materno) | Uso de amiodarona, iodo ou antitireoidianos na gestação | Consanguinidade',
    expectedPhysical: 'Temperatura (hipotermia) | Hipotonia, letargia, choro rouco | Macroglossia | Fontanela posterior aberta (> 0,5 cm) | Icterícia prolongada | Hérnia umbilical | Pele seca, fria, marmórea | Palpação de tireoide',
    expectedExams: [
      { exam: 'TSH e T4L séricos', justify: 'Confirmar triagem e classificar gravidade', expected: 'TSH muito elevado, T4L suprimido' },
      { exam: 'Cintilografia de tireoide ou USG', justify: 'Avaliar presença/ausência e ectopia da glândula', expected: 'Ausência ou ectopia' },
      { exam: 'Idade óssea (Rx punho/joelho)', justify: 'Avaliar retardo de maturação óssea', expected: 'Retardo' }
    ],
    expectedConduct: 'Farmacológica: Levotiroxina (LT4) oral: 10–15 mcg/kg/dia — iniciar IMEDIATAMENTE após coleta dos exames confirmatórios, sem aguardar resultado. (SBP 2022 / MS 2013) | Não farmacológica: Manter aleitamento materno (não interfere com levotiroxina se administrada 30 min antes). | Encaminhamento: Endocrinologia pediátrica URGENTE (em 24–48h); serviço de referência em triagem neonatal. | Orientações: Explicar que sem tratamento precoce há risco de dano cerebral irreversível; que com tratamento imediato o desenvolvimento pode ser completamente normal; que o medicamento é para toda a vida. | Seguimento: T4L e TSH seriados; avaliação do neurodesenvolvimento.',
    expectedCommunication: 'Apresentação: Apresentar-se, acolher a mãe. | Comunicação do diagnóstico: "Ana, a Alice tem hipotireoidismo congênito — a tireoide dela não está funcionando. Precisamos começar o remédio hoje. Com tratamento imediato, ela pode se desenvolver completamente normal." | Escuta ativa: Responder com clareza sobre sequelas e necessidade do medicamento; não minimizar nem alarmar excessivamente.',
    criticalErrors: [
      'Não iniciar levotiroxina imediatamente (aguardar resultado de exames antes de tratar)',
      'Não encaminhar urgentemente à endocrinologia pediátrica',
      'Não reconhecer os sinais clínicos de hipotireoidismo no exame físico',
      'Não solicitar T4L e TSH séricos confirmatórios',
      'Não orientar sobre necessidade de tratamento contínuo (lifetime)'
    ]
  },
  instD: {
    title: 'CHECKLIST — BEBÊ COM TSH ELEVADO NO PEZINHO — HIPOTIREOIDISMO CONGÊNITO',
    sections: [
      {
        h: 'COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE',
        items: [
          { item: 'Acolheu a mãe e comunicou o diagnóstico com empatia', score: 0.5, ref: 'CFM 2.217/2018' },
          { item: 'Transmitiu mensagem de que o tratamento precoce previne sequelas neurológicas', score: 1.0, ref: 'PNS/MS, 2023' },
          { item: 'Respondeu à preocupação sobre o uso de medicamento permanente', score: 0.5, ref: 'PNS/MS, 2023' }
        ]
      },
      {
        h: 'ANAMNESE',
        items: [
          { item: 'Investigou sintomas de hipotireoidismo (sonolência, mamada fraca, choro fraco, constipação)', score: 1.0, ref: 'SBP / PNS, 2023' },
          { item: 'Questionou icterícia prolongada como sinal de hipotireoidismo', score: 0.5, ref: 'SBP, 2022' },
          { item: 'Perguntou sobre TSH materno durante a gestação', score: 0.5, ref: 'SBP, 2022' }
        ]
      },
      {
        h: 'EXAME FÍSICO',
        items: [
          { item: 'Identificou hipotonia, choro rouco, macroglossia e fontanela posterior aberta', score: 1.0, ref: 'SBP, 2022' },
          { item: 'Aferiu temperatura (hipotermia) e avaliou pele (seca, fria)', score: 0.5, ref: 'SBP, 2022' },
          { item: 'Palpou tireoide e identificou ausência da glândula', score: 0.5, ref: 'SBP, 2022' }
        ]
      },
      {
        h: 'RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
        items: [
          { item: 'Formulou hipótese de hipotireoidismo congênito primário grave', score: 0.5, ref: 'SBP / PNS, 2023' },
          { item: 'Solicitou TSH e T4L séricos confirmatórios', score: 0.5, ref: 'SBP / PNS, 2023' }
        ]
      },
      {
        h: 'CONDUTA E ORIENTAÇÃO AO PACIENTE',
        items: [
          { item: 'Iniciou levotiroxina IMEDIATAMENTE (10–15 mcg/kg/dia) sem aguardar exames', score: 1.5, ref: 'SBP 2022 / MS 2013' },
          { item: 'Encaminhou urgentemente à endocrinologia pediátrica (24–48h)', score: 0.5, ref: 'SBP / PNS, 2023' },
          { item: 'Orientou sobre tratamento permanente e importância da adesão', score: 0.5, ref: 'SBP, 2022' }
        ]
      }
    ]
  }
},

{
  id: 12,
  title: 'Bebê com pezinho alterado para anemia falciforme',
  sub: 'UBS — Atenção Primária',
  tema: 'Pediatria',
  topic: 'Doença Falciforme — Teste do Pezinho',
  level: 'moderado',
  cardAccent: '#1565C0',
  instA: {
    scenario: 'UBS — Atenção Primária. Consultório, turno matutino. Mãe convocada pelo pezinho alterado.',
    patient: 'Mãe de D.O., 22 dias de vida, masculino, a termo, afrodescendente.',
    complaint: 'Recém-nascido convocado por resultado do pezinho sugestivo de doença falciforme. Bebê aparentemente bem.',
    tasks: [
      'Realize a anamnese dirigida ao caso',
      'Realize o exame físico pertinente',
      'Explique o diagnóstico e sua importância para a família',
      'Solicite os exames confirmatórios',
      'Inicie as medidas preventivas e encaminhe adequadamente'
    ]
  },
  instB: {
    vitals: {
      PA: 'Não aferida',
      FC: '132 bpm',
      FR: '42 irpm',
      Tax: '37,0°C',
      Peso: '3.980 g',
      Altura: '52 cm',
      IMC: '—'
    },
    physicalGeneral: 'Bom estado geral, ativo, reativo, normocorado (icterícia fisiológica resolvida), hidratado. Sem esplenomegalia (baço normal nessa fase). Sem sinais de crise vaso-oclusiva. Sem edema de mãos ou pés (dactilite — pode aparecer a partir dos 6 meses).',
    physicalSeg: 'PELE: Normocorada. Sem palidez intensa. | ABDOME: Fígado palpável a 2 cm do RCD (normal para a idade). Baço não palpável. | NEUROLÓGICO: Reflexos primitivos presentes, tônus normal.',
    labs: [
      { test: 'Triagem neonatal — eletroforese Hb (pezinho)', val: 'Padrão FS (HbF + HbS)', ref: 'FA (HbF + HbA)', alt: true },
      { test: 'Eletroforese de Hb confirmatória', val: 'HbS 87%, HbF 13%, HbA ausente', ref: 'HbA > 95%', alt: true },
      { test: 'Hemograma', val: 'Hb 14,2 g/dL, leucócitos 12.400/mm³', ref: '—', alt: false }
    ],
    image: null,
    note: 'Ator é a mãe. Entregar peso e sinais vitais ao início. Entregar exame físico ao exame. Exames confirmatórios somente se solicitados. Ressaltar que o bebê está assintomático — manifestações clínicas surgem após 6 meses (queda da HbF). Penicilina profilática e vacinas específicas são medidas preventivas essenciais.',
    patientProfile: 'Mãe: Diana O., 24 anos, auxiliar administrativa, afrodescendente. Bebê: Davi O., 22 dias, masculino.',
    script: [
      { trigger: 'Queixa principal', speech: 'Doutor, ligaram do posto dizendo que o pezinho do meu filho deu alterado. Falaram que pode ser anemia falciforme.' },
      { trigger: 'Sobre o bebê', speech: 'Ele está ótimo, mamando bem, ganhando peso, ativo. Não tem nada diferente.' },
      { trigger: 'Sobre histórico familiar', speech: 'Meu marido tem traço falciforme, me disseram isso quando ele foi doar sangue. E minha irmã tem anemia falciforme.' },
      { trigger: 'Sobre o nascimento', speech: 'Nasceu de parto normal, 38 semanas, sem intercorrência.' },
      { trigger: 'Sobre o que sabe', speech: 'Sei que anemia falciforme é grave, que as pessoas têm muita dor. Fico com medo.' },
      { trigger: 'Sobre vacinação', speech: 'Vacinas estou em dia, fiz tudo no cartão.' },
      { trigger: 'Pergunta ativa 1', speech: 'Ele vai ter vida normal? Vai ter muita dor?' },
      { trigger: 'Pergunta ativa 2', speech: 'Meus outros filhos podem ter também?' }
    ],
    hiddenInfo: 'Pai tem traço falciforme (HbAS) confirmado — ambos os pais são portadores, o que implica risco de 25% para a doença em cada gestação; só revela com detalhes se perguntado sobre o resultado do exame do pai. | A mãe também pode ser portadora (não fez exame) — só revela se perguntado sobre resultado da mãe.',
    actorBehavior: 'Ansiosa, mas informada sobre o que é a doença (tem irmã com doença falciforme). Preocupada com a qualidade de vida do filho. Cabe ao candidato ser honesto sobre a gravidade e ao mesmo tempo apresentar o plano de cuidados que muda o prognóstico.'
  },
  instC: {
    diagnosis: 'Doença falciforme — anemia falciforme homozigota (HbSS) — diagnosticada pela triagem neonatal, em fase assintomática (predomínio de HbF protetora). Herança autossômica recessiva com ambos os pais portadores (HbAS).',
    differentials: [
      'Traço falciforme (HbAS) — heterozigoto, assintomático; eletroforese mostra HbA + HbS; aqui HbA ausente = HbSS.',
      'SC (HbSC) — dupla heterozigose com HbC; eletroforese mostra HbS + HbC; quadro geralmente mais leve; aqui apenas HbS e HbF.',
      'S/Beta-talassemia — HbS + HbA reduzida; aqui HbA ausente = HbSS ou S/Beta0.'
    ],
    context: 'Recém-nascido afrodescendente com doença falciforme (HbSS) diagnosticada pela triagem neonatal em fase assintomática. A proteção pela HbF dura até 6 meses; após isso, crises vaso-oclusivas, infecções graves e anemia hemolítica podem ocorrer. O diagnóstico precoce permite intervenção preventiva que reduz morbimortalidade.',
    justify: 'Triagem neonatal com padrão FS (HbF + HbS, sem HbA) + eletroforese confirmatória com HbS 87%, ausência de HbA = HbSS. Historicamente claro: pai com traço falciforme, tia materna com doença falciforme. Hemograma normal porque HbF ainda predomina (proteção neonatal).',
    expectedAnamnesis: 'Data e resultado do pezinho | Estado atual do bebê (assintomático) | Histórico familiar (traço ou doença falciforme nos pais/irmãos) | Vacinação do calendário básico | Tipo de alimentação',
    expectedPhysical: 'Estado geral, atividade, hidratação | Palidez (anemia — leve ou ausente nessa fase) | Baço (esplenomegalia pode surgir mais tarde) | Icterícia (hemólise) | Dactilite (edema doloroso de mãos/pés — surge a partir dos 6 meses)',
    expectedExams: [
      { exam: 'Eletroforese de hemoglobina', justify: 'Confirmar diagnóstico e classificar subtipo', expected: 'HbSS confirmado' },
      { exam: 'Hemograma completo', justify: 'Avaliar hemoglobina basal e leucocitose', expected: 'Hb normal nessa fase' },
      { exam: 'Tipagem sanguínea', justify: 'Para futuros episódios de transfusão', expected: '—' }
    ],
    expectedConduct: 'Farmacológica: Penicilina V profilática oral 125 mg VO 2x/dia a partir dos 2–3 meses de vida, até os 5 anos (prevenção de infecções por pneumococo — maior causa de morte). (MS/SBP 2022) | Não farmacológica: Vacinas adicionais: pneumocócica conjugada (Prevnar), meningocócica, influenza, hepatite A — além do calendário básico; hidratação adequada; evitar exposição ao frio e à hipóxia. | Encaminhamento: Hematologia pediátrica — acompanhamento especializado regular. | Orientações: Explicar que o bebê está bem agora mas que a doença se manifestará após 6 meses; importância da penicilina profilática (não pode falhar); sinais de alarme (febre > 38,5°C, palidez súbita, dor abdominal intensa, priapismo). | Seguimento: Hematologia pediátrica; vacinação rigorosa; controle ambulatorial mensal nos primeiros anos.',
    expectedCommunication: 'Apresentação: Apresentar-se, acolher a mãe. | Comunicação do diagnóstico: "Diana, o Davi tem anemia falciforme. Agora ele está protegido pelo hemograma de recém-nascido. O que faremos é iniciar um antibiótico preventivo e acompanhamento especializado para que ele cresça bem." | Escuta ativa: Responder sobre qualidade de vida com realismo e esperança; abordar o risco para futuros filhos.',
    criticalErrors: [
      'Não iniciar penicilina profilática (principal medida preventiva de mortalidade na doença falciforme)',
      'Não encaminhar à hematologia pediátrica',
      'Não orientar sobre sinais de alarme (febre como emergência)',
      'Não solicitar eletroforese confirmatória',
      'Não abordar o risco genético para futuros filhos e necessidade de aconselhamento genético'
    ]
  },
  instD: {
    title: 'CHECKLIST — BEBÊ COM PEZINHO ALTERADO — DOENÇA FALCIFORME',
    sections: [
      {
        h: 'COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE',
        items: [
          { item: 'Acolheu a mãe com empatia e explicou o diagnóstico com clareza', score: 0.5, ref: 'CFM 2.217/2018' },
          { item: 'Respondeu à preocupação sobre qualidade de vida com realismo e esperança', score: 0.5, ref: 'PNHAH/MS, 2001' },
          { item: 'Abordou o risco genético para futuros filhos e aconselhamento genético', score: 0.5, ref: 'PNS/MS, 2023' }
        ]
      },
      {
        h: 'ANAMNESE',
        items: [
          { item: 'Investigou histórico familiar de doença ou traço falciforme', score: 1.0, ref: 'PNS/MS, 2023' },
          { item: 'Verificou vacinação e estado atual do bebê', score: 0.5, ref: 'PNI/MS, 2023' }
        ]
      },
      {
        h: 'EXAME FÍSICO',
        items: [
          { item: 'Avaliou palidez, icterícia e baço (esplenomegalia)', score: 0.5, ref: 'SBP, 2022' },
          { item: 'Verificou ausência de dactilite e crise vaso-oclusiva atual', score: 0.5, ref: 'SBP, 2022' }
        ]
      },
      {
        h: 'RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
        items: [
          { item: 'Confirmou diagnóstico de HbSS pela eletroforese confirmatória', score: 1.0, ref: 'PNS/MS, 2023' },
          { item: 'Explicou que HbF protege na fase neonatal e que sintomas surgem após 6 meses', score: 0.5, ref: 'SBP, 2022' }
        ]
      },
      {
        h: 'CONDUTA E ORIENTAÇÃO AO PACIENTE',
        items: [
          { item: 'Iniciou penicilina profilática (125 mg VO 2x/dia)', score: 1.5, ref: 'MS/SBP 2022' },
          { item: 'Orientou vacinação adicional (pneumocócica, meningocócica, influenza)', score: 0.5, ref: 'PNI/MS, 2023' },
          { item: 'Encaminhou à hematologia pediátrica e orientou sinais de alarme (febre como emergência)', score: 1.0, ref: 'SBP / PNS, 2023' }
        ]
      }
    ]
  }
},

];
