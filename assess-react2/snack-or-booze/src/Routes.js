import React, { useState, useEffect } from "react";
import "./Routes.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import { Route, Switch} from "react-router-dom";
import Menu from "./Menu";
import MenuItem from "./MenuItem";
import NotFound from "./NotFound";
import Order from "./Order";
import OrderMenu from "./OrderMenu";
import StateContext from "./StateContext";



function Routes() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);
  let [order, setOrder] = useState([])



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


  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  let stateContextObj = {

  }

  return (
    <div className="Routes">
      <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <StateContext.Provider value={stateContextObj}>
          <Route exact path="/snacks">
              <Menu items={snacks} title="Snacks" />
          </Route>
          <Route path="/snacks/:id">
              <MenuItem items={snacks} cantFind="/snacks" />
          </Route>
          <Route exact path="/drinks">
              <Menu items={drinks} title="Drinks" />
          </Route>
          <Route path="/drinks/:id">
              <MenuItem items={drinks} cantFind="/drinks" />
          </Route>
          <Route path="/order">
              <Order items={order} title="Order"/>
              <OrderMenu items={snacks} title="Snacks" />
              <OrderMenu items={drinks} title="Drinks" />
          </Route>
        </StateContext.Provider>
        <Route component={NotFound}/>
      </Switch>
    </div>
  );
}

export default Routes;
