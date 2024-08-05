
import { Button, Paper, Title, Divider } from "@mantine/core"
import { IconArrowBigRight } from "@tabler/icons-react"
import { ReactNode } from "react"

export default function Events() {
    return (
        <main
            className="blue-gradient h-[100vh] flex flex-col justify-left items-center"
        >
            <Title style={{ marginTop: '5rem', marginBottom: '1rem', textAlign: 'left' }}>Schedule</Title>
            <Paper shadow="sm" radius="md" withBorder className="event-card mb-[1.5rem]">
                <ShadowCard>
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
                            <Button style={{ fontSize: "1.15rem", marginRight: "auto",marginBlock: "0.75rem", border: "1.5px solid black", borderRadius: '11px', boxShadow: "7px 8px 0px -4px #000000ce", opacity: "100%"}}
                                color="#4169E1" 
                                w="fit-content" 
                                rightSection={<IconArrowBigRight />} 
                                justify="right"
                                h="2.5rem"><a
                                href="https://www.google.com/maps/place/19008+Saums+Rd,+Houston,+TX+77084"
                                target="_blank"
                                >Directions</a></Button>
                        </div>
                        <Divider className="my-[0.5rem]"></Divider>
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