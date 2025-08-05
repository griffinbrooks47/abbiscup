'use client'

import { Button, Paper, Title, Divider } from "@mantine/core"
import { IconArrowBigRight } from "@tabler/icons-react"
import { useRouter } from "next/navigation";
import { ReactNode } from "react"

export default function Events() {

    const router = useRouter();

    return (
        <main
            className="blue-gradient flex flex-col justify-left items-center"
        >
            <Paper shadow="sm" radius="md" withBorder className="event-card mb-[1.5rem] mt-[2rem]">
                <ShadowCard>
                    <button className="mr-[auto]" onClick={() => router.push("/")}>
                        Home
                    </button>
                    <div className="text-[1.05rem] flex justify-left flex-col w-full">
                        <div>
                            <Title style={{ fontSize: '1.75rem', textAlign: 'center', marginBottom: '0.2rem', textDecoration: 'underline' }}>Abbi&apos;s Cup</Title>
                            <div style={{ fontSize: '1.2rem', textAlign: 'center', fontWeight: 'bold', marginBottom: '0.1rem' }}>August 9th, 2025</div>
                        </div>
                        <div className="flex flex-col">
                            <div className="font-bold mt-[0.5rem] text-[1.25rem]">Location</div>
                            <Divider className="my-[0.5rem]"></Divider>
                            <a style={{ fontWeight: 'semi-bold' }}
                                href="https://maps.app.goo.gl/bYykGETHrUgACVt1A"
                                target="_blank"
                            >
                                South Campus Sports Association
                            </a>
                            <div style={{ fontWeight: 'semi-bold' }}>
                                10001 Stella Link Road Houston, TX 77025
                            </div>
                            <Button style={{ fontSize: "1.15rem", marginInline: "right",marginBlock: "0.75rem", border: "1.5px solid black", borderRadius: '11px', boxShadow: "7px 8px 0px -4px #000000ce", opacity: "100%"}}
                                color="#4169E1" 
                                w="fit-content" 
                                rightSection={<IconArrowBigRight />} 
                                justify="right"
                                h="2.5rem"><a
                                href="https://maps.app.goo.gl/bYykGETHrUgACVt1A"
                                target="_blank"
                                >Directions</a></Button>
                            <a
                                href="parking.pdf"
                                className="mt-[0.5rem]"
                                target="_blank"
                                style={{
                                    fontFamily: "sans-serif",
                                    display: "inline-block",
                                    padding: "5px 10px",
                                    backgroundColor: "#eee",
                                    borderRadius: "4px",
                                    color: "black",
                                    textAlign: "center",
                                }}
                            >
                                Parking Map
                            </a>
        
                        </div>
                        <div className="mb-[0.5rem]">
                            <div className="font-bold mt-[0.75rem] mb-[0.25rem] text-[1.25rem]">Uniforms</div>
                            <Divider className="my-[0.5rem]"></Divider>
                            <div className="">RISE ~ Grey</div>
                            <div className="">Albion ~ Royal Blue</div>
                            <div className="">HTX ~ Black</div>
                            <div className="">Houstonians ~ Red</div>
                        </div>
                        <div className="">
                            <div className="font-bold mt-[0.75rem] text-[1.25rem]">Tournament Schedule</div>
                            <Divider className="mt-[0.5rem]"></Divider>
                        </div>
                        <div className="mb-[0.5rem]">
                            <ScheduleItem 
                                time="7:30am"
                                title="Arrival Time"
                            />
                            <ScheduleItem 
                                time="8:00am"
                                title="Speakers"
                            />
                            <ScheduleItem 
                                time="8:30am"
                                title="Warm-Up"
                            />
                            <ScheduleItem 
                                time="8:45am"
                                title="Session 1"
                                details={['HTX vs. Houstonians ~ Field 1 (40-minute half)', 'Albion vs. RISE ~ Field 2 (40-minute half)']}
                            />
                            <ScheduleItem 
                                time="9:25am"
                                title="Halftime"
                                details={['3-5 minute cool down/meditation exercise', 'Clinician led group for parents on how to help their athlete cope', ' Clinician led small group discussions for players']}
                            />
                            <ScheduleItem 
                                time="9:50am"
                                title="Session 2"
                                details={['Albion vs. Houstonians ~ Field 1 (40-minute half)', 'RISE vs. HTX ~ Field 2 (40-minute half)']}
                            />
                        </div>
                    </div>
                </ShadowCard>
            </Paper>
        </main>
    )
}

function ScheduleItem(props: {time: string, title: string, details?: string[]}) {
    return (
        <section className="my-[0.15rem]">
            <div className="flex">
                <div className="mr-[0.5rem] font-bold">
                    {props.time}
                </div>    
                <p>:</p>
                <div className="mx-[0.5rem]">
                    {props.title}
                </div>        
            </div>
            <div className="">
                {props.details?.map((detail, index) => (
                    <div key={index} className="mx-[1.5rem]">{detail}</div>
                ))}
            </div>
            <Divider className="mt-[0.15rem]"></Divider>
        </section>
    )
}

function ShadowCard(props: {children: ReactNode}) {
    return (
      <div className="border-[1.25px] border-black shadow-div bg-white pl-[1.75rem] md:pl-[2.25rem] pr-[1.35rem] py-[1.5rem] flex justify-center items-center rounded-md flex-col">
        {props.children}
      </div>
    )
  }