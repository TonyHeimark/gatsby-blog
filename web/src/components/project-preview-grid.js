import React from "react";
import ProjectPreview from "./project-preview";
import Fade from "react-reveal/Fade";

import styles from "./blog-post-preview-grid.module.css";

const ProjectPreviewGrid = props => {
  return (
    <div className={styles.root}>
      {props.title && <h2 className={styles.headline}>{props.title}</h2>}
      <ul className={styles.grid}>
        {props.nodes &&
          props.nodes.map(node => (
            <Fade key={node.node.id} up>
              <li key={node.node.id}>
                <ProjectPreview {...node.node} />
              </li>
            </Fade>
          ))}
      </ul>
    </div>
  );
};

export default ProjectPreviewGrid;
