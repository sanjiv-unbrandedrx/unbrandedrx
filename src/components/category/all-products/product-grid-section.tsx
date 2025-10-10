// src/components/category/all-products/product-grid-section.tsx
import DownIcon from "@/components/svg/down-icon";
import ProductGridItem from "@/components/shop/product-grid-item";
import { ProductItem } from "@/components/shop/product-grid-item";

const ALL_PRODUCTS: ProductItem[] = [
  // TASK 6: Update product name and slug
  {
    id: "ed-rapid-dissolve-tablet",
    name: "4-in-1 ED Rapid Dissolve Tablet",
    medicalName: "Tadalafil + Vardenafil + Apomorphine",
    price: "29.00", // Note: out of date
    image: "/products/ed-rapid-dissolve-tablet-hero.png",
    slug: "ed-rapid-dissolve-tablet",
  },
  {
    id: "dapoxetine",
    name: "Dapoxetine",
    medicalName: "Dapoxetine",
    price: "89.00",
    image: "/products/dapoxetine-hero.png",
    slug: "dapoxetine",
  },
  {
    id: "enclomiphene",
    name: "Enclomiphene",
    medicalName: "Enclomiphene Citrate",
    price: "79.00",
    image: "/products/enclomiphene-hero.png",
    slug: "enclomiphene",
  },
  {
    id: "oral-dutasteride",
    name: "Oral Dutasteride",
    medicalName: "Dutasteride + Minoxidil",
    price: "XX.XX",
    image: "/products/oral-dutasteride-hero.png",
    slug: "oral-dutasteride",
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
    id: "topical-dutasteride",
    name: "Topical Dutasteride",
    medicalName: "Minoxidil + Dutasteride + Tretinoin",
    price: "69.00",
    image: "/products/topical-dutasteride-hero.png",
    slug: "topical-dutasteride",
  },
  {
    id: "topical-finasteride",
    name: "Topical Finasteride",
    medicalName: "Minoxidil + Finasteride + Tretinoin",
    price: "59.00",
    image: "/products/topical-finasteride-hero.png",
    slug: "topical-finasteride",
  },
  {
    id: "ultimate-performance",
    name: "Ultimate Performance Capsule",
    medicalName: "Sildenafil + Tadalafil + More",
    price: "XX.XX",
    image: "/products/ultimate-performance-hero.png",
    slug: "ultimate-performance",
  },
];

export default function ProductGridSection() {
  return (
    <section className="container mx-auto px-4 xl:px-0">
      <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center py-6 gap-y-4 mb-4 xl:mb-0">
        <div className="flex items-center gap-x-2">
          <h3 className="font-title tracking-tight text-3xl font-semibold">
            All Categories
          </h3>
          <DownIcon />
        </div>
        <div className="flex justify-end items-center gap-x-6 xl:gap-x-15 text-muted-foreground">
          <div className="flex items-center gap-x-2">
            <p>Filter by</p>
            <DownIcon />
          </div>
          <div className="flex items-center gap-x-2">
            <p>Sort by</p>
            <DownIcon />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-5">
        {ALL_PRODUCTS.map((product) => (
          <ProductGridItem product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
}