import './App.css';
// import {add, mult} from './components/helpers'
import items from './components/component-data/items'
import skydivingItems from './components/component-data/skydivingItems';
import ShoppingCart from './components/ShoppingCart';
import userProfiles from './components/component-data/userProfiles';
import ProfilePage from './components/ProfilePage'
import logo from './static/img/logo.svg'
import "./static/css/App.css"
import Alert from './components/Alert';

function App() {

  return (
    <div>
      <img src={logo} alt="logo"/>
      <ShoppingCart items = {items}/>
      <ShoppingCart items = {skydivingItems}/>
      <ProfilePage profiles={userProfiles}/>
      <Alert variant="success">
        <h1>Welcome back!</h1>
      </Alert>
      <Alert variant="failure">
        <h1>OH NO!</h1>
      </Alert>

    </div>
  )
}

export default App;