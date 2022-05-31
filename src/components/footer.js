import * as React from "react"

const Footer = () => {
  return (
    <footer
      className="container
      mx-auto
      text-right
      text-gray
      mt-4"
    >
      Michal Slepko © {new Date().getFullYear()},
      Built with {` `}<a href="https://www.gatsbyjs.com">Gatsby</a>
    </footer>
  )
}

export default Footer