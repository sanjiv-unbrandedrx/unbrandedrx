import StarFillIcon from "@/components/svg/star-fill-icon";
import Button from "@/components/ui/button";
import Image from "next/image";

export default function ProductCard() {
  return (
    <div className="bg-white rounded-3xl overflow-hidden">
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
            <p className="text-2xl">4-in-1 Sleep Capsule</p>
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
            <StarFillIcon className="size-3.5" />
            <StarFillIcon className="size-3.5" />
            <StarFillIcon className="size-3.5" />
            <StarFillIcon className="size-3.5" />
            <StarFillIcon className="text-muted-foreground size-3.5" />
          </div>
          <p className="text-xs text-neutral-800">
            <span className="tabular-nums">200</span> reviews
          </p>
        </div>
        <div className="flex justify-between items-center flex-1 gap-x-5 w-full">
          <Button size="sm" variant="outline" fullWidth>
            Get Started
          </Button>
          <Button size="sm" variant="filled" fullWidth>
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
