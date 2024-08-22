import { useState } from "react";
import './SideBar.css';

const SideBar = () => {
    const [showProducts, setShowProducts] = useState(false);
    const [showAccessories, setShowAccessories] = useState(false);

    const toggleProducts = () => {
        setShowProducts(!showProducts);
    };

    const toggleAccessories = () => {
        setShowAccessories(!showAccessories);
    }

    return (
        <>
            <div className="sidebar">
                <a href="#">Overview</a>
                <a href="#" onClick={toggleProducts}>
                    Products
                </a>
                <div className={`nested-menu ${showProducts ? 'show' : ''}`}>
                    <a href="#">All Products</a>
                    <a href="#">Laptops</a>
                    <a href="#">Mobiles</a>
                    <a href="#" onClick={toggleAccessories}>
                        Accessories
                    </a>
                </div>
                <div className={`nested-menu ${showAccessories ? 'show' : ''}`}>
                    <a href="#">Batteries</a>
                    <a href="#">Chargers</a>
                    <a href="#">Earphones</a>
                    <a href="#">Bags</a>
                </div>
                <a href="#">
                    Orders
                </a>
                <a href="#">
                    Reports
                </a>
                <a href="#">
                    Customers
                </a>
            </div>
        </>
    );
};

export default SideBar;
