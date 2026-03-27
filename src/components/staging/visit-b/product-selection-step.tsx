"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { useQuestionnaire } from "@/lib/questionnaire/context";
import { TREATMENTS, type Treatment } from "@/lib/questionnaire/treatments";
import { Check, Plus } from "lucide-react";

// Map categories to user-facing health goal labels
const CATEGORY_GOALS: {
  category: Treatment["category"];
  label: string;
  description: string;
}[] = [
  {
    category: "ed",
    label: "Sexual Performance",
    description: "Treat ED and improve sexual health",
  },
  {
    category: "testosterone",
    label: "Energy & Vitality",
    description: "Optimize hormones, boost energy and drive",
  },
  {
    category: "hair",
    label: "Hair Growth",
    description: "Stop hair loss and promote regrowth",
  },
  {
    category: "peptides",
    label: "Anti-aging & Longevity",
    description: "Support recovery, sleep and cellular health",
  },
];

export default function ProductSelectionStep() {
  const { state, addTreatment, removeTreatment } = useQuestionnaire();
  const planIds = new Set(state.treatmentPlan.map((t) => t.treatmentId));
  const dqIds = new Set(Object.keys(state.disqualifications));

  return (
    <div className="space-y-6 md:space-y-10">
      <div>
        <h2 className="text-2xl md:text-3xl font-semibold font-title tracking-tight">
          Choose your treatments
        </h2>
        <p className="mt-2 md:mt-3 text-base md:text-lg text-muted-foreground">
          Select the products you&apos;d like evaluated. We&apos;ll only ask
          questions relevant to your selections.
        </p>
      </div>

      {CATEGORY_GOALS.map(({ category, label, description }) => {
        const treatments = TREATMENTS.filter(
          (t) => t.category === category && !t.comingSoon && !dqIds.has(t.id),
        );
        if (treatments.length === 0) return null;

        return (
          <div key={category}>
            <div className="mb-4">
              <h3 className="text-sm uppercase tracking-wider font-medium text-muted-foreground">
                {label}
              </h3>
              <p className="text-sm text-muted-foreground/70 mt-0.5">
                {description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {treatments.map((treatment) => (
                <ProductCard
                  key={treatment.id}
                  treatment={treatment}
                  selected={planIds.has(treatment.id)}
                  onToggle={() => {
                    if (planIds.has(treatment.id)) {
                      removeTreatment(treatment.id);
                    } else {
                      addTreatment(treatment.id, "Selected by you");
                    }
                  }}
                />
              ))}
            </div>
          </div>
        );
      })}

      {state.treatmentPlan.length === 0 && (
        <p className="text-center text-muted-foreground py-4">
          Select at least one treatment to continue.
        </p>
      )}
    </div>
  );
}

function ProductCard({
  treatment,
  selected,
  onToggle,
}: {
  treatment: Treatment;
  selected: boolean;
  onToggle: () => void;
}) {
  const priceParts = treatment.price.split(".");
  const dollars = priceParts[0];
  const cents = priceParts[1] ?? "00";

  return (
    <button
      onClick={onToggle}
      className={cn(
        "flex items-center gap-3 md:gap-4 rounded-xl border p-3 md:p-4 text-left transition-all w-full",
        selected
          ? "border-foreground bg-zinc-50 ring-1 ring-foreground"
          : "border-neutral-200 hover:border-neutral-400",
      )}
    >
      <div className="relative h-14 w-14 md:h-16 md:w-16 shrink-0 rounded-lg overflow-hidden bg-neutral-100">
        <Image
          src={treatment.image}
          alt={treatment.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex-1 min-w-0">
        <p className="text-base font-semibold font-title truncate">
          {treatment.name}
        </p>
        <p className="text-sm text-muted-foreground truncate">
          {treatment.medicalName}
        </p>
        <p className="text-sm font-semibold mt-1 tabular-nums">
          ${dollars}
          <span className="text-xs">.{cents}</span>
          <span className="font-normal text-muted-foreground">/mo</span>
        </p>
      </div>

      <div
        className={cn(
          "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 transition-all",
          selected
            ? "border-foreground bg-foreground text-white"
            : "border-neutral-300",
        )}
      >
        {selected ? (
          <Check className="h-4 w-4" />
        ) : (
          <Plus className="h-4 w-4 text-neutral-400" />
        )}
      </div>
    </button>
  );
}
