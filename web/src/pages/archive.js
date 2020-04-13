import React from "react";
import { graphql } from "gatsby";
import { mapEdgesToNodes } from "../lib/helpers";
import BlogPostPreviewGrid from "../components/blog-post-preview-grid";
import Container from "../components/container";
import SEO from "../components/seo";
import Layout from "../containers/layout";

export const query = graphql`
  query ArchivePageQuery {
    posts: allSanityPost(limit: 12, sort: { fields: [publishedAt], order: DESC }) {
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
  }
`;

const ArchivePage = ({ data }) => {
  const postNodes = data && data.posts && mapEdgesToNodes(data.posts);

  return (
    <Layout>
      <SEO title="Archive" />
      <Container>
        <div className="archive-wrapper">
          <h1 className="archive-wrapper__title">Blog archive</h1>
          {postNodes && postNodes.length > 0 && <BlogPostPreviewGrid nodes={postNodes} />}
        </div>
      </Container>
    </Layout>
  );
};

export default ArchivePage;
