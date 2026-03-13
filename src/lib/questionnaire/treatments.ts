// ---------------------------------------------------------------------------
// Treatment Catalog — central registry of all treatments
// ---------------------------------------------------------------------------

export interface Treatment {
  id: string;
  name: string;
  medicalName: string;
  price: string;
  image: string;
  checkoutSlug: string;
  category: "ed" | "testosterone" | "hair" | "peptides";
  /** Treatments that are not yet available */
  comingSoon?: boolean;
  /** States where this treatment is NOT available */
  excludedStates?: string[];
}

export const TREATMENTS: Treatment[] = [
  // ── ED / Sexual Health ──────────────────────────────────────────────
  {
    id: "ed-rapid-dissolve-tablet",
    name: "4-in-1 ED Rapid Dissolve",
    medicalName: "Tadalafil + Vardenafil + Apomorphine",
    price: "79.00",
    image: "/home/v2/treatment-ed-rapid-dissolve.png",
    checkoutSlug: "ed-rapid-dissolve-tablet",
    category: "ed",
  },

  // ── Testosterone / Hormone ──────────────────────────────────────────
  {
    id: "enclomiphene",
    name: "Enclomiphene",
    medicalName: "Enclomiphene Citrate",
    price: "79.00",
    image: "/home/v2/treatment-enclomiphene.png",
    checkoutSlug: "enclomiphene",
    category: "testosterone",
  },

  // ── Hair Loss ───────────────────────────────────────────────────────
  {
    id: "topical-finasteride",
    name: "Topical Finasteride",
    medicalName: "Finasteride Topical Formula",
    price: "49.00",
    image: "/products/topical-finasteride-hero.png",
    checkoutSlug: "topical-finasteride",
    category: "hair",
  },
  {
    id: "oral-finasteride",
    name: "Oral Finasteride",
    medicalName: "Finasteride 1mg",
    price: "29.00",
    image: "/products/oral-finasteride-hero.png",
    checkoutSlug: "oral-finasteride",
    category: "hair",
  },
  {
    id: "topical-dutasteride",
    name: "Topical Dutasteride",
    medicalName: "Dutasteride Topical Formula",
    price: "55.00",
    image: "/products/topical-dutasteride-hero.png",
    checkoutSlug: "topical-dutasteride",
    category: "hair",
  },
  {
    id: "follicle-activator",
    name: "Follicle Activator",
    medicalName: "Oral Minoxidil Compound",
    price: "39.00",
    image: "/products/follicle-activator.webp",
    checkoutSlug: "follicle-activator",
    category: "hair",
  },

  // ── Peptides & Longevity ────────────────────────────────────────────
  {
    id: "injectable-sermorelin",
    name: "Injectable Sermorelin",
    medicalName: "Sermorelin Acetate",
    price: "119.00",
    image: "/home/v2/treatment-injectable-sermorelin.png",
    checkoutSlug: "injectable-sermorelin",
    category: "peptides",
    comingSoon: true,
  },
  {
    id: "oral-sermorelin",
    name: "Oral Sermorelin",
    medicalName: "Sermorelin Acetate",
    price: "119.00",
    image: "/home/v2/bestseller-oral-sermorelin.png",
    checkoutSlug: "oral-sermorelin",
    category: "peptides",
    comingSoon: true,
    excludedStates: ["AR"],
  },
  {
    id: "nad-plus-injection",
    name: "NAD+ Injection",
    medicalName: "Nicotinamide Adenine Dinucleotide",
    price: "149.00",
    image: "/home/v2/bestseller-nad-plus-injection.png",
    checkoutSlug: "nad-plus-injection",
    category: "peptides",
    comingSoon: true,
  },
];

export function getTreatmentById(id: string): Treatment | undefined {
  return TREATMENTS.find((t) => t.id === id);
}

export function getTreatmentsByCategory(
  category: Treatment["category"],
): Treatment[] {
  return TREATMENTS.filter((t) => t.category === category);
}
