import React, {useState} from 'react'

const UserForm = () => {

    const [username, setUsername] = useState("")

    //Can add live validation if you use controlled components
    const handleChange = (e) => {
        console.log('handleChange()')
        console.log(e.target.value)
        setUsername(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(`Created user: ${username}`)
        setUsername("")
    }

    return (
        //Submit form (can also hit enter for this one) or hit button for same functionality
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input id="username" type="text" placeholder="username" value={username} onChange={handleChange}/>
            <button>Add</button>
        </form>
    )
}

export default UserForm