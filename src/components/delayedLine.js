import React, { useState, useEffect } from "react"
import { ReactTyped } from "react-typed"

function DelayedLine() {
  const [shouldRender, setShouldRender] = useState(false)
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      setShouldRender(true)
    }, 8500)

    // Cleanup fn
    return () => clearTimeout(delayDebounceFn)
  }, [shouldRender])

  return (
    <span>
      {shouldRender && (
        <ReactTyped
          strings={[
            '<span class="text-brand">"a full-stack web developer"&#59;</span>',
            '<span class="text-brand">"a content creator"&#59;</span>',
            '<span class="text-brand">"a streamer"&#59;</span>',
          ]}
          className="grow"
          typeSpeed={100}
          backSpeed={50}
          showCursor
          cursorChar="|"
          loop
          smartBackspace
        />
      )}
    </span>
  )
}

export default DelayedLine
