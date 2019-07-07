import React from "react";

import Layout from "../components/layout";
import Container from "../components/container";
import SEO from "../components/seo";

import { responsiveTitle1 } from "../components/typography.module.css";

const AboutPage = () => (
  <Layout>
    <SEO title="Success" />
    <Container>
      <h1 className={responsiveTitle1}>Success!</h1>
      <p>Thank you for your message, I will get back to you as soon as possible!</p>
    </Container>
  </Layout>
);

export default AboutPage;
