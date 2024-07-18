
import { Paper, Title } from "@mantine/core"
import { ReactNode } from "react"

export default function Events() {
    return (
        <main
            className="bg-[#F5F5F5] h-vp-full flex justify-center items-center"
        >
            <Paper shadow="sm" radius="md" withBorder className="event-card mb-[10%]">
                <ShadowCard>
                    <div className="text-[1.05rem]">
                        <div>
                            <Title style={{ fontSize: '1.75rem', textAlign: 'center' }}>Abbi&apos;s Cup</Title>
                            <div style={{ textAlign: "center" }}>Albion FC</div>
                        </div>
                        <div style={{ marginBlock: '1rem' }}>
                            <div style={{ textAlign: 'left'}}>When:</div>
                            <div style={{ textAlign: 'left', fontWeight: 'bold' }}>Aug 10th, 2024</div>
                        </div>
                        <div>
                            <div>Where:</div>
                            <div style={{ fontWeight: 'bold' }}>
                                Campbell Road Sports Park, 3601 Campbell Road, Houston, TX.
                            </div>
                        </div>
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