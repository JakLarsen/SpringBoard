import React from 'react';


const ShoppingCart = ({items}) =>{

    return(
        <div>
            <h1>Shopping Cart</h1>
            <div>
                {items.map(i =>(
                <div>
                    <h4>{i.name}</h4>
                    <img src={i.img} width = "200"/>
                    <ul>
                    <li>Price: ${i.price}</li>
                    <li>Quantity: {i.qty}</li>
                    </ul>
                </div>
                ))}
            </div>
        </div>
    )
}

export default ShoppingCart