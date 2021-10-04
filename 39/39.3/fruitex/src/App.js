import './App.css';
import {choice, remove} from './components/helpers'
import {fruits} from './component-data/fruits'
import FruitConvo from './components/FruitConvo'

function App() {
  return (
    <div className="App">
      <FruitConvo fruits={fruits}/>
    </div>
  );
}

export default App;
