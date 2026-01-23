import Header from "@/components/common/Header";
import HeroSection from "@/components/product/enclomiphene-v2/hero-section";
import ComparisonSection from "@/components/product/enclomiphene-v2/comparison-section";
import TimelineSection from "@/components/product/enclomiphene-v2/timeline-section";
import HowItWorksSection from "@/components/product/enclomiphene-v2/how-it-works-section";
import ScienceSection from "@/components/product/enclomiphene-v2/science-section";
import TestimonialsSection from "@/components/product/enclomiphene-v2/testimonials-section";
import FAQSection from "@/components/product/enclomiphene-v2/faq-section";
import FinalCTASection from "@/components/product/enclomiphene-v2/final-cta-section";

export const metadata = {
  title: "Enclomiphene | Natural Testosterone Booster | UnbrandedRx",
  description:
    "Boost testosterone naturally with Enclomiphene. A daily oral capsule that stimulates your body's own production—no injections, no fertility loss. From $79/month.",
};

export default function EnclomipheneV2Page() {
  return (
    <main>
      <section className="px-4 xl:px-0">
        <Header />
      </section>
      <HeroSection />
      <ComparisonSection />
      <TimelineSection />
      <HowItWorksSection />
      <ScienceSection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTASection />
    </main>
  );
}
