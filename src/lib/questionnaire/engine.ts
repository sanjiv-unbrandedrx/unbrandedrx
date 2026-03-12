// ---------------------------------------------------------------------------
// Questionnaire Engine — branching logic, condition evaluation, step calc
// ---------------------------------------------------------------------------

import type {
  Answer,
  AnswerValue,
  Condition,
  Question,
  QuestionSection,
  QuestionnaireState,
  TreatmentSelection,
  Trigger,
  TriggerAction,
} from "./types";
import { QUESTIONS, SECTIONS } from "./questions";
import { getTreatmentById, getTreatmentsByCategory } from "./treatments";

// ── Condition Evaluation ──────────────────────────────────────────────────

export function evaluateCondition(
  condition: Condition,
  state: QuestionnaireState,
): boolean {
  switch (condition.type) {
    case "equals": {
      const answer = state.answers[condition.questionId];
      if (!answer) return false;
      return answer.value === condition.value;
    }
    case "includes": {
      const answer = state.answers[condition.questionId];
      if (!answer) return false;
      if (Array.isArray(answer.value)) {
        return answer.value.includes(condition.value);
      }
      return answer.value === condition.value;
    }
    case "notEquals": {
      const answer = state.answers[condition.questionId];
      if (!answer) return true; // not answered = not equals
      return answer.value !== condition.value;
    }
    case "answered": {
      return condition.questionId in state.answers;
    }
    case "and": {
      return condition.conditions.every((c) => evaluateCondition(c, state));
    }
    case "or": {
      return condition.conditions.some((c) => evaluateCondition(c, state));
    }
    case "treatmentInPlan": {
      return state.treatmentPlan.some(
        (t) => t.treatmentId === condition.treatmentId,
      );
    }
    case "sectionActive": {
      return state.activeSections.includes(
        condition.section as QuestionSection,
      );
    }
  }
}

// ── Section Activation ────────────────────────────────────────────────────

/** Map health goals + initial treatment to active sections */
export function computeActiveSections(
  initialTreatment: string,
  goals: string[],
  treatmentPlan: TreatmentSelection[],
): QuestionSection[] {
  const sections: QuestionSection[] = ["basics", "goals", "medical-history"];

  const treatmentIds = treatmentPlan.map((t) => t.treatmentId);
  const treatment = getTreatmentById(initialTreatment);
  const category = treatment?.category;

  // Determine which category sections to activate
  const needsCardio =
    category === "ed" ||
    category === "testosterone" ||
    treatmentIds.includes("follicle-activator") ||
    goals.includes("sexual-performance") ||
    goals.includes("energy");

  const needsED =
    category === "ed" || goals.includes("sexual-performance");

  const needsTestosterone =
    category === "testosterone" ||
    (goals.includes("energy") && goals.includes("muscle"));

  const needsHair = category === "hair" || goals.includes("hair");

  const needsPeptides =
    category === "peptides" ||
    goals.includes("longevity") ||
    goals.includes("wellness");

  // Mental health is needed for hair (5-AR warning) or ED
  const needsMentalHealth = needsHair || needsED;

  if (needsCardio) sections.push("cardiovascular");
  if (needsED) sections.push("ed-sexual-health");
  if (needsTestosterone) sections.push("testosterone");
  if (needsHair) sections.push("hair-loss");
  if (needsPeptides) sections.push("peptides");
  if (needsMentalHealth) sections.push("mental-health");

  sections.push("review");

  return sections;
}

// ── Visible Questions ─────────────────────────────────────────────────────

/** Get the list of currently visible questions based on state */
export function getVisibleQuestions(
  state: QuestionnaireState,
): Question[] {
  return QUESTIONS.filter((q) => {
    // Must be in an active section
    if (!state.activeSections.includes(q.section)) return false;

    // Check showIf condition
    if (q.showIf && !evaluateCondition(q.showIf, state)) return false;

    return true;
  });
}

/** Get sections that are active and have visible questions */
export function getVisibleSections(state: QuestionnaireState) {
  const visibleQuestions = getVisibleQuestions(state);
  const sectionIds = new Set(visibleQuestions.map((q) => q.section));
  // Always include review
  sectionIds.add("review");

  return SECTIONS.filter((s) => sectionIds.has(s.id));
}

// ── Trigger Processing ────────────────────────────────────────────────────

export interface TriggerResult {
  suggestions: Array<{
    treatmentId: string;
    reason: string;
  }>;
  disqualifications: Array<{
    treatmentId: string;
    reason: string;
  }>;
  flags: string[];
}

/** Process all triggers for a question based on its answer */
export function processTriggersForQuestion(
  question: Question,
  state: QuestionnaireState,
): TriggerResult {
  const result: TriggerResult = {
    suggestions: [],
    disqualifications: [],
    flags: [],
  };

  if (!question.triggers) return result;

  for (const trigger of question.triggers) {
    if (evaluateCondition(trigger.condition, state)) {
      switch (trigger.action.type) {
        case "suggest": {
          // Don't suggest if already in plan or dismissed
          const { treatmentId } = trigger.action;
          if (
            !state.treatmentPlan.some((t) => t.treatmentId === treatmentId) &&
            !state.dismissed.includes(treatmentId)
          ) {
            result.suggestions.push({
              treatmentId,
              reason: trigger.action.reason,
            });
          }
          break;
        }
        case "disqualify":
          result.disqualifications.push({
            treatmentId: trigger.action.treatmentId,
            reason: trigger.action.reason,
          });
          break;
        case "flag":
          result.flags.push(trigger.action.message);
          break;
      }
    }
  }

  return result;
}

/** Process all triggers across all answered questions */
export function processAllTriggers(
  state: QuestionnaireState,
): TriggerResult {
  const combined: TriggerResult = {
    suggestions: [],
    disqualifications: [],
    flags: [],
  };

  for (const question of QUESTIONS) {
    if (state.answers[question.id]) {
      const result = processTriggersForQuestion(question, state);
      combined.suggestions.push(...result.suggestions);
      combined.disqualifications.push(...result.disqualifications);
      combined.flags.push(...result.flags);
    }
  }

  // Deduplicate suggestions
  const seenSuggestions = new Set<string>();
  combined.suggestions = combined.suggestions.filter((s) => {
    if (seenSuggestions.has(s.treatmentId)) return false;
    seenSuggestions.add(s.treatmentId);
    return true;
  });

  return combined;
}

// ── Progress Calculation ──────────────────────────────────────────────────

export function calculateProgress(state: QuestionnaireState): {
  current: number;
  total: number;
  percentage: number;
} {
  const visibleQuestions = getVisibleQuestions(state);
  const answeredCount = visibleQuestions.filter(
    (q) => state.answers[q.id],
  ).length;

  return {
    current: answeredCount,
    total: visibleQuestions.length,
    percentage:
      visibleQuestions.length > 0
        ? Math.round((answeredCount / visibleQuestions.length) * 100)
        : 0,
  };
}

// ── Treatment Plan Helpers ────────────────────────────────────────────────

/** Create a TreatmentSelection from a treatment ID */
export function createTreatmentSelection(
  treatmentId: string,
  reason: "initial" | "suggested",
  reasonText?: string,
): TreatmentSelection | null {
  const treatment = getTreatmentById(treatmentId);
  if (!treatment) return null;

  return {
    treatmentId: treatment.id,
    name: treatment.name,
    medicalName: treatment.medicalName,
    price: treatment.price,
    image: treatment.image,
    reason,
    reasonText,
    checkoutSlug: treatment.checkoutSlug,
  };
}
