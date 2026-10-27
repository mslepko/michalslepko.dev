import * as React from "react"
// Import the single menu directly: the package root is CommonJS without
// static named exports, and this avoids bundling the other nine menus
import Menu from "react-burger-menu/lib/menus/pushRotate.js"
import MenuLinks from "./MenuLinks"

const MobileMenu = ({ currentPath }) => (
  <Menu width={"100%"} pageWrapId={"content"} outerContainerId={"page"}>
    <MenuLinks
      classes="flex flex-col justify-center"
      linkClasses={"text-4xl"}
      currentPath={currentPath}
    />
  </Menu>
)

export default MobileMenu
