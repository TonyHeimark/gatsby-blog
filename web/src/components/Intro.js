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
          <p className={introStyles.introP}>
            Welcome to my portfolio and blog page, where I showcase my projects and share my
            experience learning frontend development for the past two years.
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
