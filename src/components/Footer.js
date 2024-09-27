import React from "react";
import './Footer.css'

const Footer = () => {
    return (

        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <h2>About Us</h2>
                    <p>
                        We are a leading e-commerce platform committed to providing the best products and excellent customer service. Explore our wide range of offerings.
                    </p>

                </div>
                <div className="footer-section links">
                    <h2>Quick Links</h2>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/products">Products</a></li>

                    </ul>

                </div>
                <div className="footer-section social">
                    <h2>Follow Us</h2>
                    <div className="social-icons">
                        <a href="https://www.facebook.com/"><i className="fab fa-facebook"></i></a>
                        <a href="https://x.com/"><i className="fab fa-twitter"></i></a>
                        <a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
                        <a href="https://www.linkedin.com/"><i className="fab fa-linkedin"></i></a>

                    </div>

                </div>

            </div>


            <div className="footer-bottom">
                <p>&copy; 2024 E-Commerce-Shop. Alle Rechte vorbehalten.</p>
            </div>

        </footer>
    );
};

export default Footer;