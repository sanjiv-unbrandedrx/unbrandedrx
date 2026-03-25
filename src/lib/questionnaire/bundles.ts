// ---------------------------------------------------------------------------
// Bundle & Day Supply Configuration
// ---------------------------------------------------------------------------

export interface Bundle {
  id: string;
  name: string;
  treatments: string[]; // treatment IDs
  discountPercent: number;
  tagline: string;
}

export const BUNDLES: Bundle[] = [
  {
    id: "performance-stack",
    name: "Performance Stack",
    treatments: ["ed-rapid-dissolve-tablet", "enclomiphene"],
    discountPercent: 10,
    tagline: "ED treatment + hormonal optimization",
  },
  {
    id: "hair-restoration",
    name: "Hair Restoration Kit",
    treatments: ["topical-finasteride", "follicle-activator"],
    discountPercent: 10,
    tagline: "Block DHT + stimulate growth",
  },
  {
    id: "total-vitality",
    name: "Total Male Vitality",
    treatments: ["enclomiphene", "ed-rapid-dissolve-tablet", "oral-sermorelin"],
    discountPercent: 15,
    tagline: "Hormones + performance + longevity",
  },
  {
    id: "hair-hormones",
    name: "Hair + Hormones",
    treatments: ["topical-finasteride", "enclomiphene"],
    discountPercent: 10,
    tagline: "Comprehensive hair + hormone approach",
  },
];

export interface DaySupplyTier {
  days: number;
  label: string;
  discountPercent: number;
  badge?: string;
}

export const DAY_SUPPLY_TIERS: DaySupplyTier[] = [
  { days: 30, label: "30-day supply", discountPercent: 0 },
  { days: 60, label: "60-day supply", discountPercent: 8, badge: "Most Popular" },
  { days: 90, label: "90-day supply", discountPercent: 12, badge: "Best Value" },
  { days: 150, label: "150-day supply", discountPercent: 18, badge: "Maximum Savings" },
];

/** Find bundles that match the current treatment plan */
export function getMatchingBundles(treatmentIds: string[]): Bundle[] {
  const planSet = new Set(treatmentIds);
  return BUNDLES.filter((bundle) =>
    bundle.treatments.every((id) => planSet.has(id)),
  );
}

/** Calculate total discount (bundle + day supply, compounding) */
export function calculateDiscount(
  bundlePercent: number,
  supplyPercent: number,
): number {
  // Compounding: (1 - bundle) * (1 - supply) = final multiplier
  const multiplier = (1 - bundlePercent / 100) * (1 - supplyPercent / 100);
  return Math.round((1 - multiplier) * 100);
}
