import { Link } from "gatsby";
import React from "react";
import BlogPostPreview from "./blog-post-preview";

import Fade from "react-reveal/Fade";

const BlogPostPreviewGrid = props => {
  return (
    <div className="preview-list">
      {props.title && <h2 className="preview-list__headline">{props.title}</h2>}
      <ul className="preview-list__grid">
        {props.nodes &&
          props.nodes.map(node => (
            <li key={node.id}>
              <Fade up>
                <BlogPostPreview {...node} isInList />
              </Fade>
            </li>
          ))}
      </ul>
      {props.browseMoreHref && props.nodes && props.nodes.length > 3 && (
        <div className="preview-list__browse-more-nav">
          <Link to={props.browseMoreHref}>Browse more</Link>
        </div>
      )}
    </div>
  );
};

BlogPostPreviewGrid.defaultProps = {
  title: "",
  nodes: [],
  browseMoreHref: ""
};

export default BlogPostPreviewGrid;
