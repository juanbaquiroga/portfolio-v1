import React, {useState} from "react";
import Project from './Project'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = ({projects})=>{
    const [width, setWidth] = useState(window.innerWidth);
    const desktop = width > 768
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: desktop,
      };
      
      return (
        <>
        <Slider {...settings} className="sliderProjects">
            {projects.map((project)=>
                <Project key={project.id} project={project}/>
            )}
        </Slider>
        </>
      );
}
export default Projects