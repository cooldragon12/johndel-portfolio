"use client"
import FlatCard from "./description/TextCard";

const Description = () => {
    return (
        <>
            <div className="gap-6 flex flex-col justify-center items-center lg:justify-between lg:items-start px-10 lg:w-1/2 ">
                <FlatCard title="'About Me'" description="My full name is Johndel Encabo, I am currently pursuing a degree in Computer Science with a specialization in Intelligent Systems, I am passionate about developing innovative solutions that leverage the latest technologies and constantly strive to advance my skills." />
            </div>
            <div className="gap-6 flex flex-col justify-center items-center lg:justify-between lg:items-start px-10 lg:w-1/2">
                <FlatCard title="'Skills'" description="I have experience with React, Next.js, Typescript, Javascript, HTML, CSS, and Python" />
                <FlatCard title="'Interests'" description="I am interested in web development, data science, and machine learning." />
                <FlatCard title="'Hobbies'" description="I enjoy playing video game, watching anime, and photography" />
            </div>
        </>
    )
}

export default Description;