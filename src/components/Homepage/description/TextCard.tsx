"use client"

import TextBlockTransition from "@/components/util/TextBlockTransition";
import React, { useEffect } from "react";
import { stagger } from "framer-motion";

type FlatCardProps = {
    title: string;
    children: string | React.ReactNode;
    // icon: string;
    // color: string;
    // link: string;
}

const FlatCard = ({ title, children }: FlatCardProps) => {
    const stag = stagger(0.1);


    return (
        <>
            <TextBlockTransition isView delay={stag} color="#424242" ><h1 className="text-3xl font-bold">{title}</h1></TextBlockTransition>
            <TextBlockTransition isView delay={stag} color="#424242"><p >{children}</p></TextBlockTransition>
        </>
    )
}
export default FlatCard;