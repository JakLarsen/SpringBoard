import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../UserContext";
import JoblyApi from '../api'
import '../css/Profile.css'


const Profile = () => {

    const { currentUser } = useContext(UserContext);

    let navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: currentUser.username,
        firstName: currentUser.firstName,
        lastName: currentUser.lastName,
        email: currentUser.email,
      });
      const [formErrors, setFormErrors] = useState([]);
    
    
      /** Handle form submit:
       *
       * Calls login func prop and, if successful, redirect to /companies.
       */
    
      async function handleSubmit(evt) {
        evt.preventDefault();
        console.log('SUBMITTED')
        let data = formData
        console.log(data)

        //LAST PART TO INSTANTIATE
        
        // let result = await JoblyApi.updateProfile(data)
        // if (result.success) {
        //   navigate("/companies");
        // } else {
        //   setFormErrors(result.errors);
        // }
      }
    
      /** Update form data field */
      function handleChange(evt) {
        const { name, value } = evt.target;
        console.log(name, value)
        setFormData(data => ({ ...data, [name]: value }));
      }

    return (
        <div className="Profile">
            <div className="Profile-form-title">Edit Profile</div>
            <form onSubmit={handleSubmit} className="Profile-form">
                <label className="label">Username: </label>
                    <input 
                        className="input" name="username"
                        type="text" 
                        placeholder="Create a username"
                        value={formData.username}
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

export default Profile