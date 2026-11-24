const ginecologia = [
  // CASO 1 — MIOMATOSE UTERINA
  {
    id: 1,
    title: 'Sangramento menstrual intenso há 6 meses',
    sub: 'UBS — Atenção Primária',
    tema: 'Ginecologia',
    topic: 'Miomatose Uterina',
    level: 'moderado',
    cardAccent: '#AD1457',

    instA: {
      scenario: 'Consulta agendada na Unidade Básica de Saúde, período da manhã, paciente já atendida antes pela equipe.',
      patient: 'Marta Ferreira Lima, 42 anos, sexo feminino, auxiliar administrativa, G2P2A0.',
      complaint: 'Sangramento menstrual muito intenso e prolongado há cerca de 6 meses, com piora progressiva.',
      tasks: [
        'Realize a anamnese dirigida ao caso.',
        'Realize o exame físico (abdominal e ginecológico) dirigido.',
        'Formule a hipótese diagnóstica principal e os diferenciais.',
        'Solicite os exames complementares adequados.',
        'Proponha a conduta terapêutica inicial e oriente a paciente.'
      ]
    },

    instB: {
      vitals: {
        PA: '110/70 mmHg',
        FC: '96 bpm',
        FR: '18 irpm',
        Tax: '36,4 °C',
        Peso: '68 kg',
        Altura: '1,62 m',
        IMC: '25,9 kg/m²',
        SpO2: '98%'
      },
      physicalGeneral: 'Bom estado geral, corada porém com palidez leve de mucosas, hidratada, anictérica, acianótica, sem edemas.',
      physicalSeg: 'ABDOME: globoso, indolor à palpação superficial e profunda, massa palpável em hipogástrio de contornos regulares, indolor, compatível com aumento do volume uterino, sem sinais de irritação peritoneal. | EXAME ESPECULAR: colo uterino de aspecto normal, sem lesões visíveis, sangramento discreto proveniente do orifício externo do colo. | TOQUE VAGINAL: útero aumentado de volume (compatível com 14-16 semanas), superfície irregular (nodular), mobilidade preservada, anexos não palpáveis, sem dor à mobilização do colo.',
      labs: [
        { test: 'Hemoglobina', val: '9,8 g/dL', ref: '12,0 – 15,5 g/dL', alt: true },
        { test: 'Hematócrito', val: '31%', ref: '36 – 46%', alt: true },
        { test: 'Ferritina', val: '8 ng/mL', ref: '15 – 150 ng/mL', alt: true },
        { test: 'Beta-hCG', val: 'Negativo', ref: 'Negativo', alt: false },
        { test: 'TSH', val: '2,1 mUI/L', ref: '0,4 – 4,0 mUI/L', alt: false },
        { test: 'Coagulograma (TP/TTPA)', val: 'Normais', ref: 'Normais', alt: false }
      ],
      image: 'Ultrassonografia transvaginal: útero aumentado de volume (aproximadamente 12 x 8 x 7 cm), com múltiplos nódulos hipoecoicos, bem delimitados, sendo o de maior volume um nódulo submucoso de 4 cm distorcendo a cavidade endometrial. Ovários de aspecto normal bilateralmente.',
      note: 'Entregar o resultado do hemograma e da ultrassonografia apenas se o candidato solicitar exames complementares de forma dirigida. Não entregar espontaneamente.',
      patientProfile: 'Auxiliar administrativa, casada, dois filhos (partos normais), não deseja mais gestações. Refere piora da qualidade de vida por precisar trocar o absorvente a cada 1-2 horas nos dias de pico, faltando ao trabalho com frequência. Nega uso de anticoagulantes. História familiar: mãe também tinha "mioma".',
      script: [
        { trigger: 'Queixa principal', speech: 'Doutor(a), minha menstruação está muito forte, tenho que trocar o absorvente de hora em hora e às vezes escorre até na roupa. Isso já está me atrapalhando no trabalho.' },
        { trigger: 'Sobre duração/evolução', speech: 'Isso começou a piorar há uns 6 meses. Antes minha menstruação durava uns 5 dias, agora dura quase 10, e vem com coágulos grandes.' },
        { trigger: 'Sobre ciclo menstrual', speech: 'Minha menstruação vem certinha, a cada 28 dias, só que agora ela é muito mais intensa e demorada.' },
        { trigger: 'Sobre sintomas associados', speech: 'Sinto um peso no baixo-ventre, às vezes uma cólica mais forte, e tenho sentido muito cansaço ultimamente, até falta de ar quando subo escada.' },
        { trigger: 'Sobre sintomas urinários/intestinais', speech: 'Ah, sim, agora que o(a) senhor(a) falou, tenho ido mais ao banheiro urinar, parece que a bexiga não esvazia direito.' },
        { trigger: 'Sobre antecedentes ginecológicos', speech: 'Tive dois filhos, os dois de parto normal, sem complicações. Nunca fiz cirurgia no útero.' },
        { trigger: 'Sobre desejo reprodutivo', speech: 'Não, doutor(a), não pretendo ter mais filhos. Já fiz minha família.' },
        { trigger: 'Pergunta ativa — diagnóstico', speech: 'Doutor(a), o que eu tenho? Isso pode ser câncer?' }
      ],
      hiddenInfo: 'Refere episódios de tontura ao levantar rapidamente nas últimas semanas — só revela se perguntada sobre sintomas de anemia | Já teve um exame de ultrassom pélvico há 2 anos que mostrou "um cisto pequeno", mas não trouxe o laudo — só revela se perguntada sobre exames de imagem prévios | Tem medo de precisar fazer histerectomia e perder a feminilidade — só revela se o candidato perguntar sobre expectativas/preocupações | Não usa método contraceptivo hormonal atualmente, laqueou trompas no 2º parto — só revela se perguntada sobre anticoncepção',
      actorBehavior: 'Demonstrar cansaço físico visível (fala mais devagar, evita esforço). Ansiosa com a possibilidade de câncer — repetir a pergunta sobre isso se não for respondida claramente. Colaborativa ao exame físico, mas pedir para o(a) candidato(a) explicar antes de tocar.'
    },

    instC: {
      diagnosis: 'Sangramento uterino anormal (menorragia) secundário a miomatose uterina (leiomioma submucoso), com anemia ferropriva associada.',
      differentials: [
        'Adenomiose — entra pelo sangramento aumentado e dismenorreia progressiva, mas o útero costuma ser difusamente aumentado e globoso (não nodular) à USG; sai porque a imagem mostra nódulos bem delimitados, mais compatível com mioma.',
        'Pólipo endometrial — entra como causa de SUA, mas geralmente causa sangramento intermenstrual/spotting mais do que menorragia volumosa; sai pela imagem de USG mostrando nódulos miometriais e não lesão polipoide endometrial isolada.',
        'Hiperplasia endometrial / neoplasia endometrial — entra pela idade (>40 anos) e deve sempre ser excluída em SUA; sai pela ausência de fatores de risco adicionais e pela imagem sugestiva de leiomioma, mas deve-se considerar biópsia endometrial se houver fatores de risco.',
        'Coagulopatia (ex.: Doença de von Willebrand) — entra por causar sangramento menstrual intenso; sai pelo coagulograma normal e pela presença de achado estrutural (miomas) que já explica o quadro.',
        'Gestação ectópica/abortamento — entra pela possibilidade de sangramento genital em mulher em idade fértil; sai pelo beta-hCG negativo.'
      ],
      context: 'A miomatose uterina é o tumor benigno mais comum do trato genital feminino, acometendo até 70% das mulheres até os 50 anos, sendo mais prevalente em mulheres negras e após os 35 anos. Miomas submucosos, mesmo pequenos, têm maior impacto sobre o sangramento por distorcerem a cavidade endometrial. A paciente do caso, aos 42 anos, apresenta quadro clássico de sangramento uterino anormal (SUA) do tipo menorragia, com repercussão hematológica (anemia ferropriva) e impacto significativo na qualidade de vida.',
      justify: 'O diagnóstico de miomatose uterina como causa do SUA é sustentado pelo achado de útero aumentado e de contornos irregulares/nodulares ao exame físico, confirmado pela ultrassonografia transvaginal (nódulos miometriais bem delimitados, incluindo um componente submucoso), associado à anemia ferropriva compatível com perda sanguínea crônica, e pela exclusão de gestação (beta-hCG negativo) e de coagulopatia (coagulograma normal).',
      expectedAnamnesis: 'Caracterização do sangramento (quantidade, duração, frequência, presença de coágulos) | Tempo de evolução e progressão dos sintomas | Impacto na qualidade de vida e absenteísmo | Sintomas de anemia (fadiga, tontura, dispneia aos esforços) | Sintomas compressivos (urinários, intestinais) | Antecedentes obstétricos e ginecológicos (paridade, cirurgias uterinas) | Desejo reprodutivo futuro | Uso de anticoagulantes ou medicações que alterem coagulação | História familiar de miomas ou câncer ginecológico | Data da última citologia oncótica (Papanicolau)',
      expectedPhysical: 'Palpação abdominal identificando massa/aumento de volume em hipogástrio | Exame especular avaliando origem do sangramento e aspecto do colo | Toque vaginal bimanual avaliando tamanho, contorno, mobilidade e sensibilidade uterina | Avaliação de sinais de anemia (palidez de mucosas, conjuntivas)',
      expectedExams: [
        { exam: 'Hemograma completo', justify: 'Avaliar repercussão hematológica do sangramento crônico', expected: 'Anemia microcítica/hipocrômica compatível com perda crônica de ferro' },
        { exam: 'Beta-hCG sérico', justify: 'Excluir gestação como causa de sangramento genital', expected: 'Negativo' },
        { exam: 'Ultrassonografia transvaginal', justify: 'Exame de primeira linha para avaliar estrutura uterina e identificar miomas, pólipos e espessura endometrial', expected: 'Útero aumentado com nódulos miometriais bem delimitados (miomas), possível componente submucoso' },
        { exam: 'Ferritina sérica', justify: 'Confirmar depleção de estoques de ferro na anemia ferropriva', expected: 'Reduzida' },
        { exam: 'Coagulograma', justify: 'Excluir distúrbio de coagulação como causa do sangramento excessivo, especialmente em adolescentes ou quando não há causa estrutural evidente', expected: 'Normal' },
        { exam: 'Citologia oncótica (Papanicolau)', justify: 'Rastreamento de câncer de colo do útero, deve estar atualizado em toda consulta ginecológica', expected: 'Resultado normal, sem atipias' }
      ],
      expectedConduct: 'Farmacológica: reposição de ferro (sulfato ferroso ou similar) para tratar a anemia ferropriva; considerar ácido tranexâmico ou anti-inflamatórios não esteroidais durante o fluxo menstrual para reduzir o volume de sangramento; discutir uso de sistema intrauterino liberador de levonorgestrel (SIU-LNG) como opção de primeira linha para controle do sangramento em miomas que não distorcem gravemente a cavidade | Não farmacológica: encaminhamento ao ginecologista para avaliação de tratamento cirúrgico (miomectomia histeroscópica, já que o mioma é submucoso e a paciente não deseja mais gestações — histerectomia também pode ser discutida como opção definitiva); considerar embolização de artérias uterinas como alternativa não cirúrgica | Orientações ao paciente: explicar a natureza benigna dos miomas, tranquilizando quanto ao medo de câncer; explicar as opções terapêuticas disponíveis (clínica x cirúrgica) e seus riscos/benefícios; orientar retorno caso surjam sinais de alarme (sangramento muito volumoso, tontura importante, síncope)',
      expectedCommunication: 'Apresentar-se pelo nome e função | Perguntar como a paciente prefere ser chamada | Utilizar linguagem acessível, evitando jargões médicos | Validar o impacto do sintoma na vida da paciente | Abordar ativamente e com empatia o medo de câncer expresso pela paciente | Verificar compreensão das informações fornecidas | Esclarecer todas as dúvidas antes de encerrar a consulta',
      criticalErrors: [
        'Não solicitar beta-hCG antes de qualquer conduta em mulher em idade fértil com sangramento vaginal',
        'Não investigar repercussão hematológica (não solicitar hemograma) em paciente com sangramento volumoso e sintomas de anemia',
        'Afirmar categoricamente que "é câncer" ou, no outro extremo, ignorar a preocupação da paciente sem esclarecer',
        'Não considerar exclusão de gestação e coagulopatia antes de firmar o diagnóstico de causa estrutural',
        'Prescrever tratamento hormonal sem avaliar antecedentes (ex.: estrogênios em paciente com fatores de risco tromboembólico) sem investigação prévia'
      ]
    },

    instD: {
      title: 'CHECKLIST — SANGRAMENTO MENSTRUAL INTENSO HÁ 6 MESES (MIOMATOSE)',
      sections: [
        {
          h: 'BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE',
          items: [
            { item: 'Apresentou-se pelo nome à paciente', score: 0.5, ref: 'CFM Res. 2.217/2018' },
            { item: 'Abordou ativamente e com empatia o medo de câncer expresso pela paciente', score: 1.0, ref: 'FEBRASGO' }
          ]
        },
        {
          h: 'BLOCO 2 — ANAMNESE',
          items: [
            { item: 'Caracterizou o sangramento (quantidade, duração, coágulos)', score: 0.5, ref: 'FEBRASGO' },
            { item: 'Investigou sintomas de anemia e sintomas compressivos', score: 0.5, ref: 'FEBRASGO' },
            { item: 'Perguntou sobre desejo reprodutivo futuro', score: 0.5, ref: 'FEBRASGO' }
          ]
        },
        {
          h: 'BLOCO 3 — EXAME FÍSICO',
          items: [
            { item: 'Realizou palpação abdominal identificando massa/aumento uterino', score: 0.5, ref: 'FEBRASGO' },
            { item: 'Realizou toque vaginal bimanual avaliando tamanho e contorno uterino', score: 0.5, ref: 'FEBRASGO' }
          ]
        },
        {
          h: 'BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
          items: [
            { item: 'Solicitou beta-hCG antes de qualquer conduta', score: 1.0, ref: 'FEBRASGO' },
            { item: 'Solicitou hemograma e ultrassonografia transvaginal', score: 1.0, ref: 'FEBRASGO' }
          ]
        },
        {
          h: 'BLOCO 5 — CONDUTA E ORIENTAÇÃO AO PACIENTE',
          items: [
            { item: 'Explicou a natureza benigna dos miomas', score: 1.0, ref: 'FEBRASGO' },
            { item: 'Discutiu opções terapêuticas clínicas e cirúrgicas conforme desejo reprodutivo', score: 1.0, ref: 'FEBRASGO' },
            { item: 'Prescreveu reposição de ferro para a anemia', score: 0.5, ref: 'FEBRASGO' }
          ]
        }
      ]
    }
  },

  // CASO 2 — VAGINOSE BACTERIANA
  {
    id: 2,
    title: 'Corrimento vaginal com odor forte há 1 semana',
    sub: 'UBS — Atenção Primária',
    tema: 'Ginecologia',
    topic: 'Vaginose Bacteriana',
    level: 'fácil',
    cardAccent: '#AD1457',

    instA: {
      scenario: 'Consulta de demanda espontânea na UBS, período da tarde.',
      patient: 'Juliana Alves Pereira, 27 anos, sexo feminino, vendedora, nuligesta.',
      complaint: 'Corrimento vaginal com odor forte, principalmente após relações sexuais, há cerca de 1 semana.',
      tasks: [
        'Realize a anamnese dirigida ao caso.',
        'Realize o exame físico ginecológico dirigido.',
        'Formule a hipótese diagnóstica principal e os diferenciais.',
        'Solicite os exames complementares adequados (quando aplicável).',
        'Proponha o tratamento e oriente a paciente.'
      ]
    },

    instB: {
      vitals: {
        PA: '112/74 mmHg',
        FC: '78 bpm',
        FR: '16 irpm',
        Tax: '36,3 °C',
        Peso: '61 kg',
        Altura: '1,65 m',
        IMC: '22,4 kg/m²'
      },
      physicalGeneral: 'Bom estado geral, corada, hidratada, anictérica, afebril.',
      physicalSeg: 'ABDOME: plano, flácido, indolor à palpação, sem massas ou visceromegalias, sem sinais de irritação peritoneal. | EXAME ESPECULAR: paredes vaginais e colo uterino sem sinais de hiperemia importante, presente corrimento vaginal branco-acinzentado, homogêneo, fino, aderido às paredes vaginais, com odor desagradável característico ("odor de peixe"). | TOQUE VAGINAL: útero de tamanho e posição normais, indolor à mobilização, anexos não palpáveis, sem dor à palpação.',
      labs: [
        { test: 'pH vaginal', val: '5,0', ref: '< 4,5', alt: true },
        { test: 'Teste das aminas (whiff test)', val: 'Positivo', ref: 'Negativo', alt: true },
        { test: 'Bacterioscopia de conteúdo vaginal (a fresco)', val: 'Presença de "clue cells" (células-alvo), ausência de aumento de leucócitos', ref: 'Ausência de clue cells', alt: true },
        { test: 'Beta-hCG', val: 'Negativo', ref: 'Negativo', alt: false }
      ],
      note: 'A bacterioscopia e o whiff test só devem ser entregues se o candidato solicitar exame especular com coleta de conteúdo vaginal e testes complementares (pH, KOH). Se o candidato não realizar a coleta, informar apenas o achado visual do corrimento ao exame especular.',
      patientProfile: 'Vendedora em loja de roupas, união estável há 2 anos, parceiro fixo. Fazia uso ocasional de duchas vaginais até alguns meses atrás. Tabagista (5 cigarros/dia). Não deseja gestar no momento, usa preservativo de forma inconsistente.',
      script: [
        { trigger: 'Queixa principal', speech: 'Doutor(a), estou com um corrimento diferente, meio acinzentado, e um cheiro muito forte, tipo cheiro de peixe, principalmente depois que transo.' },
        { trigger: 'Sobre características do corrimento', speech: 'É um corrimento fino, não é grosso tipo nata, e não sinto muita coceira, só esse cheiro que está me incomodando muito.' },
        { trigger: 'Sobre coceira/ardor', speech: 'Não sinto muita coceira, não. Às vezes um leve incômodo, mas o que mais me incomoda é o cheiro mesmo.' },
        { trigger: 'Sobre vida sexual', speech: 'Tenho um parceiro fixo há 2 anos, moramos juntos. Às vezes usamos camisinha, às vezes não, porque ele não gosta muito.' },
        { trigger: 'Sobre higiene íntima', speech: 'Eu costumava fazer ducha vaginal umas duas vezes por semana até uns meses atrás, mas parei porque uma amiga falou que não fazia bem.' },
        { trigger: 'Sobre sintomas urinários', speech: 'Não, não sinto dor nem ardência para urinar.' },
        { trigger: 'Sobre dor pélvica/febre', speech: 'Não tenho dor na barriga nem febre, doutor(a), só esse corrimento e o cheiro mesmo.' },
        { trigger: 'Pergunta ativa — diagnóstico', speech: 'Isso pode ser alguma DST, doutor(a)? Fiquei preocupada.' }
      ],
      hiddenInfo: 'Já teve um episódio parecido há cerca de 1 ano, que melhorou sozinho sem tratamento — só revela se perguntada sobre episódios anteriores | O parceiro nunca apresentou sintomas — só revela se perguntada sobre sintomas no parceiro | Tem receio de que o corrimento seja sinal de traição do parceiro, pois associa "cheiro forte" a infecção sexualmente transmissível — só revela se o candidato explorar o aspecto emocional/preocupações | Não está em uso de nenhum anticoncepcional hormonal no momento — só revela se perguntada sobre método contraceptivo',
      actorBehavior: 'Levemente constrangida ao falar sobre o odor, fala em voz mais baixa nesse trecho. Preocupada com a possibilidade de ser uma IST, pode repetir a pergunta se não for esclarecida. Colaborativa durante o exame físico.'
    },

    instC: {
      diagnosis: 'Vaginose bacteriana, caracterizada pelo desequilíbrio da microbiota vaginal com redução de lactobacilos e crescimento excessivo de bactérias anaeróbias (como Gardnerella vaginalis).',
      differentials: [
        'Candidíase vulvovaginal — entra pelo corrimento vaginal como queixa comum; sai pela ausência de prurido intenso, pelo aspecto do corrimento (não é grumoso/"leite coalhado") e pH vaginal normalmente < 4,5 na candidíase.',
        'Tricomoníase — entra por também cursar com corrimento de odor fétido; sai pela ausência de corrimento amarelo-esverdeado espumoso e de sinais inflamatórios importantes (colo em "framboesa"), exigindo diferenciação pela bacterioscopia (protozoário móvel).',
        'Cervicite por Chlamydia/Gonococo — entra pelo risco de IST em paciente sexualmente ativa; sai pela ausência de dor pélvica, sangramento intermenstrual ou colo hiperemiado friável, embora rastreio deva ser considerado conforme risco.',
        'Vaginite atrófica — entra em mulheres em hipoestrogenismo; sai pela idade da paciente (27 anos, sem fatores de hipoestrogenismo) e características do corrimento não compatíveis.'
      ],
      context: 'A vaginose bacteriana é a causa mais comum de corrimento vaginal em mulheres em idade reprodutiva, decorrente da substituição da microbiota vaginal normal (rica em lactobacilos produtores de peróxido de hidrogênio) por bactérias anaeróbias. Não é classicamente considerada uma infecção sexualmente transmissível, mas está associada à atividade sexual e a práticas de higiene íntima como duchas vaginais, como observado nesta paciente.',
      justify: 'O diagnóstico é firmado pelos critérios de Amsel, sendo necessários pelo menos 3 dos 4 critérios: (1) corrimento vaginal homogêneo acinzentado; (2) pH vaginal > 4,5; (3) teste das aminas (whiff test) positivo; (4) presença de clue cells na bacterioscopia. A paciente preenche os quatro critérios.',
      expectedAnamnesis: 'Características do corrimento (cor, consistência, odor) | Presença de prurido, ardor ou dor | Relação temporal com atividade sexual | Uso de duchas vaginais ou produtos de higiene íntima | História sexual (parceiros, uso de preservativo) | Sintomas urinários associados | Sinais de alarme para IST/DIP (dor pélvica, febre, sangramento anormal) | Antecedentes de episódios semelhantes',
      expectedPhysical: 'Exame especular com avaliação do aspecto do corrimento e das paredes vaginais/colo | Coleta de conteúdo vaginal para pH e whiff test | Toque vaginal bimanual para excluir dor à mobilização do colo e massas anexiais (afastar DIP)',
      expectedExams: [
        { exam: 'pH vaginal', justify: 'Auxilia no diagnóstico diferencial das vaginites/vaginoses (critério de Amsel)', expected: 'Elevado (> 4,5) na vaginose bacteriana' },
        { exam: 'Teste das aminas (whiff test com KOH 10%)', justify: 'Critério diagnóstico de Amsel para vaginose bacteriana', expected: 'Positivo (odor de peixe/amina)' },
        { exam: 'Bacterioscopia/exame a fresco do conteúdo vaginal', justify: 'Identificar clue cells e excluir Trichomonas e leveduras', expected: 'Presença de clue cells, ausência de hifas/leveduras e de protozoários móveis' }
      ],
      expectedConduct: 'Farmacológica: metronidazol 500 mg via oral 12/12h por 7 dias, ou metronidazol gel vaginal 0,75% por 5 dias, como primeira linha | Não farmacológica: orientar suspensão de duchas vaginais e produtos de higiene íntima agressivos | Orientações ao paciente: explicar que não se trata de uma IST clássica, tranquilizando quanto ao medo de infidelidade/DST; orientar que não é necessário tratar o parceiro rotineiramente; orientar retorno caso os sintomas persistam ou recorram; reforçar uso de preservativo como proteção geral contra ISTs',
      expectedCommunication: 'Apresentar-se e criar ambiente de confiança para abordar tema sensível | Perguntar de forma não julgadora sobre práticas de higiene e vida sexual | Acolher a preocupação sobre possível IST e esclarecer com informação baseada em evidências | Verificar compreensão do diagnóstico e tratamento | Encorajar perguntas antes de encerrar',
      criticalErrors: [
        'Prescrever tratamento sem confirmar critérios diagnósticos mínimos, tratando empiricamente sem exame especular/coleta',
        'Afirmar categoricamente que se trata de uma IST sem base diagnóstica',
        'Não afastar sinais de alarme para DIP (dor pélvica, febre, dor à mobilização do colo) antes de definir conduta ambulatorial simples',
        'Orientar tratamento rotineiro do parceiro, o que não é recomendado na vaginose bacteriana não complicada',
        'Não orientar suspensão de duchas vaginais como medida de prevenção de recorrência'
      ]
    },

    instD: {
      title: 'CHECKLIST — CORRIMENTO VAGINAL COM ODOR FORTE (VAGINOSE BACTERIANA)',
      sections: [
        {
          h: 'BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE',
          items: [
            { item: 'Conduziu a anamnese sobre higiene e vida sexual sem julgamento', score: 0.5, ref: 'Ministério da Saúde — PCDT IST' },
            { item: 'Esclareceu que não se trata de uma IST clássica, aliviando a preocupação da paciente', score: 1.0, ref: 'Ministério da Saúde — PCDT IST' }
          ]
        },
        {
          h: 'BLOCO 2 — ANAMNESE',
          items: [
            { item: 'Caracterizou o corrimento (cor, odor, relação com o coito)', score: 0.5, ref: 'Ministério da Saúde — PCDT IST' },
            { item: 'Investigou uso de duchas vaginais e produtos de higiene íntima', score: 0.5, ref: 'FEBRASGO' }
          ]
        },
        {
          h: 'BLOCO 3 — EXAME FÍSICO',
          items: [
            { item: 'Realizou exame especular com coleta de conteúdo vaginal', score: 1.0, ref: 'Ministério da Saúde — PCDT IST' },
            { item: 'Realizou toque vaginal para excluir dor à mobilização do colo (afastar DIP)', score: 0.5, ref: 'Ministério da Saúde — PCDT IST' }
          ]
        },
        {
          h: 'BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
          items: [
            { item: 'Aplicou os critérios de Amsel (pH, whiff test, clue cells)', score: 1.5, ref: 'Ministério da Saúde — PCDT IST' }
          ]
        },
        {
          h: 'BLOCO 5 — CONDUTA E ORIENTAÇÃO AO PACIENTE',
          items: [
            { item: 'Prescreveu metronidazol na dose e via corretas', score: 1.0, ref: 'Ministério da Saúde — PCDT IST' },
            { item: 'Orientou suspensão de duchas vaginais', score: 0.5, ref: 'FEBRASGO' },
            { item: 'NÃO orientou tratamento rotineiro do parceiro', score: 1.0, ref: 'Ministério da Saúde — PCDT IST' }
          ]
        }
      ]
    }
  },

  // CASO 3 — DOENÇA INFLAMATÓRIA PÉLVICA
  {
    id: 3,
    title: 'Dor pélvica intensa e febre há 3 dias',
    sub: 'PS — Pronto-Socorro',
    tema: 'Ginecologia',
    topic: 'Doença Inflamatória Pélvica',
    level: 'difícil',
    cardAccent: '#AD1457',

    instA: {
      scenario: 'Atendimento no Pronto-Socorro, período noturno, paciente chega caminhando com auxílio, referindo dor importante.',
      patient: 'Camila Rodrigues Santos, 24 anos, sexo feminino, estudante universitária, nuligesta.',
      complaint: 'Dor pélvica intensa há 3 dias, associada a febre e corrimento vaginal com odor.',
      tasks: [
        'Realize a anamnese dirigida ao caso.',
        'Realize o exame físico geral, abdominal e ginecológico dirigido.',
        'Formule a hipótese diagnóstica principal e os diferenciais.',
        'Solicite os exames complementares adequados.',
        'Proponha a conduta terapêutica e explique a necessidade (ou não) de internação.'
      ]
    },

    instB: {
      vitals: {
        PA: '100/64 mmHg',
        FC: '112 bpm',
        FR: '22 irpm',
        Tax: '38,6 °C',
        Peso: '58 kg',
        Altura: '1,60 m',
        IMC: '22,7 kg/m²',
        SpO2: '97%'
      },
      physicalGeneral: 'Regular estado geral, fácies de dor, corada, hidratada, taquicárdica, febril, sudorese leve.',
      physicalSeg: 'ABDOME: plano, doloroso à palpação profunda em hipogástrio e fossas ilíacas bilateralmente (mais intenso à direita), com sinais de irritação peritoneal discretos (descompressão brusca duvidosa), ruídos hidroaéreos presentes. | EXAME ESPECULAR: colo uterino hiperemiado, friável ao toque da espátula, presença de secreção mucopurulenta saindo do orifício externo do colo. | TOQUE VAGINAL: dor importante à mobilização do colo uterino (sinal de Chandelier positivo), útero de tamanho normal, doloroso à palpação, dor à palpação de anexos bilateralmente, sem massa anexial bem definida palpável.',
      labs: [
        { test: 'Leucócitos', val: '15.800/mm³', ref: '4.000 – 11.000/mm³', alt: true },
        { test: 'Proteína C reativa (PCR)', val: '96 mg/L', ref: '< 5 mg/L', alt: true },
        { test: 'Beta-hCG', val: 'Negativo', ref: 'Negativo', alt: false },
        { test: 'Velocidade de Hemossedimentação (VHS)', val: '52 mm/h', ref: '< 20 mm/h', alt: true },
        { test: 'Urina tipo I (EAS)', val: 'Sem alterações significativas', ref: 'Normal', alt: false },
        { test: 'NAAT endocervical (Chlamydia trachomatis / Neisseria gonorrhoeae)', val: 'Chlamydia trachomatis: positivo | Neisseria gonorrhoeae: negativo', ref: 'Negativo para ambos', alt: true }
      ],
      image: 'Ultrassonografia transvaginal: útero em posição habitual, sem alterações relevantes; presença de líquido livre em fundo de saco de Douglas em pequena quantidade; trompa direita com paredes espessadas e conteúdo líquido, sugestiva de salpingite; ovários com aspecto preservado, sem formação de abscesso tubo-ovariano evidente no momento.',
      note: 'O NAAT para Chlamydia/gonococo demora para ficar pronto — informar ao candidato que o resultado "ainda está sendo processado" se perguntado antes da coleta de swab endocervical ser mencionada; entregar o resultado apenas ao final, após a conduta inicial já ter sido definida, simulando o tempo real de liberação do exame.',
      patientProfile: 'Estudante de administração, mora com colegas de faculdade, tem parceiro sexual novo há cerca de 2 meses, relata não uso consistente de preservativo. Nunca teve doença inflamatória pélvica antes. Refere episódio de corrimento vaginal amarelado há cerca de 10 dias que não valorizou.',
      script: [
        { trigger: 'Queixa principal', speech: 'Doutor(a), estou com uma dor muito forte na parte baixa da barriga há uns 3 dias, e hoje comecei com febre. Está insuportável.' },
        { trigger: 'Sobre características da dor', speech: 'É uma dor tipo cólica, mas constante, dos dois lados, às vezes mais forte do lado direito. Piora quando eu me mexo ou durante o exame que a senhora está fazendo.' },
        { trigger: 'Sobre corrimento', speech: 'Há uns 10 dias eu notei um corrimento amarelado, mas achei que fosse coisa normal e não dei muita importância.' },
        { trigger: 'Sobre febre/calafrios', speech: 'Sim, estou com febre desde ontem à noite, cheguei a medir 38,5°C em casa, e tive um calafrio forte.' },
        { trigger: 'Sobre vida sexual', speech: 'Tenho um namorado novo, estamos juntos há uns 2 meses. Às vezes usamos camisinha, mas nem sempre, para ser sincera.' },
        { trigger: 'Sobre sintomas urinários', speech: 'Não sinto ardência para urinar, não. A dor é mais na barriga mesmo.' },
        { trigger: 'Sobre última menstruação', speech: 'Minha última menstruação foi há 2 semanas, veio normal.' },
        { trigger: 'Sobre náuseas/vômitos', speech: 'Sim, cheguei a vomitar duas vezes hoje de manhã, acho que é por causa da dor e da febre.' },
        { trigger: 'Pergunta ativa — diagnóstico', speech: 'Doutor(a), isso é grave? Vou precisar ficar internada? Isso pode afetar minha fertilidade no futuro?' }
      ],
      hiddenInfo: 'O parceiro atual relatou "um leve ardor" ao urinar na semana passada, mas não procurou atendimento — só revela se perguntada especificamente sobre sintomas no parceiro | Já usou DIU de cobre por 6 meses, removido há 3 meses por sangramento aumentado — só revela se perguntada sobre método contraceptivo atual/prévio | Tem muito medo de infertilidade, pois uma prima teve o mesmo quadro e não conseguiu engravidar depois — só revela se o candidato perguntar sobre preocupações ou explorar aspecto emocional | Não tem histórico de ISTs prévias confirmadas — só revela se perguntada diretamente',
      actorBehavior: 'Postura de dor evidente (mão sobre o abdome, expressão de desconforto, geme discretamente ao exame). Ansiosa e com medo do prognóstico, principalmente sobre fertilidade — repetir a pergunta se não for abordada. Cooperativa mas pede pausas durante o exame físico por dor.'
    },

    instC: {
      diagnosis: 'Doença Inflamatória Pélvica (DIP) aguda, provavelmente por Chlamydia trachomatis, com salpingite associada, sem evidência de abscesso tubo-ovariano no momento.',
      differentials: [
        'Apendicite aguda — entra pela dor em fossa ilíaca direita e sinais de irritação peritoneal; sai pela presença de corrimento cervical purulento, dor bilateral à mobilização do colo (Chandelier positivo) e achados de imagem sugestivos de salpingite, além do contexto de risco para IST.',
        'Gestação ectópica — entra como diagnóstico obrigatório a excluir em mulher em idade fértil com dor pélvica; sai pelo beta-hCG negativo.',
        'Cisto ovariano roto/torção anexial — entra pela dor pélvica aguda; sai pela ausência de massa anexial bem definida na USG e pela presença de febre e leucocitose com quadro infeccioso mais compatível com DIP do que com evento agudo mecânico.',
        'Infecção do trato urinário / pielonefrite — entra pela dor pélvica/abdominal com febre; sai pela ausência de sintomas urinários (disúria, polaciúria) e por urina tipo I sem alterações significativas.',
        'Endometriose com dor pélvica aguda — entra pela dor pélvica recorrente; sai pela ausência de história crônica compatível e pela presença de sinais infecciosos agudos (febre, leucocitose, PCR elevada) não característicos de endometriose isolada.'
      ],
      context: 'A DIP é uma infecção polimicrobiana do trato genital superior feminino (endométrio, trompas, ovários e estruturas adjacentes), frequentemente associada a ISTs como Chlamydia trachomatis e Neisseria gonorrhoeae, mais comum em mulheres jovens sexualmente ativas com múltiplos parceiros ou parceiro novo e uso inconsistente de preservativo, como no caso desta paciente de 24 anos.',
      justify: 'O diagnóstico de DIP é clínico e se sustenta pelos critérios mínimos: dor à palpação do hipogástrio/anexos e dor à mobilização do colo uterino (Chandelier positivo), associados a febre, leucocitose, PCR/VHS elevados e corrimento cervical mucopurulento, corroborado pela imagem sugestiva de salpingite e pela positividade do NAAT para Chlamydia trachomatis.',
      expectedAnamnesis: 'Caracterização da dor pélvica (início, localização, irradiação, fatores de piora) | Presença de febre, calafrios, náuseas/vômitos | Características de corrimento vaginal recente | História sexual (número de parceiros, parceiro novo, uso de preservativo) | Uso de DIU ou outros procedimentos ginecológicos recentes | Data da última menstruação | Antecedente de ISTs prévias | Sintomas urinários e gastrointestinais para diagnóstico diferencial',
      expectedPhysical: 'Avaliação de sinais vitais (febre, taquicardia) | Palpação abdominal buscando dor e sinais de irritação peritoneal | Exame especular avaliando corrimento cervical | Toque vaginal bimanual avaliando dor à mobilização do colo (Chandelier) e dor anexial',
      expectedExams: [
        { exam: 'Hemograma completo', justify: 'Avaliar leucocitose como marcador de processo infeccioso/inflamatório', expected: 'Leucocitose com desvio à esquerda' },
        { exam: 'PCR e/ou VHS', justify: 'Marcadores inflamatórios auxiliam no diagnóstico e no acompanhamento da resposta terapêutica', expected: 'Elevados' },
        { exam: 'Beta-hCG', justify: 'Excluir gestação ectópica, diagnóstico diferencial obrigatório em dor pélvica aguda', expected: 'Negativo' },
        { exam: 'Ultrassonografia transvaginal ou pélvica', justify: 'Avaliar presença de líquido livre, espessamento tubário ou formação de abscesso tubo-ovariano', expected: 'Espessamento/líquido tubário sugestivo de salpingite, sem abscesso no momento' },
        { exam: 'NAAT endocervical (Chlamydia trachomatis / Neisseria gonorrhoeae)', justify: 'Identificar agente etiológico e orientar tratamento e rastreio de contactantes', expected: 'Positivo para um ou ambos os patógenos' },
        { exam: 'Sorologias para outras ISTs (HIV, sífilis, hepatites B e C)', justify: 'Rastreio obrigatório em toda paciente com diagnóstico de IST/DIP', expected: 'A depender do resultado; solicitar sempre' }
      ],
      expectedConduct: 'Farmacológica: iniciar antibioticoterapia empírica de amplo espectro cobrindo N. gonorrhoeae, C. trachomatis e anaeróbios — esquema como ceftriaxona intramuscular associada a doxiciclina oral por 14 dias, podendo associar metronidazol; analgesia e antitérmico para controle sintomático | Não farmacológica: avaliar critérios de internação hospitalar (dúvida diagnóstica com abdome cirúrgico, gestante, falha de tratamento ambulatorial, intolerância oral, doença grave/sepse, presença de abscesso tubo-ovariano) — nesta paciente, sem esses critérios presentes, tratamento ambulatorial é factível com reavaliação em 72h; orientar abstinência sexual até conclusão do tratamento | Orientações ao paciente: explicar a importância de tratar o(a) parceiro(a) sexual; orientar sobre risco de sequelas (infertilidade, dor pélvica crônica, gravidez ectópica futura) sem gerar pânico, reforçando que o tratamento precoce reduz esse risco; orientar retorno imediato se piora dos sintomas',
      expectedCommunication: 'Apresentar-se e agir com agilidade adequada à gravidade do quadro | Comunicar o diagnóstico de forma clara e empática, sem alarmismo | Abordar diretamente a preocupação da paciente sobre fertilidade, com informação realista e acolhedora | Orientar sobre necessidade de tratamento do parceiro sem julgamento | Verificar compreensão do plano terapêutico e critérios de retorno',
      criticalErrors: [
        'Não excluir gestação ectópica (não solicitar beta-hCG) em paciente em idade fértil com dor pélvica aguda',
        'Não reconhecer sinais de gravidade que indicariam necessidade de internação (ex.: sinais de abscesso tubo-ovariano, sepse)',
        'Iniciar antibioticoterapia que não cubra adequadamente Chlamydia e gonococo (ex.: usar apenas metronidazol isolado)',
        'Não orientar tratamento do parceiro sexual, perpetuando o ciclo de reinfecção',
        'Não orientar sobre risco de sequelas reprodutivas nem fornecer suporte diante da ansiedade da paciente'
      ]
    },

    instD: {
      title: 'CHECKLIST — DOR PÉLVICA INTENSA E FEBRE (DOENÇA INFLAMATÓRIA PÉLVICA)',
      sections: [
        {
          h: 'BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE',
          items: [
            { item: 'Agiu com agilidade compatível com a gravidade do quadro', score: 0.5, ref: 'Ministério da Saúde — PCDT IST' },
            { item: 'Abordou a preocupação da paciente sobre fertilidade com informação realista', score: 1.0, ref: 'FEBRASGO' }
          ]
        },
        {
          h: 'BLOCO 2 — ANAMNESE',
          items: [
            { item: 'Investigou corrimento cervical recente e história sexual', score: 0.5, ref: 'Ministério da Saúde — PCDT IST' },
            { item: 'Investigou uso de DIU e data da última menstruação', score: 0.5, ref: 'Ministério da Saúde — PCDT IST' }
          ]
        },
        {
          h: 'BLOCO 3 — EXAME FÍSICO',
          items: [
            { item: 'Realizou toque vaginal identificando dor à mobilização do colo (sinal de Chandelier)', score: 1.5, ref: 'CDC / Ministério da Saúde' },
            { item: 'Realizou exame especular avaliando corrimento cervical', score: 0.5, ref: 'Ministério da Saúde — PCDT IST' }
          ]
        },
        {
          h: 'BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
          items: [
            { item: 'Solicitou beta-hCG para excluir gestação ectópica', score: 1.0, ref: 'Ministério da Saúde — PCDT IST' },
            { item: 'Solicitou hemograma, PCR e USG transvaginal (rastreio de abscesso)', score: 0.5, ref: 'FEBRASGO' }
          ]
        },
        {
          h: 'BLOCO 5 — CONDUTA',
          items: [
            { item: 'Prescreveu antibioticoterapia cobrindo gonococo, clamídia e anaeróbios', score: 1.5, ref: 'Ministério da Saúde — PCDT IST' },
            { item: 'Orientou tratamento do(s) parceiro(s) sexual(is)', score: 1.0, ref: 'Ministério da Saúde — PCDT IST' }
          ]
        }
      ]
    }
  },

  // CASO 4 — SÍNDROME DOS OVÁRIOS POLICÍSTICOS
  {
    id: 4,
    title: 'Ciclos menstruais irregulares e acne há 2 anos',
    sub: 'UBS — Atenção Primária',
    tema: 'Ginecologia',
    topic: 'Síndrome dos Ovários Policísticos',
    level: 'moderado',
    cardAccent: '#AD1457',

    instA: {
      scenario: 'Consulta agendada na UBS, paciente acompanhada pela mãe na sala de espera (mas atendida sozinha).',
      patient: 'Beatriz Souza Nascimento, 19 anos, sexo feminino, estudante universitária, nuligesta.',
      complaint: 'Ciclos menstruais irregulares há cerca de 2 anos, associados a acne e aumento de pelos no rosto.',
      tasks: [
        'Realize a anamnese dirigida ao caso.',
        'Realize o exame físico geral e ginecológico dirigido.',
        'Formule a hipótese diagnóstica principal e os diferenciais.',
        'Solicite os exames complementares adequados.',
        'Proponha o tratamento e oriente a paciente.'
      ]
    },

    instB: {
      vitals: {
        PA: '118/76 mmHg',
        FC: '80 bpm',
        FR: '16 irpm',
        Tax: '36,4 °C',
        Peso: '78 kg',
        Altura: '1,63 m',
        IMC: '29,4 kg/m²'
      },
      physicalGeneral: 'Bom estado geral, corada, hidratada, acne facial moderada em região de mandíbula e queixo, presença de pelos terminais em região de buço e queixo (hirsutismo).',
      physicalSeg: 'PELE: acantose nigricans em região cervical posterior e axilas (hiperpigmentação aveludada). | ABDOME: globoso, indolor, sem massas palpáveis. | EXAME GINECOLÓGICO: genitália externa de aspecto normal, sem clitoromegalia; ao toque vaginal, útero de tamanho normal, anexos discretamente aumentados de volume bilateralmente, indolores.',
      labs: [
        { test: 'Testosterona total', val: '78 ng/dL', ref: '15 – 70 ng/dL', alt: true },
        { test: 'LH', val: '14 mUI/mL', ref: '2 – 12 mUI/mL (fase folicular)', alt: true },
        { test: 'FSH', val: '5 mUI/mL', ref: '3 – 10 mUI/mL (fase folicular)', alt: false },
        { test: 'Relação LH/FSH', val: '2,8', ref: '< 2', alt: true },
        { test: 'TSH', val: '2,0 mUI/L', ref: '0,4 – 4,0 mUI/L', alt: false },
        { test: 'Prolactina', val: '18 ng/mL', ref: '4,8 – 23,3 ng/mL', alt: false },
        { test: 'Glicemia de jejum', val: '104 mg/dL', ref: '70 – 99 mg/dL', alt: true },
        { test: 'Insulina de jejum', val: '22 µUI/mL', ref: 'Elevada no contexto clínico de resistência insulínica', alt: true },
        { test: '17-OH-progesterona', val: '1,2 ng/mL', ref: '< 2 ng/mL', alt: false }
      ],
      image: 'Ultrassonografia pélvica transvaginal: ovários com volume aumentado (>10 mL) bilateralmente, apresentando 14 e 16 folículos subcentimétricos (2–9 mm) dispostos perifericamente em cada ovário, padrão sugestivo de morfologia policística.',
      note: 'A ultrassonografia só deve ser entregue se o candidato justificar corretamente sua indicação (avaliação de morfologia ovariana), não solicitar de forma automática sem raciocínio clínico. Os exames laboratoriais hormonais devem ser entregues conforme forem sendo solicitados nominalmente.',
      patientProfile: 'Estudante de engenharia, solteira, sem vida sexual ativa no momento. Preocupada com a aparência devido à acne e aos pelos faciais, o que afeta sua autoestima. Refere ganho de peso progressivo nos últimos 2 anos, sem conseguir emagrecer apesar de tentativas com dieta. Mãe tem diabetes tipo 2.',
      script: [
        { trigger: 'Queixa principal', speech: 'Doutor(a), minha menstruação vem muito irregular, às vezes demora 2 ou 3 meses para vir, e também estou com muita espinha e pelos no rosto que me incomodam muito.' },
        { trigger: 'Sobre ciclo menstrual', speech: 'Desde os 17 anos minha menstruação nunca foi muito regular, mas piorou nos últimos 2 anos. Às vezes fico 60, 70 dias sem menstruar.' },
        { trigger: 'Sobre pelos/acne', speech: 'Comecei a notar mais pelos no queixo e no bigode há uns 2 anos, e tenho que arrancar toda semana. A acne também piorou muito, principalmente no queixo.' },
        { trigger: 'Sobre peso', speech: 'Eu ganhei bastante peso nesse período, mesmo tentando fazer dieta não consigo emagrecer como antes.' },
        { trigger: 'Sobre vida sexual/gestação', speech: 'Não tenho vida sexual ativa no momento, meu último namoro terminou há 1 ano.' },
        { trigger: 'Sobre história familiar', speech: 'Minha mãe tem diabetes tipo 2, começou a tomar remédio há uns 5 anos.' },
        { trigger: 'Sobre autoestima/impacto emocional', speech: 'Isso mexe muito comigo, sabe? Às vezes evito sair porque fico com vergonha da espinha e dos pelos.' },
        { trigger: 'Pergunta ativa — diagnóstico', speech: 'Doutor(a), o que eu tenho? Isso vai afetar minha capacidade de engravidar no futuro?' }
      ],
      hiddenInfo: 'Nota manchas escuras na pele do pescoço e nas axilas há alguns meses, mas achou que fosse "sujeira" e não conseguia tirar esfregando — só revela se perguntada especificamente sobre alterações de pele | Tem episódios de sonolência excessiva durante o dia e ronco noturno referido pela colega de quarto — só revela se perguntada sobre sono | Já tentou usar cremes clareadores e depilação a laser para os pelos faciais sem consultar médico antes — só revela se perguntada sobre tratamentos prévios tentados | Tem muito medo de ser infértil no futuro, pois pesquisou na internet sobre a doença — só revela se o candidato perguntar sobre preocupações/expectativas',
      actorBehavior: 'Demonstrar desconforto emocional ao falar sobre acne/pelos (evitar contato visual nesse momento, falar mais baixo). Mostrar alívio quando o candidato aborda o tema com empatia. Ansiosa sobre fertilidade futura — repetir a pergunta se não for respondida.'
    },

    instC: {
      diagnosis: 'Síndrome dos Ovários Policísticos (SOP), fenótipo clássico, associada a resistência insulínica e sobrepeso/obesidade.',
      differentials: [
        'Hiperplasia adrenal congênita não clássica (forma tardia) — entra pelo hirsutismo e irregularidade menstrual; sai pela 17-OH-progesterona normal.',
        'Hiperprolactinemia — entra como causa de irregularidade menstrual; sai pela prolactina dentro da normalidade.',
        'Hipotireoidismo — entra como causa comum de irregularidade menstrual e ganho de peso; sai pelo TSH normal.',
        'Tumor secretor de andrógenos (ovariano ou adrenal) — entra pelo hiperandrogenismo; sai pela testosterona apenas discretamente elevada (tumores costumam causar elevações acentuadas e de início rápido/virilização), além do início insidioso ao longo de anos, não abrupto.',
        'Síndrome de Cushing — entra pelo ganho de peso e alterações cutâneas; sai pela ausência de outros estigmas típicos (estrias violáceas largas, fácies em lua cheia, fraqueza muscular proximal) não descritos no caso.'
      ],
      context: 'A SOP é a endocrinopatia mais comum em mulheres em idade reprodutiva, com prevalência de 8-13%, caracterizada por disfunção ovulatória crônica, hiperandrogenismo clínico ou laboratorial, e frequentemente morfologia ovariana policística à ultrassonografia. Associa-se fortemente a resistência insulínica, obesidade e risco cardiometabólico aumentado, como observado nesta paciente jovem com acantose nigricans e glicemia de jejum limítrofe.',
      justify: 'O diagnóstico de SOP segue os critérios de Rotterdam, exigindo pelo menos 2 dos 3: (1) oligo/anovulação (ciclos irregulares/espaniomenorreia); (2) hiperandrogenismo clínico (hirsutismo, acne) e/ou laboratorial (testosterona elevada); (3) morfologia ovariana policística à ultrassonografia. A paciente preenche os três critérios, após exclusão de outras causas de hiperandrogenismo (hiperplasia adrenal congênita, hiperprolactinemia, disfunção tireoidiana).',
      expectedAnamnesis: 'Caracterização do padrão menstrual desde a menarca | Presença e evolução de hirsutismo e acne | História de ganho de peso e dificuldade de emagrecimento | Sintomas sugestivos de resistência insulínica (acantose nigricans, sonolência) | Desejo reprodutivo atual e futuro | História familiar de diabetes, SOP ou doenças cardiovasculares | Impacto psicológico/autoestima relacionado aos sintomas | Uso prévio de anticoncepcionais ou tratamentos estéticos',
      expectedPhysical: 'Cálculo do IMC e avaliação de sobrepeso/obesidade | Inspeção de sinais de hiperandrogenismo (acne, hirsutismo com escore de Ferriman-Gallwey, alopecia androgenética) | Pesquisa de acantose nigricans (pescoço, axilas) como marcador de resistência insulínica | Exame ginecológico para excluir massas anexiais significativas',
      expectedExams: [
        { exam: 'Testosterona total e/ou livre', justify: 'Confirmar hiperandrogenismo laboratorial', expected: 'Elevada' },
        { exam: 'LH, FSH e relação LH/FSH', justify: 'Auxiliar na avaliação de disfunção ovulatória (embora não seja critério diagnóstico obrigatório)', expected: 'Relação LH/FSH aumentada, sugestiva de SOP' },
        { exam: '17-OH-progesterona', justify: 'Excluir hiperplasia adrenal congênita de início tardio como diferencial de hiperandrogenismo', expected: 'Normal' },
        { exam: 'Prolactina e TSH', justify: 'Excluir hiperprolactinemia e disfunção tireoidiana como causas de anovulação', expected: 'Normais' },
        { exam: 'Glicemia de jejum e/ou teste oral de tolerância à glicose, e perfil lipídico', justify: 'Avaliar resistência insulínica/pré-diabetes e risco cardiometabólico associados à SOP', expected: 'Glicemia de jejum alterada (pré-diabetes) e possível dislipidemia' },
        { exam: 'Ultrassonografia pélvica transvaginal', justify: 'Avaliar morfologia ovariana policística (critério de Rotterdam)', expected: 'Ovários aumentados com múltiplos folículos subcentimétricos periféricos' }
      ],
      expectedConduct: 'Farmacológica: anticoncepcional hormonal combinado (preferencialmente com progestagênio antiandrogênico) para regularização do ciclo e controle do hiperandrogenismo, quando não há contraindicação e a paciente concorda; considerar metformina diante de resistência insulínica/pré-diabetes confirmada | Não farmacológica: orientar mudança de estilo de vida com dieta e atividade física regular para perda ponderal, que melhora sensibilidade insulínica e regularidade menstrual; encaminhamento à dermatologia para manejo complementar de acne/hirsutismo se necessário | Orientações ao paciente: esclarecer que a fertilidade não está necessariamente comprometida de forma definitiva, mas pode haver dificuldade para engravidar por anovulação, sendo tratável quando desejar engravidar; explicar riscos metabólicos a longo prazo (diabetes tipo 2, doença cardiovascular) e importância do acompanhamento regular; abordar impacto psicológico e oferecer suporte',
      expectedCommunication: 'Criar ambiente de acolhimento para tema sensível relacionado à autoimagem | Validar o sofrimento emocional da paciente com acne e hirsutismo | Responder de forma clara e realista à pergunta sobre fertilidade, sem alarmismo nem falsas garantias | Explicar a cronicidade da condição e necessidade de seguimento a longo prazo | Verificar compreensão e disponibilidade para mudanças de estilo de vida',
      criticalErrors: [
        'Firmar diagnóstico de SOP sem excluir outras causas de hiperandrogenismo/anovulação (hiperplasia adrenal congênita, hiperprolactinemia, disfunção tireoidiana)',
        'Não avaliar risco metabólico (glicemia, perfil lipídico) em paciente com SOP e acantose nigricans',
        'Ignorar o impacto psicológico/autoestima relatado pela paciente',
        'Prometer resolução completa da infertilidade ou, inversamente, afirmar que a paciente jamais poderá engravidar',
        'Não orientar sobre mudança de estilo de vida como pilar fundamental do tratamento'
      ]
    },

    instD: {
      title: 'CHECKLIST — CICLOS IRREGULARES, ACNE E HIRSUTISMO (SÍNDROME DOS OVÁRIOS POLICÍSTICOS)',
      sections: [
        { h: 'BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE', items: [
          { item: 'Atendeu a paciente sozinha, respeitando a confidencialidade da consulta', score: 0.5, ref: 'CFM Res. 2.217/2018' },
          { item: 'Acolheu o sofrimento emocional relacionado à acne e ao hirsutismo', score: 1.0, ref: 'ESHRE Guideline' }
        ]},
        { h: 'BLOCO 2 — ANAMNESE', items: [
          { item: 'Caracterizou o padrão menstrual desde a menarca', score: 0.5, ref: 'FEBRASGO' },
          { item: 'Investigou hirsutismo, acne e história de ganho de peso', score: 0.5, ref: 'FEBRASGO' },
          { item: 'Perguntou sobre história familiar de diabetes/SOP', score: 0.5, ref: 'FEBRASGO' }
        ]},
        { h: 'BLOCO 3 — EXAME FÍSICO', items: [
          { item: 'Calculou o IMC e pesquisou acantose nigricans', score: 1.0, ref: 'FEBRASGO' },
          { item: 'Avaliou sinais de hiperandrogenismo (escore de Ferriman-Gallwey, acne)', score: 0.5, ref: 'FEBRASGO' }
        ]},
        { h: 'BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO', items: [
          { item: 'Solicitou testosterona, LH/FSH e 17-OH-progesterona para excluir diferenciais', score: 1.5, ref: 'FEBRASGO' },
          { item: 'Solicitou prolactina, TSH e USG transvaginal com justificativa clínica', score: 1.0, ref: 'FEBRASGO' },
          { item: 'Solicitou glicemia de jejum e perfil lipídico para avaliação de risco cardiometabólico', score: 1.0, ref: 'ESHRE Guideline' }
        ]},
        { h: 'BLOCO 5 — CONDUTA E ORIENTAÇÃO AO PACIENTE', items: [
          { item: 'Aplicou corretamente os critérios de Rotterdam para o diagnóstico', score: 1.0, ref: 'Consenso de Rotterdam' },
          { item: 'Orientou mudança de estilo de vida e propôs anticoncepcional hormonal combinado', score: 1.0, ref: 'FEBRASGO' },
          { item: 'Respondeu de forma realista e sem alarmismo sobre fertilidade futura', score: 0.5, ref: 'ESHRE Guideline' }
        ]}
      ]
    }
  },

  // CASO 5 — SÍNDROME CLIMATÉRICA
  {
    id: 5,
    title: 'Ondas de calor e insônia há 8 meses',
    sub: 'UBS — Atenção Primária',
    tema: 'Ginecologia',
    topic: 'Síndrome Climatérica',
    level: 'fácil',
    cardAccent: '#AD1457',

    instA: {
      scenario: 'Consulta agendada de rotina na UBS, paciente vem acompanhada do marido, mas é atendida sozinha na sala de consulta.',
      patient: 'Rosana Martins de Oliveira, 51 anos, sexo feminino, professora aposentada, G3P3A0.',
      complaint: 'Ondas de calor frequentes e dificuldade para dormir há cerca de 8 meses.',
      tasks: [
        'Realize a anamnese dirigida ao caso.',
        'Realize o exame físico geral e ginecológico dirigido.',
        'Formule a hipótese diagnóstica principal e os diferenciais.',
        'Solicite os exames complementares pertinentes, quando indicado.',
        'Proponha o tratamento e oriente a paciente.'
      ]
    },

    instB: {
      vitals: {
        PA: '128/82 mmHg',
        FC: '76 bpm',
        FR: '16 irpm',
        Tax: '36,3 °C',
        Peso: '72 kg',
        Altura: '1,60 m',
        IMC: '28,1 kg/m²'
      },
      physicalGeneral: 'Bom estado geral, corada, hidratada, discreto ressecamento de pele, sem outras alterações relevantes.',
      physicalSeg: 'MAMAS: sem nódulos palpáveis, sem secreção papilar, sem retrações ou alterações cutâneas. | ABDOME: plano, indolor, sem massas. | EXAME GINECOLÓGICO: mucosa vaginal com discreto adelgaçamento e palidez (sinais de hipoestrogenismo), colo uterino de aspecto atrófico, sem lesões visíveis; ao toque, útero de tamanho normal para a idade, anexos não palpáveis, sem dor.',
      labs: [
        { test: 'FSH', val: '58 mUI/mL', ref: '> 25-30 mUI/mL confirma insuficiência ovariana (pós-menopausa)', alt: true },
        { test: 'Estradiol', val: '12 pg/mL', ref: '< 20 pg/mL (pós-menopausa)', alt: false },
        { test: 'TSH', val: '2,3 mUI/L', ref: '0,4 – 4,0 mUI/L', alt: false },
        { test: 'Glicemia de jejum', val: '92 mg/dL', ref: '70 – 99 mg/dL', alt: false },
        { test: 'Perfil lipídico', val: 'Colesterol total 218 mg/dL, LDL 138 mg/dL, HDL 48 mg/dL, TG 145 mg/dL', ref: 'Colesterol total < 190, LDL < 130, HDL > 50, TG < 150 mg/dL', alt: true }
      ],
      note: 'A dosagem hormonal (FSH/estradiol) não é obrigatória para o diagnóstico, que é predominantemente clínico. Entregar apenas se o candidato justificar a solicitação (ex.: dúvida diagnóstica, menopausa precoce) — reforçar essa informação ao candidato quando ele questionar a real necessidade do exame.',
      patientProfile: 'Professora aposentada, casada há 28 anos, três filhos adultos. Última menstruação há 13 meses. Refere piora da qualidade do sono, com despertares noturnos frequentes associados a sudorese. Não fuma, ingestão social ocasional de álcool. Sedentária nos últimos anos.',
      script: [
        { trigger: 'Queixa principal', speech: 'Doutor(a), estou tendo uns calorões terríveis, do nada sinto o corpo todo esquentar e começo a suar, principalmente à noite, e não consigo mais dormir direito.' },
        { trigger: 'Sobre menstruação', speech: 'Minha última menstruação foi há mais ou menos 13 meses. Antes disso já vinha bem irregular, às vezes 2 meses sem vir.' },
        { trigger: 'Sobre frequência/intensidade dos fogachos', speech: 'Acontece várias vezes ao dia, umas 6 ou 7 vezes, e à noite também, o que atrapalha muito meu sono.' },
        { trigger: 'Sobre humor', speech: 'Tenho notado que estou mais irritada, choro à toa às vezes, e ando bem ansiosa sem motivo aparente.' },
        { trigger: 'Sobre vida sexual', speech: 'Tenho notado ressecamento vaginal, e às vezes sinto dor durante a relação com meu marido, o que está afetando nosso relacionamento.' },
        { trigger: 'Sobre sintomas urinários', speech: 'Às vezes sinto vontade de urinar com mais frequência, e uma vez ou outra escapa um pouco de urina quando tusso forte.' },
        { trigger: 'Sobre antecedentes familiares', speech: 'Minha mãe teve um infarto aos 60 anos, e minha irmã mais velha teve câncer de mama aos 55 anos.' },
        { trigger: 'Pergunta ativa — diagnóstico', speech: 'Doutor(a), isso é normal? Existe algum tratamento para esses calorões? Tenho receio de fazer reposição hormonal por causa do histórico da minha família.' }
      ],
      hiddenInfo: 'Está com receio de conversar sobre a diminuição da libido e o desconforto na relação sexual, pois acha "vergonhoso" na sua idade — só revela se o candidato perguntar diretamente e de forma acolhedora sobre vida sexual | Tem episódios de perda urinária aos esforços (tosse, espirro) há alguns meses, mas não valorizou por achar "normal da idade" — só revela se perguntada sobre sintomas urinários | Sua irmã teve câncer de mama aos 55 anos, o que a deixa com receio de terapia hormonal — só revela se perguntada sobre história familiar de câncer | Não realiza mamografia há mais de 3 anos — só revela se perguntada sobre rastreamento de câncer de mama',
      actorBehavior: 'Demonstrar cansaço pela privação de sono (bocejar, olheiras "referidas"). Ficar visivelmente mais reservada/constrangida ao tocar no tema da vida sexual. Ansiosa quanto à segurança da terapia hormonal por conta do histórico familiar de câncer de mama — expressar essa preocupação se o tema de tratamento for abordado.'
    },

    instC: {
      diagnosis: 'Síndrome climatérica (climatério/menopausa), com sintomas vasomotores (fogachos), atrofia genital e alterações do humor, associada a dislipidemia.',
      differentials: [
        'Hipertireoidismo — entra por causar sintomas semelhantes (calor, sudorese, irritabilidade, palpitações); sai pelo TSH normal.',
        'Transtorno de ansiedade/depressão isolado — entra pelas alterações de humor; sai pela presença de sintomas vasomotores típicos e amenorreia há 13 meses, compatíveis com etiologia climatérica associada.',
        'Feocromocitoma — entra pela possibilidade de episódios de calor/sudorese paroxística; sai pela ausência de hipertensão paroxística, palpitações intensas e cefaleia associada, sendo diagnóstico raro e pouco provável no contexto clínico apresentado.',
        'Insuficiência ovariana prematura — entra como diferencial em mulheres com sintomas climatéricos; sai pela idade da paciente (51 anos), compatível com a idade média de menopausa natural, não caracterizando insuficiência "prematura" (que ocorre antes dos 40 anos).'
      ],
      context: 'O climatério é a fase de transição entre o período reprodutivo e o não reprodutivo da mulher, caracterizado pelo declínio progressivo da função ovariana. A menopausa é definida retrospectivamente após 12 meses consecutivos de amenorreia. A paciente, aos 51 anos (idade média de menopausa no Brasil), apresenta quadro típico de síndrome climatérica, com sintomas vasomotores, geniturinários e alterações de humor, associado a fatores de risco cardiovascular (dislipidemia, sedentarismo, sobrepeso) que devem ser abordados de forma integral.',
      justify: 'O diagnóstico de síndrome climatérica é eminentemente clínico, sustentado pela amenorreia há 13 meses (confirmando a menopausa), sintomas vasomotores característicos (fogachos, sudorese noturna), sintomas geniturinários (atrofia vaginal, sintomas urinários) e alterações de humor, corroborados pelo FSH elevado e estradiol baixo, compatíveis com hipoestrogenismo da pós-menopausa.',
      expectedAnamnesis: 'Caracterização da última menstruação e padrão do ciclo prévio | Frequência e intensidade dos fogachos e sudorese noturna | Impacto no sono e qualidade de vida | Sintomas geniturinários (ressecamento vaginal, dispareunia, sintomas urinários) | Alterações de humor (irritabilidade, ansiedade, labilidade emocional) | Fatores de risco cardiovascular (hipertensão, dislipidemia, sedentarismo, tabagismo) | História familiar de câncer de mama, ginecológico e doença cardiovascular | Atualização de rastreamentos (mamografia, citologia oncótica) | Vida sexual e impacto do quadro no relacionamento',
      expectedPhysical: 'Aferição de peso, altura, IMC e pressão arterial | Exame das mamas | Exame ginecológico avaliando sinais de atrofia vaginal | Avaliação geral de sinais de hipoestrogenismo',
      expectedExams: [
        { exam: 'FSH e estradiol', justify: 'Podem auxiliar em casos de dúvida diagnóstica (não obrigatórios quando o quadro clínico já é típico)', expected: 'FSH elevado e estradiol baixo, compatíveis com hipoestrogenismo pós-menopausa' },
        { exam: 'TSH', justify: 'Excluir disfunção tireoidiana como diferencial de sintomas climatéricos', expected: 'Normal' },
        { exam: 'Perfil lipídico e glicemia de jejum', justify: 'Avaliar risco cardiovascular e metabólico, que se eleva após a menopausa', expected: 'Possível dislipidemia, como observado na paciente' },
        { exam: 'Mamografia', justify: 'Rastreamento de câncer de mama, essencial nesta faixa etária e desatualizado nesta paciente', expected: 'A depender do achado; deve ser solicitada/atualizada' },
        { exam: 'Densitometria óssea', justify: 'Avaliar risco de osteoporose, indicada a partir dos 65 anos ou antes se fatores de risco presentes', expected: 'A avaliar conforme fatores de risco individuais' }
      ],
      expectedConduct: 'Farmacológica: discutir terapia hormonal (TH) sistêmica como opção eficaz para sintomas vasomotores moderados a intensos, avaliando individualmente riscos e benefícios (incluindo o histórico familiar de câncer de mama, que exige avaliação cuidadosa e eventual encaminhamento para mastologia antes de decidir); considerar estrogênio vaginal tópico em baixa dose para atrofia genital, com perfil de segurança distinto da TH sistêmica; alternativas não hormonais (ex.: inibidores seletivos de recaptação de serotonina) podem ser discutidas se TH for contraindicada ou não desejada | Não farmacológica: orientar mudanças de estilo de vida (atividade física regular, dieta balanceada) para controle de peso e risco cardiovascular; orientar exercícios de assoalho pélvico para sintomas urinários de esforço | Orientações ao paciente: esclarecer dúvidas sobre segurança da terapia hormonal de forma individualizada, sem minimizar nem exagerar riscos; atualizar rastreamento de câncer de mama (mamografia) antes de decisões terapêuticas quando pertinente; acolher questões sobre vida sexual e sintomas urinários com naturalidade',
      expectedCommunication: 'Criar ambiente acolhedor para abordar temas sensíveis (sexualidade, incontinência urinária) | Validar os sintomas como parte de uma transição fisiológica, sem banalizá-los | Responder à preocupação sobre terapia hormonal de forma baseada em evidências e individualizada, considerando o histórico familiar | Perguntar ativamente sobre rastreamentos oncológicos | Verificar compreensão e alinhar expectativas sobre o tratamento',
      criticalErrors: [
        'Não perguntar ativamente sobre sintomas geniturinários e urinários, que a paciente tende a não relatar espontaneamente por constrangimento',
        'Indicar ou contraindicar terapia hormonal sistêmica sem considerar individualmente o histórico familiar de câncer de mama e sem propor avaliação adequada',
        'Não verificar/atualizar o rastreamento de câncer de mama (mamografia) na consulta',
        'Minimizar os sintomas como "coisa da idade" sem oferecer possibilidades terapêuticas',
        'Não abordar fatores de risco cardiovascular (dislipidemia, sedentarismo) evidenciados no caso'
      ]
    },

    instD: {
      title: 'CHECKLIST — FOGACHOS E INSÔNIA HÁ 8 MESES (SÍNDROME CLIMATÉRICA)',
      sections: [
        { h: 'BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE', items: [
          { item: 'Criou ambiente acolhedor para abordar sexualidade e sintomas urinários', score: 1.0, ref: 'FEBRASGO' },
          { item: 'Validou os sintomas sem banalizá-los como "coisa da idade"', score: 0.5, ref: 'FEBRASGO' }
        ]},
        { h: 'BLOCO 2 — ANAMNESE', items: [
          { item: 'Caracterizou a data da última menstruação e os fogachos', score: 0.5, ref: 'FEBRASGO' },
          { item: 'Perguntou ativamente sobre sintomas geniturinários e urinários', score: 1.0, ref: 'FEBRASGO' },
          { item: 'Investigou história familiar de câncer de mama e doença cardiovascular', score: 1.0, ref: 'FEBRASGO' }
        ]},
        { h: 'BLOCO 3 — EXAME FÍSICO', items: [
          { item: 'Examinou as mamas e realizou exame ginecológico avaliando atrofia vaginal', score: 1.0, ref: 'FEBRASGO' }
        ]},
        { h: 'BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO', items: [
          { item: 'Reconheceu o diagnóstico como eminentemente clínico, sem exigir FSH/estradiol', score: 1.0, ref: 'FEBRASGO' },
          { item: 'Solicitou perfil lipídico/glicemia e verificou atualização da mamografia', score: 1.0, ref: 'FEBRASGO' }
        ]},
        { h: 'BLOCO 5 — CONDUTA E ORIENTAÇÃO AO PACIENTE', items: [
          { item: 'Discutiu terapia hormonal individualizando riscos frente ao histórico familiar de câncer de mama', score: 1.5, ref: 'FEBRASGO' },
          { item: 'Propôs estrogênio vaginal tópico para atrofia genital', score: 1.0, ref: 'FEBRASGO' },
          { item: 'Orientou mudanças de estilo de vida e exercícios de assoalho pélvico', score: 0.5, ref: 'FEBRASGO' }
        ]}
      ]
    }
  },

  // CASO 6 — ENDOMETRIOSE
  {
    id: 6,
    title: 'Dor pélvica cíclica intensa há 3 anos',
    sub: 'Ambulatório — Ginecologia',
    tema: 'Ginecologia',
    topic: 'Endometriose',
    level: 'difícil',
    cardAccent: '#AD1457',

    instA: {
      scenario: 'Consulta ambulatorial especializada, paciente encaminhada da UBS por dor pélvica refratária a analgésicos comuns.',
      patient: 'Fernanda Costa Almeida, 29 anos, sexo feminino, fisioterapeuta, nuligesta.',
      complaint: 'Dor pélvica cíclica intensa que piora durante a menstruação, há cerca de 3 anos, associada a dificuldade para engravidar.',
      tasks: [
        'Realize a anamnese dirigida ao caso.',
        'Realize o exame físico ginecológico dirigido.',
        'Formule a hipótese diagnóstica principal e os diferenciais.',
        'Solicite os exames complementares adequados.',
        'Proponha a conduta terapêutica e explique as opções à paciente.'
      ]
    },

    instB: {
      vitals: {
        PA: '110/70 mmHg',
        FC: '78 bpm',
        FR: '16 irpm',
        Tax: '36,3 °C',
        Peso: '60 kg',
        Altura: '1,68 m',
        IMC: '21,3 kg/m²'
      },
      physicalGeneral: 'Bom estado geral, corada, hidratada, sem alterações relevantes fora do período menstrual.',
      physicalSeg: 'ABDOME: plano, indolor à palpação no momento do exame (paciente fora do período menstrual), sem massas palpáveis. | EXAME ESPECULAR: colo uterino de aspecto normal; presença de nódulo azulado visível em fundo de saco vaginal posterior. | TOQUE VAGINAL: útero em retroversão fixa, dor importante à mobilização, nodulações dolorosas palpáveis em ligamentos uterossacros, anexo direito discretamente aumentado e doloroso à palpação.',
      labs: [
        { test: 'CA-125', val: '58 U/mL', ref: '< 35 U/mL (marcador inespecífico, não confirma diagnóstico isoladamente)', alt: true },
        { test: 'Beta-hCG', val: 'Negativo', ref: 'Negativo', alt: false },
        { test: 'Hemograma completo', val: 'Normal', ref: 'Normal', alt: false }
      ],
      image: 'Ultrassonografia transvaginal com preparo intestinal: endometrioma em ovário direito medindo 3,5 cm, com conteúdo em "vidro fosco" característico; sinais indiretos de aderências pélvicas (sliding sign negativo entre útero e reto).',
      note: 'O CA-125 não deve ser usado como exame confirmatório isolado — se o candidato solicitar, entregar o valor e reforçar (se perguntado) que ele apenas apoia o quadro, não fecha diagnóstico. A USG com preparo intestinal só deve ser entregue se o candidato mencionar essa indicação específica (maior acurácia para endometriose profunda).',
      patientProfile: 'Fisioterapeuta, casada há 3 anos, tentando engravidar há cerca de 1 ano sem sucesso. Refere dismenorreia progressiva desde a adolescência, cada vez mais intensa e incapacitante, chegando a faltar ao trabalho nos primeiros dias do ciclo.',
      script: [
        { trigger: 'Queixa principal', speech: 'Doutor(a), tenho uma cólica menstrual muito forte há anos, mas está cada vez pior. Nos primeiros dias da menstruação eu praticamente não consigo trabalhar.' },
        { trigger: 'Sobre evolução da dor', speech: 'Desde adolescente eu já tinha cólica, mas era suportável com remédio. Nos últimos 3 anos foi piorando muito, e agora nem remédio forte resolve direito.' },
        { trigger: 'Sobre dor durante relação sexual', speech: '(hesitante) É... às vezes sinto uma dor forte, bem "no fundo", durante a relação com meu marido. Isso também piorou.' },
        { trigger: 'Sobre sintomas intestinais/urinários', speech: 'Agora que o(a) senhor(a) perguntou, sim, durante a menstruação eu sinto dor para evacuar também, e às vezes uma sensação estranha na bexiga.' },
        { trigger: 'Sobre tentativa de engravidar', speech: 'Estamos tentando engravidar há quase um ano e nada. Isso está me deixando muito ansiosa.' },
        { trigger: 'Sobre história familiar', speech: 'Minha mãe também tinha muita cólica e fez uma cirurgia há anos, acho que era isso também.' },
        { trigger: 'Sobre tratamentos prévios', speech: 'Já tomei vários anti-inflamatórios e até tentei pílula anticoncepcional contínua, que ajudou um pouco, mas não resolveu de vez.' },
        { trigger: 'Pergunta ativa — diagnóstico', speech: 'Doutor(a), o que eu tenho? Isso está afetando minha chance de engravidar?' }
      ],
      hiddenInfo: 'Sente dor ao evacuar durante o período menstrual (disquezia cíclica) — só revela se perguntada especificamente sobre sintomas intestinais | Tem dispareunia de longa data, mas tem vergonha de falar sobre isso espontaneamente — só revela se o candidato perguntar diretamente e de forma acolhedora | A mãe foi operada de "cisto no ovário" há anos, possivelmente endometriose não diagnosticada como tal — só revela se perguntada sobre história familiar ginecológica | Está com muito medo de ser infértil, evita comentar isso abertamente até ser questionada — só revela se o candidato explorar preocupações/expectativas',
      actorBehavior: 'Postura de dor crônica (leve rigidez ao se movimentar durante o exame). Hesitante e constrangida ao mencionar dispareunia — pausar e falar mais baixo nesse trecho. Ansiosa em relação à fertilidade, repetir a pergunta se não for abordada.'
    },

    instC: {
      diagnosis: 'Endometriose pélvica profunda, com endometrioma ovariano associado, cursando com infertilidade.',
      differentials: [
        'Doença Inflamatória Pélvica crônica — entra pela dor pélvica crônica; sai pela ausência de história de infecção aguda prévia, febre ou corrimento purulento, e pelo achado de imagem característico de endometrioma.',
        'Adenomiose — entra pela dismenorreia progressiva; sai pelo achado ultrassonográfico específico de endometrioma ovariano e nodulações em ligamentos uterossacros, não descritos como aumento difuso do miométrio.',
        'Síndrome do Intestino Irritável — entra pelos sintomas intestinais cíclicos (disquezia); sai pela ciclicidade estrita relacionada à menstruação e pelos demais achados ginecológicos (dismenorreia progressiva, dispareunia, infertilidade, imagem sugestiva).',
        'Neoplasia ovariana — entra pela massa anexial e CA-125 elevado; sai pelo aspecto característico em "vidro fosco" à USG (típico de endometrioma) e pela idade e contexto clínico compatíveis com doença benigna.'
      ],
      context: 'A endometriose é definida pela presença de tecido endometrial (glândulas e estroma) fora da cavidade uterina, mais comumente nos ovários, ligamentos uterossacros e fundo de saco de Douglas. Acomete cerca de 10% das mulheres em idade reprodutiva e é uma das principais causas de dor pélvica crônica e infertilidade, como observado nesta paciente com dismenorreia progressiva desde a adolescência, dispareunia profunda e dificuldade para engravidar.',
      justify: 'O diagnóstico é sustentado pela tríade clássica de dor pélvica cíclica progressiva, dispareunia profunda e infertilidade, associada aos achados de exame físico (nodulações dolorosas em ligamentos uterossacros, útero fixo em retroversão) e de imagem (endometrioma ovariano em "vidro fosco"), compatíveis com os critérios de suspeição clínica e de imagem para endometriose, sem necessidade obrigatória de laparoscopia para o diagnóstico inicial.',
      expectedAnamnesis: 'Caracterização da dismenorreia (intensidade, progressão, resposta a analgésicos) | Presença de dispareunia profunda | Sintomas intestinais e urinários cíclicos (disquezia, disúria cíclica) | História reprodutiva e tentativa de gestação | Impacto na qualidade de vida e absenteísmo | História familiar de endometriose | Tratamentos previamente tentados',
      expectedPhysical: 'Palpação abdominal | Exame especular buscando nódulos em fundo de saco vaginal posterior | Toque vaginal bimanual avaliando mobilidade uterina, dor à mobilização e nodulações em ligamentos uterossacros',
      expectedExams: [
        { exam: 'Ultrassonografia transvaginal com preparo intestinal', justify: 'Exame de imagem de primeira linha com maior acurácia para identificar endometriomas e endometriose profunda infiltrativa', expected: 'Endometrioma ovariano e/ou sinais de aderências pélvicas' },
        { exam: 'Ressonância magnética de pelve', justify: 'Considerar em casos de dúvida diagnóstica ou planejamento cirúrgico de doença profunda infiltrativa', expected: 'Confirmação de lesões profundas e mapeamento pré-operatório' },
        { exam: 'CA-125', justify: 'Pode estar elevado em endometriose, mas não é exame diagnóstico isolado nem obrigatório', expected: 'Frequentemente elevado, porém inespecífico' },
        { exam: 'Beta-hCG', justify: 'Excluir gestação antes de qualquer conduta terapêutica hormonal', expected: 'Negativo' }
      ],
      expectedConduct: 'Farmacológica: analgesia com AINEs para crises; anticoncepcionais hormonais combinados contínuos ou progestagênios (ex.: dienogeste) como primeira linha para controle da dor em quem não deseja engravidar imediatamente | Não farmacológica: encaminhamento para avaliação de laparoscopia diagnóstica/terapêutica em casos refratários ao tratamento clínico ou quando há infertilidade associada; discutir encaminhamento à reprodução assistida diante da dificuldade para engravidar e possível fator tuboperitoneal | Orientações ao paciente: explicar a natureza crônica da doença e necessidade de acompanhamento a longo prazo; esclarecer que a relação entre endometriose e infertilidade é individual e que existem opções de tratamento, incluindo cirurgia e reprodução assistida; acolher a ansiedade relacionada à fertilidade',
      expectedCommunication: 'Criar ambiente acolhedor para abordar sintomas sensíveis (dispareunia, disquezia) | Validar a dor crônica da paciente, historicamente subvalorizada nesse tipo de queixa | Explicar de forma clara a relação entre o diagnóstico e a dificuldade para engravidar, sem gerar falsas expectativas nem desesperança | Verificar compreensão do plano terapêutico proposto',
      criticalErrors: [
        'Não investigar ativamente dispareunia e sintomas intestinais/urinários cíclicos, atribuindo a dor apenas à dismenorreia primária',
        'Minimizar a queixa de dor crônica como "cólica normal" sem investigação adequada',
        'Não considerar a infertilidade associada ao propor o plano terapêutico',
        'Basear o diagnóstico definitivo apenas no CA-125 isoladamente elevado',
        'Não encaminhar para avaliação especializada/cirúrgica em caso de dor refratária ao tratamento clínico inicial'
      ]
    },

    instD: {
      title: 'CHECKLIST — DOR PÉLVICA CÍCLICA INTENSA HÁ 3 ANOS (ENDOMETRIOSE)',
      sections: [
        { h: 'BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE', items: [
          { item: 'Validou a dor crônica da paciente sem minimizá-la como "cólica normal"', score: 1.0, ref: 'FEBRASGO' },
          { item: 'Criou ambiente acolhedor para abordar dispareunia e disquezia', score: 0.5, ref: 'FEBRASGO' }
        ]},
        { h: 'BLOCO 2 — ANAMNESE', items: [
          { item: 'Caracterizou a progressão da dismenorreia e a resposta a analgésicos', score: 0.5, ref: 'FEBRASGO' },
          { item: 'Investigou ativamente dispareunia profunda e sintomas intestinais/urinários cíclicos', score: 1.0, ref: 'FEBRASGO' },
          { item: 'Perguntou sobre tentativa de gestação e história familiar', score: 0.5, ref: 'FEBRASGO' }
        ]},
        { h: 'BLOCO 3 — EXAME FÍSICO', items: [
          { item: 'Realizou exame especular buscando nódulos em fundo de saco vaginal posterior', score: 0.5, ref: 'FEBRASGO' },
          { item: 'Realizou toque vaginal avaliando mobilidade uterina e nodulações em ligamentos uterossacros', score: 1.0, ref: 'FEBRASGO' }
        ]},
        { h: 'BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO', items: [
          { item: 'Solicitou USG transvaginal com preparo intestinal e beta-hCG', score: 1.0, ref: 'FEBRASGO' },
          { item: 'Reconheceu que o CA-125 não confirma o diagnóstico isoladamente', score: 1.0, ref: 'FEBRASGO' }
        ]},
        { h: 'BLOCO 5 — CONDUTA E ORIENTAÇÃO AO PACIENTE', items: [
          { item: 'Propôs anticoncepcional contínuo ou progestagênio como primeira linha para controle da dor', score: 1.0, ref: 'FEBRASGO' },
          { item: 'Discutiu encaminhamento para laparoscopia e/ou reprodução assistida diante da infertilidade', score: 1.0, ref: 'FEBRASGO' },
          { item: 'Explicou a cronicidade da doença sem gerar falsas expectativas sobre fertilidade', score: 0.5, ref: 'FEBRASGO' }
        ]}
      ]
    }
  },

  // CASO 7 — GESTAÇÃO ECTÓPICA
  {
    id: 7,
    title: 'Dor abdominal súbita e atraso menstrual',
    sub: 'PS — Pronto-Socorro',
    tema: 'Ginecologia',
    topic: 'Gestação Ectópica',
    level: 'difícil',
    cardAccent: '#AD1457',

    instA: {
      scenario: 'Atendimento de urgência no Pronto-Socorro, paciente trazida pelo companheiro, apresentando dor importante e palidez.',
      patient: 'Larissa Nunes Costa, 26 anos, sexo feminino, cabeleireira, G1P0A0 (uma gestação prévia sem intercorrências).',
      complaint: 'Dor abdominal súbita e intensa em fossa ilíaca direita, associada a atraso menstrual de cerca de 7 semanas.',
      tasks: [
        'Realize a anamnese dirigida ao caso, com agilidade compatível com a gravidade.',
        'Realize o exame físico geral, abdominal e ginecológico dirigido.',
        'Formule a hipótese diagnóstica principal e os diferenciais.',
        'Solicite os exames complementares adequados de forma prioritária.',
        'Reconheça a gravidade do caso e proponha a conduta imediata.'
      ]
    },

    instB: {
      vitals: {
        PA: '90/60 mmHg',
        FC: '118 bpm',
        FR: '24 irpm',
        Tax: '36,2 °C',
        Peso: '64 kg',
        Altura: '1,64 m',
        IMC: '23,8 kg/m²',
        SpO2: '96%'
      },
      physicalGeneral: 'Regular/mau estado geral, palidez cutâneo-mucosa importante, sudorese fria, taquicárdica, hipotensa, ansiosa, fácies de dor intensa.',
      physicalSeg: 'ABDOME: doloroso à palpação difusa, mais intenso em fossa ilíaca direita, com defesa muscular e sinais de irritação peritoneal (descompressão brusca positiva), discreta distensão. | EXAME ESPECULAR: sangramento vaginal discreto, escurecido, colo uterino sem lesões visíveis. | TOQUE VAGINAL: dor importante à mobilização do colo uterino, útero de tamanho discretamente aumentado, abaulamento e dor intensa em fundo de saco de Douglas (grito de Douglas positivo).',
      labs: [
        { test: 'Beta-hCG quantitativo', val: '1.480 mUI/mL', ref: 'Valor baixo para idade gestacional esperada (~7 semanas), sugerindo gestação não evolutiva/ectópica', alt: true },
        { test: 'Hemoglobina', val: '8,9 g/dL', ref: '12,0 – 15,5 g/dL', alt: true },
        { test: 'Tipagem sanguínea e fator Rh', val: 'O negativo', ref: 'Relevante para profilaxia anti-D se Rh negativo', alt: true }
      ],
      image: 'Ultrassonografia transvaginal de urgência: útero sem saco gestacional intrauterino visível; massa anexial direita heterogênea de aproximadamente 3 cm; presença de líquido livre em moderada quantidade em fundo de saco de Douglas e goteira parietocólica, compatível com hemoperitônio.',
      note: 'Este é um caso de emergência — priorizar reconhecimento rápido de instabilidade hemodinâmica. Entregar o beta-hCG e a USG assim que solicitados, sem demora, dado o contexto de urgência. Reforçar ao candidato, se perguntado, que a paciente está piorando clinicamente (queda de PA, aumento de FC) se a conduta demorar muito para ser definida.',
      patientProfile: 'Cabeleireira, união estável, um filho de 3 anos (parto normal, sem intercorrências). Não usa método contraceptivo regular há cerca de 3 meses. Refere início súbito da dor há cerca de 2 horas, com piora progressiva.',
      script: [
        { trigger: 'Queixa principal', speech: 'Doutor(a)... dói muito, começou do nada, uma dor forte do lado direito da barriga, e agora estou tonta.' },
        { trigger: 'Sobre menstruação', speech: 'Minha última menstruação foi há quase 2 meses, achei que fosse atraso normal, não tinha feito teste de gravidez.' },
        { trigger: 'Sobre sangramento vaginal', speech: 'Notei um sangramento escuro, pouco, nos últimos dias, bem diferente da minha menstruação normal.' },
        { trigger: 'Sobre início e evolução da dor', speech: 'A dor começou de repente, há umas 2 horas, e está cada vez pior. Agora sinto que vou desmaiar.' },
        { trigger: 'Sobre tontura/desmaio', speech: 'Sim, estou muito tonta, e sinto que o quarto está rodando. Está piorando.' },
        { trigger: 'Sobre método contraceptivo', speech: 'Não estou usando nada no momento, paramos de usar preservativo há uns meses, não estávamos planejando engravidar agora mas também não nos cuidamos direito.' },
        { trigger: 'Pergunta ativa — diagnóstico', speech: '(voz fraca) Doutor(a)... isso é grave? O que está acontecendo comigo?' }
      ],
      hiddenInfo: 'Teve um episódio de infecção pélvica tratada há 2 anos, mas não foi acompanhada adequadamente depois — só revela se perguntada sobre antecedentes de infecções ginecológicas | Sente uma dor referida no ombro direito, sinal indireto de irritação diafragmática por hemoperitônio — só revela se perguntada especificamente sobre dor em outros locais | Está com muito medo de estar perdendo uma gravidez e ao mesmo tempo preocupada com a própria vida — verbaliza isso apenas se o candidato demonstrar acolhimento | Não tem parceiro presente na sala no momento do exame — informação de contexto, não precisa ser extraída ativamente',
      actorBehavior: 'Comportamento de deterioração clínica progressiva: fala mais fraca, pede para "abrir os olhos com dificuldade" a cada minuto que a simulação avança sem conduta definida. Demonstrar medo genuíno e dor intensa durante o exame abdominal e toque vaginal.'
    },

    instC: {
      diagnosis: 'Gestação ectópica tubária rota, com hemoperitônio e sinais de instabilidade hemodinâmica (choque hipovolêmico inicial).',
      differentials: [
        'Abortamento incompleto/inevitável — entra pelo atraso menstrual e sangramento vaginal; sai pela presença de massa anexial e líquido livre volumoso à USG, além dos sinais de irritação peritoneal e choque, incompatíveis com abortamento uterino simples.',
        'Cisto ovariano roto (corpo lúteo hemorrágico) — entra pela dor pélvica aguda e hemoperitônio; sai pelo beta-hCG positivo com ausência de saco gestacional intrauterino, tornando a gestação ectópica o diagnóstico mais provável e prioritário a excluir.',
        'Torção anexial — entra pela dor pélvica aguda unilateral; sai pela presença de beta-hCG positivo e sinais de sangramento ativo (hemoperitônio, queda de hemoglobina), mais compatíveis com rotura de gestação ectópica.',
        'Apendicite aguda — entra pela dor em fossa ilíaca direita; sai pelo beta-hCG positivo, que torna obrigatória a investigação ginecológica prioritária em mulher em idade fértil com dor abdominal aguda.'
      ],
      context: 'A gestação ectópica ocorre quando a implantação do embrião se dá fora da cavidade endometrial, mais comumente na tuba uterina. É uma emergência obstétrica/ginecológica potencialmente fatal quando rota, sendo a principal causa de morte materna no primeiro trimestre. Fatores de risco incluem antecedente de DIP, cirurgia tubária prévia e uso inconsistente de métodos contraceptivos, como observado nesta paciente.',
      justify: 'O diagnóstico é confirmado pela combinação de beta-hCG positivo com ausência de saco gestacional intrauterino à ultrassonografia transvaginal, presença de massa anexial e líquido livre em cavidade abdominal (hemoperitônio), associados a sinais clínicos de instabilidade hemodinâmica (hipotensão, taquicardia, palidez) e sinais de irritação peritoneal, caracterizando quadro de gestação ectópica rota.',
      expectedAnamnesis: 'Data da última menstruação e atraso menstrual | Características do sangramento vaginal atual | Início, localização e evolução da dor abdominal | Sintomas de instabilidade (tontura, síncope, sudorese) | Método contraceptivo em uso | Antecedentes de DIP, cirurgia tubária ou gestação ectópica prévia | Dor referida em ombro (sinal de irritação diafragmática por hemoperitônio)',
      expectedPhysical: 'Avaliação imediata de sinais vitais e sinais de choque | Palpação abdominal buscando sinais de irritação peritoneal | Exame especular avaliando origem e características do sangramento | Toque vaginal avaliando dor à mobilização do colo e abaulamento/dor em fundo de saco (grito de Douglas)',
      expectedExams: [
        { exam: 'Beta-hCG quantitativo', justify: 'Confirmar gestação e correlacionar com achados de imagem', expected: 'Positivo, frequentemente com valor abaixo do esperado para a idade gestacional' },
        { exam: 'Ultrassonografia transvaginal de urgência', justify: 'Localizar a gestação e identificar sinais de rotura/hemoperitônio', expected: 'Ausência de saco gestacional intrauterino, massa anexial, líquido livre' },
        { exam: 'Hemograma completo', justify: 'Avaliar repercussão hemodinâmica da perda sanguínea', expected: 'Queda de hemoglobina/hematócrito' },
        { exam: 'Tipagem sanguínea e fator Rh', justify: 'Necessário para profilaxia com imunoglobulina anti-D se paciente Rh negativo', expected: 'Determinar necessidade de profilaxia' },
        { exam: 'Prova cruzada/reserva de hemocomponentes', justify: 'Preparo para eventual necessidade de transfusão em cirurgia de urgência', expected: 'Disponibilização de sangue compatível' }
      ],
      expectedConduct: 'Farmacológica: estabilização hemodinâmica imediata com acesso venoso calibroso e reposição volêmica; profilaxia com imunoglobulina anti-D se paciente Rh negativo | Não farmacológica: encaminhamento cirúrgico de urgência (laparoscopia ou laparotomia, conforme estabilidade) para salpingectomia ou salpingostomia, dada a instabilidade hemodinâmica já presente — tratamento clínico com metotrexato NÃO é apropriado neste momento por já haver rotura e hemoperitônio | Orientações ao paciente/família: comunicar a gravidade e a necessidade de cirurgia imediata de forma clara e acolhedora; explicar que se trata de uma gestação que não poderia evoluir e que o procedimento visa preservar a vida da paciente; abordar o luto pela perda gestacional com sensibilidade',
      expectedCommunication: 'Agir com agilidade e clareza compatível com emergência, sem gerar pânico desnecessário | Comunicar a gravidade do quadro de forma direta, mas acolhedora | Explicar a necessidade de cirurgia imediata e obter anuência para o procedimento | Abordar o aspecto emocional da perda gestacional associado ao diagnóstico',
      criticalErrors: [
        'Não reconhecer sinais de choque hipovolêmico e retardar a estabilização hemodinâmica',
        'Não considerar gestação ectópica como diagnóstico prioritário em mulher em idade fértil com dor abdominal aguda e atraso menstrual',
        'Propor tratamento clínico (metotrexato) em paciente já com sinais de rotura e instabilidade hemodinâmica',
        'Não verificar tipagem sanguínea/fator Rh e não considerar profilaxia anti-D quando indicada',
        'Retardar o encaminhamento cirúrgico de urgência diante de sinais claros de abdome agudo hemorrágico'
      ]
    },

    instD: {
      title: 'CHECKLIST — DOR ABDOMINAL SÚBITA E ATRASO MENSTRUAL (GESTAÇÃO ECTÓPICA ROTA)',
      sections: [
        { h: 'BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE', items: [
          { item: 'Agiu com agilidade e clareza compatível com emergência, sem gerar pânico', score: 0.5, ref: 'FEBRASGO' },
          { item: 'Comunicou a gravidade e a necessidade de cirurgia imediata de forma acolhedora', score: 1.0, ref: 'FEBRASGO' }
        ]},
        { h: 'BLOCO 2 — ANAMNESE', items: [
          { item: 'Investigou data da última menstruação, sangramento vaginal e método contraceptivo', score: 0.5, ref: 'FEBRASGO' },
          { item: 'Perguntou sobre dor referida em ombro e antecedente de DIP', score: 0.5, ref: 'FEBRASGO' }
        ]},
        { h: 'BLOCO 3 — EXAME FÍSICO', items: [
          { item: 'Reconheceu sinais vitais de choque hipovolêmico imediatamente', score: 1.0, ref: 'FEBRASGO' },
          { item: 'Identificou sinais de irritação peritoneal e grito de Douglas ao toque vaginal', score: 1.0, ref: 'FEBRASGO' }
        ]},
        { h: 'BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO', items: [
          { item: 'Solicitou beta-hCG quantitativo e USG transvaginal de urgência sem demora', score: 1.5, ref: 'FEBRASGO' },
          { item: 'Solicitou tipagem sanguínea/fator Rh e hemograma', score: 1.0, ref: 'FEBRASGO' }
        ]},
        { h: 'BLOCO 5 — CONDUTA E ORIENTAÇÃO AO PACIENTE', items: [
          { item: 'Iniciou estabilização hemodinâmica (acesso calibroso, reposição volêmica) e acionou cirurgia de urgência', score: 2.0, ref: 'FEBRASGO' },
          { item: 'Não propôs metotrexato diante de sinais de rotura e instabilidade', score: 1.0, ref: 'FEBRASGO' },
          { item: 'Indicou profilaxia anti-D por ser Rh negativo', score: 1.0, ref: 'FEBRASGO' }
        ]}
      ]
    }
  },

  // CASO 8 — CANDIDÍASE VULVOVAGINAL
  {
    id: 8,
    title: 'Prurido vulvar intenso e corrimento espesso há 4 dias',
    sub: 'UBS — Atenção Primária',
    tema: 'Ginecologia',
    topic: 'Candidíase Vulvovaginal',
    level: 'fácil',
    cardAccent: '#AD1457',

    instA: {
      scenario: 'Consulta de demanda espontânea na UBS, período da manhã.',
      patient: 'Patrícia Gomes Ribeiro, 33 anos, sexo feminino, professora, G1P1A0.',
      complaint: 'Prurido vulvar intenso e corrimento vaginal espesso e esbranquiçado há cerca de 4 dias.',
      tasks: [
        'Realize a anamnese dirigida ao caso.',
        'Realize o exame físico ginecológico dirigido.',
        'Formule a hipótese diagnóstica principal e os diferenciais.',
        'Solicite os exames complementares adequados (quando pertinente).',
        'Proponha o tratamento e oriente a paciente.'
      ]
    },

    instB: {
      vitals: {
        PA: '116/76 mmHg',
        FC: '74 bpm',
        FR: '16 irpm',
        Tax: '36,4 °C',
        Peso: '66 kg',
        Altura: '1,64 m',
        IMC: '24,5 kg/m²'
      },
      physicalGeneral: 'Bom estado geral, corada, hidratada, visivelmente incomodada pelo prurido durante a consulta.',
      physicalSeg: 'GENITAIS EXTERNOS: vulva hiperemiada e edemaciada, com escoriações discretas por coçadura. | EXAME ESPECULAR: paredes vaginais hiperemiadas, corrimento branco, espesso, grumoso, em aspecto de "leite coalhado", aderido às paredes vaginais; colo uterino sem lesões visíveis. | TOQUE VAGINAL: útero e anexos sem alterações, sem dor à mobilização do colo.',
      labs: [
        { test: 'pH vaginal', val: '4,2', ref: '< 4,5', alt: false },
        { test: 'Teste das aminas (whiff test)', val: 'Negativo', ref: 'Negativo', alt: false },
        { test: 'Bacterioscopia/exame a fresco com KOH 10%', val: 'Presença de hifas e pseudo-hifas', ref: 'Ausência de elementos fúngicos', alt: true },
        { test: 'Glicemia de jejum', val: '94 mg/dL', ref: '70 – 99 mg/dL', alt: false }
      ],
      note: 'A bacterioscopia com KOH só deve ser entregue se o candidato realizar a coleta durante o exame especular. A glicemia de jejum só deve ser entregue se solicitada — reforçar sua relevância apenas se o candidato questionar fatores predisponentes (diabetes é fator de risco para candidíase de repetição).',
      patientProfile: 'Professora do ensino fundamental, casada, um filho. Refere ter feito uso de antibiótico (amoxicilina) há cerca de 10 dias para tratar uma infecção de garganta, com início dos sintomas vaginais logo após o término do tratamento.',
      script: [
        { trigger: 'Queixa principal', speech: 'Doutor(a), estou com uma coceira horrível na vagina, e um corrimento branco, grosso, parece leite talhado.' },
        { trigger: 'Sobre características do corrimento', speech: 'É bem grosso mesmo, tipo nata, sem cheiro forte, mas a coceira é o que mais incomoda, quase não consigo dormir de tanto coçar.' },
        { trigger: 'Sobre uso recente de medicações', speech: 'Ah, sim! Tomei um antibiótico há umas 2 semanas para dor de garganta. Os sintomas começaram bem depois que terminei o remédio.' },
        { trigger: 'Sobre episódios anteriores', speech: 'Já tive isso umas duas vezes antes, mas fazia tempo. Uma vez até usei um creme que comprei na farmácia e melhorou.' },
        { trigger: 'Sobre vida sexual', speech: 'Tenho relações com meu marido normalmente, não notei nada diferente nele.' },
        { trigger: 'Sobre sintomas urinários', speech: 'Ardência para urinar, um pouco, mas acho que é porque a região está toda irritada de tanto coçar.' },
        { trigger: 'Pergunta ativa — diagnóstico', speech: 'Doutor(a), isso é grave? Por que ficou assim justo depois do antibiótico?' }
      ],
      hiddenInfo: 'Tem episódios recorrentes de candidíase, cerca de 4 vezes no último ano, mas nunca investigou a causa — só revela se perguntada sobre frequência de episódios anteriores | Usa calcinhas de tecido sintético e roupas justas com frequência para o trabalho — só revela se perguntada sobre hábitos de vestuário | Não tem diagnóstico prévio de diabetes, mas tem obesidade na família — só revela se perguntada sobre história familiar/fatores de risco | Sente vergonha de ter "pegado" algo do marido, mesmo sem sintomas nele — só revela se o candidato explorar preocupações',
      actorBehavior: 'Demonstrar desconforto físico visível (se remexer na cadeira, coçar-se discretamente). Colaborativa durante o exame, mas verbaliza desconforto durante a inspeção da vulva. Curiosa sobre a causa relacionada ao antibiótico.'
    },

    instC: {
      diagnosis: 'Candidíase vulvovaginal aguda, provavelmente desencadeada pelo uso recente de antibioticoterapia sistêmica.',
      differentials: [
        'Vaginose bacteriana — entra pelo corrimento vaginal como queixa comum; sai pela ausência de odor fétido, pH vaginal normal (< 4,5) e whiff test negativo, além do aspecto grumoso característico e prurido intenso, mais típicos de candidíase.',
        'Tricomoníase — entra como causa de vulvovaginite; sai pela ausência de corrimento amarelo-esverdeado espumoso e pela bacterioscopia sem protozoários móveis.',
        'Dermatite de contato/alérgica vulvar — entra pelo prurido vulvar intenso; sai pela presença de corrimento vaginal característico e confirmação micológica de hifas/pseudo-hifas.',
        'Líquen simples crônico — entra em casos de prurido vulvar recorrente; sai pela apresentação aguda associada a corrimento típico e fator desencadeante identificável (uso de antibiótico).'
      ],
      context: 'A candidíase vulvovaginal é causada mais comumente por Candida albicans, fazendo parte da microbiota vaginal normal em pequenas quantidades. Fatores como uso de antibióticos de amplo espectro, gestação, diabetes mellitus descompensado e imunossupressão favorecem o crescimento excessivo do fungo, como observado nesta paciente após curso recente de antibioticoterapia.',
      justify: 'O diagnóstico é sustentado pelo quadro clínico típico (prurido vulvar intenso, corrimento branco grumoso em "leite coalhado", hiperemia vulvovaginal), pH vaginal normal (diferente da vaginose bacteriana), whiff test negativo, e confirmado pela identificação de hifas e pseudo-hifas no exame a fresco com KOH 10%.',
      expectedAnamnesis: 'Características do corrimento e do prurido | Fatores desencadeantes recentes (uso de antibióticos, gestação) | Frequência de episódios anteriores (candidíase recorrente ≥ 4 episódios/ano) | Sintomas urinários associados | Hábitos de vestuário e higiene íntima | Fatores de risco para diabetes (história familiar, sintomas sugestivos) | Vida sexual e sintomas no parceiro',
      expectedPhysical: 'Inspeção da vulva buscando hiperemia, edema e escoriações | Exame especular avaliando aspecto do corrimento e das paredes vaginais | Coleta de conteúdo vaginal para pH e exame a fresco com KOH',
      expectedExams: [
        { exam: 'pH vaginal', justify: 'Auxilia na diferenciação com vaginose bacteriana e tricomoníase (permanece normal na candidíase)', expected: 'Normal (< 4,5)' },
        { exam: 'Exame a fresco com KOH 10%', justify: 'Identificar hifas e pseudo-hifas, confirmando o diagnóstico de candidíase', expected: 'Presença de hifas/pseudo-hifas' },
        { exam: 'Glicemia de jejum', justify: 'Investigar diabetes mellitus como fator predisponente, especialmente em casos recorrentes', expected: 'Avaliar normalidade ou alteração compatível com hiperglicemia' }
      ],
      expectedConduct: 'Farmacológica: antifúngico tópico (miconazol ou nistatina creme vaginal) ou fluconazol oral em dose única para episódio agudo não complicado | Não farmacológica: orientar uso de roupas íntimas de algodão, evitar roupas muito justas e umidade prolongada na região genital | Orientações ao paciente: explicar a relação entre o uso do antibiótico e o desequilíbrio da microbiota vaginal, tranquilizando quanto à origem não sexualmente transmissível; orientar que tratamento do parceiro não é rotineiramente necessário, exceto em caso de sintomas nele; orientar investigação adicional (ex.: glicemia) se os episódios forem recorrentes',
      expectedCommunication: 'Acolher o desconforto físico e o incômodo relatado pela paciente | Explicar de forma didática a relação entre antibiótico e candidíase | Esclarecer que não se trata de uma IST, aliviando eventual preocupação nesse sentido | Verificar compreensão do tratamento e orientações de prevenção',
      criticalErrors: [
        'Prescrever tratamento empírico sem exame especular/coleta em paciente com primeira consulta para esse quadro',
        'Não investigar frequência de episódios prévios, deixando de identificar candidíase recorrente que merece investigação adicional',
        'Afirmar incorretamente que se trata de uma IST',
        'Não orientar sobre fatores predisponentes (uso de antibiótico, hábitos de vestuário) e medidas preventivas',
        'Não considerar investigação de diabetes em caso de episódios recorrentes de candidíase'
      ]
    },

    instD: {
      title: 'CHECKLIST — PRURIDO VULVAR E CORRIMENTO ESPESSO (CANDIDÍASE VULVOVAGINAL)',
      sections: [
        { h: 'BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE', items: [
          { item: 'Acolheu o desconforto físico relatado pela paciente', score: 0.5, ref: 'FEBRASGO' },
          { item: 'Esclareceu que não se trata de uma IST, aliviando a preocupação da paciente', score: 1.0, ref: 'Ministério da Saúde — PCDT IST' }
        ]},
        { h: 'BLOCO 2 — ANAMNESE', items: [
          { item: 'Caracterizou o corrimento e investigou uso recente de antibiótico', score: 0.5, ref: 'FEBRASGO' },
          { item: 'Perguntou sobre frequência de episódios anteriores (recorrência)', score: 1.0, ref: 'FEBRASGO' },
          { item: 'Investigou hábitos de vestuário e sintomas no parceiro', score: 0.5, ref: 'FEBRASGO' }
        ]},
        { h: 'BLOCO 3 — EXAME FÍSICO', items: [
          { item: 'Realizou exame especular observando aspecto do corrimento e das paredes vaginais', score: 1.0, ref: 'Ministério da Saúde — PCDT IST' }
        ]},
        { h: 'BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO', items: [
          { item: 'Coletou pH vaginal e exame a fresco com KOH 10% antes de tratar empiricamente', score: 1.5, ref: 'Ministério da Saúde — PCDT IST' },
          { item: 'Considerou glicemia de jejum diante de episódios recorrentes', score: 1.0, ref: 'FEBRASGO' }
        ]},
        { h: 'BLOCO 5 — CONDUTA E ORIENTAÇÃO AO PACIENTE', items: [
          { item: 'Prescreveu antifúngico tópico ou fluconazol oral em dose única', score: 1.5, ref: 'Ministério da Saúde — PCDT IST' },
          { item: 'Orientou que o tratamento do parceiro não é rotineiramente necessário', score: 0.5, ref: 'Ministério da Saúde — PCDT IST' },
          { item: 'Orientou medidas preventivas (roupas de algodão, evitar umidade prolongada)', score: 0.5, ref: 'FEBRASGO' }
        ]}
      ]
    }
  },

  // CASO 9 — LESÃO INTRAEPITELIAL CERVICAL (NIC) / PAPANICOLAU ALTERADO
  {
    id: 9,
    title: 'Retorno para resultado de exame preventivo alterado',
    sub: 'UBS — Atenção Primária',
    tema: 'Ginecologia',
    topic: 'Lesão Intraepitelial Cervical (NIC)',
    level: 'moderado',
    cardAccent: '#AD1457',

    instA: {
      scenario: 'Consulta de retorno agendada na UBS para entrega de resultado de exame citopatológico (Papanicolau).',
      patient: 'Adriana Silva Barbosa, 35 anos, sexo feminino, cozinheira, G2P2A0.',
      complaint: 'Retorna assintomática para receber o resultado do exame preventivo de câncer de colo do útero realizado há 2 semanas.',
      tasks: [
        'Realize a anamnese dirigida, incluindo história de rastreamento prévio e fatores de risco.',
        'Comunique o resultado do exame de forma clara e apropriada.',
        'Formule a conduta adequada diante do resultado apresentado.',
        'Solicite ou explique os próximos exames necessários.',
        'Oriente a paciente sobre o seguimento e esclareça dúvidas.'
      ]
    },

    instB: {
      vitals: {
        PA: '114/72 mmHg',
        FC: '76 bpm',
        FR: '16 irpm',
        Tax: '36,3 °C',
        Peso: '70 kg',
        Altura: '1,63 m',
        IMC: '26,3 kg/m²'
      },
      physicalGeneral: 'Bom estado geral, corada, hidratada, ansiosa ao entrar na sala de consulta.',
      physicalSeg: 'EXAME GINECOLÓGICO (referente à coleta prévia, não repetido nesta consulta): à época da coleta, colo uterino sem lesões macroscópicas visíveis, sem sangramento ao toque da espátula.',
      labs: [
        { test: 'Citologia oncótica (Papanicolau)', val: 'Lesão intraepitelial escamosa de alto grau (HSIL/NIC II-III)', ref: 'Resultado normal esperado: dentro dos limites da normalidade', alt: true },
        { test: 'Teste de DNA-HPV (se realizado na unidade)', val: 'Positivo para HPV de alto risco oncogênico', ref: 'Negativo', alt: true }
      ],
      note: 'O resultado da citologia é a informação central deste caso e deve ser entregue à paciente pelo candidato de forma clara já no início da consulta (é o motivo do retorno). O teste de HPV só deve ser mencionado se disponível na unidade simulada e se o candidato perguntar sobre coteste.',
      patientProfile: 'Cozinheira em restaurante, casada, dois filhos. Realizou o último Papanicolau há 3 anos (rastreamento em atraso). Tabagista (10 cigarros/dia há 15 anos). Refere não ter percebido nenhum sintoma diferente.',
      script: [
        { trigger: 'Ao ser informada do resultado', speech: '(assustada) Doutor(a)... isso é câncer? Eu vou morrer?' },
        { trigger: 'Sobre sintomas', speech: 'Não senti nada diferente, doutor(a), nenhum sangramento, nenhuma dor. Por isso fiquei tão assustada com a notícia.' },
        { trigger: 'Sobre histórico de rastreamento', speech: 'Meu último preventivo foi acho que uns 3 anos atrás, sei que atrasei um pouco por causa da correria do trabalho e dos filhos.' },
        { trigger: 'Sobre tabagismo', speech: 'Sim, eu fumo, mais ou menos uns 10 cigarros por dia, já fumo desde jovem.' },
        { trigger: 'Sobre vida sexual/HPV', speech: 'Eu não sabia que isso tinha relação com uma infecção sexual... isso quer dizer que peguei alguma DST?' },
        { trigger: 'Sobre próximos passos', speech: 'E agora, doutor(a)? O que eu preciso fazer? Vou precisar de cirurgia?' },
        { trigger: 'Pergunta ativa — prognóstico', speech: 'Isso tem cura? Minha vida corre risco?' }
      ],
      hiddenInfo: 'Tem muito medo de exames ginecológicos desde uma experiência desconfortável em uma coleta anterior, o que contribuiu para o atraso no rastreamento — só revela se o candidato perguntar sobre motivos do atraso ou explorar receios | Não é vacinada contra HPV (a vacina não estava disponível em sua época) — só revela se perguntada sobre vacinação | Tem parceiro único há mais de 10 anos e fica confusa sobre como "pegou" HPV — só revela se o candidato não explicar bem a transmissão e ela questionar | Sente vergonha e medo de ser julgada por ter atrasado o exame — só revela essa preocupação se o profissional demonstrar acolhimento',
      actorBehavior: 'Muito ansiosa e assustada ao ouvir "lesão" e associar à palavra câncer — chorar discretamente se a notícia não for comunicada com cuidado. Fazer perguntas repetidas sobre gravidade e prognóstico até sentir-se esclarecida. Colaborativa quando acolhida adequadamente.'
    },

    instC: {
      diagnosis: 'Lesão intraepitelial escamosa de alto grau (HSIL, compatível com NIC II/III), associada à infecção por HPV de alto risco oncogênico — lesão precursora do câncer de colo do útero, ainda não caracterizando neoplasia invasiva.',
      differentials: [
        'Lesão intraepitelial de baixo grau (LSIL/NIC I) — entra como possibilidade de resultado de citologia alterada; sai porque o resultado apresentado neste caso já é especificamente de alto grau (HSIL), com conduta diferente (encaminhamento para colposcopia é comum a ambos, mas o seguimento e a probabilidade de progressão diferem).',
        'Carcinoma invasor de colo do útero — entra como diagnóstico a ser excluído diante de citologia alterada; sai pela ausência de lesão macroscópica visível ao exame especular prévio e pela citologia classificada como lesão intraepitelial (pré-invasiva), não como carcinoma.',
        'Cervicite inespecífica — entra como causa de alterações inflamatórias na citologia; sai pela classificação citológica específica de HSIL, que não se confunde com alterações inflamatórias benignas.'
      ],
      context: 'O câncer de colo do útero é precedido, na grande maioria dos casos, por lesões intraepiteliais escamosas causadas pela infecção persistente por HPV oncogênico. O rastreamento citológico regular permite identificar essas lesões precursoras antes da progressão para câncer invasivo. Esta paciente, com rastreamento em atraso e tabagista (fator de risco independente para progressão da lesão), apresenta resultado de HSIL, exigindo encaminhamento propedêutico adequado.',
      justify: 'O diagnóstico citológico de HSIL (compatível com NIC II/III) indica lesão precursora de alto grau, com risco significativo de progressão para carcinoma invasor se não investigada e tratada adequadamente, justificando encaminhamento para colposcopia com biópsia dirigida para confirmação histológica e definição terapêutica.',
      expectedAnamnesis: 'História de rastreamento citológico prévio (regularidade, resultados anteriores) | Fatores de risco (tabagismo, imunossupressão, múltiplos parceiros, idade de início da vida sexual) | Sintomas ginecológicos atuais (sangramento, corrimento, dor) | História vacinal para HPV | Motivos de eventual atraso no rastreamento, com abordagem não julgadora',
      expectedPhysical: 'Não é necessário repetir exame ginecológico nesta consulta de entrega de resultado, mas deve-se reforçar a necessidade de exame especular na próxima etapa propedêutica (colposcopia)',
      expectedExams: [
        { exam: 'Colposcopia com biópsia dirigida', justify: 'Confirmação histológica da lesão identificada na citologia e definição do grau real de acometimento', expected: 'Identificação de área acetobranca sugestiva de NIC II/III, com biópsia confirmando o grau da lesão' },
        { exam: 'Teste de DNA-HPV (coteste, quando disponível)', justify: 'Auxiliar na triagem e estratificação de risco, sobretudo em determinados contextos e faixas etárias', expected: 'Frequentemente positivo para HPV de alto risco oncogênico em casos de HSIL' }
      ],
      expectedConduct: 'Farmacológica: não há tratamento farmacológico específico para a lesão neste momento; a decisão terapêutica (crioterapia, exérese da zona de transformação - EZT, ou conização) depende da confirmação histológica pela colposcopia/biópsia | Não farmacológica: encaminhamento para colposcopia com biópsia dirigida em serviço de referência; orientar sobre cessação do tabagismo, fator de risco para progressão da lesão | Orientações ao paciente: explicar que HSIL é uma lesão pré-cancerosa, tratável na grande maioria dos casos quando identificada e conduzida adequadamente, e não um câncer já estabelecido; explicar a relação entre HPV e transmissão sexual de forma didática e sem julgamento, esclarecendo que a infecção pode ser assintomática por longos períodos mesmo em relacionamentos estáveis; reforçar a importância de manter o seguimento e retornar para todos os exames agendados',
      expectedCommunication: 'Comunicar o resultado com clareza, mas de forma acolhedora, evitando a palavra "câncer" de forma alarmista quando ainda se trata de lesão precursora | Validar o medo e a ansiedade da paciente diante da notícia | Explicar a transmissão do HPV sem gerar culpa ou suspeita sobre fidelidade do parceiro | Verificar a compreensão do plano de seguimento antes de encerrar a consulta | Reforçar a importância de não faltar às próximas consultas',
      criticalErrors: [
        'Comunicar o resultado de forma alarmista, afirmando categoricamente que a paciente "tem câncer"',
        'Não encaminhar para colposcopia/biópsia diante de resultado de HSIL',
        'Não abordar de forma didática e não estigmatizante a relação entre HPV e transmissão sexual',
        'Ignorar o tabagismo como fator de risco modificável relevante para progressão da lesão',
        'Não acolher a ansiedade da paciente, encerrando a consulta sem espaço para dúvidas'
      ]
    },

    instD: {
      title: 'CHECKLIST — RESULTADO DE HSIL NO PAPANICOLAU (LESÃO INTRAEPITELIAL CERVICAL)',
      sections: [
        { h: 'BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE', items: [
          { item: 'Comunicou o resultado com clareza, evitando a palavra "câncer" de forma alarmista', score: 1.0, ref: 'Ministério da Saúde' },
          { item: 'Validou o medo e a ansiedade da paciente diante da notícia', score: 1.0, ref: 'Ministério da Saúde' }
        ]},
        { h: 'BLOCO 2 — ANAMNESE', items: [
          { item: 'Investigou histórico de rastreamento prévio e motivo do atraso, sem julgamento', score: 0.5, ref: 'Ministério da Saúde' },
          { item: 'Perguntou sobre tabagismo e vacinação para HPV', score: 0.5, ref: 'Ministério da Saúde' }
        ]},
        { h: 'BLOCO 3 — EXAME FÍSICO', items: [
          { item: 'Reconheceu que não é necessário repetir o exame ginecológico nesta consulta de entrega de resultado', score: 0.5, ref: 'Ministério da Saúde' }
        ]},
        { h: 'BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO', items: [
          { item: 'Reconheceu HSIL como indicação obrigatória de colposcopia com biópsia dirigida', score: 2.0, ref: 'Ministério da Saúde' },
          { item: 'Explicou corretamente a relação entre HPV e transmissão sexual, sem gerar suspeita de infidelidade', score: 1.5, ref: 'Ministério da Saúde' }
        ]},
        { h: 'BLOCO 5 — CONDUTA E ORIENTAÇÃO AO PACIENTE', items: [
          { item: 'Encaminhou para colposcopia/biópsia em serviço de referência', score: 1.0, ref: 'Ministério da Saúde' },
          { item: 'Orientou cessação do tabagismo como fator de risco modificável', score: 0.5, ref: 'Ministério da Saúde' },
          { item: 'Reforçou a importância de manter o seguimento e verificou compreensão do plano', score: 0.5, ref: 'Ministério da Saúde' }
        ]}
      ]
    }
  },

  // CASO 10 — PLANEJAMENTO FAMILIAR / ESCOLHA DE MÉTODO CONTRACEPTIVO
  {
    id: 10,
    title: 'Consulta para orientação sobre método contraceptivo',
    sub: 'UBS — Atenção Primária',
    tema: 'Ginecologia',
    topic: 'Planejamento Familiar',
    level: 'fácil',
    cardAccent: '#AD1457',

    instA: {
      scenario: 'Consulta agendada de planejamento familiar na UBS, período da tarde.',
      patient: 'Vanessa Lima Teixeira, 22 anos, sexo feminino, estudante de pedagogia, nuligesta.',
      complaint: 'Busca orientação para iniciar o uso de um método contraceptivo, pois vai começar a vida sexual com o namorado atual.',
      tasks: [
        'Realize a anamnese dirigida, incluindo história clínica relevante para escolha do método.',
        'Realize o exame físico geral pertinente (aferição de PA, IMC).',
        'Discuta com a paciente as opções de métodos contraceptivos disponíveis.',
        'Considere contraindicações e critérios de elegibilidade antes de indicar um método.',
        'Oriente a paciente sobre o método escolhido e sobre prevenção de ISTs.'
      ]
    },

    instB: {
      vitals: {
        PA: '112/70 mmHg',
        FC: '72 bpm',
        FR: '16 irpm',
        Tax: '36,3 °C',
        Peso: '58 kg',
        Altura: '1,66 m',
        IMC: '21,0 kg/m²'
      },
      physicalGeneral: 'Bom estado geral, corada, hidratada, sem alterações relevantes ao exame geral.',
      physicalSeg: 'Exame ginecológico não realizado nesta consulta por não ser estritamente necessário para início de contracepção em paciente assintomática (conforme critérios de elegibilidade da OMS); mamas sem alterações à inspeção.',
      labs: [
        { test: 'Pressão arterial', val: '112/70 mmHg', ref: '< 140/90 mmHg (ausência de contraindicação a estrogênios por hipertensão)', alt: false },
        { test: 'IMC', val: '21,0 kg/m²', ref: '18,5 – 24,9 kg/m²', alt: false }
      ],
      note: 'Não há exames laboratoriais obrigatórios prévios ao início da maioria dos métodos contraceptivos em mulher jovem hígida — se o candidato insistir em solicitar múltiplos exames antes de qualquer indicação, informar que a paciente não tem outras queixas ou fatores de risco que justifiquem investigação laboratorial extensa neste momento.',
      patientProfile: 'Estudante de pedagogia, namoro recente de 4 meses, ainda não iniciou vida sexual com o parceiro atual, mas planeja iniciar em breve. Não fumante. Nega comorbidades. Não deseja engravidar nos próximos anos, pretende terminar a faculdade primeiro.',
      script: [
        { trigger: 'Queixa principal', speech: 'Doutor(a), eu vou começar a namorar... quer dizer, a ter relações com meu namorado, e queria saber qual método contraceptivo é melhor para mim.' },
        { trigger: 'Sobre desejo reprodutivo', speech: 'Não quero engravidar de jeito nenhum agora, quero terminar a faculdade primeiro, isso é bem importante para mim.' },
        { trigger: 'Sobre história de saúde', speech: 'Não tenho nenhuma doença, não fumo, não tomo nenhum remédio contínuo.' },
        { trigger: 'Sobre história familiar', speech: 'Minha mãe teve uma trombose na perna há uns anos, fiquei sabendo por ela outro dia.' },
        { trigger: 'Sobre preferências pessoais', speech: 'Tenho um pouco de medo de engordar com hormônio, uma amiga minha ganhou peso tomando pílula. E também tenho medo de esquecer de tomar todos os dias.' },
        { trigger: 'Sobre proteção contra ISTs', speech: 'Ah, sobre isso eu nem tinha pensado direito, achei que só a pílula já resolvia tudo.' },
        { trigger: 'Pergunta ativa — dúvida', speech: 'Doutor(a), qual método o(a) senhor(a) indicaria para mim, que seja seguro e prático?' }
      ],
      hiddenInfo: 'A mãe teve trombose venosa profunda confirmada aos 45 anos, sem causa aparente identificada — só revela espontaneamente de forma vaga ("problema na perna"), mas se perguntada diretamente sobre "trombose" ou "coágulo" confirma o termo | Tem enxaqueca ocasional sem aura, cerca de 1 vez por mês — só revela se perguntada sobre cefaleias | Nunca usou nenhum método contraceptivo hormonal antes — só revela se perguntada sobre uso prévio | Tem receio de conversar sobre o assunto com a mãe, por isso veio sozinha à consulta — só revela se o candidato perguntar sobre rede de apoio/rede familiar',
      actorBehavior: 'Levemente tímida ao falar sobre início da vida sexual, mas se mostra mais à vontade conforme a consulta avança de forma acolhedora. Demonstra interesse genuíno em entender as opções, faz perguntas de esclarecimento se o candidato usar termos muito técnicos.'
    },

    instC: {
      diagnosis: 'Paciente jovem, saudável, em busca de orientação para início de método contraceptivo — necessidade de avaliação individualizada de critérios de elegibilidade antes da indicação, com atenção à história familiar de trombose venosa profunda.',
      differentials: [
        'Não se aplica um diagnóstico diferencial clássico neste caso de aconselhamento contraceptivo; a "hipótese a ser trabalhada" pelo candidato é a escolha do método mais adequado dentre as opções elegíveis, contrapondo métodos hormonais combinados, métodos apenas com progestagênio e métodos não hormonais/de longa duração.'
      ],
      context: 'O aconselhamento contraceptivo deve ser individualizado, considerando desejo reprodutivo, comorbidades, contraindicações e preferências pessoais da paciente. Nesta consulta, a paciente jovem e nuligesta busca orientação para iniciar a vida sexual de forma protegida, apresentando um fator de atenção relevante (história familiar de trombose venosa profunda em parente de primeiro grau) que deve ser ativamente investigado antes da indicação de métodos com estrogênio.',
      justify: 'A investigação de história pessoal e familiar de eventos tromboembólicos é etapa obrigatória do aconselhamento contraceptivo, pois contraindica ou exige cautela na indicação de métodos contendo estrogênio (conforme critérios de elegibilidade da OMS). A presença de enxaqueca sem aura não contraindica métodos combinados, mas deve ser monitorada. A ausência de outras comorbidades permite ampla gama de opções contraceptivas seguras para esta paciente.',
      expectedAnamnesis: 'Desejo reprodutivo atual e planejamento futuro | História pessoal de tromboembolismo, enxaqueca, hipertensão ou outras comorbidades | História familiar de trombose venosa profunda/tromboembolismo em parentes de primeiro grau | Tabagismo | Preferências pessoais quanto à praticidade e efeitos adversos percebidos | Conhecimento prévio sobre prevenção de ISTs | Vida sexual pregressa e planejamento do início da atividade sexual atual',
      expectedPhysical: 'Aferição de pressão arterial | Cálculo do IMC | Exame físico geral; exame ginecológico não é pré-requisito obrigatório para início da maioria dos métodos contraceptivos em mulher jovem assintomática',
      expectedExams: [
        { exam: 'Pressão arterial', justify: 'Rastrear hipertensão, contraindicação relativa/absoluta a métodos com estrogênio conforme critérios de elegibilidade da OMS', expected: 'Normal, permitindo ampla escolha de métodos' },
        { exam: 'Avaliação clínica de fatores de risco tromboembólico (sem necessidade de exames laboratoriais de rotina em paciente hígida)', justify: 'A história familiar de trombose exige avaliação cuidadosa antes de indicar estrogênio, podendo justificar avaliação hematológica especializada em casos selecionados', expected: 'Definir se há indicação de investigação de trombofilia ou se a história familiar isolada não contraindica o uso' }
      ],
      expectedConduct: 'Farmacológica: diante da história familiar de trombose venosa profunda em parente de primeiro grau, priorizar métodos sem estrogênio — como pílula de progestagênio isolado, implante subdérmico, sistema intrauterino de levonorgestrel (SIU-LNG) ou DIU de cobre — evitando indicação inicial de anticoncepcional combinado até avaliação mais aprofundada, se necessário; dispositivos de longa duração (LARC) devem ser apresentados como opção eficaz e prática, considerando a preferência da paciente por métodos que não dependam de adesão diária | Não farmacológica: apresentar todas as opções disponíveis (hormonais e não hormonais, reversíveis e de longa duração), explicando eficácia, forma de uso e efeitos adversos de cada uma, permitindo escolha compartilhada e informada | Orientações ao paciente: reforçar que nenhum método hormonal ou DIU protege contra infecções sexualmente transmissíveis, sendo o preservativo (masculino ou feminino) essencial para essa proteção, podendo ser associado a outro método para dupla proteção; esclarecer mitos sobre ganho de peso e outros efeitos adversos com informação baseada em evidências',
      expectedCommunication: 'Criar ambiente de confiança e não julgamento para discutir início da vida sexual | Utilizar linguagem acessível e adaptada à idade e ao contexto da paciente | Investigar ativamente contraindicações antes de qualquer indicação, sem pular etapas | Respeitar a autonomia da paciente na escolha final entre as opções elegíveis apresentadas | Verificar compreensão sobre uso correto do método escolhido e sobre prevenção de ISTs',
      criticalErrors: [
        'Não investigar história familiar de trombose antes de indicar método contraceptivo com estrogênio',
        'Indicar anticoncepcional combinado sem investigar contraindicações (tabagismo, enxaqueca com aura, hipertensão, história tromboembólica)',
        'Não mencionar a necessidade de proteção contra ISTs, mesmo com uso de método contraceptivo eficaz para gravidez',
        'Impor um único método sem apresentar alternativas ou sem considerar as preferências da paciente',
        'Solicitar exames laboratoriais extensos e desnecessários que podem atrasar o início da contracepção sem justificativa clínica'
      ]
    },

    instD: {
      title: 'CHECKLIST — ORIENTAÇÃO CONTRACEPTIVA EM PACIENTE JOVEM (PLANEJAMENTO FAMILIAR)',
      sections: [
        { h: 'BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE', items: [
          { item: 'Criou ambiente de confiança e não julgamento para discutir início da vida sexual', score: 1.0, ref: 'FEBRASGO' },
          { item: 'Respeitou a autonomia da paciente na escolha final entre as opções elegíveis', score: 0.5, ref: 'FEBRASGO' }
        ]},
        { h: 'BLOCO 2 — ANAMNESE', items: [
          { item: 'Investigou desejo reprodutivo, comorbidades e tabagismo', score: 0.5, ref: 'OMS — Critérios de Elegibilidade Médica' },
          { item: 'Investigou ativamente história pessoal e familiar de trombose e enxaqueca com aura', score: 1.5, ref: 'OMS — Critérios de Elegibilidade Médica' }
        ]},
        { h: 'BLOCO 3 — EXAME FÍSICO', items: [
          { item: 'Aferiu pressão arterial e calculou o IMC', score: 1.0, ref: 'FEBRASGO' }
        ]},
        { h: 'BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO', items: [
          { item: 'Reconheceu que exame ginecológico não é pré-requisito para início da contracepção em paciente assintomática', score: 0.5, ref: 'OMS — Critérios de Elegibilidade Médica' },
          { item: 'Não solicitou exames laboratoriais desnecessários que atrasassem o início da contracepção', score: 0.5, ref: 'OMS — Critérios de Elegibilidade Médica' }
        ]},
        { h: 'BLOCO 5 — CONDUTA E ORIENTAÇÃO AO PACIENTE', items: [
          { item: 'Evitou indicar método combinado com estrogênio diante da história familiar de trombose', score: 1.5, ref: 'OMS — Critérios de Elegibilidade Médica' },
          { item: 'Apresentou opções sem estrogênio (progestagênio isolado, implante, SIU-LNG, DIU de cobre)', score: 1.0, ref: 'FEBRASGO' },
          { item: 'Orientou uso de preservativo para prevenção de ISTs (dupla proteção)', score: 1.0, ref: 'Ministério da Saúde' },
          { item: 'Esclareceu o mito do ganho de peso com informação baseada em evidências', score: 0.5, ref: 'FEBRASGO' }
        ]}
      ]
    }
  }
];

export default ginecologia;
