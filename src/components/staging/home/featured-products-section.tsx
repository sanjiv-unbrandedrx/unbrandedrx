import Link from "next/link";
import Button from "@/components/ui/button-custom";
import Placeholder from "@/components/staging/ui/placeholder";

interface FeaturedProduct {
  name: string;
  description: string;
  price: string;
  href: string;
}

const FEATURED_PRODUCTS: FeaturedProduct[] = [
  {
    name: "Injectable Sermorelin",
    description: "Growth hormone peptide therapy for vitality and recovery.",
    price: "$119/mo",
    href: "/staging/treatment/injectable-sermorelin",
  },
  {
    name: "Oral Sermorelin",
    description: "Convenient oral peptide for growth hormone support.",
    price: "$119/mo",
    href: "/staging/treatment/oral-sermorelin",
  },
  {
    name: "NAD+ Injection",
    description: "Cellular energy and longevity support.",
    price: "$149/mo",
    href: "/staging/treatment/nad-plus-injection",
  },
  {
    name: "Enclomiphene",
    description: "Natural testosterone optimization without TRT.",
    price: "$79/mo",
    href: "/find/treatment/enclomiphene",
  },
  {
    name: "4-in-1 ED Rapid Dissolve",
    description: "Fast-acting erectile dysfunction treatment.",
    price: "$79/mo",
    href: "/find/treatment/ed-rapid-dissolve-tablet",
  },
  {
    name: "Topical Dutasteride",
    description: "Advanced topical hair loss treatment.",
    price: "$69/mo",
    href: "/find/treatment/topical-dutasteride",
  },
];

export default function FeaturedProductsSection() {
  return (
    <section className="container mx-auto py-10 xl:py-20 px-4 xl:px-0">
      <div className="text-center mb-10 xl:mb-14">
        <h2 className="font-title text-3xl xl:text-4xl font-medium tracking-tight">
          Our Treatments
        </h2>
        <p className="mt-3 text-muted-foreground text-lg">
          Prescription-grade formulas at transparent prices.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {FEATURED_PRODUCTS.map((product) => (
          <div
            key={product.name}
            className="bg-white border border-neutral-200 rounded-3xl overflow-hidden flex flex-col"
          >
            <div className="flex items-center justify-center p-6 bg-neutral-50">
              <Placeholder
                width={280}
                height={200}
                label={product.name}
                icon="product"
              />
            </div>
            <div className="p-6 flex flex-col flex-1 gap-y-4">
              <div>
                <p className="font-title text-xl font-medium">
                  {product.name}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  {product.description}
                </p>
              </div>
              <p className="text-lg font-semibold tabular-nums mt-auto">
                {product.price}
              </p>
              <Link href={product.href}>
                <Button variant="filled" size="sm" fullWidth>
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
