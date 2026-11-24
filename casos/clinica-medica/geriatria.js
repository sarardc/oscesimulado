const geriatria2 = [
  // ─────────────────────────────────────────────────────────────────────────
  // CASO 1 — DELIRIUM
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 1,
    title: 'Idoso internado que ficou confuso e agitado à noite',
    sub: 'Enfermaria de Clínica Médica — Hospital Geral',
    tema: 'Geriatria',
    topic: 'Delirium',
    level: 'difícil',
    cardAccent: '#8D6E63',
    instA: {
      scenario: 'Enfermaria de clínica médica, 8h. Você é chamado(a) pela enfermagem porque o paciente passou a noite agitado, tentou arrancar o acesso venoso e não reconhece a filha.',
      patient: 'O.R.M., 84 anos, masculino, aposentado (ex-marceneiro), internado há 3 dias por infecção urinária.',
      complaint: 'Mudança aguda do comportamento: confuso, agitado à noite e sonolento durante o dia.',
      tasks: [
        'Realize a anamnese com a acompanhante (filha), caracterizando a alteração cognitiva.',
        'Realize o exame físico e a avaliação do estado mental dirigidos.',
        'Formule a hipótese diagnóstica utilizando instrumento validado.',
        'Identifique os fatores predisponentes e precipitantes.',
        'Proponha a conduta não farmacológica e farmacológica.'
      ]
    },
    instB: {
      vitals: {
        PA: '108/62 mmHg',
        FC: '96 bpm',
        FR: '20 irpm',
        Tax: '37,4 °C',
        SpO2: '93% em ar ambiente',
        'Glicemia capilar': '142 mg/dL'
      },
      physicalGeneral: 'Regular estado geral, desidratado 2+/4+, mucosas secas, hipocorado 1+/4+. Contido no leito por faixas nos punhos. Sonda vesical de demora. Sem óculos e sem aparelho auditivo.',
      physicalSeg: 'NEUROLÓGICO: sonolento mas despertável, desatento (não consegue dizer os meses do ano de trás para frente, perde o foco durante a conversa), desorientado no tempo e espaço, discurso desorganizado; sem déficit motor focal, sem rigidez de nuca | ABDOME: globo vesical ausente (SVD), dor leve em hipogástrio; fecaloma palpável ao toque retal | CARDIOPULMONAR: estertores finos em base direita | PELE: hiperemia não branqueável em região sacral (lesão por pressão estágio 1).',
      labs: [
        { test: 'Sódio', val: '128 mEq/L', ref: '135–145 mEq/L', alt: true },
        { test: 'Ureia', val: '86 mg/dL', ref: '15–45 mg/dL', alt: true },
        { test: 'Creatinina', val: '1,7 mg/dL (admissão 1,1)', ref: '0,7–1,3 mg/dL', alt: true },
        { test: 'Leucócitos', val: '13.400/mm³', ref: '4.000–11.000/mm³', alt: true },
        { test: 'PCR', val: '96 mg/L', ref: '< 5 mg/L', alt: true },
        { test: 'Urocultura (admissão)', val: 'E. coli sensível a ceftriaxona', ref: '—', alt: true },
        { test: 'Glicemia', val: '138 mg/dL', ref: '70–99 mg/dL', alt: true }
      ],
      image: 'Radiografia de tórax (se solicitada): opacidade em base direita compatível com pneumonia (provável broncoaspiração).',
      note: 'A filha responde às perguntas. Entregar a prescrição atual se o candidato pedir para revisar medicamentos: ceftriaxona 1 g EV/dia; diazepam 10 mg VO à noite (prescrito pelo plantonista para insônia); prometazina 25 mg IM se agitação (aplicada 2x); omeprazol; dipirona; hidroclorotiazida 25 mg/dia (uso domiciliar mantido). O paciente pode resmungar frases desconexas durante a estação.',
      patientProfile: 'Viúvo, mora com a filha. Antes da internação era independente para atividades básicas, precisava de ajuda para finanças. A filha notava esquecimentos leves há 1 ano. Usa óculos e aparelho auditivo, que ficaram em casa. Hipertenso, ex-tabagista.',
      script: [
        { trigger: 'Queixa principal (filha)', speech: 'Doutor(a), meu pai entrou aqui conversando normal. Desde ontem à noite ele não me reconhece, ficou gritando, tentou arrancar o soro.' },
        { trigger: 'Sobre o início e a flutuação', speech: 'Começou de repente, ontem à tarde. Tem hora que ele parece bem, conversa comigo, e de noite piora muito.' },
        { trigger: 'Sobre o estado prévio', speech: 'Em casa ele se virava sozinho: tomava banho, se vestia, comia. Só esquecia umas coisas, nomes, onde deixou a chave. As contas eu é que pago.' },
        { trigger: 'Sobre sono', speech: 'Ontem de dia ele dormiu quase o tempo todo e a noite inteira ficou acordado.' },
        { trigger: 'Sobre óculos e aparelho auditivo', speech: 'Os óculos e o aparelho de ouvido ficaram em casa, na correria esqueci de trazer.' },
        { trigger: 'Sobre alimentação e evacuação', speech: 'Ele quase não come nem bebe água aqui. E acho que não evacua desde que internou.' },
        { trigger: 'Sobre alucinações', speech: 'Ele falou que tinha bicho subindo na parede e que estava na marcenaria dele.' },
        { trigger: 'Pergunta ativa — diagnóstico (filha)', speech: 'Ele ficou demente de vez? Vai voltar a ser como antes?' }
      ],
      hiddenInfo: 'Recebeu diazepam e prometazina nas últimas 2 noites — só aparece se o candidato revisar a prescrição | Engasga ao tomar líquidos há alguns meses — só revela se perguntado sobre deglutição | Esquecimentos prévios há 1 ano (provável comprometimento cognitivo de base) — só revela se perguntado sobre a cognição antes da internação',
      actorBehavior: 'Filha angustiada, cansada, com sentimento de culpa por ter esquecido os óculos e o aparelho. Acalma-se quando o candidato explica que o quadro é frequentemente reversível. O paciente (manequim ou ator) permanece sonolento, responde de forma desconexa e se agita se for contido de forma brusca.'
    },
    instC: {
      diagnosis: 'Delirium misto (hipo e hiperativo) em idoso com provável comprometimento cognitivo prévio, multifatorial: infecção (ITU + pneumonia aspirativa), desidratação com hiponatremia e lesão renal aguda, medicamentos deliriogênicos (benzodiazepínico e anti-histamínico anticolinérgico), constipação/fecaloma, privação sensorial, contenção física e sonda vesical.',
      differentials: [
        'Demência (progressão) — sai pelo início agudo, flutuação e desatenção; o delirium pode sobrepor-se a demência prévia',
        'AVC — deve ser considerado em alteração aguda; ausência de déficit focal torna menos provável, mas exame neurológico é obrigatório',
        'Depressão / psicose primária — sai pela alteração do nível de consciência e desatenção; alucinações visuais sugerem causa orgânica',
        'Abstinência alcoólica ou de benzodiazepínicos — investigar uso prévio',
        'Hipoglicemia ou distúrbios metabólicos graves — glicemia normal; hiponatremia contribui'
      ],
      context: 'O delirium acomete até 30–50% dos idosos hospitalizados e se associa a maior mortalidade, institucionalização e declínio cognitivo. É frequentemente subdiagnosticado, sobretudo na forma hipoativa. Resulta da interação entre fatores predisponentes (idade, demência, déficit sensorial) e precipitantes (infecção, drogas, distúrbios hidroeletrolíticos, contenção, sonda).',
      justify: 'CAM positivo: (1) início agudo e curso flutuante + (2) desatenção + (3) pensamento desorganizado e/ou (4) alteração do nível de consciência. Múltiplos precipitantes identificados no exame e na prescrição.',
      expectedAnamnesis: 'Início e curso (agudo, flutuante) | Estado cognitivo e funcional prévio (AVDs) | Alterações do ciclo sono-vigília | Alucinações | Uso de medicamentos (revisão da prescrição) | Uso prévio de álcool e benzodiazepínicos | Ingestão hídrica, alimentação, deglutição | Hábito intestinal e urinário | Dor | Uso de óculos e aparelho auditivo',
      expectedPhysical: 'Avaliação do nível de consciência e atenção (CAM / teste dos meses ao contrário) | Exame neurológico focal e meningismo | Hidratação | Ausculta pulmonar | Globo vesical e toque retal (fecaloma) | Pele (lesão por pressão) | Sinais de dor',
      expectedExams: [
        { exam: 'Eletrólitos, ureia, creatinina, glicemia', justify: 'Distúrbios metabólicos precipitantes', expected: 'Hiponatremia, LRA' },
        { exam: 'Hemograma e PCR', justify: 'Infecção', expected: 'Leucocitose' },
        { exam: 'Radiografia de tórax', justify: 'Foco pulmonar (estertores, disfagia)', expected: 'Pneumonia em base direita' },
        { exam: 'Urina tipo 1 e cultura de controle', justify: 'Avaliar ITU (atenção à SVD)', expected: 'A definir' },
        { exam: 'Gasometria / SpO2, ECG', justify: 'Hipoxemia e causas cardíacas', expected: 'SpO2 limítrofe' },
        { exam: 'TC de crânio — apenas se déficit focal, queda com trauma, anticoagulação ou sem causa identificada', justify: 'Evitar exames desnecessários', expected: 'Não indicada inicialmente' }
      ],
      expectedConduct: 'Tratar precipitantes: ajustar antibiótico para cobrir pneumonia aspirativa (ex.: manter ceftriaxona ou trocar para amoxicilina-clavulanato conforme gravidade), hidratação EV com SF 0,9%, suspender hidroclorotiazida, corrigir sódio lentamente, tratar fecaloma (lavagem/laxativo), retirar SVD assim que possível, oxigênio se SpO2 < 92% | Suspender medicamentos deliriogênicos: diazepam e prometazina | Medidas não farmacológicas (HELP): retirar contenção física, trazer óculos e aparelho auditivo, reorientação frequente (relógio, calendário), presença da família, higiene do sono (luz de dia, escuro e silêncio à noite, evitar procedimentos noturnos), mobilização precoce, hidratação e nutrição, avaliação fonoaudiológica da deglutição | Farmacológica: apenas se agitação com risco para si ou para outros — haloperidol 0,25–0,5 mg VO/IM, menor dose pelo menor tempo; evitar benzodiazepínicos (exceto abstinência) | Prevenção de lesão por pressão (mudança de decúbito) | Orientações à família: delirium é frequente, geralmente reversível em dias a semanas, mas pode deixar sequelas; seguimento cognitivo após a alta',
      expectedCommunication: 'Acolher a filha e desfazer culpa | Explicar a diferença entre delirium e demência | Envolver a família como parte do tratamento | Comunicar-se com o paciente de forma calma, frases curtas, apresentando-se',
      criticalErrors: [
        'Não identificar delirium (atribuir a "demência" ou "idade")',
        'Prescrever benzodiazepínico ou anti-histamínico para controlar agitação',
        'Manter contenção física sem necessidade',
        'Não revisar a prescrição medicamentosa',
        'Não investigar e tratar precipitantes (infecção, desidratação, hiponatremia, fecaloma)'
      ]
    },
    instD: {
      title: 'Delirium no Idoso — Material de Estudo',
      sections: [
        {
          h: 'Definição e Epidemiologia',
          items: [
            { item: 'Síndrome de início agudo e curso flutuante, com distúrbio de atenção e consciência, causada por condição médica, intoxicação ou abstinência (DSM-5).', score: 1, ref: 'DSM-5-TR' },
            { item: 'Acomete até 50% dos idosos hospitalizados; forma hipoativa é a mais comum e a mais subdiagnosticada.', score: 1, ref: 'Inouye SK et al., Lancet 2014' }
          ]
        },
        {
          h: 'Diagnóstico',
          items: [
            { item: 'CAM: (1) início agudo/flutuação + (2) desatenção + (3) pensamento desorganizado OU (4) alteração do nível de consciência.', score: 2, ref: 'Inouye SK, Ann Intern Med 1990' },
            { item: 'Investigar precipitantes: infecções, fármacos (anticolinérgicos, benzodiazepínicos, opioides), distúrbios hidroeletrolíticos, retenção urinária, fecaloma, dor, hipóxia.', score: 2, ref: 'NICE Guideline CG103 — Delirium' }
          ]
        },
        {
          h: 'Prevenção e Tratamento',
          items: [
            { item: 'Intervenções multicomponentes não farmacológicas (HELP) reduzem incidência em ~40%: reorientação, sono, mobilização, hidratação, óculos/aparelho auditivo.', score: 2, ref: 'Hshieh TT et al., JAMA Intern Med 2015' },
            { item: 'Antipsicóticos não previnem nem encurtam o delirium; usar haloperidol em dose baixa só para agitação com risco.', score: 1, ref: 'NICE CG103; AGS Beers Criteria 2023' },
            { item: 'Evitar benzodiazepínicos (pioram delirium), exceto abstinência alcoólica/benzodiazepínica.', score: 1, ref: 'AGS Beers Criteria, 2023' }
          ]
        },
        {
          h: 'Prognóstico',
          items: [
            { item: 'Associado a maior mortalidade, institucionalização e declínio cognitivo a longo prazo; seguimento cognitivo após a alta.', score: 1, ref: 'Inouye SK et al., Lancet 2014' }
          ]
        }
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // CASO 2 — QUEDAS RECORRENTES
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 2,
    title: 'Idosa com três quedas nos últimos seis meses',
    sub: 'Ambulatório de Geriatria — Atenção Secundária',
    tema: 'Geriatria',
    topic: 'Quedas Recorrentes no Idoso',
    level: 'moderado',
    cardAccent: '#8D6E63',
    instA: {
      scenario: 'Ambulatório de Geriatria. Paciente encaminhada pela UBS após a terceira queda, acompanhada do filho.',
      patient: 'D.A.S., 79 anos, feminino, aposentada (ex-costureira), viúva.',
      complaint: 'Caiu três vezes nos últimos 6 meses; na última, ficou 2 horas no chão até ser encontrada.',
      tasks: [
        'Realize a anamnese dirigida às quedas e fatores de risco.',
        'Realize o exame físico dirigido, incluindo testes de equilíbrio e marcha.',
        'Identifique os fatores de risco modificáveis.',
        'Solicite os exames complementares pertinentes.',
        'Proponha um plano de intervenção multifatorial.'
      ]
    },
    instB: {
      vitals: {
        PA: '146/84 mmHg (deitada) → 118/70 mmHg (em pé, 3 min)',
        FC: '72 bpm (deitada) → 78 bpm (em pé)',
        FR: '16 irpm',
        Tax: '36,2 °C',
        Peso: '54 kg',
        Altura: '1,55 m',
        IMC: '22,5 kg/m²'
      },
      physicalGeneral: 'Bom estado geral, corada, hidratada, lúcida, orientada. Hematoma em resolução em quadril esquerdo.',
      physicalSeg: 'NEUROLÓGICO: força grau IV+ em membros inferiores proximais; sensibilidade vibratória diminuída em pés; Romberg positivo; sem tremor ou rigidez | MARCHA: lenta, base alargada, passos curtos; Timed Up and Go = 18 segundos; não consegue fazer tandem | OLHOS: acuidade visual reduzida (catarata bilateral referida) | PÉS: calos plantares, unhas longas, usa chinelo frouxo | CARDIOVASCULAR: sopro sistólico ejetivo 2+/6+ em foco aórtico | MMEM: 27/30.',
      labs: [
        { test: 'Hemoglobina', val: '12,1 g/dL', ref: '12–16 g/dL', alt: false },
        { test: 'Vitamina B12', val: '210 pg/mL', ref: '> 300 pg/mL', alt: true },
        { test: '25-OH vitamina D', val: '16 ng/mL', ref: '> 30 ng/mL', alt: true },
        { test: 'Sódio', val: '132 mEq/L', ref: '135–145 mEq/L', alt: true },
        { test: 'Glicemia de jejum', val: '96 mg/dL', ref: '70–99 mg/dL', alt: false },
        { test: 'TSH', val: '2,8 mUI/L', ref: '0,4–4,5 mUI/L', alt: false },
        { test: 'ECG', val: 'Ritmo sinusal, FC 70 bpm, sem bloqueios', ref: 'Normal', alt: false }
      ],
      image: 'Densitometria óssea (se solicitada): T-score colo femoral −2,8; coluna lombar −3,0 — osteoporose.',
      note: 'Fornecer a lista de medicamentos se solicitada: hidroclorotiazida 25 mg, anlodipino 10 mg, clonazepam 2 mg à noite (há 10 anos), amitriptilina 25 mg (para "dor nas pernas"), omeprazol 20 mg há 6 anos. A PA ortostática só é informada se o candidato medir a PA deitada e em pé.',
      patientProfile: 'Mora sozinha em casa térrea com tapetes, quintal com piso irregular e banheiro sem barras. O filho mora a 5 km. Usa óculos antigos; tem catarata bilateral sem cirurgia. Sedentária. Tem medo de cair novamente e passou a sair menos de casa.',
      script: [
        { trigger: 'Queixa principal', speech: 'Doutor(a), já caí três vezes esse ano. Na última fiquei no chão do banheiro um tempão, não conseguia levantar.' },
        { trigger: 'Sobre as circunstâncias', speech: 'Uma vez foi de noite, levantei para ir ao banheiro e tropecei no tapete. Outra vez levantei rápido da cama e escureceu a vista.' },
        { trigger: 'Sobre perda de consciência', speech: 'Não desmaiei, não. Lembro de tudo.' },
        { trigger: 'Sobre tontura', speech: 'Quando eu levanto rápido da cama, dá uma tontura, a vista fica escura.' },
        { trigger: 'Sobre medicamentos', speech: 'Tomo remédio para pressão, um para dormir que tomo faz dez anos, e um para dor nas pernas.' },
        { trigger: 'Sobre visão', speech: 'Enxergo mal, o médico falou que tenho catarata, mas fiquei com medo de operar.' },
        { trigger: 'Sobre medo de cair', speech: 'Agora tenho medo de andar até no quintal. Quase não saio mais de casa.' },
        { trigger: 'Pergunta ativa', speech: 'Será que vou ter que ir para um asilo? Eu não quero sair da minha casa.' }
      ],
      hiddenInfo: 'Usa clonazepam 2 mg há 10 anos e amitriptilina — só revela se perguntada especificamente sobre remédio para dormir e para dor | Fica 2 horas no chão sem conseguir levantar — sinal de gravidade — só detalha se perguntada sobre a última queda | Urgência urinária noturna, levanta 3 vezes por noite — só revela se perguntada sobre urina',
      actorBehavior: 'Idosa lúcida, independente e orgulhosa de morar sozinha. Teme perder a autonomia e a institucionalização. Resiste a parar o "remédio de dormir", mas aceita redução gradual se bem explicada.'
    },
    instC: {
      diagnosis: 'Síndrome de quedas recorrentes de causa multifatorial: hipotensão ortostática (diurético + anti-hipertensivo + tricíclico), uso crônico de benzodiazepínico, déficit visual (catarata), neuropatia periférica por deficiência de B12 (provável associação com IBP crônico), sarcopenia/fraqueza proximal, deficiência de vitamina D, riscos ambientais e noctúria; com osteoporose (alto risco de fratura) e síndrome pós-queda.',
      differentials: [
        'Síncope cardíaca (estenose aórtica, arritmias) — entra pelo sopro aórtico; ausência de perda de consciência e ECG normal tornam menos provável, mas ecocardiograma é indicado',
        'Doença de Parkinson — sai pela ausência de rigidez, tremor e bradicinesia',
        'Hidrocefalia de pressão normal — considerar diante de marcha alterada + urgência urinária; cognição preservada e marcha não magnética tornam menos provável',
        'AVC/AIT — sem déficit focal',
        'Hipoglicemia — sem diabetes'
      ],
      context: 'Cerca de 30% dos idosos acima de 65 anos caem anualmente; quedas são a principal causa de morte por lesão nessa faixa etária. Ficar no chão por tempo prolongado (long lie) indica gravidade. A abordagem recomendada é a avaliação multifatorial com intervenções individualizadas.',
      justify: 'Queda de PA sistólica ≥ 20 mmHg em pé (146→118) define hipotensão ortostática. TUG > 12 s indica alto risco de quedas. Múltiplos medicamentos de risco (FRIDs), déficit visual, neuropatia com B12 baixa, vitamina D baixa e ambiente inseguro.',
      expectedAnamnesis: 'Número, circunstâncias e consequências das quedas | Pródromos, perda de consciência, palpitações | Tempo no chão e capacidade de levantar | Revisão completa dos medicamentos (psicotrópicos, anti-hipertensivos) | Visão e audição | Sintomas urinários (noctúria, urgência) | Medo de cair e restrição de atividades | Ambiente domiciliar | Funcionalidade (AVDs) | Uso de álcool',
      expectedPhysical: 'PA e FC deitada e em pé (hipotensão ortostática) | Timed Up and Go, teste de marcha, Romberg | Força muscular (sentar-levantar) | Acuidade visual | Exame neurológico (sensibilidade, propriocepção) | Exame cardiovascular (sopros, arritmia) | Exame dos pés e calçados | Rastreio cognitivo',
      expectedExams: [
        { exam: 'Hemograma, eletrólitos, função renal, glicemia, TSH', justify: 'Causas metabólicas', expected: 'Hiponatremia leve (tiazídico)' },
        { exam: 'Vitamina B12 e 25-OH vitamina D', justify: 'Neuropatia e fraqueza muscular', expected: 'Deficientes' },
        { exam: 'ECG', justify: 'Arritmias e bloqueios', expected: 'Normal' },
        { exam: 'Ecocardiograma', justify: 'Avaliar sopro aórtico (estenose aórtica)', expected: 'A definir' },
        { exam: 'Densitometria óssea', justify: 'Risco de fratura em idosa com quedas', expected: 'Osteoporose' }
      ],
      expectedConduct: 'Revisão medicamentosa (desprescrição): retirada gradual do clonazepam (redução de 10–25% a cada 2–4 semanas); suspender amitriptilina (anticolinérgica, ortostática) — substituir por opção mais segura para dor neuropática se necessário; suspender hidroclorotiazida (hiponatremia, noctúria) e ajustar anti-hipertensivo; reavaliar indicação do IBP | Hipotensão ortostática: levantar em etapas, hidratação adequada, meias compressivas | Reposição de B12 (IM ou VO em altas doses) e vitamina D (colecalciferol) | Tratar osteoporose (bisfosfonato após correção da vitamina D) | Exercícios de equilíbrio e fortalecimento (fisioterapia, Otago, tai chi) | Encaminhar à oftalmologia para cirurgia de catarata | Adaptação domiciliar: retirar tapetes, barras no banheiro, iluminação noturna, calçado fechado com solado antiderrapante | Dispositivo de alerta/teleassistência, plano para levantar do chão | Orientações: o objetivo é manter a independência em casa com segurança',
      expectedCommunication: 'Acolher o medo de cair e da institucionalização | Valorizar a autonomia da paciente | Explicar a retirada gradual do benzodiazepínico com empatia | Envolver o filho no plano | Decisão compartilhada',
      criticalErrors: [
        'Não medir PA em posição supina e ortostática',
        'Não revisar os medicamentos de risco (benzodiazepínico, tricíclico, diurético)',
        'Suspender abruptamente o clonazepam usado há 10 anos',
        'Não avaliar marcha e equilíbrio (TUG ou equivalente)',
        'Não investigar osteoporose em idosa com quedas recorrentes'
      ]
    },
    instD: {
      title: 'Quedas no Idoso — Material de Estudo',
      sections: [
        {
          h: 'Epidemiologia e Fatores de Risco',
          items: [
            { item: '~30% dos idosos > 65 anos caem por ano; quedas são a principal causa de morte por lesão nessa faixa etária.', score: 1, ref: 'World Guidelines for Falls Prevention, Age Ageing 2022' },
            { item: 'Fatores de risco: quedas prévias, alteração de marcha/equilíbrio, fraqueza, déficit visual, medicamentos de risco (FRIDs), hipotensão ortostática, demência, ambiente.', score: 2, ref: 'World Guidelines for Falls Prevention, 2022' }
          ]
        },
        {
          h: 'Avaliação',
          items: [
            { item: 'Avaliação multifatorial em idosos com queda com lesão, ≥ 2 quedas, long lie ou alteração de marcha.', score: 2, ref: 'World Guidelines for Falls Prevention, 2022' },
            { item: 'Hipotensão ortostática: queda ≥ 20 mmHg na PAS ou ≥ 10 mmHg na PAD em até 3 min em pé.', score: 1, ref: 'Consensus Statement — Freeman R et al., 2011' },
            { item: 'TUG ≥ 12 segundos sugere alto risco de quedas.', score: 1, ref: 'STEADI — CDC' }
          ]
        },
        {
          h: 'Intervenções',
          items: [
            { item: 'Exercícios de equilíbrio e força reduzem quedas em ~23%.', score: 2, ref: 'Sherrington C et al., Cochrane 2019' },
            { item: 'Desprescrição de benzodiazepínicos, antidepressivos tricíclicos e antipsicóticos (Critérios de Beers).', score: 2, ref: 'AGS Beers Criteria, 2023' },
            { item: 'Cirurgia de catarata no primeiro olho reduz quedas; adaptação domiciliar com terapeuta ocupacional.', score: 1, ref: 'Gillespie LD et al., Cochrane 2012' }
          ]
        }
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // CASO 3 — POLIFARMÁCIA E IATROGENIA
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 3,
    title: 'Idoso com sacola de remédios, sonolência e intestino preso',
    sub: 'UBS — Atenção Primária',
    tema: 'Geriatria',
    topic: 'Polifarmácia e Iatrogenia',
    level: 'moderado',
    cardAccent: '#8D6E63',
    instA: {
      scenario: 'Unidade Básica de Saúde. A esposa trouxe uma sacola com todos os medicamentos do paciente, prescritos por diferentes especialistas.',
      patient: 'G.P.L., 81 anos, masculino, aposentado (ex-bancário).',
      complaint: 'Está mais sonolento, com boca seca, intestino preso há semanas e dificuldade para urinar.',
      tasks: [
        'Realize a reconciliação medicamentosa e a anamnese dirigida.',
        'Realize o exame físico dirigido.',
        'Identifique as prescrições potencialmente inapropriadas e as cascatas de prescrição.',
        'Proponha um plano de desprescrição priorizado.',
        'Oriente o paciente e a esposa.'
      ]
    },
    instB: {
      vitals: {
        PA: '128/74 mmHg (sentado) → 106/66 mmHg (em pé)',
        FC: '58 bpm',
        FR: '16 irpm',
        Tax: '36,3 °C',
        Peso: '68 kg',
        Altura: '1,70 m',
        IMC: '23,5 kg/m²'
      },
      physicalGeneral: 'Bom estado geral, sonolento mas orientado, mucosas secas, corado.',
      physicalSeg: 'NEUROLÓGICO: sonolência leve, atenção preservada, discreto tremor de repouso em mão direita com rigidez em roda denteada leve (iniciados após metoclopramida) | ABDOME: distendido, ruídos hidroaéreos diminuídos, fezes palpáveis em cólon esquerdo; globo vesical palpável (resíduo estimado 300 mL) | CARDIOVASCULAR: ritmo regular, bradicárdico | OLHOS: sem alterações | MEMBROS INFERIORES: edema maleolar 1+/4+ bilateral.',
      labs: [
        { test: 'Creatinina', val: '1,4 mg/dL (TFG estimada 46 mL/min/1,73m²)', ref: '> 60', alt: true },
        { test: 'Potássio', val: '5,4 mEq/L', ref: '3,5–5,0 mEq/L', alt: true },
        { test: 'Sódio', val: '134 mEq/L', ref: '135–145 mEq/L', alt: true },
        { test: 'HbA1c', val: '6,1%', ref: 'Meta no idoso frágil: < 8,0%', alt: false },
        { test: 'Glicemia de jejum', val: '82 mg/dL', ref: '70–99 mg/dL', alt: false },
        { test: 'Vitamina B12', val: '190 pg/mL', ref: '> 300 pg/mL', alt: true },
        { test: 'ECG', val: 'Bradicardia sinusal 56 bpm, PR 210 ms', ref: 'Normal', alt: true }
      ],
      note: 'Entregar a lista de medicamentos assim que o candidato pedir para ver a sacola: 1) Glibenclamida 5 mg 2x/dia; 2) Metformina 850 mg 2x/dia; 3) Enalapril 20 mg 2x/dia; 4) Espironolactona 25 mg/dia; 5) Anlodipino 10 mg/dia; 6) Atenolol 50 mg/dia; 7) Furosemida 40 mg/dia (iniciada para "inchaço nas pernas"); 8) Oxibutinina 5 mg 2x/dia (urologista, para urgência); 9) Amitriptilina 25 mg à noite; 10) Metoclopramida 10 mg 3x/dia (há 4 meses, para "enjoo"); 11) Omeprazol 40 mg/dia (há 8 anos); 12) Donepezila 5 mg/dia (neurologista); 13) Sinvastatina 40 mg; 14) AAS 100 mg; 15) Ginkgo biloba (por conta própria). Total: 15 medicamentos.',
      patientProfile: 'Ex-bancário, casado, mora com a esposa. Consulta com cardiologista, endocrinologista, urologista, neurologista e gastroenterologista, cada um em um serviço. Diagnósticos: DM2, HAS, HPB, comprometimento cognitivo leve. A esposa organiza os remédios em uma caixa, mas há confusão de horários.',
      script: [
        { trigger: 'Queixa principal (esposa)', speech: 'Doutor(a), ele anda muito sonolento, com a boca seca, o intestino preso e agora está difícil para fazer xixi.' },
        { trigger: 'Sobre os remédios (esposa)', speech: 'Trouxe tudo aqui na sacola. Cada médico passa um remédio, ninguém olha o que o outro passou.' },
        { trigger: 'Sobre o inchaço', speech: 'As pernas incharam depois que aumentaram o remédio da pressão, aí o cardiologista passou a furosemida.' },
        { trigger: 'Sobre o tremor (paciente)', speech: 'Minha mão começou a tremer faz uns dois meses. Fiquei com medo de ser Parkinson.' },
        { trigger: 'Sobre hipoglicemia', speech: 'Algumas vezes de manhã ele acorda suado, tremendo e confuso. Dou um copo de suco e melhora.' },
        { trigger: 'Sobre tontura', speech: 'Ao levantar fico tonto. Quase caí semana passada.' },
        { trigger: 'Sobre fitoterápicos', speech: 'Tomo ginkgo para a memória, vi na televisão.' },
        { trigger: 'Pergunta ativa', speech: 'Posso parar algum desses remédios? São muitos, gasto muito dinheiro.' }
      ],
      hiddenInfo: 'Episódios de hipoglicemia matinal — só revela se perguntado sobre suor frio, tremores ou confusão matinal | Ginkgo biloba por conta própria (risco de sangramento com AAS) — só revela se perguntado sobre fitoterápicos | O enjoo que motivou a metoclopramida começou após iniciar a donepezila — só revela se perguntado quando o enjoo começou',
      actorBehavior: 'Paciente sonolento, mas colaborativo. Esposa organizada, cansada, ansiosa para reduzir os remédios, mas teme "desobedecer" os especialistas. Valoriza quando o candidato propõe comunicação com os outros médicos.'
    },
    instC: {
      diagnosis: 'Polifarmácia (15 medicamentos) com reações adversas e cascatas de prescrição: hipoglicemias por glibenclamida; síndrome anticolinérgica (oxibutinina + amitriptilina) com constipação, retenção urinária e sonolência; parkinsonismo induzido por metoclopramida; edema por anlodipino tratado com furosemida; náusea por donepezila tratada com metoclopramida; hipercalemia por IECA + espironolactona com DRC; bradicardia (atenolol + donepezila); hipotensão ortostática; deficiência de B12 (metformina + IBP).',
      differentials: [
        'Doença de Parkinson idiopática — sai pela relação temporal com metoclopramida (parkinsonismo induzido por fármaco); reavaliar após suspensão',
        'Progressão do comprometimento cognitivo / delirium — sonolência pode ser anticolinérgica; reavaliar após desprescrição',
        'Insuficiência cardíaca — edema maleolar mais provavelmente por anlodipino; avaliar se persistir',
        'Retenção urinária por HPB — piorada por anticolinérgicos'
      ],
      context: 'Polifarmácia (≥ 5 medicamentos) atinge mais de 40% dos idosos e aumenta risco de reações adversas, quedas, hospitalização e morte. A fragmentação do cuidado entre especialistas favorece cascatas de prescrição, em que um efeito adverso é interpretado como nova doença e tratado com outro fármaco.',
      justify: 'Sintomas anticolinérgicos clássicos, hipoglicemias com sulfonilureia de longa ação, parkinsonismo após metoclopramida, edema após anlodipino 10 mg, K 5,4 com IECA + espironolactona e TFG 46. Critérios de Beers e STOPP identificam glibenclamida, oxibutinina, amitriptilina, metoclopramida, IBP de longo prazo sem indicação.',
      expectedAnamnesis: 'Reconciliação medicamentosa completa (sacola), incluindo fitoterápicos e automedicação | Quem prescreveu e por que cada medicamento | Relação temporal entre sintomas e início de cada medicamento | Sintomas de hipoglicemia | Sintomas anticolinérgicos | Quedas e tontura | Adesão e organização dos horários | Custos | Objetivos e preferências do paciente',
      expectedPhysical: 'PA sentado e em pé | FC (bradicardia) | Nível de consciência | Pesquisa de parkinsonismo | Globo vesical | Exame abdominal (constipação) | Edema',
      expectedExams: [
        { exam: 'Função renal e eletrólitos', justify: 'Ajuste de doses e hipercalemia', expected: 'TFG 46, K 5,4' },
        { exam: 'Glicemia, HbA1c', justify: 'Avaliar supertratamento do diabetes', expected: 'HbA1c 6,1% — muito baixa para idoso com hipoglicemias' },
        { exam: 'ECG', justify: 'Bradicardia por betabloqueador + donepezila', expected: 'Bradicardia, BAV 1º grau' },
        { exam: 'Vitamina B12', justify: 'Metformina + IBP prolongado', expected: 'Baixa' }
      ],
      expectedConduct: 'Desprescrição priorizada (um ou poucos fármacos por vez, com monitorização): 1) Suspender glibenclamida (hipoglicemias; meta HbA1c < 7,5–8,0% no idoso); 2) Suspender oxibutinina e amitriptilina (anticolinérgicos) — para urgência, avaliar mirabegrona e manejo comportamental; 3) Suspender metoclopramida (parkinsonismo) e avaliar a náusea relacionada à donepezila (tomar após refeição, reavaliar dose); 4) Reduzir/substituir anlodipino e suspender furosemida (cascata); 5) Suspender espironolactona ou reduzir IECA pela hipercalemia; 6) Reavaliar atenolol (bradicardia, BAV com donepezila); 7) Desmame do omeprazol se sem indicação; 8) Suspender ginkgo; 9) Ajustar metformina pela TFG (máx 1.000 mg/dia se TFG 30–45; aqui 46 — monitorar) e repor B12 | Ferramentas: Critérios de Beers 2023, STOPP/START | Não farmacológica: lista única de medicamentos atualizada, caixa organizadora, revisão anual, envolver farmacêutico | Comunicação com os especialistas por carta/contrarreferência | Retorno em 2–4 semanas',
      expectedCommunication: 'Valorizar a esposa como cuidadora | Explicar o conceito de cascata de prescrição de forma simples | Decisão compartilhada sobre quais remédios retirar primeiro | Assegurar que a desprescrição será comunicada aos especialistas | Orientar a não suspender tudo de uma vez',
      criticalErrors: [
        'Não realizar reconciliação medicamentosa (não olhar a sacola)',
        'Prescrever novo medicamento para tratar efeito adverso (ex.: levodopa para o tremor, laxante sem suspender anticolinérgicos)',
        'Suspender todos os medicamentos de uma só vez sem priorização ou monitorização',
        'Não identificar as hipoglicemias pela glibenclamida',
        'Não reconhecer a hipercalemia com IECA + espironolactona'
      ]
    },
    instD: {
      title: 'Polifarmácia e Desprescrição — Material de Estudo',
      sections: [
        {
          h: 'Conceitos',
          items: [
            { item: 'Polifarmácia: uso de ≥ 5 medicamentos; aumenta risco de reações adversas, interações, quedas, hospitalização e mortalidade.', score: 1, ref: 'Masnoon N et al., BMC Geriatrics 2017' },
            { item: 'Cascata de prescrição: efeito adverso interpretado como nova condição e tratado com outro fármaco (ex.: anlodipino → edema → furosemida).', score: 2, ref: 'Rochon PA, Gurwitz JH, BMJ 1997' }
          ]
        },
        {
          h: 'Ferramentas',
          items: [
            { item: 'Critérios de Beers (AGS 2023): evitar sulfonilureias, anticolinérgicos fortes, benzodiazepínicos, metoclopramida (exceto gastroparesia), IBP > 8 semanas sem indicação.', score: 2, ref: 'AGS Beers Criteria, 2023' },
            { item: 'Critérios STOPP/START identificam prescrições inapropriadas e omissões terapêuticas.', score: 1, ref: "O'Mahony D et al., Eur Geriatr Med 2023" }
          ]
        },
        {
          h: 'Desprescrição',
          items: [
            { item: 'Processo: reconciliação → identificar fármacos inapropriados → priorizar → retirar gradualmente um por vez → monitorar.', score: 2, ref: 'Scott IA et al., JAMA Intern Med 2015' },
            { item: 'Metas glicêmicas menos rígidas no idoso frágil (HbA1c < 8,0–8,5%); evitar hipoglicemia.', score: 1, ref: 'ADA Standards of Care — Older Adults, 2025' }
          ]
        }
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // CASO 4 — SÍNDROME DA FRAGILIDADE E SARCOPENIA
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 4,
    title: 'Idosa que emagreceu, está fraca e anda cada vez mais devagar',
    sub: 'UBS — Atenção Primária',
    tema: 'Geriatria',
    topic: 'Síndrome da Fragilidade e Sarcopenia',
    level: 'moderado',
    cardAccent: '#8D6E63',
    instA: {
      scenario: 'Unidade Básica de Saúde, consulta agendada pela agente comunitária de saúde. Paciente acompanhada pela neta.',
      patient: 'I.C.B., 83 anos, feminino, aposentada (ex-lavradora), viúva.',
      complaint: 'Perdeu peso no último ano, sente-se fraca e cansada, e está andando cada vez mais devagar.',
      tasks: [
        'Realize a anamnese dirigida, incluindo avaliação funcional.',
        'Realize o exame físico e os testes de desempenho físico pertinentes.',
        'Formule a hipótese diagnóstica utilizando critérios validados.',
        'Investigue causas secundárias de perda de peso.',
        'Proponha um plano de intervenção.'
      ]
    },
    instB: {
      vitals: {
        PA: '124/72 mmHg',
        FC: '76 bpm',
        FR: '16 irpm',
        Tax: '36,1 °C',
        Peso: '45 kg (há 1 ano: 50 kg)',
        Altura: '1,52 m',
        IMC: '19,5 kg/m²',
        'Circunferência da panturrilha': '29 cm'
      },
      physicalGeneral: 'Regular estado geral, emagrecida, hipocorada 1+/4+, hidratada, lúcida e orientada. Prótese dentária superior mal adaptada; ausência de dentes inferiores.',
      physicalSeg: 'DESEMPENHO FÍSICO: força de preensão palmar (dinamômetro) 13 kg; velocidade de marcha 0,6 m/s (4 metros em 6,7 s); teste de sentar-levantar 5 vezes: 17 segundos | MUSCULOESQUELÉTICO: hipotrofia muscular difusa, mais evidente em quadríceps e região temporal | CARDIOPULMONAR: sem alterações | ABDOME: escavado, indolor, sem massas | MMEM: 25/30 (escolaridade 2 anos) | GDS-15: 8 pontos.',
      labs: [
        { test: 'Hemoglobina', val: '11,2 g/dL', ref: '12–16 g/dL', alt: true },
        { test: 'Albumina', val: '3,2 g/dL', ref: '3,5–5,0 g/dL', alt: true },
        { test: '25-OH vitamina D', val: '12 ng/mL', ref: '> 30 ng/mL', alt: true },
        { test: 'Vitamina B12', val: '340 pg/mL', ref: '> 300 pg/mL', alt: false },
        { test: 'TSH', val: '1,9 mUI/L', ref: '0,4–4,5 mUI/L', alt: false },
        { test: 'Glicemia de jejum', val: '88 mg/dL', ref: '70–99 mg/dL', alt: false },
        { test: 'Creatinina', val: '0,7 mg/dL', ref: '0,5–1,1 mg/dL', alt: false },
        { test: 'PCR', val: '3 mg/L', ref: '< 5 mg/L', alt: false },
        { test: 'Pesquisa de sangue oculto nas fezes', val: 'Negativa', ref: 'Negativa', alt: false },
        { test: 'Radiografia de tórax', val: 'Sem alterações agudas', ref: 'Normal', alt: false }
      ],
      note: 'Fornecer os resultados dos testes de desempenho somente se o candidato indicar a realização (força de preensão, velocidade de marcha, sentar-levantar). Fornecer GDS-15 se o candidato rastrear depressão. Se perguntado, a neta informa que a paciente come pouco desde a morte do marido.',
      patientProfile: 'Ex-lavradora, viúva há 1 ano e 3 meses. Mora sozinha em zona rural periurbana; a neta visita 2 vezes por semana. Aposentadoria de 1 salário mínimo. Prótese dentária quebrada. Antes andava até a igreja (1 km); agora não consegue. Sem tabagismo ou etilismo. Hipertensa em uso de losartana.',
      script: [
        { trigger: 'Queixa principal', speech: 'Doutor(a), ando muito fraca. Perdi peso, as roupas ficaram largas. Me canso à toa.' },
        { trigger: 'Sobre a marcha e atividades', speech: 'Antes eu ia a pé na igreja, agora não aguento. Para abrir pote de vidro não tenho mais força.' },
        { trigger: 'Sobre alimentação', speech: 'Como pouco. Sozinha não dá vontade de cozinhar. Fico no café com pão. Carne é difícil de mastigar com essa dentadura.' },
        { trigger: 'Sobre humor', speech: 'Depois que meu marido morreu, fiquei sem graça para as coisas. Choro às vezes. Não durmo direito.' },
        { trigger: 'Sobre funcionalidade (neta)', speech: 'Ela ainda toma banho e se veste sozinha, mas a feira e o banco sou eu que faço agora.' },
        { trigger: 'Sobre sintomas de alarme', speech: 'Não tenho febre, não tenho tosse, as fezes são normais, não vi sangue.' },
        { trigger: 'Sobre quedas', speech: 'Caí uma vez no quintal, mês passado, mas não machuquei.' },
        { trigger: 'Pergunta ativa', speech: 'Isso é da idade, não é? Não tem o que fazer.' }
      ],
      hiddenInfo: 'Tristeza, anedonia e insônia desde a viuvez — só revela se perguntada sobre humor | Prótese dentária quebrada, dificuldade para mastigar carne — só revela se perguntada sobre mastigação/dentes | Uma queda no último mês — só revela se perguntada sobre quedas',
      actorBehavior: 'Fala baixo e devagar, aparenta tristeza. Atribui tudo à idade e se mostra conformada. Anima-se discretamente quando o candidato sugere atividades em grupo (como a igreja ou grupo de idosos) e propõe soluções concretas.'
    },
    instC: {
      diagnosis: 'Síndrome da fragilidade (fenótipo de Fried: 5/5 critérios) com sarcopenia confirmada e grave (EWGSOP2) e desnutrição, associada a episódio depressivo após luto, saúde bucal comprometida, isolamento social, deficiência de vitamina D e anemia leve.',
      differentials: [
        'Neoplasia oculta — perda ponderal > 5% exige investigação mínima; sem sinais de alarme, PSOF negativa e RX de tórax normal, mas seguimento é necessário',
        'Depressão maior isolada — presente e contribui (GDS-15 = 8), mas não explica sozinha a sarcopenia',
        'Hipertireoidismo / diabetes descompensado — TSH e glicemia normais',
        'Tuberculose ou infecção crônica — sem tosse, febre ou alterações radiológicas',
        'Demência — MMEM ajustado à escolaridade dentro do esperado; reavaliar após tratar depressão'
      ],
      context: 'Fragilidade é uma síndrome de redução de reserva fisiológica que aumenta vulnerabilidade a estressores, com risco de quedas, hospitalização, dependência e morte. Prevalência de 10–15% em idosos comunitários. É potencialmente reversível, especialmente nas fases iniciais, com exercício e nutrição.',
      justify: 'Fenótipo de Fried: perda de peso não intencional > 4,5 kg/ano (5 kg), exaustão, fraqueza (preensão < 16 kg em mulheres), lentidão (marcha < 0,8 m/s) e baixa atividade física — 5/5 critérios (≥ 3 = frágil). Sarcopenia EWGSOP2: força reduzida + massa muscular reduzida (panturrilha < 31 cm) + desempenho reduzido = grave.',
      expectedAnamnesis: 'Quantificação da perda de peso e tempo | Ingestão alimentar, mastigação, deglutição, saúde bucal | Fadiga e atividade física | Funcionalidade (Katz e Lawton) | Humor (rastreio de depressão), luto | Quedas | Sintomas de alarme para neoplasia ou infecção | Contexto social, renda, suporte familiar | Medicamentos',
      expectedPhysical: 'Peso, IMC, circunferência da panturrilha | Força de preensão palmar | Velocidade de marcha ou TUG | Teste de sentar-levantar | Exame da cavidade oral | Rastreio cognitivo e de depressão (GDS-15)',
      expectedExams: [
        { exam: 'Hemograma, albumina, função renal, eletrólitos', justify: 'Estado nutricional e causas secundárias', expected: 'Anemia leve, hipoalbuminemia' },
        { exam: 'TSH, glicemia', justify: 'Causas endócrinas de perda de peso', expected: 'Normais' },
        { exam: '25-OH vitamina D e B12', justify: 'Deficiências associadas à sarcopenia', expected: 'Vitamina D baixa' },
        { exam: 'PCR, radiografia de tórax, sangue oculto/rastreio apropriado', justify: 'Investigação mínima de perda ponderal', expected: 'Normais' },
        { exam: 'Mini Avaliação Nutricional (MAN)', justify: 'Diagnóstico nutricional', expected: 'Desnutrição / risco' }
      ],
      expectedConduct: 'Exercício físico multicomponente (resistido progressivo + equilíbrio + aeróbico), supervisionado, 2–3x/semana — intervenção mais eficaz | Nutrição: aporte proteico 1,0–1,5 g/kg/dia distribuído nas refeições, suplemento oral hiperproteico e hipercalórico, acompanhamento nutricional | Odontologia para nova prótese | Vitamina D (colecalciferol) | Tratar depressão: psicoterapia de luto + antidepressivo (ex.: sertralina 25 mg com titulação; mirtazapina pode ajudar apetite e sono) | Social: CRAS, centro de convivência do idoso, grupo da igreja, acionar rede familiar; avaliar programa de alimentação | Prevenção de quedas | Avaliação geriátrica ampla e seguimento com reavaliação em 3 meses (peso, força, velocidade de marcha) | Orientações: não é "normal da idade" — é tratável e reversível em parte',
      expectedCommunication: 'Desfazer a ideia de que tudo é "da idade" | Abordar o luto com empatia | Envolver a neta e a rede de apoio | Propor metas simples e factíveis | Verificar compreensão',
      criticalErrors: [
        'Atribuir a perda de peso e a fraqueza apenas ao envelhecimento',
        'Não aplicar critérios objetivos (força, marcha, perda de peso) para fragilidade/sarcopenia',
        'Não rastrear depressão em idosa enlutada com perda de peso',
        'Não avaliar saúde bucal e ingestão alimentar',
        'Não investigar causas secundárias de perda ponderal involuntária > 5%'
      ]
    },
    instD: {
      title: 'Fragilidade e Sarcopenia — Material de Estudo',
      sections: [
        {
          h: 'Definições',
          items: [
            { item: 'Fenótipo de Fried: perda de peso, exaustão, fraqueza, lentidão, baixa atividade — ≥ 3 frágil; 1–2 pré-frágil.', score: 2, ref: 'Fried LP et al., J Gerontol 2001' },
            { item: 'Sarcopenia (EWGSOP2): força reduzida (provável), + massa reduzida (confirmada), + desempenho reduzido (grave). Preensão < 16 kg (mulheres) / < 27 kg (homens).', score: 2, ref: 'Cruz-Jentoft AJ et al., Age Ageing 2019' }
          ]
        },
        {
          h: 'Rastreio e Avaliação',
          items: [
            { item: 'Rastreio de sarcopenia com SARC-F e circunferência da panturrilha (< 31 cm) na atenção primária.', score: 1, ref: 'Consenso Brasileiro de Sarcopenia — SBGG, 2023' },
            { item: 'Avaliação geriátrica ampla: funcionalidade, cognição, humor, nutrição, social, medicamentos.', score: 1, ref: 'Tratado de Geriatria e Gerontologia — Freitas EV' }
          ]
        },
        {
          h: 'Intervenções',
          items: [
            { item: 'Exercício multicomponente com treino resistido é a intervenção com maior evidência para fragilidade e sarcopenia.', score: 2, ref: 'ICFSR Guidelines — Dent E et al., J Nutr Health Aging 2019' },
            { item: 'Proteína 1,0–1,2 g/kg/dia (até 1,5 em doença); suplementação se ingestão insuficiente.', score: 1, ref: 'ESPEN Guideline — Nutrition in Geriatrics, 2022' },
            { item: 'Tratar condições associadas: depressão, déficit sensorial, polifarmácia, isolamento social.', score: 1, ref: 'ICFSR, 2019' }
          ]
        }
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // CASO 5 — INCONTINÊNCIA URINÁRIA NA IDOSA
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 5,
    title: 'Idosa que perde urina antes de chegar ao banheiro',
    sub: 'UBS — Atenção Primária',
    tema: 'Geriatria',
    topic: 'Incontinência Urinária no Idoso',
    level: 'fácil',
    cardAccent: '#8D6E63',
    instA: {
      scenario: 'Unidade Básica de Saúde, consulta de rotina de hipertensão. Ao final, a paciente comenta, envergonhada, sobre perda de urina.',
      patient: 'N.F.T., 74 anos, feminino, aposentada (ex-professora), casada.',
      complaint: 'Perde urina quando sente vontade e não dá tempo de chegar ao banheiro; também perde ao tossir.',
      tasks: [
        'Realize a anamnese dirigida, caracterizando o tipo de incontinência.',
        'Investigue causas transitórias e reversíveis.',
        'Realize o exame físico dirigido.',
        'Solicite os exames complementares iniciais.',
        'Proponha o tratamento escalonado e oriente a paciente.'
      ]
    },
    instB: {
      vitals: {
        PA: '138/82 mmHg',
        FC: '74 bpm',
        FR: '14 irpm',
        Tax: '36,4 °C',
        Peso: '72 kg',
        Altura: '1,58 m',
        IMC: '28,8 kg/m²'
      },
      physicalGeneral: 'Bom estado geral, corada, hidratada, lúcida, deambulando sem auxílio.',
      physicalSeg: 'ABDOME: sem globo vesical palpável | GINECOLÓGICO: mucosa vaginal pálida, fina, com perda de rugosidade (atrofia urogenital); prolapso de parede anterior grau I; teste de esforço (tosse) com perda discreta de urina | NEUROLÓGICO: sensibilidade perineal preservada, reflexo bulbocavernoso presente, força de MMII normal | MEMBROS INFERIORES: edema 1+/4+ vespertino | COGNIÇÃO: MMEM 28/30 | MOBILIDADE: TUG 11 segundos.',
      labs: [
        { test: 'Urina tipo 1', val: 'Leucócitos 4/campo, nitrito negativo, glicose ausente', ref: 'Normal', alt: false },
        { test: 'Glicemia de jejum', val: '104 mg/dL', ref: '70–99 mg/dL', alt: true },
        { test: 'HbA1c', val: '5,9%', ref: '< 5,7%', alt: true },
        { test: 'Creatinina', val: '0,9 mg/dL', ref: '0,5–1,1 mg/dL', alt: false },
        { test: 'Resíduo pós-miccional (USG)', val: '40 mL', ref: '< 100 mL', alt: false }
      ],
      note: 'Entregar o diário miccional de 3 dias se o candidato solicitar: 10–12 micções/dia, 2–3 noturnas, 3 episódios/dia de perda precedidos de urgência, 1 episódio/dia ao tossir, ingestão de 6 xícaras de café por dia. Se o candidato perguntar sobre medicamentos: furosemida 40 mg pela manhã (para edema de anlodipino), anlodipino 10 mg, losartana 50 mg.',
      patientProfile: 'Professora aposentada, ativa, participa de coral e grupo de dança. Deixou de ir ao coral por medo de perder urina. Três partos vaginais, um com fórceps. Menopausa aos 51 anos, sem reposição hormonal. Usa absorvente diário. Bebe muito café.',
      script: [
        { trigger: 'Queixa principal', speech: 'Doutor(a), tenho vergonha de falar... mas estou perdendo xixi. Dá aquela vontade forte e não dá tempo de chegar ao banheiro.' },
        { trigger: 'Sobre esforço', speech: 'Quando tusso ou espirro também escapa um pouquinho, mas é menos.' },
        { trigger: 'Sobre frequência e noite', speech: 'Vou ao banheiro toda hora, umas doze vezes por dia, e acordo duas ou três vezes de noite.' },
        { trigger: 'Sobre ingestão de líquidos', speech: 'Adoro café, tomo umas seis xícaras por dia. Água também bebo bastante porque disseram que faz bem.' },
        { trigger: 'Sobre medicamentos', speech: 'Tomo três remédios de pressão, um deles é para desinchar as pernas, de manhã.' },
        { trigger: 'Sobre impacto social', speech: 'Parei de ir ao coral e à dança. Tenho medo de molhar a roupa na frente dos outros.' },
        { trigger: 'Sobre ardência ou sangue', speech: 'Não arde, não tem sangue, não tenho febre.' },
        { trigger: 'Pergunta ativa', speech: 'Isso é normal da idade? Vou ter que usar fralda para sempre?' }
      ],
      hiddenInfo: 'Seis xícaras de café por dia — só revela se perguntada sobre ingestão de líquidos/cafeína | Furosemida pela manhã (cascata por edema de anlodipino) — só aparece se o candidato revisar medicamentos | Deixou o coral e a dança — só revela se perguntada sobre impacto na vida',
      actorBehavior: 'Envergonhada no início, fala baixo, olha para baixo. Fica mais à vontade se o candidato normalizar a queixa e garantir privacidade. Fica aliviada ao saber que há tratamento.'
    },
    instC: {
      diagnosis: 'Incontinência urinária mista com predomínio de urgência (bexiga hiperativa) e componente de esforço, agravada por fatores transitórios reversíveis: diurético de alça, cafeína em excesso, ingestão hídrica excessiva e atrofia urogenital.',
      differentials: [
        'Infecção do trato urinário — urina tipo 1 sem leucocitúria significativa ou nitrito',
        'Incontinência por transbordamento — resíduo pós-miccional < 100 mL afasta',
        'Diabetes descompensado com poliúria — glicemia e HbA1c em faixa de pré-diabetes, sem glicosúria',
        'Incontinência funcional — cognição e mobilidade preservadas',
        'Doença neurológica (AVC, Parkinson, compressão medular) — exame neurológico normal'
      ],
      context: 'A incontinência urinária afeta até 30–50% das idosas e é frequentemente subnotificada por vergonha. Não deve ser considerada normal do envelhecimento. Deve-se sempre pesquisar causas transitórias (mnemônico DIAPPERS) antes de rotular o tipo.',
      justify: 'Perda precedida de urgência (urge-incontinência) + polaciúria + noctúria (bexiga hiperativa) + perda aos esforços confirmada no teste da tosse (componente de esforço). Causas transitórias identificadas: furosemida, cafeína, excesso de líquidos, vaginite atrófica.',
      expectedAnamnesis: 'Tipo de perda: urgência, esforço, contínua, gotejamento | Frequência, volume, noctúria | Ingestão de líquidos, cafeína, álcool | Medicamentos (diuréticos, sedativos, anticolinérgicos, alfabloqueadores) | Sintomas de ITU | Hematúria | História obstétrica e menopausa | Constipação | Mobilidade e cognição | Impacto na qualidade de vida | Uso de absorventes',
      expectedPhysical: 'Exame abdominal (globo vesical) | Exame ginecológico: atrofia, prolapsos, teste de esforço | Exame neurológico perineal e de MMII | Avaliação cognitiva e de mobilidade | Edema (redistribuição noturna de líquidos)',
      expectedExams: [
        { exam: 'Urina tipo 1 ± urocultura', justify: 'Excluir ITU e hematúria', expected: 'Normal' },
        { exam: 'Glicemia', justify: 'Excluir poliúria por diabetes', expected: 'Sem hiperglicemia importante' },
        { exam: 'Resíduo pós-miccional', justify: 'Excluir retenção/transbordamento', expected: '< 100 mL' },
        { exam: 'Diário miccional de 3 dias', justify: 'Caracterizar padrão, volume, ingestão', expected: 'Polaciúria, urgência, alta ingestão de cafeína' },
        { exam: 'Estudo urodinâmico — não necessário inicialmente', justify: 'Reservado a falha terapêutica ou antes de cirurgia', expected: '—' }
      ],
      expectedConduct: 'Corrigir causas transitórias: suspender furosemida (edema por anlodipino — reduzir dose ou trocar anlodipino), reduzir cafeína gradualmente, adequar ingestão hídrica (~1,5 L/dia, reduzir à noite) | Medidas comportamentais (1ª linha): treinamento vesical com micções programadas e aumento progressivo dos intervalos; técnicas de supressão da urgência | Fisioterapia do assoalho pélvico (exercícios de Kegel supervisionados, ≥ 3 meses) — eficaz para esforço e urgência | Estrogênio vaginal tópico para atrofia urogenital | Farmacológica (se falha das medidas acima): preferir mirabegrona (beta-3 agonista) no idoso; evitar anticolinérgicos fortes (oxibutinina) pelo risco cognitivo | Controle de peso | Encaminhamento à uroginecologia se refratária, prolapso sintomático ou para tratamento cirúrgico do esforço | Orientações: não é normal da idade, tem tratamento; incentivar retomada do coral',
      expectedCommunication: 'Garantir privacidade e normalizar a queixa | Linguagem não constrangedora | Explicar os tipos de perda de forma simples | Valorizar o impacto social e o objetivo de voltar ao coral | Pactuar metas',
      criticalErrors: [
        'Considerar a incontinência como normal do envelhecimento e não tratar',
        'Não investigar causas transitórias (diurético, cafeína, ITU)',
        'Prescrever oxibutinina como primeira medida em idosa',
        'Não realizar ou não indicar medidas comportamentais e fisioterapia pélvica',
        'Indicar sonda vesical de demora para manejo da incontinência'
      ]
    },
    instD: {
      title: 'Incontinência Urinária no Idoso — Material de Estudo',
      sections: [
        {
          h: 'Tipos',
          items: [
            { item: 'Urgência (hiperatividade detrusora), esforço (deficiência esfincteriana/hipermobilidade uretral), mista, transbordamento e funcional.', score: 1, ref: 'ICS — International Continence Society' }
          ]
        },
        {
          h: 'Causas Transitórias (DIAPPERS)',
          items: [
            { item: 'Delirium, Infecção, Atrofia vaginal, Psicofármacos/medicamentos, Psicológico, Excesso de diurese (diuréticos, hiperglicemia, cafeína), Restrição de mobilidade, Stool (fecaloma).', score: 2, ref: 'Resnick NM — Geriatric Incontinence' }
          ]
        },
        {
          h: 'Avaliação',
          items: [
            { item: 'Anamnese, diário miccional, exame pélvico, urina tipo 1 e resíduo pós-miccional são suficientes na maioria dos casos.', score: 1, ref: 'AUA/SUFU Guideline — OAB, 2024' }
          ]
        },
        {
          h: 'Tratamento',
          items: [
            { item: 'Primeira linha: medidas comportamentais (treinamento vesical, ajuste de líquidos e cafeína) e fisioterapia do assoalho pélvico.', score: 2, ref: 'AUA/SUFU, 2024; Cochrane — Dumoulin C, 2018' },
            { item: 'No idoso, preferir beta-3 agonista (mirabegrona) aos antimuscarínicos, que aumentam risco de declínio cognitivo (Beers).', score: 2, ref: 'AGS Beers Criteria, 2023' },
            { item: 'Estrogênio vaginal melhora sintomas de urgência associados à atrofia.', score: 1, ref: 'AUA/SUFU, 2024' }
          ]
        }
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // CASO 6 — LESÃO POR PRESSÃO
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 6,
    title: 'Ferida na região sacral em idoso acamado',
    sub: 'Visita Domiciliar — Estratégia Saúde da Família',
    tema: 'Geriatria',
    topic: 'Lesão por Pressão',
    level: 'moderado',
    cardAccent: '#8D6E63',
    instA: {
      scenario: 'Visita domiciliar da equipe de Saúde da Família, solicitada pela agente comunitária. Paciente acamado há 4 meses após AVC.',
      patient: 'B.S.R., 86 anos, masculino, aposentado, acamado após AVC isquêmico há 4 meses.',
      complaint: 'A filha notou uma ferida no "cóccix" que está aumentando e com cheiro ruim.',
      tasks: [
        'Realize a anamnese com a cuidadora, identificando fatores de risco.',
        'Realize o exame físico e descreva e classifique a lesão.',
        'Aplique uma escala de risco validada.',
        'Proponha o plano de tratamento da lesão.',
        'Oriente a cuidadora sobre prevenção e cuidados.'
      ]
    },
    instB: {
      vitals: {
        PA: '116/70 mmHg',
        FC: '88 bpm',
        FR: '18 irpm',
        Tax: '37,0 °C',
        SpO2: '95%',
        'Peso estimado': '52 kg (antes do AVC: 64 kg)'
      },
      physicalGeneral: 'Regular estado geral, emagrecido, hipocorado 1+/4+, mucosas levemente secas. Acamado em decúbito dorsal, cama comum com colchão de espuma fino. Fralda úmida. Responde a comandos simples, afásico.',
      physicalSeg: 'REGIÃO SACRAL: lesão de 6 × 5 cm, perda total da espessura da pele com exposição de tecido subcutâneo, sem exposição de osso, músculo ou tendão; 40% do leito com esfacelo amarelado e 60% com tecido de granulação; exsudato moderado, seroso, com odor leve; bordas maceradas; pele perilesional com eritema de 1 cm, sem calor ou flutuação; descolamento de 1 cm às 12h | CALCÂNEOS: eritema não branqueável à digitopressão em calcâneo direito, pele íntegra | TROCÂNTER ESQUERDO: pele íntegra, sem eritema | NEUROLÓGICO: hemiplegia direita, afasia de expressão | DEGLUTIÇÃO: tosse após goles de água oferecidos pela filha.',
      labs: [
        { test: 'Hemoglobina', val: '10,4 g/dL', ref: '13–17 g/dL', alt: true },
        { test: 'Albumina', val: '2,8 g/dL', ref: '3,5–5,0 g/dL', alt: true },
        { test: 'Leucócitos', val: '9.800/mm³', ref: '4.000–11.000/mm³', alt: false },
        { test: 'PCR', val: '18 mg/L', ref: '< 5 mg/L', alt: true },
        { test: 'Glicemia', val: '102 mg/dL', ref: '70–99 mg/dL', alt: false },
        { test: 'Zinco sérico', val: '58 µg/dL', ref: '70–120 µg/dL', alt: true }
      ],
      note: 'A escala de Braden deve ser calculada pelo candidato com os dados: percepção sensorial muito limitada (2), umidade muito úmida (2), atividade acamado (1), mobilidade muito limitada (2), nutrição provavelmente inadequada (2), fricção e cisalhamento problema (1) = 10 pontos (risco elevado). Exames laboratoriais coletados pela equipe na semana anterior — entregar se solicitados.',
      patientProfile: 'Viúvo, mora com a filha (cuidadora única, 58 anos, também cuida dos netos). Após o AVC ficou acamado, com hemiplegia direita e afasia. Usa fralda. A filha muda o pai de posição "quando dá", geralmente 2–3 vezes por dia. A cabeceira fica elevada o dia todo para a TV. Alimentação: sopa liquidificada, aceita metade do prato. Renda: aposentadoria do pai.',
      script: [
        { trigger: 'Queixa principal (filha)', speech: 'Doutor(a), apareceu essa ferida no cóccix do meu pai faz umas três semanas. Começou vermelhinha e agora abriu e está com cheiro.' },
        { trigger: 'Sobre mudança de posição', speech: 'Eu viro ele quando consigo, umas duas, três vezes por dia. Ele é pesado para mim sozinha.' },
        { trigger: 'Sobre a cama', speech: 'Ele fica na cama dele mesmo, com o colchão normal. Deixo a cabeceira levantada para ele ver televisão.' },
        { trigger: 'Sobre fralda e higiene', speech: 'Troco a fralda umas três vezes por dia. Às vezes ele fica molhado um tempo.' },
        { trigger: 'Sobre alimentação', speech: 'Ele come sopa batida, mas só metade. Às vezes engasga com água.' },
        { trigger: 'Sobre o que já fez na ferida', speech: 'Coloquei pomada de açúcar e uma vizinha falou para passar pó de café.' },
        { trigger: 'Sobre a sobrecarga da cuidadora', speech: 'Estou muito cansada. Cuido dele, dos meus netos... não tenho ninguém para ajudar.' },
        { trigger: 'Pergunta ativa', speech: 'Foi culpa minha? Essa ferida fecha?' }
      ],
      hiddenInfo: 'Passa pó de café e açúcar na ferida — só revela se perguntada sobre o que já usou na lesão | Engasgos com líquidos (disfagia pós-AVC) — só revela se perguntada sobre deglutição | Sobrecarga e sinais de esgotamento (dorme 4h/noite, chora com frequência) — só revela se perguntada sobre como ela está',
      actorBehavior: 'Filha cansada, culpada, chora ao perguntar se a culpa é dela. Muito receptiva às orientações práticas se o candidato demonstrar empatia e reconhecer o esforço dela. Fica defensiva se o candidato for crítico.'
    },
    instC: {
      diagnosis: 'Lesão por pressão estágio 3 em região sacral (perda total da espessura da pele com esfacelo, sem exposição de estruturas profundas), com colonização crítica provável, lesão por pressão estágio 1 em calcâneo direito, em idoso acamado com Braden 10 (alto risco), desnutrição, disfagia pós-AVC e cuidadora sobrecarregada.',
      differentials: [
        'Lesão por pressão estágio 2 — sai pela perda total da espessura da pele com subcutâneo exposto e esfacelo',
        'Lesão por pressão estágio 4 — sai pela ausência de exposição de osso, tendão ou músculo',
        'Dermatite associada à incontinência — contribui para a maceração perilesional, mas não explica perda total de espessura sobre proeminência óssea',
        'Infecção de partes moles / celulite ou osteomielite — sem calor, flutuação ou eritema extenso; se exposição óssea ou não cicatrização, investigar osteomielite'
      ],
      context: 'Lesões por pressão resultam de pressão e/ou cisalhamento sobre proeminências ósseas, levando à isquemia tecidual. São mais frequentes em idosos acamados, desnutridos, incontinentes e com déficit sensório-motor. A prevenção é a medida mais eficaz, e a cuidadora é peça central.',
      justify: 'Lesão sobre o sacro, em paciente imobilizado, com perda total da pele e tecido subcutâneo visível, esfacelo, sem exposição óssea (estágio 3 NPIAP). Calcâneo com eritema não branqueável e pele íntegra (estágio 1). Fatores de risco: imobilidade, umidade, cabeceira elevada (cisalhamento), desnutrição, hipoalbuminemia.',
      expectedAnamnesis: 'Tempo de evolução da lesão | Frequência de mudança de decúbito | Tipo de colchão e superfície | Elevação da cabeceira | Incontinência e frequência de troca de fraldas | Alimentação, deglutição, perda de peso | Produtos já utilizados na ferida | Dor | Sinais de infecção (febre, secreção purulenta) | Sobrecarga e saúde da cuidadora | Rede de apoio',
      expectedPhysical: 'Inspeção de todas as proeminências ósseas (sacro, calcâneos, trocânteres, isquiáticos, occipital) | Descrição da lesão: localização, dimensões, tipo de tecido, exsudato, odor, bordas, pele perilesional, descolamento | Teste de digitopressão (eritema branqueável) | Sinais de infecção | Estado nutricional | Avaliação da deglutição',
      expectedExams: [
        { exam: 'Hemograma, albumina, PCR', justify: 'Estado nutricional e infecção', expected: 'Anemia, hipoalbuminemia' },
        { exam: 'Escala de Braden', justify: 'Estratificação do risco', expected: '10 — risco alto' },
        { exam: 'Swab de superfície — NÃO indicado', justify: 'Apenas colonização; cultura por biópsia tecidual se infecção clínica', expected: '—' },
        { exam: 'Radiografia/RM ou biópsia óssea', justify: 'Somente se suspeita de osteomielite (exposição óssea, não cicatrização)', expected: 'Não indicada agora' },
        { exam: 'Avaliação fonoaudiológica', justify: 'Disfagia pós-AVC — risco de aspiração e desnutrição', expected: 'Disfagia orofaríngea' }
      ],
      expectedConduct: 'Alívio de pressão: mudança de decúbito a cada 2h com cronograma (relógio), lateralização a 30°, cabeceira ≤ 30° (exceto nas refeições), colchão pneumático ou de espuma de alta densidade (solicitar via serviço), coxins para flutuar calcâneos | Cuidado da ferida: limpeza com SF 0,9% morno em jato; desbridamento do esfacelo (autolítico com hidrogel ou enzimático com colagenase; instrumental conservador se capacitado); cobertura que mantenha meio úmido e absorva exsudato (alginato de cálcio ou espuma de poliuretano/hidrofibra); proteger bordas maceradas com creme barreira; considerar cobertura com prata se colonização crítica; NÃO usar açúcar, pó de café, pomadas caseiras | Calcâneo estágio 1: alívio de pressão, hidratação da pele, sem massagem | Incontinência: trocas frequentes, limpeza suave e creme barreira | Nutrição: proteína 1,25–1,5 g/kg/dia, 30–35 kcal/kg, suplemento hiperproteico; zinco/vitamina C se deficiência; ajustar consistência conforme fono | Equipe: enfermagem para curativos, fonoaudiologia, nutrição, fisioterapia; Programa Melhor em Casa (EMAD) | Cuidadora: acolher, orientar, acionar rede (outros familiares, CRAS), avaliar sobrecarga (Zarit), direitos (auxílio, fraldas pela Farmácia Popular)',
      expectedCommunication: 'Reconhecer o esforço da cuidadora e desfazer culpa | Orientar de forma prática e demonstrativa (como virar, posicionar) | Desaconselhar produtos caseiros sem julgamento | Avaliar e acolher a sobrecarga da cuidadora | Verificar compreensão (teach-back)',
      criticalErrors: [
        'Não inspecionar as demais proeminências ósseas (perder a lesão do calcâneo)',
        'Classificar incorretamente o estágio da lesão',
        'Não orientar alívio de pressão e mudança de decúbito como base do tratamento',
        'Manter ou não contraindicar produtos caseiros (açúcar, pó de café)',
        'Indicar antibiótico sistêmico sem sinais de infecção clínica, ou colher swab de superfície',
        'Culpabilizar a cuidadora ou ignorar a sobrecarga'
      ]
    },
    instD: {
      title: 'Lesão por Pressão — Material de Estudo',
      sections: [
        {
          h: 'Classificação (NPIAP)',
          items: [
            { item: 'Estágio 1: pele íntegra com eritema não branqueável; 2: perda parcial com derme exposta; 3: perda total da pele com tecido adiposo visível (pode haver esfacelo/escara); 4: exposição de fáscia, músculo, tendão ou osso; não classificável; tissular profunda.', score: 2, ref: 'NPIAP Pressure Injury Stages, 2016' }
          ]
        },
        {
          h: 'Avaliação de Risco',
          items: [
            { item: 'Escala de Braden (6 a 23): ≤ 9 risco muito alto; 10–12 alto; 13–14 moderado; 15–18 leve.', score: 2, ref: 'Bergstrom N et al., Nurs Res 1987' }
          ]
        },
        {
          h: 'Prevenção',
          items: [
            { item: 'Reposicionamento regular (geralmente a cada 2h), lateralização a 30°, cabeceira ≤ 30°, superfícies de redistribuição de pressão, flutuação dos calcâneos.', score: 2, ref: 'EPUAP/NPIAP/PPPIA International Guideline, 2019' },
            { item: 'Manejo da umidade e da incontinência; não massagear proeminências ósseas.', score: 1, ref: 'EPUAP/NPIAP/PPPIA, 2019' }
          ]
        },
        {
          h: 'Tratamento',
          items: [
            { item: 'Limpeza, desbridamento de tecido desvitalizado, manutenção do meio úmido, controle de exsudato e da carga microbiana (TIME/TIMERS).', score: 2, ref: 'EPUAP/NPIAP/PPPIA, 2019' },
            { item: 'Suporte nutricional: 30–35 kcal/kg e 1,25–1,5 g/kg/dia de proteína em adultos com LPP e desnutrição.', score: 1, ref: 'EPUAP/NPIAP/PPPIA, 2019' }
          ]
        }
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // CASO 7 — OSTEOPOROSE COM FRATURA VERTEBRAL
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 7,
    title: 'Dor nas costas súbita ao levantar um balde e perda de altura',
    sub: 'UBS — Atenção Primária',
    tema: 'Geriatria',
    topic: 'Osteoporose com Fratura Vertebral',
    level: 'moderado',
    cardAccent: '#8D6E63',
    instA: {
      scenario: 'Unidade Básica de Saúde, consulta de demanda espontânea.',
      patient: 'H.M.C., 76 anos, feminino, aposentada (ex-diarista).',
      complaint: 'Dor forte nas costas há 10 dias, que começou ao levantar um balde de água; percebeu que está "encolhendo".',
      tasks: [
        'Realize a anamnese dirigida, incluindo fatores de risco para fratura e sinais de alarme.',
        'Realize o exame físico dirigido.',
        'Formule a hipótese diagnóstica e os diferenciais.',
        'Solicite os exames complementares e estime o risco de fratura.',
        'Proponha o tratamento da dor e da doença de base.'
      ]
    },
    instB: {
      vitals: {
        PA: '132/78 mmHg',
        FC: '82 bpm',
        FR: '16 irpm',
        Tax: '36,3 °C',
        Peso: '48 kg',
        'Altura atual': '1,49 m (refere 1,55 m aos 40 anos)',
        IMC: '21,6 kg/m²'
      },
      physicalGeneral: 'Bom estado geral, fácies de dor ao mudar de posição, corada, hidratada, lúcida.',
      physicalSeg: 'COLUNA: hipercifose torácica, dor à percussão do processo espinhoso de T12, sem alterações de pele | Distância costela-pelve de 2 dedos | Distância occipício-parede de 5 cm | NEUROLÓGICO: força preservada em membros inferiores, reflexos patelares e aquileus presentes e simétricos, sensibilidade normal, sem alterações esfincterianas | MAMAS e LINFONODOS: sem alterações | Sem dor à palpação de quadris.',
      labs: [
        { test: 'Hemograma', val: 'Normal', ref: 'Normal', alt: false },
        { test: 'VHS', val: '18 mm/h', ref: '< 30 mm/h', alt: false },
        { test: 'Cálcio sérico', val: '9,2 mg/dL', ref: '8,5–10,5 mg/dL', alt: false },
        { test: 'Fósforo', val: '3,4 mg/dL', ref: '2,5–4,5 mg/dL', alt: false },
        { test: 'Fosfatase alcalina', val: '98 U/L', ref: '35–105 U/L', alt: false },
        { test: '25-OH vitamina D', val: '17 ng/mL', ref: '> 30 ng/mL', alt: true },
        { test: 'PTH', val: '72 pg/mL', ref: '15–65 pg/mL', alt: true },
        { test: 'Creatinina (TFG)', val: '0,8 mg/dL (TFG 72)', ref: '> 60', alt: false },
        { test: 'TSH', val: '2,2 mUI/L', ref: '0,4–4,5 mUI/L', alt: false },
        { test: 'Eletroforese de proteínas séricas', val: 'Sem pico monoclonal', ref: 'Normal', alt: false }
      ],
      image: 'Radiografia de coluna toracolombar perfil (entregar se solicitada): fratura em cunha de T12 com redução de ~35% da altura anterior; fratura antiga em cunha de T8 com redução de ~25%; osteopenia difusa. | Densitometria óssea (se solicitada): T-score coluna lombar −3,1; colo do fêmur −2,7; fêmur total −2,5.',
      note: 'Entregar a lista de medicamentos se solicitada: omeprazol 20 mg há 5 anos, prednisona 5 mg/dia há 1 ano (prescrita para "dor nas juntas"), losartana 50 mg. FRAX Brasil (se o candidato mencionar): risco em 10 anos de fratura maior ~ 32% e de quadril ~ 14%.',
      patientProfile: 'Ex-diarista, viúva, mora com a filha. Menopausa aos 44 anos. Mãe fraturou o quadril aos 78 anos. Tabagista 20 cigarros/dia por 40 anos (parou há 5 anos). Baixa ingestão de laticínios. Usa prednisona 5 mg/dia há 1 ano por conta de dor articular. Sedentária.',
      script: [
        { trigger: 'Queixa principal', speech: 'Doutor(a), fui levantar um balde de água e senti um estalo nas costas, uma dor muito forte. Faz uns dez dias.' },
        { trigger: 'Sobre a dor', speech: 'A dor é no meio das costas, mais embaixo. Piora para mexer, levantar da cama. Deitada quietinha melhora.' },
        { trigger: 'Sobre sinais de alarme', speech: 'Não tenho febre, não perdi peso. As pernas não estão fracas, urino e evacuo normal.' },
        { trigger: 'Sobre altura', speech: 'Minha filha diz que eu encolhi. Eu era mais alta, as calças estão arrastando no chão.' },
        { trigger: 'Sobre fraturas prévias', speech: 'Quebrei o punho faz uns três anos, escorreguei no quintal.' },
        { trigger: 'Sobre medicamentos', speech: 'Tomo um corticoide, a prednisona, faz um ano, por causa de dor nas juntas. E o remédio do estômago.' },
        { trigger: 'Sobre família', speech: 'Minha mãe quebrou o fêmur com 78 anos e não andou mais.' },
        { trigger: 'Pergunta ativa', speech: 'É bico de papagaio? Vou ficar corcunda igual minha mãe?' }
      ],
      hiddenInfo: 'Fratura de punho por queda da própria altura há 3 anos (fratura por fragilidade prévia) — só revela se perguntada sobre fraturas anteriores | Prednisona 5 mg/dia há 1 ano sem indicação clara — só revela se perguntada sobre medicamentos | Menopausa precoce aos 44 anos — só revela se perguntada sobre menopausa',
      actorBehavior: 'Muda de posição devagar, com expressão de dor. Colaborativa. Preocupada em ficar dependente como a mãe. Pergunta sobre os efeitos colaterais dos remédios para osso ("ouvi que o remédio estraga o osso da mandíbula").'
    },
    instC: {
      diagnosis: 'Osteoporose pós-menopausa estabelecida (grave), com fratura vertebral por fragilidade aguda em T12 e fratura prévia em T8 e de punho, agravada por uso crônico de glicocorticoide, deficiência de vitamina D com hiperparatireoidismo secundário e tabagismo prévio. Alto risco de novas fraturas (risco muito alto).',
      differentials: [
        'Fratura patológica por metástase (mama, pulmão) — investigar em ex-tabagista; ausência de sinais de alarme, VHS normal e morfologia em cunha sem lesão de pedículos favorecem osteoporose; RM se dúvida',
        'Mieloma múltiplo — eletroforese de proteínas sem pico monoclonal, cálcio e função renal normais',
        'Hiperparatireoidismo primário — PTH elevado com cálcio normal e vitamina D baixa sugere hiperparatireoidismo secundário',
        'Osteomalácia — fosfatase alcalina e fósforo normais',
        'Lombalgia mecânica / espondiloartrose — não explica a fratura em cunha e a perda de altura'
      ],
      context: 'A osteoporose é uma doença osteometabólica caracterizada por baixa massa óssea e deterioração da microarquitetura, levando a fraturas por fragilidade. Fraturas vertebrais são as mais comuns, frequentemente subdiagnosticadas, e predizem novas fraturas. O uso de glicocorticoide por ≥ 3 meses em qualquer dose ≥ 2,5 mg/dia é causa secundária importante.',
      justify: 'Fratura vertebral por baixo impacto (o diagnóstico clínico de osteoporose independe da densitometria), perda de altura > 4 cm, fraturas prévias por fragilidade, T-score ≤ −2,5. Fatores de risco: menopausa precoce, corticoide, tabagismo, história materna de fratura de quadril, baixo peso.',
      expectedAnamnesis: 'Mecanismo, início e características da dor | Sinais de alarme (febre, perda de peso, dor noturna, déficit neurológico, câncer prévio) | Perda de altura | Fraturas prévias por fragilidade | Menopausa e uso de hormônios | Corticoides e outros medicamentos (IBP, anticonvulsivantes) | Tabagismo, álcool | História familiar de fratura de quadril | Ingestão de cálcio e exposição solar | Quedas',
      expectedPhysical: 'Medida da altura | Inspeção da coluna (cifose) | Percussão dos processos espinhosos | Distâncias costela-pelve e occipício-parede | Exame neurológico de MMII | Avaliação de risco de queda',
      expectedExams: [
        { exam: 'Radiografia de coluna torácica e lombar', justify: 'Confirmar fratura vertebral', expected: 'Fratura em cunha' },
        { exam: 'Densitometria óssea (DXA)', justify: 'Diagnóstico densitométrico e monitorização', expected: 'T-score ≤ −2,5' },
        { exam: 'Cálcio, fósforo, FA, creatinina, 25-OH vit D, PTH, TSH, hemograma', justify: 'Causas secundárias e pré-tratamento', expected: 'Vitamina D baixa, PTH elevado' },
        { exam: 'Eletroforese de proteínas', justify: 'Excluir mieloma em fratura vertebral', expected: 'Normal' },
        { exam: 'FRAX Brasil', justify: 'Estimar risco em 10 anos', expected: 'Alto risco' }
      ],
      expectedConduct: 'Dor aguda: analgesia escalonada (paracetamol, dipirona; opioide fraco por curto período se necessário — atenção a quedas e constipação); calcitonina pode ser usada por até 4 semanas para dor; repouso relativo breve e mobilização precoce; órtese temporária opcional; vertebroplastia/cifoplastia apenas em dor refratária | Doença de base: repor vitamina D (colecalciferol 50.000 UI/semana por 8 semanas e manutenção 1.000–2.000 UI/dia) e cálcio (preferir dieta; suplementar até 1.000–1.200 mg/dia total) | Antirreabsortivo/anabólico: risco muito alto (fratura vertebral recente + múltiplas fraturas) — considerar anabólico (teriparatida ou romosozumabe) seguido de antirreabsortivo; se indisponível, bisfosfonato (alendronato 70 mg/semana VO ou ácido zoledrônico 5 mg EV/ano) após correção da vitamina D; denosumabe é alternativa | Rever prednisona: avaliar indicação e desmamar se possível | Prevenção de quedas, exercício resistido e de equilíbrio, fisioterapia | Avaliação odontológica antes de antirreabsortivo | Orientações: osteonecrose de mandíbula é rara; benefício supera o risco; uso correto do alendronato (jejum, água, 30 min em pé) | Densitometria de controle em 1–2 anos',
      expectedCommunication: 'Explicar a diferença entre "bico de papagaio" e fratura por osteoporose | Abordar o medo de efeitos colaterais com dados | Valorizar a preocupação com a independência | Decisão compartilhada sobre o tratamento',
      criticalErrors: [
        'Tratar como lombalgia mecânica sem radiografia em idosa com dor após trauma mínimo',
        'Não pesquisar sinais de alarme para fratura patológica/neoplasia',
        'Iniciar bisfosfonato sem corrigir a deficiência de vitamina D',
        'Não identificar o glicocorticoide como fator de risco',
        'Exigir densitometria para diagnosticar osteoporose em quem já tem fratura por fragilidade'
      ]
    },
    instD: {
      title: 'Osteoporose — Material de Estudo',
      sections: [
        {
          h: 'Definição e Diagnóstico',
          items: [
            { item: 'Diagnóstico: T-score ≤ −2,5 na DXA OU fratura por fragilidade de quadril ou vertebral, independentemente da densitometria.', score: 2, ref: 'Diretriz Brasileira de Osteoporose — ABRASSO/SBEM, 2022' },
            { item: 'Fraturas vertebrais são as mais comuns e 2/3 são assintomáticas; perda de altura > 4 cm sugere fratura vertebral.', score: 1, ref: 'Bone Health & Osteoporosis Foundation Guide, 2022' }
          ]
        },
        {
          h: 'Fatores de Risco e Causas Secundárias',
          items: [
            { item: 'Idade, sexo feminino, menopausa precoce, baixo peso, fratura prévia, história parental de fratura de quadril, tabagismo, álcool, glicocorticoides, artrite reumatoide.', score: 1, ref: 'FRAX — Kanis JA' },
            { item: 'Excluir causas secundárias: hipovitaminose D, hiperparatireoidismo, hipertireoidismo, mieloma, doença celíaca, hipogonadismo.', score: 1, ref: 'ABRASSO, 2022' }
          ]
        },
        {
          h: 'Tratamento',
          items: [
            { item: 'Cálcio e vitamina D adequados são base de qualquer tratamento.', score: 1, ref: 'ABRASSO, 2022' },
            { item: 'Bisfosfonatos são 1ª linha na maioria; em risco muito alto (fratura recente, múltiplas fraturas), preferir anabólico (teriparatida, romosozumabe) seguido de antirreabsortivo.', score: 2, ref: 'AACE/ACE Guideline — Postmenopausal Osteoporosis, 2020' },
            { item: 'Osteonecrose de mandíbula e fratura atípica de fêmur são raras; benefício supera amplamente o risco.', score: 1, ref: 'AACE/ACE, 2020' },
            { item: 'Prevenção de quedas e exercícios resistidos complementam o tratamento.', score: 1, ref: 'ABRASSO, 2022' }
          ]
        }
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // CASO 8 — VIOLÊNCIA CONTRA A PESSOA IDOSA
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 8,
    title: 'Idosa com hematomas em diferentes estágios trazida pelo filho',
    sub: 'PS — Pronto-Socorro',
    tema: 'Geriatria',
    topic: 'Violência contra a Pessoa Idosa',
    level: 'difícil',
    cardAccent: '#8D6E63',
    instA: {
      scenario: 'Pronto-Socorro, 22h. Paciente trazida pelo filho, que relata que ela "caiu da cama".',
      patient: 'A.L.V., 81 anos, feminino, aposentada, viúva, com demência leve.',
      complaint: 'Segundo o filho, caiu da cama e machucou o braço.',
      tasks: [
        'Realize a anamnese, incluindo entrevista da paciente em particular.',
        'Realize o exame físico completo, documentando as lesões.',
        'Identifique os sinais de alerta para violência.',
        'Solicite os exames complementares pertinentes.',
        'Proponha as condutas clínicas, de proteção e legais.'
      ]
    },
    instB: {
      vitals: {
        PA: '104/62 mmHg',
        FC: '96 bpm',
        FR: '18 irpm',
        Tax: '36,0 °C',
        Peso: '41 kg',
        Altura: '1,52 m',
        IMC: '17,7 kg/m²'
      },
      physicalGeneral: 'Regular estado geral, emagrecida, desidratada 2+/4+, higiene precária, roupas sujas de urina, cabelos emaranhados. Ansiosa, olha frequentemente para o filho, responde pouco na presença dele.',
      physicalSeg: 'MEMBROS SUPERIORES: equimoses em braços bilaterais com padrão de preensão (marcas de dedos), em diferentes colorações (violácea, esverdeada e amarelada); deformidade e dor em antebraço esquerdo | PUNHOS: escoriações circulares bilaterais | DORSO: equimose linear de 10 cm em região escapular | PELE: lesão por pressão estágio 2 em sacro | BOCA: mucosas secas, prótese ausente | NEUROLÓGICO: orientada parcialmente, MMEM 21/30 (escolaridade 4 anos).',
      labs: [
        { test: 'Hemoglobina', val: '10,2 g/dL', ref: '12–16 g/dL', alt: true },
        { test: 'Albumina', val: '2,7 g/dL', ref: '3,5–5,0 g/dL', alt: true },
        { test: 'Ureia', val: '72 mg/dL', ref: '15–45 mg/dL', alt: true },
        { test: 'Creatinina', val: '1,3 mg/dL', ref: '0,5–1,1 mg/dL', alt: true },
        { test: 'Sódio', val: '149 mEq/L', ref: '135–145 mEq/L', alt: true },
        { test: 'Coagulograma e plaquetas', val: 'Normais', ref: 'Normais', alt: false }
      ],
      image: 'Radiografia de antebraço esquerdo (se solicitada): fratura transversa da diáfise da ulna ("fratura de cassetete" — típica de mecanismo de defesa). | Radiografia de tórax (se solicitada): calo ósseo em arcos costais 6º e 7º à direita (fraturas antigas consolidadas).',
      note: 'O ator que faz o filho deve permanecer na sala até que o candidato peça, de forma cordial, para conversar a sós com a paciente. Somente quando estiver a sós a paciente revela as informações ocultas. Se o candidato confrontar o filho de forma acusatória, ele fica agressivo e quer levar a mãe embora.',
      patientProfile: 'Viúva há 3 anos, mora com o filho de 50 anos, desempregado, que administra o cartão da aposentadoria dela. O filho faz uso abusivo de álcool. Outra filha mora em outra cidade e liga raramente. A paciente tem demência leve diagnosticada há 2 anos, mas há 6 meses não leva à consulta.',
      script: [
        { trigger: 'Queixa principal (filho)', speech: 'Ela caiu da cama de madrugada e machucou o braço. Ela é muito desastrada, vive caindo.' },
        { trigger: 'Sobre horário (filho)', speech: 'Foi ontem de madrugada... ou anteontem. Só trouxe agora porque o braço inchou.' },
        { trigger: 'Sobre as outras manchas (filho)', speech: 'Essas manchas? Ela bate em tudo, a pele dela é fina. Toma AAS também, por isso.' },
        { trigger: 'Sobre alimentação (filho)', speech: 'Ela come quando quer. Não gosta de nada.' },
        { trigger: 'Paciente — a sós, sobre o braço', speech: '(hesita) Ele fica nervoso quando bebe... eu levantei o braço para ele não me bater.' },
        { trigger: 'Paciente — a sós, sobre os punhos', speech: 'Ele me amarra na cama de noite para eu não sair. Diz que eu fico andando pela casa.' },
        { trigger: 'Paciente — a sós, sobre dinheiro', speech: 'O dinheiro da aposentadoria ele pega todo. Não sei o que ele faz.' },
        { trigger: 'Pergunta ativa — paciente a sós', speech: 'Não conta para ele que eu falei, por favor. Ele é meu filho. Para onde eu vou?' }
      ],
      hiddenInfo: 'Agressão física pelo filho quando alcoolizado — só revela a sós | Contenção no leito com amarras durante a noite — só revela a sós | Apropriação da aposentadoria (violência financeira) e negligência alimentar — só revela a sós | Filha em outra cidade que poderia ajudar — só revela se perguntada sobre outros familiares',
      actorBehavior: 'Filho: impaciente, respostas vagas e contraditórias, quer ir embora rápido, minimiza as lesões; aceita sair da sala se o pedido for cordial ("é rotina conversar a sós com o paciente"). Paciente: assustada, retraída na presença do filho; a sós, chora, revela os fatos, mas protege o filho e teme ficar sem lar.'
    },
    instC: {
      diagnosis: 'Violência contra a pessoa idosa — física (fratura de ulna por defesa, equimoses por preensão em diferentes estágios, fraturas costais antigas, contenção física), negligência (desnutrição, desidratação com hipernatremia, higiene precária, lesão por pressão, abandono do acompanhamento) e financeira/patrimonial — em idosa com demência leve, perpetrada pelo filho cuidador com uso abusivo de álcool.',
      differentials: [
        'Quedas recorrentes acidentais — sai pela incompatibilidade entre o mecanismo relatado e as lesões (fratura de ulna isolada em defesa, marcas de preensão, lesões em punhos)',
        'Coagulopatia / uso de antiagregante — equimoses fáceis, mas coagulograma e plaquetas normais e o padrão das lesões não é explicado',
        'Fragilidade cutânea senil (púrpura senil) — localiza-se no dorso das mãos e antebraços, sem padrão de preensão',
        'Desnutrição por progressão da demência — contribui, mas associada a desidratação, higiene precária e relatos da paciente indica negligência'
      ],
      context: 'Estima-se que 1 em cada 6 idosos sofra algum tipo de violência por ano, sendo a maioria praticada por familiares. Idosos com demência, dependência e isolamento social, e cuidadores com uso de álcool, sobrecarga ou dependência financeira são fatores de risco. O profissional de saúde é frequentemente o único contato externo da vítima.',
      justify: 'Sinais de alerta: atraso na procura de atendimento, história vaga e inconsistente, lesões em diferentes estágios, padrão de preensão, fratura de defesa, lesões em punhos (contenção), fraturas antigas não relatadas, desnutrição/desidratação, higiene precária, comportamento temeroso diante do acompanhante, relato direto da vítima a sós.',
      expectedAnamnesis: 'Mecanismo detalhado e horário da queda (inconsistências) | Tempo até a procura de atendimento | Entrevista em particular com a paciente | Perguntas diretas e não sugestivas sobre medo, agressões, contenção, privação de alimentos ou medicamentos | Quem administra o dinheiro | Quem é o cuidador, uso de álcool/drogas | Rede de apoio familiar | Avaliação cognitiva e capacidade de decisão',
      expectedPhysical: 'Exame completo com a paciente despida (com consentimento e privacidade) | Documentação detalhada das lesões: localização, tamanho, cor, padrão (com desenho/fotografia autorizada) | Avaliação nutricional e de hidratação | Pele (lesão por pressão) | Avaliação cognitiva',
      expectedExams: [
        { exam: 'Radiografia de antebraço', justify: 'Fratura', expected: 'Fratura de diáfise de ulna' },
        { exam: 'Radiografia de tórax / outros segmentos dolorosos', justify: 'Fraturas ocultas ou antigas', expected: 'Fraturas costais antigas' },
        { exam: 'Hemograma, coagulograma, plaquetas', justify: 'Excluir causa hematológica das equimoses', expected: 'Normais' },
        { exam: 'Eletrólitos, função renal, albumina', justify: 'Desidratação e desnutrição', expected: 'Hipernatremia, LRA pré-renal, hipoalbuminemia' },
        { exam: 'TC de crânio', justify: 'Se trauma craniano suspeito ou alteração de consciência', expected: 'Conforme indicação' }
      ],
      expectedConduct: 'Clínica: imobilização e avaliação ortopédica da fratura, analgesia, hidratação (correção lenta da hipernatremia), suporte nutricional, cuidado da lesão por pressão | Proteção: internar a paciente (garante segurança imediata e avaliação multiprofissional) — não devolver ao ambiente de risco | Acionar Serviço Social e equipe de saúde mental | Legal (obrigatório): notificação compulsória na Ficha de Notificação de Violência Interpessoal/Autoprovocada (SINAN) e comunicação obrigatória à autoridade policial, ao Ministério Público ou aos Conselhos do Idoso (Estatuto da Pessoa Idosa — Lei 10.741/2003, art. 19) — a comunicação independe da concordância da vítima | Registro detalhado em prontuário | Contato com a filha / rede familiar para alternativas de cuidado | Orientar sobre o Disque 100 | Seguimento da demência e rede de cuidado',
      expectedCommunication: 'Solicitar de forma não acusatória que o filho aguarde fora | Perguntas abertas e não sugestivas | Acreditar e acolher a vítima, sem julgamento | Explicar com honestidade que a notificação é obrigatória e que o objetivo é protegê-la | Evitar confronto com o suposto agressor; manter postura profissional e segura',
      criticalErrors: [
        'Não entrevistar a paciente a sós',
        'Aceitar a explicação de queda sem questionar as inconsistências',
        'Não realizar a notificação compulsória e a comunicação às autoridades',
        'Dar alta para o mesmo ambiente sem plano de proteção',
        'Confrontar o filho de forma acusatória, colocando em risco a paciente e a equipe',
        'Prometer sigilo absoluto à paciente sobre a notificação'
      ]
    },
    instD: {
      title: 'Violência contra a Pessoa Idosa — Material de Estudo',
      sections: [
        {
          h: 'Definição e Tipos',
          items: [
            { item: 'Tipos: física, psicológica, sexual, financeira/patrimonial, negligência, abandono e autonegligência.', score: 1, ref: 'OMS — Elder Abuse, 2022' },
            { item: 'Prevalência ~1 em cada 6 idosos/ano na comunidade; maior em instituições; agressor mais comum é familiar.', score: 1, ref: 'Yon Y et al., Lancet Glob Health 2017' }
          ]
        },
        {
          h: 'Sinais de Alerta',
          items: [
            { item: 'Atraso na procura de atendimento, história inconsistente, lesões em diferentes estágios, padrões (preensão, objetos, amarras), fraturas sem explicação, desnutrição, higiene precária, comportamento temeroso.', score: 2, ref: 'Lachs MS, Pillemer KA, NEJM 2015' },
            { item: 'Entrevistar o idoso a sós é passo essencial.', score: 2, ref: 'Lachs MS, Pillemer KA, NEJM 2015' }
          ]
        },
        {
          h: 'Aspectos Legais no Brasil',
          items: [
            { item: 'Estatuto da Pessoa Idosa (Lei 10.741/2003), art. 19: casos suspeitos ou confirmados de violência devem ser notificados compulsoriamente e comunicados à autoridade policial, Ministério Público ou Conselhos do Idoso.', score: 2, ref: 'Lei 10.741/2003 (alterada pela Lei 12.461/2011)' },
            { item: 'Notificação no SINAN (Ficha de Violência Interpessoal/Autoprovocada).', score: 1, ref: 'Ministério da Saúde — VIVA/SINAN' }
          ]
        },
        {
          h: 'Conduta',
          items: [
            { item: 'Garantir segurança imediata (internação se necessário), tratar lesões, documentar detalhadamente, acionar rede multiprofissional e de proteção social.', score: 1, ref: 'Caderno de Atenção Básica nº 19 — Envelhecimento e Saúde da Pessoa Idosa' }
          ]
        }
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // CASO 9 — CUIDADOS PALIATIVOS NA DEMÊNCIA AVANÇADA
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 9,
    title: 'Família pede sonda para alimentar idosa com demência avançada',
    sub: 'Enfermaria de Clínica Médica — Hospital Geral',
    tema: 'Geriatria',
    topic: 'Cuidados Paliativos na Demência Avançada',
    level: 'difícil',
    cardAccent: '#8D6E63',
    instA: {
      scenario: 'Enfermaria de clínica médica. Reunião familiar agendada com o filho responsável, no 5º dia de internação por pneumonia aspirativa.',
      patient: 'M.J.A., 88 anos, feminino, com doença de Alzheimer avançada há 8 anos, acamada.',
      complaint: 'O filho pergunta por que ainda não passaram uma sonda para alimentar a mãe, que está comendo cada vez menos.',
      tasks: [
        'Conduza a conversa com o familiar utilizando técnica estruturada de comunicação de más notícias.',
        'Explore a compreensão do familiar sobre a doença e os valores da paciente.',
        'Discuta prognóstico e as evidências sobre alimentação por sonda na demência avançada.',
        'Proponha um plano de cuidados centrado no conforto.',
        'Defina com a família as diretivas de cuidado (incluindo reanimação).'
      ]
    },
    instB: {
      vitals: {
        PA: '102/60 mmHg',
        FC: '92 bpm',
        FR: '22 irpm',
        Tax: '37,6 °C',
        SpO2: '93% com O2 2 L/min',
        Peso: '38 kg (há 6 meses: 45 kg)'
      },
      physicalGeneral: 'Grave estado geral, caquética, acamada em posição fetal, não verbal, abre os olhos ao chamado mas não fixa o olhar. Fácies de desconforto ao manuseio.',
      physicalSeg: 'NEUROLÓGICO: não verbaliza, não segue comandos, contraturas em flexão de membros inferiores, reflexos primitivos (preensão palmar) presentes | DEGLUTIÇÃO: retém alimento na boca, tosse e engasga com líquidos | PULMONAR: estertores em base direita | PELE: lesão por pressão estágio 3 em sacro | FAST: estágio 7c (incapaz de andar sem ajuda, fala limitada a < 6 palavras, incapaz de sentar sem apoio).',
      labs: [
        { test: 'Albumina', val: '2,3 g/dL', ref: '3,5–5,0 g/dL', alt: true },
        { test: 'Leucócitos', val: '12.600/mm³ (em queda; admissão 18.200)', ref: '4.000–11.000/mm³', alt: true },
        { test: 'PCR', val: '64 mg/L (admissão 210)', ref: '< 5 mg/L', alt: true },
        { test: 'Avaliação fonoaudiológica', val: 'Disfagia orofaríngea grave; alto risco de aspiração mesmo com espessante', ref: '—', alt: true }
      ],
      note: 'Estação de comunicação: o ator representa o filho. A paciente não está presente na sala. Se o candidato usar jargão técnico, o filho pede explicação. Se o candidato não perguntar sobre os valores da mãe, o filho não menciona espontaneamente o que ela dizia sobre "não querer viver presa a aparelhos".',
      patientProfile: 'Filho único, 60 anos, engenheiro, cuida da mãe com ajuda de uma cuidadora contratada. Pai faleceu há 10 anos. Sente culpa por ter trabalhado muito e acha que "deixar de alimentar é deixar a mãe morrer de fome". É católico praticante. A mãe era professora, independente, religiosa.',
      script: [
        { trigger: 'Abertura', speech: 'Doutor(a), minha mãe está quase sem comer. Por que vocês não passam logo uma sonda? Não vou deixar ela morrer de fome.' },
        { trigger: 'Sobre a compreensão da doença', speech: 'Eu sei que o Alzheimer é grave, mas ela já teve pneumonia antes e saiu dessa. Achei que ia ser igual.' },
        { trigger: 'Após receber informação sobre prognóstico', speech: '(silêncio, emociona-se) Então ela está morrendo? Eu não estava preparado para ouvir isso.' },
        { trigger: 'Sobre a sonda', speech: 'Mas se não passar sonda, ela não vai sofrer com fome e sede?' },
        { trigger: 'Sobre os valores da mãe', speech: 'Ela sempre dizia que não queria ficar presa numa cama, ligada em aparelhos... quando o meu pai ficou entubado ela falou isso.' },
        { trigger: 'Sobre culpa', speech: 'Eu trabalhei demais, deixei ela com a cuidadora. Sinto que falhei com ela.' },
        { trigger: 'Sobre religião', speech: 'Eu queria que o padre viesse aqui dar a unção para ela.' },
        { trigger: 'Pergunta ativa', speech: 'Se ela parar de respirar, vocês vão levar para a UTI?' }
      ],
      hiddenInfo: 'A mãe expressou desejo de não ser mantida viva com aparelhos — só revela se perguntado sobre o que ela pensava/valorizava | Culpa por ter trabalhado demais e "abandonado" a mãe — só revela se o candidato explorar emoções | Deseja visita do padre — só revela se perguntado sobre espiritualidade',
      actorBehavior: 'Inicia irritado e defensivo, exigindo a sonda. Se o candidato acolher a emoção (silêncio, validação) e explorar a compreensão antes de informar, o filho se acalma, chora e passa a colaborar. Se o candidato for técnico, apressado ou disser "não há mais nada a fazer", o filho fica mais irritado e ameaça procurar outro hospital.'
    },
    instC: {
      diagnosis: 'Demência de Alzheimer em fase avançada/terminal (FAST 7c) com disfagia grave, caquexia, pneumonia aspirativa e lesão por pressão — indicação de cuidados paliativos exclusivos com foco em conforto; alimentação por sonda não indicada.',
      differentials: [
        'Disfagia reversível por delirium ou pela infecção aguda — considerada, mas a trajetória de 8 anos, FAST 7c, perda ponderal progressiva e disfagia grave persistente indicam fase terminal',
        'Depressão / recusa alimentar tratável — não aplicável na demência avançada não verbal com disfagia orofaríngea documentada',
        'Causa estrutural de disfagia (neoplasia esofágica) — sem indicação de investigação invasiva, que não mudaria o plano de cuidados'
      ],
      context: 'Na demência avançada, dificuldades alimentares e pneumonias recorrentes são marcadores de fase terminal (sobrevida média de ~6 meses após pneumonia ou problema alimentar). Estudos mostram que a alimentação por sonda nesses pacientes não aumenta a sobrevida, não reduz aspiração, não melhora estado nutricional, lesões por pressão ou conforto, e aumenta uso de contenção e complicações.',
      justify: 'FAST 7c, dependência total, não verbal, disfagia grave, pneumonia aspirativa, caquexia e lesão por pressão. Recomendação de sociedades (AGS, ANCP) contra sonda em demência avançada; preferência pela alimentação de conforto manual. Valores previamente expressos pela paciente apoiam cuidado centrado no conforto.',
      expectedAnamnesis: 'Preparar o ambiente (sala privada, sentado, sem interrupções) | Explorar o que o filho já sabe sobre a doença e a internação | Perguntar quanto ele deseja saber | Explorar valores, crenças e desejos prévios da paciente | Explorar emoções (culpa, medo) | Espiritualidade | Rede de apoio do filho',
      expectedPhysical: 'Estação centrada em comunicação — o candidato deve demonstrar conhecimento da gravidade a partir dos dados fornecidos (FAST, disfagia, caquexia)',
      expectedExams: [
        { exam: 'Escala FAST e/ou PPS', justify: 'Estadiamento e prognóstico', expected: 'FAST 7c; PPS ≤ 30%' },
        { exam: 'Avaliação fonoaudiológica', justify: 'Documentar disfagia e orientar alimentação de conforto', expected: 'Disfagia grave' },
        { exam: 'Novos exames invasivos — não indicados', justify: 'Não modificariam o plano centrado em conforto', expected: '—' }
      ],
      expectedConduct: 'Comunicação: protocolo SPIKES (Setting, Perception, Invitation, Knowledge, Emotions/Empathy, Strategy/Summary) | Alimentação: não indicar sonda nasoenteral/gastrostomia; alimentação de conforto por via oral, em pequenas quantidades, pela consistência mais segura, quando a paciente aceitar e com prazer — explicar que, na fase final, a diminuição da fome e sede é parte do processo e não causa sofrimento como em pessoa saudável; cuidados com a boca (hidratação da mucosa) para conforto | Controle de sintomas: completar antibiótico se trouxer conforto (decisão compartilhada) ou suspender; analgesia regular (incluindo dor da lesão por pressão; opioide em dose baixa se necessário); dispneia: opioide em dose baixa, posicionamento, oxigênio se confortável; aspirar secreções com parcimônia; anticolinérgico (escopolamina) para sororoca | Diretivas: registrar em prontuário a decisão de não reanimação (ordem de não RCP) e de não transferir para UTI, alinhada aos valores da paciente — CFM Resolução 1.995/2012 (diretivas antecipadas) e 1.805/2006 (ortotanásia) | Espiritualidade: acionar capelania/padre para unção | Suporte ao filho: acolher a culpa, oferecer psicologia, explicar que ele não está abandonando a mãe | Planejar local de cuidado (alta com cuidados paliativos domiciliares — Melhor em Casa — ou permanência hospitalar) | Manter cuidados de higiene, mudança de decúbito e curativos para conforto',
      expectedCommunication: 'Usar o protocolo SPIKES | Aguardar e acolher emoções com silêncio e validação | Evitar jargão | Nunca dizer "não há mais nada a fazer" — enfatizar tudo o que será feito para o conforto | Reforçar que a decisão é compartilhada e respeita os valores da paciente | Retirar do filho o peso de "decidir pela morte" da mãe',
      criticalErrors: [
        'Indicar sonda nasoenteral ou gastrostomia para prolongar a vida na demência avançada',
        'Comunicar o prognóstico de forma abrupta, sem explorar compreensão e emoções',
        'Dizer que "não há mais nada a fazer"',
        'Não discutir diretivas de reanimação e de nível de cuidado',
        'Não explorar os valores e desejos prévios da paciente',
        'Ignorar a dimensão espiritual e o sofrimento do familiar'
      ]
    },
    instD: {
      title: 'Cuidados Paliativos na Demência Avançada — Material de Estudo',
      sections: [
        {
          h: 'Prognóstico',
          items: [
            { item: 'Demência avançada (FAST 7) com pneumonia ou problema alimentar: mortalidade de ~50% em 6 meses; reconhecida como doença terminal.', score: 2, ref: 'Mitchell SL et al. — CASCADE Study, NEJM 2009' }
          ]
        },
        {
          h: 'Alimentação por Sonda',
          items: [
            { item: 'Sonda na demência avançada não aumenta sobrevida, não previne aspiração, não melhora nutrição, lesões por pressão ou conforto; recomenda-se alimentação manual cuidadosa (comfort feeding).', score: 2, ref: 'AGS Position Statement — Feeding Tubes in Advanced Dementia, 2014' },
            { item: 'Revisão sistemática: ausência de benefício da nutrição enteral na demência avançada.', score: 1, ref: 'Davies N et al., Cochrane 2021' }
          ]
        },
        {
          h: 'Comunicação',
          items: [
            { item: 'Protocolo SPIKES: preparar ambiente, avaliar percepção, obter convite, transmitir conhecimento, acolher emoções, estabelecer estratégia e resumir.', score: 2, ref: 'Baile WF et al., The Oncologist 2000' },
            { item: 'Decisão compartilhada baseada no julgamento substituto (o que a paciente desejaria).', score: 1, ref: 'Manual de Cuidados Paliativos — ANCP, 2ª ed.' }
          ]
        },
        {
          h: 'Aspectos Éticos e Legais',
          items: [
            { item: 'Resolução CFM 1.805/2006 (limitação de tratamentos que prolonguem a vida na fase terminal — ortotanásia) e 1.995/2012 (diretivas antecipadas de vontade).', score: 1, ref: 'Conselho Federal de Medicina' },
            { item: 'Controle de sintomas (dor, dispneia, secreções) e suporte espiritual e familiar são componentes centrais.', score: 1, ref: 'Manual de Cuidados Paliativos — ANCP, 2ª ed.' }
          ]
        }
      ]
    }
  },
];

export default geriatria2;
