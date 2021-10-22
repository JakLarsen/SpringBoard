import React, {useState} from "react";      
import Item from "./Item";
import ProductForm from "./ProductForm";
import { v4 as uuidv4, v4 } from 'uuid';





const ShoppingList = () => {
    const INITIAL_STATE = [
        {
           id: uuidv4(),
           name: "Peanut Butter",
           qty: 2 
        },
        {
            id: uuidv4(),
            name: "Whole Milk",
            qty: 1
        }
    ]
    const [items, setItems] = useState(INITIAL_STATE)

    const addItemToShoppingList = (newItem) => {
        setItems(items => [...items, {...newItem, id: uuidv4()}])
    }

    return (
        <div>
            <h3>Shopping List</h3> 
            <div>
                {items.map(item=>
                    <Item name={item.name} qty={item.qty} key={item.id} id={item.id}/>
                )}
            </div>
            <ProductForm addItemToShoppingList={addItemToShoppingList}/>

        </div>
    )


}

export default ShoppingList