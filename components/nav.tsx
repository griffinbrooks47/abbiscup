'use client'

import { ReactNode } from "react"

import Image from "next/image"

import { usePathname, useRouter } from "next/navigation"

import { Element, scroller, Link } from 'react-scroll';
import { Router } from "next/router";

export function Navbar() {

    const router = useRouter();

    const url = usePathname();

    return (
        <>
            <nav className={`nav flex justify-center items-center m-auto bg-white ${url == '/events' ? 'hidden' : 'block'}`}>
                <NavButton onClick={() => router.push("/events")}>
                    Events
                </NavButton>
                <LinkButton link="resources">
                    Links
                </LinkButton>
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

function LinkButton(props: { children: string, link: string }) {

    const router = useRouter();

    const onScroll = () => {
        router.push("/");
        scroller.scrollTo(props.link, {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
        })
    }

    return (
        <button
            onClick={() => onScroll()}
            className="h-full text-center font-semibold mx-[0.95rem] md:mx-6 lg:mx-6 opacity-[95%] flex items-center cursor-pointer"
        >
            {props.children}
        </button>
    )
}