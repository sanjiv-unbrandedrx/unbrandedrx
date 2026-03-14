import HeroSection from "@/components/staging/home-v2/hero-section";
import CategoryCardsSection from "@/components/staging/home-v2/category-cards-section";

import HowItWorksSection from "@/components/staging/home/how-it-works-section";
import ValuePropsSection from "@/components/staging/home/value-props-section";
import ProductCarousel from "@/components/common/product-carousel";
import TrustSignalsSection from "@/components/staging/home/trust-signals-section";
import FinalCtaSection from "@/components/staging/home-v2/final-cta-section";
import Footer from "@/components/common/Footer";
import { Product } from "@/components/shop/product-card";

const BEST_SELLERS: Product[] = [
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
];

export default function HomeV2() {
  return (
    <>
    <main>
      <HeroSection />
      <CategoryCardsSection />
      <ProductCarousel title="Our Best Sellers" products={BEST_SELLERS} />
      <HowItWorksSection />
      <ValuePropsSection />
      <TrustSignalsSection />
      <FinalCtaSection />
    </main>
    <Footer />
    </>
  );
}
