import { Link } from "gatsby";
import React, { useState } from "react";
import Icon from "./icon";
import { cn } from "../lib/helpers";

import Logo from "../assets/logo.svg";

import styles from "./header.module.css";

const Header = props => {
  const [navStyle, setNavStyle] = useState(`${styles.nav} ${styles.navHide}`);

  const handleHamburger = () => {
    if (navStyle === `${styles.nav} ${styles.navShow}`) {
      setTimeout(() => {
        setNavStyle(`${styles.nav} ${styles.navFade}`);
      }, 50);
      setTimeout(() => {
        setNavStyle(`${styles.nav} ${styles.navHide}`);
      }, 400);
    } else {
      setNavStyle(`${styles.nav} ${styles.navShow}`);
    }
  };

  if (typeof window === "undefined") {
    global.window = {};
  }

  return (
    <header className={styles.header}>
      <div className={styles.header__innerBlock}>
        <div className={styles.branding}>
          <Link to="/">
            <img style={{ width: "70px", height: "70px" }} src={Logo} alt="logo" />
          </Link>
        </div>
        <div
          onClick={handleHamburger}
          className={
            navStyle === `${styles.nav} ${styles.navShow}`
              ? `${styles.change} ${styles.hamburger}`
              : `${styles.hamburger}`
          }
        >
          <div className={styles.bar1} />
          <div className={styles.bar2} />
          <div className={styles.bar3} />
        </div>
        <nav className={navStyle} onClick={window.innerWidth < 768 ? handleHamburger : null}>
          <ul>
            <li>
              <Link className={styles.nav_link} activeClassName={styles.navItemActive} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link
                className={styles.nav_link}
                activeClassName={styles.navItemActive}
                to="/archive/"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link className={styles.nav_link} activeClassName={styles.navItemActive} to="/about/">
                About
              </Link>
            </li>
            <li>
              <Link
                className={styles.nav_link}
                activeClassName={styles.navItemActive}
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
