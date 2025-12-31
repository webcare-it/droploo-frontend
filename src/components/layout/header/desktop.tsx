import { Link } from "react-router-dom";
import { useConfig } from "@/hooks/useConfig";
import { getConfig } from "@/helper";
import { OptimizedImage } from "@/components/common/optimized-image";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { categories } from "@/data";
import { cn } from "@/lib/utils";

export const DesktopHeader = () => {
  const config = useConfig();
  const logo = getConfig(config, "header_logo")?.value as string;

  return (
    <div className="hidden md:flex items-center justify-between w-full">
      <div className="flex flex-1 justify-start items-center h-full gap-8">
        <Link to="/" className="flex items-center shrink-0">
          <div className="h-12 w-32 relative">
            <OptimizedImage
              src={logo || ""}
              alt="Logo"
              className="object-contain"
            />
          </div>
        </Link>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Dropship</NavigationMenuTrigger>
              <NavigationMenuContent className="!w-full left-0 right-0">
                <div className="container mx-auto p-6">
                  <div className="grid grid-cols-4 gap-3">
                    {categories.map((category) => (
                      <Link
                        key={category.id}
                        to={`/category/${category.slug}`}
                        className="flex flex-col items-center gap-2.5 p-3 rounded-md hover:bg-accent/50 transition-colors group cursor-pointer">
                        <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <OptimizedImage
                            src={category.image}
                            alt={category.name}
                            className="w-10 h-10 object-contain"
                          />
                        </div>
                        <span className="text-xs font-medium text-center leading-tight">
                          {category.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link
                to="/integration"
                className={cn(
                  "inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground transition-colors"
                )}>
                Integration
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link
                to="/blogs"
                className={cn(
                  "inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground transition-colors"
                )}>
                Blogs
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link
                to="/winning-products"
                className={cn(
                  "inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground transition-colors"
                )}>
                Winning Products
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="flex items-center gap-4 shrink-0">
        <Button variant="ghost" asChild>
          <Link to="/login">Login</Link>
        </Button>
        <Button variant="default" asChild>
          <Link to="/get-started">Get Started</Link>
        </Button>
      </div>
    </div>
  );
};
