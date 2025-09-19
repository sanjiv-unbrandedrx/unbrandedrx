"use client";

import { ChangeEvent, useState } from "react";
import Button from "../ui/button";
import Link from "next/link";

export default function FeaturedSection() {
  const [itemCount, setItemCount] = useState<number>(1);
  function handleNumberInput(e: ChangeEvent<HTMLInputElement>) {
    if (isNaN(Number(e.target.value))) return;

    const value = Math.min(Math.max(Number(e.target.value), 1), 99);
    setItemCount(value);
  }

  function changeValue(v: number) {
    let value = itemCount + v;
    value = Math.min(Math.max(value, 1), 99);
    setItemCount(value);
  }

  return (
    <section className="container mx-auto px-4 xl:px-0 mb-25">
      <div className="relative min-h-[575px] bg-[url(/home/hair-regrow.png)] bg-center bg-cover rounded-3xl flex flex-col items-start justify-center">
        <div className="flex flex-col justify-center items-start gap-y-9 py-12 xl:py-36 px-8 xl:px-25">
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
          <div className="flex items-center justify-start gap-x-2">
            <div className="border border-neutral-500/50 rounded-full flex justify-center items-center py-2 xl:py-3.5 px-4 xl:px-8 text-xl gap-x-3">
              <button
                onClick={() => changeValue(-1)}
                disabled={itemCount <= 1}
                className="disabled:text-neutral-500"
              >
                -
              </button>
              <input
                className="tabular-nums font-medium w-10 text-center"
                type="text"
                pattern="[+\\-]?(?:0|[1-9]\\d*)"
                inputMode="decimal"
                min={1}
                max={99}
                value={itemCount}
                onChange={handleNumberInput}
                autoComplete="off"
              />
              <button
                onClick={() => changeValue(1)}
                disabled={itemCount >= 99}
                className="disabled:text-neutral-500"
              >
                +
              </button>
            </div>
            <Button
              variant="filled"
              size="xl"
              className="bg-[#002021] py-2 px-4 xl:py-3.5 xl:px-8"
            >
              <Link href="/shop/product/follicle-activator">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
