import React from 'react';
import "./ArticleCard.css"

export default function ArticleCard({ article }) {
  return (
    <a href={`/article/${article.id}`} className="article-card">
      <img src={article.image} alt={article.name} className="article-image" />
      <div className="article-info">
        <h2>{article.name}</h2>
        <p>{article.description}</p>
        <p className="price">{article.price.toFixed(2)} €</p>
      </div>
    </a>
  );
}


