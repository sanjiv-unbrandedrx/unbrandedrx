import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/button-custom";

const smallCards = [
  {
    title: "Topical",
    titleAccent: "Hair Care",
    image: "/home/v2/category-hair-care.png",
    href: "/find/category/hair-loss",
  },
  {
    title: "Longevity with",
    titleAccent: "NAD+",
    image: "/home/v2/category-nad.png",
    href: "/find/category/mens-health",
  },
];

export default function CategoryCardsSection() {
  return (
    <section className="container mx-auto px-4 xl:px-0 mt-4">
      {/* Large cards: 2 columns */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        {/* Boost Testosterone */}
        <Link
          href="/find/category/testosterone"
          className="group relative rounded-2xl overflow-hidden h-[180px] xl:h-[200px] block bg-gradient-to-r from-amber-50 to-amber-100/80"
        >
          <div className="absolute right-0 top-0 bottom-0 w-1/2">
            <Image
              src="/home/v2/category-testosterone.png"
              alt="Boost Testosterone"
              fill
              className="object-contain object-right-bottom"
            />
          </div>
          <div className="absolute inset-0 flex flex-col justify-between p-6 z-10">
            <h3 className="font-title text-2xl xl:text-3xl font-medium tracking-tight">
              Boost <span className="text-neutral-500">Testosterone</span>
            </h3>
            <div>
              <Button variant="filled" size="sm">
                Start Now &rarr;
              </Button>
            </div>
          </div>
        </Link>

        {/* ED Fast Acting */}
        <Link
          href="/find/category/sexual-health"
          className="group relative rounded-2xl overflow-hidden h-[180px] xl:h-[200px] block bg-gradient-to-r from-neutral-100 to-neutral-200"
        >
          <div className="absolute right-0 top-0 bottom-0 w-1/2">
            <Image
              src="/home/v2/category-ed.png"
              alt="ED Fast Acting"
              fill
              className="object-contain object-right-bottom"
            />
          </div>
          <div className="absolute inset-0 flex flex-col justify-between p-6 z-10">
            <h3 className="font-title text-2xl xl:text-3xl font-medium tracking-tight">
              ED <span className="text-neutral-500">Fast Acting</span>
            </h3>
            <div>
              <Button variant="filled" size="sm">
                Learn More &rarr;
              </Button>
            </div>
          </div>
        </Link>
      </div>

      {/* Small cards: 2 columns */}
      <div className="grid grid-cols-2 gap-4 mt-4">
        {smallCards.map((card) => (
          <Link
            key={card.title}
            href={card.href}
            className="group relative rounded-2xl overflow-hidden h-[100px] xl:h-[120px] block bg-muted"
          >
            <Image
              src={card.image}
              alt={`${card.title} ${card.titleAccent || ""}`}
              fill
              className="object-cover object-right"
            />
            <div className="absolute inset-0 p-4 xl:p-6 flex items-end">
              <h3 className="font-title text-base xl:text-lg font-medium tracking-tight">
                {card.title}{" "}
                {card.titleAccent && (
                  <span className="text-neutral-500">{card.titleAccent}</span>
                )}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
