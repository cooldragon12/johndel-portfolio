"use client"
import { useEffect, useRef } from "react";
import { useTransform, MotionValue, useScroll } from "framer-motion"
function useParallax(distance: number) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({target: ref});
    const y = useTransform(scrollYProgress, [0, 1], [0, distance]);
    useEffect(() => console.log(y, scrollYProgress), [y,scrollYProgress])
    return {y};
  }
export default useParallax;