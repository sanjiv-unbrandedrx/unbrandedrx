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
        <div className="w-full flex-1">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem
              value="item-1"
              className="border-0 rounded-3xl bg-white px-5"
            >
              <AccordionTrigger className="hover:no-underline font-semibold">
                How do I apply it?
              </AccordionTrigger>
              <AccordionContent className="text-xs">
                Apply 1ml of the solution to a clean, dry scalp once daily,
                focusing on areas of thinning. Gently massage it in and let it
                dry. Wash your hands thoroughly after application.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-2"
              className="border-0 rounded-3xl bg-white px-5"
            >
              <AccordionTrigger className="hover:no-underline font-semibold">
                Is this better than Topical Finasteride?
              </AccordionTrigger>
              <AccordionContent className="text-xs">
                It is a more powerful DHT blocker and may be more effective
                for advanced cases of male pattern baldness. &quot;Better&quot;
                depends on the individual. Your provider will review your case
                to recommend the most appropriate treatment.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-3"
              className="border-0 rounded-3xl bg-white px-5"
            >
              <AccordionTrigger className="hover:no-underline font-semibold">
                Are there any side effects?
              </AccordionTrigger>
              <AccordionContent className="text-xs">
                The most common side effects are localized to the application
                site, such as scalp itching or irritation. Given its potency,
                it&apos;s crucial to discuss your full medical history with your
                provider to understand the risk profile. [We will add a link
                to full safety information here].
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-4"
              className="border-0 rounded-3xl bg-white px-5"
            >
              <AccordionTrigger className="hover:no-underline font-semibold">
                Can I switch from Topical Finasteride to this?
              </AccordionTrigger>
              <AccordionContent className="text-xs">
                Yes, this is a common treatment progression. If you are
                interested in switching, you should first complete a
                follow-up consultation with your provider to ensure it is a
                safe and appropriate choice for you.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-5"
              className="border-0 rounded-3xl bg-white px-5"
            >
              <AccordionTrigger className="hover:no-underline font-semibold">
                How long before I see results?
              </AccordionTrigger>
              <AccordionContent className="text-xs">
                With consistent daily use, most men see initial results, such
                as reduced shedding or early regrowth, within 3-6 months.
                Maximum results are typically visible after 12 months.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}