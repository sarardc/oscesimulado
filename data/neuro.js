cons neurostations = [
    {
  id: 1,
  title: 'Dor de cabeça intensa e em crises há 2 semanas',
  sub: 'UBS — Atenção Primária',
  tema: 'Neurologia',
  topic: 'cefaleia em salvas',
  level: 'moderado',
  cardAccent: '#7C3AED',
  instA: {
    scenario: 'Atenção Primária — UBS. Consultório, turno diurno.',
    patient: 'R.M., 34 anos, masculino, motorista de caminhão, sem comorbidades conhecidas.',
    complaint: 'Dor de cabeça muito forte, do lado direito do olho, que dura uns 45 minutos e voltou hoje de novo.',
    tasks: [
      'Realize a anamnese dirigida ao caso',
      'Solicite os exames complementares pertinentes',
      'Formule a hipótese diagnóstica e os principais diagnósticos diferenciais',
      'Proponha a conduta terapêutica adequada',
      'Oriente o paciente sobre sua condição e plano de seguimento'
    ]
  },
  instB: {
    vitals: {
      PA: '128/80 mmHg',
      FC: '82 bpm',
      FR: '16 irpm',
      Tax: '36,5°C',
      Peso: '82 kg',
      Altura: '1,76 m',
      IMC: '26,5 kg/m²'
    },
    physicalGeneral: 'Bom estado geral, consciente, orientado, levemente ansioso. Normocorado, hidratado, anictérico. Sem sinais de sofrimento agudo no momento da consulta (crise já cessou há 2 horas).',
    physicalSeg: 'NEUROLÓGICO: Sem déficit focal. Pupilas isocóricas e fotorreagentes. Sem rigidez de nuca. Nervos cranianos íntegros. Sem nistagmo. | OFTALMOLÓGICO: Hiperemia conjuntival leve em olho direito (relatada pelo paciente durante a crise; ausente no momento). Sem ptose ou miose no exame atual. | CABEÇA E FACE: Sem pontos dolorosos em seios da face. Sem dor à percussão do crânio. | CARDIOVASCULAR: Ritmo regular em 2 tempos, sem sopros.',
    labs: [
      { test: 'Hemograma', val: 'Normal', ref: '—', alt: false },
      { test: 'Glicemia de jejum', val: '94 mg/dL', ref: '70–99 mg/dL', alt: false },
      { test: 'TSH', val: '2,1 mUI/L', ref: '0,4–4,0 mUI/L', alt: false }
    ],
    image: 'Tomografia de crânio sem contraste: Sem lesões expansivas, sangramentos, desvio de linha média ou alterações isquêmicas. Estruturas da fossa posterior preservadas. Seios da face sem velamento.',
    note: 'Entregar sinais vitais ao início da estação. Entregar exame físico somente se o candidato solicitar ou iniciar o exame. Entregar resultado de TC e labs somente se o candidato solicitar verbalmente os exames. Informar que a TC foi realizada na UPA em episódio anterior, se o candidato questionar por que há TC disponível na UBS.',
    patientProfile: 'R.M., 34 anos, masculino, motorista de caminhão, casado, sem filhos. Reside em área urbana. Trabalha em rotas longas, com privação de sono frequente e alimentação irregular.',
    script: [
      { trigger: 'Queixa principal', speech: 'Doutor, essa dor de cabeça tá me matando. Ela vem do lado direito, bem em cima do olho, uma dor assim que eu nunca senti antes. Hoje deu de novo.' },
      { trigger: 'Sobre duração das crises', speech: 'Dura umas 40, 45 minutos. Aí para do nada, como se alguém tivesse desligado.' },
      { trigger: 'Sobre frequência', speech: 'Tá vindo todo dia, às vezes duas vezes por dia, já faz uns 15 dias assim. Antes ficava meses sem dor nenhuma.' },
      { trigger: 'Sobre localização e qualidade', speech: 'É sempre do lado direito, em cima do olho. Uma dor que arde, que late, impossível de ficar parado.' },
      { trigger: 'Sobre sintomas associados', speech: 'O olho fica vermelho, começa a lacrimejar, e meu nariz entope do mesmo lado. Fico muito agitado, não consigo deitar.' },
      { trigger: 'Sobre comportamento na crise', speech: 'Eu fico andando de um lado pro outro, batendo a cabeça na parede de tanta dor. Não consigo ficar quieto.' },
      { trigger: 'Sobre náuseas/vômitos', speech: 'Não tenho enjoo nem vômito, não. A dor é forte demais mas não é esse tipo de coisa.' },
      { trigger: 'Sobre uso de medicação', speech: 'Tomo dipirona mas não adianta quase nada. A dor some sozinha depois de uns 45 minutos.' },
      { trigger: 'Pergunta ativa', speech: 'Doutor, o que eu tenho? É tumor?' },
      { trigger: 'Pergunta ativa', speech: 'Tem algum remédio que para essa dor na hora da crise?' }
    ],
    hiddenInfo: 'Consome álcool socialmente nos fins de semana; percebeu que numa das vezes que bebeu durante o período das crises, a dor foi muito mais intensa — só revela se o candidato perguntar sobre uso de álcool durante as crises ou fatores desencadeantes | Pai com histórico de "enxaqueca forte" — só revela se o candidato perguntar sobre histórico familiar de cefaleia',
    actorBehavior: 'Ansioso e levemente irritado com a situação. Colaborativo mas impaciente. Faz perguntas frequentes sobre o diagnóstico. Se o candidato for empático e organizado, relaxa progressivamente. Durante a descrição das crises, demonstra sofrimento e gesticula na região orbitária direita.'
  },
  instC: {
    diagnosis: 'Cefaleia em salvas episódica (Cluster Headache), em período ativo de salvas.',
    differentials: [
      'Enxaqueca sem aura — Exclui-se pela curta duração das crises (40–45 min), pela agitação psicomotora característica (na enxaqueca o paciente prefere repouso no escuro) e pelos sintomas autonômicos ipsilaterais proeminentes',
      'Cefaleia por hemicrania paroxística — Inclui-se pois tem duração curta e sintomas autonômicos; exclui-se pela frequência (hemicrania: > 5 crises/dia) e por responder a indometacina (útil para diferenciar)',
      'Neuralgia do trigêmeo — Exclui-se pela duração (neuralgia: segundos a 2 minutos), ausência de gatilho sensitivo facial e presença de sintomas autonômicos'
    ],
    context: 'Homem jovem, 34 anos, em período ativo de salvas há 15 dias, com crises unilaterais orbitárias direitas de 40–45 minutos, acompanhadas de hiperemia conjuntival, lacrimejamento e congestão nasal ipsilaterais, com agitação psicomotora típica. Quadro compatível com cefaleia em salvas episódica, a cefaleia primária mais incapacitante conhecida.',
    justify: 'O caso preenche todos os critérios diagnósticos da ICHD-3 para cefaleia em salvas: dor unilateral orbitária/supraorbitária de intensidade grave, duração de 15–180 minutos, com pelo menos 1 sintoma autonômico ipsilateral (hiperemia conjuntival, lacrimejamento, congestão nasal), ocorrência em salvas (período ativo de semanas), agitação psicomotora durante a crise e frequência de 1–2 crises/dia. A negatividade da TC afasta causas secundárias.',
    expectedAnamnesis: 'Localização exata da dor (orbitária, supraorbitária, temporal) | Duração de cada crise (15 a 180 minutos é o critério) | Frequência das crises por dia e há quantos dias/semanas | Presença de sintomas autonômicos ipsilaterais: hiperemia conjuntival, lacrimejamento, ptose, miose, rinorreia, congestão nasal, sudorese facial | Comportamento durante a crise (agitação vs. preferência por repouso) | Período de remissão anterior (episódica vs. crônica) | Uso de álcool durante o período das crises (fator desencadeante) | Medicações já usadas e resposta | Histórico familiar de cefaleia | Qualidade do sono (trabalho noturno, privação de sono como gatilho) | Investigação de causas secundárias: febre, rigidez de nuca, perda de peso, déficit neurológico',
    expectedPhysical: 'Sinais vitais: avaliar PA (descartar HAS); normais neste caso | Inspeção: ausência de ptose ou miose fora da crise; hiperemia conjuntival ausente entre crises | Neurológico completo: pupilas, pares cranianos, força, coordenação, reflexos — todos normais | Rigidez de nuca: ausente (afasta meningite) | Fundoscopia (se disponível): sem papiledema | Pontos dolorosos de face: ausentes (afasta sinusite)',
    expectedExams: [
      { exam: 'TC de crânio sem contraste', justify: 'Afastar causas secundárias (tumor, aneurisma, processo expansivo)', expected: 'Normal' },
      { exam: 'Hemograma e glicemia', justify: 'Triagem de causas sistêmicas', expected: 'Normais' },
      { exam: 'TSH', justify: 'Afastar hipotireoidismo como fator contribuinte', expected: 'Normal' },
      { exam: 'RM de crânio com contraste (encaminhar)', justify: 'Investigação complementar em cefaleia em salvas nova para afastar lesão hipotalâmica ou aneurisma', expected: 'A ser realizada ambulatorialmente' }
    ],
    expectedConduct: 'Farmacológica: Tratamento abortivo da crise: Sumatriptana 6 mg SC (1ª escolha) — ⚠️ disponibilidade limitada no SUS; alternativa: sumatriptana 20 mg intranasal. Oxigenoterapia 100% com máscara facial, 7–12 L/min por 15–20 minutos (altamente eficaz e disponível). Tratamento preventivo (durante o período de salvas): Verapamil 80 mg VO 3x/dia (dose inicial), com titulação até 240–480 mg/dia — 1ª escolha segundo diretrizes ⚠️ (baseado em consenso internacional; SBN referencia o mesmo esquema). Corticoide de curta duração (prednisona 60–100 mg/dia por 5 dias com desmame) pode ser usado como "ponte" até o verapamil fazer efeito. Evitar ergotamínicos por risco cardiovascular em uso crônico | Não farmacológica: Evitar álcool durante o período de salvas; regular sono; evitar altitudes elevadas e exposição a solventes | Encaminhamento: Neurologia ambulatorial para confirmação diagnóstica, RM de crânio e ajuste do preventivo | Orientações ao paciente: Explicar que a cefaleia em salvas é uma condição reconhecida, benigna, mas muito intensa; que existem tratamentos eficazes para a crise e para prevenir novas crises no período ativo; reforçar abstinência de álcool durante as salvas | Seguimento: Retorno em 2 semanas ou antes se piora; encaminhar neurologia',
    expectedCommunication: 'Apresentação: Apresentar-se pelo nome, cumprimentar o paciente, perguntar como ele está se sentindo | Comunicação do diagnóstico: Explicar que existe uma condição chamada "cefaleia em salvas", que é uma das dores de cabeça mais intensas que existem, mas que tem tratamento; tranquilizar sobre ausência de tumor | Escuta ativa: Permitir que o paciente descreva a dor sem interromper; validar o sofrimento ("entendo que está sendo muito difícil"); perguntar como a dor está afetando seu trabalho e vida pessoal',
    criticalErrors: [
      'Não solicitar ou não mencionar necessidade de neuroimagem para investigar cefaleia em salvas de início recente',
      'Prescrever opioides para tratamento abortivo da crise (ineficazes e com risco de cefaleia por uso excessivo de medicação)',
      'Não identificar os sintomas autonômicos ipsilaterais como parte do diagnóstico',
      'Diagnosticar enxaqueca sem investigar duração, comportamento na crise e sintomas autonômicos',
      'Não orientar abstinência de álcool durante o período de salvas (fator desencadeante reconhecido)'
    ]
  },
  instD: {
    title: 'CHECKLIST — CEFALEIA EM CRISES UNILATERAIS PERIORBITÁRIAS',
    sections: [
      {
        h: 'COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE',
        items: [
          { item: 'Apresentou-se pelo nome ao paciente', score: 0.5, ref: 'CFM 2.149/2016 — Relação médico-paciente' },
          { item: 'Perguntou como o paciente estava se sentindo emocionalmente diante das crises', score: 0.5, ref: 'Humanização em saúde — MS, 2013' },
          { item: 'Explicou o diagnóstico em linguagem acessível, sem jargão técnico', score: 0.5, ref: 'CFM 2.149/2016' }
        ]
      },
      {
        h: 'ANAMNESE',
        items: [
          { item: 'Investigou localização exata da dor (orbitária/supraorbitária/temporal)', score: 0.5, ref: 'ICHD-3 / SBN — Classificação das Cefaleias, 2018' },
          { item: 'Investigou duração de cada crise (perguntou quantos minutos dura)', score: 1.0, ref: 'ICHD-3 — critério diagnóstico obrigatório' },
          { item: 'Investigou frequência das crises por dia e há quantos dias', score: 0.5, ref: 'ICHD-3 / SBN, 2018' },
          { item: 'Perguntou sobre sintomas autonômicos ipsilaterais (olho vermelho, lacrimejamento, nariz entupido, ptose)', score: 1.0, ref: 'ICHD-3 — critério diagnóstico obrigatório' },
          { item: 'Perguntou sobre comportamento durante a crise (agitação vs. repouso)', score: 0.5, ref: 'ICHD-3 / UpToDate ⚠️' },
          { item: 'Investigou uso de álcool como fator desencadeante', score: 0.5, ref: 'SBN — Cefaleia em Salvas, 2018' },
          { item: 'Perguntou sobre medicações já usadas e resposta ao tratamento', score: 0.5, ref: 'Protocolo de cefaleia — MS/SUS' }
        ]
      },
      {
        h: 'EXAME FÍSICO',
        items: [
          { item: 'Avaliou sinais vitais (ao menos PA e FC)', score: 0.5, ref: 'Semiologia Médica — Porto & Porto, 8ª ed.' },
          { item: 'Realizou exame neurológico sumário (pupilas, força, reflexos)', score: 0.5, ref: 'SBN — Protocolo de cefaleia' },
          { item: 'Pesquisou rigidez de nuca para afastar meningite', score: 1.0, ref: 'MS — Protocolo de Meningite, 2017' }
        ]
      },
      {
        h: 'RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
        items: [
          { item: 'Formulou hipótese diagnóstica de cefaleia em salvas (ou similar: cefaleia trigêmino-autonômica)', score: 1.0, ref: 'ICHD-3 / SBN, 2018' },
          { item: 'Solicitou ou mencionou necessidade de neuroimagem (TC ou RM de crânio)', score: 0.5, ref: 'SBN — Cefaleia em Salvas; MS — Protocolo de Urgência' },
          { item: 'Mencionou pelo menos 1 diagnóstico diferencial pertinente (enxaqueca, hemicrania paroxística ou neuralgia do trigêmeo)', score: 0.5, ref: 'ICHD-3 / SBN, 2018' }
        ]
      },
      {
        h: 'CONDUTA E ORIENTAÇÃO AO PACIENTE',
        items: [
          { item: 'Propôs tratamento abortivo adequado (oxigenoterapia 100% e/ou sumatriptana)', score: 1.0, ref: 'SBN — Cefaleia em Salvas, 2018; UpToDate ⚠️' },
          { item: 'Propôs tratamento preventivo adequado (verapamil ou corticoide de curta duração)', score: 0.5, ref: 'SBN — Cefaleia em Salvas, 2018' },
          { item: 'Orientou abstinência de álcool durante o período de salvas', score: 0.5, ref: 'SBN, 2018' },
          { item: 'Encaminhou para neurologia ambulatorial', score: 0.5, ref: 'Protocolo de regulação de acesso — MS/SUS' },
          { item: 'Perguntou se o paciente tinha dúvidas antes de encerrar a consulta', score: 0.5, ref: 'Humanização em saúde — MS, 2013' }
        ]
      }
    ]
  }
},

{
  id: 2,
  title: 'Dor de cabeça em aperto quase todo dia',
  sub: 'UBS — Atenção Primária',
  tema: 'Neurologia',
  topic: 'cefaleia tensional',
  level: 'moderado',
  cardAccent: '#0891B2',
  instA: {
    scenario: 'Atenção Primária — UBS. Consultório, turno matutino.',
    patient: 'C.F., 41 anos, feminino, professora do ensino fundamental, sem diagnósticos prévios conhecidos.',
    complaint: 'Dor de cabeça em aperto quase todos os dias, há dois meses.',
    tasks: [
      'Realize a anamnese dirigida ao caso',
      'Realize o exame físico pertinente',
      'Formule a hipótese diagnóstica principal e os diagnósticos diferenciais relevantes',
      'Proponha a conduta terapêutica adequada',
      'Oriente a paciente sobre sua condição e medidas de autocuidado'
    ]
  },
  instB: {
    vitals: {
      PA: '122/78 mmHg',
      FC: '76 bpm',
      FR: '15 irpm',
      Tax: '36,4°C',
      Peso: '68 kg',
      Altura: '1,63 m',
      IMC: '25,6 kg/m²'
    },
    physicalGeneral: 'Bom estado geral, consciente, orientada, levemente tensa. Normocorada, hidratada, anicté
    physicalGeneral: 'Bom estado geral, consciente, orientada, levemente tensa. Normocorada, hidratada, anictérica. Sem sinais de sofrimento agudo.',
    physicalSeg: 'NEUROLÓGICO: Sem déficit focal. Pupilas isocóricas e fotorreagentes. Pares cranianos íntegros. Sem nistagmo. Sem rigidez de nuca. | MUSCULOESQUELÉTICO (CABEÇA/PESCOÇO): Tensão muscular à palpação da musculatura pericraniana (temporal, esternocleidomastoideo, trapézio bilateral). Sem pontos gatilho definidos. Cervical com mobilidade levemente reduzida por tensão. | OFTALMOLÓGICO: Sem alterações. Acuidade visual referida como normal, usa óculos para leitura há 3 anos.',
    labs: [
      { test: 'Hemograma', val: 'Normal', ref: '—', alt: false },
      { test: 'TSH', val: '1,8 mUI/L', ref: '0,4–4,0 mUI/L', alt: false },
      { test: 'Glicemia de jejum', val: '88 mg/dL', ref: '70–99 mg/dL', alt: false },
      { test: 'PCR', val: '3,2 mg/L', ref: '< 5 mg/L', alt: false }
    ],
    image: null,
    note: 'Entregar sinais vitais ao início da estação. Entregar exame físico somente se o candidato solicitar exame ou iniciar a avaliação. Entregar resultados laboratoriais somente se solicitados verbalmente. Neuroimagem não está disponível — neste caso, não é indicada rotineiramente para cefaleia tensional crônica sem sinais de alarme; se o candidato solicitar TC/RM sem justificativa de sinal de alarme, avaliar no checklist se a solicitação foi fundamentada.',
    patientProfile: 'C.F., 41 anos, feminino, professora do ensino fundamental, casada, 2 filhos. Trabalha em duas escolas, com carga horária de 40 horas semanais. Relata período de muita sobrecarga profissional nos últimos 3 meses.',
    script: [
      { trigger: 'Queixa principal', speech: 'Doutora, tô com uma dor de cabeça que não para. É todo dia quase, uma pressão na cabeça assim, como se tivesse um capacete apertando. Já faz dois meses assim.' },
      { trigger: 'Sobre localização e qualidade', speech: 'É dos dois lados, na testa e atrás da cabeça. Parece que tá apertando por fora, não é uma latejada.' },
      { trigger: 'Sobre intensidade', speech: 'É uma dor média, eu consigo trabalhar, mas incomoda muito. No final do dia piora.' },
      { trigger: 'Sobre náusea e luz', speech: 'Náusea não tenho, não. A luz incomoda um pouquinho mas não chega a ser insuportável.' },
      { trigger: 'Sobre frequência e duração', speech: 'Quase todo dia, às vezes o dia todo. Nos fins de semana melhora um pouco.' },
      { trigger: 'Sobre estresse', speech: 'Ah, tô muito estressada. São duas escolas, 40 alunos por turma, minha mãe tá doente também... É muita coisa.' },
      { trigger: 'Sobre sono', speech: 'Durmo mal, acordo no meio da noite pensando nos problemas. Às vezes fico até duas da manhã.' },
      { trigger: 'Sobre medicação', speech: 'Tomo dipirona ou ibuprofeno quase todo dia pra conseguir trabalhar. Às vezes tomo dois comprimidos por dia.' },
      { trigger: 'Pergunta ativa', speech: 'Doutora, isso pode ser tumor? Minha colega disse que dor de cabeça todo dia pode ser coisa grave.' },
      { trigger: 'Pergunta ativa', speech: 'Tem alguma coisa além de remédio que eu possa fazer pra melhorar?' }
    ],
    hiddenInfo: 'Está tomando ibuprofeno ou dipirona mais de 10 dias por mês há pelo menos 6 semanas — só revela se o candidato perguntar especificamente sobre a frequência de uso de analgésicos por mês | Recentemente aumentou o consumo de café para 5–6 xícaras por dia para aguentar a jornada — só revela se o candidato perguntar sobre consumo de cafeína',
    actorBehavior: 'Cansada e levemente ansiosa. Colaborativa e comunicativa. Faz perguntas sobre gravidade da condição (medo de tumor). Ao receber orientações claras e empáticas, demonstra alívio visível. Tem tendência a minimizar o próprio sofrimento ("consigo trabalhar, mas...").'
  },
  instC: {
    diagnosis: 'Cefaleia tensional crônica, com provável componente de cefaleia por uso excessivo de medicação (medication overuse headache — MOH).',
    differentials: [
      'Enxaqueca crônica — Inclui-se pela alta frequência (> 15 dias/mês); exclui-se pela qualidade em pressão (não pulsátil), localização bilateral, ausência de náusea/vômito e fotofobia intensa, e ausência de piora com atividade física',
      'Cefaleia por uso excessivo de medicação (MOH) — Deve ser considerada como diagnóstico concomitante dado o uso de analgésicos > 10 dias/mês por mais de 3 meses; pode coexistir com cefaleia tensional crônica',
      'Cefaleia secundária a distúrbio do sono — Inclui-se pelo sono fragmentado relatado; contribui para cronificação, mas não é diagnóstico principal isolado',
      'Hipertensão intracraniana idiopática — Exclui-se pela ausência de papiledema, sem obesidade mórbida, sem diplopia e sem progressão noturna/postural'
    ],
    context: 'Mulher de 41 anos, professora com alta carga de estresse laboral e privação de sono, apresentando cefaleia bilateral em pressão, de intensidade leve a moderada, com duração diária há 2 meses, sem sintomas autonômicos ou aura. O padrão clínico, a ausência de sinais de alarme e os fatores desencadeantes são típicos de cefaleia tensional crônica, com componente adicional de provável MOH por uso frequente de analgésicos.',
    justify: 'Preenche critérios da ICHD-3 para cefaleia tensional crônica: cefaleia em mais de 15 dias/mês por mais de 3 meses, bilateral, em pressão/aperto, intensidade leve-moderada, sem náusea/vômito, sem fotofobia ou fonofobia intensas, sem piora com atividade física. O uso de analgésicos simples em mais de 10 dias/mês por mais de 3 meses configura critérios para MOH concomitante, o que pode estar cronificando e amplificando o quadro. Ausência de sinais de alarme (SNOOP4) afasta causas secundárias.',
    expectedAnamnesis: 'Localização (bilateral vs. unilateral), qualidade (pressão vs. pulsátil), intensidade (EVA) | Duração das crises e frequência mensal (critério diagnóstico) | Presença ou ausência de náusea, vômito, fotofobia, fonofobia | Piora com atividade física (afasta enxaqueca) | Fatores desencadeantes: estresse, sono, postura, cafeína | Frequência de uso de analgésicos por mês (rastrear MOH) | Qualidade e padrão de sono | Histórico familiar de cefaleia | Sinais de alarme: febre, rigidez de nuca, déficit neurológico, piora progressiva, cefaleia ao acordar, cefaleia em trovoada | Uso de anticoncepcionais hormonais (pode modular enxaqueca) | Investigar ansiedade e depressão (comorbidades frequentes)',
    expectedPhysical: 'Sinais vitais: PA normal; afasta HAS como causa | Inspeção: bom estado geral, sem sinais de HIC (papiledema, alteração de consciência) | Palpação da musculatura pericraniana: tensão em temporais, trapézio e ECM (achado típico) | Neurológico: normal — afasta causas secundárias | Rigidez de nuca: ausente — afasta meningite | Fundoscopia (se disponível): sem papiledema',
    expectedExams: [
      { exam: 'TSH', justify: 'Hipotireoidismo pode causar cefaleia crônica', expected: 'Normal' },
      { exam: 'Hemograma', justify: 'Anemia como fator contribuinte', expected: 'Normal' },
      { exam: 'Glicemia', justify: 'Hipoglicemia como fator desencadeante', expected: 'Normal' },
      { exam: 'TC/RM de crânio', justify: 'Indicada apenas se sinais de alarme presentes — NÃO indicada rotineiramente neste caso', expected: 'Não indicada; se solicitada sem justificativa, avaliar raciocínio clínico' }
    ],
    expectedConduct: 'Farmacológica: Tratamento preventivo (indicado na forma crônica): Amitriptilina 10–25 mg/dia VO à noite (1ª escolha para cefaleia tensional crônica — RENAME/MS). Aumentar dose progressivamente conforme resposta e tolerância. Tratar o MOH: orientar retirada gradual dos analgésicos de uso excessivo; dipirona e AINEs devem ser limitados a no máximo 10 dias/mês. Analgésico de resgate: manter dipirona 1g para crises intensas, com limite de uso | Não farmacológica: Higiene do sono, técnicas de relaxamento (respiração diafragmática, mindfulness), atividade física regular (30 min, 3–5x/semana), limitar cafeína, psicoterapia cognitivo-comportamental se disponível | Encaminhamento: Não obrigatório; manter em seguimento na UBS. Encaminhar neurologia se não responder ao preventivo após 3 meses | Orientações ao paciente: Explicar que não há evidência de tumor; que a dor está relacionada a tensão muscular, estresse e possivelmente ao uso frequente de analgésicos; que o tratamento é eficaz mas exige consistência | Seguimento: Retorno em 4 semanas para avaliar resposta ao preventivo e adesão; diário de cefaleia',
    expectedCommunication: 'Apresentação: Apresentar-se pelo nome, oferecer assento, perguntar como a paciente está | Comunicação do diagnóstico: Explicar que a cefaleia tensional crônica é comum em pessoas com sobrecarga, que não tem relação com tumor, e que o tratamento envolve medicação e mudança de hábitos | Escuta ativa: Perguntar sobre o impacto na vida pessoal e profissional; validar o sofrimento ("entendo que estar com dor todo dia é muito cansativo"); não minimizar a queixa',
    criticalErrors: [
      'Não investigar frequência de uso de analgésicos (perder o diagnóstico de MOH concomitante)',
      'Prescrever opioide ou combinar analgésicos sem justificativa (agrava o MOH)',
      'Solicitar TC de crânio sem identificar qualquer sinal de alarme (conduta desnecessária e não custo-efetiva)',
      'Não pesquisar sinais de alarme da cefaleia (SNOOP4) antes de afirmar diagnóstico primário',
      'Não orientar sobre limitação do uso de analgésicos de resgate (perpetua o MOH)'
    ]
  },
  instD: {
    title: 'CHECKLIST — DOR DE CABEÇA EM APERTO QUASE TODOS OS DIAS',
    sections: [
      {
        h: 'COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE',
        items: [
          { item: 'Apresentou-se pelo nome à paciente', score: 0.5, ref: 'CFM 2.149/2016' },
          { item: 'Perguntou como a paciente estava se sentindo emocionalmente / impacto na vida diária', score: 0.5, ref: 'Humanização em saúde — MS, 2013' },
          { item: 'Tranquilizou a paciente sobre a ausência de sinais de gravidade (tumor), com linguagem acessível', score: 0.5, ref: 'CFM 2.149/2016; PNH — MS' }
        ]
      },
      {
        h: 'ANAMNESE',
        items: [
          { item: 'Investigou localização, qualidade e intensidade da dor (bilateral, em pressão, EVA)', score: 0.5, ref: 'ICHD-3 / SBN — Cefaleia Tensional, 2018' },
          { item: 'Perguntou sobre frequência mensal das crises e duração', score: 1.0, ref: 'ICHD-3 — critério diagnóstico obrigatório' },
          { item: 'Investigou presença de náusea, vômito, fotofobia e fonofobia', score: 0.5, ref: 'ICHD-3 / SBN, 2018' },
          { item: 'Perguntou sobre frequência de uso de analgésicos por mês (rastrear MOH)', score: 1.0, ref: 'ICHD-3 — MOH; SBN, 2018' },
          { item: 'Investigou fatores desencadeantes: estresse, sono, postura, cafeína', score: 0.5, ref: 'SBN — Cefaleia Tensional, 2018' },
          { item: 'Pesquisou sinais de alarme (febre, déficit neurológico, piora progressiva, cefaleia ao acordar)', score: 0.5, ref: 'MS — Protocolo de Cefaleia; SBN, 2018' }
        ]
      },
      {
        h: 'EXAME FÍSICO',
        items: [
          { item: 'Avaliou PA e FC', score: 0.5, ref: 'Semiologia Médica — Porto & Porto, 8ª ed.' },
          { item: 'Palpou a musculatura pericraniana (temporal, trapézio, ECM) em busca de tensão', score: 0.5, ref: 'SBN — Cefaleia Tensional, 2018' },
          { item: 'Pesquisou rigidez de nuca', score: 0.5, ref: 'MS — Protocolo de Meningite, 2017' }
        ]
      },
      {
        h: 'RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
        items: [
          { item: 'Formulou hipótese diagnóstica de cefaleia tensional crônica', score: 1.0, ref: 'ICHD-3 / SBN, 2018' },
          { item: 'Identificou o uso excessivo de analgésicos como fator de cronificação (MOH)', score: 0.5, ref: 'ICHD-3 — MOH; SBN, 2018' },
          { item: 'Não solicitou TC/RM sem justificativa de sinal de alarme (uso racional de exames)', score: 0.5, ref: 'MS — Protocolo de Cefaleia; CFM — Uso racional de exames' }
        ]
      },
      {
        h: 'CONDUTA E ORIENTAÇÃO AO PACIENTE',
        items: [
          { item: 'Prescreveu tratamento preventivo adequado (amitriptilina 10–25 mg/noite)', score: 1.0, ref: 'RENAME 2022; SBN — Cefaleia Tensional' },
          { item: 'Orientou sobre limitação do uso de analgésicos de resgate (máx. 10 dias/mês)', score: 0.5, ref: 'SBN — MOH, 2018; ICHD-3' },
          { item: 'Orientou medidas não farmacológicas (sono, atividade física, gerenciamento de estresse)', score: 0.5, ref: 'MS — Práticas Integrativas; SBN, 2018' },
          { item: 'Perguntou se a paciente tinha dúvidas antes de encerrar', score: 0.5, ref: 'CFM 2.149/2016; PNH — MS' }
        ]
      }
    ]
  }
},

{
  id: 3,
  title: 'Dor de cabeça latejante com manchas visuais antes da dor',
  sub: 'UBS — Atenção Primária',
  tema: 'Neurologia',
  topic: 'enxaqueca com aura',
  level: 'moderado',
  cardAccent: '#DB2777',
  instA: {
    scenario: 'Atenção Primária — UBS. Consultório, turno vespertino.',
    patient: 'L.O., 28 anos, feminino, advogada, usuária de anticoncepcional oral combinado há 2 anos.',
    complaint: 'Dor de cabeça forte, latejando, com umas manchas visuais antes de começar.',
    tasks: [
      'Realize a anamnese dirigida ao caso',
      'Realize o exame físico pertinente',
      'Formule a hipótese diagnóstica e os diagnósticos diferenciais relevantes',
      'Proponha a conduta terapêutica adequada, incluindo decisão sobre o anticoncepcional',
      'Oriente a paciente sobre sua condição e plano de seguimento'
    ]
  },
  instB: {
    vitals: {
      PA: '118/74 mmHg',
      FC: '72 bpm',
      FR: '14 irpm',
      Tax: '36,3°C',
      Peso: '62 kg',
      Altura: '1,67 m',
      IMC: '22,2 kg/m²'
    },
    physicalGeneral: 'Bom estado geral, consciente, orientada, sem sofrimento agudo no momento (fora de crise). Normocorada, hidratada, anictérica.',
    physicalSeg: 'NEUROLÓGICO: Sem déficit focal no momento. Pupilas isocóricas e fotorreagentes. Pares cranianos íntegros. Força, sensibilidade e coordenação preservadas. Sem disartria. Sem rigidez de nuca. | OFTALMOLÓGICO: Acuidade visual normal. Sem alterações no campo visual no momento do exame. Fundoscopia: sem papiledema. | CARDIOVASCULAR: Ritmo regular em 2 tempos, sem sopros. Pulsos simétricos.',
    labs: [
      { test: 'Hemograma', val: 'Normal', ref: '—', alt: false },
      { test: 'Coagulograma (TP/TTPA)', val: 'Normal', ref: '—', alt: false },
      { test: 'Glicemia de jejum', val: '85 mg/dL', ref: '70–99 mg/dL', alt: false },
      { test: 'TSH', val: '1,6 mUI/L', ref: '0,4–4,0 mUI/L', alt: false }
    ],
    image: null,
    note: 'Entregar sinais vitais ao início da estação. Entregar exame físico somente se o candidato solicitar. Entregar exames laboratoriais somente se solicitados verbalmente. Neuroimagem não está disponível na estação — não é indicada rotineiramente para enxaqueca com aura típica sem sinais de alarme. Atentar para o ponto crítico da estação: a candidata usa anticoncepcional oral combinado, o que é contraindicado em enxaqueca com aura — decisão sobre suspensão é item essencial do caso.',
    patientProfile: 'L.O., 28 anos, feminino, advogada, solteira, sem filhos. Relata trabalhar sob pressão constante, com horas extras frequentes.',
    script: [
      { trigger: 'Queixa principal', speech: 'Doutora, tô tendo umas crises de dor de cabeça fortíssimas, sempre do lado esquerdo. Mas o que me assusta é que antes da dor vem umas manchas no olho, como um brilho em zigue-zague que vai crescendo.' },
      { trigger: 'Sobre a aura visual', speech: 'Dura uns 20 minutos esse negócio no olho. Depois some e aí começa a dor de cabeça. A dor lateja muito.' },
      { trigger: 'Sobre a dor em si', speech: 'É do lado esquerdo, latejando muito. Piora quando me mexo. Fico com muito enjoo e a luz incomoda demais, preciso ficar no escuro.' },
      { trigger: 'Sobre duração e frequência', speech: 'A crise dura umas 8, 10 horas. Já aconteceu umas 4 vezes no último mês.' },
      { trigger: 'Sobre o que melhora', speech: 'Fico deitada num quarto escuro e silencioso. Às vezes vomito e melhora um pouco. Tomo ibuprofeno mas demora pra fazer efeito.' },
      { trigger: 'Sobre anticoncepcional', speech: 'Tomo a pílula há 2 anos, funciona bem, nunca tive problema.' },
      { trigger: 'Sobre histórico familiar', speech: 'Minha mãe também tem enxaqueca, sofre muito com isso.' },
      { trigger: 'Sobre trabalho e estresse', speech: 'Trabalho muito, fico horas na frente do computador. As crises pioram quando estou mais estressada.' },
      { trigger: 'Pergunta ativa', speech: 'Doutora, esse negócio no olho pode ser algo grave no cérebro?' },
      { trigger: 'Pergunta ativa', speech: 'Preciso parar a pílula? Tem outro método que eu possa usar?' }
    ],
    hiddenInfo: 'É tabagista leve (3–4 cigarros por dia) — só revela se o candidato perguntar especificamente sobre tabagismo. Esse dado é crítico pois soma-se ao risco trombótico do anticoncepcional combinado + enxaqueca com aura | Teve um episódio de formigamento no braço esquerdo durante uma crise de enxaqueca há 1 mês, que durou cerca de 30 minutos — só revela se o candidato perguntar sobre sintomas neurológicos associados às crises',
    actorBehavior: "Ansiosa com os sintomas visuais, preocupada com possibilidade de doença grave. Colaborativa e articulada. Reage bem a explicações claras. Pode questionar a necessidade de parar o anticoncepcional ('mas eu uso há 2 anos e nunca tive problema'). Aceita a orientação se bem explicada."
  },
  instC: {
    diagnosis: 'Enxaqueca com aura típica (aura visual com cefaleia), em paciente de alto risco trombótico pelo uso de anticoncepcional oral combinado associado a tabagismo.',
    differentials: [
      'AIT (Ataque Isquêmico Transitório) — Inclui-se pela presença de sintomas neurológicos focais transitórios (aura visual e formigamento em braço); exclui-se pela natureza recorrente, estereotipada, progressiva lentamente (marcha enxaquecosa), ausência de déficit motor e pelo perfil jovem com histórico familiar',
      'Epilepsia occipital — Inclui-se pelos fenômenos visuais; exclui-se pois os fenômenos da epilepsia occipital são coloridos, circulares, duram segundos; a aura da enxaqueca é em zigue-zague, progride lentamente (20 min) e precede cefaleia',
      'Acidente Vascular Cerebral em jovem — Deve ser considerado especialmente pelo tabagismo + AOC + enxaqueca com aura; exclui-se pela ausência de déficit focal persistente; mas aumenta vigilância'
    ],
    context: 'Mulher jovem de 28 anos com enxaqueca com aura típica (fenômeno visual escotomatoso em zigue-zague por ~20 minutos, seguido de cefaleia unilateral pulsátil com náusea, fotofobia e fonofobia), com 4 crises no último mês. Contexto de risco trombótico elevado: enxaqueca com aura + anticoncepcional oral combinado + tabagismo. Histórico familiar de enxaqueca materno.',
    justify: 'Preenche critérios ICHD-3 para enxaqueca com aura típica: sintoma visual reversível (escotoma cintilante em zigue-zague), com progressão gradual em 20 minutos, seguido de cefaleia unilateral pulsátil, de alta intensidade, com náusea e fotofobia, com duração de 4–72h, recorrente. A aura visual é típica (escotoma cintilante fortifificado). O formigamento no braço durante crises pode representar aura sensitiva associada, o que não altera o diagnóstico mas aumenta a importância de afastar AIT. A combinação enxaqueca com aura + AOC + tabagismo eleva substancialmente o risco de AVCi.',
    expectedAnamnesis: 'Caracterização da aura: tipo (visual, sensitiva, motora, linguagem), duração (5–60 min), progressão gradual, reversibilidade | Caracterização da cefaleia: lateralidade, qualidade (pulsátil), intensidade, duração, piora com movimento | Sintomas acompanhantes: náusea, vômito, fotofobia, fonofobia | Frequência e duração das crises | Fatores desencadeantes: estresse, privação de sono, ciclo menstrual, cafeína, alimentos | Medicações em uso — especialmente anticoncepcional hormonal combinado | Tabagismo e etilismo (risco trombótico) | Histórico familiar de enxaqueca | Sinais de alarme: déficit neurológico persistente, alteração de consciência, cefaleia em trovoada, febre | Sintomas neurológicos associados às crises (formigamento, fraqueza, afasia)',
    expectedPhysical: 'Sinais vitais: PA normal | Neurológico completo: força, sensibilidade, coordenação, pares cranianos — normais (fora de crise) | Fundoscopia: sem papiledema | Rigidez de nuca: ausente',
    expectedExams: [
      { exam: 'RM de crânio com angiografia (encaminhar)', justify: 'Afastar malformação vascular, lesão isquêmica em jovem de alto risco', expected: 'Normal ou leucoaraiose mínima' },
      { exam: 'Coagulograma / pesquisa de trombofilias (encaminhar)', justify: 'Alto risco trombótico: AOC + enxaqueca com aura + tabagismo', expected: 'A definir em especialidade' },
      { exam: 'Hemograma', justify: 'Anemia como fator contribuinte', expected: 'Normal' },
      { exam: 'TSH', justify: 'Hipotireoidismo como causa de cefaleia', expected: 'Normal' }
    ],
    expectedConduct: 'Farmacológica: Tratamento abortivo das crises: Sumatriptana 50–100 mg VO (1ª escolha — triptano); alternativa: ibuprofeno 400–600 mg VO nas crises leves a moderadas. Metoclopramida 10 mg VO para náusea associada. Tratamento preventivo (≥ 4 crises/mês): Propranolol 40–80 mg/dia VO (1ª escolha no Brasil — RENAME) ou amitriptilina 25–75 mg/noite; topiramato 25–100 mg/dia é alternativa. SUSPENSÃO DO ANTICONCEPCIONAL ORAL COMBINADO: Contraindicado em enxaqueca com aura (Categoria 4 — OMS/MS). Risco de AVCi aumentado. Substituir por método não estrogênico: DIU hormonal (levonorgestrel), DIU de cobre, minipílula (progestagênio isolado) ou preservativo. Orientar cessação do tabagismo — risco trombótico adicional | Não farmacológica: Higiene do sono, diário de cefaleia, identificar e evitar gatilhos, atividade física regular | Encaminhamento: Neurologia ambulatorial (RM, ajuste do preventivo); Ginecologia para transição do método anticonceptivo | Orientações ao paciente: Explicar o risco aumentado de derrame cerebral com a combinação enxaqueca com aura + pílula + cigarro; tranquilizar que existem métodos anticoncepcionais seguros e eficazes | Seguimento: Retorno em 4 semanas; diário de cefaleia',
    expectedCommunication: 'Apresentação: Apresentar-se, criar vínculo, perguntar sobre o impacto das crises na vida profissional | Comunicação do diagnóstico: Explicar enxaqueca com aura em linguagem simples; informar o risco trombótico da combinação com o anticoncepcional e o tabagismo de forma clara, sem alarmismo | Escuta ativa: Acolher o medo de doença grave; validar preocupação com o anticoncepcional; apresentar alternativas contraceptivas',
    criticalErrors: [
      'Não identificar ou não suspender o anticoncepcional oral combinado em paciente com enxaqueca com aura (contraindicação absoluta — risco de AVCi)',
      'Não investigar tabagismo (fator de risco trombótico adicional crítico neste contexto)',
      'Não distinguir aura visual de enxaqueca de sintoma neurológico focal de AIT/AVC (não rastrear sinais de alarme)',
      'Prescrever ergotamínicos (contraindicados em enxaqueca com aura por risco vasospástico)',
      'Não propor tratamento preventivo em paciente com ≥ 4 crises por mês'
    ]
  },
  instD: {
    title: 'CHECKLIST — DOR DE CABEÇA LATEJANTE COM MANCHAS VISUAIS',
    sections: [
      {
        h: 'COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE',
        items: [
          { item: 'Apresentou-se pelo nome à paciente', score: 0.5, ref: 'CFM 2.149/2016' },
          { item: 'Perguntou sobre o impacto das crises na vida pessoal e profissional', score: 0.5, ref: 'Humanização em saúde — MS, 2013' },
          { item: 'Explicou o diagnóstico e o risco do anticoncepcional em linguagem acessível, sem alarmismo', score: 0.5, ref: 'CFM 2.149/2016; PNH — MS' }
        ]
      },
      {
        h: 'ANAMNESE',
        items: [
          { item: 'Caracterizou a aura (tipo, duração, progressão gradual, reversibilidade)', score: 1.0, ref: 'ICHD-3 / SBN — Enxaqueca com Aura, 2018' },
          { item: 'Investigou a cefaleia (lateralidade, qualidade pulsátil, intensidade, duração)', score: 0.5, ref: 'ICHD-3 / SBN, 2018' },
          { item: 'Investigou náusea, vômito, fotofobia e fonofobia', score: 0.5, ref: 'ICHD-3 — critérios diagnósticos' },
          { item: 'Perguntou sobre uso de anticoncepcional hormonal combinado', score: 1.0, ref: 'OMS — Critérios de Elegibilidade, 2015; MS/FEBRASGO' },
          { item: 'Investigou tabagismo', score: 0.5, ref: 'MS — Tabagismo e Risco Trombótico; FEBRASGO' },
          { item: 'Pesquisou sinais de alarme (déficit neurológico persistente, cefaleia em trovoada, febre)', score: 0.5, ref: 'SBN — Protocolo de Cefaleia, 2018' }
        ]
      },
      {
        h: 'EXAME FÍSICO',
        items: [
          { item: 'Avaliou PA e FC', score: 0.3, ref: 'Semiologia Médica — Porto & Porto, 8ª ed.' },
          { item: 'Realizou exame neurológico completo (força, sensibilidade, coordenação, pares cranianos)', score: 0.5, ref: 'SBN — Protocolo de Cefaleia, 2018' },
          { item: 'Pesquisou rigidez de nuca', score: 0.5, ref: 'MS — Protocolo de Meningite, 2017' }
        ]
      },
      {
        h: 'RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
        items: [
          { item: 'Formulou hipótese diagnóstica de enxaqueca com aura', score: 1.0, ref: 'ICHD-3 / SBN, 2018' },
          { item: 'Identificou a contraindicação do AOC em enxaqueca com aura e propôs suspensão', score: 1.0, ref: 'OMS — Critérios de Elegibilidade Cat. 4; MS/FEBRASGO' },
          { item: 'Mencionou encaminhamento para neurologia ou solicitou RM de crânio', score: 0.2, ref: 'SBN, 2018; MS — Regulação de Acesso' }
        ]
      },
      {
        h: 'CONDUTA E ORIENTAÇÃO AO PACIENTE',
        items: [
          { item: 'Propôs tratamento abortivo adequado (triptano e/ou AINE + antiemético)', score: 0.5, ref: 'RENAME 2022; SBN — Enxaqueca, 2018' },
          { item: 'Propôs tratamento preventivo adequado (propranolol ou amitriptilina)', score: 0.5, ref: 'RENAME 2022; SBN, 2018' },
          { item: 'Orientou sobre método contraceptivo alternativo não estrogênico', score: 0.5, ref: 'OMS — Critérios de Elegibilidade; FEBRASGO' },
          { item: 'Orientou cessação do tabagismo', score: 0.3, ref: 'MS — Tabagismo; INCA' },
          { item: 'Perguntou se a paciente tinha dúvidas antes de encerrar', score: 0.2, ref: 'CFM 2.149/2016; PNH — MS' }
        ]
      }
    ]
  }
},

{
  id: 4,
  title: 'A pior dor de cabeça da minha vida',
  sub: 'UPA — Urgência e Emergência',
  tema: 'Neurologia',
  topic: 'hemorragia subaracnoidea',
  level: 'moderado',
  cardAccent: '#DC2626',
  instA: {
    scenario: 'Urgência e Emergência — UPA. Sala de triagem / consultório de urgência, turno noturno.',
    patient: 'M.T., 47 anos, feminino, contadora, hipertensa em uso irregular de anti-hipertensivo.',
    complaint: "Dor de cabeça muito forte que começou de repente há 3 horas, disse que foi 'a pior dor de cabeça da vida'.",
    tasks: [
      'Realize a anamnese dirigida e objetiva ao caso',
      'Realize o exame físico pertinente à urgência neurológica',
      'Solicite e interprete os exames complementares adequados',
      'Formule a hipótese diagnóstica e estabeleça a conduta imediata',
      'Comunique à paciente a gravidade do quadro e a necessidade de internação/encaminhamento'
    ]
  },
  instB: {
    vitals: {
      PA: '168/102 mmHg',
      FC: '94 bpm',
      FR: '18 irpm',
      Tax: '37,1°C',
      Peso: '74 kg',
      Altura: '1,61 m',
      IMC: '28,5 kg/m²'
    },
    physicalGeneral: 'Regular estado geral, consciente (Glasgow 14 — desorientada em tempo), agitada, com expressão de dor intensa. Normocorada, hidratada, anictérica. Mãos frias.',
    physicalSeg: 'NEUROLÓGICO: Glasgow 14 (abertura ocular ao comando verbal — 3, resposta verbal confusa — 4, resposta motora obedece comandos — 6). Pupilas isocóricas e fotorreagentes, sem anisocoria. Sem déficit motor focal evidente. Sem afasia. Fundoscopia: hemorragia subhialoidea em olho esquerdo (sinal de Terson). | MENÍNGEO: Rigidez de nuca presente (queixo não toca o esterno). Sinal de Kernig positivo bilateralmente. Sinal de Brudzinski positivo. | CARDIOVASCULAR: Ritmo regular em 2 tempos, sem sopros. Pulsos radiais simétricos. | RESPIRATÓRIO: Murmúrio vesicular presente bilateralmente, sem ruídos adventícios.',
    labs: [
      { test: 'Hemograma', val: 'Leucócitos 11.200/mm³ (sem desvio)', ref: '4.000–10.000/mm³', alt: true },
      { test: 'Coagulograma (TP)', val: '13,2 s (INR 1,1)', ref: '11–14 s', alt: false },
      { test: 'TTPA', val: '31 s', ref: '25–35 s', alt: false },
      { test: 'Glicemia', val: '148 mg/dL', ref: '70–99 mg/dL', alt: true },
      { test: 'Sódio', val: '138 mEq/L', ref: '135–145 mEq/L', alt: false },
      { test: 'Potássio', val: '3,8 mEq/L', ref: '3,5–5,0 mEq/L', alt: false },
      { test: 'Creatinina', val: '0,9 mg/dL', ref: '0,5–1,1 mg/dL', alt: false }
    ],
    image: 'Tomografia de crânio sem contraste (realizada na UPA): Hiperdensidade nas cisternas basais (cisterna supraselar e sylviana bilateral), sulcos da convexidade e fissura sylviana esquerda, compatível com hemorragia subaracnoidea. Ausência de desvio de linha média. Ventrículos de dimensões normais. Sem hematoma intraparenquimatoso associado. Fisher 3 / Hunt-Hess 2.',
    note: 'Entregar sinais vitais ao início da estação. Entregar exame físico somente se o candidato realizar o exame ou solicitar. Entregar exames laboratoriais somente se solicitados verbalmente. Entregar o laudo da TC somente se o candidato solicitar a TC de crânio — é o exame central da estação. Informar que a TC foi realizada na própria UPA, resultado disponível em 20 minutos.',
    patientProfile: "M.T., 47 anos, feminino, contadora, casada, 2 filhos adultos. Hipertensa há 6 anos, em uso de losartana 50 mg, que relata tomar 'às vezes'. Nega cirurgias prévias. Nunca teve cefaleia assim antes.",
    script: [
      { trigger: 'Queixa principal', speech: 'Doutor, eu nunca senti uma dor assim na minha vida. Eu tava trabalhando e de repente, do nada, foi como se tivesse levado uma pancada na cabeça. A dor veio em um segundo e ficou assim, fortíssima. Faz 3 horas e não passou nada.' },
      { trigger: 'Sobre início da dor', speech: 'Foi instantânea. Eu não senti aquela dor vindo... ela já chegou no máximo. Nunca tive dor assim antes.' },
      { trigger: 'Sobre localização', speech: 'É a cabeça inteira, mas dói muito na nuca também. Parece que meu pescoço tá duro.' },
      { trigger: 'Sobre náusea e vômito', speech: 'Vomitei duas vezes depois que começou. Tô com muita enjoo ainda.' },
      { trigger: 'Sobre consciência', speech: 'Fiquei meio tonta, acho que desmaiei um segundo logo no começo. Meu marido ficou assustado.' },
      { trigger: 'Sobre luz e ruído', speech: 'Tô com dificuldade de olhar pra essa luz. Incomoda demais.' },
      { trigger: 'Sobre medicamentos em uso', speech: 'Tomo losartana, mas às vezes esqueço... confesso que faz uns 4 dias que não tomo.' },
      { trigger: 'Sobre histórico de cefaleia', speech: 'Nunca fui de dor de cabeça não. Essa foi a primeira vez assim.' },
      { trigger: 'Pergunta ativa', speech: 'Doutor, é grave? O que tá acontecendo comigo?' },
      { trigger: 'Pergunta ativa', speech: 'Precisa internar? Vou ficar bem?' }
    ],
    hiddenInfo: "Há 2 semanas teve uma cefaleia muito forte que durou algumas horas e passou sozinha — ela não associou à queixa atual e não mencionou espontaneamente; só revela se o candidato perguntar sobre episódios anteriores de cefaleia intensa ou 'dor de cabeça sentinela' | Tabagista: 1 maço/dia há 20 anos — só revela se o candidato perguntar diretamente sobre tabagismo",
    actorBehavior: 'Muito ansiosa e com dor intensa (demonstrar expressão de dor, segurar a cabeça, fechar os olhos quando luz direta). Confusa em tempo. Colaborativa dentro do possível. Reage com medo quando informada da gravidade. Marido pode ser mencionado como presente, mas não está na sala.'
  },
  instC: {
    diagnosis: 'Hemorragia subaracnoidea (HSA) espontânea, Hunt-Hess grau 2, Fisher 3. Etiologia mais provável: rotura de aneurisma intracraniano.',
    differentials: [
      'Meningite bacteriana — Inclui-se pela rigidez de nuca e cefaleia intensa; exclui-se pelo início instantâneo (trovoada), ausência de febre significativa, TC com sangue nas cisternas e ausência de síndrome infecciosa prodrômica',
      'Crise hipertensiva com hematoma intracerebral — Inclui-se pela PA elevada e história de HAS; exclui-se pela TC que mostra HSA sem hematoma intraparenquimatoso e pelo padrão de dor em trovoada',
      'Enxaqueca grave — Exclui-se pelo início súbito em trovoada (não progressivo), pela presença de rigidez de nuca, pela TC alterada e pelo episódio de perda de consciência'
    ],
    context: 'Mulher de 47 anos, hipertensa com controle irregular, tabagista, que evolui com cefaleia em trovoada de início súbito, associada a náusea, vômito, fotofobia, síndrome meníngea e alteração leve de consciência. TC de crânio confirma HSA com sangue nas cisternas basais, Fisher 3, Hunt-Hess 2. Quadro de emergência neurovascular com elevada morbimortalidade.',
    justify: "A cefaleia em trovoada (thunderclap headache) — de início instantâneo, máxima intensidade em menos de 1 minuto — associada a síndrome meníngea (rigidez de nuca, Kernig e Brudzinski positivos), alteração de consciência, vômitos e fotofobia é a apresentação clássica de HSA. A TC de crânio sem contraste confirmou sangue nas cisternas basais. Sinal de Terson (hemorragia subhialoidea) é patognomônico de HSA com aumento agudo da PIC. Episódio de 'dor de cabeça sentinela' há 2 semanas pode representar sangramento sentinela prévio — dado de alto impacto prognóstico.",
    expectedAnamnesis: "Caracterização do início da dor: instantâneo vs. progressivo (critério de trovoada) | Intensidade máxima desde o início ('a pior da vida') | Localização (occipital/difusa), rigidez cervical associada | Episódio prévio de cefaleia intensa (sangramento sentinela) | Perda de consciência ou confusão mental | Náusea, vômito, fotofobia, fonofobia | Histórico de HAS e adesão ao tratamento | Uso de anticoagulantes ou antiagregantes | Tabagismo (fator de risco para aneurisma) | Histórico familiar de aneurisma ou HSA | Esforço físico no momento do início (não presente neste caso)",
    expectedPhysical: 'Sinais vitais: PA elevada (168/102) — controlar com cuidado para não hipoperfundir | Glasgow: avaliar e registrar (14 neste caso) | Pupilas: isocóricas (afasta herniação) | Rigidez de nuca: presente — sinal meníngeo essencial | Sinal de Kernig: resistência à extensão do joelho com quadril fletido a 90° | Sinal de Brudzinski: flexão involuntária dos joelhos ao fletir o pescoço | Fundoscopia: hemorragia subhialoidea (Sinal de Terson — patognomônico) | Déficit focal: ausente neste caso',
    expectedExams: [
      { exam: 'TC de crânio sem contraste', justify: 'Exame de 1ª escolha para HSA — sensibilidade > 95% nas primeiras 6h', expected: 'Hiperdensidade cisternas basais' },
      { exam: 'Punção lombar (se TC normal e suspeita mantida)', justify: 'Detectar xantocromia se TC negativa (sensibilidade > 99% após 12h)', expected: 'Não realizada neste caso (TC positiva)' },
      { exam: 'Hemograma e coagulograma', justify: 'Afastar coagulopatia, avaliar condições basais', expected: 'Leucocitose leve reativa; coagulação normal' },
      { exam: 'Glicemia', justify: 'Controle em urgência neurológica', expected: 'Elevada (estresse)' },
      { exam: 'Eletrólitos e função renal', justify: 'Monitoramento — HSA pode causar SIADH e hiponatremia', expected: 'Normais' },
      { exam: 'Angiotomografia de crânio (encaminhar/acionar neurocirurgia)', justify: 'Identificar aneurisma', expected: 'A ser realizado em centro especializado' }
    ],
    expectedConduct: 'Imediata: Estabilização clínica — decúbito elevado 30°, acesso venoso calibroso, monitorização contínua (ECG, oximetria, PA) | Farmacológica: Analgesia: Dipirona 1g EV + morfina se dor refratária (com cautela pelo nível de consciência). Controle da PA: Meta PA sistólica < 160 mmHg antes do tratamento do aneurisma — usar nicardipina EV (se disponível) ou labetalol EV ⚠️; evitar hipotensão. Nimodipina 60 mg VO a cada 4 horas — iniciada nas primeiras 96h para prevenção de vasoespasmo (reduz isquemia tardia). Antieméticos: Metoclopramida 10 mg EV. Profilaxia de convulsão: fenitoína ou levetiracetam — controverso, avaliar caso a caso ⚠️ | Não farmacológica: Repouso absoluto, ambiente calmo com pouca luz, cabeceira 30°, NPO se Glasgow < 13 | Encaminhamento: Transferência imediata para hospital de referência com neurocirurgia e UTI neurológica — SAMU/regulação médica | Orientações: Comunicar de forma clara e empática a gravidade, necessidade de internação e transferência; incluir familiar na comunicação | Seguimento: UTI neurológica — não aplicável na UPA',
    expectedCommunication: 'Apresentação: Apresentar-se, estabelecer contato rápido mas humanizado em contexto de urgência | Comunicação do diagnóstico: Informar que a dor de cabeça é muito grave, que há sangramento ao redor do cérebro, que precisará ser internada e transferida para um hospital especializado; chamar o familiar para a comunicação | Escuta ativa: Validar o medo, responder às perguntas de forma honesta mas tranquilizadora quanto ao que será feito',
    criticalErrors: [
      'Não solicitar TC de crânio em paciente com cefaleia em trovoada (falha diagnóstica grave)',
      'Alta ou encaminhamento ambulatorial sem diagnóstico de HSA confirmado',
      'Não pesquisar síndrome meníngea (rigidez de nuca, Kernig, Brudzinski)',
      'Realizar punção lombar sem TC prévia em paciente com alteração de consciência (risco de herniação)',
      'Não iniciar nimodipina nas primeiras horas (deixar de prevenir vasoespasmo)',
      'Não acionar transferência para neurocirurgia / regulação médica'
    ]
  },
  instD: {
    title: 'CHECKLIST — A PIOR DOR DE CABEÇA DA MINHA VIDA',
    sections: [
      {
        h: 'COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE',
        items: [
          { item: 'Apresentou-se pelo nome à paciente', score: 0.3, ref: 'CFM 2.149/2016' },
          { item: 'Comunicou a gravidade do quadro de forma clara, empática e incluiu familiar', score: 0.5, ref: 'Humanização em saúde — MS, 2013; CFM' },
          { item: 'Explicou a necessidade de internação e transferência em linguagem acessível', score: 0.5, ref: 'CFM 2.149/2016; PNH — MS' }
        ]
      },
      {
        h: 'ANAMNESE',
        items: [
          { item: 'Caracterizou o início súbito/instantâneo da dor (cefaleia em trovoada)', score: 1.0, ref: 'SBN — Cefaleia em Trovoada; MS — Urgências Neurológicas' },
          { item: 'Perguntou sobre intensidade máxima e comparação com cefaleias anteriores', score: 0.5, ref: 'SBN, 2018; ICHD-3' },
          { item: 'Investigou sintomas associados: náusea, vômito, fotofobia, perda de consciência', score: 0.5, ref: 'SBN — HSA, 2018' },
          { item: 'Perguntou sobre episódios prévios de cefaleia intensa (sangramento sentinela)', score: 0.5, ref: 'SBN — HSA; UpToDate ⚠️' },
          { item: 'Investigou HAS e adesão ao tratamento', score: 0.3, ref: 'MS — HAS, 2022' }
        ]
      },
      {
        h: 'EXAME FÍSICO',
        items: [
          { item: 'Avaliou Glasgow e registrou corretamente', score: 0.5, ref: 'MS — Urgências Neurológicas; ATLS' },
          { item: 'Avaliou PA e pupilas', score: 0.5, ref: 'MS — Urgências Neurológicas, 2022' },
          { item: 'Pesquisou rigidez de nuca', score: 1.0, ref: 'MS — Protocolo de Meningite; SBN — HSA' },
          { item: 'Pesquisou sinais de Kernig e/ou Brudzinski', score: 0.5, ref: 'SBN — HSA; MS — Urgências Neurológicas' }
        ]
      },
      {
        h: 'RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
        items: [
          { item: 'Formulou hipótese diagnóstica de hemorragia subaracnoidea', score: 1.0, ref: 'SBN — HSA; MS — Urgências Neurológicas' },
          { item: 'Solicitou TC de crânio sem contraste como 1ª escolha', score: 1.0, ref: 'SBN — HSA, 2018; MS — Protocolo de Urgência' },
          { item: 'Mencionou punção lombar como alternativa se TC normal com suspeita mantida', score: 0.3, ref: 'SBN — HSA, 2018' }
        ]
      },
      {
        h: 'CONDUTA E ORIENTAÇÃO AO PACIENTE',
        items: [
          { item: 'Prescreveu nimodipina para prevenção de vasoespasmo', score: 0.5, ref: 'SBN — HSA; Anvisa/RENAME 2022' },
          { item: 'Controlou PA dentro da meta (sem hipotensão)', score: 0.5, ref: 'SBN — HSA; MS — Urgências Neurológicas' },
          { item: 'Acionou transferência para neurocirurgia / regulação médica (SAMU)', score: 1.0, ref: 'MS — Regulação de Urgência; SBN — HSA' }
        ]
      }
    ]
  }
},

{
  id: 5,
  title: 'Fraqueza nas pernas que começou há uma semana e está subindo',
  sub: 'UPA — Urgência e Emergência',
  tema: 'Neurologia',
  topic: 'síndrome de Guillain-Barré',
  level: 'moderado',
  cardAccent: '#D97706',
  instA: {
    scenario: 'Urgência e Emergência — UPA. Consultório de urgência, turno diurno.',
    patient: 'F.N., 38 anos, masculino, professor universitário, sem comorbidades conhecidas.',
    complaint: 'Fraqueza nas pernas que começou há uma semana e está subindo para os braços.',
    tasks: [
      'Realize a anamnese dirigida ao caso',
      'Realize o exame físico neurológico pertinente',
      'Solicite os exames complementares adequados',
      'Formule a hipótese diagnóstica e os diagnósticos diferenciais relevantes',
      'Estabeleça a conduta e comunique ao paciente a necessidade de internação'
    ]
  },
  instB: {
    vitals: {
      PA: '132/84 mmHg',
      FC: '102 bpm',
      FR: '22 irpm',
      Tax: '36,8°C',
      Peso: '78 kg',
      Altura: '1,79 m',
      IMC: '24,3 kg/m²'
    },
    physicalGeneral: 'Regular estado geral, consciente, orientado, ansioso. Normocorado, hidratado, anictérico. Fala preservada. Deambulação comprometida — necessita de apoio para se locomover.',
    physicalSeg: 'NEUROLÓGICO — MOTOR: Fraqueza muscular simétrica e ascendente. Força grau 3/5 em membros inferiores (quadríceps, tibial anterior). Força grau 4/5 em membros superiores distais (preensão). Força grau 5/5 em musculatura proximal de MMSS. Sem déficit de força em musculatura facial ou respiratória no momento. | NEUROLÓGICO — REFLEXOS: Arreflexia profunda global (patelar, aquileu, bicipital e tricipital abolidos bilateralmente). | NEUROLÓGICO — SENSIBILIDADE: Parestesias em luva e meia (formigamento e sensação de queimação em pés e mãos). Propriocepção e vibração discretamente reduzidas em pés. | NEUROLÓGICO — COORDENAÇÃO: Prejudicada pela fraqueza; sem ataxia cerebelar. | RESPIRATÓRIO: Murmúrio vesicular presente, sem ruídos adventícios. FR 22 irpm. SpO₂ 97% em ar ambiente. | CARDIOVASCULAR: Taquicardia sinusal. Sem alterações adicionais.',
    labs: [
      { test: 'Hemograma', val: 'Normal', ref: '—', alt: false },
      { test: 'PCR', val: '18 mg/L', ref: '< 5 mg/L', alt: true },
      { test: 'VHS', val: '42 mm/h', ref: '< 20 mm/h', alt: true },
      { test: 'Glicemia', val: '91 mg/dL', ref: '70–99 mg/dL', alt: false },
      { test: 'Sódio', val: '137 mEq/L', ref: '135–145 mEq/L', alt: false },
      { test: 'Potássio', val: '3,9 mEq/L', ref: '3,5–5,0 mEq/L', alt: false },
      { test: 'Creatinina', val: '0,8 mg/dL', ref: '0,6–1,2 mg/dL', alt: false },
      { test: 'Gasometria arterial', val: 'pH 7,42 / PaO₂ 88 mmHg / PaCO₂ 36 mmHg', ref: 'pH 7,35–7,45 / PaO₂ > 80', alt: false }
    ],
    image: 'Análise do Líquor (punção lombar realizada na UPA): Aspecto: límpido e incolor. Pressão de abertura: 16 cmH₂O. Celularidade: 3 células/mm³ (referência < 5). Proteínas: 98 mg/dL (referência 15–45 mg/dL) — ELEVADA. Glicose: 62 mg/dL (glicemia simultânea: 91 mg/dL — relação 0,68 — normal). Bacterioscopia: negativa. Cultura: pendente. Dissociação albuminocitológica presente.',
    note: 'Entregar sinais vitais ao início. Entregar exame físico se o candidato realizar o exame. Entregar exames laboratoriais se solicitados verbalmente. Entregar o resultado do líquor somente se o candidato solicitar punção lombar ou análise do LCR. Atentar para a monitorização respiratória — candidato deve solicitar ou mencionar SpO₂ e capacidade vital forçada (CV) como parâmetros de vigilância respiratória. A gasometria está disponível se solicitada.',
    patientProfile: 'F.N., 38 anos, masculino, professor universitário, casado, 1 filho. Ativo fisicamente, sem comorbidades. Relata episódio de diarreia aguda há 3 semanas, tratado em casa com hidratação.',
    script: [
      { trigger: 'Queixa principal', speech: 'Doutor, faz uma semana que eu tô sentindo minha perna fraca. No começo pensei que era falta de exercício, mas foi piorando. Hoje tô com dificuldade até de subir escada e sinto as mãos formigando também.' },
      { trigger: 'Sobre progressão', speech: 'Começou nos pés, um formigamento, depois a fraqueza. Foi subindo devagar, dia a dia. Agora chegou nas mãos.' },
      { trigger: 'Sobre simetria', speech: 'Dos dois lados igual. Não é mais fraco de um lado que do outro não.' },
      { trigger: 'Sobre episódio infeccioso prévio', speech: 'Ah, umas 3 semanas atrás eu tive uma diarreia feia, durou uns 4 dias. Pensei que era viagem, mas passou sozinha.' },
      { trigger: 'Sobre dificuldade respiratória', speech: 'Tô sentindo que tô cansando mais pra respirar... quando subo escada fico sem ar mais rápido que antes.' },
      { trigger: 'Sobre dor', speech: 'Tenho uma dorzinha nas costas, bem na lombar. Não é forte, mas tá lá.' },
      { trigger: 'Sobre movimentos dos olhos e face', speech: 'O rosto tá normal, consigo sorrir, fechar o olho... isso tá bom ainda.' },
      { trigger: 'Sobre medicações', speech: 'Não tomo nada, nunca precisei.' },
      { trigger: 'Pergunta ativa', speech: 'Doutor, isso pode ser paralisia? Vai ficar assim?' },
      { trigger: 'Pergunta ativa', speech: 'Preciso internar? É grave?' }
    ],
    hiddenInfo: "Teve infecção respiratória (resfriado com tosse) há 4 semanas, antes da diarreia — só revela se o candidato perguntar especificamente sobre infecções ou doenças nos últimos 2 meses | Percebeu que a bexiga está 'comportando-se diferente', com sensação de retenção urinária leve — só revela se o candidato perguntar sobre controle de esfíncteres",
    actorBehavior: "Assustado e ansioso, mas colaborativo. Intelectualizado — faz perguntas sobre diagnóstico e prognóstico. Demonstra dificuldade ao tentar se levantar da maca (simular esforço e necessidade de apoio). Ao ouvir sobre necessidade de internação, reage com preocupação ('tenho aulas amanhã')."
  },
  instC: {
    diagnosis: 'Síndrome de Guillain-Barré (SGB) — Polirradiculoneuropatia inflamatória aguda desmielinizante (AIDP), forma mais comum no Brasil.',
    differentials: [
      'Mielite transversa aguda — Inclui-se pela fraqueza ascendente e parestesias; exclui-se pela ausência de nível sensitivo, pelos reflexos abolidos (na mielite são hiperativos na fase crônica), e pela dissociação albuminocitológica no líquor sem pleocitose',
      'Hipocalemia grave com paralisia periódica — Inclui-se pela fraqueza simétrica e arreflexia; exclui-se pelo potássio sérico normal',
      'Botulismo — Inclui-se pela fraqueza descendente e arreflexia; exclui-se pela direção ascendente da fraqueza, pela ausência de oftalmoplegia e disfagia, e pelo contexto de infecção prévia',
      'Poliomielite — Exclui-se pelo padrão simétrico (na pólio é assimétrica) e pela ausência de surto epidêmico e pela situação vacinal (considerar em populações não vacinadas)'
    ],
    context: 'Homem de 38 anos, previamente hígido, com quadro de fraqueza muscular simétrica ascendente de progressão subaguda (1 semana), arreflexia profunda global, parestesias em luva e meia e dissociação albuminocitológica no LCR. Quadro precedido por episódio diarreico há 3 semanas (provável Campylobacter jejuni — principal agente associado no Brasil). Comprometimento respiratório incipiente monitorizado.',
    justify: 'Preenche critérios diagnósticos para SGB: fraqueza motora progressiva e simétrica de mais de um membro, arreflexia profunda, precedida de infecção (diarreia por provável Campylobacter — 3 semanas). LCR com dissociação albuminocitológica (proteína elevada sem pleocitose) é achado clássico. Parestesias simétricas em luva e meia indicam envolvimento sensitivo periférico. Taquicardia pode representar disfunção autonômica, que é comum e grave na SGB. Progressão respiratória é a principal ameaça à vida.',
    expectedAnamnesis: 'Início e progressão temporal da fraqueza (subaguda, ascendente) | Simetria da fraqueza | Parestesias e distribuição (luva e meia) | Infecções precedentes: gastrointestinal, respiratória (1 a 6 semanas antes) | Disfunção autonômica: taquicardia, hipo/hipertensão, retenção urinária, sudorese | Sintomas respiratórios: dispneia, cansaço ao esforço, tosse fraca | Disfagia, disartria ou diplopia (variantes) | Vacinações recentes | Dor lombar/radicular (sintoma precoce frequente) | Medicações em uso',
    expectedPhysical: 'Sinais vitais: FC (taquicardia autonômica), FR, SpO₂ — monitorização respiratória essencial | Motor: grau de força por segmento (MRC), simetria | Reflexos profundos: arreflexia global — achado cardinal | Sensibilidade: parestesias, propriocepção, vibração | Pares cranianos: face, deglutição, movimentos oculares | Avaliação respiratória: FR, SpO₂, ausculta, capacidade de contar até 20 em uma expiração (triagem de CV) | Ausência de nível sensitivo (afasta mielite)',
    expectedExams: [
      { exam: 'Punção lombar com análise do LCR', justify: 'Dissociação albuminocitológica — achado clássico de SGB', expected: 'Proteína elevada, celularidade normal' },
      { exam: 'Eletroneuromiografia (encaminhar)', justify: 'Confirmar padrão desmielinizante vs. axonal', expected: 'AIDP: velocidade de condução reduzida, ondas F ausentes' },
      { exam: 'Gasometria arterial', justify: 'Monitorar insuficiência respiratória', expected: 'Normal ou hipoxemia leve' },
      { exam: 'Hemograma, eletrólitos, função renal', justify: 'Triagem sistêmica, afastar hipocalemia', expected: 'Normais' },
      { exam: 'Sorologia para Campylobacter jejuni (se disponível)', justify: 'Identificar agente precipitante', expected: 'Positivo em ~30% dos casos' },
      { exam: 'Anti-GQ1b (se disponível)', justify: 'Variante de Miller-Fisher', expected: 'Não indicado neste caso típico' }
    ],
    expectedConduct: "Internação imediata em UTI ou unidade de monitorização neurológica — risco de insuficiência respiratória e disautonomia | Farmacológica: Imunoglobulina humana IV (IVIG): 0,4 g/kg/dia por 5 dias — 1ª escolha disponível no SUS (PCDT — MS/SAS, 2021). OU Plasmaférese: alternativa de eficácia equivalente, 5 sessões em dias alternados — disponível em centros de referência. Não usar corticosteroide (sem benefício comprovado e pode piorar o desfecho na SGB). Analgesia: gabapentina ou amitriptilina para dor neuropática. Heparina profilática: HBPM para prevenção de TVP em paciente acamado | Monitorização: CV forçada seriada (critérios de intubação: CV < 20 mL/kg, PiMax < 30 cmH₂O, PeMax < 40 cmH₂O — 'regra 20-30-40') ⚠️ | Não farmacológica: Reabilitação precoce, cuidados com escaras, cateterismo se retenção urinária, suporte nutricional | Encaminhamento: UTI neurológica / hospital de referência com neurologista | Orientações ao paciente: Explicar que é uma condição tratável, que a maioria dos pacientes se recupera, mas que precisa de vigilância hospitalar pelo risco de comprometimento respiratório | Seguimento: Reabilitação neurológica pós-alta; seguimento neurológico",
    expectedCommunication: 'Apresentação: Apresentar-se, acolher o medo, reconhecer que é uma situação assustadora | Comunicação do diagnóstico: Explicar que há inflamação nos nervos, que provavelmente foi desencadeada por uma infecção anterior, que é tratável e que a maioria dos pacientes se recupera | Escuta ativa: Perguntar sobre preocupações familiares e profissionais; validar o impacto',
    criticalErrors: [
      'Alta sem internação em paciente com SGB em progressão e comprometimento respiratório incipiente',
      'Prescrever corticosteroide como tratamento (sem benefício e potencialmente prejudicial)',
      'Não monitorar função respiratória (FR, SpO₂, capacidade vital) — principal causa de morte na SGB',
      'Não solicitar punção lombar para confirmação diagnóstica',
      'Não investigar infecção precedente como fator desencadeante'
    ]
  },
  instD: {
    title: 'CHECKLIST — FRAQUEZA ASCENDENTE NAS PERNAS E NOS BRAÇOS',
    sections: [
      {
        h: 'COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE',
        items: [
          { item: 'Apresentou-se pelo nome ao paciente', score: 0.3, ref: 'CFM 2.149/2016' },
          { item: 'Perguntou sobre o impacto da fraqueza na vida diária e profissional', score: 0.5, ref: 'Humanização em saúde — MS, 2013' },
          { item: 'Explicou necessidade de internação com linguagem acessível e empática', score: 0.5, ref: 'CFM 2.149/2016; PNH — MS' }
        ]
      },
      {
        h: 'ANAMNESE',
        items: [
          { item: 'Caracterizou a progressão temporal e a direção ascendente da fraqueza', score: 1.0, ref: 'SBN — SGB; MS — PCDT SGB, 2021' },
          { item: 'Investigou simetria da fraqueza (bilateral e simétrica)', score: 0.5, ref: 'SBN — SGB, 2021' },
          { item: 'Perguntou sobre infecções precedentes (gastrointestinal ou respiratória) nas últimas 6 semanas', score: 1.0, ref: 'MS — PCDT SGB, 2021; SBN' },
          { item: 'Investigou sintomas respiratórios (dispneia, cansaço, tosse fraca)', score: 0.5, ref: 'MS — PCDT SGB, 2021' },
          { item: 'Investigou parestesias e distribuição em luva e meia', score: 0.5, ref: 'SBN — SGB; UpToDate ⚠️' }
        ]
      },
      {
        h: 'EXAME FÍSICO',
        items: [
          { item: 'Avaliou força muscular por segmento com escala MRC', score: 0.5, ref: 'SBN — SGB; MS — PCDT SGB, 2021' },
          { item: 'Pesquisou reflexos profundos (patelar, aquileu, bicipital) — arreflexia', score: 1.0, ref: 'SBN — SGB — achado cardinal' },
          { item: 'Avaliou frequência respiratória e SpO₂', score: 0.5, ref: 'MS — PCDT SGB, 2021' }
        ]
      },
      {
        h: 'RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
        items: [
          { item: 'Formulou hipótese diagnóstica de síndrome de Guillain-Barré', score: 1.0, ref: 'SBN — SGB; MS — PCDT SGB, 2021' },
          { item: 'Solicitou punção lombar para análise do LCR', score: 0.5, ref: 'MS — PCDT SGB, 2021; SBN' },
          { item: 'Interpretou corretamente a dissociação albuminocitológica', score: 0.5, ref: 'MS — PCDT SGB, 2021' }
        ]
      },
      {
        h: 'CONDUTA E ORIENTAÇÃO AO PACIENTE',
        items: [
          { item: 'Indicou internação hospitalar com monitorização neurológica e respiratória', score: 1.0, ref: 'MS — PCDT SGB, 2021; SBN' },
          { item: 'Prescreveu imunoglobulina IV ou mencionou plasmaférese como tratamento', score: 0.5, ref: 'MS — PCDT SGB, 2021; RENAME 2022' },
          { item: 'Não prescreveu corticosteroide como tratamento da SGB', score: 0.5, ref: 'MS — PCDT SGB, 2021 (corticoide não indicado)' },
          { item: 'Orientou o paciente sobre o prognóstico e a possibilidade de recuperação', score: 0.3, ref: 'CFM 2.149/2016; MS — PCDT SGB' }
        ]
      }
    ]
  }
},
  

{
  id: 6,
  title: 'Fraqueza e fala estranha que começaram há 2 horas',
  sub: 'UPA — Urgência e Emergência',
  tema: 'Neurologia',
  topic: 'acidente vascular cerebral isquêmico',
  level: 'moderado',
  cardAccent: '#B91C1C',
  instA: {
    scenario: 'Urgência e Emergência — UPA com capacidade de referência para AVC. Sala de triagem / consultório de urgência, turno matutino.',
    patient: 'J.B., 62 anos, masculino, aposentado, hipertenso e diabético.',
    complaint: 'Fraqueza no braço e na perna esquerdos e fala enrolada, que começaram há 2 horas.',
    tasks: [
      'Realize a anamnese objetiva e dirigida ao caso',
      'Realize o exame físico neurológico pertinente, incluindo a escala de AVC',
      'Solicite os exames complementares de urgência adequados',
      'Formule a hipótese diagnóstica e estabeleça a conduta imediata, incluindo decisão sobre trombólise',
      'Comunique ao paciente e ao familiar a situação e a conduta proposta'
    ]
  },
  instB: {
    vitals: { PA: '186/108 mmHg', FC: '88 bpm', FR: '18 irpm', Tax: '36,9°C', Peso: '86 kg', Altura: '1,72 m', IMC: '29,1 kg/m²' },
    physicalGeneral: 'Regular estado geral, consciente, orientado em pessoa (desorientado em tempo e lugar). Normocorado, hidratado, anictérico. Fala disártrica. Assimetria facial visível ao repouso.',
    physicalSeg: 'NEUROLÓGICO — MOTOR: Hemiplegia esquerda. Força grau 1/5 em membro superior esquerdo (apenas frêmito). Força grau 2/5 em membro inferior esquerdo (movimento sem vencer gravidade). Força preservada à direita (5/5). | NEUROLÓGICO — FACE: Paresia facial central à esquerda (apagamento de sulco nasolabial, desvio de rima para direita). Ausência de ptose. | NEUROLÓGICO — FALA: Disartria moderada. Sem afasia (compreende e obedece comandos verbais corretamente). | NEUROLÓGICO — SENSIBILIDADE: Hemihipoestesia à esquerda (responde menos ao estímulo doloroso no hemicorpo esquerdo). | NEUROLÓGICO — REFLEXOS: Hiper-reflexia à esquerda. Sinal de Babinski positivo à esquerda. | ESCALA NIHSS: 12 pontos (déficit moderado). | CARDIOVASCULAR: Ritmo irregular — fibrilação atrial (FA). Sem sopros. | RESPIRATÓRIO: Murmúrio vesicular presente, sem ruídos adventícios. SpO₂ 96%.',
    labs: [
      { test: 'Glicemia capilar', val: '162 mg/dL', ref: '70–140 mg/dL', alt: true },
      { test: 'Hemograma', val: 'Normal', ref: '—', alt: false },
      { test: 'Coagulograma (TP/INR)', val: 'INR 1,0', ref: '< 1,2', alt: false },
      { test: 'TTPA', val: '30 s', ref: '25–35 s', alt: false },
      { test: 'Plaquetas', val: '218.000/mm³', ref: '150.000–400.000/mm³', alt: false },
      { test: 'Creatinina', val: '1,1 mg/dL', ref: '0,6–1,2 mg/dL', alt: false },
      { test: 'Sódio', val: '139 mEq/L', ref: '135–145 mEq/L', alt: false }
    ],
    image: 'TC de crânio sem contraste (realizada na UPA): Ausência de hiperdensidade intraparenquimatosa (sem sangramento). Sem lesão isquêmica estabelecida visível (TC pode ser normal nas primeiras horas do AVCi). Leve atrofia cortical difusa compatível com idade. Ausência de desvio de linha média. Sem efeito de massa. | ECG: Ritmo de fibrilação atrial, sem onda P definida, intervalo RR irregular, FC média 88 bpm. Sem supradesnivelamento de ST.',
    note: 'Entregar sinais vitais ao início. Entregar exame físico se candidato examinar o paciente. Entregar exames laboratoriais e laudo da TC se solicitados verbalmente. Entregar ECG se o candidato solicitar ou mencionar avaliação cardíaca. A estação tem como ponto crítico a decisão sobre trombólise — o candidato deve identificar a janela terapêutica (início há 2 horas — dentro das 4,5h) e checar contraindicações antes de indicar. Familiar (esposa) está presente e pode ser incluído na comunicação.',
    patientProfile: 'J.B., 62 anos, masculino, aposentado (ex-motorista de ônibus), casado. Hipertenso há 12 anos (enalapril 10 mg/dia). Diabético tipo 2 há 8 anos (metformina 850 mg 2x/dia). Refere adesão irregular às medicações. Esposa presente na UPA.',
    script: [
      { trigger: 'Queixa principal', speech: "Dou... tor... tô c'o braço... esquerdo... sem força... e a fala... tá difícil..." },
      { trigger: 'Sobre início', speech: 'Foi... de manhã... tava tomando café... aí... caiu o copo... não consegui... segurar.' },
      { trigger: 'Sobre outros sintomas', speech: 'A perna... esquerda também... tá fraca... tô com... dificuldade de andar.' },
      { trigger: 'Sobre dor de cabeça', speech: 'Não... dor de cabeça não... não tô com dor.' },
      { trigger: 'Sobre medicações', speech: 'Tomo... remédio de pressão... e de diabetes... mas às vez... esqueço.' },
      { trigger: 'Sobre episódios anteriores', speech: 'Nunca... aconteceu isso antes... não.' },
      { trigger: 'Resposta à esposa (quando o candidato incluir familiar)', speech: 'Esposa fala: "Doutor, isso pode ter jeito? Ele não vai ficar assim, vai?"' },
      { trigger: 'Pergunta ativa do paciente', speech: 'Vou... ficar... assim... do... tor?' },
      { trigger: 'Pergunta ativa da esposa', speech: 'Tem algum remédio que pode ajudar agora, doutor?' }
    ],
    hiddenInfo: 'Está em uso irregular de AAS 100 mg/dia prescrito há 2 anos por médico anterior, mas parou há 3 meses ("achei que não precisava mais") — só revela se o candidato perguntar especificamente sobre antiagregantes ou AAS | Consome bebida alcoólica regularmente, cerca de 3–4 doses diárias — só revela se o candidato perguntar sobre etilismo',
    actorBehavior: 'Consciente mas assustado. Fala com dificuldade (disartria) — falar lentamente, com pausas, sem errar palavras (não é afasia). Obedece comandos. Levemente agitado. Esposa muito ansiosa, chorosa, fazendo perguntas frequentes ao candidato. O candidato deve ser capaz de incluir o familiar na comunicação sem deixar o paciente de lado.'
  },
  instC: {
    diagnosis: 'Acidente Vascular Cerebral Isquêmico (AVCi) em território da artéria cerebral média direita, provavelmente cardioembólico (fibrilação atrial). NIHSS 12. Dentro da janela terapêutica para trombólise IV (2 horas de início).',
    differentials: [
      'Hemorragia intracerebral — Inclui-se pela PA muito elevada e déficit focal agudo; exclui-se pela ausência de hiperdensidade na TC de crânio (TC normal afasta sangramento com alta sensibilidade)',
      'AIT (Ataque Isquêmico Transitório) — Exclui-se porque os sintomas persistem há 2 horas sem regressão (AIT: sintomas regridem em < 24h, mas o manejo inicial é o mesmo)',
      'Lesão expansiva intracraniana com déficit focal agudo — Exclui-se pela TC sem massa e pelo início ictal dos sintomas',
      'Hipoglicemia com déficit focal — Inclui-se (sempre excluir) — glicemia 162 mg/dL afasta'
    ],
    context: "Homem de 62 anos, hipertenso e diabético com controle irregular, apresentando hemiplegia esquerda e disartria de início súbito há 2 horas, com FA ao ECG (fonte emboligênica), TC sem sangramento e NIHSS 12. Dentro da janela terapêutica para alteplase IV. Caso de urgência neurológica máxima — 'tempo é cérebro'.",
    justify: 'Déficit neurológico focal de início ictal (súbito), com hemiplegia esquerda, disartria, paresia facial central esquerda e hemihipoestesia esquerda, sem cefaleia ou rebaixamento de consciência, sem sangramento na TC, com FA ao ECG. O padrão topográfico (hemicorpo contralateral completo, sem afasia) é compatível com território da ACM direita. A FA é a principal fonte emboligênica identificada. Glicemia afastada como causa. NIHSS 12 indica déficit moderado com indicação de trombólise se sem contraindicações.',
    expectedAnamnesis: 'Horário exato de início dos sintomas (definição de janela terapêutica — critério essencial) | Déficit motor: localização, progressão, simetria | Alteração de fala (disartria vs. afasia) | Cefaleia (afastar HSA e HIC) | Perda de consciência ou convulsão | Histórico de HAS, DM, FA, dislipidemia, tabagismo, etilismo | Medicações em uso (anticoagulantes, antiagregantes — contraindicações à trombólise) | Cirurgia ou trauma recente (contraindicação à trombólise) | Histórico de AVCi ou HSA prévios | Glicemia capilar (hipoglicemia como diagnóstico diferencial imediato)',
    expectedPhysical: 'Sinais vitais: PA (muito elevada — meta pré-trombólise < 185/110), FC, SpO₂ | Nível de consciência (Glasgow) | Escala NIHSS: aplicar itens — consciência, fixação ocular, campo visual, paresia facial, motor MMSS e MMII, ataxia, sensibilidade, linguagem, disartria, extinção | Assimetria facial, desvio de rima | Reflexo plantar (Babinski) | Ausculta cardíaca: detectar FA | Glicemia capilar imediata',
    expectedExams: [
      { exam: 'TC de crânio sem contraste', justify: 'Afastar hemorragia (obrigatório antes da trombólise)', expected: 'Normal (isquemia precoce pode ser invisível)' },
      { exam: 'Glicemia capilar', justify: 'Hipoglicemia como DD imediato', expected: '162 mg/dL — afasta hipoglicemia' },
      { exam: 'Coagulograma (TP, TTPA, plaquetas)', justify: 'Checar contraindicações à trombólise', expected: 'Normal' },
      { exam: 'ECG', justify: 'Identificar FA, cardiopatia', expected: 'FA confirmada' },
      { exam: 'Hemograma', justify: 'Plaquetopenia como contraindicação', expected: 'Normal' },
      { exam: 'Creatinina e eletrólitos', justify: 'Monitoramento pré e pós trombólise', expected: 'Normais' },
      { exam: 'AngioTC ou RM-DWI (se disponível)', justify: 'Identificar oclusão de grande vaso e penumbra', expected: 'Encaminhar para referência se disponível' }
    ],
    expectedConduct: "Imediata — 'AVC é emergência': Ativar protocolo de AVC ('Código AVC'), acesso venoso calibroso, monitorização (ECG contínuo, oximetria, PA), posicionar cabeceira 0° se sem aspiração | Trombólise IV com alteplase (rt-PA): Indicada — início há 2h (dentro das 4,5h), TC sem sangramento, NIHSS 12, sem contraindicações identificadas. Dose: 0,9 mg/kg IV (máximo 90 mg), 10% em bolus e 90% em infusão por 60 min. Meta de PA antes da trombólise: ≤ 185/110 mmHg | Controle de PA pré-trombólise: Se PA > 185/110 → labetalol EV ou nicardipina EV ⚠️ — reduzir até ≤ 185/110 antes de iniciar rt-PA. Não hipotensionar abaixo de 160/90 sem trombólise | Anticoagulação para FA: Iniciar anticoagulante após 24h da trombólise (aguardar TC de controle) — NOAC ou warfarina | Não farmacológica: NPO se disfagia (não presente aqui), hidratação com SF 0,9%, prevenção de hipoglicemia e hipertermia, posicionamento | Encaminhamento: UTI neurológica / centro de AVC de referência | Orientações: Comunicar ao paciente e familiar sobre a situação, o tratamento e a possibilidade de recuperação; explicar o que é a trombólise",
    expectedCommunication: "Apresentação: Apresentar-se ao paciente E ao familiar, reconhecer a gravidade da situação | Comunicação do diagnóstico: Explicar que provavelmente há um 'derrame cerebral' por um coágulo, que há um remédio que pode dissolver o coágulo mas precisa ser dado rapidamente; pedir consentimento para o tratamento | Escuta ativa: Responder às perguntas do familiar com empatia; não prometer recuperação total, mas explicar que o tratamento aumenta as chances",
    criticalErrors: [
      'Não calcular ou não perguntar sobre o horário de início dos sintomas (janela terapêutica para trombólise)',
      'Não solicitar TC de crânio antes de indicar trombólise',
      'Indicar trombólise sem checar contraindicações (PA > 185/110, uso de anticoagulante, cirurgia recente)',
      'Não identificar a fibrilação atrial como fonte emboligênica',
      'Reduzir a PA agressivamente antes de checar indicação de trombólise (pode piorar isquemia)',
      'Alta ou encaminhamento ambulatorial sem reconhecer urgência neurológica'
    ]
  },
  instD: {
    title: 'CHECKLIST — FRAQUEZA E FALA ESTRANHA DE INÍCIO SÚBITO',
    sections: [
      {
        h: 'BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE',
        items: [
          { item: 'Apresentou-se ao paciente e ao familiar presente', score: 0.3, ref: 'CFM 2.149/2016' },
          { item: 'Comunicou diagnóstico de AVCi e necessidade de tratamento urgente em linguagem acessível', score: 0.5, ref: 'CFM 2.149/2016; PNH — MS' },
          { item: 'Incluiu familiar na comunicação e respondeu às perguntas com empatia', score: 0.5, ref: 'Humanização em saúde — MS, 2013' }
        ]
      },
      {
        h: 'BLOCO 2 — ANAMNESE',
        items: [
          { item: 'Perguntou o horário exato de início dos sintomas (definição de janela terapêutica)', score: 1.0, ref: 'MS — Linha de Cuidado AVC, 2022; SBN' },
          { item: 'Investigou déficit motor (localização, progressão, simetria)', score: 0.5, ref: 'MS — Linha de Cuidado AVC, 2022' },
          { item: 'Perguntou sobre cefaleia (afastar HSA/HIC)', score: 0.5, ref: 'SBN — AVC; MS — Urgências Neurológicas' },
          { item: 'Investigou uso de anticoagulantes ou AAS (contraindicações à trombólise)', score: 0.5, ref: 'MS — Linha de Cuidado AVC, 2022; SBN' },
          { item: 'Investigou comorbidades: HAS, DM, FA (fatores de risco e fonte emboligênica)', score: 0.5, ref: 'MS — Linha de Cuidado AVC, 2022' }
        ]
      },
      {
        h: 'BLOCO 3 — EXAME FÍSICO',
        items: [
          { item: 'Avaliou nível de consciência (Glasgow) e PA', score: 0.5, ref: 'MS — Linha de Cuidado AVC, 2022' },
          { item: 'Aplicou escala NIHSS (ao menos 5 itens: consciência, face, motor, fala, sensibilidade)', score: 1.0, ref: 'MS — Linha de Cuidado AVC, 2022; SBN' },
          { item: 'Realizou ausculta cardíaca e identificou ritmo irregular (FA)', score: 0.5, ref: 'MS — Linha de Cuidado AVC, 2022' }
        ]
      },
      {
        h: 'BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
        items: [
          { item: 'Formulou hipótese diagnóstica de AVCi e identificou FA como provável fonte emboligênica', score: 1.0, ref: 'MS — Linha de Cuidado AVC, 2022; SBN' },
          { item: 'Solicitou TC de crânio sem contraste como exame de urgência obrigatório', score: 0.5, ref: 'MS — Linha de Cuidado AVC, 2022' },
          { item: 'Aferiu glicemia capilar para excluir hipoglicemia como diagnóstico diferencial imediato', score: 0.5, ref: 'MS — Linha de Cuidado AVC, 2022' }
        ]
      },
      {
        h: 'BLOCO 5 — CONDUTA E ORIENTAÇÃO AO PACIENTE',
        items: [
          { item: 'Indicou trombólise IV com alteplase (dentro da janela de 4,5h, sem contraindicações)', score: 1.0, ref: 'MS — Linha de Cuidado AVC, 2022; SBN' },
          { item: 'Verificou e manejou PA antes da trombólise (meta ≤ 185/110 mmHg)', score: 0.5, ref: 'MS — Linha de Cuidado AVC, 2022' },
          { item: 'Indicou encaminhamento / ativação do protocolo de AVC (transferência para UTI/centro de referência)', score: 0.5, ref: 'MS — Linha de Cuidado AVC, 2022' }
        ]
      }
    ]
  }
},

{
  id: 7,
  title: 'Braço esquerdo sem força por 20 minutos e voltou ao normal',
  sub: 'UPA — Urgência e Emergência',
  tema: 'Neurologia',
  topic: 'ataque isquêmico transitório',
  level: 'moderado',
  cardAccent: '#EA580C',
  instA: {
    scenario: 'Urgência e Emergência — UPA. Consultório de urgência, turno vespertino.',
    patient: 'A.C., 58 anos, masculino, comerciante, hipertenso e tabagista.',
    complaint: 'Ficou com o braço esquerdo fraco e a fala estranha por uns 20 minutos, mas passou. Veio à UPA porque a esposa insistiu.',
    tasks: [
      'Realize a anamnese dirigida ao caso',
      'Realize o exame físico neurológico pertinente',
      'Solicite os exames complementares adequados',
      'Formule a hipótese diagnóstica e avalie o risco de AVC com escore validado',
      'Estabeleça a conduta e oriente o paciente sobre a gravidade do quadro e a necessidade de investigação urgente'
    ]
  },
  instB: {
    vitals: { PA: '158/96 mmHg', FC: '82 bpm', FR: '16 irpm', Tax: '36,5°C', Peso: '89 kg', Altura: '1,74 m', IMC: '29,4 kg/m²' },
    physicalGeneral: 'Bom estado geral, consciente, orientado, levemente ansioso. Normocorado, hidratado, anictérico. Fala normal no momento do exame.',
    physicalSeg: 'NEUROLÓGICO: Exame neurológico completamente normal no momento da avaliação. Força muscular 5/5 em todos os segmentos. Reflexos simétricos. Sensibilidade preservada. Sem alteração de fala. Sem dismetria. Sem Babinski. | CARDIOVASCULAR: Ritmo regular em 2 tempos. Sem sopros cardíacos. Pulsos radiais simétricos. Ausência de sopro carotídeo à ausculta. | OFTALMOLÓGICO: Sem alteração de campos visuais ao confronto. Fundoscopia: cruzamentos arteriovenosos patológicos (sinal de Gunn grau 1) — retinopatia hipertensiva leve.',
    labs: [
      { test: 'Glicemia de jejum', val: '118 mg/dL', ref: '70–99 mg/dL', alt: true },
      { test: 'Colesterol total', val: '228 mg/dL', ref: '< 200 mg/dL', alt: true },
      { test: 'LDL', val: '152 mg/dL', ref: '< 130 mg/dL', alt: true },
      { test: 'HDL', val: '38 mg/dL', ref: '> 40 mg/dL', alt: true },
      { test: 'Triglicerídeos', val: '196 mg/dL', ref: '< 150 mg/dL', alt: true },
      { test: 'Hemograma', val: 'Normal', ref: '—', alt: false },
      { test: 'Coagulograma', val: 'Normal', ref: '—', alt: false },
      { test: 'Creatinina', val: '1,0 mg/dL', ref: '0,6–1,2 mg/dL', alt: false }
    ],
    image: 'ECG: Ritmo sinusal, FC 82 bpm, eixo normal. Sinais de sobrecarga ventricular esquerda (índice de Sokolow-Lyon positivo). Sem arritmias. Sem alterações isquêmicas agudas.',
    note: 'Entregar sinais vitais ao início. Entregar exame físico se candidato examinar. Entregar exames laboratoriais se solicitados verbalmente. Entregar ECG se candidato solicitar avaliação cardíaca. TC de crânio e RM não disponíveis na estação (encaminhamento para serviço de referência é parte da conduta esperada). O candidato deve aplicar ou mencionar o escore ABCD² para estratificação de risco — item avaliado no checklist.',
    patientProfile: 'A.C., 58 anos, masculino, comerciante (dono de mercadinho), casado, 3 filhos. Hipertenso há 10 anos (amlodipina 5 mg/dia). Tabagista há 30 anos (1 maço/dia). Sedentário. Não usa AAS nem estatina.',
    script: [
      { trigger: 'Queixa principal', speech: 'Doutor, foi coisa de 20 minutos. Tava no caixa do mercado quando o braço esquerdo ficou sem força, a fala ficou estranha. A minha funcionária chamou a minha esposa, ela que me trouxe aqui. Mas já passou tudo, tô normal.' },
      { trigger: 'Sobre início e duração', speech: 'Foi do nada, de repente. Durou uns 20 minutinhos e aí foi voltando ao normal aos poucos. Agora tô bem.' },
      { trigger: 'Sobre fala durante o episódio', speech: 'Ficou embaralhada a fala, as palavras saíam erradas. Mas agora tô falando normal.' },
      { trigger: 'Sobre outros sintomas durante o episódio', speech: 'Tive uma tonteira leve também. Mas não perdi a consciência, não caí.' },
      { trigger: 'Sobre cefaleia', speech: 'Não tive dor de cabeça não.' },
      { trigger: 'Sobre comorbidades', speech: 'Sou hipertenso, tomo amlodipina. Mas confesso que às vezes esqueço de tomar.' },
      { trigger: 'Sobre tabagismo', speech: 'Fumo há uns 30 anos, um maço por dia. Já tentei parar mas é difícil.' },
      { trigger: 'Sobre episódios anteriores', speech: 'Uma vez, há uns 2 meses, tive um formigueiro no braço esquerdo que durou uns 5 minutos. Pensei que era pressão e não vim ao médico.' },
      { trigger: 'Pergunta ativa', speech: 'Doutor, foi um derrame? Pode acontecer de novo?' },
      { trigger: 'Pergunta ativa', speech: 'Precisa internar? Não posso fechar o mercado.' }
    ],
    hiddenInfo: 'Episódio anterior há 2 meses com formigamento em braço esquerdo por 5 minutos, não valorizado — só revela se o candidato perguntar sobre episódios anteriores semelhantes ou déficit neurológico transitório prévio | Pai faleceu de AVC aos 60 anos — só revela se o candidato perguntar sobre histórico familiar de AVC ou doença cardiovascular',
    actorBehavior: 'Minimiza a situação ("já passou, tô bem"). Relutante em internar — preocupado com o mercado. Mais receptivo quando o candidato explica com clareza o risco de um AVC real nas próximas horas. Esposa pode ser mencionada como muito preocupada e favorável à internação.'
  },
  instC: {
    diagnosis: 'Ataque Isquêmico Transitório (AIT) em território carotídeo esquerdo (hemiparesia + afasia transitórias). ABCD² = 6 pontos — alto risco de AVC nas próximas 48 horas.',
    differentials: [
      'AVCi com resolução espontânea — Clinicamente indistinguível do AIT sem neuroimagem funcional (RM DWI); o manejo inicial é idêntico; a distinção é feita pela RM (DWI positivo = AVCi mesmo com reversão clínica)',
      'Crise epiléptica focal com paralisia de Todd — Inclui-se pela fraqueza focal transitória; exclui-se pela ausência de movimentos anormais, de confusão pós-ictal e de histórico prévio de epilepsia',
      'Enxaqueca com aura motora (hemiplégica) — Inclui-se; exclui-se pela ausência de cefaleia subsequente, pela ausência de histórico de enxaqueca e pelo perfil de risco cardiovascular elevado'
    ],
    context: 'Homem de 58 anos com múltiplos fatores de risco cardiovascular (HAS, tabagismo, dislipidemia, pré-diabetes), apresentando episódio de hemiparesia esquerda e afasia com duração de 20 minutos e resolução completa — compatível com AIT de alto risco (ABCD² = 6). Episódio sentinela prévio há 2 meses não valorizado. Exame neurológico normal no momento da avaliação.',
    justify: 'Déficit neurológico focal de resolução espontânea, com duração < 24h (20 minutos), sem alteração estrutural visível, em paciente com múltiplos fatores de risco vascular. Cálculo do ABCD²: Idade ≥ 60 anos (1 pt) + PA ≥ 140/90 (1 pt) + Déficit focal com fala comprometida (2 pt) + Duração 10–59 min (1 pt) + Sem diabetes (0 pt) = 6 pontos → Alto risco (risco de AVC em 48h: ~8%). Episódio prévio há 2 meses eleva ainda mais o risco.',
    expectedAnamnesis: 'Caracterização detalhada do episódio: início, duração, tipo de déficit (motor, sensitivo, linguagem, visual) | Resolução completa: tempo para normalização, qual déficit voltou por último | Cefaleia associada (afastar enxaqueca hemiplégica) | Perda de consciência (afastar epilepsia) | Episódios anteriores semelhantes | Fatores de risco: HAS, DM, dislipidemia, tabagismo, FA, doença coronariana | Medicações em uso (antiagregantes, anticoagulantes) | Histórico familiar de AVC ou doença cardiovascular | Uso de anticoncepcional hormonal (se mulher)',
    expectedPhysical: 'Sinais vitais: PA (elevada — fator de risco e critério ABCD²) | Neurológico completo: força, sensibilidade, reflexos, pares cranianos, linguagem — normal entre crises | Ausculta carotídea: sopro carotídeo (ausente neste caso) | Ausculta cardíaca: FA ou sopros (ausentes aqui) | Fundoscopia: retinopatia hipertensiva',
    expectedExams: [
      { exam: 'TC de crânio sem contraste', justify: 'Afastar sangramento ou lesão estrutural', expected: 'Normal (a ser realizada)' },
      { exam: 'RM de crânio DWI (encaminhar urgente)', justify: 'Detectar isquemia aguda mesmo com clínica resolvida — positivo em ~30–50% dos AIT', expected: 'A ser realizada em centro de referência' },
      { exam: 'ECG', justify: 'Afastar FA como fonte emboligênica', expected: 'Ritmo sinusal com SVE' },
      { exam: 'Ecocardiograma (encaminhar)', justify: 'Afastar fonte cardioembólica', expected: 'A ser realizado' },
      { exam: 'Doppler de carótidas (encaminhar)', justify: 'Avaliar estenose carotídea', expected: 'A ser realizado' },
      { exam: 'Glicemia, perfil lipídico, hemograma', justify: 'Fatores de risco e condições associadas', expected: 'Pré-diabetes, dislipidemia' }
    ],
    expectedConduct: "ABCD² ≥ 4 → Internação hospitalar urgente (risco alto de AVC nas próximas 48h — não dispensar da UPA) | Farmacológica: Antiagregação dupla imediata: AAS 100–300 mg + clopidogrel 75 mg (DAPT por 21 dias nos AIT de alto risco, depois monoterapia) — protocolo CHANCE/POINT ⚠️ (adotado pela SBN/MS). Controle de PA: ajuste do anti-hipertensivo (não hipotensionar abruptamente — meta gradual). Estatina de alta intensidade: atorvastatina 40–80 mg/dia (reduz risco de AVC recorrente). Cessação do tabagismo: aconselhar e encaminhar para programa | Não farmacológica: Internação para investigação, monitorização, controle de fatores de risco | Encaminhamento: Hospital com neurologia, RM DWI, Doppler carotídeo, ecocardiograma — regulação médica urgente | Orientações ao paciente: Explicar que o 'quase derrame' é um sinal de alerta muito sério; que há alto risco de ter um AVC de verdade nas próximas horas se não tratar; que a internação é necessária para proteção | Seguimento: Neurologia ambulatorial após alta hospitalar",
    expectedCommunication: "Apresentação: Apresentar-se, acolher o paciente e a esposa | Comunicação do diagnóstico: Explicar que o episódio foi um 'ataque isquêmico transitório' ou 'quase-derrame', que o cérebro ficou sem sangue por alguns minutos e que há risco real e alto de um AVC completo nas próximas 48 horas | Escuta ativa: Reconhecer a preocupação com o mercado mas reforçar que a internação é para proteger a vida",
    criticalErrors: [
      'Alta da UPA sem internação em AIT de alto risco (ABCD² ≥ 4)',
      'Não calcular ou não mencionar escore de risco (ABCD² ou similar)',
      'Não iniciar antiagregação imediatamente',
      'Não investigar FA como fonte emboligênica (não solicitar ECG)',
      'Reduzir PA de forma agressiva e imediata (pode piorar isquemia cerebral em curso)'
    ]
  },
  instD: {
    title: 'CHECKLIST — BRAÇO FRACO E FALA ESTRANHA QUE PASSARAM SOZINHOS',
    sections: [
      {
        h: 'BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE',
        items: [
          { item: 'Apresentou-se ao paciente e à esposa', score: 0.3, ref: 'CFM 2.149/2016' },
          { item: 'Explicou o risco de AVC iminente de forma clara, sem alarmismo excessivo, para motivar adesão', score: 0.5, ref: 'CFM 2.149/2016; Humanização MS, 2013' },
          { item: 'Respondeu às dúvidas do paciente sobre necessidade de internação com empatia e firmeza', score: 0.5, ref: 'PNH — MS; CFM 2.149/2016' }
        ]
      },
      {
        h: 'BLOCO 2 — ANAMNESE',
        items: [
          { item: 'Caracterizou o episódio: início, duração, tipo de déficit e resolução completa', score: 1.0, ref: 'MS — Linha de Cuidado AVC, 2022; SBN' },
          { item: 'Perguntou sobre cefaleia e perda de consciência (afastar enxaqueca hemiplégica e epilepsia)', score: 0.5, ref: 'SBN — AIT; MS — Urgências Neurológicas' },
          { item: 'Investigou episódios anteriores semelhantes', score: 0.5, ref: 'SBN — AIT; MS — Linha de Cuidado AVC' },
          { item: 'Investigou fatores de risco: HAS, tabagismo, dislipidemia, DM, FA', score: 0.5, ref: 'MS — Linha de Cuidado AVC, 2022' },
          { item: 'Perguntou sobre uso de antiagregantes ou anticoagulantes', score: 0.3, ref: 'MS — Linha de Cuidado AVC, 2022' }
        ]
      },
      {
        h: 'BLOCO 3 — EXAME FÍSICO',
        items: [
          { item: 'Realizou exame neurológico completo (força, fala, reflexos, sensibilidade)', score: 0.5, ref: 'SBN — AIT; MS — Urgências Neurológicas' },
          { item: 'Realizou ausculta cardíaca buscando FA ou sopros', score: 0.5, ref: 'MS — Linha de Cuidado AVC, 2022' },
          { item: 'Avaliou PA (critério do ABCD²)', score: 0.5, ref: 'MS — Linha de Cuidado AVC; SBN' }
        ]
      },
      {
        h: 'BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
        items: [
          { item: 'Formulou hipótese diagnóstica de AIT', score: 1.0, ref: 'SBN — AIT; MS — Linha de Cuidado AVC, 2022' },
          { item: 'Calculou ou mencionou o escore ABCD² e identificou risco alto (≥ 4 pontos)', score: 1.0, ref: 'SBN — AIT; MS — Linha de Cuidado AVC, 2022' },
          { item: 'Solicitou ECG para afastar FA', score: 0.5, ref: 'MS — Linha de Cuidado AVC, 2022' }
        ]
      },
      {
        h: 'BLOCO 5 — CONDUTA E ORIENTAÇÃO AO PACIENTE',
        items: [
          { item: 'Indicou internação hospitalar urgente (ABCD² ≥ 4)', score: 1.0, ref: 'MS — Linha de Cuidado AVC, 2022; SBN' },
          { item: 'Prescreveu antiagregação plaquetária (AAS e/ou clopidogrel)', score: 0.5, ref: 'SBN — AIT; MS — Linha de Cuidado AVC, 2022' },
          { item: 'Prescreveu ou mencionou estatina de alta intensidade', score: 0.3, ref: 'SBN — AIT; MS — Dislipidemia, 2020' },
          { item: 'Orientou cessação do tabagismo', score: 0.2, ref: 'MS — Tabagismo; INCA' }
        ]
      }
    ]
  }
},

{
  id: 8,
  title: 'Paciente que teve convulsão no trabalho pela primeira vez',
  sub: 'UPA — Urgência e Emergência',
  tema: 'Neurologia',
  topic: 'epilepsia',
  level: 'moderado',
  cardAccent: '#7C3AED',
  instA: {
    scenario: 'Urgência e Emergência — UPA. Sala de observação, após episódio de crise convulsiva generalizada no local de trabalho. Paciente está consciente e orientado ao chegar.',
    patient: 'P.S., 24 anos, masculino, analista de sistemas, sem comorbidades conhecidas.',
    complaint: 'Teve convulsão com movimentos nos braços e pernas no trabalho, durou uns 2 minutos, ficou confuso depois. Primeira vez na vida.',
    tasks: [
      'Realize a anamnese dirigida ao caso',
      'Realize o exame físico neurológico pertinente',
      'Solicite os exames complementares adequados para investigação do primeiro episódio',
      'Formule a hipótese diagnóstica e os diagnósticos diferenciais',
      'Oriente o paciente sobre a conduta, as restrições temporárias e o seguimento'
    ]
  },
  instB: {
    vitals: { PA: '124/78 mmHg', FC: '94 bpm', FR: '16 irpm', Tax: '36,7°C', Peso: '72 kg', Altura: '1,75 m', IMC: '23,5 kg/m²' },
    physicalGeneral: 'Bom estado geral, consciente, orientado (estado pós-ictal em resolução — confusão já cedeu). Normocorado, hidratado. Pequena laceração lateral na língua (mordedura). Incontinência urinária relatada durante o episódio.',
    physicalSeg: 'NEUROLÓGICO: Exame neurológico normal no momento. Força 5/5 em todos os segmentos. Reflexos simétricos (+/4+). Sem déficit sensitivo. Sem rigidez de nuca. Pupilas isocóricas e fotorreagentes. Sem nistagmo. Glasgow 15. | MUSCULOESQUELÉTICO: Dor muscular difusa leve (mialgia pós-ictal). Sem fratura ou luxação evidentes. | OROFARINGE: Mordedura lateral de língua, pequena laceração sem sangramento ativo.',
    labs: [
      { test: 'Glicemia capilar', val: '88 mg/dL', ref: '70–140 mg/dL', alt: false },
      { test: 'Sódio', val: '136 mEq/L', ref: '135–145 mEq/L', alt: false },
      { test: 'Potássio', val: '4,1 mEq/L', ref: '3,5–5,0 mEq/L', alt: false },
      { test: 'Cálcio iônico', val: '1,18 mmol/L', ref: '1,12–1,32 mmol/L', alt: false },
      { test: 'Magnésio', val: '0,82 mmol/L', ref: '0,7–1,0 mmol/L', alt: false },
      { test: 'Hemograma', val: 'Normal', ref: '—', alt: false },
      { test: 'Função renal', val: 'Normal', ref: '—', alt: false },
      { test: 'Toxicológico urinário', val: 'Negativo para cocaína, anfetaminas, canabinoides, opioides', ref: '—', alt: false }
    ],
    image: 'TC de crânio sem contraste: Sem lesões expansivas, sem sangramento, sem desvio de linha média, sem edema. Estruturas da linha média preservadas. Estudo dentro dos limites da normalidade para a faixa etária.',
    note: 'Entregar sinais vitais ao início. Entregar exame físico se candidato examinar. Entregar exames laboratoriais se solicitados. Entregar TC se solicitada. O EEG não está disponível na UPA — deve ser encaminhado ambulatorialmente (parte da conduta esperada). Atentar para itens críticos: orientação sobre restrição de dirigir (obrigatória por lei no Brasil — Resolução CFM 1.831/2008 e CTB) e encaminhamento para neurologia.',
    patientProfile: 'P.S., 24 anos, masculino, analista de sistemas, solteiro, mora com os pais. Sem comorbidades. Nunca teve epilepsia ou crise convulsiva antes. Não usa medicações. Relata privação de sono nos últimos 3 dias (trabalho em projeto com prazo apertado).',
    script: [
      { trigger: 'Queixa principal', speech: 'Doutor, eu não lembro de nada. Meus colegas disseram que eu caí na cadeira, comecei a sacudir o corpo todo, os braços e as pernas. Disseram que durou uns 2 minutos. Quando voltei a mim, tava confuso, não sabia onde tava.' },
      { trigger: 'Sobre o episódio em si', speech: "Não senti nada antes, não tive aura. De repente, apagou. Acordei com todo mundo em volta de mim assustado." },
      { trigger: 'Sobre após a crise', speech: 'Fiquei muito confuso por uns 20 minutos. Agora tô me sentindo cansado e com dor no corpo todo.' },
      { trigger: 'Sobre mordedura e perda de urina', speech: 'Sim, minha língua tá doendo. E disseram que eu fiz xixi nas calças... foi muito constrangedor.' },
      { trigger: 'Sobre sono recente', speech: 'Nos últimos 3 dias dormi umas 4 horas por noite. Tava com prazo de entrega de projeto.' },
      { trigger: 'Sobre uso de substâncias', speech: 'Não uso nada, não. Só tomei uns 3 cafés ontem pra aguentar.' },
      { trigger: 'Sobre episódios anteriores', speech: 'Nunca aconteceu isso antes. Nunca na vida.' },
      { trigger: 'Sobre histórico familiar', speech: 'Acho que não... mas vou precisar perguntar pra minha mãe.' },
      { trigger: 'Pergunta ativa', speech: 'Doutor, eu tenho epilepsia? Vou ter isso de novo?' },
      { trigger: 'Pergunta ativa', speech: 'Posso continuar dirigindo? Tenho carteira de motorista.' }
    ],
    hiddenInfo: "Mãe tem epilepsia, em uso de valproato — só revela se o candidato perguntar especificamente sobre histórico familiar de epilepsia ou convulsão | Nos últimos 6 meses teve 2 episódios de 'apagão' rápido, com duração de segundos, que ele atribuiu a cansaço e não relatou espontaneamente — só revela se o candidato perguntar sobre episódios menores, ausências ou 'apagões' anteriores",
    actorBehavior: 'Constrangido com a incontinência urinária. Assustado com a possibilidade de epilepsia. Pergunta insistentemente sobre a carteira de motorista e sobre dirigir. Colaborativo, responde bem a abordagem empática. Pode ficar defensivo se o candidato for muito diretivo sobre restrições sem explicar o porquê.'
  },
  instC: {
    diagnosis: 'Primeira crise epiléptica generalizada tônico-clônica em adulto jovem, com gatilho identificável (privação de sono). Investigação pendente para definir se é epilepsia estabelecida ou crise provocada/situacional.',
    differentials: [
      "Epilepsia mioclônica juvenil — Inclui-se pelo histórico familiar positivo (mãe com epilepsia) e pelos possíveis episódios prévios de 'apagão' (ausências/mioclonias matinais?); investigação com EEG é essencial para diferenciar",
      'Síncope convulsivante — Inclui-se; exclui-se pela duração > 1 minuto, pela mordedura de língua lateral (não ponta), pela incontinência urinária, pela confusão pós-ictal prolongada (20 min) — todos sugestivos de crise epiléptica verdadeira',
      'Crise provocada por distúrbio metabólico — Exclui-se pela glicemia, eletrólitos, cálcio e magnésio normais',
      'Crise provocada por substâncias — Exclui-se pelo toxicológico urinário negativo'
    ],
    context: 'Jovem de 24 anos, sem comorbidades, com primeira crise convulsiva generalizada tônico-clônica, com mordedura de língua e incontinência urinária, em contexto de privação importante de sono. Histórico familiar de epilepsia (mãe). Episódios menores anteriores não relatados espontaneamente. Exames iniciais normais, sem causa secundária identificada.',
    justify: "O padrão clínico — crise generalizada tônico-clônica, com perda de consciência, movimentos tônico-clônicos generalizados, mordedura lateral de língua, incontinência e confusão pós-ictal prolongada — é característico de crise epiléptica. A privação de sono é um gatilho clássico para o primeiro evento. Os episódios anteriores de 'apagão' breve podem representar ausências ou crises focais não valorizadas. O diagnóstico de epilepsia exige ≥ 2 crises não provocadas ou 1 crise com risco elevado de recorrência (> 60%). EEG e RM são essenciais para classificação e decisão sobre antiepiléptico.",
    expectedAnamnesis: 'Descrição detalhada do episódio por testemunhas (crise observada): início, duração, tipo de movimentos, simetria, perda de consciência | Presença de aura (sintoma premonitório focal) | Período pós-ictal: duração e características (confusão, cefaleia, fadiga) | Mordedura de língua (lateral = epilepsia; ponta = síncope) | Incontinência urinária ou fecal | Episódios anteriores, mesmo menores (ausências, mioclonias, apagões) | Privação de sono, álcool, drogas — gatilhos | Febre ou infecção recente | Trauma craniano prévio | Histórico familiar de epilepsia | Medicações em uso',
    expectedPhysical: 'Sinais vitais (FC, PA, Tax) | Nível de consciência e orientação (estado pós-ictal) | Exame neurológico completo: força, reflexos, coordenação, sensibilidade, pares cranianos — normal | Pesquisa de rigidez de nuca (afastar meningite como causa) | Inspeção de língua (mordedura lateral) | Sinais de trauma durante a queda',
    expectedExams: [
      { exam: 'Glicemia capilar', justify: 'Hipoglicemia como causa imediata', expected: 'Normal' },
      { exam: 'Eletrólitos (sódio, potássio, cálcio, magnésio)', justify: 'Distúrbios metabólicos como causa', expected: 'Normais' },
      { exam: 'TC de crânio sem contraste', justify: 'Afastar lesão estrutural (urgência)', expected: 'Normal' },
      { exam: 'EEG (encaminhar ambulatorial)', justify: 'Classificar tipo de epilepsia, identificar foco', expected: 'A ser realizado' },
      { exam: 'RM de crânio com contraste (encaminhar)', justify: 'Afastar lesão estrutural sutil (superior à TC)', expected: 'A ser realizado' },
      { exam: 'Toxicológico urinário', justify: 'Afastar crise induzida por substâncias', expected: 'Negativo' }
    ],
    expectedConduct: 'Farmacológica: Primeira crise isolada com causa identificável (privação de sono): pode não iniciar antiepiléptico — decisão compartilhada com neurologia. Se > 1 crise não provocada ou EEG/RM alterados: iniciar antiepiléptico — valproato de sódio (1ª linha para epilepsia generalizada — RENAME/MS) ou levetiracetam. Não iniciar antiepiléptico empírico sem avaliação neurológica (exceção: dois ou mais episódios confirmados) | Não farmacológica: Higiene do sono (8h/noite), evitar álcool, orientar sobre gatilhos | Restrições obrigatórias: Proibição de dirigir veículos motorizados até avaliação neurológica e definição de risco de recorrência — Resolução CFM 1.831/2008 e Código de Trânsito Brasileiro; não operar máquinas perigosas; não nadar sozinho; não trabalhar em altura | Encaminhamento: Neurologia ambulatorial em prazo curto (7–15 dias); EEG e RM de crânio | Orientações ao paciente: Explicar que uma crise não significa epilepsia necessariamente; que exames são necessários para definir o diagnóstico; que as restrições são temporárias e para sua proteção',
    expectedCommunication: 'Apresentação: Apresentar-se, reconhecer o constrangimento e o susto que o episódio causou | Comunicação do diagnóstico: Explicar que houve uma crise convulsiva, que pode ter várias causas, que uma crise não define epilepsia, e que exames são necessários | Restrições de dirigir: Comunicar de forma clara, com base legal, que há proibição temporária de dirigir — mas sem ser punitivo; explicar que é para a segurança dele e dos outros',
    criticalErrors: [
      'Não orientar sobre a proibição de dirigir (obrigação médica com base legal)',
      'Diagnosticar epilepsia definitiva após primeira crise sem investigação complementar',
      'Iniciar antiepiléptico sem encaminhamento neurológico em primeira crise isolada',
      'Não solicitar TC de crânio para afastar causa estrutural',
      'Alta sem orientar sobre restrições de segurança (nadar sozinho, altura, máquinas)'
    ]
  },
  instD: {
    title: 'CHECKLIST — PRIMEIRA CRISE CONVULSIVA GENERALIZADA',
    sections: [
      {
        h: 'BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE',
        items: [
          { item: 'Apresentou-se pelo nome ao paciente', score: 0.3, ref: 'CFM 2.149/2016' },
          { item: 'Reconheceu o constrangimento do episódio (incontinência) com empatia e sem julgamento', score: 0.5, ref: 'Humanização em saúde — MS, 2013' },
          { item: 'Explicou o diagnóstico e as restrições em linguagem acessível', score: 0.5, ref: 'CFM 2.149/2016; PNH — MS' }
        ]
      },
      {
        h: 'BLOCO 2 — ANAMNESE',
        items: [
          { item: 'Obteve descrição detalhada do episódio (início, duração, tipo de movimentos, pós-ictal)', score: 1.0, ref: 'SBN — Epilepsia; MS — PCDT Epilepsia, 2021' },
          { item: 'Perguntou sobre mordedura de língua e incontinência (critérios de epilepsia)', score: 0.5, ref: 'SBN — Epilepsia, 2021' },
          { item: 'Investigou episódios menores anteriores (ausências, apagões, mioclonias)', score: 0.5, ref: 'SBN — Epilepsia; MS — PCDT Epilepsia, 2021' },
          { item: 'Investigou gatilhos: privação de sono, álcool, drogas, febre', score: 0.5, ref: 'SBN — Epilepsia, 2021' },
          { item: 'Investigou histórico familiar de epilepsia', score: 0.5, ref: 'SBN — Epilepsia; MS — PCDT Epilepsia, 2021' }
        ]
      },
      {
        h: 'BLOCO 3 — EXAME FÍSICO',
        items: [
          { item: 'Avaliou nível de consciência e orientação (Glasgow/estado pós-ictal)', score: 0.5, ref: 'MS — Urgências Neurológicas, 2022' },
          { item: 'Realizou exame neurológico completo (força, reflexos, coordenação)', score: 0.5, ref: 'SBN — Epilepsia; MS — PCDT Epilepsia' },
          { item: 'Inspecionou a língua em busca de mordedura lateral', score: 0.3, ref: 'SBN — Epilepsia, 2021' }
        ]
      },
      {
        h: 'BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
        items: [
          { item: 'Formulou hipótese diagnóstica de primeira crise epiléptica generalizada', score: 1.0, ref: 'SBN — Epilepsia; MS — PCDT Epilepsia, 2021' },
          { item: 'Solicitou TC de crânio sem contraste para afastar causa estrutural', score: 0.5, ref: 'SBN — Epilepsia; MS — PCDT Epilepsia, 2021' },
          { item: 'Solicitou exames metabólicos (glicemia, eletrólitos) para afastar causa provocada', score: 0.5, ref: 'MS — PCDT Epilepsia, 2021' },
          { item: 'Mencionou EEG e RM ambulatoriais como investigação complementar', score: 0.3, ref: 'SBN — Epilepsia; MS — PCDT Epilepsia, 2021' }
        ]
      },
      {
        h: 'BLOCO 5 — CONDUTA E ORIENTAÇÃO AO PACIENTE',
        items: [
          { item: 'Orientou sobre proibição de dirigir e de atividades de risco (base legal — CFM 1.831/2008 e CTB)', score: 1.0, ref: 'Resolução CFM 1.831/2008; CTB — Art. 147' },
          { item: 'Encaminhou para neurologia ambulatorial com EEG e RM', score: 0.5, ref: 'MS — PCDT Epilepsia, 2021; SBN' },
          { item: 'Orientou sobre higiene do sono e evitar gatilhos', score: 0.5, ref: 'SBN — Epilepsia, 2021; MS — PCDT Epilepsia' },
          { item: 'Explicou que uma crise não confirma epilepsia e que exames são necessários', score: 0.2, ref: 'MS — PCDT Epilepsia, 2021; SBN' }
        ]
      }
    ]
  }
},

{
  id: 9,
  title: 'Paciente com convulsões que não param',
  sub: 'UPA — Urgência e Emergência',
  tema: 'Neurologia',
  topic: 'estado de mal epiléptico',
  level: 'moderado',
  cardAccent: '#991B1B',
  instA: {
    scenario: 'Urgência e Emergência — UPA. Sala de emergência. O paciente chegou por SAMU em convulsão ativa há 35 minutos. Não consegue falar. Familiar (esposa) está presente.',
    patient: 'E.R., 52 anos, masculino, engenheiro, epiléptico em uso de carbamazepina.',
    complaint: 'Convulsões que não param desde há 35 minutos, sem recuperar a consciência entre elas. Esposa relata que o marido é epiléptico e que parou de tomar o remédio há 4 dias.',
    tasks: [
      'Avalie o paciente na sala de emergência e realize as medidas de suporte imediatas',
      'Solicite os exames complementares de urgência pertinentes',
      'Institua o tratamento farmacológico do estado de mal epiléptico conforme protocolo',
      'Comunique à esposa o diagnóstico, a gravidade e a conduta proposta',
      'Estabeleça o plano de monitoramento e as medidas para prevenção de recorrência'
    ]
  },
  instB: {
    vitals: { PA: '162/98 mmHg', FC: '118 bpm', FR: '24 irpm', Tax: '38,1°C', Peso: '82 kg', Altura: '1,76 m', IMC: '26,5 kg/m²' },
    physicalGeneral: 'Mal estado geral, em convulsão ativa (movimentos tônico-clônicos generalizados). Cianótico. Hipersalivação. Incontinência urinária. Sem resposta a estímulos verbais. Pupilas midriáticas bilaterais durante a crise.',
    physicalSeg: 'NEUROLÓGICO: Glasgow 3 (em convulsão ativa). Movimentos tônico-clônicos generalizados. Sem resposta verbal ou motora voluntária. | RESPIRATÓRIO: FR 24 irpm. SpO₂ 88% em ar ambiente. Murmúrio vesicular presente com ruídos de secreção. | CARDIOVASCULAR: Taquicardia sinusal. PA 162/98 mmHg. | TEMPERATURA: 38,1°C — febre baixa (pode ser reativa ao estado convulsivo ou infecção desencadeante).',
    labs: [
      { test: 'Glicemia capilar', val: '74 mg/dL', ref: '70–140 mg/dL', alt: false },
      { test: 'Sódio', val: '133 mEq/L', ref: '135–145 mEq/L', alt: true },
      { test: 'Potássio', val: '4,0 mEq/L', ref: '3,5–5,0 mEq/L', alt: false },
      { test: 'Cálcio iônico', val: '1,14 mmol/L', ref: '1,12–1,32 mmol/L', alt: false },
      { test: 'Hemograma', val: 'Leucócitos 13.200/mm³ (sem desvio à esquerda)', ref: '4.000–10.000/mm³', alt: true },
      { test: 'Nível sérico de carbamazepina', val: '2,1 mcg/mL', ref: '4–12 mcg/mL', alt: true },
      { test: 'Gasometria arterial', val: 'pH 7,22 / PaCO₂ 48 mmHg / HCO₃ 18 mEq/L / Lactato 4,2 mmol/L', ref: '—', alt: true }
    ],
    image: 'TC de crânio sem contraste (a ser realizada após estabilização): Disponível para encaminhamento após controle das crises. Não realizar durante convulsão ativa.',
    note: 'O paciente está em manequim/simulador ou ator em convulsão simulada. Entregar sinais vitais ao início. Entregar exames laboratoriais somente se solicitados verbalmente. Esposa presente — pode ser abordada para histórico. A estação avalia principalmente o protocolo de tratamento do EME: sequência correta (benzodiazepínico → antiepiléptico de 2ª linha → 3ª linha), suporte ventilatório e monitorização. O candidato NÃO deve perder tempo excessivo com anamnese detalhada antes de tratar — o EME é emergência tempo-dependente.',
    patientProfile: 'E.R., 52 anos, masculino, engenheiro civil. Epiléptico há 8 anos, em uso de carbamazepina 400 mg 2x/dia. Parou de tomar o medicamento há 4 dias por conta própria ("estava se sentindo bem"). Última crise havia sido há 2 anos.',
    script: [
      { trigger: 'Sobre o início (esposa)', speech: 'Doutor, ele começou a convulsionar em casa há 40 minutos. A primeira crise durou uns 5 minutos, aí veio outra, e desde então não parou mais, não voltou a si.' },
      { trigger: 'Sobre o epiléptico (esposa)', speech: 'Ele tem epilepsia faz 8 anos, toma carbamazepina. Mas parou de tomar há 4 dias sem me contar, disse que estava bem.' },
      { trigger: 'Sobre outras doenças (esposa)', speech: 'Tem pressão alta controlada, toma losartana. Nada mais.' },
      { trigger: 'Sobre alergias (esposa)', speech: 'Que eu saiba não tem alergia a nada.' },
      { trigger: 'Sobre febre (esposa)', speech: 'Não tava com febre em casa não, isso eu posso afirmar.' },
      { trigger: 'Sobre trauma (esposa)', speech: 'Não caiu antes de começar a crise, não teve pancada na cabeça.' },
      { trigger: 'Pergunta ativa (esposa)', speech: 'Doutor, ele vai ficar bem? Quanto mais tempo ficar assim, mais perigo tem?' },
      { trigger: 'Pergunta ativa (esposa)', speech: 'Precisa internar? O que vai acontecer agora?' }
    ],
    hiddenInfo: 'O paciente passou por estresse intenso nos últimos 3 dias, com prazo de obra atrasado — só revela se a esposa for perguntada sobre fatores de estresse ou gatilhos além da retirada do medicamento | Houve uma crise mais breve há 3 dias, de uns 2 minutos, que o paciente não contou para a esposa — só revela se o candidato perguntar especificamente sobre episódios convulsivos nos dias anteriores',
    actorBehavior: 'Esposa muito ansiosa, chorando, mas colaborativa ao ser abordada. Precisa de explicação clara e rápida, sem jargão. Fica mais calma quando percebe que a equipe está agindo com competência. Faz perguntas repetitivas sobre se vai ficar bem.'
  },
  instC: {
    diagnosis: 'Estado de Mal Epiléptico (EME) tônico-clônico generalizado convulsivo, estabelecido (> 30 min), em paciente epiléptico com retirada abrupta de carbamazepina (nível sérico subterapêutico). Acidose metabólica lática por atividade convulsiva prolongada.',
    differentials: [
      'EME por causa estrutural (lesão encefálica aguda) — Inclui-se; excluir com TC após estabilização',
      'EME por meningoencefalite infecciosa — Inclui-se pela febre baixa e leucocitose; excluir com líquor após TC',
      'EME por distúrbio metabólico (hiponatremia) — Contribuinte neste caso (Na 133 mEq/L); corrigir como parte do manejo'
    ],
    context: 'Homem de 52 anos, epiléptico com retirada abrupta de carbamazepina, em estado de mal epiléptico tônico-clônico generalizado há > 35 minutos, com comprometimento respiratório (SpO₂ 88%), taquicardia, febre baixa, nível subterapêutico de carbamazepina e acidose lática. Emergência neurológica com risco de morte e lesão cerebral permanente.',
    justify: 'EME definido por crise > 5 minutos sem recuperação da consciência, ou crises repetidas sem recuperação intercrises — neste caso > 35 minutos. A retirada abrupta da carbamazepina com nível sérico subterapêutico é a causa precipitante. A hiponatremia leve pode contribuir. A acidose lática e a hipoxemia são consequências do estado convulsivo e devem ser tratadas em paralelo.',
    expectedAnamnesis: 'Duração total da crise e padrão (contínua ou crises repetidas sem recuperação) | Histórico de epilepsia e medicações antiepilépticas | Adesão ao tratamento (retirada abrupta) | Alergias medicamentosas | Outros fatores desencadeantes: infecção, trauma, hipoglicemia, álcool, drogas | Comorbidades',
    expectedPhysical: 'Sinais vitais: PA, FC, FR, Tax, SpO₂ — monitorização imediata | Glasgow: 3 (em crise) | Pupilas: midriáticas durante crise (normal), verificar simetria entre crises | Padrão respiratório: avaliar obstrução de via aérea, cianose | Temperatura: febre (possível causa infecciosa ou reativa)',
    expectedExams: [
      { exam: 'Glicemia capilar', justify: 'Excluir hipoglicemia — deve ser o PRIMEIRO exame', expected: 'Normal' },
      { exam: 'Eletrólitos (sódio, cálcio, magnésio)', justify: 'Distúrbios metabólicos como causa ou fator contribuinte', expected: 'Hiponatremia leve' },
      { exam: 'Nível sérico de carbamazepina', justify: 'Confirmar subterapêutico por retirada abrupta', expected: 'Baixo (2,1 mcg/mL)' },
      { exam: 'Gasometria arterial', justify: 'Avaliar hipoxemia e acidose', expected: 'Acidose mista, hipoxemia' },
      { exam: 'Hemograma', justify: 'Afastar infecção como gatilho', expected: 'Leucocitose leve' },
      { exam: 'TC de crânio (após estabilização)', justify: 'Afastar lesão estrutural', expected: 'A realizar' },
      { exam: 'Punção lombar (após TC e estabilização)', justify: 'Afastar meningoencefalite', expected: 'A realizar se TC normal' }
          { exam: 'Punção lombar (após TC e estabilização)', justify: 'Afastar meningoencefalite', expected: 'A realizar se TC normal' }
    ],
    expectedConduct: 'PRIORIDADE: ABC — via aérea, respiração, circulação | Oxigênio 100% por máscara com reservatório — SpO₂ 88% exige suporte imediato | Posição lateral de segurança se possível; preparar para IOT se crise não ceder | Acesso venoso calibroso, monitorização contínua | Protocolo EME — 1ª linha (urgência imediata): Benzodiazepínico — diazepam 10–20 mg EV (0,2 mg/kg); se sem acesso EV: midazolam 10 mg IM (1ª escolha sem acesso EV — RENAME/MS) | 2ª linha (fase estabelecida — se BZD falhou): Valproato de sódio 20–40 mg/kg EV em 15 min — 1ª escolha (RENAME/MS/SBN) OU levetiracetam 60 mg/kg EV (máx 4.500 mg) OU fenitoína 20 mg/kg EV (lenta, com monitorização cardíaca) | 3ª linha (fase refratária — > 30 min sem resposta): Midazolam EV em infusão contínua OU propofol EV (com IOT) — requer UTI | Carbamazepina: Reintroduzir via sonda nasoentérica após controle das crises | Corrigir hiponatremia: SF 0,9% EV, correção gradual | Antitérmico: Dipirona 1g EV (para febre) | Internação em UTI neurológica | Encaminhamento: UTI — transferência se a UPA não tiver estrutura',
    expectedCommunication: 'Com a esposa: Apresentar-se brevemente, reconhecer a gravidade, explicar que a equipe está tratando imediatamente. Após estabilização inicial, explicar o diagnóstico e a necessidade de UTI | Tom: Firme, calmo e competente. Não prometer recuperação total mas transmitir que tudo está sendo feito',
    criticalErrors: [
      'Não iniciar tratamento imediatamente — perder tempo com anamnese longa antes de medicar',
      'Não administrar benzodiazepínico como primeira linha',
      'Não oferecer suporte de oxigênio (SpO₂ 88% — hipoxemia grave)',
      'Não progredir para 2ª linha se BZD falhar',
      'Não verificar glicemia capilar (causa tratável imediata)',
      'Não indicar internação em UTI'
    ]
  },
  instD: {
    title: 'CHECKLIST — CONVULSÕES QUE NÃO PARAM',
    sections: [
      {
        h: 'BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE',
        items: [
          { item: 'Apresentou-se à esposa e a acolheu com empatia em contexto de emergência', score: 0.5, ref: 'CFM 2.149/2016; Humanização MS, 2013' },
          { item: 'Comunicou diagnóstico de emergência e necessidade de UTI à esposa em linguagem acessível', score: 0.5, ref: 'CFM 2.149/2016; PNH — MS' }
        ]
      },
      {
        h: 'BLOCO 2 — ANAMNESE (com familiar)',
        items: [
          { item: 'Obteve da esposa duração total das crises e padrão (sem recuperação da consciência)', score: 0.5, ref: 'SBN — EME; MS — PCDT Epilepsia, 2021' },
          { item: 'Investigou histórico de epilepsia e uso de antiepiléptico (adesão)', score: 0.5, ref: 'MS — PCDT Epilepsia, 2021; SBN' },
          { item: 'Investigou alergias medicamentosas antes de iniciar tratamento', score: 0.5, ref: 'CFM — Segurança do Paciente; MS' }
        ]
      },
      {
        h: 'BLOCO 3 — EXAME FÍSICO E SUPORTE IMEDIATO',
        items: [
          { item: 'Avaliou e monitorizou via aérea, FR e SpO₂ imediatamente', score: 0.5, ref: 'MS — Urgências Neurológicas; SBN — EME' },
          { item: 'Ofertou oxigênio em alta concentração (máscara com reservatório) diante de SpO₂ 88%', score: 1.0, ref: 'MS — EME; SBN — EME, 2021' },
          { item: 'Aferiu glicemia capilar como primeira medida diagnóstica', score: 0.5, ref: 'MS — PCDT Epilepsia; SBN — EME, 2021' }
        ]
      },
      {
        h: 'BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
        items: [
          { item: 'Identificou o diagnóstico de estado de mal epiléptico estabelecido (> 30 min)', score: 1.0, ref: 'SBN — EME; MS — PCDT Epilepsia, 2021' },
          { item: 'Solicitou nível sérico de carbamazepina e eletrólitos', score: 0.5, ref: 'MS — PCDT Epilepsia; SBN — EME' }
        ]
      },
      {
        h: 'BLOCO 5 — CONDUTA E ORIENTAÇÃO',
        items: [
          { item: 'Administrou benzodiazepínico como 1ª linha (diazepam EV ou midazolam IM)', score: 1.0, ref: 'MS — PCDT Epilepsia, 2021; RENAME 2022; SBN — EME' },
          { item: 'Progrediu para antiepiléptico de 2ª linha (valproato EV ou levetiracetam EV) se BZD insuficiente', score: 1.0, ref: 'MS — PCDT Epilepsia, 2021; SBN — EME' },
          { item: 'Indicou internação em UTI neurológica', score: 0.5, ref: 'SBN — EME; MS — PCDT Epilepsia, 2021' },
          { item: 'Mencionou reintrodução da carbamazepina após controle das crises', score: 0.5, ref: 'MS — PCDT Epilepsia, 2021' }
        ]
      }
    ]
  }
},

{
  id: 10,
  title: 'Fraqueza progressiva nos braços e engasgos frequentes',
  sub: 'Ambulatório de Neurologia — Atenção Secundária',
  tema: 'Neurologia',
  topic: 'esclerose lateral amiotrófica',
  level: 'moderado',
  cardAccent: '#0F766E',
  instA: {
    scenario: 'Ambulatório de Neurologia — Hospital de referência. Consultório, turno matutino. Paciente encaminhado da UBS por fraqueza progressiva.',
    patient: 'O.M., 55 anos, masculino, ex-militar aposentado, sem comorbidades.',
    complaint: 'Fraqueza que começou na mão direita há 8 meses e foi progredindo para os braços. Tem engasgado muito nas últimas semanas.',
    tasks: [
      'Realize a anamnese dirigida ao caso',
      'Realize o exame físico neurológico completo e pertinente',
      'Solicite os exames complementares adequados para investigação',
      'Formule a hipótese diagnóstica e comunique ao paciente com honestidade e empatia',
      'Oriente sobre o plano de cuidados e encaminhamentos necessários'
    ]
  },
  instB: {
    vitals: { PA: '126/80 mmHg', FC: '74 bpm', FR: '18 irpm', Tax: '36,4°C', Peso: '74 kg', Altura: '1,78 m', IMC: '23,4 kg/m²' },
    physicalGeneral: 'Bom estado geral, consciente, orientado, levemente ansioso. Normocorado, hidratado. Fala com leve disartria. Musculatura de membro superior direito com atrofia visível. Sem edema.',
    physicalSeg: 'NEUROLÓGICO — MOTOR (NMS): Hiper-reflexia em membros inferiores (patelar +++/4+, aquileu +++). Sinal de Babinski positivo bilateralmente. Espasticidade leve em membros inferiores. | NEUROLÓGICO — MOTOR (NMI): Fraqueza grau 3/5 em membro superior direito (preensão e extensão de punho). Fraqueza grau 4/5 em membro superior esquerdo. Fasciculações visíveis em língua e bíceps bilateral. Atrofia da eminência tenar e hipotenar direita. | NEUROLÓGICO — BULBAR: Disartria leve. Disfagia a sólidos. Fasciculações de língua. Reflexo de gag presente mas reduzido. | NEUROLÓGICO — SENSIBILIDADE: Preservada em todos os segmentos. | NEUROLÓGICO — ESFÍNCTERES: Continentes. Sem alteração vesical ou intestinal. | RESPIRATÓRIO: FR 18 irpm. SpO₂ 96%. Sem uso de musculatura acessória no momento.',
    labs: [
      { test: 'Hemograma', val: 'Normal', ref: '—', alt: false },
      { test: 'CPK total', val: '680 U/L', ref: '24–195 U/L', alt: true },
      { test: 'TSH', val: '1,9 mUI/L', ref: '0,4–4,0 mUI/L', alt: false },
      { test: 'VHS', val: '14 mm/h', ref: '< 20 mm/h', alt: false },
      { test: 'Vitamina B12', val: '310 pg/mL', ref: '200–900 pg/mL', alt: false },
      { test: 'Sorologias (HIV, HTLV-1)', val: 'Negativas', ref: '—', alt: false }
    ],
    image: 'RM de coluna cervical e crânio (encaminhado previamente): Sem mielopatia compressiva. Atrofia de musculatura paravertebral. Sem lesões desmielinizantes. Sinal de degeneração Walleriana em tratos corticospinhais bilateral (sinal de hiperintensidade em T2 do trato piramidal) — sugestivo de degeneração do neurônio motor superior.',
    note: 'Entregar sinais vitais ao início. Entregar exame físico se candidato examinar. Entregar exames laboratoriais se solicitados. Entregar laudo da RM se solicitado. Atenção: este caso exige habilidade de comunicação de diagnóstico grave (má notícia) com emprego do protocolo SPIKES ou equivalente. Avaliar com especial atenção a forma de comunicar a hipótese diagnóstica ao paciente.',
    patientProfile: 'O.M., 55 anos, masculino, ex-militar (coronel aposentado), casado, 2 filhos adultos. Disciplinado, introvertido, não demonstra emoções facilmente. Ativo até 8 meses atrás. Notou que não conseguia mais segurar o copo com firmeza.',
    script: [
      { trigger: 'Queixa principal', speech: 'Doutor, comecei a notar uma fraqueza na mão direita há uns 8 meses. Achei que fosse esforço do treino. Mas foi piorando. Hoje não consigo apertar direito, a mão ficou fina. E tô engasgando na comida.' },
      { trigger: 'Sobre progressão', speech: 'Primeiro foi a mão direita, depois o braço todo, depois o esquerdo começou também. Parece que vai avançando.' },
      { trigger: 'Sobre as fasciculações', speech: 'Às vezes fica um tremorzinho no músculo do braço, como se o músculo estivesse pulando. Minha língua às vezes faz isso também.' },
      { trigger: 'Sobre sensibilidade', speech: 'Sensibilidade tá boa, não tenho formigamento nem dormência.' },
      { trigger: 'Sobre pernas', speech: 'As pernas ficaram meio duras, sabe? Quando ando rápido, ficam enrijecidas. Mas consigo andar ainda.' },
      { trigger: 'Sobre voz e engasgo', speech: 'A voz ficou um pouco mais grossa, falo com mais dificuldade. E engasgo na comida sólida.' },
      { trigger: 'Sobre sono e respiração', speech: 'Às vezes acordo de madrugada com falta de ar. Mas passa rápido.' },
      { trigger: 'Sobre humor', speech: 'Tô bem, psicologicamente. Sou militar, fui treinado pra encarar as coisas.' },
      { trigger: 'Pergunta ativa', speech: 'Doutor, o senhor tem alguma ideia do que pode ser? Preciso saber o que tenho.' },
      { trigger: 'Pergunta ativa', speech: 'Tem tratamento? Isso tem cura?' }
    ],
    hiddenInfo: 'Tem acordado à noite com dispneia leve — só revela se o candidato perguntar especificamente sobre sintomas respiratórios noturnos ou ortopneia | Irmão mais velho teve algo parecido e morreu há 5 anos, diagnosticado tardiamente — só revela se o candidato perguntar sobre histórico familiar de doenças neurológicas',
    actorBehavior: 'Contido, formal, não demonstra emoção facilmente. Usa linguagem objetiva e direta. Faz perguntas diretas e espera respostas diretas. Pode apresentar leve tremor no queixo (emocional suprimido) ao ouvir a hipótese diagnóstica. Se o candidato for empático e honesto, demonstra gratidão discreta ("obrigado por ser direto comigo, doutor").'
  },
  instC: {
    diagnosis: 'Esclerose Lateral Amiotrófica (ELA) — forma bulboespinhal, com acometimento de neurônio motor superior e inferior em múltiplos segmentos (membros superiores bilaterais + segmento bulbar). Critérios de El Escorial: ELA provável.',
    differentials: [
      'Mielopatia espondilótica cervical — Inclui-se pelo quadro motor progressivo; exclui-se pela RM cervical sem compressão, pelas fasciculações de língua (acometimento bulbar — incompatível com compressão cervical isolada) e pela ausência de déficit sensitivo',
      'Doença de Kennedy (Atrofia muscular bulboespinhal ligada ao X) — Inclui-se pelo padrão bulboespinhal; exclui-se pelo padrão herança (homens, recessivo ligado ao X), ausência de sinais de NMS (sem Babinski, sem espasticidade — Kennedy é puro NMI); teste genético diferencia',
      'Miastenia gravis com fadiga bulbar — Inclui-se pela disfagia e disartria; exclui-se pela ausência de ptose e diplopia, pela presença de sinais de NMS (Babinski, hiper-reflexia) e pela CPK elevada'
    ],
    context: 'Homem de 55 anos com fraqueza motora progressiva de 8 meses, iniciando em membro superior direito e evoluindo com atrofia, fasciculações e fraqueza bilateral em MMSS, sinais bulbares (disfagia, disartria, fasciculações de língua) e sinais de NMS (Babinski, espasticidade, hiper-reflexia). RM afasta mielopatia compressiva. Quadro compatível com ELA.',
    justify: 'Critérios de El Escorial (revisados por Awaji): presença concomitante de sinais de neurônio motor superior (Babinski positivo, hiper-reflexia, espasticidade) e neurônio motor inferior (atrofia, fasciculações, fraqueza distal) em múltiplos segmentos (membros superiores + bulbar) = ELA provável. CPK elevada reflete denervação muscular ativa. RM descarta causa estrutural compressiva. A ausência de déficit sensitivo é característica da ELA.',
    expectedAnamnesis: 'Início, progressão e localização da fraqueza (início focal e progressão rostrocaudal ou caudorostral) | Fasciculações (quando e onde notou) | Sintomas bulbares: disfagia, disartria, disfonia, sialorreia, engasgos | Sintomas respiratórios: dispneia aos esforços, ortopneia, acordar com falta de ar | Ausência de déficit sensitivo (característica da ELA) | Controle de esfíncteres (preservado na ELA) | Alteração cognitiva (demência frontotemporal associada em ~15% dos casos) | Histórico familiar de ELA ou doença do neurônio motor (formas familiares — ~10% dos casos) | Exposição militar, toxinas, exercício físico intenso (associações epidemiológicas) ⚠️',
    expectedPhysical: 'Sinais de NMS: hiper-reflexia, Babinski, espasticidade, sinal de Hoffmann | Sinais de NMI: atrofia muscular, fasciculações (incluindo língua), fraqueza | Avaliação bulbar: disartria, disfagia, fasciculações de língua, reflexo de gag | Avaliação respiratória: FR, SpO₂, força da tosse | Sensibilidade: preservada | Função cognitiva breve: MEEM ou avaliação da fluência verbal',
    expectedExams: [
      { exam: 'Eletroneuromiografia (EMG)', justify: 'Confirmar denervação ativa em múltiplos segmentos — exame essencial para diagnóstico', expected: 'Fasciculações, ondas positivas agudas, potenciais de unidade motora amplos' },
      { exam: 'RM de crânio e coluna cervical/torácica', justify: 'Afastar mielopatia compressiva ou lesão estrutural', expected: 'Sem compressão; sinal de trato piramidal' },
      { exam: 'CPK', justify: 'Elevada por denervação muscular ativa', expected: 'Elevada (680 U/L)' },
      { exam: 'Sorologias (HIV, HTLV-1)', justify: 'Afastar mielopatia infecciosa', expected: 'Negativas' },
      { exam: 'TSH, vitamina B12', justify: 'Causas tratáveis de neuropatia/mielopatia', expected: 'Normais' },
      { exam: 'Espirometria / CVF (encaminhar)', justify: 'Avaliar função respiratória — crucial para seguimento e decisão de VNI', expected: 'A realizar' },
      { exam: 'Teste genético para SOD1, C9orf72 (encaminhar)', justify: 'Se forma familiar suspeita', expected: 'A realizar' }
    ],
    expectedConduct: 'Farmacológica: Riluzol 50 mg VO 2x/dia — único modificador de doença aprovado no Brasil (PCDT MS/SAS, 2014); prolonga sobrevida em ~3 meses, retarda necessidade de ventilação. Sintomático: sialorreia (amitriptilina 10–25 mg/dia ou escopolamina); espasticidade (baclofeno); dor neuropática (gabapentina); depressão (ISRS) | Não farmacológica: Fonoaudiologia (disfagia, disartria), fisioterapia motora, fisioterapia respiratória, terapia ocupacional, nutrição (via oral adaptada, considerar gastrostomia quando CVF < 50%) | Encaminhamento: Centro de referência de doenças do neurônio motor / ELA — equipe multidisciplinar; pneumologia (VNI quando sintomático ou CVF < 50%); nutrição; assistência social; cuidados paliativos progressivos | Orientações ao paciente: Comunicar de forma honesta e compassiva que a hipótese é de uma doença grave e progressiva que afeta os nervos que controlam os músculos; que existem tratamentos para controlar os sintomas e retardar a progressão; que a decisão sobre suporte respiratório e outros procedimentos será construída em conjunto | Seguimento: Consultas a cada 2–3 meses em centro multidisciplinar',
    expectedCommunication: 'Apresentação: Apresentar-se; criar ambiente privado e acolhedor; perguntar se o paciente quer alguém junto durante a consulta | Comunicação do diagnóstico: Usar protocolo de má notícia (SPIKES ou equivalente): verificar o que o paciente já sabe, perguntar quanto quer saber, dar a notícia de forma gradual e honesta, acolher a reação emocional, sintetizar o plano | Escuta ativa: Respeitar o silêncio e a forma contida do paciente de lidar com a notícia; perguntar o que é mais importante para ele neste momento',
    criticalErrors: [
      'Omitir a hipótese de ELA ao comunicar ao paciente (paternalismo inadequado — paciente perguntou diretamente)',
      'Não avaliar função respiratória (SpO₂, FR, tosse) — comprometimento pulmonar é a principal causa de morte na ELA',
      'Não identificar concomitância de sinais de NMS e NMI (diagnóstico diferencial inadequado)',
      'Não encaminhar para equipe multidisciplinar e centro de referência',
      'Não prescrever riluzol (único modificador de doença aprovado e disponível no SUS)'
    ]
  },
  instD: {
    title: 'CHECKLIST — FRAQUEZA PROGRESSIVA E ENGASGOS',
    sections: [
      {
        h: 'BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE',
        items: [
          { item: 'Apresentou-se e verificou se o paciente queria alguém presente para a consulta', score: 0.5, ref: 'Protocolo SPIKES — Comunicação de Más Notícias; CFM' },
          { item: 'Comunicou a hipótese de diagnóstico grave de forma honesta, gradual e empática (SPIKES ou equivalente)', score: 1.0, ref: 'CFM 2.149/2016; ANCP — Cuidados Paliativos, 2012' },
          { item: 'Perguntou o que era mais importante para o paciente neste momento', score: 0.5, ref: 'ANCP — Cuidados Paliativos; Humanização MS, 2013' }
        ]
      },
      {
        h: 'BLOCO 2 — ANAMNESE',
        items: [
          { item: 'Caracterizou início focal e progressão da fraqueza (padrão de difusão)', score: 0.5, ref: 'SBN — ELA; MS — PCDT ELA, 2014' },
          { item: 'Investigou sintomas bulbares: disfagia, disartria, engasgos, sialorreia', score: 0.5, ref: 'SBN — ELA; MS — PCDT ELA, 2014' },
          { item: 'Investigou sintomas respiratórios: dispneia, ortopneia, despertar noturno', score: 0.5, ref: 'MS — PCDT ELA, 2014; SBN' },
          { item: 'Investigou preservação da sensibilidade (ausente na ELA)', score: 0.5, ref: 'SBN — ELA; Critérios El Escorial' }
        ]
      },
      {
        h: 'BLOCO 3 — EXAME FÍSICO',
        items: [
          { item: 'Avaliou e registrou sinais de NMS (Babinski, hiper-reflexia, espasticidade)', score: 1.0, ref: 'Critérios de El Escorial / Awaji; SBN — ELA' },
          { item: 'Avaliou e registrou sinais de NMI (atrofia, fasciculações, fraqueza)', score: 1.0, ref: 'Critérios de El Escorial / Awaji; SBN — ELA' },
          { item: 'Avaliou função respiratória (FR e SpO₂)', score: 0.5, ref: 'MS — PCDT ELA, 2014' }
        ]
      },
      {
        h: 'BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
        items: [
          { item: 'Formulou hipótese diagnóstica de ELA (ou doença do neurônio motor)', score: 1.0, ref: 'SBN — ELA; MS — PCDT ELA, 2014' },
          { item: 'Solicitou EMG como exame essencial para diagnóstico', score: 0.5, ref: 'MS — PCDT ELA, 2014; SBN' }
        ]
      },
      {
        h: 'BLOCO 5 — CONDUTA E ORIENTAÇÃO AO PACIENTE',
        items: [
          { item: 'Prescreveu riluzol (único modificador de doença aprovado — PCDT MS)', score: 1.0, ref: 'MS — PCDT ELA, 2014; RENAME 2022' },
          { item: 'Encaminhou para equipe multidisciplinar e centro de referência', score: 0.5, ref: 'MS — PCDT ELA, 2014' }
        ]
      }
    ]
  }
},

{
  id: 11,
  title: 'Esquecimentos e confusão mental em paciente com histórico de pressão alta',
  sub: 'Ambulatório de Geriatria / Neurologia — Atenção Secundária',
  tema: 'Neurologia',
  topic: 'demência vascular',
  level: 'moderado',
  cardAccent: '#1E40AF',
  instA: {
    scenario: 'Ambulatório de Neurologia/Geriatria. Consultório, turno matutino. Paciente acompanhado por filha.',
    patient: 'H.N., 72 anos, masculino, ex-funcionário público aposentado, hipertenso com dois episódios de AVC prévios.',
    complaint: 'Filha relata que o pai piorou dos esquecimentos depois dos "derrames" e que está confundindo nomes e se perdendo em casa.',
    tasks: [
      'Realize a anamnese dirigida ao caso (incluindo história com o familiar)',
      'Realize o exame físico e cognitivo pertinente',
      'Solicite os exames complementares adequados',
      'Formule a hipótese diagnóstica e os diagnósticos diferenciais',
      'Proponha a conduta e oriente o familiar sobre cuidados e suporte'
    ]
  },
  instB: {
    vitals: { PA: '148/90 mmHg', FC: '78 bpm', FR: '16 irpm', Tax: '36,3°C', Peso: '71 kg', Altura: '1,69 m', IMC: '24,9 kg/m²' },
    physicalGeneral: 'Regular estado geral, consciente, desorientado em tempo (não sabe o dia da semana nem o mês), orientado em lugar e pessoa. Fácies levemente assimétrica (sequela de AVC). Marcha de pequenos passos, levemente espástica.',
    physicalSeg: 'NEUROLÓGICO — MOTOR: Leve hemiparesia direita residual (força 4/5 em MSD). Hiper-reflexia em hemicorpo direito. Sinal de Babinski à direita. Marcha hemiplégica leve. | NEUROLÓGICO — COGNITIVO (MEEM): 16/30 pontos. Desorientação temporal (0/5), orientação espacial preservada (5/5). Memória imediata preservada (3/3). Evocação reduzida (1/3). Atenção e cálculo comprometidos (1/5). Linguagem preservada. Cópia de figuras comprometida (0/1). | NEUROLÓGICO — MARCHA: Passos curtos, cadência lenta, base alargada — marcha de pequenos passos (apraxia de marcha). | CARDIOVASCULAR: Ritmo regular em 2 tempos. PA 148/90 mmHg. Sem sopros.',
    labs: [
      { test: 'TSH', val: '1,7 mUI/L', ref: '0,4–4,0 mUI/L', alt: false },
      { test: 'Vitamina B12', val: '218 pg/mL', ref: '200–900 pg/mL', alt: false },
      { test: 'Hemograma', val: 'Normal', ref: '—', alt: false },
      { test: 'Glicemia de jejum', val: '108 mg/dL', ref: '70–99 mg/dL', alt: true },
      { test: 'Colesterol total', val: '212 mg/dL', ref: '< 200 mg/dL', alt: true },
      { test: 'LDL', val: '138 mg/dL', ref: '< 130 mg/dL', alt: true },
      { test: 'Sódio', val: '138 mEq/L', ref: '135–145 mEq/L', alt: false },
      { test: 'Creatinina', val: '1,2 mg/dL', ref: '0,6–1,2 mg/dL', alt: false }
    ],
    image: 'RM de crânio (realizada há 3 meses): Múltiplos focos de hipersinal em T2/FLAIR na substância branca periventricular e subcortical bilateral (leucoaraiose grau 3 — Fazekas). Lesão lacunar no putâmen esquerdo e na cápsula interna direita, compatível com infartos lacunares crônicos. Atrofia cerebral moderada, predominando em lobos frontais. Ausência de lesões expansivas ou hemorrágicas.',
    note: 'Entregar sinais vitais ao início. Entregar exame físico se candidato examinar. O MEEM já foi aplicado pela equipe de triagem — disponível para interpretação pelo candidato. Entregar resultado dos exames laboratoriais se solicitados. Entregar laudo da RM se solicitado. Filha presente — importante fonte de história clínica. Atentar para comunicação com familiar: orientar sobre cuidados, segurança domiciliar e suporte.',
    patientProfile: 'H.N., 72 anos, masculino, ex-funcionário público, aposentado, casado (esposa falecida há 2 anos). Mora com a filha. Dois AVCi prévios (há 3 anos e há 1 ano). Em uso de AAS 100 mg/dia, enalapril 10 mg 2x/dia, sinvastatina 40 mg/dia (referido pela filha como uso irregular).',
    script: [
      { trigger: 'Queixa principal', speech: 'Tô bem... acho. Às vezes fico um pouco confuso, mas é normal da idade...' },
      { trigger: 'Sobre os esquecimentos', speech: 'É... às vezes esqueço o nome das coisas. Mas todo mundo esquece, né?' },
      { trigger: 'Gatilho para filha — sobre piora', speech: 'Filha fala: "Doutor, o problema é que ele piorou muito depois do segundo derrame. Fica perdido em casa, já saiu de noite sem saber onde estava, confunde os nomes dos netos."' },
      { trigger: 'Gatilho para filha — sobre medicações', speech: 'Filha fala: "Ele não toma os remédios direto não, doutor. Às vezes esquece, às vezes fala que não precisa."' },
      { trigger: 'Sobre orientação', speech: 'Eu sei onde tô... tô no hospital, né? Mas o dia que é hoje... não sei bem.' },
      { trigger: 'Pergunta ativa do paciente', speech: 'Eu tô ficando louco, doutor?' },
      { trigger: 'Pergunta ativa da filha', speech: 'Doutor, isso tem jeito? Vai piorar? O que eu posso fazer em casa pra ajudar?' }
    ],
    hiddenInfo: 'Paciente teve episódio de perambulação noturna há 2 semanas, saiu de casa e foi encontrado na rua pelo vizinho — só revela (filha) se candidato perguntar sobre episódios de desorientação ou perambulação noturna | Paciente apresenta incontinência urinária de urgência — só revela se candidato perguntar sobre controle de esfíncteres',
    actorBehavior: 'Paciente: dócil, responde com frases curtas, minimiza os problemas. Alguma confusão ao ser perguntado sobre datas e nomes. Fica um pouco ansioso ao ser avaliado cognitivamente. Filha: muito preocupada, sobrecarregada, pergunta sobre suporte. Receptiva a orientações práticas.'
  },
  instC: {
    diagnosis: 'Demência vascular subcortical (ou demência de múltiplos infartos), MEEM 16/30, em paciente com dois AVCis prévios, leucoaraiose grau 3 e infartos lacunares múltiplos.',
    differentials: [
      'Doença de Alzheimer — Inclui-se pela demência progressiva; exclui-se pelo padrão escalonado (piora após cada AVC), pelos sinais motores focais, pela leucoaraiose proeminente e pelos múltiplos AVCs na RM',
      'Demência mista (vascular + Alzheimer) — Muito prevalente em idosos; pode coexistir neste caso; investigação com biomarcadores se disponível ⚠️',
      'Hidrocefalia de pressão normal — Inclui-se pela marcha de pequenos passos e déficit cognitivo; exclui-se pela ausência da tríade completa (falta incontinência proeminente e hidrocefalia comunicante na RM)',
      'Hipotireoidismo com quadro demencial — Exclui-se pelo TSH normal'
    ],
    context: 'Idoso de 72 anos com dois AVCis prévios, hipertensão arterial de controle irregular, apresentando declínio cognitivo progressivo com padrão escalonado, déficits em memória, atenção e função executiva (MEEM 16/30), sequelas motoras (hemiparesia direita, marcha de pequenos passos) e RM com leucoaraiose grave e infartos lacunares múltiplos — quadro compatível com demência vascular subcortical.',
    justify: 'Critérios de demência vascular: (1) declínio cognitivo com comprometimento funcional; (2) doença cerebrovascular estabelecida (AVCs, leucoaraiose, lacunas); (3) relação temporal entre eventos vasculares e declínio cognitivo (piora após cada AVC — padrão escalonado). O MEEM 16/30 confirma déficit cognitivo moderado. A marcha de pequenos passos e hiper-reflexia indicam comprometimento subcortical. O controle irregular da PA perpetua a progressão.',
    expectedAnamnesis: 'Início e padrão de progressão do declínio cognitivo (gradual vs. escalonado) | Relação com episódios vasculares prévios (piora após AVC) | Déficits específicos: memória, linguagem, executivo, orientação | Comportamentos de risco: perambulação, agressividade, alucinações | Controle de esfíncteres | Qualidade do sono | Histórico de HAS, DM, dislipidemia, FA — controle dos fatores de risco | Adesão à medicação | Funcionalidade: atividades de vida diária básicas e instrumentais | Suporte familiar e carga do cuidador',
    expectedPhysical: 'PA (elevada — controle inadequado) | Exame neurológico: sinais de NMS residuais, marcha | Avaliação cognitiva: MEEM e/ou MoCA (interpretar resultado) | Fundoscopia: retinopatia hipertensiva',
    expectedExams: [
      { exam: 'TSH', justify: 'Afastar hipotireoidismo como causa tratável', expected: 'Normal' },
      { exam: 'Vitamina B12', justify: 'Afastar deficiência como causa tratável', expected: 'Normal/baixo limite' },
      { exam: 'Glicemia', justify: 'Controle do DM — fator de risco vascular', expected: 'Pré-diabetes' },
      { exam: 'Perfil lipídico', justify: 'Dislipidemia — fator de risco cardiovascular', expected: 'LDL elevado' },
      { exam: 'RM de crânio', justify: 'Avaliar extensão da doença cerebrovascular', expected: 'Leucoaraiose, lacunas' },
      { exam: 'MEEM / MoCA', justify: 'Quantificar e rastrear declínio cognitivo', expected: 'MEEM 16/30' }
    ],
    expectedConduct: "Farmacológica: Antiagregação: manter AAS 100 mg/dia (ou clopidogrel se AAS contraindicado). Anti-hipertensivo: ajustar — meta PA < 130/80 mmHg em demência vascular (SBC/SBH 2020); não hipotensionar abruptamente. Estatina: atorvastatina 40–80 mg/dia (substituir sinvastatina se uso irregular). Não há donepezil ou memantina com indicação formal para demência vascular pura — uso controverso ⚠️; pode ser considerado em demência mista (off-label no Brasil). Controle de sintomas neuropsiquiátricos se presentes (agitação, depressão) | Não farmacológica: Estimulação cognitiva, fisioterapia motora, terapia ocupacional, fonoaudiologia, adaptação do ambiente domiciliar (segurança), orientação nutricional | Encaminhamento: Neurologia / Geriatria para seguimento; assistência social para suporte ao cuidador; CAPS ou centro-dia se disponível | Orientações ao familiar: Explicar que é uma demência relacionada aos derrames, que o controle rigoroso da pressão é fundamental para evitar novos episódios e piora; orientar sobre segurança domiciliar (trancas, identificação, supervisão noturna); informar sobre rede de suporte ao cuidador | Seguimento: Consultas trimestrais; reavaliação cognitiva semestral",
    expectedCommunication: "Com o paciente: Tratá-lo com respeito e dignidade; responder à pergunta 'estou ficando louco?' com honestidade e compaixão ('não é loucura, o senhor tem um problema nos vasos do cérebro que está afetando a memória') | Com a filha: Reconhecer a sobrecarga, oferecer informações sobre suporte ao cuidador, validar o esforço dela | Escuta ativa: Perguntar sobre as principais dificuldades da filha no cuidado",
    criticalErrors: [
      'Não controlar a PA (principal fator modificável que previne progressão)',
      'Diagnosticar Alzheimer sem investigar doença cerebrovascular (RM, história de AVCs)',
      'Não aplicar ou interpretar avaliação cognitiva objetiva (MEEM/MoCA)',
      'Não orientar a família sobre segurança domiciliar e perambulação noturna',
      'Não reconhecer ou abordar a sobrecarga do cuidador'
    ]
  },
  instD: {
    title: 'CHECKLIST — ESQUECIMENTOS E CONFUSÃO APÓS DERRAMES',
    sections: [
      {
        h: 'BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE',
        items: [
          { item: 'Apresentou-se ao paciente e à filha, dirigindo-se ao paciente com respeito e dignidade', score: 0.5, ref: 'CFM 2.149/2016; Estatuto do Idoso — Lei 10.741/2003' },
          { item: 'Perguntou à filha sobre as principais dificuldades do cuidado (sobrecarga do cuidador)', score: 0.5, ref: 'MS — Protocolo de Demências, 2022; Humanização MS' },
          { item: "Respondeu à pergunta do paciente ('estou ficando louco?') com honestidade e empatia", score: 0.5, ref: 'CFM 2.149/2016; ANCP — Cuidados Paliativos' }
        ]
      },
      {
        h: 'BLOCO 2 — ANAMNESE',
        items: [
          { item: 'Caracterizou o padrão de progressão do declínio cognitivo (escalonado vs. gradual)', score: 1.0, ref: 'MS — Protocolo de Demências, 2022; SBN' },
          { item: 'Investigou a relação temporal entre AVCs e piora cognitiva', score: 0.5, ref: 'MS — Protocolo de Demências, 2022; SBN' },
          { item: 'Perguntou sobre atividades de vida diária básicas e instrumentais', score: 0.5, ref: 'MS — Protocolo de Demências, 2022' },
          { item: 'Investigou comportamentos de risco: perambulação, agressividade', score: 0.5, ref: 'MS — Protocolo de Demências, 2022' },
          { item: 'Investigou adesão às medicações e controle dos fatores de risco vasculares', score: 0.5, ref: 'SBC/SBH — HAS, 2020; MS — Demências' }
        ]
      },
      {
        h: 'BLOCO 3 — EXAME FÍSICO E COGNITIVO',
        items: [
          { item: 'Interpretou ou aplicou avaliação cognitiva objetiva (MEEM ou MoCA)', score: 1.0, ref: 'MS — Protocolo de Demências, 2022; SBN' },
          { item: 'Avaliou PA e identificou controle inadequado', score: 0.5, ref: 'SBC/SBH — HAS, 2020' },
          { item: 'Avaliou marcha e sinais neurológicos focais residuais', score: 0.5, ref: 'SBN — Demência Vascular' }
        ]
      },
      {
        h: 'BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
        items: [
          { item: 'Formulou hipótese diagnóstica de demência vascular (relacionando AVCs e declínio cognitivo)', score: 1.0, ref: 'MS — Protocolo de Demências, 2022; SBN' },
          { item: 'Solicitou ou interpretou RM de crânio como exame essencial', score: 0.5, ref: 'MS — Protocolo de Demências, 2022' }
        ]
      },
      {
        h: 'BLOCO 5 — CONDUTA E ORIENTAÇÃO AO FAMILIAR',
        items: [
          { item: 'Orientou sobre controle rigoroso da PA como principal medida de prevenção de progressão', score: 0.5, ref: 'MS — Protocolo de Demências; SBC/SBH 2020' },
          { item: 'Orientou sobre segurança domiciliar e riscos de perambulação noturna', score: 0.5, ref: 'MS — Protocolo de Demências, 2022' },
          { item: 'Encaminhou para equipe multidisciplinar (fisioterapia, terapia ocupacional, assistência social)', score: 0.5, ref: 'MS — Protocolo de Demências, 2022' }
        ]
      }
    ]
  }
},

{
  id: 12,
  title: 'Tremor na mão e lentidão para caminhar',
  sub: 'Ambulatório de Neurologia — Atenção Secundária',
  tema: 'Neurologia',
  topic: 'doença de Parkinson',
  level: 'moderado',
  cardAccent: '#166534',
  instA: {
    scenario: 'Ambulatório de Neurologia — Hospital de referência. Consultório, turno vespertino.',
    patient: 'D.F., 66 anos, feminino, professora aposentada, sem diagnóstico neurológico prévio.',
    complaint: 'Tremor na mão direita em repouso há 1 ano e lentidão para se movimentar e caminhar.',
    tasks: [
      'Realize a anamnese dirigida ao caso',
      'Realize o exame físico neurológico pertinente',
      'Solicite os exames complementares necessários para afastar causas secundárias',
      'Formule a hipótese diagnóstica e os diagnósticos diferenciais',
      'Proponha a conduta terapêutica e oriente a paciente sobre o manejo da condição'
    ]
  },
  instB: {
    vitals: { PA: '124/76 mmHg', FC: '68 bpm', FR: '14 irpm', Tax: '36,2°C', Peso: '64 kg', Altura: '1,60 m', IMC: '25,0 kg/m²' },
    physicalGeneral: 'Bom estado geral, consciente, orientada. Hipomimia (face inexpressiva, "máscara"). Voz hipofônica. Postura em discreta anteriorização do tronco. Tremor de repouso em mão direita visível durante a consulta.',
    physicalSeg: 'NEUROLÓGICO — TREMOR: Tremor de repouso em mão direita, 4–5 Hz, tipo "contar moedas/pílula rolling". Desaparece com movimento voluntário. Assimétrico (apenas à direita). | NEUROLÓGICO — RIGIDEZ: Rigidez em roda denteada em punho e cotovelo direito. Leve rigidez em punho esquerdo. | NEUROLÓGICO — BRADICINESIA: Bradicinesia confirmada: movimentos de oponência polegar-dedo progressivamente mais lentos e de menor amplitude após algumas repetições. Marcha com diminuição do balanceio de membro superior direito. | NEUROLÓGICO — POSTURA E MARCHA: Marcha de pequenos passos, sem balanceio de MSD. Sem festinação. Reflexos posturais: leve instabilidade ao teste de pull. | NEUROLÓGICO — COGNITIVO: MEEM 27/30. Preservado. | NEUROLÓGICO — REFLEXOS: Simétricos, sem Babinski. Sem déficit sensitivo.',
    labs: [
      { test: 'TSH', val: '1,4 mUI/L', ref: '0,4–4,0 mUI/L', alt: false },
      { test: 'Ceruloplasmina', val: '28 mg/dL', ref: '20–60 mg/dL', alt: false },
      { test: 'Cobre sérico', val: '82 mcg/dL', ref: '70–140 mcg/dL', alt: false },
      { test: 'Hemograma', val: 'Normal', ref: '—', alt: false },
      { test: 'Glicemia de jejum', val: '96 mg/dL', ref: '70–99 mg/dL', alt: false }
    ],
    image: 'RM de crânio: Sem lesões estruturais, sem hidrocefalia, sem lesões de substância negra visíveis na RM convencional (a neuromelanina e o DAT-scan não estão disponíveis neste serviço). Sem calcificações de gânglios da base. Sem lesões isquêmicas ou hemorrágicas.',
    note: 'Entregar sinais vitais ao início. Entregar exame físico se candidato examinar. Entregar exames laboratoriais se solicitados. Entregar laudo da RM se solicitado. Atentar para a tríade parkinsoniana: tremor de repouso + rigidez + bradicinesia. O candidato deve identificar a tríade, propor tratamento (levodopa + carbidopa ou agonista dopaminérgico) e orientar a paciente sobre a natureza crônica e progressiva da doença.',
    patientProfile: 'D.F., 66 anos, feminino, professora aposentada, casada, 3 filhos. Ativa, costura e lê regularmente. Não usa medicações psicotrópicas (afasta parkinsonismo induzido por neurolépticos). Nega uso de metoclopramida, haloperidol ou antipsicóticos.',
    script: [
      { trigger: 'Queixa principal', speech: 'Doutora, faz uns 12 meses que minha mão direita fica tremendo, principalmente quando tô parada assistindo televisão ou conversando. Quando vou pegar alguma coisa, para.' },
      { trigger: 'Sobre lentidão', speech: 'Me tornei mais lenta. Antes escrevia rápido, agora fico devagar e a letra ficou miudinha. Demoro mais pra me vestir de manhã.' },
      { trigger: 'Sobre o tremor', speech: 'O tremor é só quando tô em repouso. Minha filha filmou e mostrou pra mim. Parece que tô contando dinheiro com os dedos.' },
      { trigger: 'Sobre rigidez', speech: 'O braço direito ficou meio duro. Quando dobro, sinto como se tivesse um tranquinho.' },
      { trigger: 'Sobre a face', speech: 'Meu marido fala que minha cara tá "parada", que não expresso mais. Mas eu tô sentindo tudo normal.' },
      { trigger: 'Sobre voz', speech: 'A voz ficou mais baixinha, meus netos falam que não me ouvem mais.' },
      { trigger: 'Sobre olfato', speech: 'Perdi o olfato faz uns 2 anos... achei que era sequela de Covid mas nunca voltou.' },
      { trigger: 'Sobre humor', speech: 'Tenho ficado um pouco mais pra baixo, sabe? Mais quieta.' },
      { trigger: 'Pergunta ativa', speech: 'Isso é Parkinson, doutora?' },
      { trigger: 'Pergunta ativa', speech: 'Tem remédio? Vai melhorar com o tratamento?' }
    ],
    hiddenInfo: 'Constipação intestinal há 3 anos, não relatada espontaneamente — só revela se o candidato perguntar sobre sintomas autonômicos ou alterações intestinais (sintoma não-motor da DP) | Irmão mais novo tem tremor, mas nunca foi investigado — só revela se o candidato perguntar sobre histórico familiar de tremor ou doença neurológica',
    actorBehavior: 'Discreta e educada. Demonstra preocupação moderada — mais curiosa do que ansiosa. Hipomímica (manter expressão facial neutra durante toda a consulta). Fala com volume baixo. Ao ouvir "Parkinson", reage com seriedade mas sem desespero — espera confirmação do diagnóstico. Receptiva às orientações.'
  },
  instC: {
    diagnosis: 'Doença de Parkinson (DP) idiopática, estágio inicial-moderado (Hoehn e Yahr 2), com início assimétrico à direita. Presença de sintomas não-motores: hiposmia, constipação, hipomimia, hipofonia e sintomas depressivos leves.',
    differentials: [
      'Tremor essencial — Inclui-se pelo tremor unilateral; exclui-se pelo tipo de tremor (repouso vs. postural/cinético no TE), pela bradicinesia e rigidez ausentes no TE, e pela ausência de resposta ao álcool (paciente não relatou)',
      'Parkinsonismo induzido por fármacos (metoclopramida, antipsicóticos) — Exclui-se pela ausência de uso dessas medicações; deve sempre ser investigado',
      'Atrofia de múltiplos sistemas (AMS) — Inclui-se nas formas parkinsoniana (AMS-P); exclui-se pela ausência de disfunção autonômica proeminente, pela assimetria do tremor e por resposta esperada à levodopa',
      'Paralisia supranuclear progressiva (PSP) — Inclui-se; exclui-se pela ausência de queda precoce para trás, de paralisia do olhar vertical e de simetria dos sintomas'
    ],
    context: 'Mulher de 66 anos com tremor de repouso assimétrico, bradicinesia, rigidez em roda denteada e marcha de pequenos passos há 12 meses, com sintomas não-motores prodrômicos (hiposmia há 2 anos, constipação, depressão leve). Sem uso de medicamentos dopaminérgicos ou antidopaminérgicos. RM normal. Quadro clínico típico de Doença de Parkinson idiopática.',
    justify: 'Critérios de diagnóstico clínico da MDS (Movement Disorder Society) para DP: (1) bradicinesia obrigatória + (2) tremor de repouso E/OU rigidez. Critérios de suporte: início assimétrico, tremor de repouso de 4–5 Hz, resposta à levodopa (a confirmar), hiposmia. Ausência de red flags (queda precoce, paralisia do olhar, disfunção autonômica grave, simetria desde o início). Afastadas causas secundárias (sem uso de antidopaminérgicos, RM normal, ceruloplasmina normal).',
    expectedAnamnesis: 'Caracterização do tremor: tipo (repouso vs. ação), localização, simetria, frequência, início | Rigidez e bradicinesia: lentidão nas tarefas cotidianas, escrita micrográfica | Postura e marcha: passos curtos, festinação, instabilidade postural, quedas | Sintomas não-motores: hiposmia, constipação, distúrbio comportamental do sono REM, depressão, disfunção cognitiva, disfunção autonômica (hipotensão ortostática, bexiga hiperativa) | Uso de medicamentos antidopaminérgicos (metoclopramida, haloperidol, risperidona) | Histórico familiar de tremor ou Parkinson | Exposição a pesticidas ou manganês (fatores de risco) ⚠️',
    expectedPhysical: 'Inspeção: hipomimia, voz hipofônica, postura, tremor visível | Rigidez em roda denteada: avaliar punho e cotovelo (pedir para relaxar o braço enquanto examina) | Bradicinesia: oponência polegar-dedo (10x cada mão), abertura e fechamento de mão, pronossupinação | Tremor de repouso: 4–5 Hz, desaparece com ação voluntária | Marcha: passos, balanceio de braços, festinação, virada em bloco | Reflexos posturais: teste de pull (empurrar ombros para trás) | MEEM: descartar demência precoce (afasta síndrome de Parkinson-plus)',
    expectedExams: [
      { exam: 'TSH', justify: 'Afastar hipotireoidismo como causa de tremor/bradicinesia', expected: 'Normal' },
      { exam: 'Ceruloplasmina e cobre sérico', justify: 'Afastar doença de Wilson (especialmente em jovens)', expected: 'Normais' },
      { exam: 'RM de crânio', justify: 'Afastar parkinsonismo secundário estrutural', expected: 'Normal' },
      { exam: 'DAT-scan (DaTscan) — encaminhar', justify: 'Confirmar deficiência dopaminérgica (não disponível em todos os centros) ⚠️', expected: 'A realizar' }
    ],
    expectedConduct: 'Farmacológica: Estágio inicial com incapacidade funcional: iniciar tratamento. 1ª escolha no Brasil (RENAME/MS/SBN): Levodopa + carbidopa (25/250 mg), 1 comprimido 3x/dia, longe das refeições proteicas. Dose inicial menor (25/100 mg) com titulação gradual. Alternativa em pacientes jovens (< 65 anos) para poupar levodopa: agonista dopaminérgico (pramipexol 0,125 mg 3x/dia com titulação). Neste caso (66 anos), levodopa é preferida. Tratamento da depressão leve: ISRS (sertralina ou paroxetina) se sintomática | Não farmacológica: Fisioterapia (equilíbrio, marcha, LSVT BIG), fonoaudiologia (LSVT LOUD), terapia ocupacional, atividade física regular (especialmente dança, boxe adaptado, tango) | Encaminhamento: Neurologia especializada em movimento / centro de referência para DP; fisioterapia e fonoaudiologia | Orientações ao paciente: Explicar que é uma doença crônica e progressiva, mas tratável; que o tratamento melhora significativamente os sintomas; que não existe cura, mas que a maioria das pessoas mantém boa qualidade de vida por muitos anos com tratamento adequado | Seguimento: Retorno em 4–6 semanas para avaliar resposta ao tratamento',
    expectedCommunication: 'Apresentação: Apresentar-se, estabelecer rapport, notar a hipomimia sem apontar de forma invasiva | Comunicação do diagnóstico: Confirmar a suspeita de Parkinson com honestidade; usar linguagem simples; destacar que há tratamento eficaz; não minimizar, mas transmitir esperança realista | Escuta ativa: Perguntar como ela está se sentindo; verificar quais atividades são mais importantes para ela manter (costurar, escrever)',
    criticalErrors: [
      'Não identificar a tríade parkinsoniana (tremor de repouso + rigidez + bradicinesia)',
      'Confundir tremor de repouso com tremor essencial (não realizar o exame físico diferencial)',
      'Não investigar uso de antidopaminérgicos (causa tratável e reversível de parkinsonismo)',
      'Não iniciar tratamento em paciente com incapacidade funcional',
      'Não mencionar fisioterapia e reabilitação como parte essencial do tratamento'
    ]
  },
  instD: {
    title: 'CHECKLIST — TREMOR EM REPOUSO E LENTIDÃO DE MOVIMENTOS',
    sections: [
      {
        h: 'BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE',
        items: [
          { item: 'Apresentou-se pelo nome à paciente', score: 0.3, ref: 'CFM 2.149/2016' },
          { item: 'Confirmou a hipótese de Doença de Parkinson com honestidade e empatia, sem minimizar', score: 0.5, ref: 'CFM 2.149/2016; Humanização MS, 2013' },
          { item: 'Perguntou quais atividades são mais importantes para a paciente manter (expectativas e valores)', score: 0.5, ref: 'ANCP — Cuidados Paliativos; Humanização MS' }
        ]
      },
      {
        h: 'BLOCO 2 — ANAMNESE',
        items: [
          { item: 'Caracterizou o tremor (tipo repouso, frequência, assimétrico, desaparece com ação)', score: 1.0, ref: 'Critérios MDS para DP ⚠️; SBN — Doença de Parkinson' },
          { item: 'Investigou bradicinesia (lentidão nas tarefas cotidianas, escrita micrográfica)', score: 0.5, ref: 'Critérios MDS para DP; SBN' },
          { item: 'Investigou sintomas não-motores: hiposmia, constipação, depressão, sono', score: 0.5, ref: 'SBN — DP; MS — PCDT Parkinson, 2017' },
          { item: 'Perguntou sobre uso de antidopaminérgicos (metoclopramida, antipsicóticos)', score: 0.5, ref: 'SBN — DP; MS — PCDT Parkinson, 2017' }
        ]
      },
      {
        h: 'BLOCO 3 — EXAME FÍSICO',
        items: [
          { item: 'Avaliou rigidez em roda denteada (técnica: relaxamento passivo do membro)', score: 1.0, ref: 'Critérios MDS para DP; SBN — DP' },
          { item: 'Avaliou bradicinesia (oponência polegar-dedo ou abertura de mão repetida)', score: 1.0, ref: 'Critérios MDS para DP ⚠️; SBN' },
          { item: 'Avaliou marcha e reflexos posturais (teste de pull)', score: 0.5, ref: 'SBN — DP; MS — PCDT Parkinson, 2017' }
        ]
      },
      {
        h: 'BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
        items: [
          { item: 'Formulou hipótese diagnóstica de Doença de Parkinson (tríade completa)', score: 1.0, ref: 'SBN — DP; MS — PCDT Parkinson, 2017' },
          { item: 'Solicitou TSH e ceruloplasmina para afastar causas tratáveis', score: 0.3, ref: 'MS — PCDT Parkinson, 2017; SBN' }
        ]
      },
      {
        h: 'BLOCO 5 — CONDUTA E ORIENTAÇÃO AO PACIENTE',
        items: [
          { item: 'Prescreveu levodopa + carbidopa (ou agonista dopaminérgico) como tratamento inicial', score: 1.0, ref: 'MS — PCDT Parkinson, 2017; RENAME 2022' },
          { item: 'Encaminhou para fisioterapia e fonoaudiologia (reabilitação)', score: 0.5, ref: 'MS — PCDT Parkinson, 2017; SBN' },
          { item: 'Orientou sobre natureza crônica e progressiva com expectativa realista e positiva', score: 0.4, ref: 'CFM 2.149/2016; Humanização MS' }
        ]
      }
    ]
  }
},

{
  id: 13,
  title: 'Filha preocupada com esquecimentos frequentes do pai idoso',
  sub: 'UBS — Atenção Primária',
  tema: 'Neurologia',
  topic: 'doença de Alzheimer',
  level: 'moderado',
  cardAccent: '#9333EA',
  instA: {
    scenario: 'Atenção Primária — UBS. Consultório, turno matutino. Paciente idoso acompanhado pela filha.',
    patient: 'T.A., 78 anos, masculino, ex-comerciante aposentado, sem diagnóstico neurológico prévio. Filha de 48 anos acompanha e traz o paciente.',
    complaint: 'Filha relata que o pai está esquecendo coisas recentes, repetindo perguntas e ficou desorientado em casa na semana passada.',
    tasks: [
      'Realize a anamnese dirigida ao caso (incluindo história com o familiar)',
      'Realize o exame físico e a avaliação cognitiva objetiva',
      'Solicite os exames complementares necessários para afastar causas tratáveis de demência',
      'Formule a hipótese diagnóstica e os diagnósticos diferenciais',
      'Oriente o familiar sobre o diagnóstico, os próximos passos e o suporte disponível'
    ]
  },
  instB: {
    vitals: { PA: '132/82 mmHg', FC: '72 bpm', FR: '15 irpm', Tax: '36,4°C', Peso: '68 kg', Altura: '1,65 m', IMC: '25,0 kg/m²' },
    physicalGeneral: 'Bom estado geral, consciente, orientado em pessoa (sabe o próprio nome e da filha) mas desorientado em tempo (não sabe o ano, mês ou dia) e levemente desorientado em lugar ("estou no médico... acho que é aqui perto de casa"). Eupneico, normocorado, hidratado.',
    physicalSeg: 'NEUROLÓGICO — COGNITIVO (MEEM): 18/30. Desorientação temporal (0/5). Orientação espacial parcial (3/5). Memória imediata normal (3/3). Evocação espontânea prejudicada (0/3, melhora com pista semântica para 1/3). Atenção e cálculo comprometidos (2/5). Linguagem levemente comprometida (dificuldade para nomear relógio de pulso). Cópia de figuras comprometida. | NEUROLÓGICO — MOTOR: Sem déficit focal. Força simétrica. Sem rigidez. Sem tremor de repouso. Marcha normal para a idade. Reflexos normais e simétricos. Sem Babinski. | NEUROLÓGICO — SENSIBILIDADE: Preservada. | CARDIOVASCULAR: Ritmo regular. PA controlada.',
    labs: [
      { test: 'TSH', val: '6,8 mUI/L', ref: '0,4–4,0 mUI/L', alt: true },
      { test: 'T4 livre', val: '0,6 ng/dL', ref: '0,7–1,8 ng/dL', alt: true },
      { test: 'Vitamina B12', val: '168 pg/mL', ref: '200–900 pg/mL', alt: true },
      { test: 'Ácido fólico', val: '7,2 ng/mL', ref: '4,0–20,0 ng/mL', alt: false },
      { test: 'Glicemia de jejum', val: '102 mg/dL', ref: '70–99 mg/dL', alt: true },
      { test: 'Hemograma', val: 'Normal', ref: '—', alt: false },
      { test: 'Sódio', val: '137 mEq/L', ref: '135–145 mEq/L', alt: false },
      { test: 'Creatinina', val: '1,0 mg/dL', ref: '0,6–1,2 mg/dL', alt: false },
      { test: 'VDRL', val: 'Não reagente', ref: '—', alt: false }
    ],
    image: 'TC de crânio sem contraste: Atrofia cortical difusa, predominando em regiões temporais e parietais bilaterais. Alargamento de sulcos e cisternas. Hipocampos com redução de volume bilateral (atrofia hipocampal). Sem lesões expansivas, sem sangramento, sem desvio de linha média. Ventrículos levemente dilatados proporcionalmente à atrofia. Sem evidência de infartos corticais ou lacunares.',
    note: 'Entregar sinais vitais ao início. Entregar exame físico se candidato examinar. Entregar exames laboratoriais somente se solicitados — atentar para o TSH e B12 elevados, que são causas tratáveis de declínio cognitivo e devem ser identificados e corrigidos antes de fechar diagnóstico definitivo de Alzheimer. Entregar TC se solicitada. O MEEM já foi aplicado na triagem — disponível para interpretação. Atenção à comunicação com o familiar.',
    patientProfile: 'T.A., 78 anos, masculino, ex-comerciante aposentado, viúvo, mora com a filha. Sem comorbidades conhecidas antes desta consulta. Não usa medicações regulares. Fumante até os 60 anos (parou há 18 anos). Baixa escolaridade (4 anos de estudo formal — considerar na interpretação do MEEM: ponto de corte ajustado para analfabetos/baixa escolaridade).',
    script: [
      { trigger: 'Queixa principal', speech: 'Eu tô bem... A minha filha que acha que eu esqueço as coisas. Às vezes esqueço mesmo, mas é normal, né? Tenho quase 80 anos.' },
      { trigger: 'Sobre os esquecimentos', speech: 'Às vezes esqueço onde coloco as coisas. Outro dia não lembrava se tinha almoçado ou não.' },
      { trigger: 'Gatilho para filha — sobre comportamento', speech: 'Filha fala: "Doutor, ele pergunta a mesma coisa umas 5 vezes seguidas, às vezes em menos de 10 minutos. Semana passada ficou desorientado dentro de casa de madrugada, não sabia onde era o banheiro."' },
      { trigger: 'Gatilho para filha — sobre atividades', speech: 'Filha fala: "Ele não consegue mais cuidar das finanças, errava no troco quando ajudava no caixa. Parou de fazer as coisas que gostava, como jogar dominó."' },
      { trigger: 'Sobre orientação temporal', speech: 'Que ano é esse? Ah... dois mil e... não sei não.' },
      { trigger: 'Sobre humor', speech: 'Eu tô bem... às vezes fico um pouco triste, mas é normal da idade.' },
      { trigger: 'Pergunta ativa do paciente', speech: 'Eu tô ficando velho mesmo, né doutor?' },
      { trigger: 'Pergunta ativa da filha', speech: 'Doutor, isso é Alzheimer? Como vou cuidar dele? Trabalho fora o dia todo.' }
    ],
    hiddenInfo: 'Paciente parou de comer bem, perdeu 4 kg nos últimos 3 meses sem causa aparente — só revela se candidato perguntar sobre alimentação ou perda de peso | Irmã mais velha teve "demência" e foi internada em lar — só revela se candidato perguntar sobre histórico familiar de demência ou Alzheimer',
    actorBehavior: 'Paciente: simpático, soridente, minimiza os problemas, responde com frases curtas e genéricas ("tô bem", "é da idade"). Não demonstra insight sobre sua condição. Desorientado em tempo ao ser avaliado. Filha: sobrecarregada, preocupada, com sinais de exaustão. Pergunta sobre o que fazer, como cuidar, se precisa parar de trabalhar. Receptiva a orientações práticas.'
  },
  instC: {
    diagnosis: 'Síndrome demencial progressiva, compatível com Doença de Alzheimer provável (MEEM 18/30, atrofia hipocampal bilateral na TC, déficit predominante em memória episódica), com hipotireoidismo e deficiência de B12 concomitantes — causas tratáveis que devem ser corrigidas antes de fechar diagnóstico definitivo.',
    differentials: [
      'Demência por hipotireoidismo — Inclui-se como causa tratável diante do TSH elevado e T4 livre baixo; deve ser corrigido e reavaliado — porém raramente causa demência moderada isoladamente; provavelmente é fator contribuinte',
      'Deficiência de vitamina B12 com comprometimento cognitivo — Inclui-se como causa tratável parcialmente reversível; B12 168 pg/mL (abaixo do normal)',
      'Demência vascular — Exclui-se pela ausência de lesões vasculares na TC, sem déficit motor focal, sem padrão escalonado',
      'Demência por corpo de Lewy — Inclui-se; exclui-se pela ausência de flutuação cognitiva marcada, alucinações visuais complexas e parkinsonismo'
    ],
    context: 'Idoso de 78 anos, baixa escolaridade, com declínio cognitivo progressivo de instalação insidiosa, déficit predominante em memória episódica, desorientação temporal e espacial, comprometimento funcional (finanças, AVDs instrumentais), MEEM 18/30 (ajustado à escolaridade), TC com atrofia hipocampal bilateral. Causas tratáveis concomitantes identificadas: hipotireoidismo e deficiência de B12.',
    justify: 'Critérios de McKhann (2011) para DA provável: (1) critérios de demência (memória + outro domínio cognitivo + comprometimento funcional); (2) início insidioso e progressão gradual; (3) déficit amnéstico proeminente; (4) ausência de AVC, doença de Parkinson ou outra demência explicativa na TC. TC mostra atrofia hipocampal bilateral — dado de suporte. O hipotireoidismo e a deficiência de B12 devem ser tratados e o paciente reavaliado em 3–6 meses antes de confirmar diagnóstico definitivo.',
    expectedAnamnesis: 'Início e progressão do declínio (insidioso e gradual na DA) | Domínios afetados: memória (recente mais que remota), linguagem, orientação, função executiva | Comportamentos: repetição de perguntas, perambulação, desorientação noturna | Funcionalidade: AVDs básicas e instrumentais (cozinhar, gerenciar dinheiro, dirigir) | Sintomas neuropsiquiátricos: apatia, depressão, alucinações, agitação | Comorbidades e medicamentos (causas tratáveis) | Histórico familiar de demência | Escolaridade (importante para interpretação do MEEM) | Perda de peso e alimentação',
    expectedPhysical: 'MEEM completo e interpretado conforme escolaridade (ponto de corte para 4 anos: 17/30) | Neurológico: sem déficit focal, sem Babinski, sem rigidez ou tremor (afasta Parkinson e demência por corpo de Lewy) | PA, FC | Peso atual e histórico (perda de peso como sinal de alarme)',
    expectedExams: [
      { exam: 'TSH e T4 livre', justify: 'Hipotireoidismo — causa tratável de demência', expected: 'TSH elevado, T4 baixo' },
      { exam: 'Vitamina B12', justify: 'Deficiência — causa parcialmente reversível de declínio cognitivo', expected: 'Baixa (168 pg/mL)' },
      { exam: 'Glicemia', justify: 'Diabetes como fator de risco e contribuinte', expected: 'Pré-diabetes' },
      { exam: 'Hemograma', justify: 'Anemia perniciosa associada à deficiência de B12', expected: 'Normal' },
      { exam: 'VDRL', justify: 'Neurossífilis — causa tratável', expected: 'Não reagente' },
      { exam: 'TC de crânio', justify: 'Afastar causas estruturais; avaliar atrofia', expected: 'Atrofia hipocampal bilateral' },
      { exam: 'RM de crânio (encaminhar)', justify: 'Superior à TC para avaliar hipocampo', expected: 'A realizar' }
    ],
    expectedConduct: 'Farmacológica: Tratar hipotireoidismo: levotiroxina 25–50 mcg/dia (dose baixa inicial no idoso), com titulação por TSH após 6 semanas. Tratar deficiência de B12: cianocobalamina 1000 mcg IM semanalmente por 4 semanas, depois mensal — ou VO 1000 mcg/dia se absorção normal. Reavaliação cognitiva em 3–6 meses após correção dessas causas tratáveis. Se diagnóstico de DA confirmado: inibidores de colinesterase — donepezil 5 mg/noite (1ª escolha — PCDT MS/SAS, 2017); rivastigmina ou galantamina como alternativas. Para DA moderada a grave: memantina | Não farmacológica: Estimulação cognitiva, atividade física, nutrição adequada, adaptação do ambiente (segurança), suporte ao cuidador | Encaminhamento: Neurologia / Geriatria para seguimento e confirmação diagnóstica; assistência social para suporte à filha cuidadora; CAPS ou serviço de saúde mental se comportamentos problemáticos | Orientações ao familiar: Explicar que há causas tratáveis que serão corrigidas; que provavelmente há uma demência em curso que será melhor avaliada após o tratamento; que existem medicamentos que podem ajudar a retardar a progressão; orientar sobre cuidado seguro (fugir, quedas, alimentação) | Seguimento: Retorno em 6–8 semanas após início do tratamento do hipotireoidismo e B12',
    expectedCommunication: 'Com o paciente: Tratar com dignidade e respeito; não excluí-lo da conversa mesmo com déficit cognitivo | Com a filha: Acolher a sobrecarga; informar sobre serviços de apoio ao cuidador (CAPS, grupos de apoio, ABRASSO); não confirmar Alzheimer definitivamente antes de tratar causas tratáveis | Escuta ativa: Perguntar à filha como ela está se sentindo, se tem ajuda em casa',
    criticalErrors: [
      'Fechar diagnóstico definitivo de Alzheimer sem investigar e tratar causas tratáveis (hipotireoidismo e deficiência de B12)',
      'Não aplicar ou interpretar avaliação cognitiva objetiva (MEEM)',
      'Excluir o paciente da consulta, direcionando toda a comunicação apenas ao familiar',
      'Não orientar o familiar sobre segurança domiciliar (perambulação, quedas)',
      'Iniciar anticolinesterásico sem encaminhamento para confirmação diagnóstica especializada'
    ]
  },
  instD: {
    title: 'CHECKLIST — ESQUECIMENTOS E DESORIENTAÇÃO EM IDOSO',
    sections: [
      {
        h: 'BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE',
        items: [
          { item: 'Apresentou-se ao paciente e à filha, dirigindo-se ao paciente com respeito', score: 0.5, ref: 'Estatuto do Idoso — Lei 10.741/2003; CFM 2.149/2016' },
          { item: 'Perguntou à filha como ela estava se sentindo e se tinha apoio no cuidado (sobrecarga)', score: 0.5, ref: 'MS — Protocolo de Demências, 2022; Humanização MS' },
          { item: 'Não confirmou diagnóstico definitivo de Alzheimer antes de tratar causas tratáveis', score: 0.5, ref: 'MS — Protocolo de Demências, 2022; CFM' }
        ]
      },
      {
        h: 'BLOCO 2 — ANAMNESE',
        items: [
          { item: 'Caracterizou o declínio cognitivo: início insidioso, progressão gradual, memória recente mais afetada', score: 1.0, ref: 'MS — Protocolo de Demências, 2022; Critérios McKhann 2011' },
          { item: 'Investigou comprometimento funcional (AVDs básicas e instrumentais)', score: 0.5, ref: 'MS — Protocolo de Demências, 2022' },
          { item: 'Investigou comportamentos de risco: perambulação, desorientação noturna', score: 0.5, ref: 'MS — Protocolo de Demências, 2022' },
          { item: 'Considerou a escolaridade na interpretação do MEEM', score: 0.5, ref: 'MS — Protocolo de Demências, 2022' }
        ]
      },
      {
        h: 'BLOCO 3 — EXAME FÍSICO E COGNITIVO',
        items: [
          { item: 'Aplicou ou interpretou o MEEM corretamente conforme escolaridade', score: 1.0, ref: 'MS — Protocolo de Demências, 2022; SBN' },
          { item: 'Realizou exame neurológico para afastar déficit focal (Babinski, rigidez, tremor)', score: 0.5, ref: 'SBN — Demência; MS — Protocolo de Demências' }
        ]
      },
      {
        h: 'BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
        items: [
          { item: 'Identificou causas tratáveis concomitantes: hipotireoidismo e deficiência de B12', score: 1.0, ref: 'MS — Protocolo de Demências, 2022; SBN' },
          { item: 'Solicitou TSH, vitamina B12 e TC de crânio como investigação básica', score: 0.5, ref: 'MS — Protocolo de Demências, 2022' },
          { item: 'Formulou hipótese diagnóstica de síndrome demencial compatível com DA (com ressalva das causas tratáveis)', score: 0.5, ref: 'MS — Protocolo de Demências, 2022; Critérios McKhann 2011' }
        ]
      },
      {
        h: 'BLOCO 5 — CONDUTA E ORIENTAÇÃO AO FAMILIAR',
        items: [
          { item: 'Prescreveu levotiroxina para hipotireoidismo e reposição de vitamina B12', score: 0.5, ref: 'RENAME 2022; MS — Hipotireoidismo' },
          { item: 'Orientou a filha sobre segurança domiciliar e riscos do paciente', score: 0.5, ref: 'MS — Protocolo de Demências, 2022' },
          { item: 'Encaminhou para neurologia/geriatria para confirmação diagnóstica e início de anticolinesterásico', score: 0.5, ref: 'MS — PCDT Alzheimer, 2017; SBN' }
        ]
      }
    ]
  }
},

{
  id: 14,
  title: 'Acordando cansado e sonolento o dia todo',
  sub: 'UBS — Atenção Primária',
  tema: 'Neurologia',
  topic: 'distúrbios do sono',
  level: 'moderado',
  cardAccent: '#0C4A6E',
  instA: {
    scenario: 'Atenção Primária — UBS. Consultório, turno diurno.',
    patient: 'B.R., 48 anos, masculino, vendedor, obeso, com hipertensão arterial.',
    complaint: 'Acorda cansado mesmo dormindo horas, boceja o dia todo, a esposa reclama que ronca muito.',
    tasks: [
      'Realize a anamnese dirigida ao caso',
      'Formule a hipótese diagnóstica e os diagnósticos diferenciais relevantes',
      'Solicite os exames complementares e o exame confirmatório adequado',
      'Proponha a conduta terapêutica',
      'Oriente o paciente sobre mudanças de estilo de vida e o seguimento'
    ]
  },
  instB: {
    vitals: { PA: '152/94 mmHg', FC: '80 bpm', FR: '16 irpm', Tax: '36,5°C', Peso: '104 kg', Altura: '1,72 m', IMC: '35,2 kg/m²' },
    physicalGeneral: 'Bom estado geral, consciente, orientado, bocejando durante a consulta. Obeso (IMC 35,2). Normocorado, hidratado. Pescoço com circunferência cervical de 42 cm.',
    physicalSeg: 'CABEÇA E PESCOÇO: Circunferência cervical 42 cm (> 40 cm é fator de risco para SAOS). Palato mole com úvula alongada. Tonsilas palatinas grau I. Orofaringe com pilares redundantes. | CARDIOVASCULAR: PA 152/94 mmHg. FC 80 bpm. Ritmo regular em 2 tempos. Sem sopros. Pulsos simétricos. | RESPIRATÓRIO: Murmúrio vesicular presente bilateralmente, sem ruídos adventícios. | NEUROLÓGICO: Glasgow 15. Sem déficit focal. Sem sinais de sonolência patológica no exame.',
    labs: [
      { test: 'TSH', val: '2,2 mUI/L', ref: '0,4–4,0 mUI/L', alt: false },
      { test: 'Hemograma', val: 'Normal', ref: '—', alt: false },
      { test: 'Glicemia de jejum', val: '118 mg/dL', ref: '70–99 mg/dL', alt: true },
      { test: 'HbA1c', val: '6,3%', ref: '< 5,7%', alt: true },
      { test: 'Colesterol total', val: '224 mg/dL', ref: '< 200 mg/dL', alt: true },
      { test: 'LDL', val: '148 mg/dL', ref: '< 130 mg/dL', alt: true },
      { test: 'Triglicerídeos', val: '218 mg/dL', ref: '< 150 mg/dL', alt: true },
      { test: 'Creatinina', val: '1,0 mg/dL', ref: '0,6–1,2 mg/dL', alt: false }
    ],
    image: null,
    note: 'Entregar sinais vitais ao início. Entregar exame físico se candidato examinar. Entregar exames laboratoriais se solicitados. O candidato deve aplicar a Escala de Sonolência de Epworth (ESE) ou mencionar sua aplicação para quantificar a sonolência. Deve reconhecer a síndrome de apneia obstrutiva do sono (SAOS) e solicitar polissonografia. Escala de Epworth (resultado disponível): Total = 16/24 pontos — Sonolência excessiva (≥ 10 = patológica).',
    patientProfile: 'B.R., 48 anos, masculino, vendedor de loja, casado, 2 filhos. Sedentário. Fumou até os 35 anos (parou há 13 anos). Consome 2–3 doses de álcool por semana.',
    script: [
      { trigger: 'Queixa principal', speech: 'Doutor, eu durmo umas 8 horas e acordo morto de cansaço. O dia todo fico com sono, já dormi no sinal de trânsito duas vezes. Minha esposa fala que meu ronco é absurdo, às vezes ela vai dormir no quarto dos filhos.' },
      { trigger: 'Sobre o ronco', speech: 'Ela fala que o ronco para às vezes, fico em silêncio, aí começo de novo com um engasgo. Parece que eu paro de respirar.' },
      { trigger: 'Sobre sonolência', speech: 'Bato cabeça em reunião, no cinema durmo sempre. Se fico parado no trânsito, dou uma cochilada. É perigoso, eu sei.' },
      { trigger: 'Sobre qualidade do sono', speech: 'Acordo várias vezes à noite, às vezes com dor de cabeça de manhã. Nunca me sinto descansado.' },
      { trigger: 'Sobre pressão alta', speech: 'Tomo losartana mas a pressão continua alta. O médico antes aumentou a dose mas não adiantou muito.' },
      { trigger: 'Sobre álcool', speech: 'Tomo uma cerveja ou duas no fim de semana. Às vezes tomo uma durante a semana também.' },
      { trigger: 'Sobre peso', speech: 'Engordei uns 15 kg nos últimos 3 anos. Tentei emagrecer mas não consigo manter a dieta.' },
      { trigger: 'Sobre impotência', speech: 'Tem dias que tô sem vontade também... de sabe o quê. A esposa reclama.' },
      { trigger: 'Pergunta ativa', speech: 'Doutor, é sério isso? Eu posso ter infarto dormindo?' },
      { trigger: 'Pergunta ativa', speech: 'Tem algum remédio pra isso ou só aquela máscara?' }
    ],
    hiddenInfo: 'Disfunção erétil há 6 meses — só revela se o candidato perguntar sobre saúde sexual ou disfunção erétil (sintoma frequentemente associado à SAOS e à síndrome metabólica) | Pai faleceu de infarto com 55 anos — só revela se o candidato perguntar sobre histórico familiar cardiovascular',
    actorBehavior: 'Descontraído e bem-humorado, mas com sinais sutis de cansaço. Pode bocejar algumas vezes durante a consulta. Fica mais sério quando percebe a gravidade do quadro. Resistente inicialmente ao CPAP ("não quero usar aquela máscara"). Aceita melhor quando o candidato explica os riscos.'
  },
  instC: {
    diagnosis: 'Síndrome da Apneia Obstrutiva do Sono (SAOS), grau provavelmente moderado a grave (Epworth 16, ronco com pausas apneicas relatadas pela esposa, sonolência excessiva diurna incapacitante). Comorbidades associadas: HAS de difícil controle, pré-diabetes, síndrome metabólica, obesidade grau II.',
    differentials: [
      'Hipersonia idiopática — Inclui-se pela sonolência excessiva diurna; exclui-se pelo ronco com pausas apneicas observadas, pelo IMC elevado e pela circunferência cervical aumentada',
      'Síndrome das pernas inquietas — Inclui-se como causa de sono fragmentado; exclui-se pela ausência de desconforto em pernas ao repouso',
      'Hipotireoidismo — Inclui-se como causa de hipersonia e obesidade; exclui-se pelo TSH normal',
      'Depressão com hipersonia — Inclui-se; exclui-se pela ausência de humor deprimido proeminente, anedonia e outros critérios'
    ],
    context: 'Homem de 48 anos, obeso (IMC 35,2), hipertenso de difícil controle, com ronco intenso, pausas respiratórias observadas pela esposa, sonolência excessiva diurna (Epworth 16/24), acordar não-restaurador e cefaleia matinal. Circunferência cervical > 40 cm. Quadro clínico altamente sugestivo de SAOS moderada a grave, com síndrome metabólica associada.',
    justify: 'Critérios clínicos de suspeita de SAOS: ronco habitual + pausas apneicas observadas + sonolência excessiva diurna + HAS de difícil controle + obesidade + circunferência cervical > 40 cm. Epworth 16 indica sonolência excessiva clinicamente significativa. A HAS de difícil controle pode ter a SAOS como causa contribuinte importante (SAOS é causa secundária de HAS resistente). O diagnóstico definitivo requer polissonografia.',
    expectedAnamnesis: 'Ronco: habitual (> 3x/semana), intensidade, desde quando | Pausas respiratórias observadas pelo parceiro (apneias) | Sonolência excessiva diurna: frequência, situações (ao volante — risco!) | Sono não-restaurador, acordar com cefaleia matinal | Qualidade do sono: fragmentação, noctúria, despertares | Aplicação ou menção da Escala de Epworth | Fatores de risco: IMC, circunferência cervical, uso de álcool (piora a SAOS), tabagismo | Comorbidades: HAS (especialmente resistente), DM, cardiopatia, arritmia | Disfunção erétil (associada à SAOS e síndrome metabólica) | Medicamentos em uso',
    expectedPhysical: 'Peso, IMC, circunferência abdominal e cervical | PA (elevada) | Inspeção de orofaringe: palato, úvula, tonsilas, desvio septal | Circunferência cervical: > 40 cm em homens = fator de risco | Avaliação cardiovascular: ritmo, sopros',
    expectedExams: [
      { exam: 'Polissonografia noturna', justify: 'Exame padrão-ouro para diagnóstico de SAOS e classificação de gravidade (IAH)', expected: 'A realizar — provável SAOS moderada a grave' },
      { exam: 'Oximetria noturna (se polissonografia indisponível)', justify: 'Triagem — menor custo, menor especificidade', expected: 'A realizar' },
      { exam: 'TSH', justify: 'Afastar hipotireoidismo como causa', expected: 'Normal' },
      { exam: 'Glicemia / HbA1c', justify: 'Pré-diabetes / síndrome metabólica', expected: 'Alteradas' },
      { exam: 'Perfil lipídico', justify: 'Síndrome metabólica', expected: 'Dislipidemia' },
      { exam: 'ECG (encaminhar)', justify: 'HAS + SAOS — avaliar cardiopatia hipertensiva, arritmia', expected: 'A realizar' }
    ],
    expectedConduct: 'Farmacológica: Otimizar anti-hipertensivo: inibidor da ECA ou BRA + diurético tiazídico (HAS de difícil controle em SAOS — considerar espironolactona) — MS/SBC/SBH 2020. Tratar pré-diabetes: metformina 500 mg 2x/dia com orientação alimentar e atividade física. Tratar dislipidemia: atorvastatina 20–40 mg/dia. Não há medicamento específico para SAOS além do tratamento da causa subjacente | Não farmacológica: CPAP (Pressão Positiva Contínua nas Vias Aéreas) — tratamento de 1ª escolha para SAOS moderada a grave; disponível no SUS para casos graves (PCDT MS/SAS). Perda de peso — redução de 10% do peso pode reduzir o IAH em até 26%. Evitar álcool, sedativos e benzodiazepínicos (pioram a SAOS). Posicionamento lateral ao dormir para casos leves. Higiene do sono | Encaminhamento: Pneumologia/Medicina do Sono para polissonografia e prescrição de CPAP; Endocrinologia/Nutrição para obesidade; Cardiologia para HAS de difícil controle | Orientações ao paciente: Explicar o risco de acidente ao volante (obrigação médica — comunicar à vigilância sanitária/DETRAN se recusar tratamento e continuar dirigindo em casos graves) ⚠️; explicar os riscos cardiovasculares da SAOS não tratada; motivar para o CPAP | Seguimento: Retorno em 4–6 semanas após encaminhamentos; controle de PA',
    expectedCommunication: 'Apresentação: Apresentar-se, acolher o paciente, criar vínculo | Comunicação do diagnóstico: Explicar que a sonolência e o ronco com pausas são sinais de que ele para de respirar durante o sono, o que sobrecarrega o coração e aumenta o risco de infarto e derrame; que há tratamento eficaz (CPAP) | Escuta ativa: Acolher a resistência ao CPAP; apresentar dados sobre melhora da qualidade de vida, da PA e da função sexual com o tratamento',
    criticalErrors: [
      'Não solicitar polissonografia (exame diagnóstico obrigatório para confirmação e classificação)',
      'Não alertar sobre o risco de acidente ao volante em paciente com sonolência excessiva diurna (obrigação médica)',
      'Prescrever benzodiazepínico ou sedativo para "melhorar o sono" (piora a SAOS e pode ser fatal)',
      'Não identificar a SAOS como causa contribuinte para HAS de difícil controle',
      'Não orientar sobre perda de peso e abstinência alcoólica'
    ]
  },
  instD: {
    title: 'CHECKLIST — ACORDANDO CANSADO E COM MUITO SONO DURANTE O DIA',
    sections: [
      {
        h: 'BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE',
        items: [
          { item: 'Apresentou-se pelo nome ao paciente', score: 0.3, ref: 'CFM 2.149/2016' },
          { item: 'Alertou sobre o risco de dormir ao volante e a responsabilidade de não dirigir até tratado', score: 0.5, ref: 'CFM — Ética Médica; CTB — Art. 228; MS — SAOS' },
          { item: 'Acolheu a resistência ao CPAP e apresentou benefícios do tratamento de forma motivacional', score: 0.5, ref: 'Humanização MS, 2013; MS — PCDT SAOS' }
        ]
      },
      {
        h: 'BLOCO 2 — ANAMNESE',
        items: [
          { item: 'Investigou ronco habitual e pausas respiratórias observadas pelo parceiro', score: 1.0, ref: 'MS — PCDT SAOS; SBP — Medicina do Sono' },
          { item: 'Aplicou ou mencionou a Escala de Sonolência de Epworth', score: 0.5, ref: 'MS — PCDT SAOS; SBP — Medicina do Sono' },
          { item: 'Investigou sonolência ao volante ou em situações de risco', score: 0.5, ref: 'CFM — Ética; MS — PCDT SAOS' },
          { item: 'Investigou uso de álcool, sedativos e benzodiazepínicos (piora a SAOS)', score: 0.5, ref: 'MS — PCDT SAOS' },
          { item: 'Investigou comorbidades: HAS, obesidade, DM (síndrome metabólica)', score: 0.5, ref: 'MS — PCDT SAOS; SBC/SBH 2020' }
        ]
      },
      {
        h: 'BLOCO 3 — EXAME FÍSICO',
        items: [
          { item: 'Mediu e registrou IMC e circunferência cervical', score: 0.5, ref: 'MS — PCDT SAOS; SBP — Medicina do Sono' },
          { item: 'Realizou inspeção de orofaringe (palato, úvula, tonsilas)', score: 0.5, ref: 'MS — PCDT SAOS' },
          { item: 'Avaliou PA (HAS de difícil controle — fator associado à SAOS)', score: 0.3, ref: 'SBC/SBH — HAS, 2020' }
        ]
      },
      {
        h: 'BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
        items: [
          { item: 'Formulou hipótese diagnóstica de SAOS', score: 1.0, ref: 'MS — PCDT SAOS; SBP — Medicina do Sono' },
          { item: 'Solicitou polissonografia como exame confirmatório (padrão-ouro)', score: 1.0, ref: 'MS — PCDT SAOS; SBP — Medicina do Sono' }
        ]
      },
      {
        h: 'BLOCO 5 — CONDUTA E ORIENTAÇÃO AO PACIENTE',
        items: [
          { item: 'Indicou CPAP como tratamento de 1ª escolha para SAOS moderada-grave', score: 1.0, ref: 'MS — PCDT SAOS, 2022; RENAME 2022' },
          { item: 'Orientou sobre perda de peso e abstinência alcoólica', score: 0.5, ref: 'MS — PCDT SAOS; SBP' },
          { item: 'Não prescreveu benzodiazepínico ou sedativo para o sono', score: 0.5, ref: 'MS — PCDT SAOS — contraindicação explícita' },
          { item: 'Encaminhou para Pneumologia/Medicina do Sono', score: 0.5, ref: 'MS — PCDT SAOS, 2022' }
        ]
      }
    ]
  }
},

{
  id: 15,
  title: 'Dor de cabeça que piora quando abaixa a cabeça e visão turva',
  sub: 'UPA — Urgência e Emergência',
  tema: 'Neurologia',
  topic: 'hipertensão intracraniana',
  level: 'moderado',
  cardAccent: '#B45309',
  instA: {
    scenario: 'Urgência e Emergência — UPA. Consultório de urgência, turno matutino.',
    patient: 'V.C., 32 anos, feminino, nutricionista, obesa, sem diagnóstico neurológico prévio.',
    complaint: 'Dor de cabeça diária há 3 semanas, que piora quando abaixa a cabeça ou tosse, com visão turva e barulho nos ouvidos.',
    tasks: [
      'Realize a anamnese dirigida ao caso',
      'Realize o exame físico neurológico e oftalmológico pertinente',
      'Solicite os exames complementares adequados',
      'Formule a hipótese diagnóstica e os diagnósticos diferenciais relevantes',
      'Estabeleça a conduta e oriente a paciente sobre o diagnóstico e o seguimento urgente'
    ]
  },
  instB: {
    vitals: { PA: '128/80 mmHg', FC: '78 bpm', FR: '15 irpm', Tax: '36,4°C', Peso: '98 kg', Altura: '1,64 m', IMC: '36,4 kg/m²' },
    physicalGeneral: 'Bom estado geral, consciente, orientada, com expressão de desconforto pela cefaleia. Obesa. Normocorada, hidratada. Sem sinais meníngeos.',
    physicalSeg: 'NEUROLÓGICO: Consciente, orientada. Glasgow 15. Sem déficit motor focal. Força 5/5 em todos os segmentos. Reflexos simétricos. Sem Babinski. Sem rigidez de nuca. | OFTALMOLÓGICO: Acuidade visual levemente reduzida (relata embaçamento episódico). Fundoscopia: papiledema bilateral — borramento das margens do disco óptico, com ausência de pulso venoso espontâneo bilateral. Sem hemorragias retinianas. Campos visuais por confrontação: leve ampliação do ponto cego bilateral (não valorizado pela paciente). | NEUROLÓGICO — PARES CRANIANOS: Sem paralisia de pares cranianos. Movimentos oculares externos normais. Sem diplopia no momento. | AUDITIVO: Zumbido pulsátil relatado pelo paciente (não audível ao examinador).',
    labs: [
      { test: 'Hemograma', val: 'Normal', ref: '—', alt: false },
      { test: 'TSH', val: '2,1 mUI/L', ref: '0,4–4,0 mUI/L', alt: false },
      { test: 'Glicemia de jejum', val: '108 mg/dL', ref: '70–99 mg/dL', alt: true },
      { test: 'Creatinina', val: '0,8 mg/dL', ref: '0,5–1,1 mg/dL', alt: false },
      { test: 'Sódio', val: '139 mEq/L', ref: '135–145 mEq/L', alt: false },
      { test: 'Vitamina A', val: '128 mcg/dL', ref: '30–90 mcg/dL', alt: true }
    ],
    image: 'TC de crânio sem contraste: Sem lesões expansivas, sem hemorragias, sem desvio de linha média. Ventrículos de tamanho normal (sem hidrocefalia obstrutiva). Sela turca com aspecto de "sela vazia" parcial. Aplanamento da porção posterior dos globos oculares bilateralmente. Alargamento do espaço subaracnóideo peri-óptico bilateral. Achados compatíveis com hipertensão intracraniana idiopática.',
    note: 'Entregar sinais vitais ao início. Entregar exame físico se candidato examinar. Entregar exames laboratoriais se solicitados. Entregar laudo de TC se solicitado. O achado central desta estação é o papiledema bilateral — deve ser identificado no exame físico. O candidato deve solicitar TC de crânio para afastar causa secundária antes de indicar punção lombar. A vitamina A elevada é um fator de risco identificável. Atenção: a RM de crânio com venografia é superior à TC mas pode não estar disponível na UPA — aceitar encaminhamento para RM.',
    patientProfile: 'V.C., 32 anos, feminino, nutricionista, solteira. Obesa há 8 anos. Sem diagnóstico prévio. Recentemente iniciou suplementação de vitamina A em dose alta por conta própria ("para pele e cabelo") há 4 meses. Sem uso de corticosteroide, tetraciclinas ou contraceptivos orais.',
    script: [
      { trigger: 'Queixa principal', speech: 'Doutora, faz 3 semanas que tenho uma dor de cabeça que não passa. É atrás da cabeça e nos olhos, piora quando me abaixo, quando tusso ou faço força.' },
      { trigger: 'Sobre a visão', speech: 'A visão fica turva às vezes, dura alguns segundos e passa. É bem assustador. Acontece umas 3 vezes por dia.' },
      { trigger: 'Sobre o zumbido', speech: 'Tenho um barulho no ouvido que parece bater com o coração. É pulsante.' },
      { trigger: 'Sobre o papiledema', speech: 'Meu olho tá parecendo normal pra mim... mas vocês falaram que tem algo no nervo do olho?' },
      { trigger: 'Sobre a suplementação', speech: 'Ah, tô tomando vitamina A em cápsula, 50.000 UI por dia, pra melhorar a pele. Comprei na internet faz 4 meses.' },
      { trigger: 'Sobre obesidade', speech: 'Sou obesa, sempre fui. Já tentei emagrecer mas é muito difícil.' },
      { trigger: 'Sobre piora postural', speech: 'Quando me curvo pra frente, a dor aumenta bastante. Quando fico deitada, melhora um pouco.' },
      { trigger: 'Sobre outros sintomas', speech: 'Não tenho fraqueza, não perdi peso, não tive febre. Só essa dor e a visão que preocupa.' },
      { trigger: 'Pergunta ativa', speech: 'Doutora, o que é esse papiledema? É sério?' },
      { trigger: 'Pergunta ativa', speech: 'Posso perder a visão?' }
    ],
    hiddenInfo: 'Uso de suplemento de vitamina A 50.000 UI/dia há 4 meses — só revela se o candidato perguntar especificamente sobre uso de suplementos, vitaminas ou medicamentos (fator de risco identificável e potencialmente reversível) | Teve episódio de diplopia breve há 1 semana, durou algumas horas — só revela se o candidato perguntar sobre visão dupla ou movimentos oculares',
    actorBehavior: 'Ansiosa com a visão turva e o papiledema. Colaborativa. Reage com susto ao ouvir que pode haver risco para a visão. Fica mais tranquila com explicação clara sobre o diagnóstico e o tratamento. Pode se mostrar surpresa ao descobrir que a vitamina A pode ter causado o problema.'
  },
  instC: {
    diagnosis: 'Hipertensão Intracraniana Idiopática (HII) — pseudotumor cerebri — em paciente obesa, com hipervitaminose A como provável fator contribuinte. Risco de perda visual permanente se não tratada.',
    differentials: [
    'Trombose de seio venoso cerebral — Inclui-se pela cefaleia progressiva com papiledema; exclui-se pela TC sem trombose e pela ausência de déficit neurológico focal; RM com venografia ou angioRM venosa é obrigatória para afastar',
    'Tumor cerebral com hipertensão intracraniana secundária — Exclui-se pela TC sem lesão expansiva ou desvio de linha média; RM confirmatória recomendada',
    'Meningite crônica — Inclui-se pela cefaleia crônica com HIC; exclui-se pela ausência de febre, rigidez de nuca e pleocitose; líquor (pressão elevada com composição normal) confirma HII',
    'Hipervitaminose A isolada — Pode ser a causa secundária e não idiopática; neste caso, é fator contribuinte reconhecido'
  ],
  context: 'Mulher jovem de 32 anos, obesa, com cefaleia progressiva de 3 semanas, piora com manobras de Valsalva, oscilações visuais transitórias, zumbido pulsátil e papiledema bilateral ao fundo de olho — achados típicos de HII. Hipervitaminose A (50.000 UI/dia por 4 meses) é fator de risco secundário identificável. TC afasta causa estrutural.',
  justify: 'Critérios de Friedman para HII (modificados): (1) sintomas/sinais de PIC elevada (cefaleia postural, papiledema); (2) PIC elevada documentada (a confirmar por PL ≥ 250 mmH₂O); (3) composição normal do LCR; (4) ausência de causa estrutural na neuroimagem; (5) sem outra causa de PIC elevada além de HII. Fatores de risco presentes: obesidade + hipervitaminose A. O papiledema bilateral é o sinal físico mais importante — ameaça à visão.',
  expectedAnamnesis: 'Início, progressão e característica da cefaleia (piora com Valsalva, tosse, abaixar a cabeça) | Oscilações visuais transitórias (amauroses transitórias — sinal de alarme para visão) | Zumbido pulsátil | Diplopia (paralisia do VI par) | Uso de medicamentos: vitamina A, retinoides, tetraciclinas, contraceptivos, corticosteroide (fatores de risco) | Obesidade e ganho de peso recente | Febre, rigidez de nuca (afastar meningite) | Déficit neurológico focal (afastar tumor) | Histórico de trombose',
  expectedPhysical: 'Fundoscopia: papiledema bilateral — achado cardinal e obrigatório | Avaliação de campo visual (perimetria/confrontação): ampliação do ponto cego | Acuidade visual | Pares cranianos: paralisia do VI par (diplopia, estrabismo convergente) | PA (descartar HAS) | Neurológico: sem déficit focal | Rigidez de nuca: ausente',
  expectedExams: [
    { exam: 'TC de crânio sem contraste', justify: 'Afastar lesão expansiva antes da PL', expected: 'Sem lesão, achados de HII' },
    { exam: 'RM de crânio com venografia (encaminhar urgente)', justify: 'Superior à TC; afastar trombose de seio venoso — causa secundária importante', expected: 'A realizar' },
    { exam: 'Punção lombar com medida de pressão de abertura', justify: 'Confirmar HIC (≥ 250 mmH₂O), analisar LCR', expected: 'Pressão elevada, LCR normal' },
    { exam: 'Nível sérico de vitamina A', justify: 'Confirmar hipervitaminose A', expected: 'Elevado (128 mcg/dL)' },
    { exam: 'Perimetria computadorizada (encaminhar Oftalmologia)', justify: 'Quantificar perda de campo visual', expected: 'Ampliação de ponto cego' }
  ],
  expectedConduct: 'Imediata: TC de crânio (afastar contraindicação à PL); RM com venografia com urgência | Farmacológica: Acetazolamida 250–1000 mg/dia VO (1ª linha para HII — reduz produção de LCR) — RENAME/MS. Se intolerância: topiramato (alternativa com efeito de perda de peso como benefício adicional). Analgesia para cefaleia: dipirona, AINE. Suspender imediatamente a suplementação de vitamina A | Não farmacológica: Perda de peso (redução de 5–10% do peso corporal reduz significativamente a PIC na HII); dieta hipocalórica | Punção lombar terapêutica: Considerar se sintomas visuais urgentes — pode ser realizada após TC e RM para alívio imediato | Encaminhamento urgente: Oftalmologia (campimetria e avaliação do papiledema — risco de perda visual permanente); Neurologia para seguimento e punção lombar com manometria | Orientações ao paciente: Explicar que há pressão elevada dentro do crânio, que não é tumor, mas que pode afetar a visão permanentemente se não tratado; que a vitamina A pode ter piorado o quadro e deve ser suspensa; que a perda de peso é parte essencial do tratamento | Seguimento: Urgente — Oftalmologia em 24–48h para avaliação do papiledema',
  expectedCommunication: 'Apresentação: Apresentar-se, acolher a ansiedade sobre a visão | Comunicação do diagnóstico: Explicar que há pressão aumentada no líquido do cérebro, que não é tumor, mas que pode afetar a visão e precisa de tratamento urgente | Sobre a vitamina A: Comunicar com cuidado que a suplementação pode ter contribuído para o problema, sem julgamento',
  criticalErrors: [
    'Realizar punção lombar sem TC prévia (risco de herniação se lesão expansiva não excluída)',
    'Não realizar fundoscopia ou não reconhecer papiledema (achado cardinal)',
    'Não identificar o uso excessivo de vitamina A como fator causador',
    'Não encaminhar urgentemente para Oftalmologia (risco de perda visual permanente)',
    'Alta sem conduta ou sem encaminhamento em quadro de HIC com risco visual'
  ]
},
instD: {
  title: 'CHECKLIST — CEFALEIA QUE PIORA AO ABAIXAR A CABEÇA E VISÃO TURVA',
  sections: [
    {
      h: 'COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE',
      items: [
        { item: 'Apresentou-se pelo nome à paciente', score: 0.3, ref: 'CFM 2.149/2016' },
        { item: 'Explicou o risco para a visão e a urgência do tratamento de forma clara e empática', score: 0.5, ref: 'CFM 2.149/2016; Humanização MS, 2013' },
        { item: 'Comunicou a relação entre a suplementação de vitamina A e o quadro sem julgamento', score: 0.5, ref: 'CFM 2.149/2016' }
      ]
    },
    {
      h: 'ANAMNESE',
      items: [
        { item: 'Caracterizou a cefaleia: progressiva, piora com Valsalva/tosse/abaixar a cabeça', score: 0.5, ref: 'SBN — HII; UpToDate' },
        { item: 'Investigou oscilações visuais transitórias e zumbido pulsátil', score: 0.5, ref: 'SBN — HII; Oftalmologia — Papiledema' },
        { item: 'Perguntou sobre uso de suplementos de vitamina A ou retinoides (causa secundária)', score: 1.0, ref: 'SBN — HII; UpToDate' },
        { item: 'Pesquisou sinais de alarme (déficit focal, febre, rigidez de nuca)', score: 0.5, ref: 'MS — Urgências Neurológicas' }
      ]
    },
    {
      h: 'EXAME FÍSICO',
      items: [
        { item: 'Realizou fundoscopia e identificou papiledema bilateral', score: 1.0, ref: 'SBN — HII; Semiologia Médica — Porto & Porto' },
        { item: 'Avaliou acuidade visual e movimentos oculares (paralisia do VI par)', score: 0.5, ref: 'SBN — HII' },
        { item: 'Pesquisou rigidez de nuca e avaliou PA', score: 0.3, ref: 'MS — Urgências Neurológicas' }
      ]
    },
    {
      h: 'RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
      items: [
        { item: 'Formulou hipótese diagnóstica de hipertensão intracraniana idiopática (pseudotumor cerebri)', score: 1.0, ref: 'SBN — HII; UpToDate' },
        { item: 'Solicitou TC de crânio sem contraste antes de qualquer punção lombar', score: 0.5, ref: 'MS — Urgências Neurológicas; SBN — HII' },
        { item: 'Mencionou necessidade de RM com venografia para afastar trombose de seio venoso', score: 0.5, ref: 'SBN — HII; UpToDate' }
      ]
    },
    {
      h: 'CONDUTA E ORIENTAÇÃO AO PACIENTE',
      items: [
        { item: 'Suspendeu a suplementação de vitamina A imediatamente', score: 0.5, ref: 'SBN — HII; UpToDate' },
        { item: 'Prescreveu acetazolamida como tratamento farmacológico de 1ª linha', score: 0.5, ref: 'SBN — HII; RENAME 2022' },
        { item: 'Encaminhou urgentemente para Oftalmologia e Neurologia', score: 0.5, ref: 'SBN — HII — risco de perda visual' },
        { item: 'Orientou sobre perda de peso como parte do tratamento', score: 0.4, ref: 'SBN — HII; UpToDate' }
      ]
    }
  ]
}

]