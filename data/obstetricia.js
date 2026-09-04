const obstetricia = [
  // CASO 1 — PRÉ-NATAL DE BAIXO RISCO (PRIMEIRA CONSULTA)
  {
    id: 1,
    title: 'Primeira consulta de pré-natal — teste de gravidez positivo',
    sub: 'UBS — Atenção Primária',
    tema: 'Obstetricia',
    topic: 'Pré-natal de Baixo Risco',
    level: 'fácil',
    cardAccent: '#8E24AA',

    instA: {
      scenario: 'Consulta de demanda espontânea na UBS, paciente trouxe teste de farmácia positivo.',
      patient: 'Camila Ferreira Duarte, 24 anos, sexo feminino, auxiliar de escritório, G1P0A0.',
      complaint: 'Atraso menstrual de 6 semanas e teste de farmácia positivo, vem iniciar o pré-natal.',
      tasks: [
        'Realize a anamnese da primeira consulta de pré-natal.',
        'Realize o exame físico geral e obstétrico inicial.',
        'Confirme a gestação e calcule a idade gestacional/data provável do parto.',
        'Solicite os exames de rotina do primeiro trimestre.',
        'Classifique o risco gestacional e oriente a paciente sobre o seguimento.'
      ]
    },

    instB: {
      vitals: {
        PA: '110/70 mmHg',
        FC: '78 bpm',
        FR: '16 irpm',
        Tax: '36,4 °C',
        Peso: '62 kg',
        Altura: '1,65 m',
        IMC: '22,8 kg/m²'
      },
      physicalGeneral: 'Bom estado geral, corada, hidratada, sem edemas, ansiosa mas contente com a notícia.',
      physicalSeg: 'ABDOME: plano, indolor, útero não palpável acima da sínfise púbica (compatível com idade gestacional inicial). | MAMAS: sem nódulos, mamilos íntegros. | MEMBROS: sem edema, panturrilhas livres.',
      labs: [
        { test: 'Beta-hCG urinário (teste rápido)', val: 'Positivo', ref: 'Confirma gestação', alt: true },
        { test: 'Tipagem sanguínea e fator Rh', val: 'A positivo', ref: 'Determinar necessidade de acompanhamento de isoimunização (se Rh negativo)', alt: false },
        { test: 'Hemograma completo', val: 'Hb 12,8 g/dL, sem outras alterações', ref: 'Hb ≥ 11 g/dL no 1º trimestre', alt: false }
      ],
      note: 'Os exames de rotina do 1º trimestre completos (sorologias, glicemia, urina, etc.) só devem ser entregues à medida que o candidato os solicitar nominalmente — reforce que "os resultados virão no retorno" caso o candidato pergunte sobre exames ainda não coletados nesta consulta.',
      patientProfile: 'Auxiliar de escritório, união estável há 2 anos, gestação planejada e desejada. Ciclos menstruais regulares (28 dias), DUM há 6 semanas. Sem comorbidades prévias, não fumante, não etilista.',
      script: [
        { trigger: 'Queixa principal', speech: 'Doutor(a), fiz o teste de farmácia e deu positivo! Estou muito feliz, viemos começar o pré-natal.' },
        { trigger: 'Sobre a última menstruação', speech: 'Minha última menstruação foi há umas 6 semanas, minha menstruação sempre foi certinha, vem a cada 28 dias.' },
        { trigger: 'Sobre sintomas', speech: 'Tenho sentido um enjoo pela manhã e um cansaço maior que o normal, mas nada muito forte.' },
        { trigger: 'Sobre antecedentes de saúde', speech: 'Não tenho nenhuma doença, não tomo remédio contínuo nenhum, nunca fiz cirurgia.' },
        { trigger: 'Sobre hábitos', speech: 'Não fumo e não bebo. Tomava ácido fólico há uns 2 meses, minha ginecologista tinha recomendado quando começamos a tentar.' },
        { trigger: 'Sobre vacinação', speech: 'Não sei bem quais vacinas eu já tomei, tenho a carteirinha em casa mas não trouxe hoje.' },
        { trigger: 'Pergunta ativa — dúvidas', speech: 'Doutor(a), quando vai nascer o bebê? E quais exames eu vou precisar fazer agora?' }
      ],
      hiddenInfo: 'Tem um gato em casa e tem receio de toxoplasmose, mas não comenta espontaneamente — só revela se perguntada sobre animais domésticos | Trabalha em ambiente com ar-condicionado o dia todo e fica preocupada com a exposição a produtos de limpeza do escritório — só revela se perguntada sobre exposições ocupacionais | Não sabe se está com o esquema vacinal em dia — só revela detalhes se o candidato pedir a carteira de vacinação ou perguntar especificamente | Tem história familiar de diabetes (mãe e avó) — só revela se perguntada sobre antecedentes familiares',
      actorBehavior: 'Demonstrar alegria e ansiedade típica de primeira gestação, fazer perguntas espontâneas sobre o que esperar do pré-natal. Colaborativa durante toda a consulta.'
    },

    instC: {
      diagnosis: 'Gestação inicial confirmada (idade gestacional compatível com 6 semanas por DUM), pré-natal de baixo risco a ser iniciado.',
      differentials: [
        'Não se aplica diagnóstico diferencial clássico — a gestação já está confirmada pelo beta-hCG positivo; a tarefa central do candidato é a correta condução da primeira consulta de pré-natal e a estratificação de risco gestacional (baixo x alto risco), não um diagnóstico diferencial de doença.'
      ],
      context: 'A primeira consulta de pré-natal é o momento de estabelecer vínculo, confirmar a gestação, calcular a idade gestacional e a data provável do parto, solicitar os exames de rotina e classificar o risco gestacional, conforme o Manual de Gestação de Alto Risco e o Caderno de Atenção Básica de Pré-natal do Ministério da Saúde. Esta paciente jovem, hígida, sem fatores de risco identificados até o momento, é classificada inicialmente como gestação de risco habitual, devendo seguir acompanhamento na Atenção Primária.',
      justify: 'A confirmação da gestação por beta-hCG positivo associada a atraso menstrual compatível permite calcular a idade gestacional pela data da última menstruação (regra de Näegele para a data provável do parto). A ausência de comorbidades, fatores de risco obstétricos prévios ou achados anormais ao exame físico nesta consulta inicial sustenta a classificação de risco habitual, sem prejuízo de reclassificação ao longo do acompanhamento.',
      expectedAnamnesis: 'Confirmação da data da última menstruação e regularidade do ciclo | Sintomas gestacionais iniciais (náuseas, mastalgia, fadiga) | Antecedentes obstétricos (gestações, partos, abortamentos prévios) | Antecedentes pessoais e familiares de comorbidades (diabetes, hipertensão) | Uso de medicações, álcool, tabaco e outras substâncias | Situação vacinal | Exposições ocupacionais e domésticas relevantes (animais, produtos químicos) | Rede de apoio e planejamento da gestação',
      expectedPhysical: 'Aferição de peso, altura e cálculo do IMC pré-gestacional/atual | Aferição da pressão arterial | Exame das mamas | Palpação abdominal | Inspeção de membros inferiores para edema',
      expectedExams: [
        { exam: 'Tipagem sanguínea e fator Rh', justify: 'Identificar gestantes Rh negativo para acompanhamento de isoimunização e profilaxia com imunoglobulina anti-D quando indicado', expected: 'Determinar tipo sanguíneo e fator Rh' },
        { exam: 'Hemograma completo', justify: 'Rastrear anemia gestacional', expected: 'Hemoglobina normal ou identificação de anemia a corrigir' },
        { exam: 'Glicemia de jejum', justify: 'Rastreio inicial de diabetes mellitus prévio à gestação ou diabetes gestacional precoce', expected: 'Normal (< 92 mg/dL sugere ausência de DMG neste momento, valores mais altos exigem investigação)' },
        { exam: 'Sorologias (HIV, sífilis — VDRL/teste rápido, hepatites B e C, toxoplasmose)', justify: 'Rastreio obrigatório no 1º trimestre para infecções verticalmente transmissíveis', expected: 'Idealmente não reagentes; define conduta e seguimento conforme resultado' },
        { exam: 'Urina tipo I e urocultura', justify: 'Rastrear bacteriúria assintomática e infecção urinária, comuns e com risco de complicação na gestação', expected: 'Sem alterações significativas' },
        { exam: 'Ultrassonografia obstétrica (idealmente entre 11-14 semanas)', justify: 'Confirmar idade gestacional com maior precisão, viabilidade e número de fetos, e rastreio de aneuploidias', expected: 'Gestação tópica, viável, compatível com idade gestacional' }
      ],
      expectedConduct: 'Farmacológica: prescrever ácido fólico (se ainda não em uso) e sulfato ferroso profilático conforme protocolo do Ministério da Saúde | Não farmacológica: agendar consultas de retorno conforme calendário do pré-natal (mensal até 28 semanas, quinzenal até 36 semanas, semanal até o parto, em gestação de risco habitual); atualizar caderneta de vacinação (dTpa, influenza, hepatite B conforme situação vacinal) | Orientações ao paciente: orientar sobre sinais de alarme que exigem procura imediata de atendimento (sangramento, dor abdominal intensa, perda de líquido, ausência de movimentos fetais após percepção); orientar sobre alimentação, atividade física liberada e cuidados com toxoplasmose (manipulação de carnes cruas, contato com fezes de gato) e listeriose; entregar a caderneta da gestante',
      expectedCommunication: 'Acolher a gestante com empatia, validando a alegria e as expectativas em relação à gestação | Explicar de forma didática o calendário de consultas e exames do pré-natal | Esclarecer dúvidas sobre exposições cotidianas (trabalho, animais) sem gerar ansiedade desproporcional | Verificar compreensão das orientações antes de encerrar a consulta',
      criticalErrors: [
        'Não solicitar os exames de rotina obrigatórios do primeiro trimestre',
        'Não verificar tipagem sanguínea e fator Rh',
        'Não orientar sobre sinais de alarme na gestação',
        'Não atualizar ou verificar a situação vacinal da gestante',
        'Deixar de classificar/reavaliar o risco gestacional com base nos antecedentes levantados'
      ]
    },

    instD: {
      title: 'Pré-natal de Baixo Risco — Material de Estudo',
      sections: [
        {
          h: 'Calendário de Consultas',
          items: [
            { item: 'Mensal até 28 semanas, quinzenal entre 28-36 semanas e semanal a partir de 36 semanas até o parto, em gestação de risco habitual — mínimo de 6 consultas recomendado pelo Ministério da Saúde.', score: 2, ref: 'Ministério da Saúde — Caderno de Atenção Básica: Atenção ao Pré-natal de Baixo Risco' }
          ]
        },
        {
          h: 'Exames de Rotina do Pré-natal',
          items: [
            { item: '1º trimestre: tipagem sanguínea/Rh, hemograma, glicemia de jejum, sorologias (HIV, sífilis, hepatites B/C, toxoplasmose), urina tipo I e urocultura, USG obstétrica precoce.', score: 2, ref: 'Ministério da Saúde / FEBRASGO' },
            { item: '2º e 3º trimestres: rastreio de diabetes gestacional (TOTG 75g entre 24-28 semanas), repetição de sorologias, USG morfológico e obstétrico, pesquisa de estreptococo do grupo B (35-37 semanas).', score: 2, ref: 'Ministério da Saúde / FEBRASGO' }
          ]
        },
        {
          h: 'Suplementação',
          items: [
            { item: 'Ácido fólico (idealmente iniciado antes da concepção) e sulfato ferroso profilático são recomendados rotineiramente pelo Ministério da Saúde.', score: 1, ref: 'Ministério da Saúde' }
          ]
        },
        {
          h: 'Classificação de Risco Gestacional',
          items: [
            { item: 'Fatores que indicam encaminhamento ao pré-natal de alto risco incluem comorbidades prévias (diabetes, hipertensão, cardiopatias), história obstétrica desfavorável, idade materna extrema, e intercorrências identificadas durante o acompanhamento.', score: 2, ref: 'Ministério da Saúde — Manual de Gestação de Alto Risco' }
          ]
        },
        {
          h: 'Sinais de Alarme',
          items: [
            { item: 'Sangramento vaginal, dor abdominal intensa, perda de líquido, cefaleia intensa, edema súbito e redução de movimentos fetais exigem avaliação imediata.', score: 1, ref: 'Ministério da Saúde' }
          ]
        }
      ]
    }
  },

  // CASO 2 — DIABETES MELLITUS GESTACIONAL
  {
    id: 2,
    title: 'Rastreio de diabetes alterado com 26 semanas de gestação',
    sub: 'Ambulatório — Pré-natal de Alto Risco',
    tema: 'Obstetricia',
    topic: 'Diabetes Mellitus Gestacional',
    level: 'moderado',
    cardAccent: '#8E24AA',

    instA: {
      scenario: 'Consulta de retorno no ambulatório de pré-natal para avaliação de exame de rastreio de diabetes gestacional.',
      patient: 'Renata Souza Martins, 32 anos, sexo feminino, comerciante, G2P1A0, 26 semanas de gestação.',
      complaint: 'Retorna para receber resultado do teste oral de tolerância à glicose (TOTG) solicitado na consulta anterior.',
      tasks: [
        'Realize a anamnese dirigida, incluindo fatores de risco para diabetes gestacional.',
        'Realize o exame físico obstétrico dirigido.',
        'Interprete o resultado do exame e confirme o diagnóstico.',
        'Proponha a conduta terapêutica inicial.',
        'Oriente a paciente sobre monitorização e seguimento.'
      ]
    },

    instB: {
      vitals: {
        PA: '118/76 mmHg',
        FC: '82 bpm',
        FR: '16 irpm',
        Tax: '36,4 °C',
        Peso: '78 kg (pré-gestacional: 68 kg)',
        Altura: '1,60 m',
        IMC: '26,6 kg/m² (pré-gestacional)'
      },
      physicalGeneral: 'Bom estado geral, corada, hidratada, sem edemas significativos.',
      physicalSeg: 'ABDOME: altura uterina de 26 cm, compatível com idade gestacional; ausculta de batimentos cardiofetais presentes, rítmicos, 144 bpm. | MEMBROS: sem edema, panturrilhas livres.',
      labs: [
        { test: 'TOTG 75g (jejum / 1h / 2h)', val: 'Jejum: 96 mg/dL | 1h: 195 mg/dL | 2h: 168 mg/dL', ref: 'Jejum < 92 | 1h < 180 | 2h < 153 mg/dL (basta 1 valor alterado para diagnóstico)', alt: true },
        { test: 'Hemoglobina glicada (HbA1c)', val: '5,6%', ref: '< 5,7% (referência para triagem de diabetes prévio, valor limitado na gestação)', alt: false },
        { test: 'Urina tipo I', val: 'Sem glicosúria ou alterações significativas', ref: 'Normal', alt: false }
      ],
      note: 'O TOTG já foi coletado antes desta consulta — entregar o resultado assim que solicitado/questionado pelo candidato, já que é o motivo do retorno.',
      patientProfile: 'Comerciante, casada, um filho de 4 anos (parto normal, sem intercorrências). Ganho de peso gestacional acima do esperado até o momento. Refere sedentarismo desde o início da gestação.',
      script: [
        { trigger: 'Ao ser perguntada sobre o resultado', speech: 'Doutor(a), eu vim buscar o resultado daquele exame de açúcar que fiz. Está tudo bem?' },
        { trigger: 'Sobre sintomas', speech: 'Não sinto nada de diferente, não. Só acho que estou ganhando peso rápido demais nessa gestação.' },
        { trigger: 'Sobre história familiar', speech: 'Minha mãe tem diabetes tipo 2, e minha irmã teve diabetes gestacional na gravidez dela também.' },
        { trigger: 'Sobre gestação anterior', speech: 'Na minha primeira gestação eu não tive esse problema, meu filho nasceu com peso normal.' },
        { trigger: 'Sobre alimentação/atividade física', speech: 'Confesso que como bastante doce, e não tenho feito nenhuma atividade física desde que engravidei.' },
        { trigger: 'Pergunta ativa — diagnóstico', speech: 'Doutor(a), isso quer dizer que eu tenho diabetes? Isso vai fazer mal para o bebê?' }
      ],
      hiddenInfo: 'Está com medo de precisar usar insulina e tem receio de agulhas — só revela se o candidato explicar as opções de tratamento e ela expressar a preocupação | Já teve um bebê "grande" (4,1 kg) na gestação anterior, mas não associava isso a risco de diabetes — só revela se perguntada sobre peso de nascimento de filhos anteriores | Tem episódios de fome excessiva e sede aumentada nas últimas semanas, mas atribuiu à gestação normal — só revela se perguntada ativamente sobre poliúria/polidipsia | Preocupada com a possibilidade de precisar fazer cesárea por causa do diagnóstico — só revela se o candidato tocar no tema da via de parto',
      actorBehavior: 'Demonstrar preocupação genuína ao ouvir sobre o diagnóstico, fazer perguntas sobre repercussões para o bebê. Receptiva a orientações quando explicadas com clareza e acolhimento.'
    },

    instC: {
      diagnosis: 'Diabetes Mellitus Gestacional (DMG), diagnosticada pelo TOTG 75g alterado em mais de um ponto, com fatores de risco associados (sobrepeso, história familiar, macrossomia em gestação anterior).',
      differentials: [
        'Diabetes mellitus prévio à gestação (overt diabetes) — entra pela possibilidade de hiperglicemia não diagnosticada previamente; sai pela HbA1c normal (< 5,7%) e pela glicemia de jejum na admissão não atingir critérios de diabetes franco (≥ 126 mg/dL em jejum ou ≥ 200 mg/dL casual), tornando o diagnóstico de DMG (e não diabetes pré-gestacional) o mais adequado.',
        'Intolerância à glicose sem diagnóstico de DMG — não se aplica neste caso, pois os critérios diagnósticos de DMG já foram preenchidos com dois valores alterados no TOTG.'
      ],
      context: 'O diabetes mellitus gestacional é uma das intercorrências clínicas mais comuns da gestação, associado a maior risco de macrossomia fetal, distocia de ombro, pré-eclâmpsia e complicações neonatais (hipoglicemia neonatal, síndrome do desconforto respiratório). O diagnóstico é feito rotineiramente entre 24-28 semanas pelo TOTG 75g, seguindo os critérios da IADPSG adotados pelo Ministério da Saúde e pela FEBRASGO/SBD.',
      justify: 'O diagnóstico de DMG é confirmado pela presença de pelo menos um valor alterado no TOTG 75g (jejum ≥ 92, 1h ≥ 180 ou 2h ≥ 153 mg/dL) — nesta paciente, todos os três valores estão alterados, associados a fatores de risco relevantes (sobrepeso pré-gestacional, história familiar de diabetes, macrossomia em gestação anterior), reforçando o diagnóstico e a necessidade de intervenção.',
      expectedAnamnesis: 'Fatores de risco para DMG (idade, sobrepeso/obesidade, história familiar, macrossomia prévia, DMG em gestação anterior) | Sintomas de hiperglicemia (poliúria, polidipsia, polifagia) | Hábitos alimentares e nível de atividade física | Ganho de peso gestacional até o momento | Impacto emocional do diagnóstico e crenças sobre o tratamento (medo de insulina)',
      expectedPhysical: 'Aferição de peso atual e cálculo do ganho de peso gestacional | Medida da altura uterina | Ausculta dos batimentos cardiofetais | Avaliação de sinais de pré-eclâmpsia associada (PA, edema) dado o maior risco combinado',
      expectedExams: [
        { exam: 'Confirmação e interpretação do TOTG 75g já realizado', justify: 'Estabelecer o diagnóstico conforme critérios da IADPSG/Ministério da Saúde', expected: 'Diagnóstico confirmado com os valores apresentados' },
        { exam: 'Perfil glicêmico capilar (glicemias de jejum e pós-prandiais domiciliares)', justify: 'Monitorização do controle glicêmico após o diagnóstico, essencial para definir necessidade de insulinoterapia', expected: 'Estabelecer metas: jejum < 95 mg/dL, 1h pós-prandial < 140 mg/dL, 2h pós-prandial < 120 mg/dL' },
        { exam: 'Ultrassonografia obstétrica com avaliação de crescimento fetal', justify: 'Rastrear macrossomia e polidrâmnio, complicações associadas ao DMG mal controlado', expected: 'Acompanhamento seriado do crescimento fetal' }
      ],
      expectedConduct: 'Farmacológica: iniciar com orientação dietética e monitorização glicêmica domiciliar por 1-2 semanas; insulinoterapia indicada caso as metas glicêmicas não sejam atingidas com dieta e atividade física (insulina é a primeira escolha farmacológica na gestação; metformina pode ser considerada em situações específicas conforme protocolo local) | Não farmacológica: orientação nutricional individualizada (fracionamento de refeições, controle de carboidratos simples) e prática de atividade física regular liberada para a gestação | Orientações ao paciente: explicar que o diabetes gestacional é tratável e que o acompanhamento adequado reduz significativamente os riscos para mãe e bebê; esclarecer que a insulina, se necessária, é seguro e não atravessa a placenta; explicar a necessidade de monitorização de crescimento fetal e possível ajuste da via/momento do parto conforme evolução',
      expectedCommunication: 'Comunicar o diagnóstico de forma clara, mas acolhedora, evitando culpabilizar a paciente por hábitos alimentares | Validar o medo relacionado ao uso de insulina e esclarecer com informações baseadas em evidência | Explicar os riscos associados ao DMG não controlado sem gerar pânico desnecessário | Verificar compreensão do plano de monitorização domiciliar',
      criticalErrors: [
        'Não reconhecer o TOTG alterado como diagnóstico confirmado de DMG (ex.: solicitar repetição desnecessária do exame)',
        'Não orientar automonitorização glicêmica domiciliar após o diagnóstico',
        'Não considerar insulinoterapia diante de eventual falha do controle dietético',
        'Não avaliar crescimento fetal/rastrear complicações associadas (macrossomia, polidrâmnio)',
        'Transmitir a informação de forma alarmista, gerando culpa ou pânico desproporcional na paciente'
      ]
    },

    instD: {
      title: 'Diabetes Mellitus Gestacional — Material de Estudo',
      sections: [
        {
          h: 'Rastreio e Diagnóstico',
          items: [
            { item: 'TOTG 75g entre 24-28 semanas é o exame padrão; diagnóstico com qualquer valor alterado: jejum ≥ 92 mg/dL, 1h ≥ 180 mg/dL ou 2h ≥ 153 mg/dL (critérios IADPSG).', score: 2, ref: 'Ministério da Saúde / FEBRASGO-SBD' },
            { item: 'Glicemia de jejum ≥ 126 mg/dL ou glicemia casual ≥ 200 mg/dL em qualquer momento da gestação sugere diabetes mellitus prévio (overt diabetes), não DMG.', score: 1, ref: 'FEBRASGO-SBD' }
          ]
        },
        {
          h: 'Fatores de Risco',
          items: [
            { item: 'Sobrepeso/obesidade, idade materna avançada, história familiar de diabetes, DMG ou macrossomia em gestação prévia, síndrome dos ovários policísticos.', score: 1, ref: 'FEBRASGO-SBD' }
          ]
        },
        {
          h: 'Complicações Associadas',
          items: [
            { item: 'Macrossomia fetal, distocia de ombro, polidrâmnio, pré-eclâmpsia, hipoglicemia neonatal e maior risco de diabetes tipo 2 futuro para mãe e filho.', score: 2, ref: 'FEBRASGO-SBD' }
          ]
        },
        {
          h: 'Tratamento',
          items: [
            { item: 'Primeira linha: terapia nutricional e atividade física, com monitorização glicêmica domiciliar.', score: 2, ref: 'Ministério da Saúde / FEBRASGO-SBD' },
            { item: 'Insulinoterapia indicada quando metas glicêmicas não são atingidas com medidas não farmacológicas; é a droga de escolha na gestação.', score: 2, ref: 'FEBRASGO-SBD' }
          ]
        },
        {
          h: 'Seguimento e Parto',
          items: [
            { item: 'Monitorização seriada do crescimento fetal por USG; via de parto definida por critérios obstétricos, com atenção ao peso fetal estimado para prevenção de distocia de ombro.', score: 1, ref: 'FEBRASGO-SBD' },
            { item: 'Reavaliação glicêmica materna no pós-parto (TOTG 75g em 6-12 semanas) para rastreio de diabetes persistente.', score: 1, ref: 'Ministério da Saúde' }
          ]
        }
      ]
    }
  },

  // CASO 3 — PRÉ-ECLÂMPSIA
  {
    id: 3,
    title: 'Pressão alta e inchaço com 33 semanas de gestação',
    sub: 'PS Obstétrico',
    tema: 'Obstetricia',
    topic: 'Pré-eclâmpsia',
    level: 'difícil',
    cardAccent: '#8E24AA',

    instA: {
      scenario: 'Atendimento de urgência obstétrica, paciente encaminhada da UBS após aferição de pressão elevada em consulta de rotina.',
      patient: 'Débora Nascimento Ramos, 29 anos, sexo feminino, professora, G1P0A0, 33 semanas de gestação.',
      complaint: 'Pressão arterial elevada detectada na UBS, associada a inchaço nas pernas e dor de cabeça.',
      tasks: [
        'Realize a anamnese dirigida, incluindo pesquisa de sinais de gravidade.',
        'Realize o exame físico geral e obstétrico dirigido.',
        'Formule a hipótese diagnóstica e classifique a gravidade do quadro.',
        'Solicite os exames complementares adequados.',
        'Proponha a conduta imediata, incluindo necessidade de internação.'
      ]
    },

    instB: {
      vitals: {
        PA: '162/108 mmHg',
        FC: '92 bpm',
        FR: '18 irpm',
        Tax: '36,5 °C',
        Peso: '81 kg',
        Altura: '1,63 m',
        IMC: '30,5 kg/m² (pré-gestacional)'
      },
      physicalGeneral: 'Regular estado geral, ansiosa, com queixa de cefaleia importante, edema visível em face e mãos.',
      physicalSeg: 'ABDOME: altura uterina de 32 cm, tônus uterino normal, sem dor à palpação; batimentos cardiofetais presentes, rítmicos, 138 bpm. | MEMBROS: edema (++/4+) em membros inferiores, face e mãos. | NEUROLÓGICO: reflexos patelares vivos (hiperreflexia +++/4+), sem outros déficits focais.',
      labs: [
        { test: 'Proteinúria em fita urinária', val: '3+ (fortemente positiva)', ref: 'Negativa/traços', alt: true },
        { test: 'Relação proteína/creatinina urinária', val: '0,45 mg/mg', ref: '< 0,3 mg/mg', alt: true },
        { test: 'Plaquetas', val: '118.000/mm³', ref: '150.000 – 450.000/mm³', alt: true },
        { test: 'TGO/TGP (transaminases)', val: 'TGO 68 U/L, TGP 74 U/L', ref: '< 35 U/L', alt: true },
        { test: 'Creatinina sérica', val: '0,9 mg/dL', ref: '0,4 – 1,0 mg/dL (na gestação, valores mais baixos são esperados)', alt: false },
        { test: 'DHL (desidrogenase láctica)', val: '420 U/L', ref: '< 250 U/L', alt: true }
      ],
      image: 'Cardiotocografia: padrão categoria I (tranquilizador), sem desacelerações. Ultrassonografia obstétrica com dopplervelocimetria: feto único, vivo, peso estimado compatível com idade gestacional, sem sinais de restrição de crescimento no momento; Doppler de artérias umbilicais dentro da normalidade.',
      note: 'Os exames laboratoriais (plaquetas, transaminases, DHL) só devem ser entregues se o candidato solicitar avaliação laboratorial completa para rastreio de gravidade/síndrome HELLP — reforçar a urgência da situação se o candidato demorar a solicitar.',
      patientProfile: 'Professora, primeira gestação, planejada. Pressão arterial sempre foi normal antes da gestação. Refere início do inchaço há cerca de 1 semana, com piora progressiva, e cefaleia holocraniana intensa iniciada nas últimas horas.',
      script: [
        { trigger: 'Queixa principal', speech: 'Doutor(a), estou com uma dor de cabeça muito forte, que não passa com nada, e minhas pernas incharam muito nos últimos dias.' },
        { trigger: 'Sobre a cefaleia', speech: 'É uma dor forte, na cabeça toda, começou hoje de manhã e não melhora com analgésico comum.' },
        { trigger: 'Sobre sintomas visuais', speech: '(hesitante) Agora que a senhora perguntou... tenho visto uns pontinhos brilhantes de vez em quando, tipo "flashes".' },
        { trigger: 'Sobre dor abdominal', speech: 'Sinto um desconforto na parte de cima da barriga, do lado direito, mais ou menos embaixo das costelas.' },
        { trigger: 'Sobre movimentação fetal', speech: 'O bebê está mexendo normal, não notei diferença nisso.' },
        { trigger: 'Sobre pressão arterial prévia', speech: 'Nunca tive pressão alta antes, sempre foi baixinha, 11 por 7, mais ou menos.' },
        { trigger: 'Pergunta ativa — gravidade', speech: 'Doutor(a), isso é grave? Meu bebê corre perigo? Eu vou precisar ficar internada?' }
      ],
      hiddenInfo: 'Tem visto "pontos brilhantes" (escotomas) esporadicamente, sinal de gravidade que não relata espontaneamente — só revela se perguntada ativamente sobre distúrbios visuais | Sente dor em hipocôndrio direito/epigástrio, sinal de alerta para acometimento hepático — só revela se perguntada sobre dor abdominal | Tem história familiar de pré-eclâmpsia (a mãe teve na gestação dela) — só revela se perguntada sobre história familiar | Está com muito medo de perder o bebê ao ouvir a palavra "pressão alta" — verbaliza esse medo apenas se o profissional demonstrar acolhimento',
      actorBehavior: 'Demonstrar desconforto visível pela cefaleia (franzir a testa, tocar a cabeça). Ansiedade crescente conforme a gravidade do quadro é discutida. Cooperativa, mas pede reafirmação sobre a segurança do bebê repetidamente.'
    },

    instC: {
      diagnosis: 'Pré-eclâmpsia com critérios de gravidade (cefaleia refratária, distúrbios visuais, dor em hipocôndrio direito, plaquetopenia e elevação de transaminases), com 33 semanas de gestação.',
      differentials: [
        'Hipertensão gestacional sem proteinúria/sinais de gravidade — entra como diagnóstico diferencial de hipertensão que surge na gestação; sai pela presença de proteinúria significativa e critérios de gravidade associados, que definem pré-eclâmpsia grave.',
        'Hipertensão arterial crônica com pré-eclâmpsia sobreposta — entra como possibilidade se houvesse hipertensão prévia à gestação; sai pela paciente relatar pressão arterial sempre normal antes da gestação atual.',
        'Síndrome HELLP estabelecida — entra como evolução possível do quadro dado plaquetopenia e elevação de transaminases; deve ser ativamente investigada e monitorizada, podendo já representar uma variante/complicação da pré-eclâmpsia grave em curso, exigindo conduta ainda mais urgente.',
        'Fígado gorduroso agudo da gestação — entra pelo acometimento hepático; sai pela associação mais característica com hipertensão e proteinúria neste caso, mais compatível com pré-eclâmpsia/HELLP do que com esteatose hepática aguda isolada.'
      ],
      context: 'A pré-eclâmpsia é uma síndrome hipertensiva específica da gestação, definida por hipertensão que surge após 20 semanas associada a proteinúria ou disfunção de órgão-alvo, sendo uma das principais causas de morbimortalidade materna e perinatal no Brasil. A presença de sintomas premonitórios (cefaleia refratária, distúrbios visuais, dor em hipocôndrio direito/epigástrio) e alterações laboratoriais (plaquetopenia, elevação de transaminases) caracteriza pré-eclâmpsia com critérios de gravidade, exigindo internação e conduta ativa.',
      justify: 'O diagnóstico de pré-eclâmpsia com critérios de gravidade é sustentado pela pressão arterial ≥ 160/110 mmHg, proteinúria significativa, associados a sintomas premonitórios (cefaleia intensa refratária, escotomas visuais, dor em hipocôndrio direito) e alterações laboratoriais compatíveis (plaquetopenia, elevação de transaminases e DHL), configurando quadro grave que exige internação hospitalar imediata e antecipação de conduta conforme protocolo do Ministério da Saúde e FEBRASGO.',
      expectedAnamnesis: 'Caracterização da cefaleia (intensidade, resposta a analgésicos, tempo de evolução) | Presença de distúrbios visuais (escotomas, turvação visual) | Dor em hipocôndrio direito/epigástrio | Percepção de movimentos fetais | História de pressão arterial prévia à gestação | História familiar de pré-eclâmpsia | Sinais de alarme adicionais (dispneia, sangramento)',
      expectedPhysical: 'Aferição cuidadosa da pressão arterial (confirmar em duas medidas) | Avaliação de edema e sua distribuição | Exame neurológico sumário, incluindo reflexos (hiperreflexia) | Palpação abdominal avaliando tônus uterino e dor à palpação em hipocôndrio direito | Ausculta de batimentos cardiofetais e avaliação da vitalidade fetal',
      expectedExams: [
        { exam: 'Proteinúria (fita urinária, relação proteína/creatinina ou proteinúria de 24h)', justify: 'Confirmar proteinúria significativa para diagnóstico de pré-eclâmpsia', expected: 'Proteinúria significativa presente' },
        { exam: 'Hemograma completo com plaquetas', justify: 'Rastrear plaquetopenia, marcador de gravidade e de síndrome HELLP', expected: 'Plaquetopenia neste caso' },
        { exam: 'Transaminases (TGO/TGP) e DHL', justify: 'Avaliar acometimento hepático e hemólise, compondo critérios de gravidade/síndrome HELLP', expected: 'Elevadas, compatíveis com gravidade' },
        { exam: 'Creatinina sérica', justify: 'Avaliar função renal, outro critério de gravidade quando alterada', expected: 'Avaliar elevação em relação ao basal gestacional' },
        { exam: 'Cardiotocografia', justify: 'Avaliar vitalidade fetal imediata', expected: 'Padrão tranquilizador ou alterado, orientando urgência da resolução' },
        { exam: 'Ultrassonografia obstétrica com dopplervelocimetria', justify: 'Avaliar crescimento fetal, líquido amniótico e perfusão placentária', expected: 'Rastrear restrição de crescimento fetal e alterações de Doppler associadas' }
      ],
      expectedConduct: 'Farmacológica: anti-hipertensivo de ação rápida para controle da crise hipertensiva (ex.: hidralazina, labetalol ou nifedipina, conforme disponibilidade e protocolo institucional); sulfato de magnésio para profilaxia/tratamento de eclâmpsia dado o quadro grave; corticoide (betametasona) para maturação pulmonar fetal, considerando a idade gestacional de 33 semanas | Não farmacológica: internação hospitalar imediata para monitorização materno-fetal contínua; avaliação conjunta com equipe obstétrica sobre momento e via de resolução da gestação, equilibrando risco materno grave e prematuridade fetal | Orientações ao paciente: explicar a gravidade do quadro de forma clara, porém acolhedora; esclarecer a necessidade de internação e monitorização rigorosa; explicar o uso do sulfato de magnésio e do corticoide e seus objetivos; reforçar que a equipe está atuando para a segurança de mãe e bebê',
      expectedCommunication: 'Agir com agilidade compatível com quadro de gravidade, sem gerar pânico desnecessário | Comunicar a necessidade de internação de forma clara e acolhedora | Responder às perguntas sobre segurança do bebê com informação realista | Explicar cada intervenção (sulfato de magnésio, anti-hipertensivo, corticoide) antes de realizá-la',
      criticalErrors: [
        'Não reconhecer os critérios de gravidade (sintomas premonitórios, plaquetopenia, transaminases elevadas) e liberar a paciente para acompanhamento ambulatorial',
        'Não indicar internação hospitalar imediata diante de pré-eclâmpsia grave',
        'Não considerar sulfato de magnésio para profilaxia de eclâmpsia',
        'Não avaliar a vitalidade fetal (cardiotocografia/USG com Doppler) no atendimento inicial',
        'Não considerar corticoide para maturação pulmonar fetal em gestação pré-termo com necessidade de resolução iminente'
      ]
    },

    instD: {
      title: 'Pré-eclâmpsia — Material de Estudo',
      sections: [
        {
          h: 'Definição e Classificação',
          items: [
            { item: 'Hipertensão que surge após 20 semanas de gestação associada a proteinúria significativa ou disfunção de órgão-alvo, na ausência de proteinúria.', score: 2, ref: 'Ministério da Saúde — Manual de Gestação de Alto Risco / FEBRASGO' },
            { item: 'Critérios de gravidade: PA ≥ 160/110 mmHg, plaquetopenia (<100.000/mm³), elevação de transaminases, creatinina elevada, edema pulmonar, sintomas cerebrais/visuais persistentes.', score: 2, ref: 'FEBRASGO / Ministério da Saúde' }
          ]
        },
        {
          h: 'Fatores de Risco',
          items: [
            { item: 'Nuliparidade, história pessoal ou familiar de pré-eclâmpsia, obesidade, gestação múltipla, hipertensão crônica, diabetes prévio, doença renal crônica.', score: 1, ref: 'FEBRASGO' }
          ]
        },
        {
          h: 'Diagnóstico e Sinais de Gravidade',
          items: [
            { item: 'Sintomas premonitórios de gravidade: cefaleia refratária, distúrbios visuais (escotomas, turvação), dor em hipocôndrio direito/epigástrio, hiperreflexia.', score: 2, ref: 'FEBRASGO' }
          ]
        },
        {
          h: 'Tratamento',
          items: [
            { item: 'Sulfato de magnésio é o fármaco de escolha para profilaxia e tratamento de eclâmpsia em pré-eclâmpsia grave.', score: 2, ref: 'Ministério da Saúde / FEBRASGO' },
            { item: 'Anti-hipertensivos de ação rápida (hidralazina, labetalol, nifedipina) para controle de crise hipertensiva; corticoide para maturação pulmonar fetal quando indicado antes de 34 semanas.', score: 2, ref: 'FEBRASGO' },
            { item: 'A resolução da gestação (parto) é o tratamento definitivo da pré-eclâmpsia, com momento definido conforme gravidade materna e idade gestacional.', score: 2, ref: 'FEBRASGO / Ministério da Saúde' }
          ]
        },
        {
          h: 'Prevenção',
          items: [
            { item: 'Ácido acetilsalicílico em baixa dose, iniciado antes de 16 semanas, é recomendado para gestantes de alto risco para pré-eclâmpsia.', score: 1, ref: 'FEBRASGO' }
          ]
        }
      ]
    }
  },

  // CASO 4 — TRABALHO DE PARTO PREMATURO
  {
    id: 4,
    title: 'Contrações e cólica com 30 semanas de gestação',
    sub: 'PS Obstétrico',
    tema: 'Obstetricia',
    topic: 'Trabalho de Parto Prematuro',
    level: 'difícil',
    cardAccent: '#8E24AA',

    instA: {
      scenario: 'Atendimento de urgência obstétrica, paciente chega referindo contrações regulares.',
      patient: 'Isabela Cristina Rocha, 27 anos, sexo feminino, cabeleireira, G2P1A0, 30 semanas de gestação.',
      complaint: 'Contrações uterinas regulares e dor lombar há cerca de 3 horas.',
      tasks: [
        'Realize a anamnese dirigida, avaliando fatores de risco para prematuridade.',
        'Realize o exame físico obstétrico dirigido, incluindo toque vaginal quando apropriado.',
        'Formule a hipótese diagnóstica.',
        'Solicite os exames complementares adequados.',
        'Proponha a conduta terapêutica para tentativa de tocólise e maturação pulmonar fetal.'
      ]
    },

    instB: {
      vitals: {
        PA: '116/74 mmHg',
        FC: '96 bpm',
        FR: '18 irpm',
        Tax: '36,6 °C',
        Peso: '70 kg',
        Altura: '1,64 m',
        IMC: '24,5 kg/m² (pré-gestacional)'
      },
      physicalGeneral: 'Regular estado geral, com fácies de dor durante as contrações, ansiosa.',
      physicalSeg: 'ABDOME: altura uterina de 29 cm, contrações uterinas regulares palpáveis (3 contrações em 10 minutos, cada uma com duração aproximada de 40 segundos); batimentos cardiofetais presentes, rítmicos, 142 bpm. | TOQUE VAGINAL: colo uterino com 2 cm de dilatação, 70% de esvaecimento, apresentação cefálica, bolsa íntegra.',
      labs: [
        { test: 'Fibronectina fetal (se disponível)', val: 'Positiva', ref: 'Negativa (alto valor preditivo negativo para parto pré-termo iminente)', alt: true },
        { test: 'Urina tipo I e urocultura', val: 'Sem sinais de infecção urinária', ref: 'Normal', alt: false },
        { test: 'Proteína C reativa', val: '4 mg/L', ref: '< 5 mg/L', alt: false }
      ],
      image: 'Ultrassonografia transvaginal para medida do colo uterino: comprimento cervical de 18 mm (encurtado), sem afunilamento importante. Cardiotocografia: padrão categoria I, contrações regulares registradas, sem sinais de sofrimento fetal.',
      note: 'A fibronectina fetal e a medida do colo por USG transvaginal só devem ser entregues se disponíveis na unidade simulada e se o candidato mencionar sua indicação — reforçar que são exames complementares ao diagnóstico clínico já estabelecido pelo toque vaginal.',
      patientProfile: 'Cabeleireira, trabalho em pé a maior parte do dia, um filho de 6 anos (parto prematuro tardio aos 35 semanas, sem intercorrências). Refere não ter feito repouso apesar de orientação prévia na UBS.',
      script: [
        { trigger: 'Queixa principal', speech: 'Doutor(a), estou tendo umas cólicas fortes e regulares há umas 3 horas, e uma dor nas costas também.' },
        { trigger: 'Sobre as contrações', speech: 'Elas vêm de tempos em tempos, parece que a cada 3, 4 minutos, e duram bastante, tipo uns 40 segundos cada uma.' },
        { trigger: 'Sobre perda de líquido/sangramento', speech: 'Não notei perda de líquido nem sangramento, só essas dores mesmo.' },
        { trigger: 'Sobre gestação anterior', speech: 'Meu primeiro filho nasceu um pouco antes do tempo, acho que com 35 semanas, mas ele ficou bem, não precisou de UTI.' },
        { trigger: 'Sobre atividades recentes', speech: 'Trabalho o dia todo em pé cortando cabelo, não consegui fazer muito repouso como me disseram para fazer.' },
        { trigger: 'Sobre sintomas infecciosos', speech: 'Não tenho febre, não senti ardência para urinar nem nada assim.' },
        { trigger: 'Pergunta ativa — prognóstico', speech: '(chorando) Doutor(a), meu bebê vai nascer agora? Ele vai sobreviver sendo tão pequeno ainda?' }
      ],
      hiddenInfo: 'Teve um episódio de sangramento leve há 2 semanas que não valorizou e não contou ao pré-natal — só revela se perguntada sobre sangramentos recentes | Está muito estressada porque está com dificuldades financeiras e não conseguiu parar de trabalhar apesar da orientação médica — só revela se o candidato perguntar sobre condições de trabalho/estresse | Teve uma infecção urinária não tratada adequadamente há 1 mês (parou o antibiótico antes do tempo por melhora dos sintomas) — só revela se perguntada sobre infecções recentes | Tem muito medo de que o bebê tenha sequelas por nascer prematuro, baseado em histórias que ouviu — verbaliza esse medo se o candidato acolher a situação',
      actorBehavior: 'Visível dor durante as contrações simuladas (contrair o rosto, respirar mais rápido). Muito ansiosa e chorosa ao ser questionada sobre o prognóstico do bebê. Cooperativa durante o exame físico apesar do desconforto.'
    },

    instC: {
      diagnosis: 'Trabalho de parto prematuro (30 semanas), com colo uterino em dilatação inicial e encurtamento cervical confirmado.',
      differentials: [
        'Contrações de Braxton-Hicks (falso trabalho de parto) — entra pela queixa de contrações na gestação; sai pela presença de dilatação cervical progressiva (2 cm) e encurtamento significativo do colo à USG, achados que confirmam trabalho de parto verdadeiro.',
        'Descolamento prematuro de placenta — entra como causa de dor abdominal/lombar na gestação; sai pela ausência de sangramento vaginal significativo, hipertonia uterina característica e sinais de sofrimento fetal agudo, com cardiotocografia tranquilizadora.',
        'Infecção do trato urinário/pielonefrite — entra como causa comum de contrações prematuras por irritabilidade uterina; sai pela urina tipo I e urocultura sem sinais de infecção neste momento, embora a história de ITU mal tratada recentemente deva ser considerada como fator de risco contribuinte.',
        'Corioamnionite subclínica — entra como causa de trabalho de parto prematuro; deve ser ativamente vigiada (febre, taquicardia fetal, líquido fétido), mas não há evidência clínica presente no momento que a confirme.'
      ],
      context: 'O trabalho de parto prematuro é definido pela presença de contrações uterinas regulares associadas a modificações cervicais progressivas antes de 37 semanas completas de gestação, sendo uma das principais causas de morbimortalidade neonatal. Fatores de risco incluem prematuridade prévia, infecções (incluindo ITU mal tratada), sobrecarga física e estresse, presentes nesta paciente.',
      justify: 'O diagnóstico de trabalho de parto prematuro é confirmado pela presença de contrações uterinas regulares e dolorosas associadas a dilatação cervical de 2 cm com 70% de esvaecimento ao toque vaginal, corroborado pelo colo uterino encurtado (18 mm) à ultrassonografia transvaginal, em gestação de 30 semanas, caracterizando risco iminente de parto pré-termo.',
      expectedAnamnesis: 'Caracterização das contrações (frequência, duração, intensidade) | Presença de perda de líquido ou sangramento vaginal | Antecedente de parto prematuro em gestação anterior | Sintomas sugestivos de infecção (urinária, vaginal, sistêmica) | Fatores de risco ocupacionais e de estresse | Percepção de movimentos fetais',
      expectedPhysical: 'Palpação abdominal para caracterizar contrações e tônus uterino | Toque vaginal para avaliar dilatação e esvaecimento cervical (quando não há suspeita de placenta prévia) | Ausculta de batimentos cardiofetais | Avaliação de sinais de infecção (febre, taquicardia)',
      expectedExams: [
        { exam: 'Cardiotocografia', justify: 'Avaliar vitalidade fetal e registrar as contrações uterinas', expected: 'Padrão tranquilizador, contrações regulares confirmadas' },
        { exam: 'Ultrassonografia transvaginal para medida do colo uterino', justify: 'Avaliar risco de parto pré-termo iminente pelo comprimento cervical', expected: 'Colo encurtado, reforçando o diagnóstico' },
        { exam: 'Urina tipo I e urocultura', justify: 'Excluir infecção urinária como fator desencadeante/agravante', expected: 'Rastrear ITU como causa contribuinte' },
        { exam: 'Pesquisa de estreptococo do grupo B (swab vaginal/retal), se ainda não realizada', justify: 'Definir necessidade de profilaxia intraparto diante de risco iminente de parto', expected: 'Orientar profilaxia conforme resultado ou realizar profilaxia empírica se resultado não disponível' }
      ],
      expectedConduct: 'Farmacológica: corticoide (betametasona ou dexametasona) para maturação pulmonar fetal, indicado entre 24-34 semanas diante de risco iminente de parto pré-termo; tocólise (ex.: nifedipina) para postergar o parto por tempo suficiente para completar o ciclo de corticoide, quando não há contraindicação; sulfato de magnésio para neuroproteção fetal, indicado em gestações abaixo de 32 semanas com parto iminente | Não farmacológica: internação hospitalar para monitorização; repouso; investigação e tratamento de fatores desencadeantes (ex.: infecção urinária, se identificada) | Orientações ao paciente: explicar a importância do corticoide para o pulmão do bebê e do sulfato de magnésio para proteção neurológica; esclarecer que a equipe fará o possível para postergar o parto, mas que o preparo para um parto prematuro deve ser considerado; oferecer suporte emocional diante do medo expresso',
      expectedCommunication: 'Acolher o medo e a ansiedade da paciente em relação ao prognóstico do bebê, sem prometer certezas absolutas | Explicar de forma clara os objetivos de cada intervenção (corticoide, tocólise, sulfato de magnésio) | Validar a dificuldade da paciente em cumprir repouso por questões financeiras, sem julgamento | Verificar compreensão do plano terapêutico',
      criticalErrors: [
        'Não administrar corticoide para maturação pulmonar fetal diante de trabalho de parto prematuro confirmado dentro da janela de indicação',
        'Não considerar sulfato de magnésio para neuroproteção fetal em idade gestacional < 32 semanas com parto iminente',
        'Não investigar fatores desencadeantes tratáveis, como infecção urinária',
        'Não realizar cardiotocografia para avaliação da vitalidade fetal na admissão',
        'Comunicar o prognóstico de forma excessivamente alarmista ou, no outro extremo, minimizar os riscos da prematuridade'
      ]
    },

    instD: {
      title: 'Trabalho de Parto Prematuro — Material de Estudo',
      sections: [
        {
          h: 'Definição',
          items: [
            { item: 'Presença de contrações uterinas regulares associadas a modificações cervicais progressivas entre 20 e 36 semanas e 6 dias de gestação.', score: 1, ref: 'FEBRASGO / Ministério da Saúde — Manual de Gestação de Alto Risco' }
          ]
        },
        {
          h: 'Fatores de Risco',
          items: [
            { item: 'Parto prematuro prévio, infecções (urinárias, vaginais, periodontais), gestação múltipla, colo curto, sobrecarga física e estresse.', score: 2, ref: 'FEBRASGO' }
          ]
        },
        {
          h: 'Diagnóstico',
          items: [
            { item: 'Diagnóstico clínico por toque vaginal (dilatação e esvaecimento); medida do colo por USG transvaginal e fibronectina fetal auxiliam na estratificação de risco de parto iminente.', score: 2, ref: 'FEBRASGO' }
          ]
        },
        {
          h: 'Tratamento',
          items: [
            { item: 'Corticoide antenatal (betametasona/dexametasona) entre 24-34 semanas para maturação pulmonar fetal, reduzindo mortalidade e morbidade neonatal.', score: 2, ref: 'Ministério da Saúde / FEBRASGO' },
            { item: 'Sulfato de magnésio para neuroproteção fetal quando parto iminente antes de 32 semanas.', score: 2, ref: 'FEBRASGO' },
            { item: 'Tocolíticos (nifedipina, indometacina conforme idade gestacional) usados para postergar o parto por 48h, tempo suficiente para completar o corticoide.', score: 1, ref: 'FEBRASGO' },
            { item: 'Profilaxia para estreptococo do grupo B deve ser considerada diante de trabalho de parto prematuro sem resultado de swab disponível.', score: 1, ref: 'Ministério da Saúde' }
          ]
        }
      ]
    }
  },

  // CASO 5 — HEMORRAGIA PÓS-PARTO
  {
    id: 5,
    title: 'Sangramento vaginal intenso após o parto',
    sub: 'Centro Obstétrico',
    tema: 'Obstetricia',
    topic: 'Hemorragia Pós-Parto',
    level: 'difícil',
    cardAccent: '#8E24AA',

    instA: {
      scenario: 'Sala de recuperação pós-parto, cerca de 30 minutos após parto vaginal, equipe é chamada por sangramento aumentado.',
      patient: 'Tatiane Oliveira Cunha, 34 anos, sexo feminino, cozinheira, G4P3A0, puérpera imediata (parto vaginal há 30 minutos, recém-nascido a termo).',
      complaint: 'Sangramento vaginal volumoso e persistente após parto vaginal.',
      tasks: [
        'Avalie rapidamente a paciente e reconheça a gravidade do quadro.',
        'Realize o exame físico dirigido para identificar a causa do sangramento.',
        'Formule a hipótese diagnóstica principal (causa mais provável da hemorragia).',
        'Solicite os exames complementares pertinentes.',
        'Conduza a emergência de forma sistematizada, incluindo medidas iniciais de reanimação.'
      ]
    },

    instB: {
      vitals: {
        PA: '92/58 mmHg',
        FC: '124 bpm',
        FR: '24 irpm',
        Tax: '36,2 °C',
        Peso: '76 kg (pós-parto)',
        Altura: '1,62 m',
        SpO2: '95%'
      },
      physicalGeneral: 'Regular/mau estado geral, palidez cutâneo-mucosa importante, sudorese fria, taquicárdica, hipotensa, consciente porém sonolenta.',
      physicalSeg: 'ABDOME/ÚTERO: útero amolecido, mal contraído, fundo uterino acima da cicatriz umbilical (compatível com atonia uterina); sangramento vaginal ativo e volumoso, com coágulos. | GENITÁLIA: ausência de lacerações perineais visíveis significativas ao exame inicial; placenta já dequitada, aparentemente íntegra ao exame macroscópico inicial.',
      labs: [
        { test: 'Hemoglobina (pós-parto imediato, comparativa)', val: 'Queda de 11,2 para 7,8 g/dL em curto intervalo', ref: 'Queda >2g/dL sugere perda volumosa', alt: true },
        { test: 'Coagulograma (TP/TTPA/fibrinogênio)', val: 'Fibrinogênio 180 mg/dL, TP e TTPA discretamente prolongados', ref: 'Fibrinogênio > 200 mg/dL na gestação/puerpério; queda sugere consumo por sangramento maciço', alt: true },
        { test: 'Tipagem sanguínea e prova cruzada', val: 'O positivo, compatibilidade confirmada para 2 concentrados de hemácias', ref: 'Preparo para transfusão se necessário', alt: true }
      ],
      note: 'Este é um caso de emergência com prioridade máxima — entregar os achados do exame do útero (atonia) assim que o candidato realizar a avaliação abdominal/uterina, sem demora, dado o contexto de urgência. Reforçar que os sinais vitais estão piorando (queda de PA, aumento de FC) se a conduta demorar a ser definida.',
      patientProfile: 'Cozinheira, quarta gestação, três partos vaginais anteriores sem intercorrências relatadas. Trabalho de parto desta gestação foi prolongado, com uso de ocitocina para condução. Recém-nascido pesou 4.150g ao nascimento.',
      script: [
        { trigger: 'Ao ser avaliada', speech: '(voz fraca) Doutor(a)... estou sentindo muita tontura, e sinto que está saindo muito sangue...' },
        { trigger: 'Sobre o trabalho de parto', speech: 'Meu trabalho de parto foi bem demorado, tiveram que usar um soro para "ajudar" as contrações, o soro de ocitocina.' },
        { trigger: 'Sobre o peso do bebê', speech: 'Meu bebê nasceu bem grande, acho que passou de 4 quilos.' },
        { trigger: 'Sobre sintomas de hipovolemia', speech: 'Estou enxergando meio embaçado, e sinto que vou desmaiar se eu tentar levantar a cabeça.' },
        { trigger: 'Sobre gestações anteriores', speech: 'Já tive três partos antes, todos normais, nunca tive esse tipo de sangramento forte assim.' },
        { trigger: 'Pergunta ativa — gravidade', speech: '(muito fraca) Doutor(a)... eu vou ficar bem? Cadê meu bebê?' }
      ],
      hiddenInfo: 'Não sente contrações uterinas dolorosas típicas da involução normal, sinal indireto de atonia — só revela se perguntada especificamente sobre cólicas/contrações após o parto | O trabalho de parto foi conduzido com ocitocina por mais de 12 horas por progressão lenta, fator de risco importante para atonia por fadiga uterina — essa informação já está disponível ao candidato que perguntar sobre a evolução do trabalho de parto | Está com muito medo, mas tenta não demonstrar para "não preocupar" a equipe — comportamento a ser interpretado pelo ator como contenção emocional que cede gradualmente | Tem antecedente de sangramento aumentado (não quantificado) em um parto anterior, mas nunca foi investigado — só revela se perguntada sobre sangramentos em partos anteriores',
      actorBehavior: 'Comportamento de deterioração clínica progressiva: fala cada vez mais fraca e lenta, olhos entreabertos, se a simulação avançar sem conduta ativa definida. Demonstrar palidez e sudoria "referidas" verbalmente. Preocupação materna com o recém-nascido mesmo em meio ao próprio mal-estar.'
    },

    instC: {
      diagnosis: 'Hemorragia pós-parto por atonia uterina (causa mais comum), com sinais de instabilidade hemodinâmica (choque hipovolêmico inicial/moderado).',
      differentials: [
        'Laceração de trajeto (colo, vagina, períneo) — entra como causa comum de HPP; sai pela ausência de lacerações visíveis ao exame inicial e pela presença de útero amolecido e mal contraído, mais compatível com atonia como causa primária (não exclui necessidade de reexame minucioso do trajeto).',
        'Retenção de restos placentários — entra como causa de HPP; sai pela placenta descrita como aparentemente íntegra ao exame macroscópico inicial, embora reavaliação cuidadosa (incluindo USG, se necessário) deva ser considerada caso o sangramento persista apesar de útero contraído.',
        'Coagulopatia primária — entra como causa de sangramento excessivo; sai por ser mais provável, neste contexto, tratar-se de coagulopatia de consumo secundária ao sangramento maciço (alterações leves do coagulograma) do que uma coagulopatia de base preexistente, embora deva ser monitorizada e corrigida.',
        'Inversão uterina — entra como causa rara e grave de HPP com choque desproporcional ao sangramento visível; sai pela descrição do fundo uterino palpável em posição abdominal compatível (não invertido) ao exame.'
      ],
      context: 'A hemorragia pós-parto é definida como perda sanguínea ≥ 500 mL após parto vaginal (ou ≥ 1000 mL após cesárea) ou qualquer perda que cause instabilidade hemodinâmica, sendo uma das principais causas de morte materna no Brasil e no mundo. A atonia uterina é a causa mais frequente (cerca de 70% dos casos), sendo os "4 Ts" (Tônus, Trauma, Tecido, Trombina) a mnemônica utilizada para investigação sistemática das causas.',
      justify: 'O diagnóstico de hemorragia pós-parto por atonia uterina é sustentado pelo sangramento vaginal volumoso e persistente associado a útero amolecido, mal contraído e com fundo elevado ao exame (sinal clássico de atonia), em paciente com fatores de risco relevantes (multiparidade, trabalho de parto prolongado com uso de ocitocina, macrossomia fetal — sobredistensão uterina), corroborado pela queda significativa de hemoglobina e sinais clínicos de instabilidade hemodinâmica.',
      expectedAnamnesis: 'Caracterização do sangramento (início, volume estimado, presença de coágulos) | Características do trabalho de parto (duração, uso de ocitocina, progressão) | Peso do recém-nascido (macrossomia como fator de sobredistensão uterina) | Antecedentes obstétricos de sangramento em partos anteriores | Sintomas de hipovolemia (tontura, turvação visual, fraqueza)',
      expectedPhysical: 'Avaliação imediata de sinais vitais e sinais de choque | Palpação do fundo uterino avaliando tônus e altura | Inspeção cuidadosa do trajeto vaginal e colo para excluir lacerações | Exame da placenta buscando sinais de retenção de fragmentos',
      expectedExams: [
        { exam: 'Hemoglobina/hematócrito seriados', justify: 'Quantificar a perda sanguínea e guiar necessidade de transfusão', expected: 'Queda significativa, compatível com hemorragia importante' },
        { exam: 'Coagulograma com fibrinogênio', justify: 'Avaliar coagulopatia de consumo secundária a sangramento maciço', expected: 'Fibrinogênio reduzido e/ou tempos de coagulação prolongados em sangramento importante' },
        { exam: 'Tipagem sanguínea e prova cruzada', justify: 'Preparo imediato para transfusão de hemocomponentes', expected: 'Disponibilização ágil de concentrado de hemácias compatível' }
      ],
      expectedConduct: 'Farmacológica: iniciar uterotônicos de forma escalonada — ocitocina em infusão contínua como primeira linha, associando metilergometrina (se não houver hipertensão) e/ou misoprostol retal/sublingual conforme protocolo institucional e resposta terapêutica; reposição volêmica agressiva com cristaloides e transfusão de concentrado de hemácias conforme sinais de instabilidade | Não farmacológica: massagem uterina bimanual imediata; reavaliação completa do trajeto e da cavidade uterina para excluir lacerações e retenção de restos; considerar tamponamento uterino (balão intrauterino) e, em casos refratários, intervenções cirúrgicas (suturas compressivas, ligadura de artérias, histerectomia como último recurso) conforme progressão do quadro | Orientações ao paciente/família: comunicar a gravidade da situação de forma clara e ágil; explicar que medidas estão sendo tomadas para controlar o sangramento; tranquilizar sobre o recém-nascido, se estável, para reduzir a ansiedade materna',
      expectedCommunication: 'Agir com agilidade e trabalho em equipe compatível com emergência obstétrica | Comunicar-se de forma clara com a paciente mesmo durante a urgência do atendimento | Informar a família/acompanhante sobre a gravidade e as medidas tomadas | Tranquilizar a paciente quanto ao bem-estar do recém-nascido quando aplicável',
      criticalErrors: [
        'Não reconhecer a atonia uterina ao exame (útero amolecido, fundo elevado) como causa provável e prioritária de investigação',
        'Não iniciar massagem uterina bimanual e uterotônicos de forma imediata',
        'Não reconhecer sinais de choque hipovolêmico e retardar a reposição volêmica',
        'Não investigar sistematicamente as demais causas de HPP (lacerações, retenção de restos, coagulopatia) caso a atonia não responda ao tratamento inicial',
        'Não preparar tipagem sanguínea/prova cruzada precocemente diante de sangramento volumoso'
      ]
    },

    instD: {
      title: 'Hemorragia Pós-Parto — Material de Estudo',
      sections: [
        {
          h: 'Definição e Epidemiologia',
          items: [
            { item: 'Perda sanguínea ≥ 500 mL após parto vaginal ou ≥ 1000 mL após cesárea, ou qualquer sangramento que cause instabilidade hemodinâmica — principal causa de morte materna evitável no Brasil.', score: 2, ref: 'Ministério da Saúde / FEBRASGO' }
          ]
        },
        {
          h: 'Causas — Mnemônico dos 4 Ts',
          items: [
            { item: 'Tônus (atonia uterina, ~70% dos casos), Trauma (lacerações, rotura uterina), Tecido (retenção de restos placentários), Trombina (coagulopatias).', score: 2, ref: 'FEBRASGO' }
          ]
        },
        {
          h: 'Fatores de Risco para Atonia',
          items: [
            { item: 'Multiparidade, sobredistensão uterina (macrossomia, gestação múltipla, polidrâmnio), trabalho de parto prolongado ou uso prolongado de ocitocina, corioamnionite.', score: 2, ref: 'FEBRASGO' }
          ]
        },
        {
          h: 'Manejo Inicial',
          items: [
            { item: 'Massagem uterina bimanual imediata associada a uterotônicos escalonados (ocitocina, metilergometrina, misoprostol) constitui a primeira linha de tratamento.', score: 2, ref: 'Ministério da Saúde / FEBRASGO' },
            { item: 'Reposição volêmica agressiva e preparo precoce para transfusão sanguínea são essenciais diante de sinais de instabilidade hemodinâmica.', score: 2, ref: 'FEBRASGO' }
          ]
        },
        {
          h: 'Medidas Refratárias',
          items: [
            { item: 'Tamponamento com balão intrauterino, suturas compressivas (B-Lynch), ligadura de artérias uterinas/hipogástricas e, em último caso, histerectomia, são indicadas em hemorragia refratária às medidas iniciais.', score: 1, ref: 'FEBRASGO' }
          ]
        }
      ]
    }
  },

  // CASO 6 — DESCOLAMENTO PREMATURO DE PLACENTA (DPP)
  {
    id: 6,
    title: 'Dor abdominal súbita e sangramento escuro com 34 semanas',
    sub: 'PS Obstétrico',
    tema: 'Obstetricia',
    topic: 'Descolamento Prematuro de Placenta',
    level: 'difícil',
    cardAccent: '#8E24AA',

    instA: {
      scenario: 'Atendimento de urgência obstétrica, paciente trazida pelo marido, apresentando dor intensa.',
      patient: 'Simone Aparecida Vieira, 31 anos, sexo feminino, doméstica, G3P2A0, 34 semanas de gestação.',
      complaint: 'Dor abdominal súbita e intensa associada a sangramento vaginal escuro há cerca de 1 hora.',
      tasks: [
        'Realize a anamnese dirigida, com agilidade compatível com emergência obstétrica.',
        'Realize o exame físico geral e obstétrico dirigido.',
        'Formule a hipótese diagnóstica principal e os diferenciais.',
        'Solicite os exames complementares prioritários.',
        'Reconheça a gravidade e proponha a conduta imediata, incluindo via de parto.'
      ]
    },

    instB: {
      vitals: {
        PA: '148/96 mmHg',
        FC: '110 bpm',
        FR: '22 irpm',
        Tax: '36,3 °C',
        Peso: '74 kg',
        Altura: '1,61 m',
        SpO2: '96%'
      },
      physicalGeneral: 'Regular/mau estado geral, fácies de dor intensa, palidez cutânea, ansiosa, sudorese.',
      physicalSeg: 'ABDOME/ÚTERO: útero hipertônico ("em tábua"), extremamente doloroso à palpação difusa, sem relaxamento entre as contrações; altura uterina compatível com idade gestacional; batimentos cardiofetais com dificuldade de ausculta, quando audíveis em torno de 100 bpm com desacelerações. | GENITÁLIA: sangramento vaginal escuro, em quantidade moderada, não proporcional à gravidade do quadro materno.',
      labs: [
        { test: 'Hemoglobina', val: '9,6 g/dL (queda em relação a exame prévio de 11,8 g/dL)', ref: 'Sugestiva de perda sanguínea/hemorragia oculta', alt: true },
        { test: 'Coagulograma (TP/TTPA/fibrinogênio)', val: 'Fibrinogênio 140 mg/dL, tempos discretamente prolongados', ref: 'Fibrinogênio > 200 mg/dL na gestação; queda sugere coagulopatia de consumo', alt: true },
        { test: 'Tipagem sanguínea e prova cruzada', val: 'B positivo, reserva de hemocomponentes solicitada', ref: 'Preparo para eventual transfusão/cirurgia de urgência', alt: true }
      ],
      image: 'Cardiotocografia: padrão categoria III (anormal), com bradicardia fetal e desacelerações tardias recorrentes, sugestivo de sofrimento fetal agudo. Ultrassonografia obstétrica de urgência (se realizada antes da via de parto): possível área hipoecoica retroplacentária, achado que pode estar ausente mesmo em DPP confirmado — o diagnóstico é primariamente clínico.',
      note: 'Este é um caso de emergência com risco de vida materno-fetal — o diagnóstico é eminentemente clínico (hipertonia uterina + dor + sangramento) e NÃO deve depender da confirmação por USG para a tomada de decisão. Reforçar ao candidato, se ele insistir em aguardar USG antes de agir, que "o quadro está se agravando" (piora de FC materna, desacelerações fetais).',
      patientProfile: 'Doméstica, terceira gestação, dois partos vaginais anteriores sem intercorrências. Hipertensa crônica em uso irregular de medicação (perdeu consultas recentes de pré-natal). Refere início súbito da dor durante atividade doméstica.',
      script: [
        { trigger: 'Queixa principal', speech: '(gemendo) Doutor(a)... a dor começou do nada, é uma dor muito forte, a barriga ficou dura, e comecei a sangrar um sangue escuro.' },
        { trigger: 'Sobre a dor', speech: 'A dor não passa, é constante, diferente de cólica, parece que a barriga não relaxa nunca.' },
        { trigger: 'Sobre movimentação fetal', speech: '(muito preocupada) Doutor(a), eu não sinto mais o bebê mexer, ele estava mexendo bastante hoje de manhã...' },
        { trigger: 'Sobre pressão arterial/hipertensão', speech: 'Eu tenho pressão alta, tomo remédio, mas confesso que ando esquecendo de tomar direito ultimamente.' },
        { trigger: 'Sobre pré-natal', speech: 'Faltei às duas últimas consultas do pré-natal, a vida andou corrida.' },
        { trigger: 'Sobre trauma/esforço', speech: 'Não sofri nenhuma queda nem pancada, a dor começou enquanto eu estava limpando a casa.' },
        { trigger: 'Pergunta ativa — gravidade', speech: '(chorando) Doutor(a), meu bebê está bem? Por favor me diz que ele está bem!' }
      ],
      hiddenInfo: 'Parou de sentir os movimentos fetais há cerca de 1 hora, coincidindo com o início da dor — só revela espontaneamente se perguntada diretamente sobre percepção de movimentos fetais recentes | Está com a pressão arterial descontrolada há semanas por dificuldade de acesso à medicação (fator de risco importante para DPP) — só revela se perguntada sobre adesão ao tratamento anti-hipertensivo | Já teve um episódio de pressão alta muito descontrolada nesta gestação que a levou à emergência uma vez, sem ter sido internada — só revela se perguntada sobre intercorrências prévias na gestação atual | Está em pânico e verbaliza medo de morrer, além do medo pelo bebê — comportamento a ser expresso conforme a gravidade da simulação avança',
      actorBehavior: 'Dor intensa e constante (diferente de contração intermitente) — gemer continuamente, se contorcer. Pânico crescente, principalmente ao mencionar ausência de movimentos fetais. Fala rápida e ofegante.'
    },

    instC: {
      diagnosis: 'Descolamento prematuro de placenta (DPP), provavelmente associado a hipertensão mal controlada, com sinais de sofrimento fetal agudo grave.',
      differentials: [
        'Placenta prévia com sangramento — entra como causa de sangramento no 3º trimestre; sai pela característica do sangramento (indolor, vermelho vivo na placenta prévia) e pela presença marcante de hipertonia uterina dolorosa, achado clássico e distintivo do DPP.',
        'Trabalho de parto prematuro com sangramento associado (perda de tampão mucoso) — entra pela dor abdominal e sangramento; sai pela hipertonia uterina persistente (sem relaxamento entre contrações) e pelo sofrimento fetal agudo, incompatíveis com trabalho de parto fisiológico.',
        'Rotura uterina — entra como causa de dor abdominal súbita intensa com sofrimento fetal em gestantes com risco (cicatriz uterina prévia); sai pela ausência de cicatriz de cesárea anterior relatada e pelo quadro mais compatível com DPP associado a hipertensão.',
        'Rotura de vasa prévia — entra como causa de sangramento com sofrimento fetal agudo; sai por ser um evento tipicamente associado à rotura da bolsa e sangramento de origem fetal, menos compatível com o quadro de dor abdominal intensa e hipertonia descritos.'
      ],
      context: 'O descolamento prematuro de placenta é a separação da placenta normalmente inserida antes do parto, sendo uma emergência obstétrica grave associada a hipertensão (principal fator de risco, incluindo pré-eclâmpsia e hipertensão crônica mal controlada), trauma abdominal e uso de substâncias. Cursa com risco elevado de morte materna e fetal, exigindo reconhecimento e conduta imediatos.',
      justify: 'O diagnóstico de DPP é eminentemente clínico, sustentado pela tríade de dor abdominal súbita e intensa, hipertonia uterina ("útero em tábua") e sangramento vaginal escuro desproporcional à gravidade do quadro materno, associado a sinais de sofrimento fetal agudo (bradicardia, desacelerações tardias) em paciente com fator de risco relevante (hipertensão crônica mal controlada), não sendo necessária confirmação ultrassonográfica para a tomada de decisão.',
      expectedAnamnesis: 'Caracterização da dor (início, intensidade, constância) | Características do sangramento vaginal | Percepção de movimentos fetais | História de hipertensão e adesão ao tratamento | História de trauma abdominal recente | Assiduidade ao pré-natal e intercorrências prévias na gestação atual',
      expectedPhysical: 'Avaliação rápida de sinais vitais maternos | Palpação abdominal identificando hipertonia uterina | Ausculta de batimentos cardiofetais (avaliar dificuldade de ausculta como sinal de gravidade) | Avaliação do sangramento vaginal',
      expectedExams: [
        { exam: 'Cardiotocografia', justify: 'Avaliar vitalidade fetal de forma imediata diante de suspeita de sofrimento fetal agudo', expected: 'Padrão anormal, com bradicardia/desacelerações' },
        { exam: 'Hemograma completo', justify: 'Avaliar repercussão da perda sanguínea, incluindo hemorragia oculta retroplacentária', expected: 'Possível queda de hemoglobina' },
        { exam: 'Coagulograma com fibrinogênio', justify: 'Rastrear coagulopatia de consumo, complicação grave associada ao DPP', expected: 'Possível redução de fibrinogênio e alteração dos tempos de coagulação' },
        { exam: 'Tipagem sanguínea e prova cruzada', justify: 'Preparo imediato para transfusão e para a resolução cirúrgica de urgência', expected: 'Disponibilização ágil de hemocomponentes' },
        { exam: 'Ultrassonografia obstétrica (não deve atrasar a conduta)', justify: 'Pode auxiliar na avaliação, mas sua ausência de achados não exclui o diagnóstico clínico', expected: 'Eventual área hipoecoica retroplacentária, achado inconstante' }
      ],
      expectedConduct: 'Farmacológica: estabilização hemodinâmica imediata com acesso venoso calibroso e reposição volêmica; correção de coagulopatia com hemocomponentes conforme necessidade (concentrado de hemácias, plasma fresco, crioprecipitado) | Não farmacológica: interrupção imediata da gestação por via mais rápida — cesariana de urgência é a conduta na maioria dos casos com sofrimento fetal agudo e feto vivo, dado o risco de óbito fetal e materno com a demora; acionar equipe multiprofissional (obstetra, anestesista, neonatologista) imediatamente | Orientações ao paciente/família: comunicar a gravidade extrema do quadro de forma direta, porém acolhedora; explicar a necessidade de cesariana de urgência para tentar salvar a vida do bebê e da mãe; oferecer suporte emocional diante do pânico e do luto antecipatório possível',
      expectedCommunication: 'Agir com extrema agilidade, reconhecendo a emergência de risco de vida | Comunicar a gravidade e a necessidade de cesariana imediata de forma clara | Acionar e coordenar a equipe multiprofissional sem demora | Acolher o pânico da paciente sem perder o foco na ação imediata necessária',
      criticalErrors: [
        'Aguardar confirmação por ultrassonografia antes de agir, atrasando a resolução da emergência',
        'Não reconhecer a hipertonia uterina dolorosa associada a sangramento escuro como DPP',
        'Não identificar os sinais de sofrimento fetal agudo na cardiotocografia/ausculta',
        'Não indicar interrupção imediata da gestação (cesariana de urgência) diante de sofrimento fetal grave e feto vivo',
        'Não considerar e corrigir coagulopatia associada em caso de sangramento importante'
      ]
    },

    instD: {
      title: 'Descolamento Prematuro de Placenta (DPP) — Material de Estudo',
      sections: [
        {
          h: 'Definição e Fatores de Risco',
          items: [
            { item: 'Separação da placenta normalmente inserida antes do nascimento do feto; principal fator de risco é a hipertensão (crônica ou pré-eclâmpsia), seguido de trauma abdominal, uso de cocaína/tabagismo e rotura prematura de membranas.', score: 2, ref: 'FEBRASGO / Ministério da Saúde — Manual de Gestação de Alto Risco' }
          ]
        },
        {
          h: 'Quadro Clínico Clássico',
          items: [
            { item: 'Tríade: dor abdominal súbita e intensa, hipertonia uterina ("útero em tábua") e sangramento vaginal escuro (pode estar ausente em hemorragia oculta).', score: 2, ref: 'FEBRASGO' }
          ]
        },
        {
          h: 'Diagnóstico',
          items: [
            { item: 'Diagnóstico é clínico — não deve ser postergado à espera de confirmação por ultrassonografia, que tem sensibilidade limitada para o DPP.', score: 2, ref: 'FEBRASGO' }
          ]
        },
        {
          h: 'Conduta',
          items: [
            { item: 'Interrupção imediata da gestação (cesariana de urgência na maioria dos casos com feto vivo e sofrimento fetal); parto vaginal pode ser considerado em óbito fetal já estabelecido, sem contraindicação, e com progresso rápido do trabalho de parto.', score: 2, ref: 'FEBRASGO' },
            { item: 'Correção agressiva de coagulopatia associada, complicação temida (coagulação intravascular disseminada).', score: 2, ref: 'FEBRASGO' }
          ]
        }
      ]
    }
  },

  // CASO 7 — PLACENTA PRÉVIA
  {
    id: 7,
    title: 'Sangramento vermelho vivo indolor com 32 semanas',
    sub: 'PS Obstétrico',
    tema: 'Obstetricia',
    topic: 'Placenta Prévia',
    level: 'moderado',
    cardAccent: '#8E24AA',

    instA: {
      scenario: 'Atendimento de urgência obstétrica, paciente chega caminhando, relatando episódio de sangramento.',
      patient: 'Wanessa Cardoso Lima, 35 anos, sexo feminino, professora, G3P1A1 (uma cesárea anterior), 32 semanas de gestação.',
      complaint: 'Episódio de sangramento vaginal vermelho vivo, sem dor, ocorrido há cerca de 2 horas.',
      tasks: [
        'Realize a anamnese dirigida, evitando manobras contraindicadas.',
        'Realize o exame físico obstétrico dirigido (sem toque vaginal digital).',
        'Formule a hipótese diagnóstica principal e os diferenciais.',
        'Solicite os exames complementares adequados.',
        'Proponha a conduta conforme a estabilidade materno-fetal.'
      ]
    },

    instB: {
      vitals: {
        PA: '116/72 mmHg',
        FC: '88 bpm',
        FR: '18 irpm',
        Tax: '36,4 °C',
        Peso: '72 kg',
        Altura: '1,66 m',
        SpO2: '98%'
      },
      physicalGeneral: 'Bom/regular estado geral, ansiosa, corada, sem sinais evidentes de hipovolemia no momento.',
      physicalSeg: 'ABDOME/ÚTERO: útero normotônico, indolor à palpação, sem contrações; altura uterina compatível com idade gestacional; batimentos cardiofetais presentes, rítmicos, 146 bpm. | GENITÁLIA: sangramento vaginal vermelho vivo em quantidade discreta a moderada no momento do exame, sem dor associada. NÃO foi realizado toque vaginal digital pela equipe, por suspeita de placenta prévia até exclusão por imagem.',
      labs: [
        { test: 'Hemoglobina', val: '10,8 g/dL', ref: '≥ 11 g/dL', alt: true },
        { test: 'Tipagem sanguínea e fator Rh', val: 'AB positivo', ref: 'Determinar necessidade de profilaxia anti-D se Rh negativo (não se aplica aqui)', alt: false },
        { test: 'Coagulograma', val: 'Normal', ref: 'Normal', alt: false }
      ],
      image: 'Ultrassonografia obstétrica com abordagem transvaginal cuidadosa: placenta de inserção baixa, recobrindo totalmente o orifício interno do colo uterino, compatível com placenta prévia centro-total. Feto único, vivo, com boa vitalidade, peso estimado adequado para a idade gestacional.',
      note: 'O toque vaginal digital é CONTRAINDICADO neste cenário até que a localização placentária seja esclarecida — se o candidato tentar realizar toque vaginal antes da USG, informar que a equipe de enfermagem "alerta sobre sangramento no 3º trimestre sem USG prévia disponível no prontuário" como uma pista para reconsiderar a conduta.',
      patientProfile: 'Professora, terceira gestação, uma cesárea anterior (por sofrimento fetal) e um aborto espontâneo prévio. Refere que o sangramento ocorreu de forma espontânea, sem relação com esforço físico ou relação sexual, e cessou parcialmente até a chegada ao serviço.',
      script: [
        { trigger: 'Queixa principal', speech: 'Doutor(a), comecei a sangrar do nada, um sangue vermelho vivo, bastante quantidade, mas não senti nenhuma dor.' },
        { trigger: 'Sobre a dor', speech: 'Não senti dor nenhuma, nem cólica, nem a barriga ficou dura, foi só o sangramento mesmo.' },
        { trigger: 'Sobre fator desencadeante', speech: 'Não tinha feito esforço nem nada, estava sentada assistindo TV quando comecei a sangrar.' },
        { trigger: 'Sobre gestação anterior', speech: 'Minha última gestação foi cesárea, tive que fazer porque o bebê "sofreu" durante o trabalho de parto.' },
        { trigger: 'Sobre movimentação fetal', speech: 'O bebê está mexendo normal, isso não mudou.' },
        { trigger: 'Sobre exames prévios', speech: 'Eu não fiz nenhum ultrassom recente, o último foi lá pelas 20 semanas, estava tudo normal na época.' },
        { trigger: 'Pergunta ativa — conduta', speech: 'Doutor(a), o que está causando esse sangramento? Vou precisar ficar internada? Posso ter o bebê normal ainda?' }
      ],
      hiddenInfo: 'Teve um pequeno episódio de sangramento semelhante, mais leve, há cerca de 3 semanas, que cessou espontaneamente e não foi investigado — só revela se perguntada sobre episódios anteriores de sangramento | Está bastante preocupada com a possibilidade de precisar fazer nova cesárea, pois sua recuperação da cesárea anterior foi difícil — só revela se o candidato tocar no tema da via de parto | Teve relação sexual na noite anterior ao episódio de sangramento — só revela se perguntada diretamente sobre atividade sexual recente | Não sabe a localização exata da placenta na gestação atual, pois não fez USG morfológico recentemente — só revela se perguntada sobre exames de imagem prévios',
      actorBehavior: 'Ansiosa mas sem sinais de instabilidade importante no momento (diferente de quadro de DPP). Preocupada com a repetição de cesárea e com a segurança do bebê. Colaborativa, mas pode ficar apreensiva se o candidato tentar realizar toque vaginal sem explicar o motivo de evitá-lo.'
    },

    instC: {
      diagnosis: 'Placenta prévia centro-total, causa do sangramento vaginal indolor de 3º trimestre, em gestante com fator de risco relevante (cesárea anterior).',
      differentials: [
        'Descolamento prematuro de placenta — entra como principal diferencial de sangramento no 3º trimestre; sai pela ausência de dor abdominal, hipertonia uterina e sinais de sofrimento fetal, além do sangramento vermelho vivo (e não escuro) característico deste caso.',
        'Rotura de vasa prévia — entra como causa de sangramento indolor associado a vasos fetais sobre o colo; geralmente associada a sofrimento fetal agudo desproporcional ao volume de sangramento (origem fetal); menos provável neste caso pela boa vitalidade fetal mantida e pela USG já demonstrando placenta prévia como explicação suficiente.',
        'Sangramento de origem cervical (ectopia, pólipo, lesão por relação sexual) — entra pela história de relação sexual recente; sai pela confirmação de placenta prévia à USG como causa mais provável e clinicamente relevante do sangramento.',
        'Trabalho de parto prematuro com perda de tampão mucoso — entra como causa de sangramento leve; sai pela ausência de contrações uterinas e pela quantidade e característica do sangramento, além da placenta prévia confirmada.'
      ],
      context: 'A placenta prévia é definida pela inserção da placenta total ou parcialmente sobre o orifício interno do colo uterino, sendo uma importante causa de sangramento indolor no 2º e 3º trimestres. Fatores de risco incluem cesárea anterior, multiparidade, idade materna avançada e tabagismo. O manejo depende da estabilidade materno-fetal, da idade gestacional e do volume de sangramento.',
      justify: 'O diagnóstico é confirmado pela ultrassonografia, que demonstra placenta recobrindo totalmente o orifício interno do colo (placenta prévia centro-total), associado ao quadro clínico característico de sangramento vermelho vivo, indolor, sem hipertonia uterina, em paciente com fator de risco relevante (cesárea anterior), diferenciando-se do DPP pela ausência de dor e hipertonia.',
      expectedAnamnesis: 'Caracterização do sangramento (cor, quantidade, presença ou ausência de dor) | Fator desencadeante (esforço, relação sexual, espontâneo) | Antecedente de cesárea ou cirurgia uterina prévia | Episódios semelhantes anteriores nesta gestação | Percepção de movimentos fetais | Conhecimento sobre localização placentária em exames prévios',
      expectedPhysical: 'Avaliação de sinais vitais maternos | Palpação abdominal avaliando tônus uterino (deve estar normal) | Ausculta de batimentos cardiofetais | Evitar toque vaginal digital até exclusão de placenta prévia por imagem',
      expectedExams: [
        { exam: 'Ultrassonografia obstétrica (transabdominal e/ou transvaginal cuidadosa)', justify: 'Confirmar a localização placentária em relação ao orifício interno do colo', expected: 'Confirmação de placenta prévia e sua classificação (marginal, parcial ou centro-total)' },
        { exam: 'Hemograma completo', justify: 'Avaliar repercussão hematológica do sangramento', expected: 'Possível queda discreta de hemoglobina' },
        { exam: 'Tipagem sanguínea e fator Rh', justify: 'Preparo para eventual necessidade de transfusão e verificação de necessidade de profilaxia anti-D', expected: 'Determinar tipo sanguíneo e Rh' },
        { exam: 'Cardiotocografia', justify: 'Avaliar vitalidade fetal', expected: 'Padrão tranquilizador na maioria dos casos estáveis' }
      ],
      expectedConduct: 'Farmacológica: corticoide para maturação pulmonar fetal, considerando a possibilidade de parto pré-termo diante de sangramento recorrente; nenhuma indicação de tocólise agressiva se houver sangramento ativo importante | Não farmacológica: conduta expectante com internação e repouso em casos estáveis e sangramento autolimitado, permitindo prolongar a gestação; cesariana eletiva programada (tipicamente entre 36-37 semanas) é a via de parto indicada na placenta prévia centro-total, mesmo sem sangramento ativo, dado o risco de hemorragia grave em trabalho de parto; cesariana de urgência indicada diante de sangramento volumoso ou instabilidade materno-fetal | Orientações ao paciente: explicar a condição e a necessidade de evitar exames de toque vaginal e relações sexuais; orientar sobre sinais de alarme para retorno imediato (sangramento volumoso); esclarecer que a via de parto provavelmente será cesariana, abordando as preocupações da paciente sobre a recuperação',
      expectedCommunication: 'Explicar de forma clara por que o toque vaginal não deve ser realizado antes da USG | Acolher a preocupação da paciente sobre nova cesárea, validando sua experiência prévia | Explicar a conduta expectante versus necessidade de intervenção conforme a evolução | Orientar sinais de alarme para retorno imediato',
      criticalErrors: [
        'Realizar toque vaginal digital antes de excluir placenta prévia por ultrassonografia',
        'Não considerar corticoide para maturação pulmonar fetal diante do risco de prematuridade',
        'Não orientar a via de parto cesariana como indicação na placenta prévia centro-total',
        'Não orientar sobre restrição de relações sexuais e evitar novos toques vaginais durante o acompanhamento',
        'Conduzir o caso como emergência de DPP sem diferenciar corretamente os quadros clínicos'
      ]
    },

    instD: {
      title: 'Placenta Prévia — Material de Estudo',
      sections: [
        {
          h: 'Definição e Classificação',
          items: [
            { item: 'Inserção da placenta total ou parcialmente sobre o orifício interno do colo uterino; classificada em prévia centro-total, parcial ou marginal conforme o grau de recobrimento.', score: 2, ref: 'FEBRASGO' }
          ]
        },
        {
          h: 'Fatores de Risco',
          items: [
            { item: 'Cesárea anterior, multiparidade, idade materna avançada, tabagismo, gestação múltipla e curetagens uterinas prévias.', score: 1, ref: 'FEBRASGO' }
          ]
        },
        {
          h: 'Quadro Clínico',
          items: [
            { item: 'Sangramento vaginal vermelho vivo, indolor, geralmente sem hipertonia uterina, no 2º-3º trimestre — diferencia-se do DPP pela ausência de dor.', score: 2, ref: 'FEBRASGO' }
          ]
        },
        {
          h: 'Diagnóstico',
          items: [
            { item: 'Ultrassonografia (transvaginal, quando necessária, é segura e mais precisa que a transabdominal) confirma o diagnóstico; toque vaginal digital é contraindicado até exclusão do diagnóstico.', score: 2, ref: 'FEBRASGO' }
          ]
        },
        {
          h: 'Conduta',
          items: [
            { item: 'Conduta expectante com internação/repouso em sangramento autolimitado e feto pré-termo estável; cesariana eletiva programada (36-37 semanas) na placenta prévia centro-total.', score: 2, ref: 'FEBRASGO' },
            { item: 'Cesariana de urgência indicada diante de sangramento volumoso ou instabilidade materno-fetal, independente da idade gestacional.', score: 1, ref: 'FEBRASGO' }
          ]
        }
      ]
    }
  },

  // CASO 8 — ABORTAMENTO
  {
    id: 8,
    title: 'Sangramento e cólica com 9 semanas de gestação',
    sub: 'PS Obstétrico',
    tema: 'Obstetricia',
    topic: 'Abortamento',
    level: 'moderado',
    cardAccent: '#8E24AA',

    instA: {
      scenario: 'Atendimento de urgência obstétrica, paciente relata sangramento vaginal e cólicas.',
      patient: 'Priscila Andrade Souza, 30 anos, sexo feminino, analista financeira, G2P1A0, 9 semanas de gestação por DUM.',
      complaint: 'Sangramento vaginal moderado com coágulos e cólica em baixo-ventre há cerca de 6 horas.',
      tasks: [
        'Realize a anamnese dirigida ao caso.',
        'Realize o exame físico geral e ginecológico/obstétrico dirigido.',
        'Formule a hipótese diagnóstica e classifique o tipo de abortamento.',
        'Solicite os exames complementares adequados.',
        'Proponha a conduta terapêutica apropriada ao quadro.'
      ]
    },

    instB: {
      vitals: {
        PA: '112/70 mmHg',
        FC: '90 bpm',
        FR: '18 irpm',
        Tax: '36,4 °C',
        Peso: '64 kg',
        Altura: '1,63 m'
      },
      physicalGeneral: 'Regular estado geral, ansiosa, com palidez leve de mucosas, sem sinais de instabilidade hemodinâmica importante.',
      physicalSeg: 'ABDOME: doloroso à palpação em hipogástrio, sem sinais de irritação peritoneal. | EXAME ESPECULAR: sangramento vaginal ativo moderado, com coágulos, proveniente da cavidade uterina; colo uterino entreaberto (orifício externo pérvio a Hegar/pinça). | TOQUE VAGINAL: útero aumentado de volume compatível com gestação inicial, amolecido, doloroso à mobilização discreta; colo entreaberto, sem odor fétido.',
      labs: [
        { test: 'Beta-hCG quantitativo', val: '8.200 mUI/mL (valor abaixo do esperado para 9 semanas)', ref: 'Valor esperado para 9 semanas costuma ser mais elevado; útil para acompanhamento seriado', alt: true },
        { test: 'Hemoglobina', val: '11,4 g/dL', ref: '≥ 11 g/dL', alt: false },
        { test: 'Tipagem sanguínea e fator Rh', val: 'O negativo', ref: 'Relevante para indicação de profilaxia anti-D', alt: true }
      ],
      image: 'Ultrassonografia transvaginal: útero com conteúdo endometrial heterogêneo, saco gestacional irregular e colabado, sem batimentos cardíacos embrionários identificáveis; embrião medindo compatível com 7 semanas (discrepância com a idade gestacional por DUM), compatível com abortamento retido ou em curso, a depender da correlação com o exame especular (colo entreaberto sugere abortamento em curso/incompleto).',
      note: 'O beta-hCG e a USG devem ser entregues ao candidato conforme solicitados, permitindo a correlação entre os achados clínicos (colo entreaberto ao especular) e de imagem para classificar corretamente o tipo de abortamento.',
      patientProfile: 'Analista financeira, casada, um filho de 3 anos (parto normal). Gestação atual não estava sendo ativamente planejada, mas era bem-vinda. Refere início do sangramento de forma súbita, com piora progressiva nas últimas horas.',
      script: [
        { trigger: 'Queixa principal', speech: 'Doutor(a), comecei a sangrar bastante, com coágulos, e estou com uma cólica forte, parecida com cólica menstrual, só que muito mais intensa.' },
        { trigger: 'Sobre o sangramento', speech: 'Começou como uma borra escura ontem à noite, mas hoje virou um sangramento mais vivo, com coágulos grandes.' },
        { trigger: 'Sobre a cólica', speech: 'A cólica vem e volta, tipo uma dor em ondas, bem forte, parecida com uma contração.' },
        { trigger: 'Sobre sintomas gestacionais', speech: 'Nos últimos dias eu senti que os enjoos que eu tinha diminuíram bastante, achei estranho mas não dei muita importância.' },
        { trigger: 'Sobre gestação anterior', speech: 'Minha primeira gestação foi tranquila, sem esse tipo de problema.' },
        { trigger: 'Pergunta ativa — prognóstico', speech: '(muito abalada) Doutor(a), eu estou perdendo o bebê? Isso é minha culpa? Eu fiz alguma coisa errada?' }
      ],
      hiddenInfo: 'Notou redução dos sintomas gestacionais (náuseas, mastalgia) nos últimos dias antes do sangramento começar — só revela se perguntada especificamente sobre a evolução dos sintomas de gestação | Está se culpando por ter continuado a malhar academia moderadamente durante a gestação, achando que isso "causou" a perda — só revela essa culpa se o candidato explorar aspectos emocionais | É Rh negativo e não sabe da necessidade de imunoglobulina anti-D no contexto de abortamento — informação a ser abordada pelo candidato, não uma "informação escondida" da paciente propriamente | Tem episódios de tontura leve ao se levantar rapidamente, mas nada muito importante — só revela se perguntada sobre sintomas de anemia',
      actorBehavior: 'Muito abalada emocionalmente, chorosa, verbaliza culpa espontaneamente ou quando questionada sobre o que pode ter causado a perda. Colaborativa durante o exame apesar do desconforto emocional.'
    },

    instC: {
      diagnosis: 'Abortamento incompleto/em curso (9 semanas por DUM, com discrepância ecográfica sugerindo óbito embrionário há cerca de 2 semanas), com colo entreaberto e sangramento ativo.',
      differentials: [
        'Ameaça de abortamento — entra como diagnóstico diferencial de sangramento no início da gestação; sai pela presença de colo entreaberto ao exame especular/toque e pela ausência de batimentos cardíacos embrionários à USG, achados incompatíveis com gestação em evolução.',
        'Gestação ectópica — entra como diagnóstico obrigatório a excluir em sangramento do 1º trimestre; sai pela ultrassonografia demonstrando conteúdo intrauterino compatível com gestação tópica não evolutiva, e não massa anexial/ausência de conteúdo uterino.',
        'Mola hidatiforme — entra como causa de sangramento e beta-hCG alterado; sai pelo aspecto ecográfico descrito (saco gestacional colabado com embrião, não o padrão característico em "flocos de neve" da mola), tornando o abortamento o diagnóstico mais provável.',
        'Abortamento completo — entra como possibilidade evolutiva; sai pela presença de sangramento ainda ativo e colo entreaberto com conteúdo residual à USG, sugerindo que a expulsão ainda não se completou (incompleto/em curso).'
      ],
      context: 'O abortamento é definido como a interrupção da gestação antes de 20-22 semanas ou com feto pesando menos de 500g, sendo uma das intercorrências mais comuns do início da gestação. A classificação clínica (ameaça, inevitável/em curso, incompleto, completo, retido, infectado) orienta a conduta. A discrepância entre a idade gestacional esperada e o tamanho embrionário à USG, associada à redução de sintomas gestacionais, sugere óbito embrionário ocorrido antes do início do sangramento.',
      justify: 'O diagnóstico de abortamento incompleto/em curso é sustentado pela presença de sangramento vaginal ativo com coágulos, cólica em baixo-ventre, colo uterino entreaberto ao exame especular e toque, associados à ultrassonografia demonstrando saco gestacional colabado e ausência de batimentos cardíacos embrionários, com discrepância de tamanho compatível com óbito embrionário prévio ao quadro agudo.',
      expectedAnamnesis: 'Caracterização do sangramento (início, volume, presença de coágulos ou material tecidual) | Caracterização da dor/cólica | Evolução dos sintomas gestacionais (náuseas, mastalgia) e sua redução recente | Antecedentes obstétricos, incluindo abortamentos prévios | Tipagem sanguínea conhecida | Fatores emocionais associados à perda gestacional',
      expectedPhysical: 'Avaliação de sinais vitais e sinais de instabilidade hemodinâmica | Exame especular avaliando origem e volume do sangramento e permeabilidade do colo | Toque vaginal bimanual avaliando tamanho uterino e permeabilidade cervical',
      expectedExams: [
        { exam: 'Beta-hCG quantitativo', justify: 'Auxiliar na correlação com a idade gestacional e no seguimento após a conduta', expected: 'Valor abaixo do esperado para a idade gestacional, sugerindo gestação não evolutiva' },
        { exam: 'Ultrassonografia transvaginal', justify: 'Confirmar viabilidade da gestação e classificar o tipo de abortamento', expected: 'Ausência de batimentos cardíacos embrionários, saco gestacional colabado' },
        { exam: 'Hemograma completo', justify: 'Avaliar repercussão hematológica do sangramento', expected: 'Pode estar normal ou levemente reduzido' },
        { exam: 'Tipagem sanguínea e fator Rh', justify: 'Determinar necessidade de profilaxia com imunoglobulina anti-D em gestante Rh negativo', expected: 'Confirmação da necessidade de profilaxia, se Rh negativo' }
      ],
      expectedConduct: 'Farmacológica: profilaxia com imunoglobulina anti-D para esta paciente Rh negativo; analgesia adequada para a cólica; misoprostol como opção de conduta expectante farmacológica para esvaziamento uterino, quando aplicável e a paciente optar por essa via | Não farmacológica: esvaziamento uterino (aspiração manual intrauterina/AMIU ou curetagem) indicado diante de abortamento incompleto com sangramento significativo ou colo pérvio, especialmente se houver instabilidade ou preferência da paciente por resolução mais rápida; discutir com a paciente as opções entre conduta expectante, farmacológica e cirúrgica quando clinicamente estável para isso | Orientações ao paciente: explicar de forma acolhedora que o abortamento não foi causado por atividades cotidianas (como exercício físico moderado) e que, na maioria das vezes, decorre de alterações cromossômicas espontâneas do embrião; oferecer suporte emocional e, se necessário, encaminhamento para apoio psicológico; orientar sinais de alarme (sangramento muito intenso, febre) e retorno para acompanhamento',
      expectedCommunication: 'Acolher o sofrimento emocional da paciente diante da perda gestacional, sem minimizar | Desconstruir ativamente a culpa expressa pela paciente com informação baseada em evidências | Explicar as opções de conduta de forma clara, respeitando a autonomia da paciente na escolha quando aplicável | Verificar compreensão do plano terapêutico',
      criticalErrors: [
        'Não verificar tipagem sanguínea/fator Rh e não considerar profilaxia anti-D em paciente Rh negativo',
        'Não excluir gestação ectópica antes de confirmar o diagnóstico de abortamento',
        'Reforçar ou não desconstruir a culpa da paciente em relação a atividades cotidianas como causa do abortamento',
        'Não oferecer opções de conduta (expectante, farmacológica, cirúrgica) quando clinicamente aplicável, impondo uma única alternativa',
        'Não oferecer suporte emocional adequado diante do sofrimento evidente da paciente'
      ]
    },

    instD: {
      title: 'Abortamento — Material de Estudo',
      sections: [
        {
          h: 'Definição e Classificação',
          items: [
            { item: 'Interrupção da gestação antes de 20-22 semanas ou feto < 500g; classificação clínica: ameaça, inevitável/em curso, incompleto, completo, retido, infectado.', score: 2, ref: 'FEBRASGO / Ministério da Saúde' }
          ]
        },
        {
          h: 'Diagnóstico',
          items: [
            { item: 'Correlação entre exame especular/toque (permeabilidade do colo) e ultrassonografia transvaginal (viabilidade, conteúdo uterino) define o tipo de abortamento.', score: 2, ref: 'FEBRASGO' },
            { item: 'Beta-hCG seriado auxilia no acompanhamento, especialmente quando há dúvida diagnóstica com gestação ectópica.', score: 1, ref: 'FEBRASGO' }
          ]
        },
        {
          h: 'Conduta',
          items: [
            { item: 'Conduta expectante, farmacológica (misoprostol) ou cirúrgica (AMIU/curetagem) conforme quadro clínico, idade gestacional e preferência da paciente, quando clinicamente estável para escolha compartilhada.', score: 2, ref: 'FEBRASGO / Ministério da Saúde' },
            { item: 'Profilaxia com imunoglobulina anti-D é indicada em toda gestante Rh negativo com abortamento, independente da idade gestacional.', score: 2, ref: 'FEBRASGO' }
          ]
        },
        {
          h: 'Acolhimento',
          items: [
            { item: 'O suporte emocional e a desconstrução de culpa são partes essenciais do atendimento, já que a maioria dos abortamentos decorre de alterações cromossômicas espontâneas, não de atividades cotidianas da gestante.', score: 1, ref: 'FEBRASGO' }
          ]
        }
      ]
    }
  },

  // CASO 9 — INFECÇÃO DO TRATO URINÁRIO / PIELONEFRITE NA GESTAÇÃO
  {
    id: 9,
    title: 'Febre, calafrios e dor lombar com 24 semanas de gestação',
    sub: 'PS Obstétrico',
    tema: 'Obstetricia',
    topic: 'Pielonefrite na Gestação',
    level: 'moderado',
    cardAccent: '#8E24AA',

    instA: {
      scenario: 'Atendimento de urgência obstétrica, paciente com queixa de febre e dor lombar.',
      patient: 'Aline Rodrigues Pinto, 26 anos, sexo feminino, atendente de loja, G1P0A0, 24 semanas de gestação.',
      complaint: 'Febre, calafrios e dor lombar à direita há cerca de 1 dia, associados a sintomas urinários.',
      tasks: [
        'Realize a anamnese dirigida ao caso.',
        'Realize o exame físico geral e obstétrico dirigido.',
        'Formule a hipótese diagnóstica e os diferenciais.',
        'Solicite os exames complementares adequados.',
        'Proponha a conduta terapêutica, incluindo necessidade de internação.'
      ]
    },

    instB: {
      vitals: {
        PA: '108/68 mmHg',
        FC: '108 bpm',
        FR: '20 irpm',
        Tax: '38,9 °C',
        Peso: '66 kg',
        Altura: '1,64 m'
      },
      physicalGeneral: 'Regular estado geral, febril, taquicárdica, com fácies de dor e mal-estar.',
      physicalSeg: 'ABDOME/ÚTERO: altura uterina compatível com idade gestacional, tônus uterino normal, sem contrações; batimentos cardiofetais presentes, rítmicos, 150 bpm. | PUNHO-PERCUSSÃO LOMBAR: dolorosa à direita (sinal de Giordano positivo à direita). | GENITÁLIA: sem sangramento ou perda de líquido.',
      labs: [
        { test: 'Urina tipo I (EAS)', val: 'Leucocitúria importante (>100.000/campo), nitrito positivo, hematúria discreta', ref: 'Ausência de leucocitúria/nitrito', alt: true },
        { test: 'Urocultura com antibiograma', val: 'Em processamento no momento da consulta — resultado esperado em 48-72h', ref: 'Estéril', alt: true },
        { test: 'Hemograma completo', val: 'Leucócitos 16.200/mm³ com desvio à esquerda', ref: '4.000 – 11.000/mm³ (valores um pouco mais elevados podem ser esperados na gestação, mas este valor é significativo)', alt: true },
        { test: 'Proteína C reativa (PCR)', val: '88 mg/L', ref: '< 5 mg/L', alt: true }
      ],
      note: 'A urocultura com antibiograma ainda não está pronta nesta consulta — informar que "o resultado ficará disponível em alguns dias" e que a conduta inicial deve ser empírica, baseada no quadro clínico e na urina tipo I já disponível.',
      patientProfile: 'Atendente de loja, primeira gestação, planejada. Refere ter tido um episódio de infecção urinária baixa (cistite) tratada há cerca de 1 mês, com melhora dos sintomas na época.',
      script: [
        { trigger: 'Queixa principal', speech: 'Doutor(a), estou com febre alta, calafrios fortes, e uma dor nas costas, do lado direito, que não passa.' },
        { trigger: 'Sobre sintomas urinários', speech: 'Sim, tenho sentido ardência para urinar e vontade de urinar com mais frequência nos últimos dias.' },
        { trigger: 'Sobre a febre', speech: 'A febre começou ontem à tarde, cheguei a medir 38,8°C, e vieram uns calafrios bem fortes junto.' },
        { trigger: 'Sobre episódio prévio de ITU', speech: 'Tive uma infecção urinária há uns 30 dias, tomei antibiótico e achei que tinha resolvido.' },
        { trigger: 'Sobre náuseas/vômitos', speech: 'Sim, cheguei a vomitar uma vez hoje de manhã, acho que é por causa da febre e do mal-estar.' },
        { trigger: 'Sobre movimentação fetal', speech: 'O bebê está mexendo normal, isso não mudou.' },
        { trigger: 'Pergunta ativa — gravidade', speech: 'Doutor(a), isso é grave para o bebê? Vou precisar ficar internada?' }
      ],
      hiddenInfo: 'Não completou o esquema antibiótico da infecção urinária anterior por melhora dos sintomas antes do término do tratamento — só revela se perguntada especificamente sobre adesão ao tratamento anterior | Não fez urocultura de controle após o tratamento da cistite anterior (rastreio de cura), como deveria ser feito no pré-natal — só revela se perguntada sobre exames de controle após a infecção prévia | Está com contrações leves e esporádicas nas últimas horas, que atribuiu à dor lombar — só revela se perguntada ativamente sobre contrações uterinas | Tem muito medo de que a febre alta tenha prejudicado o bebê — verbaliza essa preocupação se o candidato acolher a situação',
      actorBehavior: 'Demonstrar mal-estar evidente (tremores de frio simulados, fácies de dor). Ansiosa em relação ao bem-estar fetal diante da febre alta. Colaborativa durante o exame físico.'
    },

    instC: {
      diagnosis: 'Pielonefrite aguda na gestação (infecção do trato urinário alta), possivelmente por tratamento incompleto de cistite prévia.',
      differentials: [
        'Cistite (ITU baixa) — entra como diagnóstico diferencial de infecção urinária; sai pela presença de febre alta, calafrios e punho-percussão lombar positiva, sinais de acometimento do trato urinário superior (pielonefrite), não presentes na cistite simples.',
        'Corioamnionite — entra como causa de febre na gestação; sai pela ausência de perda de líquido amniótico, sangramento ou sinais de infecção ovular, sendo o quadro mais compatível com origem urinária pela clínica e pelos achados de urina tipo I.',
        'Apendicite aguda — entra como diagnóstico diferencial de dor associada a febre na gestação; sai pela localização típica da dor (lombar direita, punho-percussão positiva) e pelos achados de urina tipo I fortemente sugestivos de infecção urinária.',
        'Trabalho de parto prematuro com febre associada a outra causa — entra pela possibilidade de contrações relatadas; deve ser ativamente monitorado, pois febre e infecção são fatores de risco para trabalho de parto prematuro secundário à pielonefrite, não um diagnóstico competidor isolado.'
      ],
      context: 'A pielonefrite aguda é uma das principais intercorrências infecciosas da gestação, associada a maior risco de trabalho de parto prematuro, sepse materna e complicações fetais, sendo mais comum devido às alterações anatômicas e hormonais do trato urinário na gestação (dilatação ureteral, estase urinária). O tratamento incompleto de infecções urinárias baixas prévias é um fator de risco relevante para progressão para pielonefrite, como observado nesta paciente.',
      justify: 'O diagnóstico de pielonefrite aguda é sustentado pela combinação de febre alta com calafrios, dor lombar com punho-percussão positiva (sinal de Giordano), sintomas urinários baixos associados, e confirmado pela urina tipo I com leucocitúria significativa e nitrito positivo, associados a marcadores inflamatórios elevados (leucocitose, PCR elevada), em paciente com fator de risco relevante (tratamento incompleto de ITU prévia).',
      expectedAnamnesis: 'Caracterização da febre e calafrios | Sintomas urinários baixos associados (disúria, polaciúria) | Caracterização da dor lombar | História de infecções urinárias prévias na gestação atual e adesão ao tratamento | Presença de contrações uterinas associadas | Percepção de movimentos fetais',
      expectedPhysical: 'Aferição de temperatura e demais sinais vitais | Punho-percussão lombar bilateral (sinal de Giordano) | Palpação abdominal avaliando tônus uterino e contrações | Ausculta de batimentos cardiofetais',
      expectedExams: [
        { exam: 'Urina tipo I (EAS)', justify: 'Identificar sinais de infecção urinária (leucocitúria, nitrito, hematúria)', expected: 'Leucocitúria e nitrito positivo, compatíveis com ITU' },
        { exam: 'Urocultura com antibiograma', justify: 'Identificar o agente etiológico e guiar ajuste posterior do antibiótico', expected: 'Resultado pendente, orienta ajuste terapêutico posterior' },
        { exam: 'Hemograma completo e PCR', justify: 'Avaliar resposta inflamatória sistêmica e gravidade do quadro infeccioso', expected: 'Leucocitose e PCR elevada, compatíveis com pielonefrite' },
        { exam: 'Cardiotocografia', justify: 'Avaliar vitalidade fetal e monitorar contrações uterinas associadas ao quadro febril', expected: 'Avaliar bem-estar fetal e presença/ausência de atividade uterina significativa' }
      ],
      expectedConduct: 'Farmacológica: antibioticoterapia empírica com cobertura para uropatógenos comuns na gestação (ex.: cefalosporina de segunda/terceira geração intravenosa), com ajuste posterior conforme resultado da urocultura e antibiograma; antitérmico para controle da febre; hidratação venosa | Não farmacológica: internação hospitalar para tratamento intravenoso e monitorização materno-fetal, dado o quadro de pielonefrite na gestação, considerada indicação de internação na maioria dos protocolos; monitorização de contrações uterinas associadas ao quadro febril | Orientações ao paciente: explicar a necessidade de internação e tratamento intravenoso; reforçar a importância de completar integralmente o esquema antibiótico desta vez; orientar sobre necessidade de urocultura de controle após o tratamento e ao longo do restante do pré-natal',
      expectedCommunication: 'Acolher o mal-estar e o medo em relação à saúde do bebê diante da febre alta | Explicar a necessidade de internação de forma clara | Abordar sem julgamento a interrupção do tratamento anterior, reforçando a importância de completá-lo desta vez | Verificar compreensão do plano terapêutico',
      criticalErrors: [
        'Tratar o quadro como ITU baixa não complicada, prescrevendo apenas antibiótico oral ambulatorial sem considerar internação',
        'Não avaliar vitalidade fetal e presença de contrações uterinas associadas ao quadro febril',
        'Não solicitar urocultura com antibiograma para ajuste terapêutico e rastreio de resistência',
        'Não investigar adesão ao tratamento de ITU prévia, deixando de identificar fator de risco relevante',
        'Não orientar sobre a importância de urocultura de controle (rastreio de cura) após o tratamento'
      ]
    },

    instD: {
      title: 'Pielonefrite na Gestação — Material de Estudo',
      sections: [
        {
          h: 'Definição e Fisiopatologia',
          items: [
            { item: 'Infecção do trato urinário alto, favorecida pela dilatação ureteral e estase urinária fisiológicas da gestação (efeito da progesterona e compressão mecânica pelo útero gravídico).', score: 1, ref: 'FEBRASGO / Ministério da Saúde' }
          ]
        },
        {
          h: 'Quadro Clínico',
          items: [
            { item: 'Febre, calafrios, dor lombar com punho-percussão positiva, associados a sintomas urinários baixos (disúria, polaciúria) na maioria dos casos.', score: 2, ref: 'FEBRASGO' }
          ]
        },
        {
          h: 'Diagnóstico',
          items: [
            { item: 'Urina tipo I com leucocitúria e nitrito positivo, confirmação por urocultura com antibiograma, que deve sempre ser solicitada.', score: 2, ref: 'Ministério da Saúde / FEBRASGO' }
          ]
        },
        {
          h: 'Tratamento',
          items: [
            { item: 'Internação hospitalar com antibioticoterapia intravenosa é a conduta recomendada na pielonefrite aguda gestacional, dado o risco de complicações maternas e fetais.', score: 2, ref: 'FEBRASGO / Ministério da Saúde' },
            { item: 'Após tratamento, urocultura de controle (teste de cura) e rastreio periódico de bacteriúria assintomática são recomendados ao longo do restante do pré-natal.', score: 2, ref: 'Ministério da Saúde' }
          ]
        },
        {
          h: 'Complicações',
          items: [
            { item: 'Risco aumentado de trabalho de parto prematuro, sepse materna e, mais raramente, síndrome do desconforto respiratório agudo materno.', score: 1, ref: 'FEBRASGO' }
          ]
        }
      ]
    }
  },

  // CASO 10 — ASSISTÊNCIA AO PARTO NORMAL
  {
    id: 10,
    title: 'Gestante em trabalho de parto ativo a termo',
    sub: 'Centro Obstétrico',
    tema: 'Obstetricia',
    topic: 'Assistência ao Parto Normal',
    level: 'moderado',
    cardAccent: '#8E24AA',

    instA: {
      scenario: 'Admissão no centro obstétrico, gestante a termo em trabalho de parto ativo.',
      patient: 'Joana Pereira Alves, 28 anos, sexo feminino, fisioterapeuta, G1P0A0, 39 semanas de gestação.',
      complaint: 'Contrações regulares e dolorosas há 6 horas, com intensificação progressiva.',
      tasks: [
        'Realize a anamnese de admissão em trabalho de parto.',
        'Realize o exame obstétrico, incluindo toque vaginal para avaliação do trabalho de parto.',
        'Classifique a fase do trabalho de parto e avalie a necessidade de partograma.',
        'Solicite/considere os exames e monitorizações adequados.',
        'Conduza a assistência ao parto conforme boas práticas baseadas em evidências, incluindo manejo da dor e direito de acompanhante.'
      ]
    },

    instB: {
      vitals: {
        PA: '114/72 mmHg',
        FC: '86 bpm',
        FR: '18 irpm',
        Tax: '36,5 °C',
        Peso: '75 kg',
        Altura: '1,67 m'
      },
      physicalGeneral: 'Bom estado geral, cooperativa, com desconforto perceptível durante as contrações, acompanhada do parceiro.',
      physicalSeg: 'ABDOME/ÚTERO: altura uterina de 36 cm; contrações uterinas regulares, rítmicas, 4 contrações em 10 minutos, com duração de 50-60 segundos e boa intensidade à palpação; batimentos cardiofetais presentes, rítmicos, 138 bpm, sem desacelerações à ausculta intermitente. | TOQUE VAGINAL: colo uterino com 6 cm de dilatação, 90% de esvaecimento, apresentação cefálica, plano de De Lee -1, bolsa rota há cerca de 1 hora com líquido amniótico claro.',
      labs: [
        { test: 'Pesquisa de estreptococo do grupo B (swab vaginal/retal, realizado em consulta prévia a 36 semanas)', val: 'Positivo', ref: 'Negativo', alt: true },
        { test: 'Tipagem sanguínea e fator Rh (já documentado na caderneta da gestante)', val: 'A positivo', ref: 'Não indica necessidade de profilaxia anti-D', alt: false }
      ],
      image: 'Cardiotocografia intermitente/ausculta Doppler: padrão tranquilizador, sem desacelerações, variabilidade preservada.',
      note: 'O resultado positivo do swab para estreptococo do grupo B já estava documentado na caderneta da gestante antes da admissão — o candidato deve identificar essa informação ao revisar a caderneta/pré-natal e indicar a profilaxia antibiótica intraparto correspondente.',
      patientProfile: 'Fisioterapeuta, primeira gestação, bem assistida no pré-natal, todos os exames em dia. Deseja parto vaginal e trouxe um plano de parto por escrito, incluindo desejo de acompanhante presente durante todo o trabalho de parto e de métodos não farmacológicos de alívio da dor.',
      script: [
        { trigger: 'Ao ser admitida', speech: 'Doutor(a)/Enfermeiro(a), as contrações estão cada vez mais fortes e seguidas, acho que estou entrando em trabalho de parto de verdade agora.' },
        { trigger: 'Sobre a bolsa rota', speech: 'Minha bolsa rompeu há quase 1 hora, saiu um líquido clarinho, sem cheiro forte.' },
        { trigger: 'Sobre plano de parto', speech: 'Eu trouxe um plano de parto escrito, gostaria muito que meu marido pudesse ficar comigo o tempo todo, e queria tentar métodos naturais para a dor antes de pensar em outras opções.' },
        { trigger: 'Sobre dor', speech: 'As contrações estão bem dolorosas agora, mas quero tentar aguentar um pouco mais com respiração e bola de pilates antes de pensar em analgesia.' },
        { trigger: 'Sobre movimentação fetal', speech: 'O bebê está mexendo bem, senti ele mexer agora há pouco durante uma pausa das contrações.' },
        { trigger: 'Pergunta ativa — dúvidas', speech: 'Vocês vão me deixar andar e mudar de posição durante o trabalho de parto? E meu marido pode ficar comigo o tempo todo?' }
      ],
      hiddenInfo: 'Está bastante ansiosa quanto à possibilidade de intervenções que não deseja (episiotomia de rotina, por exemplo), pois leu bastante sobre parto humanizado — verbaliza essa preocupação se o candidato não abordar o plano de parto ativamente | O resultado positivo para estreptococo do grupo B está documentado na caderneta, mas a paciente não sabe explicar o que isso significa — só comenta se perguntada sobre esse exame específico | Tem uma leve sensação de puxo iniciando, mas ainda não relatou espontaneamente por não ter certeza se é isso — só revela se perguntada ativamente sobre desejo de fazer força/puxo | Confia bastante na equipe, mas quer ser incluída ativamente nas decisões sobre sua assistência ao parto — comportamento a ser expresso ao longo de toda a simulação',
      actorBehavior: 'Cooperativa e engajada, faz perguntas sobre suas escolhas de parto. Demonstra desconforto crescente durante as contrações (respiração ofegante, apoio no acompanhante), mas mantém-se comunicativa. Valoriza ser incluída nas decisões.'
    },

    instC: {
      diagnosis: 'Trabalho de parto ativo (fase ativa, 6 cm de dilatação), gestação a termo, com indicação de profilaxia antibiótica intraparto para estreptococo do grupo B.',
      differentials: [
        'Não se aplica diagnóstico diferencial clássico de doença — a tarefa central do candidato é classificar corretamente a fase do trabalho de parto (latente x ativa), reconhecer a indicação de profilaxia para estreptococo do grupo B e conduzir a assistência ao parto conforme boas práticas baseadas em evidências e o plano de parto da paciente.'
      ],
      context: 'A assistência ao parto normal baseada em evidências, conforme diretrizes da OMS e do Ministério da Saúde (Diretriz Nacional de Assistência ao Parto Normal), preconiza a redução de intervenções desnecessárias (episiotomia de rotina, restrição de posição e de acompanhante), o respeito à autonomia da parturiente e o uso do partograma para acompanhamento da evolução do trabalho de parto. Esta paciente, com trabalho de parto ativo e swab positivo para estreptococo do grupo B, necessita de profilaxia antibiótica intraparto para prevenção de sepse neonatal precoce.',
      justify: 'A classificação de trabalho de parto em fase ativa é sustentada pela dilatação cervical de 6 cm com contrações regulares e efetivas; a bolsa rota há mais de 1 hora e o resultado positivo para estreptococo do grupo B, documentado no pré-natal, indicam a necessidade de profilaxia antibiótica intraparto (penicilina cristalina ou ampicilina, conforme protocolo), medida essencial para prevenção de infecção neonatal precoce por este agente.',
      expectedAnamnesis: 'Caracterização das contrações (frequência, duração, intensidade, início) | Momento e características da rotura de membranas (líquido claro/meconial, odor) | Revisão da caderneta da gestante, incluindo resultado do swab para estreptococo do grupo B | Percepção de puxo/vontade de evacuar (sinal de progressão para período expulsivo) | Conhecimento do plano de parto e preferências da paciente',
      expectedPhysical: 'Palpação abdominal avaliando contrações (frequência, duração, intensidade) e situação/apresentação fetal | Toque vaginal avaliando dilatação, esvaecimento, plano de descida (De Lee) e integridade/rotura de bolsa | Ausculta intermitente dos batimentos cardiofetais',
      expectedExams: [
        { exam: 'Ausculta intermitente ou cardiotocografia conforme risco', justify: 'Monitorar bem-estar fetal durante o trabalho de parto, com frequência adequada conforme a fase (mais frequente na fase ativa e período expulsivo)', expected: 'Padrão tranquilizador, orientando manejo conservador' },
        { exam: 'Revisão do resultado do swab para estreptococo do grupo B (já disponível no pré-natal)', justify: 'Definir necessidade de profilaxia antibiótica intraparto', expected: 'Confirmação de resultado positivo, indicando profilaxia' }
      ],
      expectedConduct: 'Farmacológica: iniciar profilaxia antibiótica intraparto para estreptococo do grupo B (penicilina cristalina intravenosa, ou ampicilina como alternativa) o quanto antes, idealmente com pelo menos 4 horas antes do parto; oferecer opções de analgesia (métodos não farmacológicos primeiro, conforme desejo da paciente, com analgesia farmacológica/peridural disponível caso ela opte) | Não farmacológica: uso do partograma para acompanhamento da evolução do trabalho de parto; permitir liberdade de posição e movimentação, quando não houver contraindicação; garantir a presença do acompanhante de escolha da paciente durante todo o trabalho de parto, conforme direito legal; evitar episiotomia de rotina, reservando-a para indicações específicas | Orientações ao paciente: explicar os achados do exame e a fase do trabalho de parto; explicar a necessidade e o objetivo da profilaxia antibiótica para estreptococo do grupo B; reforçar o respeito ao plano de parto dentro dos limites de segurança, incluindo liberdade de movimentação e presença do acompanhante',
      expectedCommunication: 'Incluir ativamente a paciente nas decisões sobre sua assistência ao parto, respeitando o plano de parto apresentado | Explicar de forma clara o motivo da profilaxia antibiótica, evitando gerar ansiedade desnecessária | Validar o desejo de métodos não farmacológicos de alívio da dor, oferecendo analgesia farmacológica como opção disponível caso deseje | Garantir e comunicar claramente o direito à presença do acompanhante',
      criticalErrors: [
        'Não identificar o resultado positivo para estreptococo do grupo B e não iniciar profilaxia antibiótica intraparto',
        'Não utilizar o partograma para acompanhamento da evolução do trabalho de parto',
        'Restringir sem indicação clínica a movimentação da paciente ou a presença do acompanhante escolhido',
        'Realizar ou planejar episiotomia de rotina sem indicação específica',
        'Não considerar/oferecer opções de alívio da dor (farmacológicas e não farmacológicas) conforme o desejo da paciente'
      ]
    },

    instD: {
      title: 'Assistência ao Parto Normal — Material de Estudo',
      sections: [
        {
          h: 'Fases do Trabalho de Parto',
          items: [
            { item: 'Fase latente: contrações irregulares com dilatação até cerca de 5-6 cm; fase ativa: dilatação progressiva mais rápida a partir de 6 cm até dilatação total (10 cm), conforme definição atualizada da OMS.', score: 2, ref: 'OMS / Ministério da Saúde — Diretriz Nacional de Assistência ao Parto Normal' }
          ]
        },
        {
          h: 'Boas Práticas Baseadas em Evidências',
          items: [
            { item: 'Uso do partograma para acompanhamento da evolução do trabalho de parto; liberdade de posição e movimentação; direito a acompanhante de escolha durante todo o trabalho de parto e parto (Lei do Acompanhante).', score: 2, ref: 'Ministério da Saúde — Diretriz Nacional de Assistência ao Parto Normal' },
            { item: 'Episiotomia não deve ser realizada de rotina, apenas mediante indicação específica.', score: 2, ref: 'Ministério da Saúde / OMS' }
          ]
        },
        {
          h: 'Profilaxia para Estreptococo do Grupo B',
          items: [
            { item: 'Rastreio por swab vaginal/retal entre 35-37 semanas; profilaxia antibiótica intraparto (penicilina cristalina como primeira escolha) indicada em gestantes com swab positivo, idealmente iniciada com pelo menos 4 horas antes do parto.', score: 2, ref: 'Ministério da Saúde / FEBRASGO' }
          ]
        },
        {
          h: 'Manejo da Dor',
          items: [
            { item: 'Métodos não farmacológicos (deambulação, bola suíça, banho morno, respiração) devem ser oferecidos; analgesia farmacológica (incluindo peridural) deve estar disponível conforme desejo da paciente.', score: 1, ref: 'Ministério da Saúde' }
          ]
        },
        {
          h: 'Monitorização Fetal',
          items: [
            { item: 'Ausculta intermitente dos batimentos cardiofetais é adequada em trabalho de parto de baixo risco; cardiotocografia contínua reservada para gestações de risco.', score: 1, ref: 'OMS / Ministério da Saúde' }
          ]
        }
      ]
    }
  }
];

export default obstetricia;
