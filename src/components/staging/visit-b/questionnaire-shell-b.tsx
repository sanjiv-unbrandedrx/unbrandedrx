"use client";

import { useState, useMemo, useCallback, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useQuestionnaire } from "@/lib/questionnaire/context";
import { SECTIONS } from "@/lib/questionnaire/questions";
import { getTreatmentById } from "@/lib/questionnaire/treatments";
import QuestionStep from "@/components/staging/visit/question-step";
import SmartSidebar from "./smart-sidebar";
import TreatmentSuggestion from "@/components/staging/visit/treatment-suggestion";
import QuestionnaireProgressBar from "@/components/staging/visit/progress-bar";
import ReviewStep from "@/components/staging/visit/review-step";
import ProductSelectionStep from "./product-selection-step";
import BundleStep from "./bundle-step";
import ButtonCustom from "@/components/ui/button-custom";
import EmailCaptureWidget from "@/components/staging/visit/email-capture-widget";
import { FadeIn } from "@/components/ui/animate";
import { ArrowLeft, ArrowRight } from "lucide-react";

// ── Flow Phases ─────────────────────────────────────────────────────────
// The B variant has explicit phases:
// 1. "product-selection" — replaces the goals step with a product catalog
// 2. "questions"         — screening questions (skips welcome + goals)
// 3. "bundle"            — day supply + bundle pricing
// 4. "review"            — final review + submit

type FlowPhase = "product-selection" | "questions" | "bundle" | "review";

