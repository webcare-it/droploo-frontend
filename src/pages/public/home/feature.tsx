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
              alt="Spocket Winning Products Dashboard"
              className="rounded shadow-2xl w-full h-auto object-cover border-8 border-white"
            />
          </div>
        </div>

        <div
          className={`order-1 md:order-${
            image_order === 1 ? 2 : 1
          } text-center md:text-left space-y-6`}>
          <OptimizedImage
            src={home?.feature_one.image}
            alt="Spocket Winning Products Dashboard"
            className="rounded-full hidden md:block size-32 object-cover"
          />
          <p className="text-primary/80 hidden md:block text-lg font-medium">
            {home?.feature_one.sub_title}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            {home?.feature_one.title}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            {home?.feature_one.description}
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
