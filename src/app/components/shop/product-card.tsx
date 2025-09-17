import StarFillIcon from "@/app/components/svg/star-fill-icon";
import Image from "next/image";

export default function ProductCard() {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shrink-0">
      <div className="relative rounded-t-3xl min-w-[328px] aspect-square">
        <Image
          className="object-center object-cover"
          src="/products/four-one-sleep.png"
          alt="4-in-1 Sleep Capsule"
          fill
        />
      </div>
      <div className="px-8 py-7 flex flex-col gap-y-5 justify-start items-start">
        <div>
          <div className="font-title">
            <p className="text-3xl">4-in-1 Sleep Capsule</p>
            <p className="text-neutral-800">Dopexin + Melatonin</p>
          </div>
          <div className="mt-3">
            <p className="text-muted-foreground tabular-nums font-light text-base">
              $49.00
            </p>
          </div>
        </div>
        <div className="flex justify-start items-center gap-x-3">
          <div className="flex justify-start items-center gap-x-1">
            <StarFillIcon />
            <StarFillIcon />
            <StarFillIcon />
            <StarFillIcon />
            <StarFillIcon className="text-muted-foreground" />
          </div>
          <p className=" text-neutral-800">
            <span className="tabular-nums">200</span> reviews
          </p>
        </div>
        <div className="flex justify-between items-center flex-1 gap-x-5">
          <button className="text-neutral-800 border border-neutral-300 rounded-4xl px-7 py-2 font-title font-medium tracking-tight">
            Get Started
          </button>
          <button className="bg-zinc-800 text-white font-title rounded-4xl border border-neutral-900 py-2 px-7 font-medium tracking-tight">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
