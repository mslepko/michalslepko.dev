import * as React from "react"
import { graphql } from "gatsby"

import linksList from "../lists/linksList"
import { Img } from "gatsby-plugin-image"


function Link({link}) {

  return <li>
    <a
      href={link.url}
      target="_blank"
      className="text-blue"
    >{link.name}</a>
  </li>
}

const MyLinks = () => {
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


export const query = graphql`
  {
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
`



export default MyLinks