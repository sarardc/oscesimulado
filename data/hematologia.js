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

];

export default hematologia;
