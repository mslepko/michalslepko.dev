import * as React from 'react';
import { Instagram, Twitter, Github, LinkedIn } from "../../util/svgs"
const Socials = () => {

  return (
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
  )
}

export default Socials