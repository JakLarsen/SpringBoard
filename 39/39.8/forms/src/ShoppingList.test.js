import React from 'react';
import {render, fireEvent} from "@testing-library/react"
import ShoppingList from './ShoppingList';


it('Renders without crashing', function(){
    render(<ShoppingList/>)
});

it('Matches snapshot', function(){
    const {asFragment} = render(<ShoppingList/>)
    expect(asFragment()).toMatchSnapshot()
});

it('Should add new item: Name and Quantity inputs function properly', function() {
    //Get queryByText and getByLabelText
    const {queryByText, getByLabelText} = render(<ShoppingList/>)
    //Find our input from our label text
    const input = getByLabelText('Name')
    const qtyInput = getByLabelText('Quantity')
    //Find our submit btn by our btn text
    const btn = queryByText('Done')
    //Expect 'Product: Chocolate Milk' to not be found in the document yet
    expect(queryByText('Product: Chocolate Milk')).not.toBeInTheDocument();
    expect(queryByText('Amount: 7')).not.toBeInTheDocument();
    //Give our input a value of 'Chocolate Milk'
    fireEvent.change(input, {target: {value: 'Chocolate Milk'}})
    fireEvent.change(qtyInput, {target: {value: 7}})
    //Submit our form
    fireEvent.click(btn)
    //Now expect our full label + value product to have be added to the dom
    expect(queryByText('Product: Chocolate Milk')).toBeInTheDocument();
    expect(queryByText('Amount: 7')).toBeInTheDocument();

});
