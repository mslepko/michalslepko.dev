import * as React from "react"
import PropTypes from "prop-types"
import { StaticImage } from "gatsby-plugin-image"
import { stack as Menu } from 'react-burger-menu'
import MenuLinks from './menuLinks'
import Socials from './socials'
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
    <div
      className="flex items-center w-full pt-8"
    >
      <StaticImage
        src="../images/michalcodes.jpg"
        width={250}
        height={250}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="Michal"
        className="rounded-full mx-auto"
      />
    </div>

    <MenuLinks classes="hidden lg:flex flex-col" />

    <div
      className="hidden lg:flex w-full flex-col"
    >
      <Socials />
      <Footer />
    </div>

    <div
      className="block lg:hidden"
    >
      <Menu
        right
        scaleRotate
        width={"100%"}
      >
        <MenuLinks classes="flex flex-col justify-center" />
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
