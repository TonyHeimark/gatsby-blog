import { Link } from "gatsby";
import React from "react";
import BlogPostPreview from "./blog-post-preview";

const BlogPostPreviewGrid = props => {
  return (
    <div className="preview-grid">
      {props.title && <h2 className="preview-grid__headline">{props.title}</h2>}
      <ul className="preview-grid__grid">
        {props.nodes &&
          props.nodes.map(node => (
            <li key={node.id}>
              <BlogPostPreview {...node} />
            </li>
          ))}
      </ul>
      {props.browseMoreHref && (
        <div className="preview-grid__browse-more-nav">
          <Link to={props.browseMoreHref}>Les mer</Link>
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
