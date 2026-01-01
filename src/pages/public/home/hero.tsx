import "swiper/css";
import "swiper/css/effect-fade";
import { cn } from "@/lib/utils";
import { home } from "@/data";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { OptimizedImage } from "@/components/common/optimized-image";

export const HeroSection = () => {
  return (
    <section className="my-8 md:my-12 grid grid-cols-1 md:grid-cols-2 gap-10">
      <div className="md:col-span-1">
        <h1 className="text-3xl md:text-6xl font-bold text-primary mb-6 md:mb-10">
          {home?.hero?.title}
        </h1>
        <h2 className="text-2xl md:text-5xl font-bold mb-4 md:mb-8">
          {home?.hero?.sub_title}
        </h2>
        <p className="text-base mb-4 md:mb-8">{home?.hero?.description}</p>
        <Link to="/get-started">
          <Button variant="default" className={cn("h-10 md:h-12 px-6")} asChild>
            <span className="flex items-center gap-2 text-base">
              Get Started
              <ArrowRight />
            </span>
          </Button>
        </Link>
        <div className="mt-4 md:mt-6 flex items-center gap-2">
          <div className="flex items-center gap-0.5">
            <Star className="size-4 text-primary fill-primary" />
            <Star className="size-4 text-primary fill-primary" />
            <Star className="size-4 text-primary fill-primary" />
            <Star className="size-4 text-primary fill-primary" />
            <Star className="size-4 text-primary fill-primary" />
          </div>
          <p className="text-sm md:text-base">{home?.hero?.review_title}</p>
        </div>
      </div>
      <div className="md:col-span-1">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          fadeEffect={{ crossFade: true }}
          loop={true}
          className="aspect-square w-full max-w-[500px] rounded-lg overflow-hidden bg-primary/10">
          {home?.hero?.images?.map((image: string, index: number) => (
            <SwiperSlide key={index} className="w-full h-full relative">
              <OptimizedImage
                src={image}
                alt={`Hero ${index + 1}`}
                className="w-full h-full aspect-square object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
