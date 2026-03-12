"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import type { Question, AnswerValue } from "@/lib/questionnaire/types";
import { useQuestionnaire } from "@/lib/questionnaire/context";
import { evaluateCondition } from "@/lib/questionnaire/engine";

interface QuestionStepProps {
  question: Question;
  onAutoAdvance?: () => void;
}

export default function QuestionStep({ question, onAutoAdvance }: QuestionStepProps) {
  const { state, setAnswer } = useQuestionnaire();
  const existingAnswer = state.answers[question.id];

  const [selectedValue, setSelectedValue] = useState<AnswerValue>(
    existingAnswer?.value ?? (question.type === "multi" ? [] : ""),
  );
  const [followUpText, setFollowUpText] = useState(
    existingAnswer?.followUpText ?? "",
  );

  // Sync from state when question changes
  useEffect(() => {
    const answer = state.answers[question.id];
    setSelectedValue(answer?.value ?? (question.type === "multi" ? [] : ""));
    setFollowUpText(answer?.followUpText ?? "");
  }, [question.id, state.answers, question.type]);

  // Persist answer on change
  useEffect(() => {
    if (
      selectedValue === "" ||
      (Array.isArray(selectedValue) && selectedValue.length === 0)
    ) {
      return;
    }
    setAnswer(question.id, selectedValue, followUpText || undefined);
  }, [selectedValue, followUpText, question.id, setAnswer]);

  // Check if selecting a value would trigger a follow-up
  const wouldTriggerFollowUp = (value: string) => {
    if (!question.followUp) return false;
    return evaluateCondition(question.followUp.condition, {
      ...state,
      answers: {
        ...state.answers,
        [question.id]: { questionId: question.id, value, followUpText: "" },
      },
    });
  };

  // Auto-advance for single-select questions (radio buttons)
  const handleRadioSelect = (value: string) => {
    setSelectedValue(value);
    setAnswer(question.id, value, followUpText || undefined);

    // Auto-advance if: single-select type, no follow-up triggered, and callback provided
    const isSingleSelect =
      question.type === "single" ||
      question.type === "yes-no" ||
      question.type === "scale";

    if (isSingleSelect && onAutoAdvance && !wouldTriggerFollowUp(value)) {
      // Small delay so the user sees their selection highlight
      setTimeout(() => onAutoAdvance(), 300);
    }
  };

  // Check if follow-up should show
  const showFollowUp =
    question.followUp &&
    evaluateCondition(question.followUp.condition, {
      ...state,
      answers: {
        ...state.answers,
        [question.id]: {
          questionId: question.id,
          value: selectedValue,
          followUpText,
        },
      },
    });

  return (
    <div className="space-y-6">
      {/* Question text */}
      <div>
        <h2
          className={cn(
            "text-xl font-semibold font-title tracking-tight text-foreground",
            question.critical &&
              "text-red-700 border-l-4 border-red-500 pl-4",
          )}
        >
          {question.question}
        </h2>
        {question.description && (
          <p className="mt-2 text-sm text-muted-foreground">
            {question.description}
          </p>
        )}
      </div>

      {/* Answer input */}
      <div className="space-y-3">
        {(question.type === "single" ||
          question.type === "yes-no" ||
          question.type === "scale") &&
          question.options?.map((option) => (
            <label
              key={option.value}
              className={cn(
                "flex items-center gap-3 rounded-xl border px-4 py-3 cursor-pointer transition-all",
                selectedValue === option.value
                  ? "border-foreground bg-zinc-50 ring-1 ring-foreground"
                  : "border-neutral-200 hover:border-neutral-400",
              )}
            >
              <div
                className={cn(
                  "flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-colors",
                  selectedValue === option.value
                    ? "border-foreground"
                    : "border-neutral-300",
                )}
              >
                {selectedValue === option.value && (
                  <div className="h-2.5 w-2.5 rounded-full bg-foreground" />
                )}
              </div>
              <span className="text-sm">{option.label}</span>
              <input
                type="radio"
                name={question.id}
                value={option.value}
                checked={selectedValue === option.value}
                onChange={() => handleRadioSelect(option.value)}
                className="sr-only"
              />
            </label>
          ))}

        {question.type === "multi" &&
          question.options?.map((option) => {
            const isSelected =
              Array.isArray(selectedValue) &&
              selectedValue.includes(option.value);

            const handleToggle = () => {
              if (!Array.isArray(selectedValue)) return;

              if (option.exclusive) {
                // Exclusive option clears all others
                setSelectedValue(isSelected ? [] : [option.value]);
              } else {
                if (isSelected) {
                  setSelectedValue(
                    selectedValue.filter((v) => v !== option.value),
                  );
                } else {
                  // Remove exclusive options when selecting non-exclusive
                  const exclusiveValues =
                    question.options
                      ?.filter((o) => o.exclusive)
                      .map((o) => o.value) ?? [];
                  setSelectedValue([
                    ...selectedValue.filter(
                      (v) => !exclusiveValues.includes(v),
                    ),
                    option.value,
                  ]);
                }
              }
            };

            return (
              <label
                key={option.value}
                className={cn(
                  "flex items-center gap-3 rounded-xl border px-4 py-3 cursor-pointer transition-all",
                  isSelected
                    ? "border-foreground bg-zinc-50 ring-1 ring-foreground"
                    : "border-neutral-200 hover:border-neutral-400",
                )}
              >
                <Checkbox
                  checked={isSelected}
                  onCheckedChange={handleToggle}
                  className="shrink-0"
                />
                <span className="text-sm">{option.label}</span>
              </label>
            );
          })}

        {question.type === "text" && (
          <textarea
            value={typeof selectedValue === "string" ? selectedValue : ""}
            onChange={(e) => setSelectedValue(e.target.value)}
            placeholder="Type your answer here..."
            rows={4}
            className="w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm outline-none focus:border-foreground focus:ring-1 focus:ring-foreground transition-all resize-none"
          />
        )}

        {question.type === "info" && (
          <div className="rounded-xl bg-blue-50 border border-blue-200 px-4 py-3 text-sm text-blue-800">
            {question.description}
          </div>
        )}
      </div>

      {/* Follow-up text input */}
      {showFollowUp && question.followUp && (
        <div className="space-y-2 pl-4 border-l-2 border-neutral-200">
          <p className="text-sm font-medium text-muted-foreground">
            {question.followUp.prompt}
          </p>
          <textarea
            value={followUpText}
            onChange={(e) => setFollowUpText(e.target.value)}
            placeholder="Please provide details..."
            rows={3}
            className="w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm outline-none focus:border-foreground focus:ring-1 focus:ring-foreground transition-all resize-none"
          />
        </div>
      )}
    </div>
  );
}
