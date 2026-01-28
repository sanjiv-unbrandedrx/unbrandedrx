// src/app/(main)/shop/product/dapoxetine-max/page.tsx
import Header from "@/components/common/Header";
// TASK: Renamed product and updated import paths.
import ContentModule from "@/components/product/dapoxetine-max/content-module";
import DeepDiveSection from "@/components/product/dapoxetine-max/deep-dive-section";
import HeroSection from "@/components/product/dapoxetine-max/hero-section";
import QuestionsSection from "@/components/product/dapoxetine-max/questions";
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
      <ContentModule />
      <QuestionsSection />
    </main>
  );
}