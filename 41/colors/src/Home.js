import { NavLink } from "react-router-dom"




const Home = () => {
    
    return (
        <div>
            <h4>Welcome to the color factory.</h4>
            <NavLink to="/colors">Add some color?</NavLink>
        </div>
    )
}

export default Home