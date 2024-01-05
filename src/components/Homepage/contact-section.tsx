"use client"
import { SocialIcon, SocialIconProps } from "react-social-icons"
import TextBlockTransition from "../util/text-block-transition"
import Typewriter from "../util/typewriter"
import { useInView } from "framer-motion"
import { useRef } from "react"


const Contact = () => {
    const ref = useRef(null)
    const inView = useInView(ref)
    const links = [
        {
            name: "in/johndel-encabo",
            url: "https://www.linkedin.com/in/johndel-encabo/",
        },
        {
            name: "@cooldragon12",
            url: "https://github.com/cooldragon12",
        },
        {
            name:"johndelencabo@gmail.com",
            url: "mailto:johndelencabo@gmail.com"
        }
    ]
    return(
        <>
            <div ref={ref} className="flex flex-col justify-center items-center">
                <div className="text-2xl font-semibold flex">
                    {
                        inView ? <Typewriter speed={50} duration={100} text="Get in touch"/>:<></>

                    }
                    <div className="animate-blinker bg-primary">_</div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-start">
                {
                    links.map((link, index) => (
                        <div className="flex font-semibold items-center" key={link.name+index}>
                            <SocialIcon url={link.url}  className="m-2" target="_blank" fgColor="#fff" style={{ height: 50, width: 50 }} />
                            <TextBlockTransition    color="#424242" delay={0.3} isView >{link.name}</TextBlockTransition>
                        </div>
                    ))
                }
                
            </div>
        </>
    )
}

export default Contact