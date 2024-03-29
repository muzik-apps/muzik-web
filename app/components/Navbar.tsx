import Image from "next/image";
import { logo } from "../assets";
import Link from 'next/link';
import { useState } from "react";

type NavbarProps = {
    isLargeScreen: boolean;
    theme: boolean;
    setTheme: (theme: string) => void;
}

export default function Navbar(props: NavbarProps) {
    const [menuSize, setMenuSize] = useState<string>("50px");

    function closeMenu(){
        const checkBox = document.getElementById("check") as HTMLInputElement;
        if(checkBox.checked){
            checkBox.checked = false;
        }
        if(menuSize !== "50px"){
            setMenuSize("50px");
        }
    }

    return (
        <>
            { props.isLargeScreen ?
                <div className="
                    fixed top-[20px] z-50
                    w-[calc(100vw-200px)] h-[50px]
                    ml-auto mr-auto rounded-[20px] flex justify-between items-center
                    backdrop-blur-[15px]
                    bg-[var(--glassy-blur-col)] border-solid border border-[var(--glassy-blur-border-col)]">
                        <Link href="/">
                            <Image className="ml-[10px]" src={logo} height={32} width={118} alt="muzik"/>
                        </Link>
                    <div className="flex">
                        <Link href="/" className="text-[13px] w-[100px] cursor-pointer text-center hover:opacity-80">Home</Link>
                        <Link href="#download-section" className="text-[13px] w-[100px] cursor-pointer text-center outlined-text hover:opacity-80">Download</Link>
                        <Link href="#faq-section" className="text-[13px] w-[100px] cursor-pointer text-center hover:opacity-80">FAQ</Link>
                    </div>
                    <div className="flex mr-[10px] w-[118px] justify-end">
                        <a href="https://github.com/muzik-apps" target="_blank" rel="noopener noreferrer">
                            <svg className="mr-[10px] svg-fill cursor-pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12.0001 0.5625C5.52881 0.5625 0.28125 5.80908 0.28125 12.2813C0.28125 17.459 3.63906 
                                21.8518 8.29531 23.4013C8.88098 23.5098 9.096 23.1471 9.096 22.8376C9.096 22.5581 9.08513 21.635 9.08009 20.6558C5.81989 21.3647 
                                5.13195 19.2731 5.13195 19.2731C4.59887 17.9186 3.83079 17.5584 3.83079 17.5584C2.76754 16.8311 3.91093 16.846 3.91093 
                                16.846C5.08771 16.9287 5.70734 18.0536 5.70734 18.0536C6.75254 19.8452 8.44881 19.3272 9.11754 19.0278C9.22272 18.2704 
                                9.52642 17.7534 9.86156 17.4608C7.25865 17.1645 4.52241 16.1596 4.52241 11.6693C4.52241 10.3899 4.9802 9.34446 5.72985 
                                8.52378C5.60818 8.22861 5.20705 7.0367 5.84337 5.42252C5.84337 5.42252 6.82745 5.10756 9.06689 6.62375C10.0017 6.36409 
                                11.0042 6.23388 12.0001 6.22942C12.996 6.23388 13.9993 6.36409 14.9358 6.62375C17.1726 5.10756 18.1553 5.42252 18.1553 
                                5.42252C18.7931 7.0367 18.3918 8.22861 18.2701 8.52378C19.0215 9.34446 19.4762 10.3899 19.4762 11.6693C19.4762 16.1703 
                                16.7348 17.1614 14.1252 17.4515C14.5456 17.8151 14.9201 18.5283 14.9201 19.6216C14.9201 21.1896 14.9065 22.4516 14.9065 
                                22.8376C14.9065 23.1494 15.1175 23.5149 15.7115 23.3998C20.3652 21.8485 23.7188 17.4573 23.7188 12.2813C23.7188 5.80908 
                                18.472 0.5625 12.0001 0.5625ZM4.67034 17.2562C4.64453 17.3145 4.55293 17.3319 4.46949 17.292C4.38449 17.2537 4.33675 
                                17.1744 4.36431 17.1159C4.38954 17.056 4.48133 17.0393 4.56613 17.0795C4.65132 17.1177 4.69984 17.1978 4.67034 
                                17.2562ZM5.24678 17.7706C5.19089 17.8224 5.08163 17.7983 5.0075 17.7164C4.93085 17.6348 4.91649 17.5255 4.97315 
                                17.4729C5.03079 17.4211 5.13674 17.4453 5.21359 17.527C5.29025 17.6097 5.30519 17.7182 5.24678 17.7706ZM5.64223 
                                18.4287C5.57043 18.4786 5.45303 18.4318 5.38045 18.3276C5.30865 18.2234 5.30865 18.0984 5.382 18.0483C5.45477 
                                17.9983 5.57043 18.0433 5.64398 18.1467C5.71559 18.2527 5.71559 18.3776 5.64223 18.4287ZM6.31104 19.1908C6.2468 
                                19.2617 6.10999 19.2427 6.00986 19.146C5.90739 19.0515 5.87887 18.9174 5.9433 18.8466C6.00831 18.7756 6.14589 
                                18.7955 6.2468 18.8914C6.34849 18.9857 6.37954 19.1208 6.31104 19.1908ZM7.1754 19.4481C7.14707 19.5399 7.0153 
                                19.5817 6.88257 19.5426C6.75002 19.5025 6.66328 19.395 6.69006 19.3022C6.71762 19.2098 6.84996 19.1664 6.98367 
                                19.2081C7.11602 19.2481 7.20296 19.3548 7.1754 19.4481ZM8.15908 19.5573C8.16238 19.6539 8.04983 19.7341 7.91049 
                                19.7358C7.77038 19.7389 7.65705 19.6607 7.6555 19.5656C7.6555 19.468 7.76553 19.3886 7.90564 19.3863C8.04498 
                                19.3836 8.15908 19.4612 8.15908 19.5573ZM9.12544 19.5202C9.14213 19.6145 9.04529 19.7114 8.90693 19.7372C8.77089 
                                19.762 8.64495 19.7038 8.62768 19.6103C8.6108 19.5136 8.70938 19.4168 8.84522 19.3918C8.98378 19.3677 9.10778 
                                19.4244 9.12544 19.5202Z" fill="#252525"/>
                            </svg>
                        </a>
                        {
                            props.theme ?
                            <svg className="cursor-pointer svg-stroke" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" 
                            onClick={() => props.setTheme("dark-theme")}>
                                <path d="M12 3.06197V2.3999M12 21.5999V20.9378M20.9379 11.9999H21.6M2.4 11.9999H3.06207M18.3206 
                                5.67991L18.7888 5.21176M5.21116 18.7881L5.67931 18.3199M18.3206 18.3199L18.7888 18.788M5.21116 
                                5.21171L5.67931 5.67986M17.2836 11.9637C17.2836 14.8889 14.9123 17.2602 11.9871 17.2602C9.06187 
                                17.2602 6.69052 14.8889 6.69052 11.9637C6.69052 9.03849 9.06187 6.66714 11.9871 6.66714C14.9123 
                                6.66714 17.2836 9.03849 17.2836 11.9637Z" stroke="#ECECEC" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                            :
                            <svg className="cursor-pointer svg-stroke" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" 
                            onClick={() => props.setTheme("light-theme")}>
                                <path d="M21.5999 14.6396C20.6977 14.9132 19.7404 15.0603 18.7487 15.0603C13.3307 15.0603 8.93856 
                                10.6682 8.93856 5.25018C8.93856 4.25896 9.08557 3.30208 9.35897 2.40015C5.33153 3.62153 2.40002 
                                7.36319 2.40002 11.7895C2.40002 17.2075 6.79218 21.5997 12.2102 21.5997C16.637 21.5997 20.3789 
                                18.6676 21.5999 14.6396Z" stroke="#252525" strokeWidth="2" strokeLinejoin="round"/>
                            </svg>
                        }
                    </div>
                </div>
                :
                <div className="
                    fixed top-[10px] z-50 overflow-hidden
                    w-[calc(100vw-20px)]
                    ml-auto mr-auto rounded-[15px] flex flex-col items-center
                    backdrop-blur-[15px]
                    bg-[var(--glassy-blur-col)] border-solid border border-[var(--glassy-blur-border-col)]
                    " style={{height: menuSize}}>
                        <div className="flex h-[50px] w-[100%] justify-between items-center flex-shrink-0">
                            <Link onMouseUp={closeMenu} href="/">
                                <Image className="ml-[10px]" src={logo} height={32} width={118} alt="muzik"/>
                            </Link>
                            <label 
                            className="flex flex-col w-[25px] mr-[10px]"
                            htmlFor="check"
                            onMouseUp={() => setMenuSize(menuSize === "50px" ? "calc(100vh - 20px)" : "50px")}>
                                <input type="checkbox" id="check"/> 
                                <span className="bg-[var(--text-color)] rounded-full h-[3px] w-[50%]"></span>
                                <span className="bg-[var(--text-color)] rounded-full h-[3px] w-[100%] mt-[5px]"></span>
                                <span className="bg-[var(--text-color)] rounded-full h-[3px] w-[75%] mt-[5px]"></span>
                            </label>
                        </div>
                        <div className="flex flex-col items-center h-[calc(60vh-70px)] justify-end flex-shrink-0">
                            <Link href="/" onMouseUp={closeMenu}
                            className="text-[13px] w-[100px] cursor-pointer text-center hover:opacity-80 mb-[50px]">
                                Home
                            </Link>
                            <Link href="#download-section" onMouseUp={closeMenu}
                            className="text-[13px] w-[100px] cursor-pointer text-center outlined-text hover:opacity-80 mb-[50px]">
                                Download
                            </Link>
                            <Link href="#faq-section" onMouseUp={closeMenu}
                            className="text-[13px] w-[100px] cursor-pointer text-center hover:opacity-80 mb-[50px]">
                                FAQ
                            </Link>
                        </div>
                        <div className="flex mt-[30px] w-[70px] justify-between">
                            <a href="https://github.com/muzik-apps" target="_blank" rel="noopener noreferrer">
                                <svg className="mr-[10px] svg-fill cursor-pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12.0001 0.5625C5.52881 0.5625 0.28125 5.80908 0.28125 12.2813C0.28125 17.459 3.63906 
                                    21.8518 8.29531 23.4013C8.88098 23.5098 9.096 23.1471 9.096 22.8376C9.096 22.5581 9.08513 21.635 9.08009 20.6558C5.81989 21.3647 
                                    5.13195 19.2731 5.13195 19.2731C4.59887 17.9186 3.83079 17.5584 3.83079 17.5584C2.76754 16.8311 3.91093 16.846 3.91093 
                                    16.846C5.08771 16.9287 5.70734 18.0536 5.70734 18.0536C6.75254 19.8452 8.44881 19.3272 9.11754 19.0278C9.22272 18.2704 
                                    9.52642 17.7534 9.86156 17.4608C7.25865 17.1645 4.52241 16.1596 4.52241 11.6693C4.52241 10.3899 4.9802 9.34446 5.72985 
                                    8.52378C5.60818 8.22861 5.20705 7.0367 5.84337 5.42252C5.84337 5.42252 6.82745 5.10756 9.06689 6.62375C10.0017 6.36409 
                                    11.0042 6.23388 12.0001 6.22942C12.996 6.23388 13.9993 6.36409 14.9358 6.62375C17.1726 5.10756 18.1553 5.42252 18.1553 
                                    5.42252C18.7931 7.0367 18.3918 8.22861 18.2701 8.52378C19.0215 9.34446 19.4762 10.3899 19.4762 11.6693C19.4762 16.1703 
                                    16.7348 17.1614 14.1252 17.4515C14.5456 17.8151 14.9201 18.5283 14.9201 19.6216C14.9201 21.1896 14.9065 22.4516 14.9065 
                                    22.8376C14.9065 23.1494 15.1175 23.5149 15.7115 23.3998C20.3652 21.8485 23.7188 17.4573 23.7188 12.2813C23.7188 5.80908 
                                    18.472 0.5625 12.0001 0.5625ZM4.67034 17.2562C4.64453 17.3145 4.55293 17.3319 4.46949 17.292C4.38449 17.2537 4.33675 
                                    17.1744 4.36431 17.1159C4.38954 17.056 4.48133 17.0393 4.56613 17.0795C4.65132 17.1177 4.69984 17.1978 4.67034 
                                    17.2562ZM5.24678 17.7706C5.19089 17.8224 5.08163 17.7983 5.0075 17.7164C4.93085 17.6348 4.91649 17.5255 4.97315 
                                    17.4729C5.03079 17.4211 5.13674 17.4453 5.21359 17.527C5.29025 17.6097 5.30519 17.7182 5.24678 17.7706ZM5.64223 
                                    18.4287C5.57043 18.4786 5.45303 18.4318 5.38045 18.3276C5.30865 18.2234 5.30865 18.0984 5.382 18.0483C5.45477 
                                    17.9983 5.57043 18.0433 5.64398 18.1467C5.71559 18.2527 5.71559 18.3776 5.64223 18.4287ZM6.31104 19.1908C6.2468 
                                    19.2617 6.10999 19.2427 6.00986 19.146C5.90739 19.0515 5.87887 18.9174 5.9433 18.8466C6.00831 18.7756 6.14589 
                                    18.7955 6.2468 18.8914C6.34849 18.9857 6.37954 19.1208 6.31104 19.1908ZM7.1754 19.4481C7.14707 19.5399 7.0153 
                                    19.5817 6.88257 19.5426C6.75002 19.5025 6.66328 19.395 6.69006 19.3022C6.71762 19.2098 6.84996 19.1664 6.98367 
                                    19.2081C7.11602 19.2481 7.20296 19.3548 7.1754 19.4481ZM8.15908 19.5573C8.16238 19.6539 8.04983 19.7341 7.91049 
                                    19.7358C7.77038 19.7389 7.65705 19.6607 7.6555 19.5656C7.6555 19.468 7.76553 19.3886 7.90564 19.3863C8.04498 
                                    19.3836 8.15908 19.4612 8.15908 19.5573ZM9.12544 19.5202C9.14213 19.6145 9.04529 19.7114 8.90693 19.7372C8.77089 
                                    19.762 8.64495 19.7038 8.62768 19.6103C8.6108 19.5136 8.70938 19.4168 8.84522 19.3918C8.98378 19.3677 9.10778 
                                    19.4244 9.12544 19.5202Z" fill="#252525"/>
                                </svg>
                            </a>
                            {
                                props.theme ?
                                <svg className="cursor-pointer svg-stroke" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" 
                                onClick={() => props.setTheme("dark-theme")}>
                                    <path d="M12 3.06197V2.3999M12 21.5999V20.9378M20.9379 11.9999H21.6M2.4 11.9999H3.06207M18.3206 
                                    5.67991L18.7888 5.21176M5.21116 18.7881L5.67931 18.3199M18.3206 18.3199L18.7888 18.788M5.21116 
                                    5.21171L5.67931 5.67986M17.2836 11.9637C17.2836 14.8889 14.9123 17.2602 11.9871 17.2602C9.06187 
                                    17.2602 6.69052 14.8889 6.69052 11.9637C6.69052 9.03849 9.06187 6.66714 11.9871 6.66714C14.9123 
                                    6.66714 17.2836 9.03849 17.2836 11.9637Z" stroke="#ECECEC" strokeWidth="2" strokeLinecap="round"/>
                                </svg>
                                :
                                <svg className="cursor-pointer svg-stroke" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" 
                                onClick={() => props.setTheme("light-theme")}>
                                    <path d="M21.5999 14.6396C20.6977 14.9132 19.7404 15.0603 18.7487 15.0603C13.3307 15.0603 8.93856 
                                    10.6682 8.93856 5.25018C8.93856 4.25896 9.08557 3.30208 9.35897 2.40015C5.33153 3.62153 2.40002 
                                    7.36319 2.40002 11.7895C2.40002 17.2075 6.79218 21.5997 12.2102 21.5997C16.637 21.5997 20.3789 
                                    18.6676 21.5999 14.6396Z" stroke="#252525" strokeWidth="2" strokeLinejoin="round"/>
                                </svg>
                            }
                    </div>
                </div>
            }
        </>
    )
}