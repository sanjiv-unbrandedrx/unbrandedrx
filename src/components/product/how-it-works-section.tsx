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
                Online Visit
              </p>
              <p className="text-muted-foreground">
                Complete a quick online visit to tell us about your health and
                hair loss
              </p>
            </div>
            <Image
              src="/products/card-1.webp"
              alt="Complete a quick online visit"
              width={185}
              height={202}
              className="absolute object-center object-cover -top-6 right-0 xl:-right-6"
            />
          </div>
        </div>

        <div className="group">
          <div className="bg-muted p-6 rounded-2xl flex justify-between items-end relative h-full min-h-[236px]">
            <div className="max-w-54 flex flex-col items-start justify-end gap-y-3">
              <p className="font-semibold text-neutral-800 text-xl">
                Doctor Review
              </p>
              <p className="text-muted-foreground">
                A licensed U.S. provider will review your information and
                prescribe a treatment plan, if appropriate.
              </p>
            </div>
            <Image
              src="/products/card-2.webp"
              alt="A licensed provider reviews your information"
              width={202}
              height={253}
              className="absolute object-center object-cover -top-16 right-0"
            />
          </div>
        </div>

        <div className="group">
          <div className="bg-muted p-6 rounded-2xl flex justify-between items-end relative h-full min-h-[236px]">
            <div className="max-w-54 flex flex-col items-start justify-end gap-y-3">
              <p className="font-semibold text-neutral-800 text-xl">
                Discreet Delivery
              </p>
              <p className="text-muted-foreground">
                Receive your medication in a simple, unmarked package with free
                shipping.
              </p>
            </div>
            <Image
              src="/products/card-3.webp"
              alt="Receive your medication with free discreet delivery"
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
