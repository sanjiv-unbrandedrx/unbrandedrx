import Header from "@/components/common/Header";
import HeroSection from "@/components/staging/product/nad-plus-injection/hero-section";
import HowItWorksSection from "@/components/staging/product/how-it-works-section";
import DeepDiveSection from "@/components/staging/product/nad-plus-injection/deep-dive-section";
import LabTestingSection from "@/components/staging/product/lab-testing-section";
import ContentModule from "@/components/staging/product/nad-plus-injection/content-module";
import QuestionsSection from "@/components/staging/product/nad-plus-injection/questions";

export default function ProductPage() {
  return (
    <main>
      <section className="px-4 xl:px-0">
        <Header />
      </section>
      <HeroSection />
      <HowItWorksSection />
      <DeepDiveSection />
      <LabTestingSection />
      <ContentModule />
      <QuestionsSection />
    </main>
  );
}
