import React, {useState, useContext} from "react";
import CountContext from "./CountContext";
import ThemeContext from "./ThemeContext";

const GrandChild = () => {

    const {count, nextCount, addToCount} = useContext(CountContext)
    const color = useContext(ThemeContext)

    return (
            <div>
                <h1>I'm the grandchild</h1>
                <h4>I own count. Count is {count}</h4>
                <h4>I own count. nextCount is {nextCount}</h4>
                <h4>I own color. Color is {color}</h4>
                <button onClick={addToCount}>Add from GrandChild</button>
            </div>
    )
}

export default GrandChild