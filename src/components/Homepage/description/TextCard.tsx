"use client"

import TextBlockTransition from "@/components/util/TextBlockTransition";
import { useEffect } from "react";
import { stagger } from "framer-motion";

type FlatCardProps = {
    title: string;
    description: string;
    // icon: string;
    // color: string;
    // link: string;
}

const FlatCard = ({ title, description }: FlatCardProps) => {
    const stag = stagger(0.1);


    return (
        <div className="flex flex-col justify-center items-center lg:items-start border border-primary p-2 h-full">
            <TextBlockTransition isView delay={stag} color="#424242" ><h1 className="text-4xl font-bold text-center lg:text-left">{title}</h1></TextBlockTransition>
            <TextBlockTransition isView delay={stag} color="#424242"><p className="text-center lg:text-left">{description}</p></TextBlockTransition>
        </div>
    )
}
export default FlatCard;