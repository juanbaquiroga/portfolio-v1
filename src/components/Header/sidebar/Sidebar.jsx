import React from 'react';
import { stack as Menu } from 'react-burger-menu';
import './sidebar.css';
import { VscGithubAlt } from 'react-icons/vsc'
import { CiLinkedin } from 'react-icons/ci'

const Sidebar = () => {
  return (
        <Menu right>
            <a className="menu-item" href="#courses">
                courses
            </a>
            <a className="menu-item" href="#skills">
                Skills
            </a>
            <a className="menu-item" href="#projects">
                projects
            </a>
            <div className='menu-metworks'>
                <a className="network" href="https://github.com/juanbaquiroga"><VscGithubAlt style={{fontSize:'40px'}}/></a>
                <a className="network" href="https://linkedin.com/in/juanbaquiroga"><CiLinkedin style={{fontSize:'40px'}}/></a>
            </div>
        </Menu>
  );
};

export default Sidebar