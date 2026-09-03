const hematologia = [

  // ─────────────────────────────────────────────────────────────────────────
  // CASO 1 — ANEMIA FERROPRIVA
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 1,
    title: 'Cansaço e falta de ar aos esforços há 3 meses',
    sub: 'UBS — Atenção Primária',
    tema: 'Hematologia',
    topic: 'Anemia Ferropriva',
    level: 'moderado',
    cardAccent: '#E53935',
    instA: {
      scenario: 'Atenção Primária — UBS. Consultório de clínica geral, turno matutino.',
      patient: 'M.A.S., 28 anos, feminina, professora, sem comorbidades conhecidas, sem uso regular de medicamentos.',
      complaint: 'Cansaço progressivo, falta de ar aos esforços moderados e palpitações há aproximadamente 3 meses.',
      tasks: [
        'Realize a anamnese dirigida, investigando a causa da anemia.',
        'Realize o exame físico dirigido.',
        'Formule a hipótese diagnóstica principal e os principais diferenciais.',
        'Solicite os exames complementares adequados.',
        'Proponha o tratamento e oriente a paciente.'
      ]
    },
    instB: {
      vitals: {
        PA: '108/70 mmHg',
        FC: '98 bpm',
        FR: '18 irpm',
        Tax: '36,5 °C',
        Peso: '58 kg',
        Altura: '1,63 m',
        IMC: '21,8 kg/m²'
      },
      physicalGeneral: 'Regular estado geral, consciente, orientada, hipocorada (2+/4+), anictérica, acianótica, sem edema.',
      physicalSeg: 'CABEÇA E PESCOÇO: conjuntivas hipocrômicas (palidez conjuntival 2+/4+); mucosa oral pálida; glossite leve (língua levemente avermelhada e lisa); sem adenomegalias cervicais. | CARDIOVASCULAR: ritmo cardíaco regular, 2 tempos, bulhas normofonéticas; sopro sistólico 2+/6+ em foco aórtico (funcional — por hiperviscosidade); FC 98 bpm. | PULMONAR: murmúrio vesicular presente bilateralmente, sem ruídos adventícios. | ABDOME: plano, normotenso, sem visceromegalias, RHA presentes. | EXTREMIDADES: unhas com coiloníquia (unhas em colher) bilateral nas mãos; sem edema; palmas levemente pálidas. | NEUROLÓGICO: sem alterações.',
      labs: [
        { test: 'Hemoglobina', val: '8,2 g/dL', ref: '12–16 g/dL', alt: true },
        { test: 'Hematócrito', val: '26%', ref: '36–46%', alt: true },
        { test: 'VCM', val: '68 fL', ref: '80–100 fL', alt: true },
        { test: 'HCM', val: '20 pg', ref: '27–33 pg', alt: true },
        { test: 'CHCM', val: '28 g/dL', ref: '32–36 g/dL', alt: true },
        { test: 'RDW', val: '18%', ref: '< 14,5%', alt: true },
        { test: 'Leucócitos', val: '6.800/mm³', ref: '4.000–11.000/mm³', alt: false },
        { test: 'Plaquetas', val: '420.000/mm³', ref: '150.000–400.000/mm³', alt: true },
        { test: 'Reticulócitos', val: '1,2%', ref: '0,5–2,0%', alt: false },
        { test: 'Ferro sérico', val: '28 µg/dL', ref: '50–170 µg/dL', alt: true },
        { test: 'CTLF (capacidade total de ligação do ferro)', val: '490 µg/dL', ref: '250–370 µg/dL', alt: true },
        { test: 'Saturação de transferrina', val: '5,7%', ref: '20–50%', alt: true },
        { test: 'Ferritina', val: '4 ng/mL', ref: '12–150 ng/mL', alt: true },
        { test: 'Esfregaço de sangue periférico', val: 'Hemácias microcíticas e hipocrômicas, anisocitose, poiquilocitose (pencil cells e eliptócitos)', ref: 'Morfologia normal', alt: true }
      ],
      image: 'Esfregaço (a ser entregue se solicitado): microcitose, hipocromia, anisocitose e poiquilocitose com pencil cells — morfologia típica de anemia ferropriva grave.',
      note: 'Entregar sinais vitais ao início. Hemograma + ferro sérico + ferritina + CTLF: entregar em conjunto se o candidato solicitar "exames de anemia" ou itens específicos. Esfregaço: entregar separado se solicitado explicitamente. Endoscopia ou pesquisa de parasitas: NÃO disponíveis na UBS — informar que serão solicitados por escrito para referência.',
      patientProfile: 'M.A.S., 28 anos, professora do ensino fundamental, casada, 1 filha de 3 anos. Menstruação abundante desde a adolescência (troca absorvente a cada 1–2h nos primeiros 2 dias, com presença de coágulos). Alimentação pobre em carnes vermelhas e leguminosas (refere "não gostar muito de feijão"). Mora em apartamento, zona urbana. Nega tabagismo e etilismo. Nunca doou sangue.',
      script: [
        { trigger: 'Queixa principal', speech: 'Doutora, tô me sentindo muito cansada, sem disposição pra nada. Até subir escada fico sem ar. Antes eu conseguia trabalhar o dia todo sem problema.' },
        { trigger: 'Sobre início e evolução', speech: 'Começou devagar, uns três meses atrás. Fui achando que era estresse do trabalho, mas foi piorando.' },
        { trigger: 'Sobre palpitações', speech: 'Às vezes sinto o coração acelerado, mesmo quando tô em repouso. É assustador.' },
        { trigger: 'Sobre menstruação', speech: 'Minha menstruação é bem forte desde que eu era adolescente. Uso absorvente e às vezes vaza, vêm uns coágulos também. Dura uns 6 dias.' },
        { trigger: 'Sobre alimentação', speech: 'Como frango, massa, salada. Carne vermelha raramente — não gosto muito. Feijão quase não como.' },
        { trigger: 'Sobre os cabelos e unhas', speech: 'Percebo que tô caindo muito cabelo, e minhas unhas ficaram estranhas, meio curvadas pra dentro.' },
        { trigger: 'Sobre pica (hábito de comer substâncias não alimentares)', speech: 'Isso é meio estranho de contar, mas às vezes dá vontade de comer terra, gelo... Controlo, mas vem essa vontade.' },
        { trigger: 'Pergunta ativa — diagnóstico', speech: 'O que eu tenho, doutora? É grave?' },
        { trigger: 'Sobre filhos ou gravidez', speech: 'Não pretendo engravidar agora, tenho 1 filha de 3 anos. Uso anticoncepcional oral.' }
      ],
      hiddenInfo: 'Menorragia desde a adolescência — só revela em detalhe se o candidato perguntar sobre fluxo menstrual, duração e quantidade de absorventes | Pica (vontade de comer gelo/terra) — só revela se candidato perguntar sobre hábitos alimentares incomuns ou pica | Queda de cabelo notada há 2 meses — só revela se candidato perguntar sobre alterações em cabelos e unhas',
      actorBehavior: 'Paciente cooperativa, levemente ansiosa. Fica aliviada quando a médica explica que tem tratamento. Pode minimizar o fluxo menstrual se não for perguntada diretamente — precisa de perguntas quantitativas ("troca quantos absorventes por dia?"). Reage bem a explicações simples.'
    },
    instC: {
      diagnosis: 'Anemia ferropriva grave (Hb 8,2 g/dL, microcítica hipocrômica, ferritina 4 ng/mL) por perda crônica de ferro secundária à menorragia + baixa ingestão de ferro.',
      differentials: [
        'Anemia de doença crônica — ferritina elevada ou normal; saturação de transferrina reduzida mas CTLF normal ou reduzida; sem menorragia relevante',
        'Talassemia minor — microcitose desproporcional ao grau de anemia; RDW normal (na ferropriva o RDW é elevado); ferro sérico e ferritina normais; história familiar; confirmada por eletroforese de Hb',
        'Anemia sideroblástica — ferro sérico elevado; saturação de transferrina elevada; sideroblastos em anel na medula; rara em mulher jovem',
        'Anemia por deficiência de B12/folato — macrocítica (VCM > 100 fL); não explica microcitose'
      ],
      context: 'Mulher jovem em idade fértil com menorragia crônica e dieta pobre em ferro — cenário clássico de anemia ferropriva. Sintomas anêmicos progressivos há 3 meses (fadiga, dispneia, palpitações). Exame físico com palidez conjuntival, glossite, coiloníquia e sopro funcional. Hemograma com anemia microcítica hipocrômica grave, RDW elevado, ferritina depletada e CTLF aumentada.',
      justify: 'Ferropriva é a anemia mais prevalente no mundo e a causa mais comum de anemia em mulheres em idade fértil. A tríade diagnóstica é: anemia microcítica hipocrômica + ferritina baixa + saturação de transferrina reduzida com CTLF aumentada. Sinais clínicos de deficiência de ferro (coiloníquia, pica, glossite) reforçam. A causa neste caso é dupla: perda menstrual aumentada (menorragia) + baixa ingestão de ferro.',
      expectedAnamnesis: 'Caracterizar os sintomas: início, evolução, dispneia, palpitações, tontura, cefaleia | Investigar sangramentos: menstruação (fluxo, duração, coágulos, número de absorventes/dia), hemorragia digestiva (melena, hematoquezia), outros | Investigar dieta: ingestão de carnes vermelhas, leguminosas, vegetais folhosos | Pesquisar sintomas de deficiência de ferro: pica, coiloníquia, queda de cabelo, glossite | Investigar medicamentos: AINEs, anticoagulantes, IBP | Antecedentes obstétricos: gestações, amamentação | Perguntar sobre doação de sangue frequente | História familiar de anemia ou talassemia',
      expectedPhysical: 'Avaliar palidez: conjuntivas, mucosas, palmas das mãos | Examinar unhas: coiloníquia | Examinar língua: glossite, atrofia de papilas | Ausculta cardíaca: sopro funcional | Ausculta pulmonar | Abdome: hepatoesplenomegalia (geralmente ausente na ferropriva) | Pesquisar adenomegalias (diagnóstico diferencial)',
      expectedExams: [
        { exam: 'Hemograma completo', justify: 'Confirma anemia; define microcitose e hipocromia; avalia série branca e plaquetária', expected: 'Hb 8,2 g/dL; VCM 68 fL; HCM 20 pg; RDW 18%; plaquetas elevadas (reativa)' },
        { exam: 'Ferro sérico + Ferritina + CTLF + Saturação de transferrina', justify: 'Confirma deficiência de ferro (ferritina é o exame mais sensível e específico para estoque de ferro)', expected: 'Ferritina 4 ng/mL; ferro sérico baixo; saturação baixa; CTLF elevada' },
        { exam: 'Reticulócitos', justify: 'Avaliar resposta medular; na ferropriva geralmente normal ou levemente reduzido', expected: '1,2% — adequado antes do tratamento' },
        { exam: 'Esfregaço de sangue periférico', justify: 'Morfologia eritrocitária confirma microcitose, hipocromia, pencil cells', expected: 'Microcitose, hipocromia, anisocitose, poiquilocitose' },
        { exam: 'Pesquisa de parasitas nas fezes (protoparasitológico)', justify: 'Ancilostomíase é causa importante de anemia ferropriva em regiões endêmicas; importante investigar', expected: 'A solicitar — resultado não disponível nesta estação' },
        { exam: 'Endoscopia digestiva alta e/ou colonoscopia', justify: 'Indicado se houver sintomas digestivos ou em homens/mulheres na pós-menopausa para afastar neoplasia ou úlcera como fonte de sangramento; em mulher jovem com menorragia evidente é opcional na primeira abordagem', expected: 'A solicitar se candidato identificar necessidade' }
      ],
      expectedConduct: 'Farmacológica: Sulfato ferroso 300 mg VO 2–3x/dia (60–120 mg de ferro elementar/dia) em jejum ou com vitamina C para melhor absorção; manter por 3–6 meses após normalização da Hb para repor estoques; orientar efeitos adversos (fezes escuras, constipação, epigastralgia — reduzir dose ou tomar com alimento se necessário) | Tratar a causa: encaminhar para Ginecologia para investigação e tratamento da menorragia (anticoncepcionais com progestagênio, DIU hormonal, investigar mioma ou endometriose) | Orientações dietéticas: aumentar consumo de carnes vermelhas, fígado, feijão, lentilha, folhas verde-escuras; combinar com vitamina C para aumentar absorção; evitar café/chá próximo às refeições (quelantes de ferro) | Seguimento: retornar em 4–6 semanas para hemograma de controle (Hb deve aumentar ≥ 1 g/dL/semana com tratamento adequado); se sem resposta, revisar diagnóstico ou adesão | Critérios de internação/transfusão: não indicados neste caso (Hb 8,2, hemodinamicamente estável); transfusão se Hb < 7 g/dL com instabilidade ou sintomas graves',
      expectedCommunication: 'Apresentar-se pelo nome | Explicar o diagnóstico de anemia ferropriva de forma clara e acessível | Explicar a relação entre menstruação abundante e falta de ferro | Orientar sobre o uso correto do sulfato ferroso (horário, vitamina C, efeitos adversos esperados) | Orientar sobre alimentação | Tranquilizar sobre o bom prognóstico com tratamento correto | Perguntar se tem dúvidas | Agendar retorno',
      criticalErrors: [
        'Não investigar a causa do déficit de ferro (tratar a anemia sem buscar etiologia é erro — a menorragia precisa ser abordada)',
        'Prescrever sulfato ferroso sem orientar sobre horário e vitamina C (reduz absorção e eficácia)',
        'Solicitar transfusão de hemácias em paciente estável com Hb 8,2 g/dL (transfusão não indicada)',
        'Não encaminhar para Ginecologia para investigação da menorragia',
        'Confundir com talassemia e não solicitar ferritina para diferenciar'
      ]
    },
    instD: {
      title: 'Anemia Ferropriva — Material de Estudo',
      sections: [
        {
          h: 'Definição e Epidemiologia',
          items: [
            { item: 'Anemia mais prevalente do mundo (≈ 50% das anemias globais)', score: 1, ref: 'OMS' },
            { item: 'Principal causa: deficiência de ferro por perda crônica (menorragia, hemorragia digestiva) ou baixa ingestão/absorção', score: 1, ref: 'Harrison' },
            { item: 'Grupos de risco: mulheres em idade fértil, gestantes, lactentes, crianças em crescimento, idosos, vegetarianos', score: 1, ref: 'Harrison' }
          ]
        },
        {
          h: 'Anamnese — Pontos-chave',
          items: [
            { item: 'Pesquisar menorragia: número de absorventes/dia, presença de coágulos, duração do ciclo', score: 2, ref: 'Condutas em Clínica Médica' },
            { item: 'Investigar hemorragia digestiva: melena, hematoquezia, sangue nas fezes', score: 2, ref: 'Condutas em Clínica Médica' },
            { item: 'Perguntar sobre pica (vontade de comer gelo, terra, argila, amido)', score: 1, ref: 'Harrison' },
            { item: 'Avaliar dieta: consumo de carnes, leguminosas, inibidores de absorção (café, chá, laticínios)', score: 1, ref: 'Harrison' },
            { item: 'Investigar uso de AINEs, corticoides ou anticoagulantes (sangramento digestivo)', score: 1, ref: 'MSD' }
          ]
        },
        {
          h: 'Exame Físico — Sinais Clínicos',
          items: [
            { item: 'Palidez conjuntival e mucosa — sinal mais precoce', score: 2, ref: 'Semiologia Médica — Porto' },
            { item: 'Coiloníquia (unhas em colher) — sinal clássico de deficiência de ferro crônica e grave', score: 2, ref: 'Harrison' },
            { item: 'Glossite atrófica (língua lisa, hiperemiada, dolorosa)', score: 1, ref: 'Harrison' },
            { item: 'Queilite angular (fissuras nos cantos da boca)', score: 1, ref: 'Harrison' },
            { item: 'Sopro sistólico funcional (por aumento do débito cardíaco para compensar a anemia)', score: 1, ref: 'Semiologia Médica — Porto' },
            { item: 'Taquicardia compensatória', score: 1, ref: 'Harrison' }
          ]
        },
        {
          h: 'Diagnóstico Laboratorial',
          items: [
            { item: 'Hemograma: anemia microcítica (VCM < 80 fL) e hipocrômica (HCM < 27 pg), RDW elevado (> 14,5%)', score: 2, ref: 'Harrison' },
            { item: 'Ferritina sérica < 12 ng/mL: melhor marcador de depleção dos estoques de ferro (sensibilidade 92%, especificidade 98%)', score: 2, ref: 'Harrison' },
            { item: 'Saturação de transferrina < 16%: confirma deficiência funcional de ferro', score: 1, ref: 'Harrison' },
            { item: 'CTLF elevada: reflete aumento da síntese de transferrina para captar mais ferro', score: 1, ref: 'Harrison' },
            { item: 'Esfregaço: microcitose, hipocromia, anisocitose, poiquilocitose, pencil cells', score: 1, ref: 'Harrison' },
            { item: 'Reticulócitos: normal ou discretamente reduzidos antes do tratamento; aumentam (crise reticulocitária) após 5–10 dias de reposição', score: 1, ref: 'Harrison' }
          ]
        },
        {
          h: 'Diagnóstico Diferencial — Anemias Microcíticas',
          items: [
            { item: 'Talassemia minor: VCM muito baixo para o grau de anemia; RDW normal; ferro e ferritina normais; eletroforese de Hb (Hb A2 elevada na beta-talassemia)', score: 2, ref: 'Harrison' },
            { item: 'Anemia de doença crônica: ferritina normal ou elevada; ferro baixo mas CTLF também baixa; doença de base presente', score: 2, ref: 'Harrison' },
            { item: 'Anemia sideroblástica: ferro sérico elevado; saturação de transferrina elevada; sideroblastos em anel na medula', score: 1, ref: 'Harrison' }
          ]
        },
        {
          h: 'Tratamento',
          items: [
            { item: 'Sulfato ferroso 300 mg VO (= 60 mg de Fe elementar) 2–3x/dia, 30–60 min antes das refeições', score: 2, ref: 'PEBMED / Harrison' },
            { item: 'Associar com vitamina C (suco de laranja ou 500 mg VO) para aumentar absorção do ferro não heme', score: 1, ref: 'Harrison' },
            { item: 'Evitar na mesma refeição: café, chá, leite, antiácidos, inibidores de bomba de prótons (reduzem absorção)', score: 1, ref: 'Harrison' },
            { item: 'Duração: manter por 3–6 meses após normalização da Hb (para reposição dos estoques)', score: 2, ref: 'Harrison' },
            { item: 'Controle: hemograma em 4–6 semanas; esperar elevação de Hb ≥ 1 g/dL/semana (crise reticulocitária em 5–10 dias)', score: 1, ref: 'Harrison' },
            { item: 'Ferro intravenoso (ferrocarboxymaltose, sacarato de ferro): indicado em intolerância oral, má absorção, falha terapêutica, anemia grave com necessidade de reposição rápida', score: 1, ref: 'Harrison' },
            { item: 'Transfusão: apenas se Hb < 7 g/dL com instabilidade hemodinâmica ou sintomas graves (dor torácica, dispneia em repouso)', score: 2, ref: 'Harrison' },
            { item: 'Tratar a causa de base: encaminhar para Ginecologia (menorragia), Gastroenterologia (hemorragia digestiva)', score: 2, ref: 'Condutas em Clínica Médica' }
          ]
        },
        {
          h: 'Orientações ao Paciente',
          items: [
            { item: 'Explicar que fezes escuras com sulfato ferroso são normais e esperadas', score: 1, ref: 'PEBMED' },
            { item: 'Orientar alimentação rica em ferro: carnes vermelhas, fígado, feijão, lentilha, espinafre, quinoa', score: 1, ref: 'PEBMED' },
            { item: 'Explicar importância de investigar e tratar a menorragia para evitar recorrência', score: 1, ref: 'PEBMED' }
          ]
        }
      ]
    }
  },


  // ─────────────────────────────────────────────────────────────────────────
  // CASO 2 — ANEMIA MEGALOBLÁSTICA POR DEFICIÊNCIA DE B12
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 2,
    title: 'Formigamento nas mãos e cansaço progressivo em idoso vegetariano',
    sub: 'UBS — Atenção Primária',
    tema: 'Hematologia',
    topic: 'Anemia Megaloblástica — Deficiência de B12',
    level: 'moderado',
    cardAccent: '#E53935',
    instA: {
      scenario: 'Atenção Primária — UBS. Consultório de clínica geral, turno vespertino.',
      patient: 'A.M.F., 68 anos, masculino, aposentado, vegetariano estrito há 15 anos, sem comorbidades diagnosticadas.',
      complaint: 'Cansaço intenso, formigamento e "dormência" nos pés e mãos, além de dificuldade para caminhar há cerca de 4 meses.',
      tasks: [
        'Realize a anamnese dirigida, investigando a causa da anemia e dos sintomas neurológicos.',
        'Realize o exame físico geral e neurológico dirigido.',
        'Formule a hipótese diagnóstica principal e os principais diferenciais.',
        'Solicite os exames complementares adequados.',
        'Proponha o tratamento e oriente o paciente.'
      ]
    },
    instB: {
      vitals: {
        PA: '130/78 mmHg',
        FC: '94 bpm',
        FR: '17 irpm',
        Tax: '36,4 °C',
        Peso: '64 kg',
        Altura: '1,68 m',
        IMC: '22,7 kg/m²'
      },
      physicalGeneral: 'Regular estado geral, consciente, orientado (mas com leve lentidão de raciocínio), hipocorado (2+/4+), levemente ictérico (subicterícia conjuntival), acianótico, sem edema.',
      physicalSeg: 'CABEÇA E PESCOÇO: subicterícia conjuntival bilateral; mucosa oral pálida; glossite atrófica (língua avermelhada, lisa, com atrofia de papilas filiformes); sem adenomegalias. | CARDIOVASCULAR: ritmo regular, 2 tempos, sopro sistólico funcional 1+/6+; FC 94 bpm. | PULMONAR: murmúrio vesicular presente bilateralmente, sem adventícios. | ABDOME: plano, indolor, baço palpável a 2 cm do rebordo costal esquerdo (esplenomegalia leve); sem hepatomegalia. | NEUROLÓGICO: sensibilidade vibratória (palestesia) reduzida em ambos os pés (diapasão 128 Hz — não percebe abaixo do tornozelo); propriocepção reduzida em artelhos bilateralmente; Romberg positivo; marcha com base alargada, levemente atáxica; reflexos patelares e aquileus normossimétricos; sem fraqueza muscular; Babinski ausente.',
      labs: [
        { test: 'Hemoglobina', val: '7,8 g/dL', ref: '13–17 g/dL', alt: true },
        { test: 'Hematócrito', val: '24%', ref: '40–52%', alt: true },
        { test: 'VCM', val: '118 fL', ref: '80–100 fL', alt: true },
        { test: 'HCM', val: '34 pg', ref: '27–33 pg', alt: true },
        { test: 'RDW', val: '19,5%', ref: '< 14,5%', alt: true },
        { test: 'Leucócitos', val: '3.400/mm³', ref: '4.000–11.000/mm³', alt: true },
        { test: 'Neutrófilos hipersegmentados', val: 'Presentes (≥ 5 lóbulos)', ref: 'Ausentes', alt: true },
        { test: 'Plaquetas', val: '98.000/mm³', ref: '150.000–400.000/mm³', alt: true },
        { test: 'Reticulócitos', val: '0,6%', ref: '0,5–2,0%', alt: false },
        { test: 'Vitamina B12 sérica', val: '68 pg/mL', ref: '200–900 pg/mL', alt: true },
        { test: 'Folato sérico', val: '9,2 ng/mL', ref: '> 3,0 ng/mL', alt: false },
        { test: 'LDH', val: '980 UI/L', ref: '140–280 UI/L', alt: true },
        { test: 'Bilirrubina indireta', val: '2,1 mg/dL', ref: '< 1,0 mg/dL', alt: true },
        { test: 'Ferro sérico', val: '92 µg/dL', ref: '50–170 µg/dL', alt: false },
        { test: 'Ferritina', val: '210 ng/mL', ref: '12–300 ng/mL', alt: false },
        { test: 'Esfregaço de sangue periférico', val: 'Macrocitose acentuada (macro-ovalócitos), neutrófilos hipersegmentados (≥ 5 lóbulos), anisocitose', ref: 'Morfologia normal', alt: true }
      ],
      image: 'Nível de ácido metilmalônico sérico (a entregar se solicitado): 680 nmol/L (ref < 300 nmol/L) — elevado, confirma deficiência funcional de B12.',
      note: 'Entregar sinais vitais ao início. Hemograma + B12 + folato + LDH + bilirrubinas: entregar em conjunto se candidato solicitar "exames de anemia" ou itens específicos. Esfregaço: entregar se solicitado. Ácido metilmalônico: entregar somente se candidato pedir explicitamente (exame confirmatório avançado). Exame neurológico deve ser realizado e avaliado pelo candidato — o ator pode simular dificuldade no Romberg se o candidato solicitar o teste.',
      patientProfile: 'A.M.F., 68 anos, aposentado (ex-professor). Viúvo, mora sozinho, filho único mora em outra cidade. Vegetariano estrito (vegano) há 15 anos por razões filosóficas e ambientais. Nega tabagismo e etilismo. Não usa suplementos vitamínicos. Nunca realizou check-up completo. Relata que os filhos insistiram para ele consultar. Levemente esquecido nos últimos meses, família nota que ficou "mais devagar".',
      script: [
        { trigger: 'Queixa principal', speech: 'Doutor, tô me sentindo muito cansado, sem energia. E tem uns 4 meses que sinto formigamento nos pés e nas mãos, vai aumentando. Outro dia quase cai porque tive tontura ao andar.' },
        { trigger: 'Sobre início e evolução', speech: 'Começou devagar, com cansaço. Aí foi aparecendo o formigamento. Agora fico meio inseguro quando ando, principalmente no escuro ou de olhos fechados.' },
        { trigger: 'Sobre alimentação', speech: 'Sou vegano faz 15 anos. Não como nenhum produto animal — nem carne, nem ovo, nem leite. Por opção mesmo, acredito muito nisso. Tomo suplemento de vitamina C às vezes, mas mais nada.' },
        { trigger: 'Sobre suplementos ou vitaminas', speech: 'Não tomo vitamina B12 não. Nunca achei que precisava, sempre comi bastante verdura.' },
        { trigger: 'Sobre memória e raciocínio', speech: 'Minha filha fala que tô mais esquecido, que demoro mais pra responder as coisas. Acho que é a idade.' },
        { trigger: 'Sobre a icterícia / amarelão', speech: 'Olha, não tinha percebido que tava amarelado. Boa pergunta, doutor. O que isso significa?' },
        { trigger: 'Sobre histórico médico', speech: 'Nunca fui diagnosticado com nada. Não tomo remédio. A última vez que fui ao médico foi há uns 8 anos.' },
        { trigger: 'Sobre uso de IBP ou metformina', speech: 'Não uso nenhum remédio. Nunca precisei.' },
        { trigger: 'Pergunta ativa — diagnóstico', speech: 'O que eu tenho, doutor? É sério? Esse formigamento vai passar?' },
        { trigger: 'Sobre mudar a dieta', speech: 'Mudar minha alimentação é muito difícil. Faz 15 anos que não como nada de origem animal. Prefiro tomar suplemento se for necessário.' }
      ],
      hiddenInfo: 'Vegano estrito sem suplementação de B12 há 15 anos — revela em detalhe se candidato perguntar especificamente sobre dieta e tipo de vegetarianismo | Nunca usou suplemento de B12 ou vitamínico de qualquer tipo — revela se perguntado diretamente sobre suplementos | Esquecimento e lentidão de raciocínio notados pela família há 3 meses — só revela se candidato perguntar sobre alterações de memória ou cognição | Já teve episódio de quase queda no escuro (ataxia sensitiva noturna) — só revela se candidato perguntar sobre quedas ou dificuldade no escuro',
      actorBehavior: 'Paciente calmo, intelectualizado, levemente lento nas respostas. Resistente a mudar a dieta — prefere suplementação. Fica ansioso ao ouvir sobre possíveis danos neurológicos permanentes. Colaborativo no exame físico. Pode tentar minimizar o esquecimento ("é a idade").'
    },
    instC: {
      diagnosis: 'Anemia megaloblástica grave por deficiência de vitamina B12 (cobalamina), com degeneração combinada subaguda da medula espinal — em vegano estrito sem suplementação há 15 anos.',
      differentials: [
        'Deficiência de folato — também causa anemia megaloblástica macrocítica; mas não causa manifestações neurológicas (degeneração subaguda da medula); folato sérico normal neste caso afasta',
        'Anemia perniciosa — causa mais comum de deficiência de B12 em idosos; anticorpos anti-fator intrínseco e anti-células parietais gástricas positivos; aqui a causa é dietética (vegano), mas a perniciosa deve ser investigada',
        'Síndrome mielodisplásica — pode causar pancitopenia e macrocitose; sem manifestações neurológicas clássicas; medulograma define; geralmente em idosos com citogenética alterada',
        'Hipotireoidismo — pode causar macrocitose e sintomas neurológicos; TSH normal afasta (pedir se disponível)',
        'Anemia hemolítica — LDH e bilirrubina indireta também elevadas na megaloblástica (eritropoese ineficaz = hemólise intramedular); mas Coombs negativo, sem esplenomegalia massiva, macrocitose + neutrófilos hipersegmentados apontam para megaloblástica'
      ],
      context: 'Idoso vegano estrito há 15 anos sem suplementação de vitamina B12 — causa dietética clássica de deficiência de cobalamina. A B12 está presente exclusivamente em alimentos de origem animal; a dieta vegana sem suplementação leva à depleção progressiva dos estoques hepáticos (que duram 3–5 anos) e eventualmente à deficiência. Apresentação clássica de degeneração combinada subaguda: anemia macrocítica + neuropatia sensitiva com comprometimento dos cordões posteriores (palestesia e propriocepção) e laterais (ataxia, Romberg+). Pancitopenia por eritropoese ineficaz.',
      justify: 'Critérios diagnósticos preenchidos: B12 sérica muito baixa (68 pg/mL), anemia macrocítica (VCM 118 fL) com neutrófilos hipersegmentados no esfregaço (sinal patognomônico de megaloblastose), macro-ovalócitos, LDH muito elevada (eritropoese ineficaz), bilirrubina indireta elevada (hemólise intramedular). Folato normal afasta deficiência de folato como causa principal. Manifestações neurológicas por desmielinização dos cordões posteriores e laterais: ataxia sensitiva (Romberg+), perda de palestesia e propriocepção, marcha base alargada. Causa: dieta vegana 15 anos sem B12.',
      expectedAnamnesis: 'Caracterizar sintomas anêmicos: início, evolução, dispneia, palpitações, fadiga | Investigar sintomas neurológicos em detalhe: localização do formigamento, progressão, dificuldade de marcha, quedas, desequilíbrio no escuro | Perguntar sobre alterações cognitivas: memória, raciocínio, humor (déficit de B12 causa disfunção cognitiva) | Investigar dieta com precisão: tipo de vegetarianismo (vegano? ovolacto?), há quanto tempo, uso de suplementos de B12 | Perguntar sobre gastrectomia, cirurgia bariátrica, doença de Crohn (má absorção) | Uso de metformina (reduz absorção de B12) e inibidores de bomba de prótons | História familiar de anemia perniciosa ou doenças autoimunes | Investigar alcoolismo (má nutrição)',
      expectedPhysical: 'Avaliar palidez conjuntival e subicterícia | Examinar língua: glossite atrófica (língua lisa, avermelhada) | Exame neurológico completo: sensibilidade vibratória (diapasão 128 Hz nos artelhos e tornozelos), propriocepção (movimentação passiva dos artelhos), teste de Romberg | Avaliar marcha: base, equilíbrio, ataxia | Reflexos profundos: podem estar normais, diminuídos ou aumentados dependendo da fase | Sinal de Babinski (cordões laterais) | Pesquisar esplenomegalia (eritropoese ineficaz) | Avaliar cognição brevemente (MEEM)',
      expectedExams: [
        { exam: 'Hemograma completo', justify: 'Confirma anemia; define macrocitose (VCM > 100 fL) e pancitopenia', expected: 'Hb 7,8 g/dL; VCM 118 fL; leucopenia e plaquetopenia (pancitopenia)' },
        { exam: 'Vitamina B12 sérica', justify: 'Confirma deficiência de cobalamina — exame diagnóstico central', expected: '68 pg/mL — gravemente reduzida (normal > 200 pg/mL)' },
        { exam: 'Folato sérico', justify: 'Afasta deficiência de folato como causa da megaloblastose (tratamento diferente)', expected: '9,2 ng/mL — normal' },
        { exam: 'LDH e bilirrubina indireta', justify: 'Elevadas na megaloblastose por eritropoese ineficaz (hemólise intramedular)', expected: 'LDH 980 UI/L e BilInd 2,1 mg/dL — ambas elevadas' },
        { exam: 'Esfregaço de sangue periférico', justify: 'Macro-ovalócitos e neutrófilos hipersegmentados (≥ 5 lóbulos) são patognomônicos de megaloblastose', expected: 'Macrocitose, macro-ovalócitos, neutrófilos hipersegmentados' },
        { exam: 'Anticorpos anti-fator intrínseco e anti-células parietais gástricas', justify: 'Investigar anemia perniciosa como causa (causa autoimune — mais comum em idosos)', expected: 'A solicitar — resultado não disponível nesta estação' },
        { exam: 'TSH', justify: 'Hipotireoidismo pode causar macrocitose e neuropatia — importante excluir', expected: 'A solicitar — resultado não disponível nesta estação' }
      ],
      expectedConduct: 'Farmacológica: Cianocobalamina (vitamina B12) IM: 1000 mcg/dia por 7 dias, depois 1000 mcg/semana por 4 semanas, depois 1000 mcg/mês por toda a vida (se causa autoimune — anemia perniciosa); se causa exclusivamente dietética (vegano), pode-se usar B12 VO em doses altas (1000–2000 mcg/dia) após correção inicial IM, já que 1% da B12 oral é absorvida passivamente sem fator intrínseco | Orientar suplementação diária de B12 VO 1000 mcg como manutenção em vegano | Não suplementar folato isoladamente sem corrigir B12 primeiro (pode precipitar ou agravar a degeneração neurológica — "armadilha clínica") | Acompanhamento neurológico: as alterações neurológicas podem ser parcialmente reversíveis com tratamento precoce; recuperação da sensibilidade vibratória e propriocepção pode levar meses | Rastrear anemia perniciosa: solicitar anticorpos anti-fator intrínseco | Retorno em 4–6 semanas: hemograma de controle (crise reticulocitária esperada em 5–10 dias após início da reposição)',
      expectedCommunication: 'Apresentar-se pelo nome | Explicar o diagnóstico de forma clara: deficiência de vitamina B12 por dieta vegana sem suplementação | Explicar a relação entre a dieta e a anemia e os sintomas neurológicos | Ressaltar que os danos neurológicos podem ser parcialmente revertidos com tratamento, mas quanto mais tarde, menos reversível | Respeitar a escolha do paciente pelo veganismo e propor solução compatível (suplemento B12) sem impor mudança alimentar | Orientar sobre a importância da B12 e que vegetais não contêm B12 biodisponível | Perguntar se tem dúvidas; agendar retorno',
      criticalErrors: [
        'Suplementar folato isoladamente sem corrigir a B12 primeiro (pode agravar irreversivelmente a degeneração neurológica)',
        'Não investigar sintomas neurológicos e perder o diagnóstico de degeneração combinada subaguda',
        'Não realizar exame neurológico (palestesia, propriocepção, Romberg)',
        'Não perguntar sobre dieta e tipo de vegetarianismo (perde a causa etiológica)',
        'Não solicitar vitamina B12 sérica em anemia macrocítica (erro diagnóstico primário)',
        'Tranquilizar o paciente sem urgência — a degeneração neurológica pode progredir e tornar-se irreversível se não tratada rapidamente'
      ]
    },
    instD: {
      title: 'Anemia Megaloblástica por Deficiência de B12 — Material de Estudo',
      sections: [
        {
          h: 'Definição e Epidemiologia',
          items: [
            { item: 'Anemia megaloblástica: síntese de DNA prejudicada → eritrócitos maiores (macrocitose) e eritropoese ineficaz. Causas: deficiência de B12 ou folato.', score: 1, ref: 'Harrison' },
            { item: 'Deficiência de B12: causa mais comum = anemia perniciosa (idosos, autoimune); segunda causa = dieta vegana/vegetariana estrita sem suplementação.', score: 1, ref: 'Harrison' },
            { item: 'B12 presente APENAS em alimentos de origem animal (carnes, ovos, laticínios, frutos do mar). Vegetais não contêm B12 biodisponível.', score: 2, ref: 'Harrison' },
            { item: 'Estoques hepáticos de B12 duram 3–5 anos → sintomas surgem anos após inicio da dieta deficiente ou da má absorção.', score: 1, ref: 'Harrison' },
            { item: 'Outras causas de má absorção de B12: gastrectomia, cirurgia bariátrica (bypass gástrico), doença de Crohn, uso crônico de metformina ou IBP.', score: 1, ref: 'Harrison' }
          ]
        },
        {
          h: 'Manifestações Clínicas',
          items: [
            { item: 'Anemia: fadiga, dispneia, palpitações, palidez, taquicardia, sopro sistólico funcional.', score: 1, ref: 'Harrison' },
            { item: 'Glossite de Hunter: língua avermelhada, lisa, com atrofia de papilas filiformes — clássica da deficiência de B12.', score: 2, ref: 'Harrison' },
            { item: 'Subicterícia (bilirrubina indireta elevada): por hemólise intramedular (eritropoese ineficaz — células são destruídas antes de sair da medula).', score: 1, ref: 'Harrison' },
            { item: 'Degeneração combinada subaguda da medula: comprometimento dos cordões posteriores (perda de palestesia e propriocepção, ataxia sensitiva, Romberg+) E laterais (reflexos hiperativos, Babinski).', score: 2, ref: 'Harrison' },
            { item: 'Manifestações psiquiátricas: depressão, irritabilidade, psicose ("loucura megaloblástica"), demência — reversíveis com tratamento precoce.', score: 1, ref: 'Harrison' },
            { item: 'IMPORTANTE: sintomas neurológicos podem preceder a anemia em 30% dos casos — não descartar B12 baixa por hemograma normal.', score: 2, ref: 'Harrison' }
          ]
        },
        {
          h: 'Diagnóstico Laboratorial',
          items: [
            { item: 'Hemograma: anemia macrocítica (VCM > 100 fL), RDW elevado. Pancitopenia (leucopenia + plaquetopenia) quando grave — por eritropoese ineficaz afetando todas as séries.', score: 2, ref: 'Harrison' },
            { item: 'Esfregaço periférico: macro-ovalócitos e neutrófilos hipersegmentados (≥ 5 lóbulos) — sinal patognomônico de megaloblastose.', score: 2, ref: 'Harrison' },
            { item: 'B12 sérica < 200 pg/mL: confirma deficiência. Valores entre 200–300 pg/mL são inconclusivos — pedir ácido metilmalônico e homocisteína.', score: 2, ref: 'Harrison' },
            { item: 'Ácido metilmalônico sérico (AMM) e homocisteína total: elevados na deficiência de B12 (e AMM não se eleva na deficiência de folato — diferencial útil).', score: 1, ref: 'Harrison' },
            { item: 'LDH muito elevada + bilirrubina indireta elevada: hemólise intramedular por eritropoese ineficaz.', score: 1, ref: 'Harrison' },
            { item: 'Anticorpos anti-fator intrínseco (especificidade ~95%) e anti-células parietais (sensibilidade ~90%): para diagnóstico de anemia perniciosa.', score: 1, ref: 'Harrison' }
          ]
        },
        {
          h: 'Diagnóstico Diferencial — Anemias Macrocíticas',
          items: [
            { item: 'Deficiência de folato: B12 normal; folato baixo; AMM normal (diferencia de B12); SEM manifestações neurológicas — tratamento com ácido fólico.', score: 2, ref: 'Harrison' },
            { item: 'Hipotireoidismo: macrocitose sem megaloblastose verdadeira; TSH elevado; sem neutrófilos hipersegmentados.', score: 1, ref: 'Harrison' },
            { item: 'Hepatopatia / Alcoolismo: macrocitose sem anisocitose e poiquilocitose expressivas; história clínica; GGT elevada.', score: 1, ref: 'Harrison' },
            { item: 'Síndrome mielodisplásica: idoso; pancitopenia; medulograma com displasia; citogenética alterada.', score: 1, ref: 'Harrison' }
          ]
        },
        {
          h: 'Tratamento',
          items: [
            { item: 'Cianocobalamina IM 1000 mcg/dia por 7 dias → semanal por 4 semanas → mensal (manutenção para anemia perniciosa).', score: 2, ref: 'Harrison / PEBMED' },
            { item: 'Vegano sem perniciosa: após correção IM, pode manter com B12 VO 1000–2000 mcg/dia (1% absorvida passivamente, sem fator intrínseco — suficiente para manutenção).', score: 1, ref: 'Harrison' },
            { item: 'NUNCA suplementar folato isoladamente sem corrigir B12 primeiro: pode precipitar ou agravar a degeneração neurológica ("armadilha clínica" clássica de OSCE).', score: 2, ref: 'Harrison' },
            { item: 'Crise reticulocitária esperada em 5–10 dias após início do tratamento (indica resposta medular).', score: 1, ref: 'Harrison' },
            { item: 'Recuperação neurológica: parcial e lenta (meses a anos); quanto mais precoce o tratamento, maior a reversibilidade. Danos > 6 meses tendem a ser permanentes.', score: 2, ref: 'Harrison' }
          ]
        },
        {
          h: 'Orientações ao Paciente',
          items: [
            { item: 'Explicar que vegetais não fornecem vitamina B12 biodisponível — suplementação obrigatória para veganos.', score: 2, ref: 'PEBMED' },
            { item: 'Respeitar a escolha alimentar e propor solução compatível: suplemento de B12 VO diário ou IM mensal.', score: 1, ref: 'PEBMED' },
            { item: 'Explicar que o tratamento deve ser contínuo (não pode parar) — principalmente se houver anemia perniciosa.', score: 1, ref: 'PEBMED' }
          ]
        }
      ]
    }
  },


  // ─────────────────────────────────────────────────────────────────────────
  // CASO 3 — DOENÇA FALCIFORME — CRISE VASO-OCLUSIVA
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 3,
    title: 'Dor intensa nas pernas em jovem com "anemia do sangue ruim"',
    sub: 'Pronto-Socorro — Emergência',
    tema: 'Hematologia',
    topic: 'Doença Falciforme — Crise Vaso-Oclusiva',
    level: 'moderado',
    cardAccent: '#E53935',
    instA: {
      scenario: 'Pronto-Socorro adulto. Sala de triagem, tarde. Paciente chega em cadeira de rodas, com dor intensa.',
      patient: 'T.S.O., 22 anos, masculino, estudante universitário, negro, com diagnóstico prévio de anemia falciforme (HbSS) desde a infância.',
      complaint: 'Dor intensa em membros inferiores e região lombar há 12 horas, de início súbito, sem trauma. Refere episódios semelhantes anteriores.',
      tasks: [
        'Realize a anamnese dirigida, caracterizando a crise e investigando fatores precipitantes.',
        'Realize o exame físico dirigido.',
        'Formule a hipótese diagnóstica e estabeleça os critérios de gravidade.',
        'Solicite os exames complementares adequados.',
        'Proponha a conduta imediata para manejo da crise vaso-oclusiva.'
      ]
    },
    instB: {
      vitals: {
        PA: '118/74 mmHg',
        FC: '108 bpm',
        FR: '22 irpm',
        Tax: '37,8 °C',
        SpO2: '95% (ar ambiente)',
        Peso: '68 kg',
        Altura: '1,75 m'
      },
      physicalGeneral: 'Mau estado geral, consciente, orientado, agitado pela dor, afebril (Tax 37,8 °C — subfebre). Hipocorado (2+/4+), anictérico, acianótico, sem edema periférico.',
      physicalSeg: 'CARDIOVASCULAR: taquicardia (FC 108 bpm), ritmo regular, 2 tempos, sopro sistólico 2+/6+ em foco aórtico (funcional); sem B3. | PULMONAR: murmúrio vesicular presente bilateralmente, sem adventícios, FR 22 irpm. | ABDOME: plano, levemente tenso à palpação no hipocôndrio esquerdo; baço não palpável (asplenia funcional esperada no adulto com HbSS por autoesplenectomia); sem hepatomegalia. | OSTEOARTICULAR / MEMBROS INFERIORES: dor à palpação de diáfise de ambos os fêmures e tíbias; sem edema articular, sem calor localizado, sem eritema; amplitude de movimento preservada mas dolorosa. | REGIÃO LOMBAR: dor à palpação de processos espinhosos de L2–L4, sem irradiação para MMII, sem déficit neurológico. | NEUROLÓGICO: sem alterações focais; sem cefaleia.',
      labs: [
        { test: 'Hemoglobina', val: '7,2 g/dL', ref: '13–17 g/dL', alt: true },
        { test: 'Hematócrito', val: '22%', ref: '40–52%', alt: true },
        { test: 'VCM', val: '88 fL', ref: '80–100 fL', alt: false },
        { test: 'Leucócitos', val: '14.200/mm³', ref: '4.000–11.000/mm³', alt: true },
        { test: 'Neutrófilos', val: '11.800/mm³ (83%)', ref: '< 7.000/mm³', alt: true },
        { test: 'Plaquetas', val: '390.000/mm³', ref: '150.000–400.000/mm³', alt: false },
        { test: 'Reticulócitos', val: '8,5%', ref: '0,5–2,0%', alt: true },
        { test: 'LDH', val: '620 UI/L', ref: '140–280 UI/L', alt: true },
        { test: 'Bilirrubina indireta', val: '3,2 mg/dL', ref: '< 1,0 mg/dL', alt: true },
        { test: 'Creatinina', val: '0,9 mg/dL', ref: '0,7–1,2 mg/dL', alt: false },
        { test: 'PCR', val: '42 mg/L', ref: '< 5 mg/L', alt: true },
        { test: 'Hemocultura', val: 'Coletada — aguardando resultado', ref: '—', alt: false },
        { test: 'Esfregaço', val: 'Drepanócitos (hemácias em foice), corpúsculos de Howell-Jolly, anilocitose, policromasia', ref: 'Morfologia normal', alt: true }
      ],
      image: 'Raio-X de tórax (a entregar se candidato solicitar): campos pulmonares limpos, sem condensações, sem derrame pleural. Ausência de infiltrados pulmonares — afasta síndrome torácica aguda no momento.',
      note: 'Entregar sinais vitais ao início. Hemograma + reticulócitos + LDH + bilirrubinas + PCR: entregar em conjunto se solicitados. Esfregaço: entregar separado se solicitado. Hemocultura: informar que foi coletada e aguarda resultado. Raio-X de tórax: entregar se candidato solicitar — fundamental para afastar síndrome torácica aguda. Informar que o paciente está com dor EVA 9/10 e precisa de analgesia urgente.',
      patientProfile: 'T.S.O., 22 anos, estudante de engenharia. Diagnóstico de anemia falciforme (HbSS) confirmado ao nascimento pelo Programa Nacional de Triagem Neonatal. Acompanhamento irregular no hemocentro — parou de ir há 1 ano. Usa hidroxiureia 500 mg/dia quando lembra, mas parou há 3 semanas. Vacinas do calendário falciforme atrasadas (antipneumocócica e antimeningocócica vencidas). Nas últimas 48 horas: exposição ao frio (chuva), desidratação (estava estudando, bebeu pouca água), stress de prova da faculdade.',
      script: [
        { trigger: 'Queixa principal', speech: 'Doutor, essa dor tá me matando. Tá nas duas pernas e nas costas. Eu tenho anemia falciforme, já tive outras crises, mas essa tá muito forte. Começou ontem à noite.' },
        { trigger: 'Sobre a intensidade da dor', speech: 'Nota 9, 10. Tô tendo dificuldade até de respirar fundo por causa da dor. Não consigo andar.' },
        { trigger: 'Sobre fatores precipitantes', speech: 'Ontem tive prova na faculdade, tava muito estressado. Fiquei o dia inteiro sem beber água, e voltando pra casa me molhei todo na chuva. Aí de noite começou.' },
        { trigger: 'Sobre o uso de hidroxiureia', speech: 'Eu uso esse remédio, hidroxiureia, mas parei faz umas 3 semanas. Tava enjoado com ele e achei que podia parar uns dias.' },
        { trigger: 'Sobre acompanhamento médico', speech: 'Fico no hemocentro, mas faz um ano que não vou. Fica longe da faculdade, fica difícil de conciliar.' },
        { trigger: 'Sobre febre', speech: 'Não tô com febre não, acho. Tô é com muito frio e dor.' },
        { trigger: 'Sobre dificuldade para respirar', speech: 'A dor nas costelas dificulta um pouco. Mas fora isso não tô com falta de ar diferente do normal.' },
        { trigger: 'Sobre crises anteriores', speech: 'Já tive várias crises parecidas. A última foi uns 6 meses atrás. Aquela também foi no PS, fiquei internado 3 dias. Tomei morfina e soro.' },
        { trigger: 'Sobre vacinas', speech: 'As vacinas... acho que tô atrasado. O hemocentro sempre fala, mas não me lembro quando tomei a última.' },
        { trigger: 'Pergunta ativa — diagnóstico', speech: 'Isso é outra crise de falcemia mesmo, né? Vai precisar internar?' }
      ],
      hiddenInfo: 'Parou a hidroxiureia há 3 semanas — só revela se candidato perguntar sobre adesão ao tratamento de base | Vacinas atrasadas (antipneumocócica e antimeningocócica) — só revela se candidato perguntar sobre o calendário vacinal do falciforme | Desidratação e exposição ao frio nas 24 horas anteriores — só revela com detalhamento se candidato perguntar especificamente sobre fatores precipitantes | Já teve crise de síndrome torácica aguda há 2 anos — só revela se candidato perguntar sobre complicações anteriores',
      actorBehavior: 'Paciente em sofrimento intenso pela dor, agitado mas colaborativo. Respira com cuidado, evita movimentos bruscos. Fica aliviado quando o candidato toma providências imediatas para analgesia. Demonstra cansaço com as crises recorrentes e dificuldade de manter o acompanhamento regular.'
    },
    instC: {
      diagnosis: 'Crise vaso-oclusiva dolorosa em paciente com anemia falciforme (HbSS), precipitada por desidratação, exposição ao frio e estresse — com leucocitose reativa (sem foco infeccioso identificado) e afastamento de síndrome torácica aguda pelo RX de tórax.',
      differentials: [
        'Síndrome torácica aguda (STA) — complicação grave da falciforme: dor torácica + infiltrado pulmonar + febre + hipoxemia; RX de tórax sem condensação afasta no momento, mas monitorar (pode surgir nas próximas horas)',
        'Infecção bacteriana grave / sepse — leucocitose (14.200/mm³) pode refletir infecção; PCR 42; hemocultura coletada; febre presente (37,8°C); asplênicos têm risco elevado de sepse por encapsulados (Streptococcus pneumoniae); manter vigilância e antibiótico se febre > 38,5 °C',
        'Sequestro esplênico — causa esplenomegalia aguda e queda abrupta da Hb; adultos com HbSS desenvolvem asplenia funcional, tornando o sequestro improvável nessa faixa etária',
        'Acidente vascular cerebral isquêmico — pode causar dor e deficits neurológicos; sem achados neurológicos focais neste caso',
        'Crise aplásica (por Parvovírus B19) — reticulocitopenia súbita + queda de Hb; reticulócitos elevados (8,5%) afastam'
      ],
      context: 'Jovem negro com anemia falciforme HbSS — doença hereditária autossômica recessiva de maior prevalência no Brasil, com alta carga de morbimortalidade. A crise vaso-oclusiva (CVO) é a complicação mais frequente: hemácias falcizadas obstruem a microcirculação, causando isquemia tecidual e dor óssea intensa. Fatores precipitantes clássicos presentes: desidratação, frio, estresse e interrupção da hidroxiureia. Paciente assplênico funcional (autoesplenectomia por microinfartos repetidos) — risco aumentado de sepse por bactérias encapsuladas.',
      justify: 'Diagnóstico de HbSS estabelecido desde o nascimento. Apresentação clínica clássica de CVO: dor óssea intensa em MMII e região lombar, de início súbito, sem trauma, com fatores precipitantes identificados (desidratação, frio, estresse, suspensão da hidroxiureia). Hemograma com anemia basal crônica (Hb 7,2 — típico de HbSS), reticulocitose elevada (8,5% — eritropoese compensatória), hemólise (LDH e bilirrubina indireta elevadas), leucocitose reativa. Esfregaço com drepanócitos e corpúsculos de Howell-Jolly (asplenia). RX de tórax limpo afasta STA.',
      expectedAnamnesis: 'Caracterizar a dor: localização, início, intensidade (EVA), irradiação, qualidade | Investigar fatores precipitantes: desidratação, frio, infecção, exercício físico excessivo, altitude, estresse, privação de sono, etilismo | Perguntar sobre febre (temperatura atual e nas últimas 24h) | Investigar sintomas respiratórios: dor torácica, tosse, dispneia (rastreio de STA) | Sintomas neurológicos: cefaleia, déficit focal, alteração de consciência (rastreio de AVE) | Verificar uso de hidroxiureia: dose, regularidade, última tomada | Perguntar sobre acompanhamento no hemocentro e vacinação | Histórico de complicações: STA, sequestro esplênico, AVE, priapismo, úlceras de perna | Crises anteriores: frequência, tratamentos, internações',
      expectedPhysical: 'Avaliar sinais vitais com atenção especial a febre e SpO2 | Avaliar palidez (anemia) e icterícia (hemólise) | Auscultar pulmões (afastar STA) | Palpar abdome: ausência de esplenomegalia é esperada (asplenia funcional); hepatomegalia? | Avaliar MMII: presença de edema, calor, eritema articular (artrite?), úlceras de tornozelo | Exame neurológico rápido: consciência, força, sensibilidade, fala (rastreio de AVE falcêmico) | Avaliar hidratação',
      expectedExams: [
        { exam: 'Hemograma completo + reticulócitos', justify: 'Avaliar grau de anemia (comparar com basal do paciente), reticulocitose, leucocitose (infecção?)', expected: 'Hb 7,2 g/dL; reticulócitos 8,5%; leucocitose 14.200/mm³' },
        { exam: 'LDH + bilirrubinas', justify: 'Quantificar hemólise aguda', expected: 'LDH 620 UI/L; bilirrubina indireta 3,2 mg/dL — hemólise ativa' },
        { exam: 'PCR e/ou procalcitonina', justify: 'Rastrear infecção bacteriana — leucocitose pode ser reativa ou infecciosa; asplênicos têm altíssimo risco de sepse', expected: 'PCR 42 mg/L — elevada, infecção não afastada' },
        { exam: 'Hemocultura', justify: 'Obrigatória em falciforme febril ou com suspeita de infecção — risco de sepse fulminante por encapsulados', expected: 'Coletada, aguardando resultado' },
        { exam: 'Raio-X de tórax', justify: 'Fundamental para rastrear síndrome torácica aguda (condensação pulmonar) — complicação grave com alta mortalidade', expected: 'Campos pulmonares limpos — STA afastada no momento' },
        { exam: 'Gasometria arterial', justify: 'Avaliar oxigenação — indicada se SpO2 < 95% ou suspeita de STA', expected: 'A solicitar se SpO2 cair ou sintomas respiratórios surgirem' },
        { exam: 'Função renal (creatinina, ureia) e eletrólitos', justify: 'Falciforme tem risco aumentado de nefropatia; desidratação pode precipitar IRA', expected: 'Creatinina 0,9 mg/dL — normal; monitorar' }
      ],
      expectedConduct: 'Analgesia IMEDIATA (prioridade máxima): dipirona 1g EV + cetoprofeno 100 mg EV (ou outro AINE); morfina 2–4 mg EV cada 20 min se EVA ≥ 7 (opioide é padrão ouro na CVO grave); não retardar analgesia aguardando exames | Hidratação venosa: SF 0,9% ou SRL 250–500 mL/h nas primeiras horas (corrigir desidratação e reduzir viscosidade sanguínea) | Oxigenioterapia: se SpO2 < 95% — O2 por cateter nasal 2–4 L/min | Monitorização: sinais vitais de hora em hora, SpO2 contínua, temperatura | Antibioticoterapia: indicada se febre > 38,5°C ou suspeita de infecção (ceftriaxona 1–2g EV — cobertura para encapsulados em asplênico) | Retomar hidroxiureia assim que tolerância oral | Internação: indicada — CVO grave com EVA 9/10 sem controle ambulatorial | Comunicação com hemocentro de referência | Orientações: reforçar adesão à hidroxiureia, hidratação, evitar frio e estresse, atualizar vacinas (antipneumocócica 23-valente e antimeningocócica)',
      expectedCommunication: 'Apresentar-se pelo nome | Demonstrar empatia imediata com a dor — validar o sofrimento | Comunicar que a analgesia será iniciada imediatamente, antes de qualquer exame | Explicar que é provável uma crise de falcemia e o plano de investigação | Orientar sobre importância da hidroxiureia, hidratação e vacinação | Perguntar se tem dúvidas; tranquilizar sobre o tratamento | Tratar com dignidade — evitar preconceitos (paciente negro, jovem)',
      criticalErrors: [
        'Retardar ou negar analgesia para o paciente com dor intensa (EVA 9–10) — analgesia é a prioridade absoluta na CVO',
        'Não solicitar raio-X de tórax para afastar síndrome torácica aguda (complicação grave com alta mortalidade)',
        'Não reconhecer o risco de sepse em paciente asplênico com febre e leucocitose — não coletar hemocultura ou não prescrever antibiótico se febre ≥ 38,5°C',
        'Subestimar a gravidade da crise e tentar tratar ambulatorialmente sem internar',
        'Não investigar adesão à hidroxiureia e fatores precipitantes'
      ]
    },
    instD: {
      title: 'Doença Falciforme — Crise Vaso-Oclusiva — Material de Estudo',
      sections: [
        {
          h: 'Definição e Epidemiologia',
          items: [
            { item: 'Doença falciforme: hemoglobinopatia hereditária autossômica recessiva por mutação no gene da beta-globina (Glu→Val na posição 6) → HbS falciza sob baixa O2.', score: 1, ref: 'Harrison' },
            { item: 'Genótipos: HbSS (mais grave), HbSC, HbS/beta-talassemia. HbSS tem maior gravidade clínica.', score: 1, ref: 'Harrison' },
            { item: 'Brasil: ~3.500 nascimentos com doença falciforme/ano; ~200.000 portadores de traço falciforme. Maior prevalência no Nordeste e Sudeste — correlação com população afrodescendente.', score: 1, ref: 'MS Brasil' },
            { item: 'Diagnóstico: Programa Nacional de Triagem Neonatal (PNTN) — teste do pezinho. Confirmação por eletroforese de hemoglobina.', score: 1, ref: 'MS Brasil' }
          ]
        },
        {
          h: 'Fisiopatologia e Fatores Precipitantes',
          items: [
            { item: 'HbS polimeriza em baixa tensão de O2 → eritrócito assume formato de foice → obstrução de microcirculação → isquemia e dor (crise vaso-oclusiva).', score: 2, ref: 'Harrison' },
            { item: 'Fatores precipitantes clássicos: desidratação, exposição ao frio, infecção, exercício excessivo, altitude, estresse, privação de sono, etilismo, interrupção da hidroxiureia.', score: 2, ref: 'Harrison' },
            { item: 'Asplenia funcional: microinfartos esplênicos repetidos → autoesplenectomia em adultos com HbSS → risco elevado de sepse fulminante por S. pneumoniae, H. influenzae, N. meningitidis.', score: 2, ref: 'Harrison' }
          ]
        },
        {
          h: 'Complicações Agudas — Diagnóstico Diferencial',
          items: [
            { item: 'Crise vaso-oclusiva (CVO): causa mais comum de ida ao PS; dor óssea intensa em extremidades, tórax, abdome, coluna; sem consolidação pulmonar.', score: 2, ref: 'Harrison' },
            { item: 'Síndrome torácica aguda (STA): infiltrado pulmonar novo + dor torácica + febre + hipoxemia — causa de morte mais frequente; tratar com O2, analgesia, antibiótico + transfusão ou exsanguineotransfusão.', score: 2, ref: 'Harrison' },
            { item: 'Sequestro esplênico: queda súbita de Hb + esplenomegalia aguda + instabilidade hemodinâmica — mais comum em crianças com HbSS < 5 anos.', score: 1, ref: 'Harrison' },
            { item: 'Crise aplásica (Parvovírus B19): reticulocitopenia + queda intensa da Hb — suspender transfusão de repetição; autolimitada.', score: 1, ref: 'Harrison' },
            { item: 'AVC isquêmico: crianças 2–9 anos e adultos > 30 anos com HbSS têm risco 300× maior que a população geral.', score: 1, ref: 'Harrison' },
            { item: 'Priapismo: ereção dolorosa > 4h — urgência urológica; hidratação + analgesia + aspiração de corpo cavernoso.', score: 1, ref: 'Harrison' }
          ]
        },
        {
          h: 'Manejo da Crise Vaso-Oclusiva',
          items: [
            { item: 'Analgesia IMEDIATA e escalonada: dipirona + AINEs para dor leve-moderada; morfina IV 0,1 mg/kg a cada 20 min para EVA ≥ 7 (opioide é padrão ouro).', score: 2, ref: 'Harrison / PEBMED' },
            { item: 'Não retardar analgesia aguardando exames — "analgesia primeiro" é regra absoluta.', score: 2, ref: 'Harrison' },
            { item: 'Hidratação IV: 1,5× a taxa de manutenção com SF 0,9% — reduz viscosidade e reversão da falcização.', score: 1, ref: 'Harrison' },
            { item: 'O2 suplementar: apenas se SpO2 < 95% — não dar O2 rotineiramente sem indicação.', score: 1, ref: 'Harrison' },
            { item: 'Antibioticoterapia: se febre ≥ 38,5°C em asplênico — ceftriaxona IV empírica enquanto aguarda hemocultura.', score: 2, ref: 'Harrison' },
            { item: 'Transfusão simples: indicada se Hb < 6 g/dL com instabilidade, crise aplásica, STA grave. Não transfundir rotineiramente na CVO.', score: 1, ref: 'Harrison' },
            { item: 'Internação: indicada para CVO grave (EVA ≥ 7 sem controle), STA, febre em asplênico, complicações.', score: 1, ref: 'Harrison' }
          ]
        },
        {
          h: 'Tratamento de Manutenção e Prevenção',
          items: [
            { item: 'Hidroxiureia: aumenta síntese de HbF (fetal) → reduz polimerização de HbS → menos crises, menos STA, menos hospitalizações. Dose: 15–35 mg/kg/dia. Primeira linha em HbSS sintomático.', score: 2, ref: 'Harrison' },
            { item: 'Vacinas obrigatórias no falciforme: antipneumocócica (PCV13 + PPSV23), antimeningocócica ACWY e B, anti-Haemophilus influenzae b, influenza anual, hepatite B.', score: 2, ref: 'MS Brasil' },
            { item: 'Penicilina profilática até os 5 anos (ou até os 10 se esplenectomia): penicilina V 125 mg 2×/dia < 3 anos; 250 mg 2×/dia ≥ 3 anos.', score: 1, ref: 'MS Brasil' },
            { item: 'Ácido fólico 5 mg/dia: suporta eritropoese aumentada crônica.', score: 1, ref: 'PEBMED' },
            { item: 'Orientações: hidratação adequada, evitar frio e altitude, não fumar, acompanhamento regular no hemocentro.', score: 1, ref: 'PEBMED' }
          ]
        }
      ]
    }
  },


  // ─────────────────────────────────────────────────────────────────────────
  // CASO 4 — LEUCEMIA LINFOBLÁSTICA AGUDA PEDIÁTRICA (LLA)
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 4,
    title: 'Criança com cansaço, manchas roxas e dor nas pernas há 3 semanas',
    sub: 'UBS → Pronto-Socorro Pediátrico',
    tema: 'Hematologia',
    topic: 'Leucemia Linfoblástica Aguda — LLA Pediátrica',
    level: 'difícil',
    cardAccent: '#E53935',
    instA: {
      scenario: 'UBS Pediátrica. Mãe traz filha de 6 anos com queixas progressivas de cansaço, manchas roxas e dor nas pernas. Turno matutino.',
      patient: 'L.F.S., 6 anos, feminina, estudante do 1º ano, sem comorbidades conhecidas, sem uso de medicamentos.',
      complaint: 'Cansaço progressivo, manchas roxas espontâneas no corpo, dor nas pernas e febre baixa intermitente há cerca de 3 semanas.',
      tasks: [
        'Realize a anamnese dirigida com a mãe e com a criança, investigando os sintomas.',
        'Realize o exame físico pediátrico completo.',
        'Formule a hipótese diagnóstica principal e os principais diferenciais.',
        'Solicite os exames complementares adequados e urgentes.',
        'Decida a conduta e o encaminhamento correto.'
      ]
    },
    instB: {
      vitals: {
        PA: '96/62 mmHg',
        FC: '112 bpm',
        FR: '24 irpm',
        Tax: '38,1 °C',
        Peso: '22 kg',
        Altura: '1,18 m',
        SpO2: '98% (ar ambiente)'
      },
      physicalGeneral: 'Regular estado geral, consciente, orientada, hipocorada (2+/4+), anictérica, acianótica, com múltiplas equimoses espontâneas. Febril (38,1°C). Sem sangramento ativo.',
      physicalSeg: 'PELE E MUCOSAS: múltiplas equimoses em diferentes estágios de evolução em membros superiores e inferiores e tronco; 3–4 petéquias no palato; sem sangramento ativo; palidez palmar e conjuntival. | CABEÇA E PESCOÇO: adenomegalias cervicais bilaterais, a maior medindo ~2 cm, firmes, indolores, móveis; sem riqueza de expressão sugestiva de dor. | CARDIOVASCULAR: taquicardia (FC 112 bpm); ritmo regular; sopro sistólico funcional 2+/6+. | PULMONAR: murmúrio vesicular presente; sem adventícios. | ABDOME: fígado palpável a 3 cm abaixo do rebordo costal direito (hepatomegalia leve); baço palpável a 2 cm abaixo do RCE (esplenomegalia leve); sem dor à palpação. | OSTEOMUSCULAR: dor à palpação da metáfise do fêmur distal bilateral; sem edema articular; articulações com amplitude de movimento preservada porém dolorosa à mobilização ativa. | NEUROLÓGICO: sem déficits focais; sem rigidez de nuca; pupilas isocóricas e fotorreagentes.',
      labs: [
        { test: 'Hemoglobina', val: '7,0 g/dL', ref: '11,5–15,5 g/dL', alt: true },
        { test: 'VCM', val: '86 fL', ref: '75–87 fL', alt: false },
        { test: 'Leucócitos', val: '42.000/mm³', ref: '4.500–13.500/mm³', alt: true },
        { test: 'Linfoblastos no sangue periférico', val: '68%', ref: 'Ausentes', alt: true },
        { test: 'Neutrófilos', val: '800/mm³ (neutropenia grave)', ref: '> 1.500/mm³', alt: true },
        { test: 'Plaquetas', val: '28.000/mm³', ref: '150.000–400.000/mm³', alt: true },
        { test: 'LDH', val: '1.840 UI/L', ref: '< 300 UI/L', alt: true },
        { test: 'Ácido úrico', val: '9,8 mg/dL', ref: '2,5–7,0 mg/dL', alt: true },
        { test: 'Creatinina', val: '0,5 mg/dL', ref: '0,3–0,7 mg/dL', alt: false },
        { test: 'Potássio', val: '4,2 mEq/L', ref: '3,5–5,0 mEq/L', alt: false },
        { test: 'Esfregaço de sangue periférico', val: 'Blastos com núcleo grande, cromatina frouxa, nucléolos proeminentes — morfologia linfoblástica', ref: 'Sem blastos', alt: true }
      ],
      image: 'Raio-X de tórax (a entregar se solicitado): alargamento do mediastino superior bilateral — sugestivo de massa tímica/adenopatia mediastinal (presente em ~15% das LLA-T, importante afastar compressão de via aérea).',
      note: 'Entregar sinais vitais ao início. Hemograma + LDH + ácido úrico: entregar em conjunto se candidato solicitar. Esfregaço: entregar separado se solicitado. RX de tórax: entregar se candidato solicitar — achado de alargamento mediastinal é importante para conduta. Informar que o caso exige encaminhamento urgente para onco-hematologia pediátrica — NÃO tentar tratar na UBS.',
      patientProfile: 'L.F.S., 6 anos, filha única, mora com pai e mãe em apartamento. Mãe é doméstica, pai é pedreiro. Sem histórico familiar de leucemia ou outras neoplasias. Criança anteriormente ativa, brincava normalmente até 3 semanas atrás. A mãe relata que a filha parou de correr e brincar, reclama de dor nas pernas principalmente à noite, e tem manchas que "aparecem do nada". Há 10 dias foi a outro médico que disse ser "falta de vitamina" e prescreveu suplemento vitamínico — sem melhora.',
      script: [
        { trigger: 'Queixa principal (mãe fala)', speech: 'Doutor(a), minha filha tá muito cansada, não quer mais brincar. Apareceram umas manchas roxas no corpo dela, e ela reclama de dor nas pernas toda hora. Tá com um pouco de febre também, vai e vem.' },
        { trigger: 'Sobre as manchas roxas', speech: '(mãe) Aparecem do nada, sem ela bater em nada. Antes tinha uma ou duas, agora tô contando umas seis, sete no corpo todo. Umas maiores, outras menores.' },
        { trigger: 'Sobre a dor nas pernas', speech: '(criança) Dói aqui (aponta para coxas e joelhos). Dói mais de noite quando eu tô deitada. Não consigo correr mais.' },
        { trigger: 'Sobre consulta anterior', speech: '(mãe) Fui num médico há 10 dias, ele disse que era falta de vitamina. Receitou um xarope. Mas ela não melhorou, ficou até pior.' },
        { trigger: 'Sobre febre', speech: '(mãe) Tem febre baixa, assim 37,8, 38 graus, vem e vai. Dei dipirona e passa, mas volta.' },
        { trigger: 'Sobre adenomegalias / gânglios', speech: '(mãe) Sinto umas bolinhas no pescoço dela. Aparecerem faz uns 2 meses. Outro médico disse que era de infecção de garganta, mas ela não teve garganta inflamada recentemente.' },
        { trigger: 'Sobre sangramento', speech: '(mãe) Não sangrou do nariz ainda. Mas vi umas pintinhas vermelhas pequeninhas no céu da boca dela.' },
        { trigger: 'Sobre perda de peso e apetite', speech: '(mãe) Ela comia bem antes. Agora tá sem apetite, parece que emagreceu um pouquinho.' },
        { trigger: 'Pergunta ativa — diagnóstico', speech: '(mãe) O que a minha filha tem, doutor(a)? É grave? Pode ser câncer? Eu fiquei com medo quando vi as manchas.' }
      ],
      hiddenInfo: 'Consulta anterior há 10 dias sem diagnóstico correto (suplemento vitamínico) — só revela se candidato perguntar sobre consultas anteriores | Adenomegalias cervicais presentes há 2 meses (iniciaram antes das equimoses) — só revela em detalhe se candidato perguntar sobre quando os gânglios apareceram | Dor óssea noturna predominante — só revela se candidato perguntar especificamente sobre o horário e a característica da dor | Perda de apetite e possível perda de peso — só revela se candidato perguntar sobre alimentação e peso recente',
      actorBehavior: 'Mãe muito ansiosa, com choro contido, claramente assustada. Criança colaborativa, levemente apática, pode demonstrar dor ao exame físico (fêmures). A mãe pode perguntar diretamente se é câncer — o candidato deve responder com honestidade e empatia, sem dar diagnóstico definitivo mas sem negar a possibilidade. Mãe de baixa escolaridade — usar linguagem simples.'
    },
    instC: {
      diagnosis: 'Leucemia Linfoblástica Aguda (LLA) pediátrica — provável LLA-B (mais comum) com pancitopenia (anemia + trombocitopenia grave + neutropenia), blastos circulantes (68%), leucocitose, LDH muito elevada e dor óssea. Encaminhamento urgente para onco-hematologia pediátrica.',
      differentials: [
        'Artrite Idiopática Juvenil (AIJ) — dor articular em criança; mas sem blastos no hemograma, sem pancitopenia, sem linfadenomegalia extensa; pode ter leucocitose e anemia inflamatória; LDH não tão elevada',
        'Linfoma não-Hodgkin pediátrico — pode causar adenomegalias, massa mediastinal, blastos no sangue periférico; sobreposição com LLA-T; distingue-se por > 25% de blastos na medula (LLA) ou < 25% (linfoma)',
        'Aplasia medular — pancitopenia sem blastos circulantes; sem hepatoesplenomegalia; medulograma hipocelular',
        'Mononucleose infecciosa (EBV) — adenomegalias, hepatoesplenomegalia, febre; linfocitose atípica mas não blastos verdadeiros; MonoSpot+ ou sorologia EBV',
        'PTI (Púrpura Trombocitopênica Imune) — trombocitopenia isolada; sem anemia nem leucocitose; sem hepatoesplenomegalia; sem blastos — diagnóstico diferencial importante nas petéquias'
      ],
      context: 'LLA é a neoplasia mais comum da infância (30% de todos os cânceres pediátricos) e a leucemia mais frequente em crianças. Pico de incidência: 2–5 anos. Sintomas clássicos: tríade pancitopenia + dor óssea + linfadenomegalia/hepatoesplenomegalia. A dor óssea (periostite por infiltração leucêmica das metáfises) é frequentemente confundida com artrite ou reumatismo em crianças. O atraso diagnóstico de semanas é comum — o candidato deve reconhecer o padrão de alarme (pancitopenia + blastos + criança com dor óssea e equimoses espontâneas).',
      justify: 'Pancitopenia em criança (Hb 7,0 + plaquetas 28.000 + neutropenia grave 800/mm³) com blastos linfoblásticos no esfregaço (68% de linfoblastos) é diagnóstico de LLA até prova em contrário. LDH 1.840 (altíssima — proliferação tumoral intensa) e ácido úrico elevado reforçam. Apresentação clínica clássica: equimoses espontâneas (plaquetopenia), palidez e taquicardia (anemia), febre (neutropenia/invasão tumoral), dor óssea (infiltração das metáfises), hepatoesplenomegalia e linfadenomegalia (infiltração de órgãos). Alargamento mediastinal no RX pode indicar LLA-T.',
      expectedAnamnesis: 'Tempo e evolução dos sintomas | Caracterizar equimoses: espontâneas ou por trauma; locais; evolução | Caracterizar a dor: localização (ossos ou articulações?), horário (noturna é alarme), intensidade | Investigar febre: temperatura, frequência, duração, outros focos | Perguntar sobre sangramento: epistaxe, gengiva, fezes escuras | Investigar perda de peso e anorexia | Perguntar sobre adenomegalias: quando surgiram, se cresceram | Consultas anteriores e diagnósticos prévios | Histórico familiar de neoplasias hematológicas | Investigar sintomas de SNC: cefaleia, vômitos, alteração visual (infiltração meníngea)',
      expectedPhysical: 'Exame da pele: número, tipo e distribuição das equimoses/petéquias | Palpar cadeias ganglionares (cervical, axilar, inguinal) | Examinar mucosas orais: petéquias, sangramento gengival | Auscultação cardíaca: sopro funcional (anemia) | Palpar abdome com cuidado: hepatomegalia e esplenomegalia | Exame osteoarticular: dor à palpação das metáfises (fêmures, tíbias) — sinal importante de infiltração óssea | Exame neurológico básico: nível de consciência, paralisia de nervos cranianos (infiltração meníngea) | Fundo de olho se disponível (edema de papila = SNC)',
      expectedExams: [
        { exam: 'Hemograma completo + esfregaço de sangue periférico', justify: 'Fundamental — blastos no sangue periférico são achado diagnóstico em > 80% das LLA; define pancitopenia', expected: '42.000 leucócitos com 68% de linfoblastos; Hb 7,0; plaquetas 28.000' },
        { exam: 'LDH e ácido úrico', justify: 'LDH muito elevada indica alta carga tumoral e eritropoese ineficaz. Ácido úrico elevado — risco de síndrome de lise tumoral com o início do tratamento', expected: 'LDH 1.840 UI/L; ácido úrico 9,8 mg/dL' },
        { exam: 'Raio-X de tórax', justify: 'Afastar massa mediastinal (LLA-T) — compressão de via aérea é emergência; também avalia infiltrado pulmonar (infecção em neutropênico)', expected: 'Alargamento mediastinal — possível adenopatia/massa tímica' },
        { exam: 'Função renal e eletrólitos (K, Ca, P, creatinina)', justify: 'Avaliar risco de síndrome de lise tumoral espontânea (ácido úrico elevado, hipercalemia, hiperfosfatemia, hipocalcemia)', expected: 'Creatinina normal; monitorar K+ e fósforo' },
        { exam: 'Mielograma (medulograma) + imunofenotipagem', justify: 'Confirma diagnóstico (≥ 25% de blastos na medula = LLA), define linhagem (B ou T) e subtipos — guia protocolo quimioterápico', expected: 'A ser realizado no serviço de referência de onco-hematologia pediátrica' }
      ],
      expectedConduct: 'ENCAMINHAMENTO URGENTE para centro de onco-hematologia pediátrica de referência — NÃO iniciar tratamento na UBS ou no PS sem orientação especializada | Medidas de suporte imediatas enquanto aguarda transferência: manter acesso venoso; hidratação IV vigorosa (prevenir síndrome de lise tumoral); se febre em neutropênico (neutrófilos < 1.500): antibioticoterapia empírica de amplo espectro (cefepima ou piperacilina-tazobactam IV) | Evitar AINEs e IM (plaquetopenia grave) | NÃO transfundir plaquetas empiricamente (sem sangramento ativo, aguardar orientação da onco-hematologia) | Comunicação com serviço de referência para transferência imediata | COMUNICAÇÃO COM A FAMÍLIA: explicar que os exames mostram células anormais no sangue e que é necessário avaliação urgente especializada — ser honesto sobre a gravidade sem dar diagnóstico definitivo; dar espaço para choro e perguntas; oferecer suporte emocional',
      expectedCommunication: 'Apresentar-se pelo nome | Criar ambiente de confiança e privacidade para comunicar notícia grave | Comunicar o achado com clareza e empatia: "Os exames mostram que o sangue da sua filha tem células anormais que precisam de avaliação urgente de um especialista. Vou encaminhá-la agora para um centro especializado." | Não usar a palavra "câncer" definitivamente antes do diagnóstico confirmatório, mas não negar se a mãe perguntar diretamente | Validar o medo e a preocupação da mãe | Explicar os próximos passos | Perguntar se a família tem dúvidas | Garantir que a criança seja transferida com segurança',
      criticalErrors: [
        'Atribuir os sintomas a deficiência vitamínica, anemia ferropriva ou artrite sem solicitar hemograma — perder a oportunidade diagnóstica',
        'Não reconhecer blastos no esfregaço e não encaminhar urgentemente para onco-hematologia',
        'Prescrever AINEs ou ácido acetilsalicílico em criança com plaquetopenia grave (risco de hemorragia fatal)',
        'Não investigar febre em criança neutropênica (risco de sepse) ou não iniciar antibiótico empírico se indicado',
        'Tentar tratar ambulatorialmente sem encaminhar ao serviço de referência',
        'Omitir comunicação honesta e empática com a família sobre a gravidade do quadro'
      ]
    },
    instD: {
      title: 'Leucemia Linfoblástica Aguda Pediátrica — Material de Estudo',
      sections: [
        {
          h: 'Definição e Epidemiologia',
          items: [
            { item: 'LLA: proliferação clonal de linfoblastos (B ou T) na medula óssea — infiltram medula, sangue periférico e outros órgãos.', score: 1, ref: 'Harrison' },
            { item: 'Neoplasia mais comum na infância: 30% de todos os cânceres pediátricos. Pico de incidência: 2–5 anos. LLA-B: 85%; LLA-T: 15%.', score: 1, ref: 'Harrison' },
            { item: 'Prognóstico: 80–90% de remissão completa e cura com tratamento adequado (melhor prognóstico entre as leucemias).', score: 1, ref: 'Harrison' }
          ]
        },
        {
          h: 'Manifestações Clínicas — Sinais de Alarme',
          items: [
            { item: 'Pancitopenia: anemia (palidez, fadiga, taquicardia), trombocitopenia (equimoses espontâneas, petéquias, sangramento), neutropenia (febre, infecções).', score: 2, ref: 'Harrison' },
            { item: 'Dor óssea (periostite): dor em metáfises (fêmur, tíbia) — frequentemente noturna — simula artrite ou reumatismo. Sinal importante em criança.', score: 2, ref: 'Harrison' },
            { item: 'Linfadenomegalia: cervical, axilar, inguinal — indolor, firme.', score: 1, ref: 'Harrison' },
            { item: 'Hepatoesplenomegalia: por infiltração leucêmica.', score: 1, ref: 'Harrison' },
            { item: 'Massa mediastinal (LLA-T): alargamento mediastinal no RX — risco de compressão de via aérea e síndrome da veia cava superior.', score: 1, ref: 'Harrison' },
            { item: 'Infiltração do SNC: cefaleia, vômitos, paralisia de nervos cranianos — mais comum na recidiva; punção lombar diagnóstica e profilática.', score: 1, ref: 'Harrison' }
          ]
        },
        {
          h: 'Diagnóstico',
          items: [
            { item: 'Esfregaço periférico: blastos linfoblásticos (núcleo grande, cromatina frouxa, nucléolos) — presentes em > 80% dos casos.', score: 2, ref: 'Harrison' },
            { item: 'Medulograma: ≥ 25% de blastos na medula = diagnóstico de leucemia (vs. linfoma < 25%).', score: 2, ref: 'Harrison' },
            { item: 'Imunofenotipagem (citometria de fluxo): distingue LLA-B de LLA-T e orienta protocolo de tratamento.', score: 1, ref: 'Harrison' },
            { item: 'LDH muito elevada e ácido úrico aumentado: indicadores de alta carga tumoral; risco de síndrome de lise tumoral.', score: 1, ref: 'Harrison' },
            { item: 'Citogenética / FISH / PCR molecular: translocações como t(9;22) Philadelphia (pior prognóstico), t(12;21) TEL-AML1 (melhor prognóstico) — guiam intensidade do tratamento.', score: 1, ref: 'Harrison' }
          ]
        },
        {
          h: 'Síndrome de Lise Tumoral — Prevenção',
          items: [
            { item: 'Risco ao início da quimioterapia (ou espontâneo na LLA de alta carga): liberação de K+, fosfato, ácido úrico e diminuição de Ca2+.', score: 1, ref: 'Harrison' },
            { item: 'Prevenção: hidratação IV vigorosa (3 L/m²/dia) + alopurinol ou rasburicase (reduz ácido úrico) + monitorização eletrolítica rigorosa.', score: 2, ref: 'Harrison' }
          ]
        },
        {
          h: 'Tratamento e Prognóstico',
          items: [
            { item: 'Quimioterapia em 3 fases: indução (4 semanas — remissão completa), consolidação (6 meses) e manutenção (2–3 anos).', score: 1, ref: 'Harrison' },
            { item: 'Drogas principais: vincristina, corticoides (prednisona/dexametasona), asparaginase, metotrexato, antraciclinas.', score: 1, ref: 'Harrison' },
            { item: 'Profilaxia de SNC: metotrexato intratecal (punção lombar profilática) — substituiu a radioterapia craniana.', score: 1, ref: 'Harrison' },
            { item: 'Transplante de medula óssea: reservado para recidiva ou casos de altíssimo risco.', score: 1, ref: 'Harrison' }
          ]
        }
      ]
    }
  },


  // ─────────────────────────────────────────────────────────────────────────
  // CASO 5 — LEUCEMIA MIELOIDE AGUDA (LMA) NO ADULTO
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 5,
    title: 'Adulto de 55 anos com fadiga súbita, equimoses e sangramento gengival',
    sub: 'Pronto-Socorro — Emergência',
    tema: 'Hematologia',
    topic: 'Leucemia Mieloide Aguda — LMA',
    level: 'difícil',
    cardAccent: '#E53935',
    instA: {
      scenario: 'Pronto-Socorro adulto. Sala de atendimento. Paciente chega acompanhado da esposa, referindo sintomas com evolução rápida em 3 semanas.',
      patient: 'R.B.C., 55 anos, masculino, engenheiro civil, ex-tabagista (20 anos-maço, parou há 5 anos), sem comorbidades conhecidas.',
      complaint: 'Fadiga intensa de início relativamente rápido (3 semanas), sangramento gengival espontâneo, múltiplas equimoses e febre baixa.',
      tasks: [
        'Realize a anamnese dirigida, investigando os sintomas e possíveis causas.',
        'Realize o exame físico completo e dirigido.',
        'Formule a hipótese diagnóstica principal e os principais diferenciais.',
        'Solicite os exames complementares adequados e urgentes.',
        'Decida a conduta e o encaminhamento correto.'
      ]
    },
    instB: {
      vitals: {
        PA: '122/76 mmHg',
        FC: '104 bpm',
        FR: '20 irpm',
        Tax: '38,4 °C',
        Peso: '78 kg',
        Altura: '1,78 m',
        SpO2: '97% (ar ambiente)'
      },
      physicalGeneral: 'Regular estado geral, consciente, orientado, hipocorado (2+/4+), febril (38,4°C), acianótico, sem edema. Sangramento gengival discreto ativo ao exame da cavidade oral.',
      physicalSeg: 'CAVIDADE ORAL: hipertrofia gengival bilateral (gengivas espessadas e avermelhadas) com sangramento espontâneo discreto; petéquias no palato mole; sem lesões ulcerosas. | PELE: 6–8 equimoses em diferentes estágios distribuídas por braços, antebraços e coxas; 2 equimoses extensas no flanco direito; sem exantema. | CABEÇA E PESCOÇO: adenomegalias cervicais anteriores bilaterais (~1–1,5 cm), indolores, firmes; sem adenopatia supraclavicular. | CARDIOVASCULAR: taquicardia (FC 104 bpm); sopro sistólico funcional 2+/6+; bulhas normofonéticas. | PULMONAR: murmúrio vesicular presente, sem adventícios. | ABDOME: fígado 3 cm abaixo do RCD (hepatomegalia leve); baço palpável (esplenomegalia leve 2 cm abaixo do RCE); sem dor. | NEUROLÓGICO: sem déficits focais; sem cefaleia; sem rigidez de nuca.',
      labs: [
        { test: 'Hemoglobina', val: '8,4 g/dL', ref: '13–17 g/dL', alt: true },
        { test: 'VCM', val: '92 fL', ref: '80–100 fL', alt: false },
        { test: 'Leucócitos', val: '68.000/mm³', ref: '4.000–11.000/mm³', alt: true },
        { test: 'Blastos mieloides no sangue periférico', val: '72%', ref: 'Ausentes', alt: true },
        { test: 'Bastonetes de Auer', val: 'Presentes no esfregaço', ref: 'Ausentes', alt: true },
        { test: 'Neutrófilos maduros', val: '600/mm³ (neutropenia grave)', ref: '> 1.500/mm³', alt: true },
        { test: 'Plaquetas', val: '18.000/mm³', ref: '150.000–400.000/mm³', alt: true },
        { test: 'LDH', val: '2.240 UI/L', ref: '140–280 UI/L', alt: true },
        { test: 'TP/INR', val: '1,8 (INR) — TAP 42%', ref: 'INR 1,0–1,2', alt: true },
        { test: 'TTPA', val: '52 segundos (controle: 30s)', ref: 'Até 38 segundos', alt: true },
        { test: 'Fibrinogênio', val: '0,9 g/L', ref: '2,0–4,0 g/L', alt: true },
        { test: 'D-dímero', val: '12.800 ng/mL', ref: '< 500 ng/mL', alt: true },
        { test: 'Creatinina', val: '1,1 mg/dL', ref: '0,7–1,2 mg/dL', alt: false },
        { test: 'Ácido úrico', val: '10,2 mg/dL', ref: '3,5–7,2 mg/dL', alt: true }
      ],
      image: 'Esfregaço de sangue periférico (a entregar se solicitado): blastos mieloides com citoplasma abundante, nucléolos proeminentes e BASTONETES DE AUER (inclusões eosinofílicas em bastão no citoplasma) — achado patognomônico de LMA.',
      note: 'Entregar sinais vitais ao início. Hemograma + LDH + coagulograma (TP, TTPA, fibrinogênio, D-dímero) + ácido úrico: entregar em conjunto. Esfregaço: entregar se candidato solicitar — bastonetes de Auer são achado chave. ATENÇÃO: coagulograma alterado com fibrinogênio baixo e D-dímero muito elevado sugerem CIVD — candidato deve reconhecer. Caso trate como simples infecção e não solicite hemograma completo, informar que os antibióticos "não fizeram efeito" e a febre continua.',
      patientProfile: 'R.B.C., 55 anos, engenheiro civil, casado, 2 filhos adultos. Ex-tabagista (20 maços-ano). Nega etilismo. Não usa medicamentos de uso contínuo. Nunca exposto a benzeno ou radiação (mas candidato pode investigar). Sem historia familiar de neoplasias hematológicas. Era ativo — jogava tênis 2x/semana — mas parou há 3 semanas pelo cansaço.',
      script: [
        { trigger: 'Queixa principal', speech: 'Doutor, tô muito cansado, sem energia. Minha gengiva tá sangrando sozinha faz uns 10 dias e apareceram essas manchas roxas pelo corpo todo sem eu bater em nada. Tô com febre também.' },
        { trigger: 'Sobre a evolução', speech: 'Tudo começou faz umas 3 semanas. Achei que era gripe, mas foi piorando. O cansaço foi aumentando rápido, tive que parar o tênis.' },
        { trigger: 'Sobre o sangramento gengival', speech: 'Sangra todo dia ao escovar o dente. Às vezes sangra sem nem escovar. Nunca tive isso antes.' },
        { trigger: 'Sobre febre', speech: 'Febre baixa, umas vezes 38 e pouco. Tomo dipirona e passa, mas volta.' },
        { trigger: 'Sobre exposição química ou ocupacional', speech: 'Trabalho na área de construção civil, mas fico mais no escritório. Nunca trabalhei em fábrica com produtos químicos. Por que está perguntando isso?' },
        { trigger: 'Sobre histórico médico e familiar', speech: 'Nunca tive nada sério. Meu pai morreu de infarto, minha mãe de diabetes. Ninguém na família com doença no sangue.' },
        { trigger: 'Sobre medicamentos', speech: 'Não tomo remédio nenhum de rotina. Só dipirona quando fico com febre.' },
        { trigger: 'Sobre perda de peso', speech: 'Perdi uns 4 quilos nessas 3 semanas, acho. Sem fazer dieta.' },
        { trigger: 'Sobre as gengivas inchadas', speech: '(ao exame) Não tinha reparado que tavam tão inchadas. Fui ao dentista mês passado e ele não falou nada.' },
        { trigger: 'Pergunta ativa — diagnóstico', speech: 'O que eu tenho, doutor? A minha esposa tá muito preocupada. Pode ser algo no sangue?' }
      ],
      hiddenInfo: 'Perda de 4 kg em 3 semanas sem dieta — só revela se candidato perguntar sobre perda de peso | Parou de praticar esportes há 3 semanas pela fadiga — só revela se perguntar sobre atividade física habitual | Não foi ao médico antes porque achava que era gripe — só revela se candidato perguntar sobre consultas anteriores | A esposa note que ele está "diferente, lento" há 2 semanas — só revela se perguntar sobre alterações comportamentais ou cognitivas',
      actorBehavior: 'Paciente cooperativo, aparentemente tentando manter a calma. Esposa ao lado, mais visivelmente preocupada. Ao ouvir palavras como "leucemia" ou "câncer no sangue", ambos ficam tensos — candidato deve manejar com empatia. Paciente pode minimizar: "deve ser uma infecção forte, né doutor?"'
    },
    instC: {
      diagnosis: 'Leucemia Mieloide Aguda (LMA) com coagulação intravascular disseminada (CIVD) — provável LMA M3 (leucemia promielocítica aguda) dado o padrão de CIVD grave com fibrinogênio baixo e D-dímero altíssimo, além de hipertrofia gengival. Urgência oncológica.',
      differentials: [
        'Leucemia Linfocítica Crônica (LLC) — curso indolente, linfocitose madura sem blastos; não causa CIVD nem hipertrofia gengival; em idosos mais velhos',
        'Linfoma com fase leucêmica — pode mimetizar leucemia aguda; imunofenotipagem diferencia',
        'Leucemia Mieloide Crônica (LMC) em crise blástica — LMC tem fase crônica anterior com esplenomegalia massiva e leucocitose com série mieloide completa; Philadelphia positivo',
        'Sepse grave com CIVD — pode causar leucocitose e coagulopatia; mas blastos no esfregaço e hipertrofia gengival não são explicados por infecção',
        'Hepatopatia com pancitopenia — não causa blastos circulantes'
      ],
      context: 'LMA é a leucemia aguda mais comum em adultos (> 60% das leucemias agudas do adulto). Pico de incidência: 65–70 anos. Apresentação com pancitopenia + blastos mieloides + coagulopatia sugere LMA M3 (LPA — leucemia promielocítica aguda), subtipo especial com translocação t(15;17) e muito alto risco de CIVD. A LPA tem achados clínicos característicos: CIVD grave (D-dímero > 10.000, fibrinogênio < 1 g/L, TP alargado) e hipertrofia gengival. Bastonetes de Auer no esfregaço são patognomônicos de LMA. Urgência onco-hematológica — mortalidade precoce alta sem tratamento imediato.',
      justify: 'Blastos mieloides 72% + bastonetes de Auer no esfregaço = LMA até prova em contrário. CIVD documentada (TP alargado, fibrinogênio baixo 0,9 g/L, D-dímero 12.800) com sangramento ativo (gengival) — padrão clássico de LMA M3 (LPA). Hipertrofia gengival: infiltração leucêmica das gengivas, clássica da LMA com monócitos (M4/M5), também observada na LPA. LDH altíssima (2.240) = alta carga tumoral. Neutropenia grave (600/mm³) = risco iminente de sepse. Ácido úrico elevado = risco de síndrome de lise tumoral.',
      expectedAnamnesis: 'Caracterizar sintomas: fadiga (início, evolução rápida), sangramento (onde, frequência), febre (padrão, temperatura) | Investigar sangramento: nasal, urinário, intestinal, em pele, gengival | Investigar equimoses espontâneas vs. traumáticas | Pesquisar exposição a toxinas: benzeno, pesticidas, radiação ionizante, quimioterapia prévia (leucemia secundária) | Uso de medicamentos: metilfenidato, cloranfenicol, AINEs em excesso | Histórico de doença hematológica prévia (mielodisplasia, policitemia vera) | Perguntar sobre perda de peso, sudorese noturna, adenomegalias | Investigar sintomas de SNC: cefaleia intensa, alterações visuais',
      expectedPhysical: 'Avaliar palidez (anemia grave) | Examinar cavidade oral: hipertrofia gengival (infiltração leucêmica), sangramento, petéquias no palato | Contar e localizar equimoses: distribuição, tamanho, tempo de evolução | Palpar cadeias ganglionares | Examinar pele: hematomas, petéquias, possíveis cloromas (sarcomas mieloides — nódulos subcutâneos) | Auscultar coração: sopro funcional | Palpar abdome: hepatoesplenomegalia | Exame neurológico: cefaleia ou sinais de sangramento intracraniano (CIVD pode causar AVC hemorrágico)',
      expectedExams: [
        { exam: 'Hemograma + esfregaço de sangue periférico', justify: 'Blastos e bastonetes de Auer confirmam LMA; define grau de pancitopenia', expected: 'Blastos 72% com bastonetes de Auer; plaquetas 18.000; neutropenia grave' },
        { exam: 'Coagulograma completo: TP, TTPA, fibrinogênio, D-dímero', justify: 'CIVD é complicação devastadora da LMA (especialmente LPA) e emergência hemostática — causa principal de morte precoce na LPA', expected: 'INR 1,8; fibrinogênio 0,9 g/L; D-dímero 12.800 — CIVD grave' },
        { exam: 'LDH e ácido úrico', justify: 'Alta carga tumoral e risco de síndrome de lise tumoral', expected: 'LDH 2.240 UI/L; ácido úrico 10,2 mg/dL' },
        { exam: 'Função renal, eletrólitos', justify: 'Avaliar síndrome de lise tumoral espontânea e base para tratamento', expected: 'Creatinina normal — monitorar' },
        { exam: 'Mielograma + imunofenotipagem + citogenética', justify: 'Confirma LMA, define subtipo (FAB), identifica t(15;17) da LPA — guia tratamento (ATRA + arsênio se LPA)', expected: 'A ser realizado urgentemente no serviço de referência' },
        { exam: 'Hemocultura', justify: 'Neutropênico grave febril — risco de sepse por gram-negativos', expected: 'Coletar antes de antibiótico' },
        { exam: 'TC de crânio (se disponível urgente)', justify: 'CIVD grave pode causar hemorragia intracraniana — especialmente em LPA', expected: 'Solicitar se cefaleia intensa ou alteração neurológica' }
      ],
      expectedConduct: 'EMERGÊNCIA — transferir imediatamente para UTI/hematologia: LMA com CIVD e neutropenia febril = emergência oncológica de alto risco de morte precoce | Manejo da CIVD: plasma fresco congelado (FFP) 10–15 mL/kg se sangramento ativo; crioprecipitado se fibrinogênio < 1 g/L (repor para ≥ 1,5 g/L); plaquetas se < 20.000 ou sangramento ativo | Neutropênico febril: antibioticoterapia empírica imediata — cefepima 2g IV 8/8h (ou piperacilina-tazobactam) + vancomicina se cateter ou mucosites | NUNCA usar AINEs ou anticoagulantes sem critério especializado | ATRA (ácido trans-retinóico todo) deve ser iniciado IMEDIATAMENTE se suspeita de LPA (antes da confirmação citogenética) — reduz mortalidade por CIVD dramaticamente | Hidratação vigorosa + alopurinol ou rasburicase (síndrome de lise tumoral) | Comunicar família com empatia: diagnóstico grave, mas LPA tem boa resposta ao ATRA',
      expectedCommunication: 'Apresentar-se pelo nome | Criar ambiente de privacidade — incluir a esposa na conversa | Comunicar a gravidade do quadro com empatia: "Os exames mostram alterações graves no sangue que precisam de avaliação especializada com urgência. Vou encaminhá-los para um centro de hematologia imediatamente." | Se perguntado diretamente, ser honesto sobre a possibilidade de leucemia sem dar diagnóstico definitivo | Tranquilizar sobre as providências imediatas | Explicar que o tratamento será iniciado o mais rapidamente possível | Dar espaço para perguntas e choro',
      criticalErrors: [
        'Não reconhecer os bastonetes de Auer e não suspeitar de LMA — tratar como infecção simples',
        'Não solicitar coagulograma e perder o diagnóstico de CIVD grave (causa de morte precoce na LPA)',
        'Prescrever AINEs ou anticoagulação em paciente com CIVD e sangramento ativo — pode causar hemorragia fatal',
        'Não iniciar ATRA se suspeita de LPA (LMA M3) — aguardar confirmação citogenética antes de tratar é erro grave neste subtipo',
        'Não tratar neutropenia febril com antibioticoterapia empírica imediata',
        'Tentar manejar ambulatorialmente sem transferência urgente para UTI/hematologia'
      ]
    },
    instD: {
      title: 'Leucemia Mieloide Aguda — Material de Estudo',
      sections: [
        {
          h: 'Definição e Classificação',
          items: [
            { item: 'LMA: proliferação clonal de blastos mieloides (mieloblastos, monoblastos, eritroblastos ou megacarioblastos) com ≥ 20% de blastos na medula óssea (OMS) ou sangue periférico.', score: 1, ref: 'Harrison' },
            { item: 'Classificação FAB: M0–M7. LMA M3 (Leucemia Promielocítica Aguda — LPA): subtipo especial com t(15;17), CIVD grave, bastonetes de Auer abundantes em feixes (células de "faggot") — único subtipo com tratamento diferenciado (ATRA).', score: 2, ref: 'Harrison' },
            { item: 'Fatores de risco: radiação ionizante, exposição a benzeno, quimioterapia/radioterapia prévia (leucemia secundária), síndrome mielodisplásica, síndrome de Down.', score: 1, ref: 'Harrison' }
          ]
        },
        {
          h: 'Achados Diagnósticos Chave',
          items: [
            { item: 'Bastonetes de Auer: inclusões eosinofílicas no citoplasma dos blastos — PATOGNOMÔNICOS de LMA (jamais vistos na LLA).', score: 2, ref: 'Harrison' },
            { item: 'Hipertrofia gengival: infiltração leucêmica das gengivas — clássica da LMA M4/M5 (monocítica) e LPA.', score: 2, ref: 'Harrison' },
            { item: 'CIVD: consumo de fatores de coagulação pelos grânulos leucêmicos — fibrinogênio baixo, D-dímero muito elevado, TP e TTPA alargados. Principal causa de morte precoce na LPA.', score: 2, ref: 'Harrison' },
            { item: 'Pancitopenia + leucocitose (paradoxal): leucocitose por blastos imaturos + neutropenia por infiltração da medula (células maduras funcionais estão ausentes).', score: 1, ref: 'Harrison' }
          ]
        },
        {
          h: 'Tratamento',
          items: [
            { item: 'LMA geral: indução com citarabina (Ara-C) + antraciclina (daunorubicina ou idarubicina) — regime "7+3". Meta: < 5% de blastos na medula.', score: 1, ref: 'Harrison' },
            { item: 'LPA (M3): ATRA (ácido trans-retinóico) + trióxido de arsênio — revolução no tratamento; ATRA deve ser iniciado imediatamente na suspeita clínica de LPA, antes de confirmar t(15;17).', score: 2, ref: 'Harrison' },
            { item: 'Transplante de medula óssea: consolidação em pacientes de alto risco ou recidiva.', score: 1, ref: 'Harrison' },
            { item: 'Síndrome de lise tumoral: hidratação vigorosa + alopurinol (ou rasburicase se ácido úrico muito elevado) ANTES e DURANTE o início da quimioterapia.', score: 1, ref: 'Harrison' },
            { item: 'Neutropenia febril: antibiótico empírico de amplo espectro IMEDIATAMENTE (cefepima, piperacilina-tazobactam, meropenem se grave ou com Pseudomonas).', score: 2, ref: 'Harrison' }
          ]
        },
        {
          h: 'Prognóstico',
          items: [
            { item: 'LPA: melhor prognóstico entre as LMAs com ATRA — cura em > 80–90% dos casos quando tratada adequadamente.', score: 1, ref: 'Harrison' },
            { item: 'LMA geral: remissão completa em 60–80% com quimioterapia, mas recidiva frequente; sobrevida global em 5 anos: 25–40%.', score: 1, ref: 'Harrison' },
            { item: 'Fatores prognósticos: citogenética (favorável: t(8;21), t(15;17), inv(16); desfavorável: monossomia 5/7, cariótipo complexo), idade, leucometria ao diagnóstico.', score: 1, ref: 'Harrison' }
          ]
        }
      ]
    }
  },


  // ─────────────────────────────────────────────────────────────────────────
  // CASO 6 — LINFOMA DE HODGKIN
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 6,
    title: 'Jovem com caroços no pescoço indolores e suor noturno há 2 meses',
    sub: 'UBS — Atenção Primária',
    tema: 'Hematologia',
    topic: 'Linfoma de Hodgkin',
    level: 'moderado',
    cardAccent: '#E53935',
    instA: {
      scenario: 'Atenção Primária — UBS. Consultório de clínica geral. Jovem que chegou por conta própria, levemente preocupado.',
      patient: 'P.A.M., 24 anos, masculino, estudante de direito, saudável, sem comorbidades, sem medicamentos.',
      complaint: 'Aumento indolor de gânglios no pescoço há 2 meses, acompanhado de suor noturno intenso, perda de peso involuntária e febre vespertina intermitente.',
      tasks: [
        'Realize a anamnese dirigida, investigando as adenomegalias e os sintomas sistêmicos.',
        'Realize o exame físico completo e dirigido.',
        'Formule a hipótese diagnóstica principal e os principais diferenciais.',
        'Solicite os exames complementares adequados.',
        'Oriente o paciente sobre os próximos passos.'
      ]
    },
    instB: {
      vitals: {
        PA: '118/72 mmHg',
        FC: '80 bpm',
        FR: '16 irpm',
        Tax: '37,6 °C',
        Peso: '68 kg',
        Altura: '1,76 m',
        IMC: '21,9 kg/m²'
      },
      physicalGeneral: 'Bom estado geral, consciente, orientado, normocorado, anictérico, acianótico, sem edema. Levemente ansioso.',
      physicalSeg: 'CABEÇA E PESCOÇO: adenomegalias cervicais anteriores e posteriores bilaterais, a maior medindo 3,5 × 2,5 cm no triângulo cervical posterior direito; gânglios firmes, elásticos ("borrachosos"), indolores, sem sinais flogísticos, sem aderência à pele. Ausência de amígdalas hipertróficas. Faringe normal. | AXILA E TÓRAX: linfonodo axilar direito palpável de ~1,5 cm, indolor. Sem sinais de síndrome de veia cava superior (sem edema facial, sem turgência jugular). | PULMÕES: murmúrio vesicular presente, sem adventícios. | ABDOME: fígado e baço sem alterações palpáveis. Sem adenomegalias inguinais. | PELE: sem exantema, sem petéquias. Sem prurido visível. | NEUROLÓGICO: sem déficits.',
      labs: [
        { test: 'Hemoglobina', val: '11,8 g/dL', ref: '13–17 g/dL', alt: true },
        { test: 'VCM', val: '83 fL', ref: '80–100 fL', alt: false },
        { test: 'Leucócitos', val: '10.400/mm³', ref: '4.000–11.000/mm³', alt: false },
        { test: 'Eosinófilos', val: '800/mm³ (8%)', ref: '< 500/mm³', alt: true },
        { test: 'Linfócitos', val: '900/mm³ (linfopenia)', ref: '1.000–4.800/mm³', alt: true },
        { test: 'Plaquetas', val: '380.000/mm³', ref: '150.000–400.000/mm³', alt: false },
        { test: 'VHS (velocidade de hemossedimentação)', val: '88 mm/h', ref: '< 15 mm/h (H)', alt: true },
        { test: 'PCR', val: '28 mg/L', ref: '< 5 mg/L', alt: true },
        { test: 'LDH', val: '320 UI/L', ref: '140–280 UI/L', alt: true },
        { test: 'Beta-2-microglobulina', val: '3,8 mg/L', ref: '< 2,4 mg/L', alt: true },
        { test: 'Proteína total', val: '7,2 g/dL', ref: '6,0–8,0 g/dL', alt: false },
        { test: 'Albumina', val: '3,2 g/dL', ref: '3,5–5,0 g/dL', alt: true },
        { test: 'Sorologias (HIV, EBV, CMV, Toxoplasmose)', val: 'HIV negativo; EBV — IgG positivo (infecção passada), IgM negativo (sem infecção aguda); CMV negativo; Toxoplasmose IgG positivo, IgM negativo', ref: 'Negativos para infecção ativa', alt: false }
      ],
      image: 'TC de tórax, abdome e pelve (a entregar se candidato solicitar): massa mediastinal anterior de 8 × 6 cm, com múltiplas adenomegalias mediastinais. Sem derrame pleural. Sem lesões parenquimatosas pulmonares. Sem adenomegalias abdominais ou pélvicas visíveis. Baço de tamanho normal.',
      note: 'Entregar sinais vitais ao início. Hemograma + VHS + PCR + LDH + beta-2-microglobulina + sorologias: entregar em conjunto se solicitado. TC de tórax/abdome/pelve: entregar se candidato solicitar. Informar que a biópsia excisional do linfonodo é o próximo passo obrigatório — não disponível na UBS, encaminhar para serviço de hematologia/oncologia.',
      patientProfile: 'P.A.M., 24 anos, estudante de direito, solteiro, mora com os pais. Não fuma, bebe socialmente (uma vez por semana). Praticava futebol 3 vezes por semana até 6 semanas atrás, parou porque ficava muito cansado. Refere prurido generalizado sem lesão cutânea visível ("coça o corpo todo, principalmente após banho quente"). Perdeu 6 kg em 2 meses sem dieta. Suor noturno que encharça o pijama ("tenho que trocar a roupa de noite"). Febre vespertina de 37,8–38,5°C, sem calafrios.',
      script: [
        { trigger: 'Queixa principal', speech: 'Doutor, apareceram umas bolotas no meu pescoço há uns 2 meses. Achei que ia passar, mas só cresceram. Não doem. Aí vim porque a minha mãe ficou preocupada.' },
        { trigger: 'Sobre a febre e o suor noturno', speech: 'Tenho uma febrinha toda tarde, umas 38 graus. E de madrugada acordo encharcado de suor, preciso trocar o pijama e a cama. Nunca tive isso antes.' },
        { trigger: 'Sobre a perda de peso', speech: 'Perdi umas 6 quilos em 2 meses. Não fiz dieta, não me explico. Minha calça ficou larga.' },
        { trigger: 'Sobre o prurido', speech: 'Tenho uma coceira generalizada, no corpo todo, mas não tem nada na pele. Fica pior depois do banho quente. Já usei creme, mas não passou.' },
        { trigger: 'Sobre o cansaço', speech: 'Paro de jogar futebol porque fico exausto. Antes jogava tranquilo, agora em 20 minutos já não agüento mais. Tô produzindo menos na faculdade também.' },
        { trigger: 'Sobre infecções recentes', speech: 'Não tive gripe, angina, nada assim recentemente. Não viajei para lugar nenhum diferente.' },
        { trigger: 'Sobre HIV e comportamento sexual', speech: '(discretamente) Tenho vida sexual ativa. Uso preservativo na maioria das vezes. Fiz teste de HIV no ano passado, deu negativo.' },
        { trigger: 'Sobre dor no pescoço ao beber álcool', speech: 'Você sabe... semana passada fui a uma festa e tomei cerveja. Estranhei, mas a região do pescoço doeu onde tem as bolotas quando eu bebi. É normal isso?' },
        { trigger: 'Pergunta ativa — diagnóstico', speech: 'Pode ser câncer, doutor? Fiquei muito preocupado quando a minha mãe falou que pode ser algo sério.' }
      ],
      hiddenInfo: 'Prurido generalizado pior após banho quente (prurido "aquagênico" — sinal clássico de Linfoma de Hodgkin, presente em 30% dos casos) — só revela em detalhe se candidato perguntar sobre sintomas de pele | Dor nos linfonodos ao ingestão de álcool (sinal de Hoster — patognomônico de Linfoma de Hodgkin, presente em minoria mas altamente específico) — só revela se candidato perguntar sobre álcool ou dor nos gânglios | Perda de 6 kg em 2 meses — só revela em detalhes se candidato perguntar sobre peso | Parou de praticar esportes por fadiga há 6 semanas — só revela se candidato perguntar sobre atividade física',
      actorBehavior: 'Jovem aparentemente tranquilo por fora, mas visivelmente ansioso ao falar sobre a possibilidade de câncer. Cooperativo. Pode fazer perguntas diretas sobre a gravidade ("é câncer?"). Fica muito surpreso quando o médico explica sobre o sinal do álcool.'
    },
    instC: {
      diagnosis: 'Linfoma de Hodgkin, provável estádio II-A ou II-B (adenomegalias cervicais bilaterais + massa mediastinal anterior + sintomas B: febre, sudorese noturna, perda de peso > 10% em 6 meses) em jovem de 24 anos. Necessária biópsia excisional do linfonodo para confirmação histológica.',
      differentials: [
        'Linfoma não-Hodgkin (LNH) — também causa adenomegalias e sintomas B; tende a ter maior acometimento extranodal e evolução mais agressiva; distinção só pela biópsia (células de Reed-Sternberg = Hodgkin)',
        'Mononucleose infecciosa (EBV aguda) — adenomegalias cervicais, febre, fadiga em jovens; EBV IgM negativo e ausência de esplenomegalia extensa afastam infecção aguda neste caso',
        'Tuberculose ganglionar — adenopatia cervical, febre, sudorese noturna e perda de peso ("sintomas B" são comuns na TB também); PPD + BAAR + biópsia de linfonodo diferencia',
        'Toxoplasmose — adenomegalias cervicais; sorologia IgM negativa afasta infecção aguda',
        'Sarcoidose — adenomegalias hiliares e mediastinais; acomete mais adultos 20–40 anos; sem células de Reed-Sternberg; ECA elevada; biópsia com granulomas sem caseificação'
      ],
      context: 'Linfoma de Hodgkin é a neoplasia hematológica mais comum em jovens adultos (15–35 anos), com segundo pico em > 55 anos. Apresentação clínica clássica: adenomegalia cervical ou supraclavicular indolor, "borrachosa", sem sinais inflamatórios + sintomas B (febre vespertina ≥ 38°C, sudorese noturna que encharça roupas, perda > 10% do peso em 6 meses). Massa mediastinal anterior é muito sugestiva. Prurido aquagênico (pior após banho quente) e dor nos linfonodos com álcool (sinal de Hoster) são achados altamente específicos. Células de Reed-Sternberg (bicelulares, "olhos de coruja") confirmam o diagnóstico na biópsia.',
      justify: 'Jovem de 24 anos com adenomegalias cervicais bilaterais firmes, elásticas, indolores, crescendo há 2 meses + massa mediastinal na TC + sintomas B completos (febre + sudorese noturna intensa + perda de 6 kg em 2 meses) + prurido aquagênico + dor nos gânglios com álcool (sinal de Hoster — altamente específico). Laboratorialmente: anemia leve (doença crônica), eosinofilia (liberada por células de Hodgkin), linfopenia, VHS muito elevado (88 mm/h), albumina baixa (fator prognóstico). Sorologias negativas para infecção aguda afastam causas infecciosas.',
      expectedAnamnesis: 'Caracterizar as adenomegalias: tempo, localização, crescimento, simetria, consistência, dor | Pesquisar sintomas B: febre (temperatura, horário, padrão), sudorese noturna (quantidade — roupas úmidas ou encharcadas?), perda de peso (quantos kg, em quanto tempo, sem dieta) | Pesquisar prurido: localização, piora com calor/banho quente | Perguntar sobre dor nos linfonodos ao beber álcool (sinal de Hoster) | Investigar sintomas respiratórios (compressão mediastinal): tosse, dispneia, edema facial (síndrome de VCS) | Investigar fadiga e intolerância ao esforço | Pesquisar infecções recentes e viagens | Investigar comportamentos de risco: HIV | Histórico familiar de linfoma ou outras neoplasias',
      expectedPhysical: 'Palpar sistematicamente TODAS as cadeias ganglionares (cervical, occipital, pré-auricular, submandibular, supraclavicular, axilar, inguinal) | Caracterizar linfonodos: tamanho, consistência, mobilidade, aderência, dor | Ausculta pulmonar e cardíaca (massa mediastinal pode causar compressão) | Avaliar sinais de síndrome de veia cava superior: edema facial, turgência jugular, cianose facial | Palpar abdome: esplenomegalia, hepatomegalia | Avaliar pele: prurido sem lesão primária | Temperatura axilar (febre vespertina)',
      expectedExams: [
        { exam: 'Hemograma + VHS + LDH + albumina + beta-2-microglobulina', justify: 'VHS muito elevado é forte marcador de atividade do Hodgkin e fator prognóstico; anemia + eosinofilia + linfopenia são padrão típico; LDH e albumina definem prognóstico pelo IPS (Escore Prognóstico Internacional)', expected: 'Hb 11,8; VHS 88; LDH 320; albumina 3,2 — perfil sugestivo' },
        { exam: 'Sorologias (HIV, EBV, CMV, Toxoplasmose)', justify: 'Excluir causas infecciosas de adenomegalia — diagnóstico diferencial fundamental', expected: 'HIV negativo; EBV IgM negativo (infecção passada); CMV negativo' },
        { exam: 'TC de tórax, abdome e pelve com contraste', justify: 'Estadiamento do linfoma: identificar massa mediastinal, adenomegalias abdominais, esplenomegalia, ósseas', expected: 'Massa mediastinal 8×6 cm + adenomegalias mediastinais; sem acometimento abdominal' },
        { exam: 'Biópsia excisional do linfonodo + imunohistoquímica', justify: 'EXAME CONFIRMATÓRIO OBRIGATÓRIO — células de Reed-Sternberg (CD30+, CD15+) confirmam LH; nunca tratar sem diagnóstico histológico', expected: 'A ser realizada no serviço de hematologia/oncologia de referência' },
        { exam: 'PET-CT (PET-FDG)', justify: 'Estadiamento mais preciso e avaliação de resposta ao tratamento — preferível à TC quando disponível', expected: 'A solicitar no serviço de referência' }
      ],
      expectedConduct: 'NÃO iniciar tratamento na UBS — encaminhar para oncologia/hematologia para biópsia excisional e estadiamento completo | Explicar ao paciente que o diagnóstico precisa ser confirmado por biópsia antes de qualquer tratamento | NÃO realizar biopsia aspirativa (PAAF) — não é suficiente para diagnóstico de linfoma; é necessária biópsia excisional (linfonodo inteiro) | Informar ao paciente que, SE confirmado Linfoma de Hodgkin, o tratamento tem alta taxa de cura (> 85%) — tranquilizar sem minimizar | Tratamento (no serviço de referência): ABVD (adriamicina, bleomicina, vimblastina, dacarbazina) ± radioterapia de campo envolvido conforme estádio | Seguimento após tratamento: PET-CT de avaliação de resposta',
      expectedCommunication: 'Apresentar-se pelo nome | Explicar de forma empática que os gânglios e os exames mostram um padrão que precisa de investigação especializada | Comunicar que é necessária uma biópsia para confirmar o diagnóstico antes de qualquer conclusão | Informar que o encaminhamento é urgente mas que existem tratamentos muito eficazes para esse tipo de condição | Responder honestamente se perguntado sobre câncer: "Precisamos confirmar, mas existe essa possibilidade. O importante é que, confirmado, o tratamento costuma funcionar muito bem." | Dar suporte emocional e perguntar se tem dúvidas',
      criticalErrors: [
        'Realizar PAAF (biópsia aspirativa) em vez de biópsia excisional — PAAF é insuficiente para diagnóstico de linfoma',
        'Tratar empiricamente com antibióticos por semanas sem encaminhar — retardar o diagnóstico pode mudar o estadiamento e o prognóstico',
        'Não pesquisar sintomas B (febre, sudorese, perda de peso) — fundamentais para estadiamento',
        'Não solicitar TC de tórax e perder a massa mediastinal',
        'Não mencionar HIV no diagnóstico diferencial (linfoma associado ao HIV)',
        'Dar diagnóstico definitivo de linfoma sem biópsia histológica'
      ]
    },
    instD: {
      title: 'Linfoma de Hodgkin — Material de Estudo',
      sections: [
        {
          h: 'Definição e Epidemiologia',
          items: [
            { item: 'Linfoma de Hodgkin (LH): neoplasia do sistema linfático originada de linfócitos B do centro germinativo; caracterizada pelas células de Reed-Sternberg (RS) binucleadas com "olhos de coruja".', score: 1, ref: 'Harrison' },
            { item: 'Distribuição bimodal: pico em 15–35 anos e > 55 anos. Mais comum em homens jovens. Associado ao EBV em 40–50% dos casos.', score: 1, ref: 'Harrison' },
            { item: 'Tipo histológico mais comum: Esclerose Nodular (70–80% dos casos em jovens) — padrão mais relacionado ao LH mediastinal.', score: 1, ref: 'Harrison' }
          ]
        },
        {
          h: 'Apresentação Clínica — Sinais e Sintomas',
          items: [
            { item: 'Adenomegalias: cervicais/supraclaviculares indolores, firmes, elásticas ("borrachosas"), sem sinais inflamatórios — sinal de apresentação em > 80% dos casos.', score: 2, ref: 'Harrison' },
            { item: 'Sintomas B (presença = mau prognóstico/estadiamento): febre inexplicada ≥ 38°C, sudorese noturna intensa (encharcar roupa), perda de peso ≥ 10% em 6 meses sem causa identificada.', score: 2, ref: 'Harrison' },
            { item: 'Prurido aquagênico: prurido generalizado, pior após banho quente — presente em ~30% dos casos; altamente sugestivo de LH.', score: 2, ref: 'Harrison' },
            { item: 'Sinal de Hoster: dor nos linfonodos acometidos ao ingestão de álcool — raro, mas altamente específico de LH.', score: 2, ref: 'Harrison' },
            { item: 'Massa mediastinal anterior: presente em 60–70% dos LH — pode causar tosse, dispneia, síndrome de veia cava superior.', score: 1, ref: 'Harrison' }
          ]
        },
        {
          h: 'Diagnóstico',
          items: [
            { item: 'Biópsia excisional do linfonodo: ÚNICO método diagnóstico adequado. PAAF (aspiração) é INSUFICIENTE — precisa de arquitetura tecidual.', score: 2, ref: 'Harrison' },
            { item: 'Células de Reed-Sternberg: células binucleadas grandes com nucléolos proeminentes ("olhos de coruja") — patognomônicas do LH. Imunofenotipagem: CD30+ e CD15+ (maioria), CD20−.', score: 2, ref: 'Harrison' },
            { item: 'Estadiamento (Lugano/Ann Arbor): I (1 região nodal), II (≥ 2 regiões no mesmo lado do diafragma), III (ambos os lados), IV (disseminado). Sufixo A (sem sintomas B) ou B (com sintomas B).', score: 1, ref: 'Harrison' },
            { item: 'PET-CT com FDG: padrão ouro para estadiamento e avaliação de resposta — superior à TC.', score: 1, ref: 'Harrison' }
          ]
        },
        {
          h: 'Tratamento e Prognóstico',
          items: [
            { item: 'Estádio precoce (I–II sem fatores desfavoráveis): ABVD 2–4 ciclos + radioterapia de campo envolvido (ISRT).', score: 1, ref: 'Harrison' },
            { item: 'Estádio avançado (III–IV ou II com sintomas B): ABVD 6 ciclos ou BEACOPPescalado.', score: 1, ref: 'Harrison' },
            { item: 'Prognóstico excelente: sobrevida global em 5 anos > 85–90% em estádios precoces, 65–75% em estádios avançados.', score: 2, ref: 'Harrison' },
            { item: 'Complicações tardias do tratamento: cardiotoxicidade (antraciclinas), toxicidade pulmonar (bleomicina), neoplasias secundárias (especialmente câncer de mama após radioterapia em jovens).', score: 1, ref: 'Harrison' }
          ]
        }
      ]
    }
  },


  // ─────────────────────────────────────────────────────────────────────────
  // CASO 7 — PTI — PÚRPURA TROMBOCITOPÊNICA IMUNE
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 7,
    title: 'Criança com manchas roxas e pintinhas vermelhas após virose 2 semanas atrás',
    sub: 'UBS Pediátrica — Atenção Primária',
    tema: 'Hematologia',
    topic: 'Púrpura Trombocitopênica Imune — PTI',
    level: 'moderado',
    cardAccent: '#E53935',
    instA: {
      scenario: 'UBS Pediátrica. Mãe traz criança de 7 anos para consulta. A mãe está visivelmente preocupada.',
      patient: 'G.O.L., 7 anos, masculino, estudante do 2º ano, sem comorbidades conhecidas.',
      complaint: 'Aparecimento súbito de manchas roxas (equimoses) espontâneas e pontinhos vermelhos na pele (petéquias) há 4 dias, sem trauma. Havia tido infecção viral respiratória há 2 semanas.',
      tasks: [
        'Realize a anamnese dirigida com a mãe e com a criança.',
        'Realize o exame físico pediátrico completo.',
        'Formule a hipótese diagnóstica principal e os principais diferenciais.',
        'Solicite os exames complementares adequados.',
        'Decida a conduta e oriente a família.'
      ]
    },
    instB: {
      vitals: {
        PA: '94/60 mmHg',
        FC: '96 bpm',
        FR: '22 irpm',
        Tax: '36,8 °C',
        Peso: '24 kg',
        Altura: '1,22 m'
      },
      physicalGeneral: 'Bom estado geral, consciente, orientado, ativo e brincalhão. Normocorado, anictérico, sem febre. Sem sangramento ativo visível.',
      physicalSeg: 'PELE: petéquias punctiformes abundantes (> 50) distribuídas em membros inferiores, tronco e face; 4 equimoses espontâneas em MMII (sem relação com trauma evidente) de 2–5 cm; sem hematomas profundos; sem exantema; sem lesões vesiculosas. | MUCOSAS: petéquias no palato mole e mucosa jugal bilateral; gengivas sem sangramento ativo. | CABEÇA E PESCOÇO: sem adenomegalias. | CARDIOVASCULAR: ritmo regular; sem sopros; bulhas normofonéticas. | PULMONAR: murmúrio vesicular presente, sem adventícios. | ABDOME: plano, indolor, sem hepatoesplenomegalia, RHA presentes. | NEUROLÓGICO: consciente, orientado, sem rigidez de nuca, sem déficits focais; pupilas isocóricas.',
      labs: [
        { test: 'Hemoglobina', val: '12,4 g/dL', ref: '11,5–15,5 g/dL', alt: false },
        { test: 'VCM', val: '82 fL', ref: '75–87 fL', alt: false },
        { test: 'Leucócitos', val: '7.200/mm³', ref: '4.500–13.500/mm³', alt: false },
        { test: 'Diferencial', val: 'Normal (sem blastos, sem linfócitos atípicos)', ref: 'Normal', alt: false },
        { test: 'Plaquetas', val: '8.000/mm³', ref: '150.000–400.000/mm³', alt: true },
        { test: 'Esfregaço de sangue periférico', val: 'Plaquetas markadamente reduzidas; plaquetas gigantes (macroplaquetas) visíveis; hemácias e leucócitos morfologicamente normais; SEM blastos', ref: 'Normal', alt: true },
        { test: 'TP e TTPA', val: 'Normais', ref: 'Normais', alt: false },
        { test: 'Fibrinogênio', val: 'Normal', ref: 'Normal', alt: false },
        { test: 'PCR', val: '4 mg/L', ref: '< 5 mg/L', alt: false },
        { test: 'Sorologias virais', val: 'IgM para EBV, CMV, rubéola, parvovírus B19: negativos para infecção aguda; IgG positivo para EBV (infecção passada)', ref: '—', alt: false }
      ],
      image: 'Esfregaço detalhado (a entregar se solicitado): trombocitopenia grave com macroplaquetas; sem fragmentação de hemácias (afasta microangiopatia); série branca normal, sem blastos — morfologia compatível com PTI.',
      note: 'Entregar sinais vitais ao início. Hemograma + esfregaço: entregar em conjunto se solicitado (enfatizar que o esfregaço NÃO tem blastos — chave para diferenciar de LLA). Coagulograma: normal — entregar se solicitado. Sorologias: entregar se solicitado. Informar que a criança está sem sangramento ativo e hemodinamicamente estável — a conduta depende do grau de sangramento, não só da contagem de plaquetas.',
      patientProfile: 'G.O.L., 7 anos, menino ativo. Há 2 semanas teve quadro de febre + coriza + tosse por 4–5 dias, tratado em casa com antitérmico — pediatra diagnosticou infecção viral, sem antibiótico. Recuperou completamente. Quatro dias atrás, a mãe percebeu pontinhos vermelhos na pele e depois manchas roxas. A criança não se queixou de dor, não caiu nem se bateu. Sem sangramento nasal, gengival, urinário ou digestivo. Sem cefaleia. A família pergunta se é dengue. Sem viagem recente, sem contato com dengue. Sem histórico de doenças hematológicas na família.',
      script: [
        { trigger: 'Queixa principal (mãe)', speech: 'Doutora, apareceram essas pintinhas vermelhas e roxinhas no meu filho do nada. Ele não caiu, não se bateu em nada. Fiquei apavorada. Pode ser dengue?' },
        { trigger: 'Sobre a infecção viral anterior', speech: '(mãe) Duas semanas atrás ele teve febre, coriza, tosse. O pediatra disse que era viral, passou sozinho em 5 dias. Fiquei aliviada. Aí agora apareceu isso.' },
        { trigger: 'Sobre sangramento ativo', speech: '(mãe) Não sangrou do nariz, nem da gengiva, nem fez xixi ou cocô com sangue. Só as manchas na pele mesmo.' },
        { trigger: 'Sobre cefaleia ou alterações neurológicas', speech: '(criança) Não tô com dor de cabeça não. Tô bem, só ficou feio o braço.' },
        { trigger: 'Sobre dengue ou viagem', speech: '(mãe) A gente não viajou, ficou aqui na cidade. Não sei se tem dengue no bairro, pode ser?' },
        { trigger: 'Sobre histórico familiar', speech: '(mãe) Ninguém na família tem problema no sangue, não. Meu marido e eu somos saudáveis.' },
        { trigger: 'Sobre medicamentos', speech: '(mãe) Só tomou dipirona durante a virose. Mais nada. Nunca tomou remédio de uso contínuo.' },
        { trigger: 'Sobre escola e contato com outras crianças', speech: '(mãe) Na semana da virose, algumas crianças na escola também ficaram doentes. Foi viral mesmo.' },
        { trigger: 'Pergunta ativa — diagnóstico', speech: '(mãe) O que ele tem, doutora? É grave? Precisa internar? Tenho muito medo.' }
      ],
      hiddenInfo: 'Infecção viral há exatamente 2 semanas — só revela a temporalidade precisa se candidato perguntar sobre quando foi o quadro viral | Sem nenhum sangramento além de lesões cutâneas — só confirma em detalhes se candidato perguntar ativamente sobre epistaxe, hematúria, melena, sangramento gengival | Criança sem cefaleia ou sintomas neurológicos — só confirma se candidato perguntar especificamente (cefaleia em trombocitopênico grave = alarme para hemorragia intracraniana) | Usou dipirona — só revela se candidato perguntar sobre medicamentos (AINEs/dipirona podem agravar plaquetopenia)',
      actorBehavior: 'Mãe muito ansiosa, com choro fácil. Criança bem-humorada e ativa, não parece doente. Mãe pergunta várias vezes se é dengue e se precisa internar. Fica mais calma quando o médico explica o diagnóstico de forma clara e tranquilizadora.'
    },
    instC: {
      diagnosis: 'Púrpura Trombocitopênica Imune (PTI) aguda pediátrica — trombocitopenia isolada grave (plaquetas 8.000/mm³) por destruição imunomediada de plaquetas, pós-infecção viral respiratória há 2 semanas. Série branca e vermelha normais, sem blastos — afasta LLA.',
      differentials: [
        'Leucemia Linfoblástica Aguda (LLA) — PRINCIPAL DIFERENCIAL: também causa trombocitopenia grave em criança; MAS na LLA há pancitopenia (anemia + neutropenia) + blastos no esfregaço + hepatoesplenomegalia + dor óssea; esfregaço sem blastos e hemograma bicelular normal afastam LLA aqui',
        'Dengue com trombocitopenia — trombocitopenia por dengue é comum; mas requer febre atual, contexto epidemiológico, sorologia positiva (NS1/IgM); criança afebril, sem epidemiologia, sorologias negativas afastam',
        'Síndrome Hemolítico-Urêmica (SHU) — trombocitopenia + anemia hemolítica microangiopática + insuficiência renal; hemácias normais no esfregaço (sem esquizócitos), função renal normal afastam',
        'Púrpura de Henoch-Schönlein (vasculite IgA) — púrpura palpável (não petéquias planas) em MMII + artralgia + dor abdominal + hematúria; plaquetas NORMAIS — diferença fundamental',
        'Aplasia medular — pancitopenia com medula hipocelular; não há trombocitopenia isolada; série branca e vermelha afetadas'
      ],
      context: 'PTI é a causa mais comum de trombocitopenia isolada em crianças previamente saudáveis. Fisiopatologia: anticorpos anti-plaquetários IgG (gerados após infecção viral) se ligam às plaquetas → destruição pelo baço. Apresentação clínica clássica: criança saudável + infecção viral 1–4 semanas antes + aparecimento súbito de petéquias e equimoses espontâneas + plaquetas muito baixas + hemograma dos outros parâmetros NORMAL (sem anemia, sem leucopenia, sem blastos). A criança geralmente parece "bem demais" para o nível de trombocitopenia.',
      justify: 'Trombocitopenia grave isolada (8.000) em criança de 7 anos previamente saudável, 2 semanas após infecção viral respiratória. Hemoglobina e leucócitos normais, sem blastos no esfregaço (afasta LLA), sem hepatoesplenomegalia, sem adenomegalias, coagulograma normal (afasta CIVD). Macroplaquetas no esfregaço = produção reacional intensa pela medula (medula tentando compensar a destruição periférica). Criança em bom estado geral, sem sangramento ativo além de lesões cutâneas — condição favorável.',
      expectedAnamnesis: 'Caracterizar as lesões: petéquias vs. equimoses — tamanho, distribuição, aparecimento súbito ou gradual, espontâneas ou por trauma | Investigar infecção recente: quando, qual tipo, febre, tratamento | Perguntar sobre sangramento ativo: epistaxe, gengival, hematúria, melena, sangramento vaginal (se aplicável) | Pesquisar cefaleia, alterações visuais, alteração de consciência (sinais de hemorragia intracraniana — emergência) | Histórico de episódios semelhantes anteriores | Uso de medicamentos (AINEs, ácido valproico, heparina — podem causar trombocitopenia) | Vacinas recentes (vacina MMR pode precipitar PTI) | Contexto epidemiológico para dengue | História familiar de trombocitopenia ou doença autoimune',
      expectedPhysical: 'Avaliar estado geral: criança activa vs. prostrada — PTI a criança geralmente parece bem | Contar e mapear petéquias e equimoses: distribuição, tipo (planas vs. palpáveis), relação com trauma | Examinar mucosas: petéquias em palato, sangramento gengival | Pesquisar linfonodos: sem adenomegalias (afasta LLA, linfoma) | Auscultar coração e pulmões | Palpar abdome: hepatoesplenomegalia afastaria PTI (sugere LLA ou outra causa) | Exame neurológico completo: cefaleia, sinais meníngeos, déficits focais (hemorragia intracraniana)',
      expectedExams: [
        { exam: 'Hemograma completo + esfregaço', justify: 'EXAME CENTRAL: trombocitopenia isolada + hemoglobina e leucócitos normais + SEM blastos = padrão de PTI; exclui LLA', expected: 'Plaquetas 8.000; Hb e leucócitos normais; sem blastos; macroplaquetas' },
        { exam: 'Coagulograma (TP, TTPA, fibrinogênio)', justify: 'Normal na PTI — afasta CIVD, hepatopatia, coagulopatias congênitas', expected: 'Todos normais' },
        { exam: 'Sorologias (EBV, CMV, parvovírus B19, dengue NS1/IgM, HIV)', justify: 'Pesquisar causa infecciosa associada; dengue é diagnóstico diferencial importante no Brasil', expected: 'Sem infecção aguda identificada' },
        { exam: 'Mielograma', justify: 'NÃO indicado de rotina na PTI típica pediátrica (diagnóstico clínico + laboratorial); indicado se atípico (esplenomegalia, linfadenopatia, anemia) ou antes de tratamento com corticoide para afastar LLA', expected: 'Não indicado neste caso típico' }
      ],
      expectedConduct: 'DEPENDE DO GRAU DE SANGRAMENTO, não apenas da contagem de plaquetas | Plaquetas < 20.000 sem sangramento significativo: observação + restrição de atividades físicas de risco + evitar AINEs e injeções intramusculares — a maioria das PTI pediátricas resolve espontaneamente em semanas a meses | Plaquetas < 20.000 COM sangramento de mucosas ou risco aumentado: imunoglobulina humana IV (IVIG) 1 g/kg/dia × 1–2 dias (elevação rápida de plaquetas em 24–48h) OU prednisona 1–2 mg/kg/dia por 2–4 semanas | EMERGÊNCIA (plaquetas < 20.000 + cefaleia intensa ou suspeita de hemorragia intracraniana): IVIG + corticoide IV + transfusão de plaquetas imediata | EVITAR: ácido acetilsalicílico, AINEs, injeções IM | Orientações à família: reconhecer sinais de hemorragia intracraniana (cefaleia súbita intensa, alteração de consciência, vômitos em jato) — retornar imediatamente; evitar esportes de contato e atividades de risco de trauma enquanto plaquetopênico; retorno em 48–72h para novo hemograma',
      expectedCommunication: 'Apresentar-se pelo nome | Tranquilizar a mãe: explicar que a criança está em bom estado geral e sem sangramento ativo, o que é favorável | Explicar o mecanismo: "O organismo do seu filho fez uma reação ao vírus de 2 semanas atrás que destruiu as plaquetas (células que ajudam a coagular o sangue)" | Explicar que na maioria das crianças se resolve sozinho em semanas a meses | Orientar sobre sinais de alarme: cefaleia forte, vômito, alteração no comportamento = retornar imediatamente | Orientar sobre restrições: sem esportes de contato, sem AINEs | Agendar retorno em 48–72h',
      criticalErrors: [
        'Não solicitar esfregaço de sangue periférico e perder a ausência de blastos — erro diagnóstico que pode levar a não afastar LLA',
        'Prescrever ácido acetilsalicílico ou AINEs em criança com trombocitopenia grave (potencial de agravar sangramento)',
        'Não investigar cefaleia e sinais neurológicos — perder hemorragia intracraniana (complicação rara mas fatal da PTI grave)',
        'Transfundir plaquetas empiricamente sem sangramento ativo (não indicado na PTI sem emergência)',
        'Não orientar a família sobre os sinais de alarme e quando retornar ao pronto-socorro'
      ]
    },
    instD: {
      title: 'Púrpura Trombocitopênica Imune (PTI) — Material de Estudo',
      sections: [
        {
          h: 'Definição e Fisiopatologia',
          items: [
            { item: 'PTI: trombocitopenia adquirida por mecanismo imunológico — anticorpos IgG anti-plaquetários ligam-se à superfície das plaquetas → destruição pelo sistema reticuloendotelial (principalmente baço).', score: 1, ref: 'Harrison' },
            { item: 'Forma aguda pediátrica: pós-infecção viral (1–4 semanas antes); autolimitada — 70–80% resolvem em 6 meses sem tratamento específico.', score: 2, ref: 'Harrison' },
            { item: 'Forma crônica: > 12 meses; mais comum em adultas jovens e associada a doenças autoimunes (LES, tireoidite). Pode necessitar esplenectomia ou rituximabe.', score: 1, ref: 'Harrison' }
          ]
        },
        {
          h: 'Diagnóstico — Critérios',
          items: [
            { item: 'PTI é diagnóstico de EXCLUSÃO: trombocitopenia isolada (< 100.000/mm³) sem causa identificável + hemograma com as outras séries normais + ausência de esplenomegalia, hepatomegalia e adenomegalias + SEM blastos.', score: 2, ref: 'Harrison' },
            { item: 'Esfregaço de sangue periférico: macroplaquetas (plaquetas gigantes = produção medular aumentada para compensar), ausência de esquizócitos (afasta microangiopatia), sem blastos (afasta LLA).', score: 2, ref: 'Harrison' },
            { item: 'Coagulograma normal: afasta CIVD, doença de von Willebrand e coagulopatias.', score: 1, ref: 'Harrison' },
            { item: 'Mielograma: não indicado de rotina na PTI típica; indicado se apresentação atípica (esplenomegalia, pancitopenia) ou antes de corticoide para afastar LLA formalmente.', score: 1, ref: 'Harrison' }
          ]
        },
        {
          h: 'Tratamento — Baseado na Clínica, não só na Contagem',
          items: [
            { item: 'Plaquetas < 20.000 sem sangramento clínico significativo: observação + restrição de atividades + evitar AINEs. Maioria resolve espontaneamente.', score: 2, ref: 'Harrison / PEBMED' },
            { item: 'Plaquetas < 20.000 com sangramento de mucosas ou risco aumentado: prednisona 1–2 mg/kg/dia por 2–4 semanas OU IVIG 1 g/kg/dia × 1–2 dias (eleva plaquetas mais rápido que corticoide — preferida se necessidade urgente).', score: 2, ref: 'Harrison' },
            { item: 'EMERGÊNCIA (hemorragia intracraniana): IVIG + metilprednisolona IV + transfusão de plaquetas + neurocirurgia de emergência.', score: 2, ref: 'Harrison' },
            { item: 'CONTRAINDICADOS: ácido acetilsalicílico, AINEs, injeções intramusculares (risco de hematomas profundos).', score: 2, ref: 'Harrison' },
            { item: 'PTI crônica refratária: rituximabe, eltrombopague (agonista do receptor de trombopoietina), esplenectomia (última linha).', score: 1, ref: 'Harrison' }
          ]
        },
        {
          h: 'Sinais de Alarme — Quando Retornar Imediatamente',
          items: [
            { item: 'Cefaleia intensa e de início súbito — possível hemorragia intracraniana (rara, < 1% das PTI, mas fatal se não tratada).', score: 2, ref: 'Harrison' },
            { item: 'Sangramento digestivo (melena, hematoquezia), hematúria macroscópica, epistaxe incoercível.', score: 1, ref: 'Harrison' },
            { item: 'Alteração do nível de consciência, vômitos em jato, déficits neurológicos focais.', score: 2, ref: 'Harrison' }
          ]
        }
      ]
    }
  },


  // ─────────────────────────────────────────────────────────────────────────
  // CASO 8 — MIELOMA MÚLTIPLO
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 8,
    title: 'Idoso com dor lombar persistente, fraqueza e sede excessiva',
    sub: 'UBS → Ambulatório de Clínica Médica',
    tema: 'Hematologia',
    topic: 'Mieloma Múltiplo',
    level: 'difícil',
    cardAccent: '#E53935',
    instA: {
      scenario: 'Ambulatório de Clínica Médica. Consulta agendada. Idoso trazido pela filha, com queixas há 4 meses.',
      patient: 'O.F.M., 68 anos, masculino, aposentado (ex-professor), ex-tabagista leve, com osteoartrite de joelhos diagnosticada há 2 anos.',
      complaint: 'Dor lombar progressiva e persistente há 4 meses, sem relação com trauma ou esforço, associada a fraqueza generalizada, sede excessiva e piora do estado geral.',
      tasks: [
        'Realize a anamnese dirigida, investigando a dor lombar e os sintomas sistêmicos.',
        'Realize o exame físico geral e dirigido.',
        'Formule a hipótese diagnóstica principal e os principais diferenciais.',
        'Solicite os exames complementares adequados.',
        'Oriente o paciente e proponha o encaminhamento correto.'
      ]
    },
    instB: {
      vitals: {
        PA: '138/84 mmHg',
        FC: '84 bpm',
        FR: '17 irpm',
        Tax: '36,7 °C',
        Peso: '70 kg',
        Altura: '1,70 m',
        IMC: '24,2 kg/m²'
      },
      physicalGeneral: 'Regular estado geral, consciente, orientado (lentificado), hipocorado (1+/4+), anictérico, acianótico, sem edema. Aparência de emagrecimento.',
      physicalSeg: 'CABEÇA E PESCOÇO: mucosa oral pálida; sem adenomegalias; sem ingurgitamento jugular. | COLUNA VERTEBRAL: dor à palpação de processos espinhosos de T12–L2; sem irradiação; sem déficit neurológico em MMII; coluna com mobilidade reduzida pela dor. | CARDIOVASCULAR: ritmo regular, 2 tempos, bulhas normofonéticas. | PULMONAR: murmúrio vesicular presente, sem adventícios. | ABDOME: plano, indolor, sem visceromegalias palpáveis. | MUSCULOESQUELÉTICO: força muscular preservada (4+/5+ globalmente), ligeiramente reduzida. | NEUROLÓGICO: consciente, orientado, sem déficits focais, sem radiculopatia (Lasègue negativo); reflexos presentes.',
      labs: [
        { test: 'Hemoglobina', val: '9,6 g/dL', ref: '13–17 g/dL', alt: true },
        { test: 'VCM', val: '94 fL', ref: '80–100 fL', alt: false },
        { test: 'Leucócitos', val: '5.600/mm³', ref: '4.000–11.000/mm³', alt: false },
        { test: 'Plaquetas', val: '148.000/mm³', ref: '150.000–400.000/mm³', alt: false },
        { test: 'VHS', val: '112 mm/h', ref: '< 15 mm/h (H)', alt: true },
        { test: 'Proteína total', val: '10,8 g/dL', ref: '6,0–8,0 g/dL', alt: true },
        { test: 'Albumina', val: '2,8 g/dL', ref: '3,5–5,0 g/dL', alt: true },
        { test: 'Globulinas', val: '8,0 g/dL (proteína total − albumina)', ref: '2,0–3,5 g/dL', alt: true },
        { test: 'Eletroforese de proteínas', val: 'Pico monoclonal (pico M) na região gama — IgG kappa', ref: 'Sem pico monoclonal', alt: true },
        { test: 'Cálcio total', val: '12,8 mg/dL', ref: '8,5–10,5 mg/dL', alt: true },
        { test: 'Creatinina', val: '2,1 mg/dL', ref: '0,7–1,2 mg/dL', alt: true },
        { test: 'Ureia', val: '68 mg/dL', ref: '15–40 mg/dL', alt: true },
        { test: 'LDH', val: '280 UI/L', ref: '140–280 UI/L', alt: false },
        { test: 'Beta-2-microglobulina', val: '6,2 mg/L', ref: '< 2,4 mg/L', alt: true },
        { test: 'Proteína de Bence Jones (urina)', val: 'Positiva (cadeias leves kappa)', ref: 'Negativa', alt: true }
      ],
      image: 'Raio-X de coluna lombar e pelve (a entregar se candidato solicitar): lesões líticas em "saca-bocado" em vértebras L1–L3, arco posterior de L2 com fratura patológica; lesão lítica em ilíaco direito. Raio-X de crânio: lesões líticas em "chuva de balas" no crânio.',
      note: 'Entregar sinais vitais ao início. Hemograma + proteínas + albumina + cálcio + creatinina + VHS: entregar em conjunto se solicitado. Eletroforese de proteínas e proteína de Bence Jones: entregar se candidato solicitar especificamente. RX de coluna/crânio/pelve: entregar se candidato solicitar. Informar que encaminhamento para hematologia é urgente — paciente com hipercalcemia (12,8) e IRA (creatinina 2,1) requer avaliação especializada rápida.',
      patientProfile: 'O.F.M., 68 anos, ex-professor universitário de física, aposentado. Casado, mora com a esposa. Dois filhos adultos. Ex-tabagista (5 cigarros/dia por 15 anos, parou há 20 anos). Nega etilismo. Tinha diagnóstico de "osteoartrite de joelhos" e estava usando anti-inflamatório intermitente. Dor lombar foi inicialmente atribuída pelo clínico anterior a "lombalgia mecânica" com receita de fisioterapia — sem melhora. Perdeu 5 kg em 4 meses. Refere que fica com a boca seca e bebe muita água, além de episódios de náusea.',
      script: [
        { trigger: 'Queixa principal', speech: 'Doutor, tenho uma dor nas costas que não passa de jeito nenhum. Faz 4 meses. Tomei anti-inflamatório, fiz fisioterapia, nada resolve. Tô ficando sem força, sem pique. Minha filha insistiu pra eu vir.' },
        { trigger: 'Sobre a característica da dor', speech: 'Dói o tempo todo, não melhora com repouso. Às vezes acorda de madrugada. Não tive nenhum trauma, não carreguei peso. É diferente das dores do joelho que tenho, essas são piores.' },
        { trigger: 'Sobre fraqueza', speech: 'Tô muito fraco, cansado. Antes caminhava 40 minutos todo dia, agora mal consigo 10 minutos.' },
        { trigger: 'Sobre sede e boca seca', speech: 'Tô com muita sede, bebo litros de água por dia. A boca fica seca. Acho que é do calor, mas nunca tive isso antes.' },
        { trigger: 'Sobre náuseas e apetite', speech: 'Tenho enjoo às vezes, sem vomitar. Tô sem apetite, perdi uns 5 quilos em 4 meses.' },
        { trigger: 'Sobre infecções recentes', speech: 'Tive pneumonia faz uns 6 meses. Tratei com antibiótico e melhorei. Mas antes disso também tive uma sinusite. Tô adoecendo mais que antes.' },
        { trigger: 'Sobre histórico médico', speech: 'Tenho osteoartrite no joelho faz 2 anos. Pressão normal. Nunca tive tumor, câncer, nada assim. Pai morreu de infarto, mãe de diabetes.' },
        { trigger: 'Sobre confusão ou lentidão mental', speech: 'Minha filha fala que tô mais lento, demoro mais pra responder as coisas. Eu mesmo percebi que tô mais esquecido. Pensei que era a idade.' },
        { trigger: 'Pergunta ativa — diagnóstico', speech: 'Minha filha pesquisou na internet e ficou com medo de ser câncer nos ossos. Pode ser isso, doutor?' }
      ],
      hiddenInfo: 'Pneumonia há 6 meses + sinusite repetida (imunoparesia por supressão das imunoglobulinas normais pelo clone maligno) — só revela em detalhe se candidato perguntar sobre infecções recorrentes | Dor que acorda à noite e não melhora com repouso (dor inflamatória/neoplásica, não mecânica) — só revela a característica nocturna se candidato perguntar especificamente | Lentificação mental e confusão (encefalopatia hipercalcêmica) — só revela detalhes se candidato perguntar sobre cognição | Emagrecimento de 5 kg em 4 meses — só revela quantidade exata se candidato perguntar sobre peso',
      actorBehavior: 'Paciente calmo, intelectualizado, levemente lento nas respostas (hipercalcemia). A filha (pode ser representada fora da cena) está muito ansiosa. Paciente cooperativo no exame físico. Fica surpreso se o diagnóstico apontar para "mieloma" — nunca ouviu falar. Aceita bem explicações detalhadas (ex-professor).'
    },
    instC: {
      diagnosis: 'Mieloma Múltiplo com critérios CRAB presentes: hipercalCemia (Ca 12,8), insuficiência Renal (creatinina 2,1), Anemia (Hb 9,6), lesões ósseas (Bone — lesões líticas em coluna, pelve, crânio). Pico monoclonal IgG kappa + proteína de Bence Jones positiva. Estadiamento R-ISS: a determinar com beta-2-microglobulina 6,2 (estádio III).',
      differentials: [
        'Gamapatia Monoclonal de Significado Indeterminado (MGUS) — pico M presente mas < 3 g/dL, plasmócitos na medula < 10%, SEM critérios CRAB; este caso tem hipercalcemia, IRA e lesões ósseas — não é MGUS',
        'Metástases ósseas de neoplasia sólida — lesões líticas podem ser metástases (próstata, mama, pulmão, rim); mas pico monoclonal e proteína de Bence Jones apontam para gamapatia; biópsia óssea diferencia',
        'Plasmocitoma solitário — lesão óssea plasmocítica única sem outros critérios CRAB; aqui há múltiplas lesões e critérios CRAB',
        'Hiperparatireoidismo primário — hipercalcemia + sintomas sistêmicos; mas PTH elevado, sem pico monoclonal, lesões ósseas diferentes',
        'Linfoma com envolvimento ósseo — adenomegalias, pode causar lesões ósseas; biópsia diferencia'
      ],
      context: 'Mieloma Múltiplo é a segunda neoplasia hematológica mais comum em adultos, com pico em 65–70 anos. Resultado da proliferação clonal de plasmócitos na medula óssea → produção de imunoglobulina monoclonal (pico M) + destruição óssea por ativação de osteoclastos + imunoparesia (infecções recorrentes) + insuficiência renal (cadeias leves — néfron do mieloma). A "tétrade CRAB" (Cálcio↑, Renal, Anemia, Bone) é o marcador diagnóstico de órgão-alvo. Dor lombar em idoso que não melhora com repouso e não tem história de trauma deve sempre levantar suspeita de neoplasia.',
      justify: 'Idoso de 68 anos com dor lombar persistente, noturna, sem trauma + anemia normocítica + VHS muito elevado (112 mm/h) + hipercalcemia (12,8) + IRA (creatinina 2,1) + hiperproteinemia com hipogamaglobulinemia relativa + pico monoclonal IgG kappa na eletroforese + proteína de Bence Jones positiva + lesões líticas em punção na coluna e crânio ao RX + beta-2-microglobulina 6,2 (estádio ISS III) + infecções recorrentes (imunoparesia). Todos os critérios CRAB presentes. Diagnóstico confirmatório: mielograma (≥ 10% de plasmócitos clonais) + imunofenotipagem.',
      expectedAnamnesis: 'Caracterizar a dor lombar: início, evolução, melhora ou piora com repouso (dor noturna = alarme), irradiação, relação com trauma | Investigar sintomas de hipercalcemia: sede excessiva (polidipsia), poliúria, náusea, constipação, confusão mental, fraqueza | Pesquisar sintomas anêmicos: fadiga, dispneia, palpitações | Perguntar sobre infecções recorrentes: pneumonias, sinusites, herpes zoster repetido (imunoparesia) | Investigar perda de peso | Sintomas neurológicos: parestesias, fraqueza em MMII, incontinência (compressão medular por fratura patológica = emergência) | Perguntar sobre outros focos de dor óssea (ossos longos, costelas, crânio) | Investigar histórico familiar de neoplasia hematológica',
      expectedPhysical: 'Avaliar palidez (anemia) | Pesquisar dor à palpação de toda a coluna vertebral — identificar vértebras comprometidas | Avaliar mobilidade da coluna | Exame neurológico OBRIGATÓRIO: força em MMII, sensibilidade, reflexos, controle de esfíncteres (compressão medular por fratura patológica de vértebra é emergência neurocirúrgica) | Palpar ossos longos (úmero, fêmur) — dor = lesão lítica | Auscultar pulmões (infecções recorrentes) | Avaliar hidratação (polidipsia/poliúria por hipercalcemia)',
      expectedExams: [
        { exam: 'Hemograma + VHS + proteínas totais + albumina', justify: 'Anemia normocítica, VHS muito elevado (por pico M) e hiperproteinemia são achados clássicos do mieloma', expected: 'Hb 9,6; VHS 112; proteínas 10,8 com albumina baixa' },
        { exam: 'Cálcio total + creatinina + ureia', justify: 'Critérios CRAB: hipercalcemia e insuficiência renal definem órgão-alvo e urgência do tratamento', expected: 'Ca 12,8 mg/dL; creatinina 2,1 mg/dL' },
        { exam: 'Eletroforese de proteínas séricas', justify: 'Identifica pico monoclonal (pico M) — componente central do diagnóstico de gamapatia monoclonal', expected: 'Pico monoclonal IgG kappa na região gama' },
        { exam: 'Proteína de Bence Jones (urina de 24h)', justify: 'Cadeias leves livres na urina — causa nefropatia do mieloma; presente em ~50% dos casos', expected: 'Positiva (kappa)' },
        { exam: 'Beta-2-microglobulina e albumina', justify: 'Estadiamento R-ISS: B2M + albumina + LDH + citogenética', expected: 'B2M 6,2 → ISS III (pior prognóstico)' },
        { exam: 'Raio-X esquelético (crânio, coluna, pelve, costelas, úmero, fêmur)', justify: 'Lesões líticas em "saca-bocado" são clássicas do mieloma; identificar fraturas patológicas', expected: 'Lesões líticas em L1–L3 + crânio ("chuva de balas") + ilíaco' },
        { exam: 'Mielograma + imunofenotipagem (no serviço de referência)', justify: 'Confirmação diagnóstica: ≥ 10% de plasmócitos clonais na medula (criterio OMS)', expected: 'A ser realizado na hematologia' }
      ],
      expectedConduct: 'ENCAMINHAR urgentemente para hematologia — paciente tem critérios CRAB com hipercalcemia sintomática e IRA | Hipercalcemia (Ca 12,8): hidratação venosa agressiva SF 0,9% (200–300 mL/h) + bisfosfonato IV (ácido zoledrónico 4 mg ou pamidronato 60–90 mg) + calcitonina se Ca > 14 ou sintomático grave | IRA: hidratação + evitar nefrotóxicos (AINEs, contraste não indicado sem preparo); monitorar diurese | Analgesia: opioides para dor intensa; EVITAR AINEs (piora IRA e Ca) | NÃO mobilizar sem avaliação de fratura por ortopedia/neurocirurgia (risco de fratura patológica) | Tratamento de base (no serviço de referência): quimioterapia (bortezomibe + lenalidomida + dexametasona — VRd) + bisfosfonato mensal + considerar transplante de células-tronco autólogo em elegíveis | Comunicação com família: diagnóstico grave, mas com tratamento disponível; explicar próximos passos',
      expectedCommunication: 'Apresentar-se pelo nome | Criar ambiente privado — filha presente é benéfico | Comunicar que os exames mostraram alterações graves que indicam uma doença séria no sangue (mieloma múltiplo) e que o encaminhamento urgente ao especialista é necessário | Explicar o que é o mieloma de forma acessível: "um tipo de câncer das células de defesa que fica na medula óssea, dentro dos ossos" | Validar as preocupações da família | Explicar que existem tratamentos e que serão iniciados após avaliação especializada | Dar espaço para perguntas; oferecer suporte emocional',
      criticalErrors: [
        'Tratar como lombalgia mecânica e não investigar causas neoplásicas em idoso com dor noturna que não melhora',
        'Não solicitar cálcio em paciente com polidipsia, náusea e confusão (perder hipercalcemia)',
        'Prescrever AINEs em paciente com IRA e hipercalcemia (agrava ambas as condições)',
        'Não solicitar eletroforese de proteínas em idoso com VHS muito elevado e hiperproteinemia',
        'Não avaliar déficit neurológico em MMII (compressão medular por fratura patológica é emergência — paraplegia irreversível se não tratada)'
      ]
    },
    instD: {
      title: 'Mieloma Múltiplo — Material de Estudo',
      sections: [
        {
          h: 'Definição e Epidemiologia',
          items: [
            { item: 'Mieloma Múltiplo (MM): neoplasia de plasmócitos clonais na medula óssea que produzem imunoglobulina monoclonal (IgG > IgA > IgD). Segunda neoplasia hematológica mais comum.', score: 1, ref: 'Harrison' },
            { item: 'Incidência aumenta com a idade: mediana de diagnóstico aos 65–70 anos. Mais comum em homens e negros.', score: 1, ref: 'Harrison' },
            { item: 'Espectro: MGUS → Mieloma Latente (smoldering) → Mieloma Múltiplo sintomático.', score: 1, ref: 'Harrison' }
          ]
        },
        {
          h: 'Critérios Diagnósticos — CRAB',
          items: [
            { item: 'Hipercalcemia (C — Calcium): Ca > 11 mg/dL por destruição óssea → polidipsia, confusão, náusea, constipação, fraqueza.', score: 2, ref: 'Harrison' },
            { item: 'Insuficiência Renal (R — Renal): por cadeias leves livres (néfron do mieloma), hipercalcemia, desidratação, nefrotóxicos.', score: 2, ref: 'Harrison' },
            { item: 'Anemia (A): normocítica normocômica por infiltração medular e citocinas inflamatórias.', score: 1, ref: 'Harrison' },
            { item: 'Lesões Ósseas (B — Bone): lesões líticas em "saca-bocado" por ativação de osteoclastos → dor óssea, fraturas patológicas. Locais mais comuns: coluna, crânio, costelas, pelve.', score: 2, ref: 'Harrison' }
          ]
        },
        {
          h: 'Achados Laboratoriais Chave',
          items: [
            { item: 'VHS muito elevado: proteína monoclonal aumenta a sedimentação eritrocitária — VHS > 100 em idoso com dor óssea = alarme para mieloma.', score: 2, ref: 'Harrison' },
            { item: 'Eletroforese de proteínas: pico M (pico monoclonal) na região gama ou beta — quantidade varia com subtipo.', score: 2, ref: 'Harrison' },
            { item: 'Proteína de Bence Jones (urina): cadeias leves kappa ou lambda livres — causa nefropatia por depósito tubular.', score: 2, ref: 'Harrison' },
            { item: 'Beta-2-microglobulina: marcador de carga tumoral — componente do estadiamento R-ISS (I: < 3,5; II: 3,5–5,4; III: ≥ 5,5 mg/L).', score: 1, ref: 'Harrison' },
            { item: 'Imunoparesia: supressão das imunoglobulinas normais pelo clone maligno → infecções recorrentes (pneumonia, herpes zoster, sinusite).', score: 1, ref: 'Harrison' }
          ]
        },
        {
          h: 'Tratamento',
          items: [
            { item: 'Hipercalcemia: hidratação IV vigorosa (SF 0,9%) + bisfosfonato IV (ácido zoledrónico, pamidronato) + calcitonina em casos graves.', score: 2, ref: 'Harrison' },
            { item: 'Quimioterapia: bortezomibe (inibidor de proteassoma) + lenalidomida + dexametasona (VRd) — padrão ouro atual.', score: 1, ref: 'Harrison' },
            { item: 'Transplante autólogo de células-tronco: consolidação em pacientes elegíveis (< 70 anos, bom performance status).', score: 1, ref: 'Harrison' },
            { item: 'Bisfosfonato mensal: ácido zoledrónico — reduz eventos ósseos (fraturas), dor e hipercalcemia recorrente.', score: 1, ref: 'Harrison' },
            { item: 'Radioterapia: lesões ósseas dolorosas localizadas + compressão medular.', score: 1, ref: 'Harrison' },
            { item: 'Prognóstico: mediana de sobrevida 5–7 anos com terapia moderna; incurável na maioria dos casos, mas controle prolongado possível.', score: 1, ref: 'Harrison' }
          ]
        }
      ]
    }
  },


  // ─────────────────────────────────────────────────────────────────────────
  // CASO 9 — NEUTROPENIA FEBRIL
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 9,
    title: 'Febre em paciente em quimioterapia para câncer de mama',
    sub: 'Pronto-Socorro — Emergência',
    tema: 'Hematologia',
    topic: 'Neutropenia Febril',
    level: 'difícil',
    cardAccent: '#E53935',
    instA: {
      scenario: 'Pronto-Socorro adulto. Urgência médica. Paciente chega acompanhada do marido, com febre alta e prostração. Tem câncer de mama e está em quimioterapia.',
      patient: 'C.R.V., 48 anos, feminina, professora, com diagnóstico de câncer de mama HER2+ (estádio III), em quimioterapia com AC-T (doxorrubicina + ciclofosfamida, ciclo 3 de 4). Última quimioterapia há 10 dias.',
      complaint: 'Febre de 39,2 °C de início há 6 horas, calafrios, prostração intensa. Sem foco infeccioso identificado pela paciente.',
      tasks: [
        'Realize a anamnese dirigida, caracterizando o quadro febril e a situação oncológica.',
        'Realize o exame físico completo e sistemático em busca de foco infeccioso.',
        'Defina a hipótese diagnóstica e a estratificação de risco (MASCC).',
        'Solicite os exames complementares urgentes.',
        'Inicie o tratamento imediato — não retardar o antibiótico.'
      ]
    },
    instB: {
      vitals: {
        PA: '96/60 mmHg',
        FC: '118 bpm',
        FR: '24 irpm',
        Tax: '39,2 °C',
        SpO2: '96% (ar ambiente)',
        Peso: '62 kg',
        Altura: '1,62 m'
      },
      physicalGeneral: 'Mau estado geral, consciente, orientada, prostrada, febril (39,2 °C), taquicárdica (118 bpm), levemente hipocorada. Fácies de sofrimento. Sudorese.',
      physicalSeg: 'CAVIDADE ORAL: mucosita grau 2 (eritema + úlceras pequenas em mucosa jugal bilateral, dolorosas, sem exsudato); sem sangramento. Sem candidíase oral evidente. | CATETER VENOSO CENTRAL (CVC): cateter de duplo lúmen em subclávia direita, inserido há 3 meses; curativo íntegro, sem eritema ou secreção no orifício de inserção. | CARDIOVASCULAR: taquicardia (FC 118 bpm); sem sopros; bulhas normofonéticas; pressão arterial 96/60 mmHg (hipotensão). | PULMONAR: murmúrio vesicular presente bilateralmente, diminuído em base direita; sem sibilos; crepitações finas em base direita (a verificar). | ABDOME: plano, doloroso à palpação em quadrante inferior direito (fossa ilíaca direita), sem sinais de peritonite, RHA diminuídos. | PELE: sem lesões cutâneas, sem petéquias, sem exantema. | NEUROLÓGICO: consciente, orientada; sem rigidez de nuca; sem déficits focais. | MEMBROS INFERIORES: sem sinais flogísticos, sem edema.',
      labs: [
        { test: 'Hemoglobina', val: '9,2 g/dL', ref: '12–16 g/dL', alt: true },
        { test: 'Leucócitos', val: '1.100/mm³', ref: '4.000–11.000/mm³', alt: true },
        { test: 'Neutrófilos absolutos', val: '200/mm³ (neutropenia grave)', ref: '1.500–7.000/mm³', alt: true },
        { test: 'Plaquetas', val: '68.000/mm³', ref: '150.000–400.000/mm³', alt: true },
        { test: 'PCR', val: '182 mg/L', ref: '< 5 mg/L', alt: true },
        { test: 'Procalcitonina', val: '4,8 ng/mL', ref: '< 0,5 ng/mL', alt: true },
        { test: 'Creatinina', val: '1,4 mg/dL', ref: '0,6–1,1 mg/dL', alt: true },
        { test: 'Ureia', val: '52 mg/dL', ref: '15–40 mg/dL', alt: true },
        { test: 'Lactato', val: '3,2 mmol/L', ref: '< 2,0 mmol/L', alt: true },
        { test: 'AST/ALT', val: 'AST 48 / ALT 52 UI/L', ref: '< 40 / < 41 UI/L', alt: true },
        { test: 'Bilirrubinas', val: 'Total 1,2 mg/dL (normal)', ref: '< 1,2 mg/dL', alt: false },
        { test: 'Hemocultura (2 pares — periférico + CVC)', val: 'Coletada — aguardando resultado', ref: '—', alt: false }
      ],
      image: 'Raio-X de tórax (a entregar se candidato solicitar): opacidade em base direita, compatível com consolidação pneumônica — possível pneumonia em paciente imunossuprimida. Sem derrame pleural.',
      note: 'Entregar sinais vitais ao início — ressaltar PA 96/60 e FC 118 (sinais de instabilidade). Hemograma + PCR + procalcitonina + lactato + creatinina: entregar em conjunto se solicitado. RX de tórax: entregar se candidato solicitar — consolidação em base direita é foco provável. Hemocultura: informar que foi coletada, aguardando. ATENÇÃO: lactato 3,2 + hipotensão + taquicardia = critérios para sepse/choque séptico incipiente — candidato deve reconhecer e agir IMEDIATAMENTE. O antibiótico NÃO pode ser atrasado.',
      patientProfile: 'C.R.V., 48 anos, professora de matemática. Casada, 2 filhos adolescentes. Diagnóstico de Ca de mama HER2+ estádio III há 5 meses. Em quimioterapia AC-T (4 ciclos); último ciclo (3º) há 10 dias. Fez hematologia antes da quimio: neutrófilos limítrofes, oncologista liberou. Não usa G-CSF profilático. Tem CVC de duplo lúmen subclávia direita. Nas últimas 24 horas: febre progressiva, piora de mucosite (já sabia que poderia surgir), calafrios, dificuldade para engolir. Marido muito assustado.',
      script: [
        { trigger: 'Queixa principal', speech: 'Doutora, tô com febre muito alta desde hoje cedo, 39 e pouco. Tô me sentindo muito mal, com calafrio, sem força. Sei que isso pode ser perigoso quando se está fazendo quimioterapia.' },
        { trigger: 'Sobre a quimioterapia', speech: 'Tô no terceiro ciclo do quimio. A última foi há 10 dias. Tenho câncer de mama e tô fazendo o tratamento no onco.' },
        { trigger: 'Sobre o foco infeccioso', speech: 'Não sei de onde vem a febre. A boca tá dolorida (mucosite), dificulta engolir. Não tô com tosse, não tô com dor para urinar. Tô com dor de barriga do lado direito, mas achei que podia ser do intestino do remédio.' },
        { trigger: 'Sobre o cateter', speech: 'Tenho o cateterinho no peito (aponta para o CVC). Colocaram faz 3 meses, quando comecei a quimio. O curativo tá intacto, não sinto nada no local.' },
        { trigger: 'Sobre medicamentos em uso', speech: 'Tomo os remédios do onco — antiemético, omeprazol. Não tomei antibiótico. O oncologista não deixou eu tomar nada sem falar com ele.' },
        { trigger: 'Sobre tonteira e pressão baixa', speech: 'Tô me sentindo fraca, um pouquinho tonta quando levanto. Acho que é pela febre mesmo.' },
        { trigger: 'Sobre a dor abdominal em FID', speech: 'Dói aqui (aponta para FID). Começou ontem. Não está piorando muito. Meu intestino sempre fica embolado na quimio.' },
        { trigger: 'Sobre orientação prévia do oncologista', speech: 'Ele me disse que se tivesse febre acima de 38 graus durante a quimio eu deveria ir imediatamente ao pronto-socorro. Por isso vim.' },
        { trigger: 'Pergunta ativa — diagnóstico', speech: 'É grave, doutora? Vai precisar internar? Meu marido tá muito preocupado. Vai atrasar meu tratamento do câncer?' }
      ],
      hiddenInfo: 'Dor em fossa ilíaca direita iniciada há 24h — pode ser tiflite (neutropenic enterocolitis) — só revela localização precisa e início se candidato perguntar sobre dor abdominal | CVC há 3 meses — risco de infecção relacionada ao cateter — só revela o tempo de cateter se candidato perguntar | Não usa G-CSF profilático — só revela se candidato perguntar sobre uso de filgrastim/G-CSF | Já foi orientada pelo oncologista a vir ao PS se febre — só revela se candidato perguntar sobre orientações prévias',
      actorBehavior: 'Paciente prostrada mas colaborativa, consciente da gravidade (sabe que neutropenia + febre é emergência). Marido ao fundo, muito ansioso, pode fazer perguntas. A paciente valoriza muito o tratamento do câncer e tem medo de atrasar a quimioterapia.'
    },
    instC: {
      diagnosis: 'Neutropenia Febril grave com critérios de sepse incipiente — neutrófilos absolutos 200/mm³ + febre 39,2°C + hipotensão (PA 96/60) + taquicardia + lactato 3,2 mmol/L + foco provável em pulmão (consolidação à base direita no RX). Emergência médica — antibiótico imediato é obrigatório.',
      differentials: [
        'Pneumonia bacteriana (gram-negativo ou gram-positivo) — consolidação em base direita ao RX; foco mais provável neste caso; tratamento empírico de amplo espectro cobre',
        'Infecção relacionada ao cateter venoso central (IRCVC) — possível mesmo sem sinais locais; hemocultura central x periférica pode identificar; exige antifúngico se candidemia suspeita',
        'Tiflite (enterocolite neutropênica) — dor em FID em neutropênico grave + quimioterapia; importante diagnóstico diferencial da dor abdominal; TC de abdome identifica espessamento de parede do ceco',
        'Infecção fúngica invasiva (Aspergillus, Candida) — neutropenia prolongada > 7 dias aumenta risco; sem febre que respondeu a antibacteriano após 4–7 dias: pensar em fungo; antifúngico empírico nesse cenário',
        'Mucosite grave com bacteremia translacional — barreira mucosa rompida permite translocação bacteriana; mucosite grau 2 presente aqui, pode ser portal de entrada'
      ],
      context: 'Neutropenia Febril (NF) é definida como febre ≥ 38,3°C (ou ≥ 38°C por > 1 hora) em paciente com neutrófilos absolutos < 500/mm³ (ou < 1.000/mm³ com tendência de queda). É emergência oncológica com mortalidade de 5–10% (> 30% se choque séptico). Risco máximo em quimioterapia com esquemas mielossupressores (AC = alta toxicidade medular), 7–14 dias após o ciclo. A regra de ouro: antibiótico empírico de amplo espectro deve ser administrado na primeira HORA (idealmente 30–60 min após apresentação). Atrasar para aguardar culturas é erro grave e pode ser fatal.',
      justify: 'Critérios de NF presentes: neutrófilos 200/mm³ + febre 39,2°C em paciente em quimioterapia (AC, alta mielossupressão, ciclo há 10 dias = nadir esperado). Critérios adicionais de gravidade: hipotensão 96/60 + taquicardia 118 + lactato 3,2 mmol/L (sepse/choque séptico) + PCR 182 + procalcitonina 4,8 (infecção bacteriana grave). Escore MASCC: doença de base grave (CA), sintomas graves (hipotensão, taquicardia), paciente internada → alto risco (MASCC < 21). Foco provável: pneumonia (consolidação à base direita) + possível IRCVC.',
      expectedAnamnesis: 'Confirmar: temperatura, hora do início, calafrios | Identificar foco: tosse, dispneia, dor torácica (pneumonia); disúria, polaciúria (ITU); dor abdominal (tiflite); dor/eritema no CVC (IRCVC); mucosite; lesões de pele | Detalhar a quimioterapia: esquema, último ciclo (há quantos dias), uso de G-CSF profilático | Verificar orientações do oncologista e medicamentos em uso | Perguntar sobre episódios anteriores de neutropenia febril | Antecedentes de infecções fúngicas ou bacterianas no tratamento | Alergias a antibióticos (essencial antes de prescrever)',
      expectedPhysical: 'Avaliar sinais vitais COM ATENÇÃO a PA, FC, FR, SpO2 e temperatura — reconhecer critérios de sepse | Examinar cavidade oral: mucosite, candidíase, abscesso dentário | Inspecionar e palpar CVC: eritema, calor, secreção, dor à palpação do trajeto | Auscultar pulmões detalhadamente: crepitações, diminuição de MV | Palpar abdome: dor, rigidez, foco (FID — tiflite?) | Examinar pele integralmente: lesões por Pseudomonas (ectima gangrenoso = lesão necrótica com halo eritematoso), petéquias, herpes zoster | Examinar região perianal (paciente de quimio): abscesso periretal | Exame neurológico rápido: meningite',
      expectedExams: [
        { exam: 'Hemograma completo com diferencial — URGENTE', justify: 'Confirmar neutropenia grave (NAb < 500/mm³) — define NF + avalia plaquetopenia', expected: 'NAb 200/mm³; Hb 9,2; plaquetas 68.000' },
        { exam: 'PCR + Procalcitonina + Lactato', justify: 'Marcadores de infecção bacteriana grave e hipoperfusão tecidual; lactato ≥ 2 mmol/L define sepse', expected: 'PCR 182; PCT 4,8; lactato 3,2 — sepse confirmada' },
        { exam: 'Hemocultura — 2 pares (1 periférico + 1 pelo CVC)', justify: 'Identificar agente etiológico e diferenciar bacteremia de IRCVC (se CVC positivo e periférico negativo = IRCVC). COLETAR ANTES DO ANTIBIÓTICO mas NÃO aguardar resultado para iniciar', expected: 'Coletada, aguardando' },
        { exam: 'Raio-X de tórax', justify: 'Foco pneumônico — primeira imagem para avaliar pulmão em neutropênico febril', expected: 'Consolidação em base direita — pneumonia provável' },
        { exam: 'Urina tipo 1 + urocultura', justify: 'ITU é causa frequente de NF, especialmente em mulheres', expected: 'A colher' },
        { exam: 'TC de abdome (se dor abdominal persistente)', justify: 'Rastreio de tiflite (enterocolite neutropênica) — espessamento de parede do ceco e íleon terminal em neutropênico com dor em FID', expected: 'Solicitar se dor abdominal não se resolver com tratamento empírico' },
        { exam: 'Função renal, eletrólitos, glicemia, gasometria', justify: 'Base para monitorização e ajuste de dose dos antibióticos; gasometria se SpO2 < 95% ou lactato elevado', expected: 'Creatinina 1,4 — monitorar' }
      ],
      expectedConduct: 'EMERGÊNCIA — antibiótico na primeira hora (idealmente 30–60 min após chegada): | Esquema empírico anti-Pseudomonas: cefepima 2g IV 8/8h OU piperacilina-tazobactam 4,5g IV 6/6h OU meropeném 1g IV 8/8h (se grave ou em unidade com alta resistência) | Adicionar vancomicina 15–20 mg/kg IV 12/12h SE: suspeita de IRCVC, hipotensão refratária, mucosite grave, cobertura para MRSA | Antifúngico empírico (fluconazol ou equinocandina): NÃO indicado de início; considerar se febre persistir > 4–7 dias sem resposta ao antibacteriano | Ressuscitação hemodinâmica: SF 0,9% 30 mL/kg nas primeiras 3h (sepse) + monitorização contínua da PA e diurese; se sem resposta → UTI + vasopressor | Internação obrigatória em quarto individual (isolamento de contato/gotículas) | Monitorar hemograma diariamente | G-CSF (filgrastim): pode encurtar duração da neutropenia — avaliar com oncologista | Notificar oncologista responsável imediatamente | Comunicar à paciente: tranquilizar, explicar que o tratamento do câncer será retomado após recuperação',
      expectedCommunication: 'Apresentar-se pelo nome | Demonstrar urgência sem gerar pânico | Explicar que a febre em paciente em quimioterapia com poucos leucócitos (neutropenia) é uma emergência que exige antibiótico imediato | Informar que haverá internação e tratamento agressivo | Tranquilizar que o atraso na quimioterapia pode ser necessário mas não compromete o resultado do tratamento de base | Dar espaço para o marido fazer perguntas | Manter comunicação clara durante toda a internação',
      criticalErrors: [
        'Atrasar o antibiótico empírico para aguardar resultados de cultura (cada hora de atraso aumenta mortalidade em 7–10%)',
        'Não reconhecer os critérios de sepse (hipotensão + taquicardia + lactato elevado) e não iniciar ressuscitação hemodinâmica',
        'Não cobrir Pseudomonas aeruginosa no esquema empírico (gram-negativo mais temido em neutropênico)',
        'Não coletar hemoculturas ANTES do antibiótico (perde a janela diagnóstica microbiológica)',
        'Liberar a paciente para casa sem internar (NF de alto risco = internação obrigatória)',
        'Não investigar dor abdominal em FID (tiflite pode perfurar e causar peritonite fecal em neutropênico)'
      ]
    },
    instD: {
      title: 'Neutropenia Febril — Material de Estudo',
      sections: [
        {
          h: 'Definição e Fisiopatologia',
          items: [
            { item: 'Neutropenia Febril (NF): temperatura ≥ 38,3°C (ou ≥ 38°C por > 1h) + neutrófilos absolutos < 500/mm³ (ou < 1.000 com queda prevista para < 500).', score: 2, ref: 'IDSA / Harrison' },
            { item: 'Emergência oncológica: mortalidade 5–10% nos baixo risco; > 30% se choque séptico. A demora do antibiótico é o principal fator de morte prevenível.', score: 2, ref: 'IDSA' },
            { item: 'Nadir da neutropenia: geralmente 7–14 dias após a quimioterapia (pico de risco). AC (doxorrubicina + ciclofosfamida) é esquema de alto risco de NF.', score: 1, ref: 'Harrison' }
          ]
        },
        {
          h: 'Estratificação de Risco — Escore MASCC',
          items: [
            { item: 'MASCC ≥ 21 = baixo risco: pode ser tratado com antibiótico oral e acompanhamento ambulatorial (ciprofloxacino + amoxicilina-clavulanato).', score: 1, ref: 'IDSA' },
            { item: 'MASCC < 21 = alto risco: internação hospitalar + antibiótico IV + vigilância intensiva. Fatores de alto risco: hipotensão, dispneia, pneumonia, doença de base grave, neutropenia esperada > 7 dias.', score: 2, ref: 'IDSA' },
            { item: 'Sepse/Choque séptico associado: lactato ≥ 2 mmol/L + hipotensão = emergência máxima → UTI.', score: 2, ref: 'Surviving Sepsis Campaign' }
          ]
        },
        {
          h: 'Tratamento Antibiótico Empírico',
          items: [
            { item: 'INICIAR em até 60 minutos da chegada — regra inviolável.', score: 2, ref: 'IDSA' },
            { item: 'Esquema de primeira linha (anti-Pseudomonas): cefepima 2g IV 8/8h OU piperacilina-tazobactam 4,5g IV 6/6h OU imipeném/meropeném (reservar para suspeita de ESBL ou situação grave).', score: 2, ref: 'IDSA / Harrison' },
            { item: 'Adicionar vancomicina SE: IRCVC suspeita, hipotensão sem resposta, mucosite grave, infecção de pele, cobertura para MRSA. NÃO usar vancomicina rotineiramente — aumenta resistência.', score: 1, ref: 'IDSA' },
            { item: 'Antifúngico empírico (fluconazol ou equinocandina): iniciar se febre persistir > 4–7 dias sem foco identificado ou sem resposta ao antibacteriano.', score: 1, ref: 'IDSA' },
            { item: 'G-CSF (filgrastim): pode encurtar a duração da neutropenia; decidir com oncologista; não substitui o antibiótico.', score: 1, ref: 'IDSA' }
          ]
        },
        {
          h: 'Focos Infecciosos — O que Pesquisar',
          items: [
            { item: 'Pneumonia: causa mais comum identificável; RX e TC de tórax de alta resolução se suspeita de aspergilose.', score: 1, ref: 'IDSA' },
            { item: 'Infecção relacionada ao cateter (IRCVC): bacteremia com crescimento diferencial nas hemoculturas central > periférica de > 2 horas.', score: 1, ref: 'IDSA' },
            { item: 'Tiflite (enterocolite neutropênica): dor em FID + espessamento de parede do ceco na TC — risco de perfuração; tratamento conservador ± cirurgia.', score: 2, ref: 'Harrison' },
            { item: 'Ectima gangrenoso (Pseudomonas): lesão cutânea necrótica com halo eritematoso — sinal de bacteremia grave por gram-negativo.', score: 1, ref: 'Harrison' },
            { item: 'Candidemia: suspeitar em NF prolongada sem resposta ao antibacteriano, especialmente com CVC ou mucosite grave.', score: 1, ref: 'IDSA' }
          ]
        },
        {
          h: 'Profilaxia da Neutropenia Febril',
          items: [
            { item: 'G-CSF profilático primário (filgrastim 5 mcg/kg/dia SC): indicado se risco de NF > 20% com o esquema quimioterápico (AC é > 20%); inicia 24–48h após a quimio, até recuperação do nadir.', score: 2, ref: 'ASCO / Harrison' },
            { item: 'Antibiótico profilático oral (ciprofloxacino): em pacientes de alto risco com neutropenia esperada prolongada — decisão do oncologista.', score: 1, ref: 'IDSA' }
          ]
        }
      ]
    }
  },

];

export default hematologia;








