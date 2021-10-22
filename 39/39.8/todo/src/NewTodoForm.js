import React, {useState} from 'react';






const NewTodoForm = ({addTodo}) =>{
    

    const INITIAL_STATE = {
        desc: ""
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
        
        addTodo({...formData})
        setFormData(INITIAL_STATE)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="desc"></label>
            <input 
                id="desc" name="desc" 
                type="text" placeholder="new todo"
                value={formData.desc} onChange={handleChange}/>
            <button>Add Todo</button>
        </form>
    )
}
export default NewTodoForm