"use client"
import { useEffect, useRef, useState } from "react";
import { animate, motion, stagger, useInView } from "framer-motion";
import Card from "./projects/cards";
import { GithubAPI } from "@/types/github_api";

const Projects = () => {
    const [projects, setProjects] = useState<GithubAPI[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);
    // const [isHover, setIsHover] = useState(false);
    // const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    // const [currentHover, setCurrentHover] = useState<Project>({} as Project);
    const stag = stagger(0.2);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true,amount: 0.5 })

    useEffect(() => {
        animate(".card", { opacity: [0, 1], y: [-600, 0], }, { duration: 0.25, delay: stag })
    }, [inView])

    useEffect(()=>{
        const fetchProjects = async () => {
            const res = await fetch("https://api.github.com/users/cooldragon12/repos", {
                headers: {
                    "Accept": "application/vnd.github.v3+json",
                    "Authorization": `token ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`
                }
            });
            const data = await res.json();
            if (data.message) {
                console.error(data.message);
                return;
            }
            setProjects(data);
            setIsLoaded(true);
        }
        fetchProjects();
    },[])

    return (
        <div className="flex lg:m-7 my-4 h-full" ref={ref}>
            <div className="flex flex-col md:flex-row gap-2 md:flex-wrap justify-center ">
            {
                isLoaded? projects.filter((d)=> !d.fork).map((item, index) => (
                    <motion.div key={index} initial="hidden" className="card">
                        <Card  {...item}/>
                    </motion.div>
                )): <motion.div className="card">
                        <></>
                    </motion.div>
            }
            </div>
            {/* <motion.div
                style={{
                    position: "absolute",
                    zIndex: 1000,
                    opacity: isHover ? 1 : 0,
                    visibility: isHover ? "visible" : "hidden",
                    x: mousePosition.x - 100,
                    y: mousePosition.y - 200,
                    
                }}
                animate
                className="hover-card text-background  bg-primary shadow-md shadow-primary p-5 rounded-md"
            >
                <h1>Color Scheme</h1>
                <div className="flex gap-2">
                    {
                        currentHover.colorScheme?.map((item, index) => (
                            <div key={index} className="w-5 h-5 bg-primary" style={{backgroundColor:item}}></div>
                        ))
                    }
                </div>
            </motion.div> */}

        </div>
    )
}
export default Projects as React.FC;