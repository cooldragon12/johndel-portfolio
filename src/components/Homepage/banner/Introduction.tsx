"use client"

import Typewriter from "@/components/util/Typewriter";
import Image from "next/image";
import MyImage from "@/assets/personal_photo.jpg"
import { useEffect, useRef } from "react";
import { animate, stagger , motion} from "framer-motion";
/**
 * 
 * @description This is the introduction section of the landing page of the portfolio
 */
const Introduction = () => {

    useEffect(() => {
        animate([
            [
                "#blinker-outside",
                {
                    opacity: [1, 0],
                },
                {
                    duration: 0.3,
                    type: "decay",
                    delay: 1,
                }
            ],
            [
            "#identity",
            {
                width: ["0%", "75%"],
            },
            {
                duration: 0.5,
                type: "inertia",
                
            }
        ]])
        animate([
            [
                "#my-intro",
                {
                    x: [-100, 0],

                },
                {
                    duration: 0.6,
                    delay: 2.4,
                    type: "inertia"
                }
            ],
            

        ]
        )
        animate([
            [
                "#my-image",
                {
                    y: [-80, 0, 0],
                    opacity: [0, 1],
                }, // Properties
                {
                    duration: 0.8,
                    type: "inertia",
                    delay: 2.6,

                } // Settings of Animation
            ],
            
            [
                "#blinker-inside",
                {
                    opacity: [0, 1],
                },
                {
                    duration: 0.5,
                    type: "decay",
                }
            ],
           
            
        ])

    }, [])
    return (
        <>
            <div id="my-image" className="m-3 translate-y-[-150px] opacity-0 rounded-full overflow-hidden w-[17rem] h-[17rem] flex items-center">
                <Image src={MyImage} alt="My Image" width={700} height={800} />
            </div>
            <div id="my-intro" className="m-3 translate-x-[-100px]">
                <h1 className="text-[2rem] lg:text-[3rem] text-center font-normal leading-[3.5rem] ">
                    Hello, I am <b>Johndel</b>
                </h1>
                <div className="flex lg:flex-row justify-center items-center">
                    <h2 className="text-[1.5rem] lg:text-[2rem]  lg:text-left font-semibold">
                        <Typewriter  text="I am a" speed={50} />
                        <motion.span id="blinker-outside" className="animate-blinker bg-primary">
                            &nbsp;
                        </motion.span>
                    </h2>
                    <div className="xsm:hidden">&nbsp;</div>
                    <motion.div
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        id="identity" className="w-0  bg-primary text-white overflow-hidden">
                        <motion.div className="text-[1.5rem] lg:text-[2rem] text-center font-semibold w-[12em] lg:w-[11em] m-0">
                            <Typewriter text={["Python Developer","Django Developer", "React Developer", "Full Stack Developer"]} duration={2500} speed={50}/>
                            <motion.span id="blinker-inside" className="animate-blinker bg-white">&nbsp;</motion.span>
                        </motion.div>
                        
                    </motion.div>

                </div>
                {/* <ul id="skills" className="flex gap-4 my-4">
                    <li className="skill translate-y-[80px] opacity-0 font-semibold">
                        <img alt="Python" width="40px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
                    </li>
                    <li className="skill translate-y-[80px] opacity-0 font-semibold">
                        <img alt="Django" width="40px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" />
                    </li>
                    <li className="skill translate-y-[80px] opacity-0 font-semibold">
                        <img alt="PostGreSQl" width="40px" src="/icons/PostgresSQL.svg" />
                    </li>
                    <li className="skill translate-y-[80px] flex items-center opacity-0 font-semibold">
                        <img alt="NextJs" width="45px" src="/icons/next.svg" />
                    </li>
                    <li className="skill translate-y-[80px] opacity-0 font-semibold">
                        <img alt="React" width="40px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                    </li>
                </ul> */}
            </div>
        </>
    )
}
export default Introduction;