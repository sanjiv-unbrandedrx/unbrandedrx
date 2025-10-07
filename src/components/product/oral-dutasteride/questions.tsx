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
                How does this formula work for hair loss?
              </AccordionTrigger>
              <AccordionContent className="text-xs">
                Male pattern hair loss is primarily caused by the hormone
                Dihydrotestosterone (DHT), which shrinks hair follicles.
                Dutasteride, the key ingredient in this formula, is a powerful
                prescription medication that works by blocking the enzyme that
                converts testosterone into DHT. This helps to halt the
                progression of hair loss and protect your follicles.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-2"
              className="border-0 rounded-3xl bg-white px-5"
            >
              <AccordionTrigger className="hover:no-underline font-semibold">
                What&apos;s the difference between Oral Dutasteride and
                Finasteride?
              </AccordionTrigger>
              <AccordionContent className="text-xs">
                Both are DHT-blockers, but Dutasteride is more potent. It
                works by blocking two types of the 5-alpha-reductase enzyme
                that produces DHT, while Finasteride only blocks one. For this
                reason, Dutasteride is often considered a stronger option for
                men with more advanced hair loss or for those who haven&apos;t
                seen the desired results with Finasteride.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-3"
              className="border-0 rounded-3xl bg-white px-5"
            >
              <AccordionTrigger className="hover:no-underline font-semibold">
                Why is this formula combined with Minoxidil?
              </AccordionTrigger>
              <AccordionContent className="text-xs">
                This formula provides a dual-action approach to treating hair
                loss. While Dutasteride works to block DHT and prevent further
                loss, Oral Minoxidil works by increasing blood flow and
                nutrient delivery to the scalp. This helps to reactivate
                dormant follicles and actively promote new growth.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-4"
              className="border-0 rounded-3xl bg-white px-5"
            >
              <AccordionTrigger className="hover:no-underline font-semibold">
                How do I use it?
              </AccordionTrigger>
              <AccordionContent className="text-xs">
                Take one capsule by mouth daily, with or without food. For
                best results, consistency is key, so we recommend taking it
                around the same time each day.
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
                Hair growth is a slow process. You may start to see initial
                improvements, such as reduced shedding, in as little as 3-6
                months. It is recommended to use the medication for at least
                6-12 months to see the most significant results.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-6"
              className="border-0 rounded-3xl bg-white px-5"
            >
              <AccordionTrigger className="hover:no-underline font-semibold">
                What happens if I stop taking it?
              </AccordionTrigger>
              <AccordionContent className="text-xs">
                The benefits of this medication are not permanent. If you stop
                taking it, your DHT levels will return to their previous
                state, and your hair loss will likely resume. Any hair that
                was preserved or regrown will likely be lost within several
                months.
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
                The use of Dutasteride for male pattern hair loss is
                considered an &quot;off-label&quot; use, which is a common and legal
                practice by physicians. Additionally, our formula is a
                &quot;compounded medication,&quot; meaning it&apos;s custom-prepared by
                a licensed U.S. pharmacy to combine multiple ingredients.
                Compounded drugs are not themselves FDA-approved.
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
                While generally well-tolerated, potential side effects can
                occur, which may include sexual side effects similar to those
                of Finasteride. A thorough and honest consultation with your
                provider is essential to determine if this treatment is safe
                for you. For a comprehensive overview, please review the full
                safety information.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}