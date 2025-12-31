import React from "react";
import { Helmet } from "react-helmet-async";
import { useConfig } from "@/hooks/useConfig";
import { getConfig } from "@/helper";

export const SeoProvider = ({ children }: { children: React.ReactNode }) => {
  const config = useConfig();
  const favicon = getConfig(config, "favicon")?.value as string;
  const siteName = getConfig(config, "site_name")?.value as string;
  const siteMotto = getConfig(config, "site_motto")?.value as string;

  return (
    <React.Fragment>
      <Helmet>
        <title>{`${siteName} | ${siteMotto}`}</title>
        <link rel="icon" href={favicon as string} />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={siteName} />
      </Helmet>
      {children}
    </React.Fragment>
  );
};
