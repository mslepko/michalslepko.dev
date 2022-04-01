import * as React from "react"

const HeroLine = ({lineNo, text, varName, varValue}) => {
  const textOutput = text ? <span className="text-stone-500">{text}</span> : null;
  const nameOutput = varName ? <span className="text-purple">{varName}&nbsp;=&nbsp;</span> : null;
  const valueOutput = varValue ? <span className="text-blue">{varValue}</span> : null;

  return (
    <p
      className="text-2xl"
    >
    <span
      className="text-dark-blue pr-4"
    >
      {lineNo}.
    </span>
    {textOutput}
    {nameOutput}
    {valueOutput}
  </p>
  )
}

export default HeroLine