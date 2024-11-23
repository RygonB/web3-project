import React from "react";
import { useCart } from "../context/CartContext";
import "./ShoppingCart.css";

const ShoppingCart = () => {
  const { cartItems, removeFromCart , addToCart } = useCart();

  console.log("Articles dans le panier :", cartItems);


 
  return (
    <div className="shopping-cart-container">
      <h1>Votre panier :</h1>
      <button onClick={() => addToCart({
        id: 2,
        name: "Clavier Mécanique",
        price: 59.99,
        image: "/images/clavierMeca.jpg",
      })}  className="remove-button"
            >
              Ajouter
            </button>
      {cartItems.map((item) => (
        <div key={item.id} className="shopping-cart-item">
          <img
            src={item.image}
            alt={item.name}
            className="shopping-cart-item-image"
          />
          <div className="shopping-cart-item-details">
            <h2>{item.name}</h2>
            <p>Prix : {item.price.toFixed(2)} €</p>
            <button
              onClick={() => removeFromCart(item)}
              className="remove-button"
            >
              Retirer
            </button>
          </div>
        </div>
      ))}
      <div className="shopping-cart-total">
        <h2>Total : {cartItems.reduce((total, item) => total + item.price, 0).toFixed(2)} €</h2>
      </div>
    </div>
  );
};

export default ShoppingCart;
