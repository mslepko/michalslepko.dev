import * as React from "react"
import Layout from "../components/layout/Layout"
import Seo from "../components/seo"
import PostListLayout from "../components/snippets/PostListLayout"

const SnippetsPage = () => {
  return (
    <Layout>
      <div className="container mx-auto p-8 pb-16">
        <h1 className="text-center text-2xl sm:text-3xl font-bold text-darkest dark:text-lightest tracking-tight pt-10">
          My Snippets
        </h1>
        <PostListLayout/>
      </div>
    </Layout>
  )
}

export default SnippetsPage

export const Head = () => <Seo title="My Snippets" pathname="/snippets"/>
