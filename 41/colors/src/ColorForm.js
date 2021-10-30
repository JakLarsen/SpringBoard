import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import { stripFirstChar } from './helpers'





const ColorForm = () => {
 


    const INITIAL_STATE = "#272727"

    const [color, setColor] = useState(INITIAL_STATE)
    const history = useHistory()

    const handleChange = (e) => {
        setColor(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        let ourColor = stripFirstChar(color)
        history.push(`/colors/${ourColor}`)

    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="color">Choose your color: </label>
            <input 
                type="color" 
                id="color" 
                name="color" 
                value={color} 
                onChange={handleChange}
            />
            <button>Submit</button>
        </form>
    )
}

export default ColorForm