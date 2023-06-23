import React from "react";
import logo from '../src/img/logo.png';
import './header.css'

function Header() {
    return (
        <div className="imgholder">
            <img className="logo-img" src={logo}></img>
        </div>
    );
}

export default Header;