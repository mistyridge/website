import { GraphQLClient } from "graphql-request"

export const graphQLClient = new GraphQLClient(
//   process.env.CONTENTFUL_API_URL,
  'https://graphql.contentful.com/content/v1/spaces/0xc4vgunlwkq/environments/master',
  {
    headers: {
      Authorization: "Bearer RpCkxfncwGm9EmEYohUv7XbS1rUv4P4SBSmpGIsqwxY",
    },
  }
)
