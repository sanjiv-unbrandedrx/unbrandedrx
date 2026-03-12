"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useQuestionnaire } from "@/lib/questionnaire/context";
import { formatPrice } from "@/lib/component-utils";
import { X, ChevronUp, ChevronDown, ShoppingBag } from "lucide-react";

export default function TreatmentPlanPanel() {
  const { state, removeTreatment } = useQuestionnaire();
  const [mobileOpen, setMobileOpen] = useState(false);

  const { treatmentPlan } = state;
  const count = treatmentPlan.length;

  return (
    <>
      {/* ── Desktop Sidebar ──────────────────────────────────────────── */}
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
        </div>

        {treatmentPlan.length > 0 && (
          <div className="p-4 border-t border-neutral-100">
            <p className="text-sm text-muted-foreground text-center">
              {count} treatment{count !== 1 ? "s" : ""} selected
            </p>
          </div>
        )}
      </aside>

      {/* ── Mobile Bottom Drawer ─────────────────────────────────────── */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40">
        {/* Collapsed bar */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="w-full flex items-center justify-between bg-zinc-800 text-white px-4 py-3"
        >
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-4 w-4" />
            <span className="text-sm font-medium font-title">
              Treatment Plan
            </span>
            {count > 0 && (
              <span className="bg-white text-zinc-800 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {count}
              </span>
            )}
          </div>
          {mobileOpen ? (
            <ChevronDown className="h-4 w-4" />
          ) : (
            <ChevronUp className="h-4 w-4" />
          )}
        </button>

        {/* Expanded drawer */}
        {mobileOpen && (
          <div className="bg-white border-t border-neutral-200 max-h-[60vh] overflow-y-auto p-4 space-y-3">
            {treatmentPlan.length === 0 ? (
              <p className="text-sm text-muted-foreground text-center py-4">
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
          </div>
        )}
      </div>
    </>
  );
}

// ── Treatment Card ────────────────────────────────────────────────────────

interface TreatmentCardProps {
  name: string;
  medicalName: string;
  price: string;
  image: string;
  reason: "initial" | "suggested";
  onRemove: () => void;
}

function TreatmentCard({
  name,
  medicalName,
  price,
  image,
  reason,
  onRemove,
}: TreatmentCardProps) {
  return (
    <div className="flex items-start gap-4 rounded-xl border border-neutral-200 p-4 relative group">
      <div className="relative h-16 w-16 shrink-0 rounded-lg overflow-hidden bg-neutral-100">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-base font-semibold font-title truncate">{name}</p>
        <p className="text-sm text-muted-foreground truncate">{medicalName}</p>
        <div className="flex items-center gap-2 mt-1.5">
          <span className="text-base font-semibold">
            {formatPrice(price)}
          </span>
          <span
            className={cn(
              "text-xs uppercase tracking-wider font-medium px-2 py-0.5 rounded-full",
              reason === "initial"
                ? "bg-zinc-100 text-zinc-600"
                : "bg-blue-50 text-blue-600",
            )}
          >
            {reason === "initial" ? "Your selection" : "Recommended"}
          </span>
        </div>
      </div>
      <button
        onClick={onRemove}
        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity p-1 rounded-full hover:bg-neutral-100"
        aria-label={`Remove ${name}`}
      >
        <X className="h-4 w-4 text-muted-foreground" />
      </button>
    </div>
  );
}
