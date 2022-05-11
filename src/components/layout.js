import * as React from "react"
import Menu from "./menu/index.js"

const Layout = ({ location, title, children }) => {
  return (
    <div className="global-wrapper">
      <header>
        <Menu></Menu>
      </header>
      <main>{children}</main>
      <footer>
        
      </footer>
    </div>
  )
}

export default Layout
