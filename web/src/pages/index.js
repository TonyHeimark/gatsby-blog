import React from "react";
import { graphql } from "gatsby";
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture
} from "../lib/helpers";
import BlogPostPreviewList from "../components/blog-post-preview-list";
import ProjectPreviewGrid from "../components/project-preview-grid";
import Container from "../components/container";
import SEO from "../components/seo";
import Layout from "../containers/layout";
import Intro from "../components/Intro";

import "../styles/index.scss";
//import ProjectsShowcase from "../components/projects-showcase";

export const query = graphql`
  fragment SanityImage on SanityMainImage {
    crop {
      _key
      _type
      top
      bottom
      left
      right
    }
    hotspot {
      _key
      _type
      x
      y
      height
      width
    }
    asset {
      _id
    }
  }

  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
    posts: allSanityPost(
      limit: 6
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
    ) {
      edges {
        node {
          id
          publishedAt
          mainImage {
            ...SanityImage
            alt
          }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
    projects: allSanityProject {
      edges {
        node {
          id
          mainImage {
            ...SanityImage
            alt
          }
          title
          slug {
            current
          }
          tech {
            id
            title
          }
          projectUrl
          githubUrl
        }
      }
    }
  }
`;

const IndexPage = ({ data }) => {
  const site = (data || {}).site;
  const postNodes = (data || {}).posts
    ? mapEdgesToNodes(data.posts)
        .filter(filterOutDocsWithoutSlugs)
        .filter(filterOutDocsPublishedInTheFuture)
    : [];

  const projectNodes = (data || {}).projects.edges;

  return (
    <Layout>
      <SEO title={site.title} description={site.description} keywords={site.keywords} />
      <Intro />
      <Container>
        {projectNodes && (
          <ProjectPreviewGrid title="Projects" nodes={projectNodes} browseMoreHref="/projects/" />
        )}
        {postNodes && (
          <BlogPostPreviewList
            title="Latest blog posts"
            nodes={postNodes}
            browseMoreHref="/archive/"
          />
        )}
      </Container>
    </Layout>
  );
};

export default IndexPage;
