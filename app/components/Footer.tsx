import Link from "next/link";
import Image from "next/image";
import { logo } from "../assets";

type FooterProps = {
    isLargeScreen: boolean;
}

export default function Footer(props: FooterProps) {
    return (
        <div className={`
            card-backdrop 
            h-[200px] p-[20px]
            ml-auto mr-auto rounded-[40px]
            bg-[var(--footer-col)] border-solid border border-[var(--footer-border-col)]` +
            (props.isLargeScreen ? ` mb-[40px] flex justify-between items-center w-[calc(100vw-200px)]` : ` mb-[5vw] flex flex-col w-[90vw]`)}>
            <Link href="/">
                <Image className={props.isLargeScreen ? "ml-[10px]" : ""} src={logo} height={32} width={118} alt="muzik"/>
            </Link>
            <div className={props.isLargeScreen ? "flex" : "flex flex-col mt-[20px]"}>
                <Link href="/" className={"text-[13px] w-[80px] cursor-pointer hover:opacity-80 text-[#ECECEC]"
                + (props.isLargeScreen ? " text-center" : "")}>Home</Link>
                <Link href="#download-section" className={"text-[13px] w-[80px] cursor-pointer outlined-text hover:opacity-80"
                + (props.isLargeScreen ? " text-center" : " mt-[10px]")}>Download</Link>
                <Link href="#faq-section" className={"text-[13px] w-[80px] cursor-pointer hover:opacity-80 text-[#ECECEC]"
                + (props.isLargeScreen ? " text-center" : " mt-[10px]")}>FAQ</Link>
                <a href="https://github.com/muzik-apps" className={"text-[13px] w-[80px] cursor-pointer hover:opacity-80 text-[#ECECEC]"
                + (props.isLargeScreen ? " text-center" : " mt-[10px]")}>github</a>
            </div>
        </div>
    )
}