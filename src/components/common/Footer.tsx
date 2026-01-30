// src/components/common/Footer.tsx
import Link from "next/link";
// COFOUNDER NOTE: Add Image import for the LegitScript seal.
import Image from "next/image";

const productLinks = [
  {
    category: "Hair Loss",
    categoryHref: "/find/category/hair-loss",
    items: [
      { name: "Oral Finasteride", href: "/find/treatment/oral-finasteride" },
      { name: "Oral Dutasteride", href: "/find/treatment/oral-dutasteride" },
      {
        name: "Topical Finasteride",
        href: "/find/treatment/topical-finasteride",
      },
      {
        name: "Topical Dutasteride",
        href: "/find/treatment/topical-dutasteride",
      },
    ],
  },
  {
    category: "Men's Health",
    categoryHref: "/find/category/mens-health",
    items: [
      {
        name: "4-in-1 ED Rapid Dissolve Tablet",
        href: "/find/treatment/ed-rapid-dissolve-tablet",
      },
      { name: "Enclomiphene", href: "/find/treatment/enclomiphene" },
      // COFOUNDER NOTE: Restored Dapoxetine and Dapoxetine Max to footer links per feedback.
      { name: "Dapoxetine", href: "/find/treatment/dapoxetine" },
      { name: "Dapoxetine Max", href: "/find/treatment/dapoxetine-max" },
    ],
  },
];

const companyLinks = [
  { name: "About Us", href: "/about" },
  { name: "How it Works", href: "/how-it-works" },
  { name: "Contact Us", href: "/contact-us" },
];

const legalLinks = [
  { name: "Terms & Conditions", href: "/terms-and-conditions" },
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Returns", href: "/returns-policy" },
];

export default function Footer() {
  return (
    <footer className="border-t bg-neutral-800 py-16 text-white px-4 xl:px-10">
      <div className="mx-auto max-w-[1360px]">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Products Section */}
          <div className="col-span-2 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {productLinks.map((section) => (
              <div key={section.category}>
                <p className="font-medium text-neutral-300">
                  <Link
                    href={section.categoryHref}
                    className="hover:underline underline-offset-2"
                  >
                    {section.category}
                  </Link>
                </p>
                <div className="mt-4 flex flex-col space-y-3">
                  {section.items.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-sm text-neutral-400 hover:text-white hover:underline underline-offset-2"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Company Section */}
          <div>
            <p className="font-medium text-neutral-300">Our Company</p>
            <div className="mt-4 flex flex-col space-y-3">
              {companyLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-neutral-400 hover:text-white hover:underline underline-offset-2"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Legal Section */}
          <div>
            <p className="font-medium text-neutral-300">Legal</p>
            <div className="mt-4 flex flex-col space-y-3">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-neutral-400 hover:text-white hover:underline underline-offset-2"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright & LegitScript Seal */}
        <div className="mt-16 border-t border-neutral-700 pt-8">
          <p className="text-sm text-neutral-500">
            &copy; {new Date().getFullYear()} unbrandedrx. All Rights Reserved
          </p>
          {/* COFOUNDER NOTE: Add LegitScript seal per team feedback. */}
          <div className="mt-8">
            <Link
              href="https://www.legitscript.com/websites/?checker_keywords=unbrandedrx.co"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/legitscript.png"
                alt="unbrandedrx.co is Certified by LegitScript"
                width={120}
                height={80}
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
