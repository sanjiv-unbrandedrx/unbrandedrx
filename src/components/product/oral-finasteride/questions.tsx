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
                This formula targets the root cause of male pattern baldness.
                The active ingredient, Finasteride, is a prescription
                medication that works by blocking the production of
                Dihydrotestosterone (DHT), the hormone primarily responsible
                for shrinking hair follicles and causing hair to thin.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-2"
              className="border-0 rounded-3xl bg-white px-5"
            >
              <AccordionTrigger className="hover:no-underline font-semibold">
                Why is Finasteride combined with Oral Minoxidil?
              </AccordionTrigger>
              <AccordionContent className="text-xs">
                This combination creates a powerful &quot;one-two punch&quot;
                against hair loss. While Finasteride works to stop further
                loss by blocking DHT, Oral Minoxidil helps to stimulate
                regrowth. It works by increasing blood flow to the scalp, which
                can help reactivate dormant follicles and promote the growth
                of thicker, healthier hair.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-3"
              className="border-0 rounded-3xl bg-white px-5"
            >
              <AccordionTrigger className="hover:no-underline font-semibold">
                What&apos;s the difference between oral and topical Finasteride?
              </AccordionTrigger>
              <AccordionContent className="text-xs">
                Oral Finasteride is a daily capsule that works systemically to
                lower DHT levels throughout your body. Topical Finasteride is
                applied directly to the scalp to target the hair follicles
                more locally. The choice between them often comes down to
                personal preference and your provider&apos;s recommendation based
                on your health history and hair loss pattern.
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
                Take one capsule by mouth every day. For the best results,
                it&apos;s important to be consistent and take it around the same
                time each day. It can be taken with or without food.
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
                Hair growth is a gradual process. Most men start to see a
                reduction in hair loss or the first signs of new growth within
                3-6 months of consistent daily use. Maximum benefits are
                typically seen after about 12 months.
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
                The benefits of Finasteride and Minoxidil only last as long as
                you are taking the medication. If you stop, your DHT levels
                will return to normal, and any hair you have preserved or
                regrown will likely be lost within the following several
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
                Finasteride 1mg is an FDA-approved medication for the
                treatment of male pattern hair loss. However, our specific
                formula is a &quot;compounded medication,&quot; meaning it&apos;s
                custom-prepared by a licensed U.S. pharmacy to combine
                Finasteride with Oral Minoxidil. Compounded drugs are not
                themselves FDA-approved.
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
                occur. For Finasteride, this can include sexual side effects
                in a small percentage of men. It is crucial to provide a
                complete and accurate medical history during your online visit
                for your provider to determine if this treatment is safe for
                you. Please review the full safety information for a
                comprehensive overview.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}