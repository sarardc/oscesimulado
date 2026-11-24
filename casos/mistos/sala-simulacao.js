// Casos da Sala de Simulação (https://claude.ai/artifact/9zEPyeyJFeZPUbgttLtaiY)
// Mesmos pacientes da sala interativa, no formato de estação do site.
const salaSimulacao = [

  // CASO 1 — INSUFICIÊNCIA CARDÍACA DESCOMPENSADA (PERFIL B) POR ABANDONO DE DIURÉTICO
  {
    id: 1,
    title: 'Cansaço que não passa',
    sub: 'UBS — Atenção Primária',
    tema: 'Cardiologia',
    topic: 'Insuficiência Cardíaca Descompensada por Má Adesão',
    level: 'moderado',
    cardAccent: '#E91E63',
    instA: {
      scenario: 'Unidade Básica de Saúde, consulta de demanda espontânea no período da manhã.',
      patient: 'Lúcia Ferreira, 74 anos, sexo feminino, costureira aposentada, viúva, mora com a neta.',
      complaint: 'Cansaço e falta de ar progressivos há cerca de 3 semanas.',
      tasks: [
        'Realize a anamnese dirigida ao caso, incluindo a busca do fator de descompensação.',
        'Examine a paciente, verbalizando as manobras.',
        'Formule a hipótese diagnóstica com a classificação clínico-hemodinâmica.',
        'Solicite os exames complementares adequados.',
        'Proponha a conduta, defina o local de tratamento e oriente a paciente.'
      ]
    },
    instB: {
      vitals: { PA: '158/94 mmHg', FC: '98 bpm, regular', FR: '24 irpm', Tax: '36,4 °C', SpO2: '92% em ar ambiente', Peso: '68 kg (64 kg há 1 mês)', Altura: '1,58 m', IMC: '27,2 kg/m²' },
      physicalGeneral: 'Bom estado geral, lúcida e orientada, corada, hidratada, acianótica, anictérica. Dispneia leve durante a fala. Extremidades quentes.',
      physicalSeg: 'PESCOÇO: turgência jugular patológica a 45°; refluxo hepatojugular positivo | CARDIOVASCULAR: ictus no 6º espaço intercostal, 2 cm lateral à linha hemiclavicular esquerda, impulsivo, 3 polpas; ritmo regular em 3 tempos (B3 — galope); sopro sistólico 2+/6+ em foco mitral | RESPIRATÓRIO: estertores crepitantes em terços inferiores bilateralmente; murmúrio diminuído e macicez à percussão em base direita | ABDOME: fígado palpável a 3 cm do rebordo costal direito, doloroso, de borda romba | MEMBROS INFERIORES: edema 3+/4+ bilateral, simétrico, depressível, até os joelhos; panturrilhas livres; pulsos presentes e simétricos',
      labs: [
        { test: 'BNP', val: '1.240 pg/mL', ref: '< 100 pg/mL', alt: true },
        { test: 'Creatinina', val: '1,3 mg/dL (basal 1,0)', ref: '0,6–1,1 mg/dL', alt: true },
        { test: 'Ureia', val: '58 mg/dL', ref: '15–45 mg/dL', alt: true },
        { test: 'Sódio', val: '134 mEq/L', ref: '135–145 mEq/L', alt: true },
        { test: 'Potássio', val: '4,6 mEq/L', ref: '3,5–5,0 mEq/L', alt: false },
        { test: 'Hemoglobina', val: '12,1 g/dL', ref: '12–16 g/dL', alt: false },
        { test: 'Troponina I ultrassensível', val: '22 ng/L, estável em 3 h (23 ng/L)', ref: '< 19 ng/L', alt: true }
      ],
      image: 'ECG: ritmo sinusal, FC 98 bpm; ondas Q patológicas em DII, DIII e aVF (área inativa inferior); sobrecarga ventricular esquerda com alteração de repolarização em V5–V6. | Radiografia de tórax: índice cardiotorácico 0,62, cefalização da trama vascular, linhas B de Kerley e pequeno derrame pleural à direita. | Ecocardiograma: VE dilatado, hipocinesia inferior e inferolateral, FEVE 32% (Simpson), insuficiência mitral moderada funcional, PSAP 48 mmHg.',
      note: 'Entregar os sinais vitais e os achados de cada segmento somente quando o candidato verbalizar a manobra. Os impressos de exames só devem ser entregues se solicitados nominalmente. A paciente NÃO conta espontaneamente que parou a furosemida: só revela se o candidato perguntar sobre medicamentos em uso ou adesão.',
      patientProfile: 'Costureira aposentada, viúva, mora com a neta, que trabalha o dia todo. Hipertensa há 20 anos, teve infarto há 6 anos com angioplastia e stent; acompanhava com cardiologista, mas não vai há 1 ano. Usa losartana 50 mg 12/12 h, carvedilol 6,25 mg 12/12 h, AAS 100 mg e sinvastatina 40 mg. Ex-tabagista (30 anos-maço, parou após o infarto). Mãe faleceu "do coração".',
      script: [
        { trigger: 'Queixa principal', speech: 'Ai, é esse cansaço, doutor(a). Ando sem ar pra tudo.' },
        { trigger: 'Sobre tempo e progressão', speech: 'Faz umas três semanas. Foi piorando devagarinho.' },
        { trigger: 'Sobre esforço tolerado', speech: 'Antes eu subia a ladeira da igreja sem parar. Agora chego no portão de casa e já preciso parar pra respirar.' },
        { trigger: 'Sobre dormir deitada', speech: 'Deitada reta não dá, parece que afogo. Tô dormindo com três travesseiros, quase sentada.' },
        { trigger: 'Sobre acordar à noite', speech: 'Acordei duas vezes essa semana sufocada. Tive que sentar na beira da cama e abrir a janela.' },
        { trigger: 'Sobre inchaço e peso', speech: 'As pernas incham demais, principalmente à tarde. Engordei uns quatro quilos esse mês.' },
        { trigger: 'Sobre dor no peito', speech: 'Dor no peito não. Às vezes um peso quando ando muito, mas passa quando paro.' },
        { trigger: 'Sobre medicamentos', speech: 'Tomo losartana de manhã e à noite, o carvedilol, o AAS e a sinvastatina. Tinha a furosemida também, mas essa eu parei.' },
        { trigger: 'Sobre por que parou a furosemida', speech: 'Parei faz um mês. Fui pra casa da minha filha em Minas e ela me fazia correr pro banheiro na estrada. Acabei não voltando a tomar.' },
        { trigger: 'Pergunta ativa — internação', speech: 'Tô com medo de ser o coração de novo, doutor(a). Vou ter que ficar internada?' }
      ],
      hiddenInfo: 'Parou a furosemida há 1 mês — só revela se perguntada sobre medicamentos ou adesão | Comeu muita comida salgada (linguiça, feijoada) na viagem e sempre usou bastante sal — só revela se perguntada sobre alimentação/sal | Bebe cerca de 2 litros de água por dia — só revela se perguntada sobre ingestão de líquidos | Não vai ao cardiologista há 1 ano — só revela se perguntada sobre acompanhamento',
      actorBehavior: 'Senhora simples e afetuosa, um pouco ofegante (frases curtas). Não conhece termos técnicos. Mostra medo de "ter outro infarto" e pergunta se vai ficar internada. Fica aliviada quando o candidato explica o problema com calma.'
    },
    instC: {
      diagnosis: 'Insuficiência cardíaca crônica com fração de ejeção reduzida, de etiologia isquêmica, descompensada no perfil B (quente e úmido), tendo como fator de descompensação o abandono do diurético associado à transgressão de sal.',
      differentials: [
        'Síndrome coronariana aguda — entra pela cardiopatia isquêmica prévia; sai pela ausência de dor típica em repouso, troponina discretamente elevada e estável e ECG sem alteração aguda.',
        'DPOC exacerbada — entra pela dispneia em ex-tabagista; sai pela ortopneia, DPN, B3, turgência jugular, edema e BNP muito elevado.',
        'Pneumonia — entra pela tosse e estertores; sai pela ausência de febre e expectoração e pelos estertores bilaterais simétricos com congestão radiológica.',
        'Tromboembolismo pulmonar — entra pela dispneia; sai pela evolução de semanas com sinais de congestão sistêmica e pulmonar e panturrilhas livres.'
      ],
      context: 'A insuficiência cardíaca descompensada é uma das principais causas de internação em idosos no Brasil. A má adesão ao tratamento e a ingestão de sal são os fatores precipitantes mais comuns. Esta paciente, com cardiopatia isquêmica e FEVE reduzida, suspendeu a furosemida e aumentou a ingestão de sal, evoluindo em 3 semanas com congestão pulmonar e sistêmica.',
      justify: 'Critérios de Framingham presentes (DPN, ortopneia, turgência jugular, estertores, B3, refluxo hepatojugular, edema, hepatomegalia), BNP de 1.240 pg/mL e FEVE de 32%. Perfusão preservada (extremidades quentes, PA elevada) com congestão = perfil B. Gatilho identificado na anamnese.',
      expectedAnamnesis: 'Início e progressão da dispneia | Classe funcional (esforço tolerado) | Ortopneia | Dispneia paroxística noturna | Edema e ganho de peso | Dor torácica | Medicamentos em uso e adesão (abandono da furosemida) | Ingestão de sal e líquidos | Antecedentes de HAS e IAM | Tabagismo | Sintomas infecciosos (febre, tosse produtiva) | Acompanhamento cardiológico',
      expectedPhysical: 'Sinais vitais com SpO2 | Peso | Pulso venoso jugular a 45° e refluxo hepatojugular | Palpação do ictus | Ausculta cardíaca (B3, sopro mitral) | Ausculta pulmonar (estertores, derrame) | Palpação hepática | Edema de membros inferiores',
      expectedExams: [
        { exam: 'BNP ou NT-proBNP', justify: 'Confirmar a origem cardíaca da dispneia', expected: 'Elevado (1.240 pg/mL)' },
        { exam: 'Ecocardiograma transtorácico', justify: 'Definir fração de ejeção e etiologia', expected: 'FEVE 32%, hipocinesia inferior, IM funcional' },
        { exam: 'Eletrocardiograma', justify: 'Arritmias, isquemia, área inativa', expected: 'Área inativa inferior, sobrecarga de VE' },
        { exam: 'Radiografia de tórax', justify: 'Congestão e derrame pleural', expected: 'Cardiomegalia, cefalização, linhas B de Kerley, derrame à direita' },
        { exam: 'Função renal e eletrólitos', justify: 'Guiar diurético e bloqueio neuro-hormonal', expected: 'Creatinina 1,3 mg/dL, Na 134 mEq/L, K 4,6 mEq/L' }
      ],
      expectedConduct: 'Farmacológica: furosemida (dose ao menos igual ou maior que a domiciliar, preferencialmente EV na descompensação); manter carvedilol; otimizar terapia de IC com FE reduzida (iSGLT2 — dapagliflozina ou empagliflozina, espironolactona, considerar troca de losartana por sacubitril-valsartana) | Não farmacológica: encaminhar para unidade de urgência/observação para diureticoterapia EV diante de SpO2 92% e FR 24, ou tratamento ambulatorial com reavaliação em 24–48 h se houver estabilidade; reencaminhar ao cardiologista | Orientações à paciente: restrição de sal, pesar-se diariamente, não suspender medicamentos por conta própria, reconhecer sinais de alarme (piora da falta de ar, ganho de peso > 2 kg em 3 dias) e retorno precoce',
      expectedCommunication: 'Apresentar-se e chamar a paciente pelo nome | Acolher o medo de um novo infarto | Explicar o diagnóstico em linguagem simples | Explicar a importância de não parar os remédios | Verificar entendimento e esclarecer dúvidas',
      criticalErrors: [
        'Não investigar o uso e a adesão aos medicamentos (deixar de identificar o fator de descompensação)',
        'Não prescrever diurético para paciente congesta',
        'Liberar a paciente para casa sem diurético e sem reavaliação próxima',
        'Suspender o betabloqueador em paciente no perfil B, sem sinais de baixo débito',
        'Prescrever AINE ou outro fármaco que piore a insuficiência cardíaca'
      ]
    },
    instD: {
      title: 'Insuficiência Cardíaca Descompensada — Material de Estudo',
      sections: [
        { h: 'Definição e fatores de descompensação', items: [
          { item: 'IC descompensada é o surgimento ou piora rápida de sinais e sintomas de IC que exige tratamento urgente.', score: 1, ref: 'Diretriz Brasileira de IC Crônica e Aguda (SBC)' },
          { item: 'Buscar sempre o fator precipitante: má adesão, sal, infecção, isquemia, arritmia (FA), HAS não controlada, fármacos (AINE, glitazonas).', score: 2, ref: 'Diretriz SBC; ESC Heart Failure Guidelines' }
        ] },
        { h: 'Anamnese e exame físico', items: [
          { item: 'Ortopneia e DPN são os sintomas de maior especificidade para congestão pulmonar.', score: 1, ref: 'Harrison — Medicina Interna' },
          { item: 'Turgência jugular, refluxo hepatojugular, B3, estertores e edema compõem a avaliação de congestão (critérios de Framingham).', score: 2, ref: 'Framingham Heart Study' }
        ] },
        { h: 'Perfis clínico-hemodinâmicos', items: [
          { item: 'Perfil A (quente e seco), B (quente e úmido — o mais comum), C (frio e úmido), L (frio e seco).', score: 2, ref: 'Stevenson LW — classificação de Forrester modificada' },
          { item: 'No perfil B, o tratamento é diurético de alça e vasodilatador se PA elevada; manter betabloqueador.', score: 1, ref: 'Diretriz SBC' }
        ] },
        { h: 'Exames complementares', items: [
          { item: 'BNP > 100 pg/mL ou NT-proBNP > 300 pg/mL sustentam o diagnóstico de IC aguda.', score: 1, ref: 'ESC 2021' },
          { item: 'Ecocardiograma define FEVE: reduzida ≤ 40%, levemente reduzida 41–49%, preservada ≥ 50%.', score: 1, ref: 'ESC 2021 / SBC' }
        ] },
        { h: 'Tratamento', items: [
          { item: 'Furosemida EV em dose ≥ à dose oral domiciliar; reavaliar diurese, peso e função renal.', score: 2, ref: 'DOSE Trial; ESC 2021' },
          { item: 'Terapia quádrupla na ICFEr: IECA/BRA/sacubitril-valsartana + betabloqueador + espironolactona + iSGLT2.', score: 2, ref: 'Diretriz SBC 2021' }
        ] },
        { h: 'Orientações', items: [
          { item: 'Restrição de sódio, pesagem diária, adesão medicamentosa e sinais de alarme reduzem reinternações.', score: 1, ref: 'Diretriz SBC' }
        ] }
      ]
    }
  },

  // CASO 2 — EPISÓDIO DEPRESSIVO COM ALTO RISCO DE SUICÍDIO
  {
    id: 2,
    title: 'Um remédio para dormir',
    sub: 'UBS — Acolhimento',
    tema: 'Psiquiatria',
    topic: 'Episódio Depressivo com Alto Risco de Suicídio',
    level: 'difícil',
    cardAccent: '#AB47BC',
    instA: {
      scenario: 'Unidade Básica de Saúde, acolhimento à demanda espontânea. Na triagem, a técnica de enfermagem notou um curativo no punho esquerdo do paciente.',
      patient: 'Rafael Souza, 23 anos, sexo masculino, estudante de engenharia, mora com os pais e a irmã de 12 anos.',
      complaint: 'Pede "um remédio para dormir" porque não consegue dormir direito há 2 meses.',
      tasks: [
        'Acolha o paciente e investigue a queixa.',
        'Avalie o risco de suicídio de forma estruturada.',
        'Examine o que julgar necessário.',
        'Formule a hipótese diagnóstica e estratifique o risco.',
        'Defina e explique a conduta, incluindo o plano de segurança.'
      ]
    },
    instB: {
      vitals: { PA: '118/74 mmHg', FC: '84 bpm', FR: '16 irpm', Tax: '36,5 °C', Peso: '64 kg (69 kg há 2 meses)', Altura: '1,78 m', IMC: '20,2 kg/m²' },
      physicalGeneral: 'Vigil, orientado, hipomímico, pouco contato visual, curativo no punho esquerdo.',
      physicalSeg: 'PUNHO ESQUERDO: três cortes lineares, paralelos, superficiais, de 3–4 cm na face volar, em cicatrização, sem secreção ou sinais flogísticos; sem cicatrizes antigas | AVALIAÇÃO NEUROVASCULAR DA MÃO: perfusão capilar < 2 s; sensibilidade e força preservadas nos territórios mediano, ulnar e radial; flexão dos dedos sem déficit | EXAME DO ESTADO MENTAL: humor deprimido, afeto congruente; discurso lentificado e em baixo volume; pensamento com ideias de culpa e desesperança, sem delírios; sem alterações de sensopercepção; crítica preservada',
      labs: [
        { test: 'TSH', val: '2,1 mUI/L', ref: '0,4–4,0 mUI/L', alt: false },
        { test: 'Hemograma', val: 'Sem alterações', ref: '—', alt: false }
      ],
      note: 'O paciente só fala do corte no punho se o candidato perguntar sobre o curativo, o braço ou autolesão. Se o candidato for julgador ou apressado, o paciente se fecha ("deixa pra lá, só quero o remédio"). Responde com honestidade quando perguntado diretamente sobre suicídio.',
      patientProfile: 'Estudante de engenharia, reprovou em duas disciplinas. Namorada terminou há 3 meses. Conflitos com o pai por causa das notas. Bebe sozinho nos fins de semana (8 a 10 latas) e usa maconha ocasionalmente. Tio paterno se suicidou há 5 anos. Muito ligado à irmã Bia, de 12 anos, e ao amigo João. Nunca fez tratamento psiquiátrico.',
      script: [
        { trigger: 'Queixa principal', speech: 'Eu queria um remédio pra dormir. Não tô conseguindo dormir direito.' },
        { trigger: 'Sobre o sono', speech: 'Demoro horas pra pegar no sono, fico pensando em tudo. E acordo umas quatro da manhã e não durmo mais. Faz uns dois meses.' },
        { trigger: 'Sobre humor e prazer', speech: 'Ando meio vazio. Parei o futebol, nem videogame tenho vontade. Nada tem graça.' },
        { trigger: 'Sobre apetite, energia e concentração', speech: 'Quase não sinto fome, perdi uns cinco quilos. Tô sempre cansado, reprovei em duas matérias. Me sinto um fracasso.' },
        { trigger: 'Sobre o curativo no punho', speech: 'Isso foi há três dias. Depois de uma briga com meu pai, eu me cortei com um estilete. Não sei se queria morrer. Queria parar de sentir aquilo.' },
        { trigger: 'Sobre pensamentos de morte', speech: 'Já pensei, sim. Às vezes acho que seria melhor não acordar mais. Esses dias isso vem quase todo dia.' },
        { trigger: 'Sobre plano e acesso a meios', speech: 'Pensei em tomar os remédios da minha mãe. Ela tem uma caixa de amitriptilina no armário da cozinha. Qualquer um pega.' },
        { trigger: 'Sobre rede de apoio', speech: 'Minha irmã, a Bia. Ela tem doze anos. Não queria fazer isso com ela. E o João, meu melhor amigo, sabe um pouco.' },
        { trigger: 'Pergunta ativa — família', speech: 'Você vai ter que contar pros meus pais?' }
      ],
      hiddenInfo: 'Tio paterno se suicidou há 5 anos — só revela se perguntado sobre história familiar | Aumentou o consumo de álcool (8–10 latas, sozinho, nos fins de semana) e usa maconha — só revela se perguntado sobre álcool e drogas | Nunca teve episódios de euforia ou de muita energia — só responde se perguntado (rastreio de bipolaridade) | Hoje não queria estar ali e às vezes "tem medo de si mesmo" — só revela se perguntado sobre intenção atual',
      actorBehavior: 'Retraído, fala baixo, evita contato visual, frases curtas. Abre-se aos poucos se acolhido e se o candidato garantir sigilo. Fecha-se diante de julgamento ou pressa. Fica visivelmente aliviado quando o candidato fala do suicídio sem tabu.'
    },
    instC: {
      diagnosis: 'Episódio depressivo grave, sem sintomas psicóticos, com autolesão recente, ideação suicida frequente, plano e acesso a meio letal — alto risco de suicídio.',
      differentials: [
        'Transtorno afetivo bipolar, episódio depressivo — entra pelo quadro depressivo em jovem; sai pela ausência de episódios prévios de mania ou hipomania (precisa ser ativamente rastreado antes do antidepressivo).',
        'Transtorno de ajustamento — entra pelos estressores recentes (término, reprovações); sai pela intensidade, duração e número de sintomas, que preenchem critérios de episódio depressivo.',
        'Transtorno por uso de álcool — entra pelo aumento do consumo; é comorbidade que eleva o risco, mas não explica o quadro isoladamente.',
        'Hipotireoidismo — entra como causa orgânica de humor deprimido e fadiga; sai pelo TSH normal.'
      ],
      context: 'O suicídio é uma das principais causas de morte entre jovens de 15 a 29 anos. Pacientes frequentemente procuram a atenção primária com queixas somáticas, como insônia, antes de uma tentativa. Este paciente tem múltiplos fatores de risco: sexo masculino, autolesão recente, plano com acesso a meio letal, uso de álcool, história familiar de suicídio e desesperança.',
      justify: 'Humor deprimido e anedonia há mais de 2 semanas, com insônia terminal, perda de peso, fadiga, déficit de concentração, culpa e ideação suicida (CID-11 / DSM-5). Autolesão há 3 dias, ideação diária, plano definido e acesso aos meios configuram alto risco.',
      expectedAnamnesis: 'Caracterização da insônia | Humor deprimido | Anedonia | Apetite, peso, energia e concentração | Estressores recentes | Circunstâncias da lesão no punho | Ideação suicida (pergunta direta) | Plano | Acesso a meios letais | Intenção atual | Tentativas prévias | Uso de álcool e drogas | História familiar de suicídio | Rastreio de mania | Sintomas psicóticos | Fatores de proteção e rede de apoio',
      expectedPhysical: 'Inspeção da lesão do punho | Avaliação neurovascular e tendínea da mão | Exame do estado mental | Sinais vitais e peso',
      expectedExams: [
        { exam: 'TSH', justify: 'Excluir causa orgânica de sintomas depressivos', expected: 'Normal' },
        { exam: 'Hemograma', justify: 'Avaliação clínica básica antes de iniciar tratamento', expected: 'Normal' }
      ],
      expectedConduct: 'Farmacológica: considerar ISRS (sertralina 50 mg/dia ou fluoxetina 20 mg/dia) após excluir bipolaridade; NÃO prescrever hipnótico ou benzodiazepínico isolado, nem tricíclico, em paciente com plano de intoxicação | Não farmacológica: encaminhamento no mesmo dia ao CAPS ou à emergência psiquiátrica; não liberar o paciente sozinho; restrição de acesso aos meios (retirar a amitriptilina e outros medicamentos de casa); envolver a família com consentimento; plano de segurança por escrito; cuidado da ferida e vacina antitetânica se indicada | Orientações ao paciente: canais de crise (CVV 188, SAMU 192), redução do álcool, retorno breve',
      expectedCommunication: 'Apresentar-se e chamar o paciente pelo nome | Acolher sem julgamento | Garantir sigilo e explicar seus limites diante de risco à vida | Perguntar sobre suicídio de forma direta e sem tabu | Construir o plano em conjunto com o paciente',
      criticalErrors: [
        'Não perguntar diretamente sobre ideação suicida',
        'Não investigar o curativo no punho',
        'Prescrever benzodiazepínico ou hipnótico e liberar o paciente',
        'Liberar o paciente sem encaminhamento e sem envolver a rede de apoio',
        'Não orientar a restrição de acesso aos medicamentos da mãe',
        'Adotar postura julgadora ("isso é bobagem", "é falta de Deus")'
      ]
    },
    instD: {
      title: 'Depressão e Avaliação de Risco de Suicídio — Material de Estudo',
      sections: [
        { h: 'Epidemiologia', items: [
          { item: 'O suicídio está entre as principais causas de morte entre 15 e 29 anos; a maioria das pessoas que morre por suicídio procurou um serviço de saúde no ano anterior.', score: 1, ref: 'OMS — Live Life (2021)' }
        ] },
        { h: 'Diagnóstico de episódio depressivo', items: [
          { item: 'Humor deprimido ou anedonia por ao menos 2 semanas, com sintomas somáticos e cognitivos associados.', score: 2, ref: 'DSM-5-TR / CID-11' },
          { item: 'Rastrear mania/hipomania antes de antidepressivo: o ISRS pode induzir virada em bipolares.', score: 1, ref: 'CANMAT 2023' }
        ] },
        { h: 'Avaliação de risco', items: [
          { item: 'Perguntar diretamente sobre suicídio NÃO aumenta o risco.', score: 2, ref: 'Dazzi et al., Psychol Med 2014' },
          { item: 'Avaliar ideação, plano, intenção, acesso a meios, tentativas prévias, uso de substâncias, história familiar e fatores de proteção.', score: 2, ref: 'ABP — Suicídio: informando para prevenir' }
        ] },
        { h: 'Conduta', items: [
          { item: 'Alto risco: não deixar o paciente sozinho, encaminhamento imediato (CAPS/emergência), envolver a família.', score: 2, ref: 'Ministério da Saúde — Linha de cuidado' },
          { item: 'Restringir o acesso aos meios é uma das intervenções com maior evidência na prevenção do suicídio.', score: 2, ref: 'Zalsman et al., Lancet Psychiatry 2016' },
          { item: 'Plano de segurança: sinais de alerta, estratégias de enfrentamento, pessoas de contato, profissionais e serviços (CVV 188).', score: 1, ref: 'Stanley & Brown, 2012' }
        ] }
      ]
    }
  },

  // CASO 3 — IAM COM SUPRA DE ST DE PAREDE INFERIOR COM ACOMETIMENTO DE VD
  {
    id: 3,
    title: 'Dor no peito na sala vermelha',
    sub: 'PS — Sala de Emergência',
    tema: 'Cardiologia',
    topic: 'IAM com Supra de ST Inferior com Acometimento de VD',
    level: 'difícil',
    cardAccent: '#E91E63',
    instA: {
      scenario: 'Sala de emergência de hospital com serviço de hemodinâmica 24 horas. A enfermeira está à disposição para cumprir suas ordens.',
      patient: 'Antônio Carlos Lima, 58 anos, sexo masculino, motorista de ônibus, trazido pela esposa.',
      complaint: 'Dor no peito em aperto há 1 hora e 30 minutos.',
      tasks: [
        'Realize o atendimento inicial.',
        'Solicite e interprete os exames essenciais.',
        'Estabeleça o diagnóstico.',
        'Institua a conduta inicial, incluindo a estratégia de reperfusão.'
      ]
    },
    instB: {
      vitals: { PA: '94/60 mmHg (MSD) e 92/58 mmHg (MSE)', FC: '52 bpm', FR: '22 irpm', SpO2: '93% em ar ambiente', 'Glicemia capilar': '186 mg/dL', Peso: '86 kg', Altura: '1,72 m', IMC: '29,1 kg/m²' },
      physicalGeneral: 'Ansioso, pálido, sudoreico, com a mão fechada sobre o esterno (sinal de Levine).',
      physicalSeg: 'PESCOÇO: turgência jugular a 45°, sem refluxo hepatojugular | CARDIOVASCULAR: ritmo regular, bradicárdico, bulhas normofonéticas, sem sopros ou B3; pulsos radiais e femorais simétricos | RESPIRATÓRIO: murmúrio vesicular presente bilateralmente, sem ruídos adventícios | ABDOME: flácido, indolor, sem massas pulsáteis | MEMBROS INFERIORES: sem edema, panturrilhas livres',
      labs: [
        { test: 'Troponina I ultrassensível', val: '1.840 ng/L', ref: '< 19 ng/L', alt: true },
        { test: 'Creatinina', val: '1,0 mg/dL', ref: '0,7–1,3 mg/dL', alt: false },
        { test: 'Potássio', val: '4,3 mEq/L', ref: '3,5–5,0 mEq/L', alt: false },
        { test: 'Glicemia', val: '194 mg/dL', ref: '70–99 mg/dL', alt: true }
      ],
      image: 'ECG de 12 derivações: bradicardia sinusal, FC 52 bpm; supradesnivelamento de ST em DII, DIII e aVF (DIII > DII), com infradesnivelamento recíproco em DI e aVL. | ECG com derivações direitas: supradesnivelamento de ST de 1 mm em V3R e 1,5 mm em V4R; V7–V9 sem alterações. | Radiografia de tórax: área cardíaca normal, campos pulmonares limpos, mediastino de dimensões normais.',
      note: 'Entregar o ECG imediatamente quando solicitado. O ECG de derivações direitas só deve ser entregue se solicitado nominalmente. A troponina demora: não deve atrasar a reperfusão. Se o candidato prescrever nitrato, informar que a PA caiu para 70/42 mmHg e o paciente ficou tonto. O paciente só conta que usou sildenafil se perguntado sobre remédios para ereção.',
      patientProfile: 'Motorista de ônibus, hipertenso e diabético (losartana e metformina), dislipidêmico sem tratamento, tabagista de 1 maço por dia desde a adolescência. Pai morreu de infarto aos 60 anos. Nunca teve dor semelhante.',
      script: [
        { trigger: 'Queixa principal', speech: 'Uma dor no peito, doutor(a)... um aperto forte aqui no meio.' },
        { trigger: 'Sobre início', speech: 'Faz uma hora e meia. Tava sentado vendo televisão.' },
        { trigger: 'Sobre tipo e irradiação', speech: 'É um aperto, como um peso em cima do peito. Vai pro braço esquerdo e pro queixo.' },
        { trigger: 'Sobre intensidade', speech: 'Nove. Não melhora com nada.' },
        { trigger: 'Sobre sintomas associados', speech: 'Tô suando frio, enjoado... e meio tonto.' },
        { trigger: 'Sobre fatores de risco', speech: 'Pressão alta e diabetes. Fumo um maço por dia. O colesterol o médico falou que tá alto, mas não tomo nada.' },
        { trigger: 'Sobre remédio para ereção', speech: 'Ah... tomei um azulzinho ontem à noite, doutor(a).' },
        { trigger: 'Sobre sangramento, AVC ou cirurgia recente', speech: 'Não, nada disso.' },
        { trigger: 'Pergunta ativa — gravidade', speech: 'É infarto, doutor(a)? Eu vou morrer?' }
      ],
      hiddenInfo: 'Tomou sildenafil na noite anterior (menos de 24 h) — só revela se perguntado sobre remédio para ereção ou uso de outros medicamentos | Pai morreu de infarto aos 60 anos — só revela se perguntado sobre história familiar | Sem sangramento, AVC ou cirurgia recente — só responde se perguntado (contraindicações a antitrombóticos)',
      actorBehavior: 'Assustado, suando, fala entrecortada pela dor. Usa linguagem popular. Acalma-se um pouco quando o candidato explica o que está acontecendo e o que será feito.'
    },
    instC: {
      diagnosis: 'Infarto agudo do miocárdio com supradesnivelamento do segmento ST de parede inferior, com acometimento do ventrículo direito (provável oclusão da coronária direita), Killip I, com hipotensão e bradicardia.',
      differentials: [
        'Dissecção aguda de aorta — entra pela dor torácica intensa em hipertenso; sai pela dor em aperto sem caráter lacerante, PA e pulsos simétricos e mediastino normal.',
        'Tromboembolismo pulmonar — entra pela dispneia e turgência jugular; sai pelo supra de ST em parede inferior com imagem recíproca.',
        'Pericardite aguda — entra pelo supra de ST; sai pelo supra localizado em território coronariano com infra recíproco, sem supra difuso nem infra de PR.',
        'Síndrome coronariana aguda sem supra de ST — sai pela presença de supra persistente no ECG.'
      ],
      context: 'O IAM com supra de ST exige reperfusão imediata. No infarto inferior, 30 a 50% dos casos acometem o ventrículo direito, o que torna o paciente dependente de pré-carga: nitratos, morfina e diuréticos podem causar hipotensão grave. O uso recente de inibidor de PDE-5 também contraindica nitrato.',
      justify: 'Dor anginosa típica há 1h30, supra de ST em DII, DIII e aVF com infra recíproco em DI e aVL, supra em V4R ≥ 1 mm, hipotensão com turgência jugular e pulmões limpos (tríade do infarto de VD).',
      expectedAnamnesis: 'Início e duração da dor | Tipo e irradiação da dor | Intensidade | Sintomas associados (sudorese, náusea, tontura) | Fatores de risco cardiovascular | Uso de inibidor de PDE-5 (sildenafil) | Contraindicações a antitrombóticos e trombólise (sangramento, AVC, cirurgia) | Alergias',
      expectedPhysical: 'Monitorização e sinais vitais | PA nos dois membros superiores e pulsos | Ausculta pulmonar (classificação de Killip) | Pulso venoso jugular | Ausculta cardíaca',
      expectedExams: [
        { exam: 'Eletrocardiograma de 12 derivações em até 10 minutos', justify: 'Diagnóstico de IAM com supra de ST', expected: 'Supra de ST em DII, DIII e aVF com infra recíproco em DI e aVL' },
        { exam: 'ECG com derivações direitas (V3R e V4R)', justify: 'Investigar acometimento de VD no infarto inferior', expected: 'Supra de ST em V4R ≥ 1 mm' },
        { exam: 'Troponina', justify: 'Confirmação de necrose (não deve atrasar a reperfusão)', expected: 'Elevada' },
        { exam: 'Função renal, eletrólitos e coagulograma', justify: 'Segurança de anticoagulação e contraste', expected: 'Normais' }
      ],
      expectedConduct: 'Farmacológica: AAS 300 mg mastigado; inibidor de P2Y12 (clopidogrel 600 mg ou ticagrelor 180 mg); anticoagulação com heparina não fracionada; cristaloide em bolus (SF 0,9% 500 mL) para a hipotensão do infarto de VD; O2 apenas se SpO2 < 90% | Não farmacológica: monitorização, acesso venoso, acionar a hemodinâmica para angioplastia primária (porta-balão < 90 min) | Evitar: nitrato (hipotensão, VD e sildenafil < 24 h), morfina, diurético e betabloqueador EV | Orientações ao paciente: explicar o infarto e o cateterismo, tranquilizar',
      expectedCommunication: 'Apresentar-se ao paciente | Explicar o que está acontecendo e o que será feito | Tranquilizar o paciente | Dar ordens claras à equipe',
      criticalErrors: [
        'Não solicitar ECG nos primeiros 10 minutos',
        'Prescrever nitrato em paciente hipotenso, com infarto de VD e uso recente de sildenafil',
        'Prescrever betabloqueador EV em paciente bradicárdico e hipotenso',
        'Não indicar estratégia de reperfusão',
        'Aguardar o resultado da troponina para decidir a reperfusão'
      ]
    },
    instD: {
      title: 'IAM com Supra de ST e Infarto de VD — Material de Estudo',
      sections: [
        { h: 'Diagnóstico', items: [
          { item: 'ECG em até 10 minutos da chegada em toda dor torácica suspeita.', score: 2, ref: 'Diretriz SBC de IAM com supra de ST 2015; ESC ACS 2023' },
          { item: 'Supra de ST ≥ 1 mm em 2 derivações contíguas (critérios ajustados para V2–V3) define IAM com supra.', score: 1, ref: 'Fourth Universal Definition of MI' }
        ] },
        { h: 'Infarto de ventrículo direito', items: [
          { item: 'Suspeitar em todo infarto inferior; supra em DIII > DII sugere oclusão de coronária direita. Pedir V3R/V4R.', score: 2, ref: 'Harrison; ESC ACS 2023' },
          { item: 'Tríade: hipotensão, turgência jugular e pulmões limpos. Paciente dependente de pré-carga: volume, evitar nitrato e diurético.', score: 2, ref: 'Braunwald — Tratado de Doenças Cardiovasculares' }
        ] },
        { h: 'Tratamento', items: [
          { item: 'Dupla antiagregação (AAS + inibidor de P2Y12) e anticoagulação.', score: 2, ref: 'ESC ACS 2023' },
          { item: 'Angioplastia primária é a reperfusão de escolha quando disponível em até 120 min do diagnóstico; senão, fibrinólise em até 10 min.', score: 2, ref: 'ESC ACS 2023; SBC' }
        ] },
        { h: 'Contraindicações importantes', items: [
          { item: 'Nitrato contraindicado se PAS < 90 mmHg, infarto de VD, ou uso de sildenafil (24 h) ou tadalafila (48 h).', score: 2, ref: 'AHA/ACC STEMI Guideline' },
          { item: 'Betabloqueador EV contraindicado com sinais de IC, baixo débito, bradicardia ou hipotensão.', score: 1, ref: 'COMMIT/CCS-2' }
        ] }
      ]
    }
  },

  // CASO 4 — ENXAQUECA COM AURA EM USO DE ANTICONCEPCIONAL COMBINADO
  {
    id: 4,
    title: 'Dor de cabeça de novo',
    sub: 'UBS — Atenção Primária',
    tema: 'Neurologia',
    topic: 'Enxaqueca com Aura em Uso de Anticoncepcional Combinado',
    level: 'moderado',
    cardAccent: '#EF5350',
    instA: {
      scenario: 'Unidade Básica de Saúde, consulta agendada.',
      patient: 'Camila Nunes, 29 anos, sexo feminino, analista de marketing.',
      complaint: 'Dores de cabeça cada vez mais frequentes nos últimos 6 meses.',
      tasks: [
        'Realize a anamnese da cefaleia, incluindo os sinais de alarme.',
        'Faça o exame físico e neurológico pertinente.',
        'Formule a hipótese diagnóstica.',
        'Proponha a conduta e as orientações.'
      ]
    },
    instB: {
      vitals: { PA: '118/76 mmHg', FC: '72 bpm', FR: '14 irpm', Tax: '36,3 °C', Peso: '58 kg', Altura: '1,65 m', IMC: '21,3 kg/m²' },
      physicalGeneral: 'Bom estado geral, lúcida, orientada, corada, hidratada.',
      physicalSeg: 'NEUROLÓGICO: sem déficits focais; pares cranianos normais; força grau V global; reflexos simétricos 2+; coordenação e marcha normais | FUNDOSCOPIA: papilas de bordos nítidos, sem edema; pulso venoso espontâneo presente | SINAIS MENÍNGEOS: rigidez de nuca ausente; Kernig e Brudzinski negativos | PALPAÇÃO PERICRANIANA: leve dor em trapézios; ATM sem alterações',
      labs: [
        { test: 'Beta-hCG', val: 'Negativo', ref: 'Negativo', alt: false }
      ],
      note: 'A paciente só menciona o anticoncepcional se perguntada sobre medicamentos ou contracepção. Só descreve as luzes em zigue-zague se perguntada sobre alterações visuais ou sobre o que acontece antes da dor. Neuroimagem, se solicitada: informar que não há indicação no momento (ou entregar laudo normal).',
      patientProfile: 'Analista de marketing, rotina de trabalho estressante, dorme cerca de 5 horas por noite e toma 6 cafés por dia. Fuma socialmente (3 a 4 cigarros nos fins de semana). Usa anticoncepcional combinado com etinilestradiol há 5 anos. Mãe tem enxaqueca.',
      script: [
        { trigger: 'Queixa principal', speech: 'Minhas dores de cabeça. Tão cada vez mais frequentes, não aguento mais.' },
        { trigger: 'Sobre início e frequência', speech: 'Tenho desde a adolescência, mas pioraram nos últimos seis meses. Umas três crises fortes por mês, e dor quase dia sim, dia não.' },
        { trigger: 'Sobre localização e tipo', speech: 'De um lado só, às vezes direito, às vezes esquerdo. Lateja muito, umas oito de dez, e dura o dia inteiro.' },
        { trigger: 'Sobre sintomas associados', speech: 'Enjoo sim, e luz me incomoda demais. Preciso ficar no quarto escuro. Piora até pra subir escada.' },
        { trigger: 'Sobre o que acontece antes da dor', speech: 'Algumas vezes, antes da dor, vejo umas luzes em zigue-zague, tipo um brilho, por uns vinte minutos. Depois vem a dor.' },
        { trigger: 'Sobre analgésicos', speech: 'Dipirona e Neosaldina. Tomo uns quinze dias por mês, às vezes duas vezes no mesmo dia.' },
        { trigger: 'Sobre contracepção', speech: 'Tomo pílula anticoncepcional há uns cinco anos. Aquela com estrogênio.' },
        { trigger: 'Sobre sinais de alarme', speech: 'Não, nada disso. É sempre o mesmo padrão, só ficou mais frequente.' },
        { trigger: 'Pergunta ativa — tratamento', speech: 'Não tem um remédio mais forte pra eu tomar quando dói?' }
      ],
      hiddenInfo: 'Usa anticoncepcional combinado com estrogênio — só revela se perguntada sobre medicamentos ou contracepção | Tem aura visual antes de algumas crises — só revela se perguntada sobre alterações visuais ou sintomas antes da dor | Fuma 3 a 4 cigarros nos fins de semana — só revela se perguntada sobre tabagismo | Dorme 5 horas e toma 6 cafés por dia — só revela se perguntada sobre sono e cafeína',
      actorBehavior: 'Comunicativa e objetiva, um pouco irritada com a dor que atrapalha o trabalho. Quer "um remédio mais forte". Fica surpresa e preocupada ao saber que precisa trocar o anticoncepcional, mas aceita quando o risco é bem explicado.'
    },
    instC: {
      diagnosis: 'Enxaqueca com aura (visual típica), de alta frequência, com uso excessivo de analgésicos (risco de cefaleia por uso excessivo de medicação), em uso de anticoncepcional hormonal combinado — contraindicado.',
      differentials: [
        'Cefaleia por uso excessivo de medicação — entra pelo uso de analgésicos em ≥ 15 dias/mês; é comorbidade a ser tratada junto com a enxaqueca.',
        'Cefaleia tensional — entra pela frequência alta; sai pelo caráter pulsátil, unilateral, intenso, com náusea, fotofobia e piora ao esforço.',
        'Cefaleia secundária (tumor, hipertensão intracraniana) — entra pela piora recente; sai pela ausência de sinais de alarme e pelo exame neurológico e fundoscopia normais.',
        'Ataque isquêmico transitório — entra pelo sintoma visual; sai pela aura positiva (cintilações), de progressão gradual, com duração de 20 minutos e seguida de cefaleia.'
      ],
      context: 'A enxaqueca é muito prevalente em mulheres jovens. A enxaqueca com aura aumenta o risco de AVC isquêmico, e esse risco é potencializado pelo estrogênio e pelo tabagismo. Por isso, o anticoncepcional combinado é contraindicado (categoria 4 dos critérios de elegibilidade da OMS).',
      justify: 'Crises unilaterais, pulsáteis, de intensidade forte, com náusea, fotofobia e piora ao esforço, com duração de horas (critérios ICHD-3), precedidas em algumas ocasiões por aura visual reversível de 20 minutos. Exame neurológico normal e sem sinais de alarme.',
      expectedAnamnesis: 'Início e evolução da cefaleia | Frequência das crises | Localização e caráter da dor | Intensidade e duração | Náusea, fotofobia e fonofobia | Aura | Sinais de alarme | Uso de analgésicos (dias por mês) | Contracepção | Tabagismo | Gatilhos, sono e cafeína | História familiar',
      expectedPhysical: 'Sinais vitais | Exame neurológico completo | Fundoscopia | Sinais meníngeos | Palpação pericraniana',
      expectedExams: [
        { exam: 'Nenhum exame de neuroimagem', justify: 'Sem sinais de alarme e com exame neurológico normal', expected: 'Diagnóstico clínico' }
      ],
      expectedConduct: 'Farmacológica: suspender o anticoncepcional combinado; profilaxia com propranolol, amitriptilina ou topiramato; crise com AINE (naproxeno, ibuprofeno) e/ou triptano (sumatriptano), limitando analgésicos a menos de 10 dias por mês | Não farmacológica: método contraceptivo sem estrogênio (DIU de cobre ou hormonal, implante, desogestrel) | Orientações à paciente: diário da cefaleia, cessar o tabagismo, higiene do sono, reduzir cafeína, identificar gatilhos, retorno para avaliar a profilaxia',
      expectedCommunication: 'Apresentar-se e chamar a paciente pelo nome | Validar o impacto da dor na vida da paciente | Explicar por que o anticoncepcional precisa ser trocado | Verificar entendimento',
      criticalErrors: [
        'Não perguntar sobre aura',
        'Não investigar o método contraceptivo',
        'Manter o anticoncepcional combinado em paciente com enxaqueca com aura',
        'Prescrever apenas um analgésico mais forte sem profilaxia nem orientação sobre o uso excessivo',
        'Não pesquisar sinais de alarme'
      ]
    },
    instD: {
      title: 'Enxaqueca com Aura — Material de Estudo',
      sections: [
        { h: 'Critérios diagnósticos', items: [
          { item: 'Enxaqueca: crises de 4–72 h com 2 de 4 características (unilateral, pulsátil, moderada/forte, piora com esforço) e náusea ou foto/fonofobia.', score: 2, ref: 'ICHD-3' },
          { item: 'Aura típica: sintomas visuais, sensitivos ou de linguagem totalmente reversíveis, com 5–60 min de duração.', score: 1, ref: 'ICHD-3' }
        ] },
        { h: 'Sinais de alarme (SNOOP)', items: [
          { item: 'Sintomas sistêmicos, déficits neurológicos, início súbito, início após 50 anos, mudança de padrão, piora com Valsalva, papiledema.', score: 2, ref: 'Do TP et al., Neurology 2019' }
        ] },
        { h: 'Contracepção', items: [
          { item: 'Enxaqueca com aura = categoria 4 para contraceptivos hormonais combinados (risco de AVC isquêmico).', score: 2, ref: 'OMS — Critérios Médicos de Elegibilidade' }
        ] },
        { h: 'Tratamento', items: [
          { item: 'Crise: AINE e/ou triptano; evitar opioides. Uso de analgésico simples ≥ 15 dias/mês ou triptano ≥ 10 dias/mês leva à cefaleia por uso excessivo.', score: 2, ref: 'Consenso da Sociedade Brasileira de Cefaleia' },
          { item: 'Profilaxia se ≥ 4 crises/mês ou incapacidade: propranolol, amitriptilina, topiramato, flunarizina.', score: 2, ref: 'Consenso SBCe 2022' }
        ] }
      ]
    }
  },
];

export default salaSimulacao;
