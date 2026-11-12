// Clínica Cirúrgica — estações de 5 minutos — CIRURGIA TORÁCICA
const toracica5 = [
  // CASO 1 — DERRAME PLEURAL (PARAPNEUMÔNICO COMPLICADO)
  {
    id: 'CT-1',
    title: 'Febre persistente e falta de ar após pneumonia',
    sub: 'Enfermaria — Clínica Médica (interconsulta cirúrgica)',
    tema: 'Cirurgia Torácica',
    topic: 'Derrame pleural parapneumônico complicado',
    level: 'moderado',
    duracao: '5 minutos',
    cardAccent: '#455A64',
    instA: {
      scenario: 'Enfermaria de clínica médica. Você é o residente de cirurgia chamado para interconsulta.',
      patient: 'Antônio, 58 anos, sexo masculino, pedreiro, internado há 5 dias por pneumonia comunitária em uso de ceftriaxona + azitromicina.',
      complaint: 'Mantém febre e piora da dispneia apesar do antibiótico. A radiografia mostra derrame pleural à direita, e a toracocentese diagnóstica já foi realizada.',
      tasks: [
        'Interprete o resultado do líquido pleural aplicando os critérios de Light.',
        'Classifique o derrame e justifique.',
        'Defina a conduta.'
      ]
    },
    instB: {
      vitals: { PA: '118/72 mmHg', FC: '108 bpm', FR: '26 irpm', Tax: '38,6 °C', SpO2: '92% em ar ambiente', Peso: '76 kg' },
      physicalGeneral: 'Regular estado geral, febril, taquipneico, corado, hidratado.',
      physicalSeg: 'APARELHO RESPIRATÓRIO: expansibilidade reduzida à direita; frêmito toracovocal abolido em terço inferior do hemitórax direito; macicez à percussão em base direita (até o 6º EIC na linha axilar média); murmúrio vesicular abolido em base direita | CARDIOVASCULAR: taquicárdico, sem sopros',
      labs: [
        { test: 'Líquido pleural — aspecto', val: 'Turvo, amarelo-citrino, sem odor fétido', ref: 'Límpido', alt: true },
        { test: 'Proteína pleural / sérica', val: '4,5 g/dL / 6,5 g/dL', ref: 'Relação > 0,5 = exsudato', alt: true },
        { test: 'LDH pleural / sérica', val: '1.200 U/L / 300 U/L', ref: 'Relação > 0,6 = exsudato; LSN sérico 250 U/L', alt: true },
        { test: 'pH pleural', val: '7,05', ref: '7,60–7,64', alt: true },
        { test: 'Glicose pleural', val: '35 mg/dL', ref: '≈ glicemia', alt: true },
        { test: 'Citologia', val: '18.000 céls/mm³, 90% neutrófilos', ref: '—', alt: true },
        { test: 'Gram / cultura', val: 'Gram: cocos Gram-positivos raros; cultura em andamento', ref: 'Negativo', alt: true }
      ],
      image: 'Radiografia de tórax PA e perfil: opacidade homogênea em base direita, com apagamento do seio costofrênico e curva de Damoiseau; consolidação em lobo inferior direito. Ultrassonografia de tórax: derrame moderado com finos septos, sem espessamento pleural importante.',
      note: 'Entregar ao candidato, já no início, o resultado do líquido pleural, a radiografia e a ultrassonografia. Exame físico somente se solicitado. Se o candidato perguntar sobre presença de pus franco na punção: “não, o líquido é turvo, não purulento”.',
      patientProfile: 'Antônio, 58 anos, pedreiro, tabagista 30 maços-ano, etilista social. Sem outras comorbidades.',
      script: [
        { trigger: 'Como está se sentindo', speech: 'Doutor, continuo com febre e cada dia tô mais cansado. Dói do lado direito quando respiro fundo.' },
        { trigger: 'Pergunta ativa', speech: 'O antibiótico não tá funcionando? Vai precisar furar de novo?' }
      ],
      hiddenInfo: 'Sem informações ocultas relevantes — estação centrada na interpretação de exames.',
      actorBehavior: 'Paciente cansado, colaborativo, ansioso com a possibilidade de “colocar dreno”.'
    },
    instC: {
      diagnosis: 'Derrame pleural parapneumônico complicado (exsudato com pH < 7,2 e glicose < 60 mg/dL), em evolução para empiema (fase fibrinopurulenta — septações à ultrassonografia), à direita.',
      differentials: [
        'Derrame parapneumônico não complicado — sai: pH < 7,2, glicose < 60 e Gram positivo indicam complicação.',
        'Empiema franco — líquido purulento à punção (não presente); a conduta de drenagem é a mesma.',
        'Derrame neoplásico — exsudato com predomínio linfocitário; pouco provável com neutrofilia e quadro infeccioso agudo.',
        'Tuberculose pleural — exsudato linfocítico com ADA elevada; pouco provável aqui.'
      ],
      context: 'Cerca de 40% das pneumonias bacterianas cursam com derrame. A persistência da febre após 48–72 h de antibiótico adequado deve levar à investigação de derrame complicado/empiema. A drenagem precoce reduz a necessidade de decorticação.',
      justify: 'Critérios de Light (exsudato se ≥ 1): proteína pleural/sérica = 0,69 (> 0,5); LDH pleural/sérica = 4 (> 0,6); LDH pleural 1.200 > 2/3 do LSN sérico (> 167 U/L) → EXSUDATO. pH < 7,2, glicose < 60 mg/dL e Gram com bactérias = derrame parapneumônico COMPLICADO → indicação de drenagem.',
      expectedAnamnesis: 'Tempo de antibiótico e resposta | Persistência da febre, dor pleurítica, dispneia | Comorbidades (etilismo, aspiração)',
      expectedPhysical: 'Síndrome de derrame pleural: redução de expansibilidade, FTV abolido, macicez, MV abolido',
      expectedExams: [
        { exam: 'Análise do líquido pleural (bioquímica, pH, glicose, citologia, Gram e cultura)', justify: 'Diferenciar transudato/exsudato e identificar derrame complicado.', expected: 'Exsudato com pH 7,05 e glicose 35.' },
        { exam: 'Ultrassonografia de tórax', justify: 'Avaliar septações e guiar a drenagem.', expected: 'Septações finas.' },
        { exam: 'Tomografia de tórax com contraste (se falha da drenagem)', justify: 'Avaliar loculações, espessamento pleural (sinal da pleura dividida).', expected: '—' }
      ],
      expectedConduct: 'Drenagem torácica fechada em selo d’água (dreno guiado por imagem; drenos de pequeno calibre 12–14 Fr são aceitáveis), no triângulo de segurança | Manter/ajustar antibiótico com cobertura para anaeróbios (ex.: ceftriaxona + metronidazol ou amoxicilina-clavulanato/ampicilina-sulbactam), por 2–6 semanas guiado pela evolução e cultura | Se loculações/drenagem inadequada: fibrinolítico intrapleural (alteplase + dornase alfa) ou videotoracoscopia (VATS) com desbridamento/decorticação | Fisioterapia respiratória, analgesia, suporte nutricional | Controle radiológico',
      expectedCommunication: 'Explicar ao paciente que há infecção no líquido ao redor do pulmão e que o antibiótico sozinho não resolve | Explicar o procedimento de drenagem e obter consentimento',
      criticalErrors: [
        'Classificar o derrame como transudato',
        'Não indicar drenagem torácica diante de pH < 7,2',
        'Trocar apenas o antibiótico sem drenar o espaço pleural',
        'Suspender o antibiótico após a drenagem'
      ]
    },
    instD: {
      title: 'CHECKLIST — DERRAME PARAPNEUMÔNICO COMPLICADO',
      sections: [
        { h: 'INTERPRETAÇÃO', items: [
          { item: 'Citou os 3 critérios de Light corretamente', score: 1.5, ref: 'Light RW, Ann Intern Med 1972' },
          { item: 'Calculou as relações (proteína 0,69; LDH 4) e concluiu EXSUDATO', score: 2, ref: 'BTS Pleural Disease Guideline, 2023' },
          { item: 'Identificou critérios de complicação: pH < 7,2 e/ou glicose < 60 e/ou Gram/cultura positivos', score: 2, ref: 'BTS 2023; ACCP Consensus' }
        ]},
        { h: 'CONDUTA', items: [
          { item: 'Indicou drenagem torácica fechada (guiada por US)', score: 2, ref: 'BTS 2023' },
          { item: 'Manteve antibiótico com cobertura para anaeróbios', score: 1, ref: 'BTS 2023' },
          { item: 'Citou fibrinolítico intrapleural e/ou VATS se loculação/falha da drenagem', score: 1, ref: 'MIST-2, NEJM 2011; BTS 2023' },
          { item: 'Comunicou o procedimento ao paciente e obteve consentimento', score: 0.5, ref: 'CFM — Código de Ética Médica, 2019' }
        ]}
      ]
    }
  },

  // CASO 2 — TRAUMA TORÁCICO (HEMOTÓRAX MACIÇO)
  {
    id: 'CT-2',
    title: 'Facada no tórax com queda da pressão',
    sub: 'Sala de Emergência — Trauma',
    tema: 'Cirurgia Torácica',
    topic: 'Trauma torácico — hemotórax maciço',
    level: 'difícil',
    duracao: '5 minutos',
    cardAccent: '#455A64',
    instA: {
      scenario: 'Sala de emergência de hospital de referência em trauma. Equipe de enfermagem disponível. Paciente trazido pelo SAMU com colar cervical e prancha.',
      patient: 'Homem de aproximadamente 25 anos, vítima de ferimento por arma branca em hemitórax esquerdo há 30 minutos.',
      complaint: 'Dispneia, dor torácica e sangramento pela ferida.',
      tasks: [
        'Realize o atendimento inicial segundo o ATLS, verbalizando cada etapa (os achados serão fornecidos conforme solicitação).',
        'Identifique a lesão com risco imediato de morte.',
        'Realize/descreva o tratamento imediato e as indicações de cirurgia.'
      ]
    },
    instB: {
      vitals: { PA: '82/50 mmHg', FC: '132 bpm', FR: '30 irpm', SpO2: '88% em ar ambiente', Glasgow: '14 (O3 V5 M6)', Tax: '35,9 °C' },
      physicalGeneral: 'Pálido, sudoreico, ansioso, extremidades frias, enchimento capilar > 3 s.',
      physicalSeg: 'A — VIA AÉREA: pérvia, fala frases curtas | B — RESPIRAÇÃO: traqueia CENTRALIZADA; ferida de 3 cm no 5º espaço intercostal esquerdo, linha axilar anterior, sem ar borbulhando; expansibilidade reduzida à esquerda; MACICEZ à percussão em hemitórax esquerdo; murmúrio vesicular abolido à esquerda; jugulares COLABADAS | C — CIRCULAÇÃO: pulsos periféricos finos; sem sangramento externo ativo importante; FAST: pericárdio sem derrame; sem líquido livre abdominal; E-FAST: derrame volumoso em hemitórax esquerdo | D: Glasgow 14, pupilas isocóricas e fotorreagentes | E: sem outras lesões',
      labs: [
        { test: 'Hemoglobina (gasometria)', val: '9,8 g/dL', ref: '13–17 g/dL', alt: true },
        { test: 'Lactato', val: '5,6 mmol/L', ref: '< 2 mmol/L', alt: true },
        { test: 'Débito inicial do dreno torácico (entregar após drenagem)', val: '1.700 mL de sangue', ref: '—', alt: true }
      ],
      image: '',
      note: 'Fornecer os achados à medida que o candidato verbaliza o exame (ABCDE). Se o candidato fizer punção de alívio no 2º EIC/4º-5º EIC: “sem saída de ar, sem melhora”. Após o candidato realizar/descrever a drenagem torácica, entregar o débito inicial de 1.700 mL. O candidato deve então indicar toracotomia.',
      patientProfile: 'Rapaz de 25 anos, vítima de agressão. Sem comorbidades conhecidas.',
      script: [
        { trigger: 'Ao ser abordado', speech: 'Tá... difícil... respirar... dói muito...' },
        { trigger: 'Nome / o que aconteceu', speech: 'Paulo... me furaram... com faca...' },
        { trigger: 'Alergias / medicamentos', speech: 'Não... nada...' }
      ],
      hiddenInfo: 'Sem informações ocultas — estação de habilidade de atendimento ao trauma.',
      actorBehavior: 'Ansioso, taquipneico, fala palavras entrecortadas. Torna-se mais sonolento se o candidato demorar a agir.'
    },
    instC: {
      diagnosis: 'Hemotórax maciço à esquerda (≥ 1.500 mL à drenagem inicial) com choque hemorrágico classe III, por ferimento penetrante de tórax — indicação de toracotomia de urgência.',
      differentials: [
        'Pneumotórax hipertensivo — entra por choque e MV abolido; sai por MACICEZ (e não timpanismo), traqueia centralizada e jugulares colabadas.',
        'Tamponamento cardíaco — entra por choque em ferimento precordial; sai por FAST sem derrame pericárdico e jugulares colabadas.',
        'Pneumotórax aberto — sai: a ferida não aspira ar.',
        'Lesão abdominal associada (ferimento toracoabdominal) — FAST sem líquido livre; manter vigilância.'
      ],
      context: 'Hemotórax maciço é o acúmulo rápido de > 1.500 mL de sangue (ou > 1/3 da volemia) no tórax, geralmente por lesão de vasos sistêmicos ou hilares em trauma penetrante. É lesão com risco imediato de morte a ser identificada e tratada no “B/C” da avaliação primária.',
      justify: 'Choque + MV abolido + MACICEZ à percussão unilateral + jugulares colabadas = hemotórax maciço. A drenagem inicial de 1.700 mL (≥ 1.500 mL) confirma e indica toracotomia.',
      expectedAnamnesis: 'AMPLA: alergias, medicamentos, passado médico, última refeição, ambiente/mecanismo',
      expectedPhysical: 'ABCDE sequencial com restrição de coluna conforme protocolo | Inspeção, palpação, percussão e ausculta do tórax | Avaliação das jugulares e posição da traqueia | E-FAST',
      expectedExams: [
        { exam: 'E-FAST', justify: 'Avaliação à beira-leito de hemotórax, pneumotórax, pericárdio e abdome — não atrasa a conduta.', expected: 'Hemotórax volumoso esquerdo; pericárdio e abdome sem líquido.' },
        { exam: 'Tipagem sanguínea, prova cruzada, gasometria, lactato, hemoglobina', justify: 'Preparo para transfusão e avaliação da perfusão.', expected: 'Lactato elevado, Hb em queda.' },
        { exam: 'Radiografia de tórax', justify: 'Somente após estabilização/procedimento — NÃO deve atrasar a drenagem no paciente instável.', expected: '—' }
      ],
      expectedConduct: 'O₂ suplementar em alto fluxo (máscara com reservatório 10–15 L/min) | 2 acessos venosos periféricos calibrosos; coleta de exames e tipagem | Ressuscitação hemostática: hemoderivados precoces (concentrado de hemácias, plasma e plaquetas — protocolo de transfusão maciça), cristaloide aquecido limitado (até 1 L) | Ácido tranexâmico 1 g EV em 10 min nas primeiras 3 h + 1 g em 8 h | Drenagem torácica: dreno 28–32 Fr no 5º espaço intercostal, entre as linhas axilares anterior e média (triângulo de segurança), à esquerda, conectado a selo d’água; considerar autotransfusão | Indicação de toracotomia de urgência: drenagem inicial ≥ 1.500 mL, ou > 200 mL/h por 2–4 h, ou necessidade persistente de transfusão/instabilidade | Acionar cirurgião torácico/centro cirúrgico | Curativo da ferida, profilaxia antitetânica e antibiótico profilático conforme protocolo',
      expectedCommunication: 'Liderança da equipe, comunicação em alça fechada | Explicar brevemente ao paciente os procedimentos',
      criticalErrors: [
        'Não seguir a sequência ABCDE (ex.: pedir radiografia antes de estabilizar)',
        'Confundir com pneumotórax hipertensivo e não realizar drenagem torácica',
        'Inserir o dreno fora do triângulo de segurança (ex.: abaixo do 6º EIC / linha hemiclavicular)',
        'Não indicar toracotomia diante de drenagem inicial ≥ 1.500 mL',
        'Ressuscitação com grandes volumes de cristaloide sem hemoderivados'
      ]
    },
    instD: {
      title: 'CHECKLIST — HEMOTÓRAX MACIÇO (ATLS)',
      sections: [
        { h: 'AVALIAÇÃO PRIMÁRIA', items: [
          { item: 'Seguiu ABCDE: via aérea com restrição cervical, O₂ em alto fluxo e monitorização', score: 1, ref: 'ATLS — 10ª edição, ACS 2018' },
          { item: 'Examinou o tórax (inspeção, percussão, ausculta), traqueia e jugulares', score: 1.5, ref: 'ATLS 10ª ed.' },
          { item: 'Obteve 2 acessos calibrosos, coletou tipagem e solicitou E-FAST', score: 1, ref: 'ATLS 10ª ed.' }
        ]},
        { h: 'DIAGNÓSTICO', items: [
          { item: 'Diagnosticou hemotórax maciço com choque hemorrágico', score: 1.5, ref: 'ATLS 10ª ed.' },
          { item: 'Diferenciou de pneumotórax hipertensivo (macicez vs timpanismo, jugulares) e tamponamento', score: 1, ref: 'ATLS 10ª ed.' }
        ]},
        { h: 'TRATAMENTO', items: [
          { item: 'Indicou drenagem torácica (28–32 Fr) no 5º EIC entre linhas axilares anterior e média', score: 1.5, ref: 'ATLS 10ª ed.' },
          { item: 'Iniciou hemoderivados / protocolo de transfusão maciça e ácido tranexâmico', score: 1, ref: 'ATLS 10ª ed.; CRASH-2, Lancet 2010' },
          { item: 'Indicou toracotomia (≥ 1.500 mL inicial ou > 200 mL/h por 2–4 h ou instabilidade)', score: 1.5, ref: 'ATLS 10ª ed.' }
        ]}
      ]
    }
  },

  // CASO 3 — PNEUMOTÓRAX ESPONTÂNEO PRIMÁRIO
  {
    id: 'CT-3',
    title: 'Dor no peito súbita e falta de ar em jovem magro',
    sub: 'PS — Pronto-Socorro',
    tema: 'Cirurgia Torácica',
    topic: 'Pneumotórax espontâneo primário',
    level: 'fácil',
    duracao: '5 minutos',
    cardAccent: '#455A64',
    instA: {
      scenario: 'Pronto-socorro geral, 10h da manhã.',
      patient: 'Lucas, 21 anos, sexo masculino, estudante universitário.',
      complaint: 'Dor súbita no lado direito do peito e falta de ar desde que acordou, há 3 horas.',
      tasks: [
        'Realize anamnese e exame físico dirigidos (achados fornecidos mediante solicitação) e solicite o exame diagnóstico.',
        'Interprete o exame, formule o diagnóstico e classifique o tamanho.',
        'Proponha a conduta e as orientações de alta.'
      ]
    },
    instB: {
      vitals: { PA: '122/76 mmHg', FC: '98 bpm', FR: '22 irpm', Tax: '36,6 °C', SpO2: '94% em ar ambiente', Peso: '62 kg', Altura: '1,86 m', IMC: '17,9 kg/m²' },
      physicalGeneral: 'Bom estado geral, longilíneo, consciente, discretamente taquipneico, sem cianose.',
      physicalSeg: 'APARELHO RESPIRATÓRIO: traqueia centralizada; expansibilidade reduzida à direita; frêmito toracovocal diminuído à direita; HIPERTIMPANISMO à percussão do hemitórax direito; murmúrio vesicular diminuído à direita | CARDIOVASCULAR: ritmo regular, bulhas normofonéticas; jugulares sem turgência',
      labs: [],
      image: 'RADIOGRAFIA DE TÓRAX PA (entregar se solicitada): linha de pleura visceral visível em hemitórax direito, com ausência de trama vascular periférica; distância entre a pleura visceral e a parede torácica de 3,5 cm ao nível do hilo e 5 cm do ápice à cúpula; mediastino centrado; sem derrame; pulmão esquerdo normal.',
      note: 'Entregar sinais vitais no início. Exame físico e radiografia SOMENTE se solicitados. Se o candidato pedir tomografia ou D-dímero como primeiro exame, informar “não disponível no momento — qual exame inicial o senhor solicitaria?”.',
      patientProfile: 'Lucas, 21 anos, estudante de engenharia. Fuma 10 cigarros/dia há 4 anos e usa maconha nos fins de semana. Pratica mergulho recreativo. Sem doenças pulmonares prévias.',
      script: [
        { trigger: 'Queixa principal', speech: 'Acordei com uma pontada forte do lado direito do peito, e agora tô com falta de ar. Piora quando respiro fundo.' },
        { trigger: 'Início', speech: 'Foi de repente, eu tava deitado, não fiz esforço nenhum.' },
        { trigger: 'Episódios prévios', speech: 'Nunca tive isso antes.' },
        { trigger: 'Tabagismo / drogas', speech: 'Fumo uns dez cigarros por dia. E fim de semana às vezes fumo maconha.' },
        { trigger: 'Pergunta ativa — viagem', speech: 'Doutor, eu tenho uma viagem de avião marcada daqui a 5 dias e um mergulho no mês que vem. Posso ir?' }
      ],
      hiddenInfo: 'Pratica mergulho autônomo (com cilindro) — só revela se perguntado sobre atividades/esportes ou na pergunta ativa | Uso de maconha — só revela se perguntado sobre drogas',
      actorBehavior: 'Jovem tranquilo, um pouco assustado com a dor. Insiste em saber sobre a viagem e o mergulho.'
    },
    instC: {
      diagnosis: 'Pneumotórax espontâneo primário à direita, GRANDE (≥ 2 cm ao nível do hilo — BTS; ≥ 3 cm ápice-cúpula — ACCP), sintomático, sem instabilidade (não hipertensivo).',
      differentials: [
        'Pneumotórax hipertensivo — sai: estável hemodinamicamente, traqueia centrada, sem turgência jugular.',
        'Tromboembolismo pulmonar — dor pleurítica e dispneia, mas a radiografia confirma pneumotórax.',
        'Pneumotórax espontâneo secundário — sai: sem doença pulmonar de base (DPOC, fibrose cística, etc.).',
        'Dor musculoesquelética/pericardite — sai pelo exame e radiografia.'
      ],
      context: 'O pneumotórax espontâneo primário ocorre tipicamente em homens jovens, altos e magros, tabagistas (inclusive de maconha), pela ruptura de blebs subpleurais apicais. Recorrência de ~30% após o primeiro episódio.',
      justify: 'Dor pleurítica súbita e dispneia em jovem longilíneo, com hipertimpanismo e MV diminuído unilateral; radiografia mostrando linha pleural visceral sem trama periférica. Tamanho: 3,5 cm no hilo (≥ 2 cm = grande pela BTS).',
      expectedAnamnesis: 'Caráter e início da dor | Dispneia | Episódios prévios | Tabagismo e uso de maconha | Doença pulmonar prévia | Atividades de risco (mergulho, voo)',
      expectedPhysical: 'Avaliar sinais de instabilidade/pneumotórax hipertensivo (traqueia, jugulares, PA) | Percussão (hipertimpanismo) e ausculta (MV diminuído)',
      expectedExams: [
        { exam: 'Radiografia de tórax PA em inspiração', justify: 'Exame inicial para diagnóstico e medida do tamanho.', expected: 'Pneumotórax direito grande.' },
        { exam: 'Tomografia de tórax', justify: 'Não rotineira; útil em dúvida diagnóstica, recorrência ou planejamento cirúrgico.', expected: 'Blebs apicais.' }
      ],
      expectedConduct: 'Paciente estável, sintomático e com pneumotórax grande: oxigênio suplementar e analgesia + evacuação do ar — aspiração por agulha/cateter (16–18 G) OU dreno de pequeno calibre (≤ 14 Fr) / dispositivo ambulatorial com válvula unidirecional (BTS 2023); se sintomas mínimos, o manejo conservador com observação é opção | Radiografia de controle | Indicações de cirurgia (videotoracoscopia com bulectomia + pleurodese): recorrência ipsilateral, primeiro episódio contralateral, pneumotórax bilateral, fístula aérea persistente > 5 dias, hemopneumotórax, profissões de risco (pilotos, mergulhadores) | Orientações: cessar tabagismo (cigarro e maconha) — principal fator modificável de recorrência; NÃO viajar de avião até resolução radiológica completa (em geral aguardar 1–2 semanas após RX normal); mergulho autônomo contraindicado definitivamente, salvo após cirurgia definitiva (pleurectomia bilateral); retornar imediatamente se nova dor/dispneia',
      expectedCommunication: 'Explicar o que é “ar fora do pulmão” | Responder com clareza sobre o voo e o mergulho | Aconselhamento antitabagismo',
      criticalErrors: [
        'Não solicitar radiografia de tórax',
        'Liberar o voo em 5 dias sem confirmação da resolução radiológica',
        'Liberar mergulho autônomo',
        'Indicar toracotomia de urgência ou tratar como pneumotórax hipertensivo em paciente estável',
        'Não orientar cessação do tabagismo'
      ]
    },
    instD: {
      title: 'CHECKLIST — PNEUMOTÓRAX ESPONTÂNEO PRIMÁRIO',
      sections: [
        { h: 'AVALIAÇÃO E DIAGNÓSTICO', items: [
          { item: 'Pesquisou fatores de risco (tabagismo, maconha, episódio prévio, doença pulmonar)', score: 1, ref: 'BTS Pleural Disease Guideline, 2023' },
          { item: 'Avaliou sinais de pneumotórax hipertensivo/instabilidade', score: 1, ref: 'BTS 2023; ATLS 10ª ed.' },
          { item: 'Solicitou radiografia de tórax PA', score: 1, ref: 'BTS 2023' },
          { item: 'Diagnosticou pneumotórax espontâneo primário e classificou como GRANDE (≥ 2 cm no hilo)', score: 2, ref: 'BTS 2023; ACCP Delphi Consensus 2001' }
        ]},
        { h: 'CONDUTA', items: [
          { item: 'Indicou O₂, analgesia e aspiração por agulha ou dreno de pequeno calibre', score: 1.5, ref: 'BTS 2023' },
          { item: 'Citou indicações de videotoracoscopia (recorrência, contralateral, bilateral, fístula > 5 dias, profissões de risco)', score: 1, ref: 'BTS 2023; SBCT' }
        ]},
        { h: 'ORIENTAÇÕES', items: [
          { item: 'Contraindicou voo até resolução radiológica', score: 1, ref: 'BTS Air Travel Recommendations, 2022' },
          { item: 'Contraindicou mergulho autônomo', score: 0.5, ref: 'BTS 2023' },
          { item: 'Orientou cessação do tabagismo (cigarro e maconha) e sinais de retorno', score: 1, ref: 'BTS 2023' }
        ]}
      ]
    }
  }
];

export default toracica5;
