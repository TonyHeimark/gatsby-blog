import React from "react";
import { Link } from "gatsby";

import introStyles from "./Intro.module.css";
import Fade from "react-reveal/Fade";

const Intro = () => (
  <div className={introStyles.intro}>
    <div className={introStyles.container}>
      <div className={introStyles.textContainer}>
        <Fade left>
          <h1 className={introStyles.introTitle}>Hello!</h1>
          <p className={introStyles.introParagraph}>
            Welcome to my blog, where I share my journey from being an Audi mechanic to a front-end
            developer, what I've learned during the past year and what I'm currently learning.
          </p>
          <Link className={introStyles.introButton} to="/archive">
            Check it!
          </Link>
        </Fade>
      </div>
    </div>
  </div>
);

export default Intro;
