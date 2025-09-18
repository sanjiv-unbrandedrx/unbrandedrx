import Header from "@/components/common/Header";
import Button from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section
      className="container mx-auto pb-48 bg-right bg-cover bg-no-repeat rounded-2xl mt-5 px-12"
      style={{ backgroundImage: "url('/home/hero.png')" }}
    >
      <Header />
      <div className="max-w-md space-y-6 mb-9 mt-35">
        <h2 className="font-title font-medium text-4xl tracking-tight">
          The Same Ingredient. <br /> A Smarter Price.
        </h2>
        <p className="font-light text-2xl text-muted-foreground">
          Get proven prescription treatments with free shipping and unlimited
          doctor consults.
        </p>
      </div>
      <Button size="xl" variant="filled">
        See the Treatments
      </Button>
    </section>
  );
}
