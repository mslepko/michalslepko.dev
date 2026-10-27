import * as React from "react"

const links = {
  "/": "Home",
  "/uses/": "Uses",
  "/links/": "Links",
  "/snippets/": "Snippets",
  "/projects/": "Projects",
  "/contact/": "Contact me",
}

const MenuLinks = ({ classes, linkClasses, currentPath }) => {
  linkClasses = linkClasses ? linkClasses : "text-black/80 hover:text-mint"

  let htmlOutput = []

  for (let url in links) {
    const isActive = url === currentPath
    htmlOutput.push(
      <a
        href={url}
        className={`${linkClasses} mb-4 text-dark dark:text-mid hover:text-darkest dark:hover:text-lightest${
          isActive ? " text-darkest dark:text-lightest" : ""
        }`}
        aria-current={isActive ? "page" : undefined}
        key={links[url]}
      >
        {links[url]}
      </a>,
    )
  }
  return <div className={classes}>{htmlOutput}</div>
}

export default MenuLinks
