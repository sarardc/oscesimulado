// Casos de Dermatologia (10)
const dermatologia = [
  {
    id: 1,
    title: 'Pinta nas costas que mudou de cor nos últimos meses',
    sub: 'UBS — Atenção Primária',
    tema: 'Dermatologia',
    topic: 'melanoma extensivo superficial',
    level: 'moderado',
    cardAccent: '#3E2C41',
    instA: {
      scenario: 'Atenção Primária — UBS urbana. Consultório de clínica geral, turno matutino. Consulta agendada por demanda espontânea.',
      patient: 'R.M.S., 54 anos, masculino, professor de educação física, fototipo II (pele clara, olhos claros). Sem comorbidades conhecidas.',
      complaint: 'Refere que a esposa notou que uma "pinta" nas costas mudou de aparência nos últimos meses.',
      tasks: [
        'Realize a anamnese dirigida à queixa dermatológica.',
        'Ao receber o impresso fotográfico, realize a fotodescrição da lesão utilizando terminologia semiológica dermatológica formal.',
        'Formule a hipótese diagnóstica principal e ao menos dois diagnósticos diferenciais.',
        'Estabeleça a conduta diagnóstica e o encaminhamento adequados.',
        'Oriente o paciente quanto ao diagnóstico provável, à prevenção e ao seguimento.'
      ]
    },
    instB: {
      vitals: {
        PA: '128/82 mmHg',
        FC: '74 bpm',
        FR: '16 irpm',
        Tax: '36,4 °C',
        Peso: '82 kg',
        Altura: '1,78 m',
        IMC: '25,9 kg/m²'
      },
      physicalGeneral: 'Bom estado geral, lúcido e orientado, corado, hidratado, anictérico, acianótico, afebril. Fototipo II de Fitzpatrick, com efélides difusas em face e ombros e dano actínico crônico em dorso.',
      physicalSeg: 'PELE (DORSO): ver impresso fotográfico — fornecido somente mediante solicitação de exame da pele/lesão. À palpação, a lesão é plana, sem nodularidade ou infiltração palpável | PELE (DEMAIS SEGMENTOS): numerosas efélides e lentigos solares em ombros e dorso superior; poucos nevos melanocíticos pequenos (< 5 mm), redondos, simétricos e homogêneos em tronco e membros; nenhum outro nevo com atipia evidente | CADEIAS LINFONODAIS: axilas, cervicais e inguinais livres — sem linfonodos palpáveis, sem massas | COURO CABELUDO, PALMAS, PLANTAS E REGIÃO UNGUEAL: sem lesões pigmentadas | MUCOSA ORAL: sem lesões pigmentadas | RESTANTE DO EXAME SEGMENTAR: sem alterações',
      labs: [],
      photo: {
        src: 'img/estacoes/melanoma-dorso.webp',
        title: 'Fotografia da lesão (dorso)',
        alt: 'Fotografia do dorso de paciente masculino, com régua milimetrada posicionada ao lado de uma lesão pigmentada.',
        caption: 'Dorso do paciente, em posição ortostática, de costas para o examinador. Régua milimetrada posicionada junto à lesão como referência de tamanho.',
        request: 'Realize a fotodescrição da lesão indicada pela régua, utilizando terminologia dermatológica formal (topografia, lesão elementar, número, forma, tamanho, bordas, cor, superfície e pele ao redor).'
      },
      note: 'Entregar o impresso de sinais vitais e exame físico geral no início da estação. Entregar o IMPRESSO FOTOGRÁFICO da lesão SOMENTE quando o candidato solicitar verbalmente examinar a pele/lesão; ao entregá-lo, pedir ao candidato que realize a fotodescrição em voz alta. NÃO fornecer a descrição da lesão — o gabarito da fotodescrição está na aba do avaliador (Gabarito da Fotodescrição). Se o candidato palpar a lesão, informar: "plana, sem nodularidade ou infiltração palpável". Se o candidato solicitar exames laboratoriais (hemograma, LDH, marcadores tumorais) ou exames de imagem de estadiamento nesta fase, informar "não disponível / não indicado neste momento" e ANOTAR como conduta desnecessária, pois estadiamento por imagem não está indicado em lesão cutânea suspeita ainda não biopsiada. Se o candidato indicar biópsia por shave, curetagem, eletrocauterização ou crioterapia da lesão, ANOTAR como ERRO CRÍTICO.',
      patientProfile: 'Roberto M. S., 54 anos, masculino, professor de educação física em escola pública, casado, dois filhos. Reside em zona urbana. Ensino superior completo.',
      script: [
        { trigger: 'Queixa principal / abertura', speech: 'Doutor, minha esposa vive implicando com uma pinta que eu tenho nas costas. Ela diz que mudou, que tá maior e mais escura. Eu nem consigo ver direito, é bem no meio das costas.' },
        { trigger: 'Há quanto tempo a lesão existe', speech: 'Essa pinta eu tenho desde novo, acho que desde os vinte e poucos anos. Mas era pequenininha, do tamanho de uma cabeça de alfinete, e clarinha.' },
        { trigger: 'O que mudou e em quanto tempo', speech: 'Nos últimos seis, sete meses ela cresceu bastante e ficou com uns pedaços quase pretos, e outros mais claros. Ela também ficou meio "esparramada", sabe? Com o contorno todo irregular.' },
        { trigger: 'Sintomas locais — coça, dói, sangra', speech: 'Doer não dói. Sangrar nunca sangrou. Às vezes coça um pouquinho quando eu suo, mas é raro.' },
        { trigger: 'Exposição solar / história ocupacional', speech: 'Eu dou aula de educação física, então fico a manhã toda na quadra descoberta. Faço isso há uns 25 anos. E quando era mais novo eu ia muito pra praia, ficava o dia inteiro. Já me queimei muito, umas vezes até descascou e deu bolha.' },
        { trigger: 'Uso de fotoproteção', speech: 'Protetor eu passo às vezes, quando lembro. Chapéu eu quase nunca uso porque atrapalha na aula.' },
        { trigger: 'Câmara de bronzeamento', speech: 'Não, isso eu nunca usei.' },
        { trigger: 'Antecedentes pessoais de câncer de pele', speech: 'Eu nunca tirei nada da pele, não. Nunca tive nada assim.' },
        { trigger: 'História familiar', speech: 'Meu tio por parte de pai teve um câncer de pele, mas eu não sei dizer qual tipo. Ele operou e ficou bom.' },
        { trigger: 'Outras lesões / sintomas sistêmicos', speech: 'Outras pintas eu tenho um monte, mas essas nunca mudaram. Emagrecer eu não emagreci, tô comendo bem, não tenho dor nenhuma.' },
        { trigger: 'Pergunta ativa (após demonstrar suspeita)', speech: 'Doutor, o senhor tá com uma cara preocupada... isso pode ser câncer de pele?' },
        { trigger: 'Pergunta ativa (após indicação de biópsia)', speech: 'E se for isso mesmo, doutor, eu vou morrer? Tem cura? Quanto tempo eu vou ter que esperar pra saber?' }
      ],
      hiddenInfo: 'História familiar de câncer de pele em tio paterno — só revelar se o candidato perguntar especificamente sobre casos de câncer (de pele ou melanoma) na família | História de queimaduras solares graves com bolhas na adolescência — só revelar se o candidato perguntar especificamente sobre queimaduras de sol ou exposição solar no passado | O paciente NÃO se examina e nunca fez exame de pele com médico — só revelar se perguntado sobre rastreamento/autoexame prévio',
      actorBehavior: 'Inicialmente descontraído e minimizador ("é só uma pinta, a mulher que é exagerada"). Colaborativo, responde apenas ao que for perguntado. À medida que percebe seriedade do médico (silêncio, uso de lupa, indicação de biópsia), muda o tom: fica tenso, faz as perguntas ativas com voz mais baixa e apreensiva. Se o candidato comunicar de forma abrupta ("é câncer"), demonstrar susto e permanecer calado por alguns segundos, para testar a capacidade de acolhimento. Se o candidato acolher e explicar em linguagem acessível, relaxar e perguntar sobre os próximos passos.'
    },
    instC: {
      diagnosis: 'Melanoma cutâneo, provável subtipo extensivo superficial, localizado em dorso — lesão pigmentada com critérios ABCDE positivos e história de mudança progressiva em 6 meses. Diagnóstico de certeza depende de exame histopatológico obtido por biópsia excisional.',
      photoDescription: 'Topografia: dorso superior, região paravertebral/interescapular DIREITA, próxima à linha média, no nível do terço médio das escápulas | Lesão elementar: mácula (lesão plana, sem relevo visível na foto e sem infiltração à palpação) pigmentada | Número: lesão única com estas características | Forma: irregular, bilobulada (aspecto "em oito"), com chanfradura/entalhe no contorno — ASSIMETRIA em ambos os eixos (critério A) | Tamanho: aproximadamente 15 x 10 mm no maior e no menor eixo, estimado pela régua milimetrada — diâmetro > 6 mm (critério D) | Bordas: irregulares, recortadas e denteadas, com reentrâncias; delimitação nítida em parte do contorno (critério B) | Cor: heterogênea/policrômica — castanho-escuro a negro, com áreas de castanho mais claro e pequeno foco central mais claro e acinzentado (critério C) | Superfície: sem ulceração, sem crosta, sem sangramento e sem descamação visíveis | Pele ao redor: dano actínico crônico, com numerosas efélides e lentigos solares em ombros e dorso superior; poucos nevos pequenos, redondos e homogêneos (ex.: nevo puntiforme castanho-escuro no dorso superior esquerdo) | Comparação: a lesão destoa nitidamente dos demais nevos do paciente — sinal do "patinho feio" | Síntese esperada: mácula pigmentada única, assimétrica, de bordas irregulares, policrômica e com diâmetro > 6 mm em pele com fotodano — lesão melanocítica suspeita de melanoma (ABCDE positivo; o "E" vem da anamnese)',
      differentials: [
        'Nevo melanocítico displásico (atípico) — pode apresentar assimetria e variação de cor, mas caracteristicamente é estável ao longo do tempo e não apresenta crescimento progressivo nem heterogeneidade de cor e irregularidade de contorno tão marcadas; só o histopatológico diferencia com segurança.',
        'Ceratose seborreica pigmentada — lesão benigna comum nesta faixa etária, mas tipicamente tem aspecto "colado à pele", superfície verrucosa/aveludada, bordas bem delimitadas e pseudocistos córneos, ausentes neste caso.',
        'Carcinoma basocelular pigmentado — pode ser escuro e assimétrico, mas costuma apresentar brilho perlado, telangiectasias e bordas peroladas, além de tendência à ulceração central; ausentes aqui.',
        'Nevo azul ou hematoma/lentigo solar — descartados pela mudança progressiva documentada, pela policromia e pela irregularidade de bordas.'
      ],
      context: 'Homem de 54 anos, fototipo II, com exposição solar ocupacional crônica e história de queimaduras solares graves na juventude, apresenta lesão pigmentada em dorso com mudança de tamanho, cor e forma nos últimos 6 meses. O dorso é a topografia mais frequente do melanoma em homens no Brasil. O quadro configura lesão pigmentada suspeita, exigindo biópsia excisional e encaminhamento prioritário.',
      justify: 'A lesão preenche múltiplos critérios do ABCDE: Assimetria em dois eixos (contorno bilobulado), Bordas irregulares e recortadas, Cor heterogênea (castanho-claro, castanho-escuro e negro, com foco central acinzentado), Diâmetro maior que 6 mm (cerca de 15 mm) e Evolução documentada em 6 meses — sendo a evolução o critério de maior valor preditivo. A lesão ainda destoa do padrão dos demais nevos do paciente (sinal do patinho feio). Somam-se fatores de risco maiores: fototipo II, exposição solar intermitente intensa com queimaduras com bolhas na adolescência, exposição crônica ocupacional e história familiar de câncer de pele. O foco central mais claro e acinzentado pode corresponder a área de regressão, achado associado a melanoma, a ser confirmado na dermatoscopia. A ausência de linfonodomegalia e de sintomas sistêmicos é compatível com doença ainda localizada, o que não reduz a urgência da investigação.',
      expectedAnamnesis: 'Caracterizar tempo de existência da lesão e, sobretudo, o tempo e o padrão de MUDANÇA (critério E do ABCDE) | Investigar mudança de tamanho, cor, forma e relevo | Investigar sintomas locais: prurido, dor, sangramento, ulceração, crosta | Investigar fototipo e história de queimaduras solares com bolhas, especialmente na infância/adolescência | Investigar exposição solar ocupacional e recreativa e uso de fotoproteção | Investigar uso de câmara de bronzeamento artificial | Investigar antecedente pessoal de câncer de pele ou de lesões removidas previamente | Investigar história familiar de melanoma ou de câncer de pele em parentes de primeiro e segundo grau | Investigar número e estabilidade dos demais nevos e existência de outras lesões novas ou em mudança | Investigar imunossupressão (transplante, HIV, uso de imunossupressores) | Realizar revisão de sistemas dirigida a sintomas de doença avançada: perda ponderal, dor óssea, cefaleia, tosse, adenomegalias percebidas pelo paciente',
      expectedPhysical: 'Sinais vitais: dentro da normalidade — não excluem malignidade e não devem ser usados como critério de tranquilização | Inspeção da lesão sob boa iluminação, aplicando sistematicamente o ABCDE e a regra do patinho feio | Descrição semiológica formal esperada: ver Gabarito da Fotodescrição — mácula pigmentada única, bilobulada e assimétrica, de bordas irregulares, policrômica (castanho-escuro a negro), com cerca de 15 mm no maior eixo, sem ulceração, em dorso paravertebral direito | Palpação da lesão para avaliar infiltração/elevação e da pele perilesional | Exame de TODA a superfície cutânea (exame de corpo inteiro), incluindo couro cabeludo, região retroauricular, palmas, plantas, espaços interdigitais, região ungueal e mucosas — pela possibilidade de melanoma sincrônico | Palpação das cadeias linfonodais regionais de drenagem (axilares bilaterais — o dorso paravertebral drena para ambas as axilas — e cervicais, por se tratar de dorso alto) e das demais cadeias | Palpação abdominal em busca de hepatomegalia (estadiamento clínico grosseiro) | Uso de dermatoscópio, se disponível na estação, ou verbalização de que a dermatoscopia complementa a avaliação',
      expectedExams: [
        { exam: 'Biópsia excisional da lesão com margem lateral estreita de 1 a 3 mm e profundidade até tecido celular subcutâneo', justify: 'Padrão-ouro para o diagnóstico de lesão pigmentada suspeita de melanoma; permite avaliação da espessura de Breslow em toda a lesão, indispensável para o estadiamento e para a definição das margens de ampliação e da indicação de linfonodo sentinela.', expected: 'Laudo histopatológico com diagnóstico de melanoma, subtipo histológico, espessura de Breslow em mm, presença ou ausência de ulceração, índice mitótico, invasão angiolinfática/perineural e status das margens.' },
        { exam: 'Dermatoscopia da lesão e das demais lesões pigmentadas', justify: 'Aumenta significativamente a acurácia diagnóstica em relação ao exame a olho nu e auxilia na seleção de quais lesões biopsiar; ferramenta de triagem, nunca substitui a biópsia diante de lesão clinicamente suspeita.', expected: 'Padrão multicomponente com rede pigmentar atípica, projeções irregulares, véu azul-esbranquiçado e/ou áreas de regressão.' },
        { exam: 'Mapeamento corporal total / exame dermatológico de corpo inteiro', justify: 'Pacientes com melanoma têm risco aumentado de segundo melanoma primário sincrônico ou metacrônico e frequentemente apresentam múltiplos nevos atípicos.', expected: 'Sem outras lesões suspeitas neste caso; documentação fotográfica para seguimento.' },
        { exam: 'Estadiamento complementar (LDH, radiografia/TC de tórax, US de cadeias linfonodais, pesquisa de linfonodo sentinela)', justify: 'NÃO indicado antes do resultado histopatológico. A extensão do estadiamento é definida pela espessura de Breslow, ulceração e estadio clínico, sob responsabilidade do serviço especializado. Solicitar imagem de estadiamento em lesão ainda não biopsiada é conduta inadequada e retarda o diagnóstico.', expected: 'A definir pelo serviço de referência após o laudo. ⚠️ Os limiares de indicação de pesquisa de linfonodo sentinela (Breslow ≥ 0,8 mm ou qualquer espessura com ulceração) e o estadiamento derivam do sistema AJCC 8ª edição, de origem estrangeira, adotado pelas diretrizes brasileiras (SBD/SBCO/INCA).' }
      ],
      expectedConduct: 'Farmacológica: não há tratamento farmacológico na atenção primária. NÃO prescrever corticoide tópico, antifúngico, ceratolítico ou qualquer tratamento tópico sobre a lesão suspeita, pois mascara o quadro e retarda o diagnóstico. | Não farmacológica / procedimento: indicar biópsia EXCISIONAL com margem estreita (1–3 mm) como conduta diagnóstica; se o serviço de origem não dispuser de condição técnica, encaminhar para realização em serviço habilitado, sem tentar shave, curetagem, cauterização ou crioterapia. | Encaminhamento: encaminhamento prioritário/urgente à dermatologia ou cirurgia oncológica, com preenchimento adequado do formulário de referência descrevendo os critérios ABCDE e o tempo de evolução, para garantir classificação de risco na regulação; após confirmação, seguimento em serviço oncológico para ampliação de margens e eventual pesquisa de linfonodo sentinela. | Orientações ao paciente: explicar em linguagem acessível que a lesão apresenta características que exigem retirada e análise em laboratório; explicar que o diagnóstico definitivo só sai com o exame do material; orientar fotoproteção rigorosa (filtro solar FPS ≥ 30 reaplicado a cada 2 horas, chapéu de aba larga, camiseta com manga, evitar exposição entre 10h e 16h); ensinar autoexame de pele mensal e a regra do ABCDE; orientar exame de pele em familiares de primeiro grau. | Seguimento: retorno garantido com o resultado do anatomopatológico; não dar alta antes do resultado; seguimento dermatológico periódico ao menos anual e vitalício após diagnóstico de melanoma; sinais de alarme para retorno imediato: crescimento rápido, sangramento, ulceração, aparecimento de nódulos ao redor da cicatriz ou de caroços na axila.',
      expectedCommunication: 'Apresentação: cumprimentar, apresentar-se pelo nome e função, confirmar o nome do paciente e explicar o objetivo da consulta | Solicitar consentimento verbal antes de examinar a pele e garantir privacidade e exposição adequada com respeito ao pudor | Escuta ativa: permitir que o paciente relate a queixa sem interrupções na abertura, usar perguntas abertas antes das fechadas, manter contato visual e checar a compreensão | Comunicação do diagnóstico: usar linguagem acessível, evitar jargão ("lesão melanocítica atípica"), nomear a suspeita de forma honesta e sem antecipar certeza — explicar que existe suspeita de câncer de pele e que somente o exame do material confirmará | Não prometer benignidade nem usar falsa tranquilização ("não é nada, fique tranquilo") | Acolher a reação emocional: nomear o medo, permitir silêncio, perguntar como o paciente está se sentindo diante da notícia | Explicar os próximos passos de forma concreta (o que é a biópsia, quanto tempo leva o resultado, quando retorna) e verificar se restaram dúvidas',
      criticalErrors: [
        'Tranquilizar o paciente e liberar sem investigação, atribuindo a lesão a "pinta comum" ou "sinal de nascença", retardando o diagnóstico de melanoma.',
        'Indicar biópsia por shave, curetagem, eletrocauterização, crioterapia ou laser sobre a lesão pigmentada suspeita — destrói ou fragmenta a lesão e impede a mensuração da espessura de Breslow, inviabilizando o estadiamento.',
        'Prescrever tratamento tópico (corticoide, antifúngico, ceratolítico) sobre a lesão suspeita como teste terapêutico, mascarando o quadro.',
        'Deixar de examinar o restante da superfície cutânea e as cadeias linfonodais regionais, perdendo lesões sincrônicas ou doença regional.',
        'Não encaminhar em caráter prioritário, ou encaminhar sem descrever a suspeita clínica no formulário, resultando em fila de espera de rotina para lesão potencialmente letal.',
        'Comunicar a suspeita de câncer de forma abrupta, sem acolhimento, ou ao contrário, omitir a suspeita e não obter adesão do paciente ao procedimento e ao retorno.'
      ]
    },
    instD: {
      title: 'CHECKLIST — LESÃO PIGMENTADA EM DORSO COM MUDANÇA RECENTE (MELANOMA EXTENSIVO SUPERFICIAL)',
      sections: [
        {
          h: 'BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE',
          items: [
            { item: 'Apresentou-se pelo nome e função e confirmou o nome do paciente antes de iniciar o atendimento', score: 0.5, ref: 'CFM — Código de Ética Médica, 2019; Diretrizes Curriculares Nacionais de Medicina, MEC 2014' },
            { item: 'Solicitou permissão explícita ao paciente antes de examinar a pele e providenciou exposição/privacidade adequadas', score: 0.5, ref: 'CFM — Código de Ética Médica, 2019 (autonomia e consentimento)' },
            { item: 'Perguntou ativamente ao paciente como ele estava se sentindo diante da suspeita e/ou se tinha dúvidas antes de encerrar', score: 0.5, ref: 'INCA — Comunicação de Notícias Difíceis em Oncologia, 2020' }
          ]
        },
        {
          h: 'BLOCO 2 — ANAMNESE',
          items: [
            { item: 'Investigou há quanto tempo a lesão existe E em quanto tempo ocorreu a mudança (critério "E" — evolução)', score: 1.0, ref: 'SBD — Consenso Brasileiro de Câncer da Pele Melanoma, 2023; INCA 2022' },
            { item: 'Investigou sintomas locais da lesão: prurido, dor, sangramento ou ulceração', score: 0.5, ref: 'SBD — Câncer da Pele Melanoma, 2023' },
            { item: 'Investigou história de exposição solar (ocupacional e/ou recreativa), queimaduras solares prévias e uso de fotoproteção', score: 0.5, ref: 'INCA — Prevenção do Câncer de Pele, 2022; MS — Cadernos de Atenção Básica nº 29' },
            { item: 'Investigou história familiar de melanoma ou câncer de pele e/ou antecedente pessoal de lesões cutâneas removidas', score: 0.5, ref: 'SBD — Consenso Brasileiro de Melanoma, 2023' }
          ]
        },
        {
          h: 'BLOCO 3 — EXAME FÍSICO',
          items: [
            { item: 'Realizou a fotodescrição da lesão com terminologia dermatológica formal e os critérios ABCDE (topografia, lesão elementar, assimetria, bordas, cor, diâmetro)', score: 1.0, ref: 'SBD — Consenso Brasileiro de Câncer da Pele Melanoma, 2023' },
            { item: 'Examinou toda a superfície cutânea (corpo inteiro), incluindo couro cabeludo, palmas, plantas e região ungueal', score: 0.5, ref: 'SBD — Campanha Nacional de Prevenção ao Câncer da Pele, 2023' },
            { item: 'Palpou as cadeias linfonodais regionais de drenagem (axilares e cervicais)', score: 0.5, ref: 'INCA — Condutas em Melanoma Cutâneo, 2022' }
          ]
        },
        {
          h: 'BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
          items: [
            { item: 'Formulou explicitamente a hipótese diagnóstica de melanoma / lesão pigmentada altamente suspeita de malignidade', score: 1.0, ref: 'SBD — Consenso Brasileiro de Melanoma, 2023; INCA 2022' },
            { item: 'Citou ao menos dois diagnósticos diferenciais pertinentes (nevo displásico, ceratose seborreica pigmentada, CBC pigmentado)', score: 0.5, ref: 'SBD — Diagnóstico Diferencial das Lesões Pigmentadas, 2023' },
            { item: 'Indicou biópsia EXCISIONAL com margem estreita como conduta diagnóstica, evitando explicitamente shave/curetagem/cauterização', score: 0.5, ref: 'SBD/SBCO — Consenso Brasileiro de Melanoma, 2023' }
          ]
        },
        {
          h: 'BLOCO 5 — CONDUTA E ORIENTAÇÃO AO PACIENTE',
          items: [
            { item: 'Encaminhou em caráter prioritário à dermatologia/cirurgia oncológica, descrevendo a suspeita clínica no encaminhamento', score: 1.0, ref: 'MS — Protocolos de Encaminhamento da Atenção Básica para Atenção Especializada — Dermatologia, 2016; Lei nº 12.732/2012' },
            { item: 'Explicou o diagnóstico provável e o procedimento em linguagem acessível, sem falsa tranquilização e sem afirmar certeza diagnóstica', score: 0.5, ref: 'INCA — Comunicação de Notícias Difíceis, 2020; CFM 2019' },
            { item: 'Orientou fotoproteção (FPS ≥ 30, chapéu, roupas, evitar sol 10h–16h) e/ou autoexame de pele e retorno com o resultado', score: 0.5, ref: 'INCA — Prevenção e Detecção Precoce do Câncer de Pele, 2022; SBD 2023' }
          ]
        }
      ]
    }
  },

  {
    id: 2,
    title: 'Caroço escuro na perna que cresceu rápido e sangrou',
    sub: 'Ambulatório de Clínica Médica — Atenção Secundária',
    tema: 'Dermatologia',
    topic: 'melanoma nodular',
    level: 'moderado',
    cardAccent: '#1F2A44',
    instA: {
      scenario: 'Atenção Secundária — Ambulatório geral de hospital municipal. Consultório, turno vespertino. Paciente encaminhado pela UBS como "verruga inflamada".',
      patient: 'J.M.P., 63 anos, masculino, aposentado (ex-alfaiate), fototipo III, hipertenso em uso de losartana.',
      complaint: 'Refere um "caroço preto" na perna direita que cresceu rápido nos últimos três meses e sangrou ao esbarrar na toalha.',
      tasks: [
        'Realize a anamnese dirigida à lesão cutânea.',
        'Realize o exame físico dermatológico pertinente e, ao receber o impresso fotográfico, faça a fotodescrição da lesão com terminologia semiológica formal.',
        'Formule a hipótese diagnóstica principal e ao menos dois diagnósticos diferenciais.',
        'Proponha a investigação diagnóstica adequada.',
        'Comunique a suspeita diagnóstica ao paciente e estabeleça o plano de seguimento.'
      ]
    },
    instB: {
      vitals: {
        PA: '142/88 mmHg',
        FC: '78 bpm',
        FR: '17 irpm',
        Tax: '36,6 °C',
        Peso: '76 kg',
        Altura: '1,70 m',
        IMC: '26,3 kg/m²'
      },
      physicalGeneral: 'Bom estado geral, lúcido e orientado, corado, hidratado, anictérico, acianótico, afebril. Fototipo III. Marcha preservada. Sem sinais de desnutrição ou perda ponderal.',
      physicalSeg: 'PELE (FACE ANTERIOR DA PERNA DIREITA, TERÇO MÉDIO): ver impresso fotográfico — fornecido somente mediante solicitação de exame da lesão. À palpação: nódulo FIRME/endurecido, com cerca de 5 mm de altura, base levemente infiltrada, móvel sobre planos profundos, indolor | PELE (DEMAIS SEGMENTOS): pilificação masculina abundante em membros inferiores; poucos nevos melanocíticos, todos pequenos e homogêneos; lentigos solares em antebraços; sem outras lesões suspeitas | REGIÃO ENTRE A LESÃO E A REGIÃO INGUINAL: sem nódulos subcutâneos palpáveis (sem satelitose ou metástases em trânsito evidentes) | CADEIAS LINFONODAIS: linfonodo inguinal direito de aproximadamente 1,0 cm, fibroelástico, móvel, indolor; demais cadeias (inguinal esquerda, axilares, cervicais) livres | ABDOME: plano, flácido, indolor, sem visceromegalias | APARELHO RESPIRATÓRIO: murmúrio vesicular universalmente audível, sem ruídos adventícios | APARELHO CARDIOVASCULAR: ritmo cardíaco regular, 2 tempos, bulhas normofonéticas, sem sopros',
      labs: [],
      photo: {
        src: 'img/estacoes/melanoma-nodular-perna.webp',
        title: 'Fotografia da lesão (perna direita)',
        alt: 'Fotografia aproximada da pele da perna, com régua milimetrada abaixo de uma lesão escura elevada.',
        caption: 'Face anterior da perna direita, terço médio, em close. Régua milimetrada posicionada abaixo da lesão como referência de tamanho.',
        request: 'Realize a fotodescrição da lesão utilizando terminologia dermatológica formal (topografia, lesão elementar, número, forma, tamanho, bordas, cor, superfície e pele ao redor).'
      },
      note: 'Entregar o impresso de sinais vitais e exame físico geral no início. Entregar o IMPRESSO FOTOGRÁFICO SOMENTE mediante solicitação verbal de examinar a lesão; ao entregá-lo, pedir ao candidato que realize a fotodescrição em voz alta. NÃO fornecer a descrição da lesão — o gabarito está na aba do avaliador (Gabarito da Fotodescrição). Se o candidato palpar a lesão, informar: "nódulo firme, com cerca de 5 mm de altura, indolor". O achado de linfonodo inguinal direito de 1,0 cm só deve ser informado SE o candidato palpar/solicitar avaliação das cadeias linfonodais — não informar espontaneamente. Se o candidato solicitar exames laboratoriais gerais ou imagem de estadiamento antes da biópsia, informar "não disponível nesta estação" e anotar. Se o candidato indicar cauterização, crioterapia, exérese por shave ou tratamento tópico da lesão, ANOTAR como ERRO CRÍTICO.',
      patientProfile: 'José Maria P., 63 anos, masculino, aposentado, viúvo, três filhos, mora com uma filha. Ex-alfaiate, trabalhou a vida toda em ateliê fechado. Ensino fundamental incompleto. Hipertenso em acompanhamento na UBS.',
      script: [
        { trigger: 'Queixa principal / abertura', speech: 'Doutor, eu tenho esse carocinho preto aqui na perna. Antes não tinha nada, aí do nada apareceu e não parou mais de crescer. Semana passada eu esbarrei a toalha e ele sangrou, me deu um susto.' },
        { trigger: 'Tempo de evolução', speech: 'Faz uns três meses, mais ou menos. No começo era do tamanho de uma cabeça de fósforo, agora tá do tamanho de um caroço de feijão e alto assim, saliente.' },
        { trigger: 'Se havia pinta prévia no local', speech: 'Não senhor, ali não tinha nada. A pele era lisinha, do jeito do resto da perna. Ele nasceu já assim, preto.' },
        { trigger: 'Sangramento / ulceração', speech: 'Sangrou umas duas vezes. É pouquinho, mancha a roupa. E agora ficou essa casquinha em cima que sai e volta.' },
        { trigger: 'Dor e prurido', speech: 'Doer não dói, não. Coçar também não coça. É só o sangramento mesmo que me preocupa.' },
        { trigger: 'Exposição solar', speech: 'Eu trabalhei a vida toda de alfaiate, dentro do ateliê costurando, não pegava muito sol não. De vez em quando ia pra praia com os netos, mas era raro.' },
        { trigger: 'Antecedentes pessoais e medicações', speech: 'Eu tenho pressão alta, tomo losartana todo dia. Fora isso, nada. Não tenho diabetes, não fumo, não bebo.' },
        { trigger: 'História familiar', speech: 'Câncer na família... minha mãe teve câncer no intestino. De pele eu não conheço ninguém, não.' },
        { trigger: 'Sintomas sistêmicos', speech: 'Emagrecer não emagreci. Tô comendo bem. Não tenho tosse, não tenho dor nos ossos, nada disso. Só a perna mesmo.' },
        { trigger: 'O que já fez / atendimento prévio', speech: 'Na UBS o doutor olhou de longe e disse que devia ser uma verruga inflamada, mandou eu passar uma pomada. Passei quase um mês, não adiantou nada, ele só cresceu.' },
        { trigger: 'Pergunta ativa (após demonstrar suspeita)', speech: 'Doutor, mas o outro médico disse que era verruga... o senhor acha que é outra coisa? É coisa ruim?' },
        { trigger: 'Pergunta ativa (após indicação de biópsia)', speech: 'Vai precisar cortar? E se for câncer, doutor, já espalhou? Eu demorei demais pra vir?' }
      ],
      hiddenInfo: 'O paciente já foi avaliado na UBS há cerca de um mês, recebeu o rótulo de "verruga inflamada" e usou pomada tópica sem melhora — só revelar se o candidato perguntar sobre atendimentos anteriores, tratamentos já tentados ou uso de medicações tópicas | A lesão surgiu em pele previamente SEM nevo (lesão de novo) — só revelar se o candidato perguntar especificamente se já existia alguma pinta ou marca naquele local | Mãe com câncer colorretal (não relacionado) — só revelar se perguntado sobre história familiar de câncer',
      actorBehavior: 'Preocupado, mas contido e respeitoso; tende a aceitar passivamente o que o médico diz ("se o senhor acha que não é nada, tá bom"). Fala pouco, responde apenas ao perguntado, com vocabulário simples. Demonstra alívio quando o médico o leva a sério e frustração discreta ao relatar o atendimento anterior, se perguntado. Ao ouvir a suspeita de câncer, fica visivelmente assustado, leva a mão à boca e faz a segunda pergunta ativa com voz embargada, expressando culpa por ter demorado. Se o candidato culpabilizá-lo ("o senhor demorou muito"), demonstrar retraimento; se acolher, colaborar plenamente com o plano.'
    },
    instC: {
      diagnosis: 'Melanoma cutâneo, provável subtipo nodular, em face anterior de perna direita, com linfonodo inguinal ipsilateral palpável — suspeita de doença regional. Diagnóstico definitivo dependente de exame histopatológico.',
      photoDescription: 'Topografia: face anterior da perna direita, terço médio | Lesão elementar: NÓDULO (lesão sólida, elevada, cupuliforme/em cúpula), pigmentado | Número: lesão única | Forma: arredondada, praticamente simétrica — o ABCDE clássico é pouco útil aqui | Tamanho: aproximadamente 9 x 9 mm de diâmetro, estimado pela régua milimetrada (≈ 9 divisões de 1 mm) | Bordas: regulares e bem delimitadas, com fina orla pigmentada castanho-escura/negra na base | Cor: negro-violácea / negro-azulada, relativamente homogênea, com reflexos acinzentados | Superfície: lisa, tensa e brilhante, com áreas esbranquiçadas reticuladas; crostas hemáticas negras — uma maior (≈ 2–3 mm) no quadrante direito e duas puntiformes (polo superior e inferior esquerdo), compatíveis com sangramento/erosão prévios | Pele ao redor: normocrômica, com pilificação abundante; sem lesões-satélite, sem halo inflamatório e sem componente macular pigmentado periférico | Síntese esperada: nódulo pigmentado negro-violáceo, único, cupuliforme, ~9 mm, com crostas hemáticas — critério EFG (Elevado, Firme, em crescimento) positivo: suspeita de melanoma nodular, mesmo com simetria e bordas regulares',
      differentials: [
        'Granuloma piogênico (hemangioma capilar lobular) — nódulo de crescimento rápido que sangra facilmente, porém é tipicamente vermelho-vivo, friável e frequentemente relacionado a trauma prévio; a coloração negro-violácea e a idade do paciente tornam esta hipótese menos provável, mas é o principal simulador clínico do melanoma nodular.',
        'Carcinoma basocelular pigmentado — pode formar nódulo escuro e ulcerado, mas costuma apresentar borda perlada, telangiectasias e crescimento mais lento (anos); a evolução em três meses fala contra.',
        'Ceratose seborreica irritada ou nevo melanocítico traumatizado — lesões benignas que podem sangrar após trauma, porém não explicam o surgimento de novo e o crescimento progressivo em três meses.',
        'Hemangioma trombosado / angioqueratoma — lesão azulada que pode sangrar, mas é estável no tempo e não cresce progressivamente.'
      ],
      context: 'Homem de 63 anos, fototipo III, sem exposição solar significativa, apresenta nódulo pigmentado de crescimento rápido (três meses) em pele previamente sã, com sangramento e ulceração superficial, além de linfonodo inguinal ipsilateral palpável. A lesão foi previamente rotulada como verruga inflamada na atenção primária e tratada com pomada, com atraso diagnóstico de cerca de um mês.',
      justify: 'O melanoma nodular corresponde a cerca de 15–20% dos melanomas, mas responde por parcela desproporcional das mortes, porque cresce verticalmente desde o início e frequentemente NÃO preenche os critérios clássicos do ABCDE — é simétrico, de bordas regulares e de cor uniforme. Por isso deve ser aplicado o critério EFG: Elevado, Firme à palpação e Growing (crescimento progressivo em semanas a meses). A lesão deste paciente é elevada (nódulo cupuliforme), firme, de crescimento documentado em três meses, surgida de novo em pele sã, com sangramento e crosta — todos sinais de alarme. A ausência de exposição solar intensa não afasta o diagnóstico, já que o melanoma nodular tem associação menos dependente da exposição solar cumulativa. O linfonodo inguinal ipsilateral palpável de 1,0 cm levanta suspeita de acometimento regional e obriga avaliação especializada com ultrassonografia e eventual punção, além de contraindicar postergar a investigação. O uso prévio de tratamento tópico sem diagnóstico é um exemplo clássico de armadilha diagnóstica que retarda o cuidado.',
      expectedAnamnesis: 'Caracterizar o tempo de surgimento da lesão e a velocidade de crescimento (semanas/meses) | Perguntar especificamente se já existia pinta ou marca prévia no local (lesão de novo vs. sobre nevo) | Investigar sangramento espontâneo ou ao mínimo trauma, ulceração e formação de crosta | Investigar dor e prurido | Investigar atendimentos anteriores, diagnósticos prévios recebidos e tratamentos já utilizados sobre a lesão | Investigar exposição solar, fototipo e queimaduras prévias | Investigar antecedente pessoal e familiar de melanoma ou câncer de pele | Investigar imunossupressão e uso de medicações | Realizar revisão de sistemas dirigida à doença metastática: perda de peso, astenia, dor óssea, cefaleia persistente, alterações visuais, tosse, nódulos percebidos em virilha ou abdome',
      expectedPhysical: 'Sinais vitais: PA discretamente elevada em paciente hipertenso, sem repercussão para o caso dermatológico | Inspeção da lesão em boa iluminação, aplicando o critério EFG (Elevação, Firmeza, Crescimento) além do ABCDE, reconhecendo que o ABCDE pode ser negativo no melanoma nodular | Descrição semiológica formal esperada (ver Gabarito da Fotodescrição): nódulo (lesão elementar) único, cupuliforme, arredondado e simétrico, de bordas regulares e bem delimitadas, negro-violáceo, com cerca de 9 mm de diâmetro, superfície brilhante com áreas esbranquiçadas e crostas hemáticas negras, e orla pigmentada castanho-escura na base | Palpação da lesão avaliando consistência (firme/endurecida) e infiltração da base | Inspeção e palpação de TODO o trajeto entre a lesão e a cadeia linfonodal de drenagem, buscando lesões-satélite e metástases em trânsito | Palpação obrigatória das cadeias linfonodais inguinais bilaterais — achado esperado: linfonodo inguinal direito de 1,0 cm, fibroelástico, móvel e indolor | Palpação das demais cadeias linfonodais e do abdome (hepatomegalia) | Exame de toda a superfície cutânea, incluindo plantas, região interdigital e couro cabeludo',
      expectedExams: [
        { exam: 'Biópsia excisional da lesão com margem estreita (1–3 mm) incluindo tecido celular subcutâneo', justify: 'Conduta diagnóstica padrão para lesão nodular pigmentada suspeita; permite mensurar a espessura de Breslow, essencial ao estadiamento. Em lesões grandes ou em topografias em que a exérese total é inviável, admite-se biópsia incisional da área mais espessa, sempre em serviço especializado.', expected: 'Melanoma nodular, com Breslow habitualmente elevado (frequentemente > 2 mm), presença de ulceração e índice mitótico aumentado.' },
        { exam: 'Ultrassonografia da cadeia linfonodal inguinal direita, com punção aspirativa por agulha fina ou core biopsy do linfonodo se características suspeitas', justify: 'Há linfonodo regional palpável; a avaliação ultrassonográfica define características de suspeição (perda do hilo, arredondamento, vascularização periférica) e orienta a necessidade de punção para confirmar doença regional, o que muda o estadiamento e a conduta cirúrgica.', expected: 'Linfonodo com ou sem alterações estruturais; se confirmada metástase, indica-se linfadenectomia/tratamento sistêmico em serviço oncológico, e não pesquisa de linfonodo sentinela.' },
        { exam: 'Dermatoscopia', justify: 'Auxilia a distinguir melanoma nodular de granuloma piogênico, hemangioma trombosado e CBC pigmentado; entretanto, diante de nódulo com critério EFG positivo, a dermatoscopia negativa NÃO afasta a indicação de biópsia.', expected: 'Padrão vascular polimorfo, véu azul-esbranquiçado, ausência de rede pigmentar e áreas azul-acinzentadas homogêneas.' },
        { exam: 'Estadiamento sistêmico (LDH sérico, TC de tórax/abdome/pelve, avaliação de SNC)', justify: 'Indicado APÓS confirmação histopatológica, sob condução do serviço especializado, especialmente diante de doença regional suspeita. Não deve ser solicitado na consulta inicial, pois não substitui nem antecede a biópsia. ⚠️ Os critérios de estadiamento seguem o sistema AJCC 8ª edição, de origem estrangeira, adotado pelas diretrizes brasileiras (SBD/SBCO/INCA).', expected: 'A definir conforme o estadio; LDH elevado sugere doença avançada.' }
      ],
      expectedConduct: 'Farmacológica: nenhuma medicação tópica ou sistêmica sobre a lesão. Suspender explicitamente qualquer pomada em uso sobre a lesão, orientando o paciente de que o tratamento tópico não é adequado e retardou o diagnóstico. Manter a losartana para controle pressórico habitual. | Não farmacológica / procedimento: indicar biópsia excisional com margem estreita, sem cauterização, crioterapia, shave ou curetagem; proteger a lesão de trauma até o procedimento (curativo não aderente, evitar atrito). | Encaminhamento: encaminhamento com prioridade máxima à cirurgia oncológica/dermatologia oncológica, descrevendo no formulário o critério EFG, o tempo de evolução, o sangramento e o linfonodo inguinal palpável, para garantir classificação de risco na regulação; aplicar a Lei nº 12.732/2012 (Lei dos 60 dias), que assegura início do primeiro tratamento em até 60 dias da confirmação diagnóstica. | Orientações ao paciente: explicar em linguagem simples que a lesão não tem características de verruga e que precisa ser retirada e analisada; explicar o que é biópsia; orientar sobre fotoproteção e autoexame; orientar exame de pele nos filhos; não culpabilizar o paciente pelo atraso. | Seguimento: retorno agendado com o resultado do anatomopatológico e garantia de contato; sinais de alarme para retorno imediato: sangramento volumoso, crescimento acelerado, aparecimento de novos caroços ao redor da lesão ou na virilha, febre, emagrecimento; seguimento dermatológico e oncológico vitalício após confirmação.',
      expectedCommunication: 'Apresentação: apresentar-se pelo nome e função, confirmar a identificação do paciente e explicar o que será feito na consulta | Solicitar permissão antes de examinar a perna e as regiões inguinais, garantindo privacidade | Escuta ativa: permitir relato inicial sem interromper, usar perguntas abertas, validar a preocupação do paciente com o sangramento | Não desqualificar o colega que a atendeu previamente; reconhecer que a lesão precisa ser reavaliada sem emitir juízo depreciativo sobre o serviço de origem | Comunicação do diagnóstico: usar linguagem acessível, informar honestamente a suspeita de câncer de pele sem afirmar certeza antes da biópsia, verificar a compreensão pedindo que o paciente repita o plano | Acolher a culpa expressa pelo paciente pelo atraso, explicitando que ele agiu corretamente ao retornar e que o passo seguinte é o que importa | Perguntar como o paciente está se sentindo e se há dúvidas antes de encerrar',
      criticalErrors: [
        'Manter o rótulo de lesão benigna (verruga, ceratose, hemangioma) e liberar o paciente sem biópsia, perpetuando o atraso diagnóstico em melanoma nodular — subtipo de pior prognóstico.',
        'Prescrever ou manter tratamento tópico (pomada, ácido, antibiótico) sobre a lesão como teste terapêutico.',
        'Realizar ou indicar cauterização, crioterapia, curetagem ou exérese por shave da lesão, impedindo a mensuração da espessura de Breslow.',
        'Deixar de palpar as cadeias linfonodais inguinais, perdendo o achado de linfonodo regional suspeito que altera o estadiamento e a urgência da conduta.',
        'Encaminhar em fila de rotina, sem prioridade e sem descrever a suspeita clínica, ou não garantir retorno para entrega do resultado.',
        'Afirmar categoricamente ao paciente que a lesão é benigna ("não é nada, fique tranquilo"), gerando falsa segurança e risco de abandono do seguimento.'
      ]
    },
    instD: {
      title: 'CHECKLIST — NÓDULO PIGMENTADO DE CRESCIMENTO RÁPIDO EM PERNA (MELANOMA NODULAR)',
      sections: [
        {
          h: 'BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE',
          items: [
            { item: 'Apresentou-se pelo nome e função e confirmou a identificação do paciente', score: 0.5, ref: 'CFM — Código de Ética Médica, 2019' },
            { item: 'Solicitou permissão antes de examinar a lesão e as regiões inguinais, preservando a privacidade', score: 0.5, ref: 'CFM — Código de Ética Médica, 2019 (autonomia e pudor)' },
            { item: 'Acolheu a preocupação/culpa do paciente sem culpabilizá-lo pelo atraso e sem desqualificar o atendimento prévio', score: 0.5, ref: 'INCA — Comunicação de Notícias Difíceis em Oncologia, 2020' }
          ]
        },
        {
          h: 'BLOCO 2 — ANAMNESE',
          items: [
            { item: 'Caracterizou o tempo de surgimento e a velocidade de crescimento da lesão (crescimento em ~3 meses)', score: 1.0, ref: 'SBD — Consenso Brasileiro de Câncer da Pele Melanoma, 2023' },
            { item: 'Perguntou se havia pinta/lesão prévia no local, identificando tratar-se de lesão surgida "de novo"', score: 0.5, ref: 'SBD — Melanoma Nodular, critério EFG, 2023' },
            { item: 'Investigou sangramento, ulceração ou crosta na lesão', score: 0.5, ref: 'INCA — Detecção Precoce do Câncer de Pele, 2022' },
            { item: 'Investigou atendimentos e tratamentos prévios realizados sobre a lesão (informação escondida — pomada na UBS)', score: 0.5, ref: 'MS — Cadernos de Atenção Básica nº 29 — Dermatologia, 2016' }
          ]
        },
        {
          h: 'BLOCO 3 — EXAME FÍSICO',
          items: [
            { item: 'Realizou a fotodescrição da lesão com terminologia dermatológica formal (topografia, nódulo, cor, dimensão, superfície, presença de crostas hemáticas)', score: 1.0, ref: 'SBD — Consenso Brasileiro de Melanoma, 2023' },
            { item: 'Palpou a lesão avaliando consistência/infiltração e/ou aplicou o critério EFG (elevado, firme, em crescimento)', score: 0.5, ref: 'SBD — Melanoma Nodular, 2023' },
            { item: 'Palpou as cadeias linfonodais inguinais bilateralmente e/ou pesquisou lesões-satélite no trajeto de drenagem', score: 0.5, ref: 'INCA — Condutas em Melanoma Cutâneo, 2022' }
          ]
        },
        {
          h: 'BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
          items: [
            { item: 'Formulou a hipótese de melanoma (nodular) / lesão maligna, afastando explicitamente o rótulo prévio de verruga', score: 1.0, ref: 'SBD — Consenso Brasileiro de Melanoma, 2023; INCA 2022' },
            { item: 'Citou ao menos dois diagnósticos diferenciais pertinentes (granuloma piogênico, CBC pigmentado, hemangioma trombosado)', score: 0.5, ref: 'SBD — Diagnóstico Diferencial de Lesões Nodulares Pigmentadas, 2023' },
            { item: 'Indicou biópsia excisional como conduta diagnóstica e evitou explicitamente cauterização/crioterapia/shave', score: 0.5, ref: 'SBD/SBCO — Consenso Brasileiro de Melanoma, 2023' }
          ]
        },
        {
          h: 'BLOCO 5 — CONDUTA E ORIENTAÇÃO AO PACIENTE',
          items: [
            { item: 'Encaminhou com prioridade à cirurgia oncológica/dermatologia, descrevendo a suspeita e o linfonodo palpável', score: 1.0, ref: 'MS — Protocolos de Encaminhamento AB → Atenção Especializada, Dermatologia, 2016; Lei nº 12.732/2012' },
            { item: 'Suspendeu/contraindicou o tratamento tópico em uso sobre a lesão', score: 0.5, ref: 'SBD — Consenso Brasileiro de Melanoma, 2023' },
            { item: 'Explicou o plano em linguagem acessível, definiu retorno com o resultado e orientou sinais de alarme e/ou fotoproteção', score: 0.5, ref: 'INCA — Prevenção e Detecção Precoce do Câncer de Pele, 2022' }
          ]
        }
      ]
    }
  },

  {
    id: 3,
    title: 'Mancha escura na sola do pé há mais de um ano',
    sub: 'UBS — Atenção Primária (zona rural)',
    tema: 'Dermatologia',
    topic: 'melanoma acral lentiginoso',
    level: 'moderado',
    cardAccent: '#4A3B2A',
    instA: {
      scenario: 'Atenção Primária — UBS de zona rural. Consultório, turno matutino. Paciente comparece por insistência da filha.',
      patient: 'J.B.S., 66 anos, masculino, lavrador, fototipo IV (pele morena/parda), sem comorbidades em acompanhamento.',
      complaint: 'Refere uma "mancha escura" na sola do pé esquerdo, que percebeu há mais de um ano e que aumentou de tamanho.',
      tasks: [
        'Realize a anamnese dirigida à lesão cutânea.',
        'Realize o exame físico dermatológico pertinente e, ao receber o impresso fotográfico, faça a fotodescrição da lesão com terminologia semiológica formal.',
        'Formule a hipótese diagnóstica principal e ao menos dois diagnósticos diferenciais.',
        'Proponha a conduta diagnóstica e o encaminhamento adequados.',
        'Oriente o paciente sobre a suspeita, os próximos passos e o seguimento.'
      ]
    },
    instB: {
      vitals: {
        PA: '136/84 mmHg',
        FC: '72 bpm',
        FR: '16 irpm',
        Tax: '36,3 °C',
        Peso: '68 kg',
        Altura: '1,70 m',
        IMC: '23,5 kg/m²'
      },
      physicalGeneral: 'Bom estado geral, lúcido e orientado, corado, hidratado, anictérico, acianótico, afebril. Fototipo IV de Fitzpatrick. Deambula sem auxílio, sem claudicação. Pés com boa higiene, unhas aparadas, sem calosidades significativas.',
      physicalSeg: 'PELE (REGIÃO PLANTAR DO PÉ ESQUERDO): ver impresso fotográfico — fornecido somente mediante solicitação de exame do pé/lesão. À palpação: lesão predominantemente plana, com discreto espessamento na porção central, indolor, sem infiltração profunda | PELE (DEMAIS SEGMENTOS): sem nevos atípicos; sem lesões pigmentadas em tronco, membros ou face | UNHAS DAS MÃOS E DOS PÉS: sem melanoníquia, sem distrofia ungueal, sem sinal de Hutchinson | MUCOSA ORAL E CONJUNTIVAS: sem lesões pigmentadas | REGIÃO INTERDIGITAL DOS PÉS: descamação discreta interdigital bilateral, sem maceração ou fissura | CADEIAS LINFONODAIS: inguinais, poplíteas, axilares e cervicais livres — sem linfonodos palpáveis | APARELHO VASCULAR PERIFÉRICO: pulsos pediosos e tibiais posteriores palpáveis e simétricos; sensibilidade tátil preservada ao toque | ABDOME: sem visceromegalias',
      labs: [],
      photo: {
        src: 'img/estacoes/melanoma-acral-planta.webp',
        title: 'Fotografia da lesão (planta do pé esquerdo)',
        alt: 'Fotografia da face plantar do antepé esquerdo e dos pododáctilos, com uma lesão escura próxima à base dos dedos.',
        caption: 'Face plantar do pé esquerdo, vista com os dedos voltados para cima (hálux à direita da imagem). Sem régua: use a largura do 2º pododáctilo (~2 cm) como referência de tamanho.',
        request: 'Realize a fotodescrição da lesão utilizando terminologia dermatológica formal (topografia, lesão elementar, número, forma, tamanho, bordas, cor, superfície e pele ao redor).'
      },
      note: 'Entregar o impresso de sinais vitais e exame físico geral no início. Entregar o IMPRESSO FOTOGRÁFICO SOMENTE mediante solicitação verbal de examinar o pé/a lesão; ao entregá-lo, pedir ao candidato que realize a fotodescrição em voz alta. NÃO fornecer a descrição da lesão — o gabarito está na aba do avaliador (Gabarito da Fotodescrição). Se o candidato palpar a lesão, informar: "plana, com discreto espessamento central, indolor". Se o candidato solicitar exame das unhas, do pé contralateral, das mucosas ou das cadeias linfonodais, fornecer os achados correspondentes descritos em physicalSeg. Se o candidato indicar raspagem, curetagem, exérese por shave, crioterapia, uso de ácidos ceratolíticos ou tratamento antifúngico da lesão, ANOTAR como ERRO CRÍTICO. Se o candidato atribuir a lesão a "calo", "mancha de nascença" ou "hematoma" e liberar o paciente, ANOTAR como ERRO CRÍTICO.',
      patientProfile: 'João B. S., 66 anos, masculino, lavrador (agricultura familiar), casado, cinco filhos. Reside em zona rural, a 40 km da sede do município. Analfabeto funcional. Nunca fez consulta dermatológica.',
      script: [
        { trigger: 'Queixa principal / abertura', speech: 'Doutor, é essa mancha aqui embaixo do pé. Minha filha viu quando eu tava lavando o pé e ficou insistindo pra eu vir. Eu acho que não é nada não, mas ela não me deixou em paz.' },
        { trigger: 'Tempo de evolução', speech: 'Faz mais de ano que eu reparei nela. Talvez uns dois anos. Só que ela era do tamanho de um grão de feijão e agora tá bem maior, do tamanho de uma moeda de dez centavos, e ficou com essa ponta pra baixo.' },
        { trigger: 'Se existia antes / lesão prévia', speech: 'Antes ali era pele normal. Eu não tinha marca nenhuma no pé, não. Ela foi aparecendo devagarzinho e foi espalhando.' },
        { trigger: 'Trauma prévio / hematoma', speech: 'Bater eu bato o pé toda hora na roça, mas machucado grande naquele lugar eu não lembro de ter tido, não. E se fosse sangue de pancada já tinha saído, né? Faz muito tempo que ela tá aí.' },
        { trigger: 'Dor, coceira, ferida', speech: 'Doer não dói. Coçar não coça. Ferida nunca abriu, nunca saiu sangue nem pus. Por isso que eu acho que não é nada.' },
        { trigger: 'Uso de calçado / trabalho', speech: 'Eu trabalho na roça desde menino. Uso chinelo quase sempre, bota só quando vou pro mato. Muita vez ando descalço em casa mesmo.' },
        { trigger: 'Exposição solar e fototipo', speech: 'Sol eu pego o dia todo, a vida inteira. Mas eu sou moreno, doutor, nunca me queimei, nunca fiquei vermelho. Diz que quem é da minha cor não pega essas coisas de pele, né?' },
        { trigger: 'Antecedentes pessoais / diabetes', speech: 'Eu nunca fui em médico direito. Diabetes eu não sei se tenho, nunca fiz exame. Pressão também nunca mediram direito. Não tomo remédio nenhum.' },
        { trigger: 'História familiar', speech: 'Na minha família ninguém teve câncer de pele que eu saiba. Meu pai morreu velho, de idade mesmo.' },
        { trigger: 'Sintomas sistêmicos', speech: 'Tô comendo bem, não emagreci. Trabalho todo dia normal, não canso mais do que o de costume. Não tenho tosse nem dor nos ossos.' },
        { trigger: 'Pergunta ativa (após demonstrar suspeita)', speech: 'Mas doutor, isso não é só um calo escuro de tanto pisar? Eu ando muito descalço, achei que era da terra.' },
        { trigger: 'Pergunta ativa (após indicação de biópsia/encaminhamento)', speech: 'Doutor, a cidade grande é longe demais, quase quatro horas de estrada. Eu preciso mesmo ir? Vão cortar meu pé? Eu não posso parar de trabalhar, doutor.' }
      ],
      hiddenInfo: 'A lesão está em crescimento progressivo e centrífugo há mais de um ano, tendo praticamente dobrado de tamanho — só revelar de forma precisa se o candidato perguntar especificamente se a mancha mudou de tamanho ou comparar o tamanho atual com o inicial | Nunca teve trauma significativo no local e a lesão surgiu em pele previamente sã — só revelar se perguntado especificamente sobre pancada, machucado, hematoma ou lesão prévia no local | O paciente nunca fez exame de glicemia e não sabe se tem diabetes — só revelar se perguntado sobre comorbidades ou exames prévios | Barreira de acesso: reside a 40 km da sede e o serviço de referência fica a ~4 horas de distância — só revelar se o candidato perguntar sobre condições de deslocamento, apoio familiar ou dificuldades para comparecer ao encaminhamento',
      actorBehavior: 'Minimizador e resistente no início, cordial, fala pausado e com vocabulário simples e regional. Repete que "não é nada" e que veio por pressão da filha. Demonstra a crença cultural de que pessoas morenas/negras não têm câncer de pele — se o candidato reforçar essa crença, mostrar alívio e sinalizar intenção de não retornar. Preocupa-se muito mais com a perda de dias de trabalho e com a distância do serviço do que com a doença. Se o candidato explicar com respeito, sem infantilizar e sem usar termos técnicos, e abordar a barreira de acesso (transporte sanitário/TFD, apoio da filha), passa a colaborar e aceita o encaminhamento. Se o candidato for apressado ou tecnicista, permanecer evasivo e responder com monossílabos.'
    },
    instC: {
      diagnosis: 'Melanoma acral lentiginoso em região plantar do pé esquerdo — mácula pigmentada plantar com critérios ABCDE positivos e crescimento progressivo há mais de um ano, em paciente de fototipo IV. Diagnóstico definitivo dependente de exame histopatológico.',
      photoDescription: 'Topografia: região plantar do antepé ESQUERDO, na base do 2º pododáctilo (sob a cabeça do 2º metatarso), entre o hálux e o 3º dedo — área de apoio/carga | Lesão elementar: mácula (lesão plana) pigmentada; superfície lisa, discretamente brilhante | Número: lesão única | Forma: irregular, assimétrica em ambos os eixos — porção superior arredondada que se afila em projeção angular "em ponta" no polo inferior (aspecto em gota/triangular) | Tamanho: aproximadamente 20 x 17 mm, estimado pela largura do 2º pododáctilo (~2 cm), já que não há régua — diâmetro > 6 mm | Bordas: irregulares e angulosas, nítidas na maior parte do contorno | Cor: heterogênea — castanho-avermelhado na porção superior-central, castanho-escuro e negro, mais intenso no polo inferior | Superfície: sem ulceração, sem sangramento, sem crosta, sem pontos hemorrágicos puntiformes e sem hiperceratose sobre a lesão | Pele ao redor: plantar de aspecto normal, sem calosidade, sem sinais inflamatórios; pododáctilos e unhas visíveis sem alterações | Síntese esperada: mácula pigmentada plantar única, assimétrica, de bordas irregulares, policrômica e > 6 mm, em área acral de carga — suspeita de melanoma acral lentiginoso (ABCDE positivo; a evolução vem da anamnese). Em lesão acral, considerar também a regra de que lesão plantar > 7 mm ou em mudança deve ser biopsiada',
      differentials: [
        'Hematoma subcórneo plantar (talon noir) — pigmentação escura pós-traumática frequente em região plantar, porém tipicamente apresenta pontos hemorrágicos puntiformes, bordas bem definidas, migra distalmente com o crescimento da camada córnea e desaparece em semanas a poucos meses; a evolução de mais de um ano com crescimento progressivo afasta a hipótese.',
        'Nevo melanocítico acral benigno — comum em região plantar, mas costuma ser menor que 7 mm, simétrico, homogêneo, estável ao longo dos anos e, à dermatoscopia, apresenta padrão paralelo dos SULCOS; nesta lesão a pigmentação acompanha as CRISTAS, achado altamente sugestivo de melanoma acral.',
        'Hiperpigmentação pós-inflamatória ou pigmentação plantar étnica/fisiológica — pode ocorrer em fototipos altos, mas é geralmente simétrica, bilateral, de bordas difusas e sem crescimento progressivo nem componente infiltrado.',
        'Verruga plantar pigmentada ou úlcera neuropática pigmentada do pé diabético — afastadas pela ausência de solução de continuidade, de pontos hemorrágicos, de dor e de neuropatia; ainda assim, a investigação de diabetes é pertinente neste paciente sem seguimento prévio.'
      ],
      context: 'Homem de 66 anos, lavrador, fototipo IV, sem acompanhamento médico prévio, apresenta mácula pigmentada plantar de cerca de 20 mm, no antepé, assimétrica, de bordas irregulares com projeção angular, de cor castanho-escura a negra, com crescimento progressivo há mais de um ano e discreto espessamento central. O melanoma acral lentiginoso é o subtipo proporcionalmente mais frequente em indivíduos de fototipos altos e apresenta, no Brasil, diagnóstico habitualmente tardio e pior prognóstico, em grande parte por barreiras de acesso e pela crença equivocada de que pessoas de pele morena ou negra não desenvolvem câncer de pele.',
      justify: 'A lesão preenche os critérios ABCDE de forma inequívoca: Assimetria em ambos os eixos, Bordas irregulares, angulosas, com projeção em ponta no polo distal-inferior, Cor heterogênea (castanho-avermelhado, castanho-escuro e negro), Diâmetro de cerca de 20 mm (muito superior a 6 mm) e Evolução progressiva documentada em mais de um ano. Aplica-se ainda o critério específico para lesões plantares: a distribuição da pigmentação segundo as CRISTAS dos dermatóglifos (padrão paralelo das cristas) é altamente sugestiva de melanoma acral, enquanto a distribuição pelos SULCOS sugere nevo acral benigno. A ausência de pontos hemorrágicos puntiformes e a persistência por mais de um ano afastam hematoma subcórneo, principal diferencial. O espessamento central palpável pode indicar componente de crescimento vertical, de pior prognóstico. O melanoma acral não guarda relação com exposição solar cumulativa, o que explica sua ocorrência em área fotoprotegida e reforça que fototipo alto não confere proteção — crença que precisa ser ativamente desconstruída na consulta. A ausência de linfonodomegalia e de sintomas sistêmicos sugere doença ainda sem acometimento regional clinicamente detectável, mas não reduz a urgência.',
      expectedAnamnesis: 'Caracterizar o tempo de percepção da lesão e o crescimento progressivo (comparação do tamanho inicial com o atual) | Investigar especificamente trauma local prévio, pancada ou hematoma, para diferenciar de talon noir | Investigar se havia lesão pigmentada prévia no local (lesão de novo) | Investigar dor, prurido, sangramento, ulceração e secreção | Investigar sintomas de neuropatia periférica e antecedente de diabetes, dado o risco de úlcera plantar como diferencial | Investigar antecedente pessoal e familiar de câncer de pele ou melanoma | Investigar uso de calçados, hábito de andar descalço e exposição ocupacional | Investigar imunossupressão | Revisão de sistemas dirigida à doença avançada: perda ponderal, adenomegalias percebidas, dor óssea, tosse, cefaleia | Investigar determinantes sociais e barreiras de acesso: distância do serviço de referência, condições de deslocamento, rede de apoio familiar e impacto do afastamento do trabalho',
      expectedPhysical: 'Sinais vitais: sem alterações relevantes ao caso; aferição de PA pertinente em paciente sem seguimento prévio | Inspeção da lesão sob boa iluminação, com o pé adequadamente exposto e apoiado, aplicando os critérios ABCDE | Descrição semiológica formal esperada: ver Gabarito da Fotodescrição — mácula pigmentada única no antepé plantar (base do 2º pododáctilo), assimétrica, de bordas irregulares com projeção angular, policrômica (castanho-avermelhada a negra), com cerca de 20 mm no maior eixo, sem ulceração | Palpação da lesão para identificar a área de infiltração/espessamento central | Avaliação dermatoscópica, se disponível, buscando padrão paralelo das cristas (sugestivo de malignidade) versus padrão paralelo dos sulcos (sugestivo de benignidade) | Exame OBRIGATÓRIO das demais áreas acrais: pé contralateral, regiões interdigitais, palmas das mãos e, sobretudo, TODAS as unhas das mãos e dos pés, pesquisando melanoníquia longitudinal e sinal de Hutchinson | Exame das mucosas oral e conjuntival, pela associação do melanoma em fototipos altos com localizações acrais e mucosas | Palpação das cadeias linfonodais poplíteas e inguinais bilaterais e do trajeto de drenagem, pesquisando satelitose e metástase em trânsito | Avaliação vascular e neurológica do pé (pulsos pediosos e tibiais posteriores, sensibilidade) para afastar pé diabético como diferencial | Exame do restante da superfície cutânea',
      expectedExams: [
        { exam: 'Biópsia incisional da área mais espessa/infiltrada da lesão, realizada em serviço especializado', justify: 'Lesão plantar de cerca de 20 mm em área de apoio, na qual a exérese total inicial é tecnicamente inviável na atenção primária; a biópsia incisional da área mais representativa e infiltrada é aceita nesta situação e permite o diagnóstico e a estimativa da espessura de Breslow, sem prejuízo prognóstico quando seguida de tratamento definitivo.', expected: 'Melanoma acral lentiginoso, com determinação de Breslow, ulceração, índice mitótico e status de margens.' },
        { exam: 'Dermatoscopia da lesão plantar', justify: 'Permite avaliar o padrão de distribuição da pigmentação em relação aos dermatóglifos — padrão paralelo das cristas é altamente sugestivo de melanoma acral, enquanto o padrão paralelo dos sulcos sugere nevo acral benigno; ferramenta de triagem que não substitui a biópsia diante de lesão clinicamente suspeita.', expected: 'Padrão paralelo das cristas, com áreas de pigmentação difusa irregular e véu azul-esbranquiçado.' },
        { exam: 'Exame dermatológico completo, incluindo todas as unhas, palmas, plantas e mucosas', justify: 'Em fototipos altos, os melanomas concentram-se em sítios acrais e mucosos; a pesquisa de melanoníquia longitudinal e do sinal de Hutchinson (extensão da pigmentação à prega ungueal proximal) é obrigatória para não perder lesão sincrônica.', expected: 'Sem outras lesões suspeitas neste caso.' },
        { exam: 'Glicemia de jejum e/ou hemoglobina glicada', justify: 'Paciente de 66 anos sem qualquer acompanhamento prévio e sem rastreamento realizado; a investigação de diabetes é pertinente para o rastreamento populacional e para afastar o pé diabético como diferencial de lesão plantar.', expected: 'Esperado normal neste caso; se alterado, iniciar seguimento conforme protocolo do Ministério da Saúde.' },
        { exam: 'Estadiamento (LDH, ultrassonografia de cadeias linfonodais, tomografias, pesquisa de linfonodo sentinela)', justify: 'Indicado apenas APÓS a confirmação histopatológica e conduzido pelo serviço especializado, com extensão definida pela espessura de Breslow e pelo estadio clínico. ⚠️ Estadiamento baseado no sistema AJCC 8ª edição, de origem estrangeira, adotado pelas diretrizes brasileiras (SBD/SBCO/INCA).', expected: 'A definir pelo serviço de referência.' }
      ],
      expectedConduct: 'Farmacológica: nenhuma. NÃO prescrever antifúngico, corticoide, ácido ceratolítico ou qualquer tópico sobre a lesão como teste terapêutico. | Não farmacológica / procedimento: NÃO realizar raspagem, curetagem, shave, crioterapia ou cauterização na UBS; encaminhar para biópsia em serviço especializado; orientar proteção da lesão contra atrito e uso de calçado fechado e confortável até a avaliação. | Encaminhamento: encaminhamento com prioridade máxima à dermatologia/cirurgia oncológica, com descrição detalhada dos critérios ABCDE, do tempo de evolução e das dimensões no formulário de referência, para adequada classificação de risco na regulação; acionar ativamente os recursos de acesso — transporte sanitário municipal, Tratamento Fora de Domicílio (TFD) quando aplicável, e agendamento com data definida; envolver a equipe de Saúde da Família e o ACS no monitoramento do encaminhamento, dada a alta chance de abandono por barreira geográfica; garantir os prazos da Lei nº 12.732/2012 após a confirmação diagnóstica. | Orientações ao paciente: desconstruir explicitamente a crença de que pessoas de pele morena ou negra não desenvolvem câncer de pele, esclarecendo que este tipo específico ocorre em áreas sem sol (solas, palmas e unhas) e é justamente mais frequente em pessoas de pele mais escura; explicar em linguagem simples e sem tecnicismos o que é a biópsia; orientar autoexame das solas, das palmas e das unhas; orientar fotoproteção como medida geral de saúde; orientar exame de pele nos filhos. | Seguimento: retorno definido na UBS após a avaliação especializada; busca ativa pelo ACS se o paciente não comparecer; sinais de alarme para retorno imediato: crescimento acelerado, ferida que não cicatriza, sangramento, caroços na perna ou na virilha, dor; após confirmação, seguimento dermatológico e oncológico vitalício.',
      expectedCommunication: 'Apresentação: apresentar-se pelo nome e função, confirmar o nome do paciente e explicar o objetivo da consulta | Solicitar permissão antes de examinar os pés e as unhas, com cuidado quanto ao constrangimento do paciente ao expor os pés | Escuta ativa: permitir o relato inicial sem interromper, usar perguntas abertas, adaptar o vocabulário ao letramento do paciente, sem infantilizar e sem jargões | Reconhecer e valorizar o papel da filha que motivou a consulta, sem constranger o paciente por ter demorado | Corrigir de forma respeitosa e explícita a crença de que pele morena ou negra não desenvolve câncer de pele, sem ridicularizar | Comunicação do diagnóstico: informar honestamente a suspeita de câncer de pele, sem afirmar certeza antes da biópsia e sem falsa tranquilização; verificar a compreensão pedindo que o paciente explique com as próprias palavras o que entendeu | Abordar ativamente a barreira de acesso e o receio de perder dias de trabalho, construindo o plano junto com o paciente e com a rede de apoio | Perguntar como o paciente está se sentindo e se restaram dúvidas antes de encerrar',
      criticalErrors: [
        'Atribuir a lesão a calo, hematoma de trauma, "mancha da terra" ou pigmentação racial normal e liberar o paciente sem biópsia nem encaminhamento.',
        'Reforçar ou não corrigir a crença de que pessoas de pele morena ou negra não desenvolvem câncer de pele, o que compromete a adesão e perpetua o diagnóstico tardio do melanoma acral.',
        'Prescrever antifúngico, ceratolítico, corticoide ou realizar raspagem/curetagem/crioterapia da lesão, retardando o diagnóstico e comprometendo a avaliação histopatológica.',
        'Deixar de examinar as unhas, o pé contralateral, as palmas e as mucosas, perdendo lesões acrais ou mucosas sincrônicas — sítios preferenciais em fototipos altos.',
        'Deixar de palpar as cadeias linfonodais inguinais e poplíteas e o trajeto de drenagem.',
        'Encaminhar sem prioridade, sem descrever a suspeita, ou não abordar a barreira geográfica e social de acesso, resultando em abandono do seguimento.'
      ]
    },
    instD: {
      title: 'CHECKLIST — MÁCULA PIGMENTADA PLANTAR DE CRESCIMENTO PROGRESSIVO (MELANOMA ACRAL LENTIGINOSO)',
      sections: [
        {
          h: 'BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE',
          items: [
            { item: 'Apresentou-se pelo nome e função e confirmou a identificação do paciente', score: 0.5, ref: 'CFM — Código de Ética Médica, 2019' },
            { item: 'Solicitou permissão antes de examinar os pés e utilizou linguagem adaptada ao letramento do paciente, sem jargões e sem infantilizar', score: 0.5, ref: 'MS — Política Nacional de Humanização (HumanizaSUS), 2013' },
            { item: 'Perguntou como o paciente estava se sentindo diante da suspeita e/ou verificou se restaram dúvidas antes de encerrar', score: 0.5, ref: 'INCA — Comunicação de Notícias Difíceis em Oncologia, 2020' }
          ]
        },
        {
          h: 'BLOCO 2 — ANAMNESE',
          items: [
            { item: 'Caracterizou o tempo de evolução e o crescimento progressivo da lesão (comparação do tamanho inicial com o atual)', score: 0.5, ref: 'SBD — Consenso Brasileiro de Câncer da Pele Melanoma, 2023' },
            { item: 'Investigou especificamente trauma/pancada/hematoma prévio no local, permitindo afastar hematoma subcórneo (talon noir)', score: 0.5, ref: 'SBD — Melanoma Acral: Diagnóstico Diferencial, 2023' },
            { item: 'Investigou antecedentes pessoais (incluindo diabetes/neuropatia) e/ou história familiar de câncer de pele', score: 0.5, ref: 'MS — Cadernos de Atenção Básica nº 36 — Diabetes Mellitus, 2013; SBD 2023' },
            { item: 'Investigou barreiras sociais de acesso ao serviço de referência (distância, transporte, rede de apoio, impacto no trabalho)', score: 0.5, ref: 'MS — Política Nacional de Atenção Básica (PNAB), 2017' }
          ]
        },
        {
          h: 'BLOCO 3 — EXAME FÍSICO',
          items: [
            { item: 'Realizou a fotodescrição da lesão com terminologia dermatológica formal e aplicou os critérios ABCDE (topografia, mácula, assimetria, bordas, cor, diâmetro)', score: 1.0, ref: 'SBD — Consenso Brasileiro de Melanoma, 2023' },
            { item: 'Examinou as demais áreas acrais: pé contralateral, palmas e regiões interdigitais', score: 0.5, ref: 'SBD — Melanoma em Fototipos Altos, 2023' },
            { item: 'Examinou TODAS as unhas das mãos e dos pés, pesquisando melanoníquia longitudinal e sinal de Hutchinson', score: 0.5, ref: 'SBD — Melanoma Ungueal: critérios ABCDEF, 2023' },
            { item: 'Palpou as cadeias linfonodais inguinais e/ou poplíteas e pesquisou lesões-satélite no trajeto de drenagem', score: 0.5, ref: 'INCA — Condutas em Melanoma Cutâneo, 2022' }
          ]
        },
        {
          h: 'BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
          items: [
            { item: 'Formulou a hipótese de melanoma (acral lentiginoso) / lesão pigmentada maligna', score: 1.0, ref: 'SBD — Consenso Brasileiro de Melanoma, 2023; INCA 2022' },
            { item: 'Citou ao menos dois diagnósticos diferenciais pertinentes (hematoma subcórneo/talon noir, nevo acral, hiperpigmentação pós-inflamatória)', score: 0.5, ref: 'SBD — Diagnóstico Diferencial de Lesões Pigmentadas Acrais, 2023' },
            { item: 'Indicou biópsia da lesão em serviço especializado, contraindicando explicitamente raspagem, crioterapia, cauterização ou tópicos', score: 0.5, ref: 'SBD/SBCO — Consenso Brasileiro de Melanoma, 2023' }
          ]
        },
        {
          h: 'BLOCO 5 — CONDUTA E ORIENTAÇÃO AO PACIENTE',
          items: [
            { item: 'Encaminhou com prioridade à dermatologia/cirurgia oncológica, descrevendo a suspeita clínica no encaminhamento, e/ou acionou recurso de transporte/TFD e busca ativa pela equipe', score: 1.0, ref: 'MS — Protocolos de Encaminhamento AB → Atenção Especializada, Dermatologia, 2016; Lei nº 12.732/2012' },
            { item: 'Esclareceu explicitamente que pessoas de pele morena ou negra também desenvolvem câncer de pele, sobretudo em áreas sem exposição solar (solas, palmas e unhas)', score: 1.0, ref: 'INCA — Detecção Precoce do Câncer de Pele, 2022; SBD — Melanoma Acral, 2023' },
            { item: 'Orientou autoexame de solas, palmas e unhas, sinais de alarme e retorno definido para acompanhamento do resultado', score: 0.5, ref: 'INCA — Prevenção e Detecção Precoce do Câncer de Pele, 2022' }
          ]
        }
      ]
    }
  },

  {
    id: 4,
    title: 'Carocinho brilhante no nariz que cresce há um ano',
    sub: 'UBS — Atenção Primária',
    tema: 'Dermatologia',
    topic: 'carcinoma basocelular',
    level: 'moderado',
    cardAccent: '#7A5C3E',
    instA: {
      scenario: 'Atenção Primária — UBS de município do interior. Consultório, turno matutino. Consulta de demanda espontânea.',
      patient: 'A.C.F., 68 anos, masculino, agricultor aposentado, fototipo II, hipertenso e tabagista.',
      complaint: 'Refere um "carocinho" brilhante na lateral do nariz que vem crescendo devagar há cerca de um ano e que, às vezes, sangra ao enxugar o rosto.',
      tasks: [
        'Realize a anamnese dirigida à lesão cutânea.',
        'Realize o exame físico dermatológico pertinente e, ao receber o impresso fotográfico, faça a fotodescrição da lesão com terminologia semiológica formal.',
        'Formule a hipótese diagnóstica principal e ao menos dois diagnósticos diferenciais.',
        'Proponha a conduta diagnóstica e o encaminhamento adequados.',
        'Oriente o paciente quanto ao diagnóstico provável, ao tratamento e à prevenção.'
      ]
    },
    instB: {
      vitals: {
        PA: '148/86 mmHg',
        FC: '76 bpm',
        FR: '16 irpm',
        Tax: '36,2 °C',
        Peso: '74 kg',
        Altura: '1,72 m',
        IMC: '25,0 kg/m²'
      },
      physicalGeneral: 'Bom estado geral, lúcido e orientado, corado, hidratado, anictérico, acianótico, afebril. Fototipo II, com heliodermatite acentuada em face, pescoço e antebraços: pele espessada, rugas profundas, elastose solar, lentigos solares múltiplos e áreas de leucodermia gutata.',
      physicalSeg: 'PELE (PAREDE LATERAL DIREITA DO NARIZ, ACIMA DO SULCO ALAR): ver impresso fotográfico — fornecido somente mediante solicitação de exame da lesão/face. À palpação: pápula firme, de superfície lisa, móvel, não aderida à cartilagem alar, indolor; ao estiramento da pele, o brilho perolado e as telangiectasias ficam mais evidentes | PELE (FACE E COURO CABELUDO): múltiplas máculas eritematosas ásperas ao tato em fronte, dorso nasal, região malar e pavilhões auriculares, compatíveis com dano actínico crônico; calvície com pele do vértice do couro cabeludo espessada e áspera | PELE (ANTEBRAÇOS E DORSO DAS MÃOS): lentigos solares, púrpura senil e áreas de ceratose | LÁBIOS: semimucosa do lábio inferior discretamente esbranquiçada, seca e com perda do limite cutâneo-mucoso | CADEIAS LINFONODAIS: cervicais, submandibulares e pré-auriculares livres — sem linfonodos palpáveis | OLHOS E PÁLPEBRAS: sem lesões, sem ectrópio, motricidade ocular preservada | APARELHO RESPIRATÓRIO: murmúrio vesicular universalmente audível, sem ruídos adventícios | APARELHO CARDIOVASCULAR: ritmo cardíaco regular, 2 tempos, sem sopros',
      labs: [],
      photo: {
        src: 'img/estacoes/cbc-nodular-nariz.webp',
        title: 'Fotografia da lesão (nariz, perfil direito)',
        alt: 'Fotografia aproximada do nariz em perfil, com régua em centímetros apoiada sobre a ponta nasal e uma pequena lesão na lateral do nariz.',
        caption: 'Nariz em perfil direito (ponta nasal voltada para a direita da imagem; bigode na parte inferior). Régua milimetrada apoiada sobre a ponta nasal como referência de tamanho.',
        request: 'Realize a fotodescrição da lesão utilizando terminologia dermatológica formal (topografia, lesão elementar, número, forma, tamanho, bordas, cor, superfície e pele ao redor).'
      },
      note: 'Entregar o impresso de sinais vitais e exame físico geral no início da estação. Entregar o IMPRESSO FOTOGRÁFICO SOMENTE quando o candidato solicitar verbalmente examinar a lesão/face; ao entregá-lo, pedir ao candidato que realize a fotodescrição em voz alta. NÃO fornecer a descrição da lesão — o gabarito está na aba do avaliador (Gabarito da Fotodescrição). Se o candidato palpar a lesão, informar: "pápula firme, lisa, móvel, indolor". Fornecer os achados de couro cabeludo, antebraços, lábios e cadeias linfonodais apenas se solicitados. Se o candidato prescrever antibiótico tópico ou sistêmico como conduta principal, ou indicar crioterapia/cauterização/curetagem sem diagnóstico histopatológico em lesão de asa nasal, ANOTAR como ERRO CRÍTICO. Se o candidato liberar o paciente com diagnóstico de "espinha", "verruga" ou "ferida por trauma/coçadura" sem investigação, ANOTAR como ERRO CRÍTICO.',
      patientProfile: 'Antônio C. F., 68 anos, masculino, agricultor aposentado, casado, quatro filhos. Reside em zona periurbana. Ensino fundamental incompleto. Hipertenso em uso irregular de hidroclorotiazida.',
      script: [
        { trigger: 'Queixa principal / abertura', speech: 'Doutor, é esse carocinho aqui do lado do nariz. Ele é brilhante, parece uma bolinha de cera. Quando eu enxugo o rosto com a toalha às vezes ele sangra um pouquinho, faz uma casquinha, aí cai e fica liso de novo. Mas não some, só cresce.' },
        { trigger: 'Tempo de evolução', speech: 'Faz mais de ano. Começou como um carocinho pequeno, brilhante, que eu achei que era espinha. Só que não sumiu e foi crescendo devagar.' },
        { trigger: 'Sangramento e crosta', speech: 'Sangra pouco, só quando eu esbarro com a toalha ou com a unha. Para sozinho e faz uma casquinha pequena que cai em poucos dias. Não sai pus, não tem cheiro ruim, não incha.' },
        { trigger: 'Dor e sintomas locais', speech: 'Não dói não. Não coça também. É mais o incômodo de ter essa bolinha no rosto, minha mulher fica reclamando que tá crescendo.' },
        { trigger: 'Exposição solar / ocupação', speech: 'Eu trabalhei na roça desde os doze anos, doutor. Saía cinco da manhã e voltava seis da tarde. Sol na cabeça a vida toda, mais de quarenta anos.' },
        { trigger: 'Fotoproteção / chapéu', speech: 'Chapéu de palha eu usava, sim, mas ele não cobria o nariz direito. Protetor solar eu nunca usei na vida, isso é coisa de agora, no meu tempo não tinha.' },
        { trigger: 'Antecedentes pessoais', speech: 'Tenho pressão alta, tomo um comprimido, mas confesso que às vezes esqueço. Fumo desde novo, um maço por dia. Não tenho diabetes.' },
        { trigger: 'Antecedente de lesões de pele prévias', speech: 'Já tiraram uma coisinha da minha orelha uns cinco anos atrás, num posto de saúde da cidade. Disseram que era um carcinoma, mas que era o tipo bonzinho, e não precisou de mais nada.' },
        { trigger: 'História familiar', speech: 'De câncer de pele na família eu não sei de ninguém. Meu irmão teve câncer no pulmão, era fumante que nem eu.' },
        { trigger: 'Tratamentos já tentados', speech: 'Achando que era espinha inflamada, eu passei pomada de farmácia, aquela amarelinha de antibiótico. Passei uns quinze dias, não mudou nada, a bolinha continuou do mesmo jeito.' },
        { trigger: 'Pergunta ativa (após demonstrar suspeita)', speech: 'Doutor, isso é câncer? Se for, é aquele que espalha e mata? Meu irmão morreu de câncer, doutor.' },
        { trigger: 'Pergunta ativa (após indicação de tratamento cirúrgico)', speech: 'Vão cortar meu nariz? Vai ficar um buraco no meio da cara? Eu vou ficar desfigurado?' }
      ],
      hiddenInfo: 'Antecedente pessoal de carcinoma basocelular já tratado em pavilhão auricular há cerca de 5 anos — só revelar se o candidato perguntar especificamente sobre lesões de pele removidas ou tratadas anteriormente | Uso prévio de antibiótico tópico por cerca de 15 dias sem resolução — só revelar se o candidato perguntar sobre tratamentos já tentados | Tabagismo ativo de 1 maço/dia desde os 18 anos (carga tabágica ~50 anos-maço) — só revelar se perguntado sobre hábitos de vida | Nunca fez uso de fotoprotetor — só revelar se perguntado especificamente sobre fotoproteção',
      actorBehavior: 'Cordial, falante e bem-humorado no início, tratando a lesão como banalidade ("é só uma bolinha, uma espinha"). Colaborativo, mas responde apenas ao que for perguntado. Ao ouvir a palavra "câncer" muda visivelmente de postura: fica sério, silencia e associa imediatamente à morte do irmão por câncer de pulmão — faz a primeira pergunta ativa com angústia. A segunda preocupação central é estética/funcional: teme desfiguração facial. Se o candidato explicar a diferença entre carcinoma basocelular e melanoma, esclarecer o excelente prognóstico com tratamento adequado e abordar a preocupação com a aparência, o paciente relaxa e adere ao plano. Se o candidato usar linguagem técnica ou minimizar o medo sem explicar, permanecer tenso e questionar repetidamente.'
    },
    instC: {
      diagnosis: 'Carcinoma basocelular (CBC), provável subtipo nodular (fase inicial, ainda sem ulceração), localizado na parede lateral direita do nariz, junto ao sulco alar — área de alto risco (zona H da face). Paciente com heliodermatite crônica, campo de cancerização e antecedente pessoal de CBC. Diagnóstico definitivo dependente de exame histopatológico.',
      photoDescription: 'Topografia: parede lateral DIREITA do nariz, logo acima do sulco alar (transição entre a asa nasal e o dorso/parede lateral) — zona H da face | Lesão elementar: PÁPULA (lesão sólida, elevada, < 1 cm), cupuliforme | Número: lesão única | Forma: arredondada/ovalada, relativamente simétrica | Tamanho: aproximadamente 5 x 4 mm, estimado pela régua milimetrada | Bordas: bem delimitadas, regulares, levemente elevadas | Cor: rósea a branco-perolada, TRANSLÚCIDA, com brilho perolado/céreo ("aspecto de pérola") | Superfície: lisa e brilhante, íntegra — SEM ulceração, crosta ou descamação; telangiectasias ARBORIFORMES (vasos finos, vermelhos, ramificados) cruzando a superfície e convergindo para a lesão a partir da periferia | Pele ao redor: eritema discreto com telangiectasias difusas na asa nasal, óstios foliculares dilatados (pele sebácea), pontos acastanhados foliculares e sinais de fotodano; pelos do bigode visíveis abaixo | Síntese esperada: pápula perolada translúcida com telangiectasias arboriformes em área fotoexposta da face (zona H) — carcinoma basocelular nodular até prova em contrário',
      differentials: [
        'Carcinoma espinocelular (CEC) — também surge como pápula/nódulo em área fotoexposta, porém costuma apresentar superfície ceratósica/crostosa, sem brilho perolado, base infiltrada e endurecida, crescimento mais rápido e risco de metástase; a borda perlada com telangiectasias arboriformes favorece fortemente o CBC, mas apenas a histopatologia diferencia com segurança.',
        'Ceratose actínica hipertrófica — lesão pré-maligna do mesmo campo de cancerização, mas apresenta-se como mácula/pápula eritematosa áspera ao tato, sem borda perlada, sem telangiectasias arboriformes e sem aspecto translúcido nem crescimento progressivo como pápula.',
        'Hiperplasia sebácea ou nevo intradérmico (nevo de Miescher) — pápulas cor da pele/amareladas comuns no nariz de idosos; a hiperplasia sebácea é amarelada, umbilicada e tem vasos em "coroa" que não cruzam o centro; o nevo intradérmico é estável há anos. O brilho perolado translúcido, as telangiectasias arboriformes sobre a lesão e o crescimento progressivo favorecem o CBC.',
        'Melanoma amelanótico — deve ser lembrado em pápula rósea de crescimento progressivo; o crescimento lento em um ano e o brilho perolado com telangiectasias arboriformes favorecem o CBC, mas a biópsia é indispensável.',
        'Lesão infecciosa crônica (leishmaniose tegumentar, piodermite crônica) — a leishmaniose cursa com úlcera de bordas elevadas e infiltradas em área exposta e é endêmica no Nordeste, devendo ser considerada; entretanto, a evolução de mais de um ano com borda perlada e telangiectasias, sem histórico epidemiológico de exposição a mata, torna esta hipótese menos provável.'
      ],
      context: 'Homem de 68 anos, fototipo II, agricultor com mais de 40 anos de exposição solar ocupacional sem fotoproteção, apresenta pápula perolada e translúcida de cerca de 5 mm, com telangiectasias arboriformes, na parede lateral do nariz junto ao sulco alar, de evolução lenta e progressiva há um ano, com sangramento fácil ao mínimo trauma e sem resposta a antibiótico tópico. O CBC é a neoplasia maligna mais frequente no Brasil e no mundo; localiza-se em 80% dos casos na cabeça e no pescoço e, embora raramente metastatize, pode causar destruição local extensa quando negligenciado.',
      justify: 'O quadro é típico de CBC nodular em fase inicial: pápula de crescimento lento (um ano), translúcida, de brilho perolado ("aspecto de cera/pérola"), sobre a qual e ao redor da qual se observam telangiectasias arboriformes — achado semiológico praticamente patognomônico —, com sangramento fácil ao mínimo trauma. Ainda não há ulceração central; se negligenciada, a lesão tende a crescer e ulcerar ("úlcera roedora"). A refratariedade ao antibiótico tópico afasta etiologia infecciosa bacteriana. Os fatores de risco somam-se de forma contundente: fototipo II, exposição solar ocupacional cumulativa por mais de 40 anos sem fotoproteção, idade avançada, heliodermatite acentuada com campo de cancerização evidente e — dado crítico obtido apenas com pergunta dirigida — antecedente pessoal de CBC prévio, que aumenta substancialmente o risco de novas lesões e obriga seguimento dermatológico regular. A localização na parede lateral do nariz, junto ao sulco alar, insere a lesão na zona H da face, área de alto risco de recidiva e de invasão em profundidade por planos de fusão embrionária, o que define a necessidade de tratamento em serviço especializado, preferencialmente com cirurgia micrográfica de Mohs. A ausência de linfonodomegalia é esperada, dado que o CBC praticamente não metastatiza.',
      expectedAnamnesis: 'Caracterizar o tempo de evolução da lesão e o padrão de crescimento (lento e progressivo) | Investigar sangramento ao mínimo trauma, formação de crosta e mudança de aspecto (crescimento, ulceração) | Investigar dor, prurido, secreção purulenta e sinais flogísticos, para afastar processo infeccioso | Investigar exposição solar ocupacional e recreativa cumulativa, uso de chapéu e de fotoprotetor ao longo da vida | Investigar fototipo e história de queimaduras solares | Investigar ANTECEDENTE PESSOAL de câncer de pele ou de lesões cutâneas previamente removidas ou tratadas — fator de risco maior e informação escondida do caso | Investigar tratamentos já tentados sobre a lesão (pomadas, antibióticos, ácidos) | Investigar história familiar de câncer de pele | Investigar imunossupressão, radioterapia prévia na face e exposição a arsênico | Investigar hábitos de vida, especialmente tabagismo, relevante para o risco de CEC e de lesões labiais | Investigar história epidemiológica de exposição a área de mata, para considerar leishmaniose tegumentar como diferencial | Avaliar o impacto psicossocial e o receio de desfiguração facial',
      expectedPhysical: 'Sinais vitais: PA elevada em hipertenso com adesão irregular — pertinente registrar e abordar, sem desviar o foco da estação | Inspeção da lesão sob boa iluminação, se possível com auxílio de lupa, e estiramento da pele para evidenciar o brilho perlado e as telangiectasias | Descrição semiológica formal esperada: ver Gabarito da Fotodescrição — pápula única, de cerca de 5 x 4 mm, cupuliforme, translúcida, de brilho perolado, com telangiectasias arboriformes na superfície e na periferia, sem ulceração ou crosta, na parede lateral direita do nariz acima do sulco alar | Palpação da lesão e da base para avaliar infiltração, mobilidade sobre os planos profundos e fixação à cartilagem alar | Avaliação da extensão da lesão em relação ao sulco alar e às estruturas anatômicas vizinhas, considerando a zona H da face | Exame de TODA a pele fotoexposta — face, pavilhões auriculares, couro cabeludo (especialmente em paciente calvo), pescoço, colo, antebraços e dorso das mãos — para identificar o campo de cancerização e lesões sincrônicas | Exame do lábio inferior, pesquisando queilite actínica | Exame de toda a superfície cutânea, incluindo áreas fotoprotegidas | Palpação das cadeias linfonodais cervicais, submandibulares e pré-auriculares — esperado normal, dado que o CBC raramente metastatiza | Avaliação da motricidade ocular e pesquisa de acometimento de canto interno do olho e de pálpebras, se a lesão for próxima',
      expectedExams: [
        { exam: 'Biópsia da lesão (incisional, por punch, ou excisional conforme viabilidade técnica)', justify: 'Confirma o diagnóstico e, sobretudo, define o SUBTIPO histológico (nodular, superficial, esclerodermiforme/infiltrativo, micronodular), o que determina a agressividade local, a margem cirúrgica necessária e a indicação de cirurgia micrográfica de Mohs. Em lesão de asa nasal, a biópsia incisional/punch é preferível à exérese às cegas na atenção primária, pois preserva a anatomia para o planejamento cirúrgico especializado.', expected: 'Carcinoma basocelular, subtipo nodular, com descrição de margens e do padrão de invasão.' },
        { exam: 'Dermatoscopia', justify: 'Aumenta a acurácia diagnóstica do CBC e auxilia na diferenciação com CEC, ceratose actínica e lesões melanocíticas; ferramenta complementar que não substitui a biópsia.', expected: 'Telangiectasias arboriformes, ninhos ovoides azul-acinzentados, áreas brancas brilhantes e ausência de rede pigmentar; sem ulceração neste caso.' },
        { exam: 'Exame dermatológico de corpo inteiro com mapeamento das áreas fotoexpostas', justify: 'Paciente com campo de cancerização e antecedente pessoal de CBC apresenta risco substancialmente aumentado de novos tumores sincrônicos e metacrônicos e de outros cânceres de pele, incluindo melanoma.', expected: 'Múltiplas ceratoses actínicas em face e couro cabeludo; queilite actínica em lábio inferior.' },
        { exam: 'Exames de imagem (tomografia de face/seios da face)', justify: 'NÃO indicados na avaliação inicial. Reservados a casos com suspeita de invasão profunda, acometimento ósseo ou cartilaginoso, tumores extensos, recidivados ou com sintomas neurológicos, sob indicação do serviço especializado.', expected: 'Não aplicável neste momento.' }
      ],
      expectedConduct: 'Farmacológica: nenhum antibiótico tópico ou sistêmico está indicado, pois não se trata de processo infeccioso — suspender explicitamente a pomada em uso. NÃO iniciar imiquimode ou 5-fluoruracila tópicos por conta própria na atenção primária: essas opções restringem-se a CBC superficial de baixo risco, com diagnóstico histopatológico prévio e sob condução do especialista, sendo inadequadas para CBC de asa nasal. Otimizar o tratamento da hipertensão e abordar a adesão. | Não farmacológica / procedimento: encaminhar para exérese cirúrgica com margens adequadas, realizada por serviço especializado; para lesão de asa nasal (zona H), a cirurgia micrográfica de Mohs é a técnica de escolha, por permitir controle histológico completo das margens com máxima preservação tecidual, com as menores taxas de recidiva. NÃO realizar crioterapia, curetagem ou eletrocoagulação em lesão de asa nasal sem diagnóstico histopatológico, pelo alto risco de recidiva e de destruição local em área nobre. | Encaminhamento: encaminhar à dermatologia/cirurgia dermatológica ou cirurgia de cabeça e pescoço, descrevendo no formulário a localização em zona de alto risco, o tempo de evolução e o antecedente pessoal de CBC; encaminhamento prioritário — embora o CBC seja de baixa letalidade, o retardo acarreta destruição local significativa. Encaminhar também para cessação do tabagismo (grupo de tabagismo do SUS, conforme protocolo do INCA). | Orientações ao paciente: explicar em linguagem acessível que se trata de um câncer de pele do tipo mais comum e MENOS agressivo, que praticamente não se espalha para outros órgãos e tem taxa de cura superior a 95% com tratamento adequado, diferenciando-o explicitamente do melanoma; abordar diretamente o medo de desfiguração, explicando que a técnica cirúrgica moderna preserva ao máximo o tecido sadio e que existe reconstrução plástica; orientar fotoproteção rigorosa e permanente (FPS ≥ 30 reaplicado a cada 2 horas, chapéu de aba larga, camisa de manga longa, evitar exposição entre 10h e 16h); ensinar autoexame da pele; orientar cessação do tabagismo. | Seguimento: acompanhamento dermatológico regular e vitalício, com exame de corpo inteiro pelo menos anual, pelo risco elevado de novos tumores; retorno na UBS após a avaliação especializada; sinais de alarme para retorno imediato: crescimento rápido, sangramento volumoso, dor, dormência facial, aparecimento de novas lesões que não cicatrizam em mais de 4 semanas.',
      expectedCommunication: 'Apresentação: apresentar-se pelo nome e função, confirmar a identificação do paciente e explicar o objetivo da consulta | Solicitar permissão antes de examinar a face e a pele, garantindo iluminação e privacidade adequadas | Escuta ativa: permitir o relato inicial sem interromper, usar perguntas abertas antes das fechadas, adaptar a linguagem ao letramento do paciente | Comunicação do diagnóstico: informar honestamente a suspeita de câncer de pele, sem falsa tranquilização, mas contextualizando de forma clara e explícita o excelente prognóstico do CBC e sua diferença em relação ao melanoma e ao câncer que vitimou o irmão do paciente | Acolher o medo da morte e o medo da desfiguração facial: nomear a preocupação, perguntar diretamente o que mais o preocupa e responder de forma concreta | Verificar a compreensão pedindo que o paciente explique com as próprias palavras o que entendeu e o que fará a seguir | Perguntar se restaram dúvidas antes de encerrar a consulta',
      criticalErrors: [
        'Diagnosticar como espinha, verruga, "bolinha de gordura" ou ferida infecciosa e prescrever antibiótico tópico/sistêmico, liberando o paciente sem biópsia nem encaminhamento — perpetuando o atraso de uma lesão que já dura um ano.',
        'Indicar crioterapia, curetagem, eletrocoagulação ou exérese às cegas de lesão em asa nasal (zona H) sem diagnóstico histopatológico e sem planejamento especializado, com alto risco de recidiva e de destruição local em área nobre.',
        'Deixar de solicitar biópsia/encaminhamento para confirmação histopatológica, tratando empiricamente com imiquimode ou 5-fluoruracila tópicos uma lesão de alto risco.',
        'Não examinar o restante das áreas fotoexpostas (face, couro cabeludo, orelhas, lábios, antebraços), perdendo o campo de cancerização e lesões sincrônicas em paciente com antecedente pessoal de CBC.',
        'Afirmar ao paciente que "não é nada, é só uma ferida" ou, no extremo oposto, comunicar "o senhor tem câncer" sem contextualizar o prognóstico, gerando sofrimento desproporcional e risco de abandono.',
        'Deixar de orientar fotoproteção e seguimento dermatológico regular em paciente com dano actínico grave e câncer de pele prévio.'
      ]
    },
    instD: {
      title: 'CHECKLIST — PÁPULA PEROLADA EM NARIZ COM CRESCIMENTO LENTO (CARCINOMA BASOCELULAR)',
      sections: [
        {
          h: 'BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE',
          items: [
            { item: 'Apresentou-se pelo nome e função e confirmou a identificação do paciente', score: 0.5, ref: 'CFM — Código de Ética Médica, 2019' },
            { item: 'Solicitou permissão antes de examinar a face e a pele do paciente', score: 0.5, ref: 'CFM — Código de Ética Médica, 2019 (autonomia e consentimento)' },
            { item: 'Perguntou ativamente o que mais preocupava o paciente e/ou acolheu o medo de câncer e de desfiguração facial', score: 0.5, ref: 'INCA — Comunicação de Notícias Difíceis em Oncologia, 2020; MS — HumanizaSUS, 2013' }
          ]
        },
        {
          h: 'BLOCO 2 — ANAMNESE',
          items: [
            { item: 'Caracterizou o tempo de evolução e o padrão da lesão (crescimento lento há ~1 ano, sangramento ao mínimo trauma)', score: 1.0, ref: 'SBD — Consenso Brasileiro de Câncer da Pele Não Melanoma, 2023; INCA 2022' },
            { item: 'Investigou exposição solar ocupacional/cumulativa e uso de fotoproteção ao longo da vida', score: 0.5, ref: 'INCA — Prevenção do Câncer de Pele, 2022; MS — Cadernos de Atenção Básica nº 29' },
            { item: 'Investigou antecedente pessoal de câncer de pele ou lesões cutâneas previamente removidas (informação escondida — CBC prévio em orelha)', score: 0.5, ref: 'SBD — Câncer da Pele Não Melanoma, 2023' },
            { item: 'Investigou tratamentos já tentados sobre a lesão (uso prévio de antibiótico tópico sem resposta)', score: 0.5, ref: 'MS — Cadernos de Atenção Básica nº 29 — Dermatologia, 2016' }
          ]
        },
        {
          h: 'BLOCO 3 — EXAME FÍSICO',
          items: [
            { item: 'Realizou a fotodescrição da lesão com terminologia dermatológica formal, citando topografia, pápula, brilho perolado/translúcido, telangiectasias arboriformes e tamanho', score: 1.0, ref: 'SBD — Consenso Brasileiro de Câncer da Pele Não Melanoma, 2023' },
            { item: 'Examinou as demais áreas fotoexpostas (face, orelhas, couro cabeludo, lábios, antebraços) identificando o campo de cancerização', score: 0.5, ref: 'SBD — Campo de Cancerização e Ceratoses Actínicas, 2023' },
            { item: 'Palpou a lesão avaliando infiltração/mobilidade sobre planos profundos e/ou palpou as cadeias linfonodais cervicais', score: 0.5, ref: 'INCA — Condutas em Câncer de Pele Não Melanoma, 2022' }
          ]
        },
        {
          h: 'BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
          items: [
            { item: 'Formulou a hipótese diagnóstica de carcinoma basocelular / câncer de pele não melanoma', score: 1.0, ref: 'SBD — Consenso Brasileiro de Câncer da Pele Não Melanoma, 2023; INCA 2022' },
            { item: 'Citou ao menos dois diagnósticos diferenciais pertinentes (CEC, ceratose actínica hipertrófica, melanoma amelanótico, leishmaniose tegumentar)', score: 0.5, ref: 'SBD — Diagnóstico Diferencial das Lesões que Não Cicatrizam, 2023; MS — Manual de Vigilância da Leishmaniose Tegumentar, 2017' },
            { item: 'Indicou biópsia para confirmação histopatológica e definição do subtipo, contraindicando crioterapia/cauterização às cegas em asa nasal', score: 0.5, ref: 'SBD — Consenso Brasileiro de Câncer da Pele Não Melanoma, 2023' }
          ]
        },
        {
          h: 'BLOCO 5 — CONDUTA E ORIENTAÇÃO AO PACIENTE',
          items: [
            { item: 'Encaminhou à dermatologia/cirurgia dermatológica para tratamento cirúrgico, sinalizando a localização em zona de alto risco (zona H da face)', score: 1.0, ref: 'MS — Protocolos de Encaminhamento AB → Atenção Especializada, Dermatologia, 2016; SBD 2023' },
            { item: 'Explicou o diagnóstico em linguagem acessível, diferenciando o CBC do melanoma e informando o excelente prognóstico com tratamento adequado', score: 0.5, ref: 'INCA — Câncer de Pele Não Melanoma, 2022' },
            { item: 'Orientou fotoproteção permanente (FPS ≥ 30, chapéu, roupas, evitar sol 10h–16h) e/ou seguimento dermatológico regular pelo risco de novas lesões', score: 0.5, ref: 'INCA — Prevenção e Detecção Precoce do Câncer de Pele, 2022; SBD 2023' }
          ]
        }
      ]
    }
  },

  {
    id: 5,
    title: 'Dezenas de manchas escuras no pescoço e nas costas em paciente preocupada com câncer',
    sub: 'UBS — Atenção Primária',
    tema: 'Dermatologia',
    topic: 'ceratose seborreica',
    level: 'moderado',
    cardAccent: '#8C6239',
    instA: {
      scenario: 'Atenção Primária — UBS urbana. Consultório, turno vespertino. Consulta agendada por demanda espontânea.',
      patient: 'L.A.M., 58 anos, feminino, professora aposentada, fototipo III, sem comorbidades relevantes.',
      complaint: 'Refere que apareceram várias "manchas escuras e ásperas" na nuca, no pescoço e na parte de cima das costas nos últimos anos e está apreensiva, pois uma irmã foi diagnosticada com câncer de pele.',
      tasks: [
        'Realize a anamnese dirigida à queixa dermatológica.',
        'Realize o exame físico dermatológico pertinente e, ao receber o impresso fotográfico, faça a fotodescrição das lesões com terminologia semiológica formal.',
        'Formule a hipótese diagnóstica principal e ao menos dois diagnósticos diferenciais.',
        'Estabeleça a conduta adequada, justificando a indicação ou a não indicação de procedimentos.',
        'Oriente a paciente quanto ao diagnóstico, à prevenção e ao seguimento.'
      ]
    },
    instB: {
      vitals: {
        PA: '124/78 mmHg',
        FC: '70 bpm',
        FR: '16 irpm',
        Tax: '36,5 °C',
        Peso: '66 kg',
        Altura: '1,62 m',
        IMC: '25,1 kg/m²'
      },
      physicalGeneral: 'Bom estado geral, lúcida e orientada, corada, hidratada, anictérica, acianótica, afebril. Fototipo III. Fácies ansiosa. Sem sinais de perda ponderal, sem adenomegalias visíveis.',
      physicalSeg: 'PELE (NUCA, REGIÃO CERVICAL POSTERIOR E DORSO SUPERIOR): ver impresso fotográfico — fornecido somente mediante solicitação de exame da pele. À palpação: lesões ásperas, de implantação superficial, com sensação de estarem "sobrepostas" à pele, indolores; a pele de fundo é normocrômica ao exame direto (o tom avermelhado da fotografia se deve à iluminação), sem calor ou sinais inflamatórios | PELE (DEMAIS ÁREAS DO TRONCO): algumas lesões semelhantes, esparsas, em região submamária e flancos | PELE (FACE, PESCOÇO E ANTEBRAÇOS): lentigos solares esparsos, elastose solar leve, sem lesões ulceradas, sem lesões peroladas, sem lesões ásperas eritematosas | PELE (MEMBROS): cerca de 12 nevos melanocíticos pequenos (2–4 mm), simétricos, de bordas regulares e coloração homogênea castanho-clara, todos com aspecto semelhante entre si | COURO CABELUDO, PALMAS, PLANTAS, REGIÃO UNGUEAL E MUCOSAS: sem lesões pigmentadas atípicas | CADEIAS LINFONODAIS: cervicais, axilares e inguinais livres — sem linfonodos palpáveis | ABDOME: plano, flácido, indolor, sem visceromegalias | RESTANTE DO EXAME SEGMENTAR: sem alterações',
      labs: [],
      photo: {
        src: 'img/estacoes/ceratoses-seborreicas-nuca.webp',
        title: 'Fotografia das lesões (nuca e dorso superior)',
        alt: 'Fotografia da nuca e da parte superior das costas, com numerosas lesões escuras de tamanhos variados.',
        caption: 'Paciente de costas: nuca e região cervical posterior na parte superior da imagem, dorso superior/ombros abaixo. Sem régua na foto.',
        request: 'Realize a fotodescrição das lesões utilizando terminologia dermatológica formal (topografia, distribuição, lesão elementar, número, forma, tamanho, bordas, cor, superfície e pele ao redor).'
      },
      note: 'Entregar o impresso de sinais vitais e exame físico geral no início. Entregar o IMPRESSO FOTOGRÁFICO SOMENTE mediante solicitação verbal de examinar a pele; ao entregá-lo, pedir ao candidato que realize a fotodescrição em voz alta. NÃO fornecer a descrição das lesões — o gabarito está na aba do avaliador (Gabarito da Fotodescrição). Se o candidato palpar as lesões, informar: "ásperas, superficiais, parecem coladas sobre a pele, indolores". Se perguntar sobre o tom avermelhado da pele na foto, informar que ao exame direto a pele de fundo é normal (efeito de iluminação). Fornecer os achados de demais segmentos (nevos de membros, couro cabeludo, palmas, plantas, unhas, mucosas, linfonodos) apenas se o candidato solicitar exame de corpo inteiro. Se o candidato indicar EXÉRESE CIRÚRGICA DE TODAS AS LESÕES ou encaminhamento oncológico de urgência, ANOTAR como conduta desproporcional e ERRO CRÍTICO. Se o candidato tranquilizar a paciente SEM ter examinado toda a superfície cutânea, ANOTAR como ERRO CRÍTICO. Ponto-chave da estação: reconhecer benignidade, evitar iatrogenia e conduzir a ansiedade da paciente — o candidato NÃO deve ser premiado por "solicitar biópsia por precaução" de lesões inequivocamente benignas.',
      patientProfile: 'Lúcia A. M., 58 anos, feminino, professora aposentada da rede municipal, casada, dois filhos adultos. Reside em zona urbana. Ensino superior completo. Sem comorbidades em acompanhamento.',
      script: [
        { trigger: 'Queixa principal / abertura', speech: 'Doutor, eu vim porque apareceram um monte de manchinhas escuras no meu pescoço, na nuca e em cima das costas. Minha irmã descobriu um câncer de pele ano passado e desde então eu não durmo direito pensando nisso.' },
        { trigger: 'Tempo de evolução', speech: 'A primeira eu notei uns cinco anos atrás. Foram aparecendo aos poucos, uma aqui, outra ali. Hoje já são dezenas, eu nem consigo mais contar, mais de cinquenta com certeza. Meu marido é que vê, porque eu não enxergo direito a nuca.' },
        { trigger: 'Se mudaram de cor, forma ou tamanho', speech: 'Crescer, elas cresceram bem devagarinho no começo, mas faz tempo que estão do mesmo jeito. A cor é sempre igual, não muda. E o formato também não muda.' },
        { trigger: 'Sintomas locais — coça, dói, sangra', speech: 'Não dói. Sangrar nunca sangrou. Às vezes coça um pouquinho quando a gola da blusa ou a alça do sutiã esfrega, e eu já arranquei uma sem querer com a unha, mas cresceu de novo igual.' },
        { trigger: 'Aspecto das lesões (se perguntado sobre textura)', speech: 'Elas são ásperas, meio engraçadas, parecem que estão coladas por cima da pele, sabe? Que nem se alguém tivesse colado uma casquinha ali.' },
        { trigger: 'Se surgiram todas de uma vez / velocidade recente', speech: 'Não, foi bem aos poucos, ao longo dos anos. Nos últimos meses não apareceu nenhuma nova, não.' },
        { trigger: 'História familiar de câncer de pele', speech: 'Minha irmã mais velha teve. Ela operou o rosto, tirou um pedaço perto do nariz. Disseram que era o tipo que não espalha, mas eu fiquei apavorada mesmo assim.' },
        { trigger: 'Exposição solar / fotoproteção', speech: 'Eu trabalhei a vida toda em sala de aula, sol mesmo eu peguei pouco. Uso protetor no rosto de vez em quando, mas no corpo eu nunca passo.' },
        { trigger: 'Antecedentes pessoais', speech: 'Eu não tenho doença nenhuma. Não tomo remédio contínuo. Não fumo, bebo só socialmente. Nunca tirei nada da pele.' },
        { trigger: 'Sintomas sistêmicos', speech: 'Eu tô bem de saúde. Não emagreci, não tenho dor, como bem, durmo mal só por causa dessa preocupação mesmo.' },
        { trigger: 'Pergunta ativa (durante a consulta)', speech: 'Doutor, o senhor não acha melhor tirar todas por segurança? Eu prefiro tirar tudo e ficar tranquila do que ficar esperando virar câncer.' },
        { trigger: 'Pergunta ativa (ao final)', speech: 'Mas doutor, como é que eu vou saber se uma delas mudar? Eu não consigo ver minhas costas. E eu preciso voltar aqui de quanto em quanto tempo?' }
      ],
      hiddenInfo: 'Uma das lesões foi arrancada acidentalmente com a unha e recresceu com o mesmo aspecto — só revelar se o candidato perguntar especificamente sobre trauma, sangramento ou tentativa de remoção das lesões | A irmã teve carcinoma basocelular em face ("tipo que não espalha"), e não melanoma — só revelar o detalhe se o candidato perguntar especificamente qual foi o tipo de câncer de pele da irmã | Insônia e ansiedade importante há cerca de um ano por medo de câncer, com verificação repetida das lesões no espelho — só revelar se o candidato perguntar sobre sono, humor, ansiedade ou impacto emocional da preocupação | Nenhuma lesão nova surgiu nos últimos meses (afasta sinal de Leser-Trélat) — só revelar se o candidato perguntar sobre surgimento súbito ou explosivo de múltiplas lesões',
      actorBehavior: 'Muito ansiosa e vigilante, porém educada e articulada (professora, ensino superior). Traz a comparação com a irmã repetidamente. Busca ativamente reasseguramento e pressiona pela remoção cirúrgica de todas as lesões ("prefiro tirar tudo"). Se o candidato ceder à pressão e indicar exérese de todas as lesões, demonstrar alívio imediato — comportamento que expõe a falha do candidato em resistir à conduta desproporcional. Se o candidato apenas disser "não é nada" sem examinar toda a pele e sem explicar, permanecer visivelmente insatisfeita, insistir e verbalizar que vai procurar outro médico. Se o candidato examinar cuidadosamente toda a superfície cutânea, explicar as características de benignidade, ensinar o autoexame com o ABCDE e definir retorno, relaxar de forma perceptível, agradecer e aceitar a conduta conservadora.'
    },
    instC: {
      diagnosis: 'Ceratoses seborreicas múltiplas (dezenas) em nuca, região cervical posterior e dorso superior — lesões epiteliais benignas, sem indicação de exérese ou biópsia. Ausência de lesões suspeitas de malignidade no exame de corpo inteiro. Quadro associado a ansiedade significativa relacionada à saúde (cancerofobia), desencadeada pelo diagnóstico de câncer de pele em familiar.',
      photoDescription: 'Topografia: nuca, região cervical posterior e dorso superior (região escapular/ombros), bilateralmente | Distribuição: disseminada, simétrica, com maior densidade na nuca e na base do pescoço | Número: MÚLTIPLAS — dezenas de lesões (> 50 visíveis na foto) | Lesão elementar: PÁPULAS (e algumas pequenas placas) sobrelevadas | Forma: arredondadas a ovaladas, individualmente simétricas | Tamanho: variável, de cerca de 1–2 mm até cerca de 10 mm (as maiores no dorso, à esquerda da imagem); sem régua — estimativa pela proporção com o pescoço | Bordas: nítidas, bem delimitadas e regulares | Cor: castanho-claro a castanho-escuro/negro-acastanhado; CADA LESÃO é individualmente homogênea | Superfície: opaca, rugosa/verrucosa nas lesões maiores, com aspecto de estarem "coladas" sobre a pele (stuck-on); sem ulceração, sem crosta hemática e sem sangramento | Pele ao redor: sem lesões ulceradas ou peroladas; tom avermelhado difuso atribuível à iluminação da fotografia, sem sinais inflamatórios | Padrão do conjunto: MONÓTONO — lesões muito semelhantes entre si, sem lesão discrepante (ausência do sinal do patinho feio) | Síntese esperada: múltiplas pápulas castanhas, bem delimitadas, de aspecto "colado" e superfície verrucosa, monomórficas, em nuca e dorso superior — ceratoses seborreicas múltiplas; pela grande quantidade, é OBRIGATÓRIO perguntar a velocidade de surgimento para afastar o sinal de Leser-Trélat (surgimento súbito/eruptivo)',
      differentials: [
        'Melanoma — principal diagnóstico a ser ativamente excluído, pois a ceratose seborreica pigmentada é seu simulador clínico mais frequente; afastado pela ausência de assimetria, policromia intralesional, bordas irregulares, área de regressão e, sobretudo, pela ausência de evolução recente e pela monotonia do conjunto (ausência do sinal do patinho feio).',
        'Nevo melanocítico (juncional ou composto) — lesão pigmentada benigna comum, porém de superfície lisa, bordas suaves e sem o aspecto "colado", a descamação gordurosa e os pseudocistos córneos característicos da ceratose seborreica.',
        'Carcinoma basocelular pigmentado — pode ser confundido com ceratose seborreica pigmentada, mas apresenta borda perlada translúcida, telangiectasias arboriformes e tendência à ulceração central, todos ausentes neste caso.',
        'Acrocórdons (fibromas moles) — muito comuns na região cervical, porém são pedunculados, moles, cor da pele a castanho-claros e de superfície lisa, sem o aspecto verrucoso "colado" das lesões desta paciente.',
        'Verruga viral (verruga vulgar/plana) ou acantose nigricante — a verruga é mais comum em áreas de trauma, com pontos hemorrágicos puntiformes; a acantose nigricante é aveludada, simétrica e em áreas flexurais, associada à resistência insulínica.'
      ],
      context: 'Mulher de 58 anos, fototipo III, sem exposição solar significativa, apresenta dezenas de pápulas castanhas em nuca, região cervical posterior e dorso superior, de surgimento lento ao longo de cinco anos, atualmente estáveis, com aspecto "colado", superfície verrucosa e pseudocistos córneos — quadro clássico de ceratose seborreica. A estação testa a capacidade de reconhecer benignidade com segurança, evitar iatrogenia diagnóstica e terapêutica e manejar a ansiedade da paciente, que pressiona ativamente por exérese de todas as lesões.',
      justify: 'As lesões apresentam todas as características semiológicas clássicas da ceratose seborreica: pápulas e placas bem delimitadas, de bordas nítidas e regulares, com o característico aspecto de estarem "coladas" ou sobrepostas à pele (aspecto "stuck-on"), superfície opaca, aveludada a verrucosa, com descamação gordurosa e pseudocistos córneos e aberturas foliculares tipo comedão visíveis à inspeção. Cada lesão é individualmente homogênea em cor, com bordas regulares e sem assimetria, e o conjunto é monótono e repetitivo, sem nenhuma lesão que destoe das demais — a ausência do sinal do patinho feio é um dado de segurança importante. A evolução é lenta e as lesões estão estáveis, ao contrário do padrão de mudança progressiva característico do melanoma. O relato de que uma lesão foi destacada com a unha e recresceu idêntica reforça a natureza epidérmica e benigna. A ceratose seborreica é a neoplasia cutânea benigna mais comum, com prevalência que ultrapassa 80% após os 60 anos, não tem potencial de malignização e não exige tratamento. Sua remoção é indicada apenas por motivo estético, por irritação/sangramento recorrente por atrito ou quando há dúvida diagnóstica real — nenhuma dessas condições justificaria a exérese de todas as dezenas de lesões desta paciente. Um único cenário exigiria investigação sistêmica adicional: o sinal de Leser-Trélat, isto é, o surgimento SÚBITO e ERUPTIVO de múltiplas ceratoses seborreicas em curto período, classicamente associado a neoplasia interna, sobretudo adenocarcinomas gastrointestinais; este caso NÃO o preenche, pois as lesões surgiram lentamente ao longo de cinco anos e nenhuma nova surgiu nos últimos meses. ⚠️ A associação do sinal de Leser-Trélat com neoplasia interna é derivada majoritariamente de séries de casos da literatura internacional, com evidência de causalidade limitada. O desfecho correto da estação é, portanto, tranquilização FUNDAMENTADA — após exame de corpo inteiro completo — associada a educação em saúde e seguimento, e não a exérese indiscriminada.',
      expectedAnamnesis: 'Caracterizar o tempo de surgimento das lesões e a velocidade de aparecimento (lento ao longo de anos versus eruptivo) | Investigar mudança de cor, forma, tamanho ou relevo das lesões existentes — critério "E" do ABCDE | Investigar especificamente se alguma lesão destoa das demais em aspecto ou comportamento (sinal do patinho feio) | Investigar sintomas locais: prurido, dor, sangramento, ulceração e irritação por atrito com roupas | Investigar se houve surgimento SÚBITO e explosivo de múltiplas lesões em curto período, para considerar o sinal de Leser-Trélat, e revisar sintomas de neoplasia interna (perda ponderal, alteração do hábito intestinal, sangramento digestivo, disfagia, anemia) | Investigar exposição solar, fototipo e uso de fotoproteção | Investigar antecedente pessoal de câncer de pele ou lesões removidas | Investigar história familiar de câncer de pele, esclarecendo QUAL o tipo (melanoma versus não melanoma), pois o significado prognóstico difere | Investigar imunossupressão e uso de medicações | Investigar o impacto emocional da preocupação: ansiedade, insônia, verificação repetitiva das lesões, prejuízo funcional e expectativa da paciente quanto à conduta',
      expectedPhysical: 'Sinais vitais: dentro da normalidade | Inspeção das lesões sob boa iluminação, aplicando sistematicamente os critérios ABCDE e a regra do patinho feio a cada uma e ao conjunto | Descrição semiológica formal esperada (ver Gabarito da Fotodescrição): dezenas de pápulas castanhas a castanho-escuras, de 1 a 10 mm, bem delimitadas, de bordas regulares, individualmente homogêneas, superfície verrucosa e aspecto "colado", distribuídas de forma simétrica em nuca, região cervical posterior e dorso superior, com padrão monótono e sem ulceração | Palpação das lesões, identificando a superfície áspera e a implantação superficial (sensação de lesão sobreposta, destacável) | Exame COMPLETO de toda a superfície cutânea — face, couro cabeludo, pescoço, tronco, membros, palmas, plantas, regiões interdigitais, região ungueal e mucosas — para excluir, com segurança, lesão maligna sincrônica; a tranquilização só é legítima após esse exame | Comparação entre as lesões, verificando a ausência de lesão discrepante | Palpação das cadeias linfonodais cervicais, axilares e inguinais | Palpação abdominal, especialmente pertinente caso houvesse suspeita de sinal de Leser-Trélat | Uso de dermatoscopia, se disponível, buscando os achados típicos da ceratose seborreica',
      expectedExams: [
        { exam: 'Nenhum exame complementar de rotina', justify: 'A ceratose seborreica é diagnóstico eminentemente CLÍNICO. Diante de lesões com características típicas e inequívocas de benignidade, não há indicação de biópsia, exames laboratoriais ou de imagem. Solicitar biópsia "por precaução" de lesões claramente benignas expõe a paciente a procedimento desnecessário, cicatriz, custo e reforço do comportamento ansioso.', expected: 'Não aplicável.' },
        { exam: 'Dermatoscopia', justify: 'Recurso complementar que confirma a benignidade e reforça a tranquilização da paciente, aumentando a segurança diagnóstica sem necessidade de procedimento invasivo.', expected: 'Pseudocistos córneos (estruturas em milia), aberturas tipo comedão, fissuras e cristas com aspecto cerebriforme, borda bem demarcada em "traça"; ausência de rede pigmentar atípica, de véu azul-esbranquiçado e de padrão vascular polimorfo.' },
        { exam: 'Biópsia de lesão isolada', justify: 'Reservada EXCLUSIVAMENTE a lesão individual que apresente características atípicas, crescimento recente, mudança de cor, ulceração ou que destoe do conjunto. NÃO indicada neste caso, em que todas as lesões são típicas e monótonas. Também indicada se houver dúvida diagnóstica real com melanoma ou carcinoma basocelular pigmentado.', expected: 'Não indicada neste caso.' },
        { exam: 'Investigação de neoplasia interna (endoscopia digestiva alta, colonoscopia, hemograma, pesquisa de sangue oculto nas fezes)', justify: 'Indicada APENAS se houvesse surgimento súbito e eruptivo de múltiplas ceratoses seborreicas em curto período (sinal de Leser-Trélat) ou sintomas sistêmicos de alarme — o que NÃO ocorre neste caso, com surgimento lento ao longo de cinco anos. Manter, contudo, o rastreamento de câncer colorretal conforme faixa etária, independentemente das lesões cutâneas. ⚠️ A associação de Leser-Trélat com neoplasia interna baseia-se predominantemente em séries de casos da literatura internacional, com nível de evidência limitado.', expected: 'Não indicada por esta queixa. Rastreamento de câncer colorretal recomendado dos 50 aos 75 anos conforme diretrizes do INCA/MS.' }
      ],
      expectedConduct: 'Farmacológica: nenhum tratamento farmacológico está indicado. NÃO prescrever ceratolíticos, corticoides, antifúngicos ou clareadores. | Não farmacológica / procedimento: conduta expectante é a correta. NÃO indicar exérese cirúrgica das lesões, especialmente não de todas elas — trata-se de conduta desproporcional, com risco de cicatrizes múltiplas, discromias e reforço do comportamento ansioso, sem qualquer benefício oncológico, pois a ceratose seborreica não tem potencial de malignização. Se houver, no futuro, incômodo estético relevante ou irritação/sangramento recorrente por atrito em lesão específica, pode-se oferecer remoção pontual (crioterapia com nitrogênio líquido, curetagem ou eletrocoagulação) por dermatologista, em caráter eletivo e com esclarecimento de que não se trata de conduta oncológica; orientar medidas simples para reduzir o atrito (roupas mais folgadas, golas e alças de sutiã que não atritem as lesões). | Encaminhamento: não há indicação de encaminhamento de urgência nem de encaminhamento oncológico. Encaminhamento eletivo à dermatologia é razoável apenas se houver dúvida diagnóstica persistente, desejo de remoção estética ou necessidade de dermatoscopia não disponível na unidade. Considerar apoio em saúde mental (matriciamento, psicologia da atenção básica ou NASF, quando disponível) se a ansiedade for incapacitante ou houver insônia persistente. | Orientações à paciente: explicar de forma clara e fundamentada que as lesões são benignas e comuns, popularmente conhecidas como "verrugas senis" ou "sinais da idade", que aparecem com o envelhecimento e NÃO se transformam em câncer; mostrar concretamente quais características foram avaliadas e por que indicam benignidade, em vez de apenas afirmar "não é nada"; ensinar o ABCDE e o sinal do patinho feio para autoexame mensal; orientar que solicite ajuda de familiar ou use espelho duplo para inspecionar o dorso; orientar fotoproteção como medida geral de prevenção; esclarecer a diferença entre o carcinoma basocelular da irmã (baixa letalidade) e o melanoma, reduzindo a distorção cognitiva. | Seguimento: retorno programado ao menos anual para exame de pele, com acesso facilitado e retorno antecipado caso surja qualquer lesão nova, ou caso alguma lesão mude de cor, tamanho ou forma, ulcere ou sangre espontaneamente; validar que retornar diante de dúvida é conduta correta, e não exagero.',
      expectedCommunication: 'Apresentação: apresentar-se pelo nome e função, confirmar o nome da paciente e explicar o objetivo da consulta | Solicitar permissão antes de examinar a pele do pescoço, da nuca e do tronco, garantindo privacidade, exposição gradual e respeito ao pudor | Escuta ativa: permitir o relato inicial sem interromper, usar perguntas abertas, nomear e validar explicitamente o medo relacionado ao diagnóstico da irmã em vez de descartá-lo | Explorar diretamente a expectativa da paciente ("o que a senhora esperava que fôssemos fazer hoje?") e o impacto da ansiedade sobre o sono e a rotina | Comunicação do diagnóstico: explicar a benignidade de forma FUNDAMENTADA, descrevendo as características observadas que sustentam a conclusão, e não por simples reasseguramento vazio | Resistir de forma empática à pressão pela exérese de todas as lesões, explicando os riscos do procedimento desnecessário e a ausência de benefício, sem confrontar ou ridicularizar a paciente e sem ceder à conduta desproporcional | Empoderar a paciente com o autoexame e com critérios objetivos de retorno, transformando a vigilância ansiosa em vigilância informada | Verificar a compreensão pedindo que a paciente repita os sinais de alarme e perguntar se restaram dúvidas antes de encerrar',
      criticalErrors: [
        'Indicar exérese cirúrgica de todas as lesões (ou biópsia de múltiplas lesões) cedendo à pressão da paciente, expondo-a a procedimentos desnecessários, cicatrizes e custos sem qualquer benefício oncológico.',
        'Tranquilizar a paciente afirmando benignidade SEM ter examinado toda a superfície cutânea, correndo o risco de deixar passar uma lesão maligna sincrônica.',
        'Diagnosticar erroneamente as lesões como melanoma e encaminhar em caráter oncológico de urgência, gerando iatrogenia psicológica grave em paciente já ansiosa e sobrecarregando a rede.',
        'Ignorar ou minimizar a ansiedade e o sofrimento da paciente ("isso é besteira sua", "não é nada, pode ir embora"), sem explicação fundamentada, resultando em não adesão, peregrinação por outros serviços e busca de procedimentos desnecessários.',
        'Não ensinar critérios objetivos de autoexame e de retorno (ABCDE, sinal do patinho feio, sinais de alarme), deixando a paciente sem instrumentos para distinguir mudança relevante de lesão estável.',
        'Deixar de investigar o padrão de surgimento das lesões (lento versus eruptivo), o que impediria reconhecer o sinal de Leser-Trélat em um cenário em que ele estivesse presente.'
      ]
    },
    instD: {
      title: 'CHECKLIST — MÚLTIPLAS LESÕES PIGMENTADAS EM NUCA E DORSO COM ANSIEDADE POR CÂNCER (CERATOSE SEBORREICA)',
      sections: [
        {
          h: 'BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE',
          items: [
            { item: 'Apresentou-se pelo nome e função e confirmou a identificação da paciente', score: 0.5, ref: 'CFM — Código de Ética Médica, 2019' },
            { item: 'Solicitou permissão antes de examinar a pele do pescoço e do tronco e preservou a privacidade e o pudor da paciente', score: 0.5, ref: 'CFM — Código de Ética Médica, 2019; MS — HumanizaSUS, 2013' },
            { item: 'Nomeou e validou explicitamente o medo da paciente relacionado ao câncer de pele da irmã e/ou explorou sua expectativa quanto à consulta', score: 0.5, ref: 'MS — Política Nacional de Humanização, 2013; Método Clínico Centrado na Pessoa — MS, Cadernos de Atenção Básica' }
          ]
        },
        {
          h: 'BLOCO 2 — ANAMNESE',
          items: [
            { item: 'Investigou se as lesões mudaram de cor, tamanho, forma ou relevo (critério "E" — evolução) e se alguma destoa das demais', score: 1.0, ref: 'SBD — Consenso Brasileiro de Câncer da Pele Melanoma, 2023 (ABCDE e sinal do patinho feio)' },
            { item: 'Investigou o padrão de surgimento das lesões — lento ao longo de anos versus súbito/eruptivo (pesquisa do sinal de Leser-Trélat)', score: 0.5, ref: 'SBD — Ceratose Seborreica, 2023. ⚠️ Associação de Leser-Trélat com neoplasia interna baseada em literatura internacional, evidência limitada' },
            { item: 'Investigou sintomas locais das lesões (prurido, sangramento, irritação por atrito) e/ou antecedente pessoal de câncer de pele', score: 0.5, ref: 'MS — Cadernos de Atenção Básica nº 29 — Dermatologia, 2016' },
            { item: 'Investigou o impacto emocional da preocupação (ansiedade, insônia, verificação repetida) e/ou qual foi o tipo de câncer de pele da irmã', score: 0.5, ref: 'MS — Caderno de Atenção Básica nº 34 — Saúde Mental, 2013' }
          ]
        },
        {
          h: 'BLOCO 3 — EXAME FÍSICO',
          items: [
            { item: 'Realizou a fotodescrição das lesões com terminologia dermatológica formal (topografia, número, distribuição), citando o aspecto "colado" à pele, a superfície verrucosa/aveludada e as bordas bem delimitadas', score: 1.0, ref: 'SBD — Ceratose Seborreica: Diagnóstico Clínico, 2023' },
            { item: 'Examinou TODA a superfície cutânea (corpo inteiro), incluindo couro cabeludo, palmas, plantas, unhas e mucosas, antes de concluir pela benignidade', score: 1.0, ref: 'SBD — Campanha Nacional de Prevenção ao Câncer da Pele, 2023; INCA 2022' },
            { item: 'Aplicou os critérios ABCDE e/ou a regra do patinho feio às lesões, comparando-as entre si', score: 0.5, ref: 'SBD — Consenso Brasileiro de Melanoma, 2023' }
          ]
        },
        {
          h: 'BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
          items: [
            { item: 'Formulou a hipótese diagnóstica de ceratose seborreica (lesão benigna), reconhecendo tratar-se de diagnóstico clínico', score: 1.0, ref: 'SBD — Ceratose Seborreica, 2023; MS — Cadernos de Atenção Básica nº 29, 2016' },
            { item: 'Citou ao menos dois diagnósticos diferenciais pertinentes (melanoma, nevo melanocítico, CBC pigmentado, verruga viral)', score: 0.5, ref: 'SBD — Diagnóstico Diferencial das Lesões Pigmentadas, 2023' },
            { item: 'Justificou a NÃO indicação de biópsia/exames complementares diante de lesões com características típicas de benignidade', score: 0.5, ref: 'SBD — Ceratose Seborreica, 2023; CFM — Recomendação sobre uso racional de procedimentos, 2019' }
          ]
        },
        {
          h: 'BLOCO 5 — CONDUTA E ORIENTAÇÃO AO PACIENTE',
          items: [
            { item: 'Manteve conduta expectante e recusou, de forma empática e fundamentada, a exérese de todas as lesões solicitada pela paciente', score: 1.0, ref: 'SBD — Ceratose Seborreica: indicações de tratamento, 2023; CFM — Código de Ética Médica, 2019 (não maleficência)' },
            { item: 'Explicou a benignidade de forma fundamentada, descrevendo as características avaliadas, e esclareceu que a lesão não se transforma em câncer', score: 0.5, ref: 'INCA — Detecção Precoce do Câncer de Pele, 2022' },
            { item: 'Ensinou o autoexame de pele (ABCDE / sinal do patinho feio), definiu sinais de alarme e estabeleceu retorno programado', score: 0.5, ref: 'INCA — Prevenção e Detecção Precoce do Câncer de Pele, 2022; SBD 2023' }
          ]
        }
      ]
    }
  },

  {
    id: 6,
    title: 'Lesões ásperas na calva e no rosto em pescador aposentado',
    sub: 'UBS — Atenção Primária (município litorâneo)',
    tema: 'Dermatologia',
    topic: 'ceratose actínica e campo de cancerização',
    level: 'moderado',
    cardAccent: '#B07D3A',
    instA: {
      scenario: 'Atenção Primária — UBS de município litorâneo. Consultório, turno matutino. Consulta de demanda espontânea.',
      patient: 'S.R.O., 68 anos, masculino, pescador aposentado, fototipo II, sem comorbidades em acompanhamento regular.',
      complaint: 'Refere "casquinhas ásperas" na careca e no rosto que descamam, saem e voltam, e que às vezes ardem quando pega sol.',
      tasks: [
        'Realize a anamnese dirigida à queixa dermatológica.',
        'Realize o exame físico dermatológico pertinente e, ao receber os impressos fotográficos, faça a fotodescrição das lesões com terminologia semiológica formal.',
        'Identifique a hipótese diagnóstica principal e ao menos dois diagnósticos diferenciais.',
        'Proponha a conduta terapêutica e a investigação adequadas.',
        'Oriente o paciente quanto à prevenção, ao seguimento e aos sinais de alarme.'
      ]
    },
    instB: {
      vitals: {
        PA: '138/84 mmHg',
        FC: '74 bpm',
        FR: '16 irpm',
        Tax: '36,4 °C',
        Peso: '77 kg',
        Altura: '1,75 m',
        IMC: '25,1 kg/m²'
      },
      physicalGeneral: 'Bom estado geral, lúcido e orientado, corado, hidratado, anictérico, acianótico, afebril. Fototipo II, com heliodermatite grave: pele espessada e amarelada, rugas profundas, elastose solar acentuada em face e nuca, lentigos solares múltiplos, leucodermia gutata em antebraços. Calvície androgenética avançada (padrão Hamilton VI), com vértice do couro cabeludo amplamente exposto.',
      physicalSeg: 'PELE (COURO CABELUDO): ver impresso fotográfico — fornecido somente mediante solicitação de exame da pele | PELE (FACE): múltiplas máculas e placas finas eritematosas, de limites mal definidos, com fina descamação, de alguns milímetros a cerca de 2 cm, muitas confluentes, em fronte, dorso e ponta nasal, regiões malares, região perioral e mento, sobre pele com rugas profundas e elastose solar | À palpação: múltiplas lesões ásperas, com textura de "lixa fina", várias mais perceptíveis ao tato do que à vista; sem endurecimento ou infiltração nas lesões do couro cabeludo e da face | LÁBIO INFERIOR: semimucosa ressecada, esbranquiçada e com fissuras superficiais, apagamento do limite cutâneo-mucoso e áreas de descamação — compatível com queilite actínica | PELE (ANTEBRAÇOS E DORSO DAS MÃOS): lentigos solares, púrpura senil, algumas lesões ásperas semelhantes às da face | PELE (TRONCO E MEMBROS INFERIORES — ÁREAS COBERTAS): sem lesões ásperas, sem lesões pigmentadas atípicas | PAVILHÕES AURICULARES: ver impresso "Achado ao exame dos pavilhões auriculares" — fornecer SOMENTE se o candidato examinar as orelhas | CADEIAS LINFONODAIS: cervicais, submandibulares, pré-auriculares e occipitais livres — sem linfonodos palpáveis | APARELHO RESPIRATÓRIO E CARDIOVASCULAR: sem alterações',
      labs: [],
      photo: {
        src: 'img/estacoes/ceratoses-actinicas-couro-cabeludo.webp',
        title: 'Fotografia das lesões (couro cabeludo — vértice e região frontoparietal)',
        alt: 'Fotografia do couro cabeludo calvo visto de cima, com cabelos grisalhos na periferia, múltiplas manchas e lesões descamativas, e marcações de caneta.',
        caption: 'Paciente deitado, couro cabeludo calvo fotografado de cima (fronte na parte superior da imagem; cabelos grisalhos occipitais/temporais na parte inferior e à direita). As marcações em caneta foram feitas pelo examinador para delimitar uma área de tratamento.',
        request: 'Realize a fotodescrição das lesões utilizando terminologia dermatológica formal (topografia, distribuição, lesões elementares, número, tamanho, limites, cor, superfície e pele ao redor).'
      },
      image: {
        title: 'Achado ao exame dos pavilhões auriculares (entregar SOMENTE se o candidato examinar as orelhas)',
        report: 'Hélice do pavilhão auricular ESQUERDO: lesão ÚNICA, distinta das demais, de cerca de 13 mm — pápulo-nódulo eritematoso de base INFILTRADA e ENDURECIDA à palpação, superfície ceratósica espessa com crosta central aderida, pequena erosão sob a crosta e sangramento ao mínimo toque; halo eritematoso; DOLOROSA à palpação, ao contrário de todas as outras lesões.\nPavilhão auricular direito: escamas ásperas finas, semelhantes às do couro cabeludo, sem infiltração.'
      },
      note: 'Entregar o impresso de sinais vitais e exame físico geral no início. Entregar o IMPRESSO FOTOGRÁFICO (couro cabeludo) quando o candidato solicitar examinar as lesões; ao entregá-lo, pedir que realize a fotodescrição em voz alta. NÃO fornecer a descrição das lesões — o gabarito está na aba do avaliador (Gabarito da Fotodescrição). Entregar o impresso do PAVILHÃO AURICULAR (lesão sentinela) SOMENTE se o candidato examinar especificamente as orelhas ou solicitar exame de toda a área fotoexposta; NÃO informar espontaneamente — as orelhas não aparecem na foto. Informar o achado do lábio inferior (queilite actínica) somente se o candidato examinar os lábios. Ponto-chave da estação: além de reconhecer e tratar o campo de cancerização, o candidato deve IDENTIFICAR a lesão sentinela da orelha, com características distintas (infiltração, endurecimento, dor, sangramento), e indicar BIÓPSIA dela, e não crioterapia. Se o candidato aplicar crioterapia ou 5-fluoruracila na lesão da orelha sem biópsia, ANOTAR como ERRO CRÍTICO. Se o candidato não examinar as orelhas, ANOTAR como ERRO CRÍTICO.',
      patientProfile: 'Sebastião R. O., 68 anos, masculino, pescador aposentado, casado, três filhos. Reside em município litorâneo. Ensino fundamental incompleto. Renda de aposentadoria rural. Sem acompanhamento médico regular.',
      script: [
        { trigger: 'Queixa principal / abertura', speech: 'Doutor, é que na minha careca e no rosto vive nascendo umas casquinhas ásperas. Elas descascam, eu tiro com a unha, aí voltam no mesmo lugar. Já faz tempo isso.' },
        { trigger: 'Tempo de evolução', speech: 'Uns quatro, cinco anos. No começo era uma ou duas, hoje é um montão. Quando eu passo a mão na cabeça sinto tudo cheio de asperezinha, parece uma lixa.' },
        { trigger: 'Sintomas — arde, coça, dói', speech: 'Elas ardem um pouco quando eu fico no sol, e às vezes coça. Doer não dói, não... só uma aqui na orelha que tá incomodando de um tempo pra cá.' },
        { trigger: 'Sobre a lesão da orelha (se perguntado especificamente)', speech: 'Essa da orelha é diferente das outras, doutor. Ela é mais durinha, dói quando eu esbarro e sangra quando eu tiro a casquinha. Faz uns quatro meses que ela apareceu e não sara de jeito nenhum. As outras não sangram assim.' },
        { trigger: 'Exposição solar / ocupação', speech: 'Eu fui pescador quarenta anos, doutor. Saía de madrugada e voltava de tarde, no mar, sem sombra nenhuma. E o sol no mar bate em dobro, reflete na água.' },
        { trigger: 'Fotoproteção', speech: 'Boné eu usava às vezes, mas o vento levava. Protetor solar eu nunca usei, nem sabia direito pra que servia. E hoje em dia eu acho caro.' },
        { trigger: 'Antecedentes pessoais', speech: 'Nunca tive doença séria. Não tenho pressão alta que eu saiba, nem diabetes. Não faço acompanhamento em lugar nenhum. Eu bebo umas cervejas no fim de semana e fumei até os 40, depois parei.' },
        { trigger: 'Lesões de pele prévias', speech: 'Nunca tirei nada da pele não, doutor. Nunca fui num médico de pele na vida.' },
        { trigger: 'História familiar', speech: 'De câncer de pele na família eu não sei de ninguém não.' },
        { trigger: 'Tratamentos já tentados', speech: 'Eu passei óleo de amêndoas e uma pomada de hidratante que a minha mulher comprou. Amolece um pouco a casquinha, mas ela volta tudo igual.' },
        { trigger: 'Pergunta ativa (após demonstrar suspeita)', speech: 'Doutor, isso aqui é câncer? Todas elas são? Eu vou ter que tirar tudo isso da cabeça?' },
        { trigger: 'Pergunta ativa (ao ouvir a conduta)', speech: 'Esse protetor solar eu tenho que comprar? Porque é caro, doutor, e eu vivo de aposentadoria. Tem outro jeito de eu me proteger?' }
      ],
      hiddenInfo: 'Existe uma LESÃO SENTINELA no pavilhão auricular esquerdo, com características distintas das demais: infiltrada, endurecida, dolorosa, que sangra ao toque e não cicatriza há cerca de 4 meses — só revelar se o candidato examinar especificamente as orelhas ou perguntar se alguma lesão é diferente das outras, dói, sangra ou não cicatriza | Queilite actínica em lábio inferior — só revelar se o candidato examinar os lábios ou perguntar sobre ressecamento/descamação labial | Ex-tabagista (parou aos 40 anos) — só revelar se perguntado sobre hábitos de vida | Barreira financeira ao fotoprotetor, considerado caro para a renda de aposentadoria — só revelar se o candidato perguntar sobre condições para adquirir protetor solar ou abordar a viabilidade da orientação',
      actorBehavior: 'Simples, cordial e falante, com sotaque e vocabulário regional. Trata as lesões como consequência natural do trabalho ("é do sol, isso é normal de quem vive no mar"). Colaborativo, responde ao que for perguntado, mas NÃO menciona espontaneamente a lesão da orelha — só a relata se questionado sobre alguma lesão diferente, dolorosa, sangrante ou se o candidato examinar as orelhas. Fica genuinamente assustado ao ouvir que pode haver câncer e pergunta se todas as lesões são câncer. Preocupa-se de forma concreta com o custo do protetor solar e demonstra alívio se o candidato oferecer alternativas viáveis (chapéu de aba larga, camisa de manga longa, evitar horários de pico, sombra). Se o candidato der orientação genérica sem considerar a renda, responder evasivamente ("vou ver se dá pra comprar, doutor").'
    },
    instC: {
      diagnosis: 'Ceratoses actínicas múltiplas com campo de cancerização em couro cabeludo e face, associadas a queilite actínica em lábio inferior, em paciente com heliodermatite grave. Presença de LESÃO SENTINELA em pavilhão auricular esquerdo com sinais de progressão para carcinoma espinocelular (CEC) — lesão infiltrada, endurecida, dolorosa, sangrante e não cicatrizada há 4 meses.',
      photoDescription: 'Topografia: couro cabeludo calvo (vértice e região frontoparietal) | Lesões elementares: múltiplas MÁCULAS e PÁPULAS/pequenas placas ERITEMATOSAS, de limites imprecisos, recobertas por ESCAMAS secas, brancas a amareladas, ADERIDAS (várias com escama espessa, esbranquiçada) | Número e tamanho: dezenas de lesões, de cerca de 2 a 10 mm, algumas confluentes | Pele ao redor: eritema difuso, pele atrófica e brilhante, numerosos LENTIGOS SOLARES (máculas castanhas de 3–15 mm) e efélides — fotodano crônico grave; marcações em caneta delimitando área de tratamento | Sem nódulo, ulceração, borda perolada ou lesão pigmentada atípica nesta foto | Distribuição: restrita à área fotoexposta do couro cabeludo calvo (a face, não fotografada, tem lesões semelhantes ao exame) | Síntese esperada: múltiplas ceratoses actínicas sobre pele com dano actínico crônico grave — CAMPO DE CANCERIZAÇÃO; nenhuma das lesões da foto tem sinais de CEC, mas o candidato deve examinar as ORELHAS (não fotografadas), onde está a lesão sentinela',
      differentials: [
        'Carcinoma espinocelular (CEC) invasivo — é a hipótese que se impõe para a lesão sentinela do pavilhão auricular; os sinais de alarme de progressão da ceratose actínica para CEC são infiltração/endurecimento da base, dor, sangramento, ulceração, crescimento rápido, diâmetro maior que 1 cm e refratariedade ao tratamento tópico — todos presentes nessa lesão específica, o que a torna prioridade diagnóstica sobre o campo actínico.',
        'Carcinoma basocelular superficial — pode se apresentar como placa eritematodescamativa em área fotoexposta, mas costuma exibir borda perlada e telangiectasias arboriformes, ausentes nas lesões do campo actínico deste paciente.',
        'Ceratose seborreica — lesão benigna que também descama, porém tem aspecto "colado" à pele, bordas bem delimitadas e pseudocistos córneos, e não apresenta o eritema de base nem a textura de lixa fina característica da ceratose actínica.',
        'Dermatite seborreica ou psoríase do couro cabeludo — cursam com eritema e descamação, porém a descamação é mais untuosa (seborreica) ou em placas prateadas bem delimitadas (psoríase), acometem também áreas não fotoexpostas e não apresentam a distribuição estritamente restrita às áreas de exposição solar cumulativa.'
      ],
      context: 'Homem de 68 anos, fototipo II, pescador por 40 anos com exposição solar ocupacional extrema e amplificada pela reflexão na água, sem qualquer fotoproteção, apresenta dezenas de lesões eritematodescamativas ásperas, por vezes confluentes, restritas às áreas fotoexpostas, configurando campo de cancerização, além de queilite actínica. Entre elas, destaca-se uma lesão sentinela no pavilhão auricular com características clínicas de carcinoma espinocelular. O caso exige duas condutas simultâneas e distintas: tratamento do campo e biópsia da lesão suspeita.',
      justify: 'As lesões do couro cabeludo e da face são típicas de ceratose actínica: máculas e pápulas eritematosas de limites imprecisos, recobertas por escama seca e aderida, restritas às áreas fotoexpostas, frequentemente mais perceptíveis à PALPAÇÃO do que à inspeção — daí a importância semiológica de palpar sistematicamente a área, e não apenas olhar. O acometimento difuso e confluente, com dezenas de lesões sobre pele com elastose solar acentuada, caracteriza o campo de cancerização: uma área de dano actínico crônico em que existem alterações genéticas subclínicas disseminadas, com múltiplas lesões visíveis e um número ainda maior de lesões infraclínicas, o que impõe tratamento do CAMPO e não apenas de lesões isoladas. A ceratose actínica é lesão pré-maligna, com risco individual anual de transformação em CEC estimado entre 0,025% e 16% por lesão, sendo o risco cumulativo substancial em pacientes com múltiplas lesões e dano actínico grave. A queilite actínica é o equivalente da ceratose actínica no lábio e apresenta risco de progressão maior que o das lesões cutâneas, exigindo vigilância específica. O elemento decisivo do caso, entretanto, é a lesão do pavilhão auricular: sua base infiltrada e endurecida, a dor à palpação, o sangramento ao mínimo toque, o diâmetro de 13 mm, a evolução de quatro meses sem cicatrização e o fato de destoar de todas as outras lesões constituem o conjunto clássico de sinais de progressão para CEC invasivo. O pavilhão auricular é, ademais, uma das localizações de maior risco de CEC agressivo e metastático. Essa lesão exige BIÓPSIA e não pode ser tratada empiricamente com crioterapia ou tópicos, que destruiriam a lesão sem diagnóstico e sem avaliação de invasão em profundidade. A ausência de linfonodomegalia cervical e pré-auricular é favorável, mas não dispensa a investigação.',
      expectedAnamnesis: 'Caracterizar o tempo de evolução das lesões e o padrão recidivante (descamam, saem e retornam no mesmo local) | Investigar sintomas: ardência, prurido, dor e sangramento | Perguntar ATIVAMENTE se alguma lesão é DIFERENTE das demais — se dói, sangra, endureceu, cresceu ou não cicatriza — pergunta-chave que revela a lesão sentinela | Investigar exposição solar ocupacional cumulativa, incluindo o efeito de superfícies reflexivas (água, areia) | Investigar uso de fotoproteção ao longo da vida e as barreiras atuais ao seu uso, incluindo custo e viabilidade | Investigar fototipo e história de queimaduras solares | Investigar antecedente pessoal de câncer de pele ou lesões previamente removidas | Investigar história familiar de câncer de pele | Investigar imunossupressão (transplante, HIV, imunossupressores), exposição a arsênico e radioterapia prévia | Investigar hábitos de vida, especialmente tabagismo e etilismo, relevantes para o risco de CEC labial | Investigar tratamentos tópicos já utilizados sobre as lesões | Investigar condições socioeconômicas e viabilidade de adesão às medidas de fotoproteção',
      expectedPhysical: 'Sinais vitais: sem alterações relevantes ao caso; aferição de PA pertinente em paciente sem acompanhamento prévio | Inspeção sob boa iluminação de toda a área fotoexposta, com atenção ao couro cabeludo em paciente calvo | PALPAÇÃO SISTEMÁTICA do couro cabeludo, da fronte, do nariz, das regiões malares e dos pavilhões auriculares — manobra essencial, pois muitas ceratoses actínicas são detectadas pela textura de lixa antes de serem visíveis | Descrição semiológica formal esperada para o campo: múltiplas máculas e pápulas eritematosas de limites imprecisos, recobertas por escama seca e aderida, ásperas ao tato, sobre pele com elastose solar, distribuídas exclusivamente em áreas fotoexpostas | Identificação e descrição SEPARADA da lesão sentinela: pápulo-nódulo único de 13 mm em hélice auricular esquerda, com base infiltrada e endurecida à palpação, superfície ceratósica, crosta central com erosão subjacente, doloroso e sangrante ao toque — reconhecendo que destoa do padrão das demais | Palpação da base de cada lesão suspeita para avaliar infiltração e endurecimento | Exame OBRIGATÓRIO dos pavilhões auriculares (anterior e posterior) e da região retroauricular | Exame do lábio inferior e da semimucosa, pesquisando queilite actínica (ressecamento, apagamento do limite cutâneo-mucoso, fissuras, áreas esbranquiçadas ou endurecidas) | Exame do restante da superfície cutânea, incluindo áreas cobertas, para excluir outras lesões | Palpação das cadeias linfonodais cervicais, pré-auriculares, submandibulares e occipitais — drenagem do pavilhão auricular, obrigatória diante de suspeita de CEC',
      expectedExams: [
        { exam: 'Biópsia da lesão do pavilhão auricular esquerdo (incisional ou excisional, conforme viabilidade)', justify: 'Lesão com sinais clínicos de progressão para carcinoma espinocelular — base infiltrada e endurecida, dor, sangramento, diâmetro > 1 cm e ausência de cicatrização por 4 meses. A biópsia é obrigatória e prioritária, pois define o diagnóstico, o grau de diferenciação e a profundidade de invasão, parâmetros que determinam o tratamento e o risco de metástase. Tratar empiricamente com crioterapia ou tópico destruiria a lesão sem diagnóstico.', expected: 'Carcinoma espinocelular invasivo, com descrição do grau de diferenciação, espessura, invasão perineural e status de margens.' },
        { exam: 'Diagnóstico clínico das ceratoses actínicas do campo, sem necessidade de biópsia individual', justify: 'A ceratose actínica é diagnóstico clínico, estabelecido pela inspeção e pela palpação (textura de lixa) em áreas fotoexpostas; biopsiar rotineiramente as dezenas de lesões do campo é inviável e desnecessário. A biópsia fica reservada às lesões com sinais de alarme para CEC ou que não respondem ao tratamento adequado.', expected: 'Não aplicável ao campo; reservada às lesões atípicas.' },
        { exam: 'Dermatoscopia', justify: 'Auxilia a diferenciar ceratose actínica de CEC inicial, carcinoma basocelular superficial e ceratose seborreica, e a selecionar as lesões que exigem biópsia.', expected: 'Padrão em morango (pseudorrede eritematosa com aberturas foliculares preenchidas por ceratina) nas ceratoses actínicas; vasos glomerulares/pontilhados e massas ceratósicas na lesão suspeita de CEC.' },
        { exam: 'Avaliação da queilite actínica em lábio inferior, com biópsia se houver área endurecida, ulcerada ou leucoplásica persistente', justify: 'A queilite actínica é lesão potencialmente maligna com risco de progressão para CEC de lábio superior ao das ceratoses actínicas cutâneas, e o CEC labial apresenta maior potencial metastático.', expected: 'Queilite actínica sem sinais de invasão neste caso; manter vigilância e tratar.' },
        { exam: 'Exames de imagem e estadiamento (ultrassonografia de cadeias linfonodais cervicais, tomografia)', justify: 'NÃO indicados na avaliação inicial da atenção primária. Reservados, sob condução do serviço especializado, aos CEC de alto risco confirmados: tumores > 2 cm, invasão profunda, invasão perineural, localização de alto risco (orelha, lábio), recidivados ou com linfonodo suspeito. ⚠️ A estratificação de risco do CEC segue sistemas de classificação de origem estrangeira (AJCC/BWH), adotados pelas diretrizes brasileiras da SBD/SBCD.', expected: 'A definir após o resultado histopatológico.' }
      ],
      expectedConduct: 'Farmacológica: tratamento do CAMPO de cancerização, e não apenas de lesões isoladas — 5-fluoruracila creme a 5% aplicado nas áreas acometidas, tipicamente 1 a 2 vezes ao dia por 2 a 4 semanas, com orientação expressa de que ocorrerá reação inflamatória intensa (eritema, erosão, crostas) como parte esperada do efeito terapêutico, o que é a principal causa de abandono; alternativas incluem imiquimode creme a 5% e diclofenaco gel a 3%. Para a queilite actínica, indicar tratamento específico e fotoproteção labial com batom/protetor labial com FPS. NÃO aplicar tópicos nem crioterapia na lesão do pavilhão auricular antes da biópsia. ⚠️ A terapia fotodinâmica é opção consolidada para campo de cancerização, porém com disponibilidade restrita na rede pública brasileira. | Não farmacológica / procedimento: crioterapia com nitrogênio líquido para lesões actínicas isoladas e bem definidas, procedimento realizável na atenção primária ou ambulatorial quando há profissional capacitado e insumo disponível; para a lesão do pavilhão auricular, a conduta é BIÓPSIA seguida de exérese cirúrgica com margens adequadas em serviço especializado. | Encaminhamento: encaminhamento PRIORITÁRIO à dermatologia/cirurgia dermatológica para a lesão do pavilhão auricular, com descrição no formulário das características de suspeição (infiltração, dor, sangramento, 4 meses sem cicatrização, localização de alto risco); encaminhamento para o tratamento do campo se não houver disponibilidade de crioterapia ou tópicos na unidade; após confirmação de CEC, aplicar os prazos da Lei nº 12.732/2012. | Orientações ao paciente: explicar em linguagem acessível que as lesões da careca e do rosto NÃO são câncer, mas são lesões pré-cancerosas — "machucados de sol" que podem, com o tempo, virar câncer, e por isso precisam ser tratadas; explicar separadamente que a lesão da orelha é diferente e precisa ser retirada e examinada; orientar fotoproteção de forma VIÁVEL e adaptada à renda, priorizando barreiras físicas de baixo custo — chapéu de aba larga (mais eficaz que boné, que não protege orelhas e nuca), camisa de manga longa, evitar exposição entre 10h e 16h, buscar sombra — e informar que o protetor solar pode estar disponível na farmácia da unidade conforme a política do município; ensinar autoexame da pele e como reconhecer lesão que muda de comportamento; orientar exame regular dos lábios. | Seguimento: retorno em 4 a 8 semanas para avaliar a resposta ao tratamento do campo e a adesão, dado o desconforto esperado; retorno garantido com o resultado da biópsia; seguimento dermatológico regular e vitalício, com exame de corpo inteiro pelo menos anual, pelo risco elevado de novas lesões e de câncer de pele; sinais de alarme para retorno imediato: lesão que endurece, dói, sangra, ulcera, cresce rapidamente ou não cicatriza em mais de 4 semanas.',
      expectedCommunication: 'Apresentação: apresentar-se pelo nome e função, confirmar a identificação do paciente e explicar o objetivo da consulta | Solicitar permissão antes de examinar o couro cabeludo, a face, as orelhas e os lábios | Escuta ativa: permitir o relato inicial sem interromper, usar perguntas abertas antes das fechadas, adaptar o vocabulário ao letramento do paciente, sem tecnicismos | Comunicação do diagnóstico: diferenciar CLARAMENTE as duas situações — explicar que as lesões do campo são pré-cancerosas e tratáveis, e que a lesão da orelha é diferente e exige investigação com retirada de um pedaço para exame — evitando tanto o alarme generalizado quanto a minimização | Responder diretamente à pergunta "todas são câncer?" com informação honesta e proporcional | Abordar ativamente a barreira financeira ao fotoprotetor, construindo alternativas viáveis com o paciente em vez de prescrever medidas inexequíveis | Explicar antecipadamente a reação inflamatória esperada do tratamento tópico, para prevenir o abandono | Verificar a compreensão pedindo que o paciente repita o plano e os sinais de alarme, e perguntar se restaram dúvidas',
      criticalErrors: [
        'Deixar de examinar os pavilhões auriculares e, portanto, não identificar a lesão sentinela com características de carcinoma espinocelular, perdendo o diagnóstico da lesão mais grave da estação.',
        'Aplicar crioterapia, 5-fluoruracila ou imiquimode na lesão do pavilhão auricular sem biópsia prévia, destruindo lesão suspeita de CEC invasivo sem diagnóstico histopatológico e sem avaliação da profundidade de invasão.',
        'Tratar apenas lesões isoladas com crioterapia sem abordar o campo de cancerização, deixando dezenas de lesões clínicas e infraclínicas sem tratamento em paciente com dano actínico grave.',
        'Atribuir as lesões a envelhecimento normal, "pele de pescador" ou dermatite seborreica, prescrevendo apenas hidratante e liberando o paciente sem tratamento nem seguimento.',
        'Não examinar o lábio inferior, deixando de identificar a queilite actínica, lesão com risco de progressão para CEC labial de maior potencial metastático.',
        'Prescrever fotoproteção sem considerar a barreira financeira e sem oferecer alternativas de barreira física viáveis, resultando em não adesão à principal medida preventiva.'
      ]
    },
    instD: {
      title: 'CHECKLIST — LESÕES ÁSPERAS EM ÁREA FOTOEXPOSTA (CERATOSE ACTÍNICA E CAMPO DE CANCERIZAÇÃO)',
      sections: [
        {
          h: 'BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE',
          items: [
            { item: 'Apresentou-se pelo nome e função e confirmou a identificação do paciente', score: 0.5, ref: 'CFM — Código de Ética Médica, 2019' },
            { item: 'Solicitou permissão antes de examinar o couro cabeludo, a face, as orelhas e os lábios', score: 0.5, ref: 'CFM — Código de Ética Médica, 2019 (autonomia e consentimento)' },
            { item: 'Verificou a compreensão do paciente e/ou perguntou se restaram dúvidas antes de encerrar a consulta', score: 0.5, ref: 'MS — Política Nacional de Humanização (HumanizaSUS), 2013' }
          ]
        },
        {
          h: 'BLOCO 2 — ANAMNESE',
          items: [
            { item: 'Perguntou ativamente se alguma lesão é DIFERENTE das demais (dói, sangra, endureceu, cresceu ou não cicatriza), identificando a lesão sentinela', score: 1.0, ref: 'SBD — Ceratose Actínica e Progressão para CEC, 2023; INCA 2022' },
            { item: 'Investigou exposição solar ocupacional cumulativa e uso de fotoproteção ao longo da vida', score: 0.5, ref: 'INCA — Prevenção do Câncer de Pele, 2022; MS — Cadernos de Atenção Básica nº 29' },
            { item: 'Investigou antecedente pessoal de câncer de pele e/ou fatores de risco adicionais (imunossupressão, tabagismo, tratamentos prévios)', score: 0.5, ref: 'SBD — Consenso Brasileiro de Câncer da Pele Não Melanoma, 2023' },
            { item: 'Investigou as condições socioeconômicas e a viabilidade de adesão às medidas de fotoproteção (barreira ao custo do protetor)', score: 0.5, ref: 'MS — Política Nacional de Atenção Básica (PNAB), 2017' }
          ]
        },
        {
          h: 'BLOCO 3 — EXAME FÍSICO',
          items: [
            { item: 'Realizou a fotodescrição do campo actínico (múltiplas máculas/placas eritematosas com escama aderida, restritas às áreas fotoexpostas) e PALPOU as áreas para detectar a textura áspera característica', score: 1.0, ref: 'SBD — Ceratose Actínica: diagnóstico clínico, 2023' },
            { item: 'Examinou os pavilhões auriculares e identificou a lesão sentinela infiltrada, endurecida, dolorosa e sangrante', score: 1.0, ref: 'SBD — Consenso Brasileiro de Câncer da Pele Não Melanoma, 2023; INCA 2022' },
            { item: 'Examinou o lábio inferior, identificando a queilite actínica, e/ou palpou as cadeias linfonodais cervicais e pré-auriculares', score: 0.5, ref: 'SBD — Queilite Actínica, 2023' }
          ]
        },
        {
          h: 'BLOCO 4 — RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO',
          items: [
            { item: 'Formulou a hipótese de ceratoses actínicas com campo de cancerização E, separadamente, de CEC na lesão do pavilhão auricular', score: 1.0, ref: 'SBD — Consenso Brasileiro de Câncer da Pele Não Melanoma, 2023; INCA 2022' },
            { item: 'Citou ao menos dois diagnósticos diferenciais pertinentes (CEC, CBC superficial, ceratose seborreica, dermatite seborreica/psoríase)', score: 0.5, ref: 'SBD — Diagnóstico Diferencial das Lesões Eritematodescamativas Fotoexpostas, 2023' },
            { item: 'Indicou BIÓPSIA da lesão do pavilhão auricular, contraindicando explicitamente crioterapia ou tópico sobre ela antes do diagnóstico', score: 0.5, ref: 'SBD/SBCD — Consenso Brasileiro de Câncer da Pele Não Melanoma, 2023' }
          ]
        },
        {
          h: 'BLOCO 5 — CONDUTA E ORIENTAÇÃO AO PACIENTE',
          items: [
            { item: 'Propôs tratamento do CAMPO de cancerização (5-fluoruracila 5% tópico, imiquimode ou crioterapia das lesões), e não apenas de lesão isolada', score: 1.0, ref: 'SBD — Tratamento do Campo de Cancerização, 2023; MS — Cadernos de Atenção Básica nº 29, 2016' },
            { item: 'Encaminhou com prioridade à dermatologia/cirurgia dermatológica para a lesão do pavilhão auricular, descrevendo a suspeita clínica', score: 0.5, ref: 'MS — Protocolos de Encaminhamento AB → Atenção Especializada, Dermatologia, 2016; Lei nº 12.732/2012' },
            { item: 'Orientou fotoproteção de forma VIÁVEL à realidade do paciente (chapéu de aba larga, manga longa, evitar sol 10h–16h, sombra) e/ou sinais de alarme e retorno', score: 0.5, ref: 'INCA — Prevenção e Detecção Precoce do Câncer de Pele, 2022; SBD — Campanha Nacional de Prevenção ao Câncer da Pele, 2023' }
          ]
        }
      ]
    }
  },

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
  },
];

export default dermatologia;
