import * as React from "react"
import Layout from "../components/layout/Layout"
import Seo from "../components/seo"
import PersonalProjects from "../components/sections/PersonalProjects"

const ProjectsPage = () => {
  return (
    <Layout>
      <PersonalProjects />
    </Layout>
  )
}

export default ProjectsPage

export const Head = () => (
  <Seo
    title="Personal Projects & Experiments"
    pathname="/projects"
    description="Side projects, open-source tools, and technical experiments by Michal Slepko. Exploring new frameworks, solving developer problems, and building useful utilities."
  />
)
