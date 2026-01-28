// File: src/app/(main)/shop/product/enclomiphene/page.tsx
import Header from "@/components/common/Header";
import ContentModule from "@/components/product/enclomiphene/content-module";
import DeepDiveSection from "@/components/product/enclomiphene/deep-dive-section";
import HeroSection from "@/components/product/enclomiphene/hero-section";
import QuestionsSection from "@/components/product/enclomiphene/questions";
// AI COFOUNDER: Import new and updated components
import HowItWorksSection from "@/components/product/enclomiphene/how-it-works-section";
import LabTestingSection from "@/components/product/enclomiphene/lab-testing-section";

export default function ProductPage() {
  return (
    <main>
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