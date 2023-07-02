
const Description = () => {
    return (
        <>
            <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-between lg:items-start lg:px-20 lg:py-20">
                <div className="flex flex-col justify-center items-center lg:items-start">
                    <h1 className="text-4xl font-bold text-center lg:text-left">Description</h1>
                    <p className="text-center lg:text-left">I am a student at the University of Washington studying Informatics. I am interested in the intersection of technology and business. I am currently looking for a summer 2022 internship.</p>
                </div>
                <div className="flex flex-col justify-center items-center lg:items-start">
                    <h1 className="text-4xl font-bold text-center lg:text-left">Skills</h1>
                    <p className="text-center lg:text-left">I have experience with React, Next.js, Typescript, Javascript, HTML, CSS, and Python</p>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-between lg:items-start lg:px-20 lg:py-20">
                <div className="flex flex-col justify-center items-center lg:items-start">
                    <h1 className="text-4xl font-bold text-center lg:text-left">Interests</h1>
                    <p className="text-center lg:text-left">I am interested in web development, data science, and machine learning.</p>
                </div>
                <div className="flex flex-col justify-center items-center lg:items-start">
                    <h1 className="text-4xl font-bold text-center lg:text-left">Hobbies</h1>
                    <p className="text-center lg:text-left">I enjoy playing video games, watching anime, and Photography.</p>
                </div>
            </div>
        </>
    )
}

export default Description;