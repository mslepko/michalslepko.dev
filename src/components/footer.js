import * as React from "react"
import { Script } from "gatsby"

const Footer = () => {
  const moreLinks = [
    { url: "https://rootscope.dev/", label: "Rootscope" },
    { url: "https://wp-admin.online/", label: "WP Admin Online" },
    { url: "https://phpunserialize.com/", label: "PHP Unserialize Online" },
    { url: "https://phpserialize.com/", label: "PHP Serialize Online" },
    { url: "https://phpplayground.online/", label: "PHP Playground Online" },
    { url: "https://byhumannotai.com/", label: "By Human Not AI" },
    { url: "https://ip.rootscope.dev/", label: "IP Address Check" },
    {
      url: "https://wp-maintenance.pro/",
      label: "Dedicated WordPress maintenance plans",
    },
    {
      url: "https://sitemaptollms.com/",
      label: "Convert Any Sitemap to llms.txt",
    },
  ]

  return (
    <footer
      className="
      mx-auto
      text-center
      bg-light/30 dark:bg-darkest
      py-4 justify-around"
    >
      <div className="mb-4">
        <h4 className="text-sm font-semibold mb-2">More</h4>
        <ul className="list-none p-0 m-0 flex flex-col items-center gap-y-1">
          {moreLinks.map(link => (
            <li key={link.url}>
              <a
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="text-sm"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <p>
        Created with ☕ by{" "}
        <a href="https://michalslepko.dev" target="_blank" rel="noreferrer">
          Michal Slepko
        </a>{" "}
        and{" "}
        <a href="https://rootscope.dev" target="_blank" rel="noreferrer">
          Rootscope
        </a>
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
