import React, { useState } from 'react';
import './NftCard.css';

interface NftCardProps {
  imgUrl: string;
  title: string;
 desc : string;
}

const NftCard: React.FC<NftCardProps> = ({ imgUrl, title, desc}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="nft-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={imgUrl} alt={title} className="nft-image" />
      {isHovered ? (
        <div className="hover-overlay">
          <a href="./about">
          <button className="go-collection-button" >Go to collection</button>
          </a>
        </div>
      ) : (
        <div className="card-content">
          <h3>{title}</h3>
         <h3> {desc}</h3>
        </div>
      )}
    </div>
  );
};

export default NftCard;
