import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import linksList from "../lists/linksList"
import { getImage, GatsbyImage } from "gatsby-plugin-image"


function Thumbnail({image}) {

  console.log('image Thumbnail', image);
  return (
    <p>No image</p>
    // <GatsbyImage
    // image={image}
    // alt="A corgi smiling happily"
    // />
  )
}
function Link({link}) {
  return <li>

    <Thumbnail image={link}/>

    <a
      href={link.url}
      target="_blank"
      className="text-blue"
      rel="noreferrer"
    >{link.name}</a>
  </li>
}

const MyLinks = () => {
  const thumbnails = useStaticQuery(graphql`
  {
    allFile(
      filter: {extension: {regex: "/(jpg)|(png)|(jpeg)/"}, relativeDirectory: {eq: "thumbnails"}}
    ) {
      edges {
        node {
          base
          childImageSharp {
            fluid {
              base64
              aspectRatio
              src
              srcSet
              sizes
            }
          }
        }
      }
    }
  }
  `)
console.log('thumbnails', thumbnails);
  let links = [];
  for (let link of linksList) {
    links.push(<Link link={link} />)
  }

  return (
    <div>
      <ul className="marker:text-sky-400 list-disc pl-5 space-y-3 text-slate-500 mt-8"
      >
        {links}
      </ul>
    </div>
  )
}

export default MyLinks



/*
query MyQuery {
  file(relativePath: {eq: "thumbnails/sunsama.png"}) {
    childrenImageSharp {
      fluid {
        base64
        src
        sizes
        srcSet
      }
    }
  }
}

*/