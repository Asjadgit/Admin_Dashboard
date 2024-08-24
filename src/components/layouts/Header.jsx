import React from 'react';
import { PiFramerLogoFill } from "react-icons/pi";
import './Header.css'; // Import the CSS file
import { NavLink, useNavigate } from 'react-router-dom';
import { TbLogout2 } from "react-icons/tb";

const Header = ({onLogout}) => {
    const navigate = useNavigate();
    const handleLogout  = () => {
        onLogout();
        navigate('/login');
    }
    return (
        <header className='header'>
            <div className="logo">
                <PiFramerLogoFill />
            </div>
            <nav className='header-links'>
                <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
                <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink>
                <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink>
                <div className='logout' onClick={handleLogout }>
                    <TbLogout2 title='Logout' />
                </div>
            </nav>
        </header>
    );
}

export default Header;
