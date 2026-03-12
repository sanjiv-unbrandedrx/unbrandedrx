"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/button-custom";
import LeftCircleIcon from "@/components/svg/left-circle-icon";
import LeftCircleFillIcon from "@/components/svg/left-circle-fill-icon";
import RightCircleIcon from "@/components/svg/right-circle-icon";
import RightCircleFillIcon from "@/components/svg/right-circle-fill-icon";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState } from "react";

interface Treatment {
  id: string;
  name: string;
  medicalName: string;
  price: string;
  image: string;
  href: string;
}

const TREATMENTS: Treatment[] = [
  {
    id: "injectable-sermorelin",
    name: "Injectable Sermorelin",
    medicalName: "Sermorelin Acetate",
    price: "$119/mo",
    image: "/home/v2/treatment-injectable-sermorelin.png",
    href: "/staging/treatment/injectable-sermorelin",
  },
  {
    id: "oral-sermorelin",
    name: "Oral Sermorelin",
    medicalName: "Sermorelin Acetate (Oral)",
    price: "$119/mo",
    image: "/home/v2/treatment-oral-sermorelin.png",
    href: "/staging/treatment/oral-sermorelin",
  },
  {
    id: "nad-plus-injection",
    name: "NAD+ Injection",
    medicalName: "Nicotinamide Adenine Dinucleotide",
    price: "$149/mo",
    image: "/home/v2/treatment-nad-plus-injection.png",
    href: "/staging/treatment/nad-plus-injection",
  },
  {
    id: "enclomiphene",
    name: "Enclomiphene",
    medicalName: "Enclomiphene Citrate",
    price: "$79/mo",
    image: "/home/v2/treatment-enclomiphene.png",
    href: "/find/treatment/enclomiphene",
  },
  {
    id: "ed-rapid-dissolve-tablet",
    name: "4-in-1 ED Rapid Dissolve",
    medicalName: "Tadalafil + Vardenafil + Apomorphine",
    price: "$79/mo",
    image: "/home/v2/treatment-ed-rapid-dissolve.png",
    href: "/find/treatment/ed-rapid-dissolve-tablet",
  },
  {
    id: "topical-dutasteride",
    name: "Topical Dutasteride",
    medicalName: "Minoxidil + Dutasteride + Tretinoin",
    price: "$69/mo",
    image: "/home/product-card-topical-dutasteride.png",
    href: "/find/treatment/topical-dutasteride",
  },
];

function TreatmentCard({ treatment }: { treatment: Treatment }) {
  return (
    <div className="bg-white border border-neutral-200 rounded-3xl overflow-hidden flex flex-col h-full">
      <Link href={treatment.href}>
        <div className="relative h-[200px] bg-neutral-50">
          <Image
            src={treatment.image}
            alt={treatment.name}
            fill
            className="object-cover"
          />
        </div>
      </Link>
      <div className="p-6 flex flex-col flex-1 gap-y-3">
        <div>
          <p className="font-title text-lg font-medium">{treatment.name}</p>
          <p className="text-sm text-muted-foreground">{treatment.medicalName}</p>
        </div>
        <p className="text-lg font-semibold tabular-nums">{treatment.price}</p>
        <Link href={treatment.href} className="mt-auto">
          <Button variant="filled" size="sm" fullWidth>
            Get Started
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default function TreatmentsSection() {
  const [sliderReady, setSliderReady] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

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
    <section className="py-10 xl:py-20">
      {/* Header */}
      <div className="container mx-auto px-4 xl:px-0">
        <div className="flex justify-between items-start xl:items-center mb-8">
          <div>
            <h2 className="font-title text-3xl xl:text-4xl font-medium tracking-tight">
              Our Treatments
            </h2>
            <p className="mt-2 text-muted-foreground text-lg">
              Prescription-grade formulas at transparent prices.
            </p>
          </div>
          {/* Desktop carousel arrows */}
          {sliderReady && instanceRef.current && (
            <div className="hidden xl:flex items-center gap-x-3">
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
      </div>

      {/* Desktop: Carousel */}
      <div className="hidden xl:block pl-4 xl:pl-[max(1rem,calc((100vw-1200px)/2))]">
        <div ref={sliderRef} className="keen-slider !items-stretch [&>.keen-slider__slide]:!h-auto">
          {TREATMENTS.map((treatment) => (
            <div
              className="keen-slider__slide min-w-[280px] max-w-[300px]"
              key={treatment.id}
            >
              <TreatmentCard treatment={treatment} />
            </div>
          ))}
          <div className="keen-slider__slide min-w-[1px] w-[1px] max-w-[1px] xl:min-w-[30px] xl:w-[30px] xl:max-w-[30px]" />
        </div>
      </div>

      {/* Mobile: Vertical stacked list */}
      <div className="xl:hidden container mx-auto px-4">
        <div className="grid grid-cols-2 gap-4">
          {TREATMENTS.map((treatment) => (
            <TreatmentCard key={treatment.id} treatment={treatment} />
          ))}
        </div>
      </div>
    </section>
  );
}
