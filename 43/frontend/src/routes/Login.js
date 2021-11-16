import React, {useEffect, useState} from "react";
import {useParams, useNavigate} from 'react-router-dom'
import '../css/Login.css'
import JoblyApi from "../api";
import Alert from "./Alert";



const Login = ({login}) => {

    let navigate = useNavigate();
    
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });
    const [formErrors, setFormErrors] = useState([]);
    
    function handleChange(evt) {
        const { name, value } = evt.target;
        setFormData(data => ({ ...data, [name]: value }));
        console.log(name, value)
    }

    async function handleSubmit(evt) {
        console.log('in handleSubmit() in Login')
        evt.preventDefault();
        let result = await login(formData);
        if (result.success) {
          navigate("/");
        } 
        else {
          setFormErrors(result.errors);
        }
    }

    return (
        <div className="Login">
            <div className="Login-form-title">Log in</div>
            <form onSubmit={handleSubmit} className="Login-form">
                <label className="Login-form-label">Username: </label>
                    <input 
                        className="Login-form-input" type="text" 
                        placeholder="enter your username" name="username"
                        onChange={handleChange}
                    />
                <label className="Login-form-label">Password: </label>
                    <input 
                        className="Login-form-input" type="text" 
                        placeholder="enter your password" name="password"
                        onChange={handleChange}
                    />
                <div className="Login-form-error-div">
                    {formErrors.length ? <Alert type="danger" messages={formErrors} /> : null}
                </div>
                <div onClick={handleSubmit} className="Login-submit-btn">Submit</div>

            </form>
        </div>
    )
}

export default Login