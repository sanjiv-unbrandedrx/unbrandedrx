"use client";

import { CheckCircleFillIcon } from "@/components/svg/check-circle-fill-icon";
import StarFillIcon from "@/components/svg/star-fill-icon";
import Badge from "@/components/ui/badge";
import Button from "@/components/ui/button-custom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="container mx-auto my-4 px-4 xl:my-15 xl:px-0">
      <div className="flex flex-col justify-between gap-x-4 xl:flex-row xl:items-stretch">
        <div className="relative h-full min-h-[590px] w-full overflow-hidden rounded-3xl">
          <Image
            src="/products/enclomiphene-hero.png"
            alt="Enclomiphene"
            fill
            className="object-cover object-right"
          />
        </div>
        <div className="flex w-full flex-col gap-y-10 py-6 px-1 xl:py-0 xl:px-19">
          <div className="space-y-3">
            <p className="font-title text-2xl font-medium tracking-tight xl:text-4xl">
              Enclomiphene
            </p>
            <p className="text-sm xl:text-base">
              A modern, oral medication designed to support your body&apos;s
              natural testosterone production.
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
                <span>✓&nbsp;</span>Promotes healthy testosterone levels
              </li>
              <li>
                <span>✓&nbsp;</span>Supports your body&apos;s own hormone
                production
              </li>
              <li>
                <span>✓&nbsp;</span>Convenient once-a-day capsule
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
              />
              <div className="radio-card">
                <div className="flex w-full justify-between">
                  <p className="font-semibold">Monthly Supply</p>
                  <CheckCircleFillIcon className="radio-icon" />
                </div>
                <p className="tabular-nums text-2xl text-muted-foreground">
                  From $79
                </p>
                <p className="text-muted-foreground">
                  Billed and delivered every month.
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
                defaultChecked
              />
              <div className="radio-card">
                <div className="flex w-full justify-between">
                  <Badge>Most Popular</Badge>
                  <CheckCircleFillIcon className="radio-icon" />
                </div>
                <p className="font-semibold">Quarterly Supply</p>
                <p className="tabular-nums text-2xl text-muted-foreground">
                  From $189
                </p>
                <p className="text-muted-foreground">
                  Billed and delivered every 3 months. Save up to 20%.
                </p>
              </div>
            </label>
            <label className="radio-wrapper">
              <input
                className="peer absolute opacity-0"
                type="radio"
                name="price"
                value="price-3"
                id="price-3"
              />
              <div className="radio-card">
                <div className="flex w-full justify-between">
                  <Badge>Best Value</Badge>
                  <CheckCircleFillIcon className="radio-icon" />
                </div>
                <p className="font-semibold">5-Month Supply</p>
                <p className="tabular-nums text-2xl text-muted-foreground">
                  From $319
                </p>
                <p className="text-muted-foreground">
                  Billed and delivered every 5 months. Save up to 25%.
                </p>
              </div>
            </label>
          </div>

          {isClient && (
            <div className="space-y-2">
              <p className="text-sm font-medium">Strength:</p>
              <Select>
                <SelectTrigger className="w-full border-neutral-400">
                  <SelectValue placeholder="Select dose" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low Dose (6.25mg)</SelectItem>
                  <SelectItem value="standard">
                    Standard Dose (12.5mg)
                  </SelectItem>
                  <SelectItem value="high">High Dose (25mg)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}

          <Button variant="filled" size="xl">
            Start My Visit
          </Button>
        </div>
      </div>
    </section>
  );
}