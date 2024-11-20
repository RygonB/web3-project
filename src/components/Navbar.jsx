import React, { useState } from "react";

const Navbar = () => {
  // État pour gérer l'ouverture/fermeture du menu
  const [menuOpen, setMenuOpen] = useState(false);

  // Fonction pour basculer l'état
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav style={styles.navbar}>
      {/* Logo et nom du site */}
      <div style={styles.logo}>
        <span style={styles.logoText}>Astrozon</span>
      </div>

      {/* Barre de recherche */}
      <div style={styles.searchContainer}>
        <input
          type="text"
          placeholder="Rechercher..."
          style={styles.searchInput}
        />
      </div>

      {/* Bouton Caddy */}
      <div style={styles.cartButton}>
        <button style={styles.button}>🛒</button>
      </div>

      {/* Menu hamburger */}
      <div style={styles.hamburger} onClick={toggleMenu}>
        <div style={styles.bar}></div>
        <div style={styles.bar}></div>
        <div style={styles.bar}></div>
      </div>

      {/* Menu déroulant */}
      {menuOpen && (
        <div style={styles.dropdown}>
          <a href="/pc-portable" style={styles.link}>PC Portable</a>
          <a href="/moniteur" style={styles.link}>Moniteur</a>
          <a href="/souris" style={styles.link}>Souris</a>
          <a href="/clavier" style={styles.link}>Clavier</a>
          <a href="/casque" style={styles.link}>Casque</a>
        </div>
      )}
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "1rem",
    backgroundColor: "#333",
    color: "#fff",
    position: "relative",
  },
  logo: {
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  logoText: {
    color: "#fff",
  },
  searchContainer: {
    flex: 1,
    marginLeft: "1rem",
    marginRight: "1rem",
  },
  searchInput: {
    width: "100%",
    padding: "0.5rem",
    borderRadius: "4px",
    border: "none",
  },
  cartButton: {
    marginRight: "1rem",
  },
  button: {
    background: "transparent",
    border: "none",
    color: "#fff",
    fontSize: "1.5rem",
    cursor: "pointer",
  },
  hamburger: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "1.5rem",
    cursor: "pointer",
  },
  bar: {
    width: "25px",
    height: "3px",
    backgroundColor: "#fff",
    marginBottom: "3px",
  },
  dropdown: {
    position: "absolute",
    top: "100%",
    right: "0",
    backgroundColor: "#444",
    borderRadius: "4px",
    padding: "0.5rem",
    zIndex: 10,
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    display: "block",
    padding: "0.5rem",
    fontSize: "1rem",
    borderRadius: "4px",
    transition: "background-color 0.3s",
  },
  linkHover: {
    backgroundColor: "#555",
  },
};

export default Navbar;
