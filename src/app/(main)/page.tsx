import type { Metadata } from "next";
import HeroSection from "@/components/staging/home-v2/hero-section";
import CategoryCardsSection from "@/components/staging/home-v2/category-cards-section";
import HowItWorksSection from "@/components/staging/home/how-it-works-section";
import ValuePropsSection from "@/components/staging/home/value-props-section";
import ProductCarousel from "@/components/common/product-carousel";
import TrustSignalsSection from "@/components/staging/home/trust-signals-section";
import FinalCtaSection from "@/components/staging/home-v2/final-cta-section";
import { Product } from "@/components/shop/product-card";

const TREATMENTS: Product[] = [
  {
    id: "enclomiphene",
    name: "Enclomiphene",
    medicalName: "Enclomiphene Citrate",
    price: "79.00",
    image: "/home/v2/treatment-enclomiphene.png",
    slug: "enclomiphene",
  },
  {
    id: "ed-rapid-dissolve-tablet",
    name: "4-in-1 ED Rapid Dissolve",
    medicalName: "Tadalafil + Vardenafil + Apomorphine",
    price: "79.00",
    image: "/home/v2/treatment-ed-rapid-dissolve.png",
    slug: "ed-rapid-dissolve-tablet",
  },
  {
    id: "oral-sermorelin",
    name: "Oral Sermorelin",
    medicalName: "Sermorelin Acetate",
    price: "119.00",
    image: "/home/v2/bestseller-oral-sermorelin.png",
    slug: "oral-sermorelin",
  },
  {
    id: "oral-finasteride",
    name: "Oral Finasteride",
    medicalName: "Finasteride + Minoxidil",
    price: "69.00",
    image: "/products/oral-finasteride-hero.png",
    slug: "oral-finasteride",
  },
  {
    id: "oral-dutasteride",
    name: "Oral Dutasteride",
    medicalName: "Dutasteride + Minoxidil",
    price: "69.00",
    image: "/products/oral-dutasteride-hero.png",
    slug: "oral-dutasteride",
  },
  {
    id: "topical-finasteride",
    name: "Topical Finasteride",
    medicalName: "Minoxidil + Finasteride + Tretinoin",
    price: "59.00",
    image: "/products/topical-finasteride-hero.png",
    slug: "topical-finasteride",
  },
  {
    id: "topical-dutasteride",
    name: "Topical Dutasteride",
    medicalName: "Minoxidil + Dutasteride + Tretinoin",
    price: "69.00",
    image: "/products/topical-dutasteride-hero.png",
    slug: "topical-dutasteride",
  },
];

export const metadata: Metadata = {
  title: "Better Formulas. Smarter Rx Prices.",
  description:
    "Skip fancy packaging and save more on prescription treatments for hair loss, ED, testosterone, and more. Prescribed by licensed U.S. providers.",
};

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CategoryCardsSection />
      <ProductCarousel title="Our Treatments" products={TREATMENTS} />
      <HowItWorksSection />
      <ValuePropsSection />
      <TrustSignalsSection />
      <FinalCtaSection />
    </main>
  );
}
