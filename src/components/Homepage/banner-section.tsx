"use client"
import Typewriter from "../util/type-writer";
import Image from "next/image";
import MyImage from "@/assets/personal_photo.jpg"
import { useEffect } from "react";
import { animate , motion} from "framer-motion";

/**
 * 
 * @description This is the introduction section of the landing page of the portfolio
 */
const BannerSection = () => {

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
                    delay: 0.6,
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
                    delay: 1.6,
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
                    delay: 1.8,

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
            <div id="my-image" className="mr-3 my-3 translate-y-[-150px] opacity-0 rounded-full overflow-hidden w-[17rem] h-[17rem] flex items-center">
                <Image priority src={MyImage} alt="My Image" width={700} height={800} />
            </div>
            <div id="my-intro" className="m-3 translate-x-[-100px]">
                <h1 className="text-[2rem] lg:text-[3rem] text-center font-normal leading-[3.5rem] ">
                    Hello, I am <b>Johndel</b>
                </h1>
                <div className="flex lg:flex-row flex-col justify-center items-center">
                    <div>
                        <h2 className="text-[1.5rem] lg:text-[2rem]  lg:text-left font-semibold">
                            <Typewriter  text="I am a" speed={50} />
                            <motion.span id="blinker-outside" className="animate-blinker bg-primary">
                                &nbsp;
                            </motion.span>
                        </h2>
                    </div>
                    <motion.div
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        id="identity" className="flex justify-center items-center bg-primary text-white overflow-hidden">
                        <motion.div className="text-[1.5rem] lg:text-[2rem] font-semibold w-[15em] md:w-[14.5em] lg:w-[13em] m-0 flex justify-center">
                            <Typewriter text={["Python Developer","Django Developer", "React Developer", "Full Stack Developer"]} duration={2500} speed={50}/>
                            <motion.span id="blinker-inside" className="animate-blinker bg-white">&nbsp;</motion.span>
                        </motion.div>
                        
                    </motion.div>

                </div>
                
            </div>
            
        </>
    )
}
export default BannerSection;