import { useEffect } from "react";
import { Footer } from "./footer";
import nprogress from "nprogress";
import { Header } from "./header";
import { useLocation } from "react-router-dom";
import { ScrollToTop } from "@/components/common/scroll-to-top";

interface Props {
  children: React.ReactNode;
}

export const BaseLayout = ({ children }: Props) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    nprogress.start();
    nprogress.done();
  }, [location.pathname]);

  return (
    <section className="min-h-screen">
      <Header />
      {children}
      <Footer />
      <ScrollToTop />
    </section>
  );
};

export const LayoutContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <section className="container md:mx-auto px-4 md:px-0">{children}</section>
  );
};
