import React, { useState } from 'react';
import './NftCard.css';
import WalletModal from '../walletPage/walletModal';

interface nfts {
  imgUrl: string;
  title: string;
  desc: string;
  }


const NftCard: React.FC<nfts> = ({ imgUrl, title,desc }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [nfts, setNft] = useState<nfts[]>([]); // Changed to an array to handle multiple NFTs
nfts.push({ imgUrl, title, desc });
  function handleBuy(nfts) { 
    
    const a = nfts
    const b = <WalletModal nfts={[a]} isOpen={isModalOpen} onRequestClose={handleCloseModal} walletInfo={{ address: 'STV6Q...4Z7WD', balance: 0.129 }} />
console.log(a);
try {
  
} catch (error) {
  console.log(error);
}
    return b;
  }
  function handleCloseModal() {
    setIsModalOpen(false);
  }
  const [walletInfo, setWalletInfo] = useState({
    address: 'STV6Q...4Z7WD',
    balance: '0.129 BTC',
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
          <a href="./about">
          <button className="go-collection-button" onClick={()=>handleBuy(nfts)} >Buy</button>
          </a>
        </div>
      ) : (
        <div className="card-content">
          <h3>{title}</h3>
         <h4> {desc}</h4>
        </div>
      )}
    </div>
  );
};

export default NftCard;
