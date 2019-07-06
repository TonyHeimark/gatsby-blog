import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import "../styles/404.css";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="not-found-div">
      <h1 className="not-found">NOT FOUND</h1>
      <p className="not-found">You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </Layout>
);

export default NotFoundPage;
