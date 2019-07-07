import React from "react";
import Form from "../components/Form";

import Layout from "../components/layout";
import Container from "../components/container";
import SEO from "../components/seo";

import { responsiveTitle1 } from "../components/typography.module.css";

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <Container>
      <div className="contact-wrapper">
        <h1 className={responsiveTitle1}>Contact</h1>
        <div className="contact-form-container">
          <Form />
        </div>
      </div>
    </Container>
  </Layout>
);

export default ContactPage;
