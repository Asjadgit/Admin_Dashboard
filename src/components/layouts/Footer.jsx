import React from 'react';
import './Footer.css'; // Import the CSS file
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-bottom">
                <p>&copy; 2024 My E-commerce. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
