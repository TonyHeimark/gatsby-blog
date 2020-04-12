import React from "react";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import PortableText from "./portableText";
import Container from "./container";

import styles from "./blog-post.module.css";

const Project = ({ _rawBody, title, mainImage, tech, projectUrl, githubUrl }) => {
  return (
    <article className={styles.root}>
      {mainImage && mainImage.asset && (
        <div className={styles.mainImage}>
          <img
            src={imageUrlFor(buildImageObj(mainImage))
              .width(1200)
              .height(Math.floor((9 / 16) * 1200))
              .fit("crop")
              .auto("format")
              .url()}
            alt={mainImage.alt}
          />
        </div>
      )}
      <Container>
        <div className={styles.grid}>
          <div className={styles.mainContent}>
            <h1 className={styles.title}>{title}</h1>
            {_rawBody && <PortableText blocks={_rawBody} />}
          </div>
          <aside className={styles.metaContent}>
            {tech && tech.length > 0 && (
              <div className={styles.categories}>
                <h3 className={styles.categoriesHeadline}>Technology</h3>
                <ul>
                  {tech.map(i => (
                    <li key={i._id}>{i.title}</li>
                  ))}
                </ul>
              </div>
            )}
            <div>
              {projectUrl && (
                <a
                  className={styles.introButton}
                  target="_blank"
                  rel="noreferrer noopener"
                  href={projectUrl}
                >
                  Go to project
                </a>
              )}
              {githubUrl && (
                <a
                  className={styles.introButton}
                  target="_blank"
                  rel="noreferrer noopener"
                  href={githubUrl}
                >
                  Go to Github
                </a>
              )}
            </div>
          </aside>
        </div>
      </Container>
    </article>
  );
};

export default Project;
