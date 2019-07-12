import React from "react";
import { Link } from "gatsby";

import styles from "./Project.module.css";
import { responsiveTitle3 } from "./typography.module.css";

const Project = props => (
  <Link className={styles.link} to={props.link}>
    <div className={styles.projectContainer}>
      <div className={styles.imgContainer}>
        <img className={styles.image} src={props.image} alt={props.imageAlt} />
      </div>
      <div className={styles.textContainer}>
        <h3 className={`${responsiveTitle3} ${styles.title}`}>{props.title}</h3>
        <div className={styles.excerptContainer}>
          <p className={styles.excerpt}>{props.excerpt}</p>
        </div>
      </div>
    </div>
  </Link>
);

export default Project;
