import logo from './logo.svg';
import './App.css';
import {add, mult} from './helpers'
import catsData, {meow} from './cats'

function App() {
  console.log(add(4,6))
  console.log(mult(4,6))
  console.log(catsData)
  console.log(meow())
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Ok, let's do this thing.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
