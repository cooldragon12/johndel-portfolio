"use client";
import HackText from "@/components/util/HackText";
import Image from "next/image"
import Link from "next/link";



const Card = ({ src, image_src, title, description }: { src: string,image_src:string, title: string, description:string }) => {

    return (
        <>
            <Link href={src} className="card__image h-1/4 w-full flex justify-center items-center relative" >
                
                {/* <Image width={500} height={500} src={src} alt={title} /> */}
                <div>
                    <div>
                        <HackText duration={1} delay={100} defaultValue={title} className="text-xl font-bold transition-all">{title}</HackText>
                    </div>
                    <div className="description">
                        <p>{description}</p>
                    </div>
                </div>

            </Link>
        </>
    )
}

export default Card;