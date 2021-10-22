import React from "react";      

const Item = ({id, name, qty}) => {
   
    return (
        <div>
            <h3>Product: {name}</h3>
            <h4>Amount: {qty}</h4>
        </div>
    )


}

export default Item