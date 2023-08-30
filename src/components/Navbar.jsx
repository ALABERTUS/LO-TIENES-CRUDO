import React, { useState } from "react";
import {FaBars, FaTimes} from 'react-icons/fa'
import logo from './images/logo.png'
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const[click, setClick] =useState(false)
    const handleClick = () => setClick(!click)
    const closeMenu = () => setClick(false)

  return (
    <div className="header">
    <nav className="navbar">
      <Link to="/">
      <img src={logo} alt='logo' />
      </Link>
      <div className='hamburger' onClick={handleClick}>
                {click ? (<FaTimes size={30} />)
                        : (<FaBars size={30} />)}
      </div>  
      
      <ul className={click ? "nav-menu active" : "nav-menu"}>
      <li className="nav-item">
          <NavLink to="/" onClick={closeMenu}>Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" onClick={closeMenu}>About</NavLink>
        </li>
        <li className="nav-item" >
          <NavLink to="/services" onClick={closeMenu}>Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
        </li>
      </ul>
    </nav>
    </div>
  );
};
