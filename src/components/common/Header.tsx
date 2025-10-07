// File: src/components/common/Header.tsx
"use client"; // SURGICAL STRIKE: Enable client-side interactivity for state management.

import Link from "next/link";
import { useState } from "react";
import Logo from "../svg/logo";
// SURGICAL STRIKE: Removed unused icon imports.
import MenuIcon from "../svg/menu-icon";
import MobileNav from "./MobileNav";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="container mx-auto flex items-center justify-between gap-x-3 py-9">
        <nav className="flex gap-x-10 items-center justify-start font-semibold font-title tracking-tight">
          <Link href="/" aria-label="Home">
            {/* SURGICAL STRIKE: Increased logo width by 50% (w-30 to w-45) */}
            <Logo className="w-45" />
          </Link>
        </nav>
        {/* SURGICAL STRIKE: Removed Search, User, and Basket icons from the header. */}
        <ul className="flex gap-x-3 xl:gap-x-6 items-center justify-end">
          <li>
            <button onClick={() => setIsMenuOpen(true)} aria-label="Open menu">
              <MenuIcon />
            </button>
          </li>
        </ul>
      </header>

      <MobileNav isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}