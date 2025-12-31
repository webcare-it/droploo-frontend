import { DesktopHeader } from "./desktop";
import { MobileHeader } from "./mobile";

export const Header = () => {
  return (
    <header className="bg-background sticky top-0 z-50">
      <nav className="h-16 w-full border-b border-border flex flex-col justify-center items-center">
        <div className="container mx-auto">
          <DesktopHeader />
          <MobileHeader />
        </div>
      </nav>
    </header>
  );
};
