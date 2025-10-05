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
                How do I take it?
              </AccordionTrigger>
              <AccordionContent className="text-xs">
                Take one capsule by mouth daily, or as directed by your
                provider. It can be taken with or without food. Consistency is
                key for stable results.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-2"
              className="border-0 rounded-3xl bg-white px-5"
            >
              <AccordionTrigger className="hover:no-underline font-semibold">
                What benefits are associated with healthy testosterone
                levels?
              </AccordionTrigger>
              <AccordionContent className="text-xs">
                Optimizing testosterone levels can lead to improvements in
                energy, mood, libido, cognitive function, and body
                composition. Results vary from person to person.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-3"
              className="border-0 rounded-3xl bg-white px-5"
            >
              <AccordionTrigger className="hover:no-underline font-semibold">
                Is this a steroid?
              </AccordionTrigger>
              <AccordionContent className="text-xs">
                No. Enclomiphene is not a steroid. It is a SERM that
                stimulates your body to produce its own testosterone, rather
                than introducing synthetic hormones.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-4"
              className="border-0 rounded-3xl bg-white px-5"
            >
              <AccordionTrigger className="hover:no-underline font-semibold">
                Are there any side effects?
              </AccordionTrigger>
              <AccordionContent className="text-xs">
                Enclomiphene is generally well-tolerated. Potential side
                effects can include headache, nausea, or mood changes. A
                thorough review of your medical history with your provider is
                essential. [Link to full safety information here].
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-5"
              className="border-0 rounded-3xl bg-white px-5"
            >
              <AccordionTrigger className="hover:no-underline font-semibold">
                How long until I see results?
              </AccordionTrigger>
              <AccordionContent className="text-xs">
                Changes in hormone levels can often be measured in blood
                tests within a few weeks. However, feeling the subjective
                benefits, such as increased energy or libido, can take one
                to two months of consistent use.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}