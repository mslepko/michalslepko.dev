import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import MyLinks from "../components/myLinks"


const LinksPage = () => (
  <Layout>
    <Seo title="Uses" />

    <div className="container mx-auto p-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight dark:text-slate-200 pt-10">Affiliate links</h1>

      <MyLinks />

    </div>
  </Layout>
)

export default LinksPage
