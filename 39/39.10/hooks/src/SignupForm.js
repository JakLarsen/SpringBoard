import React from "react";
import useFields from "./hooks/useFields";


const SignupForm = () => {

    const [formData, handleChange, resetFormData] = useFields(
        {
            username: '',
            password: '',
            email: ''
        }
    )

    const handleSubmit = (e) => {
        e.preventDefault();
        resetFormData();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Username: </label>
            <input id="username" name="username" type="text"
                value={formData.username} onChange={handleChange}
            />
            <label>Password: </label>
            <input id="password" name="password" type="text"
                value={formData.password} onChange={handleChange}
            />
            <label>Email: </label>
            <input id="email" name="email" type="text"
                value={formData.email} onChange={handleChange}
            />
            <button>Submit</button>
        </form>
    )


}

export default SignupForm


