import React, {useState} from 'react'

function SimpleCounter(){

    const [num, setNum] = useState(0) //First piece of state
    // const [num2, setNum2] = useState(0) //Second piece of state

    const clickUp = () =>{
        setNum(n => n + 1)
    }
    const clickUp2 = ()=>{
        setNum(n => n + 1)
        setNum(n => n + 1)
    }

    return (
        <div>
            <h1>Count 1: {num}</h1>
            <button onClick={clickUp}>Add 1</button>
            <button onClick={clickUp2}>Add 2</button>
        </div>
    )
}

export default SimpleCounter