import React from "react";
import { NavLink } from "react-router-dom";
import './nav.css';
import bell from '../src/img/Icon-bell.png';
import hamburger from '../src/img/Icon-hamburger.png';
import home from '../src/img/Icon-home.png';
import person from '../src/img/Icon-person.png';
function Nav() {
    return (
        <nav>
            <li>

                <NavLink exact="true" activeclassname="active" to="/"><img className="home-img" src={home}></img>Home</NavLink>
            </li>
            <li>
                <NavLink activeclassname="active" to="/Page"><img className="hamburger-img" src={hamburger}></img>Overzicht</NavLink>
            </li>
            <li>
                <NavLink activeclassname="active" to="/Testpagina"><img className="bell-img" src={bell}></img>Testpagina</NavLink>
            </li>
            <li>
                <NavLink activeclassname="active" to="/Testpagina"><img className="person-img" src={person}></img>Testpagina</NavLink>
            </li>
        </nav>
    );
}
export default Nav;