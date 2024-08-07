
import { Title, Divider } from "@mantine/core"

import Image from "next/image"

import EmblaCarousel from "./opacityCarousel"

import './janecambell.css'


export function JaneCambell() {
    return (
        <main className="section-border-top bg-white flex flex-col justify-center items-center -mb-[9rem] relative z-[5] pt-[7.5rem] pb-[15rem]">
            <Title size="h1" className="header">One Olympian's Memory of Abbi</Title>
            <section className="flex items-center justify-center mb-[5rem] flex-col md:flex-row">
                <div className="w-[20rem] h-[20rem] profile" style={{ overflow: 'hidden', position: 'relative', borderRadius: '100%' }}>
                    <Image
                        src="/images/JaneCambell/profile.jpg"
                        alt="profile"
                        layout="fill" 
                        objectFit="cover" 
                        objectPosition="center"
                        style={{

                        }}
                    >

                    </Image>
                </div>
                <Divider orientation="vertical" className="hidden md:block"></Divider>
                <div className="text-container">
                    <div className="font-bold text-[1.35rem]">Jane Cambell</div>
                    <div className="font-bold italic text-[1.05rem]">Houston Dash Goalkeeper & USWNT Alternate</div>
                    <div className="description">"Abbi was the true definition of resilience. Coaching her on the soccer field gave me so much joy because any time we faced a challenge, she was able to figure out a solution and have a big smile on her face. Even at trainings when we struggled, we both still managed to work together to find the good in the day. I think that is what I will always carry with me from Abbi, no matter how hard or challenging a training, a work day, a family gathering can be, there is always a way to find the good and joy in something."
                    </div>
                </div>
            </section>
            <section>
                <EmblaCarousel />
            </section>
            <section>
                    <div className="solo-description w-[42.5rem] text-center mt-[4rem]">
                        "I knew Abbi struggled with OCD and mental health and unfortunately many collegiate and professional athletes deal with these same struggles as well. It is all around us and often times so deeply hidden. When I was with Abbi, I tried my very best to get her to open up about her day or tell me how her brother was doing in college to try and get her mind off of her struggles. I’m not entirely sure how successful of a tactic it was, but I do know that when she got to talking she chatted away and had that contagious smile we all know and love. And to me that was what mattered. Soccer brought us together like any sport would and I am forever thankful for Abbi’s impact in my life. She will always be with me anytime I step on the soccer field and I know she will look down on all of us and remind us all to bring joy wherever we go. I hope every day we all remember to play like Abbi."
                    </div>
            </section>
            
        </main>
    )
}