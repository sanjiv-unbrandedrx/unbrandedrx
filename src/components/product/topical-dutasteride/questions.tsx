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
                How does this topical formula work for hair loss?
              </AccordionTrigger>
              <AccordionContent className="text-xs">
                This formula targets the root cause of male pattern
                baldness—the hormone Dihydrotestosterone (DHT)—directly at the
                scalp. Dutasteride, the primary active ingredient, is a potent
                DHT-blocker that helps prevent the hair follicle
                miniaturization that leads to thinning and hair loss.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-2"
              className="border-0 rounded-3xl bg-white px-5"
            >
              <AccordionTrigger className="hover:no-underline font-semibold">
                What&apos;s the difference between Topical Dutasteride and Topical
                Finasteride?
              </AccordionTrigger>
              <AccordionContent className="text-xs">
                Both are DHT-blockers, but Dutasteride is considered more
                powerful. It inhibits more of the 5-alpha-reductase enzyme
                responsible for producing DHT. This makes it a maximum-strength
                option, often recommended for men with more significant hair
                loss or for those who have not achieved their desired results
                with Finasteride.
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
                Our formula is designed for a multi-pronged attack on hair
                loss. <strong>Dutasteride</strong> blocks DHT,{" "}
                <strong>Minoxidil</strong> helps stimulate new growth by
                increasing blood flow, <strong>Tretinoin</strong> enhances the
                scalp penetration of the other ingredients, and{" "}
                <strong>Fluocinolone</strong> helps reduce scalp inflammation,
                creating a healthier environment for follicles to thrive.
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
                Apply 1ml of the solution to a clean, dry scalp once daily.
                Focus on the areas where you are experiencing thinning, massage
                it in gently, and allow it to dry. Be sure to wash your hands
                thoroughly after each application.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-5"
              className="border-0 rounded-3xl bg-white px-5"
            >
              <AccordionTrigger className="hover:no-underline font-semibold">
                Can I switch from Topical Finasteride to this?
              </AccordionTrigger>
              <AccordionContent className="text-xs">
                Yes, switching from Topical Finasteride to the more potent
                Topical Dutasteride is a common progression for some men
                seeking better results. However, you should first complete a
                follow-up consultation with your provider to ensure it is a
                safe and appropriate choice for you.
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
                Consistency is crucial. Most men begin to see initial results,
                such as reduced shedding or early signs of regrowth, within
                3-6 months of daily use. Maximum benefits are typically visible
                after 12 months of continued application.
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
                The use of Dutasteride for hair loss is considered an
                &quot;off-label&quot; use. Additionally, our multi-ingredient
                formula is a &quot;compounded medication,&quot; custom-prepared by a
                licensed U.S. pharmacy. As a compounded drug, this specific
                formula is not FDA-approved.
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
                Since this is a topical treatment, the most common side
                effects are typically localized to the application site, such
                as scalp itching or irritation. While the risk of systemic
                side effects is lower than with oral medications, it is still
                possible. A thorough review of your medical history with your
                provider is essential. Please see the full safety information
                for a comprehensive overview.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}