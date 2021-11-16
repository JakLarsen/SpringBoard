import React from "react";
import JoblyApi from "../api";


const Logout = () => {

    JoblyApi.currentUser = null

    return (
        <div className="Logout">
            <h1>Logged Out</h1>

        </div>
    )
}

export default Logout