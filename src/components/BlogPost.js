import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import Layout from "../components/layout"
import BlogPostLayout from "../components/BlogPostLayout"

const BlogPost = ({ data, children }) => {
  const {
    id,
    frontmatter: { featuredImage, title, published },
  } = data.mdx

  return (
    <Layout>
      <Seo title={title} />
      <BlogPostLayout
        featuredImage={featuredImage}
        title={title}
        content={children}
        date={published}
        published={published}
        previous={data.previous}
        next={data.next}
        key={id}
      />
    </Layout>
  )
}

export default BlogPost

export const query = graphql`
  query BLOG_POST_BY_SLUG(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    mdx(id: { eq: $id }) {
      id
      fields {
        slug
      }
      frontmatter {
        datetime: published
        published(formatString: "DD MMMM YYYY")
        title
        featuredImage {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
    previous: mdx(id: { eq: $previousPostId }) {
      fields {slug}
      frontmatter {
        title
      }
    }
    next: mdx(id: { eq: $nextPostId }) {
      fields {slug}
      frontmatter {
        title
      }
    }
  }
`
