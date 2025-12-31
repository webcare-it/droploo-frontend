import { DesktopHeader } from "./desktop";

export const Header = () => {
  return (
    <header className="bg-background">
      <nav className="h-20 w-full border-b border-border flex flex-col justify-center items-center bg-red-200">
        <div className="container mx-auto">
          <DesktopHeader />
        </div>
      </nav>
    </header>
  );
};
