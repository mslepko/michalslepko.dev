import * as React from "react"
import Layout from "../components/layout/Layout"
import Seo from "../components/seo"
import Hero from "../components/hero"
import About from "../components/sections/About"

const IndexPage = () => (
  <Layout>
    <div className="h-screen w-screen">
      <Hero />
      <About />
      {/* <Skills />
      <Work />
      <Contact /> */}
    </div>
  </Layout>
)

export default IndexPage

export const Head = () => <Seo title="Home" />
