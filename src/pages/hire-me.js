import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout/Layout"
import Seo from "../components/seo"

const UsesPage = () => (
  <Layout>
    <div className="container mx-auto p-8 pb-16 text-center">
      <h1 className="text-2xl sm:text-3xl font-bold text-darkest dark:text-lightest tracking-tight pt-10 text-center pb-16">
        Hire Me
      </h1>
    </div>
  </Layout>
)

export default HireMePage

export const Head = () => <Seo title="Hire Me" pathname="/hire-me" />
