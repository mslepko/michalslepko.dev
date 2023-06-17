import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Instagram, Twitter, Github, LinkedIn } from "../components/util/svgs"

import Layout from "../components/layout/Layout"
import Seo from "../components/seo"

const HireMePage = () => (
  <Layout>
    <div className="container mx-auto p-8 pb-16">
      <div className="flex justify-between w-full px-16 py-8">
        <div>
          <ul
            className="flex flex-col text-left md:flex-row space-y-5 md:space-y-0 md:space-x-6 text-xl md:text-2xl">
            <li className="text-left">
              <a href="#experience">
                Experience
              </a>

            </li>
            <li className="text-left">
              <a href="#contact">
                Contact
              </a>

            </li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-col md:flex-row items-end md:items-center md:space-x-4 space-y-4 md:space-y-0">
            <li>
              <a href="https://www.instagram.com/michal.codes/" target="_blank" aria-label="Instagram"
                className="hover:text-blue-600 socials" rel="noopener noreferrer">
                <Instagram />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/michal_codes" target="_blank" aria-label="Twitter"
                className="hover:text-blue-600 socials" rel="noopener noreferrer">
                <Twitter />
              </a>
            </li>
            <li>
              <a href="https://www.github.com/mslepko" target="_blank" aria-label="Github"
                className="hover:text-blue-600 socials" rel="noopener noreferrer">
                <Github />
              </a>
            </li>

            <li>
              <a href="https://www.linkedin.com" target="_blank" aria-label="linkedin"
                className="hover:text-blue-600 socials" rel="noopener noreferrer">
                <LinkedIn />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </Layout>
)

export default HireMePage

export const Head = () => <Seo title="Hire Me" pathname="/hire-me/" />
