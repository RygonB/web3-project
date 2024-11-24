import React from 'react';
import "./FilterDropdown.css"

export default function FilterDropdown({ onSort }) {
  function handleSort(event) {
    const option = event.target.value;
    onSort(option); 
  }

  return (
    <div>
      <label htmlFor="filter">Trier par : </label>
      <select className="filter-dropdown" id="filter" onChange={handleSort}>
        <option value="none">Aucun</option>
        <option value="price-asc">Prix (croissant)</option>
        <option value="price-desc">Prix (décroissant)</option>
        <option value="name-asc">Nom (A-Z)</option>
        <option value="name-desc">Nom (Z-A)</option>
      </select>
    </div>
  );
}
