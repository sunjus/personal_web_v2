import React from "react"
import Navbar from "./navbar"
import "../styles/global.css"

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <div className="content">{children}</div>
      <footer>
        <p>Copyright 2021 Sunjus</p>
      </footer>
    </div>
  )
}

export default Layout
