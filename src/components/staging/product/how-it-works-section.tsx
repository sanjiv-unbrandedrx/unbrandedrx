import Image from "next/image";

export default function HowItWorksSection() {
  return (
    <section className="container mx-auto my-4 xl:my-15 py-8 xl:py-15 px-4 xl:px-0">
      <h3 className="font-title text-4xl tracking-tight font-medium">
        How it works
      </h3>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 py-10">
        <div className="group">
          <div className="rounded-2xl relative h-full min-h-[236px] overflow-hidden">
            <Image
              src="/products/how-it-works-step-1.png"
              alt="Choose Your Treatment"
              fill
              className="object-cover"
            />
            <div className="relative z-10 p-6 flex flex-col items-start justify-end h-full min-h-[236px]">
              <p className="font-semibold text-neutral-800 text-xl">
                1. Choose Your Treatment
              </p>
              <p className="text-neutral-500 mt-3">
                Browse our treatments and complete a quick online health
                questionnaire about your history, lifestyle, and goals.
              </p>
            </div>
          </div>
        </div>

        <div className="group">
          <div className="rounded-2xl relative h-full min-h-[236px] overflow-hidden">
            <Image
              src="/products/how-it-works-step-2.png"
              alt="Doctor Review"
              fill
              className="object-cover"
            />
            <div className="relative z-10 p-6 flex flex-col items-start justify-end h-full min-h-[236px]">
              <p className="font-semibold text-neutral-800 text-xl">
                2. Doctor Review
              </p>
              <p className="text-neutral-500 mt-3">
                A licensed U.S. provider reviews your information and lab work,
                then prescribes a personalized treatment plan if appropriate.
              </p>
            </div>
          </div>
        </div>

        <div className="group">
          <div className="rounded-2xl relative h-full min-h-[236px] overflow-hidden">
            <Image
              src="/products/how-it-works-step-3.png"
              alt="Discreet Delivery"
              fill
              className="object-cover"
            />
            <div className="relative z-10 p-6 flex flex-col items-start justify-end h-full min-h-[236px]">
              <p className="font-semibold text-neutral-800 text-xl">
                3. Discreet Delivery
              </p>
              <p className="text-neutral-500 mt-3">
                Receive your medication in a simple, unmarked package with free
                shipping. Automatic refills so you never miss a dose.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
