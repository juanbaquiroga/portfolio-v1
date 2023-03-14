import React from "react";


const Skill =({skill})=>{
    
    const porcentaje = (skill.level * 10) + '%'
    
    return (
        <>
            <div className="skill">
                <h4>{skill.title}</h4>
                <div className="skillBar">
                    <div className="skillBarProgress" style={{ '--w':porcentaje}}></div>
                </div>
            </div>
            
        </>
    )
}
export default Skill