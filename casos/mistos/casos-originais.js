// Casos originais da plataforma (ITU/litíase, Endocrinologia e Psiquiatria),
// atualizados para o esquema atual das estações: roteiro do ator em instB
// (patientProfile, script, hiddenInfo, actorBehavior), gabarito estruturado em
// instC (differentials, expected*) e checklist com referências em instD.
// A ordem dos casos foi mantida para preservar a numeração das estações.

export const urologyStations = [
  // NEFROLOGIA — Cistite aguda não complicada em mulher jovem não gestante, no contexto de ITU de repetição
  {
    id: 1,
    title: 'Ardência para urinar há 3 dias',
    sub: 'UBS — Atenção Primária',
    tema: 'Nefrologia',
    topic: 'ITU — Cistite Aguda Não Complicada',
    level: 'fácil',
    cardAccent: '#5C6BC0',
    instA: {
      scenario: 'Unidade Básica de Saúde (UBS), atendimento de demanda espontânea. Turno da manhã.',
      patient: 'J.S., 26 anos, feminino, professora, sem comorbidades conhecidas.',
      complaint: 'Paciente refere ardência ao urinar e vontade frequente de ir ao banheiro há 3 dias. Nega febre.',
      tasks: [
        'Realize a anamnese dirigida à queixa urinária, incluindo antecedentes ginecológicos e alergias.',
        'Solicite o exame físico pertinente ao caso.',
        'Formule a hipótese diagnóstica e os diagnósticos diferenciais.',
        'Solicite e interprete os exames complementares adequados.',
        'Prescreva o tratamento de acordo com as diretrizes atuais e oriente a prevenção de recorrências.'
      ]
    },
    instB: {
      vitals: { PA: '112/72 mmHg', FC: '78 bpm', FR: '16 irpm', Tax: '36,8 °C', Peso: '58 kg', Altura: '1,62 m', IMC: '22,1 kg/m²' },
      physicalGeneral: 'Paciente em bom estado geral, corada, hidratada, anictérica, afebril ao toque.',
      physicalSeg: 'ABDOME: Plano, macio, sem visceromegalias. Dor leve à palpação profunda em hipogastro. Sem defesa. Punho-percussão lombar bilateral NEGATIVA | GENITÁLIA EXTERNA: Sem sinais de corrimento, eritema ou lesões visíveis. Meato uretral sem secreção | MAMAS: Simétricas, sem nódulos ou descarga papilar | MEMBROS: Sem edema',
      labs: [
        { test: 'Urina tipo 1 — Leucocitúria', val: '++ (15-20 leucócitos/campo)', ref: '< 5/campo', alt: true },
        { test: 'Urina tipo 1 — Nitrito', val: 'POSITIVO', ref: 'Negativo', alt: true },
        { test: 'Urina tipo 1 — Hematúria', val: '+ (3-5 hemácias/campo)', ref: '< 2/campo', alt: true },
        { test: 'Urina tipo 1 — Proteinúria', val: 'Traços', ref: 'Negativo', alt: false },
        { test: 'Urina tipo 1 — pH', val: '6.0', ref: '4.5–8.0', alt: false },
        { test: 'Urocultura (coleta na consulta)', val: 'Aguardando resultado (48-72h)', ref: '< 10³ UFC/mL', alt: false },
        { test: 'Beta-HCG urinário', val: 'NEGATIVO', ref: 'Negativo', alt: false },
        { test: 'Hemograma — Leucócitos totais', val: '9.200/mm³', ref: '4.000–11.000/mm³', alt: false }
      ],
      note: 'Entregar o EAS e o beta-HCG apenas se solicitados. Se o candidato pedir urocultura, informar que foi coletada e o resultado sai em 48–72 h (crescimento de E. coli > 10⁵ UFC/mL, sensível a nitrofurantoína e fosfomicina, resistente a SMX-TMP e ampicilina). A alergia à penicilina só é revelada se perguntada.',
      patientProfile: 'J.S., 26 anos, professora do ensino fundamental, mora com o namorado. Sem doenças crônicas, usa anticoncepcional oral combinado. Bebe pouca água e segura a urina durante as aulas. Teve dois episódios de "infecção de urina" no último ano, tratados no pronto-atendimento com antibiótico cujo nome não lembra. Preocupada porque os episódios estão se repetindo e atrapalham o trabalho.',
      script: [
        {
          trigger: 'Queixa principal',
          speech: 'Doutora(o), tô sentindo uma ardência muito chata pra urinar faz três dias. Fica aquela vontade o tempo todo, mas quando vou, sai pouco e ainda dói. Tá me atrapalhando até de trabalhar.'
        },
        { trigger: 'Sobre febre ou calafrios', speech: 'Não, febre não tive não. Nem calafrio.' },
        { trigger: 'Sobre dor lombar ou nas costas', speech: 'Não, nas costas não dói não. É mais aqui embaixo da barriga.' },
        { trigger: 'Sobre a cor da urina', speech: 'Ontem notei que tava um pouquinho mais escura que o normal, mas hoje tá melhor.' },
        { trigger: 'Sobre náusea ou vômito', speech: 'Não, tô bem nesse sentido.' },
        { trigger: 'Sobre corrimento vaginal', speech: 'Não, tô normal nessa parte.' },
        { trigger: 'Sobre atividade sexual e preservativo', speech: 'Tenho parceiro fixo. A gente usa camisinha às vezes, mas não sempre.' },
        { trigger: 'Sobre data da última menstruação', speech: 'Foi há umas duas semanas, tô regular.' },
        { trigger: 'Sobre uso de anticoncepcional', speech: 'Uso anticoncepcional oral, tomo direitinho.' },
        { trigger: 'Sobre episódios anteriores', speech: 'Já tive isso umas duas vezes antes, no ano passado e no começo desse ano. Tomei um antibiótico e passou.' },
        { trigger: 'Sobre antecedentes médicos e cirúrgicos', speech: 'Não tenho nenhuma doença, nunca operei nada.' },
        { trigger: 'Sobre alergias', speech: 'Alergia a penicilina? Sim, tomei quando criança e fiquei toda manchada. O médico falou que era alergia.' },
        { trigger: 'Sobre hidratação e hábitos', speech: 'Eu bebo pouca água, confesso. Fico o dia todo na sala de aula e às vezes seguro o xixi por horas.' },
        { trigger: 'Pergunta ativa — diagnóstico', speech: 'O que eu tenho, doutora(o)? É grave?' },
        { trigger: 'Pergunta ativa — tratamento', speech: 'Vou precisar tomar antibiótico de novo? Tem algum jeito de não ficar repetindo tanto?' },
        {
          trigger: 'Sobre relação dos sintomas com a relação sexual',
          speech: 'Pensando bem... das outras vezes também começou um ou dois dias depois de eu ter relação.'
        },
        { trigger: 'Sobre automedicação', speech: 'Tomei um chá de quebra-pedra e um comprimido que sobrou da outra vez, mas não lembro o nome.' }
      ],
      hiddenInfo: 'Alergia à penicilina (exantema na infância) — só revela se perguntada sobre alergias | Três episódios em cerca de 12 meses (ITU recorrente) — só detalha se perguntada sobre episódios anteriores | Tomou um comprimido de antibiótico que sobrou do episódio anterior — só revela se perguntada sobre automedicação | Sintomas costumam começar após relação sexual — só revela se perguntada',
      actorBehavior: 'Paciente colaborativa, um pouco ansiosa e incomodada com a disúria (mexe-se na cadeira). Responde de forma objetiva. Fica aliviada quando o candidato explica que o quadro não é grave e pergunta ativamente como evitar novos episódios. Se o candidato prescrever amoxicilina sem perguntar sobre alergias, a atriz diz: "Doutor(a), isso aí não é penicilina, né?".'
    },
    instC: {
      diagnosis: 'Cistite aguda não complicada em mulher jovem não gestante, no contexto de ITU de repetição (3 episódios em ~12 meses), em paciente com alergia à penicilina.',
      differentials: [
        'Pielonefrite aguda — sai pela ausência de febre, dor lombar, náuseas e Giordano negativo',
        'Uretrite por IST (clamídia/gonococo) — considerar pela atividade sexual sem preservativo consistente; sai pela ausência de corrimento uretral e nitrito positivo, mas oferecer testagem para IST',
        'Vulvovaginite (candidíase, vaginose, tricomoníase) — sai pela ausência de corrimento, prurido e disúria "externa"',
        'Gestação — excluída pelo beta-HCG negativo (mudaria a escolha do antibiótico)',
        'Cistite intersticial / síndrome da bexiga dolorosa — diagnóstico de exclusão; sai pelo EAS francamente infeccioso'
      ],
      context: 'Mulher jovem, imunocompetente, sem fatores de risco para complicação (sem gravidez, sem diabetes, sem anomalia urológica, sem cateterismo, sem internação recente). Apresentação clássica de cistite aguda com disúria, polaciúria e ausência de febre. EAS confirma infecção com leucocitúria, nitrito positivo e hematúria leve.',
      justify: 'Disúria + polaciúria + urgência, sem corrimento e sem sinais sistêmicos, têm alto valor preditivo para cistite (> 90%). EAS confirma com leucocitúria e nitrito positivo. Ausência de gestação, comorbidades e anomalias urológicas define a forma não complicada. Três episódios em 12 meses caracterizam ITU recorrente, o que justifica urocultura com antibiograma.',
      expectedAnamnesis: 'Caracterização da disúria, polaciúria e urgência | Sintomas de ITU alta: febre, calafrios, dor lombar, náuseas e vômitos | Hematúria, aspecto e odor da urina | Corrimento vaginal, prurido e dispareunia (diferencial com vulvovaginite/IST) | Data da última menstruação e método contraceptivo | Atividade sexual e uso de preservativo | Episódios prévios, antibióticos usados e automedicação | Alergias medicamentosas | Comorbidades (diabetes, imunossupressão) | Hábitos: ingesta hídrica e retenção urinária',
      expectedPhysical: 'Sinais vitais (afebril) | Palpação abdominal: dor suprapúbica | Punho-percussão lombar bilateral (Giordano) | Inspeção da genitália externa (corrimento, lesões)',
      expectedExams: [
        { exam: 'Urina tipo 1 (EAS)', justify: 'Confirmar o padrão infeccioso', expected: 'Leucocitúria, nitrito positivo, hematúria discreta' },
        { exam: 'Urocultura com antibiograma', justify: 'Indicada por ITU recorrente e uso recente de antibiótico', expected: 'E. coli > 10⁵ UFC/mL' },
        { exam: 'Beta-HCG', justify: 'Mulher em idade fértil — gestação muda o antibiótico e a classificação', expected: 'Negativo' },
        {
          exam: 'Testagem para IST (clamídia/gonococo, HIV, sífilis)',
          justify: 'Atividade sexual com uso irregular de preservativo',
          expected: 'Oferecer conforme protocolo'
        }
      ],
      expectedConduct: 'Farmacológica: nitrofurantoína 100 mg VO 6/6 h por 5 dias OU fosfomicina trometamol 3 g VO dose única (1ª linha); evitar betalactâmicos pela alergia à penicilina; SMX-TMP apenas se resistência local < 20% e sem uso recente; não usar fluoroquinolona como 1ª linha | Analgesia sintomática: fenazopiridina por até 2 dias ou dipirona | Prevenção da recorrência: ingesta hídrica ≥ 1,5–2 L/dia, não reter urina, micção pós-coito; discutir profilaxia (pós-coital com dose única de nitrofurantoína ou fosfomicina, ou contínua) se os episódios persistirem; cranberry/D-manose como opções de baixa evidência | Retorno com urocultura e se sintomas persistirem após 48–72 h | Sinais de alarme: febre, dor lombar, vômitos',
      expectedCommunication: 'Apresentar-se pelo nome e função | Explicar o diagnóstico em linguagem simples, tranquilizando sobre a benignidade | Perguntar sobre alergias antes de prescrever | Explicar a posologia e a importância de completar o tratamento | Orientar sinais de alarme e retorno | Verificar a compreensão da paciente',
      criticalErrors: [
        'Prescrever amoxicilina, amoxicilina-clavulanato ou cefalosporina sem investigar alergia (paciente com alergia à penicilina)',
        'Não solicitar beta-HCG (ou não perguntar DUM) antes de prescrever em mulher em idade fértil',
        'Prescrever fluoroquinolona como primeira linha para cistite não complicada',
        'Diagnosticar e tratar como pielonefrite sem febre, dor lombar ou Giordano positivo',
        'Não orientar sinais de alarme de ITU alta'
      ]
    },
    instD: {
      title: 'ITU Não Complicada — Cistite Aguda — Material de Estudo',
      sections: [
        {
          h: 'Definição e Epidemiologia',
          items: [
            {
              item: 'Cistite não complicada: ITU baixa em mulher não gestante, sem anomalia funcional/anatômica do trato urinário e sem comorbidades relevantes.',
              score: 1,
              ref: 'EAU Guidelines on Urological Infections, 2024'
            },
            {
              item: 'Cerca de 50–60% das mulheres terão ao menos um episódio na vida; E. coli responde por 75–95% dos casos.',
              score: 1,
              ref: 'Harrison — Medicina Interna, 21ª ed.'
            },
            {
              item: 'ITU recorrente: ≥ 2 episódios em 6 meses ou ≥ 3 em 12 meses — indica urocultura em cada episódio.',
              score: 1,
              ref: 'EAU Guidelines on Urological Infections, 2024'
            }
          ]
        },
        {
          h: 'Diagnóstico',
          items: [
            { item: 'Disúria + polaciúria sem corrimento vaginal tem VPP > 90%; o diagnóstico é clínico e o EAS reforça.', score: 2, ref: 'Bent S et al., JAMA 2002' },
            {
              item: 'Urocultura não é obrigatória no episódio isolado típico; solicitar em recorrência, falha terapêutica, gestação ou sintomas atípicos.',
              score: 1,
              ref: 'IDSA / EAU 2024'
            },
            { item: 'Sempre perguntar DUM / solicitar beta-HCG e investigar alergias antes de prescrever.', score: 1, ref: 'PCDT — Ministério da Saúde' }
          ]
        },
        {
          h: 'Tratamento',
          items: [
            { item: '1ª linha: nitrofurantoína 100 mg 6/6 h (macrocristais) por 5 dias ou fosfomicina trometamol 3 g dose única.', score: 2, ref: 'EAU 2024; RENAME 2024' },
            {
              item: 'SMX-TMP 800/160 mg 12/12 h por 3 dias só se resistência local < 20%; fluoroquinolonas reservadas (efeitos adversos graves — alerta FDA/ANVISA).',
              score: 1,
              ref: 'IDSA 2011 (atualização 2025); FDA Safety Communication'
            },
            {
              item: 'Nitrofurantoína não deve ser usada se TFG < 30 mL/min nem para pielonefrite (não atinge o parênquima renal).',
              score: 1,
              ref: 'UpToDate 2025 — Acute simple cystitis in females'
            }
          ]
        },
        {
          h: 'Prevenção da Recorrência',
          items: [
            {
              item: 'Aumentar ingesta hídrica (+1,5 L/dia reduz recorrência em ~50%), não reter urina, micção pós-coito.',
              score: 1,
              ref: 'Hooton TM et al., JAMA Intern Med 2018'
            },
            {
              item: 'Profilaxia antimicrobiana contínua ou pós-coital quando medidas não farmacológicas falham; metenamina e D-manose como alternativas não antibióticas.',
              score: 1,
              ref: 'EAU Guidelines, 2024'
            }
          ]
        }
      ]
    }
  },

  // NEFROLOGIA — Pielonefrite aguda à direita, adquirida na comunidade, com sepse
  {
    id: 2,
    title: 'Dor nas costas, febre e mal-estar há 2 dias',
    sub: 'Pronto-Socorro — Urgência',
    tema: 'Nefrologia',
    topic: 'Pielonefrite Aguda com Sepse',
    level: 'moderado',
    cardAccent: '#5C6BC0',
    instA: {
      scenario: 'Pronto-socorro de hospital de médio porte. Triagem de risco moderado (amarelo).',
      patient: 'R.O., 34 anos, feminino, auxiliar de enfermagem, G1P1, sem comorbidades.',
      complaint: 'Paciente refere febre alta, calafrios e dor intensa no lado direito das costas há 2 dias. Associa ardência ao urinar e náuseas. Nega gravidez.',
      tasks: [
        'Realize a anamnese dirigida à queixa atual.',
        'Solicite o exame físico pertinente e avalie sinais de gravidade.',
        'Solicite e interprete os exames laboratoriais e de imagem adequados.',
        'Formule a hipótese diagnóstica e os diagnósticos diferenciais.',
        'Defina a conduta inicial e o local de tratamento.',
        'Oriente a paciente sobre o diagnóstico e o seguimento.'
      ]
    },
    instB: {
      vitals: {
        PA: '98/62 mmHg (PAM 74)',
        FC: '112 bpm',
        FR: '22 irpm',
        Tax: '39,2 °C',
        SpO2: '96% em ar ambiente',
        Glasgow: '15',
        Peso: '62 kg',
        Altura: '1,65 m',
        IMC: '22,8 kg/m²'
      },
      physicalGeneral: 'Paciente em estado geral regular, corada, hidratada, anictérica, febril, taquicárdica, com fácies de dor.',
      physicalSeg: 'ABDOME: Plano, doloroso à palpação profunda em flanco e fossa ilíaca direita. Sem defesa ou rigidez | PUNHO-PERCUSSÃO LOMBAR: POSITIVA à direita (dor intensa) | GENITÁLIA EXTERNA: Sem alterações. Sem corrimento vaginal | MEMBROS: Sem edema. TEC < 3s | NEUROLÓGICO: Orientada, responsiva. SNC sem alterações focais',
      labs: [
        { test: 'Hemograma — Leucócitos totais', val: '18.500/mm³', ref: '4.000–11.000', alt: true },
        { test: 'Hemograma — Neutrófilos', val: '85% (desvio à esquerda)', ref: '55–65%', alt: true },
        { test: 'PCR', val: '148 mg/L', ref: '< 5 mg/L', alt: true },
        { test: 'Creatinina', val: '1.4 mg/dL', ref: '0.5–1.1 mg/dL', alt: true },
        { test: 'Ureia', val: '42 mg/dL', ref: '17–42 mg/dL', alt: false },
        { test: 'Sódio', val: '136 mEq/L', ref: '135–145', alt: false },
        { test: 'Potássio', val: '4.1 mEq/L', ref: '3.5–5.0', alt: false },
        { test: 'Lactato', val: '2.3 mmol/L', ref: '< 2.0 mmol/L', alt: true },
        { test: 'Urina tipo 1 — Leucocitúria', val: '+++ (> 50/campo)', ref: '< 5/campo', alt: true },
        { test: 'Urina tipo 1 — Nitrito', val: 'POSITIVO', ref: 'Negativo', alt: true },
        { test: 'Urina tipo 1 — Cilindros leucocitários', val: 'PRESENTES', ref: 'Ausente', alt: true },
        { test: 'Urocultura', val: 'Coletada — resultado em 48-72h', ref: '< 10³ UFC/mL', alt: false },
        { test: 'Hemocultura (2 amostras)', val: 'Coletadas — resultado em 48-72h', ref: 'Negativo', alt: false },
        { test: 'Beta-HCG', val: 'NEGATIVO', ref: 'Negativo', alt: false }
      ],
      image: {
        title: 'Ultrassonografia de Rins e Vias Urinárias',
        report: 'LAUDO — ULTRASSONOGRAFIA DE RINS E VIAS URINÁRIAS\n        \nRim direito: dimensões aumentadas (13,8 cm), com ecotextura heterogênea, edema difuso do parênquima. Sem dilatação pielocalicial. Sem cálculos identificados.\n        \nRim esquerdo: dimensões normais (11,2 cm), ecotextura homogênea preservada.\n\nBexiga: paredes espessadas (>3mm), com conteúdo urinário normal.\n\nCONCLUSÃO: Achados compatíveis com pielonefrite aguda à direita. Sem evidência de abscesso perirrenal ou hidronefrose. Sem litíase identificada.'
      },
      note: 'Entregar os exames laboratoriais e o laudo da USG somente se solicitados. Urocultura e hemoculturas: informar que foram coletadas e que os resultados saem em 48–72 h (E. coli sensível a ceftriaxona e ciprofloxacino). Se o candidato prescrever antibiótico antes de pedir culturas, o avaliador registra a falha.',
      patientProfile: 'R.O., 34 anos, auxiliar de enfermagem em hospital, casada, um filho de 5 anos. Sem comorbidades, sem uso de medicamentos regulares. Teve dois episódios de cistite no passado, tratados sem complicação. Trabalhou ontem mesmo com febre porque "não podia faltar". Preocupa-se com o filho, que ficou com a vizinha.',
      script: [
        {
          trigger: 'Queixa principal',
          speech: 'Tô muito mal, doutor(a). Faz dois dias que tenho febre alta, calafrio, e essa dor nas costas do lado direito tá me matando. Fica pior quando me mexo.'
        },
        { trigger: 'Sobre ardência urinária', speech: 'Sim, tô sentindo ardência pra urinar também, e vou ao banheiro mais vezes que o normal.' },
        { trigger: 'Sobre a intensidade da febre', speech: 'Medi em casa, deu 39,4°C ontem à noite. Tomei dipirona e baixou um pouco, mas voltou.' },
        { trigger: 'Sobre náuseas e vômitos', speech: 'Tô enjoada o tempo todo. Ontem vomitei duas vezes. Não consigo comer quase nada.' },
        { trigger: 'Sobre possível gravidez / DUM', speech: 'Não, não estou grávida, fiz o teste agora há pouco. Menstruei há 3 semanas.' },
        {
          trigger: 'Sobre episódios anteriores de infecção urinária',
          speech: 'Já tive cistite antes, umas 2 vezes, mas nunca assim, com febre e essa dor nas costas.'
        },
        {
          trigger: 'Sobre antecedentes médicos',
          speech: 'Não tenho nenhuma doença crônica. Não operei nada. Não uso remédio regular. Não tenho alergia a remédio que eu saiba.'
        },
        { trigger: 'Sobre vida sexual e ISTs', speech: 'Tenho parceiro fixo, a gente usa preservativo. Nunca tive DST.' },
        { trigger: 'Pergunta ativa — diagnóstico', speech: 'O que eu tenho, doutor(a)? É sério? Vou precisar ficar internada?' },
        { trigger: 'Pergunta ativa — se falarem em sepse', speech: 'Meu Deus, sepse? Mas eu tava bem anteontem. Por que ficou tão grave?' },
        { trigger: 'Sobre diurese', speech: 'Estou urinando menos hoje, acho que porque não consigo beber nada, tudo que eu tomo eu ponho pra fora.' },
        { trigger: 'Sobre medicamentos usados em casa', speech: 'Só dipirona. Não tomei antibiótico nenhum.' }
      ],
      hiddenInfo: 'Vomitou duas vezes e não tolera via oral — só detalha se perguntada sobre náuseas e vômitos | Diurese reduzida hoje — só revela se perguntada sobre volume urinário | Trabalhou febril ontem e está preocupada com o filho — só revela se o candidato perguntar sobre contexto social ou preocupações',
      actorBehavior: 'Paciente prostrada, com fácies de dor, encolhida na maca. Responde com frases curtas e pede algo para a dor. Por ser da área da saúde, assusta-se ao ouvir a palavra "sepse" e pergunta se vai para a UTI. Inicialmente resiste à internação ("não posso deixar meu filho"), mas aceita quando o candidato explica a gravidade com empatia.'
    },
    instC: {
      diagnosis: 'Pielonefrite aguda à direita, adquirida na comunidade, com sepse (disfunção renal: creatinina 1,4 mg/dL; lactato 2,3 mmol/L) — indicação de internação e antibioticoterapia endovenosa.',
      differentials: [
        'Pielonefrite obstrutiva (cálculo) — deve ser excluída por imagem; USG sem hidronefrose e sem litíase',
        'Abscesso renal/perirrenal — considerar se não houver melhora em 48–72 h; USG não mostra coleção',
        'Apendicite aguda retrocecal — dor em flanco/FID com febre; sai pela leucocitúria intensa, cilindros leucocitários e Giordano positivo',
        'Doença inflamatória pélvica — febre e dor abdominal em mulher sexualmente ativa; sai pela ausência de corrimento e dor à mobilização do colo',
        'Colecistite aguda — dor em hipocôndrio direito; sai pela localização lombar e pelo EAS'
      ],
      context: 'Mulher jovem com síndrome de ITU alta: febre, calafrios, dor lombar direita com Giordano positivo, disúria e vômitos. Laboratório com leucocitose com desvio, PCR elevada, leucocitúria intensa com cilindros leucocitários, creatinina acima do basal e lactato discretamente elevado. Taquicardia, taquipneia e PA limítrofe sinalizam sepse: a disfunção orgânica (renal) e a intolerância à via oral indicam internação, culturas e antibiótico EV na primeira hora.',
      justify: 'Pielonefrite: febre + dor lombar + Giordano positivo + EAS com leucocitúria e cilindros leucocitários (patognomônicos de origem renal) + USG com rim direito aumentado e edemaciado. Sepse (Sepsis-3): infecção + disfunção orgânica (aumento de creatinina, lactato > 2). O qSOFA (2 pontos: FR ≥ 22 e PAS ≤ 100) sinaliza risco, mas não deve ser usado isoladamente como triagem (Surviving Sepsis 2021).',
      expectedAnamnesis: 'Febre: início, magnitude, calafrios | Dor lombar: lado, intensidade, irradiação (diferencial com cólica renal) | Sintomas de ITU baixa | Náuseas e vômitos e tolerância à via oral | Volume urinário | Gestação / DUM | Episódios prévios de ITU e uso recente de antibióticos | Alergias | Comorbidades (diabetes, imunossupressão, litíase) | Corrimento vaginal e vida sexual (diferencial com DIP)',
      expectedPhysical: 'Sinais vitais completos com cálculo da PAM | Avaliação da perfusão (TEC, nível de consciência) | Palpação abdominal e sinais de irritação peritoneal | Punho-percussão lombar bilateral (Giordano) | Hidratação',
      expectedExams: [
        {
          exam: 'Urina tipo 1 e urocultura com antibiograma',
          justify: 'Confirmar ITU e guiar antibiótico',
          expected: 'Leucocitúria intensa, nitrito positivo, cilindros leucocitários'
        },
        { exam: 'Hemoculturas (2 amostras) antes do antibiótico', justify: 'Sepse — bacteremia em 15–30%', expected: 'Pendentes' },
        {
          exam: 'Hemograma, PCR, creatinina, ureia, eletrólitos, lactato',
          justify: 'Avaliar gravidade e disfunção orgânica',
          expected: 'Leucocitose com desvio, creatinina 1,4, lactato 2,3'
        },
        { exam: 'Beta-HCG', justify: 'Gestação muda a conduta (pielonefrite na gestação = internação)', expected: 'Negativo' },
        {
          exam: 'USG de rins e vias urinárias',
          justify: 'Excluir obstrução e abscesso em quadro com sepse',
          expected: 'Rim direito aumentado e edemaciado, sem hidronefrose'
        }
      ],
      expectedConduct: 'Internação hospitalar | Coletar urocultura e hemoculturas e iniciar antibiótico EV na primeira hora: ceftriaxona 1–2 g EV 1x/dia (ou ciprofloxacino EV se alergia a betalactâmico e baixa resistência local) | Hidratação venosa com cristaloide balanceado (Ringer lactato) guiada por resposta; 30 mL/kg se hipotensão ou lactato ≥ 4 | Antitérmico, analgesia (dipirona) e antiemético (ondansetrona) | Reavaliar lactato, diurese e sinais vitais; vigiar evolução para choque | Transição para via oral após 24–48 h afebril e tolerando dieta, guiada pelo antibiograma; duração total de 7 dias (fluoroquinolona) a 10–14 dias (betalactâmico oral) | Imagem de controle (TC) se não houver melhora em 48–72 h',
      expectedCommunication: 'Acolher a dor e oferecer analgesia precocemente | Explicar o diagnóstico e o motivo da internação sem alarmismo | Abordar a preocupação com o filho e ajudar a organizar apoio | Explicar os próximos passos (antibiótico na veia, exames, tempo estimado de internação)',
      criticalErrors: [
        'Liberar para tratamento ambulatorial com antibiótico oral paciente com vômitos e sinais de sepse',
        'Prescrever nitrofurantoína ou fosfomicina para pielonefrite',
        'Atrasar o antibiótico além da primeira hora ou não coletar culturas antes de iniciá-lo',
        'Não solicitar exame de imagem para excluir obstrução em pielonefrite com sepse',
        'Não reconhecer taquicardia, taquipneia, aumento de creatinina e lactato como sinais de gravidade'
      ]
    },
    instD: {
      title: 'Pielonefrite Aguda e Sepse de Foco Urinário — Material de Estudo',
      sections: [
        {
          h: 'Definição e Classificação',
          items: [
            {
              item: 'Pielonefrite aguda: infecção do parênquima e da pelve renal; complicada quando há gestação, obstrução, anomalia urológica, cateter, imunossupressão ou sexo masculino.',
              score: 1,
              ref: 'EAU Guidelines on Urological Infections, 2024'
            },
            {
              item: 'Sepse (Sepsis-3): disfunção orgânica ameaçadora à vida (↑ SOFA ≥ 2) causada por resposta desregulada à infecção.',
              score: 1,
              ref: 'Singer M et al., JAMA 2016'
            }
          ]
        },
        {
          h: 'Diagnóstico',
          items: [
            {
              item: 'Tríade: febre + dor lombar/ângulo costovertebral + sintomas urinários; cilindros leucocitários indicam origem renal.',
              score: 1,
              ref: 'Harrison — Medicina Interna, 21ª ed.'
            },
            { item: 'Urocultura sempre; hemoculturas na sepse ou internação, antes do antibiótico.', score: 1, ref: 'Surviving Sepsis Campaign, 2021' },
            { item: 'Imagem (USG ou TC) na sepse, suspeita de obstrução, litíase ou ausência de melhora em 48–72 h.', score: 1, ref: 'EAU Guidelines, 2024' }
          ]
        },
        {
          h: 'Tratamento',
          items: [
            {
              item: 'Internação se: sepse, vômitos, gestação, obstrução, falha ambulatorial, imunossupressão ou dúvida diagnóstica.',
              score: 2,
              ref: 'PCDT ITU — Ministério da Saúde; IDSA'
            },
            { item: 'Antibiótico EV empírico na primeira hora: ceftriaxona 1–2 g/dia; ajustar pelo antibiograma.', score: 2, ref: 'Surviving Sepsis Campaign, 2021' },
            {
              item: 'Duração: 7 dias com fluoroquinolona; 10–14 dias com betalactâmico oral; 7 dias são suficientes em mulheres com boa resposta.',
              score: 1,
              ref: 'UpToDate 2025 — Acute complicated UTI'
            },
            { item: 'Nitrofurantoína e fosfomicina oral não têm nível tecidual renal adequado: contraindicadas na pielonefrite.', score: 1, ref: 'EAU Guidelines, 2024' }
          ]
        },
        {
          h: 'Ressuscitação na Sepse',
          items: [
            {
              item: 'Cristaloide 30 mL/kg nas primeiras 3 h se hipotensão ou lactato ≥ 4 mmol/L; preferir soluções balanceadas.',
              score: 1,
              ref: 'Surviving Sepsis Campaign, 2021'
            },
            { item: 'Reavaliar lactato e perfusão; noradrenalina se PAM < 65 mmHg após volume.', score: 1, ref: 'Surviving Sepsis Campaign, 2021' }
          ]
        }
      ]
    }
  },

  // NEFROLOGIA — Cólica renal por ureterolitíase distal direita: cálculo de 10 mm na junção ureterovesical com hidronefrose, sem sinais de infecção
  {
    id: 3,
    title: 'Dor intensa no lado direito que irradia para a virilha',
    sub: 'Pronto-Socorro — Urgência',
    tema: 'Nefrologia',
    topic: 'Ureterolitíase — Cólica Renal',
    level: 'moderado',
    cardAccent: '#5C6BC0',
    instA: {
      scenario: 'Pronto-socorro de hospital geral. A paciente está visivelmente agitada e com fácies de dor, alternando entre sentar e deitar.',
      patient: 'M.S., 24 anos, feminino, solteira, estudante universitária.',
      complaint: 'Dor intensa no lado direito da barriga, de início súbito há cerca de 24 horas, que irradia para a virilha. Não consegue ficar parada.',
      tasks: [
        'Realize a anamnese dirigida ao caso.',
        'Solicite e interprete o exame físico.',
        'Formule as hipóteses diagnósticas e os diferenciais relevantes.',
        'Solicite e interprete os exames laboratoriais e de imagem adequados.',
        'Prescreva a analgesia e defina a conduta terapêutica.',
        'Oriente a paciente sobre a prevenção de novos episódios.'
      ]
    },
    instB: {
      vitals: { PA: '124/80 mmHg', FC: '104 bpm', FR: '20 irpm', Tax: '37,1 °C', SpO2: '98% em ar ambiente', Peso: '57 kg', Altura: '1,63 m', IMC: '21,4 kg/m²' },
      physicalGeneral: 'Paciente em regular estado geral, agitada, em posição antálgica, com fácies de dor intensa. Afebril.',
      physicalSeg: 'ABDOME: Plano, tenso pela dor, doloroso à palpação profunda em flanco e fossa ilíaca direita. Sem defesa ou rigidez. Peristaltismo presente | PUNHO-PERCUSSÃO LOMBAR (GIORDANO): POSITIVO à direita. Negativo à esquerda | GENITÁLIA EXTERNA: Sem corrimento vaginal. Sem lesões | MEMBROS: Sem edema. Perfusão periférica preservada',
      labs: [
        { test: 'Hemograma — Leucócitos', val: '11.200/mm³', ref: '4.000–11.000', alt: true },
        { test: 'PCR', val: '18 mg/L', ref: '< 5 mg/L', alt: true },
        { test: 'Creatinina', val: '0.9 mg/dL', ref: '0.5–1.1 mg/dL', alt: false },
        { test: 'Sódio', val: '138 mEq/L', ref: '135–145', alt: false },
        { test: 'Potássio', val: '3.8 mEq/L', ref: '3.5–5.0', alt: false },
        { test: 'Urina tipo 1 — Hematúria', val: '+++ (> 50 hemácias/campo)', ref: '< 2/campo', alt: true },
        { test: 'Urina tipo 1 — Leucocitúria', val: 'Traços (2-3/campo)', ref: '< 5/campo', alt: false },
        { test: 'Urina tipo 1 — Nitrito', val: 'NEGATIVO', ref: 'Negativo', alt: false },
        { test: 'Beta-HCG urinário', val: 'NEGATIVO', ref: 'Negativo', alt: false }
      ],
      image: {
        title: 'Exames de Imagem',
        report: 'ULTRASSOM DE ABDOME TOTAL:\nHidronefrose à direita, sem evidência de fator obstrutivo identificável pelo método de imagem. Sem outros achados anormais.\n\n─────────────────────────────────────────\n\nTOMOGRAFIA COMPUTADORIZADA DE ABDOME SEM CONTRASTE:\nHidronefrose à direita, visualizando-se cálculo de 10 mm em junção ureterovesical.\nSem outros achados anormais.\n\nCONCLUSÃO: Ureterolitíase à direita com cálculo de 10 mm em JUV — indicação de avaliação urológica urgente.'
      },
      note: 'Entregar o laudo de USG se solicitada. Entregar a TC sem contraste apenas se o candidato solicitar especificamente. O beta-HCG só é entregue se pedido. Se o candidato prescrever analgesia, a atriz refere melhora parcial da dor após alguns minutos.',
      patientProfile: 'M.S., 24 anos, estudante universitária de Direito, solteira, mora em república. Sem comorbidades, não usa medicamentos. Bebe pouca água, consome muito refrigerante e salgadinhos durante os estudos. Pai teve cálculo renal. Episódio prévio de dor lombar leve que passou sozinho há 1 ano. Muito assustada com a intensidade da dor.',
      script: [
        {
          trigger: 'Queixa principal',
          speech: 'Doutor(a), tô sentindo uma dor horrível aqui no lado direito da barriga que começou do nada umas 24 horas atrás. Tá me matando. Fica como uma cólica que vai e vem, mas não passa. Irradia lá pra virilha e parte interna da coxa.'
        },
        { trigger: 'Sobre intensidade da dor', speech: 'Nossa, é 9 de 10. Não consigo nem ficar parada. Fico tentando achar uma posição mas não tem jeito.' },
        { trigger: 'Sobre febre e calafrios', speech: 'Não tenho febre não. Controlei em casa, tava normal.' },
        { trigger: 'Sobre disúria ou urgência urinária', speech: 'Não, não sinto ardência pra urinar, nem urgência. Não tô indo mais que o normal ao banheiro.' },
        { trigger: 'Sobre a urina', speech: 'Quando a dor começou eu percebi que a urina tava avermelhada, com sangue. Fiquei com muito medo.' },
        { trigger: 'Sobre náuseas', speech: 'Sim, tô enjoada, mas não vomitei ainda.' },
        {
          trigger: 'Sobre episódio parecido anteriormente',
          speech: 'Já tive uma dorzinha parecida uma vez, mas bem mais fraca. Passou sozinha. Nunca fiz exame pra isso.'
        },
        { trigger: 'Sobre corrimento vaginal ou dor pélvica', speech: 'Não, tudo normal nessa parte. Sem corrimento, sem dor na relação.' },
        { trigger: 'Sobre data da última menstruação', speech: 'Menstruei há 7 dias, normal.' },
        { trigger: 'Sobre antecedentes médicos', speech: 'Não tenho doença nenhuma. Nunca operei. Não tomo nenhum remédio. Não tenho alergia que eu saiba.' },
        { trigger: 'Sobre histórico familiar de cálculo renal', speech: 'Meu pai teve pedra no rim uma vez, mas nunca conversamos direito sobre isso.' },
        { trigger: 'Sobre hábitos', speech: 'Bebo muito pouco líquido. Fico o dia todo estudando e às vezes esqueço de tomar água.' },
        { trigger: 'Pergunta ativa — diagnóstico', speech: 'O que eu tenho, doutor(a)? É pedra no rim? Vai precisar operar?' },
        { trigger: 'Pergunta ativa — prevenção', speech: 'Como eu faço pra não ter isso de novo? É muito sofrido.' },
        { trigger: 'Sobre alimentação', speech: 'Eu como muita besteira estudando: salgadinho, miojo, refrigerante. Quase não como fruta.' }
      ],
      hiddenInfo: 'Pai teve cálculo renal — só revela se perguntada sobre história familiar | Episódio prévio de dor lombar leve que passou sozinho — só revela se perguntada sobre episódios anteriores | Dieta rica em sódio e refrigerante, baixa ingesta hídrica — só revela se perguntada sobre hábitos',
      actorBehavior: 'Paciente muito agitada, não para quieta: senta, levanta, deita de lado, segura o flanco direito. Responde entre as ondas de dor e pede remédio. Se o candidato demorar a prescrever analgesia, pergunta várias vezes "vão me dar alguma coisa pra dor?". Acalma-se quando recebe analgesia e explicação.'
    },
    instC: {
      diagnosis: 'Cólica renal por ureterolitíase distal direita: cálculo de 10 mm na junção ureterovesical com hidronefrose, sem sinais de infecção — baixa probabilidade de eliminação espontânea, indicação de avaliação urológica para tratamento ativo.',
      differentials: [
        'Gravidez ectópica rota — principal diferencial em mulher em idade fértil; excluída pelo beta-HCG negativo',
        'Apendicite aguda — dor em FID; sai pela dor em cólica com irradiação para virilha, agitação (e não imobilidade) e hematúria',
        'Pielonefrite / pielonefrite obstrutiva — sai pela ausência de febre, nitrito negativo e leucocitúria normal',
        'Torção ou cisto ovariano roto — dor pélvica súbita; investigar com USG transvaginal se dúvida',
        'Dissecção de aorta / aneurisma — improvável na idade, mas lembrar em pacientes > 50 anos com "cólica renal"'
      ],
      context: 'Mulher jovem, sem comorbidades, com quadro clássico de cólica renal: dor em flanco de início súbito, cólica com irradiação para virilha, hematúria macroscópica e agitação psicomotora. Cálculo de 10mm em JUV: baixa probabilidade de eliminação espontânea (<10% para cálculos >8mm), indicando avaliação urológica urgente para terapia ativa.',
      justify: 'Dor lombar súbita em cólica, irradiada para a virilha, com agitação psicomotora e hematúria macroscópica; EAS com hematúria e sem sinais de infecção; USG com hidronefrose e TC sem contraste (padrão-ouro, sensibilidade > 95%) demonstrando cálculo de 10 mm em JUV direita. Beta-HCG negativo exclui gestação ectópica.',
      expectedAnamnesis: 'Caracterização da dor: início, tipo cólica, intensidade, irradiação, fatores de melhora/piora | Náuseas e vômitos | Febre e calafrios (sinal de infecção associada) | Hematúria, disúria, polaciúria | DUM, atraso menstrual, corrimento, dor pélvica (diferencial ginecológico) | Episódios prévios e história familiar de litíase | Ingesta hídrica e dieta | Comorbidades e medicamentos | Alergias (antes de prescrever AINE/opioide)',
      expectedPhysical: 'Sinais vitais (afebril, taquicardia pela dor) | Palpação abdominal: ausência de irritação peritoneal | Sinal de McBurney / Blumberg (diferencial com apendicite) | Punho-percussão lombar bilateral (Giordano)',
      expectedExams: [
        { exam: 'Beta-HCG', justify: 'Excluir gestação (ectópica) e definir exame de imagem', expected: 'Negativo' },
        { exam: 'Urina tipo 1', justify: 'Hematúria e exclusão de infecção', expected: 'Hematúria +++, nitrito negativo' },
        { exam: 'Hemograma, PCR, creatinina, eletrólitos', justify: 'Função renal e sinais de infecção', expected: 'Creatinina normal, leucocitose leve' },
        {
          exam: 'TC de abdome e pelve sem contraste (baixa dose)',
          justify: 'Padrão-ouro para localizar e medir o cálculo',
          expected: 'Cálculo de 10 mm em JUV direita com hidronefrose'
        },
        { exam: 'USG de rins e vias urinárias', justify: 'Alternativa inicial sem radiação; avalia hidronefrose', expected: 'Hidronefrose direita' }
      ],
      expectedConduct: 'Analgesia imediata: AINE como 1ª escolha (cetoprofeno 100 mg EV ou diclofenaco 75 mg IM), associado a dipirona; opioide (morfina ou tramadol) se dor refratária; antiemético se necessário | Evitar hiper-hidratação forçada (não acelera a eliminação) | Cálculo de 10 mm em ureter distal: baixa chance de eliminação espontânea — encaminhar à urologia para ureteroscopia (ou LECO); terapia expulsiva com tansulosina 0,4 mg/dia pode ser oferecida a cálculos distais > 5 mm enquanto aguarda | Critérios de intervenção urgente: febre/infecção, rim único, dor refratária, IRA | Coar a urina e enviar o cálculo para análise | Prevenção: ingesta hídrica para diurese > 2,5 L/dia, sódio < 2 g/dia, reduzir proteína animal e refrigerantes à base de cola, manter cálcio dietético normal; estudo metabólico se recorrência',
      expectedCommunication: 'Priorizar o alívio da dor antes da anamnese extensa | Explicar o diagnóstico ("pedra que desceu do rim e está presa no canal da urina") | Explicar por que precisa de avaliação do urologista e o que pode ser feito | Orientar sinais de alarme: febre, vômitos incoercíveis, parada da urina | Orientar prevenção de forma prática',
      criticalErrors: [
        'Não solicitar beta-HCG em mulher em idade fértil com dor abdominal',
        'Liberar a paciente sem analgesia adequada',
        'Prescrever antibiótico sem evidência de infecção',
        'Não encaminhar à urologia um cálculo de 10 mm (baixa chance de eliminação espontânea)',
        'Não orientar sinais de alarme (febre = pielonefrite obstrutiva, emergência)'
      ]
    },
    instD: {
      title: 'Litíase Urinária — Cólica Renal — Material de Estudo',
      sections: [
        {
          h: 'Epidemiologia',
          items: [
            {
              item: 'Prevalência de 5–10%, pico entre 30 e 50 anos, recorrência de ~50% em 5–10 anos; cálculos de oxalato de cálcio são os mais comuns (~80%).',
              score: 1,
              ref: 'EAU Guidelines on Urolithiasis, 2024'
            }
          ]
        },
        {
          h: 'Diagnóstico',
          items: [
            {
              item: 'Dor súbita em flanco em cólica, irradiada para virilha/genitália, com agitação psicomotora; hematúria em ~90%.',
              score: 1,
              ref: 'Harrison — Medicina Interna, 21ª ed.'
            },
            {
              item: 'TC sem contraste (baixa dose) é o padrão-ouro; USG é a primeira escolha em gestantes, crianças e como triagem.',
              score: 2,
              ref: 'EAU Guidelines on Urolithiasis, 2024'
            },
            { item: 'Beta-HCG obrigatório em mulheres em idade fértil.', score: 1, ref: 'EAU Guidelines, 2024' }
          ]
        },
        {
          h: 'Tratamento',
          items: [
            {
              item: 'AINEs são a primeira escolha para analgesia (menor necessidade de resgate que opioides); dipirona e opioides como associação/resgate.',
              score: 2,
              ref: 'EAU Guidelines, 2024; Cochrane 2015'
            },
            { item: 'Eliminação espontânea: ~95% se < 4 mm, ~50% entre 5–10 mm, < 20% se > 10 mm.', score: 1, ref: 'UpToDate 2025 — Kidney stones in adults' },
            { item: 'Terapia expulsiva com alfabloqueador (tansulosina) beneficia cálculos de ureter distal > 5 mm.', score: 1, ref: 'EAU Guidelines, 2024' },
            { item: 'Descompressão urgente (duplo J ou nefrostomia) se obstrução + infecção, rim único obstruído ou IRA.', score: 2, ref: 'EAU Guidelines, 2024' }
          ]
        },
        {
          h: 'Prevenção',
          items: [
            {
              item: 'Ingesta hídrica para diurese > 2,5 L/dia, restrição de sódio e proteína animal, manter ingestão normal de cálcio (1–1,2 g/dia).',
              score: 1,
              ref: 'EAU Guidelines, 2024; AUA Guideline 2019'
            }
          ]
        }
      ]
    }
  },

  // UROLOGIA — Choque séptico de foco urinário por pielonefrite obstrutiva esquerda
  {
    id: 4,
    title: 'Homem com dor lombar intensa, febre e cólica desde ontem',
    sub: 'Pronto-Socorro — Alta complexidade',
    tema: 'Urologia',
    topic: 'Pielonefrite Obstrutiva — Choque Séptico',
    level: 'difícil',
    cardAccent: '#1565C0',
    instA: {
      scenario: 'Pronto-socorro de hospital terciário. Paciente encaminhado pela UBS com queixa de dor intensa em flanco esquerdo há ~18 horas, associada a febre.',
      patient: 'A.M., 48 anos, masculino, motorista de caminhão, hipertenso em uso de losartana.',
      complaint: 'Dor em flanco esquerdo de início súbito há cerca de 18 horas, tipo cólica, com irradiação para a virilha. Desde a madrugada apresenta febre alta e calafrios. Nega ITU anterior.',
      tasks: [
        'Realize a anamnese dirigida ao quadro atual.',
        'Solicite o exame físico pertinente e reconheça os sinais de gravidade.',
        'Solicite os exames laboratoriais e de imagem adequados.',
        'Formule a hipótese diagnóstica e os diagnósticos diferenciais.',
        'Defina a conduta de emergência, justificando cada prioridade.',
        'Comunique ao paciente o diagnóstico e a conduta.'
      ]
    },
    instB: {
      vitals: {
        PA: '88/56 mmHg (PAM 67)',
        FC: '126 bpm',
        FR: '24 irpm',
        Tax: '39,8 °C',
        SpO2: '94% em ar ambiente',
        Glasgow: '14',
        Peso: '82 kg',
        Altura: '1,74 m',
        IMC: '27,1 kg/m²'
      },
      physicalGeneral: 'Paciente em mau estado geral, pálido, diaforético, taquicárdico, febril, com fácies de dor e prostração. Fala entrecortada.',
      physicalSeg: 'ABDOME: Distendido levemente, doloroso em flanco esquerdo. Sem rigidez abdominal. RHA diminuídos | PUNHO-PERCUSSÃO LOMBAR: POSITIVO intensamente à esquerda. Negativo à direita | MEMBROS: TEC 4s (aumentado). Extremidades frias e pegajosas | NEUROLÓGICO: Sonolento, responsivo ao chamado. Glasgow 14 (desorientação temporal)',
      labs: [
        { test: 'Leucócitos totais', val: '22.400/mm³ (desvio à esq., blastos)', ref: '4.000–11.000', alt: true },
        { test: 'PCR', val: '312 mg/L', ref: '< 5 mg/L', alt: true },
        { test: 'Creatinina', val: '3.2 mg/dL (BASAL: 0.9 conforme referido)', ref: '0.7–1.2 mg/dL', alt: true },
        { test: 'Ureia', val: '88 mg/dL', ref: '17–42 mg/dL', alt: true },
        { test: 'Sódio', val: '132 mEq/L', ref: '135–145', alt: true },
        { test: 'Potássio', val: '5.6 mEq/L', ref: '3.5–5.0', alt: true },
        { test: 'Lactato', val: '5.8 mmol/L', ref: '< 2.0 mmol/L', alt: true },
        { test: 'EAS — Leucocitúria', val: '+++ (campo cheio)', ref: '< 5/campo', alt: true },
        { test: 'EAS — Nitrito', val: 'POSITIVO', ref: 'Negativo', alt: true },
        { test: 'EAS — Hematúria', val: '++ (20-30/campo)', ref: '< 2/campo', alt: true },
        { test: 'Urocultura + Hemocultura', val: 'Coletadas — resultado pendente', ref: '—', alt: false }
      ],
      image: {
        title: 'TC de Abdome e Pelve sem Contraste — URGÊNCIA',
        report: 'LAUDO — TOMOGRAFIA COMPUTADORIZADA DE ABDOME E PELVE SEM CONTRASTE\n\nRim esquerdo: HIDRONEFROSE GRAU III à esquerda. Cálculo de 8mm em ureter proximal esquerdo (U1), imediatamente abaixo da junção ureteropélvica. Espessamento da gordura perirrenal compatível com processo inflamatório/infeccioso periférico. Sem abscesso perirrenal identificado.\n\nRim direito: dimensões normais, ecotextura homogênea. Sem dilatação pielocalicial.\n\nBexiga: adequadamente repleta. Sem alterações endoluminais.\n\nCONCLUSÃO:\n— Ureterolitíase proximal esquerda (8mm em U1) com hidronefrose grau III\n— Achados compatíveis com pielonefrite obstrutiva à esquerda\n— EMERGÊNCIA UROLÓGICA: indicação de descompressão urgente da via urinária'
      },
      note: 'Entregar laboratório e TC apenas se solicitados. Se o candidato prescrever volume, informar que após 2 L de cristaloide a PA está 84/50 mmHg (PAM 61) — o candidato deve indicar noradrenalina. Diurese na sondagem: 20 mL na última hora. ECG (se solicitado): taquicardia sinusal, sem alterações de onda T.',
      patientProfile: 'A.M., 48 anos, motorista de caminhão, casado, dois filhos. Hipertenso em uso de losartana 50 mg/dia. Passa longos períodos sem beber água e segurando a urina nas viagens. Irmão teve cálculo renal. Usou ibuprofeno em casa ontem. Nunca teve infecção urinária.',
      script: [
        {
          trigger: 'Queixa principal',
          speech: 'Doutor(a), tô muito mal. Essa dor começou ontem no lado esquerdo, tô com febre alta desde a madrugada e tô me sentindo cada vez pior. A dor foi acalmando um pouco, mas agora tô sem força nenhuma.'
        },
        {
          trigger: 'Sobre a melhora relativa da cólica',
          speech: 'É... estranhamente a dor da cólica diminuiu um pouco, mas fiquei pior do resto. Tô aqui sem força, suando frio.'
        },
        { trigger: 'Sobre febre e calafrios', speech: 'Sim, febre alta, medindo quase 40 em casa. E tô com muito calafrio, tremendo.' },
        { trigger: 'Sobre a urina', speech: 'Ontem tava com sangue, mas agora tô urinando menos, quase nada.' },
        {
          trigger: 'Sobre antecedentes',
          speech: 'Tenho pressão alta, tomo losartana 50mg por dia. Nunca tive problema no rim antes. Às vezes tenho dor nas costas, mas achava que era do trabalho de motorista.'
        },
        {
          trigger: 'Sobre uso de anti-inflamatório ou dipirona',
          speech: 'Tomei ibuprofeno em casa ontem, mas não ajudou. Depois tomei dipirona mas também não melhorou.'
        },
        { trigger: 'Sobre histórico familiar de cálculo renal', speech: 'Meu irmão teve pedra no rim, sim.' },
        { trigger: 'Pergunta ativa — gravidade', speech: 'Doutor(a), tô com muito medo. Isso é grave? Vou ficar bom?' },
        { trigger: 'Sobre hábitos no trabalho', speech: 'Na estrada eu quase não bebo água, pra não ter que parar. Às vezes fico 8 horas sem urinar.' },
        { trigger: 'Sobre alergias', speech: 'Alergia a remédio não tenho não.' }
      ],
      hiddenInfo: 'A cólica melhorou, mas ele piorou do resto — só revela se perguntado sobre a evolução da dor | Está urinando quase nada desde a manhã — só revela se perguntado sobre diurese | Tomou ibuprofeno em casa e usa losartana (nefrotóxicos em contexto de IRA) — só revela se perguntado sobre medicamentos',
      actorBehavior: 'Paciente prostrado, suando frio, fala devagar e às vezes se confunde com o dia da semana. Tem dificuldade de manter a atenção. Demonstra medo ("vou morrer, doutor?"). Se o candidato demorar a agir, fica mais sonolento. Acalma-se com explicação objetiva e segura.'
    },
    instC: {
      diagnosis: 'Choque séptico de foco urinário por pielonefrite obstrutiva esquerda (cálculo de 8 mm em ureter proximal com hidronefrose grau III), com lesão renal aguda e hipercalemia — emergência urológica com indicação de descompressão urgente da via urinária.',
      differentials: [
        'Pielonefrite aguda não obstrutiva — sai pela hidronefrose e cálculo demonstrados na TC',
        'Abscesso renal/perirrenal — TC sem coleção; reavaliar se não houver melhora após drenagem',
        'Pancreatite aguda / colecistite com sepse — sai pela clínica de cólica renal, EAS infeccioso e TC',
        'Ruptura de aneurisma de aorta abdominal — choque com dor lombar em homem > 45 anos; sai pela febre, EAS e TC',
        'Pielonefrite enfisematosa — mais comum em diabéticos; TC sem gás no parênquima'
      ],
      context: 'Homem de meia-idade com cálculo ureteral proximal obstruindo o rim esquerdo e levando a infecção suprajacente (pielonefrite obstrutiva). Evolução para choque séptico: PA 88/56 + FC 126 + lactato 5.8 + Glasgow 14 + IRA (creatinina 3.2). Esta é uma EMERGÊNCIA CIRÚRGICA/UROLÓGICA: antibiótico EV + descompressão urgente da via urinária (cateter JJ duplo J ou nefrostomia percutânea) são obrigatórios. O cálculo em si NÃO deve ser retirado neste momento de instabilidade.',
      justify: 'Choque séptico (Sepsis-3): hipotensão que exige vasopressor para PAM ≥ 65 após volume + lactato > 2 mmol/L. Disfunções: cardiovascular, renal (creatinina 3,2 com oligúria), neurológica (Glasgow 14). Foco: obstrução ureteral com infecção a montante na TC. Rim obstruído e infectado não se esteriliza só com antibiótico — exige drenagem.',
      expectedAnamnesis: 'Evolução da dor (melhora da cólica com piora sistêmica) | Febre, calafrios, prostração | Diurese e oligúria | Hematúria | Medicamentos em uso (losartana, AINE) | Comorbidades (diabetes, imunossupressão) | Episódios prévios de litíase e história familiar | Alergias',
      expectedPhysical: 'Sinais vitais completos com PAM | Perfusão periférica (TEC, extremidades, livedo) | Nível de consciência (Glasgow) | Palpação abdominal e Giordano | Avaliação de volemia',
      expectedExams: [
        { exam: 'Lactato, gasometria arterial', justify: 'Gravidade e perfusão', expected: 'Lactato 5,8 mmol/L, acidose metabólica' },
        { exam: 'Hemoculturas (2 amostras) e urocultura', justify: 'Antes do antibiótico, sem atrasá-lo', expected: 'Pendentes' },
        { exam: 'Hemograma, PCR, creatinina, ureia, sódio, potássio', justify: 'Disfunções orgânicas e hipercalemia', expected: 'Leucocitose, creatinina 3,2, K 5,6' },
        { exam: 'ECG', justify: 'Hipercalemia', expected: 'Taquicardia sinusal' },
        {
          exam: 'TC de abdome sem contraste (ou USG à beira-leito se instável)',
          justify: 'Confirmar obstrução e localizar cálculo',
          expected: 'Cálculo de 8 mm em ureter proximal com hidronefrose grau III'
        }
      ],
      expectedConduct: 'Pacote da primeira hora: dois acessos calibrosos, monitorização, culturas e antibiótico EV de amplo espectro imediato (ceftriaxona 2 g ou piperacilina-tazobactam 4,5 g 6/6 h se risco de resistência) | Cristaloide balanceado 30 mL/kg nas primeiras 3 h com reavaliação | Noradrenalina para PAM ≥ 65 mmHg se hipotensão persistir após volume (pode iniciar em acesso periférico) | Sondagem vesical e controle de diurese horária | Acionar urologia para descompressão urgente da via urinária: cateter ureteral duplo J ou nefrostomia percutânea | NÃO tratar o cálculo na fase aguda (ureteroscopia/LECO após resolução da infecção) | Suspender losartana e AINE; tratar hipercalemia conforme ECG e níveis | Internação em UTI | Ajustar antibiótico por culturas; duração de 7–14 dias',
      expectedCommunication: 'Comunicação objetiva e tranquilizadora, sem minimizar a gravidade | Explicar a necessidade do procedimento de desobstrução | Informar a família sobre a gravidade e a ida para a UTI | Obter consentimento para o procedimento',
      criticalErrors: [
        'Não reconhecer o choque séptico (hipotensão + lactato elevado + disfunção orgânica)',
        'Não acionar a urologia para descompressão urgente da via urinária',
        'Atrasar o antibiótico (> 1 h) aguardando exames ou culturas',
        'Indicar litotripsia ou ureteroscopia para retirar o cálculo na fase aguda com infecção',
        'Manter losartana/AINE ou não monitorar diurese e potássio em paciente com IRA'
      ]
    },
    instD: {
      title: 'Pielonefrite Obstrutiva — Emergência Urológica — Material de Estudo',
      sections: [
        {
          h: 'Definição e Gravidade',
          items: [
            {
              item: 'Infecção a montante de obstrução urinária: urossepse com mortalidade elevada se não houver drenagem.',
              score: 1,
              ref: 'EAU Guidelines on Urological Infections, 2024'
            },
            {
              item: 'Choque séptico: necessidade de vasopressor para PAM ≥ 65 mmHg e lactato > 2 mmol/L apesar de volume adequado.',
              score: 1,
              ref: 'Singer M et al., JAMA 2016 (Sepsis-3)'
            }
          ]
        },
        {
          h: 'Reconhecimento',
          items: [
            { item: 'Cólica renal + febre/calafrios = obstrução infectada até prova em contrário.', score: 2, ref: 'EAU Guidelines on Urolithiasis, 2024' },
            { item: 'Melhora da cólica com piora sistêmica não é sinal de resolução.', score: 1, ref: 'UpToDate 2025 — Kidney stones: acute management' }
          ]
        },
        {
          h: 'Conduta',
          items: [
            {
              item: 'Antibiótico EV de amplo espectro na primeira hora + cristaloide 30 mL/kg; noradrenalina como vasopressor de primeira linha.',
              score: 2,
              ref: 'Surviving Sepsis Campaign, 2021'
            },
            { item: 'Descompressão urgente: nefrostomia percutânea ou cateter duplo J têm eficácia semelhante.', score: 2, ref: 'EAU Guidelines on Urolithiasis, 2024' },
            { item: 'Tratamento definitivo do cálculo só após resolução da sepse.', score: 1, ref: 'EAU Guidelines on Urolithiasis, 2024' }
          ]
        },
        {
          h: 'Complicações',
          items: [
            { item: 'LRA com hipercalemia: suspender nefrotóxicos (IECA/BRA, AINE), monitorar ECG e potássio.', score: 1, ref: 'KDIGO Acute Kidney Injury Guideline' }
          ]
        }
      ]
    }
  }
];

export const endocrineStations = [
  // ENDOCRINOLOGIA — Hipotireoidismo primário manifesto por tireoidite de Hashimoto
  {
    id: 5,
    title: 'Cansaço progressivo, ganho de peso e queda de cabelo',
    sub: 'UBS — Atenção Primária',
    tema: 'Endocrinologia',
    topic: 'Hipotireoidismo Primário — Tireoidite de Hashimoto',
    level: 'fácil',
    cardAccent: '#FF7043',
    instA: {
      scenario: 'Você está no ambulatório de clínica médica de uma UBS.',
      patient: 'M.S.A., 52 anos, sexo feminino, comerciante.',
      complaint: 'Paciente relata cansaço progressivo há 6 meses, ganho de peso de 8 kg e queda de cabelo.',
      tasks: [
        'Realize a anamnese dirigida à queixa.',
        'Solicite o exame físico pertinente, incluindo a tireoide.',
        'Formule a hipótese diagnóstica e os diferenciais.',
        'Solicite e interprete os exames complementares.',
        'Prescreva o tratamento e oriente a paciente sobre o uso correto da medicação e o seguimento.'
      ]
    },
    instB: {
      vitals: { PA: '130/85 mmHg', FC: '58 bpm', FR: '14 irpm', Tax: '35,8 °C', Peso: '78 kg', Altura: '1,62 m', IMC: '29,7 kg/m²' },
      physicalGeneral: 'Fácies com edema periorbitário discreto, expressão apática; pele seca, fria e descamativa; cabelos quebradiços e rarefação difusa; unhas quebradiças; mucosas coradas e hidratadas.',
      physicalSeg: 'Tireoide: volume normal, consistência fibroelástica, móvel à deglutição, sem nódulos palpáveis | Cardiovascular: RCR 2T, BNF, sem sopros; pulsos periféricos simétricos e de amplitude reduzida | Respiratório: MV presente bilateralmente, sem RA | Abdome: plano, flácido, RHA presentes, indolor à palpação, sem visceromegalias | Membros: edema 1+/4+ em membros inferiores até tornozelos; reflexo aquileu com fase de relaxamento lentificada bilateralmente',
      labs: [
        { test: 'TSH', val: '18,5 μUI/mL', ref: '0,4–4,0 μUI/mL', alt: true },
        { test: 'T4 livre', val: '0,6 ng/dL', ref: '0,8–1,8 ng/dL', alt: true },
        { test: 'Anti-TPO', val: '485 UI/mL', ref: '< 35 UI/mL', alt: true },
        { test: 'Hemoglobina', val: '11,2 g/dL (VCM 92 fL)', ref: '12,0–16,0 g/dL', alt: true },
        { test: 'Colesterol total', val: '268 mg/dL', ref: '< 190 mg/dL', alt: true },
        { test: 'LDL-c', val: '178 mg/dL', ref: '< 130 mg/dL', alt: true },
        { test: 'CPK', val: '310 U/L', ref: '26–192 U/L', alt: true },
        { test: 'Sódio', val: '137 mEq/L', ref: '135–145 mEq/L', alt: false },
        { test: 'Glicemia de jejum', val: '92 mg/dL', ref: '70–99 mg/dL', alt: false },
        { test: 'Creatinina', val: '1,1 mg/dL', ref: '0,6–1,2 mg/dL', alt: false }
      ],
      note: 'Entregar os exames apenas se o candidato solicitar TSH/T4 livre. Anti-TPO só é entregue se pedido. Não há exames de imagem.',
      patientProfile: 'M.S.A., 52 anos, comerciante (tem uma loja de roupas), casada, dois filhos adultos. Hipertensa em uso de losartana 50 mg/dia. Ainda menstrua de forma irregular. A mãe teve "problema de tireoide" e tomava um comprimido pela manhã. Não fuma, não bebe. Toma suplemento de cálcio e ferro por conta própria, "para o cabelo". Atribuía o cansaço à idade e ao trabalho.',
      script: [
        { trigger: 'Queixa principal', speech: 'Doutora, estou muito cansada há uns 6 meses, não tenho vontade de fazer nada.' },
        { trigger: 'Quando perguntado sobre ganho de peso', speech: 'Engordei 8 quilos nesse tempo, mesmo comendo igual.' },
        { trigger: 'Sobre temperatura', speech: 'Sinto muito frio, preciso usar casaco quando todo mundo está de manga curta.' },
        { trigger: 'Sobre intestino', speech: 'Estou muito presa, vou ao banheiro 2 vezes por semana só.' },
        { trigger: 'Sobre cabelo', speech: 'Meu cabelo está caindo muito, está ralo e quebradiço.' },
        { trigger: 'Sobre pele', speech: 'A pele ficou muito seca, principalmente nas pernas.' },
        { trigger: 'Sobre ciclo menstrual', speech: 'Minha menstruação sempre foi desregulada, agora está vindo de 2 em 2 meses, mais forte.' },
        { trigger: 'Antecedentes', speech: 'Tenho pressão alta controlada com losartana.' },
        { trigger: 'História familiar', speech: 'Minha mãe teve problema na tireoide, tomava um remedinho.' },
        { trigger: 'Perguntas do paciente', speech: 'O que eu tenho, doutora? É grave? Tem cura? Vou precisar tomar remédio sempre?' },
        { trigger: 'Sobre memória e humor', speech: 'Ando esquecida, lenta pra pensar. E meio desanimada, sem paciência.' },
        {
          trigger: 'Sobre medicamentos e suplementos',
          speech: 'Além da losartana, tomo um cálcio e um sulfato ferroso que comprei na farmácia, junto com o café da manhã.'
        }
      ],
      hiddenInfo: 'Toma cálcio e sulfato ferroso junto com o café da manhã (interferem na absorção da levotiroxina) — só revela se perguntada sobre medicamentos/suplementos | Esquecimento e desânimo — só revela se perguntada sobre memória ou humor | Mãe com doença tireoidiana — só revela se perguntada sobre família',
      actorBehavior: 'Paciente lentificada, fala devagar e em tom baixo, parece cansada. Colabora, mas responde de forma breve. Demonstra alívio ao saber que há tratamento e preocupação em "tomar remédio pra sempre". Pergunta se vai emagrecer com o remédio.'
    },
    instC: {
      diagnosis: 'Hipotireoidismo primário manifesto por tireoidite de Hashimoto (TSH 18,5, T4 livre baixo, anti-TPO positivo), com dislipidemia secundária e anemia leve normocítica.',
      differentials: [
        'Hipotireoidismo subclínico — sai porque o T4 livre está baixo (forma manifesta)',
        'Hipotireoidismo central — sai pelo TSH elevado (no central, TSH baixo ou inapropriadamente normal)',
        'Depressão — fadiga e desânimo; sai pelos achados clínicos e laboratoriais de hipotireoidismo',
        'Fase de recuperação de tireoidite subaguda/indolor — TSH transitoriamente alto; sai pela evolução longa e anti-TPO muito elevado',
        'Insuficiência adrenal associada (síndrome poliglandular) — investigar se hipotensão, hiperpigmentação ou hiponatremia'
      ],
      context: 'Mulher de 52 anos com sintomas clássicos de hipotireoidismo: astenia progressiva, ganho de peso, intolerância ao frio, alterações de pele e cabelo, bradicardia, edema e lentificação do reflexo aquileu. Exames confirmam TSH elevado, T4 livre baixo e anti-TPO positivo, compatíveis com tireoidite autoimune.',
      justify: 'Quadro clínico típico (astenia, ganho de peso, intolerância ao frio, constipação, pele seca, bradicardia, hipotermia, edema e relaxamento lento do reflexo aquileu) com TSH elevado e T4 livre baixo — hipotireoidismo primário manifesto. Anti-TPO positivo define a etiologia autoimune (Hashimoto), a causa mais comum em regiões com iodo suficiente.',
      expectedAnamnesis: 'Duração e evolução da astenia | Ganho de peso | Intolerância ao frio | Constipação | Alterações de pele, cabelo e unhas | Alterações menstruais | Memória, humor e sonolência | Antecedentes (radioiodo, cirurgia cervical, amiodarona, lítio) | Medicamentos e suplementos (cálcio, ferro, IBP) | História familiar de tireoidopatia e autoimunidade | Doença coronariana (define a dose inicial)',
      expectedPhysical: 'Sinais vitais (bradicardia, hipotermia, PA diastólica) | Palpação da tireoide | Pele, fâneros e edema periorbitário | Edema de membros (não depressível) | Reflexo aquileu com fase de relaxamento lentificada',
      expectedExams: [
        { exam: 'TSH', justify: 'Exame inicial de rastreio', expected: 'Elevado (18,5)' },
        { exam: 'T4 livre', justify: 'Diferenciar manifesto de subclínico', expected: 'Baixo (0,6)' },
        { exam: 'Anti-TPO', justify: 'Etiologia autoimune', expected: 'Positivo' },
        { exam: 'Perfil lipídico, hemograma, CPK, sódio', justify: 'Repercussões do hipotireoidismo', expected: 'LDL elevado, anemia leve, CPK elevada' },
        { exam: 'USG de tireoide', justify: 'Apenas se nódulo palpável ou bócio — não é rotina', expected: 'Não indicada neste caso' }
      ],
      expectedConduct: 'Farmacológica: levotiroxina em dose plena estimada de 1,6 mcg/kg/dia (≈ 100–125 mcg/dia) por ser < 60 anos e sem doença coronariana; iniciar com 25–50 mcg e titular em idosos ou cardiopatas | Tomar em jejum, com água, 30–60 min antes do café, sem associar cálcio, ferro ou café (separar ≥ 4 h) | Repetir TSH em 6–8 semanas e ajustar 12,5–25 mcg até TSH na faixa normal | Reavaliar perfil lipídico após eutireoidismo antes de decidir por estatina | Orientações: tratamento contínuo, melhora dos sintomas em semanas, perda de peso modesta (o ganho é sobretudo retenção hídrica), comunicar se palpitações ou insônia (excesso de dose); planejar gestação com ajuste de dose',
      expectedCommunication: 'Explicar o diagnóstico em linguagem acessível | Desmistificar o uso contínuo da medicação | Ensinar a forma correta de tomar a levotiroxina | Combinar o retorno com exame | Verificar a compreensão (pedir para a paciente repetir as orientações)',
      criticalErrors: [
        'Não solicitar TSH como exame inicial',
        'Iniciar levotiroxina sem confirmação laboratorial',
        'Não orientar o uso em jejum e o intervalo em relação a cálcio, ferro e café',
        'Prescrever estatina de imediato sem antes tratar o hipotireoidismo e reavaliar o perfil lipídico',
        'Solicitar USG de tireoide de rotina sem nódulo ou bócio'
      ]
    },
    instD: {
      title: 'Hipotireoidismo Primário — Material de Estudo',
      sections: [
        {
          h: 'Definição e Etiologia',
          items: [
            {
              item: 'Tireoidite de Hashimoto é a causa mais comum em áreas com iodo suficiente; outras: pós-radioiodo, pós-tireoidectomia, amiodarona, lítio, inibidores de checkpoint.',
              score: 1,
              ref: 'Chaker L et al., Lancet 2017'
            },
            { item: 'Hipotireoidismo manifesto: TSH ↑ e T4L ↓; subclínico: TSH ↑ com T4L normal.', score: 1, ref: 'SBEM — Consenso de Hipotireoidismo, 2013/2023' }
          ]
        },
        {
          h: 'Diagnóstico',
          items: [
            { item: 'TSH é o melhor exame inicial; T4 livre confirma; anti-TPO define autoimunidade.', score: 2, ref: 'ATA Guidelines for Hypothyroidism, 2014' },
            {
              item: 'Achados associados: hipercolesterolemia, anemia, CPK elevada, hiponatremia, hiperprolactinemia leve.',
              score: 1,
              ref: 'Harrison — Medicina Interna, 21ª ed.'
            }
          ]
        },
        {
          h: 'Tratamento',
          items: [
            {
              item: 'Levotiroxina 1,6 mcg/kg/dia em adultos jovens sem cardiopatia; 25–50 mcg/dia com titulação lenta em idosos e coronariopatas.',
              score: 2,
              ref: 'ATA Guidelines, 2014; SBEM'
            },
            { item: 'Tomar em jejum, 30–60 min antes do café; cálcio, ferro, IBP e soja reduzem absorção.', score: 1, ref: 'ATA Guidelines, 2014' },
            { item: 'Controle de TSH 6–8 semanas após início ou ajuste; meta: TSH na faixa de referência.', score: 1, ref: 'ATA Guidelines, 2014' }
          ]
        },
        {
          h: 'Situações Especiais',
          items: [
            {
              item: 'Gestação: aumentar a dose em ~25–30% logo ao confirmar a gravidez; meta de TSH trimestre-específica.',
              score: 1,
              ref: 'ATA Thyroid and Pregnancy Guidelines, 2017'
            },
            { item: 'Coma mixedematoso: emergência — levotiroxina EV + hidrocortisona até excluir insuficiência adrenal.', score: 1, ref: 'ATA Guidelines, 2014' }
          ]
        }
      ]
    }
  },

  // ENDOCRINOLOGIA — Síndrome dos ovários policísticos
  {
    id: 6,
    title: 'Ausência de menstruação há 5 meses e ganho de peso progressivo',
    sub: 'Ambulatório de Ginecologia — Hospital Secundário',
    tema: 'Endocrinologia',
    topic: 'Síndrome dos Ovários Policísticos',
    level: 'moderado',
    cardAccent: '#FF7043',
    instA: {
      scenario: 'Você está no ambulatório de ginecologia de um hospital secundário.',
      patient: 'J.C.S., 28 anos, sexo feminino, professora.',
      complaint: 'Refere ausência de menstruação há 5 meses e ganho de peso progressivo.',
      tasks: [
        'Realize a anamnese ginecológica e endócrina dirigida.',
        'Solicite o exame físico pertinente.',
        'Formule as principais hipóteses diagnósticas e os diferenciais.',
        'Solicite e interprete os exames complementares adequados.',
        'Proponha o tratamento conforme os objetivos da paciente e oriente-a.'
      ]
    },
    instB: {
      vitals: { PA: '125/80 mmHg', FC: '78 bpm', FR: '16 irpm', Peso: '82 kg', Altura: '1,58 m', IMC: '32,8 kg/m²', 'Circunferência abdominal': '98 cm' },
      physicalGeneral: 'Acne facial e mandibular; hirsutismo com pelos grossos em mento, periareolar e linha alba; acantose nigricans cervical e axilar; obesidade centrípeta.',
      physicalSeg: 'PELE: acne inflamatória em face e região mandibular; hirsutismo (escore de Ferriman-Gallwey modificado = 14) com pelos terminais em mento, buço, região periareolar e linha alba; acantose nigricans cervical e axilar | MAMAS: simétricas, sem nódulos, sem galactorreia à expressão | ABDOME: globoso, obesidade central, sem massas palpáveis | GENITÁLIA EXTERNA: sem clitoromegalia; pilificação em padrão masculino | TIREOIDE: sem alterações à palpação',
      labs: [
        { test: 'β-HCG sérico', val: '< 2 mUI/mL', ref: '< 5 mUI/mL (não grávida)', alt: false },
        { test: 'TSH', val: '2,3 μUI/mL', ref: '0,4–4,0 μUI/mL', alt: false },
        { test: 'Prolactina', val: '18 ng/mL', ref: '< 25 ng/mL', alt: false },
        { test: '17-OH-progesterona (fase folicular)', val: '1,1 ng/mL', ref: '< 2 ng/mL', alt: false },
        { test: 'FSH', val: '4,2 mUI/mL', ref: '3–10 mUI/mL', alt: false },
        { test: 'LH', val: '14,8 mUI/mL', ref: '2–10 mUI/mL', alt: true },
        { test: 'Testosterona total', val: '82 ng/dL', ref: '14–76 ng/dL', alt: true },
        { test: 'DHEA-S', val: '285 μg/dL', ref: '35–430 μg/dL', alt: false },
        { test: 'Glicemia de jejum', val: '108 mg/dL', ref: '70–99 mg/dL', alt: true },
        { test: 'TOTG 75 g — 2 h', val: '168 mg/dL', ref: '< 140 mg/dL', alt: true },
        { test: 'HbA1c', val: '5,9%', ref: '< 5,7%', alt: true },
        { test: 'Triglicerídeos', val: '198 mg/dL', ref: '< 150 mg/dL', alt: true },
        { test: 'HDL-c', val: '38 mg/dL', ref: '> 50 mg/dL (mulheres)', alt: true },
        { test: 'LDL-c', val: '128 mg/dL', ref: '< 130 mg/dL', alt: false }
      ],
      image: {
        title: 'Ultrassom Transvaginal',
        report: 'Útero em anteversoflexão, volume 88 cm³, endométrio 14 mm homogêneo. Ovário direito com múltiplos folículos periféricos (12 folículos de 2-9 mm). Ovário esquerdo com múltiplos folículos periféricos (14 folículos de 2-9 mm). Conclusão: ovários aumentados com múltiplos microcistos periféricos, aspecto sugestivo de síndrome dos ovários policísticos.'
      },
      note: 'Entregar o laudo da USG transvaginal somente se solicitada. Insulina e HOMA-IR não são necessários para o diagnóstico; se pedidos, informar insulina 28 μUI/mL e HOMA-IR 7,5. O β-HCG deve ser o primeiro exame entregue, se solicitado.',
      patientProfile: 'J.C.S., 28 anos, professora de ensino fundamental, mora com o parceiro há 3 anos. Ciclos irregulares desde a menarca (aos 12 anos). Ganhou 12 kg no último ano, após mudar de escola e passar a comer fora. Sedentária. Sente-se mal com a aparência por causa dos pelos e das espinhas, evita sair. Não usa contraceptivo hormonal, apenas preservativo às vezes. Mãe diabética e hipertensa; irmã com ciclos irregulares.',
      script: [
        { trigger: 'Queixa principal', speech: 'Doutora, minha menstruação não vem há 5 meses e estou engordando muito.' },
        { trigger: 'História menstrual', speech: 'Minha menstruação sempre foi irregular desde a adolescência, vinha de 2 em 2 meses, às vezes 3.' },
        { trigger: 'Sobre peso', speech: 'Engordei 12 quilos no último ano, principalmente na barriga.' },
        { trigger: 'Sobre pelos', speech: 'Tenho muitos pelos no rosto, preciso depilar toda semana. Também nasceram pelos na barriga.' },
        { trigger: 'Sobre pele', speech: 'Tenho muita espinha no rosto, piorou muito esse ano. Apareceram umas manchas escuras no pescoço e nas axilas.' },
        { trigger: 'Atividade sexual', speech: 'Sim, tenho parceiro fixo, uso preservativo às vezes.' },
        { trigger: 'Desejo de gravidez', speech: 'No momento não, mas tenho medo de não conseguir engravidar no futuro.' },
        { trigger: 'Antecedentes', speech: 'Não tenho doenças, não tomo remédio nenhum.' },
        { trigger: 'História familiar', speech: 'Minha mãe tem diabetes e pressão alta. Minha irmã também tem problema de menstruação irregular.' },
        {
          trigger: 'Perguntas do paciente',
          speech: 'Por que minha menstruação parou? Isso tem a ver com esses pelos no rosto? Vou conseguir engravidar quando quiser? Preciso emagrecer?'
        },
        { trigger: 'Sobre sono e ronco', speech: 'Meu marido reclama que eu ronco muito. E eu acordo cansada.' },
        { trigger: 'Sobre humor e autoestima', speech: 'Fico muito triste com minha aparência. Às vezes nem quero sair de casa por causa das espinhas e dos pelos.' }
      ],
      hiddenInfo: 'Ronco e sono não reparador (rastreio de apneia obstrutiva do sono) — só revela se perguntada sobre sono | Tristeza e isolamento pela aparência — só revela se perguntada sobre humor ou impacto emocional | Irmã com ciclos irregulares — só revela se perguntada sobre família | Uso irregular de preservativo — só revela se perguntada sobre contracepção',
      actorBehavior: 'Paciente envergonhada ao falar dos pelos, desvia o olhar. Fica ansiosa quando pergunta sobre fertilidade. Abre-se mais se o candidato demonstrar empatia e não julgar o peso. Se o candidato só falar em "emagrecer", demonstra frustração: "todo médico só fala isso".'
    },
    instC: {
      diagnosis: 'Síndrome dos ovários policísticos (critérios de Rotterdam: oligo/anovulação + hiperandrogenismo clínico e laboratorial + morfologia ovariana policística), fenótipo A, com obesidade, intolerância à glicose e dislipidemia (síndrome metabólica).',
      differentials: [
        'Gestação — sempre excluir em amenorreia; β-HCG negativo',
        'Hiperprolactinemia — amenorreia; sai pela prolactina normal e ausência de galactorreia',
        'Hipotireoidismo — sai pelo TSH normal',
        'Hiperplasia adrenal congênita não clássica — hiperandrogenismo semelhante; sai pela 17-OH-progesterona < 2 ng/mL',
        'Tumor secretor de androgênio (ovariano/adrenal) — sai pela evolução lenta desde a menarca, ausência de virilização (clitoromegalia) e testosterona < 150–200 ng/dL',
        'Síndrome de Cushing — obesidade central; investigar se estrias violáceas, fraqueza proximal, HAS grave'
      ],
      context: 'Paciente de 28 anos com amenorreia secundária, obesidade central, sinais de hiperandrogenismo, resistência insulínica e ultrassom compatível com ovários policísticos. Preenche critérios de Rotterdam e apresenta componentes metabólicos significativos.',
      justify: 'Critérios de Rotterdam (2 de 3, após exclusão de outras causas): disfunção ovulatória (ciclos irregulares desde a menarca, amenorreia de 5 meses), hiperandrogenismo clínico (hirsutismo, acne) e bioquímico (testosterona elevada), e morfologia policística (≥ 20 folículos por ovário na USG transvaginal). Exclusões feitas: β-HCG, TSH, prolactina e 17-OH-progesterona normais. Repercussão metabólica: IMC 32,8, glicemia de jejum alterada e TOTG com intolerância à glicose, HDL baixo e triglicerídeos altos.',
      expectedAnamnesis: 'Menarca e padrão menstrual desde a adolescência | Data da última menstruação e possibilidade de gestação | Atividade sexual e contracepção | Hirsutismo, acne, queda de cabelo | Sinais de virilização (voz grave, aumento do clitóris) e evolução rápida (tumor) | Ganho de peso e distribuição | Galactorreia, cefaleia, alterações visuais | Sintomas de tireoide | Desejo reprodutivo | Ronco e sono | Humor, autoestima e transtornos alimentares | História familiar de SOP, DM2 e DCV | Medicamentos (anabolizantes, valproato)',
      expectedPhysical: 'Peso, altura, IMC, circunferência abdominal e PA | Escala de Ferriman-Gallwey | Acne e alopecia | Acantose nigricans | Pesquisa de galactorreia | Tireoide | Sinais de Cushing (estrias violáceas, giba) | Sinais de virilização (clitoromegalia)',
      expectedExams: [
        { exam: 'β-HCG', justify: 'Excluir gestação', expected: 'Negativo' },
        { exam: 'TSH, prolactina, 17-OH-progesterona', justify: 'Excluir diferenciais', expected: 'Normais' },
        {
          exam: 'Testosterona total (± SHBG/índice de androgênio livre), DHEA-S',
          justify: 'Hiperandrogenismo bioquímico; DHEA-S/testosterona muito altos sugerem tumor',
          expected: 'Testosterona levemente elevada'
        },
        { exam: 'TOTG 75 g (ou glicemia de jejum + HbA1c)', justify: 'Rastreio de disglicemia — TOTG é o preferido na SOP', expected: 'Intolerância à glicose' },
        { exam: 'Perfil lipídico', justify: 'Risco cardiometabólico', expected: 'HDL baixo, TG elevado' },
        {
          exam: 'USG transvaginal',
          justify: 'Morfologia ovariana e espessura endometrial (AMH pode substituir em adultas)',
          expected: '≥ 20 folículos por ovário; endométrio 14 mm'
        }
      ],
      expectedConduct: 'Mudança de estilo de vida para todas: dieta com déficit calórico, atividade física ≥ 150 min/semana; perda de 5–10% do peso melhora ciclos e metabolismo | Contraceptivo oral combinado como 1ª linha para irregularidade menstrual, hirsutismo e acne (verificar critérios de elegibilidade da OMS: PA, tabagismo, enxaqueca com aura, trombose); proteção endometrial (amenorreia prolongada aumenta risco de hiperplasia) | Metformina 500 mg/dia com titulação até 1.500–2.000 mg/dia pela intolerância à glicose e IMC ≥ 25, associada ou não ao ACO | Considerar agonista de GLP-1 para obesidade (suspender ≥ 2 meses antes de tentar engravidar) | Hirsutismo: cosmético (laser) e, após 6 meses de ACO, antiandrogênio (espironolactona) com contracepção eficaz | Fertilidade futura: letrozol é 1ª linha para indução de ovulação | Rastrear depressão/ansiedade e apneia do sono | Seguimento metabólico anual (glicemia/TOTG, lipídios, PA)',
      expectedCommunication: 'Explicar a SOP como condição crônica comum e tratável | Abordar o peso sem julgamento | Responder sobre fertilidade de forma realista e acolhedora (a maioria consegue engravidar, com tratamento se necessário) | Valorizar o sofrimento com a aparência | Decidir o tratamento em conjunto, segundo os objetivos da paciente',
      criticalErrors: [
        'Não solicitar β-HCG antes de investigar amenorreia',
        'Fechar o diagnóstico de SOP sem excluir hiperprolactinemia, tireoidopatia e hiperplasia adrenal não clássica',
        'Não rastrear alterações metabólicas (glicemia/TOTG e perfil lipídico)',
        'Prescrever ACO sem avaliar critérios de elegibilidade',
        'Não orientar proteção endometrial em amenorreia prolongada'
      ]
    },
    instD: {
      title: 'Síndrome dos Ovários Policísticos — Material de Estudo',
      sections: [
        {
          h: 'Definição e Diagnóstico',
          items: [
            { item: 'Endocrinopatia mais comum da mulher em idade reprodutiva (10–13%).', score: 1, ref: 'International Evidence-based PCOS Guideline, 2023' },
            {
              item: 'Rotterdam: 2 de 3 — disfunção ovulatória, hiperandrogenismo clínico/bioquímico, morfologia policística (≥ 20 folículos por ovário ou volume ≥ 10 mL) ou AMH elevado em adultas.',
              score: 2,
              ref: 'International Evidence-based PCOS Guideline, 2023'
            },
            {
              item: 'Diagnóstico de exclusão: gestação, hipotireoidismo, hiperprolactinemia, HAC não clássica, Cushing, tumores androgênicos.',
              score: 1,
              ref: 'FEBRASGO — Protocolo SOP, 2023'
            }
          ]
        },
        {
          h: 'Avaliação Metabólica',
          items: [
            { item: 'TOTG 75 g é o exame preferido para rastrear disglicemia; repetir a cada 1–3 anos.', score: 1, ref: 'International PCOS Guideline, 2023' },
            { item: 'Rastrear dislipidemia, HAS, apneia do sono, depressão, ansiedade e transtornos alimentares.', score: 1, ref: 'International PCOS Guideline, 2023' }
          ]
        },
        {
          h: 'Tratamento',
          items: [
            { item: 'Estilo de vida para todas; perda de 5–10% do peso tem benefício clínico.', score: 1, ref: 'International PCOS Guideline, 2023' },
            { item: 'ACO combinado: 1ª linha para irregularidade menstrual e hiperandrogenismo.', score: 2, ref: 'International PCOS Guideline, 2023' },
            {
              item: 'Metformina para benefícios metabólicos (IMC ≥ 25 ou disglicemia); letrozol é 1ª linha para indução da ovulação.',
              score: 1,
              ref: 'International PCOS Guideline, 2023'
            },
            { item: 'Amenorreia prolongada sem progestagênio aumenta o risco de hiperplasia/câncer de endométrio.', score: 1, ref: 'FEBRASGO, 2023' }
          ]
        }
      ]
    }
  },

  // ENDOCRINOLOGIA — Diabetes mellitus tipo 2 recém-diagnosticado
  {
    id: 7,
    title: 'Exames de rotina com "açúcar um pouco alto"',
    sub: 'UBS — Atenção Primária',
    tema: 'Endocrinologia',
    topic: 'Diabetes Mellitus Tipo 2 — Diagnóstico e Manejo Inicial',
    level: 'moderado',
    cardAccent: '#FF7043',
    instA: {
      scenario: 'Você está no ambulatório de clínica médica de uma UBS.',
      patient: 'A.M.S., 68 anos, sexo masculino, aposentado.',
      complaint: 'Traz exames realizados há 2 semanas e refere que "o açúcar deu um pouco alto".',
      tasks: [
        'Realize a anamnese dirigida.',
        'Solicite e interprete os dados do exame físico.',
        'Interprete os exames trazidos pelo paciente e estratifique o risco cardiovascular.',
        'Formule as hipóteses diagnósticas.',
        'Defina a conduta farmacológica e não farmacológica e as metas terapêuticas.'
      ]
    },
    instB: {
      vitals: {
        PA: '145/92 mmHg (média de 2 medidas)',
        FC: '76 bpm',
        FR: '16 irpm',
        Peso: '94 kg',
        Altura: '1,72 m',
        IMC: '31,8 kg/m²',
        'Circunferência abdominal': '108 cm'
      },
      physicalGeneral: 'Obesidade central, acantose nigricans discreta cervical posterior, estado geral bom.',
      physicalSeg: 'CARDIOVASCULAR: RCR 2T, BNF, sem sopros; pulsos periféricos palpáveis e simétricos | RESPIRATÓRIO: MV presente bilateralmente, sem RA | ABDOME: globoso, flácido, indolor, sem visceromegalias | PÉS: pele íntegra, sem calosidades ou deformidades, unhas normais; pulsos pediosos e tibiais posteriores presentes; monofilamento de 10 g sentido em todos os pontos; diapasão 128 Hz preservado; reflexos aquileus presentes | FUNDOSCOPIA: não realizada (sem oftalmoscópio na UBS)',
      labs: [
        { test: 'Glicemia jejum', val: '138 mg/dL', ref: '< 100 normal', alt: true },
        { test: 'Hemoglobina glicada (HbA1c)', val: '7.2%', ref: '< 5.7% normal', alt: true },
        { test: 'Colesterol total', val: '248 mg/dL', ref: '< 200', alt: true },
        { test: 'LDL', val: '165 mg/dL', ref: '< 130', alt: true },
        { test: 'HDL', val: '38 mg/dL', ref: '> 40', alt: true },
        { test: 'Triglicerídeos', val: '285 mg/dL', ref: '< 150', alt: true },
        { test: 'Creatinina', val: '1.2 mg/dL', ref: '0.7-1.3', alt: false },
        { test: 'TFG (CKD-EPI)', val: '68 mL/min/1.73m²', ref: '> 90', alt: true },
        { test: 'EAS', val: 'Normal', ref: '—', alt: false },
        { test: 'Relação albumina/creatinina urinária', val: '18 mg/g', ref: '< 30', alt: false },
        { test: 'TSH', val: '2.1 μUI/mL', ref: '0.4-4.0', alt: false }
      ],
      note: 'Entregar os exames logo no início (o paciente os traz). ECG (se solicitado): ritmo sinusal, sem sobrecarga ou áreas inativas.',
      patientProfile: 'A.M.S., 68 anos, aposentado (ex-bancário), casado, mora com a esposa. Hipertenso há 10 anos em uso de losartana 50 mg/dia, nem sempre tomada. Sedentário desde a aposentadoria. Bebe 3–4 latas de cerveja nos fins de semana, nunca fumou. Dieta rica em massas, pães e frituras. Pai morreu de infarto aos 65 anos; mãe e irmão com diabetes. Tem medo de insulina porque a mãe "ficou cega e perdeu a perna".',
      script: [
        { trigger: 'Sobre os exames', speech: 'Doutor, fiz esses exames há 2 semanas no posto. A moça falou que o açúcar estava alto, por isso vim consultar.' },
        { trigger: 'Sintomas', speech: 'Não sinto nada de especial. Às vezes fico com sede, mas acho que é normal.' },
        { trigger: 'Urinar à noite', speech: 'Estou urinando mais à noite, levanto 2 vezes para ir ao banheiro.' },
        { trigger: 'História pessoal', speech: 'Tenho pressão alta há uns 10 anos, tomo losartana 50 mg de manhã.' },
        { trigger: 'Histórico de diabetes', speech: 'Nunca tive diabetes antes, nunca me falaram nada.' },
        {
          trigger: 'Hábitos',
          speech: 'Não faço exercício, sou sedentário desde que aposentei. Não fumo, bebo cerveja no fim de semana, umas 3-4 latas. Gosto muito de massa, arroz, pão. Como muita fritura também.'
        },
        {
          trigger: 'História familiar',
          speech: 'Minha mãe tinha diabetes, tomava insulina. Meu pai morreu de infarto aos 65 anos. Tenho um irmão com diabetes também.'
        },
        { trigger: 'Medicações atuais', speech: 'Só tomo a losartana mesmo, de manhã.' },
        {
          trigger: 'Perguntas do paciente',
          speech: 'Estou com diabetes então? Vou precisar tomar insulina? O colesterol alto é grave? Posso continuar bebendo cerveja? Preciso mesmo fazer dieta?'
        },
        { trigger: 'Sobre adesão à losartana', speech: 'Às vezes esqueço de tomar, principalmente no fim de semana. Mas quando lembro, tomo.' },
        { trigger: 'Sobre visão e formigamentos', speech: 'A vista anda meio embaçada pra perto, mas acho que é da idade. Formigamento nos pés não tenho.' }
      ],
      hiddenInfo: 'Uso irregular da losartana — só revela se perguntado sobre adesão | Medo de insulina pela experiência da mãe (amputação e cegueira) — só revela se o candidato explorar suas preocupações | Visão embaçada para perto — só revela se perguntado sobre visão',
      actorBehavior: 'Paciente tranquilo, um pouco cético ("não sinto nada, doutor"). Fica tenso quando ouve a palavra "diabetes" e pergunta logo sobre insulina. Resiste a parar a cerveja, mas aceita reduzir se o candidato negociar. Engaja-se quando o candidato propõe metas concretas.'
    },
    instC: {
      diagnosis: 'Diabetes mellitus tipo 2 recém-diagnosticado (HbA1c 7,2% e glicemia de jejum 138 mg/dL), associado a hipertensão arterial não controlada, dislipidemia mista e obesidade grau I — alto risco cardiovascular, sem lesão de órgão-alvo renal (RAC normal, TFG 68).',
      differentials: [
        'Pré-diabetes — sai: HbA1c ≥ 6,5% e glicemia ≥ 126 mg/dL confirmam diabetes (dois exames alterados na mesma amostra)',
        'Diabetes tipo 1 / LADA — improvável pela idade, obesidade e ausência de perda de peso ou cetose; considerar anti-GAD se falha precoce aos orais',
        'Diabetes secundário (Cushing, pancreatopatia, corticoide, tiazídico) — sem dados clínicos sugestivos',
        'Hipotireoidismo como causa de dislipidemia — excluído pelo TSH normal'
      ],
      context: 'Homem de 68 anos com diagnóstico novo de DM2, múltiplos fatores de risco cardiovascular e síndrome metabólica. Exames confirmam diabetes por HbA1c 7.2% e glicemia jejum 138 mg/dL, dislipidemia mista, pressão arterial elevada e TFG levemente reduzida.',
      justify: 'Diagnóstico de DM: dois critérios alterados na mesma amostra (HbA1c ≥ 6,5% e glicemia de jejum ≥ 126 mg/dL) dispensam repetição (SBD/ADA). Fenótipo típico de DM2: idade, obesidade central, acantose, história familiar. Risco cardiovascular alto: DM com idade > 49 anos (homem) e fatores de risco (HAS, dislipidemia, história familiar de DAC precoce, obesidade), segundo a SBD.',
      expectedAnamnesis: 'Sintomas de hiperglicemia: poliúria, polidipsia, perda de peso, visão turva | Sintomas de complicações: parestesias, alterações visuais, dor em membros ao caminhar, dor torácica, disfunção erétil | Antecedentes: HAS, dislipidemia, DCV, DRC | Medicamentos e adesão | Hábitos: dieta, atividade física, álcool, tabagismo | História familiar de DM e DCV precoce | Crenças e preocupações (medo de insulina)',
      expectedPhysical: 'PA, peso, altura, IMC, circunferência abdominal | Acantose nigricans | Exame dos pés: inspeção, pulsos, monofilamento 10 g e diapasão | Ausculta cardíaca e carotídea | Fundoscopia ou encaminhamento para retinografia',
      expectedExams: [
        { exam: 'HbA1c e glicemia de jejum', justify: 'Diagnóstico e meta', expected: '7,2% e 138 mg/dL' },
        { exam: 'Perfil lipídico', justify: 'Estratificação de risco e meta de LDL', expected: 'LDL 165, HDL 38, TG 285' },
        { exam: 'Creatinina com TFG e relação albumina/creatinina urinária', justify: 'Rastreio de doença renal do diabetes', expected: 'TFG 68, RAC 18 mg/g' },
        { exam: 'Retinografia/fundoscopia', justify: 'Rastreio de retinopatia no diagnóstico', expected: 'Encaminhar' },
        { exam: 'ECG de repouso', justify: 'Avaliação cardiovascular basal', expected: 'Normal' },
        { exam: 'TGO/TGP, vitamina B12 (seguimento com metformina)', justify: 'Esteatose hepática e deficiência de B12', expected: 'A definir' }
      ],
      expectedConduct: 'Não farmacológica: dieta com redução de carboidratos refinados e frituras, atividade física ≥ 150 min/semana + exercícios resistidos, meta de perda de 5–10% do peso, limitar álcool (≤ 2 doses/dia, idealmente menos) | Metformina 500 mg com a refeição, titulando até 1.000 mg 12/12 h (TFG 68 permite dose plena) | Considerar associar iSGLT2 ou agonista de GLP-1 para benefício cardiorrenal e de peso (SBD 2024) | Estatina de alta intensidade: atorvastatina 40–80 mg ou rosuvastatina 20 mg; meta LDL < 70 mg/dL (alto risco) | Hipertensão: meta < 130/80 mmHg; reforçar adesão e otimizar losartana 100 mg/dia ou associar anlodipino | Metas glicêmicas individualizadas: HbA1c < 7% | Rastreios: retinografia, exame dos pés e RAC anuais | Vacinação (influenza, pneumococo, hepatite B, COVID-19) | Educação em diabetes e retorno em 3 meses com HbA1c',
      expectedCommunication: 'Comunicar o diagnóstico com clareza e sem alarmismo | Explorar e acolher o medo de insulina (explicar que o tratamento inicial é oral) | Pactuar metas realistas de estilo de vida | Explicar o motivo de cada medicamento (inclusive a estatina sem sintomas) | Verificar a compreensão',
      criticalErrors: [
        'Não diagnosticar diabetes diante de HbA1c ≥ 6,5% e glicemia de jejum ≥ 126 mg/dL',
        'Não prescrever estatina em diabético de alto risco cardiovascular',
        'Iniciar sulfonilureia como primeira escolha em paciente obeso sem contraindicação à metformina',
        'Não examinar os pés no momento do diagnóstico',
        'Ignorar a hipertensão não controlada'
      ]
    },
    instD: {
      title: 'Diabetes Mellitus Tipo 2 — Diagnóstico e Manejo Inicial — Material de Estudo',
      sections: [
        {
          h: 'Diagnóstico',
          items: [
            {
              item: 'Critérios: glicemia de jejum ≥ 126 mg/dL, HbA1c ≥ 6,5%, glicemia 2 h no TOTG ≥ 200 mg/dL ou glicemia ao acaso ≥ 200 com sintomas.',
              score: 2,
              ref: 'Diretriz da Sociedade Brasileira de Diabetes, 2024'
            },
            {
              item: 'Dois exames alterados na mesma amostra confirmam o diagnóstico sem necessidade de repetição.',
              score: 1,
              ref: 'ADA Standards of Care in Diabetes, 2025'
            }
          ]
        },
        {
          h: 'Avaliação Inicial',
          items: [
            { item: 'No diagnóstico de DM2: retinografia, RAC + TFG, exame dos pés (monofilamento + outro teste), perfil lipídico e ECG.', score: 1, ref: 'SBD, 2024' },
            {
              item: 'Estratificar risco cardiovascular: DM com idade > 49 (H) / > 56 (M) ou com fatores de risco = alto risco.',
              score: 1,
              ref: 'SBD / SBC / SBEM — Diretriz de Prevenção CV no DM, 2022'
            }
          ]
        },
        {
          h: 'Tratamento',
          items: [
            {
              item: 'Metformina é a primeira escolha na ausência de DCV, IC ou DRC; iSGLT2 ou aGLP-1 se doença aterosclerótica, IC, DRC ou obesidade.',
              score: 2,
              ref: 'SBD, 2024; ADA, 2025'
            },
            { item: 'Meta de HbA1c < 7% para a maioria; individualizar em idosos frágeis (< 7,5–8%).', score: 1, ref: 'SBD, 2024' },
            {
              item: 'Estatina para todos os diabéticos de alto risco; meta de LDL < 70 mg/dL (alto) ou < 50 mg/dL (muito alto).',
              score: 2,
              ref: 'Diretriz Brasileira de Dislipidemias, SBC 2025'
            },
            { item: 'Meta pressórica < 130/80 mmHg; IECA/BRA preferidos se albuminúria.', score: 1, ref: 'Diretrizes Brasileiras de Hipertensão, 2025' }
          ]
        }
      ]
    }
  },

  // ENDOCRINOLOGIA — Hipertireoidismo por doença de Graves
  {
    id: 8,
    title: 'Palpitações, perda de peso e bócio difuso',
    sub: 'Ambulatório de Endocrinologia — Hospital Secundário',
    tema: 'Endocrinologia',
    topic: 'Doença de Graves',
    level: 'moderado',
    cardAccent: '#FF7043',
    instA: {
      scenario: 'Você está no ambulatório de endocrinologia de um hospital secundário.',
      patient: 'R.M.L., 45 anos, sexo feminino, secretária.',
      complaint: 'Paciente relata nervosismo, palpitações e perda de peso de 7 kg em 3 meses, apesar de apetite aumentado.',
      tasks: [
        'Realize a anamnese dirigida ao quadro atual.',
        'Solicite e interprete os dados do exame físico.',
        'Formule a hipótese diagnóstica e os diferenciais.',
        'Solicite os exames complementares adequados.',
        'Defina a conduta inicial e oriente a paciente sobre os riscos do tratamento.'
      ]
    },
    instB: {
      vitals: { PA: '140/75 mmHg', FC: '112 bpm, regular', FR: '18 irpm', Tax: '37,8 °C', Peso: '58 kg', Altura: '1,65 m', IMC: '21,3 kg/m²' },
      physicalGeneral: 'Paciente ansiosa e hiperativa, pele quente e úmida, tremor fino de extremidades, exoftalmia bilateral leve.',
      physicalSeg: 'TIREOIDE: aumento difuso visível (bócio grau II), consistência elástica, móvel, indolor, frêmito palpável e sopro à ausculta, sem nódulos | OLHOS: exoftalmia bilateral leve, retração palpebral, sem diplopia, sem dor à movimentação ocular, sem hiperemia conjuntival | CARDIOVASCULAR: taquicardia regular, RCR 2T, sem sopros; pulsos amplos | NEUROLÓGICO: tremor fino de extremidades, reflexos hiperativos | PELE: quente e úmida; sem mixedema pré-tibial',
      labs: [
        { test: 'TSH', val: '< 0,01 μUI/mL', ref: '0,4–4,0 μUI/mL', alt: true },
        { test: 'T4 livre', val: '3,2 ng/dL', ref: '0,8–1,8 ng/dL', alt: true },
        { test: 'T3 total', val: '285 ng/dL', ref: '80–200 ng/dL', alt: true },
        { test: 'TRAb', val: '18,5 UI/L', ref: '< 1,75 UI/L', alt: true },
        { test: 'Anti-TPO', val: '125 UI/mL', ref: '< 35 UI/mL', alt: true },
        { test: 'Hemograma (neutrófilos)', val: '3.200/mm³', ref: '1.800–7.500/mm³', alt: false },
        { test: 'TGO / TGP', val: '28 / 34 U/L', ref: '< 40 U/L', alt: false },
        { test: 'β-HCG', val: 'Negativo', ref: 'Negativo', alt: false }
      ],
      image: {
        title: 'Ultrassom de Tireóide com Doppler',
        report: 'Glândula aumentada difusamente (volume total 35 mL), ecotextura hipoecogênica, hipervascularização difusa compatível com \'inferno tireoidiano\', sem nódulos. Conclusão: aspecto compatível com tireoidite difusa sugestiva de Doença de Graves.'
      },
      note: 'Entregar o laudo de USG com Doppler apenas se solicitado. Cintilografia não está disponível (TRAb positivo dispensa o exame). ECG (se solicitado): taquicardia sinusal, FC 112 bpm, sem fibrilação atrial.',
      patientProfile: 'R.M.L., 45 anos, secretária, divorciada, mora com a filha de 15 anos. Fuma 10 cigarros por dia há 20 anos. Sem doenças prévias. Tia com doença da tireoide. Passa por período de estresse no trabalho e atribuía os sintomas à ansiedade. Não deseja engravidar e usa DIU de cobre.',
      script: [
        { trigger: 'Queixa principal', speech: 'Doutora, estou muito nervosa, agitada, meu coração vive acelerado.' },
        { trigger: 'Sobre peso', speech: 'Perdi 7 quilos nos últimos 3 meses, mas estou comendo muito mais que antes.' },
        { trigger: 'Sobre temperatura', speech: 'Sinto muito calor, fico suando o tempo todo, mesmo quando está frio.' },
        { trigger: 'Sobre sono', speech: 'Não consigo dormir, durmo 3-4 horas por noite só. Fico inquieta.' },
        { trigger: 'Sobre tremor', speech: 'Minhas mãos tremem, está difícil escrever.' },
        { trigger: 'Sobre olhos', speech: 'Sinto que meus olhos ficaram mais saltados, as pessoas comentam.' },
        { trigger: 'Sobre intestino', speech: 'Meu intestino ficou solto, às vezes tenho diarreia.' },
        { trigger: 'Sobre menstruação', speech: 'Minha menstruação ficou irregular, vem pouca, às vezes pula.' },
        { trigger: 'Antecedentes', speech: 'Não tenho outras doenças.' },
        { trigger: 'História familiar', speech: 'Minha tia teve problema de tireoide também.' },
        { trigger: 'Perguntas do paciente', speech: 'O que eu tenho, doutora? Por que estou emagrecendo tanto? Tem tratamento? Vou precisar operar?' },
        { trigger: 'Sobre tabagismo', speech: 'Fumo uns 10 cigarros por dia. Ultimamente até mais, por causa do nervoso.' },
        { trigger: 'Sobre contracepção e gestação', speech: 'Uso DIU de cobre. Não quero ter mais filhos.' }
      ],
      hiddenInfo: 'Tabagista (fator de risco para piora da orbitopatia, inclusive com radioiodo) — só revela se perguntada | Sente areia nos olhos e lacrimejamento ao acordar — só revela se perguntada sobre sintomas oculares | Já tomou propranolol de uma amiga "para o coração" — só revela se perguntada sobre automedicação',
      actorBehavior: 'Paciente agitada, fala rápido, mexe as mãos e muda de posição na cadeira. Interrompe o candidato às vezes. Mostra-se preocupada com a aparência dos olhos. Fica receosa ao ouvir falar de "iodo radioativo" ou cirurgia. Acalma-se com explicações claras.'
    },
    instC: {
      diagnosis: 'Hipertireoidismo por doença de Graves (TSH suprimido, T4L e T3 elevados, TRAb positivo, bócio difuso com sopro), com orbitopatia de Graves leve e inativa, em paciente tabagista.',
      differentials: [
        'Bócio multinodular tóxico / adenoma tóxico — sai pela ausência de nódulos e TRAb positivo',
        'Tireoidite subaguda (De Quervain) — tireotoxicose com dor cervical e febre; sai pela tireoide indolor, VHS/captação e TRAb',
        'Tireoidite indolor/pós-parto — sai pelo TRAb positivo e bócio hipervascular',
        'Tireotoxicose factícia (uso de levotiroxina) — tireoglobulina baixa e tireoide pequena; sai pelo bócio e TRAb',
        'Transtorno de ansiedade / feocromocitoma — sintomas adrenérgicos; sai pelos testes tireoidianos'
      ],
      context: 'Mulher de 45 anos com quadro de tireotoxicose: perda de peso paradoxal, palpitações, tremor, hiperatividade e insônia. Exame físico mostra bócio difuso, frêmito, sopro, exoftalmia leve e reflexos hiperativos. Laboratórios confirmam TSH suprimido, T4 livre e T3 elevados, e TRAb positivo.',
      justify: 'Tireotoxicose (TSH suprimido com T4L/T3 elevados) com bócio difuso, sopro tireoidiano, orbitopatia e TRAb positivo: o TRAb é altamente sensível e específico para Graves e dispensa cintilografia. Orbitopatia leve (retração palpebral, proptose discreta, sem diplopia ou dor) e inativa (CAS < 3).',
      expectedAnamnesis: 'Perda de peso com apetite aumentado | Palpitações, dispneia, dor torácica | Intolerância ao calor e sudorese | Tremor, insônia, ansiedade | Alterações oculares (areia nos olhos, diplopia, dor, perda visual) | Hábito intestinal | Alterações menstruais e possibilidade de gestação | Tabagismo | Uso de iodo, amiodarona ou levotiroxina | História familiar de tireoidopatia',
      expectedPhysical: 'FC e ritmo (fibrilação atrial?), PA | Palpação e ausculta da tireoide | Avaliação ocular: proptose, retração palpebral, motilidade, sinais inflamatórios | Tremor fino e reflexos | Pele e mixedema pré-tibial',
      expectedExams: [
        { exam: 'TSH e T4 livre (± T3)', justify: 'Confirmar tireotoxicose', expected: 'TSH suprimido, T4L e T3 elevados' },
        { exam: 'TRAb', justify: 'Confirmar etiologia de Graves', expected: 'Positivo' },
        { exam: 'Hemograma e TGO/TGP basais', justify: 'Antes de iniciar tionamida (agranulocitose e hepatotoxicidade)', expected: 'Normais' },
        { exam: 'β-HCG', justify: 'Escolha da tionamida e contraindicação ao radioiodo', expected: 'Negativo' },
        { exam: 'ECG', justify: 'Ritmo cardíaco (fibrilação atrial)', expected: 'Taquicardia sinusal' },
        { exam: 'USG com Doppler / cintilografia', justify: 'Apenas se TRAb negativo ou nódulo palpável', expected: 'Hipervascularização difusa' }
      ],
      expectedConduct: 'Betabloqueador para sintomas adrenérgicos: propranolol 20–40 mg 8/8 h (ou atenolol 25–50 mg/dia) | Tionamida: metimazol 15–30 mg/dia (1ª escolha); propilotiouracil reservado para 1º trimestre de gestação e crise tireotóxica | Alertar para agranulocitose: suspender e procurar atendimento com hemograma se febre ou dor de garganta | Controle com T4L/T3 em 4–6 semanas (TSH pode ficar suprimido por meses); manter por 12–18 meses e dosar TRAb antes de suspender | Tratamentos definitivos (radioiodo ou tireoidectomia) se recidiva ou efeitos adversos; radioiodo exige cautela na orbitopatia (cobertura com corticoide) e é contraindicado se orbitopatia moderada/grave ativa | Cessação do tabagismo (fator de risco para orbitopatia) | Orbitopatia leve: lubrificantes oculares, óculos escuros, selênio 100 mcg 12/12 h por 6 meses; avaliação oftalmológica',
      expectedCommunication: 'Explicar a doença autoimune em linguagem acessível | Apresentar as opções de tratamento e decidir em conjunto | Orientar sobre os sinais de alarme da agranulocitose e da crise tireotóxica | Abordar a cessação do tabagismo com empatia | Acolher a preocupação estética com os olhos',
      criticalErrors: [
        'Não solicitar TSH/T4 livre como avaliação inicial',
        'Tratar apenas com betabloqueador, sem tionamida',
        'Não orientar o risco de agranulocitose (febre/dor de garganta → suspender e colher hemograma)',
        'Indicar radioiodo sem considerar orbitopatia e tabagismo ou sem excluir gestação',
        'Prescrever propiltiouracil como primeira escolha fora da gestação ou crise tireotóxica'
      ]
    },
    instD: {
      title: 'Doença de Graves — Material de Estudo',
      sections: [
        {
          h: 'Definição e Fisiopatologia',
          items: [
            {
              item: 'Causa mais comum de hipertireoidismo; autoanticorpos estimuladores do receptor de TSH (TRAb).',
              score: 1,
              ref: 'ATA Guidelines for Hyperthyroidism, 2016'
            },
            {
              item: 'Manifestações extratireoidianas: orbitopatia (25–50%), dermopatia (mixedema pré-tibial) e acropaquia.',
              score: 1,
              ref: 'Smith TJ, Hegedüs L, NEJM 2016'
            }
          ]
        },
        {
          h: 'Diagnóstico',
          items: [
            {
              item: 'TSH suprimido com T4L/T3 elevados; TRAb positivo confirma Graves (sensibilidade/especificidade > 95%).',
              score: 2,
              ref: 'ATA Guidelines, 2016; SBEM 2013'
            },
            { item: 'Cintilografia/captação reservadas para TRAb negativo ou nódulos.', score: 1, ref: 'ATA Guidelines, 2016' }
          ]
        },
        {
          h: 'Tratamento',
          items: [
            { item: 'Betabloqueador para sintomas adrenérgicos em todos os sintomáticos sem contraindicação.', score: 1, ref: 'ATA Guidelines, 2016' },
            { item: 'Metimazol é a tionamida de escolha; PTU no 1º trimestre e na crise tireotóxica.', score: 2, ref: 'ATA Guidelines, 2016' },
            { item: 'Agranulocitose (0,2–0,5%): suspender ao surgir febre ou faringite e solicitar hemograma.', score: 1, ref: 'ATA Guidelines, 2016' },
            { item: 'Radioiodo contraindicado na gestação, amamentação e orbitopatia moderada a grave ativa.', score: 1, ref: 'EUGOGO Guidelines, 2021' }
          ]
        },
        {
          h: 'Orbitopatia',
          items: [
            {
              item: 'Tabagismo é o principal fator de risco modificável; selênio na forma leve; corticoide EV na moderada/grave ativa.',
              score: 1,
              ref: 'EUGOGO Guidelines, 2021'
            }
          ]
        }
      ]
    }
  },

  // ENDOCRINOLOGIA — Nódulo tireoidiano de 2,3 cm no lobo esquerdo, ACR TI-RADS 5, com citologia Bethesda V
  {
    id: 9,
    title: 'Caroço no pescoço que cresce há 6 meses',
    sub: 'Ambulatório de Cabeça e Pescoço — Hospital Terciário',
    tema: 'Endocrinologia',
    topic: 'Nódulo Tireoidiano Suspeito — Carcinoma Papilífero',
    level: 'difícil',
    cardAccent: '#FF7043',
    instA: {
      scenario: 'Você está no ambulatório de cabeça e pescoço de um hospital terciário.',
      patient: 'L.P.F., 58 anos, sexo feminino, comerciante.',
      complaint: 'Paciente refere nódulo cervical anterior indolor há 6 meses, com crescimento progressivo.',
      tasks: [
        'Realize a anamnese dirigida ao quadro atual.',
        'Solicite e interprete os dados do exame físico.',
        'Solicite e interprete os exames complementares adequados.',
        'Formule a hipótese diagnóstica.',
        'Defina a conduta e oriente a paciente sobre o tratamento e o prognóstico.'
      ]
    },
    instB: {
      vitals: { PA: '125/80 mmHg', FC: '72 bpm', FR: '16 irpm', Tax: '36,4 °C', Peso: '68 kg', Altura: '1,60 m', IMC: '26,6 kg/m²' },
      physicalGeneral: 'Bom estado geral, corada, hidratada, eupneica. Voz sem alterações. Ausculta cardíaca e pulmonar normais.',
      physicalSeg: 'TIREOIDE: nódulo visível e palpável no lobo esquerdo, de ~2,5 cm, endurecido, aderido aos planos profundos, indolor; move-se pouco com a deglutição | LINFONODOS CERVICAIS: sem linfonodomegalias palpáveis nos níveis I a VI | TRAQUEIA: centrada | LARINGOSCOPIA (se solicitada): mobilidade de pregas vocais preservada bilateralmente',
      labs: [
        { test: 'TSH', val: '2,1 μUI/mL', ref: '0,4–4,0 μUI/mL', alt: false },
        { test: 'T4 livre', val: '1,1 ng/dL', ref: '0,8–1,8 ng/dL', alt: false },
        { test: 'Calcitonina sérica', val: '3,5 pg/mL', ref: '< 10 pg/mL', alt: false },
        { test: 'Cálcio sérico', val: '9,4 mg/dL', ref: '8,5–10,5 mg/dL', alt: false }
      ],
      image: {
        title: 'USG de Tireoide e Cervical + Citologia (PAAF)',
        report: 'USG DE TIREOIDE COM DOPPLER: Lobo esquerdo com nódulo sólido de 2,3 × 1,8 × 2,1 cm, acentuadamente hipoecogênico, margens irregulares, microcalcificações, mais alto que largo. Sem sinais de extensão extratireoidiana evidentes. ACR TI-RADS 5 (TR5). Linfonodos cervicais (níveis II a VI) sem características suspeitas.\n\nCITOLOGIA (PAAF guiada por USG): Bethesda V — suspeito para malignidade (achados sugestivos de carcinoma papilífero: núcleos com fendas e pseudoinclusões).'
      },
      note: 'Entregar TSH primeiro, se solicitado. O laudo de USG e o resultado da PAAF são entregues juntos apenas quando o candidato solicitar USG e indicar a PAAF. Tireoglobulina não é útil no pré-operatório; se solicitada, o avaliador registra.',
      patientProfile: 'L.P.F., 58 anos, comerciante (dona de uma padaria), casada, três filhos. Hipertensa controlada com hidroclorotiazida. Notou o nódulo há 6 meses ao passar a mão no pescoço; adiou a consulta por medo. Nunca recebeu radiação na cabeça ou no pescoço. Sem casos de câncer de tireoide na família. A irmã teve câncer de mama e fez quimioterapia, o que a deixa muito assustada.',
      script: [
        { trigger: 'Queixa principal', speech: 'Doutora, tenho esse caroço no pescoço há uns 6 meses e ele está crescendo.' },
        { trigger: 'Sobre sintomas', speech: 'Não dói nada. Às vezes sinto um incômodo quando engulo.' },
        { trigger: 'Sobre voz', speech: 'Não tenho rouquidão. Minha voz está normal.' },
        { trigger: 'História', speech: 'Percebi o caroço por acaso, passando a mão no pescoço. Parece que está aumentando.' },
        { trigger: 'Fatores de risco', speech: 'Nunca fiz radioterapia no pescoço ou cabeça quando criança. Ninguém na família teve câncer de tireoide.' },
        { trigger: 'Preocupações', speech: 'Tenho medo de ser câncer. Vou precisar operar? Se for câncer, tem cura?' },
        { trigger: 'Sobre perda de peso e outros sintomas', speech: 'Não emagreci, não tenho febre, não tenho suor à noite. Me sinto bem, só com esse caroço.' },
        {
          trigger: 'Sobre o medo do tratamento',
          speech: 'Minha irmã teve câncer de mama e sofreu muito com a quimioterapia, ficou careca. Eu vou ter que fazer isso também?'
        },
        { trigger: 'Sobre a voz depois da cirurgia', speech: 'Ouvi dizer que quem opera a tireoide pode ficar rouca. É verdade?' }
      ],
      hiddenInfo: 'Irmã com câncer de mama tratado com quimioterapia — só revela se perguntada sobre história familiar de câncer | Adiou a consulta por medo — só revela se o candidato explorar sentimentos | Discreta disfagia para sólidos — só revela se perguntada sobre sintomas compressivos',
      actorBehavior: 'Paciente ansiosa, toca o pescoço com frequência. Faz perguntas diretas sobre câncer e cura. Chora brevemente ao falar da irmã. Tranquiliza-se se o candidato explicar o excelente prognóstico com linguagem clara e honesta, sem prometer certezas.'
    },
    instC: {
      diagnosis: 'Nódulo tireoidiano de 2,3 cm no lobo esquerdo, ACR TI-RADS 5, com citologia Bethesda V (suspeito para malignidade, provável carcinoma papilífero), em paciente eutireoidiana — indicação de tratamento cirúrgico.',
      differentials: [
        'Nódulo coloide benigno — sai pelas características ultrassonográficas de alto risco e citologia Bethesda V',
        'Carcinoma medular — sai pela calcitonina normal; citologia sugere papilífero',
        'Carcinoma anaplásico — crescimento muito rápido, dor, rouquidão e compressão em idosos; evolução de 6 meses e estado geral bom tornam improvável',
        'Linfoma de tireoide — associado a Hashimoto e crescimento rápido; sai pela citologia',
        'Adenoma tóxico — sai pelo TSH normal'
      ],
      context: 'Mulher de 58 anos com nódulo tireoidiano de 2.5 cm, endurecido e fixo. Ultrassom mostra características altamente suspeitas e PAAF Bethesda V. O caso indica cirurgia pelo alto risco de malignidade.',
      justify: 'Nódulo sólido hipoecoico com margens irregulares, microcalcificações e forma mais alta que larga: ACR TI-RADS 5 (risco > 35%), com indicação de PAAF a partir de 1 cm. Bethesda V tem risco de malignidade de ~74% (Bethesda 2023), indicação cirúrgica. Eutireoidismo e calcitonina normal reforçam o carcinoma diferenciado (papilífero) como principal hipótese.',
      expectedAnamnesis: 'Tempo de evolução e velocidade de crescimento | Sintomas compressivos (disfagia, dispneia) | Disfonia/rouquidão | Dor cervical | Sintomas de hiper ou hipotireoidismo | Exposição à radiação ionizante na infância | História familiar de câncer de tireoide ou síndromes (NEM 2, polipose adenomatosa familiar) | Perda de peso e sintomas constitucionais',
      expectedPhysical: 'Palpação da tireoide: tamanho, consistência, mobilidade, aderência | Palpação das cadeias linfonodais cervicais (níveis I a VI) | Avaliação da voz e laringoscopia pré-operatória | Posição da traqueia',
      expectedExams: [
        { exam: 'TSH', justify: 'Primeiro exame — TSH baixo indica cintilografia (nódulo quente)', expected: 'Normal' },
        { exam: 'USG de tireoide e cervical', justify: 'Estratificar risco (TI-RADS) e avaliar linfonodos', expected: 'TI-RADS 5, linfonodos sem suspeição' },
        { exam: 'PAAF guiada por USG', justify: 'TI-RADS 5 ≥ 1 cm', expected: 'Bethesda V' },
        { exam: 'Laringoscopia pré-operatória', justify: 'Documentar mobilidade das pregas vocais', expected: 'Normal' },
        { exam: 'Calcitonina (opcional)', justify: 'Rastreio de carcinoma medular conforme serviço', expected: 'Normal' }
      ],
      expectedConduct: 'Encaminhar para cirurgia de cabeça e pescoço | Cirurgia: lobectomia (hemitireoidectomia) é aceitável para carcinoma 1–4 cm sem extensão extratireoidiana ou metástase linfonodal; tireoidectomia total se extensão extratireoidiana, linfonodos suspeitos, bilateralidade, radiação prévia ou preferência da paciente — a aderência ao exame clínico favorece a tireoidectomia total nesta paciente | Exame de congelação intraoperatório | Pós-operatório: estadiamento e estratificação de risco de recorrência (ATA) definem radioiodoterapia; levotiroxina conforme extensão da cirurgia e risco | Seguimento com tireoglobulina e anti-tireoglobulina (após tireoidectomia total) e USG cervical | Orientar riscos cirúrgicos: lesão do nervo laríngeo recorrente (rouquidão) e hipoparatireoidismo (hipocalcemia)',
      expectedCommunication: 'Comunicar a suspeita de câncer com honestidade e empatia (protocolo SPIKES) | Explicar que o carcinoma papilífero tem excelente prognóstico (sobrevida > 95% em 10 anos) | Esclarecer que quimioterapia não faz parte do tratamento habitual | Explicar os riscos da cirurgia | Oferecer espaço para perguntas e emoções',
      criticalErrors: [
        'Não solicitar USG de tireoide diante de nódulo palpável',
        'Não indicar PAAF em nódulo TI-RADS 5 ≥ 1 cm',
        'Indicar apenas seguimento clínico em citologia Bethesda V',
        'Não examinar as cadeias linfonodais cervicais',
        'Solicitar tireoglobulina para diagnóstico pré-operatório de malignidade'
      ]
    },
    instD: {
      title: 'Nódulo Tireoidiano — Investigação e Conduta — Material de Estudo',
      sections: [
        {
          h: 'Epidemiologia',
          items: [
            { item: 'Nódulos tireoidianos são detectados por USG em até 68% dos adultos; 7–15% são malignos.', score: 1, ref: 'ATA Guidelines, 2015' }
          ]
        },
        {
          h: 'Investigação',
          items: [
            { item: 'TSH é o primeiro exame; se baixo, cintilografia (nódulo hiperfuncionante raramente é maligno).', score: 1, ref: 'ATA Guidelines, 2015' },
            { item: 'ACR TI-RADS: PAAF se TR5 ≥ 1 cm, TR4 ≥ 1,5 cm, TR3 ≥ 2,5 cm.', score: 2, ref: 'ACR TI-RADS, Tessler FN et al., 2017' },
            {
              item: 'Achados suspeitos: hipoecogenicidade acentuada, margens irregulares, microcalcificações, forma mais alta que larga, extensão extratireoidiana.',
              score: 1,
              ref: 'ACR TI-RADS, 2017'
            }
          ]
        },
        {
          h: 'Citologia — Bethesda (3ª ed., 2023)',
          items: [
            {
              item: 'I não diagnóstico; II benigno; III atipia de significado indeterminado; IV neoplasia folicular; V suspeito de malignidade (~74%); VI maligno (~97%).',
              score: 2,
              ref: 'Ali SZ et al., Thyroid 2023'
            },
            { item: 'Bethesda V e VI: indicação cirúrgica.', score: 1, ref: 'ATA Guidelines, 2015' }
          ]
        },
        {
          h: 'Tratamento do Carcinoma Diferenciado',
          items: [
            {
              item: 'Lobectomia aceitável para tumores 1–4 cm de baixo risco; tireoidectomia total se > 4 cm, extensão extratireoidiana, metástases ou radiação prévia.',
              score: 2,
              ref: 'ATA Guidelines, 2015'
            },
            { item: 'Complicações: lesão do nervo laríngeo recorrente e hipoparatireoidismo.', score: 1, ref: 'Sabiston — Tratado de Cirurgia, 21ª ed.' }
          ]
        }
      ]
    }
  },

  // ENDOCRINOLOGIA — Hipoparatireoidismo pós-cirúrgico com hipocalcemia sintomática leve a moderada
  {
    id: 10,
    title: 'Formigamento na boca e nas mãos uma semana após tireoidectomia',
    sub: 'Ambulatório de Endocrinologia — Pós-operatório',
    tema: 'Endocrinologia',
    topic: 'Hipoparatireoidismo Pós-Tireoidectomia',
    level: 'difícil',
    cardAccent: '#FF7043',
    instA: {
      scenario: 'Você está no ambulatório de endocrinologia, atendendo paciente em pós-operatório.',
      patient: 'C.R.M., 42 anos, sexo masculino, engenheiro.',
      complaint: 'Paciente retorna 7 dias após tireoidectomia total por carcinoma papilífero, referindo formigamento perioral e nas mãos.',
      tasks: [
        'Realize a anamnese dirigida ao quadro pós-operatório.',
        'Solicite e interprete os dados do exame físico.',
        'Interprete os exames complementares e o laudo anatomopatológico.',
        'Formule a hipótese diagnóstica.',
        'Defina a conduta para o quadro atual e oriente o seguimento oncológico.'
      ]
    },
    instB: {
      vitals: { PA: '120/75 mmHg', FC: '78 bpm', FR: '16 irpm', Tax: '36,5 °C', Peso: '80 kg', Altura: '1,78 m' },
      physicalGeneral: 'Bom estado geral, ansioso, corado, hidratado. Cicatriz cervical (cervicotomia transversa) limpa, sem sinais flogísticos, sem hematoma ou seroma. Voz normal.',
      physicalSeg: 'NEUROMUSCULAR: sinal de Chvostek positivo; sinal de Trousseau negativo; força preservada, sem tetania, sem espasmo carpopodal | CARDIOVASCULAR: RCR 2T, sem sopros | RESPIRATÓRIO: sem estridor, MV presente bilateralmente | LARINGOSCOPIA (se solicitada): mobilidade de pregas vocais preservada bilateralmente',
      labs: [
        { test: 'Cálcio total', val: '7,2 mg/dL', ref: '8,5–10,5 mg/dL', alt: true },
        { test: 'Cálcio iônico', val: '0,95 mmol/L', ref: '1,15–1,35 mmol/L', alt: true },
        { test: 'PTH', val: '8 pg/mL', ref: '15–65 pg/mL', alt: true },
        { test: 'Fósforo', val: '5,8 mg/dL', ref: '2,5–4,5 mg/dL', alt: true },
        { test: 'Magnésio', val: '1,8 mg/dL', ref: '1,7–2,4 mg/dL', alt: false },
        { test: 'Albumina', val: '4,0 g/dL', ref: '3,5–5,0 g/dL', alt: false },
        { test: 'Creatinina', val: '1,0 mg/dL', ref: '0,7–1,3 mg/dL', alt: false },
        { test: '25-OH vitamina D', val: '24 ng/mL', ref: '> 30 ng/mL (grupos de risco)', alt: true }
      ],
      image: {
        title: 'Laudo Anatomopatológico — Tireoidectomia Total',
        report: 'Carcinoma papilífero, variante clássica, unifocal, no lobo direito, medindo 1,8 cm. Margens livres. Ausência de extensão extratireoidiana e de invasão vascular. Dois linfonodos do compartimento central sem neoplasia (0/2). Estadiamento: pT1b N0 (AJCC 8ª ed.). Duas glândulas paratireoides identificadas no espécime.'
      },
      note: 'Entregar o laudo anatomopatológico logo que o candidato pedir os resultados da cirurgia. Exames laboratoriais apenas se solicitados. ECG (se solicitado): ritmo sinusal, QTc 470 ms. Se o candidato perguntar sobre a dose atual de levotiroxina: 175 mcg/dia, prescrita na alta.',
      patientProfile: 'C.R.M., 42 anos, engenheiro civil, casado, dois filhos pequenos. Previamente hígido. Fez tireoidectomia total há 7 dias por nódulo de 1,8 cm com citologia Bethesda VI. Recebeu alta no 2º dia com levotiroxina 175 mcg/dia e sem cálcio. Leu na internet que "todo câncer de tireoide precisa de iodo radioativo" e está preocupado com isolamento das crianças.',
      script: [
        { trigger: 'Queixa principal', speech: 'Doutor, desde ontem estou com formigamento na boca e nas mãos.' },
        { trigger: 'Sintomas', speech: 'Começa ao redor da boca e vai para as pontas dos dedos. Às vezes sinto câimbras nas pernas também.' },
        { trigger: 'Sobre a cirurgia', speech: 'Fiz a cirurgia há uma semana. A cicatriz está boa, não está doendo. Retiraram a tireoide toda porque tinha câncer.' },
        { trigger: 'Preocupações', speech: 'Isso é normal depois da cirurgia? Vai passar? Vou precisar de mais tratamento para o câncer?' },
        { trigger: 'Sobre câimbras e espasmos', speech: 'Hoje de manhã a mão chegou a ficar meio dura, encolhida, por uns segundos. Fiquei assustado.' },
        { trigger: 'Sobre falta de ar, chiado ou rouquidão', speech: 'Não, respiro normal. A voz está boa.' },
        { trigger: 'Sobre medicamentos em uso', speech: 'Estou tomando a levotiroxina de 175 que o cirurgião passou. Cálcio não me passaram nada.' },
        { trigger: 'Sobre palpitações ou tontura', speech: 'Às vezes sinto o coração meio esquisito, mas passa rápido.' },
        { trigger: 'Sobre o iodo radioativo', speech: 'Vou ter que tomar aquele iodo e ficar isolado? Tenho dois filhos pequenos, como faço?' }
      ],
      hiddenInfo: 'Teve espasmo da mão (espasmo carpal) pela manhã — só revela se perguntado sobre câimbras/espasmos | Recebeu alta sem cálcio nem calcitriol — só revela se perguntado sobre medicamentos | Palpitações ocasionais (QTc prolongado no ECG) — só revela se perguntado | Preocupação com o radioiodo e os filhos — só revela se o candidato explorar suas preocupações',
      actorBehavior: 'Paciente ansioso, esfrega os lábios e os dedos durante a consulta. Faz muitas perguntas técnicas (é engenheiro). Fica aliviado quando o candidato explica que a hipocalcemia costuma ser transitória e que, no caso dele, o radioiodo provavelmente não é necessário.'
    },
    instC: {
      diagnosis: 'Hipoparatireoidismo pós-cirúrgico com hipocalcemia sintomática leve a moderada (cálcio 7,2 mg/dL, PTH suprimido, hiperfosfatemia), no 7º dia de tireoidectomia total por carcinoma papilífero de baixo risco (pT1b N0).',
      differentials: [
        'Hipomagnesemia causando hipocalcemia — sai pelo magnésio normal (deve sempre ser checado)',
        'Deficiência de vitamina D — contribui (25-OH D 24), mas não explica o PTH suprimido',
        '"Fome óssea" (hungry bone) — ocorre após paratireoidectomia/hipertireoidismo grave; aqui o PTH está baixo e o fósforo alto',
        'Hiperventilação/ansiedade — parestesias sem hipocalcemia; sai pelo cálcio iônico baixo',
        'Lesão do nervo laríngeo recorrente — outra complicação da tireoidectomia; laringoscopia normal'
      ],
      context: 'Homem de 42 anos no 7º dia de tireoidectomia total por carcinoma papilífero, com parestesias periorais e de extremidades, câimbras, Chvostek positivo e espasmo carpal transitório. Laboratório com hipocalcemia, PTH suprimido e hiperfosfatemia: hipoparatireoidismo pós-cirúrgico, a complicação mais comum da tireoidectomia total (transitório em até 30%, permanente em 1–3%). O anatomopatológico define carcinoma de baixo risco de recorrência (ATA), sem indicação de radioiodo de rotina.',
      justify: 'Hipocalcemia (cálcio total e iônico baixos com albumina normal) + PTH inapropriadamente baixo + fósforo elevado + magnésio normal, após tireoidectomia total = hipoparatireoidismo pós-cirúrgico. Sintomático (parestesias, Chvostek, espasmo carpal) mas sem tetania franca, laringoespasmo ou convulsão: tratamento oral é adequado, com monitorização. Carcinoma pT1b N0 intratireoidiano, unifocal, sem invasão vascular = baixo risco ATA.',
      expectedAnamnesis: 'Parestesias periorais e de extremidades | Câimbras, espasmos e tetania | Sintomas graves: estridor, laringoespasmo, convulsão, palpitações/síncope | Data e extensão da cirurgia | Medicamentos em uso (levotiroxina, cálcio, calcitriol) | Rouquidão, disfagia (lesão do laríngeo recorrente) | Resultado anatomopatológico | Preocupações sobre o tratamento oncológico',
      expectedPhysical: 'Sinal de Chvostek | Sinal de Trousseau | Avaliação da ferida operatória (hematoma) | Avaliação respiratória (estridor) e da voz | Ausculta cardíaca',
      expectedExams: [
        { exam: 'Cálcio total, albumina e cálcio iônico', justify: 'Confirmar e graduar a hipocalcemia', expected: 'Cálcio 7,2; iônico 0,95' },
        { exam: 'PTH', justify: 'Etiologia (hipoparatireoidismo)', expected: 'Suprimido' },
        { exam: 'Fósforo e magnésio', justify: 'Hipomagnesemia impede a correção do cálcio', expected: 'Fósforo alto, magnésio normal' },
        { exam: '25-OH vitamina D', justify: 'Deficiência piora a hipocalcemia', expected: 'Insuficiente' },
        { exam: 'ECG', justify: 'Prolongamento do QT e arritmias', expected: 'QTc 470 ms' }
      ],
      expectedConduct: 'Hipocalcemia sintomática sem sinais de gravidade: carbonato de cálcio 1–2 g/dia de cálcio elementar, dividido em 3–4 tomadas com as refeições + calcitriol 0,25–0,5 mcg 12/12 h | Gluconato de cálcio 10% EV (1–2 ampolas em 10–20 min, seguido de infusão) se tetania, laringoespasmo, convulsão, QTc muito prolongado ou cálcio < 7,0 mg/dL | Repor vitamina D (colecalciferol) | Meta: cálcio na faixa normal-baixa (8,0–8,5 mg/dL), sem sintomas, com fósforo e calciúria controlados | Dosar cálcio em 2–3 dias e semanalmente no ajuste; reduzir gradualmente (a maioria recupera em semanas) — permanente se persistir > 12 meses | Separar o cálcio da levotiroxina por ≥ 4 h | Seguimento oncológico (baixo risco ATA): radioiodo não é indicado de rotina; TSH-alvo 0,5–2,0 mU/L (sem supressão); tireoglobulina e anti-tireoglobulina em 6–12 semanas e USG cervical em 6–12 meses | Orientar sinais de alarme: espasmos, falta de ar, convulsão',
      expectedCommunication: 'Explicar a relação entre a cirurgia e as paratireoides | Tranquilizar sobre a natureza geralmente transitória | Esclarecer que o radioiodo provavelmente não será necessário (baixo risco) e que o prognóstico é excelente | Ensinar a tomar cálcio e levotiroxina em horários separados | Orientar sinais de alarme',
      criticalErrors: [
        'Não reconhecer a hipocalcemia por hipoparatireoidismo pós-operatório',
        'Não repor cálcio e calcitriol em paciente sintomático',
        'Não dosar magnésio',
        'Não indicar cálcio EV diante de sinais de gravidade (tetania, laringoespasmo, convulsão)',
        'Indicar radioiodo de rotina ou TSH supressivo em carcinoma papilífero de baixo risco'
      ]
    },
    instD: {
      title: 'Hipoparatireoidismo Pós-Cirúrgico e Seguimento do Carcinoma Papilífero — Material de Estudo',
      sections: [
        {
          h: 'Hipoparatireoidismo Pós-Cirúrgico',
          items: [
            {
              item: 'Complicação mais comum da tireoidectomia total: transitório em até 30%, permanente (> 12 meses) em 1–3%.',
              score: 1,
              ref: 'Second International Workshop on Hypoparathyroidism, JBMR 2022'
            },
            { item: 'Diagnóstico: hipocalcemia com PTH baixo/inapropriado e fósforo elevado; sempre dosar magnésio.', score: 1, ref: 'Khan AA et al., JBMR 2022' },
            {
              item: 'Sinais: Chvostek (pouco específico), Trousseau (mais específico), tetania, laringoespasmo, QT longo, convulsões.',
              score: 1,
              ref: 'Harrison — Medicina Interna, 21ª ed.'
            }
          ]
        },
        {
          h: 'Tratamento',
          items: [
            {
              item: 'Sintomas graves ou cálcio < 7,5 com sintomas: gluconato de cálcio EV em bolus seguido de infusão contínua.',
              score: 2,
              ref: 'Society for Endocrinology Emergency Guidance, 2016'
            },
            {
              item: 'Manutenção: cálcio oral + calcitriol; meta de cálcio normal-baixo para evitar hipercalciúria e nefrocalcinose.',
              score: 2,
              ref: 'Khan AA et al., JBMR 2022'
            }
          ]
        },
        {
          h: 'Carcinoma Papilífero de Baixo Risco',
          items: [
            { item: 'Baixo risco ATA: tumor intratireoidiano, sem invasão vascular, N0 ou ≤ 5 micrometástases.', score: 1, ref: 'ATA Guidelines, 2015' },
            {
              item: 'Radioiodo não é recomendado de rotina em baixo risco (ensaios ESTIMABL2 e IoN).',
              score: 2,
              ref: 'Leboulleux S et al., NEJM 2022; Mallick U et al., Lancet Oncol 2024'
            },
            { item: 'TSH-alvo 0,5–2,0 mU/L no baixo risco; supressão reservada ao alto risco ou doença estrutural.', score: 1, ref: 'ATA Guidelines, 2015' },
            { item: 'Seguimento com tireoglobulina, anti-tireoglobulina e USG cervical.', score: 1, ref: 'ATA Guidelines, 2015' }
          ]
        }
      ]
    }
  },

  // ENDOCRINOLOGIA — Hiperprolactinemia por microprolactinoma
  {
    id: 11,
    title: 'Ausência de menstruação há 8 meses e saída de leite pelas mamas',
    sub: 'Ambulatório de Ginecologia — Hospital Secundário',
    tema: 'Endocrinologia',
    topic: 'Hiperprolactinemia — Microprolactinoma',
    level: 'moderado',
    cardAccent: '#FF7043',
    instA: {
      scenario: 'Você está no ambulatório de ginecologia de um hospital secundário.',
      patient: 'A.S.M., 34 anos, sexo feminino, publicitária.',
      complaint: 'Ausência de menstruação há 8 meses, saída de leite pelas mamas e dor de cabeça.',
      tasks: [
        'Realize a anamnese dirigida ao quadro atual.',
        'Solicite e interprete os dados do exame físico.',
        'Formule a hipótese diagnóstica e os diferenciais.',
        'Solicite e interprete os exames complementares adequados.',
        'Defina a conduta inicial e oriente a paciente sobre fertilidade e seguimento.'
      ]
    },
    instB: {
      vitals: { PA: '115/75 mmHg', FC: '72 bpm', FR: '14 irpm', Peso: '62 kg', Altura: '1,64 m', IMC: '23,0 kg/m²' },
      physicalGeneral: 'Estado geral bom, sem hirsutismo ou acne, sem galactorreia espontânea.',
      physicalSeg: 'Mamas simétricas sem nódulos, galactorreia bilateral apenas à expressão | Genitália externa sem alterações | Neurológico sem déficit motor ou sensitivo, pupilas isocóricas e fotorreagentes, movimentos oculares normais, campimetria por confrontação sem alterações evidentes',
      labs: [
        { test: 'β-HCG', val: '< 2 mUI/mL', ref: '< 5 mUI/mL (não grávida)', alt: false },
        { test: 'Prolactina', val: '185 ng/mL', ref: '< 25 ng/mL', alt: true },
        { test: 'Prolactina (repetida, coleta em repouso)', val: '192 ng/mL', ref: '< 25 ng/mL', alt: true },
        { test: 'Macroprolactina (PEG)', val: 'Recuperação 82% (prolactina monomérica predominante)', ref: '> 60% = hiperprolactinemia verdadeira', alt: false },
        { test: 'TSH', val: '2,8 μUI/mL', ref: '0,4–4,0 μUI/mL', alt: false },
        { test: 'T4 livre', val: '1,2 ng/dL', ref: '0,8–1,8 ng/dL', alt: false },
        { test: 'LH', val: '2,1 mUI/mL', ref: '2–10 mUI/mL', alt: false },
        { test: 'FSH', val: '3,5 mUI/mL', ref: '3–10 mUI/mL', alt: false },
        { test: 'Estradiol', val: '28 pg/mL', ref: '30–400 pg/mL (fase folicular)', alt: true },
        { test: 'Creatinina', val: '0,9 mg/dL', ref: '0,6–1,2 mg/dL', alt: false },
        { test: 'TGO / TGP', val: '22 / 25 U/L', ref: '< 40 U/L', alt: false }
      ],
      image: {
        title: 'Ressonância Magnética de Sela Túrcica (com gadolínio)',
        report: 'Lesão hipofisária de 8 mm na porção lateral esquerda da adeno-hipófise, com hipocaptação de contraste. Haste centrada. Sem contato com o quiasma óptico. Sem invasão do seio cavernoso. Conclusão: microadenoma hipofisário, compatível com prolactinoma.'
      },
      note: 'Entregar o β-HCG primeiro, se solicitado. A ressonância só é entregue após a confirmação da hiperprolactinemia. Se o candidato perguntar sobre medicamentos, a paciente nega uso — mas se perguntar especificamente sobre remédios para estômago ou enjoo, revela o uso eventual de domperidona.',
      patientProfile: 'A.S.M., 34 anos, publicitária, casada há 2 anos. Ciclos sempre regulares até 8 meses atrás. Não usa contraceptivo hormonal (o casal usa preservativo de forma irregular). Planeja engravidar em cerca de 1 ano. Usa domperidona "de vez em quando" para má digestão. Trabalha sob muito estresse. Assustada com a possibilidade de "tumor na cabeça".',
      script: [
        { trigger: 'Queixa principal', speech: 'Doutora, minha menstruação não vem há 8 meses e está saindo leite do meu peito.' },
        { trigger: 'História menstrual', speech: 'Sempre foi regular, vinha todo mês certinho. Parou de vir há uns 8 meses sem motivo.' },
        { trigger: 'Galactorreia', speech: 'Percebi que quando aperto o bico do peito sai um líquido branco dos dois lados.' },
        { trigger: 'Cefaleia', speech: 'Tenho dor de cabeça há alguns meses, é surda e na testa.' },
        { trigger: 'Visão', speech: 'Não sinto que minha visão mudou. Não tenho visão dupla nem embaçada.' },
        { trigger: 'Libido', speech: 'Meu interesse sexual diminuiu nos últimos meses.' },
        { trigger: 'Medicações', speech: 'Não tomo nenhum remédio. Não uso anticoncepcional.' },
        { trigger: 'Desejo de gravidez', speech: 'No momento não estou tentando engravidar, mas quero ter filhos no futuro.' },
        {
          trigger: 'Perguntas do paciente',
          speech: 'Por que estou com leite no peito se não estou grávida? O que pode estar causando isso? Tenho algo no cérebro? Tem tratamento? Vou conseguir engravidar?'
        },
        { trigger: 'Sobre remédios para estômago ou enjoo', speech: 'Ah, tomo domperidona às vezes quando como demais, umas duas vezes por mês. Isso conta?' },
        { trigger: 'Sobre ondas de calor e secura vaginal', speech: 'Calor não. Mas sinto a relação mais seca, um pouco desconfortável.' }
      ],
      hiddenInfo: 'Uso eventual de domperidona (antagonista dopaminérgico) — só revela se perguntada especificamente sobre remédios para estômago/enjoo | Planeja engravidar em 1 ano — só revela se perguntada sobre desejo reprodutivo | Secura vaginal e dispareunia (hipoestrogenismo) — só revela se perguntada sobre vida sexual',
      actorBehavior: 'Paciente comunicativa, mas apreensiva. Ao ouvir "tumor", fica visivelmente assustada e pergunta se vai precisar operar a cabeça. Acalma-se se o candidato explicar que é benigno e tratado com comprimido. Preocupa-se com a fertilidade.'
    },
    instC: {
      diagnosis: 'Hiperprolactinemia por microprolactinoma (adenoma hipofisário de 8 mm secretor de prolactina), com hipogonadismo hipogonadotrófico (amenorreia secundária, galactorreia e hipoestrogenismo).',
      differentials: [
        'Gestação — causa fisiológica mais comum; excluída pelo β-HCG negativo',
        'Hiperprolactinemia medicamentosa (domperidona, metoclopramida, antipsicóticos, ISRS) — uso apenas eventual e prolactina > 150 ng/mL favorecem prolactinoma; se dúvida, suspender por 72 h e repetir',
        'Hipotireoidismo primário — TRH estimula prolactina; sai pelo TSH normal',
        'Macroprolactinemia — falsa hiperprolactinemia; sai pela recuperação > 60% após PEG',
        'Pseudoprolactinoma (lesão que comprime a haste, ex.: adenoma não funcionante) — prolactina geralmente < 100 ng/mL e lesão maior; sai pelo micro com prolactina alta',
        'Doença renal crônica / cirrose — sai pela função renal e hepática normais'
      ],
      context: 'Mulher de 34 anos com amenorreia, galactorreia e cefaleia. Hiperprolactinemia confirmada em duas dosagens, TSH normal e β-HCG negativo. RNM revela microadenoma hipofisário de 8 mm sem compressão do quiasma óptico.',
      justify: 'Hiperprolactinemia confirmada em duas dosagens (> 150 ng/mL, valor sugestivo de prolactinoma), após exclusão de gestação, hipotireoidismo, insuficiência renal e macroprolactinemia. RM com microadenoma de 8 mm (< 10 mm). Clínica de hipogonadismo (amenorreia, LH/FSH baixos-normais e estradiol baixo) e galactorreia justifica tratamento.',
      expectedAnamnesis: 'Padrão menstrual prévio e DUM | Possibilidade de gestação e contracepção | Galactorreia: espontânea ou à expressão, bilateral | Cefaleia e alterações visuais (efeito de massa) | Uso de medicamentos (antipsicóticos, antidepressivos, metoclopramida, domperidona, opioides, verapamil) | Sintomas de hipotireoidismo | Libido, secura vaginal | Doença renal ou hepática | Desejo reprodutivo',
      expectedPhysical: 'Exame das mamas e expressão mamilar | Campimetria por confrontação | Sinais de hipotireoidismo | Sinais de hiperandrogenismo (diferencial com SOP)',
      expectedExams: [
        { exam: 'β-HCG', justify: 'Excluir gestação', expected: 'Negativo' },
        { exam: 'Prolactina (repetida)', justify: 'Confirmar hiperprolactinemia', expected: '> 150 ng/mL' },
        { exam: 'TSH/T4 livre, creatinina, função hepática', justify: 'Causas secundárias', expected: 'Normais' },
        { exam: 'Pesquisa de macroprolactina', justify: 'Excluir falsa hiperprolactinemia (sobretudo se assintomática)', expected: 'Ausente' },
        { exam: 'RM de sela túrcica com gadolínio', justify: 'Identificar adenoma e seu tamanho', expected: 'Microadenoma de 8 mm' },
        { exam: 'Campimetria visual formal', justify: 'Indicada apenas em macroadenoma ou queixa visual', expected: 'Não necessária neste caso' }
      ],
      expectedConduct: 'Agonista dopaminérgico: cabergolina 0,25–0,5 mg 1 a 2 vezes por semana, titulada pela prolactina (1ª escolha — mais eficaz e melhor tolerada que a bromocriptina) | Suspender a domperidona | Dosar prolactina em 1–3 meses; repetir RM em ~12 meses | Orientar retorno rápido da ovulação: usar contracepção (preservativo/DIU) até desejar engravidar | Ao engravidar: suspender a cabergolina e acompanhar clinicamente (risco baixo de crescimento do microadenoma) | Após ≥ 2 anos com prolactina normal e redução tumoral, considerar suspensão gradual | Cirurgia transesfenoidal se intolerância ou resistência | Ecocardiograma de rotina não é necessário nas doses usadas para prolactinoma (reservado a doses altas prolongadas)',
      expectedCommunication: 'Explicar que se trata de um tumor benigno, pequeno, tratado com comprimido | Evitar alarmismo ao usar a palavra "tumor" | Abordar a fertilidade com clareza e otimismo | Orientar contracepção e o que fazer ao engravidar | Verificar a compreensão',
      criticalErrors: [
        'Não excluir gestação diante de amenorreia',
        'Não investigar medicamentos hiperprolactinemiantes',
        'Solicitar RM antes de confirmar a hiperprolactinemia e excluir causas secundárias',
        'Indicar cirurgia como primeira linha em microprolactinoma',
        'Não orientar contracepção após início da cabergolina em paciente que não deseja engravidar no momento'
      ]
    },
    instD: {
      title: 'Hiperprolactinemia e Prolactinoma — Material de Estudo',
      sections: [
        {
          h: 'Definição e Causas',
          items: [
            {
              item: 'Prolactinoma é o adenoma hipofisário funcionante mais comum; micro < 10 mm, macro ≥ 10 mm.',
              score: 1,
              ref: 'Endocrine Society Guideline, 2011; Pituitary Society Consensus 2023'
            },
            {
              item: 'Causas: fisiológicas (gestação, lactação, estresse), medicamentos, hipotireoidismo, DRC, cirrose, compressão da haste, prolactinoma.',
              score: 1,
              ref: 'Petersenn S et al., Nat Rev Endocrinol 2023'
            }
          ]
        },
        {
          h: 'Diagnóstico',
          items: [
            {
              item: 'Uma dosagem elevada sem estresse da punção basta; excluir gestação, fármacos, hipotireoidismo e DRC.',
              score: 2,
              ref: 'Endocrine Society Guideline, 2011'
            },
            {
              item: 'Prolactina > 150–250 ng/mL sugere prolactinoma; macroprolactinemia deve ser pesquisada em assintomáticas.',
              score: 1,
              ref: 'Pituitary Society Consensus, 2023'
            },
            { item: 'RM de sela com gadolínio é o exame de imagem de escolha.', score: 1, ref: 'Endocrine Society Guideline, 2011' }
          ]
        },
        {
          h: 'Tratamento',
          items: [
            { item: 'Cabergolina é a primeira linha (normaliza prolactina em ~85% e reduz o tumor).', score: 2, ref: 'Pituitary Society Consensus, 2023' },
            {
              item: 'Microprolactinoma assintomático e sem desejo reprodutivo pode ser observado; amenorreia → tratar (risco ósseo) ou ACO.',
              score: 1,
              ref: 'Endocrine Society Guideline, 2011'
            },
            { item: 'Na gestação, suspender o agonista dopaminérgico no microadenoma e monitorar clinicamente.', score: 1, ref: 'Pituitary Society Consensus, 2023' }
          ]
        }
      ]
    }
  },

  // ENDOCRINOLOGIA — Osteoporose pós-menopausa estabelecida
  {
    id: 12,
    title: 'Fratura de vértebra após queda da própria altura',
    sub: 'Ambulatório de Ortopedia — Hospital Secundário',
    tema: 'Endocrinologia',
    topic: 'Osteoporose Pós-Menopausa com Fratura Vertebral',
    level: 'difícil',
    cardAccent: '#FF7043',
    instA: {
      scenario: 'Você está no ambulatório de ortopedia de um hospital secundário.',
      patient: 'M.L.S., 62 anos, sexo feminino, dona de casa.',
      complaint: 'Paciente vem após fratura vertebral em L2 após queda da própria altura há 2 semanas e refere perda de altura nos últimos anos.',
      tasks: [
        'Realize a anamnese dirigida à fratura e aos fatores de risco para osteoporose.',
        'Solicite o exame físico pertinente.',
        'Formule as hipóteses diagnósticas, incluindo causas secundárias.',
        'Solicite e interprete os exames complementares adequados.',
        'Defina a conduta terapêutica e as medidas de prevenção de novas fraturas.'
      ]
    },
    instB: {
      vitals: { PA: '130/80 mmHg', FC: '72 bpm', FR: '16 irpm', Peso: '58 kg', Altura: '1,55 m (referida aos 50 anos: 1,59 m)', IMC: '24,1 kg/m²' },
      physicalGeneral: 'Estado geral bom, hipercifose torácica acentuada e relato de perda de 4 cm de altura desde os 50 anos.',
      physicalSeg: 'COLUNA: hipercifose torácica, dor à palpação e percussão do processo espinhoso de L2, mobilidade lombar reduzida pela dor | NEUROLÓGICO: força, sensibilidade e reflexos preservados e simétricos em membros inferiores; sem alteração esfincteriana | MARCHA: lenta, com apoio; teste "levante e ande" (TUG) de 14 segundos | BOCA: dentes em bom estado, sem procedimento odontológico pendente',
      labs: [
        { test: 'Cálcio total', val: '8,5 mg/dL', ref: '8,5–10,5 mg/dL', alt: false },
        { test: 'Fósforo', val: '3,2 mg/dL', ref: '2,5–4,5 mg/dL', alt: false },
        { test: 'Fosfatase alcalina', val: '78 U/L', ref: '40–150 U/L', alt: false },
        { test: 'PTH', val: '72 pg/mL', ref: '15–65 pg/mL', alt: true },
        { test: '25-OH vitamina D', val: '18 ng/mL', ref: '> 30 ng/mL (grupos de risco)', alt: true },
        { test: 'Calciúria de 24 h', val: '85 mg/24 h', ref: '100–300 mg/24 h', alt: true },
        { test: 'TSH', val: '2,5 μUI/mL', ref: '0,4–4,0 μUI/mL', alt: false },
        { test: 'Creatinina (TFG)', val: '1,0 mg/dL (TFG 61 mL/min/1,73 m²)', ref: '0,6–1,2 mg/dL', alt: false },
        { test: 'Hemograma', val: 'Normal', ref: '—', alt: false },
        { test: 'VHS', val: '22 mm/h', ref: '< 30 mm/h', alt: false },
        { test: 'Eletroforese de proteínas séricas', val: 'Sem pico monoclonal', ref: 'Sem pico monoclonal', alt: false }
      ],
      image: {
        title: 'Radiografia de Coluna e Densitometria Óssea (DXA)',
        report: 'RX DE COLUNA TORACOLOMBAR (perfil): fratura em cunha de L2 com perda de ~30% da altura anterior (Genant grau 2); deformidade em cunha leve de T12 (Genant grau 1), não conhecida previamente.\n\nDXA: coluna lombar L1–L4 T-score −3,2; colo do fêmur T-score −2,9; fêmur total −2,6. Conclusão: osteoporose.'
      },
      note: 'Entregar a radiografia e a DXA apenas se solicitadas. FRAX (se o candidato calcular): risco de fratura maior em 10 anos 24% e de quadril 9%. Se o candidato perguntar sobre a avaliação odontológica, a paciente informa que foi ao dentista há 2 meses, sem pendências.',
      patientProfile: 'M.L.S., 62 anos, dona de casa, viúva, mora sozinha em casa com tapetes e escada. Menopausa aos 52 anos, sem terapia hormonal. Sedentária, pouca exposição solar, ingere pouco leite e derivados (~400 mg/dia de cálcio). Ex-tabagista (parou há 10 anos). Usou prednisona por 4 meses há 2 anos por "crise de asma". Usa omeprazol diariamente há anos. Mãe teve fratura de fêmur aos 75 anos.',
      script: [
        { trigger: 'Queixa principal', speech: 'Doutora, caí em casa há 2 semanas e quebrei uma vértebra nas costas.' },
        { trigger: 'Sobre a queda', speech: 'Foi uma queda boba, tropecei no tapete e caí sentada.' },
        { trigger: 'Sintomas atuais', speech: 'A dor melhorou um pouco, mas ainda dói quando me movimento. Estou usando colete.' },
        { trigger: 'Perda de altura', speech: 'Percebi que estou mais baixa. Tinha 1,59m, agora o médico mediu 1,55m.' },
        { trigger: 'Menopausa', speech: 'Entrei na menopausa aos 52 anos. Nunca fiz reposição hormonal.' },
        { trigger: 'Hábitos', speech: 'Sou sedentária, saio pouco de casa, não tomo muito sol e como pouco leite.' },
        { trigger: 'História familiar', speech: 'Minha mãe teve osteoporose e quebrou o fêmur aos 75 anos.' },
        { trigger: 'Perguntas do paciente', speech: 'Tenho osteoporose? Por que meus ossos estão fracos? Tem tratamento? Preciso tomar cálcio?' },
        { trigger: 'Sobre uso de corticoide', speech: 'Há uns dois anos tomei prednisona por uns quatro meses por causa de uma crise forte de asma.' },
        { trigger: 'Sobre outros remédios', speech: 'Tomo omeprazol todo dia faz anos, por causa do estômago. E a bombinha da asma quando preciso.' },
        { trigger: 'Sobre quedas e a casa', speech: 'Já caí outras duas vezes este ano. Moro sozinha, a casa tem tapete e escada pro quarto.' },
        { trigger: 'Sobre tabagismo e álcool', speech: 'Fumei 30 anos, parei faz 10. Bebida não tomo.' }
      ],
      hiddenInfo: 'Uso prévio de prednisona por 4 meses (causa secundária) — só revela se perguntada sobre corticoides | Uso crônico de omeprazol — só revela se perguntada sobre medicamentos | Duas quedas no último ano, mora sozinha com tapetes e escada — só revela se perguntada sobre quedas e ambiente | Ex-tabagista — só revela se perguntada',
      actorBehavior: 'Paciente movimenta-se devagar, com dor ao sentar e levantar, mão nas costas. Colaborativa e falante. Demonstra medo de "ficar corcunda como a mãe" e de perder a independência. Fica receosa ao ouvir sobre "injeção" e pergunta se o remédio "estraga o estômago".'
    },
    instC: {
      diagnosis: 'Osteoporose pós-menopausa estabelecida (grave) com fraturas vertebrais por fragilidade (L2 recente e T12 morfométrica) — muito alto risco de fratura —, associada a insuficiência de vitamina D com hiperparatireoidismo secundário e fatores de risco adicionais (corticoide prévio, IBP crônico, tabagismo, quedas).',
      differentials: [
        'Fratura patológica por mieloma múltiplo ou metástase — deve ser excluída em fratura vertebral; hemograma, VHS, cálcio e eletroforese normais',
        'Osteomalácia — vitamina D baixa; sai pela fosfatase alcalina e fósforo normais',
        'Hiperparatireoidismo primário — PTH alto, mas com cálcio normal-baixo e vitamina D baixa (secundário); reavaliar após repor vitamina D',
        'Osteoporose secundária a corticoide, hipertireoidismo ou doença celíaca — TSH normal; corticoide contribui',
        'Fratura traumática — sai pela queda da própria altura (trauma de baixa energia)'
      ],
      context: 'Mulher de 62 anos, 10 anos após a menopausa, com fratura vertebral de L2 após queda da própria altura, perda de 4 cm de altura e hipercifose. Fatores de risco: baixo peso, baixa ingesta de cálcio, pouca exposição solar, sedentarismo, tabagismo prévio, corticoide sistêmico, IBP crônico, quedas recorrentes e história materna de fratura de quadril. DXA com T-score −3,2 e fraturas vertebrais múltiplas caracterizam osteoporose grave de muito alto risco.',
      justify: 'Fratura vertebral por fragilidade estabelece o diagnóstico de osteoporose independentemente da DXA; T-score ≤ −2,5 confirma. Muito alto risco (AACE/ABRASSO): fratura recente (< 12 meses), fraturas múltiplas e T-score < −3,0. Causas secundárias graves (mieloma, metástase, hipertireoidismo, osteomalácia) foram excluídas.',
      expectedAnamnesis: 'Mecanismo da queda (baixa energia) | Dor atual e sinais neurológicos | Perda de altura e fraturas prévias | Idade da menopausa e terapia hormonal | Uso de corticoides, IBP, anticonvulsivantes, levotiroxina | Tabagismo e álcool | Ingesta de cálcio e exposição solar | História familiar de fratura de quadril | Quedas no último ano e riscos domiciliares | Saúde bucal (antes de antirreabsortivos)',
      expectedPhysical: 'Peso, altura e comparação com altura prévia | Inspeção da coluna (cifose) e palpação/percussão | Exame neurológico de membros inferiores | Avaliação de marcha e equilíbrio (TUG) | Avaliação da visão e de calçados',
      expectedExams: [
        { exam: 'Densitometria óssea (DXA)', justify: 'Gravidade e monitorização', expected: 'T-score −3,2 (coluna), −2,9 (colo femoral)' },
        { exam: 'Radiografia de coluna em perfil (ou VFA)', justify: 'Fraturas vertebrais morfométricas', expected: 'Fratura de L2 e T12' },
        {
          exam: 'Cálcio, fósforo, fosfatase alcalina, PTH, 25-OH vitamina D, creatinina',
          justify: 'Causas secundárias e segurança do tratamento',
          expected: 'Vitamina D baixa, PTH alto'
        },
        { exam: 'Hemograma, VHS, eletroforese de proteínas, TSH', justify: 'Excluir mieloma, metástase e hipertireoidismo', expected: 'Normais' },
        { exam: 'Calciúria de 24 h', justify: 'Avaliar absorção e hipercalciúria', expected: 'Baixa (deficiência de vitamina D)' },
        { exam: 'FRAX Brasil', justify: 'Estimar risco absoluto de fratura', expected: 'Fratura maior 24%, quadril 9%' }
      ],
      expectedConduct: 'Repor vitamina D: colecalciferol 50.000 UI/semana por 8 semanas, seguido de 7.000–14.000 UI/semana (meta 25-OH D > 30 ng/mL) | Cálcio: priorizar dieta (1.000–1.200 mg/dia); suplementar apenas o déficit, preferindo citrato de cálcio pelo uso de IBP | Tratamento farmacológico: por muito alto risco, considerar anabólico (teriparatida 20 mcg SC/dia por 24 meses ou romosozumabe) seguido de antirreabsortivo; alternativa no SUS: ácido zoledrônico 5 mg EV anual ou alendronato 70 mg VO semanal (em jejum, com água, sentada por 30 min), após corrigir a vitamina D | Analgesia da fratura e mobilização precoce; fisioterapia | Prevenção de quedas: retirar tapetes, barras de apoio, iluminação, revisão de medicamentos, exercícios de equilíbrio e fortalecimento | Reavaliar indicação do IBP | Repetir DXA em 1–2 anos',
      expectedCommunication: 'Explicar que a fratura ocorreu por fragilidade óssea e que há tratamento eficaz | Acolher o medo de perder a independência | Explicar como tomar o medicamento e os efeitos adversos raros (osteonecrose de mandíbula, fratura atípica) de forma proporcional | Envolver a paciente nas medidas de prevenção de quedas',
      criticalErrors: [
        'Não indicar tratamento farmacológico antiosteoporótico em paciente com fratura vertebral por fragilidade',
        'Tratar apenas com cálcio e vitamina D',
        'Não investigar causas secundárias (mieloma, metástase) diante de fratura vertebral',
        'Iniciar bisfosfonato sem avaliar vitamina D, cálcio e função renal',
        'Não orientar prevenção de quedas'
      ]
    },
    instD: {
      title: 'Osteoporose Pós-Menopausa — Material de Estudo',
      sections: [
        {
          h: 'Diagnóstico',
          items: [
            {
              item: 'Osteoporose: T-score ≤ −2,5 em coluna, colo do fêmur, fêmur total ou rádio 33%; ou fratura de fragilidade de quadril/vértebra, independentemente da DXA.',
              score: 2,
              ref: 'ABRASSO — Diretriz de Osteoporose, 2022; AACE 2020'
            },
            { item: 'Investigar fraturas vertebrais morfométricas (RX de perfil ou VFA) em perda de altura > 4 cm ou cifose.', score: 1, ref: 'AACE/ACE Guidelines, 2020' },
            {
              item: 'Causas secundárias: corticoide, hipogonadismo, hipertireoidismo, hiperparatireoidismo, mieloma, doença celíaca, IBP, anticonvulsivantes.',
              score: 1,
              ref: 'Harrison — Medicina Interna, 21ª ed.'
            }
          ]
        },
        {
          h: 'Estratificação de Risco',
          items: [
            {
              item: 'Muito alto risco: fratura recente (< 12 meses), fraturas múltiplas, T-score < −3,0, fratura em uso de tratamento ou FRAX muito elevado.',
              score: 2,
              ref: 'AACE/ACE Guidelines, 2020'
            }
          ]
        },
        {
          h: 'Tratamento',
          items: [
            {
              item: 'Muito alto risco: anabólico (teriparatida, abaloparatida, romosozumabe) seguido de antirreabsortivo é a sequência preferida.',
              score: 2,
              ref: 'AACE/ACE 2020; Endocrine Society 2020'
            },
            {
              item: 'Bisfosfonatos (alendronato, risedronato, zoledronato) e denosumabe para alto risco; denosumabe não deve ser interrompido sem transição (efeito rebote).',
              score: 1,
              ref: 'Endocrine Society Guideline, 2020'
            },
            {
              item: 'Corrigir vitamina D antes de bisfosfonatos (risco de hipocalcemia); cálcio total 1.000–1.200 mg/dia preferencialmente pela dieta.',
              score: 1,
              ref: 'ABRASSO, 2022'
            },
            { item: 'Prevenção de quedas e exercícios de resistência/equilíbrio reduzem fraturas.', score: 1, ref: 'World Guidelines for Falls Prevention, 2022' }
          ]
        }
      ]
    }
  },

  // ENDOCRINOLOGIA — Hipogonadismo masculino primário
  {
    id: 13,
    title: 'Cansaço, perda da libido e dificuldade de ereção há 1 ano',
    sub: 'Ambulatório de Urologia — Hospital Secundário',
    tema: 'Endocrinologia',
    topic: 'Hipogonadismo Masculino Primário',
    level: 'moderado',
    cardAccent: '#FF7043',
    instA: {
      scenario: 'Você está no ambulatório de urologia de um hospital secundário.',
      patient: 'R.F.A., 55 anos, sexo masculino, contador.',
      complaint: 'Fadiga crônica, redução da libido e dificuldade de ereção há 1 ano.',
      tasks: [
        'Realize a anamnese dirigida, incluindo o impacto na qualidade de vida.',
        'Solicite o exame físico pertinente.',
        'Formule as hipóteses diagnósticas.',
        'Solicite e interprete os exames complementares adequados.',
        'Defina a conduta, incluindo contraindicações e monitorização da reposição hormonal.'
      ]
    },
    instB: {
      vitals: { PA: '135/85 mmHg', FC: '78 bpm', FR: '16 irpm', Peso: '96 kg', Altura: '1,75 m', IMC: '31,3 kg/m²', 'Circunferência abdominal': '110 cm' },
      physicalGeneral: 'Bom estado geral, obesidade central, sem ginecomastia, pelos corporais reduzidos em tórax e face (barba rala, segundo o paciente "cada vez menos").',
      physicalSeg: 'GENITAIS: pênis sem alterações, sem placas palpáveis; testículos tópicos com volume de 12 mL bilateralmente (orquidômetro de Prader), consistência amolecida; epidídimos e cordões sem alterações; sem varicocele | TOQUE RETAL: próstata de volume normal, lisa, simétrica, fibroelástica, sem nódulos | CERVICAL: circunferência do pescoço 44 cm | MAMAS: sem ginecomastia',
      labs: [
        { test: 'Testosterona total (8 h, jejum)', val: '180 ng/dL', ref: '264–916 ng/dL', alt: true },
        { test: 'Testosterona total (8 h, jejum — repetida)', val: '195 ng/dL', ref: '264–916 ng/dL', alt: true },
        { test: 'Testosterona livre (calculada)', val: '3,2 ng/dL', ref: '5–21 ng/dL', alt: true },
        { test: 'SHBG', val: '28 nmol/L', ref: '16–55 nmol/L', alt: false },
        { test: 'LH', val: '12 mUI/mL', ref: '1,5–9 mUI/mL', alt: true },
        { test: 'FSH', val: '15 mUI/mL', ref: '1,5–12 mUI/mL', alt: true },
        { test: 'Prolactina', val: '8 ng/mL', ref: '< 20 ng/mL', alt: false },
        { test: 'TSH', val: '2,3 μUI/mL', ref: '0,4–4,0 μUI/mL', alt: false },
        { test: 'Glicemia de jejum', val: '102 mg/dL', ref: '70–99 mg/dL', alt: true },
        { test: 'HbA1c', val: '5,9%', ref: '< 5,7%', alt: true },
        { test: 'LDL-c', val: '158 mg/dL', ref: '< 130 mg/dL', alt: true },
        { test: 'HDL-c', val: '35 mg/dL', ref: '> 40 mg/dL', alt: true },
        { test: 'Triglicerídeos', val: '245 mg/dL', ref: '< 150 mg/dL', alt: true },
        { test: 'PSA total', val: '1,2 ng/mL', ref: '< 4,0 ng/mL', alt: false },
        { test: 'Hematócrito', val: '42%', ref: '40–54%', alt: false },
        { test: 'Ferritina', val: '180 ng/mL', ref: '30–400 ng/mL', alt: false }
      ],
      note: 'Entregar os exames apenas se solicitados. A segunda dosagem de testosterona só é entregue se o candidato pedir a repetição. Polissonografia (se solicitada): IAH de 34 eventos/h — apneia obstrutiva do sono grave.',
      patientProfile: 'R.F.A., 55 anos, contador, casado há 25 anos, dois filhos adultos, não deseja mais filhos. Sedentário, dieta rica em carboidratos, bebe 2–3 doses de destilado nos fins de semana. Teve orquite após caxumba aos 16 anos, da qual "nem lembrava". Ronca alto e cochila dirigindo. Leu sobre "chip da beleza" e quer reposição para "voltar a ter disposição".',
      script: [
        { trigger: 'Queixa principal', speech: 'Doutor, estou sem energia, sem vontade de fazer nada há mais de 1 ano.' },
        { trigger: 'Sobre fadiga', speech: 'Acordo cansado, não tenho disposição para trabalhar.' },
        { trigger: 'Sobre libido', speech: 'Minha libido caiu muito. Não tenho mais vontade de ter relações como antes.' },
        { trigger: 'Sobre ereção', speech: 'Tenho dificuldade de manter a ereção. Isso está afetando meu relacionamento.' },
        { trigger: 'Humor', speech: 'Me sinto desanimado, às vezes irritado.' },
        { trigger: 'Sono', speech: 'Durmo mal, acordo várias vezes à noite. Minha esposa diz que ronco muito.' },
        { trigger: 'Peso', speech: 'Engordei uns 10 kg nos últimos anos, principalmente na barriga. Perdi massa muscular.' },
        { trigger: 'Hábitos', speech: 'Sedentário, não faço exercício. Dieta ruim, como muito carboidrato. Não fumo, bebo socialmente.' },
        { trigger: 'Perguntas do paciente', speech: 'É normal isso na minha idade? Tem tratamento? É hormônio?' },
        { trigger: 'Antecedentes pessoais', speech: 'Não tenho doença nenhuma diagnosticada, não tomo remédio. Nunca operei.' },
        { trigger: 'Sobre sonolência diurna', speech: 'Durmo em qualquer lugar. Outro dia quase cochilei no volante voltando do trabalho.' },
        { trigger: 'Sobre doenças na adolescência', speech: 'Agora que o senhor perguntou... tive caxumba com 16 anos e o saco inchou muito, ficou doendo uns dias.' },
        { trigger: 'Sobre desejo de ter filhos', speech: 'Não, filho não quero mais. Já tenho dois criados.' }
      ],
      hiddenInfo: 'Orquite urliana aos 16 anos (causa do hipogonadismo primário) — só revela se perguntado especificamente sobre caxumba ou inflamação nos testículos | Sonolência diurna excessiva e quase acidente ao volante (apneia grave não tratada) — só revela se perguntado sobre sonolência | Quer testosterona por indicação de amigos ("chip") — só revela se perguntado sobre expectativas',
      actorBehavior: 'Paciente constrangido ao falar sobre a ereção; fala baixo e evita o olhar. Insiste em "receber hormônio" logo. Aceita investigar o sono e mudar hábitos se o candidato explicar os riscos de repor testosterona sem tratar a apneia. Valoriza um tom respeitoso e sem piadas.'
    },
    instC: {
      diagnosis: 'Hipogonadismo masculino primário (hipergonadotrófico) confirmado — testosterona total baixa em duas dosagens matinais com LH/FSH elevados e testículos reduzidos —, provavelmente sequela de orquite urliana, associado a obesidade, pré-diabetes, dislipidemia e suspeita de apneia obstrutiva do sono grave.',
      differentials: [
        'Hipogonadismo secundário/funcional pela obesidade — causa comum de testosterona baixa, mas cursa com LH/FSH baixos ou normais; aqui estão elevados',
        'Síndrome de Klinefelter — hipogonadismo primário; testículos muito pequenos (< 4–6 mL) e alto; considerar cariótipo se dúvida',
        'Depressão — fadiga, desânimo e libido baixa; rastrear (PHQ-9)',
        'Disfunção erétil vasculogênica — fatores de risco cardiometabólicos presentes; coexistente',
        'Apneia obstrutiva do sono — fadiga, sonolência e testosterona baixa; deve ser tratada antes da reposição'
      ],
      context: 'Homem de 55 anos com sintomas sugestivos de deficiência androgênica (libido reduzida, disfunção erétil, fadiga, perda de massa muscular e de pelos), testosterona total baixa confirmada em duas coletas matinais em jejum e gonadotrofinas elevadas, caracterizando falência testicular. História de orquite pós-caxumba explica a etiologia. Coexistem obesidade, pré-diabetes, dislipidemia e provável apneia obstrutiva do sono grave, que é contraindicação relativa à reposição até ser tratada.',
      justify: 'Hipogonadismo exige sintomas + testosterona total < 264 ng/dL em duas dosagens matinais (7–10 h), em jejum. LH/FSH elevados definem a forma primária; prolactina e TSH normais. PSA e hematócrito basais normais. Sonolência excessiva com ronco e pescoço largo indicam polissonografia antes da reposição.',
      expectedAnamnesis: 'Sintomas sexuais (libido, ereções matinais, disfunção erétil) | Fadiga, humor, concentração | Perda de massa muscular e pelos, ginecomastia | Antecedentes testiculares: criptorquidia, caxumba/orquite, trauma, quimioterapia/radioterapia | Uso de anabolizantes, opioides, corticoides | Ronco, apneias testemunhadas, sonolência diurna | Desejo de fertilidade | Sintomas urinários (próstata) | Fatores de risco cardiovascular e eventos recentes | Álcool',
      expectedPhysical: 'IMC e circunferência abdominal | Caracteres sexuais secundários e ginecomastia | Volume e consistência testicular (orquidômetro) | Toque retal | Circunferência cervical',
      expectedExams: [
        { exam: 'Testosterona total matinal em jejum (2 dosagens)', justify: 'Confirmar deficiência', expected: '180 e 195 ng/dL' },
        { exam: 'LH e FSH', justify: 'Diferenciar primário de secundário', expected: 'Elevados (primário)' },
        { exam: 'Prolactina e TSH', justify: 'Causas secundárias', expected: 'Normais' },
        { exam: 'PSA e hematócrito basais', justify: 'Segurança antes da reposição', expected: 'PSA 1,2; Ht 42%' },
        { exam: 'Polissonografia', justify: 'Suspeita de apneia grave (contraindicação relativa)', expected: 'IAH 34/h' },
        { exam: 'Glicemia, HbA1c, perfil lipídico', justify: 'Avaliação cardiometabólica', expected: 'Pré-diabetes e dislipidemia' }
      ],
      expectedConduct: 'Tratar a apneia obstrutiva do sono (CPAP) antes de iniciar a testosterona; orientar não dirigir sonolento | Mudança de estilo de vida: perda de peso, atividade física, redução do álcool | Após tratar a apneia: reposição de testosterona (gel transdérmico 50 mg/dia, undecilato de testosterona 1.000 mg IM a cada 10–14 semanas ou cipionato 200 mg IM a cada 2–3 semanas), visando testosterona na faixa média normal | Contraindicações: câncer de próstata ou mama, Ht > 48–50%, PSA > 4 (ou > 3 com alto risco) sem avaliação urológica, apneia grave não tratada, IC descompensada, IAM/AVC nos últimos 6 meses, desejo de fertilidade | Monitorização: testosterona, hematócrito e PSA em 3–6 meses e depois anualmente; reavaliar sintomas | Tratar pré-diabetes e dislipidemia (estatina conforme risco) | Inibidor de PDE-5 pode ser associado para a disfunção erétil',
      expectedCommunication: 'Abordar a sexualidade com naturalidade e respeito | Explicar a causa provável (caxumba) | Alinhar expectativas sobre a reposição e desfazer o mito do "chip da beleza" | Explicar por que tratar a apneia antes | Combinar o seguimento',
      criticalErrors: [
        'Diagnosticar hipogonadismo com dosagem única ou coletada à tarde',
        'Não dosar LH e FSH',
        'Iniciar testosterona sem PSA e hematócrito basais',
        'Iniciar testosterona com apneia obstrutiva grave não tratada',
        'Não perguntar sobre desejo de fertilidade antes da reposição'
      ]
    },
    instD: {
      title: 'Hipogonadismo Masculino — Material de Estudo',
      sections: [
        {
          h: 'Diagnóstico',
          items: [
            {
              item: 'Sintomas + testosterona total < 264 ng/dL em duas coletas matinais em jejum.',
              score: 2,
              ref: 'Endocrine Society Guideline, 2018; AUA Guideline, 2018'
            },
            {
              item: 'LH/FSH elevados = primário (testicular); baixos/normais = secundário (hipotálamo-hipofisário) → prolactina, ferritina, RM de sela se indicado.',
              score: 2,
              ref: 'Endocrine Society Guideline, 2018'
            }
          ]
        },
        {
          h: 'Reposição de Testosterona',
          items: [
            {
              item: 'Contraindicações: câncer de próstata/mama, desejo de fertilidade, Ht > 50%, apneia grave não tratada, IC grave, IAM/AVC < 6 meses, PSA elevado sem avaliação.',
              score: 2,
              ref: 'Endocrine Society Guideline, 2018'
            },
            {
              item: 'Ensaio TRAVERSE: reposição em homens hipogonádicos de alto risco CV não aumentou eventos cardiovasculares maiores.',
              score: 1,
              ref: 'Lincoff AM et al., NEJM 2023'
            },
            { item: 'Monitorar testosterona, hematócrito e PSA em 3–12 meses e depois anualmente.', score: 1, ref: 'Endocrine Society Guideline, 2018' },
            { item: 'Testosterona exógena suprime a espermatogênese — não usar em quem deseja fertilidade.', score: 1, ref: 'AUA Guideline, 2018' }
          ]
        },
        {
          h: 'Hipogonadismo Funcional',
          items: [
            { item: 'Na obesidade, perda de peso eleva a testosterona; tratar comorbidades antes de repor.', score: 1, ref: 'EAA Guidelines, 2020' }
          ]
        }
      ]
    }
  },

  // ENDOCRINOLOGIA — Síndrome climatérica pós-menopausa
  {
    id: 14,
    title: 'Fogachos intensos e secura vaginal',
    sub: 'Ambulatório de Ginecologia — Hospital Secundário',
    tema: 'Endocrinologia',
    topic: 'Síndrome Climatérica — Terapia Hormonal da Menopausa',
    level: 'moderado',
    cardAccent: '#FF7043',
    instA: {
      scenario: 'Você está no ambulatório de ginecologia de um hospital secundário.',
      patient: 'S.M.P., 52 anos, sexo feminino, gerente comercial.',
      complaint: 'Fogachos intensos há 6 meses (10–15 episódios por dia), despertares noturnos, secura vaginal e dor na relação sexual.',
      tasks: [
        'Realize a anamnese dirigida, incluindo contraindicações à terapia hormonal.',
        'Avalie o impacto dos sintomas na qualidade de vida.',
        'Solicite e interprete o exame físico e os exames complementares.',
        'Formule a hipótese diagnóstica.',
        'Defina a conduta e oriente a paciente sobre riscos, benefícios e alternativas.'
      ]
    },
    instB: {
      vitals: { PA: '125/75 mmHg', FC: '72 bpm', FR: '14 irpm', Peso: '68 kg', Altura: '1,64 m', IMC: '25,3 kg/m²' },
      physicalGeneral: 'Estado geral bom, sem sinais de hiperandrogenismo.',
      physicalSeg: 'MAMAS: simétricas, sem nódulos, sem descarga papilar ou retrações; axilas livres | GENITÁLIA: vulva com redução do trofismo; mucosa vaginal pálida, ressecada, com petéquias e perda das rugosidades; pH vaginal 6,5 | TOQUE VAGINAL: útero de volume normal, móvel, indolor; anexos não palpáveis | MEMBROS: sem varizes calibrosas, sem edema',
      labs: [
        { test: 'TSH', val: '2.8 μUI/mL', ref: '0.4 - 4.0', alt: false },
        { test: 'Glicemia jejum', val: '92 mg/dL', ref: '70 - 100', alt: false },
        { test: 'Colesterol total', val: '235 mg/dL', ref: '< 200', alt: true },
        { test: 'LDL', val: '152 mg/dL', ref: '< 130', alt: true },
        { test: 'HDL', val: '58 mg/dL', ref: '> 50', alt: false },
        { test: 'Triglicerídeos', val: '125 mg/dL', ref: '< 150', alt: false },
        { test: 'Creatinina', val: '0.9 mg/dL', ref: '0.6 - 1.2', alt: false },
        { test: 'TGO', val: '28 U/L', ref: '< 40', alt: false },
        { test: 'TGP', val: '32 U/L', ref: '< 40', alt: false }
      ],
      image: {
        title: 'Mamografia e Ultrassom Transvaginal',
        report: 'Mamografia recente BI-RADS 1 com parênquima heterogêneo e sem lesões suspeitas. Ultrassom transvaginal mostra útero e anexos de aspecto habitual e endométrio atrófico de 4 mm.'
      },
      note: 'Entregar o laudo de mamografia e USG apenas se solicitados. FSH/estradiol: se o candidato solicitar, o avaliador informa que não são necessários para o diagnóstico em mulher > 45 anos com amenorreia ≥ 12 meses (FSH 78 mUI/mL, estradiol < 15 pg/mL, se insistir). Risco cardiovascular em 10 anos (escore global), se calculado: baixo (< 5%).',
      patientProfile: 'S.M.P., 52 anos, gerente comercial, casada, dois filhos. Última menstruação há 14 meses. Nunca fumou, não bebe. Sem doenças conhecidas. Tem enxaqueca sem aura desde jovem. A mãe teve trombose venosa na perna após cirurgia de quadril aos 70 anos. Faz caminhada 2 vezes por semana. Os fogachos atrapalham reuniões e o sono; já faltou ao trabalho por cansaço. Ouviu de amigas que "hormônio dá câncer".',
      script: [
        { trigger: 'Queixa principal', speech: 'Doutora, estou com fogachos terríveis, uns 10-15 por dia. Está insuportável.' },
        {
          trigger: 'Fogachos',
          speech: 'De repente sinto uma onda de calor que sobe pelo corpo, fico toda vermelha, suando. Dura uns 2-3 minutos, mas é muito desconfortável.'
        },
        { trigger: 'Sono', speech: 'Durmo muito mal por causa dos fogachos noturnos. Acordo cansada, irritada.' },
        { trigger: 'Genitourinário', speech: 'Sinto muita secura vaginal. A relação sexual está dolorosa, queima.' },
        { trigger: 'História menstrual', speech: 'Minha menstruação parou há mais de 1 ano. Antes era regular.' },
        { trigger: 'Antecedentes', speech: 'Não tenho doenças. Não tomo nenhum remédio. Não fumo, nunca fumei. Não bebo.' },
        {
          trigger: 'História ginecológica',
          speech: 'Nunca tive câncer de mama ou de útero. Ninguém na família teve câncer de mama. Fiz mamografia há 3 meses, estava normal.'
        },
        { trigger: 'Perguntas da paciente', speech: 'Isso é menopausa? Vou ficar assim para sempre? Tem tratamento? Posso tomar hormônio? Hormônio não causa câncer?' },
        { trigger: 'Sobre humor e trabalho', speech: 'Ando irritada, chorona. Numa reunião importante fiquei encharcada de suor, morri de vergonha.' },
        {
          trigger: 'Sobre trombose, AVC, infarto ou doença no fígado',
          speech: 'Eu nunca tive trombose. Mas minha mãe teve uma na perna depois de operar o quadril, já idosa.'
        },
        { trigger: 'Sobre enxaqueca', speech: 'Tenho enxaqueca desde mocinha, mas sem aquelas luzes antes. Melhorou depois que a menstruação parou.' },
        { trigger: 'Sobre sangramento após a menopausa', speech: 'Não, nunca mais sangrou nada desde que parou.' }
      ],
      hiddenInfo: 'Mãe com trombose venosa após cirurgia (favorece via transdérmica) — só revela se perguntada sobre trombose na família | Enxaqueca sem aura — só revela se perguntada sobre cefaleia | Irritabilidade e episódio constrangedor no trabalho — só revela se perguntada sobre impacto na vida | Medo de câncer com hormônio — só revela se o candidato explorar crenças',
      actorBehavior: 'Paciente cansada, um pouco irritada, abana-se com uma pasta durante a consulta. Pergunta diretamente se "hormônio dá câncer". Fica receptiva se o candidato explicar riscos e benefícios com números e decidir em conjunto. Mostra-se constrangida ao falar da dispareunia.'
    },
    instC: {
      diagnosis: 'Síndrome climatérica pós-menopausa (amenorreia há 14 meses) com sintomas vasomotores moderados a graves e síndrome geniturinária da menopausa, em mulher de 52 anos sem contraindicações à terapia hormonal — dentro da "janela de oportunidade".',
      differentials: [
        'Hipertireoidismo — fogachos, sudorese, irritabilidade; sai pelo TSH normal',
        'Efeito de medicamentos (tamoxifeno, inibidores de aromatase, ISRS) — não usa medicamentos',
        'Feocromocitoma / síndrome carcinoide — crises paroxísticas com hipertensão ou diarreia; sem dados sugestivos',
        'Transtorno de ansiedade/depressão — irritabilidade e insônia podem coexistir; rastrear',
        'Vaginite infecciosa — dispareunia; sai pelos achados atróficos sem corrimento'
      ],
      context: 'Mulher de 52 anos com amenorreia há 14 meses, fogachos intensos e sintoma geniturinário. Hemograma e exames metabólicos compatíveis com menopausa, sem contraindicações claras à terapia hormonal.',
      justify: 'Menopausa é diagnóstico clínico: amenorreia ≥ 12 meses em mulher > 45 anos (FSH/estradiol desnecessários). Sintomas vasomotores frequentes com impacto no sono e no trabalho + atrofia vulvovaginal = indicação de terapia hormonal. Idade < 60 anos e < 10 anos de menopausa, risco cardiovascular baixo, mamografia recente normal, sem sangramento pós-menopausa e sem antecedente pessoal de trombose, câncer hormônio-dependente, doença coronariana, AVC ou hepatopatia.',
      expectedAnamnesis: 'Características e frequência dos fogachos e sudorese noturna | Sono, humor e impacto no trabalho e nas relações | Sintomas geniturinários: secura, dispareunia, disúria, urgência | Data da última menstruação e sangramento pós-menopausa | Contraindicações: câncer de mama/endométrio, TEV, AVC, doença coronariana, hepatopatia ativa, lúpus com SAF | Enxaqueca com aura | Tabagismo | História familiar de câncer de mama e trombose | Rastreios em dia (mamografia, citologia) | Preferências e crenças sobre hormônios',
      expectedPhysical: 'PA, peso e IMC | Exame das mamas | Exame ginecológico com avaliação do trofismo vaginal | Avaliação de membros (varizes, edema)',
      expectedExams: [
        { exam: 'Mamografia (rastreio em dia)', justify: 'Antes de iniciar terapia hormonal', expected: 'BI-RADS 1' },
        { exam: 'Perfil lipídico, glicemia', justify: 'Risco cardiovascular', expected: 'LDL 152, glicemia normal' },
        { exam: 'TSH', justify: 'Diferencial dos sintomas vasomotores', expected: 'Normal' },
        { exam: 'Citologia oncótica conforme rastreio', justify: 'Rastreio do câncer de colo', expected: 'Em dia' },
        { exam: 'USG transvaginal', justify: 'Não obrigatória sem sangramento; útil como basal', expected: 'Endométrio 4 mm' },
        { exam: 'FSH/estradiol', justify: 'Não necessários para o diagnóstico', expected: 'Dispensáveis' }
      ],
      expectedConduct: 'Terapia hormonal combinada contínua (útero presente e > 1 ano de amenorreia): estradiol transdérmico (gel 0,5–1,5 mg/dia ou adesivo 25–50 mcg/dia) — via preferida pela história familiar de trombose, enxaqueca e LDL elevado — + progesterona micronizada 100 mg/dia (ou 200 mg 12–14 dias/mês) ou DIU de levonorgestrel para proteção endometrial | Menor dose eficaz pelo tempo necessário, com reavaliação anual | Síndrome geniturinária: estrogênio vaginal em baixa dose (estriol ou promestrieno) se persistir; hidratantes e lubrificantes vaginais | Alternativas não hormonais se contraindicação ou preferência: ISRS/IRSN (paroxetina 7,5 mg, venlafaxina 37,5–75 mg), gabapentina, fezolinetanto | Estilo de vida: atividade física, controle de peso, evitar gatilhos (álcool, cafeína, calor), higiene do sono | Manter rastreio mamário; investigar qualquer sangramento | Abordar perfil lipídico com estratificação de risco',
      expectedCommunication: 'Validar o impacto dos sintomas | Explicar riscos e benefícios com números absolutos (risco de câncer de mama pequeno, dependente do tempo e do progestagênio) | Desfazer mitos sem minimizar riscos | Decidir em conjunto o tipo de tratamento | Abordar a sexualidade com naturalidade',
      criticalErrors: [
        'Prescrever estrogênio isolado em mulher com útero',
        'Prescrever terapia hormonal sem investigar contraindicações (TEV, câncer de mama/endométrio, doença cardiovascular, hepatopatia, sangramento não esclarecido)',
        'Prescrever estrogênio oral sem considerar a via transdérmica em paciente com fatores de risco para trombose',
        'Não oferecer alternativa não hormonal quando houver contraindicação ou recusa',
        'Exigir FSH para diagnosticar menopausa em mulher > 45 anos com amenorreia ≥ 12 meses'
      ]
    },
    instD: {
      title: 'Menopausa e Terapia Hormonal — Material de Estudo',
      sections: [
        {
          h: 'Definição e Diagnóstico',
          items: [
            {
              item: 'Menopausa: 12 meses de amenorreia após a última menstruação; diagnóstico clínico em mulheres > 45 anos.',
              score: 1,
              ref: 'NICE NG23 Menopause, 2024 update'
            },
            {
              item: 'Síndrome geniturinária: secura, dispareunia, sintomas urinários; progressiva e não melhora espontaneamente.',
              score: 1,
              ref: 'The Menopause Society — GSM Position Statement, 2020'
            }
          ]
        },
        {
          h: 'Terapia Hormonal',
          items: [
            {
              item: 'Tratamento mais eficaz para sintomas vasomotores; benefício maior que risco em < 60 anos ou < 10 anos de menopausa.',
              score: 2,
              ref: 'The Menopause Society — Hormone Therapy Position Statement, 2022'
            },
            {
              item: 'Útero presente exige progestagênio (ou DIU-LNG); progesterona micronizada tem perfil mamário mais favorável.',
              score: 2,
              ref: 'FEBRASGO / SOBRAC — Consenso de TH, 2024'
            },
            {
              item: 'Via transdérmica não aumenta o risco de TEV — preferida em obesidade, enxaqueca, hipertrigliceridemia ou risco trombótico.',
              score: 1,
              ref: 'Vinogradova Y et al., BMJ 2019'
            },
            {
              item: 'Contraindicações: câncer de mama/endométrio, TEV ou AVC prévio, doença coronariana, hepatopatia ativa, sangramento não esclarecido, porfiria.',
              score: 1,
              ref: 'FEBRASGO, 2024'
            }
          ]
        },
        {
          h: 'Alternativas Não Hormonais',
          items: [
            {
              item: 'ISRS/IRSN, gabapentina e antagonista do receptor NK3 (fezolinetanto) reduzem fogachos.',
              score: 1,
              ref: 'The Menopause Society — Nonhormone Therapy Position Statement, 2023'
            },
            { item: 'Estrogênio vaginal em baixa dose tem absorção sistêmica mínima e trata a síndrome geniturinária.', score: 1, ref: 'The Menopause Society, 2020' }
          ]
        }
      ]
    }
  },

  // ENDOCRINOLOGIA — Obesidade grau III
  {
    id: 15,
    title: 'Encaminhada para avaliar cirurgia bariátrica',
    sub: 'Ambulatório de Obesidade — Hospital Terciário',
    tema: 'Endocrinologia',
    topic: 'Obesidade Grau III — Avaliação para Cirurgia Bariátrica',
    level: 'moderado',
    cardAccent: '#FF7043',
    instA: {
      scenario: 'Ambulatório de obesidade e cirurgia bariátrica de um hospital terciário. Primeira consulta.',
      patient: 'A.C.L., 38 anos, sexo feminino, auxiliar administrativa.',
      complaint: 'Paciente encaminhada para avaliação de cirurgia bariátrica. Refere dificuldade de perder peso apesar de múltiplas tentativas de dieta, com piora progressiva nos últimos 10 anos.',
      tasks: [
        'Realize a anamnese dirigida à história ponderal, às tentativas de tratamento e às comorbidades.',
        'Solicite e interprete os dados do exame físico.',
        'Solicite e interprete os exames complementares.',
        'Formule o diagnóstico e as comorbidades associadas.',
        'Defina a conduta e oriente a paciente sobre as opções terapêuticas, incluindo a cirurgia.'
      ]
    },
    instB: {
      vitals: {
        PA: '148/95 mmHg (manguito adequado para obesos)',
        FC: '82 bpm',
        FR: '18 irpm',
        SpO2: '95% em ar ambiente',
        Peso: '128 kg',
        Altura: '1,60 m',
        IMC: '50,0 kg/m²',
        'Circunferência abdominal': '125 cm',
        'Circunferência cervical': '42 cm'
      },
      physicalGeneral: 'Obesidade grau III com distribuição central. Acantose nigricans cervical, axilar e inguinal. Estrias abdominais claras. Intertrigo submamário leve.',
      physicalSeg: 'CARDIOVASCULAR: RCR 2T, BNF, sem sopros; pulsos periféricos presentes | RESPIRATÓRIO: MV presente bilateralmente, sem RA; expansibilidade reduzida | ABDOME: globoso, panículo adiposo volumoso, fígado de difícil palpação | MEMBROS INFERIORES: edema 1+/4+ em tornozelos; varizes reticulares bilaterais | OROFARINGE: Mallampati IV',
      labs: [
        { test: 'Glicemia de jejum', val: '115 mg/dL', ref: '70–99 mg/dL', alt: true },
        { test: 'HbA1c', val: '6,3%', ref: '< 5,7%', alt: true },
        { test: 'Colesterol total', val: '248 mg/dL', ref: '< 190 mg/dL', alt: true },
        { test: 'LDL-c', val: '168 mg/dL', ref: '< 130 mg/dL', alt: true },
        { test: 'HDL-c', val: '38 mg/dL', ref: '> 50 mg/dL (mulheres)', alt: true },
        { test: 'Triglicerídeos', val: '285 mg/dL', ref: '< 150 mg/dL', alt: true },
        { test: 'TGO / TGP', val: '58 / 72 U/L', ref: '< 40 U/L', alt: true },
        { test: 'GGT', val: '85 U/L', ref: '< 50 U/L', alt: true },
        { test: 'Plaquetas', val: '245.000/mm³', ref: '150.000–400.000/mm³', alt: false },
        { test: 'Creatinina', val: '1,0 mg/dL', ref: '0,6–1,2 mg/dL', alt: false },
        { test: 'TSH', val: '3,2 μUI/mL', ref: '0,4–4,0 μUI/mL', alt: false },
        { test: 'Ácido úrico', val: '7,2 mg/dL', ref: '2,5–6,0 mg/dL', alt: true },
        { test: 'Ferritina / Vitamina B12 / 25-OH D', val: '45 ng/mL / 310 pg/mL / 16 ng/mL', ref: '> 30 / > 300 / > 20 ng/mL', alt: true }
      ],
      image: {
        title: 'USG de Abdome e Polissonografia',
        report: 'USG DE ABDOME TOTAL: fígado aumentado de volume, difusamente hiperecogênico (esteatose acentuada). Vesícula biliar sem cálculos.\n\nPOLISSONOGRAFIA: índice de apneia-hipopneia (IAH) de 32 eventos/hora, SpO2 mínima de 82%. Conclusão: apneia obstrutiva do sono grave.'
      },
      note: 'Entregar laboratório, USG e polissonografia apenas se solicitados. FIB-4 calculado (se o candidato pedir): 1,08 (baixo risco de fibrose avançada). Se o candidato perguntar sobre compulsão alimentar, a atriz revela os episódios (ver informações ocultas).',
      patientProfile: 'A.C.L., 38 anos, auxiliar administrativa, casada, um filho de 10 anos. Obesa desde a infância, com piora após a gestação. Hipertensa em uso de losartana 50 mg/dia. Usa anticoncepcional oral combinado. Já fez inúmeras dietas com efeito sanfona; nunca usou medicamento para obesidade. Come escondido à noite quando está ansiosa. Mãe diabética. Muito motivada para a cirurgia, mas acha que "depois da cirurgia está tudo resolvido".',
      script: [
        { trigger: 'Queixa principal', speech: 'Doutora, estou com obesidade há muitos anos e não consigo emagrecer. Vim avaliar a cirurgia bariátrica.' },
        {
          trigger: 'História ponderal',
          speech: 'Sempre fui gordinha desde criança. Piorou muito depois da gravidez, há 10 anos. Hoje peso 128 quilos, meu peso máximo.'
        },
        {
          trigger: 'Tentativas prévias',
          speech: 'Já fiz várias dietas: nutricionista, dietas da moda, shakes. Perco um pouco de peso mas sempre volto. Já tentei academia mas é difícil, me canso muito. Nunca usei remédio para emagrecer.'
        },
        {
          trigger: 'Comorbidades',
          speech: 'Tenho pressão alta, tomo losartana. Me disseram que tenho pré-diabetes. Meu colesterol é alto. Ronco muito à noite, meu marido reclama.'
        },
        { trigger: 'Sintomas de SAOS', speech: 'Acordo cansada, com sono durante o dia. Tenho muita falta de ar aos esforços.' },
        {
          trigger: 'Impacto na vida',
          speech: 'Não consigo fazer coisas simples, como subir escada. Me sinto mal com meu corpo, tenho vergonha. Dificuldade de encontrar roupas. Não consigo brincar direito com meu filho.'
        },
        { trigger: 'Motivação', speech: 'Quero muito fazer a cirurgia. Tenho medo de ficar doente, minha mãe tem diabetes. Quero ter qualidade de vida, viver mais.' },
        { trigger: 'Pergunta sobre indicação', speech: 'Eu tenho indicação para cirurgia?' },
        { trigger: 'Pergunta sobre riscos', speech: 'Como é a cirurgia? Vou precisar fazer tratamento antes? Quais são os riscos? Vou emagrecer quanto?' },
        {
          trigger: 'Sobre compulsão alimentar',
          speech: 'Tem noite que eu como muito, muito mesmo, escondido, sem fome. Depois me sinto péssima, culpada. Acontece umas duas vezes por semana.'
        },
        { trigger: 'Sobre contracepção e planos de gravidez', speech: 'Tomo pílula. Não quero mais filhos agora, talvez daqui a uns anos.' },
        { trigger: 'Sobre álcool e tabagismo', speech: 'Não fumo. Bebo raramente, numa festa.' }
      ],
      hiddenInfo: 'Episódios de compulsão alimentar 2x/semana (transtorno de compulsão alimentar a ser tratado antes da cirurgia) — só revela se perguntada sobre o padrão alimentar/compulsão | Usa ACO combinado (risco trombótico perioperatório e menor absorção após bypass) — só revela se perguntada sobre contracepção | Expectativa irreal de "resolver tudo" com a cirurgia — só revela se o candidato explorar expectativas',
      actorBehavior: 'Paciente ansiosa e muito motivada, fala rápido sobre o desejo de operar. Fica envergonhada ao falar de comer escondido e só revela se o candidato for acolhedor e não julgador. Desanima se ouvir que precisa de "mais dieta", mas aceita o preparo multidisciplinar quando entende que é para a segurança da cirurgia.'
    },
    instC: {
      diagnosis: 'Obesidade grau III (IMC 50 kg/m²) com comorbidades: hipertensão arterial não controlada, pré-diabetes, dislipidemia, doença hepática esteatótica associada à disfunção metabólica (MASLD), apneia obstrutiva do sono grave e provável transtorno de compulsão alimentar — com indicação de cirurgia bariátrica após preparo multidisciplinar.',
      differentials: [
        'Hipotireoidismo — causa secundária de ganho de peso; excluído pelo TSH normal',
        'Síndrome de Cushing — obesidade central; investigar se estrias violáceas largas, fraqueza proximal, equimoses; estrias claras e quadro de longa data tornam improvável',
        'Obesidade induzida por medicamentos (antipsicóticos, corticoides, insulina) — sem uso',
        'Transtorno de compulsão alimentar — comorbidade frequente; deve ser identificado e tratado antes da cirurgia'
      ],
      context: 'Mulher de 38 anos com IMC 50.0 kg/m², CA 125 cm, história de obesidade de longa data e múltiplas comorbidades que preenchem critérios para cirurgia bariátrica. Exames confirmam pré-diabetes, dislipidemia, alterações hepáticas e SAOS moderada.',
      justify: 'IMC ≥ 40 kg/m² (ou ≥ 35 com comorbidades) com falha do tratamento clínico, idade entre 18 e 65 anos, é indicação de cirurgia bariátrica (Resolução CFM 2.172/2017); diretrizes internacionais (ASMBS/IFSO 2022) indicam a partir de IMC ≥ 35 independentemente de comorbidades. A avaliação multidisciplinar identifica e otimiza comorbidades (AOS grave, HAS, disglicemia) e contraindicações relativas (transtorno alimentar não tratado).',
      expectedAnamnesis: 'História ponderal (início, peso máximo, gatilhos) | Tentativas de tratamento: dietas, atividade física, medicamentos | Padrão alimentar, compulsão e beliscos noturnos | Comorbidades: HAS, DM, dislipidemia, AOS, refluxo, artropatias, infertilidade | Sintomas de AOS (ronco, apneias, sonolência) | Saúde mental: depressão, ansiedade, transtornos alimentares, uso de álcool e drogas | Medicamentos e contracepção | Tabagismo | Impacto funcional e na qualidade de vida | Motivação, rede de apoio e expectativas',
      expectedPhysical: 'Peso, altura, IMC, circunferência abdominal e cervical | PA com manguito adequado | Acantose nigricans e estrias | Sinais de Cushing | Avaliação de via aérea (Mallampati) | Edema e varizes de membros inferiores',
      expectedExams: [
        {
          exam: 'Glicemia, HbA1c, perfil lipídico, função hepática e renal, TSH',
          justify: 'Comorbidades metabólicas',
          expected: 'Pré-diabetes, dislipidemia, transaminases elevadas'
        },
        { exam: 'Ferritina, B12, folato, 25-OH vitamina D, cálcio', justify: 'Deficiências prévias à cirurgia', expected: 'Vitamina D baixa' },
        { exam: 'USG de abdome e FIB-4', justify: 'Esteatose, colelitíase e risco de fibrose', expected: 'Esteatose acentuada, FIB-4 baixo' },
        { exam: 'Polissonografia', justify: 'AOS — tratar com CPAP antes da cirurgia', expected: 'AOS grave' },
        { exam: 'Endoscopia digestiva alta (com pesquisa de H. pylori)', justify: 'Avaliação pré-operatória', expected: 'A definir' },
        { exam: 'ECG, avaliação cardiológica, psicológica/psiquiátrica e nutricional', justify: 'Preparo multidisciplinar', expected: 'A definir' }
      ],
      expectedConduct: 'Confirmar indicação cirúrgica e encaminhar ao preparo multidisciplinar (endocrinologia, nutrição, psicologia/psiquiatria, cardiologia, pneumologia, cirurgia) | Tratar o transtorno de compulsão alimentar antes da cirurgia (psicoterapia; lisdexanfetamina ou topiramato conforme avaliação) | CPAP para AOS grave | Otimizar PA: aumentar losartana para 100 mg ou associar anlodipino (meta < 130/80) | Tratamento clínico da obesidade concomitante: dieta, atividade física e farmacoterapia (semaglutida 2,4 mg/semana ou tirzepatida) pode reduzir peso e risco cirúrgico | Estatina conforme risco cardiovascular | Repor vitamina D | Trocar ACO combinado por método sem estrogênio (DIU) — risco trombótico perioperatório e menor absorção oral após bypass; evitar gestação por 12–18 meses após a cirurgia | Técnicas: bypass gástrico em Y de Roux ou gastrectomia vertical (sleeve) — no refluxo ou diabetes, o bypass é preferido | Pós-operatório: suplementação vitamínica e mineral por toda a vida e seguimento',
      expectedCommunication: 'Acolher sem julgamento e reconhecer o estigma do peso | Explorar expectativas e alinhar resultados realistas (perda de 25–35% do peso total) | Apresentar a cirurgia como ferramenta que exige mudança de hábitos e seguimento contínuo | Abordar a compulsão alimentar com empatia | Pactuar os próximos passos',
      criticalErrors: [
        'Não calcular o IMC nem identificar as comorbidades que definem a indicação',
        'Indicar cirurgia sem avaliação multidisciplinar (incluindo saúde mental)',
        'Não identificar sintomas de AOS ou não indicar polissonografia/CPAP',
        'Não investigar transtorno de compulsão alimentar',
        'Prometer perda de peso específica ou apresentar a cirurgia como solução definitiva sem seguimento'
      ]
    },
    instD: {
      title: 'Obesidade Grave e Cirurgia Bariátrica — Material de Estudo',
      sections: [
        {
          h: 'Classificação',
          items: [
            {
              item: 'IMC: sobrepeso 25–29,9; obesidade grau I 30–34,9; grau II 35–39,9; grau III ≥ 40 kg/m²; circunferência abdominal agrega risco.',
              score: 1,
              ref: 'Diretrizes Brasileiras de Obesidade — ABESO, 2016/2022'
            },
            {
              item: 'Obesidade é doença crônica; avaliar também repercussões funcionais e comorbidades (conceito de obesidade clínica).',
              score: 1,
              ref: 'Rubino F et al., Lancet Diabetes Endocrinol 2025 (Lancet Commission)'
            }
          ]
        },
        {
          h: 'Tratamento Clínico',
          items: [
            {
              item: 'Farmacoterapia indicada com IMC ≥ 30 ou ≥ 27 com comorbidade: semaglutida 2,4 mg e tirzepatida promovem perda de 15–20% do peso.',
              score: 2,
              ref: 'ABESO/SBEM — Posicionamento sobre tratamento farmacológico, 2024'
            }
          ]
        },
        {
          h: 'Cirurgia Bariátrica',
          items: [
            {
              item: 'Brasil (CFM 2.172/2017): IMC ≥ 40 ou ≥ 35 com comorbidades, após ≥ 2 anos de tratamento clínico sem sucesso, 18–65 anos (exceções avaliadas).',
              score: 2,
              ref: 'Resolução CFM nº 2.172/2017'
            },
            {
              item: 'ASMBS/IFSO 2022: indicada com IMC ≥ 35 independentemente de comorbidades e considerar com IMC 30–34,9 e doença metabólica.',
              score: 1,
              ref: 'Eisenberg D et al., Surg Obes Relat Dis 2022'
            },
            {
              item: 'Contraindicações relativas: transtornos psiquiátricos e alimentares não controlados, dependência química ativa, incapacidade de aderir ao seguimento.',
              score: 1,
              ref: 'ASMBS/IFSO 2022'
            },
            {
              item: 'Pós-operatório: multivitamínico, B12, ferro, cálcio e vitamina D por toda a vida; evitar gestação por 12–18 meses.',
              score: 1,
              ref: 'ASMBS Nutritional Guidelines, 2019'
            }
          ]
        }
      ]
    }
  },

  // ENDOCRINOLOGIA — Diabetes mellitus tipo 2 com controle inadequado
  {
    id: 16,
    title: 'Diabético com glicemias altas apesar da metformina',
    sub: 'Ambulatório de Endocrinologia — Hospital Secundário',
    tema: 'Endocrinologia',
    topic: 'Diabetes Mellitus Tipo 2 — Intensificação e Complicações Crônicas',
    level: 'difícil',
    cardAccent: '#FF7043',
    instA: {
      scenario: 'Você está no ambulatório de endocrinologia de um hospital secundário.',
      patient: 'J.S.M., 54 anos, sexo masculino, motorista de ônibus.',
      complaint: 'Paciente com diabetes mellitus tipo 2 há 8 anos, em uso de metformina 2000 mg/dia, retorna para consulta de seguimento com controle glicêmico inadequado. Glicemias capilares domiciliares entre 180-280 mg/dL.',
      tasks: [
        'Realize a anamnese dirigida ao controle glicêmico, à adesão e às complicações.',
        'Solicite e interprete os dados do exame físico, incluindo os pés.',
        'Interprete os exames complementares disponíveis.',
        'Identifique as complicações crônicas e estratifique o risco.',
        'Defina a intensificação terapêutica e o seguimento.'
      ]
    },
    instB: {
      vitals: { PA: '142/88 mmHg', FC: '76 bpm', FR: '16 irpm', Peso: '88 kg', Altura: '1,72 m', IMC: '29,8 kg/m²', 'Circunferência abdominal': '102 cm' },
      physicalGeneral: 'Bom estado geral, corado, hidratado, eupneico.',
      physicalSeg: 'PÉS: pele seca, sem úlceras ou calosidades; dedos em garra bilateralmente; pulsos pediosos e tibiais posteriores palpáveis; monofilamento de 10 g não percebido em hálux e cabeças de metatarsos; vibração (diapasão 128 Hz) reduzida; reflexo aquileu diminuído bilateralmente | FUNDO DE OLHO: microaneurismas e pequenas hemorragias retinianas bilaterais, sem exsudatos ou edema macular evidente | CARDIOVASCULAR: RCR 2T, sem sopros; sem sopro carotídeo',
      labs: [
        { test: 'Glicemia jejum', val: '198 mg/dL', ref: '70-100', alt: true },
        { test: 'HbA1c', val: '9.8%', ref: '< 7.0% meta', alt: true },
        { test: 'Colesterol total', val: '215 mg/dL', ref: '< 200', alt: true },
        { test: 'LDL', val: '138 mg/dL', ref: '< 70 meta DM', alt: true },
        { test: 'HDL', val: '42 mg/dL', ref: '> 40', alt: false },
        { test: 'Triglicerídeos', val: '245 mg/dL', ref: '< 150', alt: true },
        { test: 'Creatinina', val: '1.3 mg/dL', ref: '0.7-1.3', alt: false },
        { test: 'TFG (CKD-EPI)', val: '62 mL/min/1.73m²', ref: '> 90', alt: true },
        { test: 'Relação albumina/creatinina urinária', val: '85 mg/g', ref: '< 30 normal', alt: true },
        { test: 'EAS', val: 'Proteinúria +, sem cilindros', ref: '—', alt: true },
        { test: 'TSH', val: '2.8 μUI/mL', ref: '0.4-4.0', alt: false }
      ],
      note: 'Entregar os exames logo no início (o paciente os traz). Se o candidato propuser insulina ou sulfonilureia, o paciente pergunta se pode continuar dirigindo ônibus. ECG (se solicitado): ritmo sinusal, sem alterações isquêmicas.',
      patientProfile: 'J.S.M., 54 anos, motorista de ônibus urbano há 20 anos, casado, três filhos. DM2 há 8 anos em uso de metformina 1 g 12/12 h e losartana 50 mg/dia. Sedentário, dieta rica em carboidratos e doces. Não fuma; bebe cerveja aos domingos. Nunca foi ao oftalmologista. Pai diabético que ficou cego e foi amputado. Teme perder o emprego se "ficar com problema de vista" ou se usar insulina.',
      script: [
        { trigger: 'Queixa principal', speech: 'Doutor, meu açúcar não está controlando. Minhas glicemias estão sempre altas.' },
        {
          trigger: 'Controle domiciliar',
          speech: 'Meço em casa, está entre 180 e 280 quase sempre. De manhã em jejum está 180-200. Depois das refeições sobe para 250-280.'
        },
        {
          trigger: 'Medicações',
          speech: 'Tomo metformina 1000 mg de manhã e à noite. Tomo losartana para pressão. Às vezes esqueço de tomar, mas na maioria dos dias tomo certinho.'
        },
        { trigger: 'Alimentação', speech: 'Tento fazer dieta, mas é difícil. Como bastante arroz, feijão, pão. Às vezes como doce, não resisto.' },
        { trigger: 'Exercício', speech: 'Trabalho dirigindo ônibus, fico sentado o dia todo. Não faço exercício, não tenho tempo.' },
        {
          trigger: 'Sintomas',
          speech: 'Sinto muita sede, bebo muita água. Urino muito, várias vezes à noite. Às vezes sinto formigamento nos pés à noite. Sinto que meus pés estão dormentes.'
        },
        { trigger: 'Visão', speech: 'Visão está normal, enxergo bem. Nunca fui no oftalmologista.' },
        { trigger: 'Preocupações', speech: 'Tenho medo de ter complicações. Meu pai teve diabetes, ficou cego e precisou amputar a perna. Vou precisar de insulina?' },
        { trigger: 'Sobre hipoglicemias', speech: 'Nunca tive aquele tremor, suor frio. Acho que nunca baixou.' },
        { trigger: 'Sobre o trabalho e insulina', speech: 'Se eu tomar insulina, posso continuar dirigindo o ônibus? Não posso perder o emprego, doutor.' },
        { trigger: 'Sobre cuidados com os pés', speech: 'Ando descalço em casa. Corto a unha com alicate, bem rente.' }
      ],
      hiddenInfo: 'Motorista profissional — preocupação com hipoglicemia ao volante e com a CNH — só revela se perguntado sobre o trabalho ou se o candidato propuser insulina | Anda descalço e corta as unhas rentes (risco de úlcera) — só revela se perguntado sobre cuidados com os pés | Nunca fez exame de fundo de olho — só revela se perguntado',
      actorBehavior: 'Paciente preocupado, ansioso com as complicações por causa da história do pai. Resistente à insulina por medo de hipoglicemia no trabalho e de "ficar dependente". Aceita intensificar o tratamento se o candidato explicar opções e riscos de forma clara e respeitar sua preocupação profissional.'
    },
    instC: {
      diagnosis: 'Diabetes mellitus tipo 2 com controle inadequado (HbA1c 9,8%, sintomático) em monoterapia com metformina, com complicações microvasculares: doença renal do diabetes (TFG 62 — G2/G3a limítrofe — com albuminúria moderada A2), retinopatia diabética não proliferativa leve e polineuropatia periférica com perda da sensibilidade protetora e deformidade (pé de risco IWGDF 2); hipertensão não controlada e dislipidemia.',
      differentials: [
        'Falha por má adesão — investigar antes de intensificar; o paciente refere esquecimentos eventuais',
        'LADA (diabetes autoimune latente do adulto) — considerar se falha rápida aos orais e IMC normal; anti-GAD se dúvida',
        'Nefropatia não diabética — suspeitar se hematúria, cilindros, queda rápida da TFG ou ausência de retinopatia; aqui há retinopatia e EAS sem cilindros',
        'Neuropatia por deficiência de vitamina B12 (uso crônico de metformina) — dosar B12'
      ],
      context: 'Homem de 54 anos com DM2 há 8 anos em metformina 2000 mg/dia, HbA1c 9.8% e glicemias domiciliares entre 180-280 mg/dL. Exames mostram neuropatia periférica, DRC G3a e retinopatia diabética não proliferativa leve.',
      justify: 'HbA1c 9,8% (> 1,5% acima da meta) com sintomas de hiperglicemia após 8 anos de metformina exige intensificação. Albuminúria ≥ 30 mg/g com TFG 62 caracteriza doença renal do diabetes, que por si só indica iSGLT2 (benefício renal e cardiovascular independente da HbA1c). Monofilamento e vibração alterados com deformidade em garra = perda da sensibilidade protetora com deformidade (IWGDF risco 2).',
      expectedAnamnesis: 'Glicemias domiciliares e técnica de automonitorização | Adesão aos medicamentos e efeitos adversos | Sintomas de hiperglicemia | Hipoglicemias | Dieta, atividade física, álcool | Sintomas de neuropatia, cuidados com os pés, calçados | Visão e consulta oftalmológica | Sintomas cardiovasculares (angina, claudicação) e disfunção erétil | Profissão (motorista) e implicações da hipoglicemia | Crenças sobre insulina',
      expectedPhysical: 'PA, peso, IMC, circunferência abdominal | Exame completo dos pés: inspeção, deformidades, pulsos, monofilamento, diapasão, reflexo aquileu | Fundoscopia (ou encaminhamento) | Ausculta cardíaca e carotídea | Locais de aplicação de insulina (se em uso)',
      expectedExams: [
        { exam: 'HbA1c e glicemia de jejum', justify: 'Grau de descontrole', expected: '9,8% e 198 mg/dL' },
        {
          exam: 'Creatinina/TFG e relação albumina/creatinina (confirmar em 2 de 3 amostras)',
          justify: 'Estadiar a doença renal do diabetes',
          expected: 'TFG 62, RAC 85 mg/g'
        },
        { exam: 'Potássio', justify: 'Antes de otimizar BRA/finerenona', expected: 'A definir' },
        { exam: 'Perfil lipídico', justify: 'Meta de LDL', expected: 'LDL 138' },
        { exam: 'Retinografia/avaliação oftalmológica', justify: 'Estadiar a retinopatia', expected: 'RDNP leve' },
        { exam: 'Vitamina B12', justify: 'Uso crônico de metformina e neuropatia', expected: 'A definir' }
      ],
      expectedConduct: 'Manter metformina 2 g/dia (TFG ≥ 45) | Associar iSGLT2 (dapagliflozina 10 mg ou empagliflozina 10 mg/dia) pela doença renal com albuminúria | Associar agonista de GLP-1 (semaglutida SC semanal) para controle glicêmico, peso e proteção cardiovascular — escalonar lentamente e garantir seguimento oftalmológico | Se sintomas catabólicos persistentes ou HbA1c não atingir a meta: insulina basal (NPH ao deitar 10 U ou 0,1–0,2 U/kg, titulando pela glicemia de jejum); evitar sulfonilureias pelo risco de hipoglicemia ao dirigir | Orientar automonitorização antes de dirigir e conduta na hipoglicemia (regra dos 15) | Otimizar losartana para 100 mg/dia (albuminúria) e meta PA < 130/80; considerar finerenona se albuminúria persistir | Estatina de alta intensidade (meta LDL < 70 mg/dL) | Pés: educação (não andar descalço, cortar unhas retas, inspeção diária, calçados adequados), podologia e reavaliação a cada 3–6 meses | Encaminhar ao oftalmologista | Dieta, atividade física, vacinação | Retorno em 3 meses com HbA1c',
      expectedCommunication: 'Acolher o medo baseado na história do pai | Explicar as complicações sem alarmismo e com foco no que pode ser prevenido | Discutir a insulina como ferramenta, não como fracasso ou castigo | Considerar a profissão do paciente nas escolhas | Pactuar metas e verificar a compreensão',
      criticalErrors: [
        'Não examinar os pés de paciente diabético com neuropatia',
        'Manter o tratamento sem intensificação com HbA1c 9,8%',
        'Não indicar iSGLT2 em doença renal do diabetes com albuminúria',
        'Não encaminhar ao oftalmologista diante de retinopatia',
        'Prescrever sulfonilureia/insulina sem orientar hipoglicemia em motorista profissional'
      ]
    },
    instD: {
      title: 'DM2 — Intensificação do Tratamento e Complicações Crônicas — Material de Estudo',
      sections: [
        {
          h: 'Intensificação',
          items: [
            { item: 'Intensificar se HbA1c acima da meta após 3 meses; HbA1c > 1,5% acima da meta → terapia dupla ou tripla.', score: 1, ref: 'Diretriz SBD, 2024' },
            {
              item: 'Insulina se sintomas catabólicos, HbA1c > 10% ou glicemia ≥ 300 mg/dL; iniciar com basal 10 U ou 0,1–0,2 U/kg.',
              score: 1,
              ref: 'ADA Standards of Care, 2025; SBD 2024'
            }
          ]
        },
        {
          h: 'Proteção Cardiorrenal',
          items: [
            { item: 'Doença renal do diabetes (TFG ≥ 20 e/ou albuminúria): iSGLT2 independentemente da HbA1c.', score: 2, ref: 'KDIGO Diabetes in CKD, 2022; SBD 2024' },
            { item: 'IECA/BRA em dose máxima tolerada se albuminúria; finerenona como adição se albuminúria persistente.', score: 1, ref: 'KDIGO, 2022' },
            { item: 'Agonista de GLP-1 com benefício cardiovascular e renal (ensaio FLOW com semaglutida).', score: 1, ref: 'Perkovic V et al., NEJM 2024' }
          ]
        },
        {
          h: 'Pé Diabético',
          items: [
            {
              item: 'Rastreio anual com monofilamento + outro teste; risco IWGDF 2 (perda de sensibilidade + deformidade ou DAP) → reavaliação a cada 3–6 meses.',
              score: 2,
              ref: 'IWGDF Guidelines, 2023'
            },
            { item: 'Educação: inspeção diária, não andar descalço, calçados adequados, corte reto das unhas.', score: 1, ref: 'IWGDF Guidelines, 2023' }
          ]
        },
        {
          h: 'Retinopatia',
          items: [
            { item: 'Rastreio anual com retinografia; melhora rápida da glicemia pode piorar transitoriamente a retinopatia.', score: 1, ref: 'SBD, 2024' }
          ]
        }
      ]
    }
  },

  // ENDOCRINOLOGIA — Hiperplasia adrenal congênita forma não clássica por deficiência parcial de 21-hidroxilase
  {
    id: 17,
    title: 'Excesso de pelos e menstruação ausente há 8 meses',
    sub: 'Ambulatório de Endocrinologia — Hospital Terciário',
    tema: 'Endocrinologia',
    topic: 'Hiperplasia Adrenal Congênita Não Clássica',
    level: 'difícil',
    cardAccent: '#FF7043',
    instA: {
      scenario: 'Você está no ambulatório de endocrinologia de um hospital terciário.',
      patient: 'P.R.S., 26 anos, sexo feminino, estudante universitária.',
      complaint: 'Crescimento excessivo de pelos em face, tórax e abdome, com piora nos últimos 3 anos, e ausência de menstruação há 8 meses.',
      tasks: [
        'Realize a anamnese dirigida ao hiperandrogenismo.',
        'Solicite e interprete os dados do exame físico.',
        'Formule a hipótese diagnóstica e os diferenciais.',
        'Solicite e interprete os exames complementares adequados.',
        'Defina a conduta conforme os objetivos da paciente e oriente-a, incluindo aconselhamento genético.'
      ]
    },
    instB: {
      vitals: { PA: '125/80 mmHg', FC: '78 bpm', FR: '16 irpm', Peso: '68 kg', Altura: '1,56 m', IMC: '27,9 kg/m²' },
      physicalGeneral: 'Bom estado geral. Hirsutismo moderado a acentuado, acne inflamatória, rarefação capilar frontal discreta. Voz feminina. Sem estrias violáceas, sem giba, sem fraqueza proximal.',
      physicalSeg: 'PELE E FÂNEROS: escore de Ferriman-Gallwey modificado = 18 (pelos terminais em buço, mento, região periareolar, linha alba, região lombar e coxas); acne inflamatória em face e dorso; alopecia de padrão feminino Ludwig I | MAMAS: sem galactorreia | GENITÁLIA EXTERNA: sem clitoromegalia | ABDOME: sem massas palpáveis',
      labs: [
        { test: 'β-HCG', val: '< 2 mUI/mL', ref: '< 5 mUI/mL', alt: false },
        { test: 'TSH', val: '2,1 μUI/mL', ref: '0,4–4,0 μUI/mL', alt: false },
        { test: 'Prolactina', val: '15 ng/mL', ref: '< 25 ng/mL', alt: false },
        { test: 'Testosterona total', val: '112 ng/dL', ref: '14–76 ng/dL', alt: true },
        { test: 'DHEA-S', val: '410 μg/dL', ref: '35–430 μg/dL', alt: false },
        { test: 'Androstenediona', val: '5,2 ng/mL', ref: '0,6–3,1 ng/mL', alt: true },
        { test: '17-OH-progesterona basal (8 h, fase folicular)', val: '6,8 ng/mL', ref: '< 2,0 ng/mL', alt: true },
        { test: '17-OH-progesterona 60 min após cortrosina 250 mcg', val: '38 ng/mL', ref: '< 10 ng/mL', alt: true },
        { test: 'Cortisol 60 min após cortrosina', val: '19,5 μg/dL', ref: '≥ 18 μg/dL (resposta adequada)', alt: false },
        { test: 'Glicemia de jejum', val: '94 mg/dL', ref: '70–99 mg/dL', alt: false }
      ],
      note: 'Entregar os exames basais apenas se solicitados. O resultado do teste de estímulo com ACTH (cortrosina) só é entregue se o candidato indicar o teste após a 17-OH-progesterona basal entre 2 e 10 ng/mL. Exame de imagem adrenal (se solicitado): TC de adrenais normal. Genotipagem CYP21A2 (se solicitada): heterozigose composta V281L / I2G (alelo grave).',
      patientProfile: 'P.R.S., 26 anos, estudante universitária de Veterinária, namora há 2 anos. Menarca aos 11 anos, ciclos sempre irregulares; pelos desde a adolescência, com piora há 3 anos. Usa lâmina e cera no rosto semanalmente. Não usa contraceptivo hormonal (preservativo). Planeja engravidar daqui a 3–4 anos. Pais são primos de segundo grau. Sofre com a autoestima e evita relacionamentos sociais.',
      script: [
        { trigger: 'Queixa principal', speech: 'Doutora, tenho muito pelo no rosto, parece barba. Preciso me depilar toda semana e já não aguento mais.' },
        { trigger: 'Sobre o início dos pelos', speech: 'Começou na adolescência, uns 12, 13 anos. Mas nos últimos 3 anos piorou bastante: peito, barriga, costas.' },
        { trigger: 'Sobre acne e queda de cabelo', speech: 'Tenho muita espinha no rosto e nas costas. E o cabelo está mais ralo na frente.' },
        { trigger: 'Sobre a menstruação', speech: 'Menstruei com 11 anos. Nunca foi regular, vinha de 40 em 40, 60 em 60 dias. Agora faz 8 meses que não vem.' },
        {
          trigger: 'Sobre voz, aumento do clitóris ou crescimento rápido dos pelos',
          speech: 'Não, minha voz é normal. Lá embaixo também é normal. Foi piorando devagar.'
        },
        { trigger: 'Sobre medicamentos e anabolizantes', speech: 'Não tomo nada. Nunca usei bomba nem suplemento hormonal.' },
        { trigger: 'Sobre a família', speech: 'Meus pais são primos de segundo grau. Minha irmã mais nova também tem bastante pelo, mas menos que eu.' },
        { trigger: 'Sobre desejo de gravidez', speech: 'Agora não. Mas quero ter filhos daqui uns três, quatro anos. Será que vou conseguir?' },
        { trigger: 'Sobre o impacto emocional', speech: 'Me sinto masculinizada. Evito sair, tenho vergonha de chegar perto das pessoas.' },
        { trigger: 'Pergunta ativa — diagnóstico', speech: 'O que eu tenho? Os pelos vão diminuir? Isso passa para os meus filhos?' }
      ],
      hiddenInfo: 'Pais consanguíneos (primos de segundo grau) — só revela se perguntada sobre a família | Irmã com hirsutismo — só revela se perguntada sobre familiares com sintomas semelhantes | Desejo de gravidez em 3–4 anos — só revela se perguntada | Isolamento social pela aparência — só revela se o candidato explorar o impacto emocional',
      actorBehavior: 'Paciente tímida, cobre o queixo com a mão ao falar. Emociona-se ao contar sobre o isolamento. Mostra-se aliviada quando o candidato explica que a doença tem tratamento e pergunta bastante sobre fertilidade e sobre o risco para os filhos.'
    },
    instC: {
      diagnosis: 'Hiperplasia adrenal congênita forma não clássica por deficiência parcial de 21-hidroxilase (17-OH-progesterona basal 6,8 e pós-ACTH 38 ng/mL), com hirsutismo moderado a grave, acne, alopecia de padrão feminino e oligo/amenorreia; cortisol com resposta adequada ao estímulo.',
      differentials: [
        'Síndrome dos ovários policísticos — principal diferencial, quadro muito semelhante; sai pela 17-OH-progesterona elevada com resposta exagerada ao ACTH',
        'Tumor secretor de androgênio (ovariano/adrenal) — suspeitar se virilização (clitoromegalia, voz grave), evolução rápida, testosterona > 150–200 ng/dL ou DHEA-S > 700 μg/dL; ausentes aqui',
        'Síndrome de Cushing — sai pela ausência de estigmas e pela fisiopatologia demonstrada',
        'Hiperprolactinemia e disfunção tireoidiana — excluídas por prolactina e TSH normais',
        'Deficiência de 11β-hidroxilase — hiperandrogenismo com hipertensão e 11-desoxicortisol elevado; PA normal'
      ],
      context: 'Mulher de 26 anos com hiperandrogenismo de início peripuberal e piora progressiva lenta, ciclos irregulares desde a menarca e pais consanguíneos. A forma não clássica da HAC por deficiência de 21-hidroxilase é uma das doenças autossômicas recessivas mais comuns e mimetiza a SOP; a dosagem matinal de 17-OH-progesterona na fase folicular é o exame de rastreio e o teste com ACTH confirma.',
      justify: '17-OH-progesterona basal entre 2 e 10 ng/mL é indeterminada e exige teste com cortrosina; valor pós-estímulo > 10 ng/mL confirma HAC não clássica. Ausência de virilização, evolução lenta e androgênios apenas moderadamente elevados tornam tumor improvável. Cortisol estimulado ≥ 18 μg/dL indica que não há necessidade de reposição de glicocorticoide de estresse.',
      expectedAnamnesis: 'Idade de início e velocidade de progressão do hirsutismo | Sinais de virilização (voz, clitoromegalia, aumento muscular) | Acne e alopecia | Menarca e padrão menstrual; gestação | Medicamentos e anabolizantes | Sintomas de Cushing, hiperprolactinemia e tireoide | Consanguinidade e familiares afetados | Desejo reprodutivo | Impacto emocional',
      expectedPhysical: 'Escore de Ferriman-Gallwey | Acne e alopecia | Sinais de virilização (clitoromegalia) | Sinais de Cushing | PA (diferencial com 11β-hidroxilase) | Massas abdominais/pélvicas | Galactorreia',
      expectedExams: [
        { exam: 'β-HCG, TSH, prolactina', justify: 'Excluir gestação e outras causas de amenorreia', expected: 'Normais' },
        { exam: 'Testosterona total, DHEA-S, androstenediona', justify: 'Grau e origem do hiperandrogenismo; rastreio de tumor', expected: 'Elevação moderada' },
        { exam: '17-OH-progesterona basal (8 h, fase folicular)', justify: 'Rastreio de HAC não clássica', expected: '6,8 ng/mL (indeterminada)' },
        {
          exam: 'Teste de estímulo com ACTH (cortrosina 250 mcg)',
          justify: 'Confirmar HAC não clássica e avaliar reserva de cortisol',
          expected: '17-OHP 38 ng/mL; cortisol adequado'
        },
        { exam: 'Genotipagem CYP21A2 (paciente e parceiro)', justify: 'Aconselhamento genético', expected: 'Alelo grave identificado' },
        { exam: 'Imagem adrenal/ovariana', justify: 'Apenas se suspeita de tumor', expected: 'Normal' }
      ],
      expectedConduct: 'Hirsutismo/acne/irregularidade menstrual sem desejo reprodutivo atual: contraceptivo oral combinado como 1ª linha (verificar critérios de elegibilidade), associando antiandrogênio (espironolactona 50–100 mg/dia) após 6 meses se resposta insuficiente, sempre com contracepção eficaz | Medidas cosméticas (laser, eflornitina tópica) | Glicocorticoide (hidrocortisona 10–15 mg/dia em doses divididas ou prednisolona em baixa dose) reservado para desejo de gestação/infertilidade, abortamento de repetição ou resposta inadequada aos demais | Aconselhamento genético: risco de filho com forma clássica se o parceiro for portador de alelo grave — genotipar o parceiro antes da gestação | Na gestação planejada, glicocorticoide que não atravessa a placenta (hidrocortisona/prednisolona), evitando dexametasona | Apoio psicológico | Seguimento clínico e hormonal',
      expectedCommunication: 'Explicar a doença genética de forma simples e sem culpa | Abordar o impacto emocional com empatia | Esclarecer o prognóstico reprodutivo (fertilidade possível, com tratamento se necessário) | Explicar o risco para os filhos e a importância de testar o parceiro | Decidir o tratamento conforme os objetivos da paciente',
      criticalErrors: [
        'Não solicitar 17-OH-progesterona em mulher com hiperandrogenismo',
        'Fechar o diagnóstico de SOP sem excluir HAC não clássica',
        'Não investigar sinais de virilização e características sugestivas de tumor',
        'Iniciar glicocorticoide como primeira linha para hirsutismo sem desejo reprodutivo',
        'Não oferecer aconselhamento genético'
      ]
    },
    instD: {
      title: 'Hiperplasia Adrenal Congênita Não Clássica — Material de Estudo',
      sections: [
        {
          h: 'Definição',
          items: [
            {
              item: 'Deficiência parcial de 21-hidroxilase (CYP21A2), autossômica recessiva; manifesta-se após o nascimento com hiperandrogenismo, sem insuficiência adrenal significativa.',
              score: 1,
              ref: 'Endocrine Society CAH Guideline, 2018'
            },
            { item: 'Prevalência de 1:200 a 1:1.000; mais comum em populações com consanguinidade.', score: 1, ref: 'Carmina E et al., Hum Reprod Update 2017' }
          ]
        },
        {
          h: 'Diagnóstico',
          items: [
            {
              item: '17-OH-progesterona matinal na fase folicular: < 2 ng/mL exclui; > 10 ng/mL confirma; 2–10 ng/mL → teste com cortrosina (pós > 10 ng/mL confirma).',
              score: 2,
              ref: 'Endocrine Society CAH Guideline, 2018'
            },
            {
              item: 'Sinais de alerta para tumor: virilização, progressão rápida, testosterona > 150–200 ng/dL, DHEA-S > 700 μg/dL.',
              score: 1,
              ref: 'Endocrine Society Hirsutism Guideline, 2018'
            }
          ]
        },
        {
          h: 'Tratamento',
          items: [
            {
              item: 'Sem desejo reprodutivo: ACO ± antiandrogênio são a 1ª linha para hirsutismo; glicocorticoide não é recomendado de rotina.',
              score: 2,
              ref: 'Endocrine Society CAH Guideline, 2018'
            },
            {
              item: 'Glicocorticoide indicado para infertilidade/anovulação ou abortamento de repetição; usar hidrocortisona ou prednisolona na gestação.',
              score: 1,
              ref: 'Endocrine Society CAH Guideline, 2018'
            },
            { item: 'Aconselhamento genético e genotipagem do parceiro (risco de forma clássica na prole).', score: 1, ref: 'Endocrine Society CAH Guideline, 2018' }
          ]
        }
      ]
    }
  },

  // ENDOCRINOLOGIA — Macroadenoma hipofisário não funcionante
  {
    id: 18,
    title: 'Cansaço, dor de cabeça e "esbarrando nas coisas dos lados"',
    sub: 'Ambulatório de Endocrinologia — Hospital Terciário',
    tema: 'Endocrinologia',
    topic: 'Macroadenoma Hipofisário Não Funcionante com Hipopituitarismo',
    level: 'difícil',
    cardAccent: '#FF7043',
    instA: {
      scenario: 'Você está no ambulatório de endocrinologia de um hospital terciário.',
      patient: 'M.A.F., 42 anos, sexo masculino, professor.',
      complaint: 'Fadiga progressiva há 1 ano, cefaleia frontal recorrente, redução da libido e ganho de 8 kg. Amigos comentam que o rosto está diferente.',
      tasks: [
        'Realize a anamnese dirigida ao quadro atual.',
        'Solicite e interprete os dados do exame físico, incluindo o campo visual.',
        'Formule a hipótese diagnóstica.',
        'Solicite e interprete os exames complementares adequados.',
        'Defina a conduta, a ordem das reposições hormonais e os encaminhamentos.'
      ]
    },
    instB: {
      vitals: { PA: '110/70 mmHg (em pé: 96/62 mmHg)', FC: '62 bpm', FR: '14 irpm', Tax: '36,2 °C', Peso: '82 kg', Altura: '1,75 m', IMC: '26,7 kg/m²' },
      physicalGeneral: 'Regular estado geral, pálido (palidez "cor de alabastro"), pele fina e seca, rarefação de pelos faciais, axilares e pubianos, adiposidade central, ginecomastia bilateral leve. Lentificado.',
      physicalSeg: 'NEURO-OFTALMOLÓGICO: campimetria por confrontação com hemianopsia bitemporal; acuidade visual preservada; pupilas isocóricas e fotorreagentes; movimentos oculares preservados, sem ptose | GENITAL: testículos de volume reduzido (8 mL bilateralmente), consistência amolecida; pelos pubianos rarefeitos | CARDIOVASCULAR: RCR 2T, bradicardia leve, sem sopros',
      labs: [
        { test: 'Cortisol (8 h)', val: '3,2 μg/dL', ref: '6–23 μg/dL', alt: true },
        { test: 'ACTH', val: '5 pg/mL', ref: '10–60 pg/mL', alt: true },
        { test: 'TSH', val: '0,8 μUI/mL', ref: '0,4–4,0 μUI/mL', alt: false },
        { test: 'T4 livre', val: '0,6 ng/dL', ref: '0,8–1,8 ng/dL', alt: true },
        { test: 'Testosterona total', val: '85 ng/dL', ref: '264–916 ng/dL', alt: true },
        { test: 'LH / FSH', val: '0,5 / 0,8 mUI/mL', ref: '1,5–9 / 1,5–12 mUI/mL', alt: true },
        { test: 'Prolactina (com diluição 1:100)', val: '45 ng/mL (diluída: 46 ng/mL)', ref: '< 20 ng/mL', alt: true },
        { test: 'IGF-1', val: '65 ng/mL', ref: '109–284 ng/mL', alt: true },
        { test: 'Sódio', val: '132 mEq/L', ref: '135–145 mEq/L', alt: true },
        { test: 'Potássio', val: '4,2 mEq/L', ref: '3,5–5,0 mEq/L', alt: false },
        { test: 'Glicemia', val: '72 mg/dL', ref: '70–99 mg/dL', alt: false },
        { test: 'Hemoglobina', val: '11,8 g/dL', ref: '13,5–17,5 g/dL', alt: true }
      ],
      image: {
        title: 'Ressonância Magnética de Sela Túrcica e Campimetria',
        report: 'RM DE SELA TÚRCICA: macroadenoma hipofisário de 2,8 × 2,5 × 2,2 cm, com extensão suprasselar e compressão do quiasma óptico. Sem invasão de seios cavernosos. Sem sinais de hemorragia.\n\nCAMPIMETRIA COMPUTADORIZADA: hemianopsia bitemporal com predomínio superior.'
      },
      note: 'Entregar os exames hormonais apenas se solicitados (prolactina diluída só se o candidato pedir diluição para excluir efeito gancho). RM e campimetria são entregues após a suspeita clínica. Se o candidato prescrever levotiroxina antes da hidrocortisona, o avaliador registra o erro crítico.',
      patientProfile: 'M.A.F., 42 anos, professor de matemática do ensino médio, casado, sem filhos (o casal tenta engravidar há 2 anos). Previamente hígido. Atribuía o cansaço ao trabalho. Vem tropeçando em objetos e já bateu o carro de lado no portão da escola. Tem tonturas ao levantar rápido. Muito preocupado com a palavra "tumor" e com a visão.',
      script: [
        { trigger: 'Queixa principal', speech: 'Doutor, estou muito cansado faz um ano, e só piora. Achei que era o trabalho.' },
        { trigger: 'Sobre a fadiga e o humor', speech: 'Acordo sem energia. Tenho dificuldade de me concentrar para preparar as aulas. Ando desanimado.' },
        { trigger: 'Sobre a cefaleia', speech: 'É uma dor na testa, quase todo dia, que vai piorando ao longo do dia. Analgésico alivia pouco.' },
        { trigger: 'Sobre a visão', speech: 'Às vezes não vejo o que está do lado. Tropeço nas coisas, esbarrei o carro no portão porque não vi a lateral.' },
        { trigger: 'Sobre libido, ereção e fertilidade', speech: 'A libido sumiu. A ereção ficou fraca. E a gente está tentando ter filho faz dois anos e nada.' },
        { trigger: 'Sobre tontura, apetite e frio', speech: 'Fico tonto quando levanto rápido. Sinto mais frio que todo mundo. Mas o peso aumentou.' },
        { trigger: 'Sobre sede e urina', speech: 'Não, sede normal. Urino normal.' },
        { trigger: 'Sobre pelos', speech: 'Quase não faço mais a barba, cresce pouco. Os pelos do corpo também diminuíram.' },
        { trigger: 'Pergunta ativa — diagnóstico', speech: 'O que eu tenho? É tumor? Vou ficar cego? Vou ter que operar a cabeça?' }
      ],
      hiddenInfo: 'Infertilidade conjugal há 2 anos — só revela se perguntado sobre fertilidade | Bateu o carro por não ver a lateral (risco ao dirigir) — só revela se perguntado sobre a visão em detalhes | Tontura postural — só revela se perguntado | Ausência de poliúria/polidipsia (sem diabetes insipidus prévio) — só informa se perguntado',
      actorBehavior: 'Paciente lentificado, voz monótona, cansado. Fica muito ansioso ao ouvir "tumor" e pergunta várias vezes se vai ficar cego. Tranquiliza-se quando o candidato explica que é um tumor benigno, que a cirurgia pode recuperar a visão e que os hormônios podem ser repostos.'
    },
    instC: {
      diagnosis: 'Macroadenoma hipofisário não funcionante (2,8 cm) com compressão quiasmática (hemianopsia bitemporal) e pan-hipopituitarismo anterior: insuficiência adrenal central, hipotireoidismo central, hipogonadismo hipogonadotrófico e deficiência de GH; hiperprolactinemia leve por desconexão da haste.',
      differentials: [
        'Macroprolactinoma — sai pela prolactina apenas levemente elevada (< 100 ng/mL) mesmo após diluição (exclui efeito gancho) para um tumor de 2,8 cm',
        'Craniofaringioma — lesão suprasselar com calcificações e componente cístico; sai pela imagem',
        'Hipofisite linfocítica — mais comum no periparto; deficiência de ACTH precoce e espessamento da haste',
        'Meningioma selar / lesões metastáticas — sai pela imagem típica de adenoma',
        'Apoplexia hipofisária — cefaleia súbita intensa, alteração visual aguda e oftalmoplegia; ausente'
      ],
      context: 'Homem de 42 anos com sintomas lentamente progressivos de deficiência hormonal múltipla (fadiga, hipotensão postural, intolerância ao frio, hipogonadismo, infertilidade, perda de pelos) e de efeito de massa (cefaleia e hemianopsia bitemporal). RM com macroadenoma comprimindo o quiasma. O pan-hipopituitarismo exige reposição imediata de glicocorticoide e cirurgia transesfenoidal para descompressão.',
      justify: 'Cortisol baixo com ACTH baixo = insuficiência adrenal central; T4 livre baixo com TSH inapropriadamente normal = hipotireoidismo central; testosterona baixa com LH/FSH baixos = hipogonadismo central; IGF-1 baixo = deficiência de GH provável. Prolactina < 100 ng/mL com tumor > 2 cm sugere desconexão da haste (adenoma não funcionante) — diluição exclui efeito gancho. Hemianopsia bitemporal confirma compressão quiasmática.',
      expectedAnamnesis: 'Fadiga, fraqueza, tontura postural, náuseas, perda de apetite (deficiência de cortisol) | Intolerância ao frio, constipação, lentificação (hipotireoidismo) | Libido, ereção, fertilidade, pelos (hipogonadismo) | Cefaleia: padrão e evolução | Alterações visuais e diplopia | Poliúria e polidipsia (diabetes insipidus) | Galactorreia | Sinais de excesso hormonal (acromegalia, Cushing) | Cefaleia súbita (apoplexia)',
      expectedPhysical: 'PA deitado e em pé | Campimetria por confrontação | Motricidade ocular extrínseca e pupilas | Pele, pelos e caracteres sexuais secundários | Volume testicular | Sinais de acromegalia ou Cushing',
      expectedExams: [
        { exam: 'Cortisol 8 h e ACTH', justify: 'Insuficiência adrenal central — prioridade', expected: 'Baixos' },
        { exam: 'TSH e T4 livre', justify: 'Hipotireoidismo central (avaliar T4L, não só TSH)', expected: 'T4L baixo com TSH normal' },
        { exam: 'Testosterona, LH, FSH', justify: 'Hipogonadismo central', expected: 'Baixos' },
        { exam: 'Prolactina com diluição', justify: 'Diferenciar prolactinoma (efeito gancho) de desconexão da haste', expected: '45 ng/mL sem mudança com diluição' },
        { exam: 'IGF-1', justify: 'Deficiência de GH ou acromegalia', expected: 'Baixo' },
        { exam: 'Sódio, glicemia, osmolalidade urinária', justify: 'Hiponatremia e diabetes insipidus', expected: 'Sódio 132' },
        {
          exam: 'RM de sela com gadolínio e campimetria formal',
          justify: 'Caracterizar o tumor e o déficit visual',
          expected: 'Macroadenoma com hemianopsia bitemporal'
        }
      ],
      expectedConduct: 'Iniciar hidrocortisona imediatamente (15–20 mg/dia em 2–3 tomadas, ex.: 10 mg ao acordar, 5 mg ao meio-dia e 5 mg à tarde) e só depois levotiroxina (alguns dias após), pelo risco de precipitar crise adrenal | Orientar dose de estresse (dobrar/triplicar em doença febril; hidrocortisona 100 mg IM/EV em vômitos ou emergência) e cartão de identificação | Encaminhar à neurocirurgia para cirurgia transesfenoidal (indicação: compressão quiasmática com déficit visual) | Não dirigir até avaliação e correção do campo visual | Testosterona (ou gonadotrofinas, se desejo de fertilidade) após a cirurgia, conforme reavaliação; a reposição de testosterona inibe a espermatogênese — preferir hCG/FSH para tentar engravidar | GH somente após estabilização e avaliação formal | Pós-operatório: vigiar diabetes insipidus e SIADH, cobertura com corticoide perioperatório e reavaliação de todos os eixos | Seguimento com RM',
      expectedCommunication: 'Explicar que se trata de tumor benigno | Abordar o medo da cegueira com honestidade (descompressão precoce frequentemente melhora a visão) | Explicar a importância vital da hidrocortisona e da dose de estresse | Orientar a não dirigir até reavaliação | Discutir fertilidade e opções',
      criticalErrors: [
        'Não avaliar o campo visual',
        'Não solicitar RM de sela túrcica',
        'Iniciar levotiroxina antes da hidrocortisona',
        'Não orientar dose de estresse do glicocorticoide',
        'Indicar agonista dopaminérgico como tratamento principal de adenoma não funcionante com compressão quiasmática'
      ]
    },
    instD: {
      title: 'Hipopituitarismo e Macroadenoma Hipofisário — Material de Estudo',
      sections: [
        {
          h: 'Definição e Etiologia',
          items: [
            {
              item: 'Hipopituitarismo: deficiência de ≥ 1 hormônio hipofisário; adenomas hipofisários são a causa mais comum em adultos.',
              score: 1,
              ref: 'Endocrine Society Hypopituitarism Guideline, 2016'
            },
            { item: 'Ordem típica de perda: GH → gonadotrofinas → TSH → ACTH.', score: 1, ref: 'Harrison — Medicina Interna, 21ª ed.' }
          ]
        },
        {
          h: 'Diagnóstico',
          items: [
            {
              item: 'Hipotireoidismo central: T4 livre baixo com TSH baixo ou normal — o TSH isolado não serve para monitorar.',
              score: 2,
              ref: 'Endocrine Society Guideline, 2016'
            },
            {
              item: 'Prolactina > 100–150 ng/mL sugere prolactinoma; elevação leve com macroadenoma = efeito haste (pedir diluição para excluir efeito gancho).',
              score: 1,
              ref: 'Pituitary Society Consensus, 2023'
            }
          ]
        },
        {
          h: 'Tratamento',
          items: [
            { item: 'Repor glicocorticoide antes do hormônio tireoidiano para evitar crise adrenal.', score: 2, ref: 'Endocrine Society Guideline, 2016' },
            { item: 'Hidrocortisona 15–20 mg/dia em doses divididas; educação sobre dose de estresse e emergência.', score: 1, ref: 'Endocrine Society Guideline, 2016' },
            {
              item: 'Cirurgia transesfenoidal é o tratamento de escolha do adenoma não funcionante com compressão visual.',
              score: 2,
              ref: 'Congress of Neurological Surgeons Guidelines, 2016'
            },
            { item: 'Pós-operatório: risco de diabetes insipidus e hiponatremia tardia (SIADH, 7º–10º dia).', score: 1, ref: 'Pituitary Society Consensus, 2023' }
          ]
        }
      ]
    }
  },

  // ENDOCRINOLOGIA — Cetoacidose diabética grave
  {
    id: 19,
    title: 'Jovem com vômitos, respiração rápida e confusão',
    sub: 'PS — Pronto-Socorro',
    tema: 'Endocrinologia',
    topic: 'Cetoacidose Diabética',
    level: 'difícil',
    cardAccent: '#FF7043',
    instA: {
      scenario: 'Pronto-socorro de hospital terciário. Paciente trazido por amigos da república, sala de emergência.',
      patient: 'L.M.A., 19 anos, sexo masculino, estudante universitário.',
      complaint: 'Náuseas e vômitos há 2 dias, dor abdominal, respiração rápida e confusão mental. Emagreceu 12 kg em 2 meses.',
      tasks: [
        'Realize a anamnese rápida dirigida (com o paciente e os acompanhantes).',
        'Solicite o exame físico e os exames complementares urgentes.',
        'Formule o diagnóstico e classifique a gravidade.',
        'Inicie o tratamento de emergência, detalhando hidratação, insulina e potássio.',
        'Defina o local de internação, os critérios de resolução e a transição para insulina subcutânea.'
      ]
    },
    instB: {
      vitals: {
        PA: '95/60 mmHg',
        FC: '118 bpm',
        FR: '32 irpm',
        Tax: '36,2 °C',
        SpO2: '98% em ar ambiente',
        Glasgow: '13 (O3 V4 M6)',
        'Glicemia capilar': 'HI (> 450 mg/dL)',
        Peso: '58 kg (há 2 meses: 70 kg)'
      },
      physicalGeneral: 'Regular a mau estado geral, desidratado 3+/4+, mucosas secas, turgor diminuído, TEC 4 s, emagrecido. Respiração de Kussmaul, hálito cetônico (cheiro de fruta).',
      physicalSeg: 'NEUROLÓGICO: confuso, sonolento, responde a comandos; sem déficit focal, sem rigidez de nuca | RESPIRATÓRIO: respiração ampla e rápida (Kussmaul), MV presente sem ruídos adventícios | ABDOME: doloroso difusamente à palpação, sem sinais de irritação peritoneal, RHA diminuídos | CARDIOVASCULAR: taquicardia regular, sem sopros | PELE: sem lesões infecciosas',
      labs: [
        { test: 'Glicemia', val: '485 mg/dL', ref: '70–99 mg/dL', alt: true },
        { test: 'pH arterial', val: '7,15', ref: '7,35–7,45', alt: true },
        { test: 'pCO2', val: '22 mmHg', ref: '35–45 mmHg', alt: true },
        { test: 'Bicarbonato', val: '9 mEq/L', ref: '22–28 mEq/L', alt: true },
        { test: 'β-hidroxibutirato sérico', val: '6,2 mmol/L', ref: '< 0,6 mmol/L', alt: true },
        { test: 'Sódio', val: '128 mEq/L', ref: '135–145 mEq/L', alt: true },
        { test: 'Cloro', val: '94 mEq/L', ref: '98–107 mEq/L', alt: true },
        { test: 'Potássio', val: '5,2 mEq/L', ref: '3,5–5,0 mEq/L', alt: true },
        { test: 'Fósforo', val: '3,0 mg/dL', ref: '2,5–4,5 mg/dL', alt: false },
        { test: 'Ureia / Creatinina', val: '58 / 1,8 mg/dL', ref: '10–50 / 0,7–1,3 mg/dL', alt: true },
        { test: 'Leucócitos', val: '16.800/mm³ (sem desvio)', ref: '4.000–11.000/mm³', alt: true },
        { test: 'Lipase', val: '95 U/L', ref: '< 60 U/L', alt: true },
        { test: 'Urina tipo 1', val: 'Glicosúria 4+, cetonúria 4+, sem leucocitúria', ref: 'Negativo', alt: true }
      ],
      note: 'Entregar glicemia capilar e gasometria logo que solicitadas. Ânion gap (se calculado): 128 − (94 + 9) = 25. Sódio corrigido ≈ 134 mEq/L. ECG (se solicitado): taquicardia sinusal, ondas T discretamente apiculadas. Após 2 h de tratamento adequado (se o candidato perguntar): glicemia 320 mg/dL, K 4,1 mEq/L, pH 7,22. Após 6 h: glicemia 230 mg/dL, K 3,6 mEq/L.',
      patientProfile: 'L.M.A., 19 anos, estudante de Engenharia, mora em república longe da família. Previamente hígido. Há 2 meses com sede intensa, urina em grande quantidade e emagrecimento de 12 kg, que atribuiu à academia e ao estresse das provas. Consumiu muito refrigerante para matar a sede. Há 2 dias com vômitos e dor abdominal. Avó materna com hipotireoidismo; sem diabetes na família.',
      script: [
        {
          trigger: 'Amigo — o que aconteceu',
          speech: 'Ele está passando mal há dois dias, vomitando tudo. Hoje acordou estranho, confuso, respirando desse jeito. A gente ficou com medo e trouxe.'
        },
        {
          trigger: 'Paciente — sede e urina',
          speech: 'Tô com muita sede faz uns dois meses... bebo água e refrigerante o tempo todo... e faço xixi toda hora, até de madrugada.'
        },
        { trigger: 'Paciente — peso', speech: 'Emagreci muito, uns 12 quilos. Achei que era a academia.' },
        { trigger: 'Paciente — dor abdominal e vômitos', speech: 'Minha barriga dói inteira... vomitei umas dez vezes. Não para nada no estômago.' },
        {
          trigger: 'Amigo — doenças e remédios',
          speech: 'Que eu saiba ele não tem doença nenhuma e não toma remédio. Não usa droga, no máximo bebe cerveja em festa.'
        },
        { trigger: 'Amigo — febre, tosse ou ardência urinária', speech: 'Febre ele não teve não. Tosse também não.' },
        { trigger: 'Paciente — família', speech: 'Ninguém na família tem diabetes... minha avó tem tireoide.' },
        { trigger: 'Amigo — pergunta ativa', speech: 'Doutor, ele vai ficar bem? É diabetes? Precisa avisar a família dele?' }
      ],
      hiddenInfo: 'Bebeu muito refrigerante para matar a sede nas últimas semanas — só revela se perguntado sobre o que tem bebido | Uso de bebida alcoólica em festa no fim de semana — só revela se perguntado | Família mora em outro estado — só revela se perguntado sobre contato familiar',
      actorBehavior: 'Paciente sonolento e confuso, respira de forma profunda e rápida, responde com frases curtas e lentas; geme com a dor abdominal. O amigo está nervoso, fala rápido e responde pelo paciente quando este não consegue. Se o candidato demorar a iniciar hidratação, o paciente fica mais sonolento.'
    },
    instC: {
      diagnosis: 'Cetoacidose diabética grave (pH 7,15, bicarbonato 9 mEq/L, β-hidroxibutirato 6,2 mmol/L, ânion gap 25, alteração do nível de consciência) como abertura de diabetes mellitus tipo 1, com desidratação grave e lesão renal aguda pré-renal.',
      differentials: [
        'Estado hiperglicêmico hiperosmolar — glicemia geralmente > 600 mg/dL, osmolalidade > 300 e sem acidose importante; aqui há cetose e acidose',
        'Abdome agudo (pancreatite, apendicite) — dor abdominal é comum na CAD e melhora com o tratamento; lipase discretamente elevada é frequente; reavaliar se a dor persistir após correção da acidose',
        'Cetoacidose alcoólica ou de jejum — glicemia normal ou baixa',
        'Acidose láctica / intoxicações (metanol, etilenoglicol, salicilatos) — ânion gap elevado sem hiperglicemia acentuada',
        'Sepse como precipitante — leucocitose é comum na CAD; investigar foco se febre ou desvio'
      ],
      context: 'Jovem de 19 anos com 2 meses de poliúria, polidipsia e emagrecimento importante, evoluindo com vômitos, dor abdominal, respiração de Kussmaul e confusão: apresentação clássica de cetoacidose como primeira manifestação de DM1 (cerca de 30% dos diagnósticos). A ingestão de bebidas açucaradas agrava a hiperglicemia. Tratamento exige hidratação vigorosa, insulina EV, reposição de potássio guiada e monitorização intensiva.',
      justify: 'Critérios (consenso ADA/EASD 2024): glicemia ≥ 200 mg/dL + cetonemia (β-hidroxibutirato ≥ 3,0 mmol/L) + acidose (pH < 7,3 e/ou bicarbonato < 18 mEq/L). Gravidade: bicarbonato < 10 mEq/L e alteração do nível de consciência = CAD grave. Ânion gap = 128 − (94 + 9) = 25 (elevado). Hiponatremia é dilucional pela hiperglicemia (sódio corrigido ≈ 134).',
      expectedAnamnesis: 'Tempo de poliúria, polidipsia e perda de peso | Vômitos, dor abdominal e ingestão oral | Diagnóstico prévio de diabetes e uso de insulina | Fatores precipitantes: infecção, álcool, drogas, medicamentos (corticoide, iSGLT2) | Sintomas infecciosos | História familiar de diabetes e autoimunidade | Contato com a família',
      expectedPhysical: 'Nível de consciência (Glasgow) | Padrão respiratório (Kussmaul) e hálito | Grau de desidratação e perfusão | PA, FC, diurese | Exame abdominal | Busca de foco infeccioso',
      expectedExams: [
        { exam: 'Glicemia capilar e sérica', justify: 'Diagnóstico e monitorização horária', expected: '485 mg/dL' },
        { exam: 'Gasometria (venosa é suficiente no seguimento)', justify: 'Acidose e gravidade', expected: 'pH 7,15, HCO3 9' },
        { exam: 'β-hidroxibutirato sérico', justify: 'Cetonemia — preferível à cetonúria', expected: '6,2 mmol/L' },
        {
          exam: 'Na, K, Cl, fósforo, magnésio, ureia, creatinina',
          justify: 'Ânion gap, potássio antes da insulina, função renal',
          expected: 'K 5,2; AG 25; creatinina 1,8'
        },
        { exam: 'ECG', justify: 'Alterações do potássio', expected: 'Taquicardia sinusal, T apiculada' },
        { exam: 'Hemograma, urina tipo 1, culturas e radiografia de tórax se indicado', justify: 'Precipitantes infecciosos', expected: 'Leucocitose sem foco' }
      ],
      expectedConduct: 'Sala de emergência, monitorização, dois acessos venosos, sondagem vesical se necessário; internação em UTI (CAD grave com rebaixamento de consciência) | Hidratação: cristaloide isotônico (Ringer lactato ou SF 0,9%) 15–20 mL/kg na 1ª hora (≈ 1 L), depois 250–500 mL/h conforme hidratação e sódio corrigido | Potássio: K 5,2 → não repor inicialmente e dosar a cada 2 h; repor 20–30 mEq por litro de soro quando K estiver entre 3,5 e 5,0; se K < 3,5, adiar a insulina e repor primeiro | Insulina regular EV em infusão contínua 0,1 U/kg/h (≈ 6 U/h), iniciada após a 1ª hora de hidratação e com K ≥ 3,5; meta de queda da glicemia de 50–70 mg/dL/h | Quando glicemia < 250 mg/dL: soro glicosado 5% (com NaCl 0,45%) e reduzir a insulina para 0,05 U/kg/h, mantendo até resolver a cetoacidose | Bicarbonato apenas se pH < 7,0 | Resolução: pH ≥ 7,3, bicarbonato ≥ 18 e β-hidroxibutirato < 0,6 mmol/L, com paciente capaz de se alimentar | Transição: insulina basal-bolus subcutânea (≈ 0,5–0,6 U/kg/dia), com a basal aplicada 1–2 h antes de suspender a infusão | Investigar precipitante; solicitar anti-GAD/peptídeo C ambulatorialmente | Educação em diabetes antes da alta (aplicação, hipoglicemia, cetonas, dias de doença)',
      expectedCommunication: 'Comunicação objetiva com o amigo e contato com a família | Explicar ao paciente, quando lúcido, o diagnóstico de diabetes tipo 1 com acolhimento | Explicar a necessidade de UTI | Planejar educação em diabetes',
      criticalErrors: [
        'Não reconhecer a cetoacidose diabética como emergência',
        'Iniciar insulina sem hidratação ou sem conhecer o potássio',
        'Iniciar insulina com K < 3,5 mEq/L ou repor potássio com K > 5,0 mEq/L',
        'Suspender a insulina quando a glicemia cai, sem adicionar glicose, antes da resolução da acidose',
        'Suspender a infusão EV sem insulina basal subcutânea prévia (rebote da cetoacidose)'
      ]
    },
    instD: {
      title: 'Cetoacidose Diabética — Material de Estudo',
      sections: [
        {
          h: 'Definição e Diagnóstico',
          items: [
            {
              item: 'CAD: glicemia ≥ 200 mg/dL (ou diabetes prévio) + β-hidroxibutirato ≥ 3,0 mmol/L (ou cetonúria ≥ 2+) + pH < 7,3 e/ou bicarbonato < 18 mEq/L.',
              score: 2,
              ref: 'Umpierrez GE et al., Diabetes Care 2024 (Consenso ADA/EASD/JBDS/AACE/DTS)'
            },
            {
              item: 'Gravidade: leve (pH 7,25–7,30), moderada (pH 7,0–7,24 ou HCO3 10–15), grave (pH < 7,0 ou HCO3 < 10 ou alteração de consciência).',
              score: 1,
              ref: 'Consenso ADA/EASD, 2024'
            },
            { item: 'Euglicemia não exclui CAD (gestação, iSGLT2, jejum).', score: 1, ref: 'Consenso ADA/EASD, 2024' }
          ]
        },
        {
          h: 'Tratamento',
          items: [
            {
              item: 'Hidratação com cristaloide isotônico: 1–1,5 L na 1ª hora; soluções balanceadas podem acelerar a resolução.',
              score: 2,
              ref: 'Consenso ADA/EASD, 2024'
            },
            {
              item: 'Potássio: se < 3,5 → repor e adiar insulina; 3,5–5,0 → 20–30 mEq/L de soro; > 5,0 → não repor e dosar a cada 2 h.',
              score: 2,
              ref: 'Consenso ADA/EASD, 2024'
            },
            {
              item: 'Insulina regular EV 0,1 U/kg/h; acrescentar glicose quando glicemia < 250 mg/dL; bicarbonato só se pH < 7,0.',
              score: 2,
              ref: 'Consenso ADA/EASD, 2024'
            },
            { item: 'Resolução: pH ≥ 7,3, HCO3 ≥ 18, β-OHB < 0,6; aplicar basal SC antes de suspender a infusão.', score: 1, ref: 'Consenso ADA/EASD, 2024' }
          ]
        },
        {
          h: 'Complicações',
          items: [
            { item: 'Hipocalemia, hipoglicemia, edema cerebral (sobretudo em crianças) e acidose hiperclorêmica.', score: 1, ref: 'Diretriz SBD, 2024' }
          ]
        }
      ]
    }
  },

  // ENDOCRINOLOGIA — Síndrome metabólica
  {
    id: 20,
    title: 'Check-up: "está tudo alto: açúcar, pressão e colesterol"',
    sub: 'UBS — Atenção Primária',
    tema: 'Endocrinologia',
    topic: 'Síndrome Metabólica',
    level: 'moderado',
    cardAccent: '#FF7043',
    instA: {
      scenario: 'Você está no ambulatório de clínica médica de uma UBS.',
      patient: 'R.S.L., 48 anos, sexo masculino, gerente de vendas.',
      complaint: 'Vem para check-up com exames recentes alterados. Refere que "está tudo alto: açúcar, pressão, colesterol".',
      tasks: [
        'Realize a anamnese dirigida aos fatores de risco cardiovascular.',
        'Solicite o exame físico pertinente.',
        'Interprete os exames e identifique os diagnósticos.',
        'Estratifique o risco cardiovascular.',
        'Defina a conduta multifatorial e pactue metas com o paciente.'
      ]
    },
    instB: {
      vitals: {
        PA: '152/96 mmHg (média de 2 medidas; braço contralateral 150/94)',
        FC: '82 bpm',
        FR: '16 irpm',
        Peso: '102 kg',
        Altura: '1,75 m',
        IMC: '33,3 kg/m²',
        'Circunferência abdominal': '112 cm'
      },
      physicalGeneral: 'Bom estado geral, obesidade central, acantose nigricans cervical e axilar. Corado, hidratado.',
      physicalSeg: 'CARDIOVASCULAR: RCR 2T, B4 discreta, sem sopros; pulsos periféricos simétricos | ABDOME: globoso, flácido, fígado palpável a 2 cm do rebordo costal, indolor | PELE: acantose nigricans cervical e axilar; sem xantomas | FUNDO DE OLHO: cruzamentos arteriovenosos patológicos discretos',
      labs: [
        { test: 'Glicemia de jejum', val: '118 mg/dL', ref: '70–99 mg/dL', alt: true },
        { test: 'HbA1c', val: '6,2%', ref: '< 5,7%', alt: true },
        { test: 'Colesterol total', val: '252 mg/dL', ref: '< 190 mg/dL', alt: true },
        { test: 'LDL-c', val: '158 mg/dL', ref: '< 130 mg/dL', alt: true },
        { test: 'HDL-c', val: '32 mg/dL', ref: '> 40 mg/dL', alt: true },
        { test: 'Triglicerídeos', val: '325 mg/dL', ref: '< 150 mg/dL', alt: true },
        { test: 'Ácido úrico', val: '8,5 mg/dL', ref: '3,5–7,2 mg/dL', alt: true },
        { test: 'TGO / TGP / GGT', val: '58 / 72 / 110 U/L', ref: '< 40 / < 40 / < 60 U/L', alt: true },
        { test: 'Plaquetas / Albumina', val: '230.000/mm³ / 4,3 g/dL', ref: '150–400 mil / 3,5–5,0', alt: false },
        { test: 'Creatinina (TFG)', val: '0,9 mg/dL (> 90 mL/min/1,73 m²)', ref: '0,7–1,3 mg/dL', alt: false },
        { test: 'Relação albumina/creatinina urinária', val: '22 mg/g', ref: '< 30 mg/g', alt: false },
        { test: 'Potássio', val: '4,3 mEq/L', ref: '3,5–5,0 mEq/L', alt: false },
        { test: 'TSH', val: '1,9 μUI/mL', ref: '0,4–4,0 μUI/mL', alt: false }
      ],
      image: 'USG de abdome (trazida pelo paciente): esteatose hepática moderada, sem sinais de hepatopatia crônica. ECG (se solicitado): ritmo sinusal, critérios de sobrecarga ventricular esquerda limítrofes (Sokolow-Lyon 34 mm).',
      note: 'Os exames são entregues no início (o paciente os traz). MRPA (se solicitada): média 148/94 mmHg — confirma hipertensão. FIB-4 (se calculado): 1,3 (indeterminado — sugere elastografia).',
      patientProfile: 'R.S.L., 48 anos, gerente de vendas, casado, dois filhos adolescentes. Trabalha 10–12 h/dia, almoça fast-food, belisca à noite. Sedentário. Bebe 2–3 latas de cerveja todos os dias e mais no fim de semana. Ex-tabagista (parou há 5 anos, 20 maços-ano). Dorme mal, ronca. Pai teve infarto aos 55 anos; mãe diabética. Nunca tratou nada; acha que "remédio vicia".',
      script: [
        { trigger: 'Queixa principal', speech: 'Doutor, vim fazer um check-up, a empresa pediu. Os exames vieram tudo alterado: açúcar, pressão, colesterol.' },
        { trigger: 'Sobre sintomas', speech: 'Não sinto nada. Às vezes uma dor na nuca no fim do dia, mas acho que é estresse.' },
        {
          trigger: 'Sobre trabalho e alimentação',
          speech: 'Trabalho muito, umas 12 horas por dia. Almoço o que dá: lanche, salgado, pizza. À noite belisco vendo TV.'
        },
        { trigger: 'Sobre atividade física', speech: 'Exercício nenhum. Do carro pro escritório e do escritório pro sofá.' },
        { trigger: 'Sobre álcool', speech: 'Cerveja todo dia, duas, três latinhas pra relaxar. No fim de semana um pouco mais.' },
        { trigger: 'Sobre tabagismo', speech: 'Fumei 20 anos, um maço por dia. Parei faz 5 anos.' },
        { trigger: 'Sobre sono', speech: 'Durmo mal, acordo cansado. Minha mulher diz que eu ronco alto.' },
        { trigger: 'Sobre a família', speech: 'Meu pai enfartou com 55 anos e morreu. Minha mãe tem diabetes.' },
        { trigger: 'Sobre remédios', speech: 'Nunca tomei remédio contínuo. Tenho receio, dizem que vicia, que depois não pode parar.' },
        { trigger: 'Pergunta ativa — diagnóstico e risco', speech: 'Estou com diabetes, doutor? Qual é o meu risco de ter um infarto como meu pai?' }
      ],
      hiddenInfo: 'Ex-tabagista com carga de 20 maços-ano — só revela se perguntado | Ronco e sono não reparador (suspeita de apneia do sono) — só revela se perguntado sobre o sono | Consumo diário de álcool — só detalha a quantidade se perguntado diretamente | Crença de que "remédio vicia" — só revela se o candidato explorar a adesão/crenças',
      actorBehavior: 'Paciente apressado, olha o celular, quer resolver rápido. Minimiza os resultados ("todo mundo da minha idade tem isso"). Fica sério quando o candidato relaciona o risco com o infarto do pai. Aceita mudanças se o candidato pactuar metas concretas e realistas, e resiste a parar totalmente a cerveja.'
    },
    instC: {
      diagnosis: 'Síndrome metabólica (5 de 5 critérios harmonizados: obesidade abdominal, triglicerídeos ≥ 150, HDL < 40, PA elevada e glicemia de jejum ≥ 100) com pré-diabetes, hipertensão arterial estágio 1 (a confirmar com MRPA/MAPA), dislipidemia aterogênica, obesidade grau I, doença hepática esteatótica associada à disfunção metabólica (MASLD) com consumo de álcool, hiperuricemia assintomática e suspeita de apneia obstrutiva do sono.',
      differentials: [
        'Diabetes mellitus tipo 2 — sai: glicemia 118 e HbA1c 6,2% estão na faixa de pré-diabetes',
        'Hipertensão do avental branco — confirmar com MRPA ou MAPA antes de rotular (embora a lesão de órgão-alvo sugira HAS verdadeira)',
        'Doença hepática alcoólica (MetALD) — consumo diário de álcool contribui para a esteatose e a GGT elevada',
        'Hipotireoidismo e síndrome de Cushing como causas secundárias — TSH normal; sem estigmas de Cushing',
        'Hiperaldosteronismo primário — rastrear se HAS resistente ou hipocalemia; potássio normal'
      ],
      context: 'Homem de 48 anos, sedentário, com dieta rica em ultraprocessados, consumo diário de álcool e história familiar de doença coronariana precoce. Exames mostram todos os componentes da síndrome metabólica, pré-diabetes, esteatose hepática e hiperuricemia. A síndrome metabólica dobra o risco cardiovascular e aumenta em cerca de 5 vezes o risco de DM2; o tratamento se apoia em mudança intensiva do estilo de vida e no controle de cada fator de risco.',
      justify: 'Critérios harmonizados (IDF/AHA/NHLBI 2009) — 3 ou mais de 5: circunferência abdominal aumentada (112 cm), TG ≥ 150 (325), HDL < 40 (32), PA ≥ 130/85 (152/96) e glicemia de jejum ≥ 100 (118). Pré-diabetes: glicemia de jejum 100–125 e HbA1c 5,7–6,4%. Esteatose à USG com fatores cardiometabólicos = MASLD (nomenclatura de 2023); o álcool caracteriza componente misto (MetALD).',
      expectedAnamnesis: 'Hábitos alimentares e atividade física | Consumo de álcool (quantificar) | Tabagismo (atual/prévio e carga) | Sono e ronco | Sintomas cardiovasculares (angina, dispneia, claudicação) | Sintomas de hiperglicemia | História familiar de DCV precoce e diabetes | Medicamentos e suplementos | Crenças e disposição para mudança',
      expectedPhysical: 'PA com técnica adequada, nos dois braços | Peso, altura, IMC e circunferência abdominal | Acantose nigricans | Ausculta cardíaca e de carótidas | Palpação hepática | Pulsos periféricos | Fundoscopia',
      expectedExams: [
        { exam: 'MRPA ou MAPA', justify: 'Confirmar hipertensão', expected: 'Média 148/94 mmHg' },
        { exam: 'Glicemia de jejum, HbA1c (± TOTG)', justify: 'Classificar a disglicemia', expected: 'Pré-diabetes' },
        {
          exam: 'Perfil lipídico, creatinina, potássio, RAC, urina tipo 1',
          justify: 'Estratificação e lesão de órgão-alvo',
          expected: 'Dislipidemia; função renal normal'
        },
        { exam: 'ECG', justify: 'Hipertrofia ventricular esquerda', expected: 'Sobrecarga limítrofe' },
        { exam: 'FIB-4 (± elastografia)', justify: 'Risco de fibrose na MASLD', expected: 'Indeterminado' },
        { exam: 'Escore de risco cardiovascular (Escore de Risco Global / PREVENT)', justify: 'Definir metas de LDL', expected: 'Risco alto' }
      ],
      expectedConduct: 'Mudança intensiva do estilo de vida: perda de 7–10% do peso, dieta mediterrânea/DASH com redução de ultraprocessados, açúcar e sal (< 2 g de sódio/dia), atividade física ≥ 150 min/semana + exercícios resistidos | Reduzir o álcool substancialmente (idealmente abstinência pela esteatose) | Hipertensão estágio 1 com alto risco cardiovascular: iniciar tratamento farmacológico junto com MEV — BRA ou IECA (ex.: losartana 50 mg) ou combinação em dose baixa; meta < 130/80 mmHg | Dislipidemia: estatina de moderada a alta intensidade (ex.: atorvastatina 20–40 mg ou rosuvastatina 10–20 mg), meta de LDL conforme o risco (< 70 mg/dL se alto risco) | Pré-diabetes: MEV é a principal intervenção; considerar metformina (ex.: se progressão, IMC ≥ 35 ou fatores adicionais) | Obesidade: considerar agonista de GLP-1 se não atingir metas | Hiperuricemia assintomática: não tratar com hipouricemiante | Polissonografia pela suspeita de AOS | Elastografia hepática (FIB-4 indeterminado) | Vacinação contra hepatite A/B | Retorno em 1–3 meses',
      expectedCommunication: 'Explicar a síndrome metabólica de forma simples e relacioná-la ao risco do pai | Usar entrevista motivacional e pactuar metas concretas | Desmistificar a ideia de que "remédio vicia" | Negociar a redução do álcool | Verificar a compreensão e combinar o retorno',
      criticalErrors: [
        'Não medir a circunferência abdominal nem identificar a síndrome metabólica',
        'Diagnosticar diabetes com glicemia de jejum 118 e HbA1c 6,2%',
        'Não prescrever estatina em paciente de alto risco cardiovascular com LDL 158',
        'Não orientar mudança do estilo de vida e redução do álcool',
        'Prescrever alopurinol para hiperuricemia assintomática'
      ]
    },
    instD: {
      title: 'Síndrome Metabólica — Material de Estudo',
      sections: [
        {
          h: 'Definição e Critérios',
          items: [
            {
              item: 'Critérios harmonizados (≥ 3 de 5): circunferência abdominal aumentada (específica por etnia), TG ≥ 150, HDL < 40 (H) / < 50 (M), PA ≥ 130/85 ou tratamento, glicemia de jejum ≥ 100 ou tratamento.',
              score: 2,
              ref: 'Alberti KG et al., Circulation 2009 (Harmonizing the Metabolic Syndrome)'
            },
            { item: 'Dobra o risco de doença cardiovascular e aumenta em ~5 vezes o risco de DM2.', score: 1, ref: 'Harrison — Medicina Interna, 21ª ed.' }
          ]
        },
        {
          h: 'Componentes Associados',
          items: [
            {
              item: 'MASLD (antiga DHGNA): esteatose + ≥ 1 fator cardiometabólico; MetALD quando há consumo moderado de álcool; estratificar fibrose com FIB-4.',
              score: 1,
              ref: 'Rinella ME et al., Hepatology 2023 (Delphi consensus)'
            },
            { item: 'Pré-diabetes: glicemia de jejum 100–125, HbA1c 5,7–6,4% ou TOTG 2 h 140–199 mg/dL.', score: 1, ref: 'Diretriz SBD, 2024' }
          ]
        },
        {
          h: 'Tratamento',
          items: [
            { item: 'Mudança intensiva do estilo de vida reduz a incidência de DM2 em 58% (DPP).', score: 2, ref: 'Knowler WC et al., NEJM 2002' },
            {
              item: 'Tratar cada componente segundo o risco cardiovascular: estatina, anti-hipertensivo (meta < 130/80), metformina em pré-diabetes de alto risco.',
              score: 2,
              ref: 'Diretrizes Brasileiras de Hipertensão, 2025; Diretriz Brasileira de Dislipidemias, 2025'
            },
            { item: 'Hiperuricemia assintomática não deve ser tratada com hipouricemiantes.', score: 1, ref: 'ACR Gout Guideline, 2020' }
          ]
        }
      ]
    }
  },

  // ENDOCRINOLOGIA — Hipoglicemias recorrentes graves
  {
    id: 21,
    title: 'Idosa diabética com confusão, suor e tremores antes das refeições',
    sub: 'UBS — Atenção Primária',
    tema: 'Endocrinologia',
    topic: 'Hipoglicemia Iatrogênica no Idoso com Diabetes',
    level: 'moderado',
    cardAccent: '#FF7043',
    instA: {
      scenario: 'Consulta na UBS. A paciente vem acompanhada da filha.',
      patient: 'M.J.S., 78 anos, sexo feminino, aposentada.',
      complaint: 'Episódios recorrentes de confusão mental, sudorese e tremores, especialmente de madrugada e antes das refeições. DM2 há 15 anos em uso de glibenclamida.',
      tasks: [
        'Realize a anamnese dirigida às hipoglicemias (com a paciente e a filha).',
        'Revise o tratamento atual e identifique os fatores de risco para hipoglicemia.',
        'Solicite o exame físico e os exames pertinentes.',
        'Ajuste o tratamento e defina a meta glicêmica individualizada.',
        'Oriente a paciente e a familiar sobre o reconhecimento e o tratamento da hipoglicemia.'
      ]
    },
    instB: {
      vitals: {
        PA: '135/80 mmHg (em pé: 128/76 mmHg)',
        FC: '72 bpm',
        FR: '16 irpm',
        Peso: '52 kg (há 1 ano: 58 kg)',
        Altura: '1,58 m',
        IMC: '20,8 kg/m²',
        'Glicemia capilar': '88 mg/dL (2 h após o café)'
      },
      physicalGeneral: 'Idosa emagrecida, lúcida no momento, orientada, marcha lenta com base alargada. Hidratada, corada.',
      physicalSeg: 'FUNCIONAL: necessita de ajuda para preparar refeições e organizar medicamentos; teste "levante e ande" 16 s; força de preensão reduzida | COGNITIVO: Mini-Exame do Estado Mental 22/30 (escolaridade 4 anos) | PÉS: pele íntegra, pulsos presentes, monofilamento alterado em hálux bilateral | CARDIOVASCULAR: RCR 2T, sem sopros | PELE: equimose em antebraço direito (queda recente)',
      labs: [
        { test: 'HbA1c', val: '6,8%', ref: 'Meta para idosa frágil < 8,0%', alt: false },
        { test: 'Glicemia de jejum', val: '95 mg/dL', ref: '70–99 mg/dL', alt: false },
        { test: 'Creatinina', val: '1,4 mg/dL', ref: '0,6–1,2 mg/dL', alt: true },
        { test: 'TFG (CKD-EPI)', val: '37 mL/min/1,73 m²', ref: '> 60 mL/min/1,73 m²', alt: true },
        { test: 'Relação albumina/creatinina urinária', val: '45 mg/g', ref: '< 30 mg/g', alt: true },
        { test: 'Albumina sérica', val: '3,3 g/dL', ref: '3,5–5,0 g/dL', alt: true },
        { test: 'Hemoglobina', val: '11,4 g/dL', ref: '12,0–16,0 g/dL', alt: true },
        { test: 'Vitamina B12', val: '210 pg/mL', ref: '> 300 pg/mL', alt: true },
        { test: 'TSH', val: '2,6 μUI/mL', ref: '0,4–4,0 μUI/mL', alt: false },
        { test: 'Sódio / Potássio', val: '138 / 4,6 mEq/L', ref: '135–145 / 3,5–5,0', alt: false }
      ],
      image: {
        title: 'Diário de Glicemias Capilares (últimas 2 semanas)',
        report: 'Madrugada (3 h): 52, 61, 58, 70, 49 mg/dL\nAntes do almoço: 64, 72, 58, 80 mg/dL\nAntes do jantar: 66, 90, 55 mg/dL\n2 h após o almoço: 160–210 mg/dL\nAnotação da filha: "dia 12 — achei a mãe caída no banheiro às 4 h, suada e confusa; dei suco e melhorou".'
      },
      note: 'O diário glicêmico é entregue quando o candidato perguntar sobre glicemias domiciliares. Medicamentos em uso (lista trazida pela filha, se solicitada): glibenclamida 5 mg 2 cp manhã e 2 cp noite; metformina 850 mg 1 cp 2x/dia; losartana 50 mg/dia; sinvastatina 20 mg à noite.',
      patientProfile: 'M.J.S., 78 anos, viúva, aposentada (ex-costureira), mora sozinha; a filha visita diariamente. DM2 há 15 anos, hipertensa. Perdeu 6 kg no último ano: "não tem fome" e às vezes pula o jantar. Toma os remédios sozinha, em caixinha organizada pela filha. Teve uma queda à noite há 10 dias. Quando a glicemia "dá alta" após o almoço, a filha dá um comprimido extra de glibenclamida.',
      script: [
        {
          trigger: 'Filha — queixa principal',
          speech: 'Doutor(a), minha mãe tem ficado confusa, suando frio e tremendo, principalmente de madrugada e antes do almoço. Semana passada achei ela caída no banheiro.'
        },
        { trigger: 'Paciente — sintomas', speech: 'Me dá uma tremedeira, um suor, o coração dispara... aí eu como uma bolachinha e passa.' },
        { trigger: 'Filha — medicamentos', speech: 'Ela toma glibenclamida, dois de manhã e dois à noite, e metformina. E o da pressão.' },
        { trigger: 'Filha — dose extra', speech: 'Quando o açúcar sobe depois do almoço, eu dou mais um comprimidinho da glibenclamida pra baixar. Fiz errado?' },
        { trigger: 'Paciente — alimentação', speech: 'Não tenho muita fome, não. De noite às vezes nem janto, tomo só um chá.' },
        { trigger: 'Filha — peso e memória', speech: 'Ela emagreceu uns seis quilos esse ano. E anda mais esquecida, às vezes não lembra se tomou o remédio.' },
        { trigger: 'Sobre rins e outros problemas', speech: 'O médico falou que o rim está fraco. Mas nunca mudou os remédios.' },
        { trigger: 'Paciente — pergunta ativa', speech: 'Doutor(a), mas eu não tenho que deixar o açúcar bem baixinho pra não ter problema?' }
      ],
      hiddenInfo: 'A filha dá comprimido extra de glibenclamida quando a glicemia pós-almoço está alta — só revela se perguntada sobre como os remédios são administrados | Pula o jantar com frequência — só revela se perguntada sobre a alimentação | Esquecimento: às vezes toma o remédio duas vezes — só revela se perguntada sobre memória/organização dos medicamentos | Queda noturna há 10 dias — só detalha se perguntada sobre quedas',
      actorBehavior: 'Paciente tranquila, um pouco lenta, deixa a filha responder a maior parte. A filha é dedicada e preocupada, sente culpa quando entende que a dose extra contribuiu. A paciente acredita que "açúcar baixo é sempre bom" e precisa de explicação simples para aceitar metas menos rígidas.'
    },
    instC: {
      diagnosis: 'Hipoglicemias recorrentes graves (inclusive noturnas, com queda) induzidas por sulfonilureia (glibenclamida) em idosa frágil com diabetes tipo 2, doença renal crônica G3b A2, perda de peso, baixa ingestão alimentar e provável comprometimento cognitivo — supertratamento (HbA1c 6,8% abaixo da meta individualizada).',
      differentials: [
        'Insuficiência adrenal — causa de hipoglicemia; investigar se hiponatremia, hipercalemia ou hipotensão (ausentes)',
        'Insulinoma — hipoglicemia de jejum sem uso de hipoglicemiantes; aqui há causa iatrogênica evidente',
        'Hipoglicemia por desnutrição/doença consumptiva — perda de peso exige investigação, mas a sulfonilureia é a causa principal',
        'AIT/AVC ou demência — episódios de confusão; a relação com glicemias baixas e a melhora com açúcar confirmam hipoglicemia (tríade de Whipple)'
      ],
      context: 'Idosa de 78 anos, frágil, com DM2 há 15 anos, DRC, emagrecimento e declínio cognitivo, em uso de glibenclamida (sulfonilureia de longa ação, metabolizada pelo rim) em dose elevada, com doses extras administradas pela filha. Os episódios de confusão, sudorese e tremor que melhoram com açúcar e o diário glicêmico com valores < 70 (e < 54) confirmam hipoglicemias recorrentes, inclusive com queda — evento grave.',
      justify: 'Tríade de Whipple: sintomas compatíveis + glicemia baixa documentada + melhora com correção. Glibenclamida é contraindicada em idosos (critérios de Beers) e na DRC pela meia-vida prolongada. HbA1c 6,8% em idosa frágil com hipoglicemias indica supertratamento: a meta deve ser < 8,0%, priorizando a ausência de hipoglicemia.',
      expectedAnamnesis: 'Caracterização dos episódios (sintomas adrenérgicos e neuroglicopênicos, horário, relação com refeições) | Glicemias documentadas | Hipoglicemias graves, quedas e atendimentos de urgência | Medicamentos, doses, horários e quem administra | Alimentação, apetite e perda de peso | Função renal | Cognição e capacidade de autocuidado | Rede de apoio | Percepção da paciente sobre metas',
      expectedPhysical: 'Avaliação de fragilidade e funcionalidade | Rastreio cognitivo | Peso e IMC | PA deitada e em pé | Exame dos pés | Sinais de trauma por queda',
      expectedExams: [
        { exam: 'Creatinina/TFG e RAC', justify: 'Ajuste de medicamentos à função renal', expected: 'TFG 37, albuminúria moderada' },
        { exam: 'HbA1c', justify: 'Grau de controle', expected: '6,8% — supertratamento' },
        {
          exam: 'Hemograma, albumina, vitamina B12, TSH',
          justify: 'Perda de peso, desnutrição e declínio cognitivo (metformina × B12)',
          expected: 'Anemia leve, B12 baixa'
        },
        { exam: 'Eletrólitos', justify: 'Excluir insuficiência adrenal e distúrbios associados', expected: 'Normais' }
      ],
      expectedConduct: 'Suspender a glibenclamida imediatamente (e orientar a filha a não dar doses extras) | Ajustar a metformina pela TFG 37: máximo 1.000 mg/dia (500 mg 2x/dia) | Se necessário controle adicional: iDPP-4 sem ajuste renal (linagliptina 5 mg/dia) — baixo risco de hipoglicemia | iSGLT2 pode ser considerado pela DRC com albuminúria, com cautela quanto à desidratação e perda de peso | Meta individualizada: HbA1c < 8,0%, glicemias de jejum 100–180 mg/dL, sem hipoglicemias | Tratar hipoglicemia (regra dos 15): 15 g de carboidrato de absorção rápida, reavaliar em 15 min; se inconsciente, não dar nada pela boca — glucagon ou SAMU | Repor vitamina B12 | Avaliação nutricional, investigação da perda de peso e da cognição | Prevenção de quedas | Simplificar o esquema e supervisionar a tomada dos medicamentos | Retorno em 2–4 semanas com diário glicêmico',
      expectedCommunication: 'Explicar à paciente e à filha que, na idade dela, açúcar muito baixo é mais perigoso que um pouco alto | Acolher a culpa da filha sem julgamento | Ensinar o reconhecimento e o tratamento da hipoglicemia | Usar linguagem simples e verificar a compreensão (teach-back)',
      criticalErrors: [
        'Manter a glibenclamida (ou trocar por outra sulfonilureia) em idosa frágil com DRC e hipoglicemias',
        'Não avaliar a função renal antes de ajustar os medicamentos',
        'Manter meta de HbA1c < 7% em idosa frágil com hipoglicemias',
        'Não orientar a família sobre reconhecimento e tratamento da hipoglicemia',
        'Não investigar a administração dos medicamentos (dose extra pela filha)'
      ]
    },
    instD: {
      title: 'Hipoglicemia no Idoso com Diabetes — Material de Estudo',
      sections: [
        {
          h: 'Definição',
          items: [
            {
              item: 'Nível 1: glicemia < 70 mg/dL; nível 2: < 54 mg/dL; nível 3: evento grave com necessidade de ajuda de terceiros.',
              score: 1,
              ref: 'ADA Standards of Care, 2025'
            },
            {
              item: 'Idosos têm sintomas atípicos (confusão, quedas, alteração de comportamento) e maior risco de arritmias, quedas e demência.',
              score: 1,
              ref: 'Diretriz SBD — Diabetes no Idoso, 2024'
            }
          ]
        },
        {
          h: 'Fatores de Risco',
          items: [
            {
              item: 'Sulfonilureias (sobretudo glibenclamida) e insulina; DRC; desnutrição; comprometimento cognitivo; polifarmácia.',
              score: 2,
              ref: 'AGS Beers Criteria, 2023'
            }
          ]
        },
        {
          h: 'Metas e Tratamento',
          items: [
            {
              item: 'Metas individualizadas: idoso saudável HbA1c < 7,0–7,5%; frágil/comprometimento cognitivo < 8,0–8,5%; evitar hipoglicemia é prioridade.',
              score: 2,
              ref: 'SBD, 2024; ADA Older Adults, 2025'
            },
            {
              item: 'Desprescrição: suspender sulfonilureias; preferir metformina ajustada à TFG, iDPP-4 e iSGLT2 conforme perfil.',
              score: 1,
              ref: 'ADA Standards of Care, 2025'
            },
            { item: 'Metformina: dose máxima de 1.000 mg/dia com TFG 30–44; suspender se TFG < 30.', score: 1, ref: 'KDIGO Diabetes in CKD, 2022' },
            { item: 'Regra dos 15: 15 g de carboidrato rápido, reavaliar em 15 min; glucagon se inconsciente.', score: 1, ref: 'SBD, 2024' }
          ]
        }
      ]
    }
  },

  // ENDOCRINOLOGIA — Amenorreia hipotalâmica funcional por baixa disponibilidade energética
  {
    id: 22,
    title: 'Corredora sem menstruar há 10 meses',
    sub: 'Ambulatório de Ginecologia Endócrina',
    tema: 'Endocrinologia',
    topic: 'Amenorreia Hipotalâmica Funcional — Deficiência Energética Relativa no Esporte',
    level: 'moderado',
    cardAccent: '#FF7043',
    instA: {
      scenario: 'Ambulatório de ginecologia endócrina/medicina esportiva de um hospital universitário.',
      patient: 'C.M.R., 24 anos, sexo feminino, corredora profissional.',
      complaint: 'Amenorreia há 10 meses. Treina 6 vezes por semana (corrida de longa distância). Refere que "a menstruação parou depois que intensificou os treinos".',
      tasks: [
        'Realize a anamnese dirigida à amenorreia, ao treino e à alimentação.',
        'Solicite o exame físico pertinente.',
        'Formule a hipótese diagnóstica e os diferenciais.',
        'Solicite e interprete os exames complementares.',
        'Defina a conduta e oriente a paciente sobre os riscos e o tratamento.'
      ]
    },
    instB: {
      vitals: {
        PA: '100/62 mmHg',
        FC: '46 bpm',
        FR: '14 irpm',
        Tax: '35,9 °C',
        Peso: '50 kg (há 1 ano: 55 kg)',
        Altura: '1,66 m',
        IMC: '18,1 kg/m²',
        'Gordura corporal': '12%'
      },
      physicalGeneral: 'Bom estado geral, emagrecida, musculatura definida. Pele seca, extremidades frias. Lanugem discreta em antebraços.',
      physicalSeg: 'CARDIOVASCULAR: bradicardia sinusal, RCR 2T, sem sopros | MAMAS: sem galactorreia | PELE E FÂNEROS: sem hirsutismo, sem acne; sem sinal de Russell nas mãos; sem hipertrofia de parótidas | GENITAL: mucosa vaginal hipotrófica | MEMBROS: dor à palpação do 2º metatarso direito (fratura por estresse prévia em consolidação)',
      labs: [
        { test: 'β-HCG', val: '< 2 mUI/mL', ref: '< 5 mUI/mL', alt: false },
        { test: 'FSH', val: '2,8 mUI/mL', ref: '3–10 mUI/mL', alt: true },
        { test: 'LH', val: '1,5 mUI/mL', ref: '2–10 mUI/mL', alt: true },
        { test: 'Estradiol', val: '15 pg/mL', ref: '30–400 pg/mL', alt: true },
        { test: 'Prolactina', val: '12 ng/mL', ref: '< 25 ng/mL', alt: false },
        { test: 'TSH / T4 livre / T3', val: '2,5 μUI/mL / 0,9 ng/dL / 72 ng/dL', ref: '0,4–4,0 / 0,8–1,8 / 80–200', alt: true },
        { test: 'Testosterona total', val: '22 ng/dL', ref: '14–76 ng/dL', alt: false },
        { test: '25-OH vitamina D', val: '21 ng/mL', ref: '> 30 ng/mL (grupos de risco)', alt: true },
        { test: 'Hemoglobina / Ferritina', val: '11,9 g/dL / 14 ng/mL', ref: '12–16 g/dL / > 30 ng/mL', alt: true },
        { test: 'Potássio', val: '3,9 mEq/L', ref: '3,5–5,0 mEq/L', alt: false }
      ],
      image: {
        title: 'Densitometria Óssea (DXA)',
        report: 'Coluna lombar L1–L4: Z-score −1,8. Colo do fêmur: Z-score −1,2. Conclusão: densidade mineral óssea abaixo do esperado para a idade em atleta de modalidade com impacto (Z-score < −1,0).'
      },
      note: 'Entregar os exames apenas se solicitados. A DXA só é entregue se o candidato a solicitar (indicada após ≥ 6 meses de amenorreia). Se o candidato aplicar o questionário SCOFF: 2 respostas positivas (rastreio positivo para transtorno alimentar).',
      patientProfile: 'C.M.R., 24 anos, corredora profissional (meia-maratona), estudante de Educação Física. Menarca aos 13 anos, ciclos regulares até 1 ano atrás, quando aumentou o volume de treino para 90 km/semana. O treinador cobra "peso de prova". Conta calorias, evita carboidratos e gordura, pesa-se todos os dias. Teve fratura por estresse no pé há 4 meses. Não usa contraceptivo hormonal; tem namorado e usa preservativo.',
      script: [
        { trigger: 'Queixa principal', speech: 'Minha menstruação parou há uns 10 meses, desde que eu aumentei os treinos. Achei que era normal pra atleta.' },
        { trigger: 'Sobre o treino', speech: 'Treino seis vezes por semana, umas 90 km por semana, mais musculação. Estou me preparando pro Sul-Americano.' },
        { trigger: 'Sobre a alimentação', speech: 'Eu cuido muito do que como. Conto as calorias, cortei pão, massa e doce. Meu técnico quer que eu fique mais leve.' },
        { trigger: 'Sobre o peso', speech: 'Perdi uns 5 quilos no último ano. Me peso todo dia de manhã.' },
        { trigger: 'Sobre fraturas e lesões', speech: 'Tive uma fratura por estresse no pé há uns quatro meses. Fiquei parada seis semanas, foi horrível.' },
        { trigger: 'Sobre cansaço, frio e humor', speech: 'Ando muito cansada, sinto frio o tempo todo e fico irritada fácil. O rendimento caiu.' },
        { trigger: 'Sobre vômitos, laxantes ou compulsão', speech: 'Vomitar não. Mas às vezes tomo chá laxante pra desinchar antes da prova.' },
        { trigger: 'Sobre galactorreia, cefaleia, pelos', speech: 'Não sai leite, não tenho dor de cabeça, nem pelo a mais.' },
        { trigger: 'Pergunta ativa', speech: 'Não dá pra só tomar anticoncepcional pra menstruação voltar? Não posso diminuir o treino agora.' }
      ],
      hiddenInfo: 'Uso de chá laxante antes das provas (comportamento compensatório) — só revela se perguntada especificamente | Pesa-se diariamente e conta calorias — só revela se perguntada sobre alimentação/peso em detalhes | Fratura por estresse há 4 meses — só revela se perguntada sobre lesões | Pressão do treinador sobre o peso — só revela se perguntada sobre o ambiente esportivo',
      actorBehavior: 'Atleta determinada e competitiva, inicialmente minimiza o problema ("é normal para atleta"). Resiste a reduzir treinos e pede uma solução rápida (anticoncepcional). Fica pensativa ao saber do risco de novas fraturas e do impacto no rendimento. Aceita acompanhamento com nutricionista se o candidato usar argumentos de desempenho esportivo.'
    },
    instC: {
      diagnosis: 'Amenorreia hipotalâmica funcional por baixa disponibilidade energética (deficiência energética relativa no esporte — RED-S/tríade da mulher atleta), com baixa massa óssea para a idade (Z-score −1,8), fratura por estresse prévia, bradicardia, síndrome do T3 baixo e comportamento alimentar de risco.',
      differentials: [
        'Gestação — excluída por β-HCG',
        'Hiperprolactinemia — prolactina normal',
        'Disfunção tireoidiana primária — TSH normal; o T3 baixo reflete adaptação à deficiência energética',
        'Síndrome dos ovários policísticos — sai pela ausência de hiperandrogenismo e pelas gonadotrofinas baixas',
        'Insuficiência ovariana prematura — FSH estaria elevado',
        'Anorexia nervosa — IMC > 17,5, mas comportamento restritivo e uso de laxantes exigem avaliação especializada para transtorno alimentar',
        'Lesão hipotálamo-hipofisária — considerar RM se cefaleia, alterações visuais ou sem fator desencadeante claro'
      ],
      context: 'Corredora de 24 anos que aumentou muito o volume de treino sem adequar a ingestão, com restrição alimentar e perda de peso. A baixa disponibilidade energética suprime a pulsatilidade do GnRH, levando a hipogonadismo hipogonadotrófico, hipoestrogenismo e perda óssea — com fratura por estresse. O consenso do COI (2023) amplia a tríade para RED-S, com impacto em múltiplos sistemas e no desempenho.',
      justify: 'Amenorreia secundária > 3 meses com gonadotrofinas baixas/normais e estradiol baixo, após exclusão de gestação, hiperprolactinemia, tireoidopatia e hiperandrogenismo, em contexto de exercício intenso, restrição alimentar e perda de peso = amenorreia hipotalâmica funcional. Em mulheres na pré-menopausa usa-se Z-score: em atletas de impacto, Z < −1,0 já indica baixa massa óssea.',
      expectedAnamnesis: 'Menarca e padrão menstrual prévio | Volume e intensidade do treino | Ingestão alimentar, restrições, contagem de calorias | Perda de peso e autopercepção corporal | Comportamentos compensatórios (vômitos, laxantes, diuréticos) | Fraturas por estresse e lesões | Fadiga, intolerância ao frio, humor, desempenho | Sintomas de diferenciais (galactorreia, cefaleia, hirsutismo, fogachos) | Atividade sexual e contracepção | Pressão do ambiente esportivo',
      expectedPhysical: 'Peso, altura, IMC, sinais vitais (bradicardia, hipotensão, hipotermia) | Sinais de desnutrição (lanugem, pele seca) | Sinais de purgação (sinal de Russell, parótidas) | Galactorreia, hirsutismo e acne | Palpação óssea dolorosa (fraturas por estresse)',
      expectedExams: [
        { exam: 'β-HCG', justify: 'Excluir gestação', expected: 'Negativo' },
        { exam: 'FSH, LH, estradiol, prolactina, TSH/T4 livre', justify: 'Etiologia da amenorreia', expected: 'Gonadotrofinas e estradiol baixos; T3 baixo' },
        { exam: 'DXA (Z-score)', justify: 'Amenorreia ≥ 6 meses ou fratura por estresse', expected: 'Z-score −1,8' },
        { exam: 'Eletrólitos, hemograma, ferritina, 25-OH vitamina D', justify: 'Complicações da restrição/purgação', expected: 'Ferropenia e vitamina D baixa' },
        { exam: 'ECG', justify: 'Bradicardia e uso de laxantes', expected: 'Bradicardia sinusal' }
      ],
      expectedConduct: 'Restaurar a disponibilidade energética: aumentar a ingestão calórica (alvo ≥ 45 kcal/kg de massa magra/dia) e/ou reduzir o volume de treino; meta de ganho de peso e retorno menstrual | Equipe multidisciplinar: nutricionista esportivo, psicólogo/psiquiatra (rastreio positivo para transtorno alimentar, uso de laxantes), médico do esporte; envolver o treinador com consentimento | Retorno gradual ao esporte conforme risco (ferramenta RED-S CAT) | Cálcio 1.000–1.300 mg/dia e vitamina D | Repor ferro | Não usar ACO como 1ª linha (mascara a amenorreia e não protege o osso) | Se não houver recuperação após 6–12 meses de intervenção nutricional, ou se fraturas/baixa massa óssea: estradiol transdérmico com progestagênio cíclico | Contracepção: a ovulação pode retornar antes da menstruação — manter preservativo | Repetir DXA em 12 meses',
      expectedCommunication: 'Acolher a identidade de atleta e usar argumentos de desempenho e saúde | Explicar que amenorreia não é "normal" para atletas | Explicar por que o anticoncepcional não resolve | Abordar o comportamento alimentar sem julgamento | Pactuar metas com a paciente',
      criticalErrors: [
        'Prescrever ACO como tratamento principal sem corrigir a deficiência energética',
        'Não excluir gestação e outras causas de amenorreia',
        'Não solicitar DXA em amenorreia prolongada com fratura por estresse',
        'Não investigar comportamento alimentar e purgativo',
        'Interpretar a densitometria de mulher jovem pelo T-score (deve-se usar Z-score)'
      ]
    },
    instD: {
      title: 'Amenorreia Hipotalâmica Funcional e RED-S — Material de Estudo',
      sections: [
        {
          h: 'Definição',
          items: [
            {
              item: 'RED-S: prejuízo de funções fisiológicas (metabolismo, menstruação, saúde óssea, imunidade, cardiovascular) causado por baixa disponibilidade energética; amplia a tríade da mulher atleta.',
              score: 1,
              ref: 'Mountjoy M et al., IOC Consensus — Br J Sports Med 2023'
            },
            {
              item: 'Amenorreia hipotalâmica funcional: supressão do GnRH por déficit energético, estresse ou exercício excessivo; diagnóstico de exclusão.',
              score: 1,
              ref: 'Gordon CM et al., Endocrine Society Guideline 2017'
            }
          ]
        },
        {
          h: 'Diagnóstico',
          items: [
            { item: 'Avaliar β-HCG, FSH, LH, estradiol, prolactina, TSH/T4L; androgênios se hiperandrogenismo.', score: 1, ref: 'Endocrine Society Guideline, 2017' },
            {
              item: 'DXA se amenorreia ≥ 6 meses, fratura por estresse ou transtorno alimentar; usar Z-score.',
              score: 2,
              ref: 'Endocrine Society Guideline, 2017; ISCD 2023'
            },
            { item: 'Rastrear transtornos alimentares (SCOFF) e comportamentos compensatórios.', score: 1, ref: 'IOC Consensus, 2023' }
          ]
        },
        {
          h: 'Tratamento',
          items: [
            { item: 'Correção do déficit energético com abordagem multidisciplinar é o tratamento central.', score: 2, ref: 'Endocrine Society Guideline, 2017' },
            {
              item: 'ACO não é recomendado para recuperar massa óssea; se necessário, estradiol transdérmico + progestagênio cíclico.',
              score: 2,
              ref: 'Endocrine Society Guideline, 2017'
            }
          ]
        }
      ]
    }
  },

  // ENDOCRINOLOGIA — Insuficiência adrenal primária de etiologia autoimune
  {
    id: 23,
    title: 'Cansaço, emagrecimento, "bronzeado" e tontura ao levantar',
    sub: 'Ambulatório de Endocrinologia — Hospital Secundário',
    tema: 'Endocrinologia',
    topic: 'Insuficiência Adrenal Primária — Doença de Addison',
    level: 'difícil',
    cardAccent: '#FF7043',
    instA: {
      scenario: 'Você está no ambulatório de endocrinologia de um hospital secundário.',
      patient: 'A.L.M., 35 anos, sexo feminino, nutricionista.',
      complaint: 'Fadiga progressiva há 6 meses, perda de 8 kg, escurecimento da pele sem exposição ao sol e tontura ao levantar.',
      tasks: [
        'Realize a anamnese dirigida.',
        'Solicite o exame físico, incluindo PA em duas posições e a pesquisa de hiperpigmentação.',
        'Formule a hipótese diagnóstica e reconheça os sinais de gravidade.',
        'Solicite e interprete os exames complementares.',
        'Inicie o tratamento e oriente a paciente sobre a prevenção da crise adrenal.'
      ]
    },
    instB: {
      vitals: {
        'PA deitada': '95/60 mmHg',
        'PA em pé': '75/50 mmHg (com tontura)',
        FC: '92 bpm (em pé: 118 bpm)',
        FR: '16 irpm',
        Tax: '36,6 °C',
        Peso: '54 kg (há 6 meses: 62 kg)',
        'Glicemia capilar': '62 mg/dL'
      },
      physicalGeneral: 'Regular estado geral, emagrecida, desidratada 1+/4+, astênica. Hiperpigmentação difusa, mais acentuada em pregas palmares, cotovelos, cicatrizes, aréolas e mucosa oral (manchas acastanhadas em gengiva e face interna das bochechas).',
      physicalSeg: 'CARDIOVASCULAR: hipotensão postural sintomática, RCR 2T, sem sopros | ABDOME: discreta dor difusa à palpação, sem sinais de irritação peritoneal | PELE: vitiligo em dorso das mãos | TIREOIDE: discretamente aumentada, indolor | NEUROLÓGICO: sem déficits focais',
      labs: [
        { test: 'Sódio', val: '128 mEq/L', ref: '135–145 mEq/L', alt: true },
        { test: 'Potássio', val: '5,8 mEq/L', ref: '3,5–5,0 mEq/L', alt: true },
        { test: 'Glicemia', val: '62 mg/dL', ref: '70–99 mg/dL', alt: true },
        { test: 'Ureia / Creatinina', val: '52 / 1,2 mg/dL', ref: '10–50 / 0,6–1,1', alt: true },
        { test: 'Cortisol (8 h)', val: '2,5 μg/dL', ref: '6–23 μg/dL', alt: true },
        { test: 'ACTH', val: '485 pg/mL', ref: '10–60 pg/mL', alt: true },
        { test: 'Renina (atividade)', val: '18 ng/mL/h', ref: '0,5–4,0 ng/mL/h', alt: true },
        { test: 'Aldosterona', val: '< 3 ng/dL', ref: '4–31 ng/dL', alt: true },
        { test: 'Anticorpo anti-21-hidroxilase', val: 'Positivo', ref: 'Negativo', alt: true },
        { test: 'TSH / T4 livre / anti-TPO', val: '6,8 μUI/mL / 1,0 ng/dL / positivo', ref: '0,4–4,0 / 0,8–1,8 / negativo', alt: true },
        { test: 'Hemograma', val: 'Eosinófilos 9% (650/mm³)', ref: '1–5%', alt: true }
      ],
      note: 'Entregar glicemia capilar e eletrólitos se solicitados. Cortisol e ACTH: o candidato deve colher antes do corticoide, sem atrasar o tratamento. Teste com cortrosina (se solicitado): cortisol 30 e 60 min < 5 μg/dL. Se o candidato administrar hidrocortisona EV e soro, informar após 2 h: PA 110/70 em pé, glicemia 98 mg/dL, paciente melhor.',
      patientProfile: 'A.L.M., 35 anos, nutricionista, casada, sem filhos, tenta engravidar. Vitiligo desde os 20 anos. Há 6 meses com fadiga, perda de apetite, náuseas, perda de peso e "vontade enorme de comer coisas salgadas" (come sal puro e azeitona). Desmaiou uma vez ao levantar da cama. Achou que estivesse bronzeada da piscina, mas não tem ido. Mãe com hipotireoidismo.',
      script: [
        { trigger: 'Queixa principal', speech: 'Estou muito cansada faz uns seis meses, emagreci oito quilos sem querer e fico tonta toda vez que levanto.' },
        {
          trigger: 'Sobre a pele',
          speech: 'Minha pele ficou mais escura, principalmente nas mãos e na boca. Até a cicatriz da cirurgia de apêndice ficou escura. E eu não tomo sol.'
        },
        {
          trigger: 'Sobre apetite e sal',
          speech: 'Perdi a fome, tenho enjoo. Mas tenho uma vontade absurda de comer sal: como azeitona, picles, até sal puro na mão.'
        },
        { trigger: 'Sobre tontura e desmaio', speech: 'Semana passada desmaiei quando levantei da cama. Fiquei com muito medo.' },
        { trigger: 'Sobre dor abdominal e vômitos', speech: 'Às vezes dói a barriga e eu enjoo, mas vomitar só vomitei uma vez.' },
        { trigger: 'Sobre doenças autoimunes', speech: 'Tenho vitiligo desde os 20 anos. Minha mãe tem problema de tireoide.' },
        {
          trigger: 'Sobre uso de corticoide ou outros medicamentos',
          speech: 'Nunca usei corticoide. Não tomo nada, só um polivitamínico porque estou tentando engravidar.'
        },
        { trigger: 'Sobre menstruação e libido', speech: 'A menstruação está meio irregular, e a vontade de ter relação caiu muito.' },
        { trigger: 'Pergunta ativa', speech: 'O que eu tenho? É grave? Vou poder engravidar?' }
      ],
      hiddenInfo: 'Desejo intenso por sal (salt craving) — só revela se perguntada sobre apetite/preferências alimentares | Desmaio ao levantar — só revela se perguntada sobre síncope | Vitiligo e mãe com tireoidopatia (autoimunidade) — só revela se perguntada | Tentando engravidar — só revela se perguntada sobre planos reprodutivos',
      actorBehavior: 'Paciente muito cansada, fala devagar, apoia a cabeça na mão. Ao ser levantada para medir a PA, refere tontura forte e precisa sentar. Preocupada e ansiosa, mas colaborativa. Alivia-se ao entender que a doença tem tratamento e que pode engravidar.'
    },
    instC: {
      diagnosis: 'Insuficiência adrenal primária de etiologia autoimune (doença de Addison — anti-21-hidroxilase positivo), com deficiência de glicocorticoide e mineralocorticoide, hipotensão postural sintomática, hiponatremia, hipercalemia e hipoglicemia — iminência de crise adrenal; provável síndrome poliglandular autoimune tipo 2 (vitiligo e tireoidite de Hashimoto com hipotireoidismo subclínico).',
      differentials: [
        'Insuficiência adrenal secundária (hipofisária) — sai pelo ACTH elevado, hiperpigmentação e deficiência mineralocorticoide (hipercalemia, renina alta)',
        'Tuberculose adrenal — causa importante no Brasil; anticorpo positivo e ausência de sintomas/calcificações favorecem autoimune',
        'Anorexia nervosa — perda de peso; sai pela hiperpigmentação, hipotensão e laboratório',
        'Hipotireoidismo primário isolado — fadiga; o TSH discretamente elevado pode ser efeito da deficiência de cortisol e deve ser reavaliado após reposição',
        'Doença inflamatória intestinal / doença celíaca — perda de peso e dor abdominal; considerar se persistirem'
      ],
      context: 'Mulher de 35 anos com 6 meses de fadiga, perda de peso, anorexia, náuseas, desejo por sal, hipotensão postural com síncope e hiperpigmentação cutaneomucosa. Laboratório com hiponatremia, hipercalemia, hipoglicemia, eosinofilia, cortisol muito baixo com ACTH muito elevado e renina alta com aldosterona baixa. Vitiligo, anti-21-hidroxilase positivo e tireoidite autoimune sugerem síndrome poliglandular autoimune tipo 2. Hipotensão sintomática e hipoglicemia indicam tratamento imediato como crise adrenal iminente.',
      justify: 'Cortisol matinal < 5 μg/dL com ACTH > 2 vezes o limite superior é diagnóstico de insuficiência adrenal primária (cortrosina confirma, mas não deve atrasar o tratamento). Renina elevada com aldosterona baixa confirma deficiência mineralocorticoide. Anti-21-hidroxilase positivo define a etiologia autoimune, a mais comum em países desenvolvidos.',
      expectedAnamnesis: 'Fadiga, fraqueza, perda de peso, anorexia | Náuseas, vômitos, dor abdominal | Tontura postural e síncope | Desejo por sal | Escurecimento da pele e mucosas | Uso prévio de corticoides (diferencial com insuficiência secundária) | Doenças autoimunes pessoais e familiares | Tuberculose, HIV, anticoagulantes (hemorragia adrenal) | Menstruação, libido e desejo de gestação',
      expectedPhysical: 'PA e FC deitada e em pé | Glicemia capilar | Hiperpigmentação (pregas palmares, cicatrizes, mucosa oral, aréolas) | Hidratação | Vitiligo e tireoide',
      expectedExams: [
        { exam: 'Cortisol sérico 8 h e ACTH (colher antes do corticoide)', justify: 'Diagnóstico e localização', expected: 'Cortisol 2,5; ACTH 485' },
        {
          exam: 'Sódio, potássio, glicemia, ureia, creatinina',
          justify: 'Gravidade e deficiência mineralocorticoide',
          expected: 'Hiponatremia, hipercalemia, hipoglicemia'
        },
        { exam: 'Renina e aldosterona', justify: 'Deficiência mineralocorticoide', expected: 'Renina alta, aldosterona baixa' },
        { exam: 'Anticorpo anti-21-hidroxilase', justify: 'Etiologia autoimune', expected: 'Positivo' },
        { exam: 'TSH, T4L, anti-TPO, glicemia/HbA1c, B12', justify: 'Síndrome poliglandular autoimune', expected: 'Hipotireoidismo subclínico autoimune' },
        { exam: 'TC de adrenais', justify: 'Se anticorpo negativo (tuberculose, hemorragia, metástases)', expected: 'Não necessária neste caso' }
      ],
      expectedConduct: 'Pela hipotensão sintomática e hipoglicemia: hidrocortisona 100 mg EV imediatamente + SF 0,9% 1 L em 1 h (glicose EV se hipoglicemia persistir), em observação/internação; depois 50 mg EV 6/6 h ou 200 mg/24 h até estabilizar | Manutenção: hidrocortisona 15–25 mg/dia em 2–3 tomadas (ex.: 10–5–5 mg, maior dose ao acordar) + fludrocortisona 0,05–0,1 mg/dia (ajustar por PA, potássio e renina) | Regras de dias de doença: dobrar ou triplicar a dose oral em febre/doença; hidrocortisona 100 mg IM/EV se vômitos ou trauma; dose de estresse em cirurgias | Kit de emergência com hidrocortisona injetável, cartão/pulseira de identificação | Reavaliar a tireoide após 6–8 semanas de reposição de glicocorticoide (iniciar levotiroxina só depois do cortisol) | Planejamento da gestação: manter reposição e ajustar a hidrocortisona no 3º trimestre | Rastreio periódico de outras doenças autoimunes',
      expectedCommunication: 'Explicar a doença e a necessidade de reposição por toda a vida | Ensinar as regras de dias de doença e o uso do kit de emergência | Tranquilizar quanto à possibilidade de gestação com acompanhamento | Verificar a compreensão',
      criticalErrors: [
        'Não reconhecer a hiperpigmentação e a hipotensão postural como sinais de insuficiência adrenal',
        'Atrasar a hidrocortisona aguardando exames confirmatórios em paciente instável',
        'Não prescrever mineralocorticoide na insuficiência adrenal primária',
        'Não orientar dose de estresse e kit de emergência',
        'Iniciar levotiroxina antes da reposição de glicocorticoide'
      ]
    },
    instD: {
      title: 'Insuficiência Adrenal Primária — Material de Estudo',
      sections: [
        {
          h: 'Etiologia',
          items: [
            {
              item: 'Autoimune (80–90% em países desenvolvidos); tuberculose ainda relevante no Brasil; outras: hemorragia, metástases, infecções fúngicas, HIV, fármacos.',
              score: 1,
              ref: 'Endocrine Society Guideline — Primary Adrenal Insufficiency, 2016'
            },
            {
              item: 'Síndrome poliglandular autoimune tipo 2: Addison + tireoidite autoimune e/ou DM1; vitiligo frequente.',
              score: 1,
              ref: 'Husebye ES et al., NEJM 2018'
            }
          ]
        },
        {
          h: 'Diagnóstico',
          items: [
            {
              item: 'Cortisol matinal < 5 μg/dL com ACTH > 2x o limite superior é altamente sugestivo; teste com cortrosina 250 mcg confirma (pico < 18 μg/dL).',
              score: 2,
              ref: 'Endocrine Society Guideline, 2016'
            },
            { item: 'Hiponatremia, hipercalemia, hipoglicemia, eosinofilia; renina alta com aldosterona baixa.', score: 1, ref: 'Endocrine Society Guideline, 2016' }
          ]
        },
        {
          h: 'Tratamento',
          items: [
            { item: 'Crise adrenal: hidrocortisona 100 mg EV + SF 0,9% imediatamente, sem aguardar exames.', score: 2, ref: 'Endocrine Society Guideline, 2016' },
            { item: 'Manutenção: hidrocortisona 15–25 mg/dia fracionada + fludrocortisona 50–100 mcg/dia.', score: 2, ref: 'Endocrine Society Guideline, 2016' },
            { item: 'Educação: regras de dias de doença, injeção de emergência e identificação.', score: 1, ref: 'Endocrine Society Guideline, 2016' }
          ]
        }
      ]
    }
  },

  // ENDOCRINOLOGIA — Hiperaldosteronismo primário com hipocalemia espontânea e alcalose metabólica
  {
    id: 24,
    title: 'Hipertensão sem controle com 4 remédios e potássio baixo',
    sub: 'Ambulatório de Endocrinologia — Hospital Terciário',
    tema: 'Endocrinologia',
    topic: 'Hiperaldosteronismo Primário',
    level: 'difícil',
    cardAccent: '#FF7043',
    instA: {
      scenario: 'Ambulatório de endocrinologia de hospital terciário. Paciente encaminhado pela cardiologia por hipertensão resistente.',
      patient: 'F.S.R., 52 anos, sexo masculino, advogado.',
      complaint: 'Hipertensão há 8 anos, sem controle apesar de 4 anti-hipertensivos. Episódios repetidos de potássio baixo e câimbras frequentes.',
      tasks: [
        'Realize a anamnese dirigida à hipertensão resistente e às causas secundárias.',
        'Solicite o exame físico pertinente.',
        'Solicite e interprete os exames para hiperaldosteronismo primário.',
        'Defina a investigação de localização e a conduta.',
        'Oriente o paciente sobre o tratamento.'
      ]
    },
    instB: {
      vitals: { PA: '168/102 mmHg (média de 3 medidas; ambos os braços semelhantes)', FC: '76 bpm', FR: '16 irpm', Peso: '82 kg', Altura: '1,76 m', IMC: '26,5 kg/m²' },
      physicalGeneral: 'Bom estado geral, corado, hidratado, eupneico. Sem estigmas de Cushing. Sem edema.',
      physicalSeg: 'CARDIOVASCULAR: ictus desviado para a esquerda, B4 presente, sem sopros; pulsos simétricos, sem diferença entre membros superiores e inferiores | ABDOME: sem sopro abdominal (diferencial com estenose de artéria renal) | NEUROLÓGICO: força preservada, sem déficits | FUNDO DE OLHO: estreitamento arteriolar e cruzamentos arteriovenosos patológicos',
      labs: [
        { test: 'Potássio', val: '2,9 mEq/L', ref: '3,5–5,0 mEq/L', alt: true },
        { test: 'Sódio', val: '145 mEq/L', ref: '135–145 mEq/L', alt: false },
        { test: 'Bicarbonato', val: '31 mEq/L', ref: '22–28 mEq/L', alt: true },
        { test: 'Aldosterona plasmática', val: '28 ng/dL', ref: '4–31 ng/dL', alt: true },
        { test: 'Atividade de renina plasmática', val: '0,3 ng/mL/h', ref: '0,5–4,0 ng/mL/h', alt: true },
        { test: 'Relação aldosterona/renina', val: '93', ref: '< 30', alt: true },
        { test: 'Creatinina (TFG)', val: '1,1 mg/dL (76 mL/min/1,73 m²)', ref: '0,7–1,3 mg/dL', alt: false },
        { test: 'Relação albumina/creatinina urinária', val: '68 mg/g', ref: '< 30 mg/g', alt: true },
        { test: 'Glicemia de jejum', val: '96 mg/dL', ref: '70–99 mg/dL', alt: false },
        { test: 'Cortisol após 1 mg de dexametasona', val: '1,2 μg/dL', ref: '< 1,8 μg/dL', alt: false }
      ],
      image: {
        title: 'TC de Adrenais e Cateterismo de Veias Adrenais',
        report: 'TC DE ADRENAIS (protocolo): nódulo em adrenal esquerda de 1,8 cm, homogêneo, densidade de 6 UH sem contraste (rico em gordura — compatível com adenoma). Adrenal direita de aspecto normal.\n\nCATETERISMO DE VEIAS ADRENAIS (com estímulo de cosintropina): cateterização bilateral bem-sucedida (índice de seletividade > 3). Índice de lateralização (relação aldosterona/cortisol esquerda ÷ direita) = 8,2 → produção lateralizada para a esquerda.'
      },
      note: 'Medicamentos em uso (se perguntado): anlodipino 10 mg, losartana 100 mg, hidroclorotiazida 25 mg, atenolol 50 mg — com boa adesão (contagem de comprimidos confirma). MAPA (se solicitada): média de 24 h 162/98 mmHg — confirma HAS resistente. Entregar a TC só após a confirmação bioquímica; o laudo do cateterismo só se o candidato indicar o exame antes de propor cirurgia.',
      patientProfile: 'F.S.R., 52 anos, advogado, casado, dois filhos. HAS diagnosticada aos 44 anos, já difícil de controlar desde o início. Toma os 4 remédios corretamente. Já foi ao pronto-socorro duas vezes por fraqueza e câimbras com potássio baixo; recebeu cloreto de potássio. Urina muito à noite. Não usa anti-inflamatórios, descongestionantes ou alcaçuz. Não ronca. Pai morreu de AVC aos 58 anos.',
      script: [
        { trigger: 'Queixa principal', speech: 'Tenho pressão alta há 8 anos. Tomo quatro remédios direitinho e mesmo assim a pressão não baixa.' },
        {
          trigger: 'Sobre câimbras e fraqueza',
          speech: 'Tenho muita câimbra, principalmente à noite. Duas vezes fui parar no pronto-socorro de tão fraco, e disseram que o potássio estava baixo.'
        },
        { trigger: 'Sobre urina', speech: 'Levanto umas três vezes à noite pra urinar. Tenho bastante sede.' },
        { trigger: 'Sobre adesão e medicamentos', speech: 'Tomo tudo certinho, minha mulher organiza. Anti-inflamatório não tomo, nem descongestionante.' },
        {
          trigger: 'Sobre ronco, palpitações, sudorese ou cefaleia em crises',
          speech: 'Não ronco. Não tenho crise de suor ou palpitação. Dor de cabeça às vezes, na nuca.'
        },
        { trigger: 'Sobre sal, álcool e hábitos', speech: 'Cuido do sal, como pouco. Bebo um vinho no fim de semana. Não fumo.' },
        { trigger: 'Sobre a família', speech: 'Meu pai teve pressão alta e morreu de derrame com 58 anos.' },
        { trigger: 'Pergunta ativa', speech: 'Por que a minha pressão não controla? Tem cura? Vou ter que tomar esse monte de remédio a vida toda?' }
      ],
      hiddenInfo: 'Idas ao PS por hipocalemia com reposição de potássio — só revela se perguntado sobre internações/atendimentos | Noctúria e sede (poliúria por hipocalemia) — só revela se perguntado sobre urina | Pai morreu de AVC aos 58 anos — só revela se perguntado sobre família | HAS já de difícil controle desde o diagnóstico — só revela se perguntado sobre o início',
      actorBehavior: 'Paciente racional e detalhista, traz as receitas e anotações de PA. Frustrado com o descontrole e cético após "trocar de remédio tantas vezes". Fica animado quando ouve que pode haver uma causa curável, e faz perguntas sobre riscos da cirurgia e do cateterismo.'
    },
    instC: {
      diagnosis: 'Hiperaldosteronismo primário com hipocalemia espontânea e alcalose metabólica (aldosterona 28 ng/dL, renina suprimida, relação aldosterona/renina 93), por adenoma produtor de aldosterona à esquerda (lateralização confirmada no cateterismo de veias adrenais), causando hipertensão resistente com lesão de órgão-alvo (albuminúria, hipertrofia ventricular, retinopatia hipertensiva).',
      differentials: [
        'Hipertensão essencial resistente/pseudorresistência — excluída pela adesão confirmada, MAPA e técnica de medida',
        'Hiperplasia adrenal bilateral (idiopática) — mais comum que o adenoma; diferenciada pelo cateterismo (lateralização exclui)',
        'Estenose de artéria renal (hiperaldosteronismo secundário) — renina estaria alta',
        'Síndrome de Cushing — hipocalemia e HAS; supressão com dexametasona normal',
        'Excesso aparente de mineralocorticoide / síndrome de Liddle — renina e aldosterona baixas; aqui a aldosterona é alta',
        'Hipocalemia por diurético tiazídico — contribui, mas não explica a renina suprimida com aldosterona alta'
      ],
      context: 'Homem de 52 anos com hipertensão de difícil controle desde o início, hipertensão resistente confirmada por MAPA com 4 classes de anti-hipertensivos (incluindo diurético), hipocalemia espontânea com alcalose e lesão de órgão-alvo. O hiperaldosteronismo primário é a causa endócrina mais comum de hipertensão (5–10% dos hipertensos; até 20% dos resistentes) e causa mais dano cardiovascular e renal do que a hipertensão essencial com os mesmos níveis pressóricos.',
      justify: 'Relação aldosterona/renina elevada com aldosterona ≥ 15–20 ng/dL e renina suprimida, na presença de hipocalemia espontânea: quadro florido em que o teste confirmatório pode ser dispensado (Endocrine Society 2025). TC mostra adenoma esquerdo, mas, por idade > 35 anos, o cateterismo de veias adrenais é necessário antes da cirurgia para confirmar a lateralização (nódulos incidentais não funcionantes são comuns). Lateralização à esquerda → adrenalectomia unilateral.',
      expectedAnamnesis: 'Tempo de HAS e idade de início | Medicamentos, doses e adesão | Uso de AINE, descongestionantes, corticoides, alcaçuz, anticoncepcional | Fraqueza, câimbras, poliúria (hipocalemia) | Ronco e sonolência (apneia do sono) | Crises de cefaleia, sudorese e palpitações (feocromocitoma) | Sintomas de Cushing | Consumo de sal e álcool | História familiar de HAS precoce e AVC',
      expectedPhysical: 'PA com técnica correta nos dois braços (e membros inferiores) | IMC | Estigmas de Cushing | Sopro abdominal | Ausculta cardíaca (B4, HVE) | Fundoscopia',
      expectedExams: [
        { exam: 'Potássio, sódio, bicarbonato', justify: 'Hipocalemia e alcalose', expected: 'K 2,9; HCO3 31' },
        {
          exam: 'Aldosterona e renina com relação aldosterona/renina (corrigir potássio antes)',
          justify: 'Rastreio de hiperaldosteronismo primário',
          expected: 'RAR 93 com renina suprimida'
        },
        {
          exam: 'Teste confirmatório (infusão salina ou captopril)',
          justify: 'Dispensável em quadro florido com hipocalemia e renina suprimida',
          expected: 'Dispensado'
        },
        { exam: 'TC de adrenais', justify: 'Excluir carcinoma e mapear anatomia', expected: 'Adenoma esquerdo 1,8 cm' },
        { exam: 'Cateterismo de veias adrenais', justify: 'Confirmar lateralização antes da cirurgia (> 35 anos)', expected: 'Lateralização esquerda' },
        { exam: 'MAPA, ECG/ecocardiograma, RAC, fundoscopia', justify: 'Confirmar resistência e avaliar órgãos-alvo', expected: 'HAS resistente com LOA' },
        { exam: 'Supressão com 1 mg de dexametasona', justify: 'Cossecreção de cortisol em nódulo adrenal', expected: 'Normal' }
      ],
      expectedConduct: 'Corrigir o potássio (KCl VO) | Iniciar antagonista mineralocorticoide já: espironolactona 25–50 mg/dia (titular até 100–200 mg; eplerenona se ginecomastia) — controla a PA e a hipocalemia enquanto aguarda | Suspender ou reduzir o tiazídico conforme o potássio | Adrenalectomia laparoscópica esquerda após confirmação da lateralização pelo cateterismo de veias adrenais | Se não lateralizar (doença bilateral) ou se o paciente não quiser cirurgia: tratamento clínico contínuo com antagonista mineralocorticoide, titulado até renina não suprimida | Pós-operatório: suspender espironolactona e suplemento de potássio; vigiar hipercalemia (hipoaldosteronismo transitório); reavaliar PA e anti-hipertensivos — cura completa da HAS em ~35–50%, melhora na maioria | Dieta com pouco sal | Rastreio de familiares de 1º grau se início precoce',
      expectedCommunication: 'Explicar que há uma causa identificável e potencialmente curável | Explicar por que o cateterismo é necessário antes da cirurgia | Alinhar expectativas (melhora frequente, cura não garantida) | Esclarecer riscos e benefícios da cirurgia',
      criticalErrors: [
        'Não investigar causa secundária em hipertensão resistente com hipocalemia',
        'Não solicitar aldosterona e renina (ou interpretá-las sem considerar potássio e medicamentos)',
        'Indicar adrenalectomia apenas com base na TC, sem cateterismo de veias adrenais, em paciente > 35 anos',
        'Não iniciar antagonista mineralocorticoide enquanto aguarda a definição',
        'Não corrigir a hipocalemia'
      ]
    },
    instD: {
      title: 'Hiperaldosteronismo Primário — Material de Estudo',
      sections: [
        {
          h: 'Epidemiologia e Rastreio',
          items: [
            {
              item: 'Causa endócrina mais comum de HAS secundária (5–10% dos hipertensos; até 20% dos resistentes).',
              score: 1,
              ref: 'Endocrine Society Guideline — Primary Aldosteronism, 2025'
            },
            {
              item: 'A diretriz de 2025 recomenda rastrear todos os hipertensos com relação aldosterona/renina, prioritariamente resistentes, com hipocalemia, AOS, FA ou incidentaloma.',
              score: 2,
              ref: 'Adler GK et al., J Clin Endocrinol Metab 2025'
            }
          ]
        },
        {
          h: 'Diagnóstico',
          items: [
            {
              item: 'RAR elevada com renina suprimida; corrigir potássio antes da coleta; medicamentos podem ser mantidos inicialmente, interpretando seus efeitos.',
              score: 1,
              ref: 'Endocrine Society, 2025'
            },
            { item: 'Teste confirmatório dispensável em quadro florido (hipocalemia, renina suprimida e aldosterona elevada).', score: 1, ref: 'Endocrine Society, 2025' },
            {
              item: 'TC de adrenais para todos; cateterismo de veias adrenais para definir lateralização antes de cirurgia (exceções: jovens com quadro florido e adenoma unilateral típico).',
              score: 2,
              ref: 'Endocrine Society, 2025'
            }
          ]
        },
        {
          h: 'Tratamento',
          items: [
            {
              item: 'Doença unilateral: adrenalectomia laparoscópica; doença bilateral: antagonista mineralocorticoide (espironolactona ou eplerenona).',
              score: 2,
              ref: 'Endocrine Society, 2025'
            },
            { item: 'No pós-operatório, risco de hipercalemia por supressão da adrenal contralateral.', score: 1, ref: 'Funder JW et al., JCEM 2016' }
          ]
        }
      ]
    }
  },

  // PSIQUIATRIA — Esquizofrenia
  {
    id: 25,
    title: 'Homem jovem com comportamento estranho e isolamento',
    sub: 'PS — Pronto-Socorro / CAPS',
    tema: 'Psiquiatria',
    topic: 'Esquizofrenia — Primeiro Episódio Psicótico',
    level: 'moderado',
    cardAccent: '#AB47BC',
    instA: {
      scenario: 'Urgência psiquiátrica em pronto-socorro de hospital geral com apoio do CAPS. Há sala de observação, laboratório e tomografia.',
      patient: 'R.M.S., 23 anos, sexo masculino, solteiro, estudante universitário (trancou matrícula há 8 meses).',
      complaint: 'Familiar relata que o paciente está \'falando com vozes\' há cerca de 6 meses, saiu da faculdade, trancou-se no quarto, parou de tomar banho e acredita que vizinhos estão conspirando contra ele.',
      tasks: [
        'Realize a anamnese com o paciente e com a mãe.',
        'Avalie os sintomas psicóticos positivos e negativos e o exame do estado mental.',
        'Avalie o risco de suicídio e de heteroagressividade.',
        'Formule as hipóteses diagnósticas e os diferenciais, solicitando exames para excluir causas orgânicas.',
        'Proponha a conduta imediata e o plano terapêutico, orientando a família.'
      ]
    },
    instB: {
      vitals: {
        PA: '118/76 mmHg',
        FC: '88 bpm',
        FR: '16 irpm',
        Tax: '36,6 °C',
        SpO2: '98% em ar ambiente',
        Peso: '62 kg (há 6 meses: 68 kg)',
        Altura: '1,75 m',
        IMC: '20,2 kg/m²'
      },
      physicalGeneral: 'Higiene precária, odor corporal presente. Roupa inadequada para o clima (casaco em dia quente). Contato inicial difícil, desconfiança marcante. Sem sinais de trauma ou lesões cutâneas.',
      physicalSeg: 'NEUROLÓGICO: Pupilas isocóricas e fotorreagentes. Sem déficits focais. Sem rigidez de nuca. Marcha sem alterações | EXAME DO ESTADO MENTAL: aparência descuidada, hipomímica, postura tensa; psicomotricidade lentificada com inquietação; humor disfórico e afeto embotado; fala de tom baixo, latência aumentada, conteúdo desorganizado; pensamento com desorganização formal, delírio persecutório e ideias de referência; percepção com alucinações auditivas imperativas; orientado em tempo e espaço; memória preservada; insight ausente; juízo crítico prejudicado; risco: nega ideação suicida ativa e plano heteroagressivo',
      labs: [
        { test: 'Hemograma', val: 'Normal', ref: '—', alt: false },
        { test: 'Glicemia de jejum', val: '89 mg/dL', ref: '70–99 mg/dL', alt: false },
        { test: 'TSH', val: '2,1 μUI/mL', ref: '0,4–4,0 μUI/mL', alt: false },
        { test: 'Creatinina / Sódio', val: '0,9 mg/dL / 139 mEq/L', ref: '0,7–1,2 / 135–145', alt: false },
        { test: 'TGO / TGP', val: '24 / 30 U/L', ref: '< 40 U/L', alt: false },
        { test: 'VDRL / Anti-HIV', val: 'Não reagentes', ref: 'Não reagentes', alt: false },
        { test: 'Perfil lipídico', val: 'LDL 98, TG 110 mg/dL', ref: 'LDL < 130; TG < 150', alt: false },
        { test: 'Toxicológico urinário', val: 'Canabinoides positivo; cocaína e anfetaminas negativos', ref: 'Negativo', alt: true }
      ],
      image: 'TC de crânio sem contraste (se solicitada): sem lesões, sem sinais de sangramento ou efeito de massa; ventrículos laterais discretamente aumentados (achado inespecífico).',
      note: 'O paciente responde de forma lacônica e desconfiada; a mãe complementa a história. Os exames só são entregues se solicitados. A informação sobre a faca só é revelada se o candidato perguntar diretamente sobre armas ou sobre como ele pretende se defender.',
      patientProfile: 'R.M.S., 23 anos, solteiro, estudante de Engenharia (trancou a matrícula há 8 meses), mora com a mãe (professora) e a irmã. Bom aluno até 1 ano atrás. Fuma maconha desde os 16 anos, quase diariamente no último ano. Tio paterno com esquizofrenia, internado várias vezes. Há 6 meses passou a ouvir vozes, isolou-se no quarto, cobriu a janela com papel-alumínio e parou de comer a comida da mãe ("pode ter alguma coisa"). Nunca teve tratamento psiquiátrico.',
      script: [
        { trigger: 'Abertura espontânea', speech: 'Eu não precisava vir aqui. Minha mãe me trouxe à força. Não tem nada de errado comigo.' },
        {
          trigger: 'Quando perguntado sobre as vozes',
          speech: 'Eu ouço pessoas falando sobre mim. Elas ficam me comentando o que eu faço. Às vezes duas vozes falam entre si sobre mim.'
        },
        {
          trigger: 'Quando perguntado sobre os vizinhos',
          speech: 'Eles colocaram câmeras no meu quarto. Eu vi os fios. Eles estão me monitorando para me prejudicar.'
        },
        {
          trigger: 'Quando perguntado sobre a faculdade',
          speech: 'Eu tranquei porque não consigo me concentrar. Fica difícil. E os colegas também fazem parte disso.'
        },
        { trigger: 'Quando perguntado sobre banho e autocuidado', speech: 'Não tenho vontade de nada. Fico no quarto.' },
        { trigger: 'Quando perguntado sobre uso de drogas', speech: 'Às vezes fumo maconha. Mas isso não tem nada a ver.' },
        { trigger: 'Quando perguntado sobre suicídio', speech: 'Não quero me matar. Só quero que me deixem em paz.' },
        { trigger: 'Quando perguntado sobre agressividade', speech: 'Não vou machucar ninguém. Sou eu que estou sendo prejudicado.' },
        {
          trigger: 'Mãe — evolução e comportamento',
          speech: 'Doutor(a), faz uns seis meses que ele mudou. Cobriu a janela com papel-alumínio, não sai do quarto, não come o que eu faço. Fala sozinho de madrugada.'
        },
        { trigger: 'Sobre armas ou como pretende se defender', speech: 'Eu tenho uma faca debaixo do colchão. Se eles entrarem lá em casa, eu me defendo.' },
        { trigger: 'Mãe — família', speech: 'O irmão do pai dele tem esquizofrenia. Já foi internado várias vezes.' }
      ],
      hiddenInfo: 'Guarda uma faca debaixo do colchão "para se defender" (risco de heteroagressividade) — só revela se perguntado sobre armas ou como pretende se defender | Recusa a comida da mãe por medo de envenenamento, perdeu 6 kg — só revela se perguntado sobre alimentação | Tio paterno com esquizofrenia — a mãe só revela se perguntada sobre família | Uso diário de maconha no último ano — o paciente minimiza; a quantidade só aparece se perguntado diretamente sobre frequência',
      actorBehavior: 'Paciente desconfiado, olha para os cantos da sala como se estivesse sendo observado, responde com frases curtas e latência aumentada. Às vezes interrompe para "escutar" algo. Fica irritado se o candidato confrontar os delírios ("isso não existe"), mas colabora mais se o candidato validar o sofrimento sem concordar com as crenças. A mãe está exausta, chorosa e com medo; quer que o filho seja internado.'
    },
    instC: {
      diagnosis: 'Esquizofrenia — primeiro episódio psicótico (CID-11 6A20; CID-10 F20.0), com sintomas positivos (delírio persecutório, alucinações auditivas comentadoras e dialogadas), negativos (avolição, embotamento afetivo, isolamento) e declínio funcional há 6 meses, em usuário de cannabis, com risco de heteroagressividade defensiva a ser manejado.',
      differentials: [
        'Transtorno psicótico induzido por cannabis — sintomas persistem e progridem por meses, com sintomas negativos e declínio funcional, o que não se explica apenas pela substância; a cannabis é fator de risco e agravante',
        'Transtorno esquizofreniforme — mesma clínica com duração de 1 a 6 meses; aqui já se completam 6 meses com pródromo',
        'Transtorno bipolar ou depressão com sintomas psicóticos — sintomas psicóticos ocorrem fora de episódios de humor',
        'Transtorno delirante — sai pela presença de alucinações proeminentes, desorganização e sintomas negativos',
        'Causas orgânicas (encefalite autoimune, epilepsia de lobo temporal, tumor, HIV, sífilis, tireoidopatia) — exame neurológico, laboratório e TC sem alterações'
      ],
      context: 'Jovem de 23 anos com quadro insidioso de 6 meses, após pródromo de queda do rendimento acadêmico, caracterizado por delírio persecutório, alucinações auditivas comentadoras, comportamento bizarro, isolamento, descuido com a higiene e perda de peso por recusa alimentar. Uso diário de cannabis e história familiar de esquizofrenia aumentam o risco. A guarda de uma faca para "defesa" exige avaliação cuidadosa do risco de violência.',
      justify: 'Critérios DSM-5-TR/CID-11: ≥ 2 sintomas (delírios, alucinações, discurso desorganizado, sintomas negativos) por ≥ 1 mês, com sinais contínuos por ≥ 6 meses e declínio funcional, após exclusão de transtornos do humor, substâncias como causa exclusiva e condições médicas. Exames laboratoriais e de imagem normais afastam causas orgânicas.',
      expectedAnamnesis: 'Início, evolução e pródromo | Alucinações (tipo, conteúdo, se imperativas) | Delírios (conteúdo, convicção, ações tomadas em função deles) | Sintomas negativos e declínio funcional | Sintomas de humor (mania, depressão) | Uso de substâncias (tipo, frequência, relação temporal) | Risco de suicídio | Risco de heteroagressividade, incluindo acesso a armas | Alimentação e autocuidado | História familiar psiquiátrica | Comorbidades clínicas e medicamentos | Rede de apoio',
      expectedPhysical: 'Sinais vitais | Exame neurológico sumário | Exame do estado mental completo (aparência, psicomotricidade, humor/afeto, pensamento, sensopercepção, orientação, crítica) | Sinais de intoxicação ou abstinência',
      expectedExams: [
        {
          exam: 'Hemograma, glicemia, eletrólitos, função renal e hepática, TSH',
          justify: 'Excluir causas orgânicas e linha de base para antipsicótico',
          expected: 'Normais'
        },
        { exam: 'VDRL e anti-HIV', justify: 'Causas infecciosas de psicose', expected: 'Não reagentes' },
        { exam: 'Toxicológico urinário', justify: 'Uso de substâncias', expected: 'Canabinoides positivo' },
        { exam: 'Neuroimagem (TC/RM)', justify: 'Primeiro episódio — excluir lesão estrutural', expected: 'Sem alterações agudas' },
        { exam: 'Perfil lipídico, peso, circunferência abdominal, ECG', justify: 'Linha de base metabólica e cardíaca para antipsicótico', expected: 'Normais' }
      ],
      expectedConduct: 'Manejo do risco: orientar a família a retirar a faca e outros objetos perigosos; avaliar necessidade de internação (voluntária ou involuntária, conforme Lei 10.216/2001) se o risco não puder ser contido — se houver adesão e suporte familiar, tratamento intensivo em CAPS (CAPS III/acolhimento noturno) | Antipsicótico em monoterapia na menor dose eficaz: risperidona 1–2 mg/dia titulando até 2–4 mg/dia (alternativas: aripiprazol, olanzapina, haloperidol 2–5 mg/dia); avaliar resposta em 2–4 semanas | Se agitação: abordagem verbal; benzodiazepínico ou antipsicótico IM apenas se necessário | Monitorização de efeitos extrapiramidais, prolactina e metabólicos (peso, glicemia, lipídios) | Abordar o uso de cannabis (aumenta recaídas) | Psicoeducação e intervenção familiar, terapia cognitivo-comportamental para psicose, reabilitação psicossocial e apoio ao retorno aos estudos | Considerar antipsicótico de depósito se baixa adesão | Manter tratamento por ao menos 1–2 anos após remissão do primeiro episódio | Seguimento no CAPS',
      expectedCommunication: 'Abordar o paciente com respeito, sem confrontar os delírios e validando o sofrimento | Explicar o diagnóstico à família de forma clara, sem estigma, com mensagem de que há tratamento e possibilidade de recuperação | Acolher a mãe e orientar sobre sinais de crise e segurança | Envolver o paciente nas decisões tanto quanto possível',
      criticalErrors: [
        'Não avaliar risco de suicídio e de heteroagressividade, incluindo acesso a armas',
        'Atribuir todo o quadro à cannabis sem considerar psicose primária',
        'Prescrever benzodiazepínico como tratamento isolado da psicose',
        'Não excluir causas orgânicas em primeiro episódio psicótico',
        'Não envolver a família nem referenciar ao CAPS/psiquiatria'
      ]
    },
    instD: {
      title: 'Esquizofrenia — Primeiro Episódio — Material de Estudo',
      sections: [
        {
          h: 'Definição e Epidemiologia',
          items: [
            {
              item: 'Prevalência ao longo da vida de ~0,7%; pico de início entre o fim da adolescência e os 30 anos, mais precoce em homens.',
              score: 1,
              ref: 'McCutcheon RA et al., Lancet 2020'
            },
            {
              item: 'Fatores de risco: história familiar, uso de cannabis (sobretudo de alta potência e precoce), complicações perinatais, urbanicidade.',
              score: 1,
              ref: 'Di Forti M et al., Lancet Psychiatry 2019'
            }
          ]
        },
        {
          h: 'Diagnóstico',
          items: [
            {
              item: '≥ 2 sintomas (delírios, alucinações, discurso desorganizado, comportamento desorganizado, sintomas negativos) por ≥ 1 mês, com duração total ≥ 6 meses e prejuízo funcional.',
              score: 2,
              ref: 'DSM-5-TR, 2022'
            },
            {
              item: 'Primeiro episódio: excluir causas orgânicas (laboratório, sorologias, toxicológico, neuroimagem conforme o caso).',
              score: 1,
              ref: 'NICE CG178 — Psychosis and schizophrenia in adults'
            }
          ]
        },
        {
          h: 'Tratamento',
          items: [
            {
              item: 'Antipsicótico em monoterapia na menor dose eficaz; primeiro episódio responde a doses mais baixas.',
              score: 2,
              ref: 'APA Practice Guideline for Schizophrenia, 2020'
            },
            { item: 'Clozapina para esquizofrenia resistente (falha de 2 antipsicóticos em dose e tempo adequados).', score: 1, ref: 'APA Practice Guideline, 2020' },
            { item: 'Intervenções psicossociais (psicoeducação, intervenção familiar, TCC, emprego apoiado) reduzem recaídas.', score: 1, ref: 'NICE CG178' },
            { item: 'Monitorar peso, glicemia, lipídios e efeitos extrapiramidais.', score: 1, ref: 'APA Practice Guideline, 2020' }
          ]
        },
        {
          h: 'Rede e Aspectos Legais',
          items: [
            {
              item: 'CAPS é o serviço de referência; internação só quando recursos extra-hospitalares forem insuficientes (Lei 10.216/2001), podendo ser voluntária, involuntária ou compulsória.',
              score: 1,
              ref: 'Lei nº 10.216/2001'
            }
          ]
        }
      ]
    }
  },

  // PSIQUIATRIA — Transtorno bipolar tipo I, episódio atual maníaco grave sem sintomas psicóticos
  {
    id: 26,
    title: 'Mulher com \'euforia intensa\' e sem necessidade de dormir',
    sub: 'PS — Pronto-Socorro',
    tema: 'Psiquiatria',
    topic: 'Transtorno Bipolar Tipo I — Episódio Maníaco',
    level: 'moderado',
    cardAccent: '#AB47BC',
    instA: {
      scenario: 'Pronto-socorro de hospital geral com sala de observação, laboratório e psiquiatra de plantão.',
      patient: 'C.F.O., 34 anos, sexo feminino, casada, professora de ensino fundamental.',
      complaint: 'Marido traz a esposa ao PS relatando que ela está \'completamente diferente há 12 dias\': dormindo apenas 2–3 horas por noite e se sentindo descansada, gastos excessivos no cartão, falando muito e rápido, iniciou projeto de \'abrir 3 empresas ao mesmo tempo\' e teve comportamento sexual inusitado para o casal.',
      tasks: [
        'Realize a anamnese com a paciente e com o marido.',
        'Avalie o estado mental atual.',
        'Investigue episódios anteriores, história familiar, adesão ao tratamento e uso de substâncias.',
        'Avalie o risco (suicídio, comportamentos de risco) e formule o diagnóstico.',
        'Proponha a conduta para estabilização do episódio e oriente a paciente e o marido.'
      ]
    },
    instB: {
      vitals: { PA: '132/84 mmHg', FC: '102 bpm', FR: '18 irpm', Tax: '36,8 °C', SpO2: '99% em ar ambiente', Peso: '68 kg', Altura: '1,64 m', IMC: '25,3 kg/m²' },
      physicalGeneral: 'Apresentação exuberante, maquiagem intensa, roupas chamativas. Agitação psicomotora moderada, dificuldade em permanecer sentada. Sem sinais de trauma ou lesões. Pupilas isocóricas e fotorreagentes. Sem déficits neurológicos focais. Mucosas úmidas, sem tremores.',
      physicalSeg: 'EXAME DO ESTADO MENTAL: aparência cuidada em excesso, extravagante; psicomotricidade agitada, gesticulação exagerada; humor eufórico/expansivo, labilidade afetiva; fala taquifásica, logorreia, pressão de fala; pensamento com fuga de ideias, grandiosidade, sem delírios estruturados; percepção sem alucinações; orientada; memória preservada; insight ausente; juízo crítico gravemente prejudicado; risco: nega ideação suicida, comportamentos de risco presentes',
      labs: [
        { test: 'Hemograma', val: 'Normal', ref: '—', alt: false },
        { test: 'TSH / T4 livre', val: '1,8 μUI/mL / 1,2 ng/dL', ref: '0,4–4,0 / 0,8–1,8', alt: false },
        { test: 'Glicemia', val: '94 mg/dL', ref: '70–99 mg/dL', alt: false },
        { test: 'Sódio / Cálcio', val: '141 mEq/L / 9,4 mg/dL', ref: '135–145 / 8,5–10,5', alt: false },
        { test: 'Creatinina (TFG)', val: '0,8 mg/dL (> 90 mL/min)', ref: '0,6–1,1 mg/dL', alt: false },
        { test: 'TGO / TGP', val: '22 / 19 U/L', ref: '< 40 U/L', alt: false },
        { test: 'β-HCG', val: 'Negativo', ref: 'Negativo', alt: false },
        { test: 'Toxicológico urinário', val: 'Negativo', ref: 'Negativo', alt: false },
        { test: 'Litemia', val: '0,2 mEq/L', ref: '0,6–1,2 mEq/L (manutenção)', alt: true }
      ],
      note: 'A paciente fala sem parar e interrompe o candidato. O marido confirma os dados. ECG (se solicitado): taquicardia sinusal, QTc normal. Se o candidato propor alta sem tratamento, a paciente aceita imediatamente e o marido protesta.',
      patientProfile: 'C.F.O., 34 anos, professora de ensino fundamental, casada há 8 anos, sem filhos. Episódio depressivo grave aos 28 anos e episódio maníaco há 3 anos com internação breve; desde então em uso de lítio, que suspendeu há 3 meses porque "estava bem" e porque quer engravidar. Mãe com transtorno bipolar. Nos últimos 12 dias, gastou cerca de R$ 30 mil no cartão, pediu demissão por mensagem, dorme 2–3 h por noite e iniciou planos de abrir três empresas.',
      script: [
        {
          trigger: 'Abertura espontânea',
          speech: 'Eu não sei por que meu marido me trouxe aqui. Estou me sentindo a melhor da minha vida. Nunca fui tão criativa e produtiva!'
        },
        {
          trigger: 'Quando perguntado sobre o sono',
          speech: 'Durmo umas 2 ou 3 horas e fico ótima! Não preciso mais de 8 horas como antes, isso é um desperdício de tempo.'
        },
        { trigger: 'Quando perguntado sobre os gastos', speech: 'Foram investimentos! Preciso de roupas bonitas para quando abrir minhas empresas.' },
        {
          trigger: 'Quando perguntado sobre episódios anteriores',
          speech: 'Já tive uma fase parecida há 3 anos, mas depois fiquei muito triste por meses e fiquei na cama. Tomei um remedinho, o lítio, mas parei de tomar porque me sentia bem.'
        },
        { trigger: 'Quando perguntado sobre o lítio', speech: 'Parei há uns 3 meses. Não precisava mais, estava bem.' },
        { trigger: 'Quando perguntado sobre suicídio', speech: 'Suicídio? Pelo contrário! Estou cheia de planos!' },
        {
          trigger: 'Marido — gastos e trabalho',
          speech: 'Ela gastou uns 30 mil no cartão em doze dias. Mandou mensagem pra diretora da escola pedindo demissão. Não é ela, doutor(a).'
        },
        { trigger: 'Sobre o motivo de parar o lítio', speech: 'Parei porque eu quero engravidar, li que lítio faz mal pro bebê. E eu estava ótima!' },
        { trigger: 'Sobre álcool e drogas', speech: 'Bebi umas taças de vinho nas festas da semana, mas nada demais. Droga nunca.' },
        { trigger: 'Marido — família', speech: 'A mãe dela tem transtorno bipolar, já foi internada algumas vezes.' }
      ],
      hiddenInfo: 'Suspendeu o lítio por desejo de engravidar — só revela se perguntada sobre o motivo de parar a medicação | Gastos de R$ 30 mil e pedido de demissão — o marido só detalha se perguntado sobre consequências | Mãe com transtorno bipolar — só revelado se perguntado sobre família | Uso de álcool em festas na última semana — só revela se perguntada',
      actorBehavior: 'Paciente eufórica, fala alto e rápido, ri muito, levanta-se várias vezes, faz comentários sobre a roupa do candidato e muda de assunto constantemente (fuga de ideias). Fica irritada se contrariada de forma rígida, mas se acalma com abordagem calma, firme e sem confronto. O marido está angustiado e pede ajuda.'
    },
    instC: {
      diagnosis: 'Transtorno bipolar tipo I, episódio atual maníaco grave sem sintomas psicóticos (CID-10 F31.1; CID-11 6A60.1), precipitado pela suspensão do lítio (litemia 0,2 mEq/L), em mulher em idade fértil com desejo de gestação.',
      differentials: [
        'Hipomania (TB tipo II) — sai pela duração ≥ 7 dias, prejuízo funcional grave e necessidade de intervenção',
        'Mania induzida por substâncias (estimulantes, corticoides, antidepressivos) — toxicológico negativo, sem uso de medicamentos',
        'Hipertireoidismo — TSH e T4 livre normais',
        'Transtorno esquizoafetivo — ausência de sintomas psicóticos fora dos episódios de humor',
        'Transtorno de personalidade borderline — instabilidade crônica e reativa, sem episódios bem delimitados'
      ],
      context: 'Mulher de 34 anos com episódio maníaco clássico de 12 dias: euforia, grandiosidade, diminuição do sono, taquifasia, fuga de ideias, comportamentos de risco e insight ausente. Histórico de uso de lítio com nível subterapêutico e exames orgânicos normais, excluindo causas médicas.',
      justify: 'Episódio maníaco (DSM-5-TR): humor elevado/expansivo com aumento de energia por ≥ 7 dias, com ≥ 3 sintomas (grandiosidade, redução da necessidade de sono, pressão de fala, fuga de ideias, distraibilidade, aumento de atividade dirigida, envolvimento em atividades de risco), com prejuízo funcional grave. História de episódios depressivo e maníaco prévios confirma TB tipo I. Exames afastam causas orgânicas e substâncias.',
      expectedAnamnesis: 'Início e duração do episódio | Sono, energia, fala, pensamento | Grandiosidade e sintomas psicóticos | Comportamentos de risco: gastos, sexuais, direção perigosa, trabalho | Episódios prévios maníacos e depressivos | Tratamento prévio, adesão e motivo da suspensão | Desejo de gestação e contracepção | Uso de álcool, drogas, antidepressivos e corticoides | História familiar | Risco de suicídio (inclusive em estados mistos)',
      expectedPhysical: 'Sinais vitais | Exame do estado mental (aparência, psicomotricidade, humor, afeto, fala, pensamento, sensopercepção, crítica) | Sinais de intoxicação | Tremor e sinais de toxicidade por lítio (se em uso)',
      expectedExams: [
        { exam: 'β-HCG', justify: 'Mulher em idade fértil — escolha do estabilizador', expected: 'Negativo' },
        { exam: 'TSH, T4 livre, glicemia, eletrólitos, cálcio', justify: 'Causas orgânicas e linha de base', expected: 'Normais' },
        { exam: 'Creatinina/TFG, ECG', justify: 'Antes de reiniciar o lítio', expected: 'Normais' },
        { exam: 'Litemia', justify: 'Confirmar adesão', expected: 'Subterapêutica' },
        { exam: 'Toxicológico urinário', justify: 'Excluir mania induzida por substância', expected: 'Negativo' }
      ],
      expectedConduct: 'Avaliar internação: risco financeiro, ocupacional e sexual, ausência de crítica — internação psiquiátrica (voluntária; involuntária se necessário, conforme Lei 10.216/2001) ou observação até estabilização | Tratamento do episódio: reiniciar lítio (300 mg 2–3x/dia, titulando para litemia 0,8–1,2 mEq/L, dosada 5–7 dias após o início) associado ou não a antipsicótico de segunda geração (quetiapina, olanzapina, risperidona ou aripiprazol) | Evitar valproato em mulher com desejo de gestação (alto risco teratogênico e de neurodesenvolvimento) | Suspender e não iniciar antidepressivos | Se agitação: abordagem verbal; antipsicótico ou benzodiazepínico se necessário | Planejamento da gestação com psiquiatra: discutir riscos e benefícios do lítio (risco cardíaco absoluto baixo; recaída sem tratamento é alta), contracepção eficaz até estabilização | Medidas para proteger finanças (cartões) com consentimento | Psicoeducação, higiene do sono e rotina | Seguimento com psiquiatra/CAPS',
      expectedCommunication: 'Abordagem calma, firme e sem confronto | Validar o desejo de gestação e explicar que é possível planejá-la com segurança | Explicar ao marido a doença e o risco de recaídas com a suspensão do tratamento | Envolver a paciente nas decisões sempre que possível',
      criticalErrors: [
        'Prescrever antidepressivo em episódio maníaco',
        'Não investigar episódios prévios e adesão ao tratamento',
        'Não solicitar β-HCG antes de escolher o estabilizador de humor',
        'Prescrever valproato a mulher em idade fértil com desejo de gestação sem discutir alternativas',
        'Liberar a paciente sem tratamento e sem avaliação de risco'
      ]
    },
    instD: {
      title: 'Transtorno Bipolar — Episódio Maníaco — Material de Estudo',
      sections: [
        {
          h: 'Definição',
          items: [
            {
              item: 'TB I: ≥ 1 episódio maníaco (≥ 7 dias ou qualquer duração se internação); TB II: hipomania (≥ 4 dias) + depressão maior.',
              score: 2,
              ref: 'DSM-5-TR, 2022'
            },
            { item: 'Suspensão abrupta do lítio aumenta o risco de recaída maníaca e de suicídio.', score: 1, ref: 'Baldessarini RJ et al., Am J Psychiatry 1999' }
          ]
        },
        {
          h: 'Tratamento da Mania Aguda',
          items: [
            {
              item: '1ª linha: lítio, quetiapina, aripiprazol, risperidona, asenapina, cariprazina, valproato, ou combinação lítio/valproato + antipsicótico atípico.',
              score: 2,
              ref: 'CANMAT/ISBD Guidelines, 2018'
            },
            { item: 'Antidepressivos devem ser suspensos na mania.', score: 1, ref: 'CANMAT/ISBD, 2018' },
            {
              item: 'Valproato deve ser evitado em mulheres em idade fértil (malformações e prejuízo do neurodesenvolvimento).',
              score: 1,
              ref: 'EMA/ANVISA — alertas sobre valproato, 2018–2024'
            }
          ]
        },
        {
          h: 'Lítio',
          items: [
            {
              item: 'Litemia 5–7 dias após início/ajuste (12 h após a última dose); alvo 0,8–1,2 mEq/L na fase aguda.',
              score: 1,
              ref: 'NICE CG185 — Bipolar disorder, 2023'
            },
            { item: 'Monitorar creatinina, TSH e cálcio a cada 6 meses; toxicidade: tremor grosseiro, ataxia, confusão, vômitos.', score: 1, ref: 'NICE CG185' },
            {
              item: 'Na gestação, o risco absoluto de anomalia de Ebstein é baixo; decisão compartilhada sobre manutenção.',
              score: 1,
              ref: 'Munk-Olsen T et al., Lancet Psychiatry 2018'
            }
          ]
        }
      ]
    }
  },

  // PSIQUIATRIA — Transtorno depressivo maior, episódio único grave sem sintomas psicóticos
  {
    id: 27,
    title: 'Mulher de meia-idade com \'tristeza que não passa\'',
    sub: 'UBS — Atenção Primária',
    tema: 'Psiquiatria',
    topic: 'Transtorno Depressivo Maior — Episódio Grave',
    level: 'moderado',
    cardAccent: '#AB47BC',
    instA: {
      scenario: 'Consulta agendada em Unidade Básica de Saúde, com apoio de equipe multiprofissional (eMulti) e referência ao CAPS.',
      patient: 'M.A.R., 47 anos, sexo feminino, divorciada, auxiliar administrativa, 2 filhos.',
      complaint: 'Paciente relata \'tristeza que não passa\' há aproximadamente 5 meses, com choro frequente, perda de interesse por atividades, cansaço intenso, insônia e pensamentos de que seria \'melhor não estar aqui\'.',
      tasks: [
        'Realize a anamnese dirigida ao quadro depressivo.',
        'Avalie e estratifique o risco de suicídio.',
        'Solicite exames para excluir causas orgânicas.',
        'Formule o diagnóstico e os diagnósticos diferenciais.',
        'Proponha o plano terapêutico e o plano de segurança.'
      ]
    },
    instB: {
      vitals: { PA: '124/80 mmHg', FC: '76 bpm', FR: '15 irpm', Tax: '36,4 °C', Peso: '74 kg (ganho de 4 kg em 5 meses)', Altura: '1,61 m', IMC: '28,6 kg/m²' },
      physicalGeneral: 'Aparência descuidada em relação ao habitual. Fácies triste, contato visual reduzido, chora durante a consulta. Pele e mucosas sem alterações. Sem lesões de automutilação identificadas. Tireóide não palpável, sem nódulos. Exame físico geral sem outras alterações.',
      physicalSeg: 'EXAME DO ESTADO MENTAL: aparência descuidada; psicomotricidade lentificada; humor deprimido, afeto congruente; fala lenta e em tom baixo; pensamento com conteúdo de desesperança, culpa e menos-valia, ideação de morte passiva, sem sintomas psicóticos; orientada; insight preservado | ESCALA: PHQ-9 = 20/27 (item 9 = 2) | PELE: sem lesões de automutilação | TIREOIDE: não palpável',
      labs: [
        { test: 'Hemograma', val: 'Hb 11,6 g/dL, VCM 78 fL', ref: 'Hb 12–16 g/dL; VCM 80–100 fL', alt: true },
        { test: 'Ferritina', val: '14 ng/mL', ref: '> 30 ng/mL', alt: true },
        { test: 'TSH / T4 livre', val: '2,3 μUI/mL / 1,1 ng/dL', ref: '0,4–4,0 / 0,8–1,8', alt: false },
        { test: 'Glicemia', val: '98 mg/dL', ref: '70–99 mg/dL', alt: false },
        { test: 'Vitamina B12', val: '210 pg/mL', ref: '> 300 pg/mL', alt: true },
        { test: '25-OH vitamina D', val: '18 ng/mL', ref: '> 20 ng/mL', alt: true },
        { test: 'β-HCG', val: 'Negativo', ref: 'Negativo', alt: false }
      ],
      note: 'O PHQ-9 é entregue apenas se o candidato aplicar ou solicitar a escala. A informação sobre os medicamentos guardados só aparece se o candidato perguntar sobre acesso a meios. Se o candidato não perguntar sobre ideação suicida, a paciente não fala espontaneamente sobre o tema.',
      patientProfile: 'M.A.R., 47 anos, auxiliar administrativa, divorciada há 6 meses após 20 anos de casamento, mora com os dois filhos adolescentes. Afastada do trabalho há 1 mês. Ciclos menstruais com fluxo aumentado. Sem episódios prévios de mania. Irmã com depressão. Começou a tomar duas taças de vinho todas as noites "para dormir". Tem em casa uma caixa de amitriptilina e clonazepam que sobraram de tratamento da mãe falecida.',
      script: [
        { trigger: 'Abertura', speech: 'Doutora, eu estou muito mal. Não consigo mais fazer nada. Fico chorando à toa.' },
        {
          trigger: 'Quando perguntado sobre a tristeza',
          speech: 'Faz uns 5 meses. Eu sei quando começou porque foi depois do divórcio ser finalizado. Mas já se passou tempo e não melhora.'
        },
        {
          trigger: 'Quando perguntado sobre prazer e atividades',
          speech: 'Eu adorava dançar e ver série. Agora não consigo nem ligar a televisão. Não tenho vontade de nada.'
        },
        {
          trigger: 'Quando perguntado sobre o sono',
          speech: 'Fico horas tentando dormir. Fico pensando em muita coisa. E quando durmo, acordo cedo e não consigo voltar.'
        },
        {
          trigger: 'Quando perguntado sobre pensamentos ruins',
          speech: 'Às vezes eu penso que seria melhor não estar aqui. Que os meus filhos estariam melhor sem mim.'
        },
        { trigger: 'Quando perguntado sobre plano de suicídio', speech: 'Não, eu não tenho coragem. Mas o pensamento vem.' },
        {
          trigger: 'Sobre acesso a medicamentos ou outros meios',
          speech: 'Tenho em casa uns remédios que sobraram da minha mãe, amitriptilina e clonazepam. Às vezes eu olho pra caixa...'
        },
        { trigger: 'Sobre álcool', speech: 'Tomo duas taças de vinho toda noite pra conseguir dormir. Antes eu quase não bebia.' },
        { trigger: 'Sobre episódios de euforia', speech: 'Euforia? Não, nunca tive uma fase de ficar agitada, sem dormir. Sempre fui mais pra baixo.' },
        { trigger: 'Sobre apoio e motivos para viver', speech: 'Meus filhos. Eles são o que me segura. E minha irmã, que me liga todo dia.' }
      ],
      hiddenInfo: 'Tem amitriptilina e clonazepam guardados em casa (meio letal disponível) — só revela se perguntada sobre acesso a meios | Consumo diário de vinho para dormir — só revela se perguntada sobre álcool | Já olhou para a caixa de remédios pensando em tomar — só revela se o candidato aprofundar a avaliação de ideação | Fluxo menstrual aumentado (anemia ferropriva) — só revela se perguntada',
      actorBehavior: 'Paciente chorosa, fala devagar e em tom baixo, evita contato visual. Demonstra alívio quando o candidato pergunta abertamente sobre pensamentos de morte e não julga. Aceita retirar os remédios de casa e envolver a irmã se o candidato explicar o motivo com empatia. Tem receio de "ficar viciada" em antidepressivo.'
    },
    instC: {
      diagnosis: 'Transtorno depressivo maior, episódio único grave sem sintomas psicóticos (CID-10 F32.2; CID-11 6A70.3), com ideação suicida passiva e acesso a meio letal (risco moderado), uso de álcool como automedicação e anemia ferropriva associada.',
      differentials: [
        'Transtorno bipolar (depressão bipolar) — sem história de mania/hipomania; rastrear sempre antes do antidepressivo',
        'Transtorno de adaptação com humor deprimido — sai pela gravidade e número de sintomas, que preenchem critérios para episódio depressivo maior',
        'Luto/separação — a perda é desencadeante, mas a intensidade, a duração e a ideação suicida caracterizam depressão maior',
        'Hipotireoidismo, anemia, deficiência de B12 — TSH normal; anemia ferropriva e B12 baixa contribuem para a fadiga e devem ser tratadas',
        'Transtorno depressivo induzido por álcool — consumo iniciou após o quadro; reavaliar após redução'
      ],
      context: 'Mulher de 47 anos com 5 meses de humor deprimido, anedonia, insônia terminal, fadiga, culpa, desesperança e ideação de morte após divórcio, com afastamento do trabalho. PHQ-9 = 20 (grave). Uso recente de álcool para dormir e disponibilidade de medicamentos potencialmente letais em casa (amitriptilina) elevam o risco de suicídio. Fatores de proteção: filhos e apoio da irmã.',
      justify: 'Critérios DSM-5-TR: ≥ 5 de 9 sintomas por ≥ 2 semanas (humor deprimido, anedonia, insônia, fadiga, culpa/menos-valia, ideação de morte), com prejuízo funcional. Gravidade definida clinicamente e pelo PHQ-9 ≥ 20. Ausência de episódios de mania/hipomania e de causa orgânica suficiente.',
      expectedAnamnesis: 'Início, duração e desencadeantes | Humor, anedonia, sono, apetite, energia, concentração, culpa, psicomotricidade | Ideação suicida: frequência, plano, intenção, acesso a meios, tentativas prévias | Fatores de risco e de proteção | Episódios prévios de depressão e de mania/hipomania | Uso de álcool e outras substâncias | Sintomas psicóticos | Comorbidades clínicas e medicamentos | Rede de apoio e impacto funcional | História familiar',
      expectedPhysical: 'Sinais vitais | Exame do estado mental | Sinais de automutilação | Palpação da tireoide | Sinais de anemia',
      expectedExams: [
        { exam: 'PHQ-9 (e escala de risco de suicídio, como C-SSRS)', justify: 'Gravidade e monitorização', expected: 'PHQ-9 = 20' },
        { exam: 'TSH e T4 livre', justify: 'Excluir hipotireoidismo', expected: 'Normais' },
        { exam: 'Hemograma e ferritina', justify: 'Anemia como fator contribuinte', expected: 'Anemia ferropriva' },
        { exam: 'Vitamina B12, glicemia', justify: 'Causas orgânicas contribuintes', expected: 'B12 baixa' },
        { exam: 'β-HCG', justify: 'Mulher em idade fértil antes do antidepressivo', expected: 'Negativo' }
      ],
      expectedConduct: 'Plano de segurança por escrito: sinais de alerta, estratégias de enfrentamento, contatos de apoio (irmã), CVV 188, SAMU 192, UPA | Restrição de meios: entregar à irmã ou à UBS os medicamentos guardados (amitriptilina e clonazepam) | Antidepressivo ISRS: sertralina 50 mg/dia (aumentar para 100 mg em 2–4 semanas se necessário) ou escitalopram 10 mg/dia; prescrever quantidades limitadas | Evitar tricíclicos (letais em overdose) e benzodiazepínico isolado | Psicoterapia (TCC ou interpessoal) — combinação é superior na depressão grave | Orientar latência de 2–4 semanas, efeitos adversos iniciais e manter por 6–12 meses após remissão | Reduzir/suspender o álcool | Tratar anemia ferropriva (sulfato ferroso) e investigar sangramento uterino; repor B12 | Matriciamento/CAPS se risco alto ou falta de resposta | Retorno em 1–2 semanas; reavaliar PHQ-9 e risco a cada consulta',
      expectedCommunication: 'Perguntar diretamente e sem julgamento sobre pensamentos de morte | Validar o sofrimento e transmitir esperança | Explicar que antidepressivos não causam dependência | Construir o plano de segurança junto com a paciente | Envolver a rede de apoio com consentimento',
      criticalErrors: [
        'Não perguntar sobre ideação suicida',
        'Não investigar acesso a meios letais nem orientar a restrição',
        'Prescrever benzodiazepínico como tratamento único ou antidepressivo tricíclico em paciente com ideação suicida',
        'Não rastrear história de mania/hipomania antes do antidepressivo',
        'Não agendar retorno precoce (1–2 semanas)'
      ]
    },
    instD: {
      title: 'Depressão Maior e Risco de Suicídio — Material de Estudo',
      sections: [
        {
          h: 'Diagnóstico',
          items: [
            { item: '≥ 5 de 9 sintomas por ≥ 2 semanas, incluindo humor deprimido ou anedonia, com prejuízo funcional.', score: 2, ref: 'DSM-5-TR, 2022' },
            {
              item: 'PHQ-9: 5–9 leve; 10–14 moderada; 15–19 moderadamente grave; ≥ 20 grave; item 9 positivo exige avaliação de risco.',
              score: 1,
              ref: 'Kroenke K et al., J Gen Intern Med 2001'
            }
          ]
        },
        {
          h: 'Avaliação de Risco de Suicídio',
          items: [
            {
              item: 'Perguntar diretamente não aumenta o risco; avaliar ideação, plano, intenção, meios, tentativas prévias, fatores de risco e de proteção.',
              score: 2,
              ref: 'OMS — LIVE LIFE, 2021; ABP'
            },
            { item: 'Plano de segurança e restrição de acesso a meios letais reduzem comportamento suicida.', score: 1, ref: 'Stanley B et al., JAMA Psychiatry 2018' }
          ]
        },
        {
          h: 'Tratamento',
          items: [
            {
              item: 'ISRS (sertralina, escitalopram, fluoxetina) são 1ª linha; combinação com psicoterapia é superior na depressão grave.',
              score: 2,
              ref: 'CANMAT Depression Guidelines, 2023'
            },
            { item: 'Resposta em 2–4 semanas; manter 6–12 meses após remissão no primeiro episódio.', score: 1, ref: 'CANMAT, 2023' },
            {
              item: 'Tricíclicos são potencialmente letais em overdose — evitar em pacientes com risco de suicídio.',
              score: 1,
              ref: 'NICE NG222 — Depression in adults, 2022'
            }
          ]
        }
      ]
    }
  },

  // PSIQUIATRIA — Transtorno de ansiedade generalizada
  {
    id: 28,
    title: 'Jovem com \'preocupação constante\' e sintomas físicos',
    sub: 'UBS — Atenção Primária',
    tema: 'Psiquiatria',
    topic: 'Transtorno de Ansiedade Generalizada',
    level: 'fácil',
    cardAccent: '#AB47BC',
    instA: {
      scenario: 'Demanda espontânea em Unidade Básica de Saúde.',
      patient: 'L.G.P., 28 anos, sexo masculino, solteiro, analista de sistemas, trabalha em home office.',
      complaint: 'Paciente refere preocupação constante há cerca de 8 meses, dificuldade para relaxar, tensão muscular no pescoço e ombros, insônia por pensamentos acelerados à noite, irritabilidade e dificuldade de concentração no trabalho. Já buscou cardiologista e gastroenterologista sem alterações orgânicas.',
      tasks: [
        'Realize a anamnese dirigida às queixas físicas e psíquicas.',
        'Rastreie outros transtornos de ansiedade, depressão comórbida, uso de substâncias e risco de suicídio.',
        'Solicite os exames pertinentes para excluir causas orgânicas.',
        'Formule o diagnóstico e os diagnósticos diferenciais.',
        'Proponha o plano terapêutico e oriente o paciente.'
      ]
    },
    instB: {
      vitals: { PA: '128/82 mmHg', FC: '92 bpm', FR: '18 irpm', Tax: '36,5 °C', SpO2: '99% em ar ambiente', Peso: '76 kg', Altura: '1,78 m', IMC: '24,0 kg/m²' },
      physicalGeneral: 'Aparência ansiosa, inquieto durante a consulta. Tensão muscular visível em região cervical e trapézio. Tireóide sem alterações palpáveis. Cardiovascular sem alterações. Abdome sem alterações. Neurológico sem déficits focais.',
      physicalSeg: 'GERAL: inquieto, tensão muscular palpável em trapézios; mãos frias e úmidas; sem tremor fino | TIREOIDE: sem alterações à palpação | CARDIOVASCULAR: RCR 2T, sem sopros | ESCALAS: GAD-7 = 16/21 (ansiedade grave); PHQ-9 = 8 (sintomas depressivos leves)',
      labs: [
        { test: 'Hemograma', val: 'Normal', ref: '—', alt: false },
        { test: 'TSH', val: '1,6 μUI/mL', ref: '0,4–4,0 μUI/mL', alt: false },
        { test: 'Glicemia de jejum', val: '91 mg/dL', ref: '70–99 mg/dL', alt: false },
        { test: 'ECG', val: 'Ritmo sinusal, FC 90 bpm, sem alterações', ref: '—', alt: false }
      ],
      note: 'GAD-7 e PHQ-9 são entregues apenas se o candidato aplicar ou solicitar as escalas. Os exames prévios do cardiologista (ecocardiograma e Holter normais) e do gastroenterologista (endoscopia normal) estão com o paciente, se pedidos.',
      patientProfile: 'L.G.P., 28 anos, analista de sistemas em home office, solteiro, mora sozinho. Sempre foi "ansioso", com piora há 8 meses após mudança para o trabalho remoto e pressão por metas. Toma 5–6 xícaras de café e 2 latas de energético por dia. Bebe 3–4 cervejas por noite para "desligar a cabeça". Às vezes toma clonazepam que a mãe lhe deu. Mãe diabética e ansiosa. Já procurou cardiologista e gastroenterologista, com exames normais.',
      script: [
        {
          trigger: 'Abertura',
          speech: 'Doutor, eu sei que parece bobagem, mas eu fico preocupado o tempo todo. Com tudo. Com o trabalho, com minha saúde, com a família. Não consigo desligar.'
        },
        {
          trigger: 'Quando perguntado sobre quais preocupações',
          speech: 'Com o trabalho — se vou entregar no prazo, se vou ser demitido. Com minha saúde — qualquer dorzinha acho que é coisa grave. Com minha mãe que é diabética. Com dinheiro. Com tudo, basicamente.'
        },
        {
          trigger: 'Quando perguntado sobre sintomas físicos',
          speech: 'Tenho muita tensão no pescoço e ombro. Palpitações às vezes. Dor de estômago. Já fui no cardiologista e no gastro, não acharam nada.'
        },
        { trigger: 'Quando perguntado sobre o sono', speech: 'Fico na cama pensando. Os pensamentos não param. Demoro pra dormir toda noite.' },
        {
          trigger: 'Quando perguntado sobre o início',
          speech: 'Faz uns 8 meses, mais ou menos quando comecei a trabalhar em casa. Mas sempre fui ansioso, desde novo. Piorou muito esse ano.'
        },
        {
          trigger: 'Quando perguntado sobre crises de pânico',
          speech: 'Não tenho crise não. Não é aquela coisa de coração disparar de repente. É uma preocupação constante, o tempo todo.'
        },
        { trigger: 'Quando perguntado sobre suicídio', speech: 'Não, nada disso. Só estou muito cansado de me preocupar.' },
        {
          trigger: 'Sobre café, energéticos e álcool',
          speech: 'Café uns cinco, seis por dia, e duas latinhas de energético pra render no trabalho. De noite tomo umas três, quatro cervejas pra desligar a cabeça.'
        },
        { trigger: 'Sobre uso de calmantes', speech: 'Minha mãe me deu uns comprimidos de clonazepam. Tomo quando não consigo dormir, umas três vezes por semana.' },
        {
          trigger: 'Sobre humor e prazer',
          speech: 'Desanimado às vezes, mas ainda gosto de jogar videogame com os amigos online. Não é tristeza, é cansaço de me preocupar.'
        }
      ],
      hiddenInfo: 'Consumo de 2 energéticos/dia além do café — só revela se perguntado sobre estimulantes | Usa 3–4 cervejas por noite para dormir — só revela se perguntado sobre álcool | Uso de clonazepam da mãe sem prescrição — só revela se perguntado sobre medicamentos/calmantes | Sempre foi ansioso desde a infância — só revela se perguntado sobre o início',
      actorBehavior: 'Paciente inquieto, balança a perna, fala rápido e pede desculpas por "estar exagerando". Pede "um remédio forte para dormir". Mostra-se receptivo quando o candidato explica que a ansiedade é um transtorno tratável e que existe tratamento sem risco de dependência. Resiste um pouco a reduzir o café.'
    },
    instC: {
      diagnosis: 'Transtorno de ansiedade generalizada (CID-10 F41.1; CID-11 6B00), de gravidade moderada a grave (GAD-7 = 16), agravado por consumo excessivo de cafeína e energéticos, com uso de álcool e de benzodiazepínico sem prescrição como automedicação.',
      differentials: [
        'Transtorno de pânico — sai pela ausência de ataques súbitos e recorrentes; a ansiedade é contínua',
        'Transtorno depressivo maior — sintomas depressivos leves (PHQ-9 = 8), sem critérios para episódio; reavaliar no seguimento',
        'Transtorno de ansiedade de doença (hipocondria) — preocupação com a saúde é apenas um dos múltiplos temas',
        'Ansiedade induzida por substâncias (cafeína, energéticos, abstinência de álcool/benzodiazepínico) — contribui, mas a ansiedade antecede o consumo e é crônica',
        'Hipertireoidismo, arritmias, feocromocitoma — TSH, ECG e avaliação cardiológica normais'
      ],
      context: 'Homem de 28 anos com preocupações excessivas e difíceis de controlar por ≥6 meses sobre múltiplas áreas da vida, acompanhadas de tensão muscular, insônia, irritabilidade e dificuldade de concentração. Exames orgânicos normais. Consumo elevado de cafeína como fator agravante.',
      justify: 'Ansiedade e preocupação excessivas sobre múltiplos temas, na maioria dos dias por ≥ 6 meses, difíceis de controlar, com ≥ 3 sintomas (inquietação, fadiga, dificuldade de concentração, irritabilidade, tensão muscular, insônia) e prejuízo funcional (DSM-5-TR). Exames normais afastam causas orgânicas.',
      expectedAnamnesis: 'Conteúdo e padrão das preocupações | Duração (≥ 6 meses) e dificuldade de controle | Sintomas físicos (tensão, insônia, palpitações, sintomas gastrointestinais) | Crises de pânico, fobias, obsessões/compulsões | Sintomas depressivos | Ideação suicida | Cafeína, energéticos, álcool, tabaco, drogas | Uso de benzodiazepínicos e outros medicamentos | Impacto funcional | História familiar',
      expectedPhysical: 'Sinais vitais | Palpação da tireoide | Ausculta cardíaca | Sinais de hipertireoidismo (tremor, sudorese, exoftalmia) | Aplicação de GAD-7 e PHQ-9',
      expectedExams: [
        { exam: 'TSH', justify: 'Excluir hipertireoidismo', expected: 'Normal' },
        { exam: 'ECG', justify: 'Palpitações', expected: 'Normal' },
        { exam: 'Hemograma e glicemia', justify: 'Causas orgânicas contribuintes', expected: 'Normais' },
        { exam: 'GAD-7 e PHQ-9', justify: 'Gravidade e comorbidade depressiva', expected: 'GAD-7 = 16; PHQ-9 = 8' }
      ],
      expectedConduct: 'Psicoeducação sobre ansiedade e o ciclo preocupação–sintomas físicos | Psicoterapia (TCC) como 1ª linha, individual ou em grupo, ou autoajuda guiada | Farmacoterapia pela gravidade: ISRS (sertralina 25–50 mg/dia, aumentando para 50–100 mg; ou escitalopram 5–10 mg/dia) ou IRSN (venlafaxina, duloxetina); iniciar em dose baixa pela ativação inicial; resposta em 4–6 semanas; manter ≥ 12 meses após resposta | Não prescrever benzodiazepínico como tratamento de manutenção; orientar a interrupção do clonazepam sem prescrição (redução gradual se uso frequente) | Reduzir cafeína (< 200–300 mg/dia) e suspender energéticos | Reduzir álcool (piora ansiedade e sono) | Atividade física regular, higiene do sono, pausas no trabalho remoto | Retorno em 2–4 semanas com GAD-7',
      expectedCommunication: 'Validar as queixas físicas sem reforçar a busca de exames desnecessários | Explicar o diagnóstico em linguagem acessível | Esclarecer o risco de dependência dos benzodiazepínicos e as alternativas | Pactuar metas de redução de café e álcool',
      criticalErrors: [
        'Prescrever benzodiazepínico como primeira linha ou por longo prazo',
        'Não excluir hipertireoidismo (TSH)',
        'Não rastrear depressão comórbida e risco de suicídio',
        'Não investigar uso de cafeína, energéticos, álcool e benzodiazepínicos sem prescrição',
        'Solicitar novos exames cardiológicos e gastrointestinais desnecessários'
      ]
    },
    instD: {
      title: 'Transtorno de Ansiedade Generalizada — Material de Estudo',
      sections: [
        {
          h: 'Diagnóstico',
          items: [
            {
              item: 'Ansiedade e preocupação excessivas por ≥ 6 meses, difíceis de controlar, com ≥ 3 sintomas físicos/cognitivos e prejuízo funcional.',
              score: 2,
              ref: 'DSM-5-TR, 2022'
            },
            { item: 'GAD-7: 5 leve, 10 moderado, 15 grave; ≥ 10 sugere transtorno de ansiedade.', score: 1, ref: 'Spitzer RL et al., Arch Intern Med 2006' }
          ]
        },
        {
          h: 'Tratamento',
          items: [
            { item: 'Tratamento em degraus: psicoeducação → autoajuda guiada → TCC ou farmacoterapia (ISRS/IRSN).', score: 2, ref: 'NICE CG113 — GAD and panic disorder' },
            {
              item: 'ISRS (sertralina, escitalopram) e IRSN (venlafaxina, duloxetina) são 1ª linha; pregabalina como alternativa.',
              score: 1,
              ref: 'Canadian Anxiety Guidelines, 2014; NICE CG113'
            },
            {
              item: 'Benzodiazepínicos: apenas por curto prazo em crises; risco de dependência, quedas e interação com álcool.',
              score: 2,
              ref: 'NICE CG113; AGS Beers 2023'
            },
            { item: 'Reduzir cafeína e álcool e praticar atividade física são medidas coadjuvantes eficazes.', score: 1, ref: 'NICE CG113' }
          ]
        }
      ]
    }
  },

  // PSIQUIATRIA — Transtorno de estresse pós-traumático
  {
    id: 29,
    title: 'Mulher com pesadelos e \'nunca mais foi a mesma\' após assalto',
    sub: 'UBS — Atenção Primária',
    tema: 'Psiquiatria',
    topic: 'Transtorno de Estresse Pós-Traumático',
    level: 'moderado',
    cardAccent: '#AB47BC',
    instA: {
      scenario: 'Consulta agendada em Unidade Básica de Saúde após encaminhamento da equipe multiprofissional (eMulti), com apoio matricial de psicologia e referência ao CAPS.',
      patient: 'A.B.S., 38 anos, sexo feminino, casada, caixa de supermercado.',
      complaint: 'Paciente refere pesadelos recorrentes, imagens intrusivas do assalto à mão armada sofrido há 4 meses, sobressaltos com barulhos súbitos, evitação de locais do ocorrido, entorpecimento emocional e afastamento do trabalho por licença médica.',
      tasks: [
        'Realize a anamnese explorando os grupos de sintomas do TEPT, sem revitimizar a paciente.',
        'Rastreie comorbidades (depressão, álcool) e avalie o risco de suicídio.',
        'Formule o diagnóstico e os diagnósticos diferenciais.',
        'Proponha o plano terapêutico.',
        'Oriente a paciente sobre os direitos trabalhistas relacionados ao evento.'
      ]
    },
    instB: {
      vitals: { PA: '136/88 mmHg', FC: '94 bpm', FR: '16 irpm', Tax: '36,6 °C', Peso: '65 kg', Altura: '1,60 m', IMC: '25,4 kg/m²' },
      physicalGeneral: 'Aparência de sofrimento psíquico, olhar vigilante, sobressalta-se com barulhos no corredor. Tensão muscular generalizada. Sem lesões físicas residuais.',
      physicalSeg: 'EXAME DO ESTADO MENTAL: aparência cuidada; hipervigilância, sobressalto exagerado; humor disfórico, afeto restrito; fala baixa com pausas ao abordar o trauma; pensamento sem desorganização, com ruminação e cognições de culpa ("foi culpa minha"); revivências em resposta a estímulos; orientada; insight preservado; ideação passiva de morte, sem plano | ESCALAS: PCL-5 = 54 (sugestivo de TEPT); PHQ-9 = 15; AUDIT-C = 5 (uso de risco)',
      labs: [
        { test: 'Hemograma', val: 'Normal', ref: '—', alt: false },
        { test: 'TSH', val: '2,0 μUI/mL', ref: '0,4–4,0 μUI/mL', alt: false },
        { test: 'Glicemia', val: '96 mg/dL', ref: '70–99 mg/dL', alt: false },
        { test: 'β-HCG', val: 'Negativo', ref: 'Negativo', alt: false }
      ],
      note: 'As escalas são entregues apenas se aplicadas/solicitadas. A paciente não descreve o assalto em detalhes, a menos que o candidato insista — o avaliador deve registrar se houve pedido desnecessário de detalhes. A informação sobre a CAT só aparece se o candidato perguntar sobre a situação no trabalho.',
      patientProfile: 'A.B.S., 38 anos, operadora de caixa de supermercado, casada, dois filhos (10 e 14 anos). Há 4 meses foi rendida com arma na cabeça durante assalto no caixa, enquanto estava sozinha no turno da noite. Afastada por atestados sucessivos. A empresa não emitiu Comunicação de Acidente de Trabalho (CAT). Passou a tomar 2–3 taças de vinho à noite para conseguir dormir. Sem transtornos psiquiátricos prévios.',
      script: [
        { trigger: 'Abertura', speech: 'Doutora, eu não sei bem como explicar. Desde aquele dia eu não sou mais a mesma pessoa.' },
        {
          trigger: 'Quando perguntado sobre o evento',
          speech: 'Fui assaltada no meu trabalho. Um homem entrou com uma arma, ficou apontando pra mim. Achei que ia morrer.'
        },
        {
          trigger: 'Quando perguntado sobre os pesadelos',
          speech: 'Todo noite eu sonho com isso. Acordo no meio da noite gritando, suada. Meu marido está preocupado.'
        },
        { trigger: 'Quando perguntado sobre os flashbacks', speech: 'Qualquer barulho de moto eu trava. É como se eu tivesse lá de novo, vivendo aquele momento.' },
        { trigger: 'Quando perguntado sobre evitação', speech: 'Não consigo mais ir trabalhar. Fico com medo de voltar lá. Evito até assistir notícia de crime.' },
        { trigger: 'Quando perguntado sobre culpa', speech: 'Fico pensando que poderia ter feito diferente. Que foi culpa minha por estar lá sozinha.' },
        { trigger: 'Quando perguntado sobre suicídio', speech: 'Às vezes penso que seria melhor não estar aqui. Mas não tenho coragem de fazer nada. Tenho filhos.' },
        { trigger: 'Sobre álcool e sono', speech: 'Tenho tomado vinho à noite, duas, três taças, senão não durmo. Antes eu não bebia quase nada.' },
        {
          trigger: 'Sobre a situação no trabalho',
          speech: 'Estou de atestado. O supermercado disse que não era acidente de trabalho, que foi "fatalidade". Tenho medo de ser mandada embora.'
        },
        {
          trigger: 'Sobre relação com a família',
          speech: 'Fico irritada com tudo, grito com meus filhos. Não consigo sentir carinho como antes, parece que estou anestesiada.'
        }
      ],
      hiddenInfo: 'Uso de 2–3 taças de vinho à noite para dormir (uso de risco) — só revela se perguntada sobre álcool | Empresa não emitiu CAT (direitos trabalhistas/previdenciários) — só revela se perguntada sobre a situação no trabalho | Irritabilidade com os filhos e embotamento afetivo — só revela se perguntada sobre família | Ideação passiva de morte, com os filhos como fator de proteção — detalha apenas se perguntada diretamente',
      actorBehavior: 'Paciente tensa, mexe as mãos, assusta-se com barulhos (porta batendo). Fala com pausas e voz embargada. Se o candidato pedir detalhes do assalto, fica visivelmente angustiada, chora e para de responder. Melhora quando o candidato valida o sofrimento, explica que as reações são esperadas após um trauma e que há tratamento eficaz.'
    },
    instC: {
      diagnosis: 'Transtorno de estresse pós-traumático (CID-10 F43.1; CID-11 6B40) após assalto à mão armada no trabalho há 4 meses, com os quatro grupos de sintomas, depressão comórbida moderada, uso de risco de álcool e ideação passiva de morte — acidente de trabalho com repercussão em saúde mental.',
      differentials: [
        'Transtorno de estresse agudo — sintomas entre 3 dias e 1 mês após o trauma; aqui > 1 mês',
        'Transtorno de adaptação — sai porque o estressor foi traumático (ameaça à vida) e há revivência, evitação e hiperexcitabilidade',
        'Transtorno depressivo maior — comorbidade presente, mas não explica revivências e evitação',
        'Transtorno de pânico — sai pela relação clara dos sintomas com lembranças do trauma',
        'Transtorno por uso de álcool — uso de risco secundário (automedicação); monitorar'
      ],
      context: 'Mulher de 38 anos exposta a ameaça real à vida durante assalto no trabalho, que há 4 meses apresenta pesadelos, revivências, evitação do local e de notícias, culpa, embotamento afetivo, irritabilidade e hipervigilância, com afastamento do trabalho e uso de álcool para dormir. O evento caracteriza acidente de trabalho, e o reconhecimento formal (CAT) tem implicações previdenciárias e de proteção ao emprego.',
      justify: 'Critérios DSM-5-TR: exposição a evento traumático + sintomas intrusivos (pesadelos, flashbacks) + evitação + alterações negativas em cognição e humor (culpa, embotamento) + alterações na excitação (hipervigilância, sobressalto, irritabilidade, insônia), por > 1 mês, com prejuízo funcional. PCL-5 = 54 reforça. Comorbidade depressiva e uso de álcool são frequentes no TEPT.',
      expectedAnamnesis: 'Natureza geral do evento traumático (sem detalhes desnecessários) | Tempo desde o trauma | Sintomas intrusivos (pesadelos, flashbacks) | Evitação | Alterações de cognição e humor (culpa, embotamento) | Hiperexcitabilidade (sobressalto, insônia, irritabilidade) | Impacto funcional e familiar | Sintomas depressivos e ideação suicida | Uso de álcool e substâncias | Traumas prévios | Situação trabalhista e rede de apoio',
      expectedPhysical: 'Sinais vitais | Exame do estado mental | Aplicação de escalas (PCL-5, PHQ-9, AUDIT-C)',
      expectedExams: [
        { exam: 'PCL-5', justify: 'Rastreio/gravidade do TEPT', expected: '54' },
        { exam: 'PHQ-9 e avaliação de risco de suicídio', justify: 'Depressão comórbida', expected: 'PHQ-9 = 15' },
        { exam: 'AUDIT-C', justify: 'Uso de álcool', expected: '5 — uso de risco' },
        { exam: 'TSH, hemograma, glicemia', justify: 'Excluir causas orgânicas de sintomas', expected: 'Normais' }
      ],
      expectedConduct: 'Psicoterapia focada no trauma como 1ª linha: terapia de processamento cognitivo, exposição prolongada, TCC focada no trauma ou EMDR — encaminhar ao CAPS/psicologia (matriciamento) | Farmacoterapia pela depressão comórbida e gravidade: ISRS (sertralina 25–50 mg/dia, titulando até 100–200 mg) ou venlafaxina | Evitar benzodiazepínicos (pioram desfechos no TEPT e interagem com álcool) | Pesadelos: higiene do sono; prazosina pode ser considerada | Intervenção breve para o álcool (reduzir/suspender) | Plano de segurança e contatos de apoio (CVV 188) | Notificação do agravo relacionado ao trabalho (transtorno mental relacionado ao trabalho — SINAN/RENAST/CEREST) e orientação sobre a CAT (pode ser emitida pela própria paciente, sindicato ou médico) e benefício acidentário no INSS | Retorno em 2 semanas',
      expectedCommunication: 'Acolher e validar o sofrimento, sem pedir detalhes desnecessários do trauma | Psicoeducação: as reações são compreensíveis e tratáveis; desfazer a culpa | Explicar as opções de tratamento | Orientar os direitos trabalhistas com clareza | Envolver a família com consentimento',
      criticalErrors: [
        'Pedir detalhes do trauma sem necessidade clínica (revitimização)',
        'Não avaliar o risco de suicídio',
        'Prescrever benzodiazepínico como tratamento do TEPT',
        'Não indicar psicoterapia focada no trauma',
        'Não reconhecer o caráter ocupacional do evento (CAT/notificação)'
      ]
    },
    instD: {
      title: 'Transtorno de Estresse Pós-Traumático — Material de Estudo',
      sections: [
        {
          h: 'Diagnóstico',
          items: [
            {
              item: 'Exposição a morte, lesão grave ou violência sexual (real ou ameaça) + sintomas intrusivos, evitação, alterações negativas de cognição/humor e de excitação por > 1 mês.',
              score: 2,
              ref: 'DSM-5-TR, 2022'
            },
            { item: 'Estresse agudo: sintomas entre 3 dias e 1 mês após o trauma.', score: 1, ref: 'DSM-5-TR, 2022' },
            { item: 'PCL-5 é instrumento validado de rastreio e monitorização.', score: 1, ref: 'Weathers FW et al., National Center for PTSD, 2013' }
          ]
        },
        {
          h: 'Tratamento',
          items: [
            {
              item: 'Psicoterapias focadas no trauma (processamento cognitivo, exposição prolongada, EMDR) são 1ª linha.',
              score: 2,
              ref: 'VA/DoD PTSD Guideline, 2023; NICE NG116'
            },
            {
              item: 'Farmacoterapia: sertralina, paroxetina, fluoxetina ou venlafaxina quando psicoterapia indisponível ou recusada.',
              score: 1,
              ref: 'VA/DoD PTSD Guideline, 2023'
            },
            { item: 'Benzodiazepínicos não são recomendados no TEPT.', score: 2, ref: 'VA/DoD PTSD Guideline, 2023' }
          ]
        },
        {
          h: 'Saúde do Trabalhador',
          items: [
            {
              item: 'Violência sofrida no trabalho é acidente de trabalho: emissão de CAT (empresa, trabalhador, sindicato ou médico) e notificação de transtorno mental relacionado ao trabalho.',
              score: 1,
              ref: 'Lei nº 8.213/1991; Portaria GM/MS — Lista de Doenças Relacionadas ao Trabalho, 2023'
            }
          ]
        }
      ]
    }
  }
];
