import logo from "../../assets/logo-header-nav.png"
import React from 'react'
import Nav from "../Nav/Nav"
import "./Header.css"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="logo AV" className="logo" />
      </Link>
      <Nav/>
    </header>
  )
}

export default Header
