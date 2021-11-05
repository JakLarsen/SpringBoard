import React from 'react';
import { render} from '@testing-library/react';
import OrderMenu from './OrderMenu'
import {addToOrder} from './Routes'
import { BrowserRouter, Route } from "react-router-dom";
import ourTestData from './testData'

test("renders without crashing", ()=>{
    
    render(
        <BrowserRouter>
            <Route exact path="/snacks">
                <OrderMenu items={ourTestData.snacks} title="Snacks" addToOrder={addToOrder} />
            </Route>
        </BrowserRouter>
       
    )
})

it('Matches snapshot', function(){
    const {asFragment} = render(
        <BrowserRouter>
            <Route exact path="/snacks">
                <OrderMenu items={ourTestData.snacks} title="Snacks" addToOrder={addToOrder} />
            </Route>
        </BrowserRouter>
    )
    expect(asFragment()).toMatchSnapshot()
});