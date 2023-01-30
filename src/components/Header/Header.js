import React from "react";
import logo from '../../assets/logo-blanco.png'
import Sidebar from './sidebar/Sidebar'

const Header =()=>{
    return(
        <>
            <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
            <a href="/"><img className="logoNav" src={logo} alt="logo" /></a>
        </>
    )
}
export default Header



