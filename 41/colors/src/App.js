import {BrowserRouter, Route, Switch} from 'react-router-dom'

import './App.css';
import Routes from './Routes';





function App() {
  return (
    <div className="App">

      <BrowserRouter>
      
      <Switch>
        <Routes/>
      </Switch>
      
      </BrowserRouter>

    </div>
  );
}

export default App;
