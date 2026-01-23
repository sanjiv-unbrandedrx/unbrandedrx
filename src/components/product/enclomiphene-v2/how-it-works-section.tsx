import Image from "next/image";

export default function HowItWorksSection() {
  return (
    <section className="container mx-auto my-4 xl:my-15 py-8 xl:py-15 px-4 xl:px-0">
      <div className="text-center mb-10">
        <h2 className="font-title text-3xl xl:text-4xl tracking-tight font-medium">
          Simple Process, Real Results
        </h2>
        <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
          Get started in minutes. No office visits, no awkward conversations.
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="group">
          <div className="bg-muted p-6 rounded-2xl flex justify-between items-end relative h-full min-h-[236px]">
            <div className="max-w-54 flex flex-col items-start justify-end gap-y-3">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                Step 1
              </span>
              <p className="font-semibold text-neutral-800 text-xl">
                Complete Your Visit
              </p>
              <p className="text-muted-foreground text-sm">
                Answer health questions online. Upload recent labs or order our
                at-home test kit.
              </p>
            </div>
            <Image
              src="/products/card-1.webp"
              alt="Online Visit"
              width={185}
              height={202}
              className="absolute object-center object-cover -top-6 right-0 xl:-right-6"
            />
          </div>
        </div>

        <div className="group">
          <div className="bg-muted p-6 rounded-2xl flex justify-between items-end relative h-full min-h-[236px]">
            <div className="max-w-54 flex flex-col items-start justify-end gap-y-3">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                Step 2
              </span>
              <p className="font-semibold text-neutral-800 text-xl">
                Provider Review
              </p>
              <p className="text-muted-foreground text-sm">
                A licensed U.S. physician reviews your labs and health history.
                Get a personalized treatment plan.
              </p>
            </div>
            <Image
              src="/products/card-2.webp"
              alt="Doctor Review"
              width={202}
              height={253}
              className="absolute object-center object-cover -top-16 right-0"
            />
          </div>
        </div>

        <div className="group">
          <div className="bg-muted p-6 rounded-2xl flex justify-between items-end relative h-full min-h-[236px]">
            <div className="max-w-54 flex flex-col items-start justify-end gap-y-3">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                Step 3
              </span>
              <p className="font-semibold text-neutral-800 text-xl">
                Delivered to You
              </p>
              <p className="text-muted-foreground text-sm">
                Medication ships free in discreet packaging. Ongoing support
                whenever you need it.
              </p>
            </div>
            <Image
              src="/products/card-3.webp"
              alt="Discreet Delivery"
              width={190}
              height={120}
              className="absolute object-center object-cover -top-4 right-4"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
