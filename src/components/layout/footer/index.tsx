import { Separator } from "@/components/ui/separator";
import { getConfig } from "@/helper";
import { useConfig } from "@/hooks/useConfig";
import { OptimizedImage } from "@/components/common/optimized-image";
import { ButtonGroup } from "@/components/ui/button-group";
import {
  Copyright,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { LayoutContainer } from "../base-layout";

export const Footer = () => {
  const config = useConfig();
  const logo = getConfig(config, "footer_logo")?.value as string;
  const description = getConfig(config, "footer_description")?.value as string;
  const copyright =
    (getConfig(config, "copy_rights_text")?.value as string) ||
    `${new Date().getFullYear()} Droploo. All rights reserved.`;

  const phone = getConfig(config, "phone")?.value as string;
  const email = getConfig(config, "email")?.value as string;
  const address = getConfig(config, "address")?.value as string;

  const facebook = (getConfig(config, "facebook")?.value as string) || "/";
  const twitter = (getConfig(config, "twitter")?.value as string) || "/";
  const instagram = (getConfig(config, "instagram")?.value as string) || "/";
  const youtube = (getConfig(config, "youtube")?.value as string) || "/";
  const linkedin = (getConfig(config, "linkedin")?.value as string) || "/";

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white pt-16 pb-8">
      <LayoutContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center">
              <OptimizedImage
                className="h-12 w-32 object-contain"
                src={logo || ""}
                alt="logo"
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              {description}
            </p>
            <div className="flex items-center space-x-4">
              <Link
                to={facebook as string}
                className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-700 transition-colors duration-75">
                <Facebook className="w-4 h-4" />
              </Link>

              <Link
                to={instagram as string}
                className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 flex items-center justify-center text-white hover:opacity-90 transition-opacity duration-75">
                <Instagram className="w-4 h-4" />
              </Link>
              <Link
                to={youtube as string}
                className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-white hover:bg-red-700 transition-colors duration-75">
                <Youtube className="w-4 h-4" />
              </Link>
              <Link
                to={twitter as string}
                className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white hover:bg-gray-800 transition-colors duration-75">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-4 h-4"
                  viewBox="0 0 16 16">
                  <path
                    d="M12.6 0.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867 -5.07 -4.425 5.07H0.316l5.733 -6.57L0 0.75h5.063l3.495 4.633L12.601 0.75Zm-0.86 13.028h1.36L4.323 2.145H2.865z"
                    strokeWidth="1"></path>
                </svg>
              </Link>
              <Link
                to={linkedin as string}
                className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-700 transition-colors duration-75">
                <Linkedin className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <QuickLink path="/blogs">Blogs</QuickLink>
              <QuickLink path="/about-us">About us</QuickLink>
              <QuickLink path="/contact-us">Contact us</QuickLink>
              <QuickLink path="/winning-products">Winning products</QuickLink>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4">
              {phone && (
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 mt-0.5 text-primary flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{phone}</span>
                </li>
              )}
              {email && (
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 mt-0.5 text-primary flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{email}</span>
                </li>
              )}
              {address && (
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-0.5 text-primary flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{address}</span>
                </li>
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Newsletter</h3>
            <p className="text-gray-300 text-sm mb-4">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <div>
              <ButtonGroup className="w-full">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-l-lg bg-gray-800 border border-gray-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-r-lg text-sm transition-colors cursor-pointer">
                  Subscribe
                </button>
              </ButtonGroup>
            </div>
          </div>
        </div>

        <Separator className="bg-gray-700 my-8" />

        <div className="flex flex-col-reverse gap-4 md:flex-row justify-between items-center">
          <p className="text-gray-200 text-sm flex items-center">
            <Copyright className="mr-2 size-4" /> {copyright}
          </p>
          <ul className="flex space-x-6 mt-4 md:mt-0">
            <QuickLink path="/privacy-policy">Privacy Policy</QuickLink>
            <QuickLink path="/terms-condition">Terms & Conditions</QuickLink>
          </ul>
        </div>
      </LayoutContainer>
    </footer>
  );
};

const QuickLink = ({
  children,
  path,
}: {
  children: React.ReactNode;
  path: string;
}) => {
  const location = useLocation();
  return (
    <li>
      <Link
        to={path}
        className={`text-gray-300 hover:text-primary hover:underline transition-colors text-sm ${
          location.pathname === path ? "text-primary" : ""
        }`}>
        {children}
      </Link>
    </li>
  );
};
