const Project =({project})=>{
    return (
        <>
            <div className="projectCard">
                <img className="projectImg" src={project.img} alt={project.title} />
                <div className="projectContent">
                    <h3 className="projectTitle">{project.title}</h3>
                    <p className="projectDescription">{project.description}</p>
                    <div className="projectTecnologies">
                        {project.tecnologies.map((tecnology) => (
                            <p className="tecnology">{tecnology}</p>
                        ))}
                    </div>
                    <div className="projectLinks">
                        <a alt={project.url} className="projectLink" rel="noreferrer"  target="_blank" href={project.url}>View Project</a>
                        {project.github?(
                            <a alt={project.github} className="projectLink" rel="noreferrer"  target="_blank" href={project.github}>View Repo</a>
                        ):(
                            <></>
                        )}
                    </div>
                </div>
            </div>
            
        </>
    )
}
export default Project