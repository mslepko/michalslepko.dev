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

  const moreLinksCol1 = [
    { url: "https://phpserialize.com/", label: "PHP Serialize Online" },
    { url: "https://phpunserialize.com/", label: "PHP Unserialize Online" },
    { url: "https://phpplayground.online/", label: "PHP Playground Online" },
  ]

  const moreLinksCol2 = [
    { url: "https://wp-admin.online/", label: "WP Admin Online" },
    {
      url: "https://wp-maintenance.pro/",
      label: "Dedicated WordPress maintenance plans",
    },
    { url: "https://ip.rootscope.dev/", label: "IP Address Check" },
  ]

  const moreLinksCol3 = [
    { url: "https://sitemaptollms.com/", label: "Sitemap to llms.txt" },
    { url: "https://byhumannotai.com/", label: "By Human Not AI Badges" },
  ]

  return (
    <footer
      className="
      mx-auto
      bg-light/30 dark:bg-darkest
      py-8 px-4"
    >
      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row gap-8 md:gap-12 justify-between">
        <div>
          <h4 className="text-sm font-semibold mb-3">Pages</h4>
          <ul className="list-none p-0 m-0 grid grid-cols-2 gap-x-6 gap-y-1">
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
          <div className="flex flex-col md:flex-row gap-x-6 gap-y-1">
            <ul className="list-none p-0 m-0 flex flex-col gap-y-1">
              {moreLinksCol1.map(link => (
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
            <ul className="list-none p-0 m-0 flex flex-col gap-y-1">
              {moreLinksCol2.map(link => (
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
            <ul className="list-none p-0 m-0 flex flex-col gap-y-1">
              {moreLinksCol3.map(link => (
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
        src="https://scripts.simpleanalyticscdn.com/latest.js"
        data-collect-dnt="true"
        async
      />
    </footer>
  )
}

export default Footer
