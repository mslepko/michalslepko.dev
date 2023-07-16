import * as React from "react"
import usesList from "../lists/usesList"
import MyLink from "./myLinkComponent"
import socialStats from "../lists/socialStats"
import {
  Twitter,
  Instagram,
  Twitch,
  YouTube,
  TikTok,
  Threads,
} from "./util/svgs"

const UsesLine = ({ type, addClasses }) => {
  const setupElements = usesList[type]
  let names = []
  var links = []
  const socialIcons = {
    Twitter: Twitter,
    Instagram: Instagram,
    Twitch: Twitch,
    TikTok: TikTok,
    YouTube: YouTube,
    Threads: Threads,
  }

  if (setupElements) {
    names = Object.keys(setupElements)
  }

  let classList = addClasses ? addClasses : ""
  const classes = `md:w-2/3 m-auto marker:text-sky-400 list-disc md:pl-5 space-y-6 text-slate-500 mt-8 ${classList}`
  if (names.length) {
    for (let name of names) {
      let setupItem = setupElements[name]
      let urls = Object.keys(setupItem)
      if (setupItem) {
        var link = {
          name: name,
          url: "#",
        }

        for (let url of urls) {
          link.url = setupItem[url]
          if (url.length > 0) {
            link.name += ` (${url})`
          }

          if (type === "socials") {
            if (socialStats.hasOwnProperty(name)) {
              link.followers = socialStats[name]
            }

            if (socialIcons.hasOwnProperty(name)) {
              link.thumb = socialIcons[name]
            }
          }

          links.push(
            <MyLink
              link={link}
              key={link.name}
              thumb={link.thumb}
              followers={link.followers}
            />,
          )
        }
      }
    }
  }

  return <div className={classes}>{links}</div>
}

export default UsesLine
