"use client";

import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";
import { useQuestionnaire } from "@/lib/questionnaire/context";

export default function QuestionnaireProgressBar() {
  const { progress, visibleSections, state } = useQuestionnaire();

  // Find the current section based on the current step
  const currentSectionIndex = (() => {
    let questionIndex = 0;
    for (let i = 0; i < visibleSections.length; i++) {
      const section = visibleSections[i];
      const sectionQuestions = state.activeSections.includes(section.id);
      if (sectionQuestions && questionIndex >= state.currentStep) {
        return i;
      }
      questionIndex++;
    }
    return visibleSections.length - 1;
  })();

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-base text-muted-foreground font-medium">
          {progress.percentage}% complete
        </span>
        <span className="text-base text-muted-foreground">
          {progress.current} of {progress.total} questions
        </span>
      </div>
      <Progress
        value={progress.percentage}
        className="h-3"
        indicatorClassName="bg-zinc-800"
      />

      {/* Section pills */}
      <div className="flex flex-wrap gap-2">
        {visibleSections.map((section, i) => (
          <span
            key={section.id}
            className={cn(
              "text-sm px-3 py-1 rounded-full font-medium transition-colors",
              state.completedSections.includes(section.id)
                ? "bg-zinc-800 text-white"
                : i === currentSectionIndex
                  ? "bg-zinc-200 text-zinc-700"
                  : "bg-neutral-100 text-neutral-400",
            )}
          >
            {section.title}
          </span>
        ))}
      </div>
    </div>
  );
}
