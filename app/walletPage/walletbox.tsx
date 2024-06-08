'use client';

import { useRouter } from 'next/navigation'
import React, { createContext, useContext,useState } from 'react';




const ConnectWallet: React.FC = () => {
  const [boolean, setBoolean] = useState(false);
  const handleClick = () => {
    setBoolean(!boolean);
document.cookie = `Boolean=${boolean} `;
        console.log(boolean);
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
         
      <main className="flex flex-col items-center justify-center flex-1 w-full">
        <h2 className="mb-8 text-2xl font-semibold text-black">Choose the wallet to connect</h2>
        <div className="flex space-x-8">
          <button className="w-24 h-24 bg-white rounded-lg shadow-md items-center justify-center" onClick={handleClick} >connect wallet</button>
          <button className="w-24 h-24 bg-white rounded-lg shadow-md items-center justify-center"onClick={handleClick}>connect wallet</button>
          <button className="w-24 h-24 bg-white rounded-lg shadow-md items-center justify-center"onClick={handleClick}>connect wallet</button>
        </div>
      </main>
    </div>
  );
};

export default ConnectWallet;
