import React, {useContext} from "react";
import ThemeContext from "./ThemeContext";

const Navbar = () => {


    const {color, toggleColor} = useContext(ThemeContext)
    return(
        <nav style={{backgroundColor: color}}>
            <h4>WEBSITE</h4>
            <button onClick={toggleColor}>Toggle Color</button>
        </nav>
    )
}

export default Navbar