import Image from "next/image"

import { Collapse } from "@mantine/core"

import { SectionDiv } from "./sectiondiv"

export function About() {
    return (
        <main className="section-border-top -mb-[9rem] blue-gradient relative z-[1] pt-[4rem] pb-[10rem]">
            <SectionDiv
                title="Abigail Agosta"
                imgHeight={830}
                imgWidth={620}
                imgSrc="/images/AbbiNew1.jpeg"
                orientation={true}
            >
                <p className="">Abigail (Abbi) Agosta was an amazing young woman who struggled with OCD from a very young age.  Despite this, she was a kind and loyal friend, a high achiever academically, and a talented and fierce competitor on the soccer field. She began playing soccer at the age of 5 and went on to become a goalkeeper for top teams in the DA, GA, and ECNL soccer organizations.</p>
            </SectionDiv>
            <SectionDiv
                imgHeight={830}
                imgWidth={650}
                imgSrc="/images/AbbiNew2.png"
                orientation={false}
            >
                <p className="pt-[0] md:pt-[3rem]">Although the depth of her illness wasn&apos;t always evident, she struggled for many years with OCD, which in turn created high levels of anxiety and eventually depression. Her condition was not responsive to traditional therapies and treatments and became more debilitating and intrusive. Abbi faced every day with a relentless disease for as long as she could before her suffering ended at the age of 16 on March 5, 2024.</p>
            </SectionDiv>
        </main>
    )
}