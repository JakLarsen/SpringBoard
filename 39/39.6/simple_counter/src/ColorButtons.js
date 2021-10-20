import React from "react";
import ColorButton from "./ColorButton";

const ColorButtons = ({addCircle, options}) =>{
    return(
        <div>
            {options.map(option=>
               <ColorButton color={option} addCircle={addCircle}/>
            )}
        </div>       
    )
}

export default ColorButtons