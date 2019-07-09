import React from "react";

import introStyles from "./Intro.module.css";
import Fade from "react-reveal/Fade";

const Intro = () => (
  <div className={introStyles.intro}>
    <div className={introStyles.container}>
      <div className={introStyles.textContainer}>
        <Fade left>
          <h1 className={introStyles.introTitle}>Hello!</h1>
          <p className={introStyles.introParagraph}>
            I help businesses attract more customers and increase sales by making kick-ass websites!
          </p>
        </Fade>
      </div>
    </div>
  </div>
);

export default Intro;
