import Card from "./projects/Card";


const Projects = () => {
    return (
        <>
            {
                [1,2,3].map((item, index) => (
                    <Card key={index} src={'/icons/next.svg'} title={`Project ${index}`} />
                )
                )
            }
        </>
    )
}
export default Projects;