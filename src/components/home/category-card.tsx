import Link from "next/link";
import Image from "next/image";
import RightIcon from "@/components/svg/right-icon";

export type CategoryItem = {
  id: string;
  name: string;
  description: string;
  image: string;
  slug: string;
};

export default function CategoryCard({ category }: { category: CategoryItem }) {
  return (
    <div className="overflow-hidden xl:pt-10">
      <Link href={`/shop/category/${category.slug}`} className="group">
        <div className="bg-muted px-12 rounded-2xl flex justify-between items-center relative">
          <div className="py-8 xl:max-w-50 space-y-3">
            <p className="font-title text-neutral-800 font-medium text-3xl">
              {category.name}
            </p>
            <p className="text-muted-foreground">{category.description}</p>
          </div>
          <div className="justify-end flex items-center xl:w-full">
            <div className="relative hidden xl:block w-[220px]">
              <Image
                src={category.image}
                alt={category.name}
                width={220}
                height={261}
                className="object-center object-cover rotate-[20deg] -top-40 absolute group-hover:-top-42 transition-all"
              />
            </div>
            <div className="h-full">
              <RightIcon />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
