import { Link } from "react-router-dom";
import { OptimizedImage } from "@/components/common/optimized-image";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  navigationMenuItem,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { categories } from "@/data";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { HeaderLogo } from "./logo";

export const DesktopHeader = () => {
  return (
    <div className="hidden md:flex items-center justify-between w-full">
      <div className="flex flex-1 justify-start items-center h-full gap-8">
        <HeaderLogo />

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Dropshipping</NavigationMenuTrigger>
              <NavigationMenuContent className="!w-full left-0 right-0">
                <div className="container mx-auto py-6">
                  <div className="grid grid-cols-5 gap-3">
                    {categories?.map((category) => (
                      <Link
                        key={category.id}
                        to={`/category/${category.slug}`}
                        className="flex items-center gap-2.5 rounded hover:bg-primary/10 transition-colors group cursor-pointer overflow-hidden">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <OptimizedImage
                            src={category.image}
                            alt={category.name}
                            className="w-12 h-12 object-contain"
                          />
                        </div>
                        <span className="text-xs font-semibold text-center leading-tight">
                          {category.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                  <Separator className="my-4 h-1" />
                  <div className="flex items-center justify-between w-full">
                    <h3 className="text-lg font-semibold text-center leading-tight">
                      🚀Start your Dropshipping journey
                    </h3>
                    <Button variant="default" size="lg" asChild>
                      <Link to="/get-started">Get Started</Link>
                    </Button>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem className={cn(navigationMenuItem())}>
              <Link to="/integration">Integration</Link>
            </NavigationMenuItem>

            <NavigationMenuItem className={cn(navigationMenuItem())}>
              <Link to="/blogs">Blogs</Link>
            </NavigationMenuItem>

            <NavigationMenuItem className={cn(navigationMenuItem())}>
              <Link to="/winning-products">Winning Products</Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="flex items-center gap-4 shrink-0">
        <Button variant="ghost" asChild className={cn(navigationMenuItem())}>
          <Link to="/signin">Sign in</Link>
        </Button>
        <Button variant="default" size="lg" asChild>
          <Link to="/get-started">Get Started</Link>
        </Button>
      </div>
    </div>
  );
};
