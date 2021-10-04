import logo from './logo.svg';
import './css/App.css';
import Title from './components/Title';
import Pokedex from './components/Pokedex';
import Pokecard from './components/Pokecard';
import pokemon from './component-data/pokemon';


function App() {
  console.log(pokemon[0])

  return (
    <div className="App">

      <Title title="Pokedex"/>
      {/* <Pokecard name={pokemon[0].name} img={pokemon[0].img}/> */}
      <Pokedex pokemon={pokemon}/>



    </div>
  );
}

export default App;
