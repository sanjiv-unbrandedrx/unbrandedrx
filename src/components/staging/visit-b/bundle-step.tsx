"use client";

import { useState, useMemo } from "react";
import { cn } from "@/lib/utils";
import { useQuestionnaire } from "@/lib/questionnaire/context";
import {
  BUNDLES,
  DAY_SUPPLY_TIERS,
  getMatchingBundles,
  calculateDiscount,
} from "@/lib/questionnaire/bundles";
import { Check, Tag, Sparkles } from "lucide-react";

interface BundleStepProps {
  onContinue: () => void;
}

export default function BundleStep({ onContinue }: BundleStepProps) {
  const { state } = useQuestionnaire();
  const [selectedSupply, setSelectedSupply] = useState(30);

  const planIds = state.treatmentPlan.map((t) => t.treatmentId);
  const matchingBundles = useMemo(
    () => getMatchingBundles(planIds),
    [planIds],
  );

  // Calculate base subtotal
  const baseSubtotal = state.treatmentPlan.reduce(
    (sum, t) => sum + parseFloat(t.price || "0"),
    0,
  );

  // Bundle discount (best matching bundle)
  const bestBundle =
    matchingBundles.length > 0
      ? matchingBundles.reduce((best, b) =>
          b.discountPercent > best.discountPercent ? b : best,
        )
      : null;
  const bundleDiscount = bestBundle?.discountPercent ?? 0;

  // Day supply discount
  const supplyTier = DAY_SUPPLY_TIERS.find((t) => t.days === selectedSupply);
  const supplyDiscount = supplyTier?.discountPercent ?? 0;

  // Combined discount (compounding)
  const totalDiscount = calculateDiscount(bundleDiscount, supplyDiscount);
  const discountedMonthly = baseSubtotal * (1 - totalDiscount / 100);
  const totalCost = discountedMonthly * (selectedSupply / 30);
  const savings = baseSubtotal * (selectedSupply / 30) - totalCost;

  return (
    <div className="space-y-10">
      <div>
        <h2 className="text-3xl font-semibold font-title tracking-tight">
          Customize your plan
        </h2>
        <p className="mt-3 text-lg text-muted-foreground">
          Choose your supply duration. Longer supplies save you more.
        </p>
      </div>

      {/* Bundle callout */}
      {bestBundle && (
        <div className="rounded-xl border border-green-200 bg-green-50/50 p-5 flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100">
            <Sparkles className="h-5 w-5 text-green-700" />
          </div>
          <div>
            <p className="font-semibold font-title text-lg text-green-900">
              {bestBundle.name} — {bestBundle.discountPercent}% bundle discount
            </p>
            <p className="text-base text-green-800 mt-1">
              {bestBundle.tagline}. This discount is automatically applied
              because your plan includes the right combination.
            </p>
          </div>
        </div>
      )}

      {/* Day supply tiers */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold font-title">Supply duration</h3>
        {DAY_SUPPLY_TIERS.map((tier) => {
          const isSelected = selectedSupply === tier.days;
          const tierMonthly =
            baseSubtotal *
            (1 - calculateDiscount(bundleDiscount, tier.discountPercent) / 100);
          const tierTotal = tierMonthly * (tier.days / 30);

          return (
            <button
              key={tier.days}
              onClick={() => setSelectedSupply(tier.days)}
              className={cn(
                "flex items-center w-full rounded-xl border p-5 text-left transition-all",
                isSelected
                  ? "border-foreground bg-zinc-50 ring-1 ring-foreground"
                  : "border-neutral-200 hover:border-neutral-400",
              )}
            >
              <div
                className={cn(
                  "flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition-colors mr-4",
                  isSelected ? "border-foreground" : "border-neutral-300",
                )}
              >
                {isSelected && (
                  <div className="h-3 w-3 rounded-full bg-foreground" />
                )}
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-medium">{tier.label}</span>
                  {tier.badge && (
                    <span
                      className={cn(
                        "text-xs font-medium px-2 py-0.5 rounded-full",
                        tier.badge === "Best Value"
                          ? "bg-green-100 text-green-700"
                          : tier.badge === "Most Popular"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-amber-100 text-amber-700",
                      )}
                    >
                      {tier.badge}
                    </span>
                  )}
                </div>
                {tier.discountPercent > 0 && (
                  <p className="text-sm text-muted-foreground mt-0.5">
                    Save {tier.discountPercent}% on supply
                    {bundleDiscount > 0 && " + bundle discount stacks"}
                  </p>
                )}
              </div>

              <div className="text-right">
                <p className="text-lg font-semibold tabular-nums">
                  ${tierTotal.toFixed(2)}
                </p>
                <p className="text-sm text-muted-foreground">
                  ${tierMonthly.toFixed(2)}/mo
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Summary */}
      <div className="rounded-xl border border-neutral-200 bg-zinc-50 p-6 space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-base text-muted-foreground">
            Base monthly cost
          </span>
          <span className="text-base tabular-nums">${baseSubtotal.toFixed(2)}/mo</span>
        </div>

        {totalDiscount > 0 && (
          <>
            <div className="flex items-center justify-between text-green-700">
              <span className="text-base flex items-center gap-2">
                <Tag className="h-4 w-4" />
                Combined discount ({totalDiscount}%)
              </span>
              <span className="text-base font-medium tabular-nums">
                -${(baseSubtotal - discountedMonthly).toFixed(2)}/mo
              </span>
            </div>
            <div className="border-t border-neutral-200 pt-4 flex items-center justify-between">
              <span className="text-base font-medium">Your price</span>
              <span className="text-lg font-semibold tabular-nums">
                ${discountedMonthly.toFixed(2)}/mo
              </span>
            </div>
          </>
        )}

        <div className="border-t border-neutral-200 pt-4 flex items-center justify-between">
          <span className="text-lg font-semibold">
            Total ({selectedSupply}-day supply)
          </span>
          <div className="text-right">
            <span className="text-2xl font-bold tabular-nums">
              ${totalCost.toFixed(2)}
            </span>
            {savings > 0 && (
              <p className="text-sm text-green-700 font-medium">
                You save ${savings.toFixed(2)}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
