import React, {useState, useEffect} from 'react'





const Counter = () =>{

    const [count, setCount] = useState(0)

    const updateCount = () => {
        console.log('updateCount()')
        setCount(count=>(
            count+1
        ))
    }

    //will run after every render unless specified
    useEffect(()=>{
        console.log('RUNNING CALLBACK!')
        document.title = `Hi${'!'.repeat(count)}`
    })
    

    return(
        <div>
            {console.log("Rendering DOM")}
            <h1>Count: {count}</h1>
           <button onClick={updateCount}>Add 1</button> 
        </div>
    )
}

export default Counter;