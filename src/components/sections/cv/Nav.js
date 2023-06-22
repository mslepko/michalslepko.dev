import * as React from "react"

const Nav = () => {
console.log('here');
  return (
    <div>
      <ul
        className="flex flex-col text-left md:flex-row space-y-5 md:space-y-0 md:space-x-6 text-xl md:text-2xl">
        <li className="text-left">
          <a href="#skills">
            Skills
          </a>
        </li>
        <li className="text-left">
          <a href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Nav