import { BaseLayout } from "@/components/layout/base-layout";
import { HeroSection } from "./hero";
import { Achievements } from "./achievement";
import { FeatureSection } from "./feature";

export const HomePage = () => {
  return (
    <BaseLayout>
      <HeroSection />
      <Achievements />
      <FeatureSection image_order={1} />
      <FeatureSection image_order={2} />
    </BaseLayout>
  );
};
