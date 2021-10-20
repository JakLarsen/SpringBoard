import React, {useState} from "react";
import Circle from "./Circle";
import ColorButtons from "./ColorButtons";

const ColoredCircles = () =>{

    const [circles, setCircles] = useState()
    
    const addCircle = (color) =>{
        setCircles(circles => {
            return [...circles, {color, x: getRandom(), y: getRandom()}]
        })
    }

    function getRandom(min = 0, max = 100){
        return Math.random() * (max-min) + min
    }

    const changePosition = (idx) =>{
        setCircles(circles =>{
            const copy = [...circles]
            copy[idx].x = getRandom()
            copy[idx].y = getRandom()
            return copy
        })
    }


    return (
        <div>
            <ColorButtons addCircle={addCircle} options={['indigo', 'peachpuff', 'lavender']}/>
            {circles.map(({color, x, y}, idx) => (
                <Circle changePosition={changePosition} color={color} idx={idx} key={idx} x={x} y={y}/>
            ))}
        </div>
    )

}

export default ColoredCircles



/**
 * 
 * {
 *  color: 'blue',
 *  x: 39,
 *  y: 69,
 * }
 */