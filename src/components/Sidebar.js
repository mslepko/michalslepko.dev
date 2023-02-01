import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { stack as Menu } from "react-burger-menu"
import MenuLinks from "./menuLinks"
import Socials from "./socials"
import Footer from "./footer"

const Sidebar = () => (
  <aside
    className="
      w-full
      lg:w-[100px]
      lg:h-screen
      flex
      flex-col
      items-center
      justify-between
      bg-sidebar"
  >
      <StaticImage
        src="../images/ms_logo.webp"
        quality={10}
        formats={["webp", "png"]}
        alt="Michal Codes Logo"
        className=""
      />

      <Socials />

    <div className="hidden lg:flex w-full flex-col">

      <Footer />
    </div>

        <Menu right scaleRotate width={"100%"}>
        <MenuLinks
          classes="flex flex-col justify-center"
          linkClasses={"text-4xl"}
        />
      </Menu>
  </aside>
)

export default Sidebar
