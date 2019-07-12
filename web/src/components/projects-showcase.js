import React from "react";

import Project from "./project";
import styles from "./Projects-showcase.module.css";
import Fade from "react-reveal/Fade";

const ProjectsShowcase = () => (
  <div className={styles.projects}>
    <h2 className={styles.headline}>Some of my projects</h2>
    <div className={styles.projectsContainer}>
      <Fade up>
        <Project
          title="SpaceX Microsite"
          excerpt="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, "
          image={require("../assets/undraw_code_typing_7jnv.svg")}
          link="/about"
        />
      </Fade>
      <Fade up>
        <Project
          title="WorkFlow Project"
          excerpt="It isa long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, "
          image={require("../assets/undraw_code_typing_7jnv.svg")}
          link="/contact"
        />
      </Fade>
      <Fade up>
        <Project
          title="SaraEllu Fitness"
          excerpt="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, "
          image={require("../assets/undraw_code_typing_7jnv.svg")}
          link="/archive"
        />
      </Fade>
    </div>
  </div>
);

export default ProjectsShowcase;
