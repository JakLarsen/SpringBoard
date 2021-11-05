import React from 'react';
import { render} from '@testing-library/react';
import NavBar from './NavBar';
import { BrowserRouter} from "react-router-dom";

let title = "Snacks"

test("renders without crashing", ()=>{
    
    render(
        <BrowserRouter>
            <NavBar/>
        </BrowserRouter>   
    )
})

it('Matches snapshot', function(){
    const {asFragment} = render(
        <BrowserRouter>
            <NavBar/>
        </BrowserRouter>   
    )
    expect(asFragment()).toMatchSnapshot()
});