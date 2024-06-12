import React from 'react';
import './about/Collection.css';
const Collection = ({ title, name, description, authorImage, authorName, authorRole, collectionImage }) => {
  return (
    <div className="collection-container">
      <div className="collection-info">
        <div className="trending-now">Trending Now</div>
        <h2 className="collection-title">{title}</h2>
        <h1 className="collection-name">{name}</h1>
        <p className="collection-description">
          {description}
        </p>
        <div className="collection-author">
          <img className="author-image" src={authorImage} alt="author" />
          <div className="author-info">
            <div className="author-name">{authorName}</div>
            <div className="author-role">{authorRole}</div>
          </div>
        </div>
      </div>
      <div className="collection-image">
        <img src={collectionImage} alt={name} />
      </div>
    </div>
  );
}

export default Collection;
