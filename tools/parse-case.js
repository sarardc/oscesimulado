/**
 * parse-case.js
 *
 * Converts a markdown case file into the JS object format used in casos.js / pediatria.js
 *
 * Usage:
 *   ANTHROPIC_API_KEY=sk-... node parse-case.js <path-to-case.md> [output.js]
 *
 * If output file is omitted, prints to stdout.
 * Requires: npm install (inside tools/)
 */

import Anthropic from "@anthropic-ai/sdk";
import fs from "fs";
import path from "path";

const SCHEMA_EXAMPLE = `
{
  id: <number>,                          // BLOCO 1 → id
  title: "<card title>",                 // BLOCO 1 → title
  sub: "<setting subtitle>",             // BLOCO 1 → sub
  tema: "<specialty slug>",              // BLOCO 1 → tema
  level: "simples" | "moderado" | "difícil",  // BLOCO 1 → level
  time: "<station duration>",            // BLOCO 1 → tempo de estação
  type: "<station type>",                // BLOCO 1 → tipo de estação
  comp: ["<competency 1>", ...],         // BLOCO 1 → competências avaliadas
  cardAccent: "<hex color>",             // BLOCO 1 → cardAccent

  instA: {
    scenario: "<setting description>",   // BLOCO 2 → Cenário
    patient: "<name, age, sex, ...>",    // BLOCO 2 → Paciente
    complaint: "<chief complaint>",      // BLOCO 2 → Queixa
    tasks: ["<task 1>", ...]             // BLOCO 2 → Tarefas
  },

  instB: {
    vitals: { PA: "", FC: "", FR: "", Tax: "", Peso: "", Altura: "", IMC: "" },  // BLOCO 3 → Sinais Vitais
    physicalGeneral: "<general exam>",   // BLOCO 3 → Exame Físico Geral
    physicalSeg: ["<system 1>", ...],    // BLOCO 3 → Exame Segmentar
    labs: [
      { test: "<exam name>", val: "<result>", ref: "<reference range>", alt: true|false },
      ...
    ],
    image: null | "<description>",          // BLOCO 3 → Exame de Imagem
    note: "<examiner note>",                 // BLOCO 3 → Nota ao Avaliador
    patientProfile: "<name, age, sex, ...>", // BLOCO 3 → Perfil do Paciente Simulado
    script: [                                // BLOCO 3 → Script do Paciente
      { trigger: "<trigger>", speech: "<patient response>" },
      ...
    ],
    hiddenInfo: ["<info 1>", ...],           // BLOCO 3 → Informações Escondidas
    actorBehavior: "<actor directions>"      // BLOCO 3 → Comportamento do Ator
  },

  instC: {
    diagnosis: "<final diagnosis>",          // BLOCO 4 → Diagnóstico Principal
    differentials: ["<diff 1>", ...],        // BLOCO 4 → Diagnósticos Diferenciais
    context: "<case synthesis>",             // BLOCO 4 → Síntese do Caso
    justify: "<diagnostic justification>",  // BLOCO 4 → Justificativa Diagnóstica
    expectedAnamnesis: ["<item 1>", ...],    // BLOCO 4 → Anamnese Esperada
    expectedPhysical: ["<item 1>", ...],     // BLOCO 4 → Exame Físico Esperado
    expectedExams: [                         // BLOCO 4 → Exames Complementares Esperados
      { exam: "<name>", justify: "<why>", expected: "<expected result>" },
      ...
    ],
    expectedConduct: ["<item 1>", ...],      // BLOCO 4 → Conduta Esperada
    expectedCommunication: ["<item 1>", ...], // BLOCO 4 → Comunicação Esperada
    criticalErrors: ["<error 1>", ...]       // BLOCO 4 → Erros Críticos
  },

  instD: {
    title: "<checklist title>",              // BLOCO 5 → título do checklist
    sections: [                              // BLOCO 5 → cada sub-bloco do checklist
      {
        h: "<section heading>",
        items: [
          { item: "<criterion text>", score: <number>, ref: "<reference>" },
          ...
        ]
      },
      ...
    ]
  }
}
`;

const SYSTEM_PROMPT = `You are a medical education data engineer. Your job is to convert markdown case files into a strict JavaScript object literal.

The object must match this schema exactly:
${SCHEMA_EXAMPLE}

FIELD MAPPING RULES — follow these precisely:
- BLOCO 1  → top-level fields: id, title, sub, tema, level, time, type, comp (array), cardAccent
- BLOCO 2  → instA: scenario, patient, complaint, tasks (array)
- BLOCO 3  → instB: vitals (object), physicalGeneral, physicalSeg (array), labs (array), image, note, patientProfile, script (array of {trigger, speech}), hiddenInfo (array of strings), actorBehavior
- BLOCO 4  → instC: diagnosis, differentials (array), context, justify, expectedAnamnesis (array), expectedPhysical (array), expectedExams (array of {exam, justify, expected}), expectedConduct (array), expectedCommunication (array), criticalErrors (array)
- BLOCO 5  → instD: title (checklist title string), sections (array of {h, items: [{item, score, ref}]})

OUTPUT RULES:
- Return ONLY the raw JavaScript object literal — no imports, exports, variable declarations, or markdown fences.
- All string values use double quotes. No single quotes.
- Boolean alt field in labs: true or false (never "sim"/"não").
- score in instD items must be a JS number (e.g. 0.5, 1.0), not a string.
- If a markdown field uses a comma as decimal separator (0,5), convert it to a dot (0.5).
- Strip ❌ / ✅ / emoji prefixes from error and checklist text.
- If a field is missing from the markdown, use: null for scalars, [] for arrays, "" for strings.
- Do NOT add any comments inside the object.
- If the file contains multiple cases, return a JS array [...] of objects, not a single object.`;

async function parseCase(mdPath, outPath) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    console.error("Error: ANTHROPIC_API_KEY environment variable is not set.");
    process.exit(1);
  }

  const mdContent = fs.readFileSync(path.resolve(mdPath), "utf-8");

  const client = new Anthropic({ apiKey });

  console.error(`Sending ${path.basename(mdPath)} to Claude...`);

  const message = await client.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 8192,
    system: SYSTEM_PROMPT,
    messages: [
      {
        role: "user",
        content: `Convert this markdown case file to the JavaScript object literal:\n\n${mdContent}`,
      },
    ],
  });

  const raw = message.content[0].text.trim();

  // Strip accidental code fences if model adds them
  const cleaned = raw
    .replace(/^```(?:javascript|js)?\n?/, "")
    .replace(/\n?```$/, "")
    .trim();

  const output = `// Auto-generated from ${path.basename(mdPath)}\n// Edit the source .md file, not this output.\n\n${cleaned}`;

  if (outPath) {
    fs.writeFileSync(path.resolve(outPath), output, "utf-8");
    console.error(`Written to ${outPath}`);
  } else {
    console.log(output);
  }
}

// ── CLI entry point ──────────────────────────────────────────────────────────

const [, , mdPath, outPath] = process.argv;

if (!mdPath) {
  console.error(
    "Usage: node parse-case.js <path-to-case.md> [output.js]\n" +
      "  ANTHROPIC_API_KEY must be set in the environment.\n" +
      "\nExample:\n" +
      "  ANTHROPIC_API_KEY=sk-... node parse-case.js ../cases/itu-simples.md ../data/itu-simples.js"
  );
  process.exit(1);
}

if (!fs.existsSync(path.resolve(mdPath))) {
  console.error(`File not found: ${mdPath}`);
  process.exit(1);
}

parseCase(mdPath, outPath).catch((err) => {
  console.error("Error:", err.message);
  process.exit(1);
});
