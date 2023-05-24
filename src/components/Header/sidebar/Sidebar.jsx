import React from 'react';
import { stack as Menu } from 'react-burger-menu';
import './sidebar.css';
import { VscGithubAlt } from 'react-icons/vsc'
import { CiLinkedin, CiMail } from 'react-icons/ci'

const Sidebar = () => {
  return (
        <Menu right>
            <a alt='courses' className="menu-item" href="#courses">
                courses
            </a>
            <a alt='skills' className="menu-item" href="#skills">
                Skills
            </a>
            <a alt='projects' className="menu-item" href="#projects">
                projects
            </a>
            <div className='menuNetworks'>
                <a alt='github' className="network" href="https://github.com/juanbaquiroga"><VscGithubAlt style={{fontSize:'40px'}}/></a>
                <a alt='linkedin' className="network" href="https://linkedin.com/in/juanbaquiroga"><CiLinkedin style={{fontSize:'40px'}}/></a>
                <a alt='email' className="network" href="mailto:juanbaquiroga@gmail.com?subject=<Feedback>&body=Message"><CiMail style={{fontSize:'40px'}}/></a>
            </div>
        </Menu>
  );
};

export default Sidebar