import * as React from "react"
import Layout from "../components/layouts/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"

const IndexPage = () => (
  <Layout>
    <div className="h-screen w-screen">
      <Hero />
    </div>
  </Layout>
)

export default IndexPage

export const Head = () => <Seo title="Home" />
