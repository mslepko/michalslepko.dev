import * as React from "react"
//import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"
import MyLinks from "../components/myLinks"


const LinksPage = () => (
  <Layout>
    <Seo title="Uses" />

    <Hero />

    <div className="container mx-auto p-8">
      <h1 class="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight dark:text-slate-200 pt-10">Affiliate links</h1>

      <MyLinks />

    </div>
  </Layout>
)

export default LinksPage
