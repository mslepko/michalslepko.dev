import * as React from "react"
import usesList from "./usesList"

const UsesLine = ({type}) => {
  const setupElements = usesList[type]
  let htmlOutput = '';
  let names = [];

  if (setupElements) {
    names = Object.keys(setupElements)
  }

  if (names.length) {
    htmlOutput = `<ul class="${type} marker:text-sky-400 list-disc pl-5 space-y-3 text-slate-500 mt-8">`;

    for (let name of names) {
      let setupItem = setupElements[name]

      if (setupItem) {
        let urls = Object.keys(setupItem)
        let count = 0;
        htmlOutput += `<li>
          <span class="font-bold capitalize">${name}</span>`

        htmlOutput += urls && urls.length > 0 ? ' - ' : ''

        for (let url of urls) {
          htmlOutput += count > 0 ? ' | ' : ''
          count++

          htmlOutput += `<a href="${setupItem[url]}" target="_blank" class="text-blue">${url}</a>`
        }

        htmlOutput += `</li>`
      }
    }
    htmlOutput += '</ul>'
  }

  return (
    <div
      dangerouslySetInnerHTML={{ __html: htmlOutput }}
    >
    </div>
  )
}

export default UsesLine