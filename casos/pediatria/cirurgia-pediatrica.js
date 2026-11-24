// Casos de Cirurgia Pediatrica (4)
const cirurgiaPediatrica = [
  // Estação 17

{
  id: 17,
  title: "Bebê de 6 meses com testículo ausente e dúvida sobre a pelinha do pênis",
  sub: "UBS — Atenção Primária",
  tema: 'Cirurgia Pediatrica',
  topic: "Criptorquidia / Fimose Fisiológica / Urologia Pediátrica",
  level: "moderado",
  cardAccent: "#1565c0",

  instA: {
    scenario: "Atenção Primária — UBS. Consultório de puericultura, turno da manhã.",
    patient: "E.F., 6 meses de vida, masculino. Mãe: 30 anos, professora. Parto cesáreo a termo, sem intercorrências. Desenvolvimento neuropsicomotor adequado para a idade.",
    complaint: "Mãe refere: 'O testículo direito do meu filho nunca apareceu na bolsinha. Às vezes parece que sobe. Também tenho dúvida sobre a pelinha do pênis, que não abre.'",
    tasks: [
      "Realize a anamnese dirigida: quando foi notada a ausência do testículo, se sobe e desce, urina normal, antecedentes do parto.",
      "Solicite o exame físico da genitália e interprete os achados.",
      "Diferencie criptorquidia de testículo retrátil e de testículo ausente.",
      "Esclareça à mãe o que é fimose fisiológica e como diferenciá-la de fimose patológica.",
      "Defina a conduta correta para cada achado e os encaminhamentos necessários.",
      "Oriente a mãe sobre complicações da criptorquidia não tratada e sobre cuidados de higiene."
    ]
  },

  instB: {
    vitals: {
      PA: null,
      FC: "120 bpm",
      FR: "36 irpm",
      Tax: "36,7°C",
      Peso: "7.200 g",
      Altura: "67 cm",
      IMC: null
    },
    physicalGeneral: "Bom estado geral. Ativo, sorridente, interagindo com o ambiente. Bem nutrido, róseo, hidratado. Sem dismorfias. Desenvolvimento neuropsicomotor adequado para 6 meses (sustenta a cabeça, senta com apoio, pega objetos).",
    physicalSeg: [
      "GENITÁLIA MASCULINA — PÊNIS: Prepúcio não retrátil; glande não visível; sem hiperemia, sem edema, sem secreção; sem aderências inflamatórias; orifício prepucial pérvio (urina com jato normal).",
      "GENITÁLIA MASCULINA — TESTÍCULO ESQUERDO: Tópico em bolsa escrotal, de tamanho e consistência normais.",
      "GENITÁLIA MASCULINA — TESTÍCULO DIREITO: Não palpável em bolsa escrotal; palpado no canal inguinal direito, consistência normal; não desce espontaneamente para a bolsa escrotal mesmo com manobra suave; bolsa escrotal direita hipoplásica e vazia.",
      "REFLEXO CREMASTÉRICO: Presente bilateralmente.",
      "HÉRNIA INGUINAL: Não identificada à palpação."
    ],
    labs: [],
    image: null,
    note: "Entregar o impresso de exame físico da genitália somente se o candidato solicitar verbalmente o exame físico. Não há exames laboratoriais ou de imagem a entregar. Se o candidato solicitar USG inguino-escrotal, o avaliador deve anotar como conduta inapropriada para APS (classificado como INADEQUADO no PEP do Revalida 2024/2) e informar que não está disponível na UBS. Observar se o candidato orienta retração forçada do prepúcio — se orientar, pontuar como erro crítico.",
    patientProfile: "Eduardo F., 6 meses de vida, masculino. Mãe: Fernanda F., 30 anos, professora do ensino fundamental, casada. Parto cesáreo a termo (38 semanas), sem intercorrências. Amamentado exclusivamente até os 5 meses, introdução alimentar iniciada. Pai presente e participativo.",
    script: [
      { trigger: "Abertura", speech: "Doutor(a), meu filho tá bem, mas tenho duas dúvidas. Desde que ele nasceu, nunca vi o testículo direito na bolsa. E a pelinha do pênis não abre. Quero saber se é grave." },
      { trigger: "Sobre o testículo", speech: "Às vezes parece que aparece uma coisa na virilha quando ele chora ou toma banho frio. Mas na bolsa mesmo nunca vi." },
      { trigger: "Sobre a pelinha (fimose)", speech: "Tentei abrir um pouquinho pra limpar, mas não abriu. Forcei um pouquinho e ele ficou irritado. Fiz certo?" },
      { trigger: "Sobre urina", speech: "A urina dele é normal. Faz xixi com jato bom, sem dificuldade." },
      { trigger: "Sobre o parto", speech: "Nasceu a termo, cesárea programada. Não teve problema nenhum na hora de nascer." },
      { trigger: "Pergunta ativa — criptorquidia", speech: "Vai precisar operar? Quando?" },
      { trigger: "Pergunta ativa — fimose", speech: "Devo forçar a pelinha pra abrir? Minha sogra disse que tem que ir abrindo aos poucos." },
      { trigger: "Pergunta ativa — consequências", speech: "Se não tratar, pode causar problema no futuro?" },
      { trigger: "Pergunta ativa — encaminhamento", speech: "Quem vai cuidar disso? Precisa de especialista?" }
    ],
    hiddenInfo: [
      "A mãe já tentou retrair o prepúcio com força e o bebê ficou irritado — só revela em detalhes se o candidato perguntar especificamente sobre tentativas anteriores de abertura do prepúcio.",
      "O avô paterno teve câncer de testículo — só revela se o candidato perguntar especificamente sobre histórico familiar de problemas testiculares ou câncer."
    ],
    actorBehavior: "Mãe calma, organizada e bem informada. Fez pesquisas na internet antes da consulta e tem opiniões formadas (influência da sogra). Aceita bem as explicações técnicas quando bem fundamentadas, mas questiona se a orientação for diferente do que ouviu em casa. Não demonstra ansiedade excessiva. Colaborativa. Fica aliviada quando o médico explica com clareza."
  },

  instC: {
    diagnosis: "Criptorquidia direita (testículo palpável no canal inguinal, não retrátil, não desce espontaneamente) associada a fimose fisiológica. Conduta: encaminhamento para cirurgia pediátrica ou urologia pediátrica sem solicitar USG previamente (conforme PEP Revalida 2024/2). Fimose fisiológica: apenas cuidados de higiene, sem intervenção.",
    differentials: [
      "Testículo retrátil — desce para a bolsa escrotal com manobra manual e permanece; não há necessidade de cirurgia, apenas acompanhamento anual; diferenciado nesse caso pela impossibilidade de descer o testículo para a bolsa mesmo com manobra suave.",
      "Testículo ausente (anorquia ou agenesia testicular) — não palpável em nenhuma posição, inclusive no canal inguinal; diferenciado aqui porque o testículo direito é palpável no canal inguinal; anorquia verdadeira exigiria investigação hormonal (FSH, LH, testosterona após estimulação com hCG).",
      "Fimose patológica (BXO — balanite xerótica obliterante) — anel fibrótico brancacento, pele espessada, inflamação recorrente; ausente nesse caso (prepúcio elástico, sem alteração da pele, sem inflamação)."
    ],
    context: "Lactente masculino de 6 meses com criptorquidia direita (testículo palpável em canal inguinal, não retrátil) e fimose fisiológica. Após os 6 meses, a descida espontânea é improvável — encaminhamento para cirurgia pediátrica é indicado. Fimose fisiológica é normal até os 3–4 anos — conduta é apenas higiene adequada, sem intervenção.",
    justify: "Testículo direito palpável no canal inguinal, que não desce espontaneamente para a bolsa escrotal mesmo com manobra suave, bolsa escrotal direita hipoplásica e vazia — define criptorquidia direita. Descida espontânea após os 6 meses é improvável (ocorre principalmente nos primeiros 3 meses de vida). Prepúcio não retrátil, elástico, sem inflamação, sem aderências patológicas — define fimose fisiológica, normal nessa faixa etária. Reflexo cremastérico presente bilateralmente afasta testículo ausente do lado contralateral.",
    expectedAnamnesis: [
      "Quando foi notada a ausência do testículo na bolsa.",
      "Se o testículo já foi visto na bolsa em algum momento (determina se é retrátil).",
      "Características da urina: jato, frequência, dificuldade miccional.",
      "Antecedentes perinatais: parto, prematuridade (risco maior em prematuros).",
      "Histórico familiar: criptorquidia, câncer testicular.",
      "Tentativas anteriores de retrair o prepúcio."
    ],
    expectedPhysical: [
      "Exame da bolsa escrotal: presença/ausência de testículos, simetria, volume.",
      "Palpação do canal inguinal: localizar testículo não descido.",
      "Manobra de Shabat: tentar descer o testículo manualmente para a bolsa escrotal — se permanecer = retrátil; se retornar ao canal = criptorquídico.",
      "Exame do pênis: prepúcio (retrátil ou não), orifício prepucial, sinais de inflamação.",
      "Avaliação do jato urinário (indireta pela história).",
      "Pesquisa de hérnia inguinal associada (presente em 90% das criptorquidias)."
    ],
    expectedExams: [
      { exam: "Nenhum exame indicado antes do encaminhamento (APS)", justify: "Criptorquidia com testículo palpável no canal inguinal não requer imagem para encaminhar — USG não muda a conduta inicial", expected: "—" },
      { exam: "USG inguino-escrotal", justify: "CONTRAINDICADO como próximo passo em APS (INADEQUADO no Revalida 2024/2) — não altera conduta antes do encaminhamento", expected: "—" }
    ],
    expectedConduct: [
      "Criptorquidia — Farmacológica: Não há indicação de tratamento hormonal (hCG ou GnRH) como primeira linha no Brasil — baixa taxa de sucesso e efeitos colaterais. Referência: SBP — Urologia Pediátrica, 2021.",
      "Criptorquidia — Encaminhamento: Cirurgia pediátrica ou urologia pediátrica, sem solicitar USG previamente. Orquidopexia realizada pelo especialista, idealmente antes dos 12–18 meses de vida. Referência: PEP Revalida 2024/2; EAU/ESPU, 2023.",
      "Fimose fisiológica: Apenas cuidados de higiene adequada — lavar a área externamente, sem retrair o prepúcio. Não indicar: retração forçada, massagem, pomada de corticoide. Indicação de avaliação para intervenção: ausência de resolução espontânea após os 3 anos de idade; ITU de repetição; balanite recorrente; balonamento obstrutivo. Referência: PEP Revalida 2024/2.",
      "Não farmacológica: Orientar higiene genital correta; explicar que a fimose é fisiológica e resolverá espontaneamente na maioria dos casos.",
      "Orientações ao paciente: Explicar que o testículo precisa de cirurgia antes do 1 ano de vida para proteger a fertilidade e reduzir o risco de câncer; que a pelinha não deve ser forçada; que a cirurgia da fimose só é considerada após os 3 anos se não resolver sozinha.",
      "Seguimento: Retorno em 1 mês para verificar encaminhamento; retorno de puericultura em 9 meses; revisão da fimose após os 3 anos se persistir."
    ],
    expectedCommunication: [
      "Apresentação: Apresentar-se pelo nome, cumprimentar o Eduardo e a mãe, criar ambiente acolhedor.",
      "Comunicação do diagnóstico: Explicar em linguagem acessível que o testículo direito ficou parado no caminho e precisa ser colocado no lugar por um cirurgião; que a pelinha é normal nessa idade e não precisa de nada além de higiene; que a sogra, com boa intenção, estava errada sobre forçar.",
      "Escuta ativa: Valorizar a atenção da mãe ao filho; não criticar a sogra; fundamentar as orientações com clareza; perguntar se ficou com dúvidas."
    ],
    criticalErrors: [
      "Orientar retração forçada do prepúcio como conduta para fimose fisiológica (INADEQUADO — pode causar parafimose e trauma).",
      "Prescrever pomada de corticoide para fimose fisiológica em lactente de 6 meses (INADEQUADO — sem indicação nessa faixa e condição).",
      "Solicitar USG inguino-escrotal antes de encaminhar para cirurgia (INADEQUADO no PEP Revalida 2024/2 — não altera a conduta inicial).",
      "Afirmar que o testículo ainda pode descer sozinho após os 6 meses sem encaminhar (após 6 meses, descida espontânea é improvável).",
      "Não diferenciar criptorquidia de testículo retrátil (condutas completamente diferentes).",
      "Não mencionar as complicações da criptorquidia não tratada (infertilidade, risco de neoplasia, torção)."
    ]
  },

  instD: {
    title: "CHECKLIST — CRIPTORQUIDIA E FIMOSE FISIOLÓGICA EM LACTENTE",
    sections: [
      {
        h: "BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
        items: [
          { item: "Apresentou-se pelo nome e cumprimentou a mãe e o bebê de forma acolhedora.", score: 0.5, ref: "CFM 2232/2019; MS — Humanização no SUS" },
          { item: "Explicou de forma clara e sem julgamentos a diferença entre a orientação da sogra e a conduta correta para fimose.", score: 0.5, ref: "MS — Política Nacional de Humanização, 2013" }
        ]
      },
      {
        h: "BLOCO 2 — ANAMNESE",
        items: [
          { item: "Perguntou quando foi notada a ausência do testículo e se já foi visto na bolsa em algum momento.", score: 0.5, ref: "SBP — Urologia Pediátrica, 2021" },
          { item: "Investigou características da micção: jato urinário, frequência, dificuldade.", score: 0.5, ref: "SBP — Urologia Pediátrica, 2021" },
          { item: "Perguntou sobre tentativas anteriores de retração do prepúcio.", score: 0.3, ref: "PEP Revalida 2024/2" },
          { item: "Investigou antecedentes perinatais (prematuridade) e histórico familiar (criptorquidia, câncer testicular).", score: 0.3, ref: "SBP — Urologia Pediátrica, 2021" }
        ]
      },
      {
        h: "BLOCO 3 — EXAME FÍSICO",
        items: [
          { item: "Solicitou exame físico da genitália e identificou testículo direito palpável no canal inguinal.", score: 1.0, ref: "SBP — Urologia Pediátrica, 2021" },
          { item: "Diferenciou criptorquidia de testículo retrátil pela manobra de Shabat (testículo não permanece na bolsa).", score: 1.0, ref: "SBP — Urologia Pediátrica, 2021" },
          { item: "Avaliou o prepúcio e identificou fimose fisiológica (prepúcio elástico, sem inflamação).", score: 0.5, ref: "PEP Revalida 2024/2" }
        ]
      },
      {
        h: "BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO",
        items: [
          { item: "Formulou o diagnóstico de criptorquidia direita e fimose fisiológica corretamente.", score: 1.0, ref: "SBP — Urologia Pediátrica, 2021" },
          { item: "Não solicitou USG inguino-escrotal antes do encaminhamento (condutas corretas de APS).", score: 0.5, ref: "PEP Revalida 2024/2" }
        ]
      },
      {
        h: "BLOCO 5 — CONDUTA E ORIENTAÇÃO AO PACIENTE",
        items: [
          { item: "Encaminhou para cirurgia pediátrica ou urologia pediátrica sem exame de imagem prévio.", score: 1.0, ref: "PEP Revalida 2024/2; EAU/ESPU, 2023" },
          { item: "Orientou que fimose fisiológica requer apenas higiene externa, sem retração forçada ou pomadas.", score: 1.0, ref: "PEP Revalida 2024/2" },
          { item: "Mencionou pelo menos duas complicações da criptorquidia não tratada (infertilidade, neoplasia, torção).", score: 0.5, ref: "SBP — Urologia Pediátrica, 2021" },
          { item: "Orientou que intervenção para fimose só é considerada após os 3 anos se não resolver espontaneamente.", score: 0.4, ref: "PEP Revalida 2024/2" }
        ]
      }
    ]
  }
},

  // Estação 18

{
  id: 18,
  title: "Bebê prematuro com inchaço na virilha e aumento da bolsa escrotal",
  sub: "UBS — Atenção Primária",
  tema: 'Cirurgia Pediatrica',
  topic: "Hérnia Inguinal / Hidrocele Comunicante / Urgência Cirúrgica Pediátrica",
  level: "moderado",
  cardAccent: "#2e7d32",

  instA: {
    scenario: "Atenção Primária — UBS. Consultório de puericultura, turno da manhã.",
    patient: "R.O., 8 meses de vida, masculino, prematuro (33 semanas). Mãe: 28 anos, recepcionista. Sem comorbidades atuais.",
    complaint: "Mãe refere: 'Meu filho tem um inchaço na virilha que aparece quando ele chora. E a bolsa escrotal esquerda é maior desde que nasceu.'",
    tasks: [
      "Realize a anamnese: tempo de evolução, redutibilidade, episódios de encarceramento, prematuridade e antecedentes.",
      "Solicite o exame físico da região inguino-escrotal e interprete os achados.",
      "Diferencie hérnia inguinal de hidrocele comunicante e não comunicante com base nos achados.",
      "Avalie se há sinais de encarceramento ou estrangulamento.",
      "Defina a conduta cirúrgica adequada e a urgência do encaminhamento para cada achado.",
      "Oriente os pais sobre sinais de alerta que exigem ida imediata à emergência."
    ]
  },

  instB: {
    vitals: {
      PA: null,
      FC: "118 bpm",
      FR: "32 irpm",
      Tax: "36,8°C",
      Peso: "7.100 g",
      Altura: "68 cm",
      IMC: null
    },
    physicalGeneral: "Bom estado geral. Ativo, sorridente, bem nutrido. Afebril. Sem sinais de sofrimento agudo. Desenvolvimento adequado para a idade corrigida (5 meses).",
    physicalSeg: [
      "REGIÃO INGUINAL DIREITA: Abaulamento inguinal direito visível ao choro, que reduz espontaneamente ao repouso; redutível à palpação suave; sem sinais de encarceramento (pele normal, sem eritema, sem endurecimento); sinal do silk glove positivo à direita (espessamento do cordão espermático palpável — sinal de processus vaginalis patente).",
      "BOLSA ESCROTAL ESQUERDA: Aumento de volume, transluminação positiva à luz (permite passagem de luz — conteúdo líquido); não dolorosa à palpação; reduz parcialmente em decúbito dorsal; testículo esquerdo palpável em posição normal dentro da hidrocele.",
      "BOLSA ESCROTAL DIREITA: Normal; testículo direito tópico.",
      "PELE ESCROTAL: Normal bilateralmente, sem eritema, sem edema, sem equimose.",
      "HÉRNIA UMBILICAL: Pequeno anel umbilical palpável (< 1 cm), assintomático — achado adicional."
    ],
    labs: [],
    image: null,
    note: "Entregar o exame físico somente se solicitado verbalmente pelo candidato. Não há exames laboratoriais ou de imagem a entregar. Se o candidato perguntar sobre hérnia umbilical, o avaliador confirma o achado. Observar se o candidato reconhece a urgência relativa da hérnia inguinal em prematuro (maior risco de encarceramento) e se orienta corretamente sobre sinais de alerta.",
    patientProfile: "Rafael O., 8 meses de vida (5 meses de idade corrigida), masculino, prematuro de 33 semanas. Mãe: Mariana O., 28 anos, recepcionista, casada. Pai presente. Internado 3 semanas em UTI neonatal após o nascimento; sem sequelas conhecidas. Aleitamento materno complementado com fórmula.",
    script: [
      { trigger: "Abertura", speech: "Doutor(a), meu filho tem um carocinho na virilha que aparece quando ele chora. Quando para de chorar, some. Mas estou preocupada. E a bolsa esquerda é maior desde que nasceu." },
      { trigger: "Sobre a virilha", speech: "O inchaço aparece quando ele chora ou quando fico com ele em pé. Quando deita e para de chorar, desaparece sozinho. Nunca ficou duro ou vermelho." },
      { trigger: "Sobre a bolsa escrotal", speech: "A bolsa esquerda é mais cheia. Parece que tem água dentro. Não dói quando toco. Quando ele deita, fica um pouco menor." },
      { trigger: "Sobre prematuridade", speech: "Ele nasceu prematuro, com 33 semanas. Ficou 3 semanas na UTI. Saiu bem, graças a Deus." },
      { trigger: "Sobre episódios de encarceramento (se perguntado)", speech: "Nunca ficou duro na virilha e nunca chorou de repente de dor. Graças a Deus nunca tive esse susto." },
      { trigger: "Sobre o umbigo", speech: "O umbigo também fica estufadinho às vezes. É diferente do da virilha, né?" },
      { trigger: "Pergunta ativa", speech: "Precisa operar?" },
      { trigger: "Pergunta ativa", speech: "É perigoso? Pode piorar?" },
      { trigger: "Pergunta ativa", speech: "O que é essa bolsa cheia de água?" },
      { trigger: "Pergunta ativa", speech: "Quando devo correr pro pronto-socorro?" }
    ],
    hiddenInfo: [
      "Rafael apresentou um episódio de choro inconsolável por 30 minutos há 1 semana, com o inchaço mais endurecido, que resolveu espontaneamente — possível episódio de encarceramento transitório; só revela se o candidato perguntar especificamente sobre episódios de choro intenso associado ao abaulamento ou de endurecimento do inchaço.",
      "Há hérnia umbilical pequena associada — só é mencionada ao exame físico ou se o candidato perguntar especificamente sobre o umbigo."
    ],
    actorBehavior: "Mãe calma, organizada e atenta. Observadora — notou detalhes do filho desde o nascimento. Fica mais ansiosa quando o médico menciona possibilidade de cirurgia ('meu filho já passou tanto tempo internado'). Colaborativa e receptiva. Responde bem a explicações detalhadas. Fica tranquila quando o médico explica claramente o que é urgente e o que não é."
  },

  instC: {
    diagnosis: "Hérnia inguinal indireta direita redutível associada a hidrocele comunicante esquerda, em prematuro de 33 semanas (8 meses de vida, 5 meses de idade corrigida). Hérnia umbilical associada (achado incidental). Sinal do silk glove positivo confirma processus vaginalis patente à direita.",
    differentials: [
      "Hidrocele não comunicante à direita — transluminação positiva e conteúdo líquido sem variação com o choro; diferenciada da hérnia pela ausência de redutibilidade e de sinal do silk glove; a bolsa escrotal direita está normal nesse caso.",
      "Linfadenomegalia inguinal — linfonodos aumentados podem mimetizar hérnia; entretanto, linfonodos são firmes, não moles, não redutíveis e não variam com o choro.",
      "Criptorquidia associada — testículo não descido pode ser palpado na região inguinal; diferenciado pelo achado normal dos testículos ao exame (ambos tópicos, testículo esquerdo palpável dentro da hidrocele)."
    ],
    context: "Prematuro de 33 semanas com hérnia inguinal indireta direita redutível e hidrocele comunicante esquerda. A prematuridade aumenta significativamente o risco de encarceramento e estrangulamento da hérnia — encaminhamento cirúrgico com urgência relativa (antes dos 12 meses, preferencialmente nas próximas semanas). Hidrocele comunicante: conduta expectante até os 2 anos.",
    justify: "Hérnia inguinal direita: abaulamento inguinal que aparece ao choro e reduz em repouso + redutível à palpação + sinal do silk glove positivo (processus vaginalis patente) + possível episódio de encarceramento transitório há 1 semana. Hidrocele esquerda comunicante: aumento de volume escrotal esquerdo + transluminação positiva (conteúdo líquido) + redução parcial em decúbito (comunicação com o abdome) + testículo palpável dentro. Prematuridade eleva o risco de encarceramento — cirurgia eletiva urgente indicada antes do habitual.",
    expectedAnamnesis: [
      "Quando foi notado o abaulamento inguinal e a hidrocele.",
      "Redutibilidade: some em repouso, aumenta ao choro.",
      "Episódios de encarceramento: choro inconsolável, abaulamento endurecido, pele vermelha.",
      "Prematuridade: semanas gestacionais, tempo de internação neonatal.",
      "Antecedentes cirúrgicos.",
      "Micção normal (excluir obstrução).",
      "Características da hidrocele: varia com posição?"
    ],
    expectedPhysical: [
      "Inspeção em repouso e ao choro (provocado ou espontâneo): observar o abaulamento.",
      "Palpação do canal inguinal: redutibilidade, consistência, calor, eritema.",
      "Sinal do silk glove: palpação do cordão espermático — espessamento indica processus vaginalis patente.",
      "Transluminação: lanterna aplicada na bolsa escrotal — positiva = hidrocele (conteúdo líquido); negativa = hérnia ou outro conteúdo sólido.",
      "Avaliação da bolsa escrotal: tamanho, consistência, posição dos testículos.",
      "Pesquisa de sinais de encarceramento: pele normal vs. eritematosa, mole vs. dura.",
      "Umbigo: avaliação de hérnia umbilical associada."
    ],
    expectedExams: [
      { exam: "Nenhum exame necessário antes do encaminhamento", justify: "Diagnóstico clínico — USG não é necessário para hérnia inguinal clinicamente evidente", expected: "—" }
    ],
    expectedConduct: [
      "Hérnia inguinal — Cirúrgica: Herniorrafia inguinal eletiva com urgência relativa (prematuro = alto risco de encarceramento). Encaminhamento para cirurgia pediátrica nas próximas semanas, não aguardar. Orquidopexia contralateral não é mais indicada rotineiramente em prematuros. Referência: SBP — Cirurgia Pediátrica, 2020; EAU/ESPU, 2023.",
      "Hidrocele comunicante — Expectante: Conduta expectante até os 2 anos (resolução espontânea em 80% dos casos). Se persistir após 2 anos — hidrocelectomia. Referência: EAU/ESPU, 2023.",
      "Hérnia umbilical — Expectante: Resolução espontânea esperada até os 3 anos de idade. Cirurgia indicada se persistir após 3 anos ou anel > 1,5–2 cm. Referência: SBP, 2020.",
      "Orientações aos pais: Explicar os sinais de encarceramento (choro inconsolável repentino, abaulamento endurecido, pele vermelha/roxa sobre a hérnia, vômitos — ir imediatamente à emergência); explicar que a hidrocele é 'água' que entra e sai do abdome e tende a resolver; que a hérnia umbilical também tende a resolver até os 3 anos.",
      "Seguimento: Encaminhamento para cirurgia pediátrica com urgência relativa; retorno em 1 mês; orientar ida à emergência se sinais de encarceramento."
    ],
    expectedCommunication: [
      "Apresentação: Apresentar-se pelo nome; reconhecer a trajetória do prematuro e a preocupação da mãe com nova cirurgia.",
      "Comunicação do diagnóstico: Explicar em linguagem acessível: 'O inchaço na virilha é uma hérnia — uma parte do intestino que escapa por um caminho que deveria ter fechado. Como o Rafael nasceu prematuro, essa abertura ficou maior e o risco de encravar é maior, então precisamos operar logo. A bolsa inchada é uma bolsinha de água — essa tende a secar sozinha até os 2 aninhos.'",
      "Escuta ativa: Validar o medo da mãe por nova cirurgia; explicar que é uma cirurgia simples e segura; não minimizar o histórico de prematuridade."
    ],
    criticalErrors: [
      "Não reconhecer que a prematuridade eleva o risco de encarceramento e exige cirurgia eletiva urgente (não pode aguardar indefinidamente).",
      "Confundir hidrocele com hérnia sem usar transluminação como critério diferencial.",
      "Indicar conduta expectante para a hérnia inguinal em prematuro (incorreto — cirurgia eletiva urgente é indicada).",
      "Não orientar os pais sobre sinais de encarceramento e quando ir à emergência.",
      "Indicar cirurgia imediata para hidrocele comunicante (conduta expectante até 2 anos é o correto).",
      "Orientar cirurgia imediata para hérnia umbilical pequena assintomática (conduta expectante até 3 anos é o correto)."
    ]
  },

  instD: {
    title: "CHECKLIST — HÉRNIA INGUINAL E HIDROCELE EM PREMATURO",
    sections: [
      {
        h: "BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
        items: [
          { item: "Apresentou-se pelo nome e reconheceu o histórico de prematuridade antes de iniciar.", score: 0.5, ref: "CFM 2232/2019; MS — Humanização no SUS" },
          { item: "Orientou os pais sobre sinais de encarceramento e quando buscar a emergência em linguagem clara.", score: 0.5, ref: "SBP — Cirurgia Pediátrica, 2020" }
        ]
      },
      {
        h: "BLOCO 2 — ANAMNESE",
        items: [
          { item: "Investigou redutibilidade do abaulamento inguinal (some em repouso, aumenta ao choro).", score: 0.5, ref: "SBP — Cirurgia Pediátrica, 2020" },
          { item: "Perguntou especificamente sobre episódios de encarceramento (choro inconsolável, abaulamento endurecido).", score: 0.5, ref: "SBP — Cirurgia Pediátrica, 2020" },
          { item: "Confirmou prematuridade (33 semanas) como fator de risco para encarceramento.", score: 0.5, ref: "EAU/ESPU — Paediatric Urology, 2023" },
          { item: "Investigou características da hidrocele: variação com posição, dor.", score: 0.3, ref: "EAU/ESPU, 2023" }
        ]
      },
      {
        h: "BLOCO 3 — EXAME FÍSICO",
        items: [
          { item: "Realizou transluminação na bolsa escrotal esquerda e identificou resultado positivo (hidrocele).", score: 1.0, ref: "EAU/ESPU, 2023" },
          { item: "Avaliou o sinal do silk glove à direita (espessamento do cordão espermático).", score: 0.5, ref: "SBP — Cirurgia Pediátrica, 2020" },
          { item: "Avaliou sinais de encarceramento: pele, consistência, eritema sobre a hérnia.", score: 0.5, ref: "SBP — Cirurgia Pediátrica, 2020" }
        ]
      },
      {
        h: "BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO",
        items: [
          { item: "Diferenciou hérnia inguinal de hidrocele corretamente com base em transluminação e redutibilidade.", score: 1.0, ref: "EAU/ESPU, 2023" },
          { item: "Identificou que a prematuridade indica cirurgia eletiva com urgência relativa (não expectante).", score: 1.0, ref: "SBP — Cirurgia Pediátrica, 2020" }
        ]
      },
      {
        h: "BLOCO 5 — CONDUTA E ORIENTAÇÃO AO PACIENTE",
        items: [
          { item: "Encaminhou para cirurgia pediátrica com urgência relativa para correção da hérnia inguinal.", score: 1.0, ref: "SBP — Cirurgia Pediátrica, 2020; EAU/ESPU, 2023" },
          { item: "Indicou conduta expectante para hidrocele comunicante até os 2 anos de vida.", score: 0.5, ref: "EAU/ESPU, 2023" },
          { item: "Indicou conduta expectante para hérnia umbilical assintomática até os 3 anos.", score: 0.5, ref: "SBP — Cirurgia Pediátrica, 2020" },
          { item: "Orientou sinais de encarceramento que exigem ida imediata à emergência.", score: 0.7, ref: "SBP — Cirurgia Pediátrica, 2020" }
        ]
      }
    ]
  }
},

  // Estação 19 

{
  id: 19,
  title: "Criança com dor abdominal que começou no umbigo e foi para o lado direito",
  sub: "UPA — Urgência e Emergência",
  tema: 'Cirurgia Pediatrica',
  topic: "Apendicite Aguda Pediátrica / Pediatric Appendicitis Score",
  level: "moderado",
  cardAccent: "#e65100",

  instA: {
    scenario: "Urgência — UPA 24h. Sala de atendimento pediátrico, turno noturno.",
    patient: "T.M., 9 anos, masculino, estudante. Mãe acompanhante. Sem comorbidades conhecidas.",
    complaint: "Mãe refere: 'Meu filho começou com dor no umbigo ontem de noite, mas agora a dor foi pro lado direito da barriga. Ele tem febre, não quer comer nada e tá com dificuldade pra andar.'",
    tasks: [
      "Realize a anamnese dirigida: início da dor, migração, febre, anorexia, náuseas, vômitos e última evacuação",
      "Solicite o exame físico abdominal com as manobras semiológicas pertinentes",
      "Aplique um escore diagnóstico para apendicite pediátrica e calcule a pontuação",
      "Solicite os exames complementares adequados e interprete os resultados",
      "Formule o diagnóstico e indique o tratamento cirúrgico com a justificativa adequada",
      "Comunique à família a necessidade de cirurgia de urgência de forma clara e empática"
    ]
  },

  instB: {
    vitals: { PA: "100/70 mmHg", FC: "118 bpm", FR: "22 irpm", Tax: "38,6°C", Peso: "32 kg", Altura: "1,35 m", IMC: "17,6 kg/m²" },
    physicalGeneral: "Regular estado geral. Posição antálgica em flexão de quadril, fácies de dor. Hipoativo, pouco colaborativo por dor. Febril (38,6°C). Palidez leve. Recusa de movimentação ativa.",
    physicalSeg: [
      "ABDOME: Dor máxima à palpação em Ponto de McBurney (FID); Blumberg positivo (dor à descompressão brusca em FID); Rovsing positivo (dor em FID à palpação da FIE); sinal do Psoas positivo (dor à extensão do quadril direito); defesa muscular voluntária em FID; peristaltismo diminuído; sem visceromegalias; sem peritonismo generalizado",
      "POSTURA: Paciente mantém ligeira flexão do quadril direito (posição antálgica — apêndice retrocecal)",
      "GENITÁLIA: Normal, testículos tópicos bilaterais (exclui torção testicular como diagnóstico diferencial)"
    ],
    labs: [
      { test: "Leucócitos", val: "17.400/mm³", ref: "4.500–13.500/mm³", alt: true },
      { test: "Neutrófilos", val: "88%", ref: "40–70%", alt: true },
      { test: "Bastões", val: "8%", ref: "< 5%", alt: true },
      { test: "PCR", val: "82 mg/L", ref: "< 5 mg/L", alt: true },
      { test: "Hemoglobina", val: "12,8 g/dL", ref: "11,5–14,5 g/dL", alt: false },
      { test: "Urina tipo I", val: "Normal, sem leucocitúria, sem nitrito", ref: "—", alt: false }
    ],
    image: "Ultrassonografia abdominal: Apêndice cecal visualizado em FID. Diâmetro anteroposterior de 9 mm (> 6 mm — critério de apendicite). Espessamento parietal sem estratificação. Ausência de compressibilidade. Pequena quantidade de líquido livre periapendicular. Sem cálculo fecal visível. Conclusão: achados ultrassonográficos compatíveis com apendicite aguda.",
    note: "Entregar o exame físico somente se solicitado verbalmente. Entregar os exames laboratoriais somente se solicitados explicitamente pelo candidato. Entregar o laudo de USG somente se o candidato solicitar exame de imagem abdominal. Observar se o candidato aplica o PAS ou o escore de Alvarado e se diferencia corretamente os dois instrumentos.",
    patientProfile: "Thiago M., 9 anos, masculino, estudante do 3º ano. Mãe: Cláudia M., 34 anos, costureira. Pai ausente. Mora com a mãe e a irmã. Última refeição há 14 horas (parou de comer por dor e náusea). Última evacuação há 2 dias.",
    script: [
      { trigger: "Abertura", speech: "Mãe: \"Doutor(a), meu filho começou com dor de barriga ontem à noite. Primeiro era no umbigo, mas foi passando pro lado direito. Ele tá com febre, não quer comer nada e quando caminha fica com dor.\"" },
      { trigger: "Sobre a dor", speech: "Thiago: \"Dói muito aqui.\" (aponta para FID). \"Quando caminho piora. Quando fico parado melhora um pouquinho.\"" },
      { trigger: "Sobre migração (se perguntado)", speech: "Mãe: \"Começou no umbigo lá pelas 10 da noite. De manhã já tinha ido para o lado direito.\"" },
      { trigger: "Sobre febre", speech: "Mãe: \"A febre começou hoje de manhã. Dei dipirona, baixou um pouco mas voltou.\"" },
      { trigger: "Sobre alimentação", speech: "Thiago: \"Não tô com fome. Quando penso em comer dá náusea.\"" },
      { trigger: "Sobre vômitos (se perguntado)", speech: "Thiago: \"Vomitei uma vez de manhã. Só uma vez.\"" },
      { trigger: "Sobre evacuação (se perguntado)", speech: "Mãe: \"Ele não fez cocô há dois dias. É um pouco parado nisso.\"" },
      { trigger: "Sobre urina (se perguntado)", speech: "Mãe: \"A xixi tá normal. Não tá ardendo.\"" },
      { trigger: "Pergunta ativa — diagnóstico", speech: "Mãe: \"O que ele tem, doutor(a)? É a apendicite?\"" },
      { trigger: "Pergunta ativa — cirurgia", speech: "Mãe: \"Precisa operar? É urgente?\"" },
      { trigger: "Pergunta ativa — risco", speech: "Mãe: \"É perigoso? Pode ser grave?\"" }
    ],
    hiddenInfo: [
      "Thiago vomitou uma vez pela manhã — só menciona espontaneamente sobre náusea; os vômitos só são confirmados se o candidato perguntar especificamente \"você vomitou?\"",
      "A última evacuação foi há 2 dias — só revela se o candidato perguntar especificamente sobre o hábito intestinal e quando foi a última evacuação"
    ],
    actorBehavior: "Mãe ansiosa, preocupada e ligeiramente agitada. Thiago está quieto, com fácies de dor, mexe-se pouco. Responde com poucas palavras por causa da dor. A mãe fala mais que o filho. Fica visivelmente aliviada quando o médico demonstra segurança e explica o que vai acontecer. Thiago fica com medo quando ouve a palavra \"cirurgia\" — pede à mãe para segurar sua mão."
  },

  instC: {
    diagnosis: "Apendicite aguda em fase não perfurada, alta probabilidade. Pediatric Appendicitis Score (PAS) = 8 pontos (alta probabilidade — indicação de cirurgia). Confirmação ultrassonográfica: apêndice 9 mm com líquido livre periapendicular.",
    differentials: [
      "Adenite mesentérica — inflamação de linfonodos mesentéricos, frequentemente pós-IVAS; simula apendicite mas dor é menos localizada, sem peritonismo, Blumberg negativo; USG mostraria linfonodos aumentados sem apêndice alterado — excluída pela localização precisa em McBurney, Blumberg positivo e apêndice espessado no USG",
      "Infecção do trato urinário (pielonefrite) — febre, dor abdominal e flancos; excluída pela urina tipo I normal e localização da dor em FID com sinais peritoneais",
      "Constipação intestinal grave — dor abdominal difusa em crianças; excluída pela localização precisa em McBurney, febre, Blumberg positivo e leucocitose com neutrofilia"
    ],
    context: "Criança de 9 anos com apendicite aguda confirmada clínica e ultrassonograficamente. Dor migratória (periumbilical → FID), febre, anorexia, náusea, Blumberg e Rovsing positivos, leucocitose com desvio à esquerda, PCR elevado e USG com apêndice 9 mm. PAS = 8 pontos → alta probabilidade → apendicectomia de urgência indicada.",
    justify: "PAS (Pediatric Appendicitis Score): migração da dor para FID (1 pt) + anorexia (1 pt) + náuseas/vômitos (1 pt) + dor em FID à palpação (2 pts) + Blumberg positivo (1 pt) + temperatura > 38°C (1 pt) + leucocitose > 10.000 (1 pt) + desvio à esquerda — neutrófilos > 75% (1 pt) = 8 pontos → alta probabilidade de apendicite → indicação cirúrgica. USG confirma: apêndice 9 mm, sem compressibilidade, líquido livre.",
    expectedAnamnesis: [
      "Início e localização da dor: umbilical → FID (migração clássica)",
      "Caracterizar: contínua, piora ao movimento",
      "Febre: início, temperatura",
      "Anorexia: recusa alimentar desde quando",
      "Náuseas e vômitos: quantas vezes",
      "Última evacuação: constipação associada",
      "Urina: disúria (excluir ITU)",
      "Última refeição (importante pré-operatório)"
    ],
    expectedPhysical: [
      "Sinais vitais: Tax, FC (taquicardia por dor e febre)",
      "Inspeção: posição antálgica, fácies de dor, movimentação espontânea",
      "Palpação: ponto de McBurney (FID), defesa muscular, rigidez",
      "Manobras específicas: Blumberg (descompressão brusca em FID → dor = peritonismo), Rovsing (palpação de FIE → dor em FID = irritação peritoneal localizada), sinal do Psoas (extensão do quadril direito → dor = apêndice retrocecal), sinal do Obturador (rotação interna do quadril D → dor = apêndice pélvico)",
      "Ausculta: peristaltismo diminuído"
    ],
    expectedExams: [
      { exam: "Hemograma com diferencial", justify: "Leucocitose com neutrofilia e desvio — confirmação inflamatória", expected: "Leucócitos 17.400, neutrófilos 88%, bastões 8%" },
      { exam: "PCR", justify: "Marcador de atividade inflamatória", expected: "82 mg/L (elevado)" },
      { exam: "Urina tipo I", justify: "Excluir ITU como causa de dor abdominal direita", expected: "Normal" },
      { exam: "Ultrassonografia abdominal", justify: "Confirmação diagnóstica — apêndice espessado, líquido livre", expected: "Apêndice 9 mm, líquido livre periapendicular" },
      { exam: "TC de abdome (se USG inconclusivo)", justify: "Segunda linha quando USG não visualiza o apêndice", expected: "Não necessária nesse caso" }
    ],
    expectedConduct: [
      "Imediata: Jejum absoluto (última refeição há 14 horas — verificar); acesso venoso periférico; analgesia (dipirona EV — não contraindicada); hidratação venosa",
      "Farmacológica (pré-operatória): Antibioticoterapia pré-operatória: ceftriaxona 50 mg/kg/dose EV + metronidazol 7,5 mg/kg/dose EV — administrar antes da indução anestésica. Referência: SBP — Cirurgia Pediátrica, 2022",
      "Cirúrgica: Apendicectomia de urgência (laparoscópica ou aberta, conforme disponibilidade). Referência: SBP — Cirurgia Pediátrica, 2022",
      "Comunicação com a família: Explicar o diagnóstico em linguagem acessível; a necessidade de cirurgia urgente; que a cirurgia é segura e necessária para evitar a perfuração; obter o termo de consentimento informado dos responsáveis",
      "Seguimento: Internação hospitalar; antibioticoterapia continuada conforme achado cirúrgico; alta em 24–48h se sem perfuração; retorno em 7–10 dias"
    ],
    expectedCommunication: [
      "Apresentação: Apresentar-se pelo nome; reconhecer o sofrimento do Thiago; incluí-lo na explicação de forma adequada para a idade",
      "Comunicação do diagnóstico: \"O apêndice do seu filho inflamou e precisamos operá-lo hoje. É uma cirurgia comum e segura, mas é urgente para evitar que o apêndice estoure.\"",
      "Escuta ativa: Responder às dúvidas da mãe; tranquilizar o Thiago sem minimizar; explicar o que vai acontecer passo a passo"
    ],
    criticalErrors: [
      "Não reconhecer a apendicite e dar alta com apenas analgesia",
      "Não solicitar hemograma e USG abdominal com quadro sugestivo de apendicite",
      "Não indicar cirurgia com PAS ≥ 6 e USG confirmando apendicite",
      "Prescrever apenas antibiótico sem indicar cirurgia (antibioticoterapia exclusiva pode ser considerada em casos muito selecionados, mas não é o padrão para apendicite confirmada)",
      "Não aplicar escore diagnóstico (PAS ou Alvarado) — conduta baseada apenas na \"impressão clínica\" sem metodologia",
      "Confundir os critérios do PAS com os do escore de Alvarado (leucocitose vale 1 pt no PAS e 2 pts no Alvarado — não intercambiar)"
    ]
  },

  instD: {
    title: "CHECKLIST — APENDICITE AGUDA EM CRIANÇA",
    sections: [
      {
        h: "BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
        items: [
          { item: "Apresentou-se pelo nome e dirigiu-se tanto à criança quanto à mãe de forma adequada", score: 0.5, ref: "CFM 2232/2019; SBP — Comunicação em Pediatria" },
          { item: "Comunicou a necessidade de cirurgia de forma clara, sem termos técnicos e com empatia", score: 0.5, ref: "MS — Política Nacional de Humanização, 2013" }
        ]
      },
      {
        h: "BLOCO 2 — ANAMNESE",
        items: [
          { item: "Investigou migração da dor: de periumbilical para FID", score: 0.5, ref: "SBP — Cirurgia Pediátrica, 2022" },
          { item: "Investigou anorexia, náuseas e vômitos como sintomas associados", score: 0.5, ref: "SBP — Cirurgia Pediátrica, 2022" },
          { item: "Perguntou sobre febre: início e temperatura", score: 0.3, ref: "SBP — Cirurgia Pediátrica, 2022" },
          { item: "Investigou hábito intestinal (última evacuação) e urina (excluir ITU)", score: 0.3, ref: "SBP — Cirurgia Pediátrica, 2022" },
          { item: "Perguntou sobre última refeição (dado pré-operatório importante)", score: 0.3, ref: "SBP — Cirurgia Pediátrica, 2022" }
        ]
      },
      {
        h: "BLOCO 3 — EXAME FÍSICO",
        items: [
          { item: "Avaliou dor em ponto de McBurney (FID) com a técnica correta", score: 0.5, ref: "SBP — Cirurgia Pediátrica, 2022" },
          { item: "Realizou manobra de Blumberg e identificou descompressão brusca positiva em FID", score: 1.0, ref: "SBP — Cirurgia Pediátrica, 2022" },
          { item: "Realizou pelo menos mais uma manobra específica: Rovsing ou sinal do Psoas", score: 0.5, ref: "SBP — Cirurgia Pediátrica, 2022" }
        ]
      },
      {
        h: "BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO",
        items: [
          { item: "Aplicou o PAS ou escore de Alvarado e calculou pontuação de alta probabilidade (≥ 6)", score: 1.0, ref: "AAP — Appendicitis in Children, 2021" },
          { item: "Solicitou hemograma, PCR, urina tipo I e USG abdominal", score: 0.5, ref: "SBP — Cirurgia Pediátrica, 2022" },
          { item: "Formulou diagnóstico de apendicite aguda e indicou cirurgia de urgência", score: 1.0, ref: "SBP — Cirurgia Pediátrica, 2022" }
        ]
      },
      {
        h: "BLOCO 5 — CONDUTA E ORIENTAÇÃO AO PACIENTE",
        items: [
          { item: "Indicou jejum, acesso venoso e analgesia imediatamente", score: 0.5, ref: "SBP — Cirurgia Pediátrica, 2022" },
          { item: "Prescreveu antibioticoterapia pré-operatória: ceftriaxona + metronidazol EV", score: 0.5, ref: "SBP — Cirurgia Pediátrica, 2022" },
          { item: "Indicou apendicectomia de urgência com justificativa clara para a família", score: 0.6, ref: "SBP — Cirurgia Pediátrica, 2022" }
        ]
      }
    ]
  }
},

  // Estação 20: Torção Testicular em Adolescente

{
  id: 20,
  title: "Adolescente com dor intensa e súbita no testículo durante a madrugada",
  sub: "UPA — Urgência e Emergência",
  tema: 'Cirurgia Pediatrica',
  topic: "Torção Testicular / Escroto Agudo / Emergência Urológica",
  level: "difícil",
  cardAccent: "#b71c1c",

  instA: {
    scenario: "Urgência — UPA 24h. Sala de atendimento, turno da madrugada.",
    patient: "M.R., 13 anos, masculino, estudante. Pai acompanhante. Sem comorbidades conhecidas.",
    complaint: "Pai refere: 'Meu filho acordou gritando de dor lá embaixo às 3 da manhã. A dor é muito forte, veio do nada. Ele tá passando mal.'",
    tasks: [
      "Realize a anamnese: início súbito da dor, trauma, infecção urinária, febre, náuseas e atividade sexual",
      "Solicite o exame físico escrotal e identifique os achados de torção testicular",
      "Diferencie torção testicular de orquiepididimite e torção de apêndice testicular com base nos achados",
      "Defina a conduta imediata: identifique se o quadro clínico é típico e indique exploração cirúrgica de urgência sem aguardar Doppler",
      "Explique ao pai e ao paciente a gravidade, a urgência e a janela de tempo para preservação do testículo",
      "Acione a equipe cirúrgica e prepare o paciente para a cirurgia"
    ]
  },

  instB: {
    vitals: { PA: "128/80 mmHg", FC: "114 bpm", FR: "20 irpm", Tax: "37,1°C (afebril)", Peso: "58 kg", Altura: "1,68 m", IMC: "20,5 kg/m²" },
    physicalGeneral: "Mau estado geral. Fácies de dor intensa. Palidez cutânea. Diaforese. Posição antálgica no leito. Agitado. Sem febre.",
    physicalSeg: [
      "TESTÍCULO ESQUERDO: Aumentado de volume, endurecido, posição alta na bolsa escrotal (elevado), horizontalizado (\"lying horizontally\"); dor intensa à palpação, irradiando para o flanco esquerdo",
      "SINAL DE PREHN: Negativo — elevação manual do testículo NÃO alivia a dor (sinal de Prehn negativo = favorece torção; positivo = favorece orquiepididimite)",
      "REFLEXO CREMASTÉRICO ESQUERDO: Ausente (estimulação da face interna da coxa esquerda não produz elevação do testículo)",
      "PELE ESCROTAL ESQUERDA: Eritema e edema discretos — sinais tardios presentes",
      "TESTÍCULO DIREITO: Normal, tópico, sem dor",
      "REFLEXO CREMASTÉRICO DIREITO: Presente"
    ],
    labs: [
      { test: "Leucócitos", val: "9.800/mm³", ref: "4.500–13.500/mm³", alt: false },
      { test: "Proteína C-reativa", val: "3 mg/L", ref: "< 5 mg/L", alt: false },
      { test: "Urina tipo I", val: "Normal, sem leucocitúria, sem nitrito", ref: "—", alt: false }
    ],
    image: "Ultrassonografia com Doppler escrotal (se solicitado — quadro TÍPICO, Doppler NÃO é o próximo passo): Testículo esquerdo com aumento de volume e heterogeneidade do parênquima. AUSÊNCIA COMPLETA DE FLUXO VASCULAR AO DOPPLER COLORIDO. Testículo direito com fluxo preservado. Pequena quantidade de líquido livre periapendicular. Conclusão: achados compatíveis com torção testicular esquerda. Encaminhar para avaliação cirúrgica imediata.",
    note: "Entregar o exame físico somente se solicitado. Entregar os exames laboratoriais somente se solicitados. ATENÇÃO: Se o candidato indicar cirurgia de urgência sem aguardar o Doppler (conduta correta em quadro típico), valorizar no checklist. Se o candidato solicitar USG antes de indicar a cirurgia em quadro clínico típico, entregar o laudo mas anotar como conduta imprópria para o contexto (atraso desnecessário). O laudo confirma a torção — mas o objetivo da estação é avaliar se o candidato reconhece que a decisão cirúrgica é clínica, não depende do Doppler em quadro típico.",
    patientProfile: "Miguel R., 13 anos, masculino, estudante do 8º ano. Pai: Roberto R., 42 anos, motorista. Mãe em casa com irmã mais nova. Pai visivelmente abalado e preocupado. Miguel é tímido, constrangido com o tema. Estava dormindo quando a dor começou.",
    script: [
      { trigger: "Abertura", speech: "Pai: \"Doutor(a), meu filho acordou de madrugada gritando de dor aqui embaixo. Nunca vi ele assim. A dor foi do nada, estava dormindo.\"" },
      { trigger: "Sobre o início da dor", speech: "Miguel: \"Eu tava dormindo e acordei com uma dor horrível. Não bati em nada, não fiz nada.\"" },
      { trigger: "Sobre febre (se perguntado)", speech: "Miguel: \"Não tenho febre não.\" Pai: \"Medi em casa, não tinha febre.\"" },
      { trigger: "Sobre trauma (se perguntado)", speech: "Miguel: \"Não, não bati em nada. Só acordei com a dor.\"" },
      { trigger: "Sobre urina (se perguntado)", speech: "Miguel: \"A xixi tá normal. Não dói.\"" },
      { trigger: "Sobre atividade sexual (se perguntado — com privacidade)", speech: "Miguel (envergonhado): \"Não tenho namorada. Não tive nada assim não.\"" },
      { trigger: "Sobre náuseas/vômitos", speech: "Miguel: \"Tô com enjoo. Vomitei uma vez antes de vir aqui.\"" },
      { trigger: "Sobre episódios anteriores (se perguntado)", speech: "Miguel: \"Já tive uma dorzinha parecida aqui antes, mas passou rápido. Faz umas semanas.\"" },
      { trigger: "Pergunta ativa — pai", speech: "Pai: \"É grave? Pode perder o testículo?\"" },
      { trigger: "Pergunta ativa — pai", speech: "Pai: \"Por que precisa operar tão rápido? Não dá pra esperar até amanhã?\"" }
    ],
    hiddenInfo: [
      "Miguel já teve um episódio de dor escrotal breve que resolveu espontaneamente semanas atrás (possível torção intermitente) — só revela se o candidato perguntar especificamente sobre episódios anteriores de dor escrotal",
      "Miguel ficou com vergonha de contar ao pai sobre o episódio anterior — só revela se o candidato entrevistar Miguel com privacidade em relação ao pai"
    ],
    actorBehavior: "Miguel muito constrangido com o local da dor, especialmente na presença do pai. Responde melhor quando o médico pede que o pai saia brevemente para uma parte da anamnese. Dor intensa — fácies de sofrimento genuíno. Pai muito angustiado, faz muitas perguntas. O pai tende a responder pelas perguntas direcionadas ao filho — o candidato deve conseguir criar privacidade para Miguel. A menção à cirurgia imediata assusta o pai, que questiona a urgência."
  },

  instC: {
    diagnosis: "Torção testicular esquerda — emergência urológica. Quadro clínico típico: dor intensa de início súbito durante o sono, sem trauma, sem febre, testículo elevado e horizontalizado, Prehn negativo, reflexo cremastérico ausente, sem leucocitose, urina normal. Doppler (se realizado) confirma ausência de fluxo vascular. Janela de tempo: < 3–4 horas do início (alta probabilidade de salvabilidade > 90%). Indicação de exploração cirúrgica imediata sem aguardar exames de imagem.",
    differentials: [
      "Orquiepididimite — inflamação infecciosa do testículo e epidídimo; início gradual, com febre, leucocitose, piúria; Prehn positivo (elevação alivia a dor); reflexo cremastérico presente; Doppler com fluxo aumentado — excluída nesse caso (afebril, sem leucocitose, sem piúria, Prehn negativo, reflexo ausente)",
      "Torção de apêndice testicular — torção de estrutura vestigial; mais comum em pré-púberes (7–12 anos); início gradual; dor localizada no polo superior; \"blue dot sign\" (mancha azulada palpável no polo superior); Doppler com fluxo preservado; reflexo cremastérico presente — excluída pelo início súbito, dor intensa generalizada e ausência de reflexo cremastérico",
      "Hérnia inguinal encarcerada — conteúdo herniário encarcerado pode causar dor intensa; palpação do canal inguinal e bolsa escrotal diferencia; excluída pela ausência de abaulamento inguinal e pelo testículo aumentado e horizontalizado como achado principal"
    ],
    context: "Adolescente de 13 anos com torção testicular esquerda em janela de < 4 horas. Dor súbita noturna, testículo horizontalizado, Prehn negativo, reflexo cremastérico ausente, sem febre nem leucocitose. Quadro clínico típico — exploração cirúrgica imediata sem aguardar Doppler. Salvabilidade > 90% se tratado em < 6 horas.",
    justify: "Quadro clínico típico de torção testicular: (1) dor súbita intensa sem trauma; (2) ausência de febre e leucocitose (afasta infecção); (3) urina normal (afasta ITU/orquiepididimite infecciosa); (4) testículo elevado e horizontalizado; (5) Prehn negativo; (6) ausência de reflexo cremastérico ipsilateral. Todos os critérios clínicos presentes — diagnóstico clínico confirmado. Doppler é ferramenta auxiliar em casos atípicos, não deve atrasar a cirurgia em quadro típico.",
    expectedAnamnesis: [
      "Início: súbito (acorda do sono) ou gradual — fundamental para diferenciação",
      "Trauma: presente ou ausente",
      "Febre: presença afasta torção, favorece infecção",
      "Urina: disúria/piúria afasta torção, sugere orquiepididimite",
      "Atividade sexual: IST como causa de orquiepididimite (entrevista com privacidade)",
      "Episódios anteriores de dor escrotal transitória (torção intermitente)",
      "Náuseas e vômitos (vagotonia por dor intensa — típico de torção)",
      "Última refeição (pré-operatório)"
    ],
    expectedPhysical: [
      "Sinais vitais: Tax (afebril = favorece torção), FC (taquicardia por dor)",
      "Inspeção: edema, eritema escrotal, posição do testículo",
      "Palpação: consistência, sensibilidade, posição (elevado = torção), horizontalização",
      "Sinal de Prehn: elevar o testículo manualmente — se alivia = orquiepididimite; se não alivia ou piora = torção",
      "Reflexo cremastérico: estimular face interna da coxa — ausência ipsilateral é altamente sugestiva de torção",
      "Epidídimo: palpação — epidídimo anteriorizando pode indicar torção do cordão"
    ],
    expectedExams: [
      { exam: "Urina tipo I", justify: "Afastar ITU/orquiepididimite infecciosa", expected: "Normal (sem leucocitúria)" },
      { exam: "Hemograma", justify: "Afastar leucocitose (infecção)", expected: "Normal (9.800)" },
      { exam: "USG com Doppler", justify: "Confirmar ausência de fluxo — SOMENTE se quadro atípico ou duvidoso", expected: "Ausência de fluxo (confirma torção)" }
    ],
    expectedConduct: [
      "Imediata: Cirurgia de urgência — exploração escrotal imediata sem aguardar Doppler em quadro típico. Não há tempo a perder: < 6 horas = salvar o testículo",
      "Cirúrgica: Destorção manual (tentativa antes da cirurgia — \"abre o livro\": rotação lateral para medial); se não resolver, exploração cirúrgica imediata; orquidopexia bilateral (risco de torção contralateral de 40%); se isquemia irreversível, orquiectomia + fixação do contralateral. Referência: EAU/ESPU, 2023; SBP, 2021",
      "Analgesia: Dipirona ou morfina EV para controle da dor — analgesia NÃO está contraindicada e não mascara o diagnóstico já estabelecido",
      "Farmacológica: Sem antibióticos (não é processo infeccioso)",
      "Comunicação: Explicar ao pai e ao Miguel a gravidade, a urgência, a janela de tempo e o que pode acontecer se não operar agora (perda do testículo)",
      "Seguimento: Internação; monitorização pós-operatória; alta em 24–48h; retorno para avaliação em 1 semana"
    ],
    expectedCommunication: [
      "Apresentação: Apresentar-se; pedir ao pai para aguardar brevemente enquanto faz algumas perguntas ao Miguel com privacidade (fundamental para anamnese completa)",
      "Comunicação do diagnóstico: Explicar em linguagem clara: \"O testículo esquerdo do seu filho girou em torno de si mesmo e está sem circulação. Precisamos operar agora. Quanto mais rápido, maior a chance de salvar o testículo. Se esperarmos, pode perder o testículo definitivamente.\"",
      "Escuta ativa: Responder às dúvidas do pai; tranquilizar o Miguel (adolescente assustado); explicar o que acontece na cirurgia de forma simples"
    ],
    criticalErrors: [
      "Não reconhecer a torção testicular como emergência urológica que exige cirurgia imediata",
      "Aguardar o resultado do Doppler antes de indicar a cirurgia em quadro clínico típico (erro — atrasa o tratamento e compromete a salvabilidade)",
      "Confundir com orquiepididimite e prescrever antibiótico sem indicar cirurgia",
      "Não mencionar a janela de tempo para salvabilidade ao explicar a urgência para a família",
      "Não avaliar o reflexo cremastérico e o sinal de Prehn (sinais essenciais para o diagnóstico diferencial)",
      "Não criar privacidade para entrevistar o adolescente (compromete a qualidade da anamnese sobre atividade sexual e episódios anteriores)"
    ]
  },

  instD: {
    title: "CHECKLIST — TORÇÃO TESTICULAR EM ADOLESCENTE",
    sections: [
      {
        h: "BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
        items: [
          { item: "Apresentou-se pelo nome e pediu ao pai para aguardar fora por alguns momentos para entrevistar o adolescente com privacidade", score: 0.5, ref: "ECA — Art. 17; MS — Saúde do Adolescente, 2020" },
          { item: "Comunicou ao pai e ao paciente a gravidade, a urgência e a janela de tempo de forma clara e empática", score: 0.5, ref: "MS — Política Nacional de Humanização, 2013" }
        ]
      },
      {
        h: "BLOCO 2 — ANAMNESE",
        items: [
          { item: "Investigou o início da dor: súbito (acorda do sono) e ausência de trauma", score: 0.5, ref: "EAU/ESPU — Paediatric Urology, 2023" },
          { item: "Perguntou sobre febre e sintomas urinários (disúria, piúria) para exclusão de orquiepididimite", score: 0.5, ref: "EAU/ESPU, 2023" },
          { item: "Investigou episódios anteriores de dor escrotal transitória (torção intermitente)", score: 0.5, ref: "SBP — Escroto Agudo, 2021" },
          { item: "Perguntou sobre atividade sexual com privacidade (excluir IST como causa de orquiepididimite)", score: 0.3, ref: "ECA — Art. 17; EAU/ESPU, 2023" }
        ]
      },
      {
        h: "BLOCO 3 — EXAME FÍSICO",
        items: [
          { item: "Avaliou o sinal de Prehn (elevação do testículo não alivia a dor = negativo = torção)", score: 1.0, ref: "EAU/ESPU, 2023" },
          { item: "Avaliou o reflexo cremastérico ipsilateral e identificou sua ausência", score: 1.0, ref: "EAU/ESPU, 2023" },
          { item: "Identificou o testículo horizontalizado e em posição elevada na bolsa escrotal", score: 0.5, ref: "EAU/ESPU, 2023" }
        ]
      },
      {
        h: "BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO",
        items: [
          { item: "Formulou diagnóstico de torção testicular com base no quadro clínico típico", score: 1.0, ref: "EAU/ESPU, 2023" },
          { item: "Indicou exploração cirúrgica imediata SEM aguardar Doppler em quadro clínico típico", score: 1.0, ref: "EAU/ESPU, 2023; SBP, 2021" },
          { item: "Mencionou a janela de tempo para salvabilidade (< 6 horas = > 90%) para justificar a urgência", score: 0.5, ref: "EAU/ESPU, 2023" }
        ]
      },
      {
        h: "BLOCO 5 — CONDUTA E ORIENTAÇÃO AO PACIENTE",
        items: [
          { item: "Indicou analgesia imediata e acesso venoso enquanto prepara para cirurgia", score: 0.5, ref: "EAU/ESPU, 2023" },
          { item: "Mencionou a necessidade de orquidopexia bilateral (fixação do testículo contralateral)", score: 0.5, ref: "EAU/ESPU, 2023" },
          { item: "Não prescreveu antibiótico (ausência de processo infeccioso — conduta correta)", score: 0.7, ref: "EAU/ESPU, 2023" }
        ]
      }
    ]
  }
},
];

export default cirurgiaPediatrica;
