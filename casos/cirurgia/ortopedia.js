const ortopedia = [

  // CASO 1 — FRATURA DE COLO DO FÊMUR
  {
    id: 1,
    title: 'Idosa caiu no banheiro e não consegue levantar',
    sub: 'PS — Pronto-Socorro',
    tema: 'Ortopedia',
    topic: 'Fratura de Colo do Fêmur',
    level: 'difícil',
    cardAccent: '#37474F',
    instA: {
      scenario: 'Pronto-Socorro de hospital geral. O candidato é o médico plantonista. A paciente chegou de ambulância, trazida pela filha.',
      patient: 'Dona Irene Souza, 78 anos, feminino, aposentada, com osteoporose diagnosticada e hipertensão.',
      complaint: 'Queda da própria altura no banheiro há 3 horas. Dor intensa no quadril direito, incapaz de deambular ou movimentar o membro.',
      tasks: [
        'Realize a anamnese dirigida ao trauma e ao contexto da queda.',
        'Realize o exame físico musculoesquelético do quadril e membro inferior direito.',
        'Solicite os exames de imagem adequados e interprete.',
        'Formule o diagnóstico e classifique a fratura.',
        'Proponha o plano terapêutico, incluindo manejo da dor, estabilização e indicação cirúrgica.'
      ]
    },
    instB: {
      vitals: {
        PA: '148/90 mmHg',
        FC: '96 bpm',
        FR: '18 irpm',
        Tax: '36,8 °C',
        SpO2: '96%'
      },
      physicalGeneral: 'Paciente em REG, álgica, consciente e orientada. Pálida (+/4+). Sem cianose. Sem edema em MMSS.',
      physicalSeg: 'MEMBRO INFERIOR DIREITO: MID em rotação externa e encurtamento aparente (~2 cm); dor intensa à palpação do triângulo de Scarpa e da região trocantérica; dor ao movimento passivo do quadril (rotação e abdução); impossibilidade de elevação ativa do membro. | MEMBRO INFERIOR ESQUERDO: sem alterações. | NEUROLÓGICO: sensibilidade preservada em ambos os membros; pulsos pediosos palpáveis e simétricos.',
      labs: [
        { test: 'Hemoglobina', val: '10,8 g/dL', ref: '12,0–16,0 g/dL', alt: true },
        { test: 'Hematócrito', val: '32%', ref: '36–46%', alt: true },
        { test: 'Creatinina', val: '1,2 mg/dL', ref: '0,5–1,1 mg/dL', alt: true },
        { test: 'Coagulograma (TP)', val: '13,2 s', ref: '11–14 s', alt: false },
        { test: 'Glicemia', val: '108 mg/dL', ref: '70–99 mg/dL', alt: false }
      ],
      image: 'Radiografia de bacia AP e quadril direito em perfil (frog-leg): fratura subcapital do colo do fêmur direito, desviada (Garden III), sem cominução aparente. Cortical medial interrompida com varo do fragmento proximal.',
      note: 'Entregar o Rx quando candidato solicitar. Hemograma e coagulograma disponíveis se pedidos. DXA (densitometria): disponível se candidato perguntar — T-score fêmur −3,2 (osteoporose grave).',
      patientProfile: 'Irene é viúva, mora sozinha no apartamento. Osteoporose tratada com alendronato (mas admite irregularidade). Hipertensa controlada (losartana). Histórico de queda há 8 meses sem fratura. Usa bengala mas estava sem ela no banheiro. Filha presente na consulta, muito ansiosa. Medo de "virar inválida como a vizinha". Colaborativa apesar da dor intensa.',
      script: [
        { trigger: 'Queixa principal', speech: 'Eu escorreguei no banheiro de manhã cedo. Caí no lado direito e não consigo levantar de jeito nenhum. A dor é horrível aqui no quadril.' },
        { trigger: 'Sobre o mecanismo da queda', speech: 'Pisei no tapete e escorreguei. Caí de lado, bati o quadril no chão. Não bati a cabeça.' },
        { trigger: 'Sobre antecedentes', speech: 'Tenho pressão alta e osteoporose. Tomo remédio pra pressão todo dia, mas o remédio de osso tomo às vezes, esqueço.' },
        { trigger: 'Sobre quedas anteriores', speech: 'Caí umas 8 meses atrás também, mas nessa vez não fiz nada. Dessa vez foi diferente, dói muito mais.' },
        { trigger: 'Sobre uso de anticoagulante ou AAS', speech: 'Não tomo AAS nem coagulante. Só a losartana mesmo.' },
        { trigger: 'Sobre o membro direito', speech: 'Não consigo mexer a perna direita. Qualquer movimento dói muito. Parece que tá torto.' },
        { trigger: 'Sobre incapacidade funcional', speech: 'Estava andando normalmente antes. Faço minhas coisas em casa sozinha. Não quero ficar acamada, por favor.' },
        { trigger: 'Pergunta ativa — diagnóstico', speech: 'Quebrei o osso, não é? Vai precisar de cirurgia? Vou conseguir andar de novo?' }
      ],
      hiddenInfo: 'Tomou diazepam 5 mg para dormir à noite — só revela se candidato perguntar sobre todos os medicamentos, incluindo para dormir (benzodiazepínico em idosa = fator de risco para quedas) | Visão embaçada há 2 meses sem consultar oftalmologista — só revela se candidato perguntar sobre visão ou fatores de risco para queda',
      actorBehavior: 'Álgica, geme ao mover o membro. Colaborativa e orientada apesar da dor. Medo de cirurgia mas aceita orientações quando explicadas com calma. Filha interrompe com perguntas — candidato deve incluí-la nas explicações sem perder o foco na paciente.'
    },
    instC: {
      diagnosis: 'Fratura subcapital do colo do fêmur direito desviada (Garden III), em paciente idosa com osteoporose grave e múltiplos fatores de risco para queda (benzodiazepínico, visão embaçada).',
      differentials: [
        'Fratura transtrocantérica — entra pelo mecanismo e clínica similares; diferenciada pelo Rx — fratura transtrocantérica é extracapsular, abaixo do colo, com diferente padrão radiográfico e menor risco de necrose avascular',
        'Contusão de quadril sem fratura — entra pela dor pós-queda; sai pelo encurtamento e rotação externa do MID, impossibilidade de deambulação e imagem radiográfica definitiva',
        'Luxação traumática do quadril — entra pela dor e incapacidade; sai porque na luxação posterior o membro fica em flexão + rotação interna (não externa), e o Rx mostra cabeça deslocada sem fratura de colo'
      ],
      context: 'Fratura de colo do fêmur é a complicação mais grave da osteoporose, afetando ~200.000 brasileiros/ano. Mortalidade em 1 ano de 20–30% por complicações do imobilismo (TEP, pneumonia, úlceras). A fratura subcapital é intracapsular — risco de necrose avascular da cabeça femoral por lesão dos vasos retinaculares. Classificação de Garden: I (incompleta/valga) → IV (completa desviada). Garden III–IV exige cirurgia urgente (< 48h).',
      justify: 'Queda lateral com impacto direto no quadril em osteoporótica; MID em rotação externa e encurtamento; dor à palpação do triângulo de Scarpa; impossibilidade de elevação ativa (sinal do calcanhar) = fratura confirmada. Rx confirma subcapital Garden III.',
      expectedAnamnesis: 'Mecanismo e direção da queda | Dor (localização, intensidade) | Capacidade de deambulação pré e pós-queda | Antecedentes ortopédicos (quedas, fraturas, próteses) | Osteoporose (tratamento, adesão) | Medicamentos (anticoagulantes, corticoides, benzodiazepínicos, diuréticos) | Fatores de risco para queda (visão, equilíbrio, polifarmácia) | Condições clínicas (HAS, DM, ICC) | Mora sozinha? Suporte social',
      expectedPhysical: 'Inspeção: rotação externa e encurtamento do MID | Palpação: dor em triângulo de Scarpa e região trocantérica | Mobilidade passiva: dor e limitação | Sinal do calcanhar (impossibilidade de elevar o calcanhar com joelho estendido) | Avaliação neurovascular (pulsos, sensibilidade) | Exame contralateral para comparação | Ausculta cardíaca e pulmonar (condições pré-operatórias)',
      expectedExams: [
        { exam: 'Radiografia de bacia AP + quadril direito (AP e perfil)', justify: 'Diagnóstico da fratura, classificação (Garden), planejamento cirúrgico', expected: 'Fratura subcapital Garden III' },
        { exam: 'Hemograma completo', justify: 'Anemia por perda hemática (hematoma de partes moles); pré-operatório', expected: 'Hb 10,8 — anemia leve' },
        { exam: 'Coagulograma (TP, TTPA)', justify: 'Pré-operatório; afastar coagulopatia', expected: 'Normal' },
        { exam: 'Função renal e eletrólitos', justify: 'Avaliação pré-operatória; hidratação; risco de IRA', expected: 'Creatinina levemente elevada' },
        { exam: 'ECG e avaliação cardiológica', justify: 'Risco cirúrgico em idosa hipertensa', expected: 'Avaliação pré-operatória' }
      ],
      expectedConduct: 'Farmacológica: Analgesia imediata — dipirona 1g IV + morfina 2–4 mg IV titulada para dor moderada/intensa; profilaxia de TEV com heparina de baixo peso molecular (enoxaparina 40 mg SC 12h após cirurgia) | Não farmacológica: Tração cutânea (discutível — alívio provisório); imobilização relativa do membro; hidratação IV (anemia + risco pré-operatório); cirurgia em < 24–48h (meta atual) — fixação com parafusos canulados (Garden I–II) ou artroplastia parcial/total (Garden III–IV, idosa > 65 anos) | Prevenção secundária: retomar alendronato regularmente + cálcio + vitamina D; avaliar causas de queda (visão, medicamentos); reabilitação pós-operatória precoce; fisioterapia | Orientações: informar à paciente e filha sobre o procedimento cirúrgico, necessidade de internação, expectativa de recuperação',
      expectedCommunication: 'Apresentar-se | Comunicar o diagnóstico de forma clara e empática | Incluir a filha na comunicação | Explicar a necessidade de cirurgia e o timing (< 48h) | Abordar o risco de não operar (imobilismo, TEP, mortalidade) vs risco cirúrgico | Tranquilizar sobre possibilidade de retorno à deambulação | Orientar sobre prevenção de novas quedas',
      criticalErrors: [
        'Não solicitar radiografia ou não reconhecer a fratura no Rx',
        'Não avaliar status neurovascular do membro (pulsos, sensibilidade)',
        'Não controlar a dor adequadamente na admissão',
        'Retardar a indicação cirúrgica sem justificativa (> 48h aumenta mortalidade)',
        'Não investigar e tratar fatores de risco para quedas (benzodiazepínico, visão)',
        'Não incluir profilaxia de TEV no plano (principal causa de morte pós-fratura de quadril)'
      ]
    },
    instD: {
      title: 'Fratura de Colo do Fêmur — Material de Estudo',
      sections: [
        {
          h: 'Classificação de Garden',
          items: [
            { item: 'Garden I: incompleta (valga, incompleta). Garden II: completa sem desvio. Garden III: completa com desvio parcial. Garden IV: completa com desvio total (perda de contato). Garden III–IV: alto risco de necrose avascular; indicação de artroplastia em idosos.', score: 2, ref: 'Garden RS, J Bone Joint Surg 1961' },
            { item: 'Fratura intracapsular (subcapital, transcervical): risco de lesão dos vasos retinaculares → necrose avascular da cabeça femoral (15–30%). Fratura extracapsular (transtrocantérica, subtrocantérica): menor risco de necrose, maior sangramento local.', score: 2, ref: 'Campbell Ortopedia 13ª ed.' }
          ]
        },
        {
          h: 'Tratamento Cirúrgico',
          items: [
            { item: 'Garden I–II (sem desvio): fixação com 3 parafusos canulados paralelos. Garden III–IV em idosos (> 65–70 anos): artroplastia parcial (Austin-Moore, bipolar) ou total. Jovens < 65 anos com Garden III–IV: tentativa de redução e fixação interna (preservar a cabeça).', score: 2, ref: 'Campbell Ortopedia 13ª ed.; AAOS 2021' },
            { item: 'Cirurgia em < 24–48h: reduz mortalidade, risco de complicações, tempo de internação. Cada 24h de atraso aumenta mortalidade em 30 dias em ~10%.', score: 2, ref: 'Shiga T et al., Anesthesiology 2008' }
          ]
        },
        {
          h: 'Prevenção de Complicações',
          items: [
            { item: 'TEP: principal causa de morte após fratura de quadril. Profilaxia: enoxaparina 40 mg SC/dia, iniciada 12h após cirurgia, por 35 dias. Meias de compressão elástica. Mobilização precoce.', score: 2, ref: 'Diretriz Brasileira de Trombose — SBHH 2020' },
            { item: 'Prevenção secundária de quedas: revisar medicamentos (BZD, hipnóticos, anti-hipertensivos), corrigir déficit visual, fisioterapia de equilíbrio, adaptação do domicílio (barras de apoio, tapetes antiderrapantes). Tratar osteoporose (bifosfonato + cálcio + vitamina D).', score: 2, ref: 'AGS/BGS Guidelines 2019' }
          ]
        }
      ]
    }
  },

  // CASO 2 — SÍNDROME DO COMPARTIMENTO
  {
    id: 2,
    title: 'Dor crescente na perna após fratura na UPA',
    sub: 'PS — Pronto-Socorro',
    tema: 'Ortopedia',
    topic: 'Síndrome Compartimental Aguda da Perna',
    level: 'difícil',
    cardAccent: '#37474F',
    instA: {
      scenario: 'Pronto-Socorro de hospital de referência. O candidato é o médico plantonista. O paciente foi trazido pelo pai após acidente de moto há 4 horas. Já tinha sido avaliado em UPA e imobilizado com tala gessada.',
      patient: 'Bruno Almeida, 22 anos, masculino, mototaxista, previamente saudável.',
      complaint: 'Dor progressivamente piora na perna direita desde a imobilização na UPA. "A dor tá muito pior do que quando me machuquei. Tá ardendo e formigando."',
      tasks: [
        'Realize a anamnese direcionada ao trauma e evolução dos sintomas.',
        'Realize o exame físico do membro acometido com busca ativa de sinais de síndrome compartimental.',
        'Formule o diagnóstico diferencial e estabeleça a hipótese principal.',
        'Determine a conduta de emergência imediata.',
        'Oriente sobre o tratamento definitivo (fasciotomia) e suas indicações.'
      ]
    },
    instB: {
      vitals: {
        PA: '124/78 mmHg',
        FC: '108 bpm',
        FR: '18 irpm',
        Tax: '37,0 °C',
        SpO2: '99%'
      },
      physicalGeneral: 'Paciente em REG→MEG, muito agitado pela dor, sudorético, consciente e orientado. Grimace de dor contínuo.',
      physicalSeg: 'MEMBRO INFERIOR DIREITO (removida a tala): perna direita edemaciada, tensa ao toque, pele brilhante e com aspecto tenso; dor extrema à palpação da loja anterior da perna; dor excruciante à dorsiflexão passiva dos dedos (+++); sensibilidade diminuída no 1° espaço interdigital (nervo fibular profundo); pulso pedioso palpável porém fraco. Tala gessada removida. | MEMBRO INFERIOR ESQUERDO: normal.',
      labs: [
        { test: 'CPK (creatinoquinase)', val: '4.200 U/L', ref: '< 200 U/L', alt: true },
        { test: 'Mioglobina sérica', val: '1.840 ng/mL', ref: '< 90 ng/mL', alt: true },
        { test: 'Creatinina', val: '1,4 mg/dL', ref: '0,6–1,2 mg/dL', alt: true },
        { test: 'Potássio', val: '5,2 mEq/L', ref: '3,5–5,0 mEq/L', alt: true },
        { test: 'Hemoglobina', val: '13,2 g/dL', ref: '13,5–17,5 g/dL', alt: false }
      ],
      image: 'Radiografia da perna direita (AP e perfil): fratura transversa do 1/3 médio da diáfise da tíbia, com mínimo desvio. Sem fratura de fíbula.',
      note: 'A tala já está removida ao iniciar a estação. Pressão compartimental (se candidato mencionar ou simular a medição): 42 mmHg no compartimento anterior. Entregar o Rx quando solicitado. CPK e mioglobina disponíveis se pedidos.',
      patientProfile: 'Bruno trabalha como mototaxista há 3 anos. Sofreu colisão lateral com carro. Imobilizado na UPA há 4 horas. A dor foi descrita como 6/10 no atendimento inicial e agora é 10/10. Pai presente, muito assustado. Saudável, não usa medicamentos. Nunca internado.',
      script: [
        { trigger: 'Queixa principal', speech: 'Doutor, essa dor tá piorando muito! Na UPA eles me deram remédio e botaram esse gesso, mas parece que a dor tá muito pior. Tá ardendo e latejando demais, e meu pé tá formigando.' },
        { trigger: 'Sobre a evolução da dor', speech: 'Quando machuquei era 6 de dor. Agora é 10. A morfina que deram não adiantou quase nada. Nada tira essa dor.' },
        { trigger: 'Sobre o formigamento', speech: 'O dedão do pé e esse espaço aqui entre os dedos tá formigando e meio dormente. Comecei a sentir isso faz 1 hora.' },
        { trigger: 'Sobre movimentar o pé', speech: 'Não consigo levantar o pé. E quando você move o dedo pra cima (dorsiflexão passiva), a dor é insuportável.' },
        { trigger: 'Sobre antecedentes', speech: 'Sou saudável, não tomo nada. Nunca operei. Primeira vez que me machuquei assim.' },
        { trigger: 'Sobre o gesso', speech: 'Na UPA eles falaram que era fratura e colocaram o gesso. Desde que colocaram a dor só foi aumentando.' },
        { trigger: 'Pergunta ativa — diagnóstico', speech: 'O que tá acontecendo com minha perna, doutor? Por que a dor é tão forte assim?' }
      ],
      hiddenInfo: 'Tomou naproxeno 500 mg antes de ir à UPA — só revela se candidato perguntar sobre automedicação (AINE não mascara síndrome compartimental, mas é informação de contexto) | A tala foi colocada circunferencial na UPA, não bivalvada — só revela se candidato perguntar sobre como foi feita a imobilização (erro da UPA)',
      actorBehavior: 'Muito agitado pela dor intensa e crescente. Não consegue ficar quieto. Geme durante o exame físico. A dorsiflexão passiva dos dedos causa reação dramática de dor. Cooperativo mas com dificuldade pela intensidade da dor. O pai fica tentando responder no lugar.'
    },
    instC: {
      diagnosis: 'Síndrome Compartimental Aguda do compartimento anterior da perna direita, pós-fratura diafisária de tíbia, com início de rabdomiólise (CPK 4.200 U/L, mioglobinúria) e comprometimento do nervo fibular profundo.',
      differentials: [
        'Dor pós-fratura esperada — entra pela dor pós-trauma; sai porque a dor da síndrome compartimental é desproporcional ao trauma, crescente, não alivia com analgésicos, e há déficit neurológico associado',
        'Trombose venosa profunda — entra pelo edema e dor na perna; sai porque o início é muito agudo, há fratura conhecida como causa, e os sinais de SC (tensão compartimental, dor à dorsiflexão passiva) são específicos',
        'Lesão vascular (isquemia) — entra pela dor intensa e parestesia; sai porque os pulsos ainda estão presentes (SC precoce); a isquemia pura teria extremidade fria e pálida, sem tensão compartimental'
      ],
      context: 'A síndrome compartimental aguda é uma emergência ortopédica tempo-dependente. Ocorre quando a pressão intracompartimental supera a pressão de perfusão (PAD – 30 mmHg ou > 30 mmHg absolutos). As fraturas diafisárias de tíbia são a causa mais comum (45%). A "regra dos 6 Ps" (Pain, Pressure, Paresthesia, Paralysis, Pallor, Pulselessness) — os dois últimos são tardios e indicam isquemia irreversível. A fasciotomia deve ser realizada em < 6h do diagnóstico — após isso, há necrose muscular irreversível e risco de rabdomiólise com IRA.',
      justify: 'Dor desproporcional e crescente pós-fratura; não alivia com opioides; perna tensa e brilhante; dor excruciante à dorsiflexão passiva dos dedos (sinal mais sensível); déficit sensitivo no 1° espaço = nervo fibular profundo comprometido; CPK 4.200 e mioglobina elevada = rabdomiólise iniciada; pressão compartimental 42 mmHg (diagnóstico confirmado).',
      expectedAnamnesis: 'Mecanismo do trauma | Evolução temporal da dor (crescente = alarme) | Resposta a analgésicos (dor que não cede a opioide = SC) | Parestesias e localização (espaço interdigital = fibular profundo = compartimento anterior) | Tipo de imobilização feita (gesso circular = fator de risco) | Antecedentes de coagulopatia, vascular | Medicamentos',
      expectedPhysical: 'Inspeção: edema, brilho, tensão cutânea | Palpação da tensão compartimental (cabeça é a comparação da "dureza" — compartimento normal é mole) | Dor à dorsiflexão passiva dos dedos e tornozelo (sinal mais sensível para comp. anterior) | Avaliação sensitiva do 1° espaço interdigital (fibular profundo) e dorso do pé | Avaliação motora (elevar o pé — tibial anterior) | Pulsos pediosos e tibiais | TEC',
      expectedExams: [
        { exam: 'Medição da pressão compartimental', justify: 'Diagnóstico objetivo — manômetro de Whitesides ou cateter eletrônico. Diagnóstico: pressão > 30 mmHg ou ΔP (PAD – pressão comp.) < 30 mmHg', expected: '42 mmHg = indicação absoluta de fasciotomia' },
        { exam: 'CPK e mioglobina sérica', justify: 'Diagnóstico e gravidade de rabdomiólise', expected: 'CPK 4.200, mioglobina 1.840 = rabdomiólise' },
        { exam: 'Função renal e eletrólitos', justify: 'Monitorar IRA mioglobinúrica e hipercalemia (liberação de K pela necrose muscular)', expected: 'Creatinina 1,4, K 5,2 = início de IRA e hipercalemia' },
        { exam: 'Urina tipo I / mioglobinúria', justify: 'Urina "cor de Coca-Cola" = mioglobinúria = IRA iminente', expected: 'Urina escurecida com mioglobinúria' }
      ],
      expectedConduct: 'EMERGÊNCIA: Remover toda imobilização constritiva (já feito na estação); elevar o membro APENAS para o nível cardíaco (não mais alto — reduz perfusão); FASCIOTOMIA de 4 compartimentos em < 6h (cirurgia de emergência) — padrão: 2 incisões longitudinais na perna (medial e lateral) | Suporte: hidratação agressiva IV (3–6 L SF nas primeiras horas) para proteger rim de mioglobinúria; monitorar diurese (meta 200–300 mL/h durante crise); alcalinização da urina (NaHCO3) pode reduzir precipitação de mioglobina | Analgesia: morfina IV titulada | Pós-fasciotomia: curativo com telas; fechamento primário tardio em 48–72h ou enxerto de pele se necessário; fixador externo para fratura',
      expectedCommunication: 'Apresentar-se | Comunicar a urgência do diagnóstico com calma mas sem minimizar | Explicar ao paciente e ao pai o que é SC: "a musculatura está sofrendo por falta de circulação, precisa de cirurgia urgente" | Informar sobre fasciotomia e a necessidade de agir em horas | Consentimento cirúrgico | Orientar sobre possíveis sequelas se não tratado em tempo',
      criticalErrors: [
        'Não reconhecer os sinais de síndrome compartimental (dor crescente, não responde a opioide, parestesia)',
        'Elevar o membro acima do nível cardíaco (reduz pressão de perfusão — piora a isquemia)',
        'Retardar a fasciotomia ou não indicá-la (cada hora de atraso aumenta lesão muscular irreversível)',
        'Não remover a imobilização constritiva imediatamente',
        'Não monitorar função renal e eletrólitos diante de rabdomiólise (risco de IRA e hipercalemia fatal)'
      ]
    },
    instD: {
      title: 'Síndrome Compartimental Aguda — Material de Estudo',
      sections: [
        {
          h: 'Fisiopatologia',
          items: [
            { item: 'Aumento da pressão intracompartimental → colapso de vênulas e capilares → isquemia muscular e nervosa → edema → ciclo vicioso. Pressão crítica: > 30 mmHg absolutos ou ΔP (PAD – pressão comp.) < 30 mmHg.', score: 2, ref: 'Matsen FA, Clin Orthop 1975' },
            { item: 'Causas externas (compressão): gesso circular, curativo compressivo, trauma crush, queimadura circunferencial. Causas internas (conteúdo aumentado): fratura (hematoma), reperfusão pós-isquemia, edema inflamatório.', score: 1, ref: 'Campbell Ortopedia 13ª ed.' }
          ]
        },
        {
          h: 'Diagnóstico — Os 6 Ps',
          items: [
            { item: 'Pain (dor): desproporcional, crescente, não responde a opioides. Pressure (tensão): compartimento endurecido, brilhante. Paresthesia: formigamento/dormência = nervo isquêmico (precoce). Paralysis: fraqueza motora (tardio). Pallor: palidez relativa (tardio). Pulselessness: pulsos ausentes (tardio = isquemia irreversível).', score: 2, ref: 'Mubarak SJ, Hargens AR, 1981' },
            { item: 'Sinal mais sensível e precoce: dor à dorsiflexão passiva dos dedos (estira músculo do compartimento anterior = tibial anterior). Ausência de déficit motor/sensitivo NÃO exclui SC.', score: 2, ref: 'Whitesides TE, Clin Orthop 1975' }
          ]
        },
        {
          h: 'Tratamento',
          items: [
            { item: 'Fasciotomia: tratamento definitivo e único. Perna: 2 incisões (fibular lateral: descomprime anterior e lateral; posteromedial: descomprime superficial e profundo posterior). Deve ser feita em < 6h do início dos sintomas.', score: 2, ref: 'AAOS 2021; Campbell 13ª ed.' },
            { item: 'Rabdomiólise associada: hidratação vigorosa (3–6 L/h até diurese 200–300 mL/h); alcalinização com bicarbonato; monitorar K, creatinina, mioglobina; hemodiálise se IRA grave.', score: 2, ref: 'Bosch X et al., NEJM 2009' }
          ]
        }
      ]
    }
  },

  // CASO 3 — FRATURA DE COLLES (RÁDIO DISTAL)
  {
    id: 3,
    title: 'Queda com a mão espalmada e deformidade no punho',
    sub: 'UPA — Urgência',
    tema: 'Ortopedia',
    topic: 'Fratura de Colles — Rádio Distal',
    level: 'moderado',
    cardAccent: '#37474F',
    instA: {
      scenario: 'UPA de nível secundário. O candidato é o clínico plantonista. A paciente chegou andando, imobilizando o punho com a mão esquerda.',
      patient: 'Cláudia Mendes, 52 anos, feminino, professora, pós-menopausa há 4 anos, sem doenças graves.',
      complaint: 'Queda da própria altura com apoio da mão direita espalmada. Dor intensa no punho direito e deformidade visível.',
      tasks: [
        'Realize a anamnese do trauma e contexto.',
        'Realize o exame físico do punho e membro superior direito.',
        'Solicite os exames de imagem e interprete.',
        'Formule o diagnóstico e classifique a fratura.',
        'Proponha o tratamento (imobilização ou redução) e orientações.'
      ]
    },
    instB: {
      vitals: {
        PA: '136/84 mmHg',
        FC: '88 bpm',
        FR: '16 irpm',
        Tax: '36,6 °C'
      },
      physicalGeneral: 'Paciente em BEG, ansiosa pela dor, consciente, orientada. Imobilizando o punho direito com a mão esquerda.',
      physicalSeg: 'PUNHO E ANTEBRAÇO DIREITO: deformidade em "dorso de garfo" visível (abaulamento dorsal do punho); edema local moderado; dor intensa à palpação da região metafisária distal do rádio; encurtamento radial aparente; mobilidade ativa do punho impossível pela dor; mobilidade dos dedos preservada; sensibilidade dos dedos preservada; pulso radial palpável. | COTOVELO E OMBRO: sem alterações.',
      labs: [
        { test: 'Radiografia do punho D (AP e perfil)', val: 'Ver descrição', ref: '—', alt: true }
      ],
      image: 'Radiografia do punho direito AP e perfil: fratura transversa da metáfise distal do rádio com desvio dorsal e impactação do fragmento distal (fratura de Colles). Inclinação dorsal do fragmento distal ~25° (normal: 11° volar). Leve cominução dorsal. Sem fratura da estilóide ulnar.',
      note: 'Entregar o Rx quando candidato solicitar. Caso candidato realize redução, comunicar verbalmente que após redução a deformidade diminuiu e o paciente refere melhora da dor. Teste de Allen (se realizado): artérias radial e ulnar patentes.',
      patientProfile: 'Cláudia escorregou na calçada molhada e apoiou a mão direita. Pós-menopausa há 4 anos, sem TRH. Nunca fez densitometria. Professora do ensino médio (mão dominante = direita). Usa anticoncepcional de baixa dose — interrompeu na menopausa. Sem anticoagulante. Nervosa com a deformidade mas colaborativa.',
      script: [
        { trigger: 'Queixa principal', speech: 'Escorreguei na calçada e apoiei a mão para não cair com o rosto. Na hora doeu muito e o punho ficou torto assim.' },
        { trigger: 'Sobre o mecanismo', speech: 'Caí para frente, mão aberta, punho dobrado para cima no impacto. Senti um estalo na hora.' },
        { trigger: 'Sobre a sensibilidade', speech: 'Os dedos estão normais, não tô com formigamento. Só dói no punho mesmo.' },
        { trigger: 'Sobre antecedentes', speech: 'Não tenho nada sério. Entrei na menopausa há 4 anos. Nunca fiz exame de osso.' },
        { trigger: 'Sobre atividade profissional', speech: 'Sou professora, uso muito a mão direita para escrever no quadro. Preciso voltar a trabalhar logo.' },
        { trigger: 'Sobre medicamentos', speech: 'Não tomo nada no momento. Quando estava com ciclo tomava anticoncepcional, mas parei.' },
        { trigger: 'Pergunta ativa — diagnóstico', speech: 'Quebrei o osso do punho? Vai precisar de cirurgia ou só de gesso? Posso usar o computador depois?' }
      ],
      hiddenInfo: 'Histórico de fratura do punho esquerdo há 6 anos após queda similar — só revela se candidato perguntar sobre fraturas prévias (segundo episódio de fratura de baixo impacto = osteoporose provável) | A queda ocorreu porque tropeçou em calçada irregular às 22h com pouca iluminação — só revela se candidato perguntar sobre as condições da queda',
      actorBehavior: 'Ansiosa mas cooperativa. Segura o punho com a mão esquerda. Faz expressão de dor ao exame físico. Preocupada com o trabalho (mão dominante). Fica aliviada quando o candidato explica que provavelmente não precisará de cirurgia.'
    },
    instC: {
      diagnosis: 'Fratura de Colles — fratura da metáfise distal do rádio com desvio dorsal, em mulher pós-menopáusica com provável osteoporose (segunda fratura de baixo impacto).',
      differentials: [
        'Fratura de Smith (reversa de Colles) — entra pela fratura de rádio distal; sai porque na Smith o desvio é VOLAR ("barriga de garfo"), mecanismo é queda com mão em flexão, não extensão',
        'Fratura de estilóide radial (Chauffeur) — entra pela dor e deformidade no punho; sai porque o Rx mostra fratura da metáfise completa, não fratura isolada da estilóide',
        'Entorse grave do punho — entra pela dor pós-queda; sai pela deformidade visível em "dorso de garfo" e pela fratura confirmada no Rx'
      ],
      context: 'A fratura de Colles é a fratura mais comum do membro superior e do esqueleto adulto, responsável por 17% das fraturas tratadas em urgências. Mecanismo: queda com punho em extensão (FOOSH — Fall On Outstretched Hand). Mais frequente em mulheres pós-menopáusicas (osteoporose). Sentinela de osteoporose: fratura de baixo impacto em mulher > 50 anos indica investigação com densitometria.',
      justify: 'Fratura da metáfise distal do rádio com desvio dorsal e deformidade em "dorso de garfo" após queda com mão espalmada; mecanismo FOOSH clássico; mulher pós-menopausa; segundo episódio de fratura de baixo impacto.',
      expectedAnamnesis: 'Mecanismo: queda para frente com mão espalmada, punho em extensão | Dominância da mão | Sensibilidade e motricidade dos dedos (nervo mediano comprometido = complicação) | Antecedentes de fraturas prévias | Status menopausal e TRH | Densitometria prévia | Anticoagulantes | Atividade laboral (afastamento)',
      expectedPhysical: 'Inspeção: deformidade em "dorso de garfo" | Palpação: dor e crepitação na metáfise distal do rádio | Mobilidade do punho | Sensibilidade e força dos dedos (nervo mediano — região tênar, 3 primeiros dedos) | Pulso radial | Avaliação do cotovelo e ombro ipsilateral (lesão em "raio da roda")',
      expectedExams: [
        { exam: 'Radiografia do punho (AP e perfil)', justify: 'Diagnóstico, classificação (desvio, cominução, articular), planejamento do tratamento', expected: 'Fratura de Colles com desvio dorsal 25°' },
        { exam: 'Densitometria óssea (ambulatorial)', justify: 'Segunda fratura de baixo impacto em pós-menopáusica = investigar osteoporose', expected: 'A solicitar ambulatorialmente — T-score provável ≤ −2,5' }
      ],
      expectedConduct: 'Farmacológica: Analgesia com dipirona 1g IV/VO + ibuprofeno 600 mg VO; sedação leve para redução (midazolam 1–2 mg IV ou ketamina) | Não farmacológica: Redução ortopédica fechada (manobra de Cotton-Loder ou tração-contratração) sob anestesia (bloqueio hematoma ou sedação); imobilização com tala gessada suropalmoulnar (3 semanas) → gesso circular por mais 3 semanas; reavaliação radiográfica pós-redução e em 1 semana | Indicações de cirurgia: instabilidade após redução, desvio articular > 2 mm, cominução grave, fratura associada | Ambulatorial: solicitar densitometria; iniciar cálcio + vitamina D; encaminhar para reumatologia/endocrinologia para tratamento de osteoporose (bifosfonato se T ≤ −2,5) | Fisioterapia do punho após consolidação (6 semanas)',
      expectedCommunication: 'Apresentar-se | Explicar o diagnóstico: "quebrou o osso do punho" | Comunicar que a maioria dos casos é tratada com redução e imobilização, sem cirurgia | Explicar o procedimento de redução e a necessidade de analgesia/sedação | Orientar sobre sinais de alarme com o gesso (aumento de edema, dormência, cianose de dedos) | Discutir investigação de osteoporose | Orientar retorno',
      criticalErrors: [
        'Não avaliar o nervo mediano (síndrome do túnel do carpo aguda é complicação da fratura de Colles)',
        'Não realizar redução em fratura desviada (desvio > 20° em volar = fratura instável)',
        'Não imobilizar após redução adequadamente',
        'Não investigar osteoporose em mulher pós-menopausa com segunda fratura de baixo impacto'
      ]
    },
    instD: {
      title: 'Fratura de Colles — Material de Estudo',
      sections: [
        {
          h: 'Classificação e Anatomia',
          items: [
            { item: 'Fratura de Colles: metáfise distal do rádio com desvio dorsal. Fratura de Smith: desvio volar ("garfo invertido"). Fratura de Barton: intra-articular (volar ou dorsal). Índices radiográficos normais: inclinação radial 22°; inclinação volar 11°; variância ulnar 0–2 mm.', score: 2, ref: 'Campbell Ortopedia 13ª ed.' },
            { item: 'Complicações imediatas: lesão do nervo mediano (síndrome do canal do carpo aguda — 1–12%); lesão tendinosa. Tardias: malunião, artrose radiocárpica, distrofia simpático-reflexa (Algodistrofia / CRPS).', score: 2, ref: 'Green DP, Hand Surgery 6ª ed.' }
          ]
        },
        {
          h: 'Tratamento',
          items: [
            { item: 'Conservador (maioria): redução fechada sob anestesia do hematoma (lidocaína 10 mL no hematoma) ou sedoanalgesia; gesso braquiopalmoulnar por 6 semanas. Critérios de estabilidade: inclinação volar > 0°, inclinação radial ≥ 15°, variância ulnar ≤ 3 mm.', score: 2, ref: 'AAOS Clinical Practice Guideline 2019' },
            { item: 'Cirúrgico: placa volar bloqueada (padrão atual para fraturas instáveis/cominutas/articulares); fixador externo; fios de Kirschner. Indicações: fratura instável, intra-articular desviada, perda de redução.', score: 1, ref: 'Lattmann T et al., J Hand Surg 2010' }
          ]
        }
      ]
    }
  },


  // CASO 4 — LESÃO DO LCA
  {
    id: 4,
    title: 'Joelho torceu durante a pelada e inchou rapidamente',
    sub: 'UPA — Urgência',
    tema: 'Ortopedia',
    topic: 'Lesão do Ligamento Cruzado Anterior',
    level: 'moderado',
    cardAccent: '#37474F',
    instA: {
      scenario: 'UPA de nível secundário. Fim da tarde de domingo. O candidato é o médico plantonista. O paciente chegou auxiliado por um amigo, mancando.',
      patient: 'Rafael Nunes, 26 anos, masculino, advogado, praticante amador de futebol.',
      complaint: 'Torceu o joelho direito durante partida de futebol há 2 horas. Sentiu "estalo" na hora, joelho inchou rapidamente. Não consegue apoiar o peso.',
      tasks: [
        'Realize a anamnese do trauma.',
        'Realize o exame físico do joelho com testes específicos.',
        'Solicite os exames de imagem pertinentes.',
        'Formule o diagnóstico e seus diferenciais.',
        'Proponha o plano de tratamento inicial e encaminhamento.'
      ]
    },
    instB: {
      vitals: {
        PA: '122/78 mmHg',
        FC: '82 bpm',
        FR: '16 irpm',
        Tax: '36,5 °C'
      },
      physicalGeneral: 'Paciente em BEG, ansioso, mancando ao entrar. Sem sinais de instabilidade sistêmica.',
      physicalSeg: 'JOELHO DIREITO: edema importante (+++ difuso), hemartrose volumosa palpável, dor difusa; limitação de flexão por edema e dor (flexão máxima 70°, extensão completa presente mas dolorosa); Teste de Lachman: positivo (+++) — translação anterior excessiva da tíbia sem "endpoint" firme; Teste da Gaveta Anterior: positivo; Pivot Shift: não realizado (dor intensa); McMurray: negativo; Valgus/Varus stress: negativos. | JOELHO ESQUERDO: normal.',
      labs: [
        { test: 'Radiografia do joelho D (AP e perfil)', val: 'Ver descrição', ref: '—', alt: false }
      ],
      image: 'Radiografia do joelho direito (AP e perfil): sem fraturas ósseas. Espaço articular preservado. Possível fratura de Segond à borda lateral da tíbia proximal (avulsão pequeníssima — sinal indireto de lesão de LCA). Partes moles aumentadas (hemartrose).',
      note: 'Rx sem fratura. Se candidato solicitar RNM: disponível como resultado — "lesão completa do LCA em seu terço médio, sem acometimento de meniscos ou LCL/LCM". Entregar Rx quando pedido.',
      patientProfile: 'Rafael joga futebol aos domingos há 10 anos. Saudável, sem cirurgias. Faz academia 3x/semana. Sem doença articular prévia. Ativo, pretende continuar praticando esportes. Preocupado se vai poder jogar novamente. Nunca lesionou o joelho antes.',
      script: [
        { trigger: 'Queixa principal', speech: 'Doutor, estava correndo com a bola, pisei e o joelho girou. Senti um estalo alto na hora. O joelho inchou muito rápido, em minutos.' },
        { trigger: 'Sobre o mecanismo', speech: 'Fiz um corte para o lado, o pé ficou plantado e o joelho girou para dentro. Na hora senti o estalo e cai no campo.' },
        { trigger: 'Sobre o inchaço', speech: 'Inchou muito rápido, em uns 30 minutos estava assim. Tem líquido dentro, eu acho.' },
        { trigger: 'Sobre a instabilidade', speech: 'Quando tento apoiar, sinto o joelho "frouxo", como se fosse sair do lugar. Não consigo caminhar normal.' },
        { trigger: 'Sobre o "estalo"', speech: 'Foi um estalo audível, os amigos do campo ouviram também. Não foi estalinho, foi forte.' },
        { trigger: 'Sobre outros sintomas', speech: 'Dói em todo o joelho. Não trava, não sinto o joelho "travando" para abrir.' },
        { trigger: 'Sobre atividade esportiva', speech: 'Jogo todo domingo, é meu hobby. Faço academia. Quero muito continuar praticando esportes depois disso.' },
        { trigger: 'Pergunta ativa — diagnóstico', speech: 'É o ligamento cruzado? Meu amigo operou e ficou 9 meses parado. Vou precisar de cirurgia?' }
      ],
      hiddenInfo: 'Já sentiu o joelho "ceder" uma vez há 3 meses durante treino, mas não deu importância — só revela se candidato perguntar sobre episódios prévios de instabilidade (lesão parcial prévia não diagnosticada) | Tomou ibuprofeno 600 mg antes de vir à UPA — só revela se candidato perguntar sobre automedicação',
      actorBehavior: 'Ansioso e com dor moderada. Mancando mas se movimenta com ajuda. Reage ao teste de Lachman com dor e expressão de instabilidade. Preocupado com o prognóstico esportivo. Colaborativo mas tensa quando o candidato toca o joelho.'
    },
    instC: {
      diagnosis: 'Lesão completa do Ligamento Cruzado Anterior (LCA) do joelho direito com hemartrose aguda, em mecanismo de desaceleração e rotação (valgus-rotação), confirmada pela RNM.',
      differentials: [
        'Lesão meniscal isolada — entra pela dor e edema do joelho; sai porque hemartrose rápida (< 1h) é característica de lesão ligamentar ou fratura (menisco não tem vascularização central); McMurray negativo e Lachman positivo',
        'Lesão do LCP (cruzado posterior) — entra pela instabilidade do joelho; sai porque o mecanismo do LCP é trauma direto na tíbia anterior (dashboard injury); teste da gaveta posterior seria positivo',
        'Fratura da espinha tibial — entra pelo mecanismo similar ao do LCA (avulsão da inserção tibial); diferenciada pelo Rx — fratura óssea visível; mais comum em crianças/adolescentes'
      ],
      context: 'O LCA é o ligamento mais lesionado do joelho, com incidência de ~200.000 cirurgias/ano nos EUA. Lesões em pivô (desaceleração + rotação + valgus) são o mecanismo clássico. Hemartrose aguda em < 2h após trauma de joelho = lesão do LCA em 70–80% dos casos. O teste de Lachman (sensibilidade 85%, especificidade 95%) é o mais confiável no exame físico agudo. A decisão cirúrgica depende da atividade desejada, instabilidade e lesões associadas.',
      justify: 'Mecanismo clássico (pivô, estalo audível); hemartrose rápida; Lachman positivo sem endpoint; Pivot Shift positivo; RNM confirmando lesão completa em terço médio; atleta jovem ativo.',
      expectedAnamnesis: 'Mecanismo: direção da força (valgus + rotação interna = LCA clássico) | Presença de estalo audível | Velocidade do edema (< 2h = hemartrose = LCA / fratura) | Sensação de instabilidade | Travamento (menisco) | Episódios prévios de instabilidade | Nível de atividade física e expectativa funcional | Antecedentes ortopédicos',
      expectedPhysical: 'Inspeção: hemartrose, edema | Palpação: pontos dolorosos (linha articular = menisco; ligamentos colaterais) | Lachman test (joelho 20° flexão, translação anterior da tíbia — MELHOR teste para LCA agudo) | Gaveta anterior (90° flexão) | Pivot Shift (translação + rotação — provável positivo com anestesia) | Valgus/Varus stress (ligamentos colaterais) | McMurray (meniscos) | Avaliação neurovascular',
      expectedExams: [
        { exam: 'Radiografia do joelho (AP, perfil, Merchant)', justify: 'Excluir fraturas ósseas associadas (fratura de Segond, espinha tibial, platô tibial)', expected: 'Sem fratura; fratura de Segond leve visível' },
        { exam: 'RNM do joelho', justify: 'Diagnóstico definitivo de lesão ligamentar, meniscal e cartilaginosa; planejamento cirúrgico', expected: 'Lesão completa do LCA; meniscos íntegros' }
      ],
      expectedConduct: 'Fase aguda: PRICE (Protection, Rest, Ice, Compression, Elevation); imobilizador de joelho (não gesso); muletas com carga parcial tolerada; analgesia (ibuprofeno 600 mg 8/8h, elevação, gelo 20 min 3–4x/dia); aspiração da hemartrose se muito volumosa e dolorosa | Encaminhamento: ortopedia em 1–2 semanas para avaliação especializada | Decisão cirúrgica (reconstrução do LCA): indicada em pacientes jovens e ativos, atletas, instabilidade funcional (cede ao andar/correr); conservador para sedentários idosos sem instabilidade funcional | Reabilitação pré-operatória (pré-hab): fisioterapia para recuperar força do quadríceps e amplitude de movimento antes da cirurgia | Retorno ao esporte: mínimo 9 meses pós-cirurgia com critérios funcionais',
      expectedCommunication: 'Apresentar-se | Comunicar diagnóstico provável: "O ligamento cruzado foi rompido" | Explicar que a decisão cirúrgica não é urgência (não operar agora), mas deve ser discutida com ortopedista | Dar perspectiva realista: cirurgia + reabilitação → retorno esportivo possível em 9–12 meses | Orientar cuidados imediatos (gelo, elevação, imobilizador, muletas) | Passar prescrição e encaminhar ao ortopedista',
      criticalErrors: [
        'Não realizar teste de Lachman (teste mais sensível para diagnóstico de lesão do LCA)',
        'Imobilizar com gesso em extensão completa (impede reabilitação precoce; gesso não é indicado)',
        'Indicar cirurgia de emergência (lesão isolada de LCA não é emergência ortopédica)',
        'Não solicitar Rx para excluir fratura óssea associada'
      ]
    },
    instD: {
      title: 'Lesão do LCA — Material de Estudo',
      sections: [
        {
          h: 'Anatomia e Biomecânica',
          items: [
            { item: 'LCA: dois feixes (ântero-medial e póstero-lateral). Principal estabilizador contra translação anterior da tíbia e rotação interna. Tensão máxima no mecanismo de desaceleração + valgus + rotação interna (Pivot Shift).', score: 2, ref: 'Duthon VB, Joints 2006' },
            { item: 'A tríade infeliz de O\'Donoghue (lesão combinada de LCA + LCM + menisco medial) resulta de trauma em valgus direto. Lesão isolada do LCA: mecanismo sem contato (corte, desaceleração, salto).', score: 1, ref: 'Campbell Ortopedia 13ª ed.' }
          ]
        },
        {
          h: 'Diagnóstico Físico',
          items: [
            { item: 'Lachman test (sensib. 85%, espec. 95%): joelho em 20° de flexão, estabilizar fêmur com uma mão, translacionar a tíbia anteriormente com a outra. Positivo: translação excessiva e/ou ausência de "endpoint" firme.', score: 2, ref: 'Benjaminse A, Am J Sports Med 2006' },
            { item: 'Hemartrose aguda: 70–80% = lesão do LCA; 10% = lesão meniscal vascular (corno posterior); 10–15% = fratura osteocondral. Inchaço > 24h = mais provável lesão meniscal.', score: 2, ref: 'Noyes FR, J Bone Joint Surg 1980' }
          ]
        },
        {
          h: 'Tratamento',
          items: [
            { item: 'Conservador: sedentários > 50 anos sem instabilidade funcional; fisioterapia de fortalecimento de isquiotibiais e quadríceps; órtese funcional. Resultados comparáveis ao cirúrgico em baixa demanda.', score: 1, ref: 'KANON trial, NEJM 2010' },
            { item: 'Cirúrgico: reconstrução com enxerto (tendão patelar, isquiotibiais ou aloenxerto). Indicado em jovens/atletas, instabilidade funcional, lesões meniscais associadas. Reabilitação mínima 9 meses com critérios de retorno (força > 90% do lado contralateral, hop tests).', score: 2, ref: 'AAOS 2022; van Yperen DT, Am J Sports Med 2018' }
          ]
        }
      ]
    }
  },

  // CASO 5 — OSTEOARTROSE DO JOELHO
  {
    id: 5,
    title: 'Dor no joelho que piora com escada há 2 anos',
    sub: 'Ambulatório — Ortopedia',
    tema: 'Ortopedia',
    topic: 'Osteoartrose do Joelho — Gonartrose',
    level: 'fácil',
    cardAccent: '#37474F',
    instA: {
      scenario: 'Ambulatório de Ortopedia de hospital universitário. Consulta eletiva. O candidato é o médico residente atendendo um paciente encaminhado pela UBS.',
      patient: 'Sebastião Carvalho, 68 anos, masculino, aposentado, com queixa de gonalgia bilateral progressiva.',
      complaint: 'Dor bilateral nos joelhos, pior no direito, há 2 anos. Piora ao subir e descer escadas, após longa caminhada e ao levantar da cadeira. Melhora com repouso e analgésico.',
      tasks: [
        'Realize a anamnese completa.',
        'Realize o exame físico dos joelhos.',
        'Solicite os exames de imagem pertinentes.',
        'Formule o diagnóstico e grau de comprometimento.',
        'Proponha o tratamento não farmacológico, farmacológico e indique quando há necessidade de cirurgia.'
      ]
    },
    instB: {
      vitals: {
        PA: '138/88 mmHg',
        FC: '74 bpm',
        FR: '16 irpm',
        Tax: '36,4 °C',
        Peso: '94 kg',
        Altura: '1,70 m',
        IMC: '32,5 kg/m²'
      },
      physicalGeneral: 'Paciente em BEG, corado, obeso grau I, marcha antálgica leve à direita. Sem edema de MMSS.',
      physicalSeg: 'JOELHO DIREITO: leve edema periarticular; crepitação ao movimento (++); dor à palpação das linhas articulares medial e lateral; arco de movimento 0–120° (reduzido — normal 0–135°); varismo leve (+/4+); teste de McMurray negativo; Lachman negativo; sem derrame articular volumoso. | JOELHO ESQUERDO: achados semelhantes porém menos intensos; crepitação leve; sem deformidade angular. | QUADRIL: dor à rotação interna do quadril D — afastar coxartrose.',
      labs: [
        { test: 'PCR', val: '0,4 mg/dL', ref: '< 0,5 mg/dL', alt: false },
        { test: 'VHS', val: '18 mm/h', ref: '< 20 mm/h', alt: false },
        { test: 'Ácido úrico', val: '5,8 mg/dL', ref: '2,5–7,0 mg/dL', alt: false },
        { test: 'Glicemia de jejum', val: '114 mg/dL', ref: '< 100 mg/dL', alt: true }
      ],
      image: 'Radiografia dos joelhos (AP em carga bilateral e perfil D): estreitamento do espaço articular medial D (> 50% — grau III de Kellgren-Lawrence); osteófitos mediais e laterais; esclerose subcondral; não há erosões.',
      note: 'Entregar Rx dos joelhos quando candidato solicitar. PCR e ácido úrico disponíveis se candidato pedir (excluem artrite inflamatória e gota).',
      patientProfile: 'Sebastião é aposentado da indústria, trabalhou 30 anos como operador de máquinas pesadas (em pé, esforço repetitivo). Casado, 3 filhos adultos. Hipertenso há 8 anos (enalapril). Obeso. Sedentário há 5 anos. Usa paracetamol 750 mg quando a dor piora. Já tentou AINEs mas "atrapalhou o estômago". Sem cirurgias prévias de joelho.',
      script: [
        { trigger: 'Queixa principal', speech: 'Doutor, essa dor no joelho tá me atrapalhando muito. Piorou no último ano. Difícil subir escada, levanto da cadeira com dificuldade.' },
        { trigger: 'Sobre a dor', speech: 'É dor em baixo do joelho e nas laterais. Piora quando forço, melhora quando descanso. De manhã fica enrijecido uns 15 minutinhos.' },
        { trigger: 'Sobre rigidez matinal', speech: 'Fica meio duro pela manhã, mas passa rápido, uns 10–15 minutos e já estou bem.' },
        { trigger: 'Sobre atividade física', speech: 'Parei de caminhar porque dói muito. Antes caminhava bastante, mas faz 5 anos que parei. Engordei depois disso.' },
        { trigger: 'Sobre medicamentos', speech: 'Tomo paracetamol quando dói muito. Já tomei ibuprofeno mas ataca o estômago, até tive gastrite.' },
        { trigger: 'Sobre trabalho', speech: 'Trabalhei 30 anos em pé numa fábrica, com muito esforço nas pernas. Acho que foi isso.' },
        { trigger: 'Pergunta ativa — diagnóstico', speech: 'É desgaste do joelho? Vou precisar de cirurgia? Tenho medo de colocar prótese.' }
      ],
      hiddenInfo: 'Usa diclofenaco 50 mg de vez em quando, comprado sem receita — só revela se candidato perguntar especificamente sobre TODOS os remédios incluindo os comprados sem receita (AINE + hipertensão + risco gastrointestinal) | Teve lesão de menisco no joelho direito tratada conservadoramente aos 40 anos — só revela se candidato perguntar sobre antecedentes articulares',
      actorBehavior: 'Tranquilo e colaborativo. Marcha com discreta proteção do joelho direito. Crepita ao flexionar o joelho durante o exame — reage com "esse barulhão é normal, doutor?". Receptivo a orientações sobre dieta e exercício quando motivado adequadamente.'
    },
    instC: {
      diagnosis: 'Gonartrose bilateral, predominantemente medial à direita, grau III de Kellgren-Lawrence, em paciente obeso com histórico de esforço mecânico repetitivo e lesão meniscal prévia.',
      differentials: [
        'Artrite reumatoide — entra pela dor bilateral e rigidez matinal; sai porque a rigidez é < 30 min (AO) vs > 1h (AR), PCR e VHS normais, sem sinovite ativa, sem erosões no Rx',
        'Artrite gotosa — entra pelo homem com dor articular; sai porque ácido úrico normal, sem episódios agudos de monoartrite, sem tofos, Rx sem erosões em saca-bocado',
        'Coxartrose com irradiação para joelho — entra pela dor no joelho em idoso; sai pela dor à rotação do quadril no exame (deve ser investigada) — pode coexistir'
      ],
      context: 'A osteoartrose (OA) é a doença articular mais prevalente, afetando >50% dos maiores de 65 anos. O joelho é o local mais sintomático. Fatores de risco: obesidade (principal modificável), idade, sexo feminino, lesão articular prévia (menisco, ligamentos), trabalho com esforço físico repetitivo. O grau de Kellgren-Lawrence (I–IV) correlaciona imagem e sintomas. Não existe cura; o tratamento visa controle da dor, função e qualidade de vida.',
      justify: 'Estreitamento articular medial > 50% + osteófitos + esclerose subcondral ao Rx (K-L grau III); dor mecânica com rigidez matinal breve (< 30 min); crepitação; varismo; obesidade; trabalho físico; lesão meniscal prévia; idade; inflamatórios normais.',
      expectedAnamnesis: 'Caracterização da dor (mecânica: piora com uso, melhora com repouso; vs inflamatória: piora em repouso, rigidez > 1h) | Rigidez matinal (duração) | Dificuldades funcionais (subir escadas, levantar de cadeira, deambulação) | Fatores de risco (obesidade, atividade laboral, lesões prévias) | Medicamentos e resposta | Comorbidades (HAS, DM, gastropatia) | Nível de atividade atual',
      expectedPhysical: 'Marcha (antálgica, Trendelenburg) | Alinhamento em valgo/varo | Edema articular | Crepitação | Amplitude de movimento | Testes meniscais (McMurray) e ligamentares (Lachman, gaveta) | Exame do quadril (coxartrose associada) | Avaliação de deformidade angular',
      expectedExams: [
        { exam: 'Radiografia dos joelhos em carga (AP e perfil)', justify: 'Diagnóstico e estadiamento (K-L); planejamento cirúrgico se necessário. Em carga: melhor avaliação do espaço articular real.', expected: 'K-L grau III medial D' },
        { exam: 'PCR e VHS', justify: 'Excluir causa inflamatória/infecciosa; na OA devem ser normais', expected: 'Normais' },
        { exam: 'Ácido úrico', justify: 'Excluir artropatia gotosa como componente', expected: 'Normal' }
      ],
      expectedConduct: 'Não farmacológica (pilar fundamental): Perda de peso — cada kg perdido reduz 4 kg de carga sobre o joelho; meta IMC < 25; encaminhar para nutricionista; fisioterapia — fortalecimento de quadríceps e isquiotibiais (reduz sintomas sem dano articular); caminhada em superfície plana adaptada; hidroterapia; órtese de descarga medial (joelheira com cunha lateral se varismo); adaptações do domicílio | Farmacológica: Paracetamol 500–1000 mg VO 6/6h (primeira linha — mais seguro); AINE tópico (diclofenaco gel) — menos efeito sistêmico; AINE oral (ibuprofeno 400–600 mg) com cautela (HAS + gastropatia — usar IBP); evitar opioides para dor crônica articular (dependência); injeção intraarticular de corticoide (crise aguda — máx 3–4x/ano) ou hialuronato; duloxetina 60 mg/dia tem eficácia para dor crônica | Cirúrgico: artroplastia total do joelho (ATJ) quando dor intratável, limitação funcional grave, K-L grau III–IV refratário a 6 meses de tratamento conservador',
      expectedCommunication: 'Apresentar-se | Explicar o diagnóstico: "desgaste da cartilagem do joelho" | Enfatizar que perda de peso é o tratamento mais eficaz | Reintroduzir atividade física de forma adaptada (não contraindicar o exercício — medo infundado) | Explicar escada terapêutica dos medicamentos | Contextualizar a cirurgia: não urgência, reservada para quando o tratamento conservador falha | Orientar sobre expectativa realista',
      criticalErrors: [
        'Contraindicar atividade física ("repouso total") em OA — isso piora atrofia muscular e progressão',
        'Prescrever AINE oral em paciente com gastropatia e HAS sem IBP e sem monitorizar PA',
        'Indicar cirurgia sem pelo menos 3–6 meses de tratamento conservador adequado',
        'Não investigar causas inflamatórias (AR, gota) antes de concluir OA'
      ]
    },
    instD: {
      title: 'Osteoartrose do Joelho — Material de Estudo',
      sections: [
        {
          h: 'Fisiopatologia e Classificação',
          items: [
            { item: 'OA: degradação da cartilagem articular hialina por desequilíbrio entre síntese e destruição de proteoglicanos/colágeno II (condrócitos). Secundariamente: esclerose subcondral, formação de osteófitos, sinovite leve. Doença de toda a articulação, não só da cartilagem.', score: 1, ref: 'Loeser RF, NEJM 2016' },
            { item: 'Kellgren-Lawrence (KL) no Rx: I = osteófitos mínimos duvidosos; II = osteófitos definidos, espaço articular normal; III = estreitamento moderado do espaço + osteófitos moderados; IV = estreitamento grave / apagamento do espaço articular.', score: 2, ref: 'Kellgren JH, Ann Rheum Dis 1957' }
          ]
        },
        {
          h: 'Tratamento Não Farmacológico',
          items: [
            { item: 'Perda de peso: 1 kg de peso corporal = 4 kg de carga no joelho. Perda de 5–10% do peso reduz dor 50%. É a intervenção modificadora mais eficaz na OA de joelho.', score: 2, ref: 'Christensen R, Ann Rheum Dis 2007' },
            { item: 'Exercício físico: fortalecimento de quadríceps (reduz dor, melhora função — evidência grau A). Aeróbico de baixo impacto (natação, bicicleta, caminhada em piso plano). NÃO contraindica exercício na OA.', score: 2, ref: 'OARSI Guidelines 2019' }
          ]
        },
        {
          h: 'Tratamento Cirúrgico',
          items: [
            { item: 'Artroplastia Total do Joelho (ATJ): substituição das superfícies articulares por implante metálico e polietileno. Indicada em K-L III–IV com falha do tratamento conservador. Sobrevida do implante: 90% em 15–20 anos. Satisfação: 85–90% dos pacientes.', score: 2, ref: 'AAOS Guidelines 2021' },
            { item: 'Osteotomia tibial alta: opção em jovens < 60 anos com OA medial + deformidade em varo. Redistribui carga para o compartimento lateral (menos acometido). Preserva o joelho nativo, posterga artroplastia.', score: 1, ref: 'Campbell Ortopedia 13ª ed.' }
          ]
        }
      ]
    }
  },

  // CASO 6 — HÉRNIA DE DISCO LOMBAR (LOMBOCIATALGIA)
  {
    id: 6,
    title: 'Dor nas costas com choque elétrico descendo pela perna',
    sub: 'UBS — Atenção Primária',
    tema: 'Ortopedia',
    topic: 'Hérnia de Disco Lombar — Lombociatalgia L5-S1',
    level: 'moderado',
    cardAccent: '#37474F',
    instA: {
      scenario: 'UBS de zona urbana. Consulta da tarde. O candidato é o médico de família e comunidade.',
      patient: 'Patrícia Gomes, 38 anos, feminino, enfermeira, sem doenças prévias relevantes.',
      complaint: 'Dor lombar intensa há 10 dias, com irradiação para glúteo e face posterior da perna direita até o pé. Iniciou após levantar paciente pesado no trabalho.',
      tasks: [
        'Realize a anamnese completa, pesquisando red flags.',
        'Realize o exame físico neurológico e musculoesquelético dirigido.',
        'Solicite os exames pertinentes.',
        'Formule o diagnóstico e explique os diferenciais.',
        'Proponha o tratamento e oriente sobre prognóstico e retorno ao trabalho.'
      ]
    },
    instB: {
      vitals: {
        PA: '118/76 mmHg',
        FC: '76 bpm',
        FR: '16 irpm',
        Tax: '36,5 °C'
      },
      physicalGeneral: 'Paciente em BEG→REG, com discreta antálgica ao andar. Sem febre, sem perda de peso.',
      physicalSeg: 'COLUNA LOMBAR: contratura paravertebral bilateral (L3–S1); redução da mobilidade lombar (flexão 50°, extensão 20°, lateroflexão 30°); dor à digitopressão em L4–S1. | NEUROLÓGICO MMII: Lasègue positivo a 40° à direita (reproduz a ciatalgia); Lasègue cruzado negativo; reflexo aquileu direito diminuído (+/4+) vs. esquerdo (++/4+); sensibilidade diminuída na face lateral do pé D e 5° pododáctilo D (dermátomo S1); força de plantiflexão D levemente reduzida (4/5) — elevar em pontas dos pés: assimetria D < E; reflexo patelar preservado bilateralmente.',
      labs: [
        { test: 'Hemograma', val: 'Normal', ref: 'Normal', alt: false },
        { test: 'PCR', val: '0,3 mg/dL', ref: '< 0,5 mg/dL', alt: false },
        { test: 'Glicemia', val: '92 mg/dL', ref: '70–99 mg/dL', alt: false }
      ],
      image: 'RNM da coluna lombar (se solicitada): protrusão discal paracentral direita em L5-S1, com compressão da raiz S1 direita no recesso lateral. Sem sinal de infecção ou neoplasia.',
      note: 'RNM disponível como resultado se candidato solicitar. Não solicitada de rotina para lombalgia < 6 semanas sem red flags — mas indicada aqui por déficit neurológico (hiporreflexia + déficit motor). Radiografia lombar (se pedida): discretas alterações degenerativas em L4-L5 e L5-S1, sem fratura.',
      patientProfile: 'Patrícia é enfermeira da UTI, trabalha 12h em turnos. Divorciada, 2 filhos pequenos. Fisicamente ativa (caminhada e natação antes da lesão). Sem tabagismo, sem uso de corticoide. Já teve episódios de lombalgia antes mas nunca com irradiação. Muito preocupada com o trabalho (não pode se ausentar). Ansiedade por ficar sem renda.',
      script: [
        { trigger: 'Queixa principal', speech: 'Doutora, essa dor nas costas é horrível. Mas o pior é uma descarga elétrica que desce pelo glúteo e pela perna até o pé. Cada passo que dou, parece que levo um choque.' },
        { trigger: 'Sobre o início', speech: 'Comecei a sentir depois que levantei um paciente obeso na UTI, há uns 10 dias. Na hora senti um tranco nas costas.' },
        { trigger: 'Sobre a irradiação', speech: 'A dor desce assim, pela parte de trás da perna, lateral, até o pé e o dedinho. Fica dormindo também.' },
        { trigger: 'Sobre sintomas de alerta', speech: 'Não tive febre, não perdi peso. Faço xixi e cocô normal, sem problema nenhum.' },
        { trigger: 'Sobre o trabalho', speech: 'Tô de atestado de 5 dias mas preciso voltar. Sou chefe da UTI, não posso ficar muito tempo fora.' },
        { trigger: 'Sobre piora e melhora', speech: 'Piora quando fico sentada muito tempo, quando tusso ou faço força. Melhora quando deito de lado com um travesseiro entre os joelhos.' },
        { trigger: 'Sobre tratamento já feito', speech: 'Tomei ibuprofeno e melhorou um pouco, mas a dor ainda tá forte. Fiz compressas quentes.' },
        { trigger: 'Pergunta ativa — diagnóstico', speech: 'É hérnia de disco? Precisa de cirurgia? Não quero operar, tenho medo.' }
      ],
      hiddenInfo: 'Há 3 dias acordou com dificuldade para urinar — precisou forçar muito — e não comentou, pois "achou que era nervoso" — só revela se candidato perguntar especificamente sobre sintomas urinários, intestinais ou incontinência (RED FLAG para Síndrome da Cauda Equina) | Faz uso de corticoide inalatório para asma leve — só revela se candidato perguntar sobre todos os medicamentos',
      actorBehavior: 'Álgica ao sentar e mudar de posição. Marcha com antálgica leve. Reage com expressão de dor forte ao teste de Lasègue. Ansiosa pela situação no trabalho. Colaborativa. Se candidato não perguntar sobre sintomas urinários, não menciona espontaneamente.'
    },
    instC: {
      diagnosis: 'Hérnia de Disco Lombar em L5-S1 com radiculopatia S1 direita (confirmada pela clínica: dermátomo S1, hiporreflexia aquiliana, déficit de plantiflexão, Lasègue positivo a 40°), com possível síndrome da cauda equina em instalação (retenção urinária — RED FLAG).',
      differentials: [
        'Estenose do canal lombar — entra pela ciatalgia; sai porque a estenose causa claudicação neurogênica (dor ao caminhar que melhora ao sentar/fletir) e afeta tipicamente idosos; a paciente é jovem com radiculopatia aguda pós-trauma',
        'Lombalgia mecânica inespecífica — entra pela lombalgia; sai pela irradiação em dermátomo específico, déficit neurológico (reflexo, sensibilidade, força) e Lasègue positivo',
        'Síndrome piriforme — entra pela ciatalgia; sai porque não há déficit neurológico real, o Lasègue é negativo na síndrome piriforme e a dor é glútea sem irradiação bem definida no dermátomo'
      ],
      context: 'A hérnia de disco lombar (HDL) é responsável por 5% das lombalgias mas pela maioria das radiculopatias. L5-S1 é o nível mais afetado (45%). O déficit neurológico guia o diagnóstico: S1 = hiporreflexia aquiliana + déficit de plantiflexão + dermátomo lateral do pé; L4 = reflexo patelar diminuído + déficit de extensão do joelho; L5 = reflexo fibular diminuído + déficit de extensão do hálux. A retenção urinária + perda de controle esfincteriano = síndrome da cauda equina = emergência cirúrgica em < 24h.',
      justify: 'Radiculopatia S1: dermátomo S1 (lateral do pé, 5° dedo) com parestesia + hiporreflexia aquiliana + déficit plantiflexão + Lasègue 40° + confirmação na RNM (protrusão L5-S1). Red flag: retenção urinária há 3 dias = síndrome da cauda equina iminente → avaliação neurocirúrgica urgente.',
      expectedAnamnesis: 'Caracterização da dor (mecânica vs inflamatória) | Irradiação e dermátomo | Fatores de piora (Valsalva, tosse, espirro = aumentam pressão epidural) | RED FLAGS: febre (espondilodiscite), perda de peso (neoplasia), trauma de alta energia, incontinência/retenção urinária/fecal (síndrome da cauda equina — URGÊNCIA), saddle anesthesia, fraqueza progressiva bilateral | Antecedentes de câncer | Uso de corticoides | Ocupação e carga laboral | Episódios prévios',
      expectedPhysical: 'Lasègue (teste de elevação da perna reta — sensib 80%): elevação do MIE com joelho estendido — positivo se reproduz a ciatalgia < 70° | Lasègue cruzado (mais específico) | Reflexos osteotendinosos (patelar L4, aquileu S1) | Força motora: extensão do hálux (L5), plantiflexão (S1), flexão do joelho (S1–S2) | Sensibilidade segmentar | Exame do tônus do esfíncter anal (se síndrome da cauda equina suspeita)',
      expectedExams: [
        { exam: 'RNM da coluna lombar', justify: 'Padrão-ouro para diagnóstico de HDL — visualiza disco, compressão radicular, excluir neoplasia/infecção. Indicada com déficit neurológico ou suspeita de cauda equina.', expected: 'Protrusão L5-S1 com compressão de S1 direita' },
        { exam: 'Radiografia lombar', justify: 'Excluir fratura, espondilolistese, alterações degenerativas grosseiras. Não visualiza disco.', expected: 'Degeneração L4-L5 e L5-S1' }
      ],
      expectedConduct: 'RED FLAG IDENTIFICADO (retenção urinária): encaminhar urgência/PS para avaliação neurocirúrgica — possível síndrome da cauda equina; RNM de emergência; cirurgia em < 24h se confirmada | Sem red flag (conduta conservadora para 85% dos casos): Repouso relativo (não absoluto); analgesia: paracetamol 1g 6/6h + AINE (naproxeno 500 mg 12/12h com IBP) + miorrelaxante (ciclobenzaprina 5 mg 8/8h) para contração paravertebral; fisioterapia após fase aguda (McKenzie, estabilização segmentar); orientar que 85% das HDL melhoram em 6–12 semanas com tratamento conservador | Cirurgia eletiva: falha de 6 semanas de tratamento conservador com déficit neurológico progressivo; dor incapacitante refratária',
      expectedCommunication: 'Apresentar-se | Perguntar ativamente sobre sintomas de cauda equina (retenção urinária, incontinência, anestesia em sela) | Comunicar a gravidade da retenção urinária: "precisa ser avaliada hoje no hospital" | Explicar que HDL tem bom prognóstico com tratamento conservador (quando sem cauda equina) | Orientar sobre ergonomia e postura no trabalho | Discutir afastamento adequado',
      criticalErrors: [
        'Não pesquisar red flags de síndrome da cauda equina (incontinência, retenção urinária, anestesia em sela)',
        'Não encaminhar para avaliação neurocirúrgica urgente diante de retenção urinária (síndrome da cauda equina = emergência cirúrgica < 24h)',
        'Prescrever repouso absoluto em cama (piora a evolução e prolonga a incapacidade)',
        'Solicitar RNM de rotina para lombalgia aguda SEM red flags ou déficit neurológico (não há indicação)'
      ]
    },
    instD: {
      title: 'Hérnia de Disco Lombar e Lombociatalgia — Material de Estudo',
      sections: [
        {
          h: 'Correlação Dermátomo–Disco',
          items: [
            { item: 'L3-L4: reflexo patelar diminuído; déficit de extensão do joelho; dermátomo face anterior/medial da coxa. L4-L5: déficit de extensão do hálux (tibial anterior); Lasègue positivo; dermátomo dorso do pé e 1° dedo. L5-S1: reflexo aquileu diminuído; déficit de plantiflexão (gastrocnêmio); dermátomo lateral do pé e 5° dedo.', score: 2, ref: 'Harrison 21ª ed.; Campbell Ortopedia 13ª' }
          ]
        },
        {
          h: 'Red Flags na Lombalgia',
          items: [
            { item: 'Síndrome da Cauda Equina: incontinência/retenção urinária ou fecal + anestesia em sela (períneo, glúteos, face interna das coxas) + paraparesia. Emergência neurocirúrgica — descompressão em < 24h (idealmente < 6h).', score: 2, ref: 'Verwoerd AJ, Spine 2013' },
            { item: 'Outras red flags: febre + lombalgia (espondilodiscite); perda de peso + tabagista > 50 anos (neoplasia maligna — pulmão, mama, próstata metastatizam para coluna); trauma de alta energia; uso de corticoide/imunodeficiência (fratura osteoporótica / TB vertebral).', score: 2, ref: 'Chou R, Ann Intern Med 2007' }
          ]
        },
        {
          h: 'Tratamento e Prognóstico',
          items: [
            { item: '85% das HDL sintomáticas melhoram espontaneamente em 6–12 semanas. Tratamento conservador: analgesia (paracetamol + AINE), miorrelaxante, fisioterapia (após fase aguda), atividade física adaptada. Cirurgia (microdiscectomia) só após 6 semanas de falha do conservador.', score: 2, ref: 'Weber H, NEJM 1983; SPORT trial, JAMA 2006' }
          ]
        }
      ]
    }
  },


  // CASO 7 — RUPTURA DO MANGUITO ROTADOR
  {
    id: 7,
    title: 'Dor no ombro que não deixa dormir nem levantar o braço',
    sub: 'Ambulatório — Ortopedia',
    tema: 'Ortopedia',
    topic: 'Ruptura do Manguito Rotador',
    level: 'moderado',
    cardAccent: '#37474F',
    instA: {
      scenario: 'Ambulatório de Ortopedia. Consulta eletiva. O candidato atende um paciente encaminhado pela UBS com queixa de ombro.',
      patient: 'Antônio Pereira, 58 anos, masculino, pintor de parede, hipertenso.',
      complaint: 'Dor no ombro direito há 4 meses, piora ao elevar o braço acima da cabeça e à noite ao deitar sobre o ombro. Dificuldade para pentear o cabelo e alcançar prateleiras altas.',
      tasks: [
        'Realize a anamnese completa.',
        'Realize o exame físico do ombro com testes específicos.',
        'Solicite os exames de imagem pertinentes.',
        'Formule o diagnóstico.',
        'Proponha o plano de tratamento conservador e discuta indicação cirúrgica.'
      ]
    },
    instB: {
      vitals: {
        PA: '142/90 mmHg',
        FC: '76 bpm',
        FR: '16 irpm',
        Tax: '36,5 °C'
      },
      physicalGeneral: 'Paciente em BEG, corado, proteção do ombro direito ao andar. Sem outras alterações.',
      physicalSeg: 'OMBRO DIREITO: sem edema visível; sem atrofia muscular evidente; arco de movimento ativo: abdução 0–120° (normal 180°, dolorosa de 60–120° = arco doloroso); elevação frontal 0–100°; rotação externa 50° (leve redução); rotação interna: mão até L4 (normal L1). | TESTES ESPECÍFICOS: Neer positivo (dor ao elevar braço passivamente com escápula estabilizada); Hawkins positivo; Jobe positivo (dor e fraqueza no teste de supraespinhal — braço a 90° em plano da escápula, polegar para baixo, resistência); Teste de queda (drop arm test) positivo — não sustenta o braço a 90° contra gravidade; Yergason negativo (bíceps). | OMBRO ESQUERDO: normal.',
      labs: [
        { test: 'Rx do ombro D (AP e axial)', val: 'Ver descrição', ref: '—', alt: false }
      ],
      image: 'Radiografia do ombro D: espaço acromioclavicular normal; sem fratura. Leve migração superior da cabeça do úmero (espaço acromioclavicular < 7 mm). Esclerose e irregularidade da tuberosidade maior. USG de ombro (disponível): rotura parcial de espessura total do tendão supraespinhal, maior extensão 2,5 cm.',
      note: 'Entregar Rx quando solicitado. USG disponível se candidato pedir. RNM (se pedida): confirma rotura parcial-total do supraespinhal com 2,5 cm, sem retração.',
      patientProfile: 'Antônio é pintor de parede há 30 anos, trabalho com braços elevados acima da cabeça. Hipertenso (losartana). Fumante (20 cigarros/dia). Mão dominante: direita. Já fez fisioterapia por 1 mês há 2 meses sem melhora significativa. Tentou fazer os exercícios em casa mas a dor impediu. Preocupado porque não consegue trabalhar.',
      script: [
        { trigger: 'Queixa principal', speech: 'Doutor, esse ombro tá me matando. Quatro meses com essa dor. Não consigo pintar mais, não consigo levantar o braço acima da cabeça. À noite é o pior, não consigo deitar no lado direito.' },
        { trigger: 'Sobre o início', speech: 'Começou devagarzinho. Trabalho muito com o braço levantado pintando teto. Num dia específico senti uma fisgada e nunca mais melhorou.' },
        { trigger: 'Sobre a dor à noite', speech: 'À noite fico acordado pela dor. Quando deito no lado direito, a dor é insuportável. Durmo mal há meses.' },
        { trigger: 'Sobre limitação funcional', speech: 'Não consigo me pentear, não consigo botar a camisa direito pelo braço direito, não alcanco prateleiras altas.' },
        { trigger: 'Sobre trabalho', speech: 'Pintor de parede desde os 20 anos. Trabalho sempre com o braço levantado. Acho que foi isso que estragou.' },
        { trigger: 'Sobre tratamento prévio', speech: 'Fiz fisioterapia um mês. Melhorou um pouco mas não resolveu. Tomo ibuprofeno às vezes.' },
        { trigger: 'Pergunta ativa — diagnóstico', speech: 'É o tendão rompido? Tem jeito sem operar? Não posso parar de trabalhar muito tempo.' }
      ],
      hiddenInfo: 'Injetou corticoide no ombro por conta própria (amigo farmacêutico aplicou) há 6 semanas — só revela se candidato perguntar sobre infiltrações ou injeções no ombro (infiltração excessiva piora tendão) | Dorme no lado direito pressionando o ombro todas as noites há anos — só revela se candidato perguntar sobre posição ao dormir',
      actorBehavior: 'Cooperativo. Faz expressão de dor ao elevar o braço e durante os testes de Neer e Hawkins. No drop arm test, o braço "cai" ao soltar — reação dramática de dor e incapacidade. Preocupado com a renda (pintor autônomo sem contrato).'
    },
    instC: {
      diagnosis: 'Rotura do tendão supraespinhal do manguito rotador direito, parcial de espessura total (2,5 cm), em paciente com impacto subacromial crônico por atividade laboral com braços elevados.',
      differentials: [
        'Tendinite/bursite subacromial sem rotura — entra pela dor e limitação similar; sai pelo drop arm test positivo (incapacidade de sustentar o braço) e USG/RNM confirmando rotura',
        'Capsulite adesiva (ombro congelado) — entra pela dor noturna e limitação; sai porque na capsulite a limitação é em TODOS os planos (especialmente rotação externa passiva), não apenas no arco doloroso; dor à palpação diferente',
        'Artrose acromioclavicular — entra pela dor ao elevar o braço; sai porque a dor é focalizada na articulação AC, teste de adução cruzada positivo; sem fraqueza'
      ],
      context: 'O manguito rotador é formado por 4 músculos (SRIS: Supraespinhal, Infraespinhal, Redondo Menor, Subescapular). O tendão supraespinhal é o mais lesionado (95% das roturas). Fisiopatologia: impacto repetitivo do tendão no arco acromioclavicular → degeneração → rotura. Fatores de risco: trabalho com braços elevados (pintor, eletricista), tabagismo, idade (> 50 anos), trauma. O "arco doloroso" (60–120° de abdução) é característico do impacto subacromial.',
      justify: 'Dor noturna + arco doloroso 60–120° + Neer + Hawkins + Jobe (supraespinhal) + drop arm test positivos; 30 anos de atividade laboral com braços elevados; tabagismo; USG confirmando rotura parcial-total 2,5 cm.',
      expectedAnamnesis: 'Localização e irradiação da dor (ombro vs cervical) | Arco de movimento limitante | Dor noturna (característica de rotura do manguito) | Mecanismo de início (degenerativo vs traumático) | Atividade laboral com braços elevados | Infiltrações prévias | Fisioterapia anterior | Dominância | Antecedentes de trauma do ombro',
      expectedPhysical: 'Inspeção: atrofia de fossas supra e infraespinhal (rotura maciça) | Palpação: dor na tuberosidade maior | Amplitude de movimento ativa e passiva | Testes de impacto: Neer (elevação passiva com escápula estabilizada), Hawkins (rotação interna em 90° de flexão) | Testes do manguito: Jobe (supraespinhal), Lift-off (subescapular), Patte (infraespinhal) | Drop arm test (incapacidade = rotura de espessura total) | Força muscular',
      expectedExams: [
        { exam: 'Ultrassonografia do ombro', justify: 'Exame de escolha para avaliação do manguito rotador; dinâmico, sem radiação, baixo custo', expected: 'Rotura parcial-total supraespinhal 2,5 cm' },
        { exam: 'RNM do ombro', justify: 'Melhor para planejamento cirúrgico, avaliação de retração e atrofia muscular', expected: 'Rotura de 2,5 cm sem retração = cirurgia viável' },
        { exam: 'Radiografia do ombro', justify: 'Excluir fratura, avaliar espaço subacromial, artrose GU/AC', expected: 'Migração superior leve da cabeça = rotura crônica' }
      ],
      expectedConduct: 'Conservador (6–12 semanas): AINE + fisioterapia dirigida ao manguito (fortalecimento de rotadores externos, depressores da cabeça umeral); infiltração subacromial com corticoide (máx 3x/ano) se dor intensa; modificação de atividade laboral | Cirúrgico: rotura sintomática > 6 semanas sem resposta ao conservador; rotura aguda traumática; rotura progressiva confirmada por imagem; drop arm test positivo (rotura funcional). Técnica: artroscopia com reinserção por âncoras. Retorno ao trabalho pesado: 4–6 meses | Orientações: afastamento temporário de trabalho com braços elevados; fisioterapia pré-operatória se aguardando cirurgia',
      expectedCommunication: 'Apresentar-se | Explicar o diagnóstico com modelo: "o tendão que segura o braço se rompeu" | Discutir opções conservadora e cirúrgica com honestidade | Abordar que roturas grandes raramente curam sem cirurgia | Discutir implicações trabalhistas (pintor = trabalho pesado com braços elevados = impossível sem tratamento) | Orientar sobre fisioterapia e modificação de atividade',
      criticalErrors: [
        'Não realizar os testes específicos do manguito (Jobe, drop arm test, Neer, Hawkins)',
        'Indicar repouso absoluto sem fisioterapia (piora a atrofia e a função)',
        'Não solicitar USG ou RNM para confirmar o diagnóstico',
        'Fazer mais de 3 infiltrações de corticoide/ano no mesmo ombro (enfraquece o tendão)'
      ]
    },
    instD: {
      title: 'Manguito Rotador — Material de Estudo',
      sections: [
        {
          h: 'Anatomia e Fisiopatologia',
          items: [
            { item: 'Manguito rotador: SRIS — Supraespinhal (abdução), Infraespinhal + Redondo Menor (rotação externa), Subescapular (rotação interna). Supraespinhal: insere na tuberosidade maior, passa sob o arco acromial — zona crítica de hipovascularidade 1 cm da inserção.', score: 2, ref: 'Neer CS, Clin Orthop 1983' },
            { item: 'Síndrome do impacto: compressão repetitiva do supraespinhal entre a cabeça do úmero e o arco coracoacromial durante abdução 60–120° ("arco doloroso"). Estadiamento de Neer: I = inflamação reversível; II = fibrose e espessamento tendinoso; III = rotura tendinosa.', score: 2, ref: 'Neer CS, J Bone Joint Surg 1983' }
          ]
        },
        {
          h: 'Testes Específicos',
          items: [
            { item: 'Neer: dor à elevação passiva com escápula estabilizada. Hawkins: dor à rotação interna com 90° de flexão. Jobe (empty can): dor + fraqueza com braço a 90° no plano da escápula, polegar para baixo. Drop arm test: incapacidade de manter o braço a 90° = rotura de espessura total.', score: 2, ref: 'Hegedus EJ, BJSM 2012' }
          ]
        },
        {
          h: 'Tratamento',
          items: [
            { item: 'Conservador: fisioterapia (fortalecimento de rotadores externos e depressores da cabeça umeral); AINE; infiltração subacromial (máx 3x/ano). Taxa de sucesso: 60–70% em roturas parciais/pequenas.', score: 2, ref: 'Ainsworth R, Physiotherapy 2006' },
            { item: 'Cirúrgico (artroscopia com âncoras): indicado em roturas sintomáticas refratárias, roturas agudas traumáticas, roturas grandes com retração mínima. Retorno a esportes/trabalho pesado: 4–6 meses.', score: 1, ref: 'AAOS Guidelines 2019' }
          ]
        }
      ]
    }
  },

  // CASO 8 — FRATURA BIMALEOLAR DO TORNOZELO
  {
    id: 8,
    title: 'Tornozelo torceu com estalo e não consegue apoiar o pé',
    sub: 'UPA — Urgência',
    tema: 'Ortopedia',
    topic: 'Fratura Bimaleolar do Tornozelo',
    level: 'moderado',
    cardAccent: '#37474F',
    instA: {
      scenario: 'UPA de nível secundário. Noite de sábado. O candidato é o médico plantonista. O paciente chega mancando muito, apoiado em uma amiga.',
      patient: 'Fernanda Lima, 34 anos, feminino, professora de dança, saudável.',
      complaint: 'Torceu o tornozelo direito durante ensaio de dança há 3 horas. Ouviu estalo alto, inchaço rápido e dor intensa. Não consegue apoiar o pé.',
      tasks: [
        'Realize a anamnese do trauma.',
        'Realize o exame físico do tornozelo com critérios de Ottawa.',
        'Solicite os exames de imagem pertinentes.',
        'Interprete o Rx e classifique a fratura.',
        'Proponha o tratamento inicial e discuta conduta definitiva.'
      ]
    },
    instB: {
      vitals: {
        PA: '118/74 mmHg',
        FC: '92 bpm',
        FR: '16 irpm',
        Tax: '36,6 °C'
      },
      physicalGeneral: 'Paciente em BEG, álgica, apoiando o pé no ar. Cooperativa.',
      physicalSeg: 'TORNOZELO DIREITO: edema volumoso periarticular; equimose surgindo em região maleolar lateral e medial; dor à palpação da ponta do maléolo lateral (fíbula distal) e do maléolo medial (tíbia); dor à palpação da fíbula proximal (ausente); mobilidade ativa impossível pela dor; mobilidade passiva: estress em varo doloroso; pulsos pedioso e tibial posterior preservados; sensibilidade dos dedos preservada. | REGRAS DE OTTAWA: dor à palpação da ponta do maléolo lateral → Rx indicado. | PÉ ESQUERDO: normal.',
      labs: [],
      image: 'Radiografia do tornozelo D (AP, perfil e mortise): fratura transversa do maléolo lateral (fíbula) na altura da sindesmose; fratura oblíqua do maléolo medial (tíbia); abertura do espaço articular medial > 4 mm (instabilidade da mortise). Classificação Weber B / Lauge-Hansen Supinação-Eversão IV.',
      note: 'Entregar Rx quando candidato solicitar. Se candidato aplicar as Regras de Ottawa corretamente, elogiar a abordagem estruturada. Sem fratura do 5° metatarso (palpação da base do 5° MT indicada nas regras).',
      patientProfile: 'Fernanda é professora de dança há 12 anos. Saudável, sem cirurgias, sem anticoagulante. Sem alergias. Tornozelo dominante para a dança: esquerdo. Muito preocupada com o retorno à dança. Já teve entorse de tornozelo sem fratura 2 anos atrás. Analgesiada precariamente com ibuprofeno tomado em casa.',
      script: [
        { trigger: 'Queixa principal', speech: 'Estava ensaiando, errei um passo, o tornozelo girou para dentro e escutei um estalo alto. A dor foi imediata e inchou muito rápido.' },
        { trigger: 'Sobre o mecanismo', speech: 'O tornozelo foi para o lado de fora — eversão. O pé ficou para fora e o tornozelo dobrou para dentro.' },
        { trigger: 'Sobre os maléolos', speech: 'Dói mais aqui na parte debaixo do tornozelo, dos dois lados. Não consigo tocar sem doer.' },
        { trigger: 'Sobre capacidade de apoio', speech: 'Tentei andar e não consigo apoiar nem um pouco. Diferente das minhas entorses anteriores.' },
        { trigger: 'Sobre antecedentes', speech: 'Já torci o tornozelo antes, faz 2 anos. Mas dessa vez foi diferente, o estalo foi muito mais alto e a dor muito pior.' },
        { trigger: 'Sobre dança', speech: 'Danço há 12 anos, é minha profissão. Preciso saber quando vou poder voltar a dançar.' },
        { trigger: 'Pergunta ativa — diagnóstico', speech: 'É fratura? Os dois ossinhos quebraram? Vou precisar de cirurgia? Quanto tempo sem dançar?' }
      ],
      hiddenInfo: 'Sente dor leve também na panturrilha direita ao ser palpada — só revela se candidato palpar a fíbula proximal (fratura de Maisonneuve — fíbula proximal fraturada com ruptura da sindesmose — muda a conduta) | Usa anticoncepcional oral (etinilestradiol) — só revela se candidato perguntar sobre medicamentos',
      actorBehavior: 'Álgica e muito ansiosa com o impacto na carreira. Muito sensível à palpação dos maléolos — geme ao toque. Cooperativa com o exame. Alivia quando candidato é gentil e explica cada passo.'
    },
    instC: {
      diagnosis: 'Fratura bimaleolar do tornozelo direito (Weber B / Lauge-Hansen Supinação-Eversão IV) com instabilidade da mortise (abertura medial > 4 mm), indicando tratamento cirúrgico.',
      differentials: [
        'Entorse grave do tornozelo (ruptura ligamentar isolada) — entra pelo mecanismo e clínica; sai pela dor à palpação óssea dos maléolos, pela impossibilidade de apoio e pela fratura confirmada no Rx',
        'Fratura isolada do maléolo lateral (Weber B sem lesão medial) — entra pela fratura da fíbula; sai porque há fratura do maléolo medial também e abertura da mortise (fratura bimaleolar instável)',
        'Fratura de Maisonneuve — entra por fratura do tornozelo com ruptura da sindesmose; sai porque o Rx mostra fíbula distal fraturada, não proximal (mas deve ser sempre palpada!)'
      ],
      context: 'Fraturas do tornozelo são as fraturas articulares mais comuns. A classificação de Weber (A, B, C) baseia-se no nível da fratura em relação à sindesmose: A = infra; B = na sindesmose; C = supra. A classificação de Lauge-Hansen descreve o mecanismo. A estabilidade da mortise (espaço articular medial ≤ 4 mm e espaço tibiofibular > 6 mm) determina a conduta: estável = conservador; instável = cirurgia.',
      justify: 'Fratura bimaleolar (lateral + medial) com abertura medial > 4 mm = instabilidade da mortise = indicação cirúrgica; mecanismo em eversão + estalo audível; impossibilidade de apoio de peso; Weber B.',
      expectedAnamnesis: 'Mecanismo exato (inversão vs eversão) | Estalo audível | Capacidade de apoio pós-trauma (Regras de Ottawa — apoio em 4 passos exclui fratura com VPN 99%) | Localização da dor | Episódios prévios de entorse | Antecedentes cirúrgicos | Medicamentos (anticoagulante, ACO) | Ocupação e expectativa de retorno esportivo',
      expectedPhysical: 'Regras de Ottawa: dor à palpação da ponta do maléolo lateral (6 cm distais da fíbula); ponta do maléolo medial; base do 5° metatarso; navicular; incapacidade de apoiar o peso em 4 passos | Palpação da fíbula PROXIMAL (Maisonneuve!) | Avaliação da sindesmose: squeeze test, external rotation test | Status neurovascular',
      expectedExams: [
        { exam: 'Radiografia do tornozelo (AP, perfil, mortise)', justify: 'Diagnóstico e classificação; avaliar abertura medial da mortise', expected: 'Fratura bimaleolar, abertura medial > 4 mm' },
        { exam: 'Radiografia de tíbia-fíbula completa', justify: 'Excluir fratura de Maisonneuve (fíbula proximal) quando há ruptura da sindesmose e fratura no maléolo medial sem fratura da fíbula distal', expected: 'Indicada pela palpação positiva na panturrilha' }
      ],
      expectedConduct: 'Fase aguda: PRICE (imobilização com tala gessada posterior suropodálica, elevação, gelo, analgesia — morfina/dipirona EV); sem apoio de peso | Tratamento definitivo: fratura instável (mortise aberta) = cirurgia em 5–7 dias (após redução do edema) — fixação interna com placa e parafusos (maléolo lateral) + parafuso ou sutura do maléolo medial; imobilização pós-operatória 6–8 semanas | Fraturas estáveis (Weber B/A sem abertura medial): gesso suropodálico por 6 semanas com carga progressiva | Retorno à dança: 4–6 meses',
      expectedCommunication: 'Apresentar-se | Explicar diagnóstico: "dois ossos do tornozelo quebraram" | Informar sobre necessidade de cirurgia e timing (em poucos dias, após edema) | Dar perspectiva de retorno à dança (4–6 meses com reabilitação) | Orientar sobre cuidados com a tala, elevação e gelo | Combinar retorno ou encaminhamento ao especialista',
      criticalErrors: [
        'Não aplicar as Regras de Ottawa e solicitar Rx indiscriminadamente (ou não solicitá-lo quando indicado)',
        'Não palpar a fíbula proximal (perder fratura de Maisonneuve)',
        'Não avaliar a abertura da mortise no Rx (determina estabilidade e conduta)',
        'Tratar fratura instável de forma conservadora (risco de malunião, artrose)'
      ]
    },
    instD: {
      title: 'Fraturas do Tornozelo — Material de Estudo',
      sections: [
        {
          h: 'Classificação de Weber',
          items: [
            { item: 'Weber A: fratura da fíbula ABAIXO da sindesmose (ligamentos intactos — estável). Weber B: fratura NA ALTURA da sindesmose (pode ser estável ou instável — avaliar abertura medial). Weber C: fratura ACIMA da sindesmose (ligamentos comprometidos — instável, cirurgia).', score: 2, ref: 'Danis R, 1949; Weber BG, 1966' }
          ]
        },
        {
          h: 'Regras de Ottawa',
          items: [
            { item: 'Rx do tornozelo indicado SE: dor na zona maleolar + impossibilidade de apoio (4 passos) OU dor na ponta do maléolo lateral OU ponta do maléolo medial. Rx do pé indicado SE: dor no médio-pé + impossibilidade de apoio OU dor na base do 5° MT OU no navicular. Sensibilidade 99%, especificidade 40% — reduz Rx em 30%.', score: 2, ref: 'Stiell IG, JAMA 1993' }
          ]
        },
        {
          h: 'Fratura de Maisonneuve',
          items: [
            { item: 'Mecanismo de eversão/rotação externa grave → ruptura da sindesmose + fratura proximal da fíbula (longe do tornozelo). Armadilha diagnóstica: Rx do tornozelo normal + ruptura da mortise. SEMPRE palpar a fíbula proximal em qualquer fratura do tornozelo medial com ruptura da sindesmose.', score: 2, ref: 'Campbell Ortopedia 13ª ed.' }
          ]
        }
      ]
    }
  },

  // CASO 9 — OSTEOSSARCOMA
  {
    id: 9,
    title: 'Adolescente com dor progressiva no joelho à noite',
    sub: 'Ambulatório — Ortopedia',
    tema: 'Ortopedia',
    topic: 'Osteossarcoma — Tumor Ósseo Maligno',
    level: 'difícil',
    cardAccent: '#37474F',
    instA: {
      scenario: 'Ambulatório de Ortopedia de hospital universitário. O candidato é o médico residente. O paciente é encaminhado pela UBS com queixa de dor persistente no joelho.',
      patient: 'Gustavo Ferreira, 16 anos, masculino, estudante do ensino médio, sem doenças prévias.',
      complaint: 'Dor progressiva no joelho esquerdo há 3 meses. Inicialmente leve, agora intensa e persistente, inclusive à noite e em repouso. Notou abaulamento local há 3 semanas.',
      tasks: [
        'Realize a anamnese completa com ênfase em red flags para tumor.',
        'Realize o exame físico musculoesquelético do joelho.',
        'Solicite os exames de imagem e laboratoriais pertinentes.',
        'Formule as hipóteses diagnósticas e proponha a investigação.',
        'Informe ao paciente e à família sobre a necessidade de investigação urgente e encaminhamento.'
      ]
    },
    instB: {
      vitals: {
        PA: '118/74 mmHg',
        FC: '78 bpm',
        FR: '16 irpm',
        Tax: '37,1 °C',
        Peso: '62 kg',
        Altura: '1,74 m'
      },
      physicalGeneral: 'Paciente em BEG, magro, bem-disposto. Sem palidez, sem linfadenopatia palpável. Marcha levemente antálgica à esquerda.',
      physicalSeg: 'JOELHO ESQUERDO: abaulamento visível na região distal do fêmur medial (+++ ao inspeção), consistência firme/dura à palpação; pele sobre a lesão levemente quente e com aumento de vascularização superficial; dor intensa à palpação local (10/10); sem flutuação; mobilidade do joelho preservada mas dolorosa (flexão 0–110°); sem derrame articular. | LINFONODOS: sem adenomegalias inguinais. | RESTO DO EXAME: normal.',
      labs: [
        { test: 'Fosfatase alcalina (FA)', val: '420 U/L', ref: '< 150 U/L (adulto)', alt: true },
        { test: 'DHL (desidrogenase lática)', val: '380 U/L', ref: '< 250 U/L', alt: true },
        { test: 'PCR', val: '1,8 mg/dL', ref: '< 0,5 mg/dL', alt: true },
        { test: 'Hemograma', val: 'Leucócitos 9.200/mm³', ref: '4.000–10.000/mm³', alt: false },
        { test: 'VHS', val: '42 mm/h', ref: '< 20 mm/h', alt: true }
      ],
      image: 'Radiografia do joelho E (AP e perfil): lesão osteolítica e esclerótica mista na metáfise distal do fêmur, com reação periosteal em "casca de cebola" e triângulo de Codman (elevação do periósteo). Extensão para partes moles com calcificações em "raios de sol". Sem fratura patológica.',
      note: 'Entregar Rx quando candidato solicitar. RNM (se pedida): lesão da metáfise distal do fêmur com extensão à epífise e invasão de partes moles; sem envolvimento articular aparente. TC de tórax (se pedida): sem metástases pulmonares visíveis. Cintilografia (se pedida): hipercaptação na região.',
      patientProfile: 'Gustavo está no segundo ano do ensino médio. Gosta de futebol — parou porque o joelho começou a doer. Família de classe média. Mãe presente (muito ansiosa, com medo que seja algo grave). Sem antecedentes de trauma relevante. Sem história familiar de câncer. Sem corticoide, sem irradiação prévia.',
      script: [
        { trigger: 'Queixa principal', speech: 'Meu joelho tá doendo há 3 meses. Achei que era do futebol mas parei e a dor não foi embora. Piorou. Agora dói também à noite quando estou deitado.' },
        { trigger: 'Sobre a dor noturna', speech: 'De noite é o pior. Me acordo com a dor. Antes era só quando forçava, agora é o tempo todo.' },
        { trigger: 'Sobre o abaulamento', speech: 'Umas 3 semanas atrás percebi que tinha um caroço aqui. Fica quente e é duro. Minha mãe ficou apavorada.' },
        { trigger: 'Sobre outros sintomas', speech: 'Emagreci um pouco, uns 3 quilos nos últimos 2 meses. Mas achei que era do estresse do colégio.' },
        { trigger: 'Sobre trauma', speech: 'Não bati o joelho especificamente, não. Só jogava futebol, mas não caí nem bati.' },
        { trigger: 'Sobre a família', speech: 'Não tem câncer na família, não. Meu pai tem pressão alta e pronto.' },
        { trigger: 'Pergunta ativa — diagnóstico (por parte da mãe)', speech: '(mãe): Doutor, isso pode ser câncer? Preciso saber logo. Já estou muito preocupada com esse caroço.' }
      ],
      hiddenInfo: 'Emagreceu 3 kg em 2 meses sem mudar a dieta — só revela espontaneamente se candidato perguntar sobre perda de peso (sintoma sistêmico de neoplasia) | Teve febre baixa (37,3 °C) por 2 semanas há 1 mês que "achou que era virose" — só revela se candidato perguntar sobre febre (pode sugerir osteossarcoma ou osteomielite)',
      actorBehavior: 'Adolescente assustado mas tenta aparentar calma. Mãe muito ansiosa, faz perguntas antes do candidato terminar. Candidato deve conduzir a consulta organizando a comunicação. A dor é intensa ao toque do abaulamento — reação clara. Fica sério e com lágrimas nos olhos quando o médico indica investigação urgente.'
    },
    instC: {
      diagnosis: 'Osteossarcoma da metáfise distal do fêmur esquerdo — até prova em contrário. Diagnóstico provável baseado em: adolescente masculino, localização metafisária do fêmur distal, dor noturna progressiva, massa de partes moles, FA e DHL elevados, Rx com triângulo de Codman e raios de sol.',
      differentials: [
        'Osteomielite aguda hematogênica — entra pela dor, calor local, febre e elevação de VHS e PCR; sai porque a dor noturna em repouso, a lesão radiográfica com reação periosteal agressiva e a FA muito elevada são mais sugestivos de neoplasia; biópsia decide',
        'Sarcoma de Ewing — entra por tumor ósseo maligno em adolescente com reação periosteal em "casca de cebola"; sai porque Ewing afeta mais diáfise (não metáfise), é mais comum em crianças menores; a distinção é histológica',
        'Cisto ósseo aneurismático — entra pela lesão osteolítica em adolescente; sai porque é benigno, sem dor noturna tão intensa, sem calcificações em raios de sol, sem massa de partes moles, sem FA elevada',
        'Fratura de estresse — entra pela dor no joelho em jovem atleta; sai pela presença de massa palpável, dor noturna em repouso, padrão agressivo no Rx (triângulo de Codman, raios de sol)'
      ],
      context: 'O osteossarcoma é o tumor ósseo maligno primário mais comum (excluindo mieloma), com pico de incidência na 2ª década de vida durante o estirão de crescimento. Localização mais comum: metáfise distal do fêmur (40%), metáfise proximal da tíbia (20%), metáfise proximal do úmero (10%). A tríade clássica: dor progressiva noturna + massa de partes moles + Rx com triângulo de Codman/raios de sol. Metástases pulmonares em 15–20% ao diagnóstico. Sobrevida em 5 anos: 60–70% (cirurgia conservadora + quimioterapia).',
      justify: 'Adolescente (pico de incidência); sexo masculino; metáfise distal do fêmur; dor noturna progressiva; massa dura quente; FA 420 (marcador de atividade osteoblástica — muito elevada); DHL elevado; triângulo de Codman + calcificações em raios de sol no Rx = padrão radiológico clássico do osteossarcoma.',
      expectedAnamnesis: 'Caracterização da dor: progressiva, noturna, em repouso (RED FLAG de tumor) | Presença e evolução do abaulamento | Perda de peso | Febre | Sintomas sistêmicos | Trauma prévio (pode coexistir mas não é causa) | Antecedentes de irradiação (fator de risco) | Histórico familiar de neoplasia | Retinoblastoma pessoal (Li-Fraumeni) | Parada da atividade física pela dor',
      expectedPhysical: 'Inspeção: abaulamento local | Palpação: consistência (dura = osso/calcificação), temperatura, pulsatilidade, mobilidade | Dimensões da massa | Adenopatias regionais (inguinais) | Exame do membro contralateral | Avaliação neurovascular do membro',
      expectedExams: [
        { exam: 'Radiografia do osso afetado (AP e perfil)', justify: 'Triagem inicial — identifica padrão osteolítico/esclerótico, reação periosteal agressiva (triângulo de Codman, raios de sol)', expected: 'Lesão metafisária com triângulo de Codman e raios de sol' },
        { exam: 'RNM do osso e partes moles', justify: 'Extensão local, relação com feixe vasculonervoso, planejamento cirúrgico de preservação de membro', expected: 'Lesão metafisária com extensão às partes moles' },
        { exam: 'TC de tórax', justify: 'Rastreio de metástases pulmonares (principal sítio metastático)', expected: 'Sem metástases neste caso' },
        { exam: 'Cintilografia óssea', justify: 'Rastreio de lesões ósseas à distância (metástases ósseas = "skip lesions")', expected: 'Hipercaptação local; excluir lesões a distância' },
        { exam: 'Biópsia óssea', justify: 'Confirmar o diagnóstico histopatológico antes de qualquer tratamento. DEVE ser realizada por cirurgião oncológico ortopédico no centro de referência (biópsia inadequada pode contaminar o campo cirúrgico)', expected: 'Osteossarcoma convencional = células fusiformes + osteoide maligno' },
        { exam: 'Fosfatase alcalina e DHL', justify: 'FA: marcador de atividade osteoblástica (prognóstico e monitorização). DHL: marcador de carga tumoral (prognóstico)', expected: 'FA 420 (muito elevada) + DHL 380 = mau prognóstico relativo' }
      ],
      expectedConduct: 'Encaminhamento URGENTE para centro de referência em oncologia ortopédica (não realizar biópsia na UPA ou hospital geral sem especialista) | Protocolo: biópsia guiada → quimioterapia neoadjuvante (MAP: metotrexato, doxorrubicina, cisplatina) → cirurgia (ressecção com margem + reconstrução com prótese ou enxerto) → quimioterapia adjuvante | Preservação do membro: possível em > 90% dos casos com planejamento adequado | NÃO realizar biópsia incisional sem planejamento cirúrgico — pode contaminar o campo e impossibilitar cirurgia conservadora | Suporte psicológico para adolescente e família',
      expectedCommunication: 'Apresentar-se | Conduzir a consulta com calma, incluindo a mãe | Comunicar a preocupação diagnóstica de forma honesta: "precisamos investigar urgentemente a possibilidade de um tumor no osso" | Não dar diagnóstico definitivo antes da biópsia | Explicar os próximos passos (exames, encaminhamento ao especialista, biópsia) | Não minimizar nem catastrofizar | Perguntar se têm dúvidas | Apoio emocional ao adolescente e à mãe',
      criticalErrors: [
        'Tratar como entorse ou lesão esportiva sem investigar a massa óssea (erro fatal de diagnóstico)',
        'Realizar biópsia incisional sem encaminhar ao centro de oncologia ortopédica (contamina campo cirúrgico)',
        'Não solicitar Rx em adolescente com dor noturna progressiva e massa no membro',
        'Dar diagnóstico definitivo de câncer sem biópsia confirmatória',
        'Não encaminhar com urgência para centro de referência após suspeita radiológica'
      ]
    },
    instD: {
      title: 'Osteossarcoma — Material de Estudo',
      sections: [
        {
          h: 'Epidemiologia e Localização',
          items: [
            { item: 'Tumor ósseo maligno primário mais comum (excluindo mieloma e linfoma). Incidência: 3–4 casos/milhão/ano; pico 10–20 anos (estirão de crescimento); segundo pico > 60 anos (doença de Paget). Localização: metáfise distal do fêmur (40%) > metáfise proximal da tíbia (20%) > metáfise proximal do úmero (10%).', score: 2, ref: 'Mirabello L, Cancer 2009' },
            { item: 'Fatores de risco: retinoblastoma hereditário (mutação RB1), síndrome de Li-Fraumeni (TP53), irradiação prévia, doença de Paget óssea. A maioria dos casos é esporádica.', score: 1, ref: 'Marina NM, Lancet 2004' }
          ]
        },
        {
          h: 'Radiologia — Sinais Clássicos',
          items: [
            { item: 'Triângulo de Codman: elevação do periósteo pelo tumor, formando triângulo entre o córtex, o periósteo elevado e o tecido tumoral. Sinal de agressividade, não específico do osteossarcoma.', score: 2, ref: 'Resnick D, Bone and Joint Imaging 3ª ed.' },
            { item: 'Raios de sol (sunburst pattern): neoformação óssea perpendicular ao córtex no tecido de partes moles. Calcificações em "algodão". Mista osteolítica + esclerótica = padrão clássico do osteossarcoma.', score: 2, ref: 'Fletcher CDM, WHO Classification 2013' }
          ]
        },
        {
          h: 'Tratamento',
          items: [
            { item: 'Protocolo MAP (neoadjuvante → cirurgia → adjuvante): Metotrexato em altas doses + Doxorrubicina + Cisplatina. Resposta histológica > 90% de necrose tumoral = bom prognóstico. Cirurgia: ressecção com margem cirúrgica ampla + reconstrução (prótese não cimentada, enxerto ósseo, rodada de crescimento).', score: 2, ref: 'Bielack SS, J Clin Oncol 2002' },
            { item: 'Sobrevida global em 5 anos: 60–70% (doença localizada); 20–30% (doença metastática ao diagnóstico). Principal fator prognóstico: resposta à quimioterapia neoadjuvante (necrose tumoral).', score: 2, ref: 'Whelan JS, Lancet Oncol 2012' }
          ]
        }
      ]
    }
  },

];

export default ortopedia;
