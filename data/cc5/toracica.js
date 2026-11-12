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
  },

  // CASO 4 — CÂNCER DE PULMÃO
  {
    id: 'CT-4',
    title: 'Tosse persistente e nódulo no pulmão em fumante',
    sub: 'Ambulatório — Cirurgia Torácica',
    tema: 'Cirurgia Torácica',
    topic: 'Câncer de pulmão não pequenas células — estadiamento e ressecabilidade',
    level: 'difícil',
    duracao: '5 minutos',
    cardAccent: '#455A64',
    instA: {
      scenario: 'Ambulatório de cirurgia torácica. Paciente encaminhado pela pneumologia com exames.',
      patient: 'Ademir, 64 anos, sexo masculino, ex-motorista de caminhão.',
      complaint: 'Tosse seca há 3 meses e um episódio de escarro com raias de sangue. A tomografia mostrou uma lesão no pulmão direito.',
      tasks: [
        'Interprete a tomografia e a biópsia entregues e solicite os exames de estadiamento.',
        'Com os resultados do estadiamento, defina o estádio e a ressecabilidade.',
        'Solicite a avaliação de operabilidade e proponha o tratamento.'
      ]
    },
    instB: {
      vitals: { PA: '132/82 mmHg', FC: '80 bpm', FR: '16 irpm', Tax: '36,4 °C', SpO2: '95% em ar ambiente', Peso: '74 kg' },
      physicalGeneral: 'Bom estado geral, corado, eupneico, sem baqueteamento digital. ECOG 0.',
      physicalSeg: 'APARELHO RESPIRATÓRIO: murmúrio vesicular presente bilateralmente, discretamente diminuído em ápice direito, sem ruídos adventícios | PESCOÇO: sem linfonodos supraclaviculares palpáveis | ABDOME: sem hepatomegalia | NEUROLÓGICO: sem déficits',
      labs: [
        { test: 'Biópsia percutânea guiada por TC', val: 'ADENOCARCINOMA de pulmão (TTF-1 positivo); EGFR, ALK e PD-L1 em andamento', ref: '—', alt: true },
        { test: 'PET-CT (entregar se solicitado)', val: 'Captação no nódulo (SUV 9,2); linfonodos mediastinais e hilares SEM captação; sem metástases a distância', ref: '—', alt: true },
        { test: 'RM de crânio (entregar se solicitada)', val: 'Sem lesões', ref: '—', alt: false },
        { test: 'Espirometria (entregar se solicitada)', val: 'VEF1 = 2,4 L (78% do previsto); CVF 84%; VEF1/CVF 0,68', ref: 'VEF1 > 80% prev.', alt: true },
        { test: 'DLCO (entregar se solicitada)', val: '74% do previsto', ref: '> 80%', alt: true }
      ],
      image: 'TC DE TÓRAX COM CONTRASTE (entregar no início): nódulo sólido espiculado de 3,2 cm no lobo superior direito, periférico, sem invasão da parede torácica ou do mediastino; linfonodos mediastinais < 1 cm no menor eixo; enfisema centrolobular leve; sem derrame pleural; cortes do abdome superior sem lesões em fígado e suprarrenais.',
      note: 'Entregar a TC e o resultado da biópsia no início. PET-CT, RM de crânio, espirometria e DLCO SOMENTE se solicitados. Se o candidato pedir mediastinoscopia ou EBUS, informar: “com tumor de 3,2 cm e PET sem captação mediastinal, há indicação de estadiamento invasivo? Justifique” (aceitar EBUS para tumor > 3 cm — ver gabarito). Se o candidato indicar apenas quimioterapia/radioterapia, ANOTAR como erro crítico.',
      patientProfile: 'Ademir, 64 anos, ex-motorista, tabagista 50 maços-ano, parou há 1 ano. Hipertenso controlado. Sobe 3 lances de escada sem parar. Mora com a esposa.',
      script: [
        { trigger: 'Queixa principal', speech: 'Doutor, faz uns três meses que tô com essa tosse que não passa. Uma vez saiu um pouquinho de sangue no catarro e eu me assustei.' },
        { trigger: 'Perda de peso / dor', speech: 'Não emagreci, não sinto dor nos ossos nem dor de cabeça.' },
        { trigger: 'Tolerância ao esforço', speech: 'Subo três andares de escada até a casa da minha filha sem parar. Cansa um pouco, mas vou.' },
        { trigger: 'Tabagismo', speech: 'Fumei dos 15 aos 63 anos, mais de um maço por dia. Parei faz um ano.' },
        { trigger: 'Pergunta ativa', speech: 'É câncer, né? Dá pra operar? Vou ficar com falta de ar depois?' }
      ],
      hiddenInfo: 'Sobe 3 lances de escada sem parar (boa capacidade funcional) — só revela se perguntado sobre esforço físico | Exposição ao amianto na juventude (trabalhou em fábrica de telhas) — só revela se perguntado sobre exposição ocupacional',
      actorBehavior: 'Sereno, mas preocupado; quer saber se “dá pra tirar”. Pergunta sobre a respiração após a cirurgia.'
    },
    instC: {
      diagnosis: 'Adenocarcinoma de pulmão (câncer de pulmão não pequenas células) no lobo superior direito, cT2a (3,2 cm) N0 M0 — estádio IB (TNM 8ª ed.), ressecável, com função pulmonar adequada (VEF1 e DLCO > 60% — operável) — indicação de lobectomia superior direita com linfadenectomia mediastinal sistemática.',
      differentials: [
        'Granuloma infeccioso (tuberculose, histoplasmose) — nódulos geralmente menores, calcificados; a biópsia define adenocarcinoma.',
        'Metástase pulmonar de outro sítio — nódulos múltiplos; TTF-1 positivo indica origem pulmonar.',
        'Carcinoma de pequenas células — central, com linfonodos volumosos e doença disseminada; tratado com QT/RT, não com cirurgia.',
        'Carcinoma espinocelular — mais central e associado a tabagismo; definido pela imuno-histoquímica.'
      ],
      context: 'O câncer de pulmão é a principal causa de morte por câncer no mundo; o tabagismo responde por ~85% dos casos. Apenas ~25% dos pacientes são diagnosticados em estádio cirúrgico. Em estádios I–II, a ressecção anatômica é o tratamento padrão.',
      justify: 'Nódulo espiculado de 3,2 cm (T2a: > 3 e ≤ 4 cm), linfonodos mediastinais sem aumento à TC e sem captação no PET (N0), sem metástases ao PET e à RM de crânio (M0) → IB. Ressecabilidade: lesão periférica sem invasão de estruturas. Operabilidade: VEF1 e DLCO pós-operatórios previstos > 60% (lobectomia superior direita retira ~3 de 19 segmentos funcionais → ppoVEF1 ≈ 66%) e boa capacidade funcional.',
      expectedAnamnesis: 'Sintomas respiratórios (tosse, hemoptise, dispneia) | Sintomas de doença avançada: perda de peso, dor óssea, cefaleia, rouquidão (nervo laríngeo recorrente), síndrome de Horner, síndrome da veia cava superior | Carga tabágica e exposição ocupacional (amianto, radônio) | Capacidade funcional e comorbidades',
      expectedPhysical: 'Linfonodos supraclaviculares | Sinais de doença metastática | Performance status (ECOG)',
      expectedExams: [
        { exam: 'PET-CT', justify: 'Estadiamento mediastinal e a distância em candidatos a tratamento curativo.', expected: 'N0 M0.' },
        { exam: 'RM de crânio', justify: 'Recomendada no estádio II ou mais e considerada a partir do IB (adenocarcinoma).', expected: 'Normal.' },
        { exam: 'Estadiamento mediastinal invasivo (EBUS/mediastinoscopia)', justify: 'Indicado se linfonodos aumentados/captantes, tumor central ou > 3 cm (mesmo com PET negativo, segundo ESTS/ACCP).', expected: 'EBUS negativo, se realizado.' },
        { exam: 'Espirometria e DLCO (± teste de exercício)', justify: 'Avaliar operabilidade: ppoVEF1 e ppoDLCO; se < 60%, teste cardiopulmonar/escada.', expected: 'VEF1 78% e DLCO 74%: operável.' },
        { exam: 'Pesquisa de mutações (EGFR, ALK) e PD-L1', justify: 'Orienta tratamento adjuvante/perioperatório (osimertinibe, imunoterapia).', expected: 'Em andamento.' }
      ],
      expectedConduct: 'LOBECTOMIA superior direita (preferencialmente por videotoracoscopia ou robótica) com linfadenectomia mediastinal sistemática (amostragem/dissecção) | Segmentectomia anatômica é alternativa para tumores periféricos ≤ 2 cm (JCOG0802, CALGB 140503) — não aplicável aqui | Avaliar quimioterapia adjuvante conforme patologia final (indicada a partir de tumores > 4 cm ou N+); osimertinibe adjuvante se EGFR mutado; imunoterapia perioperatória em casos selecionados | Se inoperável por função pulmonar: radioterapia estereotáxica (SBRT) | Manter abstinência do tabagismo; reabilitação pulmonar pré-operatória | Discussão em equipe multidisciplinar',
      expectedCommunication: 'Confirmar o diagnóstico de câncer com empatia (SPIKES) | Explicar que o tumor está em estágio inicial e que a cirurgia tem intenção curativa | Responder sobre a função respiratória após a cirurgia',
      criticalErrors: [
        'Indicar cirurgia sem estadiamento (PET-CT/RM de crânio)',
        'Indicar cirurgia sem avaliação da função pulmonar',
        'Indicar apenas quimioterapia/radioterapia para tumor ressecável em paciente operável',
        'Indicar ressecção não anatômica (cunha) como tratamento padrão em paciente com boa reserva'
      ]
    },
    instD: {
      title: 'CHECKLIST — CÂNCER DE PULMÃO (ESTÁDIO INICIAL)',
      sections: [
        { h: 'ESTADIAMENTO', items: [
          { item: 'Pesquisou sintomas de doença avançada/paraneoplásicos e exposição ocupacional', score: 0.5, ref: 'NCCN Non-Small Cell Lung Cancer, 2024' },
          { item: 'Solicitou PET-CT', score: 1.5, ref: 'NCCN 2024; Diretrizes SBCT/SBOC' },
          { item: 'Solicitou RM de crânio', score: 1, ref: 'NCCN 2024' },
          { item: 'Discutiu estadiamento mediastinal invasivo (EBUS/mediastinoscopia) para tumor > 3 cm', score: 0.5, ref: 'ESTS Guidelines, 2014; ACCP 2013' },
          { item: 'Estadiou como cT2a N0 M0 — IB e definiu como ressecável', score: 1.5, ref: 'IASLC — TNM 8ª edição' }
        ]},
        { h: 'OPERABILIDADE', items: [
          { item: 'Solicitou espirometria e DLCO e interpretou (ppoVEF1/ppoDLCO > 60% = operável)', score: 1.5, ref: 'ACCP Physiologic Evaluation Guidelines, 2013; ERS/ESTS 2009' },
          { item: 'Avaliou capacidade funcional (subir escadas/ECOG)', score: 0.5, ref: 'ACCP 2013' }
        ]},
        { h: 'TRATAMENTO E COMUNICAÇÃO', items: [
          { item: 'Indicou lobectomia superior direita (VATS/robótica) com linfadenectomia mediastinal', score: 2, ref: 'NCCN 2024' },
          { item: 'Citou tratamento adjuvante conforme patologia/mutações (EGFR — osimertinibe)', score: 0.5, ref: 'Wu et al., ADAURA, NEJM 2020' },
          { item: 'Comunicou diagnóstico e intenção curativa com empatia', score: 0.5, ref: 'Protocolo SPIKES' }
        ]}
      ]
    }
  },

  // CASO 5 — HIPERIDROSE PRIMÁRIA
  {
    id: 'CT-5',
    title: 'Suor excessivo nas mãos que atrapalha a vida',
    sub: 'Ambulatório — Cirurgia Torácica',
    tema: 'Cirurgia Torácica',
    topic: 'Hiperidrose primária palmar — indicação de simpatectomia',
    level: 'fácil',
    duracao: '5 minutos',
    cardAccent: '#455A64',
    instA: {
      scenario: 'Ambulatório de cirurgia torácica. Consulta de primeira vez.',
      patient: 'Bianca, 22 anos, sexo feminino, estudante de odontologia.',
      complaint: 'Suor excessivo nas mãos desde a infância, que atrapalha os estudos e o atendimento aos pacientes. Deseja saber sobre a cirurgia.',
      tasks: [
        'Realize anamnese dirigida para diferenciar hiperidrose primária de secundária.',
        'Formule o diagnóstico, citando os critérios.',
        'Proponha o tratamento escalonado e oriente sobre a simpatectomia, incluindo seu principal efeito adverso.'
      ]
    },
    instB: {
      vitals: { PA: '112/70 mmHg', FC: '72 bpm', FR: '14 irpm', Tax: '36,3 °C', Peso: '57 kg', Altura: '1,65 m' },
      physicalGeneral: 'Bom estado geral, eutrófica, sem bócio, sem tremores, sem exoftalmia.',
      physicalSeg: 'MÃOS: palmas úmidas, com gotejamento de suor durante a consulta, bilateral e simétrico; pele fria | AXILAS: sudorese discretamente aumentada | PÉS: úmidos | TIREOIDE: sem nódulos ou aumento | LINFONODOS: sem linfonodomegalias',
      labs: [
        { test: 'TSH', val: '1,6 mUI/L', ref: '0,4–4,0', alt: false },
        { test: 'Glicemia de jejum', val: '84 mg/dL', ref: '< 100', alt: false },
        { test: 'Hemograma', val: 'Normal', ref: '—', alt: false }
      ],
      image: '',
      note: 'Entregar sinais vitais e exame físico no início. Exames laboratoriais somente se solicitados (não são obrigatórios na hiperidrose primária típica, mas o candidato pode pedir TSH/glicemia na dúvida). Avaliar se o candidato orienta sobre a hiperidrose compensatória.',
      patientProfile: 'Bianca, 22 anos, estudante do 4º ano de odontologia. Saudável, sem medicamentos. Pai também “sua muito nas mãos”.',
      script: [
        { trigger: 'Queixa principal', speech: 'Doutor, minhas mãos suam demais, pinga mesmo. Desde criança. Molho a prova, as luvas escorregam no atendimento, tenho vergonha de cumprimentar as pessoas.' },
        { trigger: 'Início e padrão', speech: 'Desde pequena, nas duas mãos igual. Os pés também suam muito.' },
        { trigger: 'Sudorese durante o sono', speech: 'Dormindo não, só acordada. Piora quando fico nervosa ou com calor.' },
        { trigger: 'Sintomas sistêmicos', speech: 'Não tenho febre, não emagreci, não tenho palpitação nem tremor.' },
        { trigger: 'Tratamentos prévios', speech: 'Já usei antitranspirante forte nas mãos, irrita a pele e quase não resolve. Nunca tomei remédio pra isso.' },
        { trigger: 'Pergunta ativa', speech: 'A cirurgia resolve de vez? Tem algum risco? Uma amiga disse que depois começa a suar nas costas...' }
      ],
      hiddenInfo: 'Pai com o mesmo quadro (história familiar positiva) — só revela se perguntada sobre família | Não sua durante o sono — só revela se perguntada',
      actorBehavior: 'Constrangida, esconde as mãos; muito motivada para operar. Quer saber sobre o suor “nas costas”.'
    },
    instC: {
      diagnosis: 'Hiperidrose primária (focal) palmoplantar, de grande impacto na qualidade de vida (HDSS 3–4), refratária a antitranspirante tópico — candidata a tratamento clínico (oxibutinina) e/ou simpatectomia torácica videotoracoscópica.',
      differentials: [
        'Hipertireoidismo — sudorese generalizada, perda de peso, taquicardia, tremor; TSH normal.',
        'Feocromocitoma — crises de sudorese, cefaleia, palpitações e hipertensão paroxística.',
        'Infecções crônicas (tuberculose) e linfomas — sudorese noturna generalizada com febre e perda de peso.',
        'Hiperidrose secundária a medicamentos (antidepressivos), diabetes, menopausa — história não compatível.'
      ],
      context: 'A hiperidrose primária afeta ~2–3% da população, inicia-se na infância/adolescência e decorre de hiperatividade do sistema simpático. Tem grande impacto social e profissional.',
      justify: 'Critérios diagnósticos (sudorese focal visível, excessiva, por > 6 meses, sem causa aparente, com ≥ 2 de): bilateral e simétrica; prejudica atividades diárias; ≥ 1 episódio por semana; início antes dos 25 anos; história familiar positiva; ausência durante o sono. A paciente preenche todos.',
      expectedAnamnesis: 'Idade de início | Localização, bilateralidade e simetria | Sudorese durante o sono (ausente na primária) | História familiar | Sintomas sistêmicos (febre, perda de peso, palpitações, tremor) | Medicamentos | Impacto na qualidade de vida | Tratamentos prévios',
      expectedPhysical: 'Confirmar sudorese palmar | Pesquisar sinais de hipertireoidismo e linfonodomegalias',
      expectedExams: [
        { exam: 'Nenhum exame é obrigatório na hiperidrose primária típica', justify: 'Diagnóstico clínico; TSH/glicemia se houver dúvida ou sinais de causa secundária.', expected: 'Normais.' }
      ],
      expectedConduct: 'Tratamento escalonado: 1) antitranspirante tópico com cloreto de alumínio 15–20% à noite | 2) oxibutinina oral em dose baixa e crescente (2,5 mg/dia até 5 mg 2x/dia) — efeitos: boca seca, constipação; contraindicada em glaucoma de ângulo fechado | 3) iontoforese ou toxina botulínica (efeito temporário de 4–6 meses; dolorosa nas mãos) | 4) Simpatectomia torácica videotoracoscópica bilateral: para palmar, interrupção da cadeia simpática ao nível de R3 (ou R3–R4; R4 para axilar), poupando R2 — alta eficácia (> 95% para mãos) | Riscos a orientar: HIPERIDROSE COMPENSATÓRIA (reflexa) em dorso, abdome e coxas — muito frequente (até 50–80%), geralmente leve, mas pode ser intensa e irreversível; síndrome de Horner (lesão do gânglio estrelado, rara); pneumotórax; dor torácica; os pés podem melhorar apenas parcialmente | Decisão compartilhada após informação adequada',
      expectedCommunication: 'Acolher o constrangimento | Explicar benefícios e riscos da cirurgia com honestidade, em especial a hiperidrose compensatória | Oferecer tratamento clínico antes ou como alternativa',
      criticalErrors: [
        'Não pesquisar causas de hiperidrose secundária (sudorese noturna, sintomas sistêmicos)',
        'Indicar simpatectomia sem orientar sobre hiperidrose compensatória',
        'Indicar simpatectomia ao nível de R2/gânglio estrelado (risco de Horner e compensatória mais intensa)',
        'Não oferecer opções de tratamento clínico'
      ]
    },
    instD: {
      title: 'CHECKLIST — HIPERIDROSE PRIMÁRIA',
      sections: [
        { h: 'ANAMNESE E DIAGNÓSTICO', items: [
          { item: 'Investigou início, localização, bilateralidade e simetria', score: 1, ref: 'Hornberger et al., J Am Acad Dermatol 2004' },
          { item: 'Perguntou sobre sudorese durante o sono e sintomas sistêmicos (afastar causa secundária)', score: 1.5, ref: 'International Hyperhidrosis Society' },
          { item: 'Perguntou história familiar e impacto na qualidade de vida', score: 1, ref: 'Hornberger 2004' },
          { item: 'Diagnosticou hiperidrose primária palmoplantar citando os critérios', score: 1.5, ref: 'Hornberger 2004' }
        ]},
        { h: 'TRATAMENTO', items: [
          { item: 'Propôs tratamento escalonado (tópico → oxibutinina → toxina botulínica/iontoforese)', score: 1.5, ref: 'SBD; Consenso Brasileiro de Hiperidrose' },
          { item: 'Indicou simpatectomia videotoracoscópica bilateral no nível adequado (R3 ou R3–R4 para palmar)', score: 1.5, ref: 'STS Expert Consensus — Cerfolio et al., Ann Thorac Surg 2011' }
        ]},
        { h: 'ORIENTAÇÕES', items: [
          { item: 'Orientou sobre hiperidrose compensatória (frequente e possivelmente permanente)', score: 1.5, ref: 'STS 2011; SBCT' },
          { item: 'Citou outros riscos (Horner, pneumotórax) e fez decisão compartilhada', score: 0.5, ref: 'STS 2011' }
        ]}
      ]
    }
  },

  // CASO 6 — TÓRAX INSTÁVEL
  {
    id: 'CT-6',
    title: 'Motociclista com parte do tórax afundando ao respirar',
    sub: 'Sala de Emergência — Trauma',
    tema: 'Cirurgia Torácica',
    topic: 'Trauma torácico — tórax instável com contusão pulmonar',
    level: 'difícil',
    duracao: '5 minutos',
    cardAccent: '#455A64',
    instA: {
      scenario: 'Sala de emergência de hospital de referência em trauma. Equipe disponível. Paciente trazido pelo SAMU com colar cervical e prancha, recebendo O₂ por máscara.',
      patient: 'Homem de 45 anos, motociclista, colisão frontal contra automóvel a cerca de 60 km/h há 40 minutos.',
      complaint: 'Dor torácica intensa à direita e falta de ar.',
      tasks: [
        'Realize a avaliação primária (ABCDE), verbalizando cada etapa (achados fornecidos conforme solicitação).',
        'Identifique a lesão torácica e a lesão associada que determina o prognóstico.',
        'Descreva o tratamento.'
      ]
    },
    instB: {
      vitals: { PA: '128/80 mmHg', FC: '112 bpm', FR: '32 irpm', SpO2: '89% com O₂ em máscara com reservatório', Glasgow: '15', Tax: '36,2 °C' },
      physicalGeneral: 'Ansioso, taquipneico, respiração superficial por dor, sem cianose central.',
      physicalSeg: 'A — VIA AÉREA: pérvia, fala frases curtas; colar cervical | B — RESPIRAÇÃO: traqueia centralizada; jugulares sem turgência; MOVIMENTO PARADOXAL de segmento da parede torácica lateral direita (afunda na inspiração e abaula na expiração), com crepitação óssea à palpação de arcos costais 4 a 7 à direita; percussão normal (som claro pulmonar), sem timpanismo ou macicez; murmúrio vesicular presente bilateralmente, diminuído em base direita, com estertores crepitantes à direita | C — CIRCULAÇÃO: pulsos cheios, enchimento capilar 2 s; E-FAST sem pneumotórax, sem hemotórax significativo, sem derrame pericárdico, sem líquido livre abdominal | D: Glasgow 15, pupilas isocóricas | E: escoriações em tórax e membros; sem outras lesões evidentes',
      labs: [
        { test: 'Gasometria arterial (O₂ em máscara)', val: 'pH 7,33; PaCO₂ 48 mmHg; PaO₂ 62 mmHg; lactato 2,1', ref: 'pH 7,35–7,45; PaCO₂ 35–45', alt: true },
        { test: 'Hemoglobina', val: '13,2 g/dL', ref: '13–17 g/dL', alt: false }
      ],
      image: 'RADIOGRAFIA DE TÓRAX AP (entregar após a avaliação primária, se solicitada): fraturas de arcos costais 4 a 7 à direita, cada um fraturado em dois pontos (anterior e lateral); opacidade alveolar mal definida em lobo médio e inferior direitos (contusão pulmonar); sem pneumotórax; sem alargamento do mediastino. TC DE TÓRAX (se solicitada, após estabilização): confirma fraturas segmentares de 4 arcos e contusão pulmonar extensa à direita.',
      note: 'Fornecer achados conforme o candidato verbaliza o ABCDE. Se o candidato indicar estabilização com enfaixamento circunferencial ou fixação externa com sacos de areia, ANOTAR como erro crítico. Se o candidato indicar drenagem torácica, perguntar: “qual é a indicação neste momento?” (não há pneumotórax/hemotórax; aceitar apenas se mencionar profilaxia antes de ventilação com pressão positiva em casos selecionados).',
      patientProfile: 'Motociclista de 45 anos, sem comorbidades conhecidas.',
      script: [
        { trigger: 'Ao ser abordado', speech: 'Dói... muito... pra respirar... do lado direito...' },
        { trigger: 'Nome / o que aconteceu', speech: 'Marcos... bati de moto num carro...' },
        { trigger: 'Alergias / medicamentos / doenças', speech: 'Não... nada...' }
      ],
      hiddenInfo: 'Sem informações ocultas — estação de habilidade de atendimento ao trauma.',
      actorBehavior: 'Respira de forma rápida e superficial, protege o lado direito com a mão; piora da dor ao tossir.'
    },
    instC: {
      diagnosis: 'Tórax instável (retalho costal móvel) à direita — fraturas de 4 arcos costais consecutivos em 2 pontos cada (4º–7º) — com contusão pulmonar subjacente e insuficiência respiratória hipoxêmica.',
      differentials: [
        'Fraturas costais simples múltiplas — sem movimento paradoxal (cada arco fraturado em um único ponto).',
        'Pneumotórax hipertensivo/simples — afastado por percussão normal, MV presente e E-FAST.',
        'Hemotórax — afastado por percussão normal e E-FAST.',
        'Ruptura traumática de aorta — mecanismo de desaceleração; investigar se mediastino alargado (ausente).'
      ],
      context: 'O tórax instável ocorre quando ≥ 2 (classicamente ≥ 3) arcos costais adjacentes fraturam em ≥ 2 pontos, criando um segmento sem continuidade com a parede. A hipoxemia decorre principalmente da CONTUSÃO PULMONAR subjacente e da dor, e não do movimento paradoxal em si.',
      justify: 'Trauma de alta energia com movimento paradoxal de segmento da parede torácica, crepitação de múltiplos arcos, radiografia com fraturas segmentares de 4 arcos consecutivos e opacidade alveolar (contusão), associados a hipoxemia e hipercapnia.',
      expectedAnamnesis: 'AMPLA (alergias, medicamentos, passado médico, última refeição, ambiente/mecanismo)',
      expectedPhysical: 'ABCDE sequencial com restrição de coluna | Inspeção da parede torácica (movimento paradoxal) | Palpação de arcos costais | Percussão e ausculta | Jugulares e traqueia | E-FAST',
      expectedExams: [
        { exam: 'E-FAST', justify: 'Afastar pneumotórax, hemotórax, tamponamento e hemoperitônio.', expected: 'Negativo.' },
        { exam: 'Gasometria arterial', justify: 'Avaliar hipoxemia/hipercapnia e necessidade de suporte ventilatório.', expected: 'PaO₂ 62, PaCO₂ 48.' },
        { exam: 'Radiografia de tórax e TC de tórax', justify: 'Confirmar fraturas, contusão e lesões associadas (após estabilização).', expected: 'Fraturas segmentares 4º–7º arcos + contusão.' }
      ],
      expectedConduct: 'O₂ em alto fluxo e monitorização | ANALGESIA ADEQUADA é o pilar: analgesia multimodal, opioide EV, preferencialmente bloqueio regional — analgesia peridural torácica ou bloqueio paravertebral/do eretor da espinha — para permitir respiração profunda e tosse | Suporte ventilatório se hipoxemia persistente: ventilação não invasiva em paciente consciente e cooperativo; intubação orotraqueal e ventilação mecânica se insuficiência respiratória refratária, rebaixamento de consciência ou outras lesões | Hidratação criteriosa (evitar hiper-hidratação — piora a contusão pulmonar), mantendo perfusão adequada | Fisioterapia respiratória e higiene brônquica | Fixação cirúrgica das costelas (osteossíntese) em casos selecionados: falha do desmame da ventilação, instabilidade grave da parede, dor refratária, ou durante toracotomia por outra indicação — reduz tempo de VM e pneumonia | NÃO realizar enfaixamento circunferencial ou fixação com sacos de areia (restringem a ventilação) | Vigilância para pneumotórax tardio (especialmente se VM) e pneumonia',
      expectedCommunication: 'Liderança da equipe, comunicação em alça fechada | Explicar ao paciente os procedimentos',
      criticalErrors: [
        'Não seguir a sequência ABCDE',
        'Não identificar o movimento paradoxal / tórax instável',
        'Indicar enfaixamento circunferencial do tórax ou fixação externa com sacos de areia',
        'Não prover analgesia adequada (incluindo bloqueio regional)',
        'Hiper-hidratação com cristaloide em paciente estável com contusão pulmonar'
      ]
    },
    instD: {
      title: 'CHECKLIST — TÓRAX INSTÁVEL COM CONTUSÃO PULMONAR',
      sections: [
        { h: 'AVALIAÇÃO PRIMÁRIA', items: [
          { item: 'Seguiu ABCDE com restrição cervical, O₂ em alto fluxo e monitorização', score: 1, ref: 'ATLS — 10ª edição, ACS 2018' },
          { item: 'Inspecionou e palpou a parede torácica, identificando movimento paradoxal e crepitação', score: 1.5, ref: 'ATLS 10ª ed.' },
          { item: 'Afastou pneumotórax/hemotórax/tamponamento (percussão, ausculta, jugulares, E-FAST)', score: 1, ref: 'ATLS 10ª ed.' },
          { item: 'Solicitou gasometria arterial e radiografia de tórax', score: 0.5, ref: 'ATLS 10ª ed.' }
        ]},
        { h: 'DIAGNÓSTICO', items: [
          { item: 'Diagnosticou tórax instável (≥ 2 arcos adjacentes fraturados em ≥ 2 pontos)', score: 1.5, ref: 'ATLS 10ª ed.' },
          { item: 'Identificou a contusão pulmonar como principal causa da hipoxemia', score: 1, ref: 'EAST Practice Management Guideline — Pulmonary Contusion and Flail Chest, 2012' }
        ]},
        { h: 'TRATAMENTO', items: [
          { item: 'Analgesia adequada, citando bloqueio regional (peridural/paravertebral)', score: 1.5, ref: 'EAST 2012; EAST Rib Fracture Analgesia, 2016' },
          { item: 'Suporte ventilatório escalonado (VNI → IOT/VM se refratário)', score: 1, ref: 'EAST 2012' },
          { item: 'Hidratação criteriosa e fisioterapia respiratória; contraindicou enfaixamento', score: 0.5, ref: 'EAST 2012; ATLS 10ª ed.' },
          { item: 'Citou fixação cirúrgica de costelas em casos selecionados', score: 0.5, ref: 'EAST Surgical Stabilization of Rib Fractures, 2017' }
        ]}
      ]
    }
  }
];

export default toracica5;
