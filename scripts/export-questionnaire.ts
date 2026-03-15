/**
 * Export the super questionnaire to a TSV file for medical review.
 * Run: npx tsx scripts/export-questionnaire.ts
 */

import { QUESTIONS, SECTIONS } from "../src/lib/questionnaire/questions";
import type { Condition } from "../src/lib/questionnaire/types";
import * as fs from "fs";

// Section ID → title map
const sectionTitles: Record<string, string> = {};
for (const s of SECTIONS) {
  sectionTitles[s.id] = s.title;
}

// Track question number per section
const sectionCounters: Record<string, number> = {};

function formatCondition(c: Condition | undefined): string {
  if (!c) return "";
  switch (c.type) {
    case "equals":
      return `${c.questionId} = "${c.value}"`;
    case "notEquals":
      return `${c.questionId} ≠ "${c.value}"`;
    case "includes":
      return `${c.questionId} includes "${c.value}"`;
    case "answered":
      return `${c.questionId} is answered`;
    case "treatmentInPlan":
      return `${c.treatmentId} is in treatment plan`;
    case "sectionActive":
      return `${c.section} section is active`;
    case "and":
      return c.conditions.map(formatCondition).join(" AND ");
    case "or":
      return c.conditions.map(formatCondition).join(" OR ");
    default:
      return "";
  }
}

function formatTriggers(
  triggers: typeof QUESTIONS[number]["triggers"]
): string {
  if (!triggers || triggers.length === 0) return "";
  return triggers
    .map((t) => {
      const cond = formatCondition(t.condition);
      const act = t.action;
      switch (act.type) {
        case "suggest":
          return `If ${cond} → Suggest ${act.treatmentId}: "${act.reason}"`;
        case "disqualify":
          return `If ${cond} → DISQUALIFY ${act.treatmentId}: "${act.reason}"`;
        case "flag":
          return `If ${cond} → FLAG: "${act.message}"`;
        default:
          return "";
      }
    })
    .join(" | ");
}

function escapeTab(s: string): string {
  // Escape tabs and newlines within cell values
  return s.replace(/\t/g, "  ").replace(/\n/g, " ").replace(/\r/g, "");
}

// Build TSV rows
const headers = [
  "Section",
  "Q#",
  "Question ID",
  "Question",
  "Description",
  "Type",
  "Answer Options",
  "Required",
  "Condition (Show If)",
  "Follow-Up",
  "Triggers",
  "Critical",
  "Reviewer Notes",
  "Approved",
];

const rows: string[][] = [headers];

for (const q of QUESTIONS) {
  const sectionTitle = sectionTitles[q.section] || q.section;

  // Increment question counter for section
  if (!sectionCounters[q.section]) sectionCounters[q.section] = 0;
  sectionCounters[q.section]++;
  const qNum = sectionCounters[q.section];

  const options = q.options
    ? q.options.map((o) => o.label).join(" / ")
    : q.type === "text"
      ? "(free text)"
      : "";

  const followUp = q.followUp
    ? `If ${formatCondition(q.followUp.condition)} → "${q.followUp.prompt}"`
    : "";

  const row = [
    sectionTitle,
    String(qNum),
    q.id,
    q.question,
    q.description || "",
    q.type,
    options,
    q.required ? "Yes" : "No",
    formatCondition(q.showIf),
    followUp,
    formatTriggers(q.triggers),
    q.critical ? "Yes" : "",
    "", // Reviewer Notes (blank)
    "", // Approved (blank)
  ];

  rows.push(row.map(escapeTab));
}

// Write TSV
const tsv = rows.map((r) => r.join("\t")).join("\n");
const outPath = "questionnaires/super-questionnaire-review.tsv";
fs.writeFileSync(outPath, tsv, "utf-8");

console.log(`Exported ${QUESTIONS.length} questions to ${outPath}`);
