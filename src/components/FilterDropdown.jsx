import React, { useState } from 'react';

export default function FilterDropdown({ articles }) {
  const [sortOption, setSortOption] = useState('none');

  function handleSort(event) {
    const option = event.target.value;
    setSortOption(option);

    if (option === 'price') {
      articles.sort((a, b) => a.price - b.price);
    } else if (option === 'name') {
      articles.sort((a, b) => a.name.localeCompare(b.name));
    }
  }

  return (
    <div>
      <label for="filter">Trier par : </label>
      <select id="filter" value={sortOption} onChange={handleSort}>
        <option value="none">Aucun</option>
        <option value="price">Prix</option>
        <option value="name">Nom</option>
      </select>
    </div>
  );
}
