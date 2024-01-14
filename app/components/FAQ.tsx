import { useState } from "react";

type FAQProps = { 
    question: string;
    answer: string;
}

export default function FAQ(props: FAQProps) {
    const [open, setOpen] = useState<boolean>(false);
    return (
        <div className="mb-[20px] ">
            <div className="flex w-[700px] ml-auto mr-auto items-center mt-[25px] mb-[40px] cursor-pointer" onClick={() => setOpen(!open)}>
                <h3 className="text-[25px] font-semibold w-[676px] text-center">{props.question}</h3>
                <svg className="svg-stroke" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.8 9.5999L12 14.3999L7.20005 9.5999" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
            <div className={"flex w-[700px] transition-all duration-200 ease-out overflow-hidden " + (open ? "max-h-fit" : "max-h-0")}>
                <p className="text-[20px] w-[700px] break-words text-wrap">{props.answer}</p>
            </div>
        </div>
    )
}