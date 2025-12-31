import { Button } from "@/components/ui/button";
import { HeaderLogo } from "./logo";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { navigationMenuItem } from "@/components/ui/navigation-menu";
import { Menu } from "lucide-react";

export const MobileHeader = () => {
  return (
    <div className="flex md:hidden px-4 items-center justify-between">
      <HeaderLogo />
      <div className="flex items-center gap-4 shrink-0">
        <Button variant="ghost" asChild className={cn(navigationMenuItem())}>
          <Link to="/signin">Sign in</Link>
        </Button>
        <button>
          <Menu
            size={30}
            strokeWidth={3}
            absoluteStrokeWidth
            className="text-primary"
          />
        </button>
      </div>
    </div>
  );
};
