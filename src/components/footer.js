import * as React from "react"
import { Script } from "gatsby"

const Footer = () => {
  return (
    <footer
      className="container
      mx-auto
      text-center
      text-mint
      mt-4"
    >
      Michal Slepko © {new Date().getFullYear()}, Built with {` `}
      <a href="https://www.gatsbyjs.com">Gatsby</a>
      <Script src="https://beamanalytics.b-cdn.net/beam.min.js" data-token={process.env.GATSBY_BEAM_ANALYTICS_TOKEN} async/>
    </footer>
  )
}

export default Footer
