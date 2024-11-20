import React from "react";
import { CartProvider } from "../context/CartContext.jsx";
import Navbar from "../components/Navbar.jsx";

const CartWrapper = ({ children }) => {
  return (
    <CartProvider>
      <Navbar />
      {children}
    </CartProvider>
  );
};

export default CartWrapper;
