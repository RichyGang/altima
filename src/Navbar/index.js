import React from 'react';
import {NavLink} from "react-router-dom";
import "./index.css"

const Navbar = () => {
    return (
        <nav className="navbar">
            <div>
                <NavLink to="/"> Logo </NavLink>
            </div>
            <div className="routes">
                <NavLink to="/resources">Ressources</NavLink>
                <NavLink to="/categories">Categories</NavLink>
                <NavLink to="/units">Unités</NavLink>
            </div>
            <div>Params</div>
        </nav>
    );
};

export default Navbar;
