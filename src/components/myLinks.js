import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import linksList from "../lists/linksList"
import MyLink from "./myLinkComponent"
import GroupLinks from "./sections/GroupLinks"

const MyLinks = () => {
  const thumbnailsQuery = useStaticQuery(graphql`
    {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)|(webp)/" }
          relativeDirectory: { eq: "thumbnails" }
        }
      ) {
        edges {
          node {
            base
            childImageSharp {
              gatsbyImageData(height: 49)
            }
          }
        }
      }
    }
  `)

  let thumbnails = []

  thumbnailsQuery.allFile.edges.map(
    image =>
      (thumbnails[image.node.base] = image.node.childImageSharp.gatsbyImageData)
  )

  let links = []
  let normalLinks = []
  let groupedLinks = {}

  const linksGroup = [
    { name: "tools", order: 1 },
    { name: "essentials", order: 2 },
    { name: "brands", order: 3 },
    { name: "servers", order: 4 },
  ]

  linksGroup.forEach(link => {
    groupedLinks[link.name] = []
  })

  linksList.forEach(link => {
    if (link.featured) return
    if (typeof link.type !== "undefined") {
      groupedLinks[link.type].push(link)
    } else {
      normalLinks.push(link)
    }
  })
  linksGroup.sort((a, b) => {
    if (a.order < b.order) return -1
    if (a.order > b.order) return 1
    return 0
  })

  for (let link of normalLinks) {
    let thumbnail = thumbnails[link.thumb]
    links.push(<MyLink link={link} thumb={thumbnail} key={link.name} />)
  }

  return (
    <div className="md:w-2/3 m-auto marker:text-sky-400 list-disc md:pl-5 space-y-6 text-slate-500 mt-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-darkest dark:text-lightest tracking-tight pt-10">
        My links
      </h1>
      {links}
      {linksGroup &&
        linksGroup.map(link => (
          <GroupLinks
            name={link.name}
            links={groupedLinks[link.name]}
            key={link.name}
            thumbnails={thumbnails}
          />
        ))}
    </div>
  )
}

export default MyLinks
