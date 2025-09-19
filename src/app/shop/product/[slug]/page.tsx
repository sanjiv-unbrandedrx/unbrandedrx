import Header from "@/components/common/Header";
import DeepDiveSection from "@/components/product/deep-dive-section";
import HeroSection from "@/components/product/hero-section";
import HowItWorksSection from "@/components/product/how-it-works-section";
import Questions from "@/components/product/questions";

export default function ProductPage() {
  return (
    <main>
      <Header />
      <HeroSection />
      <HowItWorksSection />
      <DeepDiveSection />
      <Questions />
    </main>
  );
}
