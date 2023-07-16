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
        <>
            <TextBlockTransition isView delay={stag} color="#424242" ><h1 className="text-3xl font-bold">{title}</h1></TextBlockTransition>
            <TextBlockTransition isView delay={stag} color="#424242"><p >{description}</p></TextBlockTransition>
        </>
    )
}
export default FlatCard;