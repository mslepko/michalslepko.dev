import * as React from "react"

import Twitter from "../images/icons/twitter-icon.svg"
import Instagram from "../images/icons/instagram-icon.svg"
import Twitch from "../images/icons/twitch-icon.svg"
import Github from "../images/icons/github-icon.svg"
import LinkedIn from "../images/icons/linkedin.svg"
import TikTok from "../images/icons/tiktok.svg"

// Icons from = https://simpleicons.org/

const Socials = () => (
  <div className="flex justify-around flex-col gap-6 align-center min-h-fit m-auto socials">
    <a
      href="https://twitter.com/michal_codes"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Twitter />
    </a>

    <a
      href="https://instagram.com/michal.codes"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Instagram />
    </a>

    <a
      href="https://twitch.com/michal_codes"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Twitch />
    </a>

    <a
      href="https://www.tiktok.com/@michal.codes"
      target="_blank"
      rel="noopener noreferrer"
    >
      <TikTok />
    </a>

    <a
      href="https://github.com/mslepko"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Github />
    </a>

    <a
      href="https://www.linkedin.com/in/michalslepko"
      target="_blank"
      rel="noopener noreferrer"
    >
      <LinkedIn />
    </a>
  </div>
)

export default Socials
