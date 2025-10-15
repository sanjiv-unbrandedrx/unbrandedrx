// File: src/components/shop/product-grid-item.tsx
import Badge from "@/components/ui/badge";
import { PlusIcon } from "lucide-react";
import Button from "@/components/ui/button-custom";
import { formatPrice } from "@/lib/component-utils";
import Image from "next/image";
import Link from "next/link";

// This type definition is now used by the category-specific grid sections
export type ProductItem = {
  id: string;
  name: string;
  medicalName: string;
  price: string;
  bestSeller?: boolean;
  mostSearched?: boolean;
  image: string;
  slug: string; // Added slug for dynamic linking
};

export default function ProductGridItem({ product }: { product: ProductItem }) {
  return (
    <div
      className="flex flex-col items-stretch justify-start"
      key={`product-${product.id}`}
    >
      <div className="flex justify-between p-1">
        <div className="flex justify-start items-center gap-x-1">
          {product.bestSeller && <Badge>Best Seller</Badge>}
          {product.mostSearched && <Badge>Most Searched</Badge>}
        </div>
        <PlusIcon />
      </div>
      {/* TASK: Wrapped the image container with a Link to make it clickable. */}
      <Link href={`/shop/product/${product.slug}`}>
        <div className="relative h-[285px] w-full">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain object-center"
          />
        </div>
      </Link>
      <div className="flex flex-col items-center justify-end gap-y-3">
        {/* SURGICAL STRIKE: Reverted styling change by removing "text-center" */}
        <div className="text-neutral-800/80 flex flex-col items-center justify-end gap-y-1">
          <p>{product.name}</p>
          <p className="text-xs">{product.medicalName}</p>
        </div>
        <div className="flex justify-center items-center gap-x-5">
          {formatPrice(product.price)}
          <Button
            size="xs"
            variant="outline"
            className="border-neutral-800 hover:bg-neutral-900 hover:text-white"
          >
            {/* BUG FIX: Link now uses the product's slug */}
            <Link href={`/shop/product/${product.slug}`}>Get Started</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}