import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import MyLinks from "../components/myLinks"


const LinksPage = () => (
  <Layout>
    <Seo title="Uses" />

    <div className="container mx-auto p-8 pb-16 text-center">
      <h1 className="text-2xl sm:text-3xl font-bold text-mint tracking-tight dark:text-slate-200 pt-10">Affiliate links</h1>
      <StaticImage
        src="../images/thecode.jpeg"
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="theCode JavaScript poster"
        className="max-w-lg	block mx-auto"
      />
      <MyLinks />

    </div>
  </Layout>
)

export default LinksPage
