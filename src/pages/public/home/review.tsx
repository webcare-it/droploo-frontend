import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { OptimizedImage } from "@/components/common/optimized-image";

const reviewImages = [
  "https://cdn.shopify.com/app-store/listing_images/c235b12c162e4169175753098c34aa7d/promotional_image/CNDB7I_7p4UDEAE=.png?height=720&width=1280",
  "https://cdn.shopify.com/app-store/listing_images/92796d59e4eacd388079f6309a978829/desktop_screenshot/CNL7nOD0lu8CEAE=.png?height=720&width=1280",
  "https://cdn.shopify.com/s/files/1/0643/9262/6408/articles/image9_354fc869-d485-4804-9508-2a5adc4f28e7.png?v=1756888822",
  "https://cdn.shopify.com/app-store/listing_images/92796d59e4eacd388079f6309a978829/desktop_screenshot/CLuun9L0lu8CEAE=.png?height=720&width=1280",
  "https://cdn.shopify.com/app-store/listing_images/8cada0f5da411a64e756606bb036f1ed/desktop_screenshot/CJ3w-uC_140DEAE=.png?height=720&width=1280",
  "https://il.ly/_next/image?url=%2Fblog%2Fauto-ds%2Fautods-cro-teardown-hero.webp&w=3840&q=75",
  "https://dropship.me/wp-content/uploads/2019/02/image_2-1.jpg",
  "https://alidropship.com/wp-content/uploads/2019/04/img_1.jpg",
  "https://cdn.shopify.com/app-store/listing_images/8cada0f5da411a64e756606bb036f1ed/desktop_screenshot/COzMkOG_140DEAE=.png?height=720&width=1280",
  "https://ecommercefastlane.com/wp-content/uploads/2021/07/43010-create-review-cards-to-showcase-your-products-and-user-generated-content.jpeg",
];

export const CustomerReviewSection = () => {
  return (
    <section className="pb-14 md:pb-24 bg-white">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
        Why Dropshippers Love Droploo
      </h2>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={16}
        loop={true}
        speed={500}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 1 },
          480: { slidesPerView: 1 },
          600: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 3 },
        }}
        className="mySwiper">
        {Array.from({ length: 5 }, (_, index) => {
          const imageIndex = index % reviewImages?.length;
          return (
            <SwiperSlide key={index}>
              <div className="px-2">
                <div className="rounded-lg bg-blue-50 border border-blue-100 shadow-md overflow-hidden relative h-[320px] w-[320px] md:h-[400px] md:w-[400px] lg:h-[520px] lg:w-[500px]">
                  <OptimizedImage
                    src={reviewImages?.[imageIndex] || ""}
                    alt={`Product ${index + 1}`}
                    className="w-full h-full absolute object-cover"
                  />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};
