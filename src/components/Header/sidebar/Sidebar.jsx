import React from 'react';
import { stack as Menu } from 'react-burger-menu';
import './sidebar.css';

const Sidebar = () => {
  return (
        <Menu right>
        <a className="menu-item" href="/">
            courses
        </a>
        <a className="menu-item" href="/salads">
            knowledge
        </a>
        <a className="menu-item" href="/pizzas">
            projects
        </a>
        </Menu>
  );
};

export default Sidebar