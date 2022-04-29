import * as React from "react"
//import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
//import Socials from "../components/socials"

import UsesLine from "../components/usesLine"

const UsesPage = () => (
  <Layout>
    <Seo title="Uses" />
    <div className="container mx-auto">
      <h1>Uses</h1>
      <StaticImage
        src="../images/mydesk.jpeg"
        alt="Michal.codes's setup"
        className="max-w-lg	block mx-auto"
      />

      <h2>My work setup</h2>
      <UsesLine type="workSetup" />

      <h2>Apps I use</h2>

      <h2>My streaming setup</h2>
      <UsesLine type="streamingSetup" />
    </div>

    <p class="text-small">* affiliated link</p>
  </Layout>
)

export default UsesPage
