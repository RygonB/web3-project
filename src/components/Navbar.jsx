import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import articles from "../data/articles";
import categories from "../data/categories";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredArticles, setFilteredArticles] = useState([]);
  const menuRef = useRef(null); 

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev); 
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false); 
    }
  };

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  const handleSearch = (query) => {
    const search = query.trim().toLowerCase();

    if (search.length > 0) {
      const articleResults = articles.filter(
        (article) =>
          article.name.toLowerCase().includes(search) ||
          article.category.toLowerCase().includes(search) ||
          article.description.toLowerCase().includes(search)
      );
      setFilteredArticles(articleResults);
    } else {
      setFilteredArticles([]);
    }
  };

  const handleInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    handleSearch(query);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const query = searchQuery.trim().toLowerCase();

      if (query.length > 0) {
        const matchedCategory = categories.find(
          (category) =>
            category.name.toLowerCase().includes(query) ||
            category.id.toLowerCase().includes(query)
        );

        if (matchedCategory) {
          window.location.href = `/category/${matchedCategory.id}`;
        }
      }
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/" className="navbar-logo-link">
          Astrozon
        </a>
      </div>

      <div className="navbar-search-container">
        <div className="navbar-search">
          <input
            type="text"
            placeholder="Rechercher..."
            className="navbar-search-input"
            value={searchQuery}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
          />
        </div>

        {searchQuery && (
          <div className="search-results">
            {filteredArticles.length > 0 ? (
              <div className="search-article-results">
                {filteredArticles.map((article) => (
                  <a
                    key={article.id}
                    href={`/article/${article.id}`}
                    className="search-result-item"
                  >
                    <img
                      src={article.image}
                      alt={article.name}
                      className="search-result-image"
                    />
                    <div className="search-result-info">
                      <h5>{article.name}</h5>
                      <p>{article.description}</p>
                      <span>${article.price.toFixed(2)}</span>
                    </div>
                  </a>
                ))}
              </div>
            ) : (
              <p className="search-no-results">Aucun article trouvé.</p>
            )}
          </div>
        )}
      </div>

      <div className="navbar-right">
        <div className="navbar-cart">
          <a href="/cart" className="navbar-cart-link">
            🛒
          </a>
        </div>
        <div className="navbar-hamburger" onClick={toggleMenu}>
          <div className="navbar-hamburger-bar"></div>
          <div className="navbar-hamburger-bar"></div>
          <div className="navbar-hamburger-bar"></div>
        </div>
      </div>

      <div
        ref={menuRef} 
        className={`navbar-dropdown ${menuOpen ? "active" : ""}`}
      >
        <button className="navbar-dropdown-close" onClick={toggleMenu}>
          ✖
        </button>
        <h3>Menu des Catégories</h3>
        {categories.map((category) => (
          <div className="navbar-dropdown-category" key={category.id}>
            <a href={`/category/${category.id}`} className="navbar-dropdown-link">
              {category.name}
            </a>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
