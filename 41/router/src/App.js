import './App.css';
import { BrowserRouter, Route, Link, NavLink } from 'react-router-dom'
import Home from './Home';
import PageNotFound from './PageNotFound'
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">



      <BrowserRouter>
        {/* <nav>
          <Link to='/'>Home</Link>
          <Link to='/404'>Page Not Found</Link>
        </nav>
        <nav>
          <NavLink exact to='/'>Home</NavLink>
          <NavLink exact to='/404'>Page Not Found</NavLink>
        </nav> */}

        <Navbar/>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route exact path='/404'>
          <PageNotFound/>
        </Route>
      </BrowserRouter>



    </div>
  );
}

export default App;
