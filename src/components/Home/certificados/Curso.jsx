import React from "react";


const Curso =({curso})=>{
    console.log(curso)
    return(
        <div className="cardCurso">
            <h1>hola</h1>
            <h1>{curso.title}</h1>
        </div>
    )
}
export default Curso