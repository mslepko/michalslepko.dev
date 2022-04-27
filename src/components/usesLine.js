import * as React from "react"
import usesList from "./usesList"

const UsesLine = ({type}) => {
  const elements = usesList[type]
  let htmlOutput = '';
  let keys = [];

  if (elements) {
    keys = Object.keys(elements)
  }

  if (keys.length) {
    htmlOutput = '<ul>';
    for (const element of keys) {
      console.log('link', elements[element].link);
      const elementLink = elements[element].link ? '<a target="_blank" href="' + elements[element].link + '">Amazon UK</a>' : ''

      htmlOutput += '<li>'
      htmlOutput += '<span class="bold capitalize">' + element + '</span> - ' + elements[element].name + ' - ' + elementLink
      htmlOutput += '</li>'
    }
    htmlOutput += '</ul>'
  }

  return (
    <p
      className="text-2xl"
      dangerouslySetInnerHTML={{ __html: htmlOutput }}
    >

    </p>
  )
}

export default UsesLine