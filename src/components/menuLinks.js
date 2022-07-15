import * as React from "react"
import { Link } from "gatsby"

const MenuLinks = ({classes, hideHome, linkClasses}) => {

  const links = {
    '/': 'Home',
    '/uses': 'Uses',
    '/links': 'Links',
    '/contact': 'Contact me'
    // '/partnerships': 'Partnerships',
  }

  if (hideHome) {
    delete links['/']
  }

  linkClasses = linkClasses ? linkClasses : 'text-black/80 hover:text-mint'

  let htmlOutput = [];

  for (let url in links) {
    htmlOutput.push(<Link
      to={url}
      className={`${linkClasses} mb-4`}
      activeClassName="text-mint"
      key={links[url]}
    >{links[url]}</Link>)
  }
  return (
    <div className={classes}
    >
      {htmlOutput}
      <a href="https://snippets.slepko.co.uk/"
      className={`${linkClasses} mb-4`}
      >
        Snippets
      </a>
    </div>
  )
}

export default MenuLinks