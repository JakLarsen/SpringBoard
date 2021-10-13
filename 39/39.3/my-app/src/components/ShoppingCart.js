import React from 'react';
import ShoppingCartItem from './ShoppingCartItem';


const ShoppingCart = ({items}) =>{
    const total = items.reduce((acc, i)=>{
        return acc + i.price * i.qty
    }, 0)
    return(
        <div>
            <h1>Shopping Cart</h1>
            {items.map(i => (
                <ShoppingCartItem 
                key={i.id} 
                name={i.name} 
                img={i.img} 
                price={i.price} 
                qty={i.qty} />
            ))}
            <b>Cart Total: ${total}</b>
        </div>
    )
}

export default ShoppingCart