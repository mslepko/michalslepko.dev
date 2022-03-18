import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { stack as Menu } from 'react-burger-menu'

const Header = ({ siteTitle }) => (
  <header
    className="bg-blue p-4"
  >
    <div
      className="flex justify-between"
    >
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

    <Menu
      right
      scaleRotate
      width={"100%"}
    >
        <Link to="/"
          className="text-4xl text-dark-blue"
        >Home
        </Link>
        <Link to="/about"
          className="text-4xl text-dark-blue"
          >About</Link>
        <Link to="/uses"
          className="text-4xl text-dark-blue"
          >Uses</Link>

      </Menu>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
