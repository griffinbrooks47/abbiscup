'use client'

import { Button, Paper, Title, Divider } from "@mantine/core"
import { IconArrowBigRight } from "@tabler/icons-react"
import { useRouter } from "next/navigation";
import { ReactNode } from "react"

export default function Events() {

    const router = useRouter();

    return (
        <main
            className="blue-gradient h-[100vh] flex flex-col justify-left items-center"
        >
            <Paper shadow="sm" radius="md" withBorder className="event-card mb-[1.5rem] mt-[2rem]">
                <ShadowCard>
                    <button className="mr-[auto]" onClick={() => router.push("/")}>
                        Home
                    </button>
                    <div className="text-[1.05rem] flex justify-left flex-col w-full">
                        <div>
                            <Title style={{ fontSize: '1.75rem', textAlign: 'center', marginBottom: '0.2rem', textDecoration: 'underline' }}>Abbi&apos;s Cup</Title>
                            <div style={{ fontSize: '1.2rem', textAlign: 'center', fontWeight: 'bold', marginBottom: '0.1rem' }}>August 10th, 2024</div>
                        </div>
                        <Divider className="my-[0.5rem]"></Divider>
                        <div className="flex flex-col">
                            <div className="font-bold mt-[0.5rem]">Location:</div>
                            <a style={{ fontWeight: 'semi-bold' }}
                                href="https://www.google.com/maps/place/19008+Saums+Rd,+Houston,+TX+77084"
                                target="_blank"
                            >
                                Cullen Park
                            </a>
                            <div style={{ fontWeight: 'semi-bold' }}>
                                19008 Saums Rd, Houston, TX 77084
                            </div>
                            <Button style={{ fontSize: "1.15rem", marginInline: "auto",marginBlock: "0.75rem", border: "1.5px solid black", borderRadius: '11px', boxShadow: "7px 8px 0px -4px #000000ce", opacity: "100%"}}
                                color="#4169E1" 
                                w="fit-content" 
                                rightSection={<IconArrowBigRight />} 
                                justify="right"
                                h="2.5rem"><a
                                href="https://www.google.com/maps/place/19008+Saums+Rd,+Houston,+TX+77084"
                                target="_blank"
                                >Directions</a></Button>
                        </div>
                        <div className="mb-[0.5rem]">
                            <div className="font-bold mt-[0.5rem] mb-[0.5rem]">Agenda:</div>
                            <Divider></Divider>
                            <ScheduleItem 
                                time="7:30 am"
                                title="Arrival Time"
                            />
                            <ScheduleItem 
                                time="7:45 am"
                                title="Presentation"
                            />
                            <ScheduleItem 
                                time="8:30 am"
                                title="Session 1"
                                details={['Field 7: HTX v AHFC 07', 'Field 8: Rise v AHFC 08']}
                            />
                            <ScheduleItem 
                                time="9:30 am"
                                title="Session 2"
                                details={['Field 7: HTX v AHFC 08', 'Field 8: Rise v AHFC 07']}
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