import * as React from "react"
import DelayedLine from "./delayedLine"
import Typed from 'react-typed'
import MenuLinks from "./menuLinks"
import Footer from "./footer"

const Hero = () => {

  return (
    <div
      className="flex flex-col space-y-2
    justify-center align-center
    p-16
    bg-dark-blue
    grow
    h-screen
    w-screen
    "
    >
      <div>
        <p className="text-2xl md:text-5xl pb-1 md:pb-6">
          <span className="text-dark pr-6 md:pr-14">1</span>
          <Typed
            strings={[
              '<span class="text-gray">// Hello World!</span>'
            ]}
            className="grow"
            typeSpeed={100}
            backSpeed={50}
            showCursor={false}
            cursorChar="|"
            loop={false}
          />
        </p>

        <p className="text-2xl md:text-5xl pb-1 md:pb-6">
          <span className="text-dark pr-6 md:pr-14">2</span>
          <Typed
            strings={[
              '<span class="text-var_name">$name&nbsp;=&nbsp;</span><span class="text-var_value">"Michal";</span>'
            ]}
            className="grow"
            typeSpeed={100}
            backSpeed={50}
            showCursor={false}
            cursorChar="|"
            loop={false}
            startDelay={3000}
          />
        </p>

        <p className="text-2xl md:text-5xl pb-1 md:pb-6 min-h-68">
          <span className="text-dark pr-6 md:pr-14">3</span>
          <Typed
            strings={[
              '<span class="text-var_name">$description&nbsp;=&nbsp;</span>'
            ]}
            className="grow"
            typeSpeed={100}
            backSpeed={50}
            showCursor={false}
            cursorChar="|"
            loop={false}
            startDelay={6500}
          />

          <DelayedLine />
        </p>
      </div>
      <div className="absolute inset-x-0 bottom-0">
        <MenuLinks
          hideHome={true}
          classes={"flex justify-around m-auto max-w-screen-sm"}
          linkClasses={"text-white hover:text-var_value"}
        />
        <Footer />
      </div>
    </div>
  )
}

export default Hero