import * as React from "react"

const HeroLine = ({lineNo, text, varName, varValue}) => (
  <p
  className="text-2xl"
>
  <span
    className="text-dark-blue pr-4"
  >
    {lineNo}.
  </span>
  <span
    className="text-stone-500"
  >
      {text}
  </span>
  <span
    className="text-purple"
  >
    {varName}&nbsp;=&nbsp;
  </span>
  <span
    className="text-blue"
  >
    {varValue}
  </span>
</p>
)

export default HeroLine