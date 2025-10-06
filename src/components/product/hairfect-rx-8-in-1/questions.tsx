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
                How and when do I take it?
              </AccordionTrigger>
              <AccordionContent className="text-xs">
                Take one capsule with a full glass of water 1-3 hours before you
                anticipate sexual activity. Do not exceed one dose in a 24-hour
                period.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-2"
              className="border-0 rounded-3xl bg-white px-5"
            >
              <AccordionTrigger className="hover:no-underline font-semibold">
                Can I take this with ED medication?
              </AccordionTrigger>
              <AccordionContent className="text-xs">
                Combining Dapoxetine with PDE5 inhibitors like Sildenafil or
                Tadalafil can increase the risk of certain side effects. It is
                critical that you disclose all medications you are taking to
                your provider. For a combination solution, ask your provider
                about our Ultimate Performance Capsule.
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
                Potential side effects can include nausea, dizziness, or
                headache. Taking the capsule with a full glass of water can help
                minimize these. It&apos;s important to discuss your medical history
                thoroughly during your online visit. [Link to full safety
                information here].
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-4"
              className="border-0 rounded-3xl bg-white px-5"
            >
              <AccordionTrigger className="hover:no-underline font-semibold">
                Can I use Dapoxetine every day?
              </AccordionTrigger>
              <AccordionContent className="text-xs">
                Dapoxetine is intended for on-demand use and should not be taken
                daily. Please follow the instructions provided by your
                healthcare provider.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-5"
              className="border-0 rounded-3xl bg-white px-5"
            >
              <AccordionTrigger className="hover:no-underline font-semibold">
                What is considered Premature Ejaculation (PE)?
              </AccordionTrigger>
              <AccordionContent className="text-xs">
                PE is a common condition where ejaculation occurs sooner than a
                man or his partner would like during sexual activity. If this is
                a recurring concern for you, Dapoxetine may be an appropriate
                treatment option.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}