"use client"
import { motion } from "framer-motion"
const BackgroundPattern = () => {
    return (
        <motion.div className="-z-10 w-full h-screen top-0 left-0 bg-fixed absolute pattern-background" />
    )
}

export default BackgroundPattern