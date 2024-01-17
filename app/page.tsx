"use client";

import { IntroTextBanner } from "./assets";
import { Card, Footer, Navbar, Slider, FAQ } from "./components";
import { MuzikCards, faqCards } from "./content";
import { useState, useEffect } from 'react';

export default function Home() {

  const getCurrentTheme = () => (typeof window !== 'undefined' ? window.matchMedia('(prefers-color-scheme: dark)').matches : false);
  const [isLargeScreen, setIsLargeScreen] = useState(true);
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    const handleResize = () => { setIsLargeScreen(window.innerWidth >= 1000); };
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {window.removeEventListener('resize', handleResize);};
  }, []);

  return (
      <main className={"flex min-h-screen flex-col items-center justify-between overflow-x-hidden " + (theme ? theme : "")}>
        <Navbar 
          isLargeScreen={isLargeScreen}
          theme={!theme ? getCurrentTheme() : theme === "dark-theme" ? true : false} 
          setTheme={(arg: string) => setTheme(arg)}/>
        <div className={`w-[${isLargeScreen ? `80%` : `90vw`}] mt-[100px]`}>
          <IntroTextBanner />
        </div>
        { isLargeScreen ?
            <Slider />
            :
            <></>
        }
        <h1 className={`text-center w-[${isLargeScreen ? `80%` : `90vw`}] text-[2rem] mt-[100px] mb-[100px] font-black`} id="download-section">
          Download, choose your variant from below
        </h1>
        <div className="w-[calc(100vw-20%)] ml-auto mr-auto flex flex-wrap justify-center">
          { MuzikCards.map((card, index) => <Card key={index} {...card} />) }
        </div>
        <h1 className={`text-center w-[${isLargeScreen ? `80%` : `90vw`}] text-[2rem] mt-[100px] mb-[100px] font-black`} id="faq-section">
          FAQ
        </h1>
        { faqCards.map((faq, index) => <FAQ key={index} {...faq} />) }
        <div className="mb-[100px]" />
        <Footer />
      </main>
  )
}
