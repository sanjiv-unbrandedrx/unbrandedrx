// File: src/components/shop/product-card.tsx
import StarFillIcon from "@/components/svg/star-fill-icon";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/component-utils";
import Image from "next/image";
import Link from "next/link";

// SURGICAL STRIKE: Added a type for product data.
export type Product = {
  id: string;
  name: string;
  medicalName: string;
  price: string;
  image: string;
  slug: string;
  reviews?: number; // Optional review count
  rating?: number; // Optional rating
};

// SURGICAL STRIKE: The component now accepts a `product` prop to display data dynamically.
export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden">
      <Link href={`/shop/product/${product.slug}`}>
        <div className="relative rounded-t-3xl min-w-[328px] aspect-square">
          <Image
            className="object-center object-cover"
            src={product.image}
            alt={product.name}
            fill
          />
        </div>
      </Link>
      <div className="px-8 py-7 flex flex-col gap-y-5 justify-start items-start">
        <div>
          <div className="font-title">
            <p className="text-2xl">{product.name}</p>
            <p className="text-neutral-800">{product.medicalName}</p>
          </div>
          <div className="mt-3">{formatPrice(product.price)}</div>
        </div>
        <div className="flex justify-start items-center gap-x-3">
          <div className="flex justify-start items-center gap-x-1">
            <StarFillIcon className="size-3.5" />
            <StarFillIcon className="size-3.5" />
            <StarFillIcon className="size-3.5" />
            <StarFillIcon className="size-3.5" />
            <StarFillIcon className="text-muted-foreground size-3.5" />
          </div>
          <p className="text-xs text-neutral-800">
            <span className="tabular-nums">200+</span> reviews
          </p>
        </div>
        <div className="flex justify-between items-center flex-1 gap-x-5 w-full">
          <Button
            size="sm"
            variant="outline"
            fullWidth
            asChild
            className="rounded-full"
          >
            <Link href={`/shop/product/${product.slug}`}>Get Started</Link>
          </Button>
          <Button
            size="sm"
            variant="filledCart"
            fullWidth
            className="rounded-full"
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}