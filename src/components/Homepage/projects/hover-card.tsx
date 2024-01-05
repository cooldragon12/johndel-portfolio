"use client"
import HackText from "../../util/hack-text";

type Project = {
    title: string;
    description: string;
    src: string;
    banner: string;
}

const HoverCard = ({ data }: { data: Project }) => {
    // const ref = useHackTextEffect(50);
    
    return(
        <div className="w-[95%] h-[90%] p-5 bg-background flex flex-col justify-start items-start border border-secondary border-dashed border-spacing-10 ">
            {/* Banner */}
            <div className="w-full h-[25%]">
                <img src={data.banner} loading="lazy" alt={data.title+"-banner"} />
            </div>
            {/* Title */}
            <div>
                <HackText duration={0.7} delay={50} defaultValue={data.title} className="text-xl font-bold transition-all">{data.title}</HackText>
            </div>
            {/* Description */}
            <div>
                <p className="text-left">{data.description}</p>
            </div>
        </div>
    )
}

export default HoverCard;