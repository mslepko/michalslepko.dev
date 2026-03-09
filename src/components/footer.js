import * as React from "react"
import { Link } from "gatsby"
import { Script } from "gatsby"

const Footer = () => {
  const navLinks = [
    { url: "/", label: "Home" },
    { url: "/uses/", label: "Uses" },
    { url: "/links/", label: "Links" },
    { url: "/snippets/", label: "Snippets" },
    { url: "/projects/", label: "Projects" },
    { url: "/contact/", label: "Contact me" },
  ]

  const moreLinks = [
    { url: "https://rootscope.dev/", label: "Rootscope" },
    { url: "https://wp-admin.online/", label: "WP Admin Online" },
    { url: "https://phpunserialize.com/", label: "PHP Unserialize Online" },
    { url: "https://phpserialize.com/", label: "PHP Serialize Online" },
    { url: "https://phpplayground.online/", label: "PHP Playground Online" },
    { url: "https://byhumannotai.com/", label: "By Human Not AI" },
    { url: "https://ip.rootscope.dev/", label: "IP Address Check" },
    { url: "https://wp-maintenance.pro/", label: "WP Maintenance Pro" },
    { url: "https://sitemaptollms.com/", label: "Sitemap to llms.txt" },
  ]

  return (
    <footer
      className="
      mx-auto
      bg-light/30 dark:bg-darkest
      py-8 px-4"
    >
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12 justify-center">
        <div>
          <h4 className="text-sm font-semibold mb-3">Pages</h4>
          <ul className="list-none p-0 m-0 flex flex-col gap-y-1">
            {navLinks.map(link => (
              <li key={link.url}>
                <Link to={link.url} className="text-sm">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">More</h4>
          <ul className="list-none p-0 m-0 grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-1">
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
      </div>
      <div className="border-t border-gray-300 dark:border-gray-700 mt-8 pt-4 text-center">
        <p className="text-sm">
          Created with ☕ by{" "}
          <a href="https://michalslepko.dev" target="_blank" rel="noreferrer">
            Michal Slepko
          </a>{" "}
          and{" "}
          <a href="https://rootscope.dev" target="_blank" rel="noreferrer">
            Rootscope
          </a>
        </p>
      </div>
      <Script
        src="https://beamanalytics.b-cdn.net/beam.min.js"
        data-token={process.env.GATSBY_BEAM_ANALYTICS_TOKEN}
        async
      />
    </footer>
  )
}

export default Footer
