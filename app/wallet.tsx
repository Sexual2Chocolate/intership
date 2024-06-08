'use client'
import { Link } from 'react-router-dom';
import { useNavigation } from 'next/navigation';
import { useRouter } from 'next/navigation'
import { redirect } from 'next/navigation'
import { useContext, useState } from 'react';
import WalletModal from './walletPage/walletModal';
import handleWalletButtonClick from './walletPage/page';


export default function ClientComponent() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [walletInfo, setWalletInfo] = useState({
      address: 'STV6Q...4Z7WD',
      balance: '0.129 BTC',
      nfts: []
    });
 const handleBuyNft = (nft) => {
    setWalletInfo((prevInfo) => ({
      ...prevInfo,
      nfts: [...prevInfo.nfts, nft]
    }));
  };
    const router = useRouter()

   



  const handleWalletButtonClick = () => {
    if (document.cookie === 'Boolean=false') {
      // Redirect to walletPage
      router.push('/walletPage');
    } else {
      setIsModalOpen((prevIsModalOpen) => !prevIsModalOpen);
    }
  };
function Name() {
  let name = "Connect Wallet";
  if (document.cookie === 'Boolean=true') {
    name = "Wallet";
  return name;
  }
return name;
}


  return (

    <main >
      <div>
        <button id="rcorners2" onClick={handleWalletButtonClick}>{Name()}</button>
        
      </div>
      <div className="App">
      </div>
       <WalletModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        walletInfo={walletInfo} 
        
         />

    </main>
  );

}