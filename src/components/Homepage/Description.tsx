"use client"
import FlatCard from "./description/TextCard";

const Description = () => {
    return (
        <>
            <div className="gap-6 flex flex-col lg:flex-row justify-center items-center lg:justify-between lg:items-start lg:px-20 lg:py-20">
                <FlatCard  title="About Me" description="My full name is Johndel Encabo, I am currently pursuing a degree in Computer Science with a specialization in Intelligent Systems, I am passionate about developing innovative solutions that leverage the latest technologies and constantly strive to advance my skills."/>
                <FlatCard title="Skills" description="I have experience with React, Next.js, Typescript, Javascript, HTML, CSS, and Python"/>
            </div>
            <div className="gap-6 flex flex-col lg:flex-row justify-center items-center lg:justify-between lg:items-start lg:px-20 lg:py-20">
                <FlatCard title="Interests" description="I am interested in web development, data science, and machine learning."/>
                <FlatCard title="Hobbies" description="I enjoy playing video game, watching anime, and photography"/>
            </div>
        </>
    )
}

export default Description;