// Casos de Medicina Legal (10)
const medicinaLegal = [
  // ─────────────────────────────────────────────────────────────────────────
  // CASO 9 — DECLARAÇÃO DE ÓBITO (MEDICINA LEGAL)
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 9,
    title: 'Preenchimento de declaração de óbito em paciente internado',
    sub: 'Hospital Geral — Enfermaria',
    tema: 'Medicina Legal',
    topic: 'Declaração de Óbito',
    level: 'moderado',
    cardAccent: '#546E7A',
    instA: {
      scenario: 'Enfermaria de Clínica Médica — Hospital Geral. Turno diurno. Você é o médico assistente responsável pelo paciente.',
      patient: 'G.A.M., 74 anos, masculino, internado há 6 dias por pneumonia comunitária grave com sepse. Evoluiu com falência múltipla de órgãos apesar do tratamento intensivo e foi a óbito nesta manhã às 07h12min.',
      complaint: 'Enfermagem informa o óbito do paciente G.A.M. e solicita o preenchimento da Declaração de Óbito (DO). A família está presente e aguarda orientações.',
      tasks: [
        'Confirme o óbito ao exame clínico e registre os achados.',
        'Identifique a causa básica e as causas antecedentes da morte.',
        'Preencha corretamente a Declaração de Óbito (campo I — causa da morte).',
        'Determine se o caso deve ou não ser comunicado ao IML/SVO.',
        'Comunique o óbito à família com empatia e respeito.',
        'Esclareça os trâmites legais e documentais após o óbito.'
      ]
    },
    instB: {
      vitals: {
        PA: 'Indetectável',
        FC: 'Ausente (assistolia confirmada no monitor)',
        FR: 'Ausente (apneia)',
        Tax: '35,2 °C (hipotermia pós-óbito)',
        Peso: '70 kg (internação)',
        Altura: '1,68 m',
        IMC: '24,8 kg/m²'
      },
      physicalGeneral: 'Paciente em posição supina, imóvel, sem resposta a estímulos. Cianose centroperiférica. Livores mortis incipientes na região dorsal.',
      physicalSeg: 'SINAIS DE MORTE CLÍNICA (todos presentes): ausência de respiração espontânea (apneia total, sem movimentos torácicos); ausência de pulso carotídeo e femoral bilateralmente; ausência de bulhas cardíacas na ausculta por 5 minutos; pupilas midriáticas, arreativas, simétricas, em posição intermediária; ausência de reflexo corneal bilateral; livores mortis incipientes em região dorsal (sinal de morte real) | MONITOR: assistolia confirmada por traçado isoplano por mais de 20 minutos sem intervenção | ECG: linha plana — assistolia confirmada',
      labs: [
        { test: 'Prontuário — diagnóstico de internação', val: 'Pneumonia comunitária grave — agente não identificado em cultura (hemoculturas negativas)', ref: 'N/A', alt: false },
        { test: 'Prontuário — evolução', val: 'Evoluiu com insuficiência respiratória aguda grave (SDRA) → necessitou IOT e VM no 2º dia de internação. Insuficiência renal aguda oligúrica instalada no 3º dia. Choque séptico refratário a vasopressores instalado no 4º dia. Óbito no 6º dia de internação (07h12min)', ref: 'N/A', alt: false },
        { test: 'Prontuário — antecedentes', val: 'HAS; DM tipo 2; DPOC leve (ex-tabagista). Sem história de neoplasia. Sem trauma recente. Causa da morte determinada pela equipe assistente — morte natural por doença', ref: 'N/A', alt: false },
        { test: 'Prontuário — assistência médica', val: 'Paciente sob assistência médica contínua nos últimos 7 dias (internação). Acompanhado por equipe de clínica médica e terapia intensiva. Diagnóstico estabelecido. Causa da morte determinável pelo médico assistente', ref: 'N/A', alt: false }
      ],
      image: 'DECLARAÇÃO DE ÓBITO (modelo — para preenchimento pelo candidato): Bloco I — Causa da morte: Ia) ___________ (causa imediata); Ib) ___________ (causa intermediária); Ic) ___________ (causa básica). Bloco II — Outras condições significativas. Bloco V — Tipo de morte (natural/acidente/homicídio/suicídio/ignorado). Bloco VIII — Médico que assina.',
      note: 'Entregar sinais vitais e exame físico ao início. Entregar prontuário completo se o candidato solicitar. O candidato deve: (1) confirmar o óbito clinicamente; (2) determinar a causa; (3) preencher a DO corretamente na sequência Ia→Ib→Ic; (4) decidir se comunicar ao IML (caso natural, sob assistência médica → NÃO é caso para IML/SVO neste cenário); (5) comunicar à família. Avaliar se o candidato erra a sequência (escreve a causa básica em Ia — erro clássico).',
      patientProfile: 'G.A.M., 74 anos, masculino, aposentado, casado. Faleceu sob assistência médica contínua em ambiente hospitalar. Causa da morte determinável pela equipe assistente. Sem indícios de morte violenta. Família presente (cônjuge + filho adulto).',
      script: [
        { trigger: 'Enfermagem — comunicação do óbito', speech: 'Doutor, o Sr. G. foi a óbito às 07h12min. O monitor mostra assistolia confirmada. A família está na sala de espera. A Sra. (esposa) pediu pra falar com o médico.' },
        { trigger: 'Esposa — ao ser chamada', speech: '(Chorosa) Ele morreu mesmo, doutor? Não tem mais nada a fazer?' },
        { trigger: 'Esposa — sobre o diagnóstico', speech: 'Mas ele entrou por causa de uma pneumonia... Como pode ter morrido de pneumonia?' },
        { trigger: 'Filho — sobre a DO', speech: 'Doutor, precisa de atestado de óbito? O que a gente precisa fazer agora para poder fazer o velório?' },
        { trigger: 'Filho — pergunta sobre IML', speech: 'Vai ter que ir para o IML? A gente vai conseguir fazer o velório hoje?' },
        { trigger: 'Esposa — sobre os últimos momentos', speech: 'Ele sofreu no final? Estava sentindo dor?' },
        { trigger: 'Filho — pergunta técnica', speech: 'Esse atestado de óbito, o médico preenche qual parte? A gente pode ver o que o senhor vai escrever?' }
      ],
      hiddenInfo: 'Família não sabia da gravidade máxima do quadro — só revela se o candidato perguntar sobre a comunicação prévia à família | Paciente havia expressado vontade de não ser ressuscitado em caso de PCR irreversível (DNR documentado em prontuário) — só revela se o candidato perguntar sobre diretivas antecipadas ou consultar o prontuário completo | Cônjuge perguntará sobre a possibilidade de "autopsia para saber se era mesmo pneumonia" — só revelar se a cena seguir por esse caminho',
      actorBehavior: 'Esposa em luto agudo, chora, busca conforto. Pode fazer perguntas emocionais ("ele sofreu?"). Filho mais contido, focado nos trâmites práticos (documentos, velório, IML). Ambos precisam de empatia e clareza. O candidato deve equilibrar o suporte emocional com as orientações técnicas sobre a DO e os próximos passos.'
    },
    instC: {
      diagnosis: 'Óbito por causa natural determinada — Preenchimento da Declaração de Óbito:\n• Ia) Choque séptico refratário\n• Ib) Sepse por pneumonia bacteriana comunitária\n• Ic) Pneumonia bacteriana comunitária (causa básica)\nII) Outras condições: HAS, DM tipo 2, DPOC\nTipo de morte: Natural\nNão é caso para IML/SVO: óbito sob assistência médica contínua, causa determinada, sem suspeita de morte violenta ou causa não natural.',
      differentials: [
        'Casos que DEVEM ser comunicados ao SVO (Serviço de Verificação de Óbitos): morte natural sem assistência médica nos últimos 7 dias (causa indeterminada) — o SVO emite a DO; morte natural com assistência mas causa indeterminada mesmo após análise',
        'Casos que DEVEM ser comunicados ao IML (morte violenta ou suspeita): qualquer morte por causa externa (acidente, homicídio, suicídio), morte suspeita de violência mesmo que disfarçada de natural, morte em detenção ou custódia, morte por acidente de trabalho — NESTE CASO: morte natural determinada → NÃO vai ao IML',
        'Sequência incorreta da DO (erro clássico): escrever a causa básica em Ia — o preenchimento correto é Ia = causa imediata (que levou diretamente à morte), Ib = causa antecedente, Ic = causa básica (que desencadeou toda a sequência)'
      ],
      context: 'Óbito hospitalar por causa natural em paciente sob assistência médica contínua. Causa da morte determinável pela equipe assistente. Sequência causal clara: Pneumonia → Sepse → Choque séptico → Óbito. Não há indícios de morte violenta, trauma, intoxicação ou causa externa. Caso de preenchimento de DO pelo médico assistente, sem necessidade de encaminhamento ao IML.',
      justify: 'A DO é o documento legal que registra o óbito e deve ser preenchida pelo médico que atendeu o paciente (médico assistente, se houve assistência nos últimos 7 dias), pelo SVO (se não houve assistência ou causa indeterminada) ou pelo IML (se morte violenta ou suspeita). A sequência do Campo I é: Ia = causa IMEDIATA (última na sequência antes da morte), Ib = causa ANTECEDENTE (intermediária), Ic = causa BÁSICA (que iniciou a cadeia). NUNCA escrever a causa básica em Ia. O médico assistente deve assinar a DO, dispensando o IML. A certidão de óbito é emitida pelo cartório com base na DO.',
      expectedAnamnesis: 'Revisar o prontuário: confirmar dados de identificação, data/hora do óbito, diagnóstico e evolução | Confirmar se houve assistência médica nos últimos 7 dias (determina quem preenche a DO) | Verificar se há suspeita de causa não natural (violência, intoxicação, acidente) | Consultar se há diretivas antecipadas de vontade documentadas | Obter informações sobre comorbidades para preencher o Campo II da DO',
      expectedPhysical: 'Confirmar o óbito ao exame clínico (obrigatório antes de preencher a DO): ausência de pulso central (carotídeo/femoral) bilateralmente | Ausência de respiração espontânea (apneia) | Ausência de bulhas cardíacas por ≥ 1 minuto (na prática, 2-3 minutos) | Pupilas midriáticas fixas bilateralmente | Ausência de reflexo corneal | Confirmar no monitor: assistolia em traçado isoplano | Pesquisar sinais de morte real (livores mortis, rigor mortis incipiente) | Registrar hora e data da constatação do óbito no prontuário',
      expectedExams: [
        { exam: 'Confirmação por ECG (traçado isoplano por > 20 min)', justify: 'Confirmação técnica de assistolia — obrigatória em ambiente hospitalar antes de declarar o óbito formalmente', expected: 'Traçado isoplano — assistolia confirmada' },
        { exam: 'Revisão do prontuário (diagnósticos, evolução, antecedentes)', justify: 'Necessária para preencher corretamente todos os campos da DO e determinar a causa básica', expected: 'Causa da morte determinada: Pneumonia → Sepse → Choque séptico refratário' }
      ],
      expectedConduct: 'Confirmação do óbito: Examinar o paciente e confirmar clinicamente o óbito (ver sinais acima); registrar no prontuário a data, hora e achados do exame que confirmam o óbito | Preenchimento da DO: Ia = Choque séptico refratário; Ib = Sepse / falência de múltiplos órgãos; Ic = Pneumonia bacteriana comunitária; Campo II = HAS, DM tipo 2, DPOC; Tipo de óbito = Natural; Assinar com CRM | Decisão sobre IML/SVO: NÃO encaminhar ao IML — morte natural com assistência médica e causa determinada; NÃO encaminhar ao SVO — assistência médica presente e causa determinada | Comunicação à família: comunicar o óbito em ambiente privado, com empatia; oferecer suporte emocional; responder às perguntas com honestidade | Orientação sobre os trâmites: informar que a DO é emitida pelo médico; a certidão de óbito é obtida no cartório; o velório pode ser realizado assim que a DO estiver assinada; não é necessário IML | Registro: registrar tudo no prontuário com data, hora e assinatura',
      expectedCommunication: 'Apresentar-se pelo nome à família | Comunicar o óbito com clareza, empatia e respeito: "Lamento informar que o Sr. G. faleceu às 07h12min desta manhã" | Oferecer um momento de silêncio; não pressa | Explicar brevemente o que aconteceu em linguagem acessível (pneumonia evoluiu para infecção grave e falência dos órgãos) | Responder às perguntas sobre sofrimento com verdade e sensibilidade | Orientar sobre a DO e os próximos passos de forma clara | Oferecer apoio de assistente social ou psicológico se disponível | Perguntar se têm mais dúvidas antes de encerrar',
      criticalErrors: [
        'Preencher a DO com a causa básica no campo Ia — erro clássico e grave (sequência correta: Ia = causa imediata, Ic = causa básica)',
        'Encaminhar o caso ao IML sem necessidade — causa constrangimento desnecessário à família e atraso no velório (morte natural determinada com assistência médica = médico assistente preenche a DO)',
        'Não confirmar clinicamente o óbito antes de preencher a DO (exame físico obrigatório)',
        'Não comunicar o óbito pessoalmente e com empatia à família (comunicação por telefone ou por terceiros sem presença do médico é inadequada)',
        'Não orientar a família sobre os próximos passos (cartório, velório, certidão de óbito) — abandona a família em momento de vulnerabilidade'
      ]
    },
    instD: {
      title: 'CHECKLIST — PREENCHIMENTO DE DECLARAÇÃO DE ÓBITO',
      sections: [
        {
          h: 'BLOCO 1 — COMUNICAÇÃO COM A FAMÍLIA',
          items: [
            { item: 'Apresentou-se pelo nome à família', score: 0.5, ref: 'CFM Res. 2.232/2019; CFM Res. 1.779/2005' },
            { item: 'Comunicou o óbito pessoalmente, em ambiente privado, com empatia', score: 1.0, ref: 'CFM Res. 2.232/2019' },
            { item: 'Explicou o que ocorreu em linguagem acessível e respondeu perguntas da família', score: 0.5, ref: 'CFM Res. 2.232/2019' }
          ]
        },
        {
          h: 'BLOCO 2 — CONFIRMAÇÃO DO ÓBITO',
          items: [
            { item: 'Confirmou clinicamente o óbito (ausência de pulso, apneia, pupilas, bulhas, reflexo corneal)', score: 1.0, ref: 'CFM Res. 1.779/2005' },
            { item: 'Registrou data, hora e achados no prontuário', score: 0.5, ref: 'CFM Res. 1.779/2005' }
          ]
        },
        {
          h: 'BLOCO 3 — PREENCHIMENTO DA DO',
          items: [
            { item: 'Preencheu a sequência correta: Ia = causa imediata, Ib = intermediária, Ic = causa básica', score: 1.0, ref: 'CFM Res. 1.779/2005; MS — Manual de DO, 2023' },
            { item: 'Preencheu o Campo II com comorbidades (HAS, DM, DPOC)', score: 0.5, ref: 'MS — Manual de DO, 2023' },
            { item: 'Identificou o tipo de óbito como Natural', score: 0.5, ref: 'MS — Manual de DO, 2023' }
          ]
        },
        {
          h: 'BLOCO 4 — DECISÃO SOBRE IML/SVO',
          items: [
            { item: 'Determinou corretamente que o caso NÃO requer encaminhamento ao IML (morte natural determinada com assistência médica)', score: 1.0, ref: 'Lei 9.434/1997; CFM Res. 1.779/2005' },
            { item: 'Explicou à família que a DO é emitida pelo médico assistente e que não haverá IML', score: 0.5, ref: 'CFM Res. 1.779/2005' }
          ]
        },
        {
          h: 'BLOCO 5 — TRÂMITES E ORIENTAÇÕES',
          items: [
            { item: 'Orientou a família sobre os próximos passos (cartório, certidão de óbito, velório)', score: 0.5, ref: 'Lei de Registros Públicos — Lei 6.015/1973' },
            { item: 'Perguntou se a família tinha mais dúvidas antes de encerrar', score: 0.5, ref: 'CFM Res. 2.232/2019' }
          ]
        }
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // CASO 1 — EXAME DE CORPO DE DELITO E CLASSIFICAÇÃO DE LESÕES CORPORAIS
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 1,
    title: 'Vítima de agressão física solicitando exame para boletim de ocorrência',
    sub: 'PS — Pronto-Socorro / IML',
    tema: 'Medicina Legal',
    topic: 'Exame de Corpo de Delito e Classificação de Lesões Corporais',
    level: 'moderado',
    cardAccent: '#546E7A',
    instA: {
      scenario: 'Pronto-Socorro, paciente vítima de agressão física, busca atendimento e documentação médica das lesões.',
      patient: 'F.R.A., 33 anos, masculino, comerciante, vítima de agressão física após discussão de trânsito.',
      complaint: 'Foi agredido com socos e um objeto contundente, apresenta dor e ferimentos, quer documentação para registrar boletim de ocorrência.',
      tasks: [
        'Realize a anamnese dirigida ao evento, com detalhamento circunstancial adequado.',
        'Realize o exame físico minucioso, documentando todas as lesões encontradas.',
        'Classifique as lesões conforme os critérios legais de gravidade.',
        'Solicite os exames complementares pertinentes.',
        'Elabore a documentação adequada e oriente sobre os encaminhamentos legais.'
      ]
    },
    instB: {
      vitals: {
        PA: '138/88 mmHg',
        FC: '96 bpm',
        FR: '18 irpm',
        Tax: '36,5 °C',
        SpO2: '98%'
      },
      physicalGeneral: 'Bom estado geral, ansioso, com escoriações visíveis em face.',
      physicalSeg: 'CABEÇA/FACE: equimose periorbitária esquerda, edema em região malar esquerda, corte superficial em supercílio esquerdo (cerca de 2 cm, sem necessidade de sutura) | TÓRAX: equimoses múltiplas em região torácica anterior, dor à palpação em arcos costais à esquerda, sem crepitação | MEMBRO SUPERIOR DIREITO: edema e dor importante em punho direito, com limitação funcional | Sem sinais de sangramento ativo significativo.',
      labs: [
        { test: 'Radiografia de punho direito', val: 'Fratura do rádio distal, sem desvio significativo', ref: 'Sem fratura', alt: true },
        { test: 'Radiografia de arcos costais à esquerda', val: 'Sem fratura visível, compatível com contusão', ref: 'Sem fratura', alt: false },
        { test: 'Tomografia de crânio (por trauma facial com perda de consciência referida)', val: 'Sem sangramento intracraniano ou fratura óssea', ref: 'Normal', alt: false }
      ],
      note: 'A documentação minuciosa e objetiva de todas as lesões (localização, tamanho, características) é o elemento central deste caso, pois servirá de base para o exame de corpo de delito complementar a ser realizado pelo IML. Reforçar que a classificação legal da gravidade (lesão leve, grave ou gravíssima) segue critérios do Código Penal, e não apenas a gravidade clínica aparente.',
      patientProfile: 'Comerciante, casado, sem antecedentes de violência anteriores. Refere ter sido agredido por outro motorista após pequena colisão de trânsito, sendo golpeado com socos e, segundo relato, com uma barra de ferro no punho ao tentar se proteger.',
      script: [
        { trigger: 'Queixa principal', speech: 'Doutor(a), fui agredido por um cara depois de uma batidinha de carro, ele me deu vários socos e bateu com uma barra de ferro no meu braço. Preciso de um laudo para o boletim de ocorrência.' },
        { trigger: 'Sobre o mecanismo da agressão', speech: 'Ele me deu socos na cara e no peito, e quando levantei o braço para me proteger, ele bateu com a barra de ferro bem no meu pulso.' },
        { trigger: 'Sobre perda de consciência', speech: 'Cheguei a ficar meio zonzo por uns segundos depois de um dos socos na cabeça, mas acho que não desmaiei de verdade.' },
        { trigger: 'Sobre a dor no punho', speech: 'A dor no pulso é a que mais incomoda agora, muito forte, não consigo nem mexer direito.' },
        { trigger: 'Pergunta ativa — documentação', speech: 'Doutor(a), o senhor(a) pode me dar um laudo detalhado disso tudo? Preciso levar para a delegacia.' }
      ],
      hiddenInfo: 'Já registrou o boletim de ocorrência na delegacia antes de vir ao hospital, mas ainda não foi encaminhado ao IML para exame de corpo de delito complementar — só revela se perguntado sobre os encaminhamentos legais já realizados | Está preocupado com a possibilidade de não conseguir trabalhar por causa da fratura no punho (é comerciante, trabalho manual) — só revela essa preocupação se o candidato perguntar sobre impacto funcional/ocupacional',
      actorBehavior: 'Ansioso e um pouco agitado ao relatar a agressão, fala rapidamente sobre o ocorrido. Insistente em obter documentação detalhada. Colaborativo durante o exame físico apesar da dor.'
    },
    instC: {
      diagnosis: 'Lesões corporais múltiplas decorrentes de agressão física por terceiro, incluindo fratura de rádio distal em punho direito — lesão corporal de natureza grave pelo critério de incapacidade para as ocupações habituais por mais de 30 dias (a confirmar por perícia complementar).',
      differentials: [
        'Não se aplica diagnóstico diferencial clínico clássico neste caso — a tarefa central do candidato é a documentação médico-legal adequada e a correta classificação jurídica da gravidade das lesões encontradas, não um diagnóstico diferencial de doença.'
      ],
      context: 'O atendimento a vítimas de agressão física exige, além do cuidado clínico das lesões, a documentação médico-legal minuciosa e objetiva de todos os achados (localização exata, dimensões, características, instrumento provável causador), pois essa descrição serve de base para o exame de corpo de delito e para a classificação penal da gravidade da lesão, com implicações jurídicas diretas para o processo criminal.',
      justify: 'A presença de fratura de rádio distal em punho direito, associada ao relato de mecanismo compatível (golpe com objeto contundente/barra de ferro), configura lesão corporal com potencial classificação de natureza grave conforme o Código Penal (Art. 129, §1º), que inclui como critério a incapacidade para as ocupações habituais por mais de 30 dias — critério que deve ser confirmado por perícia complementar (exame de corpo de delito indireto/complementar), já que a incapacidade funcional real só pode ser avaliada com a evolução do quadro.',
      expectedAnamnesis: 'Registrar detalhadamente o relato do mecanismo da agressão (tipo de golpe, instrumento utilizado, sequência dos eventos) em linguagem descritiva e não induzida | Investigar perda de consciência (relevante para avaliação de possível traumatismo cranioencefálico) | Perguntar sobre a existência de boletim de ocorrência já registrado | Investigar impacto funcional/ocupacional das lesões',
      expectedPhysical: 'Exame físico completo e sistematizado, documentando TODAS as lesões encontradas (não apenas a queixa principal) — localização exata, dimensões aproximadas, características (equimose, escoriação, corte, edema) | Avaliação neurológica sumária diante de relato de trauma craniano com alteração transitória da consciência | Avaliação funcional do membro fraturado',
      expectedExams: [
        { exam: 'Radiografias das áreas com suspeita de fratura (punho, arcos costais)', justify: 'Documentar objetivamente lesões ósseas para fins clínicos e médico-legais', expected: 'Confirmação de fratura de rádio distal' },
        { exam: 'Tomografia de crânio', justify: 'Avaliar possível traumatismo cranioencefálico diante do relato de alteração transitória da consciência', expected: 'Sem sangramento ou fratura neste caso' }
      ],
      expectedConduct: 'Farmacológica: analgesia adequada; imobilização da fratura de punho e encaminhamento ortopédico | Não farmacológica: documentar de forma minuciosa e objetiva TODAS as lesões no prontuário (elemento central deste atendimento, servindo de base probatória); elaborar relatório médico descritivo das lesões encontradas | Orientações ao paciente: explicar a diferença entre o atendimento clínico (tratamento das lesões) e o exame de corpo de delito pericial (realizado por perito oficial do IML, necessário para fins processuais); orientar sobre a necessidade de comparecer ao Instituto Médico Legal para realização do exame complementar, especialmente importante para reclassificação da gravidade da lesão após 30 dias (avaliação de incapacidade) | Seguimento: acompanhamento ortopédico da fratura; retorno ao IML para exame complementar conforme orientação',
      expectedCommunication: 'Explicar de forma clara a diferença entre atendimento médico assistencial e perícia médico-legal (exame de corpo de delito), sem se posicionar como perito neste atendimento assistencial | Documentar de forma neutra e objetiva o relato do paciente, sem incluir juízo de valor sobre a veracidade dos fatos | Orientar sobre os encaminhamentos legais necessários',
      criticalErrors: [
        'Não documentar detalhadamente TODAS as lesões encontradas no exame físico, registrando apenas a queixa principal',
        'Não orientar o paciente sobre a necessidade de exame de corpo de delito complementar pelo IML',
        'Confundir o papel de médico assistente com o de perito oficial, emitindo classificação jurídica definitiva de gravidade sem base em exame complementar quando indicado',
        'Não investigar/documentar possível traumatismo cranioencefálico diante do relato de alteração da consciência',
        'Registrar juízo de valor sobre a culpabilidade das partes envolvidas no prontuário, função que não cabe ao médico assistente'
      ]
    },
    instD: {
      title: 'CHECKLIST — VÍTIMA DE AGRESSÃO FÍSICA (EXAME DE CORPO DE DELITO)',
      sections: [
        {
          h: 'BLOCO 1 — COMUNICAÇÃO E POSTURA ÉTICA',
          items: [
            { item: 'Apresentou-se pelo nome ao paciente', score: 0.5, ref: 'CFM Res. 2.217/2018' },
            { item: 'Não emitiu juízo de valor sobre a culpabilidade das partes no prontuário', score: 0.5, ref: 'CFM Res. 2.217/2018' }
          ]
        },
        {
          h: 'BLOCO 2 — ANAMNESE',
          items: [
            { item: 'Registrou o relato do mecanismo da agressão de forma descritiva e não induzida', score: 0.5, ref: 'Medicina Legal — Exame de Corpo de Delito' },
            { item: 'Investigou perda de consciência associada ao trauma craniano', score: 0.5, ref: 'Medicina Legal — Traumatologia Forense' }
          ]
        },
        {
          h: 'BLOCO 3 — EXAME FÍSICO E DOCUMENTAÇÃO',
          items: [
            { item: 'Documentou TODAS as lesões encontradas, não apenas a queixa principal', score: 1.5, ref: 'Medicina Legal — Exame de Corpo de Delito' },
            { item: 'Descreveu localização, dimensões e características de cada lesão', score: 1.0, ref: 'Medicina Legal — Exame de Corpo de Delito' }
          ]
        },
        {
          h: 'BLOCO 4 — RACIOCÍNIO CLÍNICO-LEGAL',
          items: [
            { item: 'Solicitou exames de imagem para documentar objetivamente as lesões', score: 1.0, ref: 'Medicina Legal — Exame de Corpo de Delito' },
            { item: 'Reconheceu a diferença entre gravidade clínica e classificação jurídica da lesão', score: 1.0, ref: 'Código Penal Art. 129' }
          ]
        },
        {
          h: 'BLOCO 5 — CONDUTA E ENCAMINHAMENTO',
          items: [
            { item: 'Orientou sobre a necessidade de exame de corpo de delito complementar pelo IML', score: 1.0, ref: 'Código de Processo Penal Art. 168' },
            { item: 'Encaminhou adequadamente para tratamento ortopédico da fratura', score: 0.5, ref: 'Medicina Legal — Exame de Corpo de Delito' }
          ]
        }
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // CASO 2 — VIOLÊNCIA SEXUAL — ATENDIMENTO INICIAL E PROFILAXIAS
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 2,
    title: 'Mulher jovem após episódio de violência sexual há 6 horas',
    sub: 'PS — Pronto-Socorro',
    tema: 'Medicina Legal',
    topic: 'Violência Sexual — Atendimento Inicial',
    level: 'difícil',
    cardAccent: '#546E7A',
    instA: {
      scenario: 'Pronto-Socorro, atendimento a vítima de violência sexual recente.',
      patient: 'C.S.M., 24 anos, feminino, estudante, vítima de violência sexual por conhecido há aproximadamente 6 horas.',
      complaint: 'Busca atendimento após ter sido vítima de violência sexual na noite anterior.',
      tasks: [
        'Realize o acolhimento e a anamnese com abordagem humanizada.',
        'Realize o exame físico geral e ginecológico com o devido cuidado e consentimento.',
        'Avalie a necessidade de profilaxias e contracepção de emergência.',
        'Solicite os exames complementares e a coleta de vestígios pertinentes.',
        'Oriente sobre notificação compulsória, encaminhamentos legais e seguimento.'
      ]
    },
    instB: {
      vitals: {
        PA: '112/72 mmHg',
        FC: '92 bpm',
        FR: '18 irpm',
        Tax: '36,4 °C'
      },
      physicalGeneral: 'Abalada emocionalmente, chorosa em alguns momentos, colaborativa mas visivelmente desconfortável durante o relato.',
      physicalSeg: 'GERAL: escoriações discretas em face interna de coxas e antebraços | GINECOLÓGICO (realizado com consentimento explícito, após explicação detalhada de cada etapa): sinais de lesão em região vulvar/introito vaginal compatíveis com o relato, sem sangramento ativo importante no momento do exame.',
      labs: [
        { test: 'Beta-hCG', val: 'Negativo', ref: 'Negativo', alt: false },
        { test: 'Teste rápido HIV, sífilis, hepatites B e C', val: 'Todos não reagentes (basal, antes da profilaxia)', ref: 'Não reagentes', alt: false }
      ],
      note: 'A coleta de vestígios (roupas, material biológico) para exame pericial deve ser realizada preferencialmente ANTES do exame clínico/banho, sempre com consentimento da paciente e cadeia de custódia adequada — reforçar essa prioridade se o candidato não mencionar. A janela terapêutica para as profilaxias (até 72h para PEP-HIV, contracepção de emergência até 5 dias mas mais eficaz quanto mais precoce) deve orientar a urgência da conduta.',
      patientProfile: 'Estudante universitária, foi agredida sexualmente por um conhecido em uma festa na noite anterior, veio acompanhada de uma amiga. Não é usuária de método contraceptivo hormonal regular no momento.',
      script: [
        { trigger: 'Ao ser acolhida', speech: '(chorando) Doutor(a)... eu não sei nem como começar a falar sobre isso... aconteceu ontem à noite, numa festa...' },
        { trigger: 'Sobre o ocorrido (relato voluntário, sem necessidade de detalhamento forçado)', speech: 'Foi um conhecido, alguém que eu confiava... eu disse não, mas ele não parou... eu me senti paralisada, não consegui reagir.' },
        { trigger: 'Sobre o tempo decorrido', speech: 'Aconteceu ontem à noite, faz umas 6 horas mais ou menos. Eu vim direto para cá depois que consegui sair de lá.' },
        { trigger: 'Sobre banho/higiene', speech: 'Eu tomei um banho quando cheguei em casa, não sabia se deveria ou não, me senti suja e precisava.' },
        { trigger: 'Pergunta ativa — medo de gravidez/doenças', speech: '(muito ansiosa) Doutor(a), eu posso ter engravidado? Posso ter pegado alguma doença? O que eu faço agora?' }
      ],
      hiddenInfo: 'Já tomou banho antes de vir ao hospital, o que pode ter comprometido parcialmente a coleta de vestígios físicos, mas não invalida a realização do exame nem os demais cuidados — essa informação já foi voluntariamente relatada pela paciente no roteiro, não é "escondida" | Está com muito medo de ter que "reviver" o trauma repetidamente contando a história para várias pessoas diferentes (polícia, hospital, etc.) — verbaliza esse medo se o candidato demonstrar acolhimento | Não quer, neste momento, registrar boletim de ocorrência, e teme ser pressionada a fazer isso — só revela essa recusa se o tema for abordado, e sua decisão deve ser respeitada',
      actorBehavior: 'Emocionalmente abalada, alternando entre relato mais calmo e momentos de choro. Muito ansiosa em relação a gravidez e ISTs. Sensível a qualquer sinal de julgamento ou pressa por parte do profissional — relaxa visivelmente diante de acolhimento genuíno.'
    },
    instC: {
      diagnosis: 'Violência sexual recente (dentro da janela terapêutica para profilaxias), exigindo atendimento integral: acolhimento, profilaxias de ISTs e gravidez, coleta de vestígios com consentimento, e notificação compulsória.',
      differentials: [
        'Não se aplica diagnóstico diferencial clínico clássico — a tarefa central do candidato é conduzir o atendimento integral e humanizado à vítima de violência sexual conforme os protocolos vigentes, incluindo aspectos clínicos, periciais e de notificação.'
      ],
      context: 'O atendimento a vítimas de violência sexual no Brasil é regido por normas técnicas do Ministério da Saúde que garantem atendimento integral e humanizado nos serviços de saúde, independentemente de registro policial prévio ou да realização de exame de corpo de delito pelo IML — o acesso às profilaxias e cuidados de saúde NÃO deve ser condicionado ao boletim de ocorrência. A paciente atende dentro da janela terapêutica ideal (até 72h) para profilaxia pós-exposição ao HIV e para contracepção de emergência.',
      justify: 'O atendimento dentro de 6 horas do evento está bem dentro da janela terapêutica para todas as profilaxias recomendadas (PEP-HIV até 72h, profilaxia de ISTs bacterianas, contracepção de emergência até 5 dias, mais eficaz quanto mais precoce), justificando a oferta imediata dessas medidas. A recusa da paciente em registrar boletim de ocorrência no momento não deve impedir ou atrasar o atendimento clínico e as profilaxias, que são um direito garantido independentemente dessa decisão.',
      expectedAnamnesis: 'Acolher o relato de forma não julgadora, permitindo que a paciente conte no seu próprio ritmo, sem forçar detalhamento desnecessário do evento | Investigar tempo decorrido desde o evento (crucial para definir profilaxias) | Perguntar sobre uso de método contraceptivo | Investigar sintomas físicos associados | Perguntar sobre rede de apoio (acompanhante presente)',
      expectedPhysical: 'Realizar exame físico e ginecológico apenas com consentimento explícito e explicação prévia de cada etapa | Documentar lesões físicas encontradas | Conduzir o exame com o mínimo de repetições de perguntas sensíveis possível',
      expectedExams: [
        { exam: 'Beta-hCG', justify: 'Avaliar gestação prévia ao evento antes de prescrever contracepção de emergência', expected: 'Negativo neste caso' },
        { exam: 'Sorologias basais (HIV, sífilis, hepatites B e C)', justify: 'Estabelecer status basal antes de iniciar profilaxias', expected: 'Não reagentes, servindo de base para seguimento' },
        { exam: 'Coleta de vestígios para exame pericial (com consentimento e cadeia de custódia)', justify: 'Preservar material para eventual investigação criminal, mesmo que a paciente ainda não tenha decidido registrar ocorrência', expected: 'Coleta realizada conforme protocolo, apesar do banho prévio relatado' }
      ],
      expectedConduct: 'Farmacológica: profilaxia pós-exposição ao HIV (PEP) com esquema antirretroviral combinado, iniciada o quanto antes (dentro de 72h, idealmente nas primeiras 2h); profilaxia para ISTs bacterianas (sífilis, gonorreia, clamídia) conforme protocolo; profilaxia para hepatite B (imunoglobulina e/ou vacina conforme status vacinal); contracepção de emergência (levonorgestrel) | Não farmacológica: coleta de vestígios com consentimento, mesmo diante de banho prévio relatado; encaminhamento para acompanhamento psicológico | Orientações à paciente: explicar que o atendimento e as profilaxias independem de registro policial, respeitando sua autonomia sobre essa decisão; explicar os prazos e a importância da adesão ao esquema profilático; informar sobre o direito à interrupção legal da gestação caso ocorra gravidez decorrente da violência (Lei do Aborto Legal), sem necessidade de autorização judicial ou boletim de ocorrência prévios | Seguimento: sorologias de seguimento (6 semanas, 3 e 6 meses); acompanhamento psicológico continuado; notificação compulsória do caso à vigilância epidemiológica (independente e sem conflito com a decisão da paciente sobre registro policial)',
      expectedCommunication: 'Acolher com escuta ativa, sem julgamento e sem forçar detalhamento do evento além do necessário | Explicar cada etapa do exame físico antes de realizá-la, obtendo consentimento explícito | Respeitar a autonomia da paciente quanto à decisão de não registrar boletim de ocorrência no momento | Explicar todos os direitos e opções disponíveis de forma clara, sem pressioná-la para nenhuma decisão específica',
      criticalErrors: [
        'Condicionar o atendimento ou as profilaxias à realização de boletim de ocorrência prévio',
        'Não oferecer profilaxia para HIV (PEP) dentro da janela terapêutica de 72h',
        'Não oferecer contracepção de emergência',
        'Realizar exame físico/ginecológico sem consentimento explícito ou sem explicar as etapas previamente',
        'Não realizar ou orientar a notificação compulsória do caso'
      ]
    },
    instD: {
      title: 'CHECKLIST — ATENDIMENTO A VÍTIMA DE VIOLÊNCIA SEXUAL RECENTE',
      sections: [
        {
          h: 'BLOCO 1 — ACOLHIMENTO E COMUNICAÇÃO',
          items: [
            { item: 'Acolheu o relato sem julgamento, respeitando o ritmo da paciente', score: 1.0, ref: 'Ministério da Saúde — Norma Técnica de Atenção à Violência Sexual' },
            { item: 'Explicou cada etapa do exame físico antes de realizá-la, obtendo consentimento', score: 1.0, ref: 'Ministério da Saúde — Norma Técnica de Atenção à Violência Sexual' }
          ]
        },
        {
          h: 'BLOCO 2 — ANAMNESE',
          items: [
            { item: 'Investigou o tempo decorrido desde o evento', score: 0.5, ref: 'Ministério da Saúde — Norma Técnica de Atenção à Violência Sexual' },
            { item: 'Perguntou sobre uso de método contraceptivo', score: 0.5, ref: 'Ministério da Saúde — Norma Técnica de Atenção à Violência Sexual' }
          ]
        },
        {
          h: 'BLOCO 3 — EXAMES',
          items: [
            { item: 'Solicitou beta-hCG antes de prescrever contracepção de emergência', score: 0.5, ref: 'Ministério da Saúde — Norma Técnica de Atenção à Violência Sexual' },
            { item: 'Solicitou sorologias basais e orientou coleta de vestígios', score: 0.5, ref: 'Ministério da Saúde — Norma Técnica de Atenção à Violência Sexual' }
          ]
        },
        {
          h: 'BLOCO 4 — CONDUTA — PROFILAXIAS',
          items: [
            { item: 'Prescreveu profilaxia pós-exposição ao HIV (PEP) dentro da janela terapêutica', score: 1.5, ref: 'Ministério da Saúde — PCDT PEP' },
            { item: 'Prescreveu contracepção de emergência', score: 1.0, ref: 'Ministério da Saúde — Norma Técnica de Atenção à Violência Sexual' },
            { item: 'Prescreveu profilaxia para ISTs bacterianas e hepatite B', score: 0.5, ref: 'Ministério da Saúde — Norma Técnica de Atenção à Violência Sexual' }
          ]
        },
        {
          h: 'BLOCO 5 — ORIENTAÇÃO E ENCAMINHAMENTOS',
          items: [
            { item: 'Esclareceu que o atendimento independe de boletim de ocorrência', score: 1.0, ref: 'Ministério da Saúde — Norma Técnica de Atenção à Violência Sexual' },
            { item: 'Orientou sobre notificação compulsória e seguimento sorológico', score: 0.5, ref: 'Ministério da Saúde — Norma Técnica de Atenção à Violência Sexual' }
          ]
        }
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // CASO 3 — VIOLÊNCIA DOMÉSTICA (LEI MARIA DA PENHA)
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 3,
    title: 'Mulher com lesões físicas repetidas causadas pelo companheiro',
    sub: 'UBS — Atenção Primária',
    tema: 'Medicina Legal',
    topic: 'Violência Doméstica contra a Mulher',
    level: 'moderado',
    cardAccent: '#546E7A',
    instA: {
      scenario: 'Consulta de rotina na UBS, paciente apresenta lesões que chamam atenção da equipe.',
      patient: 'M.J.S., 38 anos, feminino, auxiliar de limpeza, casada há 12 anos.',
      complaint: 'Consulta agendada por dor lombar, mas equipe nota hematomas em braços e face durante o atendimento.',
      tasks: [
        'Conduza a abordagem da suspeita de violência doméstica com sensibilidade.',
        'Realize o exame físico completo, documentando os achados.',
        'Avalie o risco atual e a rede de apoio da paciente.',
        'Realize a notificação compulsória do caso.',
        'Oriente sobre direitos, rede de proteção e encaminhamentos disponíveis.'
      ]
    },
    instB: {
      vitals: {
        PA: '132/86 mmHg',
        FC: '88 bpm',
        FR: '16 irpm',
        Tax: '36,4 °C'
      },
      physicalGeneral: 'Retraída, evita contato visual direto, postura defensiva, resposta monossilábica inicialmente.',
      physicalSeg: 'FACE: equimose amarelo-esverdeada (em fase de resolução, sugerindo lesão de alguns dias) em região malar esquerda | MEMBROS SUPERIORES: múltiplas equimoses em diferentes estágios de evolução (algumas mais recentes, roxas, outras mais antigas, amareladas) em ambos os antebraços, em padrão compatível com preensão forçada | DORSO: dor lombar sem sinais radiculares, sem lesão visível associada nesta região.',
      labs: [],
      note: 'Este caso não tem exames laboratoriais centrais — o foco é a abordagem clínica e a documentação adequada das lesões físicas de diferentes idades, achado clássico de violência repetida/crônica. A abordagem deve ser conduzida com privacidade absoluta, sem a presença do companheiro (que aguarda na sala de espera).',
      patientProfile: 'Auxiliar de limpeza, casada há 12 anos, dois filhos (10 e 7 anos). Companheiro presente na unidade, aguardando na sala de espera. Refere financeiramente depender do marido.',
      script: [
        { trigger: 'Queixa principal (inicial, superficial)', speech: 'Doutor(a), vim pela dor nas costas mesmo, não é nada demais.' },
        { trigger: 'Ao ser perguntada sobre as equimoses, com privacidade e sem julgamento', speech: '(hesitante, olhando para baixo) Ah... eu... caí em casa, tropecei na escada.' },
        { trigger: 'Se acolhida com mais tempo e sensibilidade', speech: '(pausa longa, voz baixa) Meu marido... às vezes ele perde a paciência... segura meu braço com força, às vezes me empurra...' },
        { trigger: 'Sobre frequência/duração', speech: 'Isso vem acontecendo há uns 2 anos, foi piorando aos poucos. No começo era só gritar.' },
        { trigger: 'Sobre medo/segurança', speech: '(muito baixo) Tenho medo de que ele descubra que eu contei isso... ele está lá fora esperando.' },
        { trigger: 'Sobre filhos', speech: 'Meus filhos já viram algumas brigas, isso me preocupa muito.' }
      ],
      hiddenInfo: 'Já pensou em deixar o relacionamento, mas tem medo de não conseguir se sustentar financeiramente com os filhos — só revela se a equipe explorar a questão da autonomia financeira e rede de apoio | Já houve um episódio de agressão na frente dos filhos, o que a preocupa profundamente quanto ao desenvolvimento deles — só revela se perguntada especificamente sobre a presença dos filhos durante episódios de violência | Tem uma irmã que mora em outra cidade e que se ofereceu para ajudá-la caso decida sair de casa — só revela se perguntada sobre rede de apoio familiar',
      actorBehavior: 'Inicialmente defensiva e minimizando os sintomas ("caí da escada"), abrindo-se muito gradualmente apenas se a equipe demonstrar acolhimento genuíno, privacidade garantida e ausência de julgamento. Fala em voz baixa, com pausas longas e olhares de medo em direção à porta, especialmente ao mencionar o companheiro.'
    },
    instC: {
      diagnosis: 'Violência doméstica física recorrente contra a mulher, praticada por parceiro íntimo, com padrão de escalada progressiva (Lei Maria da Penha — Lei 11.340/2006), exigindo notificação compulsória e articulação com rede de proteção.',
      differentials: [
        'Não se aplica diagnóstico diferencial clínico clássico — a tarefa central do candidato é reconhecer os sinais de alerta para violência doméstica (lesões em diferentes estágios de cicatrização, discrepância entre a explicação inicial e os achados, comportamento retraído/defensivo) e conduzir a abordagem adequada, sem forçar a revelação, mas criando espaço seguro para ela.'
      ],
      context: 'A violência doméstica contra a mulher é um problema de saúde pública frequentemente subnotificado, no qual o profissional de saúde tem papel fundamental na identificação precoce, acolhimento e articulação com a rede de proteção (Lei Maria da Penha), especialmente pela oportunidade única de contato em ambiente relativamente seguro durante consultas de rotina. Sinais de alerta incluem lesões em diferentes estágios de cicatrização (sugerindo eventos repetidos ao longo do tempo), explicações incompatíveis com o padrão da lesão, e comportamento retraído ou hipervigilante da paciente.',
      justify: 'A presença de equimoses em diferentes estágios de evolução (uma mais recente na face, outras mais antigas em ambos os antebraços em padrão compatível com preensão forçada), associada à explicação inicialmente incompatível ("caí da escada") e ao comportamento retraído da paciente, são sinais clássicos de violência física repetida por parceiro íntimo. A revelação espontânea da paciente, obtida através de abordagem acolhedora e privada, confirma o diagnóstico e a necessidade de notificação compulsória e articulação com a rede de proteção prevista na Lei Maria da Penha.',
      expectedAnamnesis: 'Garantir privacidade absoluta antes de abordar o tema (sem a presença do companheiro ou de outros acompanhantes) | Perguntar de forma direta, mas não acusatória, sobre a origem das lesões observadas | Investigar padrão temporal e progressão da violência, se revelada | Avaliar presença de filhos e possível exposição deles à violência | Avaliar rede de apoio (familiar, social, financeira) e sensação de segurança atual',
      expectedPhysical: 'Exame físico completo, documentando todas as lesões, seus estágios de evolução aproximados e padrões sugestivos (ex.: marcas de preensão) | Avaliar sinais de hipervigilância ou retração comportamental',
      expectedExams: [
        { exam: 'Não há exames laboratoriais obrigatórios centrais neste caso — a documentação clínica minuciosa das lesões é o principal registro objetivo', justify: 'Registro documental para eventual uso posterior pela paciente, se decidir buscar proteção legal', expected: 'Documentação detalhada no prontuário' }
      ],
      expectedConduct: 'Farmacológica: analgesia para a dor lombar referida, conforme necessário, sem que isso seja o foco central da consulta | Não farmacológica: garantir avaliação de risco atual (existe ameaça iminente? existe arma em casa? a violência está escalando?); articular encaminhamento para rede de proteção (Centro de Referência de Atendimento à Mulher, Delegacia da Mulher, Casa Abrigo se necessário, conforme desejo e avaliação de risco da paciente) | Orientações à paciente: informar sobre seus direitos previstos na Lei Maria da Penha (medidas protetivas de urgência, que podem ser solicitadas independentemente de a vítima já ter registrado ocorrência anterior); explicar que a decisão sobre os próximos passos (registrar ocorrência, buscar abrigo, etc.) é dela, respeitando sua autonomia e o tempo necessário para essas decisões, especialmente em situações de dependência financeira; fornecer contatos da rede de apoio (Central de Atendimento à Mulher - 180, Centros de Referência) | Seguimento: notificação compulsória obrigatória do caso de violência à vigilância epidemiológica (independente da vontade da paciente sobre ações policiais); agendar retorno próximo para reavaliação e continuidade do vínculo',
      expectedCommunication: 'Garantir ambiente privado e seguro antes de abordar o tema | Perguntar de forma direta, mas acolhedora e sem julgamento, dando espaço para a paciente revelar no seu tempo | Validar o relato sem minimizar nem dramatizar excessivamente | Respeitar a autonomia da paciente quanto às decisões sobre denunciar, sair do relacionamento ou buscar abrigo, sem impor um curso de ação',
      criticalErrors: [
        'Abordar a suspeita de violência doméstica na presença do companheiro ou sem garantir privacidade',
        'Aceitar passivamente a explicação inicial incompatível ("caí da escada") sem investigar mais a fundo diante de sinais claros de alerta',
        'Não realizar a notificação compulsória do caso',
        'Pressionar a paciente a tomar uma decisão imediata (registrar ocorrência, sair de casa) contra sua vontade ou prontidão',
        'Não avaliar o risco atual (escalada da violência, presença de armas, exposição dos filhos) nem oferecer informações sobre a rede de proteção disponível'
      ]
    },
    instD: {
      title: 'CHECKLIST — SUSPEITA DE VIOLÊNCIA DOMÉSTICA CONTRA A MULHER',
      sections: [
        {
          h: 'BLOCO 1 — ABORDAGEM E PRIVACIDADE',
          items: [
            { item: 'Garantiu privacidade absoluta antes de abordar o tema (sem o companheiro presente)', score: 1.5, ref: 'Lei Maria da Penha (Lei 11.340/2006)' },
            { item: 'Abordou a suspeita de forma direta, acolhedora e sem julgamento', score: 1.0, ref: 'Ministério da Saúde — Linha de Cuidado para Violência' }
          ]
        },
        {
          h: 'BLOCO 2 — ANAMNESE',
          items: [
            { item: 'Não aceitou passivamente a explicação inicial incompatível com os achados', score: 1.0, ref: 'Ministério da Saúde — Linha de Cuidado para Violência' },
            { item: 'Investigou presença de filhos e exposição deles à violência', score: 0.5, ref: 'Ministério da Saúde — Linha de Cuidado para Violência' },
            { item: 'Avaliou rede de apoio e risco atual', score: 0.5, ref: 'Ministério da Saúde — Linha de Cuidado para Violência' }
          ]
        },
        {
          h: 'BLOCO 3 — EXAME FÍSICO',
          items: [
            { item: 'Documentou as lesões e seus diferentes estágios de evolução', score: 1.0, ref: 'Medicina Legal — Documentação de Violência' }
          ]
        },
        {
          h: 'BLOCO 4 — CONDUTA — NOTIFICAÇÃO E ENCAMINHAMENTO',
          items: [
            { item: 'Realizou/orientou a notificação compulsória do caso', score: 1.5, ref: 'Ministério da Saúde — Notificação Compulsória de Violência' },
            { item: 'Informou sobre medidas protetivas de urgência (Lei Maria da Penha)', score: 1.0, ref: 'Lei Maria da Penha (Lei 11.340/2006)' }
          ]
        },
        {
          h: 'BLOCO 5 — RESPEITO À AUTONOMIA',
          items: [
            { item: 'Respeitou a autonomia da paciente quanto às decisões, sem impor curso de ação', score: 1.0, ref: 'CFM Res. 2.217/2018' }
          ]
        }
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // CASO 4 — SUSPEITA DE MAUS-TRATOS INFANTIS
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 4,
    title: 'Criança com lesões cutâneas incompatíveis com a história relatada',
    sub: 'PS — Pronto-Socorro Pediátrico',
    tema: 'Medicina Legal',
    topic: 'Suspeita de Maus-Tratos Infantis',
    level: 'difícil',
    cardAccent: '#546E7A',
    instA: {
      scenario: 'Pronto-Socorro pediátrico, criança trazida pela mãe com queixa de "queda".',
      patient: 'L.O.S., 4 anos, sexo masculino, trazido pela mãe.',
      complaint: 'Mãe relata que a criança "caiu da cama" e apresenta hematomas.',
      tasks: [
        'Realize a anamnese dirigida, avaliando a compatibilidade da história com os achados.',
        'Realize o exame físico completo da criança.',
        'Avalie os sinais de alerta para maus-tratos.',
        'Solicite os exames complementares pertinentes.',
        'Conduza a notificação compulsória e os encaminhamentos de proteção necessários.'
      ]
    },
    instB: {
      vitals: {
        PA: 'Não aferida de rotina nesta idade sem indicação específica',
        FC: '104 bpm',
        FR: '22 irpm',
        Tax: '36,6 °C',
        Peso: '16 kg (percentil compatível com a idade)'
      },
      physicalGeneral: 'Criança quieta, com pouco contato visual, comportamento retraído para a idade, não busca conforto ativamente no colo da mãe.',
      physicalSeg: 'PELE: equimoses em diferentes estágios de evolução (roxas recentes e amareladas mais antigas) em região glútea, dorso e face posterior de coxas — padrão incomum para quedas acidentais (áreas tipicamente protegidas em quedas); marcas lineares paralelas sugestivas de objeto (padrão compatível com uso de cinto ou similar) | Ausência de lesões em áreas ósseas proeminentes tipicamente afetadas em quedas acidentais (joelhos, cotovelos, testa) | Sem sinais de fratura óssea aparente ao exame.',
      labs: [
        { test: 'Radiografia de esqueleto (levantamento ósseo, "skeletal survey")', val: 'Fratura em consolidação de arco costal posterior (fratura antiga, de várias semanas), sem lesão aguda associada', ref: 'Ausência de fraturas', alt: true },
        { test: 'Coagulograma', val: 'Normal', ref: 'Normal (excluir discrasia sanguínea como causa alternativa de equimoses fáceis)', alt: false }
      ],
      note: 'A radiografia de esqueleto (skeletal survey) é exame padrão em suspeita de maus-tratos físicos em crianças pequenas, podendo revelar fraturas antigas não relatadas — deve ser solicitada mesmo sem sintomas ósseos agudos evidentes. O padrão de lesões em áreas tipicamente protegidas (glúteos, dorso, face posterior de coxas) e a presença de marcas lineares são achados de alto risco para maus-tratos, diferentes do padrão de quedas acidentais.',
      patientProfile: 'Criança de 4 anos, frequenta creche, mora com a mãe e o padrasto. Mãe relata que "ele é uma criança levada, vive caindo".',
      script: [
        { trigger: 'Relato da mãe (queixa inicial)', speech: 'Doutor(a), ele caiu da cama ontem à noite, é uma criança bem levada, sempre se machuca brincando.' },
        { trigger: 'Ao ser questionada sobre o mecanismo específico', speech: '(hesitante) Ah... eu não vi direito, ele estava no quarto sozinho, eu ouvi um barulho e fui ver.' },
        { trigger: 'Sobre outras lesões visíveis', speech: 'Ah, essas outras marcas... acho que foi também de outras quedas, ele é bem desastrado mesmo.' },
        { trigger: 'Se a criança for abordada diretamente, com linguagem apropriada para a idade', speech: '(criança, hesitante, olhando para a mãe antes de responder) Eu... caí...' },
        { trigger: 'Se questionado sobre o padrasto', speech: '(mãe, um pouco defensiva) Ele é bom com o L., não tem nada a ver com isso.' }
      ],
      hiddenInfo: 'A criança demonstra desconforto perceptível e retração quando o padrasto é mencionado, sem verbalizar diretamente acusação — comportamento não verbal a ser observado pelo examinador, não uma "revelação" espontânea | A professora da creche já havia relatado à mãe, em outra ocasião, ter notado hematomas nas costas da criança há cerca de 1 mês — informação que só é revelada se a mãe for questionada sobre relatos anteriores de terceiros (creche, familiares) sobre lesões | A fratura antiga de arco costal identificada na radiografia não tem explicação coerente por parte da mãe quando questionada — reforça a incompatibilidade entre história e achados',
      actorBehavior: 'A mãe se mostra inicialmente despreocupada, tentando minimizar e normalizar as lesões ("criança levada"), ficando defensiva se questionada de forma mais insistente sobre detalhes específicos ou sobre o padrasto. A criança (interpretada com comportamento retraído) responde de forma monossilábica e busca contato visual com a mãe antes de responder perguntas, sinal de possível coação/medo.'
    },
    instC: {
      diagnosis: 'Suspeita fundamentada de maus-tratos físicos infantis (violência física), sustentada por incompatibilidade entre a história relatada e o padrão das lesões encontradas, associada a achado de fratura costal antiga não relatada e comportamento infantil sugestivo.',
      differentials: [
        'Lesões acidentais verdadeiras (quedas comuns da infância) — entra como explicação mais comum para equimoses em crianças ativas; sai pela localização atípica das lesões (áreas tipicamente protegidas em quedas, como glúteos e dorso, em vez de proeminências ósseas como joelhos e testa) e pelo padrão linear sugestivo de objeto',
        'Discrasia sanguínea (púrpuras, coagulopatias) como causa de equimoses fáceis — entra como diagnóstico diferencial importante a ser sempre excluído; afastada pelo coagulograma normal, associado ao padrão de lesão e à fratura costal, mais compatíveis com trauma não acidental',
        'Osteogênese imperfeita ou outra doença óssea de fragilidade como causa de fratura com trauma mínimo — entra como diferencial de fratura em criança; deve ser considerada, mas o padrão associado de lesões cutâneas incompatíveis com a história torna maus-tratos a hipótese mais provável e prioritária a ser investigada',
        'Práticas culturais que deixam marcas na pele (não configurando maus-tratos na definição legal, dependendo do contexto) — devem ser diferenciadas caso a caso; neste caso, a presença de fratura costal e o padrão de lesões tornam maus-tratos físicos o diagnóstico mais provável, não uma prática cultural específica identificada'
      ],
      context: 'A suspeita de maus-tratos infantis exige atenção a sinais de alerta como: incompatibilidade entre a história relatada e o mecanismo/padrão da lesão, lesões em diferentes estágios de cicatrização, lesões em áreas atipicamente protegidas em acidentes comuns, atraso na busca de atendimento, mudanças frequentes de explicação, e comportamento da criança (retraimento, medo de determinado cuidador). O Estatuto da Criança e do Adolescente (ECA) e a legislação de notificação compulsória exigem que profissionais de saúde notifiquem suspeitas de maus-tratos, independentemente de certeza diagnóstica plena.',
      justify: 'A combinação de lesões cutâneas em padrão atípico para quedas acidentais (áreas glúteas e dorsais, tipicamente protegidas), marcas lineares sugestivas de objeto, achado radiológico de fratura costal antiga sem explicação coerente por parte do cuidador, e comportamento retraído da criança configura suspeita fundamentada de maus-tratos físicos, situação na qual a lei exige notificação compulsória independentemente de o médico ter certeza absoluta do diagnóstico — a obrigação legal é notificar a SUSPEITA, cabendo aos órgãos de proteção a investigação aprofundada.',
      expectedAnamnesis: 'Entrevistar o cuidador de forma cuidadosa, buscando detalhes específicos do mecanismo relatado e avaliando sua consistência/coerência | Perguntar sobre lesões anteriores e relatos de terceiros (escola, creche, familiares) | Sempre que possível e apropriado para a idade, tentar obter relato da própria criança, de forma separada e com linguagem adequada, evitando perguntas induzidas | Investigar dinâmica familiar e composição do domicílio',
      expectedPhysical: 'Exame físico completo, com a criança devidamente despida, documentando TODAS as lesões (localização, características, estágio de evolução aparente) | Avaliar padrão de distribuição das lesões (áreas protegidas x proeminências ósseas) | Observar comportamento da criança durante o exame e interação com o cuidador',
      expectedExams: [
        { exam: 'Radiografia de esqueleto (levantamento ósseo/"skeletal survey")', justify: 'Padrão em suspeita de maus-tratos em crianças pequenas, pode revelar fraturas antigas não relatadas', expected: 'Fratura costal em consolidação, sem explicação coerente' },
        { exam: 'Coagulograma', justify: 'Excluir discrasia sanguínea como causa alternativa de equimoses fáceis', expected: 'Normal, afastando essa causa alternativa' }
      ],
      expectedConduct: 'Farmacológica: tratamento sintomático das lesões conforme necessário | Não farmacológica: NOTIFICAÇÃO COMPULSÓRIA IMEDIATA ao Conselho Tutelar e à Vigilância Epidemiológica (Ficha de Notificação de Violência) diante da suspeita fundamentada, independentemente de certeza diagnóstica absoluta; considerar internação para proteção imediata da criança e investigação adicional, se avaliado risco iminente; acionar equipe de assistência social do hospital | Orientações à família: comunicar a necessidade de notificação de forma clara, sem acusações diretas, explicando que se trata de uma obrigação legal do médico diante de lesões que exigem esclarecimento adicional pelos órgãos competentes | Seguimento: articulação com Conselho Tutelar, Vara da Infância e Juventude conforme gravidade; acompanhamento pediátrico e, se confirmada a suspeita, encaminhamento para rede de proteção específica',
      expectedCommunication: 'Conduzir a entrevista com o cuidador de forma cuidadosa, sem acusações diretas nem confronto, mantendo postura profissional e observadora | Tentar, quando apropriado, conversar com a criança separadamente, com linguagem adequada à idade e sem induzir respostas | Comunicar a necessidade de notificação à família como obrigação legal, não como julgamento pessoal | Documentar objetivamente todos os achados e observações comportamentais',
      criticalErrors: [
        'Aceitar passivamente a explicação de "queda" sem avaliar a compatibilidade com o padrão das lesões encontradas',
        'Não solicitar radiografia de esqueleto diante de suspeita fundamentada de maus-tratos em criança pequena',
        'Não realizar a notificação compulsória ao Conselho Tutelar diante de suspeita fundamentada, aguardando "certeza absoluta"',
        'Confrontar diretamente e de forma acusatória o cuidador, comprometendo a investigação e a segurança da criança',
        'Não documentar objetivamente as lesões e observações comportamentais no prontuário'
      ]
    },
    instD: {
      title: 'CHECKLIST — CRIANÇA COM LESÕES INCOMPATÍVEIS COM A HISTÓRIA (SUSPEITA DE MAUS-TRATOS)',
      sections: [
        {
          h: 'BLOCO 1 — ABORDAGEM ÉTICA',
          items: [
            { item: 'Conduziu a entrevista com o cuidador sem confronto ou acusação direta', score: 1.0, ref: 'ECA (Lei 8.069/90)' },
            { item: 'Tentou obter relato da criança separadamente, com linguagem apropriada', score: 0.5, ref: 'ECA (Lei 8.069/90)' }
          ]
        },
        {
          h: 'BLOCO 2 — ANAMNESE',
          items: [
            { item: 'Avaliou a compatibilidade da história relatada com o padrão das lesões', score: 1.5, ref: 'Medicina Legal — Violência Infantil' },
            { item: 'Investigou relatos anteriores de terceiros (escola, familiares)', score: 0.5, ref: 'Medicina Legal — Violência Infantil' }
          ]
        },
        {
          h: 'BLOCO 3 — EXAME FÍSICO',
          items: [
            { item: 'Documentou todas as lesões e seu padrão de distribuição atípico', score: 1.5, ref: 'Medicina Legal — Violência Infantil' },
            { item: 'Observou o comportamento da criança durante o exame', score: 0.5, ref: 'Medicina Legal — Violência Infantil' }
          ]
        },
        {
          h: 'BLOCO 4 — INVESTIGAÇÃO',
          items: [
            { item: 'Solicitou radiografia de esqueleto (skeletal survey)', score: 1.5, ref: 'Medicina Legal — Violência Infantil' }
          ]
        },
        {
          h: 'BLOCO 5 — CONDUTA — NOTIFICAÇÃO',
          items: [
            { item: 'Realizou a notificação compulsória ao Conselho Tutelar diante da suspeita fundamentada', score: 1.5, ref: 'ECA Art. 13; Portaria de Notificação Compulsória' },
            { item: 'Considerou internação/proteção imediata diante do risco identificado', score: 0.5, ref: 'ECA (Lei 8.069/90)' }
          ]
        }
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // CASO 5 — SIGILO MÉDICO — LIMITES E QUEBRA JUSTIFICADA
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 5,
    title: 'Pai solicita informações sobre atendimento do filho adolescente',
    sub: 'Ambulatório — Clínica Geral',
    tema: 'Medicina Legal',
    topic: 'Sigilo Médico — Limites e Quebra Justificada',
    level: 'moderado',
    cardAccent: '#546E7A',
    instA: {
      scenario: 'Ambulatório de clínica geral, situação envolvendo solicitação de informações por terceiro.',
      patient: 'Cenário com dois personagens: T.A.R., 16 anos (paciente atendido anteriormente) e seu pai, que comparece à consulta seguinte solicitando informações.',
      complaint: 'O pai do adolescente, atendido pelo médico na semana anterior, comparece exigindo saber o que foi discutido na consulta do filho.',
      tasks: [
        'Conduza a interação com o pai de forma ética, sem violar o sigilo indevidamente.',
        'Avalie os limites do sigilo médico em relação a adolescentes.',
        'Identifique se há justificativa legal para quebra de sigilo neste caso específico.',
        'Comunique-se de forma clara sobre os princípios éticos envolvidos.',
        'Proponha uma conduta que equilibre autonomia do adolescente e envolvimento familiar apropriado.'
      ]
    },
    instB: {
      vitals: {
        PA: 'Não aplicável a este cenário',
        FC: 'Não aplicável',
        FR: 'Não aplicável'
      },
      physicalGeneral: 'Não aplicável — cenário de comunicação e ética médica, sem exame físico envolvido.',
      physicalSeg: 'Não aplicável.',
      labs: [],
      note: 'Este é um caso focado em raciocínio ético-legal e comunicação, não em exame físico ou exames complementares. O contexto da consulta anterior do adolescente (que o candidato deve ter registrado em prontuário fictício) envolvia queixas de ansiedade e uma pergunta sobre início de vida sexual/contracepção, sem risco de vida identificado.',
      patientProfile: 'T.A.R., 16 anos, estudante, atendido na semana anterior por queixas de ansiedade relacionada à escola, ocasião em que também fez perguntas sobre contracepção por estar iniciando a vida sexual, sem relatar nenhuma situação de risco grave (abuso, ideação suicida ativa, uso de substâncias ilícitas).',
      script: [
        { trigger: 'Fala inicial do pai', speech: 'Doutor(a), meu filho veio aqui semana passada e não quis me contar o que conversaram. Sou pai dele, tenho direito de saber, ele é menor de idade!' },
        { trigger: 'Se o médico explicar sobre sigilo', speech: '(insistente) Mas eu pago o plano de saúde dele, sou responsável legal! Isso não devia ser sigiloso para mim.' },
        { trigger: 'Se questionado sobre sua preocupação específica', speech: 'Ele anda estranho, mais fechado, tenho medo que seja alguma coisa grave, drogas ou algo assim. Só quero entender o que está acontecendo com meu filho.' },
        { trigger: 'Ao final, se abordado com empatia', speech: '(mais calmo) Entendo que tem essas regras, mas fico preocupado como pai, sabe?' }
      ],
      hiddenInfo: 'O adolescente, na consulta anterior, explicitamente pediu que as informações discutidas não fossem compartilhadas com os pais, especialmente a parte sobre contracepção — informação já registrada no prontuário do candidato (contexto do caso), não descoberta durante esta interação | Não há, no relato do pai ou nos registros da consulta anterior, nenhum indício de risco grave (ideação suicida, abuso, uso de drogas) que justificaria quebra de sigilo por proteção — a preocupação do pai é genuína mas não baseada em fatos concretos de risco',
      actorBehavior: 'O pai começa exigente e um pouco alterado, invocando sua autoridade parental e responsabilidade financeira. Gradualmente se acalma se o médico demonstrar escuta genuína de sua preocupação, mesmo mantendo a posição sobre o sigilo. Não deve ser hostil ao ponto de inviabilizar o diálogo, apenas firme em sua demanda inicial.'
    },
    instC: {
      diagnosis: 'Situação de conflito ético-legal envolvendo os limites do sigilo médico em atendimento a adolescente, sem justificativa legal para quebra de sigilo diante da ausência de risco grave identificado, exigindo comunicação hábil entre os princípios de autonomia do adolescente e legítima preocupação parental.',
      differentials: [
        'Não se aplica diagnóstico diferencial clínico — a tarefa central do candidato é o raciocínio ético-legal sobre os limites do sigilo médico em adolescentes e a comunicação apropriada com terceiros solicitantes de informação.'
      ],
      context: 'O Código de Ética Médica (CFM) e o Estatuto da Criança e do Adolescente reconhecem a capacidade progressiva do adolescente de exercer autonomia sobre questões de saúde, especialmente em temas sensíveis como saúde sexual e reprodutiva, saúde mental, e uso de substâncias — permitindo atendimento confidencial mesmo sem a presença ou conhecimento dos responsáveis legais, DESDE QUE o adolescente tenha capacidade de compreensão (discernimento) sobre a situação e não haja risco de vida ou dano grave a si ou a terceiros, situação que constitui exceção legítima ao sigilo.',
      justify: 'Neste caso, o conteúdo da consulta anterior (ansiedade relacionada à escola e dúvidas sobre contracepção por início de vida sexual) não configura risco grave à vida ou integridade do adolescente que justificasse quebra do sigilo médico. O pedido explícito do próprio adolescente para que as informações não fossem compartilhadas reforça o dever de sigilo do médico, que deve ser mantido mesmo diante da pressão e da legítima preocupação parental, sem que isso signifique negar a existência de uma consulta ou tratar o pai de forma desrespeitosa.',
      expectedAnamnesis: 'Não se aplica anamnese clínica tradicional — o "levantamento de dados" neste caso envolve identificar a natureza da preocupação do pai e avaliar, com base no conteúdo já registrado da consulta anterior, se há elementos que justificariam quebra de sigilo (risco de vida, abuso, violência)',
      expectedPhysical: 'Não se aplica exame físico neste cenário',
      expectedExams: [],
      expectedConduct: 'Farmacológica: não se aplica | Não farmacológica: manter o sigilo sobre o conteúdo específico da consulta do adolescente, incluindo a discussão sobre contracepção, dado que não há risco grave identificado que justifique exceção; pode-se confirmar, de forma genérica, que houve atendimento (sem necessariamente negar a existência da consulta, o que seria desnecessário e pouco transparente), mas sem detalhar o conteúdo | Orientações ao pai: explicar, de forma respeitosa, que adolescentes têm direito a atendimento confidencial em questões de saúde, especialmente temas sensíveis, como parte do reconhecimento de sua autonomia progressiva; acolher a preocupação genuína do pai como legítima, sugerindo abordagens alternativas (ex.: convidar o adolescente para uma consulta conjunta voluntária, sugerir diálogo familiar aberto, ou consulta própria do pai se ele estiver ansioso) | Seguimento: encorajar, na próxima consulta com o adolescente, a explorar se ele estaria disposto a compartilhar alguma informação com os pais, sem forçar essa decisão',
      expectedCommunication: 'Comunicar os limites do sigilo médico de forma clara, mas empática, validando a preocupação legítima do pai sem ceder à pressão para revelar informações protegidas | Evitar postura defensiva ou confrontadora | Oferecer alternativas construtivas (consulta conjunta voluntária, diálogo familiar) sem prometer revelar informações sigilosas | Manter respeito e acolhimento durante toda a interação, mesmo diante da insistência inicial',
      criticalErrors: [
        'Revelar o conteúdo específico da consulta do adolescente (incluindo a discussão sobre contracepção) ao pai sem justificativa legal para tal',
        'Negar categoricamente e de forma hostil qualquer informação ao pai, sem acolher sua preocupação legítima',
        'Não reconhecer a autonomia progressiva do adolescente em questões de saúde sexual e reprodutiva',
        'Ceder à pressão do pai "porque ele paga o plano de saúde" ou "é responsável legal", argumentos que não se sobrepõem ao sigilo médico na ausência de risco grave',
        'Não oferecer nenhuma alternativa construtiva para lidar com a preocupação parental'
      ]
    },
    instD: {
      title: 'CHECKLIST — SOLICITAÇÃO DE INFORMAÇÕES SOBRE ATENDIMENTO DE ADOLESCENTE (SIGILO MÉDICO)',
      sections: [
        {
          h: 'BLOCO 1 — COMUNICAÇÃO E ACOLHIMENTO',
          items: [
            { item: 'Acolheu a preocupação do pai sem postura defensiva ou hostil', score: 1.0, ref: 'CFM Res. 2.217/2018' },
            { item: 'Manteve respeito durante toda a interação, mesmo diante de insistência', score: 0.5, ref: 'CFM Res. 2.217/2018' }
          ]
        },
        {
          h: 'BLOCO 2 — RACIOCÍNIO ÉTICO-LEGAL',
          items: [
            { item: 'Reconheceu a autonomia progressiva do adolescente em saúde sexual/reprodutiva', score: 1.5, ref: 'CFM Res. 2.217/2018; ECA' },
            { item: 'Avaliou corretamente que não havia risco grave que justificasse quebra de sigilo', score: 1.5, ref: 'CFM Res. 2.217/2018 — Art. 73' }
          ]
        },
        {
          h: 'BLOCO 3 — CONDUTA — SIGILO',
          items: [
            { item: 'NÃO revelou o conteúdo específico da consulta do adolescente', score: 1.5, ref: 'CFM Res. 2.217/2018 — Art. 73' }
          ]
        },
        {
          h: 'BLOCO 4 — CONDUTA — ALTERNATIVAS CONSTRUTIVAS',
          items: [
            { item: 'Ofereceu alternativas construtivas (consulta conjunta voluntária, diálogo familiar)', score: 1.0, ref: 'CFM Res. 2.217/2018' }
          ]
        },
        {
          h: 'BLOCO 5 — ENCERRAMENTO',
          items: [
            { item: 'Explicou os limites do sigilo de forma clara e didática', score: 1.0, ref: 'CFM Res. 2.217/2018' }
          ]
        }
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // CASO 6 — ACIDENTE DE TRABALHO E EMISSÃO DE CAT
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 6,
    title: 'Trabalhador com corte profundo na mão durante o expediente',
    sub: 'PS — Pronto-Socorro',
    tema: 'Medicina Legal',
    topic: 'Acidente de Trabalho — Emissão de CAT',
    level: 'moderado',
    cardAccent: '#546E7A',
    instA: {
      scenario: 'Pronto-Socorro, trabalhador trazido por colega após acidente em máquina industrial.',
      patient: 'J.C.R., 35 anos, masculino, operador de máquinas em fábrica metalúrgica.',
      complaint: 'Corte profundo na mão direita ao operar máquina de corte, ocorrido durante o expediente há cerca de 40 minutos.',
      tasks: [
        'Realize a anamnese dirigida ao acidente, com detalhamento circunstancial.',
        'Realize o exame físico da lesão e avalie a gravidade funcional.',
        'Determine a conduta clínica imediata para a lesão.',
        'Avalie a caracterização do evento como acidente de trabalho e a necessidade de emissão de CAT.',
        'Oriente o trabalhador sobre seus direitos previdenciários e trabalhistas.'
      ]
    },
    instB: {
      vitals: {
        PA: '132/84 mmHg',
        FC: '98 bpm',
        FR: '18 irpm',
        Tax: '36,5 °C',
        SpO2: '98%'
      },
      physicalGeneral: 'Bom estado geral, ansioso, com curativo compressivo improvisado na mão direita, dor evidente.',
      physicalSeg: 'MÃO DIREITA: laceração profunda na face palmar, atingindo região tenar, com sangramento controlado pelo curativo compressivo; avaliação de sensibilidade e função tendínea limitada pela dor no momento, mas com suspeita de comprometimento de estruturas tendíneas pela profundidade e localização do ferimento | Pulsos radial e ulnar presentes | Perfusão distal preservada nos dedos.',
      labs: [
        { test: 'Radiografia de mão direita', val: 'Sem fratura óssea associada', ref: 'Sem fratura', alt: false }
      ],
      note: 'A exploração cirúrgica da ferida (a ser realizada por especialista) determinará com precisão o comprometimento de estruturas tendíneas/nervosas — o candidato não precisa diagnosticar isso definitivamente, mas deve reconhecer a suspeita e encaminhar adequadamente. O foco central deste caso é a caracterização do acidente de trabalho e a orientação sobre a CAT, não apenas o manejo cirúrgico da lesão.',
      patientProfile: 'Operador de máquinas há 8 anos na mesma fábrica, contratação em regime CLT, refere que o equipamento de proteção individual (protetor de mão da máquina) estava com defeito havia alguns dias, já reportado à supervisão sem providências.',
      script: [
        { trigger: 'Queixa principal', speech: 'Doutor(a), cortei a mão bem fundo numa máquina de corte lá na fábrica, agora há pouco, durante o meu turno.' },
        { trigger: 'Sobre o mecanismo do acidente', speech: 'A máquina tem uma proteção que estava quebrada há uns dias, eu já tinha avisado o supervisor, mas não consertaram ainda. Hoje minha mão escorregou e bateu na lâmina.' },
        { trigger: 'Sobre o vínculo empregatício', speech: 'Trabalho lá tem uns 8 anos, sou registrado, CLT mesmo.' },
        { trigger: 'Sobre a comunicação à empresa', speech: 'Meu colega já avisou o supervisor que eu vim para cá, mas não sei se eles vão preencher aquele papel do acidente.' },
        { trigger: 'Pergunta ativa — direitos', speech: 'Doutor(a), eu vou poder ficar afastado recebendo? Isso conta como acidente de trabalho mesmo, mesmo eu tendo tropeçado?' }
      ],
      hiddenInfo: 'A empresa tem histórico de atrasar ou dificultar a emissão de CAT em casos anteriores, segundo relato do próprio paciente — só revela essa informação se perguntado sobre experiências anteriores de colegas com acidentes de trabalho na mesma empresa | Está preocupado que, por ter havido "um deslize seu" (mão escorregou), a empresa tente alegar que a culpa foi exclusivamente dele para não reconhecer o acidente — só revela essa preocupação se o candidato explorar o entendimento do paciente sobre acidente de trabalho',
      actorBehavior: 'Ansioso com a dor e com a situação financeira/trabalhista, fala rapidamente sobre as circunstâncias do acidente. Demonstra desconhecimento sobre seus direitos relacionados à CAT, fazendo perguntas diretas sobre isso.'
    },
    instC: {
      diagnosis: 'Laceração profunda em mão direita com suspeita de lesão tendínea associada, configurando acidente de trabalho típico (ocorrido durante o exercício da atividade laboral, no local e horário de trabalho), com indicação formal de emissão de Comunicação de Acidente de Trabalho (CAT).',
      differentials: [
        'Não se aplica diagnóstico diferencial clínico clássico quanto à causa da lesão (mecanismo claro e presenciado) — a tarefa central do candidato envolve tanto o manejo clínico adequado da lesão quanto o correto reconhecimento e encaminhamento da caracterização legal do acidente de trabalho.'
      ],
      context: 'Acidente de trabalho, conforme a legislação previdenciária brasileira (Lei 8.213/91), é aquele que ocorre pelo exercício do trabalho a serviço da empresa, provocando lesão corporal ou perturbação funcional que cause a morte, perda ou redução da capacidade para o trabalho, permanente ou temporária. A emissão da CAT é obrigação legal da empresa (podendo ser preenchida pelo próprio trabalhador, sindicato, médico assistente ou qualquer autoridade pública na omissão da empresa) e não depende de definição de "culpa" do trabalhador — mesmo um "deslize" durante a atividade laboral normal caracteriza acidente de trabalho típico.',
      justify: 'O evento caracteriza-se como acidente de trabalho típico por ter ocorrido durante o exercício da atividade laboral, no local e horário de trabalho, com nexo causal direto e evidente entre a lesão e a atividade exercida (operação de máquina de corte). A alegação de "deslize" do próprio trabalhador NÃO descaracteriza o acidente de trabalho nem exime a necessidade de emissão da CAT — a legislação previdenciária não exige ausência de qualquer contribuição do trabalhador para o evento, bastando o nexo com a atividade laboral.',
      expectedAnamnesis: 'Detalhar as circunstâncias do acidente (local, horário, mecanismo, atividade sendo exercida no momento) | Investigar vínculo empregatício (CLT, autônomo, etc. — relevante para os direitos aplicáveis) | Perguntar se a empresa já foi comunicada e se há indicativo de emissão da CAT | Investigar condições de segurança do trabalho (EPI, manutenção de equipamentos)',
      expectedPhysical: 'Avaliação detalhada da lesão (profundidade, extensão, estruturas potencialmente comprometidas) | Avaliação de sensibilidade e função motora/tendínea, na medida do possível diante da dor aguda | Avaliação de pulsos e perfusão distal',
      expectedExams: [
        { exam: 'Radiografia da região afetada', justify: 'Excluir fratura óssea associada', expected: 'Sem fratura neste caso' },
        { exam: 'Avaliação especializada (cirurgia da mão/ortopedia) para exploração da ferida', justify: 'Avaliar comprometimento de estruturas tendíneas/nervosas, suspeitado pela localização e profundidade da lesão', expected: 'A confirmar por exploração cirúrgica' }
      ],
      expectedConduct: 'Farmacológica: analgesia adequada; profilaxia antitetânica conforme situação vacinal; antibioticoprofilaxia conforme protocolo de ferimentos contaminados, se indicado | Não farmacológica: encaminhamento para avaliação especializada (cirurgia da mão) diante de suspeita de lesão tendínea; curativo/sutura conforme avaliação | Orientações ao paciente: explicar que o evento se caracteriza como acidente de trabalho típico, independentemente de eventual "deslize" próprio, e que isso NÃO precisa ser atribuído à empresa exclusivamente para caracterização legal; explicar que a CAT é obrigação da empresa, mas que pode ser emitida pelo próprio trabalhador, sindicato ou mesmo pelo médico assistente caso a empresa se omita; orientar sobre os direitos previdenciários decorrentes (auxílio-doença acidentário se afastamento superior a 15 dias, estabilidade provisória no emprego por 12 meses após o retorno, conforme legislação) | Seguimento: acompanhamento com especialista para a lesão; orientar sobre onde buscar apoio caso a empresa dificulte a emissão da CAT (sindicato, Ministério do Trabalho, próprio médico assistente pode emitir)',
      expectedCommunication: 'Explicar de forma clara e acessível os direitos do trabalhador relacionados ao acidente de trabalho, sem tecnicismo excessivo | Esclarecer que a "culpa" pelo deslize não compromete a caracterização do acidente de trabalho | Acolher a ansiedade do paciente quanto à situação financeira/trabalhista | Orientar sobre os passos práticos caso a empresa não emita a CAT espontaneamente',
      criticalErrors: [
        'Não reconhecer o evento como acidente de trabalho típico por ter havido "deslize" do próprio trabalhador',
        'Não orientar sobre a possibilidade de o próprio médico assistente emitir a CAT caso a empresa se omita',
        'Não avaliar adequadamente a suspeita de lesão tendínea associada à laceração profunda',
        'Não orientar sobre profilaxia antitetânica em ferimento com esse mecanismo',
        'Não informar sobre os direitos previdenciários básicos decorrentes do acidente de trabalho (afastamento acidentário, estabilidade)'
      ]
    },
    instD: {
      title: 'CHECKLIST — ACIDENTE DE TRABALHO COM LESÃO EM MÃO (CAT)',
      sections: [
        {
          h: 'BLOCO 1 — COMUNICAÇÃO E ORIENTAÇÃO',
          items: [
            { item: 'Explicou os direitos do trabalhador de forma clara e acessível', score: 0.5, ref: 'Lei 8.213/91' },
            { item: 'Acolheu a ansiedade do paciente quanto à situação trabalhista', score: 0.5, ref: 'CFM Res. 2.217/2018' }
          ]
        },
        {
          h: 'BLOCO 2 — ANAMNESE',
          items: [
            { item: 'Detalhou as circunstâncias do acidente (local, horário, mecanismo)', score: 0.5, ref: 'Lei 8.213/91' },
            { item: 'Investigou o vínculo empregatício e condições de segurança do trabalho', score: 0.5, ref: 'Lei 8.213/91' }
          ]
        },
        {
          h: 'BLOCO 3 — EXAME FÍSICO E CONDUTA CLÍNICA',
          items: [
            { item: 'Avaliou adequadamente a lesão e suspeitou de comprometimento tendíneo', score: 1.0, ref: 'Medicina Legal — Traumatologia Forense' },
            { item: 'Orientou profilaxia antitetânica', score: 0.5, ref: 'Ministério da Saúde' }
          ]
        },
        {
          h: 'BLOCO 4 — RACIOCÍNIO LEGAL',
          items: [
            { item: 'Reconheceu o evento como acidente de trabalho típico, mesmo com "deslize" do trabalhador', score: 1.5, ref: 'Lei 8.213/91 Art. 19' }
          ]
        },
        {
          h: 'BLOCO 5 — CONDUTA — CAT',
          items: [
            { item: 'Orientou sobre a possibilidade de o médico assistente emitir a CAT diante de omissão da empresa', score: 1.5, ref: 'Lei 8.213/91 Art. 22' },
            { item: 'Informou sobre direitos previdenciários (auxílio-doença acidentário, estabilidade)', score: 1.0, ref: 'Lei 8.213/91' }
          ]
        }
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // CASO 7 — ATESTADO MÉDICO — ELABORAÇÃO CORRETA
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 7,
    title: 'Paciente solicita atestado retroativo sem ter sido examinado no dia',
    sub: 'UBS — Atenção Primária',
    tema: 'Medicina Legal',
    topic: 'Atestado Médico — Elaboração Correta',
    level: 'moderado',
    cardAccent: '#546E7A',
    instA: {
      scenario: 'Consulta na UBS, paciente solicita documento específico além do atendimento clínico de rotina.',
      patient: 'G.M.O., 29 anos, masculino, auxiliar administrativo.',
      complaint: 'Vem à consulta por resfriado leve, mas solicita atestado retroativo cobrindo também um dia da semana anterior em que faltou ao trabalho sem justificativa médica.',
      tasks: [
        'Realize a anamnese e o exame físico dirigidos à queixa atual.',
        'Avalie a real necessidade de afastamento e por quanto tempo.',
        'Identifique o pedido de atestado retroativo e avalie sua legitimidade.',
        'Elabore o atestado de forma tecnicamente e eticamente correta.',
        'Comunique-se adequadamente com o paciente sobre os limites éticos da solicitação.'
      ]
    },
    instB: {
      vitals: {
        PA: '118/76 mmHg',
        FC: '78 bpm',
        FR: '16 irpm',
        Tax: '37,2 °C',
        SpO2: '98%'
      },
      physicalGeneral: 'Bom estado geral, leve coriza, sem sinais de toxemia.',
      physicalSeg: 'OROFARINGE: discreta hiperemia, sem exsudato | RESPIRATÓRIO: ausculta pulmonar sem alterações | Sem outros achados relevantes, compatível com resfriado comum leve.',
      labs: [],
      note: 'Este caso não envolve exames complementares relevantes — o quadro clínico atual é leve e autolimitado (resfriado comum), sem necessidade de afastamento prolongado. O foco central é a conduta ética diante da solicitação de atestado retroativo.',
      patientProfile: 'Auxiliar administrativo, refere ter faltado ao trabalho na sexta-feira da semana anterior "porque não estava se sentindo bem", mas não procurou atendimento médico na ocasião.',
      script: [
        { trigger: 'Queixa principal', speech: 'Doutor(a), estou com um resfriado leve, coriza e um pouco de dor de garganta desde ontem.' },
        { trigger: 'Sobre o pedido de atestado retroativo', speech: 'Ah, já que estou aqui, o senhor(a) pode fazer o atestado cobrindo também a sexta-feira passada? Eu faltei porque também não estava bem, só não vim ao médico na hora.' },
        { trigger: 'Se questionado sobre por que não buscou atendimento na sexta', speech: 'Ah, achei que ia passar sozinho, fiquei em casa descansando, não achei necessário vir ao médico naquele dia.' },
        { trigger: 'Se o médico explicar que não pode atestar retroativamente sem ter examinado', speech: '(insistente) Mas é só um dia, doutor(a)! Vai fazer muita diferença para mim no trabalho, eles são bem rígidos com falta.' },
        { trigger: 'Pergunta ativa sobre o atestado do dia atual', speech: 'E hoje, o senhor(a) vai me dar quantos dias de atestado?' }
      ],
      hiddenInfo: 'O paciente já teve um episódio anterior de solicitação semelhante em outra unidade de saúde, tendo sido negado pelo profissional na ocasião — só revela essa informação se perguntado sobre experiências anteriores com pedidos de atestado | Está preocupado com possíveis consequências disciplinares no trabalho pela falta não justificada da sexta-feira anterior — só revela essa preocupação específica se o candidato explorar o motivo da insistência',
      actorBehavior: 'Inicialmente natural ao relatar o resfriado atual, tornando-se insistente e um pouco pressionador ao solicitar o atestado retroativo, buscando minimizar a gravidade do pedido ("é só um dia"). Pode ficar levemente frustrado com a negativa, mas não deve se tornar hostil.'
    },
    instC: {
      diagnosis: 'Resfriado comum (infecção viral de vias aéreas superiores), quadro leve e autolimitado, sem necessidade de afastamento prolongado; associado a solicitação inadequada de atestado retroativo para dia não examinado pelo médico, situação com implicação ético-legal (risco de caracterização de falsidade ideológica em documento).',
      differentials: [
        'Não se aplica diagnóstico diferencial relevante quanto à queixa clínica atual (resfriado comum é diagnóstico clínico direto) — a tarefa central deste caso está no raciocínio ético sobre a elaboração correta de atestados médicos, não em diagnóstico diferencial de doença.'
      ],
      context: 'O atestado médico é um documento de fé pública que declara, com base em exame clínico realizado pelo próprio médico emitente, a condição de saúde do paciente e a necessidade de afastamento de suas atividades. A emissão de atestado retroativo, cobrindo período em que o paciente não foi examinado, constitui prática eticamente inadequada e potencialmente ilegal (podendo configurar falsidade ideológica), pois o médico não tem como atestar, com base em exame direto, uma condição clínica de um dia em que não houve avaliação médica.',
      justify: 'O atestado médico deve refletir exclusivamente a avaliação clínica realizada no momento da consulta, não podendo ser retroagido para cobrir período anterior não examinado, independentemente da plausibilidade do relato do paciente sobre ter estado mal naquele dia. Atender a esse pedido exporia o médico a risco ético (violação do Código de Ética Médica) e legal (possível caracterização de falsidade ideológica, Art. 299 do Código Penal), sendo dever do médico recusar o pedido de forma clara, ainda que empática.',
      expectedAnamnesis: 'Caracterizar a queixa atual (resfriado) e sua evolução | Identificar claramente o pedido de atestado retroativo e sua justificativa | Perguntar sobre o motivo de não ter buscado atendimento médico no dia da falta anterior',
      expectedPhysical: 'Exame físico dirigido à queixa atual (orofaringe, ausculta pulmonar), suficiente para avaliar a necessidade de afastamento no dia presente',
      expectedExams: [],
      expectedConduct: 'Farmacológica: tratamento sintomático para o resfriado comum (analgésico/antitérmico se necessário), sem necessidade de antibiótico | Não farmacológica: emitir atestado APENAS para o dia da consulta atual (e, se clinicamente justificado pela avaliação do dia, eventual período adicional prospectivo, nunca retroativo), refletindo exclusivamente o que foi examinado; RECUSAR o pedido de atestado retroativo para o dia não examinado | Orientações ao paciente: explicar de forma clara e didática por que não é possível atestar retroativamente um dia em que não houve exame médico, situando isso como uma questão de integridade profissional e legal, não como desconfiança pessoal do relato do paciente; orientar que, para futuras faltas por motivo de saúde, procure atendimento médico no próprio dia sempre que possível | Seguimento: não há necessidade de seguimento específico para o quadro leve atual',
      expectedCommunication: 'Explicar a recusa ao atestado retroativo de forma didática e não acusatória, evitando fazer o paciente sentir-se desconfiado de estar mentindo, mas sendo claro sobre a impossibilidade técnica/ética de atestar sem exame | Manter a relação médico-paciente respeitosa mesmo diante da insistência | Explicar claramente o que pode e o que não pode ser feito em relação ao atestado do dia atual',
      criticalErrors: [
        'Emitir atestado retroativo cobrindo o dia em que o paciente não foi examinado',
        'Recusar o pedido de forma rude ou acusatória, prejudicando a relação médico-paciente desnecessariamente',
        'Não explicar ao paciente o motivo ético-legal da recusa',
        'Emitir atestado com período de afastamento não compatível com a gravidade real do quadro clínico atual (leve e autolimitado)',
        'Ceder à pressão do paciente ("é só um dia") comprometendo a integridade profissional'
      ]
    },
    instD: {
      title: 'CHECKLIST — SOLICITAÇÃO DE ATESTADO RETROATIVO',
      sections: [
        {
          h: 'BLOCO 1 — COMUNICAÇÃO',
          items: [
            { item: 'Explicou a recusa de forma didática e não acusatória', score: 1.0, ref: 'CFM Res. 2.217/2018' },
            { item: 'Manteve a relação médico-paciente respeitosa diante da insistência', score: 0.5, ref: 'CFM Res. 2.217/2018' }
          ]
        },
        {
          h: 'BLOCO 2 — ANAMNESE',
          items: [
            { item: 'Caracterizou adequadamente a queixa clínica atual', score: 0.5, ref: 'Medicina Legal — Documentos Médicos' },
            { item: 'Identificou claramente o pedido de atestado retroativo', score: 0.5, ref: 'Medicina Legal — Documentos Médicos' }
          ]
        },
        {
          h: 'BLOCO 3 — EXAME FÍSICO',
          items: [
            { item: 'Realizou exame físico dirigido suficiente para avaliar a queixa atual', score: 0.5, ref: 'Medicina Legal — Documentos Médicos' }
          ]
        },
        {
          h: 'BLOCO 4 — RACIOCÍNIO ÉTICO-LEGAL',
          items: [
            { item: 'Reconheceu a inadequação ético-legal do atestado retroativo', score: 1.5, ref: 'CFM Res. 2.217/2018; Código Penal Art. 299' }
          ]
        },
        {
          h: 'BLOCO 5 — CONDUTA',
          items: [
            { item: 'NÃO emitiu o atestado retroativo', score: 2.0, ref: 'CFM Res. 2.217/2018' },
            { item: 'Emitiu atestado apropriado apenas para o quadro/dia efetivamente examinado', score: 0.5, ref: 'CFM Res. 2.217/2018' }
          ]
        }
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // CASO 8 — RECUSA DE TRATAMENTO E CONSENTIMENTO INFORMADO
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 8,
    title: 'Paciente Testemunha de Jeová recusa transfusão sanguínea',
    sub: 'PS — Pronto-Socorro',
    tema: 'Medicina Legal',
    topic: 'Recusa de Tratamento e Consentimento Informado',
    level: 'difícil',
    cardAccent: '#546E7A',
    instA: {
      scenario: 'Pronto-Socorro, paciente com sangramento significativo recusa transfusão sanguínea por convicção religiosa.',
      patient: 'A.L.F., 45 anos, feminino, professora, Testemunha de Jeová, com hemorragia digestiva alta.',
      complaint: 'Sangramento digestivo importante, com indicação clínica de transfusão sanguínea, que a paciente recusa por motivos religiosos.',
      tasks: [
        'Realize a avaliação clínica e reconheça a gravidade do quadro e a indicação de transfusão.',
        'Conduza o diálogo sobre a recusa de tratamento com respeito à autonomia da paciente.',
        'Avalie a capacidade de decisão da paciente e a validade de sua recusa informada.',
        'Explore alternativas terapêuticas disponíveis, quando existentes.',
        'Documente adequadamente o processo de decisão compartilhada e a recusa formal.'
      ]
    },
    instB: {
      vitals: {
        PA: '98/62 mmHg',
        FC: '112 bpm',
        FR: '20 irpm',
        Tax: '36,4 °C',
        SpO2: '96%'
      },
      physicalGeneral: 'Regular estado geral, consciente, orientada, pálida, mas plenamente lúcida e capaz de comunicar suas decisões de forma clara e consistente.',
      physicalSeg: 'ABDOME: discretamente doloroso em epigástrio, sem sinais de irritação peritoneal | CARDIOVASCULAR: taquicárdica, bulhas normofonéticas | Sinais de palidez cutâneo-mucosa importante, compatível com anemia aguda.',
      labs: [
        { test: 'Hemoglobina', val: '6,8 g/dL', ref: '12,0–15,5 g/dL', alt: true },
        { test: 'Hematócrito', val: '21%', ref: '36–46%', alt: true }
      ],
      note: 'A paciente apresenta um documento (Diretiva Antecipada de Vontade / cartão de recusa de transfusão) já preenchido previamente, que deve ser considerado pelo candidato como válido se apresentado — reforçar essa informação caso o candidato pergunte sobre documentação prévia relacionada às suas convicções.',
      patientProfile: 'Professora, casada, membro ativa da comunidade de Testemunhas de Jeová há muitos anos, já havia formalizado previamente, por escrito, sua recusa a hemotransfusões em qualquer circunstância, incluindo risco de morte.',
      script: [
        { trigger: 'Ao ser informada sobre a indicação de transfusão', speech: 'Doutor(a), eu já sabia que isso poderia ser necessário, mas preciso dizer com toda clareza: eu não aceito transfusão de sangue, é uma questão da minha fé, minha decisão está bem pensada.' },
        { trigger: 'Se questionada sobre a compreensão dos riscos', speech: 'Sim, eu entendo que posso morrer sem a transfusão. Já pensei muito sobre isso, tenho até um documento assinado sobre minha vontade.' },
        { trigger: 'Sobre alternativas', speech: 'Eu aceito outros tratamentos, como reposição de ferro, medicamentos para estancar o sangramento, até procedimentos cirúrgicos se necessário — só não aceito sangue ou hemocomponentes.' },
        { trigger: 'Se a família for mencionada/questionada', speech: 'Minha família sabe da minha decisão e me apoia, isso já foi conversado entre nós há muito tempo.' },
        { trigger: 'Pergunta ativa — validade da decisão', speech: 'Doutor(a), o senhor(a) vai respeitar minha decisão mesmo assim, certo? Isso é um direito meu.' }
      ],
      hiddenInfo: 'A paciente trouxe consigo o documento de Diretiva Antecipada de Vontade, assinado e datado há 2 anos, especificando claramente a recusa a hemotransfusões — só é apresentado se o candidato perguntar sobre documentação formal da vontade da paciente | Está preocupada que a equipe médica possa transfundir "escondido" em caso de perda de consciência, temor que verbaliza se o tema da urgência/inconsciência for abordado — deve ser tranquilizada de que sua vontade documentada será respeitada mesmo se ela perder a capacidade de comunicá-la posteriormente',
      actorBehavior: 'Calma, articulada e firme em sua decisão, demonstrando compreensão clara dos riscos envolvidos. Não é uma recusa impulsiva ou baseada em desinformação — é uma decisão refletida e consistente com suas convicções de longa data. Coopera com todos os demais aspectos do tratamento.'
    },
    instC: {
      diagnosis: 'Hemorragia digestiva alta com anemia aguda significativa (Hb 6,8 g/dL), com indicação clínica de hemotransfusão formalmente recusada pela paciente, capaz e informada, por convicção religiosa (Testemunha de Jeová), documentada previamente por escrito.',
      differentials: [
        'Não se aplica diagnóstico diferencial clínico quanto à causa do sangramento (a ser investigada por endoscopia digestiva) — a tarefa central deste caso é o raciocínio ético-legal sobre os limites da autonomia do paciente frente à recusa de tratamento com risco de morte.'
      ],
      context: 'A autonomia do paciente é um dos pilares fundamentais da bioética e é reconhecida juridicamente no Brasil, incluindo o direito à recusa de tratamentos médicos, mesmo diante de risco de morte, desde que o paciente seja capaz (com discernimento pleno para a decisão), tenha sido adequadamente informado sobre os riscos de sua recusa, e a decisão seja livre e consistente. O caso de Testemunhas de Jeová recusando hemotransfusão é o exemplo clássico e amplamente reconhecido na literatura médico-legal e em resoluções do CFM sobre o respeito à autonomia do paciente adulto e capaz.',
      justify: 'A paciente demonstra plena capacidade de decisão (consciente, orientada, articulada), foi adequadamente informada sobre os riscos de sua recusa (incluindo risco de morte, que ela expressamente reconhece compreender), sua decisão é consistente com convicções de longa data e está documentada formalmente por escrito (diretiva antecipada de vontade), preenchendo os critérios para uma recusa de tratamento válida e que deve ser respeitada pela equipe médica, que deve oferecer todas as alternativas terapêuticas disponíveis que não envolvam hemocomponentes.',
      expectedAnamnesis: 'Confirmar a compreensão da paciente sobre sua condição clínica e os riscos da recusa | Perguntar sobre documentação formal prévia da vontade (diretiva antecipada) | Explorar quais alternativas terapêuticas a paciente aceitaria | Avaliar consistência e firmeza da decisão ao longo da conversa',
      expectedPhysical: 'Avaliação do nível de consciência e capacidade de comunicação/compreensão da paciente | Sinais vitais e sinais de gravidade da anemia aguda',
      expectedExams: [
        { exam: 'Hemoglobina/hematócrito seriados', justify: 'Monitorar a evolução da anemia para orientar as alternativas terapêuticas não transfusionais disponíveis', expected: 'Anemia importante a ser acompanhada' },
        { exam: 'Endoscopia digestiva alta', justify: 'Identificar e tratar a fonte do sangramento por métodos não transfusionais (hemostasia endoscópica)', expected: 'A realizar para diagnóstico e tratamento da causa do sangramento' }
      ],
      expectedConduct: 'Farmacológica: reposição de ferro (oral ou endovenoso, aceito pela paciente); medicações para redução do sangramento (ex.: inibidor de bomba de prótons em altas doses para HDA); eritropoetina pode ser considerada em alguns protocolos de manejo sem sangue | Não farmacológica: oferecer e realizar TODAS as alternativas terapêuticas não transfusionais disponíveis e aceitas pela paciente (hemostasia endoscópica, procedimentos cirúrgicos se necessário, técnicas de recuperação intraoperatória de células quando aplicável e aceitas); respeitar integralmente a recusa à hemotransfusão | Orientações à paciente: confirmar verbalmente e documentar por escrito a recusa informada, após certificação de que a paciente compreende plenamente os riscos; tranquilizá-la de que sua vontade documentada (diretiva antecipada) será respeitada mesmo que ela perca a capacidade de comunicação posteriormente | Documentação: registrar detalhadamente no prontuário o processo de esclarecimento, a compreensão demonstrada pela paciente, e formalizar a recusa (termo de recusa de tratamento assinado pela paciente, quando possível) | Seguimento: manter acompanhamento clínico intensivo com as alternativas terapêuticas disponíveis',
      expectedCommunication: 'Conduzir a conversa sobre a recusa com respeito, sem tentar coagir ou pressionar a paciente a mudar de decisão | Explicar claramente os riscos da recusa, garantindo que a decisão seja verdadeiramente informada | Explorar ativamente quais alternativas terapêuticas seriam aceitáveis para a paciente | Documentar cuidadosamente todo o processo de decisão compartilhada',
      criticalErrors: [
        'Não respeitar a recusa de tratamento de uma paciente capaz e adequadamente informada, realizando transfusão contra sua vontade explícita',
        'Não avaliar adequadamente a capacidade de decisão e a compreensão da paciente sobre os riscos antes de aceitar a recusa',
        'Não oferecer/explorar alternativas terapêuticas não transfusionais disponíveis',
        'Não documentar adequadamente o processo de esclarecimento e a recusa formal no prontuário',
        'Pressionar ou tentar coagir a paciente a aceitar a transfusão contra sua convicção religiosa e vontade expressa'
      ]
    },
    instD: {
      title: 'CHECKLIST — RECUSA DE TRANSFUSÃO SANGUÍNEA POR CONVICÇÃO RELIGIOSA',
      sections: [
        {
          h: 'BLOCO 1 — COMUNICAÇÃO E RESPEITO À AUTONOMIA',
          items: [
            { item: 'Conduziu a conversa sobre a recusa com respeito, sem coagir a paciente', score: 1.5, ref: 'CFM Res. 2.217/2018 — Autonomia do Paciente' },
            { item: 'Explicou claramente os riscos da recusa, garantindo decisão informada', score: 1.0, ref: 'CFM Res. 2.217/2018' }
          ]
        },
        {
          h: 'BLOCO 2 — AVALIAÇÃO DA CAPACIDADE DE DECISÃO',
          items: [
            { item: 'Avaliou a capacidade de decisão e compreensão da paciente', score: 1.0, ref: 'CFM Res. 2.217/2018' },
            { item: 'Perguntou sobre documentação formal prévia (diretiva antecipada)', score: 0.5, ref: 'CFM Res. 1.995/2012 — Diretivas Antecipadas de Vontade' }
          ]
        },
        {
          h: 'BLOCO 3 — EXPLORAÇÃO DE ALTERNATIVAS',
          items: [
            { item: 'Explorou e ofereceu alternativas terapêuticas não transfusionais', score: 1.5, ref: 'CFM Res. 2.217/2018' }
          ]
        },
        {
          h: 'BLOCO 4 — CONDUTA — RESPEITO À RECUSA',
          items: [
            { item: 'Respeitou integralmente a recusa à transfusão, sem impor o tratamento', score: 2.0, ref: 'CFM Res. 2.217/2018 — Art. 24' }
          ]
        },
        {
          h: 'BLOCO 5 — DOCUMENTAÇÃO',
          items: [
            { item: 'Documentou adequadamente o processo de esclarecimento e a recusa formal', score: 1.0, ref: 'CFM Res. 2.217/2018' }
          ]
        }
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // CASO 9 — TANATOLOGIA FORENSE — SINAIS DE MORTE E CRONOTANATOGNOSE
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 9,
    title: 'Corpo encontrado em domicílio, avaliação de sinais de morte',
    sub: 'Domicílio — Atendimento de Óbito',
    tema: 'Medicina Legal',
    topic: 'Tanatologia Forense — Sinais de Morte e Cronotanatognose',
    level: 'difícil',
    cardAccent: '#546E7A',
    instA: {
      scenario: 'Médico da equipe de atenção domiciliar é chamado por familiares que encontraram um paciente idoso sem vida.',
      patient: 'S.A.P., 82 anos, masculino, paciente acamado, portador de doença de Alzheimer avançada, acompanhado por cuidadora domiciliar.',
      complaint: 'Encontrado sem vida pela cuidadora ao trazer a refeição matinal.',
      tasks: [
        'Confirme o óbito através da avaliação sistemática dos sinais de morte.',
        'Avalie os sinais de cronotanatognose para estimar o intervalo pós-morte (IPM).',
        'Investigue o histórico clínico e as circunstâncias para determinar se o óbito é natural ou exige investigação adicional.',
        'Determine se o atestado de óbito pode ser emitido diretamente ou se há indicação de encaminhamento ao IML.',
        'Conduza a comunicação com a família de forma apropriada.'
      ]
    },
    instB: {
      vitals: {
        PA: 'Não detectável',
        FC: 'Ausente',
        FR: 'Ausente'
      },
      physicalGeneral: 'Corpo em decúbito dorsal no leito, sem sinais de vida.',
      physicalSeg: 'SINAIS DE MORTE: ausência de pulsos e batimentos cardíacos à ausculta prolongada; ausência de movimentos respiratórios; midríase paralítica bilateral fixa, sem resposta à luz; rigidez cadavérica presente em face e membros superiores, ainda não instalada em membros inferiores (rigidez incompleta, em progressão) | LIVORES: livores de hipóstase presentes em região dorsal (compatível com a posição em que foi encontrado), com discreta mobilidade à digitopressão (ainda não fixos) | TEMPERATURA CORPORAL: discretamente reduzida em relação à temperatura ambiente, ainda não completamente equilibrada | Sem sinais de trauma, sangramento ou sinais externos de violência.',
      labs: [],
      note: 'Este caso foca na avaliação sistemática dos sinais de morte (sinais abióticos imediatos e consecutivos) para confirmação do óbito e estimativa do intervalo pós-morte (cronotanatognose), além da diferenciação entre óbito natural esperado (passível de declaração direta) e óbito que exigiria encaminhamento ao IML. Não há exames complementares laboratoriais aplicáveis a este cenário domiciliar.',
      patientProfile: 'Paciente idoso, portador de Doença de Alzheimer em estágio avançado há vários anos, acamado, em cuidados paliativos domiciliares há alguns meses, com acompanhamento médico regular da equipe de atenção domiciliar, família ciente do prognóstico reservado da doença de base.',
      script: [
        { trigger: 'Relato da cuidadora', speech: 'Doutor(a), eu vim trazer o café da manhã dele, como sempre, e encontrei ele assim, sem responder, gelado. Deve ter sido durante a madrugada.' },
        { trigger: 'Sobre a última vez que foi visto vivo', speech: 'Ontem à noite, por volta das 22h, eu dei a medicação para ele e ele estava respirando normalmente, dormindo.' },
        { trigger: 'Sobre o quadro clínico de base', speech: 'Ele já estava bem debilitado ultimamente, mal comia, a médica da equipe já tinha comentado que o quadro dele estava mais grave nas últimas consultas.' },
        { trigger: 'Pergunta da família — próximos passos', speech: 'Doutor(a), o que a gente faz agora? Precisa chamar a polícia? Como funciona isso?' }
      ],
      hiddenInfo: 'O paciente estava em acompanhamento médico regular pela mesma equipe de atenção domiciliar, com doença de base conhecida, progressiva e com prognóstico reservado documentado em prontuário — informação relevante para caracterizar o óbito como morte natural esperada, elegível para declaração direta pelo médico assistente sem necessidade de encaminhamento ao IML | Não há qualquer sinal de trauma, sinais de violência ou circunstância suspeita no ambiente — achado que reforça a natureza não violenta do óbito',
      actorBehavior: 'A cuidadora e familiares estão emocionalmente abalados, mas relativamente calmos dado o prognóstico já conhecido da doença. Fornecem informações de forma colaborativa quando perguntados sobre a cronologia dos eventos e o histórico clínico.'
    },
    instC: {
      diagnosis: 'Óbito natural, decorrente da evolução esperada de doença crônica-degenerativa de base (Doença de Alzheimer avançada), com sinais de morte consolidados e intervalo pós-morte estimado compatível com o relato familiar (últimas horas), sem indícios de morte violenta ou suspeita — passível de declaração de óbito direta pelo médico assistente, sem necessidade de encaminhamento ao IML.',
      differentials: [
        'Óbito de causa violenta ou suspeita — deve ser sempre sistematicamente excluído através da investigação de sinais de trauma, sinais externos de violência e das circunstâncias do óbito; afastado neste caso pela ausência de qualquer sinal físico ou circunstancial sugestivo, associado ao contexto de doença de base conhecida e progressiva',
        'Morte súbita inesperada sem assistência médica prévia — entra como situação que exigiria encaminhamento ao IML por ausência de médico assistente que possa atestar a causa mortis; afastada neste caso pela existência de acompanhamento médico regular e prognóstico conhecido documentado, permitindo a declaração direta pelo médico da equipe',
        'Estado de morte aparente (situações raras de simulação de morte, como catalepsia profunda) — afastado pela presença consolidada dos sinais de morte consecutivos (rigidez cadavérica em progressão, livores de hipóstase), que confirmam morte real e não apenas ausência transitória de sinais vitais detectáveis'
      ],
      context: 'A confirmação do óbito e a estimativa do intervalo pós-morte (cronotanatognose) baseiam-se na avaliação sistemática dos sinais abióticos: imediatos (ausência de pulso, respiração, reflexos) e consecutivos, que se instalam progressivamente após a morte — livores de hipóstase (surgem em 2-3h, fixam-se em 8-12h), rigidez cadavérica (inicia-se em face/mandíbula em 2-4h, generaliza-se em cerca de 8-12h, e se resolve após 24-36h) e resfriamento corporal (algor mortis, progressivo). A determinação de se o óbito pode ser declarado diretamente pelo médico assistente ou exige encaminhamento ao IML depende da existência de assistência médica prévia com conhecimento da causa mortis e da ausência de indícios de morte violenta ou suspeita.',
      justify: 'A presença de rigidez cadavérica já instalada em face e membros superiores, mas ainda incompleta em membros inferiores, associada a livores de hipóstase presentes mas ainda móveis à digitopressão, é compatível com um intervalo pós-morte de algumas horas (aproximadamente compatível com o período entre o último contato, por volta das 22h, e o momento do encontro pela manhã), corroborando a cronologia relatada pela família. A ausência de sinais de trauma ou violência, associada ao histórico de doença crônica-degenerativa avançada com acompanhamento médico regular e prognóstico conhecido, caracteriza morte natural esperada, permitindo a emissão direta da declaração de óbito pelo médico assistente, sem necessidade de encaminhamento ao IML.',
      expectedAnamnesis: 'Obter da família/cuidadora a cronologia dos últimos contatos com o paciente vivo | Revisar o histórico clínico e o prognóstico da doença de base | Investigar circunstâncias do encontro do corpo, buscando indícios de trauma ou situação suspeita',
      expectedPhysical: 'Avaliação sistemática dos sinais abióticos imediatos (ausência de pulso, respiração, reflexo pupilar) | Avaliação dos sinais consecutivos (livores de hipóstase — presença, localização, fixação; rigidez cadavérica — extensão e progressão; temperatura corporal) | Exame minucioso da superfície corporal buscando sinais de trauma ou violência',
      expectedExams: [
        { exam: 'Não há exames laboratoriais aplicáveis neste contexto domiciliar', justify: 'A confirmação do óbito e a estimativa do IPM são feitas por exame físico sistemático dos sinais de morte', expected: 'Avaliação clínica direta' }
      ],
      expectedConduct: 'Farmacológica: não se aplica | Não farmacológica: confirmar o óbito através dos sinais avaliados; verificar se há prontuário/histórico de acompanhamento médico documentando a doença de base e seu prognóstico | Orientações à família: explicar de forma clara e acolhedora que, dado o histórico de doença conhecida e a ausência de sinais suspeitos, o óbito pode ser declarado diretamente, sem necessidade de acionar a polícia ou o IML; orientar sobre os próximos passos práticos (declaração de óbito, funerária) | Documentação: preencher a declaração de óbito de forma completa, incluindo causa mortis compatível com a doença de base (evitando termos genéricos como "parada cardiorrespiratória" isoladamente, que não caracteriza causa mortis adequadamente) | Encaminhamento: SOMENTE encaminhar ao IML se houvesse sinais de trauma, suspeita de violência, morte sem assistência médica prévia conhecida, ou circunstâncias não esclarecidas — não é o caso aqui',
      expectedCommunication: 'Comunicar-se com a família de forma acolhedora e clara sobre a confirmação do óbito | Explicar de forma didática por que não há necessidade de acionar a polícia ou encaminhar ao IML neste caso específico | Orientar sobre os próximos passos práticos com sensibilidade ao momento de luto da família',
      criticalErrors: [
        'Não avaliar sistematicamente os sinais de morte (abióticos imediatos e consecutivos) antes de confirmar o óbito',
        'Não investigar sinais de trauma ou circunstâncias suspeitas antes de determinar a natureza do óbito',
        'Encaminhar desnecessariamente ao IML um óbito natural claramente esperado, com médico assistente e causa mortis conhecida, gerando sofrimento adicional à família e sobrecarga do sistema pericial',
        'Deixar de encaminhar ao IML em caso de sinais suspeitos ou ausência de acompanhamento médico prévio (erro oposto, não presente neste caso específico, mas que deve ser reconhecido como conduta incorreta em cenários diferentes)',
        'Preencher a declaração de óbito de forma incompleta ou com causa mortis genérica não compatível com a doença de base documentada'
      ]
    },
    instD: {
      title: 'CHECKLIST — CONFIRMAÇÃO DE ÓBITO EM DOMICÍLIO (TANATOLOGIA FORENSE)',
      sections: [
        {
          h: 'BLOCO 1 — COMUNICAÇÃO COM A FAMÍLIA',
          items: [
            { item: 'Comunicou-se com a família de forma acolhedora sobre a confirmação do óbito', score: 0.5, ref: 'CFM Res. 2.217/2018' },
            { item: 'Explicou de forma didática a não necessidade de acionar polícia/IML', score: 0.5, ref: 'Medicina Legal — Tanatologia Forense' }
          ]
        },
        {
          h: 'BLOCO 2 — ANAMNESE',
          items: [
            { item: 'Obteve a cronologia dos últimos contatos com o paciente vivo', score: 0.5, ref: 'Medicina Legal — Cronotanatognose' },
            { item: 'Revisou o histórico clínico e prognóstico da doença de base', score: 0.5, ref: 'Medicina Legal — Tanatologia Forense' }
          ]
        },
        {
          h: 'BLOCO 3 — EXAME FÍSICO — SINAIS DE MORTE',
          items: [
            { item: 'Avaliou sistematicamente os sinais abióticos imediatos', score: 1.0, ref: 'Medicina Legal — Tanatologia Forense' },
            { item: 'Avaliou livores de hipóstase e rigidez cadavérica para estimar o IPM', score: 1.5, ref: 'Medicina Legal — Cronotanatognose' },
            { item: 'Examinou a superfície corporal buscando sinais de trauma/violência', score: 1.0, ref: 'Medicina Legal — Tanatologia Forense' }
          ]
        },
        {
          h: 'BLOCO 4 — RACIOCÍNIO CLÍNICO-LEGAL',
          items: [
            { item: 'Concluiu corretamente tratar-se de morte natural, sem indicação de encaminhamento ao IML', score: 1.5, ref: 'Medicina Legal — Declaração de Óbito' }
          ]
        },
        {
          h: 'BLOCO 5 — CONDUTA — DOCUMENTAÇÃO',
          items: [
            { item: 'Orientou o preenchimento adequado da declaração de óbito com causa mortis compatível', score: 1.0, ref: 'Manual de Preenchimento da DO — MS/CFM' }
          ]
        }
      ]
    }
  },
];

export default medicinaLegal;
