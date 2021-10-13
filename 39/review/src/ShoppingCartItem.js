import React from 'react';



const ShoppingCartItem = ({name, price, qty}) =>{
    return(
        <div>
            <h1>Item: {name}</h1>
            <h3>Price: {price}</h3>
            <h3>Quantity: {qty}</h3>
        </div>
    )
}

export default ShoppingCartItem;