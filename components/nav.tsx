'use client'

import { ReactNode } from "react"

import Image from "next/image"

export function Navbar() {
    return (
        <>
            <div className="nav-top flex justify-center items-center bg-white">
                <a className="flex justify-center items-center px-10 h-[90%] w-[18rem]">
                <Image
                    src="/logo-bw.png"
                    alt="Description of image"
                    width={1000} // specify the width of the image
                    height={500} // specify the height of the image
                    priority
                    style={{
                        paddingRight: '0.4rem',
                        paddingTop: '0.25rem',
                        opacity: '100%',
                        height: '100%',
                        width: 'fit-content',
                    }}
                />
                </a>
            </div>
            <nav className="nav-bottom flex justify-center items-center w-[95%] m-auto
                border-t-[1.35px] border-t-[rgba(0,0,0,0.1)] bg-white
             ">
                <NavButton>
                    Abbi&apos;s Story
                </NavButton>
                <NavButton>
                    Events
                </NavButton>
                <NavButton>
                    Resources
                </NavButton>
            </nav>
        </>
    )
}

function NavButton(props: {children: string, link?: string}) {
    return (
        <button className="h-full text-center mx-[0.65rem] md:mx-6 lgmx-6 opacity-[95%]">
            {props.children}
        </button>
    )
}