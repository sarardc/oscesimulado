const cardiologia = [

  // CASO 1 — IAM COM SUPRADESNIVELAMENTO DE ST (EMERGÊNCIA)
  {
    id: 1,
    title: 'Dor no peito com irradiação para o braço esquerdo',
    sub: 'PS — Pronto-Socorro',
    tema: 'Cardiologia',
    topic: 'Infarto Agudo do Miocárdio com Supra de ST',
    level: 'difícil',
    cardAccent: '#E91E63',
    instA: {
      scenario: 'Pronto-Socorro de hospital terciário. São 14h de uma segunda-feira. O candidato é o médico plantonista que atende o paciente que chega pela ambulância do SAMU.',
      patient: 'Roberto Alves, 58 anos, masculino, motorista de caminhão, hipertenso e diabético tipo 2.',
      complaint: 'Dor precordial intensa, em aperto, 9/10, irradiando para o braço esquerdo e mandíbula, há 1h30, associada a sudorese fria e náusea.',
      tasks: [
        'Realize a anamnese dirigida ao caso.',
        'Realize o exame físico cardiovascular e geral.',
        'Solicite e interprete os exames complementares pertinentes, incluindo o ECG.',
        'Estabeleça a hipótese diagnóstica principal e formule a conduta imediata.',
        'Discuta o tratamento de reperfusão e oriente a equipe sobre os próximos passos.'
      ]
    },
    instB: {
      vitals: {
        PA: '90/60 mmHg',
        FC: '108 bpm',
        FR: '22 irpm',
        Tax: '36,8 °C',
        SpO2: '94% (ar ambiente)',
        Glasgow: '15'
      },
      physicalGeneral: 'Paciente em REG, pálido (++/4+), diaforético, ansioso, fácies de dor. Acianótico. Sem icterícia.',
      physicalSeg: 'CARDIOVASCULAR: bulhas cardíacas normofonéticas, ritmo regular, FC 108 bpm; sem sopros; pulsos periféricos finos e simétricos; TEC 3s. | RESPIRATÓRIO: murmúrio vesicular presente bilateralmente; crepitações finas em bases (++/4+); FR 22 irpm. | ABDOME: plano, RHA presentes, sem visceromegalias. | MMII: sem edema.',
      labs: [
        { test: 'Troponina I ultrassensível', val: '2,8 ng/mL', ref: '< 0,04 ng/mL', alt: true },
        { test: 'CKMB massa', val: '42 U/L', ref: '< 6 U/L', alt: true },
        { test: 'Glicemia capilar', val: '218 mg/dL', ref: '70–99 mg/dL', alt: true },
        { test: 'Hemograma (Hb)', val: '14,2 g/dL', ref: '13,5–17,5 g/dL', alt: false },
        { test: 'Creatinina', val: '1,1 mg/dL', ref: '0,6–1,2 mg/dL', alt: false },
        { test: 'Potássio', val: '4,2 mEq/L', ref: '3,5–5,0 mEq/L', alt: false }
      ],
      image: 'ECG de 12 derivações: ritmo sinusal, FC 108 bpm. Supradesnivelamento de ST ≥ 2mm em V1, V2, V3, V4 com imagem especular (infradesnivelamento em DIII e aVF). Onda Q incipiente em V2–V3.',
      note: 'Entregar o ECG impresso imediatamente após o candidato solicitar. Entregar os resultados de troponina e CKMB somente se o candidato solicitar exames de marcadores de necrose. O paciente chega já com acesso venoso periférico instalado pelo SAMU.',
      patientProfile: 'Roberto é motorista de longa distância há 25 anos. Tabagista (30 maços/ano, parou há 2 anos). Diabético tipo 2 há 8 anos — usa metformina 850 mg 2x/dia. Hipertenso há 12 anos — usa losartana 50 mg/dia, mas admite irregularidade. Pai faleceu de IAM aos 60 anos. Vida sedentária. Come mal na estrada. Casado, 3 filhos. Nervoso e assustado, mas colabora bem.',
      script: [
        { trigger: 'Queixa principal', speech: 'Doutor, uma dor horrível no peito, parece que uma pedra tá me esmagando. Começou de repente, faz quase duas horas. Tô suando muito e com enjoo.' },
        { trigger: 'Sobre a dor', speech: 'É uma dor em aperto, aqui no meio do peito. Vai pro braço esquerdo e pra mandíbula. Nunca senti isso antes. Tô muito com medo.' },
        { trigger: 'Sobre início e duração', speech: 'Começou enquanto eu tava descendo a rampa do caminhão. Já faz uns… quase duas horas. Fui engolindo, achei que era estômago, mas não passou.' },
        { trigger: 'Sobre antecedentes / doenças', speech: 'Tenho pressão alta e diabetes faz anos. Tomo remédio, mas às vezes esqueço. Meu pai morreu de infarto com 60 anos.' },
        { trigger: 'Sobre fumo e álcool', speech: 'Fumei a vida toda, parei há dois anos. Bebo social, uma cerveja no fim de semana.' },
        { trigger: 'Sobre outros sintomas', speech: 'Sim, tô enjoado e suando gelado desde o começo. Tive um pouco de falta de ar nesses últimos minutos.' },
        { trigger: 'Sobre medicamentos', speech: 'Uso losartana e metformina. Mas confesso que às vezes fico sem tomar quando tô viajando.' },
        { trigger: 'Pergunta ativa — diagnóstico', speech: 'O que eu tô tendo, doutor? É infarto? Vou morrer?' }
      ],
      hiddenInfo: 'Tomou AAS 500mg em casa antes de chamar a ambulância — só revela se candidato perguntar sobre automedicação ou AAS | Refere episódio semelhante mas mais leve há 3 semanas que passou espontaneamente — só revela se candidato perguntar sobre episódios prévios de dor torácica',
      actorBehavior: 'Ansioso e com medo de morrer. Está pálido e suando. Responde às perguntas mas com dificuldade pela dor. Quando o candidato explicar o diagnóstico, demonstra pânico inicial depois de resignação. Colaborativo com exame físico.'
    },
    instC: {
      diagnosis: 'Infarto Agudo do Miocárdio com Supradesnivelamento de ST (IAMCSST) em parede anterior extensa (V1–V4), Killip II, em paciente de alto risco cardiovascular.',
      differentials: [
        'Angina instável — entra pela dor precordial em repouso; sai porque o ECG mostra supra de ST (não apenas infra ou sem alterações) e troponina está francamente elevada',
        'Dissecção de aorta — entra pela dor intensa em repouso em hipertenso; sai porque a dor da dissecção é tipicamente em facada/rasgando, com irradiação dorsal, e o ECG mostraria padrão diferente; pulsos simétricos',
        'Pericardite aguda — entra pela dor precordial com alteração de ST; sai porque o supra na pericardite é côncavo e difuso (não convexo e localizado em território coronariano), sem imagem especular e sem onda Q',
        'TEP maciço — entra pela dispneia e hipotensão; sai porque a dor é pleurítica, o ECG mostra S1Q3T3 e não supra anterior, sem fator de risco coronariano tão expressivo'
      ],
      context: 'O IAMCSST é uma emergência cardiovascular que mata ~300.000 brasileiros/ano. O IAM anterior resulta da oclusão da artéria descendente anterior (DA). Killip II indica sinais leves de congestão (crepitações basais). O tempo porta-balão ≤ 90 min é o principal determinante de mortalidade. Este paciente apresenta o quadro clássico: dor típica, ECG diagnóstico, marcadores elevados, fatores de risco múltiplos (HAS, DM2, tabagismo, história familiar) e hipotensão por disfunção ventricular.',
      justify: 'Supra de ST ≥ 2mm em ≥ 2 derivações contíguas (V1–V4) com imagem especular; troponina I ultrassensível 70× o limite superior; dor precordial típica com irradiação há > 90 min; hipotensão e taquicardia por disfunção ventricular; crepitações basais = Killip II.',
      expectedAnamnesis: 'Caracterização da dor (localização, qualidade, irradiação, intensidade, início, duração) | Fatores de melhora e piora | Sintomas associados (dispneia, náusea, vômito, diaforese, palpitações, síncope) | Antecedentes cardiovasculares (HAS, DM, dislipidemia, DAC prévia, AVC) | Episódios prévios de dor torácica | Medicamentos em uso | Alergias | História familiar cardiovascular | Hábitos (tabagismo, álcool, sedentarismo) | Automedicação (AAS, nitrato)',
      expectedPhysical: 'Avaliação do estado geral e nível de consciência | Ausculta cardíaca (bulhas, sopros, B3/B4) | Ausculta pulmonar (crepitações = congestão) | Avaliação de pulsos periféricos (simetria, amplitude) | Medida de PA nos dois braços | TEC | Avaliação de edema de MMII | Avaliação de jugulares',
      expectedExams: [
        { exam: 'ECG de 12 derivações', justify: 'Exame essencial — deve ser realizado em ≤ 10 min da chegada; diagnóstico de IAMCSST', expected: 'Supra ST ≥ 2mm em V1–V4, imagem especular em parede inferior, onda Q incipiente' },
        { exam: 'Troponina I ou T ultrassensível', justify: 'Marcador de necrose miocárdica — confirma lesão', expected: 'Elevada (2,8 ng/mL = 70× LSN)' },
        { exam: 'CKMB massa', justify: 'Marcador adicional de necrose e estimativa de extensão', expected: 'Elevado' },
        { exam: 'Hemograma + coagulograma', justify: 'Avaliação pré-procedimento e contraindicações a trombolíticos', expected: 'Normal neste caso' },
        { exam: 'Função renal e eletrólitos', justify: 'Avaliação pré-contraste e risco de arritmias', expected: 'Creatinina normal, K 4,2 mEq/L' },
        { exam: 'Radiografia de tórax', justify: 'Avaliação de congestão, cardiomegalia e diagnósticos alternativos', expected: 'Aumento de área cardíaca, redistribuição vascular para ápices' },
        { exam: 'Glicemia', justify: 'DM2 — controle glicêmico no IAM é associado a pior prognóstico', expected: 'Hiperglicemia de estresse (218 mg/dL)' }
      ],
      expectedConduct: 'Farmacológica: AAS 200–300 mg VO (dose de ataque, se não tomou) + Clopidogrel 300–600 mg VO (ataque) ou Ticagrelor 180 mg VO; Heparina não fracionada 60–70 UI/kg IV bolus (máx 5000 UI); Morfina 2–4 mg IV se dor refratária; Nitroglicerina 5–10 mcg/min IV (cuidado com hipotensão); O2 suplementar para SpO2 > 95% | Não farmacológica: Acionar hemodinâmica para angioplastia primária em ≤ 90 min (tempo porta-balão); monitorização contínua (ECG, PA, SpO2, diurese); dois acessos venosos calibrosos; decúbito elevado 30°; jejum | Orientações ao paciente: explicar o diagnóstico de forma clara; informar sobre o procedimento de cateterismo/angioplastia; apoio emocional',
      expectedCommunication: 'Apresentar-se pelo nome e função | Abordar paciente em posição confortável (sentado, inclinado) | Comunicar diagnóstico de forma clara e empática ("O senhor está tendo um infarto") | Explicar os próximos passos (cateterismo) | Tranquilizar sem minimizar a gravidade | Solicitar contato de familiar | Esclarecer dúvidas',
      criticalErrors: [
        'Não realizar ECG nos primeiros 10 minutos de atendimento',
        'Não reconhecer o padrão de IAMCSST no ECG',
        'Não acionar o serviço de hemodinâmica para angioplastia primária (tempo porta-balão)',
        'Administrar nitrato com PA < 90 mmHg (pode precipitar choque)',
        'Não administrar dupla antiagregação (AAS + inibidor de P2Y12)',
        'Posicionar o paciente em decúbito dorsal horizontal sem elevar cabeceira (piora congestão)'
      ]
    },
    instD: {
      title: 'IAM com Supradesnivelamento de ST — Material de Estudo',
      sections: [
        {
          h: 'Definição e Epidemiologia',
          items: [
            { item: 'IAMCSST: oclusão coronariana total aguda com supradesnivelamento persistente de ST em ≥ 2 derivações contíguas (≥ 2 mm em V1–V3; ≥ 1 mm nas demais) ou BRE novo/presumivelmente novo.', score: 2, ref: 'Diretriz Brasileira de IAM — SBC 2023' },
            { item: 'No Brasil, responsável por ~30% dos síndromes coronarianas agudas; mortalidade hospitalar 6–10% com reperfusão adequada, até 30% sem tratamento.', score: 1, ref: 'SBC / Ministério da Saúde' },
            { item: 'Principais fatores de risco: HAS, DM2, tabagismo, dislipidemia, obesidade, história familiar, sedentarismo, sexo masculino, idade > 45 anos (H) ou > 55 anos (M).', score: 1, ref: 'ACC/AHA Guidelines 2023' }
          ]
        },
        {
          h: 'Diagnóstico — ECG e Marcadores',
          items: [
            { item: 'ECG: exame diagnóstico central; deve ser obtido em ≤ 10 min da chegada. IAM anterior: supra em V1–V4 (DA). IAM inferior: supra em DII, DIII, aVF (CD ou Cx). IAM lateral: supra em DI, aVL, V5–V6.', score: 2, ref: 'Diretriz SBC 2023' },
            { item: 'Troponina I ou T ultrassensível: padrão-ouro bioquímico. Eleva-se em 1–3h, pico 12–24h, normaliza em 5–14 dias. Deve ser colhida na admissão e repetida em 1–3h.', score: 2, ref: 'ESC Guidelines 2023' },
            { item: 'CKMB massa: útil para estimar extensão e detectar reinfarto (curva bifásica). Pico em 12–20h.', score: 1, ref: 'Harrison 21ª ed.' }
          ]
        },
        {
          h: 'Estratégia de Reperfusão',
          items: [
            { item: 'Angioplastia primária (ICP primária): tratamento de escolha se disponível em ≤ 120 min do diagnóstico. Tempo porta-balão alvo: ≤ 90 min. Superior à trombolíticos em todos os subgrupos.', score: 2, ref: 'ACC/AHA 2022' },
            { item: 'Trombólise farmacológica: indicada quando ICP não disponível em ≤ 120 min. Alteplase 15 mg IV bolus + 0,75 mg/kg em 30 min + 0,5 mg/kg em 60 min (máx 100 mg total). Janela: ≤ 12h do início dos sintomas.', score: 2, ref: 'Diretriz SBC 2023' },
            { item: 'Contraindicações absolutas à trombólise: AVC hemorrágico prévio, AVC isquêmico < 3 meses, neoplasia SNC, cirurgia ou trauma importante < 3 semanas, sangramento ativo, dissecção de aorta.', score: 2, ref: 'ACC/AHA 2022' }
          ]
        },
        {
          h: 'Tratamento Farmacológico',
          items: [
            { item: 'Dupla antiagregação: AAS 200–300 mg VO (ataque) + Clopidogrel 300–600 mg ou Ticagrelor 180 mg ou Prasugrel 60 mg. Manutenção por 12 meses.', score: 2, ref: 'Diretriz SBC 2023' },
            { item: 'Anticoagulação: Heparina não fracionada 60 UI/kg IV (máx 4000 UI) bolus + infusão; ou enoxaparina 0,5 mg/kg IV bolus (se < 75 anos e sem IRA).', score: 2, ref: 'ESC 2023' },
            { item: 'Morfina: 2–4 mg IV para dor refratária. Atenção: pode reduzir absorção de antiagregantes orais (reservar para dor intensa). | Nitrato: SL ou IV para alívio da dor e congestão; contraindicado se PA sistólica < 90 mmHg ou uso de PDE-5 nas últimas 24–48h.', score: 1, ref: 'ACC/AHA 2022' },
            { item: 'Betabloqueador VO (metoprolol 25–50 mg) nas primeiras 24h se sem contraindicação (FC < 60, broncoespasmo, Killip III/IV, BAV). Reduz mortalidade.', score: 1, ref: 'Diretriz SBC 2023' },
            { item: 'IECA ou BRA: iniciar em 24h, especialmente se FEVE < 40%, HAS, DM ou IC. Estatina de alta intensidade: atorvastatina 40–80 mg.', score: 1, ref: 'ACC/AHA 2022' }
          ]
        },
        {
          h: 'Classificação de Killip e Prognóstico',
          items: [
            { item: 'Killip I: sem IC (mortalidade ~6%). Killip II: B3 ou crepitações < 50% dos campos pulmonares (mortalidade ~17%). Killip III: EAP (mortalidade ~38%). Killip IV: choque cardiogênico (mortalidade ~67–80%).', score: 2, ref: 'Braunwald — Doenças Cardíacas 12ª ed.' },
            { item: 'Preditores de mortalidade: idade avançada, DM, hipotensão, taquicardia, Killip elevado, oclusão de tronco ou DA proximal, atraso na reperfusão.', score: 1, ref: 'Harrison 21ª ed.' }
          ]
        },
        {
          h: 'Complicações Precoces',
          items: [
            { item: 'Arritmias: FV/TV (principais causas de morte nas primeiras horas); BAV (mais comum no IAM inferior — por isquemia do nó AV); ESSV e ESV.', score: 2, ref: 'Braunwald 12ª ed.' },
            { item: 'Mecânicas: ruptura de músculo papilar (IM aguda), comunicação interventricular, ruptura de parede livre (tamponamento). Geralmente em 3–7 dias.', score: 1, ref: 'Harrison 21ª ed.' },
            { item: 'Choque cardiogênico: FEVE muito reduzida, hipotensão refratária, hipoperfusão. Mortalidade > 50%. Requer suporte hemodinâmico (balão intraórtico, ECMO).', score: 2, ref: 'ESC 2023' }
          ]
        }
      ]
    }
  },

  // CASO 2 — EDEMA AGUDO DE PULMÃO / IC DESCOMPENSADA (EMERGÊNCIA)
  {
    id: 2,
    title: 'Falta de ar intensa que acordou durante a noite',
    sub: 'PS — Pronto-Socorro',
    tema: 'Cardiologia',
    topic: 'Insuficiência Cardíaca Aguda Descompensada — Edema Agudo de Pulmão',
    level: 'difícil',
    cardAccent: '#E91E63',
    instA: {
      scenario: 'Pronto-Socorro de hospital geral. 3h da manhã. O candidato é o médico plantonista. A paciente chega sentada na maca, com grande esforço respiratório.',
      patient: 'Joana Ferreira, 72 anos, feminino, aposentada, hipertensa e com IC diagnosticada há 3 anos.',
      complaint: 'Dispneia súbita que a acordou, com sensação de afogamento. Piora ao deitar. Tosse com expectoração rosada.',
      tasks: [
        'Realize a anamnese dirigida ao caso.',
        'Realize o exame físico cardiovascular e respiratório.',
        'Solicite os exames complementares pertinentes.',
        'Formule a hipótese diagnóstica e classifique a gravidade.',
        'Institua o tratamento de emergência imediato e oriente o manejo.'
      ]
    },
    instB: {
      vitals: {
        PA: '180/110 mmHg',
        FC: '118 bpm',
        FR: '32 irpm',
        Tax: '36,9 °C',
        SpO2: '82% (ar ambiente)',
        Peso: '74 kg'
      },
      physicalGeneral: 'Paciente em REG→MEG, sentada, com intensa angústia respiratória, cianose central (+/4+), diaforese profusa. Agitada e com dificuldade de falar frases completas.',
      physicalSeg: 'CARDIOVASCULAR: bulhas cardíacas taquicárdicas, B3 presente (galope), sem sopros; turgência jugular ++/4+ a 45°; PA 180/110 mmHg. | RESPIRATÓRIO: estertores crepitantes bilaterais até 2/3 dos campos pulmonares; roncos difusos; FR 32 irpm; SpO2 82%. | ABDOME: fígado palpável a 4 cm do RCD (hepatomegalia dolorosa). | MMII: edema com cacifo +++/4+ bilateral até joelhos.',
      labs: [
        { test: 'BNP', val: '1.820 pg/mL', ref: '< 100 pg/mL', alt: true },
        { test: 'Troponina I ultrassensível', val: '0,09 ng/mL', ref: '< 0,04 ng/mL', alt: true },
        { test: 'Creatinina', val: '1,8 mg/dL', ref: '0,5–1,1 mg/dL', alt: true },
        { test: 'Sódio', val: '132 mEq/L', ref: '136–145 mEq/L', alt: true },
        { test: 'Potássio', val: '3,1 mEq/L', ref: '3,5–5,0 mEq/L', alt: true },
        { test: 'Hemoglobin', val: '11,2 g/dL', ref: '12,0–16,0 g/dL', alt: true }
      ],
      image: 'ECG: ritmo sinusal, FC 118 bpm, BRE de alto grau (QRS > 120 ms com morfologia típica em V5–V6). Radiografia de tórax: cardiomegalia (ICT 0,62), infiltrado perihilar "em asa de borboleta", linhas B de Kerley.',
      note: 'Entregar ECG e Rx de tórax quando candidato solicitar. A gasometria arterial (se pedida): pH 7,28; pCO2 52 mmHg; pO2 48 mmHg; HCO3 24 mEq/L; SatO2 80% — acidose respiratória. Monitorização já instalada.',
      patientProfile: 'Joana é viúva, mora com a filha. IC com FEVE reduzida (última ecocardiograma: FEVE 28%). Usava carvedilol 12,5 mg 2x/dia, enalapril 10 mg 2x/dia e furosemida 40 mg/dia. A filha conta que ela parou de tomar o diurético há 5 dias por "dor de barriga" e comeu muito sal na festa de aniversário da neta ontem. Claustrofóbica mas aceita máscara de O2.',
      script: [
        { trigger: 'Queixa principal', speech: '(com dificuldade de falar) Doutor… não consigo respirar… parece que estou afogando… por favor…' },
        { trigger: 'Sobre início', speech: '(entre pausas) Acordei às 2h da manhã… com muita falta de ar… precisei sentar na cama… aí fui pro PS…' },
        { trigger: 'Sobre posição', speech: 'Sim, doutor, fico muito pior deitada. Já faz dias que durmo sentada na cadeira.' },
        { trigger: 'Sobre medicamentos', speech: 'Tomo remédio pra pressão e pro coração. Mas… parei o diurético essa semana… tava com dor de barriga.' },
        { trigger: 'Sobre alimentação', speech: 'Ontem foi aniversário da minha neta… comi um pouco mais salgado… bacalhau, frios…' },
        { trigger: 'Sobre tosse', speech: 'Sim, tô tossindo e saindo uma coisa rosada… espumosa… me assusta muito.' },
        { trigger: 'Sobre histórico', speech: 'Já tenho problema no coração há anos. Internei duas vezes por isso. A última foi há 8 meses.' },
        { trigger: 'Pergunta ativa — diagnóstico', speech: 'Minha filha tá me ligando, posso atender? O que tô tendo, é o coração de novo?' }
      ],
      hiddenInfo: 'Tomou captopril SL 25 mg em casa antes de sair — só revela se candidato perguntar sobre automedicação | Tem histórico de hipocalemia grave com furosemida em dose alta — só revela se candidato perguntar sobre histórico de efeitos dos diuréticos',
      actorBehavior: 'Extremamente ansiosa e com medo de morrer. Não consegue falar frases longas pela dispneia. Prefere sentar inclinada para frente. Aceita a máscara de O2 apesar de claustrofobia quando o médico explica com calma. Demonstra alívio gradual conforme tratamento começa a funcionar.'
    },
    instC: {
      diagnosis: 'Edema Agudo de Pulmão (EAP) por Insuficiência Cardíaca Aguda Descompensada, em paciente com IC-FEr prévia (FEVE 28%), precipitado por suspensão de diurético e sobrecarga salina.',
      differentials: [
        'Crise hipertensiva com EAP — entra pela PA 180/110 e dispneia; neste caso é componente do quadro (IC hipertensiva); em IC-FEr a hipertensão é o gatilho que agrava a pós-carga',
        'TEP maciço — entra pela dispneia súbita e hipoxemia; sai porque não há hipotensão, há cardiomegalia, B3 e infiltrado bilateral no Rx; BNP muito elevado fala mais a favor de IC',
        'Pneumonia grave — entra pela dispneia e crepitações; sai porque as crepitações são bilaterais e simétricas (não focais), o Rx mostra padrão perihilar e não consolidação lobar, e há contexto de IC descompensada',
        'DPOC agudizado — entra pela dispneia e gasometria com retenção de CO2; sai porque não há história prévia de DPOC, há B3 e turgência jugular, BNP muito elevado'
      ],
      context: 'A IC descompensada é a principal causa de internação hospitalar em maiores de 65 anos no Brasil. A IC-FEr (FEVE < 40%) tem mortalidade em 5 anos > 50%. Os principais fatores precipitantes de descompensação são: não adesão medicamentosa (principal), dieta hipersódica, infecção (especialmente pneumonia), arritmias (especialmente FA), isquemia miocárdica, HAS não controlada. Neste caso, a combinação de suspensão do diurético + sobrecarga salina precipitou retenção hídrica maciça com EAP.',
      justify: 'BNP 1820 pg/mL (18× o limite); SpO2 82%; crepitações bilaterais até 2/3; B3 (galope de terceira bulha = disfunção ventricular); cardiomegalia e padrão em asa de borboleta no Rx; FEVE 28% conhecida; ortopneia; edema de MMII +++; TJP +++ — todos critérios de Framingham positivos.',
      expectedAnamnesis: 'Caracterização da dispneia (início, piora com decúbito — ortopneia, dispneia paroxística noturna) | Tosse produtiva e características | Sintomas associados (palpitações, dor torácica, síncope) | Fatores precipitantes (adesão a medicamentos, dieta salgada, infecção recente) | Internações prévias por IC | Medicamentos em uso | Peso diário (ganho de peso recente) | Edema de MMII (progressão) | Diurese (oligúria?)',
      expectedPhysical: 'Ausculta pulmonar (crepitações bilaterais — extensão e simetria) | Ausculta cardíaca (B3 = galope; sopros) | Turgência jugular patológica a 45° | Medida de PA | Edema de MMII (cacifo, extensão) | Hepatomegalia (sinal de IVD) | TEC | Avaliação de perfusão periférica',
      expectedExams: [
        { exam: 'BNP ou NT-proBNP', justify: 'Peptídeo natriurético — biomarcador de sobrecarga de pressão/volume cardíaca; confirma IC', expected: 'BNP > 400 pg/mL confirma IC descompensada' },
        { exam: 'ECG', justify: 'Identificar arritmias, isquemia, BRE (indicação de ressincronização)', expected: 'BRE, taquicardia sinusal' },
        { exam: 'Radiografia de tórax', justify: 'Avaliar congestão pulmonar, cardiomegalia, derrames pleurais', expected: 'Asa de borboleta, linhas B de Kerley, cardiomegalia' },
        { exam: 'Gasometria arterial', justify: 'Gravidade da insuficiência respiratória; guia indicação de VNI ou IOT', expected: 'Acidose respiratória, hipoxemia grave' },
        { exam: 'Função renal e eletrólitos', justify: 'Pré-uso de diurético IV; vigilância de hipocalemia (furosemida) e hiponatremia', expected: 'Creatinina 1,8 mg/dL, K 3,1 mEq/L, Na 132 mEq/L' },
        { exam: 'Troponina', justify: 'Isquemia como precipitante ou injúria miocárdica por sobrecarga de pressão', expected: 'Elevação discreta (injúria por estresse de parede)' }
      ],
      expectedConduct: 'Não farmacológica: Posição sentada (Fowler 90°); O2 suplementar para SpO2 > 94%; Ventilação Não Invasiva (VNI — CPAP ou BiPAP) — indicada com SpO2 < 90% ou FR > 25 irpm; reduz intubação; acesso venoso calibroso; sondagem vesical para controle de diurese; monitorização contínua; jejum | Farmacológica: Furosemida 40–80 mg IV (bolus ou infusão contínua) — dose dobrada se já usava VO; Nitroglicerina 10–20 mcg/min IV se PA > 110 mmHg (reduz pré e pós-carga); Morfina: evitar (piora prognóstico na IC descompensada — associada a maior intubação e mortalidade); Reposição de KCl se K < 3,5 mEq/L | Orientações: explicar necessidade de internação, monitorizar diurese > 0,5 mL/kg/h, restrição hídrica 1,5 L/dia',
      expectedCommunication: 'Apresentar-se e abordar com calma a paciente agitada | Posicioná-la adequadamente antes de qualquer outra ação | Explicar cada procedimento (máscara de O2, acesso venoso) para reduzir ansiedade | Comunicar diagnóstico de forma clara: "A sra. está com o coração sobrecarregado, com líquido no pulmão" | Explicar necessidade de internação | Permitir presença da filha se possível',
      criticalErrors: [
        'Posicionar a paciente em decúbito dorsal horizontal (piora congestão e dispneia, pode levar à parada)',
        'Não administrar O2 suplementar com SpO2 de 82%',
        'Não iniciar diurético IV rapidamente (furosemida é o pilar do tratamento)',
        'Administrar morfina na IC descompensada (evidência atual contraindica — piora prognóstico)',
        'Não monitorizar potássio antes de doses altas de furosemida (risco de hipocalemia grave — K já estava baixo)',
        'Administrar SF 0,9% em grande volume (piora a sobrecarga volêmica)'
      ]
    },
    instD: {
      title: 'IC Aguda Descompensada — Edema Agudo de Pulmão — Material de Estudo',
      sections: [
        {
          h: 'Definição e Classificação',
          items: [
            { item: 'IC aguda descompensada: deterioração aguda ou subaguda de sinais e sintomas de IC, necessitando terapia urgente. EAP: forma mais grave — transudação de líquido para o interstício e alvéolos pulmonares por pressão capilar pulmonar elevada.', score: 2, ref: 'ESC Guidelines IC 2021' },
            { item: 'Perfis hemodinâmicos (Stevenson): Quente e Seco (compensado); Quente e Úmido (congestão, sem baixo débito — mais comum); Frio e Seco (baixo débito sem congestão); Frio e Úmido (choque + congestão — pior prognóstico).', score: 2, ref: 'Stevenson LW, JACC 2005' },
            { item: 'IC-FEr: FEVE < 40%. IC-FEm: FEVE 40–49%. IC-FEp: FEVE ≥ 50%. A IC-FEr tem maior evidência de tratamento modificador de mortalidade (IECA/BRA, BB, ARM, SGLT2).', score: 1, ref: 'Diretriz Brasileira IC — SBC 2023' }
          ]
        },
        {
          h: 'Diagnóstico',
          items: [
            { item: 'Critérios de Framingham: 2 maiores ou 1 maior + 2 menores. Maiores: DPN, turgência jugular, crepitações, cardiomegalia, EAP, B3, refluxo hepatojugular, perda de 4,5 kg com tratamento. Menores: edema bilateral MMII, tosse noturna, dispneia aos esforços, hepatomegalia, derrame pleural, capacidade vital 1/3 do previsto, taquicardia > 120 bpm.', score: 2, ref: 'Framingham Heart Study' },
            { item: 'BNP > 400 pg/mL ou NT-proBNP > 1800 pg/mL: confirma IC descompensada (sensibilidade 90%). BNP < 100 pg/mL praticamente exclui IC como causa de dispneia.', score: 2, ref: 'ACC/AHA 2022' }
          ]
        },
        {
          h: 'Tratamento da Fase Aguda',
          items: [
            { item: 'O2 e VNI: CPAP ou BiPAP reduz necessidade de intubação em 40% no EAP. Indicar se SpO2 < 90% em O2 alto fluxo ou FR > 25 irpm. CPAP 5–10 cmH2O é primeira linha no EAP hipertensivo.', score: 2, ref: 'Cochrane Review; ESC 2021' },
            { item: 'Diurético de alça IV: furosemida 40–80 mg IV (bolus) ou infusão contínua 5–10 mg/h. Meta: diurese 3–5 mL/kg/h nas primeiras 6h. Dose EV equivale ao dobro da dose oral em eficácia.', score: 2, ref: 'DOSE Trial; Diretriz SBC 2023' },
            { item: 'Vasodilatadores IV (nitroglicerina, nitroprussiato): indicados no EAP com PA sistólica > 110 mmHg. Reduzem pré e pós-carga rapidamente. Contraindicados se PA < 90 mmHg.', score: 2, ref: 'ESC 2021' },
            { item: 'Morfina: NÃO recomendada rotineiramente na IC descompensada (dados observacionais associam a maior mortalidade, intubação e internação em UTI). Guias atuais sugerem evitar.', score: 2, ref: 'ESC 2021; JAMA 2008' }
          ]
        },
        {
          h: 'Fatores Precipitantes e Prevenção',
          items: [
            { item: 'Principais precipitantes: não adesão a medicamentos (40%), dieta hipersódica, infecções (pneumonia), arritmias (FA), isquemia, HAS, anemia, hipotireoidismo, AINE e outros nefrotóxicos.', score: 2, ref: 'Diretriz SBC 2023' },
            { item: 'Monitorização domiciliar: pesar diariamente em jejum; ganho > 2 kg em 2 dias indica retenção hídrica — aumentar diurético ou acionar serviço de saúde.', score: 1, ref: 'ACC/AHA 2022' }
          ]
        }
      ]
    }
  },

  // CASO 3 — TROMBOEMBOLISMO PULMONAR MACIÇO (EMERGÊNCIA)
  {
    id: 3,
    title: 'Dispneia súbita e desmaio após viagem longa',
    sub: 'PS — Pronto-Socorro',
    tema: 'Cardiologia',
    topic: 'Tromboembolismo Pulmonar Maciço',
    level: 'difícil',
    cardAccent: '#E91E63',
    instA: {
      scenario: 'Pronto-Socorro de hospital universitário. O candidato é o médico residente de plantão. O paciente chega de cadeira de rodas, trazido pela esposa.',
      patient: 'Marcelo Costa, 47 anos, masculino, executivo, voltou de viagem de avião de 14h (São Paulo–Frankfurt) há 6 horas.',
      complaint: 'Dispneia súbita, dor pleurítica no hemitórax direito e episódio de síncope ao tentar levantar do táxi.',
      tasks: [
        'Realize a anamnese dirigida.',
        'Realize o exame físico.',
        'Solicite os exames complementares pertinentes.',
        'Calcule o escore de probabilidade (Wells) e escore de gravidade (PESI).',
        'Formule o diagnóstico e proponha o tratamento adequado conforme estabilidade hemodinâmica.'
      ]
    },
    instB: {
      vitals: {
        PA: '88/58 mmHg',
        FC: '122 bpm',
        FR: '28 irpm',
        Tax: '37,2 °C',
        SpO2: '87% (ar ambiente)',
        Glasgow: '14'
      },
      physicalGeneral: 'Paciente em MEG, taquipneico, pálido, diaforético, com leve confusão mental. Fácies de angústia.',
      physicalSeg: 'CARDIOVASCULAR: bulhas hiperfonéticas, P2 acentuado, B3 de VD; turgência jugular +++/4+; PA 88/58 mmHg. | RESPIRATÓRIO: murmúrio vesicular diminuído em base direita; atrito pleural em base direita; sem crepitações. | MMII: panturrilha direita com edema, dor à palpação e sinal de Homans positivo à direita.',
      labs: [
        { test: 'D-dímero', val: '8.400 ng/mL', ref: '< 500 ng/mL', alt: true },
        { test: 'Troponina I', val: '0,22 ng/mL', ref: '< 0,04 ng/mL', alt: true },
        { test: 'BNP', val: '420 pg/mL', ref: '< 100 pg/mL', alt: true },
        { test: 'Gasometria: pH', val: '7,46', ref: '7,35–7,45', alt: true },
        { test: 'Gasometria: pO2', val: '52 mmHg', ref: '80–100 mmHg', alt: true },
        { test: 'Gasometria: pCO2', val: '28 mmHg', ref: '35–45 mmHg', alt: true }
      ],
      image: 'ECG: taquicardia sinusal 122 bpm. Padrão S1Q3T3 (onda S em DI, onda Q em DIII, inversão de T em DIII). Bloqueio de ramo direito incompleto. Ecocardiograma à beira leito: VD dilatado, septo interventricular em D (sinal do D), insuficiência tricúspide, TAPSE 14 mm. AngioTC de tórax: defeitos de enchimento em artérias pulmonares principais bilaterais.',
      note: 'Entregar ECG imediatamente quando solicitado. Entregar eco e angioTC quando candidato referir necessidade. O exame de eco pode ser simulado como informação verbal pelo aplicador. A angioTC confirma o diagnóstico — liberada como "resultado disponível" se candidato solicitar.',
      patientProfile: 'Marcelo é executivo de empresa multinacional, viaja frequentemente de avião. Sedentário. IMC 29. Sem doenças prévias conhecidas. Não usa anticoagulante. Fumante leve (5 cigarros/dia). Viagem de 14h de avião com pouca hidratação e sem levantar da poltrona. Casado, 2 filhos. Assustado com o episódio de desmaio.',
      script: [
        { trigger: 'Queixa principal', speech: 'Doutor, eu desmaiei quando fui pagar o táxi. Antes disso, já estava com falta de ar e uma dor aqui no lado do peito que piora quando respiro fundo.' },
        { trigger: 'Sobre a viagem', speech: 'Voltei de Frankfurt, foram 14 horas de avião. Fiquei praticamente o tempo todo sentado, não levantei quase nada. Não bebi muita água.' },
        { trigger: 'Sobre a perna', speech: 'Agora que você fala, minha panturrilha direita tá inchada e doendo há uns dois dias. Achei que era de cansaço da viagem.' },
        { trigger: 'Sobre antecedentes', speech: 'Não tenho nenhuma doença. Nunca fui internado. Não tomo nenhum remédio regular.' },
        { trigger: 'Sobre a dor', speech: 'É uma dor em pontada aqui (aponta hemitórax direito). Piora muito quando respiro fundo ou quando tusso. Não irradia.' },
        { trigger: 'Sobre família', speech: 'Meu pai teve trombose na perna uma vez, mas não sei os detalhes.' },
        { trigger: 'Pergunta ativa — diagnóstico', speech: 'É sério doutor? Vou precisar de cirurgia? Tenho reunião importante amanhã...' }
      ],
      hiddenInfo: 'Fez cirurgia laparoscópica há 6 semanas (colecistectomia) — só revela se candidato perguntar sobre cirurgias recentes | A filha usa anticoncepcional oral — não é relevante para este paciente (distrator) | Episódio de trombose venosa superficial há 5 anos — só revela se candidato perguntar sobre histórico de trombose',
      actorBehavior: 'Ansioso mas consegue responder às perguntas. Minimiza os sintomas da perna ("achei que era cansaço"). Fica visivelmente preocupado quando menciona o desmaio. Cooperativo com o exame físico. Levemente confuso pela hipoxemia — respostas às vezes imprecisas.'
    },
    instC: {
      diagnosis: 'Tromboembolismo Pulmonar Maciço (TEP de alto risco) com instabilidade hemodinâmica, disfunção de VD ao ecocardiograma e angioTC confirmatória.',
      differentials: [
        'IAM — entra pela hipotensão e troponina elevada; sai porque a dor é pleurítica (não típica de IAM), o ECG mostra S1Q3T3 sem supra ST, há TVP na perna e contexto de imobilização prolongada',
        'Pneumotórax — entra pela dispneia súbita e dor pleurítica; sai porque o MV está apenas diminuído (não abolido), há sinais de TVP e o Rx/AngioTC não mostra pneumotórax',
        'Pneumonia — entra pela dor pleurítica e dispneia; sai porque o início é agudo após imobilização, sem febre, sem leucocitose, com sinais de TVP, D-dímero altíssimo e padrão de AngioTC',
        'Dissecção de aorta — entra pela hipotensão aguda; sai porque a dor não é em rasgado/irradia para dorso, não há assimetria de pulsos e a AngioTC mostra TEP'
      ],
      context: 'O TEP é a terceira causa de morte cardiovascular no mundo. O TEP maciço (alto risco) = instabilidade hemodinâmica (PA sistólica < 90 mmHg ou queda > 40 mmHg por > 15 min sem outra causa). A tríade clássica (dispneia + dor pleurítica + hemoptise) está presente em apenas 20% dos casos. Os fatores de risco de Virchow são: estase (imobilização, viagem, gravidez), lesão endotelial (cirurgia, trauma) e hipercoagulabilidade. Neste caso: imobilização > 8h + cirurgia recente (2 fatores maiores) + TVP confirmada.',
      justify: 'Instabilidade hemodinâmica (PA 88/58, FC 122) + VD dilatado com sinal do D ao eco + S1Q3T3 no ECG + D-dímero extremamente elevado + déficits de enchimento nas artérias pulmonares principais na AngioTC + TVP em MMII direito + contexto de imobilização prolongada + cirurgia recente.',
      expectedAnamnesis: 'Caracterização da dispneia (início súbito vs gradual) | Dor pleurítica | Hemoptise | Episódio de síncope | Fatores de risco para TEP: imobilização (viagem, acamado), cirurgia/trauma recente, neoplasia, gravidez/puerpério, contraceptivo oral, trombofilia, histórico de TVP/TEP | Sintomas de TVP (edema, dor em panturrilha) | Antecedentes | Medicamentos',
      expectedPhysical: 'Avaliação hemodinâmica (PA, FC, perfusão) | Ausculta pulmonar (MV, atrito pleural) | Ausculta cardíaca (P2, B3 de VD) | Turgência jugular (IVD) | Exame dos MMII (edema, dor à palpação, sinal de Homans — baixa especificidade) | Avaliação de nível de consciência',
      expectedExams: [
        { exam: 'D-dímero', justify: 'Alta sensibilidade — valor negativo exclui TEP em baixa probabilidade; valor positivo inespecífico', expected: 'Muito elevado (8.400 ng/mL)' },
        { exam: 'AngioTC de tórax', justify: 'Padrão-ouro para diagnóstico — sensibilidade 96%, especificidade 98%', expected: 'Defeitos de enchimento em artérias pulmonares principais bilaterais' },
        { exam: 'Ecocardiograma transtorácico', justify: 'Avaliação rápida de disfunção de VD (estratificação de risco e gravidade)', expected: 'VD dilatado, sinal do D, IT, TAPSE reduzido' },
        { exam: 'ECG', justify: 'Rápido, pode mostrar padrão S1Q3T3, sobrecarga de VD, BRD', expected: 'S1Q3T3, BRD incompleto, taquicardia' },
        { exam: 'Gasometria arterial', justify: 'Avaliação de gravidade da hipoxemia', expected: 'Alcalose respiratória, hipoxemia, gradiente A-a aumentado' },
        { exam: 'Troponina e BNP', justify: 'Marcadores de injúria e disfunção de VD — estratificação de risco', expected: 'Troponina e BNP elevados = pior prognóstico' },
        { exam: 'Ecografia compressiva de MMII', justify: 'Confirmar TVP como fonte emboligênica', expected: 'TVP em veia poplítea direita' }
      ],
      expectedConduct: 'Não farmacológica: O2 em alto fluxo (máscara) para SpO2 > 94%; monitorização contínua; dois acessos venosos; cuidado com expansão volêmica excessiva (VD dilatado — sobrecarga piora); IOT se deterioração — mas associada a parada em TEP maciço (vasodilatação pela sedação) | Farmacológica: TROMBÓLISE sistêmica de primeira linha no TEP maciço instável — Alteplase 100 mg IV em 2h (ou 0,6 mg/kg em 15 min se parada); HNF durante e após trombólise | Se trombólise contraindicada: embolectomia cirúrgica ou trombectomia por cateter | Anticoagulação de manutenção: HNF infusão contínua (sem bolus pós-trombólise por 2h) → DOAC (apixabana, rivaroxabana) ou warfarina por 3–6 meses',
      expectedCommunication: 'Apresentar-se | Abordagem rápida pelo estado hemodinâmico | Explicar o diagnóstico de forma clara | Informar sobre necessidade de UTI | Explicar o tratamento e seus riscos (trombólise = risco de sangramento) | Obter consentimento informado para trombólise | Acionar equipe de UTI e cirurgia vascular',
      criticalErrors: [
        'Não reconhecer a instabilidade hemodinâmica e não priorizar o tratamento de reperfusão',
        'Não indicar trombólise no TEP maciço com instabilidade (erro fatal)',
        'Anticoagular com baixo peso molecular em paciente instável (HNF é preferencial no TEP maciço)',
        'Expansão volêmica agressiva com SF (pode causar desvio do septo e colapso de VE)',
        'Não solicitar AngioTC ou eco para confirmar antes de trombólise se estado permitir'
      ]
    },
    instD: {
      title: 'Tromboembolismo Pulmonar — Material de Estudo',
      sections: [
        {
          h: 'Fisiopatologia e Classificação de Risco',
          items: [
            { item: 'TEP resulta da obstrução da circulação pulmonar por trombo (geralmente de TVP de MMII). Leva a: aumento da pós-carga de VD → dilatação e falência de VD → desvio septal → compressão de VE → baixo débito → choque.', score: 2, ref: 'ESC Guidelines TEP 2019' },
            { item: 'Classificação de risco: Alto risco (maciço): instabilidade hemodinâmica. Intermediário-alto: estável + eco/marcadores alterados. Intermediário-baixo: estável + apenas PESI ≥ III. Baixo risco: estável + PESI I–II.', score: 2, ref: 'ESC 2019' }
          ]
        },
        {
          h: 'Diagnóstico — Probabilidade e Exames',
          items: [
            { item: 'Escore de Wells para TEP: TVP clínica (+3); diagnóstico alternativo menos provável (+3); FC > 100 (+1,5); imobilização/cirurgia últimas 4 semanas (+1,5); TEP/TVP prévio (+1,5); hemoptise (+1); câncer (+1). ≤ 4: baixa probabilidade; > 4: alta probabilidade.', score: 2, ref: 'Wells PS et al., Thromb Haemost 2000' },
            { item: 'D-dímero: util só na probabilidade baixa/intermediária. Negativo exclui TEP (sensibilidade 95%). Inútil se probabilidade alta (pede direto AngioTC).', score: 2, ref: 'ESC 2019' },
            { item: 'AngioTC: exame de escolha — sensibilidade 96%, especificidade 98%. Se instável e indo à sala, eco pode ser suficiente para indicar trombólise (VD dilatado + contexto).', score: 2, ref: 'ESC 2019' }
          ]
        },
        {
          h: 'Tratamento',
          items: [
            { item: 'TEP maciço: trombólise sistêmica (Alteplase 100 mg em 2h ou 0,6 mg/kg em 15 min). Contraindicações absolutas: cirurgia < 3 semanas, AVC hemorrágico, sangramento ativo. Em parada cardiorrespiratória por TEP, trombólise durante o MCE.', score: 2, ref: 'ESC 2019' },
            { item: 'TEP intermediário/baixo risco: anticoagulação plena. DOACs (apixabana 10 mg 2x/dia por 7 dias → 5 mg 2x/dia; rivaroxabana 15 mg 2x/dia por 21 dias → 20 mg/dia) são primeira linha.', score: 2, ref: 'Diretriz SBC 2023' },
            { item: 'Duração da anticoagulação: fator de risco transitório (cirurgia, imobilização) = 3 meses. Fator de risco permanente (câncer, trombofilia) ou TEP idiopático = 3–6 meses ou indefinido (avaliar risco-benefício).', score: 1, ref: 'ESC 2019' }
          ]
        }
      ]
    }
  },

  // CASO 4 — TAQUICARDIA SUPRAVENTRICULAR (EMERGÊNCIA)
  {
    id: 4,
    title: 'Palpitações com coração disparado de forma súbita',
    sub: 'UPA — Urgência',
    tema: 'Cardiologia',
    topic: 'Taquicardia Supraventricular — TRNAV',
    level: 'moderado',
    cardAccent: '#E91E63',
    instA: {
      scenario: 'Unidade de Pronto-Atendimento de nível secundário. Tarde de sábado. O candidato é o clínico plantonista.',
      patient: 'Camila Souza, 29 anos, feminino, professora, previamente saudável.',
      complaint: 'Palpitações súbitas em ritmo rápido e regular há 40 minutos, associadas a leve tontura e desconforto no pescoço.',
      tasks: [
        'Realize a anamnese dirigida.',
        'Realize o exame físico.',
        'Solicite o ECG e interprete.',
        'Proponha e execute a conduta inicial (manobra vagal) e, se necessário, a farmacológica.',
        'Discuta o tratamento de longo prazo e oriente a paciente.'
      ]
    },
    instB: {
      vitals: {
        PA: '102/68 mmHg',
        FC: '182 bpm',
        FR: '18 irpm',
        Tax: '36,5 °C',
        SpO2: '98%'
      },
      physicalGeneral: 'Paciente em BEG, ansiosa, corada, hidratada, acianótica. Sem edema. Consciente e orientada.',
      physicalSeg: 'CARDIOVASCULAR: bulhas cardíacas normofonéticas, ritmo regular, FC 182 bpm; sem sopros; sem B3; pulsos periféricos cheios e simétricos; TEC < 2s. | RESPIRATÓRIO: murmúrio vesicular presente bilateralmente; sem crepitações. | ABDOME: plano, RHA presentes, indolor.',
      labs: [
        { test: 'Glicemia capilar', val: '95 mg/dL', ref: '70–99 mg/dL', alt: false },
        { test: 'ECG', val: 'Ver descrição', ref: '—', alt: true }
      ],
      image: 'ECG de 12 derivações: taquicardia regular de complexo estreito (QRS < 120 ms), FC 182 bpm, sem onda P visível antes do QRS (ou onda P retrógrada logo após o QRS — "pseudo-R\'" em V1 e pseudo-S em DII). Ausência de pré-excitação (sem onda delta).',
      note: 'Entregar ECG quando candidato solicitar. Se candidato realizar manobra de Valsalva modificada (decúbito + elevação de MMII ou sopro em seringa), comunicar verbalmente: "A frequência cardíaca reduziu para 68 bpm, ritmo sinusal" — a TSV reverteu. Se o candidato apenas pedir para a paciente fazer força (Valsalva clássico) sem a posição modificada, a manobra não reverte — manter TSV. Só reverte com a técnica correta (decúbito + elevação dos pés por 15–45s) ou com adenosina.',
      patientProfile: 'Camila é professora de ensino fundamental. Não tem doenças prévias. Não usa medicamentos. Episódios semelhantes ocorreram 3 vezes nos últimos 2 anos, sempre com início e término súbitos, cedendo espontaneamente ou após força de evacuação. Consome 4 cafés por dia. Não usa drogas. Não está grávida. Ansiosa com a situação mas tranquiliza com explicação.',
      script: [
        { trigger: 'Queixa principal', speech: 'Doutor, meu coração disparou do nada. Tá batendo super rápido e igual, não para. Já faz uns 40 minutos. Tô tonta e sinto uma pulsação forte no pescoço.' },
        { trigger: 'Sobre início', speech: 'Foi de repente, estava tomando café com amigas. Não fiz nenhum esforço. Já tive isso antes, umas 3 vezes nos últimos 2 anos.' },
        { trigger: 'Sobre episódios anteriores', speech: 'As outras vezes passou sozinho depois de um tempo, uma vez quando fui ao banheiro e fiz força. Mas dessa vez tá durando mais.' },
        { trigger: 'Sobre outros sintomas', speech: 'Tontinha, mas não desmaiei. Não tô com dor no peito. Só esse coração disparado e essa pulsação no pescoço que é desconfortável.' },
        { trigger: 'Sobre antecedentes', speech: 'Sou saudável, não tomo nenhum remédio. Nunca tive nada grave. Fiz eletro faz 2 anos, disseram que era normal.' },
        { trigger: 'Sobre café e estimulantes', speech: 'Tomo bastante café, umas 4 xícaras por dia. Não uso nenhuma droga, não fumo, bebo socialmente.' },
        { trigger: 'Pergunta ativa — diagnóstico', speech: 'Isso é perigoso, doutora? Eu vou precisar tomar remédio pra sempre? É do coração?' }
      ],
      hiddenInfo: 'Toma fluoxetina 20 mg há 1 ano para ansiedade — só revela se candidato perguntar especificamente sobre todos os medicamentos | Episódio desencadeado depois de tomar dois cafés em sequência — só revela se candidato perguntar sobre o que acontecia antes',
      actorBehavior: 'Ansiosa mas colaborativa. Sente o coração acelerado claramente. Quando o médico explica a manobra de Valsalva e ela "reverte", demonstra alívio imediato e gratidão. Se o candidato não explicar a técnica correta, a manobra "falha" e a TSV persiste.'
    },
    instC: {
      diagnosis: 'Taquicardia Supraventricular Paroxística por Taquicardia por Reentrada Nodal AV (TRNAV), forma mais comum de TSV em jovens sem cardiopatia estrutural.',
      differentials: [
        'Flutter atrial — entra pelo taquicardia regular de complexo estreito; sai porque o flutter tem FC tipicamente 150 bpm (2:1), padrão em dente de serra em DII/DIII/aVF, e não reverte com manobra vagal tão abruptamente',
        'Fibrilação atrial com resposta rápida — entra pelo coração acelerado; sai porque o ritmo é IRREGULAR na FA, e o ECG mostra ausência de ondas P com QRS irregulares',
        'Taquicardia sinusal — entra pela FC elevada; sai porque a FC sinusal raramente passa de 150 bpm em repouso, há onda P positiva em DII antes de cada QRS, e não tem início/fim súbito',
        'Síndrome de Wolff-Parkinson-White — entra por ser causa de TSV em jovens; sai porque não há onda delta no ECG em ritmo sinusal; deve ser investigado no seguimento'
      ],
      context: 'A TRNAV é a TSV mais comum, responsável por 60% dos casos. Ocorre por circuito de reentrada envolvendo duas vias no nó AV (via lenta anterógrada e via rápida retrógrada). Afeta mais mulheres jovens sem cardiopatia estrutural. O mecanismo explica o início e término súbitos ("liga e desliga"). A sensação de pulsação no pescoço é característica — contração atrial e ventricular simultânea causa refluxo nas veias jugulares.',
      justify: 'ECG com taquicardia regular de complexo estreito, FC 182 bpm, ausência de onda P antes do QRS (ou pseudo-R\' em V1 = onda P retrógrada); histórico de episódios paroxísticos com início/término abruptos; reversão com manobra vagal; sem cardiopatia conhecida; jovem sem fatores de risco.',
      expectedAnamnesis: 'Caracterização das palpitações (ritmo regular ou irregular, início/término súbito vs gradual) | Duração do episódio atual | Episódios prévios e como cederam | Sintomas associados (tontura, síncope, dor precordial, dispneia) | Pulsação no pescoço (sinal de TRNAV) | Fatores desencadeantes (café, esforço, estresse) | Antecedentes cardíacos | Medicamentos (incluindo estimulantes, simpaticomimética, fluoxetina) | Gestação',
      expectedPhysical: 'Avaliação do estado hemodinâmico (PA, perfusão) | Ausculta cardíaca (ritmo, sopros) | Avaliação de sinais de instabilidade (síncope, hipotensão grave, dor torácica, IC)',
      expectedExams: [
        { exam: 'ECG de 12 derivações', justify: 'Confirma o diagnóstico, afasta pré-excitação (WPW), FA, flutter', expected: 'Taquicardia regular de complexo estreito, pseudo-R\' em V1, FC 182 bpm' },
        { exam: 'Glicemia capilar', justify: 'Excluir hipoglicemia como causa de palpitações/tontura', expected: 'Normal' },
        { exam: 'TSH (em ambulatório)', justify: 'Hipertireoidismo pode precipitar TSV', expected: 'A solicitar em seguimento ambulatorial' }
      ],
      expectedConduct: 'Primeira linha — Manobra de Valsalva modificada: paciente em decúbito dorsal, soprar em seringa de 10 mL por 15s (pressão intratorácica), depois elevar passivamente as pernas a 45° por 45s — taxa de reversão 43% vs 17% da Valsalva clássica | Segunda linha — Adenosina 6 mg IV bolus rápido em veia antecubital + flush de 20 mL SF; se não reverter em 1–2 min, 12 mg IV (repetir uma vez); meia-vida 10s — avisar paciente sobre sensação transitória de opressão/mal-estar | Terceira linha (se refratário) — Verapamil 5 mg IV lento (5 min) ou Diltiazem IV; betabloqueador IV | Se instável hemodinamicamente: cardioversão elétrica sincronizada (50–100 J) | Longo prazo: ablação por cateter (cura em > 95% dos casos); betabloqueador profilático se ablação recusada; reduzir café',
      expectedCommunication: 'Apresentar-se | Tranquilizar a paciente ("não é perigoso, mas precisa de tratamento") | Explicar a manobra de Valsalva modificada passo a passo antes de realizá-la | Alertar sobre a sensação transitória da adenosina se for usá-la ("vai sentir um mal-estar passageiro de poucos segundos") | Discutir opção de ablação no longo prazo | Orientar sobre restrição de cafeína e desencadeantes',
      criticalErrors: [
        'Realizar cardioversão elétrica em paciente hemodinamicamente estável sem tentar manobra vagal ou adenosina primeiro',
        'Administrar verapamil IV em paciente com síndrome de WPW (pode precipitar FA com condução rápida pela via acessória → FV)',
        'Não realizar ECG antes de qualquer tratamento',
        'Não orientar a paciente sobre a técnica correta da manobra de Valsalva modificada'
      ]
    },
    instD: {
      title: 'Taquicardia Supraventricular — Material de Estudo',
      sections: [
        {
          h: 'Mecanismo e Classificação',
          items: [
            { item: 'TSV = taquicardia com origem acima do feixe de His. Complexo QRS estreito (< 120 ms) na maioria. Principais tipos: TRNAV (60%), taquicardia por via acessória/WPW (30%), taquicardia atrial focal (10%).', score: 2, ref: 'ACC/AHA/HRS 2015' },
            { item: 'TRNAV: reentrada no nó AV usando via lenta (anterógrada) e via rápida (retrógrada). Ativa átrios e ventrículos quase simultaneamente → pseudo-R\' em V1, pseudo-S em DII. Início e término abruptos.', score: 2, ref: 'Harrison 21ª ed.' }
          ]
        },
        {
          h: 'Diagnóstico — ECG',
          items: [
            { item: 'ECG na TSV: taquicardia regular de complexo estreito, FC 150–250 bpm. Onda P ausente antes do QRS (TRNAV) ou onda P retrógrada logo após (< 70 ms). Distinguir de flutter (onda em dente de serra, FC 150 bpm 2:1) e FA (irregular, sem onda P).', score: 2, ref: 'Braunwald 12ª ed.' },
            { item: 'ECG em ritmo sinusal: procurar onda delta (intervalo PR curto + alargamento inicial do QRS) = síndrome de WPW — importante porque verapamil é contraindicado.', score: 2, ref: 'ACC/AHA 2015' }
          ]
        },
        {
          h: 'Tratamento',
          items: [
            { item: 'Valsalva modificada: decúbito + elevar pernas a 45° por 45s após sopro em seringa — taxa de reversão 43% (vs 17% clássico). REVERT trial. É a primeira intervenção.', score: 2, ref: 'REVERT trial — Appelboam, Lancet 2015' },
            { item: 'Adenosina 6 mg IV bolus (veia calibrosa + flush); repetir 12 mg × 2. Taxa de reversão > 90%. Meia-vida 10s. Avisar sobre flush, dispneia e mal-estar transitório. Contraindicada em WPW + FA e em asmáticos graves.', score: 2, ref: 'ACC/AHA 2015' },
            { item: 'Ablação por cateter: cura em > 95% dos casos de TRNAV. Tratamento definitivo. Indicado em sintomáticos com recorrências.', score: 1, ref: 'ACC/AHA/HRS 2015' }
          ]
        }
      ]
    }
  },

  // CASO 5 — FIBRILAÇÃO ATRIAL (AMBULATÓRIO)
  {
    id: 5,
    title: 'Batimentos irregulares e cansaço ao subir escadas',
    sub: 'Ambulatório — Cardiologia',
    tema: 'Cardiologia',
    topic: 'Fibrilação Atrial Não Valvar — Novo Diagnóstico',
    level: 'moderado',
    cardAccent: '#E91E63',
    instA: {
      scenario: 'Ambulatório de Cardiologia de hospital universitário. O candidato é o médico residente atendendo em consulta eletiva.',
      patient: 'Antônio Ribeiro, 67 anos, masculino, funcionário público aposentado, hipertenso e com DM2.',
      complaint: 'Palpitações irregulares e fadiga progressiva aos esforços há 3 semanas. Percebe o coração "bagunçado".',
      tasks: [
        'Realize a anamnese completa.',
        'Realize o exame físico cardiovascular.',
        'Solicite os exames complementares pertinentes.',
        'Interprete o ECG e formule o diagnóstico.',
        'Calcule o escore CHA₂DS₂-VASc e decida sobre anticoagulação. Proponha controle de ritmo ou frequência e oriente o paciente.'
      ]
    },
    instB: {
      vitals: {
        PA: '148/94 mmHg',
        FC: '98 bpm (irregular)',
        FR: '16 irpm',
        Tax: '36,4 °C',
        Peso: '86 kg',
        Altura: '1,72 m',
        IMC: '29,1 kg/m²'
      },
      physicalGeneral: 'Paciente em BEG, corado, hidratado, acianótico, anictérico. Sem edema aparente. Eupneico em repouso.',
      physicalSeg: 'CARDIOVASCULAR: bulhas cardíacas hipofonéticas, ritmo irregularmente irregular, FC 98 bpm; sem sopros; sem B3; TEC < 2s; pulsos periféricos irregulares. | RESPIRATÓRIO: murmúrio vesicular presente bilateralmente; sem ruídos adventícios. | ABDOME: plano, RHA presentes, sem hepatomegalia. | MMII: sem edema; sem varizes.',
      labs: [
        { test: 'ECG', val: 'Ver descrição', ref: '—', alt: true },
        { test: 'TSH', val: '0,28 mUI/L', ref: '0,4–4,0 mUI/L', alt: true },
        { test: 'Hemoglobina', val: '13,8 g/dL', ref: '13,5–17,5 g/dL', alt: false },
        { test: 'Creatinina', val: '1,0 mg/dL', ref: '0,6–1,2 mg/dL', alt: false },
        { test: 'Potássio', val: '3,8 mEq/L', ref: '3,5–5,0 mEq/L', alt: false },
        { test: 'HbA1c', val: '7,9%', ref: '< 7%', alt: true }
      ],
      image: 'ECG de 12 derivações: ausência de ondas P; linha de base com oscilações irregulares (ondas f); QRS estreito (100 ms); intervalos RR totalmente irregulares; FC média 98 bpm. Sem sinais de pré-excitação. Eixo elétrico normal.',
      note: 'Entregar ECG quando candidato solicitar. Ecocardiograma (resultado disponível se pedido): AE dilatado (45 mm); FEVE 58% (preservada); hipertrofia leve de VE; ausência de trombos visíveis (eco transtorácico — ETE seria mais sensível). TSH levemente baixo — investigação de hipertireoidismo é pertinente.',
      patientProfile: 'Antônio é aposentado do serviço público. Hipertenso há 15 anos (enalapril 10 mg/dia). DM2 há 8 anos (metformina 1 g 2x/dia + glibenclamida 5 mg/dia). Dislipidemia (sinvastatina 40 mg/dia). Sedentário. Bebe 2 doses de whisky à noite, todos os dias. Ex-fumante (parou há 10 anos). Não tem histórico de AVC, IC ou doença coronariana. Esposa relata ronco intenso (possível SAOS).',
      script: [
        { trigger: 'Queixa principal', speech: 'Doutor, tem umas 3 semanas que tô sentindo o coração bater de forma bagunçada, irregular. E tô me cansando mais do que antes pra subir escada.' },
        { trigger: 'Sobre as palpitações', speech: 'Não é acelerado, é descompassado. Tipo, bate um, pula, bate dois seguidos... irregular mesmo. Às vezes sinto mais, às vezes menos.' },
        { trigger: 'Sobre sintomas associados', speech: 'Cansaço, sim. Às vezes fico um pouco tonto quando levanto rápido. Sem dor no peito, sem desmaio.' },
        { trigger: 'Sobre álcool', speech: 'Bebo sim, todo dia à noite um whisky ou dois. Sempre fui assim. Por que?' },
        { trigger: 'Sobre antecedentes', speech: 'Tenho pressão alta e diabetes. Tomo os remédios direitinho. Colesterol também, tomo sinvastatina.' },
        { trigger: 'Sobre histórico familiar', speech: 'Meu pai teve derrame com 71 anos. Ficou com sequela.' },
        { trigger: 'Sobre sono', speech: 'Minha esposa reclama que ronco muito. Às vezes acordo cansado, mas pensei que fosse só o ronco mesmo.' },
        { trigger: 'Pergunta ativa — diagnóstico', speech: 'Tem cura isso, doutor? Vou precisar de cirurgia? Posso continuar trabalhando na chácara no fim de semana?' }
      ],
      hiddenInfo: 'Teve episódio de fraqueza no braço direito por 30 minutos há 6 meses, que passou sozinho — só revela se candidato perguntar sobre episódios neurológicos ou AVC prévio (= AIT! Muda o escore e a urgência da anticoagulação) | Parou o enalapril por conta própria há 2 meses porque achou que estava controlado — só revela se candidato perguntar sobre adesão a medicamentos',
      actorBehavior: 'Paciente tranquilo e cooperativo. Minimiza o álcool ("é só um whisky"). Fica preocupado quando falam em AVC. Quando perguntado sobre o episódio neurológico, conta com naturalidade, sem perceber a gravidade ("foi só um formigamento no braço, passou sozinho").'
    },
    instC: {
      diagnosis: 'Fibrilação Atrial Não Valvar (FANV) de início indeterminado (> 48h ou desconhecido), com controle de frequência adequado (FC 98 bpm), em paciente com CHA₂DS₂-VASc ≥ 5 e histórico de AIT — indicação absoluta de anticoagulação.',
      differentials: [
        'Extrassístoles supraventriculares frequentes — entra por irregularidade do pulso; sai porque no ECG as extrassístoles têm morfologia de QRS estreito precedido de onda P aberrante, com pausas compensatórias, não há ondas f',
        'Flutter atrial com bloqueio variável — entra por irregularidade; sai porque o flutter tem ondas em dente de serra regulares e bloqueio 2:1, 3:1 ou 4:1 — não é "irregularmente irregular"',
        'Bloqueio AV de 2º grau Wenckebach — entra pela irregularidade; sai porque o ECG do Wenckebach mostra alongamento progressivo do PR seguido de pausa, não ondas f'
      ],
      context: 'A FA é a arritmia sustentada mais comum, afetando 1–2% da população geral e 10% dos maiores de 75 anos. O principal risco da FA é o AVC cardioembólico (risco 5× maior que na população geral). O escore CHA₂DS₂-VASc estratifica o risco: C=IC(1); H=HAS(1); A₂=Idade≥75(2); D=DM(1); S₂=AVC/AIT(2); V=Doença vascular(1); A=Idade 65–74(1); Sc=sexo feminino(1). Neste paciente: HAS(1)+DM(1)+Idade 67(1)+AIT(2) = 5 pontos → anticoagulação imperativa.',
      justify: 'ECG com ausência de ondas P, ondas f irregulares, intervalos RR irregulares = FA. AIT há 6 meses (informação oculta crítica). CHA₂DS₂-VASc = 5. TSH baixo sugere hipertireoidismo subclínico como fator precipitante. HbA1c 7,9% = DM não controlado contribui para substrato arritmogênico.',
      expectedAnamnesis: 'Caracterização das palpitações | Sintomas associados (dispneia, cansaço, síncope, dor precordial) | Tempo de início dos sintomas (< ou > 48h? — crucial para estratégia de cardioversão) | Episódios neurológicos prévios (AIT, AVC — INFORMAÇÃO OCULTA CRÍTICA) | Antecedentes (HAS, IC, DM, doença coronariana, valvulopatia) | Álcool e estimulantes | Sono (SAOS — fator de risco independente para FA) | Medicamentos (adesão, hipotireoidismo medicamentoso) | História familiar de FA ou AVC',
      expectedPhysical: 'Ausculta cardíaca (ritmo irregularmente irregular) | Avaliação de pulso | PA | Avaliação de IC (B3, crepitações, edema) | Sopros (valvulopatia como causa) | Tireoide (nódulo, bócio)',
      expectedExams: [
        { exam: 'ECG de 12 derivações', justify: 'Confirma FA, avalia frequência, pré-excitação, hipertrofia, isquemia', expected: 'Ondas f, intervalos RR irregulares, sem ondas P' },
        { exam: 'TSH', justify: 'Hipertireoidismo é causa reversível de FA — identificá-lo muda o manejo', expected: 'TSH 0,28 = hipertireoidismo subclínico ou inicial' },
        { exam: 'Ecocardiograma transtorácico', justify: 'Avaliar estrutura cardíaca (FEVE, dilatação de AE, valvulopatia), excluir trombos (limitado)', expected: 'AE dilatado, FEVE preservada, sem trombo visível' },
        { exam: 'Hemograma e coagulograma', justify: 'Pré-anticoagulação: excluir anemia e coagulopatia base', expected: 'Normal' },
        { exam: 'Função renal e hepática', justify: 'Escolha e dose do DOAC dependem da função renal (creatinina/CrCl)', expected: 'Normal' }
      ],
      expectedConduct: 'Anticoagulação: CHA₂DS₂-VASc ≥ 2 em homens (ou ≥ 3 em mulheres) → indicação; DOAC preferencial (apixabana 5 mg 2x/dia, rivaroxabana 20 mg/dia, dabigatrana 150 mg 2x/dia); warfarina se prótese valvar metálica ou estenose mitral. NÃO suspender anticoagulação apenas por sangramento nasal/gengivorragia leve | Controle de frequência: Metoprolol succinato 25–50 mg/dia ou Diltiazem 120–240 mg/dia; alvo FC < 80 bpm em repouso | Controle de ritmo (cardioversão): FA < 48h de início OU anticoagulada ≥ 3 semanas → cardioversão elétrica (150–200J bifásico) ou farmacológica (amiodarona) | Tratar fatores precipitantes: investigar hipertireoidismo (T4 livre, T3), reduzir álcool, pesquisar e tratar SAOS | Revisão da HAS (enalapril suspenso — retomar)',
      expectedCommunication: 'Apresentar-se | Explicar o diagnóstico de FA de forma acessível ("o coração está batendo de forma desorganizada") | Explicar o risco de AVC e a importância do anticoagulante | Abordar o episódio de AIT com seriedade | Discutir a redução do álcool (causa importante de FA) | Orientar sobre sinais de alerta (piora da dispneia, dor torácica, sintomas neurológicos) | Marcar retorno precoce',
      criticalErrors: [
        'Não perguntar sobre episódios neurológicos prévios e perder o AIT (CHA₂DS₂-VASc passa de 3 para 5)',
        'Não indicar anticoagulação com CHA₂DS₂-VASc ≥ 2 em homem',
        'Prescrever AAS no lugar de anticoagulante (AAS não previne AVC na FA — é inferior e não substitui DOAC)',
        'Não investigar causas reversíveis de FA (hipertireoidismo, SAOS, álcool)',
        'Cardiovertir FA de duração desconhecida sem anticoagulação prévia por ≥ 3 semanas ou ETE negativo para trombo'
      ]
    },
    instD: {
      title: 'Fibrilação Atrial — Material de Estudo',
      sections: [
        {
          h: 'Definição, Classificação e Epidemiologia',
          items: [
            { item: 'FA: arritmia supraventricular com ativação elétrica atrial caótica e descoordinada. ECG: ausência de ondas P, ondas f (350–600/min), intervalos RR irregulares.', score: 2, ref: 'ESC Guidelines FA 2020' },
            { item: 'Classificação temporal: primeiro episódio (1º diagnóstico); paroxística (auto-termina em ≤ 7 dias); persistente (> 7 dias ou necessita cardioversão); persistente de longa duração (> 12 meses); permanente (decisão de não tentar reversão).', score: 1, ref: 'ESC 2020' }
          ]
        },
        {
          h: 'Estratificação de Risco e Anticoagulação',
          items: [
            { item: 'CHA₂DS₂-VASc: C=IC(1); H=HAS(1); A₂=≥75 anos(2); D=DM(1); S₂=AVC/AIT/TE(2); V=doença vascular(1); A=65–74 anos(1); Sc=feminino(1). Anticoagular se ≥ 2 (H) ou ≥ 3 (M).', score: 2, ref: 'ESC 2020' },
            { item: 'DOACs (anticoagulantes orais diretos) são preferidos ao warfarina na FANV: menor risco de AVC hemorrágico, sem necessidade de monitoramento de INR, interações medicamentosas menores.', score: 2, ref: 'RE-LY, ROCKET-AF, ARISTOTLE trials' },
            { item: 'HAS-BLED: avalia risco de sangramento, mas não contraindica anticoagulação — serve para identificar e corrigir fatores de risco de sangramento (HAS não controlada, álcool, antiagregantes, AINEs).', score: 1, ref: 'ESC 2020' }
          ]
        },
        {
          h: 'Controle de Frequência vs Ritmo',
          items: [
            { item: 'Controle de frequência: betabloqueador (metoprolol, bisoprolol) ou BCCnDHP (diltiazem, verapamil). Alvo FC < 80 bpm em repouso (RACE II). Primeira opção em maioria dos pacientes.', score: 2, ref: 'RACE II trial; ESC 2020' },
            { item: 'Controle de ritmo (cardioversão): benefício em FA recente (< 1 ano), sintomática, jovens. EAST-AFNET 4: controle precoce de ritmo reduz eventos cardiovasculares. Cardioversão elétrica: 150–200J bifásico. Amiodarona é mais eficaz para manter sinusal.', score: 2, ref: 'EAST-AFNET 4, NEJM 2020' }
          ]
        }
      ]
    }
  },


  // CASO 6 — IC CRÔNICA ESTÁVEL COM FEVE REDUZIDA (AMBULATÓRIO)
  {
    id: 6,
    title: 'Cansaço progressivo e pernas inchadas há meses',
    sub: 'Ambulatório — Cardiologia',
    tema: 'Cardiologia',
    topic: 'Insuficiência Cardíaca Crônica com FEVE Reduzida (IC-FEr)',
    level: 'moderado',
    cardAccent: '#E91E63',
    instA: {
      scenario: 'Ambulatório de IC de hospital universitário. O candidato é o médico residente em consulta de retorno de paciente conhecido do serviço.',
      patient: 'Francisco Lima, 64 anos, masculino, pedreiro aposentado, com IC diagnosticada há 2 anos.',
      complaint: 'Piora da dispneia aos médios esforços (antes subia 1 lance, agora sente falta de ar ao se vestir), edema de MMII crescente e ganho de 4 kg em 2 semanas.',
      tasks: [
        'Realize a anamnese dirigida para avaliação da IC.',
        'Realize o exame físico cardiovascular e avaliação de congestão.',
        'Interprete os exames disponíveis e solicite os pertinentes.',
        'Ajuste o tratamento farmacológico baseado na evidência (IECA/BRA, BB, ARM, SGLT2).',
        'Oriente o paciente sobre autocuidado e sinais de alerta para descompensação.'
      ]
    },
    instB: {
      vitals: {
        PA: '118/76 mmHg',
        FC: '74 bpm',
        FR: '18 irpm',
        Tax: '36,6 °C',
        Peso: '82 kg',
        'Peso anterior (há 2 semanas)': '78 kg'
      },
      physicalGeneral: 'Paciente em BEG→REG, corado, com discreta palidez, acianótico. Eupneico em repouso, mas relata dispneia ao deambular até a sala de exame.',
      physicalSeg: 'CARDIOVASCULAR: bulhas normofonéticas, ritmo regular, B3 presente (+/4+); sem sopros; TJP +/4+ a 45°; TEC 2s. | RESPIRATÓRIO: murmúrio vesicular presente, crepitações finas em bases (+/4+). | ABDOME: fígado palpável a 2 cm do RCD (hepatomegalia leve, indolor). | MMII: edema com cacifo ++/4+ bilateral até tornozelos.',
      labs: [
        { test: 'BNP', val: '680 pg/mL', ref: '< 100 pg/mL', alt: true },
        { test: 'Creatinina', val: '1,4 mg/dL', ref: '0,6–1,2 mg/dL', alt: true },
        { test: 'Potássio', val: '4,0 mEq/L', ref: '3,5–5,0 mEq/L', alt: false },
        { test: 'Sódio', val: '136 mEq/L', ref: '136–145 mEq/L', alt: false },
        { test: 'Hemoglobina', val: '11,4 g/dL', ref: '13,5–17,5 g/dL', alt: true }
      ],
      image: 'Ecocardiograma (realizado há 3 semanas): FEVE 28% (gravemente reduzida); cavidades esquerdas dilatadas (DDVE 68 mm); insuficiência mitral moderada funcional; AE 48 mm. Radiografia de tórax: cardiomegalia (ICT 0,58), congestão vascular pulmonar, pequeno derrame pleural à direita.',
      note: 'Entregar ecocardiograma e Rx quando candidato solicitar. Medicação atual do paciente: carvedilol 3,125 mg 2x/dia; enalapril 5 mg 2x/dia; furosemida 40 mg/dia; espironolactona 25 mg/dia. BNP atual 680 (anterior há 3 meses era 320 pg/mL).',
      patientProfile: 'Francisco é pedreiro aposentado por invalidez cardíaca. IC por miocardiopatia isquêmica (IAM em 2022). Hipertenso. Ex-tabagista. Bom suporte familiar (esposa cuida ativamente). Dificuldade de adesão à restrição de sal ("minha esposa tempera bem"). Não monitoriza o peso diariamente. Às vezes esquece a furosemida. Ansioso com a piora mas colaborativo.',
      script: [
        { trigger: 'Queixa principal', speech: 'Doutor, tô piorando. Antes eu conseguia subir um andar de escada, agora quando vou me vestir já fico sem ar. E a perna inchou muito.' },
        { trigger: 'Sobre o edema', speech: 'A perna foi inchando nos últimos 15 dias. Minha esposa pesou e engordei 4 quilos, mas não comi mais do que de costume.' },
        { trigger: 'Sobre o sono', speech: 'Tô dormindo mal, preciso de 3 travesseiros pra não sentir falta de ar. Às vezes acordo à noite com falta de ar.' },
        { trigger: 'Sobre medicamentos', speech: 'Tomo quase tudo, mas às vezes esqueço o diurético no fim de semana. E minha esposa caprichou no bacalhau no final de semana passado.' },
        { trigger: 'Sobre sal', speech: 'É difícil cortar o sal, doutor. A comida fica sem graça. Tento mas não consigo muito.' },
        { trigger: 'Sobre o peso diário', speech: 'Não me peso todo dia, não. Pego a balança quando parece que tô inchando.' },
        { trigger: 'Pergunta ativa — diagnóstico', speech: 'Vai precisar me internar de novo? Tô com medo. Da última vez fiquei 10 dias internado.' }
      ],
      hiddenInfo: 'Usou AINE (ibuprofeno) para dor lombar há 3 semanas — só revela se candidato perguntar sobre dor e automedicação (AINEs retêm sódio e agravam IC) | A filha pagou um plano privado e ele fez consulta com outro médico que mudou o carvedilol para atenolol — só revela se candidato perguntar sobre todos os medicamentos atuais',
      actorBehavior: 'Cooperativo e resignado. Envergonhado por não seguir a dieta. Muito preocupado com internação. Esposa (presente) tende a responder no lugar dele — candidato deve incluir a esposa na orientação sobre dieta e peso diário.'
    },
    instC: {
      diagnosis: 'Insuficiência Cardíaca Crônica com FEVE Reduzida (IC-FEr, FEVE 28%) em descompensação leve-moderada (Killip II ambulatorial), precipitada por não adesão à dieta hipossódica, uso de AINE e esquecimento do diurético.',
      differentials: [
        'Síndrome nefrótica — entra pelo edema e ganho de peso; sai porque há sinais claros de IC (B3, congestão pulmonar, TJP, BNP elevado, cardiomegalia) e sem proteinúria/hipoalbuminemia mencionada',
        'Cor pulmonale / DPOC descompensado — entra pelo edema e dispneia; sai porque não há história de DPOC, o eco mostra disfunção de VE como causa primária, sem hiperinsuflação no Rx'
      ],
      context: 'A IC-FEr (FEVE < 40%) tem mortalidade em 5 anos de 50–70%. O tratamento farmacológico modificador de mortalidade baseia-se em 4 pilares: IECA/ARNI + betabloqueador + antagonista de aldosterona + SGLT2. A otimização progressiva dessas classes ("titulação") é essencial. O uso de AINEs é uma das principais causas de descompensação ambulatorial — retêm sódio e água e antagonizam o efeito dos diuréticos.',
      justify: 'BNP 680 (>2× o valor anterior de 3 meses atrás); ganho de 4 kg em 2 semanas; edema de MMII ++; crepitações basais; B3; TJP +; FEVE 28% ao eco; contexto de não adesão (sal + AINE + esquecimento de furosemida).',
      expectedAnamnesis: 'Capacidade funcional atual vs prévia (classes NYHA) | Ortopneia (quantos travesseiros) | Dispneia paroxística noturna | Edema de MMII (progressão) | Peso diário (registro) | Diurese (oligúria?) | Fatores precipitantes: sal, medicamentos, infecção, arritmia, AINE | Adesão a medicamentos | Atividade física | Internações prévias por IC',
      expectedPhysical: 'Ausculta cardíaca (B3 = galope, sopros, ritmo) | Turgência jugular | Ausculta pulmonar (crepitações) | Hepatomegalia | Edema de MMII (grau e extensão) | PA | FC | Peso atual vs anterior',
      expectedExams: [
        { exam: 'BNP ou NT-proBNP', justify: 'Monitorização da descompensação e resposta ao tratamento', expected: 'BNP 680 = elevado, piora vs consulta anterior' },
        { exam: 'Função renal e eletrólitos', justify: 'Antes de ajustar diurético e avaliar clearance para DOAC/SGLT2', expected: 'Creatinina 1,4 (leve piora — provavelmente pelo AINE)' },
        { exam: 'Ecocardiograma', justify: 'Avaliação da FEVE, valvulopatias, monitorização da função', expected: 'FEVE 28%, IC mitral funcional' },
        { exam: 'Hemograma', justify: 'Anemia agrava IC — hemoglobina 11,4 g/dL = anemia leve', expected: 'Anemia leve — investigar e tratar' }
      ],
      expectedConduct: 'Farmacológica: Aumentar furosemida para 80 mg/dia VO temporariamente (reduzir congestão); trocar enalapril por sacubitril/valsartana (ARNI) se tolerado — reduz mortalidade 20% vs IECA (PARADIGM-HF); manter espironolactona 25 mg; titulação do betabloqueador após descongestionar (carvedilol — manter ou aumentar gradualmente); adicionar SGLT2i (dapagliflozina 10 mg ou empagliflozina 10 mg) — reduz hospitalização e mortalidade (DAPA-HF, EMPEROR); tratar anemia (investigar ferropenia — déficit de ferro é comum na IC: repor com ferro IV se ferritina < 100 ou SF < 20% com ferritina 100–300); suspender AINE | Não farmacológica: Restrição de sódio < 2 g/dia; peso diário (aumentar furosemida se ganho > 2 kg em 2 dias); restrição hídrica 1,5 L/dia se hiponatremia; atividade física supervisionada (reabilitação cardíaca) | Orientações: explicar plano de autocuidado, incluir esposa na orientação de dieta; agenda de retorno em 2 semanas',
      expectedCommunication: 'Apresentar-se | Incluir a esposa na consulta ativamente | Explicar a relação entre sal e retenção de líquido de forma didática | Enfatizar importância do peso diário | Abordar o AINE com empatia (sem culpa excessiva mas com clareza sobre o risco) | Discutir as mudanças de medicação | Definir critérios para buscar urgência (ganho rápido de peso, piora da dispneia)',
      criticalErrors: [
        'Não investigar fatores precipitantes da descompensação (AINE, sal, não adesão)',
        'Não ajustar diurético diante de congestão evidente (manter furosemida 40 mg com BNP em 680 e edema ++)',
        'Prescrever AINE para dor (piora retenção hídrica e antagoniza diurético)',
        'Não orientar o paciente sobre peso diário e critérios de busca à urgência',
        'Não checar função renal e potássio antes de aumentar doses de diuréticos e espironolactona'
      ]
    },
    instD: {
      title: 'IC com FEVE Reduzida — Tratamento Modificador de Mortalidade',
      sections: [
        {
          h: 'Os 4 Pilares do Tratamento da IC-FEr',
          items: [
            { item: 'IECA (enalapril, ramipril) ou ARNI (sacubitril/valsartana — preferencial): bloqueia o sistema RAA, reduz remodelamento cardíaco. PARADIGM-HF: sacubitril/valsartana reduziu mortalidade cardiovascular 20% vs enalapril.', score: 2, ref: 'PARADIGM-HF, NEJM 2014' },
            { item: 'Betabloqueador (carvedilol, bisoprolol, metoprolol succinato): reduz FC, melhora remodelamento. Iniciar com dose baixa e titular a cada 2 semanas. Contraindicado em descompensação aguda grave.', score: 2, ref: 'MERIT-HF, COPERNICUS trials' },
            { item: 'Antagonista de aldosterona/ARM (espironolactona 25–50 mg ou eplerenona): reduz mortalidade em 30% (RALES). Monitorar potássio e creatinina. Cuidado: K > 5,0 ou Cr > 2,5 mg/dL.', score: 2, ref: 'RALES trial, NEJM 1999' },
            { item: 'SGLT2i (dapagliflozina 10 mg ou empagliflozina 10 mg): reduz hospitalização por IC e morte cardiovascular independentemente de DM. DAPA-HF e EMPEROR-Reduced. Nova classe obrigatória na IC-FEr.', score: 2, ref: 'DAPA-HF, NEJM 2019; EMPEROR-Reduced 2020' }
          ]
        },
        {
          h: 'Classificação Funcional NYHA',
          items: [
            { item: 'NYHA I: sem limitação; II: limitação leve (dispneia em esforços intensos); III: limitação importante (dispneia em pequenos esforços — vestir-se, caminhar no plano); IV: incapacidade em repouso. Guia progressão do tratamento.', score: 2, ref: 'Diretriz IC SBC 2023' }
          ]
        },
        {
          h: 'Autocuidado e Monitorização',
          items: [
            { item: 'Peso diário em jejum, mesma balança, mesmo horário. Ganho > 2 kg em 2 dias = retenção hídrica — aumentar diurético ou acionar serviço. Restrição de sódio < 2 g/dia (< 5 g de sal).', score: 2, ref: 'ACC/AHA 2022; Diretriz SBC 2023' },
            { item: 'Medicamentos que pioram IC: AINEs (retenção sódio), tiazolidinedionas, BCCnDHP (verapamil/diltiazem em IC-FEr), antiarrítmicos classe I (propafenona, flecainida), corticoides.', score: 2, ref: 'Harrison 21ª ed.' }
          ]
        }
      ]
    }
  },

  // CASO 7 — ANGINA ESTÁVEL (AMBULATÓRIO)
  {
    id: 7,
    title: 'Dor no peito ao subir ladeira que melhora com repouso',
    sub: 'Ambulatório — Clínica Médica',
    tema: 'Cardiologia',
    topic: 'Angina Estável — Doença Arterial Coronariana Crônica',
    level: 'moderado',
    cardAccent: '#E91E63',
    instA: {
      scenario: 'Ambulatório de Clínica Médica de UBS de nível secundário. O candidato é o clínico responsável pela consulta.',
      patient: 'Maria José Santos, 61 anos, feminino, doméstica, hipertensa, dislipidêmica e com obesidade grau I.',
      complaint: 'Dor em aperto no meio do peito ao caminhar rápido ou subir ladeira, com duração de 2–5 minutos, que melhora com repouso. Há 4 meses.',
      tasks: [
        'Realize a anamnese completa.',
        'Realize o exame físico cardiovascular.',
        'Solicite os exames complementares e estratifique o risco cardiovascular.',
        'Formule a hipótese diagnóstica.',
        'Proponha tratamento farmacológico e não farmacológico e discuta necessidade de investigação invasiva.'
      ]
    },
    instB: {
      vitals: {
        PA: '152/96 mmHg',
        FC: '78 bpm',
        FR: '16 irpm',
        Tax: '36,5 °C',
        Peso: '78 kg',
        Altura: '1,62 m',
        IMC: '29,7 kg/m²'
      },
      physicalGeneral: 'Paciente em BEG, corada, levemente obesa, acianótica, anictérica, afebril.',
      physicalSeg: 'CARDIOVASCULAR: bulhas cardíacas normofonéticas, ritmo regular, FC 78 bpm; sopro sistólico 2+/6+ em foco aórtico com discreta irradiação para pescoço; pulsos periféricos simétricos; TEC < 2s; sem edema. | RESPIRATÓRIO: murmúrio vesicular presente bilateralmente; sem ruídos adventícios. | ABDOME: globoso (adiposidade), RHA presentes, sem visceromegalias.',
      labs: [
        { test: 'Colesterol Total', val: '238 mg/dL', ref: '< 190 mg/dL', alt: true },
        { test: 'LDL-c', val: '162 mg/dL', ref: '< 70 mg/dL (alto risco)', alt: true },
        { test: 'HDL-c', val: '38 mg/dL', ref: '> 50 mg/dL (mulher)', alt: true },
        { test: 'Triglicerídeos', val: '218 mg/dL', ref: '< 150 mg/dL', alt: true },
        { test: 'Glicemia de jejum', val: '118 mg/dL', ref: '< 100 mg/dL', alt: true },
        { test: 'Creatinina', val: '0,9 mg/dL', ref: '0,5–1,1 mg/dL', alt: false }
      ],
      image: 'ECG em repouso: ritmo sinusal, FC 78 bpm; HVE leve (Sokolow-Lyon 38 mm); sem alterações do segmento ST em repouso. Ecocardiograma (disponível se pedido): FEVE 58% (normal); HVE concêntrica; valva aórtica com leve calcificação, gradiente médio 10 mmHg (estenose leve); sem alterações segmentares de contratilidade.',
      note: 'Entregar ECG e lipidograma imediatamente. Ecocardiograma liberado se solicitado. Teste ergométrico (se pedido): resultado disponível — "positivo para isquemia a 5 METs com infra de ST 2 mm em V4–V6, com angina típica, sem arritmia; recuperação normal" = isquemia induzível de intensidade moderada.',
      patientProfile: 'Maria José é doméstica, mora com o marido e 2 filhos. Hipertensa há 18 anos (atenolol 50 mg/dia + hidroclorotiazida 25 mg/dia). Dislipidemia (não tratada — parou a sinvastatina "porque deu dor na perna" há 2 anos). Tabagista (10 maços/ano). Sedentária. Diabética borderline (glicemia 118). Pai faleceu de IAM aos 64 anos. Nega IAM ou AVC prévio. Menopausada há 6 anos. Nunca usou TRH.',
      script: [
        { trigger: 'Queixa principal', speech: 'Doutora, quando eu ando rápido ou subo ladeira, sinto uma dor aqui no meio do peito, em aperto. Fico uns 2, 3 minutos assim. Para quando descanso.' },
        { trigger: 'Sobre a dor', speech: 'É em aperto, no meio. Às vezes vai pro braço esquerdo, levemente. Nunca deu em repouso. A dor dura no máximo uns 5 minutos descansando.' },
        { trigger: 'Sobre evolução', speech: 'Faz uns 4 meses. No começo só quando subia ladeira íngreme, agora já sinto ao caminhar mais rápido no supermercado.' },
        { trigger: 'Sobre medicamentos', speech: 'Tomo atenolol e o diurético para pressão. Parei a sinvastatina faz 2 anos porque tive dor na perna. Achei que era o remédio.' },
        { trigger: 'Sobre tabagismo', speech: 'Fumo há 30 anos, umas 10 cigarras por dia. Já tentei parar mas não consigo. Meu marido também fuma.' },
        { trigger: 'Sobre histórico familiar', speech: 'Meu pai morreu de infarto com 64 anos. Irmão fez cateterismo ano passado, colocou stent.' },
        { trigger: 'Pergunta ativa — diagnóstico', speech: 'É angina isso que a doutora tá falando? Meu irmão falou que pode precisar de cateter. Tenho medo disso.' }
      ],
      hiddenInfo: 'A dor na perna com sinvastatina foi mialgia leve, não miosite — nunca dosou CK — só revela se candidato perguntar sobre os detalhes da intolerância à estatina | Teve um episódio de dor intensa em repouso há 2 semanas que durou 20 minutos — só revela se candidato perguntar sobre episódios em repouso (MUDA O DIAGNÓSTICO para síndrome coronariana instável se confirmado)',
      actorBehavior: 'Cooperativa, um pouco ansiosa com a possibilidade de cateterismo. Minimiza o tabagismo ("é pouco, só 10 cigarros"). Quando perguntada sobre episódios em repouso, conta o episódio de 2 semanas de forma natural, sem perceber a gravidade.'
    },
    instC: {
      diagnosis: 'Angina Estável (Doença Arterial Coronariana Crônica Sintomática), CCS II–III, em paciente com múltiplos fatores de risco cardiovascular — com suspeita de episódio em repouso há 2 semanas que deve ser investigado (possível SCA instável resolvida).',
      differentials: [
        'Angina instável — entra pelo episódio de dor em repouso há 2 semanas (informação oculta); se confirmado 20 min em repouso, recebe esse diagnóstico e exige hospitalização urgente para estratificação',
        'Espasmo coronariano (angina de Prinzmetal) — entra pela dor precordial; sai porque a dor aqui é tipicamente desencadeada por esforço físico, não ocorre em repouso na madrugada',
        'Estenose aórtica significativa — entra pelo sopro sistólico em foco aórtico com irradiação; sai porque o gradiente ao eco é apenas 10 mmHg (leve), sem síncope, sem IC, sem angina em repouso predominante',
        'Refluxo gastroesofágico — entra pela dor retroesternal; sai porque a dor tem relação clara com esforço físico e melhora com repouso (padrão coronariano), não com refeições ou antiácidos'
      ],
      context: 'A DAC crônica estável é a forma mais prevalente de cardiopatia isquêmica. No Brasil, responde por ~350.000 mortes/ano. A angina estável tem padrão previsível (desencadeada por esforço, cede com repouso ou nitrato SL, duração < 20 min). A identificação de episódio em repouso com 20 min é crítica — pode representar SCA instável e muda completamente a conduta (de ambulatorial para hospitalar urgente).',
      justify: 'Dor precordial típica em aperto com irradiação para MSE, desencadeada por esforço, com duração de 2–5 min, cedendo com repouso — 3/3 critérios de Diamante (sexo F, > 60 anos, dor típica) = angina definitiva de alta probabilidade. Teste ergométrico positivo a 5 METs com infra de ST e sintomas. Múltiplos fatores de risco (HAS, dislipidemia, tabagismo, pré-diabetes, obesidade, história familiar).',
      expectedAnamnesis: 'Caracterização da dor (aperto, irradiação, duração, desencadeante) | Padrão de esforço que desencadeia (classificação CCS) | Episódios em repouso ou noturno — CRÍTICO | Uso de nitrato SL e resposta | Fatores de risco cardiovascular (HAS, DM, dislipidemia, tabagismo, histórico familiar) | Antecedentes de IAM, revascularização, AVC | Medicamentos e adesão | Qualidade de vida / limitação funcional',
      expectedPhysical: 'Ausculta cardíaca (sopros — EA pode coexistir; B3/B4) | PA bilateral | Pulsos periféricos (doença vascular periférica associada) | Avaliação de fundo de olho (hipertensão) | Peso e IMC',
      expectedExams: [
        { exam: 'ECG em repouso', justify: 'Avaliação basal, afastar IAM prévio silencioso, HVE', expected: 'HVE leve, sem alterações de ST em repouso' },
        { exam: 'Lipidograma completo', justify: 'Estratificação de risco e indicação de estatina de alta intensidade', expected: 'LDL 162 mg/dL — muito acima da meta para alto risco' },
        { exam: 'Glicemia de jejum / HbA1c', justify: 'DM é fator de risco maior para DAC; pré-diabetes aqui', expected: 'Glicemia 118 = pré-diabetes' },
        { exam: 'Teste ergométrico (ECG de esforço)', justify: 'Confirmar isquemia induzível, estratificar gravidade e orientar cateterismo', expected: 'Positivo com infra ST a 5 METs — isquemia moderada' },
        { exam: 'Ecocardiograma', justify: 'Avaliar FEVE, valvulopatias (sopro aórtico), alterações segmentares', expected: 'FEVE normal, EA leve, sem alterações segmentares' },
        { exam: 'Cineangiocoronariografia (cateterismo)', justify: 'Isquemia moderada a grave ao teste ergométrico indica cateterismo para definir anatomia coronariana e planejamento de revascularização', expected: 'Indicado neste caso' }
      ],
      expectedConduct: 'Farmacológica — Antianginal: betabloqueador (atenolol já em uso — avaliar titulação para FC alvo 55–60 bpm); nitrato de ação longa se insuficiente (isossorbida 20 mg 2x/dia); ranolazina se refratária; nitrato SL (0,4 mg) para crises agudas | Antitrombótica: AAS 100 mg/dia (antiagregação) | Estatina de alta intensidade: atorvastatina 40–80 mg/dia (meta LDL < 70 mg/dL, alto risco; mialgia prévia — retomar com dose menor ou trocar para rosuvastatina) | IECA: ramipril ou enalapril — proteção cardiovascular; pode melhorar PA | Controle da HAS (meta < 130/80 mmHg) | Não farmacológica: cessação do tabagismo (maior impacto individual — reduz risco em 50%); atividade física aeróbica supervisionada; dieta mediterrânea; controle de peso | Reabilitação cardiovascular; encaminhar para hemodinâmica para cateterismo',
      expectedCommunication: 'Apresentar-se | Explicar o diagnóstico de angina de forma acessível | Enfatizar que é tratável e controlável | Abordar a cessação do tabagismo como prioritária | Explicar o papel da estatina (retomar, com outra opção se mialgia for real) | Discutir o cateterismo: explicar o procedimento, indicação e objetivo | Orientar sobre uso do nitrato SL e quando ir ao PS (dor > 20 min em repouso)',
      criticalErrors: [
        'Não investigar episódio de dor em repouso (que pode ser angina instável — exige hospitalização urgente)',
        'Não indicar AAS em paciente com angina estável confirmada',
        'Não retomar estatina (ou trocar para outra) após LDL 162 com alto risco cardiovascular',
        'Não orientar sobre nitrato sublingual para crises e critérios de ida ao PS',
        'Contraindicar exercício físico (indicado e benéfico na angina estável)'
      ]
    },
    instD: {
      title: 'Angina Estável — Doença Arterial Coronariana Crônica',
      sections: [
        {
          h: 'Fisiopatologia e Classificação',
          items: [
            { item: 'Angina estável: isquemia miocárdica reversível por aterosclerose coronariana obstrutiva. Desencadeada por aumento da demanda de O2 (esforço, emoção, frio). Alivia com redução da demanda (repouso) ou vasodilatação (nitrato).', score: 2, ref: 'Harrison 21ª ed.' },
            { item: 'Classificação CCS: I = esforços intensos; II = limitação leve (subir escadas rápido, caminhar em ladeira); III = limitação significativa (caminhar 1 quarteirão plano); IV = incapacidade / repouso.', score: 2, ref: 'CCS Classification' }
          ]
        },
        {
          h: 'Diagnóstico',
          items: [
            { item: 'Critérios de dor típica (Diamante): (1) dor retroesternal em aperto; (2) desencadeada por esforço/estresse; (3) alivia com repouso ou nitrato. Típica = 3/3; Atípica = 2/3; Não cardíaca = ≤ 1/3.', score: 2, ref: 'Diamond GA, NEJM 1979' },
            { item: 'Teste ergométrico (TE): primeiro exame de escolha para isquemia induzível. Positivo: infra de ST ≥ 1 mm horizontal/descendente em ≥ 2 derivações durante o esforço. Alto risco: positividade precoce (< 5 METs), infra ≥ 2 mm, múltiplas derivações, queda de PA.', score: 2, ref: 'ACC/AHA 2021' }
          ]
        },
        {
          h: 'Tratamento Farmacológico',
          items: [
            { item: 'AAS 75–100 mg/dia: reduz risco de IAM em 33%. Indicado em todos com DAC comprovada. Clopidogrel 75 mg como alternativa se intolerância.', score: 2, ref: 'ACC/AHA 2021' },
            { item: 'Estatina de alta intensidade (atorvastatina 40–80 mg ou rosuvastatina 20–40 mg): meta LDL < 70 mg/dL (alto risco) ou < 55 mg/dL (muito alto risco, pós-IAM). Reduz mortalidade cardiovascular 25%.', score: 2, ref: '4S, WOSCOPS, TNT trials' },
            { item: 'Betabloqueador: reduz FC (≤ 60 bpm alvo) → diminui demanda de O2; antianginal; reduz mortalidade pós-IAM.', score: 2, ref: 'Diretriz SBC 2023' },
            { item: 'Nitrato sublingual: gliceriltrinitrato 0,4 mg SL — alívio imediato da crise. Orientar uso: 1 comprimido, sentar, repetir a cada 5 min (máx 3×); se não melhorar em 15 min → PS (possível IAM).', score: 2, ref: 'ACC/AHA 2021' }
          ]
        }
      ]
    }
  },

  // CASO 8 — MIOCARDIOPATIA DILATADA (AMBULATÓRIO)
  {
    id: 8,
    title: 'Inchaço no corpo e falta de ar progressiva em jovem',
    sub: 'Ambulatório — Cardiologia',
    tema: 'Cardiologia',
    topic: 'Miocardiopatia Dilatada Idiopática',
    level: 'moderado',
    cardAccent: '#E91E63',
    instA: {
      scenario: 'Ambulatório de Cardiologia. O candidato atende pela primeira vez um paciente encaminhado de UBS com suspeita de doença cardíaca.',
      patient: 'Eduardo Martins, 38 anos, masculino, professor de educação física, sem doenças prévias conhecidas.',
      complaint: 'Dispneia progressiva há 6 meses (antes subia 5 andares, agora cansa ao se vestir), edema de MMII crescente e palpitações frequentes.',
      tasks: [
        'Realize a anamnese completa.',
        'Realize o exame físico cardiovascular.',
        'Solicite e interprete os exames.',
        'Formule o diagnóstico e os diferenciais.',
        'Proponha o plano terapêutico e oriente o paciente sobre prognóstico e restrições.'
      ]
    },
    instB: {
      vitals: {
        PA: '98/64 mmHg',
        FC: '112 bpm',
        FR: '20 irpm',
        Tax: '36,7 °C',
        Peso: '84 kg',
        Altura: '1,80 m',
        IMC: '25,9 kg/m²'
      },
      physicalGeneral: 'Paciente em REG, hipocorado, pálido (++/4+), acianótico. Eupneico em repouso mas se cansa visivelmente ao sentar-se na maca.',
      physicalSeg: 'CARDIOVASCULAR: bulhas hipofonéticas, ritmo regular com extrassístoles ocasionais; B3 presente (++/4+); sopro sistólico 2+/6+ em foco mitral (IT funcional); TJP ++/4+ a 45°; TEC 3s; pulsos finos. | RESPIRATÓRIO: crepitações em bases ++/4+; sem sibilos. | ABDOME: fígado a 5 cm do RCD, doloroso à palpação. | MMII: edema com cacifo +++/4+ bilateral até joelhos.',
      labs: [
        { test: 'BNP', val: '1.240 pg/mL', ref: '< 100 pg/mL', alt: true },
        { test: 'Troponina I', val: '0,12 ng/mL', ref: '< 0,04 ng/mL', alt: true },
        { test: 'Hemoglobina', val: '10,8 g/dL', ref: '13,5–17,5 g/dL', alt: true },
        { test: 'Creatinina', val: '1,6 mg/dL', ref: '0,6–1,2 mg/dL', alt: true },
        { test: 'TSH', val: '2,1 mUI/L', ref: '0,4–4,0 mUI/L', alt: false },
        { test: 'Ferritina', val: '12 ng/mL', ref: '30–400 ng/mL', alt: true }
      ],
      image: 'Ecocardiograma transtorácico: FEVE 18% (gravemente reduzida); câmaras esquerdas muito dilatadas (DDVE 76 mm, DSVE 68 mm); IT moderada-grave funcional; IM moderada funcional; AE 52 mm; VD com função limítrofe. ECG: taquicardia sinusal 112 bpm; BRE completo (QRS 148 ms); extrassístoles ventriculares ocasionais; sem sinais de isquemia (sem onda Q).',
      note: 'Ecocardiograma e ECG disponíveis quando candidato solicitar. Cineangiocoronariografia (se pedida): coronárias sem lesões obstrutivas (confirma etiologia não isquêmica). Ferritina baixa = déficit de ferro → indica reposição de ferro EV.',
      patientProfile: 'Eduardo é professor de educação física. Casado, 2 filhos pequenos (4 e 7 anos). Sem comorbidades conhecidas. Não usa medicamentos. Nega álcool, drogas e tabagismo. Relata "virose intensa" há 8 meses (febre alta + mialgias por 5 dias). Após a virose, nunca recuperou o fôlego. Nega exposição a cardiotóxicos. Sem história familiar de miocardiopatia. Muito assustado com os sintomas, especialmente por ter filhos pequenos.',
      script: [
        { trigger: 'Queixa principal', speech: 'Doutor, eu era professor de educação física, corria toda semana. Há 6 meses fui perdendo o fôlego progressivamente. Agora não consigo mais nem me vestir sem ficar sem ar.' },
        { trigger: 'Sobre a virose', speech: 'Fiz uma virose muito forte 8 meses atrás. Febre alta, dor no corpo. O médico disse que era gripe e passou. Mas depois disso nunca mais me recuperei.' },
        { trigger: 'Sobre o edema', speech: 'A perna começou a inchar há uns 3 meses. Fui ao médico de lá perto, ele me mandou pra cá. Está ficando pior.' },
        { trigger: 'Sobre o coração', speech: 'Às vezes sinto o coração pulando fora do compasso, umas batidas a mais. E quando deito, preciso de travesseiros para respirar melhor.' },
        { trigger: 'Sobre álcool e drogas', speech: 'Não bebo, não fumo, não uso nada. Nunca usei. Fazia musculação, era o cara saudável do grupo.' },
        { trigger: 'Sobre família', speech: 'Ninguém na minha família teve problema no coração assim. Meus pais são saudáveis.' },
        { trigger: 'Pergunta ativa — diagnóstico', speech: 'O que aconteceu com meu coração, doutor? Tem cura? Tenho dois filhos pequenos... não posso ficar doente.' }
      ],
      hiddenInfo: 'Fez uso de anabolizante (testosterona + trembolona) por 18 meses há 3 anos — só revela se candidato perguntar especificamente sobre uso de anabolizantes ou suplementos esportivos (CAUSA POSSÍVEL de miocardiopatia dilatada) | Consumia bebida energética diariamente (3 latas/dia) por anos — só revela se candidato perguntar sobre estimulantes e bebidas',
      actorBehavior: 'Jovem assustado e em negação inicial. Atleta que se identificava com saúde e não aceita a doença cardíaca com facilidade. Fica profundamente abalado ao ouvir que o coração está muito comprometido, especialmente mencionando os filhos. Cooperativo mas emocionalmente frágil.'
    },
    instC: {
      diagnosis: 'Miocardiopatia Dilatada (MCD) — provavelmente pós-miocardite viral ou por cardiotóxico (anabolizante — informação oculta) — com IC-FEr gravíssima (FEVE 18%), Killip II, BRE com indicação de avaliação para ressincronização.',
      differentials: [
        'MCD isquêmica — principal diferencial; descartada pelo cateterismo coronariano sem lesões obstrutivas e ausência de onda Q no ECG',
        'Miocardite viral aguda em evolução para crônica — altamente provável (virose 8 meses antes + início subagudo); biópsia endomiocárdica pode confirmar (infiltrado inflamatório)',
        'Miocardiopatia alcoólica — entra em todo jovem com MCD; descartada pela nega absoluta de álcool (verificar com exames: GGT, VCM)',
        'MCD por cardiotóxico (anabolizante) — plausível dado o uso prévio (informação oculta); esteroides anabólicos causam fibrose miocárdica e disfunção sistólica'
      ],
      context: 'A MCD é definida por dilatação e disfunção sistólica do VE (FEVE < 45%) na ausência de doença coronariana, valvular ou hipertensiva que justifique. Causas: idiopática (30%), familiar/genética (20–30%), miocardite viral (20%), cardiotóxicos (álcool, cocaína, anabolizantes, doxorrubicina), doenças sistêmicas. Em jovens, sempre investigar miocardite e cardiotóxicos. A FEVE 18% com BRE é indicação de avaliação para TRC (terapia de ressincronização cardíaca) após otimização farmacológica.',
      justify: 'FEVE 18% com câmaras muito dilatadas; sem DAC ao cateterismo; sem história de HAS ou valvulopatia primária; BNP 1.240; BRE completo; contexto de virose 8 meses antes; provável uso de anabolizante (fator cardiotóxico). Anemia (Hb 10,8) e déficit de ferro (ferritina 12) agravam IC.',
      expectedAnamnesis: 'Evolução temporal da dispneia (meses/anos — subagudo vs crônico) | Ortopneia e DPN | Episódio infeccioso precedente (miocardite viral) | Uso de cardiotóxicos: álcool, cocaína, anabolizantes, quimioterápicos | Histórico familiar de MCD ou morte súbita jovem | Exposição occupacional | Doenças sistêmicas (sarcoidose, hemocromatose, amiloidose) | Antecedentes de HAS, DM',
      expectedPhysical: 'Ausculta cardíaca (B3, sopros funcionais de IM/IT) | Turgência jugular | Crepitações pulmonares | Hepatomegalia (IVD) | Edema de MMII | PA (hipotensão = baixo débito) | TEC',
      expectedExams: [
        { exam: 'Ecocardiograma', justify: 'Confirma MCD, quantifica FEVE, avalia valvas, VD', expected: 'FEVE 18%, dilatação maciça de VE, IM/IT funcionais' },
        { exam: 'Cineangiocoronariografia', justify: 'Excluir DAC como causa (mandatório em adultos com nova IC)', expected: 'Coronárias sem lesões' },
        { exam: 'BNP', justify: 'Confirma IC e monitora resposta ao tratamento', expected: '1.240 pg/mL — muito elevado' },
        { exam: 'Holter 24h', justify: 'ESV frequentes e TVNS são comuns na MCD e indicam risco de morte súbita', expected: 'Avaliar carga de ESV e TVNS — pode indicar CDI' },
        { exam: 'Ferritina e saturação de transferrina', justify: 'Déficit de ferro é muito prevalente na IC (30–50%) e agrava a anemia e a disfunção miocárdica', expected: 'Ferritina 12 ng/mL = déficit de ferro absoluto' }
      ],
      expectedConduct: 'Farmacológica (4 pilares): sacubitril/valsartana (iniciar em dose baixa — PA 98/64 → cuidado); betabloqueador (carvedilol 3,125 mg 2x/dia, titular lentamente); espironolactona 25 mg/dia; SGLT2i (dapagliflozina 10 mg) | Diurético: furosemida 40–80 mg/dia para controle de congestão | Ferro IV: gluconato ferroso 200 mg IV (1g total) — ferritina < 100 com IC (FAIR-HF trial) | Anticoagulação: considerar em FEVE < 20% com risco de trombo intracavitário | Dispositivos (após otimização farmacológica 3–6 meses): TRC (BRE + QRS ≥ 130 ms + FEVE ≤ 35%) — candidato provável; CDI (FEVE ≤ 35% persistente após otimização) | Restrição de esforços intensos e competitivos; reabilitação cardíaca supervisionada | Discutir avaliação genética (familiar) e transplante cardíaco se refratário',
      expectedCommunication: 'Apresentar-se | Comunicar o diagnóstico de forma clara e humanizada | Não minimizar a gravidade mas trazer esperança realista (tratamento com potencial de recuperação parcial) | Abordar o impacto emocional (jovem pai com filhos pequenos) | Explicar os próximos passos: medicações, dispositivos, seguimento | Orientar sobre restrições (não praticar esportes competitivos, náutica em caso de síncope) | Discutir avaliação familiar',
      criticalErrors: [
        'Não excluir DAC com cateterismo coronariano (isquemia é a principal causa de MCD e muda o tratamento)',
        'Não iniciar 4 pilares de IC-FEr (omissão de betabloqueador, ARNI, ARM, SGLT2i)',
        'Não investigar causas reversíveis (anabolizante, álcool, miocardite, hemocromatose)',
        'Não avaliar necessidade de CDI em FEVE < 35% (risco de morte súbita)',
        'Liberar esportes competitivos em paciente com FEVE 18% (risco de arritmia fatal)'
      ]
    },
    instD: {
      title: 'Miocardiopatia Dilatada — Material de Estudo',
      sections: [
        {
          h: 'Definição e Etiologia',
          items: [
            { item: 'MCD: dilatação do VE (ou biventriculares) com FEVE < 45% na ausência de sobrecarga de pressão, DAC ou valvulopatia primária suficiente para explicar a disfunção.', score: 2, ref: 'ESC 2023' },
            { item: 'Causas: idiopática (30%), familiar-genética (20–30%, mutações em titina, laminina), miocardite viral (enterovírus, parvovírus B19, SARS-CoV-2), alcoólica (> 80 g/dia por anos), cocaína, anabolizantes, doxorrubicina, trastuzumabe, taquicardiomiopatia.', score: 2, ref: 'Harrison 21ª ed.' }
          ]
        },
        {
          h: 'Dispositivos na IC-FEr',
          items: [
            { item: 'CDI (Cardioversor-desfibrilador implantável): indicado quando FEVE ≤ 35% após ≥ 3 meses de otimização farmacológica e expectativa de vida > 1 ano. Previne morte súbita por TV/FV.', score: 2, ref: 'MADIT-II; Diretriz SBC 2023' },
            { item: 'TRC (Terapia de Ressincronização Cardíaca): indicada quando FEVE ≤ 35% + BRE + QRS ≥ 130 ms em ritmo sinusal. Ressincroniza a contração ventricular, melhora FEVE, sintomas e mortalidade. Pode restaurar FEVE normal em MCD não isquêmica.', score: 2, ref: 'CARE-HF; COMPANION' }
          ]
        }
      ]
    }
  },

  // CASO 9 — HIPERTENSÃO ARTERIAL SEM CONTROLE (UBS)
  {
    id: 9,
    title: 'Pressão alta há anos e sempre descontrolada',
    sub: 'UBS — Atenção Primária',
    tema: 'Cardiologia',
    topic: 'Hipertensão Arterial Sistêmica — Sem Controle com Lesão de Órgão-Alvo',
    level: 'fácil',
    cardAccent: '#E91E63',
    instA: {
      scenario: 'UBS de zona urbana. Consulta de rotina de hipertensão. O candidato é o médico de família e comunidade.',
      patient: 'Rosângela Pereira, 54 anos, feminino, costureira, hipertensa há 12 anos.',
      complaint: 'Consulta de renovação de receitas. Refere que "a pressão nunca baixa" mesmo tomando os remédios. Cefaleia occipital pela manhã frequente.',
      tasks: [
        'Realize a anamnese direcionada para avaliação da HAS e de lesões de órgão-alvo.',
        'Realize o exame físico dirigido.',
        'Solicite os exames pertinentes para avaliação de lesões de órgão-alvo e risco cardiovascular.',
        'Ajuste o tratamento anti-hipertensivo com base nas diretrizes.',
        'Identifique e trate as causas de não controle e oriente a paciente sobre adesão e hábitos de vida.'
      ]
    },
    instB: {
      vitals: {
        PA: '162/104 mmHg',
        'PA braço direito': '164/106 mmHg',
        'PA braço esquerdo': '160/102 mmHg',
        FC: '82 bpm',
        FR: '16 irpm',
        Tax: '36,4 °C',
        Peso: '76 kg',
        Altura: '1,60 m',
        IMC: '29,7 kg/m²'
      },
      physicalGeneral: 'Paciente em BEG, corada, levemente acima do peso, acianótica, anictérica.',
      physicalSeg: 'CARDIOVASCULAR: bulhas normofonéticas, ritmo regular; B4 presente (+/4+); sem sopros; pulsos periféricos cheios e simétricos; sem edema. | RESPIRATÓRIO: murmúrio vesicular presente bilateralmente; sem ruídos adventícios. | NEUROLÓGICO: orientada em tempo e espaço; sem déficits focais. | FUNDO DE OLHO (disponível): estreitamento arteriolar difuso; cruzamentos arteriovenosos patológicos (sinal de Gunn grau II); sem exsudatos ou hemorragias.',
      labs: [
        { test: 'Creatinina', val: '1,1 mg/dL', ref: '0,5–1,1 mg/dL', alt: false },
        { test: 'TFG (CKD-EPI)', val: '68 mL/min/1,73m²', ref: '> 60 mL/min/1,73m²', alt: false },
        { test: 'Microalbuminúria (relação A/Cr)', val: '82 mg/g', ref: '< 30 mg/g', alt: true },
        { test: 'Glicemia de jejum', val: '109 mg/dL', ref: '< 100 mg/dL', alt: true },
        { test: 'Potássio', val: '3,2 mEq/L', ref: '3,5–5,0 mEq/L', alt: true },
        { test: 'Colesterol total', val: '214 mg/dL', ref: '< 190 mg/dL', alt: true }
      ],
      image: 'ECG: ritmo sinusal; critérios de HVE pelo índice de Sokolow-Lyon (SV1 + RV5 = 42 mm); sem alterações do segmento ST.',
      note: 'Entregar ECG quando solicitado. Medicação atual: hidroclorotiazida 25 mg/dia (única medicação — tomada irregularmente). Paciente nunca usou IECA nem BCC. Funduoscopia disponível se candidato realizar/solicitar o exame.',
      patientProfile: 'Rosângela é costureira em casa. Solteira, mora com a mãe idosa que cuida. Dieta rica em sal (faz conservas). Sedentária. Não fuma. Bebe socialmente. Estressada com a situação financeira. Refere que "toma o diurético mas fica indo muito ao banheiro e às vezes para". Nunca teve avaliação de órgão-alvo. Mãe com HAS e AVC.',
      script: [
        { trigger: 'Queixa principal', speech: 'Doutora, vim renovar minha receita. A pressão continua alta, não baixa mesmo tomando o remédio. E tô com dor de cabeça na nuca toda manhã.' },
        { trigger: 'Sobre o medicamento', speech: 'Tomo o diurético quase todo dia. Mas às vezes paro porque fico indo muito ao banheiro e não consigo trabalhar assim. Daí fico dias sem tomar.' },
        { trigger: 'Sobre sal', speech: 'Gosto de comida temperada, doutora. Minha mãe faz conservas, picles... é difícil não comer.' },
        { trigger: 'Sobre cefaleia', speech: 'Acordo com dor na nuca, quase todo dia. Passa depois de um tempo. Às vezes tomo dipirona.' },
        { trigger: 'Sobre sintomas neurológicos', speech: 'Não, nunca tive derrame, nem minha pressão subiu a ponto de eu passar mal. Só a dorzinha na nuca mesmo.' },
        { trigger: 'Sobre antecedentes', speech: 'Só a pressão mesmo. Minha mãe teve AVC com 67 anos. Ela ficou com sequela.' },
        { trigger: 'Sobre exercício', speech: 'Não faço nada físico não. Fico na máquina de costura o dia todo. Não tenho tempo nem disposição.' },
        { trigger: 'Pergunta ativa — diagnóstico', speech: 'Minha pressão vai baixar com um remédio diferente? Não quero ter derrame igual minha mãe.' }
      ],
      hiddenInfo: 'Usa AINE (diclofenaco) regularmente para dores nas mãos e costas (doença ocupacional) — só revela se candidato perguntar sobre todos os medicamentos usados, incluindo os "para dor" (AINEs elevam PA e antagonizam anti-hipertensivos) | Toma anticoncepcional oral (levonorgestrel + EE) prescrito por ginecologista — só revela se candidato perguntar sobre todos os medicamentos e ACOs (ACO aumenta PA, especialmente com progestagênio androgênico)',
      actorBehavior: 'Cooperativa, um pouco resignada ("sempre foi assim"). Fica preocupada quando menciona o AVC da mãe. Reage bem a explicações simples e práticas. Tende a justificar os hábitos ruins (sal, sedentarismo) com a rotina difícil.'
    },
    instC: {
      diagnosis: 'HAS Estágio 2 sem controle adequado (PA 162/104 mmHg), com lesões de órgão-alvo subclínicas: HVE ao ECG, microalbuminúria (LOA renal), retinopatia hipertensiva grau II. Causas do não controle: monoterapia inadequada, não adesão ao diurético, uso de AINE e ACO.',
      differentials: [
        'HAS secundária (hiperaldosteronismo primário) — entra pelo K 3,2 mEq/L + HAS refratária; deve ser investigado se hipocalemia persistir após correção e suspensão de diurético (aldosterona/renina)',
        'HAS do jaleco branco — entra por PA elevada na consulta; sai porque a história é de HAS de longa data com cefaleia matinal consistente e evidência de LOA'
      ],
      context: 'A HAS afeta 35% dos adultos brasileiros e é a principal causa tratável de AVC, IAM e DRC. A "HAS resistente" muitas vezes é "pseudorresistente": não adesão (50% dos não controlados), medicamentos elevadores de PA (AINEs, ACO, simpaticomiméticos, corticoides), técnica de medida incorreta, dieta hipersódica. A presença de microalbuminúria e HVE neste caso indica dano de órgão-alvo subclínico e classifica o risco como ALTO, justificando meta de PA < 130/80 mmHg.',
      justify: 'PA 162/104 mmHg (grau 2); HVE ao ECG (Sokolow ≥ 38 mm); microalbuminúria 82 mg/g (LOA renal precoce); retinopatia grau II; monoterapia com tiazídico em baixa adesão; uso de AINE e ACO como causas reversíveis de não controle.',
      expectedAnamnesis: 'Tempo de diagnóstico de HAS e tratamentos anteriores | Adesão a medicamentos (horário, esquecimentos, efeitos colaterais) | TODOS os medicamentos em uso (incluindo AINEs, ACOs, descongestionantes, fitoterápicos) | Dieta (sal, gordura) | Atividade física | Tabagismo e álcool | Sintomas de LOA (cefaleia, embaçamento visual, dispneia, edema, poliúria, polidipsia) | Histórico familiar de HAS, AVC, DAC, DRC | Sintomas de HAS secundária (hipocalemia, ronco/SAOS, episódios de rubor/cefaleia — feocromocitoma)',
      expectedPhysical: 'Medida correta da PA: posição sentada, repouso 5 min, manguito no braço direito; repetir no esquerdo (diferença > 10 mmHg sugere coarctação) | Ausculta cardíaca (B4 = HVE hipertensiva; sopros) | Fundo de olho (retinopatia hipertensiva — graus Keith-Wagener) | Neurológico (déficits focais = AVC prévio) | Pulsos (coarctação) | Pescoço (sopro renal)',
      expectedExams: [
        { exam: 'ECG', justify: 'HVE (critérios de Sokolow, Cornell) — marcador de LOA cardíaca', expected: 'HVE (Sokolow 42 mm)' },
        { exam: 'Microalbuminúria (relação Albumina/Creatinina na urina)', justify: 'LOA renal precoce — preditor independente de risco cardiovascular', expected: 'Microalbuminúria 82 mg/g (normal < 30)' },
        { exam: 'Lipidograma', justify: 'Estratificação do risco cardiovascular global', expected: 'Colesterol total 214 — calcular risco pelo Escore de Framingham' },
        { exam: 'Glicemia / HbA1c', justify: 'DM é comorbidade frequente e amplifica o risco; glicemia 109 = pré-diabetes', expected: 'Pré-diabetes confirmado' },
        { exam: 'Função renal e potássio', justify: 'Avaliação de LOA renal; hipocalemia (diurético? hiperaldosteronismo?)', expected: 'K 3,2 = hipocalemia — pode ser pelo tiazídico ou hiperaldosteronismo' }
      ],
      expectedConduct: 'Farmacológica: substituir monoterapia por terapia combinada de 2 drogas — IECA (enalapril 10 mg 2x/dia) + BCC (anlodipino 5 mg/dia) — combinação de primeira linha segundo SBC 2020; manter tiazídico se necessário (tríplice = IECA + BCC + tiazídico); suspender AINE e substituir por paracetamol / fisioterapia; discutir ACO com ginecologista (progestagênio de baixo impacto vascular ou DIU) | Meta de PA: < 130/80 mmHg (risco alto por LOA) | Não farmacológica: Restrição de sódio < 2 g/dia (< 5 g sal/dia); perda de peso (IMC meta 18,5–24,9); atividade física aeróbica 150 min/semana; cessar AINE; reduzir álcool; controle do estresse | Reposição de K (dieta — banana, laranja; ajustar diurético) | Encaminhar para oftalmologia (retinopatia) | Retorno em 4 semanas para verificar adesão e PA',
      expectedCommunication: 'Apresentar-se | Explorar o motivo real da não adesão ao diurético de forma empática (poliúria atrapalha o trabalho) | Explicar que AINE e ACO sobem a pressão (em linguagem acessível) | Explicar LOA de forma compreensível: "a pressão alta já está machucando o coração e os rins sem a senhora perceber" | Motivar com o medo de AVC (história materna) | Dar metas simples e práticas | Combinar retorno breve',
      criticalErrors: [
        'Não perguntar sobre AINEs e ACO (causas reversíveis de não controle)',
        'Manter monoterapia diante de PA 162/104 com LOA (indicação clara de terapia combinada)',
        'Não investigar lesões de órgão-alvo (microalbuminúria, ECG, fundo de olho)',
        'Não abordar a não adesão de forma empática e propor soluções práticas (trocar diurético para noturno, por exemplo)',
        'Prescrever IECA sem orientar sobre potencial tosse e necessidade de retorno'
      ]
    },
    instD: {
      title: 'Hipertensão Arterial Sistêmica — Material de Estudo',
      sections: [
        {
          h: 'Diagnóstico e Classificação',
          items: [
            { item: 'Diagnóstico: PA ≥ 140/90 mmHg em ≥ 2 medidas em ≥ 2 ocasiões, com técnica correta. Classificação: Normal-Alta 130–139/85–89; Grau 1: 140–159/90–99; Grau 2: 160–179/100–109; Grau 3: ≥ 180/≥ 110.', score: 2, ref: 'Diretriz Brasileira HAS — SBC 2020' },
            { item: 'Estratificação de risco: baixo, moderado, alto, muito alto. Fatores: fatores de risco CV + LOA + condições clínicas associadas. HVE + microalbuminúria = LOA = risco ALTO independentemente dos fatores de risco.', score: 2, ref: 'Diretriz SBC 2020' }
          ]
        },
        {
          h: 'Lesões de Órgão-Alvo (LOA)',
          items: [
            { item: 'Cardíaca: HVE (ECG ou eco), doença coronariana, IC, FA. Renal: microalbuminúria (30–300 mg/g), macroalbuminúria, redução de TFG. Cerebrovascular: AVC, AIT, demência vascular. Ocular: retinopatia hipertensiva (graus I–IV de Keith-Wagener). Vascular: espessamento de carótida (EIM > 0,9 mm), placa, ABI < 0,9.', score: 2, ref: 'Diretriz SBC 2020' }
          ]
        },
        {
          h: 'Tratamento — Anti-Hipertensivos',
          items: [
            { item: 'Combinação preferencial de 1ª linha: IECA (ou BRA) + BCC (anlodipino). Para 3ª droga: adicionar tiazídico (hidroclorotiazida ou clortalidona). Para 4ª droga: espironolactona 25 mg (HAS resistente).', score: 2, ref: 'Diretriz SBC 2020' },
            { item: 'Meta de PA: < 130/80 mmHg para maioria dos adultos de alto risco (DAC, DRC, DM, LOA). < 140/90 para idosos frágeis > 80 anos (risco de hipotensão ortostática).', score: 2, ref: 'Diretriz SBC 2020' },
            { item: 'Medicamentos que elevam PA: AINEs, contraceptivos orais combinados, simpaticomiméticos (descongestionantes), corticoides, eritropoetina, tacrolimus, estimulantes (cocaína, anfetamina, metilfenidato).', score: 2, ref: 'Harrison 21ª ed.' }
          ]
        }
      ]
    }
  },

  // CASO 10 — DISLIPIDEMIA COM RISCO CARDIOVASCULAR (UBS)
  {
    id: 10,
    title: 'Exame de rotina com colesterol muito alto',
    sub: 'UBS — Atenção Primária',
    tema: 'Cardiologia',
    topic: 'Dislipidemia — Hipercolesterolemia Primária',
    level: 'fácil',
    cardAccent: '#E91E63',
    instA: {
      scenario: 'UBS de zona urbana. Consulta de resultado de exames de rotina. O candidato é o médico de família.',
      patient: 'Paulo Henrique Gomes, 46 anos, masculino, contador, sedentário, sem doenças prévias conhecidas.',
      complaint: 'Veio buscar resultados de exames de rotina. Assintomático. Nunca fez lipidograma antes.',
      tasks: [
        'Realize a anamnese completa, com ênfase em fatores de risco cardiovascular.',
        'Realize o exame físico cardiovascular e geral.',
        'Interprete o lipidograma e calcule o risco cardiovascular global.',
        'Formule a hipótese diagnóstica.',
        'Proponha tratamento farmacológico e não farmacológico, e oriente o paciente.'
      ]
    },
    instB: {
      vitals: {
        PA: '134/86 mmHg',
        FC: '76 bpm',
        FR: '14 irpm',
        Tax: '36,5 °C',
        Peso: '92 kg',
        Altura: '1,75 m',
        IMC: '30,0 kg/m²'
      },
      physicalGeneral: 'Paciente em BEG, corado, com obesidade grau I. Acianótico, anictérico, afebril.',
      physicalSeg: 'CARDIOVASCULAR: bulhas normofonéticas, ritmo regular; sem sopros; pulsos periféricos cheios e simétricos; sem edema; TEC < 2s. | RESPIRATÓRIO: murmúrio vesicular bilateralmente sem ruídos. | ABDOME: globoso (adiposidade central); circunferência abdominal 103 cm; sem hepatomegalia. | PELE: sem xantomas ou xantelasmas visíveis.',
      labs: [
        { test: 'Colesterol Total', val: '278 mg/dL', ref: '< 190 mg/dL', alt: true },
        { test: 'LDL-c (Friedewald)', val: '198 mg/dL', ref: '< 130 mg/dL (risco intermediário)', alt: true },
        { test: 'HDL-c', val: '36 mg/dL', ref: '> 40 mg/dL (homem)', alt: true },
        { test: 'Triglicerídeos', val: '234 mg/dL', ref: '< 150 mg/dL', alt: true },
        { test: 'Glicemia de jejum', val: '102 mg/dL', ref: '< 100 mg/dL', alt: true },
        { test: 'TSH', val: '5,8 mUI/L', ref: '0,4–4,0 mUI/L', alt: true }
      ],
      image: 'ECG: ritmo sinusal, FC 76 bpm; sem alterações. Não há sinais de HVE ou isquemia.',
      note: 'Entregar o lipidograma e a glicemia quando candidato solicitar os resultados. TSH: disponível se candidato pedir perfil tireoidiano (hipotireoidismo subclínico é causa secundária de dislipidemia). Escore de Framingham (calculado pelo aplicador se candidato pedir): risco cardiovascular em 10 anos = 12% = risco INTERMEDIÁRIO.',
      patientProfile: 'Paulo é contador de escritório. Solteiro, sem filhos. Sedentário (não pratica exercícios). Alimenta-se mal: muito fast food, pouca fruta e verdura. Ex-fumante (parou há 5 anos, fumou 15 anos). Bebe cerveja nos finais de semana (3–4 latas). Dorme mal, acordando cansado. Pai faleceu de IAM aos 58 anos, irmão mais velho (52 anos) fez cateterismo recentemente. Nunca tomou remédio contínuo. Não quer tomar remédio "pra sempre".',
      script: [
        { trigger: 'Queixa principal', speech: 'Doutor, vim pegar o resultado do meu exame de sangue. Foi de rotina, não tô sentindo nada.' },
        { trigger: 'Sobre alimentação', speech: 'Como bastante fast food, uma vez ou duas por semana. Não tenho tempo para cozinhar. Pouca fruta e verdura, confesso.' },
        { trigger: 'Sobre exercício', speech: 'Não faço nada físico não. Fico sentado o dia todo no trabalho. À noite estou cansado demais.' },
        { trigger: 'Sobre álcool', speech: 'Bebo no fim de semana, umas cervejas. Nada demais, 3 ou 4 no sábado.' },
        { trigger: 'Sobre tabagismo', speech: 'Fumei 15 anos, parei há 5 anos. Difícil foi, mas consegui.' },
        { trigger: 'Sobre histórico familiar', speech: 'Meu pai morreu de infarto com 58 anos. Meu irmão mais velho fez cateterismo ano passado, colocou um stent.' },
        { trigger: 'Sobre sono', speech: 'Ronco bastante, segundo minha ex-namorada. Acordo cansado às vezes. Nunca fiz exame para isso.' },
        { trigger: 'Pergunta ativa — diagnóstico', speech: 'Tá muito alto mesmo? Vou ter que tomar remédio pra sempre? Não queria começar a tomar coisas agora.' }
      ],
      hiddenInfo: 'Usa suplemento de whey protein diariamente e óleo de coco — só revela se candidato perguntar sobre suplementos e alimentos específicos (óleo de coco contém gordura saturada e pode elevar LDL) | Apresenta ronco intenso e sonolência diurna — só revela se candidato perguntar sobre SAOS (fator de risco cardiovascular associado)',
      actorBehavior: 'Tranquilo mas surpreso com os resultados. Resiste à ideia de remédio contínuo ("sou novo, não queria depender de remédio já"). Quando o médico explica o risco de IAM com a história familiar, fica sério e mais receptivo. Colaborativo e disposto a mudar hábitos se motivado adequadamente.'
    },
    instC: {
      diagnosis: 'Dislipidemia Mista (hipercolesterolemia + hipertrigliceridemia) com risco cardiovascular INTERMEDIÁRIO (Framingham 12%), provavelmente de etiologia mista (primária + hipotireoidismo subclínico como causa secundária). Síndrome metabólica presente (5/5 critérios: obesidade central, HDL baixo, TG alto, glicemia elevada, PA limítrofe).',
      differentials: [
        'Dislipidemia secundária ao hipotireoidismo — plausível pelo TSH 5,8; hipotireoidismo causa redução do clearance de LDL e aumento de TG; tratar hipotireoidismo pode melhorar o perfil lipídico',
        'Hipercolesterolemia familial heterozigótica — entra pelo LDL 198 com história familiar fortíssima (pai IAM 58a, irmão stent 52a); sai pela ausência de xantomas e xantelasmas; deve-se calcular Dutch Lipid Clinic Score',
        'Dislipidemia por suplemento (óleo de coco) — componente contribuinte pela gordura saturada do óleo de coco'
      ],
      context: 'A dislipidemia afeta 40% dos brasileiros adultos e é o principal fator modificável de risco de DAC. O LDL elevado (especialmente > 190 mg/dL) com história familiar é o principal alvo terapêutico. A síndrome metabólica (3 de 5 critérios) multiplica o risco cardiovascular. O hipotireoidismo subclínico (TSH 5,8 com T4 normal) é causa reversível de dislipidemia — tratar a causa pode reduzir LDL e TG.',
      justify: 'LDL 198 mg/dL; CT 278; TG 234; HDL 36 (baixo); Framingham 12% = risco intermediário; síndrome metabólica (CA 103 cm + TG 234 + HDL 36 + PA 134/86 + glicemia 102); TSH 5,8 = hipotireoidismo subclínico; história familiar de DAC precoce; ex-tabagista; obesidade.',
      expectedAnamnesis: 'Episódios de dor precordial, dispneia, palpitações | Histórico de IAM, AVC, DAC | Medicamentos (corticoides, progestagênios, betabloqueadores, tiazídicos, antirretrovirais — causas de dislipidemia secundária) | Suplementos (óleo de coco, whey) | Dieta (gordura saturada, trans, fibras) | Atividade física | Tabagismo e álcool | História familiar de DAC precoce (pai < 55a H ou < 65a M) | Xantomas, xantelasmas | Sintomas de hipotireoidismo (fadiga, constipação, frio, ganho de peso) | SAOS (ronco, sonolência)',
      expectedPhysical: 'Peso, IMC, circunferência abdominal | PA | Ausculta cardíaca e vascular | Xantomas tendinosos (dorso dos tendões de Aquiles, mãos) | Xantelasmas palpebrais | Arco córneo (< 45 anos sugere HF) | Tireoide (bócio)',
      expectedExams: [
        { exam: 'Lipidograma completo', justify: 'Diagnóstico de dislipidemia e cálculo do non-HDL e LDL', expected: 'CT 278, LDL 198, HDL 36, TG 234' },
        { exam: 'TSH (e T4 livre se TSH alterado)', justify: 'Hipotireoidismo é causa secundária tratável de dislipidemia', expected: 'TSH 5,8 = hipotireoidismo subclínico — pedir T4 livre' },
        { exam: 'Glicemia de jejum / HbA1c', justify: 'Pré-diabetes e DM2 associados à dislipidemia e síndrome metabólica', expected: 'Glicemia 102 = pré-diabetes' },
        { exam: 'Escore de risco cardiovascular (Framingham)', justify: 'Estratifica o risco para decidir alvo de LDL e necessidade de estatina', expected: 'Risco intermediário 12% → meta LDL < 100 mg/dL; se história familiar fortíssima, reclassificar para alto risco' },
        { exam: 'Creatinina / função hepática', justify: 'Pré-estatina: excluir hepatopatia (TGO/TGP) e DRC como causa secundária', expected: 'Normal' }
      ],
      expectedConduct: 'Não farmacológica (pilar principal): Dieta mediterrânea — reduzir gordura saturada (< 7% das calorias), eliminar gordura trans, aumentar fibras solúveis (aveia, leguminosas — reduzem LDL 5–10%), ômega-3 (peixes); reduzir carboidratos refinados (melhora TG); atividade física aeróbica 150 min/semana (eleva HDL); perda de peso 5–10% (impacto no TG e HDL); reduzir álcool (TG); suspender óleo de coco; investigar e tratar SAOS | Farmacológica: Estatina (indicada no risco intermediário com LDL > 130 mg/dL ou quando metas não são atingidas com dieta): atorvastatina 20–40 mg/dia (de alta intensidade, dada a história familiar e LDL 198); meta LDL < 100 mg/dL (risco intermediário) ou < 70 mg/dL se reclassificar para alto risco | Tratar hipotireoidismo subclínico: levotiroxina 25–50 mcg/dia (pedir T4 livre primeiro; TSH > 10 = indicação; 5,8 = discutível — seguimento) | Fibratos (fenofibrato) se TG > 500 mg/dL (risco de pancreatite) — neste caso TG 234, fibratos após estabilização com dieta/estatina | Retorno em 3 meses para novo lipidograma',
      expectedCommunication: 'Apresentar-se | Explicar os resultados de forma clara e visual ("o colesterol é o entupidor das artérias") | Usar a história familiar (pai e irmão) para motivar mudança | Abordar a resistência ao remédio com respeito: explicar que estatina é o remédio mais estudado do mundo para prevenir infarto | Dar metas práticas de dieta e exercício | Não sobrecarregar com informações na primeira consulta | Marcar retorno em 3 meses para reavaliação',
      criticalErrors: [
        'Não calcular o risco cardiovascular global (Framingham) para estratificar o alvo de LDL',
        'Não investigar causas secundárias de dislipidemia (hipotireoidismo — TSH 5,8)',
        'Não prescrever estatina com LDL 198 e risco intermediário ou histórico familiar de DAC precoce',
        'Tratar apenas com dieta sem acompanhamento próximo (LDL 198 raramente atinge meta só com dieta)',
        'Prescrever fibratos como primeira linha para hipercolesterolemia (fibratos agem principalmente em TG, não em LDL)'
      ]
    },
    instD: {
      title: 'Dislipidemia — Material de Estudo',
      sections: [
        {
          h: 'Classificação e Diagnóstico',
          items: [
            { item: 'Lipidograma: CT, LDL (Friedewald: CT – HDL – TG/5; válido se TG < 400), HDL, TG. LDL é o principal alvo. Non-HDL = CT – HDL (inclui VLDL e IDL — melhor preditor em TG elevado).', score: 2, ref: 'Diretriz Brasileira Dislipidemia — SBC 2017' },
            { item: 'Classificação: hipercolesterolemia isolada (LDL ↑); hipertrigliceridemia isolada (TG ↑); dislipidemia mista (LDL ↑ + TG ↑); HDL baixo isolado.', score: 1, ref: 'Diretriz SBC 2017' }
          ]
        },
        {
          h: 'Estratificação de Risco e Metas',
          items: [
            { item: 'Escore de Framingham (BR): categorias: baixo < 5%; intermediário 5–20%; alto > 20% ou DAC estabelecida/equivalente (DM com LOA, DRC grau 3–4, aterosclerose subclínica). Meta LDL: baixo < 160; intermediário < 100; alto < 70; muito alto (pós-IAM) < 50 mg/dL.', score: 2, ref: 'Diretriz SBC 2017' },
            { item: 'Hipercolesterolemia familial (HF): Dutch Lipid Clinic Score. Suspeitar: LDL > 190 mg/dL + história familiar de DAC precoce. Estatina de alta intensidade desde o início; pode necessitar ezetimiba + inibidor de PCSK9.', score: 2, ref: 'Diretriz SBC 2017' }
          ]
        },
        {
          h: 'Estatinas e Outros Hipolipemiantes',
          items: [
            { item: 'Estatinas: inibem HMG-CoA redutase → ↓ LDL 40–60% (alta intensidade). Alta intensidade: atorvastatina 40–80 mg ou rosuvastatina 20–40 mg. Efeitos adversos: mialgia (5–10%), rabdomiólise (< 0,1%), elevação de transaminases (< 3%).', score: 2, ref: 'Diretriz SBC 2017; Harrison 21ª ed.' },
            { item: 'Ezetimiba: inibe absorção de colesterol no intestino → ↓ LDL adicional 15–25%. Combinar com estatina se meta não atingida. IMPROVE-IT: reduziu eventos cardiovasculares adicionando ezetimiba à sinvastatina pós-SCA.', score: 1, ref: 'IMPROVE-IT, NEJM 2015' },
            { item: 'Inibidores de PCSK9 (alirocumabe, evolocumabe): anticorpos monoclonais → ↓ LDL 50–60% adicional. Para HF e pacientes pós-IAM com LDL acima da meta apesar de estatina + ezetimiba.', score: 1, ref: 'FOURIER; ODYSSEY trials' }
          ]
        },
        {
          h: 'Síndrome Metabólica',
          items: [
            { item: 'Critérios (NCEP ATP III — 3 de 5): circunferência abdominal > 102 cm (H) ou > 88 cm (M); TG ≥ 150 mg/dL; HDL < 40 (H) ou < 50 (M); PA ≥ 130/85 mmHg; glicemia ≥ 100 mg/dL. Aumenta risco de DM2 (5×) e DAC (2–3×).', score: 2, ref: 'NCEP ATP III; IDF' }
          ]
        }
      ]
    }
  },

];

export default cardiologia;
