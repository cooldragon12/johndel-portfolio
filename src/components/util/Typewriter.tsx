"use client"

import useTypingEffect from "@/hooks/animation/useTypingEffect";
import React, { useCallback, useEffect } from "react";

const Typewriter = ({ text, speed, duration }: { text: string | string[] ,speed: number, duration?: number }) => {
    
    
    const {isDone,textState, setRawText} = useTypingEffect(speed);
    
    const handleMultipleText = useCallback(() => {
        for(let i = 0; i < text.length; i++){
            setTimeout(() => {
                setRawText(text[i])
            }, i * (duration || 2000))
        }
    },[])
    useEffect(() => {
        if(Array.isArray(text)){
            handleMultipleText()
        }else{
            setRawText(text)
        }
    },[])

    return (
        <>
            {
                isDone ? textState : textState
            }
            
        </>
    )
}

export default Typewriter;