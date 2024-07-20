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

export default function Home() {

  const router = useRouter();

  return (
    <>
      <main className="h-vp-nav flex flex-col justify-center items-center bg-[#F5F5F5]"
      >
        <div className="flex justify-center w-[100%] flex-col">
          <div className="flex flex-[45%] justify-center items-center my-[0rem] tracking-[-1px]">
            <h1 className={`${title.className} landing-title my-[0]`}>
              Abbi&apos;s Cup
            </h1>
            <div className="w-[0.4rem]"></div>
            <IconTrophy color="black" fill="yellow" stroke={1.75} size={65}></IconTrophy>
          </div>
          <hr className="mt-[0rem] mb-[1rem] md:w-[23rem] w-[60%] mx-auto border-t-[0.5px] border-black"></hr>
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
            color="rgba(107, 184, 105, 1)" 
            w="fit-content" 
            rightSection={<IconArrowBigRight />} 
            justify="center"
            onClick={() => router.push("/events")}
            h="4.5rem">Schedule</Button>
        </div>
        <div className="h-[6rem]">
         
        </div>
      </main>
      <section className="section-div flex m-auto">
        <div className="section-container flex justify-center w-full">
          <Image
            src="/images/caption.jpg"
            alt="Caption Photo"
            height={723}
            width={457}
            className="image-container"
            style={{
              borderWidth: '1.25px',
              borderColor: 'black',
              paddingBottom: '4',
              backgroundColor: 'white', 
              display: 'flex',
              alignItems: 'center',
              boxShadow: '11px 11px 0px -4px #000000ce',
              borderRadius: '11px',
            }}></Image>
          <div className="text-container flex flex-col justify-center">
            <h1 className="text-4xl pt-[3rem]">Abigail Agosta</h1>
            <hr className="w-[100%] mt-[0.75rem] border-t-[0.5px] border-[rgba(0,0,0,0.2)]"></hr>
            <div className="opacity-[90%] mt-[0.75rem] mb-[2rem]">
              <p className="">Abigail (Abbi) Agosta was an amazing young woman who struggled with OCD from a very young age.  Despite this, she was a kind and loyal friend, a high achiever academically, and a talented and fierce competitor on the soccer field. She began playing soccer at the age of 5 and went on to become a goalkeeper for top teams in the DA, GA, and ECNL soccer organizations.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section-div flex m-auto bg-[#F5F5F5]">
        <div className="section-container flex justify-center items-center w-full">
          <div className="text-container flex flex-col justify-center items-center">
            <div className="opacity-[90%] mb-[1.5rem]">
              <p className="pt-[0] md:pt-[3rem]">Although the depth of her illness wasn&apos;t always evident, she struggled for many years with OCD, which in turn created high levels of anxiety and eventually depression. Her condition was not responsive to traditional therapies and treatments and became more debilitating and intrusive. Abbi faced every day with a relentless disease for as long as she could before her suffering ended at the age of 16 on March 5, 2024.</p>
            </div>
            <hr className="w-[100%] mb-[1.5rem] border-t-[0.5px] border-[rgba(0,0,0,0.2)]"></hr>
          </div>
          <Image
            src="/images/portrait.jpg"
            alt="Caption Photo"
            height={720}
            width={543}
            className="image-container"
            style={{
              borderWidth: '1.25px',
              borderColor: 'black',
              paddingBottom: '4',
              backgroundColor: 'white', 
              display: 'flex',
              alignItems: 'center',
              boxShadow: '11px 11px 0px -4px #000000ce',
              borderRadius: '11px',
            }}>
          </Image>
        </div>
      </section>
      <Resources />
      <section className="flex m-auto bg-[#F5F5F5] flex-col pb-[10rem]">
          <div className="mx-auto mt-[5rem] text-[0.85rem] md:text-[1.05rem] w-[85%] md:w-[30rem] text-center">
            As awkward as it may feel, we can ALL show up for our friends and family who might be struggling. These conversations are not easy and as stated earlier, whether it is you or someone else you care about that is struggling, it takes courage to speak up and to engage. Some great suggestions can be found on the webpage called Seize The Awkward, along with some stories of those who have helped, and been helped.
          </div>
          <Button style={{ marginTop: "1.65rem", fontSize: "1.15rem", marginInline: "auto", border: "1.5px solid black", borderRadius: '11px', boxShadow: "7px 8px 0px -4px #000000ce" }}
            color="rgba(107, 184, 105, 1)" 
            w="fit-content" 
            rightSection={<IconArrowBigRight />} 
            justify="center"
            h="3rem"><a href="https://seizetheawkward.org/" target="_blank">Seize the Awkward</a></Button>
          <div className="flex justify-center mb-[2rem] mt-[4rem] opacity-[80%]">
            <Title>#PlayLikeAbbi</Title>
          </div>
          
      </section>
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