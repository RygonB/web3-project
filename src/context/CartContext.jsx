import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Souris Gamer RGB",
      price: 29.99,
      image: "/images/sourisErgoRGB.jpg",
    },
    {
      id: 2,
      name: "Clavier Mécanique",
      price: 59.99,
      image: "/images/clavierMeca.jpg",
    },
  ]);

  const addToCart = (item) => {
    console.log("Ajout au panier :", item);
    setCartItems([...cartItems, item]);
  };
  const removeFromCart = (item) => {
    console.log("Suppression du panier :", item);
    setCartItems(cartItems.filter((i) => i.id !== item.id));
  };

  console.log("CartProvider rendu avec des articles :", cartItems);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};




export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    console.warn("useCart appelé hors d'un CartProvider !");
    console.trace();
    return {
      cartItems: [],
      addToCart: () => console.error("Impossible d'ajouter au panier !"),
      removeFromCart: () => console.error("Impossible de retirer du panier !"),
    };
  }

  console.log("useCart appelé avec :", context.cartItems);
  return context;
};

