'use client'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Collection from './about/Collection';
import { useEffect } from 'react'

import { Slide } from 'react-slideshow-image';

import Slideshow from './Slideshow';  // Import the Slideshow component

import  NftCard  from './Nftcard';  // Import the NftCard component
import Footer from './about/Footer';
const PageContent = () => {
  onload = () => {
    document.cookie = `Boolean=false `   ;
  } 
    const imageData = [
    {
      imgUrl:
        "https://images.nightcafe.studio/jobs/ncLCr9cLdxrDwtW2IVSL/ncLCr9cLdxrDwtW2IVSL.jpg?tr=w-1600,c-at_max",
      title: "Moonlight Night",
      desc:"Lorem ipsum",

    },
    {
      imgUrl:
        "https://pics.craiyon.com/2023-10-28/0f0c639e74fe48a699283ab6f324ca7d.webp",
      title: "Sahara Deset",
      desc:"Lorem ipsum",

    },
    {
      imgUrl:
        "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmlnaHQlMjBjYW1waW5nfGVufDB8fDB8fHww",
      title: "Night Camping",
      desc:"Lorem ipsum",

    },
    {
      imgUrl:
        "https://img.freepik.com/free-photo/hiking-men-conquer-mountain-peak-adventure-awaits-generative-ai_188544-7877.jpg",
      title: "Trekking",
      desc:"Lorem ipsum",

    },
  ];

  const slideImages = imageData.map((image) => image.imgUrl);




  return (
    <div className="w-[70%] h-[100vh] pl-8">


      {/* ------------- Heading and filtera -------------*/}
      <div className="text-[#13353d] mt-4">
        <div>
          <text className=" font-semibold text-2xl">Marketplace</text>
        </div>
        <div className='slider-frame'>
          <Slideshow images={slideImages} />
        </div>
      </div>

      {/* ------------- Image Cards ------------- */}
      <div className="mt-2 flex flex-wrap justify-between">
                {imageData?.map((ele) => (
                <div className="w-[22%] mb-4">    
                      <NftCard
              key={ele.title}
              imgUrl={ele.imgUrl}
              title={ele.title}
              desc={ele.desc}
            />
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default PageContent;
