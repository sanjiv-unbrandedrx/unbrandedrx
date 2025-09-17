import DownIcon from "@/app/components/svg/down-icon";
import PlusIcon from "@/app/components/svg/plus-icon";
import Image from "next/image";
export default function ProductGridSection() {
  return (
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
      <div className="grid grid-cols-4 gap-5">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div
            className="flex flex-col items-stretch justify-start"
            key={`product-${i}`}
          >
            <div className="flex justify-between p-1">
              <span className="bg-neutral-900 font-title font-medium py-1 px-3 rounded-3xl tracking-tight text-[9px] text-white leading-4">
                Best Seller
              </span>
              <PlusIcon />
            </div>
            <div className="relative h-[285px] w-full">
              <Image src={"/products/dropper.png"} alt="Dropper" fill />
            </div>
            <div className="flex flex-col items-center justify-end gap-y-3">
              <div className="text-neutral-800/80 flex flex-col items-center justify-end gap-y-1">
                <p>Follice Activator</p>
                <p className="text-xs">
                  Minoxidil + Caffeine + Copper Peptides
                </p>
              </div>
              <div className="flex justify-center items-center gap-x-5">
                <p className="tabular-nums tracking-tighter">
                  $ 43<span className="text-xs">.50</span>
                </p>
                <button className="text-neutral-800 border border-neutral-800 rounded-4xl px-4 py-1 font-title font-medium text-xs tracking-tight">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
