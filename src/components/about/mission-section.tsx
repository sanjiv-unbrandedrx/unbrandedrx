// src/components/about/mission-section.tsx
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
  // TASK 6: Update product name and slug
  {
    id: "ed-rapid-dissolve-tablet",
    name: "4-in-1 ED Rapid Dissolve Tablet",
    medicalName: "Tadalafil + Vardenafil + Apomorphine",
    price: "29.00", // Note: This price is out of date.
    image: "/products/ed-rapid-dissolve-tablet-hero.png",
    slug: "ed-rapid-dissolve-tablet",
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