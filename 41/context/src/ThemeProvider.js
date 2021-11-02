import ThemeContext from "./ThemeContext";
import React, {useState} from 'react'



const ThemeProvider = ({children}) => {

    const [color, setColor] = useState('magenta')
    const toggleColor = () => {
        console.log('toggleColor called')
        setColor(color => (
            color === 'magenta' ? 'teal' : 'magenta'
        ))
    }
    
    return (
        <ThemeContext.Provider value={{color, toggleColor}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider