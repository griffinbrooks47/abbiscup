
import { Button, Paper, Title } from "@mantine/core"
import { IconArrowBigRight } from "@tabler/icons-react"
import { ReactNode } from "react"

export default function Events() {
    return (
        <main
            className="bg-[#F5F5F5] h-vp-full flex flex-col justify-center items-center"
        >
            <Title style={{ marginBlock: '1rem', textAlign: 'left' }}>Schedule</Title>
            <Paper shadow="sm" radius="md" withBorder className="event-card">
                <ShadowCard>
                    <div className="text-[1.05rem] flex justify-left flex-col w-full">
                        <div>
                            <Title style={{ fontSize: '1.75rem', textAlign: 'center' }}>Abbi&apos;s Cup</Title>
                            <div style={{ textAlign: "center" }}>Albion FC</div>
                        </div>
                        <div style={{ marginBlock: '1rem' }}>
                            <div style={{ textAlign: 'left'}}>When:</div>
                            <div style={{ textAlign: 'left', fontWeight: 'bold' }}>August 10th, 2024</div>
                        </div>
                        <div className="flex flex-col">
                            <div>Where:</div>
                            <a style={{ fontWeight: 'semi-bold' }}
                                href="https://www.google.com/maps/search/?api=1&query=3601+Campbell+Road,+Houston,+TX"
                                target="_blank"
                            >
                                Campbell Road Sports Park
                            </a>
                            <div style={{ fontWeight: 'semi-bold' }}>
                                3601 Campbell Road, Houston, TX.
                            </div>
                        </div>
                        <Button
                            style={{ marginTop: "1.25rem", fontSize: "1.15rem", border: "1.5px solid black", marginLeft: "auto" }}
                            w="fit-content" 
                            rightSection={<IconArrowBigRight />} 
                            justify="center"
    
                        >
                            <a
                                href="https://www.google.com/maps/search/?api=1&query=3601+Campbell+Road,+Houston,+TX"
                                target="_blank"
                            >Directions</a>
                        </Button>
                    </div>
                </ShadowCard>
            </Paper>
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