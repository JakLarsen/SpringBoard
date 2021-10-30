import {NavLink} from 'react-router-dom'
import './Navbar.css'



const Navbar = () => {

    return (
        <nav>
            <NavLink exact to='/chips'>Chips</NavLink>
            <NavLink exact to='/Candy'>Candy</NavLink>
            <NavLink exact to='/Cola'>Cola</NavLink>
        </nav>
    )
}

export default Navbar