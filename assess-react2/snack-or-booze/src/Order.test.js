import React from 'react';
import { render} from '@testing-library/react';
import Order from './Order'
import {removeFromOrder} from './Routes'
import { BrowserRouter, Route } from "react-router-dom";
import ourTestData from './testData'


let ourRenderView = (
    <BrowserRouter>
        <Route exact path="/order">
            <Order items={ourTestData.order} title="Order" removeFromOrder={removeFromOrder}/>
        </Route>
    </BrowserRouter>
)


test("renders without crashing", ()=>{
    
    render(ourRenderView)
})

it('Matches snapshot', function(){
    const {asFragment} = render(
        <BrowserRouter>
        <Route exact path="/order">
            <Order items={ourTestData.order} title="Order" removeFromOrder={removeFromOrder}/>
        </Route>
    </BrowserRouter> 
    )
    expect(asFragment()).toMatchSnapshot()
});