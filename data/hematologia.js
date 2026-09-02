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

];

export default hematologia;



