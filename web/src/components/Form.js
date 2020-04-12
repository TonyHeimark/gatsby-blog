import React from "react";

import "./form.css";

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const Form = ({
  handleChange,
  handleSubmit,
  errorState,
  formFields,
  activeField,
  setActiveField
}) => {
  return (
    <form name="contact" onSubmit={handleSubmit}>
      <input type="hidden" name="form-name" value="contact" autoComplete="false" />
      <p>
        <label className="form-label-name">
          Your Name:{" "}
          <input
            onChange={handleChange}
            onFocus={e => {
              setActiveField({ ...activeField, [e.target.name]: true });
            }}
            onBlur={e => {
              setActiveField({ ...activeField, [e.target.name]: false });
            }}
            className={`${
              activeField.name || formFields.name ? "Active" : "Inactive"
            } ${errorState.name && "error"}`}
            type="text"
            name="name"
            value={formFields.name}
            autoComplete="off"
          />
        </label>
      </p>
      <p>
        <label className="form-label">
          Your Email:{" "}
          <input
            onChange={handleChange}
            onFocus={e => {
              setActiveField({ ...activeField, [e.target.name]: true });
            }}
            onBlur={e => {
              setActiveField({ ...activeField, [e.target.name]: false });
            }}
            className={`${
              activeField.email || formFields.email ? "Active" : "Inactive"
            } ${errorState.email && "error"}`}
            type="email"
            name="email"
            value={formFields.email}
            autoComplete="off"
          />
        </label>
      </p>
      <p>
        <label className="form-label-message">
          Message:{" "}
          <textarea
            onChange={handleChange}
            onFocus={e => {
              setActiveField({ ...activeField, [e.target.name]: true });
            }}
            onBlur={e => {
              setActiveField({ ...activeField, [e.target.name]: false });
            }}
            className={`${
              activeField.message || formFields.message ? "ActiveField" : "Inactive"
            } ${errorState.message && "error"}`}
            name="message"
            value={formFields.message}
            autoComplete="off"
          />
        </label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  );
};

export default Form;
