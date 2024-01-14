"use client";

import { IntroTextBanner } from "./assets";
import { Card, Footer, Navbar, Slider, FAQ } from "./components";
import { MuzikCards, faqCards } from "./content";
import { useState, useEffect } from 'react';

export default function Home() {

  const getCurrentTheme = () => (typeof window !== 'undefined' ? window.matchMedia('(prefers-color-scheme: dark)').matches : false);
  const [isScreenSizeValid, setIsScreenSizeValid] = useState(true);
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    const handleResize = () => { setIsScreenSizeValid(window.innerWidth >= 1000); };
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {window.removeEventListener('resize', handleResize);};
  }, []);

  return (
    <>
    {isScreenSizeValid ? 
      <main className={"flex min-h-screen flex-col items-center justify-between overflow-x-hidden " + (theme ? theme : "")}>
          <Navbar theme={!theme ? getCurrentTheme() : theme === "dark-theme" ? true : false} setTheme={(arg: string) => setTheme(arg)}/>
          <div className="w-[80%] mt-[100px]">
            <IntroTextBanner />
          </div>
          <Slider />
          <h1 className="text-center w-[80%] text-[2rem] mt-[100px] mb-[100px] font-black" id="download-section">
            Download, choose your variant from below
          </h1>
          <div className="w-[calc(100vw-20%)] ml-auto mr-auto flex flex-wrap justify-center">
            { MuzikCards.map((card, index) => <Card key={index} {...card} />) }
          </div>
          <h1 className="text-center w-[80%] text-[2rem] mt-[100px] mb-[100px] font-black" id="faq-section">
            FAQ
          </h1>
          { faqCards.map((faq, index) => <FAQ key={index} {...faq} />) }
          <div className="mb-[100px]" />
          <Footer />
        </main>
        :
        <main className={"flex min-h-screen items-center justify-center overflow-x-hidden " + (theme ? theme : "")}>
          <p className="text-[20px] ">Sorry, this website is only available for screens with width greater than 1000px.</p>
        </main>
      }
    </>
  )
}
