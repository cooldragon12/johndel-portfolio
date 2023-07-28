"use client"
import { useEffect, useRef, useState } from "react";
import { animate, motion, stagger, useInView } from "framer-motion";
import Card from "./projects/Card";
import HoverCard from "./projects/HoverCard";
type Project = {
    title: string;
    description: string;
    src: string;
    technologies: string[];
    colorScheme?: string[];
}
const projects:Project[] = [
    {
        title: "AutomataFlow",
        description: "AutomataFlow is a web application that simulates a Deterministic Finite Automaton (DFA) based on a given regular expression problem. It also includes support for Pushdown Automata (PDA) and Context-Free Grammars (CFG). The DFA diagram in the application is interactive, allowing you to validate or simulate input strings.",
        src: "https://automata-flow.vercel.app/",
        technologies: ["Typescript", "React", "NextJs"],
        colorScheme: ["#2C3E50", "#3498DB","#f2f2f2","#E74C3C"]
    },
    {
        title: "Flueriste | Flower Delivery App",
        description: "Fleuriste is a sophisticated mobile flower delivery application developed using React Native Expo. Designed as part of an educational initiative, it caters to a predominantly female audience. Fleuriste offers an extensive selection of flowers, presented in a refined and elegant manner that complements the products available. The application allows users to peruse the various floral options, choose their desired bouquet, and schedule delivery at their convenience. Additionally, Fleuriste provides a secure and user-friendly payment system, enabling customers to effortlessly complete their transactions.",
        src: "https://github.com/cooldragon12/flower-delivery",
        technologies: ["Javascript", "React Native", "Expo"],
        colorScheme: ["#FF8B8B","#FFCBCB", "#FFFFFF","#D5FFD1"]

    },
    {
        title: "Sentiment Analysis of Valorant Text and Video Chat using Multinomial Logistic Regression",
        description: "This study is about sentiment analysis on text and voice chat toxicity among the players of Valorant Community in the SEA server. Since disruptive behavior became a major problem in Valorant chats, specifically in the SEA server, this study aims to determine the words that most players use for trash-talking, and then determine in which medium most trash-talk comes from.",
        src: "https://github.com/cooldragon12/valorant-text-voice-chat-sentiment-analysis",
        technologies: ["Python", "Scikit-learn", "Jupyter Notebook"],
        colorScheme: ["#992F1E","#F0BBB2", "#B33623","#ffffff"]
    },
    {
        title: "Algo Visualizer",
        description: "Sorting Algorithm Visualization using PyGame",
        src:"https://github.com/cooldragon12/Algo-Visualizer",
        technologies: ["Python", "Pygame"],
        colorScheme: ["#ffffff","#000000"]
    }
]

const Projects = () => {
    const [isHover, setIsHover] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [currentHover, setCurrentHover] = useState<Project>({} as Project);
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
        <div className="flex h-full" ref={ref}>
            <div className="flex flex-col h-full gap-1 flex-wrap justify-center">
            {
                projects.map((item, index) => (
                    <motion.div
                        key={index}
                        onHoverStart={(e) => { setIsHover(true), setCurrentHover(item) }}
                        onHoverEnd={(e) => { setIsHover(false), setCurrentHover({} as Project) }}
                        onFocus={(e) => { setIsHover(true) }}
                        onBlur={(e) => { setIsHover(false) }}
                        onMouseMove={(e) => {
                            const { clientX, screenY } = e;
                            // Close to the edge of mouse
                            setMousePosition({ x: clientX, y: screenY + 100 });
                        }}
                        className="card 
                            bg-background 
                            hover:bg-secondary 
                            hover:text-background
                            transition-colors
                            border border-spacing-1 border-secondary p-7 opacity-0 -translate-x-1/2 cursor-pointer w-3/4">
                        <Card src={item.src} title={item.title} image_src="" technologies={item.technologies} />
                        
                    </motion.div>
                )
                )
            }
            </div>
            <motion.div
                style={{
                    position: "absolute",
                    zIndex: 1000,
                    opacity: isHover ? 1 : 0,
                    visibility: isHover ? "visible" : "hidden",
                    x: mousePosition.x - 100,
                    y: mousePosition.y - 200,
                    
                }}
                animate
                className="hover-card text-background  bg-primary shadow-md shadow-primary p-5 rounded-md"
            >
                <h1>Color Scheme</h1>
                <div className="flex gap-2">
                    {
                        currentHover.colorScheme?.map((item, index) => (
                            <div key={index} className="w-5 h-5 bg-primary" style={{backgroundColor:item}}></div>
                        ))
                    }
                </div>
            </motion.div>
            <motion.div className="relative border">
                <div className="absolute h-screen w-screen border">

                </div>
                
            </motion.div>
        </div>
    )
}
export default Projects;