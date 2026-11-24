const dermatologia2 = [
  // CASO 1 — PSORÍASE EM PLACAS
  {
    id: 1,
    title: 'Placas avermelhadas e descamativas nos joelhos e braços',
    sub: 'Ambulatório — Dermatologia',
    tema: 'Dermatologia',
    topic: 'Psoríase em Placas',
    level: 'moderado',
    cardAccent: '#EC407A',

    instA: {
      scenario: 'Consulta ambulatorial de dermatologia, paciente encaminhada da UBS por lesões cutâneas recorrentes.',
      patient: 'Marcela Andrade Silva, 38 anos, sexo feminino, motorista de aplicativo.',
      complaint: 'Placas avermelhadas com descamação espessa nos joelhos, nos braços e no couro cabeludo, há cerca de 4 anos, com piora recente.',
      tasks: [
        'Realize a anamnese dirigida ao caso.',
        'Realize o exame físico dermatológico dirigido e, ao receber o impresso fotográfico, faça a fotodescrição das lesões com terminologia semiológica formal.',
        'Formule a hipótese diagnóstica principal e os diferenciais.',
        'Solicite os exames complementares pertinentes.',
        'Proponha o tratamento e oriente a paciente.'
      ]
    },

    instB: {
      vitals: {
        PA: '128/82 mmHg',
        FC: '76 bpm',
        FR: '16 irpm',
        Tax: '36,4 °C',
        Peso: '72 kg',
        Altura: '1,64 m',
        IMC: '26,8 kg/m²'
      },
      physicalGeneral: 'Bom estado geral, corada, hidratada, sobrepeso. Fototipo II.',
      physicalSeg: 'PELE (JOELHO, PERNA E ANTEBRAÇO): ver impresso fotográfico — fornecido somente mediante solicitação de exame da pele. À curetagem metódica de Brocq (se realizada/solicitada): sinal da vela (descamação esbranquiçada em camadas) e sinal de Auspitz (orvalho sangrante — pontos de sangramento puntiforme) | PELE (DEMAIS ÁREAS): placas semelhantes, menores, nos cotovelos; couro cabeludo com placas eritematosas e descamação prateada aderente em região occipital e retroauricular, que ultrapassam discretamente a linha de implantação dos cabelos; sem lesões em dobras | UNHAS: pequenas depressões puntiformes (pitting ungueal) nas unhas das mãos, onicólise discreta em alguns dedos. | ARTICULAÇÕES: dor e discreto edema em interfalangeanas distais dos dedos da mão direita, sem sinais flogísticos importantes no momento.',
      photo: {
        src: 'img/estacoes/psoriase-placas-joelho.webp',
        title: 'Fotografia das lesões (joelho, perna e antebraço)',
        alt: 'Fotografia de paciente sentada com as pernas cruzadas, mostrando lesões avermelhadas e descamativas no joelho, na perna e no antebraço.',
        caption: 'Paciente sentada, de pernas cruzadas: joelho e perna em primeiro plano; antebraço apoiado sobre a coxa ao fundo (canto superior esquerdo da imagem). Sem régua na foto.',
        request: 'Realize a fotodescrição das lesões utilizando terminologia dermatológica formal (topografia, distribuição, lesão elementar, número, forma, tamanho, limites, cor, superfície/escamas e pele ao redor).'
      },
      labs: [
        { test: 'PCR (Proteína C reativa)', val: '8 mg/L', ref: '< 5 mg/L', alt: true },
        { test: 'Glicemia de jejum', val: '108 mg/dL', ref: '70 – 99 mg/dL', alt: true },
        { test: 'Perfil lipídico', val: 'Colesterol total 224 mg/dL, LDL 148 mg/dL, HDL 42 mg/dL, TG 168 mg/dL', ref: 'Colesterol total < 190, LDL < 130, HDL > 40, TG < 150 mg/dL', alt: true },
        { test: 'Fator reumatoide', val: 'Negativo', ref: 'Negativo', alt: false }
      ],
      note: 'Entregar o IMPRESSO FOTOGRÁFICO SOMENTE quando o candidato solicitar examinar a pele; ao entregá-lo, pedir que realize a fotodescrição em voz alta. NÃO fornecer a descrição das lesões — o gabarito está na aba do avaliador (Gabarito da Fotodescrição). Os achados de unhas, couro cabeludo, articulações e da curetagem metódica (sinal da vela/Auspitz) só devem ser informados se o candidato os examinar/solicitar. Os exames metabólicos (glicemia, perfil lipídico) só devem ser entregues se o candidato justificar a solicitação como rastreio de síndrome metabólica, comorbidade frequentemente associada à psoríase. O diagnóstico em si é clínico e não depende de exames laboratoriais.',
      patientProfile: 'Motorista de aplicativo, trabalha longas horas sentado, sedentário. Refere piora das lesões em períodos de maior estresse no trabalho. Tem vergonha das lesões e evita usar roupas de manga curta ou ir à praia.',
      script: [
        { trigger: 'Queixa principal', speech: 'Doutor(a), tenho essas manchas vermelhas com uma casca grossa branca há uns 4 anos, principalmente nos cotovelos, joelhos e no couro cabeludo. Piorou bastante nos últimos meses.' },
        { trigger: 'Sobre evolução/gatilhos', speech: 'Percebo que piora muito quando estou estressada no trabalho, e também quando o tempo está mais frio e seco.' },
        { trigger: 'Sobre coceira/dor', speech: 'Coça um pouco, mas o que mais incomoda é a aparência mesmo, tenho vergonha de usar short, saia ou blusa de manga curta.' },
        { trigger: 'Sobre as unhas', speech: 'Ah, minhas unhas também ficaram estranhas, com uns furinhos, não sabia se tinha relação.' },
        { trigger: 'Sobre dor nas articulações', speech: 'Ultimamente sinto uma dor nos dedos da mão direita, incha um pouco às vezes, principalmente de manhã.' },
        { trigger: 'Sobre história familiar', speech: 'Meu pai tinha "uma coisa parecida" na pele, mas ele nunca foi ao médico direito para isso.' },
        { trigger: 'Sobre tratamentos prévios', speech: 'Já usei uma pomada de corticoide que a farmácia indicou, melhora um pouco, mas sempre volta.' },
        { trigger: 'Pergunta ativa — diagnóstico', speech: 'Doutor(a), isso é contagioso? Meus filhos podem pegar de mim?' }
      ],
      hiddenInfo: 'Sente rigidez matinal nas articulações dos dedos que melhora ao longo do dia, sugestivo de artrite psoriásica — só revela se perguntado especificamente sobre rigidez matinal | Tem se sentido para baixo e evita interações sociais por causa da aparência da pele, com sintomas compatíveis com impacto importante na qualidade de vida — só revela se o candidato explorar o aspecto emocional/psicológico | Bebe socialmente, cerca de 3-4 doses de cerveja aos finais de semana — só revela se perguntado sobre uso de álcool (relevante para escolha terapêutica futura, ex. metotrexato) | Não tem diagnóstico prévio de diabetes ou dislipidemia, mas nunca fez exames de rotina recentemente — só revela se perguntado sobre exames de rastreio prévios',
      actorBehavior: 'Demonstrar desconforto e vergonha ao mostrar as lesões, cobrir os braços por hábito. Preocupada com a possibilidade de ser contagioso, repetir a pergunta se não for esclarecida. Alívio visível quando acolhida e informada corretamente.'
    },

    instC: {
      diagnosis: 'Psoríase em placas (psoríase vulgar), com acometimento ungueal e sinais sugestivos de artrite psoriásica associada.',
      photoDescription: 'Topografia: face anterior (extensora) do joelho, face anterior da perna (região pré-tibial) e face extensora/borda ulnar do terço distal do antebraço | Distribuição: em superfícies EXTENSORAS — padrão típico da psoríase vulgar | Lesão elementar: PLACAS eritematodescamativas (lesões elevadas, > 1 cm, bem delimitadas) | Número e tamanho: no joelho, duas placas grandes (cerca de 5–7 cm cada), a superior sobre a patela e a inferior irregular, abaixo dela, com pequena placa satélite arredondada (~1,5 cm) em sua borda inferior; na perna, pequena placa oval (~1–1,5 cm); no antebraço, placa alongada (~6–8 cm) no sentido do eixo do membro — sem régua, estimativas pela proporção com o membro | Forma: arredondadas a ovaladas e irregulares/policíclicas, por confluência | Limites: NÍTIDOS, bem delimitados em relação à pele sã | Cor: eritemato-rósea (rosa-avermelhada) | Superfície: recoberta por ESCAMAS ESPESSAS, branco-prateadas, secas, lamelares/micáceas e aderentes, com aspecto rachado/em camadas nas placas do joelho; escamação mais fina na placa do antebraço | Pele ao redor: normal, sem eritema perilesional, sem pústulas, sem vesículas, sem crostas e sem escoriações | Síntese esperada: placas eritematosas bem delimitadas com escamas prateadas espessas em superfícies extensoras (joelho, perna, antebraço) — psoríase em placas (vulgar); confirmar com curetagem metódica de Brocq (sinal da vela e de Auspitz) e examinar couro cabeludo, unhas e articulações',
      differentials: [
        'Dermatite seborreica — entra pelo acometimento de couro cabeludo; sai pela descamação característica prateada e aderente e pela distribuição em superfícies extensoras (cotovelos, joelhos), não compatível com o padrão mais untuoso e de couro cabeludo/face da dermatite seborreica.',
        'Eczema numular — entra como causa de placas eritemato-descamativas; sai pela distribuição típica em superfícies extensoras e pelo sinal de Auspitz positivo, mais específico de psoríase.',
        'Tinea corporis (dermatofitose) — entra como diferencial de lesão eritemato-descamativa; sai pela ausência de bordas ativas com clareamento central e pela cronicidade e simetria das lesões, mais compatíveis com psoríase.',
        'Líquen simples crônico — entra pela cronicidade e placas espessadas; sai pela distribuição característica e pelo acometimento ungueal e articular associado, não típicos do líquen simples.'
      ],
      context: 'A psoríase é uma doença inflamatória crônica, imunomediada, com base genética, que acomete cerca de 1-3% da população, cursando com placas eritemato-descamativas características, frequentemente em superfícies extensoras e couro cabeludo. Associa-se a comorbidades metabólicas (síndrome metabólica, obesidade, dislipidemia) e a artrite psoriásica em até 30% dos pacientes, exigindo avaliação e rastreio ativos, como no caso desta paciente com sinais articulares sugestivos.',
      justify: 'O diagnóstico de psoríase é clínico, sustentado pelas placas eritematosas bem delimitadas com descamação prateada espessa em superfícies extensoras e couro cabeludo, associado ao sinal de Auspitz positivo (sangramento puntiforme à raspagem metódica), alterações ungueais características (pitting, onicólise) e sintomas articulares sugestivos de artrite psoriásica associada, quadro compatível com a apresentação clássica descrita pelo Consenso Brasileiro de Psoríase.',
      expectedAnamnesis: 'Tempo de evolução e cronicidade das lesões | Fatores desencadeantes/agravantes (estresse, clima, trauma - fenômeno de Koebner) | Presença de prurido ou dor associada | Alterações ungueais | Sintomas articulares (dor, rigidez matinal, edema) | História familiar de psoríase | Impacto psicossocial e na qualidade de vida | Tratamentos prévios utilizados | Uso de álcool (relevante para opções terapêuticas futuras)',
      expectedPhysical: 'Inspeção completa da pele, incluindo couro cabeludo, unhas e áreas de dobras | Pesquisa do sinal de Auspitz (raspagem metódica de Brocq) | Avaliação de acometimento ungueal | Exame articular sumário buscando sinais de artrite psoriásica | Estimativa da extensão da superfície corporal acometida (BSA) e/ou PASI, quando pertinente',
      expectedExams: [
        { exam: 'O diagnóstico é clínico; biópsia de pele pode ser considerada em casos atípicos ou dúvida diagnóstica', justify: 'Confirmação histológica em casos de apresentação atípica', expected: 'Achados histológicos característicos (acantose, paraqueratose, papilomatose) quando realizada' },
        { exam: 'Glicemia de jejum e perfil lipídico', justify: 'Rastrear síndrome metabólica, comorbidade frequente associada à psoríase', expected: 'Podem estar alterados, como observado nesta paciente' },
        { exam: 'Avaliação reumatológica com fator reumatoide e exames de imagem articulares, se indicado', justify: 'Investigar artrite psoriásica diante de sintomas articulares sugestivos', expected: 'Fator reumatoide tipicamente negativo na artrite psoriásica (auxilia a diferenciar de artrite reumatoide)' }
      ],
      expectedConduct: 'Farmacológica: corticoide tópico de média/alta potência associado a análogos da vitamina D tópicos para doença leve a moderada localizada; considerar fototerapia (UVB de banda estreita) ou terapia sistêmica (metotrexato, acitretina, ou agentes biológicos) diante de doença moderada a grave, extensa, refratária ao tratamento tópico, ou com artrite psoriásica associada — encaminhamento ao especialista para essa definição | Não farmacológica: orientar hidratação regular da pele, evitar traumas cutâneos (fenômeno de Koebner) e manejo do estresse; orientar mudança de estilo de vida (perda de peso, atividade física) dado o risco cardiometabólico associado | Orientações à paciente: esclarecer que a psoríase NÃO é contagiosa, tranquilizando quanto ao medo de transmissão aos filhos; explicar a natureza crônica da doença, com períodos de melhora e piora; encaminhar para avaliação reumatológica diante dos sintomas articulares sugestivos de artrite psoriásica; abordar o impacto psicossocial e oferecer suporte',
      expectedCommunication: 'Esclarecer de forma clara e enfática que a psoríase não é contagiosa | Acolher o impacto emocional e social da doença na vida da paciente | Explicar a cronicidade da doença e a necessidade de acompanhamento a longo prazo | Verificar compreensão do plano terapêutico proposto',
      criticalErrors: [
        'Não esclarecer que a psoríase não é uma doença contagiosa',
        'Não investigar sintomas articulares sugestivos de artrite psoriásica',
        'Não considerar/rastrear comorbidades metabólicas associadas (síndrome metabólica)',
        'Prescrever apenas corticoide tópico crônico sem orientar sobre riscos de uso prolongado ou sem considerar escalonamento terapêutico em doença mais extensa',
        'Ignorar o impacto psicossocial relatado pela paciente'
      ]
    },

    instD: {
      title: 'CHECKLIST — PLACAS AVERMELHADAS NOS COTOVELOS E JOELHOS (PSORÍASE)',
      sections: [
        {
          h: 'BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE',
          items: [
            { item: 'Apresentou-se pelo nome à paciente', score: 0.5, ref: 'CFM Res. 2.217/2018' },
            { item: 'Esclareceu de forma clara e enfática que a psoríase não é contagiosa', score: 1.0, ref: 'Consenso Brasileiro de Psoríase — SBD' }
          ]
        },
        {
          h: 'BLOCO 2 — ANAMNESE',
          items: [
            { item: 'Investigou fatores desencadeantes/agravantes (estresse, clima, trauma)', score: 0.5, ref: 'Consenso Brasileiro de Psoríase — SBD' },
            { item: 'Investigou sintomas articulares e rigidez matinal (rastreio de artrite psoriásica)', score: 1.0, ref: 'Consenso Brasileiro de Psoríase — SBD' },
            { item: 'Perguntou sobre história familiar de psoríase', score: 0.5, ref: 'Consenso Brasileiro de Psoríase — SBD' },
            { item: 'Explorou o impacto psicossocial e na qualidade de vida', score: 0.5, ref: 'Consenso Brasileiro de Psoríase — SBD' }
          ]
        },
        {
          h: 'BLOCO 3 — EXAME FÍSICO',
          items: [
            { item: 'Realizou a fotodescrição das lesões (placas eritematosas bem delimitadas com escamas prateadas em superfícies extensoras) e inspecionou couro cabeludo e unhas', score: 0.5, ref: 'Consenso Brasileiro de Psoríase — SBD' },
            { item: 'Pesquisou o sinal de Auspitz', score: 0.5, ref: 'Consenso Brasileiro de Psoríase — SBD' },
            { item: 'Realizou exame articular sumário', score: 0.5, ref: 'Consenso Brasileiro de Psoríase — SBD' }
          ]
        },
        {
          h: 'BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
          items: [
            { item: 'Reconheceu o diagnóstico como clínico, sem exigir biópsia de rotina', score: 0.5, ref: 'Consenso Brasileiro de Psoríase — SBD' },
            { item: 'Solicitou rastreio de síndrome metabólica (glicemia, perfil lipídico)', score: 1.0, ref: 'Consenso Brasileiro de Psoríase — SBD' }
          ]
        },
        {
          h: 'BLOCO 5 — CONDUTA E ORIENTAÇÃO AO PACIENTE',
          items: [
            { item: 'Prescreveu corticoide tópico associado a análogo da vitamina D', score: 1.0, ref: 'Consenso Brasileiro de Psoríase — SBD' },
            { item: 'Encaminhou para avaliação reumatológica diante dos sintomas articulares', score: 1.0, ref: 'Consenso Brasileiro de Psoríase — SBD' },
            { item: 'Acolheu o impacto psicossocial relatado pela paciente', score: 0.5, ref: 'Consenso Brasileiro de Psoríase — SBD' }
          ]
        }
      ]
    }
  },

  // CASO 2 — HANSENÍASE MULTIBACILAR
  {
    id: 2,
    title: 'Manchas na pele com perda de sensibilidade há vários meses',
    sub: 'UBS — Atenção Primária',
    tema: 'Dermatologia',
    topic: 'Hanseníase Multibacilar',
    level: 'difícil',
    cardAccent: '#EC407A',

    instA: {
      scenario: 'Consulta de demanda espontânea na UBS, paciente encaminhado de área rural após triagem em unidade móvel de saúde.',
      patient: 'Antônio Ferreira Nascimento, 45 anos, sexo masculino, agricultor.',
      complaint: 'Manchas na pele e formigamento/perda de sensibilidade nas mãos há vários meses.',
      tasks: [
        'Realize a anamnese dirigida ao caso, incluindo epidemiologia.',
        'Realize o exame físico dermatoneurológico dirigido e, ao receber o impresso fotográfico, faça a fotodescrição das lesões com terminologia semiológica formal.',
        'Formule a hipótese diagnóstica e classifique operacionalmente o caso.',
        'Solicite os exames complementares adequados.',
        'Proponha o tratamento (PQT-U) e as medidas de vigilância epidemiológica pertinentes.'
      ]
    },

    instB: {
      vitals: {
        PA: '124/80 mmHg',
        FC: '74 bpm',
        FR: '16 irpm',
        Tax: '36,3 °C',
        Peso: '72 kg',
        Altura: '1,70 m',
        IMC: '24,9 kg/m²'
      },
      physicalGeneral: 'Bom estado geral, corado, hidratado, sem sinais de toxemia. Fototipo IV.',
      physicalSeg: 'PELE (DORSO, OMBROS E BRAÇOS): ver impresso fotográfico — fornecido somente mediante solicitação de exame da pele. À palpação, as lesões são infiltradas (espessamento da pele), indolores, e apresentam hipoestesia térmica e dolorosa | PELE (DEMAIS ÁREAS): lesões semelhantes, eritemato-acastanhadas e infiltradas, em face anterior do tronco, antebraços e coxas; placas e nódulos (hansenomas) em pavilhões auriculares e face; rarefação do terço distal das sobrancelhas (madarose discreta) | NEUROLÓGICO: espessamento palpável do nervo ulnar bilateralmente e do nervo fibular comum à direita, com dor discreta à palpação; teste de sensibilidade térmica e dolorosa alterado (hipoestesia) nas lesões cutâneas e em território de nervo ulnar nas mãos; força de preensão discretamente diminuída em mão direita (avaliação de função motora).',
      photo: {
        src: 'img/estacoes/hanseniase-dorso-bracos.webp',
        title: 'Fotografia das lesões (dorso, ombros e braços)',
        alt: 'Fotografia das costas de paciente sentado, com a camisa abaixada até a cintura, mostrando numerosas lesões avermelhadas no dorso, nos ombros e nos braços.',
        caption: 'Paciente sentado, de costas para o examinador, com a camisa abaixada: dorso superior e médio, ombros e face posterior dos braços. Sem régua na foto.',
        request: 'Realize a fotodescrição das lesões utilizando terminologia dermatológica formal (topografia, distribuição, lesão elementar, número, tamanho, limites, cor, superfície e pele ao redor).'
      },
      labs: [
        { test: 'Baciloscopia de raspado intradérmico (lóbulos auriculares, cotovelos, lesão)', val: 'Índice baciloscópico positivo (bacilos álcool-ácido resistentes presentes)', ref: 'Negativo', alt: true },
        { test: 'Biópsia de pele com histopatologia (quando realizada)', val: 'Infiltrado inflamatório dérmico compatível com hanseníase, forma multibacilar', ref: 'Ausência de achados específicos', alt: true }
      ],
      note: 'Entregar o IMPRESSO FOTOGRÁFICO SOMENTE quando o candidato solicitar examinar a pele; ao entregá-lo, pedir que realize a fotodescrição em voz alta. NÃO fornecer a descrição das lesões — o gabarito está na aba do avaliador (Gabarito da Fotodescrição). Os achados de sensibilidade, palpação de nervos e força só devem ser informados se o candidato realizar/solicitar cada teste. A baciloscopia positiva já classifica o caso como multibacilar independentemente da contagem de lesões — essa informação deve ser correlacionada pelo candidato com o número de lesões (>5) para reforçar a classificação operacional multibacilar. A biópsia não é obrigatória para o diagnóstico/início do tratamento quando a baciloscopia já é positiva e o quadro clínico é característico.',
      patientProfile: 'Agricultor, trabalha em área rural, mora com a esposa e dois filhos adolescentes. Relata que um tio que morava na mesma casa há anos teve "uma doença de pele" não bem esclarecida e não foi tratado adequadamente. Refere início insidioso dos sintomas, sem procurar atendimento antes por acreditar que fosse "coisa do sol" ou alergia.',
      script: [
        { trigger: 'Queixa principal', speech: 'Doutor(a), tenho umas manchas na pele há uns meses, e uma dormência estranha nas mãos, como se elas estivessem "adormecidas" o tempo todo.' },
        { trigger: 'Sobre as manchas', speech: 'As manchas são acastanhadas, umas mais avermelhadas e meio inchadas, principalmente nas costas, nos ombros e nos braços, achei que fosse coisa do sol no trabalho na roça.' },
        { trigger: 'Sobre a dormência', speech: 'É como se eu não sentisse direito quando me machuco ou pego algo quente, minha esposa até brigou comigo outro dia porque me queimei na panela e nem senti na hora.' },
        { trigger: 'Sobre fraqueza', speech: 'Sinto que minha mão direita ficou um pouco mais fraca para segurar as coisas, tenho deixado ferramentas caírem sem querer.' },
        { trigger: 'Sobre história familiar/contato', speech: 'Um tio meu, que morou com a gente muitos anos, tinha uma "doença de pele" esquisita, mas nunca soubemos direito o que era, ele não gostava de falar sobre isso.' },
        { trigger: 'Sobre dor', speech: 'Às vezes sinto uma dorzinha nos "caroços" que apareceram perto dos cotovelos e atrás das orelhas.' },
        { trigger: 'Pergunta ativa — diagnóstico', speech: 'Doutor(a), o que é isso? Tem cura? Vou perder o movimento da mão?' }
      ],
      hiddenInfo: 'Está com muita vergonha de ter essa doença, pois ouviu falar de "lepra" quando criança e associa a algo extremamente estigmatizante — verbaliza esse medo/vergonha apenas se acolhido com sensibilidade | Não sabe explicar bem o que aconteceu com o tio que teve doença de pele semelhante, mas relembra que ele tinha "deformidades nas mãos" nos últimos anos de vida — só relembra esse detalhe se perguntado especificamente sobre sequelas físicas de familiares | Está preocupado com a possibilidade de ter transmitido a doença para a esposa e os filhos, mas não verbaliza espontaneamente — só revela essa preocupação se o candidato explicar sobre transmissibilidade e vigilância de contatos | Nunca ouviu falar que hanseníase tem tratamento gratuito pelo SUS — só revela essa dúvida se o candidato abordar o tratamento',
      actorBehavior: 'Demonstrar vergonha e receio ao ouvir possíveis nomes da doença, mostrar-se aliviado quando a equipe trata o tema com naturalidade e acolhimento. Preocupado com sequelas físicas (deformidades), com base na lembrança do tio. Colaborativo durante o exame físico.'
    },

    instC: {
      diagnosis: 'Hanseníase, forma multibacilar (classificação operacional: mais de 5 lesões cutâneas e baciloscopia positiva), com comprometimento neural (nervos ulnar e fibular comum).',
      photoDescription: 'Topografia: dorso (regiões escapulares e dorsal média), ombros e face posterior dos braços, bilateralmente | Distribuição: DISSEMINADA, BILATERAL e tendendo à SIMETRIA | Número: MÚLTIPLAS lesões (dezenas — muito mais de 5) — dado-chave para a classificação operacional multibacilar | Lesões elementares: PÁPULAS e PLACAS eritematosas a eritemato-acastanhadas/vinhosas (cor "ferruginosa"), de aspecto INFILTRADO/edematoso, arredondadas, ovaladas e irregulares; várias CONFLUEM formando placas maiores, sobretudo nos ombros e nos braços | Tamanho: de cerca de 0,5 cm a 3–4 cm; placas confluentes maiores nos braços (sem régua — estimativa pela proporção com o dorso) | Limites: IMPRECISOS em sua maioria, com bordas que se esmaecem na pele sã; algumas lesões com limites mais nítidos | Superfície: lisa, brilhante, sem descamação, vesículas, pústulas, crostas ou ulcerações | Pele ao redor: fototipo IV, com eritema difuso de fundo entre as lesões | Síntese esperada: múltiplas pápulas e placas eritemato-acastanhadas infiltradas, de limites imprecisos, disseminadas e simétricas em dorso, ombros e braços — padrão sugestivo de hanseníase multibacilar (dimorfa/virchowiana); confirmar com teste de sensibilidade nas lesões, palpação de nervos e baciloscopia; diferenciar de reação hansênica (dor, calor, febre, nódulos) e de farmacodermia/urticária',
      differentials: [
        'Pitiríase versicolor — entra pelas manchas disseminadas no tronco; sai pela infiltração e pelo eritema das lesões, pela ausência de descamação furfurácea (sinal de Zileri negativo) e, sobretudo, pela alteração de sensibilidade e pelo espessamento neural, achados centrais e obrigatórios para o diagnóstico de hanseníase.',
        'Urticária ou farmacodermia (exantema medicamentoso) — entram pelas placas eritematosas disseminadas no dorso e nos braços; saem porque as lesões são fixas há meses (e não fugazes, como na urticária), sem prurido importante, sem uso de medicação desencadeante, e com hipoestesia nas lesões e espessamento neural.',
        'Vitiligo — entra como diferencial de manchas cutâneas; sai pela ausência de hipocromia acrômica característica e pela presença de infiltração das lesões e alteração de sensibilidade, incompatíveis com vitiligo.',
        'Tinea corporis — entra como diferencial de lesões cutâneas com bordas; sai pela cronicidade, ausência de prurido intenso e presença de comprometimento neural característico de hanseníase.',
        'Neuropatia periférica de outra etiologia (ex.: diabética) — entra pela queixa de hipoestesia em mãos; sai pela associação com lesões cutâneas características e espessamento neural palpável, achados que direcionam para hanseníase como causa primária do quadro neurológico.'
      ],
      context: 'A hanseníase é uma doença infecciosa crônica causada pelo Mycobacterium leprae, de transmissão respiratória por contato próximo e prolongado com casos multibacilares não tratados, sendo o Brasil um dos países com maior número de casos novos no mundo. O diagnóstico precoce é fundamental para evitar incapacidades físicas permanentes, sendo doença de notificação compulsória. Este caso apresenta contato domiciliar prévio não diagnosticado (tio com sequelas), reforçando a cadeia de transmissão.',
      justify: 'O diagnóstico de hanseníase multibacilar é sustentado pela presença de mais de 5 lesões cutâneas infiltradas com alteração de sensibilidade (hipoestesia térmica e dolorosa), espessamento neural palpável e doloroso (nervos ulnar e fibular comum) com comprometimento motor associado, e confirmado pela baciloscopia positiva — atendendo aos critérios operacionais de classificação multibacilar do Ministério da Saúde, que definem o esquema terapêutico (PQT-U por 12 meses).',
      expectedAnamnesis: 'Caracterização das lesões cutâneas (tempo de evolução, número, distribuição) | Alterações de sensibilidade (térmica, dolorosa, tátil) nas lesões e extremidades | Sintomas neurológicos (dor em trajeto de nervo, fraqueza muscular, formigamento) | História de contato domiciliar ou próximo com pessoa com hanseníase ou "doença de pele" não esclarecida | Área de residência (zona endêmica) | Impacto emocional e crenças sobre a doença (estigma)',
      expectedPhysical: 'Inspeção completa da pele com atenção a número, distribuição e características das lesões | Teste de sensibilidade térmica, dolorosa e tátil nas lesões e em território de nervos periféricos | Palpação dos troncos nervosos periféricos (ulnar, mediano, fibular comum, tibial posterior, auricular) buscando espessamento e dor | Avaliação de força motora nas mãos e pés',
      expectedExams: [
        { exam: 'Baciloscopia de raspado intradérmico', justify: 'Confirmar a presença do bacilo e auxiliar na classificação operacional (multibacilar se positiva)', expected: 'Positiva, confirmando classificação multibacilar' },
        { exam: 'Biópsia de pele com histopatologia (em casos de dúvida diagnóstica)', justify: 'Confirmação histológica quando o quadro clínico não é totalmente característico', expected: 'Achados compatíveis com hanseníase quando realizada' },
        { exam: 'Avaliação neurológica simplificada (teste de sensibilidade com monofilamentos, avaliação de força)', justify: 'Documentar o grau de incapacidade física no momento do diagnóstico, conforme protocolo do Ministério da Saúde', expected: 'Graduação do grau de incapacidade (0, I ou II)' }
      ],
      expectedConduct: 'Farmacológica: iniciar poliquimioterapia única (PQT-U) para esquema multibacilar — rifampicina, dapsona e clofazimina, por 12 meses, conforme protocolo do Ministério da Saúde, disponibilizada gratuitamente pelo SUS | Não farmacológica: orientar exame dermatoneurológico de todos os contatos domiciliares (incluindo esposa e filhos) e aplicação da vacina BCG conforme protocolo para contatos; encaminhar para avaliação e prevenção de incapacidades (fisioterapia, orientações de autocuidado para áreas com perda de sensibilidade) | Orientações ao paciente: explicar que a doença tem cura com o tratamento adequado e gratuito pelo SUS; esclarecer que após o início do tratamento a transmissibilidade cai drasticamente, reduzindo o risco para os familiares; abordar ativamente o estigma histórico da doença ("lepra"), desconstruindo preconceitos com informação atualizada; notificar o caso compulsoriamente ao sistema de vigilância epidemiológica',
      expectedCommunication: 'Abordar o diagnóstico com sensibilidade, reconhecendo o estigma histórico associado à doença | Desconstruir ativamente crenças equivocadas e preconceituosas sobre a "lepra" | Explicar de forma clara a importância do tratamento completo e da avaliação de contatos domiciliares | Acolher o medo do paciente quanto a sequelas físicas, oferecendo informação realista sobre prevenção de incapacidades com diagnóstico e tratamento precoces',
      criticalErrors: [
        'Não realizar teste de sensibilidade e palpação de nervos periféricos, deixando de caracterizar o comprometimento neural',
        'Não classificar corretamente o caso como multibacilar (baseado no número de lesões e/ou baciloscopia), prescrevendo esquema terapêutico inadequado',
        'Não notificar compulsoriamente o caso à vigilância epidemiológica',
        'Não orientar avaliação dos contatos domiciliares',
        'Reforçar estigma ou não abordar adequadamente o preconceito histórico associado à doença'
      ]
    },

    instD: {
      title: 'CHECKLIST — MANCHAS NA PELE COM PERDA DE SENSIBILIDADE (HANSENÍASE)',
      sections: [
        {
          h: 'BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE',
          items: [
            { item: 'Abordou o diagnóstico com sensibilidade, reconhecendo o estigma histórico da doença', score: 1.0, ref: 'Ministério da Saúde — PCDT Hanseníase' },
            { item: 'Desconstruiu ativamente crenças equivocadas sobre "lepra"', score: 0.5, ref: 'Ministério da Saúde — PCDT Hanseníase' }
          ]
        },
        {
          h: 'BLOCO 2 — ANAMNESE',
          items: [
            { item: 'Caracterizou as lesões cutâneas (tempo de evolução, número, distribuição)', score: 0.5, ref: 'Ministério da Saúde — PCDT Hanseníase' },
            { item: 'Investigou contato domiciliar ou próximo com pessoa com hanseníase', score: 1.0, ref: 'Ministério da Saúde — PCDT Hanseníase' },
            { item: 'Perguntou sobre sintomas neurológicos (formigamento, fraqueza)', score: 0.5, ref: 'Ministério da Saúde — PCDT Hanseníase' }
          ]
        },
        {
          h: 'BLOCO 3 — EXAME FÍSICO',
          items: [
            { item: 'Realizou a fotodescrição das lesões (múltiplas, disseminadas, eritemato-acastanhadas, infiltradas, de limites imprecisos) e testou a sensibilidade térmica/dolorosa nelas', score: 1.0, ref: 'Ministério da Saúde — PCDT Hanseníase' },
            { item: 'Palpou os troncos nervosos periféricos buscando espessamento', score: 1.0, ref: 'Ministério da Saúde — PCDT Hanseníase' },
            { item: 'Avaliou força motora nas mãos', score: 0.5, ref: 'Ministério da Saúde — PCDT Hanseníase' }
          ]
        },
        {
          h: 'BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
          items: [
            { item: 'Solicitou baciloscopia de raspado intradérmico', score: 1.0, ref: 'Ministério da Saúde — PCDT Hanseníase' },
            { item: 'Classificou corretamente o caso como multibacilar', score: 1.0, ref: 'Ministério da Saúde — PCDT Hanseníase' }
          ]
        },
        {
          h: 'BLOCO 5 — CONDUTA E ORIENTAÇÃO AO PACIENTE',
          items: [
            { item: 'Prescreveu PQT-U esquema multibacilar (rifampicina + dapsona + clofazimina, 12 meses)', score: 1.0, ref: 'Ministério da Saúde — PCDT Hanseníase' },
            { item: 'Notificou compulsoriamente o caso', score: 0.5, ref: 'Ministério da Saúde — PCDT Hanseníase' },
            { item: 'Orientou avaliação dermatoneurológica dos contatos domiciliares e BCG', score: 0.5, ref: 'Ministério da Saúde — PCDT Hanseníase' }
          ]
        }
      ]
    }
  },

  // CASO 3 — ESCABIOSE (SARNA)
  {
    id: 3,
    title: 'Coceira intensa noturna acometendo toda a família',
    sub: 'UBS — Atenção Primária',
    tema: 'Dermatologia',
    topic: 'Escabiose',
    level: 'fácil',
    cardAccent: '#EC407A',

    instA: {
      scenario: 'Consulta de demanda espontânea na UBS, paciente traz também os filhos para avaliação (simulação focada no paciente índice).',
      patient: 'Rogério Melo Costa, 35 anos, sexo masculino, pedreiro.',
      complaint: 'Coceira intensa, principalmente noturna, há cerca de 3 semanas, que também acomete seus dois filhos.',
      tasks: [
        'Realize a anamnese dirigida ao caso, incluindo avaliação de contactantes.',
        'Realize o exame físico dermatológico dirigido e, ao receber o impresso fotográfico, faça a fotodescrição das lesões com terminologia semiológica formal.',
        'Formule a hipótese diagnóstica e os diferenciais.',
        'Solicite exames complementares, se pertinente.',
        'Proponha o tratamento para o paciente e para os contactantes domiciliares.'
      ]
    },

    instB: {
      vitals: {
        PA: '114/72 mmHg',
        FC: '78 bpm',
        FR: '16 irpm',
        Tax: '36,3 °C',
        Peso: '74 kg',
        Altura: '1,74 m',
        IMC: '24,4 kg/m²'
      },
      physicalGeneral: 'Bom estado geral, corado, hidratado, visivelmente incomodado pela coceira, com escoriações por coçadura em diversas áreas do corpo.',
      physicalSeg: 'PELE (ANTEBRAÇO E PUNHO): ver impresso fotográfico — fornecido somente mediante solicitação de exame da pele | PELE (DEMAIS ÁREAS): pápulas eritematosas e escoriadas em espaços interdigitais das mãos, face flexora dos punhos, cotovelos, axilas, região periumbilical, cintura e sulco interglúteo; sulcos lineares acinzentados sutis (túneis escabióticos) em alguns espaços interdigitais e na face flexora dos punhos | GENITÁLIA: pápulas e nódulos eritemato-acastanhados pruriginosos em corpo do pênis e escroto (nódulos escabióticos) — informar SOMENTE se o candidato examinar a genitália | FACE E COURO CABELUDO: poupados (padrão típico em adultos)',
      photo: {
        src: 'img/estacoes/escabiose-antebraco.webp',
        title: 'Fotografia das lesões (antebraço)',
        alt: 'Fotografia do antebraço estendido, com pelos, mostrando múltiplas lesões avermelhadas pequenas espalhadas até o punho.',
        caption: 'Antebraço em extensão, face extensora/dorsal, do terço proximal (à esquerda da imagem) até o punho e o dorso da mão (à direita). Sem régua na foto.',
        request: 'Realize a fotodescrição das lesões utilizando terminologia dermatológica formal (topografia, distribuição, lesões elementares, número, tamanho, cor, superfície e lesões secundárias).'
      },
      labs: [
        { test: 'Exame micológico direto/dermatoscopia (quando disponível)', val: 'Visualização de ácaro, ovos ou fezes (escíbala) em raspado de túnel escabiótico', ref: 'Ausência de elementos parasitários', alt: true }
      ],
      note: 'Entregar o IMPRESSO FOTOGRÁFICO SOMENTE quando o candidato solicitar examinar a pele; ao entregá-lo, pedir que realize a fotodescrição em voz alta. NÃO fornecer a descrição das lesões — o gabarito está na aba do avaliador (Gabarito da Fotodescrição). Os achados de espaços interdigitais, punhos, genitália e demais áreas só devem ser informados se o candidato examinar cada região — a foto mostra apenas o antebraço. O diagnóstico de escabiose é predominantemente clínico. A dermatoscopia/exame micológico direto só deve ser mencionado como confirmatório se o candidato tiver dúvida diagnóstica ou solicitar ativamente — não é obrigatório para iniciar o tratamento diante de quadro clínico e epidemiológico típicos.',
      patientProfile: 'Pedreiro, mora com a esposa e dois filhos (8 e 5 anos) em casa pequena, todos compartilhando os mesmos quartos e roupas de cama. Refere que os filhos também estão com coceira importante, principalmente à noite, há cerca de 2 semanas.',
      script: [
        { trigger: 'Queixa principal', speech: 'Doutor(a), estou com uma coceira insuportável, principalmente à noite, não consigo nem dormir direito. E meus filhos também estão se coçando muito.' },
        { trigger: 'Sobre localização da coceira', speech: 'Coça mais nos braços, entre os dedos das mãos, nos pulsos, na barriga perto do umbigo, e entre as nádegas também. E nas partes íntimas, mas fico com vergonha de falar.' },
        { trigger: 'Sobre piora noturna', speech: 'É bem pior à noite, de dia melhora um pouco, mas quando deito para dormir a coceira fica insuportável.' },
        { trigger: 'Sobre os filhos', speech: 'Meus dois filhos também estão se coçando bastante, principalmente o menor, ele até já se machucou de tanto se coçar.' },
        { trigger: 'Sobre outros contactantes', speech: 'Minha esposa também reclamou de uma coceira leve, mas ela disse que "não é nada".' },
        { trigger: 'Sobre condições de moradia', speech: 'Moramos numa casa pequena, todo mundo divide os quartos e às vezes até as roupas de cama.' },
        { trigger: 'Pergunta ativa — tratamento', speech: 'Doutor(a), o que é isso? Como eu trato? Preciso tratar todo mundo em casa?' }
      ],
      hiddenInfo: 'Tem vergonha de ter uma doença associada a "falta de higiene", achando que os outros vão julgá-lo — só revela essa preocupação se o candidato explicar que a escabiose não tem relação com higiene pessoal | Não lavou os lençóis e roupas de cama recentemente por não saber que isso era necessário para o tratamento — só revela se perguntado sobre medidas de higiene domiciliar já tomadas | Um colega de obra, que divide o alojamento com ele em alguns dias, relatou coceira parecida há algumas semanas — só revela se perguntado sobre outros contatos fora do ambiente domiciliar | Está preocupado em perder dias de trabalho por causa do tratamento — só revela essa preocupação se o candidato abordar afastamento/orientações práticas',
      actorBehavior: 'Coçar-se discretamente durante a consulta, demonstrando desconforto real. Constrangido ao falar das lesões genitais. Preocupado com os filhos mais do que consigo mesmo. Receptivo e aliviado quando esclarecido sobre a doença não estar relacionada à falta de higiene.'
    },

    instC: {
      diagnosis: 'Escabiose (sarna), com provável surto domiciliar acometendo múltiplos contactantes (esposa e filhos).',
      photoDescription: 'Topografia: face extensora (dorsal) do antebraço, do terço proximal até o punho, estendendo-se ao dorso da mão | Distribuição: disseminada pelo antebraço, sem padrão linear ou dermatomérico; lesões isoladas e algumas agrupadas, mais numerosas nos terços médio e distal | Número: MÚLTIPLAS lesões (dezenas) | Lesões elementares: PÁPULAS ERITEMATOSAS de 2–5 mm, muitas com CROSTÍCULA HEMÁTICA/ESCORIAÇÃO puntiforme central (lesões secundárias à coçadura); pápulas maiores e pequenas PLACAS eritematosas de aspecto urticariforme (5–10 mm), de limites pouco nítidos e com halo eritematoso | Cor: eritematosa (rósea a vermelho-vivo); algumas máculas acastanhadas residuais (hiperpigmentação pós-inflamatória) | Superfície: escoriações e crostículas; sem vesículas íntegras, pústulas, descamação ou exsudação evidentes; túneis escabióticos NÃO são visíveis nesta foto | Pele ao redor: normal, com pilificação abundante; sem eritema difuso | Síntese esperada: dermatose papulosa pruriginosa escoriada, disseminada no antebraço — o aspecto isolado é inespecífico (diferencial com picadas de inseto/prurigo estrófulo); o candidato deve pesquisar ativamente as áreas típicas da escabiose (espaços interdigitais, punhos, axilas, cintura, genitália) e os túneis, e correlacionar com o prurido noturno e o acometimento familiar',
      differentials: [
        'Dermatite atópica — entra pelo prurido intenso; sai pela distribuição característica em espaços interdigitais, punhos e região periumbilical, além do padrão de acometimento familiar simultâneo, incomum na dermatite atópica isolada.',
        'Picadas de inseto / prurigo estrófulo (ex.: percevejos, pulgas, mosquitos) — entra fortemente pela foto do antebraço (pápulas eritematosas urticariformes com ponto central escoriado em área exposta); sai pela presença de túneis escabióticos característicos e pela distribuição típica poupando face, além do padrão de contágio intradomiciliar mais compatível com escabiose.',
        'Urticária — entra pelo prurido intenso; sai pela morfologia das lesões (pápulas escoriadas fixas, não lesões urticariformes fugazes) e pela cronicidade de 3 semanas, incompatível com urticária aguda.',
        'Dermatite herpetiforme — entra como diferencial de prurido intenso com lesões papulosas; sai pela distribuição típica e pelo contexto epidemiológico de contágio familiar, mais compatível com escabiose do que com uma dermatose autoimune rara associada à doença celíaca.'
      ],
      context: 'A escabiose é uma dermatose parasitária causada pelo ácaro Sarcoptes scabiei, transmitida por contato pele a pele prolongado ou compartilhamento de roupas/roupas de cama, sendo extremamente comum em ambientes de aglomeração domiciliar. Não está relacionada à falta de higiene pessoal, e o diagnóstico é predominantemente clínico, baseado no padrão de distribuição das lesões, prurido de piora noturna e, frequentemente, acometimento simultâneo de contactantes domiciliares, como observado neste caso.',
      justify: 'O diagnóstico de escabiose é sustentado pela distribuição característica das lesões papulosas pruriginosas em espaços interdigitais, punhos, região periumbilical e sulco interglúteo, com presença de túneis escabióticos, prurido de piora noturna característica, e pelo contexto epidemiológico de acometimento simultâneo de múltiplos membros da família (esposa e filhos), fortemente sugestivo de surto domiciliar por transmissão interpessoal.',
      expectedAnamnesis: 'Caracterização do prurido (localização, intensidade, padrão noturno) | Tempo de evolução | Presença de sintomas semelhantes em outros membros do domicílio ou contatos próximos | Condições de moradia e compartilhamento de roupas/roupas de cama | Tratamentos já tentados',
      expectedPhysical: 'Inspeção cuidadosa da pele, com atenção a espaços interdigitais, punhos, região periumbilical, sulco interglúteo, axilas e genitália (nódulos escabióticos em pênis e escroto no homem) | Pesquisa ativa de túneis escabióticos | Avaliação de lesões secundárias por coçadura (escoriações, infecção secundária)',
      expectedExams: [
        { exam: 'Dermatoscopia ou exame micológico direto de raspado de túnel escabiótico (quando disponível e útil em caso de dúvida)', justify: 'Confirmar a presença do ácaro, ovos ou fezes em casos de apresentação atípica ou dúvida diagnóstica', expected: 'Visualização de elementos parasitários, confirmando o diagnóstico' }
      ],
      expectedConduct: 'Farmacológica: permetrina a 5% em creme, aplicada em todo o corpo do pescoço para baixo (ou incluindo face/couro cabeludo em lactentes), deixada agir por 8-12 horas antes de banho, com repetição após 7-14 dias conforme protocolo; ivermectina oral como alternativa em casos extensos, crostosos ou de difícil adesão ao tratamento tópico, respeitando contraindicações (ex.: crianças pequenas, gestantes); anti-histamínico oral para alívio sintomático do prurido | Não farmacológica: tratar simultaneamente TODOS os contactantes domiciliares (mesmo assintomáticos), dado o período de incubação; orientar lavagem de roupas de cama, toalhas e roupas pessoais em água quente, com secagem ao sol ou armazenamento em saco plástico fechado por alguns dias para itens que não podem ser lavados | Orientações ao paciente: esclarecer que a escabiose NÃO está relacionada à falta de higiene, desconstruindo o estigma associado; explicar a necessidade de tratamento simultâneo de todos os contactantes domiciliares, mesmo os assintomáticos; orientar que o prurido pode persistir por até 2-4 semanas após tratamento eficaz (reação de hipersensibilidade residual), sem que isso indique falha terapêutica',
      expectedCommunication: 'Desconstruir ativamente o estigma associado à escabiose e falta de higiene | Explicar de forma didática a necessidade de tratar todos os membros do domicílio simultaneamente | Orientar de forma prática e acessível sobre lavagem de roupas e itens domiciliares | Verificar compreensão do esquema terapêutico completo (aplicação, tempo de ação, repetição)',
      criticalErrors: [
        'Tratar apenas o paciente índice sem orientar tratamento simultâneo de todos os contactantes domiciliares',
        'Não orientar sobre lavagem/tratamento de roupas de cama e roupas pessoais',
        'Reforçar ou não desconstruir o estigma de falta de higiene associado à doença',
        'Não orientar corretamente o modo de aplicação e o tempo de permanência da medicação tópica',
        'Interpretar prurido residual pós-tratamento eficaz como falha terapêutica e reiniciar tratamento desnecessariamente sem avaliação adequada'
      ]
    },

    instD: {
      title: 'CHECKLIST — COCEIRA NOTURNA ACOMETENDO TODA A FAMÍLIA (ESCABIOSE)',
      sections: [
        {
          h: 'BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE',
          items: [
            { item: 'Apresentou-se pelo nome ao paciente', score: 0.5, ref: 'CFM Res. 2.217/2018' },
            { item: 'Desconstruiu ativamente o estigma associado a "falta de higiene"', score: 1.0, ref: 'Sociedade Brasileira de Dermatologia' }
          ]
        },
        {
          h: 'BLOCO 2 — ANAMNESE',
          items: [
            { item: 'Caracterizou o prurido (localização, padrão de piora noturna)', score: 0.5, ref: 'Sociedade Brasileira de Dermatologia' },
            { item: 'Investigou sintomas semelhantes em outros membros do domicílio', score: 1.0, ref: 'Sociedade Brasileira de Dermatologia' },
            { item: 'Perguntou sobre condições de moradia e compartilhamento de roupas de cama', score: 0.5, ref: 'Sociedade Brasileira de Dermatologia' }
          ]
        },
        {
          h: 'BLOCO 3 — EXAME FÍSICO',
          items: [
            { item: 'Realizou a fotodescrição das lesões do antebraço (pápulas eritematosas escoriadas, disseminadas) e inspecionou espaços interdigitais, punhos, região periumbilical, sulco interglúteo e genitália', score: 1.0, ref: 'Sociedade Brasileira de Dermatologia' },
            { item: 'Pesquisou ativamente túneis escabióticos', score: 0.5, ref: 'Sociedade Brasileira de Dermatologia' }
          ]
        },
        {
          h: 'BLOCO 4 — RACIOCÍNIO CLÍNICO',
          items: [
            { item: 'Reconheceu o diagnóstico como predominantemente clínico, sem exigir exame confirmatório para tratar', score: 1.0, ref: 'Sociedade Brasileira de Dermatologia' }
          ]
        },
        {
          h: 'BLOCO 5 — CONDUTA E ORIENTAÇÃO AO PACIENTE',
          items: [
            { item: 'Prescreveu permetrina 5% com orientação correta de aplicação e repetição', score: 1.5, ref: 'Sociedade Brasileira de Dermatologia / Ministério da Saúde' },
            { item: 'Orientou tratamento simultâneo de TODOS os contactantes domiciliares', score: 1.5, ref: 'Sociedade Brasileira de Dermatologia' },
            { item: 'Orientou lavagem de roupas de cama e roupas pessoais em água quente', score: 0.5, ref: 'Sociedade Brasileira de Dermatologia' },
            { item: 'Orientou que prurido residual até 2-4 semanas não indica falha terapêutica', score: 0.5, ref: 'Sociedade Brasileira de Dermatologia' }
          ]
        }
      ]
    }
  }
];

export default dermatologia2;
