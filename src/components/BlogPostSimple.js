import * as React from "react"
import Layout from "./layout"

const BlogPostSimple = ({ children }) => {
  console.log("children", children)
  return (
    <Layout>
      <div className="container mx-auto p-8 pb-16 text-left text-mint">
        <div>{children}</div>
      </div>
    </Layout>
  )
}

export default BlogPostSimple
