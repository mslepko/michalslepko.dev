import * as React from "react"
import PropTypes from "prop-types"
import Sidebar from "../Sidebar"
import Footer from "../footer"

const Layout = ({ children }) => {
  return (
    <>
      <div className="flex flex-row h-screen bg-dark-blue">
        <Sidebar />
        <div className="container mx-auto overflow-y-scroll bg-dark-blue h-screen">
          <main>{children}</main>
          <Footer />
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
