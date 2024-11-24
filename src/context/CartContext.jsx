import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();





export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <CartContext.Provider value={{}}>
      {children}
    </CartContext.Provider>
  );
};




export const useCart = () => {
  
const [cartItems, setCartItems] = useState([]);
  const addToCart = (item) => {
    console.log("Ajout au panier :", item);
    setCartItems([...cartItems, item]);
    console.log(cartItems)
  };
  
  const removeFromCart = (item) => {
    console.log("Suppression d'un article du panier :", item);
  
    const index = cartItems.findIndex((i) => i.id === item.id);
  
    if (index !== -1) {
      const updatedCart = [...cartItems];
      updatedCart.splice(index, 1);
      setCartItems(updatedCart);
    }
  
    console.log("Panier mis à jour après suppression :", cartItems);
  };
  
  
  const context = useContext(CartContext);

  
  if (!context) {
    return {
      cartItems: cartItems,
      addToCart: addToCart,
      removeFromCart: removeFromCart,
    };
  }

  console.log("useCart appelé avec :", context.cartItems);
  
  return context;
};

