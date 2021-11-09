import React from "react";
import '../css/Login.css'



const Login = () => {


    return (
        <div className="Login">
            <div className="Login-form-title">Log in</div>
            <form className="Login-form">
                <label className="label">Username: </label>
                    <input className="input" type="text" placeholder="enter your username"/>
                <label className="label">Password: </label>
                    <input className="input" type="text" placeholder="enter your password"/>
            </form>
        </div>
    )
}

export default Login