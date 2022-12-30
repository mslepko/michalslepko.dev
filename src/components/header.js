import * as React from "react"
import PropTypes from "prop-types"
import { StaticImage } from "gatsby-plugin-image"
import { stack as Menu } from "react-burger-menu"
import MenuLinks from "./menuLinks"
import Socials from "./socials"
import Footer from "./footer"

const Header = ({ siteTitle }) => (
  <header
    className="p-4
      w-full
      lg:w-2/5
      lg:h-screen flex
      flex-col
      items-center
      justify-between
      bg-header"
  >
    <div className="flex items-start w-full pt-0 md:pt-8">
      <StaticImage
        src="../images/michalcodes.jpg"
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="Michal"
        className="rounded-full md:mx-auto max-w-90 max-h-90 md:max-w-300 md:max-h-300"
      />
    </div>

    <MenuLinks classes="hidden lg:flex flex-col" linkClasses={"text-4xl"} />

    <div className="hidden lg:flex w-full flex-col">
      <Socials />
      <Footer />
    </div>

    <div className="flex lg:hidden">
      <Menu right scaleRotate width={"100%"}>
        <MenuLinks
          classes="flex flex-col justify-center"
          linkClasses={"text-4xl"}
        />
      </Menu>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
