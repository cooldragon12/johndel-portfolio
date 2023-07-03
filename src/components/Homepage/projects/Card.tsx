"use client";
import Image from "next/image"
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";


const Card = ({src, title}:{src: string, title:string})=>{
    const ref = useRef(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHover, setIsHover] = useState(false);
    const variant = {
        default: {
            x:mousePosition.x - 200,
            y:mousePosition.y - 200,
            scale:1,
            transition:{
                duration:0.5
            }
        }
    }
    useEffect(() => {},[isHover, mousePosition])
    return(
        <>
        <motion.div
            ref = {ref}
            onHoverStart={(e)=>{setIsHover(true)}}
            onHoverEnd={(e)=>{setIsHover(false)}}
            onMouseMove={(e)=>{
                const { clientX, clientY } = e;
                // Close to
                setMousePosition({ x: clientX, y: clientY });
            }}
    
            className="card cursor-pointer relative">
            <div className="card__image">
                <Image width={300} height={200} src={src}  alt="img-projects" />
            </div>
            <motion.div
                variants={variant}
                style={{
                    position:"absolute", zIndex:1000, visibility:isHover?"visible":"hidden",
                    top:mousePosition.y -100,
                    left:mousePosition.x -100,
                    
                }}className="bg-[#f3f3f3]"
                transition={{
                    duration:0.5

                }}
            >
                <h1>{title}</h1>
            </motion.div>
        </motion.div>
        </>
    )
}

export default Card;