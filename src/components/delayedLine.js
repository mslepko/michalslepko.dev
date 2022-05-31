import React, { useState, useEffect } from 'react'
import Typed from 'react-typed'

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
      {shouldRender &&
        <Typed
          strings={[
            '<span class="text-var_value">"a full-stack web developer"&#59;</span>',
            '<span class="text-var_value">"a content creator"&#59;</span>',
            '<span class="text-var_value">"a streamer"&#59;</span>',
          ]}
          className="grow"
          typeSpeed={100}
          backSpeed={50}
          showCursor
          cursorChar="|"
          loop
          smartBackspace
        />
      }
    </span>
  )
}

export default DelayedLine