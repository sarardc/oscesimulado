const emergNeuro = [

  // CASO 1 — AVC ISQUÊMICO
  {
    id: 1,
    title: 'Fraqueza súbita no lado esquerdo há 1 hora',
    sub: 'PS — Pronto-Socorro',
    tema: 'Emergencias Neurologicas',
    topic: 'AVC Isquêmico',
    level: 'difícil',
    cardAccent: '#FF7043',
    instA: {
      scenario: 'Pronto-socorro de hospital terciário, 09h30. Paciente trazido pelo SAMU após queda em casa.',
      patient: 'Roberto Alves, 68 anos, masculino, aposentado, hipertenso e diabético.',
      complaint: 'Fraqueza súbita no hemicorpo esquerdo associada a desvio da rima labial iniciados há aproximadamente 1 hora.',
      tasks: [
        'Aplique a escala de Cincinnati e a escala NIHSS.',
        'Realize a anamnese dirigida ao protocolo de AVC.',
        'Solicite e interprete os exames complementares urgentes.',
        'Avalie critérios de elegibilidade para trombólise IV (rt-PA).',
        'Comunique o diagnóstico e condutas à família.'
      ]
    },
    instB: {
      vitals: { PA: '178/102 mmHg', FC: '88 bpm', FR: '18 irpm', Tax: '37,0 °C', SpO2: '96% (ar ambiente)', Glasgow: '14 (O4V4M6)', Peso: '82 kg', Altura: '1,72 m' },
      physicalGeneral: 'Regular estado geral, consciente, orientado no tempo e espaço, afasia parcial (disfasia de expressão), colaborativo.',
      physicalSeg: 'NEUROLÓGICO: paresia facio-braquio-crural esquerda grau 3/5, reflexo cutâneo-plantar em extensão à esquerda, desvio da rima labial para direita, disdiadococinesia esquerda. | CARDIOVASCULAR: ritmo cardíaco regular, bulhas normofonéticas, sem sopros. | RESPIRATÓRIO: murmúrio vesicular presente bilateralmente, sem ruídos adventícios.',
      labs: [
        { test: 'Glicemia capilar', val: '142 mg/dL', ref: '70–99 mg/dL', alt: true },
        { test: 'Hemograma', val: 'Normal', ref: '', alt: false },
        { test: 'Coagulograma (TAP/INR)', val: 'INR 1,1', ref: '0,8–1,2', alt: false },
        { test: 'Plaquetas', val: '198.000/mm³', ref: '150.000–400.000', alt: false },
        { test: 'Creatinina', val: '1,1 mg/dL', ref: '0,7–1,3', alt: false },
        { test: 'TC crânio sem contraste', val: 'Sem hiperdensidade ou hipodensidade precoce. Score ASPECTS = 9.', ref: '', alt: false }
      ],
      image: 'TC de crânio sem contraste: ausência de hiperdensidade ou áreas de hipodensidade precoce. ASPECTS = 9. Sem desvio de linha média.',
      note: 'Entregar o resultado da TC imediatamente após o candidato solicitá-la. Revelar resultado do ECG (FA paroxística) apenas se candidato pedir.',
      patientProfile: 'Homem de 68 anos, ex-fumante (parou há 10 anos), HAS há 15 anos, DM2 há 8 anos. Mora com a esposa. Usa amlodipina e metformina. Acorda com déficit.',
      script: [
        { trigger: 'Queixa principal', speech: 'Doutor, eu não consigo mover o meu braço esquerdo direito. Tá fraco. Aconteceu do nada, tava tomando café.' },
        { trigger: 'Sobre início dos sintomas', speech: 'Foi às 8h30, eu tava sentado na mesa do café. De repente o braço ficou pesado e eu caí da cadeira.' },
        { trigger: 'Sobre dor de cabeça', speech: 'Não, não tô com dor de cabeça não.' },
        { trigger: 'Sobre medicações', speech: 'Tomo pressão, amlodipina, e a metformina pro diabetes. Todo dia.' },
        { trigger: 'Sobre anticoagulantes ou AAS', speech: 'Não, não tomo nenhum sangue fino.' },
        { trigger: 'Sobre cirurgia recente', speech: 'Fiz uma cirurgia no joelho há 4 meses, mas já tá tudo bem.' },
        { trigger: 'Pergunta ativa — diagnóstico', speech: 'O que eu tive, doutor? É derrame?' },
        { trigger: 'Sobre AVC ou episódio anterior', speech: 'Nunca tive nada assim antes não.' }
      ],
      hiddenInfo: 'Fibrilação atrial paroxística — só revela se o candidato solicitar ECG | Etilismo social moderado — só revela se candidato perguntar sobre álcool',
      actorBehavior: 'Ansioso, com dificuldade leve para formar frases completas (disfasia). Responde perguntas diretas. A esposa pode complementar informações se o candidato se dirigir a ela.'
    },
    instC: {
      diagnosis: 'AVC Isquêmico agudo em território da artéria cerebral média direita (ACM D), com janela terapêutica ativa para trombólise IV.',
      differentials: [
        'AVC Hemorrágico — entra pelo déficit focal súbito e HAS; sai pela TC sem hiperdensidade e ausência de cefaleia intensa/vômitos',
        'Hipoglicemia — entra pelo déficit focal e DM; sai pela glicemia de 142 mg/dL',
        'Crise epiléptica com paralisia de Todd — entra pelo déficit focal; sai pela ausência de história de epilepsia e pelo déficit persistente sem convulsão testemunhada',
        'Lesão estrutural (tumor cerebral) — entra pelo déficit focal; sai pelo início súbito e TC sem lesão focal'
      ],
      context: 'O AVC isquêmico representa 85% dos AVCs e é a principal causa de incapacidade em adultos no Brasil. Fatores de risco incluem HAS, DM, FA e tabagismo. A janela para trombólise IV com alteplase é de 4,5 horas do início dos sintomas.',
      justify: 'Déficit facio-braquio-crural esquerdo de início súbito, TC sem hemorragia, NIHSS compatível com AVC moderado, dentro da janela de 4,5h, sem contraindicações absolutas identificadas.',
      expectedAnamnesis: 'Horário exato do início dos sintomas | Uso de anticoagulantes ou antiagregantes | Cirurgia recente (< 3 meses) | HAS, DM, tabagismo, FA | AVC ou TIA prévio | Nível basal funcional | Alergias',
      expectedPhysical: 'Escala de Cincinnati (FAST) | NIHSS completo | Fundoscopia (papiledema) | Ausculta cardíaca (FA) | PA nos dois membros | Glasgow',
      expectedExams: [
        { exam: 'TC crânio sem contraste', justify: 'Excluir hemorragia antes de trombólise', expected: 'Sem hiperdensidade — elegível para rt-PA' },
        { exam: 'Glicemia capilar', justify: 'Excluir hipoglicemia como causa reversível', expected: '142 mg/dL — não justifica déficit' },
        { exam: 'Coagulograma + plaquetas', justify: 'Critério de elegibilidade para trombólise', expected: 'Dentro da normalidade' },
        { exam: 'ECG 12 derivações', justify: 'Pesquisar FA como fonte embólica', expected: 'FA paroxística' },
        { exam: 'AngioTC de crânio e pescoço', justify: 'Avaliar oclusão arterial para trombectomia mecânica', expected: 'Oclusão M1 da ACM D' }
      ],
      expectedConduct: 'Farmacológica: Alteplase 0,9 mg/kg IV (máx 90 mg), 10% em bolus + 90% em 60 min; AAS 100–300 mg VO após 24h (após repetir TC) | Não farmacológica: Internação em Unidade de AVC; cabeceira a 0–30°; controle glicêmico (alvo 140–180 mg/dL); monitorização contínua; NPO até avaliação de deglutição | Orientações: Explicar diagnóstico; informar sobre trombectomia mecânica se houver oclusão proximal',
      expectedCommunication: 'Apresentar-se pelo nome | Aplicar FAST/Cincinnati na triagem | Informar diagnóstico provável à família | Explicar risco-benefício da trombólise | Solicitar assinatura do TCLE | Comunicar achados ao neurorradiologista/neurologista',
      criticalErrors: [
        'Não verificar glicemia antes de administrar trombólise',
        'Administrar trombólise sem excluir hemorragia na TC',
        'Não calcular a janela terapêutica (horário do início dos sintomas)',
        'Administrar anticoagulante pleno nas primeiras 24h pós-trombólise',
        'Não monitorizar PA durante e após alteplase (meta < 180/105 mmHg)'
      ]
    },
    instD: {
      title: 'AVC Isquêmico — Material de Estudo',
      sections: [
        {
          h: 'Definição e Epidemiologia',
          items: [
            { item: 'AVC isquêmico: oclusão arterial com infarto do parênquima cerebral. Representa 85% dos AVCs.', score: 1, ref: 'Diretrizes SBN 2022' },
            { item: 'Principal causa de incapacidade e 2ª causa de morte no Brasil.', score: 1, ref: 'SVS/MS 2022' },
            { item: 'Fatores de risco modificáveis: HAS, DM, FA, tabagismo, dislipidemia, obesidade.', score: 1, ref: 'AHA/ASA Guidelines 2021' }
          ]
        },
        {
          h: 'Diagnóstico e Escalas',
          items: [
            { item: 'Cincinnati Prehospital Stroke Scale (CPSS): desvio facial, fraqueza de braço, alteração de fala — 1 item alterado = 72% VPP para AVC.', score: 2, ref: 'Kothari 1999' },
            { item: 'NIHSS: avalia consciência, olhar, visual, facial, motor, ataxia, sensibilidade, linguagem, disartria, extinção. Guia severidade e terapêutica.', score: 2, ref: 'Brott et al. 1989' },
            { item: 'TC crânio sem contraste: exame inicial obrigatório — excluir hemorragia antes de trombólise.', score: 2, ref: 'AHA/ASA 2019' }
          ]
        },
        {
          h: 'Trombólise IV (rt-PA / Alteplase)',
          items: [
            { item: 'Janela: até 4,5 horas do início dos sintomas (ou último visto bem).', score: 2, ref: 'ECASS III, AHA/ASA 2019' },
            { item: 'Dose: 0,9 mg/kg IV (máx 90 mg): 10% em bolus, 90% em 60 minutos.', score: 2, ref: 'AHA/ASA 2019' },
            { item: 'Contraindicações absolutas: hemorragia na TC, INR > 1,7, plaquetas < 100.000, glicemia < 50 ou > 400 mg/dL, cirurgia de grande porte < 14 dias, AVC < 3 meses.', score: 2, ref: 'Diretrizes SBN 2022' },
            { item: 'Meta de PA antes e durante trombólise: < 185/110 mmHg.', score: 1, ref: 'AHA/ASA 2019' }
          ]
        },
        {
          h: 'Trombectomia Mecânica',
          items: [
            { item: 'Indicada em oclusão de grande vaso (ACM M1, carótida intracraniana, basilar) até 24h com imagem selecionada.', score: 2, ref: 'DAWN/DEFUSE 3 trials' },
            { item: 'Não substitui trombólise IV — complementar quando elegível.', score: 1, ref: 'AHA/ASA 2019' }
          ]
        },
        {
          h: 'Cuidados na Fase Aguda',
          items: [
            { item: 'Internação em Unidade de AVC reduz mortalidade e incapacidade em 20–25%.', score: 1, ref: 'Cochrane 2013' },
            { item: 'Cabeceira a 0–30° nas primeiras 24h (melhora perfusão cerebral).', score: 1, ref: 'Diretrizes SBN 2022' },
            { item: 'Controle glicêmico: alvo 140–180 mg/dL; hipoglicemia piora prognóstico.', score: 1, ref: 'AHA/ASA 2019' },
            { item: 'NPO até avaliação fonoaudiológica da deglutição (risco de aspiração).', score: 1, ref: 'Diretrizes SBN 2022' }
          ]
        }
      ]
    }
  },

  // CASO 2 — STATUS EPILEPTICUS
  {
    id: 2,
    title: 'Convulsão contínua há 10 minutos no PS',
    sub: 'PS — Pronto-Socorro',
    tema: 'Emergencias Neurologicas',
    topic: 'Estado de Mal Epiléptico',
    level: 'difícil',
    cardAccent: '#FF7043',
    instA: {
      scenario: 'PS de hospital geral, 22h. Paciente trazido pelo SAMU em convulsão tônico-clônica generalizada contínua.',
      patient: 'Marcos Ferreira, 34 anos, masculino, comerciante, epiléptico em uso irregular de medicação.',
      complaint: 'Convulsão tônico-clônica generalizada sem recuperação da consciência há 10 minutos.',
      tasks: [
        'Realize a estabilização inicial (ABC) e trate o status epilepticus em protocolo escalonado.',
        'Solicite e interprete os exames complementares urgentes.',
        'Identifique e trate a causa precipitante.',
        'Oriente a família sobre o diagnóstico e prevenção de novas crises.'
      ]
    },
    instB: {
      vitals: { PA: '152/94 mmHg', FC: '118 bpm', FR: '20 irpm', Tax: '37,8 °C', SpO2: '91% (ar ambiente)', Glasgow: '6 (durante crise)' },
      physicalGeneral: 'Mal estado geral, inconsciente, movimentos tônico-clônicos generalizados contínuos, cianose perioral, hipersalivação.',
      physicalSeg: 'NEUROLÓGICO: glasgow 6 durante crise, sem resposta a comandos verbais, pupila midriática bilateral reagente. | RESPIRATÓRIO: SpO2 91%, estertores de aspiração bilaterais. | CARDIOVASCULAR: taquicardia sinusal, sem sopros.',
      labs: [
        { test: 'Glicemia capilar', val: '58 mg/dL', ref: '70–99 mg/dL', alt: true },
        { test: 'Sódio', val: '131 mEq/L', ref: '136–145 mEq/L', alt: true },
        { test: 'Potássio', val: '4,1 mEq/L', ref: '3,5–5,0 mEq/L', alt: false },
        { test: 'Ureia', val: '28 mg/dL', ref: '15–40 mg/dL', alt: false },
        { test: 'Creatinina', val: '0,9 mg/dL', ref: '0,7–1,3', alt: false },
        { test: 'Nível sérico de fenitoína', val: '4,2 μg/mL', ref: '10–20 μg/mL', alt: true }
      ],
      image: 'TC de crânio: sem lesão estrutural aguda, sem hemorragia, sem hidrocefalia.',
      note: 'O paciente não pode fornecer história — ator representa familiar. Revelar nível sérico de fenitoína apenas se candidato solicitar. Revelar sódio de 131 quando exames forem solicitados.',
      patientProfile: 'Epiléptico há 6 anos, em uso de fenitoína 300 mg/dia. Familiar refere que o paciente "esqueceu" de tomar a medicação nos últimos 3 dias. Etilismo social.',
      script: [
        { trigger: 'Queixa principal (familiar)', speech: 'Ele tava em casa quando começou a convulsionar, a gente contou 10 minutos e ele não parou. É a segunda crise dele hoje.' },
        { trigger: 'Sobre medicação', speech: 'Ele usa fenitoína todo dia, mas nesses últimos dias ele esqueceu. A gente tava viajando.' },
        { trigger: 'Sobre epilepsia', speech: 'Tem epilepsia há uns 6 anos. Normalmente as crises passam sozinhas em 2 minutos.' },
        { trigger: 'Sobre álcool', speech: 'Ele bebe socialmente, tomou umas cervejas ontem à noite.' },
        { trigger: 'Sobre febre ou infecção', speech: 'Não, não tinha febre. Tava bem até a crise.' },
        { trigger: 'Sobre trauma de cabeça', speech: 'Não caiu, não bateu a cabeça.' }
      ],
      hiddenInfo: 'Uso irregular de fenitoína nos últimos 3 dias — revela se perguntar sobre medicação | Ingestão de álcool na véspera — revela se perguntar sobre etilismo',
      actorBehavior: 'Familiar (cônjuge) extremamente ansioso, chorando. Responde perguntas mas interrompe para perguntar "ele vai ficar bem?" a cada momento.'
    },
    instC: {
      diagnosis: 'Estado de mal epiléptico tônico-clônico generalizado por descontinuação de antiepiléptico (fenitoína subterapêutica) associada a hiponatremia e hipoglicemia.',
      differentials: [
        'Meningite bacteriana — entra por crise + febre leve; sai pela ausência de rigidez de nuca e febre franca',
        'AVC — entra pelo déficit neurológico; sai pela TC sem lesão e pelo contexto de epilepsia conhecida',
        'Intoxicação exógena — entra pelo rebaixamento; sai pelo nível de fenitoína subterapêutico e hiponatremia explicando a crise',
        'Encefalopatia metabólica — entra pela hiponatremia e hipoglicemia; pode coexistir como fator precipitante'
      ],
      context: 'Status epilepticus é definido como crise > 5 min ou duas crises sem recuperação entre elas. Mortalidade de 20–30% se não tratado. Principais causas: descontinuação de AED, hiponatremia, hipoglicemia, infecção do SNC, trauma.',
      justify: 'Crise > 10 min, nível de fenitoína subterapêutico (4,2 μg/mL), sódio 131 mEq/L e glicemia 58 mg/dL — múltiplos fatores precipitantes identificados.',
      expectedAnamnesis: 'Tempo de crise | Crises prévias hoje | Uso e adesão a AED | Última dose de medicação | Febre, infecção | Trauma craniano | Uso de álcool ou drogas | História de epilepsia',
      expectedPhysical: 'Glasgow | Pupilas | Sinais meníngeos | SpO2 e padrão respiratório | Glicemia capilar imediata',
      expectedExams: [
        { exam: 'Glicemia capilar imediata', justify: 'Excluir hipoglicemia — tratável imediatamente', expected: '58 mg/dL — hipoglicemia presente' },
        { exam: 'Eletrólitos séricos', justify: 'Hiponatremia é causa corrigível de crise refratária', expected: 'Na 131 mEq/L' },
        { exam: 'Nível sérico de fenitoína', justify: 'Avaliar adesão ao AED', expected: '4,2 μg/mL — subterapêutico' },
        { exam: 'TC crânio', justify: 'Excluir lesão estrutural', expected: 'Sem lesão aguda' },
        { exam: 'Punção lombar (se febre)', justify: 'Excluir meningite se houver suspeita clínica', expected: 'LCR normal (se realizado)' }
      ],
      expectedConduct: 'Farmacológica (protocolo escalonado): 1ª linha — Diazepam 10 mg IV (ou midazolam 10 mg IM); 2ª linha — Fenitoína 20 mg/kg IV (50 mg/min) ou Valproato 40 mg/kg IV; 3ª linha (refratário) — Intubação + anestesia geral (propofol ou midazolam contínuo) | Suporte: Glicose 50% 50 mL IV para hipoglicemia; O2 suplementar; posição de segurança; acesso venoso calibroso | Monitorização: ECG contínuo durante infusão de fenitoína (risco de arritmia)',
      expectedCommunication: 'Chamar ajuda (residentes, anestesia) | Comunicar diagnóstico ao familiar | Explicar tratamento escalonado | Orientar sobre importância da adesão ao AED após recuperação',
      criticalErrors: [
        'Não corrigir hipoglicemia antes de administrar antiepiléptico',
        'Não estabelecer via aérea (O2 suplementar / IOT) com SpO2 < 92%',
        'Infundir fenitoína em velocidade > 50 mg/min (risco de arritmia e hipotensão)',
        'Não progredir para 2ª linha em 5 min após falha do benzodiazepínico',
        'Realizar punção lombar sem TC prévia em paciente com rebaixamento de consciência'
      ]
    },
    instD: {
      title: 'Estado de Mal Epiléptico — Material de Estudo',
      sections: [
        {
          h: 'Definição e Classificação',
          items: [
            { item: 'Status epilepticus (SE): crise ≥ 5 min ou ≥ 2 crises sem recuperação completa da consciência.', score: 2, ref: 'ILAE 2015' },
            { item: 'SE refratário: sem resposta a 2 linhas de tratamento; superrefratário: > 24h mesmo com anestesia geral.', score: 1, ref: 'Brophy et al. 2012' }
          ]
        },
        {
          h: 'Protocolo de Tratamento (escalonado)',
          items: [
            { item: '1ª linha (0–5 min): Benzodiazepínico — diazepam 10 mg IV ou midazolam 10 mg IM.', score: 2, ref: 'Diretrizes ILAE / ABE 2021' },
            { item: '2ª linha (5–20 min): Fenitoína 20 mg/kg IV (50 mg/min) ou valproato 40 mg/kg IV ou levetiracetam 60 mg/kg IV.', score: 2, ref: 'ESETT Trial 2019' },
            { item: '3ª linha (> 20 min, SE refratário): Anestesia geral — propofol, midazolam ou tiopental em infusão contínua + IOT.', score: 2, ref: 'Brophy et al. 2012' }
          ]
        },
        {
          h: 'Causas e Fatores Precipitantes',
          items: [
            { item: 'Causas agudas: AVC, meningite/encefalite, traumatismo craniano, distúrbios metabólicos (hiponatremia, hipoglicemia).', score: 1, ref: 'DeLorenzo et al. 1996' },
            { item: 'Causas crônicas: epilepsia conhecida com descontinuação de AED, nível subterapêutico de antiepiléptico.', score: 1, ref: 'DeLorenzo et al. 1996' },
            { item: 'Sempre corrigir hipoglicemia e hiponatremia imediatamente — são causas tratáveis.', score: 2, ref: 'Neurocritical Care Society 2012' }
          ]
        },
        {
          h: 'Monitorização e Suporte',
          items: [
            { item: 'Monitorização contínua: SpO2, ECG, PA. Fenitoína IV pode causar bradicardia e hipotensão — infundir lentamente (≤ 50 mg/min).', score: 2, ref: 'Shorvon 2011' },
            { item: 'EEG contínuo indicado no SE refratário para avaliar resposta ao tratamento e descartar SE não-convulsivo.', score: 1, ref: 'ACNS 2012' }
          ]
        }
      ]
    }
  },

  // CASO 3 — MENINGITE BACTERIANA
  {
    id: 3,
    title: 'Cefaleia intensa, febre e rigidez de nuca',
    sub: 'PS — Pronto-Socorro',
    tema: 'Emergencias Neurologicas',
    topic: 'Meningite Bacteriana',
    level: 'difícil',
    cardAccent: '#FF7043',
    instA: {
      scenario: 'PS de hospital universitário, 14h. Jovem trazido por colegas de faculdade.',
      patient: 'Lucas Martins, 21 anos, masculino, estudante universitário, sem comorbidades conhecidas.',
      complaint: 'Cefaleia intensa de início há 12 horas, febre alta, fotofobia e rigidez do pescoço.',
      tasks: [
        'Realize anamnese e exame físico dirigidos (pesquisa de sinais meníngeos).',
        'Solicite e interprete exames complementares urgentes.',
        'Inicie tratamento empírico antes do resultado da cultura.',
        'Avalie necessidade de profilaxia para contactantes.'
      ]
    },
    instB: {
      vitals: { PA: '108/70 mmHg', FC: '112 bpm', FR: '22 irpm', Tax: '39,6 °C', SpO2: '97% (ar ambiente)', Glasgow: '13 (O3V4M6)' },
      physicalGeneral: 'Mal estado geral, febril, prostrado, fotofobia intensa, fono-fobia.',
      physicalSeg: 'NEUROLÓGICO: rigidez de nuca (mentoqueixo-esternal positivo), Kernig positivo bilateral, Brudzinski positivo, pupilas isocóricas fotorreativas, sem déficit motor focal. | PELE: petéquias em tronco e membros inferiores (5–6 lesões). | CARDIOVASCULAR: taquicardia sinusal, hipotensão limítrofe.',
      labs: [
        { test: 'Hemograma', val: 'Leuco 22.400/mm³ (87% segmentados, 8% bastões)', ref: '4.500–11.000/mm³', alt: true },
        { test: 'PCR', val: '248 mg/L', ref: '< 5 mg/L', alt: true },
        { test: 'Lactato', val: '3,8 mmol/L', ref: '< 2,0 mmol/L', alt: true },
        { test: 'TC crânio', val: 'Sem lesão expansiva, sem desvio de linha média, cisterna basal pérvia', ref: '', alt: false },
        { test: 'LCR — Aspecto', val: 'Turvo, xantocrômico', ref: 'Límpido e incolor', alt: true },
        { test: 'LCR — Células', val: '4.200 células/mm³ (92% PMN)', ref: '< 5 células/mm³', alt: true },
        { test: 'LCR — Glicose', val: '28 mg/dL (glicemia 102 mg/dL)', ref: '> 50% da glicemia', alt: true },
        { test: 'LCR — Proteína', val: '380 mg/dL', ref: '15–45 mg/dL', alt: true },
        { test: 'LCR — Gram', val: 'Diplococos gram-negativos', ref: '', alt: true }
      ],
      image: 'TC crânio: sem lesão expansiva, sem hidrocefalia, sem desvio de linha média. Cisterna basal pérvia.',
      note: 'Entregar resultado da TC antes da punção lombar. Entregar LCR após o candidato realizar a punção. Revelar petéquias espontaneamente durante exame físico.',
      patientProfile: 'Estudante universitário, mora em república com 5 colegas. Sem vacinação prévia para meningococo. Nega uso de drogas. Sem antecedentes.',
      script: [
        { trigger: 'Queixa principal', speech: 'Doutor, tô com a pior dor de cabeça da minha vida. Começou ontem à tarde e foi piorando. A luz me incomoda demais.' },
        { trigger: 'Sobre febre', speech: 'Sim, fui medir em casa, tava 39,8. Tomei paracetamol mas não passou.' },
        { trigger: 'Sobre rigidez de nuca', speech: 'Tô sentindo o pescoço duro, dói quando tento abaixar a cabeça.' },
        { trigger: 'Sobre as manchas na pele', speech: 'Só percebi quando o colega falou. Apareceram hoje de manhã.' },
        { trigger: 'Sobre vacinas', speech: 'Não, nunca tomei vacina de meningite não.' },
        { trigger: 'Sobre contactantes', speech: 'Moro com mais 4 colegas na república. A gente fica junto o dia todo.' },
        { trigger: 'Pergunta ativa — diagnóstico', speech: 'Que que eu tenho, doutor? É meningite?' }
      ],
      hiddenInfo: 'Mora em república com 5 estudantes — só revela se candidato perguntar sobre contactantes | Sem vacinação para meningococo — revela se candidato perguntar sobre vacinas',
      actorBehavior: 'Extremamente prostrado, responde com esforço, queixa-se de dor à movimentação da cabeça. Fecha os olhos durante a consulta por fotofobia.'
    },
    instC: {
      diagnosis: 'Meningite bacteriana por Neisseria meningitidis (meningococcemia), com petéquias e sinais meníngeos clássicos.',
      differentials: [
        'Meningite viral — entra por síndrome meníngea; sai pelo LCR purulento (PMN, glicose baixa, proteína alta) e petéquias',
        'Hemorragia subaracnóidea — entra por cefaleia súbita intensa; sai pela ausência de sangue no LCR e febre alta',
        'Encefalite viral (HSV) — entra por febre + alteração neurológica; sai pelo predomínio de sinais meníngeos e LCR purulento',
        'Abscesso cerebral — entra por febre + cefaleia; sai pela TC normal e LCR purulento sem massa'
      ],
      context: 'Meningite meningocócica acomete principalmente jovens e adolescentes. A tríade clássica (febre, cefaleia, rigidez de nuca) está presente em < 50% — petéquias/púrpura são altamente sugestivas de meningococcemia e indicam urgência.',
      justify: 'Tríade clínica clássica + petéquias + LCR purulento com diplococos gram-negativos + contexto epidemiológico (jovem universitário em república sem vacinação).',
      expectedAnamnesis: 'Início e progressão da cefaleia | Febre | Fotofobia e fonofobia | Rigidez de nuca | Lesões cutâneas | Contactantes | Status vacinal | Antecedentes de imunossupressão',
      expectedPhysical: 'Kernig | Brudzinski | Rigidez de nuca | Pesquisa de petéquias/púrpura | Fundo de olho (papiledema) | Glasgow | Pupilas',
      expectedExams: [
        { exam: 'TC crânio (antes de PL se Glasgow < 13 ou papiledema)', justify: 'Excluir lesão expansiva antes da punção lombar', expected: 'TC normal — PL liberada' },
        { exam: 'Punção lombar com análise do LCR', justify: 'Diagnóstico definitivo', expected: 'LCR purulento, pleocitose PMN, glicose baixa, proteína alta, gram+ diplococos gram-neg' },
        { exam: 'Hemograma + PCR + lactato', justify: 'Avaliar gravidade e resposta inflamatória sistêmica', expected: 'Leucocitose com desvio, PCR elevado, lactato elevado' },
        { exam: 'Hemocultura (2 amostras)', justify: 'Identificação do agente etiológico', expected: 'Positiva para N. meningitidis (resultado em 24–48h)' }
      ],
      expectedConduct: 'Farmacológica: Ceftriaxona 2g IV de 12/12h (imediatamente — não aguardar LCR); Dexametasona 0,15 mg/kg IV de 6/6h por 4 dias (iniciar antes ou com 1ª dose do ATB); Profilaxia de contactantes: Rifampicina 600 mg VO de 12/12h por 2 dias (ou ciprofloxacino 500 mg dose única) | Suporte: hidratação IV, analgesia, repouso em quarto escurecido; isolamento respiratório por 24h após início do ATB | Notificação compulsória imediata (SINAN)',
      expectedCommunication: 'Informar diagnóstico ao paciente e família | Explicar necessidade de tratamento imediato | Notificar vigilância epidemiológica | Orientar profilaxia dos contactantes | Isolar o paciente',
      criticalErrors: [
        'Aguardar resultado do LCR para iniciar antibiótico (cada hora de atraso aumenta mortalidade)',
        'Realizar punção lombar sem TC prévia em paciente com alteração de consciência ou papiledema',
        'Não indicar quimioprofilaxia para contactantes próximos',
        'Não notificar à vigilância epidemiológica (meningite bacteriana é notificação compulsória imediata)',
        'Não usar dexametasona adjuvante (reduz sequelas neurológicas)'
      ]
    },
    instD: {
      title: 'Meningite Bacteriana — Material de Estudo',
      sections: [
        {
          h: 'Epidemiologia e Agentes Etiológicos',
          items: [
            { item: 'Neisseria meningitidis: jovens e adultos jovens, surtos em ambientes coletivos.', score: 1, ref: 'Van de Beek et al. 2016' },
            { item: 'Streptococcus pneumoniae: adultos > 50 anos, imunocomprometidos — maior mortalidade.', score: 1, ref: 'Van de Beek et al. 2016' },
            { item: 'Listeria monocytogenes: idosos, gestantes, imunossuprimidos — cobrir com ampicilina.', score: 1, ref: 'IDSA Guidelines 2004' }
          ]
        },
        {
          h: 'Diagnóstico',
          items: [
            { item: 'Tríade clássica (febre + cefaleia + rigidez de nuca) presente em < 44% — não excluir ausência de um item.', score: 2, ref: 'Attia et al. 1999' },
            { item: 'Petéquias/púrpura: altamente sugestivas de meningococcemia — tratar sem aguardar exames.', score: 2, ref: 'Diretrizes SBN 2022' },
            { item: 'LCR bacteriano: turvo, PMN > 1000, glicose < 40 mg/dL (ou razão LCR/plasma < 0,4), proteína > 100 mg/dL.', score: 2, ref: 'IDSA Guidelines 2004' }
          ]
        },
        {
          h: 'Tratamento',
          items: [
            { item: 'Antibiótico empírico imediato: ceftriaxona 2g IV 12/12h. Não aguardar resultado do LCR.', score: 2, ref: 'IDSA Guidelines 2004' },
            { item: 'Dexametasona 0,15 mg/kg IV 6/6h por 4 dias: iniciar com ou antes da 1ª dose do ATB — reduz surdez e mortalidade no pneumococo.', score: 2, ref: 'De Gans & Van de Beek, NEJM 2002' },
            { item: 'Cobertura adicional para Listeria (≥ 50 anos ou imunossuprimido): adicionar ampicilina 2g IV 4/4h.', score: 1, ref: 'IDSA Guidelines 2004' }
          ]
        },
        {
          h: 'Profilaxia de Contactantes',
          items: [
            { item: 'Meningococo: Rifampicina 600 mg VO 12/12h por 2 dias (ou ciprofloxacino 500 mg dose única).', score: 2, ref: 'MS/SVS Nota Técnica 2021' },
            { item: 'Contactantes próximos: coabitantes, namorado/a, colegas de república com contato face a face > 8h.', score: 1, ref: 'MS/SVS Nota Técnica 2021' },
            { item: 'Notificação compulsória imediata ao SINAN (< 24h).', score: 2, ref: 'Portaria MS 264/2020' }
          ]
        }
      ]
    }
  },

  // CASO 4 — HEMORRAGIA SUBARACNÓIDEA
  {
    id: 4,
    title: 'Pior dor de cabeça da vida de início súbito',
    sub: 'PS — Pronto-Socorro',
    tema: 'Emergencias Neurologicas',
    topic: 'Hemorragia Subaracnóidea',
    level: 'difícil',
    cardAccent: '#FF7043',
    instA: {
      scenario: 'PS de hospital terciário, 16h. Paciente trazido por familiar após súbita cefaleia durante o exercício.',
      patient: 'Fernanda Lima, 47 anos, feminina, professora, hipertensa.',
      complaint: 'Cefaleia de início súbito ("como uma bomba na cabeça") durante caminhada há 2 horas, acompanhada de náuseas, vômitos e breve perda de consciência.',
      tasks: [
        'Realize anamnese e exame neurológico completo.',
        'Solicite e interprete exames de imagem urgentes.',
        'Avalie a gravidade pela escala de Hunt e Hess.',
        'Indique conduta imediata e encaminhamento à neurocirurgia.'
      ]
    },
    instB: {
      vitals: { PA: '186/106 mmHg', FC: '96 bpm', FR: '18 irpm', Tax: '37,2 °C', SpO2: '97%', Glasgow: '14 (O4V4M6)' },
      physicalGeneral: 'Regular estado geral, consciente, orientada, extremamente ansiosa, fotofobia intensa.',
      physicalSeg: 'NEUROLÓGICO: rigidez de nuca leve-moderada, Kernig negativo, sem déficit motor focal, pupilas isocóricas fotorreativas (3mm). | FUNDO DE OLHO: hemorragias sub-hialóideas bilaterais (síndrome de Terson). | CARDIOVASCULAR: taquicardia leve, PA elevada.',
      labs: [
        { test: 'TC crânio sem contraste', val: 'Hiperdensidade nas cisternas basais e fissura silviana bilateral — padrão de HSA', ref: '', alt: true },
        { test: 'Hemograma', val: 'Normal', ref: '', alt: false },
        { test: 'Coagulograma', val: 'Normal', ref: '', alt: false },
        { test: 'LCR (se TC negativa)', val: 'Xantocrômico, hemácias 180.000/mm³, sem diminuição entre tubos', ref: '', alt: true }
      ],
      image: 'TC crânio sem contraste: hiperdensidade nas cisternas basais, fissura inter-hemisférica anterior e fissura silviana bilateral — padrão típico de HSA. Escala de Fisher = 3.',
      note: 'Entregar TC imediatamente após solicitação. Se candidato não pedir TC mas pedir PL, entregar resultado de LCR xantocrômico. Fundo de olho: revelar hemorragias sub-hialóideas se candidato examinar.',
      patientProfile: 'Mulher de 47 anos, professora, HAS há 5 anos (uso irregular de losartana). Fumante (10 maços-ano). Irmão teve aneurisma cerebral aos 52 anos.',
      script: [
        { trigger: 'Queixa principal', speech: 'Doutora, nunca senti uma dor de cabeça assim. Foi como se explodisse uma bomba dentro da minha cabeça. Na hora eu desmaiei, acho que por uns segundos.' },
        { trigger: 'Sobre a dor', speech: 'Atingiu o pico em segundos. Tô enjoada, vomitei duas vezes no carro. A luz tá me matando.' },
        { trigger: 'Sobre dores de cabeça anteriores', speech: 'Tenho enxaqueca às vezes, mas nunca assim. Essa é completamente diferente.' },
        { trigger: 'Sobre histórico familiar', speech: 'Meu irmão mais velho teve um aneurisma no cérebro há 2 anos. Ficou internado por semanas.' },
        { trigger: 'Sobre o pescoço', speech: 'Sim, tô com o pescoço duro, dói quando abaixo a cabeça.' },
        { trigger: 'Sobre medicações', speech: 'Tomo losartana pra pressão, mas às vezes esqueço. Não tomo nenhuma outra coisa.' },
        { trigger: 'Pergunta ativa — diagnóstico', speech: 'É um derrame? Eu tenho aneurisma como meu irmão?' }
      ],
      hiddenInfo: 'História familiar de aneurisma cerebral (irmão) — revela se candidato perguntar sobre família | Tabagismo (10 maços-ano) — revela se perguntar sobre tabaco | Uso irregular de losartana — revela se perguntar sobre adesão',
      actorBehavior: 'Extremamente ansiosa e com dor intensa (EVA 9/10). Fotofobia real — fecha os olhos. Pergunta repetidamente se vai morrer ou ficar com sequelas.'
    },
    instC: {
      diagnosis: 'Hemorragia subaracnóidea espontânea (HSA), provavelmente por rotura de aneurisma sacular, Hunt-Hess grau II, Fisher 3.',
      differentials: [
        'Meningite bacteriana — entra por cefaleia + rigidez de nuca; sai pelo início thunderclap, sem febre significativa e TC com hiperdensidade',
        'Migrânea — entra por cefaleia intensa; sai pelo padrão thunderclap (ápice em segundos) e perda de consciência',
        'AVC isquêmico — entra por déficit neurológico súbito; sai pela ausência de déficit focal e TC com hiperdensidade subaracnóidea',
        'HSA traumática — entra pelo sangue subaracnóideo; sai pela ausência de trauma e história de cefaleia thunderclap espontânea'
      ],
      context: 'A HSA espontânea representa 5% dos AVCs mas tem mortalidade de 30–40%. 85% são causadas por rotura de aneurisma sacular. A cefaleia thunderclap ("pior dor da vida" com ápice em < 1 min) é o sinal cardinal. TC detecta 98% das HSAs nas primeiras 12 horas.',
      justify: 'Cefaleia thunderclap, síncope, rigidez de nuca, hemorragias sub-hialóideas no FO, TC com hiperdensidade nas cisternas basais — todos critérios preenchidos.',
      expectedAnamnesis: 'Caráter e início da cefaleia (thunderclap) | Perda de consciência | Náuseas/vômitos | Rigidez de nuca | História familiar de aneurisma | HAS, tabagismo | Anticoagulantes',
      expectedPhysical: 'Escala de Hunt e Hess | Escala de Fisher (imagem) | Fundo de olho (hemorragia sub-hialóidea) | Rigidez de nuca | Déficit motor focal | Pupilas',
      expectedExams: [
        { exam: 'TC crânio sem contraste', justify: 'Diagnóstico de HSA — sensibilidade 98% nas primeiras 12h', expected: 'Hiperdensidade cisternas basais — Fisher 3' },
        { exam: 'Punção lombar (se TC negativa)', justify: 'LCR xantocrômico confirma HSA com TC negativa', expected: 'Xantocromia + hemácias uniformes entre tubos' },
        { exam: 'AngioTC cerebral', justify: 'Identificar aneurisma e planejar clipagem/coiling', expected: 'Aneurisma de comunicante posterior ou ACM' },
        { exam: 'ECG', justify: 'HSA pode causar alterações eletrocardiográficas (onda T invertida, QT prolongado)', expected: 'Alterações de repolarização' }
      ],
      expectedConduct: 'Internação em UTI neurocirúrgica | Repouso absoluto, quarto escurecido | Nimodipino 60 mg VO de 4/4h por 21 dias (prevenção de vasoespasmo) | Controle rigoroso de PA (evitar hipotensão) | Analgesia (dipirona, morfina se necessário) | Encaminhamento urgente à neurocirurgia para clipagem ou embolização do aneurisma | Profilaxia de TVP',
      expectedCommunication: 'Comunicar diagnóstico de sangramento cerebral | Explicar necessidade de UTI e neurocirurgia urgente | Abordar prognóstico com honestidade | Obter TCLE para procedimento neurocirúrgico',
      criticalErrors: [
        'Dispensar paciente com diagnóstico de enxaqueca sem TC ou PL',
        'Realizar PL sem TC prévia',
        'Não usar nimodipino (prevenção de vasoespasmo)',
        'Não encaminhar à neurocirurgia urgente',
        'Reduzir PA abruptamente (risco de isquemia cerebral antes de tratar o aneurisma)'
      ]
    },
    instD: {
      title: 'Hemorragia Subaracnóidea — Material de Estudo',
      sections: [
        {
          h: 'Diagnóstico',
          items: [
            { item: 'Cefaleia thunderclap: ápice em < 1 minuto — sinal cardinal da HSA. "Pior cefaleia da vida".', score: 2, ref: 'Edlow & Caplan, NEJM 2000' },
            { item: 'TC sem contraste: sensibilidade 98% nas primeiras 12h, cai para < 50% após 7 dias.', score: 2, ref: 'Perry et al. BMJ 2011' },
            { item: 'Punção lombar: indicada quando TC negativa. Xantocromia visível após 2h do sangramento, persiste por 2 semanas.', score: 2, ref: 'Edlow & Caplan 2000' }
          ]
        },
        {
          h: 'Escalas de Gravidade',
          items: [
            { item: 'Hunt e Hess: grau I (assintomático) a grau V (coma profundo) — correlaciona com prognóstico.', score: 1, ref: 'Hunt & Hess 1968' },
            { item: 'Fisher modificado: grau 1 (sem sangue) a grau 4 (hematoma intraventricular) — prediz risco de vasoespasmo.', score: 1, ref: 'Frontera et al. 2006' }
          ]
        },
        {
          h: 'Complicações',
          items: [
            { item: 'Ressangramento: maior risco nas primeiras 24h (4%) — principal causa de morte precoce.', score: 2, ref: 'Kassell et al. 1990' },
            { item: 'Vasoespasmo: pico entre 4–14 dias — causa isquemia cerebral tardia; prevenção com nimodipino.', score: 2, ref: 'Pickard et al. NEJM 1989' },
            { item: 'Hidrocefalia: aguda (horas) ou crônica (semanas) — pode requerer DVE ou DVP.', score: 1, ref: 'Diretrizes AHA/ASA 2012' }
          ]
        },
        {
          h: 'Tratamento',
          items: [
            { item: 'Nimodipino 60 mg VO 4/4h por 21 dias: reduz isquemia por vasoespasmo em 34%.', score: 2, ref: 'Pickard et al. NEJM 1989' },
            { item: 'Tratamento do aneurisma: clipagem cirúrgica ou embolização endovascular — na primeira semana se possível.', score: 2, ref: 'ISAT Trial 2002' }
          ]
        }
      ]
    }
  },

  // CASO 5 — CRISE MIASTÊNICA
  {
    id: 5,
    title: 'Fraqueza muscular progressiva e dificuldade respiratória',
    sub: 'PS — Pronto-Socorro',
    tema: 'Emergencias Neurologicas',
    topic: 'Crise Miastênica',
    level: 'difícil',
    cardAccent: '#FF7043',
    instA: {
      scenario: 'PS de hospital universitário, 10h. Paciente com Miastenia Gravis conhecida.',
      patient: 'Patrícia Souza, 38 anos, feminina, enfermeira, portadora de Miastenia Gravis há 4 anos.',
      complaint: 'Piora progressiva da fraqueza muscular há 3 dias, com dificuldade para engolir e respirar nas últimas horas.',
      tasks: [
        'Realize avaliação neuromuscular e respiratória de urgência.',
        'Diferencie crise miastênica de crise colinérgica.',
        'Solicite exames complementares e avalie necessidade de suporte ventilatório.',
        'Institua tratamento específico da crise miastênica.'
      ]
    },
    instB: {
      vitals: { PA: '124/80 mmHg', FC: '102 bpm', FR: '26 irpm', Tax: '37,4 °C', SpO2: '93% (ar ambiente)', CVF: '1,2 L (22% do previsto)' },
      physicalGeneral: 'Regular estado geral, consciente, ansiosa, voz nasal, disfagia para sólidos e líquidos, dispneia ao repouso.',
      physicalSeg: 'NEUROLÓGICO: ptose palpebral bilateral, diplopia, fraqueza proximal dos membros (força 3/5), reflexos diminuídos. Teste do olhar sustentado: ptose após 60s (positivo para fadiga). | RESPIRATÓRIO: uso de musculatura acessória, FR 26 irpm, MV reduzido nas bases, SpO2 93%. | DIGESTIVO: disfagia para sólidos e líquidos.',
      labs: [
        { test: 'CVF (Capacidade Vital Forçada)', val: '1,2 L (22% do previsto)', ref: '> 80% do previsto', alt: true },
        { test: 'PIM (Pressão Inspiratória Máxima)', val: '-18 cmH₂O', ref: '< -30 cmH₂O indica IOT', alt: true },
        { test: 'Anti-AChR (ac anti-receptor acetilcolina)', val: 'Positivo (título alto prévio)', ref: 'Negativo', alt: true },
        { test: 'Hemograma', val: 'Normal', ref: '', alt: false },
        { test: 'TC tórax', val: 'Timoma anterior mediastinal (conhecido)', ref: '', alt: false }
      ],
      image: 'TC de tórax: timoma no mediastino anterior (diagnóstico prévio). Sem pneumonia aspirativa.',
      note: 'Revelar CVF e PIM quando candidato solicitar avaliação respiratória. A paciente está em uso de piridostigmina mas relata que a última dose foi há 6 horas (não é crise colinérgica).',
      patientProfile: 'Enfermeira, MG soropositiva (anti-AChR) há 4 anos, timoma ressecado há 2 anos. Em uso de piridostigmina 60 mg 4/4h e prednisona 40 mg/dia. Teve infecção urinária tratada com ciprofloxacino há 1 semana (potencial desencadeante).',
      script: [
        { trigger: 'Queixa principal', speech: 'Doutora, minha miastenia tá em crise. Tô com dificuldade pra respirar e engolir. Fui piorando nos últimos 3 dias.' },
        { trigger: 'Sobre respiração', speech: 'Ontem à noite eu acordei com falta de ar. Hoje de manhã ficou pior, consigo falar mas fico cansada.' },
        { trigger: 'Sobre a medicação', speech: 'Tô tomando tudo certinho, piridostigmina e prednisona. Tomei a última dose de piridostigmina há umas 6 horas.' },
        { trigger: 'Sobre fator desencadeante', speech: 'Tive uma infecção urinária semana passada, tomei ciprofloxacino. Será que foi isso?' },
        { trigger: 'Sobre salivação excessiva ou diarreia', speech: 'Não, não tô com saliva demais nem diarreia. Pelo contrário, tô com a boca seca.' },
        { trigger: 'Pergunta ativa', speech: 'Vai precisar me intubar, doutora? Tenho medo disso.' }
      ],
      hiddenInfo: 'Uso de ciprofloxacino (fluoroquinolona piora MG) — revela se candidato perguntar sobre medicações recentes | Sem sintomas colinérgicos (boca seca, não diarreia) — revela se candidato diferenciar crise miastênica de colinérgica',
      actorBehavior: 'Ansiosa, voz nasal e fraca, com pausas para respirar durante as falas. Demonstra esforço ao falar frases longas.'
    },
    instC: {
      diagnosis: 'Crise miastênica grave com insuficiência respiratória iminente, possivelmente desencadeada por fluoroquinolona (ciprofloxacino).',
      differentials: [
        'Crise colinérgica (excesso de piridostigmina) — entra por fraqueza muscular em MG; sai pela ausência de salivação excessiva, miose, bradicardia, diarreia — e última dose há 6h',
        'Síndrome de Guillain-Barré — entra por fraqueza ascendente + IR; sai pela história de MG estabelecida e ptose/diplopia',
        'Botulismo — entra por fraqueza descendente; sai pela história de MG e ausência de ingesta suspeita',
        'Polimiosite — entra por fraqueza proximal; sai pela ptose, diplopia e contexto de MG estabelecida'
      ],
      context: 'A crise miastênica é a complicação mais grave da Miastenia Gravis, com falência da musculatura respiratória. Fatores precipitantes incluem infecções, cirurgias, medicamentos (fluoroquinolonas, aminoglicosídeos, betabloqueadores) e retirada de imunossupressores.',
      justify: 'CVF < 20% do previsto, PIM > -30 cmH₂O, SpO2 93% em ar ambiente, disfagia — critérios de IOT iminente. Contexto de MG estabelecida + uso de ciprofloxacino.',
      expectedAnamnesis: 'Tempo de piora | Disfagia e disfonia | Última dose de piridostigmina | Medicamentos novos (desencadeantes) | Infecção recente | Sintomas colinérgicos (diferencial)',
      expectedPhysical: 'Ptose e fadiga ocular (teste do olhar sustentado) | Força muscular proximal | FR e padrão respiratório | SpO2 | Ausculta pulmonar | Reflexos',
      expectedExams: [
        { exam: 'CVF e PIM', justify: 'Regra dos 20-30-40: CVF < 20%, PIM < 30 cmH₂O, PE < 40 cmH₂O = intubação iminente', expected: 'CVF 22%, PIM -18 — intubação indicada' },
        { exam: 'Gasometria arterial', justify: 'Avaliar hipercapnia (sinal de falência ventilatória)' , expected: 'Hipoxemia + hipercapnia' },
        { exam: 'Anticorpos anti-AChR', justify: 'Confirma MG soropositiva e monitoriza atividade', expected: 'Positivo — já conhecido' }
      ],
      expectedConduct: 'Suporte: IOT eletiva imediata (CVF < 20% e PIM > -30 cmH₂O); suspender piridostigmina durante crise (pode piorar secreções) | Específico: Plasmaférese (5 sessões em dias alternados) OU Imunoglobulina IV (2 g/kg dividido em 2–5 dias) | Imunossupressão: manter corticoide; suspender ciprofloxacino | Suporte em UTI até desmame ventilatório',
      expectedCommunication: 'Explicar diagnóstico de crise miastênica | Explicar necessidade de intubação | Discutir opções terapêuticas (PLEX vs IVIG) | Tranquilizar sobre reversibilidade da crise',
      criticalErrors: [
        'Não reconhecer critérios para intubação iminente (regra dos 20-30-40)',
        'Continuar piridostigmina durante a crise (piora de secreções, dificulta desmame)',
        'Usar succinilcolina na IOT (resistência ao bloqueio despolarizante em MG)',
        'Não identificar ciprofloxacino como desencadeante e não suspendê-lo',
        'Confundir com crise colinérgica e reduzir piridostigmina (em vez de outras medidas)'
      ]
    },
    instD: {
      title: 'Crise Miastênica — Material de Estudo',
      sections: [
        {
          h: 'Definição e Desencadeantes',
          items: [
            { item: 'Crise miastênica: exacerbação grave com falência respiratória, requerendo suporte ventilatório.', score: 2, ref: 'Gilhus NE, NEJM 2016' },
            { item: 'Precipitantes: infecções (principal), cirurgias, medicamentos (fluoroquinolonas, aminoglicosídeos, betabloqueadores, cloroquina), gravidez, retirada de corticoide.', score: 2, ref: 'Diretrizes ABN 2021' }
          ]
        },
        {
          h: 'Avaliação Respiratória — Regra dos 20-30-40',
          items: [
            { item: 'CVF < 20% do previsto, PIM > -30 cmH₂O, PEM < 40 cmH₂O: intubação iminente.', score: 2, ref: 'Seneviratne et al. 2008' },
            { item: 'Não aguardar SpO2 cair ou PaCO2 subir — a oxigenação se mantém tarde demais; a hipercapnia é sinal tardio de falência.', score: 2, ref: 'Zinman L, Neurol Clin 2010' }
          ]
        },
        {
          h: 'Tratamento Específico',
          items: [
            { item: 'Plasmaférese (PLEX): 5 sessões em dias alternados — resposta em 1–2 semanas.', score: 2, ref: 'Gajdos et al. 1997' },
            { item: 'Imunoglobulina IV (IVIG): 2 g/kg em 2–5 dias — eficácia similar à PLEX, mais prático.', score: 2, ref: 'Barth et al. 2011' },
            { item: 'Suspender piridostigmina durante a crise: aumenta secreções e dificulta desmame ventilatório.', score: 2, ref: 'Diretrizes ABN 2021' }
          ]
        }
      ]
    }
  },

  // CASO 6 — SÍNDROME DE GUILLAIN-BARRÉ
  {
    id: 6,
    title: 'Fraqueza nos pés que subiu para as pernas em 5 dias',
    sub: 'PS — Pronto-Socorro',
    tema: 'Emergencias Neurologicas',
    topic: 'Síndrome de Guillain-Barré',
    level: 'moderado',
    cardAccent: '#FF7043',
    instA: {
      scenario: 'PS de hospital geral, 09h. Paciente encaminhado pela UBS por fraqueza progressiva.',
      patient: 'Antônio Pereira, 52 anos, masculino, caminhoneiro, sem comorbidades conhecidas.',
      complaint: 'Fraqueza muscular progressiva que começou nos pés há 5 dias e subiu para as coxas e mãos, com formigamento nos extremidades.',
      tasks: [
        'Realize anamnese e exame neurológico completo.',
        'Solicite exames complementares.',
        'Estabeleça o diagnóstico e avalie gravidade.',
        'Inicie suporte e tratamento específico.'
      ]
    },
    instB: {
      vitals: { PA: '132/84 mmHg', FC: '96 bpm', FR: '20 irpm', Tax: '36,8 °C', SpO2: '97%', CVF: '2,8 L (72% do previsto)' },
      physicalGeneral: 'Regular estado geral, consciente, orientado, ansioso, marcha atáxica com base alargada.',
      physicalSeg: 'NEUROLÓGICO: fraqueza flácida tetraparesia (força 3/5 MMII, 4/5 MMSS), arreflexia generalizada, parestesias em luva e meia, sem nível sensitivo definido, disfagia leve. | SISTEMA NERVOSO AUTÔNOMO: FC 96 bpm variável (disautonomia). | RESPIRATÓRIO: FR 20, CVF 72% do previsto.',
      labs: [
        { test: 'LCR — Células', val: '3 células/mm³', ref: '< 5/mm³', alt: false },
        { test: 'LCR — Proteína', val: '186 mg/dL', ref: '15–45 mg/dL', alt: true },
        { test: 'LCR — Glicose', val: '68 mg/dL', ref: 'Normal', alt: false },
        { test: 'ENMG (eletroneuromiografia)', val: 'Redução de velocidade de condução nervosa, aumento de latências distais — padrão desmielinizante', ref: '', alt: true },
        { test: 'Anti-gangliosídeos (anti-GM1)', val: 'Positivo', ref: 'Negativo', alt: true }
      ],
      image: 'RM de coluna: sem compressão medular, sem hematoma epidural.',
      note: 'Revelar LCR após punção lombar. Revelar ENMG após solicitação. A variação da FC durante o exame é sinal de disautonomia — mencionar espontaneamente durante exame.',
      patientProfile: 'Caminhoneiro, viajou para o interior de SP há 2 semanas. Teve diarreia aguda há 12 dias (infecção por Campylobacter jejuni — não confirmada, mas suspeita). Sem vacinação recente. Não faz uso de medicamentos.',
      script: [
        { trigger: 'Queixa principal', speech: 'Doutor, começou com um formigamento nos pés semana passada. Depois foi ficando fraco, e ontem as mãos também. Tô com dificuldade pra andar.' },
        { trigger: 'Sobre progressão', speech: 'Começou nos pés e foi subindo. Em 5 dias chegou até as coxas e as mãos.' },
        { trigger: 'Sobre diarreia', speech: 'Ih, é verdade, tive uma diarreia feia há umas 2 semanas. Três dias de diarreia com febre. Achei que tinha sido comida estragada.' },
        { trigger: 'Sobre dificuldade para respirar', speech: 'Tô um pouco cansado, mas não tô com falta de ar na repouso não.' },
        { trigger: 'Sobre a dor', speech: 'Tenho uma dor nas costas intensa, bem diferente da dor de coluna normal.' },
        { trigger: 'Pergunta ativa', speech: 'Isso é grave doutor? Vai paralisar tudo?' }
      ],
      hiddenInfo: 'Gastroenterite há 12 dias (Campylobacter suspeito) — revela se candidato perguntar sobre infecção prévia | Dor lombar intensa — revela se candidato perguntar sobre dor',
      actorBehavior: 'Assustado com a progressão da fraqueza. Colaborativo. Levemente disártrico. Anda com dificuldade — base alargada.'
    },
    instC: {
      diagnosis: 'Síndrome de Guillain-Barré (variante clássica AIDP — polirradiculoneuropatia inflamatória desmielinizante aguda), pós-infecciosa (provável Campylobacter jejuni).',
      differentials: [
        'Mielite transversa — entra por fraqueza ascendente; sai pela arreflexia, ausência de nível sensitivo e RM de coluna normal',
        'Botulismo — entra por fraqueza flácida descendente; sai pela progressão ascendente e contexto infeccioso prévio',
        'Compressão medular — entra por déficit motor; sai pela arreflexia, sem nível sensitivo e RM normal',
        'Hipocalemia grave — entra por fraqueza flácida; sai pelo LCR com dissociação albuminocitológica e ENMG desmielinizante'
      ],
      context: 'Guillain-Barré é a principal causa de paralisia flácida aguda no mundo. Frequentemente pós-infecciosa (Campylobacter, CMV, EBV, SARS-CoV-2). A dissociação albumino-citológica no LCR (proteína alta, células normais) é característica.',
      justify: 'Fraqueza flácida ascendente, arreflexia generalizada, dissociação albumino-citológica no LCR (proteína 186 mg/dL, 3 células), ENMG desmielinizante, antecedente de gastroenterite — critérios diagnósticos completos.',
      expectedAnamnesis: 'Início e progressão da fraqueza (ascendente?) | Parestesias | Dor lombar | Infecção precedente (2–4 semanas) | Vacinações recentes | Dificuldade para respirar | Disfagia | Alterações autonômicas',
      expectedPhysical: 'Força muscular proximal e distal | Reflexos tendíneos | Sensibilidade | Marcha | CVF e PIM | FC (disautonomia) | Nervos cranianos',
      expectedExams: [
        { exam: 'Punção lombar com análise do LCR', justify: 'Dissociação albumino-citológica: hallmark do SGB', expected: 'Proteína 186 mg/dL, células 3/mm³' },
        { exam: 'ENMG', justify: 'Confirma desmielinização e diferencia variantes', expected: 'Redução de velocidade de condução — AIDP' },
        { exam: 'CVF e PIM seriados', justify: 'Monitorização respiratória — principal causa de morte', expected: 'CVF 72% — ainda não na faixa de IOT' },
        { exam: 'RM de coluna', justify: 'Excluir compressão medular', expected: 'Sem compressão' }
      ],
      expectedConduct: 'Internação em UTI para monitorização respiratória e autonômica | Monitorização seriada de CVF e PIM (a cada 4–6h nas primeiras 24h) | Específico: IVIG 0,4 g/kg/dia por 5 dias OU Plasmaférese (5 sessões) — eficácia equivalente | Suporte: fisioterapia motora e respiratória, heparina profilática (TVP), cuidados com disfagia',
      expectedCommunication: 'Explicar diagnóstico e prognóstico (80% recuperação completa em 1 ano) | Informar sobre necessidade de UTI e monitorização | Orientar sobre fisioterapia | Preparar para possível intubação se CVF cair',
      criticalErrors: [
        'Não monitorizar função respiratória seriada',
        'Aguardar hipercapnia para intubar (a oxigenação é tardia na falência neuromuscular)',
        'Não usar IVIG nem plasmaférese',
        'Usar corticoide isolado (não tem benefício no SGB clássico e pode piorar)',
        'Alta hospitalar sem internação para monitorização (risco de deterioração rápida)'
      ]
    },
    instD: {
      title: 'Síndrome de Guillain-Barré — Material de Estudo',
      sections: [
        {
          h: 'Definição e Fisiopatologia',
          items: [
            { item: 'Polirradiculoneuropatia inflamatória aguda, autoimune, pós-infecciosa. Desmielinização (AIDP) ou axonal (AMAN/AMSAN).', score: 1, ref: 'Willison et al. Lancet 2016' },
            { item: 'Agentes desencadeantes: Campylobacter jejuni (mais comum), CMV, EBV, SARS-CoV-2, influenza.', score: 1, ref: 'Willison et al. Lancet 2016' }
          ]
        },
        {
          h: 'Diagnóstico',
          items: [
            { item: 'Critérios de Brighton: fraqueza flácida bilateral + hiporreflexia/arreflexia + dissociação albumino-citológica no LCR.', score: 2, ref: 'Fokke et al. Brain 2014' },
            { item: 'Dissociação albumino-citológica: proteína > 45 mg/dL com < 10 células/mm³ — hallmark do SGB.', score: 2, ref: 'Van den Berg et al. 2014' }
          ]
        },
        {
          h: 'Monitorização Respiratória',
          items: [
            { item: 'Regra dos 20-30-40: CVF < 20%, PIM > -30 cmH₂O, PEM < 40 cmH₂O = intubação.', score: 2, ref: 'Lawn & Wijdicks 1999' },
            { item: 'Monitorização seriada (4–6h nas primeiras 24h): deterioração pode ser rápida e imprevisível.', score: 2, ref: 'Diretrizes ABN 2021' }
          ]
        },
        {
          h: 'Tratamento Específico',
          items: [
            { item: 'IVIG 0,4 g/kg/dia por 5 dias ou 1 g/kg/dia por 2 dias: primeira escolha em adultos e crianças.', score: 2, ref: 'Hughes et al. Cochrane 2014' },
            { item: 'Plasmaférese (5 sessões): eficácia equivalente à IVIG. Preferida em insuficiência renal ou trombose.', score: 2, ref: 'French Cooperative Group 1997' },
            { item: 'Corticosteroides isolados: não têm benefício comprovado no SGB — não usar.', score: 2, ref: 'Hughes et al. Cochrane 2016' }
          ]
        }
      ]
    }
  },

  // CASO 7 — ENCEFALOPATIA DE WERNICKE
  {
    id: 7,
    title: 'Confusão mental e dificuldade para andar em etilista crônico',
    sub: 'PS — Pronto-Socorro',
    tema: 'Emergencias Neurologicas',
    topic: 'Encefalopatia de Wernicke',
    level: 'moderado',
    cardAccent: '#FF7043',
    instA: {
      scenario: 'PS de hospital geral, 20h. Paciente trazido por vizinhos após ser encontrado confuso em casa.',
      patient: 'Carlos Rocha, 55 anos, masculino, desempregado, etilista crônico.',
      complaint: 'Confusão mental, instabilidade para andar e "olhos tortos" notados há 2 dias.',
      tasks: [
        'Realize anamnese e exame neurológico completo.',
        'Identifique a tríade clínica diagnóstica.',
        'Solicite exames e inicie tratamento emergencial.',
        'Avalie complicações associadas ao etilismo.'
      ]
    },
    instB: {
      vitals: { PA: '118/76 mmHg', FC: '88 bpm', FR: '16 irpm', Tax: '36,9 °C', SpO2: '96%', Glasgow: '12 (O3V4M5)' },
      physicalGeneral: 'Mau estado geral, desnutrido, confuso, desorientado no tempo e espaço, hálito alcoólico.',
      physicalSeg: 'NEUROLÓGICO: oftalmoplegia (paresia do VI nervo bilateral — limitação da abdução), nistagmo horizontal, ataxia cerebelar (marcha impossível sem apoio, Romberg positivo), encefalopatia (confusão, desorientação). | NUTRICIONAL: desnutrição moderada, glossite, queilite angular. | CARDIOVASCULAR: sem sopros.',
      labs: [
        { test: 'Tiamina sérica', val: '18 nmol/L', ref: '70–180 nmol/L', alt: true },
        { test: 'Glicemia', val: '88 mg/dL', ref: '70–99 mg/dL', alt: false },
        { test: 'Sódio', val: '128 mEq/L', ref: '136–145 mEq/L', alt: true },
        { test: 'ALT', val: '82 U/L', ref: '< 40 U/L', alt: true },
        { test: 'GGT', val: '312 U/L', ref: '< 55 U/L', alt: true },
        { test: 'Hemograma', val: 'Macrocitose (VCM 108 fL), anemia leve (Hb 10,2 g/dL)', ref: 'VCM 80–100 fL', alt: true }
      ],
      image: 'RM de encéfalo: hipersinal em T2/FLAIR simétrico nos corpos mamilares, tálamo medial e aqueduto de Sylvius — padrão de Wernicke.',
      note: 'RM não disponível no PS — descrever ao candidato se solicitada. Nível de tiamina: revelar apenas se candidato solicitar. Não administrar glicose antes de tiamina!',
      patientProfile: 'Etilista crônico há 20 anos, consome > 300 g de etanol/dia. Desnutrido, raramente come. Mora sozinho. Já teve abstinência com tremores no passado.',
      script: [
        { trigger: 'Queixa principal', speech: 'Doutor, tô meio perdido... Não consigo andar direito. Os meus olhos tão... diferentes.' },
        { trigger: 'Sobre álcool', speech: 'Bebo sim... todo dia. Já faz muitos anos. Às vezes não como, só bebo.' },
        { trigger: 'Sobre alimentação', speech: 'Não tô comendo muito não. Quando tô bebendo não sinto fome.' },
        { trigger: 'Sobre os olhos', speech: 'Tô vendo duplo às vezes. E os olhos ficam tremendo sozinhos.' },
        { trigger: 'Sobre confusão', speech: 'Não sei bem que dia é hoje... tô um pouco perdido.' },
        { trigger: 'Pergunta ativa', speech: 'É do álcool isso, doutor?' }
      ],
      hiddenInfo: 'Episódios de abstinência com tremores no passado — revela se candidato perguntar sobre abstinência | Alimentação extremamente pobre há semanas — revela se candidato perguntar sobre alimentação',
      actorBehavior: 'Confuso, desorientado, responde com dificuldade e frases curtas. Olhar divergente visível. Não consegue se levantar sem apoio.'
    },
    instC: {
      diagnosis: 'Encefalopatia de Wernicke por deficiência de tiamina (vitamina B1) em contexto de etilismo crônico e desnutrição.',
      differentials: [
        'AVC de tronco/cerebelo — entra por ataxia e oftalmoplegia; sai pelo contexto de etilismo, desnutrição e deficiência de tiamina',
        'Síndrome de abstinência alcoólica — entra por confusão em etilista; sai pela tríade de Wernicke (oftalmoplegia + ataxia + confusão)',
        'Meningite bacteriana — entra por confusão + instabilidade; sai pela ausência de febre, rigidez de nuca e LCR normal',
        'Encefalite límbica — entra por confusão; sai pelo contexto de etilismo severo e tríade típica de Wernicke'
      ],
      context: 'A encefalopatia de Wernicke é subdiagnosticada (diagnóstico correto em vida em apenas 20% dos casos). A tríade clássica (oftalmoplegia + ataxia + confusão) está completa em apenas 16% dos pacientes. O diagnóstico é clínico — não aguardar RM ou dosagem de tiamina para tratar.',
      justify: 'Tríade completa: encefalopatia (confusão, desorientação), oftalmoplegia (paresia VI par, nistagmo) e ataxia cerebelar — em etilista crônico desnutrido. Tiamina sérica baixa.',
      expectedAnamnesis: 'Etilismo (quantidade e tempo) | Alimentação | Episódios de abstinência prévios | Início dos sintomas oculares, ataxia, confusão | Uso de vitaminas',
      expectedPhysical: 'Pares cranianos (VI e VIII) | Nistagmo | Marcha e Romberg | Glasgow | Sinais de desnutrição | Estigmas de hepatopatia alcóolica',
      expectedExams: [
        { exam: 'Glicemia capilar', justify: 'Excluir hipoglicemia', expected: '88 mg/dL — normal' },
        { exam: 'Tiamina sérica', justify: 'Confirma deficiência', expected: '18 nmol/L — baixo' },
        { exam: 'Eletrólitos', justify: 'Hiponatremia frequente no etilismo', expected: 'Na 128 mEq/L — hiponatremia' },
        { exam: 'Função hepática', justify: 'Avaliar hepatopatia alcoólica', expected: 'ALT e GGT elevados' },
        { exam: 'RM encéfalo', justify: 'Hipersinal em corpos mamilares e tálamo medial (típico)', expected: 'Padrão de Wernicke em FLAIR/T2' }
      ],
      expectedConduct: 'URGENTE: Tiamina 500 mg IV de 8/8h por 3 dias (ANTES de qualquer glicose) → depois tiamina 250 mg IM/IV por mais 5 dias → manutenção oral 100 mg/dia | Suporte: Glicose IV somente após tiamina; correção de hiponatremia; hidratação; suporte nutricional | Internação para monitorização e prevenção de síndrome de abstinência alcoólica',
      expectedCommunication: 'Explicar diagnóstico de deficiência vitamínica | Enfatizar que álcool e desnutrição causaram o quadro | Orientar sobre risco de Korsakoff se não tratado | Encaminhar para serviço de dependência química',
      criticalErrors: [
        'Administrar glicose IV antes de tiamina (preciptita ou agrava encefalopatia de Wernicke)',
        'Aguardar dosagem de tiamina ou RM para iniciar tratamento',
        'Usar dose inadequada de tiamina (oral ou 100 mg IM — dose de tratamento é 500 mg IV)',
        'Não corrigir hiponatremia associada',
        'Alta sem tratar e sem encaminhamento para dependência química'
      ]
    },
    instD: {
      title: 'Encefalopatia de Wernicke — Material de Estudo',
      sections: [
        {
          h: 'Fisiopatologia',
          items: [
            { item: 'Deficiência de tiamina (B1): cofator essencial no metabolismo da glicose (piruvato desidrogenase, α-cetoglutarato desidrogenase).', score: 1, ref: 'Harper et al. 2006' },
            { item: 'Causa morte neuronal principalmente nos corpos mamilares, tálamo medial, tecto do mesencéfalo e cerebelo.', score: 1, ref: 'Victor et al. 1989' }
          ]
        },
        {
          h: 'Diagnóstico Clínico',
          items: [
            { item: 'Tríade de Wernicke: oftalmoplegia (paresia VI, nistagmo) + ataxia cerebelar + encefalopatia. Completa em apenas 16% dos pacientes.', score: 2, ref: 'Harper 2006' },
            { item: 'Critérios de Caine: 2 de 4 critérios — (1) desnutrição, (2) oftalmoplegia, (3) alteração cerebelar, (4) encefalopatia.', score: 2, ref: 'Caine et al. 1997' }
          ]
        },
        {
          h: 'Tratamento',
          items: [
            { item: 'Tiamina 500 mg IV de 8/8h por 3 dias ANTES de qualquer glicose — regra absoluta.', score: 2, ref: 'EFNS Guidelines 2010' },
            { item: 'Administrar glicose antes de tiamina pode precipitar ou agravar a encefalopatia de Wernicke.', score: 2, ref: 'EFNS Guidelines 2010' },
            { item: 'Sequela sem tratamento: síndrome de Korsakoff — amnésia anterógrada irreversível + confabulação (80% dos casos de Wernicke não tratados).', score: 2, ref: 'Thomson & Marshall 2006' }
          ]
        }
      ]
    }
  },

  // CASO 8 — HIPERTENSÃO INTRACRANIANA
  {
    id: 8,
    title: 'Cefaleia progressiva, vômitos em jato e sonolência após TCE',
    sub: 'PS — Pronto-Socorro',
    tema: 'Emergencias Neurologicas',
    topic: 'Hipertensão Intracraniana',
    level: 'difícil',
    cardAccent: '#FF7043',
    instA: {
      scenario: 'PS de pronto-socorro, 23h. Paciente trazido por familiares após acidente de moto.',
      patient: 'Felipe Castro, 25 anos, masculino, entregador, sem antecedentes.',
      complaint: 'Cefaleia intensa progressiva, vômitos em jato (3 episódios) e sonolência crescente após queda de moto há 3 horas. Usava capacete.',
      tasks: [
        'Realize avaliação neurológica com escala de Glasgow e pupilas.',
        'Solicite e interprete TC de crânio urgente.',
        'Reconheça os sinais de HIC e aplique medidas de controle.',
        'Indique condutas definitivas e comunique à neurocirurgia.'
      ]
    },
    instB: {
      vitals: { PA: '162/96 mmHg', FC: '58 bpm', FR: '16 irpm', Tax: '36,8 °C', SpO2: '96%', Glasgow: '11 (O3V3M5) — deteriorando' },
      physicalGeneral: 'Sonolento, confuso, responde a comandos simples com dificuldade.',
      physicalSeg: 'NEUROLÓGICO: Glasgow 11 (deteriorando — era 14 na chegada), anisocoria (pupila D 6mm, L 3mm, D com resposta fotomotora lenta — sinal de herniação transtentorial), déficit motor leve em MIE. | FUNDO DE OLHO: papiledema bilateral. | CARDIOVASCULAR: bradicardia relativa (FC 58 bpm), PA elevada — Tríade de Cushing parcial.',
      labs: [
        { test: 'TC crânio sem contraste', val: 'Hiperdensidade lenticular biconvexa na região temporal direita (hematoma extradural). Desvio de linha média 7mm para esquerda. Apagamento do sulco temporal D.', ref: '', alt: true },
        { test: 'Hemograma', val: 'Normal', ref: '', alt: false },
        { test: 'Coagulograma', val: 'INR 1,0 — normal', ref: '', alt: false }
      ],
      image: 'TC crânio sem contraste: imagem hiperdensa biconvexa na região temporal-parietal direita (hematoma extradural). Desvio de linha média de 7mm para esquerda. Apagamento do sulco temporal ipsilateral.',
      note: 'TC revelar imediatamente após solicitação — é urgência neurocirúrgica. Anisocoria deve ser mencionada no exame físico espontaneamente durante avaliação das pupilas.',
      patientProfile: 'Jovem de 25 anos, entregador de moto, usava capacete aberto. TCE moderado-grave. Sem comorbidades, sem uso de anticoagulantes.',
      script: [
        { trigger: 'Queixa principal (paciente confuso)', speech: 'Minha cabeça... tá doendo muito... (vomita)' },
        { trigger: 'Familiar — sobre o acidente', speech: 'Ele bateu a cabeça, caiu da moto. Na hora ainda falava normal, mas foi ficando mais sonolento. Agora tá difícil de acordar.' },
        { trigger: 'Familiar — sobre perda de consciência', speech: 'Perdeu a consciência uns 5 minutos logo depois do acidente, depois acordou. Mas agora tá caindo no sono de novo.' },
        { trigger: 'Familiar — sobre medicações', speech: 'Não toma nada, é jovem e saudável.' },
        { trigger: 'Pergunta ativa', speech: 'Tem alguma coisa grave na cabeça dele, doutor?' }
      ],
      hiddenInfo: 'Intervalo lúcido (perdeu consciência → acordou → piora) — revela se candidato perguntar sobre evolução | Usava capacete aberto — revela se candidato perguntar sobre EPI',
      actorBehavior: 'Sonolento, responde monossilabicamente. Vomita durante a consulta. Vai deteriorando ao longo do caso — quando o candidato demorar, aumentar a sonolência.'
    },
    instC: {
      diagnosis: 'Hematoma extradural temporal direito com hipertensão intracraniana e sinais de herniação transtentorial iminente (anisocoria, tríade de Cushing parcial).',
      differentials: [
        'Hematoma subdural agudo — entra por TCE + HIC; sai pela imagem biconvexa (extradural) vs côncavo-convexa (subdural)',
        'Contusão cerebral — entra por TCE + deterioração; sai pela hiperdensidade biconvexa típica do extradural',
        'Hemorragia subaracnóidea traumática — entra por TCE; sai pela imagem biconvexa focal e desvio de linha média'
      ],
      context: 'O hematoma extradural é clássico em jovens após TCE temporal (fratura do temporal com rotura da artéria meníngea média). O "intervalo lúcido" (perda de consciência → recuperação → deterioração) é patognomônico. Urgência neurocirúrgica absoluta.',
      justify: 'TCE com intervalo lúcido, deterioração progressiva do Glasgow, anisocoria, tríade de Cushing parcial (HAS + bradicardia), papiledema bilateral, TC com hematoma extradural biconvexo com desvio de 7 mm.',
      expectedAnamnesis: 'Mecanismo do trauma | Intervalo lúcido | Perda de consciência | Evolução do Glasgow | Vômitos | Anticoagulantes | Comorbidades',
      expectedPhysical: 'Glasgow seriado | Pupilas (anisocoria = sinal de herniação) | Fundo de olho (papiledema) | PA e FC (tríade de Cushing) | Déficit motor focal | Sinais de fratura de base',
      expectedExams: [
        { exam: 'TC crânio sem contraste urgente', justify: 'Diagnóstico e planejamento cirúrgico', expected: 'Hematoma extradural biconvexo, desvio 7mm — cirurgia imediata' },
        { exam: 'Gasometria arterial', justify: 'Guiar hiperventilação emergencial se indicado', expected: 'PaCO2 atual para ajuste' },
        { exam: 'Coagulograma', justify: 'Avaliar antes de cirurgia', expected: 'Normal' }
      ],
      expectedConduct: 'Emergencial: Cabeceira 30°; IOT se Glasgow ≤ 8; Hiperventilação controlada (PCO2 35–40 mmHg como ponte) se herniação iminente; Manitol 1 g/kg IV ou solução salina hipertônica 3% | Cirúrgico: Craniotomia de urgência para drenagem do hematoma (indicação: hematoma > 30 mL, desvio > 5 mm, Glasgow deteriorando) | Neurocirurgia: acionar imediatamente',
      expectedCommunication: 'Comunicar achados à neurocirurgia imediatamente | Informar família sobre gravidade e necessidade de cirurgia urgente | Explicar risco de herniação sem tratamento',
      criticalErrors: [
        'Não reconhecer anisocoria como sinal de herniação transtentorial iminente',
        'Não acionar neurocirurgia imediatamente após TC',
        'Realizar punção lombar em paciente com sinais de HIC (risco de herniação)',
        'Não manter cabeceira a 30°',
        'Aguardar mais exames antes de acionar cirurgia urgente'
      ]
    },
    instD: {
      title: 'Hipertensão Intracraniana — Material de Estudo',
      sections: [
        {
          h: 'Fisiopatologia e Tríade de Cushing',
          items: [
            { item: 'Doutrina de Monro-Kellie: volume intracraniano fixo (cérebro + LCR + sangue). Aumento de qualquer componente eleva a PIC.', score: 1, ref: 'Monro-Kellie doctrine' },
            { item: 'Tríade de Cushing: HAS + bradicardia + irregularidade respiratória — sinal de herniação iminente.', score: 2, ref: 'Diretrizes ATLS 10ª ed.' },
            { item: 'Normal: PIC < 15 mmHg. Tratamento agressivo: PIC > 20–22 mmHg por > 5 min.', score: 1, ref: 'Carney et al. Neurosurgery 2017' }
          ]
        },
        {
          h: 'Hematoma Extradural',
          items: [
            { item: 'Imagem biconvexa hiperdensa — clássico. Rotura da artéria meníngea média (fratura temporal).', score: 2, ref: 'ATLS 10ª ed.' },
            { item: 'Intervalo lúcido: perda de consciência imediata → recuperação transitória → deterioração progressiva (patognomônico).', score: 2, ref: 'Bullock et al. Neurosurgery 2006' },
            { item: 'Cirurgia imediata se: hematoma > 30 mL, espessura > 15 mm, desvio > 5 mm, ou deterioração do Glasgow.', score: 2, ref: 'Bullock et al. Neurosurgery 2006' }
          ]
        },
        {
          h: 'Medidas de Controle da PIC',
          items: [
            { item: 'Cabeceira 30° (reduz PIC sem comprometer perfusão cerebral).', score: 1, ref: 'Carney et al. 2017' },
            { item: 'Osmoterapia: Manitol 0,25–1 g/kg IV (efeito em 15 min, dura 90 min) ou Solução salina hipertônica 3%.', score: 2, ref: 'Diretrizes BTF 2016' },
            { item: 'Hiperventilação (PCO2 35 mmHg): medida de ponte — vasoconstrição cerebral temporária. Não manter > 30 min.', score: 1, ref: 'Diretrizes BTF 2016' }
          ]
        }
      ]
    }
  },

  // CASO 9 — TROMBOSE VENOSA CEREBRAL
  {
    id: 9,
    title: 'Cefaleia progressiva há 5 dias em jovem com trombofilia',
    sub: 'PS — Pronto-Socorro',
    tema: 'Emergencias Neurologicas',
    topic: 'Trombose Venosa Cerebral',
    level: 'moderado',
    cardAccent: '#FF7043',
    instA: {
      scenario: 'PS de hospital universitário, 11h. Jovem encaminhada pela UPA com cefaleia refratária.',
      patient: 'Juliana Mendes, 28 anos, feminina, estudante, em uso de anticoncepcional oral.',
      complaint: 'Cefaleia progressiva de forte intensidade há 5 dias, pior ao deitar, com déficit visual e convulsão focal em MSD há 6 horas.',
      tasks: [
        'Realize anamnese e exame neurológico completo.',
        'Solicite imagens adequadas para o diagnóstico.',
        'Inicie anticoagulação e trate complicações.',
        'Investigue a causa predisponente.'
      ]
    },
    instB: {
      vitals: { PA: '138/88 mmHg', FC: '92 bpm', FR: '18 irpm', Tax: '37,0 °C', SpO2: '98%', Glasgow: '14 (O4V4M6)' },
      physicalGeneral: 'Regular estado geral, consciente, orientada, com cefaleia intensa (EVA 8/10), fotofobia leve.',
      physicalSeg: 'NEUROLÓGICO: paresia discreta em MSD (4/5), sem afasia, reflexo cutâneo-plantar indiferente à D. Fundo de olho: papiledema bilateral. Kernig e Brudzinski negativos. | CARDIOVASCULAR: sem sopros, ritmo regular.',
      labs: [
        { test: 'RM crânio + venografia (AngioRM venosa)', val: 'Ausência de fluxo no seio sagital superior e seio transverso D — trombose venosa cerebral extensa', ref: '', alt: true },
        { test: 'TC crânio s/ contraste', val: 'Hiperdensidade no seio sagital superior (sinal da corda) + área de infarto hemorrágico parietal D', ref: '', alt: true },
        { test: 'D-dímero', val: '3.840 ng/mL', ref: '< 500 ng/mL', alt: true },
        { test: 'Coagulograma', val: 'Normal', ref: '', alt: false },
        { test: 'Mutação fator V Leiden', val: 'Heterozigota', ref: 'Ausente', alt: true }
      ],
      image: 'TC crânio: hiperdensidade linear no seio sagital superior (sinal da corda), infarto hemorrágico parietal D. RM/venografia: ausência de fluxo no seio sagital superior e seio transverso D.',
      note: 'RM venosa é o exame de escolha — entregar após solicitação. TC pode mostrar sinal da corda. Fator V Leiden: revelar apenas se candidato solicitar trombofilia.',
      patientProfile: 'Estudante, 28 anos, ACO oral há 2 anos (etinilestradiol + drospirenona). Fumante (5 cigarros/dia). Trombofilia (fator V Leiden heterozigoto — diagnóstico familiar). Sem antecedentes de AVCs.',
      script: [
        { trigger: 'Queixa principal', speech: 'Doutora, essa dor de cabeça tá me destruindo há 5 dias. Tomei tudo quanto é remédio e não passa. Hoje de manhã tive uma espécie de espasmo no braço direito.' },
        { trigger: 'Sobre a dor', speech: 'Piora quando deito. É uma pressão na cabeça toda. Tô com dificuldade pra enxergar, fica borrado às vezes.' },
        { trigger: 'Sobre anticoncepcional', speech: 'Tomo pílula há 2 anos. Minha ginecologista sabe.' },
        { trigger: 'Sobre trombofilia', speech: 'Meu pai tem trombofilia, fator V Leiden ele disse. Nunca me examinaram pra isso.' },
        { trigger: 'Sobre tabagismo', speech: 'Fumo umas 5 a 6 por dia, tô tentando parar.' },
        { trigger: 'Pergunta ativa', speech: 'Pode ser coisa grave? Pode ser trombose?' }
      ],
      hiddenInfo: 'Trombofilia familiar (Fator V Leiden) — revela se candidato perguntar sobre histórico familiar de trombose | Tabagismo — revela se candidato perguntar | ACO há 2 anos sem rastreio de trombofilia — revela se candidato perguntar sobre ACO',
      actorBehavior: 'Ansiosa e com dor intensa. Fotofobia — resiste à luz. Relata claramente a história se perguntada diretamente.'
    },
    instC: {
      diagnosis: 'Trombose venosa cerebral (seio sagital superior e seio transverso D) em paciente com trombofilia (Fator V Leiden) e ACO, com infarto hemorrágico cortical e convulsão focal.',
      differentials: [
        'AVC isquêmico arterial — entra pelo déficit focal; sai pela TC com hiperdensidade venosa, papiledema e origem multifocal do infarto',
        'Meningite bacteriana — entra por cefaleia + déficit; sai pela ausência de síndrome meníngea franca e pela venografia diagnóstica',
        'Hemorragia subaracnóidea — entra por cefaleia intensa; sai pela ausência de thunderclap e venografia com trombose',
        'Tumor cerebral — entra por HIC progressiva; sai pelo infarto hemorrágico agudo e venografia positiva'
      ],
      context: 'A TVC é rara (3–4/milhão/ano) mas com prognóstico favorável se diagnosticada e tratada. Acomete principalmente mulheres jovens em uso de ACO, gestantes e puérperas, portadoras de trombofilias. Causa cefaleia progressiva (principal sintoma) + HIC + déficit focal + crises epilépticas.',
      justify: 'Jovem do sexo feminino, ACO + tabagismo + fator V Leiden (tríade de risco para TVC), cefaleia progressiva com piora ao deitar, papiledema, déficit focal e crise focal — RM venosa confirmando trombose do SSS.',
      expectedAnamnesis: 'Caráter e tempo da cefaleia | Convulsões | Déficit focal | ACO e tipo | Tabagismo | Histórico familiar de trombose | Gestação/puerpério | Infecção recente',
      expectedPhysical: 'Glasgow | Déficit motor | Fundo de olho (papiledema) | Reflexos | Sinais meníngeos (para diagnóstico diferencial)',
      expectedExams: [
        { exam: 'RM crânio + venografia (AngioRM)', justify: 'Gold standard para diagnóstico de TVC', expected: 'Ausência de fluxo no SSS e seio transverso D' },
        { exam: 'TC crânio sem contraste', justify: 'Disponível no PS — sinal da corda e infarto hemorrágico', expected: 'Hiperdensidade no SSS + infarto hemorrágico parietal D' },
        { exam: 'D-dímero', justify: 'VPN alto para TVC se normal', expected: '3.840 ng/mL — elevado' },
        { exam: 'Trombofilia (Fator V, Protrombina, Proteína C e S, ATIII)', justify: 'Investigar causa predisponente', expected: 'Fator V Leiden heterozigoto' }
      ],
      expectedConduct: 'Anticoagulação: Heparina não fracionada IV (alvo TTPA 60–80s) ou Enoxaparina 1 mg/kg SC 12/12h — MESMO na presença de infarto hemorrágico (não é contraindicação em TVC) | Antiepiléptico: Levetiracetam 500 mg IV 12/12h para convulsão focal | Suspender ACO imediatamente | Não fumar | Anticoagulação oral por 3–12 meses (varfarina ou NOAC) após fase aguda',
      expectedCommunication: 'Explicar diagnóstico de trombose venosa no cérebro | Orientar sobre suspensão do ACO | Discutir rastreio de trombofilia | Informar sobre anticoagulação prolongada',
      criticalErrors: [
        'Não anticoagular por medo da hemorragia (a anticoagulação é indicada mesmo com infarto hemorrágico em TVC)',
        'Não pedir venografia (TC isolada pode ser normal em 30% dos casos)',
        'Não suspender o anticoncepcional oral',
        'Não investigar trombofilia subjacente',
        'Realizar punção lombar antes de excluir HIC significativa (papiledema presente)'
      ]
    },
    instD: {
      title: 'Trombose Venosa Cerebral — Material de Estudo',
      sections: [
        {
          h: 'Epidemiologia e Fatores de Risco',
          items: [
            { item: 'TVC acomete predominantemente mulheres jovens (3:1 F:M). Incidência: 3–4/milhão/ano.', score: 1, ref: 'Ferro et al. Stroke 2004' },
            { item: 'Principais fatores: ACO (OR 13–22), gestação/puerpério, trombofilias, infecção, tumores, desidratação.', score: 2, ref: 'ISCVT Study 2004' }
          ]
        },
        {
          h: 'Diagnóstico',
          items: [
            { item: 'Cefaleia progressiva é o sintoma mais frequente (90% dos casos). Piora ao deitar (HIC posicional).', score: 2, ref: 'Ferro et al. 2004' },
            { item: 'Gold standard: RM + venografia (AngioRM ou AngioTC venosa).', score: 2, ref: 'EFNS Guidelines 2010' },
            { item: 'Sinal da corda na TC sem contraste: hiperdensidade linear no seio dural. Presente em 20–30% dos casos.', score: 1, ref: 'Leach et al. Neuroradiology 2006' },
            { item: 'D-dímero normal tem alto VPN para TVC (exceto formas crônicas).', score: 1, ref: 'Kosior et al. 2011' }
          ]
        },
        {
          h: 'Tratamento',
          items: [
            { item: 'Anticoagulação plena é o tratamento de escolha — INCLUSIVE na presença de infarto hemorrágico (a hemorragia na TVC é venosa, não arterial).', score: 2, ref: 'Einhäupl et al. NEJM 2002' },
            { item: 'Heparina não fracionada IV ou enoxaparina SC na fase aguda; seguida de varfarina ou NOAC por 3–12 meses.', score: 2, ref: 'EFNS Guidelines 2010' },
            { item: 'Suspender ACO imediatamente. Investigar e tratar causa subjacente.', score: 1, ref: 'Diretrizes SBN 2022' }
          ]
        }
      ]
    }
  },

];

export default emergNeuro;
