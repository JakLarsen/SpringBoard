



const Cola = () => {
    return(
        <div>
            <h1>You've selected some Cola. Dispensing.</h1>
            <button onClick={()=> window.history.back()}>Go Back</button>
            <img src='https://images.heb.com/is/image/HEBGrocery/000862949?fit=constrain,1&wid=800&hei=800&fmt=jpg&qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0'/>
        </div>
    )
}

export default Cola