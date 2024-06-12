import React, { useState } from 'react';
import './NftCard.css';
import WalletModal from '../walletPage/walletModal';
interface nfts {
  imgUrl: string;
  title?: string;
  desc?: string;
}


const NftCard: React.FC<nfts> = ({ imgUrl, title, desc }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [nfts, setNft] = useState<nfts>(imgUrl); // Changed to an array to handle multiple NFTs
  function handleBuy(nfts) {
    setNft({ imgUrl });
    setIsModalOpen(true);
      
  }
  function handleCloseModal() {
    setIsModalOpen(false);
  }
  const [walletInfo, setWalletInfo] = useState({
    address: 'STV6Q...4Z7WD',
    balance: 0.129 ,
  });




  
  return (
    <div
      className="nft-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={imgUrl} alt={title} className="nft-image" />
      {isHovered ? (
        <div className="hover-overlay">
          <button className="go-collection-button" onClick={() => handleBuy(nfts)} >Buy</button>
        </div>
      ) : (
        <div className="card-content">
          <h3>{title}</h3>
          <h4> {desc}</h4>
        </div>
      )}
      <WalletModal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        walletInfo={walletInfo}
        nfts={nfts}/>
    </div>
  );
};

export default NftCard;
