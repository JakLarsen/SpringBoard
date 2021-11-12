import React from "react";
import '../css/Login.css'



const Login = () => {


    return (
        <div className="Login">
            <div className="Login-form-title">Log in</div>
            <form className="Login-form">
                <label className="Login-form-label">Username: </label>
                    <input className="Login-form-input" type="text" placeholder="enter your username"/>
                <label className="Login-form-label">Password: </label>
                    <input className="Login-form-input" type="text" placeholder="enter your password"/>
                <div className="Login-submit-btn">Submit</div>
            </form>
        </div>
    )
}

export default Login