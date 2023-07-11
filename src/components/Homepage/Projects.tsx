"use client"
import { useEffect, useRef, useState } from "react";
import { animate, motion, stagger, useInView } from "framer-motion";
import Card from "./projects/Card";
type Project = {
    title: string;
    description: string;
    src: string;
}
const projects = [
    {
        title: "AutomataFlow",
        description: "Description",
        src: "/icons/next.svg"
    },
    {
        title: "Flueriste | Flower Delivery App",
        description: "Description",
        src: "/icons/next.svg"
    },
    {
        title: "Valorant Text/Voice Chat Sentiment Analysis",
        description: "Description",
        src: "/icons/next.svg"
    },
]

const Projects = () => {
    const [isHover, setIsHover] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [currentHover, setCurrentHover] = useState<Project>();
    const stag = stagger(0.2);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true })
    useEffect(() => {
        if (inView) {
            animate(".card", { opacity: [0, 1], x: [-600, 0], }, { duration: 0.4, delay: stag })
        }
    }, [inView])
    return (
        <div className="w-full relative flex lg:flex-row flex-col justify-center items-center gap-2 flex-wrap" ref={ref}>
            {
                projects.map((item, index) => (
                    <motion.div
                        key={index}
                        onHoverStart={(e) => { setIsHover(true), setCurrentHover(item) }}
                        onHoverEnd={(e) => { setIsHover(false) }}
                        onMouseMove={(e) => {
                            const { pageX, pageY } = e;
                            // Close to the edge of mouse
                            setMousePosition({ x: pageX, y: pageY });
                        }}
                        className="card hover:bg-secondary hover:text-background transition-colors border border-spacing-1 border-secondary p-10 opacity-0 -translate-x-1/2 cursor-pointer relative">
                        <Card src={item.src} title={item.title} description="" image_src="" />
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
                    x: mousePosition.x - 900,
                    y: mousePosition.y - 2400,
                    transition: "opacity 0.25s ease-in-out, visibility 0.25s ease-in-out, transform 0.15s ease-out",
                }}
                className="hover-card w-1/4 h-40 bg-background shadow-sm shadow-primary flex justify-center items-center"

            >
                <h1>{currentHover?.title}</h1>
            </motion.div>
        </div>
    )
}
export default Projects;