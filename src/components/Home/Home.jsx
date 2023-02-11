import React from "react";
import Certificados from "./certificados/ContainerCursos";
import Skills from  "./Skills/ContainerSkills"
import down from "../../assets/down.png"

const Home =() =>{
    
    return(
        <>
        
        <div className="inicio">
            <h1 className="title">Hi, I am <br></br> Juan Bautista</h1>
            <h3 className="title2">full stack developer</h3>
            <a href="#courses"><img className="arrow-down" src={down} alt="arrow down" /></a>
        </div>
            <Certificados/>


        </>
    )
}
export default Home