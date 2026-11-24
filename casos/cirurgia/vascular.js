// Casos de Vascular (1)
const vascular = [
  // ─────────────────────────────────────────────────────────────────────────
  // CASO 8 — DAOP (DOENÇA ARTERIAL OBSTRUTIVA PERIFÉRICA)
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 8,
    title: 'Dor na panturrilha ao caminhar que melhora com o repouso',
    sub: 'UBS — Atenção Primária / Vascular',
    tema: 'Vascular',
    topic: 'DAOP',
    level: 'moderado',
    cardAccent: '#C62828',
    instA: {
      scenario: 'Atenção Primária — UBS. Consultório, turno matutino.',
      patient: 'A.R.S., 64 anos, masculino, motorista de caminhão aposentado, tabagista 35 maços-ano, diabético tipo 2 e hipertenso há 12 anos.',
      complaint: 'Dor em queimação na panturrilha direita ao caminhar há 6 meses, que melhora com o repouso após 2 a 3 minutos. Distância percorrida caiu de 500m para menos de 200m.',
      tasks: [
        'Realize a anamnese dirigida ao caso.',
        'Realize o exame físico vascular e geral pertinente.',
        'Calcule o Índice Tornozelo-Braquial (ITB) e interprete o resultado.',
        'Solicite os exames complementares adequados.',
        'Formule a hipótese diagnóstica e os diferenciais.',
        'Proponha a conduta terapêutica e oriente o paciente.'
      ]
    },
    instB: {
      vitals: {
        PA: '148/90 mmHg (braço direito) / 146/88 mmHg (braço esquerdo)',
        FC: '80 bpm',
        FR: '16 irpm',
        Tax: '36,5 °C',
        Peso: '84 kg',
        Altura: '1,72 m',
        IMC: '28,4 kg/m²'
      },
      physicalGeneral: 'Bom estado geral, consciente, orientado. Tabagista com leve dispneia aos grandes esforços. Sem edema de membros inferiores.',
      physicalSeg: 'MMII — DIREITO: pele fria distalmente, palidez ao elevar o membro, eritrose dependente ao abaixar (sinal de Buerger positivo); pelos escassos em perna e pé; unhas espessadas; pulso femoral presente; pulso poplíteo reduzido; pulso tibial posterior AUSENTE; pulso pedioscópico AUSENTE; TEC > 4s no pé direito; sem úlceras ou necrose | MMII — ESQUERDO: pulso femoral presente; pulso poplíteo presente; pulso tibial posterior fraco; pulso pedioscópico fraco; TEC 2,5s; pele com tricose preservada | MMSS: PA direita 148/90; PA esquerda 146/88 (sem diferença significativa entre os lados)',
      labs: [
        { test: 'ITB (Índice Tornozelo-Braquial) — membro inferior direito', val: '0,52', ref: '> 0,90 (normal)', alt: true },
        { test: 'ITB — membro inferior esquerdo', val: '0,74', ref: '> 0,90 (normal)', alt: true },
        { test: 'Glicemia de jejum', val: '168 mg/dL', ref: '70–99 mg/dL', alt: true },
        { test: 'HbA1c', val: '9,2%', ref: '< 7,0%', alt: true },
        { test: 'Colesterol total', val: '248 mg/dL', ref: '< 200 mg/dL', alt: true },
        { test: 'LDL', val: '168 mg/dL', ref: '< 100 mg/dL (alto risco cardiovascular)', alt: true },
        { test: 'HDL', val: '32 mg/dL', ref: '> 40 mg/dL (homens)', alt: true },
        { test: 'Triglicérides', val: '310 mg/dL', ref: '< 150 mg/dL', alt: true },
        { test: 'Creatinina', val: '1,1 mg/dL', ref: '0,7–1,2 mg/dL', alt: false },
        { test: 'ECG', val: 'Ritmo sinusal, FC 80 bpm. Sem alterações agudas de ST/T. Sem bloqueios. Sem sinais de hipertrofia.', ref: 'Normal', alt: false }
      ],
      image: 'Eco-Doppler arterial de MMII (resultado — entregar se solicitado): Oclusão total de artéria femoral superficial direita com circulação colateral parcial. Estenose de 60–70% em artéria poplítea esquerda. Sem aneurismas identificados.',
      note: 'Entregar sinais vitais ao início. Entregar ITB somente se o candidato solicitar ou realizar o cálculo (medir PA no tornozelo e no braço com Doppler portátil). Entregar labs se solicitados. Entregar eco-Doppler se solicitado. O candidato deve ser pontuado por calcular ou interpretar o ITB — é o exame padrão-ouro não invasivo para DAOP.',
      patientProfile: 'A.R.S., 64 anos, motorista aposentado, casado. Tabagista ativo 35 maços-ano. DM tipo 2 em uso de metformina 1g 2x/dia (glicemia mal controlada). HAS em uso de enalapril 10mg/dia + amlodipina 5mg/dia. Dislipidemia não tratada. Nega claudicação em repouso ou dor noturna (sem isquemia crítica até o momento).',
      script: [
        { trigger: 'Queixa principal', speech: 'Doutor, tenho uma dor que parece queimação na batata da perna direita. Começa quando eu ando uns 150, 200 metros. Aí eu paro, descanso uns minutinhos e passa. Depois começo de novo e volta a doer.' },
        { trigger: 'Sobre a evolução', speech: 'Faz uns 6 meses assim. Antes eu andava mais, acho que uns 500 metros tranquilo. Agora não consigo mais. Mudei a rota da caminhada por causa disso.' },
        { trigger: 'Sobre dor em repouso ou à noite', speech: 'Não, em repouso não dói não. À noite fico bem. Só quando ando.' },
        { trigger: 'Sobre tabagismo', speech: 'Fumo desde os 18 anos, uns dois maços por dia. Sei que é ruim, já tentei parar algumas vezes mas não consigo.' },
        { trigger: 'Sobre diabetes e pressão', speech: 'Tomo metformina e remédio pra pressão. Mas o açúcar nunca fica normal, sempre tá alto quando faço exame.' },
        { trigger: 'Sobre colesterol', speech: 'Nunca tomei remédio pra colesterol. O médico anterior disse que tava alto mas não receitou nada.' },
        { trigger: 'Pergunta ativa', speech: 'É do coração essa dor, doutor? Meu cunhado amputou a perna por isso. Vou ter que amputar?' },
        { trigger: 'Pergunta ativa', speech: 'Tem que operar? Ou tem remédio pra abrir a artéria?' }
      ],
      hiddenInfo: 'Cunhado com amputação de membro inferior por DAOP avançada — eleva o medo do paciente — só revela se o candidato perguntar sobre história familiar ou experiências com a doença | Tentativas prévias de parar de fumar sem sucesso (tentou 3 vezes) — só revela se perguntado especificamente sobre tentativas de cessação tabágica | Dor noturna ausente — isquemia crítica não estabelecida — revela se diretamente questionado',
      actorBehavior: 'Paciente cooperativo, levemente ansioso, com medo de amputação por experiência do cunhado. Demonstra dificuldade em mudar hábitos (tabagismo, dieta). Receptivo à explicação quando o médico é claro sobre os riscos e o que pode ser feito. Fica mais engajado quando o candidato propõe metas realistas.'
    },
    instC: {
      diagnosis: 'DAOP (Doença Arterial Obstrutiva Periférica) — claudicação intermitente em membro inferior direito, Fontaine II / Rutherford 2-3. ITB 0,52 direito (isquemia moderada-grave), 0,74 esquerdo (leve). Fatores de risco múltiplos: tabagismo ativo, DM descontrolado, HAS, dislipidemia não tratada.',
      differentials: [
        'Claudicação neurogênica (estenose do canal medular) — dor em membros inferiores ao caminhar; porém: piora ao ficar em pé, melhora ao sentar/flexionar o tronco (não ao parar); pulsos preservados; ITB normal; mais comum em idosos com espondilose',
        'Síndrome compartimental crônica do esforço — jovens atletas; dor que surge com exercício e cede em repouso; compartimento bem delimitado; ITB normal',
        'Trombose venosa profunda (TVP) — edema unilateral com dor, calor, eritema; sem relação com esforço; sem alteração de pulsos',
        'Neuropatia periférica diabética — queimação/parestesia; não tem relação direta com esforço físico; pulsos presentes; ITB normal ou > 1,3 (calcificação arterial)'
      ],
      context: 'Homem de 64 anos com múltiplos fatores de risco aterosclerótico (tabagismo 35 maços-ano, DM2 descontrolado, HAS, dislipidemia). Claudicação intermitente clássica em panturrilha direita (isquemia muscular por demanda): dor em queimação ao caminhar, com distância limitante progressiva (caiu de 500 para 150-200m), melhora em 2-3 min com repouso. Exame físico com ausência de pulsos tibiais e pedioscópico à direita, pele fria, sinal de Buerger positivo. ITB 0,52 confirmando isquemia moderada-grave.',
      justify: 'DAOP é a manifestação periférica da doença aterosclerótica sistêmica. O ITB é o padrão ouro não invasivo: normal > 0,90; borderline 0,91-1,0; leve 0,70-0,89; moderado 0,50-0,69; grave < 0,50. ITB 0,52 = isquemia moderada à grave. Classificação de Fontaine II = claudicação intermitente sem isquemia crítica (sem dor em repouso ou lesão trófica). O risco de amputação em Fontaine II é baixo (<2%/ano), mas o risco cardiovascular (IAM, AVC) é alto (mortalidade 5 anos ~25%).',
      expectedAnamnesis: 'Caracterizar a claudicação: localização, distância percorrida, tempo de repouso para alívio, evolução | Pesquisar dor em repouso ou noturna (isquemia crítica — Fontaine III/IV) | Investigar úlceras ou gangrena | Pesquisar fatores de risco cardiovascular: tabagismo (maços-ano), DM (controle), HAS, dislipidemia, história familiar | Perguntar sobre eventos cardiovasculares prévios (IAM, AVC, revascularização) | Investigar adesão aos medicamentos | Perguntar sobre tentativas de cessação tabágica',
      expectedPhysical: 'Palpar pulsos periféricos bilateralmente (femoral, poplíteo, tibial posterior, pedioscópico — ausência = obstrução) | Avaliar temperatura e coloração dos pés (palidez, cianose) | Pesquisar sinal de Buerger (palidez ao elevar + eritrose dependente) | Avaliar TEC (tempo de enchimento capilar) | Auscultar femoral e poplítea (sopro = estenose) | Avaliar a pele e os fâneros (pelos, unhas) | Medir PA em ambos os braços | Auscultar o coração e carótidas | Calcular ou solicitar ITB',
      expectedExams: [
        { exam: 'ITB (Índice Tornozelo-Braquial)', justify: 'Padrão ouro não invasivo para diagnóstico de DAOP — medir PA sistólica no tornozelo (tibial posterior ou pedioscópica) e dividir pela maior PA sistólica do braço; < 0,90 confirma DAOP', expected: 'ITB 0,52 direito, 0,74 esquerdo — isquemia moderada a grave' },
        { exam: 'Eco-Doppler arterial de MMII', justify: 'Localiza e quantifica as estenoses — fundamental para planejar a revascularização', expected: 'Oclusão de femoral superficial direita, estenose poplítea esquerda 60-70%' },
        { exam: 'HbA1c, glicemia, lipidograma completo', justify: 'Avaliação e controle dos fatores de risco modificáveis — essenciais para reduzir progressão', expected: 'DM e dislipidemia descontrolados — requerem otimização' },
        { exam: 'ECG', justify: 'Rastreio de doença coronariana associada — DAP e DAC frequentemente coexistem', expected: 'Sinusal, sem alterações isquêmicas agudas' }
      ],
      expectedConduct: 'Cessação tabágica: orientação intensiva + encaminhar para programa de cessação (Vareniclina ou TRN pelo SUS) — tabagismo é o principal fator modificável | Controle dos fatores de risco: intensificar tratamento do DM (meta HbA1c < 7%; ajustar medicação — adicionar ISGLT-2 ou GLP1-RA se possível); Estatina de alta intensidade (Atorvastatina 40–80mg/dia — meta LDL < 70 mg/dL em alto risco cardiovascular); otimizar o controle da PA (meta < 130/80 mmHg em paciente com DM e doença cardiovascular) | Antiplaquetário: AAS 100mg/dia ou Clopidogrel 75mg/dia — reduz eventos cardiovasculares maiores (MACE) | Exercício supervisionado: programa de caminhada até a claudicação (30–45 min, 3x/semana) — melhora distância de marcha em 50–150% | Encaminhamento vascular: Cirurgia Vascular para avaliação de revascularização (angioplastia/stent ou bypass) — indicada se claudicação incapacitante refratária ao tratamento clínico | Não farmacológica: cuidados com os pés (evitar ferimentos, calçados adequados — prevenção de úlceras) | Orientação: explicar que o risco de amputação em Fontaine II é baixo se controlados os fatores de risco; o risco maior é infarto e AVC — abordar a doença sistêmica',
      expectedCommunication: 'Apresentar-se pelo nome | Explicar o diagnóstico de DAOP em linguagem acessível ("as artérias das pernas estão estreitadas pela gordura — é a mesma doença que pode dar no coração") | Abordar o tabagismo com empatia, sem julgamento, explicando que é o principal fator a controlar | Tranquilizar sobre o risco de amputação (baixo em Fontaine II com tratamento adequado) | Explicar a importância do controle global dos fatores de risco | Perguntar se tem dúvidas',
      criticalErrors: [
        'Não calcular ou solicitar o ITB — exame fundamental e não invasivo para confirmar e estadiar a DAOP',
        'Não palpar pulsos periféricos bilateralmente — exame físico vascular incompleto',
        'Não abordar a cessação tabágica — tabagismo é o principal fator de risco modificável e acelerador da doença',
        'Não prescrever antiplaquetário (AAS ou clopidogrel) — redução de eventos cardiovasculares maiores é a meta principal em DAOP',
        'Não prescrever estatina de alta intensidade em paciente com DAOP (equivalente de alto risco cardiovascular)'
      ]
    },
    instD: {
      title: 'CHECKLIST — DOR NA PANTURRILHA AO CAMINHAR (DAOP)',
      sections: [
        {
          h: 'BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE',
          items: [
            { item: 'Apresentou-se pelo nome ao paciente', score: 0.5, ref: 'CFM Res. 2.232/2019' },
            { item: 'Abordou o tabagismo sem julgamento e explicou sua relação com a doença', score: 0.5, ref: 'Diretriz SBAngio/SBACV — DAOP, 2022' }
          ]
        },
        {
          h: 'BLOCO 2 — ANAMNESE',
          items: [
            { item: 'Caracterizou a claudicação (distância, tempo de alívio, evolução)', score: 0.5, ref: 'Diretriz SBAngio/SBACV — DAOP, 2022' },
            { item: 'Pesquisou dor em repouso e lesões tróficas (isquemia crítica)', score: 0.5, ref: 'Diretriz SBAngio/SBACV — DAOP, 2022' },
            { item: 'Investigou todos os fatores de risco cardiovascular (tabagismo, DM, HAS, dislipidemia)', score: 0.5, ref: 'Diretriz SBAngio/SBACV — DAOP, 2022' }
          ]
        },
        {
          h: 'BLOCO 3 — EXAME FÍSICO',
          items: [
            { item: 'Palpou pulsos periféricos bilateralmente (femoral, poplíteo, tibial posterior, pedioscópico)', score: 1.0, ref: 'Diretriz SBAngio/SBACV — DAOP, 2022' },
            { item: 'Avaliou coloração, temperatura e perfusão dos pés (TEC, sinal de Buerger)', score: 0.5, ref: 'Diretriz SBAngio/SBACV — DAOP, 2022' }
          ]
        },
        {
          h: 'BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
          items: [
            { item: 'Calculou ou solicitou o ITB e interpretou o resultado (< 0,90 = DAOP)', score: 1.0, ref: 'Diretriz SBAngio/SBACV — DAOP, 2022' },
            { item: 'Solicitou eco-Doppler arterial para estadiamento e planejamento terapêutico', score: 0.5, ref: 'Diretriz SBAngio/SBACV — DAOP, 2022' }
          ]
        },
        {
          h: 'BLOCO 5 — CONDUTA E ORIENTAÇÃO',
          items: [
            { item: 'Prescreveu antiplaquetário (AAS 100mg ou Clopidogrel 75mg)', score: 1.0, ref: 'Diretriz SBAngio/SBACV — DAOP, 2022' },
            { item: 'Prescreveu estatina de alta intensidade (Atorvastatina 40–80mg)', score: 0.5, ref: 'Diretriz SBAngio/SBACV — DAOP, 2022' },
            { item: 'Orientou cessação tabágica e encaminhou para programa de cessação', score: 0.5, ref: 'Diretriz SBAngio/SBACV — DAOP, 2022' },
            { item: 'Encaminhou à Cirurgia Vascular para avaliação de revascularização', score: 0.5, ref: 'Diretriz SBAngio/SBACV — DAOP, 2022' }
          ]
        }
      ]
    }
  },
];

export default vascular;
