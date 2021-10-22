import React, {useState} from 'react'

const UserForm = () => {

    const initialState = {
        username: "",
        email: "",
        password: ""
    }
    const [formData, setFormData] = useState(initialState)

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData(data => ({
            ...data,
            [name]: value
        }))
        console.log(name, value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(`Created user: ${formData.username}`)
        console.log(`Password: ${formData.password}`)
        console.log(`With email: ${formData.email}`)
        setFormData(initialState)
    }

    return (
        //Submit form (can also hit enter for this one) or hit button for same functionality
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input 
                id="username" name="username" 
                type="text" placeholder="username" 
                value={formData.username} onChange={handleChange}/>
            
            <label htmlFor="password">Password</label>
            <input 
                id="password" name="password" 
                type="text" placeholder="password" 
                value={formData.password} onChange={handleChange}/>

            <label htmlFor="email">Email</label>
            <input 
                id="email" name="email" 
                type="email" placeholder="email" 
                value={formData.email} onChange={handleChange}/>
            
            <button>Add User</button>
        </form>
    )
}

export default UserForm