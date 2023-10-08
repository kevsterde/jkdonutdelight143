import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'
import logo from '../../images/logo.png'
function Navbar() {
    return (
        <header>

            <nav className="wrapper">
                <div className="logo">
                    <Link to="/"> <img src={logo} alt="logo" /> </Link>
                </div>

                <div className="items">
                    <div className="item">
                        <Link to="/donut">Donuts</Link>
                    </div>
                    <div className="item">
                        <Link to="/drinks">Drinks</Link>
                    </div>
                    <div className="item">
                        <Link to="/menu">Menu</Link>
                    </div>
                    <div className="item">
                        <Link to="/contact">Contact Us</Link>
                    </div>
                </div>

            </nav>
        </header>
    )
}

export default Navbar