import Button from "@/components/ui/button-custom";
import { Shield, Truck, MessageCircle } from "lucide-react";

export default function FinalCTASection() {
  return (
    <section className="container mx-auto my-4 py-12 px-4 xl:my-15 xl:py-20 xl:px-0">
      <div className="bg-neutral-900 rounded-3xl p-8 xl:p-16 text-center">
        <h2 className="font-title text-3xl xl:text-4xl font-medium text-white">
          Ready to Optimize Your Testosterone?
        </h2>
        <p className="mt-4 text-neutral-300 max-w-xl mx-auto">
          Join thousands of men who&apos;ve taken control of their hormone
          health. Start your personalized treatment today.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://checkout.unbrandedrx.co/enclomiphine?priceId=1998"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="filledInverse" size="xl">
              Get Started — $79/month
            </Button>
          </a>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-neutral-400">
          <div className="flex items-center gap-x-2">
            <Shield className="size-4" />
            <span>Licensed U.S. Providers</span>
          </div>
          <div className="flex items-center gap-x-2">
            <Truck className="size-4" />
            <span>Free Discreet Shipping</span>
          </div>
          <div className="flex items-center gap-x-2">
            <MessageCircle className="size-4" />
            <span>Ongoing Provider Support</span>
          </div>
        </div>

        <p className="mt-6 text-xs text-neutral-500">
          Cancel anytime. No long-term commitment required.
        </p>
      </div>
    </section>
  );
}
