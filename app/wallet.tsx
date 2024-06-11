'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react' ;
import WalletModal from './walletPage/walletModal';
import handleWalletButtonClick from './walletPage/page';


export default function ClientComponent() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    //const [nfts, setNfts] = useState<{ imgUrl: string; title: string; desc: string }[]>([]);
    const [walletInfo, setWalletInfo] = useState({
      address: 'STV6Q...4Z7WD',
      balance: '0.129 BTC',
      nfts: []

    });

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
    if (typeof document !== 'undefined' && document.cookie === 'Boolean=true') {
      name = "Wallet";
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
        nfts={[]}
             />

    </main>
  );

}