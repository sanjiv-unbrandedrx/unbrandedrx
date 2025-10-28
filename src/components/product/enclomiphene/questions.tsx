// File: src/components/product/enclomiphene/questions.tsx
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
        {/* AI COFOUNDER: Confirmed the lab testing question is present in the FAQ as per our plan. */}
        <div className="w-full flex-1">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem
              value="item-1"
              className="border-0 rounded-3xl bg-white px-5"
            >
              <AccordionTrigger className="hover:no-underline font-semibold">
                How does Enclomiphene work?
              </AccordionTrigger>
              <AccordionContent className="text-xs">
                Enclomiphene is a selective estrogen receptor modulator (SERM).
                It works by signaling your brain to increase the production of
                Luteinizing Hormone (LH) and Follicle-Stimulating Hormone
                (FSH). These are key hormones that stimulate your testes to
                produce more of your body&apos;s own testosterone naturally.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-2"
              className="border-0 rounded-3xl bg-white px-5"
            >
              <AccordionTrigger className="hover:no-underline font-semibold">
                How is this different from traditional Testosterone
                Replacement Therapy (TRT)?
              </AccordionTrigger>
              <AccordionContent className="text-xs">
                Traditional TRT involves introducing external testosterone
                into your body via injections or gels, which can cause your
                natural production to shut down and may lead to side effects
                like testicular shrinkage. Enclomiphene works differently by
                encouraging your body to produce its own testosterone,
                preserving your natural hormonal function.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-3"
              className="border-0 rounded-3xl bg-white px-5"
            >
              <AccordionTrigger className="hover:no-underline font-semibold">
                What&apos;s the difference between Enclomiphene and Clomiphene?
              </AccordionTrigger>
              <AccordionContent className="text-xs">
                Clomiphene (often sold as Clomid®) contains a mixture of two
                isomers: zuclomiphene and enclomiphene. While enclomiphene is
                effective at boosting testosterone, the zuclomiphene component
                can linger in the body and may contribute to unwanted side
                effects. Our formula contains only Enclomiphene, providing the
                desired testosterone-boosting effects without the unnecessary
                zuclomiphene isomer.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-4"
              className="border-0 rounded-3xl bg-white px-5"
            >
              <AccordionTrigger className="hover:no-underline font-semibold">
                Is this a steroid?
              </AccordionTrigger>
              <AccordionContent className="text-xs">
                No, Enclomiphene is not an anabolic steroid. It is a
                non-steroidal oral medication that works with your body&apos;s
                endocrine system to help increase its natural testosterone
                levels, rather than introducing synthetic hormones.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-5"
              className="border-0 rounded-3xl bg-white px-5"
            >
              <AccordionTrigger className="hover:no-underline font-semibold">
                What are the potential benefits of optimizing testosterone?
              </AccordionTrigger>
              <AccordionContent className="text-xs">
                Men with testosterone levels optimized within a healthy range
                often report a variety of benefits, including improved energy
                levels, enhanced mood and focus, increased libido (sex drive),
                and better body composition (more muscle mass and less fat).
                Individual results will vary.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-6"
              className="border-0 rounded-3xl bg-white px-5"
            >
              <AccordionTrigger className="hover:no-underline font-semibold">
                Do I need to do any lab testing?
              </AccordionTrigger>
              <AccordionContent className="text-xs">
                Yes. To ensure this treatment is appropriate and safe for you,
                your provider will require recent lab work to evaluate your
                current hormone levels before prescribing. Periodic follow-up
                labs may also be recommended to monitor your progress and make
                any necessary adjustments to your treatment plan.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-7"
              className="border-0 rounded-3xl bg-white px-5"
            >
              <AccordionTrigger className="hover:no-underline font-semibold">
                How long until I see results?
              </AccordionTrigger>
              <AccordionContent className="text-xs">
                While changes in hormone levels can often be measured in blood
                tests within a few weeks, feeling the subjective benefits can
                take longer. Most men begin to notice improvements in symptoms
                like energy and libido within one to two months of consistent
                daily use.
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
                Enclomiphene is generally well-tolerated by most men.
                Potential side effects can include headache, nausea, or
                changes in mood. It is crucial to disclose your full medical
                history during your online visit so your provider can
                determine if this is a safe option for you. For a
                comprehensive overview, please review the full safety
                information.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}