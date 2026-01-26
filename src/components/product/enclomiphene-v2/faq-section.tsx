import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQSection() {
  return (
    <section className="bg-secondary py-20">
      <div className="container mx-auto flex flex-col items-start justify-start gap-x-10 px-4 xl:flex-row xl:px-0">
        <div className="min-w-sm mb-6 xl:mb-0">
          <h2 className="font-title text-3xl font-medium">
            Common Questions
          </h2>
          <p className="mt-3 text-base text-muted-foreground max-w-xs">
            Everything you need to know about Enclomiphene therapy.
          </p>
        </div>

        <div className="w-full flex-1">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem
              value="item-1"
              className="border-0 rounded-3xl bg-white px-6"
            >
              <AccordionTrigger className="hover:no-underline font-semibold text-base text-left">
                How much will my testosterone increase?
              </AccordionTrigger>
              <AccordionContent className="text-base text-neutral-600">
                Results vary by individual, but clinical studies and real-world
                experience show most men achieve a 1.5-2x increase in
                testosterone levels within 6-8 weeks. Some men see even higher
                increases depending on their baseline levels and how well they
                respond to the medication. Your provider will monitor your labs
                and adjust dosing as needed.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="border-0 rounded-3xl bg-white px-6"
            >
              <AccordionTrigger className="hover:no-underline font-semibold text-base text-left">
                How does Enclomiphene work?
              </AccordionTrigger>
              <AccordionContent className="text-base text-neutral-600">
                Enclomiphene is a selective estrogen receptor modulator (SERM).
                It works by blocking estrogen receptors in your brain, which
                signals your pituitary gland to release more Luteinizing Hormone
                (LH) and Follicle-Stimulating Hormone (FSH). These hormones then
                stimulate your testes to produce more testosterone naturally.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="border-0 rounded-3xl bg-white px-6"
            >
              <AccordionTrigger className="hover:no-underline font-semibold text-base text-left">
                How is this different from TRT injections or gels?
              </AccordionTrigger>
              <AccordionContent className="text-base text-neutral-600">
                Traditional TRT introduces external testosterone into your body,
                which causes your natural production to shut down. This can lead
                to testicular shrinkage and fertility issues. Enclomiphene takes
                the opposite approach: it encourages your body to produce more of
                its own testosterone, preserving your natural hormonal function,
                testicular size, and fertility.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-4"
              className="border-0 rounded-3xl bg-white px-6"
            >
              <AccordionTrigger className="hover:no-underline font-semibold text-base text-left">
                Can I use this if I want to have children?
              </AccordionTrigger>
              <AccordionContent className="text-base text-neutral-600">
                Yes. Unlike traditional TRT which can significantly reduce sperm
                count and fertility, enclomiphene actually supports sperm
                production by increasing FSH levels. It&apos;s often the
                preferred choice for men who are planning to have children or
                want to preserve that option.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-5"
              className="border-0 rounded-3xl bg-white px-6"
            >
              <AccordionTrigger className="hover:no-underline font-semibold text-base text-left">
                What&apos;s the difference between Enclomiphene and Clomid?
              </AccordionTrigger>
              <AccordionContent className="text-base text-neutral-600">
                Clomid (clomiphene citrate) contains two isomers: zuclomiphene
                and enclomiphene. While enclomiphene boosts testosterone,
                zuclomiphene can linger in the body and cause unwanted
                estrogenic side effects. Our formula contains only the
                enclomiphene isomer, providing the testosterone benefits without
                the zuclomiphene-related side effects.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-6"
              className="border-0 rounded-3xl bg-white px-6"
            >
              <AccordionTrigger className="hover:no-underline font-semibold text-base text-left">
                Is this a steroid?
              </AccordionTrigger>
              <AccordionContent className="text-base text-neutral-600">
                No. Enclomiphene is not an anabolic steroid. It&apos;s a
                non-steroidal oral medication that works with your body&apos;s
                endocrine system to stimulate natural testosterone production,
                rather than introducing synthetic hormones.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-7"
              className="border-0 rounded-3xl bg-white px-6"
            >
              <AccordionTrigger className="hover:no-underline font-semibold text-base text-left">
                Do I need lab work?
              </AccordionTrigger>
              <AccordionContent className="text-base text-neutral-600">
                Yes. To ensure this treatment is safe and appropriate for you,
                your provider needs to see your current hormone levels. You can
                either upload recent lab results (within 6 months) or use our
                convenient at-home finger-prick test kit. Follow-up labs are
                recommended to track your progress and optimize dosing.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-8"
              className="border-0 rounded-3xl bg-white px-6"
            >
              <AccordionTrigger className="hover:no-underline font-semibold text-base text-left">
                How long until I see results?
              </AccordionTrigger>
              <AccordionContent className="text-base text-neutral-600">
                Hormone levels typically begin changing within the first 2
                weeks. Most men start noticing improvements in energy, mood, and
                libido within 4-6 weeks. Full benefits, including improvements in
                body composition and mental clarity, usually develop over 8-12
                weeks of consistent daily use.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-9"
              className="border-0 rounded-3xl bg-white px-6"
            >
              <AccordionTrigger className="hover:no-underline font-semibold text-base text-left">
                What are the potential side effects?
              </AccordionTrigger>
              <AccordionContent className="text-base text-neutral-600">
                Enclomiphene is generally well-tolerated. Potential side effects
                include headache, nausea, hot flashes, mood changes, and visual
                disturbances (rare). Serious side effects are uncommon but can
                include blood clots. It&apos;s important to disclose your full
                medical history during your consultation so your provider can
                determine if this is safe for you.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-10"
              className="border-0 rounded-3xl bg-white px-6"
            >
              <AccordionTrigger className="hover:no-underline font-semibold text-base text-left">
                What if it doesn&apos;t work for me?
              </AccordionTrigger>
              <AccordionContent className="text-base text-neutral-600">
                While most men respond well to enclomiphene, individual results
                vary. If you don&apos;t see the expected improvements, your
                provider can adjust your dosage or discuss alternative treatment
                options. We&apos;re committed to helping you find what works
                best for your body.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-11"
              className="border-0 rounded-3xl bg-white px-6"
            >
              <AccordionTrigger className="hover:no-underline font-semibold text-base text-left">
                Will insurance cover this?
              </AccordionTrigger>
              <AccordionContent className="text-base text-neutral-600">
                Enclomiphene is typically not covered by insurance as it&apos;s
                dispensed through a compounding pharmacy. However, our pricing
                is designed to be affordable without insurance, and you may be
                able to use HSA/FSA funds for your treatment.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
