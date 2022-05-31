import * as React from "react"
import IndexLayout from "../components/IndexLayout"
import Seo from "../components/seo"
import Hero from "../components/hero"

const IndexPage = () => (
  <IndexLayout>
    <Seo title="Home" />
    <div className="h-screen w-screen">
      <Hero />
    </div>
  </IndexLayout>
)

export default IndexPage
