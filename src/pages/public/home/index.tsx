import { BaseLayout, LayoutContainer } from "@/components/layout/base-layout";
import { HeroSection } from "./hero";
import { Achievements } from "./achievement";
import { FeatureSection, TrustworthySection } from "./feature";
import { CustomerReviewSection } from "./review";
import { FAQSection } from "./faq";
import { LatestBlogsSection } from "./blog";

export const HomePage = () => {
  return (
    <BaseLayout>
      <LayoutContainer>
        <HeroSection />
        <Achievements />
        <FeatureSection image_order={1} />
        <FeatureSection image_order={2} />
      </LayoutContainer>

      <TrustworthySection />
      <LayoutContainer>
        <CustomerReviewSection />
        <LatestBlogsSection />

        <FAQSection />
      </LayoutContainer>
    </BaseLayout>
  );
};
