import React from "react";
import Skill from './Skill'


const Skills = ({cursos})=>{
    
    return(
        <div className="containerCards">
        {cursos.map((curso)=>
            <Skill key={curso.id} curso={curso}/>
        )}
        </div>
    )
}
export default Skills