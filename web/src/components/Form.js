import React from "react";

const Form = ({
  handleChange,
  handleSubmit,
  errorState,
  formFields,
  activeField,
  setActiveField
}) => {
  return (
    <form className="form" name="contact" onSubmit={handleSubmit}>
      <input type="hidden" name="form-name" value="contact" autoComplete="false" />
      <p>
        <label className="form__label form__label--space">
          Your Name:{" "}
          <input
            onChange={handleChange}
            onFocus={e => {
              setActiveField({ ...activeField, [e.target.name]: true });
            }}
            onBlur={e => {
              setActiveField({ ...activeField, [e.target.name]: false });
            }}
            className={`form__input ${
              activeField.name || formFields.name ? "form__input--active" : "form__input--inactive"
            } ${errorState.name && "form__input--error"}`}
            type="text"
            name="name"
            value={formFields.name}
            autoComplete="off"
          />
        </label>
      </p>
      <p>
        <label className="form__label">
          Your Email:{" "}
          <input
            onChange={handleChange}
            onFocus={e => {
              setActiveField({ ...activeField, [e.target.name]: true });
            }}
            onBlur={e => {
              setActiveField({ ...activeField, [e.target.name]: false });
            }}
            className={`form__input ${
              activeField.email || formFields.email
                ? "form__input--active"
                : "form__input--inactive"
            } ${errorState.email && "form__input--error"}`}
            type="email"
            name="email"
            value={formFields.email}
            autoComplete="off"
          />
        </label>
      </p>
      <p>
        <label className="form__label">
          Message:{" "}
          <textarea
            onChange={handleChange}
            onFocus={e => {
              setActiveField({ ...activeField, [e.target.name]: true });
            }}
            onBlur={e => {
              setActiveField({ ...activeField, [e.target.name]: false });
            }}
            className={`form__textarea ${
              activeField.message || formFields.message
                ? "form__textarea--active"
                : "form__textarea--inactive"
            } ${errorState.message && "form__textarea--error"}`}
            name="message"
            value={formFields.message}
            autoComplete="off"
          />
        </label>
      </p>
      <p>
        <button className="form__button" type="submit">
          Send
        </button>
      </p>
    </form>
  );
};

export default Form;
