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
    className="flex items-center w-full p-4 text-dark bg-white rounded-lg shadow-md dark:text-gray-400 hover:bg-mint md:flex-row transition-all duration-500 hover:bg-mint
    "
    href={link.url}
    target="_blank"
    rel="noreferrer"
  >
    {hasThumb &&
      <div className="w-1/5">
        <Thumbnail
          image={thumb}
          alt={link.name}
          key={link.name}
        />
      </div>
    }
    <div className={hasThumb ? 'text-left text-blue font-bold' : 'text-center text-blue font-bold'} >
      {link.name}
    </div>
  </a>
  )
}

export default MyLink