export default function QuestionnaireShellB() {
  const {
    state,
    visibleQuestions,
    triggerResults,
    nextStep,
    prevStep,
    setAnswer,
    dispatch,
  } = useQuestionnaire();

  const [phase, setPhase] = useState<FlowPhase>("product-selection");
  const [shownSuggestions, setShownSuggestions] = useState<Set<string>>(
    new Set(),
  );
  const [showingInterstitial, setShowingInterstitial] = useState(false);

  // Questions for the B flow: skip welcome and goals (handled by product selection)
  const flowQuestions = useMemo(
    () =>
      visibleQuestions.filter(
        (q) => q.id !== "welcome" && q.id !== "goals",
      ),
    [visibleQuestions],
  );

  // Track question index within flowQuestions (separate from state.currentStep)
  const [questionIndex, setQuestionIndex] = useState(0);
  const currentQuestion = flowQuestions[questionIndex];

  const isFirstQuestion = questionIndex === 0;
  const isLastQuestion = questionIndex >= flowQuestions.length - 1;

  // Check if current question is answered
  const currentAnswer = currentQuestion
    ? state.answers[currentQuestion.id]
    : null;
  const isCurrentAnswered = (() => {
    if (!currentQuestion) return false;
    if (!currentQuestion.required) return true;
    if (!currentAnswer) return false;
    // Consent type: all options must be checked
    if (currentQuestion.type === "consent" && Array.isArray(currentAnswer.value)) {
      const requiredCount = currentQuestion.options?.length ?? 0;
      return currentAnswer.value.length === requiredCount;
    }
    if (Array.isArray(currentAnswer.value))
      return currentAnswer.value.length > 0;
    return currentAnswer.value !== "";
  })();

  // Pending suggestions
  const pendingSuggestions = useMemo(
    () =>
      triggerResults.suggestions.filter(
        (s) => !shownSuggestions.has(s.treatmentId),
      ),
    [triggerResults.suggestions, shownSuggestions],
  );

  // Section boundary detection
  const nextFlowQuestion =
    questionIndex < flowQuestions.length - 1
      ? flowQuestions[questionIndex + 1]
      : null;
  const isAtSectionBoundary =
    currentQuestion && nextFlowQuestion
      ? currentQuestion.section !== nextFlowQuestion.section
      : currentQuestion?.section !== "review" &&
        questionIndex === flowQuestions.length - 1;

  const currentSection = currentQuestion
    ? SECTIONS.find((s) => s.id === currentQuestion.section)
    : null;
  const prevFlowQuestion =
    questionIndex > 0 ? flowQuestions[questionIndex - 1] : null;
  const sectionChanged =
    prevFlowQuestion && currentQuestion
      ? prevFlowQuestion.section !== currentQuestion.section
      : false;

  // Auto-close empty interstitial
  useEffect(() => {
    if (showingInterstitial && pendingSuggestions.length === 0) {
      setShowingInterstitial(false);
      handleQuestionNext();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showingInterstitial, pendingSuggestions.length]);

  // Sync goals when entering questions phase based on selected treatments
  const syncGoalsFromPlan = useCallback(() => {
    const goalMap: Record<string, string[]> = {
      ed: ["sexual-performance"],
      testosterone: ["energy", "muscle"],
      hair: ["hair"],
      peptides: ["longevity", "wellness"],
    };

    const goals = new Set<string>();
    for (const t of state.treatmentPlan) {
      const treatment = getTreatmentById(t.treatmentId);
      if (treatment && goalMap[treatment.category]) {
        for (const g of goalMap[treatment.category]) {
          goals.add(g);
        }
      }
    }

    setAnswer("goals", Array.from(goals));
    // Also auto-set the welcome answer
    if (!state.answers["welcome"]) {
      setAnswer("welcome", "acknowledged");
    }
  }, [state.treatmentPlan, state.answers, setAnswer]);

  // ── Phase Navigation ────────────────────────────────────────────────

  const handleProductSelectionContinue = useCallback(() => {
    if (state.treatmentPlan.length === 0) return;
    syncGoalsFromPlan();
    setQuestionIndex(0);
    setPhase("questions");
  }, [state.treatmentPlan.length, syncGoalsFromPlan]);

  const handleQuestionNext = useCallback(() => {
    if (showingInterstitial) {
      setShowingInterstitial(false);
      setShownSuggestions((prev) => {
        const next = new Set(prev);
        for (const s of pendingSuggestions) {
          next.add(s.treatmentId);
        }
        return next;
      });
      if (!isLastQuestion) {
        setQuestionIndex((i) => i + 1);
      } else {
        setPhase("bundle");
      }
      return;
    }

    // Mark section complete if at boundary
    if (currentQuestion && nextFlowQuestion) {
      if (nextFlowQuestion.section !== currentQuestion.section) {
        dispatch({
          type: "COMPLETE_SECTION",
          section: currentQuestion.section,
        });
      }
    }
    if (isLastQuestion && currentQuestion?.section !== "review") {
      dispatch({
        type: "COMPLETE_SECTION",
        section: currentQuestion!.section,
      });
    }

    // Check for suggestions at section boundary
    if (isAtSectionBoundary && pendingSuggestions.length > 0) {
      setShowingInterstitial(true);
      return;
    }

    if (isLastQuestion) {
      setPhase("bundle");
    } else {
      setQuestionIndex((i) => i + 1);
    }
  }, [
    showingInterstitial,
    currentQuestion,
    nextFlowQuestion,
    isLastQuestion,
    isAtSectionBoundary,
    pendingSuggestions,
    dispatch,
  ]);

  const handleQuestionBack = useCallback(() => {
    if (showingInterstitial) {
      setShowingInterstitial(false);
      return;
    }
    if (isFirstQuestion) {
      setPhase("product-selection");
    } else {
      setQuestionIndex((i) => i - 1);
    }
  }, [showingInterstitial, isFirstQuestion]);

  const handleBundleContinue = useCallback(() => {
    setPhase("review");
  }, []);

  const handleBundleBack = useCallback(() => {
    setQuestionIndex(flowQuestions.length - 1);
    setPhase("questions");
  }, [flowQuestions.length]);

  const handleReviewBack = useCallback(() => {
    setPhase("bundle");
  }, []);

  // ── Rendering ──────────────────────────────────────────────────────

  // Keep state.currentStep in sync for the progress bar
  useEffect(() => {
    if (phase === "questions") {
      // Map questionIndex to actual visibleQuestions step
      const actualQuestion = flowQuestions[questionIndex];
      if (actualQuestion) {
        const realIndex = visibleQuestions.findIndex(
          (q) => q.id === actualQuestion.id,
        );
        if (realIndex >= 0 && realIndex !== state.currentStep) {
          dispatch({ type: "GO_TO_STEP", step: realIndex });
        }
      }
    } else if (phase === "bundle" || phase === "review") {
      // Show as complete
      if (state.currentStep !== visibleQuestions.length) {
        dispatch({ type: "GO_TO_STEP", step: visibleQuestions.length });
      }
    }
  }, [phase, questionIndex, flowQuestions, visibleQuestions, state.currentStep, dispatch]);

  return (
    <div className="flex flex-1 overflow-hidden">
      {/* Main content area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Progress bar — show on all phases except product selection */}
        {phase !== "product-selection" && (
          <div className="border-b border-neutral-100 px-4 py-3 md:px-6 md:py-4 bg-white">
            <div className="max-w-3xl mx-auto">
              <QuestionnaireProgressBar />
            </div>
          </div>
        )}

        {/* Content area */}
        <div className="flex-1 px-4 py-6 md:px-6 md:py-10 overflow-y-auto">
          <div className="max-w-3xl mx-auto space-y-5 md:space-y-8">
            {phase === "product-selection" && (
              <FadeIn variant="fadeUp" key="product-selection">
                <ProductSelectionStep />
              </FadeIn>
            )}

            {phase === "questions" && showingInterstitial && (
              <FadeIn variant="fadeUp" key="suggestions-interstitial">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl md:text-4xl font-semibold font-title tracking-tight">
                      Based on your answers...
                    </h2>
                    <p className="text-base md:text-xl text-muted-foreground mt-2 md:mt-3">
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
            )}

            {phase === "questions" &&
              !showingInterstitial &&
              currentQuestion && (
                <>
                  {currentSection && sectionChanged && (
                    <FadeIn
                      variant="fadeUp"
                      key={`section-${currentSection.id}`}
                    >
                      <div className="pb-3 md:pb-4 border-b border-neutral-100">
                        <h3 className="text-sm md:text-lg uppercase tracking-wider font-medium text-muted-foreground">
                          {currentSection.title}
                        </h3>
                      </div>
                    </FadeIn>
                  )}
                  <FadeIn variant="fadeUp" key={currentQuestion.id}>
                    <QuestionStep
                      question={currentQuestion}
                      onAutoAdvance={handleQuestionNext}
                    />
                  </FadeIn>
                </>
              )}

            {phase === "bundle" && (
              <FadeIn variant="fadeUp" key="bundle-step">
                <BundleStep onContinue={handleBundleContinue} />
              </FadeIn>
            )}

            {phase === "review" && (
              <FadeIn variant="fadeUp" key="review-step">
                <ReviewStep />
              </FadeIn>
            )}
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="border-t border-neutral-100 px-4 py-4 pb-6 md:px-6 md:py-5 md:pb-8 bg-white">
          <div className="max-w-3xl mx-auto flex items-center justify-between">
            {/* Back button */}
            {phase === "product-selection" ? (
              <div /> /* no back on first screen */
            ) : (
              <ButtonCustom
                variant="outline"
                size="lg"
                onClick={
                  phase === "questions"
                    ? handleQuestionBack
                    : phase === "bundle"
                      ? handleBundleBack
                      : handleReviewBack
                }
              >
                <span className="flex items-center gap-2">
                  <ArrowLeft className="h-5 w-5" />
                  Back
                </span>
              </ButtonCustom>
            )}

            {/* Forward button */}
            {phase === "product-selection" && (
              <ButtonCustom
                variant="filled"
                size="lg"
                onClick={handleProductSelectionContinue}
                disabled={state.treatmentPlan.length === 0}
                className={cn(
                  state.treatmentPlan.length === 0 &&
                    "opacity-50 cursor-not-allowed",
                )}
              >
                <span className="flex items-center gap-2">
                  Continue
                  <ArrowRight className="h-5 w-5" />
                </span>
              </ButtonCustom>
            )}

            {phase === "questions" && (
              <ButtonCustom
                variant="filled"
                size="lg"
                onClick={handleQuestionNext}
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
                      ? "Continue"
                      : "Continue"}
                  <ArrowRight className="h-5 w-5" />
                </span>
              </ButtonCustom>
            )}

            {phase === "bundle" && (
              <ButtonCustom
                variant="filled"
                size="lg"
                onClick={handleBundleContinue}
              >
                <span className="flex items-center gap-2">
                  Review
                  <ArrowRight className="h-5 w-5" />
                </span>
              </ButtonCustom>
            )}

            {/* No forward button on review — submit is inside ReviewStep */}
          </div>
        </div>
      </div>

      {/* Smart sidebar */}
      <SmartSidebar triggerResults={triggerResults} />

      {/* Email capture */}
      <EmailCaptureWidget show={phase !== "product-selection" && !!state.answers["basics-sex"]} />
    </div>
  );
}
