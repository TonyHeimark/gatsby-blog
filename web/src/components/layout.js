import React from "react";
import Header from "./header";
import { Link } from "gatsby";
import CookieConsent from "react-cookie-consent";

const Layout = ({ children, onHideNav, onShowNav, showNav, siteTitle }) => (
  <>
    <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
    <div className="content">{children}</div>
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__siteInfo">&copy; {new Date().getFullYear()} Tony Heimark</div>
        <Link className="footer__link" to="/privacy-policy/">
          Privacy Policy
        </Link>
      </div>
    </footer>
    <CookieConsent
      location="bottom"
      buttonText="I Accept"
      cookieName="CookieConsent"
      style={{ background: "#ea8877", color: "#111", fontSize: ".9em" }}
      buttonClasses="footer__cookie-button"
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
