import { gql } from "@apollo/client"

export const getAllBlogs = () => ({
  query: gql`
    query ($preview: Boolean) {
      blogCollection(preview: $preview) {
        items {
          title
          slug
          thumbnail {
            url
          }
        }
      }
    }
  `,
})

export const getAllEvents = () => ({
  query: gql`
    query ($preview: Boolean) {
      eventsCollection(preview: $preview) {
        items {
          title
          slug
          thumbnail {
            url
          }
        }
      }
    }
  `,
})

export const getBlog = (slug) => {
  console.log('Slug:', slug); // Logging the slug here

  return {
    query: gql`
      query {
        blogCollection(where : {slug : "${slug}"}, limit: 2){
          items {
            title
            slug
            method {
              json
              links{
                assets{
                  block{
                    height
                    width
                    url
                    title
                    sys{
                      id
                    }
                  }
                }
              }
            }
            thumbnail {
              url
            }
            author
          }
        }
      }
    `,
  };
};

export const getEvent = (slug) => {
  console.log('Slug:', slug); // Logging the slug here

  return {
    query: gql`
      query {
        eventsCollection(where : {slug : "${slug}"}, limit: 2){
          items {
            title
            slug
            method {
              json
              links{
                assets{
                  block{
                    height
                    width
                    url
                    title
                    sys{
                      id
                    }
                  }
                }
              }
            }
            thumbnail {
              url
            }
            author
          }
        }
      }
    `,
  };
};
