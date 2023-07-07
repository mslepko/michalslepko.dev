import * as React from "react"
import PropTypes from "prop-types"
import Sidebar from "./Sidebar"
import Header from "./Header"
import Footer from "../footer"

const Layout = ({ children }) => {
  return (
    <>
      <div
        id="page"
        className="flex flex-row h-screen bg-light/30 dark:bg-darkest"
      >
        <Sidebar />
        <div
          id="content"
          className="w-full mx-auto overflow-y-scroll bg-light/30 dark:bg-darkest h-screen overflow-x-hidden flex flex-col"
        >
          <Header />
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
