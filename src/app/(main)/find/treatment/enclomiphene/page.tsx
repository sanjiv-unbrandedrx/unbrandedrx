// File: src/app/(main)/shop/product/enclomiphene/page.tsx
import type { Metadata } from "next";
import Header from "@/components/common/Header";
import ContentModule from "@/components/product/enclomiphene/content-module";
import DeepDiveSection from "@/components/product/enclomiphene/deep-dive-section";
import HeroSection from "@/components/product/enclomiphene/hero-section";
import QuestionsSection from "@/components/product/enclomiphene/questions";
// AI COFOUNDER: Import new and updated components
import HowItWorksSection from "@/components/product/enclomiphene/how-it-works-section";
import LabTestingSection from "@/components/product/enclomiphene/lab-testing-section";
import ProductJsonLd from "@/components/seo/product-jsonld";

export const metadata: Metadata = {
  title: "Enclomiphene",
  description:
    "Enclomiphene Citrate — a modern oral medication to support your body's natural testosterone production. From $79/month, prescribed by a licensed U.S. provider.",
};

export default function ProductPage() {
  return (
    <main>
      <ProductJsonLd
        name="Enclomiphene"
        description="A modern, oral medication designed to support your body's natural testosterone production."
        image="/products/enclomiphene-hero.png"
        price="79.00"
        sku="enclo-citrate"
        url="/find/treatment/enclomiphene"
      />
      <section className="px-4 xl:px-0">
        <Header />
      </section>
      <HeroSection />
      {/* AI COFOUNDER: Use the new enclomiphene-specific 'How It Works' section */}
      <HowItWorksSection />
      <DeepDiveSection />
      {/* AI COFOUNDER: Add the new Lab Testing section */}
      <LabTestingSection />
      <ContentModule />
      <QuestionsSection />
    </main>
  );
}