"use client"
import { useEffect, useRef, useState } from "react";
import { animate, motion, stagger, useInView } from "framer-motion";
import Card from "./projects/Card";
import HoverCard from "./projects/HoverCard";
type Project = {
    title: string;
    description: string;
    src: string;
    banner: string;
}
const projects:Project[] = [
    {
        title: "AutomataFlow",
        description: "Description",
        src: "/icons/next.svg",
        banner: ""
    },
    {
        title: "Flueriste | Flower Delivery App",
        description: "Description",
        src: "/icons/next.svg",
        banner: ""

    },
    {
        title: "Valorant Text/Voice Chat Sentiment Analysis",
        description: "Description",
        src: "/icons/next.svg",
        banner: ""

    },
]

const Projects = () => {
    const [isHover, setIsHover] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    // const [currentHover, setCurrentHover] = useState<Project>({} as Project);
    const stag = stagger(0.2);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true })
    useEffect(() => {
        animate(".card", { opacity: [0, 1], x: [-600, 0], }, { duration: 0.4, delay: stag })
    }, [inView])
    useEffect(() => {
        console.log(isHover);
    }, [isHover])
    return (
        <div className="relative flex flex-col justify-center items-start gap-1 flex-wrap" ref={ref}>
            {
                projects.map((item, index) => (
                    <motion.div
                        key={index}
                        onHoverStart={(e) => { setIsHover(true) }}
                        onHoverEnd={(e) => { setIsHover(false) }}
                        onFocus={(e) => { setIsHover(true) }}
                        onBlur={(e) => { setIsHover(false) }}
                        onMouseMove={(e) => {
                            const { pageX, pageY } = e;
                            // Close to the edge of mouse
                            setMousePosition({ x: pageX, y: pageY });
                        }}
                        className="card bg-background hover:bg-secondary hover:text-background transition-colors border border-spacing-1 border-secondary p-10 opacity-0 -translate-x-1/2 cursor-pointer relative">
                        <Card src={item.src} title={item.title} description={item.description} image_src="" />
                        
                    </motion.div>
                )
                )
            }
            <motion.div
                style={{
                    position: "absolute",
                    zIndex: 1000,
                    opacity: isHover ? 1 : 0,
                    visibility: isHover ? "visible" : "hidden",
                    x: mousePosition.x - 500,
                    y: mousePosition.y - 2450,
                    transition: "opacity 0.25s ease-in-out, visibility 0.25s ease-in-out, transform 0.05s ease-out",
                }}
                className="hover-card w-[10vw] h-[10vh] bg-primary shadow-sm shadow-primary flex justify-center items-center "
            />
            
        </div>
    )
}
export default Projects;