"use client"

import Link from "next/link";
import { useScroll } from "framer-motion";
const NavBar = () =>{
    const {scrollYProgress} = useScroll({
    
    });

    return(
        <>
            <ul className="list-none flex flex-row lg:flex-col ">
                <li>
                    <span/>
                    <Link href="#banner">Home</Link>
                </li>
                <li>
                    <span/>
                    <Link href="#projects">Projects</Link>
                </li>
                <li>
                    <span/>
                    <Link href="#description">Description</Link>
                </li>
                <li>
                    <span/>
                    <Link href="#contact">Contact</Link>
                </li>
            </ul>
        </>
    )
}
export default NavBar