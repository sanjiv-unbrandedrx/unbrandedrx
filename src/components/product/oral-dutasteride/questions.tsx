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
                How do I use it?
              </AccordionTrigger>
              <AccordionContent className="text-xs">
                Take one capsule by mouth daily. For best results, be
                consistent and take it around the same time each day.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-2"
              className="border-0 rounded-3xl bg-white px-5"
            >
              <AccordionTrigger className="hover:no-underline font-semibold">
                Is this better than Finasteride?
              </AccordionTrigger>
              <AccordionContent className="text-xs">
                Dutasteride is a more powerful DHT blocker and can be more
                effective for some individuals, particularly those with more
                significant hair loss. However, the best treatment option
                depends on your specific situation. Your provider will help
                you make the right choice.
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
                While generally well-tolerated, Dutasteride can cause side
                effects similar to Finasteride, including sexual side
                effects. Due to its potency, the risk profile may differ
                slightly. It is critical to provide a full medical history
                during your online visit. [We will add a link to full safety
                information here].
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-4"
              className="border-0 rounded-3xl bg-white px-5"
            >
              <AccordionTrigger className="hover:no-underline font-semibold">
                How long before I see results?
              </AccordionTrigger>
              <AccordionContent className="text-xs">
                Consistency is key. Most men begin to see a reduction in hair
                loss or early signs of regrowth within 3-6 months of daily
                use. Maximum results are typically seen after 12 months.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-5"
              className="border-0 rounded-3xl bg-white px-5"
            >
              <AccordionTrigger className="hover:no-underline font-semibold">
                What happens if I stop taking it?
              </AccordionTrigger>
              <AccordionContent className="text-xs">
                The effects of Dutasteride are not permanent. If you stop
                taking it, your hair loss will likely resume within a few
                months, and any new growth may be lost.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}