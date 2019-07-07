import React, { useState } from "react";

import "./form.css";

export default props => {
  const [active, setActive] = useState(false);
  const [activeTwo, setActiveTwo] = useState(false);
  const [activeThree, setActiveThree] = useState(false);

  const toggleActive = () => {
    if (active === false) {
      setActive(true);
    }
  };

  const removeActive = e => {
    if (!e.target.value && active) {
      setActive(false);
    }
  };

  const toggleActiveTwo = () => {
    if (activeTwo === false) {
      setActiveTwo(true);
    }
  };

  const removeActiveTwo = e => {
    if (!e.target.value && activeTwo) {
      setActiveTwo(false);
    }
  };

  const toggleActiveThree = () => {
    if (activeThree === false) {
      setActiveThree(true);
    }
  };

  const removeActiveThree = e => {
    if (!e.target.value && activeThree) {
      setActiveThree(false);
    }
  };

  return (
    <form name="contact" method="post" autoComplete="off" data-netlify="true">
      <input type="hidden" name="form-name" value="contact" autoComplete="false" />
      <p>
        <label className="form-label-name">
          Your Name:{" "}
          <input
            onFocus={toggleActive}
            onBlur={removeActive}
            className={active ? "Active" : "Inactive"}
            type="text"
            name="name"
          />
        </label>
      </p>
      <p>
        <label className="form-label">
          Your Email:{" "}
          <input
            onFocus={toggleActiveTwo}
            onBlur={removeActiveTwo}
            className={activeTwo ? "Active" : "Inactive"}
            type="email"
            name="email"
          />
        </label>
      </p>
      <p>
        <label className="form-label-message">
          Message:{" "}
          <textarea
            onFocus={toggleActiveThree}
            onBlur={removeActiveThree}
            className={activeThree ? "ActiveField" : "Inactive"}
            name="message"
          />
        </label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  );
};
