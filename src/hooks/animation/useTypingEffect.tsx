import { useEffect, useState } from "react";

/**
 * @description A typing effect animation hook using `framer-motion`
 * @param text The text to animate
 * @param delay The delay between each character being added
 * @returns {textState, isDone} An object containing the current animated text and a flag indicating if the animation is complete
 */
const useTypingEffect = (delay:number) => {
  const [rawText, setRawText] = useState(""); // 
  const [textState, setTextState] = useState("");
  const [isDone, setIsDone] = useState(false);

  // useEffect(() => {
  //   if (isDone) {setIsDone(false); setTextState("");};
  //   setRawText(text);
  // }, [text, delay]);

  useEffect(() => {
    if (isDone) {setIsDone(false); setTextState("");};
    let count = 0;
    const textArr = [" "," "].concat(rawText?.split(""));
    const interval = setInterval(() => {
      if (count === textArr.length - 1) {
        setTextState(prev => prev);
        setIsDone(true);
        clearInterval(interval);
      } else if (count < textArr.length) {
        setTextState(prev => prev + textArr[count]);
        count++;
      }
    }, delay);
    
    // const durationTimeout = setTimeout(() => {
    //   if (isGoingBack) {
    //     let count = textArr.length - 1;
    //     const interval = setInterval(() => {
    //       if (count === 0) {
    //         setTextState(prev => prev);
    //         setIsDone(true);
    //         clearInterval(interval);
    //       } else if (count > 0) {
    //         setTextState(prev => prev.slice(0, -1));
    //         count--;
    //       }
    //     })
    //   }
      
    // }, duration)
    return () => clearInterval(interval);
  }, [rawText]);

  return { textState, isDone, setRawText};
};



export default useTypingEffect; 