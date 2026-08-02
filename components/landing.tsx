'use client'

import Image from "next/image"
import { useRouter } from "next/navigation"
import { ReactNode } from "react";
import { CtaButton } from "./ctabutton";

export function Landing() {

    const router = useRouter();

    return (
        <main className="h-vp-nav flex flex-col -mb-[1rem] justify-center items-center bg-white"
        >
            <div className="header mb-[1.25rem] flex justify-center items-center bg-white">
                <a className="flex justify-center items-center h-[100%]"
                    style={{ cursor: "pointer" }}
                    onClick={() => router.push('/')}
                >
                    <Image
                        src="/images/logofull.png"
                        alt="Description of image"
                        width={1010} // specify the width of the image
                        height={160} // specify the height of the image
                        priority
                        style={{
                            paddingRight: "0px",
                            opacity: '90%',
                            width: 'fit-content',
                            height: '90%'
                        }}
                    />
                </a>
            </div>
            <div className="flex justify-center w-[100%] flex-col">
                {/* Shadow Div Landing. */}
                <div className="flex flex-[55%] justify-center items-center">
                <div className="landing-desc h-auto">
                    <div>
                    <ShadowCard>
                        A soccer tournament designed to raise awareness for mental health, while encouraging Abbi&apos;s core values of courage, kindness, and inclusivity.
                    </ShadowCard>
                    </div>
                </div>
                </div>
                <CtaButton to="/events" className="mt-[1.65rem] mx-auto">Schedule</CtaButton>
            </div>
            <div className="h-[3rem]">
            
            </div>
        </main>
    )
}

function ShadowCard(props: {children: ReactNode}) {
    return (
      <div className="border-[1.25px] border-black shadow-div bg-white pl-[1.75rem] md:pl-[2.25rem] pr-[1.35rem] py-[1.5rem] flex justify-center items-center rounded-md flex-col">
        {props.children}
      </div>
    )
  }