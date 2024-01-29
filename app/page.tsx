"use client";

import { IntroTextBanner, artist_discovery, full_screen_song, my_library } from "./assets";
import { Card, Footer, Navbar, Slider, FAQ } from "./components";
import { MuzikCards, faqCards } from "./content";
import { useState, useEffect } from 'react';
import Image from "next/image";

export default function Home() {
  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(true);
  const [theme, setTheme] = useState<boolean>(false);

  useEffect(() => {
    const getCurrentTheme = () => (typeof window !== 'undefined' ? window.matchMedia('(prefers-color-scheme: dark)').matches : false);
    const handleResize = () => { setIsLargeScreen(window.innerWidth >= 1000); };
    handleResize();

    window.addEventListener('resize', handleResize);
    setTheme(getCurrentTheme());
    return () => {window.removeEventListener('resize', handleResize);};
  }, []);

  return (
      <main className={"flex min-h-screen flex-col items-center justify-between overflow-x-hidden " + (theme ? "dark-theme" : "light-theme")}>
        <Navbar 
          isLargeScreen={isLargeScreen}
          theme={!theme} 
          setTheme={(arg: string) => setTheme(arg === "light-theme" ? false : true)}/>
        <div className={`w-[${isLargeScreen ? `80%` : `90vw`}] mt-[100px]`} />
          <IntroTextBanner />
        { isLargeScreen ?
            <Slider />
            :
            <>
              <Image className="w-[calc(100vw-20%)] mr-auto ml-auto mt-[50px] mb-[20px] rounded-[10px] svg-shadow" src={my_library} alt="muzik"/>
              <Image className="w-[calc(100vw-20%)] mr-auto ml-auto mt-[50px] mb-[20px] rounded-[10px] svg-shadow" src={artist_discovery} alt="muzik"/>
              <Image className="w-[calc(100vw-20%)] mr-auto ml-auto mt-[50px] mb-[20px] rounded-[10px] svg-shadow" src={full_screen_song} alt="muzik"/>
            </>
        }
        {
          isLargeScreen ?
            <h1 className={`text-center w-[80%] text-[2rem] mt-[100px] mb-[100px] font-black text-wrap`} id="download-section">
              Download, choose your variant from below
            </h1>
            :
            <h1 className={`text-center w-[90vw] text-[2rem] mt-[100px] mb-[100px] font-black text-wrap`} id="download-section">
              Download, choose your variant from below
            </h1>
        }
        <div className="w-[calc(100vw-20%)] ml-auto mr-auto flex flex-wrap justify-center">
          { MuzikCards.map((card, index) => <Card key={index} isLargeScreen={isLargeScreen} {...card} />) }
        </div>
        <h1 className={`text-center w-[${isLargeScreen ? `80%` : `90vw`}] text-[2rem] mt-[100px] mb-[100px] font-black`} id="faq-section">
          FAQ
        </h1>
        { faqCards.map((faq, index) => <FAQ key={index} isLargeScreen={isLargeScreen} {...faq} />) }
        <div className="mb-[100px]" />
        <Footer isLargeScreen={isLargeScreen} />
      </main>
  )
}
