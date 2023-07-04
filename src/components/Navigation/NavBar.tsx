"use client"

import Link from "next/link";
import { useScroll, motion, useTransform } from "framer-motion";
import { useRouter } from "next/navigation";

const NavItem = ({ href, children }: { href: string; children: React.ReactNode }) => {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [450, -50]);
    const router = useRouter();
    return(
        <>
            <motion.li
                style={{y:y}}
                className={`group hidden lg:flex flex-col justify-end items-end opacity-60 active:opacity-100 hover:opacity-100`}
            >
                <Link className="group-hover:text-[3rem] text-[2rem] transition-all duration-50 ease-in-out" href={href}>{children}</Link>
                <span className="group-hover:w-full w-[1rem] h-1 bg-slate-700 transition-all"/>
            </motion.li>
            <motion.li
                className={`group lg:hidden flex flex-col justify-end items-end opacity-60 active:opacity-100 hover:opacity-100`}
            >
                <Link className="group-hover:text-[2rem] text-[1.5rem] transition-all duration-50 ease-in-out" href={href}>{children}</Link>
                <span className="group-hover:w-full w-[1rem] h-1 bg-slate-700 transition-all"/>
            </motion.li>
        </>
    )
}

const NavBar = () =>{
   
    return(
        <>
            <ul className="select-none list-none items-center lg:items-end flex flex-row lg:flex-col lg:gap-2 gap-3">
                <NavItem href="#banner">Home</NavItem>
                <NavItem href="#description">About</NavItem>
                <NavItem href="#projects">Projects</NavItem>
                <NavItem href="#contact">Contact</NavItem>

            </ul>
        </>
    )
}
export default NavBar