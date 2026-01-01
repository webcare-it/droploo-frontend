import { OptimizedImage } from "@/components/common/optimized-image";
import { home } from "@/data";
import { Link } from "react-router-dom";

export const FeatureSection = ({ image_order }: { image_order: number }) => {
  return (
    <section className="pb-14 md:pb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div
          className={`order-2 md:order-${
            image_order === 1 ? 1 : 2
          } flex justify-center md:justify-end`}>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/60 to-primary/60 rounded-3xl blur-xl opacity-50 -z-10" />
            <OptimizedImage
              src={home?.feature_one.image}
              alt="Winning Products Dashboard"
              className="rounded shadow-2xl w-full h-auto object-cover border-8 border-white"
            />
          </div>
        </div>

        <div
          className={`order-1 md:order-${
            image_order === 1 ? 2 : 1
          } text-center md:text-left space-y-6`}>
          <OptimizedImage
            src={home?.feature_one?.image}
            alt="Winning Products Dashboard"
            className="rounded-full hidden md:block size-32 object-cover"
          />
          <p className="text-primary/80 hidden md:block text-lg font-medium">
            {home?.feature_one?.sub_title}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            {home?.feature_one?.title}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            {home?.feature_one?.description}
          </p>
          <Link
            to="/winning-products"
            className="inline-flex items-center text-primary/80 font-semibold text-lg hover:text-primary transition">
            Explore Winning Products Now →
          </Link>
        </div>
      </div>
    </section>
  );
};

import { LayoutContainer } from "@/components/layout/base-layout";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface TrustworthySectionProps {
  trustworthy: {
    video_id: string;
    info: {
      title: string;
      desc_one: string;
      desc_two: string;
      desc_three: string;
    };
  };
}

const trustworthy: TrustworthySectionProps["trustworthy"] = {
  video_id: "YuFuMCxe-9c",

  info: {
    title: "500K+ Sellers Trust Dorploo To Grow Their Business",
    desc_one: "100M+ Product Catalog",
    desc_two: "US & EU Suppliers",
    desc_three: "Winning Products",
  },
};

export const TrustworthySection = () => {
  return (
    <section className="py-16 mb-14 md:mb-24 bg-gradient-to-br from-primary via-primary/80 to-primary/90 text-white">
      <LayoutContainer>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-1 flex justify-center">
            <div className="relative rounded overflow-hidden w-full h-[280px] md:h-[400px] bg-primary/10">
              <iframe
                src={`https://www.youtube.com/embed/${trustworthy?.video_id}?autoplay=1&mute=1&loop=1&playlist=${trustworthy?.video_id}&controls=0&modestbranding=1&rel=0`}
                title="Trust Video"
                className="absolute top-0 left-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>
            </div>
          </div>

          <div className="order-2 text-left space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              {trustworthy?.info.title}
            </h2>
            <ul className="space-y-3 text-lg">
              <li className="flex items-center justify-start gap-3">
                <span className="text-4xl">•</span>
                {trustworthy?.info.desc_one}
              </li>
              <li className="flex items-center justify-start gap-3">
                <span className="text-4xl">•</span>
                {trustworthy?.info.desc_two}
              </li>
              <li className="flex items-center justify-start gap-3">
                <span className="text-4xl">•</span>
                {trustworthy?.info.desc_three}
              </li>
            </ul>
            <Link to="/get-started">
              <Button
                variant="default"
                className={cn("h-10 md:h-12 px-6 border border-white")}
                asChild>
                <span className="flex items-center gap-2 text-base">
                  Get Started
                  <ArrowRight />
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </LayoutContainer>
    </section>
  );
};
