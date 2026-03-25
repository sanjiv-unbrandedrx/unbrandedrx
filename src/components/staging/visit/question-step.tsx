"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import type { Question, AnswerValue } from "@/lib/questionnaire/types";
import { useQuestionnaire } from "@/lib/questionnaire/context";
import { evaluateCondition } from "@/lib/questionnaire/engine";
import { getTreatmentById } from "@/lib/questionnaire/treatments";
import { formatPrice } from "@/lib/component-utils";
import { Search, Check } from "lucide-react";

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

  // Sync from state only when navigating to a different question
  // (NOT on every state.answers change — that causes circular updates for text inputs)
  useEffect(() => {
    const answer = state.answers[question.id];
    setSelectedValue(answer?.value ?? (question.type === "multi" ? [] : ""));
    setFollowUpText(answer?.followUpText ?? "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [question.id]);

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

  // ── Welcome Type ──────────────────────────────────────────────────────
  if (question.type === "welcome") {
    return <WelcomeStep question={question} />;
  }

  // ── Select Type (searchable dropdown) ─────────────────────────────────
  if (question.type === "select") {
    return (
      <SelectStep
        question={question}
        selectedValue={selectedValue}
        setSelectedValue={(val) => {
          setSelectedValue(val);
          setAnswer(question.id, val);
          if (onAutoAdvance) {
            setTimeout(() => onAutoAdvance(), 300);
          }
        }}
      />
    );
  }

  return (
    <div className="space-y-8">
      {/* Question text */}
      <div>
        <h2
          className={cn(
            "text-3xl font-semibold font-title tracking-tight text-foreground",
            question.critical &&
              "text-red-700 border-l-4 border-red-500 pl-4",
          )}
        >
          {question.question}
        </h2>
        {question.description && (
          <p className="mt-3 text-lg text-muted-foreground">
            {question.description}
          </p>
        )}
      </div>

      {/* Answer input */}
      <div className="space-y-4">
        {(question.type === "single" ||
          question.type === "yes-no" ||
          question.type === "scale") &&
          question.options?.map((option) => (
            <label
              key={option.value}
              className={cn(
                "flex items-center gap-4 rounded-xl border px-6 py-5 cursor-pointer transition-all",
                selectedValue === option.value
                  ? "border-foreground bg-zinc-50 ring-1 ring-foreground"
                  : "border-neutral-200 hover:border-neutral-400",
              )}
            >
              <div
                className={cn(
                  "flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition-colors",
                  selectedValue === option.value
                    ? "border-foreground"
                    : "border-neutral-300",
                )}
              >
                {selectedValue === option.value && (
                  <div className="h-3 w-3 rounded-full bg-foreground" />
                )}
              </div>
              <span className="text-lg">{option.label}</span>
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
                  "flex items-center gap-4 rounded-xl border px-6 py-5 cursor-pointer transition-all",
                  isSelected
                    ? "border-foreground bg-zinc-50 ring-1 ring-foreground"
                    : "border-neutral-200 hover:border-neutral-400",
                )}
              >
                <Checkbox
                  checked={isSelected}
                  onCheckedChange={handleToggle}
                  className="shrink-0 h-5 w-5"
                />
                <span className="text-lg">{option.label}</span>
              </label>
            );
          })}

        {question.type === "text" && (
          <textarea
            value={typeof selectedValue === "string" ? selectedValue : ""}
            onChange={(e) => setSelectedValue(e.target.value)}
            placeholder="Type your answer here..."
            rows={4}
            className="w-full rounded-xl border border-neutral-200 px-6 py-5 text-lg outline-none focus:border-foreground focus:ring-1 focus:ring-foreground transition-all resize-none"
          />
        )}

        {question.type === "info" && (
          <div className="rounded-xl bg-blue-50 border border-blue-200 px-6 py-5 text-lg text-blue-800">
            {question.description}
          </div>
        )}
      </div>

      {/* Follow-up text input */}
      {showFollowUp && question.followUp && (
        <div className="space-y-3 pl-5 border-l-2 border-neutral-200">
          <p className="text-lg font-medium text-muted-foreground">
            {question.followUp.prompt}
          </p>
          <textarea
            value={followUpText}
            onChange={(e) => setFollowUpText(e.target.value)}
            placeholder="Please provide details..."
            rows={3}
            className="w-full rounded-xl border border-neutral-200 px-6 py-5 text-lg outline-none focus:border-foreground focus:ring-1 focus:ring-foreground transition-all resize-none"
          />
        </div>
      )}
    </div>
  );
}

