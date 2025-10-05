import { CheckCircleFillIcon } from "@/components/svg/check-circle-fill-icon";
import StarFillIcon from "@/components/svg/star-fill-icon";
import Badge from "@/components/ui/badge";
import Button from "@/components/ui/button-custom";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="container mx-auto my-4 px-4 xl:my-15 xl:px-0">
      <div className="flex flex-col justify-between gap-x-4 xl:flex-row xl:items-stretch">
        <div className="relative h-full min-h-[590px] w-full overflow-hidden rounded-3xl">
          <Image
            src="/products/topical-finasteride-hero.png"
            alt="Topical Finasteride"
            fill
            className="object-cover object-right"
          />
        </div>
        <div className="flex w-full flex-col gap-y-10 py-6 px-1 xl:py-0 xl:px-19">
          <div className="space-y-3">
            <p className="font-title text-2xl font-medium tracking-tight xl:text-4xl">
              Topical Finasteride
            </p>
            <p className="text-sm xl:text-base">
              A powerful, multi-action serum that combines four key
              ingredients to fight hair loss directly at the scalp.
            </p>
            <div className="flex items-center justify-start gap-x-3">
              <div className="flex items-center justify-start gap-x-1">
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

            <ul className="flex list-none list-inside flex-col gap-y-1 text-xs text-muted-foreground">
              <li>
                <span>✓&nbsp;</span>Targets hair loss at the source
              </li>
              <li>
                <span>✓&nbsp;</span>Potent 4-in-1 prescription formula
              </li>
              <li>
                <span>✓&nbsp;</span>A pill-free alternative to oral medication
              </li>
              <li>
                <span>✓&nbsp;</span>Prescribed by a licensed U.S. provider
              </li>
            </ul>
          </div>

          <div className="flex flex-col justify-between space-y-3">
            <label className="radio-wrapper">
              <input
                className="peer absolute opacity-0"
                type="radio"
                name="price"
                value="price-1"
                id="price-1"
                defaultChecked
              />
              <div className="radio-card">
                <div className="flex w-full justify-between">
                  <Badge>Best Value</Badge>
                  <CheckCircleFillIcon className="radio-icon" />
                </div>
                <p className="font-semibold">Quarterly Supply</p>
                <p className="tabular-nums text-2xl text-muted-foreground">
                  $147.50
                </p>
                <p className="text-muted-foreground">
                  Billed and delivered every 3 months. Just $49.17/month.
                </p>
              </div>
            </label>
            <label className="radio-wrapper">
              <input
                className="peer absolute opacity-0"
                type="radio"
                name="price"
                value="price-2"
                id="price-2"
              />
              <div className="radio-card">
                <div className="flex w-full justify-end">
                  <CheckCircleFillIcon className="radio-icon" />
                </div>
                <p className="font-semibold">Monthly Supply</p>
                <p className="tabular-nums text-2xl text-muted-foreground">
                  $59
                </p>
                <p className="text-muted-foreground">
                  Billed and delivered every month.
                </p>
              </div>
            </label>
          </div>

          <Button variant="filled" size="xl" className="mt-4">
            Start My Visit
          </Button>
        </div>
      </div>
    </section>
  );
}