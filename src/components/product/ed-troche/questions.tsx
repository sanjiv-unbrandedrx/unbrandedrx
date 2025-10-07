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
                How do I use a troche?
              </AccordionTrigger>
              <AccordionContent className="text-xs">
                Place one troche under your tongue and allow it to dissolve
                completely. Do not chew or swallow it, as this affects its
                absorption. For best results, use it 15-30 minutes before you
                anticipate sexual activity.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-2"
              className="border-0 rounded-3xl bg-white px-5"
            >
              <AccordionTrigger className="hover:no-underline font-semibold">
                What does &apos;sublingual&apos; mean and why is it better?
              </AccordionTrigger>
              <AccordionContent className="text-xs">
                &quot;Sublingual&quot; means &quot;under the tongue.&quot; This delivery
                method allows the active ingredients to be absorbed directly
                into the bloodstream through the rich network of capillaries
                there. By bypassing the digestive system, it often results in
                a faster onset of action compared to traditional pills that
                need to be swallowed.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-3"
              className="border-0 rounded-3xl bg-white px-5"
            >
              <AccordionTrigger className="hover:no-underline font-semibold">
                Why a 4-in-1 formula?
              </AccordionTrigger>
              <AccordionContent className="text-xs">
                Erectile dysfunction can be complex. Our 4-in-1 formula is
                designed as a multi-pathway solution, targeting both the
                physical and psychological aspects of erectile function. It
                combines powerful PDE5 inhibitors (Tadalafil & Vardenafil) to
                improve blood flow, with ingredients like Apomorphine and
                Oxytocin that work with the brain&apos;s arousal pathways.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-4"
              className="border-0 rounded-3xl bg-white px-5"
            >
              <AccordionTrigger className="hover:no-underline font-semibold">
                How is this different from Viagra® or Cialis®?
              </AccordionTrigger>
              <AccordionContent className="text-xs">
                While it contains active ingredients from the same class as
                Cialis® (Tadalafil) and Levitra® (Vardenafil), our formula is
                more comprehensive. It also includes Apomorphine and Oxytocin
                to support arousal pathways in the brain. It’s a multi-symptom
                approach in a fast-acting sublingual form, not just a standard
                pill.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-5"
              className="border-0 rounded-3xl bg-white px-5"
            >
              <AccordionTrigger className="hover:no-underline font-semibold">
                How fast does it work and how long do the effects last?
              </AccordionTrigger>
              <AccordionContent className="text-xs">
                Thanks to the sublingual delivery, many men feel the effects
                in as little as 15-30 minutes. The Tadalafil component is
                long-acting, meaning the medication can remain effective in
                your system for up to 36 hours. This doesn&apos;t mean you will
                have an erection for the entire time, but it allows for more
                spontaneity.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-6"
              className="border-0 rounded-3xl bg-white px-5"
            >
              <AccordionTrigger className="hover:no-underline font-semibold">
                Can I take it with food or alcohol?
              </AccordionTrigger>
              <AccordionContent className="text-xs">
                Because the medication is absorbed sublingually, its
                effectiveness is less likely to be impacted by food. However,
                heavy meals can still affect performance, and excessive
                alcohol consumption can increase the risk of side effects like
                dizziness and may decrease the medication&apos;s effectiveness.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-7"
              className="border-0 rounded-3xl bg-white px-5"
            >
              <AccordionTrigger className="hover:no-underline font-semibold">
                What are the most common side effects?
              </AccordionTrigger>
              <AccordionContent className="text-xs">
                Common side effects are similar to other ED medications and
                can include headache, flushing, or nasal congestion. Because
                this is a combination of multiple active ingredients, it is
                crucial to discuss your full medical history with your
                provider. For a comprehensive overview, please review the full
                safety information.
                {/* BUG FIX: Corrected the closing tag for AccordionContent */}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-8"
              className="border-0 rounded-3xl bg-white px-5"
            >
              <AccordionTrigger className="hover:no-underline font-semibold">
                Is this a compounded medication?
              </AccordionTrigger>
              <AccordionContent className="text-xs">
                Yes. This is a compounded medication, meaning it is
                custom-prepared by a licensed U.S. compounding pharmacy. This
                allows for the combination of multiple active ingredients into
                a single formula. Compounded drugs are not FDA-approved, as
                the FDA does not verify their safety or effectiveness.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}