import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import '../wallet.css';

interface WalletModalProps {
  isOpen: boolean;
  onRequestClose?: () => void;
  walletInfo: {
    address: string;
    balance: number;
  };
  nfts?: { imgUrl: string; title: string; desc: string }[]; // Defined the NFT type properly
}


const WalletModal: React.FC<WalletModalProps> = ({ isOpen, onRequestClose, walletInfo, nfts }) => {


useEffect(() => {
    if(nfts){
      console.log (nfts);
    }
  });
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
          {nfts&& nfts.length === 0 ? (
            <p>You don't own any NFTs yet</p>
          ) : (
            <ul>
              {nfts&&nfts.map((nft: any, index: any) => (
                <li key={index}>
                  <img src={nft.imgUrl} alt={nft.title} className="nft-image-small" />
                  <div>{nft.title}</div>
                  <div>{nft.desc}</div>
                </li>
              ))}
            </ul>
          )}
        

          <p>You don't own any NFTs yet</p>
          <button className="start-shopping">Start shopping</button>
        </div>
      </div>
    </Modal>
  );
}

export default WalletModal;
