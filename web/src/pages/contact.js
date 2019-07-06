import React from "react";

import Layout from "../components/layout";
import Container from "../components/container";
import SEO from "../components/seo";

import { responsiveTitle1 } from "../components/typography.module.css";

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <Container>
      <h1 className={responsiveTitle1}>Contact</h1>
      <p>Contact me</p>
    </Container>
  </Layout>
);

export default ContactPage;
