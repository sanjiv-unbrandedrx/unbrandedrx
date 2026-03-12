"use client";

import { useMemo } from "react";
import { cn } from "@/lib/utils";
import { useQuestionnaire } from "@/lib/questionnaire/context";
import { getVisibleQuestions } from "@/lib/questionnaire/engine";
import { SECTIONS } from "@/lib/questionnaire/questions";
import QuestionStep from "./question-step";
import TreatmentPlanPanel from "./treatment-plan-panel";
import TreatmentSuggestion from "./treatment-suggestion";
import QuestionnaireProgressBar from "./progress-bar";
import ReviewStep from "./review-step";
import ButtonCustom from "@/components/ui/button-custom";
import { FadeIn } from "@/components/ui/animate";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function QuestionnaireShell() {
  const {
    state,
    visibleQuestions,
    triggerResults,
    nextStep,
    prevStep,
    dispatch,
  } = useQuestionnaire();

  const currentQuestion = visibleQuestions[state.currentStep];
  const isFirstStep = state.currentStep === 0;
  const isLastQuestion = state.currentStep >= visibleQuestions.length - 1;
  const isReviewStep = currentQuestion?.section === "review" && isLastQuestion;

  // Check if current question is answered
  const currentAnswer = currentQuestion
    ? state.answers[currentQuestion.id]
    : null;
  const isCurrentAnswered = (() => {
    if (!currentQuestion) return false;
    if (!currentQuestion.required) return true;
    if (!currentAnswer) return false;
    if (Array.isArray(currentAnswer.value))
      return currentAnswer.value.length > 0;
    return currentAnswer.value !== "";
  })();

  // Detect section transitions to show suggestions
  const prevQuestion =
    state.currentStep > 0
      ? visibleQuestions[state.currentStep - 1]
      : null;
  const sectionChanged =
    prevQuestion && currentQuestion
      ? prevQuestion.section !== currentQuestion.section
      : false;

  // Get current section label
  const currentSection = currentQuestion
    ? SECTIONS.find((s) => s.id === currentQuestion.section)
    : null;

  const handleNext = () => {
    // Mark section as complete if we're moving to a new section
    if (currentQuestion && visibleQuestions[state.currentStep + 1]) {
      const nextQ = visibleQuestions[state.currentStep + 1];
      if (nextQ.section !== currentQuestion.section) {
        dispatch({
          type: "COMPLETE_SECTION",
          section: currentQuestion.section,
        });
      }
    }
    // If this is the last question before review, mark all sections complete
    if (isLastQuestion && currentQuestion?.section !== "review") {
      dispatch({
        type: "COMPLETE_SECTION",
        section: currentQuestion!.section,
      });
    }
    nextStep();
  };

  // Show review step instead of regular question for last step
  const showReview =
    state.currentStep >= visibleQuestions.length ||
    (currentQuestion?.section === "review" &&
      currentQuestion?.id === "final-anything-else" &&
      currentAnswer);

  return (
    <div className="flex min-h-[calc(100vh-64px)]">
      {/* Main content area */}
      <div className="flex-1 flex flex-col">
        {/* Progress bar */}
        <div className="border-b border-neutral-100 px-6 py-4 bg-white">
          <div className="max-w-2xl mx-auto">
            <QuestionnaireProgressBar />
          </div>
        </div>

        {/* Question area */}
        <div className="flex-1 px-6 py-8 overflow-y-auto pb-32 lg:pb-8">
          <div className="max-w-2xl mx-auto space-y-8">
            {/* Section header on section change */}
            {currentSection && sectionChanged && (
              <FadeIn variant="fadeUp" key={`section-${currentSection.id}`}>
                <div className="pb-4 border-b border-neutral-100">
                  <h3 className="text-sm uppercase tracking-wider font-medium text-muted-foreground">
                    {currentSection.title}
                  </h3>
                  {currentSection.description && (
                    <p className="text-sm text-muted-foreground mt-1">
                      {currentSection.description}
                    </p>
                  )}
                </div>
              </FadeIn>
            )}

            {/* Treatment suggestions (show between sections) */}
            {sectionChanged &&
              triggerResults.suggestions.map((s) => (
                <TreatmentSuggestion
                  key={s.treatmentId}
                  treatmentId={s.treatmentId}
                  reason={s.reason}
                />
              ))}

            {/* Current question */}
            {currentQuestion && (
              <FadeIn variant="fadeUp" key={currentQuestion.id}>
                {currentQuestion.id === "final-anything-else" &&
                currentAnswer ? (
                  <ReviewStep />
                ) : (
                  <QuestionStep question={currentQuestion} />
                )}
              </FadeIn>
            )}

            {/* Show review when past last question */}
            {state.currentStep >= visibleQuestions.length && <ReviewStep />}
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="border-t border-neutral-100 px-6 py-4 bg-white">
          <div className="max-w-2xl mx-auto flex items-center justify-between">
            <ButtonCustom
              variant="outline"
              size="base"
              onClick={prevStep}
              disabled={isFirstStep}
              className={cn(isFirstStep && "opacity-50 cursor-not-allowed")}
            >
              <span className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back
              </span>
            </ButtonCustom>

            {state.currentStep < visibleQuestions.length && (
              <ButtonCustom
                variant="filled"
                size="base"
                onClick={handleNext}
                disabled={!isCurrentAnswered && currentQuestion?.required}
                className={cn(
                  !isCurrentAnswered &&
                    currentQuestion?.required &&
                    "opacity-50 cursor-not-allowed",
                )}
              >
                <span className="flex items-center gap-2">
                  {isLastQuestion ? "Review" : "Continue"}
                  <ArrowRight className="h-4 w-4" />
                </span>
              </ButtonCustom>
            )}
          </div>
        </div>
      </div>

      {/* Treatment Plan sidebar */}
      <TreatmentPlanPanel />
    </div>
  );
}
