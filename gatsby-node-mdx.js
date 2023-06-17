const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value: value,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Get all markdown blog posts sorted by date
  const result = await graphql(
    `
      {
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
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    )
    return
  }

  // Create blog posts pages.
  const posts = result.data.allMdx.nodes
  const postTemplate = path.resolve(`./src/components/snippets/BlogPost.js`)
  await Promise.all(
    posts.map(async (post, index) => {
      const id = post.id
      const previousPostId = index === 0 ? null : posts[index - 1].id
      const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id
      await createPage({
        path: post.fields.slug,
        component: `${postTemplate}?__contentFilePath=${post.internal.contentFilePath}`,
        context: {
          id,
          previousPostId,
          nextPostId,
        },
      })
    })
  )
}
