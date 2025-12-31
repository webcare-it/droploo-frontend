import { getConfig } from "@/helper";
import { useConfig } from "@/hooks/useConfig";
import { Link } from "react-router-dom";

export const HeaderLogo = () => {
  const config = useConfig();
  const logo = getConfig(config, "header_logo")?.value as string;

  return (
    <Link to="/" className="flex items-center shrink-0">
      <div className="h-12 md:h-14 w-32 relative flex items-center justify-center">
        <img
          src={logo ? "/droploo.png" : logo}
          alt="Logo"
          className="object-contain absolute"
          onError={(e) => {
            e.currentTarget.src = "/droploo.png";
          }}
        />
      </div>
    </Link>
  );
};
