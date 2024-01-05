"use client";
import { GithubAPI } from "@/types/github_api";
import { useEffect, useState } from "react";
import { generateHash } from "@/utils/generate-hash";

const Card = (props: GithubAPI) => {
    const [technologies, setTechnologies] = useState<string[]>([]);
    const [hash, setHash] = useState("");
    useEffect(() => {
        fetch(props.languages_url, {
            headers: {
                "Accept": "application/vnd.github.v3+json",
                "Authorization": `token ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`
            }
        }).then(res => res.json()).then(data => setTechnologies(Object.keys(data)))

        setHash(generateHash(15))
    }, [])

    return (
        <div className="p-4 border-gray-300 border-spacing-1 border rounded-lg backdrop-blur-sm">
            {/* <Image width={500} height={500} src={`https://opengraph.githubassets.com/${hash}/cooldragon12/${props.name}`} alt={props.name + " alternative"} /> */}
            <div className="">
                <h1 className="text-base md:text-lg font-bold">{props.name}</h1>
                <p className="text-xs md:text-sm text-justify hidden md:block">{props.description}</p>
                {/* <HackText duration={1} delay={50}  className="text-xl font-bold transition-all">{props.title}</HackText> */}
            </div>
            <div className="flex flex-wrap gap-3 p-2">
                {
                    technologies.map((item, index) => (
                        <span key={index} className="text-[0.6rem] md:text-xs text-primary">{item}</span>
                    ))
                }
            </div>
        </div>
    )
}

export default Card;