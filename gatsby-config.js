
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "title",
    titleTemplate: "%s | Misty Ridge Retreat B&B",
    description: "description",
    url: "https://www.mistyridgeretreatbandb.com", 
    siteUrl: "https://www.mistyridgeretreatbandb.com",
    image: "/images/logo.svg",
    twitterUsername: "",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID,
        accessToken: process.env.GATSBY_DELIVERY_API_TOKEN,
        // spaceId: `0xc4vgunlwkq`,
        // accessToken: 'iFnyxaMlfd0pSbJtHlavtc85Lz7yBnAUWNyVgBujRYA',
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        sitemap: `https://www.mistyridgeretreatbandb.com/sitemap/sitemap-index.xml`,
        policy: [
          {
            userAgent: "*",
            allow: ["/"],
            disallow: [],
          }
        ],
      }
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-K6BL7RK5",
        includeInDevelopment: false,
      },
    },
  ],
};
