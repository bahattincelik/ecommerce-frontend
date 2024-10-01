import React from "react";
import './Home.css';
import ProductList from './ProductList';

const Home = () => {
    return (
        <div className="home-page">
            <div className="slider">
                <div className="slide">
                    <img src="https://via.placeholder.com/1200x400" alt="Slider 1" />
                </div>
                <div className="slide">
                    <img src="https://via.placeholder.com/1200x400" alt="Slider 2" />
                </div>
                <div className="slide">
                    <img src="https://via.placeholder.com/1200x400" alt="Slider 3" />
                </div>
            </div>
            <div className="top-products">
                <h2>Top Products</h2>
                <ProductList />
            </div>

        </div>
    );
};

export default Home;