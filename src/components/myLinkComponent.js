import * as React from "react"
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

function MyLink({link, thumb}) {
  let hasThumb = thumb ? true : false;
  return (
  <a
    className="flex items-center w-full p-4 text-dark bg-white rounded-lg
    shadow-md dark:text-gray-400 md:flex-row transition-all duration-500
    hover:bg-mint hover:scale-105
    "
    href={link.url}
    target="_blank"
    rel="noreferrer"
  >
    {hasThumb &&
      <div className="w-1/5 text-center">
        <Thumbnail
          image={thumb}
          alt={link.name}
          key={link.name}
        />
      </div>
    }
    <div className={hasThumb ? 'text-left text-blue font-medium' : 'text-center text-blue font-medium w-full'} >
      {link.name}
    </div>
  </a>
  )
}

export default MyLink