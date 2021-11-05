import React from 'react';
import { render, screen } from '@testing-library/react';
import Menu from './Menu'
import {addSnack} from './Routes'
import "./css/Routes.css";
import { BrowserRouter, Route } from "react-router-dom";
import ourTestData from './testData'

test("renders without crashing", ()=>{
    
    render(
        <BrowserRouter>
            <Route exact path="/snacks">
                <Menu items={ourTestData.snacks} title="Snacks" addSnack={addSnack}/>
            </Route>
        </BrowserRouter>
       
    )
})