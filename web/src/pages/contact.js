import React from "react";

import Form from "../components/Form";
import Layout from "../components/layout";
import Container from "../components/container";
import SEO from "../components/seo";

import { responsiveTitle1 } from "../components/typography.module.css";
import gitHub from "../assets/github-square-brands.svg";
import linkedIn from "../assets/linkedin-brands.svg";

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <Container>
      <div className="contact-wrapper">
        <h1 className={responsiveTitle1}>Contact</h1>
        <a href="https://github.com/TonyHeimark" target="_blank">
          <img className="contact-icon" src={gitHub} alt="github-icon" />
        </a>
        <a href="https://www.linkedin.com/in/tony-j-heimark/" target="_blank">
          <img className="contact-icon" src={linkedIn} alt="linkedin-icon" />
        </a>
        <div className="contact-form-container">
          <Form />
        </div>
      </div>
    </Container>
  </Layout>
);

export default ContactPage;
