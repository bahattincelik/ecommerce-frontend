import React, { useContext, useEffect } from 'react';
import { CartContext } from './../context/CartContext';
import "./Cart.css";

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext); 

  // Fonksiyonun doğru geldiğini kontrol edin
  console.log("removeFromCart fonksiyonu:", removeFromCart);

  useEffect(() => {
    console.log('Cart items updated', cartItems);
  }, [cartItems]); 

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.imageUrl || 'https://via.placeholder.com/150'} alt={item.name} />
              <div className="cart-item-info">
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <p className="cart-item-price">Price: {new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(item.price)}</p>
                <p className="cart-item-quantity">Quantity: {item.quantity}</p>
                {/* Remove butonunda da doğru fonksiyonu çağırdığınızdan emin olun */}
                <button className="remove-from-cart" onClick={() => removeFromCart(item.id)}>Remove</button>
       
       
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
