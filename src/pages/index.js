import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"
import Socials from "../components/socials"

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
