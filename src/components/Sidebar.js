import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { pushRotate as Menu } from "react-burger-menu"
import MenuLinks from "./menuLinks"
import Socials from "./socials"

const Sidebar = () => (
  <aside
    className="
      w-[40px]
      md:w-[100px]
      h-screen
      min-h-fit
      overflow-y-auto
      flex
      flex-col
      items-center
      justify-between
      bg-sidebar"
  >
      <a href="/">
        <StaticImage
          src="../images/michalcodes_logo.png"
          quality={10}
          formats={["webp", "png"]}
          alt="Michal Codes Logo"
        />
      </a>

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
