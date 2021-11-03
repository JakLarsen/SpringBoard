import React from "react";
import { BrowserRouter } from "react-router-dom";
import './App.css'
import NavBar from "./NavBar";
import Routes from './Routes'

/**
 * Main App structure
 */
function App() {

  return (
    <div className="App">

      <BrowserRouter>
        <NavBar />
        <Routes/>
      </BrowserRouter>

    </div>
  );
}

export default App;
