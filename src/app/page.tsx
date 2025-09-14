import Link from "next/link";

export default function Home() {
  return (
    <main className="container mx-auto">
      <p className="text-muted-foreground text-sm"> Available links: </p>
      <ul className="flex flex-col gap-y-2 font-title font-medium text-2xl">
        <li>
          <Link
            href="/shop/category/hair-loss"
            className="underline underline-offset-2"
          >
            Hair Loss
          </Link>
        </li>
      </ul>
    </main>
  );
}
