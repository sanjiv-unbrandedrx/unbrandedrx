"use client";

import { useState, useMemo, useCallback } from "react";
import { cn } from "@/lib/utils";
import { useQuestionnaire } from "@/lib/questionnaire/context";
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

  // Track which suggestions have been shown (so we only show new ones)
  const [shownSuggestions, setShownSuggestions] = useState<Set<string>>(
    new Set(),
  );
  // Are we currently showing a suggestion interstitial?
  const [showingInterstitial, setShowingInterstitial] = useState(false);

  const currentQuestion = visibleQuestions[state.currentStep];
  const isFirstStep = state.currentStep === 0 && !showingInterstitial;

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

  // Find pending suggestions (new ones that haven't been shown yet)
  const pendingSuggestions = useMemo(() => {
    return triggerResults.suggestions.filter(
      (s) => !shownSuggestions.has(s.treatmentId),
    );
  }, [triggerResults.suggestions, shownSuggestions]);

  // Check if next question is in a different section
  const nextQuestion =
    state.currentStep < visibleQuestions.length - 1
      ? visibleQuestions[state.currentStep + 1]
      : null;
  const isAtSectionBoundary =
    currentQuestion && nextQuestion
      ? currentQuestion.section !== nextQuestion.section
      : currentQuestion?.section !== "review" &&
        state.currentStep === visibleQuestions.length - 1;

  // Get current section label
  const currentSection = currentQuestion
    ? SECTIONS.find((s) => s.id === currentQuestion.section)
    : null;

  // Detect section change for header display
  const prevQuestion =
    state.currentStep > 0
      ? visibleQuestions[state.currentStep - 1]
      : null;
  const sectionChanged =
    prevQuestion && currentQuestion
      ? prevQuestion.section !== currentQuestion.section
      : false;

  const handleNext = useCallback(() => {
    // If we're showing the interstitial, close it and proceed
    if (showingInterstitial) {
      setShowingInterstitial(false);
      // Mark suggestions as shown
      setShownSuggestions((prev) => {
        const next = new Set(prev);
        for (const s of pendingSuggestions) {
          next.add(s.treatmentId);
        }
        return next;
      });
      nextStep();
      return;
    }

    // Mark section as complete if moving to a new section
    if (currentQuestion && nextQuestion) {
      if (nextQuestion.section !== currentQuestion.section) {
        dispatch({
          type: "COMPLETE_SECTION",
          section: currentQuestion.section,
        });
      }
    }
    // If last question, mark section complete
    if (
      state.currentStep >= visibleQuestions.length - 1 &&
      currentQuestion?.section !== "review"
    ) {
      dispatch({
        type: "COMPLETE_SECTION",
        section: currentQuestion!.section,
      });
    }

    // If at a section boundary and there are pending suggestions, show interstitial
    if (isAtSectionBoundary && pendingSuggestions.length > 0) {
      setShowingInterstitial(true);
      return;
    }

    nextStep();
  }, [
    showingInterstitial,
    currentQuestion,
    nextQuestion,
    state.currentStep,
    visibleQuestions.length,
    isAtSectionBoundary,
    pendingSuggestions,
    dispatch,
    nextStep,
  ]);

  const handleBack = useCallback(() => {
    if (showingInterstitial) {
      setShowingInterstitial(false);
      return;
    }
    prevStep();
  }, [showingInterstitial, prevStep]);

  const isLastQuestion = state.currentStep >= visibleQuestions.length - 1;
  const isPastQuestions = state.currentStep >= visibleQuestions.length;

  return (
    <div className="flex min-h-[calc(100vh-64px)]">
      {/* Main content area */}
      <div className="flex-1 flex flex-col">
        {/* Progress bar */}
        <div className="border-b border-neutral-100 px-6 py-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <QuestionnaireProgressBar />
          </div>
        </div>

        {/* Question area */}
        <div className="flex-1 px-6 py-10 overflow-y-auto pb-32 lg:pb-10">
          <div className="max-w-3xl mx-auto space-y-8">
            {showingInterstitial ? (
              /* ── Suggestion Interstitial ─────────────────────────── */
              <FadeIn variant="fadeUp" key="suggestions-interstitial">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-4xl font-semibold font-title tracking-tight">
                      Based on your answers...
                    </h2>
                    <p className="text-xl text-muted-foreground mt-3">
                      Your provider may also recommend the following treatments.
                      You can add them to your plan or skip.
                    </p>
                  </div>

                  <div className="space-y-5">
                    {pendingSuggestions.map((s) => (
                      <TreatmentSuggestion
                        key={s.treatmentId}
                        treatmentId={s.treatmentId}
                        reason={s.reason}
                      />
                    ))}
                  </div>
                </div>
              </FadeIn>
            ) : isPastQuestions ? (
              /* ── Review (past all questions) ─────────────────────── */
              <ReviewStep />
            ) : currentQuestion ? (
              /* ── Regular Question ─────────────────────────────────── */
              <>
                {/* Section header on section change */}
                {currentSection && sectionChanged && (
                  <FadeIn
                    variant="fadeUp"
                    key={`section-${currentSection.id}`}
                  >
                    <div className="pb-4 border-b border-neutral-100">
                      <h3 className="text-lg uppercase tracking-wider font-medium text-muted-foreground">
                        {currentSection.title}
                      </h3>
                      {currentSection.description && (
                        <p className="text-lg text-muted-foreground mt-1">
                          {currentSection.description}
                        </p>
                      )}
                    </div>
                  </FadeIn>
                )}

                {/* Current question */}
                <FadeIn variant="fadeUp" key={currentQuestion.id}>
                  {currentQuestion.id === "final-anything-else" &&
                  currentAnswer ? (
                    <ReviewStep />
                  ) : (
                    <QuestionStep question={currentQuestion} onAutoAdvance={handleNext} />
                  )}
                </FadeIn>
              </>
            ) : null}
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="border-t border-neutral-100 px-6 py-5 bg-white">
          <div className="max-w-3xl mx-auto flex items-center justify-between">
            <ButtonCustom
              variant="outline"
              size="lg"
              onClick={handleBack}
              disabled={isFirstStep}
              className={cn(isFirstStep && "opacity-50 cursor-not-allowed")}
            >
              <span className="flex items-center gap-2">
                <ArrowLeft className="h-5 w-5" />
                Back
              </span>
            </ButtonCustom>

            {!isPastQuestions && (
              <ButtonCustom
                variant="filled"
                size="lg"
                onClick={handleNext}
                disabled={
                  !showingInterstitial &&
                  !isCurrentAnswered &&
                  currentQuestion?.required
                }
                className={cn(
                  !showingInterstitial &&
                    !isCurrentAnswered &&
                    currentQuestion?.required &&
                    "opacity-50 cursor-not-allowed",
                )}
              >
                <span className="flex items-center gap-2">
                  {showingInterstitial
                    ? "Continue"
                    : isLastQuestion
                      ? "Review"
                      : "Continue"}
                  <ArrowRight className="h-5 w-5" />
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
