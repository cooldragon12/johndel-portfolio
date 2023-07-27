"use client";
import HackText from "@/components/util/HackText";
import Image from "next/image"
import Link from "next/link";

type Card = {
    src: string,
    image_src: string,
    title: string
    colorScheme?: string[],
    technologies?: string[]
}

const Card = (props: Card) => {
    
    return (
        <>
            <Link href={props.src} className="card__image" >

                {/* <Image width={500} height={500} src={src} alt={title} /> */}

                <div className="">
                    <HackText duration={1} delay={100} defaultValue={props.title} className="text-xl font-bold transition-all">{props.title}</HackText>
                </div>
                <div className="flex gap-2">
                    {
                        props.technologies?.map((item, index) => (
                            <p key={index} className="text-xs text-primary "><span className=""></span>{item}</p>
                        ))
                    }
                </div>
                
            </Link>
        </>
    )
}

export default Card;