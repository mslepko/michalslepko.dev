import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import linksList from "../../lists/linksList"
import FeaturedLink from '../cards/FeaturedLink'

const MyLinks = () => {
  let showFeaturedLinks = false

  const thumbnailsQuery = useStaticQuery(graphql`
    {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)|(webp)/" }
          relativeDirectory: { eq: "featured" }
        }
      ) {
        edges {
          node {
            base
            childImageSharp {
              gatsbyImageData
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

  let featured = []
  const featuredLinks = linksList.filter(link => link.featured);
  
  if (featuredLinks.length > 0) {
    for (let link of featuredLinks) {
      let thumbnail = thumbnails[link.thumb]
      featured.push(<FeaturedLink link={link} thumb={thumbnail} key={link.name} />)
    }
    showFeaturedLinks = true
  }

  return (
    <>
      {showFeaturedLinks && (
        <div className="md:w-2/3 m-auto marker:text-sky-400 list-disc md:pl-5 space-y-6 text-slate-500 mt-8">
          <div className="mb-32">
            <h1 className="text-2xl sm:text-3xl font-bold text-darkest dark:text-lightest tracking-tight pt-10">
              Featured links
            </h1>
            {featured}
          </div>
        </div>
      )}
    </>
  )
}

export default MyLinks
