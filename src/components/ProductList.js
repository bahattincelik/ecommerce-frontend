import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import './ProductList.css';
import { CartContext } from '../context/CartContext';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    axios.get('https://localhost:8080/api/products')
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
      {products.map((product, index) => (
        <div className="product-card" key={product.id || index}>
          <img src={product.imageUrl || 'https://via.placeholder.com/250'} alt={product.name} className="product-image" />
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p className="price">Price: {new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(product.price)} </p>
          <button className="add-to-cart" onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
