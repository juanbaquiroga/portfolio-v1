import React from "react";
import Curso from './Curso.jsx'


const Cursos = ({cursos})=>{
    
    return(
        <div className="containerCards">
        {cursos.map((curso)=>
            <Curso key={curso.id} curso={curso}/>
        )}
        </div>
    )
}
export default Cursos