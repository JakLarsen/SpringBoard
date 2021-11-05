import React from 'react';
import { render, fireEvent} from '@testing-library/react';
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

it('Should add new item to snack menu', function(){
    //Get queryByText and getByLabelText
    const {queryByText, getByLabelText} = render(<MenuItemForm title={'Snacks'} addSnack={addSnack} addDrink={addDrink}/>)
    //Find our input from our label text
    const name = getByLabelText('Name:')
    //Find our submit btn by our btn text
    const btn = queryByText('Add item')
    //Expect 'Popcorn' not to be found in the document
    expect(queryByText('Popcorn')).not.toBeInTheDocument();
    // Give our input a value of 'Popcorn'
    fireEvent.change(name, {target:{value:'Popcorn'}})
    // fireEvent.click(btn)
    // expect(queryByText('Popcorn')).toBeInTheDocument();
});
