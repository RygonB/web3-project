import React, { useState } from 'react';

const AddToCartButton = () => {
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    setAdded(true);
    alert('Produit ajouté au panier !');
    // Ajoutez ici la logique pour gérer le panier, comme un appel à une API ou un state global
    setTimeout(() => setAdded(false), 2000); // Réinitialise l'état après 2 secondes
  };

  return (
    <button
      onClick={handleAddToCart}
      style={{
        padding: '12px 24px',
        backgroundColor: added ? '#28a745' : '#007bff',
        color: '#fff',
        textAlign: 'center',
        border: 'none',
        borderRadius: '4px',
        fontSize: '16px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
      }}
      onMouseOver={(e) => {
        if (!added) e.target.style.backgroundColor = '#0056b3';
      }}
      onMouseOut={(e) => {
        if (!added) e.target.style.backgroundColor = '#007bff';
      }}
    >
      {added ? 'Ajouté !' : 'Ajouter au panier'}
    </button>
  );
};

export default AddToCartButton;
