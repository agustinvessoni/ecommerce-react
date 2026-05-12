import React from 'react'
import "./Footer.css"
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
    return (
        <footer>
            <p className='gold'>Desarrollado por Agustín Vessoni</p>
            <nav>
                <ul className="nav-list-footer">
                    <li>
                        <a href="https://wa.me/1123456789" target="_blank" rel="noreferrer"> 
                            <FaWhatsapp className="icon-gold gold" />
                        </a>
                    </li>
                    <li>
                        <a href="https://instagram.com/agustin.vessoni" target="_blank" rel="noreferrer">
                            <FaInstagram className="icon-gold gold" />
                        </a>
                    </li>
                </ul>
            </nav>
        </footer>
    )
}

export default Footer
