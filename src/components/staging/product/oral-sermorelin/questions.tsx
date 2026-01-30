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
                Sermorelin is a synthetic peptide that mimics the first 29 amino
                acids of your body&apos;s own growth hormone-releasing hormone
                (GHRH). It signals your pituitary gland to produce and release
                more of its own natural growth hormone. This is different from
                synthetic HGH, because it stimulates your body to produce more
                growth hormone on its own rather than injecting it directly.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-2"
              className="border-0 rounded-3xl bg-white px-5"
            >
              <AccordionTrigger className="hover:no-underline font-semibold">
                How does Oral Sermorelin work?
              </AccordionTrigger>
              <AccordionContent className="text-xs">
                Oral Sermorelin is absorbed through the mucous membranes of the
                mouth, bypassing the digestive system. Once absorbed, it binds
                to GHRH receptors in the pituitary gland, triggering the natural
                release of growth hormone. With increased growth hormone levels,
                you may notice improvements in energy, sleep quality, body
                composition, recovery time, and overall vitality.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-3"
              className="border-0 rounded-3xl bg-white px-5"
            >
              <AccordionTrigger className="hover:no-underline font-semibold">
                How do I take Oral Sermorelin?
              </AccordionTrigger>
              <AccordionContent className="text-xs">
                Oral Sermorelin is typically taken as a lozenge by mouth once
                daily for 5 days, followed by 2 days off. It should be taken on
                an empty stomach, preferably in the evening, and you should
                avoid eating or drinking for a short while afterward to enhance
                absorption. Always follow the specific instructions on your
                prescription from your provider.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-4"
              className="border-0 rounded-3xl bg-white px-5"
            >
              <AccordionTrigger className="hover:no-underline font-semibold">
                How is Oral Sermorelin different from Injectable Sermorelin?
              </AccordionTrigger>
              <AccordionContent className="text-xs">
                Both forms contain the same active ingredient and work through
                the same mechanism — signaling your pituitary gland to produce
                more growth hormone. The key difference is the route of
                administration. Injectable sermorelin has the highest
                bioavailability (around 90-95%), while oral lozenges are
                absorbed through the oral mucosa with somewhat lower
                bioavailability. The oral form offers the convenience of no
                needles for patients who prefer a simpler routine.
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
                labs may also be recommended to monitor your progress and adjust
                your treatment plan as needed.
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
                Oral Sermorelin is generally well-tolerated. Common side effects
                may include headache, nausea, dizziness, flushing,
                restlessness, itching, joint pain, and temporary changes in
                taste. More serious but less common side effects may include
                severe allergic reactions and unwanted metabolic or hormonal
                changes. Disclose your full medical history during your online
                visit so your provider can determine if this is safe for you.
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
                levels to prevent levels from becoming too high. Take oral
                sermorelin on an empty stomach and avoid eating or drinking for
                a short while afterward to allow for better absorption. You may
                also want to reduce or avoid alcohol and highly processed or
                sugary foods, as these can counteract the positive effects of
                treatment.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
