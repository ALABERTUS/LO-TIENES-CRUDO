import React from "react";
import './NavBar.css'

const NavBar = (props) => {
    return (
        <div>
            <nav className="navbar">
                <div className="container-logo">
                    <span className="texto-logo"> Technology Expert </span>
                </div>
                <ul className="nav-options">
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Our team</a></li>
                </ul>
            </nav>
        </div>

    )
}

export default NavBar;