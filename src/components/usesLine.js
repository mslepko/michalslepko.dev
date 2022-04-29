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
    htmlOutput = '<ul>';

    for (let name of names) {
      let setupItem = setupElements[name]

      if (setupItem) {
        let urls = Object.keys(setupItem)
        let count = 0;
        htmlOutput += `<li>
          <span class="bold capitalize">${name}</span> - `

        for (let url of urls) {
          htmlOutput += count > 0 ? ' | ' : ''
          count++

          htmlOutput += `<a href="${setupItem[url]}" target="_blank">${url}</a>`
        }

        htmlOutput += `</li>`
      }
    }
    htmlOutput += '</ul>'
  }

  return (
    <p
      dangerouslySetInnerHTML={{ __html: htmlOutput }}
    >

    </p>
  )
}

export default UsesLine