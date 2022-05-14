import * as React from "react"

import Twitter from "../images/icons/twitter-icon.svg"
import Instagram from "../images/icons/instagram-icon.svg"
import Twitch from "../images/icons/twitch-icon.svg"
import Github from "../images/icons/github-icon.svg"
import LinkedIn from "../images/icons/linkedin.svg"

// Icons from = https://simpleicons.org/


const Socials = () => (
  <div
    className="flex justify-around flex-nowrap w-4/5 m-auto"
  >
      <a href="https://twitter.com/michal_codes"
        target="_blank"
        className="pr-2"
        rel="noopener noreferrer">
          <img src={Twitter} className="w-8 h-8" alt="Twitter"/>
      </a>

      <a href="https://instagram.com/michal.codes"
        target="_blank"
        className="pr-2"
        rel="noopener noreferrer">
          <img src={Instagram} className="w-8 h-8" alt="Instagram"/>
      </a>

      <a href="https://twitch.com/michal_codes"
        target="_blank"
        className="pr-2"
        rel="noopener noreferrer">
          <img src={Twitch} className="w-8 h-8" alt="Twitch"/>
      </a>

      <a href="https://github.com/mslepko"
        target="_blank"
        className="pr-2"
        rel="noopener noreferrer">
          <img src={Github} className="w-8 h-8" alt="GitHub"/>
      </a>

      <a href="https://www.linkedin.com/in/michalslepko"
        target="_blank"
        className="pr-2"
        rel="noopener noreferrer">
          <img src={LinkedIn} className="w-8 h-8" alt="LinkedIn"/>
      </a>
  </div>
)

export default Socials