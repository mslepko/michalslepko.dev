import * as React from "react"
import {
  Twitter,
  Instagram,
  Twitch,
  Github,
  LinkedIn,
  TikTok,
  YouTube,
} from "../util/svgs"
import socialStats from "../../lists/socialStats"

// Icons from = https://simpleicons.org/

const Socials = props => {
  let classNames =
    "flex justify-around gap-12 align-center min-h-fit m-auto socials "
  let linkClass = ""

  if (props.fullPage) {
    classNames += "mt-12 flex-row flex-wrap w-3/4"
    linkClass = "flex flex-col items-center"
  } else {
    classNames += "flex-col"
  }

  return (
    <div className={classNames}>
      <a
        href="https://instagram.com/michal.codes"
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
      >
        {props.fullPage && (
          <p className="dark:text-mid dark:hover:text-lightest text-dark hover:text-darkest font-bold mb-4">
            Instagram
          </p>
        )}
        <Instagram />
        {props.fullPage && socialStats["Instagram"] && (
          <p className="dark:text-mid dark:hover:text-lightest text-dark hover:text-darkest font-bold mt-2">
            {socialStats["Instagram"]}
          </p>
        )}
      </a>

      <a
        href="https://www.tiktok.com/@michal.codes"
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
      >
        {props.fullPage && (
          <p className="dark:text-mid dark:hover:text-lightest text-dark hover:text-darkest font-bold mb-4">
            Tiktok
          </p>
        )}
        <TikTok />
        {props.fullPage && socialStats["TikTok"] && (
          <p className="dark:text-mid dark:hover:text-lightest text-dark hover:text-darkest font-bold mt-2">
            {socialStats["TikTok"]}
          </p>
        )}
      </a>

      <a
        href="https://www.youtube.com/@michal_codes"
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
      >
        {props.fullPage && (
          <p className="dark:text-mid dark:hover:text-lightest text-dark hover:text-darkest font-bold mb-4">
            YouTube
          </p>
        )}
        <YouTube />
        {props.fullPage && socialStats["YouTube"] && (
          <p className="dark:text-mid dark:hover:text-lightest text-dark hover:text-darkest font-bold mt-2">
            {socialStats["YouTube"]}
          </p>
        )}
      </a>

      <a
        href="https://twitter.com/michal_codes"
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
      >
        {props.fullPage && (
          <p className="dark:text-mid dark:hover:text-lightest text-dark hover:text-darkest font-bold mb-4">
            Twitter
          </p>
        )}
        <Twitter />
        {props.fullPage && socialStats["Twitter"] && (
          <p className="dark:text-mid dark:hover:text-lightest text-dark hover:text-darkest font-bold mt-2">
            {socialStats["Twitter"]}
          </p>
        )}
      </a>

      <a
        href="https://twitch.com/michal_codes"
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
      >
        {props.fullPage && (
          <p className="dark:text-mid dark:hover:text-lightest text-dark hover:text-darkest font-bold mb-4">
            Twitch
          </p>
        )}
        <Twitch />
        {props.fullPage && socialStats["Twitch"] && (
          <p className="dark:text-mid dark:hover:text-lightest text-dark hover:text-darkest font-bold mt-2">
            {socialStats["Twitch"]}
          </p>
        )}
      </a>

      <a
        href="https://github.com/mslepko"
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
      >
        {props.fullPage && (
          <p className="dark:text-mid dark:hover:text-lightest text-dark hover:text-darkest font-bold mb-4">
            GitHub
          </p>
        )}
        <Github />
        {props.fullPage && socialStats["GitHub"] && (
          <p className="dark:text-mid dark:hover:text-lightest text-dark hover:text-darkest font-bold mt-2">
            {socialStats["GitHub"]}
          </p>
        )}
      </a>

      <a
        href="https://www.linkedin.com/in/michalslepko"
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
      >
        {props.fullPage && (
          <p className="dark:text-mid dark:hover:text-lightest text-dark hover:text-darkest font-bold mb-4">
            LinkedIn
          </p>
        )}
        <LinkedIn />
        {props.fullPage && socialStats["LinkedIn"] && (
          <p className="dark:text-mid dark:hover:text-lightest text-dark hover:text-darkest font-bold mt-2">
            {socialStats["LinkedIn"]}
          </p>
        )}
      </a>
    </div>
  )
}

export default Socials
