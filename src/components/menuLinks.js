import * as React from "react"
import { Link } from "gatsby"

const MenuLinks = ({classes}) => {

  const links = {
    '/': 'Home',
    '/uses': 'Uses',
    '/links': 'Links',
    // '/partnerships': 'Partnerships',
  }

  let htmlOutput = [];

  for (let url in links) {
    htmlOutput.push(<Link to={url}
      className="text-4xl text-dark-blue mb-4"
    >{links[url]}</Link>)
  }
  return (
    <div className={classes}
    >
      {htmlOutput}
    </div>
  )
}

export default MenuLinks