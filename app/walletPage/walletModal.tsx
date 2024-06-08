import React from 'react';
import Modal from 'react-modal';
import '../wallet.css';

const WalletModal = ({ isOpen, onRequestClose, walletInfo }) => {
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
        <p>You don't own any NFTs yet</p>
        <button className="start-shopping">Start shopping</button>
      </div>
    </div>
  </Modal>
  );
}

export default WalletModal;
