"use client"

import Link from "next/link";
import { useScroll, motion, useTransform } from "framer-motion";
import { useContext, useEffect} from "react";
import { SectionAnchorContext } from "@/providers/SectionAnchor";
// import Burger from "./burger";

const NavItem = ({ href, children, active }: { href: string; children: React.ReactNode, active: boolean }) => {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [450, -50]);

    useEffect(() => {
        

    }, [active])
    return (
        <>
            <motion.li
                style={{ y: y }}
                className={`${active ? "opacity-100" : "opacity-60"} group hidden lg:flex flex-col  justify-end items-end active:opacity-100 hover:opacity-100`}
            >
                <Link className={`${active ? "text-[3rem]" : "text-[2rem]"} group-hover:text-[3rem]  transition-all duration-50 ease-in-out`} href={href}>{children}</Link>
                <span className={`${active ? "w-full" : "w-[1rem]"} group-hover:w-full  h-1 bg-slate-700 transition-all`} />
            </motion.li>
            <motion.li
                className={`${active ? "opacity-100" : "opacity-60"} group lg:hidden flex flex-col justify-end items-end active:opacity-100 hover:opacity-100`}
            >
                <Link className={`${active ? "text-[1.5rem]" : "text-[1rem]"} group-hover:text-[1.5rem] transition-all duration-50 ease-in-out`} href={href}>{children}</Link>
                <span className={`${active ? "w-full" : "w-[1rem]"} group-hover:w-full  h-1 bg-slate-700 transition-all`} />
            </motion.li>
        </>
    )
}

const NavBar = () => {
    // const [isOpen, setIsOpen] = useState(false);
    const { inViewBanner, inViewDescription, inViewProject, inViewContact } = useContext(SectionAnchorContext)

    // const handleBurgerClick = () => {
    //     setIsOpen(!isOpen);
    // }

    return (
        <>  
            <ul className="mix-blend-difference select-none list-none items-center lg:items-end flex flex-row lg:flex-col lg:gap-2 gap-3">
                <NavItem active={inViewBanner} href="#banner">Home</NavItem>
                <NavItem active={inViewDescription} href="#description">About</NavItem>
                <NavItem active={inViewProject} href="#projects">Projects</NavItem>
                <NavItem active={inViewContact} href="#contact">Contact</NavItem>
            </ul>
        </>
    )
}
export default NavBar