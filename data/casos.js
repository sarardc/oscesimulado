// Estações 1–29 (nefrologia/urologia, endocrinologia e psiquiatria).
// Formato atual: roteiro do paciente em instB.script, gabarito em instC.expected*,
// checklist pontuado em instD.sections e material de estudo em instD.study.

const urologyStations = [
  // ── ESTAÇÃO 1: ITU Simples (Mulher jovem, UBS) ─
  {
    id: 1,
    title: "Ardência para urinar há 3 dias",
    sub: "UBS — Atenção Primária",
    tema: "Nefrologia",
    topic: "itu",
    level: "fácil",
    cardAccent: "#4f9cf9",
    instA: {
      scenario: "Unidade Básica de Saúde (UBS), atendimento de demanda espontânea. Turno da manhã.",
      patient: "J.S., 26 anos, feminino, professora, sem comorbidades conhecidas.",
      complaint: "Paciente refere ardência ao urinar e vontade frequente de ir ao banheiro há 3 dias. Nega febre.",
      tasks: [
        "Realizar anamnese completa e dirigida à queixa urinária",
        "Solicitar exame físico pertinente ao caso",
        "Formular hipóteses diagnósticas e diagnósticos diferenciais",
        "Solicitar exames complementares adequados e interpretar os resultados",
        "Estabelecer conduta terapêutica baseada em protocolos do MS/SUS",
        "Orientar a paciente sobre o diagnóstico, tratamento e prevenção",
        "Comunicar-se de forma empática e em linguagem acessível",
      ],
    },
    instB: {
      vitals: {
        PA: "112/72 mmHg",
        FC: "78 bpm",
        FR: "16 irpm",
        Tax: "36.8°C",
        Peso: "58 kg",
        Altura: "1.62 m",
        IMC: "22.1 kg/m²",
      },
      physicalGeneral: "Paciente em bom estado geral, corada, hidratada, anictérica, afebril ao toque.",
      physicalSeg: [
        "ABDOME: Plano, macio, sem visceromegalias. Dor leve à palpação profunda em hipogastro. Sem defesa. Punho-percussão lombar bilateral NEGATIVA.",
        "GENITÁLIA EXTERNA: Sem sinais de corrimento, eritema ou lesões visíveis. Meato uretral sem secreção.",
        "MAMAS: Simétricas, sem nódulos ou descarga papilar.",
        "MEMBROS: Sem edema.",
      ],
      labs: [
        { test: "Urina tipo 1 — Leucocitúria", val: "++ (15-20 leucócitos/campo)", ref: "< 5/campo", alt: true },
        { test: "Urina tipo 1 — Nitrito", val: "POSITIVO", ref: "Negativo", alt: true },
        { test: "Urina tipo 1 — Hematúria", val: "+ (3-5 hemácias/campo)", ref: "< 2/campo", alt: true },
        { test: "Urina tipo 1 — Proteinúria", val: "Traços", ref: "Negativo", alt: false },
        { test: "Urina tipo 1 — pH", val: "6.0", ref: "4.5–8.0", alt: false },
        {
          test: "Urocultura (coleta na consulta)",
          val: "Aguardando resultado (48-72h)",
          ref: "< 10³ UFC/mL",
          alt: false,
        },
        { test: "Beta-HCG urinário", val: "NEGATIVO", ref: "Negativo", alt: false },
        { test: "Hemograma — Leucócitos totais", val: "9.200/mm³", ref: "4.000–11.000/mm³", alt: false },
      ],
      image: null,
      note: "Urocultura: encaminhe resultado em 48-72h. Se o candidato não solicitar urocultura, ofereça apenas o EAS.",
      patientProfile: "Professora de 26 anos, passa o dia em sala de aula, bebe pouca água e segura a urina por horas. Parceiro fixo, usa preservativo de forma irregular, anticoncepcional oral. Teve dois episódios parecidos no último ano, tratados com antibiótico. Refere alergia a penicilina na infância (manchas pelo corpo).",
      script: [
        {
          trigger: "Queixa principal",
          speech: "Doutora(o), tô sentindo uma ardência muito chata pra urinar faz três dias. Fica aquela vontade o tempo todo, mas quando vou, sai pouco e ainda dói. Tá me atrapalhando até de trabalhar.",
        },
        { trigger: "Sobre febre ou calafrios", speech: "Não, febre não tive não. Nem calafrio." },
        {
          trigger: "Sobre dor lombar ou nas costas",
          speech: "Não, nas costas não dói não. É mais aqui embaixo da barriga.",
        },
        {
          trigger: "Sobre a cor da urina",
          speech: "Ontem notei que tava um pouquinho mais escura que o normal, mas hoje tá melhor.",
        },
        { trigger: "Sobre náusea ou vômito", speech: "Não, tô bem nesse sentido." },
        { trigger: "Sobre corrimento vaginal", speech: "Não, tô normal nessa parte." },
        {
          trigger: "Sobre atividade sexual e preservativo",
          speech: "Tenho parceiro fixo. A gente usa camisinha às vezes, mas não sempre.",
        },
        { trigger: "Sobre data da última menstruação", speech: "Foi há umas duas semanas, tô regular." },
        { trigger: "Sobre uso de anticoncepcional", speech: "Uso anticoncepcional oral, tomo direitinho." },
        {
          trigger: "Sobre episódios anteriores",
          speech: "Já tive isso umas duas vezes antes, no ano passado e no começo desse ano. Tomei um antibiótico e passou.",
        },
        {
          trigger: "Sobre antecedentes médicos e cirúrgicos",
          speech: "Não tenho nenhuma doença, nunca operei nada.",
        },
        {
          trigger: "Sobre alergias",
          speech: "Alergia a penicilina? Sim, tomei quando criança e fiquei toda manchada. O médico falou que era alergia.",
        },
        {
          trigger: "Sobre hidratação e hábitos",
          speech: "Eu bebo pouca água, confesso. Fico o dia todo na sala de aula e às vezes seguro o xixi por horas.",
        },
        { trigger: "Pergunta ativa — diagnóstico", speech: "O que eu tenho, doutora(o)? É grave?" },
        {
          trigger: "Pergunta ativa — tratamento",
          speech: "Vou precisar tomar antibiótico de novo? Tem algum jeito de não ficar repetindo tanto?",
        },
      ],
      hiddenInfo: [
        "Alergia a penicilina — só conta se perguntarem sobre alergias",
        "Episódios anteriores de cistite (2 no último ano) — só se perguntarem",
        "Baixa ingesta hídrica e hábito de reter urina — só se perguntarem sobre hábitos",
        "Uso irregular de preservativo — só se perguntarem sobre vida sexual",
      ],
      actorBehavior: "Colaborativa e um pouco incomodada com os sintomas. Preocupada em não faltar ao trabalho. Ao final, pergunta se vai precisar de antibiótico de novo e como evitar novas crises.",
    },
    instC: {
      diagnosis: "Infecção do Trato Urinário Baixo Não Complicada (Cistite Aguda)",
      differentials: [
        "Pielonefrite aguda — sai: sem febre, sem dor lombar e punho-percussão negativa",
        "Uretrite por IST (clamídia/gonococo) — menos provável: sem corrimento uretral ou vaginal e EAS com nitrito positivo",
        "Vaginite/vulvovaginite — sai: sem corrimento, prurido ou alterações ao exame da genitália",
        "Gravidez com sintomas urinários — afastada pelo beta-HCG negativo",
      ],
      context: "Mulher jovem, imunocompetente, sem fatores de risco para complicação (sem gravidez, sem diabetes, sem anomalia urológica, sem cateterismo, sem internação recente). Apresentação clássica de cistite aguda com disúria, polaciúria e ausência de febre. EAS confirma infecção com leucocitúria, nitrito positivo e hematúria leve.",
      justify: "Critérios preenchidos: sintomas clássicos de ITU baixa (disúria + polaciúria) + EAS alterado (leucocitúria ++ e nitrito positivo) + ausência de sinais sistêmicos. Diagnóstico clínico-laboratorial.",
      expectedAnamnesis: [
        "Investigar características da disúria e frequência (início, intensidade, polaciúria)",
        "Pesquisar sintomas de ITU alta: febre, calafrios, dor lombar, náuseas/vômitos",
        "Investigar hematúria, aspecto e odor da urina",
        "Perguntar sobre antecedentes ginecológicos: DUM, corrimento, atividade sexual, preservativo, IST",
        "Pesquisar fatores de risco: episódios anteriores, uso de antibióticos, alergias (inclui penicilina)",
        "Investigar hábitos: ingesta hídrica, higiene, retenção urinária",
      ],
      expectedPhysical: ["Solicitar exame físico com ênfase em abdome e punho-percussão lombar bilateral"],
      expectedExams: [
        {
          exam: "Urina tipo 1 (EAS)",
          justify: "Confirmar infecção urinária",
          expected: "Leucocitúria, nitrito positivo e hematúria leve",
        },
        { exam: "Beta-HCG", justify: "Excluir gravidez antes de escolher o antibiótico", expected: "Negativo" },
        {
          exam: "Urocultura com antibiograma",
          justify: "ITU de repetição (3º episódio em pouco mais de um ano)",
          expected: "Resultado em 48–72 h; orientar retorno",
        },
      ],
      expectedConduct: [
        "Antibiótico de 1ª linha sem betalactâmico de penicilina (alergia relatada): nitrofurantoína 100 mg VO 6/6h por 5–7 dias ou fosfomicina trometamol 3 g VO dose única",
        "Analgesia urinária se necessário (fenazopiridina por até 2 dias) e antitérmico/analgésico simples",
        "Aumentar a ingesta hídrica, não reter urina, urinar após a relação sexual",
        "Retorno com urocultura; orientar sinais de alarme de pielonefrite (febre, dor lombar, vômitos)",
        "Investigar ITU de repetição se ≥3 episódios/ano",
      ],
      expectedCommunication: [
        "Apresenta-se pelo nome e função ao iniciar a consulta",
        "Usar linguagem acessível, sem termos técnicos sem explicação",
        "Demonstrar empatia e escuta ativa (não interrompe, mantém contato visual)",
        "Informar o diagnóstico e orienta a paciente de forma clara ao final",
      ],
      criticalErrors: [
        "Não investigar alergia a antibióticos e prescrever amoxicilina (penicilina) para paciente que relata alergia",
        "Tratar ITU alta suspeita (febre + dor lombar) com esquema oral curto de cistite",
        "Diagnosticar pielonefrite sem sinais sistêmicos presentes (febre, dor lombar, náuseas)",
        "Não solicitar beta-HCG em mulher em idade fértil antes de prescrever antibiótico",
        "Prescrever quinolona como primeira linha sem justificativa (fluoroquinolonas não são 1ª linha para cistite simples pelo MS)",
      ],
    },
    instD: {
      title: "ITU Não Complicada — Cistite Aguda",
      sections: [
        {
          h: "BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
          items: [
            {
              item: "Apresenta-se pelo nome e função ao iniciar a consulta",
              score: 0.5,
              ref: "MS. PCDT Infecções do Trato Urinário, 2023",
            },
            {
              item: "Usa linguagem acessível, sem termos técnicos sem explicação",
              score: 0.5,
              ref: "MS. PCDT Infecções do Trato Urinário, 2023",
            },
            {
              item: "Demonstra empatia e escuta ativa (não interrompe, mantém contato visual)",
              score: 0.5,
              ref: "MS. PCDT Infecções do Trato Urinário, 2023",
            },
            {
              item: "Informa o diagnóstico e orienta a paciente de forma clara ao final",
              score: 0.5,
              ref: "MS. PCDT Infecções do Trato Urinário, 2023",
            },
          ],
        },
        {
          h: "BLOCO 2 — ANAMNESE",
          items: [
            {
              item: "Investiga características da disúria e frequência (início, intensidade, polaciúria)",
              score: 0.5,
              ref: "MS. PCDT Infecções do Trato Urinário, 2023",
            },
            {
              item: "Pesquisa sintomas de ITU alta: febre, calafrios, dor lombar, náuseas/vômitos",
              score: 0.5,
              ref: "MS. PCDT Infecções do Trato Urinário, 2023",
            },
            {
              item: "Investiga hematúria, aspecto e odor da urina",
              score: 0.3,
              ref: "MS. PCDT Infecções do Trato Urinário, 2023",
            },
            {
              item: "Pergunta sobre antecedentes ginecológicos: DUM, corrimento, atividade sexual, preservativo, IST",
              score: 0.5,
              ref: "MS. PCDT Infecções do Trato Urinário, 2023",
            },
            {
              item: "Pesquisa fatores de risco: episódios anteriores, uso de antibióticos, alergias (inclui penicilina)",
              score: 0.5,
              ref: "MS. PCDT Infecções do Trato Urinário, 2023",
            },
            {
              item: "Investiga hábitos: ingesta hídrica, higiene, retenção urinária",
              score: 0.2,
              ref: "MS. PCDT Infecções do Trato Urinário, 2023",
            },
          ],
        },
        {
          h: "BLOCO 3 — INVESTIGAÇÃO DIAGNÓSTICA",
          items: [
            {
              item: "Solicita exame físico com ênfase em abdome e punho-percussão lombar bilateral",
              score: 0.5,
              ref: "MS. PCDT Infecções do Trato Urinário, 2023",
            },
            { item: "Solicita EAS / Urina tipo 1", score: 0.5, ref: "MS. PCDT Infecções do Trato Urinário, 2023" },
            {
              item: "Solicita beta-HCG (para excluir gravidez em mulher em idade fértil)",
              score: 0.5,
              ref: "MS. PCDT Infecções do Trato Urinário, 2023",
            },
            {
              item: "Interpreta corretamente o EAS (leucocitúria + nitrito positivo = cistite)",
              score: 0.5,
              ref: "MS. PCDT Infecções do Trato Urinário, 2023",
            },
          ],
        },
        {
          h: "BLOCO 4 — RACIOCÍNIO CLÍNICO",
          items: [
            {
              item: "Formula hipótese de ITU baixa / cistite aguda não complicada",
              score: 1,
              ref: "MS. PCDT Infecções do Trato Urinário, 2023",
            },
            {
              item: "Exclui ITU alta (pielonefrite) corretamente com base nos achados",
              score: 0.5,
              ref: "MS. PCDT Infecções do Trato Urinário, 2023",
            },
          ],
        },
        {
          h: "BLOCO 5 — CONDUTA",
          items: [
            {
              item: "Prescreve antibiótico de primeira linha correto (evitando penicilina — reconhece a alergia relatada)",
              score: 0.5,
              ref: "MS. PCDT Infecções do Trato Urinário, 2023",
            },
            {
              item: "Orienta duração correta do antibiótico (3-7 dias)",
              score: 0.3,
              ref: "MS. PCDT Infecções do Trato Urinário, 2023",
            },
            {
              item: "Orienta medidas não farmacológicas: aumento de ingesta hídrica, higiene perineal, não reter urina, urinar após relação sexual",
              score: 0.5,
              ref: "MS. PCDT Infecções do Trato Urinário, 2023",
            },
            {
              item: "Solicita urocultura ou orienta sobre retorno com o resultado",
              score: 0.3,
              ref: "MS. PCDT Infecções do Trato Urinário, 2023",
            },
            {
              item: "Agenda retorno e orienta sinais de alarme para pielonefrite",
              score: 0.4,
              ref: "MS. PCDT Infecções do Trato Urinário, 2023",
            },
          ],
        },
      ],
      study: [
        {
          h: "Definição e Epidemiologia",
          body: "<p>A infecção do trato urinário (ITU) é uma das infecções bacterianas mais frequentes na prática clínica, responsável por cerca de 25% das consultas de atenção primária em mulheres. Afeta predominantemente mulheres na proporção de 30:1 em relação a homens na faixa dos 20–50 anos. É classificada como <strong>não complicada</strong> quando ocorre em mulher adulta, não grávida, imunocompetente, sem anomalia urológica, sem cateter vesical e sem internação recente.</p>\n        <p><strong>Agentes etiológicos mais frequentes (Brasil/SUS):</strong></p>\n        <ul><li><em>Escherichia coli</em> (80–85% dos casos)</li><li><em>Staphylococcus saprophyticus</em> (5–15%, comum em mulheres jovens sexualmente ativas)</li><li><em>Klebsiella pneumoniae, Proteus mirabilis</em> (menos frequentes)</li></ul>",
        },
        {
          h: "Quadro Clínico",
          body: "<ul><li><strong>Disúria</strong>: ardência ou dor ao urinar (sintoma cardinal)</li><li><strong>Polaciúria</strong>: aumento da frequência urinária com pequenos volumes</li><li><strong>Urgência miccional</strong>: vontade imperiosa de urinar</li><li><strong>Hematúria macroscópica ou microscópica</strong>: presente em ~40% dos casos</li><li><strong>Ausência de febre e dor lombar</strong>: distingue de pielonefrite</li><li><strong>Desconforto suprapúbico</strong></li></ul>\n        <p>⚠ <strong>Sinais de ALARME para ITU alta (pielonefrite):</strong> febre ≥38°C, calafrios, dor lombar/costovertebral, náuseas/vômitos, prostração. Nesses casos, NÃO tratar como cistite simples.</p>",
        },
        {
          h: "Diagnóstico",
          body: "<p><strong>Diagnóstico é CLÍNICO-LABORATORIAL.</strong> Em mulher jovem com sintomas típicos (≥2 sintomas clássicos), o VPP é >90% e pode-se iniciar tratamento sem exames.</p>\n        <p><strong>EAS / Urina tipo 1:</strong></p>\n        <ul><li>Leucocitúria ≥5 leucócitos/campo (sensibilidade 80–95%)</li><li>Nitrito positivo (bactérias gram-negativas; sensibilidade 50%, especificidade 95%)</li><li>Hematúria leve frequentemente associada</li></ul>\n        <p><strong>Urocultura:</strong> indicada em ITU recorrente (≥3 episódios/ano), gravidez, ITU complicada, falha terapêutica, pielonefrite. <em>Não é obrigatória para cistite simples de primeiro episódio.</em></p>\n        <p><strong>Beta-HCG:</strong> obrigatório em mulheres em idade fértil antes de prescrever antibiótico.</p>",
        },
        {
          h: "Tratamento — 1ª Linha (MS/SUS / RENAME)",
          body: "\n        <div class=\"drug-box\"><strong>Nitrofurantoína 100mg</strong> (macrocristais) — VO — 12/12h — 5 a 7 dias<br><em>1ª escolha pelo MS. Menor resistência. Não usar se TFG &lt; 30 mL/min.</em></div>\n        <div class=\"drug-box\"><strong>Fosfomicina trometamol 3g</strong> — VO — dose única<br><em>Alta adesão. Disponível em UBS. Excelente opção.</em></div>\n        <div class=\"drug-box\"><strong>Sulfametoxazol + Trimetoprim (SMX-TMP) 800/160mg</strong> — VO — 12/12h — 3 dias<br><em>Usar apenas se resistência local &lt;20%. No Brasil, resistência crescente da E. coli.</em></div>\n        <p class=\"mt-10\"><strong>NÃO usar como 1ª linha:</strong> Fluoroquinolonas (ciprofloxacino), Amoxicilina isolada, Cefalexina. Reservar para casos específicos com urocultura.</p>\n        <p><strong>Alergia a penicilina:</strong> uso de nitrofurantoína ou fosfomicina é seguro (sem cross-reatividade).</p>",
        },
        {
          h: "Medidas Não Farmacológicas",
          body: "<ul><li>Ingesta hídrica ≥2L/dia</li><li>Urinar após relação sexual</li><li>Higiene perineal correta (frente para trás)</li><li>Evitar retenção urinária prolongada</li><li>Evitar duchas vaginais</li><li>Trocar calcinha de algodão (evitar sintéticos)</li></ul>",
        },
        {
          h: "Critérios de Encaminhamento / Internação",
          body: "<ul><li>ITU complicada: gestante, imunocomprometida, anomalia urológica, cateter</li><li>Pielonefrite com critérios de internação (vômitos, febre alta, sepse)</li><li>ITU recorrente (≥3 episódios/ano): encaminhar para investigação urológica</li><li>Falha terapêutica após 48-72h: urocultura + ajuste por antibiograma</li></ul>",
        },
        {
          h: "Armadilhas Comuns no OSCE",
          body: "\n        <div class=\"pitfall\">Esquecer de investigar alergia medicamentosa ANTES de prescrever antibiótico.</div>\n        <div class=\"pitfall\">Não solicitar beta-HCG em mulher em idade fértil — gestação muda completamente a conduta.</div>\n        <div class=\"pitfall\">Diagnosticar pielonefrite sem febre ou dor lombar — confundir disúria + desconforto suprapúbico com dor lombar.</div>\n        <div class=\"pitfall\">Prescrever fluoroquinolona (ciprofloxacino) como 1ª linha — reservada para casos específicos, não para cistite simples.</div>\n        <div class=\"pitfall\">Não orientar medidas preventivas — ponto frequentemente cobrado em OSCE.</div>\n        <div class=\"pitfall\">Não investigar IST como diagnóstico diferencial em mulher sexualmente ativa (uretrite por Chlamydia pode mimetizar cistite).</div>",
        },
        {
          h: "Referências",
          body: "<ul class=\"ref-list\"><li>Ministério da Saúde. Protocolo Clínico e Diretrizes Terapêuticas — Infecções do Trato Urinário. Brasília: MS, 2023.</li><li>Sociedade Brasileira de Infectologia (SBI). Diretrizes para ITU, 2022.</li><li>SBU — Sociedade Brasileira de Urologia. Urologia Brasil, 2022.</li><li>UpToDate: Acute simple cystitis in adult and adolescent females. 2024.</li><li>RENAME 2022 — Relação Nacional de Medicamentos Essenciais. Ministério da Saúde.</li></ul>",
        },
      ],
    },
  },

  // ── ESTAÇÃO 2: Pielonefrite (Mulher adulta, PS) ─
  {
    id: 2,
    title: "Dor nas costas, febre e mal-estar há 2 dias",
    sub: "Pronto-Socorro — Urgência",
    tema: "Nefrologia",
    topic: "itu",
    level: "moderado",
    cardAccent: "#4f9cf9",
    instA: {
      scenario: "Pronto-socorro de hospital de médio porte. Triagem de risco moderado (amarelo).",
      patient: "R.O., 34 anos, feminino, auxiliar de enfermagem, G1P1, sem comorbidades.",
      complaint: "Paciente refere febre alta, calafrios e dor intensa no lado direito das costas há 2 dias. Associa ardência ao urinar e náuseas. Nega gravidez.",
      tasks: [
        "Realizar anamnese completa e dirigida à queixa atual.",
        "Solicitar exame físico pertinente.",
        "Solicitar e interpretar exames laboratoriais e de imagem adequados.",
        "Formular hipótese diagnóstica e diagnósticos diferenciais.",
        "Definir conduta adequada.",
        "Orientar a paciente sobre o diagnóstico e seguimento.",
      ],
    },
    instB: {
      vitals: {
        PA: "98/62 mmHg",
        FC: "112 bpm",
        FR: "22 irpm",
        Tax: "39.2°C",
        Peso: "62 kg",
        Altura: "1.65 m",
        IMC: "22.8 kg/m²",
      },
      physicalGeneral: "Paciente em estado geral regular, corada, hidratada, anictérica, febril, taquicárdica, com fácies de dor.",
      physicalSeg: [
        "ABDOME: Plano, doloroso à palpação profunda em flanco e fossa ilíaca direita. Sem defesa ou rigidez.",
        "PUNHO-PERCUSSÃO LOMBAR: POSITIVA à direita (dor intensa).",
        "GENITÁLIA EXTERNA: Sem alterações. Sem corrimento vaginal.",
        "MEMBROS: Sem edema. TEC < 3s.",
        "NEUROLÓGICO: Orientada, responsiva. SNC sem alterações focais.",
      ],
      labs: [
        { test: "Hemograma — Leucócitos totais", val: "18.500/mm³", ref: "4.000–11.000", alt: true },
        { test: "Hemograma — Neutrófilos", val: "85% (desvio à esquerda)", ref: "55–65%", alt: true },
        { test: "PCR", val: "148 mg/L", ref: "< 5 mg/L", alt: true },
        { test: "Creatinina", val: "1.4 mg/dL", ref: "0.5–1.1 mg/dL", alt: true },
        { test: "Ureia", val: "42 mg/dL", ref: "17–42 mg/dL", alt: false },
        { test: "Sódio", val: "136 mEq/L", ref: "135–145", alt: false },
        { test: "Potássio", val: "4.1 mEq/L", ref: "3.5–5.0", alt: false },
        { test: "Lactato", val: "2.3 mmol/L", ref: "< 2.0 mmol/L", alt: true },
        { test: "Urina tipo 1 — Leucocitúria", val: "+++ (> 50/campo)", ref: "< 5/campo", alt: true },
        { test: "Urina tipo 1 — Nitrito", val: "POSITIVO", ref: "Negativo", alt: true },
        { test: "Urina tipo 1 — Cilindros leucocitários", val: "PRESENTES", ref: "Ausente", alt: true },
        { test: "Urocultura", val: "Coletada — resultado em 48-72h", ref: "< 10³ UFC/mL", alt: false },
        { test: "Hemocultura (2 amostras)", val: "Coletadas — resultado em 48-72h", ref: "Negativo", alt: false },
        { test: "Beta-HCG", val: "NEGATIVO", ref: "Negativo", alt: false },
      ],
      image: {
        title: "Ultrassonografia de Rins e Vias Urinárias",
        report: "LAUDO — ULTRASSONOGRAFIA DE RINS E VIAS URINÁRIAS\n        \nRim direito: dimensões aumentadas (13,8 cm), com ecotextura heterogênea, edema difuso do parênquima. Sem dilatação pielocalicial. Sem cálculos identificados.\n        \nRim esquerdo: dimensões normais (11,2 cm), ecotextura homogênea preservada.\n\nBexiga: paredes espessadas (>3mm), com conteúdo urinário normal.\n\nCONCLUSÃO: Achados compatíveis com pielonefrite aguda à direita. Sem evidência de abscesso perirrenal ou hidronefrose. Sem litíase identificada.",
      },
      patientProfile: "Auxiliar de enfermagem de 34 anos, G1P1, sem doenças crônicas, sem uso de medicamentos e sem alergias conhecidas. Parceiro fixo, usa preservativo. Já teve duas cistites sem febre. Está assustada porque trabalha na área da saúde e sabe que 'infecção pode ficar grave'.",
      script: [
        {
          trigger: "Queixa principal",
          speech: "Tô muito mal, doutor(a). Faz dois dias que tenho febre alta, calafrio, e essa dor nas costas do lado direito tá me matando. Fica pior quando me mexo.",
        },
        {
          trigger: "Sobre ardência urinária",
          speech: "Sim, tô sentindo ardência pra urinar também, e vou ao banheiro mais vezes que o normal.",
        },
        {
          trigger: "Sobre a intensidade da febre",
          speech: "Medi em casa, deu 39,4°C ontem à noite. Tomei dipirona e baixou um pouco, mas voltou.",
        },
        {
          trigger: "Sobre náuseas e vômitos",
          speech: "Tô enjoada o tempo todo. Ontem vomitei duas vezes. Não consigo comer quase nada.",
        },
        {
          trigger: "Sobre possível gravidez / DUM",
          speech: "Não, não estou grávida, fiz o teste agora há pouco. Menstruei há 3 semanas.",
        },
        {
          trigger: "Sobre episódios anteriores de infecção urinária",
          speech: "Já tive cistite antes, umas 2 vezes, mas nunca assim, com febre e essa dor nas costas.",
        },
        {
          trigger: "Sobre antecedentes médicos",
          speech: "Não tenho nenhuma doença crônica. Não operei nada. Não uso remédio regular. Não tenho alergia a remédio que eu saiba.",
        },
        {
          trigger: "Sobre vida sexual e ISTs",
          speech: "Tenho parceiro fixo, a gente usa preservativo. Nunca tive DST.",
        },
        {
          trigger: "Pergunta ativa — diagnóstico",
          speech: "O que eu tenho, doutor(a)? É sério? Vou precisar ficar internada?",
        },
        {
          trigger: "Pergunta ativa — se falarem em sepse",
          speech: "Meu Deus, sepse? Mas eu tava bem anteontem. Por que ficou tão grave?",
        },
      ],
      hiddenInfo: [
        "Vomitou duas vezes ontem e não consegue comer — só se perguntarem sobre náuseas/vômitos",
        "Febre de 39,4 °C medida em casa, que volta após dipirona — só se perguntarem sobre a febre",
        "Cistites anteriores sem febre — só se perguntarem sobre episódios prévios",
      ],
      actorBehavior: "Prostrada, com dor e calafrios. Responde com frases curtas. Fica ansiosa se ouvir a palavra 'sepse' e pergunta se vai precisar ficar internada.",
    },
    instC: {
      diagnosis: "Pielonefrite Aguda com critérios de internação (sepse urinária incipiente)",
      differentials: [
        "Cistite aguda — sai: febre alta, calafrios, dor lombar e Giordano positivo indicam ITU alta",
        "Litíase urinária com infecção (pielonefrite obstrutiva) — excluída pela ausência de cálculo e de hidronefrose na USG",
        "Abscesso renal/perirrenal — sem coleção na USG",
        "Doença inflamatória pélvica — sem corrimento, dor à mobilização do colo ou fatores de risco",
        "Apendicite aguda retrocecal — dor em flanco direito; EAS muito alterado e Giordano positivo favorecem foco urinário",
      ],
      context: "Mulher jovem com síndrome clínica de ITU alta: febre ≥38°C, calafrios, dor lombar com giordano positivo, associada a leucocitúria intensa, PCR elevado, leucocitose com desvio, e creatinina levemente elevada. PA baixa-normal, taquicardia e lactato discretamente elevado apontam para sepse urinária incipiente (qSOFA ≥2: FR≥22 + PA sistólica ≤100 + alteração de consciência ausente → qSOFA=2). Indicação de internação para antibiótico EV, hidratação e monitorização.",
      justify: "Pielonefrite aguda confirmada por: clínica típica + EAS com ++ leucocitúria + cilindros leucocitários + USG com alterações renais. Sepse urinária: FC>100, FR>22, PA<100, lactato >2.",
      expectedAnamnesis: [
        "Investigar características da febre (início, magnitude, padrão, calafrios)",
        "Investigar dor lombar: lado, intensidade, irradiação, fatores de piora",
        "Pesquisar sintomas de ITU baixa associados (disúria, polaciúria)",
        "Investigar náuseas e vômitos (impede tratamento oral)",
        "Pesquisar antecedentes: episódios anteriores, alergias, gestação",
      ],
      expectedPhysical: [
        "Solicitar exame físico completo com giordano e sinais vitais",
        "Avaliar critérios de sepse (qSOFA: FR, PA, Glasgow)",
        "Interpreta corretamente a instabilidade hemodinâmica (taquicardia + PA bordeline)",
      ],
      expectedExams: [
        {
          exam: "Urina tipo 1 e urocultura com antibiograma",
          justify: "Confirmar ITU e guiar o antibiótico",
          expected: "Leucocitúria intensa, nitrito positivo, cilindros leucocitários",
        },
        {
          exam: "Hemoculturas (2 amostras) antes do antibiótico",
          justify: "Suspeita de sepse urinária",
          expected: "Coletadas; resultado em 48–72 h",
        },
        {
          exam: "Hemograma, PCR, creatinina, ureia, eletrólitos e lactato",
          justify: "Avaliar gravidade e disfunção orgânica",
          expected: "Leucocitose com desvio, PCR alta, creatinina 1,4 e lactato 2,3",
        },
        { exam: "Beta-HCG", justify: "Mulher em idade fértil: muda antibiótico e conduta", expected: "Negativo" },
        {
          exam: "USG de rins e vias urinárias",
          justify: "Excluir obstrução e abscesso",
          expected: "Rim direito aumentado e edemaciado, sem hidronefrose ou cálculo",
        },
      ],
      expectedConduct: [
        "Internação (vômitos e sinais de sepse impedem tratamento oral)",
        "Culturas e, em seguida, antibiótico EV em até 1 hora: ceftriaxona 1–2 g EV 1x/dia",
        "Hidratação venosa com cristaloide (SF 0,9% ou Ringer lactato) e reavaliação hemodinâmica",
        "Antitérmico, analgesia e antiemético",
        "Transição para via oral guiada pelo antibiograma após 24–48 h afebril; tempo total de 7–14 dias",
      ],
      expectedCommunication: [
        "Apresenta-se e acolhe a paciente em sofrimento com empatia",
        "Explicar o diagnóstico e a necessidade de internação de forma clara",
        "Usar linguagem acessível, sem jargão",
        "Verificar o entendimento e esclarecer dúvidas",
      ],
      criticalErrors: [
        "Liberar a paciente com antibiótico oral sem reconhecer os critérios de internação (sepse urinária)",
        "Iniciar antibiótico EV antes de coletar hemocultura — perder janela de diagnóstico microbiológico",
        "Não investigar obstrução das vias urinárias (cálculo, tumor) que pode causar pielonefrite complicada",
        "Não dosar creatinina em paciente com suspeita de sepse (risco de IRA)",
        "Não calcular qSOFA / não reconhecer taquicardia e PA baixa como sinais de gravidade",
      ],
    },
    instD: {
      title: "Pielonefrite Aguda e Sepse Urinária",
      sections: [
        {
          h: "BLOCO 1 — COMUNICAÇÃO",
          items: [
            {
              item: "Apresenta-se e acolhe a paciente em sofrimento com empatia",
              score: 0.5,
              ref: "MS. PCDT Infecções do Trato Urinário, 2023",
            },
            {
              item: "Explica o diagnóstico e a necessidade de internação de forma clara",
              score: 0.5,
              ref: "MS. PCDT Infecções do Trato Urinário, 2023",
            },
          ],
        },
        {
          h: "BLOCO 2 — ANAMNESE",
          items: [
            {
              item: "Investiga características da febre (início, magnitude, padrão, calafrios)",
              score: 0.5,
              ref: "MS. PCDT Infecções do Trato Urinário, 2023",
            },
            {
              item: "Investiga dor lombar: lado, intensidade, irradiação, fatores de piora",
              score: 0.5,
              ref: "MS. PCDT Infecções do Trato Urinário, 2023",
            },
            {
              item: "Pesquisa sintomas de ITU baixa associados (disúria, polaciúria)",
              score: 0.3,
              ref: "MS. PCDT Infecções do Trato Urinário, 2023",
            },
            {
              item: "Investiga náuseas e vômitos (impede tratamento oral)",
              score: 0.3,
              ref: "MS. PCDT Infecções do Trato Urinário, 2023",
            },
            {
              item: "Pesquisa antecedentes: episódios anteriores, alergias, gestação",
              score: 0.4,
              ref: "MS. PCDT Infecções do Trato Urinário, 2023",
            },
          ],
        },
        {
          h: "BLOCO 3 — AVALIAÇÃO DE SEPSE / EXAME FÍSICO",
          items: [
            {
              item: "Solicita exame físico completo com giordano e sinais vitais",
              score: 0.5,
              ref: "MS. PCDT Infecções do Trato Urinário, 2023",
            },
            {
              item: "Avalia critérios de sepse (qSOFA: FR, PA, Glasgow)",
              score: 0.5,
              ref: "MS. PCDT Infecções do Trato Urinário, 2023",
            },
            {
              item: "Interpreta corretamente a instabilidade hemodinâmica (taquicardia + PA bordeline)",
              score: 0.5,
              ref: "MS. PCDT Infecções do Trato Urinário, 2023",
            },
          ],
        },
        {
          h: "BLOCO 4 — INVESTIGAÇÃO DIAGNÓSTICA",
          items: [
            {
              item: "Solicita EAS/urina tipo 1 e urocultura",
              score: 0.5,
              ref: "MS. PCDT Infecções do Trato Urinário, 2023",
            },
            {
              item: "Solicita hemograma, PCR, creatinina, eletrólitos, lactato",
              score: 0.5,
              ref: "MS. PCDT Infecções do Trato Urinário, 2023",
            },
            {
              item: "Solicita hemocultura (2 amostras antes de antibiótico)",
              score: 0.5,
              ref: "MS. PCDT Infecções do Trato Urinário, 2023",
            },
            {
              item: "Solicita USG de rins e vias urinárias",
              score: 0.3,
              ref: "MS. PCDT Infecções do Trato Urinário, 2023",
            },
            {
              item: "Formula hipótese de pielonefrite com sepse urinária",
              score: 1,
              ref: "MS. PCDT Infecções do Trato Urinário, 2023",
            },
          ],
        },
        {
          h: "BLOCO 5 — CONDUTA",
          items: [
            {
              item: "Indica internação hospitalar (não trata ambulatorialmente)",
              score: 0.5,
              ref: "MS. PCDT Infecções do Trato Urinário, 2023",
            },
            {
              item: "Inicia antibiótico EV (ceftriaxona 1-2g/dia EV ou ciprofloxacino EV se beta-lactâmico contraindicado)",
              score: 0.5,
              ref: "MS. PCDT Infecções do Trato Urinário, 2023",
            },
            {
              item: "Prescreve hidratação venosa (SF 0,9% ou RL)",
              score: 0.4,
              ref: "MS. PCDT Infecções do Trato Urinário, 2023",
            },
            {
              item: "Prescreve analgesia/antipirético (dipirona ou paracetamol)",
              score: 0.3,
              ref: "MS. PCDT Infecções do Trato Urinário, 2023",
            },
            {
              item: "Programa transição para VO após afebril 24-48h e melhora clínica",
              score: 0.3,
              ref: "MS. PCDT Infecções do Trato Urinário, 2023",
            },
          ],
        },
      ],
      study: [
        {
          h: "Definição e Classificação",
          body: "<p>Pielonefrite aguda (PNA) é a infecção bacteriana do parênquima e da pelve renal, configurando <strong>ITU alta</strong>. É considerada <strong>complicada</strong> quando associada a: gestação, diabetes, imunossupressão, anomalia urológica, obstrução, cateter, instrumentação recente ou sexo masculino.</p>\n        <p><strong>Sepse urinária:</strong> resposta inflamatória sistêmica desencadeada por foco urinário. Diagnosticada pelo qSOFA (≥2): FR ≥22, PA sistólica ≤100, alteração do nível de consciência.</p>",
        },
        {
          h: "Quadro Clínico",
          body: "<ul><li><strong>Tríade clássica:</strong> febre ≥38°C + calafrios + dor lombar unilateral (ângulo costovertebral)</li><li>Giordano (punho-percussão lombar): positivo no lado afetado</li><li>Sintomas de cistite associados em ~50%: disúria, polaciúria</li><li>Náuseas e vômitos (impedem tratamento oral)</li><li>Prostração, mal-estar geral</li></ul>",
        },
        {
          h: "Diagnóstico e Exames",
          body: "<p><strong>Laboratoriais:</strong> EAS (leucocitúria intensa, cilindros leucocitários são patognomônicos), urocultura, hemocultura (2 amostras — 15–20% positivas), hemograma, PCR/VHS, creatinina, eletrólitos, lactato.</p>\n        <p><strong>Imagem:</strong> USG de rins e vias urinárias para excluir obstrução/abscesso. TC preferível em falha terapêutica após 72h.</p>",
        },
        {
          h: "Tratamento",
          body: "<p><strong>Critérios de internação:</strong> vômitos (impossibilidade de VO), sepse/choque, gravidez, imunossupressão, falha ambulatorial, idoso, anomalia urológica.</p>\n        <div class=\"drug-box\"><strong>Ambulatorial (caso leve, sem vômitos):</strong><br>Ciprofloxacino 500mg VO 12/12h por 7-10 dias, OU<br>SMX-TMP 800/160mg VO 12/12h por 14 dias (se sensível)</div>\n        <div class=\"drug-box\"><strong>Hospitalar (EV — 1ª linha):</strong><br>Ceftriaxona 1-2g IV/IM 1x/dia por 10-14 dias<br>Ciprofloxacino 400mg EV 12/12h (se alergia a cefalosporina)<br>Transição para VO após 24-48h afebril e tolerância oral</div>\n        <p><strong>Sempre:</strong> hidratação, analgesia, antitérmico. Ajustar antibiótico conforme antibiograma em 48-72h.</p>",
        },
        {
          h: "Armadilhas Comuns no OSCE",
          body: "\n        <div class=\"pitfall\">Tratar pielonefrite com nitrofurantoína — não atinge concentração adequada no parênquima renal. CONTRAINDICADA para PNA.</div>\n        <div class=\"pitfall\">Não coletar hemocultura antes do antibiótico — perda de informação microbiológica crucial.</div>\n        <div class=\"pitfall\">Liberar paciente com vômitos em tratamento oral — impossibilidade de absorção do antibiótico.</div>\n        <div class=\"pitfall\">Não aplicar qSOFA e não reconhecer sepse urinária — conduta inapropriada no PS.</div>\n        <div class=\"pitfall\">Confundir cilindros leucocitários com leucocitúria simples — cilindros são patognomônicos de infecção renal.</div>",
        },
        {
          h: "Referências",
          body: "<ul class=\"ref-list\"><li>Ministério da Saúde. PCDT — Infecções do Trato Urinário. Brasília, 2023.</li><li>Surviving Sepsis Campaign Guidelines, 2021.</li><li>SBU — Diretrizes em Urologia, 2022.</li><li>UpToDate: Acute complicated urinary tract infections in adults. 2024.</li></ul>",
        },
      ],
    },
  },

  // ── ESTAÇÃO 3: Litíase Urinária — Cólica Renal (Mulher jovem, PS) ─
  {
    id: 3,
    title: "Dor intensa no lado direito que irradia para a virilha",
    sub: "Pronto-Socorro — Urgência",
    tema: "Nefrologia",
    topic: "litíase",
    level: "moderado",
    cardAccent: "#38d9a9",
    instA: {
      scenario: "Pronto-socorro de hospital geral. A paciente está visivelmente agitada e com fácies de dor, alternando entre sentar e deitar.",
      patient: "M.S., 24 anos, feminino, solteira, estudante universitária.",
      complaint: "Dor intensa no lado direito da barriga, de início súbito há cerca de 24 horas, que irradia para a virilha. Não consegue ficar parada.",
      tasks: [
        "Realizar anamnese completa e dirigida ao caso",
        "Solicitar e interpretar o exame físico",
        "Formular hipóteses diagnósticas e diferencias relevantes",
        "Solicitar exames laboratoriais pertinentes",
        "Solicitar exames de imagem adequados e interpretar resultados",
        "Definir hipótese diagnóstica final",
        "Indicar analgesia e conduta terapêutica",
        "Orientar a paciente para prevenção de novos episódios",
      ],
    },
    instB: {
      vitals: {
        PA: "124/80 mmHg",
        FC: "104 bpm",
        FR: "20 irpm",
        Tax: "37.1°C",
        Peso: "57 kg",
        Altura: "1.63 m",
        IMC: "21.4 kg/m²",
      },
      physicalGeneral: "Paciente em regular estado geral, agitada, em posição antálgica, com fácies de dor intensa. Afebril.",
      physicalSeg: [
        "ABDOME: Plano, tenso pela dor, doloroso à palpação profunda em flanco e fossa ilíaca direita. Sem defesa ou rigidez. Peristaltismo presente.",
        "PUNHO-PERCUSSÃO LOMBAR (GIORDANO): POSITIVO à direita. Negativo à esquerda.",
        "GENITÁLIA EXTERNA: Sem corrimento vaginal. Sem lesões.",
        "MEMBROS: Sem edema. Perfusão periférica preservada.",
      ],
      labs: [
        { test: "Hemograma — Leucócitos", val: "11.200/mm³", ref: "4.000–11.000", alt: true },
        { test: "PCR", val: "18 mg/L", ref: "< 5 mg/L", alt: true },
        { test: "Creatinina", val: "0.9 mg/dL", ref: "0.5–1.1 mg/dL", alt: false },
        { test: "Sódio", val: "138 mEq/L", ref: "135–145", alt: false },
        { test: "Potássio", val: "3.8 mEq/L", ref: "3.5–5.0", alt: false },
        { test: "Urina tipo 1 — Hematúria", val: "+++ (> 50 hemácias/campo)", ref: "< 2/campo", alt: true },
        { test: "Urina tipo 1 — Leucocitúria", val: "Traços (2-3/campo)", ref: "< 5/campo", alt: false },
        { test: "Urina tipo 1 — Nitrito", val: "NEGATIVO", ref: "Negativo", alt: false },
        { test: "Beta-HCG urinário", val: "NEGATIVO", ref: "Negativo", alt: false },
      ],
      image: {
        title: "Exames de Imagem",
        report: "ULTRASSOM DE ABDOME TOTAL:\nHidronefrose à direita, sem evidência de fator obstrutivo identificável pelo método de imagem. Sem outros achados anormais.\n\n─────────────────────────────────────────\n\nTOMOGRAFIA COMPUTADORIZADA DE ABDOME SEM CONTRASTE:\nHidronefrose à direita, visualizando-se cálculo de 10 mm em junção ureterovesical.\nSem outros achados anormais.\n\nCONCLUSÃO: Ureterolitíase à direita com cálculo de 10 mm em JUV — indicação de avaliação urológica urgente.",
      },
      patientProfile: "Estudante universitária de 24 anos, passa o dia estudando e bebe pouca água. Sem doenças, sem medicamentos, sem alergias. Pai teve 'pedra no rim'. Teve uma dor parecida, mais fraca, no passado, que passou sozinha.",
      script: [
        {
          trigger: "Queixa principal",
          speech: "Doutor(a), tô sentindo uma dor horrível aqui no lado direito da barriga que começou do nada umas 24 horas atrás. Tá me matando. Fica como uma cólica que vai e vem, mas não passa. Irradia lá pra virilha e parte interna da coxa.",
        },
        {
          trigger: "Sobre intensidade da dor",
          speech: "Nossa, é 9 de 10. Não consigo nem ficar parada. Fico tentando achar uma posição mas não tem jeito.",
        },
        { trigger: "Sobre febre e calafrios", speech: "Não tenho febre não. Controlei em casa, tava normal." },
        {
          trigger: "Sobre disúria ou urgência urinária",
          speech: "Não, não sinto ardência pra urinar, nem urgência. Não tô indo mais que o normal ao banheiro.",
        },
        {
          trigger: "Sobre a urina",
          speech: "Quando a dor começou eu percebi que a urina tava avermelhada, com sangue. Fiquei com muito medo.",
        },
        { trigger: "Sobre náuseas", speech: "Sim, tô enjoada, mas não vomitei ainda." },
        {
          trigger: "Sobre episódio parecido anteriormente",
          speech: "Já tive uma dorzinha parecida uma vez, mas bem mais fraca. Passou sozinha. Nunca fiz exame pra isso.",
        },
        {
          trigger: "Sobre corrimento vaginal ou dor pélvica",
          speech: "Não, tudo normal nessa parte. Sem corrimento, sem dor na relação.",
        },
        { trigger: "Sobre data da última menstruação", speech: "Menstruei há 7 dias, normal." },
        {
          trigger: "Sobre antecedentes médicos",
          speech: "Não tenho doença nenhuma. Nunca operei. Não tomo nenhum remédio. Não tenho alergia que eu saiba.",
        },
        {
          trigger: "Sobre histórico familiar de cálculo renal",
          speech: "Meu pai teve pedra no rim uma vez, mas nunca conversamos direito sobre isso.",
        },
        {
          trigger: "Sobre hábitos",
          speech: "Bebo muito pouco líquido. Fico o dia todo estudando e às vezes esqueço de tomar água.",
        },
        {
          trigger: "Pergunta ativa — diagnóstico",
          speech: "O que eu tenho, doutor(a)? É pedra no rim? Vai precisar operar?",
        },
        { trigger: "Pergunta ativa — prevenção", speech: "Como eu faço pra não ter isso de novo? É muito sofrido." },
      ],
      hiddenInfo: [
        "Urina avermelhada desde o início da dor — só se perguntarem sobre a urina",
        "Pai com cálculo renal — só se perguntarem sobre história familiar",
        "Episódio prévio de dor semelhante — só se perguntarem",
        "Baixa ingesta de líquidos — só se perguntarem sobre hábitos",
      ],
      actorBehavior: "Inquieta, muda de posição o tempo todo por causa da dor (não consegue ficar parada). Fala com dificuldade nos picos de cólica. Pede alívio da dor antes de tudo.",
    },
    instC: {
      diagnosis: "Ureterolitíase / Litíase Urinária com cálculo de 10mm em junção ureterovesical direita",
      differentials: [
        "Apendicite aguda — dor em fossa ilíaca direita, mas o padrão em cólica com irradiação para a virilha e a hematúria intensa favorecem cálculo",
        "Gravidez ectópica — excluída pelo beta-HCG negativo",
        "Torção ou cisto ovariano roto — sem dor pélvica ou alterações anexiais; considerar se a imagem não mostrar cálculo",
        "Pielonefrite aguda — sem febre, sem disúria e EAS sem leucocitúria significativa ou nitrito",
        "Doença inflamatória pélvica — sem corrimento ou dor à mobilização do colo",
      ],
      context: "Mulher jovem, sem comorbidades, com quadro clássico de cólica renal: dor em flanco de início súbito, cólica com irradiação para virilha, hematúria macroscópica e agitação psicomotora. Cálculo de 10mm em JUV: baixa probabilidade de eliminação espontânea (<10% para cálculos >8mm), indicando avaliação urológica urgente para terapia ativa.",
      justify: "Diagnóstico por: clínica típica de cólica renal + hematúria no EAS + hidronefrose ao USG + cálculo em JUV à TC sem contraste (padrão-ouro).",
      expectedAnamnesis: [
        "Investigar características da dor: local, tipo cólica, intensidade, irradiação, início súbito",
        "Investigar manifestações associadas: náuseas/vômitos, febre, disúria, polaciúria, urgência miccional, hematúria",
        "Investigar antecedentes ginecológicos: corrimento, DUM, atividade sexual, IST",
        "Pesquisar antecedentes: episódios anteriores, história familiar, hábitos (ingesta hídrica)",
      ],
      expectedPhysical: ["Solicitar e interpreta exame físico (giordano, abdome)"],
      expectedExams: [
        {
          exam: "Urina tipo 1",
          justify: "Hematúria apoia litíase; avaliar infecção associada",
          expected: "Hematúria intensa sem leucocitúria significativa e nitrito negativo",
        },
        {
          exam: "Beta-HCG",
          justify: "Excluir gravidez (ectópica) antes de imagem e medicação",
          expected: "Negativo",
        },
        {
          exam: "Hemograma, PCR, creatinina e eletrólitos",
          justify: "Função renal e sinais de infecção",
          expected: "Leucocitose discreta, PCR baixa, creatinina normal",
        },
        {
          exam: "TC de abdome sem contraste (padrão-ouro)",
          justify: "Confirmar cálculo, tamanho e localização",
          expected: "Cálculo de 10 mm na junção ureterovesical direita com hidronefrose",
        },
        {
          exam: "USG de rins e vias urinárias",
          justify: "Alternativa sem radiação; mostra hidronefrose",
          expected: "Hidronefrose à direita",
        },
      ],
      expectedConduct: [
        "Analgesia: AINE (cetoprofeno 100 mg EV ou diclofenaco 75 mg IM) + dipirona; opioide se dor refratária",
        "Antiemético se necessário; hidratação sem hiper-hidratação",
        "Cálculo de 10 mm: baixa chance de eliminação espontânea — encaminhar à urologia para terapia ativa (ureteroscopia/litotripsia)",
        "Se aguardar: terapia expulsiva com tansulosina 0,4 mg/dia e coar a urina",
        "Sinais de alarme: febre, anúria ou dor incontrolável → retorno imediato",
        "Prevenção: ingesta hídrica para diurese > 2 L/dia, reduzir sal e proteína animal",
      ],
      expectedCommunication: [
        "Apresenta-se, acolhe a paciente em sofrimento com empatia",
        "Informar o diagnóstico e orienta de forma clara",
        "Usar linguagem acessível, sem jargão",
        "Verificar o entendimento e esclarecer dúvidas",
      ],
      criticalErrors: [
        "Não solicitar beta-HCG em mulher em idade fértil — gravidez ectópica pode mimetizar cólica renal com hematúria",
        "Usar apenas USG sem TC — USG não visualizou o cálculo neste caso; TC é padrão-ouro e imprescindível",
        "Prescrever antibiótico sem evidência de infecção — leucocitúria estava normal e nitrito negativo",
        "Liberar a paciente sem analgesia adequada — cólica renal é emergência analgésica",
        "Não encaminhar para urologia — cálculo de 10mm em JUV tem <10% de chance de eliminação espontânea e necessita de intervenção",
      ],
    },
    instD: {
      title: "Litíase Urinária — Ureterolitíase / Cólica Renal",
      sections: [
        {
          h: "BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
          items: [
            {
              item: "Apresenta-se, acolhe a paciente em sofrimento com empatia",
              score: 0.5,
              ref: "SBU. Diretrizes de Urolitíase, 2022",
            },
            {
              item: "Informa o diagnóstico e orienta de forma clara",
              score: 0.5,
              ref: "SBU. Diretrizes de Urolitíase, 2022",
            },
          ],
        },
        {
          h: "BLOCO 2 — ANAMNESE",
          items: [
            {
              item: "Investiga características da dor: local, tipo cólica, intensidade, irradiação, início súbito",
              score: 0.8,
              ref: "SBU. Diretrizes de Urolitíase, 2022",
            },
            {
              item: "Investiga manifestações associadas: náuseas/vômitos, febre, disúria, polaciúria, urgência miccional, hematúria",
              score: 0.8,
              ref: "SBU. Diretrizes de Urolitíase, 2022",
            },
            {
              item: "Investiga antecedentes ginecológicos: corrimento, DUM, atividade sexual, IST",
              score: 0.8,
              ref: "SBU. Diretrizes de Urolitíase, 2022",
            },
            {
              item: "Pesquisa antecedentes: episódios anteriores, história familiar, hábitos (ingesta hídrica)",
              score: 0.4,
              ref: "SBU. Diretrizes de Urolitíase, 2022",
            },
          ],
        },
        {
          h: "BLOCO 3 — INVESTIGAÇÃO DIAGNÓSTICA",
          items: [
            {
              item: "Solicita e interpreta exame físico (giordano, abdome)",
              score: 0.5,
              ref: "SBU. Diretrizes de Urolitíase, 2022",
            },
            {
              item: "Solicita hemograma, PCR/VHS, creatinina/ureia, eletrólitos",
              score: 0.7,
              ref: "SBU. Diretrizes de Urolitíase, 2022",
            },
            { item: "Solicita EAS / urina tipo 1", score: 0.7, ref: "SBU. Diretrizes de Urolitíase, 2022" },
            {
              item: "Solicita beta-HCG (excluir gravidez ectópica)",
              score: 0.8,
              ref: "SBU. Diretrizes de Urolitíase, 2022",
            },
            {
              item: "Solicita TC de abdome sem contraste (padrão-ouro)",
              score: 1,
              ref: "SBU. Diretrizes de Urolitíase, 2022",
            },
            {
              item: "Solicita USG de abdome ou rins e vias urinárias",
              score: 0.5,
              ref: "SBU. Diretrizes de Urolitíase, 2022",
            },
          ],
        },
        {
          h: "BLOCO 4 — RACIOCÍNIO CLÍNICO",
          items: [
            {
              item: "Define hipótese diagnóstica: ureterolitíase / litíase urinária / urolitíase / uropatia obstrutiva por cálculo",
              score: 2,
              ref: "SBU. Diretrizes de Urolitíase, 2022",
            },
          ],
        },
        {
          h: "BLOCO 5 — CONDUTA",
          items: [
            {
              item: "Indica analgesia especificando a droga: AINE (cetoprofeno, ibuprofeno, diclofenaco) ou opioide (morfina, tramadol) ou dipirona EV",
              score: 1,
              ref: "SBU. Diretrizes de Urolitíase, 2022",
            },
            {
              item: "Encaminha para avaliação urológica urgente OU prescreve terapia expulsiva (tansulosina 0,4mg/dia)",
              score: 1,
              ref: "SBU. Diretrizes de Urolitíase, 2022",
            },
            {
              item: "Orienta prevenção de novos episódios: ↑ ingesta hídrica, ↓ sódio, ↓ oxalato, manter IMC normal",
              score: 0.5,
              ref: "SBU. Diretrizes de Urolitíase, 2022",
            },
          ],
        },
      ],
      study: [
        {
          h: "Definição e Epidemiologia",
          body: "<p>A litíase urinária é a presença de cálculos em qualquer porção do trato urinário (rim, ureter, bexiga). Afeta 5–10% da população brasileira, com pico na 3ª–5ª décadas, e recorrência de ~50% em 10 anos. Predomina em homens (2:1), mas é frequente em mulheres jovens.</p>\n        <p><strong>Composição dos cálculos:</strong> oxalato de cálcio (80%), ácido úrico (10%), estruvita (infecção – 5%), cistina (1–2%).</p>",
        },
        {
          h: "Quadro Clínico — Cólica Renal",
          body: "<ul><li><strong>Dor lombar ou flanco de início súbito</strong>, tipo cólica, intensa (9-10/10)</li><li><strong>Irradiação</strong> para fossa ilíaca, virilha, escroto/lábio maior, face interna da coxa</li><li><strong>Agitação psicomotora</strong>: paciente não encontra posição de alívio (diferente da peritonite)</li><li><strong>Hematúria</strong>: macro (20%) ou micro (90%)</li><li>Náuseas e vômitos frequentes</li><li><strong>Ausência de febre</strong> (febre = infecção associada = urgência cirúrgica)</li></ul>\n        <p><strong>Localização e probabilidade de eliminação espontânea:</strong></p>\n        <ul><li>&lt;4mm: ~80% de eliminação espontânea</li><li>4–6mm: ~60%</li><li>6–8mm: ~20–40%</li><li>&gt;8mm: &lt;10% — necessita intervenção</li></ul>",
        },
        {
          h: "Diagnóstico e Exames",
          body: "<p><strong>EAS/Urina tipo 1:</strong> hematúria micro ou macroscópica em ~90% dos casos. Nitrito negativo (diferencia de ITU).</p>\n        <p><strong>Beta-HCG:</strong> OBRIGATÓRIO em mulheres em idade fértil — gravidez ectópica é o principal diagnóstico diferencial.</p>\n        <p><strong>Hemograma, creatinina, eletrólitos, PCR:</strong> avaliar função renal e infecção.</p>\n        <p><strong>Imagem:</strong></p>\n        <ul><li><strong>TC de abdome sem contraste:</strong> PADRÃO-OURO. Sensibilidade 97%, especificidade 96%. Visualiza cálculos de qualquer composição.</li><li><strong>USG de rins e vias urinárias:</strong> 1ª opção na gestante e em crianças. Pode não visualizar cálculos pequenos no ureter (como neste caso).</li><li><strong>Radiografia simples de abdome:</strong> baixa sensibilidade (20-40%), só visualiza cálculos radiopacos.</li></ul>",
        },
        {
          h: "Tratamento — Analgesia",
          body: "\n        <div class=\"drug-box\"><strong>AINEs (1ª escolha):</strong><br>Cetoprofeno 100mg EV em 100mL SF 0,9% por 20min, ou<br>Ibuprofeno 600mg VO, ou Diclofenaco 75mg IM<br><em>Reduzem espasmo ureteral e inflamação. Excelente controle álgico.</em></div>\n        <div class=\"drug-box\"><strong>Opioides (dor refratária):</strong><br>Tramadol 100mg EV ou Morfina 2-4mg EV em bolus<br><em>Associar a AINE quando necessário.</em></div>\n        <div class=\"drug-box\"><strong>Dipirona:</strong><br>1-2g EV diluído — adjuvante analgésico eficaz</div>",
        },
        {
          h: "Terapia Expulsiva e Intervenção Urológica",
          body: "<p><strong>Terapia expulsiva (cálculos ≤6-8mm sem complicação):</strong><br>Tansulosina 0,4mg/dia VO (alfabloqueador) — relaxa musculatura ureteral, aumenta chance de eliminação espontânea. Manter por 4 semanas.</p>\n        <p><strong>Indicações de intervenção urológica urgente:</strong></p>\n        <ul><li>Cálculo &gt;8-10mm (baixa probabilidade de eliminação espontânea)</li><li>Febre associada (pielonefrite obstrutiva — emergência!)</li><li>Dor intratável</li><li>Anúria / insuficiência renal</li><li>Rim único obstruído</li></ul>\n        <p><strong>Procedimentos disponíveis:</strong> Litotripsia extracorpórea por ondas de choque (LECO), Ureteroscopia com laser, Nefrolitotomia percutânea (cálculos grandes).</p>",
        },
        {
          h: "Prevenção de Novos Episódios",
          body: "<ul><li>↑ Ingesta hídrica: ≥2,5L/dia (diurese >2L/dia)</li><li>↓ Ingesta de sal (sódio &lt;2g/dia)</li><li>↓ Oxalato: evitar espinafre, acelga, chocolate, castanha em excesso</li><li>↓ Proteína animal</li><li>↑ Citrato: sucos cítricos (limão, laranja)</li><li>Manter IMC normal</li><li>Não restringir cálcio dietético (paradoxal: aumenta litíase)</li></ul>",
        },
        {
          h: "Armadilhas Comuns no OSCE",
          body: "\n        <div class=\"pitfall\">Não solicitar beta-HCG — a gravidez ectópica mata e mimetiza a cólica renal.</div>\n        <div class=\"pitfall\">Basear o diagnóstico apenas no USG — o USG pode não ver o cálculo no ureter; a TC é imprescindível.</div>\n        <div class=\"pitfall\">Tratar como ITU sem evidência de infecção — hematúria ≠ infecção; checar leucocitúria e nitrito.</div>\n        <div class=\"pitfall\">Esquecer de prescrever analgesia — cólica renal é emergência analgésica, não deixar o paciente com dor.</div>\n        <div class=\"pitfall\">Liberar cálculo de 10mm sem encaminhamento urológico — probabilidade de eliminação espontânea &lt;10%.</div>\n        <div class=\"pitfall\">Não orientar prevenção — causa recorrência de ~50% em 10 anos.</div>",
        },
        {
          h: "Referências",
          body: "<ul class=\"ref-list\"><li>SBU — Sociedade Brasileira de Urologia. Urologia Brasil, 2022.</li><li>EAU Guidelines on Urolithiasis. European Association of Urology, 2024.</li><li>Ministério da Saúde / INEP. PEP Revalida 2025.1 — Estação 7 Cirurgia Geral.</li><li>UpToDate: Kidney stones in adults: Diagnosis and acute management. 2024.</li><li>UpToDate: Prevention of recurrent calcium stones in adults. 2024.</li></ul>",
        },
      ],
    },
  },

  // ── ESTAÇÃO 4: Litíase + ITU / Pielonefrite Obstrutiva (Homem, adulto) ─
  {
    id: 4,
    title: "Homem com dor lombar intensa, febre e cólica desde ontem",
    sub: "Pronto-Socorro — Alta complexidade",
    tema: "Urologia",
    topic: "litíase",
    level: "difícil",
    cardAccent: "#38d9a9",
    instA: {
      scenario: "Pronto-socorro de hospital terciário. Paciente encaminhado pela UBS com queixa de dor intensa em flanco esquerdo há ~18 horas, associada a febre.",
      patient: "A.M., 48 anos, masculino, motorista de caminhão, hipertenso em uso de losartana.",
      complaint: "Dor em flanco esquerdo de início súbito há cerca de 18 horas, tipo cólica, com irradiação para a virilha. Desde a madrugada apresenta febre alta e calafrios. Nega ITU anterior.",
      tasks: [
        "Realizar anamnese completa e dirigida ao quadro atual.",
        "Solicitar exame físico pertinente.",
        "Solicitar exames laboratoriais e de imagem adequados.",
        "Formular hipótese diagnóstica e diagnósticos diferenciais.",
        "Definir a conduta adequada com justificativa clínica.",
        "Comunicar ao paciente o diagnóstico e a conduta de forma clara.",
      ],
    },
    instB: {
      vitals: {
        PA: "88/56 mmHg",
        FC: "126 bpm",
        FR: "24 irpm",
        Tax: "39.8°C",
        Peso: "82 kg",
        Altura: "1.74 m",
        IMC: "27.1 kg/m²",
      },
      physicalGeneral: "Paciente em mau estado geral, pálido, diaforético, taquicárdico, febril, com fácies de dor e prostração. Fala entrecortada.",
      physicalSeg: [
        "ABDOME: Distendido levemente, doloroso em flanco esquerdo. Sem rigidez abdominal. RHA diminuídos.",
        "PUNHO-PERCUSSÃO LOMBAR: POSITIVO intensamente à esquerda. Negativo à direita.",
        "MEMBROS: TEC 4s (aumentado). Extremidades frias e pegajosas.",
        "NEUROLÓGICO: Sonolento, responsivo ao chamado. Glasgow 14 (desorientação temporal).",
      ],
      labs: [
        { test: "Leucócitos totais", val: "22.400/mm³ (desvio à esq., blastos)", ref: "4.000–11.000", alt: true },
        { test: "PCR", val: "312 mg/L", ref: "< 5 mg/L", alt: true },
        { test: "Creatinina", val: "3.2 mg/dL (BASAL: 0.9 conforme referido)", ref: "0.7–1.2 mg/dL", alt: true },
        { test: "Ureia", val: "88 mg/dL", ref: "17–42 mg/dL", alt: true },
        { test: "Sódio", val: "132 mEq/L", ref: "135–145", alt: true },
        { test: "Potássio", val: "5.6 mEq/L", ref: "3.5–5.0", alt: true },
        { test: "Lactato", val: "5.8 mmol/L", ref: "< 2.0 mmol/L", alt: true },
        { test: "EAS — Leucocitúria", val: "+++ (campo cheio)", ref: "< 5/campo", alt: true },
        { test: "EAS — Nitrito", val: "POSITIVO", ref: "Negativo", alt: true },
        { test: "EAS — Hematúria", val: "++ (20-30/campo)", ref: "< 2/campo", alt: true },
        { test: "Urocultura + Hemocultura", val: "Coletadas — resultado pendente", ref: "—", alt: false },
      ],
      image: {
        title: "TC de Abdome e Pelve sem Contraste — URGÊNCIA",
        report: "LAUDO — TOMOGRAFIA COMPUTADORIZADA DE ABDOME E PELVE SEM CONTRASTE\n\nRim esquerdo: HIDRONEFROSE GRAU III à esquerda. Cálculo de 8mm em ureter proximal esquerdo (U1), imediatamente abaixo da junção ureteropélvica. Espessamento da gordura perirrenal compatível com processo inflamatório/infeccioso periférico. Sem abscesso perirrenal identificado.\n\nRim direito: dimensões normais, ecotextura homogênea. Sem dilatação pielocalicial.\n\nBexiga: adequadamente repleta. Sem alterações endoluminais.\n\nCONCLUSÃO:\n— Ureterolitíase proximal esquerda (8mm em U1) com hidronefrose grau III\n— Achados compatíveis com pielonefrite obstrutiva à esquerda\n— EMERGÊNCIA UROLÓGICA: indicação de descompressão urgente da via urinária",
      },
      patientProfile: "Motorista de caminhão de 48 anos, hipertenso em uso de losartana 50 mg/dia. Bebe pouca água nas viagens. Irmão teve cálculo renal. Tomou ibuprofeno e dipirona em casa sem melhora.",
      script: [
        {
          trigger: "Queixa principal",
          speech: "Doutor(a), tô muito mal. Essa dor começou ontem no lado esquerdo, tô com febre alta desde a madrugada e tô me sentindo cada vez pior. A dor foi acalmando um pouco, mas agora tô sem força nenhuma.",
        },
        {
          trigger: "Sobre a melhora relativa da cólica",
          speech: "É... estranhamente a dor da cólica diminuiu um pouco, mas fiquei pior do resto. Tô aqui sem força, suando frio.",
        },
        {
          trigger: "Sobre febre e calafrios",
          speech: "Sim, febre alta, medindo quase 40 em casa. E tô com muito calafrio, tremendo.",
        },
        { trigger: "Sobre a urina", speech: "Ontem tava com sangue, mas agora tô urinando menos, quase nada." },
        {
          trigger: "Sobre antecedentes",
          speech: "Tenho pressão alta, tomo losartana 50mg por dia. Nunca tive problema no rim antes. Às vezes tenho dor nas costas, mas achava que era do trabalho de motorista.",
        },
        {
          trigger: "Sobre uso de anti-inflamatório ou dipirona",
          speech: "Tomei ibuprofeno em casa ontem, mas não ajudou. Depois tomei dipirona mas também não melhorou.",
        },
        { trigger: "Sobre histórico familiar de cálculo renal", speech: "Meu irmão teve pedra no rim, sim." },
        {
          trigger: "Pergunta ativa — gravidade",
          speech: "Doutor(a), tô com muito medo. Isso é grave? Vou ficar bom?",
        },
      ],
      hiddenInfo: [
        "A cólica melhorou, mas ele piorou do resto (sinal de alarme) — só se perguntarem sobre a evolução da dor",
        "Está urinando muito pouco — só se perguntarem sobre a urina",
        "Usou ibuprofeno em casa — só se perguntarem sobre medicações",
        "Irmão com cálculo renal — só se perguntarem sobre história familiar",
      ],
      actorBehavior: "Sonolento, suando frio, fala devagar e às vezes se confunde com datas. Está com muito medo e pergunta se é grave.",
    },
    instC: {
      diagnosis: "Pielonefrite Obstrutiva por Ureterolitíase — Choque Séptico de Foco Urinário",
      differentials: [
        "Pielonefrite aguda não complicada — sai: há obstrução (hidronefrose grau III por cálculo), o que exige descompressão",
        "Cólica renal sem infecção — sai: febre, calafrios, leucocitose, PCR muito alta e choque indicam infecção",
        "Abdome agudo inflamatório (diverticulite, apendicite) — TC sem sinais e foco urinário claro",
        "Dissecção ou ruptura de aneurisma de aorta abdominal — dor lombar com choque em homem hipertenso; a TC afasta",
      ],
      context: "Homem de meia-idade com cálculo ureteral proximal obstruindo o rim esquerdo e levando a infecção suprajacente (pielonefrite obstrutiva). Evolução para choque séptico: PA 88/56 + FC 126 + lactato 5.8 + Glasgow 14 + IRA (creatinina 3.2). Esta é uma EMERGÊNCIA CIRÚRGICA/UROLÓGICA: antibiótico EV + descompressão urgente da via urinária (cateter JJ duplo J ou nefrostomia percutânea) são obrigatórios. O cálculo em si NÃO deve ser retirado neste momento de instabilidade.",
      justify: "Choque séptico: hipotensão + lactato >2 + disfunção orgânica (IRA). Foco: obstrutivo urinário confirmado por TC. Emergência: rim obstruído + infectado = urgência urológica.",
      expectedAnamnesis: [
        "Identificar dor cólica prévia com melhora relativa — sinal de alarme em infecção obstrutiva",
        "Investigar febre, calafrios e prostração como sinal de complicação sistêmica",
        "Pesquisar redução do débito urinário (oligúria)",
        "Investigar antecedentes: HAS, medicamentos (losartana), histórico familiar de litíase",
      ],
      expectedPhysical: [
        "Solicitar exame físico e identifica hipotensão + taquicardia + TEC aumentado = choque",
        "Aplica critérios de sepse/choque séptico (qSOFA, SOFA, lactato)",
      ],
      expectedExams: [
        {
          exam: "Lactato, gasometria, hemograma, PCR, creatinina e eletrólitos",
          justify: "Gravidade do choque e disfunção orgânica",
          expected: "Lactato 5,8; leucocitose com desvio; creatinina 3,2; K 5,6",
        },
        {
          exam: "Urocultura e hemoculturas (2 amostras) antes do antibiótico",
          justify: "Identificar o agente e guiar o antibiótico",
          expected: "Coletadas; resultados pendentes",
        },
        {
          exam: "Urina tipo 1",
          justify: "Confirmar foco urinário",
          expected: "Leucocitúria intensa, nitrito positivo e hematúria",
        },
        {
          exam: "TC de abdome e pelve sem contraste",
          justify: "Localizar obstrução e cálculo",
          expected: "Hidronefrose grau III à esquerda com cálculo de 8 mm no ureter proximal",
        },
      ],
      expectedConduct: [
        "Reconhecer choque séptico: monitorização, acesso venoso calibroso e cristaloide 30 mL/kg na 1ª hora",
        "Noradrenalina se PAM < 65 mmHg após volume",
        "Antibiótico EV de amplo espectro em até 1 hora, após culturas (ex.: piperacilina-tazobactam 4,5 g EV 6/6h)",
        "Descompressão urgente da via urinária pela urologia: cateter duplo-J ou nefrostomia percutânea",
        "Não retirar o cálculo agora; tratamento definitivo só após estabilização",
        "Sondagem vesical, controle de diurese e vaga em UTI; suspender losartana e evitar AINE (IRA)",
      ],
      expectedCommunication: [
        "Reconhece urgência, é objetivo e tranquilizador sem minimizar a gravidade",
        "Explicar ao paciente o diagnóstico e a necessidade de intervenção urgente com empatia",
        "Apresentar-se pelo nome e função",
        "Usar linguagem acessível, sem jargão",
      ],
      criticalErrors: [
        "Não reconhecer o choque séptico — PA 88/56 + lactato 5.8 = emergência hemdinâmica imediata",
        "Não acionar urologia para descompressão — rim obstruído + infectado sem drenagem é fatal",
        "Iniciar antibiótico sem coletar hemocultura e urocultura — janela perdida irrecuperável",
        "Tentar remover o cálculo por litotripsia em paciente em choque — contraindicado na fase aguda",
        "Não monitorar débito urinário — oligúria + creatinina 3.2 = IRA estabelecida, risco de hipercalemia grave",
      ],
    },
    instD: {
      title: "Pielonefrite Obstrutiva — Emergência Urológica",
      sections: [
        {
          h: "BLOCO 1 — COMUNICAÇÃO",
          items: [
            {
              item: "Reconhece urgência, é objetivo e tranquilizador sem minimizar a gravidade",
              score: 0.5,
              ref: "EAU Guidelines on Urological Infections, 2024",
            },
            {
              item: "Explica ao paciente o diagnóstico e a necessidade de intervenção urgente com empatia",
              score: 0.5,
              ref: "EAU Guidelines on Urological Infections, 2024",
            },
          ],
        },
        {
          h: "BLOCO 2 — ANAMNESE",
          items: [
            {
              item: "Identifica dor cólica prévia com melhora relativa — sinal de alarme em infecção obstrutiva",
              score: 0.5,
              ref: "EAU Guidelines on Urological Infections, 2024",
            },
            {
              item: "Investiga febre, calafrios e prostração como sinal de complicação sistêmica",
              score: 0.5,
              ref: "EAU Guidelines on Urological Infections, 2024",
            },
            {
              item: "Pesquisa redução do débito urinário (oligúria)",
              score: 0.5,
              ref: "EAU Guidelines on Urological Infections, 2024",
            },
            {
              item: "Investiga antecedentes: HAS, medicamentos (losartana), histórico familiar de litíase",
              score: 0.4,
              ref: "EAU Guidelines on Urological Infections, 2024",
            },
          ],
        },
        {
          h: "BLOCO 3 — RECONHECIMENTO DE GRAVIDADE / EXAME FÍSICO",
          items: [
            {
              item: "Solicita exame físico e identifica hipotensão + taquicardia + TEC aumentado = choque",
              score: 0.5,
              ref: "EAU Guidelines on Urological Infections, 2024",
            },
            {
              item: "Aplica critérios de sepse/choque séptico (qSOFA, SOFA, lactato)",
              score: 0.5,
              ref: "EAU Guidelines on Urological Infections, 2024",
            },
            {
              item: "Reconhece melhora da cólica + piora sistêmica como sinal de obstrução com infecção",
              score: 0.5,
              ref: "EAU Guidelines on Urological Infections, 2024",
            },
          ],
        },
        {
          h: "BLOCO 4 — INVESTIGAÇÃO",
          items: [
            {
              item: "Solicita lactato, hemograma, PCR, creatinina, eletrólitos urgentes",
              score: 0.5,
              ref: "EAU Guidelines on Urological Infections, 2024",
            },
            {
              item: "Solicita urocultura e hemocultura (2 amostras) antes do antibiótico",
              score: 0.5,
              ref: "EAU Guidelines on Urological Infections, 2024",
            },
            {
              item: "Solicita TC de abdome sem contraste (confirma cálculo e hidronefrose)",
              score: 0.5,
              ref: "EAU Guidelines on Urological Infections, 2024",
            },
            {
              item: "Identifica corretamente: ureterolitíase com pielonefrite obstrutiva + choque séptico",
              score: 1,
              ref: "EAU Guidelines on Urological Infections, 2024",
            },
          ],
        },
        {
          h: "BLOCO 5 — CONDUTA DE EMERGÊNCIA",
          items: [
            {
              item: "Inicia antibiótico EV imediatamente (ceftriaxona ou piperacilina-tazobactam em sepse grave)",
              score: 0.5,
              ref: "EAU Guidelines on Urological Infections, 2024",
            },
            {
              item: "Acessa venoso calibroso + ressuscitação volêmica (30mL/kg SF 0,9% ou RL na 1ª hora)",
              score: 0.5,
              ref: "EAU Guidelines on Urological Infections, 2024",
            },
            {
              item: "Aciona urologia de urgência para descompressão da via urinária (cateter duplo-J ou nefrostomia)",
              score: 1,
              ref: "EAU Guidelines on Urological Infections, 2024",
            },
            {
              item: "Orienta que o cálculo NÃO deve ser retirado agora (instabilidade hemodinâmica)",
              score: 0.5,
              ref: "EAU Guidelines on Urological Infections, 2024",
            },
            {
              item: "Monitora débito urinário e considera UTI",
              score: 0.4,
              ref: "EAU Guidelines on Urological Infections, 2024",
            },
          ],
        },
      ],
      study: [
        {
          h: "Definição e Fisiopatologia",
          body: "<p>Pielonefrite obstrutiva ocorre quando um cálculo (ou outra causa) bloqueia o fluxo urinário e uma infecção se instala a montante da obstrução. A combinação é devastadora: o urosepse (sepse de foco urinário obstrutivo) tem mortalidade de até 30–50% se não tratada em horas.</p>\n        <p><strong>Sinal clínico característico:</strong> melhora relativa da cólica seguida de piora sistêmica — a pressão do sistema infectado \"para\" a cólica por distensão máxima, mas o processo infeccioso avança rapidamente.</p>",
        },
        {
          h: "Diagnóstico de Choque Séptico",
          body: "<p><strong>Sepse 3.0 (SOFA-based):</strong> disfunção orgânica ameaçadora à vida desencadeada por infecção. <strong>Choque séptico:</strong> sepse + hipotensão refratária + lactato >2 mmol/L após ressuscitação.</p>\n        <p><strong>Disfunções identificadas neste caso:</strong></p>\n        <ul><li>Cardiovascular: PA 88/56, FC 126 (choque)</li><li>Renal: creatinina 3.2 (IRA)</li><li>Neurológico: Glasgow 14</li><li>Lactato 5.8 (hipoperfusão tecidual grave)</li></ul>",
        },
        {
          h: "Conduta — As 3 Prioridades Simultâneas",
          body: "\n        <div class=\"drug-box\"><strong>1. RESSUSCITAÇÃO HEMODINÂMICA (1ª hora):</strong><br>SF 0,9% ou Ringer Lactato 30mL/kg em bolus IV rápido<br>Noradrenalina se PA não responder (alvo PAM ≥65 mmHg)<br>Monitorização contínua + acesso venoso calibroso (jelco 14-16G)</div>\n        <div class=\"drug-box\"><strong>2. ANTIBIOTICOTERAPIA EV (dentro de 1h — após culturas):</strong><br>Piperacilina-tazobactam 4,5g EV 6/6h (cobertura ampla em choque)<br>OU Ceftriaxona 2g EV 1x/dia + Metronidazol se anaeróbio suspeito<br>Ajustar conforme antibiograma em 48-72h</div>\n        <div class=\"drug-box\"><strong>3. DESCOMPRESSÃO UROLÓGICA URGENTE:</strong><br>Cateter ureteral duplo-J (stent JJ) — preferido se possível<br>OU Nefrostomia percutânea — quando ureteroscopia impossível<br>NÃO remover o cálculo agora — instabilidade hemodinâmica é contraindicação absoluta</div>",
        },
        {
          h: "Após Estabilização",
          body: "<ul><li>Internação em UTI ou semi-intensiva com monitorização contínua</li><li>Controle de diurese horária (meta >0,5mL/kg/h)</li><li>Antibioticoterapia por 10-14 dias com ajuste por antibiograma</li><li>Retirada do cálculo eletiva após resolução da infecção (2-4 semanas): ureteroscopia com laser ou LECO</li><li>Investigação de litíase metabólica: urina de 24h, perfil metabólico</li></ul>",
        },
        {
          h: "Armadilhas Comuns no OSCE",
          body: "\n        <div class=\"pitfall\">Não reconhecer a melhora da cólica como sinal de alarme — pressão alta = infecção avançando.</div>\n        <div class=\"pitfall\">Tentar litotripsia ou ureteroscopia em paciente instável — aguardar estabilização hemodinâmica.</div>\n        <div class=\"pitfall\">Não considerar hipercalemia em paciente com IRA + oligúria (potássio 5.6 pode piorar).</div>\n        <div class=\"pitfall\">Não chamar urologia imediatamente — tempo é rim. Cada hora sem drenagem aumenta dano renal permanente.</div>",
        },
        {
          h: "Referências",
          body: "<ul class=\"ref-list\"><li>EAU Guidelines on Urological Infections, 2024.</li><li>Singer M et al. The Third International Consensus Definitions for Sepsis. JAMA, 2016.</li><li>SBU — Sociedade Brasileira de Urologia. Diretrizes em Urologia, 2022.</li><li>UpToDate: Kidney stones in adults: Surgical management. 2024.</li><li>Surviving Sepsis Campaign: International Guidelines. Crit Care Med, 2021.</li></ul>",
        },
      ],
    },
  },
];

const endocrineStations = [
  // ── ESTAÇÃO 5: Hipotireoidismo Primário (Mulher, adulta) ─
  {
    id: 5,
    title: "Cansaço progressivo, ganho de peso e queda de cabelo",
    sub: "UBS · Clínica Médica",
    tema: "Endocrinologia",
    topic: "tireoide",
    level: "moderado",
    cardAccent: "#4a6fa5",
    instA: {
      scenario: "Você está no ambulatório de clínica médica de uma UBS.",
      patient: "M.S.A., 52 anos, sexo feminino, comerciante.",
      complaint: "Paciente relata cansaço progressivo há 6 meses, ganho de peso de 8 kg e queda de cabelo.",
      tasks: [
        "Realizar anamnese direcionada",
        "Solicitar exame físico pertinente",
        "Formular hipóteses diagnósticas",
        "Solicitar exames complementares adequados",
        "Orientar a paciente sobre a conduta",
        "Prescrever tratamento inicial se indicado",
      ],
    },
    instB: {
      vitals: {
        PA: "130/85 mmHg",
        FC: "58 bpm",
        FR: "14 irpm",
        Tax: "35.8°C",
        Peso: "78 kg",
        Altura: "1.62 m",
        IMC: "29.7 kg/m²",
      },
      physicalGeneral: "Fácies com edema periorbitário discreto, expressão apática; pele seca, fria e descamativa; cabelos quebradiços e rarefação difusa; unhas quebradiças; mucosas coradas e hidratadas.",
      physicalSeg: [
        "Tireoide: volume normal, consistência fibroelástica, móvel à deglutição, sem nódulos palpáveis.",
        "Cardiovascular: RCR 2T, BNF, sem sopros; pulsos periféricos simétricos e de amplitude reduzida.",
        "Respiratório: MV presente bilateralmente, sem RA.",
        "Abdome: plano, flácido, RHA presentes, indolor à palpação, sem visceromegalias.",
        "Membros: edema 1+/4+ em membros inferiores até tornozelos; reflexo aquileu com fase de relaxamento lentificada bilateralmente.",
      ],
      labs: [
        { test: "TSH", val: "18.5 μUI/mL", ref: "0.4 - 4.0", alt: true },
        { test: "T4 livre", val: "0.6 ng/dL", ref: "0.8 - 1.8", alt: true },
        { test: "Anti-TPO", val: "485 UI/mL", ref: "< 35", alt: true },
        { test: "Hemoglobina", val: "11.2 g/dL", ref: "12.0 - 16.0", alt: false },
        { test: "Colesterol total", val: "268 mg/dL", ref: "< 200", alt: true },
        { test: "LDL", val: "178 mg/dL", ref: "< 130", alt: true },
        { test: "Glicemia jejum", val: "92 mg/dL", ref: "70 - 100", alt: false },
        { test: "Creatinina", val: "1.1 mg/dL", ref: "0.6 - 1.2", alt: false },
      ],
      image: null,
      patientProfile: "Comerciante de 52 anos, hipertensa em uso de losartana. Mãe tinha 'problema de tireoide'. Ciclos menstruais irregulares. Nota cansaço que atrapalha o trabalho na loja.",
      script: [
        {
          trigger: "Queixa principal",
          speech: "Doutora, estou muito cansada há uns 6 meses, não tenho vontade de fazer nada.",
        },
        {
          trigger: "Quando perguntado sobre ganho de peso",
          speech: "Engordei 8 quilos nesse tempo, mesmo comendo igual.",
        },
        {
          trigger: "Sobre temperatura",
          speech: "Sinto muito frio, preciso usar casaco quando todo mundo está de manga curta.",
        },
        { trigger: "Sobre intestino", speech: "Estou muito presa, vou ao banheiro 2 vezes por semana só." },
        { trigger: "Sobre cabelo", speech: "Meu cabelo está caindo muito, está ralo e quebradiço." },
        { trigger: "Sobre pele", speech: "A pele ficou muito seca, principalmente nas pernas." },
        {
          trigger: "Sobre ciclo menstrual",
          speech: "Minha menstruação sempre foi desregulada, agora está vindo de 2 em 2 meses, mais forte.",
        },
        { trigger: "Antecedentes", speech: "Tenho pressão alta controlada com losartana." },
        { trigger: "História familiar", speech: "Minha mãe teve problema na tireoide, tomava um remedinho." },
        {
          trigger: "Perguntas do paciente",
          speech: "O que eu tenho, doutora? É grave? Tem cura? Vou precisar tomar remédio sempre?",
        },
      ],
      hiddenInfo: [
        "Constipação (evacua 2 vezes por semana) — só se perguntarem sobre o intestino",
        "Intolerância ao frio — só se perguntarem sobre temperatura",
        "Mãe com doença de tireoide — só se perguntarem sobre a família",
      ],
      actorBehavior: "Fala devagar, parece cansada e desanimada. Colaborativa. Ao final pergunta se é grave, se tem cura e se vai precisar tomar remédio para sempre.",
    },
    instC: {
      diagnosis: "Hipotireoidismo primário (Tireoidite de Hashimoto)",
      differentials: [
        "Depressão — fadiga e desânimo, mas intolerância ao frio, constipação, pele seca, bradicardia e TSH alto apontam hipotireoidismo",
        "Anemia ferropriva — Hb 11,2 contribui para a fadiga, mas não explica o quadro todo",
        "Hipotireoidismo central — sai: TSH elevado indica causa primária",
        "Climatério — ciclos irregulares aos 52 anos, mas não explica edema e reflexos lentificados",
      ],
      context: "Mulher de 52 anos com sintomas clássicos de hipotireoidismo: astenia progressiva, ganho de peso, intolerância ao frio, alterações de pele e cabelo, bradicardia, edema e lentificação do reflexo aquileu. Exames confirmam TSH elevado, T4 livre baixo e anti-TPO positivo, compatíveis com tireoidite autoimune.",
      justify: "Critérios preenchidos: sintomatologia clínica típica de hipotireoidismo associada a exames laboratoriais de tireoidite de Hashimoto.",
      expectedAnamnesis: [
        "Investigar duração e evolução da astenia",
        "Perguntar sobre ganho de peso",
        "Investigar intolerância ao frio",
        "Perguntar sobre alterações de pele e cabelo",
        "Investigar função intestinal",
        "Perguntar sobre ciclo menstrual",
        "Investigar antecedentes pessoais e familiares",
      ],
      expectedPhysical: ["Solicitar exame físico completo incluindo tireoide", "Pesquisar reflexo aquileu"],
      expectedExams: [
        {
          exam: "TSH e T4 livre",
          justify: "Confirmar hipotireoidismo primário",
          expected: "TSH 18,5 com T4 livre baixo",
        },
        { exam: "Anti-TPO", justify: "Definir causa autoimune (Hashimoto)", expected: "Positivo (485 UI/mL)" },
        {
          exam: "Hemograma e perfil lipídico",
          justify: "Repercussões do hipotireoidismo",
          expected: "Anemia leve e LDL elevado",
        },
      ],
      expectedConduct: [
        "Levotiroxina 1,6 mcg/kg/dia; iniciar com dose menor (25–50 mcg) se cardiopatia ou idade avançada",
        "Tomar em jejum, 30–60 minutos antes do café, longe de cálcio, ferro e antiácidos",
        "Repetir TSH em 6–8 semanas e ajustar a dose",
        "Reavaliar o colesterol após normalizar a função tireoidiana",
        "Explicar que o tratamento costuma ser contínuo e que os sintomas melhoram em semanas",
      ],
      expectedCommunication: [
        "Identificação e apresentação adequada",
        "Explicar o diagnóstico em linguagem clara",
        "Verificar o entendimento e esclarecer dúvidas",
      ],
      criticalErrors: [
        "Não solicitar TSH como exame inicial",
        "Iniciar tratamento sem confirmação laboratorial",
        "Prescrever dose inadequada de levotiroxina (< 1.6 mcg/kg ou > 100 mcg inicial)",
        "Não orientar sobre uso em jejum",
      ],
    },
    instD: {
      title: "Hipotireoidismo Primário",
      sections: [
        {
          h: "BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
          items: [
            { item: "Identificação e apresentação adequada", score: 0.5, ref: "SBEM. Consenso de Hipotireoidismo, 2023" },
            {
              item: "Explicou o diagnóstico em linguagem clara",
              score: 0.5,
              ref: "SBEM. Consenso de Hipotireoidismo, 2023",
            },
          ],
        },
        {
          h: "BLOCO 2 — ANAMNESE",
          items: [
            {
              item: "Investigou duração e evolução da astenia",
              score: 0.5,
              ref: "SBEM. Consenso de Hipotireoidismo, 2023",
            },
            { item: "Perguntou sobre ganho de peso", score: 0.5, ref: "SBEM. Consenso de Hipotireoidismo, 2023" },
            { item: "Investigou intolerância ao frio", score: 0.5, ref: "SBEM. Consenso de Hipotireoidismo, 2023" },
            {
              item: "Perguntou sobre alterações de pele e cabelo",
              score: 0.5,
              ref: "SBEM. Consenso de Hipotireoidismo, 2023",
            },
            { item: "Investigou função intestinal", score: 0.5, ref: "SBEM. Consenso de Hipotireoidismo, 2023" },
            { item: "Perguntou sobre ciclo menstrual", score: 0.5, ref: "SBEM. Consenso de Hipotireoidismo, 2023" },
            {
              item: "Investigou antecedentes pessoais e familiares",
              score: 0.5,
              ref: "SBEM. Consenso de Hipotireoidismo, 2023",
            },
          ],
        },
        {
          h: "BLOCO 3 — EXAME FÍSICO",
          items: [
            {
              item: "Solicitou exame físico completo incluindo tireoide",
              score: 1,
              ref: "SBEM. Consenso de Hipotireoidismo, 2023",
            },
            { item: "Pesquisou reflexo aquileu", score: 0.5, ref: "SBEM. Consenso de Hipotireoidismo, 2023" },
          ],
        },
        {
          h: "BLOCO 4 — EXAMES COMPLEMENTARES",
          items: [
            { item: "Solicitou TSH e T4 livre", score: 1, ref: "SBEM. Consenso de Hipotireoidismo, 2023" },
            {
              item: "Solicitou anticorpos antitireoidianos (anti-TPO)",
              score: 0.5,
              ref: "SBEM. Consenso de Hipotireoidismo, 2023",
            },
          ],
        },
        {
          h: "BLOCO 5 — RACIOCÍNIO CLÍNICO",
          items: [
            { item: "Formulou hipótese de hipotireoidismo", score: 1, ref: "SBEM. Consenso de Hipotireoidismo, 2023" },
          ],
        },
        {
          h: "BLOCO 6 — CONDUTA",
          items: [
            {
              item: "Prescreveu levotiroxina na dose adequada",
              score: 1,
              ref: "SBEM. Consenso de Hipotireoidismo, 2023",
            },
            {
              item: "Orientou horário e forma de tomar a medicação",
              score: 0.5,
              ref: "SBEM. Consenso de Hipotireoidismo, 2023",
            },
          ],
        },
      ],
      study: [
        {
          h: "Definição e Etiologia",
          body: "<p>O hipotireoidismo primário é a síndrome clínica resultante da produção insuficiente de hormônios tireoidianos pela glândula tireoide. A causa mais comum em áreas suficientes em iodo é a tireoidite de Hashimoto (autoimune crônica).</p><p>Principais causas no Brasil:</p><ul><li>Tireoidite de Hashimoto (autoimune) — 80-90% dos casos</li><li>Iatrogênica: pós-radioiodo, pós-tireoidectomia</li><li>Induzida por medicamentos: amiodarona, lítio, interferon</li><li>Deficiência de iodo (rara no Brasil após fortificação do sal)</li></ul>",
        },
        {
          h: "Quadro Clínico",
          body: "<ul><li>Astenia e fadiga progressiva</li><li>Ganho de peso (5-10 kg) com apetite normal ou reduzido</li><li>Intolerância ao frio</li><li>Constipação intestinal</li><li>Pele seca, fria, áspera e descamativa</li><li>Cabelos e unhas quebradiços</li><li>Edema periorbitário e de membros</li><li>Rouquidão</li><li>Bradicardia</li><li>Hipertensão diastólica leve</li><li>Alterações menstruais: oligomenorreia, menorragia</li><li>Lentificação psicomotora e déficit de memória</li><li>Sinal clássico: lentificação da fase de relaxamento do reflexo aquileu.</li></ul>",
        },
        {
          h: "Diagnóstico Laboratorial",
          body: "<p>Padrão ouro: TSH elevado e T4 livre baixo.</p><table><tr><th>Exame</th><th>Hipotireoidismo manifesto</th><th>Hipotireoidismo subclínico</th></tr><tr><td>TSH</td><td>> 10 μUI/mL</td><td>4.0 - 10 μUI/mL</td></tr><tr><td>T4 livre</td><td>< 0.8 ng/dL</td><td>Normal (0.8 - 1.8)</td></tr></table><p>Anti-TPO positivo confirma etiologia autoimune (Hashimoto).</p><p>Outros achados: dislipidemia, anemia normo/normo ou macro/normo, CPK elevado, TGO/TGP levemente elevados, hiponatremia em casos graves.</p>",
        },
      ],
    },
  },

  // ── ESTAÇÃO 6: Síndrome dos Ovários Policísticos (Mulher, adulta) ─
  {
    id: 6,
    title: "Menstruação atrasada há 5 meses e ganho de peso",
    sub: "Ambulatório de Ginecologia — Hospital Secundário",
    tema: "Endocrinologia",
    topic: "endocrinologia feminina",
    level: "moderado",
    cardAccent: "#d16d6f",
    instA: {
      scenario: "Você está no ambulatório de ginecologia de um hospital secundário.",
      patient: "J.C.S., 28 anos, sexo feminino, professora.",
      complaint: "Paciente refere ausência de menstruação há 5 meses e ganho de peso progressivo.",
      tasks: [
        "Realizar anamnese ginecológica completa",
        "Investigar sintomas associados",
        "Solicitar exame físico pertinente",
        "Formular principais hipóteses diagnósticas",
        "Solicitar exames complementares adequados",
        "Orientar a paciente sobre as possibilidades diagnósticas",
      ],
    },
    instB: {
      vitals: { PA: "125/80 mmHg", FC: "78 bpm", Peso: "82 kg", Altura: "1.58 m", IMC: "32.8 kg/m²" },
      physicalGeneral: "Acne facial e mandibular; hirsutismo com pelos grossos em mento, periareolar e linha alba; acantose nigricans cervical e axilar; obesidade centrípeta.",
      physicalSeg: [
        "Mamas simétricas, sem nódulos ou galactorreia.",
        "Abdome com discreto aumento de volume suprapúbico.",
        "Genitália externa sem alterações, pelos em padrão masculino.",
      ],
      labs: [
        { test: "β-HCG sérico", val: "< 2 mUI/mL", ref: "< 5 não grávida", alt: false },
        { test: "TSH", val: "2.3 μUI/mL", ref: "0.4 - 4.0", alt: false },
        { test: "Prolactina", val: "18 ng/mL", ref: "< 25", alt: false },
        { test: "FSH", val: "4.2 mUI/mL", ref: "fase folicular: 3-10", alt: false },
        { test: "LH", val: "14.8 mUI/mL", ref: "fase folicular: 2-10", alt: true },
        { test: "Testosterona total", val: "82 ng/dL", ref: "14-76", alt: true },
        { test: "DHEA-S", val: "285 μg/dL", ref: "35-430", alt: false },
        { test: "Glicemia jejum", val: "108 mg/dL", ref: "70-100", alt: true },
        { test: "Insulina jejum", val: "28 μUI/mL", ref: "2-25", alt: true },
        { test: "HOMA-IR", val: "7.5", ref: "< 2.5", alt: true },
      ],
      image: {
        title: "Ultrassom Transvaginal",
        report: "Útero em anteversoflexão, volume 88 cm³, endométrio 14 mm homogêneo. Ovário direito com múltiplos folículos periféricos (12 folículos de 2-9 mm). Ovário esquerdo com múltiplos folículos periféricos (14 folículos de 2-9 mm). Conclusão: ovários aumentados com múltiplos microcistos periféricos, aspecto sugestivo de síndrome dos ovários policísticos.",
      },
      patientProfile: "Professora de 28 anos, ciclos irregulares desde a adolescência, ganhou 12 kg no último ano, principalmente na barriga. Mãe com diabetes e hipertensão; irmã com ciclos irregulares. Parceiro fixo, preservativo às vezes.",
      script: [
        {
          trigger: "Queixa principal",
          speech: "Doutora, minha menstruação não vem há 5 meses e estou engordando muito.",
        },
        {
          trigger: "História menstrual",
          speech: "Minha menstruação sempre foi irregular desde a adolescência, vinha de 2 em 2 meses, às vezes 3.",
        },
        { trigger: "Sobre peso", speech: "Engordei 12 quilos no último ano, principalmente na barriga." },
        {
          trigger: "Sobre pelos",
          speech: "Tenho muitos pelos no rosto, preciso depilar toda semana. Também nasceram pelos na barriga.",
        },
        {
          trigger: "Sobre pele",
          speech: "Tenho muita espinha no rosto, piorou muito esse ano. Apareceram umas manchas escuras no pescoço e nas axilas.",
        },
        { trigger: "Atividade sexual", speech: "Sim, tenho parceiro fixo, uso preservativo às vezes." },
        {
          trigger: "Desejo de gravidez",
          speech: "No momento não, mas tenho medo de não conseguir engravidar no futuro.",
        },
        { trigger: "Antecedentes", speech: "Não tenho doenças, não tomo remédio nenhum." },
        {
          trigger: "História familiar",
          speech: "Minha mãe tem diabetes e pressão alta. Minha irmã também tem problema de menstruação irregular.",
        },
        {
          trigger: "Perguntas do paciente",
          speech: "Por que minha menstruação parou? Isso tem a ver com esses pelos no rosto? Vou conseguir engravidar quando quiser? Preciso emagrecer?",
        },
      ],
      hiddenInfo: [
        "Manchas escuras no pescoço e axilas (acantose) — só se perguntarem sobre a pele",
        "Irmã com ciclos irregulares e mãe diabética — só se perguntarem sobre a família",
        "Medo de não conseguir engravidar — só se perguntarem sobre planos de gestação",
      ],
      actorBehavior: "Envergonhada ao falar dos pelos no rosto. Preocupada com a fertilidade. Pergunta se precisa emagrecer e se vai conseguir engravidar.",
    },
    instC: {
      diagnosis: "Síndrome dos Ovários Policísticos (SOP) com Síndrome Metabólica",
      differentials: [
        "Gravidez — sempre a primeira hipótese na amenorreia; afastada pelo beta-HCG",
        "Hiperprolactinemia — prolactina normal",
        "Hipotireoidismo — TSH normal",
        "Hiperplasia adrenal congênita não clássica — dosar 17-OH progesterona se hiperandrogenismo importante",
        "Tumor ovariano ou adrenal produtor de androgênio — testosterona muito alta ou virilização rápida; não é o caso",
      ],
      context: "Paciente de 28 anos com amenorreia secundária, obesidade central, sinais de hiperandrogenismo, resistência insulínica e ultrassom compatível com ovários policísticos. Preenche critérios de Rotterdam e apresenta componentes metabólicos significativos.",
      justify: "Evidência clínica e laboratorial: amenorreia, hirsutismo, acantose nigricans, LH elevado, testosterona total elevada, HOMA-IR alterado e ultrassom policístico.",
      expectedAnamnesis: [
        "Investigar história menstrual detalhada (idade da menarca, padrão)",
        "Afastar gravidez (perguntou sobre atividade sexual)",
        "Investigar sintomas de hiperandrogenismo (hirsutismo, acne)",
        "Perguntar sobre ganho de peso e sua distribuição",
        "Pesquisar história familiar de SOP ou diabetes",
      ],
      expectedPhysical: [
        "Investigar alterações cutâneas (acantose)",
        "Solicitar exame físico incluindo IMC e pesquisa de hirsutismo",
        "Pesquisar acantose nigricans",
      ],
      expectedExams: [
        { exam: "Beta-HCG", justify: "Excluir gravidez", expected: "Negativo" },
        { exam: "TSH e prolactina", justify: "Excluir causas de amenorreia e diferenciais", expected: "Normais" },
        {
          exam: "LH, FSH, testosterona total e DHEA-S",
          justify: "Hiperandrogenismo e relação LH/FSH",
          expected: "LH/FSH > 3 e testosterona elevada",
        },
        {
          exam: "Glicemia, insulina (HOMA-IR) e perfil lipídico",
          justify: "Rastreio metabólico",
          expected: "Glicemia de jejum alterada e resistência insulínica",
        },
        {
          exam: "USG transvaginal",
          justify: "Morfologia ovariana e endométrio",
          expected: "Ovários com múltiplos folículos periféricos",
        },
      ],
      expectedConduct: [
        "Mudança de estilo de vida com perda de 5–10% do peso (pilar do tratamento)",
        "Anticoncepcional combinado para regularizar ciclos, proteger o endométrio e tratar hiperandrogenismo (não deseja gestar agora)",
        "Metformina pela resistência insulínica e glicemia de jejum alterada",
        "Tratamento cosmético do hirsutismo; espironolactona se resposta insuficiente (com contracepção)",
        "Orientar que a fertilidade é possível com indução da ovulação quando desejar",
      ],
      expectedCommunication: [
        "Identificação e apresentação adequada",
        "Usar linguagem acessível, sem jargão",
        "Explicar o diagnóstico e o plano de forma clara",
        "Verificar o entendimento e esclarecer dúvidas",
      ],
      criticalErrors: [
        "Não solicitar β-HCG para descartar gravidez",
        "Não solicitar ultrassom transvaginal",
        "Não reconhecer acantose nigricans como marcador de resistência insulínica",
        "Não rastrear síndrome metabólica (glicemia, lipidograma)",
      ],
    },
    instD: {
      title: "Síndrome dos Ovários Policísticos (SOP)",
      sections: [
        {
          h: "BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
          items: [
            {
              item: "Identificação e apresentação adequada",
              score: 0.5,
              ref: "FEBRASGO. Síndrome dos Ovários Policísticos, 2023",
            },
          ],
        },
        {
          h: "BLOCO 2 — ANAMNESE",
          items: [
            {
              item: "Investigou história menstrual detalhada (idade da menarca, padrão)",
              score: 0.5,
              ref: "FEBRASGO. Síndrome dos Ovários Policísticos, 2023",
            },
            {
              item: "Afastou gravidez (perguntou sobre atividade sexual)",
              score: 1,
              ref: "FEBRASGO. Síndrome dos Ovários Policísticos, 2023",
            },
            {
              item: "Investigou sintomas de hiperandrogenismo (hirsutismo, acne)",
              score: 1,
              ref: "FEBRASGO. Síndrome dos Ovários Policísticos, 2023",
            },
            {
              item: "Perguntou sobre ganho de peso e sua distribuição",
              score: 0.5,
              ref: "FEBRASGO. Síndrome dos Ovários Policísticos, 2023",
            },
            {
              item: "Pesquisou história familiar de SOP ou diabetes",
              score: 0.5,
              ref: "FEBRASGO. Síndrome dos Ovários Policísticos, 2023",
            },
          ],
        },
        {
          h: "BLOCO 3 — EXAME FÍSICO",
          items: [
            {
              item: "Investigou alterações cutâneas (acantose)",
              score: 0.5,
              ref: "FEBRASGO. Síndrome dos Ovários Policísticos, 2023",
            },
            {
              item: "Solicitou exame físico incluindo IMC e pesquisa de hirsutismo",
              score: 0.5,
              ref: "FEBRASGO. Síndrome dos Ovários Policísticos, 2023",
            },
            {
              item: "Pesquisou acantose nigricans",
              score: 0.5,
              ref: "FEBRASGO. Síndrome dos Ovários Policísticos, 2023",
            },
          ],
        },
        {
          h: "BLOCO 4 — EXAMES COMPLEMENTARES",
          items: [
            {
              item: "Solicitou β-HCG para descartar gravidez",
              score: 0.5,
              ref: "FEBRASGO. Síndrome dos Ovários Policísticos, 2023",
            },
            {
              item: "Solicitou perfil hormonal (LH, FSH, testosterona)",
              score: 1,
              ref: "FEBRASGO. Síndrome dos Ovários Policísticos, 2023",
            },
            {
              item: "Solicitou TSH e prolactina (diagnósticos diferenciais)",
              score: 0.5,
              ref: "FEBRASGO. Síndrome dos Ovários Policísticos, 2023",
            },
            {
              item: "Solicitou ultrassom transvaginal",
              score: 0.5,
              ref: "FEBRASGO. Síndrome dos Ovários Policísticos, 2023",
            },
            {
              item: "Solicitou glicemia e insulina (rastreio metabólico)",
              score: 0.5,
              ref: "FEBRASGO. Síndrome dos Ovários Policísticos, 2023",
            },
          ],
        },
        {
          h: "BLOCO 5 — RACIOCÍNIO CLÍNICO",
          items: [
            {
              item: "Formulou hipótese diagnóstica de SOP",
              score: 1,
              ref: "FEBRASGO. Síndrome dos Ovários Policísticos, 2023",
            },
          ],
        },
        {
          h: "BLOCO 6 — CONDUTA",
          items: [
            {
              item: "Orientou sobre mudança de estilo de vida e perda de peso",
              score: 0.5,
              ref: "FEBRASGO. Síndrome dos Ovários Policísticos, 2023",
            },
          ],
        },
      ],
      study: [
        {
          h: "Definição",
          body: "<p>A SOP é a endocrinopatia mais comum em mulheres em idade reprodutiva (6-10% da população), caracterizada por disfunção ovulatória e hiperandrogenismo.</p><p>Critérios de Rotterdam: presença de 2 dos 3 critérios:</p><ul><li>Oligo ou anovulação</li><li>Sinais clínicos ou laboratoriais de hiperandrogenismo</li><li>Ovários policísticos ao ultrassom</li></ul><p>Importante excluir outras causas de hiperandrogenismo e anovulação.</p>",
        },
        {
          h: "Quadro Clínico",
          body: "<ul><li>Oligomenorreia ou amenorreia secundária</li><li>Hirsutismo, acne, alopecia androgenética</li><li>Acantose nigricans</li><li>Obesidade centrípeta</li><li>Resistência insulínica</li><li>Dislipidemia</li><li>Infertilidade anovulatória</li></ul>",
        },
        {
          h: "Investigação Laboratorial",
          body: "<p>Obrigatórios:</p><ul><li>β-HCG</li><li>TSH</li><li>Prolactina</li><li>Testosterona total</li><li>17-OH progesterona se suspeita de hiperplasia adrenal congênita</li></ul><p>Avaliação metabólica: glicemia de jejum, insulina de jejum, cálculo do HOMA-IR e perfil lipídico.</p><p>Padrão hormonal típico: LH elevado, FSH normal ou baixo, relação LH/FSH > 2:1 em 60% dos casos, testosterona total aumentada.</p>",
        },
        {
          h: "Tratamento",
          body: "<p>Abordagem por objetivos:</p><ul><li>Perda de peso e estilo de vida: dieta hipocalórica e exercício</li><li>Metformina 1500-2000 mg/dia em resistência insulínica</li><li>ACO combinado para mulheres que não desejam engravidar</li><li>Espironolactona 50-100 mg/dia para hirsutismo significativo</li><li>Clomifeno para indução de ovulação em desejo de gravidez</li></ul>",
        },
        {
          h: "Acompanhamento e Armadilhas",
          body: "<p>Armadilhas:</p><ul><li>Não descartar gravidez</li><li>Não reconhecer acantose nigricans</li><li>Prescrever ACO sem investigar contraindicações</li><li>Esquecer orientação sobre risco de câncer de endométrio</li></ul>",
        },
      ],
    },
  },

  // ── ESTAÇÃO 7: Diabetes Mellitus Tipo 2 (Homem, idoso) ─
  {
    id: 7,
    title: "Exames de rotina com açúcar alto",
    sub: "UBS · Clínica Médica",
    tema: "Endocrinologia",
    topic: "endocrinologia",
    level: "moderado",
    cardAccent: "#4caf50",
    instA: {
      scenario: "Você está no ambulatório de clínica médica de uma UBS.",
      patient: "A.M.S., 68 anos, sexo masculino, aposentado.",
      complaint: "Paciente traz exames realizados há 2 semanas e refere que o açúcar deu um pouco alto.",
      tasks: [
        "Apresente-se e estabeleça vínculo com o paciente.",
        "Realize anamnese dirigida ao quadro atual.",
        "Solicite e interprete os dados do exame físico.",
        "Interprete os exames trazidos pelo paciente.",
        "Formule a hipótese diagnóstica.",
        "Defina a conduta e as orientações adequadas.",
      ],
    },
    instB: {
      vitals: {
        PA: "145/92 mmHg",
        FC: "76 bpm",
        FR: "16 irpm",
        Peso: "94 kg",
        Altura: "1.72 m",
        IMC: "31.8 kg/m²",
        CA: "108 cm",
      },
      physicalGeneral: "Obesidade central, acantose nigricans discreta cervical posterior, estado geral bom.",
      physicalSeg: [
        "Cardiovascular: RCR 2T, BNF, sem sopros; pulsos periféricos palpáveis e simétricos.",
        "Respiratório: MV presente bilateralmente, sem RA.",
        "Abdome: globoso, flácido, RHA presentes, indolor, sem visceromegalias.",
        "Membros inferiores: pulsos pedioso e tibial posterior presentes, sem edema, sensibilidade tátil preservada ao monofilamento de 10 g, reflexos presentes e simétricos.",
      ],
      labs: [
        { test: "Glicemia jejum", val: "138 mg/dL", ref: "< 100 normal", alt: true },
        { test: "Hemoglobina glicada (HbA1c)", val: "7.2%", ref: "< 5.7% normal", alt: true },
        { test: "Colesterol total", val: "248 mg/dL", ref: "< 200", alt: true },
        { test: "LDL", val: "165 mg/dL", ref: "< 130", alt: true },
        { test: "HDL", val: "38 mg/dL", ref: "> 40", alt: true },
        { test: "Triglicerídeos", val: "285 mg/dL", ref: "< 150", alt: true },
        { test: "Creatinina", val: "1.2 mg/dL", ref: "0.7-1.3", alt: false },
        { test: "TFG (CKD-EPI)", val: "68 mL/min/1.73m²", ref: "> 90", alt: true },
        { test: "EAS", val: "Normal", ref: "—", alt: false },
        { test: "Relação albumina/creatinina urinária", val: "18 mg/g", ref: "< 30", alt: false },
        { test: "TSH", val: "2.1 μUI/mL", ref: "0.4-4.0", alt: false },
      ],
      image: null,
      patientProfile: "Aposentado de 68 anos, sedentário desde que parou de trabalhar. Hipertenso há 10 anos em uso de losartana. Gosta de massas, pão e frituras; bebe 3–4 latas de cerveja no fim de semana. Mãe diabética em uso de insulina; pai morreu de infarto aos 65 anos.",
      script: [
        {
          trigger: "Sobre os exames",
          speech: "Doutor, fiz esses exames há 2 semanas no posto. A moça falou que o açúcar estava alto, por isso vim consultar.",
        },
        { trigger: "Sintomas", speech: "Não sinto nada de especial. Às vezes fico com sede, mas acho que é normal." },
        { trigger: "Urinar à noite", speech: "Estou urinando mais à noite, levanto 2 vezes para ir ao banheiro." },
        { trigger: "História pessoal", speech: "Tenho pressão alta há uns 10 anos, tomo losartana 50 mg de manhã." },
        { trigger: "Histórico de diabetes", speech: "Nunca tive diabetes antes, nunca me falaram nada." },
        {
          trigger: "Hábitos",
          speech: "Não faço exercício, sou sedentário desde que aposentei. Não fumo, bebo cerveja no fim de semana, umas 3-4 latas. Gosto muito de massa, arroz, pão. Como muita fritura também.",
        },
        {
          trigger: "História familiar",
          speech: "Minha mãe tinha diabetes, tomava insulina. Meu pai morreu de infarto aos 65 anos. Tenho um irmão com diabetes também.",
        },
        { trigger: "Medicações atuais", speech: "Só tomo a losartana mesmo, de manhã." },
        {
          trigger: "Perguntas do paciente",
          speech: "Estou com diabetes então? Vou precisar tomar insulina? O colesterol alto é grave? Posso continuar bebendo cerveja? Preciso mesmo fazer dieta?",
        },
      ],
      hiddenInfo: [
        "Noctúria (levanta 2 vezes à noite) — só se perguntarem",
        "Consumo de cerveja nos fins de semana — só se perguntarem sobre álcool",
        "Pai morreu de infarto aos 65 anos — só se perguntarem sobre a família",
      ],
      actorBehavior: "Tranquilo, um pouco resistente a mudar a alimentação. Teme a insulina por causa da mãe. Pergunta se pode continuar bebendo cerveja.",
    },
    instC: {
      diagnosis: "Diabetes Mellitus tipo 2 de novo + Dislipidemia + Hipertensão Arterial Sistêmica + Obesidade (Síndrome Metabólica)",
      differentials: [
        "Pré-diabetes — sai: HbA1c ≥ 6,5% e glicemia de jejum ≥ 126 mg/dL fecham diabetes (confirmar com segundo exame se assintomático)",
        "Diabetes tipo 1 de início tardio (LADA) — menos provável: idade, obesidade e síndrome metabólica",
        "Diabetes secundário (corticoide, pancreatopatia) — sem uso de medicamentos ou história sugestiva",
      ],
      context: "Homem de 68 anos com diagnóstico novo de DM2, múltiplos fatores de risco cardiovascular e síndrome metabólica. Exames confirmam diabetes por HbA1c 7.2% e glicemia jejum 138 mg/dL, dislipidemia mista, pressão arterial elevada e TFG levemente reduzida.",
      justify: "Diagnóstico baseado em critérios laboratoriais de DM2 e presença de fatores metabólicos de alto risco cardiovascular.",
      expectedAnamnesis: [
        "Investigar sintomas clássicos de diabetes (poliúria, polidipsia)",
        "Perguntar sobre antecedentes pessoais (HAS)",
        "Investigar história familiar de diabetes e DCV",
        "Avaliar hábitos de vida (dieta, exercício, álcool, tabagismo)",
        "Perguntar sobre medicações em uso",
      ],
      expectedPhysical: [
        "Solicitar exame físico completo incluindo IMC e CA",
        "Avaliar pulsos periféricos",
        "Realizar teste de sensibilidade com monofilamento",
      ],
      expectedExams: [
        {
          exam: "Glicemia de jejum e HbA1c",
          justify: "Diagnóstico de diabetes",
          expected: "Glicemia 138 mg/dL e HbA1c 7,2%",
        },
        { exam: "Perfil lipídico", justify: "Risco cardiovascular", expected: "LDL 165, HDL 38, triglicerídeos 285" },
        {
          exam: "Creatinina/TFG e relação albumina/creatinina urinária",
          justify: "Rastrear doença renal do diabetes",
          expected: "TFG 68 e albuminúria normal",
        },
        {
          exam: "Fundo de olho",
          justify: "Rastreio de retinopatia ao diagnóstico",
          expected: "Encaminhar ao oftalmologista",
        },
        {
          exam: "Exame dos pés com monofilamento",
          justify: "Rastreio de neuropatia",
          expected: "Sensibilidade preservada",
        },
      ],
      expectedConduct: [
        "Mudança de estilo de vida: dieta com menos carboidratos simples e frituras, atividade física 150 min/semana, reduzir álcool",
        "Metformina como primeira linha (iniciar 500 mg e titular)",
        "Estatina de alta potência (atorvastatina 40–80 mg ou rosuvastatina 20–40 mg)",
        "Manter losartana; meta de PA < 130/80 mmHg",
        "Meta de HbA1c < 7% (individualizar); retorno em 3 meses",
        "Educação em diabetes, cuidados com os pés e vacinação",
      ],
      expectedCommunication: [
        "Identificação e apresentação adequada",
        "Usar linguagem acessível, sem jargão",
        "Explicar o diagnóstico e o plano de forma clara",
        "Verificar o entendimento e esclarecer dúvidas",
      ],
      criticalErrors: [
        "Não diagnosticar diabetes (HbA1c ≥ 6.5% é diagnóstico)",
        "Não prescrever estatina (obrigatória em DM com risco CV muito alto)",
        "Prescrever sulfonilureia como primeira linha (metformina é primeira escolha)",
        "Não orientar mudança de estilo de vida",
        "Não avaliar pés (exame obrigatório no diagnóstico)",
      ],
    },
    instD: {
      title: "Diabetes Mellitus Tipo 2 — Diagnóstico e Manejo Inicial",
      sections: [
        {
          h: "BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
          items: [
            {
              item: "Identificação e apresentação adequada",
              score: 0.5,
              ref: "SBD. Diretriz da Sociedade Brasileira de Diabetes, 2024",
            },
          ],
        },
        {
          h: "BLOCO 2 — ANAMNESE",
          items: [
            {
              item: "Investigou sintomas clássicos de diabetes (poliúria, polidipsia)",
              score: 0.5,
              ref: "SBD. Diretriz da Sociedade Brasileira de Diabetes, 2024",
            },
            {
              item: "Perguntou sobre antecedentes pessoais (HAS)",
              score: 0.5,
              ref: "SBD. Diretriz da Sociedade Brasileira de Diabetes, 2024",
            },
            {
              item: "Investigou história familiar de diabetes e DCV",
              score: 0.5,
              ref: "SBD. Diretriz da Sociedade Brasileira de Diabetes, 2024",
            },
            {
              item: "Avaliou hábitos de vida (dieta, exercício, álcool, tabagismo)",
              score: 0.5,
              ref: "SBD. Diretriz da Sociedade Brasileira de Diabetes, 2024",
            },
            {
              item: "Perguntou sobre medicações em uso",
              score: 0.5,
              ref: "SBD. Diretriz da Sociedade Brasileira de Diabetes, 2024",
            },
          ],
        },
        {
          h: "BLOCO 3 — EXAME FÍSICO",
          items: [
            {
              item: "Solicitou exame físico completo incluindo IMC e CA",
              score: 0.5,
              ref: "SBD. Diretriz da Sociedade Brasileira de Diabetes, 2024",
            },
            {
              item: "Avaliou pulsos periféricos",
              score: 0.5,
              ref: "SBD. Diretriz da Sociedade Brasileira de Diabetes, 2024",
            },
            {
              item: "Realizou teste de sensibilidade com monofilamento",
              score: 0.5,
              ref: "SBD. Diretriz da Sociedade Brasileira de Diabetes, 2024",
            },
          ],
        },
        {
          h: "BLOCO 4 — EXAMES COMPLEMENTARES",
          items: [
            {
              item: "Interpretou corretamente HbA1c 7.2% como diagnóstico de DM2",
              score: 1,
              ref: "SBD. Diretriz da Sociedade Brasileira de Diabetes, 2024",
            },
            {
              item: "Identificou dislipidemia mista",
              score: 0.5,
              ref: "SBD. Diretriz da Sociedade Brasileira de Diabetes, 2024",
            },
          ],
        },
        {
          h: "BLOCO 5 — RACIOCÍNIO CLÍNICO",
          items: [
            {
              item: "Calculou risco cardiovascular (muito alto)",
              score: 0.5,
              ref: "SBD. Diretriz da Sociedade Brasileira de Diabetes, 2024",
            },
          ],
        },
        {
          h: "BLOCO 6 — CONDUTA",
          items: [
            {
              item: "Orientou mudança de estilo de vida como pilar do tratamento",
              score: 1,
              ref: "SBD. Diretriz da Sociedade Brasileira de Diabetes, 2024",
            },
            {
              item: "Prescreveu metformina como primeira escolha",
              score: 1,
              ref: "SBD. Diretriz da Sociedade Brasileira de Diabetes, 2024",
            },
            {
              item: "Prescreveu estatina de alta potência (atorvastatina ou rosuvastatina)",
              score: 1,
              ref: "SBD. Diretriz da Sociedade Brasileira de Diabetes, 2024",
            },
            {
              item: "Orientou metas glicêmicas (HbA1c < 7% ou individualizada)",
              score: 0.5,
              ref: "SBD. Diretriz da Sociedade Brasileira de Diabetes, 2024",
            },
          ],
        },
      ],
      study: [
        {
          h: "Critérios Diagnósticos",
          body: "<ul><li>HbA1c ≥ 6.5%</li><li>Glicemia jejum ≥ 126 mg/dL</li><li>Glicemia 2h pós-TOTG ≥ 200 mg/dL</li><li>Glicemia aleatória ≥ 200 mg/dL + sintomas clássicos</li></ul><p>Pré-diabetes: HbA1c 5.7-6.4%, glicemia jejum 100-125 mg/dL, TOTG 140-199 mg/dL.</p>",
        },
        {
          h: "Estratificação e Tratamento",
          body: "<p>O manejo inicial deve priorizar mudança de estilo de vida, controle de peso e prevenção cardiovascular.</p><ul><li>Metformina como primeira linha</li><li>Estatina de alta potência obrigatória em risco CV muito alto</li><li>Meta LDL < 50 mg/dL em risco muito alto</li><li>Meta HbA1c < 7% na maioria dos pacientes, individualizando conforme idade e comorbidades</li></ul>",
        },
        {
          h: "Avaliação Inicial do Paciente com DM2",
          body: "<p>Anamnese deve abordar sintomas clássicos, história familiar, hábitos e comorbidades. Exame físico inclui PA, IMC, circunferência abdominal, exame cardíaco e dos pés.</p><p>Exames iniciais: HbA1c, perfil lipídico, creatinina, TFG, relação albumina/creatinina, EAS e TSH se sugestivo.</p>",
        },
      ],
    },
  },

  // ── ESTAÇÃO 8: Hipertireoidismo (Mulher, adulta) ─
  {
    id: 8,
    title: "Palpitações, perda de peso e bócio difuso",
    sub: "Ambulatório de Endocrinologia — Hospital Secundário",
    tema: "Endocrinologia",
    topic: "hipertireoidismo",
    level: "moderado",
    cardAccent: "#f39c12",
    instA: {
      scenario: "Você está no ambulatório de endocrinologia de um hospital secundário.",
      patient: "R.M.L., 45 anos, sexo feminino, secretária.",
      complaint: "Paciente relata nervosismo, palpitações e perda de peso de 7 kg em 3 meses, apesar de apetite aumentado.",
      tasks: [
        "Apresente-se e estabeleça vínculo com o paciente.",
        "Realize anamnese dirigida ao quadro atual.",
        "Solicite e interprete os dados do exame físico.",
        "Formule a hipótese diagnóstica.",
        "Solicite os exames complementares adequados.",
        "Defina a conduta inicial e oriente o paciente.",
      ],
    },
    instB: {
      vitals: {
        PA: "140/75 mmHg",
        FC: "112 bpm",
        FR: "18 irpm",
        Tax: "37.8°C",
        Peso: "58 kg",
        Altura: "1.65 m",
        IMC: "21.3 kg/m²",
      },
      physicalGeneral: "Paciente ansiosa e hiperativa, pele quente e úmida, tremor fino de extremidades, exoftalmia bilateral leve.",
      physicalSeg: [
        "Tireoide: aumento difuso visível, consistência elástica, móvel, frêmito palpável, sopro à ausculta, sem nódulos.",
        "Cardiovascular: taquicardia, RCR 2T, sem sopros, pulsos amplos e saltitantes.",
        "Neurológico: reflexos hiperativos globalmente, tremor fino de extremidades.",
      ],
      labs: [
        { test: "TSH", val: "< 0.01 μUI/mL", ref: "0.4 - 4.0", alt: true },
        { test: "T4 livre", val: "3.2 ng/dL", ref: "0.8 - 1.8", alt: true },
        { test: "T3 total", val: "285 ng/dL", ref: "80 - 200", alt: true },
        { test: "TRAb", val: "18.5 UI/L", ref: "< 1.75", alt: true },
        { test: "Anti-TPO", val: "125 UI/mL", ref: "< 35", alt: true },
        { test: "Hemograma", val: "Normal", ref: "—", alt: false },
      ],
      image: {
        title: "Ultrassom de Tireóide com Doppler",
        report: "Glândula aumentada difusamente (volume total 35 mL), ecotextura hipoecogênica, hipervascularização difusa compatível com 'inferno tireoidiano', sem nódulos. Conclusão: aspecto compatível com tireoidite difusa sugestiva de Doença de Graves.",
      },
      patientProfile: "Secretária de 45 anos, sem doenças prévias. Tia com doença de tireoide. Os sintomas atrapalham o trabalho (tremor para escrever, agitação) e o sono.",
      script: [
        { trigger: "Queixa principal", speech: "Doutora, estou muito nervosa, agitada, meu coração vive acelerado." },
        {
          trigger: "Sobre peso",
          speech: "Perdi 7 quilos nos últimos 3 meses, mas estou comendo muito mais que antes.",
        },
        {
          trigger: "Sobre temperatura",
          speech: "Sinto muito calor, fico suando o tempo todo, mesmo quando está frio.",
        },
        { trigger: "Sobre sono", speech: "Não consigo dormir, durmo 3-4 horas por noite só. Fico inquieta." },
        { trigger: "Sobre tremor", speech: "Minhas mãos tremem, está difícil escrever." },
        { trigger: "Sobre olhos", speech: "Sinto que meus olhos ficaram mais saltados, as pessoas comentam." },
        { trigger: "Sobre intestino", speech: "Meu intestino ficou solto, às vezes tenho diarreia." },
        { trigger: "Sobre menstruação", speech: "Minha menstruação ficou irregular, vem pouca, às vezes pula." },
        { trigger: "Antecedentes", speech: "Não tenho outras doenças." },
        { trigger: "História familiar", speech: "Minha tia teve problema de tireoide também." },
        {
          trigger: "Perguntas do paciente",
          speech: "O que eu tenho, doutora? Por que estou emagrecendo tanto? Tem tratamento? Vou precisar operar?",
        },
      ],
      hiddenInfo: [
        "Olhos 'mais saltados' segundo os colegas — só se perguntarem sobre os olhos",
        "Diarreia e menstruação escassa e irregular — só se perguntarem",
        "Tia com doença de tireoide — só se perguntarem sobre a família",
      ],
      actorBehavior: "Agitada, fala rápido, mexe as mãos (tremor fino visível). Ansiosa, pergunta se vai precisar operar.",
    },
    instC: {
      diagnosis: "Doença de Graves (hipertireoidismo primário autoimune)",
      differentials: [
        "Bócio multinodular tóxico — sai: bócio difuso, sem nódulos e com TRAb positivo",
        "Tireoidite subaguda ou silenciosa — sai: hipervascularização no Doppler e TRAb positivo indicam produção aumentada",
        "Transtorno de ansiedade — sem perda de peso com apetite aumentado, bócio ou exoftalmia",
        "Feocromocitoma — palpitações e sudorese, mas sem crises hipertensivas e com função tireoidiana alterada",
      ],
      context: "Mulher de 45 anos com quadro de tireotoxicose: perda de peso paradoxal, palpitações, tremor, hiperatividade e insônia. Exame físico mostra bócio difuso, frêmito, sopro, exoftalmia leve e reflexos hiperativos. Laboratórios confirmam TSH suprimido, T4 livre e T3 elevados, e TRAb positivo.",
      justify: "Diagnóstico confirmado por achados clínicos típicos e TRAb positivo, patognomônico de Graves.",
      expectedAnamnesis: [
        "Investigar perda de peso paradoxal com apetite aumentado",
        "Perguntar sobre palpitações e taquicardia",
        "Investigar intolerância ao calor e sudorese",
        "Perguntar sobre tremor e hiperatividade",
        "Investigar alterações oculares (exoftalmia)",
        "Perguntar sobre hábito intestinal",
        "Investigar história familiar de doença tireoidiana",
      ],
      expectedPhysical: ["Solicitar exame físico completo da tireoide", "Pesquisar tremor fino e reflexos"],
      expectedExams: [
        {
          exam: "TSH e T4 livre (e T3)",
          justify: "Confirmar tireotoxicose",
          expected: "TSH suprimido e T4 livre/T3 elevados",
        },
        { exam: "TRAb", justify: "Confirmar doença de Graves", expected: "Positivo" },
        {
          exam: "USG de tireoide com Doppler",
          justify: "Bócio difuso e hipervascularização",
          expected: "Glândula aumentada com hipervascularização difusa",
        },
        { exam: "Hemograma e transaminases basais", justify: "Antes de iniciar tionamida", expected: "Normais" },
      ],
      expectedConduct: [
        "Metimazol 15–30 mg/dia (propiltiouracil só no 1º trimestre de gestação ou crise tireotóxica)",
        "Propranolol 40–120 mg/dia para sintomas adrenérgicos",
        "Orientar sinais de agranulocitose (febre, dor de garganta) e hepatotoxicidade: suspender e procurar atendimento",
        "TSH, T4 livre e T3 em 4–6 semanas",
        "Avaliação oftalmológica; cessar tabagismo; discutir radioiodo ou cirurgia se recidiva",
      ],
      expectedCommunication: [
        "Identificação e apresentação adequada",
        "Usar linguagem acessível, sem jargão",
        "Explicar o diagnóstico e o plano de forma clara",
        "Verificar o entendimento e esclarecer dúvidas",
      ],
      criticalErrors: [
        "Não solicitar TSH como exame inicial",
        "Não solicitar TRAb para diferenciar Graves de outras causas",
        "Prescrever apenas betabloqueador isolado",
        "Não alertar sobre sinais de crise tireotóxica",
      ],
    },
    instD: {
      title: "Doença de Graves (Hipertireoidismo Autoimune)",
      sections: [
        {
          h: "BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
          items: [
            {
              item: "Identificação e apresentação adequada",
              score: 0.5,
              ref: "SBEM. Consenso Brasileiro de Hipertireoidismo, 2023",
            },
          ],
        },
        {
          h: "BLOCO 2 — ANAMNESE",
          items: [
            {
              item: "Investigou perda de peso paradoxal com apetite aumentado",
              score: 0.5,
              ref: "SBEM. Consenso Brasileiro de Hipertireoidismo, 2023",
            },
            {
              item: "Perguntou sobre palpitações e taquicardia",
              score: 0.5,
              ref: "SBEM. Consenso Brasileiro de Hipertireoidismo, 2023",
            },
            {
              item: "Investigou intolerância ao calor e sudorese",
              score: 0.5,
              ref: "SBEM. Consenso Brasileiro de Hipertireoidismo, 2023",
            },
            {
              item: "Perguntou sobre tremor e hiperatividade",
              score: 0.5,
              ref: "SBEM. Consenso Brasileiro de Hipertireoidismo, 2023",
            },
            {
              item: "Investigou alterações oculares (exoftalmia)",
              score: 0.5,
              ref: "SBEM. Consenso Brasileiro de Hipertireoidismo, 2023",
            },
            {
              item: "Perguntou sobre hábito intestinal",
              score: 0.5,
              ref: "SBEM. Consenso Brasileiro de Hipertireoidismo, 2023",
            },
            {
              item: "Investigou história familiar de doença tireoidiana",
              score: 0.5,
              ref: "SBEM. Consenso Brasileiro de Hipertireoidismo, 2023",
            },
          ],
        },
        {
          h: "BLOCO 3 — EXAME FÍSICO",
          items: [
            {
              item: "Solicitou exame físico completo da tireoide",
              score: 1,
              ref: "SBEM. Consenso Brasileiro de Hipertireoidismo, 2023",
            },
            {
              item: "Pesquisou tremor fino e reflexos",
              score: 0.5,
              ref: "SBEM. Consenso Brasileiro de Hipertireoidismo, 2023",
            },
          ],
        },
        {
          h: "BLOCO 4 — EXAMES COMPLEMENTARES",
          items: [
            { item: "Solicitou TSH e T4 livre", score: 1, ref: "SBEM. Consenso Brasileiro de Hipertireoidismo, 2023" },
            { item: "Solicitou TRAb", score: 1, ref: "SBEM. Consenso Brasileiro de Hipertireoidismo, 2023" },
          ],
        },
        {
          h: "BLOCO 5 — RACIOCÍNIO CLÍNICO",
          items: [
            {
              item: "Formulou hipótese de hipertireoidismo",
              score: 1,
              ref: "SBEM. Consenso Brasileiro de Hipertireoidismo, 2023",
            },
          ],
        },
        {
          h: "BLOCO 6 — CONDUTA",
          items: [
            {
              item: "Prescreveu tionamida (metimazol ou propiltiouracil)",
              score: 1,
              ref: "SBEM. Consenso Brasileiro de Hipertireoidismo, 2023",
            },
            {
              item: "Prescreveu betabloqueador para sintomas adrenérgicos",
              score: 0.5,
              ref: "SBEM. Consenso Brasileiro de Hipertireoidismo, 2023",
            },
            {
              item: "Orientou seguimento com TSH/T4L em 4-6 semanas",
              score: 0.5,
              ref: "SBEM. Consenso Brasileiro de Hipertireoidismo, 2023",
            },
          ],
        },
      ],
      study: [
        {
          h: "Definição",
          body: "<p>A Doença de Graves é a causa mais comum de hipertireoidismo, caracterizada por autoimunidade contra o receptor de TSH e produção excessiva de hormônios tireoidianos.</p>",
        },
        {
          h: "Fisiopatologia",
          body: "<p>Anticorpos TRAb estimulam continuamente a tireoide, aumentando T3 e T4 e suprimindo TSH hipofisário.</p>",
        },
        {
          h: "Diagnóstico Laboratorial",
          body: "<ul><li>TSH suprimido</li><li>T4 livre elevado</li><li>T3 total elevado</li><li>TRAb positivo é patognomônico</li></ul>",
        },
        {
          h: "Tratamento",
          body: "<ul><li>Tionamidas (metimazol como primeira escolha)</li><li>Betabloqueador para controle sintomático</li><li>Radioiodoterapia ou tireoidectomia em casos selecionados</li></ul>",
        },
      ],
    },
  },

  // ── ESTAÇÃO 9: Nódulo Tireoidiano Altamente Suspeito (Mulher, adulta) ─
  {
    id: 9,
    title: "Nódulo tireoidiano altamente suspeito",
    sub: "Ambulatório de Cabeça e Pescoço — Hospital Terciário",
    tema: "Endocrinologia",
    topic: "tireoide",
    level: "difícil",
    cardAccent: "#7f8c8d",
    instA: {
      scenario: "Você está no ambulatório de cabeça e pescoço de um hospital terciário.",
      patient: "L.P.F., 58 anos, sexo feminino, comerciante.",
      complaint: "Paciente refere nódulo cervical anterior indolor há 6 meses, com crescimento progressivo.",
      tasks: [
        "Apresente-se e estabeleça vínculo com o paciente.",
        "Realize anamnese dirigida ao quadro atual.",
        "Solicite e interprete os dados do exame físico.",
        "Solicite os exames complementares adequados.",
        "Formule a hipótese diagnóstica.",
        "Defina a conduta e oriente o paciente.",
      ],
    },
    instB: {
      vitals: { PA: "125/80 mmHg", FC: "72 bpm", FR: "16 irpm", Peso: "68 kg", Altura: "1.60 m", IMC: "26.6 kg/m²" },
      physicalGeneral: "Estado geral bom. Ausculta pulmonar e cardíaca normais.",
      physicalSeg: [
        "Tireoide com nódulo visível e palpável no lobo esquerdo, endurecido, fixo e indolor; mobilidade laríngea preservada.",
        "Sem adenopatia cervical palpável nos níveis I a VI.",
        "Laringoscopia indireta: mobilidade de cordas vocais preservada bilateralmente.",
      ],
      labs: [
        { test: "TSH", val: "2.1 μUI/mL", ref: "0.4 - 4.0", alt: false },
        { test: "T4 livre", val: "1.1 ng/dL", ref: "0.8 - 1.8", alt: false },
        { test: "Calcitonina", val: "3.5 pg/mL", ref: "< 10", alt: false },
        { test: "Tireoglobulina", val: "45 ng/mL", ref: "variável", alt: false },
      ],
      image: {
        title: "Ultrassom de Tireóide com Doppler",
        report: "Lobo esquerdo com nódulo sólido 2.3 x 1.8 x 2.1 cm, hipoecogênico, margens irregulares e espiculadas, microcalcificações, vascularização central aumentada e maior diâmetro ântero-posterior do que transverso. Classificação ACR-TIRADS 5. Linfonodos cervicais sem alterações significativas.",
      },
      note: "PAAF realizada e citologia Bethesda V: suspeito de malignidade.",
      patientProfile: "Comerciante de 58 anos. Percebeu o nódulo por acaso há 6 meses. Sem radiação cervical na infância e sem câncer de tireoide na família. Muito preocupada com a possibilidade de câncer.",
      script: [
        {
          trigger: "Queixa principal",
          speech: "Doutora, tenho esse caroço no pescoço há uns 6 meses e ele está crescendo.",
        },
        { trigger: "Sobre sintomas", speech: "Não dói nada. Às vezes sinto um incômodo quando engulo." },
        { trigger: "Sobre voz", speech: "Não tenho rouquidão. Minha voz está normal." },
        {
          trigger: "História",
          speech: "Percebi o caroço por acaso, passando a mão no pescoço. Parece que está aumentando.",
        },
        {
          trigger: "Fatores de risco",
          speech: "Nunca fiz radioterapia no pescoço ou cabeça quando criança. Ninguém na família teve câncer de tireoide.",
        },
        {
          trigger: "Preocupações",
          speech: "Tenho medo de ser câncer. Vou precisar operar? Se for câncer, tem cura?",
        },
      ],
      hiddenInfo: [
        "Leve incômodo para engolir — só se perguntarem sobre sintomas compressivos",
        "Sem exposição a radiação e sem família com câncer de tireoide — só se perguntarem",
      ],
      actorBehavior: "Ansiosa e com medo de câncer. Pergunta diretamente se é câncer, se vai precisar operar e se tem cura. Acalma-se com explicações claras.",
    },
    instC: {
      diagnosis: "Nódulo tireoidiano altamente suspeito de malignidade (provável carcinoma papilífero)",
      differentials: [
        "Nódulo coloide benigno — sai: características suspeitas na USG (hipoecogênico, margens irregulares, microcalcificações) e Bethesda V",
        "Carcinoma medular — calcitonina normal torna improvável",
        "Linfoma de tireoide — crescimento rápido em tireoidite crônica; não é o caso",
        "Adenoma folicular — citologia Bethesda IV, não V",
      ],
      context: "Mulher de 58 anos com nódulo tireoidiano de 2.5 cm, endurecido e fixo. Ultrassom mostra características altamente suspeitas e PAAF Bethesda V. O caso indica cirurgia pelo alto risco de malignidade.",
      justify: "Classificação de risco ACR-TIRADS 5 e PAAF suspeita justificam indicação cirúrgica imediata.",
      expectedAnamnesis: [
        "Investigar duração e crescimento do nódulo",
        "Perguntar sobre sintomas compressivos",
        "Investigar disfonia ou rouquidão",
        "Perguntar sobre história de radiação cervical",
        "Investigar história familiar de câncer de tireoide",
      ],
      expectedPhysical: [
        "Solicitar palpação detalhada da tireoide",
        "Examinar linfonodos cervicais",
        "Avaliar mobilidade de cordas vocais",
      ],
      expectedExams: [
        { exam: "TSH", justify: "Definir se nódulo é funcionante antes da PAAF", expected: "Normal" },
        {
          exam: "USG de tireoide com Doppler e de cadeias cervicais",
          justify: "Estratificar risco (TI-RADS) e avaliar linfonodos",
          expected: "Nódulo TI-RADS 5 de 2,3 cm, sem linfonodos suspeitos",
        },
        {
          exam: "PAAF guiada por USG",
          justify: "Citologia do nódulo suspeito",
          expected: "Bethesda V (suspeito de malignidade)",
        },
        { exam: "Calcitonina", justify: "Excluir carcinoma medular", expected: "Normal" },
        {
          exam: "Laringoscopia",
          justify: "Avaliar cordas vocais antes da cirurgia",
          expected: "Mobilidade preservada",
        },
      ],
      expectedConduct: [
        "Encaminhar para cirurgia de cabeça e pescoço: tireoidectomia total (ou lobectomia em casos selecionados de baixo risco)",
        "Explicar que Bethesda V tem alto risco de câncer e que o carcinoma papilífero costuma ter bom prognóstico",
        "Orientar riscos da cirurgia: hipocalcemia e lesão do nervo laríngeo recorrente",
        "Planejar seguimento com anatomopatológico, tireoglobulina e decisão sobre radioiodo",
      ],
      expectedCommunication: [
        "Identificação e apresentação adequada",
        "Tranquilizar quanto ao bom prognóstico",
        "Usar linguagem acessível, sem jargão",
        "Explicar o diagnóstico e o plano de forma clara",
      ],
      criticalErrors: [
        "Não solicitar ultrassom",
        "Não fazer PAAF em nódulo TIRADS ≥4",
        "Indicar apenas seguimento em Bethesda V",
        "Não avaliar linfonodos cervicais",
        "Não avaliar mobilidade de cordas vocais",
      ],
    },
    instD: {
      title: "Nódulo Tireoidiano — Investigação e Conduta",
      sections: [
        {
          h: "BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
          items: [
            {
              item: "Identificação e apresentação adequada",
              score: 0.5,
              ref: "SBEM. Nódulos e Câncer Diferenciado de Tireoide, 2022",
            },
            {
              item: "Tranquilizou quanto ao bom prognóstico",
              score: 0.5,
              ref: "SBEM. Nódulos e Câncer Diferenciado de Tireoide, 2022",
            },
          ],
        },
        {
          h: "BLOCO 2 — ANAMNESE",
          items: [
            {
              item: "Investigou duração e crescimento do nódulo",
              score: 0.5,
              ref: "SBEM. Nódulos e Câncer Diferenciado de Tireoide, 2022",
            },
            {
              item: "Perguntou sobre sintomas compressivos",
              score: 0.5,
              ref: "SBEM. Nódulos e Câncer Diferenciado de Tireoide, 2022",
            },
            {
              item: "Investigou disfonia ou rouquidão",
              score: 0.5,
              ref: "SBEM. Nódulos e Câncer Diferenciado de Tireoide, 2022",
            },
            {
              item: "Perguntou sobre história de radiação cervical",
              score: 0.5,
              ref: "SBEM. Nódulos e Câncer Diferenciado de Tireoide, 2022",
            },
            {
              item: "Investigou história familiar de câncer de tireoide",
              score: 0.5,
              ref: "SBEM. Nódulos e Câncer Diferenciado de Tireoide, 2022",
            },
          ],
        },
        {
          h: "BLOCO 3 — EXAME FÍSICO",
          items: [
            {
              item: "Solicitou palpação detalhada da tireoide",
              score: 1,
              ref: "SBEM. Nódulos e Câncer Diferenciado de Tireoide, 2022",
            },
            {
              item: "Examinou linfonodos cervicais",
              score: 0.5,
              ref: "SBEM. Nódulos e Câncer Diferenciado de Tireoide, 2022",
            },
            {
              item: "Avaliou mobilidade de cordas vocais",
              score: 0.5,
              ref: "SBEM. Nódulos e Câncer Diferenciado de Tireoide, 2022",
            },
          ],
        },
        {
          h: "BLOCO 4 — EXAMES COMPLEMENTARES",
          items: [
            { item: "Solicitou TSH", score: 0.5, ref: "SBEM. Nódulos e Câncer Diferenciado de Tireoide, 2022" },
            {
              item: "Solicitou ultrassom de tireoide com Doppler",
              score: 1,
              ref: "SBEM. Nódulos e Câncer Diferenciado de Tireoide, 2022",
            },
            { item: "Solicitou PAAF", score: 1, ref: "SBEM. Nódulos e Câncer Diferenciado de Tireoide, 2022" },
            {
              item: "Interpretou corretamente Bethesda V como suspeito",
              score: 1,
              ref: "SBEM. Nódulos e Câncer Diferenciado de Tireoide, 2022",
            },
          ],
        },
        {
          h: "BLOCO 5 — CONDUTA",
          items: [
            {
              item: "Indicou cirurgia (tireoidectomia)",
              score: 1,
              ref: "SBEM. Nódulos e Câncer Diferenciado de Tireoide, 2022",
            },
            {
              item: "Orientou sobre tireoidectomia total",
              score: 0.5,
              ref: "SBEM. Nódulos e Câncer Diferenciado de Tireoide, 2022",
            },
          ],
        },
      ],
      study: [
        {
          h: "Epidemiologia",
          body: "<p>Nódulos tireoidianos são comuns, presentes em 50-60% da população ao ultrassom. Apenas 5-15% são malignos.</p>",
        },
        {
          h: "Classificação e Exames",
          body: "<p>O primeiro exame é o TSH. Ultrassom com Doppler é obrigatório para estratificar risco. PAAF é indicada em nódulos suspeitos ou ≥ 1 cm em TIRADS 3-5.</p>",
        },
        {
          h: "PAAF e Bethesda",
          body: "<p>Bethesda V ou VI exigem cirurgia. Bethesda III-IV pode justificar lobectomia ou repetição da PAAF conforme risco.</p>",
        },
        {
          h: "Tratamento Cirúrgico",
          body: "<p>Tireoidectomia total é indicada em casos suspeitos ou malignos confirmados. Lobectomia pode ser considerada em lesões de risco intermediário.</p>",
        },
      ],
    },
  },

  // ── ESTAÇÃO 10: Hipoparatireoidismo Pós-Operatório (Homem, adulto) ─
  {
    id: 10,
    title: "Parestesias após tireoidectomia total",
    sub: "Ambulatório de Endocrinologia — Pós-operatório",
    tema: "Endocrinologia",
    topic: "endocrinologia cirúrgica",
    level: "difícil",
    cardAccent: "#16a085",
    instA: {
      scenario: "Você está no ambulatório de endocrinologia, atendendo paciente em pós-operatório.",
      patient: "C.R.M., 42 anos, sexo masculino, engenheiro.",
      complaint: "Paciente retorna 7 dias após tireoidectomia total por carcinoma papilífero, referindo formigamento perioral e nas mãos.",
      tasks: [
        "Apresente-se e estabeleça vínculo com o paciente.",
        "Realize anamnese dirigida ao quadro pós-operatório.",
        "Solicite e interprete os dados do exame físico.",
        "Interprete os exames complementares disponíveis.",
        "Formule a hipótese diagnóstica.",
        "Defina a conduta e oriente o paciente sobre o seguimento.",
      ],
    },
    instB: {
      vitals: { PA: "120/75 mmHg", FC: "78 bpm", FR: "16 irpm", Tax: "36.5°C" },
      physicalGeneral: "Cicatriz cervical limpa sem sinais flogísticos, sem hematoma ou seroma, mobilização cervical preservada.",
      physicalSeg: [
        "Pacientere refere parestesias periorais e em mãos.",
        "Sinal de Chvostek positivo, sinal de Trousseau negativo.",
        "Força muscular preservada e sem fasciculações.",
        "Laringoscopia: mobilidade de cordas vocais preservada bilateralmente.",
      ],
      labs: [
        { test: "Cálcio total", val: "7.2 mg/dL", ref: "8.5 - 10.5", alt: true },
        { test: "Cálcio iônico", val: "0.95 mmol/L", ref: "1.15 - 1.35", alt: true },
        { test: "PTH", val: "8 pg/mL", ref: "15 - 65", alt: true },
        { test: "Fósforo", val: "5.8 mg/dL", ref: "2.5 - 4.5", alt: true },
        { test: "Magnésio", val: "1.8 mg/dL", ref: "1.7 - 2.4", alt: false },
        { test: "Albumina", val: "4.0 g/dL", ref: "3.5 - 5.0", alt: false },
        { test: "Creatinina", val: "1.0 mg/dL", ref: "0.7 - 1.3", alt: false },
      ],
      image: null,
      note: "Laudo anatomopatológico mostra carcinoma papilífero clássico 1.8 cm, margens livres, N0, M0, baixo risco.",
      patientProfile: "Engenheiro de 42 anos, operado há uma semana (tireoidectomia total por carcinoma papilífero). Cicatriz sem problemas. Preocupado com o câncer e se vai precisar de mais tratamento.",
      script: [
        { trigger: "Queixa principal", speech: "Doutor, desde ontem estou com formigamento na boca e nas mãos." },
        {
          trigger: "Sintomas",
          speech: "Começa ao redor da boca e vai para as pontas dos dedos. Às vezes sinto câimbras nas pernas também.",
        },
        {
          trigger: "Sobre a cirurgia",
          speech: "Fiz a cirurgia há uma semana. A cicatriz está boa, não está doendo. Retiraram a tireoide toda porque tinha câncer.",
        },
        {
          trigger: "Preocupações",
          speech: "Isso é normal depois da cirurgia? Vai passar? Vou precisar de mais tratamento para o câncer?",
        },
      ],
      hiddenInfo: [
        "Câimbras nas pernas — só se perguntarem sobre outros sintomas",
        "Os sintomas começaram ontem — só se perguntarem sobre o início",
      ],
      actorBehavior: "Calmo, objetivo (perfil de engenheiro), quer entender o porquê dos sintomas. Pergunta se vai passar e se precisa de mais tratamento para o câncer.",
    },
    instC: {
      diagnosis: "Hipoparatireoidismo pós-tireoidectomia associada a carcinoma papilífero de baixo risco (pT1bN0M0)",
      differentials: [
        "Hipocalcemia por 'fome óssea' — mais comum após paratireoidectomia; PTH estaria normal ou alto",
        "Hipomagnesemia — magnésio normal neste caso",
        "Crise de ansiedade com hiperventilação — parestesias, mas Chvostek positivo e cálcio baixo confirmam hipocalcemia",
        "Lesão de nervo periférico — não explica a parestesia perioral e as câimbras",
      ],
      context: "Homem de 42 anos, D7 pós-tireoidectomia total, com formigamento perioral e nas mãos. Laboratórios mostram hipocalcemia com PTH suprimido e hiperfosfatemia. Anatomopatologia confirma carcinoma papilífero 1.8 cm sem invasão ou metástase.",
      justify: "Diagnóstico de hipoparatireoidismo pós-operatório baseado em padrão laboratorial e sintomas típicos. Baixo risco oncológico justifica rotina de seguimento e planejamento de radioiodoterapia em 4-6 semanas.",
      expectedAnamnesis: ["Investigar sintomas de hipocalcemia (parestesias, câimbras)"],
      expectedPhysical: ["Pesquisar sinal de Chvostek", "Pesquisar sinal de Trousseau"],
      expectedExams: [
        {
          exam: "Cálcio total, cálcio iônico e albumina",
          justify: "Confirmar hipocalcemia verdadeira",
          expected: "Cálcio total 7,2 e iônico baixo, com albumina normal",
        },
        { exam: "PTH", justify: "Definir hipoparatireoidismo", expected: "Suprimido (8 pg/mL)" },
        {
          exam: "Fósforo e magnésio",
          justify: "Hiperfosfatemia típica; magnésio baixo impede correção",
          expected: "Fósforo elevado e magnésio normal",
        },
        {
          exam: "Laudo anatomopatológico",
          justify: "Estadiar o câncer e definir risco de recidiva",
          expected: "Carcinoma papilífero de 1,8 cm, pT1bN0, baixo risco",
        },
      ],
      expectedConduct: [
        "Carbonato de cálcio 1–3 g/dia de cálcio elementar VO, fracionado",
        "Calcitriol 0,25–0,5 mcg 1–2x/dia; meta de cálcio no limite inferior da normalidade (8–9 mg/dL)",
        "Gluconato de cálcio EV se sintomas graves (tetania, convulsão, QT longo)",
        "Levotiroxina após tireoidectomia; supressão de TSH conforme risco (baixo risco: TSH no limite inferior)",
        "Seguimento com tireoglobulina e USG cervical; radioiodo não é rotina no baixo risco",
        "Orientar sinais de hipocalcemia e reavaliar se persistir > 6 meses (hipoparatireoidismo definitivo)",
      ],
      expectedCommunication: [
        "Identificação e apresentação adequada",
        "Explicar que deve aguardar 4-6 semanas para radioiodo",
        "Usar linguagem acessível, sem jargão",
        "Verificar o entendimento e esclarecer dúvidas",
      ],
      criticalErrors: [
        "Não diagnosticar hipocalcemia/hipoparatireoidismo",
        "Não repor cálcio imediatamente",
        "Dar alta hospitalar sem calcitriol",
        "Indicar radioiodoterapia imediata",
        "Não prescrever levotiroxina em dose supressiva",
      ],
    },
    instD: {
      title: "Carcinoma de Tireoide — Pós-operatório e Seguimento",
      sections: [
        {
          h: "BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
          items: [
            {
              item: "Identificação e apresentação adequada",
              score: 0.5,
              ref: "SBEM. Câncer Diferenciado de Tireoide, 2022",
            },
            {
              item: "Explicou que deve aguardar 4-6 semanas para radioiodo",
              score: 0.5,
              ref: "SBEM. Câncer Diferenciado de Tireoide, 2022",
            },
          ],
        },
        {
          h: "BLOCO 2 — ANAMNESE",
          items: [
            {
              item: "Investigou sintomas de hipocalcemia (parestesias, câimbras)",
              score: 1,
              ref: "SBEM. Câncer Diferenciado de Tireoide, 2022",
            },
          ],
        },
        {
          h: "BLOCO 3 — EXAME FÍSICO",
          items: [
            { item: "Pesquisou sinal de Chvostek", score: 0.5, ref: "SBEM. Câncer Diferenciado de Tireoide, 2022" },
            { item: "Pesquisou sinal de Trousseau", score: 0.5, ref: "SBEM. Câncer Diferenciado de Tireoide, 2022" },
          ],
        },
        {
          h: "BLOCO 4 — EXAMES COMPLEMENTARES",
          items: [
            { item: "Revisou o laudo anatomopatológico", score: 0.5, ref: "SBEM. Câncer Diferenciado de Tireoide, 2022" },
            {
              item: "Solicitou dosagem de cálcio total e iônico",
              score: 1,
              ref: "SBEM. Câncer Diferenciado de Tireoide, 2022",
            },
            { item: "Solicitou dosagem de PTH", score: 0.5, ref: "SBEM. Câncer Diferenciado de Tireoide, 2022" },
          ],
        },
        {
          h: "BLOCO 5 — RACIOCÍNIO CLÍNICO",
          items: [
            {
              item: "Diagnosticou hipoparatireoidismo pós-operatório",
              score: 1,
              ref: "SBEM. Câncer Diferenciado de Tireoide, 2022",
            },
            {
              item: "Classificou como baixo risco de recidiva",
              score: 0.5,
              ref: "SBEM. Câncer Diferenciado de Tireoide, 2022",
            },
          ],
        },
        {
          h: "BLOCO 6 — CONDUTA",
          items: [
            {
              item: "Prescreveu suplementação de cálcio oral",
              score: 1,
              ref: "SBEM. Câncer Diferenciado de Tireoide, 2022",
            },
            { item: "Prescreveu calcitriol", score: 1, ref: "SBEM. Câncer Diferenciado de Tireoide, 2022" },
            {
              item: "Orientou sobre levotiroxina em dose supressiva",
              score: 1,
              ref: "SBEM. Câncer Diferenciado de Tireoide, 2022",
            },
            {
              item: "Orientou sobre seguimento com tireoglobulina",
              score: 0.5,
              ref: "SBEM. Câncer Diferenciado de Tireoide, 2022",
            },
          ],
        },
      ],
      study: [
        {
          h: "Complicações Pós-operatórias",
          body: "<p>Hipoparatireoidismo é a complicação mais comum após tireoidectomia total, resultando em hipocalcemia sintomática. Atinge até 50% dos pacientes no período imediato e 2-5% se permanente.</p>",
        },
        {
          h: "Diagnóstico e Tratamento",
          body: "<ul><li>Cálcio total baixo e PTH suprimido caracterizam hipoparatireoidismo.</li><li>Tratamento inicial: cálcio oral e calcitriol, com alvo de cálcio sérico entre 8.0-9.0 mg/dL.</li><li>Caso persistente >6 meses, tratamento indefinido.</li></ul>",
        },
        {
          h: "Seguimento Oncológico",
          body: "<p>Para carcinoma papilífero de baixo risco, levotiroxina supressiva e acompanhamento por tireoglobulina e ultrassom cervical são as bases do seguimento.</p>",
        },
      ],
    },
  },

  // ── ESTAÇÃO 11: Prolactinoma (Mulher, adulta) ─
  {
    id: 11,
    title: "Amenorreia e saída de leite pelas mamas",
    sub: "Ambulatório de Ginecologia — Hospital Secundário",
    tema: "Endocrinologia",
    topic: "hipófise",
    level: "moderado",
    cardAccent: "#9b59b6",
    instA: {
      scenario: "Você está no ambulatório de ginecologia de um hospital secundário.",
      patient: "A.S.M., 34 anos, sexo feminino, publicitária.",
      complaint: "Paciente refere ausência de menstruação há 8 meses, galactorreia bilateral e cefaleia.",
      tasks: [
        "Apresente-se e estabeleça vínculo com o paciente.",
        "Realize anamnese dirigida ao quadro atual.",
        "Solicite e interprete os dados do exame físico.",
        "Formule a hipótese diagnóstica.",
        "Solicite os exames complementares adequados.",
        "Defina a conduta inicial e oriente o paciente.",
      ],
    },
    instB: {
      vitals: { PA: "115/75 mmHg", FC: "72 bpm", Peso: "62 kg", Altura: "1.64 m", IMC: "23.0 kg/m²" },
      physicalGeneral: "Estado geral bom, sem hirsutismo ou acne, sem galactorreia espontânea.",
      physicalSeg: [
        "Mamas simétricas sem nódulos, galactorreia bilateral apenas à expressão.",
        "Genitália externa sem alterações.",
        "Neurológico sem déficit motor ou sensitivo, pupilas isocóricas e fotorreagentes, movimentos oculares normais, campimetria por confrontação sem alterações evidentes.",
      ],
      labs: [
        { test: "β-HCG", val: "< 2 mUI/mL", ref: "< 5 não grávida", alt: false },
        { test: "Prolactina", val: "185 ng/mL", ref: "< 25", alt: true },
        { test: "Prolactina (repetida)", val: "192 ng/mL", ref: "< 25", alt: true },
        { test: "TSH", val: "2.8 μUI/mL", ref: "0.4 - 4.0", alt: false },
        { test: "T4 livre", val: "1.2 ng/dL", ref: "0.8 - 1.8", alt: false },
        { test: "LH", val: "2.1 mUI/mL", ref: "2 - 10", alt: false },
        { test: "FSH", val: "3.5 mUI/mL", ref: "3 - 10", alt: false },
        { test: "Estradiol", val: "28 pg/mL", ref: "30 - 400 fase folicular", alt: false },
        { test: "Creatinina", val: "0.9 mg/dL", ref: "0.6 - 1.2", alt: false },
      ],
      image: {
        title: "Ressonância Magnética de Sela Túrcica",
        report: "Lesão hipofisária de 8 mm na porção lateral esquerda, sem desvio do quiasma óptico e sem invasão de seio cavernoso. Conclusão: microadenoma hipofisário compatível com prolactinoma.",
      },
      patientProfile: "Publicitária de 34 anos, ciclos sempre regulares até 8 meses atrás. Não usa medicamentos nem anticoncepcional. Deseja ter filhos no futuro. Cefaleia frontal há alguns meses.",
      script: [
        {
          trigger: "Queixa principal",
          speech: "Doutora, minha menstruação não vem há 8 meses e está saindo leite do meu peito.",
        },
        {
          trigger: "História menstrual",
          speech: "Sempre foi regular, vinha todo mês certinho. Parou de vir há uns 8 meses sem motivo.",
        },
        {
          trigger: "Galactorreia",
          speech: "Percebi que quando aperto o bico do peito sai um líquido branco dos dois lados.",
        },
        { trigger: "Cefaleia", speech: "Tenho dor de cabeça há alguns meses, é surda e na testa." },
        { trigger: "Visão", speech: "Não sinto que minha visão mudou. Não tenho visão dupla nem embaçada." },
        { trigger: "Libido", speech: "Meu interesse sexual diminuiu nos últimos meses." },
        { trigger: "Medicações", speech: "Não tomo nenhum remédio. Não uso anticoncepcional." },
        {
          trigger: "Desejo de gravidez",
          speech: "No momento não estou tentando engravidar, mas quero ter filhos no futuro.",
        },
        {
          trigger: "Perguntas do paciente",
          speech: "Por que estou com leite no peito se não estou grávida? O que pode estar causando isso? Tenho algo no cérebro? Tem tratamento? Vou conseguir engravidar?",
        },
      ],
      hiddenInfo: [
        "Libido diminuída — só se perguntarem",
        "Não usa nenhum medicamento — só se perguntarem (relevante para causas medicamentosas)",
        "Visão sem alterações — só se perguntarem",
      ],
      actorBehavior: "Preocupada, pergunta se tem 'algo no cérebro' e se vai conseguir engravidar. Tranquiliza-se ao entender que é tratável com remédio.",
    },
    instC: {
      diagnosis: "Microprolactinoma (adenoma hipofisário produtor de prolactina)",
      differentials: [
        "Gravidez — afastada pelo beta-HCG",
        "Hiperprolactinemia por medicamentos (antipsicóticos, metoclopramida, antidepressivos) — sem uso",
        "Hipotireoidismo primário — TSH normal",
        "Macroprolactinemia — pesquisar se prolactina elevada sem sintomas; aqui há sintomas clássicos",
        "Pseudoprolactinoma (lesão que comprime a haste) — prolactina geralmente < 100 ng/mL e lesão maior",
      ],
      context: "Mulher de 34 anos com amenorreia, galactorreia e cefaleia. Hiperprolactinemia confirmada em duas dosagens, TSH normal e β-HCG negativo. RNM revela microadenoma hipofisário de 8 mm sem compressão do quiasma óptico.",
      justify: "Diagnóstico de prolactinoma confirmado pela hiperprolactinemia persistente e imagem de sela túrcica compatível.",
      expectedAnamnesis: [
        "Investigar história menstrual detalhada",
        "Caracterizar galactorreia",
        "Investigar cefaleia",
        "Perguntar sobre alterações visuais",
        "Investigar uso de medicamentos hiperprolactinemiantes",
        "Pesquisar redução de libido",
      ],
      expectedPhysical: ["Realizar exame das mamas"],
      expectedExams: [
        { exam: "Beta-HCG", justify: "Excluir gravidez", expected: "Negativo" },
        { exam: "Prolactina (repetir)", justify: "Confirmar hiperprolactinemia", expected: "185 e 192 ng/mL" },
        {
          exam: "TSH, T4 livre e creatinina",
          justify: "Excluir hipotireoidismo e doença renal",
          expected: "Normais",
        },
        { exam: "LH, FSH e estradiol", justify: "Avaliar hipogonadismo hipogonadotrófico", expected: "Baixos" },
        {
          exam: "RNM de sela túrcica",
          justify: "Localizar adenoma",
          expected: "Microadenoma de 8 mm sem compressão do quiasma",
        },
      ],
      expectedConduct: [
        "Cabergolina 0,25–0,5 mg 1–2x/semana, com aumento gradual",
        "Dosar prolactina em 4–8 semanas e ajustar até normalizar",
        "Orientar que a menstruação e a fertilidade tendem a voltar; usar contracepção se não deseja gestar",
        "Campimetria se sintomas visuais ou crescimento do tumor; repetir RNM no seguimento",
      ],
      expectedCommunication: [
        "Identificação e apresentação adequada",
        "Usar linguagem acessível, sem jargão",
        "Explicar o diagnóstico e o plano de forma clara",
        "Verificar o entendimento e esclarecer dúvidas",
      ],
      criticalErrors: [
        "Não solicitar prolactina",
        "Não repetir prolactina para confirmar",
        "Não solicitar RNM de sela túrcica",
        "Não descartar gravidez e hipotireoidismo",
        "Prescrever bromocriptina ao invés de cabergolina",
      ],
    },
    instD: {
      title: "Hiperprolactinemia e Prolactinoma",
      sections: [
        {
          h: "BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
          items: [
            { item: "Identificação e apresentação adequada", score: 0.5, ref: "SBEM/FEBRASGO. Hiperprolactinemia, 2022" },
          ],
        },
        {
          h: "BLOCO 2 — ANAMNESE",
          items: [
            {
              item: "Investigou história menstrual detalhada",
              score: 0.5,
              ref: "SBEM/FEBRASGO. Hiperprolactinemia, 2022",
            },
            { item: "Caracterizou galactorreia", score: 0.5, ref: "SBEM/FEBRASGO. Hiperprolactinemia, 2022" },
            { item: "Investigou cefaleia", score: 0.5, ref: "SBEM/FEBRASGO. Hiperprolactinemia, 2022" },
            { item: "Perguntou sobre alterações visuais", score: 0.5, ref: "SBEM/FEBRASGO. Hiperprolactinemia, 2022" },
            {
              item: "Investigou uso de medicamentos hiperprolactinemiantes",
              score: 0.5,
              ref: "SBEM/FEBRASGO. Hiperprolactinemia, 2022",
            },
            { item: "Pesquisou redução de libido", score: 0.5, ref: "SBEM/FEBRASGO. Hiperprolactinemia, 2022" },
          ],
        },
        {
          h: "BLOCO 3 — EXAME FÍSICO",
          items: [
            { item: "Realizou exame das mamas", score: 0.5, ref: "SBEM/FEBRASGO. Hiperprolactinemia, 2022" },
          ],
        },
        {
          h: "BLOCO 4 — EXAMES COMPLEMENTARES",
          items: [
            { item: "Afastou gravidez (β-HCG)", score: 1, ref: "SBEM/FEBRASGO. Hiperprolactinemia, 2022" },
            { item: "Solicitou β-HCG", score: 0.5, ref: "SBEM/FEBRASGO. Hiperprolactinemia, 2022" },
            { item: "Solicitou prolactina repetida", score: 1, ref: "SBEM/FEBRASGO. Hiperprolactinemia, 2022" },
            { item: "Solicitou TSH", score: 0.5, ref: "SBEM/FEBRASGO. Hiperprolactinemia, 2022" },
            { item: "Solicitou RNM de sela túrcica", score: 1, ref: "SBEM/FEBRASGO. Hiperprolactinemia, 2022" },
          ],
        },
        {
          h: "BLOCO 5 — RACIOCÍNIO CLÍNICO",
          items: [
            { item: "Formulou diagnóstico de prolactinoma", score: 1, ref: "SBEM/FEBRASGO. Hiperprolactinemia, 2022" },
          ],
        },
        {
          h: "BLOCO 6 — CONDUTA",
          items: [
            { item: "Prescreveu cabergolina", score: 1, ref: "SBEM/FEBRASGO. Hiperprolactinemia, 2022" },
            {
              item: "Orientou controle de prolactina até normalizar",
              score: 0.5,
              ref: "SBEM/FEBRASGO. Hiperprolactinemia, 2022",
            },
          ],
        },
      ],
      study: [
        {
          h: "Definição",
          body: "<p>Hiperprolactinemia é prolactina sérica acima dos limites normais. Prolactinoma é adenoma hipofisário produtor de prolactina, micro se < 10 mm e macro se ≥ 10 mm.</p>",
        },
        {
          h: "Causas",
          body: "<ul><li>Fisiológicas: gravidez, amamentação, estresse.</li><li>Medicamentosas: antipsicóticos, metoclopramida, domperidona, opioides.</li><li>Patológicas: prolactinoma, lesão da haste hipofisária, hipotireoidismo.</li></ul>",
        },
        {
          h: "Diagnóstico",
          body: "<p>Confirmar prolactina elevada em duas dosagens e descartar gravidez e hipotireoidismo. RNM de sela túrcica é exame de escolha.</p>",
        },
        {
          h: "Tratamento",
          body: "<p>Cabergolina é primeira linha. Bromocriptina é alternativa. Ajustar dose lentamente e monitorar prolactina e imagem.</p>",
        },
      ],
    },
  },

  // ── ESTAÇÃO 12: Fratura Vertebral por Fragilidade (Mulher, idosa) ─
  {
    id: 12,
    title: "Queda da própria altura há 2 semanas",
    sub: "Ambulatório de Ortopedia — Hospital Secundário",
    tema: "Endocrinologia",
    topic: "metabolismo ósseo",
    level: "difícil",
    cardAccent: "#2980b9",
    instA: {
      scenario: "Você está no ambulatório de ortopedia de um hospital secundário.",
      patient: "M.L.S., 62 anos, sexo feminino, dona de casa.",
      complaint: "Paciente vem após fratura vertebral em L2 após queda da própria altura há 2 semanas e refere perda de altura nos últimos anos.",
      tasks: [
        "Realizar anamnese direcionada à fratura",
        "Investigar fatores de risco para osteoporose",
        "Solicitar exame físico pertinente",
        "Formular hipóteses diagnósticas",
        "Solicitar exames complementares adequados",
        "Definir conduta terapêutica e prevenção de novas fraturas",
      ],
    },
    instB: {
      vitals: { PA: "130/80 mmHg", FC: "72 bpm", Peso: "58 kg", Altura: "1.55 m", IMC: "24.1 kg/m²" },
      physicalGeneral: "Estado geral bom, hipercifose torácica acentuada e relato de perda de 4 cm de altura desde os 50 anos.",
      physicalSeg: [
        "Coluna: dor à palpação de L2, hipercifose torácica e mobilidade lombar reduzida por dor.",
        "Neurológico: força preservada, sensibilidade preservada, reflexos simétricos.",
      ],
      labs: [
        { test: "Cálcio total", val: "8.5 mg/dL", ref: "8.5 - 10.5", alt: false },
        { test: "Cálcio iônico", val: "1.18 mmol/L", ref: "1.15 - 1.35", alt: false },
        { test: "Fósforo", val: "3.2 mg/dL", ref: "2.5 - 4.5", alt: false },
        { test: "Fosfatase alcalina", val: "78 U/L", ref: "40 - 150", alt: false },
        { test: "PTH", val: "72 pg/mL", ref: "15 - 65", alt: true },
        { test: "25-OH vitamina D", val: "18 ng/mL", ref: "> 30 adequado", alt: true },
        { test: "TSH", val: "2.5 μUI/mL", ref: "0.4 - 4.0", alt: false },
        { test: "Creatinina", val: "1.0 mg/dL", ref: "0.6 - 1.2", alt: false },
        { test: "Hemograma", val: "Normal", ref: "—", alt: false },
        { test: "VHS", val: "22 mm/h", ref: "< 30", alt: false },
      ],
      image: {
        title: "Densitometria Óssea",
        report: "Coluna lombar L1-L4 T-score -3.2 e fêmur direito T-score -2.9, ambos compatíveis com osteoporose. Conclusão: osteoporose estabelecida com fratura vertebral por fragilidade.",
      },
      patientProfile: "Dona de casa de 62 anos, menopausa aos 52 anos sem reposição hormonal. Sedentária, pouca exposição ao sol e baixa ingestão de leite. Mãe com osteoporose e fratura de fêmur aos 75 anos. Perdeu 4 cm de altura.",
      script: [
        {
          trigger: "Queixa principal",
          speech: "Doutora, caí em casa há 2 semanas e quebrei uma vértebra nas costas.",
        },
        { trigger: "Sobre a queda", speech: "Foi uma queda boba, tropecei no tapete e caí sentada." },
        {
          trigger: "Sintomas atuais",
          speech: "A dor melhorou um pouco, mas ainda dói quando me movimento. Estou usando colete.",
        },
        {
          trigger: "Perda de altura",
          speech: "Percebi que estou mais baixa. Tinha 1,59m, agora o médico mediu 1,55m.",
        },
        { trigger: "Menopausa", speech: "Entrei na menopausa aos 52 anos. Nunca fiz reposição hormonal." },
        { trigger: "Hábitos", speech: "Sou sedentária, saio pouco de casa, não tomo muito sol e como pouco leite." },
        { trigger: "História familiar", speech: "Minha mãe teve osteoporose e quebrou o fêmur aos 75 anos." },
        {
          trigger: "Perguntas do paciente",
          speech: "Tenho osteoporose? Por que meus ossos estão fracos? Tem tratamento? Preciso tomar cálcio?",
        },
      ],
      hiddenInfo: [
        "Perda de 4 cm de altura — só se perguntarem",
        "Mãe com fratura de fêmur — só se perguntarem sobre a família",
        "Pouco sol e pouco leite — só se perguntarem sobre hábitos",
      ],
      actorBehavior: "Usa colete e se movimenta com cuidado por causa da dor. Surpresa por uma queda 'boba' ter causado fratura. Pergunta se precisa tomar cálcio.",
    },
    instC: {
      diagnosis: "Osteoporose estabelecida com fratura vertebral por fragilidade e deficiência de vitamina D",
      differentials: [
        "Fratura patológica por mieloma múltiplo — considerar em fratura vertebral; VHS discreto, cálcio normal e hemograma normal tornam improvável (eletroforese se dúvida)",
        "Metástase óssea — sem história de câncer ou sintomas sistêmicos",
        "Osteomalácia — vitamina D baixa contribui, mas fosfatase alcalina normal e T-score muito baixo apontam osteoporose",
        "Hiperparatireoidismo primário — sai: cálcio normal com PTH alto e vitamina D baixa indicam hiperparatireoidismo secundário",
      ],
      context: "Mulher de 62 anos pós-menopausa com fratura vertebral após trauma mínimo. Densitometria confirma osteoporose grave e exames mostram deficiência de vitamina D e hiperparatireoidismo secundário discreto.",
      justify: "Fratura por fragilidade, T-score ≤ -2.5 e doença metabólica óssea confirmam osteoporose estabelecida, indicando tratamento medicamentoso e correção de vitamina D.",
      expectedAnamnesis: [
        "Caracterizar fratura por fragilidade",
        "Investigar menopausa e uso de TRH",
        "Perguntar sobre fraturas prévias",
        "Investigar fatores de risco para osteoporose",
        "Perguntar sobre exposição solar e vitamina D",
        "Investigar história familiar de osteoporose",
        "Perguntar sobre uso de corticoides ou outras medicações",
      ],
      expectedPhysical: ["Examinar: Coluna", "Examinar: Neurológico"],
      expectedExams: [
        {
          exam: "Densitometria óssea (coluna e fêmur)",
          justify: "Confirmar e quantificar osteoporose",
          expected: "T-score −3,2 em L1–L4 e −2,9 no fêmur",
        },
        {
          exam: "Cálcio, fósforo, fosfatase alcalina, PTH e 25-OH vitamina D",
          justify: "Causas secundárias e deficiência de vitamina D",
          expected: "Vitamina D 18 ng/mL e PTH elevado (secundário)",
        },
        {
          exam: "TSH, creatinina, hemograma e VHS",
          justify: "Excluir causas secundárias e mieloma",
          expected: "Normais ou pouco alterados",
        },
        { exam: "Radiografia da coluna", justify: "Documentar fraturas vertebrais", expected: "Fratura em L2" },
      ],
      expectedConduct: [
        "Repor vitamina D (ex.: colecalciferol 50.000 UI/semana por 8 semanas, depois manutenção) antes ou junto do bisfosfonato",
        "Cálcio total 1.000–1.200 mg/dia, preferindo a dieta",
        "Bisfosfonato: alendronato 70 mg VO 1x/semana em jejum, com água, sentada por 30 minutos (ou ácido zoledrônico EV anual)",
        "Analgesia e reabilitação; prevenção de quedas (retirar tapetes, iluminação, exercícios de equilíbrio)",
        "Densitometria de controle em 1–2 anos",
      ],
      expectedCommunication: [
        "Identificação e apresentação adequada",
        "Usar linguagem acessível, sem jargão",
        "Explicar o diagnóstico e o plano de forma clara",
        "Verificar o entendimento e esclarecer dúvidas",
      ],
      criticalErrors: [
        "Não solicitar densitometria óssea",
        "Não prescrever bisfosfonato em osteoporose estabelecida",
        "Prescrever apenas cálcio e vitamina D",
        "Não orientar prevenção de quedas",
        "Não dosar vitamina D",
      ],
    },
    instD: {
      title: "Osteoporose — Diagnóstico e Tratamento",
      sections: [
        {
          h: "BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
          items: [
            {
              item: "Identificação e apresentação adequada",
              score: 0.5,
              ref: "ABRASSO/SBEM. Diretriz de Osteoporose, 2023",
            },
          ],
        },
        {
          h: "BLOCO 2 — ANAMNESE",
          items: [
            {
              item: "Caracterizou fratura por fragilidade",
              score: 0.5,
              ref: "ABRASSO/SBEM. Diretriz de Osteoporose, 2023",
            },
            { item: "Investigou menopausa e uso de TRH", score: 0.5, ref: "ABRASSO/SBEM. Diretriz de Osteoporose, 2023" },
            { item: "Perguntou sobre fraturas prévias", score: 0.5, ref: "ABRASSO/SBEM. Diretriz de Osteoporose, 2023" },
            {
              item: "Investigou fatores de risco para osteoporose",
              score: 0.5,
              ref: "ABRASSO/SBEM. Diretriz de Osteoporose, 2023",
            },
            {
              item: "Perguntou sobre exposição solar e vitamina D",
              score: 0.5,
              ref: "ABRASSO/SBEM. Diretriz de Osteoporose, 2023",
            },
            {
              item: "Investigou história familiar de osteoporose",
              score: 0.5,
              ref: "ABRASSO/SBEM. Diretriz de Osteoporose, 2023",
            },
            {
              item: "Perguntou sobre uso de corticoides ou outras medicações",
              score: 0.5,
              ref: "ABRASSO/SBEM. Diretriz de Osteoporose, 2023",
            },
          ],
        },
        {
          h: "BLOCO 3 — EXAMES COMPLEMENTARES",
          items: [
            { item: "Solicitou densitometria óssea", score: 1, ref: "ABRASSO/SBEM. Diretriz de Osteoporose, 2023" },
            {
              item: "Solicitou cálcio, fósforo, vitamina D e PTH",
              score: 1,
              ref: "ABRASSO/SBEM. Diretriz de Osteoporose, 2023",
            },
            {
              item: "Interpretou T-score ≤ -2.5 como osteoporose",
              score: 1,
              ref: "ABRASSO/SBEM. Diretriz de Osteoporose, 2023",
            },
          ],
        },
        {
          h: "BLOCO 4 — RACIOCÍNIO CLÍNICO",
          items: [
            {
              item: "Diagnosticou osteoporose estabelecida (osteoporose + fratura)",
              score: 0.5,
              ref: "ABRASSO/SBEM. Diretriz de Osteoporose, 2023",
            },
          ],
        },
        {
          h: "BLOCO 5 — CONDUTA",
          items: [
            { item: "Prescreveu bisfosfonato", score: 1, ref: "ABRASSO/SBEM. Diretriz de Osteoporose, 2023" },
            { item: "Prescreveu cálcio 1200 mg/dia", score: 0.5, ref: "ABRASSO/SBEM. Diretriz de Osteoporose, 2023" },
            { item: "Prescreveu vitamina D adequada", score: 0.5, ref: "ABRASSO/SBEM. Diretriz de Osteoporose, 2023" },
            { item: "Orientou prevenção de quedas", score: 0.5, ref: "ABRASSO/SBEM. Diretriz de Osteoporose, 2023" },
          ],
        },
      ],
      study: [
        {
          h: "Definição",
          body: "<p>Osteoporose é doença esquelética caracterizada por baixa massa óssea e deterioração da microarquitetura óssea, aumentando a fragilidade e risco de fraturas.</p>",
        },
        {
          h: "Diagnóstico",
          body: "<p>O padrão-ouro é a densitometria óssea (DXA). Osteoporose é T-score ≤ -2.5. Fratura por fragilidade confirma osteoporose estabelecida.</p>",
        },
        {
          h: "Tratamento",
          body: "<p>O tratamento inclui bisfosfonatos, cálcio, vitamina D, prevenção de quedas e mudança de estilo de vida.</p>",
        },
      ],
    },
  },

  // ── ESTAÇÃO 13: Hipogonadismo Masculino (Homem, adulto) ─
  {
    id: 13,
    title: "Cansaço, queda da libido e dificuldade de ereção",
    sub: "Ambulatório de Urologia — Hospital Secundário",
    tema: "Endocrinologia",
    topic: "andrologia",
    level: "moderado",
    cardAccent: "#c0392b",
    instA: {
      scenario: "Você está no ambulatório de urologia de um hospital secundário.",
      patient: "R.F.A., 55 anos, sexo masculino, contador.",
      complaint: "Paciente refere fadiga crônica, redução da libido e dificuldade de ereção há 1 ano.",
      tasks: [
        "Realizar anamnese direcionada aos sintomas",
        "Investigar impacto na qualidade de vida",
        "Solicitar exame físico pertinente",
        "Formular hipóteses diagnósticas",
        "Solicitar exames complementares adequados",
        "Definir conduta terapêutica",
      ],
    },
    instB: {
      vitals: { PA: "135/85 mmHg", FC: "78 bpm", Peso: "96 kg", Altura: "1.75 m", IMC: "31.3 kg/m²" },
      physicalGeneral: "Obesidade centrípeta, ausência de ginecomastia, pelos corporais reduzidos.",
      physicalSeg: [
        "Genitais: pênis sem alterações; testículos volume 15 mL bilateral no limite inferior; epidídimos e cordões espermáticos sem alterações.",
        "Toque retal: próstata de volume normal, lisa, simétrica, fibroelástica, sem nódulos.",
      ],
      labs: [
        { test: "Testosterona total", val: "180 ng/dL", ref: "300 - 1000", alt: true },
        { test: "Testosterona total (repetida)", val: "195 ng/dL", ref: "300 - 1000", alt: true },
        { test: "Testosterona livre (calculada)", val: "3.2 ng/dL", ref: "5 - 21", alt: true },
        { test: "LH", val: "12 mUI/mL", ref: "1.5 - 9", alt: true },
        { test: "FSH", val: "15 mUI/mL", ref: "1.5 - 12", alt: true },
        { test: "Prolactina", val: "8 ng/mL", ref: "< 20", alt: false },
        { test: "TSH", val: "2.3 μUI/mL", ref: "0.4 - 4.0", alt: false },
        { test: "Glicemia jejum", val: "102 mg/dL", ref: "70 - 100", alt: true },
        { test: "HbA1c", val: "5.9%", ref: "< 5.7%", alt: true },
        { test: "Colesterol total", val: "235 mg/dL", ref: "< 200", alt: true },
        { test: "LDL", val: "158 mg/dL", ref: "< 130", alt: true },
        { test: "HDL", val: "35 mg/dL", ref: "> 40", alt: true },
        { test: "Triglicerídeos", val: "245 mg/dL", ref: "< 150", alt: true },
        { test: "PSA total", val: "1.2 ng/mL", ref: "< 4.0", alt: false },
        { test: "Hematócrito", val: "42%", ref: "40 - 54%", alt: false },
      ],
      image: null,
      patientProfile: "Contador de 55 anos, sedentário, dieta rica em carboidratos, ganhou 10 kg com perda de massa muscular. Esposa diz que ele ronca muito. Sem doenças conhecidas, nunca teve caxumba ou trauma testicular.",
      script: [
        {
          trigger: "Queixa principal",
          speech: "Doutor, estou sem energia, sem vontade de fazer nada há mais de 1 ano.",
        },
        { trigger: "Sobre fadiga", speech: "Acordo cansado, não tenho disposição para trabalhar." },
        {
          trigger: "Sobre libido",
          speech: "Minha libido caiu muito. Não tenho mais vontade de ter relações como antes.",
        },
        {
          trigger: "Sobre ereção",
          speech: "Tenho dificuldade de manter a ereção. Isso está afetando meu relacionamento.",
        },
        { trigger: "Humor", speech: "Me sinto desanimado, às vezes irritado." },
        { trigger: "Sono", speech: "Durmo mal, acordo várias vezes à noite. Minha esposa diz que ronco muito." },
        {
          trigger: "Peso",
          speech: "Engordei uns 10 kg nos últimos anos, principalmente na barriga. Perdi massa muscular.",
        },
        {
          trigger: "História",
          speech: "Não tenho doenças, não tomo remédio. Nunca tive problema nos testículos, não tive caxumba.",
        },
        {
          trigger: "Hábitos",
          speech: "Sedentário, não faço exercício. Dieta ruim, como muito carboidrato. Não fumo, bebo socialmente.",
        },
        { trigger: "Perguntas do paciente", speech: "É normal isso na minha idade? Tem tratamento? É hormônio?" },
      ],
      hiddenInfo: [
        "Ronco alto e sono não reparador — só se perguntarem sobre o sono",
        "Problema afetando o relacionamento — só se perguntarem sobre impacto",
      ],
      actorBehavior: "Constrangido ao falar de ereção e libido; precisa de abordagem respeitosa. Pergunta se 'é normal da idade' e se vai tomar hormônio.",
    },
    instC: {
      diagnosis: "Hipogonadismo primário (testicular) + síndrome metabólica + pré-diabetes",
      differentials: [
        "Hipogonadismo secundário (central) — sai: LH e FSH elevados indicam falha testicular",
        "Apneia obstrutiva do sono — ronco e sono ruim; pode coexistir e piorar os sintomas (investigar com polissonografia)",
        "Depressão — desânimo e irritabilidade, mas testosterona baixa confirmada em duas dosagens",
        "Disfunção erétil de causa vascular/metabólica — pode coexistir pela síndrome metabólica",
      ],
      context: "Homem de 55 anos com sintomas de hipogonadismo e fatores metabólicos. Testosterona total baixa em duas dosagens com LH e FSH elevados caracterizam hipogonadismo primário. Prolactina e TSH normais descartam causas secundárias.",
      justify: "A combinação de testosterona baixa e gonadotrofinas elevadas confirma falência testicular, indicando reposição hormonal apropriada.",
      expectedAnamnesis: [
        "Investigar fadiga, redução de energia e concentração",
        "Perguntar sobre redução de libido",
        "Investigar disfunção erétil",
        "Perguntar sobre alterações de humor/irritabilidade",
        "Investigar perda de massa muscular e ganho de gordura",
        "Perguntar sobre qualidade do sono e apneia",
        "Pesquisar antecedentes testiculares",
      ],
      expectedPhysical: ["Solicitar exame dos testículos"],
      expectedExams: [
        {
          exam: "Testosterona total pela manhã (2 dosagens)",
          justify: "Confirmar hipogonadismo",
          expected: "180 e 195 ng/dL",
        },
        { exam: "LH e FSH", justify: "Diferenciar primário de secundário", expected: "Elevados (primário)" },
        { exam: "Prolactina e TSH", justify: "Causas secundárias", expected: "Normais" },
        {
          exam: "PSA e hematócrito basais",
          justify: "Segurança antes da reposição",
          expected: "PSA 1,2 e hematócrito 42%",
        },
        {
          exam: "Glicemia, HbA1c e perfil lipídico",
          justify: "Avaliar síndrome metabólica",
          expected: "Pré-diabetes e dislipidemia",
        },
      ],
      expectedConduct: [
        "Reposição de testosterona (gel transdérmico ou injetável), após excluir contraindicações (desejo de fertilidade, câncer de próstata, hematócrito > 50%)",
        "Monitorar hematócrito e PSA em 3–6 meses e depois anualmente",
        "Mudança de estilo de vida: perda de peso, exercício e dieta",
        "Investigar apneia do sono (polissonografia)",
        "Tratar pré-diabetes e dislipidemia conforme risco cardiovascular",
      ],
      expectedCommunication: [
        "Identificação e apresentação adequada",
        "Usar linguagem acessível, sem jargão",
        "Explicar o diagnóstico e o plano de forma clara",
        "Verificar o entendimento e esclarecer dúvidas",
      ],
      criticalErrors: [
        "Não dosar testosterona pela manhã",
        "Não repetir testosterona para confirmar",
        "Não dosar LH/FSH",
        "Não solicitar PSA antes de iniciar reposição",
        "Prescrever reposição sem confirmação laboratorial",
      ],
    },
    instD: {
      title: "Hipogonadismo Masculino",
      sections: [
        {
          h: "BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
          items: [
            {
              item: "Identificação e apresentação adequada",
              score: 0.5,
              ref: "SBEM/SBU. Diretriz de Hipogonadismo Masculino, 2021",
            },
          ],
        },
        {
          h: "BLOCO 2 — ANAMNESE",
          items: [
            {
              item: "Investigou fadiga, redução de energia e concentração",
              score: 0.5,
              ref: "SBEM/SBU. Diretriz de Hipogonadismo Masculino, 2021",
            },
            {
              item: "Perguntou sobre redução de libido",
              score: 0.5,
              ref: "SBEM/SBU. Diretriz de Hipogonadismo Masculino, 2021",
            },
            {
              item: "Investigou disfunção erétil",
              score: 0.5,
              ref: "SBEM/SBU. Diretriz de Hipogonadismo Masculino, 2021",
            },
            {
              item: "Perguntou sobre alterações de humor/irritabilidade",
              score: 0.5,
              ref: "SBEM/SBU. Diretriz de Hipogonadismo Masculino, 2021",
            },
            {
              item: "Investigou perda de massa muscular e ganho de gordura",
              score: 0.5,
              ref: "SBEM/SBU. Diretriz de Hipogonadismo Masculino, 2021",
            },
            {
              item: "Perguntou sobre qualidade do sono e apneia",
              score: 0.5,
              ref: "SBEM/SBU. Diretriz de Hipogonadismo Masculino, 2021",
            },
            {
              item: "Pesquisou antecedentes testiculares",
              score: 0.5,
              ref: "SBEM/SBU. Diretriz de Hipogonadismo Masculino, 2021",
            },
          ],
        },
        {
          h: "BLOCO 3 — EXAME FÍSICO",
          items: [
            {
              item: "Solicitou exame dos testículos",
              score: 0.5,
              ref: "SBEM/SBU. Diretriz de Hipogonadismo Masculino, 2021",
            },
          ],
        },
        {
          h: "BLOCO 4 — EXAMES COMPLEMENTARES",
          items: [
            {
              item: "Solicitou testosterona total (2 dosagens)",
              score: 1,
              ref: "SBEM/SBU. Diretriz de Hipogonadismo Masculino, 2021",
            },
            { item: "Solicitou LH e FSH", score: 1, ref: "SBEM/SBU. Diretriz de Hipogonadismo Masculino, 2021" },
            {
              item: "Solicitou prolactina e TSH",
              score: 0.5,
              ref: "SBEM/SBU. Diretriz de Hipogonadismo Masculino, 2021",
            },
            {
              item: "Solicitou PSA e hematócrito",
              score: 0.5,
              ref: "SBEM/SBU. Diretriz de Hipogonadismo Masculino, 2021",
            },
          ],
        },
        {
          h: "BLOCO 5 — RACIOCÍNIO CLÍNICO",
          items: [
            {
              item: "Diagnosticou hipogonadismo primário",
              score: 1,
              ref: "SBEM/SBU. Diretriz de Hipogonadismo Masculino, 2021",
            },
          ],
        },
        {
          h: "BLOCO 6 — CONDUTA",
          items: [
            {
              item: "Prescreveu reposição de testosterona",
              score: 1,
              ref: "SBEM/SBU. Diretriz de Hipogonadismo Masculino, 2021",
            },
            { item: "Orientou monitoramento", score: 0.5, ref: "SBEM/SBU. Diretriz de Hipogonadismo Masculino, 2021" },
          ],
        },
      ],
      study: [
        {
          h: "Classificação",
          body: "<p>Hipogonadismo primário é caracterizado por testosterona baixa com LH e FSH elevados; hipogonadismo secundário apresenta LH/FSH baixos ou normais.</p>",
        },
        {
          h: "Diagnóstico",
          body: "<p>Duas dosagens de testosterona total matinal confirmam o diagnóstico. LH e FSH diferenciam primário de secundário.</p>",
        },
        {
          h: "Tratamento",
          body: "<p>A terapia de reposição de testosterona é indicada após confirmação do diagnóstico e avaliação de contraindicações, com monitoramento de PSA e hematócrito.</p>",
        },
      ],
    },
  },

  // ── ESTAÇÃO 14: Menopausa Sintomática (Mulher, adulta) ─
  {
    id: 14,
    title: "Fogachos intensos e sintomas climatéricos",
    sub: "Ambulatório de Ginecologia — Hospital Secundário",
    tema: "Endocrinologia",
    topic: "climatério",
    level: "moderado",
    cardAccent: "#e67e22",
    instA: {
      scenario: "Você está no ambulatório de ginecologia de um hospital secundário.",
      patient: "S.M.P., 52 anos, sexo feminino, gerente comercial.",
      complaint: "Paciente refere fogachos intensos há 6 meses, 10-15 episódios por dia, acordando à noite, além de secura vaginal e dispareunia.",
      tasks: [
        "Apresente-se e estabeleça vínculo com o paciente.",
        "Realize anamnese dirigida ao quadro atual.",
        "Avalie o impacto dos sintomas na qualidade de vida.",
        "Solicite e interprete os dados do exame físico e exames complementares.",
        "Formule a hipótese diagnóstica.",
        "Defina a conduta e oriente o paciente sobre as opções terapêuticas.",
      ],
    },
    instB: {
      vitals: { PA: "125/75 mmHg", FC: "72 bpm", Peso: "68 kg", Altura: "1.64 m", IMC: "25.3 kg/m²" },
      physicalGeneral: "Estado geral bom, sem sinais de hiperandrogenismo.",
      physicalSeg: [
        "Mamas simétricas sem nódulos, sem galactorreia ou retrações.",
        "Genitália externa com mucosa vaginal ressecada e petéquias leves.",
        "Toque vaginal: útero de volume normal, móvel e indolor; anexos não palpáveis.",
      ],
      labs: [
        { test: "TSH", val: "2.8 μUI/mL", ref: "0.4 - 4.0", alt: false },
        { test: "Glicemia jejum", val: "92 mg/dL", ref: "70 - 100", alt: false },
        { test: "Colesterol total", val: "235 mg/dL", ref: "< 200", alt: true },
        { test: "LDL", val: "152 mg/dL", ref: "< 130", alt: true },
        { test: "HDL", val: "58 mg/dL", ref: "> 50", alt: false },
        { test: "Triglicerídeos", val: "125 mg/dL", ref: "< 150", alt: false },
        { test: "Creatinina", val: "0.9 mg/dL", ref: "0.6 - 1.2", alt: false },
        { test: "TGO", val: "28 U/L", ref: "< 40", alt: false },
        { test: "TGP", val: "32 U/L", ref: "< 40", alt: false },
      ],
      image: {
        title: "Mamografia e Ultrassom Transvaginal",
        report: "Mamografia recente BI-RADS 1 com parênquima heterogêneo e sem lesões suspeitas. Ultrassom transvaginal mostra útero e anexos de aspecto habitual e endométrio atrófico de 4 mm.",
      },
      patientProfile: "Gerente comercial de 52 anos, sem menstruar há 14 meses. Não fuma, não bebe, sem doenças. Sem câncer de mama ou endométrio pessoal ou familiar. Mamografia há 3 meses normal. Fogachos atrapalham o trabalho e o sono.",
      script: [
        {
          trigger: "Queixa principal",
          speech: "Doutora, estou com fogachos terríveis, uns 10-15 por dia. Está insuportável.",
        },
        {
          trigger: "Fogachos",
          speech: "De repente sinto uma onda de calor que sobe pelo corpo, fico toda vermelha, suando. Dura uns 2-3 minutos, mas é muito desconfortável.",
        },
        { trigger: "Sono", speech: "Durmo muito mal por causa dos fogachos noturnos. Acordo cansada, irritada." },
        { trigger: "Genitourinário", speech: "Sinto muita secura vaginal. A relação sexual está dolorosa, queima." },
        { trigger: "História menstrual", speech: "Minha menstruação parou há mais de 1 ano. Antes era regular." },
        {
          trigger: "Antecedentes",
          speech: "Não tenho doenças. Não tomo nenhum remédio. Não fumo, nunca fumei. Não bebo.",
        },
        {
          trigger: "História ginecológica",
          speech: "Nunca tive câncer de mama ou de útero. Ninguém na família teve câncer de mama. Fiz mamografia há 3 meses, estava normal.",
        },
        {
          trigger: "Perguntas da paciente",
          speech: "Isso é menopausa? Vou ficar assim para sempre? Tem tratamento? Posso tomar hormônio? Hormônio não causa câncer?",
        },
      ],
      hiddenInfo: [
        "Dor na relação sexual por ressecamento — só se perguntarem sobre sintomas genitais",
        "Mamografia recente normal — só se perguntarem",
        "Sem história de trombose — só se perguntarem sobre contraindicações",
      ],
      actorBehavior: "Cansada e irritada com os fogachos (abana-se durante a consulta). Tem medo de que 'hormônio cause câncer' e quer entender os riscos.",
    },
    instC: {
      diagnosis: "Menopausa sintomática moderada a grave",
      differentials: [
        "Hipertireoidismo — fogachos e calor, mas TSH normal",
        "Efeito de medicamentos ou álcool — não usa",
        "Síndrome carcinoide ou feocromocitoma — raros; sem diarreia, crises hipertensivas ou palpitações",
      ],
      context: "Mulher de 52 anos com amenorreia há 14 meses, fogachos intensos e sintoma geniturinário. Hemograma e exames metabólicos compatíveis com menopausa, sem contraindicações claras à terapia hormonal.",
      justify: "FSH elevado e estradiol baixo confirmam menopausa. Sintomas significativos com impacto na qualidade de vida justificam indicação de TRH.",
      expectedAnamnesis: [
        "Investigar detalhadamente os fogachos",
        "Perguntar sobre sudorese noturna e impacto no sono",
        "Investigar sintomas genitourinários",
        "Avaliar impacto na qualidade de vida",
        "Confirmar amenorreia > 12 meses",
        "Investigar contraindicações à TRH",
      ],
      expectedPhysical: [
        "Examinar: Mamas simétricas sem nódulos, sem galactorreia ou retrações.",
        "Examinar: Genitália externa com mucosa vaginal ressecada e petéquias leves.",
        "Examinar: Toque vaginal",
      ],
      expectedExams: [
        {
          exam: "Mamografia (recente)",
          justify: "Obrigatória antes de iniciar terapia hormonal",
          expected: "BI-RADS 1",
        },
        { exam: "USG transvaginal", justify: "Avaliar endométrio e anexos", expected: "Sem alterações" },
        {
          exam: "Perfil lipídico, glicemia, TSH e função hepática",
          justify: "Risco cardiovascular e contraindicações",
          expected: "LDL levemente elevado; demais normais",
        },
      ],
      expectedConduct: [
        "Terapia hormonal estrogênica com progestogênio (tem útero) — idade < 60 anos e < 10 anos de menopausa",
        "Preferir estradiol transdérmico na menor dose eficaz",
        "Estrogênio vaginal tópico e lubrificantes para a síndrome geniturinária",
        "Explicar risco-benefício (mama, trombose) e reavaliar anualmente com mamografia",
        "Alternativas não hormonais se contraindicação ou preferência: ISRS/IRSN, gabapentina",
      ],
      expectedCommunication: [
        "Identificação e apresentação adequada",
        "Explicar risco-benefício da TRH",
        "Usar linguagem acessível, sem jargão",
        "Verificar o entendimento e esclarecer dúvidas",
      ],
      criticalErrors: [
        "Prescrever estrogênio isolado em mulher com útero íntegro",
        "Não investigar contraindicações antes de prescrever TRH",
        "Prescrever TRH sem mamografia prévia",
        "Não orientar sobre risco-benefício da TRH",
        "Usar dose excessiva de estrogênio",
      ],
    },
    instD: {
      title: "Menopausa e Terapia de Reposição Hormonal",
      sections: [
        {
          h: "BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
          items: [
            {
              item: "Identificação e apresentação adequada",
              score: 0.5,
              ref: "FEBRASGO. Terapia Hormonal na Menopausa, 2023",
            },
            { item: "Explicou risco-benefício da TRH", score: 1, ref: "FEBRASGO. Terapia Hormonal na Menopausa, 2023" },
          ],
        },
        {
          h: "BLOCO 2 — ANAMNESE",
          items: [
            {
              item: "Investigou detalhadamente os fogachos",
              score: 0.5,
              ref: "FEBRASGO. Terapia Hormonal na Menopausa, 2023",
            },
            {
              item: "Perguntou sobre sudorese noturna e impacto no sono",
              score: 0.5,
              ref: "FEBRASGO. Terapia Hormonal na Menopausa, 2023",
            },
            {
              item: "Investigou sintomas genitourinários",
              score: 0.5,
              ref: "FEBRASGO. Terapia Hormonal na Menopausa, 2023",
            },
            {
              item: "Avaliou impacto na qualidade de vida",
              score: 0.5,
              ref: "FEBRASGO. Terapia Hormonal na Menopausa, 2023",
            },
            { item: "Confirmou amenorreia > 12 meses", score: 0.5, ref: "FEBRASGO. Terapia Hormonal na Menopausa, 2023" },
            { item: "Investigou contraindicações à TRH", score: 1, ref: "FEBRASGO. Terapia Hormonal na Menopausa, 2023" },
          ],
        },
        {
          h: "BLOCO 3 — EXAMES COMPLEMENTARES",
          items: [
            { item: "Revisou mamografia recente", score: 0.5, ref: "FEBRASGO. Terapia Hormonal na Menopausa, 2023" },
            {
              item: "Solicitou ultrassom transvaginal",
              score: 0.5,
              ref: "FEBRASGO. Terapia Hormonal na Menopausa, 2023",
            },
          ],
        },
        {
          h: "BLOCO 4 — CONDUTA",
          items: [
            {
              item: "Prescreveu estrogênio + progestogênio",
              score: 1,
              ref: "FEBRASGO. Terapia Hormonal na Menopausa, 2023",
            },
            { item: "Escolheu via e dose adequadas", score: 1, ref: "FEBRASGO. Terapia Hormonal na Menopausa, 2023" },
            { item: "Orientou reavaliação anual", score: 0.5, ref: "FEBRASGO. Terapia Hormonal na Menopausa, 2023" },
            {
              item: "Discutiu alternativas não hormonais",
              score: 1,
              ref: "FEBRASGO. Terapia Hormonal na Menopausa, 2023",
            },
          ],
        },
      ],
      study: [
        {
          h: "Definição",
          body: "<p>Menopausa é a cessação permanente da menstruação por 12 meses consecutivos. A síndrome climatérica inclui fogachos, sudorese e sintomas geniturinários.</p>",
        },
        {
          h: "Indicações",
          body: "<p>TRH é indicada para sintomas vasomotores moderados a graves e síndrome geniturinária quando não há contraindicações.</p>",
        },
        {
          h: "Esquemas",
          body: "<p>Mulher com útero íntegro deve receber estrogênio combinado com progestogênio. A via transdérmica é preferida quando possível.</p>",
        },
      ],
    },
  },

  // ── ESTAÇÃO 15: Obesidade grave: avaliação para cirurgia bariátrica ─
  {
    id: 15,
    title: "Obesidade grave: avaliação para cirurgia bariátrica",
    sub: "Ambulatório de cirurgia bariátrica (hospital terciário)",
    tema: "Endocrinologia",
    topic: "obesidade",
    level: "moderado",
    cardAccent: "#d1495b",
    instA: {
      scenario: "Você está no ambulatório de cirurgia bariátrica de um hospital terciário.",
      patient: "A.C.L., 38 anos, sexo feminino, auxiliar administrativa.",
      complaint: "Paciente encaminhada para avaliação de cirurgia bariátrica. Refere dificuldade de perder peso apesar de múltiplas tentativas de dieta, com piora progressiva nos últimos 10 anos.",
      tasks: [
        "Apresente-se e estabeleça vínculo com o paciente.",
        "Realize anamnese dirigida ao quadro atual e ao histórico de tentativas de tratamento.",
        "Solicite e interprete os dados do exame físico.",
        "Solicite os exames complementares adequados.",
        "Formule a hipótese diagnóstica.",
        "Defina a conduta e oriente o paciente sobre as opções terapêuticas.",
      ],
    },
    instB: {
      vitals: {
        PA: "148/95 mmHg",
        FC: "82 bpm",
        FR: "18 irpm",
        Peso: "128 kg",
        Altura: "1.60 m",
        IMC: "50.0 kg/m²",
        CA: "125 cm",
      },
      physicalGeneral: "Obesidade grau III (mórbida), distribuição centrípeta, acantose nigricans cervical, axilas e virilha, estrias abdominais e paniculopatia edematofibroesclerótica em coxas.",
      physicalSeg: [
        "Exame cardiovascular: RCR 2T, BNF, sem sopros; pulsos periféricos presentes.",
        "Exame respiratório: MV presente bilateralmente, sem RA; expansibilidade reduzida.",
        "Membros inferiores: edema 1+/4+ em tornozelos bilateralmente; varizes em membros inferiores.",
      ],
      labs: [
        { test: "Glicemia jejum", val: "115 mg/dL", ref: "70-100", alt: true },
        { test: "HbA1c", val: "6.3%", ref: "< 5.7%", alt: true },
        { test: "Insulina jejum", val: "32 μUI/mL", ref: "2-25", alt: true },
        { test: "HOMA-IR", val: "9.1", ref: "< 2.5", alt: true },
        { test: "Colesterol total", val: "248 mg/dL", ref: "< 200", alt: true },
        { test: "LDL", val: "168 mg/dL", ref: "< 130", alt: true },
        { test: "HDL", val: "38 mg/dL", ref: "> 50", alt: true },
        { test: "Triglicerídeos", val: "285 mg/dL", ref: "< 150", alt: true },
        { test: "TGO", val: "58 U/L", ref: "< 40", alt: true },
        { test: "TGP", val: "72 U/L", ref: "< 40", alt: true },
        { test: "GGT", val: "85 U/L", ref: "< 50", alt: true },
        { test: "Creatinina", val: "1.0 mg/dL", ref: "0.6-1.2", alt: false },
        { test: "TSH", val: "3.2 μUI/mL", ref: "0.4-4.0", alt: false },
        { test: "Ácido úrico", val: "7.2 mg/dL", ref: "2.5-6.0", alt: true },
      ],
      image: null,
      note: "Ultrassom de abdome total: fígado aumentado de volume, ecotextura grosseira e difusamente hiperecogênica (esteatose hepática grau II-III). Vesícula biliar sem cálculos. Polissonografia: IAH 32 eventos/hora, saturação mínima 82%, classificada como apneia obstrutiva do sono moderada.",
      patientProfile: "Auxiliar administrativa de 38 anos, obesa desde a infância, piora após a gestação há 10 anos. Peso atual 128 kg (o maior da vida). Várias dietas com reganho. Hipertensa em uso de losartana, pré-diabética. Mãe diabética. Sente vergonha do corpo.",
      script: [
        {
          trigger: "Queixa principal",
          speech: "Doutora, estou com obesidade há muitos anos e não consigo emagrecer. Vim avaliar a cirurgia bariátrica.",
        },
        {
          trigger: "História ponderal",
          speech: "Sempre fui gordinha desde criança. Piorou muito depois da gravidez, há 10 anos. Hoje peso 128 quilos, meu peso máximo.",
        },
        {
          trigger: "Tentativas prévias",
          speech: "Já fiz várias dietas: nutricionista, dietas da moda, shakes. Perco um pouco de peso mas sempre volto. Já tentei academia mas é difícil, me canso muito. Nunca usei remédio para emagrecer.",
        },
        {
          trigger: "Comorbidades",
          speech: "Tenho pressão alta, tomo losartana. Me disseram que tenho pré-diabetes. Meu colesterol é alto. Ronco muito à noite, meu marido reclama.",
        },
        {
          trigger: "Sintomas de SAOS",
          speech: "Acordo cansada, com sono durante o dia. Tenho muita falta de ar aos esforços.",
        },
        {
          trigger: "Impacto na vida",
          speech: "Não consigo fazer coisas simples, como subir escada. Me sinto mal com meu corpo, tenho vergonha. Dificuldade de encontrar roupas. Não consigo brincar direito com meu filho.",
        },
        {
          trigger: "Motivação",
          speech: "Quero muito fazer a cirurgia. Tenho medo de ficar doente, minha mãe tem diabetes. Quero ter qualidade de vida, viver mais.",
        },
        { trigger: "Pergunta sobre indicação", speech: "Eu tenho indicação para cirurgia?" },
        {
          trigger: "Pergunta sobre riscos",
          speech: "Como é a cirurgia? Vou precisar fazer tratamento antes? Quais são os riscos? Vou emagrecer quanto?",
        },
      ],
      hiddenInfo: [
        "Ronco alto e sonolência diurna — só se perguntarem sobre o sono",
        "Nunca usou medicamento para obesidade — só se perguntarem",
        "Dificuldade de brincar com o filho e vergonha do corpo — só se perguntarem sobre impacto na vida",
      ],
      actorBehavior: "Muito motivada e esperançosa com a cirurgia; espera emagrecer rápido. Sensível a comentários sobre o peso: valoriza um médico sem julgamento. Pergunta sobre riscos e quanto vai emagrecer.",
    },
    instC: {
      diagnosis: "Obesidade grau III (mórbida) com pré-diabetes, dislipidemia, hipertensão arterial estágio 1, esteatose hepática, síndrome de apneia obstrutiva do sono moderada e resistência insulínica grave.",
      differentials: [
        "Hipotireoidismo — TSH normal",
        "Síndrome de Cushing — considerar em obesidade com HAS e pré-diabetes; sem estrias violáceas, fraqueza proximal ou fácies típica (cortisol se suspeita)",
        "Obesidade induzida por medicamentos — não usa antipsicóticos, corticoides ou outros",
        "Transtorno de compulsão alimentar — investigar antes da cirurgia",
      ],
      context: "Mulher de 38 anos com IMC 50.0 kg/m², CA 125 cm, história de obesidade de longa data e múltiplas comorbidades que preenchem critérios para cirurgia bariátrica. Exames confirmam pré-diabetes, dislipidemia, alterações hepáticas e SAOS moderada.",
      justify: "Paciente preenche indicação de cirurgia bariátrica segundo IMC ≥ 40 kg/m² com comorbidades. A presença de resistência insulínica grave, esteatose hepática e SAOS reforça a necessidade de avaliação multidisciplinar e preparo pré-operatório.",
      expectedAnamnesis: [
        "Investigar história ponderal e evolução do peso",
        "Investigar tentativas prévias de tratamento",
        "Investigar comorbidades associadas à obesidade",
        "Avaliar sintomas de SAOS e impacto funcional",
        "Investigar efeitos na qualidade de vida",
      ],
      expectedPhysical: ["Calcular IMC corretamente e identificou obesidade grau III"],
      expectedExams: [
        {
          exam: "Peso, altura, IMC e circunferência abdominal",
          justify: "Classificar obesidade e risco",
          expected: "IMC 50 kg/m², CA 125 cm (obesidade grau III)",
        },
        {
          exam: "Glicemia, HbA1c, insulina e perfil lipídico",
          justify: "Comorbidades metabólicas",
          expected: "Pré-diabetes, resistência insulínica e dislipidemia",
        },
        {
          exam: "Transaminases, GGT e USG de abdome",
          justify: "Doença hepática gordurosa e colelitíase",
          expected: "Transaminases elevadas",
        },
        { exam: "TSH", justify: "Excluir hipotireoidismo", expected: "Normal" },
        { exam: "Polissonografia", justify: "Confirmar apneia do sono", expected: "SAOS moderada" },
        { exam: "Endoscopia digestiva alta", justify: "Avaliação pré-operatória", expected: "Solicitar no preparo" },
      ],
      expectedConduct: [
        "Indicação de cirurgia bariátrica (IMC ≥ 40 kg/m² com falha do tratamento clínico)",
        "Avaliação multidisciplinar pré-operatória: endocrinologia, nutrição, psicologia, cardiologia/pneumologia",
        "Tratar comorbidades: CPAP para SAOS, controle de PA e glicemia",
        "Explicar técnicas (bypass gástrico e gastrectomia vertical), riscos e necessidade de suplementação vitalícia",
        "Reforçar que a cirurgia é uma ferramenta e exige mudança de hábitos e seguimento para toda a vida",
      ],
      expectedCommunication: [
        "Apresentação adequada e identificação do paciente",
        "Usar linguagem acessível e demonstra empatia",
        "Explorar motivação e expectativas realistas",
        "Explicar riscos e benefícios da cirurgia bariátrica",
      ],
      criticalErrors: [
        "Não calcular IMC (essencial para classificação)",
        "Não investigar comorbidades que determinam indicação para cirurgia",
        "Indicar cirurgia sem avaliação multidisciplinar prévia",
        "Não solicitar ou mencionar polissonografia em paciente com SAOS suspeita",
        "Prometer perda de peso específica ou tratar cirurgia como solução mágica",
      ],
    },
    instD: {
      title: "Obesidade Grau III e Cirurgia Bariátrica",
      sections: [
        {
          h: "BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
          items: [
            {
              item: "Apresentação adequada e identificação do paciente",
              score: 0.5,
              ref: "ABESO/SBCBM. Diretrizes de Obesidade e Cirurgia Bariátrica, 2022",
            },
            {
              item: "Usa linguagem acessível e demonstra empatia",
              score: 0.5,
              ref: "ABESO/SBCBM. Diretrizes de Obesidade e Cirurgia Bariátrica, 2022",
            },
            {
              item: "Explora motivação e expectativas realistas",
              score: 0.5,
              ref: "ABESO/SBCBM. Diretrizes de Obesidade e Cirurgia Bariátrica, 2022",
            },
            {
              item: "Explica riscos e benefícios da cirurgia bariátrica",
              score: 1,
              ref: "ABESO/SBCBM. Diretrizes de Obesidade e Cirurgia Bariátrica, 2022",
            },
          ],
        },
        {
          h: "BLOCO 2 — ANAMNESE",
          items: [
            {
              item: "Investigou história ponderal e evolução do peso",
              score: 0.5,
              ref: "ABESO/SBCBM. Diretrizes de Obesidade e Cirurgia Bariátrica, 2022",
            },
            {
              item: "Investigou tentativas prévias de tratamento",
              score: 0.5,
              ref: "ABESO/SBCBM. Diretrizes de Obesidade e Cirurgia Bariátrica, 2022",
            },
            {
              item: "Investigou comorbidades associadas à obesidade",
              score: 1,
              ref: "ABESO/SBCBM. Diretrizes de Obesidade e Cirurgia Bariátrica, 2022",
            },
            {
              item: "Avaliou sintomas de SAOS e impacto funcional",
              score: 0.5,
              ref: "ABESO/SBCBM. Diretrizes de Obesidade e Cirurgia Bariátrica, 2022",
            },
            {
              item: "Investigou efeitos na qualidade de vida",
              score: 0.5,
              ref: "ABESO/SBCBM. Diretrizes de Obesidade e Cirurgia Bariátrica, 2022",
            },
          ],
        },
        {
          h: "BLOCO 3 — EXAMES E CONDUTA",
          items: [
            {
              item: "Calculou IMC corretamente e identificou obesidade grau III",
              score: 0.5,
              ref: "ABESO/SBCBM. Diretrizes de Obesidade e Cirurgia Bariátrica, 2022",
            },
            {
              item: "Interpreta exames metabólicos e hepáticos relevantes",
              score: 0.5,
              ref: "ABESO/SBCBM. Diretrizes de Obesidade e Cirurgia Bariátrica, 2022",
            },
            {
              item: "Reconhece indicação para avaliação multidisciplinar pré-operatória",
              score: 0.5,
              ref: "ABESO/SBCBM. Diretrizes de Obesidade e Cirurgia Bariátrica, 2022",
            },
            {
              item: "Orientou sobre tratamento clínico e cirúrgico correlacionado às comorbidades",
              score: 0.5,
              ref: "ABESO/SBCBM. Diretrizes de Obesidade e Cirurgia Bariátrica, 2022",
            },
            {
              item: "Abordou a cirurgia como ferramenta e não como solução mágica",
              score: 0.5,
              ref: "ABESO/SBCBM. Diretrizes de Obesidade e Cirurgia Bariátrica, 2022",
            },
          ],
        },
      ],
      study: [
        {
          h: "Classificação da Obesidade (OMS — IMC)",
          body: "<table><tr><th>Classificação</th><th>IMC (kg/m²)</th></tr><tr><td>Baixo peso</td><td>< 18.5</td></tr><tr><td>Peso normal</td><td>18.5 - 24.9</td></tr><tr><td>Sobrepeso</td><td>25.0 - 29.9</td></tr><tr><td>Obesidade grau I</td><td>30.0 - 34.9</td></tr><tr><td>Obesidade grau II</td><td>35.0 - 39.9</td></tr><tr><td><strong>Obesidade grau III (mórbida)</strong></td><td><strong>≥ 40.0</strong></td></tr></table>",
        },
        {
          h: "Circunferência Abdominal (CA)",
          body: "<ul><li>Risco aumentado: > 94 cm (homens), > 80 cm (mulheres)</li><li>Risco muito aumentado: > 102 cm (homens), > 88 cm (mulheres)</li></ul>",
        },
        {
          h: "Comorbidades Associadas à Obesidade",
          body: "<p><strong>Metabólicas:</strong></p><ul><li>Diabetes mellitus tipo 2</li><li>Resistência insulínica e síndrome metabólica</li><li>Dislipidemia</li><li>Esteatose hepática não alcoólica</li><li>Hiperuricemia</li></ul><p><strong>Cardiovasculares:</strong></p><ul><li>Hipertensão arterial</li><li>Doença arterial coronariana</li><li>Insuficiência cardíaca</li></ul><p><strong>Respiratórias:</strong></p><ul><li>Síndrome da apneia obstrutiva do sono (SAOS)</li><li>Síndrome de hipoventilação da obesidade</li></ul>",
        },
        {
          h: "Critérios para Cirurgia Bariátrica",
          body: "<p><strong>Indicações:</strong></p><ol><li>IMC ≥ 40 kg/m²</li><li>IMC ≥ 35 kg/m² com pelo menos uma comorbidade relevante (diabetes tipo 2, hipertensão, SAOS, dislipidemia, esteatose hepática, doença articular degenerativa)</li></ol><p><strong>Critérios adicionais obrigatórios:</strong></p><ul><li>Idade 18-65 anos</li><li>Tempo de evolução da obesidade ≥ 2 anos</li><li>Falha de tratamento clínico prévio</li><li>Capacidade de compreender riscos e benefícios</li><li>Ausência de contraindicações</li></ul>",
        },
        {
          h: "Avaliação Pré-operatória Multidisciplinar",
          body: "<ul><li>Endocrinologia: otimizar comorbidades</li><li>Nutrição: avaliação nutricional e educação alimentar</li><li>Psicologia/Psiquiatria: motivação e expectativas</li><li>Cardiologia: ECG e ecocardiograma</li><li>Pneumologia: polissonografia obrigatória se houver suspeita de SAOS</li><li>Gastroenterologia: endoscopia digestiva alta</li><li>Cirurgia: técnicas, riscos e consentimento</li></ul>",
        },
        {
          h: "Técnicas Cirúrgicas Principais",
          body: "<p><strong>Bypass gástrico em Y-de-Roux</strong> — reservatório gástrico de cerca de 30 mL, mecanismo restritivo e disabsortivo, perda de peso esperada de 60-70% do excesso peso.</p><p><strong>Gastronomia vertical (Sleeve)</strong> — remoção de 70-80% do estômago, perda de peso esperada de 50-60% do excesso peso.</p>",
        },
        {
          h: "Cuidados e Seguimento Pós-operatório",
          body: "<p><strong>Suplementação obrigatória:</strong></p><ul><li>Multivitamínico diário</li><li>Vitamina B12 1000-2000 mcg/mês IM</li><li>Cálcio 1200-1500 mg + Vitamina D 3000 UI</li><li>Ferro se deficiência</li></ul><p><strong>Resultados esperados:</strong></p><ul><li>Remissão de diabetes tipo 2 em 60-80%</li><li>Melhora da hipertensão em 50-70%</li><li>Melhora da dislipidemia em 70-80%</li><li>Resolução de SAOS em 70-85%</li><li>Melhora da esteatose hepática em 90%</li></ul>",
        },
      ],
    },
  },

  // ── ESTAÇÃO 16: Diabetes descontrolado apesar da metformina ─
  {
    id: 16,
    title: "Diabetes descontrolado apesar da metformina",
    sub: "Ambulatório de endocrinologia (hospital secundário)",
    tema: "Endocrinologia",
    topic: "diabetes",
    level: "moderado",
    cardAccent: "#e76f51",
    instA: {
      scenario: "Você está no ambulatório de endocrinologia de um hospital secundário.",
      patient: "J.S.M., 54 anos, sexo masculino, motorista de ônibus.",
      complaint: "Paciente com diabetes mellitus tipo 2 há 8 anos, em uso de metformina 2000 mg/dia, retorna para consulta de seguimento com controle glicêmico inadequado. Glicemias capilares domiciliares entre 180-280 mg/dL.",
      tasks: [
        "Apresente-se e estabeleça vínculo com o paciente.",
        "Realize anamnese dirigida ao quadro atual e à adesão ao tratamento.",
        "Solicite e interprete os dados do exame físico.",
        "Interprete os exames complementares disponíveis.",
        "Formule a hipótese diagnóstica e identifique eventuais complicações.",
        "Defina a conduta e oriente o paciente sobre o seguimento.",
      ],
    },
    instB: {
      vitals: { PA: "142/88 mmHg", FC: "76 bpm", Peso: "88 kg", Altura: "1.72 m", IMC: "29.8 kg/m²", CA: "102 cm" },
      physicalGeneral: "Exame dos pés sem calosidades ou úlceras, pulsos pedioso e tibial posteriores presentes, sensibilidade ao monofilamento de 10g alterada em hálux e plantares, reflexo aquileu diminuído e deformidade em garra.",
      physicalSeg: [
        "Fundo de olho: microaneurismas e pequenas hemorragias retinianas bilaterais, sem exsudatos ou edema macular evidente, sugestivo de retinopatia diabética não proliferativa leve.",
      ],
      labs: [
        { test: "Glicemia jejum", val: "198 mg/dL", ref: "70-100", alt: true },
        { test: "HbA1c", val: "9.8%", ref: "< 7.0% meta", alt: true },
        { test: "Colesterol total", val: "215 mg/dL", ref: "< 200", alt: true },
        { test: "LDL", val: "138 mg/dL", ref: "< 70 meta DM", alt: true },
        { test: "HDL", val: "42 mg/dL", ref: "> 40", alt: false },
        { test: "Triglicerídeos", val: "245 mg/dL", ref: "< 150", alt: true },
        { test: "Creatinina", val: "1.3 mg/dL", ref: "0.7-1.3", alt: false },
        { test: "TFG (CKD-EPI)", val: "62 mL/min/1.73m²", ref: "> 90", alt: true },
        { test: "Relação albumina/creatinina urinária", val: "85 mg/g", ref: "< 30 normal", alt: true },
        { test: "EAS", val: "Proteinúria +, sem cilindros", ref: "—", alt: true },
        { test: "TSH", val: "2.8 μUI/mL", ref: "0.4-4.0", alt: false },
      ],
      image: null,
      note: "Interpretação: diabetes descompensado, DRC G3a com albuminúria moderada e retinopatia leve.",
      patientProfile: "Motorista de ônibus de 54 anos, diabético há 8 anos. Fica sentado o dia todo, come muito arroz, pão e às vezes doce. Às vezes esquece a metformina. Pai diabético que ficou cego e foi amputado.",
      script: [
        {
          trigger: "Queixa principal",
          speech: "Doutor, meu açúcar não está controlando. Minhas glicemias estão sempre altas.",
        },
        {
          trigger: "Controle domiciliar",
          speech: "Meço em casa, está entre 180 e 280 quase sempre. De manhã em jejum está 180-200. Depois das refeições sobe para 250-280.",
        },
        {
          trigger: "Medicações",
          speech: "Tomo metformina 1000 mg de manhã e à noite. Tomo losartana para pressão. Às vezes esqueço de tomar, mas na maioria dos dias tomo certinho.",
        },
        {
          trigger: "Alimentação",
          speech: "Tento fazer dieta, mas é difícil. Como bastante arroz, feijão, pão. Às vezes como doce, não resisto.",
        },
        {
          trigger: "Exercício",
          speech: "Trabalho dirigindo ônibus, fico sentado o dia todo. Não faço exercício, não tenho tempo.",
        },
        {
          trigger: "Sintomas",
          speech: "Sinto muita sede, bebo muita água. Urino muito, várias vezes à noite. Às vezes sinto formigamento nos pés à noite. Sinto que meus pés estão dormentes.",
        },
        { trigger: "Visão", speech: "Visão está normal, enxergo bem. Nunca fui no oftalmologista." },
        {
          trigger: "Preocupações",
          speech: "Tenho medo de ter complicações. Meu pai teve diabetes, ficou cego e precisou amputar a perna. Vou precisar de insulina?",
        },
      ],
      hiddenInfo: [
        "Esquece algumas doses da metformina — só se perguntarem sobre adesão",
        "Formigamento e dormência nos pés à noite — só se perguntarem",
        "Nunca foi ao oftalmologista — só se perguntarem",
        "Pai cego e amputado pelo diabetes — só se perguntarem sobre a família",
      ],
      actorBehavior: "Preocupado com complicações por causa do pai; tem medo da insulina. Aceita bem as orientações se explicadas com calma.",
    },
    instC: {
      diagnosis: "Diabetes mellitus tipo 2 descompensado com neuropatia periférica, nefropatia diabética, retinopatia diabética leve, dislipidemia e hipertensão.",
      differentials: [
        "Má adesão como causa principal do descontrole — investigar (esquece algumas doses), mas HbA1c 9,8% exige intensificação",
        "Diabetes tipo 1 de início tardio (LADA) — menos provável pelo perfil",
        "Neuropatia por deficiência de B12 (uso prolongado de metformina) — dosar B12",
      ],
      context: "Homem de 54 anos com DM2 há 8 anos em metformina 2000 mg/dia, HbA1c 9.8% e glicemias domiciliares entre 180-280 mg/dL. Exames mostram neuropatia periférica, DRC G3a e retinopatia diabética não proliferativa leve.",
      justify: "Complicações microvasculares e controle glicêmico inadequado justificam intensificação terapêutica, com possibilidade de iSGLT2 ou agonista GLP-1, ou insulinização se necessário.",
      expectedAnamnesis: [
        "Investigar adesão ao tratamento e hábitos de vida",
        "Revisar glicemias domiciliares e sintomas de hiperglicemia",
        "Investigar neuropatia e cuidados com os pés",
      ],
      expectedPhysical: ["Examinar: Fundo de olho"],
      expectedExams: [
        {
          exam: "HbA1c e glicemias capilares",
          justify: "Avaliar controle glicêmico",
          expected: "HbA1c 9,8% e glicemias 180–280 mg/dL",
        },
        {
          exam: "Creatinina/TFG e relação albumina/creatinina",
          justify: "Doença renal do diabetes",
          expected: "TFG 62 e albuminúria 85 mg/g",
        },
        { exam: "Fundo de olho", justify: "Retinopatia diabética", expected: "Retinopatia não proliferativa leve" },
        {
          exam: "Exame dos pés (monofilamento, pulsos)",
          justify: "Neuropatia e risco de úlcera",
          expected: "Sensibilidade reduzida",
        },
        {
          exam: "Perfil lipídico e vitamina B12",
          justify: "Risco cardiovascular e efeito da metformina",
          expected: "LDL 138 e TG 245",
        },
      ],
      expectedConduct: [
        "Intensificar o tratamento: associar iSGLT2 (benefício renal e cardiovascular) ou agonista de GLP-1; considerar insulina basal (NPH 10 UI ou 0,1–0,2 UI/kg à noite) se HbA1c muito alta ou sintomas",
        "Manter metformina (TFG ≥ 45) e losartana (nefroproteção)",
        "Estatina; meta de PA < 130/80 mmHg",
        "Encaminhar ao oftalmologista e orientar cuidado diário com os pés",
        "Educação: automonitorização, metas (HbA1c < 7%), adesão, alimentação e atividade física",
      ],
      expectedCommunication: [
        "Apresentar-se pelo nome e função",
        "Usar linguagem acessível, sem jargão",
        "Explicar o diagnóstico e o plano de forma clara",
        "Verificar o entendimento e esclarecer dúvidas",
      ],
      criticalErrors: [
        "Não examinar os pés em paciente diabético",
        "Não intensificar tratamento com HbA1c 9.8%",
        "Não encaminhar para oftalmologia com retinopatia suspeita",
        "Não avaliar função renal em paciente com albuminúria",
      ],
    },
    instD: {
      title: "Diabetes Mellitus Tipo 2 — Manejo do Controle Inadequado",
      sections: [
        {
          h: "BLOCO 1 — ANAMNESE",
          items: [
            {
              item: "Investigou adesão ao tratamento e hábitos de vida",
              score: 0.5,
              ref: "SBD. Diretriz da Sociedade Brasileira de Diabetes, 2024",
            },
            {
              item: "Revisou glicemias domiciliares e sintomas de hiperglicemia",
              score: 0.5,
              ref: "SBD. Diretriz da Sociedade Brasileira de Diabetes, 2024",
            },
            {
              item: "Investigou neuropatia e cuidados com os pés",
              score: 0.5,
              ref: "SBD. Diretriz da Sociedade Brasileira de Diabetes, 2024",
            },
          ],
        },
        {
          h: "BLOCO 2 — EXAMES",
          items: [
            {
              item: "Interpretou HbA1c 9.8% como descompensação grave",
              score: 1,
              ref: "SBD. Diretriz da Sociedade Brasileira de Diabetes, 2024",
            },
            {
              item: "Avaliou função renal e albuminúria",
              score: 0.5,
              ref: "SBD. Diretriz da Sociedade Brasileira de Diabetes, 2024",
            },
            {
              item: "Reconheceu retinopatia e necessidade de oftalmologia",
              score: 0.5,
              ref: "SBD. Diretriz da Sociedade Brasileira de Diabetes, 2024",
            },
          ],
        },
        {
          h: "BLOCO 3 — CONDUTA",
          items: [
            {
              item: "Intensificou tratamento farmacológico ou considerou insulinização",
              score: 1,
              ref: "SBD. Diretriz da Sociedade Brasileira de Diabetes, 2024",
            },
            {
              item: "Orientou metas glicêmicas e automonitoramento",
              score: 0.5,
              ref: "SBD. Diretriz da Sociedade Brasileira de Diabetes, 2024",
            },
            {
              item: "Orientou mudanças de estilo de vida e prevenção de complicações",
              score: 0.5,
              ref: "SBD. Diretriz da Sociedade Brasileira de Diabetes, 2024",
            },
          ],
        },
      ],
      study: [
        {
          h: "Avaliação do Controle",
          body: "<p><strong>HbA1c</strong>: alvo geral < 7.0%; individualizado 6.5-8.0%. Falha terapêutica quando > 9.0%. Intensificar tratamento após 3 meses acima da meta.</p>",
        },
        {
          h: "Escada Terapêutica",
          body: "<p>1ª linha: metformina + mudança de estilo de vida. 2ª linha: iSGLT2 ou agonista GLP-1 em alto risco cardiovascular; iSGLT2 em DRC/albuminúria; agonista GLP-1 em obesidade; sulfonilureia se custo limitado.</p>",
        },
        {
          h: "Insulinização",
          body: "<p>Indicações absolutas: HbA1c ≥ 10%, glicemia ≥ 300 mg/dL, sintomas graves ou cetoacidose. Relativas: HbA1c > 9% após otimização ou DRC avançada. Esquema inicial basal 0.2 UI/kg ao deitar.</p>",
        },
      ],
    },
  },

  // ── ESTAÇÃO 17: Excesso de pelos no rosto e menstruação ausente ─
  {
    id: 17,
    title: "Excesso de pelos no rosto e menstruação ausente",
    sub: "Ambulatório de endocrinologia de um hospital terciário",
    tema: "Endocrinologia",
    topic: "hiperandrogenismo",
    level: "difícil",
    cardAccent: "#f4a261",
    instA: {
      scenario: "Você está no ambulatório de endocrinologia de um hospital terciário.",
      patient: "P.R.S., 26 anos, sexo feminino, estudante universitária.",
      complaint: "Paciente refere crescimento excessivo de pelos no rosto, tórax e abdome há 3 anos, com piora progressiva. Amenorreia há 8 meses.",
      tasks: [
        "Apresente-se e estabeleça vínculo com o paciente.",
        "Realize anamnese dirigida ao quadro atual.",
        "Solicite e interprete os dados do exame físico.",
        "Formule a hipótese diagnóstica.",
        "Solicite os exames complementares adequados.",
        "Defina a conduta e oriente o paciente.",
      ],
    },
    instB: {
      vitals: { PA: "125/80 mmHg", FC: "78 bpm", Peso: "75 kg", Altura: "1.62 m", IMC: "28.6 kg/m²" },
      physicalGeneral: "Hirsutismo acentuado, acne severa, alopecia androgenética inicial, clitoromegalia discreta e voz levemente grave.",
      physicalSeg: [
        "Hirsutismo com Ferriman-Gallwey 22: pelos grossos em face, tórax, linha alba, região lombar e coxas.",
        "Acne severa em face, tórax e dorso.",
        "Alopecia androgenética com rarefação frontal e vértice.",
      ],
      labs: [
        { test: "β-HCG", val: "< 2 mUI/mL", ref: "< 5", alt: false },
        { test: "TSH", val: "2.1 μUI/mL", ref: "0.4-4.0", alt: false },
        { test: "Prolactina", val: "15 ng/mL", ref: "< 25", alt: false },
        { test: "LH", val: "8.5 mUI/mL", ref: "2-10", alt: false },
        { test: "FSH", val: "4.8 mUI/mL", ref: "3-10", alt: false },
        { test: "Testosterona total", val: "285 ng/dL", ref: "14-76", alt: true },
        { test: "Testosterona livre", val: "28 pg/mL", ref: "< 2.2", alt: true },
        { test: "DHEA-S", val: "785 μg/dL", ref: "35-430", alt: true },
        { test: "17-OH progesterona basal", val: "12 ng/mL", ref: "< 2.0", alt: true },
        { test: "Androstenediona", val: "8.5 ng/mL", ref: "0.6-3.1", alt: true },
      ],
      image: null,
      note: "RNM adrenais normais. Teste ACTH com 17-OHP pós-ACTH 45 ng/mL, compatível com hiperplasia adrenal congênita não clássica.",
      patientProfile: "Estudante universitária de 26 anos, menarca aos 14 anos, ciclos sempre irregulares. Hirsutismo progressivo há 3 anos, acne e queda de cabelo. Baixa autoestima e dificuldade nos relacionamentos.",
      script: [
        { trigger: "Queixa principal", speech: "Doutora, estou com muito pelo no rosto, parece barba de homem." },
        {
          trigger: "Hirsutismo",
          speech: "Começou há 3 anos, piorando progressivamente. Preciso depilar rosto toda semana. Pelos grossos no peito, barriga, costas.",
        },
        { trigger: "Acne", speech: "Tenho muita espinha no rosto, peito e costas." },
        { trigger: "Alopecia", speech: "Meu cabelo está caindo, especialmente na frente." },
        { trigger: "Amenorreia", speech: "Minha menstruação parou há 8 meses." },
        {
          trigger: "História menstrual",
          speech: "Menstruação sempre foi irregular. Primeira menstruação aos 14 anos.",
        },
        { trigger: "Impacto", speech: "Baixa autoestima, me sinto masculinizada. Dificuldade nos relacionamentos." },
        {
          trigger: "Perguntas",
          speech: "O que eu tenho? Por que estou assim? Tem tratamento? Os pelos vão diminuir?",
        },
      ],
      hiddenInfo: [
        "Queda de cabelo na região frontal — só se perguntarem",
        "Ciclos irregulares desde a menarca — só se perguntarem sobre a história menstrual",
        "Impacto na autoestima e nos relacionamentos — só se perguntarem",
      ],
      actorBehavior: "Envergonhada, evita contato visual ao falar dos pelos. Pergunta se os pelos vão diminuir e por que está assim.",
    },
    instC: {
      diagnosis: "Hiperplasia adrenal congênita forma não clássica por deficiência parcial de 21-hidroxilase.",
      differentials: [
        "Síndrome dos ovários policísticos — principal diferencial; 17-OH progesterona elevada favorece HAC",
        "Tumor adrenal ou ovariano produtor de androgênio — testosterona > 200 ng/dL e DHEA-S muito alto exigem imagem; RNM sem tumor",
        "Síndrome de Cushing — sem estigmas; pesquisar se suspeita clínica",
        "Hiperprolactinemia e disfunção tireoidiana — prolactina e TSH normais",
      ],
      context: "Mulher de 26 anos com hirsutismo severo, acne grave, alopecia androgenética e amenorreia de 8 meses. Testosterone e DHEA-S elevadas, 17-OHP basal e pós-ACTH confirmam HAC não clássica. RNM descarta tumor adrenal.",
      justify: "Elevados andrógenos plasmáticos junto a resposta exagerada do teste ACTH e adrenais normais sustentam o diagnóstico de HAC não clássica, exigindo tratamento com glicocorticoide e avaliação de terapias adjuvantes.",
      expectedAnamnesis: [
        "Caracterizar hirsutismo e evolução dos sintomas",
        "Investigar virilização: voz, clitoromegalia e alopecia",
        "Perguntar sobre história menstrual e amenorreia",
      ],
      expectedPhysical: [
        "Examinar: Hirsutismo com ferriman-gallwey 22",
        "Examinar: Acne severa em face, tórax e dorso.",
        "Examinar: Alopecia androgenética com rarefação frontal e vértice.",
      ],
      expectedExams: [
        { exam: "Beta-HCG", justify: "Excluir gravidez na amenorreia", expected: "Negativo" },
        {
          exam: "Testosterona total e livre, DHEA-S e androstenediona",
          justify: "Quantificar hiperandrogenismo e origem",
          expected: "Elevados",
        },
        {
          exam: "17-OH progesterona basal (e após ACTH)",
          justify: "Diagnóstico de HAC não clássica",
          expected: "Basal 12 ng/mL e resposta exagerada ao ACTH",
        },
        { exam: "TSH e prolactina", justify: "Diferenciais", expected: "Normais" },
        { exam: "Imagem de adrenais (RNM ou TC)", justify: "Excluir tumor virilizante", expected: "Sem tumor" },
      ],
      expectedConduct: [
        "Glicocorticoide em dose baixa (hidrocortisona 10–15 mg/dia ou dexametasona 0,25–0,5 mg à noite)",
        "Anticoncepcional combinado e/ou antiandrogênico (espironolactona) para hirsutismo, com contracepção",
        "Tratamento cosmético (laser, depilação) e acompanhamento dermatológico da acne",
        "Aconselhamento genético e orientar necessidade de dose de estresse se em uso de glicocorticoide",
        "Apoio psicológico pelo impacto na autoestima",
      ],
      expectedCommunication: [
        "Apresentar-se pelo nome e função",
        "Usar linguagem acessível, sem jargão",
        "Explicar o diagnóstico e o plano de forma clara",
        "Verificar o entendimento e esclarecer dúvidas",
      ],
      criticalErrors: [
        "Não solicitar 17-OH progesterona",
        "Não realizar teste ACTH",
        "Não descartar tumor adrenal com RNM",
        "Prescrever apenas anticoncepcional sem glicocorticoide",
      ],
    },
    instD: {
      title: "Hiperplasia Adrenal Congênita Não Clássica",
      sections: [
        {
          h: "BLOCO 1 — ANAMNESE",
          items: [
            {
              item: "Caracterizou hirsutismo e evolução dos sintomas",
              score: 0.5,
              ref: "Endocrine Society. Congenital Adrenal Hyperplasia Guideline, 2018",
            },
            {
              item: "Investigou virilização: voz, clitoromegalia e alopecia",
              score: 1,
              ref: "Endocrine Society. Congenital Adrenal Hyperplasia Guideline, 2018",
            },
            {
              item: "Perguntou sobre história menstrual e amenorreia",
              score: 0.5,
              ref: "Endocrine Society. Congenital Adrenal Hyperplasia Guideline, 2018",
            },
          ],
        },
        {
          h: "BLOCO 2 — EXAMES",
          items: [
            {
              item: "Afastou gravidez com β-HCG",
              score: 0.5,
              ref: "Endocrine Society. Congenital Adrenal Hyperplasia Guideline, 2018",
            },
            {
              item: "Solicitou testosterona total e livre",
              score: 1,
              ref: "Endocrine Society. Congenital Adrenal Hyperplasia Guideline, 2018",
            },
            {
              item: "Solicitou DHEA-S e 17-OH progesterona",
              score: 1.5,
              ref: "Endocrine Society. Congenital Adrenal Hyperplasia Guideline, 2018",
            },
            {
              item: "Solicitou RNM adrenais para excluir tumor",
              score: 0.5,
              ref: "Endocrine Society. Congenital Adrenal Hyperplasia Guideline, 2018",
            },
          ],
        },
        {
          h: "BLOCO 3 — CONDUTA",
          items: [
            {
              item: "Diagnosticou HAC não clássica por deficiência de 21-hidroxilase",
              score: 1,
              ref: "Endocrine Society. Congenital Adrenal Hyperplasia Guideline, 2018",
            },
            {
              item: "Prescreveu glicocorticoide e discutiu terapia adjuvante",
              score: 1,
              ref: "Endocrine Society. Congenital Adrenal Hyperplasia Guideline, 2018",
            },
            {
              item: "Discutiu tratamento cosmético e impacto psicológico",
              score: 0.5,
              ref: "Endocrine Society. Congenital Adrenal Hyperplasia Guideline, 2018",
            },
          ],
        },
      ],
      study: [
        {
          h: "Definição",
          body: "<p>Hiperandrogenismo pós-puberal causado por deficiência parcial de 21-hidroxilase, com virilização e amenorreia.</p>",
        },
        {
          h: "Diagnóstico",
          body: "<ul><li>17-OH progesterona basal > 2 ng/mL</li><li>Teste ACTH: 17-OHP pós-ACTH > 10 ng/mL</li><li>RNM adrenais para excluir tumor</li></ul>",
        },
        {
          h: "Tratamento",
          body: "<p>Glicocorticoide com hidrocortisona 10-15 mg/dia ou dexametasona 0.25-0.5 mg/dia. Antiandrogênicos e medidas cosméticas podem ser usados como adjuvantes.</p>",
        },
      ],
    },
  },

  // ── ESTAÇÃO 18: Cansaço, dor de cabeça e dificuldade de enxergar dos lados ─
  {
    id: 18,
    title: "Cansaço, dor de cabeça e dificuldade de enxergar dos lados",
    sub: "Ambulatório de endocrinologia (hospital terciário)",
    tema: "Endocrinologia",
    topic: "pituitario",
    level: "difícil",
    cardAccent: "#577590",
    instA: {
      scenario: "Você está no ambulatório de endocrinologia de um hospital terciário.",
      patient: "M.A.F., 42 anos, sexo masculino, professor.",
      complaint: "Paciente refere fadiga progressiva há 1 ano, cefaleia frontal recorrente, redução de libido e ganho de peso de 8 kg. Amigos comentaram que seu rosto está diferente.",
      tasks: [
        "Apresente-se e estabeleça vínculo com o paciente.",
        "Realize anamnese dirigida ao quadro atual.",
        "Solicite e interprete os dados do exame físico.",
        "Formule a hipótese diagnóstica.",
        "Solicite os exames complementares adequados.",
        "Defina a conduta e os encaminhamentos necessários.",
      ],
    },
    instB: {
      vitals: { PA: "110/70 mmHg", FC: "62 bpm", Peso: "82 kg", Altura: "1.75 m", IMC: "26.7 kg/m²" },
      physicalGeneral: "Fácies de rara dosagem de pelos faciais, pele pálida e fina, distribuição de gordura centrípeta, ginecomastia bilateral leve e pele seca.",
      physicalSeg: [
        "Campimetria por confrontação: hemianopsia bitemporal.",
        "Testículos de volume reduzido (8 mL bilateralmente) e pelos pubianos rarefados.",
        "Pupilas isocóricas e fotorreagentes, movimentos oculares preservados.",
      ],
      labs: [
        { test: "Cortisol 8h", val: "3.2 μg/dL", ref: "6-23", alt: true },
        { test: "ACTH", val: "5 pg/mL", ref: "10-60", alt: true },
        { test: "TSH", val: "0.8 μUI/mL", ref: "0.4-4.0", alt: false },
        { test: "T4 livre", val: "0.6 ng/dL", ref: "0.8-1.8", alt: true },
        { test: "Testosterona total", val: "85 ng/dL", ref: "300-1000", alt: true },
        { test: "LH", val: "0.5 mUI/mL", ref: "1.5-9", alt: true },
        { test: "FSH", val: "0.8 mUI/mL", ref: "1.5-12", alt: true },
        { test: "Prolactina", val: "45 ng/mL", ref: "< 20", alt: true },
        { test: "IGF-1", val: "65 ng/mL", ref: "109-284", alt: true },
        { test: "Sódio", val: "132 mEq/L", ref: "136-145", alt: true },
      ],
      image: {
        title: "Ressonância Magnética de Sela Túrcica",
        report: "Macroadenoma hipofisário de 2.8 x 2.5 x 2.2 cm. Lesão expansiva centrada na sela túrcica com compressão do quiasma óptico e extensão suprasselar. Sem invasão de seio cavernoso.",
      },
      note: "Macroadenoma hipofisário não funcionante com compressão do quiasma óptico e quadro clínico de pan-hipopituitarismo.",
      patientProfile: "Professor de 42 anos, cansado há 1 ano, com dificuldade de concentração. Cefaleia frontal que piora ao longo do dia. Tropeça em objetos que estão dos lados. Notou menos pelos no rosto e libido baixa.",
      script: [
        { trigger: "Queixa principal", speech: "Doutor, estou muito cansado há 1 ano, piorando." },
        { trigger: "Fadiga", speech: "Acordo cansado, sem energia. Dificuldade de concentração no trabalho." },
        { trigger: "Cefaleia", speech: "Dor de cabeça constante, na testa. Piora ao longo do dia." },
        { trigger: "Visão", speech: "Às vezes tenho dificuldade de ver nas laterais. Tropeço em objetos dos lados." },
        { trigger: "Outros sintomas", speech: "Engordei 8 kg. Libido caiu muito. Menos pelo no rosto." },
        { trigger: "Perguntas", speech: "O que eu tenho? É tumor? Vou perder a visão? Preciso operar?" },
      ],
      hiddenInfo: [
        "Tropeça em objetos dos lados — só se perguntarem sobre a visão",
        "Menos pelos no rosto e libido baixa — só se perguntarem",
        "Ganhou 8 kg — só se perguntarem sobre peso",
      ],
      actorBehavior: "Cansado e lento para responder. Assusta-se com a palavra 'tumor' e pergunta se vai perder a visão e se precisa operar.",
    },
    instC: {
      diagnosis: "Hipopituitarismo por macroadenoma hipofisário com compressão de quiasma óptico.",
      differentials: [
        "Prolactinoma — sai: prolactina de 45 ng/mL é compatível com compressão da haste, não com macroprolactinoma",
        "Craniofaringioma ou meningioma selar — diferenciais de massa selar; RNM sugere adenoma",
        "Hipotireoidismo primário — sai: TSH baixo/normal com T4 livre baixo indica causa central",
        "Depressão — fadiga e baixa libido, mas déficits hormonais e campo visual alterado",
      ],
      context: "Homem de 42 anos com fadiga, cefaleia, redução de libido, ganho de peso, hemianopsia bitemporal e exames hormonais compatíveis com insuficiência adrenal central, hipotireoidismo central, hipogonadismo central e deficiência de GH.",
      justify: "Cortisol baixo com ACTH baixo, T4 livre baixo com TSH inadequadamente normal, testosterona baixa com LH/FSH baixos e IGF-1 baixo confirmam hipopituitarismo secundário. RNM mostra macroadenoma com compressão quiasmática, indicação cirúrgica urgente.",
      expectedAnamnesis: [
        "Investigar fadiga, cefaleia e alterações visuais",
        "Avaliar redução de libido e mudança de pelos corporais",
      ],
      expectedPhysical: [
        "Examinar: Campimetria por confrontação",
        "Examinar: Testículos de volume reduzido (8 ml bilateralmente) e pelos pubianos rarefados.",
        "Examinar: Pupilas isocóricas e fotorreagentes, movimentos oculares preservados.",
      ],
      expectedExams: [
        {
          exam: "Cortisol às 8 h e ACTH",
          justify: "Insuficiência adrenal central",
          expected: "Cortisol 3,2 com ACTH inapropriadamente baixo",
        },
        {
          exam: "TSH e T4 livre",
          justify: "Hipotireoidismo central",
          expected: "T4 livre baixo com TSH inapropriadamente normal",
        },
        {
          exam: "Testosterona, LH e FSH; prolactina; IGF-1",
          justify: "Demais eixos hipofisários",
          expected: "Hipogonadismo central, prolactina 45 e IGF-1 baixo",
        },
        { exam: "Sódio", justify: "Hiponatremia por deficiência de cortisol", expected: "132 mEq/L" },
        {
          exam: "RNM de sela túrcica e campimetria",
          justify: "Tamanho da lesão e compressão do quiasma",
          expected: "Macroadenoma de 2,8 cm e hemianopsia bitemporal",
        },
      ],
      expectedConduct: [
        "Repor hidrocortisona primeiro (ex.: 15–20 mg/dia), e só depois levotiroxina (risco de crise adrenal)",
        "Encaminhamento urgente à neurocirurgia: cirurgia transesfenoidal (compressão do quiasma)",
        "Reposição de testosterona após estabilização; GH avaliado depois",
        "Orientar dose de estresse e sinais de crise adrenal; identificação como usuário de corticoide",
        "Avaliação oftalmológica com campimetria formal",
      ],
      expectedCommunication: [
        "Apresentar-se pelo nome e função",
        "Usar linguagem acessível, sem jargão",
        "Explicar o diagnóstico e o plano de forma clara",
        "Verificar o entendimento e esclarecer dúvidas",
      ],
      criticalErrors: [
        "Não avaliar campo visual",
        "Não solicitar RNM sela túrcica",
        "Iniciar levotiroxina antes de hidrocortisona",
        "Não reconhecer urgência cirúrgica",
      ],
    },
    instD: {
      title: "Hipopituitarismo e Adenomas Hipofisários",
      sections: [
        {
          h: "BLOCO 1 — ANAMNESE",
          items: [
            {
              item: "Investigou fadiga, cefaleia e alterações visuais",
              score: 1,
              ref: "Endocrine Society. Hormonal Replacement in Hypopituitarism, 2016",
            },
            {
              item: "Avaliou redução de libido e mudança de pelos corporais",
              score: 0.5,
              ref: "Endocrine Society. Hormonal Replacement in Hypopituitarism, 2016",
            },
          ],
        },
        {
          h: "BLOCO 2 — EXAMES",
          items: [
            {
              item: "Solicitou cortisol, ACTH, TSH, T4 livre, testosterona e IGF-1",
              score: 1,
              ref: "Endocrine Society. Hormonal Replacement in Hypopituitarism, 2016",
            },
            {
              item: "Solicitou campimetria e RNM sela túrcica",
              score: 1,
              ref: "Endocrine Society. Hormonal Replacement in Hypopituitarism, 2016",
            },
          ],
        },
        {
          h: "BLOCO 3 — CONDUTA",
          items: [
            {
              item: "Diagnosticou hipopituitarismo secundário com macroadenoma",
              score: 1,
              ref: "Endocrine Society. Hormonal Replacement in Hypopituitarism, 2016",
            },
            {
              item: "Prescreveu hidrocortisona antes de levotiroxina",
              score: 1,
              ref: "Endocrine Society. Hormonal Replacement in Hypopituitarism, 2016",
            },
            {
              item: "Encaminhou neurocirurgia urgente",
              score: 0.5,
              ref: "Endocrine Society. Hormonal Replacement in Hypopituitarism, 2016",
            },
          ],
        },
      ],
      study: [
        {
          h: "Definição",
          body: "<p>Hipopituitarismo é deficiência de um ou mais hormônios hipofisários, frequentemente por macroadenoma que comprime o quiasma óptico.</p>",
        },
        {
          h: "Diagnóstico",
          body: "<ul><li>Cortisol baixo com ACTH baixo = insuficiência adrenal central</li><li>T4 livre baixo com TSH inapropriadamente normal = hipotireoidismo central</li><li>Testosterona baixa com LH/FSH baixos = hipogonadismo central</li><li>IGF-1 baixo = déficit de GH</li></ul>",
        },
        {
          h: "Tratamento",
          body: "<p>Reposição hormonal urgente com hidrocortisona antes de levotiroxina. Cirurgia transesfenoidal indicada em macroadenoma com compressão quiasmática.</p>",
        },
      ],
    },
  },

  // ── ESTAÇÃO 19: Jovem confuso, vomitando e respirando rápido ─
  {
    id: 19,
    title: "Jovem confuso, vomitando e respirando rápido",
    sub: "Pronto-Socorro — hospital terciário",
    tema: "Endocrinologia",
    topic: "diabetes",
    level: "difícil",
    cardAccent: "#e63946",
    instA: {
      scenario: "Você está no pronto-socorro de um hospital terciário.",
      patient: "L.M.A., 19 anos, sexo masculino, estudante universitário.",
      complaint: "Paciente trazido por amigos com náuseas, vômitos há 2 dias, dor abdominal, respiração rápida e alteração do nível de consciência. Refere emagrecimento de 12 kg em 2 meses.",
      tasks: [
        "Realizar anamnese rápida direcionada",
        "Reconhecer sinais de cetoacidose diabética",
        "Solicitar exame físico e exames complementares urgentes",
        "Formular diagnóstico e classificar gravidade",
        "Iniciar tratamento de emergência",
        "Definir critérios de internação e seguimento",
      ],
    },
    instB: {
      vitals: { PA: "95/60 mmHg", FC: "118 bpm", FR: "32 irpm", Tax: "36.2°C", Peso: "58 kg" },
      physicalGeneral: "Paciente desidratado, com respiração de Kussmaul, hálito cetônico, mucosas secas e turgor diminuído. TEC > 3 segundos.",
      physicalSeg: [
        "Glasgow 13: confuso, mas responsivo.",
        "Respiração profunda e rápida, odor de cetona no hálito.",
        "Sinais de desidratação com pele seca e turgor diminuído.",
      ],
      labs: [
        { test: "Glicemia", val: "485 mg/dL", ref: "70-100", alt: true },
        { test: "pH arterial", val: "7.15", ref: "7.35-7.45", alt: true },
        { test: "Bicarbonato", val: "9 mEq/L", ref: "22-28", alt: true },
        { test: "Cetonas séricas", val: "4+ (forte)", ref: "Negativo", alt: true },
        { test: "Sódio", val: "128 mEq/L", ref: "136-145", alt: true },
        { test: "Potássio", val: "5.2 mEq/L", ref: "3.5-5.0", alt: true },
        { test: "Ureia", val: "58 mg/dL", ref: "10-50", alt: true },
        { test: "Creatinina", val: "1.8 mg/dL", ref: "0.7-1.3", alt: true },
        { test: "EAS", val: "Glicosúria 4+, Cetonúria 4+", ref: "Negativo", alt: true },
      ],
      image: null,
      note: "Gasometria arterial mostra pH 7.15, pCO2 22 mmHg e HCO3 9 mEq/L. Exame confirma cetoacidose diabética grave em diabetes tipo 1 de início.",
      patientProfile: "Estudante universitário de 19 anos, sem doenças conhecidas. Há semanas tem muita sede, urina muito e perdeu 12 kg em 2 meses. Trazido por amigos da república.",
      script: [
        {
          trigger: "História inicial",
          speech: "Muita sede há semanas. Urino muito, várias vezes à noite. Perdi muito peso, 12 quilos.",
        },
        { trigger: "Sintomas anteriores", speech: "Vomito muito há 2 dias. Minha barriga dói e estou confuso." },
        { trigger: "Sinais", speech: "A respiração está rápida e profunda. Está com cheiro de frutas?" },
        { trigger: "Amigos", speech: "Ele está passando mal há 2 dias. Vomitou muito e hoje ficou confuso." },
      ],
      hiddenInfo: [
        "Poliúria, polidipsia e perda de 12 kg nas últimas semanas — só se perguntarem (os amigos contam)",
        "Sem uso de álcool ou drogas recentes — só se perguntarem (os amigos confirmam)",
      ],
      actorBehavior: "Paciente confuso e sonolento, responde com dificuldade e respira de forma rápida e profunda. Os amigos (ator acompanhante) respondem a maior parte da anamnese, preocupados.",
    },
    instC: {
      diagnosis: "Cetoacidose diabética grave em provável diabetes mellitus tipo 1 de novo.",
      differentials: [
        "Estado hiperglicêmico hiperosmolar — sai: acidose com cetonemia intensa e glicemia < 600 mg/dL",
        "Cetoacidose alcoólica ou de jejum — glicemia normal ou pouco elevada",
        "Intoxicação exógena (salicilato, metanol) — acidose de ânion gap elevado; história e glicemia alta favorecem CAD",
        "Abdome agudo — dor abdominal é comum na CAD e melhora com o tratamento; reavaliar se persistir",
      ],
      context: "Jovem de 19 anos com quadro agudo de hiperglicemia, acidose metabólica e cetonemia, associado a desidratação, respiração de Kussmaul e confusão. Necessita tratamento emergencial com hidratação venosa, insulina regular EV e reposição de potássio conforme evolução.",
      justify: "Diagnóstico baseado na tríade de hiperglicemia, acidose metabólica e cetonemia. pH 7.15 e bicarbonato 9 definem CAD grave, exigindo internação e monitoramento intensivo.",
      expectedAnamnesis: [
        "Investigar poliúria, polidipsia e perda de peso nas últimas semanas",
        "Caracterizar vômitos, dor abdominal e alteração do nível de consciência",
        "Pesquisar fator desencadeante (infecção, omissão de insulina, uso de álcool ou drogas)",
        "Perguntar sobre diagnóstico prévio de diabetes e uso de medicamentos",
        "Obter a história com os acompanhantes quando o paciente está confuso",
      ],
      expectedPhysical: [
        "Identificar Kussmaul e hálito cetônico",
        "Avaliar desidratação e comprometimento mental",
      ],
      expectedExams: [
        { exam: "Glicemia capilar e sérica", justify: "Confirmar hiperglicemia", expected: "485 mg/dL" },
        {
          exam: "Gasometria arterial com ânion gap",
          justify: "Confirmar acidose metabólica",
          expected: "pH 7,15 e bicarbonato 9",
        },
        { exam: "Cetonemia/cetonúria", justify: "Confirmar cetose", expected: "Fortemente positivas" },
        {
          exam: "Sódio, potássio, ureia e creatinina",
          justify: "Guiar hidratação e reposição de potássio",
          expected: "Na 128 (corrigir pela glicemia), K 5,2 e IRA pré-renal",
        },
        {
          exam: "Hemograma, urina, ECG e pesquisa de fator desencadeante",
          justify: "Infecção e repercussões do potássio",
          expected: "Conforme protocolo",
        },
      ],
      expectedConduct: [
        "Emergência: monitorização, acesso venoso e internação em UTI/semi-intensiva",
        "Hidratação com SF 0,9% 15–20 mL/kg na 1ª hora; depois conforme sódio corrigido",
        "Potássio antes da insulina: se K < 3,3, repor e adiar insulina; se 3,3–5,2, repor junto (20–30 mEq/L de soro); se > 5,2, não repor e dosar a cada 2 h",
        "Insulina regular EV 0,1 UI/kg/h após o início da hidratação (K ≥ 3,3)",
        "Soro glicosado quando a glicemia chegar a 200–250 mg/dL; manter insulina até resolver a acidose",
        "Transição para insulina subcutânea basal-bolus e educação em diabetes tipo 1",
      ],
      expectedCommunication: [
        "Apresentar-se pelo nome e função",
        "Usar linguagem acessível, sem jargão",
        "Explicar o diagnóstico e o plano de forma clara",
        "Verificar o entendimento e esclarecer dúvidas",
      ],
      criticalErrors: [
        "Não reconhecer CAD como emergência",
        "Insulina sem hidratação prévia adequada",
        "Repor potássio com K > 5.0 mEq/L",
        "Não monitorar eletrólitos e glicemia horária",
      ],
    },
    instD: {
      title: "Cetoacidose Diabética (CAD)",
      sections: [
        {
          h: "BLOCO 1 — AVALIAÇÃO",
          items: [
            {
              item: "Reconheceu CAD como emergência médica",
              score: 1,
              ref: "SBD. Diretriz: Cetoacidose Diabética, 2024",
            },
            {
              item: "Identificou Kussmaul e hálito cetônico",
              score: 1,
              ref: "SBD. Diretriz: Cetoacidose Diabética, 2024",
            },
            {
              item: "Avaliou desidratação e comprometimento mental",
              score: 0.5,
              ref: "SBD. Diretriz: Cetoacidose Diabética, 2024",
            },
          ],
        },
        {
          h: "BLOCO 2 — EXAMES URGENTES",
          items: [
            {
              item: "Solicitou glicemia, gasometria e eletrólitos imediatamente",
              score: 1,
              ref: "SBD. Diretriz: Cetoacidose Diabética, 2024",
            },
            {
              item: "Diagnosticou CAD pela tríade clássica",
              score: 1,
              ref: "SBD. Diretriz: Cetoacidose Diabética, 2024",
            },
          ],
        },
        {
          h: "BLOCO 3 — CONDUTA",
          items: [
            {
              item: "Iniciou hidratação com SF 0.9% na 1ª hora",
              score: 1,
              ref: "SBD. Diretriz: Cetoacidose Diabética, 2024",
            },
            {
              item: "Prescreveu insulina regular EV 0.1 UI/kg/h",
              score: 1,
              ref: "SBD. Diretriz: Cetoacidose Diabética, 2024",
            },
            {
              item: "Planejou reposição de potássio conforme valores",
              score: 1,
              ref: "SBD. Diretriz: Cetoacidose Diabética, 2024",
            },
            {
              item: "Indicou internação em UTI ou semi-intensiva",
              score: 0.5,
              ref: "SBD. Diretriz: Cetoacidose Diabética, 2024",
            },
          ],
        },
      ],
      study: [
        {
          h: "Definição",
          body: "<p>Emergência metabólica caracterizada por hiperglicemia, acidose metabólica e cetonemia.</p>",
        },
        {
          h: "Diagnóstico",
          body: "<ul><li>Glicemia > 250 mg/dL</li><li>pH < 7.3 e HCO3 < 18</li><li>Cetonas positivas</li></ul>",
        },
        {
          h: "Tratamento",
          body: "<p>Hidratação com SF 0.9%, insulina regular EV 0.1 UI/kg/h após a primeira hora, e reposição de potássio se K entre 3.3 e 5.3. Adicionar glicose quando glicemia cair para 200-250 mg/dL.</p>",
        },
      ],
    },
  },

  // ── ESTAÇÃO 20: Check-up com açúcar, pressão e colesterol alterados ─
  {
    id: 20,
    title: "Check-up com açúcar, pressão e colesterol alterados",
    sub: "Ambulatório de clínica médica de uma UBS",
    tema: "Endocrinologia",
    topic: "metabolica",
    level: "fácil",
    cardAccent: "#2a9d8f",
    instA: {
      scenario: "Você está no ambulatório de clínica médica de uma UBS.",
      patient: "R.S.L., 48 anos, sexo masculino, gerente de vendas.",
      complaint: "Paciente vem para check-up. Traz exames recentes com alterações. Refere que 'está tudo alto: açúcar, pressão, colesterol'.",
      tasks: [
        "Realizar anamnese completa",
        "Investigar fatores de risco cardiovascular",
        "Solicitar exame físico pertinente",
        "Interpretar exames e identificar síndrome metabólica",
        "Estratificar risco cardiovascular",
        "Definir conduta terapêutica multifatorial",
      ],
    },
    instB: {
      vitals: { PA: "152/96 mmHg", FC: "82 bpm", Peso: "102 kg", Altura: "1.75 m", IMC: "33.3 kg/m²", CA: "112 cm" },
      physicalGeneral: "Obesidade centrípeta com acantose nigricans cervical e axilas.",
      physicalSeg: [
        "Gordura abdominal central acentuada.",
        "Acantose nigricans em região cervical e axilas.",
      ],
      labs: [
        { test: "Glicemia jejum", val: "118 mg/dL", ref: "< 100", alt: true },
        { test: "HbA1c", val: "6.2%", ref: "< 5.7%", alt: true },
        { test: "HOMA-IR", val: "8.2", ref: "< 2.5", alt: true },
        { test: "Colesterol total", val: "252 mg/dL", ref: "< 200", alt: true },
        { test: "LDL", val: "158 mg/dL", ref: "< 130", alt: true },
        { test: "HDL", val: "32 mg/dL", ref: "> 40", alt: true },
        { test: "Triglicerídeos", val: "325 mg/dL", ref: "< 150", alt: true },
        { test: "Ácido úrico", val: "8.5 mg/dL", ref: "3.5-7.2", alt: true },
        { test: "TGO", val: "58 U/L", ref: "< 40", alt: true },
        { test: "TGP", val: "72 U/L", ref: "< 40", alt: true },
      ],
      image: null,
      note: "USG de abdome mostra esteatose hepática grau II. Paciente preenche critérios de síndrome metabólica com cinco componentes.",
      patientProfile: "Gerente de vendas de 48 anos, rotina estressante, sedentário, almoça fast-food e bebe 2–3 latas de cerveja por dia. Pai infartou aos 55 anos; mãe diabética.",
      script: [
        { trigger: "Queixa principal", speech: "Doutor, vim fazer check-up, exames alterados." },
        {
          trigger: "Hábitos",
          speech: "Trabalho muito, estressante. Sem tempo para exercício, sedentário. Almoço fora, fast-food. Cerveja todo dia, 2-3 latas.",
        },
        { trigger: "História familiar", speech: "Pai infarto aos 55 anos. Mãe diabetes." },
        { trigger: "Pergunta", speech: "Estou com diabetes? Qual meu risco de infarto?" },
      ],
      hiddenInfo: [
        "Bebe cerveja todos os dias — só se perguntarem sobre álcool",
        "Pai infartou aos 55 anos — só se perguntarem sobre a família",
      ],
      actorBehavior: "Apressado, quer resolver rápido e voltar ao trabalho. Minimiza os hábitos no início. Pergunta se está com diabetes e qual o risco de infarto.",
    },
    instC: {
      diagnosis: "Síndrome metabólica associada a pré-diabetes, dislipidemia aterogênica e hipertensão arterial.",
      differentials: [
        "Diabetes mellitus tipo 2 — sai por enquanto: HbA1c 6,2% e glicemia 118 indicam pré-diabetes",
        "Hipotireoidismo como causa da dislipidemia — dosar TSH",
        "Doença hepática gordurosa associada — transaminases elevadas; investigar com USG",
      ],
      context: "Homem de 48 anos com obesidade central, CA 112 cm, HAS, pré-diabetes, HOMA-IR elevado, HDL baixo e triglicerídeos altos. Preenche todos os critérios de síndrome metabólica e apresenta risco cardiovascular elevado.",
      justify: "A combinação de obesidade abdominal, pressão alta, glicemia alterada, triglicerídeos altos e HDL baixo confirma síndrome metabólica e exige conduta multifatorial com mudança de estilo de vida e tratamento medicamentoso.",
      expectedAnamnesis: ["Investigar hábitos de vida e história familiar cardiovascular"],
      expectedPhysical: ["Medir circunferência abdominal", "Calcular IMC e reconheceu obesidade central"],
      expectedExams: [
        {
          exam: "Circunferência abdominal, IMC e PA",
          justify: "Critérios de síndrome metabólica",
          expected: "CA 112 cm e HAS",
        },
        { exam: "Glicemia de jejum e HbA1c", justify: "Classificar alteração glicêmica", expected: "Pré-diabetes" },
        { exam: "Perfil lipídico", justify: "Dislipidemia aterogênica", expected: "HDL 32 e triglicerídeos 325" },
        { exam: "Transaminases e USG de abdome", justify: "Esteatose hepática", expected: "TGO/TGP elevadas" },
        {
          exam: "Creatinina, albuminúria e ácido úrico",
          justify: "Lesão de órgão-alvo e risco",
          expected: "Ácido úrico elevado",
        },
        { exam: "Estratificação do risco cardiovascular", justify: "Definir metas", expected: "Risco alto" },
      ],
      expectedConduct: [
        "Mudança de estilo de vida como pilar: perda de 7–10% do peso, 150 min/semana de exercício, dieta, reduzir álcool",
        "Metformina pelo pré-diabetes com obesidade e alto risco",
        "Estatina conforme risco cardiovascular",
        "IECA ou BRA para hipertensão",
        "Retorno em 3 meses para reavaliar metas",
      ],
      expectedCommunication: [
        "Apresentar-se pelo nome e função",
        "Usar linguagem acessível, sem jargão",
        "Explicar o diagnóstico e o plano de forma clara",
        "Verificar o entendimento e esclarecer dúvidas",
      ],
      criticalErrors: [
        "Não medir circunferência abdominal",
        "Não diagnosticar síndrome metabólica",
        "Não prescrever estatina em alto risco",
        "Não orientar mudança de estilo de vida",
      ],
    },
    instD: {
      title: "Síndrome Metabólica",
      sections: [
        {
          h: "BLOCO 1 — AVALIAÇÃO",
          items: [
            {
              item: "Investigou hábitos de vida e história familiar cardiovascular",
              score: 0.5,
              ref: "SBC. Diretriz Brasileira de Dislipidemias, 2017 (atualização 2025)",
            },
            {
              item: "Mediu circunferência abdominal",
              score: 0.5,
              ref: "SBC. Diretriz Brasileira de Dislipidemias, 2017 (atualização 2025)",
            },
            {
              item: "Calculou IMC e reconheceu obesidade central",
              score: 0.5,
              ref: "SBC. Diretriz Brasileira de Dislipidemias, 2017 (atualização 2025)",
            },
          ],
        },
        {
          h: "BLOCO 2 — DIAGNÓSTICO",
          items: [
            {
              item: "Diagnosticou síndrome metabólica pelos critérios ATP III",
              score: 1,
              ref: "SBC. Diretriz Brasileira de Dislipidemias, 2017 (atualização 2025)",
            },
            {
              item: "Identificou pré-diabetes e risco cardiovascular alto",
              score: 1,
              ref: "SBC. Diretriz Brasileira de Dislipidemias, 2017 (atualização 2025)",
            },
          ],
        },
        {
          h: "BLOCO 3 — CONDUTA",
          items: [
            {
              item: "Orientou mudança de estilo de vida como pilar",
              score: 1,
              ref: "SBC. Diretriz Brasileira de Dislipidemias, 2017 (atualização 2025)",
            },
            {
              item: "Prescreveu metformina e estatina",
              score: 1,
              ref: "SBC. Diretriz Brasileira de Dislipidemias, 2017 (atualização 2025)",
            },
            {
              item: "Prescreveu IECA/BRA para HAS e nefroproteção",
              score: 1,
              ref: "SBC. Diretriz Brasileira de Dislipidemias, 2017 (atualização 2025)",
            },
          ],
        },
      ],
      study: [
        {
          h: "Definição",
          body: "<p>Conjunto de alterações metabolizadas associadas ao aumento do risco de diabetes tipo 2 e doença cardiovascular.</p>",
        },
        {
          h: "Critérios ATP III",
          body: "<ul><li>CA ≥ 102 cm em homens</li><li>TG ≥ 150 mg/dL</li><li>HDL < 40 mg/dL em homens</li><li>PA ≥ 130/85 mmHg</li><li>Glicemia jejum ≥ 100 mg/dL</li></ul>",
        },
        {
          h: "Tratamento",
          body: "<p>Perda de 7-10% do peso, exercício regular, dieta hipocalórica, metformina, estatina de alta potência e IECA/BRA.</p>",
        },
      ],
    },
  },

  // ── ESTAÇÃO 21: Idosa com episódios de confusão e sudorese antes das refeições ─
  {
    id: 21,
    title: "Idosa com episódios de confusão e sudorese antes das refeições",
    sub: "Ambulatório de geriatria de uma UBS",
    tema: "Endocrinologia",
    topic: "diabetes",
    level: "moderado",
    cardAccent: "#457b9d",
    instA: {
      scenario: "Você está no ambulatório de geriatria de uma UBS.",
      patient: "M.J.S., 78 anos, sexo feminino, aposentada.",
      complaint: "Filha traz paciente referindo episódios recorrentes de confusão mental, sudorese e tremores, especialmente antes das refeições. Paciente tem DM2 há 15 anos, em uso de glibenclamida 10 mg 2x/dia.",
      tasks: [
        "Realizar anamnese direcionada a hipoglicemias",
        "Avaliar tratamento atual do diabetes",
        "Investigar fatores de risco para hipoglicemia",
        "Solicitar exames pertinentes",
        "Ajustar tratamento para prevenir hipoglicemias",
        "Orientar paciente e familiar",
      ],
    },
    instB: {
      vitals: { PA: "135/80 mmHg", FC: "72 bpm", Peso: "52 kg", Altura: "1.58 m", IMC: "20.8 kg/m²" },
      physicalGeneral: "Idosa lúcida no momento, sem alterações significativas no exame físico.",
      physicalSeg: ["Paciente frágil com IMC baixo e sem sinais de infecção ativa."],
      labs: [
        { test: "HbA1c", val: "6.8%", ref: "< 7.0% idoso", alt: false },
        { test: "Glicemia jejum", val: "95 mg/dL", ref: "70-100", alt: false },
        { test: "Creatinina", val: "1.4 mg/dL", ref: "0.6-1.2", alt: true },
        { test: "TFG", val: "42 mL/min", ref: "> 60", alt: true },
      ],
      image: null,
      note: "Diário glicêmico domiciliar mostra valores de 55-70 mg/dL na madrugada e pré-refeições, compatível com hipoglicemias recorrentes em idosa com DRC e sulfonilureia.",
      patientProfile: "Aposentada de 78 anos, diabética há 15 anos, em uso de glibenclamida 10 mg 2x/dia. Doença renal crônica e hipertensão. Magra e frágil. Mora com a filha, que a acompanha.",
      script: [
        {
          trigger: "Relato da filha",
          speech: "Ela fica confusa antes das refeições, suaada e tremendo. Isso acontece várias vezes.",
        },
        { trigger: "Uso de medicação", speech: "Ela toma glibenclamida 10 mg duas vezes ao dia." },
        {
          trigger: "Valores glicêmicos",
          speech: "Os exames mostram HbA1c 6.8, mas ela fica muito baixa de madrugada.",
        },
        { trigger: "Função renal", speech: "Ela tem problemas nos rins e toma remédio para pressão." },
      ],
      hiddenInfo: [
        "Episódios acontecem antes das refeições e de madrugada — a filha conta se perguntarem",
        "Come pouco e às vezes pula refeições — só se perguntarem",
      ],
      actorBehavior: "A filha (acompanhante) responde quase tudo, preocupada e cansada. A paciente fala pouco e concorda com a filha.",
    },
    instC: {
      diagnosis: "Hipoglicemias recorrentes iatrogênicas por sulfonilureia em idosa frágil com DRC.",
      differentials: [
        "Acidente vascular cerebral ou ataque isquêmico transitório — confusão em idosa; episódios ligados ao jejum e à sulfonilureia apontam hipoglicemia",
        "Demência ou delirium por outra causa (infecção, medicamentos) — episódios intermitentes e com sintomas adrenérgicos",
        "Insulinoma — raro; a sulfonilureia explica o quadro",
        "Insuficiência adrenal — hipoglicemia, mas sem outros sinais",
      ],
      context: "Idosa de 78 anos com DM2, terapia com glibenclamida e TFG 42 mL/min, relatando confusão, tremores e sudorese antes das refeições. HbA1c 6.8% mostra controle excessivo para a faixa etária.",
      justify: "Sulfonilureias são de risco em idosos com DRC. O objetivo é reduzir medicação, ajustar metas glicêmicas e priorizar segurança, evitando hipoglicemia grave.",
      expectedAnamnesis: [
        "Caracterizar os episódios: horário (antes das refeições, madrugada), sintomas adrenérgicos e neuroglicopênicos",
        "Revisar medicamentos, doses e horários (glibenclamida 10 mg 2x/dia)",
        "Investigar alimentação, refeições puladas e perda de peso",
        "Perguntar sobre doença renal e outras comorbidades",
        "Avaliar quem ajuda nos cuidados e no uso dos remédios",
      ],
      expectedPhysical: ["Examinar: Paciente frágil com imc baixo e sem sinais de infecção ativa."],
      expectedExams: [
        {
          exam: "Glicemia capilar durante os sintomas",
          justify: "Confirmar hipoglicemia (tríade de Whipple)",
          expected: "< 70 mg/dL nos episódios",
        },
        { exam: "HbA1c", justify: "Avaliar controle excessivo", expected: "6,8% (muito baixa para idosa frágil)" },
        {
          exam: "Creatinina e TFG",
          justify: "Função renal reduz a eliminação da sulfonilureia",
          expected: "TFG 42 mL/min",
        },
      ],
      expectedConduct: [
        "Suspender a glibenclamida",
        "Ajustar o tratamento: metformina com dose ajustada à TFG ou iDPP4 (ex.: linagliptina, sem ajuste renal)",
        "Meta de HbA1c individualizada (7,5–8,0% em idosa frágil)",
        "Ensinar à família a reconhecer e tratar hipoglicemia (15 g de carboidrato e repetir glicemia em 15 min)",
        "Revisar alimentação, horários e retorno precoce",
      ],
      expectedCommunication: [
        "Apresentar-se pelo nome e função",
        "Usar linguagem acessível, sem jargão",
        "Explicar o diagnóstico e o plano de forma clara",
        "Verificar o entendimento e esclarecer dúvidas",
      ],
      criticalErrors: [
        "Manter sulfonilureia em idosa com DRC",
        "Não avaliar função renal",
        "Buscar controle glicêmico rígido demais em idosa frágil",
        "Não orientar a família sobre sinais de hipoglicemia",
      ],
    },
    instD: {
      title: "Hipoglicemia em Idosos",
      sections: [
        {
          h: "BLOCO 1 — DIAGNÓSTICO",
          items: [
            {
              item: "Identificou hipoglicemia recorrente em idosa",
              score: 1,
              ref: "SBD. Diretriz: Diabetes no Idoso, 2024",
            },
            {
              item: "Reconheceu sulfonilureia como causa provável",
              score: 1,
              ref: "SBD. Diretriz: Diabetes no Idoso, 2024",
            },
            { item: "Avaliou função renal e status frágil", score: 1, ref: "SBD. Diretriz: Diabetes no Idoso, 2024" },
          ],
        },
        {
          h: "BLOCO 2 — CONDUTA",
          items: [
            { item: "Suspendeu sulfonilureia", score: 1.5, ref: "SBD. Diretriz: Diabetes no Idoso, 2024" },
            {
              item: "Propôs medicação segura como metformina ou iDPP4",
              score: 1,
              ref: "SBD. Diretriz: Diabetes no Idoso, 2024",
            },
            {
              item: "Estabeleceu meta glicêmica individualizada 7-8%",
              score: 1,
              ref: "SBD. Diretriz: Diabetes no Idoso, 2024",
            },
          ],
        },
      ],
      study: [
        {
          h: "Definição",
          body: "<p>Glicemia < 70 mg/dL em idoso, com maior risco de consequências graves e queda de performance funcional.</p>",
        },
        {
          h: "Fatores de risco",
          body: "<ul><li>Sulfonilureias</li><li>Insulina</li><li>DRC</li><li>Desnutrição</li><li>Idade avançada</li></ul>",
        },
        {
          h: "Tratamento",
          body: "<p>Suspender sulfonilureia, usar metformina ajustada ou iDPP4, alvos glicêmicos mais brandos (HbA1c 7-8%) e educar família sobre hipoglicemia.</p>",
        },
      ],
    },
  },

  // ── ESTAÇÃO 22: Atleta sem menstruar há 10 meses ─
  {
    id: 22,
    title: "Atleta sem menstruar há 10 meses",
    sub: "Ambulatório de ginecologia esportiva",
    tema: "Endocrinologia",
    topic: "reprodutivo",
    level: "moderado",
    cardAccent: "#8e9aaf",
    instA: {
      scenario: "Você está no ambulatório de ginecologia esportiva.",
      patient: "C.M.R., 24 anos, sexo feminino, corredora profissional.",
      complaint: "Amenorreia há 10 meses. Treina 6x/semana (corrida longa distância). Refere que 'menstruação parou depois que intensificou treinos'.",
      tasks: [
        "Anamnese direcionada à amenorreia",
        "Investigar tríade da atleta",
        "Avaliar estado nutricional",
        "Solicitar exames complementares",
        "Diagnosticar amenorreia hipotalâmica",
        "Orientar sobre riscos e tratamento",
      ],
    },
    instB: {
      vitals: { PA: "105/65 mmHg", FC: "48 bpm", Peso: "52 kg", Altura: "1.66 m", IMC: "18.9 kg/m²", "% Gordura": "12%" },
      physicalGeneral: "Paciente com bradicardia atlética e índice de massa corporal baixo para atleta de endurance.",
      physicalSeg: [
        "Porcentagem de gordura corporal 12% e sinais de baixa disponibilidade energética.",
        "Sem alterações físicas graves além de bradicardia e IMC baixo.",
      ],
      labs: [
        { test: "β-HCG", val: "< 2", ref: "< 5", alt: false },
        { test: "FSH", val: "2.8 mUI/mL", ref: "3-10", alt: true },
        { test: "LH", val: "1.5 mUI/mL", ref: "2-10", alt: true },
        { test: "Estradiol", val: "15 pg/mL", ref: "30-400", alt: true },
        { test: "Prolactina", val: "12 ng/mL", ref: "< 25", alt: false },
        { test: "TSH", val: "2.5 μUI/mL", ref: "0.4-4.0", alt: false },
        { test: "Densitometria óssea", val: "T-score -1.8 (osteopenia)", ref: ">-1.0", alt: true },
      ],
      image: null,
      note: "Tríade da atleta: baixa disponibilidade energética levando a amenorreia e osteopenia, sem causa orgânica aparente.",
      patientProfile: "Corredora profissional de 24 anos, treina 6 vezes por semana. Come pouco para manter o peso e se sente cansada. Menstruação parou após intensificar os treinos.",
      script: [
        { trigger: "História menstrual", speech: "Minha menstruação parou depois que intensifiquei os treinos." },
        { trigger: "Treino", speech: "Treino seis vezes por semana e corro longas distâncias." },
        { trigger: "Alimentação", speech: "Como pouco e me sinto cansada. Estou tentando manter o peso." },
        { trigger: "Exame ósseo", speech: "Disseram que minha densidade óssea está baixa." },
      ],
      hiddenInfo: [
        "Restringe a alimentação para manter o peso — só se perguntarem sobre a dieta",
        "Densitometria com massa óssea baixa — só se perguntarem",
      ],
      actorBehavior: "Resistente à ideia de reduzir os treinos, porque tem competições. Aceita melhor se entender o risco de fratura.",
    },
    instC: {
      diagnosis: "Amenorreia hipotalâmica funcional em atleta com baixa disponibilidade energética e osteopenia.",
      differentials: [
        "Gravidez — sempre excluir: beta-HCG negativo",
        "Síndrome dos ovários policísticos — LH/FSH baixos e sem hiperandrogenismo",
        "Hiperprolactinemia e hipotireoidismo — prolactina e TSH normais",
        "Transtorno alimentar (anorexia nervosa) — rastrear ativamente",
        "Insuficiência ovariana prematura — sai: FSH baixo (seria elevado)",
      ],
      context: "Atleta de 24 anos com amenorreia de 10 meses, IMC 18.9, % gordura 12%, FSH e LH baixos e estradiol reduzido. Densitometria confirma osteopenia. Excluir gravidez e outras causas, tratar com aumento de calorias e redução de treino.",
      justify: "A redução de GnRH por baixa energia e exercícios intensos determina hipogonadismo hipotalâmico. A conduta é reversão do déficit energético, não uso primário de anticoncepcionais.",
      expectedAnamnesis: ["Correlacionar amenorreia com exercícios e baixa ingestão energética"],
      expectedPhysical: [
        "Examinar: Porcentagem de gordura corporal 12% e sinais de baixa disponibilidade energética.",
        "Examinar: Sem alterações físicas graves além de bradicardia e imc baixo.",
      ],
      expectedExams: [
        { exam: "Beta-HCG", justify: "Excluir gravidez", expected: "Negativo" },
        { exam: "FSH, LH e estradiol", justify: "Hipogonadismo hipogonadotrófico", expected: "Baixos" },
        { exam: "Prolactina e TSH", justify: "Diferenciais", expected: "Normais" },
        {
          exam: "Densitometria óssea",
          justify: "Avaliar saúde óssea (tríade da atleta)",
          expected: "Massa óssea baixa para a idade (T-score −1,8)",
        },
      ],
      expectedConduct: [
        "Aumentar a ingestão calórica com nutricionista esportivo",
        "Reduzir o volume de treino (10–20%) até a menstruação voltar",
        "Cálcio e vitamina D adequados",
        "Rastrear transtorno alimentar e oferecer apoio psicológico",
        "Não usar anticoncepcional oral como tratamento principal (mascara o problema); estrogênio transdérmico só em casos selecionados",
      ],
      expectedCommunication: [
        "Explicar risco de osteopenia e fratura",
        "Apresentar-se pelo nome e função",
        "Usar linguagem acessível, sem jargão",
        "Verificar o entendimento e esclarecer dúvidas",
      ],
      criticalErrors: [
        "Prescrever ACO sem tratar a causa energética",
        "Não investigar densitometria óssea",
        "Não orientar aumento calórico e redução de treino",
      ],
    },
    instD: {
      title: "Tríade da Atleta",
      sections: [
        {
          h: "BLOCO 1 — AVALIAÇÃO",
          items: [
            {
              item: "Correlacionou amenorreia com exercícios e baixa ingestão energética",
              score: 1,
              ref: "Endocrine Society. Functional Hypothalamic Amenorrhea Guideline, 2017",
            },
            {
              item: "Afastou gravidez com β-HCG",
              score: 0.5,
              ref: "Endocrine Society. Functional Hypothalamic Amenorrhea Guideline, 2017",
            },
            {
              item: "Solicitou FSH, LH e estradiol",
              score: 1,
              ref: "Endocrine Society. Functional Hypothalamic Amenorrhea Guideline, 2017",
            },
          ],
        },
        {
          h: "BLOCO 2 — CONDUTA",
          items: [
            {
              item: "Diagnosticou tríade da atleta e amenorreia hipotalâmica",
              score: 1,
              ref: "Endocrine Society. Functional Hypothalamic Amenorrhea Guideline, 2017",
            },
            {
              item: "Orientou aumento de ingestão calórica e redução de treino",
              score: 2,
              ref: "Endocrine Society. Functional Hypothalamic Amenorrhea Guideline, 2017",
            },
            {
              item: "Explicou risco de osteopenia e fratura",
              score: 1,
              ref: "Endocrine Society. Functional Hypothalamic Amenorrhea Guideline, 2017",
            },
          ],
        },
      ],
      study: [
        {
          h: "Componentes",
          body: "<ul><li>Baixa disponibilidade energética</li><li>Disfunção menstrual</li><li>Baixa densidade mineral óssea</li></ul>",
        },
        {
          h: "Fisiopatologia",
          body: "<p>Déficit energético leva a redução de GnRH, LH e FSH, resultando em estradiol baixo e amenorreia, com perda óssea subsequente.</p>",
        },
        {
          h: "Tratamento",
          body: "<p>Aumentar ingestão calórica, reduzir volume de treino em 10-20% e monitorar retorno menstrual. ACO pode mascarar o problema, não resolver a causa.</p>",
        },
      ],
    },
  },

  // ── ESTAÇÃO 23: Cansaço, perda de peso e pele escurecida ─
  {
    id: 23,
    title: "Cansaço, perda de peso e pele escurecida",
    sub: "Ambulatório de endocrinologia de um hospital secundário",
    tema: "Endocrinologia",
    topic: "adrenal",
    level: "moderado",
    cardAccent: "#d62828",
    instA: {
      scenario: "Você está no ambulatório de endocrinologia de um hospital secundário.",
      patient: "A.L.M., 35 anos, sexo feminino, nutricionista.",
      complaint: "Fadiga progressiva há 6 meses, perda de peso 8 kg, 'bronzeamento' sem exposição solar, tonturas ao levantar.",
      tasks: [
        "Anamnese direcionada",
        "Reconhecer sinais de insuficiência adrenal",
        "Exame físico incluindo PA e hiperpigmentação",
        "Exames complementares",
        "Diagnosticar Doença de Addison",
        "Iniciar reposição hormonal",
      ],
    },
    instB: {
      vitals: { "PA deitada": "95/60 mmHg", "PA em pé": "75/50 mmHg", FC: "92 bpm", Peso: "54 kg" },
      physicalGeneral: "Hiperpigmentação em palmas, pregas palmares, mucosa oral e região genital com sinais de vasculinização cutânea.",
      physicalSeg: [
        "Hipotensão ortostática com queda de PA ao ficar em pé.",
        "Perda de peso importante e sinais de bronzage sem exposição solar.",
      ],
      labs: [
        { test: "Sódio", val: "128 mEq/L", ref: "136-145", alt: true },
        { test: "Potássio", val: "5.8 mEq/L", ref: "3.5-5.0", alt: true },
        { test: "Cortisol 8h", val: "2.5 μg/dL", ref: "6-23", alt: true },
        { test: "ACTH", val: "485 pg/mL", ref: "10-60", alt: true },
        { test: "Glicemia", val: "62 mg/dL", ref: "70-100", alt: true },
      ],
      image: null,
      note: "Teste ACTH com cortisol não eleva confirma insuficiência adrenal primária.",
      patientProfile: "Nutricionista de 35 anos, sem doenças conhecidas. Há 6 meses cansada, perdeu 8 kg sem querer. Notou a pele mais escura sem tomar sol. Tonturas ao levantar. Tem vontade de comer sal.",
      script: [
        { trigger: "Queixa principal", speech: "Estou muito cansada, perdi peso e fico tonta quando levanto." },
        { trigger: "Pigmentação", speech: "Minha pele ficou mais escura nas mãos e na boca, mas eu não tomo sol." },
        { trigger: "Sintomas", speech: "Tenho muita sede, mas mesmo assim me sinto fraca e às vezes tremo." },
      ],
      hiddenInfo: [
        "Escurecimento das gengivas e das dobras das mãos — só se perguntarem sobre a pele",
        "Vontade de comer sal — só se perguntarem sobre apetite",
        "Tontura ao levantar — só se perguntarem",
      ],
      actorBehavior: "Fraca e cansada, levanta devagar. Como é nutricionista, estranha ter perdido peso sem mudar a dieta.",
    },
    instC: {
      diagnosis: "Insuficiência adrenal primária (Doença de Addison).",
      differentials: [
        "Insuficiência adrenal secundária — sai: hiperpigmentação e ACTH muito alto indicam causa primária",
        "Hipotireoidismo — fadiga, mas sem hiperpigmentação e com outros achados",
        "Doença celíaca ou neoplasia — perda de peso, mas não explica hiponatremia, hipercalemia e cortisol baixo",
        "Hemocromatose — hiperpigmentação, sem os distúrbios eletrolíticos",
      ],
      context: "Mulher de 35 anos com fadiga, perda de peso, hiperpigmentação e hipotensão ortostática. Exames mostram hiponatremia, hipercalemia, cortisol baixo e ACTH muito alto. Diagnóstico confirmado por teste ACTH sem elevação do cortisol.",
      justify: "Cortisol baixo com ACTH elevado caracteriza Addison primário. O tratamento é reposição de glicocorticoide e mineralocorticoide para normalizar eletrólitos e hemodinâmica.",
      expectedAnamnesis: [
        "Caracterizar fadiga e perda de peso (tempo, intensidade)",
        "Investigar escurecimento da pele e das mucosas sem exposição ao sol",
        "Perguntar sobre tontura ao levantar e desejo de comer sal",
        "Pesquisar náuseas, dor abdominal e sintomas de crise adrenal",
        "Investigar doenças autoimunes pessoais e familiares e uso de corticoide",
      ],
      expectedPhysical: ["Identificar hiperpigmentação e hipotensão ortostática"],
      expectedExams: [
        {
          exam: "Cortisol às 8 h e ACTH",
          justify: "Confirmar insuficiência adrenal primária",
          expected: "Cortisol 2,5 e ACTH 485 pg/mL",
        },
        {
          exam: "Sódio, potássio e glicemia",
          justify: "Distúrbios típicos",
          expected: "Na 128, K 5,8 e glicemia 62",
        },
        {
          exam: "Teste de estímulo com ACTH (cortrosina)",
          justify: "Confirmação se cortisol duvidoso",
          expected: "Sem elevação do cortisol",
        },
        {
          exam: "Anticorpos anti-21-hidroxilase (e renina)",
          justify: "Causa autoimune e deficiência mineralocorticoide",
          expected: "Solicitar",
        },
      ],
      expectedConduct: [
        "Hidrocortisona 15–20 mg/dia, fracionada (maior dose pela manhã)",
        "Fludrocortisona 0,05–0,2 mg/dia",
        "Orientar dose de estresse: dobrar ou triplicar a dose oral em febre; hidrocortisona 100 mg EV/IM em vômitos ou crise",
        "Cartão ou pulseira de identificação e kit de emergência",
        "Investigar outras doenças autoimunes (tireoide, diabetes)",
      ],
      expectedCommunication: [
        "Apresentar-se pelo nome e função",
        "Usar linguagem acessível, sem jargão",
        "Explicar o diagnóstico e o plano de forma clara",
        "Verificar o entendimento e esclarecer dúvidas",
      ],
      criticalErrors: [
        "Não reconhecer hiperpigmentação como sinal de Addison",
        "Esquecer mineralocorticoide na insuficiência adrenal primária",
        "Não orientar stress dose em infecção ou cirurgia",
      ],
    },
    instD: {
      title: "Doença de Addison",
      sections: [
        {
          h: "BLOCO 1 — DIAGNÓSTICO",
          items: [
            {
              item: "Identificou hiperpigmentação e hipotensão ortostática",
              score: 1.5,
              ref: "Endocrine Society. Primary Adrenal Insufficiency Guideline, 2016",
            },
            {
              item: "Solicitou cortisol 8h e ACTH",
              score: 1,
              ref: "Endocrine Society. Primary Adrenal Insufficiency Guideline, 2016",
            },
            {
              item: "Reconheceu hiponatremia e hipercalemia características",
              score: 0.5,
              ref: "Endocrine Society. Primary Adrenal Insufficiency Guideline, 2016",
            },
          ],
        },
        {
          h: "BLOCO 2 — CONDUTA",
          items: [
            {
              item: "Prescreveu hidrocortisona 15-20 mg/dia",
              score: 1.5,
              ref: "Endocrine Society. Primary Adrenal Insufficiency Guideline, 2016",
            },
            {
              item: "Prescreveu fludrocortisona 0.1 mg/dia",
              score: 1.5,
              ref: "Endocrine Society. Primary Adrenal Insufficiency Guideline, 2016",
            },
            {
              item: "Orientou stress dose em intercorrências",
              score: 1,
              ref: "Endocrine Society. Primary Adrenal Insufficiency Guideline, 2016",
            },
          ],
        },
      ],
      study: [
        {
          h: "Definição",
          body: "<p>Insuficiência adrenal primária causada por destruição ou disfunção da córtex adrenal, com produção insuficiente de cortisol e aldosterona.</p>",
        },
        {
          h: "Diagnóstico",
          body: "<ul><li>Cortisol 8h baixo + ACTH alto</li><li>Hiponatremia, hipercalemia e hipoglicemia</li><li>Teste ACTH: cortisol não se eleva</li></ul>",
        },
        {
          h: "Tratamento",
          body: "<p>Hidrocortisona 15-20 mg/dia e fludrocortisona 0.05-0.2 mg/dia. Stress dose 100 mg IV 8/8h em intercorrências.</p>",
        },
      ],
    },
  },

  // ── ESTAÇÃO 24: Pressão alta que não controla com 4 remédios ─
  {
    id: 24,
    title: "Pressão alta que não controla com 4 remédios",
    sub: "Ambulatório de endocrinologia",
    tema: "Endocrinologia",
    topic: "adrenal",
    level: "difícil",
    cardAccent: "#264653",
    instA: {
      scenario: "Você está no ambulatório de endocrinologia, referenciado por hipertensão refratária.",
      patient: "F.S.R., 52 anos, sexo masculino, advogado.",
      complaint: "HAS há 8 anos, controlada com 4 anti-hipertensivos. Múltiplos episódios de hipocalemia (K 2.8-3.2), cãimbras musculares frequentes.",
      tasks: [
        "Anamnese direcionada à HAS refratária",
        "Investigar causas secundárias",
        "Exame físico",
        "Exames para hiperaldosteronismo",
        "Interpretar relação aldosterona/renina",
        "Definir conduta",
      ],
    },
    instB: {
      vitals: { PA: "168/102 mmHg", FC: "76 bpm", IMC: "26.5 kg/m²" },
      physicalGeneral: "Paciente com hipertensão refratária apesar de quatro anti-hipertensivos e sem sinais de insuficiência cardíaca significativa.",
      physicalSeg: ["Sem alterações significativas no exame físico além de hipertensão persistente."],
      labs: [
        { test: "Potássio", val: "2.9 mEq/L", ref: "3.5-5.0", alt: true },
        { test: "Sódio", val: "145 mEq/L", ref: "136-145", alt: false },
        { test: "Aldosterona", val: "28 ng/dL", ref: "< 15", alt: true },
        { test: "Renina", val: "0.8 ng/mL/h", ref: "0.5-4.0", alt: false },
        { test: "Relação Aldo/Renina", val: "35", ref: "< 20", alt: true },
      ],
      image: {
        title: "TC Adrenais",
        report: "Nódulo adrenal esquerdo de 1.8 cm, hipodenso e homogêneo, sugestivo de adenoma.",
      },
      note: "Hipocalemia recorrente com aldosterona alta, renina suprimida e relação Aldo/Renina de 35 confirma hiperaldosteronismo primário.",
      patientProfile: "Advogado de 52 anos, hipertenso há 8 anos, em uso de 4 anti-hipertensivos com boa adesão. Câimbras musculares frequentes e potássio baixo em exames anteriores.",
      script: [
        {
          trigger: "Queixa principal",
          speech: "Tenho pressão alta há 8 anos e mesmo com quatro remédios ainda continuo com hipertensão.",
        },
        { trigger: "Sintomas", speech: "Tenho câimbras musculares frequentes e já notei que o potássio fica baixo." },
        { trigger: "História", speech: "Já usei vários remédios e ainda assim a pressão não cai direito." },
      ],
      hiddenInfo: [
        "Exames anteriores com potássio baixo (2,8–3,2) — só se perguntarem",
        "Toma todos os remédios corretamente — só se perguntarem sobre adesão",
      ],
      actorBehavior: "Frustrado com a pressão que não controla. Objetivo e questionador; quer saber se existe uma causa e se tem cura.",
    },
    instC: {
      diagnosis: "Hiperaldosteronismo primário (Síndrome de Conn) por adenoma adrenal esquerdo.",
      differentials: [
        "Hipertensão resistente por má adesão ou pseudorresistência — confirmar adesão e MAPA",
        "Hiperplasia adrenal bilateral — trata-se com medicamento; o cateterismo de veias adrenais diferencia",
        "Hipocalemia por diurético — pode coexistir, mas renina suprimida com aldosterona alta indica hiperaldosteronismo",
        "Estenose de artéria renal — renina estaria alta",
        "Síndrome de Cushing e feocromocitoma — outras causas endócrinas de HAS secundária",
      ],
      context: "Homem de 52 anos com HAS refratária, hipocalemia persistente e relação Aldo/Renina > 20. TC revela adenoma adrenal esquerdo de 1.8 cm. Tratamento definitivo é adrenalectomia laparoscópica esquerda.",
      justify: "A produção autonôma de aldosterona com renina suprimida e adenoma à imagem define Conn. Cirurgia é a conduta de escolha em adenoma unilateral.",
      expectedAnamnesis: [
        "Caracterizar a hipertensão: tempo, medicamentos, doses e adesão",
        "Investigar câimbras, fraqueza e episódios de hipocalemia",
        "Perguntar sobre uso de diuréticos, anti-inflamatórios, alcaçuz e outras substâncias",
        "Pesquisar sintomas de outras causas secundárias (ronco/apneia, palpitações, cefaleia, sudorese)",
        "Investigar história familiar de hipertensão precoce ou AVC",
      ],
      expectedPhysical: [
        "Examinar: Sem alterações significativas no exame físico além de hipertensão persistente.",
      ],
      expectedExams: [
        { exam: "Potássio sérico", justify: "Hipocalemia sugere hiperaldosteronismo", expected: "2,9 mEq/L" },
        {
          exam: "Aldosterona e atividade de renina (relação aldosterona/renina)",
          justify: "Rastreio",
          expected: "Relação 35 (positiva)",
        },
        {
          exam: "Teste confirmatório (sobrecarga salina ou captopril)",
          justify: "Confirmar autonomia da aldosterona",
          expected: "Solicitar antes de indicar cirurgia",
        },
        { exam: "TC de adrenais", justify: "Localizar adenoma", expected: "Nódulo de 1,8 cm à esquerda" },
        {
          exam: "Cateterismo de veias adrenais",
          justify: "Confirmar lateralização antes da cirurgia (> 35 anos)",
          expected: "Solicitar se candidato à cirurgia",
        },
      ],
      expectedConduct: [
        "Repor potássio",
        "Espironolactona 25–100 mg/dia (ou eplerenona) para controle até a cirurgia",
        "Adrenalectomia laparoscópica unilateral esquerda após confirmar lateralização",
        "Seguimento da PA e do potássio após a cirurgia",
      ],
      expectedCommunication: [
        "Apresentar-se pelo nome e função",
        "Usar linguagem acessível, sem jargão",
        "Explicar o diagnóstico e o plano de forma clara",
        "Verificar o entendimento e esclarecer dúvidas",
      ],
      criticalErrors: [
        "Não investigar HAS refratária como causa secundária",
        "Não solicitar aldosterona/renina",
        "Tratar adenoma adrenal apenas com clínico quando cirurgia é curativa",
      ],
    },
    instD: {
      title: "Hiperaldosteronismo Primário (Conn)",
      sections: [
        {
          h: "BLOCO 1 — DIAGNÓSTICO",
          items: [
            {
              item: "Identificou HAS refratária com hipocalemia recorrente",
              score: 1,
              ref: "Endocrine Society. Primary Aldosteronism Guideline, 2016",
            },
            {
              item: "Solicitou aldosterona e renina",
              score: 1,
              ref: "Endocrine Society. Primary Aldosteronism Guideline, 2016",
            },
            {
              item: "Interpretou relação Aldo/Renina > 20",
              score: 1.5,
              ref: "Endocrine Society. Primary Aldosteronism Guideline, 2016",
            },
          ],
        },
        {
          h: "BLOCO 2 — IMAGEM",
          items: [
            {
              item: "Solicitou TC adrenais e identificou adenoma unilateral",
              score: 1,
              ref: "Endocrine Society. Primary Aldosteronism Guideline, 2016",
            },
          ],
        },
        {
          h: "BLOCO 3 — CONDUTA",
          items: [
            {
              item: "Indicou adrenalectomia laparoscópica esquerda em adenoma unilateral",
              score: 2,
              ref: "Endocrine Society. Primary Aldosteronism Guideline, 2016",
            },
            {
              item: "Orientou uso de espironolactona enquanto aguarda cirurgia",
              score: 1.5,
              ref: "Endocrine Society. Primary Aldosteronism Guideline, 2016",
            },
          ],
        },
      ],
      study: [
        {
          h: "Definição",
          body: "<p>Produção excessiva de aldosterona por adenoma ou hiperplasia adrenal, levando a hipertensão e hipocalemia.</p>",
        },
        {
          h: "Diagnóstico",
          body: "<ul><li>Aldosterona alta</li><li>Renina suprimida</li><li>Relação Aldo/Renina ≥ 20</li><li>TC adrenais para identificar adenoma</li></ul>",
        },
        {
          h: "Tratamento",
          body: "<p>Adrenalectomia em adenoma unilateral. Espironolactona ou eplerenona para controle clínico enquanto aguarda cirurgia.</p>",
        },
      ],
    },
  },

  // ── ESTAÇÃO 25: Homem jovem com comportamento estranho e isolamento ─
  {
    id: 25,
    title: "Homem jovem com comportamento estranho e isolamento",
    sub: "Pronto-Socorro / CAPS",
    tema: "Psiquiatria",
    topic: "psicose",
    level: "moderado",
    cardAccent: "#8e44ad",
    instA: {
      scenario: "Nível de atenção: secundária. Urgência psiquiátrica em pronto-socorro de hospital geral com suporte do CAPS. A unidade possui consultórios, sala de observação, enfermaria, acesso a exames laboratoriais e tomografia.",
      patient: "R.M.S., 23 anos, sexo masculino, solteiro, estudante universitário (trancou matrícula há 8 meses).",
      complaint: "Familiar relata que o paciente está 'falando com vozes' há cerca de 6 meses, saiu da faculdade, trancou-se no quarto, parou de tomar banho e acredita que vizinhos estão conspirando contra ele.",
      tasks: [
        "Realizar anamnese direcionada ao paciente e ao familiar",
        "Avaliar a presença e o tipo de sintomas psicóticos (positivos e negativos)",
        "Rastrear risco de suicídio e heteroagressividade",
        "Solicitar exame do estado mental pertinente",
        "Formular hipóteses diagnósticas e diagnósticos diferenciais",
        "Propor conduta imediata e plano terapêutico",
        "Orientar o familiar sobre o diagnóstico e próximos passos",
      ],
    },
    instB: {
      vitals: {
        PA: "118/76 mmHg",
        FC: "88 bpm",
        FR: "16 irpm",
        Tax: "36.6°C",
        Peso: "62 kg",
        Altura: "1.75 m",
        IMC: "20.2 kg/m²",
        SatO2: "98% AA",
      },
      physicalGeneral: "Higiene precária, odor corporal presente. Roupa inadequada para o clima (casaco em dia quente). Contato inicial difícil, desconfiança marcante. Sem sinais de trauma ou lesões cutâneas.",
      physicalSeg: [
        "NEUROLÓGICO: Pupilas isocóricas e fotorreagentes. Sem déficits focais. Sem rigidez de nuca. Marcha sem alterações.",
        "EXAME DO ESTADO MENTAL: aparência descuidada, hipomímica, postura tensa; psicomotricidade lentificada com inquietação; humor disfórico e afeto embotado; fala de tom baixo, latência aumentada, conteúdo desorganizado; pensamento com desorganização formal, delírio persecutório e ideias de referência; percepção com alucinações auditivas imperativas; orientado em tempo e espaço; memória preservada; insight ausente; juízo crítico prejudicado; risco: nega ideação suicida ativa e plano heteroagressivo.",
      ],
      labs: [
        { test: "Hemograma completo", val: "Normal", ref: "—", alt: false },
        { test: "Glicemia em jejum", val: "89 mg/dL", ref: "70–99", alt: false },
        { test: "TSH", val: "2.1 μUI/mL", ref: "0.4–4.0", alt: false },
        { test: "Creatinina", val: "0.9 mg/dL", ref: "0.7–1.2", alt: false },
        { test: "Sódio", val: "139 mEq/L", ref: "135–145", alt: false },
        { test: "VDRL", val: "Não reagente", ref: "—", alt: false },
        { test: "Anti-HIV", val: "Não reagente", ref: "—", alt: false },
        { test: "Urina I", val: "Sem alterações", ref: "—", alt: false },
        { test: "Toxicológico urinário", val: "Cannabis positivo", ref: "Negativo", alt: true },
      ],
      image: null,
      note: "Tomografia de crânio sem alterações agudas. Ventrículos laterais discretamente aumentados, achado inespecífico.",
      patientProfile: "Estudante universitário de 23 anos que trancou a faculdade há 8 meses. Isola-se no quarto, parou de tomar banho. Fuma maconha às vezes. Mora com a mãe, que o trouxe.",
      script: [
        {
          trigger: "Abertura espontânea",
          speech: "Eu não precisava vir aqui. Minha mãe me trouxe à força. Não tem nada de errado comigo.",
        },
        {
          trigger: "Quando perguntado sobre as vozes",
          speech: "Eu ouço pessoas falando sobre mim. Elas ficam me comentando o que eu faço. Às vezes duas vozes falam entre si sobre mim.",
        },
        {
          trigger: "Quando perguntado sobre os vizinhos",
          speech: "Eles colocaram câmeras no meu quarto. Eu vi os fios. Eles estão me monitorando para me prejudicar.",
        },
        {
          trigger: "Quando perguntado sobre a faculdade",
          speech: "Eu tranquei porque não consigo me concentrar. Fica difícil. E os colegas também fazem parte disso.",
        },
        {
          trigger: "Quando perguntado sobre banho e autocuidado",
          speech: "Não tenho vontade de nada. Fico no quarto.",
        },
        {
          trigger: "Quando perguntado sobre uso de drogas",
          speech: "Às vezes fumo maconha. Mas isso não tem nada a ver.",
        },
        { trigger: "Quando perguntado sobre suicídio", speech: "Não quero me matar. Só quero que me deixem em paz." },
        {
          trigger: "Quando perguntado sobre agressividade",
          speech: "Não vou machucar ninguém. Sou eu que estou sendo prejudicado.",
        },
      ],
      hiddenInfo: [
        "Uso de maconha — só admite se perguntarem diretamente",
        "Ouve duas vozes conversando sobre ele — só se perguntarem sobre as vozes",
        "Acha que os vizinhos colocaram câmeras no quarto — só se perguntarem",
      ],
      actorBehavior: "Desconfiado e retraído, pouco contato visual, respostas curtas, afeto embotado. Diz que não precisava vir. Não é agressivo, mas fica tenso se confrontado sobre as 'câmeras'.",
    },
    instC: {
      diagnosis: "Esquizofrenia — primeiro episódio psicótico (F20.0 / CID-11)",
      differentials: [
        "Transtorno psicótico induzido por cannabis — sintomas há 6 meses, com sintomas negativos e declínio, vão além do efeito da substância",
        "Transtorno esquizofreniforme — sai: duração > 6 meses fecha esquizofrenia",
        "Transtorno bipolar com sintomas psicóticos — sem episódios de humor claros",
        "Depressão com sintomas psicóticos — o humor não domina o quadro",
        "Causas orgânicas (encefalite, epilepsia, tumor, sífilis, HIV) — exames normais; considerar neuroimagem",
      ],
      context: "Jovem de 23 anos com quadro insidioso de 6 meses caracterizado por sintomas positivos (delírio persecutório, alucinações auditivas em 3ª pessoa comentadoras), sintomas negativos (alogia, abulia, embotamento afetivo, isolamento social) e declínio funcional significativo. Uso de cannabis presente, mas quadro não se explica apenas por substância dada a extensão temporal e tipo de sintomas.",
      justify: "Quadro compatível com esquizofrenia: ao menos 1 mês de sintomas psicóticos com delírios, alucinações e discurso desorganizado, acompanhados de declínio funcional e ausência de explicação exclusivamente por substância ou transtorno afetivo.",
      expectedAnamnesis: [
        "Investigar início, evolução e duração dos sintomas",
        "Identificar sintomas positivos (delírio e alucinações)",
        "Identificar sintomas negativos (abulia, alogia, embotamento)",
        "Investigar declínio funcional (trabalho, estudo, social)",
        "Avaliar uso de substâncias e diferença entre consumo e quadro psicótico",
        "Verificar risco de suicídio e heteroagressividade",
      ],
      expectedPhysical: ["Solicitar exame do estado mental completo"],
      expectedExams: [
        {
          exam: "Exame do estado mental completo",
          justify: "Caracterizar sintomas positivos e negativos",
          expected: "Delírio persecutório, alucinações auditivas, embotamento",
        },
        {
          exam: "Hemograma, glicemia, TSH, eletrólitos, função renal",
          justify: "Excluir causas orgânicas",
          expected: "Normais",
        },
        { exam: "VDRL e anti-HIV", justify: "Excluir neurossífilis e HIV", expected: "Não reagentes" },
        { exam: "Toxicológico urinário", justify: "Uso de substâncias", expected: "Cannabis positivo" },
        {
          exam: "Neuroimagem (TC ou RNM) no primeiro episódio",
          justify: "Excluir lesão estrutural",
          expected: "Solicitar",
        },
      ],
      expectedConduct: [
        "Antipsicótico de 1ª linha em dose baixa e titulação (ex.: risperidona 1–2 mg/dia, até 4–6 mg/dia)",
        "Avaliar risco de agressividade e suicídio; internação se risco ou recusa com prejuízo grave",
        "Orientar interrupção do uso de cannabis",
        "Encaminhar ao CAPS/psiquiatria e incluir a família no cuidado (psicoeducação)",
        "Monitorar efeitos metabólicos e extrapiramidais",
      ],
      expectedCommunication: [
        "Apresenta-se pelo nome e função ao iniciar a consulta",
        "Usar linguagem acessível, sem termos técnicos sem explicação",
        "Demonstrar empatia e escuta ativa (não interrompe, mantém contato visual)",
        "Informar o diagnóstico e orienta o familiar de forma clara",
      ],
      criticalErrors: [
        "Não avaliar risco de suicídio — omissão grave em consulta psiquiátrica",
        "Atribuir todo o quadro ao cannabis sem excluir psicose primária de longa duração",
        "Prescrever benzodiazepínico como monoterapia para psicose",
        "Não envolver o familiar na orientação sobre diagnóstico e cuidados",
        "Não referenciar ao CAPS ou especialista em psiquiatria",
      ],
    },
    instD: {
      title: "Esquizofrenia — Revisão Clínica Completa",
      sections: [
        {
          h: "BLOCO 1 — COMUNICAÇÃO E RELAÇÃO MÉDICO-PACIENTE",
          items: [
            {
              item: "Apresenta-se pelo nome e função ao iniciar a consulta",
              score: 0.5,
              ref: "ABP. Diretrizes de Esquizofrenia, 2022",
            },
            {
              item: "Usa linguagem acessível, sem termos técnicos sem explicação",
              score: 0.5,
              ref: "ABP. Diretrizes de Esquizofrenia, 2022",
            },
            {
              item: "Demonstra empatia e escuta ativa (não interrompe, mantém contato visual)",
              score: 0.5,
              ref: "ABP. Diretrizes de Esquizofrenia, 2022",
            },
            {
              item: "Informa o diagnóstico e orienta o familiar de forma clara",
              score: 0.5,
              ref: "ABP. Diretrizes de Esquizofrenia, 2022",
            },
          ],
        },
        {
          h: "BLOCO 2 — ANAMNESE",
          items: [
            {
              item: "Investiga início, evolução e duração dos sintomas",
              score: 0.5,
              ref: "ABP. Diretrizes de Esquizofrenia, 2022",
            },
            {
              item: "Identifica sintomas positivos (delírio e alucinações)",
              score: 0.5,
              ref: "ABP. Diretrizes de Esquizofrenia, 2022",
            },
            {
              item: "Identifica sintomas negativos (abulia, alogia, embotamento)",
              score: 0.5,
              ref: "ABP. Diretrizes de Esquizofrenia, 2022",
            },
            {
              item: "Investiga declínio funcional (trabalho, estudo, social)",
              score: 0.5,
              ref: "ABP. Diretrizes de Esquizofrenia, 2022",
            },
            {
              item: "Avalia uso de substâncias e diferença entre consumo e quadro psicótico",
              score: 0.5,
              ref: "ABP. Diretrizes de Esquizofrenia, 2022",
            },
            {
              item: "Verifica risco de suicídio e heteroagressividade",
              score: 0.5,
              ref: "ABP. Diretrizes de Esquizofrenia, 2022",
            },
          ],
        },
        {
          h: "BLOCO 3 — INVESTIGAÇÃO DIAGNÓSTICA",
          items: [
            {
              item: "Solicita exame do estado mental completo",
              score: 0.5,
              ref: "ABP. Diretrizes de Esquizofrenia, 2022",
            },
            {
              item: "Solicita exames para excluir causas orgânicas (labs + neuroimagem)",
              score: 0.5,
              ref: "ABP. Diretrizes de Esquizofrenia, 2022",
            },
            {
              item: "Interpreta o toxicológico e considera cannabis como fator agravante, não causa exclusiva",
              score: 0.5,
              ref: "ABP. Diretrizes de Esquizofrenia, 2022",
            },
          ],
        },
        {
          h: "BLOCO 4 — RACIOCÍNIO CLÍNICO",
          items: [
            {
              item: "Formula hipótese de esquizofrenia de primeiro episódio",
              score: 1,
              ref: "ABP. Diretrizes de Esquizofrenia, 2022",
            },
            {
              item: "Diferencia quadro de psicose induzida por substância",
              score: 0.5,
              ref: "ABP. Diretrizes de Esquizofrenia, 2022",
            },
          ],
        },
        {
          h: "BLOCO 5 — CONDUTA",
          items: [
            {
              item: "Indica antipsicótico adequado e dose inicial",
              score: 1,
              ref: "ABP. Diretrizes de Esquizofrenia, 2022",
            },
            {
              item: "Orientar familiar sobre diagnóstico, prognóstico e rede de apoio",
              score: 0.5,
              ref: "ABP. Diretrizes de Esquizofrenia, 2022",
            },
            {
              item: "Referência ao CAPS / psiquiatra para seguimento especializado",
              score: 0.5,
              ref: "ABP. Diretrizes de Esquizofrenia, 2022",
            },
          ],
        },
      ],
      study: [
        {
          h: "Definição e Epidemiologia",
          body: "<p>Transtorno psicótico crônico caracterizado por distorções do pensamento, percepção, emoções e comportamento. Prevalência aproximadamente 1% da população mundial. Pico de início: 18–25 anos em homens e 25–35 em mulheres. No Brasil, é responsável por cerca de 80% das internações psiquiátricas de longa duração.</p>",
        },
        {
          h: "Critérios Diagnósticos (DSM-5 / CID-11)",
          body: "<p>Presença de ≥2 dos seguintes sintomas por ≥1 mês (pelo menos 1 deve ser dos 3 primeiros):</p><ul><li>Delírios</li><li>Alucinações</li><li>Discurso desorganizado</li><li>Comportamento desorganizado ou catatônico</li><li>Sintomas negativos (embotamento afetivo, alogia, abulia, anedonia, associalidade)</li></ul><p>+ Disfunção social/ocupacional por ≥6 meses</p><p>+ Excluir transtorno esquizoafetivo, TDM/TAB com psicose, causa médica ou substância.</p>",
        },
        {
          h: "Sintomas Positivos vs. Negativos",
          body: "<table><tr><th>Positivos</th><th>Negativos</th></tr><tr><td>Alucinações (auditivas > visuais)</td><td>Embotamento afetivo</td></tr><tr><td>Delírios (persecutório > referência)</td><td>Alogia</td></tr><tr><td>Discurso desorganizado</td><td>Abulia / apatia</td></tr><tr><td>Comportamento bizarro</td><td>Anedonia</td></tr><tr><td>Catatonia</td><td>Associalidade</td></tr></table>",
        },
        {
          h: "Diagnósticos Diferenciais",
          body: "<ul><li>Transtorno esquizofreniforme (1–6 meses)</li><li>Psicose breve (< 1 mês)</li><li>Transtorno delirante</li><li>TAB com psicose</li><li>TDM com psicose</li><li>Psicose induzida por substância (cannabis, anfetaminas, cocaína)</li><li>Causas orgânicas: encefalite autoimune, epilepsia, tumor, sífilis, HIV</li></ul>",
        },
        {
          h: "Exames para Excluir Causas Orgânicas",
          body: "<ul><li>Hemograma, glicemia, eletrólitos, função renal e hepática, TSH</li><li>VDRL, anti-HIV</li><li>Toxicológico urinário</li><li>TC ou RMN de crânio (obrigatório no primeiro episódio)</li><li>EEG se suspeita de epilepsia</li></ul>",
        },
        {
          h: "Tratamento — Protocolos MS/SUS",
          body: "<p><strong>Antipsicóticos de 1ª linha:</strong></p><ul><li>Haloperidol 5–10 mg/dia VO (ou 5 mg IM na agitação aguda)</li><li>Risperidona 2–8 mg/dia VO</li><li>Olanzapina 10–20 mg/dia VO</li></ul><p>Considerar clozapina em caso refratário (≥2 antipsicóticos sem resposta). Para agitação aguda, esquema haloperidol 5 mg IM + prometazina 25–50 mg IM. Evitar contenção física sempre que possível.</p>",
        },
        {
          h: "Rede de Cuidado no SUS",
          body: "<ul><li>CAPS II / CAPS III — referência para acompanhamento</li><li>CAPS III — 24h e com leitos de repouso</li><li>Internação psiquiátrica somente para risco grave e após esgotar recursos ambulatoriais</li><li>Residência terapêutica e família acolhedora para reabilitação psicossocial</li></ul>",
        },
        {
          h: "Monitoramento",
          body: "<ul><li>Avaliação clínica e do estado mental a cada consulta</li><li>Peso, glicemia e perfil lipídico a cada 3 meses</li><li>Hemograma semanal nas primeiras 18 semanas se clozapina</li><li>AIMS anual para discinesia tardia</li></ul>",
        },
        {
          h: "Armadilhas Comuns no OSCE",
          body: "<ul><li>Esquecer de investigar alergia medicamentosa antes de prescrever</li><li>Não solicitar beta-HCG em mulher em idade fértil</li><li>Diagnosticar pielonefrite sem febre ou dor lombar</li><li>Prescrever fluoroquinolona como 1ª linha para cistite simples</li><li>Não orientar medidas preventivas</li><li>Não investigar IST como diagnóstico diferencial</li></ul>",
        },
        {
          h: "Referências",
          body: "<ul><li>American Psychiatric Association. DSM-5-TR, 2022.</li><li>Associação Brasileira de Psiquiatria (ABP). Diretrizes de Esquizofrenia, 2022.</li><li>Ministério da Saúde. PCDT Esquizofrenia Refratária, 2023.</li><li>RENAME 2022.</li><li>UpToDate 2024.</li></ul>",
        },
      ],
    },
  },

  // ── ESTAÇÃO 26: Mulher com 'euforia intensa' e sem necessidade de dormir ─
  {
    id: 26,
    title: "Mulher com 'euforia intensa' e sem necessidade de dormir",
    sub: "Pronto-Socorro",
    tema: "Psiquiatria",
    topic: "bipolar",
    level: "moderado",
    cardAccent: "#d35400",
    instA: {
      scenario: "Nível de atenção: secundária. Urgência em pronto-socorro de hospital geral com consultórios de triagem, sala de observação, laboratório e acesso a psiquiatra de plantão.",
      patient: "C.F.O., 34 anos, sexo feminino, casada, professora de ensino fundamental.",
      complaint: "Marido traz a esposa ao PS relatando que ela está 'completamente diferente há 12 dias': dormindo apenas 2–3 horas por noite e se sentindo descansada, gastos excessivos no cartão, falando muito e rápido, iniciou projeto de 'abrir 3 empresas ao mesmo tempo' e teve comportamento sexual inusitado para o casal.",
      tasks: [
        "Realizar anamnese com a paciente e o acompanhante",
        "Avaliar o estado mental atual",
        "Investigar episódios anteriores, histórico familiar e uso de substâncias",
        "Rastrear risco de suicídio e de comportamentos de risco",
        "Formular hipóteses diagnósticas",
        "Propor conduta imediata e estabilização do episódio maníaco",
        "Orientar a paciente e o marido sobre diagnóstico e tratamento",
      ],
    },
    instB: {
      vitals: {
        PA: "132/84 mmHg",
        FC: "102 bpm",
        FR: "18 irpm",
        Tax: "36.8°C",
        Peso: "68 kg",
        Altura: "1.64 m",
        IMC: "25.3 kg/m²",
        SatO2: "99% AA",
      },
      physicalGeneral: "Apresentação exuberante, maquiagem intensa, roupas chamativas. Agitação psicomotora moderada, dificuldade em permanecer sentada. Sem sinais de trauma ou lesões. Pupilas isocóricas e fotorreagentes. Sem déficits neurológicos focais. Mucosas úmidas, sem tremores.",
      physicalSeg: [
        "EXAME DO ESTADO MENTAL: aparência cuidada em excesso, extravagante; psicomotricidade agitada, gesticulação exagerada; humor eufórico/expansivo, labilidade afetiva; fala taquifásica, logorreia, pressão de fala; pensamento com fuga de ideias, grandiosidade, sem delírios estruturados; percepção sem alucinações; orientada; memória preservada; insight ausente; juízo crítico gravemente prejudicado; risco: nega ideação suicida, comportamentos de risco presentes.",
      ],
      labs: [
        { test: "Hemograma", val: "Normal", ref: "—", alt: false },
        { test: "TSH", val: "1.8 μUI/mL", ref: "0.4–4.0", alt: false },
        { test: "T4 livre", val: "1.2 ng/dL", ref: "0.8–1.8", alt: false },
        { test: "Glicemia", val: "94 mg/dL", ref: "70–99", alt: false },
        { test: "Sódio", val: "141 mEq/L", ref: "135–145", alt: false },
        { test: "Creatinina", val: "0.8 mg/dL", ref: "0.7–1.2", alt: false },
        { test: "β-HCG", val: "Negativo", ref: "—", alt: false },
        { test: "Toxicológico urinário", val: "Negativo", ref: "—", alt: false },
        { test: "Lítio sérico (uso prévio relatado)", val: "0.2 mEq/L", ref: "0.6–1.2 terapêutico", alt: true },
      ],
      image: null,
      note: "Lítio sérico subterapêutico, sugestivo de baixa adesão ao tratamento prévio.",
      patientProfile: "Professora de 34 anos, casada. Há 3 anos teve episódio parecido seguido de meses de depressão; tratou com lítio e parou há 3 meses por se sentir bem. Há 12 dias dorme 2–3 horas e faz gastos e planos excessivos.",
      script: [
        {
          trigger: "Abertura espontânea",
          speech: "Eu não sei por que meu marido me trouxe aqui. Estou me sentindo a melhor da minha vida. Nunca fui tão criativa e produtiva!",
        },
        {
          trigger: "Quando perguntado sobre o sono",
          speech: "Durmo umas 2 ou 3 horas e fico ótima! Não preciso mais de 8 horas como antes, isso é um desperdício de tempo.",
        },
        {
          trigger: "Quando perguntado sobre os gastos",
          speech: "Foram investimentos! Preciso de roupas bonitas para quando abrir minhas empresas.",
        },
        {
          trigger: "Quando perguntado sobre episódios anteriores",
          speech: "Já tive uma fase parecida há 3 anos, mas depois fiquei muito triste por meses e fiquei na cama. Tomei um remedinho, o lítio, mas parei de tomar porque me sentia bem.",
        },
        {
          trigger: "Quando perguntado sobre o lítio",
          speech: "Parei há uns 3 meses. Não precisava mais, estava bem.",
        },
        { trigger: "Quando perguntado sobre suicídio", speech: "Suicídio? Pelo contrário! Estou cheia de planos!" },
      ],
      hiddenInfo: [
        "Parou o lítio há 3 meses — só se perguntarem sobre medicamentos",
        "Episódio depressivo grave no passado — só se perguntarem sobre episódios anteriores",
      ],
      actorBehavior: "Eufórica, fala muito e rápido, interrompe, muda de assunto. Simpática e sedutora, sem crítica do quadro. Irrita-se se contrariada.",
    },
    instC: {
      diagnosis: "Transtorno Afetivo Bipolar tipo I — episódio maníaco sem psicose (F31.1)",
      differentials: [
        "Hipomania (TAB tipo II) — sai: duração ≥ 7 dias e prejuízo grave caracterizam mania",
        "Mania induzida por substâncias ou medicamentos — toxicológico negativo",
        "Hipertireoidismo — TSH normal",
        "Esquizofrenia ou transtorno esquizoafetivo — sem sintomas psicóticos e com história de episódio depressivo",
      ],
      context: "Mulher de 34 anos com episódio maníaco clássico de 12 dias: euforia, grandiosidade, diminuição do sono, taquifasia, fuga de ideias, comportamentos de risco e insight ausente. Histórico de uso de lítio com nível subterapêutico e exames orgânicos normais, excluindo causas médicas.",
      justify: "O diagnóstico é sustentado pela evolução de 12 dias com sintomas maníacos característicos, ausência de psicose estruturada e história de episódio depressivo/maníaco anterior. Nível de lítio baixo confirma má adesão ao tratamento prévio.",
      expectedAnamnesis: [
        "Investigar início e evolução do episódio atual",
        "Identificar humor eufórico/expansivo",
        "Identificar diminuição da necessidade de sono",
        "Identificar fuga de ideias e taquifasia",
        "Investigar comportamentos de risco financeiros e sexuais",
        "Investigar episódios anteriores e adesão a medicação",
      ],
      expectedPhysical: ["Examinar: Exame do estado mental"],
      expectedExams: [
        {
          exam: "Beta-HCG",
          justify: "Idade fértil: muda a escolha do estabilizador (valproato é teratogênico)",
          expected: "Negativo",
        },
        { exam: "TSH e T4 livre", justify: "Excluir hipertireoidismo", expected: "Normais" },
        { exam: "Toxicológico urinário", justify: "Excluir substâncias", expected: "Negativo" },
        {
          exam: "Litemia, creatinina e eletrólitos",
          justify: "Uso prévio de lítio e segurança para reiniciar",
          expected: "Lítio 0,2 (subterapêutico) e função renal normal",
        },
      ],
      expectedConduct: [
        "Estabilizador de humor: reiniciar lítio (meta de litemia 0,8–1,2 mEq/L) ou valproato; associar antipsicótico (ex.: olanzapina ou risperidona)",
        "Benzodiazepínico por curto prazo se agitação ou insônia",
        "Avaliar internação (risco financeiro e comportamental, sem crítica)",
        "Psicoeducação com o marido; orientar adesão e não interromper o tratamento",
        "Encaminhar à psiquiatria/CAPS para seguimento",
      ],
      expectedCommunication: [
        "Apresentação e abordagem empática sem confronto",
        "Explicar os riscos do episódio maníaco e a necessidade de tratamento",
        "Usar linguagem acessível, sem jargão",
        "Verificar o entendimento e esclarecer dúvidas",
      ],
      criticalErrors: [
        "Não solicitar β-HCG em mulher em idade fértil antes de escolher estabilizador de humor",
        "Prescrever antidepressivo isolado em episódio maníaco",
        "Não investigar episódios depressivos anteriores para confirmar bipolaridade",
        "Não checar nível sérico de lítio diante de relato de uso prévio",
        "Alta sem avaliação de risco em episódio maníaco com insight ausente",
      ],
    },
    instD: {
      title: "Transtorno Afetivo Bipolar — Revisão Clínica Completa",
      sections: [
        {
          h: "BLOCO 1 — COMUNICAÇÃO",
          items: [
            {
              item: "Apresentação e abordagem empática sem confronto",
              score: 0.5,
              ref: "ABP. Diretrizes Brasileiras para Tratamento do TAB, 2021",
            },
            {
              item: "Explica os riscos do episódio maníaco e a necessidade de tratamento",
              score: 0.5,
              ref: "ABP. Diretrizes Brasileiras para Tratamento do TAB, 2021",
            },
          ],
        },
        {
          h: "BLOCO 2 — ANAMNESE",
          items: [
            {
              item: "Investigou início e evolução do episódio atual",
              score: 0.5,
              ref: "ABP. Diretrizes Brasileiras para Tratamento do TAB, 2021",
            },
            {
              item: "Identificou humor eufórico/expansivo",
              score: 0.5,
              ref: "ABP. Diretrizes Brasileiras para Tratamento do TAB, 2021",
            },
            {
              item: "Identificou diminuição da necessidade de sono",
              score: 0.5,
              ref: "ABP. Diretrizes Brasileiras para Tratamento do TAB, 2021",
            },
            {
              item: "Identificou fuga de ideias e taquifasia",
              score: 0.5,
              ref: "ABP. Diretrizes Brasileiras para Tratamento do TAB, 2021",
            },
            {
              item: "Investigou comportamentos de risco financeiros e sexuais",
              score: 0.5,
              ref: "ABP. Diretrizes Brasileiras para Tratamento do TAB, 2021",
            },
            {
              item: "Investigou episódios anteriores e adesão a medicação",
              score: 0.5,
              ref: "ABP. Diretrizes Brasileiras para Tratamento do TAB, 2021",
            },
          ],
        },
        {
          h: "BLOCO 3 — INVESTIGAÇÃO",
          items: [
            {
              item: "Solicitou β-HCG em mulher em idade fértil",
              score: 0.5,
              ref: "ABP. Diretrizes Brasileiras para Tratamento do TAB, 2021",
            },
            {
              item: "Solicitou TSH e outros exames para excluir causas orgânicas",
              score: 0.5,
              ref: "ABP. Diretrizes Brasileiras para Tratamento do TAB, 2021",
            },
            {
              item: "Solicitou nível sérico de lítio após relato de uso prévio",
              score: 0.5,
              ref: "ABP. Diretrizes Brasileiras para Tratamento do TAB, 2021",
            },
          ],
        },
        {
          h: "BLOCO 4 — RACIOCÍNIO CLÍNICO",
          items: [
            {
              item: "Formulou diagnóstico de TAB I — episódio maníaco",
              score: 1,
              ref: "ABP. Diretrizes Brasileiras para Tratamento do TAB, 2021",
            },
            {
              item: "Diferenciou mania de hipomania e psiquose secundária",
              score: 0.5,
              ref: "ABP. Diretrizes Brasileiras para Tratamento do TAB, 2021",
            },
          ],
        },
        {
          h: "BLOCO 5 — CONDUTA",
          items: [
            {
              item: "Indica estabilizador de humor adequado",
              score: 1,
              ref: "ABP. Diretrizes Brasileiras para Tratamento do TAB, 2021",
            },
            {
              item: "Orientou sobre internação se necessário",
              score: 0.5,
              ref: "ABP. Diretrizes Brasileiras para Tratamento do TAB, 2021",
            },
            {
              item: "Referenciou ao psiquiatra / CAPS para seguimento especializado",
              score: 0.5,
              ref: "ABP. Diretrizes Brasileiras para Tratamento do TAB, 2021",
            },
          ],
        },
      ],
      study: [
        {
          h: "Definição",
          body: "<p>Transtorno do humor caracterizado por episódios de mania/hipomania alternados com episódios depressivos. Prevalência global de 2–4%. Início médio aos 25 anos. Uma das 10 maiores causas de incapacidade global.</p>",
        },
        {
          h: "Tipos de TAB",
          body: "<ul><li><strong>TAB I:</strong> episódio maníaco completo (≥7 dias ou hospitalização)</li><li><strong>TAB II:</strong> hipomania + episódio depressivo maior</li><li><strong>Ciclotimia:</strong> episódios subclínicos de hipomania e depressão por ≥2 anos</li></ul>",
        },
        {
          h: "Critérios para Episódio Maníaco (DSM-5)",
          body: "<p>Humor elevado/expansivo/irritável + aumento de energia por ≥7 dias (ou qualquer duração se hospitalização) + ≥3 dos seguintes:</p><ul><li>Grandiosidade / autoestima inflada</li><li>Diminuição da necessidade de sono</li><li>Taquifasia / pressão de fala</li><li>Fuga de ideias / pensamento acelerado</li><li>Distratibilidade</li><li>Aumento da atividade dirigida a objetivos</li><li>Comportamentos de risco</li></ul>",
        },
        {
          h: "Diagnósticos Diferenciais",
          body: "<ul><li>Psicose induzida por substâncias</li><li>Hipertireoidismo</li><li>Episódio misto</li><li>TDAH</li><li>Transtorno de personalidade borderline</li><li>Esquizofrenia</li></ul>",
        },
        {
          h: "Tratamento do Episódio Maníaco — MS/SUS",
          body: "<p><strong>Estabilizadores de humor 1ª linha:</strong></p><ul><li>Lítio 900–1800 mg/dia</li><li>Valproato de sódio 1000–3000 mg/dia (contraindicado na gravidez)</li><li>Carbamazepina</li></ul><p><strong>Antipsicóticos adjuvantes:</strong> Haloperidol, Risperidona, Olanzapina, Quetiapina.</p><p><strong>Benzodiazepínicos:</strong> Clonazepam ou Diazepam apenas a curto prazo para agitação.</p>",
        },
        {
          h: "Monitoramento do Lítio",
          body: "<ul><li>Lítio sérico 5–7 dias após início, depois a cada 3 meses</li><li>Creatinina, TSH, cálcio a cada 6 meses</li><li>Toxicidade: tremor, poliúria, ataxia, confusão</li></ul>",
        },
        {
          h: "Armadilhas Comuns no OSCE",
          body: "<ul><li>Não perguntar sobre episódios depressivos prévios</li><li>Prescrever antidepressivo isolado na mania</li><li>Não checar β-HCG antes de valproato</li><li>Não avaliar adesão ao lítio</li><li>Confundir TAB com esquizofrenia</li></ul>",
        },
        {
          h: "Referências",
          body: "<ul><li>ABP. Diretrizes Brasileiras para Tratamento do TAB, 2021.</li><li>DSM-5-TR, 2022.</li><li>RENAME 2022.</li><li>UpToDate 2024.</li></ul>",
        },
      ],
    },
  },

  // ── ESTAÇÃO 27: Mulher de meia-idade com 'tristeza que não passa' ─
  {
    id: 27,
    title: "Mulher de meia-idade com 'tristeza que não passa'",
    sub: "UBS — Consulta agendada",
    tema: "Psiquiatria",
    topic: "depressao",
    level: "moderado",
    cardAccent: "#c0392b",
    instA: {
      scenario: "Nível de atenção: primária. Consulta agendada em Unidade Básica de Saúde com consultório médico, acesso a exames laboratoriais básicos e referência para CAPS e psicólogo.",
      patient: "M.A.R., 47 anos, sexo feminino, divorciada, auxiliar administrativa, 2 filhos.",
      complaint: "Paciente relata 'tristeza que não passa' há aproximadamente 5 meses, com choro frequente, perda de interesse por atividades, cansaço intenso, insônia e pensamentos de que seria 'melhor não estar aqui'.",
      tasks: [
        "Realizar anamnese completa direcionada ao quadro depressivo",
        "Avaliar e quantificar o risco de suicídio (obrigatório)",
        "Rastrear sintomas depressivos com escala validada (PHQ-9)",
        "Solicitar exames para excluir causas orgânicas",
        "Formular diagnóstico e diagnósticos diferenciais",
        "Propor plano terapêutico completo (farmacológico e não farmacológico)",
        "Orientar a paciente e discutir o plano de segurança",
      ],
    },
    instB: {
      vitals: {
        PA: "124/80 mmHg",
        FC: "76 bpm",
        FR: "15 irpm",
        Tax: "36.4°C",
        Peso: "74 kg",
        Altura: "1.61 m",
        IMC: "28.6 kg/m²",
      },
      physicalGeneral: "Aparência descuidada em relação ao habitual. Fácies triste, contato visual reduzido, chora durante a consulta. Pele e mucosas sem alterações. Sem lesões de automutilação identificadas. Tireóide não palpável, sem nódulos. Exame físico geral sem outras alterações.",
      physicalSeg: ["PHQ-9 aplicado durante a consulta: total 20/27, Depressão grave."],
      labs: [
        { test: "Hemograma", val: "Normal", ref: "—", alt: false },
        { test: "TSH", val: "2.3 μUI/mL", ref: "0.4–4.0", alt: false },
        { test: "T4 livre", val: "1.1 ng/dL", ref: "0.8–1.8", alt: false },
        { test: "Glicemia", val: "98 mg/dL", ref: "70–99", alt: false },
        { test: "Vitamina B12", val: "210 pg/mL", ref: "200–900", alt: true },
        { test: "Vitamina D", val: "18 ng/mL", ref: ">30", alt: true },
        { test: "Ferritina", val: "14 ng/mL", ref: "12–150", alt: true },
      ],
      image: null,
      note: "PHQ-9 = 20 indica depressão grave. Vitamina D e B12 no limite inferior, fatores contribuintes a considerar.",
      patientProfile: "Auxiliar administrativa de 47 anos, divorciada há cerca de 5 meses, dois filhos. Gostava de dançar e ver séries. Dorme mal, acorda cedo e chora com frequência.",
      script: [
        {
          trigger: "Abertura",
          speech: "Doutora, eu estou muito mal. Não consigo mais fazer nada. Fico chorando à toa.",
        },
        {
          trigger: "Quando perguntado sobre a tristeza",
          speech: "Faz uns 5 meses. Eu sei quando começou porque foi depois do divórcio ser finalizado. Mas já se passou tempo e não melhora.",
        },
        {
          trigger: "Quando perguntado sobre prazer e atividades",
          speech: "Eu adorava dançar e ver série. Agora não consigo nem ligar a televisão. Não tenho vontade de nada.",
        },
        {
          trigger: "Quando perguntado sobre o sono",
          speech: "Fico horas tentando dormir. Fico pensando em muita coisa. E quando durmo, acordo cedo e não consigo voltar.",
        },
        {
          trigger: "Quando perguntado sobre pensamentos ruins",
          speech: "Às vezes eu penso que seria melhor não estar aqui. Que os meus filhos estariam melhor sem mim.",
        },
        {
          trigger: "Quando perguntado sobre plano de suicídio",
          speech: "Não, eu não tenho coragem. Mas o pensamento vem.",
        },
      ],
      hiddenInfo: [
        "Pensa que seria melhor não estar aqui e que os filhos ficariam melhor sem ela — só se perguntarem diretamente",
        "Não tem plano de suicídio — só se perguntarem",
      ],
      actorBehavior: "Chorosa, voz baixa, olhar para baixo, fala devagar. Abre-se mais se o médico for acolhedor e direto ao perguntar sobre suicídio.",
    },
    instC: {
      diagnosis: "Transtorno depressivo maior — episódio grave sem psicose (F32.2)",
      differentials: [
        "Luto ou transtorno de ajustamento — o divórcio é o gatilho, mas gravidade, duração e ideação suicida configuram depressão maior",
        "Transtorno bipolar — perguntar sobre episódios de euforia antes de prescrever antidepressivo",
        "Hipotireoidismo — TSH normal",
        "Anemia e deficiência de B12/vitamina D — ferritina e vitamina D baixas podem contribuir",
      ],
      context: "Mulher de 47 anos com quadro de 5 meses de humor deprimido, anedonia, insônia, fadiga, desesperança e ideação suicida passiva. PHQ-9 = 20. Exames orgânicos normais, com deficiência de vitamina D como possível fator contribuinte.",
      justify: "O diagnóstico é suportado pela duração >2 semanas, pelo menos 5 sintomas depressivos relevantes, comprometimento funcional e ideação suicida passiva. Excluir causas orgânicas e rastrear comorbidades.",
      expectedAnamnesis: [
        "Investigar início e evolução do humor deprimido",
        "Investigar anedonia e perda de prazer",
        "Investigar alterações de sono, apetite e energia",
        "Estratificar risco de suicídio",
      ],
      expectedPhysical: ["Examinar: Phq-9 aplicado durante a consulta"],
      expectedExams: [
        { exam: "PHQ-9", justify: "Rastrear e graduar a depressão", expected: "20/27 (grave)" },
        { exam: "TSH e T4 livre", justify: "Excluir hipotireoidismo", expected: "Normais" },
        {
          exam: "Hemograma, ferritina, B12 e vitamina D",
          justify: "Causas contribuintes",
          expected: "Ferritina e vitamina D baixas; B12 limítrofe",
        },
      ],
      expectedConduct: [
        "Avaliar e estratificar o risco de suicídio; elaborar plano de segurança",
        "ISRS de 1ª linha (ex.: sertralina 50 mg/dia, com ajuste)",
        "Orientar latência de 2–4 semanas e efeitos adversos iniciais",
        "Psicoterapia (TCC) e apoio social",
        "Retorno em 1–2 semanas; encaminhar ao CAPS/psiquiatra se risco elevado",
        "Repor ferro e vitamina D",
      ],
      expectedCommunication: [
        "Apresentação e acolhimento sem julgamento",
        "Explorar ideação suicida de forma direta e sensível",
        "Usar linguagem acessível, sem jargão",
        "Explicar o diagnóstico e o plano de forma clara",
      ],
      criticalErrors: [
        "Não perguntar sobre ideação suicida",
        "Não estratificar o risco de suicídio",
        "Não excluir hipotireoidismo com TSH",
        "Prescrever benzodiazepínico como único tratamento",
        "Não orientar sobre latência do antidepressivo",
      ],
    },
    instD: {
      title: "Depressão Maior — Revisão Clínica Completa",
      sections: [
        {
          h: "BLOCO 1 — COMUNICAÇÃO",
          items: [
            {
              item: "Apresentação e acolhimento sem julgamento",
              score: 0.5,
              ref: "MS. Linha de Cuidado da Depressão, 2022",
            },
            {
              item: "Explora ideação suicida de forma direta e sensível",
              score: 1,
              ref: "MS. Linha de Cuidado da Depressão, 2022",
            },
          ],
        },
        {
          h: "BLOCO 2 — ANAMNESE",
          items: [
            {
              item: "Investigou início e evolução do humor deprimido",
              score: 0.5,
              ref: "MS. Linha de Cuidado da Depressão, 2022",
            },
            { item: "Investigou anedonia e perda de prazer", score: 0.5, ref: "MS. Linha de Cuidado da Depressão, 2022" },
            {
              item: "Investigou alterações de sono, apetite e energia",
              score: 0.5,
              ref: "MS. Linha de Cuidado da Depressão, 2022",
            },
            { item: "Estratificou risco de suicídio", score: 1, ref: "MS. Linha de Cuidado da Depressão, 2022" },
          ],
        },
        {
          h: "BLOCO 3 — AVALIAÇÃO",
          items: [
            { item: "Aplicou ou citou PHQ-9 como rastreio", score: 0.5, ref: "MS. Linha de Cuidado da Depressão, 2022" },
            {
              item: "Solicitou TSH para excluir hipotireoidismo",
              score: 0.5,
              ref: "MS. Linha de Cuidado da Depressão, 2022",
            },
            {
              item: "Identificou déficit de vitamina D como fator contribuinte",
              score: 0.3,
              ref: "MS. Linha de Cuidado da Depressão, 2022",
            },
          ],
        },
        {
          h: "BLOCO 4 — RACIOCÍNIO CLÍNICO E CONDUTA",
          items: [
            {
              item: "Formulou diagnóstico de depressão maior grave",
              score: 0.5,
              ref: "MS. Linha de Cuidado da Depressão, 2022",
            },
            {
              item: "Prescreveu antidepressivo de primeira linha adequado",
              score: 1,
              ref: "MS. Linha de Cuidado da Depressão, 2022",
            },
            {
              item: "Orientou sobre latência de resposta do antidepressivo",
              score: 0.5,
              ref: "MS. Linha de Cuidado da Depressão, 2022",
            },
            {
              item: "Propôs psicoterapia e plano de segurança",
              score: 0.5,
              ref: "MS. Linha de Cuidado da Depressão, 2022",
            },
            { item: "Agendou retorno em 1–2 semanas", score: 0.5, ref: "MS. Linha de Cuidado da Depressão, 2022" },
          ],
        },
      ],
      study: [
        {
          h: "Definição e Epidemiologia",
          body: "<p>Transtorno do humor mais prevalente do mundo. No Brasil, estima-se cerca de 12 milhões de pessoas (5,8% da população). Mais comum em mulheres (2:1). Principal causa de incapacidade laboral.</p>",
        },
        {
          h: "Critérios Diagnósticos (DSM-5)",
          body: "<p>≥5 dos 9 sintomas por ≥2 semanas, com comprometimento funcional. Obrigatório: humor deprimido OU anedonia.</p><p><strong>SIGECAPS + Humor:</strong></p><ul><li>Sleep</li><li>Interest</li><li>Guilt</li><li>Energy</li><li>Concentration</li><li>Appetite</li><li>Psychomotor</li><li>Suicide</li><li>Humor deprimido</li></ul>",
        },
        {
          h: "Classificação por Gravidade (PHQ-9)",
          body: "<table><tr><th>PHQ-9</th><th>Gravidade</th></tr><tr><td>5–9</td><td>Leve</td></tr><tr><td>10–14</td><td>Moderado</td></tr><tr><td>15–19</td><td>Moderado-grave</td></tr><tr><td>≥20</td><td>Grave</td></tr></table>",
        },
        {
          h: "Avaliação de Risco de Suicídio",
          body: "<p>Pergunte diretamente sobre pensamentos de morte ou autoagressão. Estratifique ideação, plano, meio, intenção, fatores protetores e tentativas anteriores. Plano de segurança: identificar sinais de alerta, contatos de suporte, remover meios letais e orientar CVV (188).</p>",
        },
        {
          h: "Diagnósticos Diferenciais",
          body: "<ul><li>Hipotireoidismo</li><li>TAB</li><li>Luto complicado</li><li>Distimia</li><li>Transtorno de ajustamento com humor deprimido</li><li>Anemia, deficiência de B12/D</li></ul>",
        },
        {
          h: "Tratamento — MS/SUS",
          body: "<p><strong>Antidepressivos de 1ª linha:</strong></p><ul><li>Sertralina 50–200 mg/dia</li><li>Fluoxetina 20–60 mg/dia</li><li>Escitalopram 10–20 mg/dia</li><li>Amitriptilina 25–150 mg/dia</li></ul><p>Não interromper sem orientação médica. Duração mínima de 6–12 meses após remissão no primeiro episódio.</p><p><strong>Não farmacológico:</strong> TCC, exercício físico regular, higiene do sono, suporte social.</p>",
        },
        {
          h: "Quando Encaminhar ao CAPS/Psiquiatra",
          body: "<ul><li>Depressão grave com risco de suicídio</li><li>Não resposta a 2 antidepressivos</li><li>Psicose associada</li><li>Suspeita de TAB</li></ul>",
        },
        {
          h: "Armadilhas Comuns no OSCE",
          body: "<ul><li>Não perguntar sobre suicídio por medo de 'dar ideia'</li><li>Não investigar episódio maníaco prévio</li><li>Não avisar sobre latência do medicamento</li><li>Prescrever benzodiazepínico como 1ª linha</li><li>Não agendar retorno precoce</li></ul>",
        },
        {
          h: "Referências",
          body: "<ul><li>MS/SUS. Linha de Cuidado para Atenção às Pessoas com Depressão, 2022.</li><li>ABP. Diretrizes para Tratamento da Depressão, 2021.</li><li>RENAME 2022.</li><li>PHQ-9 validado para português brasileiro.</li><li>UpToDate 2024.</li></ul>",
        },
      ],
    },
  },

  // ── ESTAÇÃO 28: Jovem com 'preocupação constante' e sintomas físicos ─
  {
    id: 28,
    title: "Jovem com 'preocupação constante' e sintomas físicos",
    sub: "UBS — Demanda espontânea",
    tema: "Psiquiatria",
    topic: "ansiedade",
    level: "fácil",
    cardAccent: "#2980b9",
    instA: {
      scenario: "Nível de atenção: primária. Demanda espontânea na UBS com consultório médico e acesso a exames básicos.",
      patient: "L.G.P., 28 anos, sexo masculino, solteiro, analista de sistemas, trabalha em home office.",
      complaint: "Paciente refere preocupação constante há cerca de 8 meses, dificuldade para relaxar, tensão muscular no pescoço e ombros, insônia por pensamentos acelerados à noite, irritabilidade e dificuldade de concentração no trabalho. Já buscou cardiologista e gastroenterologista sem alterações orgânicas.",
      tasks: [
        "Realizar anamnese direcionada às queixas físicas e psíquicas",
        "Explorar o conteúdo e o padrão das preocupações",
        "Rastrear outros transtornos de ansiedade e depressão comórbida",
        "Avaliar risco de suicídio",
        "Solicitar exames pertinentes para exclusão de causa orgânica",
        "Formular diagnóstico e diagnósticos diferenciais",
        "Propor plano terapêutico e orientar o paciente",
      ],
    },
    instB: {
      vitals: {
        PA: "128/82 mmHg",
        FC: "92 bpm",
        FR: "18 irpm",
        Tax: "36.5°C",
        Peso: "76 kg",
        Altura: "1.78 m",
        IMC: "24.0 kg/m²",
        SatO2: "99% AA",
      },
      physicalGeneral: "Aparência ansiosa, inquieto durante a consulta. Tensão muscular visível em região cervical e trapézio. Tireóide sem alterações palpáveis. Cardiovascular sem alterações. Abdome sem alterações. Neurológico sem déficits focais.",
      physicalSeg: ["GAD-7 aplicado durante a consulta: total 16/21, Ansiedade grave."],
      labs: [
        { test: "Hemograma", val: "Normal", ref: "—", alt: false },
        { test: "TSH", val: "1.6 μUI/mL", ref: "0.4–4.0", alt: false },
        { test: "Glicemia em jejum", val: "91 mg/dL", ref: "70–99", alt: false },
        { test: "ECG", val: "Ritmo sinusal, FC 90 bpm, sem alterações", ref: "—", alt: false },
        { test: "Consumo de cafeína", val: "5–6 xícaras de café/dia", ref: "—", alt: true },
      ],
      image: null,
      note: "Café em excesso é fator agravante para ansiedade.",
      patientProfile: "Analista de sistemas de 28 anos, em home office. Sempre foi ansioso, piorou há 8 meses. Bebe 5–6 xícaras de café por dia. Já passou por cardiologista e gastroenterologista sem alterações.",
      script: [
        {
          trigger: "Abertura",
          speech: "Doutor, eu sei que parece bobagem, mas eu fico preocupado o tempo todo. Com tudo. Com o trabalho, com minha saúde, com a família. Não consigo desligar.",
        },
        {
          trigger: "Quando perguntado sobre quais preocupações",
          speech: "Com o trabalho — se vou entregar no prazo, se vou ser demitido. Com minha saúde — qualquer dorzinha acho que é coisa grave. Com minha mãe que é diabética. Com dinheiro. Com tudo, basicamente.",
        },
        {
          trigger: "Quando perguntado sobre sintomas físicos",
          speech: "Tenho muita tensão no pescoço e ombro. Palpitações às vezes. Dor de estômago. Já fui no cardiologista e no gastro, não acharam nada.",
        },
        {
          trigger: "Quando perguntado sobre o sono",
          speech: "Fico na cama pensando. Os pensamentos não param. Demoro pra dormir toda noite.",
        },
        {
          trigger: "Quando perguntado sobre o início",
          speech: "Faz uns 8 meses, mais ou menos quando comecei a trabalhar em casa. Mas sempre fui ansioso, desde novo. Piorou muito esse ano.",
        },
        {
          trigger: "Quando perguntado sobre crises de pânico",
          speech: "Não tenho crise não. Não é aquela coisa de coração disparar de repente. É uma preocupação constante, o tempo todo.",
        },
        {
          trigger: "Quando perguntado sobre suicídio",
          speech: "Não, nada disso. Só estou muito cansado de me preocupar.",
        },
      ],
      hiddenInfo: [
        "Bebe 5–6 cafés por dia — só se perguntarem",
        "Não tem crises de pânico — só se perguntarem",
      ],
      actorBehavior: "Inquieto, mexe as mãos, fala rápido e pede desculpas por 'estar exagerando'. Colaborativo.",
    },
    instC: {
      diagnosis: "Transtorno de Ansiedade Generalizada — TAG (F41.1)",
      differentials: [
        "Transtorno do pânico — sai: não há crises súbitas e recorrentes",
        "Depressão maior — rastrear; não há humor deprimido predominante",
        "Hipertireoidismo — TSH normal",
        "Ansiedade por cafeína ou substâncias — 5–6 cafés/dia agravam, mas não explicam 8 meses de sintomas",
      ],
      context: "Homem de 28 anos com preocupações excessivas e difíceis de controlar por ≥6 meses sobre múltiplas áreas da vida, acompanhadas de tensão muscular, insônia, irritabilidade e dificuldade de concentração. Exames orgânicos normais. Consumo elevado de cafeína como fator agravante.",
      justify: "O diagnóstico é baseado em ansiedade e preocupação excessivas por ≥6 meses, incapacidade de controlar as preocupações e sintomas físicos característicos de TAG, sem crise de pânico episódica ou causa orgânica identificada.",
      expectedAnamnesis: [
        "Investigar natureza e conteúdo das preocupações",
        "Verificar que as preocupações são difíceis de controlar",
        "Investigar duração ≥6 meses",
        "Identificar sintomas físicos associados",
        "Rastrear depressão comórbida",
        "Avaliar risco de suicídio",
        "Perguntar sobre cafeína, álcool e substâncias",
      ],
      expectedPhysical: ["Examinar: Gad-7 aplicado durante a consulta"],
      expectedExams: [
        { exam: "GAD-7", justify: "Rastrear e graduar a ansiedade", expected: "16/21 (grave)" },
        { exam: "TSH e glicemia", justify: "Excluir causas orgânicas", expected: "Normais" },
        { exam: "ECG", justify: "Palpitações", expected: "Ritmo sinusal sem alterações" },
      ],
      expectedConduct: [
        "ISRS de 1ª linha (sertralina ou escitalopram) com titulação",
        "Psicoterapia (TCC) como 1ª linha",
        "Reduzir cafeína gradualmente, higiene do sono, atividade física",
        "Evitar benzodiazepínico prolongado (no máximo poucas semanas)",
        "Retorno em 2–4 semanas",
      ],
      expectedCommunication: [
        "Apresentação e acolhimento empático",
        "Explicar a diferença entre preocupação patológica e preocupação normal",
        "Usar linguagem acessível, sem jargão",
        "Verificar o entendimento e esclarecer dúvidas",
      ],
      criticalErrors: [
        "Prescrever benzodiazepínico como 1ª linha e por longo prazo",
        "Não excluir hipertireoidismo com TSH",
        "Não rastrear depressão comórbida",
        "Não avaliar suicídio",
        "Não orientar sobre cafeína como fator agravante",
      ],
    },
    instD: {
      title: "Transtorno de Ansiedade Generalizada — Revisão Clínica Completa",
      sections: [
        {
          h: "BLOCO 1 — COMUNICAÇÃO",
          items: [
            { item: "Apresentação e acolhimento empático", score: 0.5, ref: "ABP. Diretrizes para TAG, 2021" },
            {
              item: "Explica a diferença entre preocupação patológica e preocupação normal",
              score: 0.5,
              ref: "ABP. Diretrizes para TAG, 2021",
            },
          ],
        },
        {
          h: "BLOCO 2 — ANAMNESE",
          items: [
            {
              item: "Investigou natureza e conteúdo das preocupações",
              score: 0.5,
              ref: "ABP. Diretrizes para TAG, 2021",
            },
            {
              item: "Verificou que as preocupações são difíceis de controlar",
              score: 0.5,
              ref: "ABP. Diretrizes para TAG, 2021",
            },
            { item: "Investigou duração ≥6 meses", score: 0.5, ref: "ABP. Diretrizes para TAG, 2021" },
            { item: "Identificou sintomas físicos associados", score: 0.5, ref: "ABP. Diretrizes para TAG, 2021" },
            { item: "Rastreou depressão comórbida", score: 0.5, ref: "ABP. Diretrizes para TAG, 2021" },
            { item: "Rastreou transtorno do pânico como diferencial", score: 0.5, ref: "ABP. Diretrizes para TAG, 2021" },
          ],
        },
        {
          h: "BLOCO 3 — INVESTIGAÇÃO",
          items: [
            { item: "Avaliou risco de suicídio", score: 0.5, ref: "ABP. Diretrizes para TAG, 2021" },
            { item: "Perguntou sobre cafeína, álcool e substâncias", score: 0.5, ref: "ABP. Diretrizes para TAG, 2021" },
            {
              item: "Solicitou TSH e ECG para excluir causa orgânica",
              score: 0.5,
              ref: "ABP. Diretrizes para TAG, 2021",
            },
            { item: "Aplicou ou citou GAD-7", score: 0.5, ref: "ABP. Diretrizes para TAG, 2021" },
          ],
        },
        {
          h: "BLOCO 4 — CONDUTA",
          items: [
            { item: "Formulou diagnóstico de TAG", score: 1, ref: "ABP. Diretrizes para TAG, 2021" },
            {
              item: "Indicou antidepressivo ou ansiolítico de 1ª linha adequado",
              score: 1,
              ref: "ABP. Diretrizes para TAG, 2021",
            },
            { item: "Orientou sobre psicoterapia (TCC)", score: 0.5, ref: "ABP. Diretrizes para TAG, 2021" },
            {
              item: "Orientou sobre estilo de vida, incluindo redução de cafeína",
              score: 0.5,
              ref: "ABP. Diretrizes para TAG, 2021",
            },
          ],
        },
      ],
      study: [
        {
          h: "Definição e Epidemiologia",
          body: "<p>Ansiedade e preocupação excessivas e difíceis de controlar envolvendo múltiplas esferas da vida, geralmente acompanhadas por sintomas físicos. Prevalência de 5–7% da população geral. Mais comum em mulheres. Início tipicamente na adolescência ou adulto jovem.</p>",
        },
        {
          h: "Critérios Diagnósticos (DSM-5)",
          body: "<ul><li>Ansiedade e preocupação excessivas por ≥6 meses</li><li>Dificuldade de controlar as preocupações</li><li>≥3 dos seguintes: inquietação, cansaço fácil, dificuldade de concentração, irritabilidade, tensão muscular, alteração do sono</li><li>Comprometimento funcional significativo</li><li>Não decorrente de substância ou condição médica</li></ul>",
        },
        {
          h: "Diagnósticos Diferenciais",
          body: "<ul><li>Hipertireoidismo</li><li>Transtorno do pânico</li><li>Transtorno depressivo maior com ansiedade</li><li>Transtorno de ansiedade social</li><li>Transtorno obsessivo-compulsivo</li></ul>",
        },
        {
          h: "Tratamento — MS/SUS",
          body: "<p><strong>Farmacoterapia 1ª linha:</strong></p><ul><li>Sertralina 50–200 mg/dia</li><li>Escitalopram 10–20 mg/dia</li><li>Duloxetina 60–120 mg/dia</li><li>Venlafaxina 75–225 mg/dia</li></ul><p><strong>Benzodiazepínicos:</strong> uso curto (máx 4 semanas), como clonazepam ou diazepam.</p><p><strong>Buspirona:</strong> 15–45 mg/dia, início lento.</p><p><strong>Psicoterapia:</strong> TCC é 1ª linha. Mindfulness e relaxamento também são úteis.</p>",
        },
        {
          h: "Estilo de Vida",
          body: "<ul><li>Reduzir cafeína para menos de 3 xícaras por dia</li><li>Exercício aeróbico regular</li><li>Higiene do sono</li><li>Técnicas de relaxamento respiratório</li></ul>",
        },
        {
          h: "GAD-7 — Pontuação e Conduta",
          body: "<table><tr><th>Pontuação</th><th>Gravidade</th><th>Conduta</th></tr><tr><td>5–9</td><td>Leve</td><td>Orientação e seguimento</td></tr><tr><td>10–14</td><td>Moderado</td><td>TCC + considerar farmacoterapia</td></tr><tr><td>≥15</td><td>Grave</td><td>Farmacoterapia + TCC</td></tr></table>",
        },
        {
          h: "Armadilhas Comuns no OSCE",
          body: "<ul><li>Não diferenciar TAG do transtorno do pânico</li><li>Prescrever benzo por longo prazo</li><li>Não rastrear depressão comórbida</li><li>Não mencionar TCC</li><li>Não checar TSH</li></ul>",
        },
        {
          h: "Referências",
          body: "<ul><li>ABP. Diretrizes para TAG, 2021.</li><li>NICE. Generalised anxiety disorder and panic disorder in adults, 2019 (atualizado 2024).</li><li>RENAME 2022.</li><li>UpToDate 2024.</li></ul>",
        },
      ],
    },
  },

  // ── ESTAÇÃO 29: Mulher com pesadelos e 'nunca mais foi a mesma' após assalto ─
  {
    id: 29,
    title: "Mulher com pesadelos e 'nunca mais foi a mesma' após assalto",
    sub: "UBS — Consulta agendada",
    tema: "Psiquiatria",
    topic: "tept",
    level: "moderado",
    cardAccent: "#16a085",
    instA: {
      scenario: "Nível de atenção: primária. Consulta agendada em UBS após encaminhamento do NASF, com apoio matricial de psicologia e referência ao CAPS.",
      patient: "A.B.S., 38 anos, sexo feminino, casada, caixa de supermercado.",
      complaint: "Paciente refere pesadelos recorrentes, imagens intrusivas do assalto à mão armada sofrido há 4 meses, sobressaltos com barulhos súbitos, evitação de locais do ocorrido, entorpecimento emocional e afastamento do trabalho por licença médica.",
      tasks: [
        "Realizar anamnese detalhada explorando os 4 clusters de TEPT",
        "Investigar o evento traumático de forma sensível e sem revitimização",
        "Rastrear comorbidades (depressão, álcool, suicídio)",
        "Avaliar risco de suicídio",
        "Formular diagnóstico e diagnósticos diferenciais",
        "Propor plano terapêutico adequado",
        "Orientar a paciente com empatia e validação",
      ],
    },
    instB: {
      vitals: {
        PA: "136/88 mmHg",
        FC: "94 bpm",
        FR: "16 irpm",
        Tax: "36.6°C",
        Peso: "65 kg",
        Altura: "1.60 m",
        IMC: "25.4 kg/m²",
      },
      physicalGeneral: "Aparência de sofrimento psíquico e olhar distante. Sobressalta-se com barulho súbito. Tensão muscular generalizada. Mucosas íntegras. Sem lesões físicas residuais. Exame segmentar sem alterações agudas. Leve hipertensão de contexto.",
      physicalSeg: [
        "EXAME DO ESTADO MENTAL: aparência cuidada, alerta aumentado; psicomotricidade tensa, hipervigilância, sobressalto exagerado; humor disfórico e entorpecido; fala baixa com pausas ao relatar o trauma; pensamento sem desorganização formal, com ruminação sobre o evento; cognições negativas de culpa e insegurança; percepção com flashbacks em resposta a estímulos relacionados; orientada; memória com fragmentação do trauma; insight preservado; risco: ideação passiva de morte, nega plano ativo.",
      ],
      labs: [
        { test: "Hemograma", val: "Normal", ref: "—", alt: false },
        { test: "TSH", val: "2.0 μUI/mL", ref: "0.4–4.0", alt: false },
        { test: "Glicemia", val: "96 mg/dL", ref: "70–99", alt: false },
        { test: "Toxicológico urinário", val: "Negativo", ref: "—", alt: false },
        { test: "CAGE", val: "1/4 (baixo risco)", ref: "0–1 baixo risco", alt: false },
      ],
      image: null,
      note: "LEVE hipertensão de contexto e sobressalto exacerbado durante a consulta.",
      patientProfile: "Caixa de supermercado de 38 anos, casada, com filhos. Sofreu assalto à mão armada no trabalho há 4 meses e está afastada por licença médica.",
      script: [
        {
          trigger: "Abertura",
          speech: "Doutora, eu não sei bem como explicar. Desde aquele dia eu não sou mais a mesma pessoa.",
        },
        {
          trigger: "Quando perguntado sobre o evento",
          speech: "Fui assaltada no meu trabalho. Um homem entrou com uma arma, ficou apontando pra mim. Achei que ia morrer.",
        },
        {
          trigger: "Quando perguntado sobre os pesadelos",
          speech: "Todo noite eu sonho com isso. Acordo no meio da noite gritando, suada. Meu marido está preocupado.",
        },
        {
          trigger: "Quando perguntado sobre os flashbacks",
          speech: "Qualquer barulho de moto eu trava. É como se eu tivesse lá de novo, vivendo aquele momento.",
        },
        {
          trigger: "Quando perguntado sobre evitação",
          speech: "Não consigo mais ir trabalhar. Fico com medo de voltar lá. Evito até assistir notícia de crime.",
        },
        {
          trigger: "Quando perguntado sobre culpa",
          speech: "Fico pensando que poderia ter feito diferente. Que foi culpa minha por estar lá sozinha.",
        },
        {
          trigger: "Quando perguntado sobre suicídio",
          speech: "Às vezes penso que seria melhor não estar aqui. Mas não tenho coragem de fazer nada. Tenho filhos.",
        },
      ],
      hiddenInfo: [
        "Sente culpa por estar sozinha no caixa — só se perguntarem sobre como se sente em relação ao ocorrido",
        "Pensa às vezes que seria melhor não estar aqui, sem plano — só se perguntarem diretamente",
      ],
      actorBehavior: "Tensa, sobressalta-se com barulhos. Fala baixo e faz pausas ao falar do assalto; chora se pressionada a dar detalhes.",
    },
    instC: {
      diagnosis: "Transtorno de Estresse Pós-Traumático — TEPT (F43.1)",
      differentials: [
        "Transtorno de estresse agudo — sai: sintomas há mais de 1 mês",
        "Transtorno de ajustamento — os sintomas preenchem os critérios de TEPT",
        "Depressão maior — comorbidade frequente; rastrear",
        "Transtorno do pânico — os sintomas são ligados a lembranças do trauma",
      ],
      context: "Mulher de 38 anos com trauma de assalto à mão armada há 4 meses, apresentando todos os 4 clusters diagnósticos do TEPT: revivência, evitação, alterações cognitivas/humor e hiperexcitabilidade. Duração >1 mês e comprometimento funcional com afastamento do trabalho. Ideação passiva de morte presente.",
      justify: "O diagnóstico é justificado pela presença de flashbacks e pesadelos, evitação de estímulos relacionados ao trauma, cognições negativas e hipervigilância. Exclui-se causa orgânica e há comorbidade depressiva compatível com TEPT.",
      expectedAnamnesis: [
        "Investigar o evento traumático como gatilho sem exigir detalhes desnecessários",
        "Identificar revivência, evitação, alterações cognitivas/humor e hiperexcitabilidade",
        "Verificar duração ≥1 mês",
        "Avaliar risco de suicídio e estratificou",
        "Rastrear depressão comórbida",
        "Rastrear uso de álcool/substâncias",
      ],
      expectedPhysical: ["Examinar: Exame do estado mental"],
      expectedExams: [
        {
          exam: "Avaliação clínica dos 4 grupos de sintomas (PCL-5 se disponível)",
          justify: "Diagnóstico de TEPT",
          expected: "Revivência, evitação, alterações cognitivas/humor e hiperexcitação",
        },
        {
          exam: "Rastreio de depressão (PHQ-9) e de álcool (CAGE/AUDIT)",
          justify: "Comorbidades",
          expected: "Uso de álcool de baixo risco",
        },
        {
          exam: "Exames gerais (hemograma, TSH, glicemia)",
          justify: "Excluir causas orgânicas",
          expected: "Normais",
        },
      ],
      expectedConduct: [
        "Psicoterapia focada no trauma (TCC focada no trauma, EMDR) como 1ª linha",
        "ISRS (sertralina ou paroxetina) se sintomas importantes ou comorbidade",
        "Prazosina pode ser considerada para pesadelos refratários; evitar benzodiazepínicos",
        "Avaliar risco de suicídio e plano de segurança",
        "Acolher sem pedir detalhes desnecessários do trauma; encaminhar ao CAPS",
      ],
      expectedCommunication: [
        "Apresentar acolhimento e validação do sofrimento",
        "Evitar revitimização ao investigar o trauma",
        "Orientar a paciente com empatia e sem minimizar",
        "Usar linguagem acessível, sem jargão",
      ],
      criticalErrors: [
        "Pedir detalhes do trauma sem necessidade clínica",
        "Não avaliar risco de suicídio",
        "Não identificar os 4 clusters do TEPT",
        "Prescrever benzodiazepínico para TEPT em longo prazo",
        "Minimizar o sofrimento do paciente",
      ],
    },
    instD: {
      title: "TEPT — Revisão Clínica Completa",
      sections: [
        {
          h: "BLOCO 1 — COMUNICAÇÃO",
          items: [
            {
              item: "Apresenta acolhimento e validação do sofrimento",
              score: 0.5,
              ref: "ABP. Diretrizes para TEPT, 2022",
            },
            { item: "Evita revitimização ao investigar o trauma", score: 0.5, ref: "ABP. Diretrizes para TEPT, 2022" },
          ],
        },
        {
          h: "BLOCO 2 — DIAGNÓSTICO",
          items: [
            {
              item: "Investigou o evento traumático como gatilho sem exigir detalhes desnecessários",
              score: 0.5,
              ref: "ABP. Diretrizes para TEPT, 2022",
            },
            {
              item: "Identificou revivência, evitação, alterações cognitivas/humor e hiperexcitabilidade",
              score: 1,
              ref: "ABP. Diretrizes para TEPT, 2022",
            },
            { item: "Verificou duração ≥1 mês", score: 0.5, ref: "ABP. Diretrizes para TEPT, 2022" },
          ],
        },
        {
          h: "BLOCO 3 — RISCOS E COMORBIDADES",
          items: [
            { item: "Avaliou risco de suicídio e estratificou", score: 1, ref: "ABP. Diretrizes para TEPT, 2022" },
            { item: "Rastreou depressão comórbida", score: 0.5, ref: "ABP. Diretrizes para TEPT, 2022" },
            { item: "Rastreou uso de álcool/substâncias", score: 0.5, ref: "ABP. Diretrizes para TEPT, 2022" },
          ],
        },
        {
          h: "BLOCO 4 — CONDUTA",
          items: [
            {
              item: "Indicou psicoterapia focada no trauma como 1ª linha",
              score: 0.5,
              ref: "ABP. Diretrizes para TEPT, 2022",
            },
            {
              item: "Indicou farmacoterapia adequada (ISRS) se necessário",
              score: 0.5,
              ref: "ABP. Diretrizes para TEPT, 2022",
            },
            {
              item: "Orientou a paciente com empatia e sem minimizar",
              score: 0.5,
              ref: "ABP. Diretrizes para TEPT, 2022",
            },
            {
              item: "Referenciou ao CAPS ou serviço de saúde mental especializado",
              score: 0.5,
              ref: "ABP. Diretrizes para TEPT, 2022",
            },
          ],
        },
      ],
      study: [
        {
          h: "Definição e Epidemiologia",
          body: "<p>Transtorno que se desenvolve após exposição a evento traumático com risco real ou percebido de morte, lesão grave ou violência sexual. Prevalência de 7–8% ao longo da vida. Mulheres têm risco duas vezes maior após trauma equivalente.</p>",
        },
        {
          h: "Tipos de Trauma",
          body: "<ul><li>Violência urbana (assalto, agressão)</li><li>Violência sexual</li><li>Acidentes graves</li><li>Desastres naturais</li><li>Combate / guerra</li><li>Abuso na infância</li><li>Testemunhar morte violenta</li></ul>",
        },
        {
          h: "Os 4 Clusters Diagnósticos",
          body: "<table><tr><th>Cluster</th><th>Sintomas</th></tr><tr><td>B — Revivência</td><td>Flashbacks, pesadelos, sofrimento em resposta a pistas</td></tr><tr><td>C — Evitação</td><td>Evitar pensamentos, sentimentos ou estímulos relacionados</td></tr><tr><td>D — Cognições/Humor</td><td>Culpa, entorpecimento, emoções positivas diminuídas</td></tr><tr><td>E — Hiperexcitabilidade</td><td>Hipervigilância, sobressalto exagerado, insônia</td></tr></table>",
        },
        {
          h: "Diagnósticos Diferenciais",
          body: "<ul><li>Transtorno de ajustamento</li><li>Estresse agudo</li><li>Depressão maior</li><li>TAG</li><li>Transtorno do pânico</li><li>Psicose</li></ul>",
        },
        {
          h: "Tratamento — Diretrizes ABP/MS",
          body: "<p><strong>Psicoterapia 1ª linha:</strong> TCC focada no trauma, EMDR, terapia de processamento cognitivo e exposição prolongada.</p><p><strong>Farmacoterapia adjuvante:</strong> Sertralina 50–200 mg/dia, Paroxetina 20–60 mg/dia, Venlafaxina ou Prazosina para pesadelos refratários.</p><p>Evitar benzodiazepínicos rotineiros.</p>",
        },
        {
          h: "Princípios da Abordagem",
          body: "<ul><li>Não revitimizar</li><li>Validar o sofrimento</li><li>Não minimizar</li><li>Priorizar segurança</li><li>Psicoeducação reduz culpa e estigma</li></ul>",
        },
        {
          h: "Rede de Cuidado no SUS",
          body: "<ul><li>CAPS II / CAPS ad</li><li>CRAS/CREAS para violência</li><li>Delegacia da Mulher em casos de violência de gênero</li><li>CVV (188) para crise suicida</li></ul>",
        },
        {
          h: "Rastreio de Comorbidades",
          body: "<ul><li>Depressão maior</li><li>Transtorno do pânico</li><li>Abuso de álcool/substâncias</li><li>Risco de suicídio</li></ul>",
        },
        {
          h: "Armadilhas Comuns no OSCE",
          body: "<ul><li>Pedir detalhes desnecessários do trauma</li><li>Não identificar os 4 clusters</li><li>Prescrever benzodiazepínico de longo prazo</li><li>Não mencionar psicoterapia focada no trauma</li><li>Confundir flashbacks com alucinações</li><li>Não avaliar suicídio</li></ul>",
        },
        {
          h: "Referências",
          body: "<ul><li>ABP. Diretrizes para TEPT, 2022.</li><li>DSM-5-TR, 2022.</li><li>NICE. PTSD, 2018 (revisado 2023).</li><li>RENAME 2022.</li><li>OMS mhGAP 2016.</li><li>UpToDate 2024.</li></ul>",
        },
      ],
    },
  },
];

export { urologyStations, endocrineStations };
