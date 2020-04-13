import React from "react";
import { Link } from "gatsby";
import Fade from "react-reveal/Fade";

const Intro = () => (
  <div className="intro">
    <div className="intro__container">
      <div className="intro__text-container">
        <Fade left>
          <h1 className="intro__title">Hello!</h1>
          <p className="intro__paragraph">
            Welcome to my portfolio and blog page, where I showcase my projects and share my
            experience learning frontend development for the past two years.
          </p>
          <Link className="intro__button" to="/archive">
            Check it!
          </Link>
        </Fade>
      </div>
    </div>
  </div>
);

export default Intro;
