import React, { useContext } from "react";
import "./css/Navbar.css";
import {NavLink} from "react-router-dom";
import UserContext from "./UserContext";
import JoblyApi from './api'


const Navbar = ({ logout }) => {

    const { currentUser } = useContext(UserContext);
    
    function loggedIn() {
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
                    <NavLink exact to="/profile" className="nav-items">
                        Profile
                    </NavLink>
                    <NavLink onClick={logout} exact to="/" className="nav-items">
                        Log out {currentUser.first_name || currentUser.username}
                    </NavLink>
                </div>
            </div>
        )
    }

    function loggedOut() {
        return (
            <div className="Navbar">
                <NavLink exact to="/" className="Navbar-brand nav-items left">
                    Jobly
                </NavLink>
                <div className="Navbar-right">
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

    return (
        <div>
            {currentUser ? loggedIn() : loggedOut()}
        </div>
    )
}

export default Navbar