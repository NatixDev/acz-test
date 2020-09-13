import React from "react";
import { Helmet } from "react-helmet";
import config from "../../data/SiteConfig";
import GlobalStyle from "../globalStyle";

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Helmet>
        <meta name="description" content={config.siteDescription} />
        <html lang="en" />
      </Helmet>
      {children}
    </>
  );
};

export default Layout;
