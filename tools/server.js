import Anthropic from "@anthropic-ai/sdk";
import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = 3333;

const SCHEMA_EXAMPLE = `
{
  id: <number>,
  title: "<card title>",
  sub: "<setting subtitle>",
  tema: "<specialty slug>",
  topic: "<topic slug>",
  level: "simples" | "moderado" | "difícil",
  cardAccent: "<hex color>",

  instA: {
    scenario: "<setting description>",
    patient: "<name, age, sex, ...>",
    complaint: "<chief complaint>",
    tasks: ["<task 1>", ...]
  },

  instB: {
    vitals: { PA: "<value or null>", FC: "<value or null>", FR: "<value or null>", Tax: "<value or null>", Peso: "<value or null>", Altura: "<value or null>", IMC: "<value or null>" },
    physicalGeneral: "<general exam text>",
    physicalSeg: ["<SYSTEM: finding>", ...],
    labs: [
      { test: "<exam name>", val: "<result>", ref: "<reference range>", alt: true | false },
      ...
    ],
    image: null,
    note: "<examiner note>",
    patientProfile: "<name, age, sex, context>",
    script: [
      { trigger: "<trigger phrase>", speech: "<patient speech>" },
      ...
    ],
    hiddenInfo: ["<hidden info 1>", ...],
    actorBehavior: "<actor directions>"
  },

  instC: {
    diagnosis: "<final diagnosis>",
    differentials: ["<differential 1>", ...],
    context: "<case synthesis>",
    justify: "<diagnostic justification>",
    expectedAnamnesis: ["<item 1>", ...],
    expectedPhysical: ["<item 1>", ...],
    expectedExams: [
      { exam: "<name>", justify: "<why>", expected: "<expected result>" },
      ...
    ],
    expectedConduct: ["<item 1>", ...],
    expectedCommunication: ["<item 1>", ...],
    criticalErrors: ["<error 1>", ...]
  },

  instD: {
    title: "<checklist title>",
    sections: [
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

const SYSTEM_PROMPT = `You are a medical education data engineer. Your job is to convert markdown OSCE case files into a strict JavaScript object literal.

The object MUST match this schema exactly — do NOT add, rename, or remove any property:
${SCHEMA_EXAMPLE}

STRICT PROPERTY RULES:
- Top-level properties allowed: id, title, sub, tema, topic, level, cardAccent — nothing else at the top level.
- instA properties: scenario, patient, complaint, tasks — nothing else.
- instB properties: vitals, physicalGeneral, physicalSeg, labs, image, note, patientProfile, script, hiddenInfo, actorBehavior — nothing else.
- instC properties: diagnosis, differentials, context, justify, expectedAnamnesis, expectedPhysical, expectedExams, expectedConduct, expectedCommunication, criticalErrors — nothing else.
- instD properties: title, sections (array of {h, items: [{item, score, ref}]}) — nothing else.
- If the markdown contains extra metadata fields (Time, Type, Comp, etc.) that do not map to the schema, DISCARD them silently.

FIELD MAPPING RULES:
- BLOCO 1 (METADADOS) → top-level: id (number), title, sub, tema, topic, level, cardAccent
- BLOCO 2 (BRIEFING / instA) → instA: scenario, patient, complaint, tasks (array of strings)
- BLOCO 3 (PACIENTE SIMULADO / instB) → instB with all its sub-fields
- BLOCO 4 (GABARITO TÉCNICO / instC) → instC with all its sub-fields
- BLOCO 5 (CHECKLIST / instD) → instD: title (string), sections (array)

OUTPUT RULES:
- Return ONLY the raw JavaScript object literal — no imports, exports, variable declarations, or markdown fences.
- All string values use double quotes. No single quotes anywhere.
- Boolean alt field in labs: true or false (never "sim"/"não").
- score values in instD items must be JS numbers (e.g. 0.5, 1.0), not strings.
- If a markdown field uses comma as decimal separator (0,5) convert it to a dot (0.5).
- Strip ❌ / ✅ / → / emoji prefixes from all text values.
- vitals values: use the string value if present, or null (not the string "null") if not available.
- If a field is missing from the markdown: use null for scalars, [] for arrays, "" for strings.
- Do NOT add comments inside the object.
- Preserve all Portuguese text exactly — accents, special characters, punctuation.`;

async function convert(markdown) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) throw new Error("ANTHROPIC_API_KEY não configurada no ambiente.");

  const client = new Anthropic({ apiKey });
  const message = await client.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 8192,
    system: SYSTEM_PROMPT,
    messages: [{ role: "user", content: `Convert this markdown OSCE case to the JavaScript object literal:\n\n${markdown}` }]
  });

  let raw = message.content[0].text.trim();
  raw = raw.replace(/^```(?:javascript|js)?\n?/, "").replace(/\n?```$/, "").trim();
  return raw;
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", chunk => { body += chunk; });
    req.on("end", () => resolve(body));
    req.on("error", reject);
  });
}

const server = http.createServer(async (req, res) => {
  const url = req.url.split("?")[0];

  if (req.method === "GET" && url === "/") {
    const html = fs.readFileSync(path.join(__dirname, "converter.html"), "utf-8");
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(html);
    return;
  }

  if (req.method === "POST" && url === "/convert") {
    res.writeHead(200, {
      "Content-Type": "text/plain; charset=utf-8",
      "Access-Control-Allow-Origin": "*"
    });

    try {
      const body = await readBody(req);
      const { markdown } = JSON.parse(body);
      if (!markdown) throw new Error("Campo 'markdown' ausente no body.");
      const result = await convert(markdown);
      res.end(result);
    } catch (e) {
      res.end(`ERRO: ${e.message}`);
    }
    return;
  }

  res.writeHead(404);
  res.end("Not found");
});

server.listen(PORT, "127.0.0.1", () => {
  console.log(`\n  OSCE Converter rodando em http://localhost:${PORT}\n`);
});
