import './App.css';
import {Clicker, MouseOver, Scroll } from './Clicker'
import ButtonGroup from './ButtonGroup';
import Counter from './Counter'
import NumberGame from './NumberGame';

function App() {
  return (
    <div className="App">
      <h1>Following Along</h1>
      <Clicker/>
      <MouseOver/>
      <Scroll/>
      <ButtonGroup/>
      <Counter/>
      <NumberGame/>
    </div>
  );
}

export default App;
