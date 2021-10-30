import { NavLink, useParams } from "react-router-dom";




const Color= () => {
 
    let { color } = useParams();

    const colorStyle = {
        color: `#${color}`
    }

    return (


        <div style={colorStyle}>
            <h1>You selected #{color}.</h1>
            <NavLink to="/colors">Add another color?</NavLink>
        </div>
    )
}

export default Color