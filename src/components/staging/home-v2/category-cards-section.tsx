import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/button-custom";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/animate";

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
      <Stagger staggerDelay={0.15} className="grid grid-cols-1 xl:grid-cols-2 gap-4 pt-16">
        {/* Boost Testosterone — warm radial gradient */}
        <StaggerItem>
        <Link
          href="/find/category/testosterone"
          className="group relative block h-[180px] xl:h-[200px]"
        >
          {/* Gradient background — clipped to rounded corners */}
          <div
            className="absolute inset-0 rounded-2xl overflow-hidden"
            style={{
              background:
                "radial-gradient(ellipse at 65% 80%, #C9A87C 0%, #DCCBB2 30%, #EDE5DA 55%, #F0EBE3 100%)",
            }}
          />

          {/* Bottle image — overflows above the card */}
          <div className="absolute right-[12%] -top-[40%] bottom-0 w-[40%] z-[1] pointer-events-none">
            <Image
              src="/home/v2/category-testosterone.png"
              alt="Boost Testosterone"
              fill
              className="object-contain object-bottom"
            />
          </div>

          {/* Text + Button */}
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
        </StaggerItem>

        {/* ED Fast Acting — dark gradient */}
        <StaggerItem>
        <Link
          href="/find/category/sexual-health"
          className="group relative block h-[180px] xl:h-[200px]"
        >
          {/* Gradient background — clipped to rounded corners */}
          <div
            className="absolute inset-0 rounded-2xl overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #17161D 0%, #26272F 100%)",
            }}
          />

          {/* Pill image — overflows above the card */}
          <div className="absolute right-[8%] -top-[35%] bottom-0 w-[40%] z-[1] pointer-events-none">
            <Image
              src="/home/v2/category-ed.png"
              alt="ED Fast Acting"
              fill
              className="object-contain object-bottom"
            />
          </div>

          {/* Text + Button */}
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
        </StaggerItem>
      </Stagger>

      {/* Small cards: 3 columns */}
      <Stagger staggerDelay={0.1} className="grid grid-cols-2 xl:grid-cols-3 gap-4 mt-4">
        {smallCards.map((card) => (
          <StaggerItem key={card.title}>
          <Link
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
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
