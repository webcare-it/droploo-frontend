import { Button } from "@/components/ui/button";
import { HeaderLogo } from "./logo";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { navigationMenuItem } from "@/components/ui/navigation-menu";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export const MobileHeader = () => {
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
          <SheetContent className="h-full w-full">
            <div className="grid flex-1 auto-rows-min gap-6 px-4">
              <div className="grid gap-3">
                <Label htmlFor="sheet-demo-name">Name</Label>
                <Input id="sheet-demo-name" defaultValue="Pedro Duarte" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="sheet-demo-username">Username</Label>
                <Input id="sheet-demo-username" defaultValue="@peduarte" />
              </div>
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "text-destructive border-destructive hover:bg-destructive/5 hover:text-destructive"
                  )}>
                  Close
                </Button>
              </SheetClose>
            </SheetFooter>
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
