import React from 'react';
import './Collection.css';

const Collection = () => {
  return (
    <div className="collection-container">
      <div className="collection-info">
        <div className="trending-now">Trending Now</div>
        <h2 className="collection-title">Collection</h2>
        <h1 className="collection-name">Night Sky</h1>
        <p className="collection-description">
          Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempo.
        </p>
        <div className="collection-author">
          <img className="author-image" src="path-to-profile-picture" alt="author" />
          <div className="author-info">
            <div className="author-name">Léa Jacquot</div>
            <div className="author-role">Artist</div>
          </div>
        </div>
      </div>
      <div className="collection-image">
        <img src="path-to-collection-image" alt="Night Sky" />
      </div>
    </div>
  );
}

export default Collection;
