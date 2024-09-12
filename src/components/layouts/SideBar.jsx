import { useState } from "react";
import './SideBar.css';
import { NavLink, useNavigate } from "react-router-dom";

const SideBar = () => {
    const [activeMenu, setActiveMenu] = useState(null);
    const navigate = useNavigate();

    const toggleMenu = (menuName) => {
        setActiveMenu(activeMenu === menuName ? null : menuName);
    };

    return (
        <div className="sidebar">
            <NavLink to="/">Overview</NavLink>
            <a href="#" onClick={() => toggleMenu('products')}>
                Products
            </a>
            <div className={`nested-menu ${activeMenu === 'products' ? 'show' : ''}`}>
                <NavLink to="/all-products">All Products</NavLink>
                <NavLink to="/new-product">Add New Product</NavLink>
            </div>
            <a href="#" onClick={() => toggleMenu('orders')}>
                Orders
            </a>
            <div className={`nested-menu ${activeMenu === 'orders' ? 'show' : ''}`}>
                <NavLink to="/all-orders">All Orders</NavLink>
                <NavLink to="/pending-orders">Pending</NavLink>
                <NavLink to="/delivered-orders">Delivered</NavLink>
            </div>
            <a href="#" onClick={() => toggleMenu('customers')}>
                Customers
            </a>
            <div className={`nested-menu ${activeMenu === 'customers' ? 'show' : ''}`}>
                <NavLink to="/customers">All Customers</NavLink>
            </div>
        </div>
    );
};

export default SideBar;
