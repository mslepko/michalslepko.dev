import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Image = ({ className, title, filename, withFallback = false }) => {
  const imageData = getImage(filename)

  const data = useStaticQuery(graphql`
    query {
      fallbackImage: file(relativePath: { eq: "svgs/fallback.svg" }) {
        publicURL
      }
    }
  `)

  if (!imageData) {
    return withFallback ? (
      <img
        src={data.fallbackImage?.publicURL}
        alt={title}
        className={className}
      />
    ) : null
  }

  return <GatsbyImage className={className} image={imageData} alt={title} />
}

export default Image
