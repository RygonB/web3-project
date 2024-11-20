import React from "react";
import Navbar from "./Navbar";

const CartWrapper = ({ children }) => {
  return (
    <>
      <Navbar />
       <main>{children}</main>
    </>
  );
};

export default CartWrapper;
