'use client'

import { Button } from "@mantine/core";
import { IconArrowBigRight } from "@tabler/icons-react";
import Image from "next/image"
import { useRouter } from "next/navigation"
import { ReactNode } from "react";

export function Landing() {

    const router = useRouter();

    return (
        <main className="h-vp-nav flex flex-col -mb-[1rem] justify-center items-center bg-white"
        >
            <div className="header mb-[1.25rem] flex justify-center items-center bg-white">
                <a className="flex justify-center items-center px-10 h-[100%]"
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
                            paddingRight: "0.4px",
                            opacity: '100%',
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
                <Button style={{ marginTop: "1.65rem", fontSize: "1.15rem", marginInline: "auto", border: "1.5px solid black", borderRadius: '11px', boxShadow: "7px 8px 0px -4px #000000ce" }}
                    color="#2DADB4" 
                    w="fit-content" 
                    rightSection={<IconArrowBigRight />} 
                    justify="center"
                    onClick={() => router.push("/events")}
                    h="3rem">Schedule</Button>
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