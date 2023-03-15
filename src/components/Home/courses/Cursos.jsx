import React from "react";
import Curso from './Course.jsx'
import { useState } from "react";
import down from '../../../assets/down.png'

const Cursos = ({cursos})=>{
    const [all, setAll] = useState(false)
    const seeLess = ()=>{
            setAll(false)
    }
    return(
        <>
        {!all?(
            <>
            <div className="cardList">
                {cursos.slice(0, 3).map((curso)=>
                    <Curso key={curso.id} curso={curso}/>
                )}
            </div>
            <button className="buttonSeeAll" onClick={()=>{setAll(true)}}><img src={down} alt="arrowDown" /></button>
            
            </>
        ):(
            <>
            <div className="cardList">
                {cursos.map((curso)=>
                    <Curso key={curso.id} curso={curso}/>
                )}
            </div>
            <a href="#courses" className="buttonSeeLess" onClick={seeLess}><img src={down} alt="arrowUp" /></a>
            </>
        )}
        </>
    )
}
export default Cursos