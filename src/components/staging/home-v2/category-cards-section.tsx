import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/button-custom";

interface CategoryCard {
  title: string;
  titleAccent?: string;
  image: string;
  href: string;
  buttonText: string;
}

const largeCards: CategoryCard[] = [
  {
    title: "Boost",
    titleAccent: "Testosterone",
    image: "/home/v2/category-testosterone-full.png",
    href: "/find/category/testosterone",
    buttonText: "Start Now",
  },
  {
    title: "ED",
    titleAccent: "Fast Acting",
    image: "/home/v2/category-ed.png",
    href: "/find/category/sexual-health",
    buttonText: "Learn More",
  },
];

const smallCards: CategoryCard[] = [
  {
    title: "Topical",
    titleAccent: "Hair Care",
    image: "/home/v2/category-hair-care.png",
    href: "/find/category/hair-loss",
    buttonText: "Learn More",
  },
  {
    title: "Longevity with",
    titleAccent: "NAD+",
    image: "/home/v2/category-nad.png",
    href: "/find/category/mens-health",
    buttonText: "Learn More",
  },
];

export default function CategoryCardsSection() {
  return (
    <section className="container mx-auto px-4 xl:px-0 mt-4">
      {/* Large cards: 2 columns */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        {largeCards.map((card) => (
          <Link
            key={card.title}
            href={card.href}
            className="group relative rounded-2xl overflow-hidden h-[180px] xl:h-[200px] block"
          >
            <Image
              src={card.image}
              alt={`${card.title} ${card.titleAccent || ""}`}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-between p-6">
              <h3 className="font-title text-2xl xl:text-3xl font-medium tracking-tight">
                {card.title}{" "}
                {card.titleAccent && (
                  <span className="text-neutral-500">{card.titleAccent}</span>
                )}
              </h3>
              <div>
                <Button variant="filled" size="sm">
                  {card.buttonText} &rarr;
                </Button>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Small cards: 2 columns (skipping Weight Loss) */}
      <div className="grid grid-cols-2 xl:grid-cols-3 gap-4 mt-4">
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
            <div className="absolute inset-0 p-4 flex items-end">
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
