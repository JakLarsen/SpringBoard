import React from "react";
import '../css/Signup.css'



const Signup = () => {


    return (
        <div className="Signup">
            <div className="Signup-form-title">Sign Up</div>
            <form className="Signup-form">
                <label className="label">Username: </label>
                    <input className="input" type="text" placeholder="Create a username"/>
                <label className="label">Password: </label>
                    <input className="input" type="text" placeholder="Enter a password"/>
                <label className="label">First Name: </label>
                    <input className="input" type="text" placeholder="What is your first name"/>
                <label className="label">Last Name: </label>
                    <input className="input" type="text" placeholder="What is your last name"/>
                <label className="label">Email: </label>
                    <input className="input" type="text" placeholder="Please enter an email"/>
                <div className="submit-btn">Submit</div>
            </form>
        </div>
    )
}

export default Signup