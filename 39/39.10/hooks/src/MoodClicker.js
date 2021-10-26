import React, {useState} from 'react'
import './MoodClicker.css'






const MoodClicker = () => {


    const [isHappy, setIsHappy] = useState(true)
    const [isDarkMode, setIsDarkMode] = useState(false)

    const handleMood = (e) => {
        setIsHappy(!isHappy)
    }

    const handleDarkMode = (e) => {
        setIsDarkMode(!isDarkMode)
    }

    return (
        <div className={isDarkMode ? 'MoodClicker MoodClicker-dark' : 'MoodClicker MoodClicker-light'}>
            <h1>{isHappy ? `:)` : `:(`}</h1>
            <button onClick={handleMood}>Change Mood</button>
            <button onClick={handleDarkMode}>DarkMode Toggle</button>
        </div>
    )
}

export default MoodClicker