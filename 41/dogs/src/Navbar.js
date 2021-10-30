import {NavLink} from 'react-router-dom'


const Navbar = () => {


    return (
        <nav>
            <NavLink exact to='/dogs/whiskey'>Whiskey</NavLink>
            <NavLink exact to='/dogs/duke'>Duke</NavLink>
            <NavLink exact to='/dogs/perry'>Perry</NavLink>
            <NavLink exact to='/dogs/tubby'>Tubby</NavLink>
        </nav>
    )
}

export default Navbar