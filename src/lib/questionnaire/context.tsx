"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useReducer,
  type ReactNode,
} from "react";
import type {
  Answer,
  AnswerValue,
  QuestionnaireAction,
  QuestionnaireState,
  QuestionSection,
  TreatmentSelection,
} from "./types";
import {
  computeActiveSections,
  createTreatmentSelection,
  getVisibleQuestions,
  getVisibleSections,
  calculateProgress,
  processAllTriggers,
} from "./engine";

// ── Initial State ─────────────────────────────────────────────────────────

function createInitialState(initialTreatment: string): QuestionnaireState {
  const treatmentPlan: TreatmentSelection[] = [];
  const selection = createTreatmentSelection(initialTreatment, "initial");
  if (selection) {
    treatmentPlan.push(selection);
  }

  return {
    initialTreatment,
    treatmentPlan,
    dismissed: [],
    answers: {},
    currentStep: 0,
    completedSections: [],
    activeSections: ["basics", "medical-history", "review"],
    disqualifications: {},
  };
}

// ── Reducer ───────────────────────────────────────────────────────────────

function questionnaireReducer(
  state: QuestionnaireState,
  action: QuestionnaireAction,
): QuestionnaireState {
  switch (action.type) {
    case "SET_ANSWER": {
      const answer: Answer = {
        questionId: action.questionId,
        value: action.value,
        followUpText: action.followUpText,
      };
      const newAnswers = { ...state.answers, [action.questionId]: answer };
      const newState = { ...state, answers: newAnswers };

      // Recompute active sections when goals are answered
      if (action.questionId === "goals" && Array.isArray(action.value)) {
        const activeSections = computeActiveSections(
          state.initialTreatment,
          action.value,
          state.treatmentPlan,
        );
        return { ...newState, activeSections: activeSections };
      }

      return newState;
    }

    case "NEXT_STEP":
      return { ...state, currentStep: state.currentStep + 1 };

    case "PREV_STEP":
      return { ...state, currentStep: Math.max(0, state.currentStep - 1) };

    case "GO_TO_STEP":
      return { ...state, currentStep: action.step };

    case "COMPLETE_SECTION":
      if (state.completedSections.includes(action.section)) return state;
      return {
        ...state,
        completedSections: [...state.completedSections, action.section],
      };

    case "SET_ACTIVE_SECTIONS":
      return { ...state, activeSections: action.sections };

    case "ADD_TREATMENT": {
      if (state.treatmentPlan.some((t) => t.treatmentId === action.treatment.treatmentId)) {
        return state;
      }
      return {
        ...state,
        treatmentPlan: [...state.treatmentPlan, action.treatment],
        dismissed: state.dismissed.filter(
          (id) => id !== action.treatment.treatmentId,
        ),
      };
    }

    case "REMOVE_TREATMENT":
      return {
        ...state,
        treatmentPlan: state.treatmentPlan.filter(
          (t) => t.treatmentId !== action.treatmentId,
        ),
      };

    case "DISMISS_TREATMENT":
      return {
        ...state,
        dismissed: [...state.dismissed, action.treatmentId],
        treatmentPlan: state.treatmentPlan.filter(
          (t) => t.treatmentId !== action.treatmentId,
        ),
      };

    case "DISQUALIFY": {
      const newDQ = { ...state.disqualifications };
      newDQ[action.treatmentId] = action.reason;
      return {
        ...state,
        disqualifications: newDQ,
        treatmentPlan: state.treatmentPlan.filter(
          (t) => t.treatmentId !== action.treatmentId,
        ),
      };
    }

    case "RESET":
      return createInitialState(state.initialTreatment);

    default:
      return state;
  }
}

// ── Context ───────────────────────────────────────────────────────────────

interface QuestionnaireContextValue {
  state: QuestionnaireState;
  dispatch: React.Dispatch<QuestionnaireAction>;

  // Derived helpers
  visibleQuestions: ReturnType<typeof getVisibleQuestions>;
  visibleSections: ReturnType<typeof getVisibleSections>;
  progress: ReturnType<typeof calculateProgress>;
  triggerResults: ReturnType<typeof processAllTriggers>;

  // Action helpers
  setAnswer: (
    questionId: string,
    value: AnswerValue,
    followUpText?: string,
  ) => void;
  nextStep: () => void;
  prevStep: () => void;
  addTreatment: (treatmentId: string, reason: string) => void;
  removeTreatment: (treatmentId: string) => void;
  dismissTreatment: (treatmentId: string) => void;
}

const QuestionnaireContext = createContext<QuestionnaireContextValue | null>(
  null,
);

// ── Provider ──────────────────────────────────────────────────────────────

interface QuestionnaireProviderProps {
  initialTreatment: string;
  children: ReactNode;
}

export function QuestionnaireProvider({
  initialTreatment,
  children,
}: QuestionnaireProviderProps) {
  const [state, dispatch] = useReducer(
    questionnaireReducer,
    initialTreatment,
    createInitialState,
  );

  const visibleQuestions = useMemo(
    () => getVisibleQuestions(state),
    [state],
  );
  const visibleSections = useMemo(
    () => getVisibleSections(state),
    [state],
  );
  const progress = useMemo(() => calculateProgress(state), [state]);
  const triggerResults = useMemo(() => processAllTriggers(state), [state]);

  const setAnswer = useCallback(
    (questionId: string, value: AnswerValue, followUpText?: string) => {
      dispatch({ type: "SET_ANSWER", questionId, value, followUpText });
    },
    [],
  );

  const nextStep = useCallback(() => dispatch({ type: "NEXT_STEP" }), []);
  const prevStep = useCallback(() => dispatch({ type: "PREV_STEP" }), []);

  const addTreatment = useCallback(
    (treatmentId: string, reason: string) => {
      const selection = createTreatmentSelection(
        treatmentId,
        "suggested",
        reason,
      );
      if (selection) {
        dispatch({ type: "ADD_TREATMENT", treatment: selection });
      }
    },
    [],
  );

  const removeTreatment = useCallback((treatmentId: string) => {
    dispatch({ type: "REMOVE_TREATMENT", treatmentId });
  }, []);

  const dismissTreatment = useCallback((treatmentId: string) => {
    dispatch({ type: "DISMISS_TREATMENT", treatmentId });
  }, []);

  const value = useMemo(
    () => ({
      state,
      dispatch,
      visibleQuestions,
      visibleSections,
      progress,
      triggerResults,
      setAnswer,
      nextStep,
      prevStep,
      addTreatment,
      removeTreatment,
      dismissTreatment,
    }),
    [
      state,
      visibleQuestions,
      visibleSections,
      progress,
      triggerResults,
      setAnswer,
      nextStep,
      prevStep,
      addTreatment,
      removeTreatment,
      dismissTreatment,
    ],
  );

  return (
    <QuestionnaireContext.Provider value={value}>
      {children}
    </QuestionnaireContext.Provider>
  );
}

// ── Hook ──────────────────────────────────────────────────────────────────

export function useQuestionnaire() {
  const ctx = useContext(QuestionnaireContext);
  if (!ctx) {
    throw new Error(
      "useQuestionnaire must be used within a QuestionnaireProvider",
    );
  }
  return ctx;
}
