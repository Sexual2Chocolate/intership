'use client'

import { useRouter } from 'next/navigation'
import React, { createContext, useContext, useState } from 'react';
import ConnectWallet from './walletbox';
import Wallet from '../wallet';

const ConnectWalletPage: React.FC = () => {


  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <header className="flex justify-between w-full p-8">
        <h1 className="text-3xl font-bold text-black">MARKETPLACE.</h1>
        <Wallet/>
      </header>
     <ConnectWallet/>
    </div>
  );
};

export default ConnectWalletPage;
