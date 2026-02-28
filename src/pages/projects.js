import * as React from "react"
import Layout from "../components/layout/Layout"
import Seo from "../components/seo"
import Work, { WORK_TYPES } from "../components/sections/Work"

const VALID_FILTERS = WORK_TYPES.map(type => type.slug)

function getFilterFromPath(pathname) {
  const segment = pathname.replace(/^\/projects\/?/, "").replace(/\/$/, "")
  if (segment && VALID_FILTERS.includes(segment)) {
    return segment
  }
  return null
}

const ProjectsPage = ({ location }) => {
  const activeFilter = getFilterFromPath(location.pathname)

  return (
    <Layout>
      <Work activeFilter={activeFilter} showFilters />
    </Layout>
  )
}

export default ProjectsPage

export const Head = ({ location }) => {
  const filter = getFilterFromPath(location.pathname)
  const title = filter ? `Projects - ${filter}` : "Projects"
  return <Seo title={title} pathname={location.pathname} />
}
