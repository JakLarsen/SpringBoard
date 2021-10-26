import React, {useState} from 'react'
import './MainForm.css'





const MainForm = ({addStory}) => {

    const INITIAL_STATE = {
        noun1: "",
        noun2: "",
        adjective: "",
        color: ""
    }

    const [formData, setFormData] = useState(INITIAL_STATE)
    
    const handleChange = (e) => {
        const {name, value} = e.target
        console.log(name, value)
        setFormData(formData => (
            {
                ...formData,
                [name]: value
            }
        ))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('SUBMITTED')
        addStory({...formData})
        setFormData(INITIAL_STATE)
    }

    return (
        <div className="MainForm">
            <h1>ENTER MADLIBS DATA</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    id="noun1" name="noun1" 
                    type="text" placeholder="noun1" 
                    value={formData.noun1} onChange={handleChange}
                />
                <input 
                    id="noun2" name="noun2" 
                    type="text" placeholder="noun2" 
                    value={formData.noun2} onChange={handleChange}
                />
                <input 
                    id="adjective" name="adjective" 
                    type="text" placeholder="adjective" 
                    value={formData.adjective} onChange={handleChange}
                />
                <input 
                    id="color" name="color" 
                    type="text" value={formData.color} 
                    placeholder="color" onChange={handleChange}
                />
                <button>LIB IT!</button>
            </form>     
        </div>   
    )
}

export default MainForm