require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Michal Slepko - Software Developer, Content creator, Streamer`,
    description: `Hello there. My name is Michal and I'm a Software Developer. Recently I've started creating content and streaming on Twitch.`,
    author: `@michal_codes`,
    siteUrl: `https://michalslepko.dev/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-postcss",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/content/`,
      },
    },
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
        ],
      },
    },
    {
    resolve: "gatsby-plugin-sitemap",
    options: {
      query: `
      {
        site {
          siteMetadata {
            siteUrl
          }
        }
        allMdx(
          sort: { frontmatter: { published: DESC } }
          limit: 1000
        ) {
          nodes {
            id
            fields {
              slug
            }
            frontmatter {
              title
              datetime: published
              published(formatString: "DD MMMM YYYY")
            }
            internal {
              contentFilePath
            }
          }
        }
      }
    `,
    resolveSiteUrl: ({ site: { siteMetadata: { siteUrl } } }) => siteUrl,
    resolvePages: ({ allMdx: { nodes: snippets } }) => {

      const posts = snippets.map(snippet => {
        return {
          path: snippet.fields.slug,
          lastmod: snippet.frontmatter.published,
        }
      })
      const staticPages = ['/', '/links/', '/uses/', '/snippets/', '/contact/']
      const pages = staticPages.map(page => {
        return {
          path: page,
          lastmod: posts[0].lastmod,
        }
      })
      return [...posts, ...pages]
    },
    serialize: ({ path, lastmod}) => {
      return {
        url: path,
        lastmod,
      }
    },
  },
  },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}