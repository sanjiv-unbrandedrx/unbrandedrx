import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/button-custom";

const smallCards = [
  {
    title: "Hair",
    titleAccent: "Care",
    image: "/home/v2/category-hair-care.png",
    href: "/find/category/hair-loss",
  },
  {
    title: "Peptides &",
    titleAccent: "Longevity",
    image: "/home/v2/category-nad.png",
    href: "/find/category/mens-health",
  },
  {
    title: "Browse",
    titleAccent: "All Products",
    image: "/home/v2/category-weight-loss.png",
    href: "/find/category/all-products",
  },
];

export default function CategoryCardsSection() {
  return (
    <section className="container mx-auto px-4 xl:px-0 mt-4">
      {/* Large cards: 2 columns */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        {/* Boost Testosterone — warm radial gradient */}
        <Link
          href="/find/category/testosterone"
          className="group relative rounded-2xl overflow-clip h-[180px] xl:h-[200px] block"
          style={{
            background:
              "radial-gradient(ellipse at 65% 80%, #C9A87C 0%, #DCCBB2 30%, #EDE5DA 55%, #F0EBE3 100%)",
          }}
        >
          <div className="absolute right-[15%] -top-[25%] -bottom-[5%] w-[35%]">
            <Image
              src="/home/v2/category-testosterone.png"
              alt="Boost Testosterone"
              fill
              className="object-contain object-center"
            />
          </div>
          <div className="absolute inset-0 flex flex-col justify-between p-6 z-10">
            <h3 className="font-title text-2xl xl:text-3xl font-medium tracking-tight">
              Boost <span className="text-[#B08B5B]">Testosterone</span>
            </h3>
            <div>
              <Button variant="filled" size="sm">
                Start Now &rarr;
              </Button>
            </div>
          </div>
        </Link>

        {/* ED Fast Acting — dark gradient */}
        <Link
          href="/find/category/sexual-health"
          className="group relative rounded-2xl overflow-clip h-[180px] xl:h-[200px] block"
          style={{
            background: "linear-gradient(135deg, #17161D 0%, #26272F 100%)",
          }}
        >
          <div className="absolute right-[15%] -top-[20%] -bottom-[20%] w-[30%]">
            <Image
              src="/home/v2/category-ed.png"
              alt="ED Fast Acting"
              fill
              className="object-contain object-center"
            />
          </div>
          <div className="absolute inset-0 flex flex-col justify-between p-6 z-10">
            <h3 className="font-title text-2xl xl:text-3xl font-medium tracking-tight text-white">
              ED <span className="text-neutral-400">Fast Acting</span>
            </h3>
            <div>
              <Button variant="filledInverse" size="sm">
                Learn More &rarr;
              </Button>
            </div>
          </div>
        </Link>
      </div>

      {/* Small cards: 3 columns */}
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
