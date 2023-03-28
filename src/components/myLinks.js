import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import linksList from "../lists/linksList"
import MyLink from "./myLinkComponent"

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
  const normalLinks = linksList.filter(link => !link.featured);
  
  for (let link of normalLinks) {
    let thumbnail = thumbnails[link.thumb]
    links.push(<MyLink link={link} thumb={thumbnail} key={link.name} />)
  }

  return (
    <div className="md:w-2/3 m-auto marker:text-sky-400 list-disc md:pl-5 space-y-6 text-slate-500 mt-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-darkest dark:text-lightest tracking-tight pt-10">
          Affiliate links
        </h1>
      {links}
    </div>
  )
}

export default MyLinks
