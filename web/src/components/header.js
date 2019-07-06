import { Link } from "gatsby";
import React from "react";
import Icon from "./icon";
import { cn } from "../lib/helpers";

import styles from "./header.module.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      navStyle: `${styles.nav} ${styles.navHide}`
    };
  }

  handleHamburger = () => {
    if (this.state.navStyle === `${styles.nav} ${styles.navShow}`) {
      setTimeout(() => {
        this.setState(() => ({
          navStyle: `${styles.nav} ${styles.navFade}`
        }));
      }, 50);
      setTimeout(() => {
        this.setState(() => ({
          navStyle: `${styles.nav} ${styles.navHide}`
        }));
      }, 400);
    } else {
      this.setState(() => ({
        navStyle: `${styles.nav} ${styles.navShow}`
      }));
    }
  };

  render() {
    if (typeof window === "undefined") {
      global.window = {};
    }

    return (
      <header className={styles.header}>
        <div className={styles.header__innerBlock}>
          <div className={styles.branding}>
            <Link to="/">Tony Heimark</Link>
          </div>
          <div
            onClick={this.handleHamburger}
            className={
              this.state.navStyle === `${styles.nav} ${styles.navShow}`
                ? `${styles.change} ${styles.hamburger}`
                : `${styles.hamburger}`
            }
          >
            <div className={styles.bar1} />
            <div className={styles.bar2} />
            <div className={styles.bar3} />
          </div>
          <nav
            className={this.state.navStyle}
            onClick={window.innerWidth < 768 ? this.handleHamburger : null}
          >
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
                <Link
                  className={styles.nav_link}
                  activeClassName={styles.navItemActive}
                  to="/about/"
                >
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
  }
}
