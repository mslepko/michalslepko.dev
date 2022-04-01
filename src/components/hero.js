import * as React from "react"
import HeroLine from "./heroline"

const Hero = () => (
  <div
    className="flex flex-col space-y-2
    justify-center align-center
    p-8
    bg-light-blue/50
    "
  >
    <HeroLine lineNo="1" text="// Hello World!" />
    <HeroLine lineNo="2" varName="$name" varValue="'Michal';" />
    <HeroLine lineNo="3" varName="$description" varValue="'A web developer based in the UK';" />
  </div>
)

export default Hero