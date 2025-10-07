// src/components/product/topical-finasteride/questions.tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function QuestionsSection() {
  return (
    <section className="bg-secondary py-20">
      <div className="container mx-auto flex flex-col items-start justify-start gap-x-10 px-4 xl:flex-row xl:px-0">
        <h3 className="min-w-sm mb-6 font-title text-3xl font-medium xl:mb-0">
          Product Questions
        </h3>
        {/* SURGICAL STRIKE: Replaced the old 5 FAQs with a new, comprehensive list of 8 FAQs. */}
        <div className="w-full flex-1">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem
              value="item-1"
              className="border-0 rounded-3xl bg-white px-5"
            >
              <AccordionTrigger className="hover:no-underline font-semibold">
                How does this topical formula work?
              </AccordionTrigger>
              <AccordionContent className="text-xs">
                This formula works by targeting Dihydrotestosterone (DHT), the
                hormone that causes male pattern hair loss, directly at the
                scalp. The active ingredient, Finasteride, helps to block the
                conversion of testosterone to DHT locally, which can prevent
                hair follicles from shrinking and help stop hair loss at its
                source.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-2"
              className="border-0 rounded-3xl bg-white px-5"
            >
              <AccordionTrigger className="hover:no-underline font-semibold">
                Why choose a topical formula over an oral pill?
              </AccordionTrigger>
              <AccordionContent className="text-xs">
                A topical formula is a great alternative for men who prefer not
                to take a daily pill. By delivering the active ingredients
                directly to the scalp, it focuses the treatment on the area
                where it&apos;s needed most. This localized approach is also
                thought to have a lower risk of systemic side effects compared
                to the oral tablet form.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-3"
              className="border-0 rounded-3xl bg-white px-5"
            >
              <AccordionTrigger className="hover:no-underline font-semibold">
                Why does this formula contain multiple active ingredients?
              </AccordionTrigger>
              <AccordionContent className="text-xs">
                Our formula is designed for a comprehensive, multi-action
                approach. <strong>Finasteride</strong> blocks DHT to prevent
                further loss, <strong>Minoxidil</strong> helps stimulate
                regrowth by increasing blood flow to follicles,{" "}
                <strong>Tretinoin</strong> improves the scalp&apos;s absorption of
                the other ingredients, and <strong>Fluocinolone</strong> helps
                soothe scalp inflammation.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-4"
              className="border-0 rounded-3xl bg-white px-5"
            >
              <AccordionTrigger className="hover:no-underline font-semibold">
                How do I apply it?
              </AccordionTrigger>
              <AccordionContent className="text-xs">
                Once daily, apply 1ml of the solution to the affected areas of
                a clean, dry scalp. Massage it in gently and let it dry
                completely. It&apos;s important to wash your hands thoroughly after
                you&apos;ve finished applying it.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-5"
              className="border-0 rounded-3xl bg-white px-5"
            >
              <AccordionTrigger className="hover:no-underline font-semibold">
                Will it make my hair greasy, and can I use styling products?
              </AccordionTrigger>
              <AccordionContent className="text-xs">
                The solution is designed to be lightweight and absorb into the
                scalp. To minimize any effect on your hairstyle, we recommend
                applying it at night. You can use styling products, but you
                should always apply the treatment first and wait for it to dry
                completely before using any gels, sprays, or other products.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-6"
              className="border-0 rounded-3xl bg-white px-5"
            >
              <AccordionTrigger className="hover:no-underline font-semibold">
                How long before I see results?
              </AccordionTrigger>
              <AccordionContent className="text-xs">
                Daily, consistent application is key. Most men start to notice
                less shedding or the first signs of regrowth within 3-6
                months. The most significant results are typically seen after
                12 months of continuous use.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-7"
              className="border-0 rounded-3xl bg-white px-5"
            >
              <AccordionTrigger className="hover:no-underline font-semibold">
                Is this medication FDA-approved?
              </AccordionTrigger>
              <AccordionContent className="text-xs">
                While the oral form of Finasteride 1mg is FDA-approved for
                hair loss, using it topically is considered an &quot;off-label&quot;
                use. Furthermore, our multi-ingredient formula is a
                &quot;compounded medication,&quot; custom-made by a licensed U.S.
                pharmacy. As a compounded drug, this specific formula is not
                FDA-approved.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-8"
              className="border-0 rounded-3xl bg-white px-5"
            >
              <AccordionTrigger className="hover:no-underline font-semibold">
                What are the potential side effects?
              </AccordionTrigger>
              <AccordionContent className="text-xs">
                The most common side effects are typically mild and localized
                to the scalp, such as itching, redness, or irritation. While
                the risk is considered lower than with oral Finasteride,
                systemic side effects are still possible. It&apos;s essential to
                discuss your full medical history with your provider. Please
                review the full safety information for more details.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}