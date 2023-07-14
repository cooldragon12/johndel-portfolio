"use client"
import { useEffect, useRef, useState } from "react";
import FlatCard from "./description/TextCard";
import { animate, stagger, motion, useInView } from "framer-motion";
import TextBlockTransition from "../util/TextBlockTransition";
const stag = stagger(0.2);
const Description = () => {
    const [currentHover, setCurrentHover] = useState(0);
    const stackRef = useRef(null);
    const inView = useInView(stackRef, { once: true });
    useEffect(() => {
        animate(
            ".skill",
            
            { opacity: [0, 1], x: [100, 0] }, { duration: 0.5, delay: stag, ease: "easeInOut" }
        )
    }, [inView])
    return (
        <>
            <div className="grid lg:grid-cols-2 lg:grid-rows-2">
                <div className="flex flex-col justify-center items-center lg:items-start border border-primary px-8 py-5 border-collapse">
                    <FlatCard title='"About Me"' description="My name is Johndel Encabo, I am currently pursuing a degree in Computer Science with a specialization in Intelligent Systems, I am passionate about developing innovative solutions that leverage the latest technologies and constantly strive to advance my skills. Also, love to explore new technologies." />
                </div>
                <div ref={stackRef} className="col-span-1 row-span-2 flex flex-col justify-center items-center lg:items-start border border-primary p-5 border-collapse overflow-hidden">
                    <TextBlockTransition isView delay={stag} color="#424242" ><h1 className="text-3xl font-bold text-center lg:text-left">Technology Stack</h1></TextBlockTransition>
                    <ul id="skills" className="flex flex-wrap lg:justify-normal items-center justify-center gap-4 my-4">
                        <motion.li onHoverStart={() => setCurrentHover(1)} onHoverEnd={() => setCurrentHover(0)} className="skill relative translate-x-[80px] opacity-0 font-semibold bg-gray-300 p-5 rounded-md cursor-pointer">
                            <div className={` items-center gap-2 absolute top-0 left-0 w-full h-full z-30 backdrop-blur-md  justify-center flex transition-opacity ${currentHover === 1 ? "opacity-1" : "opacity-0"}`}>
                                <span>Python</span>
                            </div>
                            <img className="z-0" alt="Python" width="40px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
                        </motion.li>
                        <motion.li onHoverStart={() => setCurrentHover(2)} onHoverEnd={() => setCurrentHover(0)} className="skill relative translate-x-[80px] opacity-0 font-semibold bg-gray-300 p-5 rounded-md cursor-pointer">
                            <div className={` items-center gap-2 absolute top-0 left-0 w-full h-full z-30 backdrop-blur-md  justify-center flex transition-opacity ${currentHover === 2 ? "opacity-1" : "opacity-0"}`}>
                                <span>Django</span>
                            </div>
                            <img className="z-0" alt="Django" width="40px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" />
                        </motion.li>
                        <motion.li onHoverStart={() => setCurrentHover(3)} onHoverEnd={() => setCurrentHover(0)} className="skill relative translate-x-[80px] opacity-0 font-semibold bg-gray-300 p-5 rounded-md cursor-pointer">
                            <div className={` items-center gap-2 absolute top-0 left-0 w-full h-full z-30 backdrop-blur-md  justify-center flex transition-opacity ${currentHover === 3 ? "opacity-1" : "opacity-0"}`}>
                                <span>Postgres</span>
                            </div>
                            <img className="z-0" alt="PostGreSQl" width="40px" src="/icons/PostgresSQL.svg" />
                        </motion.li>
                        <motion.li onHoverStart={() => setCurrentHover(4)} onHoverEnd={() => setCurrentHover(0)} className="skill relative translate-x-[80px] flex items-center opacity-0 font-semibold bg-gray-300 p-5 rounded-md cursor-pointer">
                            <div className={` items-center gap-2 absolute top-0 left-0 w-full h-full z-30 backdrop-blur-md  justify-center flex transition-opacity ${currentHover === 4 ? "opacity-1" : "opacity-0"}`}>
                                <span>Next JS</span>
                            </div>
                            <img className="z-0" alt="NextJs" width="45px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg" />
                        </motion.li>
                        <motion.li onHoverStart={() => setCurrentHover(5)} onHoverEnd={() => setCurrentHover(0)} className="skill relative translate-x-[80px] opacity-0 font-semibold bg-gray-300 p-5 rounded-md cursor-pointer">
                            <div className={` items-center gap-2 absolute top-0 left-0 w-full h-full z-30 backdrop-blur-md  justify-center flex transition-opacity ${currentHover === 5 ? "opacity-1" : "opacity-0"}`}>
                                <span>React</span>
                            </div>
                            <img className="z-0" alt="React" width="40px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                        </motion.li>
                        <motion.li onHoverStart={() => setCurrentHover(6)} onHoverEnd={() => setCurrentHover(0)} className="skill relative translate-x-[80px] opacity-0 font-semibold bg-gray-300 p-5 rounded-md cursor-pointer">
                            <div className={` items-center gap-2 absolute top-0 left-0 w-full h-full z-30 backdrop-blur-md  justify-center flex transition-opacity ${currentHover === 6 ? "opacity-1" : "opacity-0"}`}>
                                <span>Tailwind</span>
                            </div>
                            <img className="z-0" alt="Tailwind" width="40px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" />
                        </motion.li>
                    </ul>
                </div>
        
                <div className="flex flex-col justify-between items-center lg:items-start border border-primary px-8 py-5 border-collapse">
                    <FlatCard title='"Interests"' description="I am interested in web development, data science, and machine learning." />
                    {/* </div> */}
                    {/* <div className="flex flex-col justify-center items-center lg:items-start border border-primary p-5 h-1/4"> */}
                    <FlatCard title='"Hobbies"' description="I enjoy playing video game, watching anime, and photography" />
                </div>
            </div>
        </>
    )
}

export default Description;