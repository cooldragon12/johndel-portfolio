"use client";
import Image from "next/image"



const Card = ({ src, image_src, title, description }: { src: string,image_src:string, title: string, description:string }) => {

    return (
        <>
            <div className="card__image h-1/4 w-full flex justify-center items-center" >
                <h1>{title}</h1>
                {/* <Image width={500} height={500} src={src} alt={title} /> */}
                <div className="description">
                    <p>{description}</p>
                </div>
            </div>
        </>
    )
}

export default Card;