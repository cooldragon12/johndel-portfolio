"use client"
import FlatCard from "./description/TextCard";

const Description = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center lg:justify-center first-letter:lg:items-start  lg:w-1/3 h-full">
                <div className="flex flex-col justify-center items-center lg:items-start border border-primary p-5 h-1/2">
                    <FlatCard title='"About Me"' description="My full name is Johndel Encabo, I am currently pursuing a degree in Computer Science with a specialization in Intelligent Systems, I am passionate about developing innovative solutions that leverage the latest technologies and constantly strive to advance my skills." />
                </div>
                <div className="flex flex-col justify-center items-center lg:items-start border border-primary p-5 h-1/4">
                    <FlatCard title='"Skills"' description="I have experience with React, Next.js, Typescript, Javascript, HTML, CSS, and Python" />

                </div>
            </div>
            <div className="flex flex-col justify-center items-center lg:justify-center lg:items-start  lg:w-1/4">
                <div className="flex flex-col justify-center items-center lg:items-start border border-primary p-5 h-1/4">
                    <FlatCard title='"Interests"' description="I am interested in web development, data science, and machine learning." />
                {/* </div> */}
                {/* <div className="flex flex-col justify-center items-center lg:items-start border border-primary p-5 h-1/4"> */}
                    <FlatCard title='"Hobbies"' description="I enjoy playing video game, watching anime, and photography" />
                </div>
            </div>
        </>
    )
}

export default Description;