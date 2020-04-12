import React, { useState } from "react";
import Form from "../components/Form";
import Layout from "../components/layout";
import Container from "../components/container";
import SEO from "../components/seo";

import githubIcon from "../assets/github-square-brands.svg";
import linkedIn from "../assets/linkedin-brands.svg";

import { responsiveTitle1 } from "../components/typography.module.css";

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const ContactPage = () => {
  const [activeField, setActiveField] = useState({
    name: false,
    email: false,
    message: false
  });
  const [errorState, setErrorState] = useState({});
  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = e => {
    e.preventDefault();
    let errors = {};
    const emailVal = RegExp("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$");

    if (formFields.name === "") {
      errors = { ...errors, name: "You need to fill out this field" };
    }
    if (!emailVal.test(formFields.email) || formFields.email === "") {
      errors = { ...errors, email: "Please put in a valid email" };
    }
    if (formFields.message === "") {
      errors = { ...errors, message: "You need to fill out this field" };
    }

    const errorCheck = Object.keys(errors);
    if (errorCheck.length !== 0) {
      e.preventDefault();
      setErrorState(errors);
      return;
    } else if (errorCheck.length === 0) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...formFields })
      })
        .then(() => alert("Success!"))
        .catch(error => alert(error));
      e.preventDefault();
    }
  };

  const handleChange = e => {
    setFormFields({ ...formFields, [e.target.name]: e.target.value });
  };

  return (
    <Layout>
      <SEO title="Contact" />
      <Container>
        <div className="contact-wrapper">
          <h1 className={responsiveTitle1}>Contact</h1>
          <a
            className="icon-link"
            href="https://github.com/TonyHeimark"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img className="contact-icon" src={githubIcon} alt="github social link" />
          </a>
          <a
            className="icon-link"
            href="https://www.linkedin.com/in/tony-j-heimark/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img className="contact-icon" src={linkedIn} alt="linkedin-icon" />
          </a>
          <div className="contact-form-container">
            <Form
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              errorState={errorState}
              formFields={formFields}
              activeField={activeField}
              setActiveField={setActiveField}
            />
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default ContactPage;
