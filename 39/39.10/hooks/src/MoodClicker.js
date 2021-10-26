import React, {useState} from 'react'
import useToggleState from './hooks/useToggleState'
import './MoodClicker.css'






const MoodClicker = () => {


    // const [isHappy, setIsHappy] = useState(true)
    // const [isDarkMode, setIsDarkMode] = useState(false)

    // const handleMood = (e) => {
    //     setIsHappy(!isHappy)
    // }

    // const handleDarkMode = (e) => {
    //     setIsDarkMode(!isDarkMode)
    // }

    const [isDarkMode, toggleMode] = useToggleState(false)
    const [isHappy, toggleIsHappy] = useToggleState(true)

    return (
        <div className={isDarkMode ? 'MoodClicker MoodClicker-dark' : 'MoodClicker MoodClicker-light'}>
            <h1>{isHappy ? `:)` : `:(`}</h1>
            <button onClick={toggleIsHappy}>Change Mood</button>
            <button onClick={toggleMode}>DarkMode Toggle</button>
        </div>
    )
}

export default MoodClicker