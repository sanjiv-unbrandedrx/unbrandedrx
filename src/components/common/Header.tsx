import Link from "next/link";
import Logo from "../svg/logo";
import SearchIcon from "../svg/search-icon";
import { UserIcon } from "../svg/user-icon";
import BasketIcon from "../svg/basket-icon";

export default function Header() {
  return (
    <header className="container mx-auto flex items-center justify-between gap-x-3 py-9">
      <nav className="hidden xl:flex gap-x-10 items-center justify-start font-semibold font-title tracking-tight">
        <Link href="/" aria-label="Home">
          <Logo />
        </Link>
        <Link href="/shop/category/hair-loss">Shop</Link>
        <Link href="#">About</Link>
        <Link href="#">How it Works</Link>
        <Link href="#">Contact</Link>
      </nav>
      <nav className="flex xl:hidden gap-x-10 items-center justify-start font-semibold font-title tracking-tight">
        <Link href="/" aria-label="Home">
          <Logo className="w-30" />
        </Link>
      </nav>
      <ul className="flex gap-x-3 xl:gap-x-6 items-center justify-end">
        <li>
          <SearchIcon />
        </li>
        <li>
          <Link href="/signup">
            <UserIcon />
          </Link>
        </li>
        <li>
          <BasketIcon />
        </li>
      </ul>
    </header>
  );
}
