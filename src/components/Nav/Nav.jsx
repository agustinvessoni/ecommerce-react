import React from 'react'
import "./Nav.css"
import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext';

const Nav = () => {

  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <nav>
      <ul className="nav-list">
        <li>
          <Link to={"/"} className='gold'>Inicio</Link>
        </li>
        <li>
          <Link to={"/category/clasico"} className='gold'>Clásicos</Link>
        </li>
        <li>
          <Link to={"/category/cronografo"} className='gold'>Cronógrafos</Link>
        </li>
        <li>
          <Link to={"/carrito"} className='gold'>
            Carrito
            {totalItems > 0 && (
              <span className='incart'>{totalItems}</span>
            )}
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
