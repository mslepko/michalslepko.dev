import * as React from "react"
import { Script } from "gatsby"

const Footer = () => {
  return (
    <footer
      className="container
      mx-auto
      text-center
      my-4 justify-around"
    >
      <p>Built with&nbsp;<a href="https://www.gatsbyjs.com" target="_blank" rel="noreferrer">Gatsby</a></p>
      <p>Michal Slepko © {new Date().getFullYear()}</p>
      <p>Template from <a href="https://www.colorhub.app/starter-kits" target="_blank" rel="noreferrer">Colorhub</a></p>
      <Script src="https://beamanalytics.b-cdn.net/beam.min.js" data-token={process.env.GATSBY_BEAM_ANALYTICS_TOKEN} async/>
    </footer>
  )
}

export default Footer
