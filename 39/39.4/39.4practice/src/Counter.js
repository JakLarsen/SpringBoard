import React, { useState } from 'react'








const Counter = () =>{
    
    const [ count, updateCount ] = useState(99)

    return(
        <>
            <h1>Count is: {count}</h1>
            <button onClick={()=>updateCount(count+1)}>Add</button>
            <button onClick={()=>updateCount(count-1)}>Subtract</button>
        </>
    )
}


export default Counter

