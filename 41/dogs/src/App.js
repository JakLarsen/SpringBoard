import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Dogs from './Dogs';
import Dog from './Dog';
import Navbar from './Navbar';
import Routes from './Routes';



function App() {
  return (

    <div className="App">
      <h1>Dog Finder 17.0</h1>

      <BrowserRouter>

        <Navbar/>
        
        <Switch>
          <Routes/>
        </Switch>

      </BrowserRouter>

    </div>
  );
}

export default App;
