import Image from "next/image";

const steps = [
  {
    number: "1",
    title: "Choose Your Treatment",
    description:
      "Browse our treatments and select the one that fits your goals. Complete a quick online health profile.",
    image: "/products/how-it-works-step-1.png",
  },
  {
    number: "2",
    title: "Online Doctor Visit",
    description:
      "A licensed U.S. provider reviews your information and prescribes a personalized treatment plan, if appropriate.",
    image: "/products/how-it-works-step-2.png",
  },
  {
    number: "3",
    title: "Delivered to Your Door",
    description:
      "Your medication ships free in discreet, unmarked packaging. Refills are automatic so you never miss a dose.",
    image: "/products/how-it-works-step-3.png",
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
            className="bg-muted rounded-2xl relative overflow-hidden min-h-[280px]"
          >
            <Image
              src={step.image}
              alt=""
              fill
              className="object-cover object-right-top"
            />
            <div className="relative z-10 p-6 flex flex-col items-start justify-end h-full min-h-[280px]">
              <p className="font-semibold text-neutral-800 text-xl">
                {step.number}. {step.title}
              </p>
              <p className="text-muted-foreground mt-3">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
