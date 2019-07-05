import React from "react";

import introStyles from "./Intro.module.css";
import { responsiveTitle1 } from "../components/typography.module.css";

const Intro = () => (
  <div className={introStyles.intro}>
    <div className={introStyles.container}>
      <h1 className={responsiveTitle1}>Hello!</h1>
      <span>
        I help businesses attract more customers and increase sales by making kick-ass websites!
      </span>
    </div>
  </div>
);

export default Intro;
