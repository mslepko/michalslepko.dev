import * as React from "react"
import Layout from "../components/layout/Layout"
import Seo from "../components/seo"
import ProfessionalWork from "../components/sections/ProfessionalWork"

const WorkPage = () => {
  return (
    <Layout>
      <ProfessionalWork />
    </Layout>
  )
}

export default WorkPage

export const Head = () => (
  <Seo
    title="Professional Work & Case Studies"
    pathname="/work"
    description="Portfolio of professional WordPress, Laravel, and e-commerce development work. 14+ years building high-performance solutions for agencies and businesses."
  />
)
