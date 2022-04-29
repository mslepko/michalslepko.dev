import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { stack as Menu } from 'react-burger-menu'
import Socials from './socials.js'

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

    <div className="hidden lg:flex flex-col">
    <Link to="/"
      className="text-4xl text-dark-blue mb-4"
      >Home</Link>
    <Link to="/about"
      className="text-4xl text-dark-blue mb-4"
      >About</Link>
    <Link to="/uses"
      className="text-4xl text-dark-blue mb-4"
    >Uses</Link>
    </div>

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
          <Link to="/"
            className="text-4xl text-dark-blue"
          >Home
          </Link>
          {/* <Link to="/about"
            className="text-4xl text-dark-blue"
            >About</Link> */}
          <Link to="/uses"
            className="text-4xl text-dark-blue"
            >Uses</Link>

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
