import './App.css';
import {add, mult} from './helpers'
import catsData, {meow} from './cats'
import items from './items'
import skydivingItems from './skydivingItems';
import ShoppingCart from './ShoppingCart';

function App() {
 
  return (
    <div>
      <ShoppingCart items = {items}/>
      <ShoppingCart items = {skydivingItems}/>
    </div>
  )
}

export default App;
