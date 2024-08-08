'use client'

import { ReactNode } from "react"

import Image from "next/image"

import { useRouter } from "next/navigation"

import { Element, scroller } from 'react-scroll';

export function Navbar() {

    const router = useRouter();

    return (
        <>
            <nav className="nav flex justify-center items-center m-auto
                bg-white
             ">
                <NavButton onClick={() => router.push("/")}>
                    Abbi&apos;s Story
                </NavButton>
                <NavButton onClick={() => router.push("/events")}>
                    Events
                </NavButton>
                <NavButton onClick={() => router.push("/")}>
                    Links
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