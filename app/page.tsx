import Image from "next/image";
import PageContent from "./page-content";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NftCard from "./Nftcard";
import Wallet from "./wallet";

import { createContext, useState } from "react";


const nfts: any = null;

export default function Home() {
  return (
   
    <main className="flex min-h-screen flex-col items-center justify-between p-5">


      <div>
      <Wallet/>
    <PageContent />
      </div>
      <div className="App">
     
    </div>

    </main>
  );
}
