// ---------------------------------------------------------------------------
// Questionnaire Type System
// ---------------------------------------------------------------------------

/** Supported question input types */
export type QuestionType =
  | "single" // radio buttons
  | "multi" // checkboxes
  | "text" // free-text input
  | "yes-no" // Yes / No radio
  | "scale" // labeled scale (e.g. Terrible → Excellent)
  | "info"; // read-only informational step (no input)

/** A selectable option within a question */
export interface Option {
  label: string;
  value: string;
  /** If true, selecting this clears all other selections (e.g. "None apply") */
  exclusive?: boolean;
}

/** Condition for branching / triggers */
export type Condition =
  | { type: "equals"; questionId: string; value: string }
  | { type: "includes"; questionId: string; value: string }
  | { type: "notEquals"; questionId: string; value: string }
  | { type: "answered"; questionId: string }
  | { type: "and"; conditions: Condition[] }
  | { type: "or"; conditions: Condition[] }
  | { type: "treatmentInPlan"; treatmentId: string }
  | { type: "sectionActive"; section: string };

/** What happens when a trigger fires */
export type TriggerAction =
  | { type: "suggest"; treatmentId: string; reason: string }
  | { type: "disqualify"; treatmentId: string; reason: string }
  | { type: "flag"; message: string }; // flag for provider review

/** A trigger attached to a question */
export interface Trigger {
  condition: Condition;
  action: TriggerAction;
}

/** A single question in the questionnaire */
export interface Question {
  id: string;
  section: QuestionSection;
  type: QuestionType;
  question: string;
  description?: string;
  options?: Option[];
  required: boolean;
  /** Only show this question if condition is met */
  showIf?: Condition;
  /** Triggers that fire based on the answer */
  triggers?: Trigger[];
  /** Follow-up text prompt when a condition is met (e.g. "If yes, please list") */
  followUp?: { condition: Condition; prompt: string };
  /** Render with enhanced/bold styling for safety warnings */
  critical?: boolean;
}

/** All question sections */
export type QuestionSection =
  | "basics"
  | "goals"
  | "medical-history"
  | "cardiovascular"
  | "ed-sexual-health"
  | "testosterone"
  | "hair-loss"
  | "peptides"
  | "mental-health"
  | "product-config"
  | "review";

/** Section metadata */
export interface SectionMeta {
  id: QuestionSection;
  title: string;
  description?: string;
  /** Condition to show this entire section */
  showIf?: Condition;
}

/** A single answer value */
export type AnswerValue = string | string[];

/** Stored answer for a question */
export interface Answer {
  questionId: string;
  value: AnswerValue;
  followUpText?: string;
}

/** Treatment selection in the plan */
export interface TreatmentSelection {
  treatmentId: string;
  name: string;
  medicalName: string;
  price: string;
  image: string;
  reason: "initial" | "suggested";
  reasonText?: string;
  checkoutSlug: string;
}

/** Full questionnaire state */
export interface QuestionnaireState {
  /** Treatment slug from ?treatment= URL param */
  initialTreatment: string;
  /** Active treatment plan */
  treatmentPlan: TreatmentSelection[];
  /** Treatment IDs the user dismissed ("not interested") */
  dismissed: string[];
  /** Question answers keyed by question ID */
  answers: Record<string, Answer>;
  /** Current step index */
  currentStep: number;
  /** Sections that have been completed */
  completedSections: QuestionSection[];
  /** Active sections (determined by goals + initial treatment) */
  activeSections: QuestionSection[];
  /** Disqualified treatments with reasons */
  disqualifications: Record<string, string>;
}

/** Actions for the questionnaire reducer */
export type QuestionnaireAction =
  | { type: "SET_ANSWER"; questionId: string; value: AnswerValue; followUpText?: string }
  | { type: "NEXT_STEP" }
  | { type: "PREV_STEP" }
  | { type: "GO_TO_STEP"; step: number }
  | { type: "COMPLETE_SECTION"; section: QuestionSection }
  | { type: "SET_ACTIVE_SECTIONS"; sections: QuestionSection[] }
  | { type: "ADD_TREATMENT"; treatment: TreatmentSelection }
  | { type: "REMOVE_TREATMENT"; treatmentId: string }
  | { type: "DISMISS_TREATMENT"; treatmentId: string }
  | { type: "DISQUALIFY"; treatmentId: string; reason: string }
  | { type: "RESET" };
