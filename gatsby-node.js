const path = require('path');

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type ContentfulBlog implements Node {
      slug: String 
    }
    type ContentfulEvents implements Node {
      slug: String
    }
  `;
  createTypes(typeDefs);
};

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const result = await graphql(`
    query {
      allContentfulBlog {
        edges {
          node {
            slug
          }
        }
      }
      allContentfulEvents {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);
    
    if (result.errors) {
        throw result.errors;
    }

    const blogEdges = result?.data?.allContentfulBlog?.edges;
    const eventEdges = result?.data?.allContentfulEvents?.edges;

    blogEdges.forEach(({ node }) => {
        if (node.slug) {
            createPage({
                path: `/blogs/${node.slug}`,
                component: path.resolve('./src/pages/blogs/contentful-blogs.js'),
                context: {
                    slug: node.slug 
                }
            });
        }
    });

    eventEdges.forEach(({ node }) => {
        if (node.slug) {
            createPage({
                path: `/events/${node.slug}`,
                component: path.resolve('./src/pages/events/contentful-events.js'),
                context: {
                    slug: node.slug 
                }
            });
        }
    });
};
