const infectologia2 = [
  // CASO 1 — DENGUE COM SINAIS DE ALARME
  {
    id: 1,
    title: 'Febre alta há 4 dias com dor abdominal e vômitos',
    sub: 'PS — Pronto-Socorro',
    tema: 'Infectologia',
    topic: 'Dengue com Sinais de Alarme',
    level: 'difícil',
    cardAccent: '#43A047',

    instA: {
      scenario: 'Atendimento no Pronto-Socorro em período de epidemia de dengue na cidade.',
      patient: 'Bruno Henrique Souza, 24 anos, sexo masculino, estudante universitário.',
      complaint: 'Febre alta há 4 dias, hoje com melhora da febre mas piora do estado geral, dor abdominal e vômitos.',
      tasks: [
        'Realize a anamnese dirigida, com atenção ao dia de doença e sinais de alarme.',
        'Realize o exame físico geral dirigido, incluindo prova do laço se pertinente.',
        'Classifique o caso conforme os grupos de risco do Ministério da Saúde.',
        'Solicite os exames complementares adequados.',
        'Proponha a conduta terapêutica e defina necessidade de internação/observação.'
      ]
    },

    instB: {
      vitals: {
        PA: '100/70 mmHg',
        FC: '112 bpm',
        FR: '22 irpm',
        Tax: '37,2 °C (afebril no momento, febre até ontem)',
        Peso: '78 kg',
        Altura: '1,78 m'
      },
      physicalGeneral: 'Regular estado geral, letárgico, pele fria em extremidades, tempo de enchimento capilar de 3 segundos.',
      physicalSeg: 'ABDOME: doloroso à palpação difusa, mais intenso em hipocôndrio direito (dor abdominal intensa e contínua), sem sinais de irritação peritoneal francos. | PELE: exantema maculopapular discreto em tronco; prova do laço positiva (>20 petéquias em área de 2,5 cm²). | CARDIOVASCULAR: taquicárdico, pulsos finos.',
      labs: [
        { test: 'Hematócrito', val: '52% (basal conhecido do paciente: 42%)', ref: 'Elevação >20% do basal sugere hemoconcentração/extravasamento plasmático', alt: true },
        { test: 'Plaquetas', val: '68.000/mm³', ref: '150.000 – 450.000/mm³', alt: true },
        { test: 'Leucócitos', val: '2.900/mm³', ref: '4.000 – 11.000/mm³', alt: true },
        { test: 'Teste rápido NS1 (dengue)', val: 'Positivo', ref: 'Negativo', alt: true },
        { test: 'TGO/TGP', val: 'TGO 98 U/L, TGP 82 U/L', ref: '< 35 U/L', alt: true }
      ],
      note: 'O hematócrito e as plaquetas são os exames mais críticos deste caso — entregar assim que solicitados, reforçando a importância da hemoconcentração (>20% do basal) como sinal de extravasamento plasmático. O NS1 já havia sido coletado antes desta consulta pela triagem.',
      patientProfile: 'Estudante universitário, mora em república com colegas, relata que dois colegas também tiveram "dengue" recentemente. Não tem comorbidades. Vem se hidratando por conta própria com água, mas com dificuldade pelos vômitos.',
      script: [
        { trigger: 'Queixa principal', speech: 'Doutor(a), estou com febre há uns 4 dias, ontem a febre baixou mas eu piorei, comecei a vomitar bastante e sinto uma dor forte na barriga.' },
        { trigger: 'Sobre a febre', speech: 'A febre era bem alta, uns 39-40°C, com dor no corpo todo e atrás dos olhos. Ontem ela sumiu, mas eu me sinto pior ainda.' },
        { trigger: 'Sobre a dor abdominal', speech: 'É uma dor forte, contínua, do lado direito da barriga, bem diferente de cólica.' },
        { trigger: 'Sobre vômitos', speech: 'Vomitei umas 5 vezes hoje, não consigo segurar nem água direito.' },
        { trigger: 'Sobre sangramentos', speech: 'Não notei sangramento de nariz ou gengiva, mas minha pele ficou com umas manchinhas vermelhas em alguns lugares.' },
        { trigger: 'Sobre contatos/epidemiologia', speech: 'Dois amigos meus que moram comigo tiveram dengue há umas 2 semanas, e tem bastante gente doente na cidade também.' },
        { trigger: 'Pergunta ativa — gravidade', speech: 'Doutor(a), isso é grave? Por que eu estou piorando se a febre já passou?' }
      ],
      hiddenInfo: 'Notou sonolência importante e um certo desânimo incomum nas últimas horas, além de referir "sensação estranha de fraqueza extrema" — só revela se perguntado ativamente sobre letargia/estado mental | Tem tomado ibuprofeno por conta própria para a febre e dores no corpo — informação relevante que só revela se perguntado sobre automedicação (AINEs são contraindicados na suspeita de dengue) | Notou que está urinando bem menos que o habitual nas últimas horas — só revela se perguntado sobre débito urinário | Está com muito medo pois um vizinho teve "dengue grave" recentemente e precisou de UTI — verbaliza esse medo se o candidato acolher a situação',
      actorBehavior: 'Demonstrar letargia e fraqueza importante (fala mais devagar, parece sonolento). Fácies de dor ao exame abdominal. Ansioso ao lembrar do vizinho com dengue grave.'
    },

    instC: {
      diagnosis: 'Dengue com sinais de alarme (Grupo C conforme classificação de risco do Ministério da Saúde): dor abdominal intensa e contínua, vômitos persistentes, hemoconcentração, plaquetopenia e letargia — período crítico da doença (defervescência).',
      differentials: [
        'Dengue sem sinais de alarme (Grupo B/A) — entra pelo quadro febril inicial; sai pela presença clara de sinais de alarme (dor abdominal intensa, vômitos persistentes, hemoconcentração), que reclassificam o caso para grupo de maior risco.',
        'Chikungunya — entra como diferencial de síndrome febril aguda em área endêmica; sai pela predominância de artralgia intensa e incapacitante na chikungunya, não sendo o quadro predominante aqui, e pela positividade do NS1 para dengue.',
        'Abdome agudo cirúrgico (ex.: apendicite, colecistite) — entra pela dor abdominal intensa; sai pelo contexto epidemiológico, sorologia positiva para dengue e pela associação com hemoconcentração/plaquetopenia, não esperadas em abdome agudo cirúrgico isolado.',
        'Leptospirose — entra como diferencial de síndrome febril com alteração hepática; sai pela ausência de sufusão conjuntival e de outros achados típicos, e pela confirmação laboratorial de dengue (NS1 positivo).'
      ],
      context: 'A dengue é a arbovirose mais prevalente no Brasil, causada por vírus transmitido pelo Aedes aegypti. A fase crítica da doença ocorre tipicamente entre o 3º e o 7º dia, coincidindo com a defervescência (queda da febre), período em que pode ocorrer extravasamento plasmático e os sinais de alarme devem ser ativamente pesquisados, pois definem a necessidade de internação e hidratação venosa mais agressiva conforme a classificação de risco do Ministério da Saúde.',
      justify: 'O diagnóstico de dengue com sinais de alarme é sustentado pela positividade do NS1 associada à presença de dor abdominal intensa e contínua, vômitos persistentes, letargia, hemoconcentração (elevação do hematócrito >20% do basal) e plaquetopenia, achados que classificam o paciente no Grupo C de risco do Ministério da Saúde, exigindo internação para reposição volêmica supervisionada.',
      expectedAnamnesis: 'Dia de início e evolução da febre | Sintomas associados (cefaleia retro-orbitária, mialgia, exantema) | Pesquisa ativa e sistemática de sinais de alarme (dor abdominal intensa, vômitos persistentes, sangramentos, letargia, hipotensão, diminuição da diurese) | Uso de medicações (especialmente AINEs, contraindicados) | Contexto epidemiológico (casos na comunidade, viagens)',
      expectedPhysical: 'Aferição cuidadosa de sinais vitais, incluindo pressão arterial e avaliação de perfusão periférica | Prova do laço | Palpação abdominal buscando dor à palpação de hipocôndrio direito (hepatomegalia dolorosa) | Pesquisa de sinais de sangramento cutâneo-mucoso | Avaliação do nível de consciência',
      expectedExams: [
        { exam: 'Hemograma completo (hematócrito seriado e plaquetas)', justify: 'Essencial para identificar hemoconcentração (extravasamento plasmático) e plaquetopenia, definindo classificação de risco', expected: 'Hemoconcentração e plaquetopenia, compatíveis com sinais de alarme' },
        { exam: 'Teste rápido NS1 ou sorologia IgM (conforme dia de doença)', justify: 'Confirmação laboratorial da infecção pelo vírus da dengue', expected: 'Positivo' },
        { exam: 'Transaminases (TGO/TGP)', justify: 'Avaliar acometimento hepático associado', expected: 'Frequentemente elevadas' }
      ],
      expectedConduct: 'Farmacológica: hidratação venosa vigorosa com cristaloides, conforme protocolo de reposição volêmica para dengue com sinais de alarme (Grupo C); antitérmico com paracetamol (NUNCA AINEs ou ácido acetilsalicílico, pelo risco de sangramento); suspender imediatamente qualquer AINE em uso | Não farmacológica: internação hospitalar obrigatória para observação e reavaliação seriada de hematócrito, plaquetas e sinais vitais | Orientações ao paciente: explicar que a piora após a queda da febre é esperada e faz parte da fase crítica da doença, justamente por isso exige internação e vigilância rigorosa; orientar sobre sinais de piora adicional (sangramentos, hipotensão, dificuldade respiratória) que exigiriam reclassificação para dengue grave (Grupo D)',
      expectedCommunication: 'Explicar de forma clara por que a melhora da febre não significa melhora do quadro, e sim entrada na fase crítica | Acolher o medo do paciente relacionado a casos graves conhecidos | Reforçar a importância da internação e do acompanhamento seriado | Orientar suspensão imediata de AINEs em uso',
      criticalErrors: [
        'Não reconhecer os sinais de alarme (dor abdominal intensa, vômitos persistentes, letargia, hemoconcentração) e liberar o paciente para casa',
        'Não solicitar hematócrito e plaquetas diante de suspeita de dengue na fase crítica',
        'Prescrever ou não suspender anti-inflamatórios não esteroidais (AINEs) ou ácido acetilsalicílico',
        'Não iniciar hidratação venosa vigorosa diante de sinais de alarme confirmados',
        'Não indicar internação hospitalar para observação diante de dengue com sinais de alarme (Grupo C)'
      ]
    },

    instD: {
      title: 'Dengue — Material de Estudo',
      sections: [
        {
          h: 'Classificação de Risco (Ministério da Saúde)',
          items: [
            { item: 'Grupo A: sem sinais de alarme, sem comorbidades — manejo ambulatorial com hidratação oral. Grupo B: sangramento de pele espontâneo ou induzido, sem sinais de alarme — observação até resultado de exames.', score: 2, ref: 'Ministério da Saúde — Guia de Manejo Clínico de Dengue' },
            { item: 'Grupo C: presença de sinais de alarme — internação obrigatória para hidratação venosa e observação. Grupo D: sinais de choque, sangramento grave ou disfunção de órgãos — internação em leito de UTI.', score: 2, ref: 'Ministério da Saúde — Guia de Manejo Clínico de Dengue' }
          ]
        },
        {
          h: 'Sinais de Alarme',
          items: [
            { item: 'Dor abdominal intensa e contínua, vômitos persistentes, acúmulo de líquidos (derrame pleural, ascite), sangramento de mucosa, letargia/irritabilidade, hepatomegalia dolorosa, aumento progressivo do hematócrito com queda rápida de plaquetas.', score: 2, ref: 'Ministério da Saúde' }
          ]
        },
        {
          h: 'Fase Crítica',
          items: [
            { item: 'Coincide tipicamente com a defervescência (3º-7º dia de doença), período de maior risco de extravasamento plasmático e evolução para formas graves.', score: 2, ref: 'Ministério da Saúde' }
          ]
        },
        {
          h: 'Tratamento',
          items: [
            { item: 'Hidratação (oral nos grupos A/B, venosa vigorosa nos grupos C/D conforme protocolo); paracetamol para febre/dor; AINEs e ácido acetilsalicílico são CONTRAINDICADOS pelo risco de sangramento.', score: 2, ref: 'Ministério da Saúde' }
          ]
        }
      ]
    }
  },

  // CASO 2 — SÍFILIS ADQUIRIDA DO ADULTO
  {
    id: 2,
    title: 'Ferida genital indolor há 2 semanas',
    sub: 'UBS — Atenção Primária',
    tema: 'Infectologia',
    topic: 'Sífilis Adquirida',
    level: 'moderado',
    cardAccent: '#43A047',

    instA: {
      scenario: 'Consulta de demanda espontânea na UBS, período da tarde.',
      patient: 'Rodrigo Almeida Barros, 27 anos, sexo masculino, vendedor.',
      complaint: 'Ferida genital indolor há cerca de 2 semanas, que não melhora.',
      tasks: [
        'Realize a anamnese dirigida ao caso, incluindo história sexual detalhada.',
        'Realize o exame físico genital e geral dirigido.',
        'Formule a hipótese diagnóstica e os diferenciais.',
        'Solicite os exames complementares adequados.',
        'Proponha o tratamento conforme estadiamento e oriente sobre parceiros.'
      ]
    },

    instB: {
      vitals: {
        PA: '118/76 mmHg',
        FC: '74 bpm',
        FR: '16 irpm',
        Tax: '36,4 °C',
        Peso: '76 kg',
        Altura: '1,75 m'
      },
      physicalGeneral: 'Bom estado geral, corado, hidratado, sem sinais de toxemia.',
      physicalSeg: 'GENITÁLIA: úlcera única, de bordas bem definidas, base endurecida, indolor à palpação, localizada na glande, sem secreção purulenta. | LINFONODOS: linfadenopatia inguinal bilateral, indolor, móvel, sem sinais flogísticos (bubão sifilítico). | PELE: sem exantema no momento do exame.',
      labs: [
        { test: 'Teste rápido treponêmico', val: 'Reagente', ref: 'Não reagente', alt: true },
        { test: 'VDRL (teste não treponêmico)', val: 'Reagente, titulação 1:32', ref: 'Não reagente', alt: true },
        { test: 'Teste rápido HIV', val: 'Não reagente', ref: 'Não reagente', alt: false },
        { test: 'HBsAg e Anti-HCV', val: 'Não reagentes', ref: 'Não reagentes', alt: false }
      ],
      note: 'Os testes sorológicos devem ser entregues conforme solicitados. Reforçar que a testagem para outras ISTs (HIV, hepatites B e C) deve ser oferecida de rotina diante do diagnóstico de uma IST, mesmo que o candidato não pense nisso espontaneamente de início.',
      patientProfile: 'Vendedor, solteiro, relata múltiplos parceiros sexuais nos últimos meses, uso inconsistente de preservativo. Notou a lesão genital há 2 semanas e não procurou atendimento antes por acreditar que "iria passar sozinha", já que não dói.',
      script: [
        { trigger: 'Queixa principal', speech: 'Doutor(a), apareceu uma ferida no meu pênis há umas 2 semanas, não dói nada, mas não está sarando.' },
        { trigger: 'Sobre a ferida', speech: 'É só uma, bem redondinha, as bordas parecem "duras" quando eu toco, mas realmente não sinto dor nenhuma.' },
        { trigger: 'Sobre vida sexual', speech: 'Tenho tido vários parceiros sexuais nos últimos meses, às vezes uso camisinha, às vezes não, dependendo da situação.' },
        { trigger: 'Sobre sintomas sistêmicos', speech: 'Não tenho febre nem mal-estar, só essa ferida mesmo e umas "ínguas" na virilha que notei.' },
        { trigger: 'Sobre exames prévios de IST', speech: 'Nunca fiz teste para nenhuma doença sexualmente transmissível antes, confesso que tinha vergonha de procurar.' },
        { trigger: 'Pergunta ativa — diagnóstico', speech: 'Doutor(a), o que é isso? É grave? Tem cura?' }
      ],
      hiddenInfo: 'Teve uma lesão genital semelhante há cerca de 2 anos que sumiu sozinha sem tratamento, e nunca associou a uma IST — só revela se perguntado sobre episódios anteriores de lesões genitais | Tem parceiros tanto do sexo masculino quanto feminino, mas tem receio de comentar isso espontaneamente — só revela se o ambiente for acolhedor e não julgador, e se perguntado de forma aberta sobre parcerias sexuais | Está com vergonha de ter que "avisar" os parceiros recentes sobre o diagnóstico — só revela essa preocupação se o candidato abordar o tratamento de parceiros | Não sabe se sífilis tem cura ou se é "como o HIV" — verbaliza essa dúvida ao ser informado do diagnóstico',
      actorBehavior: 'Levemente constrangido ao falar sobre vida sexual, mas se abre mais conforme percebe ambiente não julgador. Preocupado ao ouvir o nome "sífilis", associando a doença grave incurável. Colaborativo durante o exame físico.'
    },

    instC: {
      diagnosis: 'Sífilis adquirida, estágio primário (cancro duro), com sorologia confirmatória positiva (teste treponêmico reagente e VDRL reagente com titulação 1:32).',
      differentials: [
        'Herpes genital — entra como causa comum de úlcera genital; sai pela característica da lesão (única, indolor, de base endurecida), diferente das múltiplas vesículas/úlceras dolorosas e agrupadas típicas do herpes.',
        'Cancro mole (cancroide) — entra como diferencial de úlcera genital; sai pela ausência de dor importante e de múltiplas lesões com bordas irregulares e fundo purulento, características do cancro mole, além da confirmação sorológica de sífilis.',
        'Linfogranuloma venéreo — entra pela linfadenopatia inguinal associada; sai pela ausência de supuração/fistulização ganglionar característica e pela úlcera genital típica de sífilis primária associada à sorologia positiva.',
        'Donovanose — entra como diferencial de úlcera genital crônica; sai pela evolução mais aguda (2 semanas) e pela confirmação sorológica de sífilis, tornando este o diagnóstico mais provável e explicativo do quadro.'
      ],
      context: 'A sífilis é uma infecção sexualmente transmissível causada pela bactéria Treponema pallidum, com incidência crescente no Brasil nos últimos anos, sendo doença de notificação compulsória. A fase primária caracteriza-se pelo cancro duro — úlcera única, indolor, de base endurecida — que surge no local de inoculação, geralmente acompanhada de linfadenopatia regional não dolorosa, podendo resolver espontaneamente mesmo sem tratamento, o que não significa cura da infecção.',
      justify: 'O diagnóstico de sífilis primária é sustentado pela apresentação clínica característica do cancro duro (úlcera única, indolor, base endurecida, com linfadenopatia inguinal não dolorosa associada), confirmado laboratorialmente pela positividade de teste treponêmico e não treponêmico (VDRL reagente, titulação 1:32), conforme o fluxograma diagnóstico do Ministério da Saúde para sífilis.',
      expectedAnamnesis: 'Caracterização da lesão genital (tempo de evolução, dor, número de lesões) | História sexual detalhada, sem julgamento (número e gênero de parceiros, uso de preservativo) | Episódios semelhantes anteriores | Sintomas sistêmicos associados | Conhecimento sobre testagem prévia para ISTs',
      expectedPhysical: 'Inspeção cuidadosa da genitália, identificando características da úlcera (número, bordas, base, dor) | Palpação de linfonodos inguinais | Exame de pele buscando exantema (embora mais característico da fase secundária) | Exame geral',
      expectedExams: [
        { exam: 'Teste rápido treponêmico e/ou VDRL (teste não treponêmico)', justify: 'Confirmação diagnóstica e, no caso do VDRL, acompanhamento de resposta terapêutica pela titulação', expected: 'Ambos reagentes, com titulação do VDRL orientando seguimento' },
        { exam: 'Testagem para HIV, hepatites B e C', justify: 'Rastreio obrigatório de outras ISTs em todo paciente diagnosticado com uma IST', expected: 'Idealmente não reagentes; orienta conduta adicional conforme resultado' }
      ],
      expectedConduct: 'Farmacológica: penicilina G benzatina 2,4 milhões UI, dose única intramuscular, para sífilis primária (esquema conforme estadiamento — sífilis recente); em caso de alergia confirmada à penicilina, considerar dessensibilização (especialmente se parceria sexual gestante) ou esquemas alternativos conforme protocolo | Não farmacológica: notificação compulsória do caso; convocação e tratamento de parceiros sexuais dos últimos 90 dias (ou do período assintomático relevante) | Orientações ao paciente: explicar que a sífilis tem cura com o tratamento adequado, mas que a resolução espontânea da lesão NÃO significa cura da infecção; orientar sobre a necessidade de tratar os parceiros sexuais recentes; reforçar uso de preservativo e oferecer testagem periódica para ISTs; agendar seguimento com VDRL de controle (queda da titulação confirma resposta terapêutica)',
      expectedCommunication: 'Conduzir a história sexual sem julgamento, criando ambiente de confiança | Esclarecer que a sífilis tem cura e desconstruir associações equivocadas com doenças incuráveis | Abordar a necessidade de tratamento de parceiros de forma acolhedora, sem gerar culpa excessiva | Verificar compreensão do diagnóstico e do plano terapêutico',
      criticalErrors: [
        'Não confirmar o diagnóstico com testes sorológicos (treponêmico e não treponêmico) antes de tratar',
        'Não oferecer testagem para outras ISTs (HIV, hepatites B e C) diante do diagnóstico de sífilis',
        'Não notificar compulsoriamente o caso',
        'Não orientar sobre convocação e tratamento de parceiros sexuais',
        'Prescrever esquema terapêutico inadequado ao estadiamento (ex.: dose única quando indicado esquema estendido para sífilis tardia/duração ignorada)'
      ]
    },

    instD: {
      title: 'Sífilis Adquirida — Material de Estudo',
      sections: [
        {
          h: 'Estadiamento Clínico',
          items: [
            { item: 'Primária: cancro duro (úlcera única, indolor, base endurecida) com linfadenopatia regional não dolorosa. Secundária: exantema (inclui palmas e plantas), lesões mucosas, condiloma plano. Latente: assintomática. Terciária: acometimento cardiovascular, neurológico (neurossífilis), gomas sifilíticas.', score: 2, ref: 'Ministério da Saúde — PCDT IST' }
          ]
        },
        {
          h: 'Diagnóstico',
          items: [
            { item: 'Fluxograma com teste treponêmico (rápido ou FTA-ABS) e teste não treponêmico (VDRL/RPR); ambos reagentes confirmam o diagnóstico e a titulação do não treponêmico orienta seguimento.', score: 2, ref: 'Ministério da Saúde — PCDT IST' }
          ]
        },
        {
          h: 'Tratamento',
          items: [
            { item: 'Sífilis recente (primária, secundária, latente recente <1 ano): penicilina G benzatina 2,4 milhões UI IM, dose única. Sífilis tardia/duração ignorada: mesma dose semanal por 3 semanas.', score: 2, ref: 'Ministério da Saúde — PCDT IST' },
            { item: 'A penicilina é a única opção segura e eficaz na gestação; alergia confirmada exige dessensibilização nesse contexto.', score: 1, ref: 'Ministério da Saúde — PCDT IST' }
          ]
        },
        {
          h: 'Seguimento e Vigilância',
          items: [
            { item: 'VDRL de seguimento (queda de pelo menos 2 diluições) confirma resposta terapêutica adequada; notificação compulsória e tratamento de parceiros são obrigatórios.', score: 2, ref: 'Ministério da Saúde — PCDT IST' }
          ]
        }
      ]
    }
  },

  // CASO 3 — INFECÇÃO PELO HIV — DIAGNÓSTICO INICIAL
  {
    id: 3,
    title: 'Retorno para resultado de teste rápido de HIV reagente',
    sub: 'UBS — Atenção Primária',
    tema: 'Infectologia',
    topic: 'Infecção pelo HIV — Diagnóstico Inicial',
    level: 'difícil',
    cardAccent: '#43A047',

    instA: {
      scenario: 'Consulta de retorno na UBS para entrega de resultado de teste rápido realizado por demanda espontânea.',
      patient: 'Fábio Cardoso Nunes, 31 anos, sexo masculino, designer gráfico.',
      complaint: 'Retorna assintomático para receber resultado de teste rápido de HIV realizado na semana anterior.',
      tasks: [
        'Realize a anamnese dirigida, incluindo história de exposição e sintomas.',
        'Comunique o resultado do exame de forma apropriada.',
        'Confirme o diagnóstico com o fluxograma laboratorial adequado.',
        'Formule a conduta inicial, incluindo início de tratamento.',
        'Oriente o paciente sobre seguimento, parceiros e prevenção combinada.'
      ]
    },

    instB: {
      vitals: {
        PA: '116/74 mmHg',
        FC: '78 bpm',
        FR: '16 irpm',
        Tax: '36,4 °C',
        Peso: '70 kg',
        Altura: '1,73 m'
      },
      physicalGeneral: 'Bom estado geral, corado, hidratado, sem sinais de doença oportunista ou emagrecimento.',
      physicalSeg: 'PELE E MUCOSAS: sem lesões sugestivas de sarcoma de Kaposi ou candidíase oral. | LINFONODOS: linfadenopatia cervical bilateral discreta, indolor, sem outras alterações relevantes ao exame geral.',
      labs: [
        { test: 'Teste rápido de HIV (1ª amostra, realizado na semana anterior)', val: 'Reagente', ref: 'Não reagente', alt: true },
        { test: 'Teste rápido de HIV (2º teste, confirmatório com metodologia diferente, realizado nesta consulta)', val: 'Reagente', ref: 'Não reagente', alt: true },
        { test: 'Contagem de linfócitos CD4+', val: '520 células/mm³', ref: '≥ 500 células/mm³', alt: false },
        { test: 'Carga viral do HIV', val: '18.400 cópias/mL', ref: 'Indetectável (paciente sem tratamento prévio)', alt: true }
      ],
      note: 'O fluxograma do Ministério da Saúde exige dois testes rápidos com metodologias diferentes (ou um rápido + um laboratorial) para confirmação diagnóstica antes de comunicar o diagnóstico definitivo — reforçar essa etapa caso o candidato queira comunicar o diagnóstico apenas com o primeiro teste.',
      patientProfile: 'Designer gráfico, tem parceiro fixo há 8 meses, relata relação sexual desprotegida com parceiro eventual há cerca de 2 meses. Procurou testagem por conta própria após essa exposição, sem sintomas até o momento.',
      script: [
        { trigger: 'Ao ser informado do resultado', speech: '(muito abalado) Doutor(a)... isso quer dizer que eu tenho HIV? Eu vou morrer?' },
        { trigger: 'Sobre exposição de risco', speech: 'Tive uma relação sem camisinha com um parceiro eventual há uns 2 meses, foi por isso que resolvi fazer o teste.' },
        { trigger: 'Sobre sintomas', speech: 'Não sinto nada de diferente, nenhum sintoma, é por isso que fiquei tão surpreso com o resultado.' },
        { trigger: 'Sobre parceiro fixo', speech: 'Tenho um namorado há 8 meses, moramos juntos... e agora eu não sei como vou contar isso para ele.' },
        { trigger: 'Sobre conhecimento prévio sobre HIV', speech: 'Eu sei que hoje em dia existe tratamento, mas confesso que ainda tenho muito medo, lembro de coisas antigas que ouvi sobre a doença.' },
        { trigger: 'Pergunta ativa — tratamento', speech: 'Doutor(a), existe tratamento? Eu vou precisar tomar remédio para sempre? Posso ter uma vida normal?' }
      ],
      hiddenInfo: 'Está em pânico com a possibilidade de ter transmitido o HIV para o parceiro fixo, mas não verbaliza espontaneamente — só revela essa preocupação se o candidato abordar ativamente a testagem e notificação de parceiros | Nunca fez PrEP (profilaxia pré-exposição) por desconhecimento de que existia essa opção — só revela se perguntado sobre conhecimento prévio de estratégias de prevenção | Tem um histórico de ansiedade e já fez acompanhamento psicológico no passado — só revela se perguntado sobre saúde mental ou se o candidato oferecer suporte psicológico | Está preocupado com sigilo médico e com a possibilidade de o diagnóstico "vazar" no trabalho — verbaliza essa preocupação se o candidato tocar no tema de confidencialidade',
      actorBehavior: 'Visivelmente abalado e assustado ao receber a notícia, pode chorar ou ficar em silêncio por um momento. Antigas concepções sobre a gravidade da doença ("é uma sentença de morte") vêm à tona se não esclarecidas. Gradualmente mais tranquilo conforme recebe informações atualizadas e acolhimento.'
    },

    instC: {
      diagnosis: 'Infecção pelo HIV confirmada (dois testes rápidos reagentes com metodologias diferentes), assintomática, com contagem de CD4+ preservada (520 células/mm³) e carga viral detectável.',
      differentials: [
        'Não se aplica diagnóstico diferencial clássico de doença — o diagnóstico já está laboratorialmente confirmado pelo fluxograma adequado (dois testes reagentes); a tarefa central do candidato é a correta confirmação diagnóstica, comunicação da notícia e início oportuno do tratamento antirretroviral.'
      ],
      context: 'O diagnóstico da infecção pelo HIV no Brasil segue fluxograma estabelecido pelo Ministério da Saúde, exigindo confirmação com dois testes de metodologias diferentes antes da comunicação definitiva ao paciente. A recomendação atual (estratégia "testar e tratar") é o início imediato da terapia antirretroviral (TARV) após o diagnóstico confirmado, independentemente da contagem de CD4+, dado o benefício em reduzir morbimortalidade e transmissão (tratamento como prevenção).',
      justify: 'O diagnóstico é confirmado pela positividade de dois testes rápidos com metodologias diferentes, conforme fluxograma do Ministério da Saúde, corroborado pela carga viral detectável. A contagem de CD4+ ainda preservada (520 células/mm³) indica fase assintomática da infecção, mas não contraindica nem posterga o início do tratamento, que deve ser oferecido imediatamente conforme a estratégia atual "testar e tratar".',
      expectedAnamnesis: 'História de exposição de risco (relações sexuais desprotegidas, parcerias) | Sintomas sugestivos de infecção aguda ou doenças oportunistas | Situação de parcerias sexuais atuais e necessidade de testagem/notificação | Conhecimento prévio sobre HIV e estratégias de prevenção (PrEP, PEP) | Rede de apoio emocional e histórico de saúde mental',
      expectedPhysical: 'Exame geral buscando sinais de doenças oportunistas ou manifestações da infecção pelo HIV (lesões cutâneo-mucosas, linfadenopatia, emagrecimento) | Aferição de peso e sinais vitais',
      expectedExams: [
        { exam: 'Segundo teste rápido de HIV com metodologia diferente (ou teste laboratorial confirmatório)', justify: 'Etapa obrigatória do fluxograma diagnóstico antes da confirmação definitiva', expected: 'Reagente, confirmando o diagnóstico' },
        { exam: 'Contagem de linfócitos CD4+', justify: 'Avaliar o estado imunológico e orientar rastreio de infecções oportunistas', expected: 'Definir estadiamento imunológico' },
        { exam: 'Carga viral do HIV', justify: 'Estabelecer basal antes do início do tratamento e monitorar resposta terapêutica futura', expected: 'Detectável antes do tratamento; objetivo é indetectabilidade após TARV' },
        { exam: 'Rastreio de outras ISTs (sífilis, hepatites B e C) e genotipagem pré-tratamento quando disponível', justify: 'Coinfecções são comuns e devem ser rastreadas; genotipagem orienta escolha do esquema TARV em cenários de transmissão de resistência', expected: 'Conforme disponibilidade e protocolo local' }
      ],
      expectedConduct: 'Farmacológica: iniciar terapia antirretroviral (TARV) imediatamente após confirmação diagnóstica, independentemente da contagem de CD4+, conforme estratégia "testar e tratar" do Ministério da Saúde (esquema preferencial atual combina inibidores da transcriptase reversa análogos e inibidor de integrase) | Não farmacológica: encaminhamento para serviço especializado em HIV/aids, se necessário, mantendo vínculo com a atenção primária; oferecer suporte psicológico | Orientações ao paciente: explicar que o HIV hoje é uma condição crônica tratável, com expectativa de vida próxima à da população geral quando em tratamento adequado; explicar o conceito de "indetectável = intransmissível" (I=I) como forma de reduzir estigma e ansiedade sobre transmissão ao parceiro; orientar testagem e aconselhamento do parceiro fixo; reforçar sigilo e confidencialidade das informações de saúde',
      expectedCommunication: 'Comunicar o diagnóstico em ambiente privado, com tempo adequado e sem pressa | Acolher a reação emocional do paciente, validando o impacto psicológico do diagnóstico | Desconstruir concepções ultrapassadas sobre a gravidade/mortalidade da doença com informação atualizada | Abordar de forma sensível a necessidade de testagem do parceiro fixo | Reforçar a confidencialidade das informações de saúde',
      criticalErrors: [
        'Comunicar o diagnóstico definitivo com base em apenas um teste rápido, sem confirmação pelo fluxograma completo',
        'Postergar o início da TARV aguardando contagem de CD4+ baixa, contrariando a estratégia atual de "testar e tratar"',
        'Comunicar a notícia de forma alarmista ou desatualizada, reforçando estigma',
        'Não abordar a necessidade de testagem do parceiro fixo',
        'Não oferecer encaminhamento para suporte psicológico diante do impacto emocional evidente'
      ]
    },

    instD: {
      title: 'Infecção pelo HIV — Material de Estudo',
      sections: [
        {
          h: 'Diagnóstico',
          items: [
            { item: 'Fluxograma do Ministério da Saúde exige dois testes com metodologias diferentes (ex.: dois testes rápidos de fabricantes distintos, ou teste rápido + teste laboratorial) para confirmação diagnóstica.', score: 2, ref: 'Ministério da Saúde — PCDT Manejo da Infecção pelo HIV em Adultos' }
          ]
        },
        {
          h: 'Estratégia "Testar e Tratar"',
          items: [
            { item: 'Recomenda-se início imediato da TARV após confirmação diagnóstica, independentemente da contagem de CD4+ ou presença de sintomas, dado o benefício em morbimortalidade e na redução da transmissão.', score: 2, ref: 'Ministério da Saúde — PCDT HIV' }
          ]
        },
        {
          h: 'Conceito "Indetectável = Intransmissível" (I=I)',
          items: [
            { item: 'Pessoas em uso regular de TARV com carga viral indetectável sustentada não transmitem o HIV por via sexual — conceito fundamental para reduzir estigma e orientar prevenção.', score: 2, ref: 'Ministério da Saúde / consenso científico internacional' }
          ]
        },
        {
          h: 'Seguimento',
          items: [
            { item: 'Monitorização com carga viral e CD4+ periódicos após início da TARV; rastreio de coinfecções (sífilis, hepatites, tuberculose) e vacinação atualizada fazem parte do seguimento.', score: 1, ref: 'Ministério da Saúde — PCDT HIV' }
          ]
        },
        {
          h: 'Prevenção Combinada',
          items: [
            { item: 'Inclui uso de preservativos, PrEP (profilaxia pré-exposição) para pessoas com risco aumentado, PEP (profilaxia pós-exposição) e testagem regular como estratégias complementares.', score: 1, ref: 'Ministério da Saúde' }
          ]
        }
      ]
    }
  },

  // CASO 4 — LEPTOSPIROSE
  {
    id: 4,
    title: 'Febre, mialgia intensa e olhos avermelhados após enchente',
    sub: 'PS — Pronto-Socorro',
    tema: 'Infectologia',
    topic: 'Leptospirose',
    level: 'difícil',
    cardAccent: '#43A047',

    instA: {
      scenario: 'Atendimento no Pronto-Socorro, período de chuvas intensas com alagamentos na região.',
      patient: 'Wagner Souza Lima, 40 anos, sexo masculino, gari (garí/coletor de lixo urbano).',
      complaint: 'Febre alta, dor muscular intensa nas panturrilhas e olhos avermelhados há 3 dias, após período trabalhando em área alagada.',
      tasks: [
        'Realize a anamnese dirigida, com atenção à exposição epidemiológica.',
        'Realize o exame físico geral dirigido.',
        'Formule a hipótese diagnóstica e os diferenciais.',
        'Solicite os exames complementares adequados.',
        'Proponha a conduta terapêutica e avalie critérios de gravidade/internação.'
      ]
    },

    instB: {
      vitals: {
        PA: '108/68 mmHg',
        FC: '104 bpm',
        FR: '20 irpm',
        Tax: '39,1 °C',
        Peso: '80 kg',
        Altura: '1,76 m'
      },
      physicalGeneral: 'Regular estado geral, febril, ictérico (icterícia rubínica — tom alaranjado característico), desidratação leve a moderada.',
      physicalSeg: 'OLHOS: sufusão conjuntival bilateral (hiperemia conjuntival sem secreção). | MÚSCULOS: dor intensa à palpação de panturrilhas (mialgia importante). | ABDOME: discreto desconforto difuso, sem sinais de irritação peritoneal; leve hepatomegalia palpável. | PELE: icterícia de tonalidade alaranjada característica.',
      labs: [
        { test: 'Bilirrubina total e frações', val: 'BT 6,8 mg/dL (predomínio de direta)', ref: '< 1,2 mg/dL', alt: true },
        { test: 'Creatinina sérica', val: '2,1 mg/dL', ref: '0,7 – 1,3 mg/dL', alt: true },
        { test: 'CPK (creatinofosfoquinase)', val: '890 U/L', ref: '< 190 U/L', alt: true },
        { test: 'Plaquetas', val: '92.000/mm³', ref: '150.000 – 450.000/mm³', alt: true },
        { test: 'Sorologia IgM para leptospira (ou teste rápido)', val: 'Reagente', ref: 'Não reagente', alt: true }
      ],
      note: 'A sorologia pode levar alguns dias para ficar pronta em muitos serviços — o diagnóstico inicial e o início do tratamento devem ser baseados no quadro clínico-epidemiológico típico, sem aguardar confirmação sorológica, dada a gravidade potencial da doença.',
      patientProfile: 'Gari, trabalha na coleta de lixo urbano, teve contato direto com água de enchente contaminada por vários dias na semana anterior ao início dos sintomas devido às fortes chuvas na cidade. Não usa equipamento de proteção adequado no trabalho (botas, luvas).',
      script: [
        { trigger: 'Queixa principal', speech: 'Doutor(a), estou com febre alta, uma dor terrível nas panturrilhas, e meus olhos ficaram bem vermelhos, sem remela nem nada.' },
        { trigger: 'Sobre exposição', speech: 'Trabalho na coleta de lixo, e essa semana tivemos que trabalhar em rua alagada por causa da chuva forte, fiquei com a perna na água suja várias vezes.' },
        { trigger: 'Sobre a dor muscular', speech: 'A dor é bem forte, principalmente na panturrilha, quase não consigo andar direito.' },
        { trigger: 'Sobre icterícia', speech: '(surpreso) Fiquei amarelado? Não tinha notado isso, só sentia mal-estar geral mesmo.' },
        { trigger: 'Sobre sintomas urinários', speech: 'Notei que estou urinando bem menos que o normal nos últimos dias.' },
        { trigger: 'Sobre uso de proteção no trabalho', speech: 'A gente não usa muito equipamento de proteção, bota às vezes, mas nessa correria da enchente nem sempre dá tempo.' },
        { trigger: 'Pergunta ativa — gravidade', speech: 'Doutor(a), isso é grave? Peguei alguma coisa da água suja?' }
      ],
      hiddenInfo: 'Notou sangramento gengival leve ao escovar os dentes nos últimos dias, sinal de gravidade que não relata espontaneamente — só revela se perguntado ativamente sobre sangramentos | Tem tido falta de ar leve ao esforço nas últimas horas, possível sinal de comprometimento pulmonar (forma grave/Síndrome de Weil com hemorragia pulmonar) — só revela se perguntado sobre sintomas respiratórios | Vários colegas de trabalho também apresentaram sintomas semelhantes na mesma semana — só revela se perguntado sobre outros casos entre colegas | Está preocupado em perder dias de trabalho, pois é o único provedor da casa — só revela essa preocupação se o candidato abordar necessidade de afastamento/internação',
      actorBehavior: 'Demonstrar dor importante ao exame de panturrilhas (queixar-se, retirar a perna). Surpreso ao saber que está ictérico. Preocupação crescente conforme a gravidade do quadro é discutida.'
    },

    instC: {
      diagnosis: 'Leptospirose, forma íctero-hemorrágica (síndrome de Weil), com comprometimento renal, hepático e sinais de gravidade (plaquetopenia, indícios de sangramento e possível comprometimento pulmonar).',
      differentials: [
        'Hepatite viral aguda — entra pela icterícia; sai pela presença de mialgia intensa em panturrilhas, sufusão conjuntival e comprometimento renal associado, achados não típicos de hepatite viral isolada, além do contexto epidemiológico de exposição a água de enchente.',
        'Dengue — entra como diferencial de síndrome febril aguda; sai pela presença de icterícia rubínica, sufusão conjuntival e comprometimento renal significativo, mais característicos de leptospirose grave, associados ao contexto epidemiológico de exposição a enchente.',
        'Hantavirose — entra como diferencial de síndrome febril com comprometimento pulmonar; sai pelo contexto epidemiológico mais compatível com exposição a água contaminada (leptospirose) do que a roedores silvestres/áreas rurais fechadas, embora ambas devam ser consideradas em quadros febris graves pós-exposição ambiental.',
        'Malária — entra como causa de febre e icterícia; sai pela ausência de história de viagem a área endêmica de malária e pelo contexto epidemiológico claro de exposição a enchente, mais compatível com leptospirose.'
      ],
      context: 'A leptospirose é uma zoonose bacteriana causada por espécies de Leptospira, transmitida pelo contato com água ou solo contaminados pela urina de roedores infectados, sendo particularmente prevalente em períodos de enchentes em áreas urbanas com saneamento precário. A forma grave (síndrome de Weil) cursa com a tríade de icterícia, insuficiência renal aguda e diátese hemorrágica, podendo evoluir para hemorragia pulmonar maciça, principal causa de óbito na doença.',
      justify: 'O diagnóstico de leptospirose forma grave (síndrome de Weil) é sustentado pelo quadro clínico-epidemiológico característico (exposição a água de enchente, febre, mialgia intensa em panturrilhas, sufusão conjuntival), associado a icterícia rubínica, insuficiência renal aguda (creatinina elevada), plaquetopenia e elevação de CPK, corroborado pela sorologia IgM reagente, configurando quadro grave que exige internação e vigilância rigorosa de complicações hemorrágicas e pulmonares.',
      expectedAnamnesis: 'Caracterização da exposição epidemiológica (contato com água/lama de enchente, atividade ocupacional de risco) | Caracterização da febre e mialgia (localização típica em panturrilhas) | Sintomas oculares (hiperemia conjuntival) | Sintomas de gravidade: sangramentos, dispneia, diminuição do débito urinário | Presença de casos semelhantes em contatos/colegas de trabalho | Uso de equipamentos de proteção individual no trabalho',
      expectedPhysical: 'Avaliação de icterícia e sua tonalidade característica | Pesquisa de sufusão conjuntival | Palpação de panturrilhas avaliando mialgia | Avaliação de hepatomegalia | Ausculta pulmonar buscando sinais de comprometimento hemorrágico pulmonar | Pesquisa de sinais de sangramento cutâneo-mucoso',
      expectedExams: [
        { exam: 'Função renal (ureia e creatinina)', justify: 'Avaliar insuficiência renal aguda, achado central na síndrome de Weil', expected: 'Elevadas, compatíveis com lesão renal aguda' },
        { exam: 'Bilirrubinas e transaminases', justify: 'Avaliar padrão de icterícia e função hepática', expected: 'Bilirrubina elevada com predomínio de direta, transaminases pouco alteradas em relação à bilirrubina (padrão típico)' },
        { exam: 'CPK (creatinofosfoquinase)', justify: 'Avaliar rabdomiólise associada à mialgia intensa', expected: 'Elevada' },
        { exam: 'Hemograma completo (plaquetas)', justify: 'Avaliar plaquetopenia, marcador de gravidade e risco hemorrágico', expected: 'Plaquetopenia presente' },
        { exam: 'Sorologia IgM ou PCR para leptospira (não deve atrasar o início do tratamento)', justify: 'Confirmação diagnóstica, sem postergar a conduta terapêutica em quadro sugestivo', expected: 'Reagente, confirmando o diagnóstico' }
      ],
      expectedConduct: 'Farmacológica: antibioticoterapia com penicilina cristalina intravenosa (ou ceftriaxona) para formas graves, iniciada o quanto antes, mesmo antes da confirmação sorológica diante de quadro clínico-epidemiológico sugestivo; suporte hemodinâmico e correção de distúrbios hidroeletrolíticos | Não farmacológica: internação hospitalar obrigatória, com avaliação de necessidade de terapia renal substitutiva (diálise) diante de insuficiência renal significativa; monitorização rigorosa de sinais de sangramento e função pulmonar | Orientações ao paciente: explicar a gravidade do quadro e a necessidade de internação; orientar sobre a origem da doença (contato com água/urina de roedores contaminada) e medidas de proteção individual futura (uso de botas, luvas em atividades de risco); notificar compulsoriamente o caso à vigilância epidemiológica',
      expectedCommunication: 'Comunicar a gravidade do quadro de forma clara, reconhecendo a necessidade de internação imediata | Explicar a relação entre a exposição ocupacional e a doença, sem culpabilizar o paciente | Orientar sobre medidas de proteção individual para o trabalho futuro | Acolher a preocupação financeira/laboral do paciente diante da necessidade de afastamento',
      criticalErrors: [
        'Não considerar leptospirose diante do contexto epidemiológico claro (exposição a água de enchente) associado a febre, mialgia e icterícia',
        'Aguardar confirmação sorológica antes de iniciar antibioticoterapia em quadro grave sugestivo',
        'Não avaliar função renal e não reconhecer insuficiência renal aguda associada',
        'Não indicar internação hospitalar diante de sinais de gravidade (icterícia, insuficiência renal, plaquetopenia)',
        'Não notificar compulsoriamente o caso à vigilância epidemiológica'
      ]
    },

    instD: {
      title: 'Leptospirose — Material de Estudo',
      sections: [
        {
          h: 'Definição e Epidemiologia',
          items: [
            { item: 'Zoonose bacteriana causada por espécies de Leptospira, transmitida pelo contato com água/solo contaminados pela urina de roedores infectados; incidência aumenta em períodos de enchentes.', score: 1, ref: 'Ministério da Saúde — Guia de Vigilância em Saúde' }
          ]
        },
        {
          h: 'Quadro Clínico',
          items: [
            { item: 'Fase precoce: febre, mialgia (especialmente em panturrilhas), cefaleia, sufusão conjuntival. Fase tardia (forma grave/Síndrome de Weil): icterícia rubínica, insuficiência renal aguda, diátese hemorrágica.', score: 2, ref: 'Ministério da Saúde' }
          ]
        },
        {
          h: 'Complicações Graves',
          items: [
            { item: 'Hemorragia pulmonar maciça é a principal causa de óbito; insuficiência renal aguda frequentemente não oligúrica na fase inicial.', score: 2, ref: 'Ministério da Saúde' }
          ]
        },
        {
          h: 'Diagnóstico',
          items: [
            { item: 'Diagnóstico clínico-epidemiológico deve guiar o início do tratamento; sorologia IgM (ELISA) ou PCR confirmam, mas não devem atrasar a conduta em casos graves.', score: 2, ref: 'Ministério da Saúde' }
          ]
        },
        {
          h: 'Tratamento',
          items: [
            { item: 'Formas leves: doxiciclina ou amoxicilina oral. Formas graves: penicilina cristalina ou ceftriaxona intravenosa, com internação e suporte hemodinâmico/renal.', score: 2, ref: 'Ministério da Saúde' }
          ]
        }
      ]
    }
  },

  // CASO 5 — CHIKUNGUNYA
  {
    id: 5,
    title: 'Febre e dor articular intensa e incapacitante',
    sub: 'UBS — Atenção Primária',
    tema: 'Infectologia',
    topic: 'Chikungunya',
    level: 'moderado',
    cardAccent: '#43A047',

    instA: {
      scenario: 'Consulta de demanda espontânea na UBS, em período de circulação simultânea de arboviroses na região.',
      patient: 'Cristina Almeida Ferraz, 52 anos, sexo feminino, costureira.',
      complaint: 'Febre e dor articular intensa e incapacitante em mãos, punhos e joelhos há 3 dias.',
      tasks: [
        'Realize a anamnese dirigida, diferenciando de outras arboviroses.',
        'Realize o exame físico geral e articular dirigido.',
        'Formule a hipótese diagnóstica e os diferenciais.',
        'Solicite os exames complementares adequados.',
        'Proponha o tratamento sintomático e oriente sobre a evolução da doença.'
      ]
    },

    instB: {
      vitals: {
        PA: '126/80 mmHg',
        FC: '90 bpm',
        FR: '16 irpm',
        Tax: '38,4 °C',
        Peso: '74 kg',
        Altura: '1,60 m',
        IMC: '28,9 kg/m²'
      },
      physicalGeneral: 'Regular estado geral, febril, com fácies de dor, dificuldade para movimentar as mãos.',
      physicalSeg: 'ARTICULAÇÕES: edema e dor à palpação em punhos, articulações interfalangeanas de ambas as mãos e joelhos, de forma simétrica, sem sinais de artrite séptica (sem calor/rubor intensos localizados); limitação funcional importante para realizar movimentos finos. | PELE: exantema maculopapular discreto em tronco e membros. | LINFONODOS: sem linfadenopatia significativa.',
      labs: [
        { test: 'Hemograma completo', val: 'Leucócitos 5.200/mm³, plaquetas 210.000/mm³', ref: 'Discretamente diferente do padrão leucopênico/plaquetopênico mais marcante da dengue', alt: false },
        { test: 'Teste rápido/sorologia IgM para chikungunya', val: 'Reagente', ref: 'Não reagente', alt: true },
        { test: 'Teste rápido NS1/sorologia para dengue', val: 'Não reagente', ref: 'Não reagente', alt: false },
        { test: 'PCR (Proteína C reativa)', val: '32 mg/L', ref: '< 5 mg/L', alt: true }
      ],
      note: 'Reforçar que hemograma relativamente preservado (sem leucopenia/plaquetopenia marcantes) e artralgia simétrica intensa e incapacitante, desproporcional aos outros sintomas, são pistas importantes para diferenciar chikungunya de dengue neste contexto de epidemia simultânea de arboviroses.',
      patientProfile: 'Costureira, trabalho manual que depende muito da mobilidade das mãos, o que está sendo bastante impactado pela dor articular atual. Refere que vários vizinhos da rua também tiveram sintomas parecidos recentemente.',
      script: [
        { trigger: 'Queixa principal', speech: 'Doutor(a), estou com febre e uma dor terrível nas juntas, principalmente nas mãos e nos joelhos, não consigo nem fechar a mão direito.' },
        { trigger: 'Sobre a dor articular', speech: 'É uma dor muito forte, simétrica dos dois lados, e incha bastante as juntas. Não consigo trabalhar costurando por causa disso.' },
        { trigger: 'Sobre a febre', speech: 'A febre começou junto com a dor nas juntas, ficou em torno de 38-39°C nesses 3 dias.' },
        { trigger: 'Sobre exantema', speech: 'Notei umas manchinhas vermelhas no corpo também, mas não coçam muito.' },
        { trigger: 'Sobre epidemiologia', speech: 'Vários vizinhos aqui perto tiveram sintomas parecidos nas últimas semanas, tem bastante mosquito na região.' },
        { trigger: 'Pergunta ativa — prognóstico', speech: 'Doutor(a), essa dor nas juntas vai passar? Vou conseguir voltar a costurar logo?' }
      ],
      hiddenInfo: 'Tem osteoartrite leve prévia em joelhos, o que pode confundir com piora da doença de base, mas a dor atual é claramente mais intensa e generalizada — só revela essa condição prévia se perguntada sobre doenças articulares prévias | Está preocupada com a possibilidade de a dor articular se tornar crônica, pois ouviu relatos de vizinhos que "nunca mais ficaram bons" após chikungunya — só revela essa preocupação se o candidato explorar expectativas sobre a evolução | Depende integralmente da renda do trabalho de costura para sustento próprio, o que aumenta sua ansiedade quanto ao afastamento — só revela se o candidato perguntar sobre impacto funcional/ocupacional | Notou que a dor piora bastante pela manhã, com rigidez articular matinal significativa — só revela se perguntada especificamente sobre padrão de rigidez matinal',
      actorBehavior: 'Demonstrar dificuldade real de movimentação das mãos (mímica de dificuldade para fechar a mão, gestos limitados). Franzir o rosto durante a palpação das articulações. Ansiosa sobre a possibilidade de dor crônica e impacto no trabalho.'
    },

    instC: {
      diagnosis: 'Chikungunya, fase aguda, com poliartralgia/artrite simétrica intensa e incapacitante como manifestação predominante.',
      differentials: [
        'Dengue — entra como diferencial de síndrome febril aguda em contexto de epidemia simultânea de arboviroses; sai pela predominância marcante de artralgia/artrite simétrica intensa (mais característica de chikungunya) e pela sorologia positiva especificamente para chikungunya, com NS1/sorologia para dengue negativos.',
        'Zika vírus — entra como diferencial de síndrome febril exantemática; sai pela artralgia geralmente mais leve na infecção por zika, comparada à intensidade e ao caráter incapacitante observados neste caso, mais típico de chikungunya.',
        'Artrite reumatoide (surto agudo) — entra pela poliartrite simétrica em mãos; sai pelo contexto epidemiológico agudo, febre concomitante e confirmação sorológica de chikungunya, tornando uma artropatia infecciosa aguda o diagnóstico mais provável neste momento.',
        'Febre reumática — entra como diferencial de poliartrite; sai pela faixa etária da paciente e pelo contexto epidemiológico claro de arbovirose, tornando esse diagnóstico pouco provável.'
      ],
      context: 'A febre de chikungunya é uma arbovirose transmitida pelo Aedes aegypti e Aedes albopictus, caracterizada por artralgia/artrite intensa e frequentemente incapacitante, que a diferencia clinicamente da dengue, embora ambas possam circular simultaneamente na mesma região e período, exigindo diagnóstico diferencial cuidadoso. Uma parcela significativa dos pacientes evolui com sintomas articulares persistentes por semanas a meses (forma subaguda/crônica), com impacto funcional importante, como temido por esta paciente costureira.',
      justify: 'O diagnóstico de chikungunya é sustentado pela apresentação clínica característica de febre associada a poliartralgia/artrite simétrica intensa e incapacitante em pequenas e grandes articulações, com exantema associado, hemograma relativamente preservado (diferentemente do padrão leucopênico/plaquetopênico mais marcante da dengue), confirmado pela sorologia IgM reagente para chikungunya com exames para dengue negativos.',
      expectedAnamnesis: 'Caracterização da febre e sua relação temporal com a dor articular | Caracterização da dor articular (localização, simetria, intensidade, impacto funcional) | Presença de exantema | Contexto epidemiológico (casos na vizinhança, presença de mosquitos) | Impacto funcional/ocupacional da artralgia | Doenças articulares prévias que possam confundir o quadro',
      expectedPhysical: 'Aferição de temperatura | Exame articular detalhado, avaliando simetria, edema, calor e limitação funcional | Inspeção de pele buscando exantema | Avaliação de sinais de alarme para excluir dengue concomitante (embora possa haver coinfecção, deve-se avaliar ativamente)',
      expectedExams: [
        { exam: 'Sorologia IgM ou teste rápido para chikungunya', justify: 'Confirmação diagnóstica específica', expected: 'Reagente' },
        { exam: 'Teste rápido NS1/sorologia para dengue', justify: 'Diagnóstico diferencial e exclusão de coinfecção, dado o contexto de circulação simultânea de arboviroses', expected: 'Auxilia a diferenciar as duas condições' },
        { exam: 'Hemograma completo', justify: 'Auxiliar na diferenciação com dengue, que tipicamente cursa com leucopenia e plaquetopenia mais marcantes', expected: 'Geralmente mais preservado que na dengue' }
      ],
      expectedConduct: 'Farmacológica: analgesia e anti-inflamatório para controle da dor articular na fase aguda (uso de AINEs pode ser considerado após exclusão segura de dengue, dado o risco de sangramento nesta última); paracetamol como opção mais segura enquanto houver dúvida diagnóstica entre as arboviroses | Não farmacológica: repouso das articulações acometidas na fase aguda; fisioterapia pode ser considerada em casos de evolução para forma subaguda/crônica com limitação funcional persistente | Orientações ao paciente: explicar a diferença entre chikungunya e dengue de forma acessível; alertar sobre a possibilidade de persistência da dor articular por semanas a meses (forma subaguda/crônica) em parcela significativa dos pacientes, sem gerar pânico, mas preparando para essa possibilidade; orientar retorno caso surjam sinais de alarme que sugiram dengue associada',
      expectedCommunication: 'Explicar de forma didática a diferença entre chikungunya e dengue, já que a paciente pode ter ouvido falar apenas em dengue na comunidade | Acolher a preocupação da paciente quanto ao impacto no trabalho manual | Preparar realisticamente para a possibilidade de sintomas articulares prolongados, sem gerar desespero | Verificar compreensão das orientações de tratamento sintomático',
      criticalErrors: [
        'Não diferenciar clinicamente chikungunya de dengue, especialmente quanto ao uso de AINEs (que devem ser evitados enquanto dengue não for excluída)',
        'Não solicitar exames que auxiliem a diferenciação entre as arboviroses circulantes',
        'Não orientar sobre a possibilidade de evolução para forma subaguda/crônica com sintomas articulares persistentes',
        'Minimizar o impacto funcional da doença sem considerar orientações de suporte (repouso articular, fisioterapia futura)',
        'Prescrever AINEs sem primeiro considerar/excluir razoavelmente dengue concomitante em área de circulação simultânea'
      ]
    },

    instD: {
      title: 'Chikungunya — Material de Estudo',
      sections: [
        {
          h: 'Definição e Transmissão',
          items: [
            { item: 'Arbovirose transmitida pelo Aedes aegypti e Aedes albopictus, com quadro clínico caracterizado por artralgia/artrite intensa e frequentemente incapacitante.', score: 1, ref: 'Ministério da Saúde — Guia de Manejo Clínico de Chikungunya' }
          ]
        },
        {
          h: 'Fases Clínicas',
          items: [
            { item: 'Fase aguda (até 14 dias): febre alta de início súbito e poliartralgia/artrite intensa, simétrica, predominando em pequenas articulações. Fase subaguda (até 3 meses) e crônica (>3 meses): persistência de dor articular em parcela significativa dos pacientes.', score: 2, ref: 'Ministério da Saúde' }
          ]
        },
        {
          h: 'Diagnóstico Diferencial com Dengue',
          items: [
            { item: 'Artralgia intensa e incapacitante é mais típica de chikungunya; leucopenia e plaquetopenia acentuadas são mais características de dengue. Confirmação por sorologia/NS1 específicos é essencial dada a circulação simultânea das arboviroses.', score: 2, ref: 'Ministério da Saúde' }
          ]
        },
        {
          h: 'Tratamento',
          items: [
            { item: 'Sintomático: analgésicos e AINEs (após exclusão razoável de dengue); paracetamol preferencial enquanto houver dúvida diagnóstica. Não há tratamento antiviral específico.', score: 2, ref: 'Ministério da Saúde' },
            { item: 'Forma crônica com artrite persistente pode requerer avaliação reumatológica e fisioterapia.', score: 1, ref: 'Ministério da Saúde' }
          ]
        }
      ]
    }
  },

  // CASO 6 — MALÁRIA
  {
    id: 6,
    title: 'Febre com calafrios em ciclos após viagem à Amazônia',
    sub: 'PS — Pronto-Socorro',
    tema: 'Infectologia',
    topic: 'Malária',
    level: 'moderado',
    cardAccent: '#43A047',

    instA: {
      scenario: 'Atendimento no Pronto-Socorro, paciente retornando de viagem à região amazônica.',
      patient: 'Diego Martins Rocha, 33 anos, sexo masculino, engenheiro ambiental.',
      complaint: 'Febre alta em ciclos, associada a calafrios intensos e sudorese, há cerca de 5 dias, iniciada após retorno de viagem de trabalho.',
      tasks: [
        'Realize a anamnese dirigida, com atenção à história de viagem.',
        'Realize o exame físico geral dirigido.',
        'Formule a hipótese diagnóstica e os diferenciais.',
        'Solicite os exames complementares adequados.',
        'Proponha o tratamento específico conforme a espécie identificada.'
      ]
    },

    instB: {
      vitals: {
        PA: '110/70 mmHg',
        FC: '102 bpm',
        FR: '18 irpm',
        Tax: '39,4 °C (no momento do pico febril)',
        Peso: '77 kg',
        Altura: '1,79 m'
      },
      physicalGeneral: 'Regular estado geral, no momento do exame em fase de calafrio intenso seguido de sudorese profusa, palidez leve.',
      physicalSeg: 'ABDOME: discreta esplenomegalia palpável, indolor; sem hepatomegalia significativa. | PELE: sem exantema. | Padrão da febre relatado pelo paciente: picos febris a cada 48 horas aproximadamente, com fase de calafrio, seguida de febre alta e depois sudorese intensa com melhora transitória (acessos malaricos).',
      labs: [
        { test: 'Gota espessa (exame parasitológico)', val: 'Positiva, com identificação de trofozoítos de Plasmodium vivax', ref: 'Negativa', alt: true },
        { test: 'Hemograma completo', val: 'Hemoglobina 11,8 g/dL, plaquetas 118.000/mm³', ref: 'Hb ≥ 13 g/dL (homens); plaquetas 150.000 – 450.000/mm³', alt: true },
        { test: 'Bilirrubina total', val: '2,1 mg/dL (predomínio indireto)', ref: '< 1,2 mg/dL', alt: true }
      ],
      note: 'A gota espessa é o exame padrão-ouro e deve ser entregue com a identificação da espécie assim que solicitada — a espécie (P. vivax, neste caso) determina o esquema terapêutico específico a ser prescrito.',
      patientProfile: 'Engenheiro ambiental, viajou a trabalho para área rural da Amazônia por 3 semanas, retornando há 6 dias. Não fez uso de quimioprofilaxia antimalárica antes da viagem. Refere picadas frequentes de mosquito durante a estadia, principalmente ao entardecer.',
      script: [
        { trigger: 'Queixa principal', speech: 'Doutor(a), estou com uma febre muito alta que vem em ciclos, com calafrios fortes, depois vem a febre, e depois eu suo muito e melhoro por um tempo, mas volta.' },
        { trigger: 'Sobre o padrão da febre', speech: 'Percebi que os episódios vêm a cada 2 dias, mais ou menos, sempre no mesmo padrão: calafrio, febre alta, depois suor.' },
        { trigger: 'Sobre viagem recente', speech: 'Voltei há uns 6 dias de uma viagem de trabalho para uma área bem no meio da Amazônia, fiquei lá umas 3 semanas.' },
        { trigger: 'Sobre profilaxia', speech: 'Não tomei nenhum remédio preventivo antes de viajar, não sabia que precisava.' },
        { trigger: 'Sobre picadas de mosquito', speech: 'Fui bastante picado por mosquitos lá, principalmente no final da tarde e à noite, a região tinha muito mosquito.' },
        { trigger: 'Sobre sintomas associados', speech: 'Sinto dor de cabeça forte durante a febre, e um cansaço muito grande depois que passa a crise.' },
        { trigger: 'Pergunta ativa — diagnóstico', speech: 'Doutor(a), o que eu peguei lá? Isso tem cura? Posso ter complicado alguma coisa?' }
      ],
      hiddenInfo: 'Notou um leve amarelamento dos olhos que não valorizou, sinal de hemólise associada — só revela se perguntado especificamente sobre alterações na cor dos olhos/pele | Um colega de trabalho que viajou junto também apresentou sintomas parecidos após o retorno — só revela se perguntado sobre outras pessoas do grupo de viagem com sintomas semelhantes | Está preocupado com a possibilidade de ter uma forma grave da doença, pois um conhecido teve complicações graves de malária no passado — só revela essa preocupação se o candidato acolher a situação | Não sabe diferenciar malária de dengue e está confuso sobre os dois diagnósticos possíveis — verbaliza essa confusão se o candidato não esclarecer bem',
      actorBehavior: 'Durante a simulação, pode demonstrar (verbalmente) as fases do "acesso malárico" — calafrio, depois febre, depois sudorese — como se estivesse passando por um ciclo durante a consulta. Fadiga visível após descrever uma crise. Curioso e ansioso para entender o diagnóstico.'
    },

    instC: {
      diagnosis: 'Malária por Plasmodium vivax, forma não complicada, confirmada por gota espessa.',
      differentials: [
        'Dengue — entra como diferencial de síndrome febril aguda; sai pelo padrão cíclico característico da febre (paroxismos a cada 48h no caso de P. vivax) e pela confirmação parasitológica na gota espessa, além do contexto epidemiológico de viagem a área endêmica de malária.',
        'Febre tifoide — entra como diferencial de febre em viajante; sai pela ausência do padrão em "escada" característico da febre tifoide e pela confirmação da gota espessa positiva para Plasmodium.',
        'Leptospirose — entra como diferencial de síndrome febril com icterícia leve; sai pela ausência de exposição a água contaminada/enchente e pela confirmação parasitológica específica de malária.',
        'Febre amarela — entra como diferencial em viajante para área amazônica com febre e icterícia leve; sai pela confirmação da gota espessa positiva para malária, tornando esse o diagnóstico confirmado, embora o status vacinal para febre amarela deva sempre ser verificado em viajantes para a região.'
      ],
      context: 'A malária é uma doença parasitária transmitida pela picada do mosquito Anopheles, endêmica principalmente na região amazônica no Brasil. O Plasmodium vivax é a espécie mais prevalente no país, causando tipicamente febre terçã (paroxismos a cada 48 horas), com potencial de recaídas tardias pela persistência de formas hepáticas latentes (hipnozoítos) se não tratado adequadamente com esquema que inclua radical cura.',
      justify: 'O diagnóstico de malária por P. vivax é confirmado pela gota espessa positiva com identificação da espécie, associado ao quadro clínico característico de febre cíclica com calafrios, seguida de sudorese profusa (acessos malaricos), esplenomegalia e sinais discretos de hemólise (bilirrubina indireta elevada, anemia leve), em paciente com história epidemiológica compatível (viagem recente a área endêmica sem quimioprofilaxia).',
      expectedAnamnesis: 'História detalhada de viagem (local, tempo de permanência, data de retorno) | Uso de quimioprofilaxia antimalárica | Caracterização do padrão da febre (cíclico, calafrios, sudorese) | Sintomas associados (cefaleia, mialgia, icterícia) | Outras pessoas do grupo de viagem com sintomas semelhantes | Sinais de gravidade (alteração de consciência, dispneia, oligúria, sangramentos)',
      expectedPhysical: 'Aferição de temperatura durante os diferentes momentos do ciclo febril, se possível | Palpação abdominal avaliando esplenomegalia/hepatomegalia | Avaliação de icterícia | Avaliação do nível de consciência e sinais de gravidade',
      expectedExams: [
        { exam: 'Gota espessa (exame parasitológico padrão-ouro)', justify: 'Confirmar o diagnóstico e identificar a espécie de Plasmodium, essencial para definir o esquema terapêutico', expected: 'Positiva, com identificação da espécie (P. vivax neste caso)' },
        { exam: 'Teste rápido para malária (quando disponível, complementar à gota espessa)', justify: 'Diagnóstico rápido complementar, especialmente em locais sem microscopista disponível imediatamente', expected: 'Positivo para a espécie identificada' },
        { exam: 'Hemograma completo e bilirrubinas', justify: 'Avaliar repercussão hematológica (anemia, plaquetopenia) e hemólise associada', expected: 'Anemia leve, plaquetopenia e bilirrubina indireta elevada, compatíveis com hemólise' },
        { exam: 'Função renal e hepática (em casos com sinais de gravidade)', justify: 'Rastrear complicações de formas graves, especialmente por P. falciparum, embora menos frequentes com P. vivax', expected: 'Normal na forma não complicada' }
      ],
      expectedConduct: 'Farmacológica: esquema de tratamento específico para P. vivax conforme protocolo do Ministério da Saúde, combinando cloroquina (ação esquizonticida sanguínea) associada à primaquina (ação sobre hipnozoítos hepáticos, para "cura radical" e prevenção de recaídas), respeitando contraindicações (deficiência de G6PD deve ser investigada antes do uso de primaquina, quando possível) | Não farmacológica: acompanhamento clínico ambulatorial na forma não complicada, com orientação de retorno caso surjam sinais de gravidade | Orientações ao paciente: explicar a importância de completar o esquema terapêutico completo, incluindo a primaquina, para evitar recaídas tardias por persistência de formas hepáticas; notificar compulsoriamente o caso à vigilância epidemiológica; orientar sobre prevenção em viagens futuras (quimioprofilaxia quando indicada, repelentes, mosquiteiros)',
      expectedCommunication: 'Explicar de forma didática o ciclo da doença e por que a febre ocorre em padrões cíclicos característicos | Esclarecer a diferença entre malária e outras doenças febris que o paciente possa confundir (ex.: dengue) | Reforçar a importância de completar todo o esquema terapêutico, incluindo a fase de prevenção de recaídas | Orientar sobre prevenção para viagens futuras à região endêmica',
      criticalErrors: [
        'Não investigar história de viagem para área endêmica em paciente com febre, atrasando o diagnóstico',
        'Não solicitar gota espessa (ou teste rápido) diante de suspeita de malária',
        'Prescrever esquema terapêutico incompleto, sem incluir primaquina para P. vivax, expondo o paciente a risco de recaída',
        'Não notificar compulsoriamente o caso à vigilância epidemiológica',
        'Não orientar sobre prevenção (quimioprofilaxia, repelentes) para viagens futuras a áreas endêmicas'
      ]
    },

    instD: {
      title: 'Malária — Material de Estudo',
      sections: [
        {
          h: 'Definição e Epidemiologia',
          items: [
            { item: 'Doença parasitária transmitida pela picada do mosquito Anopheles; no Brasil, é endêmica principalmente na região amazônica, sendo o Plasmodium vivax a espécie mais prevalente.', score: 1, ref: 'Ministério da Saúde — Guia de Tratamento da Malária no Brasil' }
          ]
        },
        {
          h: 'Quadro Clínico',
          items: [
            { item: 'Febre cíclica com calafrios seguidos de sudorese profusa (acesso malárico); periodicidade de 48h (febre terçã) para P. vivax e P. falciparum, e 72h (febre quartã) para P. malariae.', score: 2, ref: 'Ministério da Saúde' }
          ]
        },
        {
          h: 'Diagnóstico',
          items: [
            { item: 'Gota espessa é o exame padrão-ouro, permitindo identificação da espécie; testes rápidos são complementares.', score: 2, ref: 'Ministério da Saúde' }
          ]
        },
        {
          h: 'Tratamento',
          items: [
            { item: 'P. vivax: cloroquina associada a primaquina (cura radical, prevenindo recaídas por hipnozoítos hepáticos). P. falciparum: esquemas combinados com derivados de artemisinina (não cloroquina, dado o padrão de resistência).', score: 2, ref: 'Ministério da Saúde — Guia de Tratamento da Malária' },
            { item: 'Investigar deficiência de G6PD antes do uso de primaquina, quando possível, pelo risco de hemólise.', score: 1, ref: 'Ministério da Saúde' }
          ]
        },
        {
          h: 'Prevenção',
          items: [
            { item: 'Quimioprofilaxia para viajantes a áreas de alto risco, uso de repelentes e mosquiteiros; notificação compulsória de todos os casos.', score: 1, ref: 'Ministério da Saúde' }
          ]
        }
      ]
    }
  },

  // CASO 7 — DOENÇA DE CHAGAS AGUDA
  {
    id: 7,
    title: 'Febre prolongada e inchaço ao redor do olho após consumo de açaí',
    sub: 'PS — Pronto-Socorro',
    tema: 'Infectologia',
    topic: 'Doença de Chagas Aguda',
    level: 'difícil',
    cardAccent: '#43A047',

    instA: {
      scenario: 'Atendimento no Pronto-Socorro, surto familiar após consumo de suco de açaí artesanal em área endêmica.',
      patient: 'Eduardo Nascimento Batista, 19 anos, sexo masculino, estudante.',
      complaint: 'Febre prolongada há 12 dias, associada a inchaço ao redor de um dos olhos, iniciados após consumo de suco de açaí artesanal em casa de parentes na zona rural.',
      tasks: [
        'Realize a anamnese dirigida, com atenção à história epidemiológica alimentar.',
        'Realize o exame físico geral dirigido.',
        'Formule a hipótese diagnóstica e os diferenciais.',
        'Solicite os exames complementares adequados.',
        'Proponha o tratamento específico e as medidas de vigilância epidemiológica.'
      ]
    },

    instB: {
      vitals: {
        PA: '104/68 mmHg',
        FC: '108 bpm',
        FR: '18 irpm',
        Tax: '38,6 °C',
        Peso: '68 kg',
        Altura: '1,75 m'
      },
      physicalGeneral: 'Regular estado geral, febril, com edema periorbitário unilateral visível, discreto emagrecimento.',
      physicalSeg: 'FACE: edema bipalpebral unilateral (olho esquerdo), indolor, sem hiperemia importante (sinal de Romaña). | LINFONODOS: linfadenopatia generalizada discreta. | ABDOME: hepatoesplenomegalia leve, indolor à palpação. | CARDIOVASCULAR: taquicardia sinusal, bulhas rítmicas, sem sopros no momento.',
      labs: [
        { test: 'Pesquisa direta de tripomastigotas no sangue periférico (exame a fresco)', val: 'Positiva, com visualização de formas tripomastigotas móveis', ref: 'Negativa', alt: true },
        { test: 'Hemograma completo', val: 'Leucocitose com linfocitose relativa, sem eosinofilia importante', ref: 'Padrão variável; linfocitose pode ocorrer na fase aguda', alt: true },
        { test: 'Eletrocardiograma', val: 'Taquicardia sinusal, sem alterações de condução ou repolarização no momento', ref: 'Ritmo sinusal normal', alt: false }
      ],
      note: 'A pesquisa direta do parasita no sangue (método parasitológico direto) é o exame de escolha na fase aguda, com alta sensibilidade neste período — deve ser priorizada em relação à sorologia, que tem maior utilidade na fase crônica. Entregar o resultado assim que solicitado.',
      patientProfile: 'Estudante, visitou parentes em área rural há cerca de 2 semanas, onde consumiu suco de açaí artesanal preparado de forma caseira, sem processamento industrial adequado. Outros familiares que consumiram o mesmo suco também apresentaram sintomas semelhantes (febre prolongada).',
      script: [
        { trigger: 'Queixa principal', speech: 'Doutor(a), estou com febre há quase 2 semanas, não passa, e meu olho esquerdo inchou bastante, sem eu ter batido nem nada.' },
        { trigger: 'Sobre o inchaço no olho', speech: 'Foi bem estranho, o olho ficou inchado do nada, sem doer muito, só o inchaço mesmo.' },
        { trigger: 'Sobre alimentação recente', speech: 'Fui visitar uns parentes na roça há umas 2 semanas, e lá bebemos um suco de açaí bem caseiro, feito na hora, de uma polpa que eles mesmos bateram.' },
        { trigger: 'Sobre outros casos na família', speech: 'É engraçado que minha prima e meu tio, que também beberam o mesmo suco, ficaram com febre parecida depois.' },
        { trigger: 'Sobre sintomas associados', speech: 'Sinto um cansaço grande, e umas "ínguas" pelo corpo, além dessa febre que não passa.' },
        { trigger: 'Sobre sintomas cardíacos', speech: 'Às vezes sinto o coração meio acelerado, mas não sei se é da febre mesmo.' },
        { trigger: 'Pergunta ativa — diagnóstico', speech: 'Doutor(a), o que é isso? Foi o açaí que causou? Isso tem cura?' }
      ],
      hiddenInfo: 'Notou um pequeno nódulo endurecido perto do olho inchado, que corresponderia ao sinal de Romaña em fase inicial (chagoma de inoculação ocular) — só revela se perguntado especificamente sobre presença de nódulos/caroços na região | Está com falta de ar leve ao subir escadas nos últimos dias, possível sinal de comprometimento miocárdico agudo (miocardite chagásica aguda) — só revela se perguntado ativamente sobre dispneia | A casa dos parentes na zona rural tem barbeiros (triatomíneos) conhecidos na região, mas a família nunca associou isso a doenças — só revela se perguntado sobre condições de moradia dos parentes/presença de insetos | Está confuso achando que "pegou uma alergia" do açaí, sem entender que pode ser uma doença infecciosa transmitida pelo alimento contaminado — verbaliza essa confusão espontaneamente',
      actorBehavior: 'Visivelmente preocupado com o inchaço no olho, toca a região repetidamente. Cansaço aparente ao longo da consulta. Curioso e um pouco confuso sobre a relação entre o consumo do açaí e a doença.'
    },

    instC: {
      diagnosis: 'Doença de Chagas aguda, provavelmente por transmissão oral (surto alimentar por consumo de açaí contaminado), com sinal de Romaña (porta de entrada ocular) e possível miocardite chagásica aguda associada.',
      differentials: [
        'Mononucleose infecciosa — entra pela associação de febre prolongada, linfadenopatia e hepatoesplenomegalia; sai pela confirmação parasitológica direta positiva para tripomastigotas e pelo contexto epidemiológico de surto alimentar característico.',
        'Toxoplasmose aguda — entra como diferencial de síndrome febril com linfadenopatia; sai pela presença específica do sinal de Romaña (edema bipalpebral unilateral) e pela confirmação parasitológica direta de Trypanosoma cruzi.',
        'Celulite periorbitária — entra pelo edema periorbitário unilateral; sai pela ausência de sinais flogísticos intensos (calor, rubor marcante, dor importante) e pelo contexto epidemiológico e sistêmico (febre prolongada, hepatoesplenomegalia, outros casos familiares) mais compatível com doença de Chagas aguda.',
        'Febre tifoide — entra como diferencial de febre prolongada; sai pela presença do sinal de Romaña característico e pela confirmação parasitológica direta específica.'
      ],
      context: 'A doença de Chagas é causada pelo protozoário Trypanosoma cruzi, classicamente transmitida pelo inseto vetor (triatomíneo, "barbeiro"), mas com surtos crescentes de transmissão oral no Brasil, especialmente na região amazônica, associados ao consumo de açaí e outros alimentos contaminados processados de forma artesanal inadequada. A fase aguda pode cursar com miocardite e, mais raramente, meningoencefalite, sendo potencialmente mais grave nos surtos de transmissão oral, que tendem a ter maior carga parasitária inoculada.',
      justify: 'O diagnóstico de doença de Chagas aguda é sustentado pela combinação de febre prolongada, sinal de Romaña (edema bipalpebral unilateral, porta de entrada ocular do parasita), linfadenopatia generalizada e hepatoesplenomegalia, associado ao contexto epidemiológico de surto alimentar (consumo de açaí artesanal compartilhado com outros familiares sintomáticos), confirmado pela pesquisa direta positiva de tripomastigotas no sangue periférico — método de escolha na fase aguda pela alta parasitemia circulante neste período.',
      expectedAnamnesis: 'Caracterização da febre (duração, padrão) | Presença e características do edema periorbitário (sinal de Romaña) | História alimentar detalhada (consumo de açaí ou outros alimentos artesanais em área endêmica) | Outros casos semelhantes entre familiares/contatos que compartilharam a mesma refeição | Sintomas cardíacos (palpitações, dispneia) sugestivos de miocardite aguda | Condições de moradia dos parentes visitados (presença de triatomíneos)',
      expectedPhysical: 'Inspeção facial detalhada buscando sinal de Romaña ou chagoma de inoculação | Palpação de linfonodos | Palpação abdominal avaliando hepatoesplenomegalia | Ausculta cardíaca cuidadosa | Avaliação de sinais de insuficiência cardíaca (dispneia, edema, turgência jugular)',
      expectedExams: [
        { exam: 'Pesquisa direta de tripomastigotas no sangue periférico (exame a fresco ou método de concentração)', justify: 'Exame de escolha na fase aguda, dada a alta parasitemia circulante neste período', expected: 'Positivo, confirmando o diagnóstico' },
        { exam: 'Eletrocardiograma', justify: 'Rastrear miocardite chagásica aguda, complicação temida da fase aguda', expected: 'Pode mostrar alterações de repolarização, distúrbios de condução ou taquicardia sinusal isolada' },
        { exam: 'Ecocardiograma (em casos com sintomas cardíacos ou ECG alterado)', justify: 'Avaliar função miocárdica diante de suspeita de miocardite aguda', expected: 'Avaliar presença de disfunção ventricular associada' },
        { exam: 'Hemograma completo', justify: 'Avaliar padrão inflamatório/linfocitose associada à fase aguda', expected: 'Leucocitose com linfocitose relativa' }
      ],
      expectedConduct: 'Farmacológica: iniciar tratamento específico com benznidazol o mais precocemente possível, medicamento de escolha na fase aguda, com maior taxa de cura nesta fase da doença; monitorização de efeitos adversos do tratamento (reações cutâneas, alterações hematológicas) | Não farmacológica: internação para monitorização cardíaca se houver sinais de miocardite aguda; investigação e acompanhamento dos demais familiares que compartilharam a mesma refeição, mesmo que assintomáticos no momento | Orientações ao paciente: explicar a relação causal entre o consumo do açaí artesanal contaminado e a doença, orientando sobre a importância do processamento adequado (pasteurização) de polpas de açaí para prevenção; notificar compulsoriamente o caso e o surto à vigilância epidemiológica; explicar a importância do tratamento precoce para maior chance de cura parasitológica',
      expectedCommunication: 'Explicar de forma clara a relação entre o alimento consumido e a doença, desconstruindo a confusão inicial do paciente com "alergia" | Comunicar a necessidade de avaliação dos demais familiares expostos ao mesmo alimento | Explicar a importância do tratamento precoce e específico | Acolher a preocupação do paciente quanto ao prognóstico',
      criticalErrors: [
        'Não investigar história alimentar detalhada (consumo de açaí/outros alimentos artesanais) diante de febre prolongada em área endêmica',
        'Não reconhecer o sinal de Romaña como achado característico de doença de Chagas aguda',
        'Não solicitar pesquisa direta do parasita (exame de escolha na fase aguda) e optar apenas por sorologia, menos sensível nesta fase',
        'Não avaliar comprometimento cardíaco (ECG) diante de suspeita de doença de Chagas aguda',
        'Não notificar o surto e não orientar avaliação dos demais familiares expostos ao mesmo alimento'
      ]
    },

    instD: {
      title: 'Doença de Chagas Aguda — Material de Estudo',
      sections: [
        {
          h: 'Definição e Vias de Transmissão',
          items: [
            { item: 'Doença causada pelo Trypanosoma cruzi; transmissão vetorial clássica (triatomíneo/"barbeiro") e transmissão oral por alimentos contaminados (surtos crescentes associados a açaí na região amazônica) são as principais vias no Brasil atualmente.', score: 2, ref: 'Ministério da Saúde — Guia de Vigilância em Saúde' }
          ]
        },
        {
          h: 'Quadro Clínico da Fase Aguda',
          items: [
            { item: 'Sinal de Romaña (edema bipalpebral unilateral, porta de entrada ocular) ou chagoma de inoculação cutânea; febre prolongada, linfadenopatia, hepatoesplenomegalia.', score: 2, ref: 'Ministério da Saúde' },
            { item: 'Miocardite aguda e, mais raramente, meningoencefalite são complicações possíveis, especialmente em surtos de transmissão oral com maior carga parasitária.', score: 2, ref: 'Ministério da Saúde' }
          ]
        },
        {
          h: 'Diagnóstico',
          items: [
            { item: 'Pesquisa direta do parasita no sangue (exame a fresco ou métodos de concentração) é o método de escolha na fase aguda, pela alta parasitemia circulante; sorologia tem maior utilidade na fase crônica.', score: 2, ref: 'Ministério da Saúde' }
          ]
        },
        {
          h: 'Tratamento',
          items: [
            { item: 'Benznidazol é o tratamento de escolha, com maior eficácia quando iniciado precocemente na fase aguda.', score: 2, ref: 'Ministério da Saúde' }
          ]
        },
        {
          h: 'Vigilância e Prevenção',
          items: [
            { item: 'Notificação compulsória obrigatória; surtos de transmissão oral exigem investigação e acompanhamento de todos os expositores ao mesmo alimento, e reforço de medidas de processamento seguro de polpas de frutas artesanais.', score: 2, ref: 'Ministério da Saúde' }
          ]
        }
      ]
    }
  },

  // CASO 8 — TOXOPLASMOSE GESTACIONAL
  {
    id: 8,
    title: 'Sorologia de toxoplasmose com IgM reagente no pré-natal',
    sub: 'Ambulatório — Pré-natal de Alto Risco',
    tema: 'Infectologia',
    topic: 'Toxoplasmose Gestacional',
    level: 'difícil',
    cardAccent: '#43A047',

    instA: {
      scenario: 'Consulta de retorno no ambulatório de pré-natal para avaliação de resultado de sorologia de rotina.',
      patient: 'Vanderleia Souza Prado, 26 anos, sexo feminino, veterinária, 16 semanas de gestação.',
      complaint: 'Retorna para avaliação de sorologias do primeiro trimestre, assintomática.',
      tasks: [
        'Realize a anamnese dirigida, incluindo fatores de risco para toxoplasmose.',
        'Interprete corretamente o resultado sorológico apresentado.',
        'Formule a conduta diagnóstica adicional necessária para confirmar infecção aguda.',
        'Solicite os exames complementares adequados para avaliar risco fetal.',
        'Proponha o tratamento e as orientações preventivas.'
      ]
    },

    instB: {
      vitals: {
        PA: '110/70 mmHg',
        FC: '78 bpm',
        FR: '16 irpm',
        Tax: '36,4 °C',
        Peso: '64 kg',
        Altura: '1,62 m'
      },
      physicalGeneral: 'Bom estado geral, assintomática, sem febre ou linfadenopatia palpável no momento do exame.',
      physicalSeg: 'ABDOME/ÚTERO: altura uterina compatível com idade gestacional; batimentos cardiofetais presentes, rítmicos, 152 bpm. | LINFONODOS: sem linfadenopatia cervical palpável no momento.',
      labs: [
        { test: 'IgM para toxoplasmose (sorologia de rotina do 1º trimestre)', val: 'Reagente', ref: 'Não reagente', alt: true },
        { test: 'IgG para toxoplasmose', val: 'Reagente, com teste de avidez de IgG', ref: 'Avidez alta sugere infecção antiga (>4 meses); avidez baixa sugere infecção recente', alt: true },
        { test: 'Teste de avidez de IgG', val: 'Avidez baixa (0,18)', ref: 'Avidez alta (>0,3) exclui infecção nos últimos 3-4 meses; avidez baixa é compatível com infecção recente', alt: true }
      ],
      note: 'O teste de avidez de IgG é fundamental para datar a infecção em relação à gestação e deve ser solicitado sempre que IgM e IgG estiverem reagentes em gestante — reforçar essa conduta se o candidato não pensar em solicitá-lo espontaneamente.',
      patientProfile: 'Veterinária, trabalha em clínica que atende animais domésticos, incluindo gatos. Tem dois gatos em casa. Refere gostar de preparar carnes mal passadas e já teve contato com jardinagem sem luvas recentemente.',
      script: [
        { trigger: 'Ao ser informada do resultado', speech: 'Doutor(a), o resultado do meu exame de toxoplasmose deu alterado? Isso é grave para o bebê?' },
        { trigger: 'Sobre sintomas', speech: 'Não senti nada de diferente, nenhuma febre, nenhum gânglio inchado, estou me sentindo bem.' },
        { trigger: 'Sobre exposição a gatos', speech: 'Trabalho numa clínica veterinária, mexo com gatos o tempo todo, e também tenho dois gatos em casa.' },
        { trigger: 'Sobre hábitos alimentares', speech: 'Confesso que gosto de comer carne mal passada, principalmente carne bovina.' },
        { trigger: 'Sobre jardinagem', speech: 'Mexo na terra do jardim de vez em quando, às vezes sem luva mesmo.' },
        { trigger: 'Sobre exames prévios de toxoplasmose', speech: 'Não sei se já tive contato com toxoplasmose antes dessa gestação, nunca tinha feito esse exame.' },
        { trigger: 'Pergunta ativa — risco fetal', speech: 'Doutor(a), meu bebê pode ter problemas por causa disso? O que eu faço agora?' }
      ],
      hiddenInfo: 'Teve um episódio de mal-estar leve com "gânglios inchados" no pescoço há cerca de 6-8 semanas, que atribuiu a uma gripe e não valorizou — só revela se perguntada ativamente sobre sintomas nas últimas semanas | Limpa a caixa de areia dos gatos diariamente, geralmente sem luvas — só revela detalhes específicos se perguntada sobre manuseio da caixa de areia | Está com muito medo de precisar interromper a gestação por causa do diagnóstico — verbaliza esse medo se o candidato não esclarecer adequadamente as opções e o real risco | Não lava sempre bem as mãos após manusear terra do jardim antes de comer — só revela esse detalhe se perguntada sobre higiene após contato com terra',
      actorBehavior: 'Muito ansiosa ao ouvir sobre o resultado alterado, focada principalmente no risco para o bebê. Colaborativa ao fornecer informações sobre hábitos quando perguntada diretamente. Alívio gradual conforme recebe explicações claras sobre a conduta.'
    },

    instC: {
      diagnosis: 'Toxoplasmose aguda provavelmente adquirida no início da gestação (IgM e IgG reagentes com avidez de IgG baixa, sugerindo infecção recente, possivelmente coincidindo com quadro de mal-estar/linfadenopatia relatado 6-8 semanas antes), exigindo avaliação de risco de transmissão vertical.',
      differentials: [
        'Infecção antiga (antes da gestação) com IgM residual — entra como possibilidade em toda gestante com IgM reagente; sai pela avidez de IgG baixa, que sugere infecção mais recente (dentro dos últimos 3-4 meses), reforçando a necessidade de considerar infecção aguda gestacional.',
        'Falso-positivo de IgM (reação cruzada) — entra como possibilidade a se considerar em sorologias de toxoplasmose; sai pela presença de história compatível (mal-estar com linfadenopatia há 6-8 semanas) e pela avidez baixa corroborando o quadro, embora a confirmação em laboratório de referência possa ser considerada em casos de dúvida.',
        'Mononucleose infecciosa como causa do episódio de linfadenopatia prévio — entra como diferencial do episódio de mal-estar relatado; sai pela sorologia específica confirmando toxoplasmose como explicação mais provável e relevante para a conduta obstétrica atual.'
      ],
      context: 'A toxoplasmose é causada pelo protozoário Toxoplasma gondii, adquirida principalmente pelo consumo de carne crua/mal cozida contendo cistos, contato com fezes de gato contaminadas (hospedeiro definitivo) ou manuseio de terra contaminada. A infecção aguda na gestação pode resultar em transmissão vertical, com risco de toxoplasmose congênita (que pode causar corioretinite, calcificações cerebrais, hidrocefalia), sendo o risco de transmissão maior quanto mais avançada a gestação, mas a gravidade das sequelas fetais maior quanto mais precoce a infecção.',
      justify: 'A suspeita de infecção aguda é sustentada pela positividade de IgM e IgG com teste de avidez de IgG baixo, sugerindo infecção adquirida dentro dos últimos 3-4 meses, compatível com o relato de mal-estar com linfadenopatia há 6-8 semanas — achados que, associados aos fatores de risco identificados (contato com gatos/caixa de areia, consumo de carne mal passada, manuseio de terra sem proteção), reforçam a suspeita de toxoplasmose aguda gestacional, exigindo tratamento e investigação de acometimento fetal.',
      expectedAnamnesis: 'Sintomas sugestivos de toxoplasmose aguda (mal-estar, febre baixa, linfadenopatia) nas últimas semanas/meses | Fatores de risco: contato com gatos e manuseio de fezes/caixa de areia, consumo de carne crua ou mal cozida, contato com terra/jardinagem sem proteção | Idade gestacional no momento da provável infecção | Resultados sorológicos prévios à gestação, se disponíveis',
      expectedPhysical: 'Palpação de linfonodos cervicais e outras cadeias | Avaliação de sinais vitais maternos | Ausculta de batimentos cardiofetais e medida de altura uterina',
      expectedExams: [
        { exam: 'Teste de avidez de IgG para toxoplasmose', justify: 'Datar a infecção em relação à gestação — avidez alta exclui infecção recente, avidez baixa sugere infecção nos últimos 3-4 meses', expected: 'Avidez baixa neste caso, compatível com infecção recente' },
        { exam: 'Ultrassonografia obstétrica morfológica seriada', justify: 'Rastrear sinais sugestivos de toxoplasmose congênita (calcificações cerebrais, ventriculomegalia, hidrocefalia)', expected: 'Acompanhamento seriado; pode ser normal ou apresentar alterações sugestivas' },
        { exam: 'Amniocentese com PCR para Toxoplasma gondii no líquido amniótico (após 18 semanas e pelo menos 4 semanas após a provável infecção)', justify: 'Confirmar ou excluir infecção fetal', expected: 'Define conduta adicional conforme positividade ou negatividade' }
      ],
      expectedConduct: 'Farmacológica: iniciar espiramicina imediatamente diante de suspeita de infecção aguda materna, medicamento que reduz o risco de transmissão vertical (não trata infecção fetal já estabelecida); caso a infecção fetal seja confirmada (PCR positivo no líquido amniótico) ou fortemente suspeita, considerar esquema combinado (sulfadiazina, pirimetamina e ácido folínico) conforme avaliação especializada, geralmente após o primeiro trimestre | Não farmacológica: encaminhamento ao pré-natal de alto risco para acompanhamento conjunto; seguimento ultrassonográfico seriado | Orientações ao paciente: explicar de forma clara o risco de transmissão vertical e a importância do tratamento em reduzir esse risco; esclarecer que a maioria das crianças com toxoplasmose congênita tratada adequadamente não desenvolve sequelas graves; orientar medidas preventivas para evitar reinfecção ou infecção de outros membros: evitar contato com fezes de gato (delegar limpeza da caixa de areia a outra pessoa, ou usar luvas e lavar bem as mãos), evitar consumo de carne crua/mal passada, usar luvas na jardinagem/manuseio de terra',
      expectedCommunication: 'Comunicar o resultado de forma clara, mas acolhedora, evitando gerar pânico desproporcional | Explicar de forma didática a diferença entre infecção materna e infecção fetal, e a importância do tratamento em reduzir (não eliminar) o risco de transmissão | Esclarecer que a interrupção da gestação não é a conduta indicada apenas pela sorologia materna alterada | Verificar compreensão das orientações preventivas',
      criticalErrors: [
        'Não solicitar teste de avidez de IgG diante de IgM e IgG reagentes em gestante, deixando de datar adequadamente a infecção',
        'Não iniciar espiramicina prontamente diante de suspeita de toxoplasmose aguda gestacional',
        'Não encaminhar para investigação de acometimento fetal (USG seriada, consideração de amniocentese)',
        'Gerar pânico desproporcional sugerindo interrupção da gestação sem base em confirmação de acometimento fetal',
        'Não orientar medidas preventivas específicas (manuseio de caixa de areia, consumo de carne, jardinagem)'
      ]
    },

    instD: {
      title: 'Toxoplasmose Gestacional — Material de Estudo',
      sections: [
        {
          h: 'Definição e Transmissão',
          items: [
            { item: 'Infecção pelo protozoário Toxoplasma gondii, adquirida por consumo de carne crua/mal cozida, contato com fezes de gato (hospedeiro definitivo) ou manuseio de terra/água contaminadas.', score: 1, ref: 'FEBRASGO / Ministério da Saúde' }
          ]
        },
        {
          h: 'Diagnóstico Sorológico',
          items: [
            { item: 'IgM e IgG reagentes exigem teste de avidez de IgG: avidez alta exclui infecção nos últimos 3-4 meses; avidez baixa é compatível com infecção recente, reforçando risco gestacional.', score: 2, ref: 'FEBRASGO' }
          ]
        },
        {
          h: 'Risco de Transmissão Vertical',
          items: [
            { item: 'Risco de transmissão aumenta com a idade gestacional (maior no 3º trimestre), mas a gravidade das sequelas fetais é maior quanto mais precoce a infecção (maior risco no 1º trimestre).', score: 2, ref: 'FEBRASGO' }
          ]
        },
        {
          h: 'Diagnóstico de Infecção Fetal',
          items: [
            { item: 'PCR para Toxoplasma gondii no líquido amniótico (amniocentese, geralmente após 18 semanas) confirma ou exclui infecção fetal; USG seriada rastreia sinais sugestivos (calcificações cerebrais, ventriculomegalia).', score: 2, ref: 'FEBRASGO' }
          ]
        },
        {
          h: 'Tratamento',
          items: [
            { item: 'Espiramicina reduz risco de transmissão vertical na suspeita/confirmação de infecção materna sem confirmação de infecção fetal. Esquema combinado (sulfadiazina + pirimetamina + ácido folínico) indicado quando há infecção fetal confirmada ou fortemente suspeita.', score: 2, ref: 'FEBRASGO / Ministério da Saúde' }
          ]
        }
      ]
    }
  },

  // CASO 9 — ESQUISTOSSOMOSE MANSÔNICA
  {
    id: 9,
    title: 'Diarreia crônica e barriga d’água em morador de área rural endêmica',
    sub: 'UBS — Atenção Primária',
    tema: 'Infectologia',
    topic: 'Esquistossomose Mansônica',
    level: 'moderado',
    cardAccent: '#43A047',

    instA: {
      scenario: 'Consulta de demanda espontânea na UBS de município endêmico para esquistossomose.',
      patient: 'José Carlos Pereira, 48 anos, sexo masculino, pescador.',
      complaint: 'Diarreia intermitente há vários meses, associada a aumento progressivo do volume abdominal.',
      tasks: [
        'Realize a anamnese dirigida, com atenção à história epidemiológica de exposição a águas.',
        'Realize o exame físico geral e abdominal dirigido.',
        'Formule a hipótese diagnóstica e classifique a fase da doença.',
        'Solicite os exames complementares adequados.',
        'Proponha o tratamento específico e as medidas de controle epidemiológico.'
      ]
    },

    instB: {
      vitals: {
        PA: '124/80 mmHg',
        FC: '82 bpm',
        FR: '18 irpm',
        Tax: '36,4 °C',
        Peso: '68 kg (com perda ponderal referida)',
        Altura: '1,70 m'
      },
      physicalGeneral: 'Regular estado geral, emagrecido, com aumento do volume abdominal desproporcional ao restante do corpo.',
      physicalSeg: 'ABDOME: volumoso (ascite moderada, macicez móvel à percussão), com circulação colateral visível na parede abdominal ("cabeça de medusa" discreta); hepatomegalia de superfície irregular à palpação, com esplenomegalia associada (baço palpável a cerca de 6 cm do rebordo costal). | PELE: sem lesões relevantes no momento; icterícia leve de escleras.',
      labs: [
        { test: 'Exame parasitológico de fezes (método de Kato-Katz)', val: 'Positivo para ovos de Schistosoma mansoni', ref: 'Negativo', alt: true },
        { test: 'Hemograma completo', val: 'Hemoglobina 10,2 g/dL, plaquetas 88.000/mm³, leucócitos com eosinofilia (12%)', ref: 'Hb ≥ 13 g/dL; plaquetas 150.000 – 450.000/mm³; eosinófilos < 5%', alt: true },
        { test: 'Coagulograma (TP/TTPA)', val: 'Tempos discretamente prolongados', ref: 'Normais', alt: true },
        { test: 'Endoscopia digestiva alta (avaliação de varizes esofágicas)', val: 'Presença de varizes esofágicas de médio calibre, sem sangramento ativo no momento', ref: 'Ausência de varizes', alt: true }
      ],
      note: 'O exame parasitológico de fezes (Kato-Katz) é o exame inicial e deve ser solicitado assim que a hipótese for levantada. A ultrassonografia abdominal e a endoscopia digestiva alta são exames complementares para avaliar a gravidade da forma hepatoesplênica e devem ser entregues conforme solicitados, reforçando a necessidade de investigar hipertensão portal.',
      patientProfile: 'Pescador, mora à beira de rio conhecido por transmissão de esquistossomose na região, com contato frequente e prolongado com água doce ao longo de décadas. Refere episódios de diarreia intermitente há anos, que foram se agravando, e notou aumento progressivo do volume da barriga nos últimos meses.',
      script: [
        { trigger: 'Queixa principal', speech: 'Doutor(a), tenho tido diarreia de vez em quando há muito tempo, mas ultimamente minha barriga cresceu bastante e isso está me preocupando.' },
        { trigger: 'Sobre a diarreia', speech: 'Vem e volta, às vezes com um pouco de sangue misturado, há muitos anos, mas nunca dei muita importância.' },
        { trigger: 'Sobre exposição a água', speech: 'Sou pescador, trabalho no rio praticamente todos os dias, desde criança, sempre entrei na água sem proteção.' },
        { trigger: 'Sobre o aumento do abdome', speech: 'Minha barriga foi crescendo aos poucos nos últimos meses, e emagreci o resto do corpo, ficou tudo desproporcional.' },
        { trigger: 'Sobre sintomas associados', speech: 'Sinto bastante cansaço, e às vezes um inchaço nas pernas também.' },
        { trigger: 'Sobre sangramentos', speech: 'Uma vez vomitei um pouco de sangue, mas foi há uns meses, não fui ao médico na hora.' },
        { trigger: 'Pergunta ativa — gravidade', speech: 'Doutor(a), o que é isso na minha barriga? É grave? Tem cura?' }
      ],
      hiddenInfo: 'Teve um episódio de hematêmese (vômito com sangue) há alguns meses, sugestivo de sangramento de varizes esofágicas, que não valorizou adequadamente — só revela espontaneamente de forma vaga, mas confirma detalhes se perguntado diretamente sobre episódios de sangramento digestivo | Vários vizinhos e colegas pescadores da mesma comunidade também têm "barriga d’água", sinal de alta endemicidade local não valorizada pela comunidade — só revela se perguntado sobre casos semelhantes na comunidade | Nunca recebeu tratamento específico para esquistossomose antes, apesar de sintomas há anos, por falta de acesso a diagnóstico adequado — só revela se perguntado sobre tratamentos prévios | Está com medo de ter "um problema no fígado muito grave, tipo câncer" — verbaliza esse medo se o candidato não esclarecer bem o diagnóstico',
      actorBehavior: 'Demonstrar cansaço e fragilidade física (emagrecido, fala mais devagar). Preocupado e um pouco assustado com o aumento do abdome e o episódio de sangramento. Colaborativo ao fornecer informações sobre exposição ocupacional quando perguntado.'
    },

    instC: {
      diagnosis: 'Esquistossomose mansônica, forma hepatoesplênica (fase crônica avançada), com hipertensão portal, varizes esofágicas e hiperesplenismo associado.',
      differentials: [
        'Cirrose hepática de outras etiologias (viral, alcoólica) — entra como causa de hepatoesplenomegalia e hipertensão portal; sai pela confirmação parasitológica positiva para Schistosoma mansoni e pelo contexto epidemiológico de exposição prolongada a águas de rio em área endêmica, tornando a esquistossomose a causa mais provável, embora causas associadas devam sempre ser investigadas.',
        'Doença hepática policística ou tumoral — entra como diferencial de hepatomegalia; sai pelo padrão de hepatomegalia com superfície irregular associada a esplenomegalia e hipertensão portal, mais compatível com fibrose periportal esquistossomótica (fibrose de Symmers) do que com doença focal.',
        'Tuberculose peritoneal — entra como diferencial de ascite crônica; sai pela positividade específica do exame parasitológico de fezes para esquistossomose e pelo contexto epidemiológico claro.',
        'Doença inflamatória intestinal crônica — entra pela diarreia crônica intermitente com sangue; sai pela confirmação parasitológica e pelo quadro sistêmico de hepatoesplenomegalia com hipertensão portal, mais compatível com esquistossomose avançada.'
      ],
      context: 'A esquistossomose mansônica é uma doença parasitária causada pelo Schistosoma mansoni, transmitida pelo contato com água doce contaminada contendo o caramujo hospedeiro intermediário (gênero Biomphalaria), endêmica em diversas regiões do Brasil, especialmente Nordeste e áreas de rios do Sudeste/Norte. A forma crônica hepatoesplênica, resultante de anos de infecção não tratada, decorre da fibrose periportal (fibrose de Symmers) causada pela reação granulomatosa aos ovos do parasita retidos no fígado, levando à hipertensão portal pré-sinusoidal, com preservação relativa da função hepatocelular em fases iniciais.',
      justify: 'O diagnóstico de esquistossomose mansônica forma hepatoesplênica é sustentado pela história de exposição prolongada a águas de rio em área endêmica, diarreia crônica intermitente com sangue, e confirmado pelo exame parasitológico de fezes positivo para ovos de S. mansoni, associado a achados de hipertensão portal (hepatoesplenomegalia, varizes esofágicas, hiperesplenismo com plaquetopenia e eosinofilia), caracterizando a forma avançada da doença que exige tratamento específico e manejo das complicações da hipertensão portal.',
      expectedAnamnesis: 'História detalhada de exposição a águas doces (rios, lagos, açudes) em área endêmica e tempo de exposição | Caracterização da diarreia crônica (presença de sangue, frequência, duração) | Percepção do aumento do volume abdominal e perda de peso | Sintomas de hipertensão portal (episódios de hematêmese/melena) | Casos semelhantes na comunidade | Tratamentos prévios para esquistossomose',
      expectedPhysical: 'Inspeção e percussão abdominal avaliando ascite (macicez móvel) | Palpação cuidadosa avaliando hepatomegalia (características de superfície) e esplenomegalia | Pesquisa de circulação colateral abdominal | Avaliação de icterícia e sinais de hepatopatia crônica | Avaliação de sinais de anemia',
      expectedExams: [
        { exam: 'Exame parasitológico de fezes (Kato-Katz)', justify: 'Exame padrão para diagnóstico e quantificação da carga parasitária', expected: 'Positivo para ovos de S. mansoni' },
        { exam: 'Ultrassonografia abdominal (com protocolo específico para esquistossomose, quando disponível)', justify: 'Avaliar padrão de fibrose periportal e classificar a gravidade do acometimento hepático', expected: 'Fibrose periportal, hepatoesplenomegalia' },
        { exam: 'Endoscopia digestiva alta', justify: 'Rastrear varizes esofágicas, complicação da hipertensão portal com risco de sangramento grave', expected: 'Identificação e classificação das varizes, orientando necessidade de profilaxia' },
        { exam: 'Hemograma completo', justify: 'Avaliar eosinofilia (marcador de infecção parasitária ativa) e hiperesplenismo (plaquetopenia, anemia, leucopenia)', expected: 'Eosinofilia e citopenias associadas ao hiperesplenismo' }
      ],
      expectedConduct: 'Farmacológica: praziquantel em dose única, tratamento específico para todas as formas de esquistossomose, incluindo a forma hepatoesplênica (reduz progressão da fibrose, embora não reverta fibrose já estabelecida); profilaxia de sangramento de varizes esofágicas conforme achado endoscópico (ligadura elástica ou betabloqueador não seletivo, conforme avaliação especializada) | Não farmacológica: encaminhamento para acompanhamento especializado (hepatologia/gastroenterologia) para manejo da hipertensão portal e suas complicações; orientar medidas de prevenção de novos contatos com água contaminada quando possível | Orientações ao paciente: explicar a relação entre a exposição prolongada à água do rio e a doença; esclarecer que o tratamento com praziquantel elimina o parasita, mas a fibrose hepática já instalada requer acompanhamento e manejo específico das complicações (varizes); notificar o caso e orientar rastreio de outros membros da comunidade com exposição semelhante',
      expectedCommunication: 'Explicar de forma acessível a relação entre a exposição ocupacional à água do rio e a doença hepática desenvolvida ao longo dos anos | Esclarecer que existe tratamento específico eficaz contra o parasita, desconstruindo o medo de câncer expresso pelo paciente | Explicar a necessidade de acompanhamento contínuo devido às complicações já instaladas (hipertensão portal) | Abordar a relevância comunitária do achado, dada a possível alta prevalência entre vizinhos/colegas',
      criticalErrors: [
        'Não investigar história de exposição a águas doces em área endêmica diante de sintomas compatíveis',
        'Não solicitar exame parasitológico de fezes diante de suspeita de esquistossomose',
        'Não investigar hipertensão portal (endoscopia para varizes esofágicas) diante de hepatoesplenomegalia e história de hematêmese',
        'Prescrever apenas o tratamento com praziquantel sem encaminhar para manejo especializado das complicações da hipertensão portal já estabelecidas',
        'Não notificar o caso nem considerar a dimensão de saúde pública/comunitária do achado em área endêmica'
      ]
    },

    instD: {
      title: 'Esquistossomose Mansônica — Material de Estudo',
      sections: [
        {
          h: 'Definição e Ciclo de Transmissão',
          items: [
            { item: 'Doença parasitária causada pelo Schistosoma mansoni, transmitida pelo contato com água doce contaminada por cercárias liberadas por caramujos do gênero Biomphalaria; endêmica em diversas regiões do Brasil.', score: 1, ref: 'Ministério da Saúde — Guia de Vigilância em Saúde' }
          ]
        },
        {
          h: 'Formas Clínicas',
          items: [
            { item: 'Fase aguda (febre de Katayama): febre, diarreia, hepatoesplenomegalia dolorosa, eosinofilia, geralmente semanas após exposição intensa. Fase crônica: forma intestinal/hepatointestinal (mais comum) e forma hepatoesplênica (mais grave, com fibrose periportal e hipertensão portal).', score: 2, ref: 'Ministério da Saúde' }
          ]
        },
        {
          h: 'Complicações da Forma Hepatoesplênica',
          items: [
            { item: 'Hipertensão portal pré-sinusoidal por fibrose periportal (fibrose de Symmers), levando a varizes esofágicas (risco de hemorragia digestiva alta grave), esplenomegalia e hiperesplenismo.', score: 2, ref: 'Ministério da Saúde' }
          ]
        },
        {
          h: 'Diagnóstico',
          items: [
            { item: 'Exame parasitológico de fezes (Kato-Katz) é o método padrão; ultrassonografia abdominal avalia o grau de fibrose periportal; endoscopia digestiva alta rastreia varizes esofágicas na forma hepatoesplênica.', score: 2, ref: 'Ministério da Saúde' }
          ]
        },
        {
          h: 'Tratamento e Controle',
          items: [
            { item: 'Praziquantel em dose única é o tratamento específico para todas as formas da doença; manejo especializado é necessário para complicações da hipertensão portal já instaladas.', score: 2, ref: 'Ministério da Saúde' },
            { item: 'Vigilância epidemiológica e educação em saúde sobre exposição a águas contaminadas são pilares do controle em áreas endêmicas.', score: 1, ref: 'Ministério da Saúde' }
          ]
        }
      ]
    }
  }
];

export default infectologia2;
