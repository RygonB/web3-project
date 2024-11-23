import { useState } from 'react';
import { useCart } from '../context/CartContext';

const AddToCartButton = ({ item }) => { 
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);
  const handleAddToCart = () => {
    addToCart(item);
    setAdded(true);
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
