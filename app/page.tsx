'use client'

import Image from "next/image";

import localFont from "next/font/local";

import { Inter, Kalam } from 'next/font/google';

const title = Inter({
  weight: '500',
  subsets: ['latin'],
})

import { IconTrophy, IconArrowBigRight } from '@tabler/icons-react';
import { ReactNode } from "react";

import { useRouter } from "next/navigation";

import { Button, Title } from "@mantine/core";

import { Resources } from "@/components/resources";
import { Landing } from "@/components/landing";
import { About } from "@/components/about";
import { JaneCambell } from "@/components/janecambell";

export default function Home() {

  const router = useRouter();

  return (
    <>
      <div className="bg-div">

      </div>
      <main className="content-div">
        <Landing />
        <About />
        <JaneCambell />
        <Resources />
        <section className="flex m-auto bg-[#F5F5F5] flex-col pb-[10rem]">
            <div className="mx-auto mt-[5rem] text-[0.85rem] md:text-[1.05rem] w-[85%] md:w-[30rem] text-center">
              As awkward as it may feel, we can ALL show up for our friends and family who might be struggling. These conversations are not easy and as stated earlier, whether it is you or someone else you care about that is struggling, it takes courage to speak up and to engage. Some great suggestions can be found on the webpage called Seize The Awkward, along with some stories of those who have helped, and been helped.
            </div>
            <Button style={{ marginTop: "1.65rem", fontSize: "1.15rem", marginInline: "auto", border: "1.5px solid black", borderRadius: '11px', boxShadow: "7px 8px 0px -4px #000000ce" }}
              color="#4169E1" 
              w="fit-content" 
              rightSection={<IconArrowBigRight />} 
              justify="center"
              h="3rem"><a href="https://seizetheawkward.org/" target="_blank">Seize the Awkward</a></Button>
            <div className="flex justify-center mb-[2rem] mt-[4rem] opacity-[80%]">
              <Title>#PlayLikeAbbi</Title>
            </div>
            
        </section>
      </main>
      
    </>
  );
}

function ShadowCard(props: {children: ReactNode}) {
  return (
    <div className="border-[1.25px] border-black shadow-div bg-white pl-[1.75rem] md:pl-[2.25rem] pr-[1.35rem] py-[1.5rem] flex justify-center items-center rounded-md flex-col">
      {props.children}
    </div>
  )
}

function ImageCard(props: { children: ReactNode }) {
  return (
    <div className="border-[1.25px] border-black p-4 shadow-div bg-white flex justify-center items-center rounded-md pt-[1.75rem] pb-[2.25rem] px-[3rem]">
      {props.children}
    </div>
  )
}