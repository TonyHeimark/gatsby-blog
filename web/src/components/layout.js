import React from "react";
import Header from "./header";
import { Link } from "gatsby";
import CookieConsent from "react-cookie-consent";

import "../styles/layout.css";
import styles from "./layout.module.css";

const Layout = ({ children, onHideNav, onShowNav, showNav, siteTitle }) => (
  <>
    <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
    <div className={styles.content}>{children}</div>
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.siteInfo}>&copy; {new Date().getFullYear()} Tony Heimark</div>
        <Link className={styles.footerLink} to="/privacy-policy/">
          Privacy Policy
        </Link>
      </div>
    </footer>
    <CookieConsent
      location="bottom"
      buttonText="I Accept"
      cookieName="CookieConsent"
      style={{ background: "#ea8877", color: "#111", fontSize: ".9em" }}
      buttonClasses="btn-primary"
    >
      This website uses cookies to enhance the user experience. You can read more about cookies in
      our{" "}
      <Link style={{ color: "black" }} to="/privacy-policy/#cookies">
        Privacy Policy
      </Link>
    </CookieConsent>
  </>
);

export default Layout;
