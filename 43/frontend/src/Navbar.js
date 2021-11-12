import React from "react";
import "./css/Navbar.css";
import {NavLink} from "react-router-dom";


const Navbar = () => {

    return (
        <div className="Navbar">
            <NavLink exact to="/" className="Navbar-brand nav-items left">
                Jobly
            </NavLink>
            <div className="Navbar-right">
                <NavLink exact to="/companies" className="nav-items">
                    Companies
                </NavLink>
                <NavLink exact to="/jobs" className="nav-items">
                    Jobs
                </NavLink>
                <NavLink exact to="/login" className="nav-items">
                    Login
                </NavLink>
                <NavLink exact to="/signup" className="nav-items">
                    Sign Up
                </NavLink>
            </div>
            
        </div>
    )
}

export default Navbar