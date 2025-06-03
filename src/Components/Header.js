import React from "react";
import {BrowserRouter, NavLink } from 'react-router-dom';
import "../index.css"
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub  } from "react-icons/fa";

const Header = () => {

    const clickedStyle = (isActive) => {
        return{
            color: isActive? "white":"gray",
        }
    }

    return(
        <div className="header-con">
            <h2 className="header-h2">Portifolio</h2>
            <nav className="header-ul">
                <li><a>Home</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
            </nav>
            <ul className="header-icons">
                <li><FaLinkedinIn /></li>
                <li><FaFacebookF /></li>
                <li><FaInstagram /></li>
                <li><FaGithub /></li>
            </ul>
            <button className="header-connect-btn">Let's connect</button>
        </div>
    )
}

export default Header;