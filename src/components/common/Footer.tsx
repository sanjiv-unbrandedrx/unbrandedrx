// src/components/common/Footer.tsx
import Link from "next/link";
// COFOUNDER NOTE: Add Image import for the LegitScript seal.
import Image from "next/image";

const hairCareLinks = [
  { name: "Oral Finasteride", href: "/find/treatment/oral-finasteride" },
  { name: "Oral Dutasteride", href: "/find/treatment/oral-dutasteride" },
  { name: "Topical Finasteride", href: "/find/treatment/topical-finasteride" },
  { name: "Topical Dutasteride", href: "/find/treatment/topical-dutasteride" },
];

const sexualHealthLinks = [
  {
    name: "4-in-1 ED Rapid Dissolve Tablet",
    href: "/find/treatment/ed-rapid-dissolve-tablet",
  },
];

const testosteroneLinks = [
  { name: "Enclomiphene", href: "/find/treatment/enclomiphene" },
];

const peptidesLinks = [
  { name: "Oral Sermorelin", href: "/find/treatment/oral-sermorelin" },
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
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          {/* Hair Care */}
          <div>
            <p className="font-medium text-neutral-300">
              <Link
                href="/find/category/hair-loss"
                className=""
              >
                Hair Care
              </Link>
            </p>
            <div className="mt-4 flex flex-col space-y-3">
              {hairCareLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-neutral-400 hover:text-white "
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Sexual Health + Testosterone (one column, two sections) */}
          <div>
            <p className="font-medium text-neutral-300">
              <Link
                href="/find/category/sexual-health"
                className=""
              >
                Sexual Health
              </Link>
            </p>
            <div className="mt-4 flex flex-col space-y-3">
              {sexualHealthLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-neutral-400 hover:text-white "
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <p className="font-medium text-neutral-300 mt-8">
              <Link
                href="/find/category/testosterone"
                className=""
              >
                Testosterone
              </Link>
            </p>
            <div className="mt-4 flex flex-col space-y-3">
              {testosteroneLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-neutral-400 hover:text-white "
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Peptides & Longevity */}
          <div>
            <p className="font-medium text-neutral-300">
              Peptides &amp; Longevity
            </p>
            <div className="mt-4 flex flex-col space-y-3">
              {peptidesLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-neutral-400 hover:text-white "
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Company Section */}
          <div>
            <p className="font-medium text-neutral-300">Our Company</p>
            <div className="mt-4 flex flex-col space-y-3">
              {companyLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-neutral-400 hover:text-white "
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
                  className="text-sm text-neutral-400 hover:text-white "
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
          <div className="mt-8 flex items-center gap-x-6">
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
            <Image
              src="/compounded-in-usa.png"
              alt="Compounded in the U.S.A."
              width={240}
              height={240}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
