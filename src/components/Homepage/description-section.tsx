"use client"
import { useEffect, useRef, } from "react";
import FlatCard from "./description/text-card";
import { animate, stagger,  useInView } from "framer-motion";
import IconCard from "./description/icon-card";
import TextBlockTransition from "../util/text-block-transition";
import { languagesUse } from "@/utils/language-use";
const stag = stagger(0.2);


const Description = () => {
    const stackRef = useRef(null);
    const inView = useInView(stackRef, { once: true });
    const languages = languagesUse;
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
                <div ref={stackRef} className="lg:col-span-1 md:col-span-1  xs:col-span-3 row-span-2 flex flex-col justify-center items-center  border border-primary p-5 border-collapse ">
                    <TextBlockTransition isView delay={stag} color="#424242" ><h1 className="text-3xl font-bold text-center ">Technology Stack</h1></TextBlockTransition>
                    <ul id="skills" className="flex flex-wrap items-center justify-center md:gap-4 gap-1 my-4">
                        {
                            languages.map((language, index) => (
                                <IconCard key={index} name={language.name} icon={language.icon} color={language.color} />
                            ))
                        }
                    </ul>
                </div>
                <div className="lg:col-span-2 md:col-span-2 xs:col-span-3 flex flex-col lg:justify-between items-start border border-primary px-8 py-5 border-collapse">
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