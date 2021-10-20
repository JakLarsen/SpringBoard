import React from "react";

const ColorButton = ({addCircle, color}) =>{
    return(
        <button 
            onClick={()=>addCircle(color)}
            style={{backgroundColor: color}}
        >
            {color}
        </button>    
    )
}

export default ColorButton