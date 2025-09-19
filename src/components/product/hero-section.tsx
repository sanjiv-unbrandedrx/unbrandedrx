import { CheckCircleFillIcon } from "@/components/svg/check-circle-fill-icon";
import StarFillIcon from "@/components/svg/star-fill-icon";
import Badge from "@/components/ui/badge";
import Image from "next/image";
import Button from "../ui/button";

export default function HeroSection() {
  return (
    <section className="container mx-auto px-4 xl:px-0 my-15">
      <div className="flex justify-between items-stretch gap-x-4">
        <div className="w-full min-h-[590px] h-full max-h-full relative rounded-3xl overflow-hidden">
          <Image
            src="/products/follicle-activator.png"
            alt="Follicle Activator"
            fill
            className="object-cover object-right"
          />
        </div>
        <div className="flex flex-col gap-y-10 w-full px-19">
          <div className="space-y-3">
            <p className="font-title text-4xl font-medium tracking-tight">
              Follicle Activator
            </p>
            <p>
              A powerful topical blend of Minoxidil, Caffeine, Coppper Peptides
              and more, prescribed for your hair loss.
            </p>
            <div className="flex justify-start items-center gap-x-3">
              <div className="flex justify-start items-center gap-x-1">
                <StarFillIcon className="size-3.5" />
                <StarFillIcon className="size-3.5" />
                <StarFillIcon className="size-3.5" />
                <StarFillIcon className="size-3.5" />
                <StarFillIcon className="text-muted-foreground size-3.5" />
              </div>
              <p className="text-xs text-neutral-800">
                (<span className="tabular-nums">4.8/5</span>)
              </p>
            </div>

            <ul className="flex flex-col gap-y-1 list-none list-inside text-muted-foreground text-xs">
              <li>
                <span>✓&nbsp;</span>Combines multiple proven ingredients
              </li>
              <li>
                <span>✓&nbsp;</span>Dermatologist prescribed & shipped to you
              </li>
              <li>
                <span>✓&nbsp;</span>See results in as little as 3 to 6 months
              </li>
            </ul>
          </div>

          <div className="flex justify-between space-x-5 items-stretch">
            <label className="radio-wrapper">
              <input
                className="absolute opacity-0 peer"
                type="radio"
                name="price"
                value="price-1"
                id="price-1"
              />
              <div className="radio-card">
                <div className="flex justify-between w-full">
                  <Badge>Most Popular</Badge>
                  <CheckCircleFillIcon className="radio-icon" />
                </div>
                <p className="font-semibold">Auto-Refill & Save</p>
                <p className="tabular-nums text-2xl">
                  <span className="line-through text-neutral-300 mr-4">
                    $85
                  </span>
                  <span className="text-muted-foreground">$68</span>
                </p>
                <p className="text-muted-foreground">
                  Save 20% <br /> Delivered every 3 months.
                </p>
              </div>
            </label>
            <label className="radio-wrapper">
              <input
                className="absolute opacity-0 peer"
                type="radio"
                name="price"
                value="price-2"
                id="price-2"
              />
              <div className="radio-card">
                <div className="flex justify-end w-full">
                  <CheckCircleFillIcon className="radio-icon" />
                </div>
                <p className="font-semibold">One-time purchase</p>
                <p className="tabular-nums text-2xl">
                  <span className="text-muted-foreground">$85</span>
                </p>
              </div>
            </label>
          </div>

          <Button variant="filled" size="xl">
            Start My Visit
          </Button>
        </div>
      </div>
    </section>
  );
}
