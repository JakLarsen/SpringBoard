import React from "react";
import '../css/UserHome.css'
import {NavLink} from "react-router-dom";



const Welcome = () => {

    return(
        <div className="UserHome">
            <div id="UserHome-brand">Jobly</div>
            <p id="UserHome-caption">Welcome back, Username!</p>
        </div>
    )


}


export default Welcome
