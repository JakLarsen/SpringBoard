import React, { useState, useEffect } from "react";
import "./css/Routes.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import { Route, Switch} from "react-router-dom";
import Menu from "./Menu";
import MenuItem from "./MenuItem";
import NotFound from "./NotFound";
import Order from "./Order";
import OrderMenu from "./OrderMenu";

/**
 * Our main Routes, State Management, and Handlers
 */
function Routes() {

 /**
  * State Management
  * 
  * -Loading
  * -snacks
  * -drinks
  * -order
  */
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);
  let [order, setOrder] = useState([])


  /**
   * useEffect for retrieving snacks, drinks, and order on initial load
   */
  useEffect(() => {
    async function getSnacks() {
      let snacks = await SnackOrBoozeApi.getSnacks();
      setSnacks(snacks);
      setIsLoading(false);
    }
    async function getDrinks() {
      let drinks = await SnackOrBoozeApi.getDrinks();
      setDrinks(drinks);
      setIsLoading(false);
    }
    async function getOrder(){
      let order = await SnackOrBoozeApi.getOrder();
      setOrder(order)
      setIsLoading(false)
    }
    getSnacks();
    getDrinks();
    getOrder();
  }, []);

  const addSnack = (snack) => {
      setSnacks(snacks => [...snacks, snack ])
      //Could post snack as well
  }
  const addDrink = (drink) => {
      setDrinks(drinks => [...drinks, drink ])
      //Could post drink as well
  }
  const addToOrder = (item) => {
    setOrder(items => [...items, item])
      //Order I thnk I'd keep solely as state while on the site for now
  }

  /**
   * Remove the first item with a given id from your order
   */
  const removeFromOrder = (id) => {

    let yetToRemove = true
    let newOrder = order.map(x=>x)

    newOrder.map((item, idx)=> {
      if(item.id === id && yetToRemove){
        newOrder.splice(idx, 1) 
        yetToRemove = false
      } 
    })
    setOrder(newOrder)
  }

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="Routes">
      <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route exact path="/snacks">
            <Menu items={snacks} title="Snacks" addSnack={addSnack}/>
        </Route>
        <Route path="/snacks/:id">
            <MenuItem items={snacks} cantFind="/snacks" />
        </Route>
        <Route exact path="/drinks">
            <Menu items={drinks} title="Drinks" addDrink={addDrink}/>
        </Route>
        <Route path="/drinks/:id">
            <MenuItem items={drinks} cantFind="/drinks" />
        </Route>
        <Route path="/order">
            <Order items={order} title="Order" removeFromOrder={removeFromOrder}/>
            <OrderMenu items={snacks} title="Snacks" addToOrder={addToOrder} />
            <OrderMenu items={drinks} title="Drinks" addToOrder={addToOrder} />
        </Route>
        <Route component={NotFound}/>
      </Switch>
    </div>
  );
}

export default Routes;
