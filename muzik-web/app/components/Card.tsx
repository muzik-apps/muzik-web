import Image from 'next/image';

type CardProps = {
    empty: boolean;
    logo: any;
    description: string;
    button_colour_var: string;
    download_link: string | null;
}

export default function Card(props: CardProps) {
    return (
        <>
        { props.empty ? <div className="w-[400px] h-[350px] ml-[50px] mr-[50px] mb-[100px]" />
            :
            <div className="
            card-backdrop hover:scale-[1.03] transition-all duration-500 ease-in-out
            w-[400px] h-[350px]
            ml-[50px] mr-[50px] mb-[100px] 
            rounded-[30px] flex flex-col justify-end 
            p-[20px]
            bg-[var(--glassy-blur-col)] border-solid border border-[var(--glassy-blur-border-col)]">
                <Image className="mt-[0px] ml-auto mr-auto" height={108} width={400} src={props.logo} alt="my_library"/>
                <h3 className="w-[360px] mt-[20px] h-[100px] text-[20px]">
                    {props.description}
                </h3>
                { 
                
                props.download_link ? 
                    <a className={`
                    hover:scale-[1.03] active:scale-[0.98] transition-all duration-500 ease-in-out
                        w-[360px] h-[50px] rounded-[20px] mt-[20px]
                        ${props.button_colour_var}
                        flex items-center`}
                        href={props.download_link}
                        target="_blank" rel="noopener noreferrer">
                            <h4 className="text-[20px] w-[100%] cursor-pointer text-center text-[#ECECEC]">
                                download
                            </h4>
                    </a>
                    :
                    <div className="w-[360px] h-[50px] rounded-[20px] mt-[20px] bg-[var(--text-color)] flex items-center">
                        <h4 className="text-[20px] w-[100%] text-center text-[var(--alt-text-color)]">coming soon</h4>
                    </div>
                }
            </div>
            }
        </>
    )
}
