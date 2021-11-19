import React from "react";
import { BrowserRouter } from "react-router-dom";
import './css/App.css'
import NavBar from "./NavBar";
import Routes from './Routes'
import "regenerator-runtime/runtime.js";

/**
 * Main App structure
 */
function App() {

  return (
    <div className="App">

      <BrowserRouter>
        <NavBar/>
        <Routes/>
      </BrowserRouter>

    </div>
  );
}

export default App;
