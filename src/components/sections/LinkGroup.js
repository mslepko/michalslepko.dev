import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import linksList from "../../lists/linksList"
import FeaturedLink from '../cards/FeaturedLink'

const LinkGroup = ({name, links}) => {
  console.log('links', links)
  console.log('name ', name)
  return (
    <div className="md:w-2/3 m-auto marker:text-sky-400 list-disc md:pl-5 space-y-6 text-slate-500 mt-8">
      <div className="mb-32">
        {/* <h1 className="text-2xl sm:text-3xl font-bold text-darkest dark:text-lightest tracking-tight pt-10">
          Featured links
        </h1>
        {featured} */}
      </div>
    </div>
  )
}

export default LinkGroup
