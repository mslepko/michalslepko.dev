import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import linksList from "../lists/linksList"
import { GatsbyImage } from "gatsby-plugin-image"


function Thumbnail({image, alt}) {
  return (
    image ?
    <GatsbyImage
    image={image}
    alt={alt}
    className="mr-4"
    /> : null
  )
}
function Link({link, thumb}) {
  return <li
    className="flex items-center mb-2"
  >
    <div className="w-1/5">

    <Thumbnail
      image={thumb}
      alt={link.name}
      key={link.name}
    />
    </div>

    <div className="text-left">
    <a
      href={link.url}
      target="_blank"
      className="text-blue"
      rel="noreferrer"
    >{link.name}</a>
    </div>
  </li>
}

const MyLinks = () => {
  const thumbnailsQuery = useStaticQuery(graphql`
  {
    allFile(
      filter: {extension: {regex: "/(jpg)|(png)|(jpeg)/"}, relativeDirectory: {eq: "thumbnails"}}
    ) {
      edges {
        node {
          base
          childImageSharp {
            gatsbyImageData(
						  height: 46
            )
          }
        }
      }
    }
  }
  `)

  let thumbnails = [];

  thumbnailsQuery.allFile.edges.map(image => (
    thumbnails[image.node.base] = image.node.childImageSharp.gatsbyImageData
  ))

  let links = [];
  for (let link of linksList) {
    let thumbnail = thumbnails[link.thumb]
    links.push(<Link
      link={link}
      thumb = {thumbnail}
      key={link.name}
    />)
  }

  return (
    <div>
      <ul className="list-none w-2/3 m-auto pl-5 space-y-3 text-slate-500 mt-8"
      >
        {links}
      </ul>
    </div>
  )
}

export default MyLinks
