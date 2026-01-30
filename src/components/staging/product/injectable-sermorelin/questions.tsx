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
                What is Sermorelin?
              </AccordionTrigger>
              <AccordionContent className="text-xs">
                Sermorelin is a synthetic peptide that mimics the first 29
                amino acids of your body&apos;s own growth hormone-releasing
                hormone (GHRH). It signals your pituitary gland to produce and
                release more of its own natural growth hormone. This is
                different from synthetic HGH, because it stimulates your body
                to produce more growth hormone on its own rather than injecting
                it directly.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-2"
              className="border-0 rounded-3xl bg-white px-5"
            >
              <AccordionTrigger className="hover:no-underline font-semibold">
                How does Injectable Sermorelin work?
              </AccordionTrigger>
              <AccordionContent className="text-xs">
                Injectable Sermorelin works by binding to GHRH receptors in the
                pituitary gland, triggering the natural release of growth
                hormone. With increased growth hormone levels, you may notice
                improvements in energy, sleep quality, body composition, lean
                muscle mass, recovery time, and overall vitality. Because it
                works through your body&apos;s own systems, it produces a
                natural, pulsatile release pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-3"
              className="border-0 rounded-3xl bg-white px-5"
            >
              <AccordionTrigger className="hover:no-underline font-semibold">
                How do I use Injectable Sermorelin?
              </AccordionTrigger>
              <AccordionContent className="text-xs">
                Injectable Sermorelin is administered as a subcutaneous
                injection, typically once daily for 5 days followed by 2 days
                off. Clean your injection site and medication vial with a
                sterile alcohol pad. Recommended sites include the upper leg,
                upper arm, or stomach (at least 2 inches from your navel).
                Pinch the skin, insert the needle straight in, slowly press the
                plunger, then remove and dispose of the needle in a sharps
                container. Rotate injection sites to reduce soreness. Always
                follow your prescriber&apos;s specific instructions.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-4"
              className="border-0 rounded-3xl bg-white px-5"
            >
              <AccordionTrigger className="hover:no-underline font-semibold">
                How long until I see results?
              </AccordionTrigger>
              <AccordionContent className="text-xs">
                Different effects may become noticeable at different times. Some
                benefits — such as improved energy, sleep quality, and mood —
                may be noticed within a few weeks of consistent use. Other
                changes, like improvements in body composition and lean muscle
                mass, may take several months. Individual results vary based on
                age, health status, adherence to treatment, and lifestyle
                factors like diet and exercise.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-5"
              className="border-0 rounded-3xl bg-white px-5"
            >
              <AccordionTrigger className="hover:no-underline font-semibold">
                Is Sermorelin the same as HGH?
              </AccordionTrigger>
              <AccordionContent className="text-xs">
                No. Sermorelin and synthetic HGH work very differently. HGH
                injections introduce external growth hormone directly into the
                body, which can suppress your natural production over time.
                Sermorelin is a GHRH analog that signals your pituitary gland
                to produce more of its own growth hormone naturally —
                preserving your body&apos;s endocrine feedback loops.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-6"
              className="border-0 rounded-3xl bg-white px-5"
            >
              <AccordionTrigger className="hover:no-underline font-semibold">
                Do I need lab work?
              </AccordionTrigger>
              <AccordionContent className="text-xs">
                Yes. To ensure this treatment is appropriate and safe for you,
                your provider will require baseline lab work to evaluate your
                current hormone levels before prescribing. Periodic follow-up
                labs may also be recommended to monitor your progress and
                adjust your treatment plan as needed.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-7"
              className="border-0 rounded-3xl bg-white px-5"
            >
              <AccordionTrigger className="hover:no-underline font-semibold">
                What are the potential side effects?
              </AccordionTrigger>
              <AccordionContent className="text-xs">
                Injectable Sermorelin is generally well-tolerated. Common side
                effects may include headache, nausea, dizziness, flushing,
                restlessness, itching, joint pain, and pain or tenderness at
                the injection site. More serious but less common side effects
                may include severe allergic reactions and unwanted metabolic or
                hormonal changes. Disclose your full medical history during
                your online visit so your provider can determine if this is
                safe for you.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-8"
              className="border-0 rounded-3xl bg-white px-5"
            >
              <AccordionTrigger className="hover:no-underline font-semibold">
                What should I avoid while taking Sermorelin?
              </AccordionTrigger>
              <AccordionContent className="text-xs">
                Avoid using other medications that increase growth hormone
                levels to prevent levels from becoming too high. You may also
                want to reduce or avoid alcohol and highly processed or sugary
                foods, as these can counteract the positive effects of
                treatment. Take your injection as directed — typically in the
                evening on an empty stomach — to align with your body&apos;s
                natural growth hormone release cycle during sleep.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
