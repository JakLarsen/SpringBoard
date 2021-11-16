import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "./Alert";
import '../css/Signup.css'



function Signup({ signup }) {

    let navigate = useNavigate();

    const [formData, setFormData] = useState({
      username: "",
      password: "",
      firstName: "",
      lastName: "",
      email: "",
    });
    const [formErrors, setFormErrors] = useState([]);
  
  
    /** Handle form submit:
     *
     * Calls login func prop and, if successful, redirect to /companies.
     */
  
    async function handleSubmit(evt) {
      evt.preventDefault();
      let result = await signup(formData);
      if (result.success) {
        navigate("/companies");
      } else {
        setFormErrors(result.errors);
      }
    }
  
    /** Update form data field */
    function handleChange(evt) {
      const { name, value } = evt.target;
      setFormData(data => ({ ...data, [name]: value }));
    }


    return (
        <div className="Signup">
            <div className="Signup-form-title">Sign Up</div>
            <form onSubmit={handleSubmit} className="Signup-form">
                <label className="label">Username: </label>
                    <input 
                        className="input" name="username"
                        type="text" 
                        placeholder="Create a username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                <label className="label">Password: </label>
                    <input 
                        className="input" name="password"
                        type="text" 
                        placeholder="Enter a password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                <label className="label">First Name: </label>
                    <input 
                        className="input" name="firstName"
                        type="text" 
                        placeholder="What is your first name"
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                <label className="label">Last Name: </label>
                    <input 
                        className="input" name="lastName"
                        type="text" 
                        placeholder="What is your last name"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                <label className="label">Email: </label>
                    <input 
                        className="input" name="email"
                        type="text" 
                        placeholder="Please enter an email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                <div onClick={handleSubmit} className="submit-btn">Submit</div>
            </form>
        </div>
    )
}

export default Signup