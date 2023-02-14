import React from "react";


const Curso =({curso})=>{
    console.log(curso)
    return(
        // <div className="cardCurso">
        //     <a href={curso.url} target="_blank"className="overlayContainer">
        //         <img className="cardImage" src={curso.img} alt={curso.title} />
        //         <div className="overlayMiddle">
        //             <p className="overlayText">see more</p>
        //         </div>
        //     </a>
        //     <div className="cardText">
        //         <h2 className="cardTitle">{curso.title}</h2>
        //         <p className="cardId"> <b>ID:</b> {curso.id2}</p>
        //         <ul className="skillsList">
        //             {curso.skills.map((skill, index) => (
        //                 <li className="skill" key={index}>{skill}</li>
        //             ))}
        //         </ul>
        //     </div>
        // </div>
        <div class="card">
            <div class="slide slide1">
                <img className="cardImage" src={curso.img} alt={curso.title} />
            </div>
            <div class="slide slide2">
                <div class="content">
                    <h2>
                        {curso.title}
                    </h2>
                    <p><b>ID:</b> {curso.id2}</p>
                    <ul className="skillsList">
                    {curso.skills.map((skill, index) => (
                        <li className="skill" key={index}>{skill}</li>
                    ))}
                    </ul>
                    <a href={curso.url} target="_blank"></a>
                </div>
            </div>
        </div>
    )
}
export default Curso