import { graphql, StaticQuery } from "gatsby";
import React, { useState } from "react";
import Layout from "../components/layout";

import "../styles/index.scss";

const query = graphql`
  query SiteTitleQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
    }
  }
`;

const LayoutContainer = props => {
  const [showNav, setShowNav] = useState(false);
  const handleShowNav = () => {
    setShowNav(true);
  };
  const handleHideNav = () => {
    setShowNav(false);
  };
  return (
    <StaticQuery
      query={query}
      render={data => {
        return (
          <Layout
            {...props}
            showNav={showNav}
            siteTitle={data.site.title}
            onHideNav={handleHideNav}
            onShowNav={handleShowNav}
          />
        );
      }}
    />
  );
};

export default LayoutContainer;
