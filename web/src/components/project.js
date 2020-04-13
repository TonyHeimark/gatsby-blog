import React from "react";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import PortableText from "./portableText";
import Container from "./container";

const Project = ({ _rawBody, title, mainImage, tech, projectUrl, githubUrl }) => {
  return (
    <article className="article">
      {mainImage && mainImage.asset && (
        <div className="article__main-image">
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
        <div className="article__grid">
          <div className="article__main-content">
            <h1 className="article__title">{title}</h1>
            {_rawBody && <PortableText blocks={_rawBody} />}
          </div>
          <aside className="article__meta-content">
            {tech && tech.length > 0 && (
              <div className="article__categories">
                <h3 className="article__categories-headline">Technology</h3>
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
                  className="article__button"
                  target="_blank"
                  rel="noreferrer noopener"
                  href={projectUrl}
                >
                  Go to project
                </a>
              )}
              {githubUrl && (
                <a
                  className="article__button"
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
