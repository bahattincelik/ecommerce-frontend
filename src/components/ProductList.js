import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/api/products')
      .then((response) => {
        setProducts(response.data); 
      })
      .catch((error) => {
        console.error('There was an error fetching the products!', error);
      });
  }, []);

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>Price: {product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