// ── Welcome Step Component ────────────────────────────────────────────────

function WelcomeStep({ question }: { question: Question }) {
  const { state, setAnswer } = useQuestionnaire();
  const treatment = getTreatmentById(state.initialTreatment);

  // Auto-set answer so Continue button is enabled
  useEffect(() => {
    if (!state.answers[question.id]) {
      setAnswer(question.id, "acknowledged");
    }
  }, [question.id, state.answers, setAnswer]);

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-semibold font-title tracking-tight">
          {question.question}
        </h2>
        <p className="mt-3 text-lg text-muted-foreground">
          {question.description}
        </p>
      </div>

      {/* Treatment card */}
      {treatment && (
        <div className="rounded-2xl border border-neutral-200 p-6 flex items-center gap-5">
          <div className="relative h-20 w-20 shrink-0 rounded-xl overflow-hidden bg-neutral-100">
            <Image
              src={treatment.image}
              alt={treatment.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1">
            <p className="text-xl font-semibold font-title">{treatment.name}</p>
            <p className="text-base text-muted-foreground">{treatment.medicalName}</p>
          </div>
          <p className="text-xl font-semibold">
            {formatPrice(treatment.price)}
            <span className="font-normal text-muted-foreground">/mo</span>
          </p>
        </div>
      )}

      <div className="space-y-4 text-lg text-muted-foreground">
        <div className="flex items-start gap-3">
          <span className="text-foreground font-semibold">1.</span>
          <span>Answer a few questions about your health goals</span>
        </div>
        <div className="flex items-start gap-3">
          <span className="text-foreground font-semibold">2.</span>
          <span>We'll match you with the right treatments</span>
        </div>
        <div className="flex items-start gap-3">
          <span className="text-foreground font-semibold">3.</span>
          <span>A licensed provider reviews and approves your plan</span>
        </div>
      </div>
    </div>
  );
}

// ── Searchable Select Step ────────────────────────────────────────────────

function SelectStep({
  question,
  selectedValue,
  setSelectedValue,
}: {
  question: Question;
  selectedValue: AnswerValue;
  setSelectedValue: (v: string) => void;
}) {
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedLabel = question.options?.find(
    (o) => o.value === selectedValue,
  )?.label;

  const filtered = useMemo(() => {
    if (!search) return question.options ?? [];
    const lower = search.toLowerCase();
    return (question.options ?? []).filter((o) =>
      o.label.toLowerCase().includes(lower),
    );
  }, [search, question.options]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-semibold font-title tracking-tight">
          {question.question}
        </h2>
        {question.description && (
          <p className="mt-3 text-lg text-muted-foreground">
            {question.description}
          </p>
        )}
      </div>

      <div className="relative">
        {/* Search input */}
        <div className="relative">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <input
            ref={inputRef}
            type="text"
            value={isOpen ? search : selectedLabel ?? search}
            onChange={(e) => {
              setSearch(e.target.value);
              if (!isOpen) setIsOpen(true);
            }}
            onFocus={() => {
              setIsOpen(true);
              setSearch("");
            }}
            placeholder="Search..."
            className="w-full rounded-xl border border-neutral-200 pl-14 pr-6 py-5 text-lg outline-none focus:border-foreground focus:ring-1 focus:ring-foreground transition-all"
          />
        </div>

        {/* Dropdown */}
        {isOpen && (
          <div
            ref={dropdownRef}
            className="absolute z-20 mt-2 w-full max-h-72 overflow-y-auto rounded-xl border border-neutral-200 bg-white shadow-lg"
          >
            {filtered.length === 0 ? (
              <p className="px-6 py-4 text-base text-muted-foreground">
                No results found
              </p>
            ) : (
              filtered.map((option) => (
                <button
                  key={option.value}
                  onClick={() => {
                    setSelectedValue(option.value);
                    setSearch("");
                    setIsOpen(false);
                  }}
                  className={cn(
                    "w-full flex items-center gap-3 px-6 py-4 text-lg text-left hover:bg-zinc-50 transition-colors",
                    selectedValue === option.value && "bg-zinc-50 font-medium",
                  )}
                >
                  {selectedValue === option.value && (
                    <Check className="h-5 w-5 text-foreground shrink-0" />
                  )}
                  <span className={selectedValue === option.value ? "" : "pl-8"}>
                    {option.label}
                  </span>
                </button>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}
