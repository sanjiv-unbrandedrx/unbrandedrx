"use client";

import Image from "next/image";
import { useQuestionnaire } from "@/lib/questionnaire/context";
import { QUESTIONS } from "@/lib/questionnaire/questions";
import { formatPrice } from "@/lib/component-utils";
import ButtonCustom from "@/components/ui/button-custom";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/animate";
import { Pencil } from "lucide-react";

export default function ReviewStep() {
  const { state, visibleQuestions, dispatch } = useQuestionnaire();

  const handleSubmit = () => {
    // Build checkout URL with treatment slugs
    const treatmentSlugs = state.treatmentPlan
      .map((t) => t.checkoutSlug)
      .join(",");
    const url = `https://checkout.unbrandedrx.co/intake?treatments=${treatmentSlugs}`;
    window.location.href = url;
  };

  // Group answered questions by section
  const answeredBySection: Record<string, typeof visibleQuestions> = {};
  for (const q of visibleQuestions) {
    if (state.answers[q.id] && q.type !== "info") {
      if (!answeredBySection[q.section]) {
        answeredBySection[q.section] = [];
      }
      answeredBySection[q.section].push(q);
    }
  }

  return (
    <div className="space-y-5 md:space-y-8">
      <FadeIn>
        <div>
          <h2 className="text-2xl md:text-4xl font-semibold font-title tracking-tight">
            Review Your Visit
          </h2>
          <p className="text-base md:text-xl text-muted-foreground mt-2 md:mt-3">
            Please review your treatment plan and responses before submitting
            for provider review.
          </p>
        </div>
      </FadeIn>

      {/* Treatment Plan Summary */}
      <FadeIn delay={0.1}>
        <div className="rounded-2xl border border-neutral-200 overflow-hidden">
          <div className="bg-zinc-50 px-4 py-3 md:px-6 md:py-4 border-b border-neutral-200">
            <h3 className="font-title font-semibold text-base md:text-lg">Your Treatment Plan</h3>
          </div>
          <div className="p-4 md:p-6 space-y-4">
            {state.treatmentPlan.map((t) => (
              <div key={t.treatmentId} className="flex items-center gap-4 md:gap-5">
                <div className="relative h-14 w-14 md:h-16 md:w-16 shrink-0 rounded-lg overflow-hidden bg-neutral-100">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-base md:text-lg font-semibold font-title">{t.name}</p>
                  <p className="text-sm md:text-base text-muted-foreground">
                    {t.medicalName}
                  </p>
                </div>
                <p className="text-base md:text-lg font-semibold">
                  {formatPrice(t.price)}
                  <span className="font-normal text-muted-foreground">
                    /mo
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* Answer Summary */}
      <FadeIn delay={0.2}>
        <div className="rounded-2xl border border-neutral-200 overflow-hidden">
          <div className="bg-zinc-50 px-4 py-3 md:px-6 md:py-4 border-b border-neutral-200">
            <h3 className="font-title font-semibold text-base md:text-lg">Your Responses</h3>
          </div>
          <div className="divide-y divide-neutral-100">
            {Object.entries(answeredBySection).map(
              ([section, questions]) => (
                <div key={section} className="p-4 md:p-6 space-y-4 md:space-y-5">
                  <h4 className="text-sm md:text-base uppercase tracking-wider font-medium text-muted-foreground">
                    {section.replace(/-/g, " ")}
                  </h4>
                  {questions.map((q) => {
                    const answer = state.answers[q.id];
                    if (!answer) return null;

                    const displayValue = Array.isArray(answer.value)
                      ? answer.value
                          .map(
                            (v) =>
                              q.options?.find((o) => o.value === v)?.label ??
                              v,
                          )
                          .join(", ")
                      : q.options?.find((o) => o.value === answer.value)
                          ?.label ?? answer.value;

                    const questionIndex = visibleQuestions.findIndex(
                      (vq) => vq.id === q.id,
                    );

                    return (
                      <div key={q.id} className="group flex items-start justify-between gap-4">
                        <div className="space-y-1 flex-1">
                          <p className="text-sm md:text-base text-muted-foreground">
                            {q.question.length > 100
                              ? q.question.slice(0, 100) + "..."
                              : q.question}
                          </p>
                          <p className="text-base md:text-lg font-medium">{displayValue}</p>
                          {answer.followUpText && (
                            <p className="text-sm md:text-base text-muted-foreground italic">
                              &ldquo;{answer.followUpText}&rdquo;
                            </p>
                          )}
                        </div>
                        {questionIndex >= 0 && (
                          <button
                            onClick={() =>
                              dispatch({ type: "GO_TO_STEP", step: questionIndex })
                            }
                            className="shrink-0 p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-zinc-100 opacity-0 group-hover:opacity-100 transition-all"
                            title="Edit this answer"
                          >
                            <Pencil className="h-4 w-4" />
                          </button>
                        )}
                      </div>
                    );
                  })}
                </div>
              ),
            )}
          </div>
        </div>
      </FadeIn>

      {/* Submit */}
      <FadeIn delay={0.3}>
        <div className="rounded-2xl border border-neutral-200 bg-zinc-50 p-5 md:p-8 text-center space-y-4 md:space-y-5">
          <p className="text-base md:text-lg text-muted-foreground">
            Your provider will review your answers and determine the right
            treatment plan for you. You may be contacted for additional
            information.
          </p>
          <ButtonCustom
            variant="filled"
            size="xl"
            fullWidth
            onClick={handleSubmit}
          >
            Submit to Provider for Review
          </ButtonCustom>
        </div>
      </FadeIn>
    </div>
  );
}
