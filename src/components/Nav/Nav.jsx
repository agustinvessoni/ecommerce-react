import React from 'react'
import "./Nav.css"
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <ul className="nav-list">
        <li>
          <Link to={"/"} className='gold'>Inicio</Link>
        </li>
        <li>
          <Link to={"/carrito"} className='gold'>Carrito</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
