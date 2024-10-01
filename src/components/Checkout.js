import React, {useContext} from 'react'
import {CartContext} from './../context/CartContext'
import './Checkout.css'

const Checkout = () => {
const {cartItems, clearCart, userId} = useContext(CartContext); // Kullanıcı sepeti
const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0); // Toplam fiyat hesabı



 // Sipariş oluşturma fonksiyonu
 const handlePlaceOrder = async () => {
  try {
    // OrderItem formatında `items` listesini oluştur
    const formattedItems = cartItems.map((item) => ({
      productId: item.id, // Ürün ID'si
      name: item.name, // Ürün adı
      price: item.price, // Ürün fiyatı
      quantity: item.quantity, // Ürün miktarı
    }));


 // Sipariş verisini tanımla
 const orderData = {
  orderDate: new Date(),
  items: formattedItems, // Düzenlenmiş `items` verisi
  totalPrice,
  userId: userId, // Kullanıcı ID'si
};
    console.log('Order placed:', orderData);

    const response = await fetch('https://localhost:8080/api/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData),
    });

    if (response.ok) {
console.log('Order successfully placed, but failed to save order to the server.');
clearCart();
alert('Order successfully placed');

    
    }else {
      console.log('Failed to place order');
    }
  } catch (e) {
    console.error('Error placing order:', e);
    alert('Failed to place order');
  }
};




return (
    <div className="checkout-page">
      <h2>Checkout</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty. Please add items to your cart.</p>
      ) : (
        <div className="checkout-details">
          <h3>Order Summary:</h3>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} - {item.quantity} x {new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(item.price)}
              </li>
            ))}
          </ul>
          <h3>Total Price: {new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(totalPrice)}</h3>
          <button className="place-order-btn" onClick={handlePlaceOrder}>
  Place Order
</button>


        
        </div>
      )}

      
    </div>
  );
};

export default Checkout