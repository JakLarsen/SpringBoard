import logo from './logo.svg';
import './App.css';
import Dice from './Dice';

function App() {
  return (
    <div className="App">
      <Dice numDice={4} maxVal={6} title={'Normal Dice'}/>
      <Dice numDice={6} maxVal={20} title={'D20s'}/>
    </div>
  );
}

export default App;
