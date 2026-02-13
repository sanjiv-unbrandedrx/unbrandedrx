import Image from "next/image";

export default function HowItWorksSection() {
  return (
    <section className="container mx-auto my-4 xl:my-15 py-8 xl:py-15 px-4 xl:px-0">
      <h3 className="font-title text-4xl tracking-tight font-medium">
        How it works
      </h3>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 py-10">
        <div className="group">
          <div className="bg-muted p-6 rounded-2xl flex justify-between items-end relative h-full min-h-[236px]">
            <div className="max-w-54 flex flex-col items-start justify-end gap-y-3">
              <p className="font-semibold text-neutral-800 text-xl">
                1. Choose Your Treatment
              </p>
              <p className="text-muted-foreground">
                Browse our treatments and complete a quick online health
                questionnaire about your history, lifestyle, and goals.
              </p>
            </div>
            <div className="absolute -top-6 right-0 xl:-right-6">
              <Image
                src="/products/how-it-works-step-1.png"
                alt="Choose Your Treatment"
                width={185}
                height={202}
              />
            </div>
          </div>
        </div>

        <div className="group">
          <div className="bg-muted p-6 rounded-2xl flex justify-between items-end relative h-full min-h-[236px]">
            <div className="max-w-54 flex flex-col items-start justify-end gap-y-3">
              <p className="font-semibold text-neutral-800 text-xl">
                2. Doctor Review
              </p>
              <p className="text-muted-foreground">
                A licensed U.S. provider reviews your information and lab work,
                then prescribes a personalized treatment plan if appropriate.
              </p>
            </div>
            <div className="absolute -top-16 right-0">
              <Image
                src="/products/how-it-works-step-2.png"
                alt="Doctor Review"
                width={202}
                height={253}
              />
            </div>
          </div>
        </div>

        <div className="group">
          <div className="bg-muted p-6 rounded-2xl flex justify-between items-end relative h-full min-h-[236px]">
            <div className="max-w-54 flex flex-col items-start justify-end gap-y-3">
              <p className="font-semibold text-neutral-800 text-xl">
                3. Discreet Delivery
              </p>
              <p className="text-muted-foreground">
                Receive your medication in a simple, unmarked package with free
                shipping. Automatic refills so you never miss a dose.
              </p>
            </div>
            <div className="absolute -top-4 right-4">
              <Image
                src="/products/how-it-works-step-3.png"
                alt="Discreet Delivery"
                width={190}
                height={120}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
