import Image from "next/image"

import { Collapse } from "@mantine/core"

export function About() {
    return (
        <main className="section-border-top -mb-[9rem] blue-gradient relative z-[1] pt-[4rem] pb-[10rem]">
            <section className="section-div flex m-auto mt-[2rem]">
                <div className="section-container flex justify-center w-full">
                    <Image
                        src="/images/AbbiNew1.jpeg"
                        alt="Caption Photo"
                        height={830}
                        width={620}
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
                        <h1 className="text-4xl pt-[3rem]">Abigail Agosta</h1>
                        <hr className="w-[100%] mt-[0.75rem] border-t-[0.5px] border-[rgba(0,0,0,0.2)]"></hr>
                        <div className="opacity-[90%] mt-[0.75rem] mb-[2rem]">
                            <p className="">Abigail (Abbi) Agosta was an amazing young woman who struggled with OCD from a very young age.  Despite this, she was a kind and loyal friend, a high achiever academically, and a talented and fierce competitor on the soccer field. She began playing soccer at the age of 5 and went on to become a goalkeeper for top teams in the DA, GA, and ECNL soccer organizations.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-div flex m-auto">
                <div className="section-container flex justify-center items-center w-full">
                    <div className="text-container flex flex-col justify-center items-center">
                        <div className="opacity-[90%] mb-[1.5rem]">
                            <p className="pt-[0] md:pt-[3rem]">Although the depth of her illness wasn&apos;t always evident, she struggled for many years with OCD, which in turn created high levels of anxiety and eventually depression. Her condition was not responsive to traditional therapies and treatments and became more debilitating and intrusive. Abbi faced every day with a relentless disease for as long as she could before her suffering ended at the age of 16 on March 5, 2024.</p>
                        </div>
                    </div>
                    <Image
                        src="/images/AbbiNew2.png"
                        alt="Caption Photo"
                        height={830}
                        width={650}
                        className="image-container"
                        style={{
                            borderWidth: '1.25px',
                            borderColor: 'black',
                            paddingBottom: '4',
                            display: 'flex',
                            alignItems: 'center',
                            boxShadow: '11px 11px 0px -4px #000000ce',
                            borderRadius: '11px',
                        }}>
                    </Image>
                </div>
            </section>
        </main>
    )
}