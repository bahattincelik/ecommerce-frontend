import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProductList.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // API'den ürünleri çekme
    axios.get('http://localhost:8080/api/products')
      .then((response) => {
        console.log('Products:', response.data);
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('There was an error fetching the products!', error);
      });
  }, []);

  return (
    <div className="product-list">
      <h1>ProductList</h1>
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <img src={product.imageUrl || 'https://via.placeholder.com/250'} alt={product.name} className="product-image" />
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p className="price">Price: {product.price} ₺</p>
          <button className="add-to-cart">Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
