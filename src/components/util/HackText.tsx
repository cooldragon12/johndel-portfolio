import { useCallback, useEffect, useRef, useState } from "react";

const LETTERS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

interface HackTextProps extends React.HTMLAttributes<HTMLDivElement>{
    delay?: number;
    duration: number;
}

function HackText(props: HackTextProps){
    const [text, setText] = useState<string | undefined>(props.children?.toString())
    
    const handleTextChange = useCallback((init:number, defaultValue:number) => {
        const initialT = props.defaultValue?.toString()
        ?.split("")
        ?.map((char, index) => {
            const originalChar = props.defaultValue?.toString()[index]
            if (index < init) return originalChar;
            return LETTERS[Math.floor(Math.random() * LETTERS.length)]
        }
        ).join("");
        setText(initialT);
    },[])

    useEffect(() => {
        let ite = 0
        const defaultLength = props.defaultValue?.toString().length
        const interval = setInterval(() => {
            handleTextChange(ite, defaultLength!)

            if (ite >=  defaultLength! ) {
                clearInterval(interval)
            }
            ite +=  1 / props.duration ;
        }, props.delay);
        return () =>{
            console.log("Clearning the interval")
            clearInterval(interval)}
    },[props.children])
    return <div {...props}>{text}</div>
    
}
export default HackText;