'use client'

import { ReactNode } from "react"

import Image from "next/image"

import { useRouter } from "next/navigation"

export function Navbar() {

    const router = useRouter();

    return (
        <>
            <div className="nav-top flex justify-center items-center bg-white">
                <a className="flex justify-center items-center px-10 h-[90%] w-[18rem]"
                    style={{ cursor: "pointer" }}
                    onClick={() => router.push('/')}
                >
                <Image
                    src="/logo-bw.png"
                    alt="Description of image"
                    width={503} // specify the width of the image
                    height={186} // specify the height of the image
                    priority
                    style={{
                        paddingRight: '0.4rem',
                        paddingTop: '0.25rem',
                        height: "90%",
                        opacity: '100%',
                        width: 'fit-content',
                    }}
                />
                </a>
            </div>
            <nav className="nav-bottom flex justify-center items-center w-[95%] m-auto
                border-t-[1.35px] border-t-[rgba(0,0,0,0.1)] bg-white
             ">
                <NavButton onClick={() => router.push("/")}>
                    Abbi&apos;s Story
                </NavButton>
                <NavButton onClick={() => router.push("/events")}>
                    Events
                </NavButton>
                <NavButton onClick={() => router.push("/")}>
                    Resources
                </NavButton>
            </nav>
        </>
    )
}

function NavButton(props: {children: string, link?: string, onClick: () => void}) {
    return (
        <button className="h-full text-center font-semibold mx-[0.95rem] md:mx-6 lg:mx-6 opacity-[95%]"
            onClick={() => props.onClick()}
        >
            {props.children}
        </button>
    )
}