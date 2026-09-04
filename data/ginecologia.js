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
      title: 'Miomatose Uterina — Material de Estudo',
      sections: [
        {
          h: 'Definição e Epidemiologia',
          items: [
            { item: 'Leiomiomas uterinos são tumores benignos monoclonais originados do músculo liso do miométrio, sendo a neoplasia pélvica mais comum em mulheres.', score: 1, ref: 'FEBRASGO' },
            { item: 'Prevalência de até 70-80% ao longo da vida reprodutiva; mais comuns e sintomáticos em mulheres negras.', score: 1, ref: 'FEBRASGO' },
            { item: 'Classificados pela localização segundo o sistema FIGO (submucoso, intramural, subseroso), o que orienta o impacto sobre o sangramento e a fertilidade.', score: 2, ref: 'FIGO' }
          ]
        },
        {
          h: 'Quadro Clínico',
          items: [
            { item: 'Sangramento uterino anormal (menorragia) é o sintoma mais frequente, especialmente em miomas submucosos que distorcem a cavidade endometrial.', score: 2, ref: 'FEBRASGO' },
            { item: 'Sintomas compressivos: dor pélvica, aumento da frequência urinária, constipação, dispareunia.', score: 1, ref: 'Williams Ginecologia' },
            { item: 'Pode cursar com infertilidade ou complicações obstétricas quando distorce a cavidade uterina.', score: 1, ref: 'FEBRASGO' }
          ]
        },
        {
          h: 'Diagnóstico',
          items: [
            { item: 'Ultrassonografia transvaginal é o exame de primeira linha, com boa sensibilidade para localizar e medir os miomas.', score: 2, ref: 'FEBRASGO' },
            { item: 'Ressonância magnética é reservada para casos de dúvida diagnóstica ou planejamento cirúrgico complexo.', score: 1, ref: 'Williams Ginecologia' },
            { item: 'Histeroscopia é útil para avaliação e tratamento de miomas submucosos.', score: 1, ref: 'FEBRASGO' }
          ]
        },
        {
          h: 'Diagnóstico Diferencial',
          items: [
            { item: 'Adenomiose, pólipos endometriais, hiperplasia/neoplasia endometrial e coagulopatias devem ser excluídos em toda paciente com SUA.', score: 2, ref: 'FIGO — sistema PALM-COEIN' }
          ]
        },
        {
          h: 'Tratamento',
          items: [
            { item: 'Tratamento clínico: AINEs, ácido tranexâmico, SIU-LNG e anticoncepcionais hormonais para controle do sangramento em casos leves a moderados.', score: 2, ref: 'FEBRASGO' },
            { item: 'Tratamento cirúrgico: miomectomia (histeroscópica, laparoscópica ou abdominal) para preservar fertilidade; histerectomia como tratamento definitivo em mulheres sem desejo reprodutivo e sintomas refratários.', score: 2, ref: 'FEBRASGO' },
            { item: 'Embolização das artérias uterinas é alternativa não cirúrgica eficaz para redução volumétrica e controle do sangramento.', score: 1, ref: 'Williams Ginecologia' }
          ]
        },
        {
          h: 'Orientações e Seguimento',
          items: [
            { item: 'Reforçar a natureza benigna da doença e baixíssimo risco de malignização (leiomiossarcoma é raro).', score: 1, ref: 'FEBRASGO' },
            { item: 'Manter rastreamento de câncer de colo do útero e seguimento ginecológico regular independentemente do tratamento escolhido.', score: 1, ref: 'Ministério da Saúde' }
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
      title: 'Vaginose Bacteriana — Material de Estudo',
      sections: [
        {
          h: 'Definição e Epidemiologia',
          items: [
            { item: 'É a causa mais comum de corrimento vaginal em mulheres em idade reprodutiva, resultante de disbiose vaginal com redução de lactobacilos.', score: 1, ref: 'Ministério da Saúde — PCDT IST' },
            { item: 'Não é classificada como IST, mas associa-se a fatores como múltiplos parceiros, duchas vaginais e tabagismo.', score: 1, ref: 'FEBRASGO' }
          ]
        },
        {
          h: 'Quadro Clínico',
          items: [
            { item: 'Corrimento vaginal acinzentado, homogêneo, de odor fétido característico ("odor de peixe"), mais perceptível após coito ou menstruação.', score: 2, ref: 'Ministério da Saúde — PCDT IST' },
            { item: 'Geralmente pouco associado a prurido ou sinais inflamatórios intensos, diferentemente da candidíase.', score: 1, ref: 'FEBRASGO' }
          ]
        },
        {
          h: 'Diagnóstico',
          items: [
            { item: 'Critérios de Amsel (necessários ao menos 3 de 4): corrimento homogêneo, pH > 4,5, whiff test positivo, presença de clue cells.', score: 2, ref: 'Ministério da Saúde — PCDT IST' },
            { item: 'Escore de Nugent (coloração de Gram) é o padrão-ouro laboratorial, mas pouco utilizado na prática clínica de rotina.', score: 1, ref: 'FEBRASGO' }
          ]
        },
        {
          h: 'Diagnóstico Diferencial',
          items: [
            { item: 'Candidíase vulvovaginal, tricomoníase e cervicites devem ser sistematicamente excluídas.', score: 2, ref: 'Ministério da Saúde — PCDT IST' }
          ]
        },
        {
          h: 'Tratamento',
          items: [
            { item: 'Metronidazol oral 500 mg 12/12h por 7 dias é o tratamento de primeira linha; alternativa tópica com metronidazol gel vaginal.', score: 2, ref: 'Ministério da Saúde — PCDT IST' },
            { item: 'Tratamento do parceiro não é recomendado rotineiramente, pois não altera a taxa de recorrência.', score: 1, ref: 'Ministério da Saúde — PCDT IST' }
          ]
        },
        {
          h: 'Orientações e Prevenção',
          items: [
            { item: 'Orientar suspensão de duchas vaginais e evitar produtos de higiene íntima perfumados, que alteram o pH vaginal.', score: 1, ref: 'FEBRASGO' },
            { item: 'Reforçar que não é uma IST, evitando estigmatização, mas manter orientação sobre prevenção de ISTs em geral.', score: 1, ref: 'Ministério da Saúde' }
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
      title: 'Doença Inflamatória Pélvica (DIP) — Material de Estudo',
      sections: [
        {
          h: 'Definição e Epidemiologia',
          items: [
            { item: 'DIP é a infecção do trato genital superior feminino, geralmente polimicrobiana, mais comum em mulheres jovens sexualmente ativas.', score: 1, ref: 'Ministério da Saúde — PCDT IST' },
            { item: 'Principais agentes etiológicos: Neisseria gonorrhoeae e Chlamydia trachomatis, além de flora anaeróbia e aeróbia vaginal.', score: 1, ref: 'Ministério da Saúde — PCDT IST' }
          ]
        },
        {
          h: 'Quadro Clínico e Critérios Diagnósticos',
          items: [
            { item: 'Critérios mínimos para diagnóstico clínico: dor à palpação do hipogástrio, dor à palpação anexial e dor à mobilização do colo uterino (sinal de Chandelier).', score: 2, ref: 'CDC / Ministério da Saúde' },
            { item: 'Critérios adicionais que aumentam a especificidade: febre > 38,3°C, corrimento cervical/vaginal mucopurulento anormal, leucocitose, PCR/VHS elevados, confirmação laboratorial de infecção cervical por gonococo/clamídia.', score: 2, ref: 'CDC / Ministério da Saúde' }
          ]
        },
        {
          h: 'Diagnóstico',
          items: [
            { item: 'Diagnóstico é primariamente clínico; exames de imagem e laboratoriais auxiliam a confirmar e avaliar gravidade/complicações.', score: 1, ref: 'FEBRASGO' },
            { item: 'USG transvaginal é útil para identificar abscesso tubo-ovariano, uma complicação grave que muda a conduta.', score: 1, ref: 'FEBRASGO' }
          ]
        },
        {
          h: 'Tratamento',
          items: [
            { item: 'Esquema ambulatorial: ceftriaxona IM dose única + doxiciclina oral por 14 dias, associando metronidazol se suspeita de anaeróbios.', score: 2, ref: 'Ministério da Saúde — PCDT IST' },
            { item: 'Critérios de internação: abdome cirúrgico não excluído, gestação, ausência de resposta/intolerância ao tratamento oral, doença grave, presença de abscesso tubo-ovariano.', score: 2, ref: 'Ministério da Saúde — PCDT IST' },
            { item: 'Tratamento e rastreio do(s) parceiro(s) sexual(is) é essencial para evitar reinfecção.', score: 1, ref: 'Ministério da Saúde — PCDT IST' }
          ]
        },
        {
          h: 'Complicações e Prognóstico',
          items: [
            { item: 'Complicações incluem infertilidade por fator tubário, gravidez ectópica, dor pélvica crônica e síndrome de Fitz-Hugh-Curtis (perihepatite).', score: 2, ref: 'FEBRASGO' },
            { item: 'O risco de sequelas aumenta com episódios repetidos e atraso no início do tratamento, reforçando a importância do diagnóstico precoce.', score: 1, ref: 'Williams Ginecologia' }
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
      title: 'Síndrome dos Ovários Policísticos (SOP) — Material de Estudo',
      sections: [
        {
          h: 'Definição e Epidemiologia',
          items: [
            { item: 'SOP é a endocrinopatia mais prevalente em mulheres em idade reprodutiva (8-13%), de etiologia multifatorial envolvendo resistência insulínica e fatores genéticos.', score: 1, ref: 'FEBRASGO' }
          ]
        },
        {
          h: 'Diagnóstico — Critérios de Rotterdam',
          items: [
            { item: 'Diagnóstico requer 2 de 3 critérios: oligo/anovulação, hiperandrogenismo clínico ou laboratorial, e morfologia ovariana policística à USG, após exclusão de outras causas.', score: 2, ref: 'Consenso de Rotterdam / FEBRASGO' },
            { item: 'Diagnósticos diferenciais obrigatórios: hiperplasia adrenal congênita não clássica, hiperprolactinemia, disfunção tireoidiana e, quando indicado, síndrome de Cushing e tumores secretores de andrógenos.', score: 2, ref: 'FEBRASGO' }
          ]
        },
        {
          h: 'Quadro Clínico',
          items: [
            { item: 'Irregularidade menstrual (oligomenorreia/amenorreia), hirsutismo, acne e, com frequência, sobrepeso/obesidade e acantose nigricans (marcador de resistência insulínica).', score: 2, ref: 'FEBRASGO' }
          ]
        },
        {
          h: 'Comorbidades Associadas',
          items: [
            { item: 'Resistência insulínica, risco aumentado de diabetes mellitus tipo 2, dislipidemia, síndrome metabólica e maior risco cardiovascular a longo prazo.', score: 2, ref: 'FEBRASGO / ESHRE Guideline' },
            { item: 'Maior risco de infertilidade anovulatória, hiperplasia endometrial (por anovulação crônica) e complicações obstétricas quando engravida.', score: 1, ref: 'ESHRE Guideline' }
          ]
        },
        {
          h: 'Tratamento',
          items: [
            { item: 'Mudança de estilo de vida (dieta e exercício) é a base do tratamento, especialmente em pacientes com sobrepeso/obesidade.', score: 2, ref: 'ESHRE Guideline' },
            { item: 'Anticoncepcionais hormonais combinados são primeira linha para regularização menstrual e controle do hiperandrogenismo em mulheres sem desejo gestacional imediato.', score: 2, ref: 'FEBRASGO' },
            { item: 'Metformina indicada em casos de resistência insulínica/pré-diabetes; indutores de ovulação (como letrozol) são utilizados quando há desejo de gestação.', score: 1, ref: 'ESHRE Guideline' }
          ]
        },
        {
          h: 'Orientações e Seguimento',
          items: [
            { item: 'Abordar impacto psicológico da doença (autoestima, ansiedade, depressão são mais prevalentes nessas pacientes) e oferecer suporte adequado.', score: 1, ref: 'ESHRE Guideline' },
            { item: 'Seguimento a longo prazo com rastreio metabólico periódico (glicemia, perfil lipídico) é recomendado.', score: 1, ref: 'FEBRASGO' }
          ]
        }
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
      title: 'Síndrome Climatérica — Material de Estudo',
      sections: [
        {
          h: 'Definição e Epidemiologia',
          items: [
            { item: 'Climatério é a transição entre a fase reprodutiva e não reprodutiva; menopausa é definida retrospectivamente após 12 meses consecutivos de amenorreia, ocorrendo em média entre 45-55 anos.', score: 1, ref: 'FEBRASGO' }
          ]
        },
        {
          h: 'Quadro Clínico',
          items: [
            { item: 'Sintomas vasomotores (fogachos, sudorese noturna) são os mais característicos e frequentes, presentes em até 80% das mulheres no climatério.', score: 2, ref: 'FEBRASGO' },
            { item: 'Síndrome geniturinária da menopausa: atrofia vaginal, dispareunia, sintomas urinários (urgência, incontinência de esforço), decorrentes do hipoestrogenismo.', score: 2, ref: 'FEBRASGO' },
            { item: 'Alterações de humor (irritabilidade, ansiedade, labilidade emocional) e distúrbios do sono são comuns nessa fase.', score: 1, ref: 'FEBRASGO' }
          ]
        },
        {
          h: 'Diagnóstico',
          items: [
            { item: 'Diagnóstico é predominantemente clínico, baseado na idade, padrão menstrual e sintomatologia; dosagens hormonais (FSH/estradiol) são reservadas para casos de dúvida diagnóstica.', score: 2, ref: 'FEBRASGO' }
          ]
        },
        {
          h: 'Riscos Associados à Pós-Menopausa',
          items: [
            { item: 'Aumento do risco cardiovascular e de osteoporose após a menopausa, relacionados à perda do efeito protetor estrogênico.', score: 2, ref: 'FEBRASGO' },
            { item: 'Manutenção dos rastreamentos oncológicos (mamografia, citologia oncótica) é fundamental nesta fase da vida.', score: 1, ref: 'Ministério da Saúde' }
          ]
        },
        {
          h: 'Tratamento',
          items: [
            { item: 'Terapia hormonal sistêmica é o tratamento mais eficaz para sintomas vasomotores moderados a intensos, devendo ser individualizada conforme risco-benefício (idade, tempo desde a menopausa, antecedentes pessoais/familiares de câncer de mama e eventos tromboembólicos).', score: 2, ref: 'FEBRASGO / Sociedade Norte-Americana de Menopausa' },
            { item: 'Estrogênio vaginal em baixa dose é eficaz e seguro para atrofia genital isolada, mesmo em mulheres com contraindicação à TH sistêmica.', score: 2, ref: 'FEBRASGO' },
            { item: 'Medidas não farmacológicas (atividade física, dieta, exercícios de assoalho pélvico) e alternativas não hormonais devem ser consideradas conforme o perfil da paciente.', score: 1, ref: 'FEBRASGO' }
          ]
        },
        {
          h: 'Orientações e Seguimento',
          items: [
            { item: 'Abordar ativamente sintomas geniturinários e sexuais, frequentemente subnotificados por constrangimento da paciente.', score: 1, ref: 'FEBRASGO' },
            { item: 'Reforçar rastreamento cardiovascular e oncológico regular no seguimento da mulher climatérica.', score: 1, ref: 'Ministério da Saúde' }
          ]
        }
      ]
    }
  }
];

export default ginecologia;
