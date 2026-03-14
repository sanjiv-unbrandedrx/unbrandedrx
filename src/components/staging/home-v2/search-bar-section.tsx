"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Button from "@/components/ui/button-custom";
import { Search, ArrowRight } from "lucide-react";

interface SearchResult {
  name: string;
  category: string;
  href: string;
}

const ALL_ITEMS: SearchResult[] = [
  {
    name: "Oral Sermorelin",
    category: "Longevity",
    href: "/staging/treatment/oral-sermorelin",
  },
  {
    name: "Enclomiphene",
    category: "Testosterone",
    href: "/find/treatment/enclomiphene",
  },
  {
    name: "4-in-1 ED Rapid Dissolve Tablet",
    category: "Sexual Health",
    href: "/find/treatment/ed-rapid-dissolve-tablet",
  },
  {
    name: "Topical Dutasteride",
    category: "Hair Loss",
    href: "/find/treatment/topical-dutasteride",
  },
  {
    name: "Topical Finasteride",
    category: "Hair Loss",
    href: "/find/treatment/topical-finasteride",
  },
  {
    name: "Oral Finasteride",
    category: "Hair Loss",
    href: "/find/treatment/oral-finasteride",
  },
  {
    name: "Oral Dutasteride",
    category: "Hair Loss",
    href: "/find/treatment/oral-dutasteride",
  },
  {
    name: "Hair Loss",
    category: "Category",
    href: "/find/category/hair-loss",
  },
  {
    name: "Men's Health",
    category: "Category",
    href: "/find/category/mens-health",
  },
  {
    name: "Sexual Health",
    category: "Category",
    href: "/find/category/sexual-health",
  },
  {
    name: "Testosterone",
    category: "Category",
    href: "/find/category/testosterone",
  },
];

export default function SearchBarSection() {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const results =
    query.length > 0
      ? ALL_ITEMS.filter(
          (item) =>
            item.name.toLowerCase().includes(query.toLowerCase()) ||
            item.category.toLowerCase().includes(query.toLowerCase())
        ).slice(0, 6)
      : [];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section className="container mx-auto px-4 xl:px-0 py-6">
      <div className="flex flex-col xl:flex-row items-center justify-center gap-4 xl:gap-6">
        {/* Search Input */}
        <div ref={wrapperRef} className="relative w-full xl:max-w-md">
          <div className="flex items-center border border-neutral-300 rounded-full px-5 py-3 bg-white">
            <span className="font-title font-medium text-sm text-neutral-800 whitespace-nowrap mr-2">
              Couldn&apos;t Find?
            </span>
            <Search className="size-4 text-muted-foreground mr-2 shrink-0" />
            <input
              type="text"
              placeholder="Search here..."
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setIsOpen(true);
              }}
              onFocus={() => query.length > 0 && setIsOpen(true)}
              className="flex-1 bg-transparent outline-none text-sm text-neutral-800 placeholder:text-neutral-400"
            />
          </div>

          {/* Dropdown Results */}
          {isOpen && results.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-neutral-200 rounded-2xl shadow-lg overflow-hidden z-50">
              {results.map((result) => (
                <Link
                  key={result.href}
                  href={result.href}
                  onClick={() => {
                    setIsOpen(false);
                    setQuery("");
                  }}
                  className="flex items-center justify-between px-5 py-3 hover:bg-neutral-50 transition-colors"
                >
                  <span className="text-sm font-medium text-neutral-800">
                    {result.name}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {result.category}
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>

        <span className="text-muted-foreground text-sm">or</span>

        {/* Browse All Button */}
        <Button variant="filled" size="sm">
          <Link
            href="/find/category/all-products"
            className="flex items-center gap-x-2"
          >
            Browse All <ArrowRight className="size-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
