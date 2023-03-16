import * as React from "react"
import { pushRotate as Menu } from "react-burger-menu"
import MenuLinks from "../menuLinks"
import Socials from "./Socials"
import ThemeToggleSwitch from "../buttons/ThemeToggleSwitch";
import { Logo } from "../util/svgs"

const Sidebar = () => (
  <aside
    className="
      w-[40px]
      md:w-[100px]
      h-screen
      min-h-fit
      overflow-y-auto
      overflow-x-hidden
      flex
      flex-col
      items-center
      justify-between
      bg-light/30 dark:bg-darkest
      gap-y-4
      p-2"
  >
      <a href="/" className="logo text-dark dark:text-lightest w-full m-3">
        <Logo />
      </a>
      <div className="h-6 w-6"><ThemeToggleSwitch /></div>
      <div className="w-full h-[35px] p-2 bg-sidebar-light my-8">
        <Menu width={"100%"} pageWrapId={"content"} outerContainerId={"page"}>
          <MenuLinks
            classes="flex flex-col justify-center"
            linkClasses={"text-4xl"}
          />
        </Menu>
      </div>

      <Socials />


  </aside>
)

export default Sidebar
