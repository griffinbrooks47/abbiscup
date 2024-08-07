import { ReactNode } from "react";
import Image from "next/image";


interface SectionDivProps {
    title?: string;
    orientation: boolean; // true -> left, false -> right
    imgSrc: string;
    imgHeight: number;
    imgWidth: number;
    children: ReactNode;
}

export function SectionDiv({ title, children, orientation, imgSrc, imgHeight, imgWidth } : SectionDivProps) {
    return (
        <section className="section-div flex m-auto mt-[2rem]">
            <div className={`section-container flex justify-center w-full ${orientation ? 'flex-row' : 'flex-row-reverse'}`}>
                <Image
                    src={imgSrc}
                    alt="Caption Photo"
                    height={imgHeight}
                    width={imgWidth}
                    className="image-container"
                    style={{
                        borderWidth: '1.25px',
                        borderColor: 'black',
                        paddingBottom: '4',
                        display: 'flex',
                        alignItems: 'center',
                        boxShadow: '11px 11px 0px -4px #000000ce',
                        borderRadius: '11px',
                }}></Image>
                <div className="text-container flex flex-col justify-center">
                    {title && 
                        <>
                            <h1 className="text-4xl pt-[3rem]">{title}</h1>
                            <hr className="w-[100%] mt-[0.75rem] border-t-[0.5px] border-[rgba(0,0,0,0.2)]"></hr>
                        </>
                    }
                    {!title && 
                        <div className="h-[2rem]"></div>
                    }
                    <div className="opacity-[90%] mt-[0.75rem] mb-[1rem]">
                        {children}
                    </div>
                    {!title && 
                        <div className="h-[2rem]"></div>
                    }
                </div>
            </div>
        </section>
    )
}