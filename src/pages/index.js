import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <div
      className="block lg:hidden"
    >
    </div>
  </Layout>
)

export default IndexPage
