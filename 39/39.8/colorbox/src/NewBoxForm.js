import React, {useState} from 'react'





const NewBoxForm = ({addBox}) => {


    const INITIAL_STATE = {
        height: "",
        width: "",
        backgroundColor: ""
    }

    const [formData, setFormData] = useState(INITIAL_STATE)

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData(data => (
            {
                ...formData,
                [name]: value
            }
        ))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Adding ${formData.height}x${formData.width} ${formData.color} rectangle.`)
        console.log({...formData})
        addBox({...formData})
        setFormData(INITIAL_STATE)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="height">Height: </label>
            <input 
                type="text" id="height" 
                name="height" placeholder="height in rem" 
                value={formData.height} onChange={handleChange}/>
            <br/>
            <label htmlFor="width">Width: </label>
            <input 
                type="text" id="width" 
                name="width" placeholder="width in rem" 
                value={formData.width} onChange={handleChange}/>
            <br/>
            <label htmlFor="color">Color: </label>
            <input 
                type="text" id="backgroundColor" 
                name="backgroundColor" placeholder="css color" 
                value={formData.backgroundColor} onChange={handleChange}/>
            <br/>
            <button>Add Rectangle</button>
        </form>
    )
}

export default NewBoxForm