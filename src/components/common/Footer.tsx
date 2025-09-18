import Button from "@/components/ui/button";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="mt-24 py-10 bg-neutral-800 text-white px-10">
      <div className="flex flex-1 gap-[24px] items-start justify-between max-w-[1360px] mx-auto">
        <div className="space-y-16">
          <div className="grid grid-cols-3 gap-x-5">
            <div className="w-full flex flex-col gap-y-3">
              <p className="text-neutral-300 font-medium text-xs">Categories</p>
              <p>Hair Loss</p>
              <p>Weight Loss</p>
              <p>Men&apos;s Health</p>
              <p>Skincare</p>
            </div>
            <div className="w-full flex flex-col gap-y-3">
              <p className="text-neutral-300 font-medium text-xs">
                Our Comapny
              </p>
              <p>About Us</p>
              <p>How it Works</p>
              <p>Contact Us</p>
              <p>Support</p>
            </div>
            <div className="w-full flex flex-col gap-y-3">
              <p className="text-neutral-300 font-medium text-xs">Legal</p>
              <p>Terms & Conditions</p>
              <p>Privacy Policy</p>
              <p>Returns</p>
            </div>
          </div>
          <div>
            <p className="text-neutral-300 font-medium text-xs">Social</p>
            <div className="flex justify-start gap-x-3">
              <p>YT</p>
              <p>X</p>
              <p>t</p>
              <p>i</p>
              <p>in</p>
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
              src="/footer.png"
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
