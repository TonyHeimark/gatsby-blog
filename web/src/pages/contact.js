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
      <h1 className={responsiveTitle1}>Contact</h1>
      <div className="contact-text">
        <h2>Contact Me</h2>
        <p>Phone: +47 41788033</p>
        <p>
          Email: <a href="mailto:tjh@hotmail.com">Tjh@hotmail.com</a>
        </p>
        <a href="https://www.linkedin.com/in/tony-j-heimark/">
          <i className="fab fa-linkedin" />
        </a>
        <a href="https://github.com/TonyHeimark">
          <i className="fab fa-github-square" />
        </a>
      </div>
      <div className="contact-form-container">
        <Form />
      </div>
    </Container>
  </Layout>
);

export default ContactPage;
