import Header from "@/components/common/Header";
import DeepDiveSection from "@/components/product/deep-dive-section";
import HeroSection from "@/components/product/hero-section";
import HowItWorksSection from "@/components/product/how-it-works-section";
import QuestionsSection from "@/components/product/questions";

export default function ProductPage() {
  return (
    <main>
      <section className="px-4 xl:px-0">
        <Header />
      </section>
      <HeroSection />
      <HowItWorksSection />
      <DeepDiveSection />
      <QuestionsSection />
    </main>
  );
}
