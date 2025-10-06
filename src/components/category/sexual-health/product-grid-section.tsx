// File: src/components/category/sexual-health/product-grid-section.tsx
import DownIcon from "@/components/svg/down-icon";
import ProductGridItem from "@/components/shop/product-grid-item";
import { ProductItem } from "@/components/shop/product-grid-item";

const SEXUAL_HEALTH_PRODUCTS: ProductItem[] = [
  {
    id: "ed-troche",
    name: "4-in-1 ED Troche",
    medicalName: "Tadalafil + Vardenafil + Apomorphine",
    price: "29.00",
    image: "/products/ed-troche-hero.png",
    slug: "ed-troche",
  },
  {
    id: "dapoxetine",
    name: "Dapoxetine",
    medicalName: "Dapoxetine",
    price: "89.00",
    image: "/products/dapoxetine-hero.png",
    slug: "dapoxetine",
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
        {SEXUAL_HEALTH_PRODUCTS.map((product) => (
          <ProductGridItem product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
}