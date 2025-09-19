import Badge from "@/components/ui/badge";
import { ProductItem } from "../category/product-grid-section";
import { PlusIcon } from "lucide-react";
import Button from "@/components/ui/button";
import { formatPrice } from "@/lib/component-utils";
import Image from "next/image";
import Link from "next/link";

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
      <div className="relative h-[285px] w-full">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain object-center"
        />
      </div>
      <div className="flex flex-col items-center justify-end gap-y-3">
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
            <Link href="/shop/product/follicle-activator">Get Started</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
