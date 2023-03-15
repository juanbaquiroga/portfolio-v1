import React from "react";
import Project from './Project'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = ({projects})=>{
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
      };
      
      return (
        <>
        <Slider {...settings} style={{width:"80%"}}>
            {projects.map((project)=>
                <Project key={project.id} project={project}/>
            )}
        </Slider>
        </>
      );
}
export default Projects