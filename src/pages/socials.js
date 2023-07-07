import * as React from "react"
import Layout from "../components/layout/Layout"
import Seo from "../components/seo"
import Socials from "../components/layout/Socials"

const SocialsPage = () => (
  <Layout>
    <div className="container mx-auto p-8 pb-16 text-center h-screen">
      <p>Hi! I'm Michal, senior web developer creating tech content.</p>
      <p>Here are links to my social profiles.</p>
      <Socials fullPage={true} />
    </div>
  </Layout>
)

export default SocialsPage

export const Head = () => <Seo title="Socials" pathname="/socials" />
