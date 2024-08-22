import React from 'react';
import { PiFramerLogoFill } from "react-icons/pi";
import './Header.css'; // Import the CSS file
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <header className='header'>
                <div className="logo">
                    <PiFramerLogoFill />
                </div>
                <nav className='header-links'>
                    <NavLink to="/" className={({isActive}) => isActive ? 'active' : ''}>Home</NavLink>
                    <NavLink to="/about" >About</NavLink>
                    <NavLink to="/contact" >Contact</NavLink>
                </nav>
            </header>
        </div>
    )
}

export default Header;
