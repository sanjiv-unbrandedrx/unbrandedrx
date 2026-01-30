import Header from "@/components/common/Header";
import HeroSection from "@/components/staging/product/injectable-sermorelin/hero-section";
import HowItWorksSection from "@/components/staging/product/how-it-works-section";
import DeepDiveSection from "@/components/staging/product/injectable-sermorelin/deep-dive-section";
import LabTestingSection from "@/components/staging/product/lab-testing-section";
import ContentModule from "@/components/staging/product/injectable-sermorelin/content-module";
import QuestionsSection from "@/components/staging/product/injectable-sermorelin/questions";

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
