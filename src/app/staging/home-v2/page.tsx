import HeroSection from "@/components/staging/home-v2/hero-section";
import CategoryCardsSection from "@/components/staging/home-v2/category-cards-section";
import TreatmentsSection from "@/components/staging/home-v2/treatments-section";
import SearchBarSection from "@/components/staging/home-v2/search-bar-section";
import HowItWorksSection from "@/components/staging/home/how-it-works-section";
import ValuePropsSection from "@/components/staging/home/value-props-section";
import ProductCarousel from "@/components/common/product-carousel";
import TrustSignalsSection from "@/components/staging/home/trust-signals-section";
import FinalCtaSection from "@/components/staging/home-v2/final-cta-section";
import { Product } from "@/components/shop/product-card";

const BEST_SELLERS: Product[] = [
  {
    id: "injectable-sermorelin",
    name: "Injectable Sermorelin",
    medicalName: "Sermorelin Acetate",
    price: "119.00",
    image: "/home/v2/treatment-injectable-sermorelin.png",
    slug: "injectable-sermorelin",
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
    id: "nad-plus-injection",
    name: "NAD+ Injection",
    medicalName: "Nicotinamide Adenine Dinucleotide",
    price: "149.00",
    image: "/home/v2/bestseller-nad-plus-injection.png",
    slug: "nad-plus-injection",
  },
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
];

export default function HomeV2() {
  return (
    <main>
      <HeroSection />
      <CategoryCardsSection />
      <TreatmentsSection />
      <SearchBarSection />
      <HowItWorksSection />
      <ValuePropsSection />
      <ProductCarousel title="Our Best Sellers" products={BEST_SELLERS} />
      <TrustSignalsSection />
      <FinalCtaSection />
    </main>
  );
}
