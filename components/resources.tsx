import { Title } from "@mantine/core"
import { ReactNode } from "react"


export const Resources = () => {
    return (
        <>
            <section className="resources-big flex justify-center items-center flex-col">
                <div className="resource-grid">
                    <div className="flex justify-center flex-col ml-[3rem] mt-[4rem]" style={{ gridColumn: "span 2"}}>
                        <Title style={{ marginInline: "auto", fontSize: '2.5rem' }}>What can we do?</Title>
                        <div className="w-[37rem] text-left mt-[1rem] text-center text-[1.05rem] mx-auto">For anyone struggling with anxiety, depression, or other mental illness, please SEEK HELP from a professional ASAP, or confide in someone who can get you help.</div>
                        <hr className="w-[70%] mt-[1.5rem] mb-[1rem] border-t-[0.5px] border-[rgba(0,0,0,0.2)] mx-auto"></hr>
                        <div className="w-[37rem] text-left mt-[1rem] text-center mb-[3rem] text-[1.05rem] mx-auto">For those fortunate enough not to be afflicted with a mental health disorder, YOU CAN HELP, in big ways and small, by practicing the following:</div>
                    </div>
                    <div className="resource-col">
                        <ResourceCard>
                            <Title>Be Kind</Title>
                            <div className="mt-[0.5rem]">
                            Everyone struggles. Some more than others, or some may simply be better at hiding their distress better than others. Your teammates, friends, and family might be struggling more than you know, and simply being kind can make a difference. A smile, joke, wave, or hug are all meaningful, yet easy acts of kindness.
                            </div>
                        </ResourceCard>
                        <ResourceCard>
                            <Title>Be Present</Title>
                            <div className="mt-[0.5rem]">
                            Those who struggle with mental illness often feel isolated, so physically being there for them has a big impact. You don't need to know what to say. In fact, you don't have to say anything at all. Just be present and let them know you are there for them in whatever capacity they might need.
                            </div>
                        </ResourceCard>
                    </div>
                    <div className="resource-col">
                        <ResourceCard>
                            <Title>Be Courageous</Title>
                            <div className="mt-[0.5rem]">
                            It takes courage to ask for help. It takes courage to ask someone else if they are suffering. You might not know what to say, but having the courage to be the one to extend a hand, make a call, or plan time to spend together might make a difference.  
                            </div>
                        </ResourceCard>
                        <ResourceCard>
                            <Title>Be Inclusive</Title>
                            <div className="mt-[0.5rem]">
                            Often times those who are struggling may appear more distant, quiet, or even uninterested in doing "normal" things with their peers. They know they are "different" and might even feel like they don't necessarily "fit in" with their peers. Although they might not be able or feel comfortable enough to accept invitations, making the effort to include them in team, friend, or family events helps. 
                            </div>
                        </ResourceCard>
                    </div>
                </div>
            </section>
            <section className="resources-small flex justify-center items-center flex-col">
                <div className="mt-[4rem]">
                    <Title className="">What can we do?</Title>
                </div>
                    <div className="flex justify-between flex-col">
                    <div className="w-[85%] text-center mt-[1rem] text-[0.9rem] mx-auto">For anyone struggling with anxiety, depression, or other mental illness, please SEEK HELP from a professional ASAP, or confide in someone who can get you help.</div>
                    <div className="w-[85%] text-center mt-[1rem] mb-[3rem] text-[0.9rem] mx-auto">For those fortunate enough not to be afflicted with a mental health disorder, YOU CAN HELP, in big ways and small, by practicing the following:</div>
                </div>
                <div className="resource-grid">
                    <div className="resource-col">
                        <ResourceCard>
                            <Title>Be Kind</Title>
                            <div className="mt-[0.5rem]">
                            Everyone struggles. Some more than others, or some may simply be better at hiding their distress better than others. Your teammates, friends, and family might be struggling more than you know, and simply being kind can make a difference. A smile, joke, wave, or hug are all meaningful, yet easy acts of kindness.
                            </div>
                        </ResourceCard>
                        <ResourceCard>
                            <Title>Be Present</Title>
                            <div className="mt-[0.5rem]">
                            Those who struggle with mental illness often feel isolated, so physically being there for them has a big impact. You don't need to know what to say. In fact, you don't have to say anything at all. Just be present and let them know you are there for them in whatever capacity they might need.
                            </div>
                        </ResourceCard>
                    </div>
                    <div className="resource-col">
                        <ResourceCard>
                            <Title>Be Courageous</Title>
                            <div className="mt-[0.5rem]">
                            It takes courage to ask for help. It takes courage to ask someone else if they are suffering. You might not know what to say, but having the courage to be the one to extend a hand, make a call, or plan time to spend together might make a difference.  
                            </div>
                        </ResourceCard>
                        <ResourceCard>
                            <Title>Be Inclusive</Title>
                            <div className="mt-[0.5rem]">
                            Often times those who are struggling may appear more distant, quiet, or even uninterested in doing "normal" things with their peers. They know they are "different" and might even feel like they don't necessarily "fit in" with their peers. Although they might not be able or feel comfortable enough to accept invitations, making the effort to include them in team, friend, or family events helps. 
                            </div>
                        </ResourceCard>
                    </div>
                </div>
            </section>
        </>
        
    )
}

function ResourceCard(props: { children: ReactNode }) {
    return (
      <div className="resource-card h-[fit-content] border-[1.25px] border-black shadow-div bg-white pl-[1.75rem] md:pl-[2.25rem] pr-[1.35rem] py-[1.5rem] flex justify-left rounded-md flex-col">
        {props.children}
      </div>
    )
  }