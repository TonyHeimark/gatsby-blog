import { Link } from "gatsby";
import React from "react";
import { buildImageObj, cn } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";

import styles from "./blog-post-preview.module.css";
import { responsiveTitle3 } from "./typography.module.css";

const ProjectPreview = ({ mainImage, slug, title, isInList }) => {
  return (
    <Link className={isInList ? styles.inList : styles.inGrid} to={slug.current}>
      <div className={styles.leadMediaThumb}>
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
      <div className={styles.text}>
        <h3 className={cn(responsiveTitle3, styles.title)}>{title}</h3>
      </div>
    </Link>
  );
};

export default ProjectPreview;
