import React from "react";
import Curso from './Curso.jsx'


const Cursos = ({cursos})=>{
    
    return(
        <>
        {cursos.map((curso)=>
            <Curso key={curso.id} curso={curso}/>
        )}
        </>
    )
}
export default Cursos