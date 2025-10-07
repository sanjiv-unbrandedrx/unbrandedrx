// @/components/common/MobileNav.tsx
"use client";

import Link from "next/link";
import { useEffect } from "react";
import CloseIcon from "../svg/close-icon";
import Logo from "../svg/logo";
import { cn } from "@/lib/utils";
// SURGICAL STRIKE: Removed SearchIcon import.
import { UserIcon } from "../svg/user-icon";
import BasketIcon from "../svg/basket-icon";

const navLinks = [
  { name: "All Products", href: "/shop/category/all-products" },
  { name: "Hair Loss", href: "/shop/category/hair-loss" },
  { name: "Men's Health", href: "/shop/category/mens-health" },
  { name: "Sexual Health", href: "/shop/category/sexual-health" },
  { name: "Testosterone", href: "/shop/category/testosterone" },
];

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-black/40 z-40 transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-full max-w-sm bg-white z-50 transform transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          {/* SURGICAL STRIKE: Relocated User and Basket icons to the header */}
          <div className="flex items-center justify-between p-6 border-b">
            {/* SURGICAL STRIKE: Increased logo width by 50% (w-32 to w-48) */}
            <Logo className="w-48" />
            <div className="flex items-center gap-x-6">
              <Link href="/signup" onClick={onClose} aria-label="My Account">
                <UserIcon />
              </Link>
              <button aria-label="Shopping Basket">
                <BasketIcon />
              </button>
              <button onClick={onClose} aria-label="Close menu">
                <CloseIcon className="size-6" />
              </button>
            </div>
          </div>
          <nav className="flex-grow p-6">
            <ul className="space-y-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="font-title text-2xl font-medium tracking-tight text-neutral-800 hover:text-neutral-600 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          {/* SURGICAL STRIKE: Removed the footer section with icons */}
        </div>
      </div>
    </>
  );
}