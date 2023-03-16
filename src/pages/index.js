import * as React from "react"
import Layout from "../components/layout/Layout"
import Seo from "../components/seo"
import Hero from "../components/hero"
import About from "../components/sections/About"
import Skills from "../components/sections/Skills"
import Work from "../components/sections/Work"
import Contact from "../components/sections/Contact"

const IndexPage = () => (
  <Layout>
    <div className="w-full">
      <Hero />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  </Layout>
)

export default IndexPage

export const Head = () => <Seo title="Home" />
