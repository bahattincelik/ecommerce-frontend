import React from "react";
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <h1>E-Commerce</h1>
            </div>
            <ul className="navbar-links">
                <li><a href="/">Home</a></li>
                <li><a href="/products">Products</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>

            </ul>
            <div className="navbar-search">
                <input type="text" placeholder="Search products" />
                <button>Search</button>
            </div>
            <div className="navbar-account">
                <a href="/account"><i className="fas fa-user"></i> My Konto</a>
            </div>
        </nav>
    );
};

export default NavBar;