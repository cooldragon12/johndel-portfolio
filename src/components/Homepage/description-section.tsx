"use client"
import { useEffect, useRef, useState } from "react";
import FlatCard from "./description/text-card";
import { animate, stagger, motion, useInView } from "framer-motion";
import TextBlockTransition from "../util/text-block-transition";
const stag = stagger(0.2);
const Description = () => {
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
            <div className="grid grid-cols-3 grid-rows-2">
                <div className="col-span-3 lg:col-span-2 w-[100%] flex flex-col justify-center items-start  border border-primary px-8 py-5 border-collapse">
                    <FlatCard title='"About Me"' >
                        My name is <b>Johndel Encabo</b>, I am a full-stack developer who is based in the Philippines, I use Django as backend and React or Next JS for frontend. I am currently studying Computer Science with specialization in Intellegience System. I am passionate about developing innovative solutions that leverage the latest technologies and constantly strive to advance my skills. Also, love to explore new technologies. 
                        Machine learning and data science are my current interests.
                        I believe that simplicity is the key to achive a best solution.
                    </FlatCard>
                </div>
                <div ref={stackRef} className="lg:col-span-1 md:col-span-1  xs:col-span-3 row-span-2 flex flex-col justify-center items-center  border border-primary p-5 border-collapse overflow-hidden">
                    <TextBlockTransition isView delay={stag} color="#424242" ><h1 className="text-3xl font-bold text-center ">Technology Stack</h1></TextBlockTransition>
                    <ul id="skills" className="flex flex-wrap items-center justify-center gap-4 my-4">
                        <motion.li  className="group skill relative translate-x-[80px] opacity-0 font-semibold bg-gray-300 p-5 rounded-md cursor-pointer">
                            <div className={` items-center gap-2 absolute top-0 left-0 w-full h-full z-30 backdrop-blur-md  justify-center flex group-hover:opacity-100 transition-all opacity-0`}>
                                <span>Python</span>
                            </div>
                            <img className="z-0" alt="Python" width="40px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
                        </motion.li>
                        <motion.li className="group skill relative translate-x-[80px] opacity-0 font-semibold bg-gray-300 p-5 rounded-md cursor-pointer">
                            <div className={` items-center gap-2 absolute top-0 left-0 w-full h-full z-30 backdrop-blur-md  justify-center flex group-hover:opacity-100 transition-all opacity-0`}>
                                <span>Django</span>
                            </div>
                            <img className="z-0" alt="Django" width="40px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" />
                        </motion.li>
                        <motion.li  className="group skill relative translate-x-[80px] opacity-0 font-semibold bg-gray-300 p-5 rounded-md cursor-pointer">
                            <div className={` items-center gap-2 absolute top-0 left-0 w-full h-full z-30 backdrop-blur-md  justify-center flex group-hover:opacity-100 transition-all opacity-0`}>
                                <span>Postgres</span>
                            </div>
                            <img className="z-0" alt="PostGreSQl" width="40px" src="/icons/PostgresSQL.svg" />
                        </motion.li>
                        <motion.li className="group skill relative translate-x-[80px] flex items-center opacity-0 font-semibold bg-gray-300 p-5 rounded-md cursor-pointer">
                            <div className={` items-center gap-2 absolute top-0 left-0 w-full h-full z-30 backdrop-blur-md  justify-center flex group-hover:opacity-100 transition-all opacity-0`}>
                                <span>Next JS</span>
                            </div>
                            <img className="z-0" alt="NextJs" width="45px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg" />
                        </motion.li>
                        <motion.li className="group skill relative translate-x-[80px] opacity-0 font-semibold bg-gray-300 p-5 rounded-md cursor-pointer">
                            <div className={` items-center gap-2 absolute top-0 left-0 w-full h-full z-30 backdrop-blur-md  justify-center flex group-hover:opacity-100 transition-all opacity-0`}>
                                <span>React</span>
                            </div>
                            <img className="z-0" alt="React" width="40px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                        </motion.li>
                        <motion.li  className="group skill relative translate-x-[80px] opacity-0 font-semibold bg-gray-300 p-5 rounded-md cursor-pointer">
                            <div className={` items-center gap-2 absolute top-0 left-0 w-full h-full z-30 backdrop-blur-md  justify-center flex group-hover:opacity-100 transition-all opacity-0`}>
                                <span>Tailwind</span>
                            </div>
                            <img className="z-0" alt="Tailwind" width="40px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" />
                        </motion.li>
                    </ul>
                </div>
        
                <div className="lg:col-span-2 md:col-span-2 xs:col-span-3 flex flex-col justify-between items-start border border-primary px-8 py-5 border-collapse">
                    <FlatCard title='"Interests"' >
                    My current interest is data science, and machine learning and web development
                    </FlatCard>
                    {/* </div> */}
                    {/* <div className="flex flex-col justify-center items-center lg:items-start border border-primary p-5 h-1/4"> */}
                    <FlatCard title='"Hobbies"' >
                        I enjoy playing video game, watching anime, and photography 
                    </FlatCard>
                </div>
            </div>
        </>
    )
}

export default Description;