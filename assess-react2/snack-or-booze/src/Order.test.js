import React from 'react';
import { render} from '@testing-library/react';
import Order from './Order'
import {removeFromOrder} from './Routes'
import { BrowserRouter, Route } from "react-router-dom";
import ourTestData from './testData'

test("renders without crashing", ()=>{
    
    render(
        <BrowserRouter>
            <Route exact path="/order">
                <Order items={ourTestData.order} title="Order" removeFromOrder={removeFromOrder}/>
            </Route>
        </BrowserRouter>
       
    )
})