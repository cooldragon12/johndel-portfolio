"use client"
import {motion} from "framer-motion";
import React from "react";
import { stagger } from "framer-motion";

type IconCardProps = {
    name: string;
    icon: string;
    color: string;
}

const IconCard = ({ name, icon, color }: IconCardProps) => {
    return (
        <motion.li className="group skill relative translate-x-[80px] opacity-0 font-semibold bg-gray-300 p-5 rounded-md cursor-pointer">
            <div className={`items-center gap-2 absolute top-0 left-0 w-full h-full z-30 backdrop-blur-md  justify-center flex group-hover:opacity-100 transition-all opacity-0`}>
                <span>{name}</span>
            </div>
            <img className="z-0" alt={name + "-alt"} width="40px" src={icon} />
        </motion.li>
    )
}
export default IconCard;