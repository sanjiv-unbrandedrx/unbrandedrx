import HeroSection from "@/components/staging/home/hero-section";
import FeaturedProductsSection from "@/components/staging/home/featured-products-section";
import HowItWorksSection from "@/components/staging/home/how-it-works-section";
import ValuePropsSection from "@/components/staging/home/value-props-section";
import TrustSignalsSection from "@/components/staging/home/trust-signals-section";
import ProductCarousel from "@/components/common/product-carousel";
import FinalCtaSection from "@/components/staging/home/final-cta-section";
import { Product } from "@/components/shop/product-card";

const BEST_SELLERS: Product[] = [
  {
    id: "injectable-sermorelin",
    name: "Injectable Sermorelin",
    medicalName: "Sermorelin Acetate",
    price: "119.00",
    image: "/products/enclomiphene-hero.png",
    slug: "injectable-sermorelin",
  },
  {
    id: "oral-sermorelin",
    name: "Oral Sermorelin",
    medicalName: "Sermorelin Acetate (Oral)",
    price: "119.00",
    image: "/products/enclomiphene-hero.png",
    slug: "oral-sermorelin",
  },
  {
    id: "nad-plus-injection",
    name: "NAD+ Injection",
    medicalName: "Nicotinamide Adenine Dinucleotide",
    price: "149.00",
    image: "/products/enclomiphene-hero.png",
    slug: "nad-plus-injection",
  },
  {
    id: "enclomiphene",
    name: "Enclomiphene",
    medicalName: "Enclomiphene Citrate",
    price: "79.00",
    image: "/products/enclomiphene-hero.png",
    slug: "enclomiphene",
  },
  {
    id: "ed-rapid-dissolve-tablet",
    name: "4-in-1 ED Rapid Dissolve",
    medicalName: "Tadalafil + Vardenafil + Apomorphine",
    price: "79.00",
    image: "/products/ed-rapid-dissolve-tablet-hero.png",
    slug: "ed-rapid-dissolve-tablet",
  },
];

export default function StagingHome() {
  return (
    <main>
      <HeroSection />
      <FeaturedProductsSection />
      <HowItWorksSection />
      <ValuePropsSection />
      <TrustSignalsSection />
      <ProductCarousel title="Our Best Sellers" products={BEST_SELLERS} />
      <FinalCtaSection />
    </main>
  );
}
