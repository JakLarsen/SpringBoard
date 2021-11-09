import React from "react";
import '../css/Home.css'
import {NavLink} from "react-router-dom";



const Home = () => {

    return(
        <div className="Home">
            <div id="Home-brand">Jobly</div>
            <p id="Home-caption">All the best jobs in one, convenient place.</p>
            <div id="Home-btn-wrap">
                <NavLink exact to="/login" className="Home-btn">
                    <div id="Home-login-btn">Log in</div>
                </NavLink>
                <NavLink exact to="/signup" className="Home-btn">
                    <div id="Home-signup-btn">Sign up</div>
                </NavLink>
            </div>
        </div>
    )


}


export default Home
