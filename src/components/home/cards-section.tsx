import Badge from "../ui/badge";

export default function CardsSection() {
  return (
    <section className="container mx-auto py-5 xl:py-20 mt-5 px-4 xl:px-0">
      <div className="flex flex-col items-center justify-center gap-y-6 xl:gap-y-15">
        <div className="text-center">
          <p className="text-muted-foreground text-lg xl:text-2xl">
            Healthcare that fits you &mdash; not the other way around
          </p>
          <p className="font-title text-xl xl:text-[45px] max-w-5xl tracking-tight">
            From
            <span className="font-medium"> personalized prescriptions </span>
            <br className="xl:hidden" />
            to discreet
            <br className="hidden xl:block" />
            <span className="font-medium"> delivery, </span>
            <br className="xl:hidden" />
            UnbrandedRx offers expert care,
            <br />
            <span className="font-medium"> 100% online. </span>No mark-ups.
            <br /> No pharmacy counters. Just results.
          </p>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-4 w-full">
          <div className="min-h-100 bg-center bg-cover rounded-3xl overflow-hidden bg-[url(/home/card-1.webp)] relative">
            <div className="flex flex-col items-start justify-start gap-3 absolute inset-0 w-full h-full bg-gradient-to-b from-black p-6">
              <Badge className="font-sans text-xs px-4 bg-neutral-800">
                Zero Appointments Required
              </Badge>
              <p className="text-white font-title text-xl font-semibold">
                Fast, Free and Discreet Delivery.
              </p>
              <p className="text-white">
                Delivered straight to your door in plain packaging. ALways free.
                Always discreet.
              </p>
            </div>
          </div>
          <div className="min-h-100 bg-center bg-cover rounded-3xl overflow-hidden bg-[#D1CFCB] relative">
            <div className="flex flex-col items-start justify-end gap-3 absolute inset-0 w-full h-full p-6 bg-[url(/home/card-2.webp)] bg-position-[right_top_80px]  bg-size-[200px_auto] bg-no-repeat">
              <Badge className="font-sans text-xs px-4 bg-neutral-800">
                Your Privacy, Protected
              </Badge>
              <p className="font-title text-xl font-semibold">
                No pharmacy counters. <br /> No brand mark-up.
              </p>
              <p>Your health stays your business.</p>
            </div>
          </div>
          <div className="min-h-100 bg-center bg-cover rounded-3xl overflow-hidden bg-[url(/home/card-3.webp)] flex flex-col items-start justify-end p-6">
            <Badge className="font-sans text-xs px-4 bg-neutral-800">
              Clinician-Led Care
            </Badge>
          </div>
          <div className="min-h-100 bg-center bg-cover rounded-3xl overflow-hidden bg-[#D1CFCB] relative">
            <div className="flex flex-col items-start justify-start gap-3 absolute inset-0 w-full h-full p-6 bg-[url(/home/card-4.webp)] bg-bottom-left bg-size-[220px_auto] bg-no-repeat">
              <Badge className="font-sans text-xs px-4 bg-neutral-800">
                Zero Appointments Required
              </Badge>
              <p className="font-title text-xl font-semibold">
                Start your treatment from your phone
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
