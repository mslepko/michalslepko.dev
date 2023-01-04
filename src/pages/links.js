import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import MyLinks from "../components/myLinks"

const LinksPage = () => (
  <Layout>
    <div className="container mx-auto p-8 pb-16 text-center">
      <h1 className="text-2xl sm:text-3xl font-bold text-mint tracking-tight dark:text-slate-200 pt-10">
        Affiliate links
      </h1>
      <MyLinks />
    </div>
  </Layout>
)

export default LinksPage

export const Head = () => <SEO title="Links" />
