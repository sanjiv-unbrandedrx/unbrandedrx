import DownIcon from "@/app/components/svg/down-icon";
import Image from "next/image";

export default function () {
  return (
    <main>
      <section className="relative pb-20">
        <div className="container mx-auto">
          <div className="max-w-md space-y-6 mb-9">
            <h2 className="font-title font-medium text-4xl tracking-tight">
              Prescription <br /> Hair Loss Treatments.
              <br />
              No Brand Markup.
            </h2>
            <p className="font-light text-2xl text-muted-foreground">
              Get clinically-backed hair regrowth formulas prescribed by
              licensed providers — without paying for celebrity ads or flashy
              packaging.
            </p>
          </div>
          <button className="bg-zinc-800 text-white font-title rounded-4xl border border-neutral-900 py-3.5 px-11 font-medium text-xl tracking-tight">
            Get Started
          </button>
        </div>
        <img
          src={"/categories/hair-loss.png"}
          alt="Hair Loss"
          className="object-cover -z-10 absolute -top-30 max-h-[620px] w-full object-right"
        />
      </section>
      <section className="container mx-auto">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center gap-x-2">
            <h3 className="font-title tracking-tight text-3xl font-semibold">
              All Categories
            </h3>
            <DownIcon />
          </div>
          <div className="flex justify-end items-center gap-x-15 text-muted-foreground">
            <div className="flex items-center gap-x-2">
              <p>Filter by</p>
              <DownIcon />
            </div>
            <div className="flex items-center gap-x-2">
              <p>Sort by</p>
              <DownIcon />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
