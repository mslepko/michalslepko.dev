import * as React from "react"
import GroupLink from "../cards/GroupLink"


const GroupLinks = ({name, links, thumbnails}) => {
  let linksList = []
  for (let link of links) {
    let thumbnail = thumbnails[link.thumb]
    linksList.push(<GroupLink link={link} thumb={thumbnail} key={link.name} />)
  }
console.log('linksList', linksList)
  return (
    <div className="m-auto marker:text-sky-400 list-disc md:pl-5 space-y-6 text-slate-500 mt-8">
      <div className="my-16">
        <h1 className="text-2xl sm:text-3xl font-bold text-darkest dark:text-lightest tracking-tight pt-10 capitalize mb-4">
          {name}
        </h1>
        <div className="grid grid-cols-3 gap-4">
          {linksList}
        </div>
      </div>
    </div>
  )
}

export default GroupLinks
