import { Link } from "gatsby"
import React from "react"

const Navbar = () => {
  return (
    <nav>
      <h1>Sunjus</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Portfolio Projects</Link>
      </div>
    </nav>
  )
}

export default Navbar