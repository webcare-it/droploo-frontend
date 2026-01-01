import { Button } from "@/components/ui/button";
import { home } from "@/data";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section className="my-8 md:my-10 grid grid-cols-1 md:grid-cols-2 md:gap-4">
      <div className="md:col-span-1 md:pr-6">
        <h1 className="text-3xl md:text-5xl font-bold text-primary mb-6 md:mb-8">
          {home?.hero?.title}
        </h1>
        <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">
          {home?.hero?.sub_title}
        </h2>
        <p className="text-base mb-4 md:mb-6">{home?.hero?.description}</p>

        <Button variant="default" size="lg" asChild>
          <div className="flex items-center gap-2">
            <Link to="/get-started">Get Started</Link>
            <ArrowRight />
          </div>
        </Button>
      </div>
      <div className="md:col-span-1 md:pl-6 bg-red-400">
        <img
          src="/https://cdn.prod.website-files.com/5b3213161e5234bf1cfff9e1/66ec834ee93544ed9350f839_ecf8be3f6ae6473cfd14fa89e6777c35_hero--4.avif"
          alt="Hero"
          className="w-xl h-[300px]"
        />
      </div>
    </section>
  );
};
