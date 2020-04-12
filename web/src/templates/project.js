import React from "react";
import { graphql } from "gatsby";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import Project from "../components/project";
import SEO from "../components/seo";
import Layout from "../containers/layout";

export const query = graphql`
  query ProjectTemplateQuery($id: String!) {
    project: sanityProject(id: { eq: $id }) {
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
        _id
        title
      }
      projectUrl
      githubUrl
      _rawBody(resolveReferences: { maxDepth: 5 })
    }
  }
`;

const ProjectTemplate = props => {
  const { data, errors } = props;
  const project = data && data.project;
  return (
    <Layout>
      {errors && <SEO title="GraphQL Error" />}
      {project && (
        <SEO
          title={project.title || "Untitled"}
          description={project.title}
          image={project.mainImage}
        />
      )}

      {project && <Project {...project} />}
    </Layout>
  );
};

export default ProjectTemplate;
