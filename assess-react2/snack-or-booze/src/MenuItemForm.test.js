import React from 'react';
import { render, screen } from '@testing-library/react';
import MenuItemForm from './MenuItemForm'
import {addSnack, addDrink} from './Routes'

let title = "Snacks"

test("renders without crashing", ()=>{
    
    render(
        <MenuItemForm title={title} addSnack={addSnack} addDrink={addDrink}/>
    )
})

it('Matches snapshot', function(){
    const {asFragment} = render(
        <MenuItemForm title={title} addSnack={addSnack} addDrink={addDrink}/>
    )
    expect(asFragment()).toMatchSnapshot()
});