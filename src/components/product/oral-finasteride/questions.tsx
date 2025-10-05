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
                Take one capsule by mouth daily, with or without food. For best
                results, be consistent and take it around the same time each
                day.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-2"
              className="border-0 rounded-3xl bg-white px-5"
            >
              <AccordionTrigger className="hover:no-underline font-semibold">
                What&apos;s the difference between this and topical Finasteride?
              </AccordionTrigger>
              <AccordionContent className="text-xs">
                Oral Finasteride works systemically to lower DHT levels,
                addressing hair loss from the inside out. Topical treatments are
                applied directly to the scalp. Our oral formula also includes
                Minoxidil for a dual-action approach to regrowth in a single,
                convenient capsule.
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
                While generally well-tolerated, Finasteride can cause side
                effects in a small percentage of men, including sexual side
                effects. It is critical to discuss your medical history with
                your provider during your online visit. [We will add a link to
                full safety information here].
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
                Hair growth is a slow process. Most men begin to see a
                reduction in hair loss or early signs of regrowth within 3-6
                months of consistent daily use. Maximum results are typically
                seen after 12 months.
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
                The benefits of Finasteride last only as long as you are taking
                the medication. If you stop, DHT levels will return to their
                previous levels, and any hair that was gained or preserved will
                likely be lost within several months.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}