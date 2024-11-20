import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    console.log("Menu toggled! Current state:", menuOpen); // Vérifie si le clic fonctionne
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <span>Astrozon</span>
      </div>

      {/* Conteneur centré pour la barre de recherche */}
      <div className="navbar-search-container">
        <div className="navbar-search">
          <input
            type="text"
            placeholder="Rechercher..."
            className="navbar-search-input"
          />
          <button className="navbar-search-button">🔍</button>
        </div>
      </div>

      {/* Conteneur pour le caddy et le menu hamburger */}
      <div className="navbar-right">
        <div className="navbar-cart">
          <button className="navbar-cart-button">🛒</button>
        </div>
        <div className="navbar-hamburger" onClick={toggleMenu}>
          <div className="navbar-hamburger-bar"></div>
          <div className="navbar-hamburger-bar"></div>
          <div className="navbar-hamburger-bar"></div>
        </div>
      </div>

      {/* Menu déroulant */}
      {menuOpen && (
        <div className="navbar-dropdown">
          <a href="/pc-portable">PC Portable</a>
          <a href="/moniteur">Moniteur</a>
          <a href="/souris">Souris</a>
          <a href="/clavier">Clavier</a>
          <a href="/casque">Casque</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
