import React, { useState } from 'react';
import FilterDropdown from '../components/FilterDropdown.jsx';
import ArticleCard from './ArticleCard.jsx';
import "./CategoryArticle.css"

export default function CategoryArticles({ initialArticles, currentCategory }) {
  const [articles, setArticles] = useState(initialArticles);

  function handleSort(option) {
    let sortedArticles = [...articles];

    switch (option) {
      case 'price-asc':
        sortedArticles.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        sortedArticles.sort((a, b) => b.price - a.price);
        break;
      case 'name-asc':
        sortedArticles.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        sortedArticles.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        sortedArticles = initialArticles;
    }

    setArticles(sortedArticles); 
  }

  return (
    <>
      <div className="category-header">
        <div className="info">
          <span>{articles.length} articles disponibles</span>
        </div>
        <h1>{currentCategory.name}</h1>
        <FilterDropdown onSort={handleSort} />
      </div>

      <div className="article-grid">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </>
  );
}
