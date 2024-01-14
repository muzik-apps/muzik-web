import Link from "next/link";
import Image from "next/image";
import { logo } from "../assets";

export default function Footer() {
    return (
        <div className="
            card-backdrop 
            w-[calc(100vw-200px)] h-[200px] mb-[40px] p-[20px]
            ml-auto mr-auto rounded-[40px] flex justify-between items-center
            bg-[var(--footer-col)] border-solid border border-[var(--footer-border-col)]">
            <Link href="/">
                <Image className="ml-[10px]" src={logo} height={32} width={118} alt="muzik"/>
            </Link>
            <div className="flex">
                <Link href="/" className="text-[13px] w-[80PX] cursor-pointer text-center hover:opacity-80 text-[#ECECEC]">Home</Link>
                <Link href="#download-section" className="text-[13px] w-[80PX] cursor-pointer text-center outlined-text hover:opacity-80">Download</Link>
                <Link href="#faq-section" className="text-[13px] w-[80PX] cursor-pointer text-center hover:opacity-80 text-[#ECECEC]">FAQ</Link>
                <a href="https://github.com/muzik-apps" className="text-[13px] w-[80PX] cursor-pointer text-center hover:opacity-80 text-[#ECECEC]">github</a>
            </div>
        </div>
    )
}