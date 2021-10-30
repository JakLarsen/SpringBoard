import {NavLink} from 'react-router-dom'




const Navbar = () => {
    return (
        <nav>
          <NavLink exact to='/'>Home</NavLink>
          <NavLink exact to='/404'>Page Not Found</NavLink>
        </nav>
    )
}

export default Navbar