"use client"

import { DynamicOption, useAnimate, useInView} from "framer-motion";
import { useEffect } from "react";

const TextBlockTransition = ({ children, color, delay, isView=false}:{children:React.ReactNode, color:string, delay:DynamicOption<number>|number, isView?:boolean}) => {
    const [target, animate ] = useAnimate();
    const inView = useInView(target)
    const animationHandler = () => {
        animate([
            [
                "#text-cover",
                {
                    width: ["0%", "100%"],
                    
                },
                {
                    duration: 0.5,
                    type:"tween",
                    delay:delay
                }
            ],
            [
                "#text",
                {
                    opacity: [0, 1],
                },
                {
                    duration: 0.2,
                }
            ],
            [
                "#text-cover",
                {
                    width: ["100%", "0%"],
                    justifyContent: ["flex-start", "flex-end"],
                    left: ["0%", "100%"],
                },
                {
                    duration: 0.25,
                    type:"decay",
                    
                }
            ]
        ])
    }
    useEffect(()=>{
        if(inView && isView){
            animationHandler()
        }
    },[inView])
    useEffect(()=>{
        if (!isView)
        animationHandler()
    },[])
    

    return (
        <div className="w-fit relative mx-[0.3rem]" ref={target}>
            <div id="text-cover" className="z-10 w-0 h-full absolute top-0" style={{backgroundColor:color}}/>
            <div id="text" className="opacity-0 md:text-base text-sm">{children}</div>
        </div>
    )
}

export  default TextBlockTransition;