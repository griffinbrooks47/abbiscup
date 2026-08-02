'use client'

import { Paper, Title, Divider } from "@mantine/core"
import { useRouter } from "next/navigation";
import { ReactNode } from "react"
import { CtaButton } from "@/components/ctabutton";

/* --- Annual event facts. Update these once a year; nothing below should need edits. --- */

const EVENT = {
    date: "Friday, August 7, 2026",
    venue: "South Campus Sports Association (SC)",
    address: "10001 Stella Link Road Houston, TX 77025",
};

const MAPS_URL =
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(EVENT.address)}`;

type ScheduleEntry = { time: string; title: string; details?: string[] };

const SCHEDULE: ScheduleEntry[] = [
    { time: "6:00 – 6:30 pm", title: "Arrival" },
    { time: "6:30 – 6:45 pm", title: "Speakers" },
    { time: "6:45 – 7:00 pm", title: "Warmup" },
    {
        time: "7:00 – 7:40 pm",
        title: "Session 1",
        details: [
            "Albion vs. HTX – Field 2 (40-minute half)",
            "Rise vs. Houstonians – Field 1 (40-minute half)",
        ],
    },
    { time: "7:40 – 7:50 pm", title: "Halftime" },
    {
        time: "7:50 – 8:30 pm",
        title: "Session 2",
        details: [
            "Albion vs. Rise – Field 2 (40-minute half)",
            "HTX vs. Houstonians – Field 1 (40-minute half)",
        ],
    },
    { time: "8:30 – 9:00 pm", title: "Panel Discussion" },
];

export default function Events() {

    const router = useRouter();

    return (
        <main
            className="blue-gradient min-h-screen flex flex-col justify-left items-center"
        >
            <Paper shadow="sm" radius="md" withBorder className="event-card mb-[1.5rem] mt-[2rem]">
                <ShadowCard>
                    <button className="mr-[auto] underline underline-offset-2 py-[0.65rem] pr-[0.75rem]" onClick={() => router.push("/")}>
                        Home
                    </button>
                    <div className="text-[1.05rem] flex justify-left flex-col w-full">
                        <div>
                            <Title style={{ fontSize: '1.75rem', textAlign: 'center', marginBottom: '0.2rem', textDecoration: 'underline' }}>Abbi&apos;s Cup</Title>
                            <div style={{ fontSize: '1.2rem', textAlign: 'center', fontWeight: 'bold', marginBottom: '0.1rem' }}>{EVENT.date}</div>
                        </div>
                        <div className="flex flex-col">
                            <div className="font-bold mt-[0.5rem] text-[1.25rem]">Location</div>
                            <Divider className="my-[0.5rem]"></Divider>
                            <a style={{ fontWeight: 600, color: "#4169E1", textDecoration: 'underline' }}
                                href={MAPS_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {EVENT.venue}
                            </a>
                            <div style={{ fontWeight: 600 }}>
                                {EVENT.address}
                            </div>
                            <CtaButton href={MAPS_URL} height="2.5rem" className="my-[0.75rem]">Directions</CtaButton>
                        </div>
                        <div className="">
                            <div className="font-bold mt-[0.75rem] text-[1.25rem]">Tournament Schedule</div>
                            <Divider className="mt-[0.5rem]"></Divider>
                        </div>
                        <div className="mb-[0.5rem]">
                            {SCHEDULE.map((entry, index) => (
                                <ScheduleItem key={index} {...entry} />
                            ))}
                        </div>
                    </div>
                </ShadowCard>
            </Paper>
        </main>
    )
}

function ScheduleItem(props: ScheduleEntry) {
    return (
        <section className="my-[0.15rem]">
            <div className="flex">
                <div className="mr-[0.5rem] font-bold whitespace-nowrap shrink-0">
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
      <div className="border-[1.25px] border-black shadow-div bg-white px-[1.55rem] md:px-[1.8rem] py-[1.5rem] flex justify-center items-center rounded-md flex-col">
        {props.children}
      </div>
    )
  }
