import * as React from "react"
import IndexLayout from "../components/IndexLayout"
import SEO from "../components/seo"
import Hero from "../components/hero"

const IndexPage = () => (
  <IndexLayout>
    <div className="h-screen w-screen">
      <Hero />
    </div>
  </IndexLayout>
)

export default IndexPage

export const Head = () => <SEO title="Home" />
