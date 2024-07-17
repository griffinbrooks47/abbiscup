import Image from "next/image";

import { Inter, Kalam } from 'next/font/google';

const title = Inter({
  weight: '500',
  subsets: ['latin'],
})

import { IconTrophy } from '@tabler/icons-react';
import { ReactNode } from "react";

export default function Home() {

  return (
    <>
      <main className="h-vp-nav flex flex-col justify-center items-center bg-[#F5F5F5]"
      >
        <div className="flex justify-center w-[100%] flex-col">
          <div className="flex flex-[45%] justify-center items-center text-[3.5rem] my-[0.25rem] tracking-[-1px]">
            <h1 className={`${title.className} landing-title`}>
              Abbi&apos;s Cup
            </h1>
            <div className="w-[0.4rem]"></div>
            <IconTrophy color="black" fill="yellow" stroke={1.75} size={65}></IconTrophy>
          </div>
          <hr className="mt-[0.25rem] mb-[1.5rem] w-[23rem] mx-auto border-t-[0.5px] border-black"></hr>
          {/* Shadow Div Landing. */}
          <div className="flex flex-[55%] justify-center items-center">
            <div className="landing-desc h-auto">
              <div className="leading-[2.05rem]">
                <ShadowCard>
                  A soccer tournament designed to raise awareness for mental health, while encouraging Abbi&apos;s core values of courage, kindness, and inclusivity.
                </ShadowCard>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[8rem]">
         
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
            <div className="opacity-[90%] my-[1.5rem]">
              <p className="">Abigail (Abbi) Agosta was an amazing young woman who struggled with OCD from a very young age.  Despite this, she was a kind and loyal friend, a high achiever academically, and a talented and fierce competitor on the soccer field. She began playing soccer at the age of 5 and went on to become a goalkeeper for top teams in the DA, GA, and ECNL soccer organizations.</p>
            </div>
            <hr className="mt-[1rem] mb-[1rem] mx-auto border-t-[0.5px] border-black "></hr>
          </div>
        </div>
      </section>
      <section className="section-div flex m-auto bg-[#F5F5F5]">
        <div className="section-container flex justify-center w-full">
          <div className="text-container flex flex-col justify-center">
            <div className="opacity-[90%] my-[1.5rem]">
              <p className="text-center pt-[2rem]">Although the depth of her illness wasn&apos;t always evident, she struggled for many years with OCD, which in turn created high levels of anxiety and eventually depression. Her condition was not responsive to traditional therapies and treatments and became more debilitating and intrusive. Abbi faced every day with a relentless disease for as long as she could before her suffering ended at the age of 16 on March 5, 2024.</p>
            </div>
            <hr className="mt-[1rem] mb-[1rem] mx-auto border-t-[0.5px] border-black "></hr>
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
      
    </>
  );
}

function ShadowCard(props: {children: ReactNode}) {
  return (
    <div className="border-[1.25px] border-black shadow-div bg-white pl-[2.25rem] pr-[1.5rem] py-[1.5rem] flex justify-center items-center rounded-md">
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