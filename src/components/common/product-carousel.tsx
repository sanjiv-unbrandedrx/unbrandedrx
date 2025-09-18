"use client";

import ProductCard from "../shop/product-card";
import LeftCircleIcon from "@/components/svg/left-circle-icon";
import RightCircleFillIcon from "@/components/svg/right-circle-fill-icon";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState } from "react";
import LeftCircleFillIcon from "../svg/left-circle-fill-icon";
import RightCircleIcon from "../svg/right-circle-icon";

export default function ProductCarousel({ title }: { title: string }) {
  const [sliderReady, setSliderReady] = useState<boolean>(false);
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setSliderReady(true);
    },
    mode: "free-snap",
    slides: { perView: "auto", spacing: 20 },
  });
  return (
    <section className="bg-secondary py-20">
      <div className="flex justify-between items-center py-6 px-30">
        <h3 className="font-title tracking-tight text-4xl font-semibold">
          {title}
        </h3>
        {sliderReady && instanceRef.current && (
          <div className="flex justify-end items-center gap-x-3">
            <button
              onClick={() => instanceRef.current?.prev()}
              disabled={currentSlide === 0}
            >
              {currentSlide === 0 ? (
                <LeftCircleIcon className="size-10 text-muted-foreground" />
              ) : (
                <LeftCircleFillIcon className="size-10" />
              )}
            </button>
            <button
              onClick={() => instanceRef.current?.next()}
              disabled={
                currentSlide === instanceRef.current.track.details.maxIdx
              }
            >
              {currentSlide === instanceRef.current.track.details.maxIdx ? (
                <RightCircleIcon className="size-10 text-muted-foreground stroke-1" />
              ) : (
                <RightCircleFillIcon className="size-10" />
              )}
            </button>
          </div>
        )}
      </div>
      <div className="pl-30">
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide min-w-[420px] max-w-[420px]">
            <ProductCard />
          </div>
          <div className="keen-slider__slide min-w-[420px] max-w-[420px]">
            <ProductCard />
          </div>
          <div className="keen-slider__slide min-w-[420px] max-w-[420px]">
            <ProductCard />
          </div>
          <div className="keen-slider__slide min-w-[420px] max-w-[420px]">
            <ProductCard />
          </div>
          <div className="keen-slider__slide min-w-[420px] max-w-[420px]">
            <ProductCard />
          </div>
          <div className="keen-slider__slide min-w-[30px] w-[30px] max-w-[30px]"></div>
        </div>
      </div>
    </section>
  );
}
