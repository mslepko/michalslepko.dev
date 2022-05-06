import * as React from "react"
import PropTypes from "prop-types"
import { StaticImage } from "gatsby-plugin-image"
import { stack as Menu } from 'react-burger-menu'
import MenuLinks from './menuLinks'
import Socials from './socials'

const Header = ({ siteTitle }) => (
  <header
    className="bg-blue p-4 w-full lg:w-1/3 lg:h-screen flex flex-col justify-between"
  >
    <div
      className="flex justify-between"
    >
      <div>
        <StaticImage
          src="../images/michalcodes.jpg"
          width={65}
          height={65}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="Michal"
          className="rounded-full"
        />
      </div>
    </div>

    <MenuLinks classes="hidden lg:flex flex-col"/>

    <div
      className="hidden lg:flex"
    >
      <Socials />
    </div>

    <div
      className="block lg:hidden"
    >
      <Menu
        right
        scaleRotate
        width={"100%"}
      >
         <MenuLinks classes="flex flex-col justify-center"/>
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
