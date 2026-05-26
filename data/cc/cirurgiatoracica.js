const ctoracica = [ 
    {
  id: 1,
  title: "Dispneia progressiva e dor torácica há 1 semana",
  sub: "PS — Pronto-Socorro",
  tema: "Cirurgia",
  topic: "derrame pleural",
  level: "moderado",
  cardAccent: "#3B7DD8",
  instA: {
    scenario: "Pronto-Socorro de hospital geral. Turno diurno. Caso clínico escrito — sem ator.",
    patient: "H.M., 58 anos, masculino, motorista de caminhão, hipertenso em uso de losartana.",
    complaint: "Falta de ar que piora ao deitar e dor no lado direito do peito há cerca de 1 semana.",
    tasks: [
      "Analise o quadro clínico apresentado e formule hipóteses diagnósticas.",
      "Interprete os achados do exame físico fornecidos e identifique os sinais compatíveis com o diagnóstico.",
      "Solicite e interprete os exames complementares mais adequados para confirmar a hipótese diagnóstica.",
      "Proponha a conduta terapêutica inicial e identifique quando o encaminhamento cirúrgico é necessário.",
      "Identifique os diagnósticos diferenciais relevantes e os critérios para distinção entre transudato e exsudato."
    ]
  },
  instB: {
    vitals: {
      PA: "138/88 mmHg",
      FC: "102 bpm",
      FR: "24 irpm",
      Tax: "37,8°C",
      Peso: "84 kg",
      Altura: "1,72 m",
      IMC: "28,4 kg/m²"
    },
    physicalGeneral: "Paciente em regular estado geral, consciente, orientado, taquidispneico em repouso, com saturação de O₂ de 91% em ar ambiente. Fácies de desconforto. Mucosas hipocoradas 1+/4+, acianótico.",
    physicalSeg: "TÓRAX: Expansibilidade reduzida à direita. Frêmito toracovocal abolido no terço inferior do hemitórax direito. Percussão com macicez no terço inferior direito. Ausculta: murmúrio vesicular abolido no terço inferior direito, sem ruídos adventícios nos demais campos. | CARDIOVASCULAR: Bulhas rítmicas normofonéticas, sem sopros. Taquicardia sinusal. | ABDOME: Flácido, indolor, sem visceromegalias, sem sinais de ascite. | MMII: Edema 1+/4+ em tornozelos bilateralmente.",
    labs: [
      { test: "Hemoglobina", val: "10,8 g/dL", ref: "13,5–17,5 g/dL", alt: true },
      { test: "Leucócitos", val: "14.200/mm³", ref: "4.000–11.000/mm³", alt: true },
      { test: "Neutrófilos", val: "82%", ref: "50–70%", alt: true },
      { test: "Plaquetas", val: "310.000/mm³", ref: "150.000–400.000/mm³", alt: false },
      { test: "PCR", val: "128 mg/L", ref: "< 5 mg/L", alt: true },
      { test: "Creatinina", val: "1,1 mg/dL", ref: "0,7–1,2 mg/dL", alt: false },
      { test: "Ureia", val: "38 mg/dL", ref: "15–45 mg/dL", alt: false },
      { test: "DHL sérico", val: "520 UI/L", ref: "140–280 UI/L", alt: true },
      { test: "Proteínas totais séricas", val: "6,8 g/dL", ref: "6,4–8,3 g/dL", alt: false },
      { test: "Albumina sérica", val: "3,1 g/dL", ref: "3,5–5,0 g/dL", alt: true },
      { test: "Glicemia", val: "102 mg/dL", ref: "70–99 mg/dL", alt: false },
      { test: "LÍQUIDO PLEURAL — Proteínas", val: "4,2 g/dL", ref: "—", alt: true },
      { test: "LÍQUIDO PLEURAL — DHL", val: "410 UI/L", ref: "—", alt: true },
      { test: "LÍQUIDO PLEURAL — Glicose", val: "48 mg/dL", ref: "—", alt: true },
      { test: "LÍQUIDO PLEURAL — Leucócitos", val: "4.800/mm³ (80% neutrófilos)", ref: "—", alt: true },
      { test: "LÍQUIDO PLEURAL — pH", val: "7,18", ref: "—", alt: true },
      { test: "LÍQUIDO PLEURAL — Coloração", val: "Amarelo turvo", ref: "—", alt: true }
    ],
    image: "RADIOGRAFIA DE TÓRAX PA: Velamento homogêneo do seio costofrênico direito com nível superior côncavo (curva de Damoiseau), compatível com derrame pleural de moderado volume à direita, estimado em aproximadamente 800 mL. Desvio discret do mediastino para a esquerda. Parênquima pulmonar esquerdo sem consolidações ou nódulos evidentes. Seios costofrênicos à esquerda livres. Área cardíaca nos limites superiores da normalidade (ICT 0,50). | ULTRASSONOGRAFIA DE TÓRAX (à beira leito): Coleção anecogênica com septos finos no hemitórax direito. Volume estimado compatível com radiografia. Marcação para toracocentese realizada.",
    note: "Estação sem ator. Entregar o impresso de sinais vitais e exame físico ao início da estação junto com os dados clínicos do caso. Entregar os resultados laboratoriais (sangue) quando o candidato os solicitar verbalmente. Entregar o resultado do líquido pleural somente após o candidato solicitar a toracocentese diagnóstica e interpretar a indicação corretamente. Entregar os laudos de imagem quando o candidato os solicitar.",
    patientProfile: "H.M., 58 anos, masculino. Motorista de caminhão autônomo, tabagista (40 anos-maço), hipertenso há 10 anos em uso de losartana 50 mg/dia. Mora com a esposa. Refere perda de peso de aproximadamente 6 kg nos últimos 3 meses.",
    script: [],
    hiddenInfo: "Perda de peso de 6 kg nos últimos 3 meses — dado presente no perfil do paciente, deve ser valorizado no raciocínio clínico sobre etiologia neoplásica. | Tabagismo pesado (40 anos-maço) — fator de risco para câncer de pulmão como causa do derrame.",
    actorBehavior: "Estação sem ator — não há paciente simulado. O candidato deve raciocinar com base nos dados clínicos, exame físico e exames complementares fornecidos nos impressos."
  },
  instC: {
    diagnosis: "Derrame pleural exsudativo à direita, de provável etiologia infecciosa/parapneumônica complicado (pH 7,18, glicose baixa, DHL elevado no líquido), com necessidade de drenagem torácica. Diagnóstico diferencial com neoplasia pulmonar deve ser investigado dado o contexto (tabagismo 40 anos-maço, perda de peso).",
    differentials: [
      "Derrame parapneumônico simples — excluído pelos critérios de Light (exsudato) e pela baixa glicose e pH ácido no líquido, que indicam derrame complicado",
      "Derrame pleural neoplásico — incluído como diferencial prioritário pelo tabagismo maciço, perda de peso de 6 kg e achados de exsudato; exige citologia oncótica do líquido e TC de tórax",
      "Derrame pleural por tuberculose — incluído pela epidemiologia brasileira; líquido com linfocitose seria mais sugestivo, mas a apresentação pode ser mista; exige ADA e cultura",
      "Transudato por insuficiência cardíaca — excluído pelos critérios de Light (proteínas e DHL do líquido elevados) e pela ausência de congestão pulmonar bilateral"
    ],
    context: "Paciente masculino, 58 anos, tabagista pesado, com derrame pleural moderado à direita de provável origem infecciosa complicada. Os critérios de Light confirmam exsudato, e o pH ácido com glicose baixa do líquido indicam necessidade de drenagem. O contexto de perda de peso e tabagismo exige investigação oncológica paralela.",
    justify: "Critérios de Light positivos (proteínas líquido/soro > 0,5 e DHL líquido/soro > 0,6), confirmando exsudato. pH < 7,20 e glicose < 60 mg/dL no líquido pleural são critérios para derrame parapneumônico complicado, indicando drenagem cirúrgica. Leucocitose com neutrofilia e PCR elevado reforçam processo infeccioso ativo. A perda de peso e o tabagismo maciço obrigam a investigação oncológica mesmo após resolução do quadro agudo.",
    expectedAnamnesis: "Caracterizar dispneia: início, progressão, ortopneia, posição de alívio | Caracterizar dor torácica: localização, irradiação, tipo (pleurítica?), intensidade | Febre e calafrios: duração e padrão | Tosse: produtiva ou seca, característica do escarro | Perda de peso: quantificar em kg e período | Tabagismo: carga tabágica em anos-maço | Comorbidades: HAS, DM, doença pulmonar prévia | Medicamentos em uso: losartana, AINEs, anticoagulantes | Exposição ocupacional: amianto, sílica (motorista de caminhão) | Histórico de neoplasia ou tuberculose prévia | Histórico familiar de neoplasia pulmonar | Contato com tuberculose",
    expectedPhysical: "Sinais vitais: avaliar taquicardia, taquipneia, febre e saturação de O₂ | Inspeção: expansibilidade torácica assimétrica (reduzida à direita), taquipneia, posição antálgica | Palpação: frêmito toracovocal abolido no hemitórax direito inferior — achado clássico de derrame | Percussão: macicez no hemitórax direito inferior — delimitar o nível do derrame | Ausculta: murmúrio vesicular abolido no hemitórax direito inferior; egofonia na borda superior do derrame | Cardiovascular: taquicardia, avaliar desvio de ictus (desvio mediastinal em grandes derrames) | MMII: edema (rastrear IC como causa)",
    expectedExams: [
      { exam: "Radiografia de tórax PA e perfil", justify: "Exame inicial de escolha para confirmar derrame pleural, estimar volume e avaliar desvio mediastinal", expected: "Velamento do seio costofrênico com curva de Damoiseau; desvio mediastinal contralateral em derrames volumosos" },
      { exam: "Ultrassonografia de tórax à beira leito", justify: "Superior à radiografia para quantificar e localizar o derrame, identificar septações e guiar toracocentese", expected: "Coleção anecogênica com ou sem septações; orientação para punção segura" },
      { exam: "Toracocentese diagnóstica com análise do líquido pleural", justify: "Essencial para caracterizar exsudato vs transudato (critérios de Light) e investigar etiologia", expected: "Proteínas, DHL, glicose, pH, celularidade, diferencial, cultura, ADA, citologia oncótica" },
      { exam: "Hemograma completo", justify: "Avaliar leucocitose (processo infeccioso), anemia (neoplasia)", expected: "Leucocitose com neutrofilia em parapneumônico; anemia em neoplasia" },
      { exam: "PCR e VHS", justify: "Marcadores inflamatórios para monitorar resposta ao tratamento", expected: "Elevados no processo infeccioso" },
      { exam: "Tomografia computadorizada de tórax com contraste", justify: "Investigar causa subjacente (neoplasia, pneumonia, abscessos), especialmente com tabagismo e perda de peso", expected: "Avaliar parênquima, mediastino, pleura e presença de nódulos ou massas" },
      { exam: "ADA (adenosina deaminase) no líquido pleural", justify: "Rastrear tuberculose pleural — epidemiologia brasileira exige", expected: "ADA > 40 U/L sugere tuberculose" },
      { exam: "Citologia oncótica do líquido pleural", justify: "Investigar neoplasia como causa do exsudato, especialmente com tabagismo e perda de peso", expected: "Células atípicas sugestivas de adenocarcinoma em derrame neoplásico" }
    ],
    expectedConduct: "Farmacológica: Antibioticoterapia empírica para derrame parapneumônico complicado — amoxicilina-clavulanato 875/125 mg VO a cada 12h (ambulatorial, se estável) OU ampicilina-sulbactam 3g IV a cada 6h (internação); avaliar espectro para anaeróbios; analgesia para dor pleurítica com dipirona 1g IV a cada 6h ou paracetamol 500mg VO a cada 6h; evitar AINEs por risco de mascarar evolução; anticoagulação profilática conforme risco tromboembólico | Não farmacológica: Drenagem torácica obrigatória no derrame parapneumônico complicado (pH < 7,20, glicose < 60 mg/dL, DHL > 1000 UI/L ou cultura positiva) — dreno torácico calibroso (28–32 Fr) em selo d'água; oxigenoterapia suplementar para manter SpO₂ > 94%; decúbito elevado | Encaminhamento: Cirurgia torácica se falha da drenagem em 48–72h, empiema loculado, paquipleurite ou fístula broncopleural; Pneumologia/Oncologia se investigação para neoplasia confirmar malignidade | Orientações ao paciente: Explicar necessidade de internação e drenagem; orientar sobre o procedimento; abordar investigação oncológica com linguagem acessível e empática dado o contexto de tabagismo e perda de peso | Seguimento: Radiografia de controle após drenagem; TC de tórax após resolução do quadro agudo para investigar causa subjacente; retorno em 7 dias após alta; sinais de alarme: piora da dispneia, febre persistente, dor intensa",
    expectedCommunication: "Apresentação: Identificar-se como médico responsável, explicar que irá analisar o caso e propor conduta | Comunicação do diagnóstico: Explicar em linguagem acessível que há líquido acumulado em volta do pulmão direito causando a falta de ar, que exames indicam infecção como causa provável e que um procedimento para drenar esse líquido será necessário | Escuta ativa: Reconhecer o desconforto respiratório do paciente; validar preocupações; explicar cada passo do plano diagnóstico e terapêutico; mencionar a necessidade de investigar outras causas (sem alarmismo excessivo sobre neoplasia antes da confirmação)",
    criticalErrors: [
      "Não realizar ou não indicar a toracocentese diagnóstica em derrame de volume moderado sem diagnóstico etiológico definido",
      "Classificar o derrame como transudato sem aplicar os critérios de Light — conduta incorreta levaria a tratamento inadequado",
      "Não indicar drenagem torácica em derrame parapneumônico complicado (pH < 7,20) — risco de evolução para empiema e sepse",
      "Não investigar etiologia neoplásica em paciente tabagista pesado com perda de peso e exsudato — omissão diagnóstica grave",
      "Prescrever AINEs para dor pleurítica em contexto de possível infecção — pode mascarar febre e sinais de evolução",
      "Não solicitar ADA do líquido pleural no contexto epidemiológico brasileiro — omissão de tuberculose como diagnóstico diferencial"
    ]
  },
  instD: {
    title: "CHECKLIST — DERRAME PLEURAL: DIAGNÓSTICO E CONDUTA",
    sections: [
      {
        h: "COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
        items: [
          { item: "Identificou-se como médico responsável pelo caso antes de iniciar a análise", score: 0.5, ref: "CFM Res. 2232/2019 — Direitos do paciente" },
          { item: "Demonstrou raciocínio organizado e sequencial, comunicando o plano de forma clara", score: 0.5, ref: "ABEM — Competências clínicas do internato, 2022" }
        ]
      },
      {
        h: "ANAMNESE E HISTÓRICO CLÍNICO",
        items: [
          { item: "Identificou dispneia progressiva com piora em decúbito (ortopneia) como sintoma cardinal", score: 0.5, ref: "Sociedade Brasileira de Pneumologia — Diretrizes em Derrame Pleural, 2021" },
          { item: "Identificou dor torácica pleurítica (localização, caráter, piora com inspiração) como dado relevante", score: 0.5, ref: "SBPT — Diretrizes em Derrame Pleural, 2021" },
          { item: "Identificou o tabagismo pesado (40 anos-maço) como fator de risco para neoplasia pulmonar", score: 1.0, ref: "INCA/MS — Tabagismo e câncer de pulmão, 2023" },
          { item: "Identificou a perda de peso de 6 kg nos últimos 3 meses como sinal de alarme para neoplasia", score: 1.0, ref: "SBPT — Diretrizes em Derrame Pleural, 2021; INCA, 2023" },
          { item: "Investigou febre, calafrios e sintomas de infecção como possível etiologia infecciosa", score: 0.5, ref: "SBPT — Diretrizes em Derrame Pleural, 2021" }
        ]
      },
      {
        h: "EXAME FÍSICO",
        items: [
          { item: "Identificou frêmito toracovocal abolido no hemitórax direito inferior como achado de derrame", score: 1.0, ref: "Semiologia Médica — Porto, 8ª ed., 2019" },
          { item: "Identificou macicez à percussão no hemitórax direito inferior delimitando o derrame", score: 0.5, ref: "Semiologia Médica — Porto, 8ª ed., 2019" },
          { item: "Identificou abolição do murmúrio vesicular no hemitórax direito inferior à ausculta", score: 0.5, ref: "Semiologia Médica — Porto, 8ª ed., 2019" },
          { item: "Valorizou a taquipneia (FR 24 irpm) e a baixa saturação (91%) como indicadores de gravidade", score: 0.5, ref: "SBPT — Diretrizes em Insuficiência Respiratória, 2020" }
        ]
      },
      {
        h: "RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO",
        items: [
          { item: "Aplicou os critérios de Light corretamente para classificar o derrame como exsudato (proteínas líquido/soro > 0,5 e DHL líquido/soro > 0,6)", score: 1.0, ref: "Light RW. Pleural diseases, 2013; SBPT, 2021" },
          { item: "Identificou o pH < 7,20 e glicose < 60 mg/dL como critérios de derrame parapneumônico complicado", score: 1.0, ref: "SBPT — Diretrizes em Derrame Pleural, 2021" },
          { item: "Solicitou ou indicou toracocentese diagnóstica com análise completa do líquido pleural", score: 0.5, ref: "SBPT — Diretrizes em Derrame Pleural, 2021" },
          { item: "Solicitou ou indicou TC de tórax para investigação etiológica (neoplasia/tuberculose)", score: 0.5, ref: "SBPT, 2021; INCA/MS, 2023" },
          { item: "Solicitou ou indicou ADA do líquido pleural para rastreio de tuberculose", score: 0.5, ref: "SBPT — Diretrizes em Tuberculose, 2022; MS/SUS" }
        ]
      },
      {
        h: "CONDUTA E ORIENTAÇÃO",
        items: [
          { item: "Indicou drenagem torácica para derrame parapneumônico complicado (pH < 7,20)", score: 1.0, ref: "SBPT — Diretrizes em Derrame Pleural, 2021; BTS Guidelines, 2010 ⚠️ referência internacional endossada pela SBPT" },
          { item: "Propôs antibioticoterapia adequada com cobertura para germes gram-positivos e anaeróbios", score: 0.5, ref: "MS/RENAME 2022; SBPT, 2021" },
          { item: "Indicou investigação oncológica (citologia do líquido, TC, encaminhamento) dado o contexto de tabagismo e perda de peso", score: 0.5, ref: "INCA/MS — Rastreamento câncer de pulmão, 2023; SBPT, 2021" }
        ]
      }
    ]
  }
},

{
  id: 2,
  title: "Cansaço, tosse seca e falta de ar há três semanas",
  sub: "Ambulatório de Pneumologia — Hospital Geral",
  tema: "Cirurgia",
  topic: "derrame pleural",
  level: "moderado",
  cardAccent: "#3B7DD8",
  instA: {
    scenario: "Ambulatório de Pneumologia de hospital geral. Turno matutino. Caso clínico escrito — sem ator.",
    patient: "L.F., 65 anos, feminino, aposentada, ex-tabagista (30 anos-maço, parou há 8 anos), sem comorbidades conhecidas.",
    complaint: "Tosse seca persistente, cansaço progressivo e falta de ar aos médios esforços há 3 semanas.",
    tasks: [
      "Analise o quadro clínico e formule hipóteses diagnósticas justificadas.",
      "Interprete os achados do exame físico e identifique os sinais compatíveis com a hipótese principal.",
      "Solicite e interprete os exames complementares necessários para elucidação diagnóstica.",
      "Aplique os critérios de Light ao líquido pleural fornecido e classifique o derrame.",
      "Proponha conduta inicial e indique o encaminhamento adequado conforme o diagnóstico."
    ]
  },
  instB: {
    vitals: {
      PA: "122/76 mmHg",
      FC: "88 bpm",
      FR: "20 irpm",
      Tax: "36,6°C",
      Peso: "58 kg",
      Altura: "1,60 m",
      IMC: "22,7 kg/m²"
    },
    physicalGeneral: "Paciente em bom estado geral, consciente, orientada, eupneica em repouso. Mucosas hipocoradas 2+/4+, anictérica, acianótica. Emagrecida. Saturação de O₂ de 94% em ar ambiente.",
    physicalSeg: "TÓRAX: Expansibilidade discretamente reduzida à esquerda. Frêmito toracovocal diminuído no terço inferior do hemitórax esquerdo. Percussão com submaciez no terço inferior esquerdo. Ausculta: murmúrio vesicular reduzido no terço inferior esquerdo, sem sibilos ou estertores. | CARDIOVASCULAR: Bulhas rítmicas normofonéticas, sem sopros. | ABDOME: Flácido, indolor, sem massas palpáveis, fígado no rebordo costal direito. | MMII: Sem edemas.",
    labs: [
      { test: "Hemoglobina", val: "9,4 g/dL", ref: "12,0–16,0 g/dL", alt: true },
      { test: "VCM", val: "82 fL", ref: "80–100 fL", alt: false },
      { test: "Leucócitos", val: "9.800/mm³", ref: "4.000–11.000/mm³", alt: false },
      { test: "Plaquetas", val: "420.000/mm³", ref: "150.000–400.000/mm³", alt: true },
      { test: "PCR", val: "22 mg/L", ref: "< 5 mg/L", alt: true },
      { test: "DHL sérico", val: "480 UI/L", ref: "140–280 UI/L", alt: true },
      { test: "Proteínas totais séricas", val: "6,5 g/dL", ref: "6,4–8,3 g/dL", alt: false },
      { test: "Albumina sérica", val: "2,8 g/dL", ref: "3,5–5,0 g/dL", alt: true },
      { test: "Creatinina", val: "0,9 mg/dL", ref: "0,7–1,2 mg/dL", alt: false },
      { test: "LÍQUIDO PLEURAL — Proteínas", val: "4,8 g/dL", ref: "—", alt: true },
      { test: "LÍQUIDO PLEURAL — DHL", val: "520 UI/L", ref: "—", alt: true },
      { test: "LÍQUIDO PLEURAL — Glicose", val: "62 mg/dL", ref: "—", alt: false },
      { test: "LÍQUIDO PLEURAL — pH", val: "7,32", ref: "—", alt: false },
      { test: "LÍQUIDO PLEURAL — Leucócitos", val: "1.200/mm³ (70% linfócitos)", ref: "—", alt: true },
      { test: "LÍQUIDO PLEURAL — Coloração", val: "Amarelo citrino", ref: "—", alt: false },
      { test: "LÍQUIDO PLEURAL — ADA", val: "14 U/L", ref: "< 40 U/L", alt: false },
      { test: "LÍQUIDO PLEURAL — Citologia oncótica", val: "Células atípicas com padrão sugestivo de adenocarcinoma", ref: "—", alt: true }
    ],
    image: "RADIOGRAFIA DE TÓRAX PA: Velamento do seio costofrênico esquerdo com nível superior côncavo, compatível com derrame pleural de pequeno a moderado volume à esquerda (estimado em 400–500 mL). Sem desvio mediastinal. Imagem nodular de contornos irregulares no lobo superior esquerdo, medindo aproximadamente 2,8 cm, com espiculação periférica — achado suspeito para neoplasia primária. | TOMOGRAFIA DE TÓRAX COM CONTRASTE: Nódulo espiculado de 2,8 cm no segmento apicoposterior do lobo superior esquerdo, com contornos irregulares e espiculação pleural. Derrame pleural esquerdo de moderado volume. Linfonodos mediastinais aumentados (estação 4L e 7), o maior medindo 1,4 cm. Sem metástases a distância identificadas neste exame.",
    note: "Estação sem ator. Entregar impresso com dados clínicos, sinais vitais e exame físico ao início. Entregar resultados de sangue quando solicitados. Entregar resultado do líquido pleural somente após o candidato indicar e justificar a toracocentese. Entregar laudos de imagem quando solicitados.",
    patientProfile: "L.F., 65 anos, feminino. Aposentada (ex-professora). Ex-tabagista (30 anos-maço, cessou há 8 anos). Viúva, mora com filha. Relata perda de peso de 8 kg nos últimos 2 meses. Sem uso regular de medicamentos.",
    script: [],
    hiddenInfo: "Perda de peso de 8 kg em 2 meses — dado crítico para suspeita de neoplasia; deve ser investigado ativamente. | Ex-tabagismo pesado (30 anos-maço) — mesmo cessando há 8 anos, permanece como fator de risco relevante para câncer de pulmão.",
    actorBehavior: "Estação sem ator — não há paciente simulado. O candidato deve raciocinar com base nos dados clínicos, exame físico e exames complementares fornecidos nos impressos."
  },
  instC: {
    diagnosis: "Derrame pleural exsudativo linfocítico à esquerda de etiologia neoplásica — adenocarcinoma de pulmão provável (nódulo espiculado 2,8 cm no LSE com linfonodomegalia mediastinal e citologia oncótica positiva).",
    differentials: [
      "Derrame pleural tuberculoso — excluído pela ADA negativa (< 40 U/L) e pela citologia oncótica positiva; permanece diferencial em contexto epidemiológico brasileiro até confirmação histológica",
      "Derrame parapneumônico — excluído pela ausência de febre, leucocitose significativa e pelo padrão linfocítico do líquido",
      "Derrame por linfoma — incluído como diferencial em exsudato linfocítico com linfonodomegalia mediastinal; exige imunofenotipagem do líquido ou biópsia linfonodal",
      "Mesotelioma pleural — diferencial em ex-tabagistas com derrame pleural recidivante; menos provável pela presença de nódulo pulmonar primário identificável"
    ],
    context: "Paciente feminina, 65 anos, ex-tabagista pesada, com derrame pleural exsudativo linfocítico à esquerda associado a nódulo pulmonar espiculado e linfonodomegalia mediastinal. Citologia oncótica positiva para adenocarcinoma. Quadro consistente com câncer de pulmão estágio IIIA ou superior.",
    justify: "Critérios de Light positivos (proteínas líquido/soro = 0,74 e DHL líquido/soro = 1,08), confirmando exsudato. Padrão linfocítico com ADA negativa afasta tuberculose como causa principal. Citologia oncótica positiva para adenocarcinoma fecha o diagnóstico de derrame neoplásico. A TC demonstra nódulo espiculado primário com linfonodomegalia mediastinal, compatível com adenocarcinoma de pulmão com comprometimento N2.",
    expectedAnamnesis: "Caracterizar tosse: duração, caráter (seca, produtiva), hemoptise | Caracterizar dispneia: progressão, esforço desencadeante | Perda de peso: quantificar e período | Tabagismo: carga, tempo de cessação | Dor torácica: localização, caráter | Sintomas constitucionais: sudorese noturna, febre | Histórico de exposição a amianto ou outros carcinógenos ocupacionais | Histórico familiar de neoplasia | Histórico pessoal de neoplasia prévia | Investigar rouquidão, disfagia (invasão mediastinal)",
    expectedPhysical: "Sinais vitais: avaliar saturação, taquicardia, emagrecimento | Inspeção: avaliar fácies caquética, dedos em baqueta de tambor, síndrome de Horner | Palpação: frêmito diminuído no hemitórax esquerdo inferior; pesquisar linfonodos cervicais e supraclaviculares | Percussão: submaciez no hemitórax esquerdo inferior | Ausculta: murmúrio vesicular reduzido; egofonia na borda superior do derrame | Abdome: hepatomegalia (metástases)",
    expectedExams: [
      { exam: "Radiografia de tórax PA", justify: "Primeiro exame para confirmar e localizar o derrame e identificar lesões pulmonares associadas", expected: "Velamento do seio costofrênico com nódulo associado suspeito" },
      { exam: "TC de tórax com contraste", justify: "Melhor avaliação do parênquima, mediastino e pleura; estadiamento local", expected: "Nódulo espiculado, linfonodomegalia mediastinal, derrame pleural" },
      { exam: "Toracocentese diagnóstica com análise completa do líquido", justify: "Classificar derrame e obter material para citologia oncótica e ADA", expected: "Exsudato linfocítico, citologia positiva para adenocarcinoma, ADA negativa" },
      { exam: "ADA do líquido pleural", justify: "Excluir tuberculose — diagnóstico diferencial obrigatório no Brasil", expected: "ADA < 40 U/L — afasta tuberculose" },
      { exam: "Citologia oncótica do líquido pleural", justify: "Confirmar etiologia neoplásica e orientar subtipo histológico", expected: "Células atípicas compatíveis com adenocarcinoma" },
      { exam: "PET-CT ou TC de abdome e pelve", justify: "Estadiamento sistêmico — avaliar metástases a distância (M1)", expected: "Identificar ou excluir metástases hepáticas, adrenais, ósseas ou cerebrais" },
      { exam: "Broncoscopia com biópsia ou biópsia guiada por TC", justify: "Confirmação histológica e molecular do tumor primário — necessária para definir tratamento", expected: "Adenocarcinoma; solicitar EGFR, ALK, ROS1, PDL-1 para terapia-alvo" }
    ],
    expectedConduct: "Farmacológica: Não iniciar quimioterapia sem confirmação histológica e estadiamento completo; analgesia para dor pleurítica; suporte nutricional; tromboprofilaxia (paciente oncológica com alto risco de TEV — enoxaparina conforme peso, RENAME 2022) | Não farmacológica: Toracocentese terapêutica se derrame sintomático (> 500 mL com dispneia); considerar pleurodese química (talco) se derrame recidivante e confirmação de malignidade; oxigenoterapia se SpO₂ < 94% | Encaminhamento: Oncologia para estadiamento e planejamento terapêutico (quimioterapia, imunoterapia, terapia-alvo conforme perfil molecular); Cirurgia Torácica para avaliação de ressecabilidade; Cuidados Paliativos conforme estadiamento | Orientações ao paciente: Explicar achados de forma clara e empática; comunicar necessidade de investigação adicional antes de qualquer conclusão definitiva; abordar rede de apoio familiar; não omitir a suspeita de neoplasia, mas evitar prognóstico antes do estadiamento completo | Seguimento: Retorno em 7–10 dias com resultado de biópsias; articular com oncologista responsável; abordar vontades do paciente e diretivas antecipadas de vontade conforme evolução",
    expectedCommunication: "Apresentação: Identificar-se, demonstrar acolhimento diante de um diagnóstico potencialmente grave | Comunicação do diagnóstico: Informar que os exames identificaram uma alteração pulmonar importante que precisa ser investigada com mais detalhes antes de qualquer conclusão; usar linguagem acessível; não usar termos como 'tumor maligno' sem confirmação histológica | Escuta ativa: Perguntar se a paciente deseja que algum familiar esteja presente; dar espaço para perguntas; validar emoções; não apressar a consulta",
    criticalErrors: [
      "Não solicitar citologia oncótica do líquido pleural em exsudato linfocítico com nódulo pulmonar associado — omissão diagnóstica grave",
      "Classificar o derrame como transudato sem aplicar os critérios de Light — erro de raciocínio clínico que leva a investigação incorreta",
      "Não solicitar ADA do líquido pleural — omissão de tuberculose como diferencial obrigatório no contexto brasileiro",
      "Iniciar tratamento oncológico sem confirmação histológica e estadiamento completo",
      "Não encaminhar para Oncologia e Cirurgia Torácica após identificação de nódulo espiculado com citologia positiva",
      "Comunicar diagnóstico definitivo de câncer ao paciente sem confirmação histológica — quebra de conduta ética e técnica"
    ]
  },
  instD: {
    title: "CHECKLIST — DERRAME PLEURAL DE ETIOLOGIA NEOPLÁSICA",
    sections: [
      {
        h: "COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
        items: [
          { item: "Demonstrou abordagem empática ao comunicar achados potencialmente graves", score: 0.5, ref: "CFM Res. 2232/2019; CREMESP — Comunicação de más notícias, 2020" },
          { item: "Propôs envolver familiar ou pessoa de confiança na consulta ao abordar diagnóstico oncológico suspeito", score: 0.5, ref: "CFM — Bioética e comunicação em oncologia, 2020" }
        ]
      },
      {
        h: "ANAMNESE E HISTÓRICO CLÍNICO",
        items: [
          { item: "Identificou e quantificou o tabagismo (carga em anos-maço) como fator de risco primário", score: 1.0, ref: "INCA/MS — Tabagismo e neoplasia pulmonar, 2023" },
          { item: "Identificou a perda de peso de 8 kg em 2 meses como sinal de alarme para neoplasia", score: 1.0, ref: "SBPT — Diretrizes em Derrame Pleural, 2021; INCA, 2023" },
          { item: "Investigou hemoptise, rouquidão e disfagia como sintomas de extensão local da neoplasia", score: 0.5, ref: "SBPT — Diretrizes em Câncer de Pulmão, 2022" },
          { item: "Investigou exposição a carcinógenos ocupacionais (amianto, sílica)", score: 0.5, ref: "SBPT, 2022; MS — Doenças relacionadas ao trabalho" }
        ]
      },
      {
        h: "EXAME FÍSICO",
        items: [
          { item: "Identificou frêmito toracovocal diminuído e submaciez no hemitórax esquerdo inferior como achados de derrame", score: 0.5, ref: "Semiologia Médica — Porto, 8ª ed., 2019" },
          { item: "Pesquisou linfonodos cervicais e supraclaviculares (rastreio de metástases ganglionares)", score: 1.0, ref: "SBPT — Diretrizes em Câncer de Pulmão, 2022" },
          { item: "Pesquisou dedos em baqueta de tambor e síndrome de Horner (manifestações paraneoplásicas)", score: 0.5, ref: "SBPT — Diretrizes em Câncer de Pulmão, 2022" }
        ]
      },
      {
        h: "RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO",
        items: [
          { item: "Aplicou os critérios de Light corretamente e classificou o derrame como exsudato", score: 1.0, ref: "Light RW. Pleural diseases, 2013 ⚠️; SBPT, 2021" },
          { item: "Indicou e justificou a toracocentese diagnóstica com solicitação de citologia oncótica", score: 1.0, ref: "SBPT — Diretrizes em Derrame Pleural, 2021" },
          { item: "Solicitou ADA do líquido pleural para excluir tuberculose", score: 0.5, ref: "SBPT — Diretrizes em Tuberculose, 2022; MS/SUS" },
          { item: "Indicou TC de tórax com contraste para estadiamento local da neoplasia", score: 0.5, ref: "SBPT — Diretrizes em Câncer de Pulmão, 2022" }
        ]
      },
      {
        h: "CONDUTA E ORIENTAÇÃO",
        items: [
          { item: "Não iniciou tratamento oncológico sem confirmação histológica — conduta correta", score: 0.5, ref: "SBPT — Diretrizes em Câncer de Pulmão, 2022; CFM" },
          { item: "Indicou encaminhamento para Oncologia e Cirurgia Torácica para estadiamento e definição terapêutica", score: 0.5, ref: "SBPT, 2022; MS — Linha de cuidado oncológico" },
          { item: "Indicou tromboprofilaxia com HBPM em paciente oncológica (alto risco de TEV)", score: 0.5, ref: "SBHH — Tromboprofilaxia em oncologia, 2022; RENAME 2022" }
        ]
      }
    ]
  }
},

{
  id: 3,
  title: "Febre vespertina, suor noturno e dor no peito há duas semanas",
  sub: "UBS — Atenção Primária à Saúde",
  tema: "Cirurgia",
  topic: "derrame pleural",
  level: "moderado",
  cardAccent: "#3B7DD8",
  instA: {
    scenario: "Unidade Básica de Saúde. Turno vespertino. Caso clínico escrito — sem ator.",
    patient: "R.S., 32 anos, masculino, auxiliar de pedreiro, não tabagista, sem comorbidades conhecidas.",
    complaint: "Febre no fim do dia, suor à noite e dor no lado direito do peito há cerca de 2 semanas.",
    tasks: [
      "Analise o quadro clínico apresentado e formule hipóteses diagnósticas justificadas.",
      "Interprete os achados do exame físico e identifique os sinais compatíveis com a hipótese principal.",
      "Solicite e interprete os exames complementares mais adequados, incluindo análise do líquido pleural.",
      "Aplique os critérios diagnósticos adequados ao líquido pleural e proponha diagnóstico etiológico.",
      "Proponha a conduta terapêutica e as medidas de vigilância epidemiológica obrigatórias."
    ]
  },
  instB: {
    vitals: {
      PA: "118/74 mmHg",
      FC: "96 bpm",
      FR: "22 irpm",
      Tax: "37,9°C",
      Peso: "62 kg",
      Altura: "1,70 m",
      IMC: "21,5 kg/m²"
    },
    physicalGeneral: "Paciente em regular estado geral, consciente, orientado, emagrecido, febril ao exame. Mucosas normocoradas, anictérico, acianótico. Saturação de O₂ de 95% em ar ambiente.",
    physicalSeg: "TÓRAX: Expansibilidade reduzida à direita. Frêmito toracovocal abolido no terço inferior do hemitórax direito. Percussão com macicez no terço inferior direito. Ausculta: murmúrio vesicular abolido no terço inferior direito; egofonia na borda superior do derrame. | CARDIOVASCULAR: Bulhas rítmicas normofonéticas, sem sopros. | ABDOME: Flácido, indolor à palpação, sem visceromegalias. | MMII: Sem edemas. | LINFONODOS: Cadeia cervical posterior com dois linfonodos palpáveis, móveis, indolores, medindo cerca de 1 cm.",
    labs: [
      { test: "Hemoglobina", val: "11,8 g/dL", ref: "13,5–17,5 g/dL", alt: true },
      { test: "Leucócitos", val: "10.200/mm³", ref: "4.000–11.000/mm³", alt: false },
      { test: "Linfócitos", val: "38%", ref: "20–40%", alt: false },
      { test: "VHS", val: "98 mm/h", ref: "< 15 mm/h", alt: true },
      { test: "PCR", val: "45 mg/L", ref: "< 5 mg/L", alt: true },
      { test: "DHL sérico", val: "390 UI/L", ref: "140–280 UI/L", alt: true },
      { test: "Proteínas totais séricas", val: "7,0 g/dL", ref: "6,4–8,3 g/dL", alt: false },
      { test: "Albumina sérica", val: "3,3 g/dL", ref: "3,5–5,0 g/dL", alt: true },
      { test: "Creatinina", val: "0,8 mg/dL", ref: "0,7–1,2 mg/dL", alt: false },
      { test: "HIV (ELISA)", val: "Não reagente", ref: "Não reagente", alt: false },
      { test: "LÍQUIDO PLEURAL — Proteínas", val: "4,6 g/dL", ref: "—", alt: true },
      { test: "LÍQUIDO PLEURAL — DHL", val: "480 UI/L", ref: "—", alt: true },
      { test: "LÍQUIDO PLEURAL — Glicose", val: "58 mg/dL", ref: "—", alt: false },
      { test: "LÍQUIDO PLEURAL — pH", val: "7,28", ref: "—", alt: false },
      { test: "LÍQUIDO PLEURAL — Leucócitos", val: "3.200/mm³ (85% linfócitos)", ref: "—", alt: true },
      { test: "LÍQUIDO PLEURAL — ADA", val: "68 U/L", ref: "< 40 U/L", alt: true },
      { test: "LÍQUIDO PLEURAL — Coloração", val: "Amarelo citrino claro", ref: "—", alt: false },
      { test: "LÍQUIDO PLEURAL — Citologia oncótica", val: "Negativa para células neoplásicas", ref: "—", alt: false },
      { test: "LÍQUIDO PLEURAL — Baciloscopia", val: "Negativa (BAAR ausente)", ref: "—", alt: false }
    ],
    image: "RADIOGRAFIA DE TÓRAX PA: Velamento do seio costofrênico direito com nível superior côncavo, compatível com derrame pleural de pequeno a moderado volume à direita (estimado em 300–400 mL). Sem desvio mediastinal. Parênquima pulmonar sem consolidações, cavitações ou infiltrados evidentes nos campos visíveis. Seio costofrênico esquerdo livre.",
    note: "Estação sem ator. Entregar impresso com dados clínicos, sinais vitais e exame físico ao início. Entregar resultados laboratoriais de sangue quando solicitados. Entregar resultado do líquido pleural somente após o candidato indicar e justificar a toracocentese. Entregar laudo da radiografia quando solicitado. Atentar se o candidato solicita sorologia HIV — fornecer o resultado como impresso adicional se solicitado.",
    patientProfile: "R.S., 32 anos, masculino. Auxiliar de pedreiro, solteiro, mora em habitação coletiva (cortiço) com outras 6 pessoas. Não tabagista. Refere perda de peso de 5 kg nos últimos 2 meses. Nega uso de drogas ilícitas. Nega contato conhecido com tuberculose, mas trabalha em ambiente fechado com muitas pessoas.",
    script: [],
    hiddenInfo: "Mora em cortiço com 6 pessoas em ambiente fechado — fator de risco para tuberculose; o candidato deve perguntar sobre condições de moradia. | Relata que um colega de trabalho foi diagnosticado com 'doença do pulmão' há 3 meses — contato provável com tuberculose; só revela se o candidato perguntar diretamente sobre contato com doentes respiratórios.",
    actorBehavior: "Estação sem ator — não há paciente simulado. O candidato deve raciocinar com base nos dados clínicos, exame físico e exames complementares fornecidos nos impressos."
  },
  instC: {
    diagnosis: "Pleurite tuberculosa (derrame pleural tuberculoso) — exsudato linfocítico com ADA > 40 U/L (68 U/L), baciloscopia negativa do líquido (esperada na maioria dos casos de pleurite TB), contexto epidemiológico compatível (moradia coletiva, contato provável, faixa etária, emagrecimento).",
    differentials: [
      "Derrame parapneumônico — excluído pelo padrão linfocítico do líquido, pH > 7,20, ausência de leucocitose neutrofílica significativa e ADA elevada",
      "Derrame pleural neoplásico — excluído pela citologia oncótica negativa, pela faixa etária e pela ADA fortemente positiva; porém ADA pode ser elevada em linfoma (considerar se não houver melhora com esquema TB)",
      "Derrame pleural por linfoma — diferencial em exsudato linfocítico com ADA elevada; menos provável pela ausência de linfadenopatia volumosa e pela epidemiologia de TB",
      "Derrame pleural viral (p. ex. pós-viral) — excluído pela elevação expressiva da ADA e pela duração e intensidade do quadro"
    ],
    context: "Paciente masculino jovem, 32 anos, morando em habitação coletiva, com quadro de febre vespertina, sudorese noturna, emagrecimento e derrame pleural exsudativo linfocítico à direita. ADA de 68 U/L confirma etiologia tuberculosa. Baciloscopia negativa do líquido é esperada na pleurite TB. HIV negativo.",
    justify: "Critérios de Light positivos confirmam exsudato. Padrão linfocítico com ADA > 40 U/L tem sensibilidade de 92% e especificidade de 90% para tuberculose pleural no contexto brasileiro (MS/SBPT). Baciloscopia negativa não exclui o diagnóstico — é negativa em 80–90% dos derrames tuberculosos. Quadro epidemiológico (moradia coletiva, contato provável, faixa etária 20–40 anos) reforça a hipótese. HIV negativo não exclui TB.",
    expectedAnamnesis: "Caracterizar febre: padrão vespertino, duração, termometria | Sudorese noturna: duração e intensidade | Tosse: duração, caráter, hemoptise | Perda de peso: quantificar | Condições de moradia: habitação coletiva, ventilação | Contato com tuberculose ou pessoa com tosse crônica | Histórico de TB prévia ou tratamento anterior | Sorologia HIV | Uso de imunossupressores | Vacinação BCG | Histórico familiar de TB",
    expectedPhysical: "Sinais vitais: febre vespertina, taquicardia, avaliar saturação | Inspeção: emagrecimento, expansibilidade assimétrica | Palpação: frêmito abolido no hemitórax direito inferior; pesquisar linfonodos cervicais e axilares | Percussão: macicez no hemitórax direito inferior | Ausculta: MV abolido + egofonia na borda do derrame | Pesquisar cicatriz de BCG",
    expectedExams: [
      { exam: "Toracocentese diagnóstica com análise completa", justify: "Essencial para classificar e elucidar etiologia do derrame", expected: "Exsudato linfocítico, ADA > 40 U/L, citologia negativa, baciloscopia geralmente negativa" },
      { exam: "ADA do líquido pleural", justify: "Principal marcador diagnóstico de tuberculose pleural — sensibilidade 92%, especificidade 90% no Brasil", expected: "ADA > 40 U/L confirma tuberculose pleural no contexto clínico adequado" },
      { exam: "Baciloscopia e cultura do líquido pleural para BAAR", justify: "Confirmação bacteriológica — cultura tem maior sensibilidade que baciloscopia", expected: "Baciloscopia geralmente negativa (80–90%); cultura positiva em 20–40% dos casos" },
      { exam: "Radiografia de tórax PA", justify: "Avaliar extensão do derrame e presença de lesões parenquimatosas associadas", expected: "Derrame pleural unilateral; parênquima pode ser normal na pleurite primária" },
      { exam: "Sorologia HIV", justify: "Comorbidade obrigatória a investigar em todo caso de tuberculose — impacta conduta", expected: "Não reagente neste caso" },
      { exam: "Teste tuberculínico (PPD) ou IGRA", justify: "Auxilia diagnóstico em contexto de incerteza, porém pode ser negativo na pleurite TB aguda", expected: "PPD ≥ 10 mm em imunocompetentes sugere infecção por M. tuberculosis" },
      { exam: "Escarro para baciloscopia e cultura (se tosse presente)", justify: "Investigar tuberculose pulmonar concomitante — importante para notificação e tratamento", expected: "Negativo na pleurite isolada; positivo em TB pulmonar associada" }
    ],
    expectedConduct: "Farmacológica: Esquema RHZE — Rifampicina 600 mg + Isoniazida 300 mg + Pirazinamida 2.000 mg + Etambutol 1.200 mg VO em jejum por 2 meses (fase intensiva), seguido de Rifampicina 600 mg + Isoniazida 300 mg por 4 meses (fase de manutenção) — total 6 meses; conforme Protocolo Nacional para o Controle da Tuberculose MS/SVS 2023; piridoxina 50 mg/dia junto com isoniazida para prevenção de neuropatia periférica; NÃO há indicação de drenagem torácica em pleurite TB simples sem empiema | Não farmacológica: Toracocentese terapêutica se dispneia importante (volume > 1 L); não realizar toracocentese de repetição em pleurite TB — o derrame resolve com o tratamento em 4–6 semanas; isolamento respiratório não é obrigatório na pleurite TB sem escarro positivo, mas deve ser avaliado | Encaminhamento: Notificação compulsória ao SINAN em até 24h — obrigatória por lei (Lei 6.259/1975 e Portaria MS 264/2020); Vigilância epidemiológica para investigação de contactantes; encaminhar ao serviço de referência em TB do município | Orientações ao paciente: Explicar a doença, o tratamento prolongado de 6 meses e a importância da adesão; orientar que interrupção gera resistência; orientar sobre efeitos adversos dos medicamentos (icterícia, alteração visual, formigamento); orientar sobre a necessidade de investigar os contactantes | Seguimento: Retorno em 30 dias para avaliação clínica e de efeitos adversos; acompanhamento mensal durante o tratamento; baciloscopia de controle conforme protocolo MS; alta por cura ao final de 6 meses com tratamento completo",
    expectedCommunication: "Apresentação: Identificar-se, criar vínculo e explicar os achados de forma clara | Comunicação do diagnóstico: Explicar em linguagem acessível que os exames indicam uma infecção no pulmão chamada tuberculose, que tem tratamento eficaz e gratuito pelo SUS; desmistificar o estigma | Escuta ativa: Perguntar sobre a situação de moradia e trabalho; envolver o paciente no plano terapêutico; reforçar que o tratamento é longo mas eficaz e que o paciente não estará sozinho",
    criticalErrors: [
      "Não solicitar ADA do líquido pleural — omissão do principal marcador diagnóstico de tuberculose pleural",
      "Não realizar notificação compulsória ao SINAN — obrigação legal em todo caso de tuberculose diagnosticado",
      "Iniciar esquema terapêutico incorreto ou incompleto (ex.: monoterapia, omitir etambutol na fase inicial) — risco de resistência",
      "Indicar drenagem torácica em pleurite TB sem critérios para empiema — procedimento desnecessário e com risco",
      "Não solicitar sorologia HIV em todo caso de tuberculose — omissão de comorbidade que altera conduta",
      "Não investigar ou notificar contactantes — falha de vigilância epidemiológica com risco de propagação"
    ]
  },
  instD: {
    title: "CHECKLIST — DERRAME PLEURAL TUBERCULOSO",
    sections: [
      {
        h: "COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
        items: [
          { item: "Abordou o paciente de forma acolhedora, sem estigmatizar o diagnóstico de tuberculose", score: 0.5, ref: "MS/SVS — Protocolo Nacional de Controle da Tuberculose, 2023" },
          { item: "Explicou o diagnóstico e o tratamento em linguagem acessível, sem jargões técnicos", score: 0.5, ref: "CFM Res. 2232/2019" }
        ]
      },
      {
        h: "ANAMNESE E HISTÓRICO CLÍNICO",
        items: [
          { item: "Identificou o padrão de febre vespertina e sudorese noturna como sintomas constitucionais clássicos de tuberculose", score: 1.0, ref: "MS/SVS — Protocolo Nacional de Controle da Tuberculose, 2023" },
          { item: "Investigou condições de moradia (habitação coletiva, ventilação inadequada) como fator de risco para TB", score: 0.5, ref: "MS/SVS — Protocolo Nacional de Controle da Tuberculose, 2023" },
          { item: "Investigou contato com pessoa com tuberculose ou tosse crônica", score: 1.0, ref: "MS/SVS, 2023; SBPT — Diretrizes em Tuberculose, 2022" },
          { item: "Solicitou ou investigou sorologia HIV em paciente com diagnóstico de tuberculose", score: 0.5, ref: "MS/SVS, 2023; SBPT, 2022" }
        ]
      },
      {
        h: "EXAME FÍSICO",
        items: [
          { item: "Identificou frêmito toracovocal abolido e macicez no hemitórax direito inferior como achados de derrame", score: 0.5, ref: "Semiologia Médica — Porto, 8ª ed., 2019" },
          { item: "Pesquisou linfonodos cervicais e axilares (manifestação extrapulmonar da TB)", score: 0.5, ref: "SBPT — Diretrizes em Tuberculose, 2022" },
          { item: "Identificou e valorizou o emagrecimento (5 kg em 2 meses) como sinal constitucional relevante", score: 0.5, ref: "MS/SVS — Protocolo Nacional de Controle da Tuberculose, 2023" }
        ]
      },
      {
        h: "RACIOCÍNIO CLÍNICO E INVESTIGAÇÃO",
        items: [
          { item: "Indicou toracocentese diagnóstica com solicitação específica de ADA do líquido pleural", score: 1.0, ref: "SBPT — Diretrizes em Tuberculose Pleural, 2022; MS/SVS, 2023" },
          { item: "Interpretou a ADA > 40 U/L como critério diagnóstico de tuberculose pleural no contexto clínico adequado", score: 1.0, ref: "SBPT, 2022; MS/SVS, 2023" },
          { item: "Aplicou os critérios de Light e classificou o derrame como exsudato linfocítico", score: 0.5, ref: "Light RW. Pleural diseases ⚠️; SBPT, 2021" }
        ]
      },
      {
        h: "CONDUTA E ORIENTAÇÃO",
        items: [
          { item: "Prescreveu esquema RHZE correto: Rifampicina + Isoniazida + Pirazinamida + Etambutol por 2 meses, seguido de RH por 4 meses", score: 1.0, ref: "MS/SVS — Protocolo Nacional de Controle da Tuberculose, 2023; RENAME 2022" },
          { item: "Realizou ou indicou notificação compulsória ao SINAN em até 24 horas", score: 1.0, ref: "Portaria MS 264/2020; Lei 6.259/1975" },
          { item: "Orientou sobre adesão ao tratamento de 6 meses e risco de resistência por abandono", score: 0.5, ref: "MS/SVS — Protocolo Nacional de Controle da Tuberculose, 2023" }
        ]
      }
    ]
  }
},



]

export default ctoracica;