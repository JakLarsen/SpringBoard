import React, {useState, useContext} from "react";
import CountContext from "./CountContext";
import GrandChild from "./GrandChild";
import ThemeContext from './ThemeContext'



const Child = () => {

    const [count, setCount] = useState(0)
    const color = useContext(ThemeContext)

    const addToCount = () => {
        setCount(count + 1)
        countContextObj.count = count
        countContextObj.nextCount = count + 1
    }

    let countContextObj = {
        addToCount,
        count: count,
        nextCount: count+1,
    }
    
    return (
        <CountContext.Provider value={countContextObj}>
            <div>
                <h1>I'm the child</h1>
                <h4>I own count. Count is {count}</h4>
                <h4>I own color. Color is {color}</h4>
                <button onClick={addToCount}>Add</button>
                <GrandChild/>
            </div>
        </CountContext.Provider>
        
    )

}

export default Child