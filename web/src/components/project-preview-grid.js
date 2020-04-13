import React from "react";
import ProjectPreview from "./project-preview";
import Fade from "react-reveal/Fade";

const ProjectPreviewGrid = props => {
  return (
    <div className="preview-grid">
      {props.title && <h2 className="preview-grid__headline">{props.title}</h2>}
      <ul className="preview-grid__grid">
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
