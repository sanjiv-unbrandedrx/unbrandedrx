import Button from "../ui/button";

export default function FeaturedSection() {
  return (
    <section className="container mx-auto px-4 xl:px-0 mb-25">
      <div className="relative min-h-[575px] bg-[url(/home/hair-regrow.png)] bg-center bg-cover rounded-3xl">
        <div className="flex flex-col justify-center items-start gap-y-9 py-36 px-25">
          <div className="w-full space-y-5">
            <div>
              <p className="font-title text-4xl font-medium">Hair Regrow</p>
              <p className="font-title text-2xl font-medium">
                Dutasteride + Biotin
              </p>
            </div>
            <p className="text-neutral-600 font-light max-w-100">
              Get direct access to physician prescribed treatments without
              paying for the marketing
            </p>
          </div>
          <p className="text-neutral-600 tabular-nums tracking-tighter text-4xl font-light">
            $ 37
            <span className="text-3xl">.00</span>
          </p>
          <div className="flex gap-x-2">
            <div className="border border-neutral-500/50 rounded-full flex justify-center items-center py-3.5 px-8 text-xl gap-x-3">
              <p className="text-neutral-500">-</p>
              <p className="tabular-nums font-medium">1</p>
              <p>+</p>
            </div>
            <Button variant="filled" size="xl" className="bg-[#002021]">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
