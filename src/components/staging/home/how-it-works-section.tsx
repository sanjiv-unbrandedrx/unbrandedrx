import Placeholder from "@/components/staging/ui/placeholder";

const steps = [
  {
    number: "1",
    title: "Choose Your Treatment",
    description:
      "Browse our treatments and select the one that fits your goals. Complete a quick online health profile.",
  },
  {
    number: "2",
    title: "Online Doctor Visit",
    description:
      "A licensed U.S. provider reviews your information and prescribes a personalized treatment plan, if appropriate.",
  },
  {
    number: "3",
    title: "Delivered to Your Door",
    description:
      "Your medication ships free in discreet, unmarked packaging. Refills are automatic so you never miss a dose.",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="container mx-auto py-10 xl:py-20 px-4 xl:px-0">
      <h2 className="font-title text-3xl xl:text-4xl font-medium tracking-tight">
        How it works
      </h2>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-10">
        {steps.map((step) => (
          <div
            key={step.number}
            className="bg-muted p-6 rounded-2xl flex flex-col gap-y-4 min-h-[280px]"
          >
            <div className="flex items-center justify-center rounded-xl overflow-hidden">
              <Placeholder
                width={320}
                height={120}
                label={`Step ${step.number}`}
                icon="step"
              />
            </div>
            <p className="font-semibold text-neutral-800 text-xl">
              {step.number}. {step.title}
            </p>
            <p className="text-muted-foreground">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
