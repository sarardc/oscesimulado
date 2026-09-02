const especialidades2 = [

  // ─────────────────────────────────────────────────────────────────────────
  // CASO 1 — CARCINOMA BASOCELULAR (CBC)
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 1,
    title: 'Ferida no nariz que não cicatriza há 2 anos',
    sub: 'UBS — Atenção Primária',
    tema: 'Dermatologia',
    topic: 'Carcinoma Basocelular',
    level: 'moderado',
    cardAccent: '#EC407A',
    instA: {
      scenario: 'Atenção Primária — UBS. Consultório, turno matutino.',
      patient: 'J.C.M., 62 anos, masculino, agricultor aposentado, pele clara (fototipo II), com longa história de exposição solar sem proteção.',
      complaint: 'Lesão na asa nasal direita que "não cicatriza" há cerca de 2 anos, com crescimento lento.',
      tasks: [
        'Realize a anamnese dirigida ao caso.',
        'Realize o exame físico da lesão e da pele em geral.',
        'Formule a hipótese diagnóstica principal e os diferenciais.',
        'Solicite os exames complementares adequados.',
        'Proponha a conduta e o encaminhamento correto.',
        'Oriente o paciente sobre o diagnóstico, tratamento e fotoproteção.'
      ]
    },
    instB: {
      vitals: {
        PA: '132/82 mmHg',
        FC: '74 bpm',
        FR: '16 irpm',
        Tax: '36,6 °C',
        Peso: '78 kg',
        Altura: '1,70 m',
        IMC: '27,0 kg/m²'
      },
      physicalGeneral: 'Bom estado geral, consciente, orientado, pele clara com múltiplas lesões actínicas (ceratoses actínicas) em face e antebraços. Elastose solar evidente.',
      physicalSeg: 'LESÃO PRINCIPAL (asa nasal direita): pápula perolada, translúcida, com bordas elevadas e enroladas ("roll border"), telangiectasias superficiais visíveis, ulceração central rasa ~3mm, diâmetro total ~9mm. Sem crosta espessa. Sem adenomegalia regional palpável. | RESTANTE DA PELE: múltiplas máculas acastanhadas e ceratoses actínicas em região malar bilateral, fronte e dorso das mãos. Sem outras lesões ulceradas. | LINFONODOS: sem adenomegalias cervicais ou submandibulares palpáveis.',
      labs: [
        { test: 'Dermoscopia', val: 'Vasos arborescentes ("arborizing vessels") em fundo branco-azulado; ninhos ovoides azul-acinzentados; estruturas em roda de carroça', ref: 'Padrão característico de CBC', alt: true }
      ],
      image: 'Biópsia punch (resultado — entregar somente se solicitado): Carcinoma basocelular, tipo nodular. Margens de biopsia comprometidas. Sem invasão perineural ou vascular identificada.',
      note: 'Entregar sinais vitais ao início. Entregar resultado da dermoscopia se o candidato solicitar o exame ou descrever a lesão corretamente. Entregar o resultado da biópsia somente se o candidato a solicitar formalmente. O candidato deve ser pontuado por solicitar biópsia — a dermoscopia é um exame de apoio mas a biópsia é confirmatória.',
      patientProfile: 'J.C.M., 62 anos, masculino, agricultor aposentado, casado, mora em área rural. Trabalhou em lavoura por 35 anos sem uso de chapéu ou protetor solar. Nega tabagismo e etilismo.',
      script: [
        { trigger: 'Queixa principal', speech: 'Doutor, essa ferida no nariz não sara de jeito nenhum. Já faz uns dois anos. Às vezes sangra um pouquinho quando lavo o rosto, aí parece que cicatriza, mas fica voltando.' },
        { trigger: 'Sobre o crescimento da lesão', speech: 'Tava pequenininha antes, assim do tamanho de um grão de areia. Agora cresceu, tá desse tamanho que o senhor tá vendo.' },
        { trigger: 'Sobre dor ou coceira', speech: 'Não dói não. Às vezes coça um pouco, mas é mais pelo sangramento às vezes.' },
        { trigger: 'Sobre exposição solar e trabalho', speech: 'Trabalhei na roça a vida toda, desde menino. Nunca usei protetor solar, não sabia que era importante. Usava chapéu só de vez em quando.' },
        { trigger: 'Sobre outras lesões na pele', speech: 'Tenho essas manchinhas espalhadas no rosto que o dermatologista disse uma vez que era por causa do sol. Mas não tratei não.' },
        { trigger: 'Sobre histórico familiar de câncer de pele', speech: 'Meu irmão mais velho operou um negócio parecido no nariz também, faz uns dez anos. Ficou bom.' },
        { trigger: 'Sobre tratamento anterior para essa lesão', speech: 'Nunca fui ao médico pra isso não. Minha esposa que ficou insistindo pra eu vir.' },
        { trigger: 'Pergunta ativa — diagnóstico', speech: 'Doutor, isso é câncer? Preciso operar?' },
        { trigger: 'Pergunta ativa — gravidade', speech: 'Vai espalhar pro resto do corpo? Vou morrer disso?' }
      ],
      hiddenInfo: 'Histórico familiar: irmão mais velho com CBC confirmado em nariz — só revela se o candidato perguntar sobre história familiar de câncer de pele | Nunca usou protetor solar na vida — só revela se o candidato perguntar especificamente sobre fotoproteção | Ceratoses actínicas diagnosticadas há 5 anos mas não tratadas — só revela se o candidato perguntar sobre consultas anteriores com dermatologista',
      actorBehavior: 'Paciente calmo, levemente preocupado ao ouvir a palavra "câncer". Colaborativo. Demonstra desconhecimento sobre fotoproteção e cuidados com a pele. Fica mais receptivo quando o candidato o tranquiliza sobre o bom prognóstico do CBC. Pode demonstrar resistência ao encaminhamento se achar que é coisa pequena.'
    },
    instC: {
      diagnosis: 'Carcinoma basocelular (CBC) nodular ulcerado em asa nasal direita, em área de alto risco (face central — "H zone").',
      differentials: [
        'Ceratose actínica ulcerada — lesão pré-maligna por dano solar; evolução mais superficial, sem bordas enroladas peroladas; dermoscopia diferente',
        'Carcinoma espinocelular (CEC) — também associado a exposição solar crônica; lesão mais queratósica, indurada, crescimento mais rápido; risco de metástase > CBC; biópsia diferencia',
        'Melanoma amelanótico — raro, pode simular CBC nodular; dermoscopia e biópsia confirmam',
        'Granuloma piogênico — lesão vascular eritematosa, sangra facilmente; sem bordas peroladas; geralmente menor tempo de evolução'
      ],
      context: 'Homem idoso, fototipo II, agricultor com exposição solar cumulativa intensa por décadas, sem fotoproteção. Lesão característica em área de alto risco da face (asa nasal — "zona H"), com morfologia clínica típica de CBC nodular (bordas peroladas enroladas, telangiectasias, ulceração central) e dermoscopia confirmatória. História familiar positiva para CBC.',
      justify: 'CBC é o câncer de pele mais comum e o câncer mais frequente em humanos. Critérios clínicos preenchidos: pápula perolada com roll border, telangiectasias, ulceração central ("úlcera roedora"), evolução lenta em área fotoexposta. Dermoscopia com padrão típico (vasos arborescentes, ninhos ovoides azul-acinzentados). Biópsia confirma. Localização em asa nasal (zona H) é área de alto risco de recidiva, com indicação de cirurgia de Mohs ou margens ampliadas.',
      expectedAnamnesis: 'Caracterizar a lesão: início, evolução, crescimento, sangramento, dor | Pesquisar história de exposição solar (trabalho, lazer, queimaduras solares na infância/adolescência) | Perguntar sobre uso de protetor solar e fotoproteção | Investigar lesões anteriores em pele ou cirurgias de pele | Perguntar sobre história familiar de câncer de pele | Investigar uso de imunossupressores (aumenta risco de CBC) | Antecedentes de radioterapia em pele | Pesquisar sintomas sistêmicos (geralmente ausentes no CBC)',
      expectedPhysical: 'Descrever detalhadamente a lesão primária: localização, tamanho (em mm), cor, bordas, superfície, ulceração | Avaliar características específicas: bordas peroladas enroladas, telangiectasias, brilho | Examinar toda a superfície cutânea fotoexposta (face, pescoço, couro cabeludo, dorso das mãos, antebraços) | Palpar linfonodos regionais (cervicais, submandibulares) | Solicitar ou descrever dermoscopia | Diferenciar de outras lesões actínicas',
      expectedExams: [
        { exam: 'Dermoscopia', justify: 'Auxilia no diagnóstico diferencial de lesões pigmentadas e não pigmentadas; padrão típico no CBC aumenta acurácia diagnóstica', expected: 'Vasos arborescentes, ninhos ovoides azul-acinzentados — padrão diagnóstico de CBC' },
        { exam: 'Biópsia (punch ou incisional)', justify: 'Exame confirmatório — obrigatório antes de qualquer tratamento definitivo; define subtipo histológico (nodular, superficial, infiltrativo, esclerodermiforme)', expected: 'CBC nodular — confirma diagnóstico' }
      ],
      expectedConduct: 'Farmacológica: Imiquimode creme 5% (apenas para CBC superficial pequeno, não indicado para nodular ou área de alto risco) — NÃO indicado neste caso | Não farmacológica: Encaminhamento para Dermatologia/Cirurgia Plástica para tratamento cirúrgico; CBC nodular em área de alto risco (zona H — asa nasal): cirurgia micrográfica de Mohs é padrão ouro (controle de margens em tempo real); alternativa: excisão cirúrgica com margens de 4–5mm + análise histopatológica de margens; NÃO encaminhar ao pronto-socorro | Orientações ao paciente: Explicar que é um tipo de câncer de pele de baixo risco de metástase (< 0,1%), mas que requer tratamento cirúrgico; tranquilizar sobre o bom prognóstico; orientar fotoproteção rigorosa (protetor solar FPS ≥ 30 diariamente, reaplicar a cada 2h, chapéu, roupas protetoras); rastrear toda a superfície cutânea anualmente com dermatologista; tratar ceratoses actínicas para prevenção de CEC | Seguimento: Dermatologia; pós-operatório em 7–10 dias; seguimento semestral por 2 anos para rastreamento de recidiva e novas lesões',
      expectedCommunication: 'Apresentar-se pelo nome | Comunicar o diagnóstico de CBC com clareza, usando linguagem acessível ("um tipo de câncer de pele muito comum e com ótimo prognóstico quando tratado") | Tranquilizar sem minimizar — explicar que raramente se espalha, mas precisa ser retirado | Esclarecer a importância do protetor solar e rastreamento anual | Perguntar se tem dúvidas | Demonstrar empatia com a preocupação do paciente',
      criticalErrors: [
        'Não solicitar biópsia antes de propor tratamento definitivo (diagnóstico presuntivo sem confirmação histológica é erro grave)',
        'Encaminhar diretamente para cauterização ou crioterapia sem biópsia (subtipo histológico define a técnica)',
        'Não examinar toda a superfície cutânea (paciente tem múltiplas ceratoses actínicas que precisam ser avaliadas)',
        'Não encaminhar ao especialista (CBC em zona H — asa nasal — requer cirurgia especializada)',
        'Não orientar fotoproteção e rastreamento anual (prevenção secundária essencial em paciente de alto risco)'
      ]
    },
    instD: {
      title: 'CHECKLIST — FERIDA NO NARIZ QUE NÃO CICATRIZA (CBC)',
      sections: [
        {
          h: 'BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE',
          items: [
            { item: 'Apresentou-se pelo nome ao paciente', score: 0.5, ref: 'CFM Res. 2.232/2019' },
            { item: 'Comunicou o diagnóstico de forma clara, com empatia, sem alarmar excessivamente', score: 0.5, ref: 'SBD — Diretrizes de Câncer de Pele, 2023' }
          ]
        },
        {
          h: 'BLOCO 2 — ANAMNESE',
          items: [
            { item: 'Investigou início, evolução e características da lesão (sangramento, dor, crescimento)', score: 0.5, ref: 'SBD — Diretrizes de Câncer de Pele, 2023' },
            { item: 'Pesquisou história de exposição solar cumulativa (trabalho, lazer)', score: 0.5, ref: 'SBD — Diretrizes de Câncer de Pele, 2023' },
            { item: 'Perguntou sobre uso de protetor solar e fotoproteção', score: 0.3, ref: 'SBD — Diretrizes de Câncer de Pele, 2023' },
            { item: 'Investigou história familiar de câncer de pele', score: 0.3, ref: 'SBD — Diretrizes de Câncer de Pele, 2023' }
          ]
        },
        {
          h: 'BLOCO 3 — EXAME FÍSICO',
          items: [
            { item: 'Descreveu detalhadamente a lesão (localização, tamanho, bordas peroladas, telangiectasias, ulceração)', score: 1.0, ref: 'SBD — Diretrizes de Câncer de Pele, 2023' },
            { item: 'Examinou toda a superfície cutânea fotoexposta além da lesão principal', score: 0.5, ref: 'SBD — Diretrizes de Câncer de Pele, 2023' },
            { item: 'Palpou linfonodos regionais (cervicais, submandibulares)', score: 0.3, ref: 'SBD — Diretrizes de Câncer de Pele, 2023' }
          ]
        },
        {
          h: 'BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
          items: [
            { item: 'Formulou hipótese de CBC com base nos achados clínicos', score: 0.5, ref: 'SBD — Diretrizes de Câncer de Pele, 2023' },
            { item: 'Solicitou biópsia para confirmação histológica', score: 1.0, ref: 'SBD — Diretrizes de Câncer de Pele, 2023' }
          ]
        },
        {
          h: 'BLOCO 5 — CONDUTA E ORIENTAÇÃO AO PACIENTE',
          items: [
            { item: 'Encaminhou ao especialista (Dermatologia/Cirurgia Plástica) para tratamento cirúrgico adequado', score: 1.0, ref: 'SBD — Diretrizes de Câncer de Pele, 2023' },
            { item: 'Orientou fotoproteção (protetor FPS ≥ 30, chapéu, roupas, reaplicação)', score: 0.5, ref: 'SBD — Diretrizes de Câncer de Pele, 2023' },
            { item: 'Orientou rastreamento anual de toda a pele com dermatologista', score: 0.5, ref: 'SBD — Diretrizes de Câncer de Pele, 2023' },
            { item: 'Perguntou se o paciente tinha dúvidas ao final', score: 0.5, ref: 'CFM Res. 2.232/2019' }
          ]
        }
      ]
    }
  },


  // ─────────────────────────────────────────────────────────────────────────
  // CASO 2 — OXIURÍASE
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 2,
    title: 'Criança com coceira no ânus à noite há 3 semanas',
    sub: 'UBS — Atenção Primária',
    tema: 'Infectologia',
    topic: 'Oxiuríase',
    level: 'simples',
    cardAccent: '#43A047',
    instA: {
      scenario: 'Atenção Primária — UBS. Consultório, turno vespertino. A mãe traz o filho para consulta.',
      patient: 'T.A.S., 7 anos, masculino, escolar, trazido pela mãe D.A.S., 32 anos. Sem comorbidades conhecidas.',
      complaint: 'Mãe relata que o filho está com coceira intensa na região do ânus à noite há 3 semanas, dormindo mal e irritado.',
      tasks: [
        'Realize a anamnese dirigida ao caso (com a mãe como informante principal).',
        'Realize o exame físico pertinente na criança.',
        'Formule a hipótese diagnóstica e solicite o exame confirmatório adequado.',
        'Prescreva o tratamento correto para o caso.',
        'Oriente a mãe sobre o tratamento de contatos domiciliares e as medidas preventivas.'
      ]
    },
    instB: {
      vitals: {
        PA: '96/60 mmHg',
        FC: '88 bpm',
        FR: '20 irpm',
        Tax: '36,5 °C',
        Peso: '22 kg',
        Altura: '1,20 m',
        IMC: '15,3 kg/m²'
      },
      physicalGeneral: 'Bom estado geral, consciente, orientado, levemente agitado durante o exame, corado, hidratado, sem icterícia.',
      physicalSeg: 'ABDOME: plano, RHA presentes, normofonéticos, sem dor à palpação, sem visceromegalias | REGIÃO PERIANAL: escoriações perianais superficiais por coçagem; mucosa perianal discretamente eritematosa; sem fissuras, abscessos ou prolapso | PELE: sem lesões, sem prurigo estrófulo | GERAL: sem adenomegalias periféricas',
      labs: [
        { test: 'Método de Graham (fita gomada) — 3 amostras em dias alternados', val: 'Positivo: ovos operculados de Enterobius vermicularis visualizados na 1ª amostra', ref: 'Negativo', alt: true }
      ],
      image: null,
      note: 'Entregar sinais vitais ao início. Entregar resultado do método de Graham somente se o candidato solicitar este exame especificamente. Orientar que a coleta é feita pela manhã, antes do banho e da higiene perianal, com fita adesiva transparente pressionada na região perianal.',
      patientProfile: 'T.A.S., 7 anos, masculino, 2ª série do ensino fundamental. Mora com a mãe, pai e irmã de 5 anos. Frequenta escola pública. Mãe relata que a irmã também está coçando.',
      script: [
        { trigger: 'Queixa principal (mãe)', speech: 'Doutor, meu filho tá com uma coceira horrível aqui atrás, na região do bumbum, especialmente de noite. Já faz umas três semanas assim. Ele não tá conseguindo dormir direito.' },
        { trigger: 'Sobre o prurido (mãe)', speech: 'É de noite, principalmente. De dia ele fica bem, mas quando vai dormir começa a coçar. Uma noite eu fui ver e tinha umas coisinhas brancas pequeninhas se mexendo ali perto do ânus dele.' },
        { trigger: 'Sobre outros sintomas (mãe)', speech: 'Tá mais irritado, não tá querendo comer direito e tá com sono durante o dia. Mas febre não teve.' },
        { trigger: 'Sobre irmã (mãe)', speech: 'A irmã de 5 anos também tá coçando bastante. Acho que ela também tem.' },
        { trigger: 'Sobre a escola (mãe)', speech: 'Ele estuda em escola pública. A professora não avisou nada, mas ele tem vários amiguinhos.' },
        { trigger: 'Sobre higiene (mãe)', speech: 'Eu ensino eles a lavar as mãos, mas é criança né, esquece. Ele roe bastante a unhinha também.' },
        { trigger: 'Sobre tratamento anterior (mãe)', speech: 'Ainda não tratei, fui direto pro médico. Comprei um vermífugo genérico na farmácia mas ainda não dei porque queria perguntar pro senhor primeiro.' },
        { trigger: 'Pergunta ativa (mãe)', speech: 'É lombriga, doutor? Precisa de exame de fezes?' },
        { trigger: 'Pergunta ativa (mãe)', speech: 'Eu preciso tomar remédio também? E o marido e a outra filha?' }
      ],
      hiddenInfo: 'Irmã de 5 anos com prurido perianal semelhante há 2 semanas — só revela se o candidato perguntar especificamente sobre sintomas em outros membros da família | Pai e mãe também relatam prurido leve perianal à noite — só revela se perguntado sobre sintomas nos adultos da casa | Hábito de roer unhas na criança — só revela se perguntado sobre hábitos da criança',
      actorBehavior: 'Mãe colaborativa, levemente constrangida, com tom de cansaço por noites mal dormidas. Demonstra preocupação com o filho. Receptiva às orientações. Fica mais tranquila quando o candidato explica que a doença é comum, benigna e de fácil tratamento. A criança fica irrequieta durante o exame.'
    },
    instC: {
      diagnosis: 'Enterobíase (oxiuríase) em criança escolar, com transmissão domiciliar confirmada pela presença de sintomas em irmã (e possivelmente pais).',
      differentials: [
        'Candidíase perianal — prurido perianal com eritema; sem padrão noturno exclusivo; sem verminhas visíveis; mais comum em lactentes ou pacientes imunossuprimidos; tratamento com antifúngico tópico',
        'Dermatite de contato perianal — prurido sem padrão noturno, associado a sabonetes ou lenços umedecidos; sem ovos no método de Graham',
        'Outras helmintíases intestinais (Ascaris, Trichuris) — podem coexistir; geralmente sintomas mais sistêmicos; ovos diferentes no EPF; não causam prurido perianal noturno clássico',
        'Abuso sexual — deve ser considerado em qualquer criança com sintomas genitais ou perianais; afastado pela história clínica coerente e achado parasitológico positivo'
      ],
      context: 'Criança escolar com prurido perianal de predomínio noturno há 3 semanas, com relato materno de verminhas visíveis, escoriações perianais ao exame e método de Graham positivo. Transmissão domiciliar evidenciada pela irmã sintomática. Quadro clínico clássico de oxiuríase por Enterobius vermicularis.',
      justify: 'Enterobius vermicularis causa prurido perianal noturno intenso pois as fêmeas migram para a região perianal à noite para oviposição. O método de Graham (fita adesiva perianal coletada pela manhã antes do banho) é o exame de escolha — sensibilidade ~90% com 3 amostras. EPF é inadequado para diagnóstico pois os ovos raramente são encontrados nas fezes.',
      expectedAnamnesis: 'Caracterizar o prurido: horário (noturno = clássico), intensidade, início, evolução | Perguntar se a mãe/cuidador observou verminhas brancas na região perianal | Investigar sintomas em outros membros da família (transmissão domiciliar é regra) | Perguntar sobre frequência escolar e contatos com crianças | Investigar hábitos de higiene: lavar mãos antes das refeições, roer unhas, coçar e levar à boca | Investigar outros sintomas: irritabilidade, insônia, dor abdominal, anorexia | Perguntar sobre tratamentos anteriores',
      expectedPhysical: 'Avaliar estado geral da criança | Examinar a região perianal: eritema, escoriações, presença visível de parasitas | Exame abdominal: geralmente normal | Pesquisar sinais de desnutrição | Avaliar higiene das unhas',
      expectedExams: [
        { exam: 'Método de Graham (fita gomada/Scotch tape test)', justify: 'Exame de escolha para enterobíase — ovos raramente aparecem em EPF; coleta perianal pela manhã antes do banho, por 3 dias alternados', expected: 'Ovos operculados de E. vermicularis — confirma diagnóstico' },
        { exam: 'EPF (exame parasitológico de fezes) — opcional', justify: 'Baixa sensibilidade para E. vermicularis; indicado se suspeita de co-infestação com outros helmintos', expected: 'Geralmente negativo para E. vermicularis' }
      ],
      expectedConduct: 'Farmacológica: Albendazol 400mg VO dose única (crianças > 2 anos e adultos) OU Mebendazol 100mg VO dose única — REPETIR após 2 semanas (destrói os adultos mas não os ovos; 2ª dose elimina os que eclodiram); TRATAR TODOS OS CONTATOS DOMICILIARES SIMULTANEAMENTE (mãe, pai, irmã) independentemente de sintomas — regra fundamental | Não farmacológica: Higiene das mãos com frequência, especialmente antes das refeições e após o banho; cortar as unhas rentes; trocar e lavar a roupa de cama, pijamas e roupas íntimas com água quente (>60°C) no dia do tratamento; não sacudir roupas de cama (dispersa ovos) | Orientações: Explicar o ciclo do parasita (transmissão fecal-oral, autoinfestação); reforçar que a doença é muito comum em escolares e não significa descuido; orientar escola se necessário | Seguimento: Retorno em 4 semanas; repetir tratamento se persistência de sintomas',
      expectedCommunication: 'Apresentar-se pelo nome | Explicar o diagnóstico de forma acessível ("são uns verminhos muito comuns em crianças da escola") sem causar constrangimento | Orientar claramente sobre a necessidade de tratar TODOS os membros da família ao mesmo tempo | Ensinar a técnica do método de Graham para próximas pesquisas | Perguntar se tem dúvidas',
      criticalErrors: [
        'Solicitar apenas EPF sem método de Graham — baixíssima sensibilidade para E. vermicularis; erro diagnóstico',
        'Tratar apenas a criança sem tratar todos os contatos domiciliares — garante reinfestação e falha terapêutica',
        'Não orientar a segunda dose após 2 semanas — dose única não elimina os ovos, recidiva certa',
        'Diagnosticar "lombriga" (Ascaris) e prescrever tratamento inadequado sem solicitar exame confirmatório',
        'Não orientar medidas de higiene (lavagem de roupas, corte de unhas) — ciclo de transmissão não é interrompido'
      ]
    },
    instD: {
      title: 'CHECKLIST — CRIANÇA COM COCEIRA PERIANAL À NOITE (OXIURÍASE)',
      sections: [
        {
          h: 'BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE',
          items: [
            { item: 'Apresentou-se ao paciente e à mãe', score: 0.5, ref: 'CFM Res. 2.232/2019' },
            { item: 'Comunicou o diagnóstico sem causar constrangimento, usando linguagem acessível', score: 0.5, ref: 'PNAB/MS 2017' }
          ]
        },
        {
          h: 'BLOCO 2 — ANAMNESE',
          items: [
            { item: 'Caracterizou o prurido perianal de predomínio noturno', score: 0.5, ref: 'Protocolo MS Helmintíases, 2022' },
            { item: 'Perguntou sobre visualização de verminhas brancas na região perianal', score: 0.5, ref: 'Protocolo MS Helmintíases, 2022' },
            { item: 'Investigou sintomas em todos os membros da família', score: 1.0, ref: 'Protocolo MS Helmintíases, 2022' },
            { item: 'Questionou hábitos de higiene (lavar mãos, roer unhas)', score: 0.3, ref: 'Protocolo MS Helmintíases, 2022' }
          ]
        },
        {
          h: 'BLOCO 3 — EXAME FÍSICO',
          items: [
            { item: 'Realizou exame da região perianal e identificou escoriações/eritema', score: 0.5, ref: 'Protocolo MS Helmintíases, 2022' },
            { item: 'Avaliou estado geral e nutricional da criança', score: 0.3, ref: 'Protocolo MS Helmintíases, 2022' }
          ]
        },
        {
          h: 'BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
          items: [
            { item: 'Solicitou método de Graham (fita gomada) como exame de escolha', score: 1.0, ref: 'Protocolo MS Helmintíases, 2022' },
            { item: 'Não solicitou apenas EPF como único exame diagnóstico', score: 0.5, ref: 'Protocolo MS Helmintíases, 2022' }
          ]
        },
        {
          h: 'BLOCO 5 — CONDUTA E ORIENTAÇÃO',
          items: [
            { item: 'Prescreveu Albendazol 400mg ou Mebendazol 100mg dose única', score: 0.5, ref: 'Protocolo MS Helmintíases, 2022' },
            { item: 'Orientou repetição do tratamento após 2 semanas', score: 0.5, ref: 'Protocolo MS Helmintíases, 2022' },
            { item: 'Prescreveu tratamento para TODOS os contatos domiciliares simultaneamente', score: 1.0, ref: 'Protocolo MS Helmintíases, 2022' },
            { item: 'Orientou medidas de higiene (roupas de cama, unhas, lavagem de mãos)', score: 0.5, ref: 'Protocolo MS Helmintíases, 2022' },
            { item: 'Perguntou se havia dúvidas ao final', score: 0.5, ref: 'CFM Res. 2.232/2019' }
          ]
        }
      ]
    }
  },


  // ─────────────────────────────────────────────────────────────────────────
  // CASO 3 — TALASSEMIA ALPHA
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 3,
    title: 'Anemia persistente sem melhora com sulfato ferroso há 4 meses',
    sub: 'UBS — Atenção Primária',
    tema: 'Hematologia',
    topic: 'Talassemia Alpha',
    level: 'moderado',
    cardAccent: '#E53935',
    instA: {
      scenario: 'Atenção Primária — UBS. Consultório, turno matutino.',
      patient: 'C.K.L., 26 anos, feminino, descendente de japoneses, recepcionista, encaminhada por anemia microcítica hipocrômica sem resposta ao sulfato ferroso após 4 meses de tratamento.',
      complaint: 'Cansaço e palidez desde a adolescência. Tratou anemia com sulfato ferroso por 4 meses sem melhora dos exames.',
      tasks: [
        'Realize a anamnese dirigida ao caso.',
        'Realize o exame físico pertinente.',
        'Solicite os exames complementares adequados para elucidar a causa da anemia.',
        'Formule a hipótese diagnóstica e os diferenciais.',
        'Oriente a paciente sobre o diagnóstico, as implicações clínicas e o aconselhamento genético.'
      ]
    },
    instB: {
      vitals: {
        PA: '108/68 mmHg',
        FC: '82 bpm',
        FR: '16 irpm',
        Tax: '36,4 °C',
        Peso: '55 kg',
        Altura: '1,58 m',
        IMC: '22,0 kg/m²'
      },
      physicalGeneral: 'Regular estado geral, consciente, orientada, levemente hipocorada (+/4+), sem icterícia, hidratada, sem linfadenomegalias.',
      physicalSeg: 'CARDIOVASCULAR: bulhas rítmicas, normofonéticas, sem sopros, FC 82 bpm | RESPIRATÓRIO: MV presente bilateralmente, sem ruídos adventícios | ABDOME: baço palpável a 2 cm abaixo do rebordo costal esquerdo (esplenomegalia leve), fígado no limite superior, indolor | GERAL: hipocoramento de conjuntivas palpebral. Fácies e estrutura óssea normais. Sem hepatomegalia significativa.',
      labs: [
        { test: 'Hemoglobina', val: '9,8 g/dL', ref: '12,0–16,0 g/dL', alt: true },
        { test: 'Hematócrito', val: '32%', ref: '37–47%', alt: true },
        { test: 'VCM (Volume Corpuscular Médio)', val: '66 fL', ref: '80–100 fL', alt: true },
        { test: 'HCM (Hemoglobina Corpuscular Média)', val: '21 pg', ref: '27–33 pg', alt: true },
        { test: 'RDW (Índice de Anisocitose)', val: '14,2%', ref: '11,5–14,5%', alt: false },
        { test: 'Leucócitos', val: '6.800/mm³', ref: '4.000–11.000/mm³', alt: false },
        { test: 'Plaquetas', val: '320.000/mm³', ref: '150.000–400.000/mm³', alt: false },
        { test: 'Ferro sérico', val: '82 µg/dL', ref: '60–160 µg/dL', alt: false },
        { test: 'Ferritina', val: '48 ng/mL', ref: '12–150 ng/mL', alt: false },
        { test: 'CTLF (Capacidade Total de Ligação do Ferro)', val: '290 µg/dL', ref: '250–370 µg/dL', alt: false },
        { test: 'Eletroforese de hemoglobina — HbA', val: '97,2%', ref: '95–98%', alt: false },
        { test: 'Eletroforese de hemoglobina — HbA2', val: '2,1%', ref: '2,2–3,5%', alt: true },
        { test: 'Eletroforese de hemoglobina — HbF', val: '0,7%', ref: '< 2%', alt: false },
        { test: 'Reticulócitos', val: '2,8%', ref: '0,5–2,5%', alt: true },
        { test: 'Bilirrubina indireta', val: '1,8 mg/dL', ref: '< 1,0 mg/dL', alt: true }
      ],
      image: 'Esfregaço de sangue periférico: hemácias microcíticas hipocrômicas com anisocitose leve, poiquilocitose discreta (eliptócitos, dianocítos/hemácias em alvo), sem corpúsculos de Heinz visíveis.',
      note: 'Entregar sinais vitais ao início. Entregar hemograma e perfil de ferro somente se solicitados. Entregar eletroforese de hemoglobina somente se o candidato solicitar especificamente este exame. Entregar esfregaço de sangue periférico somente se o candidato solicitar. O candidato deve ser pontuado por solicitar eletroforese de Hb e perfil de ferro — esses exames são fundamentais para diferenciar talassemia de deficiência de ferro.',
      patientProfile: 'C.K.L., 26 anos, feminino, descendente de japoneses (avós imigrantes), solteira, sem filhos no momento. Gestação planejada para o próximo ano. Nega tabagismo e etilismo. Faz uso de sulfato ferroso 40mg de Fe elementar 2x/dia há 4 meses sem melhora dos sintomas ou exames.',
      script: [
        { trigger: 'Queixa principal', speech: 'Doutora, eu tenho anemia desde que era adolescente. O médico me passou sulfato ferroso faz 4 meses, mas o exame continua alterado. Tô cansada, com falta de ar quando subo escada.' },
        { trigger: 'Sobre a história da anemia', speech: 'Minha mãe sempre me disse que eu tinha "anemia", mas nunca investigaram muito. Tomei ferro na adolescência algumas vezes, mas parava e voltava a mesma coisa.' },
        { trigger: 'Sobre sintomas', speech: 'Tenho cansaço fácil, às vezes palpitação quando forço bastante. Nada que me impede de trabalhar, mas percebo que fico mais cansada que as outras pessoas.' },
        { trigger: 'Sobre origem e família', speech: 'Meus avós são japoneses, vieram pro Brasil na época da guerra. Minha mãe também é pálida sempre, mas nunca tratou nada.' },
        { trigger: 'Sobre menstruação e perdas sanguíneas', speech: 'Minha menstruação é regular, dura uns 4 dias, fluxo normal. Não tenho nenhum sangramento anormal.' },
        { trigger: 'Sobre alimentação', speech: 'Me alimento bem, como bastante carne vermelha, feijão, verduras. Não sou vegetariana.' },
        { trigger: 'Sobre gravidez planejada', speech: 'Tô pensando em engravidar no próximo ano. O meu namorado é japonês também, da mesma família imigrante.' },
        { trigger: 'Pergunta ativa', speech: 'Por que o ferro não tá resolvendo, doutora? Tenho que continuar tomando?' },
        { trigger: 'Pergunta ativa', speech: 'Isso é hereditário? Posso passar pro meu filho?' }
      ],
      hiddenInfo: 'Mãe também tem anemia microcítica crônica sem diagnóstico definitivo — só revela se o candidato perguntar sobre história familiar de anemia | Namorado é descendente de japoneses e a paciente planeja engravidar — só revela se o candidato perguntar sobre projetos de gestação ou parceiro | Nunca fez eletroforese de hemoglobina previamente — só revela se o candidato perguntar sobre exames anteriores já realizados',
      actorBehavior: 'Paciente tranquila, curiosa e inteligente. Bem informada. Demonstra frustração com a falta de diagnóstico apesar dos anos de anemia. Bastante receptiva a explicações detalhadas. Fica preocupada ao ouvir que pode passar a condição para o filho — necessita de abordagem empática sobre aconselhamento genético.'
    },
    instC: {
      diagnosis: 'Talassemia alpha (portadora — traço talassêmico alpha, provável genótipo --/αα ou -α/-α): anemia microcítica hipocrômica com ferritina normal, HbA2 levamente reduzida e ausência de resposta ao ferro. Esplenomegalia leve por hemólise compensada.',
      differentials: [
        'Anemia ferropriva — diferenciada pela ferritina e ferro sérico normais; ausência de resposta ao sulfato ferroso; padrão de eletroforese diferente (na ferropriva, HbA2 pode estar falsamente reduzida — importante interpretar após reposição)',
        'Talassemia beta menor — microcitose similar; mas HbA2 ≥ 3,5% (está reduzida/normal aqui); apresentação clínica semelhante; diferenciada pela eletroforese e teste genético',
        'Anemia de doença crônica — ferritina geralmente elevada, ferro sérico baixo, CTLF reduzida; afastada pelo perfil do ferro normal',
        'Hemoglobinopatia S (traço falciforme) — afastada pela eletroforese sem HbS detectada'
      ],
      context: 'Jovem descendente de japoneses com anemia microcítica crônica desde a adolescência, sem resposta a 4 meses de sulfato ferroso, com perfil de ferro normal (ferritina 48, ferro sérico 82, CTLF 290), HbA2 levemente reduzida (2,1%), esplenomegalia leve, bilirrubina indireta levemente elevada e reticulocitose discreta sugerindo hemólise compensada. Quadro típico de traço talassêmico alpha com hemólise leve.',
      justify: 'Na talassemia alpha, a redução da síntese das cadeias alpha resulta em microcitose/hipocromia. Diferente da talassemia beta, a HbA2 é normal ou REDUZIDA (pois HbA2 também depende das cadeias alpha). Ferritina e ferro sérico normais afastam ferropenia. O diagnóstico definitivo requer PCR/genótipo para identificar o número de deleções (--/αα = 2 deleções; -α/-α = 2 deleções em trans). A paciente deve ser encaminhada para hematologista e a INTERRUPÇÃO do sulfato ferroso é necessária (ferro não indicado e pode ser prejudicial).',
      expectedAnamnesis: 'Investigar início da anemia e histórico de tratamentos anteriores | Perguntar sobre resposta prévia ao sulfato ferroso | Investigar história menstrual (perdas sanguíneas) | Investigar alimentação (dieta equilibrada vs. vegetarianismo) | Perguntar sobre histórico familiar de anemia (mãe, irmãos, avós) | Investigar origem étnica (asiáticos, mediterrâneos, africanos têm maior prevalência de talassemia) | Perguntar sobre projetos de gestação e parceiro | Investigar sintomas de hemólise: icterícia, colúria, litíase biliar',
      expectedPhysical: 'Avaliar estado geral e grau de anemia (palidez de mucosas) | Pesquisar icterícia (hemólise) | Examinar abdome: esplenomegalia (hemólise compensada) | Pesquisar hepatomegalia | Avaliar fácies talassêmica (deformidade óssea craniofacial — mais evidente na talassemia major) | Auscultar coração (sopro anêmico)',
      expectedExams: [
        { exam: 'Eletroforese de hemoglobina (HPLC)', justify: 'Fundamental para diferenciação das hemoglobinopatias; na talassemia alpha: HbA2 normal ou reduzida; na talassemia beta: HbA2 ≥ 3,5%', expected: 'HbA2 2,1% (reduzida) — padrão talassemia alpha' },
        { exam: 'Perfil de ferro (ferritina, ferro sérico, CTLF)', justify: 'Diferencia anemia ferropriva de talassemia — crucial para evitar reposição de ferro desnecessária', expected: 'Ferritina e ferro sérico normais — descarta ferropenia' },
        { exam: 'Esfregaço de sangue periférico', justify: 'Caracteriza a morfologia eritrocitária: microcitose, hipocromia, hemácias em alvo, eliptócitos', expected: 'Microcitose hipocrômica, dianocítos (hemácias em alvo), eliptócitos' },
        { exam: 'Pesquisa molecular (PCR/genótipo) — encaminhar', justify: 'Confirma número de deleções no gene alpha (para aconselhamento genético preciso)', expected: 'Encaminhar ao hematologista' }
      ],
      expectedConduct: 'Farmacológica: SUSPENDER o sulfato ferroso — não está indicado na talassemia (ferro sérico e ferritina são normais; suplementação de ferro sem indicação pode causar hemocromatose) | Ácido fólico 5mg/dia pode ser prescrito (suporte eritropoético em hemólise compensada) | Não farmacológica: Encaminhamento para Hematologia para confirmação diagnóstica (teste molecular) e seguimento | Aconselhamento genético: se a paciente e o parceiro são ambos portadores de deleções alpha (ambos descendentes de asiáticos), existe risco de 25% de doença de HbH ou 25% de hidropsia fetal nos filhos — encaminhar ao geneticista | Orientações: Explicar que talassemia alpha traço é geralmente benigna e compatível com vida normal; não requer tratamento específico; informar sobre importância de testar o parceiro antes de engravidar | Seguimento: hematologista; hemograma semestral; aconselhamento genético antes de gestação',
      expectedCommunication: 'Apresentar-se pelo nome | Explicar de forma clara que o diagnóstico não é deficiência de ferro — portanto o ferro não ajuda e pode ser prejudicial | Explicar o que é talassemia em linguagem acessível | Abordar com sensibilidade o risco de transmissão aos filhos, reforçando a necessidade de testar o parceiro antes da gravidez | Perguntar se tem dúvidas',
      criticalErrors: [
        'Manter ou aumentar a dose de sulfato ferroso sem investigar a causa da ausência de resposta — pode causar sobrecarga de ferro',
        'Não solicitar eletroforese de hemoglobina na investigação de anemia microcítica refratária ao ferro',
        'Não orientar aconselhamento genético para paciente em planejamento de gestação (risco de forma grave nos filhos)',
        'Interpretar HbA2 reduzida como normal sem contextualizar com o quadro de talassemia alpha',
        'Não encaminhar ao hematologista para diagnóstico molecular definitivo'
      ]
    },
    instD: {
      title: 'CHECKLIST — ANEMIA SEM RESPOSTA AO FERRO (TALASSEMIA ALPHA)',
      sections: [
        {
          h: 'BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE',
          items: [
            { item: 'Apresentou-se pelo nome à paciente', score: 0.5, ref: 'CFM Res. 2.232/2019' },
            { item: 'Explicou de forma clara a diferença entre anemia ferropriva e talassemia', score: 0.5, ref: 'Diretrizes ABH — Talassemias, 2020' }
          ]
        },
        {
          h: 'BLOCO 2 — ANAMNESE',
          items: [
            { item: 'Investigou resposta ao tratamento prévio com sulfato ferroso', score: 0.5, ref: 'Diretrizes ABH — Talassemias, 2020' },
            { item: 'Pesquisou história familiar de anemia (mãe, avós)', score: 0.5, ref: 'Diretrizes ABH — Talassemias, 2020' },
            { item: 'Investigou origem étnica (asiáticos, mediterrâneos)', score: 0.5, ref: 'Diretrizes ABH — Talassemias, 2020' },
            { item: 'Perguntou sobre planejamento de gestação e origem étnica do parceiro', score: 0.5, ref: 'Diretrizes ABH — Talassemias, 2020' }
          ]
        },
        {
          h: 'BLOCO 3 — EXAME FÍSICO',
          items: [
            { item: 'Avaliou palidez de mucosas e icterícia discreta (hemólise)', score: 0.5, ref: 'Diretrizes ABH — Talassemias, 2020' },
            { item: 'Pesquisou esplenomegalia à palpação abdominal', score: 0.5, ref: 'Diretrizes ABH — Talassemias, 2020' }
          ]
        },
        {
          h: 'BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
          items: [
            { item: 'Solicitou perfil de ferro (ferritina, ferro sérico, CTLF) para diferenciar de ferropenia', score: 1.0, ref: 'Diretrizes ABH — Talassemias, 2020' },
            { item: 'Solicitou eletroforese de hemoglobina (HPLC)', score: 1.0, ref: 'Diretrizes ABH — Talassemias, 2020' },
            { item: 'Interpretou HbA2 reduzida como sugestiva de talassemia alpha', score: 0.5, ref: 'Diretrizes ABH — Talassemias, 2020' }
          ]
        },
        {
          h: 'BLOCO 5 — CONDUTA E ORIENTAÇÃO',
          items: [
            { item: 'Suspendeu o sulfato ferroso (não indicado com ferritina e ferro normais)', score: 1.0, ref: 'Diretrizes ABH — Talassemias, 2020' },
            { item: 'Encaminhou ao hematologista para diagnóstico molecular e seguimento', score: 0.5, ref: 'Diretrizes ABH — Talassemias, 2020' },
            { item: 'Orientou sobre aconselhamento genético antes da gestação', score: 0.5, ref: 'Diretrizes ABH — Talassemias, 2020' },
            { item: 'Perguntou se a paciente tinha dúvidas', score: 0.5, ref: 'CFM Res. 2.232/2019' }
          ]
        }
      ]
    }
  },


  // ─────────────────────────────────────────────────────────────────────────
  // CASO 4 — AVC HEMORRÁGICO (AVEH)
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 4,
    title: 'Cefaleia súbita e fraqueza no hemicorpo direito',
    sub: 'UPA — Urgência e Emergência',
    tema: 'Emergencias Neurologicas',
    topic: 'AVC Hemorrágico',
    level: 'complexo',
    cardAccent: '#FF7043',
    instA: {
      scenario: 'Urgência e Emergência — UPA. Sala de emergência, turno matutino. Paciente chega trazido pela esposa.',
      patient: 'R.F.B., 58 anos, masculino, comerciante, hipertenso há 10 anos, em uso irregular de losartana, tabagista 20 maços-ano.',
      complaint: 'Esposa refere que o marido teve cefaleia súbita muito intensa há 1 hora, com fraqueza no lado direito do corpo e dificuldade para falar.',
      tasks: [
        'Realize a anamnese dirigida ao caso (com o paciente e a esposa como informantes).',
        'Realize o exame físico neurológico e geral pertinente.',
        'Calcule o escore NIHSS de forma simplificada e interprete.',
        'Solicite os exames complementares imediatos adequados à hipótese diagnóstica.',
        'Proponha a conduta terapêutica inicial baseada no diagnóstico de imagem.',
        'Oriente a família sobre o diagnóstico, a gravidade e os próximos passos.'
      ]
    },
    instB: {
      vitals: {
        PA: '218/124 mmHg',
        FC: '96 bpm',
        FR: '20 irpm',
        Tax: '37,0 °C',
        Peso: '88 kg',
        Altura: '1,74 m',
        IMC: '29,1 kg/m²'
      },
      physicalGeneral: 'Regular estado geral, torporoso (Glasgow 12 — O3V4M5), sudoreico, com desvio de comissura labial à direita visível.',
      physicalSeg: 'NEUROLÓGICO: nível de consciência reduzido (GCS 12); afasia motora (fala reduzida, palavras isoladas); pupilas isocóricas (4mm) fotorreagentes bilateralmente; desvio do olhar conjugado para a ESQUERDA; paralisia facial central à direita; hemiparesia direita — força 2/5 em membro superior e 3/5 em membro inferior; reflexo cutâneoplantar em extensão (Babinski) à direita; sensibilidade difícil de avaliar | CARDIOVASCULAR: bulhas rítmicas normofonéticas, sem sopros; FC 96 bpm | RESPIRATÓRIO: MV presente bilateralmente, sem ruídos adventícios; FR 20 irpm | ABDOME: sem alterações relevantes',
      labs: [
        { test: 'Glicemia capilar (HGT)', val: '142 mg/dL', ref: '70–99 mg/dL', alt: true },
        { test: 'Hemograma — Hemoglobina', val: '14,8 g/dL', ref: '13,5–17,5 g/dL', alt: false },
        { test: 'Hemograma — Plaquetas', val: '198.000/mm³', ref: '150.000–400.000/mm³', alt: false },
        { test: 'TP/INR', val: '1,1', ref: '0,8–1,2', alt: false },
        { test: 'TTPA', val: '32 s', ref: '25–35 s', alt: false },
        { test: 'Creatinina', val: '1,2 mg/dL', ref: '0,7–1,2 mg/dL', alt: false },
        { test: 'Sódio', val: '138 mEq/L', ref: '136–145 mEq/L', alt: false }
      ],
      image: 'TC de crânio SEM contraste (resultado imediato — entregar se o candidato solicitar TC de crânio): Hiperdensidade espontânea em núcleo lentiforme esquerdo (putame), compatível com hematoma hipertensivo. Volume estimado ~35 mL (Fórmula ABC/2). Desvio de linha média de 5 mm para a direita. Edema perilesional discreto. Sem hidrocefalia obstrutiva. Sem herniação uncal visível.',
      note: 'Entregar sinais vitais ao início. Entregar HGT ao início. Entregar demais labs se solicitados. Entregar a TC de crânio SOMENTE se o candidato solicitar TC de crânio SEM contraste (não entregar se solicitar apenas "exames de imagem" sem especificar, e NÃO entregar se o candidato solicitar trombolítico antes de ver a imagem — este é o erro crítico do caso). ATENÇÃO: Se o candidato solicitar alteplase/rtPA antes da TC, informar que não foi coletada a imagem ainda e aguardar a conduta do candidato.',
      patientProfile: 'R.F.B., 58 anos, masculino, comerciante, casado, 2 filhos. Hipertenso há 10 anos — usa losartana 50mg mas toma irregular ("só quando lembra"). Tabagista 20 maços-ano. Nega diabetes e cardiopatia. Nega uso de anticoagulantes.',
      script: [
        { trigger: 'Esposa — relato inicial', speech: 'Doutor, meu marido tava tomando café da manhã quando de repente ele falou que tinha uma dor de cabeça horrível, a pior da vida dele. Aí eu vi que o canto da boca dele tava torto e ele começou a arrastar a fala. Trouxe correndo.' },
        { trigger: 'Paciente — queixa (afasia)', speech: '(Fala apenas palavras soltas, com dificuldade) "Cabeça... dói muito... braço... não mexe..."' },
        { trigger: 'Esposa — sobre a cefaleia', speech: 'A dor de cabeça foi de uma hora pra outra, do nada. Ele nunca teve dor de cabeça assim antes. Falou que era como se tivesse levado uma pancada.' },
        { trigger: 'Esposa — sobre os medicamentos', speech: 'Ele tem pressão alta faz anos, mas toma o remédio de vez em quando só. Semana passada foi ao cardiologista e a pressão tava 200 e alguma coisa.' },
        { trigger: 'Esposa — sobre anticoagulantes', speech: 'Não toma nenhum remédio pra afinar o sangue. Só losartana.' },
        { trigger: 'Esposa — sobre tempo de início', speech: 'Faz exatamente uma hora, eu olhei no relógio porque fiquei desesperada.' },
        { trigger: 'Esposa — pergunta ativa', speech: 'Doutor, é derrame? Vai ficar assim? Precisa de cirurgia?' },
        { trigger: 'Esposa — pergunta ativa', speech: 'Pode dar aquela injeção que dissolve o coágulo? Vi na internet que existe um remédio assim.' }
      ],
      hiddenInfo: 'Uso irregular da losartana — toma "só quando lembra", última dose há 3 dias — só revela se o candidato perguntar especificamente sobre adesão ao anti-hipertensivo | Episódio de cefaleia intensa 2 semanas atrás que passou sozinha (possível "sentinel headache" de sangramento menor) — só revela se o candidato perguntar sobre episódios anteriores semelhantes | Sem histórico de AVC ou TIA prévios — revela se perguntado',
      actorBehavior: 'Esposa muito ansiosa e assustada, chora durante a consulta. Fornece as informações com clareza quando questionada objetivamente. Fica mais tranquila se o candidato demonstrar que está agindo rapidamente. Pode questionar sobre o uso de trombolítico por ter visto na internet — candidato deve explicar a contraindicação após TC confirmar sangramento. O paciente é colaborativo mas com afasia motora — fala apenas palavras isoladas.'
    },
    instC: {
      diagnosis: 'AVC hemorrágico (AVEH) hipertensivo — hematoma intraparenquimatoso em núcleo lentiforme esquerdo (putame), volume ~35 mL, com desvio de linha média de 5 mm. Hipertensão arterial não controlada como etiologia principal.',
      differentials: [
        'AVC isquêmico — quadro neurológico focal agudo idêntico; distinguido pela TC de crânio SEM contraste (hiperdensidade = sangue = hemorrágico; hipodensidade tardia = isquêmico); A TROMBOLÍSE É CONTRAINDICADA NO AVEH',
        'Hemorragia subaracnoide (HSA) — cefaleia em trovoada; sangue nas cisternas basais e na fissura silviana; geralmente sem déficit motor focal inicial; TC mostra hiperdensidade diferente (difusa, subaracnoide)',
        'Crise epiléptica seguida de paralisia de Todd — deficit motor pós-ictal transitório; geralmente sem cefaleia in trovão; afastado pela neuroimagem',
        'Encefalopatia hipertensiva — alteração difusa de consciência, cefaleia, vômitos; sem déficit focal; PRES na RM; PA muito elevada; afastado pelo achado focal na TC'
      ],
      context: 'Homem de 58 anos, hipertenso não controlado (PA 218/124), tabagista, em uso irregular de anti-hipertensivo, com instalação hiperaguda de déficit neurológico focal (hemiparesia direita, afasia motora, desvio conjugado do olhar à esquerda, paralisia facial central direita) e cefaleia explosiva. TC de crânio confirma hematoma intraparenquimatoso em putame esquerdo com desvio de linha média de 5 mm — padrão típico de AVEH hipertensivo.',
      justify: 'Localização putaminal é a mais comum no AVEH hipertensivo (40–50% dos casos), seguida por tálamo, cerebelo e tronco cerebral. Volume > 30 mL em hematoma supratentorial com desvio de LM > 3 mm indica risco aumentado de herniação e é critério de discussão neurocirúrgica. NIHSS estimado: nível consciência (1) + desvio do olhar (2) + paralisia facial (1) + motor braço D (3) + motor perna D (2) + afasia (2) = ~11 pontos (déficit moderado-grave). Trombolíticos são absolutamente contraindicados no AVEH.',
      expectedAnamnesis: 'Investigar início (tempo exato desde o início dos sintomas) e modo de instalação (súbito = vascular) | Caracterizar sintomas: cefaleia (intensidade, "pior da vida"), déficit motor, alteração da fala | Perguntar sobre HAS e controle — adesão ao tratamento | Investigar uso de anticoagulantes, antiagregantes, cocaína/anfetaminas (causas de AVEH em jovens) | Perguntar sobre AVC/TIA prévios | Investigar tabagismo, diabetes, cardiopatia | Questionar episódios sentinela (cefaleia recente)',
      expectedPhysical: 'Avaliar nível de consciência (GCS/escala de alerta) | Calcular NIHSS simplificado: consciência, olhar, campos visuais, paralisia facial, motor MMSS e MMII, ataxia, sensibilidade, linguagem/afasia, disartria, extinção | Avaliar pupilas (midriana unilateral = sinal de herniação uncal iminente) | Verificar sinais vitais com ênfase na PA | Auscultar coração (FA como causa de AVC isquêmico) | Fundoscopia (papiledema = HIC)',
      expectedExams: [
        { exam: 'TC de crânio SEM contraste (URGENTE)', justify: 'Exame de imagem de escolha e obrigatório imediato — diferencia AVEH de AVCi ANTES de qualquer decisão terapêutica; disponível e rápido', expected: 'Hiperdensidade putaminal esquerda — hematoma hipertensivo ~35 mL, desvio de LM 5 mm' },
        { exam: 'Glicemia capilar (HGT)', justify: 'Hipoglicemia e hiperglicemia podem mimetizar déficit neurológico focal; deve ser coletada na chegada', expected: '142 mg/dL — discreta hiperglicemia de estresse' },
        { exam: 'Coagulograma (TP/INR, TTPA, plaquetas)', justify: 'Avaliar coagulopatia que possa expandir o hematoma; necessário antes de qualquer intervenção', expected: 'Normal — sem coagulopatia' },
        { exam: 'Hemograma, creatinina, eletrólitos', justify: 'Avaliação geral e suporte à conduta clínica', expected: 'Dentro da normalidade' }
      ],
      expectedConduct: 'Monitorização e suporte: Monitorização contínua (ECG, PA não invasiva, SatO2, glicemia); acesso venoso calibroso; cabeceira a 30°; oxigenoterapia se SatO2 < 95%; evitar glicose hipotônica | Controle pressórico: Meta PA ≤ 140/90 mmHg nas primeiras 24h (evidência CLASS IIa para hematoma sem HIC grave); Labetalol IV 20 mg em bolus (não disponível no SUS → Nitroprussiato de sódio 0,5–8 mcg/kg/min) — CUIDADO: hipotensão abrupta piora perfusão perihematoma | Avaliar indicação neurocirúrgica: Volume > 30 mL + desvio LM > 3 mm em paciente jovem com GCS < 8 ou deterioração clínica = discutir com neurocirurgia; escore ICH Score para prognóstico | CONTRAINDICADO: alteplase/rtPA (trombolítico) — absolutamente contraindicado em AVEH confirmado | Profilaxia: antiepiléptico profilático não é rotina (mas tratar crises se ocorrerem); profilaxia de TVP com compressão pneumática; controle glicêmico; prevenção de úlceras | Encaminhamento: UTI neurológica; comunicar neurocirurgia; contato com serviço de referência (SAMU/remoção se necessário) | Orientação familiar: comunicar diagnóstico com clareza; explicar impossibilidade do uso de trombolítico por ser sangramento (não coágulo); orientar sobre prognóstico guardado',
      expectedCommunication: 'Apresentar-se pelo nome | Comunicar o diagnóstico de "derrame cerebral por sangramento" de forma clara à esposa | Explicar objetivamente POR QUÊ o trombolítico não pode ser usado — é sangramento, não coágulo | Demonstrar empatia sem gerar desespero | Explicar que está sendo tomando todas as medidas necessárias | Perguntar se tem dúvidas',
      criticalErrors: [
        'Prescrever alteplase (rtPA) sem realizar TC de crânio — ERRO FATAL: trombolítico em AVEH causa expansão do hematoma e morte',
        'Não solicitar TC de crânio de forma emergencial ao chegar um AVC agudo',
        'Não controlar a pressão arterial (PA 218/124 mmHg sem tratamento favorece expansão do hematoma)',
        'Não calcular GCS ou avaliar o nível de consciência (fundamental para estadiamento e decisão neurocirúrgica)',
        'Não comunicar a neurocirurgia (volume > 30 mL com desvio de LM requer avaliação especializada urgente)'
      ]
    },
    instD: {
      title: 'CHECKLIST — CEFALEIA SÚBITA E HEMIPARESIA (AVEH)',
      sections: [
        {
          h: 'BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE',
          items: [
            { item: 'Apresentou-se ao paciente e à esposa', score: 0.5, ref: 'CFM Res. 2.232/2019' },
            { item: 'Comunicou o diagnóstico à família com clareza, explicando por que o trombolítico não pode ser usado', score: 0.5, ref: 'Diretriz AVC SBN/ABN, 2020' }
          ]
        },
        {
          h: 'BLOCO 2 — ANAMNESE',
          items: [
            { item: 'Definiu o tempo de início dos sintomas (fundamental para triagem terapêutica)', score: 0.5, ref: 'Diretriz AVC SBN/ABN, 2020' },
            { item: 'Investigou uso de anticoagulantes e anti-hipertensivos (adesão)', score: 0.5, ref: 'Diretriz AVC SBN/ABN, 2020' },
            { item: 'Perguntou sobre HAS e controle pressórico prévio', score: 0.5, ref: 'Diretriz AVC SBN/ABN, 2020' }
          ]
        },
        {
          h: 'BLOCO 3 — EXAME FÍSICO',
          items: [
            { item: 'Avaliou nível de consciência (GCS)', score: 0.5, ref: 'Diretriz AVC SBN/ABN, 2020' },
            { item: 'Realizou exame neurológico focal (motor, pupilas, olhar, facial, fala)', score: 1.0, ref: 'Diretriz AVC SBN/ABN, 2020' },
            { item: 'Coletou HGT/glicemia capilar', score: 0.5, ref: 'Diretriz AVC SBN/ABN, 2020' }
          ]
        },
        {
          h: 'BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
          items: [
            { item: 'Solicitou TC de crânio SEM contraste de forma emergencial', score: 1.0, ref: 'Diretriz AVC SBN/ABN, 2020' },
            { item: 'Identificou o AVEH pela TC e contraindicou o trombolítico', score: 1.0, ref: 'Diretriz AVC SBN/ABN, 2020' }
          ]
        },
        {
          h: 'BLOCO 5 — CONDUTA IMEDIATA',
          items: [
            { item: 'Iniciou controle pressórico imediato (meta PA ≤ 140 mmHg)', score: 1.0, ref: 'Diretriz AVC SBN/ABN, 2020' },
            { item: 'Indicou internação em UTI e acionou neurocirurgia', score: 0.5, ref: 'Diretriz AVC SBN/ABN, 2020' },
            { item: 'NÃO prescreveu alteplase/trombolítico', score: 1.0, ref: 'Diretriz AVC SBN/ABN, 2020' }
          ]
        }
      ]
    }
  },


  // ─────────────────────────────────────────────────────────────────────────
  // CASO 5 — LUXAÇÃO DE OMBRO
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 5,
    title: 'Dor e deformidade no ombro após queda',
    sub: 'UPA — Urgência e Emergência',
    tema: 'Ortopedia',
    topic: 'Luxação de Ombro',
    level: 'moderado',
    cardAccent: '#607D8B',
    instA: {
      scenario: 'Urgência e Emergência — UPA. Sala de atendimento, turno vespertino.',
      patient: 'M.A.R., 22 anos, masculino, estudante de educação física, sem comorbidades. Chega à UPA após queda durante jogo de basquete.',
      complaint: 'Dor intensa no ombro direito e deformidade visível, incapacidade de movimentar o braço após queda há 45 minutos.',
      tasks: [
        'Realize a anamnese dirigida ao caso.',
        'Realize o exame físico do ombro e avalie o status neurovascular do membro.',
        'Solicite os exames de imagem adequados.',
        'Realize ou descreva o procedimento de redução fechada da luxação.',
        'Oriente o paciente sobre os cuidados pós-redução, a imobilização e o seguimento.'
      ]
    },
    instB: {
      vitals: {
        PA: '128/80 mmHg',
        FC: '98 bpm',
        FR: '18 irpm',
        Tax: '36,6 °C',
        Peso: '78 kg',
        Altura: '1,80 m',
        IMC: '24,1 kg/m²'
      },
      physicalGeneral: 'Bom estado geral, consciente, orientado, ansioso, em posição antálgica com o braço direito em abdução leve e rotação externa, sustentado com a mão esquerda.',
      physicalSeg: 'OMBRO DIREITO: perda do contorno arredondado normal do ombro — "sinal do ombro em charrete" (ombro quadrado); proeminência acromiocoracoide visível; cabeça do úmero palpável na posição subcoracoide (anterior); abdução de ~20° com rotação externa; sinal de Dugas POSITIVO (impossibilidade de tocar o ombro oposto com a mão ipsilateral) | NEUROVASCULAR: sensibilidade do nervo axilar (área do "crachá" — face lateral do deltóide) preservada; força de contração do deltóide não avaliável por dor; pulso radial presente e simétrico; TEC < 2s; sem parestesias relatadas | OMBRO CONTRALATERAL: sem alterações',
      labs: [
        { test: 'Radiografia de ombro direito — incidência AP', val: 'Luxação glenoumeral anterior — cabeça do úmero em posição subcoracoide. Sem fratura do tubérculo maior ou do colo cirúrgico do úmero visível na AP', ref: 'Normal', alt: true },
        { test: 'Radiografia de ombro direito — incidência axilar (Y-scapular)', val: 'Confirma luxação anterior. Sem fratura de Bankart ósseo visível. Sem lesão de Hill-Sachs evidenciada nesta incidência', ref: 'Normal', alt: true }
      ],
      image: null,
      note: 'Entregar sinais vitais ao início. Entregar a radiografia SOMENTE se o candidato a solicitar formalmente — em AP e axilar (ou Y-escapular). NÃO entregar se o candidato tentar realizar a redução sem solicitar imagem prévia. Se o candidato solicitar apenas uma incidência (somente AP), entregar AP mas orientar que a incidência axilar/Y é necessária para confirmar e afastar lesões associadas.',
      patientProfile: 'M.A.R., 22 anos, masculino, estudante de educação física, solteiro. Mecanismo: queda com o braço em abdução e rotação externa durante disputa de bola no basquete.',
      script: [
        { trigger: 'Queixa principal', speech: 'Doutor, eu caí durante o jogo, o braço foi pra trás e ouvi um estalo. Dói muito, não consigo mexer o ombro. Olha o jeito que ele tá.' },
        { trigger: 'Sobre o mecanismo da queda', speech: 'Fui disputar uma bola, levantei o braço assim pra cima e pra fora, aí cai em cima do braço extendido. Na hora ouvi um barulho e senti que saiu do lugar.' },
        { trigger: 'Sobre episódios anteriores', speech: 'Saiu uma vez antes, faz uns dois anos. Na época o médico colocou de volta no pronto-socorro e fui pra fisioterapia. Mas depois parei a fisio no meio.' },
        { trigger: 'Sobre sensibilidade e circulação', speech: 'A mão tá boa, não tô sentindo formigamento. Só dói muito no ombro.' },
        { trigger: 'Sobre o movimento', speech: 'Não consigo levantar o braço de jeito nenhum, dói demais. Tô segurando ele assim pra não mover.' },
        { trigger: 'Pergunta ativa', speech: 'Vai precisar de cirurgia, doutor? Tenho que fazer uma prova de educação física mês que vem.' },
        { trigger: 'Pergunta ativa', speech: 'Vai colocar de volta agora? Vai doer muito? Precisa de anestesia?' }
      ],
      hiddenInfo: 'Episódio anterior de luxação no mesmo ombro há 2 anos — só revela se o candidato perguntar especificamente sobre luxações ou lesões anteriores no ombro | Fisioterapia interrompida após 2 semanas no episódio anterior — só revela se perguntado sobre reabilitação prévia | Nega uso de anti-inflamatórios previamente — revela se perguntado sobre medicamentos',
      actorBehavior: 'Paciente jovem, ansioso e com dor evidente. Segura o braço em posição antálgica e recusa movimentação. Cooperativo verbalmente. Demonstra preocupação com a prova de educação física. Fica mais tranquilo quando o médico explica o procedimento passo a passo antes de realizá-lo. Se o candidato tentar reduzir sem analgesia prévia, pode simular reação à dor intensa.'
    },
    instC: {
      diagnosis: 'Luxação glenoumeral anterior (subcoracoide) do ombro direito. Segundo episódio (luxação recidivante). Sem fratura associada nas incidências AP e axilar.',
      differentials: [
        'Fratura do tubérculo maior do úmero — frequentemente associada à luxação anterior (até 15% dos casos); afastada pelas radiografias sem fratura evidente; deve ser investigada antes da redução',
        'Fratura-luxação (fratura do colo cirúrgico do úmero + luxação) — mais comum em idosos; afastada pela radiografia e pela idade do paciente',
        'Luxação posterior do ombro — menos comum (~2%); braço em rotação interna e adução; não há deformidade anterior característica; incidência axilar é fundamental para diagnóstico',
        'Fratura isolada do tubérculo maior — sem luxação; contorno do ombro preservado; mecanismo diferente'
      ],
      context: 'Jovem atleta com segundo episódio de luxação glenoumeral anterior (subcoracoide) após mecanismo típico (abdução + rotação externa + trauma). Posição antálgica característica, perda do contorno arredondado, sinal de Dugas positivo e cabeça umeral palpável anteriormente. Radiografias confirmam luxação anterior sem fratura visível.',
      justify: 'Luxação glenoumeral anterior representa ~95% das luxações de ombro. O mecanismo clássico é abdução + rotação externa forçada. O sinal de Dugas é específico (impossibilidade de tocar o ombro oposto). Radiografia em AP + axilar (ou Y-escapular) é mandatória ANTES da redução para afastar fraturas associadas (especialmente fratura do tubérculo maior e lesão de Hill-Sachs). A redução deve ser realizada sob analgesia e/ou sedação adequadas. Segundo episódio aumenta o risco de instabilidade crônica e indica avaliação cirúrgica eletiva.',
      expectedAnamnesis: 'Investigar mecanismo de trauma (abdução + rotação externa = luxação anterior; queda em adução = luxação posterior) | Perguntar sobre episódios anteriores de luxação no mesmo ombro (recidivante?) | Investigar se houve reabilitação adequada anteriormente | Questionar sobre sensibilidade (nervo axilar) e força distal | Perguntar sobre pulso e circulação distal | Investigar tempo desde o trauma (quanto mais tempo, mais difícil a redução sem sedação)',
      expectedPhysical: 'Inspeção do ombro: deformidade (ombro quadrado), assimetria bilateral | Palpação: posição da cabeça umeral (anterior = subcoracoide; inferior = subglenóide) | Sinal de Dugas | Avaliação do nervo axilar: sensibilidade na região do deltóide (face lateral, área do "crachá") | Avaliação vascular: pulso radial, TEC | Avaliação neurológica distal: força, sensibilidade, perfusão do membro',
      expectedExams: [
        { exam: 'Radiografia de ombro — AP + axilar (ou Y-escapular)', justify: 'Obrigatória ANTES da redução para afastar fratura do tubérculo maior, fratura do colo cirúrgico, lesão de Bankart ósseo ou Hill-Sachs que contraindiquem redução fechada', expected: 'Luxação anterior subcoracoide confirmada, sem fratura visível' },
        { exam: 'Radiografia pós-redução (AP + axilar)', justify: 'Confirma redução adequada e afasta fraturas que possam ter ocorrido durante a manobra', expected: 'Cabeça umeral reduzida na glenoide' }
      ],
      expectedConduct: 'Analgesia/sedação: Dipirona IV ou IM + Morfina 2–4 mg IV ou Cetamina dissociativa para sedação procedural (se disponível); Benzodiazepínico (Midazolam) para relaxamento muscular | Redução fechada — descrever uma das manobras: Técnica de Cunningham (massagem do deltóide em posição sentada — não usa sedação profunda), Técnica de Stimson (decúbito ventral com peso no braço), Técnica de Milch, Técnica de Kocher (cuidado com fraturas) | Pós-redução: imobilização em tipoia/sling por 3–4 semanas; analgesia oral (AINEs + dipirona); radiografia confirmatória pós-redução | Fisioterapia: retorno gradual após 3–4 semanas de imobilização; fortalecimento do manguito rotador | Encaminhamento: ortopedia ambulatorial em 7–10 dias; segundo episódio = discutir reparo cirúrgico eletivo (artroscopia de Bankart) para instabilidade recidivante | Orientações: não praticar atividade esportiva até liberação ortopédica; sinais de alarme (piora da dor, dormência, fraqueza distal)',
      expectedCommunication: 'Apresentar-se pelo nome | Explicar o diagnóstico de luxação de ombro em linguagem acessível | Descrever a manobra de redução antes de realizá-la, com empatia sobre a dor | Informar que em segundo episódio há risco de recidiva e pode ser necessária cirurgia eletiva futura | Orientar sobre a imobilização e reabilitação | Perguntar se tem dúvidas',
      criticalErrors: [
        'Tentar redução fechada SEM realizar radiografia prévia — risco de piora de fratura associada não diagnosticada',
        'Não avaliar o nervo axilar antes e após a redução (lesão do nervo axilar ocorre em até 9% das luxações anteriores)',
        'Não realizar radiografia pós-redução confirmatória',
        'Não imobilizar após a redução e liberar o paciente sem orientações sobre a imobilização',
        'Não encaminhar para seguimento ortopédico (segundo episódio — risco de instabilidade crônica)'
      ]
    },
    instD: {
      title: 'CHECKLIST — DOR E DEFORMIDADE NO OMBRO APÓS QUEDA (LUXAÇÃO)',
      sections: [
        {
          h: 'BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE',
          items: [
            { item: 'Apresentou-se pelo nome ao paciente', score: 0.5, ref: 'CFM Res. 2.232/2019' },
            { item: 'Explicou o procedimento de redução antes de realizá-lo, com empatia', score: 0.5, ref: 'CFM Res. 2.232/2019' }
          ]
        },
        {
          h: 'BLOCO 2 — ANAMNESE',
          items: [
            { item: 'Identificou o mecanismo de trauma (abdução + rotação externa)', score: 0.5, ref: 'Ortopedia e Traumatologia — SBO, 2022' },
            { item: 'Perguntou sobre episódios anteriores de luxação no mesmo ombro', score: 0.5, ref: 'Ortopedia e Traumatologia — SBO, 2022' }
          ]
        },
        {
          h: 'BLOCO 3 — EXAME FÍSICO',
          items: [
            { item: 'Descreveu deformidade (ombro quadrado) e realizou sinal de Dugas', score: 0.5, ref: 'Ortopedia e Traumatologia — SBO, 2022' },
            { item: 'Avaliou o nervo axilar (sensibilidade na área do deltóide — "crachá")', score: 1.0, ref: 'Ortopedia e Traumatologia — SBO, 2022' },
            { item: 'Avaliou pulso radial e perfusão distal', score: 0.5, ref: 'Ortopedia e Traumatologia — SBO, 2022' }
          ]
        },
        {
          h: 'BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
          items: [
            { item: 'Solicitou radiografia ANTES da tentativa de redução (AP + axilar ou Y-escapular)', score: 1.0, ref: 'Ortopedia e Traumatologia — SBO, 2022' },
            { item: 'Solicitou radiografia pós-redução confirmatória', score: 0.5, ref: 'Ortopedia e Traumatologia — SBO, 2022' }
          ]
        },
        {
          h: 'BLOCO 5 — CONDUTA E ORIENTAÇÃO',
          items: [
            { item: 'Prescreveu analgesia adequada antes da redução', score: 0.5, ref: 'Ortopedia e Traumatologia — SBO, 2022' },
            { item: 'Descreveu ou realizou manobra de redução fechada corretamente', score: 1.0, ref: 'Ortopedia e Traumatologia — SBO, 2022' },
            { item: 'Imobilizou em tipoia/sling após redução', score: 0.5, ref: 'Ortopedia e Traumatologia — SBO, 2022' },
            { item: 'Encaminhou ao ortopedista e orientou sobre risco de recidiva (2º episódio)', score: 0.5, ref: 'Ortopedia e Traumatologia — SBO, 2022' }
          ]
        }
      ]
    }
  },


  // ─────────────────────────────────────────────────────────────────────────
  // CASO 6 — CHOQUE SÉPTICO (MEDICINA INTENSIVA)
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 6,
    title: 'Paciente internada com piora da pressão e confusão mental',
    sub: 'UTI — Medicina Intensiva',
    tema: 'Medicina Intensiva',
    topic: 'Choque Séptico',
    level: 'complexo',
    cardAccent: '#E65100',
    instA: {
      scenario: 'UTI — Hospital Geral. Você é o médico plantonista da UTI. Paciente internada há 48h por pneumonia comunitária apresentou deterioração hemodinâmica progressiva nas últimas 2 horas.',
      patient: 'E.C.S., 72 anos, feminino, aposentada, diabética tipo 2 e hipertensa, internada há 48h por pneumonia bacteriana comunitária, iniciou ceftriaxona há 2 dias.',
      complaint: 'Enfermagem informa: pressão caiu para 78/44 mmHg, paciente confusa, taquicárdica, febril, com pouca urina nas últimas 6 horas.',
      tasks: [
        'Realize a avaliação clínica inicial (ABCDE) e identifique os critérios de choque séptico.',
        'Calcule o escore qSOFA e o SOFA simplificado.',
        'Solicite os exames complementares urgentes.',
        'Institua o bundle de sepse (hora 1) de forma estruturada.',
        'Prescreva a antibioticoterapia empírica adequada e os vasopressores necessários.',
        'Oriente a família sobre o diagnóstico e a gravidade do quadro.'
      ]
    },
    instB: {
      vitals: {
        PA: '78/44 mmHg',
        FC: '128 bpm',
        FR: '28 irpm',
        Tax: '39,4 °C',
        Peso: '64 kg',
        Altura: '1,58 m',
        IMC: '25,6 kg/m²'
      },
      physicalGeneral: 'Paciente em mau estado geral, confusa (Glasgow 12 — O3V3M6), extremidades frias e moteadas, taquicárdica, taquipneica, febril, em uso de O2 por cateter nasal 3 L/min.',
      physicalSeg: 'NEUROLÓGICO: confusa, não obedece comandos complexos, responde ao nome | RESPIRATÓRIO: taquipneia (FR 28 irpm), SatO2 91% em 3 L/min; ausculta com estertores crepitantes em base direita e opacidade difusa bilateral à percussão | CARDIOVASCULAR: taquicárdica (128 bpm), bulhas hipofoneticas, sem sopros; extremidades frias, moteamento em joelhos, TEC > 3s | ABDOME: levemente distendido, RHA reduzidos, sem sinais de peritonite | DIURESE: < 0,3 mL/kg/h nas últimas 6h (oligúria grave) | ACESSO VENOSO: AVP periférico em MSE — calibrar para infusão rápida',
      labs: [
        { test: 'Lactato arterial', val: '4,8 mmol/L', ref: '< 2,0 mmol/L', alt: true },
        { test: 'Hemograma — Leucócitos', val: '22.400/mm³ com 18% de bastões', ref: '4.000–11.000/mm³', alt: true },
        { test: 'Hemograma — Hemoglobina', val: '10,2 g/dL', ref: '12,0–16,0 g/dL', alt: true },
        { test: 'Plaquetas', val: '86.000/mm³', ref: '150.000–400.000/mm³', alt: true },
        { test: 'PCR', val: '348 mg/L', ref: '< 5 mg/L', alt: true },
        { test: 'Procalcitonina', val: '42,3 ng/mL', ref: '< 0,5 ng/mL', alt: true },
        { test: 'Creatinina', val: '3,2 mg/dL', ref: '0,6–1,1 mg/dL (basal 0,9)', alt: true },
        { test: 'Ureia', val: '98 mg/dL', ref: '15–40 mg/dL', alt: true },
        { test: 'Bilirrubina total', val: '3,4 mg/dL', ref: '< 1,0 mg/dL', alt: true },
        { test: 'TGO', val: '112 U/L', ref: '< 40 U/L', alt: true },
        { test: 'Gasometria — pH', val: '7,28', ref: '7,35–7,45', alt: true },
        { test: 'Gasometria — PaO2', val: '62 mmHg', ref: '80–100 mmHg', alt: true },
        { test: 'Gasometria — PaCO2', val: '32 mmHg', ref: '35–45 mmHg', alt: true },
        { test: 'Gasometria — HCO3', val: '14 mEq/L', ref: '22–26 mEq/L', alt: true },
        { test: 'Glicemia', val: '248 mg/dL', ref: '70–99 mg/dL', alt: true }
      ],
      image: 'Radiografia de tórax PA (repetida): Opacidade heterogênea bilateral de predomínio em bases, maior à direita. Infiltrado intersticial difuso bilateral. Silhueta cardíaca no limite superior. Sem pneumotórax. Padrão compatível com pneumonia bilateral e possível componente de SDRA inicial.',
      note: 'Entregar sinais vitais ao início. Entregar lactato somente se solicitado. Entregar hemoculturas como "em coleta" (o candidato deve solicitar coleta antes dos antibióticos). Entregar demais labs se solicitados. Entregar RX se solicitado. Orientar: se o candidato iniciar antibiótico sem solicitar hemoculturas, registrar o erro mas não interromper o atendimento.',
      patientProfile: 'E.C.S., 72 anos, feminino, aposentada, casada. DM tipo 2 em uso de metformina. HAS em uso de enalapril. Internada há 48h por pneumonia comunitária — iniciou ceftriaxona 2g/dia + azitromicina 500mg/dia. Há 6h a enfermagem registrou queda da PA e aumento da FR.',
      script: [
        { trigger: 'Enfermagem — relato', speech: 'Doutor, a Dona E. tá péssima. A pressão caiu muito — tô conseguindo palpar o pulso, mas tá fino. Tá confusa também, não tá respondendo direito. Diurese em 6h foi quase nada, umas 80 mL só.' },
        { trigger: 'Paciente — ao ser chamada', speech: '(Abre os olhos ao ser chamada, confusa) "Onde... onde eu tô?... Filha?..."' },
        { trigger: 'Familiar (filha) — ao ser chamada', speech: 'Doutor, o que tá acontecendo? Ela tava melhorando ontem! Agora piorou assim?' },
        { trigger: 'Familiar — sobre histórico', speech: 'Ela tem diabete e pressão alta, toma metformina e enalapril. Internou por pneumonia anteontem, tava com febre e tosse.' },
        { trigger: 'Familiar — pergunta sobre antibiótico', speech: 'Ela não tá tomando antibiótico já? Por que tá piorando?' },
        { trigger: 'Familiar — pergunta sobre gravidade', speech: 'Ela vai morrer, doutor? O que vocês vão fazer agora?' },
        { trigger: 'Familiar — sobre limitação de suporte', speech: '(Se perguntado sobre preferências da paciente) Ela sempre falou que não queria ficar presa em máquina se não tivesse jeito. Mas agora ela ainda tem jeito?' }
      ],
      hiddenInfo: 'Paciente não melhorou bem com ceftriaxona — febre persistiu em 38,8°C nas últimas 24h — só revela se o candidato perguntar sobre a evolução do internamento | Hemocultura de admissão há 48h ainda sem resultado — só revela se o candidato perguntar sobre culturas já coletadas | Filha é a responsável legal — só revela se o candidato perguntar sobre responsável ou representante legal',
      actorBehavior: 'Filha muito assustada, chora, faz perguntas rápidas e ansiosas. Cooperativa quando o médico demonstra calma e competência. Necessita de comunicação empática e clara sobre a gravidade. A paciente está confusa — responde ao nome com frases isoladas, não coopera com o exame detalhado.'
    },
    instC: {
      diagnosis: 'Choque séptico por pneumonia bacteriana comunitária com disfunção de múltiplos órgãos (SDMO): insuficiência respiratória (SatO2 91%, PaO2 62), insuficiência renal aguda (Cr 3,2), lesão hepática (BT 3,4, TGO 112), trombocitopenia (86.000), acidose metabólica com lactato 4,8 mmol/L. qSOFA 3/3. SOFA estimado ≥ 10.',
      differentials: [
        'Choque cardiogênico — também cursa com hipotensão e oligúria; distinguido pelo débito cardíaco reduzido, pressão venosa jugular elevada, congestão pulmonar severa; menos provável em contexto de sepse com febre alta e resposta inflamatória maciça; ecocardiograma diferencia',
        'Choque hipovolêmico — por desidratação ou sangramento; sem febre, sem resposta inflamatória; lactato pode estar elevado; afastado pelo contexto infeccioso',
        'SDRA sem choque — insuficiência respiratória grave sem hipotensão; pode coexistir com choque séptico como aqui',
        'Embolia pulmonar maciça — hipotensão e hipoxemia; sem febre alta, sem contexto infeccioso típico; afastada pelo contexto clínico'
      ],
      context: 'Idosa diabética e hipertensa, internada por pneumonia comunitária, evoluindo em 48h com deterioração hemodinâmica grave: hipotensão refratária (PA 78/44), taquicardia (128 bpm), taquipneia (28 irpm), febre (39,4°C), Glasgow 12, oligúria grave e lactato 4,8 mmol/L. Critérios de choque séptico preenchidos (Sepsis-3): sepse + hipotensão refratária a volume + lactato > 2 mmol/L + necessidade de vasopressor para manter PAM ≥ 65 mmHg. SDMO com pelo menos 4 órgãos comprometidos.',
      justify: 'Sepsis-3 (2016): Choque séptico = sepse + hipotensão persistente após reposição adequada de volume (30 mL/kg) + lactato > 2 mmol/L + necessidade de vasopressor. qSOFA: alteração do nível de consciência (1) + FR > 22 irpm (1) + PAS < 100 (1) = 3/3 — triagem positiva para sepse grave. SOFA: neurológico (GCS 12→1pt) + respiratório (PaO2/FiO2 <200→2-3pt) + renal (Cr 3,2→3pt) + hepático (BT 3,4→1pt) + coagulação (plaq 86k→1pt) + cardiovascular (vasopressor→2-4pt) = ~11 pontos → mortalidade estimada > 40%.',
      expectedAnamnesis: 'Obter história rápida com enfermagem e familiar: tempo de deterioração, diurese, antibiótico em uso | Verificar culturas anteriores coletadas | Investigar foco primário (pneumonia confirmada) | Checar alergias medicamentosas | Avaliar comorbidades e imunossupressão | Perguntar sobre diretivas antecipadas de vontade ou limitação de suporte',
      expectedPhysical: 'Avaliação ABCDE: A — via aérea patente; B — FR 28, SatO2 91%, estertores bilaterais; C — FC 128, PA 78/44, TEC > 3s, moteamento; D — GCS 12, confusa; E — temperatura 39,4°C, oligúria grave | Calcular qSOFA (3/3) | Avaliar perfusão periférica | Avaliar sinais de HIC abdominal | Verificar cateteres e focos de infecção local',
      expectedExams: [
        { exam: 'Hemoculturas — 2 amostras de sítios diferentes ANTES do antibiótico', justify: 'Coleta de culturas antes do antibiótico é obrigatória — não atrasar antibiótico mais de 45 min por causa das culturas', expected: 'Aguardar resultado — coleta imediata é o procedimento correto' },
        { exam: 'Lactato arterial', justify: 'Marcador de hipoperfusão tecidual — fundamental para diagnóstico e estratificação de choque séptico; medir novamente em 2h após ressuscitação', expected: '4,8 mmol/L — choque séptico confirmado, prognóstico grave' },
        { exam: 'Gasometria arterial', justify: 'Avaliar oxigenação, ventilação e acidose metabólica', expected: 'Acidose metabólica (pH 7,28, HCO3 14), hipoxemia (PaO2 62)' },
        { exam: 'Hemograma, PCR, procalcitonina, função renal e hepática, coagulograma', justify: 'Avaliar extensão da SDMO e guiar conduta', expected: 'Leucocitose com desvio, plaquetopenia, IRA, lesão hepática, procalcitonina muito elevada' },
        { exam: 'Urocultura + Hemocultura (coleta antes do antibiótico)', justify: 'Rastreamento de foco secundário e antibiograma futuro', expected: 'Coleta imediata' }
      ],
      expectedConduct: 'Bundle Hora-1 (Surviving Sepsis Campaign 2018): 1) Coletar hemoculturas (2 amostras) ANTES do antibiótico; 2) Antibioticoterapia empírica de amplo espectro: Piperacilina-Tazobactam 4,5g IV 6/6h (ou Meropenem 1g IV 8/8h se risco de multirresistente/nosocomial) + considerar cobertura para atípicos (Azitromicina 500mg IV/dia); 3) Reposição volumétrica: Ringer Lactato (ou SF 0,9%) 30 mL/kg IV em 3h (CUIDADO: idosa — avaliar resposta e sinais de congestão); 4) Vasopressor se PA não responder à volemia: Norepinefrina 0,1–1 mcg/kg/min por acesso venoso central (meta PAM ≥ 65 mmHg); 5) Medir lactato; 6) Repetir lactato em 2h | Suporte geral: O2 com máscara de alto fluxo (FiO2 > 0,4) para SatO2 ≥ 92%; Cabeceira 30–45°; Controle glicêmico (meta 140–180 mg/dL); Sondagem vesical para controle estrito de diurese | Considerar IOT e VM se progressão da insuficiência respiratória | Comunicação com família: diagnóstico de "infecção grave no sangue" em linguagem acessível; gravidade real com prognóstico reservado; decisão compartilhada sobre limites de suporte',
      expectedCommunication: 'Apresentar-se à família | Comunicar com clareza e empatia o diagnóstico de sepse/choque séptico | Explicar em linguagem acessível ("a infecção entrou na corrente sanguínea e está afetando vários órgãos") | Ser honesto sobre a gravidade (mortalidade > 40%) sem retirar esperança | Perguntar sobre diretivas antecipadas de vontade | Perguntar se tem dúvidas',
      criticalErrors: [
        'Iniciar antibiótico ANTES de coletar hemoculturas (elimina a possibilidade de identificar o agente e o antibiograma)',
        'Não iniciar antibioticoterapia de amplo espectro dentro da primeira hora (cada hora de atraso aumenta a mortalidade em ~7%)',
        'Não iniciar vasopressor em paciente com hipotensão refratária à reposição volêmica (manter PAM < 65 mmHg causa hipoperfusão orgânica grave)',
        'Não medir lactato arterial (fundamental para diagnóstico e monitorização do choque séptico)',
        'Não envolver a família na tomada de decisão em paciente com prognóstico reservado (omissão em cuidados paliativos e bioética)'
      ]
    },
    instD: {
      title: 'CHECKLIST — PIORA HEMODINÂMICA E CONFUSÃO (CHOQUE SÉPTICO)',
      sections: [
        {
          h: 'BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE/FAMÍLIA',
          items: [
            { item: 'Apresentou-se à família claramente', score: 0.5, ref: 'CFM Res. 2.232/2019' },
            { item: 'Comunicou o diagnóstico de sepse grave com clareza, empatia e honestidade sobre o prognóstico', score: 0.5, ref: 'Surviving Sepsis Campaign, 2018' }
          ]
        },
        {
          h: 'BLOCO 2 — AVALIAÇÃO CLÍNICA',
          items: [
            { item: 'Realizou avaliação ABCDE estruturada', score: 0.5, ref: 'Surviving Sepsis Campaign, 2018' },
            { item: 'Calculou qSOFA (3/3: consciência, FR, PAS)', score: 0.5, ref: 'Surviving Sepsis Campaign, 2018' },
            { item: 'Identificou os critérios de choque séptico (hipotensão + lactato + vasopressor)', score: 0.5, ref: 'Surviving Sepsis Campaign, 2018' }
          ]
        },
        {
          h: 'BLOCO 3 — BUNDLE HORA-1',
          items: [
            { item: 'Coletou hemoculturas ANTES de iniciar antibiótico', score: 1.0, ref: 'Surviving Sepsis Campaign, 2018' },
            { item: 'Iniciou antibioticoterapia de amplo espectro dentro de 1 hora', score: 1.0, ref: 'Surviving Sepsis Campaign, 2018' },
            { item: 'Prescreveu reposição volêmica 30 mL/kg IV em até 3h', score: 0.5, ref: 'Surviving Sepsis Campaign, 2018' },
            { item: 'Indicou vasopressor (norepinefrina) para manter PAM ≥ 65 mmHg', score: 1.0, ref: 'Surviving Sepsis Campaign, 2018' },
            { item: 'Solicitou lactato arterial', score: 0.5, ref: 'Surviving Sepsis Campaign, 2018' }
          ]
        },
        {
          h: 'BLOCO 4 — SUPORTE E BIOÉTICA',
          items: [
            { item: 'Indicou O2 suplementar e monitorização contínua', score: 0.5, ref: 'Surviving Sepsis Campaign, 2018' },
            { item: 'Discutiu com a família sobre a gravidade e eventualmente sobre limitação de suporte', score: 0.5, ref: 'CFM Res. 1.805/2006; Res. 2.232/2019' }
          ]
        }
      ]
    }
  },



  // ─────────────────────────────────────────────────────────────────────────
  // CASO 7 — DEMÊNCIA (DOENÇA DE ALZHEIMER)
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 7,
    title: 'Idosa com esquecimentos progressivos e mudança de comportamento há 2 anos',
    sub: 'UBS — Atenção Primária / Geriatria',
    tema: 'Geriatria',
    topic: 'Doença de Alzheimer',
    level: 'moderado',
    cardAccent: '#8D6E63',
    instA: {
      scenario: 'Atenção Primária — UBS. Consultório, turno matutino. Filha traz a mãe para consulta.',
      patient: 'M.L.F., 78 anos, feminino, aposentada, viúva, com queixa de esquecimentos progressivos há cerca de 2 anos, referidos pela filha.',
      complaint: 'Filha relata que a mãe está esquecendo coisas cada vez mais (repete perguntas, não lembra de consultas, deixou o fogão ligado), mudou o humor e está mais irritada.',
      tasks: [
        'Realize a anamnese dirigida ao caso (com a paciente e a filha como informantes).',
        'Aplique o Mini Exame do Estado Mental (MEEM) e interprete o resultado.',
        'Realize o exame físico neurológico e geral pertinente.',
        'Solicite os exames complementares para afastar causas reversíveis de demência.',
        'Formule a hipótese diagnóstica e os diferenciais.',
        'Proponha a conduta terapêutica inicial e oriente a família sobre os cuidados.'
      ]
    },
    instB: {
      vitals: {
        PA: '138/84 mmHg',
        FC: '72 bpm',
        FR: '16 irpm',
        Tax: '36,5 °C',
        Peso: '58 kg',
        Altura: '1,56 m',
        IMC: '23,8 kg/m²'
      },
      physicalGeneral: 'Regular estado geral, consciente, orientada no tempo parcialmente (diz que o ano é "por volta de 2020") e no espaço (sabe que está em um consultório médico). Bem cuidada, cooperativa, com certa lentidão de raciocínio.',
      physicalSeg: 'NEUROLÓGICO: nível de consciência preservado; sem déficit motor focal; reflexos tendinosos profundos simétricos; sem sinal de Babinski; marcha com passos pequenos e base alargada, sem instabilidade grave; sem rigidez em roda dentada; MEEM aplicado — ver resultado abaixo | CARDIOVASCULAR: bulhas rítmicas normofonéticas, sem sopros | RESPIRATÓRIO: MV presente bilateralmente, sem ruídos adventícios | ABDOME: sem alterações relevantes | PELE/FÂNEROS: sem alterações sugestivas de hipotireoidismo',
      labs: [
        { test: 'MEEM (Mini Exame do Estado Mental) — RESULTADO', val: '17/30 pontos (ponto de corte para ≥ 4 anos de escolaridade: 24 pontos)', ref: '≥ 24 pontos (> 4 anos escolaridade)', alt: true },
        { test: 'TSH', val: '2,4 mUI/L', ref: '0,4–4,0 mUI/L', alt: false },
        { test: 'T4 livre', val: '1,1 ng/dL', ref: '0,8–1,8 ng/dL', alt: false },
        { test: 'Vitamina B12', val: '310 pg/mL', ref: '200–900 pg/mL', alt: false },
        { test: 'Ácido fólico', val: '8,2 ng/mL', ref: '3,1–20 ng/mL', alt: false },
        { test: 'Hemograma', val: 'Normal', ref: 'Normal', alt: false },
        { test: 'Glicemia de jejum', val: '102 mg/dL', ref: '70–99 mg/dL', alt: false },
        { test: 'Sódio', val: '139 mEq/L', ref: '136–145 mEq/L', alt: false },
        { test: 'VDRL', val: 'Não reagente', ref: 'Não reagente', alt: false },
        { test: 'TC de crânio sem contraste (resultado)', val: 'Atrofia cortical difusa de predomínio têmporo-parietal bilateral, mais pronunciada que o esperado para a idade. Sem lesões expansivas, sem sinais de infarto ou sangramento. Hidrocefalia ex-vacuo discreta.', ref: 'Normal', alt: true }
      ],
      image: null,
      note: 'Entregar sinais vitais ao início. Entregar o resultado do MEEM somente se o candidato aplicar o instrumento (OU perguntar ao avaliador sobre pontuação em instrumento de rastreio cognitivo). Entregar labs se solicitados. Entregar TC de crânio se solicitada. O candidato deve ser pontuado por aplicar o MEEM ou outro instrumento de rastreio cognitivo (CDT, IQCODE).',
      patientProfile: 'M.L.F., 78 anos, feminino, aposentada (trabalhava como professora primária — escolaridade > 8 anos), viúva há 4 anos, mora com a filha. Nega HAS, diabetes. Não usa medicamentos regularmente. Nunca fez rastreio cognitivo.',
      script: [
        { trigger: 'Filha — queixa principal', speech: 'Doutor, minha mãe tá cada vez mais esquecida. Ela repete as mesmas perguntas várias vezes por dia. Na semana passada deixou o fogão ligado sem querer. Não lembra mais de compromissos nem das consultas. Isso piora faz uns dois anos.' },
        { trigger: 'Paciente — queixa', speech: 'Eu esqueço algumas coisinhas, mas é da idade. Todo mundo da minha idade esquece.' },
        { trigger: 'Filha — sobre comportamento', speech: 'Ela ficou mais irritada. Às vezes fica desconfiada, acha que a gente tirou coisas dela. Fica agitada à tarde e ao entardecer principalmente.' },
        { trigger: 'Filha — sobre a progressão', speech: 'Começou devagar, uns dois anos atrás. No início eu achei que era estresse por causa do falecimento do meu pai. Mas foi piorando. Agora ela se perde no trajeto que faz há anos.' },
        { trigger: 'Paciente — quando perguntada sobre o ano', speech: 'O ano? Deve ser... 2020, por aí né? Ou 2021?' },
        { trigger: 'Filha — sobre independência', speech: 'Ela não consegue mais pagar as contas sozinha, esquece o troco. Cozinhar ela ainda tenta, mas já tivemos sustos com o fogão.' },
        { trigger: 'Filha — pergunta ativa', speech: 'Isso é Alzheimer, doutor? Tem cura? Vai piorar?' },
        { trigger: 'Filha — pergunta ativa', speech: 'Tem algum remédio que pode ajudar? E o que eu faço em casa pra cuidar dela?' }
      ],
      hiddenInfo: 'Viúva há 4 anos — luto pode ter precipitado a piora funcional — só revela se o candidato perguntar sobre eventos de vida recentes | Episódio de desorientação espacial há 6 meses (se perdeu perto de casa) — só revela se o candidato perguntar sobre episódios de confusão ou desorientação no espaço | Irmão com diagnóstico de Alzheimer — só revela se o candidato perguntar sobre história familiar de demência',
      actorBehavior: 'Paciente tranquila, cooperativa, mas com tendência a minimizar os déficits ("é da idade"). Fica levemente irritada se pressionada sobre erros cognitivos durante o MEEM — o candidato deve conduzir com empatia. Filha é a principal informante — angustiada, com sobrecarga visível, deseja orientações práticas sobre cuidados.'
    },
    instC: {
      diagnosis: 'Demência por Doença de Alzheimer (provável): início insidioso, progressão gradual há 2 anos, comprometimento de memória episódica + orientação + funções executivas (MEEM 17/30), sem causa reversível identificada nos exames (TSH, B12, VDRL normais), atrofia têmporo-parietal bilateral na TC. Comprometimento funcional confirmado (não consegue pagar contas, deixou fogão ligado).',
      differentials: [
        'Comprometimento cognitivo leve (MCI/CCL) — déficit cognitivo sem comprometimento funcional significativo; aqui há impacto funcional claro (fogão, contas, desorientação) — descartado',
        'Demência vascular — início mais abrupto, escalonado; presença de fatores de risco vasculares, AVCs ou leucoaraiose na TC; afastado pelo início insidioso e TC sem lesões vasculares',
        'Hipotireoidismo — causa reversível de declínio cognitivo; TSH normal afasta',
        'Deficiência de vitamina B12 — causa reversível; B12 normal afasta',
        'Depressão com pseudodemência — pode mimetizar demência; avaliação do humor necessária; história de luto recente; diferenciada pelo teste terapêutico com antidepressivo e avaliação psiquiátrica',
        'Hidrocefalia de pressão normal (HPN) — tríade: demência + ataxia + incontinência; sem incontinência evidente; sem hidrocefalia comunicante típica na TC'
      ],
      context: 'Idosa de 78 anos, alta escolaridade (professora), com declínio cognitivo insidioso e progressivo há 2 anos, comprometendo memória episódica (repete perguntas, esquece compromissos), orientação temporal, funções executivas (fogão, contas) e comportamento (irritabilidade, agitação vespertina — sundowning). MEEM 17/30 muito abaixo do esperado para a escolaridade. Causas reversíveis afastadas pelos exames. TC com atrofia têmporo-parietal bilateral. Quadro clínico clássico de DA provável segundo critérios NIA-AA 2011.',
      justify: 'Critérios diagnósticos de DA provável (NIA-AA 2011): demência com comprometimento funcional + início insidioso + progressão gradual documentada + predomínio de déficit amnéstico + afastadas outras causas (vascular, metabólica, tóxica). MEEM 17/30 com escolaridade > 4 anos indica comprometimento moderado. Atrofia têmporo-parietal na TC corrobora. O diagnóstico definitivo requer histopatologia; clinicamente, DA provável é o diagnóstico de trabalho. Agitação vespertina = "sundowning" — fenômeno comum na DA.',
      expectedAnamnesis: 'Investigar início, progressão e características do declínio cognitivo (memória, linguagem, orientação, executiva) | Perguntar sobre impacto funcional nas AVDs (atividades de vida diária) | Investigar comportamento e alterações psiquiátricas (irritabilidade, alucinações, agitação) | Pesquisar história familiar de demência | Perguntar sobre eventos de vida precipitantes (luto, cirurgia, internação) | Investigar medicamentos em uso (anticolinérgicos, benzodiazepínicos causam déficit cognitivo) | Pesquisar fatores de risco vascular (HAS, DM, tabagismo, AVC) | Investigar uso de álcool',
      expectedPhysical: 'Avaliar nível de consciência e orientação (tempo e espaço) | Aplicar MEEM ou CDT (Teste do Desenho do Relógio) | Realizar exame neurológico focado: déficits motores focais, sinais parkinsonianos (rigidez, tremor — DD: demência de Lewy), marcha, reflexos primitivos | Avaliar thyroide, pele e fâneros (hipotireoidismo) | Rastrear depressão (GDS-15)',
      expectedExams: [
        { exam: 'MEEM (Mini Exame do Estado Mental)', justify: 'Instrumento padronizado de rastreio cognitivo — obrigatório na avaliação de demência; interpretar conforme escolaridade', expected: '17/30 — comprometimento cognitivo moderado para escolaridade ≥ 4 anos (ponto de corte 24)' },
        { exam: 'TSH + T4 livre', justify: 'Afastar hipotireoidismo — causa reversível e frequente de declínio cognitivo em idosos', expected: 'Normal — hipotireoidismo afastado' },
        { exam: 'Vitamina B12 + Ácido fólico', justify: 'Deficiência de B12 causa demência reversível — frequente em idosos', expected: 'Normal — deficiência de B12 afastada' },
        { exam: 'VDRL', justify: 'Neurossífilis é causa tratável de demência — triagem obrigatória', expected: 'Não reagente — neurossífilis afastada' },
        { exam: 'TC de crânio (ou RM) sem contraste', justify: 'Afastar causas estruturais (hematoma subdural, hidrocefalia, tumor, lesões vasculares)', expected: 'Atrofia têmporo-parietal bilateral — sugestivo de DA' }
      ],
      expectedConduct: 'Farmacológica: Inibidores da colinesterase — Donepezila 5mg/dia VO (após 4 semanas, aumentar para 10mg/dia se tolerado) — primeira linha na DA leve a moderada; Rivastigmina e Galantamina são alternativas | Memantina pode ser associada na DA moderada a grave (MEEM ≤ 19) | Não farmacológica: Estimulação cognitiva (jogos, leitura, músicas, conversas); Manter rotina estruturada; Orientação da família sobre sundowning (não discutir com a paciente à noite — exacerba a agitação); Trancas de segurança no fogão; Adequar o ambiente doméstico | Encaminhamento: Neurologia ou Geriatria para confirmação diagnóstica e seguimento; Assistência Social para avaliação de benefícios; Grupo de suporte a cuidadores | Orientações à família: Doença é crônica e progressiva — não tem cura, mas tratamento retarda progressão; o cuidador também precisa de suporte; orientar sobre procuração/representação legal | Seguimento: retorno em 3 meses para reavaliação; HAS e outros fatores de risco vascular devem ser controlados',
      expectedCommunication: 'Apresentar-se pelo nome | Explicar o diagnóstico com empatia: "É uma doença que afeta a memória e que vai progredindo com o tempo" | Não usar palavras desnecessariamente aterrorizantes | Explicar o que é o Alzheimer em linguagem acessível | Reconhecer a sobrecarga da filha e oferecer recursos | Orientar sobre segurança no lar (fogão, sair sozinha) | Perguntar se têm dúvidas',
      criticalErrors: [
        'Não aplicar instrumento de rastreio cognitivo (MEEM ou CDT) e basear o diagnóstico apenas em impressão clínica',
        'Não solicitar exames para afastar causas reversíveis de demência (TSH, B12, VDRL) — causas tratáveis são críticas de detectar',
        'Não avaliar o impacto funcional nas AVDs (o comprometimento funcional é critério diagnóstico de demência)',
        'Prescrever benzodiazepínico para tratar a agitação da idosa — piora o déficit cognitivo e aumenta risco de quedas',
        'Não orientar a família sobre cuidados, segurança no lar e sundowning — abandona o cuidador sem suporte'
      ]
    },
    instD: {
      title: 'CHECKLIST — IDOSA COM ESQUECIMENTOS PROGRESSIVOS (ALZHEIMER)',
      sections: [
        {
          h: 'BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE/FAMÍLIA',
          items: [
            { item: 'Apresentou-se à paciente e à filha', score: 0.5, ref: 'CFM Res. 2.232/2019' },
            { item: 'Comunicou o diagnóstico de demência com empatia, em linguagem acessível', score: 0.5, ref: 'Diretriz ABN/SBGe — Demências, 2022' }
          ]
        },
        {
          h: 'BLOCO 2 — ANAMNESE',
          items: [
            { item: 'Investigou início, progressão e características do declínio cognitivo', score: 0.5, ref: 'Diretriz ABN/SBGe — Demências, 2022' },
            { item: 'Avaliou impacto funcional nas atividades de vida diária (AVDs)', score: 0.5, ref: 'Diretriz ABN/SBGe — Demências, 2022' },
            { item: 'Pesquisou alterações de comportamento (irritabilidade, agitação vespertina)', score: 0.5, ref: 'Diretriz ABN/SBGe — Demências, 2022' },
            { item: 'Investigou história familiar de demência e fatores de risco vascular', score: 0.3, ref: 'Diretriz ABN/SBGe — Demências, 2022' }
          ]
        },
        {
          h: 'BLOCO 3 — EXAME FÍSICO E RASTREIO COGNITIVO',
          items: [
            { item: 'Aplicou MEEM ou CDT e interpretou o resultado conforme a escolaridade', score: 1.0, ref: 'Diretriz ABN/SBGe — Demências, 2022' },
            { item: 'Realizou exame neurológico para afastar déficits focais e sinais parkinsonianos', score: 0.5, ref: 'Diretriz ABN/SBGe — Demências, 2022' }
          ]
        },
        {
          h: 'BLOCO 4 — INVESTIGAÇÃO COMPLEMENTAR',
          items: [
            { item: 'Solicitou TSH e T4 livre para afastar hipotireoidismo', score: 0.5, ref: 'Diretriz ABN/SBGe — Demências, 2022' },
            { item: 'Solicitou vitamina B12 e ácido fólico', score: 0.5, ref: 'Diretriz ABN/SBGe — Demências, 2022' },
            { item: 'Solicitou TC ou RM de crânio para afastar causas estruturais', score: 0.5, ref: 'Diretriz ABN/SBGe — Demências, 2022' }
          ]
        },
        {
          h: 'BLOCO 5 — CONDUTA E ORIENTAÇÃO',
          items: [
            { item: 'Prescreveu inibidor da colinesterase (Donepezila ou similar)', score: 1.0, ref: 'Diretriz ABN/SBGe — Demências, 2022' },
            { item: 'Orientou medidas de segurança no lar (fogão, sair sozinha)', score: 0.5, ref: 'Diretriz ABN/SBGe — Demências, 2022' },
            { item: 'Orientou a família sobre sundowning e cuidados gerais', score: 0.5, ref: 'Diretriz ABN/SBGe — Demências, 2022' },
            { item: 'Encaminhou a Neurologia/Geriatria e a grupos de suporte a cuidadores', score: 0.5, ref: 'Diretriz ABN/SBGe — Demências, 2022' }
          ]
        }
      ]
    }
  },


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

];

export default especialidades2;
