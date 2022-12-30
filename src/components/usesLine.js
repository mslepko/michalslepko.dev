import * as React from "react"
import usesList from "../lists/usesList"
import MyLink from "./myLinkComponent"
import socialStats from "../lists/socialStats"

const UsesLine = ({ type }) => {
  const setupElements = usesList[type]
  let names = []
  var links = []

  if (setupElements) {
    names = Object.keys(setupElements)
  }

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
              link.name += ` - Followers: ${socialStats[name]}`
            }
          }

          links.push(<MyLink link={link} key={link.name} />)
        }
      }
    }
  }

  return (
    <div className="md:w-2/3 m-auto marker:text-sky-400 list-disc md:pl-5 space-y-6 text-slate-500 mt-8">
      {links}
    </div>
  )
}

export default UsesLine
