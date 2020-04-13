import { Link } from "gatsby";
import React, { useState } from "react";

import Logo from "../assets/logo.svg";

const Header = props => {
  const [navStyle, setNavStyle] = useState(`header__nav header__nav--hide`);

  const handleHamburger = () => {
    if (navStyle === `header__nav header__nav--show`) {
      setTimeout(() => {
        setNavStyle(`header__nav header__nav--fade`);
      }, 50);
      setTimeout(() => {
        setNavStyle(`header__nav header__nav--hide`);
      }, 400);
    } else {
      setNavStyle(`header__nav header__nav--show`);
    }
  };

  if (typeof window === "undefined") {
    global.window = {};
  }

  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__branding">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        <div
          onClick={handleHamburger}
          className={
            navStyle === `header__nav header__nav--show`
              ? `header__hamburger header__hamburger--active`
              : `header__hamburger`
          }
        >
          <div className="header__bar header__bar--1" />
          <div className="header__bar header__bar--2" />
          <div className="header__bar header__bar--3" />
        </div>
        <nav className={navStyle} onClick={window.innerWidth < 768 ? handleHamburger : null}>
          <ul>
            <li>
              <Link className="header__nav-link" activeClassName="header__nav-link--active" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link
                className="header__nav-link"
                activeClassName="header__nav-link--active"
                to="/archive/"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                className="header__nav-link"
                activeClassName="header__nav-link--active"
                to="/about/"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="header__nav-link"
                activeClassName="header__nav-link--active"
                to="/contact/"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
