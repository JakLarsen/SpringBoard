import {
    Card,
    CardBody,
    CardTitle,
    CardText,
  } from "reactstrap";
import './MenuItemForm.css'




const MenuItemForm = ({title}) => {


    const handleSubmit = (e) => {
        e.preventDefault();
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
                            id='item-type' name='item-type' 
                            placeholder="'snacks' or 'drinks'"  
                        />
                        <label htmlFor="name">Name:</label>
                        <input 
                            id='name' name='name' 
                            placeholder="item name"  
                        />
                        <label htmlFor="description">Description:</label>
                        <input 
                            id='description' name='description' 
                            placeholder="A delicious snack"  
                        />
                        <label htmlFor="recipe">Recipe:</label>
                        <input 
                            id='recipe' name='recipe' 
                            placeholder="cheese whizz and potatoes"  
                        />
                        <label htmlFor="serve">Serve:</label>
                        <input 
                            id='serve' name='serve' 
                            placeholder="ice cold"  
                        />
                        <button>Add item</button>
                    </form>

                </CardBody>
            </Card>
        </div>
    )
}

export default MenuItemForm
