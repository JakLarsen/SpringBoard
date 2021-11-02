import './App.css';
import React from 'react'
import ThemeProvider from './ThemeProvider';
import Child from './Child';
import ThemeContext from './ThemeContext'
import Navbar from './Navbar';

function App() {

  return (

    <div className="App"> 
      <ThemeProvider>
        <Navbar/>
        <Child/>
      </ThemeProvider>
    </div>
    
  );
}

export default App;
