import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout/Layout"
import Seo from "../components/seo"
import PostListLayout from "../components/PostListLayout"

const SnippetsPage = () => {
  const Posts = useStaticQuery(graphql`
    {
      allMdx(sort: { frontmatter: { published: DESC } }) {
        nodes {
          id
          fields {
            slug
          }
          excerpt
          frontmatter {
            title
            datetime: published
            published(formatString: "DD MMMM YYYY")
            categories
            featuredImage {
              childImageSharp {
                gatsbyImageData(
                  width: 300
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <div className="container mx-auto p-8 pb-16">
        <h1 className="text-center text-2xl sm:text-3xl font-bold text-darkest dark:text-lightest tracking-tight pt-10">
          My Snippets
        </h1>
        <PostListLayout
          data={Posts.allMdx.nodes}
          key={Posts.allMdx.nodes.length}
        />
      </div>
    </Layout>
  )
}

export default SnippetsPage

export const Head = () => <Seo title="My Snippets" pathname="/snippets" />
