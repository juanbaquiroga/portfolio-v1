import React from 'react';
import { stack as Menu } from 'react-burger-menu';
import './sidebar.css';

const Sidebar = () => {
  return (
        <Menu right>
        <a className="menu-item" href="#courses">
            courses
        </a>
        <a className="menu-item" href="/">
            knowledge
        </a>
        <a className="menu-item" href="/">
            projects
        </a>
        </Menu>
  );
};

export default Sidebar