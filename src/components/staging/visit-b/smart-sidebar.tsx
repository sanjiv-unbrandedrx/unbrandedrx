"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useQuestionnaire } from "@/lib/questionnaire/context";
import { formatPrice } from "@/lib/component-utils";
import { TREATMENTS } from "@/lib/questionnaire/treatments";
import type { Treatment } from "@/lib/questionnaire/treatments";
import type { TriggerResult } from "@/lib/questionnaire/engine";
import {
  X,
  ClipboardList,
  Plus,
  ChevronDown,
  ChevronUp,
  Sparkles,
} from "lucide-react";

const CATEGORY_LABELS: Record<Treatment["category"], string> = {
  hair: "Hair Care",
  ed: "Sexual Health",
  testosterone: "Testosterone",
  peptides: "Peptides & Longevity",
};

const CATEGORY_ORDER: Treatment["category"][] = [
  "ed",
  "testosterone",
  "hair",
  "peptides",
];

interface SmartSidebarProps {
  triggerResults: TriggerResult;
}

export default function SmartSidebar({ triggerResults }: SmartSidebarProps) {
  const { state, removeTreatment, addTreatment, dismissTreatment } =
    useQuestionnaire();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [exploring, setExploring] = useState(false);

  const { treatmentPlan, disqualifications, dismissed } = state;
  const count = treatmentPlan.length;

  const subtotal = treatmentPlan.reduce(
    (sum, t) => sum + parseFloat(t.price || "0"),
    0,
  );
  const subtotalWhole = Math.floor(subtotal);
  const subtotalCents = String(Math.round((subtotal % 1) * 100)).padStart(
    2,
    "0",
  );

  // Available treatments to add
  const inPlanIds = new Set(treatmentPlan.map((t) => t.treatmentId));
  const dqIds = new Set(Object.keys(disqualifications));
  const availableTreatments = TREATMENTS.filter(
    (t) => !inPlanIds.has(t.id) && !dqIds.has(t.id) && !t.comingSoon,
  );

  // Smart recommendations — triggered suggestions not already in plan or dismissed
  const recommendations = triggerResults.suggestions.filter(
    (s) =>
      !inPlanIds.has(s.treatmentId) &&
      !dismissed.includes(s.treatmentId) &&
      !dqIds.has(s.treatmentId),
  );

  const grouped = CATEGORY_ORDER.map((cat) => ({
    category: cat,
    label: CATEGORY_LABELS[cat],
    treatments: availableTreatments.filter(
      (t) =>
        t.category === cat &&
        !recommendations.some((r) => r.treatmentId === t.id),
    ),
  })).filter((g) => g.treatments.length > 0);

  const handleAdd = (treatmentId: string, reason?: string) => {
    addTreatment(treatmentId, reason ?? "Included by you");
  };

  // Shared content between desktop and mobile
  const planContent = (
    <>
      {treatmentPlan.length === 0 ? (
        <p className="text-base text-muted-foreground text-center py-8">
          No treatments selected yet
        </p>
      ) : (
        treatmentPlan.map((t) => (
          <TreatmentCard
            key={t.treatmentId}
            name={t.name}
            medicalName={t.medicalName}
            price={t.price}
            image={t.image}
            reason={t.reason}
            onRemove={() => removeTreatment(t.treatmentId)}
          />
        ))
      )}
    </>
  );

  const recommendationContent = recommendations.length > 0 && (
    <div className="pt-3 border-t border-neutral-100 mt-4 space-y-3">
      <div className="flex items-center gap-2 text-sm font-medium text-amber-700">
        <Sparkles className="h-4 w-4" />
        Recommended for you
      </div>
      {recommendations.map((rec) => {
        const treatment = TREATMENTS.find((t) => t.id === rec.treatmentId);
        if (!treatment) return null;
        return (
          <RecommendationCard
            key={rec.treatmentId}
            treatment={treatment}
            reason={rec.reason}
            onAdd={() => handleAdd(rec.treatmentId, rec.reason)}
            onDismiss={() => dismissTreatment(rec.treatmentId)}
          />
        );
      })}
    </div>
  );

  const exploreContent = (
    <div className="space-y-5">
      {grouped.length === 0 ? (
        <p className="text-sm text-muted-foreground text-center py-4">
          All available treatments are in your plan
        </p>
      ) : (
        grouped.map((group) => (
          <div key={group.category}>
            <p className="text-xs uppercase tracking-wider font-medium text-muted-foreground mb-2">
              {group.label}
            </p>
            <div className="space-y-2">
              {group.treatments.map((t) => (
                <AddTreatmentCard
                  key={t.id}
                  treatment={t}
                  onAdd={() => handleAdd(t.id)}
                />
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );

  const footerContent = treatmentPlan.length > 0 && (
    <div className="p-5 border-t border-neutral-100">
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          {count} treatment{count !== 1 ? "s" : ""}/mo
        </p>
        <p className="text-lg font-semibold tabular-nums tracking-tighter">
          $ {subtotalWhole}
          <span className="text-xs">.{subtotalCents}</span>
          <span className="text-sm font-normal text-muted-foreground">
            /mo
          </span>
        </p>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex flex-col w-[360px] border-l border-neutral-200 bg-white">
        <div className="p-6 border-b border-neutral-100">
          <h3 className="font-title font-semibold text-xl tracking-tight">
            Your Treatment Plan
          </h3>
          <p className="text-sm text-muted-foreground mt-1">
            Your provider will review and finalize
          </p>
        </div>

        <div className="flex-1 overflow-y-auto p-5 space-y-3">
          {planContent}

          {/* Smart recommendations */}
          {recommendationContent}

          {/* Explore toggle */}
          {availableTreatments.length > 0 && (
            <div className="pt-3 border-t border-neutral-100 mt-4">
              <button
                onClick={() => setExploring(!exploring)}
                className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-black transition-colors w-full"
              >
                <Plus className="h-4 w-4" />
                Add other treatments
                {exploring ? (
                  <ChevronUp className="h-4 w-4 ml-auto" />
                ) : (
                  <ChevronDown className="h-4 w-4 ml-auto" />
                )}
              </button>

              {exploring && <div className="mt-4">{exploreContent}</div>}
            </div>
          )}
        </div>

        {footerContent}
      </aside>

      {/* Mobile: Header Icon */}
      <div className="lg:hidden fixed top-4 right-4 z-40">
        <button
          onClick={() => setMobileOpen(true)}
          className={cn(
            "relative flex items-center justify-center h-10 w-10 rounded-full bg-zinc-900 text-white shadow-md",
            recommendations.length > 0 && "ring-2 ring-amber-400 ring-offset-2",
          )}
          aria-label="Treatment Plan"
        >
          <ClipboardList className="h-5 w-5" />
          {count > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              {count}
            </span>
          )}
        </button>
      </div>

      {/* Mobile: Full-screen Slide-over */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-white shadow-2xl animate-in slide-in-from-right duration-300 flex flex-col">
            <div className="flex items-center justify-between p-5 border-b border-neutral-100">
              <div>
                <h3 className="font-title font-semibold text-lg">
                  Your Treatment Plan
                </h3>
                <p className="text-sm text-muted-foreground">
                  Your provider will review and finalize
                </p>
              </div>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 rounded-full hover:bg-neutral-100 transition-colors"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-5 space-y-3">
              {planContent}
              {recommendationContent}
              {availableTreatments.length > 0 && (
                <div className="pt-3 border-t border-neutral-100 mt-4">
                  <button
                    onClick={() => setExploring(!exploring)}
                    className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-black transition-colors w-full"
                  >
                    <Plus className="h-4 w-4" />
                    Add other treatments
                    {exploring ? (
                      <ChevronUp className="h-4 w-4 ml-auto" />
                    ) : (
                      <ChevronDown className="h-4 w-4 ml-auto" />
                    )}
                  </button>
                  {exploring && <div className="mt-4">{exploreContent}</div>}
                </div>
              )}
            </div>

            {footerContent}
          </div>
        </div>
      )}
    </>
  );
}

// ── Treatment Card (in plan) ──────────────────────────────────────────────

function TreatmentCard({
  name,
  medicalName,
  price,
  image,
  reason,
  onRemove,
}: {
  name: string;
  medicalName: string;
  price: string;
  image: string;
  reason: "initial" | "suggested";
  onRemove: () => void;
}) {
  return (
    <div className="flex items-start gap-4 rounded-xl border border-neutral-200 p-4 relative">
      <div className="relative h-16 w-16 shrink-0 rounded-lg overflow-hidden bg-neutral-100">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-base font-semibold font-title truncate pr-6">
          {name}
        </p>
        <p className="text-sm text-muted-foreground truncate">{medicalName}</p>
        <div className="flex items-center gap-2 mt-1.5">
          <span className="text-base font-semibold">{formatPrice(price)}</span>
        </div>
      </div>
      <button
        onClick={onRemove}
        className="absolute top-2 right-2 p-1 rounded-full hover:bg-neutral-100 transition-colors"
        aria-label={`Remove ${name}`}
      >
        <X className="h-4 w-4 text-muted-foreground" />
      </button>
    </div>
  );
}

// ── Recommendation Card ─────────────────────────────────────────────────

function RecommendationCard({
  treatment,
  reason,
  onAdd,
  onDismiss,
}: {
  treatment: Treatment;
  reason: string;
  onAdd: () => void;
  onDismiss: () => void;
}) {
  return (
    <div className="rounded-xl border border-amber-200 bg-amber-50/50 p-4 space-y-3">
      <div className="flex items-center gap-3">
        <div className="relative h-12 w-12 shrink-0 rounded-lg overflow-hidden bg-white">
          <Image
            src={treatment.image}
            alt={treatment.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold font-title truncate">
            {treatment.name}
          </p>
          <p className="text-xs text-muted-foreground truncate">
            {formatPrice(treatment.price)}/mo
          </p>
        </div>
      </div>
      <p className="text-sm text-amber-800">{reason}</p>
      <div className="flex gap-2">
        <button
          onClick={onAdd}
          className="flex-1 flex items-center justify-center gap-1.5 text-xs font-medium bg-zinc-900 text-white px-3 py-2 rounded-full hover:bg-black transition-colors"
        >
          <Plus className="h-3.5 w-3.5" />
          Add
        </button>
        <button
          onClick={onDismiss}
          className="flex-1 text-xs font-medium text-muted-foreground px-3 py-2 rounded-full border border-neutral-200 hover:bg-neutral-50 transition-colors"
        >
          Not now
        </button>
      </div>
    </div>
  );
}

// ── Add Treatment Card ──────────────────────────────────────────────────

function AddTreatmentCard({
  treatment,
  onAdd,
}: {
  treatment: Treatment;
  onAdd: () => void;
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-neutral-200 p-3">
      <div className="relative h-12 w-12 shrink-0 rounded-lg overflow-hidden bg-neutral-100">
        <Image
          src={treatment.image}
          alt={treatment.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold font-title truncate">
          {treatment.name}
        </p>
        <p className="text-xs text-muted-foreground truncate">
          {formatPrice(treatment.price)}/mo
        </p>
      </div>
      <button
        onClick={onAdd}
        className="shrink-0 flex items-center gap-1.5 text-xs font-medium bg-zinc-900 text-white px-3 py-2 rounded-full hover:bg-black transition-colors"
      >
        <Plus className="h-3.5 w-3.5" />
        Include
      </button>
    </div>
  );
}
