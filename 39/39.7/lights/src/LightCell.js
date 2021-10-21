import React from "react";
import './LightCell.css'





const LightCell = ({changeLights, val, lit, x, y}) => {
    const classes = `LightCell ${val ? "Light" : "Dark"}`
    return(
        <div 
            onClick={changeLights}
            className={`${classes}`}
        >
            {val}
        </div>
    )
}

export default LightCell