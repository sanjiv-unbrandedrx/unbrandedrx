import Button from "@/components/ui/button-custom";
import Image from "next/image";
import Link from "next/link";
import {
  InstaBrandIcon,
  LinkedinBrandIcon,
  TikTokBrandIcon,
  XBrandIcon,
  YoutubeBrandIcon,
} from "../svg/brand-icons";
export default function Footer() {
  return (
    <footer className="py-10 bg-neutral-800 text-white px-4 xl:px-10">
      <div className="flex flex-col-reverse xl:flex-row flex-1 gap-[24px] items-start justify-between max-w-[1360px] mx-auto">
        <div className="space-y-8 xl:space-y-16">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">
            <div className="w-full">
              <p className="text-neutral-300 font-medium text-xs mb-1 xl:mb-3">
                Categories
              </p>
              <div className="w-full flex flex-row xl:flex-col gap-y-3 gap-x-4">
                <Link
                  href="/shop/category/hair-loss"
                  className="hover:underline underline-offset-2"
                >
                  Hair Loss
                </Link>
                <Link
                  href="/shop/category/weight-loss"
                  className="hover:underline underline-offset-2"
                >
                  Weight Loss
                </Link>
                <Link
                  href="/shop/category/mens-health"
                  className="hover:underline underline-offset-2"
                >
                  Men&apos;s Health
                </Link>
                <Link
                  href="/shop/category/skincare"
                  className="hover:underline underline-offset-2"
                >
                  Skincare
                </Link>
              </div>
            </div>
            <div className="w-full">
              <p className="text-neutral-300 font-medium text-xs mb-1 xl:mb-3">
                Our Company
              </p>
              <div className="w-full flex flex-row xl:flex-col gap-y-3 gap-x-4">
                <p>About Us</p>
                <p>How it Works</p>
                <p>Contact Us</p>
                <p>Support</p>
              </div>
            </div>
            <div className="w-full">
              <p className="text-neutral-300 font-medium text-xs mb-1 xl:mb-3">
                Legal
              </p>
              <div className="w-full flex flex-row xl:flex-col gap-y-3 gap-x-4">
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>
                <p>Returns</p>
              </div>
            </div>
          </div>
          <div>
            <p className="text-neutral-300 font-medium text-xs mb-3">Social</p>
            <div className="flex justify-start items-center gap-x-3">
              <Link href="https://www.youtube.com/">
                <YoutubeBrandIcon />
              </Link>
              <Link href="https://www.x.com/">
                <XBrandIcon className="size-5" />
              </Link>
              <Link href="https://www.tiktok.com/">
                <TikTokBrandIcon className="size-5" />
              </Link>
              <Link href="https://www.instagram.com/">
                <InstaBrandIcon className="size-5" />
              </Link>
              <Link href="https://www.linkedin.com/">
                <LinkedinBrandIcon className="size-6" />
              </Link>
            </div>
          </div>
          <div>
            <p>&copy;unbrandedrx inc. All Rights Reserved</p>
            <p>3459 Hidden Meadow Drive Oakes, North Dakota 58474</p>
          </div>
        </div>
        <div>
          <div className="relative rounded-3xl overflow-hidden min-h-[400px] min-w-[400px]">
            <Image
              fill
              src="/footer.webp"
              alt="unbrandedrx"
              className="object-center object-cover"
            />
            <div className="absolute z-10 inset-0 w-full h-full flex flex-col items-start justify-between gap-y-4 px-5 pt-5 pb-3">
              <p className="font-title text-xl">
                Empower
                <br /> your crew.
              </p>
              <Button size="base" variant="filled" className="self-center">
                For Business
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
