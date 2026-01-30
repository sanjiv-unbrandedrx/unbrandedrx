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
                What is NAD+ and why is it important?
              </AccordionTrigger>
              <AccordionContent className="text-xs">
                NAD+ (Nicotinamide Adenine Dinucleotide) is a coenzyme naturally
                present in every cell of your body. It plays a critical role in
                cellular energy production, DNA repair, and activating sirtuins
                — proteins essential for healthy aging. Research indicates that
                NAD+ levels decline significantly as we age, which may
                contribute to fatigue, cognitive decline, and slower recovery.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-2"
              className="border-0 rounded-3xl bg-white px-5"
            >
              <AccordionTrigger className="hover:no-underline font-semibold">
                How does NAD+ Injection work?
              </AccordionTrigger>
              <AccordionContent className="text-xs">
                NAD+ Injection delivers pharmaceutical-grade Nicotinamide
                Adenine Dinucleotide directly into your body via subcutaneous
                injection, bypassing the digestive system for more efficient
                absorption. Once in circulation, NAD+ supports mitochondrial
                energy production (ATP synthesis), activates sirtuins for DNA
                repair, and supports overall cellular resilience and function.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-3"
              className="border-0 rounded-3xl bg-white px-5"
            >
              <AccordionTrigger className="hover:no-underline font-semibold">
                How is injectable NAD+ different from oral supplements?
              </AccordionTrigger>
              <AccordionContent className="text-xs">
                Oral NAD+ supplements have limited bioavailability because much
                of the compound is broken down during digestion before reaching
                your cells. Injectable NAD+ bypasses the digestive system
                entirely, delivering the coenzyme directly into circulation for
                more efficient cellular uptake. This means more of the active
                compound reaches the cells where it&apos;s needed.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-4"
              className="border-0 rounded-3xl bg-white px-5"
            >
              <AccordionTrigger className="hover:no-underline font-semibold">
                What are the potential benefits of NAD+ therapy?
              </AccordionTrigger>
              <AccordionContent className="text-xs">
                Patients often report improvements in energy levels and overall
                vitality, mental clarity and focus, and a general sense of
                well-being. NAD+ also supports your body&apos;s natural DNA
                repair processes and cellular resilience — key components of
                healthy aging. Individual results vary. NAD+ injections are
                compounded and are not FDA-approved for these uses.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-5"
              className="border-0 rounded-3xl bg-white px-5"
            >
              <AccordionTrigger className="hover:no-underline font-semibold">
                How long does NAD+ take to work?
              </AccordionTrigger>
              <AccordionContent className="text-xs">
                The timeline varies among individuals. Some patients report
                subjective changes — such as improved energy and mental clarity
                — within days of starting treatment, while others may notice
                gradual improvements over several weeks. Consistent use as
                directed by your provider is important for experiencing the full
                range of potential benefits.
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
                your provider will require baseline lab work before prescribing.
                This helps evaluate your current health status and identify any
                conditions that may affect treatment. Periodic follow-up labs
                may also be recommended to monitor your response.
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
                NAD+ Injection is generally well-tolerated. Common side effects
                may include mild warmth or flushing, lightheadedness, mild
                temporary fatigue, mild nausea, and injection site reactions
                (pain, redness, swelling, or tenderness). More serious but rare
                side effects may include severe allergic reactions, dizziness or
                fainting, and prolonged fatigue. Disclose your full medical
                history during your online visit so your provider can determine
                if this is safe for you.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-8"
              className="border-0 rounded-3xl bg-white px-5"
            >
              <AccordionTrigger className="hover:no-underline font-semibold">
                Who should not use NAD+ injections?
              </AccordionTrigger>
              <AccordionContent className="text-xs">
                NAD+ injections may not be appropriate for individuals with a
                known allergy to NAD+ or any component of the formulation,
                severe cardiovascular conditions, active cancer or ongoing
                cancer treatment, severe kidney or liver disease, those who are
                pregnant or breastfeeding, those on blood-thinning medications
                (without provider approval), or individuals with compromised
                immune systems. Always disclose your complete medical history to
                your provider.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-9"
              className="border-0 rounded-3xl bg-white px-5"
            >
              <AccordionTrigger className="hover:no-underline font-semibold">
                What should I avoid while using NAD+ injections?
              </AccordionTrigger>
              <AccordionContent className="text-xs">
                Avoid making medication changes without consulting your
                provider. You should also avoid excessive alcohol consumption,
                high-dose niacin supplements (which share metabolic pathways
                with NAD+), extreme dieting or fasting protocols, and making
                multiple simultaneous supplement changes — as these can
                interfere with treatment effectiveness or make it harder to
                evaluate your response.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
