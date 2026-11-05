const gastroenterologia2 = [
  // ─────────────────────────────────────────────────────────────────────────
  // CASO 1 — HEMORRAGIA DIGESTIVA ALTA VARICOSA
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 1,
    title: 'Vômitos com sangue em paciente etilista',
    sub: 'PS — Pronto-Socorro',
    tema: 'Gastroenterologia',
    topic: 'Hemorragia Digestiva Alta Varicosa',
    level: 'difícil',
    cardAccent: '#66BB6A',
    instA: {
      scenario: 'Pronto-Socorro de hospital geral, sala de emergência, 23h. Paciente trazido pela esposa após episódios de vômito com sangue.',
      patient: 'J.C.S., 54 anos, masculino, pedreiro, etilista crônico.',
      complaint: 'Vomitou sangue vivo em grande quantidade 3 vezes nas últimas 2 horas e está com tontura.',
      tasks: [
        'Realize a avaliação inicial e a estabilização hemodinâmica do paciente.',
        'Realize a anamnese dirigida, investigando a etiologia do sangramento.',
        'Realize o exame físico dirigido, buscando estigmas de hepatopatia crônica.',
        'Formule a hipótese diagnóstica principal e os diferenciais.',
        'Proponha a conduta inicial farmacológica e o momento adequado da endoscopia.'
      ]
    },
    instB: {
      vitals: {
        PA: '88/54 mmHg',
        FC: '122 bpm',
        FR: '24 irpm',
        Tax: '36,2 °C',
        SpO2: '95% em ar ambiente',
        Glasgow: '15'
      },
      physicalGeneral: 'Regular estado geral, descorado 3+/4+, ictérico 1+/4+, sudoreico, extremidades frias, enchimento capilar de 4 segundos. Hálito etílico discreto. Vestígios de sangue em região perioral.',
      physicalSeg: 'PELE: telangiectasias (aranhas vasculares) em tórax anterior, eritema palmar, ginecomastia bilateral | ABDOME: globoso, circulação colateral em cabeça de medusa, macicez móvel presente (ascite moderada), baço palpável a 3 cm do RCE, fígado não palpável | NEUROLÓGICO: orientado, sem flapping no momento | TOQUE RETAL: fezes enegrecidas (melena) em dedo de luva | CARDIOPULMONAR: taquicárdico, ritmo regular, murmúrio vesicular presente bilateralmente.',
      labs: [
        { test: 'Hemoglobina', val: '7,1 g/dL', ref: '13–17 g/dL', alt: true },
        { test: 'Hematócrito', val: '21%', ref: '40–50%', alt: true },
        { test: 'Plaquetas', val: '78.000/mm³', ref: '150.000–400.000/mm³', alt: true },
        { test: 'INR', val: '1,8', ref: '< 1,2', alt: true },
        { test: 'Albumina', val: '2,6 g/dL', ref: '3,5–5,0 g/dL', alt: true },
        { test: 'Bilirrubina total', val: '2,8 mg/dL', ref: '< 1,2 mg/dL', alt: true },
        { test: 'Ureia', val: '78 mg/dL', ref: '15–45 mg/dL', alt: true },
        { test: 'Creatinina', val: '1,1 mg/dL', ref: '0,7–1,3 mg/dL', alt: false },
        { test: 'Sódio', val: '133 mEq/L', ref: '135–145 mEq/L', alt: true }
      ],
      image: 'Endoscopia digestiva alta (entregar apenas se o candidato indicar EDA após estabilização): varizes esofágicas de grosso calibre em terço distal, uma delas com sangramento ativo em jato, sinais da cor vermelha. Gastropatia hipertensiva moderada.',
      note: 'Entregar os exames laboratoriais após o candidato solicitar. Se o candidato não iniciar acesso venoso calibroso e reposição volêmica em até 2 minutos, o paciente refere piora da tontura. A imagem da EDA só deve ser entregue se o candidato indicar a endoscopia em até 12 horas, após estabilização.',
      patientProfile: 'Pedreiro, casado, 3 filhos. Bebe cerca de 1 litro de cachaça por dia há 25 anos. Nunca fez acompanhamento médico regular. Há 6 meses notou aumento da barriga e pernas inchadas, mas não procurou atendimento. Tabagista 20 maços-ano.',
      script: [
        { trigger: 'Queixa principal', speech: 'Doutor(a), comecei a vomitar sangue, muito sangue vermelho, foram três vezes. Tô muito tonto, parece que vou desmaiar.' },
        { trigger: 'Sobre fezes', speech: 'Hoje de manhã as fezes saíram bem pretas, parecendo borra de café, e com um cheiro muito forte.' },
        { trigger: 'Sobre consumo de álcool', speech: 'Eu bebo sim... uma garrafinha de pinga por dia, às vezes mais no final de semana. Faz uns 25 anos.' },
        { trigger: 'Sobre o abdome', speech: 'A barriga vem crescendo faz uns seis meses, e as pernas incham no fim do dia. Achei que era gordura.' },
        { trigger: 'Sobre medicamentos', speech: 'Tomo uns comprimidos para dor nas costas que compro na farmácia, acho que é diclofenaco.' },
        { trigger: 'Sobre episódios anteriores', speech: 'Nunca tinha vomitado sangue antes, é a primeira vez.' },
        { trigger: 'Sobre confusão ou sonolência', speech: 'Minha esposa diz que ando meio esquecido e dormindo de dia, mas acho que é cansaço.' },
        { trigger: 'Pergunta ativa — diagnóstico', speech: 'É uma úlcera, doutor(a)? Eu vou morrer?' }
      ],
      hiddenInfo: 'Usa diclofenaco por conta própria há 2 semanas — só revela se perguntado sobre medicamentos/anti-inflamatórios | Teve hepatite? Nunca testou; teve parceiras sexuais múltiplas na juventude e fez tatuagem caseira — só revela se perguntado sobre fatores de risco para hepatites virais | Sonolência diurna e inversão do sono — só revela se perguntado sobre alteração do comportamento ou do sono',
      actorBehavior: 'Ansioso, pálido, refere tontura ao tentar sentar. Responde de forma curta, com cansaço. Se o candidato for empático e explicar o que está sendo feito, fica mais calmo. Inicialmente minimiza o consumo de álcool e só detalha quando o candidato pergunta de forma não julgadora.'
    },
    instC: {
      diagnosis: 'Hemorragia digestiva alta varicosa com choque hipovolêmico (classe III) em paciente com cirrose hepática alcoólica descompensada (Child-Pugh C), com hipertensão portal (ascite, esplenomegalia, circulação colateral).',
      differentials: [
        'Úlcera péptica hemorrágica — entra pelo uso de AINE e etilismo; é a causa mais comum de HDA em geral, mas os estigmas de hepatopatia crônica e hipertensão portal tornam a origem varicosa mais provável até prova endoscópica em contrário',
        'Síndrome de Mallory-Weiss — entra pela associação com etilismo e vômitos, mas tipicamente o sangue surge após vômitos não sanguinolentos repetidos e o sangramento costuma ser autolimitado',
        'Gastropatia hipertensiva portal — pode coexistir, mas raramente causa sangramento volumoso com instabilidade',
        'Neoplasia gástrica ou esofágica — considerar em tabagista/etilista, mas sem perda ponderal ou disfagia prévia e quadro agudo maciço'
      ],
      context: 'A hemorragia digestiva alta (HDA) varicosa é a complicação mais letal da hipertensão portal, com mortalidade de 15–20% em 6 semanas. Este paciente etilista pesado apresenta estigmas clássicos de hepatopatia crônica (aranhas vasculares, eritema palmar, ginecomastia, ascite, esplenomegalia, circulação colateral), plaquetopenia e coagulopatia, configurando cirrose descompensada com primeiro episódio de sangramento varicoso e instabilidade hemodinâmica.',
      justify: 'Hematêmese volumosa + melena + choque (PA 88/54, FC 122) em paciente com estigmas de cirrose e hipertensão portal. Child-Pugh: bilirrubina 2,8 (2 pts), albumina 2,6 (3 pts), INR 1,8 (2 pts), ascite moderada (2 pts), encefalopatia grau I (2 pts) = 11 pontos — Child C. Escore de Glasgow-Blatchford elevado indica necessidade de intervenção. A EDA confirma varizes esofágicas com sangramento ativo.',
      expectedAnamnesis: 'Caracterização da hematêmese (volume, número de episódios, cor) | Presença de melena ou hematoquezia | Sintomas de hipovolemia (tontura, síncope) | Consumo de álcool quantificado (CAGE/AUDIT) | Uso de AINE, anticoagulantes, antiagregantes | Episódios prévios de sangramento | Sintomas de descompensação hepática (ascite, icterícia, edema) | Sintomas de encefalopatia (sonolência, confusão, inversão do sono) | Fatores de risco para hepatites virais | Comorbidades e alergias',
      expectedPhysical: 'Avaliação ABC com perfusão periférica e enchimento capilar | Avaliação de sinais vitais e índice de choque | Pesquisa de estigmas de hepatopatia (aranhas, eritema palmar, ginecomastia, icterícia) | Exame abdominal: ascite (macicez móvel), esplenomegalia, circulação colateral | Pesquisa de flapping (asterixis) | Toque retal para confirmar melena',
      expectedExams: [
        { exam: 'Hemograma, tipagem sanguínea e prova cruzada', justify: 'Avaliar gravidade e preparar transfusão', expected: 'Anemia importante, plaquetopenia' },
        { exam: 'Coagulograma (TP/INR)', justify: 'Avaliar função hepática e coagulopatia', expected: 'INR alargado' },
        { exam: 'Função hepática (bilirrubinas, albumina, transaminases)', justify: 'Calcular Child-Pugh e MELD', expected: 'Hipoalbuminemia, hiperbilirrubinemia' },
        { exam: 'Ureia, creatinina, eletrólitos', justify: 'Ureia sobe com sangue digerido; avaliar função renal (risco de síndrome hepatorrenal)', expected: 'Ureia desproporcionalmente elevada' },
        { exam: 'Endoscopia digestiva alta em até 12 horas, após estabilização', justify: 'Diagnóstica e terapêutica (ligadura elástica)', expected: 'Varizes esofágicas com sangramento ativo' },
        { exam: 'Paracentese diagnóstica', justify: 'Excluir peritonite bacteriana espontânea em paciente com ascite', expected: 'Contagem de PMN a definir' }
      ],
      expectedConduct: 'Medidas iniciais: monitorização, O2 se SpO2 < 94%, 2 acessos venosos calibrosos, cabeceira elevada, jejum; considerar IOT para proteção de via aérea se rebaixamento ou hematêmese maciça | Reposição volêmica criteriosa com cristaloide; transfusão restritiva de hemácias com alvo de Hb 7–8 g/dL (evitar hipervolemia que aumenta pressão portal) | Farmacológica: vasoativo esplâncnico imediato — terlipressina 2 mg EV 4/4h (ou octreotide 50 mcg em bolus + 50 mcg/h) por 2–5 dias; antibioticoprofilaxia — ceftriaxona 1 g EV/dia por até 7 dias; IBP EV até a EDA; suspender AINE | Endoscopia em até 12h com ligadura elástica das varizes | Se falha: balão de Sengstaken-Blakemore como ponte e TIPS de resgate; considerar TIPS precoce em Child C 10–13 | Prevenção da encefalopatia: lactulose | Profilaxia secundária após estabilização: betabloqueador não seletivo (propranolol ou carvedilol) + ligaduras seriadas | Orientações: abstinência alcoólica com encaminhamento a CAPS-AD, rastrear hepatites B e C, acompanhamento com hepatologia, avaliar transplante',
      expectedCommunication: 'Apresentar-se pelo nome e função | Explicar com calma a gravidade e o que está sendo feito | Abordar o etilismo sem julgamento | Envolver a esposa nas orientações com consentimento do paciente | Responder com honestidade sobre o risco, sem gerar pânico',
      criticalErrors: [
        'Não iniciar estabilização hemodinâmica (acesso calibroso, volume) antes de prosseguir com anamnese longa',
        'Não iniciar terlipressina/octreotide antes da endoscopia em paciente com suspeita de sangramento varicoso',
        'Não prescrever antibioticoprofilaxia (ceftriaxona) em cirrótico com HDA',
        'Transfundir de forma liberal visando Hb > 10 g/dL',
        'Passar sonda nasogástrica de rotina ou indicar balão como primeira linha antes de vasoativo e EDA',
        'Prescrever betabloqueador na fase aguda com o paciente em choque'
      ]
    },
    instD: {
      title: 'Hemorragia Digestiva Alta Varicosa — Material de Estudo',
      sections: [
        {
          h: 'Definição e Epidemiologia',
          items: [
            { item: 'HDA é o sangramento proximal ao ângulo de Treitz; manifesta-se por hematêmese, melena ou, quando maciça, hematoquezia.', score: 1, ref: 'Harrison — Medicina Interna, 21ª ed.' },
            { item: 'Varizes esofágicas estão presentes em ~50% dos cirróticos; o sangramento varicoso tem mortalidade de 15–20% em 6 semanas.', score: 1, ref: 'Baveno VII Consensus, 2022' }
          ]
        },
        {
          h: 'Avaliação Inicial e Estratificação',
          items: [
            { item: 'Prioridade: ABC, dois acessos calibrosos, tipagem; IOT se rebaixamento de consciência ou hematêmese incoercível.', score: 2, ref: 'ACG Guideline — Upper GI Bleeding, 2021' },
            { item: 'Escore de Glasgow-Blatchford (pré-endoscópico) e Child-Pugh/MELD estratificam risco do paciente cirrótico.', score: 1, ref: 'Baveno VII Consensus, 2022' }
          ]
        },
        {
          h: 'Tratamento da Fase Aguda',
          items: [
            { item: 'Transfusão restritiva com alvo de Hb 7–8 g/dL reduz ressangramento e mortalidade em cirróticos.', score: 2, ref: 'Villanueva et al., NEJM 2013' },
            { item: 'Vasoativo (terlipressina, octreotide ou somatostatina) deve ser iniciado assim que houver suspeita, antes da EDA, mantido por 2–5 dias.', score: 2, ref: 'Baveno VII Consensus, 2022' },
            { item: 'Antibioticoprofilaxia (ceftriaxona 1 g/dia) reduz infecções, ressangramento e mortalidade.', score: 2, ref: 'Baveno VII Consensus, 2022' },
            { item: 'EDA em até 12 horas com ligadura elástica é o tratamento endoscópico de escolha para varizes esofágicas.', score: 2, ref: 'AASLD Practice Guidance, 2024' },
            { item: 'TIPS precoce (até 72h) em Child C 10–13 ou Child B > 7 com sangramento ativo reduz mortalidade.', score: 1, ref: 'Baveno VII Consensus, 2022' }
          ]
        },
        {
          h: 'Profilaxia Secundária e Orientações',
          items: [
            { item: 'Betabloqueador não seletivo (propranolol ou carvedilol) + ligadura elástica seriada é a profilaxia secundária padrão.', score: 1, ref: 'AASLD Practice Guidance, 2024' },
            { item: 'Abstinência alcoólica é a medida que mais modifica o prognóstico da cirrose alcoólica; encaminhar a CAPS-AD e avaliar elegibilidade para transplante.', score: 1, ref: 'Diretriz SBH — Doença Hepática Alcoólica' }
          ]
        }
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // CASO 2 — PERITONITE BACTERIANA ESPONTÂNEA
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 2,
    title: 'Barriga inchada, febre e confusão em paciente com cirrose',
    sub: 'PS — Pronto-Socorro',
    tema: 'Gastroenterologia',
    topic: 'Peritonite Bacteriana Espontânea',
    level: 'difícil',
    cardAccent: '#66BB6A',
    instA: {
      scenario: 'Pronto-Socorro, 15h. Paciente com diagnóstico prévio de cirrose por hepatite C, trazida pela filha por piora do estado geral.',
      patient: 'M.L.F., 61 anos, feminino, aposentada, cirrose hepática por vírus C diagnosticada há 4 anos.',
      complaint: 'Há 3 dias com febre baixa, dor difusa na barriga e aumento do volume abdominal; hoje está confusa.',
      tasks: [
        'Realize a anamnese dirigida (com auxílio da acompanhante, se necessário).',
        'Realize o exame físico dirigido.',
        'Formule a hipótese diagnóstica e indique o procedimento diagnóstico essencial.',
        'Interprete o resultado do líquido ascítico.',
        'Proponha o tratamento e a prevenção de complicações.'
      ]
    },
    instB: {
      vitals: {
        PA: '102/64 mmHg',
        FC: '104 bpm',
        FR: '20 irpm',
        Tax: '37,9 °C',
        SpO2: '96% em ar ambiente',
        Glasgow: '14 (confusa)'
      },
      physicalGeneral: 'Regular estado geral, ictérica 2+/4+, descorada 1+/4+, desidratada 1+/4+, sonolenta mas despertável, desorientada no tempo.',
      physicalSeg: 'ABDOME: muito distendido, tenso, macicez móvel evidente, piparote positivo, dor difusa leve à palpação profunda, sem descompressão brusca dolorosa franca, ruídos hidroaéreos presentes | NEUROLÓGICO: flapping presente bilateralmente, desorientada no tempo | PELE: aranhas vasculares, eritema palmar | MEMBROS INFERIORES: edema 2+/4+ bilateral | CARDIOPULMONAR: sem alterações relevantes.',
      labs: [
        { test: 'Leucócitos (sangue)', val: '11.800/mm³', ref: '4.000–11.000/mm³', alt: true },
        { test: 'Creatinina', val: '1,6 mg/dL (basal 0,9)', ref: '0,6–1,1 mg/dL', alt: true },
        { test: 'Bilirrubina total', val: '4,2 mg/dL', ref: '< 1,2 mg/dL', alt: true },
        { test: 'Albumina sérica', val: '2,4 g/dL', ref: '3,5–5,0 g/dL', alt: true },
        { test: 'INR', val: '1,9', ref: '< 1,2', alt: true },
        { test: 'Sódio', val: '129 mEq/L', ref: '135–145 mEq/L', alt: true },
        { test: 'Líquido ascítico — PMN', val: '620 células/mm³', ref: '< 250 células/mm³', alt: true },
        { test: 'Líquido ascítico — albumina', val: '0,8 g/dL (GASA = 1,6)', ref: 'GASA ≥ 1,1 = hipertensão portal', alt: true },
        { test: 'Líquido ascítico — proteína total', val: '0,9 g/dL', ref: '—', alt: false },
        { test: 'Líquido ascítico — Gram', val: 'Bacilos Gram-negativos escassos', ref: 'Negativo', alt: true }
      ],
      note: 'Entregar os exames do líquido ascítico SOMENTE se o candidato indicar paracentese diagnóstica. A filha responde pela paciente quando esta não souber informar. Se o candidato perguntar sobre coagulopatia como contraindicação à paracentese, o aplicador pode informar que não há sangramento ativo.',
      patientProfile: 'Aposentada, viúva, mora com a filha. Cirrose por hepatite C diagnosticada há 4 anos, fez tratamento antiviral com resposta virológica sustentada há 2 anos. Já teve ascite tratada com diuréticos. Usa espironolactona 100 mg e furosemida 40 mg. Não bebe álcool.',
      script: [
        { trigger: 'Queixa principal (filha)', speech: 'Doutor(a), minha mãe está com febre baixa faz três dias, a barriga cresceu muito e hoje ela começou a falar coisas sem sentido.' },
        { trigger: 'Sobre a dor abdominal (paciente)', speech: 'Dói a barriga toda... é uma dor chata, não é muito forte.' },
        { trigger: 'Sobre o hábito intestinal (filha)', speech: 'Ela não evacua faz uns quatro dias, ficou presa.' },
        { trigger: 'Sobre a diurese', speech: 'Está fazendo pouco xixi, e bem escuro.' },
        { trigger: 'Sobre medicamentos', speech: 'Ela toma os remédios de urina, a espironolactona e a furosemida. A lactulose ela parou porque dava muita diarreia.' },
        { trigger: 'Sobre sangramentos', speech: 'Não vomitou sangue, as fezes não estavam pretas da última vez.' },
        { trigger: 'Sobre doença prévia', speech: 'Ela teve hepatite C, tratou e o médico disse que o vírus sumiu, mas que o fígado já estava estragado.' },
        { trigger: 'Pergunta ativa — diagnóstico (filha)', speech: 'É infecção, doutor(a)? Vai precisar furar a barriga dela?' }
      ],
      hiddenInfo: 'Parou a lactulose há 2 semanas por conta própria — só revela se perguntado sobre adesão aos medicamentos | Constipação há 4 dias — só revela se perguntado sobre hábito intestinal | Já tirou líquido da barriga duas vezes no último ano — só revela se perguntado sobre paracenteses prévias',
      actorBehavior: 'Paciente sonolenta, responde com lentidão e às vezes de forma confusa (ex.: erra o dia da semana). A filha é colaborativa, preocupada e faz perguntas sobre o procedimento. Se o candidato explicar bem a paracentese, a filha concorda.'
    },
    instC: {
      diagnosis: 'Peritonite bacteriana espontânea (PMN no líquido ascítico ≥ 250/mm³) em paciente com cirrose descompensada, complicada por encefalopatia hepática grau II e lesão renal aguda.',
      differentials: [
        'Peritonite bacteriana secundária (perfuração de víscera) — entra pela infecção do líquido; sai pela proteína < 1 g/dL, glicose provavelmente normal, ausência de peritonite franca e germe único; critérios de Runyon (proteína > 1 g/dL, glicose < 50 mg/dL, LDH > LSN sérico) apontariam secundária',
        'Encefalopatia hepática isolada precipitada por constipação/abandono da lactulose — está presente, mas a febre e o PMN elevado indicam infecção como precipitante principal',
        'Síndrome hepatorrenal — a elevação da creatinina deve ser reavaliada após expansão com albumina; não se diagnostica SHR na vigência de infecção não tratada',
        'Ascite neoplásica / carcinomatose ou carcinoma hepatocelular — GASA ≥ 1,1 indica hipertensão portal; investigar CHC com imagem por ser cirrótica'
      ],
      context: 'A PBE é a infecção bacteriana mais comum no cirrótico com ascite (10–30% dos internados), geralmente por translocação de Gram-negativos entéricos. Frequentemente é oligossintomática e deve ser lembrada em todo cirrótico com ascite que piore clinicamente, apresente encefalopatia ou lesão renal. Esta paciente apresenta febre, dor abdominal difusa, encefalopatia e piora da função renal.',
      justify: 'Contagem de PMN no líquido ascítico de 620/mm³ (critério ≥ 250/mm³), sem foco intra-abdominal cirúrgico aparente, GASA de 1,6 (ascite por hipertensão portal) e proteína baixa (< 1,5 g/dL, fator de risco para PBE). Gram com bacilos Gram-negativos reforça.',
      expectedAnamnesis: 'Febre e tempo de evolução | Dor abdominal e características | Aumento do volume abdominal | Alterações de comportamento, sono, confusão | Hábito intestinal (constipação precipita encefalopatia) | Diurese | Uso e adesão a diuréticos e lactulose | Sangramento digestivo | Etiologia da cirrose e tratamento | Paracenteses e episódios prévios de PBE',
      expectedPhysical: 'Avaliação do estado de consciência (Glasgow, orientação) | Pesquisa de flapping | Exame abdominal: macicez móvel, piparote, sinais de irritação peritoneal | Estigmas de hepatopatia | Avaliação de hidratação e edema',
      expectedExams: [
        { exam: 'Paracentese diagnóstica com citologia diferencial, albumina, proteína total, Gram e cultura (inocular em frasco de hemocultura à beira do leito)', justify: 'Obrigatória em todo cirrótico com ascite internado ou com piora clínica', expected: 'PMN ≥ 250/mm³' },
        { exam: 'Hemoculturas', justify: 'Bacteremia é frequente', expected: 'Podem isolar enterobactéria' },
        { exam: 'Creatinina, ureia, eletrólitos', justify: 'Detectar LRA e hiponatremia', expected: 'Creatinina elevada, sódio baixo' },
        { exam: 'Hemograma, coagulograma, bilirrubinas, albumina', justify: 'Gravidade e prognóstico (MELD)', expected: 'Leucocitose, coagulopatia' },
        { exam: 'Urina tipo 1 e radiografia de tórax', justify: 'Buscar outros focos infecciosos', expected: 'Sem outros focos' },
        { exam: 'Ultrassonografia abdominal com Doppler', justify: 'Avaliar CHC e trombose de veia porta', expected: 'Fígado cirrótico, ascite' }
      ],
      expectedConduct: 'Farmacológica: Ceftriaxona 2 g EV 1x/dia (ou cefotaxima 2 g EV 8/8h) por 5–7 dias — ajustar se infecção nosocomial ou uso recente de antibiótico (considerar carbapenêmico) | Albumina humana 20% — 1,5 g/kg no D1 e 1 g/kg no D3 (reduz síndrome hepatorrenal e mortalidade) | Suspender diuréticos e nefrotóxicos (evitar AINE, aminoglicosídeos) | Encefalopatia: lactulose 20–30 mL VO 2–4x/dia titulando para 2–3 evacuações pastosas/dia; enema se necessário; rifaximina como adjuvante | Paracentese de controle em 48h se evolução atípica (espera-se queda ≥ 25% do PMN) | Profilaxia secundária após o episódio: norfloxacino 400 mg/dia ou ciprofloxacino contínuo | Encaminhamento: avaliação para transplante hepático | Orientações à família: não suspender lactulose, sinais de alarme (febre, confusão, sangramento), dieta hipossódica sem restrição proteica',
      expectedCommunication: 'Apresentar-se à paciente e à filha | Explicar o procedimento de paracentese, riscos e benefícios, e obter consentimento | Linguagem acessível ao explicar infecção do líquido | Orientar sobre a importância da lactulose | Acolher a preocupação da filha',
      criticalErrors: [
        'Não realizar paracentese diagnóstica em cirrótica com ascite, febre e encefalopatia',
        'Contraindicar a paracentese por causa do INR alargado ou plaquetopenia',
        'Não associar albumina ao antibiótico em paciente com lesão renal/bilirrubina elevada',
        'Manter diuréticos na vigência de LRA e infecção',
        'Prescrever restrição proteica rigorosa para a encefalopatia'
      ]
    },
    instD: {
      title: 'Peritonite Bacteriana Espontânea — Material de Estudo',
      sections: [
        {
          h: 'Definição e Fisiopatologia',
          items: [
            { item: 'Infecção do líquido ascítico sem foco intra-abdominal cirúrgico, por translocação bacteriana; agentes mais comuns: E. coli, Klebsiella, Streptococcus.', score: 1, ref: 'EASL Clinical Practice Guidelines — Decompensated Cirrhosis, 2018' }
          ]
        },
        {
          h: 'Diagnóstico',
          items: [
            { item: 'Paracentese diagnóstica indicada em toda internação de cirrótico com ascite, e se febre, dor abdominal, encefalopatia, LRA ou HDA.', score: 2, ref: 'AASLD Guidance — Ascites, 2021' },
            { item: 'PMN ≥ 250 células/mm³ no líquido ascítico confirma PBE, independentemente da cultura.', score: 2, ref: 'EASL, 2018' },
            { item: 'GASA ≥ 1,1 g/dL indica ascite por hipertensão portal; coagulopatia não contraindica a paracentese.', score: 1, ref: 'AASLD Guidance — Ascites, 2021' },
            { item: 'Critérios de Runyon sugerem peritonite secundária: proteína > 1 g/dL, glicose < 50 mg/dL, LDH > LSN sérico, flora polimicrobiana.', score: 1, ref: 'Runyon BA, Hepatology' }
          ]
        },
        {
          h: 'Tratamento',
          items: [
            { item: 'Cefalosporina de 3ª geração (ceftriaxona/cefotaxima) por 5–7 dias é o tratamento empírico de escolha na PBE comunitária.', score: 2, ref: 'EASL, 2018' },
            { item: 'Albumina 1,5 g/kg no D1 e 1 g/kg no D3 reduz síndrome hepatorrenal e mortalidade (Sort et al., NEJM 1999).', score: 2, ref: 'Sort P et al., NEJM 1999' },
            { item: 'Encefalopatia: tratar precipitante + lactulose; não restringir proteínas.', score: 1, ref: 'AASLD/EASL — Hepatic Encephalopathy, 2014' }
          ]
        },
        {
          h: 'Prevenção',
          items: [
            { item: 'Profilaxia secundária com norfloxacino ou ciprofloxacino indefinidamente após o primeiro episódio; encaminhar para avaliação de transplante.', score: 1, ref: 'EASL, 2018' }
          ]
        }
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // CASO 3 — DOENÇA DE CROHN
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 3,
    title: 'Diarreia crônica, dor abdominal e perda de peso em jovem',
    sub: 'Ambulatório de Gastroenterologia — Atenção Secundária',
    tema: 'Gastroenterologia',
    topic: 'Doença de Crohn',
    level: 'moderado',
    cardAccent: '#66BB6A',
    instA: {
      scenario: 'Ambulatório de Gastroenterologia, encaminhamento da UBS por diarreia crônica.',
      patient: 'L.A.M., 23 anos, masculino, estudante universitário.',
      complaint: 'Diarreia há 5 meses, dor na barriga do lado direito e emagrecimento de 7 kg.',
      tasks: [
        'Realize a anamnese dirigida, incluindo manifestações extraintestinais.',
        'Realize o exame físico dirigido, incluindo exame perianal.',
        'Formule a hipótese diagnóstica e os diferenciais.',
        'Solicite os exames complementares adequados.',
        'Proponha o plano terapêutico e as orientações iniciais.'
      ]
    },
    instB: {
      vitals: {
        PA: '112/70 mmHg',
        FC: '92 bpm',
        FR: '16 irpm',
        Tax: '37,6 °C',
        Peso: '56 kg (há 5 meses: 63 kg)',
        Altura: '1,76 m',
        IMC: '18,1 kg/m²'
      },
      physicalGeneral: 'Regular estado geral, emagrecido, descorado 1+/4+, hidratado, anictérico.',
      physicalSeg: 'BOCA: duas úlceras aftosas em mucosa jugal | ABDOME: plano, ruídos hidroaéreos aumentados, dor à palpação em fossa ilíaca direita com massa mal delimitada, endurecida, de cerca de 5 cm, sem descompressão dolorosa | PERIANAL: plicoma volumoso e orifício de fístula a 2 cm da borda anal às 7h, com saída de secreção purulenta | PELE: nódulos eritematosos dolorosos em face anterior das pernas (eritema nodoso) | ARTICULAÇÕES: sem sinovite.',
      labs: [
        { test: 'Hemoglobina', val: '10,8 g/dL (VCM 76 fL)', ref: '13–17 g/dL', alt: true },
        { test: 'Plaquetas', val: '512.000/mm³', ref: '150.000–400.000/mm³', alt: true },
        { test: 'PCR', val: '48 mg/L', ref: '< 5 mg/L', alt: true },
        { test: 'VHS', val: '52 mm/h', ref: '< 15 mm/h', alt: true },
        { test: 'Albumina', val: '3,1 g/dL', ref: '3,5–5,0 g/dL', alt: true },
        { test: 'Ferritina', val: '14 ng/mL', ref: '30–300 ng/mL', alt: true },
        { test: 'Calprotectina fecal', val: '890 µg/g', ref: '< 50 µg/g', alt: true },
        { test: 'Parasitológico de fezes (3 amostras)', val: 'Negativo', ref: 'Negativo', alt: false },
        { test: 'Coprocultura e pesquisa de toxina C. difficile', val: 'Negativas', ref: 'Negativas', alt: false }
      ],
      image: 'Ileocolonoscopia (entregar se solicitada): íleo terminal com úlceras longitudinais profundas, aspecto em pedra de calçamento e estenose parcial transponível; cólon com lesões salteadas, reto poupado. Biópsia: inflamação transmural, granulomas não caseosos. | Enterorressonância: espessamento parietal de 15 cm do íleo terminal, sinal do pente, sem abscesso.',
      note: 'Entregar exames laboratoriais quando solicitados. As imagens só devem ser entregues se o candidato solicitar ileocolonoscopia com biópsias. Se o candidato não examinar a região perianal, o paciente não menciona espontaneamente a secreção.',
      patientProfile: 'Estudante de engenharia, mora com os pais, solteiro. Tabagista 10 cigarros/dia há 5 anos. Não usa drogas ilícitas. Tio paterno com "doença no intestino" que operou. Sem viagens recentes.',
      script: [
        { trigger: 'Queixa principal', speech: 'Faz uns cinco meses que estou com diarreia, umas cinco vezes por dia, e uma dor chata aqui do lado direito da barriga. Perdi uns 7 quilos.' },
        { trigger: 'Sobre as fezes', speech: 'São pastosas, às vezes líquidas. Sangue eu vi pouco, só umas vezes. Às vezes acordo de noite para ir ao banheiro.' },
        { trigger: 'Sobre a dor', speech: 'A dor é em cólica, piora depois que eu como e melhora um pouco quando evacuo.' },
        { trigger: 'Sobre febre', speech: 'Tenho uma febrinha à tarde de vez em quando, 37 e meio.' },
        { trigger: 'Sobre tabagismo', speech: 'Fumo uns dez cigarros por dia, desde os 18.' },
        { trigger: 'Sobre a pele e boca', speech: 'Apareceram umas bolinhas vermelhas doloridas na canela e umas aftas que vão e voltam.' },
        { trigger: 'Sobre história familiar', speech: 'Meu tio tinha um problema no intestino, operou e tirou um pedaço, mas não sei o nome.' },
        { trigger: 'Pergunta ativa — diagnóstico', speech: 'Doutor(a), é câncer? Vou ter que usar bolsa?' }
      ],
      hiddenInfo: 'Tem uma ferida perto do ânus que solta pus há 2 meses — só revela se perguntado sobre sintomas perianais ou durante o exame | Sente vergonha e tem faltado às aulas por medo de não achar banheiro — só revela se perguntado sobre impacto na qualidade de vida | Tio com doença intestinal operada — só revela se perguntado sobre história familiar',
      actorBehavior: 'Jovem tímido, envergonhado ao falar de fezes e da região anal. Reluta no exame perianal, mas permite se o candidato explicar e pedir consentimento. Preocupado com câncer e com a possibilidade de cirurgia.'
    },
    instC: {
      diagnosis: 'Doença de Crohn ileocolônica com padrão inflamatório/estenosante e doença perianal fistulizante, atividade moderada a grave, com manifestações extraintestinais (eritema nodoso, aftas) e anemia ferropriva.',
      differentials: [
        'Retocolite ulcerativa — entra pela diarreia crônica e marcadores inflamatórios; sai pelo acometimento ileal, lesões salteadas, reto poupado, doença perianal fistulizante e granulomas',
        'Tuberculose intestinal — diferencial obrigatório no Brasil (acomete região ileocecal); granulomas caseosos, PPD/IGRA e pesquisa de BAAR na biópsia ajudam a excluir — deve ser afastada antes de imunossupressão',
        'Linfoma intestinal — considerar em massa ileal com perda ponderal; biópsia afasta',
        'Enterite infecciosa (Yersinia) ou parasitária — quadro agudo, culturas e parasitológico negativos',
        'Síndrome do intestino irritável — sai por sinais de alarme (perda ponderal, febre, diarreia noturna, anemia, PCR e calprotectina elevadas)'
      ],
      context: 'A doença de Crohn é uma doença inflamatória intestinal crônica, transmural, que pode acometer qualquer segmento do trato digestivo de forma salteada, com predileção pelo íleo terminal. Pico de incidência entre 15 e 35 anos; tabagismo é fator de risco e piora o curso. Este jovem apresenta diarreia crônica com sinais de alarme, massa em FID, fístula perianal e manifestações extraintestinais.',
      justify: 'Diarreia crônica (> 4 semanas) com sinais de alarme, massa em FID, doença perianal fistulizante, eritema nodoso, aftas, anemia ferropriva, marcadores inflamatórios e calprotectina elevados. Ileocolonoscopia com úlceras longitudinais, pedra de calçamento, lesões salteadas e granulomas não caseosos confirma. Classificação de Montreal: A2 L3 B2p.',
      expectedAnamnesis: 'Tempo e características da diarreia (frequência, consistência, sangue, muco, noturna) | Dor abdominal e relação com alimentação | Perda de peso e febre | Sintomas perianais (dor, secreção, abscessos) | Manifestações extraintestinais (articulares, cutâneas, oculares, orais) | Tabagismo | História familiar de DII | Viagens, uso de antibióticos, contato com TB | Impacto na qualidade de vida',
      expectedPhysical: 'Avaliação nutricional (peso, IMC) | Inspeção da cavidade oral | Exame abdominal com palpação de massa | Inspeção e exame perianal com consentimento | Pele (eritema nodoso, pioderma) | Articulações e olhos',
      expectedExams: [
        { exam: 'Hemograma, ferritina, B12, albumina', justify: 'Anemia e estado nutricional', expected: 'Anemia ferropriva, hipoalbuminemia' },
        { exam: 'PCR, VHS, calprotectina fecal', justify: 'Marcadores de inflamação intestinal', expected: 'Elevados' },
        { exam: 'Coprocultura, parasitológico, toxina C. difficile', justify: 'Excluir causas infecciosas', expected: 'Negativos' },
        { exam: 'Ileocolonoscopia com biópsias seriadas', justify: 'Diagnóstico e extensão', expected: 'Lesões salteadas, úlceras, granulomas' },
        { exam: 'Enterorressonância ou enterotomografia', justify: 'Extensão em delgado e complicações', expected: 'Espessamento ileal, estenose' },
        { exam: 'RM de pelve', justify: 'Mapear fístula perianal e abscessos', expected: 'Trajeto fistuloso' },
        { exam: 'Rastreio pré-imunobiológico: PPD/IGRA, radiografia de tórax, sorologias HBV, HCV, HIV', justify: 'Excluir TB latente e hepatites antes de imunossupressão', expected: 'Negativos' }
      ],
      expectedConduct: 'Farmacológica: Indução com corticoide sistêmico (prednisona 40 mg/dia com desmame) como ponte OU, dado o fenótipo de alto risco (jovem, doença perianal fistulizante, estenose), iniciar terapia avançada precoce (top-down): anti-TNF (infliximab ou adalimumabe), preferencialmente combinado com azatioprina, após rastreio de TB latente e hepatites | Doença perianal: drenagem de abscesso se presente, antibiótico (metronidazol/ciprofloxacino) e avaliação de sedenho pela coloproctologia | Reposição de ferro (EV preferencialmente se doença ativa) | Não farmacológica: cessação do tabagismo (essencial — reduz recidivas), suporte nutricional | Encaminhamento: coloproctologia, nutrição, psicologia | Vacinação antes da imunossupressão (influenza, pneumococo, hepatite B; evitar vivas) | Orientações: doença crônica com controle, não é câncer, maioria não precisa de bolsa',
      expectedCommunication: 'Apresentar-se e garantir privacidade | Pedir consentimento e explicar o exame perianal | Abordar o tabagismo de forma motivacional | Desmistificar câncer e estomia | Acolher o impacto emocional e acadêmico',
      criticalErrors: [
        'Não realizar ou não mencionar o exame perianal',
        'Iniciar imunossupressor/anti-TNF sem rastrear tuberculose latente e hepatite B',
        'Atribuir o quadro à síndrome do intestino irritável apesar dos sinais de alarme',
        'Não orientar a cessação do tabagismo',
        'Usar mesalazina como tratamento principal de Crohn moderado a grave fistulizante'
      ]
    },
    instD: {
      title: 'Doença de Crohn — Material de Estudo',
      sections: [
        {
          h: 'Definição e Epidemiologia',
          items: [
            { item: 'Inflamação transmural, segmentar, de qualquer porção do TGI (boca ao ânus); íleo terminal acometido em ~70%.', score: 1, ref: 'Harrison — Medicina Interna, 21ª ed.' },
            { item: 'Pico bimodal (15–35 e 50–70 anos); tabagismo é fator de risco e piora o prognóstico.', score: 1, ref: 'ECCO Guidelines on Crohn Disease, 2024' }
          ]
        },
        {
          h: 'Quadro Clínico e Sinais de Alarme',
          items: [
            { item: 'Diarreia crônica, dor em FID, perda ponderal, febre; doença perianal (fístulas, abscessos, plicomas) em até 1/3.', score: 2, ref: 'ECCO, 2024' },
            { item: 'Manifestações extraintestinais: eritema nodoso, pioderma gangrenoso, uveíte/episclerite, artrite periférica, espondiloartrite, colangite esclerosante.', score: 1, ref: 'ECCO, 2024' }
          ]
        },
        {
          h: 'Diagnóstico',
          items: [
            { item: 'Ileocolonoscopia com biópsias é o exame inicial; achados: lesões salteadas, úlceras aftoides/longitudinais, pedra de calçamento, granulomas não caseosos.', score: 2, ref: 'ECCO, 2024' },
            { item: 'Calprotectina fecal diferencia DII de SII e monitora atividade.', score: 1, ref: 'Consenso Brasileiro GEDIIB, 2023' },
            { item: 'Excluir tuberculose intestinal — diferencial crítico em país endêmico.', score: 1, ref: 'Consenso Brasileiro GEDIIB, 2023' }
          ]
        },
        {
          h: 'Tratamento',
          items: [
            { item: 'Corticoide induz remissão, mas não deve ser usado para manutenção.', score: 1, ref: 'ECCO, 2024' },
            { item: 'Fatores de mau prognóstico (idade jovem, doença perianal, extensa, estenosante/penetrante) indicam terapia avançada precoce: anti-TNF ± tiopurina (estudo SONIC).', score: 2, ref: 'Colombel JF et al., NEJM 2010' },
            { item: 'Antes de imunobiológico: rastrear TB latente (PPD/IGRA + RX tórax) e hepatite B; atualizar vacinas inativadas.', score: 2, ref: 'PCDT Doença de Crohn — Ministério da Saúde' },
            { item: 'Cessar tabagismo reduz recidiva e necessidade de cirurgia.', score: 1, ref: 'ECCO, 2024' }
          ]
        }
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // CASO 4 — RETOCOLITE ULCERATIVA
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 4,
    title: 'Diarreia com sangue e urgência para evacuar',
    sub: 'UBS — Atenção Primária',
    tema: 'Gastroenterologia',
    topic: 'Retocolite Ulcerativa',
    level: 'moderado',
    cardAccent: '#66BB6A',
    instA: {
      scenario: 'Unidade Básica de Saúde, consulta agendada pela paciente.',
      patient: 'R.S.P., 31 anos, feminino, professora.',
      complaint: 'Há 2 meses com diarreia com sangue e muco, urgência e sensação de evacuação incompleta.',
      tasks: [
        'Realize a anamnese dirigida.',
        'Realize o exame físico dirigido.',
        'Formule a hipótese diagnóstica, os diferenciais e classifique a gravidade.',
        'Solicite os exames complementares adequados.',
        'Proponha o tratamento e oriente a paciente.'
      ]
    },
    instB: {
      vitals: {
        PA: '118/74 mmHg',
        FC: '84 bpm',
        FR: '16 irpm',
        Tax: '36,8 °C',
        Peso: '60 kg',
        Altura: '1,64 m',
        IMC: '22,3 kg/m²'
      },
      physicalGeneral: 'Bom estado geral, corada, hidratada, anictérica, afebril.',
      physicalSeg: 'ABDOME: plano, flácido, dor leve à palpação de fossa ilíaca esquerda e hipogástrio, sem massas, sem visceromegalias, sem sinais de peritonite | PERIANAL: sem fissuras, fístulas ou plicomas | TOQUE RETAL: mucosa de textura granular, dolorosa, dedo de luva com sangue vivo e muco | PELE E ARTICULAÇÕES: sem alterações.',
      labs: [
        { test: 'Hemoglobina', val: '11,9 g/dL', ref: '12–16 g/dL', alt: true },
        { test: 'Leucócitos', val: '9.200/mm³', ref: '4.000–11.000/mm³', alt: false },
        { test: 'PCR', val: '14 mg/L', ref: '< 5 mg/L', alt: true },
        { test: 'Albumina', val: '3,8 g/dL', ref: '3,5–5,0 g/dL', alt: false },
        { test: 'Calprotectina fecal', val: '640 µg/g', ref: '< 50 µg/g', alt: true },
        { test: 'Coprocultura e toxina C. difficile', val: 'Negativas', ref: 'Negativas', alt: false },
        { test: 'Parasitológico de fezes', val: 'Negativo', ref: 'Negativo', alt: false }
      ],
      image: 'Colonoscopia (entregar se solicitada): inflamação contínua desde a linha pectínea até o cólon sigmoide (35 cm da borda anal), com perda do padrão vascular, friabilidade, erosões e sangramento ao toque; cólon proximal normal. Biópsias: distorção arquitetural de criptas, abscessos crípticos e plasmocitose basal, sem granulomas.',
      note: 'Entregar exames laboratoriais conforme solicitados. A colonoscopia só deve ser entregue se solicitada com biópsias. Se o candidato perguntar sobre tabagismo, a paciente informa que parou de fumar há 1 ano.',
      patientProfile: 'Professora de ensino fundamental, casada, sem filhos, deseja engravidar em 1–2 anos. Ex-tabagista (parou há 1 ano). Sem uso recente de antibióticos. Sem viagens. Sem casos semelhantes na família.',
      script: [
        { trigger: 'Queixa principal', speech: 'Doutor(a), faz uns dois meses que minhas fezes vêm com sangue e uma gosma, e eu tenho que correr para o banheiro.' },
        { trigger: 'Sobre frequência', speech: 'Vou umas cinco ou seis vezes por dia, quase sempre com sangue. À noite acordo uma vez.' },
        { trigger: 'Sobre tenesmo', speech: 'Fico com aquela sensação de que não terminou, volto ao banheiro e sai só um pouco de sangue e muco.' },
        { trigger: 'Sobre dor', speech: 'Dá uma cólica do lado esquerdo antes de evacuar, depois melhora.' },
        { trigger: 'Sobre febre e peso', speech: 'Febre não tive. Peso continua o mesmo.' },
        { trigger: 'Sobre tabagismo', speech: 'Eu fumava, parei faz um ano. Será que tem a ver?' },
        { trigger: 'Sobre planos reprodutivos', speech: 'A gente queria muito ter filho no ano que vem. Isso atrapalha?' },
        { trigger: 'Pergunta ativa — diagnóstico', speech: 'Achei que era hemorroida. O que eu tenho?' }
      ],
      hiddenInfo: 'Parou de fumar há 1 ano (a cessação do tabagismo pode desencadear RCU) — só revela se perguntado sobre tabagismo | Deseja engravidar — só revela se perguntado sobre planos reprodutivos ou métodos contraceptivos | Usa ibuprofeno para cólica menstrual — só revela se perguntado sobre medicamentos',
      actorBehavior: 'Colaborativa, um pouco ansiosa, envergonhada de falar sobre evacuação. Pergunta bastante sobre gravidez. Aceita o toque retal se o candidato explicar.'
    },
    instC: {
      diagnosis: 'Retocolite ulcerativa, extensão distal (proctossigmoidite / colite esquerda E2 limitada ao sigmoide), atividade leve a moderada pelos critérios de Truelove-Witts.',
      differentials: [
        'Doença hemorroidária — entra pelo sangramento, mas não explica diarreia, muco, urgência, tenesmo e marcadores inflamatórios elevados',
        'Doença de Crohn com colite — sai pelo acometimento contínuo a partir do reto, ausência de doença perianal e de granulomas',
        'Colite infecciosa (Shigella, Campylobacter, amebíase, C. difficile) — deve ser excluída com coprocultura, toxina e parasitológico; quadro crônico de 2 meses torna menos provável',
        'Câncer colorretal — sangramento e alteração do hábito exigem colonoscopia; idade jovem e padrão inflamatório tornam improvável'
      ],
      context: 'A retocolite ulcerativa (RCU) é uma DII que acomete a mucosa de forma contínua a partir do reto, em extensão variável. Apresenta-se com diarreia sanguinolenta, urgência, tenesmo e muco. A cessação do tabagismo é fator associado ao início da doença. Esta paciente de 31 anos tem quadro típico de proctossigmoidite.',
      justify: 'Diarreia sanguinolenta com muco, urgência e tenesmo há 2 meses, calprotectina elevada, culturas negativas. Colonoscopia com inflamação contínua a partir do reto, friabilidade e perda do padrão vascular; histologia com distorção arquitetural e abscessos crípticos, sem granulomas. Truelove-Witts: < 6 evacuações/dia, sem febre, FC < 90, Hb > 10,5 — leve a moderada.',
      expectedAnamnesis: 'Número de evacuações e presença de sangue | Urgência, tenesmo, muco, sintomas noturnos | Dor abdominal | Febre, perda de peso | Uso de antibióticos, AINE, viagens | Tabagismo (atual e prévio) | História familiar de DII e câncer colorretal | Manifestações extraintestinais | Planos reprodutivos',
      expectedPhysical: 'Sinais vitais (critérios de gravidade) | Exame abdominal | Inspeção perianal | Toque retal | Pesquisa de manifestações extraintestinais',
      expectedExams: [
        { exam: 'Hemograma, PCR, albumina', justify: 'Gravidade (Truelove-Witts)', expected: 'Anemia leve, PCR discretamente elevada' },
        { exam: 'Coprocultura, toxina C. difficile, parasitológico', justify: 'Excluir infecção', expected: 'Negativos' },
        { exam: 'Calprotectina fecal', justify: 'Inflamação colônica', expected: 'Elevada' },
        { exam: 'Colonoscopia com biópsias', justify: 'Diagnóstico e extensão', expected: 'Inflamação contínua desde o reto' }
      ],
      expectedConduct: 'Farmacológica: Mesalazina tópica (supositório 1 g/dia ou enema 1–4 g/dia) associada a mesalazina oral 2,4–4,8 g/dia — a combinação é superior à monoterapia na colite esquerda leve a moderada | Se sem resposta em 2–4 semanas: budesonida MMX ou prednisona oral com desmame | Manutenção: mesalazina oral ± tópica | Evitar AINE (podem desencadear surtos) | Não farmacológica: dieta habitual equilibrada, sem restrições desnecessárias | Encaminhamento: gastroenterologia para seguimento | Orientações: doença crônica com controle, gravidez é possível e preferencialmente planejada em remissão; mesalazina é segura na gestação; colonoscopia de vigilância após 8 anos de doença; não retomar o tabagismo apesar da associação',
      expectedCommunication: 'Apresentar-se e garantir privacidade | Explicar e pedir consentimento para o toque retal | Explicar a doença em linguagem acessível | Abordar o desejo de gestação | Esclarecer que não deve voltar a fumar',
      criticalErrors: [
        'Atribuir o sangramento a hemorroidas sem investigação (sem colonoscopia)',
        'Não excluir causas infecciosas antes do diagnóstico',
        'Prescrever antidiarreico (loperamida) em quadro de colite ativa',
        'Prescrever corticoide como manutenção prolongada',
        'Sugerir retomar o tabagismo como tratamento'
      ]
    },
    instD: {
      title: 'Retocolite Ulcerativa — Material de Estudo',
      sections: [
        {
          h: 'Definição e Classificação',
          items: [
            { item: 'Inflamação da mucosa, contínua, iniciando no reto; Montreal: E1 proctite, E2 colite esquerda (até flexura esplênica), E3 pancolite.', score: 1, ref: 'ECCO Guidelines on Ulcerative Colitis, 2022' },
            { item: 'Gravidade pelos critérios de Truelove-Witts: grave se ≥ 6 evacuações com sangue + 1 sinal sistêmico (febre, FC > 90, Hb < 10,5, VHS > 30).', score: 2, ref: 'Truelove & Witts, BMJ 1955' }
          ]
        },
        {
          h: 'Diagnóstico',
          items: [
            { item: 'Colonoscopia com biópsias: inflamação contínua, friabilidade, perda do padrão vascular; histologia com distorção de criptas e plasmocitose basal.', score: 2, ref: 'ECCO, 2022' },
            { item: 'Excluir infecções (incluindo C. difficile e CMV em casos graves) antes do diagnóstico.', score: 1, ref: 'ECCO, 2022' }
          ]
        },
        {
          h: 'Tratamento',
          items: [
            { item: 'Doença leve a moderada distal: mesalazina tópica + oral é mais eficaz que oral isolada.', score: 2, ref: 'AGA Clinical Practice Guideline, 2019' },
            { item: 'Corticoide para indução se falha da mesalazina; nunca para manutenção.', score: 1, ref: 'ECCO, 2022' },
            { item: 'Colite grave: internação, corticoide EV, profilaxia de TEV, avaliação cirúrgica; resgate com infliximab ou ciclosporina.', score: 1, ref: 'ECCO, 2022' }
          ]
        },
        {
          h: 'Orientações e Seguimento',
          items: [
            { item: 'Risco aumentado de câncer colorretal: colonoscopia de vigilância a partir de 8 anos de doença (exceto proctite isolada).', score: 1, ref: 'ECCO, 2022' },
            { item: 'Gestação idealmente planejada em remissão; mesalazina é segura.', score: 1, ref: 'ECCO Consensus on Pregnancy in IBD, 2022' }
          ]
        }
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // CASO 5 — HEPATITE B CRÔNICA
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 5,
    title: 'Sorologia alterada em exame de rotina',
    sub: 'UBS — Atenção Primária',
    tema: 'Gastroenterologia',
    topic: 'Hepatite B Crônica',
    level: 'moderado',
    cardAccent: '#66BB6A',
    instA: {
      scenario: 'Unidade Básica de Saúde. Paciente retorna para mostrar exames solicitados em campanha de testagem rápida.',
      patient: 'C.F.O., 38 anos, masculino, motorista de aplicativo.',
      complaint: 'O teste rápido de hepatite B deu positivo e quer saber o que significa.',
      tasks: [
        'Realize a anamnese dirigida, incluindo fatores de risco e contactantes.',
        'Realize o exame físico dirigido.',
        'Interprete o perfil sorológico e classifique a fase da infecção.',
        'Solicite os exames complementares adequados.',
        'Defina a conduta, incluindo indicação de tratamento e medidas para contactantes.'
      ]
    },
    instB: {
      vitals: {
        PA: '124/80 mmHg',
        FC: '76 bpm',
        FR: '14 irpm',
        Tax: '36,4 °C',
        Peso: '78 kg',
        Altura: '1,75 m',
        IMC: '25,5 kg/m²'
      },
      physicalGeneral: 'Bom estado geral, corado, hidratado, anictérico, sem estigmas de hepatopatia crônica.',
      physicalSeg: 'ABDOME: plano, flácido, indolor, fígado palpável no rebordo costal direito, de consistência normal, borda fina; baço não palpável; sem ascite | PELE: sem telangiectasias, sem eritema palmar | LINFONODOS: sem linfonodomegalias.',
      labs: [
        { test: 'HBsAg', val: 'Reagente', ref: 'Não reagente', alt: true },
        { test: 'HBsAg (repetido após 7 meses — exame antigo trazido pelo paciente)', val: 'Reagente', ref: 'Não reagente', alt: true },
        { test: 'Anti-HBc IgG (total)', val: 'Reagente', ref: 'Não reagente', alt: true },
        { test: 'Anti-HBc IgM', val: 'Não reagente', ref: 'Não reagente', alt: false },
        { test: 'HBeAg', val: 'Reagente', ref: 'Não reagente', alt: true },
        { test: 'Anti-HBe', val: 'Não reagente', ref: '—', alt: false },
        { test: 'HBV-DNA (carga viral)', val: '8,4 × 10⁶ UI/mL', ref: 'Indetectável', alt: true },
        { test: 'ALT', val: '96 U/L', ref: '< 41 U/L', alt: true },
        { test: 'AST', val: '64 U/L', ref: '< 40 U/L', alt: true },
        { test: 'Plaquetas', val: '210.000/mm³', ref: '150.000–400.000/mm³', alt: false },
        { test: 'Anti-HCV, HIV, anti-HDV', val: 'Não reagentes', ref: 'Não reagentes', alt: false },
        { test: 'Elastografia hepática (FibroScan)', val: '9,6 kPa', ref: '< 7 kPa', alt: true }
      ],
      image: 'Ultrassonografia de abdome (entregar se solicitada): fígado de dimensões normais, ecotextura levemente heterogênea, contornos regulares, sem nódulos. Baço de tamanho normal. Veia porta de calibre normal.',
      note: 'Entregar sorologias inicialmente. Carga viral, transaminases e elastografia somente se solicitados. Entregar USG se solicitada.',
      patientProfile: 'Motorista de aplicativo, casado há 6 anos, um filho de 4 anos. Nasceu no interior do Amazonas, mudou-se jovem. A mãe "teve problema no fígado" e faleceu aos 52 anos. Bebe 3–4 latas de cerveja nos fins de semana. Não sabe se é vacinado.',
      script: [
        { trigger: 'Queixa principal', speech: 'Doutor(a), fiz aquele teste rápido na campanha e deu positivo para hepatite B. Eu não sinto nada. O que isso quer dizer?' },
        { trigger: 'Sobre sintomas', speech: 'Sinto um cansaço às vezes, mas acho que é do trabalho. Nunca fiquei amarelo.' },
        { trigger: 'Sobre origem e família', speech: 'Nasci no interior do Amazonas. Minha mãe morreu de problema no fígado, disseram que era cirrose, mas ela não bebia.' },
        { trigger: 'Sobre álcool', speech: 'Bebo umas três ou quatro cervejas no sábado e domingo.' },
        { trigger: 'Sobre família atual', speech: 'Sou casado, tenho um filho de 4 anos. Minha esposa nunca fez exame de hepatite, que eu saiba.' },
        { trigger: 'Sobre vacinação', speech: 'Vacina de hepatite? Acho que nunca tomei.' },
        { trigger: 'Sobre preocupações', speech: 'Eu passei isso para minha esposa? E meu filho?' },
        { trigger: 'Pergunta ativa — diagnóstico', speech: 'Isso tem cura? Vou ter que tomar remédio para sempre?' }
      ],
      hiddenInfo: 'A mãe morreu de câncer de fígado, não só cirrose — só revela se perguntado diretamente sobre câncer ou tumor na família | Um irmão também tem hepatite B — só revela se perguntado sobre outros familiares com hepatite | Não usa preservativo com a esposa — só revela se perguntado sobre práticas sexuais',
      actorBehavior: 'Preocupado principalmente com a família. Faz perguntas objetivas. Fica aliviado ao saber que existe tratamento eficaz e que a família pode ser protegida pela vacina.'
    },
    instC: {
      diagnosis: 'Hepatite B crônica HBeAg positiva em fase de imunoatividade (hepatite crônica HBeAg+), com carga viral elevada, ALT > 2× LSN e fibrose significativa à elastografia — indicação de tratamento antiviral.',
      differentials: [
        'Hepatite B aguda — sai pelo anti-HBc IgM não reagente e HBsAg persistente por > 6 meses',
        'Infecção crônica HBeAg+ (imunotolerância) — sai pela ALT elevada e fibrose; nessa fase a ALT é normal',
        'Coinfecção pelo vírus delta (HDV) — deve ser pesquisada em paciente da região amazônica; anti-HDV negativo exclui',
        'Doença hepática alcoólica ou esteatose metabólica — podem coexistir e somar dano, mas não explicam a sorologia'
      ],
      context: 'A hepatite B crônica afeta ~250 milhões de pessoas no mundo e é causa importante de cirrose e carcinoma hepatocelular (CHC). No Brasil, a Região Norte tem maior prevalência e a transmissão vertical/intrafamiliar é relevante. Este paciente amazonense, com mãe falecida por hepatopatia, tem HBsAg persistente, HBeAg positivo, carga viral alta e atividade inflamatória.',
      justify: 'HBsAg reagente por > 6 meses define cronicidade. HBeAg reagente + HBV-DNA > 20.000 UI/mL + ALT > 2× LSN + elastografia > 9 kPa (fibrose significativa) caracterizam fase de imunoatividade e preenchem critério de tratamento pelo PCDT. História familiar de CHC reforça a indicação.',
      expectedAnamnesis: 'Sintomas de hepatopatia (icterícia, colúria, fadiga) | Fatores de risco: origem geográfica, transmissão vertical, sexual, transfusão, drogas injetáveis, tatuagens | História familiar de hepatopatia e CHC | Consumo de álcool | Medicamentos | Status vacinal | Contactantes domiciliares e sexuais | Práticas sexuais e uso de preservativo',
      expectedPhysical: 'Pesquisa de icterícia e estigmas de hepatopatia crônica | Palpação hepática e esplênica | Pesquisa de ascite | Avaliação antropométrica',
      expectedExams: [
        { exam: 'Anti-HBc IgM, HBeAg, anti-HBe', justify: 'Diferenciar aguda de crônica e definir a fase', expected: 'IgM negativo, HBeAg positivo' },
        { exam: 'HBV-DNA quantitativo', justify: 'Indicação e monitoramento do tratamento', expected: 'Elevado' },
        { exam: 'ALT, AST, plaquetas, albumina, INR, bilirrubinas', justify: 'Atividade e função hepática', expected: 'ALT > 2× LSN' },
        { exam: 'Elastografia hepática ou APRI/FIB-4', justify: 'Estadiar fibrose', expected: 'Fibrose significativa' },
        { exam: 'Anti-HDV, anti-HCV, HIV, anti-HAV IgG', justify: 'Coinfecções e necessidade de vacinar para hepatite A', expected: 'Negativos' },
        { exam: 'Ultrassonografia abdominal ± alfafetoproteína', justify: 'Rastreio de CHC (indicado pela história familiar)', expected: 'Sem nódulos' },
        { exam: 'Função renal e fósforo', justify: 'Basal antes de tenofovir', expected: 'Normais' }
      ],
      expectedConduct: 'Farmacológica: Tenofovir desoproxila (TDF) 300 mg VO 1x/dia (ou entecavir 0,5 mg/dia; TAF se doença renal ou óssea) — tratamento de longo prazo | Vacina para hepatite A se anti-HAV negativo | Monitoramento: carga viral a cada 3–6 meses no início, função renal, HBeAg/anti-HBe | Rastreio de CHC com USG semestral (história familiar de CHC) | Não farmacológica: abstinência ou redução importante do álcool, evitar hepatotóxicos e chás/fitoterápicos | Contactantes: testar esposa e filho (HBsAg, anti-HBs, anti-HBc) e vacinar os suscetíveis; testar irmãos | Orientações: uso de preservativo até a esposa estar imunizada; não compartilhar lâminas e escovas; não doar sangue; doença de notificação compulsória | Encaminhamento: serviço de referência em hepatites virais (SAE/ambulatório de hepatologia)',
      expectedCommunication: 'Explicar o significado dos marcadores em linguagem simples | Desfazer culpa e acolher a preocupação com a família | Explicar que o tratamento controla o vírus (cura funcional é rara) e reduz o risco de cirrose e câncer | Reforçar adesão | Orientar sigilo e notificação compulsória',
      criticalErrors: [
        'Não diferenciar infecção aguda de crônica (não solicitar anti-HBc IgM ou desconsiderar tempo > 6 meses)',
        'Não solicitar carga viral e avaliação de fibrose antes de decidir o tratamento',
        'Não orientar testagem e vacinação dos contactantes domiciliares e sexuais',
        'Não pesquisar vírus delta em paciente da região amazônica',
        'Não indicar rastreio de carcinoma hepatocelular diante de história familiar'
      ]
    },
    instD: {
      title: 'Hepatite B Crônica — Material de Estudo',
      sections: [
        {
          h: 'Interpretação Sorológica',
          items: [
            { item: 'HBsAg > 6 meses = infecção crônica; anti-HBc IgM = infecção aguda; anti-HBs isolado = vacinação; anti-HBc + anti-HBs = cura de infecção prévia.', score: 2, ref: 'PCDT Hepatite B e Coinfecções — Ministério da Saúde, 2023' },
            { item: 'Fases (EASL): infecção crônica HBeAg+ (tolerância), hepatite crônica HBeAg+, infecção crônica HBeAg− (portador inativo), hepatite crônica HBeAg−.', score: 1, ref: 'EASL Clinical Practice Guidelines — HBV, 2017' }
          ]
        },
        {
          h: 'Indicações de Tratamento',
          items: [
            { item: 'Tratar: HBV-DNA > 2.000 UI/mL + ALT elevada e/ou fibrose moderada; cirrose com qualquer carga viral detectável; história familiar de CHC ou cirrose; manifestações extra-hepáticas; imunossupressão.', score: 2, ref: 'PCDT Hepatite B — MS, 2023' },
            { item: 'Primeira linha: tenofovir (TDF ou TAF) ou entecavir — alta barreira genética.', score: 2, ref: 'EASL, 2017' }
          ]
        },
        {
          h: 'Prevenção e Contactantes',
          items: [
            { item: 'Testar e vacinar contactantes domiciliares e sexuais suscetíveis; uso de preservativo até imunização.', score: 2, ref: 'PCDT Hepatite B — MS, 2023' },
            { item: 'Rastreio de CHC com USG semestral em cirróticos e em grupos de risco (história familiar de CHC, africanos, asiáticos > 40 anos).', score: 1, ref: 'AASLD HBV Guidance, 2018' }
          ]
        },
        {
          h: 'Particularidades no Brasil',
          items: [
            { item: 'Região Amazônica: maior prevalência de HBV e de coinfecção pelo vírus delta (HDV) — sempre pesquisar anti-HDV.', score: 1, ref: 'Boletim Epidemiológico Hepatites Virais — MS' },
            { item: 'Hepatite B é doença de notificação compulsória.', score: 1, ref: 'Portaria de Consolidação MS nº 4/2017' }
          ]
        }
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // CASO 6 — DOENÇA CELÍACA
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 6,
    title: 'Anemia que não melhora com ferro e distensão abdominal',
    sub: 'UBS — Atenção Primária',
    tema: 'Gastroenterologia',
    topic: 'Doença Celíaca',
    level: 'moderado',
    cardAccent: '#66BB6A',
    instA: {
      scenario: 'Unidade Básica de Saúde, consulta de retorno.',
      patient: 'F.B.R., 27 anos, feminino, analista administrativa.',
      complaint: 'Continua cansada e anêmica mesmo tomando sulfato ferroso há 4 meses; tem barriga estufada e fezes amolecidas.',
      tasks: [
        'Realize a anamnese dirigida.',
        'Realize o exame físico dirigido.',
        'Formule a hipótese diagnóstica para a anemia refratária e os diferenciais.',
        'Solicite os exames complementares adequados, na ordem correta.',
        'Proponha o tratamento e oriente a paciente.'
      ]
    },
    instB: {
      vitals: {
        PA: '106/68 mmHg',
        FC: '88 bpm',
        FR: '16 irpm',
        Tax: '36,5 °C',
        Peso: '49 kg',
        Altura: '1,62 m',
        IMC: '18,7 kg/m²'
      },
      physicalGeneral: 'Bom estado geral, descorada 2+/4+, hidratada, anictérica, emagrecida.',
      physicalSeg: 'BOCA: estomatite angular (queilite), glossite leve, defeitos de esmalte dentário | ABDOME: discretamente distendido, timpânico, ruídos hidroaéreos aumentados, indolor, sem visceromegalias | PELE: pápulas e vesículas pruriginosas agrupadas em cotovelos e região extensora dos joelhos, com escoriações | MEMBROS: sem edema.',
      labs: [
        { test: 'Hemoglobina', val: '9,6 g/dL', ref: '12–16 g/dL', alt: true },
        { test: 'VCM', val: '74 fL', ref: '80–100 fL', alt: true },
        { test: 'Ferritina', val: '6 ng/mL', ref: '15–150 ng/mL', alt: true },
        { test: 'Ácido fólico sérico', val: '2,1 ng/mL', ref: '> 3,0 ng/mL', alt: true },
        { test: 'Vitamina D (25-OH)', val: '14 ng/mL', ref: '> 30 ng/mL', alt: true },
        { test: 'ALT', val: '58 U/L', ref: '< 35 U/L', alt: true },
        { test: 'IgA total', val: '210 mg/dL', ref: '70–400 mg/dL', alt: false },
        { test: 'Antitransglutaminase tecidual IgA (tTG-IgA)', val: '186 U/mL (> 10× LSN)', ref: '< 15 U/mL', alt: true },
        { test: 'Antiendomísio IgA', val: 'Reagente', ref: 'Não reagente', alt: true },
        { test: 'TSH', val: '3,2 mUI/L', ref: '0,4–4,5 mUI/L', alt: false }
      ],
      image: 'Endoscopia digestiva alta com biópsias de duodeno (entregar se solicitada): mucosa duodenal com padrão em mosaico e serrilhamento das pregas. Histologia (4 fragmentos de 2ª porção e 1 de bulbo): atrofia vilositária total, hiperplasia de criptas e linfocitose intraepitelial > 40/100 enterócitos — Marsh 3c.',
      note: 'Entregar exames laboratoriais quando solicitados. A sorologia celíaca só deve ser entregue se o candidato suspeitar de doença celíaca ou má absorção. Se o candidato perguntar sobre a dieta durante a investigação, a paciente diz que está comendo glúten normalmente.',
      patientProfile: 'Analista administrativa, solteira, mora sozinha. Menstruação regular, fluxo normal. Não é vegetariana. Tomou sulfato ferroso 40 mg de ferro elementar 2x/dia por 4 meses, com boa adesão. A irmã tem hipotireoidismo e a mãe tem diabetes tipo 1.',
      script: [
        { trigger: 'Queixa principal', speech: 'Eu tomo o ferro certinho faz quatro meses e o exame continua dando anemia. Vivo cansada.' },
        { trigger: 'Sobre o intestino', speech: 'Minha barriga vive estufada, com gases. As fezes são mais moles, umas duas ou três vezes por dia, e boiam no vaso.' },
        { trigger: 'Sobre menstruação', speech: 'Minha menstruação é normal, dura uns quatro dias, não é muito forte.' },
        { trigger: 'Sobre peso', speech: 'Perdi uns quatro quilos nos últimos meses sem fazer dieta.' },
        { trigger: 'Sobre a pele', speech: 'Tenho umas bolinhas que coçam muito nos cotovelos e joelhos, o dermatologista passou pomada mas sempre volta.' },
        { trigger: 'Sobre alimentação', speech: 'Como de tudo: pão de manhã, macarrão, bolo. Às vezes percebo que piora a barriga depois de pizza.' },
        { trigger: 'Sobre família', speech: 'Minha mãe tem diabetes desde criança, tipo 1, e minha irmã tem problema de tireoide.' },
        { trigger: 'Pergunta ativa — diagnóstico', speech: 'Por que o ferro não está funcionando? Tenho alguma doença grave?' }
      ],
      hiddenInfo: 'Fezes que boiam e são gordurosas (esteatorreia) — só revela se perguntado sobre aspecto das fezes | Lesões de pele pruriginosas em cotovelos (dermatite herpetiforme) — só revela se perguntada sobre a pele | Mãe com DM1 e irmã com tireoidite autoimune — só revela se perguntada sobre história familiar',
      actorBehavior: 'Cansada, frustrada com a falta de melhora. Colaborativa. Preocupa-se ao ouvir que terá dieta restritiva para sempre e pergunta se pode comer "só um pouquinho" de vez em quando.'
    },
    instC: {
      diagnosis: 'Doença celíaca clássica com síndrome de má absorção (anemia ferropriva refratária, deficiência de folato e vitamina D, esteatorreia, perda ponderal), dermatite herpetiforme e elevação de transaminases.',
      differentials: [
        'Perda sanguínea oculta (menorragia ou TGI) — sai pela menstruação normal; refratariedade ao ferro oral com deficiências múltiplas sugere má absorção',
        'Gastrite atrófica autoimune / H. pylori — causam má absorção de ferro, mas não explicam esteatorreia, dermatite e sorologia celíaca positiva',
        'Síndrome do intestino irritável — sai pelos sinais de alarme (anemia, perda ponderal, esteatorreia)',
        'Giardíase — pode causar atrofia vilositária e má absorção; parasitológico deve ser solicitado, mas não explica a sorologia',
        'Doença de Crohn de delgado — considerar se não houver resposta à dieta'
      ],
      context: 'A doença celíaca é uma enteropatia imunomediada desencadeada pelo glúten em indivíduos geneticamente predispostos (HLA-DQ2/DQ8), com prevalência de ~1%. Anemia ferropriva refratária ao ferro oral é uma das apresentações mais comuns em adultos. Associa-se a outras doenças autoimunes (DM1, tireoidite). Esta paciente tem quadro de má absorção, dermatite herpetiforme e história familiar de autoimunidade.',
      justify: 'Anemia ferropriva refratária + deficiência de folato e vitamina D + esteatorreia + perda de peso + dermatite herpetiforme + história familiar autoimune. tTG-IgA > 10× LSN com IgA total normal e antiendomísio positivo; biópsia duodenal com atrofia vilositária (Marsh 3c) confirma.',
      expectedAnamnesis: 'Adesão e forma de uso do ferro (com refeição, laticínios, IBP) | Perdas sanguíneas: menstruação, sangramento digestivo | Hábito intestinal, aspecto das fezes (esteatorreia), distensão | Perda de peso | Relação dos sintomas com alimentos com glúten | Lesões de pele pruriginosas | Dieta (vegetarianismo) | História familiar de doença celíaca e autoimunes | Sintomas de outras deficiências',
      expectedPhysical: 'Avaliação nutricional | Palidez de mucosas | Cavidade oral (queilite, glossite, aftas, esmalte) | Exame abdominal (distensão) | Pele: dermatite herpetiforme',
      expectedExams: [
        { exam: 'tTG-IgA + IgA total (com paciente consumindo glúten)', justify: 'Rastreio sorológico de escolha; IgA total para excluir deficiência de IgA (falso-negativo)', expected: 'tTG-IgA elevado, IgA normal' },
        { exam: 'Antiendomísio IgA', justify: 'Alta especificidade, confirmação sorológica', expected: 'Reagente' },
        { exam: 'EDA com ≥ 4 biópsias de 2ª porção duodenal + 1–2 de bulbo', justify: 'Confirmação histológica (padrão-ouro em adultos)', expected: 'Atrofia vilositária, linfocitose intraepitelial' },
        { exam: 'Ferritina, folato, B12, vitamina D, cálcio, albumina', justify: 'Deficiências nutricionais', expected: 'Deficiências múltiplas' },
        { exam: 'Densitometria óssea', justify: 'Risco de osteopenia por má absorção de cálcio/vitamina D', expected: 'Pode haver osteopenia' },
        { exam: 'TSH e glicemia', justify: 'Autoimunidades associadas', expected: 'Normais' }
      ],
      expectedConduct: 'Não farmacológica: dieta isenta de glúten (trigo, centeio, cevada; aveia somente certificada sem contaminação) para toda a vida — único tratamento eficaz | Acompanhamento com nutricionista; orientar contaminação cruzada e leitura de rótulos (Lei 10.674/2003 — "contém glúten") | Farmacológica: reposição de ferro (VO, ou EV se intolerância/refratariedade persistente), ácido fólico 5 mg/dia, vitamina D e cálcio | Dermatite herpetiforme: dieta sem glúten; dapsona se prurido intenso | Seguimento: tTG-IgA em 6 e 12 meses (espera-se queda), depois anual; densitometria; vacina antipneumocócica (hipoesplenismo funcional) | Rastreio de familiares de 1º grau com tTG-IgA | Orientações: não há quantidade "segura" de glúten; associações de pacientes celíacos (ACELBRA)',
      expectedCommunication: 'Explicar por que o ferro não funcionou | Explicar a doença e a dieta com empatia, reconhecendo a dificuldade | Corrigir a ideia de que "um pouquinho" de glúten é aceitável | Orientar testagem de familiares',
      criticalErrors: [
        'Orientar retirada do glúten antes de completar sorologia e biópsia (pode negativar os exames)',
        'Solicitar tTG-IgA sem dosar IgA total',
        'Apenas aumentar a dose de ferro oral sem investigar a causa da refratariedade',
        'Orientar que pequenas quantidades de glúten são permitidas',
        'Não investigar perdas sanguíneas como causa de anemia ferropriva'
      ]
    },
    instD: {
      title: 'Doença Celíaca — Material de Estudo',
      sections: [
        {
          h: 'Definição e Epidemiologia',
          items: [
            { item: 'Enteropatia autoimune desencadeada pelo glúten em portadores de HLA-DQ2/DQ8; prevalência ~1%, mais comum em mulheres.', score: 1, ref: 'ACG Clinical Guideline — Celiac Disease, 2023' },
            { item: 'Grupos de risco para rastreio: parentes de 1º grau, DM1, tireoidite autoimune, síndrome de Down, anemia ferropriva inexplicada, osteoporose precoce, elevação inexplicada de transaminases.', score: 1, ref: 'ACG, 2023' }
          ]
        },
        {
          h: 'Diagnóstico',
          items: [
            { item: 'tTG-IgA com IgA total é o exame inicial; deve ser feito com dieta contendo glúten.', score: 2, ref: 'ACG, 2023' },
            { item: 'EDA com ≥ 4 biópsias de duodeno distal e 1–2 de bulbo; classificação de Marsh-Oberhuber.', score: 2, ref: 'ESsCD Guideline, 2019' },
            { item: 'Dermatite herpetiforme é a manifestação cutânea patognomônica (depósitos granulares de IgA na papila dérmica).', score: 1, ref: 'Harrison — Medicina Interna, 21ª ed.' }
          ]
        },
        {
          h: 'Tratamento e Seguimento',
          items: [
            { item: 'Dieta isenta de glúten estrita e por toda a vida, com acompanhamento nutricional.', score: 2, ref: 'ACG, 2023' },
            { item: 'Corrigir deficiências (ferro, folato, B12, vitamina D, cálcio) e avaliar densidade óssea.', score: 1, ref: 'ACG, 2023' },
            { item: 'Doença refratária: confirmar diagnóstico, buscar exposição inadvertida ao glúten, investigar linfoma T associado.', score: 1, ref: 'ESsCD Guideline, 2019' }
          ]
        }
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // CASO 7 — SÍNDROME DO INTESTINO IRRITÁVEL
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 7,
    title: 'Dor abdominal recorrente com alternância do hábito intestinal',
    sub: 'UBS — Atenção Primária',
    tema: 'Gastroenterologia',
    topic: 'Síndrome do Intestino Irritável',
    level: 'fácil',
    cardAccent: '#66BB6A',
    instA: {
      scenario: 'Unidade Básica de Saúde, consulta agendada.',
      patient: 'T.M.A., 29 anos, feminino, advogada.',
      complaint: 'Dor na barriga em cólica há 1 ano, que melhora ao evacuar, com períodos de diarreia e de prisão de ventre.',
      tasks: [
        'Realize a anamnese dirigida, pesquisando sinais de alarme.',
        'Realize o exame físico dirigido.',
        'Formule a hipótese diagnóstica com base em critérios formais.',
        'Indique os exames complementares pertinentes (e justifique os desnecessários).',
        'Proponha o tratamento e oriente a paciente.'
      ]
    },
    instB: {
      vitals: {
        PA: '116/72 mmHg',
        FC: '78 bpm',
        FR: '14 irpm',
        Tax: '36,4 °C',
        Peso: '62 kg (estável)',
        Altura: '1,66 m',
        IMC: '22,5 kg/m²'
      },
      physicalGeneral: 'Bom estado geral, corada, hidratada, anictérica, ansiosa.',
      physicalSeg: 'ABDOME: plano, flácido, ruídos hidroaéreos normais, dor leve e difusa à palpação profunda, mais em quadrante inferior esquerdo, sem massas, sem visceromegalias, sem sinais de irritação peritoneal | PERIANAL: sem alterações | Restante do exame sem alterações.',
      labs: [
        { test: 'Hemoglobina', val: '13,4 g/dL', ref: '12–16 g/dL', alt: false },
        { test: 'PCR', val: '1,2 mg/L', ref: '< 5 mg/L', alt: false },
        { test: 'TSH', val: '2,1 mUI/L', ref: '0,4–4,5 mUI/L', alt: false },
        { test: 'tTG-IgA + IgA total', val: 'Negativo / IgA normal', ref: 'Negativo', alt: false },
        { test: 'Calprotectina fecal', val: '22 µg/g', ref: '< 50 µg/g', alt: false },
        { test: 'Parasitológico de fezes', val: 'Negativo', ref: 'Negativo', alt: false }
      ],
      note: 'Entregar os exames conforme solicitados. Se o candidato solicitar colonoscopia, o aplicador deve perguntar a justificativa (não há indicação na ausência de sinais de alarme e idade < 45 anos).',
      patientProfile: 'Advogada em escritório, jornada de 11h/dia, sono irregular. Relata ansiedade e preocupação excessiva com o trabalho. Alimentação irregular, muito café e lanches rápidos. Sedentária. Sem história familiar de câncer colorretal ou DII.',
      script: [
        { trigger: 'Queixa principal', speech: 'Doutor(a), faz mais ou menos um ano que eu tenho cólica na barriga, umas duas vezes por semana. Quando eu vou ao banheiro, melhora.' },
        { trigger: 'Sobre o hábito intestinal', speech: 'Tem semana que fico presa, fezes duras em bolinhas; tem semana que é diarreia, principalmente antes de audiência.' },
        { trigger: 'Sobre gases e distensão', speech: 'Minha barriga incha muito no fim do dia, parece que estou grávida.' },
        { trigger: 'Sobre sinais de alarme', speech: 'Nunca vi sangue nas fezes. Não emagreci. Não acordo à noite para evacuar. Febre não tenho.' },
        { trigger: 'Sobre estresse', speech: 'Meu trabalho é muito estressante, durmo mal, e eu percebo que piora nas semanas mais pesadas.' },
        { trigger: 'Sobre alimentação', speech: 'Como mal, muito café, lanche rápido. Feijão e cebola parecem piorar.' },
        { trigger: 'Sobre história familiar', speech: 'Ninguém na família teve câncer de intestino que eu saiba.' },
        { trigger: 'Pergunta ativa — diagnóstico', speech: 'Será que eu tenho alguma doença grave no intestino? Não precisa fazer uma colonoscopia?' }
      ],
      hiddenInfo: 'Sintomas de ansiedade generalizada (preocupação excessiva, insônia, tensão muscular) há mais de 6 meses — só revela se perguntado sobre humor e sono | Fez uso de vários laxantes e antiespasmódicos por conta própria — só revela se perguntado sobre medicamentos',
      actorBehavior: 'Ansiosa, fala rápido, preocupada com doença grave. Insiste na colonoscopia. Acalma-se se o candidato explicar com segurança o diagnóstico positivo e por que exames extensos não são necessários.'
    },
    instC: {
      diagnosis: 'Síndrome do intestino irritável subtipo misto (SII-M) pelos critérios de Roma IV, sem sinais de alarme, associada a provável transtorno de ansiedade generalizada.',
      differentials: [
        'Doença inflamatória intestinal — sai pela ausência de sinais de alarme e calprotectina normal',
        'Doença celíaca — deve ser rastreada com tTG-IgA em SII com diarreia/mista; negativa',
        'Câncer colorretal — idade < 45 anos, sem sinais de alarme ou história familiar; colonoscopia não indicada',
        'Intolerância à lactose / FODMAPs — pode coexistir e piorar sintomas; abordar com dieta',
        'Hipotireoidismo/hipertireoidismo — TSH normal'
      ],
      context: 'A SII é um distúrbio da interação intestino-cérebro, com prevalência de ~5–10%, mais comum em mulheres jovens. O diagnóstico é clínico e positivo (Roma IV), com investigação mínima na ausência de sinais de alarme. Ansiedade e depressão são comorbidades frequentes.',
      justify: 'Dor abdominal recorrente ≥ 1 dia/semana nos últimos 3 meses, iniciada há > 6 meses, associada à evacuação e a alteração na frequência e na forma das fezes (critérios de Roma IV). Alternância entre fezes duras e líquidas define subtipo misto. Ausência de sinais de alarme e exames básicos normais.',
      expectedAnamnesis: 'Característica, frequência e duração da dor | Relação da dor com a evacuação | Forma das fezes (escala de Bristol) e frequência | Distensão abdominal | Sinais de alarme: idade > 45 anos, sangue, perda de peso, sintomas noturnos, febre, anemia, história familiar de CCR/DII/celíaca | Fatores desencadeantes: alimentos, estresse | Humor, ansiedade, sono | Uso de medicamentos e laxantes',
      expectedPhysical: 'Exame abdominal completo | Inspeção perianal / toque retal se indicado | Avaliação do estado nutricional',
      expectedExams: [
        { exam: 'Hemograma e PCR', justify: 'Excluir anemia e inflamação', expected: 'Normais' },
        { exam: 'tTG-IgA + IgA total', justify: 'Rastrear doença celíaca em SII-D/M', expected: 'Negativos' },
        { exam: 'Calprotectina fecal', justify: 'Excluir DII quando há diarreia', expected: 'Normal' },
        { exam: 'TSH', justify: 'Excluir disfunção tireoidiana', expected: 'Normal' },
        { exam: 'Colonoscopia — NÃO indicada', justify: 'Sem sinais de alarme e idade < 45 anos', expected: '—' }
      ],
      expectedConduct: 'Não farmacológica: explicação clara do diagnóstico (base do tratamento) e da relação intestino-cérebro; dieta com refeições regulares, redução de cafeína, teste de dieta pobre em FODMAPs orientada por nutricionista; fibra solúvel (psyllium) para constipação; atividade física regular; higiene do sono; terapia cognitivo-comportamental ou psicoterapia | Farmacológica (conforme sintoma predominante): antiespasmódico (escopolamina, pinavério ou óleo de hortelã-pimenta) para dor; loperamida sob demanda para diarreia; psyllium ou polietilenoglicol para constipação; antidepressivo tricíclico em dose baixa (amitriptilina 10–25 mg à noite) se dor refratária ou ISRS se ansiedade predominante | Encaminhamento: saúde mental para avaliação de ansiedade | Orientações: doença benigna, não aumenta risco de câncer; retornar se surgirem sinais de alarme',
      expectedCommunication: 'Validar o sofrimento da paciente (os sintomas são reais) | Explicar o diagnóstico de forma positiva, não como exclusão | Justificar por que a colonoscopia não é necessária | Abordar ansiedade sem minimizar a queixa | Pactuar plano e retorno',
      criticalErrors: [
        'Não pesquisar sinais de alarme',
        'Solicitar colonoscopia/exames extensos sem indicação, reforçando a ansiedade',
        'Dizer que os sintomas são "psicológicos" ou "coisa da cabeça"',
        'Não rastrear doença celíaca em SII com componente diarreico',
        'Prescrever opioides para dor abdominal crônica'
      ]
    },
    instD: {
      title: 'Síndrome do Intestino Irritável — Material de Estudo',
      sections: [
        {
          h: 'Definição e Critérios de Roma IV',
          items: [
            { item: 'Dor abdominal recorrente ≥ 1 dia/semana nos últimos 3 meses (início ≥ 6 meses), associada a ≥ 2: relação com a evacuação, alteração da frequência, alteração da forma das fezes.', score: 2, ref: 'Rome IV Criteria — Lacy BE et al., Gastroenterology 2016' },
            { item: 'Subtipos pela escala de Bristol: SII-C (constipação), SII-D (diarreia), SII-M (misto), SII-U (não classificado).', score: 1, ref: 'Rome IV, 2016' }
          ]
        },
        {
          h: 'Sinais de Alarme',
          items: [
            { item: 'Idade > 45–50 anos, sangramento, anemia, perda ponderal, sintomas noturnos, febre, massa abdominal, história familiar de CCR/DII/celíaca — exigem investigação.', score: 2, ref: 'ACG Clinical Guideline — IBS, 2021' }
          ]
        },
        {
          h: 'Investigação',
          items: [
            { item: 'Estratégia de diagnóstico positivo com exames mínimos: hemograma, PCR, sorologia celíaca e calprotectina (se diarreia).', score: 2, ref: 'ACG, 2021' }
          ]
        },
        {
          h: 'Tratamento',
          items: [
            { item: 'Relação médico-paciente e educação são a base do tratamento; dieta pobre em FODMAPs tem evidência para melhora global.', score: 1, ref: 'ACG, 2021' },
            { item: 'Antidepressivos tricíclicos em dose baixa são eficazes para dor; antiespasmódicos e óleo de hortelã-pimenta para sintomas leves.', score: 1, ref: 'Ford AC et al., Gastroenterology 2019' },
            { item: 'Terapias psicológicas (TCC, hipnoterapia dirigida ao intestino) são eficazes.', score: 1, ref: 'ACG, 2021' }
          ]
        }
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // CASO 8 — ÚLCERA PÉPTICA / HELICOBACTER PYLORI
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 8,
    title: 'Dor em queimação no estômago que melhora ao comer',
    sub: 'UBS — Atenção Primária',
    tema: 'Gastroenterologia',
    topic: 'Úlcera Péptica e Helicobacter pylori',
    level: 'fácil',
    cardAccent: '#66BB6A',
    instA: {
      scenario: 'Unidade Básica de Saúde, consulta de demanda espontânea.',
      patient: 'A.P.N., 47 anos, masculino, porteiro.',
      complaint: 'Dor em queimação na boca do estômago há 2 meses, que acorda de madrugada e melhora quando come.',
      tasks: [
        'Realize a anamnese dirigida, incluindo sinais de alarme.',
        'Realize o exame físico dirigido.',
        'Formule a hipótese diagnóstica e os diferenciais.',
        'Indique a investigação adequada.',
        'Proponha o tratamento, incluindo controle de erradicação.'
      ]
    },
    instB: {
      vitals: {
        PA: '132/84 mmHg',
        FC: '76 bpm',
        FR: '14 irpm',
        Tax: '36,3 °C',
        Peso: '82 kg',
        Altura: '1,72 m',
        IMC: '27,7 kg/m²'
      },
      physicalGeneral: 'Bom estado geral, corado, hidratado, anictérico.',
      physicalSeg: 'ABDOME: plano, flácido, ruídos hidroaéreos presentes, dor à palpação profunda em epigástrio, sem defesa, sem descompressão dolorosa, sem massas, sem visceromegalias | LINFONODOS: sem linfonodo supraclavicular palpável | Restante sem alterações.',
      labs: [
        { test: 'Hemoglobina', val: '13,8 g/dL', ref: '13–17 g/dL', alt: false },
        { test: 'Teste rápido da urease (biópsia de antro)', val: 'Positivo', ref: 'Negativo', alt: true },
        { test: 'Histopatológico gástrico', val: 'Gastrite crônica ativa com H. pylori; sem metaplasia ou displasia', ref: '—', alt: true }
      ],
      image: 'Endoscopia digestiva alta (entregar se solicitada): úlcera de 1,2 cm em parede anterior do bulbo duodenal, base limpa com fibrina (Forrest III), sem sangramento. Antro com enantema leve. Biópsias de antro e corpo realizadas.',
      note: 'Entregar EDA se o candidato indicar endoscopia (paciente > 40 anos com dispepsia no Brasil, ou com sinais de alarme). Se o candidato perguntar sobre medicamentos, revelar uso de nimesulida.',
      patientProfile: 'Porteiro em turno noturno, casado, dois filhos. Tabagista 15 cigarros/dia há 25 anos. Bebe cerveja aos domingos. Toma nimesulida frequentemente para dor no joelho. Pai teve "úlcera". Sem história familiar de câncer gástrico.',
      script: [
        { trigger: 'Queixa principal', speech: 'Doutor(a), estou com uma queimação aqui na boca do estômago faz uns dois meses.' },
        { trigger: 'Sobre o horário e relação com comida', speech: 'Dói mais umas duas, três horas depois de comer, e muitas vezes me acorda de madrugada. Quando eu como alguma coisa ou tomo leite, melhora.' },
        { trigger: 'Sobre sinais de alarme', speech: 'Não vomitei sangue, as fezes estão normais, marrons. Não emagreci, engulo normal.' },
        { trigger: 'Sobre medicamentos', speech: 'Tomo nimesulida quase todo dia por causa do joelho. E uns antiácidos que compro na farmácia.' },
        { trigger: 'Sobre tabagismo e álcool', speech: 'Fumo uns quinze cigarros por dia. Cerveja só no domingo.' },
        { trigger: 'Sobre família', speech: 'Meu pai teve úlcera, operou faz muitos anos.' },
        { trigger: 'Sobre azia/regurgitação', speech: 'Às vezes volta um azedo na garganta, mas é mais essa dor no estômago mesmo.' },
        { trigger: 'Pergunta ativa — diagnóstico', speech: 'É úlcera? Vou ter que operar como meu pai?' }
      ],
      hiddenInfo: 'Uso diário de nimesulida há 3 meses — só revela se perguntado sobre medicamentos/anti-inflamatórios | Pai operado por úlcera — só revela se perguntado sobre história familiar | Alergia a penicilina? NÃO tem alergia — informar apenas se perguntado',
      actorBehavior: 'Tranquilo, colaborativo, um pouco preocupado com cirurgia. Resiste a parar de fumar ("já tentei"), mas aceita apoio.'
    },
    instC: {
      diagnosis: 'Úlcera duodenal não complicada (Forrest III) associada à infecção por Helicobacter pylori e ao uso crônico de AINE, em tabagista.',
      differentials: [
        'Dispepsia funcional — sai pela úlcera visualizada na EDA',
        'Doença do refluxo gastroesofágico — pode coexistir (regurgitação ocasional), mas a dor epigástrica que melhora com alimento e acorda à noite é típica de úlcera duodenal',
        'Câncer gástrico — idade > 40 anos exige EDA no Brasil; úlcera duodenal é quase sempre benigna (úlcera gástrica exigiria biópsias e controle endoscópico)',
        'Pancreatite crônica / cólica biliar — dor de padrão diferente; considerar se EDA normal',
        'Síndrome de Zollinger-Ellison — suspeitar se úlceras múltiplas, distais, refratárias ou com diarreia'
      ],
      context: 'A úlcera péptica tem como principais causas a infecção por H. pylori e o uso de AINE. No Brasil, a prevalência de H. pylori em adultos é de 60–70%. A úlcera duodenal classicamente causa dor epigástrica 2–3h após refeições e noturna, aliviada por alimentos e antiácidos.',
      justify: 'Dor epigástrica em queimação, noturna, aliviada por alimento, em paciente com uso diário de AINE e tabagismo. EDA com úlcera duodenal e teste da urease/histologia positivos para H. pylori.',
      expectedAnamnesis: 'Características da dor (localização, tipo, relação com alimentação, horário) | Sinais de alarme: hematêmese, melena, vômitos persistentes, disfagia, perda ponderal, anemia, massa | Uso de AINE, AAS, anticoagulantes, corticoides | Tabagismo e álcool | Sintomas de refluxo | História familiar de úlcera e câncer gástrico | Alergias (penicilina) antes do esquema de erradicação',
      expectedPhysical: 'Exame abdominal (dor epigástrica, sinais de peritonite) | Palidez (anemia) | Linfonodo supraclavicular esquerdo (Virchow)',
      expectedExams: [
        { exam: 'Endoscopia digestiva alta com biópsias', justify: 'Dispepsia em > 40 anos no Brasil (alta incidência de câncer gástrico) ou sinais de alarme', expected: 'Úlcera duodenal' },
        { exam: 'Pesquisa de H. pylori (urease/histologia)', justify: 'Toda úlcera péptica deve ser testada', expected: 'Positivo' },
        { exam: 'Hemograma', justify: 'Avaliar perda sanguínea oculta', expected: 'Normal' },
        { exam: 'Teste respiratório com ureia ou antígeno fecal ≥ 4 semanas após antibiótico e ≥ 2 semanas sem IBP', justify: 'Confirmar erradicação', expected: 'Negativo' }
      ],
      expectedConduct: 'Farmacológica: Erradicação de H. pylori — terapia tripla por 14 dias: IBP dose dobrada (omeprazol 20 mg 12/12h) + amoxicilina 1 g 12/12h + claritromicina 500 mg 12/12h (esquema de 1ª linha no Brasil — IV Consenso Brasileiro); alternativa em alérgicos: quádrupla com bismuto | Manter IBP 1x/dia por mais 4–8 semanas para cicatrização | Suspender nimesulida; para dor no joelho usar paracetamol, analgesia tópica, fisioterapia; se AINE indispensável, associar IBP ou usar inibidor de COX-2 com IBP | Controle de erradicação 4 semanas após o tratamento | Não farmacológica: cessação do tabagismo (oferecer programa e farmacoterapia), reduzir álcool | Orientações: efeitos adversos esperados (gosto metálico, diarreia), adesão completa ao esquema, sinais de alarme (fezes pretas, vômito com sangue, dor súbita intensa)',
      expectedCommunication: 'Explicar a relação entre bactéria, anti-inflamatório e úlcera | Tranquilizar quanto à cirurgia (tratamento clínico é curativo na maioria) | Reforçar adesão aos 14 dias de antibiótico | Abordar tabagismo de forma motivacional',
      criticalErrors: [
        'Tratar empiricamente com IBP sem EDA em paciente > 40 anos no Brasil',
        'Não pesquisar H. pylori em paciente com úlcera péptica',
        'Manter o uso de AINE sem proteção ou alternativa',
        'Prescrever esquema de erradicação por apenas 7 dias ou não confirmar erradicação',
        'Não perguntar sobre alergia a penicilina antes de prescrever amoxicilina'
      ]
    },
    instD: {
      title: 'Úlcera Péptica e H. pylori — Material de Estudo',
      sections: [
        {
          h: 'Etiologia e Clínica',
          items: [
            { item: 'Principais causas: H. pylori e AINE/AAS; outros: tabagismo, Zollinger-Ellison, estresse fisiológico grave.', score: 1, ref: 'Harrison — Medicina Interna, 21ª ed.' },
            { item: 'Úlcera duodenal: dor 2–3h após refeições e noturna, aliviada por alimentos; úlcera gástrica: dor que piora com alimentação.', score: 1, ref: 'Harrison — Medicina Interna, 21ª ed.' }
          ]
        },
        {
          h: 'Investigação da Dispepsia',
          items: [
            { item: 'No Brasil, EDA indicada em dispepsia com idade ≥ 40 anos ou sinais de alarme; abaixo disso, estratégia "testar e tratar" H. pylori.', score: 2, ref: 'IV Consenso Brasileiro sobre H. pylori, 2018' }
          ]
        },
        {
          h: 'Tratamento',
          items: [
            { item: 'Erradicação com IBP + amoxicilina + claritromicina por 14 dias; alternativa: quádrupla com bismuto (IBP + bismuto + tetraciclina + metronidazol).', score: 2, ref: 'IV Consenso Brasileiro sobre H. pylori, 2018' },
            { item: 'Confirmar erradicação com teste respiratório/antígeno fecal ≥ 4 semanas após antibiótico e ≥ 2 semanas sem IBP.', score: 2, ref: 'Maastricht VI / Florence Consensus, 2022' },
            { item: 'Suspender AINE; se necessário manter, associar IBP.', score: 1, ref: 'ACG Guideline — Peptic Ulcer Disease, 2017' }
          ]
        },
        {
          h: 'Complicações',
          items: [
            { item: 'Sangramento, perfuração, obstrução pilórica e penetração; úlcera gástrica requer biópsia e EDA de controle para excluir malignidade.', score: 1, ref: 'ACG, 2017' }
          ]
        }
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // CASO 9 — DOENÇA HEPÁTICA ESTEATÓTICA ASSOCIADA À DISFUNÇÃO METABÓLICA
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 9,
    title: 'Fígado gorduroso em ultrassom e enzimas hepáticas alteradas',
    sub: 'UBS — Atenção Primária',
    tema: 'Gastroenterologia',
    topic: 'Doença Hepática Esteatótica Metabólica (MASLD)',
    level: 'fácil',
    cardAccent: '#66BB6A',
    instA: {
      scenario: 'Unidade Básica de Saúde, consulta para mostrar exames.',
      patient: 'E.G.L., 52 anos, feminino, cozinheira.',
      complaint: 'O ultrassom mostrou gordura no fígado e o exame de sangue deu enzimas do fígado alteradas.',
      tasks: [
        'Realize a anamnese dirigida, incluindo consumo de álcool e fatores metabólicos.',
        'Realize o exame físico dirigido.',
        'Formule a hipótese diagnóstica e exclua causas secundárias.',
        'Estratifique o risco de fibrose hepática.',
        'Proponha o tratamento e oriente a paciente.'
      ]
    },
    instB: {
      vitals: {
        PA: '142/90 mmHg',
        FC: '80 bpm',
        FR: '16 irpm',
        Tax: '36,5 °C',
        Peso: '94 kg',
        Altura: '1,60 m',
        IMC: '36,7 kg/m²',
        'Circunferência abdominal': '112 cm'
      },
      physicalGeneral: 'Bom estado geral, obesa, corada, hidratada, anictérica.',
      physicalSeg: 'PELE: acantose nigricans em região cervical posterior e axilas | ABDOME: globoso por adiposidade, flácido, indolor, fígado palpável a 2 cm do RCD, de borda romba e superfície lisa; sem esplenomegalia; sem ascite | Sem estigmas de hepatopatia crônica | MEMBROS: sem edema.',
      labs: [
        { test: 'ALT', val: '68 U/L', ref: '< 35 U/L', alt: true },
        { test: 'AST', val: '52 U/L', ref: '< 35 U/L', alt: true },
        { test: 'GGT', val: '84 U/L', ref: '< 38 U/L', alt: true },
        { test: 'Plaquetas', val: '198.000/mm³', ref: '150.000–400.000/mm³', alt: false },
        { test: 'Glicemia de jejum', val: '118 mg/dL', ref: '< 100 mg/dL', alt: true },
        { test: 'HbA1c', val: '6,6%', ref: '< 5,7%', alt: true },
        { test: 'Triglicerídeos', val: '248 mg/dL', ref: '< 150 mg/dL', alt: true },
        { test: 'HDL', val: '38 mg/dL', ref: '> 50 mg/dL', alt: true },
        { test: 'HBsAg / anti-HCV', val: 'Não reagentes', ref: 'Não reagentes', alt: false },
        { test: 'Ferritina / saturação de transferrina', val: '310 ng/mL / 32%', ref: '< 150 ng/mL / < 45%', alt: true },
        { test: 'FIB-4 (calculado)', val: '1,9', ref: '< 1,3 baixo risco; > 2,67 alto risco', alt: true },
        { test: 'Elastografia hepática (se solicitada)', val: '10,8 kPa', ref: '< 8 kPa', alt: true }
      ],
      image: 'Ultrassonografia de abdome: fígado de dimensões aumentadas, hiperecogênico difusamente (esteatose moderada), contornos regulares, sem nódulos. Baço normal. Vesícula sem cálculos.',
      note: 'Entregar o FIB-4 somente se o candidato mencionar estratificação de fibrose. Entregar elastografia apenas se o candidato indicar elastografia após FIB-4 intermediário.',
      patientProfile: 'Cozinheira de restaurante, casada, 3 filhos adultos. Sedentária. Belisca durante o trabalho, consome refrigerante diariamente. Bebe socialmente: 1 taça de vinho no Natal. Menopausa aos 49 anos. Usa losartana 50 mg irregularmente. Mãe diabética.',
      script: [
        { trigger: 'Queixa principal', speech: 'O médico do trabalho pediu esses exames e falou que tenho gordura no fígado. Isso é grave?' },
        { trigger: 'Sobre álcool', speech: 'Bebida quase nada, uma tacinha de vinho no Natal e no Ano Novo.' },
        { trigger: 'Sobre alimentação', speech: 'Trabalho na cozinha, vou beliscando o dia todo. E tomo refrigerante, uns dois copos por dia.' },
        { trigger: 'Sobre atividade física', speech: 'Exercício não faço, chego em casa morta de cansada.' },
        { trigger: 'Sobre peso', speech: 'Engordei uns 15 quilos depois que parei de menstruar.' },
        { trigger: 'Sobre medicamentos', speech: 'Tomo remédio de pressão, losartana, mas às vezes esqueço. Uso também um chá de ervas para emagrecer.' },
        { trigger: 'Sobre sintomas', speech: 'Não sinto nada no fígado. Só um cansaço.' },
        { trigger: 'Pergunta ativa — diagnóstico', speech: 'Isso vira cirrose? Tem remédio para tirar essa gordura?' }
      ],
      hiddenInfo: 'Usa chá de ervas para emagrecer comprado na internet — só revela se perguntado sobre fitoterápicos/chás/suplementos | Mãe com diabetes e irmão com cirrose "sem beber" — só revela se perguntado sobre história familiar | Ronca alto e acorda cansada — só revela se perguntado sobre sono',
      actorBehavior: 'Simpática, preocupada com cirrose. Um pouco resistente a mudanças de hábito ("meu trabalho não deixa"), mas aceita metas pequenas e concretas.'
    },
    instC: {
      diagnosis: 'Doença hepática esteatótica associada à disfunção metabólica (MASLD, antiga DHGNA) com provável esteato-hepatite e fibrose significativa (FIB-4 intermediário e elastografia 10,8 kPa), em paciente com obesidade grau II, diabetes mellitus tipo 2 recém-diagnosticado, hipertensão e dislipidemia.',
      differentials: [
        'Doença hepática alcoólica (ALD) ou MetALD — sai pelo consumo de álcool insignificante (< 140 g/semana em mulheres)',
        'Hepatites virais B e C — sorologias negativas',
        'Hemocromatose — ferritina elevada é comum na MASLD (reagente de fase aguda/resistência insulínica), mas saturação de transferrina < 45% torna improvável',
        'Hepatotoxicidade por fitoterápico (chá para emagrecer) — deve ser suspenso e considerado',
        'Hepatite autoimune / doença de Wilson — considerar se ALT muito elevada ou sem fatores metabólicos'
      ],
      context: 'A MASLD é a doença hepática crônica mais prevalente no mundo (~30% dos adultos), fortemente associada à obesidade, DM2 e síndrome metabólica. O principal determinante prognóstico é o grau de fibrose; a principal causa de morte é cardiovascular. Esta paciente tem múltiplos fatores metabólicos e fibrose significativa à elastografia.',
      justify: 'Esteatose à USG + ≥ 1 critério cardiometabólico (IMC > 25, glicemia/HbA1c alterada, HAS, TG elevado, HDL baixo) + ausência de consumo significativo de álcool e de outras causas. FIB-4 de 1,9 (intermediário) com elastografia > 8 kPa indica fibrose significativa e necessidade de seguimento especializado.',
      expectedAnamnesis: 'Consumo de álcool quantificado | Fatores metabólicos: diabetes, HAS, dislipidemia, ganho de peso | Hábitos alimentares e atividade física | Medicamentos, fitoterápicos, chás e suplementos | Fatores de risco para hepatites virais | História familiar de doença hepática e diabetes | Sintomas de apneia do sono | Sintomas de hepatopatia avançada',
      expectedPhysical: 'Peso, altura, IMC e circunferência abdominal | Pressão arterial | Acantose nigricans | Palpação hepática e esplênica | Estigmas de hepatopatia crônica',
      expectedExams: [
        { exam: 'Sorologias HBsAg e anti-HCV', justify: 'Excluir hepatites virais', expected: 'Negativas' },
        { exam: 'Ferritina e saturação de transferrina', justify: 'Excluir sobrecarga de ferro', expected: 'Ferritina levemente elevada, saturação normal' },
        { exam: 'Glicemia, HbA1c, perfil lipídico', justify: 'Componentes metabólicos', expected: 'DM2 e dislipidemia' },
        { exam: 'FIB-4 (idade, AST, ALT, plaquetas)', justify: 'Estratificação não invasiva de fibrose na APS', expected: 'Intermediário (1,3–2,67)' },
        { exam: 'Elastografia hepática', justify: 'Indicada se FIB-4 ≥ 1,3', expected: '> 8 kPa — fibrose significativa' },
        { exam: 'Avaliação de apneia do sono e risco cardiovascular', justify: 'Comorbidades associadas', expected: 'A definir' }
      ],
      expectedConduct: 'Não farmacológica: perda de peso de 7–10% (≥ 10% pode regredir fibrose) com dieta hipocalórica, tipo mediterrânea, eliminação de bebidas açucaradas e ultraprocessados; atividade física ≥ 150 min/semana; abstinência de álcool dada a fibrose; suspender chá para emagrecer | Farmacológica: tratar DM2 priorizando agentes com benefício hepático e de peso — agonista de GLP-1 (semaglutida) ou pioglitazona; iSGLT2 também favoráveis; metformina pode ser usada para o diabetes sem efeito hepático direto; estatina para dislipidemia (segura na MASLD); otimizar anti-hipertensivo | Encaminhamento: hepatologia por fibrose significativa; considerar cirurgia bariátrica se não atingir metas; vacinar para hepatites A e B | Orientações: a gordura no fígado é reversível, cirrose pode ser evitada com mudança de estilo de vida; principal risco é cardiovascular',
      expectedCommunication: 'Explicar a doença e sua reversibilidade | Usar entrevista motivacional e metas concretas e pequenas | Evitar estigmatização do peso | Pactuar retorno',
      criticalErrors: [
        'Não quantificar o consumo de álcool',
        'Não estratificar fibrose (FIB-4/elastografia) e tratar como achado benigno',
        'Suspender estatina por medo de hepatotoxicidade',
        'Não perguntar sobre fitoterápicos e chás',
        'Não diagnosticar e abordar o diabetes e o risco cardiovascular'
      ]
    },
    instD: {
      title: 'MASLD — Material de Estudo',
      sections: [
        {
          h: 'Definição e Nomenclatura',
          items: [
            { item: 'MASLD: esteatose hepática + ≥ 1 critério cardiometabólico, sem outra causa; substitui DHGNA/NAFLD. MetALD: MASLD com consumo de álcool moderado (140–350 g/semana em mulheres).', score: 2, ref: 'Rinella ME et al. — Multisociety Delphi Consensus, J Hepatol 2023' }
          ]
        },
        {
          h: 'Estratificação de Fibrose',
          items: [
            { item: 'FIB-4 é o teste inicial na APS: < 1,3 baixo risco (reavaliar em 1–3 anos); ≥ 1,3 indica elastografia; > 2,67 alto risco.', score: 2, ref: 'EASL-EASD-EASO CPG on MASLD, 2024' },
            { item: 'Elastografia < 8 kPa exclui fibrose avançada; ≥ 8 kPa encaminhar à hepatologia.', score: 1, ref: 'EASL-EASD-EASO, 2024' }
          ]
        },
        {
          h: 'Tratamento',
          items: [
            { item: 'Perda de peso ≥ 5% reduz esteatose; 7–10% melhora a esteato-hepatite; ≥ 10% pode regredir fibrose.', score: 2, ref: 'Vilar-Gomez E et al., Gastroenterology 2015' },
            { item: 'Agonistas de GLP-1 e pioglitazona têm benefício na esteato-hepatite; resmetirom aprovado para MASH com fibrose F2–F3 em alguns países.', score: 1, ref: 'AASLD Practice Guidance, 2023' },
            { item: 'Estatinas são seguras e indicadas para o risco cardiovascular.', score: 1, ref: 'AASLD Practice Guidance, 2023' }
          ]
        },
        {
          h: 'Prognóstico',
          items: [
            { item: 'Doença cardiovascular é a principal causa de morte; fibrose é o principal preditor de desfechos hepáticos.', score: 1, ref: 'EASL-EASD-EASO, 2024' }
          ]
        }
      ]
    }
  },
];

export default gastroenterologia2;
