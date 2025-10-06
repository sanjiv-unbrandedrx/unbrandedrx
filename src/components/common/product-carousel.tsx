// File: src/components/common/product-carousel.tsx
"use client";

import ProductCard, { Product } from "../shop/product-card"; // SURGICAL STRIKE: Import Product type
import LeftCircleIcon from "@/components/svg/left-circle-icon";
import RightCircleFillIcon from "@/components/svg/right-circle-fill-icon";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState } from "react";
import LeftCircleFillIcon from "../svg/left-circle-fill-icon";
import RightCircleIcon from "../svg/right-circle-icon";

// SURGICAL STRIKE: Component now accepts a title and a list of products.
export default function ProductCarousel({
  title,
  products,
}: {
  title: string;
  products: Product[];
}) {
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

  // SURGICAL STRIKE: Return null if there are no products to display.
  if (!products || products.length === 0) {
    return null;
  }

  return (
    <section className="bg-secondary py-20">
      <div className="flex justify-between items-center py-6 px-4 xl:px-30">
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
      <div className="pl-4 xl:pl-30">
        <div ref={sliderRef} className="keen-slider">
          {/* SURGICAL STRIKE: Dynamically render product cards from the products prop */}
          {products.map((product) => (
            <div
              className="keen-slider__slide min-w-[400px] xl:min-w-[420px] max-w-[420px]"
              key={product.id}
            >
              <ProductCard product={product} />
            </div>
          ))}
          <div className="keen-slider__slide min-w-[1px] w-[1px] max-w-[1px] xl:min-w-[30px] xl:w-[30px] xl:max-w-[30px]"></div>
        </div>
      </div>
    </section>
  );
}
