'use client'

import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import '../wallet.css';
import '../about/NftCard.css';
import Rendernft from '../about/Rendernft';
interface WalletModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  walletInfo: {
    address: string;
    balance: number;
  };
  nfts?: { imgUrl: string;}; // Defined the NFT type properly
}


const WalletModal: React.FC<WalletModalProps> = ({ isOpen, onRequestClose, walletInfo, nfts }) => {
let nft = nfts;
let renderNfts: any;

 function handleBuy(nfts: any) {
   fetch('http://localhost:3000//Nftcard1/',);

const a= <div > <img src={nfts.imgUrl} className="nft-image-small" /></div>;
return a;
}






  return (
    
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Wallet Information"
      className="wallet-modal"
      overlayClassName="wallet-overlay"
    >
      <div className="wallet-content">
        <div className="wallet-header">
          <div className="wallet-address">{walletInfo.address}</div>
          <button onClick={onRequestClose} className="close-button">→</button>
        </div>
        <div className="wallet-balance">In your wallet: <span>{walletInfo.balance} BTC</span></div>
        <div className="wallet-nfts">
          <h3>Your NFTs</h3>
          {handleBuy(nfts)}
          <p>You don't own any NFTs yet</p>
          <button className="start-shopping">Start shopping</button>
        </div>
      </div>
    </Modal>
  );
}

export default WalletModal;
