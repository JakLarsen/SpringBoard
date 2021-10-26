import React, {useState, useEffect} from 'react'
import useLocalStorageState from './hooks/useLocalStorageState'



const Counter = () => {
 
    const [count, setCount] = useLocalStorageState('count', 0)
    const [count2, setCount2] = useLocalStorageState('count2', 0)

    // const [count, setCount] = useState(() => {
    //     let value = JSON.parse(window.localStorage.getItem('count') || 0)
    //     return value
    // })
    // useEffect(()=> {
    //     window.localStorage.setItem('count', count);
    // }, [count])

    const updateCount = () => {
        setCount(count => count + 1)
    }
    const updateCount2 = () => {
        setCount2(count2 => count2 + 1)
    }
    const clearLocal = () => {
        localStorage.clear();
        setCount(0)
        setCount2(0)
    }

    return (
        <div>
            <h1>Count1: {count}</h1>
            <h1>Count2: {count2}</h1>
            <button onClick={updateCount}>Add 1 to Count1</button>
            <button onClick={updateCount2}>Add 1 to Count2</button>
            <button onClick={clearLocal}>Clear</button>
        </div>
    )
}

export default Counter