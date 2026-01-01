import { useGetWishlist } from "@/controllers/wishlistController";
import { useGetCart } from "@/controllers/cartController";
import { ScrollToTop } from "@/components/common/scroll-to-top";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Footer } from "./footer";
import nprogress from "nprogress";
import { Header } from "./header";

interface Props {
  isContainer?: boolean;
  children: React.ReactNode;
}

export const BaseLayout = ({ isContainer, children }: Props) => {
  useGetCart();
  useGetWishlist();

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
      <section
        className={isContainer ? "container md:mx-auto px-4 md:px-0" : ""}>
        {children}
      </section>
      <Footer />
      <ScrollToTop />
    </section>
  );
};
