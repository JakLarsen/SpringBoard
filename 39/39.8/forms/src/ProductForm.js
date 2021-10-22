import React, {useState} from "react";

const ProductForm = ({addItemToShoppingList}) => {

    const INITIAL_STATE = {
        name: "",
        qty: 0
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

        addItemToShoppingList({...formData})
        console.log(`You added ${formData.qty} of ${formData.name}.`)

        setFormData(INITIAL_STATE)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input 
                id="name" name="name" 
                type="text" placeholder="product" 
                value={formData.name} onChange={handleChange}/>
            <label htmlFor="qty">Quantity</label>
            <input 
                id="qty" name="qty" 
                type="range" min="1" max="10" placeholder="amount" 
                value={formData.qty} onChange={handleChange}/>
            <h4>{formData.qty}</h4>
            <button>Done</button>
        </form>
    )
}

export default ProductForm