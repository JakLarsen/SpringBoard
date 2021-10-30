import './App.css';
import {BrowserRouter, Route, NavLink} from 'react-router-dom'
import Navbar from './Navbar';
import Home from './Home';
import Chips from './Chips';
import Candy from './Candy';
import Cola from './Cola';





function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Route exact path='/'><Home/></Route>
        <Route exact path='/chips'><Chips/></Route>
        <Route exact path='/candy'><Candy/></Route>
        <Route exact path='/cola'><Cola/></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
