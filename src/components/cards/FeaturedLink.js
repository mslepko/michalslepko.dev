import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

function Thumbnail({ image, alt }) {
  if (!image) return

  if (typeof image === "string") {
    return <img src={image} className="w-16 h-16" alt={alt} />
  } else if (typeof image === "function") {
    return image()
  }

  return <GatsbyImage image={image} alt={alt} className="mr-4" />
}

function FeaturedLink({ link, thumb }) {
  let hasThumb = thumb ? true : false
  let classes =
    "flex items-center w-full p-4 text-dark rounded-lg shadow-md dark:text-gray-400 flex-col transition-all duration-500 hover:bg-mint hover:scale-105 bg-clip-border shadow-3xl shadow-shadow-500 bg-white my-4 featured-link featured-link__" +
    link.name.split(" ")[0].toLowerCase()

  let thumbClass =
    "text-center thumbnail h-full w-full h-[250px] flex justify-center items-center my-4"

  return (
    <a className={classes} href={link.url} target="_blank" rel="noreferrer">
      {hasThumb && (
        <div className={thumbClass}>
          <Thumbnail image={thumb} alt={link.name} key={link.name} />
        </div>
      )}
      <div
        className={
          hasThumb
            ? "text-center md:text-left text-blue font-bold text-2xl"
            : "text-center text-blue font-bold w-full"
        }
      >
        {link.name}
      </div>
    </a>
  )
}

export default FeaturedLink
