import * as React from "react"
import { Link } from "gatsby"

const MenuLinks = ({ classes, hideHome, linkClasses }) => {
  const links = {
    "/": "Home",
    "/uses/": "Uses",
    "/links/": "Links",
    "/resume/": "My CV",
    "/contact/": "Contact me",
    "/snippets/": "My snippets",
  }

  if (hideHome) {
    delete links["/"]
  }

  linkClasses = linkClasses ? linkClasses : "text-black/80 hover:text-mint"

  let htmlOutput = []

  for (let url in links) {
    htmlOutput.push(
      <Link
        to={url}
        className={`${linkClasses} mb-4 text-dark dark:text-mid hover:text-darkest dark:hover:text-lightest`}
        activeClassName="text-darkest dark:text-lightest"
        key={links[url]}
      >
        {links[url]}
      </Link>
    )
  }
  return <div className={classes}>{htmlOutput}</div>
}

export default MenuLinks
