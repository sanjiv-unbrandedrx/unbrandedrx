import DownIcon from "@/components/svg/down-icon";
import ProductGridItem from "../shop/product-grid-item";

export type ProductItem = {
  id: string;
  name: string;
  medicalName: string;
  price: string;
  bestSeller?: boolean;
  mostSearched?: boolean;
  image: string;
};

const DUMMY_PRODUCTS: ProductItem[] = [
  {
    id: "foll",
    name: "Follice Activator",
    medicalName: "Minoxidil + Caffeine + Copper Peptides",
    price: "43.50",
    bestSeller: true,
    image: "/products/dropper.png",
  },
  {
    id: "topi",
    name: "Topical Hair Formula",
    medicalName: "Minoxidil + Tretinoin",
    price: "62.00",
    image: "/products/dropper.png",
  },
  {
    id: "hairre",
    name: "Hair Regrowth",
    medicalName: "Dutasteride + Biotin",
    price: "55.00",
    image: "/products/dropper.png",
  },
  {
    id: "scal",
    name: "Scalp Spray Formula",
    medicalName: "Finasteride + Minoxidil",
    price: "79.50",
    image: "/products/dropper.png",
  },
  {
    id: "anti-a",
    name: "Anti-aging Cream",
    medicalName: "Tretinoin + Hydroquinone + Peptides",
    price: "27.50",
    image: "/products/dropper.png",
  },
  {
    id: "4-in-1ed",
    name: "4-in-1 ED",
    medicalName: "Tadalafil",
    price: "38.00",
    image: "/products/dropper.png",
  },
  {
    id: "metabol",
    name: "Metabolic Support",
    medicalName: "Tirzepatide",
    price: "60.00",
    mostSearched: true,
    image: "/products/dropper.png",
  },
  {
    id: "testo",
    name: "Testosterone Support",
    medicalName: "Enclomiphene Citrate",
    price: "33.50",
    image: "/products/dropper.png",
  },
  {
    id: "sleepc",
    name: "4-in-1 Sleep Capsule",
    medicalName: "Doxepin + Melatonin",
    price: "23.50",
    image: "/products/dropper.png",
  },
  {
    id: "weig",
    name: "Weight Management Injection",
    medicalName: "Semaglutide",
    price: "12.50",
    image: "/products/dropper.png",
  },
];

export default function ProductGridSection() {
  return (
    <section className="container mx-auto px-4 xl:px-0">
      <div className="flex justify-between items-center py-6">
        <div className="flex items-center gap-x-2">
          <h3 className="font-title tracking-tight text-3xl font-semibold">
            All Categories
          </h3>
          <DownIcon />
        </div>
        <div className="flex justify-end items-center gap-x-15 text-muted-foreground">
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
      <div className="grid grid-cols-4 gap-5">
        {DUMMY_PRODUCTS.map((product) => (
          <ProductGridItem product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
}
