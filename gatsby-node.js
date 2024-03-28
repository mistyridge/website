
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

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

    const slugsBlog = result.data.allContentfulBlog.edges.map(({ node }) => node.slug);
    const slugsEvents = result.data.allContentfulEvents.edges.map(({ node }) => node.slug);

    slugsBlog.forEach(slug => {
        createPage({
            path: `/blogs/${slug}`,
            component: path.resolve('./src/pages/blogs/contentful-blogs.js'),
            context: {
                slug: slug 
            }
        });
    });

    slugsEvents.forEach(slug => {
        createPage({
            path: `/events/${slug}`,
            component: path.resolve('./src/pages/events/contentful-events.js'),
            context: {
                slug: slug 
            }
        });
    });
};

