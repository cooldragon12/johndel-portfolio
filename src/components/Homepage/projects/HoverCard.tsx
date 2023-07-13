
type Project = {
    title: string;
    description: string;
    src: string;
    banner: string;
}

const HoverCard = ({ data }: { data: Project }) => {
    return(
        <div className="w-[95%] h-[90%] bg-background flex flex-col justify-start items-start border border-secondary border-dashed border-spacing-10 ">
            {/* Banner */}
            <div className="w-full h-[25%]">
                <img src={data.banner} loading="lazy" alt={data.title+"-banner"} />
            </div>
            {/* Title */}
            <div>
                <h1 className="text-3xl font-bold">{data.title}</h1>
            </div>
            {/* Description */}
            <div>
                <p className="text-left">{data.description}</p>
            </div>
        </div>
    )
}

export default HoverCard;