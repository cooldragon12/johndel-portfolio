"use client"
import { RefObject, useEffect, useRef } from "react"

const LETTERS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
/**
 * 
 * @param duration is the time it takes to complete the effect
 * @param delay is the time it takes to start the effect
 * @returns ref to the element which the effect is applied
 */
const useHackTextEffect = (delay: number = 100, duration:number = 3) => {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        let ite = 0

        const interval = setInterval(() => {
            if (ref?.current == null) return;
            const initialT = ref?.current?.innerText
                ?.split("")
                ?.map((char, index) => {
                    if  (ref?.current?.dataset.value == null) return;
                    const originalChar = ref.current?.dataset?.value[index];
                    if (index < ite) return originalChar;
                    return LETTERS[Math.floor(Math.random() * LETTERS.length)]
                }
                ).join("");
            ref.current.innerText = initialT;
            
            if (ite >= ref?.current?.dataset?.value?.length) 
                clearInterval(interval)
            ite +=  1 / duration ;
        }, delay);
        return () => clearInterval(interval)
    },[ref])
    return ref
}

export default useHackTextEffect