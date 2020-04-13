import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="page-404">
      <h1 className="page-404__not-found">NOT FOUND</h1>
      <p className="page-404__not-found">
        You just hit a route that doesn&#39;t exist... the sadness.
      </p>
    </div>
  </Layout>
);

export default NotFoundPage;
