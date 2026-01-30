// src/components/category/mens-health/product-grid-section.tsx
import DownIcon from "@/components/svg/down-icon";
import ProductGridItem from "@/components/shop/product-grid-item";
import { ProductItem } from "@/components/shop/product-grid-item";

const MENS_HEALTH_PRODUCTS: ProductItem[] = [
  {
    id: "ed-rapid-dissolve-tablet",
    name: "4-in-1 ED Rapid Dissolve Tablet",
    medicalName: "Tadalafil + Vardenafil + Apomorphine",
    price: "79.00",
    image: "/products/ed-rapid-dissolve-tablet-hero.png",
    slug: "ed-rapid-dissolve-tablet",
  },
  {
    id: "enclomiphene",
    name: "Enclomiphene",
    medicalName: "Enclomiphene Citrate",
    price: "79.00",
    image: "/products/enclomiphene-hero.png",
    slug: "enclomiphene",
  },
];

export default function ProductGridSection() {
  return (
    // COFOUNDER NOTE: Added id="products" to serve as an anchor for the hero button.
    <section id="products" className="container mx-auto px-4 xl:px-0">
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
        {MENS_HEALTH_PRODUCTS.map((product) => (
          <ProductGridItem product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
}