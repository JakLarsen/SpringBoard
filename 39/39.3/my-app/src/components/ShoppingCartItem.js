import '../static/css/ShoppingCartItem.css'





const ShoppingCartItem = ({name, img, price, qty}) =>{
    return (
        <div className='ShoppingCartItem-container'>
            <h4>{name}</h4>
            <img src={img} width = "200" alt=""/>
            <ul>
                <li>Price: ${price}</li>
                <li>Quantity: {qty}</li>
                <li>Subtotal: ${price*qty}</li>
            </ul>
        </div>
    )
}

export default ShoppingCartItem