import React, {useState} from 'react'
import {
    Card,
    CardBody,
    CardTitle,
    CardText,
  } from "reactstrap";
import './css/MenuItemForm.css'



/**
 * Form to add a snack or drink to the menu
 * (Only using State currently, not our pseudo-database)
 */

const MenuItemForm = ({title, addSnack, addDrink}) => {

    const INITIAL_STATE = {
        id: "",
        itemType: "",
        name: "",
        description: "",
        recipe: "",
        serve: ""
    }

    const [formData, setFormData] = useState(INITIAL_STATE)

    //A toggle to see if we're adding a snack or drink
    let addFunctionToUse = (
        title === 'Snacks' ? addSnack : addDrink
    )

    /**
     * onChange controlled-handler for all MenuItemForm input fields
     */
    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData(formData => (
            {
                ...formData,
                [name]: value
            }
        ))
    }

    /**
     * onSubmit handler for our form
     * Uses addSnack or addDrink as addFunctionToUse based which type
     * Resets form values on submit
     */
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('SUBMITTED')
        //Could add to database as well, not just state
        //For some reason the fireEvent click doesn't think addFunctionToUse is a function
        addFunctionToUse({...formData})
        setFormData(INITIAL_STATE)
    }

    return (
        <div>
            <Card>
                <CardBody>
                    <CardTitle className="font-weight-bold text-center">
                        {`Add ${title} Form`}
                    </CardTitle>
                    <CardText>
                        Add a new item to the menu!
                    </CardText>

                    <form className="menu-item-form" onSubmit={handleSubmit}>
                        <label htmlFor="item-type">Category: </label>
                        <input 
                            id="itemType" name="itemType" 
                            type="text" placeholder="snacks or drinks" 
                            value={formData.itemType} onChange={handleChange}
                        />
                        <label htmlFor="name">Name:</label>
                        <input 
                            id='name' name='name' 
                            placeholder="item name"
                            value={formData.name} onChange={handleChange}  
                        />
                        <label htmlFor="id">ID:</label>
                        <input 
                            id='id' name='id' 
                            placeholder="item id"
                            value={formData.id} onChange={handleChange}  
                        />
                        <label htmlFor="description">Description:</label>
                        <input 
                            id='description' name='description' 
                            placeholder="A delicious snack"
                            value={formData.description} onChange={handleChange}  
                        />
                        <label htmlFor="recipe">Recipe:</label>
                        <input 
                            id='recipe' name='recipe' 
                            placeholder="cheese whizz and potatoes" 
                            value={formData.recipe} onChange={handleChange} 
                        />
                        <label htmlFor="serve">Serve:</label>
                        <input 
                            id='serve' name='serve' 
                            placeholder="ice cold"
                            value={formData.serve} onChange={handleChange} 
                        />
                        <button>Add item</button>
                    </form>   

                </CardBody>
            </Card>
        </div>
    )
}

export default MenuItemForm
