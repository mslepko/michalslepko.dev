import * as React from "react"

import Twitter from "../images/twitter-icon.svg"
import Instagram from "../images/instagram-icon.svg"
import Twitch from "../images/twitch-icon.svg"

// Icons from = https://simpleicons.org/


const Socials = () => (
  <div
    className="flex justify-around flex-nowrap w-3/5 m-auto"
  >
      <a href="https://twitter.com/michal_codes"
        target="_blank"
        rel="noopener noreferrer">
          <img src={Twitter} className="w-8 h-8" />
      </a>

      <a href="https://instagram.com/michal.codes"
        target="_blank"
        rel="noopener noreferrer">
          <img src={Instagram} className="w-8 h-8" />
      </a>

      <a href="https://twitch.com/michal_codes"
        target="_blank"
        rel="noopener noreferrer">
          <img src={Twitch} className="w-8 h-8" />
      </a>
  </div>
)

export default Socials