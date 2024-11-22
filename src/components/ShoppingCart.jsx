import React from "react";
import { useCart } from "../context/CartContext";
import "./ShoppingCart.css";

const ShoppingCart = () => {
  const { cartItems } = useCart(); // Assurez-vous que cette ligne utilise le bon chemin

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="shopping-cart-container">
      <h1>Votre panier :</h1>
      {cartItems.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <div key={index} className="shopping-cart-item">
              <img src={item.image} alt={item.name} className="shopping-cart-item-image" />
              <div className="shopping-cart-item-details">
                <h2>{item.name}</h2>
                <p>Prix : {item.price.toFixed(2)} €</p>
              </div>
            </div>
          ))}
          <div className="shopping-cart-total">
            <h2>Total : {totalPrice.toFixed(2)} €</h2>
          </div>
          <button className="pay-button">Payer</button>
        </>
      )}
    </div>
  );
};

export default ShoppingCart;
