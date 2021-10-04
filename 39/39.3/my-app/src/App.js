import './App.css';
import {add, mult} from './helpers'
import catsData, {meow} from './cats'
import items from './items'
import skydivingItems from './skydivingItems';
import ShoppingCart from './ShoppingCart';
import userProfiles from './userProfiles';
import Profile from './Profile';
import ProfilePage from './ProfilePage'

function App() {
  console.log(userProfiles[0])
  return (
    <div>
      {/* <ShoppingCart items = {items}/> */}
      <ShoppingCart items = {skydivingItems}/>
      <ProfilePage profiles={userProfiles}/>

    </div>
  )
}

export default App;
