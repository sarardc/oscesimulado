const pneumoGastroStations = [
  // ─────────────────────────────────────────────────────────────────────────
  // CASO 1 — ASMA
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 1,
    title: 'Falta de ar e chiado no peito há 2 dias',
    sub: 'UBS — Atenção Primária',
    tema: 'Pneumologia',
    topic: 'Asma',
    level: 'moderado',
    cardAccent: '#5B9BD5',
    instA: {
      scenario: 'Atenção Primária — UBS. Consultório, turno matutino.',
      patient: 'M.A.S., 28 anos, feminino, professora de ensino fundamental, asmática desde a infância.',
      complaint: 'Chiado no peito e falta de ar há 2 dias, piorando hoje de manhã.',
      tasks: [
        'Realize a anamnese dirigida ao caso.',
        'Realize o exame físico pertinente.',
        'Formule a hipótese diagnóstica e classifique a gravidade da crise.',
        'Solicite os exames complementares adequados.',
        'Proponha a conduta terapêutica imediata e o plano de manutenção.',
        'Oriente a paciente sobre o uso correto dos dispositivos inalatórios e sinais de alarme.'
      ]
    },
    instB: {
      vitals: {
        PA: '118/76 mmHg',
        FC: '102 bpm',
        FR: '24 irpm',
        Tax: '36,8 °C',
        Peso: '62 kg',
        Altura: '1,65 m',
        IMC: '22,8 kg/m²'
      },
      physicalGeneral: 'Regular estado geral, consciente, orientada, ansiosa, em uso de musculatura acessória durante respiração, fala em frases curtas.',
      physicalSeg: 'RESPIRATÓRIO: expansibilidade torácica reduzida bilateralmente; percussão com hipersonoridade difusa; ausculta com sibilos expiratórios difusos bilaterais, tempo expiratório prolongado, MV reduzido | CARDIOVASCULAR: bulhas rítmicas, normofonéticas, sem sopros; FC 102 bpm | ABDOME: sem alterações | MMII: sem edema',
      labs: [
        { test: 'SatO2 (oximetria de pulso)', val: '91%', ref: '≥ 95%', alt: true },
        { test: 'Peak Flow (fluxo expiratório)', val: '185 L/min', ref: 'Previsto para sexo/idade/altura: ~420 L/min', alt: true }
      ],
      image: null,
      note: 'Entregar sinais vitais e oximetria ao início. Entregar resultado do peak flow somente se o candidato solicitar ou realizar o teste. Não há exames laboratoriais pré-disponíveis — exames de sangue não estão indicados na crise leve-moderada e devem ser pontuados negativamente se solicitados de rotina.',
      patientProfile: 'M.A.S., 28 anos, feminino, professora de ensino fundamental, casada.',
      script: [
        { trigger: 'Queixa principal', speech: 'Doutora, estou com um chiado muito forte no peito desde ontem e hoje de manhã piorou muito. Tô com bastante falta de ar.' },
        { trigger: 'Sobre início e evolução', speech: 'Começou dois dias atrás, à noite. Acho que foi por causa da poeira — limpei o armário em casa. Ontem tava ruim, mas hoje acordei pior ainda.' },
        { trigger: 'Sobre fatores desencadeantes', speech: 'Sempre que tem poeira, cheiro forte ou quando fico resfriada isso acontece comigo. Dessa vez foi a poeira mesmo.' },
        { trigger: 'Sobre medicamentos e uso do bombinha', speech: 'Tenho a bombinha azul — salbutamol — mas usei três vezes ontem e hoje de manhã já usei de novo e não tá passando direito.' },
        { trigger: 'Sobre medicamentos de manutenção', speech: 'Tenho um spray marrom que o médico me passou, mas fui ficando preguiçosa e parei de usar há uns dois meses.' },
        { trigger: 'Sobre internações anteriores', speech: 'Já fui pro pronto-socorro umas três vezes por causa disso, mas nunca fiquei internada.' },
        { trigger: 'Sobre tabagismo', speech: 'Nunca fumei, não.' },
        { trigger: 'Pergunta ativa — diagnóstico', speech: 'O que eu tenho, doutora? É a asma mesmo ou tá tendo alguma coisa mais grave?' },
        { trigger: 'Pergunta ativa — gravidade', speech: 'Isso tá grave? Preciso ir pro hospital?' }
      ],
      hiddenInfo: 'Alergia ao AAS e anti-inflamatórios não esteroidais (AINE) — só revela se o candidato perguntar especificamente sobre alergias a medicamentos | Gravidez: última menstruação há 5 semanas, candidata a gestação — só revela se perguntado diretamente.',
      actorBehavior: 'Paciente ansiosa, com voz entrecortada pela dispneia. Fala em frases curtas. Colaborativa mas visivelmente desconfortável. Responde ao que for perguntado. Acalma-se levemente se o candidato demonstrar segurança e empatia.'
    },
    instC: {
      diagnosis: 'Crise de asma de intensidade moderada em paciente com asma persistente moderada não controlada (abandono de corticoide inalatório).',
      differentials: [
        'DPOC exacerbada — afastada pela idade jovem, ausência de tabagismo e histórico de asma desde a infância',
        'Bronquite aguda — afastada pelo padrão obstrutivo crônico recorrente com gatilhos clássicos e uso de broncodilatador de resgate',
        'Insuficiência cardíaca com broncoespasmo — afastada pela ausência de edema, B3, história cardíaca e idade da paciente',
        'Anafilaxia respiratória — menos provável pela ausência de urticária, angioedema ou exposição a alérgeno sistêmico'
      ],
      context: 'Mulher jovem, asmática conhecida, em crise moderada desencadeada por exposição a poeira domiciliar, com abandono de corticoide inalatório de manutenção há 2 meses. SatO2 de 91% e peak flow em 44% do previsto confirmam crise moderada. Histórico de 3 visitas ao PS por crise.',
      justify: 'Critérios de crise moderada presentes: dispneia ao repouso com fala em frases curtas, FR 24 irpm, FC 102 bpm, SatO2 91%, uso de musculatura acessória, sibilos difusos e peak flow 44% do previsto (<60%). Asma persistente moderada confirmada pelo histórico de crises frequentes, uso diário de resgate e abandono do corticoide inalatório.',
      expectedAnamnesis: 'Investigar início, duração e evolução da dispneia | Quantificar uso do broncodilatador de resgate nas últimas 24h | Identificar fator desencadeante (poeira, animal, infecção) | Investigar uso de medicamentos de manutenção e adesão | Perguntar sobre internações e intubações anteriores | Investigar alergias medicamentosas (especialmente AAS/AINE) | Questionar sobre tabagismo, gestação, comorbidades | Avaliar história familiar de atopia/asma',
      expectedPhysical: 'Avaliar estado geral, uso de musculatura acessória, capacidade de falar em frases | Sinais vitais completos com ênfase em FR, FC e SatO2 | Ausculta pulmonar: presença/localização de sibilos, tempo expiratório, MV | Expansibilidade e percussão torácica | Ausculta cardíaca para afastar ICC | Pesquisar sinais de anafilaxia (urticária, angioedema) | Realizar peak flow se disponível',
      expectedExams: [
        { exam: 'Oximetria de pulso', justify: 'Avaliar gravidade da crise e necessidade de suplementação de O2', expected: 'SatO2 91% — indica crise moderada a grave' },
        { exam: 'Peak Flow (fluxo expiratório máximo)', justify: 'Objetivar obstrução e classificar gravidade da crise', expected: '185 L/min — 44% do previsto — crise moderada (<60%)' },
        { exam: 'Radiografia de tórax (se dúvida diagnóstica ou suspeita de pneumotórax)', justify: 'Afastar pneumotórax, pneumonia ou outra causa de dispneia aguda', expected: 'Hiperinsuflação; afastar complicações' }
      ],
      expectedConduct: 'Farmacológica: Broncodilatador de curta ação inalatório — Salbutamol spray 400 mcg (4 jatos de 100 mcg com espaçador) a cada 20 min nas 1ª hora; se resposta parcial ou má resposta, corticoide sistêmico — Prednisona 40 mg VO dose única ou Metilprednisolona 125 mg IV se impossibilidade via oral; O2 suplementar se SatO2 <92% (máscara ou cateter nasal 2–4 L/min); Após estabilização: retomada de corticoide inalatório — Budesonida 400 mcg/dia + formoterol ou beclometasona conforme GINA/PCDT-MS | Não farmacológica: Posição sentada; monitorar SatO2 seriada; reavaliação em 1h | Encaminhamento: SE/UPA se ausência de resposta em 1h, SatO2 persistentemente <92% ou piora clínica | Orientações ao paciente: Retomar corticoide inalatório diariamente; técnica correta do dispositivo inalatório; plano de ação por escrito; evitar desencadeantes; não usar AAS/AINE; sinais de alarme para buscar emergência | Seguimento: retorno em 7 dias para reavaliação e ajuste de manutenção',
      expectedCommunication: 'Apresentar-se pelo nome e função | Explicar o diagnóstico de crise asmática em linguagem acessível ("o tubo que leva o ar para o pulmão está fechando") | Esclarecer que o abandono do spray marrom (corticoide) favoreceu a crise | Demonstrar técnica correta do inalador com espaçador | Perguntar se tem dúvidas | Escuta ativa: validar preocupação da paciente sem gerar pânico',
      criticalErrors: [
        'Prescrever AAS ou AINE sem perguntar sobre alergias (risco de broncoespasmo grave por AAS)',
        'Não reconhecer a crise como moderada e não iniciar broncodilatador na consulta',
        'Alta sem orientação sobre retomada do corticoide inalatório de manutenção',
        'Não avaliar SatO2 ou peak flow para classificar gravidade',
        'Não encaminhar ao PS/UPA em caso de ausência de resposta ao broncodilatador'
      ]
    },
    instD: {
      title: 'CHECKLIST — FALTA DE AR E CHIADO NO PEITO HÁ 2 DIAS (ASMA)',
      sections: [
        {
          h: 'BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE',
          items: [
            { item: 'Apresentou-se pelo nome ao paciente', score: 0.5, ref: 'CFM Res. 2.232/2019; Comunicação Médica AMB' },
            { item: 'Explicou o que iria fazer antes de iniciar o exame físico', score: 0.5, ref: 'CFM Res. 2.232/2019' },
            { item: 'Utilizou linguagem acessível ao explicar diagnóstico e conduta', score: 0.5, ref: 'PCDT Asma MS, 2021' }
          ]
        },
        {
          h: 'BLOCO 2 — ANAMNESE',
          items: [
            { item: 'Investigou início, duração e evolução da dispneia', score: 0.5, ref: 'GINA 2023; PCDT Asma MS, 2021' },
            { item: 'Quantificou o uso do broncodilatador de resgate nas últimas 24h', score: 0.5, ref: 'GINA 2023; PCDT Asma MS, 2021' },
            { item: 'Identificou o fator desencadeante da crise (exposição a poeira)', score: 0.5, ref: 'PCDT Asma MS, 2021' },
            { item: 'Investigou uso e adesão ao corticoide inalatório de manutenção', score: 0.5, ref: 'GINA 2023; PCDT Asma MS, 2021' },
            { item: 'Perguntou sobre internações e visitas ao PS anteriores por asma', score: 0, ref: 'GINA 2023' },
            { item: 'Perguntou sobre alergias medicamentosas (especialmente AAS/AINE)', score: 0.5, ref: 'PCDT Asma MS, 2021; GINA 2023' }
          ]
        },
        {
          h: 'BLOCO 3 — EXAME FÍSICO',
          items: [
            { item: 'Avaliou sinais vitais incluindo frequência respiratória e cardíaca', score: 0.5, ref: 'GINA 2023; PCDT Asma MS, 2021' },
            { item: 'Realizou oximetria de pulso e identificou SatO2 < 95%', score: 0.5, ref: 'GINA 2023; PCDT Asma MS, 2021' },
            { item: 'Realizou ausculta pulmonar e identificou sibilos expiratórios difusos', score: 0.5, ref: 'GINA 2023' },
            { item: 'Avaliou uso de musculatura acessória e capacidade de falar em frases', score: 0.5, ref: 'GINA 2023' }
          ]
        },
        {
          h: 'BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
          items: [
            { item: 'Classificou a crise como moderada (FR elevada, SatO2 91%, sibilos, fala em frases curtas)', score: 0.5, ref: 'GINA 2023; PCDT Asma MS, 2021' },
            { item: 'Solicitou ou realizou peak flow para objetivar a obstrução', score: 0.5, ref: 'GINA 2023; PCDT Asma MS, 2021' }
          ]
        },
        {
          h: 'BLOCO 5 — CONDUTA E ORIENTAÇÃO AO PACIENTE',
          items: [
            { item: 'Prescreveu salbutamol inalatório 400 mcg (4 jatos) imediatamente na consulta', score: 1.0, ref: 'PCDT Asma MS, 2021; GINA 2023' },
            { item: 'Prescreveu corticoide sistêmico (prednisona VO ou equivalente) na crise moderada', score: 0.5, ref: 'PCDT Asma MS, 2021; GINA 2023' },
            { item: 'Orientou retomada do corticoide inalatório de manutenção', score: 0.5, ref: 'PCDT Asma MS, 2021; GINA 2023' },
            { item: 'Orientou sobre sinais de alarme e quando buscar emergência', score: 0.5, ref: 'PCDT Asma MS, 2021' },
            { item: 'Perguntou se a paciente tinha dúvidas ao final da consulta', score: 0.5, ref: 'CFM Res. 2.232/2019' }
          ]
        }
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // CASO 2 — TUBERCULOSE PULMONAR
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 2,
    title: 'Tosse com sangue e perda de peso há 3 semanas',
    sub: 'UBS — Atenção Primária',
    tema: 'Pneumologia',
    topic: 'Tuberculose Pulmonar',
    level: 'moderado',
    cardAccent: '#C0392B',
    instA: {
      scenario: 'Atenção Primária — UBS. Consultório, turno vespertino.',
      patient: 'R.S.O., 34 anos, masculino, auxiliar de construção civil, mora em comunidade com alta densidade populacional.',
      complaint: 'Tosse há mais de 3 semanas, com sangue às vezes, e está emagrecendo.',
      tasks: [
        'Realize a anamnese dirigida ao caso.',
        'Realize o exame físico pertinente.',
        'Solicite os exames complementares adequados para investigação diagnóstica.',
        'Formule a hipótese diagnóstica principal e os diferenciais.',
        'Proponha a conduta terapêutica e as medidas de saúde pública pertinentes.',
        'Oriente o paciente sobre o tratamento, a importância da adesão e o risco de contágio.'
      ]
    },
    instB: {
      vitals: {
        PA: '110/70 mmHg',
        FC: '88 bpm',
        FR: '20 irpm',
        Tax: '37,9 °C',
        Peso: '58 kg',
        Altura: '1,72 m',
        IMC: '19,6 kg/m²'
      },
      physicalGeneral: 'Regular estado geral, emagrecido, corado, hipocorado +/4+, hidratado, febril, sudoreico.',
      physicalSeg: 'RESPIRATÓRIO: expansibilidade reduzida no ápice direito; percussão com macicez apical direita; ausculta com crepitações e sopro anfórico em ápice direito; egofonia presente à direita | CARDIOVASCULAR: bulhas rítmicas, normofonéticas, sem sopros | ABDOME: indolor, sem organomegalias | LINFONODOS: adenomegalia cervical direita, indolor, ~1,5 cm',
      labs: [
        { test: 'Hemograma — Hemoglobina', val: '10,8 g/dL', ref: '13,5–17,5 g/dL', alt: true },
        { test: 'Hemograma — Leucócitos', val: '7.200/mm³', ref: '4.000–11.000/mm³', alt: false },
        { test: 'VHS', val: '78 mm/h', ref: '< 15 mm/h', alt: true },
        { test: 'PCR', val: '32 mg/L', ref: '< 5 mg/L', alt: true },
        { test: 'Baciloscopia de escarro (BAAR) — 1ª amostra', val: '3+ (positivo)', ref: 'Negativo', alt: true },
        { test: 'Baciloscopia de escarro (BAAR) — 2ª amostra', val: '2+ (positivo)', ref: 'Negativo', alt: true },
        { test: 'Glicemia de jejum', val: '88 mg/dL', ref: '70–99 mg/dL', alt: false },
        { test: 'Anti-HIV (ELISA)', val: 'Não reagente', ref: 'Não reagente', alt: false },
        { test: 'TGO', val: '28 U/L', ref: '< 40 U/L', alt: false },
        { test: 'TGP', val: '32 U/L', ref: '< 41 U/L', alt: false }
      ],
      image: 'Radiografia de Tórax PA: Infiltrado heterogêneo com cavitação em lobo superior direito (segmento apicoposterior). Discreta opacidade hiliar direita. Sem derrame pleural. Silhueta cardíaca normal.',
      note: 'Entregar sinais vitais ao início. Entregar radiografia de tórax somente se o candidato solicitar. Entregar resultado das baciloscopias e demais exames laboratoriais somente se solicitados. O candidato deve ser pontuado por solicitar 2 amostras de BAAR.',
      patientProfile: 'R.S.O., 34 anos, masculino, auxiliar de construção civil, solteiro, mora em quarto de pensão com mais 3 pessoas.',
      script: [
        { trigger: 'Queixa principal', speech: 'Doutor, tô com essa tosse feia há mais de três semanas e às vezes sai um pouquinho de sangue. Tô perdendo peso também, tô com o calçado frouxo.' },
        { trigger: 'Sobre a tosse', speech: 'É uma tosse seca às vezes, às vezes sai catarro amarelado. De vez em quando tem um fio de sangue misturado.' },
        { trigger: 'Sobre os sintomas sistêmicos', speech: 'Tô suando muito à noite, molhando o lençol. Tenho cansaço o dia todo e perdi uns seis quilos nesses últimos dois meses.' },
        { trigger: 'Sobre moradia e contato', speech: 'Moro numa pensão, quarto com mais três colegas de trabalho. Um deles tava com tosse parecida, mas saiu faz uns dois meses.' },
        { trigger: 'Sobre HIV e comportamento sexual', speech: 'Não sei se tenho HIV não, nunca fiz o exame. Já tive relação sem camisinha algumas vezes.' },
        { trigger: 'Sobre tabagismo', speech: 'Fumo desde os 16 anos, umas dez cigarrinhas por dia.' },
        { trigger: 'Sobre tratamento anterior de TB', speech: 'Nunca tratei de tuberculose não, doutor.' },
        { trigger: 'Pergunta ativa — diagnóstico', speech: 'O senhor acha que é tuberculose, doutor? Minha vizinha falou que pode ser isso por causa do sangue.' },
        { trigger: 'Pergunta ativa — tratamento', speech: 'Se for tuberculose, quanto tempo de remédio eu vou ter que tomar? É muito tempo?' }
      ],
      hiddenInfo: 'Uso de álcool: bebe cachaça todo final de semana, aproximadamente 300 mL — só revela se perguntado especificamente sobre etilismo | Contato prévio com caso de TB: o colega de quarto que saiu há 2 meses tinha diagnóstico de TB — só revela se o candidato perguntar especificamente sobre contato com pessoas com TB ou tosse crônica',
      actorBehavior: 'Paciente colaborativo, levemente constrangido ao falar sobre HIV e comportamento sexual. Visivelmente magro e cansado. Pode demonstrar preocupação com o tempo de tratamento e com o emprego. Responde com franqueza se abordado com empatia e sem julgamento.'
    },
    instC: {
      diagnosis: 'Tuberculose pulmonar primária com baciloscopia positiva (BAAR 3+/2+), forma cavitária em ápice direito. Paciente bacilífero.',
      differentials: [
        'Pneumonia bacteriana — menos provável pelo tempo de evolução (>3 semanas), perda de peso, sudorese noturna e achado radiológico cavitário apical, padrão típico de TB',
        'Neoplasia pulmonar — diferencial importante em tabagista com cavitação; afastado pela idade jovem, baciloscopia positiva e padrão epidemiológico',
        'Abscesso pulmonar — pode cursar com cavitação e hemoptise; sem odor fétido do escarro, sem foco periodontal ou broncoaspiração documentada; BAAR positivo afasta',
        'Histoplasmose — diferencial em contexto epidemiológico específico (cavernas, excrementos de aves); BAAR positivo define TB'
      ],
      context: 'Homem jovem, trabalhador de construção civil, morando em condição de aglomeração, com síndrome consumptiva (perda de 6 kg), febre vespertina, sudorese noturna, tosse produtiva com hemoptise há 3 semanas e infiltrado cavitário apical direito à radiografia. Baciloscopia fortemente positiva confirma tuberculose pulmonar bacilífera.',
      justify: 'Critérios de TB pulmonar presentes: sintomas clássicos da tríade (tosse >3 semanas, hemoptise, sudorese noturna e emagrecimento), achado radiológico com infiltrado e cavitação em lobo superior direito e baciloscopia de escarro 3+/2+ positiva. Paciente é bacilífero e convive com contatos próximos em ambiente de aglomeração. HIV não reagente afasta imunossupressão mais grave, mas não altera diagnóstico.',
      expectedAnamnesis: 'Investigar início e características da tosse (duração >3 semanas é critério clínico de TB) | Pesquisar hemoptise: frequência e quantidade | Investigar síndrome constitucional: febre, sudorese noturna, perda de peso (quantificar) | Questionar contato com caso de TB (convivente, colega de trabalho) | Perguntar sobre tratamento anterior de TB | Investigar HIV e comportamento de risco | Questionar tabagismo, etilismo | Investigar condições de moradia (aglomeração, ventilação) | Histórico de doenças imunocomprometedoras (DM, uso de corticoide) | Avaliar ocupação e condições socioeconômicas',
      expectedPhysical: 'Avaliar estado geral e nutricional | Sinais vitais com febre vespertina como achado esperado | Inspeção: emagrecimento, palidez | Palpação: linfonodos cervicais, axilares | Expansibilidade torácica (reduzida à direita) | Percussão: macicez apical direita | Ausculta: crepitações e sopro anfórico apical direito, egofonia',
      expectedExams: [
        { exam: 'Baciloscopia de escarro (BAAR) — 2 amostras', justify: 'Exame de primeira linha para diagnóstico de TB pulmonar — obrigatório em adulto com tosse >2 semanas na AB', expected: 'BAAR 3+ e 2+ — confirma TB pulmonar bacilífera' },
        { exam: 'Radiografia de tórax PA', justify: 'Avaliar extensão do comprometimento pulmonar, cavitação e padrão radiológico', expected: 'Infiltrado com cavitação em lobo superior direito — padrão típico de TB' },
        { exam: 'Anti-HIV', justify: 'Coinfecção TB-HIV altera conduta e prognóstico; triagem obrigatória em todos os casos de TB', expected: 'Não reagente neste caso' },
        { exam: 'Hemograma, VHS, PCR', justify: 'Avaliar estado inflamatório e anemia da doença crônica', expected: 'Anemia normocítica, VHS e PCR elevados' },
        { exam: 'TGO e TGP basais', justify: 'Avaliação hepática basal obrigatória antes de iniciar RIPE (rifampicina e isoniazida são hepatotóxicas)', expected: 'Normais neste caso' },
        { exam: 'Glicemia de jejum', justify: 'DM é fator de risco para TB e altera resposta ao tratamento', expected: 'Normal neste caso' },
        { exam: 'Cultura de escarro + Teste de sensibilidade (se disponível)', justify: 'Identificar resistência ao esquema RIPE; indicado especialmente em casos com tratamento anterior', expected: 'Aguardar resultado' }
      ],
      expectedConduct: 'Farmacológica: Esquema RIPE por 6 meses — Fase intensiva (2 meses): Rifampicina 600 mg + Isoniazida 300 mg + Pirazinamida 2 g + Etambutol 1,2 g VO em dose única em jejum; Fase de manutenção (4 meses): Rifampicina 600 mg + Isoniazida 300 mg VO; Doses conforme peso (≥ 50 kg) — conforme PCDT TB MS 2019/2023; Piridoxina (vitamina B6) 50 mg/dia para prevenir neuropatia por isoniazida | Não farmacológica: Notificação compulsória imediata à vigilância epidemiológica; Investigação de contatos (comunicantes domiciliares e de trabalho devem ser rastreados); Isolamento respiratório domiciliar por pelo menos 15 dias após início do tratamento ou até negativação da baciloscopia; Orientar sobre ventilação dos ambientes e higiene respiratória | Encaminhamento: TDO (Tratamento Diretamente Observado) — obrigatório na AB conforme PCDT MS | Orientações ao paciente: Explicar duração do tratamento (6 meses), importância de não interromper; orientar que após 15 dias de RIPE o risco de contágio reduz; alertar sobre efeitos adversos (coloração alaranjada da urina pela rifampicina, náuseas, hepatotoxicidade) e sinais de alarme (icterícia, urina escura, dor abdominal intensa) | Seguimento: Baciloscopia de controle ao 2º e 6º mês de tratamento; consultas mensais; monitorar função hepática em etilistas',
      expectedCommunication: 'Apresentar-se pelo nome e função | Comunicar o diagnóstico com clareza, sem alarmar excessivamente, explicando que TB tem cura com tratamento correto | Esclarecer que os colegas de quarto precisam ser examinados (busca de contatos) | Explicar em linguagem acessível o risco de contágio e as medidas de proteção | Perguntar se tem dúvidas | Demonstrar escuta ativa e acolhimento, evitando julgamentos sobre comportamento sexual ou uso de álcool',
      criticalErrors: [
        'Não solicitar baciloscopia de escarro em paciente com tosse > 3 semanas, perda de peso e hemoptise (omissão diagnóstica grave)',
        'Iniciar esquema RIPE sem solicitar TGO/TGP basais (risco de hepatotoxicidade grave não monitorada)',
        'Não notificar o caso à vigilância epidemiológica (obrigação legal — TB é doença de notificação compulsória)',
        'Não investigar HIV (coinfecção TB-HIV altera conduta e é triagem obrigatória)',
        'Não investigar contatos (comunicantes domiciliares e de trabalho devem ser rastreados — risco de cadeia de transmissão)',
        'Prescrever esquema RIPE sem orientar sobre TDO (Tratamento Diretamente Observado), obrigatório na Atenção Básica'
      ]
    },
    instD: {
      title: 'CHECKLIST — TOSSE COM SANGUE E PERDA DE PESO HÁ 3 SEMANAS (TUBERCULOSE)',
      sections: [
        {
          h: 'BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE',
          items: [
            { item: 'Apresentou-se pelo nome ao paciente', score: 0.5, ref: 'CFM Res. 2.232/2019' },
            { item: 'Comunicou o diagnóstico de forma clara, sem julgamentos, usando linguagem acessível', score: 0.5, ref: 'PCDT Tuberculose MS, 2023' }
          ]
        },
        {
          h: 'BLOCO 2 — ANAMNESE',
          items: [
            { item: 'Investigou duração da tosse (>3 semanas) e presença de hemoptise', score: 0.5, ref: 'PCDT Tuberculose MS, 2023' },
            { item: 'Pesquisou síndrome constitucional: febre vespertina, sudorese noturna, perda de peso', score: 0.5, ref: 'PCDT Tuberculose MS, 2023' },
            { item: 'Perguntou sobre contato com caso de TB (domiciliar ou trabalho)', score: 0.5, ref: 'PCDT Tuberculose MS, 2023' },
            { item: 'Investigou HIV e comportamento de risco', score: 0.3, ref: 'PCDT Tuberculose MS, 2023' },
            { item: 'Questionou tratamento anterior de TB', score: 0.3, ref: 'PCDT Tuberculose MS, 2023' },
            { item: 'Questionou condições de moradia (aglomeração) e etilismo', score: 0.3, ref: 'PCDT Tuberculose MS, 2023' }
          ]
        },
        {
          h: 'BLOCO 3 — EXAME FÍSICO',
          items: [
            { item: 'Avaliou sinais vitais incluindo temperatura', score: 0.5, ref: 'PCDT Tuberculose MS, 2023' },
            { item: 'Realizou ausculta pulmonar e identificou crepitações/sopro anfórico apical direito', score: 0.5, ref: 'PCDT Tuberculose MS, 2023' },
            { item: 'Pesquisou adenomegalia cervical à palpação', score: 0.3, ref: 'PCDT Tuberculose MS, 2023' }
          ]
        },
        {
          h: 'BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
          items: [
            { item: 'Solicitou baciloscopia de escarro (BAAR) em 2 amostras', score: 1.0, ref: 'PCDT Tuberculose MS, 2023' },
            { item: 'Solicitou radiografia de tórax', score: 0.3, ref: 'PCDT Tuberculose MS, 2023' },
            { item: 'Solicitou Anti-HIV', score: 0.5, ref: 'PCDT Tuberculose MS, 2023' },
            { item: 'Solicitou TGO e TGP basais antes de iniciar o tratamento', score: 0.5, ref: 'PCDT Tuberculose MS, 2023' }
          ]
        },
        {
          h: 'BLOCO 5 — CONDUTA E ORIENTAÇÃO AO PACIENTE',
          items: [
            { item: 'Prescreveu esquema RIPE nas doses corretas (Rifampicina + Isoniazida + Pirazinamida + Etambutol)', score: 1.0, ref: 'PCDT Tuberculose MS, 2023' },
            { item: 'Realizou notificação compulsória ou demonstrou conhecimento da obrigatoriedade', score: 1.0, ref: 'PCDT Tuberculose MS, 2023; Lei 6.259/75' },
            { item: 'Orientou sobre busca de contatos (comunicantes domiciliares e de trabalho)', score: 0.5, ref: 'PCDT Tuberculose MS, 2023' },
            { item: 'Orientou sobre TDO e importância da adesão ao tratamento de 6 meses', score: 0.5, ref: 'PCDT Tuberculose MS, 2023' }
          ]
        }
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // CASO 3 — TROMBOEMBOLISMO PULMONAR (TEP)
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 3,
    title: 'Dor no peito e falta de ar súbita após cirurgia',
    sub: 'UPA — Urgência e Emergência',
    tema: 'Pneumologia',
    topic: 'Tromboembolismo Pulmonar',
    level: 'complexo',
    cardAccent: '#8E44AD',
    instA: {
      scenario: 'Urgência e Emergência — UPA. Sala de atendimento, turno noturno.',
      patient: 'C.M.F., 52 anos, feminino, gerente administrativa, foi submetida a artroplastia total de joelho direito há 8 dias.',
      complaint: 'Falta de ar súbita e dor no peito há cerca de 2 horas, começou em casa.',
      tasks: [
        'Realize a anamnese dirigida ao caso.',
        'Realize o exame físico pertinente.',
        'Calcule o escore de Wells para TEP e interprete.',
        'Solicite os exames complementares adequados à hipótese diagnóstica.',
        'Proponha a conduta terapêutica inicial com base na estratificação de risco.',
        'Oriente a paciente sobre o diagnóstico e o plano terapêutico.'
      ]
    },
    instB: {
      vitals: {
        PA: '100/68 mmHg',
        FC: '118 bpm',
        FR: '26 irpm',
        Tax: '37,2 °C',
        Peso: '74 kg',
        Altura: '1,60 m',
        IMC: '28,9 kg/m²'
      },
      physicalGeneral: 'Regular estado geral, ansiosa, diaforética, em leve angústia respiratória, fala em frases completas mas com esforço.',
      physicalSeg: 'RESPIRATÓRIO: murmúrio vesicular reduzido em base direita; sem sibilos; percussão com submacicez em base direita; atrito pleural ausente | CARDIOVASCULAR: bulhas taquicárdicas, segunda bulha hiperfonética, sem sopros | MMII: edema 1+/4+ em membro inferior direito (operado); panturrilha direita empastada e dolorosa à palpação; sinal de Homans positivo à direita | ABDOME: sem alterações',
      labs: [
        { test: 'SatO2 (oximetria de pulso)', val: '89%', ref: '≥ 95%', alt: true },
        { test: 'D-dímero', val: '4.820 ng/mL', ref: '< 500 ng/mL', alt: true },
        { test: 'Troponina I', val: '0,18 ng/mL', ref: '< 0,04 ng/mL', alt: true },
        { test: 'BNP', val: '312 pg/mL', ref: '< 100 pg/mL', alt: true },
        { test: 'Hemograma — Hemoglobina', val: '11,6 g/dL', ref: '12,0–16,0 g/dL', alt: true },
        { test: 'Hemograma — Leucócitos', val: '11.800/mm³', ref: '4.000–11.000/mm³', alt: true },
        { test: 'Gasometria arterial — pH', val: '7,48', ref: '7,35–7,45', alt: true },
        { test: 'Gasometria arterial — PaO2', val: '58 mmHg', ref: '80–100 mmHg', alt: true },
        { test: 'Gasometria arterial — PaCO2', val: '28 mmHg', ref: '35–45 mmHg', alt: true },
        { test: 'Gasometria arterial — HCO3', val: '21 mEq/L', ref: '22–26 mEq/L', alt: false },
        { test: 'Creatinina', val: '0,9 mg/dL', ref: '0,6–1,1 mg/dL', alt: false },
        { test: 'Coagulograma — TP/INR', val: '1,0', ref: '0,8–1,2', alt: false }
      ],
      image: 'ECG: Taquicardia sinusal (FC 118 bpm). Padrão S1Q3T3 (onda S em D1, onda Q em D3, inversão de T em D3). Bloqueio de ramo direito incompleto. Sem alterações isquêmicas primárias.\n\nAngiotomografia de tórax (AngioTC): Falha de enchimento em ramo da artéria pulmonar direita (lobar inferior), compatível com trombo endoluminal. Infarto pulmonar em base direita (sinal do cone). Leve derrame pleural direito. Câmaras cardíacas direitas discretamente aumentadas.',
      note: 'Entregar sinais vitais ao início. Entregar resultado da oximetria de pulso ao início. ECG: entregar se o candidato solicitar. Entregar D-dímero, gasometria e demais labs se solicitados. AngioTC: entregar após o candidato solicitar tomografia de tórax com contraste ou AngioTC (não entregar se solicitar apenas "RX de tórax").',
      patientProfile: 'C.M.F., 52 anos, feminino, gerente administrativa, casada, sem filhos. Submetida à artroplastia total de joelho direito há 8 dias. Histórico de hipertensão arterial leve.',
      script: [
        { trigger: 'Queixa principal', speech: 'Doutora, eu acordei com uma falta de ar muito forte e uma dor aqui no peito. Veio do nada, me assustou muito. Fiz uma cirurgia no joelho semana passada.' },
        { trigger: 'Sobre a dor torácica', speech: 'A dor é do lado direito, piora quando respiro fundo. Não irradia pro braço nem pro pescoço.' },
        { trigger: 'Sobre a dispneia', speech: 'Tô com bastante falta de ar, nunca senti assim. Não consigo respirar direito, sinto que o ar não entra.' },
        { trigger: 'Sobre a cirurgia e o pós-operatório', speech: 'Fiz cirurgia no joelho há oito dias. Fiquei três dias no hospital, depois fui pra casa. Tenho ficado no repouso, quase não levantei.' },
        { trigger: 'Sobre o membro inferior', speech: 'Tenho sentido o joelho inchado, mas achei que era normal pela cirurgia. A perna tá um pouco mais inchada do que ontem e dói quando aperto aqui na batata da perna.' },
        { trigger: 'Sobre anticoagulação profilática', speech: 'O médico me receitou uma injeção pra afinar o sangue, mas eu parei de usar dois dias atrás porque achei que já tava bem.' },
        { trigger: 'Sobre antecedentes', speech: 'Tenho pressão alta, tomo losartana. Nunca tive trombose antes.' },
        { trigger: 'Pergunta ativa — gravidade', speech: 'Isso é grave, doutora? Preciso ficar internada? Tenho medo que seja coisa do coração.' },
        { trigger: 'Pergunta ativa — diagnóstico', speech: 'Pode ser por causa da cirurgia isso? O médico do joelho me avisou sobre alguma complicação mas eu não lembro direito.' }
      ],
      hiddenInfo: 'Abandono da anticoagulação profilática (heparina de baixo peso molecular) 2 dias antes — só revela se o candidato perguntar especificamente sobre medicamentos após a cirurgia ou anticoagulação pós-operatória | Uso de anticoncepcional oral combinado há 3 anos — só revela se o candidato perguntar sobre anticoncepcionais ou hormônios',
      actorBehavior: 'Paciente ansiosa, diaforética, com visível desconforto respiratório. Fala de forma entrecortada mas compreende as perguntas. Preocupada com a gravidade e com o emprego. Responde com detalhes se abordada com empatia. Fica mais ansiosa se o candidato demonstrar incerteza ou demorar para agir.'
    },
    instC: {
      diagnosis: 'Tromboembolismo pulmonar (TEP) agudo de risco intermediário-alto. TVP em membro inferior direito como fonte embólica. Escore de Wells ≥ 6 pontos (alta probabilidade). Comprometimento de VD (troponina e BNP elevados).',
      differentials: [
        'Síndrome coronariana aguda (SCA) — dor torácica e dispneia estão presentes; afastada pelo padrão da dor (pleurítica, sem irradiação), ausência de supradesnivelamento do ST no ECG, contexto pós-operatório e D-dímero muito elevado',
        'Pneumonia — pode cursar com dispneia e dor pleurítica; afastada pela ausência de febre significativa, instalação súbita, contexto pós-operatório ortopédico e AngioTC confirmando TEP',
        'Pneumotórax espontâneo — dispneia súbita com dor pleurítica; afastado pela AngioTC e pelo achado de infarto pulmonar em base direita',
        'Dissecção aórtica — dor torácica intensa de início súbito; afastada pelo padrão clínico, contexto e AngioTC'
      ],
      context: 'Mulher de 52 anos, oito dias após artroplastia de joelho (cirurgia ortopédica de alto risco tromboembólico), com abandono da anticoagulação profilática e uso de ACO, apresentando dispneia súbita, taquicardia, hipoxemia grave (SatO2 89%, PaO2 58 mmHg), TVP em MMID e AngioTC confirmando TEP lobar com infarto pulmonar. Biomarcadores positivos indicam comprometimento do VD (risco intermediário-alto).',
      justify: 'Escore de Wells: FC > 100 (1,5) + cirurgia nas últimas 4 semanas (1,5) + sinais clínicos de TVP (3,0) + diagnóstico alternativo menos provável que TEP (3,0) = 9,0 pontos — alta probabilidade (≥6). D-dímero > 4.000 ng/mL. AngioTC confirma trombo lobar direito. Troponina e BNP elevados indicam disfunção de VD. Gasometria com hipoxemia, hipocapnia e alcalose respiratória são achados clássicos de TEP.',
      expectedAnamnesis: 'Investigar início e características da dispneia (súbita) | Caracterizar a dor torácica (pleurítica, inspiratória, localização) | Perguntar sobre cirurgia recente (tipo, data) | Questionar mobilização/imobilização pós-operatória | Perguntar sobre anticoagulação profilática e adesão | Investigar TVP: dor, edema em MMII | Perguntar sobre uso de anticoncepcionais orais | Investigar antecedentes de TVP/TEP | Histórico de trombofilia ou doença neoplásica | Antecedentes cardiovasculares',
      expectedPhysical: 'Avaliar estado geral e nível de consciência | Sinais vitais completos (taquicardia, hipotensão, taquipneia são sinais de alerta) | Oximetria de pulso | Ausculta pulmonar (redução de MV em base direita) | Ausculta cardíaca (B2 hiperfonética) | Exame de MMII: edema, empastamento, sinal de Homans, temperatura local | Pesquisar sinais de cor pulmonale agudo',
      expectedExams: [
        { exam: 'D-dímero', justify: 'Triagem para TEP de baixa/moderada probabilidade clínica; valor normal exclui TEP', expected: '4.820 ng/mL — muito elevado; não exclui TEP, reforça indicação de angioTC' },
        { exam: 'AngioTC de tórax (Angiotomografia pulmonar)', justify: 'Exame de escolha para confirmar TEP — gold standard diagnóstico', expected: 'Falha de enchimento em ramo lobar inferior direito — confirma TEP' },
        { exam: 'ECG de 12 derivações', justify: 'Afastar SCA, avaliar padrão S1Q3T3, bloqueio de ramo direito como sinais indiretos de sobrecarga de VD', expected: 'Padrão S1Q3T3, taquicardia sinusal, BRD incompleto' },
        { exam: 'Troponina I e BNP', justify: 'Estratificação de risco — elevação indica disfunção ventricular direita (risco intermediário-alto)', expected: 'Troponina 0,18 ng/mL e BNP 312 pg/mL — ambos elevados' },
        { exam: 'Gasometria arterial', justify: 'Avaliar hipoxemia e padrão respiratório', expected: 'Alcalose respiratória com hipoxemia (PaO2 58, PaCO2 28)' },
        { exam: 'Hemograma e coagulograma', justify: 'Avaliação basal antes de anticoagulação plena', expected: 'Leucocitose leve, anemia leve; INR normal' }
      ],
      expectedConduct: 'Farmacológica: O2 suplementar para manter SatO2 ≥ 95% (máscara Venturi ou cateter nasal); Anticoagulação plena imediata — Heparina não fracionada (HNF) IV em bolus (80 UI/kg) + infusão contínua (18 UI/kg/h) ou Enoxaparina 1 mg/kg SC 12/12h (ajustar para função renal); Analgesia para dor pleurítica; Monitorização contínua de PA, FC, SatO2 e nível de consciência; Risco intermediário-alto: ponderar terapia de reperfusão (trombólise sistêmica) se deterioração hemodinâmica — decisão com especialista | Não farmacológica: Internação em leito monitorizado/UTI conforme estabilidade; repouso relativo no leito; cabeceira elevada; acesso venoso calibroso | Encaminhamento: Internação hospitalar imediata; avaliar necessidade de UTI (risco intermediário-alto); comunicar cirurgia ortopédica | Orientações ao paciente: Explicar diagnóstico de coágulo no pulmão e veia da perna em linguagem acessível; esclarecer relação com a cirurgia e a interrupção da anticoagulação; orientar sobre tratamento e monitorização | Seguimento: Após estabilização, transição para anticoagulante oral (rivaroxabana ou varfarina); duração mínima de 3–6 meses conforme fator de risco',
      expectedCommunication: 'Apresentar-se pelo nome | Comunicar a gravidade de forma clara sem gerar pânico — explicar que é tratável | Esclarecer a relação com a cirurgia ortopédica e a importância da anticoagulação não interrompida | Demonstrar empatia com a ansiedade da paciente | Perguntar se tem dúvidas',
      criticalErrors: [
        'Não calcular ou não considerar o escore de Wells para estratificação clínica de TEP',
        'Não iniciar anticoagulação plena imediata após suspeita/confirmação de TEP (risco de morte por extensão do trombo)',
        'Solicitar apenas D-dímero sem AngioTC em paciente com alta probabilidade clínica (Wells ≥ 6) — D-dímero positivo não confirma e não deve substituir a angioTC neste cenário',
        'Não ofertar O2 em paciente com SatO2 89% — hipoxemia grave não tratada',
        'Não investigar TVP em membros inferiores (panturrilha empastada dolorosa é sinal clínico presente)'
      ]
    },
    instD: {
      title: 'CHECKLIST — DOR NO PEITO E FALTA DE AR SÚBITA APÓS CIRURGIA (TEP)',
      sections: [
        {
          h: 'BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE',
          items: [
            { item: 'Apresentou-se pelo nome ao paciente', score: 0.5, ref: 'CFM Res. 2.232/2019' },
            { item: 'Comunicou o diagnóstico e a gravidade de forma clara e empática, sem gerar pânico', score: 0.5, ref: 'CFM Res. 2.232/2019' }
          ]
        },
        {
          h: 'BLOCO 2 — ANAMNESE',
          items: [
            { item: 'Investigou início súbito da dispneia e características da dor torácica (pleurítica)', score: 0.5, ref: 'Diretriz Brasileira de TEP SBC, 2022' },
            { item: 'Perguntou sobre cirurgia recente e imobilização pós-operatória', score: 0.5, ref: 'Diretriz Brasileira de TEP SBC, 2022' },
            { item: 'Investigou uso e adesão à anticoagulação profilática', score: 0.5, ref: 'Diretriz Brasileira de TEP SBC, 2022' },
            { item: 'Perguntou sobre sinais e sintomas de TVP (dor, edema em MMII)', score: 0.5, ref: 'Diretriz Brasileira de TEP SBC, 2022' },
            { item: 'Investigou uso de anticoncepcionais orais', score: 0.5, ref: 'Diretriz Brasileira de TEP SBC, 2022' }
          ]
        },
        {
          h: 'BLOCO 3 — EXAME FÍSICO',
          items: [
            { item: 'Avaliou sinais vitais completos incluindo SatO2 (taquicardia, taquipneia, hipotensão identificadas)', score: 0.5, ref: 'Diretriz Brasileira de TEP SBC, 2022' },
            { item: 'Realizou exame de membros inferiores (edema, empastamento, sinal de Homans)', score: 0.5, ref: 'Diretriz Brasileira de TEP SBC, 2022' },
            { item: 'Realizou ausculta cardíaca e identificou segunda bulha hiperfonética', score: 0.5, ref: 'Diretriz Brasileira de TEP SBC, 2022' }
          ]
        },
        {
          h: 'BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
          items: [
            { item: 'Calculou o escore de Wells para TEP e classificou como alta probabilidade (≥ 6 pontos)', score: 1.0, ref: 'Diretriz Brasileira de TEP SBC, 2022' },
            { item: 'Solicitou AngioTC de tórax como exame confirmatório', score: 1.0, ref: 'Diretriz Brasileira de TEP SBC, 2022' },
            { item: 'Solicitou ECG e troponina para estratificação de risco', score: 0.5, ref: 'Diretriz Brasileira de TEP SBC, 2022' }
          ]
        },
        {
          h: 'BLOCO 5 — CONDUTA E ORIENTAÇÃO AO PACIENTE',
          items: [
            { item: 'Ofertou O2 suplementar imediatamente para corrigir SatO2 < 95%', score: 0.5, ref: 'Diretriz Brasileira de TEP SBC, 2022' },
            { item: 'Iniciou anticoagulação plena imediata (heparina ou enoxaparina em dose terapêutica)', score: 1.0, ref: 'Diretriz Brasileira de TEP SBC, 2022' },
            { item: 'Indicou internação hospitalar e monitorização contínua', score: 0.5, ref: 'Diretriz Brasileira de TEP SBC, 2022' },
            { item: 'Perguntou se a paciente tinha dúvidas ao final do atendimento', score: 0.5, ref: 'CFM Res. 2.232/2019' }
          ]
        }
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // CASO 4 — DIARREIA AGUDA (GASTROENTERITE INFECCIOSA)
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 4,
    title: 'Diarreia e vômitos há 2 dias com fraqueza',
    sub: 'UBS — Atenção Primária',
    tema: 'Gastroenterologia',
    topic: 'Diarreia Aguda Infecciosa',
    level: 'simples',
    cardAccent: '#27AE60',
    instA: {
      scenario: 'Atenção Primária — UBS. Consultório, turno matutino.',
      patient: 'J.P.L., 41 anos, masculino, motorista de caminhão, sem comorbidades conhecidas.',
      complaint: 'Diarreia e vômitos há 2 dias, muita fraqueza.',
      tasks: [
        'Realize a anamnese dirigida ao caso.',
        'Realize o exame físico pertinente com avaliação do estado de hidratação.',
        'Classifique o grau de desidratação do paciente.',
        'Proponha a conduta terapêutica adequada.',
        'Oriente o paciente sobre alimentação, hidratação oral e sinais de alarme.'
      ]
    },
    instB: {
      vitals: {
        PA: '106/72 mmHg',
        FC: '102 bpm',
        FR: '18 irpm',
        Tax: '37,6 °C',
        Peso: '78 kg',
        Altura: '1,78 m',
        IMC: '24,6 kg/m²'
      },
      physicalGeneral: 'Regular estado geral, consciente, orientado, mucosas hipocoradas e levemente ressecadas, olhos discretamente encovados, sem icterícia, turgor reduzido.',
      physicalSeg: 'ABDOME: plano, RHA aumentados; dor difusa de leve intensidade à palpação; sem defesa, sem Blumberg; timpanismo difuso | CARDIOVASCULAR: taquicárdico (FC 102 bpm), bulhas rítmicas, normofonéticas | MMII: sem edema, sem sinais de trombose | GERAL: mucosas ressecadas, turgor cutâneo com retorno em 2 segundos',
      labs: [
        { test: 'Sódio', val: '138 mEq/L', ref: '136–145 mEq/L', alt: false },
        { test: 'Potássio', val: '3,1 mEq/L', ref: '3,5–5,0 mEq/L', alt: true },
        { test: 'Ureia', val: '48 mg/dL', ref: '15–40 mg/dL', alt: true },
        { test: 'Creatinina', val: '1,3 mg/dL', ref: '0,7–1,2 mg/dL', alt: true },
        { test: 'Hemograma — Leucócitos', val: '12.400/mm³', ref: '4.000–11.000/mm³', alt: true },
        { test: 'Hemograma — Hemoglobina', val: '14,2 g/dL', ref: '13,5–17,5 g/dL', alt: false }
      ],
      image: null,
      note: 'Entregar sinais vitais ao início. Exames laboratoriais somente se solicitados. Não há indicação obrigatória de exames em diarreia aguda não complicada sem sinais de alarme; o candidato deve ser pontuado por reconhecer quando solicitar (sinais de desidratação grave, sepse ou dúvida diagnóstica).',
      patientProfile: 'J.P.L., 41 anos, masculino, motorista de caminhão, casado, 2 filhos. Nega comorbidades. Relata ter comido num restaurante de beira de estrada há 3 dias.',
      script: [
        { trigger: 'Queixa principal', speech: 'Doutor, tô com diarreia desde antes de ontem, muitos vômitos também. Tô com muita fraqueza, mal consigo ficar em pé.' },
        { trigger: 'Sobre a diarreia', speech: 'São muitas idas ao banheiro, umas seis sete vezes hoje. É líquida, cor amarronzada, sem sangue. Tem um cheiro muito forte.' },
        { trigger: 'Sobre os vômitos', speech: 'Vomitei bastante ontem, hoje de manhã melhorou um pouco. Tô sem conseguir comer nada, de pensar em comida dá ânsia.' },
        { trigger: 'Sobre o histórico alimentar', speech: 'Parei pra comer num restaurante de beira de estrada há uns três dias atrás. Comi frango e salada. Meu colega que comeu a mesma coisa também tá com diarreia.' },
        { trigger: 'Sobre ingestão de líquidos', speech: 'Tô bebendo água mas tô com dificuldade de segurar. Bebi um soro caseiro hoje de manhã que minha esposa fez, mas não sei se tá certo.' },
        { trigger: 'Sobre febre', speech: 'Tive um pouco de febre ontem, tomei paracetamol. Hoje tá mais baixa.' },
        { trigger: 'Sobre sangue nas fezes', speech: 'Não, sangue não vi não, doutor.' },
        { trigger: 'Pergunta ativa — diagnóstico', speech: 'É intoxicação alimentar, doutor? Pode ser a comida do restaurante?' },
        { trigger: 'Pergunta ativa — internação', speech: 'Preciso ficar internado? Tenho que trabalhar amanhã, tenho uma viagem marcada.' }
      ],
      hiddenInfo: 'Uso de omeprazol 20 mg/dia por iniciativa própria há 6 meses por "azia" — só revela se o candidato perguntar especificamente sobre medicamentos em uso | Filho de 8 anos em casa com diarreia desde ontem — só revela se o candidato perguntar sobre contatos domiciliares com sintomas semelhantes',
      actorBehavior: 'Paciente cooperativo, visivelmente cansado e com desconforto abdominal. Preocupado com o trabalho. Demonstra resistência à internação. Responde com tranquilidade às perguntas clínicas. Fica mais receptivo quando o candidato demonstra segurança na conduta ambulatorial.'
    },
    instC: {
      diagnosis: 'Gastroenterite aguda infecciosa (provável toxiinfecção alimentar) com desidratação moderada (grau 2). Hipocalemia e injúria renal aguda pré-renal leve associadas.',
      differentials: [
        'Diarreia invasiva bacteriana (Salmonella, Shigella, Campylobacter) — diarreia com sangue ausente, origem em surto alimentar e melhora progressiva tornam menos provável; solicitar coprocultura se febre alta ou sangue',
        'Cólera — diarreia aquosa profusa ("água de arroz"), epidemiológica e geograficamente improvável no Brasil atual; afastada pelo contexto',
        'Doença inflamatória intestinal aguda — possível diferencial em diarreia prolongada; afastado pela curta duração, contexto epidemiológico e ausência de sangue',
        'Apendicite aguda — dor abdominal presente; afastado pela diarreia proeminente, vômitos, ausência de sinal de Blumberg e RHA aumentados'
      ],
      context: 'Adulto jovem, sem comorbidades, com quadro agudo (< 48h) de diarreia líquida não sanguinolenta, vômitos e febre baixa após ingestão de refeição suspeita (fonte comum com surto em contato próximo). Exame clínico com sinais de desidratação moderada (mucosas ressecadas, turgor reduzido, taquicardia, olhos encovados). Hipocalemia e elevação discreta de creatinina confirmam o comprometimento do estado de hidratação.',
      justify: 'Diarreia aguda infecciosa com critérios de desidratação moderada (grau 2): taquicardia (FC 102), mucosas secas, turgor reduzido com retorno em 2s, olhos encovados, potássio 3,1 mEq/L por perdas digestivas e creatinina 1,3 mg/dL por hipoperfusão renal pré-renal. Ausência de sangue nas fezes e ausência de sinais de sepse afastam diarreia invasiva grave. Surto alimentar com mais de um caso (colega de trabalho) sugere toxiinfecção.',
      expectedAnamnesis: 'Investigar início, frequência (nº de evacuações/dia) e características das fezes (consistência, presença de sangue ou muco) | Avaliar presença e frequência de vômitos | Quantificar ingestão hídrica e diurese | Perguntar sobre alimentação nas últimas 48–72h (refeições compartilhadas) | Perguntar sobre outros casos na mesma exposição alimentar | Pesquisar febre | Investigar uso de medicamentos (antibióticos recentes, inibidores de bomba) | Questionar viagens recentes | Perguntar sobre contatos domiciliares com sintomas similares | Investigar comorbidades (DM, IRC, imunocompromisso)',
      expectedPhysical: 'Avaliar estado geral | Sinais vitais completos com ênfase na FC (taquicardia = desidratação) | Avaliação completa do estado de hidratação: mucosas, turgor cutâneo, olhos, consciência | Avaliação de PA ortostática (hipotensão ortostática) | Ausculta abdominal (RHA) | Palpação abdominal: dor, resistência, sinal de Blumberg | Avaliação de sinais de sepse (febre alta, calafrios, alteração do estado mental)',
      expectedExams: [
        { exam: 'Eletrólitos (sódio, potássio)', justify: 'Avaliar distúrbios hidroeletrolíticos por perdas digestivas; hipocalemia é comum', expected: 'Hipocalemia (K 3,1 mEq/L)' },
        { exam: 'Ureia e creatinina', justify: 'Avaliar função renal e possível IRA pré-renal por desidratação', expected: 'Creatinina levemente elevada (1,3 mg/dL) — IRA pré-renal' },
        { exam: 'Hemograma', justify: 'Avaliar leucocitose (bacteriana) vs leucopenia (viral) e anemia', expected: 'Leucocitose leve inespecífica' },
        { exam: 'Coprocultura + EPF (se diarreia com sangue, febre alta ou > 7 dias)', justify: 'Identificar agente etiológico em casos com sinais de alarme', expected: 'Não obrigatório neste caso — mas correto se candidato justificar suspeita bacteriana invasiva' }
      ],
      expectedConduct: 'Farmacológica: Reidratação oral com soro de reidratação oral (SRO) — 50–100 mL/kg nas primeiras 4h em desidratação moderada (Plano B do MS); se impossibilidade de ingestão oral, soro fisiológico IV 500–1000 mL em bolus; Ondansetrona 4–8 mg VO ou IV para controle dos vômitos; Reposição de potássio oral (cloreto de potássio) se hipocalemia confirmada; Paracetamol se febre | NÃO prescrever antidiarreicos (loperamida) sem afastar diarreia bacteriana invasiva; NÃO prescrever antibióticos empiricamente em gastroenterite aguda sem indicação (sangue nas fezes, febre alta, imunocomprometido) | Não farmacológica: Dieta de proteção (BRAT: banana, arroz, torrada, maçã/suco de maçã) nas primeiras 24h; evitar laticínios e alimentos gordurosos; manter hidratação oral | Encaminhamento: Alta ambulatorial se melhora após hidratação oral; encaminhar ao PS se piora ou impossibilidade de hidratação oral | Orientações ao paciente: Explicar técnica do SRO; sinais de alarme (febre alta, sangue nas fezes, piora da fraqueza, não urinar em 8h, consciência alterada); restrições alimentares; higiene das mãos para proteger filhos | Seguimento: Retorno em 24–48h ou imediato se sinais de alarme; acompanhar função renal',
      expectedCommunication: 'Apresentar-se pelo nome | Explicar o diagnóstico de "infecção intestinal por alimento contaminado" em linguagem acessível | Orientar sobre o SRO com demonstração/explicação prática | Esclarecer os sinais de alarme de forma objetiva | Perguntar se tem dúvidas | Demonstrar compreensão pela preocupação com o trabalho, mas explicar a necessidade de repouso e hidratação',
      criticalErrors: [
        'Prescrever antibiótico empiricamente sem indicação (diarreia não invasiva, sem sangue, sem febre alta, imunocompetente) — favorece resistência bacteriana e pode piorar diarreia por toxina',
        'Prescrever loperamida sem afastar diarreia invasiva (sangue, febre) — contraindicado em diarreia bacteriana invasiva pela retenção da toxina',
        'Não reconhecer sinais de desidratação moderada e dispensar o paciente sem hidratação adequada',
        'Não orientar sobre sinais de alarme e retorno ao serviço de saúde',
        'Não avaliar o estado de hidratação sistematicamente (turgor, mucosas, diurese)'
      ]
    },
    instD: {
      title: 'CHECKLIST — DIARREIA E VÔMITOS HÁ 2 DIAS COM FRAQUEZA (DIARREIA AGUDA)',
      sections: [
        {
          h: 'BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE',
          items: [
            { item: 'Apresentou-se pelo nome ao paciente', score: 0.5, ref: 'CFM Res. 2.232/2019' },
            { item: 'Utilizou linguagem acessível ao explicar diagnóstico e orientações', score: 0.5, ref: 'MS, Manejo da Diarreia Aguda, 2024' }
          ]
        },
        {
          h: 'BLOCO 2 — ANAMNESE',
          items: [
            { item: 'Investigou frequência diária das evacuações e características das fezes (consistência, sangue, muco)', score: 1.0, ref: 'MS, Manejo da Diarreia Aguda, 2024' },
            { item: 'Perguntou sobre ingestão de alimentos suspeitos nas últimas 48–72h e outros casos no mesmo grupo', score: 1.0, ref: 'MS, Manejo da Diarreia Aguda, 2024' },
            { item: 'Avaliou ingestão hídrica e diurese (últ. vez que urinou)', score: 0.5, ref: 'MS, Manejo da Diarreia Aguda, 2024' },
            { item: 'Perguntou sobre medicamentos em uso (antibióticos, laxantes, IBP)', score: 0.3, ref: 'MS, Manejo da Diarreia Aguda, 2024' },
            { item: 'Investigou contatos domiciliares com sintomas semelhantes', score: 0.1, ref: 'MS, Manejo da Diarreia Aguda, 2024' }
          ]
        },
        {
          h: 'BLOCO 3 — EXAME FÍSICO',
          items: [
            { item: 'Avaliou sistematicamente o estado de hidratação: mucosas, turgor cutâneo, olhos, consciência', score: 1.0, ref: 'MS, Manejo da Diarreia Aguda, 2024' },
            { item: 'Avaliou sinais vitais incluindo FC (taquicardia como sinal de desidratação)', score: 0.5, ref: 'MS, Manejo da Diarreia Aguda, 2024' },
            { item: 'Realizou palpação abdominal e identificou ausência de sinais de abdome agudo (Blumberg negativo)', score: 0.3, ref: 'MS, Manejo da Diarreia Aguda, 2024' }
          ]
        },
        {
          h: 'BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
          items: [
            { item: 'Classificou corretamente a desidratação como moderada (grau 2 — Plano B)', score: 1.0, ref: 'MS, Manejo da Diarreia Aguda, 2024' },
            { item: 'Solicitou eletrólitos e função renal adequadamente para avaliação de desidratação com taquicardia', score: 0.5, ref: 'MS, Manejo da Diarreia Aguda, 2024' }
          ]
        },
        {
          h: 'BLOCO 5 — CONDUTA E ORIENTAÇÃO AO PACIENTE',
          items: [
            { item: 'Prescreveu SRO (soro de reidratação oral) com volume e técnica corretos (Plano B — 50–100 mL/kg/4h)', score: 1.0, ref: 'MS, Manejo da Diarreia Aguda, 2024' },
            { item: 'Não prescreveu antibiótico sem indicação (diarreia não invasiva, sem sangue, imunocompetente)', score: 0.3, ref: 'MS, Manejo da Diarreia Aguda, 2024' },
            { item: 'Orientou sobre dieta de proteção e alimentos a evitar', score: 0.5, ref: 'MS, Manejo da Diarreia Aguda, 2024' },
            { item: 'Orientou sobre sinais de alarme que indicam retorno imediato', score: 0.5, ref: 'MS, Manejo da Diarreia Aguda, 2024' },
            { item: 'Perguntou se o paciente tinha dúvidas ao final da consulta', score: 0.5, ref: 'CFM Res. 2.232/2019' }
          ]
        }
      ]
    }
  }
];

export default pneumoGastroStations;
