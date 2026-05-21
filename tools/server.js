import Anthropic from "@anthropic-ai/sdk";
import http from "http";
import fs from "fs";
import path from "path";
import { exec } from "child_process";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = 3333;

const SCHEMA = `{
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
}`;

const SYSTEM_PROMPT = `You are a medical education data engineer. Your job is to convert markdown OSCE case files into a strict JavaScript object literal.

The object MUST match this schema exactly — do NOT add, rename, or remove any property:
${SCHEMA}

STRICT PROPERTY RULES:
- Top-level properties allowed ONLY: id, title, sub, tema, topic, level, cardAccent — nothing else.
- instA properties: scenario, patient, complaint, tasks — nothing else.
- instB properties: vitals, physicalGeneral, physicalSeg, labs, image, note, patientProfile, script, hiddenInfo, actorBehavior — nothing else.
- instC properties: diagnosis, differentials, context, justify, expectedAnamnesis, expectedPhysical, expectedExams, expectedConduct, expectedCommunication, criticalErrors — nothing else.
- instD properties: title, sections (array of {h, items: [{item, score, ref}]}) — nothing else.
- Extra markdown fields like Time, Type, Comp, tempo, tipo, competências — DISCARD silently.

FIELD MAPPING:
- BLOCO 1 (METADADOS) → top-level: id (number), title, sub, tema, topic, level, cardAccent
- BLOCO 2 (BRIEFING / instA) → instA: scenario, patient, complaint, tasks[]
- BLOCO 3 (PACIENTE SIMULADO / instB) → instB (all sub-fields)
- BLOCO 4 (GABARITO TÉCNICO / instC) → instC (all sub-fields)
- BLOCO 5 (CHECKLIST / instD) → instD: title, sections[]

OUTPUT RULES:
- Return ONLY the raw JavaScript object literal — no imports, exports, const declarations, or markdown fences.
- All string values use double quotes. No single quotes anywhere.
- Boolean alt field in labs: true or false (never "sim"/"não").
- score in instD items must be a JS number (0.5, 1.0), never a string.
- Comma decimal separators (0,5) → dot (0.5).
- Strip ❌ ✅ → and all emoji prefixes from text values.
- vitals: use string value if present, or null (bare null, not the string "null") if missing/dashes.
- Missing fields: null for scalars, [] for arrays, "" for strings.
- No comments inside the object.
- Preserve all Portuguese text exactly — accents, special characters, punctuation.`;

async function convert(markdown) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) throw new Error("ANTHROPIC_API_KEY não configurada no ambiente.");

  const client = new Anthropic({ apiKey });
  const message = await client.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 8192,
    system: SYSTEM_PROMPT,
    messages: [{
      role: "user",
      content: `Convert this markdown OSCE case to the JavaScript object literal:\n\n${markdown}`
    }]
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

const CORS = { "Access-Control-Allow-Origin": "*" };

const server = http.createServer(async (req, res) => {
  const url = req.url.split("?")[0];

  if (req.method === "GET" && url === "/") {
    try {
      const html = fs.readFileSync(path.join(__dirname, "converter.html"), "utf-8");
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      res.end(html);
    } catch (e) {
      res.writeHead(500);
      res.end("Erro ao ler converter.html: " + e.message);
    }
    return;
  }

  if (req.method === "GET" && url === "/ping") {
    res.writeHead(200, { "Content-Type": "text/plain", ...CORS });
    res.end("ok");
    return;
  }

  if (req.method === "OPTIONS" && url === "/convert") {
    res.writeHead(204, {
      ...CORS,
      "Access-Control-Allow-Methods": "POST",
      "Access-Control-Allow-Headers": "Content-Type"
    });
    res.end();
    return;
  }

  if (req.method === "POST" && url === "/convert") {
    res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8", ...CORS });
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
  const url = `http://localhost:${PORT}`;
  console.log(`\n  OSCE Converter → ${url}\n`);
  // Abre o navegador automaticamente
  const cmd = process.platform === "win32" ? `start ${url}`
            : process.platform === "darwin" ? `open ${url}`
            : `xdg-open ${url}`;
  exec(cmd, () => {});
});
