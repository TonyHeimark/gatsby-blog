import React from "react";

import Layout from "../components/layout";
import Container from "../components/container";
import SEO from "../components/seo";

import { responsiveTitle1 } from "../components/typography.module.css";

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <Container>
      <h1 className={responsiveTitle1}>About</h1>
      <p>About this blog</p>
    </Container>
  </Layout>
);

export default AboutPage;
