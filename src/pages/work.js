import * as React from "react"
import Layout from "../components/layout/Layout"
import Seo from "../components/seo"
import Work from "../components/sections/Work"

const WorkPage = () => (
  <Layout>
    <div className="w-full">
      <Work />
    </div>
  </Layout>
)

export default WorkPage

export const Head = () => <Seo title="Work" pathname="/work" />
