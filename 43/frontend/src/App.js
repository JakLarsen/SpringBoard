import './css/App.css';
import { BrowserRouter } from "react-router-dom";
import Navbar from './Navbar';
import RouteHandler from './RouteHandler';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <RouteHandler/>
      </BrowserRouter>  
    </div>
  );
}

export default App;
