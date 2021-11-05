import React from 'react';
import { render} from '@testing-library/react';
import Menu from './Menu'
import {addSnack, addDrink} from './Routes'
import { BrowserRouter, Route } from "react-router-dom";
import ourTestData from './testData'



let ourRenderView = (
    <BrowserRouter>
            <Route exact path="/snacks">
                <Menu items={ourTestData.snacks} title="Snacks" addSnack={addSnack}/>
            </Route>
    </BrowserRouter>
)

test("renders without crashing", ()=>{
    render(ourRenderView)
})

it('Matches Snack Menu snapshot', function(){
    const {asFragment} = render(
        <BrowserRouter>
            <Route exact path="/snacks">
                <Menu items={ourTestData.snacks} title="Snacks" addSnack={addSnack}/>
            </Route>
        </BrowserRouter>
    )
    expect(asFragment()).toMatchSnapshot()
});

// it('Matches Drink Menu snapshot', function(){
//     const {asFragment} = render(
//         <BrowserRouter>
//             <Route exact path="/snacks">
//                 <Menu items={ourTestData.drinks} title="Drinks" addDrinks={addDrink}/>
//             </Route>
//         </BrowserRouter>
//     )
//     expect(asFragment()).toMatchSnapshot()
// });