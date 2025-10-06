// File: src/components/common/Footer.tsx
import Link from "next/link";

const productLinks = [
  {
    category: "Hair Loss",
    categoryHref: "/shop/category/hair-loss",
    items: [
      { name: "Oral Finasteride", href: "/shop/product/oral-finasteride" },
      { name: "Oral Dutasteride", href: "/shop/product/oral-dutasteride" },
      {
        name: "Topical Finasteride",
        href: "/shop/product/topical-finasteride",
      },
      {
        name: "Topical Dutasteride",
        href: "/shop/product/topical-dutasteride",
      },
    ],
  },
  {
    category: "Men's Health",
    categoryHref: "/shop/category/mens-health",
    items: [
      { name: "4-in-1 ED Troche", href: "/shop/product/ed-troche" },
      { name: "Enclomiphene", href: "/shop/product/enclomiphene" },
      { name: "Dapoxetine", href: "/shop/product/dapoxetine" },
      {
        name: "Ultimate Performance Capsule",
        href: "/shop/product/ultimate-performance",
      },
    ],
  },
];

const companyLinks = [
  { name: "About Us", href: "#" },
  { name: "How it Works", href: "#" },
  { name: "Contact Us", href: "/contact-us" },
  { name: "Support", href: "#" },
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

        {/* Copyright */}
        <div className="mt-16 border-t border-neutral-700 pt-8">
          <p className="text-sm text-neutral-500">
            &copy; {new Date().getFullYear()} unbrandedrx inc. All Rights
            Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}