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
        {/* SURGICAL STRIKE: Replaced the old 5 FAQs with a new, comprehensive list of 8 FAQs inspired by Strut Health. */}
        <div className="w-full flex-1">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem
              value="item-1"
              className="border-0 rounded-3xl bg-white px-5"
            >
              <AccordionTrigger className="hover:no-underline font-semibold">
                What is considered Premature Ejaculation (PE)?
              </AccordionTrigger>
              <AccordionContent className="text-xs">
                PE is a common condition where ejaculation occurs sooner than a
                man or his partner would like during sexual activity. If this
                is a recurring concern that causes you distress, a medical
                treatment like Dapoxetine may be an appropriate option to
                discuss with a provider.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-2"
              className="border-0 rounded-3xl bg-white px-5"
            >
              <AccordionTrigger className="hover:no-underline font-semibold">
                What is Dapoxetine and how does it work for PE?
              </AccordionTrigger>
              <AccordionContent className="text-xs">
                Dapoxetine is a prescription ingredient designed to help
                improve control over ejaculation. Unlike topical treatments,
                it&apos;s an oral capsule that works systemically. It functions by
                interacting with neurotransmitters in the nervous system to
                help delay the body&apos;s climax reflex, giving you more control
                over timing.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-3"
              className="border-0 rounded-3xl bg-white px-5"
            >
              <AccordionTrigger className="hover:no-underline font-semibold">
                Is this a daily pill or do I take it only when needed?
              </AccordionTrigger>
              <AccordionContent className="text-xs">
                This medication is designed for &quot;as-needed&quot; use. You do
                not need to take it every day. This approach offers
                flexibility and control, allowing you to take it only on days
                you anticipate sexual activity.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-4"
              className="border-0 rounded-3xl bg-white px-5"
            >
              <AccordionTrigger className="hover:no-underline font-semibold">
                How long before sexual activity should I take it?
              </AccordionTrigger>
              <AccordionContent className="text-xs">
                For best results, take one capsule with a full glass of water
                1-3 hours before sexual activity. Do not exceed one dose in a
                24-hour period.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-5"
              className="border-0 rounded-3xl bg-white px-5"
            >
              <AccordionTrigger className="hover:no-underline font-semibold">
                How is this different from numbing sprays or wipes?
              </AccordionTrigger>
              <AccordionContent className="text-xs">
                Numbing products work topically by desensitizing the penis,
                which can reduce pleasure for both you and your partner.
                Dapoxetine works from within on the neurological level to
                improve your control, without dulling sensation. It&apos;s a
                medical approach that addresses the issue systemically, not
                just on the surface.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-6"
              className="border-0 rounded-3xl bg-white px-5"
            >
              <AccordionTrigger className="hover:no-underline font-semibold">
                Can I take this if I also have Erectile Dysfunction (ED)?
              </AccordionTrigger>
              <AccordionContent className="text-xs">
                It is common for PE and ED to occur together. However,
                combining Dapoxetine with ED medications like Sildenafil or
                Tadalafil can increase the risk of side effects and must be
                done under a provider&apos;s supervision. If you experience both
                conditions, we recommend discussing our combination formulas,
                like the Ultimate Performance Capsule, with your provider
                during your online visit.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-7"
              className="border-0 rounded-3xl bg-white px-5"
            >
              <AccordionTrigger className="hover:no-underline font-semibold">
                What does &apos;off-label use&apos; mean for this medication in the
                U.S.?
              </AccordionTrigger>
              <AccordionContent className="text-xs">
                &quot;Off-label&quot; is a common and legal practice where a
                provider prescribes a medication for a condition other than
                what it was originally FDA-approved for, based on their
                professional judgment and scientific evidence. While
                Dapoxetine has been studied and is used in other countries
                specifically for PE, it is not yet FDA-approved for this
                purpose in the United States.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-8"
              className="border-0 rounded-3xl bg-white px-5"
            >
              <AccordionTrigger className="hover:no-underline font-semibold">
                What are the most common side effects?
              </AccordionTrigger>
              <AccordionContent className="text-xs">
                The most common potential side effects can include nausea,
                dizziness, or headache. Taking the capsule with a full glass
                of water can help minimize these. It is crucial to disclose
                your full medical history during your online visit so your
-               provider can determine if this treatment is safe and
                appropriate for you. For a comprehensive overview, please
                review the full safety information.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}