// File: src/components/about/mission-section.tsx
import ProductCarousel from "@/components/common/product-carousel";
import { Product } from "@/components/shop/product-card";

const popularProducts: Product[] = [
  {
    id: "enclomiphene",
    name: "Enclomiphene",
    medicalName: "Enclomiphene Citrate",
    price: "79.00",
    image: "/products/enclomiphene-hero.png",
    slug: "enclomiphene",
  },
  {
    id: "oral-finasteride",
    name: "Oral Finasteride",
    medicalName: "Finasteride + Minoxidil",
    price: "59.00",
    image: "/products/oral-finasteride-hero.png",
    slug: "oral-finasteride",
  },
  {
    id: "ed-troche",
    name: "4-in-1 ED Troche",
    medicalName: "Tadalafil + Vardenafil + Apomorphine",
    price: "29.00",
    image: "/products/ed-troche-hero.png",
    slug: "ed-troche",
  },
];

export default function MissionSection() {
  return (
    <ProductCarousel
      title="Popular Treatments, Transparently Priced."
      products={popularProducts}
    />
  );
}