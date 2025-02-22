import * as React from "react"
import { Script } from "gatsby"

const Footer = () => {
  return (
    <footer
      className="
      mx-auto
      text-center
      bg-light/30 dark:bg-darkest
      py-4 justify-around"
    >
      <p>
        Built with&nbsp;
        <a href="https://www.gatsbyjs.com" target="_blank" rel="noreferrer">
          Gatsby
        </a>
      </p>
      <p>
        © {new Date().getFullYear()} Michal Slepko &{" "}
        <a href="https://rootscope.dev/">RootScope</a>
      </p>
      <p>
        Template from{" "}
        <a href="https://www.colorhub.app/starter-kits">Colorhub</a>
      </p>
      <Script
        src="https://beamanalytics.b-cdn.net/beam.min.js"
        data-token={process.env.GATSBY_BEAM_ANALYTICS_TOKEN}
        async
      />
    </footer>
  )
}

export default Footer
