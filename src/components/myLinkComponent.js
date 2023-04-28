import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

function Thumbnail({ image, alt }) {
  if (!image) return;
  
  if (typeof image === "string") {
    return <img src={image} className="w-8 h-8" alt={alt} />;
  } else if (typeof image === "function") {
    return image();
  }
  
  return <GatsbyImage image={image} alt={alt} className="mr-4" />;
}

function MyLink({ link, thumb, followers }) {
  let hasThumb = thumb ? true : false
  let hasFollowers = followers ? true : false
  let classes =
    "flex items-center w-full p-4 text-dark bg-white rounded-lg shadow-md dark:text-gray-400 flex-col md:flex-row transition-all duration-500 hover:bg-mint hover:scale-105"

  if (hasFollowers) {
    classes += " justify-between"
  }

  let thumbClass = (hasFollowers ? "" : "w-full md:w-1/5 ") + "text-center thumbnail"

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
            ? "text-left text-blue font-medium"
            : "text-center text-blue font-medium w-full"
        }
      >
        {link.name}
      </div>
      {hasFollowers && (
        <span className="font-bold text-light-dark text-xl">
          {link.followers}
        </span>
      )}
    </a>
  )
}

export default MyLink
