import { home } from "@/data";
import { OptimizedImage } from "@/components/common/optimized-image";

export const Achievements = () => {
  return (
    <div className="flex flex-col items-center justify-center pb-14 md:pb-24">
      <div className="flex flex-wrap justify-center gap-6 md:gap-24 lg:gap-32">
        {home?.achievements?.map((achievement) => (
          <div
            key={achievement.id}
            className="flex items-center gap-3 space-y-2">
            <OptimizedImage
              src={achievement.image}
              alt={achievement.description}
              className="w-16 h-16 md:w-20 md:h-20 object-contain"
            />
            <div className="flex flex-col">
              <p className="text-2xl md:text-3xl font-bold text-gray-900">
                {achievement.name}
              </p>
              <p className="text-sm md:text-base text-gray-600 max-w-xs">
                {achievement.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
