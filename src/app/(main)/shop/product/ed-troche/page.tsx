import Header from "@/components/common/Header";
import ContentModule from "@/components/product/ed-troche/content-module";
import DeepDiveSection from "@/components/product/ed-troche/deep-dive-section";
import HeroSection from "@/components/product/ed-troche/hero-section";
import QuestionsSection from "@/components/product/ed-troche/questions";
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