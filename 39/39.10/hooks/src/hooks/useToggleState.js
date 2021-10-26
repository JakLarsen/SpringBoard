import React, {useState} from "react";

const useToggleState = (initialState = true) => {

    const [state, setState] = useState(initialState)
    const toggleState = () => {
        setState(!state)
    }
    return [state, toggleState]
}

export default useToggleState



//Making piece of state - starts as true or false
//Making a function to toggle
//Then return those two things



//  const [isHappy, setIsHappy] = useState(true)
//  const [isDarkMode, setIsDarkMode] = useState(false)

//  const handleMood = (e) => {
//      setIsHappy(!isHappy)
//  }

//  const handleDarkMode = (e) => {
//      setIsDarkMode(!isDarkMode)
//  }