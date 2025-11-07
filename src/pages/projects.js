import * as React from "react"
import Layout from "../components/layout/Layout"
import Seo from "../components/seo"
import Work from "../components/sections/Work"

const ProjectsPage = () => {
  return (
    <Layout>
      <Work />
    </Layout>
  )
}

export default ProjectsPage

export const Head = () => <Seo title="Projects" pathname="/projects" />
