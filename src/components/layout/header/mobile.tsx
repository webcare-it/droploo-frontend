import { Button } from "@/components/ui/button";
import { HeaderLogo } from "./logo";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  NavigationMenuItem,
  navigationMenuItem,
} from "@/components/ui/navigation-menu";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { motion } from "framer-motion";
import { OptimizedImage } from "@/components/common/optimized-image";
import { categories } from "@/data";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

export const MobileHeader = () => {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  const toggleCategories = () => {
    setIsCategoriesOpen(!isCategoriesOpen);
  };

  return (
    <div className="flex md:hidden px-4 items-center justify-between">
      <MobileHead>
        <Sheet>
          <SheetTrigger asChild>
            <Menu
              size={30}
              strokeWidth={3}
              absoluteStrokeWidth
              className="text-primary"
            />
          </SheetTrigger>
          <SheetContent className="h-full w-full overflow-y-auto">
            <div className="flex flex-col justify-start gap-2 px-4">
              <NavigationMenuItem
                className={cn(navigationMenuItem(), "w-full justify-start")}
                onClick={toggleCategories}>
                <div className="flex items-center justify-between w-full">
                  <span>Dropshipping</span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${
                      isCategoriesOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </NavigationMenuItem>

              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: isCategoriesOpen ? "auto" : 0,
                  opacity: isCategoriesOpen ? 1 : 0,
                }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden">
                <div className="flex flex-col gap-3 scroll-y-auto">
                  {categories?.map((category) => (
                    <Link
                      key={category.id}
                      to={`/category/${category.slug}`}
                      className="flex items-center gap-2.5 rounded hover:bg-primary/10 transition-colors group cursor-pointer overflow-hidden ml-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <OptimizedImage
                          src={category.image}
                          alt={category.name}
                          className="w-12 h-12 object-contain"
                        />
                      </div>
                      <span className="text-base font-semibold text-center leading-tight  group-hover:text-primary">
                        {category.name}
                      </span>
                    </Link>
                  ))}
                </div>
                <Separator className="my-4 h-1" />
              </motion.div>

              <NavItem path="/integration">Integration</NavItem>
              <NavItem path="/blogs">Blogs</NavItem>
              <NavItem path="/winning-products">Winning products</NavItem>
              <NavItem path="/about-us">About us</NavItem>
              <NavItem path="/contact-us">Contact us</NavItem>
              <Button variant="default" size="lg" className="mt-8" asChild>
                <Link to="/get-started">Get Started</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </MobileHead>
    </div>
  );
};

export const MobileHead = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <HeaderLogo />
      <div className="flex items-center gap-4 shrink-0">
        <Button variant="ghost" asChild className={cn(navigationMenuItem())}>
          <Link to="/signin">Sign in</Link>
        </Button>
        {children}
      </div>
    </>
  );
};

const NavItem = ({
  children,
  path,
}: {
  children: React.ReactNode;
  path: string;
}) => {
  const location = useLocation();
  return (
    <NavigationMenuItem
      className={cn(
        navigationMenuItem(),
        "w-full justify-start",
        location.pathname === path && "bg-primary/10 text-primary"
      )}>
      <Link to={path} className="w-full h-full">
        {children}
      </Link>
    </NavigationMenuItem>
  );
};
