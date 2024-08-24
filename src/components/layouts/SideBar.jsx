import { useState } from "react";
import './SideBar.css';

const SideBar = () => {
    const [activeMenu, setActiveMenu] = useState(null);

    const toggleMenu = (menuName) => {
        setActiveMenu(activeMenu === menuName ? null : menuName);
    };

    return (
        <div className="sidebar">
            <a href="#">Overview</a>
            <a href="#" onClick={() => toggleMenu('products')}>
                Products
            </a>
            <div className={`nested-menu ${activeMenu === 'products' ? 'show' : ''}`}>
                <a href="#">All Products</a>
                <a href="#">Laptops</a>
                <a href="#">Mobiles</a>
                <a href="#" onClick={() => toggleMenu('accessories')}>
                    Accessories
                </a>
            </div>
            <div className={`nested-menu ${activeMenu === 'accessories' ? 'show' : ''}`}>
                <a href="#">Batteries</a>
                <a href="#">Chargers</a>
                <a href="#">Earphones</a>
                <a href="#">Bags</a>
            </div>
            <a href="#" onClick={() => toggleMenu('orders')}>
                Orders
            </a>
            <div className={`nested-menu ${activeMenu === 'orders' ? 'show' : ''}`}>
                <a href="#">All Orders</a>
                <a href="#">Pending</a>
                <a href="#">Delivered</a>
            </div>
            <a href="#">
                Reports
            </a>
            <a href="#" onClick={() => toggleMenu('customers')}>
                Customers
            </a>
            <div className={`nested-menu ${activeMenu === 'customers' ? 'show' : ''}`}>
                <a href="#">All Customers</a>
                <a href="#">New Customers</a>
                <a href="#">Old Customers</a>
            </div>
        </div>
    );
};

export default SideBar;
