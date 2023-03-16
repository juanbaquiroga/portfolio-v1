import React from "react";
import Skill from './Skill'

const Skills = ({skills, type})=>{
    

    return(
        <>
        <div className="skillsCard">
            <h3 className="skillsTitle">{type}</h3>
            {skills.map((skill)=>
                <Skill key={skill.id} skill={skill}/>
            )}
           
        </div>
        </>
    )
}
export default Skills