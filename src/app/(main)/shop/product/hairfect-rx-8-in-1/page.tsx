// src/app/(main)/shop/product/dapoxetine/page.tsx
import Header from "@/components/common/Header";
// SURGICAL STRIKE: Corrected component names and imports to align with scaffolding
import ContentModule from "@/components/product/hairfect-rx-8-in-1/content-module";
import DeepDiveSection from "@/components/product/hairfect-rx-8-in-1/deep-dive-section";
import HeroSection from "@/components/product/hairfect-rx-8-in-1/hero-section";
import QuestionsSection from "@/components/product/hairfect-rx-8-in-1/questions";
import HowItWorksSection from "@/components/product/how-it-works-section";

export default function ProductPage() {
  return (
    <main>
      <section className="px-4 xl:px-0">
        <Header />
      </section>
      <HeroSection />
      <HowItWorksSection />
      <DeepDiveSection />
      {/* SURGICAL STRIKE: Using the correct ContentModule component */}
      <ContentModule />
      <QuestionsSection />
    </main>
  );
}
