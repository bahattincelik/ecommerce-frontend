import React, { createContext, useState, useEffect, useCallback } from 'react';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { auth, db } from './../firebase';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [userId, setUserId] = useState(null);
  const [initialLoad, setInitialLoad] = useState(true);

  // Kullanıcı kimliğini dinleyen `useEffect`
  useEffect(() => {
    console.log("Auth state change triggered");
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserId(user.uid);
        console.log("User authenticated. User ID set:", user.uid);
      } else {
        setUserId(null);
        console.log("User logged out. User ID set to null.");
      }
    });
    return () => unsubscribe();
  }, []);

  const userCartRef = userId ? doc(db, 'carts', userId) : null;





  // Sepeti Firebase'e kaydetme fonksiyonu
  const saveCartToFirebase = useCallback(async () => {
    if (!userCartRef || initialLoad) return; // İlk yükleme sırasında kaydetme işlemi yapma
    try {
      console.log("Saving cart to Firebase for user:", userId, "with items:", cartItems);
      await setDoc(userCartRef, { items: cartItems }, { merge: true });
      console.log("Cart successfully saved to Firebase for user:", userId);
    } catch (error) {
      console.error("Error saving cart to Firebase: ", error);
    }
  }, [userCartRef, cartItems, userId, initialLoad]); // Buraya `initialLoad` eklendi.





  // Sepeti Firebase'den yükleme fonksiyonu
  const loadCartFromFirebase = useCallback(async () => {
    if (!userCartRef || !initialLoad) return; // Eğer kullanıcı yoksa veya ilk yükleme tamamlandıysa işlem yapma
    try {
      console.log("Loading cart from Firebase for user:", userId);
      const cartSnapshot = await getDoc(userCartRef);
      if (cartSnapshot.exists()) {
        console.log("Cart data from Firebase for user:", userId, cartSnapshot.data().items);
        setCartItems(cartSnapshot.data().items || []);
      }
      setInitialLoad(false); // İlk yükleme tamamlandıktan sonra `initialLoad` false yap
    } catch (error) {
      console.error("Error loading cart from Firebase: ", error);
    }
  }, [userCartRef, userId, initialLoad]); // Buraya `initialLoad` eklendi.






  // `userId` değiştiğinde yalnızca `loadCartFromFirebase` fonksiyonunu çağır
  useEffect(() => {
    if (userId && initialLoad) {
      console.log("Triggering loadCartFromFirebase for userId change.");
      loadCartFromFirebase();
    }
  }, [userId, initialLoad, loadCartFromFirebase]);






  // `cartItems` her değiştiğinde `saveCartToFirebase` fonksiyonunu çağır (ilk yükleme kontrolü ile)
  useEffect(() => {
    if (!initialLoad) {
      console.log("Triggering saveCartToFirebase after cartItems change.");
      saveCartToFirebase();
    }
  }, [cartItems, saveCartToFirebase, initialLoad]);






  // Sepete ürün ekleme fonksiyonu
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingProductIndex = prevItems.findIndex((item) => item.id === product.id);
      if (existingProductIndex !== -1) {
        const updatedItems = [...prevItems];
        updatedItems[existingProductIndex].quantity += 1;
        console.log("Product already exists. Updated quantity for product:", product.id);
        return updatedItems;
      }
      console.log("New product added to cart:", product);
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };




  // Sepetten ürün çıkarmak fonksiyonu
  const removeFromCart = (id) => {
    console.log("Removing item from cart:", id);
    setCartItems(cartItems.filter((item) => item.id !== id));
  };



  // Sepetten ürün güncellemek fonksiyonu
  const updateCartItem = (id, updatedProduct) => {
    console.log("Updating item in cart:", id);
    setCartItems(cartItems.map((item) => (item.id === id ? updatedProduct : item)));
  };



  // Sepeti boşaltmak fonksiyonu
  const clearCart = () => {
    console.log("Clearing cart.");
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateCartItem, clearCart, saveCartToFirebase, loadCartFromFirebase,userId }}>
      {children}
    </CartContext.Provider>
  );
};
