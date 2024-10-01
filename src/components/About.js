import React from 'react'
import './About.css';

const About = () => {
    return (
        <div className="about-page">
            <h1>About Us</h1>
            <div className="about-content">
                <img src="https://via.placeholder.com/600x400" alt="About Us" />
                <div className="about-text">
                    <p>
                        We are a leading e-commerce company with a passion for providing the best products and services to our customers.
                        Our mission is to offer high-quality items with unbeatable customer support.
                    </p>
                    <p>
                        Founded in 2024, we have quickly grown to become one of the most trusted platforms in the industry. We believe in
                        continuous innovation and strive to improve our customer experience every day.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default About