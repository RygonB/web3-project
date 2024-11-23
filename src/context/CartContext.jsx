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
    console.log("Suppression du panier :", item);
    setCartItems(cartItems.filter((i) => i.id !== item.id));
  };
  
  const context = useContext(CartContext);

  
  if (!context) {
    console.warn("useCart appelé hors d'un CartProvider !");
    return {
      cartItems: cartItems,
      addToCart: addToCart,
      removeFromCart: removeFromCart,
    };
  }

  console.log("useCart appelé avec :", context.cartItems);
  
  return context;
};

