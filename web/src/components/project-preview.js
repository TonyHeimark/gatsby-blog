import { Link } from "gatsby";
import React from "react";
import { buildImageObj, cn } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";

const ProjectPreview = ({ mainImage, slug, title, isInList }) => {
  return (
    <Link className={isInList ? "preview__in-list" : "preview__in-grid"} to={slug.current}>
      <div className="preview__lead-media-thumb">
        {mainImage && mainImage.asset && (
          <img
            src={imageUrlFor(buildImageObj(mainImage))
              .width(600)
              .height(Math.floor((9 / 16) * 600))
              .auto("format")
              .url()}
            alt={mainImage.alt}
          />
        )}
      </div>
      <div className="preview__text">
        <h3 className="preview__title">{title}</h3>
      </div>
    </Link>
  );
};

export default ProjectPreview;
